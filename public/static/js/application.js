function isScrolledIntoView(t) {
    var e = !1;
    try {
        var n = $(window).scrollTop(),
            i = n + $(window).height(),
            s = $(t).offset().top,
            o = s + $(t).height();
        e = s > n && i > o
    } catch (r) {}
    return e
}! function (t, e) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = t.document ? e(t, !0) : function (t) {
        if (!t.document) throw new Error("jQuery requires a window with a document");
        return e(t)
    } : e(t)
}("undefined" != typeof window ? window : this, function (t, e) {
    function n(t) {
        var e = t.length,
            n = st.type(t);
        return "function" === n || st.isWindow(t) ? !1 : 1 === t.nodeType && e ? !0 : "array" === n || 0 === e || "number" == typeof e && e > 0 && e - 1 in t
    }

    function i(t, e, n) {
        if (st.isFunction(e)) return st.grep(t, function (t, i) {
            return !!e.call(t, i, t) !== n
        });
        if (e.nodeType) return st.grep(t, function (t) {
            return t === e !== n
        });
        if ("string" == typeof e) {
            if (dt.test(e)) return st.filter(e, t, n);
            e = st.filter(e, t)
        }
        return st.grep(t, function (t) {
            return st.inArray(t, e) >= 0 !== n
        })
    }

    function s(t, e) {
        do t = t[e]; while (t && 1 !== t.nodeType);
        return t
    }

    function o(t) {
        var e = _t[t] = {};
        return st.each(t.match(bt) || [], function (t, n) {
            e[n] = !0
        }), e
    }

    function r() {
        pt.addEventListener ? (pt.removeEventListener("DOMContentLoaded", a, !1), t.removeEventListener("load", a, !1)) : (pt.detachEvent("onreadystatechange", a), t.detachEvent("onload", a))
    }

    function a() {
        (pt.addEventListener || "load" === event.type || "complete" === pt.readyState) && (r(), st.ready())
    }

    function l(t, e, n) {
        if (void 0 === n && 1 === t.nodeType) {
            var i = "data-" + e.replace(Ct, "-$1").toLowerCase();
            if (n = t.getAttribute(i), "string" == typeof n) {
                try {
                    n = "true" === n ? !0 : "false" === n ? !1 : "null" === n ? null : +n + "" === n ? +n : St.test(n) ? st.parseJSON(n) : n
                } catch (s) {}
                st.data(t, e, n)
            } else n = void 0
        }
        return n
    }

    function u(t) {
        var e;
        for (e in t)
            if (("data" !== e || !st.isEmptyObject(t[e])) && "toJSON" !== e) return !1;
        return !0
    }

    function c(t, e, n, i) {
        if (st.acceptData(t)) {
            var s, o, r = st.expando,
                a = t.nodeType,
                l = a ? st.cache : t,
                u = a ? t[r] : t[r] && r;
            if (u && l[u] && (i || l[u].data) || void 0 !== n || "string" != typeof e) return u || (u = a ? t[r] = G.pop() || st.guid++ : r), l[u] || (l[u] = a ? {} : {
                toJSON: st.noop
            }), ("object" == typeof e || "function" == typeof e) && (i ? l[u] = st.extend(l[u], e) : l[u].data = st.extend(l[u].data, e)), o = l[u], i || (o.data || (o.data = {}), o = o.data), void 0 !== n && (o[st.camelCase(e)] = n), "string" == typeof e ? (s = o[e], null == s && (s = o[st.camelCase(e)])) : s = o, s
        }
    }

    function h(t, e, n) {
        if (st.acceptData(t)) {
            var i, s, o = t.nodeType,
                r = o ? st.cache : t,
                a = o ? t[st.expando] : st.expando;
            if (r[a]) {
                if (e && (i = n ? r[a] : r[a].data)) {
                    st.isArray(e) ? e = e.concat(st.map(e, st.camelCase)) : e in i ? e = [e] : (e = st.camelCase(e), e = e in i ? [e] : e.split(" ")), s = e.length;
                    for (; s--;) delete i[e[s]];
                    if (n ? !u(i) : !st.isEmptyObject(i)) return
                }(n || (delete r[a].data, u(r[a]))) && (o ? st.cleanData([t], !0) : nt.deleteExpando || r != r.window ? delete r[a] : r[a] = null)
            }
        }
    }

    function d() {
        return !0
    }

    function f() {
        return !1
    }

    function p() {
        try {
            return pt.activeElement
        } catch (t) {}
    }

    function g(t) {
        var e = Pt.split("|"),
            n = t.createDocumentFragment();
        if (n.createElement)
            for (; e.length;) n.createElement(e.pop());
        return n
    }

    function m(t, e) {
        var n, i, s = 0,
            o = typeof t.getElementsByTagName !== kt ? t.getElementsByTagName(e || "*") : typeof t.querySelectorAll !== kt ? t.querySelectorAll(e || "*") : void 0;
        if (!o)
            for (o = [], n = t.childNodes || t; null != (i = n[s]); s++) !e || st.nodeName(i, e) ? o.push(i) : st.merge(o, m(i, e));
        return void 0 === e || e && st.nodeName(t, e) ? st.merge([t], o) : o
    }

    function v(t) {
        At.test(t.type) && (t.defaultChecked = t.checked)
    }

    function y(t, e) {
        return st.nodeName(t, "table") && st.nodeName(11 !== e.nodeType ? e : e.firstChild, "tr") ? t.getElementsByTagName("tbody")[0] || t.appendChild(t.ownerDocument.createElement("tbody")) : t
    }

    function b(t) {
        return t.type = (null !== st.find.attr(t, "type")) + "/" + t.type, t
    }

    function _(t) {
        var e = Vt.exec(t.type);
        return e ? t.type = e[1] : t.removeAttribute("type"), t
    }

    function w(t, e) {
        for (var n, i = 0; null != (n = t[i]); i++) st._data(n, "globalEval", !e || st._data(e[i], "globalEval"))
    }

    function x(t, e) {
        if (1 === e.nodeType && st.hasData(t)) {
            var n, i, s, o = st._data(t),
                r = st._data(e, o),
                a = o.events;
            if (a) {
                delete r.handle, r.events = {};
                for (n in a)
                    for (i = 0, s = a[n].length; s > i; i++) st.event.add(e, n, a[n][i])
            }
            r.data && (r.data = st.extend({}, r.data))
        }
    }

    function k(t, e) {
        var n, i, s;
        if (1 === e.nodeType) {
            if (n = e.nodeName.toLowerCase(), !nt.noCloneEvent && e[st.expando]) {
                s = st._data(e);
                for (i in s.events) st.removeEvent(e, i, s.handle);
                e.removeAttribute(st.expando)
            }
            "script" === n && e.text !== t.text ? (b(e).text = t.text, _(e)) : "object" === n ? (e.parentNode && (e.outerHTML = t.outerHTML), nt.html5Clone && t.innerHTML && !st.trim(e.innerHTML) && (e.innerHTML = t.innerHTML)) : "input" === n && At.test(t.type) ? (e.defaultChecked = e.checked = t.checked, e.value !== t.value && (e.value = t.value)) : "option" === n ? e.defaultSelected = e.selected = t.defaultSelected : ("input" === n || "textarea" === n) && (e.defaultValue = t.defaultValue)
        }
    }

    function S(e, n) {
        var i, s = st(n.createElement(e)).appendTo(n.body),
            o = t.getDefaultComputedStyle && (i = t.getDefaultComputedStyle(s[0])) ? i.display : st.css(s[0], "display");
        return s.detach(), o
    }

    function C(t) {
        var e = pt,
            n = Zt[t];
        return n || (n = S(t, e), "none" !== n && n || (Jt = (Jt || st("<iframe frameborder='0' width='0' height='0'/>")).appendTo(e.documentElement), e = (Jt[0].contentWindow || Jt[0].contentDocument).document, e.write(), e.close(), n = S(t, e), Jt.detach()), Zt[t] = n), n
    }

    function T(t, e) {
        return {
            get: function () {
                var n = t();
                if (null != n) return n ? void delete this.get : (this.get = e).apply(this, arguments)
            }
        }
    }

    function D(t, e) {
        if (e in t) return e;
        for (var n = e.charAt(0).toUpperCase() + e.slice(1), i = e, s = de.length; s--;)
            if (e = de[s] + n, e in t) return e;
        return i
    }

    function E(t, e) {
        for (var n, i, s, o = [], r = 0, a = t.length; a > r; r++) i = t[r], i.style && (o[r] = st._data(i, "olddisplay"), n = i.style.display, e ? (o[r] || "none" !== n || (i.style.display = ""), "" === i.style.display && Et(i) && (o[r] = st._data(i, "olddisplay", C(i.nodeName)))) : (s = Et(i), (n && "none" !== n || !s) && st._data(i, "olddisplay", s ? n : st.css(i, "display"))));
        for (r = 0; a > r; r++) i = t[r], i.style && (e && "none" !== i.style.display && "" !== i.style.display || (i.style.display = e ? o[r] || "" : "none"));
        return t
    }

    function j(t, e, n) {
        var i = le.exec(e);
        return i ? Math.max(0, i[1] - (n || 0)) + (i[2] || "px") : e
    }

    function A(t, e, n, i, s) {
        for (var o = n === (i ? "border" : "content") ? 4 : "width" === e ? 1 : 0, r = 0; 4 > o; o += 2) "margin" === n && (r += st.css(t, n + Dt[o], !0, s)), i ? ("content" === n && (r -= st.css(t, "padding" + Dt[o], !0, s)), "margin" !== n && (r -= st.css(t, "border" + Dt[o] + "Width", !0, s))) : (r += st.css(t, "padding" + Dt[o], !0, s), "padding" !== n && (r += st.css(t, "border" + Dt[o] + "Width", !0, s)));
        return r
    }

    function $(t, e, n) {
        var i = !0,
            s = "width" === e ? t.offsetWidth : t.offsetHeight,
            o = te(t),
            r = nt.boxSizing && "border-box" === st.css(t, "boxSizing", !1, o);
        if (0 >= s || null == s) {
            if (s = ee(t, e, o), (0 > s || null == s) && (s = t.style[e]), ie.test(s)) return s;
            i = r && (nt.boxSizingReliable() || s === t.style[e]), s = parseFloat(s) || 0
        }
        return s + A(t, e, n || (r ? "border" : "content"), i, o) + "px"
    }

    function N(t, e, n, i, s) {
        return new N.prototype.init(t, e, n, i, s)
    }

    function M() {
        return setTimeout(function () {
            fe = void 0
        }), fe = st.now()
    }

    function L(t, e) {
        var n, i = {
                height: t
            },
            s = 0;
        for (e = e ? 1 : 0; 4 > s; s += 2 - e) n = Dt[s], i["margin" + n] = i["padding" + n] = t;
        return e && (i.opacity = i.width = t), i
    }

    function O(t, e, n) {
        for (var i, s = (be[e] || []).concat(be["*"]), o = 0, r = s.length; r > o; o++)
            if (i = s[o].call(n, e, t)) return i
    }

    function P(t, e, n) {
        var i, s, o, r, a, l, u, c, h = this,
            d = {},
            f = t.style,
            p = t.nodeType && Et(t),
            g = st._data(t, "fxshow");
        n.queue || (a = st._queueHooks(t, "fx"), null == a.unqueued && (a.unqueued = 0, l = a.empty.fire, a.empty.fire = function () {
            a.unqueued || l()
        }), a.unqueued++, h.always(function () {
            h.always(function () {
                a.unqueued--, st.queue(t, "fx").length || a.empty.fire()
            })
        })), 1 === t.nodeType && ("height" in e || "width" in e) && (n.overflow = [f.overflow, f.overflowX, f.overflowY], u = st.css(t, "display"), c = "none" === u ? st._data(t, "olddisplay") || C(t.nodeName) : u, "inline" === c && "none" === st.css(t, "float") && (nt.inlineBlockNeedsLayout && "inline" !== C(t.nodeName) ? f.zoom = 1 : f.display = "inline-block")), n.overflow && (f.overflow = "hidden", nt.shrinkWrapBlocks() || h.always(function () {
            f.overflow = n.overflow[0], f.overflowX = n.overflow[1], f.overflowY = n.overflow[2]
        }));
        for (i in e)
            if (s = e[i], ge.exec(s)) {
                if (delete e[i], o = o || "toggle" === s, s === (p ? "hide" : "show")) {
                    if ("show" !== s || !g || void 0 === g[i]) continue;
                    p = !0
                }
                d[i] = g && g[i] || st.style(t, i)
            } else u = void 0;
        if (st.isEmptyObject(d)) "inline" === ("none" === u ? C(t.nodeName) : u) && (f.display = u);
        else {
            g ? "hidden" in g && (p = g.hidden) : g = st._data(t, "fxshow", {}), o && (g.hidden = !p), p ? st(t).show() : h.done(function () {
                st(t).hide()
            }), h.done(function () {
                var e;
                st._removeData(t, "fxshow");
                for (e in d) st.style(t, e, d[e])
            });
            for (i in d) r = O(p ? g[i] : 0, i, h), i in g || (g[i] = r.start, p && (r.end = r.start, r.start = "width" === i || "height" === i ? 1 : 0))
        }
    }

    function F(t, e) {
        var n, i, s, o, r;
        for (n in t)
            if (i = st.camelCase(n), s = e[i], o = t[n], st.isArray(o) && (s = o[1], o = t[n] = o[0]), n !== i && (t[i] = o, delete t[n]), r = st.cssHooks[i], r && "expand" in r) {
                o = r.expand(o), delete t[i];
                for (n in o) n in t || (t[n] = o[n], e[n] = s)
            } else e[i] = s
    }

    function I(t, e, n) {
        var i, s, o = 0,
            r = ye.length,
            a = st.Deferred().always(function () {
                delete l.elem
            }),
            l = function () {
                if (s) return !1;
                for (var e = fe || M(), n = Math.max(0, u.startTime + u.duration - e), i = n / u.duration || 0, o = 1 - i, r = 0, l = u.tweens.length; l > r; r++) u.tweens[r].run(o);
                return a.notifyWith(t, [u, o, n]), 1 > o && l ? n : (a.resolveWith(t, [u]), !1)
            },
            u = a.promise({
                elem: t,
                props: st.extend({}, e),
                opts: st.extend(!0, {
                    specialEasing: {}
                }, n),
                originalProperties: e,
                originalOptions: n,
                startTime: fe || M(),
                duration: n.duration,
                tweens: [],
                createTween: function (e, n) {
                    var i = st.Tween(t, u.opts, e, n, u.opts.specialEasing[e] || u.opts.easing);
                    return u.tweens.push(i), i
                },
                stop: function (e) {
                    var n = 0,
                        i = e ? u.tweens.length : 0;
                    if (s) return this;
                    for (s = !0; i > n; n++) u.tweens[n].run(1);
                    return e ? a.resolveWith(t, [u, e]) : a.rejectWith(t, [u, e]), this
                }
            }),
            c = u.props;
        for (F(c, u.opts.specialEasing); r > o; o++)
            if (i = ye[o].call(u, t, c, u.opts)) return i;
        return st.map(c, O, u), st.isFunction(u.opts.start) && u.opts.start.call(t, u), st.fx.timer(st.extend(l, {
            elem: t,
            anim: u,
            queue: u.opts.queue
        })), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
    }

    function R(t) {
        return function (e, n) {
            "string" != typeof e && (n = e, e = "*");
            var i, s = 0,
                o = e.toLowerCase().match(bt) || [];
            if (st.isFunction(n))
                for (; i = o[s++];) "+" === i.charAt(0) ? (i = i.slice(1) || "*", (t[i] = t[i] || []).unshift(n)) : (t[i] = t[i] || []).push(n)
        }
    }

    function q(t, e, n, i) {
        function s(a) {
            var l;
            return o[a] = !0, st.each(t[a] || [], function (t, a) {
                var u = a(e, n, i);
                return "string" != typeof u || r || o[u] ? r ? !(l = u) : void 0 : (e.dataTypes.unshift(u), s(u), !1)
            }), l
        }
        var o = {},
            r = t === Ue;
        return s(e.dataTypes[0]) || !o["*"] && s("*")
    }

    function H(t, e) {
        var n, i, s = st.ajaxSettings.flatOptions || {};
        for (i in e) void 0 !== e[i] && ((s[i] ? t : n || (n = {}))[i] = e[i]);
        return n && st.extend(!0, t, n), t
    }

    function z(t, e, n) {
        for (var i, s, o, r, a = t.contents, l = t.dataTypes;
            "*" === l[0];) l.shift(), void 0 === s && (s = t.mimeType || e.getResponseHeader("Content-Type"));
        if (s)
            for (r in a)
                if (a[r] && a[r].test(s)) {
                    l.unshift(r);
                    break
                }
        if (l[0] in n) o = l[0];
        else {
            for (r in n) {
                if (!l[0] || t.converters[r + " " + l[0]]) {
                    o = r;
                    break
                }
                i || (i = r)
            }
            o = o || i
        }
        return o ? (o !== l[0] && l.unshift(o), n[o]) : void 0
    }

    function U(t, e, n, i) {
        var s, o, r, a, l, u = {},
            c = t.dataTypes.slice();
        if (c[1])
            for (r in t.converters) u[r.toLowerCase()] = t.converters[r];
        for (o = c.shift(); o;)
            if (t.responseFields[o] && (n[t.responseFields[o]] = e), !l && i && t.dataFilter && (e = t.dataFilter(e, t.dataType)), l = o, o = c.shift())
                if ("*" === o) o = l;
                else if ("*" !== l && l !== o) {
            if (r = u[l + " " + o] || u["* " + o], !r)
                for (s in u)
                    if (a = s.split(" "), a[1] === o && (r = u[l + " " + a[0]] || u["* " + a[0]])) {
                        r === !0 ? r = u[s] : u[s] !== !0 && (o = a[0], c.unshift(a[1]));
                        break
                    }
            if (r !== !0)
                if (r && t["throws"]) e = r(e);
                else try {
                    e = r(e)
                } catch (h) {
                    return {
                        state: "parsererror",
                        error: r ? h : "No conversion from " + l + " to " + o
                    }
                }
        }
        return {
            state: "success",
            data: e
        }
    }

    function B(t, e, n, i) {
        var s;
        if (st.isArray(e)) st.each(e, function (e, s) {
            n || Ve.test(t) ? i(t, s) : B(t + "[" + ("object" == typeof s ? e : "") + "]", s, n, i)
        });
        else if (n || "object" !== st.type(e)) i(t, e);
        else
            for (s in e) B(t + "[" + s + "]", e[s], n, i)
    }

    function W() {
        try {
            return new t.XMLHttpRequest
        } catch (e) {}
    }

    function Y() {
        try {
            return new t.ActiveXObject("Microsoft.XMLHTTP")
        } catch (e) {}
    }

    function V(t) {
        return st.isWindow(t) ? t : 9 === t.nodeType ? t.defaultView || t.parentWindow : !1
    }
    var G = [],
        Q = G.slice,
        K = G.concat,
        X = G.push,
        J = G.indexOf,
        Z = {},
        tt = Z.toString,
        et = Z.hasOwnProperty,
        nt = {},
        it = "1.11.1",
        st = function (t, e) {
            return new st.fn.init(t, e)
        },
        ot = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        rt = /^-ms-/,
        at = /-([\da-z])/gi,
        lt = function (t, e) {
            return e.toUpperCase()
        };
    st.fn = st.prototype = {
        jquery: it,
        constructor: st,
        selector: "",
        length: 0,
        toArray: function () {
            return Q.call(this)
        },
        get: function (t) {
            return null != t ? 0 > t ? this[t + this.length] : this[t] : Q.call(this)
        },
        pushStack: function (t) {
            var e = st.merge(this.constructor(), t);
            return e.prevObject = this, e.context = this.context, e
        },
        each: function (t, e) {
            return st.each(this, t, e)
        },
        map: function (t) {
            return this.pushStack(st.map(this, function (e, n) {
                return t.call(e, n, e)
            }))
        },
        slice: function () {
            return this.pushStack(Q.apply(this, arguments))
        },
        first: function () {
            return this.eq(0)
        },
        last: function () {
            return this.eq(-1)
        },
        eq: function (t) {
            var e = this.length,
                n = +t + (0 > t ? e : 0);
            return this.pushStack(n >= 0 && e > n ? [this[n]] : [])
        },
        end: function () {
            return this.prevObject || this.constructor(null)
        },
        push: X,
        sort: G.sort,
        splice: G.splice
    }, st.extend = st.fn.extend = function () {
        var t, e, n, i, s, o, r = arguments[0] || {},
            a = 1,
            l = arguments.length,
            u = !1;
        for ("boolean" == typeof r && (u = r, r = arguments[a] || {}, a++), "object" == typeof r || st.isFunction(r) || (r = {}), a === l && (r = this, a--); l > a; a++)
            if (null != (s = arguments[a]))
                for (i in s) t = r[i], n = s[i], r !== n && (u && n && (st.isPlainObject(n) || (e = st.isArray(n))) ? (e ? (e = !1, o = t && st.isArray(t) ? t : []) : o = t && st.isPlainObject(t) ? t : {}, r[i] = st.extend(u, o, n)) : void 0 !== n && (r[i] = n));
        return r
    }, st.extend({
        expando: "jQuery" + (it + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function (t) {
            throw new Error(t)
        },
        noop: function () {},
        isFunction: function (t) {
            return "function" === st.type(t)
        },
        isArray: Array.isArray || function (t) {
            return "array" === st.type(t)
        },
        isWindow: function (t) {
            return null != t && t == t.window
        },
        isNumeric: function (t) {
            return !st.isArray(t) && t - parseFloat(t) >= 0
        },
        isEmptyObject: function (t) {
            var e;
            for (e in t) return !1;
            return !0
        },
        isPlainObject: function (t) {
            var e;
            if (!t || "object" !== st.type(t) || t.nodeType || st.isWindow(t)) return !1;
            try {
                if (t.constructor && !et.call(t, "constructor") && !et.call(t.constructor.prototype, "isPrototypeOf")) return !1
            } catch (n) {
                return !1
            }
            if (nt.ownLast)
                for (e in t) return et.call(t, e);
            for (e in t);
            return void 0 === e || et.call(t, e)
        },
        type: function (t) {
            return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? Z[tt.call(t)] || "object" : typeof t
        },
        globalEval: function (e) {
            e && st.trim(e) && (t.execScript || function (e) {
                t.eval.call(t, e)
            })(e)
        },
        camelCase: function (t) {
            return t.replace(rt, "ms-").replace(at, lt)
        },
        nodeName: function (t, e) {
            return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
        },
        each: function (t, e, i) {
            var s, o = 0,
                r = t.length,
                a = n(t);
            if (i) {
                if (a)
                    for (; r > o && (s = e.apply(t[o], i), s !== !1); o++);
                else
                    for (o in t)
                        if (s = e.apply(t[o], i), s === !1) break
            } else if (a)
                for (; r > o && (s = e.call(t[o], o, t[o]), s !== !1); o++);
            else
                for (o in t)
                    if (s = e.call(t[o], o, t[o]), s === !1) break;
            return t
        },
        trim: function (t) {
            return null == t ? "" : (t + "").replace(ot, "")
        },
        makeArray: function (t, e) {
            var i = e || [];
            return null != t && (n(Object(t)) ? st.merge(i, "string" == typeof t ? [t] : t) : X.call(i, t)), i
        },
        inArray: function (t, e, n) {
            var i;
            if (e) {
                if (J) return J.call(e, t, n);
                for (i = e.length, n = n ? 0 > n ? Math.max(0, i + n) : n : 0; i > n; n++)
                    if (n in e && e[n] === t) return n
            }
            return -1
        },
        merge: function (t, e) {
            for (var n = +e.length, i = 0, s = t.length; n > i;) t[s++] = e[i++];
            if (n !== n)
                for (; void 0 !== e[i];) t[s++] = e[i++];
            return t.length = s, t
        },
        grep: function (t, e, n) {
            for (var i, s = [], o = 0, r = t.length, a = !n; r > o; o++) i = !e(t[o], o), i !== a && s.push(t[o]);
            return s
        },
        map: function (t, e, i) {
            var s, o = 0,
                r = t.length,
                a = n(t),
                l = [];
            if (a)
                for (; r > o; o++) s = e(t[o], o, i), null != s && l.push(s);
            else
                for (o in t) s = e(t[o], o, i), null != s && l.push(s);
            return K.apply([], l)
        },
        guid: 1,
        proxy: function (t, e) {
            var n, i, s;
            return "string" == typeof e && (s = t[e], e = t, t = s), st.isFunction(t) ? (n = Q.call(arguments, 2), i = function () {
                return t.apply(e || this, n.concat(Q.call(arguments)))
            }, i.guid = t.guid = t.guid || st.guid++, i) : void 0
        },
        now: function () {
            return +new Date
        },
        support: nt
    }), st.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (t, e) {
        Z["[object " + e + "]"] = e.toLowerCase()
    });
    var ut = function (t) {
        function e(t, e, n, i) {
            var s, o, r, a, l, u, h, f, p, g;
            if ((e ? e.ownerDocument || e : q) !== N && $(e), e = e || N, n = n || [], !t || "string" != typeof t) return n;
            if (1 !== (a = e.nodeType) && 9 !== a) return [];
            if (L && !i) {
                if (s = yt.exec(t))
                    if (r = s[1]) {
                        if (9 === a) {
                            if (o = e.getElementById(r), !o || !o.parentNode) return n;
                            if (o.id === r) return n.push(o), n
                        } else if (e.ownerDocument && (o = e.ownerDocument.getElementById(r)) && I(e, o) && o.id === r) return n.push(o), n
                    } else {
                        if (s[2]) return Z.apply(n, e.getElementsByTagName(t)), n;
                        if ((r = s[3]) && w.getElementsByClassName && e.getElementsByClassName) return Z.apply(n, e.getElementsByClassName(r)), n
                    }
                if (w.qsa && (!O || !O.test(t))) {
                    if (f = h = R, p = e, g = 9 === a && t, 1 === a && "object" !== e.nodeName.toLowerCase()) {
                        for (u = C(t), (h = e.getAttribute("id")) ? f = h.replace(_t, "\\$&") : e.setAttribute("id", f), f = "[id='" + f + "'] ", l = u.length; l--;) u[l] = f + d(u[l]);
                        p = bt.test(t) && c(e.parentNode) || e, g = u.join(",")
                    }
                    if (g) try {
                        return Z.apply(n, p.querySelectorAll(g)), n
                    } catch (m) {} finally {
                        h || e.removeAttribute("id")
                    }
                }
            }
            return D(t.replace(lt, "$1"), e, n, i)
        }

        function n() {
            function t(n, i) {
                return e.push(n + " ") > x.cacheLength && delete t[e.shift()], t[n + " "] = i
            }
            var e = [];
            return t
        }

        function i(t) {
            return t[R] = !0, t
        }

        function s(t) {
            var e = N.createElement("div");
            try {
                return !!t(e)
            } catch (n) {
                return !1
            } finally {
                e.parentNode && e.parentNode.removeChild(e), e = null
            }
        }

        function o(t, e) {
            for (var n = t.split("|"), i = t.length; i--;) x.attrHandle[n[i]] = e
        }

        function r(t, e) {
            var n = e && t,
                i = n && 1 === t.nodeType && 1 === e.nodeType && (~e.sourceIndex || G) - (~t.sourceIndex || G);
            if (i) return i;
            if (n)
                for (; n = n.nextSibling;)
                    if (n === e) return -1;
            return t ? 1 : -1
        }

        function a(t) {
            return function (e) {
                var n = e.nodeName.toLowerCase();
                return "input" === n && e.type === t
            }
        }

        function l(t) {
            return function (e) {
                var n = e.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && e.type === t
            }
        }

        function u(t) {
            return i(function (e) {
                return e = +e, i(function (n, i) {
                    for (var s, o = t([], n.length, e), r = o.length; r--;) n[s = o[r]] && (n[s] = !(i[s] = n[s]))
                })
            })
        }

        function c(t) {
            return t && typeof t.getElementsByTagName !== V && t
        }

        function h() {}

        function d(t) {
            for (var e = 0, n = t.length, i = ""; n > e; e++) i += t[e].value;
            return i
        }

        function f(t, e, n) {
            var i = e.dir,
                s = n && "parentNode" === i,
                o = z++;
            return e.first ? function (e, n, o) {
                for (; e = e[i];)
                    if (1 === e.nodeType || s) return t(e, n, o)
            } : function (e, n, r) {
                var a, l, u = [H, o];
                if (r) {
                    for (; e = e[i];)
                        if ((1 === e.nodeType || s) && t(e, n, r)) return !0
                } else
                    for (; e = e[i];)
                        if (1 === e.nodeType || s) {
                            if (l = e[R] || (e[R] = {}), (a = l[i]) && a[0] === H && a[1] === o) return u[2] = a[2];
                            if (l[i] = u, u[2] = t(e, n, r)) return !0
                        }
            }
        }

        function p(t) {
            return t.length > 1 ? function (e, n, i) {
                for (var s = t.length; s--;)
                    if (!t[s](e, n, i)) return !1;
                return !0
            } : t[0]
        }

        function g(t, n, i) {
            for (var s = 0, o = n.length; o > s; s++) e(t, n[s], i);
            return i
        }

        function m(t, e, n, i, s) {
            for (var o, r = [], a = 0, l = t.length, u = null != e; l > a; a++)(o = t[a]) && (!n || n(o, i, s)) && (r.push(o), u && e.push(a));
            return r
        }

        function v(t, e, n, s, o, r) {
            return s && !s[R] && (s = v(s)), o && !o[R] && (o = v(o, r)), i(function (i, r, a, l) {
                var u, c, h, d = [],
                    f = [],
                    p = r.length,
                    v = i || g(e || "*", a.nodeType ? [a] : a, []),
                    y = !t || !i && e ? v : m(v, d, t, a, l),
                    b = n ? o || (i ? t : p || s) ? [] : r : y;
                if (n && n(y, b, a, l), s)
                    for (u = m(b, f), s(u, [], a, l), c = u.length; c--;)(h = u[c]) && (b[f[c]] = !(y[f[c]] = h));
                if (i) {
                    if (o || t) {
                        if (o) {
                            for (u = [], c = b.length; c--;)(h = b[c]) && u.push(y[c] = h);
                            o(null, b = [], u, l)
                        }
                        for (c = b.length; c--;)(h = b[c]) && (u = o ? et.call(i, h) : d[c]) > -1 && (i[u] = !(r[u] = h))
                    }
                } else b = m(b === r ? b.splice(p, b.length) : b), o ? o(null, r, b, l) : Z.apply(r, b)
            })
        }

        function y(t) {
            for (var e, n, i, s = t.length, o = x.relative[t[0].type], r = o || x.relative[" "], a = o ? 1 : 0, l = f(function (t) {
                    return t === e
                }, r, !0), u = f(function (t) {
                    return et.call(e, t) > -1
                }, r, !0), c = [function (t, n, i) {
                    return !o && (i || n !== E) || ((e = n).nodeType ? l(t, n, i) : u(t, n, i))
                }]; s > a; a++)
                if (n = x.relative[t[a].type]) c = [f(p(c), n)];
                else {
                    if (n = x.filter[t[a].type].apply(null, t[a].matches), n[R]) {
                        for (i = ++a; s > i && !x.relative[t[i].type]; i++);
                        return v(a > 1 && p(c), a > 1 && d(t.slice(0, a - 1).concat({
                            value: " " === t[a - 2].type ? "*" : ""
                        })).replace(lt, "$1"), n, i > a && y(t.slice(a, i)), s > i && y(t = t.slice(i)), s > i && d(t))
                    }
                    c.push(n)
                }
            return p(c)
        }

        function b(t, n) {
            var s = n.length > 0,
                o = t.length > 0,
                r = function (i, r, a, l, u) {
                    var c, h, d, f = 0,
                        p = "0",
                        g = i && [],
                        v = [],
                        y = E,
                        b = i || o && x.find.TAG("*", u),
                        _ = H += null == y ? 1 : Math.random() || .1,
                        w = b.length;
                    for (u && (E = r !== N && r); p !== w && null != (c = b[p]); p++) {
                        if (o && c) {
                            for (h = 0; d = t[h++];)
                                if (d(c, r, a)) {
                                    l.push(c);
                                    break
                                }
                            u && (H = _)
                        }
                        s && ((c = !d && c) && f--, i && g.push(c))
                    }
                    if (f += p, s && p !== f) {
                        for (h = 0; d = n[h++];) d(g, v, r, a);
                        if (i) {
                            if (f > 0)
                                for (; p--;) g[p] || v[p] || (v[p] = X.call(l));
                            v = m(v)
                        }
                        Z.apply(l, v), u && !i && v.length > 0 && f + n.length > 1 && e.uniqueSort(l)
                    }
                    return u && (H = _, E = y), g
                };
            return s ? i(r) : r
        }
        var _, w, x, k, S, C, T, D, E, j, A, $, N, M, L, O, P, F, I, R = "sizzle" + -new Date,
            q = t.document,
            H = 0,
            z = 0,
            U = n(),
            B = n(),
            W = n(),
            Y = function (t, e) {
                return t === e && (A = !0), 0
            },
            V = "undefined",
            G = 1 << 31,
            Q = {}.hasOwnProperty,
            K = [],
            X = K.pop,
            J = K.push,
            Z = K.push,
            tt = K.slice,
            et = K.indexOf || function (t) {
                for (var e = 0, n = this.length; n > e; e++)
                    if (this[e] === t) return e;
                return -1
            },
            nt = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            it = "[\\x20\\t\\r\\n\\f]",
            st = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            ot = st.replace("w", "w#"),
            rt = "\\[" + it + "*(" + st + ")(?:" + it + "*([*^$|!~]?=)" + it + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + ot + "))|)" + it + "*\\]",
            at = ":(" + st + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + rt + ")*)|.*)\\)|)",
            lt = new RegExp("^" + it + "+|((?:^|[^\\\\])(?:\\\\.)*)" + it + "+$", "g"),
            ut = new RegExp("^" + it + "*," + it + "*"),
            ct = new RegExp("^" + it + "*([>+~]|" + it + ")" + it + "*"),
            ht = new RegExp("=" + it + "*([^\\]'\"]*?)" + it + "*\\]", "g"),
            dt = new RegExp(at),
            ft = new RegExp("^" + ot + "$"),
            pt = {
                ID: new RegExp("^#(" + st + ")"),
                CLASS: new RegExp("^\\.(" + st + ")"),
                TAG: new RegExp("^(" + st.replace("w", "w*") + ")"),
                ATTR: new RegExp("^" + rt),
                PSEUDO: new RegExp("^" + at),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + it + "*(even|odd|(([+-]|)(\\d*)n|)" + it + "*(?:([+-]|)" + it + "*(\\d+)|))" + it + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + nt + ")$", "i"),
                needsContext: new RegExp("^" + it + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + it + "*((?:-\\d)?\\d*)" + it + "*\\)|)(?=[^-]|$)", "i")
            },
            gt = /^(?:input|select|textarea|button)$/i,
            mt = /^h\d$/i,
            vt = /^[^{]+\{\s*\[native \w/,
            yt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            bt = /[+~]/,
            _t = /'|\\/g,
            wt = new RegExp("\\\\([\\da-f]{1,6}" + it + "?|(" + it + ")|.)", "ig"),
            xt = function (t, e, n) {
                var i = "0x" + e - 65536;
                return i !== i || n ? e : 0 > i ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
            };
        try {
            Z.apply(K = tt.call(q.childNodes), q.childNodes), K[q.childNodes.length].nodeType
        } catch (kt) {
            Z = {
                apply: K.length ? function (t, e) {
                    J.apply(t, tt.call(e))
                } : function (t, e) {
                    for (var n = t.length, i = 0; t[n++] = e[i++];);
                    t.length = n - 1
                }
            }
        }
        w = e.support = {}, S = e.isXML = function (t) {
            var e = t && (t.ownerDocument || t).documentElement;
            return e ? "HTML" !== e.nodeName : !1
        }, $ = e.setDocument = function (t) {
            var e, n = t ? t.ownerDocument || t : q,
                i = n.defaultView;
            return n !== N && 9 === n.nodeType && n.documentElement ? (N = n, M = n.documentElement, L = !S(n), i && i !== i.top && (i.addEventListener ? i.addEventListener("unload", function () {
                $()
            }, !1) : i.attachEvent && i.attachEvent("onunload", function () {
                $()
            })), w.attributes = s(function (t) {
                return t.className = "i", !t.getAttribute("className")
            }), w.getElementsByTagName = s(function (t) {
                return t.appendChild(n.createComment("")), !t.getElementsByTagName("*").length
            }), w.getElementsByClassName = vt.test(n.getElementsByClassName) && s(function (t) {
                return t.innerHTML = "<div class='a'></div><div class='a i'></div>", t.firstChild.className = "i", 2 === t.getElementsByClassName("i").length
            }), w.getById = s(function (t) {
                return M.appendChild(t).id = R, !n.getElementsByName || !n.getElementsByName(R).length
            }), w.getById ? (x.find.ID = function (t, e) {
                if (typeof e.getElementById !== V && L) {
                    var n = e.getElementById(t);
                    return n && n.parentNode ? [n] : []
                }
            }, x.filter.ID = function (t) {
                var e = t.replace(wt, xt);
                return function (t) {
                    return t.getAttribute("id") === e
                }
            }) : (delete x.find.ID, x.filter.ID = function (t) {
                var e = t.replace(wt, xt);
                return function (t) {
                    var n = typeof t.getAttributeNode !== V && t.getAttributeNode("id");
                    return n && n.value === e
                }
            }), x.find.TAG = w.getElementsByTagName ? function (t, e) {
                return typeof e.getElementsByTagName !== V ? e.getElementsByTagName(t) : void 0
            } : function (t, e) {
                var n, i = [],
                    s = 0,
                    o = e.getElementsByTagName(t);
                if ("*" === t) {
                    for (; n = o[s++];) 1 === n.nodeType && i.push(n);
                    return i
                }
                return o
            }, x.find.CLASS = w.getElementsByClassName && function (t, e) {
                return typeof e.getElementsByClassName !== V && L ? e.getElementsByClassName(t) : void 0
            }, P = [], O = [], (w.qsa = vt.test(n.querySelectorAll)) && (s(function (t) {
                t.innerHTML = "<select msallowclip=''><option selected=''></option></select>", t.querySelectorAll("[msallowclip^='']").length && O.push("[*^$]=" + it + "*(?:''|\"\")"), t.querySelectorAll("[selected]").length || O.push("\\[" + it + "*(?:value|" + nt + ")"), t.querySelectorAll(":checked").length || O.push(":checked")
            }), s(function (t) {
                var e = n.createElement("input");
                e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("name", "D"), t.querySelectorAll("[name=d]").length && O.push("name" + it + "*[*^$|!~]?="), t.querySelectorAll(":enabled").length || O.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), O.push(",.*:")
            })), (w.matchesSelector = vt.test(F = M.matches || M.webkitMatchesSelector || M.mozMatchesSelector || M.oMatchesSelector || M.msMatchesSelector)) && s(function (t) {
                w.disconnectedMatch = F.call(t, "div"), F.call(t, "[s!='']:x"), P.push("!=", at)
            }), O = O.length && new RegExp(O.join("|")), P = P.length && new RegExp(P.join("|")), e = vt.test(M.compareDocumentPosition), I = e || vt.test(M.contains) ? function (t, e) {
                var n = 9 === t.nodeType ? t.documentElement : t,
                    i = e && e.parentNode;
                return t === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(i)))
            } : function (t, e) {
                if (e)
                    for (; e = e.parentNode;)
                        if (e === t) return !0;
                return !1
            }, Y = e ? function (t, e) {
                if (t === e) return A = !0, 0;
                var i = !t.compareDocumentPosition - !e.compareDocumentPosition;
                return i ? i : (i = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1, 1 & i || !w.sortDetached && e.compareDocumentPosition(t) === i ? t === n || t.ownerDocument === q && I(q, t) ? -1 : e === n || e.ownerDocument === q && I(q, e) ? 1 : j ? et.call(j, t) - et.call(j, e) : 0 : 4 & i ? -1 : 1)
            } : function (t, e) {
                if (t === e) return A = !0, 0;
                var i, s = 0,
                    o = t.parentNode,
                    a = e.parentNode,
                    l = [t],
                    u = [e];
                if (!o || !a) return t === n ? -1 : e === n ? 1 : o ? -1 : a ? 1 : j ? et.call(j, t) - et.call(j, e) : 0;
                if (o === a) return r(t, e);
                for (i = t; i = i.parentNode;) l.unshift(i);
                for (i = e; i = i.parentNode;) u.unshift(i);
                for (; l[s] === u[s];) s++;
                return s ? r(l[s], u[s]) : l[s] === q ? -1 : u[s] === q ? 1 : 0
            }, n) : N
        }, e.matches = function (t, n) {
            return e(t, null, null, n)
        }, e.matchesSelector = function (t, n) {
            if ((t.ownerDocument || t) !== N && $(t), n = n.replace(ht, "='$1']"), w.matchesSelector && L && (!P || !P.test(n)) && (!O || !O.test(n))) try {
                var i = F.call(t, n);
                if (i || w.disconnectedMatch || t.document && 11 !== t.document.nodeType) return i
            } catch (s) {}
            return e(n, N, null, [t]).length > 0
        }, e.contains = function (t, e) {
            return (t.ownerDocument || t) !== N && $(t), I(t, e)
        }, e.attr = function (t, e) {
            (t.ownerDocument || t) !== N && $(t);
            var n = x.attrHandle[e.toLowerCase()],
                i = n && Q.call(x.attrHandle, e.toLowerCase()) ? n(t, e, !L) : void 0;
            return void 0 !== i ? i : w.attributes || !L ? t.getAttribute(e) : (i = t.getAttributeNode(e)) && i.specified ? i.value : null
        }, e.error = function (t) {
            throw new Error("Syntax error, unrecognized expression: " + t)
        }, e.uniqueSort = function (t) {
            var e, n = [],
                i = 0,
                s = 0;
            if (A = !w.detectDuplicates, j = !w.sortStable && t.slice(0), t.sort(Y), A) {
                for (; e = t[s++];) e === t[s] && (i = n.push(s));
                for (; i--;) t.splice(n[i], 1)
            }
            return j = null, t
        }, k = e.getText = function (t) {
            var e, n = "",
                i = 0,
                s = t.nodeType;
            if (s) {
                if (1 === s || 9 === s || 11 === s) {
                    if ("string" == typeof t.textContent) return t.textContent;
                    for (t = t.firstChild; t; t = t.nextSibling) n += k(t)
                } else if (3 === s || 4 === s) return t.nodeValue
            } else
                for (; e = t[i++];) n += k(e);
            return n
        }, x = e.selectors = {
            cacheLength: 50,
            createPseudo: i,
            match: pt,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function (t) {
                    return t[1] = t[1].replace(wt, xt), t[3] = (t[3] || t[4] || t[5] || "").replace(wt, xt), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4)
                },
                CHILD: function (t) {
                    return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || e.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && e.error(t[0]), t
                },
                PSEUDO: function (t) {
                    var e, n = !t[6] && t[2];
                    return pt.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : n && dt.test(n) && (e = C(n, !0)) && (e = n.indexOf(")", n.length - e) - n.length) && (t[0] = t[0].slice(0, e), t[2] = n.slice(0, e)), t.slice(0, 3))
                }
            },
            filter: {
                TAG: function (t) {
                    var e = t.replace(wt, xt).toLowerCase();
                    return "*" === t ? function () {
                        return !0
                    } : function (t) {
                        return t.nodeName && t.nodeName.toLowerCase() === e
                    }
                },
                CLASS: function (t) {
                    var e = U[t + " "];
                    return e || (e = new RegExp("(^|" + it + ")" + t + "(" + it + "|$)")) && U(t, function (t) {
                        return e.test("string" == typeof t.className && t.className || typeof t.getAttribute !== V && t.getAttribute("class") || "")
                    })
                },
                ATTR: function (t, n, i) {
                    return function (s) {
                        var o = e.attr(s, t);
                        return null == o ? "!=" === n : n ? (o += "", "=" === n ? o === i : "!=" === n ? o !== i : "^=" === n ? i && 0 === o.indexOf(i) : "*=" === n ? i && o.indexOf(i) > -1 : "$=" === n ? i && o.slice(-i.length) === i : "~=" === n ? (" " + o + " ").indexOf(i) > -1 : "|=" === n ? o === i || o.slice(0, i.length + 1) === i + "-" : !1) : !0
                    }
                },
                CHILD: function (t, e, n, i, s) {
                    var o = "nth" !== t.slice(0, 3),
                        r = "last" !== t.slice(-4),
                        a = "of-type" === e;
                    return 1 === i && 0 === s ? function (t) {
                        return !!t.parentNode
                    } : function (e, n, l) {
                        var u, c, h, d, f, p, g = o !== r ? "nextSibling" : "previousSibling",
                            m = e.parentNode,
                            v = a && e.nodeName.toLowerCase(),
                            y = !l && !a;
                        if (m) {
                            if (o) {
                                for (; g;) {
                                    for (h = e; h = h[g];)
                                        if (a ? h.nodeName.toLowerCase() === v : 1 === h.nodeType) return !1;
                                    p = g = "only" === t && !p && "nextSibling"
                                }
                                return !0
                            }
                            if (p = [r ? m.firstChild : m.lastChild], r && y) {
                                for (c = m[R] || (m[R] = {}), u = c[t] || [], f = u[0] === H && u[1], d = u[0] === H && u[2], h = f && m.childNodes[f]; h = ++f && h && h[g] || (d = f = 0) || p.pop();)
                                    if (1 === h.nodeType && ++d && h === e) {
                                        c[t] = [H, f, d];
                                        break
                                    }
                            } else if (y && (u = (e[R] || (e[R] = {}))[t]) && u[0] === H) d = u[1];
                            else
                                for (;
                                    (h = ++f && h && h[g] || (d = f = 0) || p.pop()) && ((a ? h.nodeName.toLowerCase() !== v : 1 !== h.nodeType) || !++d || (y && ((h[R] || (h[R] = {}))[t] = [H, d]), h !== e)););
                            return d -= s, d === i || d % i === 0 && d / i >= 0
                        }
                    }
                },
                PSEUDO: function (t, n) {
                    var s, o = x.pseudos[t] || x.setFilters[t.toLowerCase()] || e.error("unsupported pseudo: " + t);
                    return o[R] ? o(n) : o.length > 1 ? (s = [t, t, "", n], x.setFilters.hasOwnProperty(t.toLowerCase()) ? i(function (t, e) {
                        for (var i, s = o(t, n), r = s.length; r--;) i = et.call(t, s[r]), t[i] = !(e[i] = s[r])
                    }) : function (t) {
                        return o(t, 0, s)
                    }) : o
                }
            },
            pseudos: {
                not: i(function (t) {
                    var e = [],
                        n = [],
                        s = T(t.replace(lt, "$1"));
                    return s[R] ? i(function (t, e, n, i) {
                        for (var o, r = s(t, null, i, []), a = t.length; a--;)(o = r[a]) && (t[a] = !(e[a] = o))
                    }) : function (t, i, o) {
                        return e[0] = t, s(e, null, o, n), !n.pop()
                    }
                }),
                has: i(function (t) {
                    return function (n) {
                        return e(t, n).length > 0
                    }
                }),
                contains: i(function (t) {
                    return function (e) {
                        return (e.textContent || e.innerText || k(e)).indexOf(t) > -1
                    }
                }),
                lang: i(function (t) {
                    return ft.test(t || "") || e.error("unsupported lang: " + t), t = t.replace(wt, xt).toLowerCase(),
                        function (e) {
                            var n;
                            do
                                if (n = L ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return n = n.toLowerCase(), n === t || 0 === n.indexOf(t + "-"); while ((e = e.parentNode) && 1 === e.nodeType);
                            return !1
                        }
                }),
                target: function (e) {
                    var n = t.location && t.location.hash;
                    return n && n.slice(1) === e.id
                },
                root: function (t) {
                    return t === M
                },
                focus: function (t) {
                    return t === N.activeElement && (!N.hasFocus || N.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
                },
                enabled: function (t) {
                    return t.disabled === !1
                },
                disabled: function (t) {
                    return t.disabled === !0
                },
                checked: function (t) {
                    var e = t.nodeName.toLowerCase();
                    return "input" === e && !!t.checked || "option" === e && !!t.selected
                },
                selected: function (t) {
                    return t.parentNode && t.parentNode.selectedIndex, t.selected === !0
                },
                empty: function (t) {
                    for (t = t.firstChild; t; t = t.nextSibling)
                        if (t.nodeType < 6) return !1;
                    return !0
                },
                parent: function (t) {
                    return !x.pseudos.empty(t)
                },
                header: function (t) {
                    return mt.test(t.nodeName)
                },
                input: function (t) {
                    return gt.test(t.nodeName)
                },
                button: function (t) {
                    var e = t.nodeName.toLowerCase();
                    return "input" === e && "button" === t.type || "button" === e
                },
                text: function (t) {
                    var e;
                    return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase())
                },
                first: u(function () {
                    return [0]
                }),
                last: u(function (t, e) {
                    return [e - 1]
                }),
                eq: u(function (t, e, n) {
                    return [0 > n ? n + e : n]
                }),
                even: u(function (t, e) {
                    for (var n = 0; e > n; n += 2) t.push(n);
                    return t
                }),
                odd: u(function (t, e) {
                    for (var n = 1; e > n; n += 2) t.push(n);
                    return t
                }),
                lt: u(function (t, e, n) {
                    for (var i = 0 > n ? n + e : n; --i >= 0;) t.push(i);
                    return t
                }),
                gt: u(function (t, e, n) {
                    for (var i = 0 > n ? n + e : n; ++i < e;) t.push(i);
                    return t
                })
            }
        }, x.pseudos.nth = x.pseudos.eq;
        for (_ in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) x.pseudos[_] = a(_);
        for (_ in {
                submit: !0,
                reset: !0
            }) x.pseudos[_] = l(_);
        return h.prototype = x.filters = x.pseudos, x.setFilters = new h, C = e.tokenize = function (t, n) {
            var i, s, o, r, a, l, u, c = B[t + " "];
            if (c) return n ? 0 : c.slice(0);
            for (a = t, l = [], u = x.preFilter; a;) {
                (!i || (s = ut.exec(a))) && (s && (a = a.slice(s[0].length) || a), l.push(o = [])), i = !1, (s = ct.exec(a)) && (i = s.shift(), o.push({
                    value: i,
                    type: s[0].replace(lt, " ")
                }), a = a.slice(i.length));
                for (r in x.filter) !(s = pt[r].exec(a)) || u[r] && !(s = u[r](s)) || (i = s.shift(), o.push({
                    value: i,
                    type: r,
                    matches: s
                }), a = a.slice(i.length));
                if (!i) break
            }
            return n ? a.length : a ? e.error(t) : B(t, l).slice(0)
        }, T = e.compile = function (t, e) {
            var n, i = [],
                s = [],
                o = W[t + " "];
            if (!o) {
                for (e || (e = C(t)), n = e.length; n--;) o = y(e[n]), o[R] ? i.push(o) : s.push(o);
                o = W(t, b(s, i)), o.selector = t
            }
            return o
        }, D = e.select = function (t, e, n, i) {
            var s, o, r, a, l, u = "function" == typeof t && t,
                h = !i && C(t = u.selector || t);
            if (n = n || [], 1 === h.length) {
                if (o = h[0] = h[0].slice(0), o.length > 2 && "ID" === (r = o[0]).type && w.getById && 9 === e.nodeType && L && x.relative[o[1].type]) {
                    if (e = (x.find.ID(r.matches[0].replace(wt, xt), e) || [])[0], !e) return n;
                    u && (e = e.parentNode), t = t.slice(o.shift().value.length)
                }
                for (s = pt.needsContext.test(t) ? 0 : o.length; s-- && (r = o[s], !x.relative[a = r.type]);)
                    if ((l = x.find[a]) && (i = l(r.matches[0].replace(wt, xt), bt.test(o[0].type) && c(e.parentNode) || e))) {
                        if (o.splice(s, 1), t = i.length && d(o), !t) return Z.apply(n, i), n;
                        break
                    }
            }
            return (u || T(t, h))(i, e, !L, n, bt.test(t) && c(e.parentNode) || e), n
        }, w.sortStable = R.split("").sort(Y).join("") === R, w.detectDuplicates = !!A, $(), w.sortDetached = s(function (t) {
            return 1 & t.compareDocumentPosition(N.createElement("div"))
        }), s(function (t) {
            return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href")
        }) || o("type|href|height|width", function (t, e, n) {
            return n ? void 0 : t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
        }), w.attributes && s(function (t) {
            return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value")
        }) || o("value", function (t, e, n) {
            return n || "input" !== t.nodeName.toLowerCase() ? void 0 : t.defaultValue
        }), s(function (t) {
            return null == t.getAttribute("disabled")
        }) || o(nt, function (t, e, n) {
            var i;
            return n ? void 0 : t[e] === !0 ? e.toLowerCase() : (i = t.getAttributeNode(e)) && i.specified ? i.value : null
        }), e
    }(t);
    st.find = ut, st.expr = ut.selectors, st.expr[":"] = st.expr.pseudos, st.unique = ut.uniqueSort, st.text = ut.getText, st.isXMLDoc = ut.isXML, st.contains = ut.contains;
    var ct = st.expr.match.needsContext,
        ht = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        dt = /^.[^:#\[\.,]*$/;
    st.filter = function (t, e, n) {
        var i = e[0];
        return n && (t = ":not(" + t + ")"), 1 === e.length && 1 === i.nodeType ? st.find.matchesSelector(i, t) ? [i] : [] : st.find.matches(t, st.grep(e, function (t) {
            return 1 === t.nodeType
        }))
    }, st.fn.extend({
        find: function (t) {
            var e, n = [],
                i = this,
                s = i.length;
            if ("string" != typeof t) return this.pushStack(st(t).filter(function () {
                for (e = 0; s > e; e++)
                    if (st.contains(i[e], this)) return !0
            }));
            for (e = 0; s > e; e++) st.find(t, i[e], n);
            return n = this.pushStack(s > 1 ? st.unique(n) : n), n.selector = this.selector ? this.selector + " " + t : t, n
        },
        filter: function (t) {
            return this.pushStack(i(this, t || [], !1))
        },
        not: function (t) {
            return this.pushStack(i(this, t || [], !0))
        },
        is: function (t) {
            return !!i(this, "string" == typeof t && ct.test(t) ? st(t) : t || [], !1).length
        }
    });
    var ft, pt = t.document,
        gt = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        mt = st.fn.init = function (t, e) {
            var n, i;
            if (!t) return this;
            if ("string" == typeof t) {
                if (n = "<" === t.charAt(0) && ">" === t.charAt(t.length - 1) && t.length >= 3 ? [null, t, null] : gt.exec(t), !n || !n[1] && e) return !e || e.jquery ? (e || ft).find(t) : this.constructor(e).find(t);
                if (n[1]) {
                    if (e = e instanceof st ? e[0] : e, st.merge(this, st.parseHTML(n[1], e && e.nodeType ? e.ownerDocument || e : pt, !0)), ht.test(n[1]) && st.isPlainObject(e))
                        for (n in e) st.isFunction(this[n]) ? this[n](e[n]) : this.attr(n, e[n]);
                    return this
                }
                if (i = pt.getElementById(n[2]), i && i.parentNode) {
                    if (i.id !== n[2]) return ft.find(t);
                    this.length = 1, this[0] = i
                }
                return this.context = pt, this.selector = t, this
            }
            return t.nodeType ? (this.context = this[0] = t, this.length = 1, this) : st.isFunction(t) ? "undefined" != typeof ft.ready ? ft.ready(t) : t(st) : (void 0 !== t.selector && (this.selector = t.selector, this.context = t.context), st.makeArray(t, this))
        };
    mt.prototype = st.fn, ft = st(pt);
    var vt = /^(?:parents|prev(?:Until|All))/,
        yt = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    st.extend({
        dir: function (t, e, n) {
            for (var i = [], s = t[e]; s && 9 !== s.nodeType && (void 0 === n || 1 !== s.nodeType || !st(s).is(n));) 1 === s.nodeType && i.push(s), s = s[e];
            return i
        },
        sibling: function (t, e) {
            for (var n = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && n.push(t);
            return n
        }
    }), st.fn.extend({
        has: function (t) {
            var e, n = st(t, this),
                i = n.length;
            return this.filter(function () {
                for (e = 0; i > e; e++)
                    if (st.contains(this, n[e])) return !0
            })
        },
        closest: function (t, e) {
            for (var n, i = 0, s = this.length, o = [], r = ct.test(t) || "string" != typeof t ? st(t, e || this.context) : 0; s > i; i++)
                for (n = this[i]; n && n !== e; n = n.parentNode)
                    if (n.nodeType < 11 && (r ? r.index(n) > -1 : 1 === n.nodeType && st.find.matchesSelector(n, t))) {
                        o.push(n);
                        break
                    }
            return this.pushStack(o.length > 1 ? st.unique(o) : o)
        },
        index: function (t) {
            return t ? "string" == typeof t ? st.inArray(this[0], st(t)) : st.inArray(t.jquery ? t[0] : t, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function (t, e) {
            return this.pushStack(st.unique(st.merge(this.get(), st(t, e))))
        },
        addBack: function (t) {
            return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
        }
    }), st.each({
        parent: function (t) {
            var e = t.parentNode;
            return e && 11 !== e.nodeType ? e : null
        },
        parents: function (t) {
            return st.dir(t, "parentNode")
        },
        parentsUntil: function (t, e, n) {
            return st.dir(t, "parentNode", n)
        },
        next: function (t) {
            return s(t, "nextSibling")
        },
        prev: function (t) {
            return s(t, "previousSibling")
        },
        nextAll: function (t) {
            return st.dir(t, "nextSibling")
        },
        prevAll: function (t) {
            return st.dir(t, "previousSibling")
        },
        nextUntil: function (t, e, n) {
            return st.dir(t, "nextSibling", n)
        },
        prevUntil: function (t, e, n) {
            return st.dir(t, "previousSibling", n)
        },
        siblings: function (t) {
            return st.sibling((t.parentNode || {}).firstChild, t)
        },
        children: function (t) {
            return st.sibling(t.firstChild)
        },
        contents: function (t) {
            return st.nodeName(t, "iframe") ? t.contentDocument || t.contentWindow.document : st.merge([], t.childNodes)
        }
    }, function (t, e) {
        st.fn[t] = function (n, i) {
            var s = st.map(this, e, n);
            return "Until" !== t.slice(-5) && (i = n), i && "string" == typeof i && (s = st.filter(i, s)), this.length > 1 && (yt[t] || (s = st.unique(s)), vt.test(t) && (s = s.reverse())), this.pushStack(s)
        }
    });
    var bt = /\S+/g,
        _t = {};
    st.Callbacks = function (t) {
        t = "string" == typeof t ? _t[t] || o(t) : st.extend({}, t);
        var e, n, i, s, r, a, l = [],
            u = !t.once && [],
            c = function (o) {
                for (n = t.memory && o, i = !0, r = a || 0, a = 0, s = l.length, e = !0; l && s > r; r++)
                    if (l[r].apply(o[0], o[1]) === !1 && t.stopOnFalse) {
                        n = !1;
                        break
                    }
                e = !1, l && (u ? u.length && c(u.shift()) : n ? l = [] : h.disable())
            },
            h = {
                add: function () {
                    if (l) {
                        var i = l.length;
                        ! function o(e) {
                            st.each(e, function (e, n) {
                                var i = st.type(n);
                                "function" === i ? t.unique && h.has(n) || l.push(n) : n && n.length && "string" !== i && o(n)
                            })
                        }(arguments), e ? s = l.length : n && (a = i, c(n))
                    }
                    return this
                },
                remove: function () {
                    return l && st.each(arguments, function (t, n) {
                        for (var i;
                            (i = st.inArray(n, l, i)) > -1;) l.splice(i, 1), e && (s >= i && s--, r >= i && r--)
                    }), this
                },
                has: function (t) {
                    return t ? st.inArray(t, l) > -1 : !(!l || !l.length)
                },
                empty: function () {
                    return l = [], s = 0, this
                },
                disable: function () {
                    return l = u = n = void 0, this
                },
                disabled: function () {
                    return !l
                },
                lock: function () {
                    return u = void 0, n || h.disable(), this
                },
                locked: function () {
                    return !u
                },
                fireWith: function (t, n) {
                    return !l || i && !u || (n = n || [], n = [t, n.slice ? n.slice() : n], e ? u.push(n) : c(n)), this
                },
                fire: function () {
                    return h.fireWith(this, arguments), this
                },
                fired: function () {
                    return !!i
                }
            };
        return h
    }, st.extend({
        Deferred: function (t) {
            var e = [["resolve", "done", st.Callbacks("once memory"), "resolved"], ["reject", "fail", st.Callbacks("once memory"), "rejected"], ["notify", "progress", st.Callbacks("memory")]],
                n = "pending",
                i = {
                    state: function () {
                        return n
                    },
                    always: function () {
                        return s.done(arguments).fail(arguments), this
                    },
                    then: function () {
                        var t = arguments;
                        return st.Deferred(function (n) {
                            st.each(e, function (e, o) {
                                var r = st.isFunction(t[e]) && t[e];
                                s[o[1]](function () {
                                    var t = r && r.apply(this, arguments);
                                    t && st.isFunction(t.promise) ? t.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[o[0] + "With"](this === i ? n.promise() : this, r ? [t] : arguments)
                                })
                            }), t = null
                        }).promise()
                    },
                    promise: function (t) {
                        return null != t ? st.extend(t, i) : i
                    }
                },
                s = {};
            return i.pipe = i.then, st.each(e, function (t, o) {
                var r = o[2],
                    a = o[3];
                i[o[1]] = r.add, a && r.add(function () {
                    n = a
                }, e[1 ^ t][2].disable, e[2][2].lock), s[o[0]] = function () {
                    return s[o[0] + "With"](this === s ? i : this, arguments), this
                }, s[o[0] + "With"] = r.fireWith
            }), i.promise(s), t && t.call(s, s), s
        },
        when: function (t) {
            var e, n, i, s = 0,
                o = Q.call(arguments),
                r = o.length,
                a = 1 !== r || t && st.isFunction(t.promise) ? r : 0,
                l = 1 === a ? t : st.Deferred(),
                u = function (t, n, i) {
                    return function (s) {
                        n[t] = this, i[t] = arguments.length > 1 ? Q.call(arguments) : s, i === e ? l.notifyWith(n, i) : --a || l.resolveWith(n, i)
                    }
                };
            if (r > 1)
                for (e = new Array(r), n = new Array(r), i = new Array(r); r > s; s++) o[s] && st.isFunction(o[s].promise) ? o[s].promise().done(u(s, i, o)).fail(l.reject).progress(u(s, n, e)) : --a;
            return a || l.resolveWith(i, o), l.promise()
        }
    });
    var wt;
    st.fn.ready = function (t) {
        return st.ready.promise().done(t), this
    }, st.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function (t) {
            t ? st.readyWait++ : st.ready(!0)
        },
        ready: function (t) {
            if (t === !0 ? !--st.readyWait : !st.isReady) {
                if (!pt.body) return setTimeout(st.ready);
                st.isReady = !0, t !== !0 && --st.readyWait > 0 || (wt.resolveWith(pt, [st]), st.fn.triggerHandler && (st(pt).triggerHandler("ready"), st(pt).off("ready")))
            }
        }
    }), st.ready.promise = function (e) {
        if (!wt)
            if (wt = st.Deferred(), "complete" === pt.readyState) setTimeout(st.ready);
            else if (pt.addEventListener) pt.addEventListener("DOMContentLoaded", a, !1), t.addEventListener("load", a, !1);
        else {
            pt.attachEvent("onreadystatechange", a), t.attachEvent("onload", a);
            var n = !1;
            try {
                n = null == t.frameElement && pt.documentElement
            } catch (i) {}
            n && n.doScroll && ! function s() {
                if (!st.isReady) {
                    try {
                        n.doScroll("left")
                    } catch (t) {
                        return setTimeout(s, 50)
                    }
                    r(), st.ready()
                }
            }()
        }
        return wt.promise(e)
    };
    var xt, kt = "undefined";
    for (xt in st(nt)) break;
    nt.ownLast = "0" !== xt, nt.inlineBlockNeedsLayout = !1, st(function () {
            var t, e, n, i;
            n = pt.getElementsByTagName("body")[0], n && n.style && (e = pt.createElement("div"), i = pt.createElement("div"), i.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(i).appendChild(e), typeof e.style.zoom !== kt && (e.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", nt.inlineBlockNeedsLayout = t = 3 === e.offsetWidth, t && (n.style.zoom = 1)), n.removeChild(i))
        }),
        function () {
            var t = pt.createElement("div");
            if (null == nt.deleteExpando) {
                nt.deleteExpando = !0;
                try {
                    delete t.test
                } catch (e) {
                    nt.deleteExpando = !1
                }
            }
            t = null
        }(), st.acceptData = function (t) {
            var e = st.noData[(t.nodeName + " ").toLowerCase()],
                n = +t.nodeType || 1;
            return 1 !== n && 9 !== n ? !1 : !e || e !== !0 && t.getAttribute("classid") === e
        };
    var St = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        Ct = /([A-Z])/g;
    st.extend({
        cache: {},
        noData: {
            "applet ": !0,
            "embed ": !0,
            "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
        },
        hasData: function (t) {
            return t = t.nodeType ? st.cache[t[st.expando]] : t[st.expando], !!t && !u(t)
        },
        data: function (t, e, n) {
            return c(t, e, n)
        },
        removeData: function (t, e) {
            return h(t, e)
        },
        _data: function (t, e, n) {
            return c(t, e, n, !0)
        },
        _removeData: function (t, e) {
            return h(t, e, !0)
        }
    }), st.fn.extend({
        data: function (t, e) {
            var n, i, s, o = this[0],
                r = o && o.attributes;
            if (void 0 === t) {
                if (this.length && (s = st.data(o), 1 === o.nodeType && !st._data(o, "parsedAttrs"))) {
                    for (n = r.length; n--;) r[n] && (i = r[n].name, 0 === i.indexOf("data-") && (i = st.camelCase(i.slice(5)), l(o, i, s[i])));
                    st._data(o, "parsedAttrs", !0)
                }
                return s
            }
            return "object" == typeof t ? this.each(function () {
                st.data(this, t)
            }) : arguments.length > 1 ? this.each(function () {
                st.data(this, t, e)
            }) : o ? l(o, t, st.data(o, t)) : void 0
        },
        removeData: function (t) {
            return this.each(function () {
                st.removeData(this, t)
            })
        }
    }), st.extend({
        queue: function (t, e, n) {
            var i;
            return t ? (e = (e || "fx") + "queue", i = st._data(t, e), n && (!i || st.isArray(n) ? i = st._data(t, e, st.makeArray(n)) : i.push(n)), i || []) : void 0
        },
        dequeue: function (t, e) {
            e = e || "fx";
            var n = st.queue(t, e),
                i = n.length,
                s = n.shift(),
                o = st._queueHooks(t, e),
                r = function () {
                    st.dequeue(t, e)
                };
            "inprogress" === s && (s = n.shift(), i--), s && ("fx" === e && n.unshift("inprogress"), delete o.stop, s.call(t, r, o)), !i && o && o.empty.fire()
        },
        _queueHooks: function (t, e) {
            var n = e + "queueHooks";
            return st._data(t, n) || st._data(t, n, {
                empty: st.Callbacks("once memory").add(function () {
                    st._removeData(t, e + "queue"), st._removeData(t, n)
                })
            })
        }
    }), st.fn.extend({
        queue: function (t, e) {
            var n = 2;
            return "string" != typeof t && (e = t, t = "fx", n--), arguments.length < n ? st.queue(this[0], t) : void 0 === e ? this : this.each(function () {
                var n = st.queue(this, t, e);
                st._queueHooks(this, t), "fx" === t && "inprogress" !== n[0] && st.dequeue(this, t)
            })
        },
        dequeue: function (t) {
            return this.each(function () {
                st.dequeue(this, t)
            })
        },
        clearQueue: function (t) {
            return this.queue(t || "fx", [])
        },
        promise: function (t, e) {
            var n, i = 1,
                s = st.Deferred(),
                o = this,
                r = this.length,
                a = function () {
                    --i || s.resolveWith(o, [o])
                };
            for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; r--;) n = st._data(o[r], t + "queueHooks"), n && n.empty && (i++, n.empty.add(a));
            return a(), s.promise(e)
        }
    });
    var Tt = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        Dt = ["Top", "Right", "Bottom", "Left"],
        Et = function (t, e) {
            return t = e || t, "none" === st.css(t, "display") || !st.contains(t.ownerDocument, t)
        },
        jt = st.access = function (t, e, n, i, s, o, r) {
            var a = 0,
                l = t.length,
                u = null == n;
            if ("object" === st.type(n)) {
                s = !0;
                for (a in n) st.access(t, e, a, n[a], !0, o, r)
            } else if (void 0 !== i && (s = !0, st.isFunction(i) || (r = !0), u && (r ? (e.call(t, i), e = null) : (u = e, e = function (t, e, n) {
                    return u.call(st(t), n)
                })), e))
                for (; l > a; a++) e(t[a], n, r ? i : i.call(t[a], a, e(t[a], n)));
            return s ? t : u ? e.call(t) : l ? e(t[0], n) : o
        },
        At = /^(?:checkbox|radio)$/i;
    ! function () {
        var t = pt.createElement("input"),
            e = pt.createElement("div"),
            n = pt.createDocumentFragment();
        if (e.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", nt.leadingWhitespace = 3 === e.firstChild.nodeType, nt.tbody = !e.getElementsByTagName("tbody").length, nt.htmlSerialize = !!e.getElementsByTagName("link").length, nt.html5Clone = "<:nav></:nav>" !== pt.createElement("nav").cloneNode(!0).outerHTML, t.type = "checkbox", t.checked = !0, n.appendChild(t), nt.appendChecked = t.checked, e.innerHTML = "<textarea>x</textarea>", nt.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue, n.appendChild(e), e.innerHTML = "<input type='radio' checked='checked' name='t'/>", nt.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, nt.noCloneEvent = !0, e.attachEvent && (e.attachEvent("onclick", function () {
                nt.noCloneEvent = !1
            }), e.cloneNode(!0).click()), null == nt.deleteExpando) {
            nt.deleteExpando = !0;
            try {
                delete e.test
            } catch (i) {
                nt.deleteExpando = !1
            }
        }
    }(),
    function () {
        var e, n, i = pt.createElement("div");
        for (e in {
                submit: !0,
                change: !0,
                focusin: !0
            }) n = "on" + e, (nt[e + "Bubbles"] = n in t) || (i.setAttribute(n, "t"), nt[e + "Bubbles"] = i.attributes[n].expando === !1);
        i = null
    }();
    var $t = /^(?:input|select|textarea)$/i,
        Nt = /^key/,
        Mt = /^(?:mouse|pointer|contextmenu)|click/,
        Lt = /^(?:focusinfocus|focusoutblur)$/,
        Ot = /^([^.]*)(?:\.(.+)|)$/;
    st.event = {
        global: {},
        add: function (t, e, n, i, s) {
            var o, r, a, l, u, c, h, d, f, p, g, m = st._data(t);
            if (m) {
                for (n.handler && (l = n, n = l.handler, s = l.selector), n.guid || (n.guid = st.guid++), (r = m.events) || (r = m.events = {}), (c = m.handle) || (c = m.handle = function (t) {
                        return typeof st === kt || t && st.event.triggered === t.type ? void 0 : st.event.dispatch.apply(c.elem, arguments)
                    }, c.elem = t), e = (e || "").match(bt) || [""], a = e.length; a--;) o = Ot.exec(e[a]) || [], f = g = o[1], p = (o[2] || "").split(".").sort(), f && (u = st.event.special[f] || {}, f = (s ? u.delegateType : u.bindType) || f, u = st.event.special[f] || {}, h = st.extend({
                    type: f,
                    origType: g,
                    data: i,
                    handler: n,
                    guid: n.guid,
                    selector: s,
                    needsContext: s && st.expr.match.needsContext.test(s),
                    namespace: p.join(".")
                }, l), (d = r[f]) || (d = r[f] = [], d.delegateCount = 0, u.setup && u.setup.call(t, i, p, c) !== !1 || (t.addEventListener ? t.addEventListener(f, c, !1) : t.attachEvent && t.attachEvent("on" + f, c))), u.add && (u.add.call(t, h), h.handler.guid || (h.handler.guid = n.guid)), s ? d.splice(d.delegateCount++, 0, h) : d.push(h), st.event.global[f] = !0);
                t = null
            }
        },
        remove: function (t, e, n, i, s) {
            var o, r, a, l, u, c, h, d, f, p, g, m = st.hasData(t) && st._data(t);
            if (m && (c = m.events)) {
                for (e = (e || "").match(bt) || [""], u = e.length; u--;)
                    if (a = Ot.exec(e[u]) || [], f = g = a[1], p = (a[2] || "").split(".").sort(), f) {
                        for (h = st.event.special[f] || {}, f = (i ? h.delegateType : h.bindType) || f, d = c[f] || [], a = a[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), l = o = d.length; o--;) r = d[o], !s && g !== r.origType || n && n.guid !== r.guid || a && !a.test(r.namespace) || i && i !== r.selector && ("**" !== i || !r.selector) || (d.splice(o, 1), r.selector && d.delegateCount--, h.remove && h.remove.call(t, r));
                        l && !d.length && (h.teardown && h.teardown.call(t, p, m.handle) !== !1 || st.removeEvent(t, f, m.handle), delete c[f])
                    } else
                        for (f in c) st.event.remove(t, f + e[u], n, i, !0);
                st.isEmptyObject(c) && (delete m.handle, st._removeData(t, "events"))
            }
        },
        trigger: function (e, n, i, s) {
            var o, r, a, l, u, c, h, d = [i || pt],
                f = et.call(e, "type") ? e.type : e,
                p = et.call(e, "namespace") ? e.namespace.split(".") : [];
            if (a = c = i = i || pt, 3 !== i.nodeType && 8 !== i.nodeType && !Lt.test(f + st.event.triggered) && (f.indexOf(".") >= 0 && (p = f.split("."), f = p.shift(), p.sort()), r = f.indexOf(":") < 0 && "on" + f, e = e[st.expando] ? e : new st.Event(f, "object" == typeof e && e), e.isTrigger = s ? 2 : 3, e.namespace = p.join("."), e.namespace_re = e.namespace ? new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = i), n = null == n ? [e] : st.makeArray(n, [e]), u = st.event.special[f] || {}, s || !u.trigger || u.trigger.apply(i, n) !== !1)) {
                if (!s && !u.noBubble && !st.isWindow(i)) {
                    for (l = u.delegateType || f, Lt.test(l + f) || (a = a.parentNode); a; a = a.parentNode) d.push(a), c = a;
                    c === (i.ownerDocument || pt) && d.push(c.defaultView || c.parentWindow || t)
                }
                for (h = 0;
                    (a = d[h++]) && !e.isPropagationStopped();) e.type = h > 1 ? l : u.bindType || f, o = (st._data(a, "events") || {})[e.type] && st._data(a, "handle"), o && o.apply(a, n), o = r && a[r], o && o.apply && st.acceptData(a) && (e.result = o.apply(a, n), e.result === !1 && e.preventDefault());
                if (e.type = f, !s && !e.isDefaultPrevented() && (!u._default || u._default.apply(d.pop(), n) === !1) && st.acceptData(i) && r && i[f] && !st.isWindow(i)) {
                    c = i[r], c && (i[r] = null), st.event.triggered = f;
                    try {
                        i[f]()
                    } catch (g) {}
                    st.event.triggered = void 0, c && (i[r] = c)
                }
                return e.result
            }
        },
        dispatch: function (t) {
            t = st.event.fix(t);
            var e, n, i, s, o, r = [],
                a = Q.call(arguments),
                l = (st._data(this, "events") || {})[t.type] || [],
                u = st.event.special[t.type] || {};
            if (a[0] = t, t.delegateTarget = this, !u.preDispatch || u.preDispatch.call(this, t) !== !1) {
                for (r = st.event.handlers.call(this, t, l), e = 0;
                    (s = r[e++]) && !t.isPropagationStopped();)
                    for (t.currentTarget = s.elem, o = 0;
                        (i = s.handlers[o++]) && !t.isImmediatePropagationStopped();)(!t.namespace_re || t.namespace_re.test(i.namespace)) && (t.handleObj = i, t.data = i.data, n = ((st.event.special[i.origType] || {}).handle || i.handler).apply(s.elem, a), void 0 !== n && (t.result = n) === !1 && (t.preventDefault(), t.stopPropagation()));
                return u.postDispatch && u.postDispatch.call(this, t), t.result
            }
        },
        handlers: function (t, e) {
            var n, i, s, o, r = [],
                a = e.delegateCount,
                l = t.target;
            if (a && l.nodeType && (!t.button || "click" !== t.type))
                for (; l != this; l = l.parentNode || this)
                    if (1 === l.nodeType && (l.disabled !== !0 || "click" !== t.type)) {
                        for (s = [], o = 0; a > o; o++) i = e[o], n = i.selector + " ", void 0 === s[n] && (s[n] = i.needsContext ? st(n, this).index(l) >= 0 : st.find(n, this, null, [l]).length), s[n] && s.push(i);
                        s.length && r.push({
                            elem: l,
                            handlers: s
                        })
                    }
            return a < e.length && r.push({
                elem: this,
                handlers: e.slice(a)
            }), r
        },
        fix: function (t) {
            if (t[st.expando]) return t;
            var e, n, i, s = t.type,
                o = t,
                r = this.fixHooks[s];
            for (r || (this.fixHooks[s] = r = Mt.test(s) ? this.mouseHooks : Nt.test(s) ? this.keyHooks : {}), i = r.props ? this.props.concat(r.props) : this.props, t = new st.Event(o), e = i.length; e--;) n = i[e], t[n] = o[n];
            return t.target || (t.target = o.srcElement || pt), 3 === t.target.nodeType && (t.target = t.target.parentNode), t.metaKey = !!t.metaKey, r.filter ? r.filter(t, o) : t
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function (t, e) {
                return null == t.which && (t.which = null != e.charCode ? e.charCode : e.keyCode), t
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function (t, e) {
                var n, i, s, o = e.button,
                    r = e.fromElement;
                return null == t.pageX && null != e.clientX && (i = t.target.ownerDocument || pt, s = i.documentElement, n = i.body, t.pageX = e.clientX + (s && s.scrollLeft || n && n.scrollLeft || 0) - (s && s.clientLeft || n && n.clientLeft || 0), t.pageY = e.clientY + (s && s.scrollTop || n && n.scrollTop || 0) - (s && s.clientTop || n && n.clientTop || 0)), !t.relatedTarget && r && (t.relatedTarget = r === t.target ? e.toElement : r), t.which || void 0 === o || (t.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), t
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function () {
                    if (this !== p() && this.focus) try {
                        return this.focus(), !1
                    } catch (t) {}
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function () {
                    return this === p() && this.blur ? (this.blur(), !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function () {
                    return st.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0
                },
                _default: function (t) {
                    return st.nodeName(t.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function (t) {
                    void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result)
                }
            }
        },
        simulate: function (t, e, n, i) {
            var s = st.extend(new st.Event, n, {
                type: t,
                isSimulated: !0,
                originalEvent: {}
            });
            i ? st.event.trigger(s, null, e) : st.event.dispatch.call(e, s), s.isDefaultPrevented() && n.preventDefault()
        }
    }, st.removeEvent = pt.removeEventListener ? function (t, e, n) {
        t.removeEventListener && t.removeEventListener(e, n, !1)
    } : function (t, e, n) {
        var i = "on" + e;
        t.detachEvent && (typeof t[i] === kt && (t[i] = null), t.detachEvent(i, n))
    }, st.Event = function (t, e) {
        return this instanceof st.Event ? (t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && t.returnValue === !1 ? d : f) : this.type = t, e && st.extend(this, e), this.timeStamp = t && t.timeStamp || st.now(), void(this[st.expando] = !0)) : new st.Event(t, e)
    }, st.Event.prototype = {
        isDefaultPrevented: f,
        isPropagationStopped: f,
        isImmediatePropagationStopped: f,
        preventDefault: function () {
            var t = this.originalEvent;
            this.isDefaultPrevented = d, t && (t.preventDefault ? t.preventDefault() : t.returnValue = !1)
        },
        stopPropagation: function () {
            var t = this.originalEvent;
            this.isPropagationStopped = d, t && (t.stopPropagation && t.stopPropagation(), t.cancelBubble = !0)
        },
        stopImmediatePropagation: function () {
            var t = this.originalEvent;
            this.isImmediatePropagationStopped = d, t && t.stopImmediatePropagation && t.stopImmediatePropagation(), this.stopPropagation()
        }
    }, st.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function (t, e) {
        st.event.special[t] = {
            delegateType: e,
            bindType: e,
            handle: function (t) {
                var n, i = this,
                    s = t.relatedTarget,
                    o = t.handleObj;
                return (!s || s !== i && !st.contains(i, s)) && (t.type = o.origType, n = o.handler.apply(this, arguments), t.type = e), n
            }
        }
    }), nt.submitBubbles || (st.event.special.submit = {
        setup: function () {
            return st.nodeName(this, "form") ? !1 : void st.event.add(this, "click._submit keypress._submit", function (t) {
                var e = t.target,
                    n = st.nodeName(e, "input") || st.nodeName(e, "button") ? e.form : void 0;
                n && !st._data(n, "submitBubbles") && (st.event.add(n, "submit._submit", function (t) {
                    t._submit_bubble = !0
                }), st._data(n, "submitBubbles", !0))
            })
        },
        postDispatch: function (t) {
            t._submit_bubble && (delete t._submit_bubble, this.parentNode && !t.isTrigger && st.event.simulate("submit", this.parentNode, t, !0))
        },
        teardown: function () {
            return st.nodeName(this, "form") ? !1 : void st.event.remove(this, "._submit")
        }
    }), nt.changeBubbles || (st.event.special.change = {
        setup: function () {
            return $t.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (st.event.add(this, "propertychange._change", function (t) {
                "checked" === t.originalEvent.propertyName && (this._just_changed = !0)
            }), st.event.add(this, "click._change", function (t) {
                this._just_changed && !t.isTrigger && (this._just_changed = !1), st.event.simulate("change", this, t, !0)
            })), !1) : void st.event.add(this, "beforeactivate._change", function (t) {
                var e = t.target;
                $t.test(e.nodeName) && !st._data(e, "changeBubbles") && (st.event.add(e, "change._change", function (t) {
                    !this.parentNode || t.isSimulated || t.isTrigger || st.event.simulate("change", this.parentNode, t, !0)
                }), st._data(e, "changeBubbles", !0))
            })
        },
        handle: function (t) {
            var e = t.target;
            return this !== e || t.isSimulated || t.isTrigger || "radio" !== e.type && "checkbox" !== e.type ? t.handleObj.handler.apply(this, arguments) : void 0
        },
        teardown: function () {
            return st.event.remove(this, "._change"), !$t.test(this.nodeName)
        }
    }), nt.focusinBubbles || st.each({
        focus: "focusin",
        blur: "focusout"
    }, function (t, e) {
        var n = function (t) {
            st.event.simulate(e, t.target, st.event.fix(t), !0)
        };
        st.event.special[e] = {
            setup: function () {
                var i = this.ownerDocument || this,
                    s = st._data(i, e);
                s || i.addEventListener(t, n, !0), st._data(i, e, (s || 0) + 1)
            },
            teardown: function () {
                var i = this.ownerDocument || this,
                    s = st._data(i, e) - 1;
                s ? st._data(i, e, s) : (i.removeEventListener(t, n, !0), st._removeData(i, e))
            }
        }
    }), st.fn.extend({
        on: function (t, e, n, i, s) {
            var o, r;
            if ("object" == typeof t) {
                "string" != typeof e && (n = n || e, e = void 0);
                for (o in t) this.on(o, e, n, t[o], s);
                return this
            }
            if (null == n && null == i ? (i = e, n = e = void 0) : null == i && ("string" == typeof e ? (i = n, n = void 0) : (i = n, n = e, e = void 0)), i === !1) i = f;
            else if (!i) return this;
            return 1 === s && (r = i, i = function (t) {
                return st().off(t), r.apply(this, arguments)
            }, i.guid = r.guid || (r.guid = st.guid++)), this.each(function () {
                st.event.add(this, t, i, n, e)
            })
        },
        one: function (t, e, n, i) {
            return this.on(t, e, n, i, 1)
        },
        off: function (t, e, n) {
            var i, s;
            if (t && t.preventDefault && t.handleObj) return i = t.handleObj, st(t.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
            if ("object" == typeof t) {
                for (s in t) this.off(s, e, t[s]);
                return this
            }
            return (e === !1 || "function" == typeof e) && (n = e, e = void 0), n === !1 && (n = f), this.each(function () {
                st.event.remove(this, t, n, e)
            })
        },
        trigger: function (t, e) {
            return this.each(function () {
                st.event.trigger(t, e, this)
            })
        },
        triggerHandler: function (t, e) {
            var n = this[0];
            return n ? st.event.trigger(t, e, n, !0) : void 0
        }
    });
    var Pt = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        Ft = / jQuery\d+="(?:null|\d+)"/g,
        It = new RegExp("<(?:" + Pt + ")[\\s/>]", "i"),
        Rt = /^\s+/,
        qt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        Ht = /<([\w:]+)/,
        zt = /<tbody/i,
        Ut = /<|&#?\w+;/,
        Bt = /<(?:script|style|link)/i,
        Wt = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Yt = /^$|\/(?:java|ecma)script/i,
        Vt = /^true\/(.*)/,
        Gt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        Qt = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            area: [1, "<map>", "</map>"],
            param: [1, "<object>", "</object>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: nt.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
        },
        Kt = g(pt),
        Xt = Kt.appendChild(pt.createElement("div"));
    Qt.optgroup = Qt.option, Qt.tbody = Qt.tfoot = Qt.colgroup = Qt.caption = Qt.thead, Qt.th = Qt.td, st.extend({
        clone: function (t, e, n) {
            var i, s, o, r, a, l = st.contains(t.ownerDocument, t);
            if (nt.html5Clone || st.isXMLDoc(t) || !It.test("<" + t.nodeName + ">") ? o = t.cloneNode(!0) : (Xt.innerHTML = t.outerHTML, Xt.removeChild(o = Xt.firstChild)), !(nt.noCloneEvent && nt.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || st.isXMLDoc(t)))
                for (i = m(o), a = m(t), r = 0; null != (s = a[r]); ++r) i[r] && k(s, i[r]);
            if (e)
                if (n)
                    for (a = a || m(t), i = i || m(o), r = 0; null != (s = a[r]); r++) x(s, i[r]);
                else x(t, o);
            return i = m(o, "script"), i.length > 0 && w(i, !l && m(t, "script")), i = a = s = null, o
        },
        buildFragment: function (t, e, n, i) {
            for (var s, o, r, a, l, u, c, h = t.length, d = g(e), f = [], p = 0; h > p; p++)
                if (o = t[p], o || 0 === o)
                    if ("object" === st.type(o)) st.merge(f, o.nodeType ? [o] : o);
                    else if (Ut.test(o)) {
                for (a = a || d.appendChild(e.createElement("div")), l = (Ht.exec(o) || ["", ""])[1].toLowerCase(), c = Qt[l] || Qt._default, a.innerHTML = c[1] + o.replace(qt, "<$1></$2>") + c[2], s = c[0]; s--;) a = a.lastChild;
                if (!nt.leadingWhitespace && Rt.test(o) && f.push(e.createTextNode(Rt.exec(o)[0])), !nt.tbody)
                    for (o = "table" !== l || zt.test(o) ? "<table>" !== c[1] || zt.test(o) ? 0 : a : a.firstChild, s = o && o.childNodes.length; s--;) st.nodeName(u = o.childNodes[s], "tbody") && !u.childNodes.length && o.removeChild(u);
                for (st.merge(f, a.childNodes), a.textContent = ""; a.firstChild;) a.removeChild(a.firstChild);
                a = d.lastChild
            } else f.push(e.createTextNode(o));
            for (a && d.removeChild(a), nt.appendChecked || st.grep(m(f, "input"), v), p = 0; o = f[p++];)
                if ((!i || -1 === st.inArray(o, i)) && (r = st.contains(o.ownerDocument, o), a = m(d.appendChild(o), "script"), r && w(a), n))
                    for (s = 0; o = a[s++];) Yt.test(o.type || "") && n.push(o);
            return a = null, d
        },
        cleanData: function (t, e) {
            for (var n, i, s, o, r = 0, a = st.expando, l = st.cache, u = nt.deleteExpando, c = st.event.special; null != (n = t[r]); r++)
                if ((e || st.acceptData(n)) && (s = n[a], o = s && l[s])) {
                    if (o.events)
                        for (i in o.events) c[i] ? st.event.remove(n, i) : st.removeEvent(n, i, o.handle);
                    l[s] && (delete l[s], u ? delete n[a] : typeof n.removeAttribute !== kt ? n.removeAttribute(a) : n[a] = null, G.push(s))
                }
        }
    }), st.fn.extend({
        text: function (t) {
            return jt(this, function (t) {
                return void 0 === t ? st.text(this) : this.empty().append((this[0] && this[0].ownerDocument || pt).createTextNode(t))
            }, null, t, arguments.length)
        },
        append: function () {
            return this.domManip(arguments, function (t) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var e = y(this, t);
                    e.appendChild(t)
                }
            })
        },
        prepend: function () {
            return this.domManip(arguments, function (t) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var e = y(this, t);
                    e.insertBefore(t, e.firstChild)
                }
            })
        },
        before: function () {
            return this.domManip(arguments, function (t) {
                this.parentNode && this.parentNode.insertBefore(t, this)
            })
        },
        after: function () {
            return this.domManip(arguments, function (t) {
                this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
            })
        },
        remove: function (t, e) {
            for (var n, i = t ? st.filter(t, this) : this, s = 0; null != (n = i[s]); s++) e || 1 !== n.nodeType || st.cleanData(m(n)), n.parentNode && (e && st.contains(n.ownerDocument, n) && w(m(n, "script")), n.parentNode.removeChild(n));
            return this
        },
        empty: function () {
            for (var t, e = 0; null != (t = this[e]); e++) {
                for (1 === t.nodeType && st.cleanData(m(t, !1)); t.firstChild;) t.removeChild(t.firstChild);
                t.options && st.nodeName(t, "select") && (t.options.length = 0)
            }
            return this
        },
        clone: function (t, e) {
            return t = null == t ? !1 : t, e = null == e ? t : e, this.map(function () {
                return st.clone(this, t, e)
            })
        },
        html: function (t) {
            return jt(this, function (t) {
                var e = this[0] || {},
                    n = 0,
                    i = this.length;
                if (void 0 === t) return 1 === e.nodeType ? e.innerHTML.replace(Ft, "") : void 0;
                if ("string" == typeof t && !Bt.test(t) && (nt.htmlSerialize || !It.test(t)) && (nt.leadingWhitespace || !Rt.test(t)) && !Qt[(Ht.exec(t) || ["", ""])[1].toLowerCase()]) {
                    t = t.replace(qt, "<$1></$2>");
                    try {
                        for (; i > n; n++) e = this[n] || {}, 1 === e.nodeType && (st.cleanData(m(e, !1)), e.innerHTML = t);
                        e = 0
                    } catch (s) {}
                }
                e && this.empty().append(t)
            }, null, t, arguments.length)
        },
        replaceWith: function () {
            var t = arguments[0];
            return this.domManip(arguments, function (e) {
                t = this.parentNode, st.cleanData(m(this)), t && t.replaceChild(e, this)
            }), t && (t.length || t.nodeType) ? this : this.remove()
        },
        detach: function (t) {
            return this.remove(t, !0)
        },
        domManip: function (t, e) {
            t = K.apply([], t);
            var n, i, s, o, r, a, l = 0,
                u = this.length,
                c = this,
                h = u - 1,
                d = t[0],
                f = st.isFunction(d);
            if (f || u > 1 && "string" == typeof d && !nt.checkClone && Wt.test(d)) return this.each(function (n) {
                var i = c.eq(n);
                f && (t[0] = d.call(this, n, i.html())), i.domManip(t, e)
            });
            if (u && (a = st.buildFragment(t, this[0].ownerDocument, !1, this), n = a.firstChild, 1 === a.childNodes.length && (a = n), n)) {
                for (o = st.map(m(a, "script"), b), s = o.length; u > l; l++) i = a, l !== h && (i = st.clone(i, !0, !0), s && st.merge(o, m(i, "script"))), e.call(this[l], i, l);
                if (s)
                    for (r = o[o.length - 1].ownerDocument, st.map(o, _), l = 0; s > l; l++) i = o[l], Yt.test(i.type || "") && !st._data(i, "globalEval") && st.contains(r, i) && (i.src ? st._evalUrl && st._evalUrl(i.src) : st.globalEval((i.text || i.textContent || i.innerHTML || "").replace(Gt, "")));
                a = n = null
            }
            return this
        }
    }), st.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (t, e) {
        st.fn[t] = function (t) {
            for (var n, i = 0, s = [], o = st(t), r = o.length - 1; r >= i; i++) n = i === r ? this : this.clone(!0), st(o[i])[e](n), X.apply(s, n.get());
            return this.pushStack(s)
        }
    });
    var Jt, Zt = {};
    ! function () {
        var t;
        nt.shrinkWrapBlocks = function () {
            if (null != t) return t;
            t = !1;
            var e, n, i;
            return n = pt.getElementsByTagName("body")[0], n && n.style ? (e = pt.createElement("div"), i = pt.createElement("div"), i.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(i).appendChild(e), typeof e.style.zoom !== kt && (e.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", e.appendChild(pt.createElement("div")).style.width = "5px", t = 3 !== e.offsetWidth), n.removeChild(i), t) : void 0
        }
    }();
    var te, ee, ne = /^margin/,
        ie = new RegExp("^(" + Tt + ")(?!px)[a-z%]+$", "i"),
        se = /^(top|right|bottom|left)$/;
    t.getComputedStyle ? (te = function (t) {
            return t.ownerDocument.defaultView.getComputedStyle(t, null)
        }, ee = function (t, e, n) {
            var i, s, o, r, a = t.style;
            return n = n || te(t), r = n ? n.getPropertyValue(e) || n[e] : void 0, n && ("" !== r || st.contains(t.ownerDocument, t) || (r = st.style(t, e)), ie.test(r) && ne.test(e) && (i = a.width, s = a.minWidth, o = a.maxWidth, a.minWidth = a.maxWidth = a.width = r, r = n.width, a.width = i, a.minWidth = s, a.maxWidth = o)), void 0 === r ? r : r + ""
        }) : pt.documentElement.currentStyle && (te = function (t) {
            return t.currentStyle
        }, ee = function (t, e, n) {
            var i, s, o, r, a = t.style;
            return n = n || te(t), r = n ? n[e] : void 0, null == r && a && a[e] && (r = a[e]), ie.test(r) && !se.test(e) && (i = a.left, s = t.runtimeStyle, o = s && s.left, o && (s.left = t.currentStyle.left), a.left = "fontSize" === e ? "1em" : r, r = a.pixelLeft + "px", a.left = i, o && (s.left = o)), void 0 === r ? r : r + "" || "auto"
        }),
        function () {
            function e() {
                var e, n, i, s;
                n = pt.getElementsByTagName("body")[0], n && n.style && (e = pt.createElement("div"), i = pt.createElement("div"), i.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(i).appendChild(e), e.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", o = r = !1, l = !0, t.getComputedStyle && (o = "1%" !== (t.getComputedStyle(e, null) || {}).top, r = "4px" === (t.getComputedStyle(e, null) || {
                        width: "4px"
                    }).width, s = e.appendChild(pt.createElement("div")), s.style.cssText = e.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", s.style.marginRight = s.style.width = "0", e.style.width = "1px", l = !parseFloat((t.getComputedStyle(s, null) || {}).marginRight)), e.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", s = e.getElementsByTagName("td"), s[0].style.cssText = "margin:0;border:0;padding:0;display:none",
                    a = 0 === s[0].offsetHeight, a && (s[0].style.display = "", s[1].style.display = "none", a = 0 === s[0].offsetHeight), n.removeChild(i))
            }
            var n, i, s, o, r, a, l;
            n = pt.createElement("div"), n.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", s = n.getElementsByTagName("a")[0], i = s && s.style, i && (i.cssText = "float:left;opacity:.5", nt.opacity = "0.5" === i.opacity, nt.cssFloat = !!i.cssFloat, n.style.backgroundClip = "content-box", n.cloneNode(!0).style.backgroundClip = "", nt.clearCloneStyle = "content-box" === n.style.backgroundClip, nt.boxSizing = "" === i.boxSizing || "" === i.MozBoxSizing || "" === i.WebkitBoxSizing, st.extend(nt, {
                reliableHiddenOffsets: function () {
                    return null == a && e(), a
                },
                boxSizingReliable: function () {
                    return null == r && e(), r
                },
                pixelPosition: function () {
                    return null == o && e(), o
                },
                reliableMarginRight: function () {
                    return null == l && e(), l
                }
            }))
        }(), st.swap = function (t, e, n, i) {
            var s, o, r = {};
            for (o in e) r[o] = t.style[o], t.style[o] = e[o];
            s = n.apply(t, i || []);
            for (o in e) t.style[o] = r[o];
            return s
        };
    var oe = /alpha\([^)]*\)/i,
        re = /opacity\s*=\s*([^)]*)/,
        ae = /^(none|table(?!-c[ea]).+)/,
        le = new RegExp("^(" + Tt + ")(.*)$", "i"),
        ue = new RegExp("^([+-])=(" + Tt + ")", "i"),
        ce = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        he = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        de = ["Webkit", "O", "Moz", "ms"];
    st.extend({
        cssHooks: {
            opacity: {
                get: function (t, e) {
                    if (e) {
                        var n = ee(t, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": nt.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function (t, e, n, i) {
            if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                var s, o, r, a = st.camelCase(e),
                    l = t.style;
                if (e = st.cssProps[a] || (st.cssProps[a] = D(l, a)), r = st.cssHooks[e] || st.cssHooks[a], void 0 === n) return r && "get" in r && void 0 !== (s = r.get(t, !1, i)) ? s : l[e];
                if (o = typeof n, "string" === o && (s = ue.exec(n)) && (n = (s[1] + 1) * s[2] + parseFloat(st.css(t, e)), o = "number"), null != n && n === n && ("number" !== o || st.cssNumber[a] || (n += "px"), nt.clearCloneStyle || "" !== n || 0 !== e.indexOf("background") || (l[e] = "inherit"), !(r && "set" in r && void 0 === (n = r.set(t, n, i))))) try {
                    l[e] = n
                } catch (u) {}
            }
        },
        css: function (t, e, n, i) {
            var s, o, r, a = st.camelCase(e);
            return e = st.cssProps[a] || (st.cssProps[a] = D(t.style, a)), r = st.cssHooks[e] || st.cssHooks[a], r && "get" in r && (o = r.get(t, !0, n)), void 0 === o && (o = ee(t, e, i)), "normal" === o && e in he && (o = he[e]), "" === n || n ? (s = parseFloat(o), n === !0 || st.isNumeric(s) ? s || 0 : o) : o
        }
    }), st.each(["height", "width"], function (t, e) {
        st.cssHooks[e] = {
            get: function (t, n, i) {
                return n ? ae.test(st.css(t, "display")) && 0 === t.offsetWidth ? st.swap(t, ce, function () {
                    return $(t, e, i)
                }) : $(t, e, i) : void 0
            },
            set: function (t, n, i) {
                var s = i && te(t);
                return j(t, n, i ? A(t, e, i, nt.boxSizing && "border-box" === st.css(t, "boxSizing", !1, s), s) : 0)
            }
        }
    }), nt.opacity || (st.cssHooks.opacity = {
        get: function (t, e) {
            return re.test((e && t.currentStyle ? t.currentStyle.filter : t.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : e ? "1" : ""
        },
        set: function (t, e) {
            var n = t.style,
                i = t.currentStyle,
                s = st.isNumeric(e) ? "alpha(opacity=" + 100 * e + ")" : "",
                o = i && i.filter || n.filter || "";
            n.zoom = 1, (e >= 1 || "" === e) && "" === st.trim(o.replace(oe, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === e || i && !i.filter) || (n.filter = oe.test(o) ? o.replace(oe, s) : o + " " + s)
        }
    }), st.cssHooks.marginRight = T(nt.reliableMarginRight, function (t, e) {
        return e ? st.swap(t, {
            display: "inline-block"
        }, ee, [t, "marginRight"]) : void 0
    }), st.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function (t, e) {
        st.cssHooks[t + e] = {
            expand: function (n) {
                for (var i = 0, s = {}, o = "string" == typeof n ? n.split(" ") : [n]; 4 > i; i++) s[t + Dt[i] + e] = o[i] || o[i - 2] || o[0];
                return s
            }
        }, ne.test(t) || (st.cssHooks[t + e].set = j)
    }), st.fn.extend({
        css: function (t, e) {
            return jt(this, function (t, e, n) {
                var i, s, o = {},
                    r = 0;
                if (st.isArray(e)) {
                    for (i = te(t), s = e.length; s > r; r++) o[e[r]] = st.css(t, e[r], !1, i);
                    return o
                }
                return void 0 !== n ? st.style(t, e, n) : st.css(t, e)
            }, t, e, arguments.length > 1)
        },
        show: function () {
            return E(this, !0)
        },
        hide: function () {
            return E(this)
        },
        toggle: function (t) {
            return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function () {
                Et(this) ? st(this).show() : st(this).hide()
            })
        }
    }), st.Tween = N, N.prototype = {
        constructor: N,
        init: function (t, e, n, i, s, o) {
            this.elem = t, this.prop = n, this.easing = s || "swing", this.options = e, this.start = this.now = this.cur(), this.end = i, this.unit = o || (st.cssNumber[n] ? "" : "px")
        },
        cur: function () {
            var t = N.propHooks[this.prop];
            return t && t.get ? t.get(this) : N.propHooks._default.get(this)
        },
        run: function (t) {
            var e, n = N.propHooks[this.prop];
            return this.options.duration ? this.pos = e = st.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : this.pos = e = t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : N.propHooks._default.set(this), this
        }
    }, N.prototype.init.prototype = N.prototype, N.propHooks = {
        _default: {
            get: function (t) {
                var e;
                return null == t.elem[t.prop] || t.elem.style && null != t.elem.style[t.prop] ? (e = st.css(t.elem, t.prop, ""), e && "auto" !== e ? e : 0) : t.elem[t.prop]
            },
            set: function (t) {
                st.fx.step[t.prop] ? st.fx.step[t.prop](t) : t.elem.style && (null != t.elem.style[st.cssProps[t.prop]] || st.cssHooks[t.prop]) ? st.style(t.elem, t.prop, t.now + t.unit) : t.elem[t.prop] = t.now
            }
        }
    }, N.propHooks.scrollTop = N.propHooks.scrollLeft = {
        set: function (t) {
            t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
        }
    }, st.easing = {
        linear: function (t) {
            return t
        },
        swing: function (t) {
            return .5 - Math.cos(t * Math.PI) / 2
        }
    }, st.fx = N.prototype.init, st.fx.step = {};
    var fe, pe, ge = /^(?:toggle|show|hide)$/,
        me = new RegExp("^(?:([+-])=|)(" + Tt + ")([a-z%]*)$", "i"),
        ve = /queueHooks$/,
        ye = [P],
        be = {
            "*": [function (t, e) {
                var n = this.createTween(t, e),
                    i = n.cur(),
                    s = me.exec(e),
                    o = s && s[3] || (st.cssNumber[t] ? "" : "px"),
                    r = (st.cssNumber[t] || "px" !== o && +i) && me.exec(st.css(n.elem, t)),
                    a = 1,
                    l = 20;
                if (r && r[3] !== o) {
                    o = o || r[3], s = s || [], r = +i || 1;
                    do a = a || ".5", r /= a, st.style(n.elem, t, r + o); while (a !== (a = n.cur() / i) && 1 !== a && --l)
                }
                return s && (r = n.start = +r || +i || 0, n.unit = o, n.end = s[1] ? r + (s[1] + 1) * s[2] : +s[2]), n
            }]
        };
    st.Animation = st.extend(I, {
            tweener: function (t, e) {
                st.isFunction(t) ? (e = t, t = ["*"]) : t = t.split(" ");
                for (var n, i = 0, s = t.length; s > i; i++) n = t[i], be[n] = be[n] || [], be[n].unshift(e)
            },
            prefilter: function (t, e) {
                e ? ye.unshift(t) : ye.push(t)
            }
        }), st.speed = function (t, e, n) {
            var i = t && "object" == typeof t ? st.extend({}, t) : {
                complete: n || !n && e || st.isFunction(t) && t,
                duration: t,
                easing: n && e || e && !st.isFunction(e) && e
            };
            return i.duration = st.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in st.fx.speeds ? st.fx.speeds[i.duration] : st.fx.speeds._default, (null == i.queue || i.queue === !0) && (i.queue = "fx"), i.old = i.complete, i.complete = function () {
                st.isFunction(i.old) && i.old.call(this), i.queue && st.dequeue(this, i.queue)
            }, i
        }, st.fn.extend({
            fadeTo: function (t, e, n, i) {
                return this.filter(Et).css("opacity", 0).show().end().animate({
                    opacity: e
                }, t, n, i)
            },
            animate: function (t, e, n, i) {
                var s = st.isEmptyObject(t),
                    o = st.speed(e, n, i),
                    r = function () {
                        var e = I(this, st.extend({}, t), o);
                        (s || st._data(this, "finish")) && e.stop(!0)
                    };
                return r.finish = r, s || o.queue === !1 ? this.each(r) : this.queue(o.queue, r)
            },
            stop: function (t, e, n) {
                var i = function (t) {
                    var e = t.stop;
                    delete t.stop, e(n)
                };
                return "string" != typeof t && (n = e, e = t, t = void 0), e && t !== !1 && this.queue(t || "fx", []), this.each(function () {
                    var e = !0,
                        s = null != t && t + "queueHooks",
                        o = st.timers,
                        r = st._data(this);
                    if (s) r[s] && r[s].stop && i(r[s]);
                    else
                        for (s in r) r[s] && r[s].stop && ve.test(s) && i(r[s]);
                    for (s = o.length; s--;) o[s].elem !== this || null != t && o[s].queue !== t || (o[s].anim.stop(n), e = !1, o.splice(s, 1));
                    (e || !n) && st.dequeue(this, t)
                })
            },
            finish: function (t) {
                return t !== !1 && (t = t || "fx"), this.each(function () {
                    var e, n = st._data(this),
                        i = n[t + "queue"],
                        s = n[t + "queueHooks"],
                        o = st.timers,
                        r = i ? i.length : 0;
                    for (n.finish = !0, st.queue(this, t, []), s && s.stop && s.stop.call(this, !0), e = o.length; e--;) o[e].elem === this && o[e].queue === t && (o[e].anim.stop(!0), o.splice(e, 1));
                    for (e = 0; r > e; e++) i[e] && i[e].finish && i[e].finish.call(this);
                    delete n.finish
                })
            }
        }), st.each(["toggle", "show", "hide"], function (t, e) {
            var n = st.fn[e];
            st.fn[e] = function (t, i, s) {
                return null == t || "boolean" == typeof t ? n.apply(this, arguments) : this.animate(L(e, !0), t, i, s)
            }
        }), st.each({
            slideDown: L("show"),
            slideUp: L("hide"),
            slideToggle: L("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function (t, e) {
            st.fn[t] = function (t, n, i) {
                return this.animate(e, t, n, i)
            }
        }), st.timers = [], st.fx.tick = function () {
            var t, e = st.timers,
                n = 0;
            for (fe = st.now(); n < e.length; n++) t = e[n], t() || e[n] !== t || e.splice(n--, 1);
            e.length || st.fx.stop(), fe = void 0
        }, st.fx.timer = function (t) {
            st.timers.push(t), t() ? st.fx.start() : st.timers.pop()
        }, st.fx.interval = 13, st.fx.start = function () {
            pe || (pe = setInterval(st.fx.tick, st.fx.interval))
        }, st.fx.stop = function () {
            clearInterval(pe), pe = null
        }, st.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, st.fn.delay = function (t, e) {
            return t = st.fx ? st.fx.speeds[t] || t : t, e = e || "fx", this.queue(e, function (e, n) {
                var i = setTimeout(e, t);
                n.stop = function () {
                    clearTimeout(i)
                }
            })
        },
        function () {
            var t, e, n, i, s;
            e = pt.createElement("div"), e.setAttribute("className", "t"), e.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", i = e.getElementsByTagName("a")[0], n = pt.createElement("select"), s = n.appendChild(pt.createElement("option")), t = e.getElementsByTagName("input")[0], i.style.cssText = "top:1px", nt.getSetAttribute = "t" !== e.className, nt.style = /top/.test(i.getAttribute("style")), nt.hrefNormalized = "/a" === i.getAttribute("href"), nt.checkOn = !!t.value, nt.optSelected = s.selected, nt.enctype = !!pt.createElement("form").enctype, n.disabled = !0, nt.optDisabled = !s.disabled, t = pt.createElement("input"), t.setAttribute("value", ""), nt.input = "" === t.getAttribute("value"), t.value = "t", t.setAttribute("type", "radio"), nt.radioValue = "t" === t.value
        }();
    var _e = /\r/g;
    st.fn.extend({
        val: function (t) {
            var e, n, i, s = this[0]; {
                if (arguments.length) return i = st.isFunction(t), this.each(function (n) {
                    var s;
                    1 === this.nodeType && (s = i ? t.call(this, n, st(this).val()) : t, null == s ? s = "" : "number" == typeof s ? s += "" : st.isArray(s) && (s = st.map(s, function (t) {
                        return null == t ? "" : t + ""
                    })), e = st.valHooks[this.type] || st.valHooks[this.nodeName.toLowerCase()], e && "set" in e && void 0 !== e.set(this, s, "value") || (this.value = s))
                });
                if (s) return e = st.valHooks[s.type] || st.valHooks[s.nodeName.toLowerCase()], e && "get" in e && void 0 !== (n = e.get(s, "value")) ? n : (n = s.value, "string" == typeof n ? n.replace(_e, "") : null == n ? "" : n)
            }
        }
    }), st.extend({
        valHooks: {
            option: {
                get: function (t) {
                    var e = st.find.attr(t, "value");
                    return null != e ? e : st.trim(st.text(t))
                }
            },
            select: {
                get: function (t) {
                    for (var e, n, i = t.options, s = t.selectedIndex, o = "select-one" === t.type || 0 > s, r = o ? null : [], a = o ? s + 1 : i.length, l = 0 > s ? a : o ? s : 0; a > l; l++)
                        if (n = i[l], (n.selected || l === s) && (nt.optDisabled ? !n.disabled : null === n.getAttribute("disabled")) && (!n.parentNode.disabled || !st.nodeName(n.parentNode, "optgroup"))) {
                            if (e = st(n).val(), o) return e;
                            r.push(e)
                        }
                    return r
                },
                set: function (t, e) {
                    for (var n, i, s = t.options, o = st.makeArray(e), r = s.length; r--;)
                        if (i = s[r], st.inArray(st.valHooks.option.get(i), o) >= 0) try {
                            i.selected = n = !0
                        } catch (a) {
                            i.scrollHeight
                        } else i.selected = !1;
                    return n || (t.selectedIndex = -1), s
                }
            }
        }
    }), st.each(["radio", "checkbox"], function () {
        st.valHooks[this] = {
            set: function (t, e) {
                return st.isArray(e) ? t.checked = st.inArray(st(t).val(), e) >= 0 : void 0
            }
        }, nt.checkOn || (st.valHooks[this].get = function (t) {
            return null === t.getAttribute("value") ? "on" : t.value
        })
    });
    var we, xe, ke = st.expr.attrHandle,
        Se = /^(?:checked|selected)$/i,
        Ce = nt.getSetAttribute,
        Te = nt.input;
    st.fn.extend({
        attr: function (t, e) {
            return jt(this, st.attr, t, e, arguments.length > 1)
        },
        removeAttr: function (t) {
            return this.each(function () {
                st.removeAttr(this, t)
            })
        }
    }), st.extend({
        attr: function (t, e, n) {
            var i, s, o = t.nodeType;
            if (t && 3 !== o && 8 !== o && 2 !== o) return typeof t.getAttribute === kt ? st.prop(t, e, n) : (1 === o && st.isXMLDoc(t) || (e = e.toLowerCase(), i = st.attrHooks[e] || (st.expr.match.bool.test(e) ? xe : we)), void 0 === n ? i && "get" in i && null !== (s = i.get(t, e)) ? s : (s = st.find.attr(t, e), null == s ? void 0 : s) : null !== n ? i && "set" in i && void 0 !== (s = i.set(t, n, e)) ? s : (t.setAttribute(e, n + ""), n) : void st.removeAttr(t, e))
        },
        removeAttr: function (t, e) {
            var n, i, s = 0,
                o = e && e.match(bt);
            if (o && 1 === t.nodeType)
                for (; n = o[s++];) i = st.propFix[n] || n, st.expr.match.bool.test(n) ? Te && Ce || !Se.test(n) ? t[i] = !1 : t[st.camelCase("default-" + n)] = t[i] = !1 : st.attr(t, n, ""), t.removeAttribute(Ce ? n : i)
        },
        attrHooks: {
            type: {
                set: function (t, e) {
                    if (!nt.radioValue && "radio" === e && st.nodeName(t, "input")) {
                        var n = t.value;
                        return t.setAttribute("type", e), n && (t.value = n), e
                    }
                }
            }
        }
    }), xe = {
        set: function (t, e, n) {
            return e === !1 ? st.removeAttr(t, n) : Te && Ce || !Se.test(n) ? t.setAttribute(!Ce && st.propFix[n] || n, n) : t[st.camelCase("default-" + n)] = t[n] = !0, n
        }
    }, st.each(st.expr.match.bool.source.match(/\w+/g), function (t, e) {
        var n = ke[e] || st.find.attr;
        ke[e] = Te && Ce || !Se.test(e) ? function (t, e, i) {
            var s, o;
            return i || (o = ke[e], ke[e] = s, s = null != n(t, e, i) ? e.toLowerCase() : null, ke[e] = o), s
        } : function (t, e, n) {
            return n ? void 0 : t[st.camelCase("default-" + e)] ? e.toLowerCase() : null
        }
    }), Te && Ce || (st.attrHooks.value = {
        set: function (t, e, n) {
            return st.nodeName(t, "input") ? void(t.defaultValue = e) : we && we.set(t, e, n)
        }
    }), Ce || (we = {
        set: function (t, e, n) {
            var i = t.getAttributeNode(n);
            return i || t.setAttributeNode(i = t.ownerDocument.createAttribute(n)), i.value = e += "", "value" === n || e === t.getAttribute(n) ? e : void 0
        }
    }, ke.id = ke.name = ke.coords = function (t, e, n) {
        var i;
        return n ? void 0 : (i = t.getAttributeNode(e)) && "" !== i.value ? i.value : null
    }, st.valHooks.button = {
        get: function (t, e) {
            var n = t.getAttributeNode(e);
            return n && n.specified ? n.value : void 0
        },
        set: we.set
    }, st.attrHooks.contenteditable = {
        set: function (t, e, n) {
            we.set(t, "" === e ? !1 : e, n)
        }
    }, st.each(["width", "height"], function (t, e) {
        st.attrHooks[e] = {
            set: function (t, n) {
                return "" === n ? (t.setAttribute(e, "auto"), n) : void 0
            }
        }
    })), nt.style || (st.attrHooks.style = {
        get: function (t) {
            return t.style.cssText || void 0
        },
        set: function (t, e) {
            return t.style.cssText = e + ""
        }
    });
    var De = /^(?:input|select|textarea|button|object)$/i,
        Ee = /^(?:a|area)$/i;
    st.fn.extend({
        prop: function (t, e) {
            return jt(this, st.prop, t, e, arguments.length > 1)
        },
        removeProp: function (t) {
            return t = st.propFix[t] || t, this.each(function () {
                try {
                    this[t] = void 0, delete this[t]
                } catch (e) {}
            })
        }
    }), st.extend({
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function (t, e, n) {
            var i, s, o, r = t.nodeType;
            if (t && 3 !== r && 8 !== r && 2 !== r) return o = 1 !== r || !st.isXMLDoc(t), o && (e = st.propFix[e] || e, s = st.propHooks[e]), void 0 !== n ? s && "set" in s && void 0 !== (i = s.set(t, n, e)) ? i : t[e] = n : s && "get" in s && null !== (i = s.get(t, e)) ? i : t[e]
        },
        propHooks: {
            tabIndex: {
                get: function (t) {
                    var e = st.find.attr(t, "tabindex");
                    return e ? parseInt(e, 10) : De.test(t.nodeName) || Ee.test(t.nodeName) && t.href ? 0 : -1
                }
            }
        }
    }), nt.hrefNormalized || st.each(["href", "src"], function (t, e) {
        st.propHooks[e] = {
            get: function (t) {
                return t.getAttribute(e, 4)
            }
        }
    }), nt.optSelected || (st.propHooks.selected = {
        get: function (t) {
            var e = t.parentNode;
            return e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex), null
        }
    }), st.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
        st.propFix[this.toLowerCase()] = this
    }), nt.enctype || (st.propFix.enctype = "encoding");
    var je = /[\t\r\n\f]/g;
    st.fn.extend({
        addClass: function (t) {
            var e, n, i, s, o, r, a = 0,
                l = this.length,
                u = "string" == typeof t && t;
            if (st.isFunction(t)) return this.each(function (e) {
                st(this).addClass(t.call(this, e, this.className))
            });
            if (u)
                for (e = (t || "").match(bt) || []; l > a; a++)
                    if (n = this[a], i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(je, " ") : " ")) {
                        for (o = 0; s = e[o++];) i.indexOf(" " + s + " ") < 0 && (i += s + " ");
                        r = st.trim(i), n.className !== r && (n.className = r)
                    }
            return this
        },
        removeClass: function (t) {
            var e, n, i, s, o, r, a = 0,
                l = this.length,
                u = 0 === arguments.length || "string" == typeof t && t;
            if (st.isFunction(t)) return this.each(function (e) {
                st(this).removeClass(t.call(this, e, this.className))
            });
            if (u)
                for (e = (t || "").match(bt) || []; l > a; a++)
                    if (n = this[a], i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(je, " ") : "")) {
                        for (o = 0; s = e[o++];)
                            for (; i.indexOf(" " + s + " ") >= 0;) i = i.replace(" " + s + " ", " ");
                        r = t ? st.trim(i) : "", n.className !== r && (n.className = r)
                    }
            return this
        },
        toggleClass: function (t, e) {
            var n = typeof t;
            return "boolean" == typeof e && "string" === n ? e ? this.addClass(t) : this.removeClass(t) : st.isFunction(t) ? this.each(function (n) {
                st(this).toggleClass(t.call(this, n, this.className, e), e)
            }) : this.each(function () {
                if ("string" === n)
                    for (var e, i = 0, s = st(this), o = t.match(bt) || []; e = o[i++];) s.hasClass(e) ? s.removeClass(e) : s.addClass(e);
                else(n === kt || "boolean" === n) && (this.className && st._data(this, "__className__", this.className), this.className = this.className || t === !1 ? "" : st._data(this, "__className__") || "")
            })
        },
        hasClass: function (t) {
            for (var e = " " + t + " ", n = 0, i = this.length; i > n; n++)
                if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(je, " ").indexOf(e) >= 0) return !0;
            return !1
        }
    }), st.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (t, e) {
        st.fn[e] = function (t, n) {
            return arguments.length > 0 ? this.on(e, null, t, n) : this.trigger(e)
        }
    }), st.fn.extend({
        hover: function (t, e) {
            return this.mouseenter(t).mouseleave(e || t)
        },
        bind: function (t, e, n) {
            return this.on(t, null, e, n)
        },
        unbind: function (t, e) {
            return this.off(t, null, e)
        },
        delegate: function (t, e, n, i) {
            return this.on(e, t, n, i)
        },
        undelegate: function (t, e, n) {
            return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", n)
        }
    });
    var Ae = st.now(),
        $e = /\?/,
        Ne = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    st.parseJSON = function (e) {
        if (t.JSON && t.JSON.parse) return t.JSON.parse(e + "");
        var n, i = null,
            s = st.trim(e + "");
        return s && !st.trim(s.replace(Ne, function (t, e, s, o) {
            return n && e && (i = 0), 0 === i ? t : (n = s || e, i += !o - !s, "")
        })) ? Function("return " + s)() : st.error("Invalid JSON: " + e)
    }, st.parseXML = function (e) {
        var n, i;
        if (!e || "string" != typeof e) return null;
        try {
            t.DOMParser ? (i = new DOMParser, n = i.parseFromString(e, "text/xml")) : (n = new ActiveXObject("Microsoft.XMLDOM"), n.async = "false", n.loadXML(e))
        } catch (s) {
            n = void 0
        }
        return n && n.documentElement && !n.getElementsByTagName("parsererror").length || st.error("Invalid XML: " + e), n
    };
    var Me, Le, Oe = /#.*$/,
        Pe = /([?&])_=[^&]*/,
        Fe = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
        Ie = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        Re = /^(?:GET|HEAD)$/,
        qe = /^\/\//,
        He = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
        ze = {},
        Ue = {},
        Be = "*/".concat("*");
    try {
        Le = location.href
    } catch (We) {
        Le = pt.createElement("a"), Le.href = "", Le = Le.href
    }
    Me = He.exec(Le.toLowerCase()) || [], st.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Le,
            type: "GET",
            isLocal: Ie.test(Me[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Be,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": st.parseJSON,
                "text xml": st.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function (t, e) {
            return e ? H(H(t, st.ajaxSettings), e) : H(st.ajaxSettings, t)
        },
        ajaxPrefilter: R(ze),
        ajaxTransport: R(Ue),
        ajax: function (t, e) {
            function n(t, e, n, i) {
                var s, c, v, y, _, x = e;
                2 !== b && (b = 2, a && clearTimeout(a), u = void 0, r = i || "", w.readyState = t > 0 ? 4 : 0, s = t >= 200 && 300 > t || 304 === t, n && (y = z(h, w, n)), y = U(h, y, w, s), s ? (h.ifModified && (_ = w.getResponseHeader("Last-Modified"), _ && (st.lastModified[o] = _), _ = w.getResponseHeader("etag"), _ && (st.etag[o] = _)), 204 === t || "HEAD" === h.type ? x = "nocontent" : 304 === t ? x = "notmodified" : (x = y.state, c = y.data, v = y.error, s = !v)) : (v = x, (t || !x) && (x = "error", 0 > t && (t = 0))), w.status = t, w.statusText = (e || x) + "", s ? p.resolveWith(d, [c, x, w]) : p.rejectWith(d, [w, x, v]), w.statusCode(m), m = void 0, l && f.trigger(s ? "ajaxSuccess" : "ajaxError", [w, h, s ? c : v]), g.fireWith(d, [w, x]), l && (f.trigger("ajaxComplete", [w, h]), --st.active || st.event.trigger("ajaxStop")))
            }
            "object" == typeof t && (e = t, t = void 0), e = e || {};
            var i, s, o, r, a, l, u, c, h = st.ajaxSetup({}, e),
                d = h.context || h,
                f = h.context && (d.nodeType || d.jquery) ? st(d) : st.event,
                p = st.Deferred(),
                g = st.Callbacks("once memory"),
                m = h.statusCode || {},
                v = {},
                y = {},
                b = 0,
                _ = "canceled",
                w = {
                    readyState: 0,
                    getResponseHeader: function (t) {
                        var e;
                        if (2 === b) {
                            if (!c)
                                for (c = {}; e = Fe.exec(r);) c[e[1].toLowerCase()] = e[2];
                            e = c[t.toLowerCase()]
                        }
                        return null == e ? null : e
                    },
                    getAllResponseHeaders: function () {
                        return 2 === b ? r : null
                    },
                    setRequestHeader: function (t, e) {
                        var n = t.toLowerCase();
                        return b || (t = y[n] = y[n] || t, v[t] = e), this
                    },
                    overrideMimeType: function (t) {
                        return b || (h.mimeType = t), this
                    },
                    statusCode: function (t) {
                        var e;
                        if (t)
                            if (2 > b)
                                for (e in t) m[e] = [m[e], t[e]];
                            else w.always(t[w.status]);
                        return this
                    },
                    abort: function (t) {
                        var e = t || _;
                        return u && u.abort(e), n(0, e), this
                    }
                };
            if (p.promise(w).complete = g.add, w.success = w.done, w.error = w.fail, h.url = ((t || h.url || Le) + "").replace(Oe, "").replace(qe, Me[1] + "//"), h.type = e.method || e.type || h.method || h.type, h.dataTypes = st.trim(h.dataType || "*").toLowerCase().match(bt) || [""], null == h.crossDomain && (i = He.exec(h.url.toLowerCase()), h.crossDomain = !(!i || i[1] === Me[1] && i[2] === Me[2] && (i[3] || ("http:" === i[1] ? "80" : "443")) === (Me[3] || ("http:" === Me[1] ? "80" : "443")))), h.data && h.processData && "string" != typeof h.data && (h.data = st.param(h.data, h.traditional)), q(ze, h, e, w), 2 === b) return w;
            l = h.global, l && 0 === st.active++ && st.event.trigger("ajaxStart"), h.type = h.type.toUpperCase(), h.hasContent = !Re.test(h.type), o = h.url, h.hasContent || (h.data && (o = h.url += ($e.test(o) ? "&" : "?") + h.data, delete h.data), h.cache === !1 && (h.url = Pe.test(o) ? o.replace(Pe, "$1_=" + Ae++) : o + ($e.test(o) ? "&" : "?") + "_=" + Ae++)), h.ifModified && (st.lastModified[o] && w.setRequestHeader("If-Modified-Since", st.lastModified[o]), st.etag[o] && w.setRequestHeader("If-None-Match", st.etag[o])), (h.data && h.hasContent && h.contentType !== !1 || e.contentType) && w.setRequestHeader("Content-Type", h.contentType), w.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + Be + "; q=0.01" : "") : h.accepts["*"]);
            for (s in h.headers) w.setRequestHeader(s, h.headers[s]);
            if (h.beforeSend && (h.beforeSend.call(d, w, h) === !1 || 2 === b)) return w.abort();
            _ = "abort";
            for (s in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) w[s](h[s]);
            if (u = q(Ue, h, e, w)) {
                w.readyState = 1, l && f.trigger("ajaxSend", [w, h]), h.async && h.timeout > 0 && (a = setTimeout(function () {
                    w.abort("timeout")
                }, h.timeout));
                try {
                    b = 1, u.send(v, n)
                } catch (x) {
                    if (!(2 > b)) throw x;
                    n(-1, x)
                }
            } else n(-1, "No Transport");
            return w
        },
        getJSON: function (t, e, n) {
            return st.get(t, e, n, "json")
        },
        getScript: function (t, e) {
            return st.get(t, void 0, e, "script")
        }
    }), st.each(["get", "post"], function (t, e) {
        st[e] = function (t, n, i, s) {
            return st.isFunction(n) && (s = s || i, i = n, n = void 0), st.ajax({
                url: t,
                type: e,
                dataType: s,
                data: n,
                success: i
            })
        }
    }), st.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (t, e) {
        st.fn[e] = function (t) {
            return this.on(e, t)
        }
    }), st._evalUrl = function (t) {
        return st.ajax({
            url: t,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            "throws": !0
        })
    }, st.fn.extend({
        wrapAll: function (t) {
            if (st.isFunction(t)) return this.each(function (e) {
                st(this).wrapAll(t.call(this, e))
            });
            if (this[0]) {
                var e = st(t, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && e.insertBefore(this[0]), e.map(function () {
                    for (var t = this; t.firstChild && 1 === t.firstChild.nodeType;) t = t.firstChild;
                    return t
                }).append(this)
            }
            return this
        },
        wrapInner: function (t) {
            return st.isFunction(t) ? this.each(function (e) {
                st(this).wrapInner(t.call(this, e))
            }) : this.each(function () {
                var e = st(this),
                    n = e.contents();
                n.length ? n.wrapAll(t) : e.append(t)
            })
        },
        wrap: function (t) {
            var e = st.isFunction(t);
            return this.each(function (n) {
                st(this).wrapAll(e ? t.call(this, n) : t)
            })
        },
        unwrap: function () {
            return this.parent().each(function () {
                st.nodeName(this, "body") || st(this).replaceWith(this.childNodes)
            }).end()
        }
    }), st.expr.filters.hidden = function (t) {
        return t.offsetWidth <= 0 && t.offsetHeight <= 0 || !nt.reliableHiddenOffsets() && "none" === (t.style && t.style.display || st.css(t, "display"))
    }, st.expr.filters.visible = function (t) {
        return !st.expr.filters.hidden(t)
    };
    var Ye = /%20/g,
        Ve = /\[\]$/,
        Ge = /\r?\n/g,
        Qe = /^(?:submit|button|image|reset|file)$/i,
        Ke = /^(?:input|select|textarea|keygen)/i;
    st.param = function (t, e) {
        var n, i = [],
            s = function (t, e) {
                e = st.isFunction(e) ? e() : null == e ? "" : e, i[i.length] = encodeURIComponent(t) + "=" + encodeURIComponent(e)
            };
        if (void 0 === e && (e = st.ajaxSettings && st.ajaxSettings.traditional), st.isArray(t) || t.jquery && !st.isPlainObject(t)) st.each(t, function () {
            s(this.name, this.value)
        });
        else
            for (n in t) B(n, t[n], e, s);
        return i.join("&").replace(Ye, "+")
    }, st.fn.extend({
        serialize: function () {
            return st.param(this.serializeArray())
        },
        serializeArray: function () {
            return this.map(function () {
                var t = st.prop(this, "elements");
                return t ? st.makeArray(t) : this
            }).filter(function () {
                var t = this.type;
                return this.name && !st(this).is(":disabled") && Ke.test(this.nodeName) && !Qe.test(t) && (this.checked || !At.test(t))
            }).map(function (t, e) {
                var n = st(this).val();
                return null == n ? null : st.isArray(n) ? st.map(n, function (t) {
                    return {
                        name: e.name,
                        value: t.replace(Ge, "\r\n")
                    }
                }) : {
                    name: e.name,
                    value: n.replace(Ge, "\r\n")
                }
            }).get()
        }
    }), st.ajaxSettings.xhr = void 0 !== t.ActiveXObject ? function () {
        return !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && W() || Y()
    } : W;
    var Xe = 0,
        Je = {},
        Ze = st.ajaxSettings.xhr();
    t.ActiveXObject && st(t).on("unload", function () {
        for (var t in Je) Je[t](void 0, !0)
    }), nt.cors = !!Ze && "withCredentials" in Ze, Ze = nt.ajax = !!Ze, Ze && st.ajaxTransport(function (t) {
        if (!t.crossDomain || nt.cors) {
            var e;
            return {
                send: function (n, i) {
                    var s, o = t.xhr(),
                        r = ++Xe;
                    if (o.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
                        for (s in t.xhrFields) o[s] = t.xhrFields[s];
                    t.mimeType && o.overrideMimeType && o.overrideMimeType(t.mimeType), t.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest");
                    for (s in n) void 0 !== n[s] && o.setRequestHeader(s, n[s] + "");
                    o.send(t.hasContent && t.data || null), e = function (n, s) {
                        var a, l, u;
                        if (e && (s || 4 === o.readyState))
                            if (delete Je[r], e = void 0, o.onreadystatechange = st.noop, s) 4 !== o.readyState && o.abort();
                            else {
                                u = {}, a = o.status, "string" == typeof o.responseText && (u.text = o.responseText);
                                try {
                                    l = o.statusText
                                } catch (c) {
                                    l = ""
                                }
                                a || !t.isLocal || t.crossDomain ? 1223 === a && (a = 204) : a = u.text ? 200 : 404
                            }
                        u && i(a, l, u, o.getAllResponseHeaders())
                    }, t.async ? 4 === o.readyState ? setTimeout(e) : o.onreadystatechange = Je[r] = e : e()
                },
                abort: function () {
                    e && e(void 0, !0)
                }
            }
        }
    }), st.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function (t) {
                return st.globalEval(t), t
            }
        }
    }), st.ajaxPrefilter("script", function (t) {
        void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET", t.global = !1)
    }), st.ajaxTransport("script", function (t) {
        if (t.crossDomain) {
            var e, n = pt.head || st("head")[0] || pt.documentElement;
            return {
                send: function (i, s) {
                    e = pt.createElement("script"), e.async = !0, t.scriptCharset && (e.charset = t.scriptCharset), e.src = t.url, e.onload = e.onreadystatechange = function (t, n) {
                        (n || !e.readyState || /loaded|complete/.test(e.readyState)) && (e.onload = e.onreadystatechange = null, e.parentNode && e.parentNode.removeChild(e), e = null, n || s(200, "success"))
                    }, n.insertBefore(e, n.firstChild)
                },
                abort: function () {
                    e && e.onload(void 0, !0)
                }
            }
        }
    });
    var tn = [],
        en = /(=)\?(?=&|$)|\?\?/;
    st.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function () {
            var t = tn.pop() || st.expando + "_" + Ae++;
            return this[t] = !0, t
        }
    }), st.ajaxPrefilter("json jsonp", function (e, n, i) {
        var s, o, r, a = e.jsonp !== !1 && (en.test(e.url) ? "url" : "string" == typeof e.data && !(e.contentType || "").indexOf("application/x-www-form-urlencoded") && en.test(e.data) && "data");
        return a || "jsonp" === e.dataTypes[0] ? (s = e.jsonpCallback = st.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(en, "$1" + s) : e.jsonp !== !1 && (e.url += ($e.test(e.url) ? "&" : "?") + e.jsonp + "=" + s), e.converters["script json"] = function () {
            return r || st.error(s + " was not called"), r[0]
        }, e.dataTypes[0] = "json", o = t[s], t[s] = function () {
            r = arguments
        }, i.always(function () {
            t[s] = o, e[s] && (e.jsonpCallback = n.jsonpCallback, tn.push(s)), r && st.isFunction(o) && o(r[0]), r = o = void 0
        }), "script") : void 0
    }), st.parseHTML = function (t, e, n) {
        if (!t || "string" != typeof t) return null;
        "boolean" == typeof e && (n = e, e = !1), e = e || pt;
        var i = ht.exec(t),
            s = !n && [];
        return i ? [e.createElement(i[1])] : (i = st.buildFragment([t], e, s), s && s.length && st(s).remove(), st.merge([], i.childNodes))
    };
    var nn = st.fn.load;
    st.fn.load = function (t, e, n) {
        if ("string" != typeof t && nn) return nn.apply(this, arguments);
        var i, s, o, r = this,
            a = t.indexOf(" ");
        return a >= 0 && (i = st.trim(t.slice(a, t.length)), t = t.slice(0, a)), st.isFunction(e) ? (n = e, e = void 0) : e && "object" == typeof e && (o = "POST"), r.length > 0 && st.ajax({
            url: t,
            type: o,
            dataType: "html",
            data: e
        }).done(function (t) {
            s = arguments, r.html(i ? st("<div>").append(st.parseHTML(t)).find(i) : t)
        }).complete(n && function (t, e) {
            r.each(n, s || [t.responseText, e, t])
        }), this
    }, st.expr.filters.animated = function (t) {
        return st.grep(st.timers, function (e) {
            return t === e.elem
        }).length
    };
    var sn = t.document.documentElement;
    st.offset = {
        setOffset: function (t, e, n) {
            var i, s, o, r, a, l, u, c = st.css(t, "position"),
                h = st(t),
                d = {};
            "static" === c && (t.style.position = "relative"), a = h.offset(), o = st.css(t, "top"), l = st.css(t, "left"), u = ("absolute" === c || "fixed" === c) && st.inArray("auto", [o, l]) > -1, u ? (i = h.position(), r = i.top, s = i.left) : (r = parseFloat(o) || 0, s = parseFloat(l) || 0), st.isFunction(e) && (e = e.call(t, n, a)), null != e.top && (d.top = e.top - a.top + r), null != e.left && (d.left = e.left - a.left + s), "using" in e ? e.using.call(t, d) : h.css(d)
        }
    }, st.fn.extend({
        offset: function (t) {
            if (arguments.length) return void 0 === t ? this : this.each(function (e) {
                st.offset.setOffset(this, t, e)
            });
            var e, n, i = {
                    top: 0,
                    left: 0
                },
                s = this[0],
                o = s && s.ownerDocument;
            if (o) return e = o.documentElement, st.contains(e, s) ? (typeof s.getBoundingClientRect !== kt && (i = s.getBoundingClientRect()), n = V(o), {
                top: i.top + (n.pageYOffset || e.scrollTop) - (e.clientTop || 0),
                left: i.left + (n.pageXOffset || e.scrollLeft) - (e.clientLeft || 0)
            }) : i
        },
        position: function () {
            if (this[0]) {
                var t, e, n = {
                        top: 0,
                        left: 0
                    },
                    i = this[0];
                return "fixed" === st.css(i, "position") ? e = i.getBoundingClientRect() : (t = this.offsetParent(), e = this.offset(), st.nodeName(t[0], "html") || (n = t.offset()), n.top += st.css(t[0], "borderTopWidth", !0), n.left += st.css(t[0], "borderLeftWidth", !0)), {
                    top: e.top - n.top - st.css(i, "marginTop", !0),
                    left: e.left - n.left - st.css(i, "marginLeft", !0)
                }
            }
        },
        offsetParent: function () {
            return this.map(function () {
                for (var t = this.offsetParent || sn; t && !st.nodeName(t, "html") && "static" === st.css(t, "position");) t = t.offsetParent;
                return t || sn
            })
        }
    }), st.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function (t, e) {
        var n = /Y/.test(e);
        st.fn[t] = function (i) {
            return jt(this, function (t, i, s) {
                var o = V(t);
                return void 0 === s ? o ? e in o ? o[e] : o.document.documentElement[i] : t[i] : void(o ? o.scrollTo(n ? st(o).scrollLeft() : s, n ? s : st(o).scrollTop()) : t[i] = s)
            }, t, i, arguments.length, null)
        }
    }), st.each(["top", "left"], function (t, e) {
        st.cssHooks[e] = T(nt.pixelPosition, function (t, n) {
            return n ? (n = ee(t, e), ie.test(n) ? st(t).position()[e] + "px" : n) : void 0
        })
    }), st.each({
        Height: "height",
        Width: "width"
    }, function (t, e) {
        st.each({
            padding: "inner" + t,
            content: e,
            "": "outer" + t
        }, function (n, i) {
            st.fn[i] = function (i, s) {
                var o = arguments.length && (n || "boolean" != typeof i),
                    r = n || (i === !0 || s === !0 ? "margin" : "border");
                return jt(this, function (e, n, i) {
                    var s;
                    return st.isWindow(e) ? e.document.documentElement["client" + t] : 9 === e.nodeType ? (s = e.documentElement, Math.max(e.body["scroll" + t], s["scroll" + t], e.body["offset" + t], s["offset" + t], s["client" + t])) : void 0 === i ? st.css(e, n, r) : st.style(e, n, i, r)
                }, e, o ? i : void 0, o, null)
            }
        })
    }), st.fn.size = function () {
        return this.length
    }, st.fn.andSelf = st.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function () {
        return st
    });
    var on = t.jQuery,
        rn = t.$;
    return st.noConflict = function (e) {
        return t.$ === st && (t.$ = rn), e && t.jQuery === st && (t.jQuery = on), st
    }, typeof e === kt && (t.jQuery = t.$ = st), st
}),
function (t, e) {
    t.rails !== e && t.error("jquery-ujs has already been loaded!");
    var n, i = t(document);
    t.rails = n = {
        linkClickSelector: "a[data-confirm], a[data-method], a[data-remote], a[data-disable-with], a[data-disable]",
        buttonClickSelector: "button[data-remote]:not(form button), button[data-confirm]:not(form button)",
        inputChangeSelector: "select[data-remote], input[data-remote], textarea[data-remote]",
        formSubmitSelector: "form",
        formInputClickSelector: "form input[type=submit], form input[type=image], form button[type=submit], form button:not([type]), input[type=submit][form], input[type=image][form], button[type=submit][form], button[form]:not([type])",
        disableSelector: "input[data-disable-with]:enabled, button[data-disable-with]:enabled, textarea[data-disable-with]:enabled, input[data-disable]:enabled, button[data-disable]:enabled, textarea[data-disable]:enabled",
        enableSelector: "input[data-disable-with]:disabled, button[data-disable-with]:disabled, textarea[data-disable-with]:disabled, input[data-disable]:disabled, button[data-disable]:disabled, textarea[data-disable]:disabled",
        requiredInputSelector: "input[name][required]:not([disabled]),textarea[name][required]:not([disabled])",
        fileInputSelector: "input[type=file]",
        linkDisableSelector: "a[data-disable-with], a[data-disable]",
        buttonDisableSelector: "button[data-remote][data-disable-with], button[data-remote][data-disable]",
        CSRFProtection: function (e) {
            var n = t('meta[name="csrf-token"]').attr("content");
            n && e.setRequestHeader("X-CSRF-Token", n)
        },
        refreshCSRFTokens: function () {
            var e = t("meta[name=csrf-token]").attr("content"),
                n = t("meta[name=csrf-param]").attr("content");
            t('form input[name="' + n + '"]').val(e)
        },
        fire: function (e, n, i) {
            var s = t.Event(n);
            return e.trigger(s, i),
                s.result !== !1
        },
        confirm: function (t) {
            return confirm(t)
        },
        ajax: function (e) {
            return t.ajax(e)
        },
        href: function (t) {
            return t[0].href
        },
        handleRemote: function (i) {
            var s, o, r, a, l, u;
            if (n.fire(i, "ajax:before")) {
                if (a = i.data("with-credentials") || null, l = i.data("type") || t.ajaxSettings && t.ajaxSettings.dataType, i.is("form")) {
                    s = i.attr("method"), o = i.attr("action"), r = i.serializeArray();
                    var c = i.data("ujs:submit-button");
                    c && (r.push(c), i.data("ujs:submit-button", null))
                } else i.is(n.inputChangeSelector) ? (s = i.data("method"), o = i.data("url"), r = i.serialize(), i.data("params") && (r = r + "&" + i.data("params"))) : i.is(n.buttonClickSelector) ? (s = i.data("method") || "get", o = i.data("url"), r = i.serialize(), i.data("params") && (r = r + "&" + i.data("params"))) : (s = i.data("method"), o = n.href(i), r = i.data("params") || null);
                return u = {
                    type: s || "GET",
                    data: r,
                    dataType: l,
                    beforeSend: function (t, s) {
                        return s.dataType === e && t.setRequestHeader("accept", "*/*;q=0.5, " + s.accepts.script), n.fire(i, "ajax:beforeSend", [t, s]) ? void i.trigger("ajax:send", t) : !1
                    },
                    success: function (t, e, n) {
                        i.trigger("ajax:success", [t, e, n])
                    },
                    complete: function (t, e) {
                        i.trigger("ajax:complete", [t, e])
                    },
                    error: function (t, e, n) {
                        i.trigger("ajax:error", [t, e, n])
                    },
                    crossDomain: n.isCrossDomain(o)
                }, a && (u.xhrFields = {
                    withCredentials: a
                }), o && (u.url = o), n.ajax(u)
            }
            return !1
        },
        isCrossDomain: function (t) {
            var e = document.createElement("a");
            e.href = location.href;
            var n = document.createElement("a");
            try {
                return n.href = t, n.href = n.href, !((!n.protocol || ":" === n.protocol) && !n.host || e.protocol + "//" + e.host == n.protocol + "//" + n.host)
            } catch (i) {
                return !0
            }
        },
        handleMethod: function (i) {
            var s = n.href(i),
                o = i.data("method"),
                r = i.attr("target"),
                a = t("meta[name=csrf-token]").attr("content"),
                l = t("meta[name=csrf-param]").attr("content"),
                u = t('<form method="post" action="' + s + '"></form>'),
                c = '<input name="_method" value="' + o + '" type="hidden" />';
            l === e || a === e || n.isCrossDomain(s) || (c += '<input name="' + l + '" value="' + a + '" type="hidden" />'), r && u.attr("target", r), u.hide().append(c).appendTo("body"), u.submit()
        },
        formElements: function (e, n) {
            return e.is("form") ? t(e[0].elements).filter(n) : e.find(n)
        },
        disableFormElements: function (e) {
            n.formElements(e, n.disableSelector).each(function () {
                n.disableFormElement(t(this))
            })
        },
        disableFormElement: function (t) {
            var n, i;
            n = t.is("button") ? "html" : "val", i = t.data("disable-with"), t.data("ujs:enable-with", t[n]()), i !== e && t[n](i), t.prop("disabled", !0)
        },
        enableFormElements: function (e) {
            n.formElements(e, n.enableSelector).each(function () {
                n.enableFormElement(t(this))
            })
        },
        enableFormElement: function (t) {
            var e = t.is("button") ? "html" : "val";
            t.data("ujs:enable-with") && t[e](t.data("ujs:enable-with")), t.prop("disabled", !1)
        },
        allowAction: function (t) {
            var e, i = t.data("confirm"),
                s = !1;
            return i ? (n.fire(t, "confirm") && (s = n.confirm(i), e = n.fire(t, "confirm:complete", [s])), s && e) : !0
        },
        blankInputs: function (e, n, i) {
            var s, o, r = t(),
                a = n || "input,textarea",
                l = e.find(a);
            return l.each(function () {
                if (s = t(this), o = s.is("input[type=checkbox],input[type=radio]") ? s.is(":checked") : s.val(), !o == !i) {
                    if (s.is("input[type=radio]") && l.filter('input[type=radio]:checked[name="' + s.attr("name") + '"]').length) return !0;
                    r = r.add(s)
                }
            }), r.length ? r : !1
        },
        nonBlankInputs: function (t, e) {
            return n.blankInputs(t, e, !0)
        },
        stopEverything: function (e) {
            return t(e.target).trigger("ujs:everythingStopped"), e.stopImmediatePropagation(), !1
        },
        disableElement: function (t) {
            var i = t.data("disable-with");
            t.data("ujs:enable-with", t.html()), i !== e && t.html(i), t.bind("click.railsDisable", function (t) {
                return n.stopEverything(t)
            })
        },
        enableElement: function (t) {
            t.data("ujs:enable-with") !== e && (t.html(t.data("ujs:enable-with")), t.removeData("ujs:enable-with")), t.unbind("click.railsDisable")
        }
    }, n.fire(i, "rails:attachBindings") && (t.ajaxPrefilter(function (t, e, i) {
        t.crossDomain || n.CSRFProtection(i)
    }), i.delegate(n.linkDisableSelector, "ajax:complete", function () {
        n.enableElement(t(this))
    }), i.delegate(n.buttonDisableSelector, "ajax:complete", function () {
        n.enableFormElement(t(this))
    }), i.delegate(n.linkClickSelector, "click.rails", function (i) {
        var s = t(this),
            o = s.data("method"),
            r = s.data("params"),
            a = i.metaKey || i.ctrlKey;
        if (!n.allowAction(s)) return n.stopEverything(i);
        if (!a && s.is(n.linkDisableSelector) && n.disableElement(s), s.data("remote") !== e) {
            if (a && (!o || "GET" === o) && !r) return !0;
            var l = n.handleRemote(s);
            return l === !1 ? n.enableElement(s) : l.error(function () {
                n.enableElement(s)
            }), !1
        }
        return s.data("method") ? (n.handleMethod(s), !1) : void 0
    }), i.delegate(n.buttonClickSelector, "click.rails", function (e) {
        var i = t(this);
        if (!n.allowAction(i)) return n.stopEverything(e);
        i.is(n.buttonDisableSelector) && n.disableFormElement(i);
        var s = n.handleRemote(i);
        return s === !1 ? n.enableFormElement(i) : s.error(function () {
            n.enableFormElement(i)
        }), !1
    }), i.delegate(n.inputChangeSelector, "change.rails", function (e) {
        var i = t(this);
        return n.allowAction(i) ? (n.handleRemote(i), !1) : n.stopEverything(e)
    }), i.delegate(n.formSubmitSelector, "submit.rails", function (i) {
        var s, o, r = t(this),
            a = r.data("remote") !== e;
        if (!n.allowAction(r)) return n.stopEverything(i);
        if (r.attr("novalidate") == e && (s = n.blankInputs(r, n.requiredInputSelector), s && n.fire(r, "ajax:aborted:required", [s]))) return n.stopEverything(i);
        if (a) {
            if (o = n.nonBlankInputs(r, n.fileInputSelector)) {
                setTimeout(function () {
                    n.disableFormElements(r)
                }, 13);
                var l = n.fire(r, "ajax:aborted:file", [o]);
                return l || setTimeout(function () {
                    n.enableFormElements(r)
                }, 13), l
            }
            return n.handleRemote(r), !1
        }
        setTimeout(function () {
            n.disableFormElements(r)
        }, 13)
    }), i.delegate(n.formInputClickSelector, "click.rails", function (e) {
        var i = t(this);
        if (!n.allowAction(i)) return n.stopEverything(e);
        var s = i.attr("name"),
            o = s ? {
                name: s,
                value: i.val()
            } : null;
        i.closest("form").data("ujs:submit-button", o)
    }), i.delegate(n.formSubmitSelector, "ajax:send.rails", function (e) {
        this == e.target && n.disableFormElements(t(this))
    }), i.delegate(n.formSubmitSelector, "ajax:complete.rails", function (e) {
        this == e.target && n.enableFormElements(t(this))
    }), t(function () {
        n.refreshCSRFTokens()
    }))
}(jQuery),
function (t) {
    function e(t) {
        this.size = 0, this.limit = t, this._keymap = {}
    }
    var n = function (t) {
        var e, n, i = {};
        if ("" === t) return {};
        for (e = 0; e < t.length; e += 1) n = t[e].split("="), 2 === n.length && (i[n[0]] = decodeURIComponent(n[1].replace(/\+/g, " ")));
        return i
    };
    t.queryParams = function () {
        return n(window.location.search.substr(1).split("&"))
    }, t.hashParams = function () {
        return n(window.location.hash.substr(1).split("&"))
    };
    var i = 0;
    window.Swiftype = window.Swiftype || {}, Swiftype.root_url = Swiftype.root_url || "https://api.swiftype.com", Swiftype.pingUrl = function (t, e) {
        var n = setTimeout(e, 350),
            i = new Image;
        return i.onload = i.onerror = function () {
            clearTimeout(n), e()
        }, i.src = t, !1
    }, Swiftype.pingAutoSelection = function (e, n, i, s) {
        var o = {
                t: (new Date).getTime(),
                engine_key: e,
                doc_id: n,
                prefix: i
            },
            r = Swiftype.root_url + "/api/v1/public/analytics/pas?" + t.param(o);
        Swiftype.pingUrl(r, s)
    }, Swiftype.findSelectedSection = function () {
        function e(t) {
            var e = t.replace(/\s+/g, "");
            return e = e.toLowerCase()
        }
        var n = t.hashParams().sts;
        n && (n = e(n), t("h1, h2, h3, h4, h5, h6").each(function (i) {
            return $this = t(this), e($this.text()).indexOf(n) >= 0 ? (this.scrollIntoView(!0), !1) : void 0
        }))
    }, Swiftype.htmlEscape = Swiftype.htmlEscape || function (t) {
        return String(t).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    }, t.fn.swiftype = function (n) {
        Swiftype.findSelectedSection();
        var n = t.extend({}, t.fn.swiftype.defaults, n);
        return this.each(function () {
            var o = t(this),
                r = t.meta ? t.extend({}, n, o.data()) : n;
            o.attr("autocomplete", "off"), o.data("swiftype-config-autocomplete", r), o.submitted = !1, o.cache = new e(10), o.emptyQueries = [], o.isEmpty = function (e) {
                return t.inArray(s(e), this.emptyQueries) >= 0
            }, o.addEmpty = function (t) {
                o.emptyQueries.unshift(s(t))
            };
            var l = r.dropdownStylesFunction(o),
                u = t('<div class="swiftype-widget" />'),
                c = t("<div />").addClass(r.suggestionListClass).appendTo(u).css(l).hide();
            u.appendTo(r.autocompleteContainingElement);
            var h = t("<" + r.suggestionListType + " />").appendTo(c);
            o.data("swiftype-list", h), o.abortCurrent = function () {
                o.currentRequest && o.currentRequest.abort()
            }, o.showList = function () {
                f(r.disableAutocomplete) === !1 && c.show()
            }, o.hideList = function (t) {
                t ? c.hide() : setTimeout(function () {
                    c.hide()
                }, 10)
            }, o.focused = function () {
                return o.is(":focus")
            }, o.submitting = function () {
                o.submitted = !0
            }, o.listResults = function () {
                return t(r.resultListSelector, h)
            }, o.activeResult = function () {
                return o.listResults().filter("." + r.activeItemClass).first()
            }, o.prevResult = function () {
                var t = o.listResults(),
                    e = t.index(o.activeResult()),
                    n = e - 1,
                    i = t.eq(n);
                o.listResults().removeClass(r.activeItemClass), n >= 0 && i.addClass(r.activeItemClass)
            }, o.nextResult = function () {
                var t = o.listResults(),
                    e = t.index(o.activeResult()),
                    n = e + 1,
                    i = t.eq(n);
                o.listResults().removeClass(r.activeItemClass), n >= 0 && i.addClass(r.activeItemClass)
            }, o.selectedCallback = function (t) {
                return function () {
                    var e = o.val(),
                        n = function () {
                            r.onComplete(t, e)
                        };
                    Swiftype.pingAutoSelection(r.engineKey, t.id, e, n)
                }
            }, o.registerResult = function (t, e) {
                t.data("swiftype-item", e), t.click(o.selectedCallback(e)).mouseover(function () {
                    o.listResults().removeClass(r.activeItemClass), t.addClass(r.activeItemClass)
                })
            }, o.getContext = function () {
                return {
                    config: r,
                    list: h,
                    registerResult: o.registerResult
                }
            };
            var d, p = !1;
            o.lastValue = "", o.keyup(function (t) {
                return p ? void(p = !1) : void(t.which > 36 && t.which < 41 || 16 == t.which || (r.typingDelay > 0 ? (clearTimeout(d), d = setTimeout(function () {
                    a(o)
                }, r.typingDelay)) : a(o)))
            }), o.styleDropdown = function () {
                c.css(r.dropdownStylesFunction(o))
            }, o.keydown(function (t) {
                o.styleDropdown();
                var e = o.activeResult();
                switch (t.which) {
                    case 13:
                        0 !== e.length && h.is(":visible") ? (t.preventDefault(), o.selectedCallback(e.data("swiftype-item"))()) : o.currentRequest && o.submitting(), o.hideList(), p = !0;
                        break;
                    case 38:
                        t.preventDefault(), 0 === e.length ? o.listResults().last().addClass(r.activeItemClass) : o.prevResult();
                        break;
                    case 40:
                        t.preventDefault(), 0 === e.length ? o.listResults().first().addClass(r.activeItemClass) : e != o.listResults().last() && o.nextResult();
                        break;
                    case 27:
                        o.hideList(), p = !0;
                        break;
                    default:
                        o.submitted = !1
                }
            }), o.keypress(function (t) {
                13 == t.which && o.activeResult().length > 0 && t.preventDefault()
            });
            var g = !1,
                m = !1;
            t(document).bind("mousedown.swiftype" + ++i, function () {
                g = !0
            }), t(document).bind("mouseup.swiftype" + i, function () {
                g = !1, m && (m = !1, o.hideList())
            }), o.blur(function () {
                g ? m = !0 : o.hideList()
            }), o.focus(function () {
                setTimeout(function () {
                    o.select()
                }, 10), o.listResults().filter(":not(." + r.noResultsClass + ")").length > 0 && o.showList()
            })
        })
    };
    var s = function (e) {
            return t.trim(e).toLowerCase()
        },
        o = function (e, n) {
            e.abortCurrent();
            var i = {},
                o = e.data("swiftype-config-autocomplete");
            i.q = n, i.engine_key = o.engineKey, i.search_fields = f(o.searchFields), i.fetch_fields = f(o.fetchFields), i.filters = f(o.filters), i.document_types = f(o.documentTypes), i.functional_boosts = f(o.functionalBoosts), i.sort_field = f(o.sortField), i.sort_direction = f(o.sortDirection), i.per_page = o.resultLimit;
            var r = Swiftype.root_url + "/api/v1/public/engines/suggest.json";
            e.currentRequest = t.ajax({
                type: "GET",
                dataType: "jsonp",
                url: r,
                data: i
            }).success(function (t) {
                var i = s(n);
                return t.record_count > 0 ? (e.cache.put(i, t.records), void l(e, t.records, n)) : (e.addEmpty(i), e.data("swiftype-list").empty(), void e.hideList())
            })
        },
        r = function (t, e) {
            var n = s(e);
            if (t.isEmpty(n)) return t.data("swiftype-list").empty(), void t.hideList();
            var i = t.cache.get(n);
            i ? l(t, i, e) : o(t, e)
        },
        a = function (e) {
            var n = e.val();
            if (n !== e.lastValue) return e.lastValue = n, "" === t.trim(n) ? (e.data("swiftype-list").empty(), void e.hideList()) : void("undefined" != typeof e.data("swiftype-config-autocomplete").engineKey && r(e, n))
        },
        l = function (t, e, n) {
            var i = t.data("swiftype-list"),
                s = t.data("swiftype-config-autocomplete");
            i.empty(), t.hideList(!0), s.resultRenderFunction(t.getContext(), e);
            var o = t.listResults().length;
            (o > 0 && t.focused() || void 0 !== s.noResultsMessage) && (t.submitted ? t.submitted = !1 : t.showList())
        },
        u = function (e, n) {
            var i = e.list,
                s = e.config;
            t.each(n, function (n, o) {
                t.each(o, function (o, r) {
                    e.registerResult(t("<li>" + s.renderFunction(n, r) + "</li>").appendTo(i), r)
                })
            })
        },
        c = function (t, e) {
            return '<p class="title">' + Swiftype.htmlEscape(e.title) + "</p>"
        },
        h = function (t, e) {
            window.location = t.url
        },
        d = function (e) {
            var n = e.data("swiftype-config-autocomplete"),
                i = n.attachTo ? t(n.attachTo) : e,
                s = i.offset(),
                o = {
                    position: "absolute",
                    "z-index": 9999,
                    top: s.top + i.outerHeight() + 1,
                    left: s.left
                };
            return n.setWidth && (o.width = i.outerWidth() - 2), o
        },
        f = function (t) {
            if (void 0 !== t) {
                var e = t;
                return "function" == typeof e && (e = e.call()), e
            }
            return void 0
        };
    e.prototype.put = function (t, e) {
        var n = {
            key: t,
            value: e
        };
        return this._keymap[t] = n, this.tail ? (this.tail.newer = n, n.older = this.tail) : this.head = n, this.tail = n, this.size === this.limit ? this.shift() : void this.size++
    }, e.prototype.shift = function () {
        var t = this.head;
        return t && (this.head.newer ? (this.head = this.head.newer, this.head.older = void 0) : this.head = void 0, t.newer = t.older = void 0, delete this._keymap[t.key]), t
    }, e.prototype.get = function (t, e) {
        var n = this._keymap[t];
        if (void 0 !== n) return n === this.tail ? n.value : (n.newer && (n === this.head && (this.head = n.newer), n.newer.older = n.older), n.older && (n.older.newer = n.newer), n.newer = void 0, n.older = this.tail, this.tail && (this.tail.newer = n), this.tail = n, e ? n : n.value)
    }, e.prototype.remove = function (t) {
        var e = this._keymap[t];
        if (e) return delete this._keymap[e.key], e.newer && e.older ? (e.older.newer = e.newer, e.newer.older = e.older) : e.newer ? (e.newer.older = void 0, this.head = e.newer) : e.older ? (e.older.newer = void 0, this.tail = e.older) : this.head = this.tail = void 0, this.size--, e.value
    }, e.prototype.clear = function () {
        this.head = this.tail = void 0, this.size = 0, this._keymap = {}
    }, "function" == typeof Object.keys ? e.prototype.keys = function () {
        return Object.keys(this._keymap)
    } : e.prototype.keys = function () {
        var t = [];
        for (var e in this._keymap) t.push(e);
        return t
    }, t.fn.swiftype.defaults = {
        activeItemClass: "active",
        attachTo: void 0,
        documentTypes: void 0,
        filters: void 0,
        engineKey: void 0,
        searchFields: void 0,
        functionalBoosts: void 0,
        sortField: void 0,
        sortDirection: void 0,
        fetchFields: void 0,
        noResultsClass: "noResults",
        noResultsMessage: void 0,
        onComplete: h,
        resultRenderFunction: u,
        renderFunction: c,
        dropdownStylesFunction: d,
        resultLimit: void 0,
        suggestionListType: "ul",
        suggestionListClass: "autocomplete",
        resultListSelector: "li",
        setWidth: !0,
        typingDelay: 80,
        disableAutocomplete: !1,
        autocompleteContainingElement: "body"
    }
}(jQuery),
function (t, e, n) {
    "$:nomunge";

    function i(t) {
        t = t || location.href;
        var e = t.indexOf("#");
        return -1 === e ? "#" : t.substr(e)
    }
    var s, o = "hashchange",
        r = document,
        a = t.event.special,
        l = r.documentMode,
        u = "on" + o in e && (l === n || l > 7);
    t.fn[o] = function (t) {
        return t ? this.bind(o, t) : this.trigger(o)
    }, t.fn[o].delay = 50, a[o] = t.extend(a[o], {
        setup: function () {
            return u ? !1 : void t(s.start)
        },
        teardown: function () {
            return u ? !1 : void t(s.stop)
        }
    }), s = function () {
        function s() {
            var n = i(),
                r = f(c);
            n !== c ? (d(c = n, r), t(e).trigger(o)) : r !== c && (location.href = location.href.replace(/#.*/, "") + r), a = setTimeout(s, t.fn[o].delay)
        }
        var a, l = {},
            c = i(),
            h = function (t) {
                return t
            },
            d = h,
            f = h;
        return l.start = function () {
            a || s()
        }, l.stop = function () {
            a && clearTimeout(a), a = n
        }, e.attachEvent && !e.addEventListener && !u && function () {
            var e, n;
            l.start = function () {
                e || (n = t.fn[o].src, n = n && n + i(), e = t('<iframe tabindex="-1" title="empty"/>').hide().one("load", function () {
                    n || d(i()), s()
                }).attr("src", n || "javascript:0").insertAfter("body")[0].contentWindow, r.onpropertychange = function () {
                    try {
                        "title" === event.propertyName && (e.document.title = r.title)
                    } catch (t) {}
                })
            }, l.stop = h, f = function () {
                return i(e.location.href)
            }, d = function (n, i) {
                var s = e.document,
                    a = t.fn[o].domain;
                n !== i && (s.title = r.title, s.open(), a && s.write('<script>document.domain="' + a + '"</script>'), s.close(), e.location.hash = n)
            }
        }(), l
    }()
}(jQuery, this),
function (t) {
    function e(t) {
        return String(t).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    }
    var n = function (t) {
        var e, n, i = {};
        if ("" === t) return {};
        for (e = 0; e < t.length; e += 1) n = t[e].split("="), 2 === n.length && (i[n[0]] = decodeURIComponent(n[1].replace(/\+/g, " ")));
        return i
    };
    t.queryParams = function () {
        return n(window.location.search.substr(1).split("&"))
    }, t.hashParams = function () {
        return n(window.location.hash.substr(1).split("&"))
    }, window.Swiftype = window.Swiftype || {}, Swiftype.root_url = Swiftype.root_url || "https://api.swiftype.com", Swiftype.pingUrl = function (t, e) {
        var n = setTimeout(e, 350),
            i = new Image;
        return i.onload = i.onerror = function () {
            clearTimeout(n), e()
        }, i.src = t, !1
    }, Swiftype.pingSearchResultClick = function (e, n, i) {
        var s = {
                t: (new Date).getTime(),
                engine_key: e,
                doc_id: n,
                q: Swiftype.currentQuery
            },
            o = Swiftype.root_url + "/api/v1/public/analytics/pc?" + t.param(s);
        Swiftype.pingUrl(o, i)
    }, t.fn.swiftypeSearch = function (e) {
        var e = t.extend({}, t.fn.swiftypeSearch.defaults, e);
        return this.each(function () {
            var n = t(this),
                i = t.meta ? t.extend({}, e, n.data()) : e;
            n.data("swiftype-config-search", i), n.selectedCallback = function (e) {
                return function (n) {
                    var s = t(this);
                    n.preventDefault(), Swiftype.pingSearchResultClick(i.engineKey, e.id, function () {
                        window.location = s.attr("href")
                    })
                }
            }, n.registerResult = function (e, i) {
                e.data("swiftype-item", i), t("a", e).click(n.selectedCallback(i))
            }, n.getContentCache = function () {
                return t("#" + r)
            };
            var s = t(i.resultContainingElement),
                o = s.html(),
                r = "st-content-cache",
                a = n.getContentCache(),
                l = function (t, e) {
                    location.hash = "stq=" + encodeURIComponent(t) + "&stp=" + e
                },
                u = function (e, n) {
                    function l(t) {
                        if (void 0 !== t) {
                            var e = t;
                            return "function" == typeof e && (e = e.call()), e
                        }
                        return void 0
                    }
                    n = t.extend({
                        page: 1
                    }, n);
                    var u = {};
                    a.length || (s.after("<div id='" + r + "' style='display: none;'></div>"), a.html(o).hide()), i.loadingFunction(e, s), Swiftype.currentQuery = e, u.q = e, u.engine_key = i.engineKey, u.page = n.page, u.per_page = i.perPage, u.search_fields = l(i.searchFields), u.fetch_fields = l(i.fetchFields), u.facets = l(i.facets), u.filters = l(i.filters), u.document_types = l(i.documentTypes), u.functional_boosts = l(i.functionalBoosts), u.sort_field = l(i.sortField), u.sort_direction = l(i.sortDirection), t.getJSON(Swiftype.root_url + "/api/v1/public/engines/search.json?callback=?", u).success(h)
                };
            t(window).hashchange(function () {
                var e = t.hashParams();
                if (e.stq) u(e.stq, {
                    page: e.stp
                });
                else {
                    var i = n.getContentCache();
                    i.length && (s.html(i.html()), i.remove())
                }
            });
            var c = n.parents("form");
            c && c.bind("submit", function (t) {
                t.preventDefault();
                var e = n.val();
                l(e, 1)
            }), t(document).on("click", "[data-hash][data-page]", function (e) {
                e.preventDefault();
                var n = t(this);
                l(t.hashParams().stq, n.data("page"))
            });
            var h = function (t) {
                "function" == typeof i.preRenderFunction && i.preRenderFunction.call(n, t), i.renderResultsFunction(n.getContext(), t), "function" == typeof i.postRenderFunction && i.postRenderFunction.call(n, t)
            };
            n.getContext = function () {
                return {
                    config: i,
                    resultContainer: s,
                    registerResult: n.registerResult
                }
            }, t(window).hashchange()
        })
    };
    var i = function (e, n) {
            var i, o = -1;
            t.each(n, function (t, e) {
                e.num_pages > o && (i = t, o = e.num_pages)
            });
            var r = n[i].current_page,
                a = n[i].num_pages;
            t(s(i, r, a)).appendTo(e.resultContainer)
        },
        s = function (t, e, n) {
            var i, s, o = '<div class="st-page">';
            return 1 != e && (i = e - 1, o = o + '<a href="#" class="st-prev" data-hash="true" data-page="' + i + '">&laquo; previous</a>'), n > e && (s = e + 1, o = o + '<a href="#" class="st-next" data-hash="true" data-page="' + s + '">next &raquo;</a>'), o += "</div>"
        },
        o = function (e, n) {
            var s = e.resultContainer,
                o = e.config;
            s.html(""), t.each(n.records, function (n, i) {
                t.each(i, function (i, r) {
                    e.registerResult(t(o.renderFunction(n, r)).appendTo(s), r)
                })
            }), i(e, n.info)
        },
        r = function (t, n) {
            return '<div class="st-result"><h3 class="title"><a href="' + n.url + '" class="st-search-result-link">' + e(n.title) + "</a></h3></div>"
        },
        a = function (t, e) {
            e.html('<p class="st-loading-message">loading...</p>')
        },
        l = function (e) {
            var n = 0,
                i = this.getContext().resultContainer;
            e.info && t.each(e.info, function (t, e) {
                n += e.total_result_count
            }), 0 === n && i.html("<div id='st-no-results' class='st-no-results'>No results found.</div>")
        };
    t.fn.swiftypeSearch.defaults = {
        attachTo: void 0,
        documentTypes: void 0,
        facets: void 0,
        filters: void 0,
        engineKey: void 0,
        searchFields: void 0,
        functionalBoosts: void 0,
        sortField: void 0,
        sortDirection: void 0,
        fetchFields: void 0,
        preRenderFunction: void 0,
        postRenderFunction: l,
        loadingFunction: a,
        renderResultsFunction: o,
        renderFunction: r,
        perPage: 10
    }
}(jQuery),
function (t) {
    "function" == typeof define && define.amd ? define(["jquery"], t) : t("object" == typeof exports ? require("jquery") : jQuery)
}(function (t) {
    function e(t) {
        return a.raw ? t : encodeURIComponent(t)
    }

    function n(t) {
        return a.raw ? t : decodeURIComponent(t)
    }

    function i(t) {
        return e(a.json ? JSON.stringify(t) : String(t))
    }

    function s(t) {
        0 === t.indexOf('"') && (t = t.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\"));
        try {
            return t = decodeURIComponent(t.replace(r, " ")), a.json ? JSON.parse(t) : t
        } catch (e) {}
    }

    function o(e, n) {
        var i = a.raw ? e : s(e);
        return t.isFunction(n) ? n(i) : i
    }
    var r = /\+/g,
        a = t.cookie = function (s, r, l) {
            if (arguments.length > 1 && !t.isFunction(r)) {
                if (l = t.extend({}, a.defaults, l), "number" == typeof l.expires) {
                    var u = l.expires,
                        c = l.expires = new Date;
                    c.setTime(+c + 864e5 * u)
                }
                return document.cookie = [e(s), "=", i(r), l.expires ? "; expires=" + l.expires.toUTCString() : "", l.path ? "; path=" + l.path : "", l.domain ? "; domain=" + l.domain : "", l.secure ? "; secure" : ""].join("")
            }
            for (var h = s ? void 0 : {}, d = document.cookie ? document.cookie.split("; ") : [], f = 0, p = d.length; p > f; f++) {
                var g = d[f].split("="),
                    m = n(g.shift()),
                    v = g.join("=");
                if (s && s === m) {
                    h = o(v, r);
                    break
                }
                s || void 0 === (v = o(v)) || (h[m] = v)
            }
            return h
        };
    a.defaults = {}, t.removeCookie = function (e, n) {
        return void 0 === t.cookie(e) ? !1 : (t.cookie(e, "", t.extend({}, n, {
            expires: -1
        })), !t.cookie(e))
    }
}),
function (t) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], t) : t(jQuery)
}(function (t) {
    "use strict";

    function e(t) {
        if (t instanceof Date) return t;
        if (String(t).match(r)) return String(t).match(/^[0-9]*$/) && (t = Number(t)), String(t).match(/\-/) && (t = String(t).replace(/\-/g, "/")), new Date(t);
        throw new Error("Couldn't cast `" + t + "` to a date object.")
    }

    function n(t) {
        var e = t.toString().replace(/([.?*+^$[\]\\(){}|-])/g, "\\$1");
        return new RegExp(e)
    }

    function i(t) {
        return function (e) {
            var i = e.match(/%(-|!)?[A-Z]{1}(:[^;]+;)?/gi);
            if (i)
                for (var o = 0, r = i.length; r > o; ++o) {
                    var a = i[o].match(/%(-|!)?([a-zA-Z]{1})(:[^;]+;)?/),
                        u = n(a[0]),
                        c = a[1] || "",
                        h = a[3] || "",
                        d = null;
                    a = a[2], l.hasOwnProperty(a) && (d = l[a], d = Number(t[d])), null !== d && ("!" === c && (d = s(h, d)), "" === c && 10 > d && (d = "0" + d.toString()), e = e.replace(u, d.toString()))
                }
            return e = e.replace(/%%/, "%")
        }
    }

    function s(t, e) {
        var n = "s",
            i = "";
        return t && (t = t.replace(/(:|;|\s)/gi, "").split(/\,/), 1 === t.length ? n = t[0] : (i = t[0], n = t[1])), 1 === Math.abs(e) ? i : n
    }
    var o = [],
        r = [],
        a = {
            precision: 100,
            elapse: !1
        };
    r.push(/^[0-9]*$/.source), r.push(/([0-9]{1,2}\/){2}[0-9]{4}( [0-9]{1,2}(:[0-9]{2}){2})?/.source), r.push(/[0-9]{4}([\/\-][0-9]{1,2}){2}( [0-9]{1,2}(:[0-9]{2}){2})?/.source), r = new RegExp(r.join("|"));
    var l = {
            Y: "years",
            m: "months",
            n: "daysToMonth",
            w: "weeks",
            d: "daysToWeek",
            D: "totalDays",
            H: "hours",
            M: "minutes",
            S: "seconds"
        },
        u = function (e, n, i) {
            this.el = e, this.$el = t(e), this.interval = null, this.offset = {}, this.options = t.extend({}, a), this.instanceNumber = o.length, o.push(this), this.$el.data("countdown-instance", this.instanceNumber), i && ("function" == typeof i ? (this.$el.on("update.countdown", i), this.$el.on("stoped.countdown", i), this.$el.on("finish.countdown", i)) : this.options = t.extend({}, a, i)), this.setFinalDate(n), this.start()
        };
    t.extend(u.prototype, {
        start: function () {
            null !== this.interval && clearInterval(this.interval);
            var t = this;
            this.update(), this.interval = setInterval(function () {
                t.update.call(t)
            }, this.options.precision)
        },
        stop: function () {
            clearInterval(this.interval), this.interval = null, this.dispatchEvent("stoped")
        },
        toggle: function () {
            this.interval ? this.stop() : this.start()
        },
        pause: function () {
            this.stop()
        },
        resume: function () {
            this.start()
        },
        remove: function () {
            this.stop.call(this), o[this.instanceNumber] = null, delete this.$el.data().countdownInstance
        },
        setFinalDate: function (t) {
            this.finalDate = e(t)
        },
        update: function () {
            if (0 === this.$el.closest("html").length) return void this.remove();
            var e, n = void 0 !== t._data(this.el, "events"),
                i = new Date;
            e = this.finalDate.getTime() - i.getTime(), e = Math.ceil(e / 1e3), e = !this.options.elapse && 0 > e ? 0 : Math.abs(e), this.totalSecsLeft !== e && n && (this.totalSecsLeft = e, this.elapsed = i >= this.finalDate, this.offset = {
                seconds: this.totalSecsLeft % 60,
                minutes: Math.floor(this.totalSecsLeft / 60) % 60,
                hours: Math.floor(this.totalSecsLeft / 60 / 60) % 24,
                days: Math.floor(this.totalSecsLeft / 60 / 60 / 24) % 7,
                daysToWeek: Math.floor(this.totalSecsLeft / 60 / 60 / 24) % 7,
                daysToMonth: Math.floor(this.totalSecsLeft / 60 / 60 / 24 % 30.4368),
                totalDays: Math.floor(this.totalSecsLeft / 60 / 60 / 24),
                weeks: Math.floor(this.totalSecsLeft / 60 / 60 / 24 / 7),
                months: Math.floor(this.totalSecsLeft / 60 / 60 / 24 / 30.4368),
                years: Math.abs(this.finalDate.getFullYear() - i.getFullYear())
            }, this.options.elapse || 0 !== this.totalSecsLeft ? this.dispatchEvent("update") : (this.stop(), this.dispatchEvent("finish")))
        },
        dispatchEvent: function (e) {
            var n = t.Event(e + ".countdown");
            n.finalDate = this.finalDate, n.elapsed = this.elapsed, n.offset = t.extend({}, this.offset), n.strftime = i(this.offset), this.$el.trigger(n)
        }
    }), t.fn.countdown = function () {
        var e = Array.prototype.slice.call(arguments, 0);
        return this.each(function () {
            var n = t(this).data("countdown-instance");
            if (void 0 !== n) {
                var i = o[n],
                    s = e[0];
                u.prototype.hasOwnProperty(s) ? i[s].apply(i, e.slice(1)) : null === String(s).match(/^[$A-Z_][0-9A-Z_$]*$/i) ? (i.setFinalDate.call(i, s), i.start()) : t.error("Method %s does not exist on jQuery.countdown".replace(/\%s/gi, s))
            } else new u(this, e[0], e[1])
        })
    }
}),
function () {
    "use strict";

    function t() {
        var t = !1;
        if ("localStorage" in window) try {
            window.localStorage.setItem("_tmptest", "tmpval"), t = !0, window.localStorage.removeItem("_tmptest")
        } catch (e) {}
        if (t) try {
            window.localStorage && (w = window.localStorage, S = "localStorage", D = w.jStorage_update)
        } catch (s) {} else if ("globalStorage" in window) try {
            window.globalStorage && (w = "localhost" == window.location.hostname ? window.globalStorage["localhost.localdomain"] : window.globalStorage[window.location.hostname], S = "globalStorage", D = w.jStorage_update)
        } catch (o) {} else {
            if (x = document.createElement("link"), !x.addBehavior) return void(x = null);
            x.style.behavior = "url(#default#userData)", document.getElementsByTagName("head")[0].appendChild(x);
            try {
                x.load("jStorage")
            } catch (r) {
                x.setAttribute("jStorage", "{}"), x.save("jStorage"), x.load("jStorage")
            }
            var l = "{}";
            try {
                l = x.getAttribute("jStorage")
            } catch (u) {}
            try {
                D = x.getAttribute("jStorage_update")
            } catch (d) {}
            w.jStorage = l, S = "userDataBehavior"
        }
        a(), c(), n(), h(), "addEventListener" in window && window.addEventListener("pageshow", function (t) {
            t.persisted && i()
        }, !1)
    }

    function e() {
        var t = "{}";
        if ("userDataBehavior" == S) {
            x.load("jStorage");
            try {
                t = x.getAttribute("jStorage")
            } catch (e) {}
            try {
                D = x.getAttribute("jStorage_update")
            } catch (n) {}
            w.jStorage = t
        }
        a(), c(), h()
    }

    function n() {
        "localStorage" == S || "globalStorage" == S ? "addEventListener" in window ? window.addEventListener("storage", i, !1) : document.attachEvent("onstorage", i) : "userDataBehavior" == S && setInterval(i, 1e3)
    }

    function i() {
        var t;
        clearTimeout(T), T = setTimeout(function () {
            if ("localStorage" == S || "globalStorage" == S) t = w.jStorage_update;
            else if ("userDataBehavior" == S) {
                x.load("jStorage");
                try {
                    t = x.getAttribute("jStorage_update")
                } catch (e) {}
            }
            t && t != D && (D = t, s())
        }, 25)
    }

    function s() {
        var t, n = y.parse(y.stringify(_.__jstorage_meta.CRC32));
        e(), t = y.parse(y.stringify(_.__jstorage_meta.CRC32));
        var i, s = [],
            r = [];
        for (i in n)
            if (n.hasOwnProperty(i)) {
                if (!t[i]) {
                    r.push(i);
                    continue
                }
                n[i] != t[i] && "2." == String(n[i]).substr(0, 2) && s.push(i)
            }
        for (i in t) t.hasOwnProperty(i) && (n[i] || s.push(i));
        o(s, "updated"), o(r, "deleted")
    }

    function o(t, e) {
        t = [].concat(t || []);
        var n, i, s, o;
        if ("flushed" == e) {
            t = [];
            for (var r in C) C.hasOwnProperty(r) && t.push(r);
            e = "deleted"
        }
        for (n = 0, s = t.length; s > n; n++) {
            if (C[t[n]])
                for (i = 0, o = C[t[n]].length; o > i; i++) C[t[n]][i](t[n], e);
            if (C["*"])
                for (i = 0, o = C["*"].length; o > i; i++) C["*"][i](t[n], e)
        }
    }

    function r() {
        var t = (+new Date).toString();
        if ("localStorage" == S || "globalStorage" == S) try {
            w.jStorage_update = t
        } catch (e) {
            S = !1
        } else "userDataBehavior" == S && (x.setAttribute("jStorage_update", t), x.save("jStorage"));
        i()
    }

    function a() {
        if (w.jStorage) try {
            _ = y.parse(String(w.jStorage))
        } catch (t) {
            w.jStorage = "{}"
        } else w.jStorage = "{}";
        k = w.jStorage ? String(w.jStorage).length : 0, _.__jstorage_meta || (_.__jstorage_meta = {}), _.__jstorage_meta.CRC32 || (_.__jstorage_meta.CRC32 = {})
    }

    function l() {
        f();
        try {
            w.jStorage = y.stringify(_), x && (x.setAttribute("jStorage", w.jStorage), x.save("jStorage")), k = w.jStorage ? String(w.jStorage).length : 0
        } catch (t) {}
    }

    function u(t) {
        if ("string" != typeof t && "number" != typeof t) throw new TypeError("Key name must be string or numeric");
        if ("__jstorage_meta" == t) throw new TypeError("Reserved key name");
        return !0
    }

    function c() {
        var t, e, n, i, s = 1 / 0,
            a = !1,
            u = [];
        if (clearTimeout(b), _.__jstorage_meta && "object" == typeof _.__jstorage_meta.TTL) {
            t = +new Date, n = _.__jstorage_meta.TTL, i = _.__jstorage_meta.CRC32;
            for (e in n) n.hasOwnProperty(e) && (n[e] <= t ? (delete n[e], delete i[e], delete _[e], a = !0, u.push(e)) : n[e] < s && (s = n[e]));
            s != 1 / 0 && (b = setTimeout(c, Math.min(s - t, 2147483647))), a && (l(), r(), o(u, "deleted"))
        }
    }

    function h() {
        var t, e;
        if (_.__jstorage_meta.PubSub) {
            var n, i = j,
                s = [];
            for (t = e = _.__jstorage_meta.PubSub.length - 1; t >= 0; t--) n = _.__jstorage_meta.PubSub[t], n[0] > j && (i = n[0], s.unshift(n));
            for (t = s.length - 1; t >= 0; t--) d(s[t][1], s[t][2]);
            j = i
        }
    }

    function d(t, e) {
        if (E[t])
            for (var n = 0, i = E[t].length; i > n; n++) try {
                E[t][n](t, y.parse(y.stringify(e)))
            } catch (s) {}
    }

    function f() {
        if (_.__jstorage_meta.PubSub) {
            for (var t = +new Date - 2e3, e = 0, n = _.__jstorage_meta.PubSub.length; n > e; e++)
                if (_.__jstorage_meta.PubSub[e][0] <= t) {
                    _.__jstorage_meta.PubSub.splice(e, _.__jstorage_meta.PubSub.length - e);
                    break
                }
            _.__jstorage_meta.PubSub.length || delete _.__jstorage_meta.PubSub
        }
    }

    function p(t, e) {
        _.__jstorage_meta || (_.__jstorage_meta = {}), _.__jstorage_meta.PubSub || (_.__jstorage_meta.PubSub = []), _.__jstorage_meta.PubSub.unshift([+new Date, t, e]), l(), r()
    }

    function g(t, e) {
        for (var n, i = t.length, s = e ^ i, o = 0; i >= 4;) n = 255 & t.charCodeAt(o) | (255 & t.charCodeAt(++o)) << 8 | (255 & t.charCodeAt(++o)) << 16 | (255 & t.charCodeAt(++o)) << 24, n = 1540483477 * (65535 & n) + ((1540483477 * (n >>> 16) & 65535) << 16), n ^= n >>> 24, n = 1540483477 * (65535 & n) + ((1540483477 * (n >>> 16) & 65535) << 16), s = 1540483477 * (65535 & s) + ((1540483477 * (s >>> 16) & 65535) << 16) ^ n, i -= 4, ++o;
        switch (i) {
            case 3:
                s ^= (255 & t.charCodeAt(o + 2)) << 16;
            case 2:
                s ^= (255 & t.charCodeAt(o + 1)) << 8;
            case 1:
                s ^= 255 & t.charCodeAt(o), s = 1540483477 * (65535 & s) + ((1540483477 * (s >>> 16) & 65535) << 16)
        }
        return s ^= s >>> 13, s = 1540483477 * (65535 & s) + ((1540483477 * (s >>> 16) & 65535) << 16), s ^= s >>> 15, s >>> 0
    }
    var m = "0.4.12",
        v = window.jQuery || window.$ || (window.$ = {}),
        y = {
            parse: window.JSON && (window.JSON.parse || window.JSON.decode) || String.prototype.evalJSON && function (t) {
                return String(t).evalJSON()
            } || v.parseJSON || v.evalJSON,
            stringify: Object.toJSON || window.JSON && (window.JSON.stringify || window.JSON.encode) || v.toJSON
        };
    if ("function" != typeof y.parse || "function" != typeof y.stringify) throw new Error("No JSON support found, include //cdnjs.cloudflare.com/ajax/libs/json2/20110223/json2.js to page");
    var b, _ = {
            __jstorage_meta: {
                CRC32: {}
            }
        },
        w = {
            jStorage: "{}"
        },
        x = null,
        k = 0,
        S = !1,
        C = {},
        T = !1,
        D = 0,
        E = {},
        j = +new Date,
        A = {
            isXML: function (t) {
                var e = (t ? t.ownerDocument || t : 0).documentElement;
                return e ? "HTML" !== e.nodeName : !1
            },
            encode: function (t) {
                if (!this.isXML(t)) return !1;
                try {
                    return (new XMLSerializer).serializeToString(t)
                } catch (e) {
                    try {
                        return t.xml
                    } catch (n) {}
                }
                return !1
            },
            decode: function (t) {
                var e, n = "DOMParser" in window && (new DOMParser).parseFromString || window.ActiveXObject && function (t) {
                    var e = new ActiveXObject("Microsoft.XMLDOM");
                    return e.async = "false", e.loadXML(t), e
                };
                return n ? (e = n.call("DOMParser" in window && new DOMParser || window, t, "text/xml"), this.isXML(e) ? e : !1) : !1
            }
        };
    v.jStorage = {
        version: m,
        set: function (t, e, n) {
            if (u(t), n = n || {}, "undefined" == typeof e) return this.deleteKey(t), e;
            if (A.isXML(e)) e = {
                _is_xml: !0,
                xml: A.encode(e)
            };
            else {
                if ("function" == typeof e) return void 0;
                e && "object" == typeof e && (e = y.parse(y.stringify(e)))
            }
            return _[t] = e, _.__jstorage_meta.CRC32[t] = "2." + g(y.stringify(e), 2538058380), this.setTTL(t, n.TTL || 0), o(t, "updated"), e
        },
        get: function (t, e) {
            return u(t), t in _ ? _[t] && "object" == typeof _[t] && _[t]._is_xml ? A.decode(_[t].xml) : _[t] : "undefined" == typeof e ? null : e
        },
        deleteKey: function (t) {
            return u(t), t in _ ? (delete _[t], "object" == typeof _.__jstorage_meta.TTL && t in _.__jstorage_meta.TTL && delete _.__jstorage_meta.TTL[t], delete _.__jstorage_meta.CRC32[t], l(), r(), o(t, "deleted"), !0) : !1
        },
        setTTL: function (t, e) {
            var n = +new Date;
            return u(t), e = Number(e) || 0, t in _ ? (_.__jstorage_meta.TTL || (_.__jstorage_meta.TTL = {}), e > 0 ? _.__jstorage_meta.TTL[t] = n + e : delete _.__jstorage_meta.TTL[t], l(), c(), r(), !0) : !1
        },
        getTTL: function (t) {
            var e, n = +new Date;
            return u(t), t in _ && _.__jstorage_meta.TTL && _.__jstorage_meta.TTL[t] ? (e = _.__jstorage_meta.TTL[t] - n, e || 0) : 0
        },
        flush: function () {
            return _ = {
                __jstorage_meta: {
                    CRC32: {}
                }
            }, l(), r(), o(null, "flushed"), !0
        },
        storageObj: function () {
            function t() {}
            return t.prototype = _, new t
        },
        index: function () {
            var t, e = [];
            for (t in _) _.hasOwnProperty(t) && "__jstorage_meta" != t && e.push(t);
            return e
        },
        storageSize: function () {
            return k
        },
        currentBackend: function () {
            return S
        },
        storageAvailable: function () {
            return !!S
        },
        listenKeyChange: function (t, e) {
            u(t), C[t] || (C[t] = []), C[t].push(e)
        },
        stopListening: function (t, e) {
            if (u(t), C[t]) {
                if (!e) return void delete C[t];
                for (var n = C[t].length - 1; n >= 0; n--) C[t][n] == e && C[t].splice(n, 1)
            }
        },
        subscribe: function (t, e) {
            if (t = (t || "").toString(), !t) throw new TypeError("Channel not defined");
            E[t] || (E[t] = []), E[t].push(e)
        },
        publish: function (t, e) {
            if (t = (t || "").toString(), !t) throw new TypeError("Channel not defined");
            p(t, e)
        },
        reInit: function () {
            e()
        },
        noConflict: function (t) {
            return delete window.$.jStorage, t && (window.jStorage = this), this
        }
    }, t()
}(),
function (t, e) {
    function n(t) {
        return "string" == typeof t
    }

    function i(t) {
        var e = x.call(arguments, 1);
        return function () {
            return t.apply(this, e.concat(x.call(arguments)))
        }
    }

    function s(t) {
        return t.replace(y, "$2")
    }

    function o(t) {
        return t.replace(/(?:^[^?#]*\?([^#]*).*$)?.*/, "$1")
    }

    function r(e, i, s, o, r) {
        var a, l, h, f, p;
        return o !== u ? (h = s.match(e ? y : /^([^#?]*)\??([^#]*)(#?.*)/), p = h[3] || "", 2 === r && n(o) ? l = o.replace(e ? v : M, "") : (f = d(h[2]), o = n(o) ? d[e ? j : E](o) : o, l = 2 === r ? o : 1 === r ? t.extend({}, o, f) : t.extend({}, f, o), l = c(l), e && (l = l.replace(b, k))), a = h[1] + (e ? w : l || !h[1] ? "?" : "") + l + p) : a = i(s !== u ? s : location.href), a
    }

    function a(t, e, i) {
        return e === u || "boolean" == typeof e ? (i = e, e = S[t ? j : E]()) : e = n(e) ? e.replace(t ? v : M, "") : e, d(e, i)
    }

    function l(e, i, s, o) {
        return n(s) || "object" == typeof s || (o = s, s = i, i = u), this.each(function () {
            var n = t(this),
                r = i || m()[(this.nodeName || "").toLowerCase()] || "",
                a = r && n.attr(r) || "";
            n.attr(r, S[e](a, s, o))
        })
    }
    var u, c, h, d, f, p, g, m, v, y, b, _, w, x = Array.prototype.slice,
        k = decodeURIComponent,
        S = t.param,
        C = t.bbq = t.bbq || {},
        T = t.event.special,
        D = "hashchange",
        E = "querystring",
        j = "fragment",
        A = "elemUrlAttr",
        $ = "href",
        N = "src",
        M = /^.*\?|#.*$/g,
        L = {};
    S[E] = i(r, 0, o), S[j] = h = i(r, 1, s), S.sorted = c = function (e, n) {
        var i = [],
            s = {};
        return t.each(S(e, n).split("&"), function (t, e) {
            var n = e.replace(/(?:%5B|=).*$/, ""),
                o = s[n];
            o || (o = s[n] = [], i.push(n)), o.push(e)
        }), t.map(i.sort(), function (t) {
            return s[t]
        }).join("&")
    }, h.noEscape = function (e) {
        e = e || "";
        var n = t.map(e.split(""), encodeURIComponent);
        b = new RegExp(n.join("|"), "g")
    }, h.noEscape(",/"), h.ajaxCrawlable = function (t) {
        return t !== u && (t ? (v = /^.*(?:#!|#)/, y = /^([^#]*)(?:#!|#)?(.*)$/, w = "#!") : (v = /^.*#/, y = /^([^#]*)#?(.*)$/, w = "#"), _ = !!t), _
    }, h.ajaxCrawlable(0), t.deparam = d = function (e, n) {
        var i = {},
            s = {
                "true": !0,
                "false": !1,
                "null": null
            };
        return t.each(e.replace(/\+/g, " ").split("&"), function (e, o) {
            var r, a = o.split("="),
                l = k(a[0]),
                c = i,
                h = 0,
                d = l.split("]["),
                f = d.length - 1;
            if (/\[/.test(d[0]) && /\]$/.test(d[f]) ? (d[f] = d[f].replace(/\]$/, ""), d = d.shift().split("[").concat(d), f = d.length - 1) : f = 0, 2 === a.length)
                if (r = k(a[1]), n && (r = r && !isNaN(r) ? +r : "undefined" === r ? u : s[r] !== u ? s[r] : r), f)
                    for (; f >= h; h++) l = "" === d[h] ? c.length : d[h], c = c[l] = f > h ? c[l] || (d[h + 1] && isNaN(d[h + 1]) ? {} : []) : r;
                else t.isArray(i[l]) ? i[l].push(r) : i[l] !== u ? i[l] = [i[l], r] : i[l] = r;
            else l && (i[l] = n ? u : "")
        }), i
    }, d[E] = i(a, 0), d[j] = f = i(a, 1), t[A] || (t[A] = function (e) {
        return t.extend(L, e)
    })({
        a: $,
        base: $,
        iframe: N,
        img: N,
        input: N,
        form: "action",
        link: $,
        script: N
    }), m = t[A], t.fn[E] = i(l, E), t.fn[j] = i(l, j), C.pushState = p = function (t, e) {
        n(t) && /^#/.test(t) && e === u && (e = 2);
        var i = t !== u,
            s = h(location.href, i ? t : {}, i ? e : 2);
        location.href = s
    }, C.getState = g = function (t, e) {
        return t === u || "boolean" == typeof t ? f(t) : f(e)[t]
    }, C.removeState = function (e) {
        var n = {};
        e !== u && (n = g(), t.each(t.isArray(e) ? e : arguments, function (t, e) {
            delete n[e]
        })), p(n, 2)
    }, T[D] = t.extend(T[D], {
        add: function (e) {
            function n(t) {
                var e = t[j] = h();
                t.getState = function (t, n) {
                    return t === u || "boolean" == typeof t ? d(e, t) : d(e, n)[t]
                }, i.apply(this, arguments)
            }
            var i;
            return t.isFunction(e) ? (i = e, n) : (i = e.handler, void(e.handler = n))
        }
    })
}(jQuery, this),
function () {
    function t() {
        var t = "{}";
        if ("userDataBehavior" == m) {
            p.load("jStorage");
            try {
                t = p.getAttribute("jStorage")
            } catch (e) {}
            try {
                b = p.getAttribute("jStorage_update")
            } catch (n) {}
            f.jStorage = t
        }
        s(), a(), l()
    }

    function e() {
        var e;
        clearTimeout(y), y = setTimeout(function () {
            if ("localStorage" == m || "globalStorage" == m) e = f.jStorage_update;
            else if ("userDataBehavior" == m) {
                p.load("jStorage");
                try {
                    e = p.getAttribute("jStorage_update")
                } catch (i) {}
            }
            if (e && e != b) {
                b = e;
                var s, o = c.parse(c.stringify(d.__jstorage_meta.CRC32));
                t(), s = c.parse(c.stringify(d.__jstorage_meta.CRC32));
                var r, a = [],
                    l = [];
                for (r in o) o.hasOwnProperty(r) && (s[r] ? o[r] != s[r] && "2." == String(o[r]).substr(0, 2) && a.push(r) : l.push(r));
                for (r in s) s.hasOwnProperty(r) && (o[r] || a.push(r));
                n(a, "updated"), n(l, "deleted")
            }
        }, 25)
    }

    function n(t, e) {
        t = [].concat(t || []);
        var n, i, s, o;
        if ("flushed" == e) {
            t = [];
            for (n in v) v.hasOwnProperty(n) && t.push(n);
            e = "deleted"
        }
        for (n = 0, s = t.length; s > n; n++) {
            if (v[t[n]])
                for (i = 0, o = v[t[n]].length; o > i; i++) v[t[n]][i](t[n], e);
            if (v["*"])
                for (i = 0, o = v["*"].length; o > i; i++) v["*"][i](t[n], e)
        }
    }

    function i() {
        var t = (+new Date).toString();
        if ("localStorage" == m || "globalStorage" == m) try {
            f.jStorage_update = t
        } catch (n) {
            m = !1
        } else "userDataBehavior" == m && (p.setAttribute("jStorage_update", t), p.save("jStorage"));
        e()
    }

    function s() {
        if (f.jStorage) try {
            d = c.parse(String(f.jStorage))
        } catch (t) {
            f.jStorage = "{}"
        } else f.jStorage = "{}";
        g = f.jStorage ? String(f.jStorage).length : 0, d.__jstorage_meta || (d.__jstorage_meta = {}), d.__jstorage_meta.CRC32 || (d.__jstorage_meta.CRC32 = {})
    }

    function o() {
        if (d.__jstorage_meta.PubSub) {
            for (var t = +new Date - 2e3, e = 0, n = d.__jstorage_meta.PubSub.length; n > e; e++)
                if (d.__jstorage_meta.PubSub[e][0] <= t) {
                    d.__jstorage_meta.PubSub.splice(e, d.__jstorage_meta.PubSub.length - e);
                    break
                }
            d.__jstorage_meta.PubSub.length || delete d.__jstorage_meta.PubSub
        }
        try {
            f.jStorage = c.stringify(d), p && (p.setAttribute("jStorage", f.jStorage), p.save("jStorage")), g = f.jStorage ? String(f.jStorage).length : 0
        } catch (i) {}
    }

    function r(t) {
        if ("string" != typeof t && "number" != typeof t) throw new TypeError("Key name must be string or numeric");
        if ("__jstorage_meta" == t) throw new TypeError("Reserved key name");
        return !0
    }

    function a() {
        var t, e, s, r, l = 1 / 0,
            u = !1,
            c = [];
        if (clearTimeout(h), d.__jstorage_meta && "object" == typeof d.__jstorage_meta.TTL) {
            t = +new Date, s = d.__jstorage_meta.TTL, r = d.__jstorage_meta.CRC32;
            for (e in s) s.hasOwnProperty(e) && (s[e] <= t ? (delete s[e], delete r[e], delete d[e], u = !0, c.push(e)) : s[e] < l && (l = s[e]));
            1 / 0 != l && (h = setTimeout(a, Math.min(l - t, 2147483647))), u && (o(), i(), n(c, "deleted"))
        }
    }

    function l() {
        var t;
        if (d.__jstorage_meta.PubSub) {
            var e, n = w,
                i = [];
            for (t = d.__jstorage_meta.PubSub.length - 1; t >= 0; t--) e = d.__jstorage_meta.PubSub[t], e[0] > w && (n = e[0], i.unshift(e));
            for (t = i.length - 1; t >= 0; t--) {
                e = i[t][1];
                var s = i[t][2];
                if (_[e])
                    for (var o = 0, r = _[e].length; r > o; o++) try {
                        _[e][o](e, c.parse(c.stringify(s)))
                    } catch (a) {}
            }
            w = n
        }
    }
    var u = window.jQuery || window.$ || (window.$ = {}),
        c = {
            parse: window.JSON && (window.JSON.parse || window.JSON.decode) || String.prototype.evalJSON && function (t) {
                return String(t).evalJSON()
            } || u.parseJSON || u.evalJSON,
            stringify: Object.toJSON || window.JSON && (window.JSON.stringify || window.JSON.encode) || u.toJSON
        };
    if ("function" != typeof c.parse || "function" != typeof c.stringify) throw Error("No JSON support found, include //cdnjs.cloudflare.com/ajax/libs/json2/20110223/json2.js to page");
    var h, d = {
            __jstorage_meta: {
                CRC32: {}
            }
        },
        f = {
            jStorage: "{}"
        },
        p = null,
        g = 0,
        m = !1,
        v = {},
        y = !1,
        b = 0,
        _ = {},
        w = +new Date,
        x = {
            isXML: function (t) {
                return (t = (t ? t.ownerDocument || t : 0).documentElement) ? "HTML" !== t.nodeName : !1
            },
            encode: function (t) {
                if (!this.isXML(t)) return !1;
                try {
                    return (new XMLSerializer).serializeToString(t)
                } catch (e) {
                    try {
                        return t.xml
                    } catch (n) {}
                }
                return !1
            },
            decode: function (t) {
                var e = "DOMParser" in window && (new DOMParser).parseFromString || window.ActiveXObject && function (t) {
                    var e = new ActiveXObject("Microsoft.XMLDOM");
                    return e.async = "false", e.loadXML(t), e
                };
                return e ? (t = e.call("DOMParser" in window && new DOMParser || window, t, "text/xml"), this.isXML(t) ? t : !1) : !1
            }
        };
    u.jStorage = {
            version: "0.4.12",
            set: function (t, e, i) {
                if (r(t), i = i || {}, "undefined" == typeof e) return this.deleteKey(t), e;
                if (x.isXML(e)) e = {
                    _is_xml: !0,
                    xml: x.encode(e)
                };
                else {
                    if ("function" == typeof e) return;
                    e && "object" == typeof e && (e = c.parse(c.stringify(e)))
                }
                d[t] = e;
                for (var s, o = d.__jstorage_meta.CRC32, a = c.stringify(e), l = a.length, u = 2538058380 ^ l, h = 0; l >= 4;) s = 255 & a.charCodeAt(h) | (255 & a.charCodeAt(++h)) << 8 | (255 & a.charCodeAt(++h)) << 16 | (255 & a.charCodeAt(++h)) << 24, s = 1540483477 * (65535 & s) + ((1540483477 * (s >>> 16) & 65535) << 16), s ^= s >>> 24, s = 1540483477 * (65535 & s) + ((1540483477 * (s >>> 16) & 65535) << 16), u = 1540483477 * (65535 & u) + ((1540483477 * (u >>> 16) & 65535) << 16) ^ s, l -= 4, ++h;
                switch (l) {
                    case 3:
                        u ^= (255 & a.charCodeAt(h + 2)) << 16;
                    case 2:
                        u ^= (255 & a.charCodeAt(h + 1)) << 8;
                    case 1:
                        u ^= 255 & a.charCodeAt(h), u = 1540483477 * (65535 & u) + ((1540483477 * (u >>> 16) & 65535) << 16)
                }
                return u ^= u >>> 13, u = 1540483477 * (65535 & u) + ((1540483477 * (u >>> 16) & 65535) << 16), o[t] = "2." + ((u ^ u >>> 15) >>> 0), this.setTTL(t, i.TTL || 0), n(t, "updated"), e
            },
            get: function (t, e) {
                return r(t), t in d ? d[t] && "object" == typeof d[t] && d[t]._is_xml ? x.decode(d[t].xml) : d[t] : "undefined" == typeof e ? null : e
            },
            deleteKey: function (t) {
                return r(t), t in d ? (delete d[t], "object" == typeof d.__jstorage_meta.TTL && t in d.__jstorage_meta.TTL && delete d.__jstorage_meta.TTL[t], delete d.__jstorage_meta.CRC32[t], o(), i(), n(t, "deleted"), !0) : !1
            },
            setTTL: function (t, e) {
                var n = +new Date;
                return r(t), e = Number(e) || 0, t in d ? (d.__jstorage_meta.TTL || (d.__jstorage_meta.TTL = {}), e > 0 ? d.__jstorage_meta.TTL[t] = n + e : delete d.__jstorage_meta.TTL[t], o(), a(), i(), !0) : !1
            },
            getTTL: function (t) {
                var e = +new Date;
                return r(t), t in d && d.__jstorage_meta.TTL && d.__jstorage_meta.TTL[t] ? (t = d.__jstorage_meta.TTL[t] - e) || 0 : 0
            },
            flush: function () {
                return d = {
                    __jstorage_meta: {
                        CRC32: {}
                    }
                }, o(), i(), n(null, "flushed"), !0
            },
            storageObj: function () {
                function t() {}
                return t.prototype = d, new t
            },
            index: function () {
                var t, e = [];
                for (t in d) d.hasOwnProperty(t) && "__jstorage_meta" != t && e.push(t);
                return e
            },
            storageSize: function () {
                return g
            },
            currentBackend: function () {
                return m
            },
            storageAvailable: function () {
                return !!m
            },
            listenKeyChange: function (t, e) {
                r(t), v[t] || (v[t] = []), v[t].push(e)
            },
            stopListening: function (t, e) {
                if (r(t), v[t])
                    if (e)
                        for (var n = v[t].length - 1; n >= 0; n--) v[t][n] == e && v[t].splice(n, 1);
                    else delete v[t]
            },
            subscribe: function (t, e) {
                if (t = (t || "").toString(), !t) throw new TypeError("Channel not defined");
                _[t] || (_[t] = []), _[t].push(e)
            },
            publish: function (t, e) {
                if (t = (t || "").toString(), !t) throw new TypeError("Channel not defined");
                d.__jstorage_meta || (d.__jstorage_meta = {}), d.__jstorage_meta.PubSub || (d.__jstorage_meta.PubSub = []), d.__jstorage_meta.PubSub.unshift([+new Date, t, e]), o(), i()
            },
            reInit: function () {
                t()
            },
            noConflict: function (t) {
                return delete window.$.jStorage, t && (window.jStorage = this), this
            }
        },
        function () {
            var t = !1;
            if ("localStorage" in window) try {
                window.localStorage.setItem("_tmptest", "tmpval"), t = !0, window.localStorage.removeItem("_tmptest")
            } catch (n) {}
            if (t) try {
                window.localStorage && (f = window.localStorage, m = "localStorage", b = f.jStorage_update)
            } catch (i) {} else if ("globalStorage" in window) try {
                window.globalStorage && (f = "localhost" == window.location.hostname ? window.globalStorage["localhost.localdomain"] : window.globalStorage[window.location.hostname], m = "globalStorage", b = f.jStorage_update)
            } catch (o) {} else {
                if (p = document.createElement("link"), !p.addBehavior) return void(p = null);
                p.style.behavior = "url(#default#userData)", document.getElementsByTagName("head")[0].appendChild(p);
                try {
                    p.load("jStorage")
                } catch (r) {
                    p.setAttribute("jStorage", "{}"), p.save("jStorage"), p.load("jStorage")
                }
                t = "{}";
                try {
                    t = p.getAttribute("jStorage")
                } catch (u) {}
                try {
                    b = p.getAttribute("jStorage_update")
                } catch (c) {}
                f.jStorage = t, m = "userDataBehavior"
            }
            s(), a(), "localStorage" == m || "globalStorage" == m ? "addEventListener" in window ? window.addEventListener("storage", e, !1) : document.attachEvent("onstorage", e) : "userDataBehavior" == m && setInterval(e, 1e3), l(), "addEventListener" in window && window.addEventListener("pageshow", function (t) {
                t.persisted && e()
            }, !1)
        }()
}(), ! function (t, e) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : t.moment = e()
}(this, function () {
    "use strict";

    function t() {
        return ri.apply(null, arguments)
    }

    function e(t) {
        ri = t
    }

    function n(t) {
        return t instanceof Array || "[object Array]" === Object.prototype.toString.call(t)
    }

    function i(t) {
        return t instanceof Date || "[object Date]" === Object.prototype.toString.call(t)
    }

    function s(t, e) {
        var n, i = [];
        for (n = 0; n < t.length; ++n) i.push(e(t[n], n));
        return i
    }

    function o(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }

    function r(t, e) {
        for (var n in e) o(e, n) && (t[n] = e[n]);
        return o(e, "toString") && (t.toString = e.toString), o(e, "valueOf") && (t.valueOf = e.valueOf), t
    }

    function a(t, e, n, i) {
        return Ot(t, e, n, i, !0).utc()
    }

    function l() {
        return {
            empty: !1,
            unusedTokens: [],
            unusedInput: [],
            overflow: -2,
            charsLeftOver: 0,
            nullInput: !1,
            invalidMonth: null,
            invalidFormat: !1,
            userInvalidated: !1,
            iso: !1,
            parsedDateParts: [],
            meridiem: null
        }
    }

    function u(t) {
        return null == t._pf && (t._pf = l()), t._pf
    }

    function c(t) {
        if (null == t._isValid) {
            var e = u(t),
                n = ai.call(e.parsedDateParts, function (t) {
                    return null != t
                });
            t._isValid = !isNaN(t._d.getTime()) && e.overflow < 0 && !e.empty && !e.invalidMonth && !e.invalidWeekday && !e.nullInput && !e.invalidFormat && !e.userInvalidated && (!e.meridiem || e.meridiem && n), t._strict && (t._isValid = t._isValid && 0 === e.charsLeftOver && 0 === e.unusedTokens.length && void 0 === e.bigHour)
        }
        return t._isValid
    }

    function h(t) {
        var e = a(NaN);
        return null != t ? r(u(e), t) : u(e).userInvalidated = !0, e
    }

    function d(t) {
        return void 0 === t
    }

    function f(t, e) {
        var n, i, s;
        if (d(e._isAMomentObject) || (t._isAMomentObject = e._isAMomentObject), d(e._i) || (t._i = e._i), d(e._f) || (t._f = e._f), d(e._l) || (t._l = e._l), d(e._strict) || (t._strict = e._strict), d(e._tzm) || (t._tzm = e._tzm), d(e._isUTC) || (t._isUTC = e._isUTC), d(e._offset) || (t._offset = e._offset), d(e._pf) || (t._pf = u(e)), d(e._locale) || (t._locale = e._locale), li.length > 0)
            for (n in li) i = li[n], s = e[i], d(s) || (t[i] = s);
        return t
    }

    function p(e) {
        f(this, e), this._d = new Date(null != e._d ? e._d.getTime() : NaN), ui === !1 && (ui = !0, t.updateOffset(this), ui = !1)
    }

    function g(t) {
        return t instanceof p || null != t && null != t._isAMomentObject
    }

    function m(t) {
        return 0 > t ? Math.ceil(t) : Math.floor(t)
    }

    function v(t) {
        var e = +t,
            n = 0;
        return 0 !== e && isFinite(e) && (n = m(e)), n
    }

    function y(t, e, n) {
        var i, s = Math.min(t.length, e.length),
            o = Math.abs(t.length - e.length),
            r = 0;
        for (i = 0; s > i; i++)(n && t[i] !== e[i] || !n && v(t[i]) !== v(e[i])) && r++;
        return r + o
    }

    function b(e) {
        t.suppressDeprecationWarnings === !1 && "undefined" != typeof console && console.warn && console.warn("Deprecation warning: " + e)
    }

    function _(e, n) {
        var i = !0;
        return r(function () {
            return null != t.deprecationHandler && t.deprecationHandler(null, e), i && (b(e + "\nArguments: " + Array.prototype.slice.call(arguments).join(", ") + "\n" + (new Error).stack), i = !1), n.apply(this, arguments)
        }, n)
    }

    function w(e, n) {
        null != t.deprecationHandler && t.deprecationHandler(e, n), ci[e] || (b(n), ci[e] = !0)
    }

    function x(t) {
        return t instanceof Function || "[object Function]" === Object.prototype.toString.call(t)
    }

    function k(t) {
        return "[object Object]" === Object.prototype.toString.call(t)
    }

    function S(t) {
        var e, n;
        for (n in t) e = t[n], x(e) ? this[n] = e : this["_" + n] = e;
        this._config = t, this._ordinalParseLenient = new RegExp(this._ordinalParse.source + "|" + /\d{1,2}/.source)
    }

    function C(t, e) {
        var n, i = r({}, t);
        for (n in e) o(e, n) && (k(t[n]) && k(e[n]) ? (i[n] = {}, r(i[n], t[n]), r(i[n], e[n])) : null != e[n] ? i[n] = e[n] : delete i[n]);
        return i
    }

    function T(t) {
        null != t && this.set(t)
    }

    function D(t) {
        return t ? t.toLowerCase().replace("_", "-") : t
    }

    function E(t) {
        for (var e, n, i, s, o = 0; o < t.length;) {
            for (s = D(t[o]).split("-"), e = s.length, n = D(t[o + 1]), n = n ? n.split("-") : null; e > 0;) {
                if (i = j(s.slice(0, e).join("-"))) return i;
                if (n && n.length >= e && y(s, n, !0) >= e - 1) break;
                e--
            }
            o++
        }
        return null
    }

    function j(t) {
        var e = null;
        if (!pi[t] && "undefined" != typeof module && module && module.exports) try {
            e = di._abbr, require("./locale/" + t), A(e)
        } catch (n) {}
        return pi[t]
    }

    function A(t, e) {
        var n;
        return t && (n = d(e) ? M(t) : $(t, e), n && (di = n)), di._abbr
    }

    function $(t, e) {
        return null !== e ? (e.abbr = t, null != pi[t] ? (w("defineLocaleOverride", "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale"), e = C(pi[t]._config, e)) : null != e.parentLocale && (null != pi[e.parentLocale] ? e = C(pi[e.parentLocale]._config, e) : w("parentLocaleUndefined", "specified parentLocale is not defined yet")), pi[t] = new T(e), A(t), pi[t]) : (delete pi[t], null)
    }

    function N(t, e) {
        if (null != e) {
            var n;
            null != pi[t] && (e = C(pi[t]._config, e)), n = new T(e), n.parentLocale = pi[t], pi[t] = n, A(t)
        } else null != pi[t] && (null != pi[t].parentLocale ? pi[t] = pi[t].parentLocale : null != pi[t] && delete pi[t]);
        return pi[t]
    }

    function M(t) {
        var e;
        if (t && t._locale && t._locale._abbr && (t = t._locale._abbr), !t) return di;
        if (!n(t)) {
            if (e = j(t)) return e;
            t = [t]
        }
        return E(t)
    }

    function L() {
        return hi(pi)
    }

    function O(t, e) {
        var n = t.toLowerCase();
        gi[n] = gi[n + "s"] = gi[e] = t
    }

    function P(t) {
        return "string" == typeof t ? gi[t] || gi[t.toLowerCase()] : void 0
    }

    function F(t) {
        var e, n, i = {};
        for (n in t) o(t, n) && (e = P(n), e && (i[e] = t[n]));
        return i
    }

    function I(e, n) {
        return function (i) {
            return null != i ? (q(this, e, i), t.updateOffset(this, n), this) : R(this, e)
        }
    }

    function R(t, e) {
        return t.isValid() ? t._d["get" + (t._isUTC ? "UTC" : "") + e]() : NaN
    }

    function q(t, e, n) {
        t.isValid() && t._d["set" + (t._isUTC ? "UTC" : "") + e](n)
    }

    function H(t, e) {
        var n;
        if ("object" == typeof t)
            for (n in t) this.set(n, t[n]);
        else if (t = P(t), x(this[t])) return this[t](e);
        return this
    }

    function z(t, e, n) {
        var i = "" + Math.abs(t),
            s = e - i.length,
            o = t >= 0;
        return (o ? n ? "+" : "" : "-") + Math.pow(10, Math.max(0, s)).toString().substr(1) + i
    }

    function U(t, e, n, i) {
        var s = i;
        "string" == typeof i && (s = function () {
            return this[i]()
        }), t && (bi[t] = s), e && (bi[e[0]] = function () {
            return z(s.apply(this, arguments), e[1], e[2])
        }), n && (bi[n] = function () {
            return this.localeData().ordinal(s.apply(this, arguments), t)
        })
    }

    function B(t) {
        return t.match(/\[[\s\S]/) ? t.replace(/^\[|\]$/g, "") : t.replace(/\\/g, "")
    }

    function W(t) {
        var e, n, i = t.match(mi);
        for (e = 0, n = i.length; n > e; e++) bi[i[e]] ? i[e] = bi[i[e]] : i[e] = B(i[e]);
        return function (e) {
            var s, o = "";
            for (s = 0; n > s; s++) o += i[s] instanceof Function ? i[s].call(e, t) : i[s];
            return o
        }
    }

    function Y(t, e) {
        return t.isValid() ? (e = V(e, t.localeData()), yi[e] = yi[e] || W(e), yi[e](t)) : t.localeData().invalidDate()
    }

    function V(t, e) {
        function n(t) {
            return e.longDateFormat(t) || t
        }
        var i = 5;
        for (vi.lastIndex = 0; i >= 0 && vi.test(t);) t = t.replace(vi, n), vi.lastIndex = 0, i -= 1;
        return t
    }

    function G(t, e, n) {
        Fi[t] = x(e) ? e : function (t, i) {
            return t && n ? n : e
        }
    }

    function Q(t, e) {
        return o(Fi, t) ? Fi[t](e._strict, e._locale) : new RegExp(K(t))
    }

    function K(t) {
        return X(t.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function (t, e, n, i, s) {
            return e || n || i || s
        }))
    }

    function X(t) {
        return t.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
    }

    function J(t, e) {
        var n, i = e;
        for ("string" == typeof t && (t = [t]), "number" == typeof e && (i = function (t, n) {
                n[e] = v(t)
            }), n = 0; n < t.length; n++) Ii[t[n]] = i
    }

    function Z(t, e) {
        J(t, function (t, n, i, s) {
            i._w = i._w || {}, e(t, i._w, i, s)
        })
    }

    function tt(t, e, n) {
        null != e && o(Ii, t) && Ii[t](e, n._a, n, t)
    }

    function et(t, e) {
        return new Date(Date.UTC(t, e + 1, 0)).getUTCDate()
    }

    function nt(t, e) {
        return n(this._months) ? this._months[t.month()] : this._months[Gi.test(e) ? "format" : "standalone"][t.month()]
    }

    function it(t, e) {
        return n(this._monthsShort) ? this._monthsShort[t.month()] : this._monthsShort[Gi.test(e) ? "format" : "standalone"][t.month()]
    }

    function st(t, e, n) {
        var i, s, o, r = t.toLocaleLowerCase();
        if (!this._monthsParse)
            for (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], i = 0; 12 > i; ++i) o = a([2e3, i]), this._shortMonthsParse[i] = this.monthsShort(o, "").toLocaleLowerCase(), this._longMonthsParse[i] = this.months(o, "").toLocaleLowerCase();
        return n ? "MMM" === e ? (s = fi.call(this._shortMonthsParse, r), -1 !== s ? s : null) : (s = fi.call(this._longMonthsParse, r), -1 !== s ? s : null) : "MMM" === e ? (s = fi.call(this._shortMonthsParse, r), -1 !== s ? s : (s = fi.call(this._longMonthsParse, r), -1 !== s ? s : null)) : (s = fi.call(this._longMonthsParse, r), -1 !== s ? s : (s = fi.call(this._shortMonthsParse, r), -1 !== s ? s : null))
    }

    function ot(t, e, n) {
        var i, s, o;
        if (this._monthsParseExact) return st.call(this, t, e, n);
        for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), i = 0; 12 > i; i++) {
            if (s = a([2e3, i]), n && !this._longMonthsParse[i] && (this._longMonthsParse[i] = new RegExp("^" + this.months(s, "").replace(".", "") + "$", "i"), this._shortMonthsParse[i] = new RegExp("^" + this.monthsShort(s, "").replace(".", "") + "$", "i")), n || this._monthsParse[i] || (o = "^" + this.months(s, "") + "|^" + this.monthsShort(s, ""), this._monthsParse[i] = new RegExp(o.replace(".", ""), "i")), n && "MMMM" === e && this._longMonthsParse[i].test(t)) return i;
            if (n && "MMM" === e && this._shortMonthsParse[i].test(t)) return i;
            if (!n && this._monthsParse[i].test(t)) return i
        }
    }

    function rt(t, e) {
        var n;
        if (!t.isValid()) return t;
        if ("string" == typeof e)
            if (/^\d+$/.test(e)) e = v(e);
            else if (e = t.localeData().monthsParse(e), "number" != typeof e) return t;
        return n = Math.min(t.date(), et(t.year(), e)), t._d["set" + (t._isUTC ? "UTC" : "") + "Month"](e, n), t
    }

    function at(e) {
        return null != e ? (rt(this, e), t.updateOffset(this, !0), this) : R(this, "Month")
    }

    function lt() {
        return et(this.year(), this.month())
    }

    function ut(t) {
        return this._monthsParseExact ? (o(this, "_monthsRegex") || ht.call(this), t ? this._monthsShortStrictRegex : this._monthsShortRegex) : this._monthsShortStrictRegex && t ? this._monthsShortStrictRegex : this._monthsShortRegex
    }

    function ct(t) {
        return this._monthsParseExact ? (o(this, "_monthsRegex") || ht.call(this), t ? this._monthsStrictRegex : this._monthsRegex) : this._monthsStrictRegex && t ? this._monthsStrictRegex : this._monthsRegex
    }

    function ht() {
        function t(t, e) {
            return e.length - t.length
        }
        var e, n, i = [],
            s = [],
            o = [];
        for (e = 0; 12 > e; e++) n = a([2e3, e]), i.push(this.monthsShort(n, "")), s.push(this.months(n, "")), o.push(this.months(n, "")), o.push(this.monthsShort(n, ""));
        for (i.sort(t), s.sort(t), o.sort(t), e = 0; 12 > e; e++) i[e] = X(i[e]), s[e] = X(s[e]), o[e] = X(o[e]);
        this._monthsRegex = new RegExp("^(" + o.join("|") + ")", "i"), this._monthsShortRegex = this._monthsRegex, this._monthsStrictRegex = new RegExp("^(" + s.join("|") + ")", "i"), this._monthsShortStrictRegex = new RegExp("^(" + i.join("|") + ")", "i")
    }

    function dt(t) {
        var e, n = t._a;
        return n && -2 === u(t).overflow && (e = n[qi] < 0 || n[qi] > 11 ? qi : n[Hi] < 1 || n[Hi] > et(n[Ri], n[qi]) ? Hi : n[zi] < 0 || n[zi] > 24 || 24 === n[zi] && (0 !== n[Ui] || 0 !== n[Bi] || 0 !== n[Wi]) ? zi : n[Ui] < 0 || n[Ui] > 59 ? Ui : n[Bi] < 0 || n[Bi] > 59 ? Bi : n[Wi] < 0 || n[Wi] > 999 ? Wi : -1, u(t)._overflowDayOfYear && (Ri > e || e > Hi) && (e = Hi), u(t)._overflowWeeks && -1 === e && (e = Yi), u(t)._overflowWeekday && -1 === e && (e = Vi), u(t).overflow = e), t
    }

    function ft(t) {
        var e, n, i, s, o, r, a = t._i,
            l = Zi.exec(a) || ts.exec(a);
        if (l) {
            for (u(t).iso = !0, e = 0, n = ns.length; n > e; e++)
                if (ns[e][1].exec(l[1])) {
                    s = ns[e][0], i = ns[e][2] !== !1;
                    break
                }
            if (null == s) return void(t._isValid = !1);
            if (l[3]) {
                for (e = 0, n = is.length; n > e; e++)
                    if (is[e][1].exec(l[3])) {
                        o = (l[2] || " ") + is[e][0];
                        break
                    }
                if (null == o) return void(t._isValid = !1)
            }
            if (!i && null != o) return void(t._isValid = !1);
            if (l[4]) {
                if (!es.exec(l[4])) return void(t._isValid = !1);
                r = "Z"
            }
            t._f = s + (o || "") + (r || ""), Et(t)
        } else t._isValid = !1
    }

    function pt(e) {
        var n = ss.exec(e._i);
        return null !== n ? void(e._d = new Date(+n[1])) : (ft(e), void(e._isValid === !1 && (delete e._isValid, t.createFromInputFallback(e))))
    }

    function gt(t, e, n, i, s, o, r) {
        var a = new Date(t, e, n, i, s, o, r);
        return 100 > t && t >= 0 && isFinite(a.getFullYear()) && a.setFullYear(t), a
    }

    function mt(t) {
        var e = new Date(Date.UTC.apply(null, arguments));
        return 100 > t && t >= 0 && isFinite(e.getUTCFullYear()) && e.setUTCFullYear(t), e
    }

    function vt(t) {
        return yt(t) ? 366 : 365
    }

    function yt(t) {
        return t % 4 === 0 && t % 100 !== 0 || t % 400 === 0
    }

    function bt() {
        return yt(this.year())
    }

    function _t(t, e, n) {
        var i = 7 + e - n,
            s = (7 + mt(t, 0, i).getUTCDay() - e) % 7;
        return -s + i - 1
    }

    function wt(t, e, n, i, s) {
        var o, r, a = (7 + n - i) % 7,
            l = _t(t, i, s),
            u = 1 + 7 * (e - 1) + a + l;
        return 0 >= u ? (o = t - 1, r = vt(o) + u) : u > vt(t) ? (o = t + 1, r = u - vt(t)) : (o = t, r = u), {
            year: o,
            dayOfYear: r
        }
    }

    function xt(t, e, n) {
        var i, s, o = _t(t.year(), e, n),
            r = Math.floor((t.dayOfYear() - o - 1) / 7) + 1;
        return 1 > r ? (s = t.year() - 1, i = r + kt(s, e, n)) : r > kt(t.year(), e, n) ? (i = r - kt(t.year(), e, n), s = t.year() + 1) : (s = t.year(), i = r), {
            week: i,
            year: s
        }
    }

    function kt(t, e, n) {
        var i = _t(t, e, n),
            s = _t(t + 1, e, n);
        return (vt(t) - i + s) / 7
    }

    function St(t, e, n) {
        return null != t ? t : null != e ? e : n
    }

    function Ct(e) {
        var n = new Date(t.now());
        return e._useUTC ? [n.getUTCFullYear(), n.getUTCMonth(), n.getUTCDate()] : [n.getFullYear(), n.getMonth(), n.getDate()]
    }

    function Tt(t) {
        var e, n, i, s, o = [];
        if (!t._d) {
            for (i = Ct(t), t._w && null == t._a[Hi] && null == t._a[qi] && Dt(t), t._dayOfYear && (s = St(t._a[Ri], i[Ri]), t._dayOfYear > vt(s) && (u(t)._overflowDayOfYear = !0), n = mt(s, 0, t._dayOfYear), t._a[qi] = n.getUTCMonth(), t._a[Hi] = n.getUTCDate()), e = 0; 3 > e && null == t._a[e]; ++e) t._a[e] = o[e] = i[e];
            for (; 7 > e; e++) t._a[e] = o[e] = null == t._a[e] ? 2 === e ? 1 : 0 : t._a[e];
            24 === t._a[zi] && 0 === t._a[Ui] && 0 === t._a[Bi] && 0 === t._a[Wi] && (t._nextDay = !0, t._a[zi] = 0), t._d = (t._useUTC ? mt : gt).apply(null, o), null != t._tzm && t._d.setUTCMinutes(t._d.getUTCMinutes() - t._tzm), t._nextDay && (t._a[zi] = 24)
        }
    }

    function Dt(t) {
        var e, n, i, s, o, r, a, l;
        e = t._w, null != e.GG || null != e.W || null != e.E ? (o = 1, r = 4, n = St(e.GG, t._a[Ri], xt(Pt(), 1, 4).year), i = St(e.W, 1), s = St(e.E, 1), (1 > s || s > 7) && (l = !0)) : (o = t._locale._week.dow, r = t._locale._week.doy, n = St(e.gg, t._a[Ri], xt(Pt(), o, r).year), i = St(e.w, 1), null != e.d ? (s = e.d, (0 > s || s > 6) && (l = !0)) : null != e.e ? (s = e.e + o, (e.e < 0 || e.e > 6) && (l = !0)) : s = o), 1 > i || i > kt(n, o, r) ? u(t)._overflowWeeks = !0 : null != l ? u(t)._overflowWeekday = !0 : (a = wt(n, i, s, o, r), t._a[Ri] = a.year, t._dayOfYear = a.dayOfYear)
    }

    function Et(e) {
        if (e._f === t.ISO_8601) return void ft(e);
        e._a = [], u(e).empty = !0;
        var n, i, s, o, r, a = "" + e._i,
            l = a.length,
            c = 0;
        for (s = V(e._f, e._locale).match(mi) || [], n = 0; n < s.length; n++) o = s[n], i = (a.match(Q(o, e)) || [])[0], i && (r = a.substr(0, a.indexOf(i)), r.length > 0 && u(e).unusedInput.push(r), a = a.slice(a.indexOf(i) + i.length), c += i.length), bi[o] ? (i ? u(e).empty = !1 : u(e).unusedTokens.push(o), tt(o, i, e)) : e._strict && !i && u(e).unusedTokens.push(o);
        u(e).charsLeftOver = l - c, a.length > 0 && u(e).unusedInput.push(a), u(e).bigHour === !0 && e._a[zi] <= 12 && e._a[zi] > 0 && (u(e).bigHour = void 0), u(e).parsedDateParts = e._a.slice(0), u(e).meridiem = e._meridiem, e._a[zi] = jt(e._locale, e._a[zi], e._meridiem), Tt(e), dt(e)
    }

    function jt(t, e, n) {
        var i;
        return null == n ? e : null != t.meridiemHour ? t.meridiemHour(e, n) : null != t.isPM ? (i = t.isPM(n), i && 12 > e && (e += 12), i || 12 !== e || (e = 0), e) : e
    }

    function At(t) {
        var e, n, i, s, o;
        if (0 === t._f.length) return u(t).invalidFormat = !0, void(t._d = new Date(NaN));
        for (s = 0; s < t._f.length; s++) o = 0, e = f({}, t), null != t._useUTC && (e._useUTC = t._useUTC), e._f = t._f[s], Et(e), c(e) && (o += u(e).charsLeftOver, o += 10 * u(e).unusedTokens.length, u(e).score = o, (null == i || i > o) && (i = o, n = e));
        r(t, n || e)
    }

    function $t(t) {
        if (!t._d) {
            var e = F(t._i);
            t._a = s([e.year, e.month, e.day || e.date, e.hour, e.minute, e.second, e.millisecond], function (t) {
                return t && parseInt(t, 10)
            }), Tt(t)
        }
    }

    function Nt(t) {
        var e = new p(dt(Mt(t)));
        return e._nextDay && (e.add(1, "d"), e._nextDay = void 0), e
    }

    function Mt(t) {
        var e = t._i,
            s = t._f;
        return t._locale = t._locale || M(t._l), null === e || void 0 === s && "" === e ? h({
            nullInput: !0
        }) : ("string" == typeof e && (t._i = e = t._locale.preparse(e)), g(e) ? new p(dt(e)) : (n(s) ? At(t) : s ? Et(t) : i(e) ? t._d = e : Lt(t), c(t) || (t._d = null), t))
    }

    function Lt(e) {
        var o = e._i;
        void 0 === o ? e._d = new Date(t.now()) : i(o) ? e._d = new Date(o.valueOf()) : "string" == typeof o ? pt(e) : n(o) ? (e._a = s(o.slice(0), function (t) {
            return parseInt(t, 10)
        }), Tt(e)) : "object" == typeof o ? $t(e) : "number" == typeof o ? e._d = new Date(o) : t.createFromInputFallback(e)
    }

    function Ot(t, e, n, i, s) {
        var o = {};
        return "boolean" == typeof n && (i = n, n = void 0), o._isAMomentObject = !0, o._useUTC = o._isUTC = s, o._l = n, o._i = t, o._f = e, o._strict = i, Nt(o)
    }

    function Pt(t, e, n, i) {
        return Ot(t, e, n, i, !1)
    }

    function Ft(t, e) {
        var i, s;
        if (1 === e.length && n(e[0]) && (e = e[0]), !e.length) return Pt();
        for (i = e[0], s = 1; s < e.length; ++s)(!e[s].isValid() || e[s][t](i)) && (i = e[s]);
        return i
    }

    function It() {
        var t = [].slice.call(arguments, 0);
        return Ft("isBefore", t)
    }

    function Rt() {
        var t = [].slice.call(arguments, 0);
        return Ft("isAfter", t)
    }

    function qt(t) {
        var e = F(t),
            n = e.year || 0,
            i = e.quarter || 0,
            s = e.month || 0,
            o = e.week || 0,
            r = e.day || 0,
            a = e.hour || 0,
            l = e.minute || 0,
            u = e.second || 0,
            c = e.millisecond || 0;
        this._milliseconds = +c + 1e3 * u + 6e4 * l + 1e3 * a * 60 * 60, this._days = +r + 7 * o, this._months = +s + 3 * i + 12 * n, this._data = {}, this._locale = M(), this._bubble()
    }

    function Ht(t) {
        return t instanceof qt
    }

    function zt(t, e) {
        U(t, 0, 0, function () {
            var t = this.utcOffset(),
                n = "+";
            return 0 > t && (t = -t, n = "-"), n + z(~~(t / 60), 2) + e + z(~~t % 60, 2)
        })
    }

    function Ut(t, e) {
        var n = (e || "").match(t) || [],
            i = n[n.length - 1] || [],
            s = (i + "").match(us) || ["-", 0, 0],
            o = +(60 * s[1]) + v(s[2]);
        return "+" === s[0] ? o : -o
    }

    function Bt(e, n) {
        var s, o;
        return n._isUTC ? (s = n.clone(), o = (g(e) || i(e) ? e.valueOf() : Pt(e).valueOf()) - s.valueOf(), s._d.setTime(s._d.valueOf() + o), t.updateOffset(s, !1), s) : Pt(e).local()
    }

    function Wt(t) {
        return 15 * -Math.round(t._d.getTimezoneOffset() / 15)
    }

    function Yt(e, n) {
        var i, s = this._offset || 0;
        return this.isValid() ? null != e ? ("string" == typeof e ? e = Ut(Li, e) : Math.abs(e) < 16 && (e = 60 * e), !this._isUTC && n && (i = Wt(this)), this._offset = e, this._isUTC = !0, null != i && this.add(i, "m"), s !== e && (!n || this._changeInProgress ? ue(this, ie(e - s, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0, t.updateOffset(this, !0), this._changeInProgress = null)), this) : this._isUTC ? s : Wt(this) : null != e ? this : NaN
    }

    function Vt(t, e) {
        return null != t ? ("string" != typeof t && (t = -t), this.utcOffset(t, e), this) : -this.utcOffset()
    }

    function Gt(t) {
        return this.utcOffset(0, t)
    }

    function Qt(t) {
        return this._isUTC && (this.utcOffset(0, t), this._isUTC = !1, t && this.subtract(Wt(this), "m")), this
    }

    function Kt() {
        return this._tzm ? this.utcOffset(this._tzm) : "string" == typeof this._i && this.utcOffset(Ut(Mi, this._i)), this
    }

    function Xt(t) {
        return this.isValid() ? (t = t ? Pt(t).utcOffset() : 0, (this.utcOffset() - t) % 60 === 0) : !1
    }

    function Jt() {
        return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset()
    }

    function Zt() {
        if (!d(this._isDSTShifted)) return this._isDSTShifted;
        var t = {};
        if (f(t, this), t = Mt(t), t._a) {
            var e = t._isUTC ? a(t._a) : Pt(t._a);
            this._isDSTShifted = this.isValid() && y(t._a, e.toArray()) > 0
        } else this._isDSTShifted = !1;
        return this._isDSTShifted
    }

    function te() {
        return this.isValid() ? !this._isUTC : !1
    }

    function ee() {
        return this.isValid() ? this._isUTC : !1
    }

    function ne() {
        return this.isValid() ? this._isUTC && 0 === this._offset : !1
    }

    function ie(t, e) {
        var n, i, s, r = t,
            a = null;
        return Ht(t) ? r = {
            ms: t._milliseconds,
            d: t._days,
            M: t._months
        } : "number" == typeof t ? (r = {}, e ? r[e] = t : r.milliseconds = t) : (a = cs.exec(t)) ? (n = "-" === a[1] ? -1 : 1, r = {
            y: 0,
            d: v(a[Hi]) * n,
            h: v(a[zi]) * n,
            m: v(a[Ui]) * n,
            s: v(a[Bi]) * n,
            ms: v(a[Wi]) * n
        }) : (a = hs.exec(t)) ? (n = "-" === a[1] ? -1 : 1, r = {
            y: se(a[2], n),
            M: se(a[3], n),
            w: se(a[4], n),
            d: se(a[5], n),
            h: se(a[6], n),
            m: se(a[7], n),
            s: se(a[8], n)
        }) : null == r ? r = {} : "object" == typeof r && ("from" in r || "to" in r) && (s = re(Pt(r.from), Pt(r.to)), r = {}, r.ms = s.milliseconds, r.M = s.months), i = new qt(r), Ht(t) && o(t, "_locale") && (i._locale = t._locale), i
    }

    function se(t, e) {
        var n = t && parseFloat(t.replace(",", "."));
        return (isNaN(n) ? 0 : n) * e
    }

    function oe(t, e) {
        var n = {
            milliseconds: 0,
            months: 0
        };
        return n.months = e.month() - t.month() + 12 * (e.year() - t.year()), t.clone().add(n.months, "M").isAfter(e) && --n.months, n.milliseconds = +e - +t.clone().add(n.months, "M"), n
    }

    function re(t, e) {
        var n;
        return t.isValid() && e.isValid() ? (e = Bt(e, t), t.isBefore(e) ? n = oe(t, e) : (n = oe(e, t), n.milliseconds = -n.milliseconds, n.months = -n.months), n) : {
            milliseconds: 0,
            months: 0
        }
    }

    function ae(t) {
        return 0 > t ? -1 * Math.round(-1 * t) : Math.round(t)
    }

    function le(t, e) {
        return function (n, i) {
            var s, o;
            return null === i || isNaN(+i) || (w(e, "moment()." + e + "(period, number) is deprecated. Please use moment()." + e + "(number, period)."), o = n, n = i, i = o), n = "string" == typeof n ? +n : n, s = ie(n, i), ue(this, s, t), this
        }
    }

    function ue(e, n, i, s) {
        var o = n._milliseconds,
            r = ae(n._days),
            a = ae(n._months);
        e.isValid() && (s = null == s ? !0 : s, o && e._d.setTime(e._d.valueOf() + o * i), r && q(e, "Date", R(e, "Date") + r * i), a && rt(e, R(e, "Month") + a * i), s && t.updateOffset(e, r || a))
    }

    function ce(t, e) {
        var n = t || Pt(),
            i = Bt(n, this).startOf("day"),
            s = this.diff(i, "days", !0),
            o = -6 > s ? "sameElse" : -1 > s ? "lastWeek" : 0 > s ? "lastDay" : 1 > s ? "sameDay" : 2 > s ? "nextDay" : 7 > s ? "nextWeek" : "sameElse",
            r = e && (x(e[o]) ? e[o]() : e[o]);
        return this.format(r || this.localeData().calendar(o, this, Pt(n)))
    }

    function he() {
        return new p(this)
    }

    function de(t, e) {
        var n = g(t) ? t : Pt(t);
        return this.isValid() && n.isValid() ? (e = P(d(e) ? "millisecond" : e), "millisecond" === e ? this.valueOf() > n.valueOf() : n.valueOf() < this.clone().startOf(e).valueOf()) : !1
    }

    function fe(t, e) {
        var n = g(t) ? t : Pt(t);
        return this.isValid() && n.isValid() ? (e = P(d(e) ? "millisecond" : e), "millisecond" === e ? this.valueOf() < n.valueOf() : this.clone().endOf(e).valueOf() < n.valueOf()) : !1
    }

    function pe(t, e, n, i) {
        return i = i || "()", ("(" === i[0] ? this.isAfter(t, n) : !this.isBefore(t, n)) && (")" === i[1] ? this.isBefore(e, n) : !this.isAfter(e, n))
    }

    function ge(t, e) {
        var n, i = g(t) ? t : Pt(t);
        return this.isValid() && i.isValid() ? (e = P(e || "millisecond"), "millisecond" === e ? this.valueOf() === i.valueOf() : (n = i.valueOf(), this.clone().startOf(e).valueOf() <= n && n <= this.clone().endOf(e).valueOf())) : !1
    }

    function me(t, e) {
        return this.isSame(t, e) || this.isAfter(t, e)
    }

    function ve(t, e) {
        return this.isSame(t, e) || this.isBefore(t, e)
    }

    function ye(t, e, n) {
        var i, s, o, r;
        return this.isValid() ? (i = Bt(t, this), i.isValid() ? (s = 6e4 * (i.utcOffset() - this.utcOffset()), e = P(e), "year" === e || "month" === e || "quarter" === e ? (r = be(this, i), "quarter" === e ? r /= 3 : "year" === e && (r /= 12)) : (o = this - i, r = "second" === e ? o / 1e3 : "minute" === e ? o / 6e4 : "hour" === e ? o / 36e5 : "day" === e ? (o - s) / 864e5 : "week" === e ? (o - s) / 6048e5 : o), n ? r : m(r)) : NaN) : NaN
    }

    function be(t, e) {
        var n, i, s = 12 * (e.year() - t.year()) + (e.month() - t.month()),
            o = t.clone().add(s, "months");
        return 0 > e - o ? (n = t.clone().add(s - 1, "months"), i = (e - o) / (o - n)) : (n = t.clone().add(s + 1, "months"), i = (e - o) / (n - o)), -(s + i) || 0
    }

    function _e() {
        return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
    }

    function we() {
        var t = this.clone().utc();
        return 0 < t.year() && t.year() <= 9999 ? x(Date.prototype.toISOString) ? this.toDate().toISOString() : Y(t, "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]") : Y(t, "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]")
    }

    function xe(e) {
        e || (e = this.isUtc() ? t.defaultFormatUtc : t.defaultFormat);
        var n = Y(this, e);
        return this.localeData().postformat(n)
    }

    function ke(t, e) {
        return this.isValid() && (g(t) && t.isValid() || Pt(t).isValid()) ? ie({
            to: this,
            from: t
        }).locale(this.locale()).humanize(!e) : this.localeData().invalidDate()
    }

    function Se(t) {
        return this.from(Pt(), t)
    }

    function Ce(t, e) {
        return this.isValid() && (g(t) && t.isValid() || Pt(t).isValid()) ? ie({
            from: this,
            to: t
        }).locale(this.locale()).humanize(!e) : this.localeData().invalidDate()
    }

    function Te(t) {
        return this.to(Pt(), t)
    }

    function De(t) {
        var e;
        return void 0 === t ? this._locale._abbr : (e = M(t), null != e && (this._locale = e), this)
    }

    function Ee() {
        return this._locale
    }

    function je(t) {
        switch (t = P(t)) {
            case "year":
                this.month(0);
            case "quarter":
            case "month":
                this.date(1);
            case "week":
            case "isoWeek":
            case "day":
            case "date":
                this.hours(0);
            case "hour":
                this.minutes(0);
            case "minute":
                this.seconds(0);
            case "second":
                this.milliseconds(0)
        }
        return "week" === t && this.weekday(0), "isoWeek" === t && this.isoWeekday(1), "quarter" === t && this.month(3 * Math.floor(this.month() / 3)), this
    }

    function Ae(t) {
        return t = P(t), void 0 === t || "millisecond" === t ? this : ("date" === t && (t = "day"), this.startOf(t).add(1, "isoWeek" === t ? "week" : t).subtract(1, "ms"))
    }

    function $e() {
        return this._d.valueOf() - 6e4 * (this._offset || 0)
    }

    function Ne() {
        return Math.floor(this.valueOf() / 1e3)
    }

    function Me() {
        return this._offset ? new Date(this.valueOf()) : this._d
    }

    function Le() {
        var t = this;
        return [t.year(), t.month(), t.date(), t.hour(), t.minute(), t.second(), t.millisecond()]
    }

    function Oe() {
        var t = this;
        return {
            years: t.year(),
            months: t.month(),
            date: t.date(),
            hours: t.hours(),
            minutes: t.minutes(),
            seconds: t.seconds(),
            milliseconds: t.milliseconds()
        }
    }

    function Pe() {
        return this.isValid() ? this.toISOString() : null
    }

    function Fe() {
        return c(this)
    }

    function Ie() {
        return r({}, u(this))
    }

    function Re() {
        return u(this).overflow
    }

    function qe() {
        return {
            input: this._i,
            format: this._f,
            locale: this._locale,
            isUTC: this._isUTC,
            strict: this._strict
        }
    }

    function He(t, e) {
        U(0, [t, t.length], 0, e)
    }

    function ze(t) {
        return Ye.call(this, t, this.week(), this.weekday(), this.localeData()._week.dow, this.localeData()._week.doy)
    }

    function Ue(t) {
        return Ye.call(this, t, this.isoWeek(), this.isoWeekday(), 1, 4)
    }

    function Be() {
        return kt(this.year(), 1, 4)
    }

    function We() {
        var t = this.localeData()._week;
        return kt(this.year(), t.dow, t.doy)
    }

    function Ye(t, e, n, i, s) {
        var o;
        return null == t ? xt(this, i, s).year : (o = kt(t, i, s), e > o && (e = o), Ve.call(this, t, e, n, i, s))
    }

    function Ve(t, e, n, i, s) {
        var o = wt(t, e, n, i, s),
            r = mt(o.year, 0, o.dayOfYear);
        return this.year(r.getUTCFullYear()), this.month(r.getUTCMonth()), this.date(r.getUTCDate()), this
    }

    function Ge(t) {
        return null == t ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (t - 1) + this.month() % 3)
    }

    function Qe(t) {
        return xt(t, this._week.dow, this._week.doy).week
    }

    function Ke() {
        return this._week.dow
    }

    function Xe() {
        return this._week.doy
    }

    function Je(t) {
        var e = this.localeData().week(this);
        return null == t ? e : this.add(7 * (t - e), "d")
    }

    function Ze(t) {
        var e = xt(this, 1, 4).week;
        return null == t ? e : this.add(7 * (t - e), "d")
    }

    function tn(t, e) {
        return "string" != typeof t ? t : isNaN(t) ? (t = e.weekdaysParse(t), "number" == typeof t ? t : null) : parseInt(t, 10)
    }

    function en(t, e) {
        return n(this._weekdays) ? this._weekdays[t.day()] : this._weekdays[this._weekdays.isFormat.test(e) ? "format" : "standalone"][t.day()]
    }

    function nn(t) {
        return this._weekdaysShort[t.day()]
    }

    function sn(t) {
        return this._weekdaysMin[t.day()]
    }

    function on(t, e, n) {
        var i, s, o, r = t.toLocaleLowerCase();
        if (!this._weekdaysParse)
            for (this._weekdaysParse = [], this._shortWeekdaysParse = [], this._minWeekdaysParse = [], i = 0; 7 > i; ++i) o = a([2e3, 1]).day(i), this._minWeekdaysParse[i] = this.weekdaysMin(o, "").toLocaleLowerCase(), this._shortWeekdaysParse[i] = this.weekdaysShort(o, "").toLocaleLowerCase(), this._weekdaysParse[i] = this.weekdays(o, "").toLocaleLowerCase();
        return n ? "dddd" === e ? (s = fi.call(this._weekdaysParse, r), -1 !== s ? s : null) : "ddd" === e ? (s = fi.call(this._shortWeekdaysParse, r), -1 !== s ? s : null) : (s = fi.call(this._minWeekdaysParse, r), -1 !== s ? s : null) : "dddd" === e ? (s = fi.call(this._weekdaysParse, r), -1 !== s ? s : (s = fi.call(this._shortWeekdaysParse, r), -1 !== s ? s : (s = fi.call(this._minWeekdaysParse, r), -1 !== s ? s : null))) : "ddd" === e ? (s = fi.call(this._shortWeekdaysParse, r), -1 !== s ? s : (s = fi.call(this._weekdaysParse, r), -1 !== s ? s : (s = fi.call(this._minWeekdaysParse, r), -1 !== s ? s : null))) : (s = fi.call(this._minWeekdaysParse, r), -1 !== s ? s : (s = fi.call(this._weekdaysParse, r), -1 !== s ? s : (s = fi.call(this._shortWeekdaysParse, r), -1 !== s ? s : null)))
    }

    function rn(t, e, n) {
        var i, s, o;
        if (this._weekdaysParseExact) return on.call(this, t, e, n);
        for (this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], this._shortWeekdaysParse = [], this._fullWeekdaysParse = []), i = 0; 7 > i; i++) {
            if (s = a([2e3, 1]).day(i), n && !this._fullWeekdaysParse[i] && (this._fullWeekdaysParse[i] = new RegExp("^" + this.weekdays(s, "").replace(".", ".?") + "$", "i"), this._shortWeekdaysParse[i] = new RegExp("^" + this.weekdaysShort(s, "").replace(".", ".?") + "$", "i"), this._minWeekdaysParse[i] = new RegExp("^" + this.weekdaysMin(s, "").replace(".", ".?") + "$", "i")), this._weekdaysParse[i] || (o = "^" + this.weekdays(s, "") + "|^" + this.weekdaysShort(s, "") + "|^" + this.weekdaysMin(s, ""), this._weekdaysParse[i] = new RegExp(o.replace(".", ""), "i")), n && "dddd" === e && this._fullWeekdaysParse[i].test(t)) return i;
            if (n && "ddd" === e && this._shortWeekdaysParse[i].test(t)) return i;
            if (n && "dd" === e && this._minWeekdaysParse[i].test(t)) return i;
            if (!n && this._weekdaysParse[i].test(t)) return i
        }
    }

    function an(t) {
        if (!this.isValid()) return null != t ? this : NaN;
        var e = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
        return null != t ? (t = tn(t, this.localeData()), this.add(t - e, "d")) : e
    }

    function ln(t) {
        if (!this.isValid()) return null != t ? this : NaN;
        var e = (this.day() + 7 - this.localeData()._week.dow) % 7;
        return null == t ? e : this.add(t - e, "d")
    }

    function un(t) {
        return this.isValid() ? null == t ? this.day() || 7 : this.day(this.day() % 7 ? t : t - 7) : null != t ? this : NaN
    }

    function cn(t) {
        return this._weekdaysParseExact ? (o(this, "_weekdaysRegex") || fn.call(this), t ? this._weekdaysStrictRegex : this._weekdaysRegex) : this._weekdaysStrictRegex && t ? this._weekdaysStrictRegex : this._weekdaysRegex
    }

    function hn(t) {
        return this._weekdaysParseExact ? (o(this, "_weekdaysRegex") || fn.call(this), t ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : this._weekdaysShortStrictRegex && t ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex
    }

    function dn(t) {
        return this._weekdaysParseExact ? (o(this, "_weekdaysRegex") || fn.call(this), t ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : this._weekdaysMinStrictRegex && t ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex
    }

    function fn() {
        function t(t, e) {
            return e.length - t.length
        }
        var e, n, i, s, o, r = [],
            l = [],
            u = [],
            c = [];
        for (e = 0; 7 > e; e++) n = a([2e3, 1]).day(e), i = this.weekdaysMin(n, ""), s = this.weekdaysShort(n, ""), o = this.weekdays(n, ""), r.push(i), l.push(s), u.push(o), c.push(i), c.push(s), c.push(o);
        for (r.sort(t), l.sort(t), u.sort(t), c.sort(t), e = 0; 7 > e; e++) l[e] = X(l[e]), u[e] = X(u[e]), c[e] = X(c[e]);
        this._weekdaysRegex = new RegExp("^(" + c.join("|") + ")", "i"), this._weekdaysShortRegex = this._weekdaysRegex, this._weekdaysMinRegex = this._weekdaysRegex, this._weekdaysStrictRegex = new RegExp("^(" + u.join("|") + ")", "i"), this._weekdaysShortStrictRegex = new RegExp("^(" + l.join("|") + ")", "i"), this._weekdaysMinStrictRegex = new RegExp("^(" + r.join("|") + ")", "i")
    }

    function pn(t) {
        var e = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1;
        return null == t ? e : this.add(t - e, "d")
    }

    function gn() {
        return this.hours() % 12 || 12
    }

    function mn() {
        return this.hours() || 24
    }

    function vn(t, e) {
        U(t, 0, 0, function () {
            return this.localeData().meridiem(this.hours(), this.minutes(), e)
        })
    }

    function yn(t, e) {
        return e._meridiemParse
    }

    function bn(t) {
        return "p" === (t + "").toLowerCase().charAt(0)
    }

    function _n(t, e, n) {
        return t > 11 ? n ? "pm" : "PM" : n ? "am" : "AM"
    }

    function wn(t, e) {
        e[Wi] = v(1e3 * ("0." + t))
    }

    function xn() {
        return this._isUTC ? "UTC" : ""
    }

    function kn() {
        return this._isUTC ? "Coordinated Universal Time" : ""
    }

    function Sn(t) {
        return Pt(1e3 * t)
    }

    function Cn() {
        return Pt.apply(null, arguments).parseZone()
    }

    function Tn(t, e, n) {
        var i = this._calendar[t];
        return x(i) ? i.call(e, n) : i
    }

    function Dn(t) {
        var e = this._longDateFormat[t],
            n = this._longDateFormat[t.toUpperCase()];
        return e || !n ? e : (this._longDateFormat[t] = n.replace(/MMMM|MM|DD|dddd/g, function (t) {
            return t.slice(1)
        }), this._longDateFormat[t])
    }

    function En() {
        return this._invalidDate
    }

    function jn(t) {
        return this._ordinal.replace("%d", t)
    }

    function An(t) {
        return t
    }

    function $n(t, e, n, i) {
        var s = this._relativeTime[n];
        return x(s) ? s(t, e, n, i) : s.replace(/%d/i, t)
    }

    function Nn(t, e) {
        var n = this._relativeTime[t > 0 ? "future" : "past"];
        return x(n) ? n(e) : n.replace(/%s/i, e)
    }

    function Mn(t, e, n, i) {
        var s = M(),
            o = a().set(i, e);
        return s[n](o, t)
    }

    function Ln(t, e, n) {
        if ("number" == typeof t && (e = t, t = void 0), t = t || "", null != e) return Mn(t, e, n, "month");
        var i, s = [];
        for (i = 0; 12 > i; i++) s[i] = Mn(t, i, n, "month");
        return s
    }

    function On(t, e, n, i) {
        "boolean" == typeof t ? ("number" == typeof e && (n = e, e = void 0), e = e || "") : (e = t, n = e, t = !1, "number" == typeof e && (n = e, e = void 0), e = e || "");
        var s = M(),
            o = t ? s._week.dow : 0;
        if (null != n) return Mn(e, (n + o) % 7, i, "day");
        var r, a = [];
        for (r = 0; 7 > r; r++) a[r] = Mn(e, (r + o) % 7, i, "day");
        return a
    }

    function Pn(t, e) {
        return Ln(t, e, "months")
    }

    function Fn(t, e) {
        return Ln(t, e, "monthsShort")
    }

    function In(t, e, n) {
        return On(t, e, n, "weekdays")
    }

    function Rn(t, e, n) {
        return On(t, e, n, "weekdaysShort")
    }

    function qn(t, e, n) {
        return On(t, e, n, "weekdaysMin")
    }

    function Hn() {
        var t = this._data;
        return this._milliseconds = Is(this._milliseconds), this._days = Is(this._days), this._months = Is(this._months), t.milliseconds = Is(t.milliseconds), t.seconds = Is(t.seconds), t.minutes = Is(t.minutes), t.hours = Is(t.hours), t.months = Is(t.months), t.years = Is(t.years), this
    }

    function zn(t, e, n, i) {
        var s = ie(e, n);
        return t._milliseconds += i * s._milliseconds, t._days += i * s._days, t._months += i * s._months, t._bubble()
    }

    function Un(t, e) {
        return zn(this, t, e, 1)
    }

    function Bn(t, e) {
        return zn(this, t, e, -1)
    }

    function Wn(t) {
        return 0 > t ? Math.floor(t) : Math.ceil(t)
    }

    function Yn() {
        var t, e, n, i, s, o = this._milliseconds,
            r = this._days,
            a = this._months,
            l = this._data;
        return o >= 0 && r >= 0 && a >= 0 || 0 >= o && 0 >= r && 0 >= a || (o += 864e5 * Wn(Gn(a) + r), r = 0, a = 0), l.milliseconds = o % 1e3, t = m(o / 1e3), l.seconds = t % 60, e = m(t / 60), l.minutes = e % 60, n = m(e / 60), l.hours = n % 24, r += m(n / 24), s = m(Vn(r)), a += s, r -= Wn(Gn(s)), i = m(a / 12), a %= 12, l.days = r, l.months = a, l.years = i, this
    }

    function Vn(t) {
        return 4800 * t / 146097
    }

    function Gn(t) {
        return 146097 * t / 4800
    }

    function Qn(t) {
        var e, n, i = this._milliseconds;
        if (t = P(t), "month" === t || "year" === t) return e = this._days + i / 864e5, n = this._months + Vn(e), "month" === t ? n : n / 12;
        switch (e = this._days + Math.round(Gn(this._months)), t) {
            case "week":
                return e / 7 + i / 6048e5;
            case "day":
                return e + i / 864e5;
            case "hour":
                return 24 * e + i / 36e5;
            case "minute":
                return 1440 * e + i / 6e4;
            case "second":
                return 86400 * e + i / 1e3;
            case "millisecond":
                return Math.floor(864e5 * e) + i;
            default:
                throw new Error("Unknown unit " + t)
        }
    }

    function Kn() {
        return this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * v(this._months / 12)
    }

    function Xn(t) {
        return function () {
            return this.as(t)
        }
    }

    function Jn(t) {
        return t = P(t), this[t + "s"]()
    }

    function Zn(t) {
        return function () {
            return this._data[t]
        }
    }

    function ti() {
        return m(this.days() / 7)
    }

    function ei(t, e, n, i, s) {
        return s.relativeTime(e || 1, !!n, t, i)
    }

    function ni(t, e, n) {
        var i = ie(t).abs(),
            s = to(i.as("s")),
            o = to(i.as("m")),
            r = to(i.as("h")),
            a = to(i.as("d")),
            l = to(i.as("M")),
            u = to(i.as("y")),
            c = s < eo.s && ["s", s] || 1 >= o && ["m"] || o < eo.m && ["mm", o] || 1 >= r && ["h"] || r < eo.h && ["hh", r] || 1 >= a && ["d"] || a < eo.d && ["dd", a] || 1 >= l && ["M"] || l < eo.M && ["MM", l] || 1 >= u && ["y"] || ["yy", u];
        return c[2] = e, c[3] = +t > 0, c[4] = n, ei.apply(null, c)
    }

    function ii(t, e) {
        return void 0 === eo[t] ? !1 : void 0 === e ? eo[t] : (eo[t] = e, !0)
    }

    function si(t) {
        var e = this.localeData(),
            n = ni(this, !t, e);
        return t && (n = e.pastFuture(+this, n)), e.postformat(n)
    }

    function oi() {
        var t, e, n, i = no(this._milliseconds) / 1e3,
            s = no(this._days),
            o = no(this._months);
        t = m(i / 60), e = m(t / 60), i %= 60, t %= 60, n = m(o / 12), o %= 12;
        var r = n,
            a = o,
            l = s,
            u = e,
            c = t,
            h = i,
            d = this.asSeconds();
        return d ? (0 > d ? "-" : "") + "P" + (r ? r + "Y" : "") + (a ? a + "M" : "") + (l ? l + "D" : "") + (u || c || h ? "T" : "") + (u ? u + "H" : "") + (c ? c + "M" : "") + (h ? h + "S" : "") : "P0D"
    }
    var ri, ai;
    ai = Array.prototype.some ? Array.prototype.some : function (t) {
        for (var e = Object(this), n = e.length >>> 0, i = 0; n > i; i++)
            if (i in e && t.call(this, e[i], i, e)) return !0;
        return !1
    };
    var li = t.momentProperties = [],
        ui = !1,
        ci = {};
    t.suppressDeprecationWarnings = !1, t.deprecationHandler = null;
    var hi;
    hi = Object.keys ? Object.keys : function (t) {
        var e, n = [];
        for (e in t) o(t, e) && n.push(e);
        return n
    };
    var di, fi, pi = {},
        gi = {},
        mi = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
        vi = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
        yi = {},
        bi = {},
        _i = /\d/,
        wi = /\d\d/,
        xi = /\d{3}/,
        ki = /\d{4}/,
        Si = /[+-]?\d{6}/,
        Ci = /\d\d?/,
        Ti = /\d\d\d\d?/,
        Di = /\d\d\d\d\d\d?/,
        Ei = /\d{1,3}/,
        ji = /\d{1,4}/,
        Ai = /[+-]?\d{1,6}/,
        $i = /\d+/,
        Ni = /[+-]?\d+/,
        Mi = /Z|[+-]\d\d:?\d\d/gi,
        Li = /Z|[+-]\d\d(?::?\d\d)?/gi,
        Oi = /[+-]?\d+(\.\d{1,3})?/,
        Pi = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i,
        Fi = {},
        Ii = {},
        Ri = 0,
        qi = 1,
        Hi = 2,
        zi = 3,
        Ui = 4,
        Bi = 5,
        Wi = 6,
        Yi = 7,
        Vi = 8;
    fi = Array.prototype.indexOf ? Array.prototype.indexOf : function (t) {
        var e;
        for (e = 0; e < this.length; ++e)
            if (this[e] === t) return e;
        return -1
    }, U("M", ["MM", 2], "Mo", function () {
        return this.month() + 1
    }), U("MMM", 0, 0, function (t) {
        return this.localeData().monthsShort(this, t)
    }), U("MMMM", 0, 0, function (t) {
        return this.localeData().months(this, t)
    }), O("month", "M"), G("M", Ci), G("MM", Ci, wi), G("MMM", function (t, e) {
        return e.monthsShortRegex(t)
    }), G("MMMM", function (t, e) {
        return e.monthsRegex(t)
    }), J(["M", "MM"], function (t, e) {
        e[qi] = v(t) - 1
    }), J(["MMM", "MMMM"], function (t, e, n, i) {
        var s = n._locale.monthsParse(t, i, n._strict);
        null != s ? e[qi] = s : u(n).invalidMonth = t
    });
    var Gi = /D[oD]?(\[[^\[\]]*\]|\s+)+MMMM?/,
        Qi = "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
        Ki = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
        Xi = Pi,
        Ji = Pi,
        Zi = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?/,
        ts = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?/,
        es = /Z|[+-]\d\d(?::?\d\d)?/,
        ns = [["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/], ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/], ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/], ["GGGG-[W]WW", /\d{4}-W\d\d/, !1], ["YYYY-DDD", /\d{4}-\d{3}/], ["YYYY-MM", /\d{4}-\d\d/, !1], ["YYYYYYMMDD", /[+-]\d{10}/], ["YYYYMMDD", /\d{8}/], ["GGGG[W]WWE", /\d{4}W\d{3}/], ["GGGG[W]WW", /\d{4}W\d{2}/, !1], ["YYYYDDD", /\d{7}/]],
        is = [["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/], ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/], ["HH:mm:ss", /\d\d:\d\d:\d\d/], ["HH:mm", /\d\d:\d\d/], ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/], ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/], ["HHmmss", /\d\d\d\d\d\d/], ["HHmm", /\d\d\d\d/], ["HH", /\d\d/]],
        ss = /^\/?Date\((\-?\d+)/i;
    t.createFromInputFallback = _("moment construction falls back to js Date. This is discouraged and will be removed in upcoming major release. Please refer to https://github.com/moment/moment/issues/1407 for more info.", function (t) {
        t._d = new Date(t._i + (t._useUTC ? " UTC" : ""))
    }), U("Y", 0, 0, function () {
        var t = this.year();
        return 9999 >= t ? "" + t : "+" + t
    }), U(0, ["YY", 2], 0, function () {
        return this.year() % 100
    }), U(0, ["YYYY", 4], 0, "year"), U(0, ["YYYYY", 5], 0, "year"), U(0, ["YYYYYY", 6, !0], 0, "year"), O("year", "y"), G("Y", Ni), G("YY", Ci, wi), G("YYYY", ji, ki), G("YYYYY", Ai, Si), G("YYYYYY", Ai, Si), J(["YYYYY", "YYYYYY"], Ri), J("YYYY", function (e, n) {
        n[Ri] = 2 === e.length ? t.parseTwoDigitYear(e) : v(e)
    }), J("YY", function (e, n) {
        n[Ri] = t.parseTwoDigitYear(e)
    }), J("Y", function (t, e) {
        e[Ri] = parseInt(t, 10)
    }), t.parseTwoDigitYear = function (t) {
        return v(t) + (v(t) > 68 ? 1900 : 2e3)
    };
    var os = I("FullYear", !0);
    t.ISO_8601 = function () {};
    var rs = _("moment().min is deprecated, use moment.max instead. https://github.com/moment/moment/issues/1548", function () {
            var t = Pt.apply(null, arguments);
            return this.isValid() && t.isValid() ? this > t ? this : t : h()
        }),
        as = _("moment().max is deprecated, use moment.min instead. https://github.com/moment/moment/issues/1548", function () {
            var t = Pt.apply(null, arguments);
            return this.isValid() && t.isValid() ? t > this ? this : t : h()
        }),
        ls = function () {
            return Date.now ? Date.now() : +new Date
        };
    zt("Z", ":"), zt("ZZ", ""), G("Z", Li), G("ZZ", Li), J(["Z", "ZZ"], function (t, e, n) {
        n._useUTC = !0, n._tzm = Ut(Li, t)
    });
    var us = /([\+\-]|\d\d)/gi;
    t.updateOffset = function () {};
    var cs = /^(\-)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?\d*)?$/,
        hs = /^(-)?P(?:(-?[0-9,.]*)Y)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)W)?(?:(-?[0-9,.]*)D)?(?:T(?:(-?[0-9,.]*)H)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)S)?)?$/;
    ie.fn = qt.prototype;
    var ds = le(1, "add"),
        fs = le(-1, "subtract");
    t.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ", t.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
    var ps = _("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", function (t) {
        return void 0 === t ? this.localeData() : this.locale(t)
    });
    U(0, ["gg", 2], 0, function () {
        return this.weekYear() % 100
    }), U(0, ["GG", 2], 0, function () {
        return this.isoWeekYear() % 100
    }), He("gggg", "weekYear"), He("ggggg", "weekYear"), He("GGGG", "isoWeekYear"), He("GGGGG", "isoWeekYear"), O("weekYear", "gg"), O("isoWeekYear", "GG"), G("G", Ni), G("g", Ni), G("GG", Ci, wi), G("gg", Ci, wi), G("GGGG", ji, ki), G("gggg", ji, ki), G("GGGGG", Ai, Si), G("ggggg", Ai, Si), Z(["gggg", "ggggg", "GGGG", "GGGGG"], function (t, e, n, i) {
        e[i.substr(0, 2)] = v(t)
    }), Z(["gg", "GG"], function (e, n, i, s) {
        n[s] = t.parseTwoDigitYear(e)
    }), U("Q", 0, "Qo", "quarter"), O("quarter", "Q"), G("Q", _i), J("Q", function (t, e) {
        e[qi] = 3 * (v(t) - 1)
    }), U("w", ["ww", 2], "wo", "week"), U("W", ["WW", 2], "Wo", "isoWeek"), O("week", "w"), O("isoWeek", "W"), G("w", Ci), G("ww", Ci, wi), G("W", Ci), G("WW", Ci, wi), Z(["w", "ww", "W", "WW"], function (t, e, n, i) {
        e[i.substr(0, 1)] = v(t)
    });
    var gs = {
        dow: 0,
        doy: 6
    };
    U("D", ["DD", 2], "Do", "date"), O("date", "D"), G("D", Ci), G("DD", Ci, wi), G("Do", function (t, e) {
        return t ? e._ordinalParse : e._ordinalParseLenient
    }), J(["D", "DD"], Hi), J("Do", function (t, e) {
        e[Hi] = v(t.match(Ci)[0], 10)
    });
    var ms = I("Date", !0);
    U("d", 0, "do", "day"), U("dd", 0, 0, function (t) {
        return this.localeData().weekdaysMin(this, t)
    }), U("ddd", 0, 0, function (t) {
        return this.localeData().weekdaysShort(this, t)
    }), U("dddd", 0, 0, function (t) {
        return this.localeData().weekdays(this, t)
    }), U("e", 0, 0, "weekday"), U("E", 0, 0, "isoWeekday"), O("day", "d"), O("weekday", "e"), O("isoWeekday", "E"), G("d", Ci), G("e", Ci), G("E", Ci), G("dd", function (t, e) {
        return e.weekdaysMinRegex(t)
    }), G("ddd", function (t, e) {
        return e.weekdaysShortRegex(t)
    }), G("dddd", function (t, e) {
        return e.weekdaysRegex(t)
    }), Z(["dd", "ddd", "dddd"], function (t, e, n, i) {
        var s = n._locale.weekdaysParse(t, i, n._strict);
        null != s ? e.d = s : u(n).invalidWeekday = t
    }), Z(["d", "e", "E"], function (t, e, n, i) {
        e[i] = v(t)
    });
    var vs = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
        ys = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
        bs = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
        _s = Pi,
        ws = Pi,
        xs = Pi;
    U("DDD", ["DDDD", 3], "DDDo", "dayOfYear"), O("dayOfYear", "DDD"), G("DDD", Ei), G("DDDD", xi), J(["DDD", "DDDD"], function (t, e, n) {
        n._dayOfYear = v(t)
    }), U("H", ["HH", 2], 0, "hour"), U("h", ["hh", 2], 0, gn), U("k", ["kk", 2], 0, mn), U("hmm", 0, 0, function () {
        return "" + gn.apply(this) + z(this.minutes(), 2)
    }), U("hmmss", 0, 0, function () {
        return "" + gn.apply(this) + z(this.minutes(), 2) + z(this.seconds(), 2)
    }), U("Hmm", 0, 0, function () {
        return "" + this.hours() + z(this.minutes(), 2)
    }), U("Hmmss", 0, 0, function () {
        return "" + this.hours() + z(this.minutes(), 2) + z(this.seconds(), 2)
    }), vn("a", !0), vn("A", !1), O("hour", "h"), G("a", yn), G("A", yn), G("H", Ci), G("h", Ci), G("HH", Ci, wi), G("hh", Ci, wi), G("hmm", Ti), G("hmmss", Di), G("Hmm", Ti), G("Hmmss", Di), J(["H", "HH"], zi), J(["a", "A"], function (t, e, n) {
        n._isPm = n._locale.isPM(t), n._meridiem = t
    }), J(["h", "hh"], function (t, e, n) {
        e[zi] = v(t), u(n).bigHour = !0
    }), J("hmm", function (t, e, n) {
        var i = t.length - 2;
        e[zi] = v(t.substr(0, i)), e[Ui] = v(t.substr(i)), u(n).bigHour = !0
    }), J("hmmss", function (t, e, n) {
        var i = t.length - 4,
            s = t.length - 2;
        e[zi] = v(t.substr(0, i)), e[Ui] = v(t.substr(i, 2)), e[Bi] = v(t.substr(s)), u(n).bigHour = !0
    }), J("Hmm", function (t, e, n) {
        var i = t.length - 2;
        e[zi] = v(t.substr(0, i)), e[Ui] = v(t.substr(i))
    }), J("Hmmss", function (t, e, n) {
        var i = t.length - 4,
            s = t.length - 2;
        e[zi] = v(t.substr(0, i)), e[Ui] = v(t.substr(i, 2)), e[Bi] = v(t.substr(s))
    });
    var ks = /[ap]\.?m?\.?/i,
        Ss = I("Hours", !0);
    U("m", ["mm", 2], 0, "minute"), O("minute", "m"), G("m", Ci), G("mm", Ci, wi), J(["m", "mm"], Ui);
    var Cs = I("Minutes", !1);
    U("s", ["ss", 2], 0, "second"), O("second", "s"), G("s", Ci), G("ss", Ci, wi), J(["s", "ss"], Bi);
    var Ts = I("Seconds", !1);
    U("S", 0, 0, function () {
        return ~~(this.millisecond() / 100)
    }), U(0, ["SS", 2], 0, function () {
        return ~~(this.millisecond() / 10)
    }), U(0, ["SSS", 3], 0, "millisecond"), U(0, ["SSSS", 4], 0, function () {
        return 10 * this.millisecond()
    }), U(0, ["SSSSS", 5], 0, function () {
        return 100 * this.millisecond()
    }), U(0, ["SSSSSS", 6], 0, function () {
        return 1e3 * this.millisecond()
    }), U(0, ["SSSSSSS", 7], 0, function () {
        return 1e4 * this.millisecond()
    }), U(0, ["SSSSSSSS", 8], 0, function () {
        return 1e5 * this.millisecond()
    }), U(0, ["SSSSSSSSS", 9], 0, function () {
        return 1e6 * this.millisecond()
    }), O("millisecond", "ms"), G("S", Ei, _i), G("SS", Ei, wi), G("SSS", Ei, xi);
    var Ds;
    for (Ds = "SSSS"; Ds.length <= 9; Ds += "S") G(Ds, $i);
    for (Ds = "S"; Ds.length <= 9; Ds += "S") J(Ds, wn);
    var Es = I("Milliseconds", !1);
    U("z", 0, 0, "zoneAbbr"), U("zz", 0, 0, "zoneName");
    var js = p.prototype;
    js.add = ds, js.calendar = ce, js.clone = he, js.diff = ye, js.endOf = Ae, js.format = xe, js.from = ke, js.fromNow = Se, js.to = Ce, js.toNow = Te, js.get = H, js.invalidAt = Re, js.isAfter = de, js.isBefore = fe, js.isBetween = pe, js.isSame = ge, js.isSameOrAfter = me, js.isSameOrBefore = ve, js.isValid = Fe, js.lang = ps, js.locale = De, js.localeData = Ee, js.max = as, js.min = rs, js.parsingFlags = Ie, js.set = H, js.startOf = je, js.subtract = fs, js.toArray = Le, js.toObject = Oe, js.toDate = Me, js.toISOString = we, js.toJSON = Pe, js.toString = _e, js.unix = Ne, js.valueOf = $e, js.creationData = qe, js.year = os, js.isLeapYear = bt, js.weekYear = ze, js.isoWeekYear = Ue, js.quarter = js.quarters = Ge, js.month = at, js.daysInMonth = lt, js.week = js.weeks = Je, js.isoWeek = js.isoWeeks = Ze, js.weeksInYear = We, js.isoWeeksInYear = Be, js.date = ms, js.day = js.days = an, js.weekday = ln, js.isoWeekday = un, js.dayOfYear = pn, js.hour = js.hours = Ss, js.minute = js.minutes = Cs, js.second = js.seconds = Ts, js.millisecond = js.milliseconds = Es, js.utcOffset = Yt, js.utc = Gt, js.local = Qt, js.parseZone = Kt, js.hasAlignedHourOffset = Xt, js.isDST = Jt, js.isDSTShifted = Zt, js.isLocal = te, js.isUtcOffset = ee, js.isUtc = ne, js.isUTC = ne, js.zoneAbbr = xn, js.zoneName = kn, js.dates = _("dates accessor is deprecated. Use date instead.", ms), js.months = _("months accessor is deprecated. Use month instead", at), js.years = _("years accessor is deprecated. Use year instead", os), js.zone = _("moment().zone is deprecated, use moment().utcOffset instead. https://github.com/moment/moment/issues/1779", Vt);
    var As = js,
        $s = {
            sameDay: "[Today at] LT",
            nextDay: "[Tomorrow at] LT",
            nextWeek: "dddd [at] LT",
            lastDay: "[Yesterday at] LT",
            lastWeek: "[Last] dddd [at] LT",
            sameElse: "L"
        },
        Ns = {
            LTS: "h:mm:ss A",
            LT: "h:mm A",
            L: "MM/DD/YYYY",
            LL: "MMMM D, YYYY",
            LLL: "MMMM D, YYYY h:mm A",
            LLLL: "dddd, MMMM D, YYYY h:mm A"
        },
        Ms = "Invalid date",
        Ls = "%d",
        Os = /\d{1,2}/,
        Ps = {
            future: "in %s",
            past: "%s ago",
            s: "a few seconds",
            m: "a minute",
            mm: "%d minutes",
            h: "an hour",
            hh: "%d hours",
            d: "a day",
            dd: "%d days",
            M: "a month",
            MM: "%d months",
            y: "a year",
            yy: "%d years"
        },
        Fs = T.prototype;
    Fs._calendar = $s, Fs.calendar = Tn, Fs._longDateFormat = Ns, Fs.longDateFormat = Dn, Fs._invalidDate = Ms, Fs.invalidDate = En, Fs._ordinal = Ls, Fs.ordinal = jn, Fs._ordinalParse = Os, Fs.preparse = An, Fs.postformat = An, Fs._relativeTime = Ps, Fs.relativeTime = $n, Fs.pastFuture = Nn, Fs.set = S, Fs.months = nt, Fs._months = Qi, Fs.monthsShort = it, Fs._monthsShort = Ki, Fs.monthsParse = ot, Fs._monthsRegex = Ji, Fs.monthsRegex = ct, Fs._monthsShortRegex = Xi, Fs.monthsShortRegex = ut, Fs.week = Qe, Fs._week = gs, Fs.firstDayOfYear = Xe, Fs.firstDayOfWeek = Ke, Fs.weekdays = en, Fs._weekdays = vs, Fs.weekdaysMin = sn, Fs._weekdaysMin = bs, Fs.weekdaysShort = nn, Fs._weekdaysShort = ys, Fs.weekdaysParse = rn, Fs._weekdaysRegex = _s, Fs.weekdaysRegex = cn, Fs._weekdaysShortRegex = ws, Fs.weekdaysShortRegex = hn, Fs._weekdaysMinRegex = xs, Fs.weekdaysMinRegex = dn, Fs.isPM = bn, Fs._meridiemParse = ks, Fs.meridiem = _n, A("en", {
        ordinalParse: /\d{1,2}(th|st|nd|rd)/,
        ordinal: function (t) {
            var e = t % 10,
                n = 1 === v(t % 100 / 10) ? "th" : 1 === e ? "st" : 2 === e ? "nd" : 3 === e ? "rd" : "th";
            return t + n
        }
    }), t.lang = _("moment.lang is deprecated. Use moment.locale instead.", A), t.langData = _("moment.langData is deprecated. Use moment.localeData instead.", M);
    var Is = Math.abs,
        Rs = Xn("ms"),
        qs = Xn("s"),
        Hs = Xn("m"),
        zs = Xn("h"),
        Us = Xn("d"),
        Bs = Xn("w"),
        Ws = Xn("M"),
        Ys = Xn("y"),
        Vs = Zn("milliseconds"),
        Gs = Zn("seconds"),
        Qs = Zn("minutes"),
        Ks = Zn("hours"),
        Xs = Zn("days"),
        Js = Zn("months"),
        Zs = Zn("years"),
        to = Math.round,
        eo = {
            s: 45,
            m: 45,
            h: 22,
            d: 26,
            M: 11
        },
        no = Math.abs,
        io = qt.prototype;
    io.abs = Hn, io.add = Un, io.subtract = Bn, io.as = Qn, io.asMilliseconds = Rs, io.asSeconds = qs, io.asMinutes = Hs, io.asHours = zs, io.asDays = Us, io.asWeeks = Bs, io.asMonths = Ws, io.asYears = Ys, io.valueOf = Kn, io._bubble = Yn, io.get = Jn, io.milliseconds = Vs, io.seconds = Gs, io.minutes = Qs, io.hours = Ks, io.days = Xs, io.weeks = ti, io.months = Js, io.years = Zs, io.humanize = si, io.toISOString = oi, io.toString = oi, io.toJSON = oi, io.locale = De, io.localeData = Ee, io.toIsoString = _("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", oi), io.lang = ps, U("X", 0, 0, "unix"), U("x", 0, 0, "valueOf"), G("x", Ni), G("X", Oi), J("X", function (t, e, n) {
        n._d = new Date(1e3 * parseFloat(t, 10))
    }), J("x", function (t, e, n) {
        n._d = new Date(v(t))
    }), t.version = "2.13.0", e(Pt), t.fn = As, t.min = It, t.max = Rt, t.now = ls, t.utc = a, t.unix = Sn, t.months = Pn, t.isDate = i, t.locale = A, t.invalid = h, t.duration = ie, t.isMoment = g, t.weekdays = In, t.parseZone = Cn, t.localeData = M, t.isDuration = Ht, t.monthsShort = Fn, t.weekdaysMin = qn, t.defineLocale = $, t.updateLocale = N, t.locales = L, t.weekdaysShort = Rn, t.normalizeUnits = P, t.relativeTimeThreshold = ii, t.prototype = As;
    var so = t;
    return so
}), + function (t) {
    "use strict";

    function e(e) {
        return this.each(function () {
            var i = t(this),
                s = i.data("bs.affix"),
                o = "object" == typeof e && e;
            s || i.data("bs.affix", s = new n(this, o)), "string" == typeof e && s[e]()
        })
    }
    var n = function (e, i) {
        this.options = t.extend({}, n.DEFAULTS, i), this.$target = t(this.options.target).on("scroll.bs.affix.data-api", t.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", t.proxy(this.checkPositionWithEventLoop, this)), this.$element = t(e), this.affixed = null, this.unpin = null, this.pinnedOffset = null, this.checkPosition()
    };
    n.VERSION = "3.3.5", n.RESET = "affix affix-top affix-bottom", n.DEFAULTS = {
        offset: 0,
        target: window
    }, n.prototype.getState = function (t, e, n, i) {
        var s = this.$target.scrollTop(),
            o = this.$element.offset(),
            r = this.$target.height();
        if (null != n && "top" == this.affixed) return n > s ? "top" : !1;
        if ("bottom" == this.affixed) return null != n ? s + this.unpin <= o.top ? !1 : "bottom" : t - i >= s + r ? !1 : "bottom";
        var a = null == this.affixed,
            l = a ? s : o.top,
            u = a ? r : e;
        return null != n && n >= s ? "top" : null != i && l + u >= t - i ? "bottom" : !1
    }, n.prototype.getPinnedOffset = function () {
        if (this.pinnedOffset) return this.pinnedOffset;
        this.$element.removeClass(n.RESET).addClass("affix");
        var t = this.$target.scrollTop(),
            e = this.$element.offset();
        return this.pinnedOffset = e.top - t
    }, n.prototype.checkPositionWithEventLoop = function () {
        setTimeout(t.proxy(this.checkPosition, this), 1)
    }, n.prototype.checkPosition = function () {
        if (this.$element.is(":visible")) {
            var e = this.$element.height(),
                i = this.options.offset,
                s = i.top,
                o = i.bottom,
                r = Math.max(t(document).height(), t(document.body).height());
            "object" != typeof i && (o = s = i), "function" == typeof s && (s = i.top(this.$element)), "function" == typeof o && (o = i.bottom(this.$element));
            var a = this.getState(r, e, s, o);
            if (this.affixed != a) {
                null != this.unpin && this.$element.css("top", "");
                var l = "affix" + (a ? "-" + a : ""),
                    u = t.Event(l + ".bs.affix");
                if (this.$element.trigger(u), u.isDefaultPrevented()) return;
                this.affixed = a, this.unpin = "bottom" == a ? this.getPinnedOffset() : null, this.$element.removeClass(n.RESET).addClass(l).trigger(l.replace("affix", "affixed") + ".bs.affix")
            }
            "bottom" == a && this.$element.offset({
                top: r - e - o
            })
        }
    };
    var i = t.fn.affix;
    t.fn.affix = e, t.fn.affix.Constructor = n, t.fn.affix.noConflict = function () {
        return t.fn.affix = i, this
    }, t(window).on("load", function () {
        t('[data-spy="affix"]').each(function () {
            var n = t(this),
                i = n.data();
            i.offset = i.offset || {}, null != i.offsetBottom && (i.offset.bottom = i.offsetBottom), null != i.offsetTop && (i.offset.top = i.offsetTop), e.call(n, i)
        })
    })
}(jQuery), + function (t) {
    "use strict";

    function e(e) {
        return this.each(function () {
            var n = t(this),
                s = n.data("bs.alert");
            s || n.data("bs.alert", s = new i(this)), "string" == typeof e && s[e].call(n)
        })
    }
    var n = '[data-dismiss="alert"]',
        i = function (e) {
            t(e).on("click", n, this.close)
        };
    i.VERSION = "3.3.5", i.TRANSITION_DURATION = 150, i.prototype.close = function (e) {
        function n() {
            r.detach().trigger("closed.bs.alert").remove()
        }
        var s = t(this),
            o = s.attr("data-target");
        o || (o = s.attr("href"), o = o && o.replace(/.*(?=#[^\s]*$)/, ""));
        var r = t(o);
        e && e.preventDefault(), r.length || (r = s.closest(".alert")), r.trigger(e = t.Event("close.bs.alert")), e.isDefaultPrevented() || (r.removeClass("in"), t.support.transition && r.hasClass("fade") ? r.one("bsTransitionEnd", n).emulateTransitionEnd(i.TRANSITION_DURATION) : n())
    };
    var s = t.fn.alert;
    t.fn.alert = e, t.fn.alert.Constructor = i, t.fn.alert.noConflict = function () {
        return t.fn.alert = s, this
    }, t(document).on("click.bs.alert.data-api", n, i.prototype.close)
}(jQuery), + function (t) {
    "use strict";

    function e(e) {
        return this.each(function () {
            var i = t(this),
                s = i.data("bs.button"),
                o = "object" == typeof e && e;
            s || i.data("bs.button", s = new n(this, o)), "toggle" == e ? s.toggle() : e && s.setState(e)
        })
    }
    var n = function (e, i) {
        this.$element = t(e), this.options = t.extend({}, n.DEFAULTS, i), this.isLoading = !1
    };
    n.VERSION = "3.3.5", n.DEFAULTS = {
        loadingText: "loading..."
    }, n.prototype.setState = function (e) {
        var n = "disabled",
            i = this.$element,
            s = i.is("input") ? "val" : "html",
            o = i.data();
        e += "Text", null == o.resetText && i.data("resetText", i[s]()), setTimeout(t.proxy(function () {
            i[s](null == o[e] ? this.options[e] : o[e]), "loadingText" == e ? (this.isLoading = !0, i.addClass(n).attr(n, n)) : this.isLoading && (this.isLoading = !1, i.removeClass(n).removeAttr(n))
        }, this), 0)
    }, n.prototype.toggle = function () {
        var t = !0,
            e = this.$element.closest('[data-toggle="buttons"]');
        if (e.length) {
            var n = this.$element.find("input");
            "radio" == n.prop("type") ? (n.prop("checked") && (t = !1), e.find(".active").removeClass("active"), this.$element.addClass("active")) : "checkbox" == n.prop("type") && (n.prop("checked") !== this.$element.hasClass("active") && (t = !1), this.$element.toggleClass("active")), n.prop("checked", this.$element.hasClass("active")), t && n.trigger("change")
        } else this.$element.attr("aria-pressed", !this.$element.hasClass("active")), this.$element.toggleClass("active")
    };
    var i = t.fn.button;
    t.fn.button = e, t.fn.button.Constructor = n, t.fn.button.noConflict = function () {
        return t.fn.button = i, this
    }, t(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function (n) {
        var i = t(n.target);
        i.hasClass("btn") || (i = i.closest(".btn")), e.call(i, "toggle"), t(n.target).is('input[type="radio"]') || t(n.target).is('input[type="checkbox"]') || n.preventDefault()
    }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function (e) {
        t(e.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(e.type))
    })
}(jQuery), + function (t) {
    "use strict";

    function e(e) {
        return this.each(function () {
            var i = t(this),
                s = i.data("bs.carousel"),
                o = t.extend({}, n.DEFAULTS, i.data(), "object" == typeof e && e),
                r = "string" == typeof e ? e : o.slide;
            s || i.data("bs.carousel", s = new n(this, o)), "number" == typeof e ? s.to(e) : r ? s[r]() : o.interval && s.pause().cycle()
        })
    }
    var n = function (e, n) {
        this.$element = t(e), this.$indicators = this.$element.find(".carousel-indicators"), this.options = n, this.paused = null, this.sliding = null, this.interval = null, this.$active = null, this.$items = null, this.options.keyboard && this.$element.on("keydown.bs.carousel", t.proxy(this.keydown, this)), "hover" == this.options.pause && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", t.proxy(this.pause, this)).on("mouseleave.bs.carousel", t.proxy(this.cycle, this))
    };
    n.VERSION = "3.3.5", n.TRANSITION_DURATION = 600, n.DEFAULTS = {
        interval: 5e3,
        pause: "hover",
        wrap: !0,
        keyboard: !0
    }, n.prototype.keydown = function (t) {
        if (!/input|textarea/i.test(t.target.tagName)) {
            switch (t.which) {
                case 37:
                    this.prev();
                    break;
                case 39:
                    this.next();
                    break;
                default:
                    return
            }
            t.preventDefault()
        }
    }, n.prototype.cycle = function (e) {
        return e || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(t.proxy(this.next, this), this.options.interval)), this
    }, n.prototype.getItemIndex = function (t) {
        return this.$items = t.parent().children(".item"), this.$items.index(t || this.$active)
    }, n.prototype.getItemForDirection = function (t, e) {
        var n = this.getItemIndex(e),
            i = "prev" == t && 0 === n || "next" == t && n == this.$items.length - 1;
        if (i && !this.options.wrap) return e;
        var s = "prev" == t ? -1 : 1,
            o = (n + s) % this.$items.length;
        return this.$items.eq(o)
    }, n.prototype.to = function (t) {
        var e = this,
            n = this.getItemIndex(this.$active = this.$element.find(".item.active"));
        return t > this.$items.length - 1 || 0 > t ? void 0 : this.sliding ? this.$element.one("slid.bs.carousel", function () {
            e.to(t)
        }) : n == t ? this.pause().cycle() : this.slide(t > n ? "next" : "prev", this.$items.eq(t))
    }, n.prototype.pause = function (e) {
        return e || (this.paused = !0), this.$element.find(".next, .prev").length && t.support.transition && (this.$element.trigger(t.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
    }, n.prototype.next = function () {
        return this.sliding ? void 0 : this.slide("next")
    }, n.prototype.prev = function () {
        return this.sliding ? void 0 : this.slide("prev")
    }, n.prototype.slide = function (e, i) {
        var s = this.$element.find(".item.active"),
            o = i || this.getItemForDirection(e, s),
            r = this.interval,
            a = "next" == e ? "left" : "right",
            l = this;
        if (o.hasClass("active")) return this.sliding = !1;
        var u = o[0],
            c = t.Event("slide.bs.carousel", {
                relatedTarget: u,
                direction: a
            });
        if (this.$element.trigger(c), !c.isDefaultPrevented()) {
            if (this.sliding = !0, r && this.pause(), this.$indicators.length) {
                this.$indicators.find(".active").removeClass("active");
                var h = t(this.$indicators.children()[this.getItemIndex(o)]);
                h && h.addClass("active")
            }
            var d = t.Event("slid.bs.carousel", {
                relatedTarget: u,
                direction: a
            });
            return t.support.transition && this.$element.hasClass("slide") ? (o.addClass(e), o[0].offsetWidth, s.addClass(a), o.addClass(a), s.one("bsTransitionEnd", function () {
                o.removeClass([e, a].join(" ")).addClass("active"),
                    s.removeClass(["active", a].join(" ")), l.sliding = !1, setTimeout(function () {
                        l.$element.trigger(d)
                    }, 0)
            }).emulateTransitionEnd(n.TRANSITION_DURATION)) : (s.removeClass("active"), o.addClass("active"), this.sliding = !1, this.$element.trigger(d)), r && this.cycle(), this
        }
    };
    var i = t.fn.carousel;
    t.fn.carousel = e, t.fn.carousel.Constructor = n, t.fn.carousel.noConflict = function () {
        return t.fn.carousel = i, this
    };
    var s = function (n) {
        var i, s = t(this),
            o = t(s.attr("data-target") || (i = s.attr("href")) && i.replace(/.*(?=#[^\s]+$)/, ""));
        if (o.hasClass("carousel")) {
            var r = t.extend({}, o.data(), s.data()),
                a = s.attr("data-slide-to");
            a && (r.interval = !1), e.call(o, r), a && o.data("bs.carousel").to(a), n.preventDefault()
        }
    };
    t(document).on("click.bs.carousel.data-api", "[data-slide]", s).on("click.bs.carousel.data-api", "[data-slide-to]", s), t(window).on("load", function () {
        t('[data-ride="carousel"]').each(function () {
            var n = t(this);
            e.call(n, n.data())
        })
    })
}(jQuery), + function (t) {
    "use strict";

    function e(e) {
        var n, i = e.attr("data-target") || (n = e.attr("href")) && n.replace(/.*(?=#[^\s]+$)/, "");
        return t(i)
    }

    function n(e) {
        return this.each(function () {
            var n = t(this),
                s = n.data("bs.collapse"),
                o = t.extend({}, i.DEFAULTS, n.data(), "object" == typeof e && e);
            !s && o.toggle && /show|hide/.test(e) && (o.toggle = !1), s || n.data("bs.collapse", s = new i(this, o)), "string" == typeof e && s[e]()
        })
    }
    var i = function (e, n) {
        this.$element = t(e), this.options = t.extend({}, i.DEFAULTS, n), this.$trigger = t('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]'), this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle && this.toggle()
    };
    i.VERSION = "3.3.5", i.TRANSITION_DURATION = 350, i.DEFAULTS = {
        toggle: !0
    }, i.prototype.dimension = function () {
        var t = this.$element.hasClass("width");
        return t ? "width" : "height"
    }, i.prototype.show = function () {
        if (!this.transitioning && !this.$element.hasClass("in")) {
            var e, s = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
            if (!(s && s.length && (e = s.data("bs.collapse"), e && e.transitioning))) {
                var o = t.Event("show.bs.collapse");
                if (this.$element.trigger(o), !o.isDefaultPrevented()) {
                    s && s.length && (n.call(s, "hide"), e || s.data("bs.collapse", null));
                    var r = this.dimension();
                    this.$element.removeClass("collapse").addClass("collapsing")[r](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1;
                    var a = function () {
                        this.$element.removeClass("collapsing").addClass("collapse in")[r](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse")
                    };
                    if (!t.support.transition) return a.call(this);
                    var l = t.camelCase(["scroll", r].join("-"));
                    this.$element.one("bsTransitionEnd", t.proxy(a, this)).emulateTransitionEnd(i.TRANSITION_DURATION)[r](this.$element[0][l])
                }
            }
        }
    }, i.prototype.hide = function () {
        if (!this.transitioning && this.$element.hasClass("in")) {
            var e = t.Event("hide.bs.collapse");
            if (this.$element.trigger(e), !e.isDefaultPrevented()) {
                var n = this.dimension();
                this.$element[n](this.$element[n]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1;
                var s = function () {
                    this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
                };
                return t.support.transition ? void this.$element[n](0).one("bsTransitionEnd", t.proxy(s, this)).emulateTransitionEnd(i.TRANSITION_DURATION) : s.call(this)
            }
        }
    }, i.prototype.toggle = function () {
        this[this.$element.hasClass("in") ? "hide" : "show"]()
    }, i.prototype.getParent = function () {
        return t(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(t.proxy(function (n, i) {
            var s = t(i);
            this.addAriaAndCollapsedClass(e(s), s)
        }, this)).end()
    }, i.prototype.addAriaAndCollapsedClass = function (t, e) {
        var n = t.hasClass("in");
        t.attr("aria-expanded", n), e.toggleClass("collapsed", !n).attr("aria-expanded", n)
    };
    var s = t.fn.collapse;
    t.fn.collapse = n, t.fn.collapse.Constructor = i, t.fn.collapse.noConflict = function () {
        return t.fn.collapse = s, this
    }, t(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function (i) {
        var s = t(this);
        s.attr("data-target") || i.preventDefault();
        var o = e(s),
            r = o.data("bs.collapse"),
            a = r ? "toggle" : s.data();
        n.call(o, a)
    })
}(jQuery), + function (t) {
    "use strict";

    function e(e) {
        var n = e.attr("data-target");
        n || (n = e.attr("href"), n = n && /#[A-Za-z]/.test(n) && n.replace(/.*(?=#[^\s]*$)/, ""));
        var i = n && t(n);
        return i && i.length ? i : e.parent()
    }

    function n(n) {
        n && 3 === n.which || (t(s).remove(), t(o).each(function () {
            var i = t(this),
                s = e(i),
                o = {
                    relatedTarget: this
                };
            s.hasClass("open") && (n && "click" == n.type && /input|textarea/i.test(n.target.tagName) && t.contains(s[0], n.target) || (s.trigger(n = t.Event("hide.bs.dropdown", o)), n.isDefaultPrevented() || (i.attr("aria-expanded", "false"), s.removeClass("open").trigger("hidden.bs.dropdown", o))))
        }))
    }

    function i(e) {
        return this.each(function () {
            var n = t(this),
                i = n.data("bs.dropdown");
            i || n.data("bs.dropdown", i = new r(this)), "string" == typeof e && i[e].call(n)
        })
    }
    var s = ".dropdown-backdrop",
        o = '[data-toggle="dropdown"]',
        r = function (e) {
            t(e).on("click.bs.dropdown", this.toggle)
        };
    r.VERSION = "3.3.5", r.prototype.toggle = function (i) {
        var s = t(this);
        if (!s.is(".disabled, :disabled")) {
            var o = e(s),
                r = o.hasClass("open");
            if (n(), !r) {
                "ontouchstart" in document.documentElement && !o.closest(".navbar-nav").length && t(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(t(this)).on("click", n);
                var a = {
                    relatedTarget: this
                };
                if (o.trigger(i = t.Event("show.bs.dropdown", a)), i.isDefaultPrevented()) return;
                s.trigger("focus").attr("aria-expanded", "true"), o.toggleClass("open").trigger("shown.bs.dropdown", a)
            }
            return !1
        }
    }, r.prototype.keydown = function (n) {
        if (/(38|40|27|32)/.test(n.which) && !/input|textarea/i.test(n.target.tagName)) {
            var i = t(this);
            if (n.preventDefault(), n.stopPropagation(), !i.is(".disabled, :disabled")) {
                var s = e(i),
                    r = s.hasClass("open");
                if (!r && 27 != n.which || r && 27 == n.which) return 27 == n.which && s.find(o).trigger("focus"), i.trigger("click");
                var a = " li:not(.disabled):visible a",
                    l = s.find(".dropdown-menu" + a);
                if (l.length) {
                    var u = l.index(n.target);
                    38 == n.which && u > 0 && u--, 40 == n.which && u < l.length - 1 && u++, ~u || (u = 0), l.eq(u).trigger("focus")
                }
            }
        }
    };
    var a = t.fn.dropdown;
    t.fn.dropdown = i, t.fn.dropdown.Constructor = r, t.fn.dropdown.noConflict = function () {
        return t.fn.dropdown = a, this
    }, t(document).on("click.bs.dropdown.data-api", n).on("click.bs.dropdown.data-api", ".dropdown form", function (t) {
        t.stopPropagation()
    }).on("click.bs.dropdown.data-api", o, r.prototype.toggle).on("keydown.bs.dropdown.data-api", o, r.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", r.prototype.keydown)
}(jQuery), + function (t) {
    "use strict";

    function e(e) {
        return this.each(function () {
            var i = t(this),
                s = i.data("bs.tab");
            s || i.data("bs.tab", s = new n(this)), "string" == typeof e && s[e]()
        })
    }
    var n = function (e) {
        this.element = t(e)
    };
    n.VERSION = "3.3.5", n.TRANSITION_DURATION = 150, n.prototype.show = function () {
        var e = this.element,
            n = e.closest("ul:not(.dropdown-menu)"),
            i = e.data("target");
        if (i || (i = e.attr("href"), i = i && i.replace(/.*(?=#[^\s]*$)/, "")), !e.parent("li").hasClass("active")) {
            var s = n.find(".active:last a"),
                o = t.Event("hide.bs.tab", {
                    relatedTarget: e[0]
                }),
                r = t.Event("show.bs.tab", {
                    relatedTarget: s[0]
                });
            if (s.trigger(o), e.trigger(r), !r.isDefaultPrevented() && !o.isDefaultPrevented()) {
                var a = t(i);
                this.activate(e.closest("li"), n), this.activate(a, a.parent(), function () {
                    s.trigger({
                        type: "hidden.bs.tab",
                        relatedTarget: e[0]
                    }), e.trigger({
                        type: "shown.bs.tab",
                        relatedTarget: s[0]
                    })
                })
            }
        }
    }, n.prototype.activate = function (e, i, s) {
        function o() {
            r.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1), e.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0), a ? (e[0].offsetWidth, e.addClass("in")) : e.removeClass("fade"), e.parent(".dropdown-menu").length && e.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0), s && s()
        }
        var r = i.find("> .active"),
            a = s && t.support.transition && (r.length && r.hasClass("fade") || !!i.find("> .fade").length);
        r.length && a ? r.one("bsTransitionEnd", o).emulateTransitionEnd(n.TRANSITION_DURATION) : o(), r.removeClass("in")
    };
    var i = t.fn.tab;
    t.fn.tab = e, t.fn.tab.Constructor = n, t.fn.tab.noConflict = function () {
        return t.fn.tab = i, this
    };
    var s = function (n) {
        n.preventDefault(), e.call(t(this), "show")
    };
    t(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', s).on("click.bs.tab.data-api", '[data-toggle="pill"]', s)
}(jQuery), + function (t) {
    "use strict";

    function e() {
        var t = document.createElement("bootstrap"),
            e = {
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                OTransition: "oTransitionEnd otransitionend",
                transition: "transitionend"
            };
        for (var n in e)
            if (void 0 !== t.style[n]) return {
                end: e[n]
            };
        return !1
    }
    t.fn.emulateTransitionEnd = function (e) {
        var n = !1,
            i = this;
        t(this).one("bsTransitionEnd", function () {
            n = !0
        });
        var s = function () {
            n || t(i).trigger(t.support.transition.end)
        };
        return setTimeout(s, e), this
    }, t(function () {
        t.support.transition = e(), t.support.transition && (t.event.special.bsTransitionEnd = {
            bindType: t.support.transition.end,
            delegateType: t.support.transition.end,
            handle: function (e) {
                return t(e.target).is(this) ? e.handleObj.handler.apply(this, arguments) : void 0
            }
        })
    })
}(jQuery), + function (t) {
    "use strict";

    function e(n, i) {
        this.$body = t(document.body), this.$scrollElement = t(t(n).is(document.body) ? window : n), this.options = t.extend({}, e.DEFAULTS, i), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", t.proxy(this.process, this)), this.refresh(), this.process()
    }

    function n(n) {
        return this.each(function () {
            var i = t(this),
                s = i.data("bs.scrollspy"),
                o = "object" == typeof n && n;
            s || i.data("bs.scrollspy", s = new e(this, o)), "string" == typeof n && s[n]()
        })
    }
    e.VERSION = "3.3.5", e.DEFAULTS = {
        offset: 10
    }, e.prototype.getScrollHeight = function () {
        return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
    }, e.prototype.refresh = function () {
        var e = this,
            n = "offset",
            i = 0;
        this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight(), t.isWindow(this.$scrollElement[0]) || (n = "position", i = this.$scrollElement.scrollTop()), this.$body.find(this.selector).map(function () {
            var e = t(this),
                s = e.data("target") || e.attr("href"),
                o = /^#./.test(s) && t(s);
            return o && o.length && o.is(":visible") && [[o[n]().top + i, s]] || null
        }).sort(function (t, e) {
            return t[0] - e[0]
        }).each(function () {
            e.offsets.push(this[0]), e.targets.push(this[1])
        })
    }, e.prototype.process = function () {
        var t, e = this.$scrollElement.scrollTop() + this.options.offset,
            n = this.getScrollHeight(),
            i = this.options.offset + n - this.$scrollElement.height(),
            s = this.offsets,
            o = this.targets,
            r = this.activeTarget;
        if (this.scrollHeight != n && this.refresh(), e >= i) return r != (t = o[o.length - 1]) && this.activate(t);
        if (r && e < s[0]) return this.activeTarget = null, this.clear();
        for (t = s.length; t--;) r != o[t] && e >= s[t] && (void 0 === s[t + 1] || e < s[t + 1]) && this.activate(o[t])
    }, e.prototype.activate = function (e) {
        this.activeTarget = e, this.clear();
        var n = this.selector + '[data-target="' + e + '"],' + this.selector + '[href="' + e + '"]',
            i = t(n).parents("li").addClass("active");
        i.parent(".dropdown-menu").length && (i = i.closest("li.dropdown").addClass("active")), i.trigger("activate.bs.scrollspy")
    }, e.prototype.clear = function () {
        t(this.selector).parentsUntil(this.options.target, ".active").removeClass("active")
    };
    var i = t.fn.scrollspy;
    t.fn.scrollspy = n, t.fn.scrollspy.Constructor = e, t.fn.scrollspy.noConflict = function () {
        return t.fn.scrollspy = i, this
    }, t(window).on("load.bs.scrollspy.data-api", function () {
        t('[data-spy="scroll"]').each(function () {
            var e = t(this);
            n.call(e, e.data())
        })
    })
}(jQuery), + function (t) {
    "use strict";

    function e(e, i) {
        return this.each(function () {
            var s = t(this),
                o = s.data("bs.modal"),
                r = t.extend({}, n.DEFAULTS, s.data(), "object" == typeof e && e);
            o || s.data("bs.modal", o = new n(this, r)), "string" == typeof e ? o[e](i) : r.show && o.show(i)
        })
    }
    var n = function (e, n) {
        this.options = n, this.$body = t(document.body), this.$element = t(e), this.$dialog = this.$element.find(".modal-dialog"), this.$backdrop = null, this.isShown = null, this.originalBodyPad = null, this.scrollbarWidth = 0, this.ignoreBackdropClick = !1, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, t.proxy(function () {
            this.$element.trigger("loaded.bs.modal")
        }, this))
    };
    n.VERSION = "3.3.5", n.TRANSITION_DURATION = 300, n.BACKDROP_TRANSITION_DURATION = 150, n.DEFAULTS = {
        backdrop: !0,
        keyboard: !0,
        show: !0
    }, n.prototype.toggle = function (t) {
        return this.isShown ? this.hide() : this.show(t)
    }, n.prototype.show = function (e) {
        var i = this,
            s = t.Event("show.bs.modal", {
                relatedTarget: e
            });
        this.$element.trigger(s), this.isShown || s.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', t.proxy(this.hide, this)), this.$dialog.on("mousedown.dismiss.bs.modal", function () {
            i.$element.one("mouseup.dismiss.bs.modal", function (e) {
                t(e.target).is(i.$element) && (i.ignoreBackdropClick = !0)
            })
        }), this.backdrop(function () {
            var s = t.support.transition && i.$element.hasClass("fade");
            i.$element.parent().length || i.$element.appendTo(i.$body), i.$element.show().scrollTop(0), i.adjustDialog(), s && i.$element[0].offsetWidth, i.$element.addClass("in"), i.enforceFocus();
            var o = t.Event("shown.bs.modal", {
                relatedTarget: e
            });
            s ? i.$dialog.one("bsTransitionEnd", function () {
                i.$element.trigger("focus").trigger(o)
            }).emulateTransitionEnd(n.TRANSITION_DURATION) : i.$element.trigger("focus").trigger(o)
        }))
    }, n.prototype.hide = function (e) {
        e && e.preventDefault(), e = t.Event("hide.bs.modal"), this.$element.trigger(e), this.isShown && !e.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), t(document).off("focusin.bs.modal"), this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"), this.$dialog.off("mousedown.dismiss.bs.modal"), t.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", t.proxy(this.hideModal, this)).emulateTransitionEnd(n.TRANSITION_DURATION) : this.hideModal())
    }, n.prototype.enforceFocus = function () {
        t(document).off("focusin.bs.modal").on("focusin.bs.modal", t.proxy(function (t) {
            this.$element[0] === t.target || this.$element.has(t.target).length || this.$element.trigger("focus")
        }, this))
    }, n.prototype.escape = function () {
        this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", t.proxy(function (t) {
            27 == t.which && this.hide()
        }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal")
    }, n.prototype.resize = function () {
        this.isShown ? t(window).on("resize.bs.modal", t.proxy(this.handleUpdate, this)) : t(window).off("resize.bs.modal")
    }, n.prototype.hideModal = function () {
        var t = this;
        this.$element.hide(), this.backdrop(function () {
            t.$body.removeClass("modal-open"), t.resetAdjustments(), t.resetScrollbar(), t.$element.trigger("hidden.bs.modal")
        })
    }, n.prototype.removeBackdrop = function () {
        this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
    }, n.prototype.backdrop = function (e) {
        var i = this,
            s = this.$element.hasClass("fade") ? "fade" : "";
        if (this.isShown && this.options.backdrop) {
            var o = t.support.transition && s;
            if (this.$backdrop = t(document.createElement("div")).addClass("modal-backdrop " + s).appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", t.proxy(function (t) {
                    return this.ignoreBackdropClick ? void(this.ignoreBackdropClick = !1) : void(t.target === t.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide()))
                }, this)), o && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !e) return;
            o ? this.$backdrop.one("bsTransitionEnd", e).emulateTransitionEnd(n.BACKDROP_TRANSITION_DURATION) : e()
        } else if (!this.isShown && this.$backdrop) {
            this.$backdrop.removeClass("in");
            var r = function () {
                i.removeBackdrop(), e && e()
            };
            t.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", r).emulateTransitionEnd(n.BACKDROP_TRANSITION_DURATION) : r()
        } else e && e()
    }, n.prototype.handleUpdate = function () {
        this.adjustDialog()
    }, n.prototype.adjustDialog = function () {
        var t = this.$element[0].scrollHeight > document.documentElement.clientHeight;
        this.$element.css({
            paddingLeft: !this.bodyIsOverflowing && t ? this.scrollbarWidth : "",
            paddingRight: this.bodyIsOverflowing && !t ? this.scrollbarWidth : ""
        })
    }, n.prototype.resetAdjustments = function () {
        this.$element.css({
            paddingLeft: "",
            paddingRight: ""
        })
    }, n.prototype.checkScrollbar = function () {
        var t = window.innerWidth;
        if (!t) {
            var e = document.documentElement.getBoundingClientRect();
            t = e.right - Math.abs(e.left)
        }
        this.bodyIsOverflowing = document.body.clientWidth < t, this.scrollbarWidth = this.measureScrollbar()
    }, n.prototype.setScrollbar = function () {
        var t = parseInt(this.$body.css("padding-right") || 0, 10);
        this.originalBodyPad = document.body.style.paddingRight || "", this.bodyIsOverflowing && this.$body.css("padding-right", t + this.scrollbarWidth)
    }, n.prototype.resetScrollbar = function () {
        this.$body.css("padding-right", this.originalBodyPad)
    }, n.prototype.measureScrollbar = function () {
        var t = document.createElement("div");
        t.className = "modal-scrollbar-measure", this.$body.append(t);
        var e = t.offsetWidth - t.clientWidth;
        return this.$body[0].removeChild(t), e
    };
    var i = t.fn.modal;
    t.fn.modal = e, t.fn.modal.Constructor = n, t.fn.modal.noConflict = function () {
        return t.fn.modal = i, this
    }, t(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function (n) {
        var i = t(this),
            s = i.attr("href"),
            o = t(i.attr("data-target") || s && s.replace(/.*(?=#[^\s]+$)/, "")),
            r = o.data("bs.modal") ? "toggle" : t.extend({
                remote: !/#/.test(s) && s
            }, o.data(), i.data());
        i.is("a") && n.preventDefault(), o.one("show.bs.modal", function (t) {
            t.isDefaultPrevented() || o.one("hidden.bs.modal", function () {
                i.is(":visible") && i.trigger("focus")
            })
        }), e.call(o, r, this)
    })
}(jQuery), + function (t) {
    "use strict";

    function e(e) {
        return this.each(function () {
            var i = t(this),
                s = i.data("bs.tooltip"),
                o = "object" == typeof e && e;
            (s || !/destroy|hide/.test(e)) && (s || i.data("bs.tooltip", s = new n(this, o)), "string" == typeof e && s[e]())
        })
    }
    var n = function (t, e) {
        this.type = null, this.options = null, this.enabled = null, this.timeout = null, this.hoverState = null, this.$element = null, this.inState = null, this.init("tooltip", t, e)
    };
    n.VERSION = "3.3.5", n.TRANSITION_DURATION = 150, n.DEFAULTS = {
        animation: !0,
        placement: "top",
        selector: !1,
        template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        container: !1,
        viewport: {
            selector: "body",
            padding: 0
        }
    }, n.prototype.init = function (e, n, i) {
        if (this.enabled = !0, this.type = e, this.$element = t(n), this.options = this.getOptions(i), this.$viewport = this.options.viewport && t(t.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport), this.inState = {
                click: !1,
                hover: !1,
                focus: !1
            }, this.$element[0] instanceof document.constructor && !this.options.selector) throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");
        for (var s = this.options.trigger.split(" "), o = s.length; o--;) {
            var r = s[o];
            if ("click" == r) this.$element.on("click." + this.type, this.options.selector, t.proxy(this.toggle, this));
            else if ("manual" != r) {
                var a = "hover" == r ? "mouseenter" : "focusin",
                    l = "hover" == r ? "mouseleave" : "focusout";
                this.$element.on(a + "." + this.type, this.options.selector, t.proxy(this.enter, this)), this.$element.on(l + "." + this.type, this.options.selector, t.proxy(this.leave, this))
            }
        }
        this.options.selector ? this._options = t.extend({}, this.options, {
            trigger: "manual",
            selector: ""
        }) : this.fixTitle()
    }, n.prototype.getDefaults = function () {
        return n.DEFAULTS
    }, n.prototype.getOptions = function (e) {
        return e = t.extend({}, this.getDefaults(), this.$element.data(), e), e.delay && "number" == typeof e.delay && (e.delay = {
            show: e.delay,
            hide: e.delay
        }), e
    }, n.prototype.getDelegateOptions = function () {
        var e = {},
            n = this.getDefaults();
        return this._options && t.each(this._options, function (t, i) {
            n[t] != i && (e[t] = i)
        }), e
    }, n.prototype.enter = function (e) {
        var n = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
        return n || (n = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, n)), e instanceof t.Event && (n.inState["focusin" == e.type ? "focus" : "hover"] = !0), n.tip().hasClass("in") || "in" == n.hoverState ? void(n.hoverState = "in") : (clearTimeout(n.timeout), n.hoverState = "in", n.options.delay && n.options.delay.show ? void(n.timeout = setTimeout(function () {
            "in" == n.hoverState && n.show()
        }, n.options.delay.show)) : n.show())
    }, n.prototype.isInStateTrue = function () {
        for (var t in this.inState)
            if (this.inState[t]) return !0;
        return !1
    }, n.prototype.leave = function (e) {
        var n = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
        return n || (n = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, n)), e instanceof t.Event && (n.inState["focusout" == e.type ? "focus" : "hover"] = !1), n.isInStateTrue() ? void 0 : (clearTimeout(n.timeout), n.hoverState = "out", n.options.delay && n.options.delay.hide ? void(n.timeout = setTimeout(function () {
            "out" == n.hoverState && n.hide()
        }, n.options.delay.hide)) : n.hide())
    }, n.prototype.show = function () {
        var e = t.Event("show.bs." + this.type);
        if (this.hasContent() && this.enabled) {
            this.$element.trigger(e);
            var i = t.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
            if (e.isDefaultPrevented() || !i) return;
            var s = this,
                o = this.tip(),
                r = this.getUID(this.type);
            this.setContent(), o.attr("id", r), this.$element.attr("aria-describedby", r), this.options.animation && o.addClass("fade");
            var a = "function" == typeof this.options.placement ? this.options.placement.call(this, o[0], this.$element[0]) : this.options.placement,
                l = /\s?auto?\s?/i,
                u = l.test(a);
            u && (a = a.replace(l, "") || "top"), o.detach().css({
                top: 0,
                left: 0,
                display: "block"
            }).addClass(a).data("bs." + this.type, this), this.options.container ? o.appendTo(this.options.container) : o.insertAfter(this.$element), this.$element.trigger("inserted.bs." + this.type);
            var c = this.getPosition(),
                h = o[0].offsetWidth,
                d = o[0].offsetHeight;
            if (u) {
                var f = a,
                    p = this.getPosition(this.$viewport);
                a = "bottom" == a && c.bottom + d > p.bottom ? "top" : "top" == a && c.top - d < p.top ? "bottom" : "right" == a && c.right + h > p.width ? "left" : "left" == a && c.left - h < p.left ? "right" : a, o.removeClass(f).addClass(a)
            }
            var g = this.getCalculatedOffset(a, c, h, d);
            this.applyPlacement(g, a);
            var m = function () {
                var t = s.hoverState;
                s.$element.trigger("shown.bs." + s.type), s.hoverState = null, "out" == t && s.leave(s)
            };
            t.support.transition && this.$tip.hasClass("fade") ? o.one("bsTransitionEnd", m).emulateTransitionEnd(n.TRANSITION_DURATION) : m()
        }
    }, n.prototype.applyPlacement = function (e, n) {
        var i = this.tip(),
            s = i[0].offsetWidth,
            o = i[0].offsetHeight,
            r = parseInt(i.css("margin-top"), 10),
            a = parseInt(i.css("margin-left"), 10);
        isNaN(r) && (r = 0), isNaN(a) && (a = 0), e.top += r, e.left += a, t.offset.setOffset(i[0], t.extend({
            using: function (t) {
                i.css({
                    top: Math.round(t.top),
                    left: Math.round(t.left)
                })
            }
        }, e), 0), i.addClass("in");
        var l = i[0].offsetWidth,
            u = i[0].offsetHeight;
        "top" == n && u != o && (e.top = e.top + o - u);
        var c = this.getViewportAdjustedDelta(n, e, l, u);
        c.left ? e.left += c.left : e.top += c.top;
        var h = /top|bottom/.test(n),
            d = h ? 2 * c.left - s + l : 2 * c.top - o + u,
            f = h ? "offsetWidth" : "offsetHeight";
        i.offset(e), this.replaceArrow(d, i[0][f], h)
    }, n.prototype.replaceArrow = function (t, e, n) {
        this.arrow().css(n ? "left" : "top", 50 * (1 - t / e) + "%").css(n ? "top" : "left", "")
    }, n.prototype.setContent = function () {
        var t = this.tip(),
            e = this.getTitle();
        t.find(".tooltip-inner")[this.options.html ? "html" : "text"](e), t.removeClass("fade in top bottom left right")
    }, n.prototype.hide = function (e) {
        function i() {
            "in" != s.hoverState && o.detach(), s.$element.removeAttr("aria-describedby").trigger("hidden.bs." + s.type), e && e()
        }
        var s = this,
            o = t(this.$tip),
            r = t.Event("hide.bs." + this.type);
        return this.$element.trigger(r), r.isDefaultPrevented() ? void 0 : (o.removeClass("in"), t.support.transition && o.hasClass("fade") ? o.one("bsTransitionEnd", i).emulateTransitionEnd(n.TRANSITION_DURATION) : i(), this.hoverState = null, this)
    }, n.prototype.fixTitle = function () {
        var t = this.$element;
        (t.attr("title") || "string" != typeof t.attr("data-original-title")) && t.attr("data-original-title", t.attr("title") || "").attr("title", "")
    }, n.prototype.hasContent = function () {
        return this.getTitle()
    }, n.prototype.getPosition = function (e) {
        e = e || this.$element;
        var n = e[0],
            i = "BODY" == n.tagName,
            s = n.getBoundingClientRect();
        null == s.width && (s = t.extend({}, s, {
            width: s.right - s.left,
            height: s.bottom - s.top
        }));
        var o = i ? {
                top: 0,
                left: 0
            } : e.offset(),
            r = {
                scroll: i ? document.documentElement.scrollTop || document.body.scrollTop : e.scrollTop()
            },
            a = i ? {
                width: t(window).width(),
                height: t(window).height()
            } : null;
        return t.extend({}, s, r, a, o)
    }, n.prototype.getCalculatedOffset = function (t, e, n, i) {
        return "bottom" == t ? {
            top: e.top + e.height,
            left: e.left + e.width / 2 - n / 2
        } : "top" == t ? {
            top: e.top - i,
            left: e.left + e.width / 2 - n / 2
        } : "left" == t ? {
            top: e.top + e.height / 2 - i / 2,
            left: e.left - n
        } : {
            top: e.top + e.height / 2 - i / 2,
            left: e.left + e.width
        }
    }, n.prototype.getViewportAdjustedDelta = function (t, e, n, i) {
        var s = {
            top: 0,
            left: 0
        };
        if (!this.$viewport) return s;
        var o = this.options.viewport && this.options.viewport.padding || 0,
            r = this.getPosition(this.$viewport);
        if (/right|left/.test(t)) {
            var a = e.top - o - r.scroll,
                l = e.top + o - r.scroll + i;
            a < r.top ? s.top = r.top - a : l > r.top + r.height && (s.top = r.top + r.height - l)
        } else {
            var u = e.left - o,
                c = e.left + o + n;
            u < r.left ? s.left = r.left - u : c > r.right && (s.left = r.left + r.width - c)
        }
        return s
    }, n.prototype.getTitle = function () {
        var t, e = this.$element,
            n = this.options;
        return t = e.attr("data-original-title") || ("function" == typeof n.title ? n.title.call(e[0]) : n.title)
    }, n.prototype.getUID = function (t) {
        do t += ~~(1e6 * Math.random()); while (document.getElementById(t));
        return t
    }, n.prototype.tip = function () {
        if (!this.$tip && (this.$tip = t(this.options.template), 1 != this.$tip.length)) throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!");
        return this.$tip
    }, n.prototype.arrow = function () {
        return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
    }, n.prototype.enable = function () {
        this.enabled = !0
    }, n.prototype.disable = function () {
        this.enabled = !1
    }, n.prototype.toggleEnabled = function () {
        this.enabled = !this.enabled
    }, n.prototype.toggle = function (e) {
        var n = this;
        e && (n = t(e.currentTarget).data("bs." + this.type), n || (n = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, n))), e ? (n.inState.click = !n.inState.click, n.isInStateTrue() ? n.enter(n) : n.leave(n)) : n.tip().hasClass("in") ? n.leave(n) : n.enter(n)
    }, n.prototype.destroy = function () {
        var t = this;
        clearTimeout(this.timeout), this.hide(function () {
            t.$element.off("." + t.type).removeData("bs." + t.type), t.$tip && t.$tip.detach(), t.$tip = null, t.$arrow = null, t.$viewport = null
        })
    };
    var i = t.fn.tooltip;
    t.fn.tooltip = e, t.fn.tooltip.Constructor = n, t.fn.tooltip.noConflict = function () {
        return t.fn.tooltip = i, this
    }
}(jQuery), + function (t) {
    "use strict";

    function e(e) {
        return this.each(function () {
            var i = t(this),
                s = i.data("bs.popover"),
                o = "object" == typeof e && e;
            (s || !/destroy|hide/.test(e)) && (s || i.data("bs.popover", s = new n(this, o)), "string" == typeof e && s[e]())
        })
    }
    var n = function (t, e) {
        this.init("popover", t, e)
    };
    if (!t.fn.tooltip) throw new Error("Popover requires tooltip.js");
    n.VERSION = "3.3.5", n.DEFAULTS = t.extend({}, t.fn.tooltip.Constructor.DEFAULTS, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
    }), n.prototype = t.extend({}, t.fn.tooltip.Constructor.prototype), n.prototype.constructor = n, n.prototype.getDefaults = function () {
        return n.DEFAULTS
    }, n.prototype.setContent = function () {
        var t = this.tip(),
            e = this.getTitle(),
            n = this.getContent();
        t.find(".popover-title")[this.options.html ? "html" : "text"](e), t.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof n ? "html" : "append" : "text"](n), t.removeClass("fade top bottom left right in"), t.find(".popover-title").html() || t.find(".popover-title").hide()
    }, n.prototype.hasContent = function () {
        return this.getTitle() || this.getContent()
    }, n.prototype.getContent = function () {
        var t = this.$element,
            e = this.options;
        return t.attr("data-content") || ("function" == typeof e.content ? e.content.call(t[0]) : e.content)
    }, n.prototype.arrow = function () {
        return this.$arrow = this.$arrow || this.tip().find(".arrow")
    };
    var i = t.fn.popover;
    t.fn.popover = e, t.fn.popover.Constructor = n, t.fn.popover.noConflict = function () {
        return t.fn.popover = i, this
    }
}(jQuery),
function (t) {
    var e = "0.9.3",
        n = {
            isMsie: function () {
                var t = /(msie) ([\w.]+)/i.exec(navigator.userAgent);
                return t ? parseInt(t[2], 10) : !1
            },
            isBlankString: function (t) {
                return !t || /^\s*$/.test(t)
            },
            escapeRegExChars: function (t) {
                return t.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&")
            },
            isString: function (t) {
                return "string" == typeof t
            },
            isNumber: function (t) {
                return "number" == typeof t
            },
            isArray: t.isArray,
            isFunction: t.isFunction,
            isObject: t.isPlainObject,
            isUndefined: function (t) {
                return "undefined" == typeof t
            },
            bind: t.proxy,
            bindAll: function (e) {
                var n;
                for (var i in e) t.isFunction(n = e[i]) && (e[i] = t.proxy(n, e))
            },
            indexOf: function (t, e) {
                for (var n = 0; n < t.length; n++)
                    if (t[n] === e) return n;
                return -1
            },
            each: t.each,
            map: t.map,
            filter: t.grep,
            every: function (e, n) {
                var i = !0;
                return e ? (t.each(e, function (t, s) {
                    return (i = n.call(null, s, t, e)) ? void 0 : !1
                }), !!i) : i
            },
            some: function (e, n) {
                var i = !1;
                return e ? (t.each(e, function (t, s) {
                    return (i = n.call(null, s, t, e)) ? !1 : void 0
                }), !!i) : i
            },
            mixin: t.extend,
            getUniqueId: function () {
                var t = 0;
                return function () {
                    return t++
                }
            }(),
            defer: function (t) {
                setTimeout(t, 0)
            },
            debounce: function (t, e, n) {
                var i, s;
                return function () {
                    var o, r, a = this,
                        l = arguments;
                    return o = function () {
                        i = null, n || (s = t.apply(a, l))
                    }, r = n && !i, clearTimeout(i), i = setTimeout(o, e), r && (s = t.apply(a, l)), s
                }
            },
            throttle: function (t, e) {
                var n, i, s, o, r, a;
                return r = 0, a = function () {
                        r = new Date, s = null, o = t.apply(n, i)
                    },
                    function () {
                        var l = new Date,
                            u = e - (l - r);
                        return n = this, i = arguments, 0 >= u ? (clearTimeout(s), s = null, r = l, o = t.apply(n, i)) : s || (s = setTimeout(a, u)), o
                    }
            },
            tokenizeQuery: function (e) {
                return t.trim(e).toLowerCase().split(/[\s]+/)
            },
            tokenizeText: function (e) {
                return t.trim(e).toLowerCase().split(/[\s\-_]+/)
            },
            getProtocol: function () {
                return location.protocol
            },
            noop: function () {}
        },
        i = function () {
            var t = /\s+/;
            return {
                on: function (e, n) {
                    var i;
                    if (!n) return this;
                    for (this._callbacks = this._callbacks || {}, e = e.split(t); i = e.shift();) this._callbacks[i] = this._callbacks[i] || [], this._callbacks[i].push(n);
                    return this
                },
                trigger: function (e, n) {
                    var i, s;
                    if (!this._callbacks) return this;
                    for (e = e.split(t); i = e.shift();)
                        if (s = this._callbacks[i])
                            for (var o = 0; o < s.length; o += 1) s[o].call(this, {
                                type: i,
                                data: n
                            });
                    return this
                }
            }
        }(),
        s = function () {
            function e(e) {
                e && e.el || t.error("EventBus initialized without el"), this.$el = t(e.el)
            }
            var i = "typeahead:";
            return n.mixin(e.prototype, {
                trigger: function (t) {
                    var e = [].slice.call(arguments, 1);
                    this.$el.trigger(i + t, e)
                }
            }), e
        }(),
        o = function () {
            function t(t) {
                this.prefix = ["__", t, "__"].join(""), this.ttlKey = "__ttl__", this.keyMatcher = new RegExp("^" + this.prefix)
            }

            function e() {
                return (new Date).getTime()
            }

            function i(t) {
                return JSON.stringify(n.isUndefined(t) ? null : t)
            }

            function s(t) {
                return JSON.parse(t)
            }
            var o, r;
            try {
                o = window.localStorage, o.setItem("~~~", "!"), o.removeItem("~~~")
            } catch (a) {
                o = null
            }
            return r = o && window.JSON ? {
                _prefix: function (t) {
                    return this.prefix + t
                },
                _ttlKey: function (t) {
                    return this._prefix(t) + this.ttlKey
                },
                get: function (t) {
                    return this.isExpired(t) && this.remove(t), s(o.getItem(this._prefix(t)))
                },
                set: function (t, s, r) {
                    return n.isNumber(r) ? o.setItem(this._ttlKey(t), i(e() + r)) : o.removeItem(this._ttlKey(t)), o.setItem(this._prefix(t), i(s))
                },
                remove: function (t) {
                    return o.removeItem(this._ttlKey(t)), o.removeItem(this._prefix(t)), this
                },
                clear: function () {
                    var t, e, n = [],
                        i = o.length;
                    for (t = 0; i > t; t++)(e = o.key(t)).match(this.keyMatcher) && n.push(e.replace(this.keyMatcher, ""));
                    for (t = n.length; t--;) this.remove(n[t]);
                    return this
                },
                isExpired: function (t) {
                    var i = s(o.getItem(this._ttlKey(t)));
                    return n.isNumber(i) && e() > i ? !0 : !1
                }
            } : {
                get: n.noop,
                set: n.noop,
                remove: n.noop,
                clear: n.noop,
                isExpired: n.noop
            }, n.mixin(t.prototype, r), t
        }(),
        r = function () {
            function t(t) {
                n.bindAll(this), t = t || {}, this.sizeLimit = t.sizeLimit || 10, this.cache = {}, this.cachedKeysByAge = []
            }
            return n.mixin(t.prototype, {
                get: function (t) {
                    return this.cache[t]
                },
                set: function (t, e) {
                    var n;
                    this.cachedKeysByAge.length === this.sizeLimit && (n = this.cachedKeysByAge.shift(), delete this.cache[n]), this.cache[t] = e, this.cachedKeysByAge.push(t)
                }
            }), t
        }(),
        a = function () {
            function e(t) {
                n.bindAll(this), t = n.isString(t) ? {
                    url: t
                } : t, l = l || new r, a = n.isNumber(t.maxParallelRequests) ? t.maxParallelRequests : a || 6, this.url = t.url, this.wildcard = t.wildcard || "%QUERY", this.filter = t.filter, this.replace = t.replace, this.ajaxSettings = {
                    type: "get",
                    cache: t.cache,
                    timeout: t.timeout,
                    dataType: t.dataType || "json",
                    beforeSend: t.beforeSend
                }, this._get = (/^throttle$/i.test(t.rateLimitFn) ? n.throttle : n.debounce)(this._get, t.rateLimitWait || 300)
            }

            function i() {
                u++
            }

            function s() {
                u--
            }

            function o() {
                return a > u
            }
            var a, l, u = 0,
                c = {};
            return n.mixin(e.prototype, {
                _get: function (t, e) {
                    function n(n) {
                        var s = i.filter ? i.filter(n) : n;
                        e && e(s), l.set(t, n)
                    }
                    var i = this;
                    o() ? this._sendRequest(t).done(n) : this.onDeckRequestArgs = [].slice.call(arguments, 0)
                },
                _sendRequest: function (e) {
                    function n() {
                        s(), c[e] = null, o.onDeckRequestArgs && (o._get.apply(o, o.onDeckRequestArgs), o.onDeckRequestArgs = null);
                    }
                    var o = this,
                        r = c[e];
                    return r || (i(), r = c[e] = t.ajax(e, this.ajaxSettings).always(n)), r
                },
                get: function (t, e) {
                    var i, s, o = this,
                        r = encodeURIComponent(t || "");
                    return e = e || n.noop, i = this.replace ? this.replace(this.url, r) : this.url.replace(this.wildcard, r), (s = l.get(i)) ? n.defer(function () {
                        e(o.filter ? o.filter(s) : s)
                    }) : this._get(i, e), !!s
                }
            }), e
        }(),
        l = function () {
            function i(e) {
                n.bindAll(this), n.isString(e.template) && !e.engine && t.error("no template engine specified"), e.local || e.prefetch || e.remote || t.error("one of local, prefetch, or remote is required"), this.name = e.name || n.getUniqueId(), this.limit = e.limit || 5, this.minLength = e.minLength || 1, this.header = e.header, this.footer = e.footer, this.valueKey = e.valueKey || "value", this.template = s(e.template, e.engine, this.valueKey), this.local = e.local, this.prefetch = e.prefetch, this.remote = e.remote, this.itemHash = {}, this.adjacencyList = {}, this.storage = e.name ? new o(e.name) : null
            }

            function s(t, e, i) {
                var s, o;
                return n.isFunction(t) ? s = t : n.isString(t) ? (o = e.compile(t), s = n.bind(o.render, o)) : s = function (t) {
                    return "<p>" + t[i] + "</p>"
                }, s
            }
            var r = {
                thumbprint: "thumbprint",
                protocol: "protocol",
                itemHash: "itemHash",
                adjacencyList: "adjacencyList"
            };
            return n.mixin(i.prototype, {
                _processLocalData: function (t) {
                    this._mergeProcessedData(this._processData(t))
                },
                _loadPrefetchData: function (i) {
                    function s(t) {
                        var e = i.filter ? i.filter(t) : t,
                            s = d._processData(e),
                            o = s.itemHash,
                            a = s.adjacencyList;
                        d.storage && (d.storage.set(r.itemHash, o, i.ttl), d.storage.set(r.adjacencyList, a, i.ttl), d.storage.set(r.thumbprint, f, i.ttl), d.storage.set(r.protocol, n.getProtocol(), i.ttl)), d._mergeProcessedData(s)
                    }
                    var o, a, l, u, c, h, d = this,
                        f = e + (i.thumbprint || "");
                    return this.storage && (o = this.storage.get(r.thumbprint), a = this.storage.get(r.protocol), l = this.storage.get(r.itemHash), u = this.storage.get(r.adjacencyList)), c = o !== f || a !== n.getProtocol(), i = n.isString(i) ? {
                        url: i
                    } : i, i.ttl = n.isNumber(i.ttl) ? i.ttl : 864e5, l && u && !c ? (this._mergeProcessedData({
                        itemHash: l,
                        adjacencyList: u
                    }), h = t.Deferred().resolve()) : h = t.getJSON(i.url).done(s), h
                },
                _transformDatum: function (t) {
                    var e = n.isString(t) ? t : t[this.valueKey],
                        i = t.tokens || n.tokenizeText(e),
                        s = {
                            value: e,
                            tokens: i
                        };
                    return n.isString(t) ? (s.datum = {}, s.datum[this.valueKey] = t) : s.datum = t, s.tokens = n.filter(s.tokens, function (t) {
                        return !n.isBlankString(t)
                    }), s.tokens = n.map(s.tokens, function (t) {
                        return t.toLowerCase()
                    }), s
                },
                _processData: function (t) {
                    var e = this,
                        i = {},
                        s = {};
                    return n.each(t, function (t, o) {
                        var r = e._transformDatum(o),
                            a = n.getUniqueId(r.value);
                        i[a] = r, n.each(r.tokens, function (t, e) {
                            var i = e.charAt(0),
                                o = s[i] || (s[i] = [a]);
                            !~n.indexOf(o, a) && o.push(a)
                        })
                    }), {
                        itemHash: i,
                        adjacencyList: s
                    }
                },
                _mergeProcessedData: function (t) {
                    var e = this;
                    n.mixin(this.itemHash, t.itemHash), n.each(t.adjacencyList, function (t, n) {
                        var i = e.adjacencyList[t];
                        e.adjacencyList[t] = i ? i.concat(n) : n
                    })
                },
                _getLocalSuggestions: function (t) {
                    var e, i = this,
                        s = [],
                        o = [],
                        r = [];
                    return n.each(t, function (t, e) {
                        var i = e.charAt(0);
                        !~n.indexOf(s, i) && s.push(i)
                    }), n.each(s, function (t, n) {
                        var s = i.adjacencyList[n];
                        return s ? (o.push(s), void((!e || s.length < e.length) && (e = s))) : !1
                    }), o.length < s.length ? [] : (n.each(e, function (e, s) {
                        var a, l, u = i.itemHash[s];
                        a = n.every(o, function (t) {
                            return ~n.indexOf(t, s)
                        }), l = a && n.every(t, function (t) {
                            return n.some(u.tokens, function (e) {
                                return 0 === e.indexOf(t)
                            })
                        }), l && r.push(u)
                    }), r)
                },
                initialize: function () {
                    var e;
                    return this.local && this._processLocalData(this.local), this.transport = this.remote ? new a(this.remote) : null, e = this.prefetch ? this._loadPrefetchData(this.prefetch) : t.Deferred().resolve(), this.local = this.prefetch = this.remote = null, this.initialize = function () {
                        return e
                    }, e
                },
                getSuggestions: function (t, e) {
                    function i(t) {
                        o = o.slice(0), n.each(t, function (t, e) {
                            var i, s = r._transformDatum(e);
                            return i = n.some(o, function (t) {
                                return s.value === t.value
                            }), !i && o.push(s), o.length < r.limit
                        }), e && e(o)
                    }
                    var s, o, r = this,
                        a = !1;
                    t.length < this.minLength || (s = n.tokenizeQuery(t), o = this._getLocalSuggestions(s).slice(0, this.limit), o.length < this.limit && this.transport && (a = this.transport.get(t, i)), !a && e && e(o))
                }
            }), i
        }(),
        u = function () {
            function e(e) {
                var i = this;
                n.bindAll(this), this.specialKeyCodeMap = {
                    9: "tab",
                    27: "esc",
                    37: "left",
                    39: "right",
                    13: "enter",
                    38: "up",
                    40: "down"
                }, this.$hint = t(e.hint), this.$input = t(e.input).on("blur.tt", this._handleBlur).on("focus.tt", this._handleFocus).on("keydown.tt", this._handleSpecialKeyEvent), n.isMsie() ? this.$input.on("keydown.tt keypress.tt cut.tt paste.tt", function (t) {
                    i.specialKeyCodeMap[t.which || t.keyCode] || n.defer(i._compareQueryToInputValue)
                }) : this.$input.on("input.tt", this._compareQueryToInputValue), this.query = this.$input.val(), this.$overflowHelper = s(this.$input)
            }

            function s(e) {
                return t("<span></span>").css({
                    position: "absolute",
                    left: "-9999px",
                    visibility: "hidden",
                    whiteSpace: "nowrap",
                    fontFamily: e.css("font-family"),
                    fontSize: e.css("font-size"),
                    fontStyle: e.css("font-style"),
                    fontVariant: e.css("font-variant"),
                    fontWeight: e.css("font-weight"),
                    wordSpacing: e.css("word-spacing"),
                    letterSpacing: e.css("letter-spacing"),
                    textIndent: e.css("text-indent"),
                    textRendering: e.css("text-rendering"),
                    textTransform: e.css("text-transform")
                }).insertAfter(e)
            }

            function o(t, e) {
                return t = (t || "").replace(/^\s*/g, "").replace(/\s{2,}/g, " "), e = (e || "").replace(/^\s*/g, "").replace(/\s{2,}/g, " "), t === e
            }
            return n.mixin(e.prototype, i, {
                _handleFocus: function () {
                    this.trigger("focused")
                },
                _handleBlur: function () {
                    this.trigger("blured")
                },
                _handleSpecialKeyEvent: function (t) {
                    var e = this.specialKeyCodeMap[t.which || t.keyCode];
                    e && this.trigger(e + "Keyed", t)
                },
                _compareQueryToInputValue: function () {
                    var t = this.getInputValue(),
                        e = o(this.query, t),
                        n = e ? this.query.length !== t.length : !1;
                    n ? this.trigger("whitespaceChanged", {
                        value: this.query
                    }) : e || this.trigger("queryChanged", {
                        value: this.query = t
                    })
                },
                destroy: function () {
                    this.$hint.off(".tt"), this.$input.off(".tt"), this.$hint = this.$input = this.$overflowHelper = null
                },
                focus: function () {
                    this.$input.focus()
                },
                blur: function () {
                    this.$input.blur()
                },
                getQuery: function () {
                    return this.query
                },
                setQuery: function (t) {
                    this.query = t
                },
                getInputValue: function () {
                    return this.$input.val()
                },
                setInputValue: function (t, e) {
                    this.$input.val(t), !e && this._compareQueryToInputValue()
                },
                getHintValue: function () {
                    return this.$hint.val()
                },
                setHintValue: function (t) {
                    this.$hint.val(t)
                },
                getLanguageDirection: function () {
                    return (this.$input.css("direction") || "ltr").toLowerCase()
                },
                isOverflow: function () {
                    return this.$overflowHelper.text(this.getInputValue()), this.$overflowHelper.width() > this.$input.width()
                },
                isCursorAtEnd: function () {
                    var t, e = this.$input.val().length,
                        i = this.$input[0].selectionStart;
                    return n.isNumber(i) ? i === e : document.selection ? (t = document.selection.createRange(), t.moveStart("character", -e), e === t.text.length) : !0
                }
            }), e
        }(),
        c = function () {
            function e(e) {
                n.bindAll(this), this.isOpen = !1, this.isEmpty = !0, this.isMouseOverDropdown = !1, this.$menu = t(e.menu).on("mouseenter.tt", this._handleMouseenter).on("mouseleave.tt", this._handleMouseleave).on("click.tt", ".tt-suggestion", this._handleSelection).on("mouseover.tt", ".tt-suggestion", this._handleMouseover)
            }

            function s(t) {
                return t.data("suggestion")
            }
            var o = {
                    suggestionsList: '<span class="tt-suggestions"></span>'
                },
                r = {
                    suggestionsList: {
                        display: "block"
                    },
                    suggestion: {
                        whiteSpace: "nowrap",
                        cursor: "pointer"
                    },
                    suggestionChild: {
                        whiteSpace: "normal"
                    }
                };
            return n.mixin(e.prototype, i, {
                _handleMouseenter: function () {
                    this.isMouseOverDropdown = !0
                },
                _handleMouseleave: function () {
                    this.isMouseOverDropdown = !1
                },
                _handleMouseover: function (e) {
                    var n = t(e.currentTarget);
                    this._getSuggestions().removeClass("tt-is-under-cursor"), n.addClass("tt-is-under-cursor")
                },
                _handleSelection: function (e) {
                    var n = t(e.currentTarget);
                    this.trigger("suggestionSelected", s(n))
                },
                _show: function () {
                    this.$menu.css("display", "block")
                },
                _hide: function () {
                    this.$menu.hide()
                },
                _moveCursor: function (t) {
                    var e, n, i, o;
                    if (this.isVisible()) {
                        if (e = this._getSuggestions(), n = e.filter(".tt-is-under-cursor"), n.removeClass("tt-is-under-cursor"), i = e.index(n) + t, i = (i + 1) % (e.length + 1) - 1, -1 === i) return void this.trigger("cursorRemoved"); - 1 > i && (i = e.length - 1), o = e.eq(i).addClass("tt-is-under-cursor"), this._ensureVisibility(o), this.trigger("cursorMoved", s(o))
                    }
                },
                _getSuggestions: function () {
                    return this.$menu.find(".tt-suggestions > .tt-suggestion")
                },
                _ensureVisibility: function (t) {
                    var e = this.$menu.height() + parseInt(this.$menu.css("paddingTop"), 10) + parseInt(this.$menu.css("paddingBottom"), 10),
                        n = this.$menu.scrollTop(),
                        i = t.position().top,
                        s = i + t.outerHeight(!0);
                    0 > i ? this.$menu.scrollTop(n + i) : s > e && this.$menu.scrollTop(n + (s - e))
                },
                destroy: function () {
                    this.$menu.off(".tt"), this.$menu = null
                },
                isVisible: function () {
                    return this.isOpen && !this.isEmpty
                },
                closeUnlessMouseIsOverDropdown: function () {
                    this.isMouseOverDropdown || this.close()
                },
                close: function () {
                    this.isOpen && (this.isOpen = !1, this.isMouseOverDropdown = !1, this._hide(), this.$menu.find(".tt-suggestions > .tt-suggestion").removeClass("tt-is-under-cursor"), this.trigger("closed"))
                },
                open: function () {
                    this.isOpen || (this.isOpen = !0, !this.isEmpty && this._show(), this.trigger("opened"))
                },
                setLanguageDirection: function (t) {
                    var e = {
                            left: "0",
                            right: "auto"
                        },
                        n = {
                            left: "auto",
                            right: " 0"
                        };
                    "ltr" === t ? this.$menu.css(e) : this.$menu.css(n)
                },
                moveCursorUp: function () {
                    this._moveCursor(-1)
                },
                moveCursorDown: function () {
                    this._moveCursor(1)
                },
                getSuggestionUnderCursor: function () {
                    var t = this._getSuggestions().filter(".tt-is-under-cursor").first();
                    return t.length > 0 ? s(t) : null
                },
                getFirstSuggestion: function () {
                    var t = this._getSuggestions().first();
                    return t.length > 0 ? s(t) : null
                },
                renderSuggestions: function (e, i) {
                    var s, a, l, u, c, h = "tt-dataset-" + e.name,
                        d = '<div class="tt-suggestion">%body</div>',
                        f = this.$menu.find("." + h);
                    0 === f.length && (a = t(o.suggestionsList).css(r.suggestionsList), f = t("<div></div>").addClass(h).append(e.header).append(a).append(e.footer).appendTo(this.$menu)), i.length > 0 ? (this.isEmpty = !1, this.isOpen && this._show(), l = document.createElement("div"), u = document.createDocumentFragment(), n.each(i, function (n, i) {
                        i.dataset = e.name, s = e.template(i.datum), l.innerHTML = d.replace("%body", s), c = t(l.firstChild).css(r.suggestion).data("suggestion", i), c.children().each(function () {
                            t(this).css(r.suggestionChild)
                        }), u.appendChild(c[0])
                    }), f.show().find(".tt-suggestions").html(u)) : this.clearSuggestions(e.name), this.trigger("suggestionsRendered")
                },
                clearSuggestions: function (t) {
                    var e = t ? this.$menu.find(".tt-dataset-" + t) : this.$menu.find('[class^="tt-dataset-"]'),
                        n = e.find(".tt-suggestions");
                    e.hide(), n.empty(), 0 === this._getSuggestions().length && (this.isEmpty = !0, this._hide())
                }
            }), e
        }(),
        h = function () {
            function e(t) {
                var e, i, o;
                n.bindAll(this), this.$node = s(t.input), this.datasets = t.datasets, this.dir = null, this.eventBus = t.eventBus, e = this.$node.find(".tt-dropdown-menu"), i = this.$node.find(".tt-query"), o = this.$node.find(".tt-hint"), this.dropdownView = new c({
                    menu: e
                }).on("suggestionSelected", this._handleSelection).on("cursorMoved", this._clearHint).on("cursorMoved", this._setInputValueToSuggestionUnderCursor).on("cursorRemoved", this._setInputValueToQuery).on("cursorRemoved", this._updateHint).on("suggestionsRendered", this._updateHint).on("opened", this._updateHint).on("closed", this._clearHint).on("opened closed", this._propagateEvent), this.inputView = new u({
                    input: i,
                    hint: o
                }).on("focused", this._openDropdown).on("blured", this._closeDropdown).on("blured", this._setInputValueToQuery).on("enterKeyed tabKeyed", this._handleSelection).on("queryChanged", this._clearHint).on("queryChanged", this._clearSuggestions).on("queryChanged", this._getSuggestions).on("whitespaceChanged", this._updateHint).on("queryChanged whitespaceChanged", this._openDropdown).on("queryChanged whitespaceChanged", this._setLanguageDirection).on("escKeyed", this._closeDropdown).on("escKeyed", this._setInputValueToQuery).on("tabKeyed upKeyed downKeyed", this._managePreventDefault).on("upKeyed downKeyed", this._moveDropdownCursor).on("upKeyed downKeyed", this._openDropdown).on("tabKeyed leftKeyed rightKeyed", "off")
            }

            function s(e) {
                var n = t(r.wrapper),
                    i = t(r.dropdown),
                    s = t(e),
                    o = t(r.hint);
                n = n.css(a.wrapper), i = i.css(a.dropdown), o.css(a.hint).css({
                    backgroundAttachment: s.css("background-attachment"),
                    backgroundClip: s.css("background-clip"),
                    backgroundColor: s.css("background-color"),
                    backgroundImage: s.css("background-image"),
                    backgroundOrigin: s.css("background-origin"),
                    backgroundPosition: s.css("background-position"),
                    backgroundRepeat: s.css("background-repeat"),
                    backgroundSize: s.css("background-size")
                }), s.data("ttAttrs", {
                    dir: s.attr("dir"),
                    autocomplete: "off",
                    spellcheck: s.attr("spellcheck"),
                    style: s.attr("style")
                }), s.addClass("tt-query").attr({
                    autocomplete: "off",
                    spellcheck: !1
                }).css(a.query);
                try {
                    !s.attr("dir") && s.attr("dir", "auto")
                } catch (l) {}
                return s.wrap(n).parent().prepend(o).append(i)
            }

            function o(t) {
                var e = t.find(".tt-query");
                n.each(e.data("ttAttrs"), function (t, i) {
                    n.isUndefined(i) ? e.removeAttr(t) : e.attr(t, i)
                }), e.detach().removeData("ttAttrs").removeClass("tt-query").insertAfter(t), t.remove()
            }
            var r = {
                    wrapper: '<span class="twitter-typeahead"></span>',
                    hint: '<input class="tt-hint" type="text" autocomplete="off" spellcheck="off" disabled>',
                    dropdown: '<span class="tt-dropdown-menu"></span>'
                },
                a = {
                    wrapper: {
                        position: "relative",
                        display: "inline-block"
                    },
                    hint: {
                        position: "absolute",
                        top: "0",
                        left: "0",
                        borderColor: "transparent",
                        boxShadow: "none"
                    },
                    query: {
                        position: "relative",
                        verticalAlign: "top",
                        backgroundColor: "transparent"
                    },
                    dropdown: {
                        position: "absolute",
                        top: "100%",
                        left: "0",
                        zIndex: "100",
                        display: "none"
                    }
                };
            return n.isMsie() && n.mixin(a.query, {
                backgroundImage: "url(data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)"
            }), n.isMsie() && n.isMsie() <= 7 && (n.mixin(a.wrapper, {
                display: "inline",
                zoom: "1"
            }), n.mixin(a.query, {
                marginTop: "-1px"
            })), n.mixin(e.prototype, i, {
                _managePreventDefault: function (t) {
                    var e, n, i = t.data,
                        s = !1;
                    switch (t.type) {
                        case "tabKeyed":
                            e = this.inputView.getHintValue(), n = this.inputView.getInputValue(), s = e && e !== n;
                            break;
                        case "upKeyed":
                        case "downKeyed":
                            s = !i.shiftKey && !i.ctrlKey && !i.metaKey
                    }
                    s && i.preventDefault()
                },
                _setLanguageDirection: function () {
                    var t = this.inputView.getLanguageDirection();
                    t !== this.dir && (this.dir = t, this.$node.css("direction", t), this.dropdownView.setLanguageDirection(t))
                },
                _updateHint: function () {
                    var t, e, i, s, o, r = this.dropdownView.getFirstSuggestion(),
                        a = r ? r.value : null,
                        l = this.dropdownView.isVisible(),
                        u = this.inputView.isOverflow();
                    a && l && !u && (t = this.inputView.getInputValue(), e = t.replace(/\s{2,}/g, " ").replace(/^\s+/g, ""), i = n.escapeRegExChars(e), s = new RegExp("^(?:" + i + ")(.*$)", "i"), o = s.exec(a), this.inputView.setHintValue(t + (o ? o[1] : "")))
                },
                _clearHint: function () {
                    this.inputView.setHintValue("")
                },
                _clearSuggestions: function () {
                    this.dropdownView.clearSuggestions()
                },
                _setInputValueToQuery: function () {
                    this.inputView.setInputValue(this.inputView.getQuery())
                },
                _setInputValueToSuggestionUnderCursor: function (t) {
                    var e = t.data;
                    this.inputView.setInputValue(e.value, !0)
                },
                _openDropdown: function () {
                    this.dropdownView.open()
                },
                _closeDropdown: function (t) {
                    this.dropdownView["blured" === t.type ? "closeUnlessMouseIsOverDropdown" : "close"]()
                },
                _moveDropdownCursor: function (t) {
                    var e = t.data;
                    e.shiftKey || e.ctrlKey || e.metaKey || this.dropdownView["upKeyed" === t.type ? "moveCursorUp" : "moveCursorDown"]()
                },
                _handleSelection: function (t) {
                    var e = "suggestionSelected" === t.type,
                        i = e ? t.data : this.dropdownView.getSuggestionUnderCursor();
                    i && (this.inputView.setInputValue(i.value), e ? this.inputView.focus() : t.data.preventDefault(), e && n.isMsie() ? n.defer(this.dropdownView.close) : this.dropdownView.close(), this.eventBus.trigger("selected", i.datum, i.dataset))
                },
                _getSuggestions: function () {
                    var t = this,
                        e = this.inputView.getQuery();
                    n.isBlankString(e) || n.each(this.datasets, function (n, i) {
                        i.getSuggestions(e, function (n) {
                            e === t.inputView.getQuery() && t.dropdownView.renderSuggestions(i, n)
                        })
                    })
                },
                _autocomplete: function (t) {
                    var e, n, i, s, o;
                    ("rightKeyed" !== t.type && "leftKeyed" !== t.type || (e = this.inputView.isCursorAtEnd(), n = "ltr" === this.inputView.getLanguageDirection() ? "leftKeyed" === t.type : "rightKeyed" === t.type, e && !n)) && (i = this.inputView.getQuery(), s = this.inputView.getHintValue(), "" !== s && i !== s && (o = this.dropdownView.getFirstSuggestion(), this.inputView.setInputValue(o.value), this.eventBus.trigger("autocompleted", o.datum, o.dataset)))
                },
                _propagateEvent: function (t) {
                    this.eventBus.trigger(t.type)
                },
                destroy: function () {
                    this.inputView.destroy(), this.dropdownView.destroy(), o(this.$node), this.$node = null
                },
                setQuery: function (t) {
                    this.inputView.setQuery(t), this.inputView.setInputValue(t), this._clearHint(), this._clearSuggestions(), this._getSuggestions()
                }
            }), e
        }();
    ! function () {
        var e, i = {},
            o = "ttView";
        e = {
            initialize: function (e) {
                function r() {
                    var e, i = t(this),
                        r = new s({
                            el: i
                        });
                    e = n.map(a, function (t) {
                        return t.initialize()
                    }), i.data(o, new h({
                        input: i,
                        eventBus: r = new s({
                            el: i
                        }),
                        datasets: a
                    })), t.when.apply(t, e).always(function () {
                        n.defer(function () {
                            r.trigger("initialized")
                        })
                    })
                }
                var a;
                return e = n.isArray(e) ? e : [e], 0 === e.length && t.error("no datasets provided"), a = n.map(e, function (t) {
                    var e = i[t.name] ? i[t.name] : new l(t);
                    return t.name && (i[t.name] = e), e
                }), this.each(r)
            },
            destroy: function () {
                function e() {
                    var e = t(this),
                        n = e.data(o);
                    n && (n.destroy(), e.removeData(o))
                }
                return this.each(e)
            },
            setQuery: function (e) {
                function n() {
                    var n = t(this).data(o);
                    n && n.setQuery(e)
                }
                return this.each(n)
            }
        }, jQuery.fn.typeahead = function (t) {
            return e[t] ? e[t].apply(this, [].slice.call(arguments, 1)) : e.initialize.apply(this, arguments)
        }
    }()
}(window.jQuery), window.Modernizr = function (t, e, n) {
        function i(t) {
            b.cssText = t
        }

        function s(t, e) {
            return i(k.join(t + ";") + (e || ""))
        }

        function o(t, e) {
            return typeof t === e
        }

        function r(t, e) {
            return !!~("" + t).indexOf(e)
        }

        function a(t, e) {
            for (var i in t) {
                var s = t[i];
                if (!r(s, "-") && b[s] !== n) return "pfx" == e ? s : !0
            }
            return !1
        }

        function l(t, e, i) {
            for (var s in t) {
                var r = e[t[s]];
                if (r !== n) return i === !1 ? t[s] : o(r, "function") ? r.bind(i || e) : r
            }
            return !1
        }

        function u(t, e, n) {
            var i = t.charAt(0).toUpperCase() + t.slice(1),
                s = (t + " " + C.join(i + " ") + i).split(" ");
            return o(e, "string") || o(e, "undefined") ? a(s, e) : (s = (t + " " + T.join(i + " ") + i).split(" "), l(s, e, n))
        }

        function c() {
            p.input = function (n) {
                for (var i = 0, s = n.length; s > i; i++) A[n[i]] = !!(n[i] in _);
                return A.list && (A.list = !(!e.createElement("datalist") || !t.HTMLDataListElement)), A
            }("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")), p.inputtypes = function (t) {
                for (var i, s, o, r = 0, a = t.length; a > r; r++) _.setAttribute("type", s = t[r]), i = "text" !== _.type, i && (_.value = w, _.style.cssText = "position:absolute;visibility:hidden;", /^range$/.test(s) && _.style.WebkitAppearance !== n ? (m.appendChild(_), o = e.defaultView, i = o.getComputedStyle && "textfield" !== o.getComputedStyle(_, null).WebkitAppearance && 0 !== _.offsetHeight, m.removeChild(_)) : /^(search|tel)$/.test(s) || (i = /^(url|email)$/.test(s) ? _.checkValidity && _.checkValidity() === !1 : _.value != w)), j[t[r]] = !!i;
                return j
            }("search tel url email datetime date month week time datetime-local number range color".split(" "))
        }
        var h, d, f = "2.6.2",
            p = {},
            g = !0,
            m = e.documentElement,
            v = "modernizr",
            y = e.createElement(v),
            b = y.style,
            _ = e.createElement("input"),
            w = ":)",
            x = {}.toString,
            k = " -webkit- -moz- -o- -ms- ".split(" "),
            S = "Webkit Moz O ms",
            C = S.split(" "),
            T = S.toLowerCase().split(" "),
            D = {
                svg: "http://www.w3.org/2000/svg"
            },
            E = {},
            j = {},
            A = {},
            $ = [],
            N = $.slice,
            M = function (t, n, i, s) {
                var o, r, a, l, u = e.createElement("div"),
                    c = e.body,
                    h = c || e.createElement("body");
                if (parseInt(i, 10))
                    for (; i--;) a = e.createElement("div"), a.id = s ? s[i] : v + (i + 1), u.appendChild(a);
                return o = ["&#173;", '<style id="s', v, '">', t, "</style>"].join(""), u.id = v, (c ? u : h).innerHTML += o, h.appendChild(u), c || (h.style.background = "", h.style.overflow = "hidden", l = m.style.overflow, m.style.overflow = "hidden", m.appendChild(h)), r = n(u, t), c ? u.parentNode.removeChild(u) : (h.parentNode.removeChild(h), m.style.overflow = l), !!r
            },
            L = function () {
                function t(t, s) {
                    s = s || e.createElement(i[t] || "div"), t = "on" + t;
                    var r = t in s;
                    return r || (s.setAttribute || (s = e.createElement("div")), s.setAttribute && s.removeAttribute && (s.setAttribute(t, ""), r = o(s[t], "function"), o(s[t], "undefined") || (s[t] = n), s.removeAttribute(t))), s = null, r
                }
                var i = {
                    select: "input",
                    change: "input",
                    submit: "form",
                    reset: "form",
                    error: "img",
                    load: "img",
                    abort: "img"
                };
                return t
            }(),
            O = {}.hasOwnProperty;
        d = o(O, "undefined") || o(O.call, "undefined") ? function (t, e) {
            return e in t && o(t.constructor.prototype[e], "undefined")
        } : function (t, e) {
            return O.call(t, e)
        }, Function.prototype.bind || (Function.prototype.bind = function (t) {
            var e = this;
            if ("function" != typeof e) throw new TypeError;
            var n = N.call(arguments, 1),
                i = function () {
                    if (this instanceof i) {
                        var s = function () {};
                        s.prototype = e.prototype;
                        var o = new s,
                            r = e.apply(o, n.concat(N.call(arguments)));
                        return Object(r) === r ? r : o
                    }
                    return e.apply(t, n.concat(N.call(arguments)))
                };
            return i
        }), E.flexbox = function () {
            return u("flexWrap")
        }, E.canvas = function () {
            var t = e.createElement("canvas");
            return !(!t.getContext || !t.getContext("2d"))
        }, E.canvastext = function () {
            return !(!p.canvas || !o(e.createElement("canvas").getContext("2d").fillText, "function"))
        }, E.webgl = function () {
            return !!t.WebGLRenderingContext
        }, E.touch = function () {
            var n;
            return "ontouchstart" in t || t.DocumentTouch && e instanceof DocumentTouch ? n = !0 : M(["@media (", k.join("touch-enabled),("), v, ")", "{#modernizr{top:9px;position:absolute}}"].join(""), function (t) {
                n = 9 === t.offsetTop
            }), n
        }, E.geolocation = function () {
            return "geolocation" in navigator
        }, E.postmessage = function () {
            return !!t.postMessage
        }, E.websqldatabase = function () {
            return !!t.openDatabase
        }, E.indexedDB = function () {
            return !!u("indexedDB", t)
        }, E.hashchange = function () {
            return L("hashchange", t) && (e.documentMode === n || e.documentMode > 7)
        }, E.history = function () {
            return !(!t.history || !history.pushState)
        }, E.draganddrop = function () {
            var t = e.createElement("div");
            return "draggable" in t || "ondragstart" in t && "ondrop" in t
        }, E.websockets = function () {
            return "WebSocket" in t || "MozWebSocket" in t
        }, E.rgba = function () {
            return i("background-color:rgba(150,255,150,.5)"), r(b.backgroundColor, "rgba")
        }, E.hsla = function () {
            return i("background-color:hsla(120,40%,100%,.5)"), r(b.backgroundColor, "rgba") || r(b.backgroundColor, "hsla")
        }, E.multiplebgs = function () {
            return i("background:url(https://),url(https://),red url(https://)"), /(url\s*\(.*?){3}/.test(b.background)
        }, E.backgroundsize = function () {
            return u("backgroundSize")
        }, E.borderimage = function () {
            return u("borderImage")
        }, E.borderradius = function () {
            return u("borderRadius")
        }, E.boxshadow = function () {
            return u("boxShadow")
        }, E.textshadow = function () {
            return "" === e.createElement("div").style.textShadow
        }, E.opacity = function () {
            return s("opacity:.55"), /^0.55$/.test(b.opacity)
        }, E.cssanimations = function () {
            return u("animationName")
        }, E.csscolumns = function () {
            return u("columnCount")
        }, E.cssgradients = function () {
            var t = "background-image:",
                e = "gradient(linear,left top,right bottom,from(#9f9),to(white));",
                n = "linear-gradient(left top,#9f9, white);";
            return i((t + "-webkit- ".split(" ").join(e + t) + k.join(n + t)).slice(0, -t.length)), r(b.backgroundImage, "gradient")
        }, E.cssreflections = function () {
            return u("boxReflect")
        }, E.csstransforms = function () {
            return !!u("transform")
        }, E.csstransforms3d = function () {
            var t = !!u("perspective");
            return t && "webkitPerspective" in m.style && M("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}", function (e, n) {
                t = 9 === e.offsetLeft && 3 === e.offsetHeight
            }), t
        }, E.csstransitions = function () {
            return u("transition")
        }, E.fontface = function () {
            var t;
            return M('@font-face {font-family:"font";src:url("https://")}', function (n, i) {
                var s = e.getElementById("smodernizr"),
                    o = s.sheet || s.styleSheet,
                    r = o ? o.cssRules && o.cssRules[0] ? o.cssRules[0].cssText : o.cssText || "" : "";
                t = /src/i.test(r) && 0 === r.indexOf(i.split(" ")[0])
            }), t
        }, E.generatedcontent = function () {
            var t;
            return M(["#", v, "{font:0/0 a}#", v, ':after{content:"', w, '";visibility:hidden;font:3px/1 a}'].join(""), function (e) {
                t = e.offsetHeight >= 3
            }), t
        }, E.video = function () {
            var t = e.createElement("video"),
                n = !1;
            try {
                (n = !!t.canPlayType) && (n = new Boolean(n), n.ogg = t.canPlayType('video/ogg; codecs="theora"').replace(/^no$/, ""), n.h264 = t.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/, ""), n.webm = t.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/, ""))
            } catch (i) {}
            return n
        }, E.audio = function () {
            var t = e.createElement("audio"),
                n = !1;
            try {
                (n = !!t.canPlayType) && (n = new Boolean(n), n.ogg = t.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""), n.mp3 = t.canPlayType("audio/mpeg;").replace(/^no$/, ""), n.wav = t.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ""), n.m4a = (t.canPlayType("audio/x-m4a;") || t.canPlayType("audio/aac;")).replace(/^no$/, ""))
            } catch (i) {}
            return n
        }, E.localstorage = function () {
            try {
                return localStorage.setItem(v, v), localStorage.removeItem(v), !0
            } catch (t) {
                return !1
            }
        }, E.sessionstorage = function () {
            try {
                return sessionStorage.setItem(v, v), sessionStorage.removeItem(v), !0
            } catch (t) {
                return !1
            }
        }, E.webworkers = function () {
            return !!t.Worker
        }, E.applicationcache = function () {
            return !!t.applicationCache
        }, E.svg = function () {
            return !!e.createElementNS && !!e.createElementNS(D.svg, "svg").createSVGRect
        }, E.inlinesvg = function () {
            var t = e.createElement("div");
            return t.innerHTML = "<svg/>", (t.firstChild && t.firstChild.namespaceURI) == D.svg
        }, E.smil = function () {
            return !!e.createElementNS && /SVGAnimate/.test(x.call(e.createElementNS(D.svg, "animate")))
        }, E.svgclippaths = function () {
            return !!e.createElementNS && /SVGClipPath/.test(x.call(e.createElementNS(D.svg, "clipPath")))
        };
        for (var P in E) d(E, P) && (h = P.toLowerCase(), p[h] = E[P](), $.push((p[h] ? "" : "no-") + h));
        return p.input || c(), p.addTest = function (t, e) {
                if ("object" == typeof t)
                    for (var i in t) d(t, i) && p.addTest(i, t[i]);
                else {
                    if (t = t.toLowerCase(), p[t] !== n) return p;
                    e = "function" == typeof e ? e() : e, "undefined" != typeof g && g && (m.className += " " + (e ? "" : "no-") + t), p[t] = e
                }
                return p
            }, i(""), y = _ = null,
            function (t, e) {
                function n(t, e) {
                    var n = t.createElement("p"),
                        i = t.getElementsByTagName("head")[0] || t.documentElement;
                    return n.innerHTML = "x<style>" + e + "</style>", i.insertBefore(n.lastChild, i.firstChild)
                }

                function i() {
                    var t = v.elements;
                    return "string" == typeof t ? t.split(" ") : t
                }

                function s(t) {
                    var e = m[t[p]];
                    return e || (e = {}, g++, t[p] = g, m[g] = e), e
                }

                function o(t, n, i) {
                    if (n || (n = e), c) return n.createElement(t);
                    i || (i = s(n));
                    var o;
                    return o = i.cache[t] ? i.cache[t].cloneNode() : f.test(t) ? (i.cache[t] = i.createElem(t)).cloneNode() : i.createElem(t), o.canHaveChildren && !d.test(t) ? i.frag.appendChild(o) : o
                }

                function r(t, n) {
                    if (t || (t = e), c) return t.createDocumentFragment();
                    n = n || s(t);
                    for (var o = n.frag.cloneNode(), r = 0, a = i(), l = a.length; l > r; r++) o.createElement(a[r]);
                    return o
                }

                function a(t, e) {
                    e.cache || (e.cache = {}, e.createElem = t.createElement, e.createFrag = t.createDocumentFragment, e.frag = e.createFrag()), t.createElement = function (n) {
                        return v.shivMethods ? o(n, t, e) : e.createElem(n)
                    }, t.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + i().join().replace(/\w+/g, function (t) {
                        return e.createElem(t), e.frag.createElement(t), 'c("' + t + '")'
                    }) + ");return n}")(v, e.frag)
                }

                function l(t) {
                    t || (t = e);
                    var i = s(t);
                    return !v.shivCSS || u || i.hasCSS || (i.hasCSS = !!n(t, "article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}")), c || a(t, i), t
                }
                var u, c, h = t.html5 || {},
                    d = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
                    f = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
                    p = "_html5shiv",
                    g = 0,
                    m = {};
                ! function () {
                    try {
                        var t = e.createElement("a");
                        t.innerHTML = "<xyz></xyz>", u = "hidden" in t, c = 1 == t.childNodes.length || function () {
                            e.createElement("a");
                            var t = e.createDocumentFragment();
                            return "undefined" == typeof t.cloneNode || "undefined" == typeof t.createDocumentFragment || "undefined" == typeof t.createElement
                        }()
                    } catch (n) {
                        u = !0, c = !0
                    }
                }();
                var v = {
                    elements: h.elements || "abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",
                    shivCSS: h.shivCSS !== !1,
                    supportsUnknownElements: c,
                    shivMethods: h.shivMethods !== !1,
                    type: "default",
                    shivDocument: l,
                    createElement: o,
                    createDocumentFragment: r
                };
                t.html5 = v, l(e)
            }(this, e), p._version = f, p._prefixes = k, p._domPrefixes = T, p._cssomPrefixes = C, p.hasEvent = L, p.testProp = function (t) {
                return a([t])
            }, p.testAllProps = u, p.testStyles = M, p.prefixed = function (t, e, n) {
                return e ? u(t, e, n) : u(t, "pfx")
            }, m.className = m.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + (g ? " js " + $.join(" ") : ""), p
    }(this, this.document),
    function (t, e, n) {
        function i(t) {
            return "[object Function]" == m.call(t)
        }

        function s(t) {
            return "string" == typeof t
        }

        function o() {}

        function r(t) {
            return !t || "loaded" == t || "complete" == t || "uninitialized" == t
        }

        function a() {
            var t = v.shift();
            y = 1, t ? t.t ? p(function () {
                ("c" == t.t ? d.injectCss : d.injectJs)(t.s, 0, t.a, t.x, t.e, 1)
            }, 0) : (t(), a()) : y = 0
        }

        function l(t, n, i, s, o, l, u) {
            function c(e) {
                if (!f && r(h.readyState) && (b.r = f = 1, !y && a(), h.onload = h.onreadystatechange = null, e)) {
                    "img" != t && p(function () {
                        w.removeChild(h)
                    }, 50);
                    for (var i in T[n]) T[n].hasOwnProperty(i) && T[n][i].onload()
                }
            }
            var u = u || d.errorTimeout,
                h = e.createElement(t),
                f = 0,
                m = 0,
                b = {
                    t: i,
                    s: n,
                    e: o,
                    a: l,
                    x: u
                };
            1 === T[n] && (m = 1, T[n] = []), "object" == t ? h.data = n : (h.src = n, h.type = t), h.width = h.height = "0", h.onerror = h.onload = h.onreadystatechange = function () {
                c.call(this, m)
            }, v.splice(s, 0, b), "img" != t && (m || 2 === T[n] ? (w.insertBefore(h, _ ? null : g), p(c, u)) : T[n].push(h))
        }

        function u(t, e, n, i, o) {
            return y = 0, e = e || "j", s(t) ? l("c" == e ? k : x, t, e, this.i++, n, i, o) : (v.splice(this.i++, 0, t), 1 == v.length && a()), this
        }

        function c() {
            var t = d;
            return t.loader = {
                load: u,
                i: 0
            }, t
        }
        var h, d, f = e.documentElement,
            p = t.setTimeout,
            g = e.getElementsByTagName("script")[0],
            m = {}.toString,
            v = [],
            y = 0,
            b = "MozAppearance" in f.style,
            _ = b && !!e.createRange().compareNode,
            w = _ ? f : g.parentNode,
            f = t.opera && "[object Opera]" == m.call(t.opera),
            f = !!e.attachEvent && !f,
            x = b ? "object" : f ? "script" : "img",
            k = f ? "script" : x,
            S = Array.isArray || function (t) {
                return "[object Array]" == m.call(t)
            },
            C = [],
            T = {},
            D = {
                timeout: function (t, e) {
                    return e.length && (t.timeout = e[0]), t
                }
            };
        d = function (t) {
            function e(t) {
                var e, n, i, t = t.split("!"),
                    s = C.length,
                    o = t.pop(),
                    r = t.length,
                    o = {
                        url: o,
                        origUrl: o,
                        prefixes: t
                    };
                for (n = 0; r > n; n++) i = t[n].split("="), (e = D[i.shift()]) && (o = e(o, i));
                for (n = 0; s > n; n++) o = C[n](o);
                return o
            }

            function r(t, s, o, r, a) {
                var l = e(t),
                    u = l.autoCallback;
                l.url.split(".").pop().split("?").shift(), l.bypass || (s && (s = i(s) ? s : s[t] || s[r] || s[t.split("/").pop().split("?")[0]]), l.instead ? l.instead(t, s, o, r, a) : (T[l.url] ? l.noexec = !0 : T[l.url] = 1, o.load(l.url, l.forceCSS || !l.forceJS && "css" == l.url.split(".").pop().split("?").shift() ? "c" : n, l.noexec, l.attrs, l.timeout), (i(s) || i(u)) && o.load(function () {
                    c(), s && s(l.origUrl, a, r), u && u(l.origUrl, a, r), T[l.url] = 2
                })))
            }

            function a(t, e) {
                function n(t, n) {
                    if (t) {
                        if (s(t)) n || (h = function () {
                            var t = [].slice.call(arguments);
                            d.apply(this, t), f()
                        }), r(t, h, e, 0, u);
                        else if (Object(t) === t)
                            for (l in a = function () {
                                    var e, n = 0;
                                    for (e in t) t.hasOwnProperty(e) && n++;
                                    return n
                                }(), t) t.hasOwnProperty(l) && (!n && !--a && (i(h) ? h = function () {
                                var t = [].slice.call(arguments);
                                d.apply(this, t), f()
                            } : h[l] = function (t) {
                                return function () {
                                    var e = [].slice.call(arguments);
                                    t && t.apply(this, e), f()
                                }
                            }(d[l])), r(t[l], h, e, l, u))
                    } else !n && f()
                }
                var a, l, u = !!t.test,
                    c = t.load || t.both,
                    h = t.callback || o,
                    d = h,
                    f = t.complete || o;
                n(u ? t.yep : t.nope, !!c), c && n(c)
            }
            var l, u, h = this.yepnope.loader;
            if (s(t)) r(t, 0, h, 0);
            else if (S(t))
                for (l = 0; l < t.length; l++) u = t[l], s(u) ? r(u, 0, h, 0) : S(u) ? d(u) : Object(u) === u && a(u, h);
            else Object(t) === t && a(t, h)
        }, d.addPrefix = function (t, e) {
            D[t] = e
        }, d.addFilter = function (t) {
            C.push(t)
        }, d.errorTimeout = 1e4, null == e.readyState && e.addEventListener && (e.readyState = "loading", e.addEventListener("DOMContentLoaded", h = function () {
            e.removeEventListener("DOMContentLoaded", h, 0), e.readyState = "complete"
        }, 0)), t.yepnope = c(), t.yepnope.executeStack = a, t.yepnope.injectJs = function (t, n, i, s, l, u) {
            var c, h, f = e.createElement("script"),
                s = s || d.errorTimeout;
            f.src = t;
            for (h in i) f.setAttribute(h, i[h]);
            n = u ? a : n || o, f.onreadystatechange = f.onload = function () {
                !c && r(f.readyState) && (c = 1, n(), f.onload = f.onreadystatechange = null)
            }, p(function () {
                c || (c = 1, n(1))
            }, s), l ? f.onload() : g.parentNode.insertBefore(f, g)
        }, t.yepnope.injectCss = function (t, n, i, s, r, l) {
            var u, s = e.createElement("link"),
                n = l ? a : n || o;
            s.href = t, s.rel = "stylesheet", s.type = "text/css";
            for (u in i) s.setAttribute(u, i[u]);
            r || (g.parentNode.insertBefore(s, g), p(n, 0))
        }
    }(this, document), Modernizr.load = function () {
        yepnope.apply(window, [].slice.call(arguments, 0))
    }, ! function (t) {
        "function" == typeof define && define.amd ? define(["jquery"], t) : t(jQuery)
    }(function (t) {
        "use strict";

        function e(t) {
            this.container = t, this.init()
        }

        function n(e, n) {
            this.widget = e, this.options = t.extend({}, n), this.detectService(), this.service && this.init()
        }

        function i(t, e) {
            return s(t, e, encodeURIComponent)
        }

        function s(t, e, n) {
            return t.replace(/\{([^\}]+)\}/g, function (t, i) {
                return i in e ? n ? n(e[i]) : e[i] : t
            })
        }

        function o(t, e) {
            var n = l + t;
            return n + " " + n + "_" + e
        }

        function r(e) {
            function n(o) {
                "keydown" === o.type && 27 !== o.which || t(o.target).closest(e).length || (e.fadeOut(u), i.off(s, n))
            }
            var i = t(document),
                s = "click touchstart keydown";
            i.on(s, n)
        }

        function a(t, e) {
            if (document.documentElement.getBoundingClientRect) {
                var n = parseInt(t.css("left"), 10),
                    i = parseInt(t.css("top"), 10);
                t.css("visibility", "hidden").show();
                var s = t[0].getBoundingClientRect();
                s.left < e ? t.css("left", e - s.left + n) : s.right > window.innerWidth - e && t.css("left", window.innerWidth - s.right - e + n), s.top < e ? t.css("top", e - s.top + i) : s.bottom > window.innerHeight - e && t.css("top", window.innerHeight - s.bottom - e + i), t.hide().css("visibility", "visible")
            }
            t.fadeIn(u)
        }
        var l = "social-likes__",
            u = "fast",
            c = {
                facebook: {
                    counterUrl: "//graph.facebook.com/fql?q=SELECT+total_count+FROM+link_stat+WHERE+url%3D%22{url}%22&callback=?",
                    convertNumber: function (t) {
                        return t.data[0].total_count
                    },
                    popupUrl: "//www.facebook.com/sharer/sharer.php?u={url}",
                    popupWidth: 600,
                    popupHeight: 500
                },
                twitter: {
                    counterUrl: "//urls.api.twitter.com/1/urls/count.json?url={url}&callback=?",
                    convertNumber: function (t) {
                        return t.count
                    },
                    popupUrl: "//twitter.com/intent/tweet?url={url}&text={title}",
                    popupWidth: 600,
                    popupHeight: 450,
                    click: function () {
                        return /[\.:\-\u2013\u2014]\s*$/.test(this.options.pageTitle) || (this.options.pageTitle += ":"), !0
                    }
                },
                mailru: {
                    counterUrl: "//connect.mail.ru/share_count?url_list={url}&callback=1&func=?",
                    convertNumber: function (t) {
                        for (var e in t)
                            if (t.hasOwnProperty(e)) return t[e].shares
                    },
                    popupUrl: "//connect.mail.ru/share?share_url={url}&title={title}",
                    popupWidth: 550,
                    popupHeight: 360
                },
                vkontakte: {
                    counterUrl: "//vkontakte.ru/share.php?act=count&url={url}&index={index}",
                    counter: function (e, n) {
                        var s = c.vkontakte;
                        s._ || (s._ = [], window.VK || (window.VK = {}), window.VK.Share = {
                            count: function (t, e) {
                                s._[t].resolve(e)
                            }
                        });
                        var o = s._.length;
                        s._.push(n), t.ajax({
                            url: i(e, {
                                index: o
                            }),
                            dataType: "jsonp"
                        })
                    },
                    popupUrl: "//vk.com/share.php?url={url}&title={title}",
                    popupWidth: 550,
                    popupHeight: 330
                },
                odnoklassniki: {
                    counterUrl: "//www.odnoklassniki.ru/dk?st.cmd=shareData&ref={url}&cb=?",
                    convertNumber: function (t) {
                        return t.count
                    },
                    popupUrl: "//www.odnoklassniki.ru/dk?st.cmd=addShare&st._surl={url}",
                    popupWidth: 550,
                    popupHeight: 360
                },
                plusone: {
                    popupUrl: "https://plus.google.com/share?url={url}",
                    popupWidth: 700,
                    popupHeight: 500
                },
                livejournal: {
                    click: function () {
                        var e = this._livejournalForm;
                        if (!e) {
                            var n = this.options.pageHtml.replace(/&/g, "&amp;").replace(/"/g, "&quot;");
                            e = t(s('<form action="//www.livejournal.com/update.bml" method="post" target="_blank" accept-charset="UTF-8"><input type="hidden" name="mode" value="full"><input type="hidden" name="subject" value="{title}"><input type="hidden" name="event" value="{html}"></form>', {
                                title: this.options.pageTitle,
                                html: n
                            })), this.widget.append(e), this._livejournalForm = e
                        }
                        e.submit()
                    }
                },
                pinterest: {
                    counterUrl: "//api.pinterest.com/v1/urls/count.json?url={url}&callback=?",
                    convertNumber: function (t) {
                        return t.count
                    },
                    popupUrl: "//pinterest.com/pin/create/button/?url={url}&description={title}",
                    popupWidth: 630,
                    popupHeight: 270
                }
            },
            h = {
                promises: {},
                fetch: function (e, n, s) {
                    h.promises[e] || (h.promises[e] = {});
                    var o = h.promises[e];
                    if (o[n]) return o[n];
                    var r = t.extend({}, c[e], s),
                        a = t.Deferred(),
                        l = r.counterUrl && i(r.counterUrl, {
                            url: n
                        });
                    return t.isFunction(r.counter) ? r.counter(l, a) : r.counterUrl && t.getJSON(l).done(function (e) {
                        try {
                            var n = e;
                            t.isFunction(r.convertNumber) && (n = r.convertNumber(e)), a.resolve(n)
                        } catch (i) {
                            a.reject(i)
                        }
                    }), o[n] = a.promise(), o[n]
                }
            };
        t.fn.socialLikes = function () {
            return this.each(function () {
                new e(t(this))
            })
        }, e.prototype = {
            optionsMap: {
                pageUrl: {
                    attr: "url",
                    defaultValue: function () {
                        return window.location.href.replace(window.location.hash, "")
                    }
                },
                pageTitle: {
                    attr: "title",
                    defaultValue: function () {
                        return document.title
                    }
                },
                pageHtml: {
                    attr: "html",
                    defaultValue: function () {
                        return '<a href="' + this.options.pageUrl + '">' + this.options.pageTitle + "</a>"
                    }
                },
                pageCounters: {
                    attr: "counters",
                    defaultValue: "yes",
                    convert: function (t) {
                        return "yes" === t
                    }
                }
            },
            init: function () {
                this.container.addClass("social-likes"), this.readOptions(), this.single = this.container.hasClass("social-likes_single"), this.initUserButtons(), this.single && this.makeSingleButton();
                var e = this.options;
                this.container.find("li").each(function () {
                    new n(t(this), e)
                })
            },
            readOptions: function () {
                this.options = {};
                for (var e in this.optionsMap) {
                    var n = this.optionsMap[e];
                    this.options[e] = this.container.data(n.attr) || (t.isFunction(n.defaultValue) ? t.proxy(n.defaultValue, this)() : n.defaultValue), t.isFunction(n.convert) && (this.options[e] = n.convert(this.options[e]))
                }
            },
            initUserButtons: function () {
                !this.userButtonInited && window.socialLikesButtons && t.extend(c, socialLikesButtons), this.userButtonInited = !0
            },
            makeSingleButton: function () {
                var e = this.container;
                e.addClass("social-likes_vertical"), e.wrap(t("<div>", {
                    "class": "social-likes_single-w"
                }));
                var n = e.parent(),
                    i = parseInt(e.css("left"), 10),
                    s = parseInt(e.css("top"), 10);
                e.hide();
                var c = t("<div>", {
                    "class": o("button", "single"),
                    text: e.data("single-title") || "Share"
                });
                c.prepend(t("<span>", {
                    "class": o("icon", "single")
                })), n.append(c);
                var h = t("<li>", {
                    "class": l + "close",
                    html: "&times;"
                });
                e.append(h), this.number = 0, c.click(function () {
                    return e.css({
                        left: i,
                        top: s
                    }), a(e, 20), r(e), !1
                }), h.click(function () {
                    e.fadeOut(u)
                }), this.wrapper = n, this.container.on("counter.social-likes", t.proxy(this.updateCounter, this))
            },
            updateCounter: function (t, e, n) {
                n && (this.number += n, this.getCounterElem().text(this.number))
            },
            getCounterElem: function () {
                var e = this.wrapper.find("." + l + "counter_single");
                return e.length || (e = t("<span>", {
                    "class": o("counter", "single")
                }), this.wrapper.append(e)), e
            }
        }, n.prototype = {
            init: function () {
                if (this.detectParams(), this.initHtml(), this.options.pageCounters)
                    if (this.options.counterNumber) this.updateCounter(this.options.counterNumber);
                    else {
                        var e = this.options.counterUrl ? {
                            counterUrl: this.options.counterUrl
                        } : {};
                        h.fetch(this.service, this.options.pageUrl, e).done(t.proxy(this.updateCounter, this))
                    }
            },
            detectService: function () {
                for (var e = this.widget[0].classList || this.widget[0].className.split(" "), n = 0; n < e.length; n++) {
                    var i = e[n];
                    if (c[i]) return this.service = i, void t.extend(this.options, c[i])
                }
            },
            detectParams: function () {
                var t = this.widget.data("counter");
                if (t) {
                    var e = parseInt(t, 10);
                    isNaN(e) ? this.options.counterUrl = t : this.options.counterNumber = e
                }
                var n = this.widget.data("title");
                n && (this.options.pageTitle = n);
                var i = this.widget.data("url");
                i && (this.options.pageUrl = i)
            },
            initHtml: function () {
                var e = this.options,
                    n = this.widget,
                    s = !!e.clickUrl;
                n.removeClass(this.service), n.addClass(this.getElementClassNames("widget"));
                var o = n.find("a");
                o.length && this.cloneDataAttrs(o, n);
                var r = t(s ? "<a>" : "<span>", {
                    "class": this.getElementClassNames("button"),
                    text: n.text()
                });
                if (s) {
                    var a = i(e.clickUrl, {
                        url: e.pageUrl,
                        title: e.pageTitle
                    });
                    r.attr("href", a)
                } else r.click(t.proxy(this.click, this));
                r.prepend(t("<span>", {
                    "class": this.getElementClassNames("icon")
                })), n.empty().append(r), this.button = r
            },
            cloneDataAttrs: function (t, e) {
                var n = t.data();
                for (var i in n) n.hasOwnProperty(i) && e.data(i, n[i])
            },
            getElementClassNames: function (t) {
                return o(t, this.service)
            },
            updateCounter: function (e) {
                if (e = parseInt(e, 10)) {
                    var n = t("<span>", {
                        "class": this.getElementClassNames("counter"),
                        text: e
                    });
                    this.widget.append(n), this.widget.trigger("counter.social-likes", [this.service, e])
                }
            },
            click: function (e) {
                var n = this.options,
                    s = !0;
                if (t.isFunction(n.click) && (s = n.click.call(this, e)), s) {
                    var o = i(n.popupUrl, {
                        url: n.pageUrl,
                        title: n.pageTitle
                    });
                    o = this.addAdditionalParamsToUrl(o), this.openPopup(o, {
                        width: n.popupWidth,
                        height: n.popupHeight
                    })
                }
                return !1
            },
            addAdditionalParamsToUrl: function (e) {
                var n = t.param(this.widget.data());
                if (!n) return e;
                var i = -1 === e.indexOf("?") ? "?" : "&";
                return e + i + n
            },
            openPopup: function (t, e) {
                var n = Math.round(screen.width / 2 - e.width / 2),
                    i = 0;
                screen.height > e.height && (i = Math.round(screen.height / 3 - e.height / 2));
                var s = window.open(t, "sl_" + this.service, "left=" + n + ",top=" + i + ",width=" + e.width + ",height=" + e.height + ",personalbar=0,toolbar=0,scrollbars=1,resizable=1");
                s ? s.focus() : location.href = t
            }
        }, t(function () {
            t(".social-likes").socialLikes()
        })
    }),
    function () {}.call(this),
    function (t) {
        return t.fn.boxfit = function (e) {
            var n, i, s, o, r, a, l, u;
            if (0 === this.length) return t(this);
            if (l = {
                    step_size: 1,
                    step_limit: 200,
                    align_middle: !0,
                    align_center: !0,
                    multiline: !1,
                    minimum_font_size: 5,
                    maximum_font_size: null
                }, t.extend(l, e), l.multiline || t(this).css("white-space", "nowrap"), r = t(this).html(), t(this).html(""), l.width ? (a = l.width, t(this).width(a + "px")) : a = t(this).width(), l.height ? (o = l.height, t(this).height(o + "px")) : o = t(this).height(), void 0 !== l.maxFontSize && (l.maxFont = !0), a && o) {
                for (0 === t("<div>" + r + "</div>").find("span.boxfitted").length ? (u = t(t("<span></span>").addClass("boxfitted").html(r)), t(this).html(u)) : (t(this).html(r), u = t(t(r).find("span.boxfitted")[0])), n = 0, i = u, t(this).css("display", "table"), i.css("display", "table-cell"), l.align_middle && i.css("vertical-align", "middle"), l.align_center && (t(this).css("text-align", "center"), i.css("text-align", "center")), i.css("font-size", l.minimum_font_size); t(this).width() <= a && t(this).height() <= o && !(n++ > l.step_limit) && (s = parseInt(i.css("font-size"), 10), !(l.maximum_font_size && s > l.maximum_font_size));) i.css("font-size", s + l.step_size);
                return i.css("font-size", parseInt(i.css("font-size"), 10) - l.step_size), t(this)
            }
            return null != window.console && console.info("Set static height/width on target DIV before using boxfit! Detected width: '" + a + "'; height:' " + o + "'"), t(this).html(r)
        }
    }(jQuery), ! function (t, e, n, i) {
        function s(t, e) {
            var n = Math.max(0, t[0] - e[0], e[0] - t[1]),
                i = Math.max(0, t[2] - e[1], e[1] - t[3]);
            return n + i
        }

        function o(e, n, i, s) {
            var o = e.length,
                r = s ? "offset" : "position";
            for (i = i || 0; o--;) {
                var a = e[o].el ? e[o].el : t(e[o]),
                    l = a[r]();
                l.left += parseInt(a.css("margin-left"), 10), l.top += parseInt(a.css("margin-top"), 10), n[o] = [l.left - i, l.left + a.outerWidth() + i, l.top - i, l.top + a.outerHeight() + i]
            }
        }

        function r(t, e) {
            var n = e.offset();
            return {
                left: t.left - n.left,
                top: t.top - n.top
            }
        }

        function a(t, e, n) {
            e = [e.left, e.top], n = n && [n.left, n.top];
            for (var i, o = t.length, r = []; o--;) i = t[o], r[o] = [o, s(i, e), n && s(i, n)];
            return r = r.sort(function (t, e) {
                return e[1] - t[1] || e[2] - t[2] || e[0] - t[0]
            })
        }

        function l(e) {
            this.options = t.extend({}, d, e), this.containers = [], this.options.rootGroup || (this.scrollProxy = t.proxy(this.scroll, this), this.dragProxy = t.proxy(this.drag, this), this.dropProxy = t.proxy(this.drop, this), this.placeholder = t(this.options.placeholder), e.isValidTarget || (this.options.isValidTarget = i))
        }

        function u(e, n) {
            this.el = e, this.options = t.extend({}, h, n), this.group = l.get(this.options), this.rootGroup = this.options.rootGroup || this.group, this.handle = this.rootGroup.options.handle || this.rootGroup.options.itemSelector;
            var i = this.rootGroup.options.itemPath;
            this.target = i ? this.el.find(i) : this.el, this.target.on(c.start, this.handle, t.proxy(this.dragInit, this)), this.options.drop && this.group.containers.push(this)
        }
        var c, h = {
                drag: !0,
                drop: !0,
                exclude: "",
                nested: !0,
                vertical: !0
            },
            d = {
                afterMove: function (t, e, n) {},
                containerPath: "",
                containerSelector: "ol, ul",
                distance: 0,
                delay: 0,
                handle: "",
                itemPath: "",
                itemSelector: "li",
                isValidTarget: function (t, e) {
                    return !0
                },
                onCancel: function (t, e, n, i) {},
                onDrag: function (t, e, n, i) {
                    t.css(e)
                },
                onDragStart: function (e, n, i, s) {
                    e.css({
                        height: e.height(),
                        width: e.width()
                    }), e.addClass("dragged"), t("body").addClass("dragging")
                },
                onDrop: function (e, n, i, s) {
                    e.removeClass("dragged").removeAttr("style"), t("body").removeClass("dragging")
                },
                onMousedown: function (t, e, n) {
                    return n.target.nodeName.match(/^(input|select)$/i) ? void 0 : (n.preventDefault(), !0)
                },
                placeholder: '<li class="placeholder"/>',
                pullPlaceholder: !0,
                serialize: function (e, n, i) {
                    var s = t.extend({}, e.data());
                    return i ? [n] : (n[0] && (s.children = n), delete s.subContainers, delete s.sortable, s)
                },
                tolerance: 0
            },
            f = {},
            p = 0,
            g = {
                left: 0,
                top: 0,
                bottom: 0,
                right: 0
            },
            c = {
                start: "touchstart.sortable mousedown.sortable",
                drop: "touchend.sortable touchcancel.sortable mouseup.sortable",
                drag: "touchmove.sortable mousemove.sortable",
                scroll: "scroll.sortable"
            },
            m = "subContainers";
        l.get = function (t) {
            return f[t.group] || (t.group === i && (t.group = p++), f[t.group] = new l(t)), f[t.group]
        }, l.prototype = {
            dragInit: function (e, n) {
                this.$document = t(n.el[0].ownerDocument), this.item = t(e.target).closest(this.options.itemSelector), this.itemContainer = n, !this.item.is(this.options.exclude) && this.options.onMousedown(this.item, d.onMousedown, e) && (this.setPointer(e), this.toggleListeners("on"), this.setupDelayTimer(), this.dragInitDone = !0)
            },
            drag: function (t) {
                if (!this.dragging) {
                    if (!this.distanceMet(t) || !this.delayMet) return;
                    this.options.onDragStart(this.item, this.itemContainer, d.onDragStart, t), this.item.before(this.placeholder), this.dragging = !0
                }
                this.setPointer(t), this.options.onDrag(this.item, r(this.pointer, this.item.offsetParent()), d.onDrag, t);
                var e = t.pageX || t.originalEvent.pageX,
                    n = t.pageY || t.originalEvent.pageY,
                    i = this.sameResultBox,
                    s = this.options.tolerance;
                (!i || i.top - s > n || i.bottom + s < n || i.left - s > e || i.right + s < e) && (this.searchValidTarget() || this.placeholder.detach())
            },
            drop: function (t) {
                this.toggleListeners("off"), this.dragInitDone = !1, this.dragging && (this.placeholder.closest("html")[0] ? this.placeholder.before(this.item).detach() : this.options.onCancel(this.item, this.itemContainer, d.onCancel, t), this.options.onDrop(this.item, this.getContainer(this.item), d.onDrop, t), this.clearDimensions(), this.clearOffsetParent(), this.lastAppendedItem = this.sameResultBox = i, this.dragging = !1)
            },
            searchValidTarget: function (t, e) {
                t || (t = this.relativePointer || this.pointer, e = this.lastRelativePointer || this.lastPointer);
                for (var n = a(this.getContainerDimensions(), t, e), s = n.length; s--;) {
                    var o = n[s][0],
                        l = n[s][1];
                    if (!l || this.options.pullPlaceholder) {
                        var u = this.containers[o];
                        if (!u.disabled) {
                            if (!this.$getOffsetParent()) {
                                var c = u.getItemOffsetParent();
                                t = r(t, c), e = r(e, c)
                            }
                            if (u.searchValidTarget(t, e)) return !0
                        }
                    }
                }
                this.sameResultBox && (this.sameResultBox = i)
            },
            movePlaceholder: function (t, e, n, i) {
                var s = this.lastAppendedItem;
                (i || !s || s[0] !== e[0]) && (e[n](this.placeholder), this.lastAppendedItem = e, this.sameResultBox = i, this.options.afterMove(this.placeholder, t, e))
            },
            getContainerDimensions: function () {
                return this.containerDimensions || o(this.containers, this.containerDimensions = [], this.options.tolerance, !this.$getOffsetParent()), this.containerDimensions
            },
            getContainer: function (t) {
                return t.closest(this.options.containerSelector).data(n)
            },
            $getOffsetParent: function () {
                if (this.offsetParent === i) {
                    var t = this.containers.length - 1,
                        e = this.containers[t].getItemOffsetParent();
                    if (!this.options.rootGroup)
                        for (; t--;)
                            if (e[0] != this.containers[t].getItemOffsetParent()[0]) {
                                e = !1;
                                break
                            }
                    this.offsetParent = e
                }
                return this.offsetParent
            },
            setPointer: function (t) {
                var e = this.getPointer(t);
                if (this.$getOffsetParent()) {
                    var n = r(e, this.$getOffsetParent());
                    this.lastRelativePointer = this.relativePointer, this.relativePointer = n
                }
                this.lastPointer = this.pointer, this.pointer = e
            },
            distanceMet: function (t) {
                var e = this.getPointer(t);
                return Math.max(Math.abs(this.pointer.left - e.left), Math.abs(this.pointer.top - e.top)) >= this.options.distance
            },
            getPointer: function (t) {
                return {
                    left: t.pageX || t.originalEvent.pageX,
                    top: t.pageY || t.originalEvent.pageY
                }
            },
            setupDelayTimer: function () {
                var t = this;
                this.delayMet = !this.options.delay, this.delayMet || (clearTimeout(this._mouseDelayTimer), this._mouseDelayTimer = setTimeout(function () {
                    t.delayMet = !0
                }, this.options.delay))
            },
            scroll: function (t) {
                this.clearDimensions(), this.clearOffsetParent()
            },
            toggleListeners: function (e) {
                var n = this,
                    i = ["drag", "drop", "scroll"];
                t.each(i, function (t, i) {
                    n.$document[e](c[i], n[i + "Proxy"])
                })
            },
            clearOffsetParent: function () {
                this.offsetParent = i
            },
            clearDimensions: function () {
                this.traverse(function (t) {
                    t._clearDimensions()
                })
            },
            traverse: function (t) {
                t(this);
                for (var e = this.containers.length; e--;) this.containers[e].traverse(t)
            },
            _clearDimensions: function () {
                this.containerDimensions = i
            },
            _destroy: function () {
                f[this.options.group] = i
            }
        }, u.prototype = {
            dragInit: function (t) {
                var e = this.rootGroup;
                !this.disabled && !e.dragInitDone && this.options.drag && this.isValidDrag(t) && e.dragInit(t, this)
            },
            isValidDrag: function (t) {
                return 1 == t.which || "touchstart" == t.type && 1 == t.originalEvent.touches.length
            },
            searchValidTarget: function (t, e) {
                var n = a(this.getItemDimensions(), t, e),
                    i = n.length,
                    s = this.rootGroup,
                    o = !s.options.isValidTarget || s.options.isValidTarget(s.item, this);
                if (!i && o) return s.movePlaceholder(this, this.target, "append"), !0;
                for (; i--;) {
                    var r = n[i][0],
                        l = n[i][1];
                    if (!l && this.hasChildGroup(r)) {
                        var u = this.getContainerGroup(r).searchValidTarget(t, e);
                        if (u) return !0
                    } else if (o) return this.movePlaceholder(r, t), !0
                }
            },
            movePlaceholder: function (e, n) {
                var i = t(this.items[e]),
                    s = this.itemDimensions[e],
                    o = "after",
                    r = i.outerWidth(),
                    a = i.outerHeight(),
                    l = i.offset(),
                    u = {
                        left: l.left,
                        right: l.left + r,
                        top: l.top,
                        bottom: l.top + a
                    };
                if (this.options.vertical) {
                    var c = (s[2] + s[3]) / 2,
                        h = n.top <= c;
                    h ? (o = "before", u.bottom -= a / 2) : u.top += a / 2
                } else {
                    var d = (s[0] + s[1]) / 2,
                        f = n.left <= d;
                    f ? (o = "before", u.right -= r / 2) : u.left += r / 2
                }
                this.hasChildGroup(e) && (u = g), this.rootGroup.movePlaceholder(this, i, o, u)
            },
            getItemDimensions: function () {
                return this.itemDimensions || (this.items = this.$getChildren(this.el, "item").filter(":not(.placeholder, .dragged)").get(), o(this.items, this.itemDimensions = [], this.options.tolerance)), this.itemDimensions
            },
            getItemOffsetParent: function () {
                var t, e = this.el;
                return t = "relative" === e.css("position") || "absolute" === e.css("position") || "fixed" === e.css("position") ? e : e.offsetParent()
            },
            hasChildGroup: function (t) {
                return this.options.nested && this.getContainerGroup(t)
            },
            getContainerGroup: function (e) {
                var s = t.data(this.items[e], m);
                if (s === i) {
                    var o = this.$getChildren(this.items[e], "container");
                    if (s = !1, o[0]) {
                        var r = t.extend({}, this.options, {
                            rootGroup: this.rootGroup,
                            group: p++
                        });
                        s = o[n](r).data(n).group
                    }
                    t.data(this.items[e], m, s)
                }
                return s
            },
            $getChildren: function (e, n) {
                var i = this.rootGroup.options,
                    s = i[n + "Path"],
                    o = i[n + "Selector"];
                return e = t(e), s && (e = e.find(s)), e.children(o)
            },
            _serialize: function (e, n) {
                var i = this,
                    s = n ? "item" : "container",
                    o = this.$getChildren(e, s).not(this.options.exclude).map(function () {
                        return i._serialize(t(this), !n)
                    }).get();
                return this.rootGroup.options.serialize(e, o, n)
            },
            traverse: function (e) {
                t.each(this.items || [], function (n) {
                    var i = t.data(this, m);
                    i && i.traverse(e)
                }), e(this)
            },
            _clearDimensions: function () {
                this.itemDimensions = i
            },
            _destroy: function () {
                var e = this;
                this.target.off(c.start, this.handle), this.el.removeData(n), this.options.drop && (this.group.containers = t.grep(this.group.containers, function (t) {
                    return t != e
                })), t.each(this.items || [], function () {
                    t.removeData(this, m)
                })
            }
        };
        var v = {
            enable: function () {
                this.traverse(function (t) {
                    t.disabled = !1
                })
            },
            disable: function () {
                this.traverse(function (t) {
                    t.disabled = !0
                })
            },
            serialize: function () {
                return this._serialize(this.el, !0)
            },
            refresh: function () {
                this.traverse(function (t) {
                    t._clearDimensions()
                })
            },
            destroy: function () {
                this.traverse(function (t) {
                    t._destroy()
                })
            }
        };
        t.extend(u.prototype, v), t.fn[n] = function (e) {
            var s = Array.prototype.slice.call(arguments, 1);
            return this.map(function () {
                var o = t(this),
                    r = o.data(n);
                return r && v[e] ? v[e].apply(r, s) || this : (r || e !== i && "object" != typeof e || o.data(n, new u(o, e)), this)
            })
        }
    }(jQuery, window, "sortable"), ! function (t) {
        "use strict";
        t.fn.succinct = function (e) {
            var n = t.extend({
                size: 240,
                omission: "...",
                ignore: !0
            }, e);
            return this.each(function () {
                var e, i, s = t(this),
                    o = /[!-\/:-@\[-`{-~]$/,
                    r = function () {
                        s.each(function () {
                            e = t(this).html(), e.length > n.size && (i = t.trim(e).substring(0, n.size).split(" ").slice(0, -1).join(" "), n.ignore && (i = i.replace(o, "")), t(this).html(i + n.omission))
                        })
                    };
                r()
            })
        }
    }(jQuery),
    function (t) {
        function e(e, o) {
            if (this.element = e, this.options = t.extend({}, i, o), t(this.element).data("max-height", this.options.maxHeight), t(this.element).data("height-margin", this.options.heightMargin), delete this.options.maxHeight, this.options.embedCSS && !s) {
                var r = ".readmore-js-toggle, .readmore-js-section { " + this.options.sectionCSS + " } .readmore-js-section { overflow: hidden; }";
                ! function (t, e) {
                    var n = t.createElement("style");
                    n.type = "text/css", n.styleSheet ? n.styleSheet.cssText = e : n.appendChild(t.createTextNode(e)), t.getElementsByTagName("head")[0].appendChild(n)
                }(document, r), s = !0
            }
            this._defaults = i, this._name = n, this.init()
        }
        var n = "readmore",
            i = {
                speed: 100,
                maxHeight: 200,
                heightMargin: 16,
                moreLink: '<a href="#">Read More</a>',
                lessLink: '<a href="#">Close</a>',
                embedCSS: !0,
                sectionCSS: "display: block; width: 100%;",
                startOpen: !1,
                expandedClass: "readmore-js-expanded",
                collapsedClass: "readmore-js-collapsed",
                beforeToggle: function () {},
                afterToggle: function () {}
            },
            s = !1;
        e.prototype = {
            init: function () {
                var e = this;
                t(this.element).each(function () {
                    var n = t(this),
                        i = n.css("max-height").replace(/[^-\d\.]/g, "") > n.data("max-height") ? n.css("max-height").replace(/[^-\d\.]/g, "") : n.data("max-height"),
                        s = n.data("height-margin");
                    if ("none" != n.css("max-height") && n.css("max-height", "none"), e.setBoxHeight(n), n.outerHeight(!0) <= i + s) return !0;
                    n.addClass("readmore-js-section " + e.options.collapsedClass).data("collapsedHeight", i);
                    var o = e.options.startOpen ? e.options.lessLink : e.options.moreLink;
                    n.after(t(o).on("click", function (t) {
                        e.toggleSlider(this, n, t)
                    }).addClass("readmore-js-toggle")), e.options.startOpen || n.css({
                        height: i
                    })
                }), t(window).on("resize", function (t) {
                    e.resizeBoxes()
                })
            },
            toggleSlider: function (e, n, i) {
                i.preventDefault();
                var s = this,
                    o = newLink = sectionClass = "",
                    r = !1,
                    a = t(n).data("collapsedHeight");
                t(n).height() <= a ? (o = t(n).data("expandedHeight") + "px", newLink = "lessLink", r = !0, sectionClass = s.options.expandedClass) : (o = a, newLink = "moreLink", sectionClass = s.options.collapsedClass), s.options.beforeToggle(e, n, r), t(n).animate({
                    height: o
                }, {
                    duration: s.options.speed,
                    complete: function () {
                        s.options.afterToggle(e, n, r), t(e).replaceWith(t(s.options[newLink]).on("click", function (t) {
                            s.toggleSlider(this, n, t)
                        }).addClass("readmore-js-toggle")), t(this).removeClass(s.options.collapsedClass + " " + s.options.expandedClass).addClass(sectionClass)
                    }
                })
            },
            setBoxHeight: function (t) {
                var e = t.clone().css({
                        height: "auto",
                        width: t.width(),
                        overflow: "hidden"
                    }).insertAfter(t),
                    n = e.outerHeight(!0);
                e.remove(), t.data("expandedHeight", n)
            },
            resizeBoxes: function () {
                var e = this;
                t(".readmore-js-section").each(function () {
                    var n = t(this);
                    e.setBoxHeight(n), (n.height() > n.data("expandedHeight") || n.hasClass(e.options.expandedClass) && n.height() < n.data("expandedHeight")) && n.css("height", n.data("expandedHeight"))
                })
            },
            destroy: function () {
                var e = this;
                t(this.element).each(function () {
                    var n = t(this);
                    n.removeClass("readmore-js-section " + e.options.collapsedClass + " " + e.options.expandedClass).css({
                        "max-height": "",
                        height: "auto"
                    }).next(".readmore-js-toggle").remove(), n.removeData()
                })
            }
        }, t.fn[n] = function (i) {
            var s = arguments;
            return void 0 === i || "object" == typeof i ? this.each(function () {
                if (t.data(this, "plugin_" + n)) {
                    var s = t.data(this, "plugin_" + n);
                    s.destroy.apply(s)
                }
                t.data(this, "plugin_" + n, new e(this, i))
            }) : "string" == typeof i && "_" !== i[0] && "init" !== i ? this.each(function () {
                var o = t.data(this, "plugin_" + n);
                o instanceof e && "function" == typeof o[i] && o[i].apply(o, Array.prototype.slice.call(s, 1))
            }) : void 0
        }
    }(jQuery);
var Base = function () {};
Base.extend = function (t, e) {
    "use strict";
    var n = Base.prototype.extend;
    Base._prototyping = !0;
    var i = new this;
    n.call(i, t), i.base = function () {}, delete Base._prototyping;
    var s = i.constructor,
        o = i.constructor = function () {
            if (!Base._prototyping)
                if (this._constructing || this.constructor == o) this._constructing = !0, s.apply(this, arguments), delete this._constructing;
                else if (null !== arguments[0]) return (arguments[0].extend || n).call(arguments[0], i)
        };
    return o.ancestor = this, o.extend = this.extend, o.forEach = this.forEach, o.implement = this.implement, o.prototype = i, o.toString = this.toString, o.valueOf = function (t) {
        return "object" == t ? o : s.valueOf()
    }, n.call(o, e), "function" == typeof o.init && o.init(), o
}, Base.prototype = {
    extend: function (t, e) {
        if (arguments.length > 1) {
            var n = this[t];
            if (n && "function" == typeof e && (!n.valueOf || n.valueOf() != e.valueOf()) && /\bbase\b/.test(e)) {
                var i = e.valueOf();
                e = function () {
                    var t = this.base || Base.prototype.base;
                    this.base = n;
                    var e = i.apply(this, arguments);
                    return this.base = t, e
                }, e.valueOf = function (t) {
                    return "object" == t ? e : i
                }, e.toString = Base.toString
            }
            this[t] = e
        } else if (t) {
            var s = Base.prototype.extend;
            Base._prototyping || "function" == typeof this || (s = this.extend || s);
            for (var o = {
                    toSource: null
                }, r = ["constructor", "toString", "valueOf"], a = Base._prototyping ? 0 : 1; l = r[a++];) t[l] != o[l] && s.call(this, l, t[l]);
            for (var l in t) o[l] || s.call(this, l, t[l])
        }
        return this
    }
}, Base = Base.extend({
    constructor: function () {
        this.extend(arguments[0])
    }
}, {
    ancestor: Object,
    version: "1.1",
    forEach: function (t, e, n) {
        for (var i in t) void 0 === this.prototype[i] && e.call(n, t[i], i, t)
    },
    implement: function () {
        for (var t = 0; t < arguments.length; t++) "function" == typeof arguments[t] ? arguments[t](this.prototype) : this.prototype.extend(arguments[t]);
        return this
    },
    toString: function () {
        return String(this.valueOf())
    }
});
var FlipClock;
! function (t) {
    "use strict";
    FlipClock = function (t, e, n) {
        return e instanceof Object && e instanceof Date == !1 && (n = e, e = 0), new FlipClock.Factory(t, e, n)
    }, FlipClock.Lang = {}, FlipClock.Base = Base.extend({
        buildDate: "2014-12-12",
        version: "0.7.7",
        constructor: function (e, n) {
            "object" != typeof e && (e = {}), "object" != typeof n && (n = {}), this.setOptions(t.extend(!0, {}, e, n))
        },
        callback: function (t) {
            if ("function" == typeof t) {
                for (var e = [], n = 1; n <= arguments.length; n++) arguments[n] && e.push(arguments[n]);
                t.apply(this, e)
            }
        },
        log: function (t) {
            window.console && console.log && console.log(t)
        },
        getOption: function (t) {
            return this[t] ? this[t] : !1
        },
        getOptions: function () {
            return this
        },
        setOption: function (t, e) {
            this[t] = e
        },
        setOptions: function (t) {
            for (var e in t) "undefined" != typeof t[e] && this.setOption(e, t[e])
        }
    })
}(jQuery),
function (t) {
    "use strict";
    FlipClock.Face = FlipClock.Base.extend({
        autoStart: !0,
        dividers: [],
        factory: !1,
        lists: [],
        constructor: function (t, e) {
            this.dividers = [], this.lists = [], this.base(e), this.factory = t
        },
        build: function () {
            this.autoStart && this.start()
        },
        createDivider: function (e, n, i) {
            "boolean" != typeof n && n || (i = n, n = e);
            var s = ['<span class="' + this.factory.classes.dot + ' top"></span>', '<span class="' + this.factory.classes.dot + ' bottom"></span>'].join("");
            i && (s = ""), e = this.factory.localize(e);
            var o = ['<span class="' + this.factory.classes.divider + " " + (n ? n : "").toLowerCase() + '">', '<span class="' + this.factory.classes.label + '">' + (e ? e : "") + "</span>", s, "</span>"],
                r = t(o.join(""));
            return this.dividers.push(r), r
        },
        createList: function (t, e) {
            "object" == typeof t && (e = t, t = 0);
            var n = new FlipClock.List(this.factory, t, e);
            return this.lists.push(n), n
        },
        reset: function () {
            this.factory.time = new FlipClock.Time(this.factory, this.factory.original ? Math.round(this.factory.original) : 0, {
                minimumDigits: this.factory.minimumDigits
            }), this.flip(this.factory.original, !1)
        },
        appendDigitToClock: function (t) {
            t.$el.append(!1)
        },
        addDigit: function (t) {
            var e = this.createList(t, {
                classes: {
                    active: this.factory.classes.active,
                    before: this.factory.classes.before,
                    flip: this.factory.classes.flip
                }
            });
            this.appendDigitToClock(e)
        },
        start: function () {},
        stop: function () {},
        autoIncrement: function () {
            this.factory.countdown ? this.decrement() : this.increment()
        },
        increment: function () {
            this.factory.time.addSecond()
        },
        decrement: function () {
            0 == this.factory.time.getTimeSeconds() ? this.factory.stop() : this.factory.time.subSecond()
        },
        flip: function (e, n) {
            var i = this;
            t.each(e, function (t, e) {
                var s = i.lists[t];
                s ? (n || e == s.digit || s.play(), s.select(e)) : i.addDigit(e)
            })
        }
    })
}(jQuery),
function (t) {
    "use strict";
    FlipClock.Factory = FlipClock.Base.extend({
        animationRate: 1e3,
        autoStart: !0,
        callbacks: {
            destroy: !1,
            create: !1,
            init: !1,
            interval: !1,
            start: !1,
            stop: !1,
            reset: !1
        },
        classes: {
            active: "flip-clock-active",
            before: "flip-clock-before",
            divider: "flip-clock-divider",
            dot: "flip-clock-dot",
            label: "flip-clock-label",
            flip: "flip",
            play: "play",
            wrapper: "flip-clock-wrapper"
        },
        clockFace: "HourlyCounter",
        countdown: !1,
        defaultClockFace: "HourlyCounter",
        defaultLanguage: "english",
        $el: !1,
        face: !0,
        lang: !1,
        language: "english",
        minimumDigits: 0,
        original: !1,
        running: !1,
        time: !1,
        timer: !1,
        $wrapper: !1,
        constructor: function (e, n, i) {
            i || (i = {}), this.lists = [], this.running = !1, this.base(i), this.$el = t(e).addClass(this.classes.wrapper), this.$wrapper = this.$el, this.original = n instanceof Date ? n : n ? Math.round(n) : 0, this.time = new FlipClock.Time(this, this.original, {
                minimumDigits: this.minimumDigits,
                animationRate: this.animationRate
            }), this.timer = new FlipClock.Timer(this, i), this.loadLanguage(this.language), this.loadClockFace(this.clockFace, i), this.autoStart && this.start()
        },
        loadClockFace: function (t, e) {
            var n, i = "Face",
                s = !1;
            return t = t.ucfirst() + i, this.face.stop && (this.stop(), s = !0), this.$el.html(""), this.time.minimumDigits = this.minimumDigits, n = FlipClock[t] ? new FlipClock[t](this, e) : new FlipClock[this.defaultClockFace + i](this, e), n.build(), this.face = n, s && this.start(), this.face
        },
        loadLanguage: function (t) {
            var e;
            return e = FlipClock.Lang[t.ucfirst()] ? FlipClock.Lang[t.ucfirst()] : FlipClock.Lang[t] ? FlipClock.Lang[t] : FlipClock.Lang[this.defaultLanguage], this.lang = e
        },
        localize: function (t, e) {
            var n = this.lang;
            if (!t) return null;
            var i = t.toLowerCase();
            return "object" == typeof e && (n = e), n && n[i] ? n[i] : t
        },
        start: function (t) {
            var e = this;
            e.running || e.countdown && !(e.countdown && e.time.time > 0) ? e.log("Trying to start timer when countdown already at 0") : (e.face.start(e.time), e.timer.start(function () {
                e.flip(), "function" == typeof t && t()
            }))
        },
        stop: function (t) {
            this.face.stop(), this.timer.stop(t);
            for (var e in this.lists) this.lists.hasOwnProperty(e) && this.lists[e].stop()
        },
        reset: function (t) {
            this.timer.reset(t), this.face.reset()
        },
        setTime: function (t) {
            this.time.time = t, this.flip(!0)
        },
        getTime: function (t) {
            return this.time
        },
        setCountdown: function (t) {
            var e = this.running;
            this.countdown = t ? !0 : !1, e && (this.stop(), this.start())
        },
        flip: function (t) {
            this.face.flip(!1, t)
        }
    })
}(jQuery),
function (t) {
    "use strict";
    FlipClock.List = FlipClock.Base.extend({
        digit: 0,
        classes: {
            active: "flip-clock-active",
            before: "flip-clock-before",
            flip: "flip"
        },
        factory: !1,
        $el: !1,
        $obj: !1,
        items: [],
        lastDigit: 0,
        constructor: function (t, e, n) {
            this.factory = t, this.digit = e, this.lastDigit = e, this.$el = this.createList(), this.$obj = this.$el, e > 0 && this.select(e), this.factory.$el.append(this.$el)
        },
        select: function (t) {
            if ("undefined" == typeof t ? t = this.digit : this.digit = t, this.digit != this.lastDigit) {
                var e = this.$el.find("." + this.classes.before).removeClass(this.classes.before);
                this.$el.find("." + this.classes.active).removeClass(this.classes.active).addClass(this.classes.before), this.appendListItem(this.classes.active, this.digit), e.remove(), this.lastDigit = this.digit
            }
        },
        play: function () {
            this.$el.addClass(this.factory.classes.play)
        },
        stop: function () {
            var t = this;
            setTimeout(function () {
                t.$el.removeClass(t.factory.classes.play)
            }, this.factory.timer.interval)
        },
        createListItem: function (t, e) {
            return ['<li class="' + (t ? t : "") + '">', '<a href="#">', '<div class="up">', '<div class="shadow"></div>', '<div class="inn">' + (e ? e : "") + "</div>", "</div>", '<div class="down">', '<div class="shadow"></div>', '<div class="inn">' + (e ? e : "") + "</div>", "</div>", "</a>", "</li>"].join("")
        },
        appendListItem: function (t, e) {
            var n = this.createListItem(t, e);
            this.$el.append(n)
        },
        createList: function () {
            var e = this.getPrevDigit() ? this.getPrevDigit() : this.digit,
                n = t(['<ul class="' + this.classes.flip + " " + (this.factory.running ? this.factory.classes.play : "") + '">', this.createListItem(this.classes.before, e), this.createListItem(this.classes.active, this.digit), "</ul>"].join(""));
            return n
        },
        getNextDigit: function () {
            return 9 == this.digit ? 0 : this.digit + 1
        },
        getPrevDigit: function () {
            return 0 == this.digit ? 9 : this.digit - 1
        }
    })
}(jQuery),
function (t) {
    "use strict";
    String.prototype.ucfirst = function () {
        return this.substr(0, 1).toUpperCase() + this.substr(1)
    }, t.fn.FlipClock = function (e, n) {
        return new FlipClock(t(this), e, n)
    }, t.fn.flipClock = function (e, n) {
        return t.fn.FlipClock(e, n)
    }
}(jQuery),
function (t) {
    "use strict";
    FlipClock.Time = FlipClock.Base.extend({
        time: 0,
        factory: !1,
        minimumDigits: 0,
        constructor: function (t, e, n) {
            "object" != typeof n && (n = {}), n.minimumDigits || (n.minimumDigits = t.minimumDigits), this.base(n), this.factory = t, e && (this.time = e)
        },
        convertDigitsToArray: function (t) {
            var e = [];
            t = t.toString();
            for (var n = 0; n < t.length; n++) t[n].match(/^\d*$/g) && e.push(t[n]);
            return e
        },
        digit: function (t) {
            var e = this.toString(),
                n = e.length;
            return e[n - t] ? e[n - t] : !1
        },
        digitize: function (e) {
            var n = [];
            if (t.each(e, function (t, e) {
                    e = e.toString(), 1 == e.length && (e = "0" + e);
                    for (var i = 0; i < e.length; i++) n.push(e.charAt(i))
                }), n.length > this.minimumDigits && (this.minimumDigits = n.length), this.minimumDigits > n.length)
                for (var i = n.length; i < this.minimumDigits; i++) n.unshift("0");
            return n
        },
        getDateObject: function () {
            return this.time instanceof Date ? this.time : new Date((new Date).getTime() + 1e3 * this.getTimeSeconds())
        },
        getDayCounter: function (t) {
            var e = [this.getDays(), this.getHours(!0), this.getMinutes(!0)];
            return t && e.push(this.getSeconds(!0)), this.digitize(e)
        },
        getDays: function (t) {
            var e = this.getTimeSeconds() / 60 / 60 / 24;
            return t && (e %= 7), Math.floor(e)
        },
        getHourCounter: function () {
            var t = this.digitize([this.getHours(), this.getMinutes(!0), this.getSeconds(!0)]);
            return t
        },
        getHourly: function () {
            return this.getHourCounter()
        },
        getHours: function (t) {
            var e = this.getTimeSeconds() / 60 / 60;
            return t && (e %= 24), Math.floor(e)
        },
        getMilitaryTime: function (t, e) {
            "undefined" == typeof e && (e = !0), t || (t = this.getDateObject());
            var n = [t.getHours(), t.getMinutes()];
            return e === !0 && n.push(t.getSeconds()), this.digitize(n)
        },
        getMinutes: function (t) {
            var e = this.getTimeSeconds() / 60;
            return t && (e %= 60), Math.floor(e)
        },
        getMinuteCounter: function () {
            var t = this.digitize([this.getMinutes(), this.getSeconds(!0)]);
            return t
        },
        getTimeSeconds: function (t) {
            return t || (t = new Date), this.time instanceof Date ? this.factory.countdown ? Math.max(this.time.getTime() / 1e3 - t.getTime() / 1e3, 0) : t.getTime() / 1e3 - this.time.getTime() / 1e3 : this.time
        },
        getTime: function (t, e) {
            "undefined" == typeof e && (e = !0), t || (t = this.getDateObject()), console.log(t);
            var n = t.getHours(),
                i = [n > 12 ? n - 12 : 0 === n ? 12 : n, t.getMinutes()];
            return e === !0 && i.push(t.getSeconds()), this.digitize(i)
        },
        getSeconds: function (t) {
            var e = this.getTimeSeconds();
            return t && (60 == e ? e = 0 : e %= 60), Math.ceil(e)
        },
        getWeeks: function (t) {
            var e = this.getTimeSeconds() / 60 / 60 / 24 / 7;
            return t && (e %= 52), Math.floor(e)
        },
        removeLeadingZeros: function (e, n) {
            var i = 0,
                s = [];
            return t.each(n, function (t, o) {
                e > t ? i += parseInt(n[t], 10) : s.push(n[t])
            }), 0 === i ? s : n
        },
        addSeconds: function (t) {
            this.time instanceof Date ? this.time.setSeconds(this.time.getSeconds() + t) : this.time += t
        },
        addSecond: function () {
            this.addSeconds(1)
        },
        subSeconds: function (t) {
            this.time instanceof Date ? this.time.setSeconds(this.time.getSeconds() - t) : this.time -= t
        },
        subSecond: function () {
            this.subSeconds(1)
        },
        toString: function () {
            return this.getTimeSeconds().toString()
        }
    })
}(jQuery),
function (t) {
    "use strict";
    FlipClock.Timer = FlipClock.Base.extend({
        callbacks: {
            destroy: !1,
            create: !1,
            init: !1,
            interval: !1,
            start: !1,
            stop: !1,
            reset: !1
        },
        count: 0,
        factory: !1,
        interval: 1e3,
        animationRate: 1e3,
        constructor: function (t, e) {
            this.base(e), this.factory = t, this.callback(this.callbacks.init), this.callback(this.callbacks.create)
        },
        getElapsed: function () {
            return this.count * this.interval
        },
        getElapsedTime: function () {
            return new Date(this.time + this.getElapsed())
        },
        reset: function (t) {
            clearInterval(this.timer), this.count = 0, this._setInterval(t), this.callback(this.callbacks.reset)
        },
        start: function (t) {
            this.factory.running = !0, this._createTimer(t), this.callback(this.callbacks.start)
        },
        stop: function (t) {
            this.factory.running = !1, this._clearInterval(t), this.callback(this.callbacks.stop), this.callback(t)
        },
        _clearInterval: function () {
            clearInterval(this.timer)
        },
        _createTimer: function (t) {
            this._setInterval(t)
        },
        _destroyTimer: function (t) {
            this._clearInterval(), this.timer = !1, this.callback(t), this.callback(this.callbacks.destroy)
        },
        _interval: function (t) {
            this.callback(this.callbacks.interval), this.callback(t), this.count++
        },
        _setInterval: function (t) {
            var e = this;
            e._interval(t), e.timer = setInterval(function () {
                e._interval(t)
            }, this.interval)
        }
    })
}(jQuery),
function (t) {
    FlipClock.TwentyFourHourClockFace = FlipClock.Face.extend({
        constructor: function (t, e) {
            this.base(t, e)
        },
        build: function (e) {
            var n = this,
                i = this.factory.$el.find("ul");
            this.factory.time.time || (this.factory.original = new Date, this.factory.time = new FlipClock.Time(this.factory, this.factory.original));
            var e = e ? e : this.factory.time.getMilitaryTime(!1, this.showSeconds);
            e.length > i.length && t.each(e, function (t, e) {
                n.createList(e)
            }), this.createDivider(), this.createDivider(), t(this.dividers[0]).insertBefore(this.lists[this.lists.length - 2].$el), t(this.dividers[1]).insertBefore(this.lists[this.lists.length - 4].$el), this.base()
        },
        flip: function (t, e) {
            this.autoIncrement(), t = t ? t : this.factory.time.getMilitaryTime(!1, this.showSeconds), this.base(t, e)
        }
    })
}(jQuery),
function (t) {
    FlipClock.CounterFace = FlipClock.Face.extend({
        shouldAutoIncrement: !1,
        constructor: function (t, e) {
            "object" != typeof e && (e = {}), t.autoStart = e.autoStart ? !0 : !1, e.autoStart && (this.shouldAutoIncrement = !0), t.increment = function () {
                t.countdown = !1, t.setTime(t.getTime().getTimeSeconds() + 1)
            }, t.decrement = function () {
                t.countdown = !0;
                var e = t.getTime().getTimeSeconds();
                e > 0 && t.setTime(e - 1)
            }, t.setValue = function (e) {
                t.setTime(e)
            }, t.setCounter = function (e) {
                t.setTime(e)
            }, this.base(t, e)
        },
        build: function () {
            var e = this,
                n = this.factory.$el.find("ul"),
                i = this.factory.getTime().digitize([this.factory.getTime().time]);
            i.length > n.length && t.each(i, function (t, n) {
                var i = e.createList(n);
                i.select(n)
            }), t.each(this.lists, function (t, e) {
                e.play()
            }), this.base()
        },
        flip: function (t, e) {
            this.shouldAutoIncrement && this.autoIncrement(), t || (t = this.factory.getTime().digitize([this.factory.getTime().time])), this.base(t, e)
        },
        reset: function () {
            this.factory.time = new FlipClock.Time(this.factory, this.factory.original ? Math.round(this.factory.original) : 0), this.flip()
        }
    })
}(jQuery),
function (t) {
    FlipClock.DailyCounterFace = FlipClock.Face.extend({
        showSeconds: !0,
        constructor: function (t, e) {
            this.base(t, e)
        },
        build: function (e) {
            var n = this,
                i = this.factory.$el.find("ul"),
                s = 0;
            e = e ? e : this.factory.time.getDayCounter(this.showSeconds), e.length > i.length && t.each(e, function (t, e) {
                n.createList(e)
            }), this.showSeconds ? t(this.createDivider("Seconds")).insertBefore(this.lists[this.lists.length - 2].$el) : s = 2, t(this.createDivider("Minutes")).insertBefore(this.lists[this.lists.length - 4 + s].$el), t(this.createDivider("Hours")).insertBefore(this.lists[this.lists.length - 6 + s].$el), t(this.createDivider("Days", !0)).insertBefore(this.lists[0].$el), this.base()
        },
        flip: function (t, e) {
            t || (t = this.factory.time.getDayCounter(this.showSeconds)), this.autoIncrement(), this.base(t, e)
        }
    })
}(jQuery),
function (t) {
    FlipClock.HourlyCounterFace = FlipClock.Face.extend({
        constructor: function (t, e) {
            this.base(t, e)
        },
        build: function (e, n) {
            var i = this,
                s = this.factory.$el.find("ul");
            n = n ? n : this.factory.time.getHourCounter(), n.length > s.length && t.each(n, function (t, e) {
                i.createList(e)
            }), t(this.createDivider("Seconds")).insertBefore(this.lists[this.lists.length - 2].$el), t(this.createDivider("Minutes")).insertBefore(this.lists[this.lists.length - 4].$el), e || t(this.createDivider("Hours", !0)).insertBefore(this.lists[0].$el), this.base()
        },
        flip: function (t, e) {
            t || (t = this.factory.time.getHourCounter()), this.autoIncrement(), this.base(t, e)
        },
        appendDigitToClock: function (t) {
            this.base(t), this.dividers[0].insertAfter(this.dividers[0].next())
        }
    })
}(jQuery),
function (t) {
    FlipClock.MinuteCounterFace = FlipClock.HourlyCounterFace.extend({
        clearExcessDigits: !1,
        constructor: function (t, e) {
            this.base(t, e)
        },
        build: function () {
            this.base(!0, this.factory.time.getMinuteCounter())
        },
        flip: function (t, e) {
            t || (t = this.factory.time.getMinuteCounter()), this.base(t, e)
        }
    })
}(jQuery),
function (t) {
    FlipClock.TwelveHourClockFace = FlipClock.TwentyFourHourClockFace.extend({
        meridium: !1,
        meridiumText: "AM",
        build: function () {
            var e = this.factory.time.getTime(!1, this.showSeconds);
            this.base(e), this.meridiumText = this.getMeridium(), this.meridium = t(['<ul class="flip-clock-meridium">', "<li>", '<a href="#">' + this.meridiumText + "</a>", "</li>", "</ul>"].join("")), this.meridium.insertAfter(this.lists[this.lists.length - 1].$el)
        },
        flip: function (t, e) {
            this.meridiumText != this.getMeridium() && (this.meridiumText = this.getMeridium(), this.meridium.find("a").html(this.meridiumText)), this.base(this.factory.time.getTime(!1, this.showSeconds), e)
        },
        getMeridium: function () {
            return (new Date).getHours() >= 12 ? "PM" : "AM"
        },
        isPM: function () {
            return "PM" == this.getMeridium() ? !0 : !1
        },
        isAM: function () {
            return "AM" == this.getMeridium() ? !0 : !1
        }
    })
}(jQuery),
function (t) {
    FlipClock.Lang.Arabic = {
        years: "\u0633\u0646\u0648\u0627\u062a",
        months: "\u0634\u0647\u0648\u0631",
        days: "\u0623\u064a\u0627\u0645",
        hours: "\u0633\u0627\u0639\u0627\u062a",
        minutes: "\u062f\u0642\u0627\u0626\u0642",
        seconds: "\u062b\u0648\u0627\u0646\u064a"
    }, FlipClock.Lang.ar = FlipClock.Lang.Arabic, FlipClock.Lang["ar-ar"] = FlipClock.Lang.Arabic, FlipClock.Lang.arabic = FlipClock.Lang.Arabic
}(jQuery),
function (t) {
    FlipClock.Lang.Danish = {
        years: "\xc5r",
        months: "M\xe5neder",
        days: "Dage",
        hours: "Timer",
        minutes: "Minutter",
        seconds: "Sekunder"
    }, FlipClock.Lang.da = FlipClock.Lang.Danish, FlipClock.Lang["da-dk"] = FlipClock.Lang.Danish, FlipClock.Lang.danish = FlipClock.Lang.Danish
}(jQuery),
function (t) {
    FlipClock.Lang.German = {
        years: "Jahre",
        months: "Monate",
        days: "Tage",
        hours: "Stunden",
        minutes: "Minuten",
        seconds: "Sekunden"
    }, FlipClock.Lang.de = FlipClock.Lang.German, FlipClock.Lang["de-de"] = FlipClock.Lang.German, FlipClock.Lang.german = FlipClock.Lang.German
}(jQuery),
function (t) {
    FlipClock.Lang.English = {
        years: "Years",
        months: "Months",
        days: "Days",
        hours: "Hours",
        minutes: "Minutes",
        seconds: "Seconds"
    }, FlipClock.Lang.en = FlipClock.Lang.English, FlipClock.Lang["en-us"] = FlipClock.Lang.English, FlipClock.Lang.english = FlipClock.Lang.English
}(jQuery),
function (t) {
    FlipClock.Lang.Spanish = {
        years: "A&#241;os",
        months: "Meses",
        days: "D&#205;as",
        hours: "Horas",
        minutes: "Minutos",
        seconds: "Segundo"
    }, FlipClock.Lang.es = FlipClock.Lang.Spanish, FlipClock.Lang["es-es"] = FlipClock.Lang.Spanish, FlipClock.Lang.spanish = FlipClock.Lang.Spanish
}(jQuery),
function (t) {
    FlipClock.Lang.Finnish = {
        years: "Vuotta",
        months: "Kuukautta",
        days: "P\xe4iv\xe4\xe4",
        hours: "Tuntia",
        minutes: "Minuuttia",
        seconds: "Sekuntia"
    }, FlipClock.Lang.fi = FlipClock.Lang.Finnish, FlipClock.Lang["fi-fi"] = FlipClock.Lang.Finnish, FlipClock.Lang.finnish = FlipClock.Lang.Finnish
}(jQuery),
function (t) {
    FlipClock.Lang.French = {
        years: "Ans",
        months: "Mois",
        days: "Jours",
        hours: "Heures",
        minutes: "Minutes",
        seconds: "Secondes"
    }, FlipClock.Lang.fr = FlipClock.Lang.French, FlipClock.Lang["fr-ca"] = FlipClock.Lang.French, FlipClock.Lang.french = FlipClock.Lang.French
}(jQuery),
function (t) {
    FlipClock.Lang.Italian = {
        years: "Anni",
        months: "Mesi",
        days: "Giorni",
        hours: "Ore",
        minutes: "Minuti",
        seconds: "Secondi"
    }, FlipClock.Lang.it = FlipClock.Lang.Italian, FlipClock.Lang["it-it"] = FlipClock.Lang.Italian, FlipClock.Lang.italian = FlipClock.Lang.Italian
}(jQuery),
function (t) {
    FlipClock.Lang.Latvian = {
        years: "Gadi",
        months: "M\u0113ne\u0161i",
        days: "Dienas",
        hours: "Stundas",
        minutes: "Min\u016btes",
        seconds: "Sekundes"
    }, FlipClock.Lang.lv = FlipClock.Lang.Latvian, FlipClock.Lang["lv-lv"] = FlipClock.Lang.Latvian, FlipClock.Lang.latvian = FlipClock.Lang.Latvian
}(jQuery),
function (t) {
    FlipClock.Lang.Dutch = {
        years: "Jaren",
        months: "Maanden",
        days: "Dagen",
        hours: "Uren",
        minutes: "Minuten",
        seconds: "Seconden"
    }, FlipClock.Lang.nl = FlipClock.Lang.Dutch, FlipClock.Lang["nl-be"] = FlipClock.Lang.Dutch, FlipClock.Lang.dutch = FlipClock.Lang.Dutch
}(jQuery),
function (t) {
    FlipClock.Lang.Norwegian = {
        years: "\xc5r",
        months: "M\xe5neder",
        days: "Dager",
        hours: "Timer",
        minutes: "Minutter",
        seconds: "Sekunder"
    }, FlipClock.Lang.no = FlipClock.Lang.Norwegian, FlipClock.Lang.nb = FlipClock.Lang.Norwegian, FlipClock.Lang["no-nb"] = FlipClock.Lang.Norwegian, FlipClock.Lang.norwegian = FlipClock.Lang.Norwegian
}(jQuery),
function (t) {
    FlipClock.Lang.Portuguese = {
        years: "Anos",
        months: "Meses",
        days: "Dias",
        hours: "Horas",
        minutes: "Minutos",
        seconds: "Segundos"
    }, FlipClock.Lang.pt = FlipClock.Lang.Portuguese, FlipClock.Lang["pt-br"] = FlipClock.Lang.Portuguese, FlipClock.Lang.portuguese = FlipClock.Lang.Portuguese
}(jQuery),
function (t) {
    FlipClock.Lang.Russian = {
        years: "\u043b\u0435\u0442",
        months: "\u043c\u0435\u0441\u044f\u0446\u0435\u0432",
        days: "\u0434\u043d\u0435\u0439",
        hours: "\u0447\u0430\u0441\u043e\u0432",
        minutes: "\u043c\u0438\u043d\u0443\u0442",
        seconds: "\u0441\u0435\u043a\u0443\u043d\u0434"
    }, FlipClock.Lang.ru = FlipClock.Lang.Russian, FlipClock.Lang["ru-ru"] = FlipClock.Lang.Russian, FlipClock.Lang.russian = FlipClock.Lang.Russian
}(jQuery),
function (t) {
    FlipClock.Lang.Swedish = {
        years: "\xc5r",
        months: "M\xe5nader",
        days: "Dagar",
        hours: "Timmar",
        minutes: "Minuter",
        seconds: "Sekunder"
    }, FlipClock.Lang.sv = FlipClock.Lang.Swedish, FlipClock.Lang["sv-se"] = FlipClock.Lang.Swedish, FlipClock.Lang.swedish = FlipClock.Lang.Swedish
}(jQuery), jQuery.fn.fastLiveFilter = function (t, e) {
        e = e || {}, t = jQuery(t);
        var n, i = this,
            s = "",
            o = e.timeout || 0,
            r = e.callback || function () {},
            a = t.children(),
            l = a.length,
            u = l > 0 ? a[0].style.display : "block";
        return r(l), i.change(function () {
            for (var t, n, s = i.val().toLowerCase(), o = 0, c = 0; l > c; c++) t = a[c], n = e.selector ? $(t).find(e.selector).text() : t.textContent || t.innerText || "", n.toLowerCase().indexOf(s) >= 0 ? ("none" == t.style.display && (t.style.display = u, $(t).removeClass("hidden")), o++) : "none" != t.style.display && (t.style.display = "none", $(t).addClass("hidden"));
            return r(o), !1
        }).keydown(function () {
            clearTimeout(n), n = setTimeout(function () {
                i.val() !== s && (s = i.val(), i.change())
            }, o)
        }), this
    },
    function (t) {
        t.fn.bootstrapFileInput = function () {
            this.each(function (e, n) {
                var i = t(n);
                if ("undefined" == typeof i.attr("data-bfi-disabled")) {
                    var s = "Browse";
                    "undefined" != typeof i.attr("title") && (s = i.attr("title"));
                    var o = "";
                    i.attr("class") && (o = " " + i.attr("class")), i.wrap('<a class="file-input-wrapper btn btn-default ' + o + '"></a>').parent().prepend(t("<span></span>").html(s))
                }
            }).promise().done(function () {
                t(".file-input-wrapper").mousemove(function (e) {
                    var n, i, s, o, r, a, l, u;
                    i = t(this), n = i.find("input"), s = i.offset().left, o = i.offset().top, r = n.width(), a = n.height(), l = e.pageX, u = e.pageY, moveInputX = l - s - r + 20, moveInputY = u - o - a / 2, n.css({
                        left: moveInputX,
                        top: moveInputY
                    })
                }), t("body").on("change", ".file-input-wrapper input[type=file]", function () {
                    var e;
                    e = t(this).val(), t(this).parent().next(".file-input-name").remove(), e = t(this).prop("files") && t(this).prop("files").length > 1 ? t(this)[0].files.length + " files" : e.substring(e.lastIndexOf("\\") + 1, e.length);
                    var n = t(this).data("filename-placement") || "outside";
                    "inside" === n ? (t(this).siblings("span").html(e), t(this).attr("title", e)) : "outside" === n ? t(this).parent().after('<span class="file-input-name">' + e + "</span>") : console.log("Error in bootstrap-file-input plugin : unknown placement [" + n + "] for selected filename")
                })
            })
        };
        var e = "<style>.file-input-wrapper { overflow: hidden; position: relative; cursor: pointer; z-index: 1; }.file-input-wrapper input[type=file], .file-input-wrapper input[type=file]:focus, .file-input-wrapper input[type=file]:hover { position: absolute; top: 0; left: 0; cursor: pointer; opacity: 0; filter: alpha(opacity=0); z-index: 99; outline: 0; }.file-input-name { margin-left: 8px; }</style>";
        t("link[rel=stylesheet]").eq(0).before(e)
    }(jQuery),
    function () {
        var t, e, n, i, s, o = {}.hasOwnProperty,
            r = function (t, e) {
                function n() {
                    this.constructor = t
                }
                for (var i in e) o.call(e, i) && (t[i] = e[i]);
                return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
            };
        i = function () {
            function t() {
                this.options_index = 0, this.parsed = []
            }
            return t.prototype.add_node = function (t) {
                return "OPTGROUP" === t.nodeName.toUpperCase() ? this.add_group(t) : this.add_option(t)
            }, t.prototype.add_group = function (t) {
                var e, n, i, s, o, r;
                for (e = this.parsed.length, this.parsed.push({
                        array_index: e,
                        group: !0,
                        label: this.escapeExpression(t.label),
                        title: t.title ? t.title : void 0,
                        children: 0,
                        disabled: t.disabled,
                        classes: t.className
                    }), o = t.childNodes, r = [], i = 0, s = o.length; s > i; i++) n = o[i], r.push(this.add_option(n, e, t.disabled));
                return r
            }, t.prototype.add_option = function (t, e, n) {
                return "OPTION" === t.nodeName.toUpperCase() ? ("" !== t.text ? (null != e && (this.parsed[e].children += 1), this.parsed.push({
                    array_index: this.parsed.length,
                    options_index: this.options_index,
                    value: t.value,
                    text: t.text,
                    html: t.innerHTML,
                    title: t.title ? t.title : void 0,
                    selected: t.selected,
                    disabled: n === !0 ? n : t.disabled,
                    group_array_index: e,
                    group_label: null != e ? this.parsed[e].label : null,
                    classes: t.className,
                    style: t.style.cssText
                })) : this.parsed.push({
                    array_index: this.parsed.length,
                    options_index: this.options_index,
                    empty: !0
                }), this.options_index += 1) : void 0
            }, t.prototype.escapeExpression = function (t) {
                var e, n;
                return null == t || t === !1 ? "" : /[\&\<\>\"\'\`]/.test(t) ? (e = {
                    "<": "&lt;",
                    ">": "&gt;",
                    '"': "&quot;",
                    "'": "&#x27;",
                    "`": "&#x60;"
                }, n = /&(?!\w+;)|[\<\>\"\'\`]/g, t.replace(n, function (t) {
                    return e[t] || "&amp;"
                })) : t
            }, t
        }(), i.select_to_array = function (t) {
            var e, n, s, o, r;
            for (n = new i, r = t.childNodes, s = 0, o = r.length; o > s; s++) e = r[s], n.add_node(e);
            return n.parsed
        }, e = function () {
            function t(e, n) {
                this.form_field = e, this.options = null != n ? n : {}, t.browser_is_supported() && (this.is_multiple = this.form_field.multiple, this.set_default_text(), this.set_default_values(), this.setup(), this.set_up_html(), this.register_observers(), this.on_ready())
            }
            return t.prototype.set_default_values = function () {
                var t = this;
                return this.click_test_action = function (e) {
                    return t.test_active_click(e)
                }, this.activate_action = function (e) {
                    return t.activate_field(e)
                }, this.active_field = !1, this.mouse_on_container = !1, this.results_showing = !1, this.result_highlighted = null, this.allow_single_deselect = null != this.options.allow_single_deselect && null != this.form_field.options[0] && "" === this.form_field.options[0].text ? this.options.allow_single_deselect : !1, this.disable_search_threshold = this.options.disable_search_threshold || 0, this.disable_search = this.options.disable_search || !1, this.enable_split_word_search = null != this.options.enable_split_word_search ? this.options.enable_split_word_search : !0, this.group_search = null != this.options.group_search ? this.options.group_search : !0, this.search_contains = this.options.search_contains || !1, this.single_backstroke_delete = null != this.options.single_backstroke_delete ? this.options.single_backstroke_delete : !0, this.max_selected_options = this.options.max_selected_options || 1 / 0, this.inherit_select_classes = this.options.inherit_select_classes || !1, this.display_selected_options = null != this.options.display_selected_options ? this.options.display_selected_options : !0, this.display_disabled_options = null != this.options.display_disabled_options ? this.options.display_disabled_options : !0, this.include_group_label_in_selected = this.options.include_group_label_in_selected || !1, this.max_shown_results = this.options.max_shown_results || Number.POSITIVE_INFINITY, this.case_sensitive_search = this.options.case_sensitive_search || !1
            }, t.prototype.set_default_text = function () {
                return this.form_field.getAttribute("data-placeholder") ? this.default_text = this.form_field.getAttribute("data-placeholder") : this.is_multiple ? this.default_text = this.options.placeholder_text_multiple || this.options.placeholder_text || t.default_multiple_text : this.default_text = this.options.placeholder_text_single || this.options.placeholder_text || t.default_single_text, this.results_none_found = this.form_field.getAttribute("data-no_results_text") || this.options.no_results_text || t.default_no_result_text
            }, t.prototype.choice_label = function (t) {
                return this.include_group_label_in_selected && null != t.group_label ? "<b class='group-name'>" + t.group_label + "</b>" + t.html : t.html
            }, t.prototype.mouse_enter = function () {
                return this.mouse_on_container = !0
            }, t.prototype.mouse_leave = function () {
                return this.mouse_on_container = !1
            }, t.prototype.input_focus = function (t) {
                var e = this;
                if (this.is_multiple) {
                    if (!this.active_field) return setTimeout(function () {
                        return e.container_mousedown()
                    }, 50)
                } else if (!this.active_field) return this.activate_field()
            }, t.prototype.input_blur = function (t) {
                var e = this;
                return this.mouse_on_container ? void 0 : (this.active_field = !1, setTimeout(function () {
                    return e.blur_test()
                }, 100))
            }, t.prototype.results_option_build = function (t) {
                var e, n, i, s, o, r, a;
                for (e = "", s = 0, a = this.results_data, o = 0, r = a.length; r > o && (n = a[o], i = "", i = n.group ? this.result_add_group(n) : this.result_add_option(n), "" !== i && (s++, e += i), (null != t ? t.first : void 0) && (n.selected && this.is_multiple ? this.choice_build(n) : n.selected && !this.is_multiple && this.single_set_selected_text(this.choice_label(n))), !(s >= this.max_shown_results)); o++);
                return e
            }, t.prototype.result_add_option = function (t) {
                var e, n;
                return t.search_match && this.include_option_in_results(t) ? (e = [], t.disabled || t.selected && this.is_multiple || e.push("active-result"), !t.disabled || t.selected && this.is_multiple || e.push("disabled-result"), t.selected && e.push("result-selected"), null != t.group_array_index && e.push("group-option"), "" !== t.classes && e.push(t.classes), n = document.createElement("li"), n.className = e.join(" "), n.style.cssText = t.style, n.setAttribute("data-option-array-index", t.array_index), n.innerHTML = t.search_text, t.title && (n.title = t.title), this.outerHTML(n)) : ""
            }, t.prototype.result_add_group = function (t) {
                var e, n;
                return (t.search_match || t.group_match) && t.active_options > 0 ? (e = [], e.push("group-result"), t.classes && e.push(t.classes), n = document.createElement("li"), n.className = e.join(" "), n.innerHTML = t.search_text, t.title && (n.title = t.title), this.outerHTML(n)) : ""
            }, t.prototype.results_update_field = function () {
                return this.set_default_text(), this.is_multiple || this.results_reset_cleanup(), this.result_clear_highlight(), this.results_build(), this.results_showing ? this.winnow_results() : void 0
            }, t.prototype.reset_single_select_options = function () {
                var t, e, n, i, s;
                for (i = this.results_data, s = [], e = 0, n = i.length; n > e; e++) t = i[e], t.selected ? s.push(t.selected = !1) : s.push(void 0);
                return s
            }, t.prototype.results_toggle = function () {
                return this.results_showing ? this.results_hide() : this.results_show()
            }, t.prototype.results_search = function (t) {
                return this.results_showing ? this.winnow_results() : this.results_show()
            }, t.prototype.winnow_results = function () {
                var t, e, n, i, s, o, r, a, l, u, c, h;
                for (this.no_results_clear(), i = 0, o = this.get_search_text(), t = o.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&"), l = new RegExp(t, "i"), n = this.get_search_regex(t), h = this.results_data, u = 0, c = h.length; c > u; u++) e = h[u], e.search_match = !1, s = null, this.include_option_in_results(e) && (e.group && (e.group_match = !1, e.active_options = 0), null != e.group_array_index && this.results_data[e.group_array_index] && (s = this.results_data[e.group_array_index], 0 === s.active_options && s.search_match && (i += 1), s.active_options += 1), e.search_text = e.group ? e.label : e.html, (!e.group || this.group_search) && (e.search_match = this.search_string_match(e.search_text, n), e.search_match && !e.group && (i += 1), e.search_match ? (o.length && (r = e.search_text.search(l), a = e.search_text.substr(0, r + o.length) + "</em>" + e.search_text.substr(r + o.length), e.search_text = a.substr(0, r) + "<em>" + a.substr(r)), null != s && (s.group_match = !0)) : null != e.group_array_index && this.results_data[e.group_array_index].search_match && (e.search_match = !0)));
                return this.result_clear_highlight(), 1 > i && o.length ? (this.update_results_content(""), this.no_results(o)) : (this.update_results_content(this.results_option_build()), this.winnow_results_set_highlight())
            }, t.prototype.get_search_regex = function (t) {
                var e, n;
                return e = this.search_contains ? "" : "^", n = this.case_sensitive_search ? "" : "i", new RegExp(e + t, n)
            }, t.prototype.search_string_match = function (t, e) {
                var n, i, s, o;
                if (e.test(t)) return !0;
                if (this.enable_split_word_search && (t.indexOf(" ") >= 0 || 0 === t.indexOf("[")) && (i = t.replace(/\[|\]/g, "").split(" "), i.length))
                    for (s = 0, o = i.length; o > s; s++)
                        if (n = i[s], e.test(n)) return !0
            }, t.prototype.choices_count = function () {
                var t, e, n, i;
                if (null != this.selected_option_count) return this.selected_option_count;
                for (this.selected_option_count = 0, i = this.form_field.options, e = 0, n = i.length; n > e; e++) t = i[e], t.selected && (this.selected_option_count += 1);
                return this.selected_option_count
            }, t.prototype.choices_click = function (t) {
                return t.preventDefault(), this.results_showing || this.is_disabled ? void 0 : this.results_show()
            }, t.prototype.keyup_checker = function (t) {
                var e, n;
                switch (e = null != (n = t.which) ? n : t.keyCode, this.search_field_scale(), e) {
                    case 8:
                        if (this.is_multiple && this.backstroke_length < 1 && this.choices_count() > 0) return this.keydown_backstroke();
                        if (!this.pending_backstroke) return this.result_clear_highlight(), this.results_search();
                        break;
                    case 13:
                        if (t.preventDefault(), this.results_showing) return this.result_select(t);
                        break;
                    case 27:
                        return this.results_showing && this.results_hide(), !0;
                    case 9:
                    case 38:
                    case 40:
                    case 16:
                    case 91:
                    case 17:
                    case 18:
                        break;
                    default:
                        return this.results_search()
                }
            }, t.prototype.clipboard_event_checker = function (t) {
                var e = this;
                return setTimeout(function () {
                    return e.results_search()
                }, 50)
            }, t.prototype.container_width = function () {
                return null != this.options.width ? this.options.width : "" + this.form_field.offsetWidth + "px"
            }, t.prototype.include_option_in_results = function (t) {
                return this.is_multiple && !this.display_selected_options && t.selected ? !1 : !this.display_disabled_options && t.disabled ? !1 : t.empty ? !1 : !0
            }, t.prototype.search_results_touchstart = function (t) {
                return this.touch_started = !0, this.search_results_mouseover(t)
            }, t.prototype.search_results_touchmove = function (t) {
                return this.touch_started = !1, this.search_results_mouseout(t)
            }, t.prototype.search_results_touchend = function (t) {
                return this.touch_started ? this.search_results_mouseup(t) : void 0
            }, t.prototype.outerHTML = function (t) {
                var e;
                return t.outerHTML ? t.outerHTML : (e = document.createElement("div"), e.appendChild(t), e.innerHTML)
            }, t.browser_is_supported = function () {
                return "Microsoft Internet Explorer" === window.navigator.appName ? document.documentMode >= 8 : /iP(od|hone)/i.test(window.navigator.userAgent) || /IEMobile/i.test(window.navigator.userAgent) || /Windows Phone/i.test(window.navigator.userAgent) || /BlackBerry/i.test(window.navigator.userAgent) || /BB10/i.test(window.navigator.userAgent) || /Android.*Mobile/i.test(window.navigator.userAgent) ? !1 : !0
            }, t.default_multiple_text = "Select Some Options", t.default_single_text = "Select an Option", t.default_no_result_text = "No results match", t
        }(), t = jQuery, t.fn.extend({
            chosen: function (i) {
                return e.browser_is_supported() ? this.each(function (e) {
                    var s, o;
                    return s = t(this), o = s.data("chosen"), "destroy" === i ? void(o instanceof n && o.destroy()) : void(o instanceof n || s.data("chosen", new n(this, i)))
                }) : this
            }
        }), n = function (e) {
            function n() {
                return s = n.__super__.constructor.apply(this, arguments)
            }
            return r(n, e), n.prototype.setup = function () {
                return this.form_field_jq = t(this.form_field), this.current_selectedIndex = this.form_field.selectedIndex, this.is_rtl = this.form_field_jq.hasClass("chosen-rtl")
            }, n.prototype.set_up_html = function () {
                var e, n;
                return e = ["chosen-container"], e.push("chosen-container-" + (this.is_multiple ? "multi" : "single")), this.inherit_select_classes && this.form_field.className && e.push(this.form_field.className), this.is_rtl && e.push("chosen-rtl"), n = {
                    "class": e.join(" "),
                    style: "width: " + this.container_width() + ";",
                    title: this.form_field.title
                }, this.form_field.id.length && (n.id = this.form_field.id.replace(/[^\w]/g, "_") + "_chosen"), this.container = t("<div />", n), this.is_multiple ? this.container.html('<ul class="chosen-choices"><li class="search-field"><input type="text" value="' + this.default_text + '" class="default" autocomplete="off" style="width:25px;" /></li></ul><div class="chosen-drop"><ul class="chosen-results"></ul></div>') : this.container.html('<a class="chosen-single chosen-default"><span>' + this.default_text + '</span><div><b></b></div></a><div class="chosen-drop"><div class="chosen-search"><input type="text" autocomplete="off" /></div><ul class="chosen-results"></ul></div>'), this.form_field_jq.hide().after(this.container), this.dropdown = this.container.find("div.chosen-drop").first(), this.search_field = this.container.find("input").first(), this.search_results = this.container.find("ul.chosen-results").first(), this.search_field_scale(), this.search_no_results = this.container.find("li.no-results").first(), this.is_multiple ? (this.search_choices = this.container.find("ul.chosen-choices").first(), this.search_container = this.container.find("li.search-field").first()) : (this.search_container = this.container.find("div.chosen-search").first(), this.selected_item = this.container.find(".chosen-single").first()), this.results_build(), this.set_tab_index(), this.set_label_behavior()
            }, n.prototype.on_ready = function () {
                return this.form_field_jq.trigger("chosen:ready", {
                    chosen: this
                })
            }, n.prototype.register_observers = function () {
                var t = this;
                return this.container.bind("touchstart.chosen", function (e) {
                    return t.container_mousedown(e), e.preventDefault()
                }), this.container.bind("touchend.chosen", function (e) {
                    return t.container_mouseup(e), e.preventDefault()
                }), this.container.bind("mousedown.chosen", function (e) {
                    t.container_mousedown(e)
                }), this.container.bind("mouseup.chosen", function (e) {
                    t.container_mouseup(e)
                }), this.container.bind("mouseenter.chosen", function (e) {
                    t.mouse_enter(e)
                }), this.container.bind("mouseleave.chosen", function (e) {
                    t.mouse_leave(e)
                }), this.search_results.bind("mouseup.chosen", function (e) {
                    t.search_results_mouseup(e)
                }), this.search_results.bind("mouseover.chosen", function (e) {
                    t.search_results_mouseover(e)
                }), this.search_results.bind("mouseout.chosen", function (e) {
                    t.search_results_mouseout(e)
                }), this.search_results.bind("mousewheel.chosen DOMMouseScroll.chosen", function (e) {
                    t.search_results_mousewheel(e)
                }), this.search_results.bind("touchstart.chosen", function (e) {
                    t.search_results_touchstart(e)
                }), this.search_results.bind("touchmove.chosen", function (e) {
                    t.search_results_touchmove(e)
                }), this.search_results.bind("touchend.chosen", function (e) {
                    t.search_results_touchend(e)
                }), this.form_field_jq.bind("chosen:updated.chosen", function (e) {
                    t.results_update_field(e)
                }), this.form_field_jq.bind("chosen:activate.chosen", function (e) {
                    t.activate_field(e)
                }), this.form_field_jq.bind("chosen:open.chosen", function (e) {
                    t.container_mousedown(e)
                }), this.form_field_jq.bind("chosen:close.chosen", function (e) {
                    t.input_blur(e)
                }), this.search_field.bind("blur.chosen", function (e) {
                    t.input_blur(e)
                }), this.search_field.bind("keyup.chosen", function (e) {
                    t.keyup_checker(e)
                }), this.search_field.bind("keydown.chosen", function (e) {
                    t.keydown_checker(e)
                }), this.search_field.bind("focus.chosen", function (e) {
                    t.input_focus(e)
                }), this.search_field.bind("cut.chosen", function (e) {
                    t.clipboard_event_checker(e)
                }), this.search_field.bind("paste.chosen", function (e) {
                    t.clipboard_event_checker(e)
                }), this.is_multiple ? this.search_choices.bind("click.chosen", function (e) {
                    t.choices_click(e)
                }) : this.container.bind("click.chosen", function (t) {
                    t.preventDefault()
                })
            }, n.prototype.destroy = function () {
                return t(this.container[0].ownerDocument).unbind("click.chosen", this.click_test_action), this.search_field[0].tabIndex && (this.form_field_jq[0].tabIndex = this.search_field[0].tabIndex), this.container.remove(), this.form_field_jq.removeData("chosen"), this.form_field_jq.show()
            }, n.prototype.search_field_disabled = function () {
                return this.is_disabled = this.form_field_jq[0].disabled, this.is_disabled ? (this.container.addClass("chosen-disabled"), this.search_field[0].disabled = !0, this.is_multiple || this.selected_item.unbind("focus.chosen", this.activate_action), this.close_field()) : (this.container.removeClass("chosen-disabled"), this.search_field[0].disabled = !1, this.is_multiple ? void 0 : this.selected_item.bind("focus.chosen", this.activate_action))
            }, n.prototype.container_mousedown = function (e) {
                return this.is_disabled || (e && "mousedown" === e.type && !this.results_showing && e.preventDefault(), null != e && t(e.target).hasClass("search-choice-close")) ? void 0 : (this.active_field ? this.is_multiple || !e || t(e.target)[0] !== this.selected_item[0] && !t(e.target).parents("a.chosen-single").length || (e.preventDefault(), this.results_toggle()) : (this.is_multiple && this.search_field.val(""), t(this.container[0].ownerDocument).bind("click.chosen", this.click_test_action), this.results_show()), this.activate_field())
            }, n.prototype.container_mouseup = function (t) {
                return "ABBR" !== t.target.nodeName || this.is_disabled ? void 0 : this.results_reset(t)
            }, n.prototype.search_results_mousewheel = function (t) {
                var e;
                return t.originalEvent && (e = t.originalEvent.deltaY || -t.originalEvent.wheelDelta || t.originalEvent.detail), null != e ? (t.preventDefault(), "DOMMouseScroll" === t.type && (e = 40 * e), this.search_results.scrollTop(e + this.search_results.scrollTop())) : void 0
            }, n.prototype.blur_test = function (t) {
                return !this.active_field && this.container.hasClass("chosen-container-active") ? this.close_field() : void 0
            }, n.prototype.close_field = function () {
                return t(this.container[0].ownerDocument).unbind("click.chosen", this.click_test_action), this.active_field = !1, this.results_hide(), this.container.removeClass("chosen-container-active"), this.clear_backstroke(), this.show_search_field_default(), this.search_field_scale()
            }, n.prototype.activate_field = function () {
                return this.container.addClass("chosen-container-active"), this.active_field = !0, this.search_field.val(this.search_field.val()), this.search_field.focus()
            }, n.prototype.test_active_click = function (e) {
                var n;
                return n = t(e.target).closest(".chosen-container"), n.length && this.container[0] === n[0] ? this.active_field = !0 : this.close_field()
            }, n.prototype.results_build = function () {
                return this.parsing = !0, this.selected_option_count = null, this.results_data = i.select_to_array(this.form_field), this.is_multiple ? this.search_choices.find("li.search-choice").remove() : this.is_multiple || (this.single_set_selected_text(), this.disable_search || this.form_field.options.length <= this.disable_search_threshold ? (this.search_field[0].readOnly = !0, this.container.addClass("chosen-container-single-nosearch")) : (this.search_field[0].readOnly = !1, this.container.removeClass("chosen-container-single-nosearch"))), this.update_results_content(this.results_option_build({
                    first: !0
                })), this.search_field_disabled(), this.show_search_field_default(), this.search_field_scale(), this.parsing = !1
            }, n.prototype.result_do_highlight = function (t) {
                var e, n, i, s, o;
                if (t.length) {
                    if (this.result_clear_highlight(), this.result_highlight = t, this.result_highlight.addClass("highlighted"), i = parseInt(this.search_results.css("maxHeight"), 10), o = this.search_results.scrollTop(), s = i + o, n = this.result_highlight.position().top + this.search_results.scrollTop(), e = n + this.result_highlight.outerHeight(), e >= s) return this.search_results.scrollTop(e - i > 0 ? e - i : 0);
                    if (o > n) return this.search_results.scrollTop(n)
                }
            }, n.prototype.result_clear_highlight = function () {
                return this.result_highlight && this.result_highlight.removeClass("highlighted"), this.result_highlight = null
            }, n.prototype.results_show = function () {
                return this.is_multiple && this.max_selected_options <= this.choices_count() ? (this.form_field_jq.trigger("chosen:maxselected", {
                    chosen: this
                }), !1) : (this.container.addClass("chosen-with-drop"), this.results_showing = !0, this.search_field.focus(), this.search_field.val(this.search_field.val()), this.winnow_results(), this.form_field_jq.trigger("chosen:showing_dropdown", {
                    chosen: this
                }))
            }, n.prototype.update_results_content = function (t) {
                return this.search_results.html(t)
            }, n.prototype.results_hide = function () {
                return this.results_showing && (this.result_clear_highlight(), this.container.removeClass("chosen-with-drop"), this.form_field_jq.trigger("chosen:hiding_dropdown", {
                    chosen: this
                })), this.results_showing = !1
            }, n.prototype.set_tab_index = function (t) {
                var e;
                return this.form_field.tabIndex ? (e = this.form_field.tabIndex, this.form_field.tabIndex = -1, this.search_field[0].tabIndex = e) : void 0
            }, n.prototype.set_label_behavior = function () {
                var e = this;
                return this.form_field_label = this.form_field_jq.parents("label"), !this.form_field_label.length && this.form_field.id.length && (this.form_field_label = t("label[for='" + this.form_field.id + "']")), this.form_field_label.length > 0 ? this.form_field_label.bind("click.chosen", function (t) {
                    return e.is_multiple ? e.container_mousedown(t) : e.activate_field()
                }) : void 0
            }, n.prototype.show_search_field_default = function () {
                return this.is_multiple && this.choices_count() < 1 && !this.active_field ? (this.search_field.val(this.default_text), this.search_field.addClass("default")) : (this.search_field.val(""), this.search_field.removeClass("default"))
            }, n.prototype.search_results_mouseup = function (e) {
                var n;
                return n = t(e.target).hasClass("active-result") ? t(e.target) : t(e.target).parents(".active-result").first(), n.length ? (this.result_highlight = n, this.result_select(e), this.search_field.focus()) : void 0
            }, n.prototype.search_results_mouseover = function (e) {
                var n;
                return n = t(e.target).hasClass("active-result") ? t(e.target) : t(e.target).parents(".active-result").first(), n ? this.result_do_highlight(n) : void 0
            }, n.prototype.search_results_mouseout = function (e) {
                return t(e.target).hasClass("active-result") ? this.result_clear_highlight() : void 0
            }, n.prototype.choice_build = function (e) {
                var n, i, s = this;
                return n = t("<li />", {
                    "class": "search-choice"
                }).html("<span>" + this.choice_label(e) + "</span>"), e.disabled ? n.addClass("search-choice-disabled") : (i = t("<a />", {
                    "class": "search-choice-close",
                    "data-option-array-index": e.array_index
                }), i.bind("click.chosen", function (t) {
                    return s.choice_destroy_link_click(t)
                }), n.append(i)), this.search_container.before(n)
            }, n.prototype.choice_destroy_link_click = function (e) {
                return e.preventDefault(), e.stopPropagation(), this.is_disabled ? void 0 : this.choice_destroy(t(e.target))
            }, n.prototype.choice_destroy = function (t) {
                return this.result_deselect(t[0].getAttribute("data-option-array-index")) ? (this.show_search_field_default(), this.is_multiple && this.choices_count() > 0 && this.search_field.val().length < 1 && this.results_hide(), t.parents("li").first().remove(), this.search_field_scale()) : void 0
            }, n.prototype.results_reset = function () {
                return this.reset_single_select_options(), this.form_field.options[0].selected = !0, this.single_set_selected_text(), this.show_search_field_default(), this.results_reset_cleanup(), this.form_field_jq.trigger("change"), this.active_field ? this.results_hide() : void 0
            }, n.prototype.results_reset_cleanup = function () {
                return this.current_selectedIndex = this.form_field.selectedIndex, this.selected_item.find("abbr").remove()
            }, n.prototype.result_select = function (t) {
                var e, n;
                return this.result_highlight ? (e = this.result_highlight, this.result_clear_highlight(), this.is_multiple && this.max_selected_options <= this.choices_count() ? (this.form_field_jq.trigger("chosen:maxselected", {
                    chosen: this
                }), !1) : (this.is_multiple ? e.removeClass("active-result") : this.reset_single_select_options(), e.addClass("result-selected"), n = this.results_data[e[0].getAttribute("data-option-array-index")], n.selected = !0, this.form_field.options[n.options_index].selected = !0, this.selected_option_count = null, this.is_multiple ? this.choice_build(n) : this.single_set_selected_text(this.choice_label(n)), (t.metaKey || t.ctrlKey) && this.is_multiple || this.results_hide(), this.show_search_field_default(), (this.is_multiple || this.form_field.selectedIndex !== this.current_selectedIndex) && this.form_field_jq.trigger("change", {
                    selected: this.form_field.options[n.options_index].value
                }), this.current_selectedIndex = this.form_field.selectedIndex, t.preventDefault(), this.search_field_scale())) : void 0
            }, n.prototype.single_set_selected_text = function (t) {
                return null == t && (t = this.default_text), t === this.default_text ? this.selected_item.addClass("chosen-default") : (this.single_deselect_control_build(), this.selected_item.removeClass("chosen-default")), this.selected_item.find("span").html(t)
            }, n.prototype.result_deselect = function (t) {
                var e;
                return e = this.results_data[t], this.form_field.options[e.options_index].disabled ? !1 : (e.selected = !1, this.form_field.options[e.options_index].selected = !1, this.selected_option_count = null, this.result_clear_highlight(), this.results_showing && this.winnow_results(), this.form_field_jq.trigger("change", {
                    deselected: this.form_field.options[e.options_index].value
                }), this.search_field_scale(), !0)
            }, n.prototype.single_deselect_control_build = function () {
                return this.allow_single_deselect ? (this.selected_item.find("abbr").length || this.selected_item.find("span").first().after('<abbr class="search-choice-close"></abbr>'), this.selected_item.addClass("chosen-single-with-deselect")) : void 0
            }, n.prototype.get_search_text = function () {
                return t("<div/>").text(t.trim(this.search_field.val())).html()
            }, n.prototype.winnow_results_set_highlight = function () {
                var t, e;
                return e = this.is_multiple ? [] : this.search_results.find(".result-selected.active-result"), t = e.length ? e.first() : this.search_results.find(".active-result").first(), null != t ? this.result_do_highlight(t) : void 0
            }, n.prototype.no_results = function (e) {
                var n;
                return n = t('<li class="no-results">' + this.results_none_found + ' "<span></span>"</li>'), n.find("span").first().html(e), this.search_results.append(n), this.form_field_jq.trigger("chosen:no_results", {
                    chosen: this
                })
            }, n.prototype.no_results_clear = function () {
                return this.search_results.find(".no-results").remove()
            }, n.prototype.keydown_arrow = function () {
                var t;
                return this.results_showing && this.result_highlight ? (t = this.result_highlight.nextAll("li.active-result").first()) ? this.result_do_highlight(t) : void 0 : this.results_show()
            }, n.prototype.keyup_arrow = function () {
                var t;
                return this.results_showing || this.is_multiple ? this.result_highlight ? (t = this.result_highlight.prevAll("li.active-result"), t.length ? this.result_do_highlight(t.first()) : (this.choices_count() > 0 && this.results_hide(), this.result_clear_highlight())) : void 0 : this.results_show()
            }, n.prototype.keydown_backstroke = function () {
                var t;
                return this.pending_backstroke ? (this.choice_destroy(this.pending_backstroke.find("a").first()), this.clear_backstroke()) : (t = this.search_container.siblings("li.search-choice").last(), t.length && !t.hasClass("search-choice-disabled") ? (this.pending_backstroke = t, this.single_backstroke_delete ? this.keydown_backstroke() : this.pending_backstroke.addClass("search-choice-focus")) : void 0)
            }, n.prototype.clear_backstroke = function () {
                return this.pending_backstroke && this.pending_backstroke.removeClass("search-choice-focus"), this.pending_backstroke = null
            }, n.prototype.keydown_checker = function (t) {
                var e, n;
                switch (e = null != (n = t.which) ? n : t.keyCode, this.search_field_scale(), 8 !== e && this.pending_backstroke && this.clear_backstroke(), e) {
                    case 8:
                        this.backstroke_length = this.search_field.val().length;
                        break;
                    case 9:
                        this.results_showing && !this.is_multiple && this.result_select(t), this.mouse_on_container = !1;
                        break;
                    case 13:
                        this.results_showing && t.preventDefault();
                        break;
                    case 32:
                        this.disable_search && t.preventDefault();
                        break;
                    case 38:
                        t.preventDefault(), this.keyup_arrow();
                        break;
                    case 40:
                        t.preventDefault(), this.keydown_arrow()
                }
            }, n.prototype.search_field_scale = function () {
                var e, n, i, s, o, r, a, l, u;
                if (this.is_multiple) {
                    for (i = 0, a = 0, o = "position:absolute; left: -1000px; top: -1000px; display:none;", r = ["font-size", "font-style", "font-weight", "font-family", "line-height", "text-transform", "letter-spacing"], l = 0, u = r.length; u > l; l++) s = r[l], o += s + ":" + this.search_field.css(s) + ";";
                    return e = t("<div />", {
                        style: o
                    }), e.text(this.search_field.val()), t("body").append(e), a = e.width() + 25, e.remove(), n = this.container.outerWidth(), a > n - 10 && (a = n - 10), this.search_field.css({
                        width: a + "px"
                    })
                }
            }, n
        }(e)
    }.call(this);
var LessonSelector = {
        updateSelectAllCount: function (t) {
            t = 0, $(".lesson-checkbox").each(function (e, n) {
                var i = $(n).closest("li");
                i.hasClass("hidden") || i.hasClass("disabled") || (t += 1)
            }), $("#lesson-select-all").text("Select all (" + t + ")")
        },
        deselectAll: function () {
            $(".lesson-checkbox").each(function (t, e) {
                $(e).prop("checked", !1), $(e).change()
            })
        },
        disableAlreadySelectedLessons: function () {
            var t = LessonSelector.selectedLessonsCallback();
            $(t).each(function (t, e) {
                var n = '.lesson-checkbox[data-lesson_id="' + e.id + '"]',
                    i = $(n).closest("li");
                i.addClass("disabled"), $(n).prop("disabled", !0)
            })
        },
        resetSearch: function () {
            $("#lesson-search").val(""), $("#lesson-search").change()
        },
        updateAddSelectedCount: function () {
            var t = 0;
            $(".lesson-checkbox").each(function (e, n) {
                n.checked && (t += 1)
            });
            var e = "Add selected lessons";
            0 != t && (e = e + " (" + t + ")"), $("#add-selected-items-button").text(e)
        },
        initialize: function (t) {
            LessonSelector.selectedLessonsCallback = t.selectedLessonsCallback, $("#lesson-search").fastLiveFilter(".related-lessons-list", {
                selector: ".lesson-title",
                callback: LessonSelector.updateSelectAllCount
            }), $(".lesson-checkbox").change(LessonSelector.updateAddSelectedCount), $("#lesson-select-all").click(function (t) {
                return t.preventDefault(), $(".lesson-checkbox").each(function (t, e) {
                    $(e).closest("li").is(":visible") && $(e).prop("checked", "checked")
                }), LessonSelector.updateAddSelectedCount(), !1
            }), $("#lesson-deselect-all").click(function (t) {
                return t.preventDefault(), LessonSelector.deselectAll(), !1
            }), $("#lesson-reset-search").click(function (t) {
                return t.preventDefault(), LessonSelector.resetSearch(), !1
            }), $("#add-selected-items-button").click(function (e) {
                return e.preventDefault(), $(".lesson-checkbox").each(function (e, n) {
                    n.checked && t.addLessonCallback($(n).data())
                }), $("#form-select-related-lessons").modal("hide"), LessonSelector.deselectAll(), LessonSelector.resetSearch(), !1
            }), $("#form-select-related-lessons").on("show.bs.modal", function (t) {
                LessonSelector.disableAlreadySelectedLessons(), LessonSelector.deselectAll(), LessonSelector.resetSearch(), LessonSelector.updateSelectAllCount(0)
            }), $(".btn-open-lesson-selector").click(function (t) {
                return t.preventDefault(), $("#form-select-related-lessons").modal("show"), !1
            })
        }
    },
    SMSCollector = {
        show: function () {
            return $("#form-sms-collection").modal("show"), !1
        },
        hide: function () {
            return $("#form-sms-collection").modal("hide"), !1
        },
        submit: function () {
            var t = jQuery("#phone-number").intlTelInput("getNumber");
            return t ? (_dcq.push(["identify", {
                phone_number: t
            }]), _dcq.push(["track", "SMS - Presale", {
                phone_number: t
            }]), SMSCollector.hide(), alert("All set. I'll text: " + t + " when the sale goes live.")) : alert("You left your phone number blank :-)"), !1
        },
        exitIntent: function (t) {
            $.QueryString.sms && "0" !== $.QueryString.sms && t.clientY < 20 && (SMSCollector.show(), $("#sms-exit-intent-msg").show())
        },
        initialize: function () {
            "1" === $.QueryString.sms && SMSCollector.show(), $("#phone-number-submit").click(SMSCollector.submit), $(document).on("mouseleave", SMSCollector.exitIntent)
        }
    };
(function (t) {
    function e(t) {
        return t && t.Object === Object ? t : null
    }

    function n(t) {
        for (var e = t.length, n = new Array(e), i = 0; e > i; i++) n[i] = t[i];
        return n
    }

    function i(t) {
        return function () {
            try {
                return t.apply(this, arguments)
            } catch (e) {
                return xt.e = e, xt
            }
        }
    }

    function s(t) {
        throw t
    }

    function o(t, e) {
        if (St && e.stack && "object" == typeof t && null !== t && t.stack && -1 === t.stack.indexOf(Et)) {
            for (var n = [], i = e; i; i = i.source) i.stack && n.unshift(i.stack);
            n.unshift(t.stack);
            var s = n.join("\n" + Et + "\n");
            t.stack = r(s)
        }
    }

    function r(t) {
        for (var e = t.split("\n"), n = [], i = 0, s = e.length; s > i; i++) {
            var o = e[i];
            a(o) || l(o) || !o || n.push(o)
        }
        return n.join("\n")
    }

    function a(t) {
        var e = c(t);
        if (!e) return !1;
        var n = e[0],
            i = e[1];
        return n === Tt && i >= Dt && us >= i
    }

    function l(t) {
        return -1 !== t.indexOf("(module.js:") || -1 !== t.indexOf("(node.js:")
    }

    function u() {
        if (St) try {
            throw new Error
        } catch (t) {
            var e = t.stack.split("\n"),
                n = e[0].indexOf("@") > 0 ? e[1] : e[2],
                i = c(n);
            if (!i) return;
            return Tt = i[0], i[1]
        }
    }

    function c(t) {
        var e = /at .+ \((.+):(\d+):(?:\d+)\)$/.exec(t);
        if (e) return [e[1], Number(e[2])];
        var n = /at ([^ ]+):(\d+):(?:\d+)$/.exec(t);
        if (n) return [n[1], Number(n[2])];
        var i = /.*@(.+):(\d+)$/.exec(t);
        return i ? [i[1], Number(i[2])] : void 0
    }

    function h(e, n, i, s, o, r) {
        var a = ge(e),
            l = a.length,
            u = ge(n),
            c = u.length;
        if (l !== c && !s) return !1;
        for (var h, d = l; d--;)
            if (h = a[d], !(s ? h in n : de.call(n, h))) return !1;
        for (var f = s; ++d < l;) {
            h = a[d];
            var p, g = e[h],
                m = n[h];
            if (!(p === t ? i(g, m, s, o, r) : p)) return !1;
            f || (f = "constructor" === h)
        }
        if (!f) {
            var v = e.constructor,
                y = n.constructor;
            if (v !== y && "constructor" in e && "constructor" in n && !("function" == typeof v && v instanceof v && "function" == typeof y && y instanceof y)) return !1
        }
        return !0
    }

    function d(t, e, n) {
        switch (n) {
            case Ut:
            case Bt:
                return +t === +e;
            case Wt:
                return t.name === e.name && t.message === e.message;
            case Gt:
                return t !== +t ? e !== +e : t === +e;
            case Kt:
            case Jt:
                return t === e + ""
        }
        return !1
    }

    function f(t) {
        return !!t && "object" == typeof t
    }

    function p(t) {
        return "number" == typeof t && t > -1 && t % 1 === 0 && pe >= t
    }

    function g(t) {
        return f(t) && p(t.length) && !!ce[fe.call(t)]
    }

    function m(t, e) {
        for (var n = -1, i = t.length; ++n < i;)
            if (e(t[n], n, t)) return !0;
        return !1
    }

    function v(e, n, i, s, o, r) {
        var a = -1,
            l = e.length,
            u = n.length;
        if (l !== u && !(s && u > l)) return !1;
        for (; ++a < l;) {
            var c, h = e[a],
                d = n[a];
            if (c !== t) {
                if (c) continue;
                return !1
            }
            if (s) {
                if (!m(n, function (t) {
                        return h === t || i(h, t, s, o, r)
                    })) return !1
            } else if (h !== d && !i(h, d, s, o, r)) return !1
        }
        return !0
    }

    function y(t, e, n, i, s, o) {
        var r = ye(t),
            a = ye(e),
            l = zt,
            u = zt;
        r || (l = fe.call(t), l === Ht ? l = Qt : l !== Qt && (r = g(t))), a || (u = fe.call(e), u === Ht ? u = Qt : u !== Qt && (a = g(e)));
        var c = l === Qt && !ve(t),
            f = u === Qt && !ve(e),
            p = l === u;
        if (p && !r && !c) return d(t, e, l);
        if (!i) {
            var m = c && de.call(t, "__wrapped__"),
                y = f && de.call(e, "__wrapped__");
            if (m || y) return n(m ? t.value() : t, y ? e.value() : e, i, s, o)
        }
        if (!p) return !1;
        s || (s = []), o || (o = []);
        for (var b = s.length; b--;)
            if (s[b] === t) return o[b] === e;
        s.push(t), o.push(e);
        var _ = (r ? v : h)(t, e, n, i, s, o);
        return s.pop(), o.pop(), _
    }

    function b(t, e, n, i, s) {
        return t === e ? !0 : null == t || null == e || !me(t) && !f(e) ? t !== t && e !== e : y(t, e, b, n, i, s)
    }

    function _(t, e) {
        for (var n = new Array(t), i = 0; t > i; i++) n[i] = e();
        return n
    }

    function w(t, e) {
        this.id = t, this.value = e
    }

    function x(t) {
        this._s = t, this.isDisposed = !1
    }

    function k(t) {
        this._s = t
    }

    function S(t) {
        this._s = t, this._l = t.length, this._i = 0
    }

    function C(t) {
        this._a = t
    }

    function T(t) {
        this._a = t, this._l = A(t), this._i = 0
    }

    function D(t) {
        return "number" == typeof t && dt.isFinite(t)
    }

    function E(e) {
        var n, i = e[Ot];
        if (!i && "string" == typeof e) return n = new k(e), n[Ot]();
        if (!i && e.length !== t) return n = new C(e), n[Ot]();
        if (!i) throw new TypeError("Object is not iterable");
        return e[Ot]()
    }

    function j(t) {
        var e = +t;
        return 0 === e ? e : isNaN(e) ? e : 0 > e ? -1 : 1
    }

    function A(t) {
        var e = +t.length;
        return isNaN(e) ? 0 : 0 !== e && D(e) ? (e = j(e) * Math.floor(Math.abs(e)), 0 >= e ? 0 : e > En ? En : e) : e
    }

    function $(t, e) {
        return Fe(t) || (t = Ue), new An(e, t)
    }

    function N(t, e) {
        this.observer = t, this.parent = e
    }

    function M() {
        return !1
    }

    function L() {
        for (var t = arguments.length, e = new Array(t), n = 0; t > n; n++) e[n] = arguments[n];
        return e
    }

    function M() {
        return !1
    }

    function L() {
        for (var t = arguments.length, e = new Array(t), n = 0; t > n; n++) e[n] = arguments[n];
        return e
    }

    function M() {
        return !1
    }

    function O() {
        return []
    }

    function M() {
        return !1
    }

    function O() {
        return []
    }

    function L() {
        for (var t = arguments.length, e = new Array(t), n = 0; t > n; n++) e[n] = arguments[n];
        return e
    }

    function P(t) {
        return function (e) {
            return t.subscribe(e)
        }
    }

    function F(e, n) {
        return function (i) {
            for (var s = i, o = 0; n > o; o++) {
                var r = s[e[o]];
                if ("undefined" == typeof r) return t;
                s = r
            }
            return s
        }
    }

    function I(t, e, n, i) {
        var s = new os;
        return i.push(R(s, e, n)), t.apply(e, i), s.asObservable()
    }

    function R(t, e, n) {
        return function () {
            for (var i = arguments.length, s = new Array(i), o = 0; i > o; o++) s[o] = arguments[o];
            if (wt(n)) {
                if (s = kt(n).apply(e, s), s === xt) return t.onError(s.e);
                t.onNext(s)
            } else s.length <= 1 ? t.onNext(s[0]) : t.onNext(s);
            t.onCompleted()
        }
    }

    function H(t, e, n, i) {
        var s = new os;
        return i.push(z(s, e, n)), t.apply(e, i), s.asObservable()
    }

    function z(t, e, n) {
        return function () {
            var i = arguments[0];
            if (i) return t.onError(i);
            for (var s = arguments.length, o = [], r = 1; s > r; r++) o[r - 1] = arguments[r];
            if (wt(n)) {
                var o = kt(n).apply(e, o);
                if (o === xt) return t.onError(o.e);
                t.onNext(o)
            } else o.length <= 1 ? t.onNext(o[0]) : t.onNext(o);
            t.onCompleted()
        }
    }

    function U(t) {
        return dt.StaticNodeList ? t instanceof dt.StaticNodeList || t instanceof dt.NodeList : "[object NodeList]" === Object.prototype.toString.call(t)
    }

    function B(t, e, n) {
        this._e = t, this._n = e, this._fn = n, this._e.addEventListener(this._n, this._fn, !1), this.isDisposed = !1
    }

    function W(t, e, n) {
        var i = new xe,
            s = Object.prototype.toString.call(t);
        if (U(t) || "[object HTMLCollection]" === s)
            for (var o = 0, r = t.length; r > o; o++) i.add(W(t.item(o), e, n));
        else t && i.add(new B(t, e, n));
        return i
    }

    function Y(t, e) {
        return new Ui(t, e)
    }

    function V(t, e, n) {
        return new es(function (i) {
            var s = t,
                o = Pe(e);
            return n.scheduleRecursiveFuture(0, s, function (t, e) {
                if (o > 0) {
                    var r = n.now();
                    s = new Date(s.getTime() + o), s.getTime() <= r && (s = new Date(r + o))
                }
                i.onNext(t), e(t + 1, new Date(s))
            })
        })
    }

    function G(t, e, n) {
        return t === e ? new es(function (t) {
            return n.schedulePeriodic(0, e, function (e) {
                return t.onNext(e), e + 1
            })
        }) : kn(function () {
            return V(new Date(n.now() + t), e, n)
        })
    }

    function Q(t, e, n) {
        return new es(function (i) {
            var s, o = !1,
                r = new $e,
                a = null,
                l = [],
                u = !1;
            return s = t.materialize().timestamp(n).subscribe(function (t) {
                var s, c;
                "E" === t.value.kind ? (l = [], l.push(t), a = t.value.error, c = !u) : (l.push({
                    value: t.value,
                    timestamp: t.timestamp + e
                }), c = !o, o = !0), c && (null !== a ? i.onError(a) : (s = new Ae, r.setDisposable(s), s.setDisposable(n.scheduleRecursiveFuture(null, e, function (t, e) {
                    var s, r, c, h;
                    if (null === a) {
                        u = !0;
                        do c = null, l.length > 0 && l[0].timestamp - n.now() <= 0 && (c = l.shift().value), null !== c && c.accept(i); while (null !== c);
                        h = !1, r = 0, l.length > 0 ? (h = !0, r = Math.max(0, l[0].timestamp - n.now())) : o = !1, s = a, u = !1, null !== s ? i.onError(s) : h && e(null, r)
                    }
                }))))
            }), new Ne(s, r)
        }, t)
    }

    function K(t, e, n) {
        return kn(function () {
            return Q(t, e - n.now(), n)
        })
    }

    function X(t, e, n) {
        var i, s;
        return wt(e) ? s = e : (i = e, s = n), new es(function (e) {
            function n() {
                l.setDisposable(t.subscribe(function (t) {
                    var n = kt(s)(t);
                    if (n === xt) return e.onError(n.e);
                    var i = new Ae;
                    r.add(i), i.setDisposable(n.subscribe(function () {
                        e.onNext(t), r.remove(i), o()
                    }, function (t) {
                        e.onError(t)
                    }, function () {
                        e.onNext(t), r.remove(i), o()
                    }))
                }, function (t) {
                    e.onError(t)
                }, function () {
                    a = !0, l.dispose(), o()
                }))
            }

            function o() {
                a && 0 === r.length && e.onCompleted()
            }
            var r = new xe,
                a = !1,
                l = new $e;
            return i ? l.setDisposable(i.subscribe(n, function (t) {
                e.onError(t)
            }, n)) : n(), new Ne(l, r)
        }, this)
    }

    function J(t, e) {
        return new es(function (n) {
            var i, s = !1,
                o = new $e,
                r = 0,
                a = t.subscribe(function (t) {
                    var a = kt(e)(t);
                    if (a === xt) return n.onError(a.e);
                    _t(a) && (a = Ri(a)), s = !0, i = t, r++;
                    var l = r,
                        u = new Ae;
                    o.setDisposable(u), u.setDisposable(a.subscribe(function () {
                        s && r === l && n.onNext(i), s = !1, u.dispose()
                    }, function (t) {
                        n.onError(t)
                    }, function () {
                        s && r === l && n.onNext(i), s = !1, u.dispose()
                    }))
                }, function (t) {
                    o.dispose(), n.onError(t), s = !1, r++
                }, function () {
                    o.dispose(), s && n.onNext(i), n.onCompleted(), s = !1, r++
                });
            return new Ne(a, o)
        }, t)
    }

    function Z(t, e) {
        return new es(function (n) {
            function i() {
                r && (r = !1, n.onNext(s)), o && n.onCompleted()
            }
            var s, o = !1,
                r = !1,
                a = new Ae;
            return a.setDisposable(t.subscribe(function (t) {
                r = !0, s = t
            }, function (t) {
                n.onError(t)
            }, function () {
                o = !0, a.dispose()
            })), new Ne(a, e.subscribe(i, function (t) {
                n.onError(t)
            }, i))
        }, t)
    }

    function tt(t, e, n, i) {
        return wt(e) && (i = n, n = e, e = Ln()), cn.isObservable(i) || (i = qn(new Qi)), new es(function (s) {
            function o(t) {
                function e() {
                    return h = n === c
                }
                var n = c,
                    o = new Ae;
                l.setDisposable(o), o.setDisposable(t.subscribe(function () {
                    e() && a.setDisposable(i.subscribe(s)), o.dispose()
                }, function (t) {
                    e() && s.onError(t)
                }, function () {
                    e() && a.setDisposable(i.subscribe(s))
                }))
            }

            function r() {
                var t = !h;
                return t && c++, t
            }
            var a = new $e,
                l = new $e,
                u = new Ae;
            a.setDisposable(u);
            var c = 0,
                h = !1;
            return o(e), u.setDisposable(t.subscribe(function (t) {
                if (r()) {
                    s.onNext(t);
                    var e = kt(n)(t);
                    if (e === xt) return s.onError(e.e);
                    o(_t(e) ? Ri(e) : e)
                }
            }, function (t) {
                r() && s.onError(t)
            }, function () {
                r() && s.onCompleted()
            })), new Ne(a, l)
        }, t)
    }

    function et(t, e, n, i) {
        return Fe(n) && (i = n, n = qn(new Qi)), n instanceof Error && (n = qn(n)), Fe(i) || (i = Ge), cn.isObservable(n) || (n = qn(new Qi)), new es(function (s) {
            function o() {
                var t = r;
                c.setDisposable(i.scheduleFuture(null, e, function () {
                    u = r === t, u && (_t(n) && (n = Ri(n)), l.setDisposable(n.subscribe(s)))
                }))
            }
            var r = 0,
                a = new Ae,
                l = new $e,
                u = !1,
                c = new $e;
            return l.setDisposable(a), o(), a.setDisposable(t.subscribe(function (t) {
                u || (r++, s.onNext(t), o())
            }, function (t) {
                u || (r++, s.onError(t))
            }, function () {
                u || (r++, s.onCompleted())
            })), new Ne(l, c)
        }, t)
    }

    function nt(t, e, n) {
        return new es(function (i) {
            function s(t, e) {
                if (u[e] = t, r[e] = !0, a || (a = r.every(gt))) {
                    if (o) return i.onError(o);
                    var s = kt(n).apply(null, u);
                    if (s === xt) return i.onError(s.e);
                    i.onNext(s)
                }
                l && u[1] && i.onCompleted()
            }
            var o, r = [!1, !1],
                a = !1,
                l = !1,
                u = new Array(2);
            return new Ne(t.subscribe(function (t) {
                s(t, 0)
            }, function (t) {
                u[1] ? i.onError(t) : o = t
            }, function () {
                l = !0, u[1] && i.onCompleted()
            }), e.subscribe(function (t) {
                s(t, 1)
            }, function (t) {
                i.onError(t)
            }, function () {
                l = !0, s(!0, 1)
            }))
        }, t)
    }

    function it(t) {
        return {
            "@@transducer/init": function () {
                return t
            },
            "@@transducer/step": function (t, e) {
                return t.onNext(e)
            },
            "@@transducer/result": function (t) {
                return t.onCompleted()
            }
        }
    }
    var st = {
            "function": !0,
            object: !0
        },
        ot = st[typeof exports] && exports && !exports.nodeType ? exports : null,
        rt = st[typeof module] && module && !module.nodeType ? module : null,
        at = e(ot && rt && "object" == typeof global && global),
        lt = e(st[typeof self] && self),
        ut = e(st[typeof window] && window),
        ct = rt && rt.exports === ot ? ot : null,
        ht = e(st[typeof this] && this),
        dt = at || ut !== (ht && ht.window) && ut || lt || ht || Function("return this")(),
        ft = {
            internals: {},
            config: {
                Promise: dt.Promise
            },
            helpers: {}
        },
        pt = ft.helpers.noop = function () {},
        gt = ft.helpers.identity = function (t) {
            return t
        },
        mt = ft.helpers.defaultNow = Date.now,
        vt = ft.helpers.defaultComparer = function (t, e) {
            return be(t, e)
        },
        yt = ft.helpers.defaultSubComparer = function (t, e) {
            return t > e ? 1 : e > t ? -1 : 0
        },
        bt = (ft.helpers.defaultKeySerializer = function (t) {
            return t.toString()
        }, ft.helpers.defaultError = function (t) {
            throw t
        }),
        _t = ft.helpers.isPromise = function (t) {
            return !!t && "function" != typeof t.subscribe && "function" == typeof t.then
        },
        wt = ft.helpers.isFunction = function () {
            var t = function (t) {
                return "function" == typeof t || !1
            };
            return t(/x/) && (t = function (t) {
                return "function" == typeof t && "[object Function]" == toString.call(t)
            }), t
        }(),
        xt = {
            e: {}
        },
        kt = ft.internals.tryCatch = function (t) {
            if (!wt(t)) throw new TypeError("fn must be a function");
            return i(t)
        };
    ft.config.longStackSupport = !1;
    var St = !1,
        Ct = kt(function () {
            throw new Error
        })();
    St = !!Ct.e && !!Ct.e.stack;
    var Tt, Dt = u(),
        Et = "From previous event:",
        jt = ft.EmptyError = function () {
            this.message = "Sequence contains no elements.", Error.call(this)
        };
    jt.prototype = Object.create(Error.prototype), jt.prototype.name = "EmptyError";
    var At = ft.ObjectDisposedError = function () {
        this.message = "Object has been disposed", Error.call(this)
    };
    At.prototype = Object.create(Error.prototype), At.prototype.name = "ObjectDisposedError";
    var $t = ft.ArgumentOutOfRangeError = function () {
        this.message = "Argument out of range", Error.call(this)
    };
    $t.prototype = Object.create(Error.prototype), $t.prototype.name = "ArgumentOutOfRangeError";
    var Nt = ft.NotSupportedError = function (t) {
        this.message = t || "This operation is not supported", Error.call(this)
    };
    Nt.prototype = Object.create(Error.prototype), Nt.prototype.name = "NotSupportedError";
    var Mt = ft.NotImplementedError = function (t) {
        this.message = t || "This operation is not implemented", Error.call(this)
    };
    Mt.prototype = Object.create(Error.prototype), Mt.prototype.name = "NotImplementedError";
    var Lt = ft.helpers.notImplemented = function () {
            throw new Mt
        },
        Ot = (ft.helpers.notSupported = function () {
            throw new Nt
        }, "function" == typeof Symbol && Symbol.iterator || "_es6shim_iterator_");
    dt.Set && "function" == typeof (new dt.Set)["@@iterator"] && (Ot = "@@iterator");
    var Pt = ft.doneEnumerator = {
            done: !0,
            value: t
        },
        Ft = ft.helpers.isIterable = function (e) {
            return e && e[Ot] !== t
        },
        It = ft.helpers.isArrayLike = function (e) {
            return e && e.length !== t
        };
    ft.helpers.iterator = Ot;
    var Rt = ft.internals.bindCallback = function (t, e, n) {
            if ("undefined" == typeof e) return t;
            switch (n) {
                case 0:
                    return function () {
                        return t.call(e)
                    };
                case 1:
                    return function (n) {
                        return t.call(e, n)
                    };
                case 2:
                    return function (n, i) {
                        return t.call(e, n, i)
                    };
                case 3:
                    return function (n, i, s) {
                        return t.call(e, n, i, s)
                    }
            }
            return function () {
                return t.apply(e, arguments)
            }
        },
        qt = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor"],
        Ht = (qt.length, "[object Arguments]"),
        zt = "[object Array]",
        Ut = "[object Boolean]",
        Bt = "[object Date]",
        Wt = "[object Error]",
        Yt = "[object Function]",
        Vt = "[object Map]",
        Gt = "[object Number]",
        Qt = "[object Object]",
        Kt = "[object RegExp]",
        Xt = "[object Set]",
        Jt = "[object String]",
        Zt = "[object WeakMap]",
        te = "[object ArrayBuffer]",
        ee = "[object Float32Array]",
        ne = "[object Float64Array]",
        ie = "[object Int8Array]",
        se = "[object Int16Array]",
        oe = "[object Int32Array]",
        re = "[object Uint8Array]",
        ae = "[object Uint8ClampedArray]",
        le = "[object Uint16Array]",
        ue = "[object Uint32Array]",
        ce = {};
    ce[ee] = ce[ne] = ce[ie] = ce[se] = ce[oe] = ce[re] = ce[ae] = ce[le] = ce[ue] = !0, ce[Ht] = ce[zt] = ce[te] = ce[Ut] = ce[Bt] = ce[Wt] = ce[Yt] = ce[Vt] = ce[Gt] = ce[Qt] = ce[Kt] = ce[Xt] = ce[Jt] = ce[Zt] = !1;
    var he = Object.prototype,
        de = he.hasOwnProperty,
        fe = he.toString,
        pe = Math.pow(2, 53) - 1,
        ge = Object.keys || function () {
            var t = Object.prototype.hasOwnProperty,
                e = !{
                    toString: null
                }.propertyIsEnumerable("toString"),
                n = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor"],
                i = n.length;
            return function (s) {
                if ("object" != typeof s && ("function" != typeof s || null === s)) throw new TypeError("Object.keys called on non-object");
                var o, r, a = [];
                for (o in s) t.call(s, o) && a.push(o);
                if (e)
                    for (r = 0; i > r; r++) t.call(s, n[r]) && a.push(n[r]);
                return a
            }
        }(),
        me = ft.internals.isObject = function (t) {
            var e = typeof t;
            return !!t && ("object" === e || "function" === e)
        },
        ve = function () {
            try {
                Object({
                    toString: 0
                } + "")
            } catch (t) {
                return function () {
                    return !1
                }
            }
            return function (t) {
                return "function" != typeof t.toString && "string" == typeof (t + "")
            }
        }(),
        ye = Array.isArray || function (t) {
            return f(t) && p(t.length) && fe.call(t) === zt
        },
        be = ft.internals.isEqual = function (t, e) {
            return b(t, e)
        },
        _e = ({}.hasOwnProperty, Array.prototype.slice, ft.internals.inherits = function (t, e) {
            function n() {
                this.constructor = t
            }
            n.prototype = e.prototype, t.prototype = new n
        }),
        we = ft.internals.addProperties = function (t) {
            for (var e = [], n = 1, i = arguments.length; i > n; n++) e.push(arguments[n]);
            for (var s = 0, o = e.length; o > s; s++) {
                var r = e[s];
                for (var a in r) t[a] = r[a]
            }
        },
        xe = (ft.internals.addRef = function (t, e) {
            return new es(function (n) {
                return new Ne(e.getDisposable(), t.subscribe(n))
            })
        }, ft.CompositeDisposable = function () {
            var t, e, n = [];
            if (Array.isArray(arguments[0])) n = arguments[0], e = n.length;
            else
                for (e = arguments.length, n = new Array(e), t = 0; e > t; t++) n[t] = arguments[t];
            this.disposables = n, this.isDisposed = !1, this.length = n.length
        }),
        ke = xe.prototype;
    ke.add = function (t) {
        this.isDisposed ? t.dispose() : (this.disposables.push(t), this.length++)
    }, ke.remove = function (t) {
        var e = !1;
        if (!this.isDisposed) {
            var n = this.disposables.indexOf(t); - 1 !== n && (e = !0, this.disposables.splice(n, 1), this.length--, t.dispose())
        }
        return e
    }, ke.dispose = function () {
        if (!this.isDisposed) {
            this.isDisposed = !0;
            for (var t = this.disposables.length, e = new Array(t), n = 0; t > n; n++) e[n] = this.disposables[n];
            for (this.disposables = [], this.length = 0, n = 0; t > n; n++) e[n].dispose()
        }
    };
    var Se = ft.Disposable = function (t) {
        this.isDisposed = !1, this.action = t || pt
    };
    Se.prototype.dispose = function () {
        this.isDisposed || (this.action(), this.isDisposed = !0)
    };
    var Ce = Se.create = function (t) {
            return new Se(t)
        },
        Te = Se.empty = {
            dispose: pt
        },
        De = Se.isDisposable = function (t) {
            return t && wt(t.dispose)
        },
        Ee = Se.checkDisposed = function (t) {
            if (t.isDisposed) throw new At
        },
        je = Se._fixup = function (t) {
            return De(t) ? t : Te
        },
        Ae = ft.SingleAssignmentDisposable = function () {
            this.isDisposed = !1, this.current = null
        };
    Ae.prototype.getDisposable = function () {
        return this.current
    }, Ae.prototype.setDisposable = function (t) {
        if (this.current) throw new Error("Disposable has already been assigned");
        var e = this.isDisposed;
        !e && (this.current = t), e && t && t.dispose()
    }, Ae.prototype.dispose = function () {
        if (!this.isDisposed) {
            this.isDisposed = !0;
            var t = this.current;
            this.current = null, t && t.dispose()
        }
    };
    var $e = ft.SerialDisposable = function () {
        this.isDisposed = !1, this.current = null
    };
    $e.prototype.getDisposable = function () {
        return this.current
    }, $e.prototype.setDisposable = function (t) {
        var e = this.isDisposed;
        if (!e) {
            var n = this.current;
            this.current = t
        }
        n && n.dispose(), e && t && t.dispose()
    }, $e.prototype.dispose = function () {
        if (!this.isDisposed) {
            this.isDisposed = !0;
            var t = this.current;
            this.current = null
        }
        t && t.dispose()
    };
    var Ne = ft.BinaryDisposable = function (t, e) {
        this._first = t, this._second = e, this.isDisposed = !1
    };
    Ne.prototype.dispose = function () {
        if (!this.isDisposed) {
            this.isDisposed = !0;
            var t = this._first;
            this._first = null, t && t.dispose();
            var e = this._second;
            this._second = null, e && e.dispose()
        }
    };
    var Me = ft.NAryDisposable = function (t) {
        this._disposables = t, this.isDisposed = !1
    };
    Me.prototype.dispose = function () {
        if (!this.isDisposed) {
            this.isDisposed = !0;
            for (var t = 0, e = this._disposables.length; e > t; t++) this._disposables[t].dispose();
            this._disposables.length = 0
        }
    };
    var Le = (ft.RefCountDisposable = function () {
        function t(t) {
            this.disposable = t, this.disposable.count++, this.isInnerDisposed = !1
        }

        function e(t) {
            this.underlyingDisposable = t, this.isDisposed = !1, this.isPrimaryDisposed = !1, this.count = 0
        }
        return t.prototype.dispose = function () {
            this.disposable.isDisposed || this.isInnerDisposed || (this.isInnerDisposed = !0, this.disposable.count--, 0 === this.disposable.count && this.disposable.isPrimaryDisposed && (this.disposable.isDisposed = !0, this.disposable.underlyingDisposable.dispose()))
        }, e.prototype.dispose = function () {
            this.isDisposed || this.isPrimaryDisposed || (this.isPrimaryDisposed = !0, 0 === this.count && (this.isDisposed = !0, this.underlyingDisposable.dispose()))
        }, e.prototype.getDisposable = function () {
            return this.isDisposed ? Te : new t(this)
        }, e
    }(), ft.internals.ScheduledItem = function (t, e, n, i, s) {
        this.scheduler = t, this.state = e, this.action = n, this.dueTime = i, this.comparer = s || yt, this.disposable = new Ae
    });
    Le.prototype.invoke = function () {
        this.disposable.setDisposable(this.invokeCore())
    }, Le.prototype.compareTo = function (t) {
        return this.comparer(this.dueTime, t.dueTime)
    }, Le.prototype.isCancelled = function () {
        return this.disposable.isDisposed
    }, Le.prototype.invokeCore = function () {
        return je(this.action(this.scheduler, this.state))
    };
    var Oe = ft.Scheduler = function () {
            function t() {}
            t.isScheduler = function (e) {
                return e instanceof t
            };
            var e = t.prototype;
            return e.schedule = function (t, e) {
                throw new Mt
            }, e.scheduleFuture = function (e, n, i) {
                var s = n;
                return s instanceof Date && (s -= this.now()), s = t.normalize(s), 0 === s ? this.schedule(e, i) : this._scheduleFuture(e, s, i)
            }, e._scheduleFuture = function (t, e, n) {
                throw new Mt
            }, t.now = mt, t.prototype.now = mt, t.normalize = function (t) {
                return 0 > t && (t = 0), t
            }, t
        }(),
        Pe = Oe.normalize,
        Fe = Oe.isScheduler;
    ! function (t) {
        function e(t, e) {
            function n(e) {
                function i(t, e) {
                    return r ? o.remove(l) : a = !0, s(e, n), Te
                }
                var r = !1,
                    a = !1,
                    l = t.schedule(e, i);
                a || (o.add(l), r = !0)
            }
            var i = e[0],
                s = e[1],
                o = new xe;
            return s(i, n), o
        }

        function n(t, e) {
            function n(e, i) {
                function r(t, e) {
                    return a ? o.remove(u) : l = !0, s(e, n), Te
                }
                var a = !1,
                    l = !1,
                    u = t.scheduleFuture(e, i, r);
                l || (o.add(u), a = !0)
            }
            var i = e[0],
                s = e[1],
                o = new xe;
            return s(i, n), o
        }
        t.scheduleRecursive = function (t, n) {
            return this.schedule([t, n], e)
        }, t.scheduleRecursiveFuture = function (t, e, i) {
            return this.scheduleFuture([t, i], e, n)
        }
    }(Oe.prototype),
    function (t) {
        Oe.prototype.schedulePeriodic = function (t, e, n) {
            if ("undefined" == typeof dt.setInterval) throw new Nt;
            e = Pe(e);
            var i = t,
                s = dt.setInterval(function () {
                    i = n(i)
                }, e);
            return Ce(function () {
                dt.clearInterval(s)
            })
        }
    }(Oe.prototype);
    var Ie, Re, qe = function (t) {
            function e() {
                t.call(this)
            }
            return _e(e, t), e.prototype.schedule = function (t, e) {
                return je(e(this, t))
            }, e
        }(Oe),
        He = Oe.immediate = new qe,
        ze = function (t) {
            function e() {
                for (; i.length > 0;) {
                    var t = i.dequeue();
                    !t.isCancelled() && t.invoke()
                }
            }

            function n() {
                t.call(this)
            }
            var i;
            return _e(n, t), n.prototype.schedule = function (t, n) {
                var o = new Le(this, t, n, this.now());
                if (i) i.enqueue(o);
                else {
                    i = new Qe(4), i.enqueue(o);
                    var r = kt(e)();
                    i = null, r === xt && s(r.e)
                }
                return o.disposable
            }, n.prototype.scheduleRequired = function () {
                return !i
            }, n
        }(Oe),
        Ue = Oe.currentThread = new ze,
        Be = (ft.internals.SchedulePeriodicRecursive = function () {
            function t(t) {
                return function (e, n) {
                    n(0, t._period);
                    var i = kt(t._action)(t._state);
                    i === xt && (t._cancel.dispose(), s(i.e)), t._state = i
                }
            }

            function e(t, e, n, i) {
                this._scheduler = t, this._state = e, this._period = n, this._action = i
            }
            return e.prototype.start = function () {
                var e = new Ae;
                return this._cancel = e, e.setDisposable(this._scheduler.scheduleRecursiveFuture(0, this._period, t(this))), e
            }, e
        }(), function () {
            var t, e = pt;
            if (dt.setTimeout) t = dt.setTimeout, e = dt.clearTimeout;
            else {
                if (!dt.WScript) throw new Nt;
                t = function (t, e) {
                    dt.WScript.Sleep(e), t()
                }
            }
            return {
                setTimeout: t,
                clearTimeout: e
            }
        }()),
        We = Be.setTimeout,
        Ye = Be.clearTimeout;
    ! function () {
        function t(e) {
            if (o) We(function () {
                t(e)
            }, 0);
            else {
                var n = i[e];
                if (n) {
                    o = !0;
                    var r = kt(n)();
                    Re(e), o = !1, r === xt && s(r.e)
                }
            }
        }

        function e() {
            if (!dt.postMessage || dt.importScripts) return !1;
            var t = !1,
                e = dt.onmessage;
            return dt.onmessage = function () {
                t = !0
            }, dt.postMessage("", "*"), dt.onmessage = e, t
        }
        var n = 1,
            i = {},
            o = !1;
        Re = function (t) {
            delete i[t]
        };
        var r = new RegExp("^" + String(toString).replace(/[.*+?^${}()|[\]\\]/g, "\\$&").replace(/toString| for [^\]]+/g, ".*?") + "$"),
            a = "function" == typeof (a = at && ct && at.setImmediate) && !r.test(a) && a;
        if (wt(a)) Ie = function (e) {
            var s = n++;
            return i[s] = e, a(function () {
                t(s)
            }), s
        };
        else if ("undefined" != typeof process && "[object process]" === {}.toString.call(process)) Ie = function (e) {
            var s = n++;
            return i[s] = e, process.nextTick(function () {
                t(s)
            }), s
        };
        else if (e()) {
            var l = "ms.rx.schedule" + Math.random(),
                u = function (e) {
                    "string" == typeof e.data && e.data.substring(0, l.length) === l && t(e.data.substring(l.length))
                };
            dt.addEventListener("message", u, !1), Ie = function (t) {
                var e = n++;
                return i[e] = t, dt.postMessage(l + currentId, "*"), e
            }
        } else if (dt.MessageChannel) {
            var c = new dt.MessageChannel;
            c.port1.onmessage = function (e) {
                t(e.data)
            }, Ie = function (t) {
                var e = n++;
                return i[e] = t, c.port2.postMessage(e), e
            }
        } else Ie = "document" in dt && "onreadystatechange" in dt.document.createElement("script") ? function (e) {
            var s = dt.document.createElement("script"),
                o = n++;
            return i[o] = e, s.onreadystatechange = function () {
                t(o), s.onreadystatechange = null, s.parentNode.removeChild(s), s = null
            }, dt.document.documentElement.appendChild(s), o
        } : function (e) {
            var s = n++;
            return i[s] = e, We(function () {
                t(s)
            }, 0), s
        }
    }();
    var Ve = function (t) {
            function e() {
                t.call(this)
            }

            function n(t, e, n, i) {
                return function () {
                    t.setDisposable(Se._fixup(e(n, i)))
                }
            }

            function i(t) {
                this._id = t, this.isDisposed = !1
            }

            function s(t) {
                this._id = t, this.isDisposed = !1
            }
            return _e(e, t), i.prototype.dispose = function () {
                this.isDisposed || (this.isDisposed = !0, Re(this._id))
            }, s.prototype.dispose = function () {
                this.isDisposed || (this.isDisposed = !0, Ye(this._id))
            }, e.prototype.schedule = function (t, e) {
                var s = new Ae,
                    o = Ie(n(s, e, this, t));
                return new Ne(s, new i(o))
            }, e.prototype._scheduleFuture = function (t, e, i) {
                if (0 === e) return this.schedule(t, i);
                var o = new Ae,
                    r = We(n(o, i, this, t), e);
                return new Ne(o, new s(r))
            }, e
        }(Oe),
        Ge = Oe["default"] = Oe.async = new Ve;
    w.prototype.compareTo = function (t) {
        var e = this.value.compareTo(t.value);
        return 0 === e && (e = this.id - t.id), e
    };
    var Qe = ft.internals.PriorityQueue = function (t) {
            this.items = new Array(t), this.length = 0
        },
        Ke = Qe.prototype;
    Ke.isHigherPriority = function (t, e) {
        return this.items[t].compareTo(this.items[e]) < 0
    }, Ke.percolate = function (t) {
        if (!(t >= this.length || 0 > t)) {
            var e = t - 1 >> 1;
            if (!(0 > e || e === t) && this.isHigherPriority(t, e)) {
                var n = this.items[t];
                this.items[t] = this.items[e], this.items[e] = n, this.percolate(e)
            }
        }
    }, Ke.heapify = function (t) {
        if (+t || (t = 0), !(t >= this.length || 0 > t)) {
            var e = 2 * t + 1,
                n = 2 * t + 2,
                i = t;
            if (e < this.length && this.isHigherPriority(e, i) && (i = e), n < this.length && this.isHigherPriority(n, i) && (i = n), i !== t) {
                var s = this.items[t];
                this.items[t] = this.items[i], this.items[i] = s, this.heapify(i)
            }
        }
    }, Ke.peek = function () {
        return this.items[0].value
    }, Ke.removeAt = function (e) {
        this.items[e] = this.items[--this.length], this.items[this.length] = t, this.heapify()
    }, Ke.dequeue = function () {
        var t = this.peek();
        return this.removeAt(0), t
    }, Ke.enqueue = function (t) {
        var e = this.length++;
        this.items[e] = new w(Qe.count++, t), this.percolate(e)
    }, Ke.remove = function (t) {
        for (var e = 0; e < this.length; e++)
            if (this.items[e].value === t) return this.removeAt(e), !0;
        return !1
    }, Qe.count = 0;
    var Xe, Je = ft.Notification = function () {
            function t() {}
            return t.prototype._accept = function (t, e, n) {
                throw new Mt
            }, t.prototype._acceptObserver = function (t, e, n) {
                throw new Mt
            }, t.prototype.accept = function (t, e, n) {
                return t && "object" == typeof t ? this._acceptObserver(t) : this._accept(t, e, n)
            }, t.prototype.toObservable = function (t) {
                var e = this;
                return Fe(t) || (t = He), new es(function (n) {
                    return t.schedule(e, function (t, e) {
                        e._acceptObserver(n), "N" === e.kind && n.onCompleted()
                    })
                })
            }, t
        }(),
        Ze = function (t) {
            function e(t) {
                this.value = t, this.kind = "N"
            }
            return _e(e, t), e.prototype._accept = function (t) {
                return t(this.value)
            }, e.prototype._acceptObserver = function (t) {
                return t.onNext(this.value)
            }, e.prototype.toString = function () {
                return "OnNext(" + this.value + ")"
            }, e
        }(Je),
        tn = function (t) {
            function e(t) {
                this.error = t, this.kind = "E"
            }
            return _e(e, t), e.prototype._accept = function (t, e) {
                return e(this.error)
            }, e.prototype._acceptObserver = function (t) {
                return t.onError(this.error)
            }, e.prototype.toString = function () {
                return "OnError(" + this.error + ")"
            }, e
        }(Je),
        en = function (t) {
            function e() {
                this.kind = "C"
            }
            return _e(e, t), e.prototype._accept = function (t, e, n) {
                return n()
            }, e.prototype._acceptObserver = function (t) {
                return t.onCompleted()
            }, e.prototype.toString = function () {
                return "OnCompleted()"
            }, e
        }(Je),
        nn = Je.createOnNext = function (t) {
            return new Ze(t)
        },
        sn = Je.createOnError = function (t) {
            return new tn(t)
        },
        on = Je.createOnCompleted = function () {
            return new en
        },
        rn = ft.Observer = function () {},
        an = rn.create = function (t, e, n) {
            return t || (t = pt), e || (e = bt), n || (n = pt), new un(t, e, n)
        },
        ln = ft.internals.AbstractObserver = function (t) {
            function e() {
                this.isStopped = !1
            }
            return _e(e, t), e.prototype.next = Lt, e.prototype.error = Lt, e.prototype.completed = Lt, e.prototype.onNext = function (t) {
                !this.isStopped && this.next(t)
            }, e.prototype.onError = function (t) {
                this.isStopped || (this.isStopped = !0, this.error(t))
            }, e.prototype.onCompleted = function () {
                this.isStopped || (this.isStopped = !0, this.completed())
            }, e.prototype.dispose = function () {
                this.isStopped = !0
            }, e.prototype.fail = function (t) {
                return this.isStopped ? !1 : (this.isStopped = !0, this.error(t), !0)
            }, e
        }(rn),
        un = ft.AnonymousObserver = function (t) {
            function e(e, n, i) {
                t.call(this), this._onNext = e, this._onError = n, this._onCompleted = i
            }
            return _e(e, t), e.prototype.next = function (t) {
                this._onNext(t)
            }, e.prototype.error = function (t) {
                this._onError(t)
            }, e.prototype.completed = function () {
                this._onCompleted()
            }, e
        }(ln),
        cn = ft.Observable = function () {
            function t(t, e) {
                return function (n) {
                    var i = n.onError;
                    return n.onError = function (e) {
                        o(e, t), i.call(n, e)
                    }, e.call(t, n)
                }
            }

            function e() {
                if (ft.config.longStackSupport && St) {
                    var e = this._subscribe,
                        n = kt(s)(new Error).e;
                    this.stack = n.stack.substring(n.stack.indexOf("\n") + 1), this._subscribe = t(this, e)
                }
            }
            return Xe = e.prototype, e.isObservable = function (t) {
                return t && wt(t.subscribe)
            }, Xe.subscribe = Xe.forEach = function (t, e, n) {
                return this._subscribe("object" == typeof t ? t : an(t, e, n))
            }, Xe.subscribeOnNext = function (t, e) {
                return this._subscribe(an("undefined" != typeof e ? function (n) {
                    t.call(e, n)
                } : t))
            }, Xe.subscribeOnError = function (t, e) {
                return this._subscribe(an(null, "undefined" != typeof e ? function (n) {
                    t.call(e, n)
                } : t))
            }, Xe.subscribeOnCompleted = function (t, e) {
                return this._subscribe(an(null, null, "undefined" != typeof e ? function () {
                    t.call(e)
                } : t))
            }, e
        }(),
        hn = ft.internals.ScheduledObserver = function (t) {
            function e(e, n) {
                t.call(this), this.scheduler = e, this.observer = n, this.isAcquired = !1, this.hasFaulted = !1, this.queue = [], this.disposable = new $e
            }

            function n(t, e) {
                return function () {
                    t.onNext(e)
                }
            }

            function i(t, e) {
                return function () {
                    t.onError(e)
                }
            }

            function o(t) {
                return function () {
                    t.onCompleted()
                }
            }

            function r(t, e) {
                var n;
                if (!(t.queue.length > 0)) return void(t.isAcquired = !1);
                n = t.queue.shift();
                var i = kt(n)();
                return i === xt ? (t.queue = [], t.hasFaulted = !0, s(i.e)) : void e(t)
            }
            return _e(e, t), e.prototype.next = function (t) {
                this.queue.push(n(this.observer, t))
            }, e.prototype.error = function (t) {
                this.queue.push(i(this.observer, t))
            }, e.prototype.completed = function () {
                this.queue.push(o(this.observer))
            }, e.prototype.ensureActive = function () {
                var t = !1;
                !this.hasFaulted && this.queue.length > 0 && (t = !this.isAcquired, this.isAcquired = !0), t && this.disposable.setDisposable(this.scheduler.scheduleRecursive(this, r))
            }, e.prototype.dispose = function () {
                t.prototype.dispose.call(this), this.disposable.dispose()
            }, e
        }(ln),
        dn = ft.ObservableBase = function (t) {
            function e(t) {
                return t && wt(t.dispose) ? t : wt(t) ? Ce(t) : Te
            }

            function n(t, n) {
                var i = n[0],
                    o = n[1],
                    r = kt(o.subscribeCore).call(o, i);
                r !== xt || i.fail(xt.e) || s(xt.e), i.setDisposable(e(r))
            }

            function i() {
                t.call(this)
            }
            return _e(i, t), i.prototype._subscribe = function (t) {
                var e = new ns(t),
                    i = [e, this];
                return Ue.scheduleRequired() ? Ue.schedule(i, n) : n(null, i), e
            }, i.prototype.subscribeCore = Lt, i
        }(cn),
        fn = ft.FlatMapObservable = function (t) {
            function e(e, n, i, s) {
                this.resultSelector = wt(i) ? i : null, this.selector = Rt(wt(n) ? n : function () {
                    return n
                }, s, 3), this.source = e, t.call(this)
            }

            function n(t, e, n, i) {
                this.i = 0, this.selector = e, this.resultSelector = n, this.source = i, this.o = t, ln.call(this)
            }
            return _e(e, t), e.prototype.subscribeCore = function (t) {
                return this.source.subscribe(new n(t, this.selector, this.resultSelector, this))
            }, _e(n, ln), n.prototype._wrapResult = function (t, e, n) {
                return this.resultSelector ? t.map(function (t, i) {
                    return this.resultSelector(e, t, n, i)
                }, this) : t
            }, n.prototype.next = function (t) {
                var e = this.i++,
                    n = kt(this.selector)(t, e, this.source);
                return n === xt ? this.o.onError(n.e) : (_t(n) && (n = Ri(n)), (It(n) || Ft(n)) && (n = cn.from(n)), void this.o.onNext(this._wrapResult(n, t, e)))
            }, n.prototype.error = function (t) {
                this.o.onError(t)
            }, n.prototype.completed = function () {
                this.o.onCompleted()
            }, e
        }(dn),
        pn = ft.internals.Enumerable = function () {};
    x.prototype.dispose = function () {
        this.isDisposed || (this.isDisposed = !0, this._s.isDisposed = !0)
    };
    var gn = function (t) {
        function e(e) {
            this.sources = e, t.call(this)
        }

        function n(t, e) {
            if (!t.isDisposed) {
                var n = kt(t.e.next).call(t.e);
                if (n === xt) return t.o.onError(n.e);
                if (n.done) return t.o.onCompleted();
                var s = n.value;
                _t(s) && (s = Ri(s));
                var o = new Ae;
                t.subscription.setDisposable(o), o.setDisposable(s.subscribe(new i(t, e)))
            }
        }

        function i(t, e) {
            this._state = t, this._recurse = e, ln.call(this)
        }
        return _e(e, t), e.prototype.subscribeCore = function (t) {
            var e = new $e,
                i = {
                    isDisposed: !1,
                    o: t,
                    subscription: e,
                    e: this.sources[Ot]()
                },
                s = Ue.scheduleRecursive(i, n);
            return new Me([e, s, new x(i)])
        }, _e(i, ln), i.prototype.next = function (t) {
            this._state.o.onNext(t)
        }, i.prototype.error = function (t) {
            this._state.o.onError(t)
        }, i.prototype.completed = function () {
            this._recurse(this._state)
        }, e
    }(dn);
    pn.prototype.concat = function () {
        return new gn(this)
    };
    var mn = function (t) {
        function e(e) {
            this.sources = e, t.call(this)
        }

        function n(t, e) {
            if (!t.isDisposed) {
                var n = kt(t.e.next).call(t.e);
                if (n === xt) return t.o.onError(n.e);
                if (n.done) return null !== t.lastError ? t.o.onError(t.lastError) : t.o.onCompleted();
                var s = n.value;
                _t(s) && (s = Ri(s));
                var o = new Ae;
                t.subscription.setDisposable(o), o.setDisposable(s.subscribe(new i(t, e)))
            }
        }

        function i(t, e) {
            this._state = t, this._recurse = e, ln.call(this)
        }
        return _e(e, t), e.prototype.subscribeCore = function (t) {
            var e = new $e,
                i = {
                    isDisposed: !1,
                    e: this.sources[Ot](),
                    subscription: e,
                    lastError: null,
                    o: t
                },
                s = Ue.scheduleRecursive(i, n);
            return new Me([e, s, new x(i)])
        }, _e(i, ln), i.prototype.next = function (t) {
            this._state.o.onNext(t)
        }, i.prototype.error = function (t) {
            this._state.lastError = t, this._recurse(this._state)
        }, i.prototype.completed = function () {
            this._state.o.onCompleted()
        }, e
    }(dn);
    pn.prototype.catchError = function () {
        return new mn(this)
    }, pn.prototype.catchErrorWhen = function (t) {
        var e = this;
        return new es(function (n) {
            var i, s = new ss,
                o = new ss,
                r = t(s),
                a = r.subscribe(o),
                l = e[Ot](),
                u = {
                    isDisposed: !1
                },
                c = new $e,
                h = Ue.scheduleRecursive(null, function (t, e) {
                    if (!u.isDisposed) {
                        var r = kt(l.next).call(l);
                        if (r === xt) return n.onError(r.e);
                        if (r.done) return void(i ? n.onError(i) : n.onCompleted());
                        var a = r.value;
                        _t(a) && (a = Ri(a));
                        var h = new Ae,
                            d = new Ae;
                        c.setDisposable(new Ne(d, h)), h.setDisposable(a.subscribe(function (t) {
                            n.onNext(t)
                        }, function (t) {
                            d.setDisposable(o.subscribe(e, function (t) {
                                n.onError(t)
                            }, function () {
                                n.onCompleted()
                            })), s.onNext(t)
                        }, function () {
                            n.onCompleted()
                        }))
                    }
                });
            return new Me([a, c, h, new x(u)])
        })
    };
    var vn = function (t) {
            function e(t, e) {
                this.v = t, this.c = null == e ? -1 : e
            }

            function n(t) {
                this.v = t.v, this.l = t.c
            }
            return _e(e, t), e.prototype[Ot] = function () {
                return new n(this)
            }, n.prototype.next = function () {
                return 0 === this.l ? Pt : (this.l > 0 && this.l--, {
                    done: !1,
                    value: this.v
                })
            }, e
        }(pn),
        yn = pn.repeat = function (t, e) {
            return new vn(t, e)
        },
        bn = function (t) {
            function e(t, e, n) {
                this.s = t, this.fn = e ? Rt(e, n, 3) : null
            }

            function n(t) {
                this.i = -1, this.s = t.s, this.l = this.s.length, this.fn = t.fn
            }
            return _e(e, t), e.prototype[Ot] = function () {
                return new n(this)
            }, n.prototype.next = function () {
                return ++this.i < this.l ? {
                    done: !1,
                    value: this.fn ? this.fn(this.s[this.i], this.i, this.s) : this.s[this.i]
                } : Pt
            }, e
        }(pn),
        _n = pn.of = function (t, e, n) {
            return new bn(t, e, n)
        },
        wn = function (t) {
            function e(e) {
                this.source = e, t.call(this)
            }

            function n(t) {
                this.o = t, this.a = [], ln.call(this)
            }
            return _e(e, t), e.prototype.subscribeCore = function (t) {
                return this.source.subscribe(new n(t))
            }, _e(n, ln), n.prototype.next = function (t) {
                this.a.push(t)
            }, n.prototype.error = function (t) {
                this.o.onError(t)
            }, n.prototype.completed = function () {
                this.o.onNext(this.a), this.o.onCompleted()
            }, e
        }(dn);
    Xe.toArray = function () {
        return new wn(this)
    }, cn.create = function (t, e) {
        return new es(t, e)
    };
    var xn = function (t) {
            function e(e) {
                this._f = e, t.call(this)
            }
            return _e(e, t), e.prototype.subscribeCore = function (t) {
                var e = kt(this._f)();
                return e === xt ? qn(e.e).subscribe(t) : (_t(e) && (e = Ri(e)), e.subscribe(t))
            }, e
        }(dn),
        kn = cn.defer = function (t) {
            return new xn(t)
        },
        Sn = function (t) {
            function e(e) {
                this.scheduler = e, t.call(this)
            }

            function n(t, e) {
                this.observer = t, this.scheduler = e
            }

            function i(t, e) {
                return e.onCompleted(), Te
            }
            return _e(e, t), e.prototype.subscribeCore = function (t) {
                var e = new n(t, this.scheduler);
                return e.run()
            }, n.prototype.run = function () {
                var t = this.observer;
                return this.scheduler === He ? i(null, t) : this.scheduler.schedule(t, i)
            }, e
        }(dn),
        Cn = new Sn(He),
        Tn = cn.empty = function (t) {
            return Fe(t) || (t = He), t === He ? Cn : new Sn(t)
        },
        Dn = function (t) {
            function e(e, n, i) {
                this._iterable = e, this._fn = n, this._scheduler = i, t.call(this)
            }

            function n(t, e, n) {
                return function (i, s) {
                    var o = kt(e.next).call(e);
                    if (o === xt) return t.onError(o.e);
                    if (o.done) return t.onCompleted();
                    var r = o.value;
                    return wt(n) && (r = kt(n)(r, i), r === xt) ? t.onError(r.e) : (t.onNext(r), void s(i + 1))
                }
            }
            return _e(e, t), e.prototype.subscribeCore = function (t) {
                var e = Object(this._iterable),
                    i = E(e);
                return this._scheduler.scheduleRecursive(0, n(t, i, this._fn))
            }, e
        }(dn),
        En = Math.pow(2, 53) - 1;
    k.prototype[Ot] = function () {
        return new S(this._s)
    }, S.prototype[Ot] = function () {
        return this
    }, S.prototype.next = function () {
        return this._i < this._l ? {
            done: !1,
            value: this._s.charAt(this._i++)
        } : Pt
    }, C.prototype[Ot] = function () {
        return new T(this._a)
    }, T.prototype[Ot] = function () {
        return this
    }, T.prototype.next = function () {
        return this._i < this._l ? {
            done: !1,
            value: this._a[this._i++]
        } : Pt
    };
    var jn = cn.from = function (t, e, n, i) {
            if (null == t) throw new Error("iterable cannot be null.");
            if (e && !wt(e)) throw new Error("mapFn when provided must be a function");
            if (e) var s = Rt(e, n, 2);
            return Fe(i) || (i = Ue), new Dn(t, s, i)
        },
        An = function (t) {
            function e(e, n) {
                this._args = e, this._scheduler = n, t.call(this)
            }

            function n(t, e) {
                var n = e.length;
                return function (i, s) {
                    n > i ? (t.onNext(e[i]), s(i + 1)) : t.onCompleted()
                }
            }
            return _e(e, t), e.prototype.subscribeCore = function (t) {
                return this._scheduler.scheduleRecursive(0, n(t, this._args))
            }, e
        }(dn),
        $n = cn.fromArray = function (t, e) {
            return Fe(e) || (e = Ue), new An(t, e)
        },
        Nn = function (t) {
            function e() {
                t.call(this)
            }
            return _e(e, t), e.prototype.subscribeCore = function (t) {
                return Te
            }, e
        }(dn),
        Mn = new Nn,
        Ln = cn.never = function () {
            return Mn
        };
    cn.of = function () {
        for (var t = arguments.length, e = new Array(t), n = 0; t > n; n++) e[n] = arguments[n];
        return new An(e, Ue)
    }, cn.ofWithScheduler = function (t) {
        for (var e = arguments.length, n = new Array(e - 1), i = 1; e > i; i++) n[i - 1] = arguments[i];
        return new An(n, t)
    };
    var On = function (t) {
        function e(e, n) {
            this._o = e, this._keys = Object.keys(e), this._scheduler = n, t.call(this)
        }

        function n(t, e, n) {
            return function (i, s) {
                if (i < n.length) {
                    var o = n[i];
                    t.onNext([o, e[o]]), s(i + 1)
                } else t.onCompleted()
            }
        }
        return _e(e, t), e.prototype.subscribeCore = function (t) {
            return this._scheduler.scheduleRecursive(0, n(t, this._o, this._keys))
        }, e
    }(dn);
    cn.pairs = function (t, e) {
        return e || (e = Ue), new On(t, e)
    };
    var Pn = function (t) {
        function e(e, n, i) {
            this.start = e, this.rangeCount = n, this.scheduler = i, t.call(this)
        }

        function n(t, e, n) {
            return function (i, s) {
                e > i ? (n.onNext(t + i), s(i + 1)) : n.onCompleted()
            }
        }
        return _e(e, t), e.prototype.subscribeCore = function (t) {
            return this.scheduler.scheduleRecursive(0, n(this.start, this.rangeCount, t))
        }, e
    }(dn);
    cn.range = function (t, e, n) {
        return Fe(n) || (n = Ue), new Pn(t, e, n)
    };
    var Fn = function (t) {
        function e(e, n, i) {
            this.value = e, this.repeatCount = null == n ? -1 : n, this.scheduler = i, t.call(this)
        }
        return _e(e, t), e.prototype.subscribeCore = function (t) {
            var e = new N(t, this);
            return e.run()
        }, e
    }(dn);
    N.prototype.run = function () {
        function t(t, i) {
            return (-1 === t || t > 0) && (e.onNext(n), t > 0 && t--), 0 === t ? e.onCompleted() : void i(t)
        }
        var e = this.observer,
            n = this.parent.value;
        return this.parent.scheduler.scheduleRecursive(this.parent.repeatCount, t)
    }, cn.repeat = function (t, e, n) {
        return Fe(n) || (n = Ue), new Fn(t, e, n)
    };
    var In = function (t) {
            function e(e, n) {
                this._value = e, this._scheduler = n, t.call(this)
            }

            function n(t, e) {
                var n = e[0],
                    i = e[1];
                return i.onNext(n), i.onCompleted(), Te
            }
            return _e(e, t), e.prototype.subscribeCore = function (t) {
                var e = [this._value, t];
                return this._scheduler === He ? n(null, e) : this._scheduler.schedule(e, n)
            }, e
        }(dn),
        Rn = (cn["return"] = cn.just = function (t, e) {
            return Fe(e) || (e = He), new In(t, e)
        }, function (t) {
            function e(e, n) {
                this._error = e, this._scheduler = n, t.call(this)
            }

            function n(t, e) {
                var n = e[0],
                    i = e[1];
                return i.onError(n), Te
            }
            return _e(e, t), e.prototype.subscribeCore = function (t) {
                var e = [this._error, t];
                return this._scheduler === He ? n(null, e) : this._scheduler.schedule(e, n)
            }, e
        }(dn)),
        qn = cn["throw"] = function (t, e) {
            return Fe(e) || (e = He), new Rn(t, e)
        },
        Hn = function (t) {
            function e(e, n) {
                this.source = e, this._fn = n, t.call(this)
            }
            return _e(e, t), e.prototype.subscribeCore = function (t) {
                var e = new Ae,
                    n = new $e;
                return n.setDisposable(e), e.setDisposable(this.source.subscribe(new zn(t, n, this._fn))), n
            }, e
        }(dn),
        zn = function (t) {
            function e(e, n, i) {
                this._o = e, this._s = n, this._fn = i, t.call(this)
            }
            return _e(e, t), e.prototype.next = function (t) {
                this._o.onNext(t)
            }, e.prototype.completed = function () {
                return this._o.onCompleted()
            }, e.prototype.error = function (t) {
                var e = kt(this._fn)(t);
                if (e === xt) return this._o.onError(e.e);
                _t(e) && (e = Ri(e));
                var n = new Ae;
                this._s.setDisposable(n), n.setDisposable(e.subscribe(this._o))
            }, e
        }(ln);
    Xe["catch"] = function (t) {
        return wt(t) ? new Hn(this, t) : Un([this, t])
    };
    var Un = cn["catch"] = function () {
        var t;
        if (Array.isArray(arguments[0])) t = arguments[0];
        else {
            var e = arguments.length;
            t = new Array(e);
            for (var n = 0; e > n; n++) t[n] = arguments[n]
        }
        return _n(t).catchError()
    };
    Xe.combineLatest = function () {
        for (var t = arguments.length, e = new Array(t), n = 0; t > n; n++) e[n] = arguments[n];
        return Array.isArray(e[0]) ? e[0].unshift(this) : e.unshift(this), Yn.apply(this, e)
    };
    var Bn = function (t) {
            function e(e, n) {
                this._params = e, this._cb = n, t.call(this)
            }
            return _e(e, t), e.prototype.subscribeCore = function (t) {
                for (var e = this._params.length, n = new Array(e), i = {
                        hasValue: _(e, M),
                        hasValueAll: !1,
                        isDone: _(e, M),
                        values: new Array(e)
                    }, s = 0; e > s; s++) {
                    var o = this._params[s],
                        r = new Ae;
                    n[s] = r, _t(o) && (o = Ri(o)), r.setDisposable(o.subscribe(new Wn(t, s, this._cb, i)))
                }
                return new Me(n)
            }, e
        }(dn),
        Wn = function (t) {
            function e(e, n, i, s) {
                this._o = e, this._i = n, this._cb = i, this._state = s, t.call(this)
            }

            function n(t) {
                return function (e, n) {
                    return n !== t
                }
            }
            return _e(e, t), e.prototype.next = function (t) {
                if (this._state.values[this._i] = t, this._state.hasValue[this._i] = !0, this._state.hasValueAll || (this._state.hasValueAll = this._state.hasValue.every(gt))) {
                    var e = kt(this._cb).apply(null, this._state.values);
                    if (e === xt) return this._o.onError(e.e);
                    this._o.onNext(e)
                } else this._state.isDone.filter(n(this._i)).every(gt) && this._o.onCompleted()
            }, e.prototype.error = function (t) {
                this._o.onError(t)
            }, e.prototype.completed = function () {
                this._state.isDone[this._i] = !0, this._state.isDone.every(gt) && this._o.onCompleted()
            }, e
        }(ln),
        Yn = cn.combineLatest = function () {
            for (var t = arguments.length, e = new Array(t), n = 0; t > n; n++) e[n] = arguments[n];
            var i = wt(e[t - 1]) ? e.pop() : L;
            return Array.isArray(e[0]) && (e = e[0]), new Bn(e, i)
        };
    Xe.concat = function () {
        for (var t = [], e = 0, n = arguments.length; n > e; e++) t.push(arguments[e]);
        return t.unshift(this), Gn.apply(null, t)
    };
    var Vn = function (t) {
            function e(e) {
                this.sources = e, t.call(this)
            }

            function n(t, e) {
                this.sources = t, this.o = e
            }
            return _e(e, t), e.prototype.subscribeCore = function (t) {
                var e = new n(this.sources, t);
                return e.run()
            }, n.prototype.run = function () {
                var t, e = new $e,
                    n = this.sources,
                    i = n.length,
                    s = this.o,
                    o = He.scheduleRecursive(0, function (o, r) {
                        if (!t) {
                            if (o === i) return s.onCompleted();
                            var a = n[o];
                            _t(a) && (a = Ri(a));
                            var l = new Ae;
                            e.setDisposable(l), l.setDisposable(a.subscribe(function (t) {
                                s.onNext(t)
                            }, function (t) {
                                s.onError(t)
                            }, function () {
                                r(o + 1)
                            }))
                        }
                    });
                return new xe(e, o, Ce(function () {
                    t = !0
                }))
            }, e
        }(dn),
        Gn = cn.concat = function () {
            var t;
            if (Array.isArray(arguments[0])) t = arguments[0];
            else {
                t = new Array(arguments.length);
                for (var e = 0, n = arguments.length; n > e; e++) t[e] = arguments[e]
            }
            return new Vn(t)
        };
    Xe.concatAll = function () {
        return this.merge(1)
    };
    var Qn = function (t) {
            function e(e, n) {
                this.source = e, this.maxConcurrent = n, t.call(this)
            }
            return _e(e, t), e.prototype.subscribeCore = function (t) {
                var e = new xe;
                return e.add(this.source.subscribe(new Kn(t, this.maxConcurrent, e))), e
            }, e
        }(dn),
        Kn = function () {
            function t(t, e, n) {
                this.o = t, this.max = e, this.g = n, this.done = !1, this.q = [], this.activeCount = 0, this.isStopped = !1
            }

            function e(t, e) {
                this.parent = t, this.sad = e, this.isStopped = !1
            }
            return t.prototype.handleSubscribe = function (t) {
                var n = new Ae;
                this.g.add(n), _t(t) && (t = Ri(t)), n.setDisposable(t.subscribe(new e(this, n)))
            }, t.prototype.onNext = function (t) {
                this.isStopped || (this.activeCount < this.max ? (this.activeCount++, this.handleSubscribe(t)) : this.q.push(t))
            }, t.prototype.onError = function (t) {
                this.isStopped || (this.isStopped = !0, this.o.onError(t))
            }, t.prototype.onCompleted = function () {
                this.isStopped || (this.isStopped = !0, this.done = !0, 0 === this.activeCount && this.o.onCompleted())
            }, t.prototype.dispose = function () {
                this.isStopped = !0
            }, t.prototype.fail = function (t) {
                return this.isStopped ? !1 : (this.isStopped = !0, this.o.onError(t), !0)
            }, e.prototype.onNext = function (t) {
                this.isStopped || this.parent.o.onNext(t)
            }, e.prototype.onError = function (t) {
                this.isStopped || (this.isStopped = !0, this.parent.o.onError(t))
            }, e.prototype.onCompleted = function () {
                if (!this.isStopped) {
                    this.isStopped = !0;
                    var t = this.parent;
                    t.g.remove(this.sad), t.q.length > 0 ? t.handleSubscribe(t.q.shift()) : (t.activeCount--, t.done && 0 === t.activeCount && t.o.onCompleted())
                }
            }, e.prototype.dispose = function () {
                this.isStopped = !0
            }, e.prototype.fail = function (t) {
                return this.isStopped ? !1 : (this.isStopped = !0, this.parent.o.onError(t), !0)
            }, t
        }();
    Xe.merge = function (t) {
        return "number" != typeof t ? Xn(this, t) : new Qn(this, t)
    };
    var Xn = cn.merge = function () {
            var t, e, n = [],
                i = arguments.length;
            if (arguments[0])
                if (Fe(arguments[0]))
                    for (t = arguments[0], e = 1; i > e; e++) n.push(arguments[e]);
                else
                    for (t = He, e = 0; i > e; e++) n.push(arguments[e]);
            else
                for (t = He, e = 1; i > e; e++) n.push(arguments[e]);
            return Array.isArray(n[0]) && (n = n[0]), $(t, n).mergeAll()
        },
        Jn = ft.CompositeError = function (t) {
            this.innerErrors = t, this.message = "This contains multiple errors. Check the innerErrors", Error.call(this)
        };
    Jn.prototype = Object.create(Error.prototype), Jn.prototype.name = "CompositeError";
    var Zn = function (t) {
            function e(e) {
                this.source = e, t.call(this)
            }
            return _e(e, t), e.prototype.subscribeCore = function (t) {
                var e = new xe,
                    n = new Ae,
                    i = {
                        isStopped: !1,
                        errors: [],
                        o: t
                    };
                return e.add(n), n.setDisposable(this.source.subscribe(new ti(e, i))), e
            }, e
        }(dn),
        ti = function (t) {
            function e(e, n) {
                this._group = e, this._state = n, t.call(this)
            }

            function n(t, e) {
                0 === e.length ? t.onCompleted() : 1 === e.length ? t.onError(e[0]) : t.onError(new Jn(e))
            }

            function i(e, n, i) {
                this._inner = e, this._group = n, this._state = i, t.call(this)
            }
            return _e(e, t), e.prototype.next = function (t) {
                var e = new Ae;
                this._group.add(e), _t(t) && (t = Ri(t)), e.setDisposable(t.subscribe(new i(e, this._group, this._state)))
            }, e.prototype.error = function (t) {
                this._state.errors.push(t), this._state.isStopped = !0, 1 === this._group.length && n(this._state.o, this._state.errors)
            }, e.prototype.completed = function () {
                this._state.isStopped = !0, 1 === this._group.length && n(this._state.o, this._state.errors)
            }, _e(i, t), i.prototype.next = function (t) {
                this._state.o.onNext(t)
            }, i.prototype.error = function (t) {
                this._state.errors.push(t), this._group.remove(this._inner), this._state.isStopped && 1 === this._group.length && n(this._state.o, this._state.errors)
            }, i.prototype.completed = function () {
                this._group.remove(this._inner), this._state.isStopped && 1 === this._group.length && n(this._state.o, this._state.errors)
            }, e
        }(ln);
    cn.mergeDelayError = function () {
        var t;
        if (Array.isArray(arguments[0])) t = arguments[0];
        else {
            var e = arguments.length;
            t = new Array(e);
            for (var n = 0; e > n; n++) t[n] = arguments[n]
        }
        var i = $(null, t);
        return new Zn(i)
    };
    var ei = function (t) {
            function e(e) {
                this.source = e, t.call(this)
            }
            return _e(e, t), e.prototype.subscribeCore = function (t) {
                var e = new xe,
                    n = new Ae;
                return e.add(n), n.setDisposable(this.source.subscribe(new ni(t, e))), e
            }, e
        }(dn),
        ni = function (t) {
            function e(e, n) {
                this.o = e, this.g = n, this.done = !1, t.call(this)
            }

            function n(e, n) {
                this.parent = e, this.sad = n, t.call(this)
            }
            return _e(e, t), e.prototype.next = function (t) {
                var e = new Ae;
                this.g.add(e), _t(t) && (t = Ri(t)), e.setDisposable(t.subscribe(new n(this, e)))
            }, e.prototype.error = function (t) {
                this.o.onError(t)
            }, e.prototype.completed = function () {
                this.done = !0, 1 === this.g.length && this.o.onCompleted()
            }, _e(n, t), n.prototype.next = function (t) {
                this.parent.o.onNext(t)
            }, n.prototype.error = function (t) {
                this.parent.o.onError(t)
            }, n.prototype.completed = function () {
                this.parent.g.remove(this.sad), this.parent.done && 1 === this.parent.g.length && this.parent.o.onCompleted()
            }, e
        }(ln);
    Xe.mergeAll = function () {
        return new ei(this)
    };
    var ii = function (t) {
            function e(e, n) {
                this._s = e, this._o = _t(n) ? Ri(n) : n, this._open = !1, t.call(this)
            }
            return _e(e, t), e.prototype.subscribeCore = function (t) {
                var e = new Ae;
                e.setDisposable(this._s.subscribe(new si(t, this))), _t(this._o) && (this._o = Ri(this._o));
                var n = new Ae;
                return n.setDisposable(this._o.subscribe(new oi(t, this, n))), new Ne(e, n)
            }, e
        }(dn),
        si = function (t) {
            function e(e, n) {
                this._o = e, this._p = n, t.call(this)
            }
            return _e(e, t), e.prototype.next = function (t) {
                this._p._open && this._o.onNext(t)
            }, e.prototype.error = function (t) {
                this._o.onError(t)
            }, e.prototype.onCompleted = function () {
                this._p._open && this._o.onCompleted()
            }, e
        }(ln),
        oi = function (t) {
            function e(e, n, i) {
                this._o = e, this._p = n, this._r = i, t.call(this)
            }
            return _e(e, t), e.prototype.next = function () {
                this._p._open = !0, this._r.dispose()
            }, e.prototype.error = function (t) {
                this._o.onError(t)
            }, e.prototype.onCompleted = function () {
                this._r.dispose()
            }, e
        }(ln);
    Xe.skipUntil = function (t) {
        return new ii(this, t)
    };
    var ri = function (t) {
        function e(e) {
            this.source = e, t.call(this)
        }

        function n(t, e) {
            this.o = t, this.inner = e, this.stopped = !1, this.latest = 0, this.hasLatest = !1, ln.call(this)
        }

        function i(t, e) {
            this.parent = t, this.id = e, ln.call(this)
        }
        return _e(e, t), e.prototype.subscribeCore = function (t) {
            var e = new $e,
                i = this.source.subscribe(new n(t, e));
            return new Ne(i, e)
        }, _e(n, ln), n.prototype.next = function (t) {
            var e = new Ae,
                n = ++this.latest;
            this.hasLatest = !0, this.inner.setDisposable(e), _t(t) && (t = Ri(t)), e.setDisposable(t.subscribe(new i(this, n)))
        }, n.prototype.error = function (t) {
            this.o.onError(t)
        }, n.prototype.completed = function () {
            this.stopped = !0, !this.hasLatest && this.o.onCompleted()
        }, _e(i, ln), i.prototype.next = function (t) {
            this.parent.latest === this.id && this.parent.o.onNext(t)
        }, i.prototype.error = function (t) {
            this.parent.latest === this.id && this.parent.o.onError(t)
        }, i.prototype.completed = function () {
            this.parent.latest === this.id && (this.parent.hasLatest = !1, this.parent.isStopped && this.parent.o.onCompleted())
        }, e
    }(dn);
    Xe["switch"] = Xe.switchLatest = function () {
        return new ri(this)
    };
    var ai = function (t) {
            function e(e, n) {
                this.source = e, this.other = _t(n) ? Ri(n) : n, t.call(this)
            }
            return _e(e, t), e.prototype.subscribeCore = function (t) {
                return new Ne(this.source.subscribe(t), this.other.subscribe(new li(t)))
            }, e
        }(dn),
        li = function (t) {
            function e(e) {
                this._o = e, t.call(this)
            }
            return _e(e, t), e.prototype.next = function () {
                this._o.onCompleted()
            }, e.prototype.error = function (t) {
                this._o.onError(t)
            }, e.prototype.onCompleted = pt, e
        }(ln);
    Xe.takeUntil = function (t) {
        return new ai(this, t)
    };
    var ui = function (t) {
            function e(e, n, i) {
                this._s = e, this._ss = n, this._cb = i, t.call(this)
            }
            return _e(e, t), e.prototype.subscribeCore = function (t) {
                for (var e = this._ss.length, n = {
                        hasValue: _(e, M),
                        hasValueAll: !1,
                        values: new Array(e)
                    }, i = this._ss.length, s = new Array(i + 1), o = 0; i > o; o++) {
                    var r = this._ss[o],
                        a = new Ae;
                    _t(r) && (r = Ri(r)), a.setDisposable(r.subscribe(new ci(t, o, n))), s[o] = a
                }
                var a = new Ae;
                return a.setDisposable(this._s.subscribe(new hi(t, this._cb, n))), s[i] = a, new Me(s)
            }, e
        }(dn),
        ci = function (t) {
            function e(e, n, i) {
                this._o = e, this._i = n, this._state = i, t.call(this)
            }
            return _e(e, t), e.prototype.next = function (t) {
                this._state.values[this._i] = t, this._state.hasValue[this._i] = !0, this._state.hasValueAll = this._state.hasValue.every(gt)
            }, e.prototype.error = function (t) {
                this._o.onError(t)
            }, e.prototype.completed = pt, e
        }(ln),
        hi = function (t) {
            function e(e, n, i) {
                this._o = e, this._cb = n, this._state = i, t.call(this)
            }
            return _e(e, t), e.prototype.next = function (t) {
                var e = [t].concat(this._state.values);
                if (this._state.hasValueAll) {
                    var n = kt(this._cb).apply(null, e);
                    return n === xt ? this._o.onError(n.e) : void this._o.onNext(n)
                }
            }, e.prototype.error = function (t) {
                this._o.onError(t)
            }, e.prototype.completed = function () {
                this._o.onCompleted()
            }, e
        }(ln);
    Xe.withLatestFrom = function () {
        if (0 === arguments.length) throw new Error("invalid arguments");
        for (var t = arguments.length, e = new Array(t), n = 0; t > n; n++) e[n] = arguments[n];
        var i = wt(e[t - 1]) ? e.pop() : L;
        return Array.isArray(e[0]) && (e = e[0]), new ui(this, e, i)
    };
    var di = function (t) {
            function e(e, n) {
                this._s = e, this._cb = n, t.call(this)
            }
            return _e(e, t), e.prototype.subscribeCore = function (t) {
                var e = this._s.length,
                    n = new Array(e);
                done = _(e, M), q = _(e, O);
                for (var i = 0; e > i; i++) {
                    var s = this._s[i],
                        o = new Ae;
                    n[i] = o, _t(s) && (s = Ri(s)), o.setDisposable(s.subscribe(new fi(t, i, this, q, done)))
                }
                return new Me(n)
            }, e
        }(dn),
        fi = function (t) {
            function e(e, n, i, s, o) {
                this._o = e, this._i = n, this._p = i, this._q = s, this._d = o, t.call(this)
            }

            function n(t) {
                return t.length > 0
            }

            function i(t) {
                return t.shift()
            }

            function s(t) {
                return function (e, n) {
                    return n !== t
                }
            }
            return _e(e, t), e.prototype.next = function (t) {
                if (this._q[this._i].push(t), this._q.every(n)) {
                    var e = this._q.map(i),
                        o = kt(this._p._cb).apply(null, e);
                    if (o === xt) return this._o.onError(o.e);
                    this._o.onNext(o)
                } else this._d.filter(s(this._i)).every(gt) && this._o.onCompleted()
            }, e.prototype.error = function (t) {
                this._o.onError(t)
            }, e.prototype.completed = function () {
                this._d[this._i] = !0, this._d.every(gt) && this._o.onCompleted()
            }, e
        }(ln);
    Xe.zip = function () {
        if (0 === arguments.length) throw new Error("invalid arguments");
        for (var t = arguments.length, e = new Array(t), n = 0; t > n; n++) e[n] = arguments[n];
        var i = wt(e[t - 1]) ? e.pop() : L;
        Array.isArray(e[0]) && (e = e[0]);
        var s = this;
        return e.unshift(s), new di(e, i)
    }, cn.zip = function () {
        for (var t = arguments.length, e = new Array(t), n = 0; t > n; n++) e[n] = arguments[n];
        Array.isArray(e[0]) && (e = wt(e[1]) ? e[0].concat(e[1]) : e[0]);
        var i = e.shift();
        return i.zip.apply(i, e)
    }, Xe.zipIterable = function () {
        if (0 === arguments.length) throw new Error("invalid arguments");
        for (var t = arguments.length, e = new Array(t), n = 0; t > n; n++) e[n] = arguments[n];
        var i = wt(e[t - 1]) ? e.pop() : L,
            s = this;
        return e.unshift(s), new es(function (t) {
            for (var n = e.length, o = _(n, O), r = _(n, M), a = new Array(n), l = 0; n > l; l++) ! function (n) {
                var l = e[n],
                    u = new Ae;
                (It(l) || Ft(l)) && (l = jn(l)), u.setDisposable(l.subscribe(function (e) {
                    if (o[n].push(e), o.every(function (t) {
                            return t.length > 0
                        })) {
                        var a = o.map(function (t) {
                                return t.shift()
                            }),
                            l = kt(i).apply(s, a);
                        if (l === xt) return t.onError(l.e);
                        t.onNext(l)
                    } else r.filter(function (t, e) {
                        return e !== n
                    }).every(gt) && t.onCompleted()
                }, function (e) {
                    t.onError(e)
                }, function () {
                    r[n] = !0, r.every(gt) && t.onCompleted()
                })), a[n] = u
            }(l);
            return new xe(a)
        }, s)
    }, Xe.asObservable = function () {
        return new es(P(this), this)
    };
    var pi = function (t) {
            function e(e) {
                this.source = e, t.call(this)
            }
            return _e(e, t), e.prototype.subscribeCore = function (t) {
                return this.source.subscribe(new gi(t))
            }, e
        }(dn),
        gi = function (t) {
            function e(e) {
                this._o = e, t.call(this)
            }
            return _e(e, t), e.prototype.next = function (t) {
                t.accept(this._o)
            }, e.prototype.error = function (t) {
                this._o.onError(t)
            }, e.prototype.completed = function () {
                this._o.onCompleted()
            }, e
        }(ln);
    Xe.dematerialize = function () {
        return new pi(this)
    };
    var mi = function (t) {
            function e(e, n, i) {
                this.source = e, this.keyFn = n, this.comparer = i, t.call(this)
            }
            return _e(e, t), e.prototype.subscribeCore = function (t) {
                return this.source.subscribe(new vi(t, this.keyFn, this.comparer))
            }, e
        }(dn),
        vi = function (t) {
            function e(e, n, i) {
                this.o = e, this.keyFn = n, this.comparer = i, this.hasCurrentKey = !1, this.currentKey = null, t.call(this)
            }
            return _e(e, t), e.prototype.next = function (t) {
                var e, n = t;
                return wt(this.keyFn) && (n = kt(this.keyFn)(t), n === xt) ? this.o.onError(n.e) : this.hasCurrentKey && (e = kt(this.comparer)(this.currentKey, n), e === xt) ? this.o.onError(e.e) : void(this.hasCurrentKey && e || (this.hasCurrentKey = !0, this.currentKey = n, this.o.onNext(t)))
            }, e.prototype.error = function (t) {
                this.o.onError(t)
            }, e.prototype.completed = function () {
                this.o.onCompleted()
            }, e
        }(ln);
    Xe.distinctUntilChanged = function (t, e) {
        return e || (e = vt), new mi(this, t, e)
    };
    var yi = function (t) {
        function e(e, n, i, s) {
            this.source = e, this._oN = n, this._oE = i, this._oC = s, t.call(this)
        }

        function n(t, e) {
            this.o = t, this.t = !e._oN || wt(e._oN) ? an(e._oN || pt, e._oE || pt, e._oC || pt) : e._oN, this.isStopped = !1, ln.call(this)
        }
        return _e(e, t), e.prototype.subscribeCore = function (t) {
            return this.source.subscribe(new n(t, this))
        }, _e(n, ln), n.prototype.next = function (t) {
            var e = kt(this.t.onNext).call(this.t, t);
            e === xt && this.o.onError(e.e), this.o.onNext(t)
        }, n.prototype.error = function (t) {
            var e = kt(this.t.onError).call(this.t, t);
            return e === xt ? this.o.onError(e.e) : void this.o.onError(t)
        }, n.prototype.completed = function () {
            var t = kt(this.t.onCompleted).call(this.t);
            return t === xt ? this.o.onError(t.e) : void this.o.onCompleted()
        }, e
    }(dn);
    Xe["do"] = Xe.tap = Xe.doAction = function (t, e, n) {
        return new yi(this, t, e, n)
    }, Xe.doOnNext = Xe.tapOnNext = function (t, e) {
        return this.tap("undefined" != typeof e ? function (n) {
            t.call(e, n)
        } : t)
    }, Xe.doOnError = Xe.tapOnError = function (t, e) {
        return this.tap(pt, "undefined" != typeof e ? function (n) {
            t.call(e, n)
        } : t)
    }, Xe.doOnCompleted = Xe.tapOnCompleted = function (t, e) {
        return this.tap(pt, null, "undefined" != typeof e ? function () {
            t.call(e)
        } : t)
    }, Xe["finally"] = function (t) {
        var e = this;
        return new es(function (n) {
            var i = kt(e.subscribe).call(e, n);
            return i === xt ? (t(), s(i.e)) : Ce(function () {
                var e = kt(i.dispose).call(i);
                t(), e === xt && s(e.e)
            })
        }, this)
    };
    var bi = function (t) {
        function e(e) {
            this.source = e, t.call(this)
        }

        function n(t) {
            this.o = t, this.isStopped = !1
        }
        return _e(e, t), e.prototype.subscribeCore = function (t) {
            return this.source.subscribe(new n(t))
        }, n.prototype.onNext = pt, n.prototype.onError = function (t) {
            this.isStopped || (this.isStopped = !0, this.o.onError(t))
        }, n.prototype.onCompleted = function () {
            this.isStopped || (this.isStopped = !0, this.o.onCompleted())
        }, n.prototype.dispose = function () {
            this.isStopped = !0
        }, n.prototype.fail = function (t) {
            return this.isStopped ? !1 : (this.isStopped = !0, this.observer.onError(t), !0)
        }, e
    }(dn);
    Xe.ignoreElements = function () {
        return new bi(this)
    };
    var _i = function (t) {
            function e(e, n) {
                this.source = e, t.call(this)
            }
            return _e(e, t), e.prototype.subscribeCore = function (t) {
                return this.source.subscribe(new wi(t))
            }, e
        }(dn),
        wi = function (t) {
            function e(e) {
                this._o = e, t.call(this)
            }
            return _e(e, t), e.prototype.next = function (t) {
                this._o.onNext(nn(t))
            }, e.prototype.error = function (t) {
                this._o.onNext(sn(t)), this._o.onCompleted()
            }, e.prototype.completed = function () {
                this._o.onNext(on()), this._o.onCompleted()
            }, e
        }(ln);
    Xe.materialize = function () {
        return new _i(this)
    }, Xe.repeat = function (t) {
        return yn(this, t).concat()
    }, Xe.retry = function (t) {
        return yn(this, t).catchError()
    }, Xe.retryWhen = function (t) {
        return yn(this).catchErrorWhen(t)
    };
    var xi = function (t) {
            function e(e, n, i, s) {
                this.source = e, this.accumulator = n, this.hasSeed = i, this.seed = s, t.call(this)
            }
            return _e(e, t), e.prototype.subscribeCore = function (t) {
                return this.source.subscribe(new ki(t, this))
            }, e
        }(dn),
        ki = function (t) {
            function e(e, n) {
                this._o = e, this._p = n, this._fn = n.accumulator, this._hs = n.hasSeed, this._s = n.seed, this._ha = !1, this._a = null, this._hv = !1, this._i = 0, t.call(this)
            }
            return _e(e, t), e.prototype.next = function (t) {
                return !this._hv && (this._hv = !0), this._ha ? this._a = kt(this._fn)(this._a, t, this._i, this._p) : (this._a = this._hs ? kt(this._fn)(this._s, t, this._i, this._p) : t, this._ha = !0), this._a === xt ? this._o.onError(this._a.e) : (this._o.onNext(this._a), void this._i++)
            }, e.prototype.error = function (t) {
                this._o.onError(t)
            }, e.prototype.completed = function () {
                !this._hv && this._hs && this._o.onNext(this._s), this._o.onCompleted()
            }, e
        }(ln);
    Xe.scan = function () {
        var t, e = !1,
            n = arguments[0];
        return 2 === arguments.length && (e = !0, t = arguments[1]), new xi(this, n, e, t)
    };
    var Si = function (t) {
            function e(e, n) {
                this.source = e, this._c = n, t.call(this)
            }
            return _e(e, t), e.prototype.subscribeCore = function (t) {
                return this.source.subscribe(new Ci(t, this._c))
            }, e
        }(dn),
        Ci = function (t) {
            function e(e, n) {
                this._o = e, this._c = n, this._q = [], t.call(this)
            }
            return _e(e, t), e.prototype.next = function (t) {
                this._q.push(t), this._q.length > this._c && this._o.onNext(this._q.shift())
            }, e.prototype.error = function (t) {
                this._o.onError(t)
            }, e.prototype.completed = function () {
                this._o.onCompleted()
            }, e
        }(ln);
    Xe.skipLast = function (t) {
        if (0 > t) throw new $t;
        return new Si(this, t)
    }, Xe.startWith = function () {
        var t, e = 0;
        arguments.length && Fe(arguments[0]) ? (t = arguments[0], e = 1) : t = He;
        for (var n = [], i = e, s = arguments.length; s > i; i++) n.push(arguments[i]);
        return _n([$n(n, t), this]).concat()
    };
    var Ti = function (t) {
        function e(e, n) {
            this._o = e, this._c = n, this._q = [], t.call(this)
        }
        return _e(e, t), e.prototype.next = function (t) {
            this._q.push(t), this._q.length > this._c && this._q.shift()
        }, e.prototype.error = function (t) {
            this._o.onError(t)
        }, e.prototype.completed = function () {
            for (; this._q.length > 0;) this._o.onNext(this._q.shift());
            this._o.onCompleted()
        }, e
    }(ln);
    Xe.takeLast = function (t) {
        if (0 > t) throw new $t;
        var e = this;
        return new es(function (n) {
            return e.subscribe(new Ti(n, t))
        }, e)
    }, Xe.flatMapConcat = Xe.concatMap = function (t, e, n) {
        return new fn(this, t, e, n).merge(1)
    };
    var Di = function (t) {
        function e(e, n, i) {
            this.source = e, this.selector = Rt(n, i, 3), t.call(this)
        }

        function n(t, e) {
            return function (n, i, s) {
                return t.call(this, e.selector(n, i, s), i, s)
            }
        }

        function i(t, e, n) {
            this.o = t, this.selector = e, this.source = n, this.i = 0, ln.call(this)
        }
        return _e(e, t), e.prototype.internalMap = function (t, i) {
            return new e(this.source, n(t, this), i)
        }, e.prototype.subscribeCore = function (t) {
            return this.source.subscribe(new i(t, this.selector, this))
        }, _e(i, ln), i.prototype.next = function (t) {
            var e = kt(this.selector)(t, this.i++, this.source);
            return e === xt ? this.o.onError(e.e) : void this.o.onNext(e)
        }, i.prototype.error = function (t) {
            this.o.onError(t)
        }, i.prototype.completed = function () {
            this.o.onCompleted()
        }, e
    }(dn);
    Xe.map = Xe.select = function (t, e) {
        var n = "function" == typeof t ? t : function () {
            return t
        };
        return this instanceof Di ? this.internalMap(n, e) : new Di(this, n, e)
    }, Xe.pluck = function () {
        var t = arguments.length,
            e = new Array(t);
        if (0 === t) throw new Error("List of properties cannot be empty.");
        for (var n = 0; t > n; n++) e[n] = arguments[n];
        return this.map(F(e, t))
    }, Xe.flatMap = Xe.selectMany = function (t, e, n) {
        return new fn(this, t, e, n).mergeAll()
    }, ft.Observable.prototype.flatMapLatest = function (t, e, n) {
        return new fn(this, t, e, n).switchLatest()
    };
    var Ei = function (t) {
        function e(e, n) {
            this.source = e, this._count = n, t.call(this)
        }

        function n(t, e) {
            this._o = t, this._r = e, ln.call(this)
        }
        return _e(e, t), e.prototype.subscribeCore = function (t) {
            return this.source.subscribe(new n(t, this._count))
        }, _e(n, ln), n.prototype.next = function (t) {
            this._r <= 0 ? this._o.onNext(t) : this._r--
        }, n.prototype.error = function (t) {
            this._o.onError(t)
        }, n.prototype.completed = function () {
            this._o.onCompleted()
        }, e
    }(dn);
    Xe.skip = function (t) {
        if (0 > t) throw new $t;
        return new Ei(this, t)
    };
    var ji = function (t) {
            function e(e, n) {
                this.source = e, this._fn = n, t.call(this)
            }
            return _e(e, t), e.prototype.subscribeCore = function (t) {
                return this.source.subscribe(new Ai(t, this))
            }, e
        }(dn),
        Ai = function (t) {
            function e(e, n) {
                this._o = e, this._p = n, this._i = 0, this._r = !1, t.call(this)
            }
            return _e(e, t), e.prototype.next = function (t) {
                if (!this._r) {
                    var e = kt(this._p._fn)(t, this._i++, this._p);
                    if (e === xt) return this._o.onError(e.e);
                    this._r = !e
                }
                this._r && this._o.onNext(t)
            }, e.prototype.error = function (t) {
                this._o.onError(t)
            }, e.prototype.completed = function () {
                this._o.onCompleted()
            }, e
        }(ln);
    Xe.skipWhile = function (t, e) {
        var n = Rt(t, e, 3);
        return new ji(this, n)
    };
    var $i = function (t) {
        function e(e, n) {
            this.source = e, this._count = n, t.call(this)
        }

        function n(t, e) {
            this._o = t, this._c = e, this._r = e, ln.call(this)
        }
        return _e(e, t), e.prototype.subscribeCore = function (t) {
            return this.source.subscribe(new n(t, this._count))
        }, _e(n, ln), n.prototype.next = function (t) {
            this._r-- > 0 && (this._o.onNext(t), this._r <= 0 && this._o.onCompleted())
        }, n.prototype.error = function (t) {
            this._o.onError(t)
        }, n.prototype.completed = function () {
            this._o.onCompleted()
        }, e
    }(dn);
    Xe.take = function (t, e) {
        if (0 > t) throw new $t;
        return 0 === t ? Tn(e) : new $i(this, t)
    };
    var Ni = function (t) {
            function e(e, n) {
                this.source = e, this._fn = n, t.call(this)
            }
            return _e(e, t), e.prototype.subscribeCore = function (t) {
                return this.source.subscribe(new Mi(t, this))
            }, e
        }(dn),
        Mi = function (t) {
            function e(e, n) {
                this._o = e, this._p = n, this._i = 0, this._r = !0, t.call(this)
            }
            return _e(e, t), e.prototype.next = function (t) {
                return this._r && (this._r = kt(this._p._fn)(t, this._i++, this._p), this._r === xt) ? this._o.onError(this._r.e) : void(this._r ? this._o.onNext(t) : this._o.onCompleted())
            }, e.prototype.error = function (t) {
                this._o.onError(t)
            }, e.prototype.completed = function () {
                this._o.onCompleted()
            }, e
        }(ln);
    Xe.takeWhile = function (t, e) {
        var n = Rt(t, e, 3);
        return new Ni(this, n)
    };
    var Li = function (t) {
        function e(e, n, i) {
            this.source = e, this.predicate = Rt(n, i, 3), t.call(this)
        }

        function n(t, e) {
            return function (n, i, s) {
                return e.predicate(n, i, s) && t.call(this, n, i, s)
            }
        }

        function i(t, e, n) {
            this.o = t, this.predicate = e, this.source = n, this.i = 0, ln.call(this)
        }
        return _e(e, t), e.prototype.subscribeCore = function (t) {
            return this.source.subscribe(new i(t, this.predicate, this))
        }, e.prototype.internalFilter = function (t, i) {
            return new e(this.source, n(t, this), i)
        }, _e(i, ln), i.prototype.next = function (t) {
            var e = kt(this.predicate)(t, this.i++, this.source);
            return e === xt ? this.o.onError(e.e) : void(e && this.o.onNext(t))
        }, i.prototype.error = function (t) {
            this.o.onError(t)
        }, i.prototype.completed = function () {
            this.o.onCompleted()
        }, e
    }(dn);
    Xe.filter = Xe.where = function (t, e) {
        return this instanceof Li ? this.internalFilter(t, e) : new Li(this, t, e)
    }, cn.fromCallback = function (t, e, n) {
        return function () {
            "undefined" == typeof e && (e = this);
            for (var i = arguments.length, s = new Array(i), o = 0; i > o; o++) s[o] = arguments[o];
            return I(t, e, n, s)
        }
    }, cn.fromNodeCallback = function (t, e, n) {
        return function () {
            "undefined" == typeof e && (e = this);
            for (var i = arguments.length, s = new Array(i), o = 0; i > o; o++) s[o] = arguments[o];
            return H(t, e, n, s)
        }
    }, B.prototype.dispose = function () {
        this.isDisposed || (this._e.removeEventListener(this._n, this._fn, !1), this.isDisposed = !0)
    }, ft.config.useNativeEvents = !1;
    var Oi = function (t) {
        function e(e, n, i) {
            this._el = e, this._n = n, this._fn = i, t.call(this)
        }

        function n(t, e) {
            return function () {
                var n = arguments[0];
                return wt(e) && (n = kt(e).apply(null, arguments), n === xt) ? t.onError(n.e) : void t.onNext(n)
            }
        }
        return _e(e, t), e.prototype.subscribeCore = function (t) {
            return W(this._el, this._n, n(t, this._fn))
        }, e
    }(dn);
    cn.fromEvent = function (t, e, n) {
        return t.addListener ? Fi(function (n) {
            t.addListener(e, n)
        }, function (n) {
            t.removeListener(e, n)
        }, n) : ft.config.useNativeEvents || "function" != typeof t.on || "function" != typeof t.off ? new Oi(t, e, n).publish().refCount() : Fi(function (n) {
            t.on(e, n)
        }, function (n) {
            t.off(e, n)
        }, n)
    };
    var Pi = function (t) {
            function e(e, n, i) {
                this._add = e, this._del = n, this._fn = i, t.call(this)
            }

            function n(t, e) {
                return function () {
                    var n = arguments[0];
                    return wt(e) && (n = kt(e).apply(null, arguments), n === xt) ? t.onError(n.e) : void t.onNext(n)
                }
            }

            function i(t, e, n) {
                this._del = t, this._fn = e, this._ret = n, this.isDisposed = !1
            }
            return _e(e, t), e.prototype.subscribeCore = function (t) {
                var e = n(t, this._fn),
                    s = this._add(e);
                return new i(this._del, e, s)
            }, i.prototype.dispose = function () {
                this.isDisposed || wt(this._del) && this._del(this._fn, this._ret)
            }, e
        }(dn),
        Fi = cn.fromEventPattern = function (t, e, n) {
            return new Pi(t, e, n).publish().refCount()
        },
        Ii = function (t) {
            function e(e, n) {
                this._p = e, this._s = n, t.call(this)
            }

            function n(t, e) {
                var n = e[0],
                    i = e[1];
                n.onNext(i), n.onCompleted()
            }

            function i(t, e) {
                var n = e[0],
                    i = e[1];
                n.onError(i)
            }
            return _e(e, t), e.prototype.subscribeCore = function (t) {
                var e = new Ae,
                    s = this;
                return this._p.then(function (i) {
                    e.setDisposable(s._s.schedule([t, i], n))
                }, function (n) {
                    e.setDisposable(s._s.schedule([t, n], i))
                }), e
            }, e
        }(dn),
        Ri = cn.fromPromise = function (t, e) {
            return e || (e = Ge), new Ii(t, e)
        };
    Xe.toPromise = function (t) {
        if (t || (t = ft.config.Promise), !t) throw new Nt("Promise type not provided nor in Rx.config.Promise");
        var e = this;
        return new t(function (t, n) {
            var i;
            e.subscribe(function (t) {
                i = t
            }, n, function () {
                t(i)
            })
        })
    }, cn.startAsync = function (t) {
        var e = kt(t)();
        return e === xt ? qn(e.e) : Ri(e)
    };
    var qi = function (t) {
        function e(e, n, i) {
            this.source = e, this._fn1 = n, this._fn2 = i, t.call(this)
        }
        return _e(e, t), e.prototype.subscribeCore = function (t) {
            var e = this.source.multicast(this._fn1());
            return new Ne(this._fn2(e).subscribe(t), e.connect())
        }, e
    }(dn);
    Xe.multicast = function (t, e) {
        return wt(t) ? new qi(this, t, e) : new zi(this, t)
    }, Xe.publish = function (t) {
        return t && wt(t) ? this.multicast(function () {
            return new ss
        }, t) : this.multicast(new ss)
    }, Xe.share = function () {
        return this.publish().refCount()
    }, Xe.publishLast = function (t) {
        return t && wt(t) ? this.multicast(function () {
            return new os
        }, t) : this.multicast(new os)
    }, Xe.publishValue = function (t, e) {
        return 2 === arguments.length ? this.multicast(function () {
            return new as(e)
        }, t) : this.multicast(new as(t))
    }, Xe.shareValue = function (t) {
        return this.publishValue(t).refCount()
    }, Xe.replay = function (t, e, n, i) {
        return t && wt(t) ? this.multicast(function () {
            return new ls(e, n, i)
        }, t) : this.multicast(new ls(e, n, i))
    }, Xe.shareReplay = function (t, e, n) {
        return this.replay(null, t, e, n).refCount()
    };
    var Hi = function (t) {
            function e(e) {
                this.source = e, this._count = 0, this._connectableSubscription = null, t.call(this)
            }

            function n(t, e) {
                this._p = t, this._s = e, this.isDisposed = !1
            }
            return _e(e, t), e.prototype.subscribeCore = function (t) {
                var e = 1 === ++this._count,
                    i = this.source.subscribe(t);
                return e && (this._connectableSubscription = this.source.connect()), new n(this, i)
            }, n.prototype.dispose = function () {
                this.isDisposed || (this.isDisposed = !0, this._s.dispose(), 0 === --this._p._count && this._p._connectableSubscription.dispose())
            }, e
        }(dn),
        zi = ft.ConnectableObservable = function (t) {
            function e(e, n) {
                this.source = e, this._hasSubscription = !1, this._subscription = null, this._sourceObservable = e.asObservable(), this._subject = n, t.call(this)
            }

            function n(t) {
                this._p = t, this.isDisposed = !1
            }
            return _e(e, t), n.prototype.dispose = function () {
                this.isDisposed || (this.isDisposed = !0, this._p._hasSubscription = !1)
            }, e.prototype.connect = function () {
                return this._hasSubscription || (this._hasSubscription = !0, this._subscription = new Ne(this._sourceObservable.subscribe(this._subject), new n(this))), this._subscription
            }, e.prototype._subscribe = function (t) {
                return this._subject.subscribe(t)
            }, e.prototype.refCount = function () {
                return new Hi(this)
            }, e
        }(cn),
        Ui = function (t) {
            function e(e, n) {
                this._dt = e, this._s = n, t.call(this)
            }

            function n(t, e) {
                e.onNext(0), e.onCompleted()
            }
            return _e(e, t), e.prototype.subscribeCore = function (t) {
                return this._s.scheduleFuture(t, this._dt, n)
            }, e
        }(dn),
        Bi = cn.interval = function (t, e) {
            return G(t, t, Fe(e) ? e : Ge)
        };
    cn.timer = function (e, n, i) {
        var s;
        return Fe(i) || (i = Ge), null != n && "number" == typeof n ? s = n : Fe(n) && (i = n), (e instanceof Date || "number" == typeof e) && s === t ? Y(e, i) : e instanceof Date && s !== t ? V(e.getTime(), n, i) : G(e, s, i)
    }, Xe.delay = function () {
        var t = arguments[0];
        if ("number" == typeof t || t instanceof Date) {
            var e = t,
                n = arguments[1];
            return Fe(n) || (n = Ge), e instanceof Date ? K(this, e, n) : Q(this, e, n)
        }
        if (cn.isObservable(t) || wt(t)) return X(this, t, arguments[1]);
        throw new Error("Invalid arguments")
    };
    var Wi = function (t) {
            function e(e, n, i) {
                Fe(i) || (i = Ge), this.source = e, this._dt = n, this._s = i, t.call(this)
            }
            return _e(e, t), e.prototype.subscribeCore = function (t) {
                var e = new $e;
                return new Ne(this.source.subscribe(new Yi(t, this.source, this._dt, this._s, e)), e)
            }, e
        }(dn),
        Yi = function (t) {
            function e(e, n, i, s, o) {
                this._o = e, this._s = n, this._d = i, this._scheduler = s, this._c = o, this._v = null, this._hv = !1, this._id = 0, t.call(this)
            }
            return _e(e, t), e.prototype.next = function (t) {
                this._hv = !0, this._v = t;
                var e = ++this._id,
                    n = new Ae;
                this._c.setDisposable(n), n.setDisposable(this._scheduler.scheduleFuture(this, this._d, function (n, i) {
                    i._hv && i._id === e && i._o.onNext(t), i._hv = !1
                }))
            }, e.prototype.error = function (t) {
                this._c.dispose(), this._o.onError(t), this._hv = !1, this._id++
            }, e.prototype.completed = function () {
                this._c.dispose(), this._hv && this._o.onNext(this._v), this._o.onCompleted(), this._hv = !1, this._id++
            }, e
        }(ln);
    Xe.debounce = function () {
        if (wt(arguments[0])) return J(this, arguments[0]);
        if ("number" == typeof arguments[0]) return new Wi(this, arguments[0], arguments[1]);
        throw new Error("Invalid arguments")
    };
    var Vi = function (t) {
            function e(e, n) {
                this.source = e, this._s = n, t.call(this)
            }
            return _e(e, t), e.prototype.subscribeCore = function (t) {
                return this.source.subscribe(new Gi(t, this._s))
            }, e
        }(dn),
        Gi = function (t) {
            function e(e, n) {
                this._o = e, this._s = n, t.call(this)
            }
            return _e(e, t), e.prototype.next = function (t) {
                this._o.onNext({
                    value: t,
                    timestamp: this._s.now()
                })
            }, e.prototype.error = function (t) {
                this._o.onError(t)
            }, e.prototype.completed = function () {
                this._o.onCompleted()
            }, e
        }(ln);
    Xe.timestamp = function (t) {
        return Fe(t) || (t = Ge), new Vi(this, t)
    }, Xe.sample = Xe.throttleLatest = function (t, e) {
        return Fe(e) || (e = Ge), "number" == typeof t ? Z(this, Bi(t, e)) : Z(this, t)
    };
    var Qi = ft.TimeoutError = function (t) {
        this.message = t || "Timeout has occurred", this.name = "TimeoutError", Error.call(this)
    };
    Qi.prototype = Object.create(Error.prototype), Xe.timeout = function () {
        var t = arguments[0];
        if (t instanceof Date || "number" == typeof t) return et(this, t, arguments[1], arguments[2]);
        if (cn.isObservable(t) || wt(t)) return tt(this, t, arguments[1], arguments[2]);
        throw new Error("Invalid arguments")
    }, Xe.throttle = function (t, e) {
        Fe(e) || (e = Ge);
        var n = +t || 0;
        if (0 >= n) throw new RangeError("windowDuration cannot be less or equal zero.");
        var i = this;
        return new es(function (t) {
            var s = 0;
            return i.subscribe(function (i) {
                var o = e.now();
                (0 === s || o - s >= n) && (s = o, t.onNext(i))
            }, function (e) {
                t.onError(e)
            }, function () {
                t.onCompleted()
            })
        }, i)
    };
    var Ki = function (t) {
        function e(e, n) {
            this.source = e, this.controller = new ss, n && n.subscribe ? this.pauser = this.controller.merge(n) : this.pauser = this.controller, t.call(this)
        }
        return _e(e, t), e.prototype._subscribe = function (t) {
            var e = this.source.publish(),
                n = e.subscribe(t),
                i = Te,
                s = this.pauser.distinctUntilChanged().subscribe(function (t) {
                    t ? i = e.connect() : (i.dispose(), i = Te)
                });
            return new Me([n, i, s])
        }, e.prototype.pause = function () {
            this.controller.onNext(!1)
        }, e.prototype.resume = function () {
            this.controller.onNext(!0)
        }, e
    }(cn);
    Xe.pausable = function (t) {
        return new Ki(this, t)
    };
    var Xi = function (e) {
        function n(t, n) {
            this.source = t, this.controller = new ss, n && n.subscribe ? this.pauser = this.controller.merge(n) : this.pauser = this.controller, e.call(this)
        }
        return _e(n, e), n.prototype._subscribe = function (e) {
            function n() {
                for (; s.length > 0;) e.onNext(s.shift())
            }
            var i, s = [],
                o = nt(this.source, this.pauser.startWith(!1).distinctUntilChanged(), function (t, e) {
                    return {
                        data: t,
                        shouldFire: e
                    }
                }).subscribe(function (o) {
                    i !== t && o.shouldFire !== i ? (i = o.shouldFire, o.shouldFire && n()) : (i = o.shouldFire, o.shouldFire ? e.onNext(o.data) : s.push(o.data))
                }, function (t) {
                    n(), e.onError(t)
                }, function () {
                    n(), e.onCompleted()
                });
            return o
        }, n.prototype.pause = function () {
            this.controller.onNext(!1)
        }, n.prototype.resume = function () {
            this.controller.onNext(!0)
        }, n
    }(cn);
    Xe.pausableBuffered = function (t) {
        return new Xi(this, t)
    };
    var Ji = function (t) {
            function e(e, n, i) {
                t.call(this), this.subject = new Zi(n, i), this.source = e.multicast(this.subject).refCount()
            }
            return _e(e, t), e.prototype._subscribe = function (t) {
                return this.source.subscribe(t)
            }, e.prototype.request = function (t) {
                return this.subject.request(null == t ? -1 : t)
            }, e
        }(cn),
        Zi = function (t) {
            function e(e, n) {
                null == e && (e = !0), t.call(this), this.subject = new ss, this.enableQueue = e, this.queue = e ? [] : null, this.requestedCount = 0, this.requestedDisposable = null, this.error = null, this.hasFailed = !1, this.hasCompleted = !1, this.scheduler = n || Ue
            }
            return _e(e, t), we(e.prototype, rn, {
                _subscribe: function (t) {
                    return this.subject.subscribe(t)
                },
                onCompleted: function () {
                    this.hasCompleted = !0, this.enableQueue && 0 !== this.queue.length ? this.queue.push(Je.createOnCompleted()) : (this.subject.onCompleted(), this.disposeCurrentRequest())
                },
                onError: function (t) {
                    this.hasFailed = !0, this.error = t, this.enableQueue && 0 !== this.queue.length ? this.queue.push(Je.createOnError(t)) : (this.subject.onError(t), this.disposeCurrentRequest())
                },
                onNext: function (t) {
                    this.requestedCount <= 0 ? this.enableQueue && this.queue.push(Je.createOnNext(t)) : (0 === this.requestedCount-- && this.disposeCurrentRequest(), this.subject.onNext(t))
                },
                _processRequest: function (t) {
                    if (this.enableQueue)
                        for (; this.queue.length > 0 && (t > 0 || "N" !== this.queue[0].kind);) {
                            var e = this.queue.shift();
                            e.accept(this.subject), "N" === e.kind ? t-- : (this.disposeCurrentRequest(), this.queue = [])
                        }
                    return t
                },
                request: function (t) {
                    this.disposeCurrentRequest();
                    var e = this;
                    return this.requestedDisposable = this.scheduler.schedule(t, function (t, n) {
                        var i = e._processRequest(n),
                            s = e.hasCompleted || e.hasFailed;
                        return !s && i > 0 ? (e.requestedCount = i, Ce(function () {
                            e.requestedCount = 0
                        })) : void 0
                    }), this.requestedDisposable
                },
                disposeCurrentRequest: function () {
                    this.requestedDisposable && (this.requestedDisposable.dispose(), this.requestedDisposable = null)
                }
            }), e
        }(cn);
    Xe.controlled = function (t, e) {
        return t && Fe(t) && (e = t, t = !0), null == t && (t = !0), new Ji(this, t, e)
    }, Xe.pipe = function (t) {
        function e() {
            n.resume()
        }
        var n = this.pausableBuffered();
        return t.addListener("drain", e), n.subscribe(function (e) {
            !t.write(String(e)) && n.pause()
        }, function (e) {
            t.emit("error", e)
        }, function () {
            !t._isStdio && t.end(), t.removeListener("drain", e)
        }), n.resume(), t
    };
    var ts = function (t) {
        function e(e, n) {
            this._o = e, this._xform = n, t.call(this)
        }
        return _e(e, t), e.prototype.next = function (t) {
            var e = kt(this._xform["@@transducer/step"]).call(this._xform, this._o, t);
            e === xt && this._o.onError(e.e)
        }, e.prototype.error = function (t) {
            this._o.onError(t)
        }, e.prototype.completed = function () {
            this._xform["@@transducer/result"](this._o)
        }, e
    }(ln);
    Xe.transduce = function (t) {
        var e = this;
        return new es(function (n) {
            var i = t(it(n));
            return e.subscribe(new ts(n, i))
        }, e)
    };
    var es = ft.AnonymousObservable = function (t) {
            function e(t) {
                return t && wt(t.dispose) ? t : wt(t) ? Ce(t) : Te
            }

            function n(t, n) {
                var i = n[0],
                    o = n[1],
                    r = kt(o.__subscribe).call(o, i);
                r !== xt || i.fail(xt.e) || s(xt.e), i.setDisposable(e(r))
            }

            function i(e, n) {
                this.source = n, this.__subscribe = e, t.call(this)
            }
            return _e(i, t), i.prototype._subscribe = function (t) {
                var e = new ns(t),
                    i = [e, this];
                return Ue.scheduleRequired() ? Ue.schedule(i, n) : n(null, i), e
            }, i
        }(cn),
        ns = function (t) {
            function e(e) {
                t.call(this), this.observer = e, this.m = new Ae
            }
            _e(e, t);
            var n = e.prototype;
            return n.next = function (t) {
                var e = kt(this.observer.onNext).call(this.observer, t);
                e === xt && (this.dispose(), s(e.e))
            }, n.error = function (t) {
                var e = kt(this.observer.onError).call(this.observer, t);
                this.dispose(), e === xt && s(e.e)
            }, n.completed = function () {
                var t = kt(this.observer.onCompleted).call(this.observer);
                this.dispose(), t === xt && s(t.e)
            }, n.setDisposable = function (t) {
                this.m.setDisposable(t)
            }, n.getDisposable = function () {
                return this.m.getDisposable()
            }, n.dispose = function () {
                t.prototype.dispose.call(this), this.m.dispose()
            }, e
        }(ln),
        is = function (t, e) {
            this._s = t, this._o = e
        };
    is.prototype.dispose = function () {
        if (!this._s.isDisposed && null !== this._o) {
            var t = this._s.observers.indexOf(this._o);
            this._s.observers.splice(t, 1), this._o = null
        }
    };
    var ss = ft.Subject = function (t) {
            function e() {
                t.call(this), this.isDisposed = !1, this.isStopped = !1, this.observers = [], this.hasError = !1
            }
            return _e(e, t), we(e.prototype, rn.prototype, {
                _subscribe: function (t) {
                    return Ee(this), this.isStopped ? this.hasError ? (t.onError(this.error), Te) : (t.onCompleted(), Te) : (this.observers.push(t), new is(this, t))
                },
                hasObservers: function () {
                    return this.observers.length > 0
                },
                onCompleted: function () {
                    if (Ee(this), !this.isStopped) {
                        this.isStopped = !0;
                        for (var t = 0, e = n(this.observers), i = e.length; i > t; t++) e[t].onCompleted();
                        this.observers.length = 0
                    }
                },
                onError: function (t) {
                    if (Ee(this), !this.isStopped) {
                        this.isStopped = !0, this.error = t, this.hasError = !0;
                        for (var e = 0, i = n(this.observers), s = i.length; s > e; e++) i[e].onError(t);
                        this.observers.length = 0
                    }
                },
                onNext: function (t) {
                    if (Ee(this), !this.isStopped)
                        for (var e = 0, i = n(this.observers), s = i.length; s > e; e++) i[e].onNext(t)
                },
                dispose: function () {
                    this.isDisposed = !0, this.observers = null
                }
            }), e.create = function (t, e) {
                return new rs(t, e)
            }, e
        }(cn),
        os = ft.AsyncSubject = function (t) {
            function e() {
                t.call(this), this.isDisposed = !1, this.isStopped = !1, this.hasValue = !1, this.observers = [], this.hasError = !1
            }
            return _e(e, t), we(e.prototype, rn.prototype, {
                _subscribe: function (t) {
                    return Ee(this), this.isStopped ? (this.hasError ? t.onError(this.error) : this.hasValue ? (t.onNext(this.value), t.onCompleted()) : t.onCompleted(), Te) : (this.observers.push(t), new is(this, t))
                },
                hasObservers: function () {
                    return Ee(this), this.observers.length > 0
                },
                onCompleted: function () {
                    var t, e;
                    if (Ee(this), !this.isStopped) {
                        this.isStopped = !0;
                        var i = n(this.observers),
                            e = i.length;
                        if (this.hasValue)
                            for (t = 0; e > t; t++) {
                                var s = i[t];
                                s.onNext(this.value), s.onCompleted()
                            } else
                                for (t = 0; e > t; t++) i[t].onCompleted();
                        this.observers.length = 0
                    }
                },
                onError: function (t) {
                    if (Ee(this), !this.isStopped) {
                        this.isStopped = !0, this.hasError = !0, this.error = t;
                        for (var e = 0, i = n(this.observers), s = i.length; s > e; e++) i[e].onError(t);
                        this.observers.length = 0
                    }
                },
                onNext: function (t) {
                    Ee(this), this.isStopped || (this.value = t, this.hasValue = !0)
                },
                dispose: function () {
                    this.isDisposed = !0, this.observers = null, this.error = null, this.value = null
                }
            }), e
        }(cn),
        rs = ft.AnonymousSubject = function (t) {
            function e(e, n) {
                this.observer = e, this.observable = n, t.call(this)
            }
            return _e(e, t), we(e.prototype, rn.prototype, {
                _subscribe: function (t) {
                    return this.observable.subscribe(t)
                },
                onCompleted: function () {
                    this.observer.onCompleted()
                },
                onError: function (t) {
                    this.observer.onError(t)
                },
                onNext: function (t) {
                    this.observer.onNext(t)
                }
            }), e
        }(cn),
        as = ft.BehaviorSubject = function (t) {
            function e(e) {
                t.call(this), this.value = e, this.observers = [], this.isDisposed = !1, this.isStopped = !1, this.hasError = !1
            }
            return _e(e, t), we(e.prototype, rn.prototype, {
                _subscribe: function (t) {
                    return Ee(this), this.isStopped ? (this.hasError ? t.onError(this.error) : t.onCompleted(), Te) : (this.observers.push(t), t.onNext(this.value), new is(this, t))
                },
                getValue: function () {
                    return Ee(this), this.hasError && s(this.error), this.value
                },
                hasObservers: function () {
                    return this.observers.length > 0
                },
                onCompleted: function () {
                    if (Ee(this), !this.isStopped) {
                        this.isStopped = !0;
                        for (var t = 0, e = n(this.observers), i = e.length; i > t; t++) e[t].onCompleted();
                        this.observers.length = 0
                    }
                },
                onError: function (t) {
                    if (Ee(this), !this.isStopped) {
                        this.isStopped = !0, this.hasError = !0, this.error = t;
                        for (var e = 0, i = n(this.observers), s = i.length; s > e; e++) i[e].onError(t);
                        this.observers.length = 0
                    }
                },
                onNext: function (t) {
                    if (Ee(this), !this.isStopped) {
                        this.value = t;
                        for (var e = 0, i = n(this.observers), s = i.length; s > e; e++) i[e].onNext(t)
                    }
                },
                dispose: function () {
                    this.isDisposed = !0, this.observers = null, this.value = null, this.error = null
                }
            }), e
        }(cn),
        ls = ft.ReplaySubject = function (t) {
            function e(t, e) {
                return Ce(function () {
                    e.dispose(), !t.isDisposed && t.observers.splice(t.observers.indexOf(e), 1)
                })
            }

            function i(e, n, i) {
                this.bufferSize = null == e ? s : e, this.windowSize = null == n ? s : n, this.scheduler = i || Ue, this.q = [], this.observers = [], this.isStopped = !1, this.isDisposed = !1, this.hasError = !1, this.error = null, t.call(this)
            }
            var s = Math.pow(2, 53) - 1;
            return _e(i, t), we(i.prototype, rn.prototype, {
                _subscribe: function (t) {
                    Ee(this);
                    var n = new hn(this.scheduler, t),
                        i = e(this, n);
                    this._trim(this.scheduler.now()), this.observers.push(n);
                    for (var s = 0, o = this.q.length; o > s; s++) n.onNext(this.q[s].value);
                    return this.hasError ? n.onError(this.error) : this.isStopped && n.onCompleted(), n.ensureActive(), i
                },
                hasObservers: function () {
                    return this.observers.length > 0
                },
                _trim: function (t) {
                    for (; this.q.length > this.bufferSize;) this.q.shift();
                    for (; this.q.length > 0 && t - this.q[0].interval > this.windowSize;) this.q.shift()
                },
                onNext: function (t) {
                    if (Ee(this), !this.isStopped) {
                        var e = this.scheduler.now();
                        this.q.push({
                            interval: e,
                            value: t
                        }), this._trim(e);
                        for (var i = 0, s = n(this.observers), o = s.length; o > i; i++) {
                            var r = s[i];
                            r.onNext(t), r.ensureActive()
                        }
                    }
                },
                onError: function (t) {
                    if (Ee(this), !this.isStopped) {
                        this.isStopped = !0, this.error = t, this.hasError = !0;
                        var e = this.scheduler.now();
                        this._trim(e);
                        for (var i = 0, s = n(this.observers), o = s.length; o > i; i++) {
                            var r = s[i];
                            r.onError(t), r.ensureActive()
                        }
                        this.observers.length = 0
                    }
                },
                onCompleted: function () {
                    if (Ee(this), !this.isStopped) {
                        this.isStopped = !0;
                        var t = this.scheduler.now();
                        this._trim(t);
                        for (var e = 0, i = n(this.observers), s = i.length; s > e; e++) {
                            var o = i[e];
                            o.onCompleted(), o.ensureActive()
                        }
                        this.observers.length = 0
                    }
                },
                dispose: function () {
                    this.isDisposed = !0, this.observers = null
                }
            }), i
        }(cn);
    ft.Pauser = function (t) {
        function e() {
            t.call(this)
        }
        return _e(e, t), e.prototype.pause = function () {
            this.onNext(!1)
        }, e.prototype.resume = function () {
            this.onNext(!0)
        }, e
    }(ss), "function" == typeof define && "object" == typeof define.amd && define.amd ? (dt.Rx = ft, define(function () {
        return ft
    })) : ot && rt ? ct ? (rt.exports = ft).Rx = ft : ot.Rx = ft : dt.Rx = ft;
    var us = u()
}).call(this), $(function () {
        if ($(".with-counter").length > 0) {
            var t = $(".with-counter"),
                e = 256,
                n = e - t.val().length,
                i = $(".with-counter-holder");
            i.attr("data-counter", n), t.on("input", function () {
                n = t.val().length, i.attr("data-counter", e - n), n >= e ? i.addClass("overlimit") : i.removeClass("overlimit")
            })
        }
    }), $(function () {
        var t, e = $("#select-lessons-to-show"),
            n = $.cookie("per_page_pref"),
            i = n,
            s = window.location.pathname,
            o = "https:" === window.location.protocol;
        n ? e.val(n).trigger("chosen:updated") : ($.cookie("per_page_pref", t, {
            secure: o,
            expires: 365,
            path: s
        }), e.val("12"), i = 12), $.cookie("lessons_pagination_state", 0, {
            secure: o,
            expires: 365,
            path: s
        }), e.change(function () {
            $.cookie("per_page_pref", +e.val(), {
                secure: o,
                expires: 365,
                path: s
            }), $.cookie("lessons_pagination_state", 1, {
                secure: o,
                expires: 365,
                path: s
            }), location.reload()
        })
    }), ! function (t) {
        if ("object" == typeof exports && "undefined" != typeof module) module.exports = t();
        else if ("function" == typeof define && define.amd) define([], t);
        else {
            var e;
            e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this, e.Trianglify = t()
        }
    }(function () {
        var t;
        return function e(t, n, i) {
            function s(r, a) {
                if (!n[r]) {
                    if (!t[r]) {
                        var l = "function" == typeof require && require;
                        if (!a && l) return l(r, !0);
                        if (o) return o(r, !0);
                        var u = new Error("Cannot find module '" + r + "'");
                        throw u.code = "MODULE_NOT_FOUND", u
                    }
                    var c = n[r] = {
                        exports: {}
                    };
                    t[r][0].call(c.exports, function (e) {
                        var n = t[r][1][e];
                        return s(n ? n : e)
                    }, c, c.exports, e, t, n, i)
                }
                return n[r].exports
            }
            for (var o = "function" == typeof require && require, r = 0; r < i.length; r++) s(i[r]);
            return s
        }({
            "./lib/trianglify.js": [function (t, e) {
                function n(t) {
                    function e(t, e, n) {
                        return (t - e[0]) * (n[1] - n[0]) / (e[1] - e[0]) + n[0]
                    }

                    function n(n, i) {
                        for (var s = [], o = -y; n + y > o; o += t.cell_size)
                            for (var r = -b; i + b > r; r += t.cell_size) {
                                var a = o + t.cell_size / 2 + e(rand(), [0, 1], [-_, _]),
                                    l = r + t.cell_size / 2 + e(rand(), [0, 1], [-_, _]);
                                s.push([a, l].map(Math.floor))
                            }
                        return s
                    }

                    function r(t) {
                        return {
                            x: (t[0][0] + t[1][0] + t[2][0]) / 3,
                            y: (t[0][1] + t[1][1] + t[2][1]) / 3
                        }
                    }

                    function u() {
                        if (t.palette instanceof Array) return t.palette[Math.floor(rand() * t.palette.length)];
                        var e = Object.keys(t.palette);
                        return t.palette[e[Math.floor(rand() * e.length)]]
                    }

                    function c(t, e) {
                        var n = {};
                        for (var i in t) n[i] = t[i];
                        for (i in e) {
                            if (!t.hasOwnProperty(i)) throw new Error(i + " is not a configuration option for Trianglify. Check your spelling?");
                            n[i] = e[i]
                        }
                        return n
                    }
                    if (t = c(l, t), rand = s(t.seed), "random" === t.x_colors && (t.x_colors = u()), "random" === t.y_colors && (t.y_colors = u()), "match_x" === t.y_colors && (t.y_colors = t.x_colors), !(t.width > 0 && t.height > 0)) throw new Error("Width and height must be numbers greater than 0");
                    if (t.cell_size < 2) throw new Error("Cell size must be greater than 2.");
                    var h;
                    if (t.color_function) h = function (e, n) {
                        return o(t.color_function(e, n))
                    };
                    else {
                        var d = o.scale(t.x_colors).mode(t.color_space),
                            f = o.scale(t.y_colors).mode(t.color_space);
                        h = function (e, n) {
                            return o.interpolate(d(e), f(n), .5, t.color_space)
                        }
                    }
                    for (var p = t.width, g = t.height, m = Math.floor((p + 4 * t.cell_size) / t.cell_size), v = Math.floor((g + 4 * t.cell_size) / t.cell_size), y = (m * t.cell_size - p) / 2, b = (v * t.cell_size - g) / 2, _ = t.cell_size * t.variance / 2, w = function (t) {
                            return e(t, [-y, p + y], [0, 1])
                        }, x = function (t) {
                            return e(t, [-b, g + b], [0, 1])
                        }, k = n(p, g), S = i.triangulate(k), C = [], T = function (t) {
                            return k[t]
                        }, D = 0; D < S.length; D += 3) {
                        var E = [S[D], S[D + 1], S[D + 2]].map(T),
                            j = r(E),
                            A = h(w(j.x), x(j.y)).hex();
                        C.push([A, E])
                    }
                    return a(C, t)
                }
                var i = t("delaunay-fast"),
                    s = t("seedrandom"),
                    o = t("chroma-js"),
                    r = t("./colorbrewer"),
                    a = t("./pattern"),
                    l = {
                        width: 600,
                        height: 400,
                        cell_size: 75,
                        variance: .75,
                        seed: null,
                        x_colors: "random",
                        y_colors: "match_x",
                        palette: r,
                        color_space: "lab",
                        color_function: null,
                        stroke_width: 1.51
                    };
                n.colorbrewer = r, n.defaults = l, e.exports = n
            }, {
                "./colorbrewer": "/Users/qrohlf/Code/trianglify/lib/colorbrewer.js",
                "./pattern": "/Users/qrohlf/Code/trianglify/lib/pattern.js",
                "chroma-js": "/Users/qrohlf/Code/trianglify/node_modules/chroma-js/chroma.js",
                "delaunay-fast": "/Users/qrohlf/Code/trianglify/node_modules/delaunay-fast/delaunay.js",
                seedrandom: "/Users/qrohlf/Code/trianglify/node_modules/seedrandom/index.js"
            }],
            "/Users/qrohlf/Code/trianglify/lib/colorbrewer.js": [function (t, e) {
                e.exports = {
                    YlGn: ["#ffffe5", "#f7fcb9", "#d9f0a3", "#addd8e", "#78c679", "#41ab5d", "#238443", "#006837", "#004529"],
                    YlGnBu: ["#ffffd9", "#edf8b1", "#c7e9b4", "#7fcdbb", "#41b6c4", "#1d91c0", "#225ea8", "#253494", "#081d58"],
                    GnBu: ["#f7fcf0", "#e0f3db", "#ccebc5", "#a8ddb5", "#7bccc4", "#4eb3d3", "#2b8cbe", "#0868ac", "#084081"],
                    BuGn: ["#f7fcfd", "#e5f5f9", "#ccece6", "#99d8c9", "#66c2a4", "#41ae76", "#238b45", "#006d2c", "#00441b"],
                    PuBuGn: ["#fff7fb", "#ece2f0", "#d0d1e6", "#a6bddb", "#67a9cf", "#3690c0", "#02818a", "#016c59", "#014636"],
                    PuBu: ["#fff7fb", "#ece7f2", "#d0d1e6", "#a6bddb", "#74a9cf", "#3690c0", "#0570b0", "#045a8d", "#023858"],
                    BuPu: ["#f7fcfd", "#e0ecf4", "#bfd3e6", "#9ebcda", "#8c96c6", "#8c6bb1", "#88419d", "#810f7c", "#4d004b"],
                    RdPu: ["#fff7f3", "#fde0dd", "#fcc5c0", "#fa9fb5", "#f768a1", "#dd3497", "#ae017e", "#7a0177", "#49006a"],
                    PuRd: ["#f7f4f9", "#e7e1ef", "#d4b9da", "#c994c7", "#df65b0", "#e7298a", "#ce1256", "#980043", "#67001f"],
                    OrRd: ["#fff7ec", "#fee8c8", "#fdd49e", "#fdbb84", "#fc8d59", "#ef6548", "#d7301f", "#b30000", "#7f0000"],
                    YlOrRd: ["#ffffcc", "#ffeda0", "#fed976", "#feb24c", "#fd8d3c", "#fc4e2a", "#e31a1c", "#bd0026", "#800026"],
                    YlOrBr: ["#ffffe5", "#fff7bc", "#fee391", "#fec44f", "#fe9929", "#ec7014", "#cc4c02", "#993404", "#662506"],
                    Purples: ["#fcfbfd", "#efedf5", "#dadaeb", "#bcbddc", "#9e9ac8", "#807dba", "#6a51a3", "#54278f", "#3f007d"],
                    Blues: ["#f7fbff", "#deebf7", "#c6dbef", "#9ecae1", "#6baed6", "#4292c6", "#2171b5", "#08519c", "#08306b"],
                    Greens: ["#f7fcf5", "#e5f5e0", "#c7e9c0", "#a1d99b", "#74c476", "#41ab5d", "#238b45", "#006d2c", "#00441b"],
                    Oranges: ["#fff5eb", "#fee6ce", "#fdd0a2", "#fdae6b", "#fd8d3c", "#f16913", "#d94801", "#a63603", "#7f2704"],
                    Reds: ["#fff5f0", "#fee0d2", "#fcbba1", "#fc9272", "#fb6a4a", "#ef3b2c", "#cb181d", "#a50f15", "#67000d"],
                    Greys: ["#ffffff", "#f0f0f0", "#d9d9d9", "#bdbdbd", "#969696", "#737373", "#525252", "#252525", "#000000"],
                    PuOr: ["#7f3b08", "#b35806", "#e08214", "#fdb863", "#fee0b6", "#f7f7f7", "#d8daeb", "#b2abd2", "#8073ac", "#542788", "#2d004b"],
                    BrBG: ["#543005", "#8c510a", "#bf812d", "#dfc27d", "#f6e8c3", "#f5f5f5", "#c7eae5", "#80cdc1", "#35978f", "#01665e", "#003c30"],
                    PRGn: ["#40004b", "#762a83", "#9970ab", "#c2a5cf", "#e7d4e8", "#f7f7f7", "#d9f0d3", "#a6dba0", "#5aae61", "#1b7837", "#00441b"],
                    PiYG: ["#8e0152", "#c51b7d", "#de77ae", "#f1b6da", "#fde0ef", "#f7f7f7", "#e6f5d0", "#b8e186", "#7fbc41", "#4d9221", "#276419"],
                    RdBu: ["#67001f", "#b2182b", "#d6604d", "#f4a582", "#fddbc7", "#f7f7f7", "#d1e5f0", "#92c5de", "#4393c3", "#2166ac", "#053061"],
                    RdGy: ["#67001f", "#b2182b", "#d6604d", "#f4a582", "#fddbc7", "#ffffff", "#e0e0e0", "#bababa", "#878787", "#4d4d4d", "#1a1a1a"],
                    RdYlBu: ["#a50026", "#d73027", "#f46d43", "#fdae61", "#fee090", "#ffffbf", "#e0f3f8", "#abd9e9", "#74add1", "#4575b4", "#313695"],
                    Spectral: ["#9e0142", "#d53e4f", "#f46d43", "#fdae61", "#fee08b", "#ffffbf", "#e6f598", "#abdda4", "#66c2a5", "#3288bd", "#5e4fa2"],
                    RdYlGn: ["#a50026", "#d73027", "#f46d43", "#fdae61", "#fee08b", "#ffffbf", "#d9ef8b", "#a6d96a", "#66bd63", "#1a9850", "#006837"]
                }
            }, {}],
            "/Users/qrohlf/Code/trianglify/lib/pattern.js": [function (t, e) {
                (function (n) {
                    function i(e, i) {
                        function o() {
                            var t = s.createElementNS("http://www.w3.org/2000/svg", "svg");
                            return t.setAttribute("width", i.width), t.setAttribute("height", i.height), e.forEach(function (e) {
                                var n = s.createElementNS("http://www.w3.org/2000/svg", "path");
                                n.setAttribute("d", "M" + e[1].join("L") + "Z"), n.setAttribute("fill", e[0]), n.setAttribute("stroke", e[0]), n.setAttribute("stroke-width", i.stroke_width), t.appendChild(n)
                            }), t
                        }

                        function r(o) {
                            if ("undefined" != typeof n) try {
                                t("canvas")
                            } catch (r) {
                                throw Error("The optional node-canvas dependency is needed for Trianglify to render using canvas in node.")
                            }
                            return o || (o = s.createElement("canvas")), o.setAttribute("width", i.width), o.setAttribute("height", i.height), ctx = o.getContext("2d"), ctx.canvas.width = i.width, ctx.canvas.height = i.height, e.forEach(function (t) {
                                ctx.fillStyle = ctx.strokeStyle = t[0], ctx.lineWidth = i.stroke_width, ctx.beginPath(), ctx.moveTo.apply(ctx, t[1][0]), ctx.lineTo.apply(ctx, t[1][1]), ctx.lineTo.apply(ctx, t[1][2]), ctx.fill(), ctx.stroke()
                            }), o
                        }

                        function a() {
                            return r().toDataURL("image/png")
                        }
                        return {
                            polys: e,
                            opts: i,
                            svg: o,
                            canvas: r,
                            png: a
                        }
                    }
                    var s = "undefined" != typeof document ? document : t("jsdom").jsdom("<html/>");
                    e.exports = i
                }).call(this, t("_process"))
            }, {
                _process: "/Users/qrohlf/Code/trianglify/node_modules/browserify/node_modules/process/browser.js",
                canvas: "/Users/qrohlf/Code/trianglify/node_modules/browserify/node_modules/browser-resolve/empty.js",
                jsdom: "/Users/qrohlf/Code/trianglify/node_modules/browserify/node_modules/browser-resolve/empty.js"
            }],
            "/Users/qrohlf/Code/trianglify/node_modules/browserify/node_modules/browser-resolve/empty.js": [function () {}, {}],
            "/Users/qrohlf/Code/trianglify/node_modules/browserify/node_modules/process/browser.js": [function (t, e) {
                function n() {
                    if (!r) {
                        r = !0;
                        for (var t, e = o.length; e;) {
                            t = o, o = [];
                            for (var n = -1; ++n < e;) t[n]();
                            e = o.length
                        }
                        r = !1
                    }
                }

                function i() {}
                var s = e.exports = {},
                    o = [],
                    r = !1;
                s.nextTick = function (t) {
                    o.push(t), r || setTimeout(n, 0)
                }, s.title = "browser", s.browser = !0, s.env = {}, s.argv = [], s.version = "", s.versions = {}, s.on = i, s.addListener = i, s.once = i, s.off = i, s.removeListener = i, s.removeAllListeners = i, s.emit = i, s.binding = function () {
                    throw new Error("process.binding is not supported")
                }, s.cwd = function () {
                    return "/"
                }, s.chdir = function () {
                    throw new Error("process.chdir is not supported")
                }, s.umask = function () {
                    return 0
                }
            }, {}],
            "/Users/qrohlf/Code/trianglify/node_modules/chroma-js/chroma.js": [function (e, n, i) {
                (function () {
                    var e, s, o, r, a, l, u, c, h, d, f, p, g, m, v, y, b, _, w, x, k, S, C, T, D, E, j, A, $, N, M, L, O, P, F, I, R, q, H;
                    d = function (t, n, i, s) {
                        return new e(t, n, i, s)
                    }, "undefined" != typeof n && null !== n && null != n.exports && (n.exports = d), "function" == typeof t && t.amd ? t([], function () {
                        return d
                    }) : (P = "undefined" != typeof i && null !== i ? i : this, P.chroma = d), d.color = function (t, n, i, s) {
                        return new e(t, n, i, s)
                    }, d.hsl = function (t, n, i, s) {
                        return new e(t, n, i, s, "hsl")
                    }, d.hsv = function (t, n, i, s) {
                        return new e(t, n, i, s, "hsv")
                    }, d.rgb = function (t, n, i, s) {
                        return new e(t, n, i, s, "rgb")
                    }, d.hex = function (t) {
                        return new e(t)
                    }, d.css = function (t) {
                        return new e(t)
                    }, d.lab = function (t, n, i) {
                        return new e(t, n, i, "lab")
                    }, d.lch = function (t, n, i) {
                        return new e(t, n, i, "lch")
                    }, d.hsi = function (t, n, i) {
                        return new e(t, n, i, "hsi")
                    }, d.gl = function (t, n, i, s) {
                        return new e(255 * t, 255 * n, 255 * i, s, "gl")
                    }, d.interpolate = function (t, n, i, s) {
                        return null == t || null == n ? "#000" : ("string" === F(t) && (t = new e(t)), "string" === F(n) && (n = new e(n)), t.interpolate(i, n, s))
                    }, d.mix = d.interpolate, d.contrast = function (t, n) {
                        var i, s;
                        return "string" === F(t) && (t = new e(t)), "string" === F(n) && (n = new e(n)), i = t.luminance(), s = n.luminance(), i > s ? (i + .05) / (s + .05) : (s + .05) / (i + .05)
                    }, d.luminance = function (t) {
                        return d(t).luminance()
                    }, d._Color = e, e = function () {
                        function t() {
                            var t, e, n, i, s, o, r, a, l, u, c, h, d, p, g, m;
                            for (s = this, n = [], u = 0, c = arguments.length; c > u; u++) e = arguments[u], null != e && n.push(e);
                            if (0 === n.length) h = [255, 0, 255, 1, "rgb"], r = h[0], a = h[1], l = h[2], t = h[3], i = h[4];
                            else if ("array" === F(n[0])) {
                                if (3 === n[0].length) d = n[0], r = d[0], a = d[1], l = d[2], t = 1;
                                else {
                                    if (4 !== n[0].length) throw "unknown input argument";
                                    p = n[0], r = p[0], a = p[1], l = p[2], t = p[3]
                                }
                                i = null != (g = n[1]) ? g : "rgb"
                            } else "string" === F(n[0]) ? (r = n[0], i = "hex") : "object" === F(n[0]) ? (m = n[0]._rgb, r = m[0], a = m[1], l = m[2], t = m[3], i = "rgb") : n.length >= 3 && (r = n[0], a = n[1], l = n[2]);
                            3 === n.length ? (i = "rgb", t = 1) : 4 === n.length ? "string" === F(n[3]) ? (i = n[3], t = 1) : "number" === F(n[3]) && (i = "rgb", t = n[3]) : 5 === n.length && (t = n[3], i = n[4]), null == t && (t = 1), "rgb" === i ? s._rgb = [r, a, l, t] : "gl" === i ? s._rgb = [255 * r, 255 * a, 255 * l, t] : "hsl" === i ? (s._rgb = b(r, a, l), s._rgb[3] = t) : "hsv" === i ? (s._rgb = _(r, a, l), s._rgb[3] = t) : "hex" === i ? s._rgb = v(r) : "lab" === i ? (s._rgb = x(r, a, l), s._rgb[3] = t) : "lch" === i ? (s._rgb = C(r, a, l), s._rgb[3] = t) : "hsi" === i && (s._rgb = y(r, a, l), s._rgb[3] = t), o = f(s._rgb)
                        }
                        return t.prototype.rgb = function () {
                            return this._rgb.slice(0, 3)
                        }, t.prototype.rgba = function () {
                            return this._rgb
                        }, t.prototype.hex = function () {
                            return j(this._rgb)
                        }, t.prototype.toString = function () {
                            return this.name()
                        }, t.prototype.hsl = function () {
                            return $(this._rgb)
                        }, t.prototype.hsv = function () {
                            return N(this._rgb)
                        }, t.prototype.lab = function () {
                            return M(this._rgb)
                        }, t.prototype.lch = function () {
                            return L(this._rgb)
                        }, t.prototype.hsi = function () {
                            return A(this._rgb)
                        }, t.prototype.gl = function () {
                            return [this._rgb[0] / 255, this._rgb[1] / 255, this._rgb[2] / 255, this._rgb[3]]
                        }, t.prototype.luminance = function (e, n) {
                            var i, s, o, r;
                            return null == n && (n = "rgb"), arguments.length ? (0 === e && (this._rgb = [0, 0, 0, this._rgb[3]]), 1 === e && (this._rgb = [255, 255, 255, this._rgb[3]]), i = D(this._rgb), s = 1e-7, o = 20, r = function (t, i) {
                                var a, l;
                                return l = t.interpolate(.5, i, n), a = l.luminance(), Math.abs(e - a) < s || !o-- ? l : a > e ? r(t, l) : r(l, i)
                            }, this._rgb = (i > e ? r(new t("black"), this) : r(this, new t("white"))).rgba(), this) : D(this._rgb)
                        }, t.prototype.name = function () {
                            var t, e;
                            t = this.hex();
                            for (e in d.colors)
                                if (t === d.colors[e]) return e;
                            return t
                        }, t.prototype.alpha = function (t) {
                            return arguments.length ? (this._rgb[3] = t, this) : this._rgb[3]
                        }, t.prototype.css = function (t) {
                            var e, n, i, s;
                            return null == t && (t = "rgb"), n = this, i = n._rgb, 3 === t.length && i[3] < 1 && (t += "a"), "rgb" === t ? t + "(" + i.slice(0, 3).map(Math.round).join(",") + ")" : "rgba" === t ? t + "(" + i.slice(0, 3).map(Math.round).join(",") + "," + i[3] + ")" : "hsl" === t || "hsla" === t ? (e = n.hsl(), s = function (t) {
                                return Math.round(100 * t) / 100
                            }, e[0] = s(e[0]), e[1] = s(100 * e[1]) + "%", e[2] = s(100 * e[2]) + "%", 4 === t.length && (e[3] = i[3]), t + "(" + e.join(",") + ")") : void 0
                        }, t.prototype.interpolate = function (e, n, i) {
                            var s, o, r, a, l, u, c, h, d, f, p, g, m, v;
                            if (h = this, null == i && (i = "rgb"), "string" === F(n) && (n = new t(n)), "hsl" === i || "hsv" === i || "lch" === i || "hsi" === i) "hsl" === i ? (m = h.hsl(), v = n.hsl()) : "hsv" === i ? (m = h.hsv(), v = n.hsv()) : "hsi" === i ? (m = h.hsi(), v = n.hsi()) : "lch" === i && (m = h.lch(), v = n.lch()), "h" === i.substr(0, 1) ? (r = m[0], p = m[1], u = m[2], a = v[0], g = v[1], c = v[2]) : (u = m[0], p = m[1], r = m[2], c = v[0], g = v[1], a = v[2]), isNaN(r) || isNaN(a) ? isNaN(r) ? isNaN(a) ? o = Number.NaN : (o = a, 1 !== u && 0 !== u || "hsv" === i || (f = g)) : (o = r, 1 !== c && 0 !== c || "hsv" === i || (f = p)) : (s = a > r && a - r > 180 ? a - (r + 360) : r > a && r - a > 180 ? a + 360 - r : a - r, o = r + e * s), null == f && (f = p + e * (g - p)), l = u + e * (c - u), d = "h" === i.substr(0, 1) ? new t(o, f, l, i) : new t(l, f, o, i);
                            else if ("rgb" === i) m = h._rgb, v = n._rgb, d = new t(m[0] + e * (v[0] - m[0]), m[1] + e * (v[1] - m[1]), m[2] + e * (v[2] - m[2]), i);
                            else {
                                if ("lab" !== i) throw "color mode " + i + " is not supported";
                                m = h.lab(), v = n.lab(), d = new t(m[0] + e * (v[0] - m[0]), m[1] + e * (v[1] - m[1]), m[2] + e * (v[2] - m[2]), i)
                            }
                            return d.alpha(h.alpha() + e * (n.alpha() - h.alpha())), d
                        }, t.prototype.premultiply = function () {
                            var t, e;
                            return e = this.rgb(), t = this.alpha(), d(e[0] * t, e[1] * t, e[2] * t, t)
                        }, t.prototype.darken = function (t) {
                            var e, n;
                            return null == t && (t = 20), n = this, e = n.lch(), e[0] -= t, d.lch(e).alpha(n.alpha())
                        }, t.prototype.darker = function (t) {
                            return this.darken(t)
                        }, t.prototype.brighten = function (t) {
                            return null == t && (t = 20), this.darken(-t)
                        }, t.prototype.brighter = function (t) {
                            return this.brighten(t)
                        }, t.prototype.saturate = function (t) {
                            var e, n;
                            return null == t && (t = 20), n = this, e = n.lch(), e[1] += t, d.lch(e).alpha(n.alpha())
                        }, t.prototype.desaturate = function (t) {
                            return null == t && (t = 20), this.saturate(-t)
                        }, t
                    }(), f = function (t) {
                        var e;
                        for (e in t) 3 > e ? (t[e] < 0 && (t[e] = 0), t[e] > 255 && (t[e] = 255)) : 3 === e && (t[e] < 0 && (t[e] = 0), t[e] > 1 && (t[e] = 1));
                        return t
                    }, m = function (t) {
                        var e, n, i, s, o, r, a, l;
                        if (t = t.toLowerCase(), null != d.colors && d.colors[t]) return v(d.colors[t]);
                        if (i = t.match(/rgb\(\s*(\-?\d+),\s*(\-?\d+)\s*,\s*(\-?\d+)\s*\)/)) {
                            for (s = i.slice(1, 4), n = o = 0; 2 >= o; n = ++o) s[n] = +s[n];
                            s[3] = 1
                        } else if (i = t.match(/rgba\(\s*(\-?\d+),\s*(\-?\d+)\s*,\s*(\-?\d+)\s*,\s*([01]|[01]?\.\d+)\)/))
                            for (s = i.slice(1, 5), n = r = 0; 3 >= r; n = ++r) s[n] = +s[n];
                        else if (i = t.match(/rgb\(\s*(\-?\d+(?:\.\d+)?)%,\s*(\-?\d+(?:\.\d+)?)%\s*,\s*(\-?\d+(?:\.\d+)?)%\s*\)/)) {
                            for (s = i.slice(1, 4), n = a = 0; 2 >= a; n = ++a) s[n] = Math.round(2.55 * s[n]);
                            s[3] = 1
                        } else if (i = t.match(/rgba\(\s*(\-?\d+(?:\.\d+)?)%,\s*(\-?\d+(?:\.\d+)?)%\s*,\s*(\-?\d+(?:\.\d+)?)%\s*,\s*([01]|[01]?\.\d+)\)/)) {
                            for (s = i.slice(1, 5), n = l = 0; 2 >= l; n = ++l) s[n] = Math.round(2.55 * s[n]);
                            s[3] = +s[3]
                        } else(i = t.match(/hsl\(\s*(\-?\d+(?:\.\d+)?),\s*(\-?\d+(?:\.\d+)?)%\s*,\s*(\-?\d+(?:\.\d+)?)%\s*\)/)) ? (e = i.slice(1, 4), e[1] *= .01, e[2] *= .01, s = b(e), s[3] = 1) : (i = t.match(/hsla\(\s*(\-?\d+(?:\.\d+)?),\s*(\-?\d+(?:\.\d+)?)%\s*,\s*(\-?\d+(?:\.\d+)?)%\s*,\s*([01]|[01]?\.\d+)\)/)) && (e = i.slice(1, 4), e[1] *= .01, e[2] *= .01, s = b(e), s[3] = +i[4]);
                        return s
                    }, v = function (t) {
                        var e, n, i, s, o, r;
                        if (t.match(/^#?([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/)) return (4 === t.length || 7 === t.length) && (t = t.substr(1)), 3 === t.length && (t = t.split(""), t = t[0] + t[0] + t[1] + t[1] + t[2] + t[2]), r = parseInt(t, 16), s = r >> 16, i = r >> 8 & 255, n = 255 & r, [s, i, n, 1];
                        if (t.match(/^#?([A-Fa-f0-9]{8})$/)) return 9 === t.length && (t = t.substr(1)), r = parseInt(t, 16), s = r >> 24 & 255, i = r >> 16 & 255, n = r >> 8 & 255, e = 255 & r, [s, i, n, e];
                        if (o = m(t)) return o;
                        throw "unknown color: " + t
                    }, y = function (t, e, n) {
                        var i, s, a, l;
                        return l = I(arguments), t = l[0], e = l[1], n = l[2], t /= 360, 1 / 3 > t ? (i = (1 - e) / 3, a = (1 + e * g(r * t) / g(o - r * t)) / 3, s = 1 - (i + a)) : 2 / 3 > t ? (t -= 1 / 3, a = (1 - e) / 3, s = (1 + e * g(r * t) / g(o - r * t)) / 3, i = 1 - (a + s)) : (t -= 2 / 3, s = (1 - e) / 3, i = (1 + e * g(r * t) / g(o - r * t)) / 3, a = 1 - (s + i)), a = T(n * a * 3), s = T(n * s * 3), i = T(n * i * 3), [255 * a, 255 * s, 255 * i]
                    }, b = function () {
                        var t, e, n, i, s, o, r, a, l, u, c, h, d, f;
                        if (d = I(arguments), i = d[0], a = d[1], o = d[2], 0 === a) r = n = t = 255 * o;
                        else {
                            for (c = [0, 0, 0], e = [0, 0, 0], u = .5 > o ? o * (1 + a) : o + a - o * a, l = 2 * o - u, i /= 360, c[0] = i + 1 / 3, c[1] = i, c[2] = i - 1 / 3, s = h = 0; 2 >= h; s = ++h) c[s] < 0 && (c[s] += 1), c[s] > 1 && (c[s] -= 1), e[s] = 6 * c[s] < 1 ? l + 6 * (u - l) * c[s] : 2 * c[s] < 1 ? u : 3 * c[s] < 2 ? l + (u - l) * (2 / 3 - c[s]) * 6 : l;
                            f = [Math.round(255 * e[0]), Math.round(255 * e[1]), Math.round(255 * e[2])], r = f[0], n = f[1], t = f[2]
                        }
                        return [r, n, t]
                    }, _ = function () {
                        var t, e, n, i, s, o, r, a, l, u, c, h, d, f, p, g, m, v;
                        if (h = I(arguments), i = h[0], l = h[1], c = h[2], c *= 255, 0 === l) a = n = t = c;
                        else switch (360 === i && (i = 0), i > 360 && (i -= 360), 0 > i && (i += 360), i /= 60, s = Math.floor(i), e = i - s, o = c * (1 - l), r = c * (1 - l * e), u = c * (1 - l * (1 - e)), s) {
                            case 0:
                                d = [c, u, o], a = d[0], n = d[1], t = d[2];
                                break;
                            case 1:
                                f = [r, c, o], a = f[0], n = f[1], t = f[2];
                                break;
                            case 2:
                                p = [o, c, u], a = p[0], n = p[1], t = p[2];
                                break;
                            case 3:
                                g = [o, r, c], a = g[0], n = g[1], t = g[2];
                                break;
                            case 4:
                                m = [u, o, c], a = m[0], n = m[1], t = m[2];
                                break;
                            case 5:
                                v = [c, o, r], a = v[0], n = v[1], t = v[2]
                        }
                        return a = Math.round(a), n = Math.round(n), t = Math.round(t), [a, n, t]
                    }, s = 18, a = .95047, l = 1, u = 1.08883, w = function () {
                        var t, e, n, i, s, o;
                        return o = I(arguments), s = o[0], t = o[1], e = o[2], n = Math.sqrt(t * t + e * e), i = Math.atan2(e, t) / Math.PI * 180, [s, n, i]
                    }, x = function (t, e, n) {
                        var i, s, o, r, c, h, d;
                        return void 0 !== t && 3 === t.length && (h = t, t = h[0], e = h[1], n = h[2]), void 0 !== t && 3 === t.length && (d = t, t = d[0], e = d[1], n = d[2]), r = (t + 16) / 116, o = r + e / 500, c = r - n / 200, o = k(o) * a, r = k(r) * l, c = k(c) * u, s = q(3.2404542 * o - 1.5371385 * r - .4985314 * c), i = q(-.969266 * o + 1.8760108 * r + .041556 * c), n = q(.0556434 * o - .2040259 * r + 1.0572252 * c), [T(s, 0, 255), T(i, 0, 255), T(n, 0, 255), 1]
                    }, k = function (t) {
                        return t > .206893034 ? t * t * t : (t - 4 / 29) / 7.787037
                    }, q = function (t) {
                        return Math.round(255 * (.00304 >= t ? 12.92 * t : 1.055 * Math.pow(t, 1 / 2.4) - .055))
                    }, S = function () {
                        var t, e, n, i;
                        return i = I(arguments), n = i[0], t = i[1], e = i[2], e = e * Math.PI / 180, [n, Math.cos(e) * t, Math.sin(e) * t]
                    }, C = function (t, e, n) {
                        var i, s, o, r, a, l, u;
                        return l = S(t, e, n), i = l[0], s = l[1], o = l[2], u = x(i, s, o), a = u[0], r = u[1], o = u[2], [T(a, 0, 255), T(r, 0, 255), T(o, 0, 255)]
                    }, D = function (t, e, n) {
                        var i;
                        return i = I(arguments), t = i[0], e = i[1], n = i[2], t = E(t), e = E(e), n = E(n), .2126 * t + .7152 * e + .0722 * n
                    }, E = function (t) {
                        return t /= 255, .03928 >= t ? t / 12.92 : Math.pow((t + .055) / 1.055, 2.4)
                    }, j = function () {
                        var t, e, n, i, s, o;
                        return o = I(arguments), n = o[0], e = o[1], t = o[2], s = n << 16 | e << 8 | t, i = "000000" + s.toString(16), "#" + i.substr(i.length - 6)
                    }, A = function () {
                        var t, e, n, i, s, o, r, a, l;
                        return l = I(arguments), r = l[0], n = l[1], e = l[2], t = 2 * Math.PI, r /= 255, n /= 255, e /= 255, o = Math.min(r, n, e), s = (r + n + e) / 3, a = 1 - o / s, 0 === a ? i = 0 : (i = (r - n + (r - e)) / 2, i /= Math.sqrt((r - n) * (r - n) + (r - e) * (n - e)), i = Math.acos(i), e > n && (i = t - i), i /= t), [360 * i, a, s]
                    }, $ = function (t, e, n) {
                        var i, s, o, r, a, l;
                        return void 0 !== t && t.length >= 3 && (l = t, t = l[0], e = l[1], n = l[2]), t /= 255, e /= 255, n /= 255, r = Math.min(t, e, n), o = Math.max(t, e, n), s = (o + r) / 2, o === r ? (a = 0, i = Number.NaN) : a = .5 > s ? (o - r) / (o + r) : (o - r) / (2 - o - r), t === o ? i = (e - n) / (o - r) : e === o ? i = 2 + (n - t) / (o - r) : n === o && (i = 4 + (t - e) / (o - r)), i *= 60, 0 > i && (i += 360), [i, a, s]
                    }, N = function () {
                        var t, e, n, i, s, o, r, a, l, u;
                        return u = I(arguments), r = u[0], n = u[1], t = u[2], o = Math.min(r, n, t), s = Math.max(r, n, t), e = s - o, l = s / 255, 0 === s ? (i = Number.NaN, a = 0) : (a = e / s, r === s && (i = (n - t) / e), n === s && (i = 2 + (t - r) / e), t === s && (i = 4 + (r - n) / e), i *= 60, 0 > i && (i += 360)), [i, a, l]
                    }, M = function () {
                        var t, e, n, i, s, o, r;
                        return r = I(arguments), n = r[0], e = r[1], t = r[2], n = O(n), e = O(e), t = O(t), i = R((.4124564 * n + .3575761 * e + .1804375 * t) / a), s = R((.2126729 * n + .7151522 * e + .072175 * t) / l), o = R((.0193339 * n + .119192 * e + .9503041 * t) / u), [116 * s - 16, 500 * (i - s), 200 * (s - o)]
                    }, O = function (t) {
                        return (t /= 255) <= .04045 ? t / 12.92 : Math.pow((t + .055) / 1.055, 2.4)
                    }, R = function (t) {
                        return t > .008856 ? Math.pow(t, 1 / 3) : 7.787037 * t + 4 / 29
                    }, L = function () {
                        var t, e, n, i, s, o, r;
                        return o = I(arguments), s = o[0], n = o[1], e = o[2], r = M(s, n, e), i = r[0], t = r[1], e = r[2], w(i, t, e)
                    }, d.scale = function (t, e) {
                        var n, i, s, o, r, a, l, u, c, h, f, p, g, m, v, y, b, _, w, x, k;
                        return y = "rgb", b = d("#ccc"), k = 0, g = !1, p = [0, 1], h = [], w = !1, x = [], v = 0, m = 1, f = !1, _ = 0, c = {}, a = function (t, e) {
                            var n, i, s, o, a, l, u;
                            if (null == t && (t = ["#ddd", "#222"]), null != t && "string" === F(t) && null != (null != (a = d.brewer) ? a[t] : void 0) && (t = d.brewer[t]), "array" === F(t)) {
                                for (t = t.slice(0), n = s = 0, l = t.length - 1; l >= 0 ? l >= s : s >= l; n = l >= 0 ? ++s : --s) i = t[n], "string" === F(i) && (t[n] = d(i));
                                if (null != e) x = e;
                                else
                                    for (x = [], n = o = 0, u = t.length - 1; u >= 0 ? u >= o : o >= u; n = u >= 0 ? ++o : --o) x.push(n / (t.length - 1))
                            }
                            return r(), h = t
                        }, l = function (t) {
                            return null == t && (t = []), p = t, v = t[0], m = t[t.length - 1], r(), _ = 2 === t.length ? 0 : t.length - 1
                        }, s = function (t) {
                            var e, n;
                            if (null != p) {
                                for (n = p.length - 1, e = 0; n > e && t >= p[e];) e++;
                                return e - 1
                            }
                            return 0
                        }, u = function (t) {
                            return t
                        }, n = function (t) {
                            var e, n, i, o, r;
                            return r = t, p.length > 2 && (o = p.length - 1, e = s(t), i = p[0] + (p[1] - p[0]) * (0 + .5 * k), n = p[o - 1] + (p[o] - p[o - 1]) * (1 - .5 * k), r = v + (p[e] + .5 * (p[e + 1] - p[e]) - i) / (n - i) * (m - v)), r
                        }, o = function (t, e) {
                            var n, i, o, r, a, l, f, g, w;
                            if (null == e && (e = !1), isNaN(t)) return b;
                            if (e ? f = t : p.length > 2 ? (n = s(t), f = n / (_ - 1)) : (f = o = v !== m ? (t - v) / (m - v) : 0, f = o = (t - v) / (m - v), f = Math.min(1, Math.max(0, f))), e || (f = u(f)), a = Math.floor(1e4 * f), c[a]) i = c[a];
                            else {
                                if ("array" === F(h))
                                    for (r = g = 0, w = x.length - 1; w >= 0 ? w >= g : g >= w; r = w >= 0 ? ++g : --g) {
                                        if (l = x[r], l >= f) {
                                            i = h[r];
                                            break
                                        }
                                        if (f >= l && r === x.length - 1) {
                                            i = h[r];
                                            break
                                        }
                                        if (f > l && f < x[r + 1]) {
                                            f = (f - l) / (x[r + 1] - l), i = d.interpolate(h[r], h[r + 1], f, y);
                                            break
                                        }
                                    } else "function" === F(h) && (i = h(f));
                                c[a] = i
                            }
                            return i
                        }, r = function () {
                            return c = {}
                        }, a(t, e), i = function (t) {
                            var e;
                            return e = o(t), w && e[w] ? e[w]() : e
                        }, i.domain = function (t, e, n, s) {
                            var o;
                            return null == n && (n = "e"), arguments.length ? (null != e && (o = d.analyze(t, s), t = 0 === e ? [o.min, o.max] : d.limits(o, n, e)), l(t), i) : p
                        }, i.mode = function (t) {
                            return arguments.length ? (y = t, r(), i) : y
                        }, i.range = function (t, e) {
                            return a(t, e), i
                        }, i.out = function (t) {
                            return w = t, i
                        }, i.spread = function (t) {
                            return arguments.length ? (k = t, i) : k
                        }, i.correctLightness = function (t) {
                            return arguments.length ? (f = t, r(), u = f ? function (t) {
                                var e, n, i, s, r, a, l, u, c;
                                for (e = o(0, !0).lab()[0], n = o(1, !0).lab()[0], l = e > n, i = o(t, !0).lab()[0], r = e + (n - e) * t, s = i - r, u = 0, c = 1, a = 20; Math.abs(s) > .01 && a-- > 0;) ! function () {
                                    return l && (s *= -1), 0 > s ? (u = t, t += .5 * (c - t)) : (c = t, t += .5 * (u - t)), i = o(t, !0).lab()[0], s = i - r
                                }();
                                return t
                            } : function (t) {
                                return t
                            }, i) : f
                        }, i.colors = function (e) {
                            var n, s, o, r, a, l;
                            if (null == e && (e = "hex"), t = [], s = [], p.length > 2)
                                for (n = o = 1, l = p.length; l >= 1 ? l > o : o > l; n = l >= 1 ? ++o : --o) s.push(.5 * (p[n - 1] + p[n]));
                            else s = p;
                            for (r = 0, a = s.length; a > r; r++) n = s[r], t.push(i(n)[e]());
                            return t
                        }, i
                    }, null == (H = d.scales) && (d.scales = {}), d.scales.cool = function () {
                        return d.scale([d.hsl(180, 1, .9), d.hsl(250, .7, .4)])
                    }, d.scales.hot = function () {
                        return d.scale(["#000", "#f00", "#ff0", "#fff"], [0, .25, .75, 1]).mode("rgb")
                    }, d.analyze = function (t, e, n) {
                        var i, s, o, r, a, l, u;
                        if (o = {
                                min: Number.MAX_VALUE,
                                max: -1 * Number.MAX_VALUE,
                                sum: 0,
                                values: [],
                                count: 0
                            }, null == n && (n = function () {
                                return !0
                            }), i = function (t) {
                                null == t || isNaN(t) || (o.values.push(t), o.sum += t, t < o.min && (o.min = t), t > o.max && (o.max = t), o.count += 1)
                            }, a = function (t, s) {
                                return n(t, s) ? i(null != e && "function" === F(e) ? e(t) : null != e && "string" === F(e) || "number" === F(e) ? t[e] : t) : void 0
                            }, "array" === F(t))
                            for (l = 0, u = t.length; u > l; l++) r = t[l], a(r);
                        else
                            for (s in t) r = t[s], a(r, s);
                        return o.domain = [o.min, o.max], o.limits = function (t, e) {
                            return d.limits(o, t, e)
                        }, o
                    }, d.limits = function (t, e, n) {
                        var i, s, o, r, a, l, u, c, h, f, p, g, m, v, y, b, _, w, x, k, S, C, T, D, E, j, A, $, N, M, L, O, P, I, R, q, H, z, U, B, W, Y, V, G, Q, K, X, J, Z, tt, et, nt, it, st, ot, rt;
                        if (null == e && (e = "equal"), null == n && (n = 7), "array" === F(t) && (t = d.analyze(t)), m = t.min, p = t.max, T = t.sum, j = t.values.sort(function (t, e) {
                                return t - e
                            }), f = [], "c" === e.substr(0, 1) && (f.push(m), f.push(p)), "e" === e.substr(0, 1)) {
                            for (f.push(m), u = A = 1, H = n - 1; H >= 1 ? H >= A : A >= H; u = H >= 1 ? ++A : --A) f.push(m + u / n * (p - m));
                            f.push(p)
                        } else if ("l" === e.substr(0, 1)) {
                            if (0 >= m) throw "Logarithmic scales are only possible for values > 0";
                            for (v = Math.LOG10E * Math.log(m), g = Math.LOG10E * Math.log(p), f.push(m), u = $ = 1, G = n - 1; G >= 1 ? G >= $ : $ >= G; u = G >= 1 ? ++$ : --$) f.push(Math.pow(10, v + u / n * (g - v)));
                            f.push(p)
                        } else if ("q" === e.substr(0, 1)) {
                            for (f.push(m), u = N = 1, Q = n - 1; Q >= 1 ? Q >= N : N >= Q; u = Q >= 1 ? ++N : --N) x = j.length * u / n, k = Math.floor(x), k === x ? f.push(j[k]) : (S = x - k, f.push(j[k] * S + j[k + 1] * (1 - S)));
                            f.push(p)
                        } else if ("k" === e.substr(0, 1)) {
                            for (b = j.length, i = new Array(b), a = new Array(n), C = !0, _ = 0, o = null, o = [], o.push(m), u = M = 1, K = n - 1; K >= 1 ? K >= M : M >= K; u = K >= 1 ? ++M : --M) o.push(m + u / n * (p - m));
                            for (o.push(p); C;) {
                                for (c = L = 0, X = n - 1; X >= 0 ? X >= L : L >= X; c = X >= 0 ? ++L : --L) a[c] = 0;
                                for (u = O = 0, J = b - 1; J >= 0 ? J >= O : O >= J; u = J >= 0 ? ++O : --O) {
                                    for (E = j[u], y = Number.MAX_VALUE, c = P = 0, Z = n - 1; Z >= 0 ? Z >= P : P >= Z; c = Z >= 0 ? ++P : --P) l = Math.abs(o[c] - E), y > l && (y = l, s = c);
                                    a[s]++, i[u] = s
                                }
                                for (w = new Array(n), c = I = 0, tt = n - 1; tt >= 0 ? tt >= I : I >= tt; c = tt >= 0 ? ++I : --I) w[c] = null;
                                for (u = R = 0, et = b - 1; et >= 0 ? et >= R : R >= et; u = et >= 0 ? ++R : --R) r = i[u], null === w[r] ? w[r] = j[u] : w[r] += j[u];
                                for (c = q = 0, z = n - 1; z >= 0 ? z >= q : q >= z; c = z >= 0 ? ++q : --q) w[c] *= 1 / a[c];
                                for (C = !1, c = nt = 0, U = n - 1; U >= 0 ? U >= nt : nt >= U; c = U >= 0 ? ++nt : --nt)
                                    if (w[c] !== o[u]) {
                                        C = !0;
                                        break
                                    }
                                o = w, _++, _ > 200 && (C = !1)
                            }
                            for (h = {}, c = it = 0, B = n - 1; B >= 0 ? B >= it : it >= B; c = B >= 0 ? ++it : --it) h[c] = [];
                            for (u = st = 0, W = b - 1; W >= 0 ? W >= st : st >= W; u = W >= 0 ? ++st : --st) r = i[u], h[r].push(j[u]);
                            for (D = [], c = ot = 0, Y = n - 1; Y >= 0 ? Y >= ot : ot >= Y; c = Y >= 0 ? ++ot : --ot) D.push(h[c][0]), D.push(h[c][h[c].length - 1]);
                            for (D = D.sort(function (t, e) {
                                    return t - e
                                }), f.push(D[0]), u = rt = 1, V = D.length - 1; V >= rt; u = rt += 2) isNaN(D[u]) || f.push(D[u])
                        }
                        return f
                    }, d.brewer = h = {
                        OrRd: ["#fff7ec", "#fee8c8", "#fdd49e", "#fdbb84", "#fc8d59", "#ef6548", "#d7301f", "#b30000", "#7f0000"],
                        PuBu: ["#fff7fb", "#ece7f2", "#d0d1e6", "#a6bddb", "#74a9cf", "#3690c0", "#0570b0", "#045a8d", "#023858"],
                        BuPu: ["#f7fcfd", "#e0ecf4", "#bfd3e6", "#9ebcda", "#8c96c6", "#8c6bb1", "#88419d", "#810f7c", "#4d004b"],
                        Oranges: ["#fff5eb", "#fee6ce", "#fdd0a2", "#fdae6b", "#fd8d3c", "#f16913", "#d94801", "#a63603", "#7f2704"],
                        BuGn: ["#f7fcfd", "#e5f5f9", "#ccece6", "#99d8c9", "#66c2a4", "#41ae76", "#238b45", "#006d2c", "#00441b"],
                        YlOrBr: ["#ffffe5", "#fff7bc", "#fee391", "#fec44f", "#fe9929", "#ec7014", "#cc4c02", "#993404", "#662506"],
                        YlGn: ["#ffffe5", "#f7fcb9", "#d9f0a3", "#addd8e", "#78c679", "#41ab5d", "#238443", "#006837", "#004529"],
                        Reds: ["#fff5f0", "#fee0d2", "#fcbba1", "#fc9272", "#fb6a4a", "#ef3b2c", "#cb181d", "#a50f15", "#67000d"],
                        RdPu: ["#fff7f3", "#fde0dd", "#fcc5c0", "#fa9fb5", "#f768a1", "#dd3497", "#ae017e", "#7a0177", "#49006a"],
                        Greens: ["#f7fcf5", "#e5f5e0", "#c7e9c0", "#a1d99b", "#74c476", "#41ab5d", "#238b45", "#006d2c", "#00441b"],
                        YlGnBu: ["#ffffd9", "#edf8b1", "#c7e9b4", "#7fcdbb", "#41b6c4", "#1d91c0", "#225ea8", "#253494", "#081d58"],
                        Purples: ["#fcfbfd", "#efedf5", "#dadaeb", "#bcbddc", "#9e9ac8", "#807dba", "#6a51a3", "#54278f", "#3f007d"],
                        GnBu: ["#f7fcf0", "#e0f3db", "#ccebc5", "#a8ddb5", "#7bccc4", "#4eb3d3", "#2b8cbe", "#0868ac", "#084081"],
                        Greys: ["#ffffff", "#f0f0f0", "#d9d9d9", "#bdbdbd", "#969696", "#737373", "#525252", "#252525", "#000000"],
                        YlOrRd: ["#ffffcc", "#ffeda0", "#fed976", "#feb24c", "#fd8d3c", "#fc4e2a", "#e31a1c", "#bd0026", "#800026"],
                        PuRd: ["#f7f4f9", "#e7e1ef", "#d4b9da", "#c994c7", "#df65b0", "#e7298a", "#ce1256", "#980043", "#67001f"],
                        Blues: ["#f7fbff", "#deebf7", "#c6dbef", "#9ecae1", "#6baed6", "#4292c6", "#2171b5", "#08519c", "#08306b"],
                        PuBuGn: ["#fff7fb", "#ece2f0", "#d0d1e6", "#a6bddb", "#67a9cf", "#3690c0", "#02818a", "#016c59", "#014636"],
                        Spectral: ["#9e0142", "#d53e4f", "#f46d43", "#fdae61", "#fee08b", "#ffffbf", "#e6f598", "#abdda4", "#66c2a5", "#3288bd", "#5e4fa2"],
                        RdYlGn: ["#a50026", "#d73027", "#f46d43", "#fdae61", "#fee08b", "#ffffbf", "#d9ef8b", "#a6d96a", "#66bd63", "#1a9850", "#006837"],
                        RdBu: ["#67001f", "#b2182b", "#d6604d", "#f4a582", "#fddbc7", "#f7f7f7", "#d1e5f0", "#92c5de", "#4393c3", "#2166ac", "#053061"],
                        PiYG: ["#8e0152", "#c51b7d", "#de77ae", "#f1b6da", "#fde0ef", "#f7f7f7", "#e6f5d0", "#b8e186", "#7fbc41", "#4d9221", "#276419"],
                        PRGn: ["#40004b", "#762a83", "#9970ab", "#c2a5cf", "#e7d4e8", "#f7f7f7", "#d9f0d3", "#a6dba0", "#5aae61", "#1b7837", "#00441b"],
                        RdYlBu: ["#a50026", "#d73027", "#f46d43", "#fdae61", "#fee090", "#ffffbf", "#e0f3f8", "#abd9e9", "#74add1", "#4575b4", "#313695"],
                        BrBG: ["#543005", "#8c510a", "#bf812d", "#dfc27d", "#f6e8c3", "#f5f5f5", "#c7eae5", "#80cdc1", "#35978f", "#01665e", "#003c30"],
                        RdGy: ["#67001f", "#b2182b", "#d6604d", "#f4a582", "#fddbc7", "#ffffff", "#e0e0e0", "#bababa", "#878787", "#4d4d4d", "#1a1a1a"],
                        PuOr: ["#7f3b08", "#b35806", "#e08214", "#fdb863", "#fee0b6", "#f7f7f7", "#d8daeb", "#b2abd2", "#8073ac", "#542788", "#2d004b"],
                        Set2: ["#66c2a5", "#fc8d62", "#8da0cb", "#e78ac3", "#a6d854", "#ffd92f", "#e5c494", "#b3b3b3"],
                        Accent: ["#7fc97f", "#beaed4", "#fdc086", "#ffff99", "#386cb0", "#f0027f", "#bf5b17", "#666666"],
                        Set1: ["#e41a1c", "#377eb8", "#4daf4a", "#984ea3", "#ff7f00", "#ffff33", "#a65628", "#f781bf", "#999999"],
                        Set3: ["#8dd3c7", "#ffffb3", "#bebada", "#fb8072", "#80b1d3", "#fdb462", "#b3de69", "#fccde5", "#d9d9d9", "#bc80bd", "#ccebc5", "#ffed6f"],
                        Dark2: ["#1b9e77", "#d95f02", "#7570b3", "#e7298a", "#66a61e", "#e6ab02", "#a6761d", "#666666"],
                        Paired: ["#a6cee3", "#1f78b4", "#b2df8a", "#33a02c", "#fb9a99", "#e31a1c", "#fdbf6f", "#ff7f00", "#cab2d6", "#6a3d9a", "#ffff99", "#b15928"],
                        Pastel2: ["#b3e2cd", "#fdcdac", "#cbd5e8", "#f4cae4", "#e6f5c9", "#fff2ae", "#f1e2cc", "#cccccc"],
                        Pastel1: ["#fbb4ae", "#b3cde3", "#ccebc5", "#decbe4", "#fed9a6", "#ffffcc", "#e5d8bd", "#fddaec", "#f2f2f2"]
                    }, d.colors = p = {
                        indigo: "#4b0082",
                        gold: "#ffd700",
                        hotpink: "#ff69b4",
                        firebrick: "#b22222",
                        indianred: "#cd5c5c",
                        yellow: "#ffff00",
                        mistyrose: "#ffe4e1",
                        darkolivegreen: "#556b2f",
                        olive: "#808000",
                        darkseagreen: "#8fbc8f",
                        pink: "#ffc0cb",
                        tomato: "#ff6347",
                        lightcoral: "#f08080",
                        orangered: "#ff4500",
                        navajowhite: "#ffdead",
                        lime: "#00ff00",
                        palegreen: "#98fb98",
                        darkslategrey: "#2f4f4f",
                        greenyellow: "#adff2f",
                        burlywood: "#deb887",
                        seashell: "#fff5ee",
                        mediumspringgreen: "#00fa9a",
                        fuchsia: "#ff00ff",
                        papayawhip: "#ffefd5",
                        blanchedalmond: "#ffebcd",
                        chartreuse: "#7fff00",
                        dimgray: "#696969",
                        black: "#000000",
                        peachpuff: "#ffdab9",
                        springgreen: "#00ff7f",
                        aquamarine: "#7fffd4",
                        white: "#ffffff",
                        orange: "#ffa500",
                        lightsalmon: "#ffa07a",
                        darkslategray: "#2f4f4f",
                        brown: "#a52a2a",
                        ivory: "#fffff0",
                        dodgerblue: "#1e90ff",
                        peru: "#cd853f",
                        lawngreen: "#7cfc00",
                        chocolate: "#d2691e",
                        crimson: "#dc143c",
                        forestgreen: "#228b22",
                        darkgrey: "#a9a9a9",
                        lightseagreen: "#20b2aa",
                        cyan: "#00ffff",
                        mintcream: "#f5fffa",
                        silver: "#c0c0c0",
                        antiquewhite: "#faebd7",
                        mediumorchid: "#ba55d3",
                        skyblue: "#87ceeb",
                        gray: "#808080",
                        darkturquoise: "#00ced1",
                        goldenrod: "#daa520",
                        darkgreen: "#006400",
                        floralwhite: "#fffaf0",
                        darkviolet: "#9400d3",
                        darkgray: "#a9a9a9",
                        moccasin: "#ffe4b5",
                        saddlebrown: "#8b4513",
                        grey: "#808080",
                        darkslateblue: "#483d8b",
                        lightskyblue: "#87cefa",
                        lightpink: "#ffb6c1",
                        mediumvioletred: "#c71585",
                        slategrey: "#708090",
                        red: "#ff0000",
                        deeppink: "#ff1493",
                        limegreen: "#32cd32",
                        darkmagenta: "#8b008b",
                        palegoldenrod: "#eee8aa",
                        plum: "#dda0dd",
                        turquoise: "#40e0d0",
                        lightgrey: "#d3d3d3",
                        lightgoldenrodyellow: "#fafad2",
                        darkgoldenrod: "#b8860b",
                        lavender: "#e6e6fa",
                        maroon: "#800000",
                        yellowgreen: "#9acd32",
                        sandybrown: "#f4a460",
                        thistle: "#d8bfd8",
                        violet: "#ee82ee",
                        navy: "#000080",
                        magenta: "#ff00ff",
                        dimgrey: "#696969",
                        tan: "#d2b48c",
                        rosybrown: "#bc8f8f",
                        olivedrab: "#6b8e23",
                        blue: "#0000ff",
                        lightblue: "#add8e6",
                        ghostwhite: "#f8f8ff",
                        honeydew: "#f0fff0",
                        cornflowerblue: "#6495ed",
                        slateblue: "#6a5acd",
                        linen: "#faf0e6",
                        darkblue: "#00008b",
                        powderblue: "#b0e0e6",
                        seagreen: "#2e8b57",
                        darkkhaki: "#bdb76b",
                        snow: "#fffafa",
                        sienna: "#a0522d",
                        mediumblue: "#0000cd",
                        royalblue: "#4169e1",
                        lightcyan: "#e0ffff",
                        green: "#008000",
                        mediumpurple: "#9370db",
                        midnightblue: "#191970",
                        cornsilk: "#fff8dc",
                        paleturquoise: "#afeeee",
                        bisque: "#ffe4c4",
                        slategray: "#708090",
                        darkcyan: "#008b8b",
                        khaki: "#f0e68c",
                        wheat: "#f5deb3",
                        teal: "#008080",
                        darkorchid: "#9932cc",
                        deepskyblue: "#00bfff",
                        salmon: "#fa8072",
                        darkred: "#8b0000",
                        steelblue: "#4682b4",
                        palevioletred: "#db7093",
                        lightslategray: "#778899",
                        aliceblue: "#f0f8ff",
                        lightslategrey: "#778899",
                        lightgreen: "#90ee90",
                        orchid: "#da70d6",
                        gainsboro: "#dcdcdc",
                        mediumseagreen: "#3cb371",
                        lightgray: "#d3d3d3",
                        mediumturquoise: "#48d1cc",
                        lemonchiffon: "#fffacd",
                        cadetblue: "#5f9ea0",
                        lightyellow: "#ffffe0",
                        lavenderblush: "#fff0f5",
                        coral: "#ff7f50",
                        purple: "#800080",
                        aqua: "#00ffff",
                        whitesmoke: "#f5f5f5",
                        mediumslateblue: "#7b68ee",
                        darkorange: "#ff8c00",
                        mediumaquamarine: "#66cdaa",
                        darksalmon: "#e9967a",
                        beige: "#f5f5dc",
                        blueviolet: "#8a2be2",
                        azure: "#f0ffff",
                        lightsteelblue: "#b0c4de",
                        oldlace: "#fdf5e6"
                    }, F = function () {
                        var t, e, n, i, s;
                        for (t = {}, s = "Boolean Number String Function Array Date RegExp Undefined Null".split(" "), n = 0, i = s.length; i > n; n++) e = s[n], t["[object " + e + "]"] = e.toLowerCase();
                        return function (e) {
                            var n;
                            return n = Object.prototype.toString.call(e), t[n] || "object"
                        }
                    }(), T = function (t, e, n) {
                        return null == e && (e = 0), null == n && (n = 1), e > t && (t = e), t > n && (t = n), t
                    }, I = function (t) {
                        return t.length >= 3 ? t : t[0]
                    }, r = 2 * Math.PI, o = Math.PI / 3, g = Math.cos, c = function (t) {
                        var e, n, i, s, o, r, a, l, u, h, f;
                        return t = function () {
                            var e, n, i;
                            for (i = [], e = 0, n = t.length; n > e; e++) s = t[e], i.push(d(s));
                            return i
                        }(), 2 === t.length ? (u = function () {
                            var e, n, i;
                            for (i = [], e = 0, n = t.length; n > e; e++) s = t[e], i.push(s.lab());
                            return i
                        }(), o = u[0], r = u[1], e = function (t) {
                            var e, n;
                            return n = function () {
                                var n, i;
                                for (i = [], e = n = 0; 2 >= n; e = ++n) i.push(o[e] + t * (r[e] - o[e]));
                                return i
                            }(), d.lab.apply(d, n)
                        }) : 3 === t.length ? (h = function () {
                            var e, n, i;
                            for (i = [], e = 0, n = t.length; n > e; e++) s = t[e], i.push(s.lab());
                            return i
                        }(), o = h[0], r = h[1], a = h[2], e = function (t) {
                            var e, n;
                            return n = function () {
                                var n, i;
                                for (i = [], e = n = 0; 2 >= n; e = ++n) i.push((1 - t) * (1 - t) * o[e] + 2 * (1 - t) * t * r[e] + t * t * a[e]);
                                return i
                            }(), d.lab.apply(d, n)
                        }) : 4 === t.length ? (f = function () {
                            var e, n, i;
                            for (i = [], e = 0, n = t.length; n > e; e++) s = t[e], i.push(s.lab());
                            return i
                        }(), o = f[0], r = f[1], a = f[2], l = f[3], e = function (t) {
                            var e, n;
                            return n = function () {
                                var n, i;
                                for (i = [], e = n = 0; 2 >= n; e = ++n) i.push((1 - t) * (1 - t) * (1 - t) * o[e] + 3 * (1 - t) * (1 - t) * t * r[e] + 3 * (1 - t) * t * t * a[e] + t * t * t * l[e]);
                                return i
                            }(), d.lab.apply(d, n)
                        }) : 5 === t.length && (n = c(t.slice(0, 3)), i = c(t.slice(2, 5)), e = function (t) {
                            return .5 > t ? n(2 * t) : i(2 * (t - .5))
                        }), e
                    }, d.interpolate.bezier = c
                }).call(this)
            }, {}],
            "/Users/qrohlf/Code/trianglify/node_modules/delaunay-fast/delaunay.js": [function (t, e) {
                var n;
                ! function () {
                    "use strict";

                    function t(t) {
                        var e, n, i, s, o, r, a = Number.POSITIVE_INFINITY,
                            l = Number.POSITIVE_INFINITY,
                            u = Number.NEGATIVE_INFINITY,
                            c = Number.NEGATIVE_INFINITY;
                        for (e = t.length; e--;) t[e][0] < a && (a = t[e][0]), t[e][0] > u && (u = t[e][0]), t[e][1] < l && (l = t[e][1]), t[e][1] > c && (c = t[e][1]);
                        return n = u - a, i = c - l, s = Math.max(n, i), o = a + .5 * n, r = l + .5 * i, [[o - 20 * s, r - s], [o, r + 20 * s], [o + 20 * s, r - s]]
                    }

                    function i(t, e, n, i) {
                        var s, r, a, l, u, c, h, d, f, p, g = t[e][0],
                            m = t[e][1],
                            v = t[n][0],
                            y = t[n][1],
                            b = t[i][0],
                            _ = t[i][1],
                            w = Math.abs(m - y),
                            x = Math.abs(y - _);
                        if (o > w && o > x) throw new Error("Eek! Coincident points!");
                        return o > w ? (l = -((b - v) / (_ - y)), c = (v + b) / 2, d = (y + _) / 2, s = (v + g) / 2, r = l * (s - c) + d) : o > x ? (a = -((v - g) / (y - m)), u = (g + v) / 2, h = (m + y) / 2, s = (b + v) / 2, r = a * (s - u) + h) : (a = -((v - g) / (y - m)), l = -((b - v) / (_ - y)), u = (g + v) / 2, c = (v + b) / 2, h = (m + y) / 2, d = (y + _) / 2, s = (a * u - l * c + d - h) / (a - l), r = w > x ? a * (s - u) + h : l * (s - c) + d), f = v - s, p = y - r, {
                            i: e,
                            j: n,
                            k: i,
                            x: s,
                            y: r,
                            r: f * f + p * p
                        }
                    }

                    function s(t) {
                        var e, n, i, s, o, r;
                        for (n = t.length; n;)
                            for (s = t[--n], i = t[--n], e = n; e;)
                                if (r = t[--e], o = t[--e], i === o && s === r || i === r && s === o) {
                                    t.splice(n, 2), t.splice(e, 2);
                                    break
                                }
                    }
                    var o = 1 / 1048576;
                    n = {
                        triangulate: function (e, n) {
                            var r, a, l, u, c, h, d, f, p, g, m, v, y = e.length;
                            if (3 > y) return [];
                            if (e = e.slice(0), n)
                                for (r = y; r--;) e[r] = e[r][n];
                            for (l = new Array(y), r = y; r--;) l[r] = r;
                            for (l.sort(function (t, n) {
                                    return e[n][0] - e[t][0]
                                }), u = t(e), e.push(u[0], u[1], u[2]), c = [i(e, y + 0, y + 1, y + 2)], h = [], d = [], r = l.length; r--; d.length = 0) {
                                for (v = l[r], a = c.length; a--;) f = e[v][0] - c[a].x, f > 0 && f * f > c[a].r ? (h.push(c[a]), c.splice(a, 1)) : (p = e[v][1] - c[a].y, f * f + p * p - c[a].r > o || (d.push(c[a].i, c[a].j, c[a].j, c[a].k, c[a].k, c[a].i), c.splice(a, 1)));
                                for (s(d), a = d.length; a;) m = d[--a], g = d[--a], c.push(i(e, g, m, v))
                            }
                            for (r = c.length; r--;) h.push(c[r]);
                            for (c.length = 0, r = h.length; r--;) h[r].i < y && h[r].j < y && h[r].k < y && c.push(h[r].i, h[r].j, h[r].k);
                            return c
                        },
                        contains: function (t, e) {
                            if (e[0] < t[0][0] && e[0] < t[1][0] && e[0] < t[2][0] || e[0] > t[0][0] && e[0] > t[1][0] && e[0] > t[2][0] || e[1] < t[0][1] && e[1] < t[1][1] && e[1] < t[2][1] || e[1] > t[0][1] && e[1] > t[1][1] && e[1] > t[2][1]) return null;
                            var n = t[1][0] - t[0][0],
                                i = t[2][0] - t[0][0],
                                s = t[1][1] - t[0][1],
                                o = t[2][1] - t[0][1],
                                r = n * o - i * s;
                            if (0 === r) return null;
                            var a = (o * (e[0] - t[0][0]) - i * (e[1] - t[0][1])) / r,
                                l = (n * (e[1] - t[0][1]) - s * (e[0] - t[0][0])) / r;
                            return 0 > a || 0 > l || a + l > 1 ? null : [a, l]
                        }
                    }, "undefined" != typeof e && (e.exports = n)
                }()
            }, {}],
            "/Users/qrohlf/Code/trianglify/node_modules/seedrandom/index.js": [function (t, e) {
                var n = t("./lib/alea"),
                    i = t("./lib/xor128"),
                    s = t("./lib/xorwow"),
                    o = t("./lib/xorshift7"),
                    r = t("./lib/xor4096"),
                    a = t("./lib/tychei"),
                    l = t("./seedrandom");
                l.alea = n, l.xor128 = i, l.xorwow = s, l.xorshift7 = o, l.xor4096 = r, l.tychei = a, e.exports = l
            }, {
                "./lib/alea": "/Users/qrohlf/Code/trianglify/node_modules/seedrandom/lib/alea.js",
                "./lib/tychei": "/Users/qrohlf/Code/trianglify/node_modules/seedrandom/lib/tychei.js",
                "./lib/xor128": "/Users/qrohlf/Code/trianglify/node_modules/seedrandom/lib/xor128.js",
                "./lib/xor4096": "/Users/qrohlf/Code/trianglify/node_modules/seedrandom/lib/xor4096.js",
                "./lib/xorshift7": "/Users/qrohlf/Code/trianglify/node_modules/seedrandom/lib/xorshift7.js",
                "./lib/xorwow": "/Users/qrohlf/Code/trianglify/node_modules/seedrandom/lib/xorwow.js",
                "./seedrandom": "/Users/qrohlf/Code/trianglify/node_modules/seedrandom/seedrandom.js"
            }],
            "/Users/qrohlf/Code/trianglify/node_modules/seedrandom/lib/alea.js": [function (e, n) {
                ! function (t, e, n) {
                    function i(t) {
                        var e = this,
                            n = r();
                        e.next = function () {
                            var t = 2091639 * e.s0 + 2.3283064365386963e-10 * e.c;
                            return e.s0 = e.s1, e.s1 = e.s2, e.s2 = t - (e.c = 0 | t)
                        }, e.c = 1, e.s0 = n(" "), e.s1 = n(" "), e.s2 = n(" "), e.s0 -= n(t), e.s0 < 0 && (e.s0 += 1), e.s1 -= n(t), e.s1 < 0 && (e.s1 += 1), e.s2 -= n(t), e.s2 < 0 && (e.s2 += 1), n = null
                    }

                    function s(t, e) {
                        return e.c = t.c, e.s0 = t.s0, e.s1 = t.s1, e.s2 = t.s2, e
                    }

                    function o(t, e) {
                        var n = new i(t),
                            o = e && e.state,
                            r = n.next;
                        return r.int32 = function () {
                            return 4294967296 * n.next() | 0
                        }, r["double"] = function () {
                            return r() + 1.1102230246251565e-16 * (2097152 * r() | 0)
                        }, r.quick = r, o && ("object" == typeof o && s(o, n), r.state = function () {
                            return s(n, {})
                        }), r
                    }

                    function r() {
                        var t = 4022871197,
                            e = function (e) {
                                e = e.toString();
                                for (var n = 0; n < e.length; n++) {
                                    t += e.charCodeAt(n);
                                    var i = .02519603282416938 * t;
                                    t = i >>> 0, i -= t, i *= t, t = i >>> 0, i -= t, t += 4294967296 * i
                                }
                                return 2.3283064365386963e-10 * (t >>> 0)
                            };
                        return e
                    }
                    e && e.exports ? e.exports = o : n && n.amd ? n(function () {
                        return o
                    }) : this.alea = o
                }(this, "object" == typeof n && n, "function" == typeof t && t)
            }, {}],
            "/Users/qrohlf/Code/trianglify/node_modules/seedrandom/lib/tychei.js": [function (e, n) {
                ! function (t, e, n) {
                    function i(t) {
                        var e = this,
                            n = "";
                        e.next = function () {
                            var t = e.b,
                                n = e.c,
                                i = e.d,
                                s = e.a;
                            return t = t << 25 ^ t >>> 7 ^ n, n = n - i | 0, i = i << 24 ^ i >>> 8 ^ s, s = s - t | 0, e.b = t = t << 20 ^ t >>> 12 ^ n, e.c = n = n - i | 0, e.d = i << 16 ^ n >>> 16 ^ s, e.a = s - t | 0
                        }, e.a = 0, e.b = 0, e.c = -1640531527, e.d = 1367130551, t === Math.floor(t) ? (e.a = t / 4294967296 | 0, e.b = 0 | t) : n += t;
                        for (var i = 0; i < n.length + 20; i++) e.b ^= 0 | n.charCodeAt(i), e.next()
                    }

                    function s(t, e) {
                        return e.a = t.a, e.b = t.b, e.c = t.c, e.d = t.d, e
                    }

                    function o(t, e) {
                        var n = new i(t),
                            o = e && e.state,
                            r = function () {
                                return (n.next() >>> 0) / 4294967296
                            };
                        return r["double"] = function () {
                            do var t = n.next() >>> 11,
                                e = (n.next() >>> 0) / 4294967296,
                                i = (t + e) / (1 << 21); while (0 === i);
                            return i
                        }, r.int32 = n.next, r.quick = r, o && ("object" == typeof o && s(o, n), r.state = function () {
                            return s(n, {})
                        }), r
                    }
                    e && e.exports ? e.exports = o : n && n.amd ? n(function () {
                        return o
                    }) : this.tychei = o
                }(this, "object" == typeof n && n, "function" == typeof t && t)
            }, {}],
            "/Users/qrohlf/Code/trianglify/node_modules/seedrandom/lib/xor128.js": [function (e, n) {
                ! function (t, e, n) {
                    function i(t) {
                        var e = this,
                            n = "";
                        e.x = 0, e.y = 0, e.z = 0, e.w = 0, e.next = function () {
                            var t = e.x ^ e.x << 11;
                            return e.x = e.y, e.y = e.z, e.z = e.w, e.w ^= e.w >>> 19 ^ t ^ t >>> 8
                        }, t === (0 | t) ? e.x = t : n += t;
                        for (var i = 0; i < n.length + 64; i++) e.x ^= 0 | n.charCodeAt(i), e.next()
                    }

                    function s(t, e) {
                        return e.x = t.x, e.y = t.y, e.z = t.z, e.w = t.w, e
                    }

                    function o(t, e) {
                        var n = new i(t),
                            o = e && e.state,
                            r = function () {
                                return (n.next() >>> 0) / 4294967296
                            };
                        return r["double"] = function () {
                            do var t = n.next() >>> 11,
                                e = (n.next() >>> 0) / 4294967296,
                                i = (t + e) / (1 << 21); while (0 === i);
                            return i
                        }, r.int32 = n.next, r.quick = r, o && ("object" == typeof o && s(o, n), r.state = function () {
                            return s(n, {})
                        }), r
                    }
                    e && e.exports ? e.exports = o : n && n.amd ? n(function () {
                        return o
                    }) : this.xor128 = o
                }(this, "object" == typeof n && n, "function" == typeof t && t)
            }, {}],
            "/Users/qrohlf/Code/trianglify/node_modules/seedrandom/lib/xor4096.js": [function (e, n) {
                ! function (t, e, n) {
                    function i(t) {
                        function e(t, e) {
                            var n, i, s, o, r, a = [],
                                l = 128;
                            for (e === (0 | e) ? (i = e, e = null) : (e += "\x00", i = 0, l = Math.max(l, e.length)), s = 0, o = -32; l > o; ++o) e && (i ^= e.charCodeAt((o + 32) % e.length)), 0 === o && (r = i), i ^= i << 10, i ^= i >>> 15, i ^= i << 4, i ^= i >>> 13, o >= 0 && (r = r + 1640531527 | 0, n = a[127 & o] ^= i + r, s = 0 == n ? s + 1 : 0);
                            for (s >= 128 && (a[127 & (e && e.length || 0)] = -1), s = 127, o = 512; o > 0; --o) i = a[s + 34 & 127], n = a[s = s + 1 & 127], i ^= i << 13, n ^= n << 17, i ^= i >>> 15, n ^= n >>> 12, a[s] = i ^ n;
                            t.w = r, t.X = a, t.i = s
                        }
                        var n = this;
                        n.next = function () {
                            var t, e, i = n.w,
                                s = n.X,
                                o = n.i;
                            return n.w = i = i + 1640531527 | 0, e = s[o + 34 & 127], t = s[o = o + 1 & 127], e ^= e << 13, t ^= t << 17, e ^= e >>> 15, t ^= t >>> 12, e = s[o] = e ^ t, n.i = o, e + (i ^ i >>> 16) | 0
                        }, e(n, t)
                    }

                    function s(t, e) {
                        return e.i = t.i, e.w = t.w, e.X = t.X.slice(), e
                    }

                    function o(t, e) {
                        null == t && (t = +new Date);
                        var n = new i(t),
                            o = e && e.state,
                            r = function () {
                                return (n.next() >>> 0) / 4294967296
                            };
                        return r["double"] = function () {
                            do var t = n.next() >>> 11,
                                e = (n.next() >>> 0) / 4294967296,
                                i = (t + e) / (1 << 21); while (0 === i);
                            return i
                        }, r.int32 = n.next, r.quick = r, o && (o.X && s(o, n), r.state = function () {
                            return s(n, {})
                        }), r
                    }
                    e && e.exports ? e.exports = o : n && n.amd ? n(function () {
                        return o
                    }) : this.xor4096 = o
                }(this, "object" == typeof n && n, "function" == typeof t && t)
            }, {}],
            "/Users/qrohlf/Code/trianglify/node_modules/seedrandom/lib/xorshift7.js": [function (e, n) {
                ! function (t, e, n) {
                    function i(t) {
                        function e(t, e) {
                            var n, i, s = [];
                            if (e === (0 | e)) i = s[0] = e;
                            else
                                for (e = "" + e, n = 0; n < e.length; ++n) s[7 & n] = s[7 & n] << 15 ^ e.charCodeAt(n) + s[n + 1 & 7] << 13;
                            for (; s.length < 8;) s.push(0);
                            for (n = 0; 8 > n && 0 === s[n]; ++n);
                            for (i = 8 == n ? s[7] = -1 : s[n], t.x = s, t.i = 0, n = 256; n > 0; --n) t.next()
                        }
                        var n = this;
                        n.next = function () {
                            var t, e, i = n.x,
                                s = n.i;
                            return t = i[s], t ^= t >>> 7, e = t ^ t << 24, t = i[s + 1 & 7], e ^= t ^ t >>> 10, t = i[s + 3 & 7], e ^= t ^ t >>> 3, t = i[s + 4 & 7], e ^= t ^ t << 7, t = i[s + 7 & 7], t ^= t << 13, e ^= t ^ t << 9, i[s] = e, n.i = s + 1 & 7, e
                        }, e(n, t)
                    }

                    function s(t, e) {
                        return e.x = t.x.slice(), e.i = t.i, e
                    }

                    function o(t, e) {
                        null == t && (t = +new Date);
                        var n = new i(t),
                            o = e && e.state,
                            r = function () {
                                return (n.next() >>> 0) / 4294967296
                            };
                        return r["double"] = function () {
                            do var t = n.next() >>> 11,
                                e = (n.next() >>> 0) / 4294967296,
                                i = (t + e) / (1 << 21); while (0 === i);
                            return i
                        }, r.int32 = n.next, r.quick = r, o && (o.x && s(o, n), r.state = function () {
                            return s(n, {})
                        }), r
                    }
                    e && e.exports ? e.exports = o : n && n.amd ? n(function () {
                        return o
                    }) : this.xorshift7 = o
                }(this, "object" == typeof n && n, "function" == typeof t && t)
            }, {}],
            "/Users/qrohlf/Code/trianglify/node_modules/seedrandom/lib/xorwow.js": [function (e, n) {
                ! function (t, e, n) {
                    function i(t) {
                        var e = this,
                            n = "";
                        e.next = function () {
                            var t = e.x ^ e.x >>> 2;
                            return e.x = e.y, e.y = e.z, e.z = e.w, e.w = e.v, (e.d = e.d + 362437 | 0) + (e.v = e.v ^ e.v << 4 ^ (t ^ t << 1)) | 0
                        }, e.x = 0, e.y = 0, e.z = 0, e.w = 0, e.v = 0, t === (0 | t) ? e.x = t : n += t;
                        for (var i = 0; i < n.length + 64; i++) e.x ^= 0 | n.charCodeAt(i), i == n.length && (e.d = e.x << 10 ^ e.x >>> 4), e.next()
                    }

                    function s(t, e) {
                        return e.x = t.x, e.y = t.y, e.z = t.z, e.w = t.w, e.v = t.v, e.d = t.d, e
                    }

                    function o(t, e) {
                        var n = new i(t),
                            o = e && e.state,
                            r = function () {
                                return (n.next() >>> 0) / 4294967296
                            };
                        return r["double"] = function () {
                            do var t = n.next() >>> 11,
                                e = (n.next() >>> 0) / 4294967296,
                                i = (t + e) / (1 << 21); while (0 === i);
                            return i
                        }, r.int32 = n.next, r.quick = r, o && ("object" == typeof o && s(o, n), r.state = function () {
                            return s(n, {})
                        }), r
                    }
                    e && e.exports ? e.exports = o : n && n.amd ? n(function () {
                        return o
                    }) : this.xorwow = o
                }(this, "object" == typeof n && n, "function" == typeof t && t)
            }, {}],
            "/Users/qrohlf/Code/trianglify/node_modules/seedrandom/seedrandom.js": [function (e, n) {
                ! function (i, s) {
                    function o(t, e, n) {
                        var o = [];
                        e = 1 == e ? {
                            entropy: !0
                        } : e || {};
                        var d = u(l(e.entropy ? [t, h(i)] : null == t ? c() : t, 3), o),
                            f = new r(o),
                            m = function () {
                                for (var t = f.g(g), e = y, n = 0; b > t;) t = (t + n) * p, e *= p, n = f.g(1);
                                for (; t >= _;) t /= 2, e /= 2, n >>>= 1;
                                return (t + n) / e
                            };
                        return m.int32 = function () {
                            return 0 | f.g(4)
                        }, m.quick = function () {
                            return f.g(4) / 4294967296
                        }, m["double"] = m, u(h(f.S), i), (e.pass || n || function (t, e, n, i) {
                            return i && (i.S && a(i, f), t.state = function () {
                                return a(f, {})
                            }), n ? (s[v] = t, e) : t
                        })(m, d, "global" in e ? e.global : this == s, e.state)
                    }

                    function r(t) {
                        var e, n = t.length,
                            i = this,
                            s = 0,
                            o = i.i = i.j = 0,
                            r = i.S = [];
                        for (n || (t = [n++]); p > s;) r[s] = s++;
                        for (s = 0; p > s; s++) r[s] = r[o = w & o + t[s % n] + (e = r[s])], r[o] = e;
                        (i.g = function (t) {
                            for (var e, n = 0, s = i.i, o = i.j, r = i.S; t--;) e = r[s = w & s + 1], n = n * p + r[w & (r[s] = r[o = w & o + e]) + (r[o] = e)];
                            return i.i = s, i.j = o, n
                        })(p)
                    }

                    function a(t, e) {
                        return e.i = t.i, e.j = t.j, e.S = t.S.slice(), e
                    }

                    function l(t, e) {
                        var n, i = [],
                            s = typeof t;
                        if (e && "object" == s)
                            for (n in t) try {
                                i.push(l(t[n], e - 1))
                            } catch (o) {}
                        return i.length ? i : "string" == s ? t : t + "\x00"
                    }

                    function u(t, e) {
                        for (var n, i = t + "", s = 0; s < i.length;) e[w & s] = w & (n ^= 19 * e[w & s]) + i.charCodeAt(s++);
                        return h(e)
                    }

                    function c() {
                        try {
                            if (d) return h(d.randomBytes(p));
                            var t = new Uint8Array(p);
                            return (f.crypto || f.msCrypto).getRandomValues(t), h(t)
                        } catch (e) {
                            var n = f.navigator,
                                s = n && n.plugins;
                            return [+new Date, f, s, f.screen, h(i)]
                        }
                    }

                    function h(t) {
                        return String.fromCharCode.apply(0, t)
                    }
                    var d, f = this,
                        p = 256,
                        g = 6,
                        m = 52,
                        v = "random",
                        y = s.pow(p, g),
                        b = s.pow(2, m),
                        _ = 2 * b,
                        w = p - 1;
                    if (s["seed" + v] = o, u(s.random(), i), "object" == typeof n && n.exports) {
                        n.exports = o;
                        try {
                            d = e("crypto")
                        } catch (x) {}
                    } else "function" == typeof t && t.amd && t(function () {
                        return o
                    })
                }([], Math)
            }, {
                crypto: !1
            }]
        }, {}, ["./lib/trianglify.js"])("./lib/trianglify.js")
    }), window.REMODAL_GLOBALS = {
        NAMESPACE: "modal",
        DEFAULTS: {
            hashTracking: !1
        }
    },
    function (t) {
        DripPro = function () {
            function e() {}
            return e.prototype.settings = {
                debug: !1,
                cookie_prefix: "drippro_",
                offer_fn_name: "drip_plinko",
                scoring_obj: "scoring",
                template_path: "/",
                template_ext: ".html",
                modal_delay: 1e3,
                modal_sensitivity: 20,
                can_display: function () {
                    return !0
                },
                post_drip_response: function () {},
                pre_init: function () {}
            }, e.prototype.storage = {
                set: function (e, n, i) {
                    return i = i || 0, t.jStorage.set(e, n, {
                        TTL: i
                    })
                },
                get: function (e) {
                    return t.jStorage.get(e)
                },
                "delete": function (e) {
                    return t.jStorage.deleteKey(e)
                },
                index: function () {
                    return t.jStorage.index()
                },
                flush: function () {
                    return t.jStorage.flush()
                }
            }, e.prototype.renderers = {
                replacer: function (e, n) {
                    this.debug("Rendering HTML in placeholder: " + e), t("[data-placeholder=" + e + "]").html(n).addClass(e)
                },
                facebook: function (e, n) {
                    this.fb_tracked || (arr = n.split(","), t.each(arr, function (e, n) {
                        n = t.trim(n), fbq("trackCustom", "Segment", {
                            list: n
                        })
                    }), this.fb_tracked = !0)
                },
                modal: function (e, n, i) {
                    function s(t) {
                        _delayTimer && (clearTimeout(_delayTimer), _delayTimer = null)
                    }

                    function o(s) {
                        var o = this,
                            r = this.settings.cookie_prefix + "_ig_" + e;
                        if (!(s.clientY > sensitivity)) {
                            if (i.force);
                            else if (this.storage.get(r)) return;
                            _delayTimer = setTimeout(function () {
                                this.modal && "opened" == this.modal.getState() || (this.debug("Displaying modal"), this.modal = t('<div class="modal">').data("placeholder", e).html(n).appendTo("body").remodal(), this.modal.open(), window.modal_fn && window.modal_fn(), t(document).on("closing", ".modal", function () {
                                    o.storage.set(r, "1")
                                }))
                            }.bind(this), delay)
                        }
                    }
                    this.modal_setup || (window._delayTimer = null, sensitivity = this.settings.modal_sensitivity, delay = i.delay ? i.delay : this.settings.modal_delay, t("body").on("mouseenter", s), t("body").on("mouseleave", o.bind(this)), this.modal_setup = !0)
                }
            }, e.prototype.init = function (e, n) {
                var i = this;
                return this.settings = t.extend(this.settings, e), this.renderers = t.extend(this.renderers, n), this.settings.pre_init(), t.get("/current_user").then(function (t) {
                    var e = _.merge({}, t, {
                        success: i.drip_response_received.bind(i)
                    });
                    t.can_contact === !0 && (_dcq.push(["identify", e]), i.extract_utms(), i.modify_forms());
                    try {
                        mixpanel.people.set(e)
                    } catch (n) {}
                    window.egh_user = t
                }), this
            }, e.prototype.extract_utms = function () {
                if (p = t.deparam.querystring(), !t.isEmptyObject(p)) {
                    this.debug("UTM params:", p), res = {};
                    for (var e in p) 0 === e.indexOf("utm") && (res[e] = p[e]);
                    this.debug("Setting utm: " + t.param(res)), this.storage.set(this.settings.cookie_prefix + "_utm", t.param(res))
                }
            }, e.prototype.modify_forms = function () {
                var e = this;
                t("[data-drip-embedded-form]").each(function () {
                    var n = e.storage.get(e.settings.cookie_prefix + "_utm");
                    if (t(this).append(t('<input type="hidden">').attr("name", "fields[optin_url]").val(window.location.origin + window.location.pathname)), n) {
                        n = t.deparam(n);
                        for (var i in n) e.debug("Adding hidden UTM field to form: " + i), t(this).append(t('<input type="hidden">').attr("name", "fields[" + i + "]").val(n[i]))
                    }
                })
            }, e.prototype.track = function () {
                var e = {},
                    n = window.egh_page;
                n && (e.offer = this.offer.offer, this.is_anon ? e.anon = !0 : (mixpanel.identify(this.drip_contact.email), e.anon = !1, e = _.merge({}, e, window.egh_user, this.drip_contact.custom_fields), t.each(this.drip_contact.tags, function (t, n) {
                    e[n] = !0
                })), mixpanel.register(e), this.debug("tracking " + n.type, n.data), window.track("viewed page", _.merge({}, {
                    page: n.type
                }, n.data)), "viewed page" !== n.type && window.track("viewed " + n.type, _.merge({}, {
                    page: n.type
                }, n.data)), t('[rel="modal:open"]').click(function (e) {
                    var n = t(this).attr("href");
                    mixpanel.track("Modal - " + t(this).data("modal-name"), jQuery.extend(window.mp[1], {
                        popup: n
                    }))
                }), t(document).on("submit.drip", "[data-drip-embedded-form]", function (e) {
                    if (!e.isDefaultPrevented()) {
                        e.preventDefault();
                        var n = t(this).find("[type=email]").val();
                        n && (fields = {
                            form_id: t(this).data("drip-embedded-form")
                        }, t.each(t(this).serializeArray(), function (t, e) {
                            if (0 === e.name.indexOf("fields")) {
                                var n = e.name.replace("fields[", "").replace("]", "");
                                fields[n] = e.value
                            }
                        }), mixpanel.alias(n), window.track("Lead Form Submitted", fields), jQuery(document).unbind("submit.drip"), jQuery(this).trigger("submit"))
                    }
                }))
            }, e.prototype.score_content = function (t) {
                if (!this.already_scored) {
                    var e = window.scoring.tech.toLowerCase().replace(/ /g, "_"),
                        n = "tech_" + e,
                        i = n + "_count",
                        s = [];
                    s = t ? t.custom_fields[e].split(",") : this.storage.get(n), s = s ? JSON.parse(s) : [], s.push({
                        id: window.scoring.id,
                        weight: window.scoring.weight
                    }), this.storage.set(n, JSON.stringify(s)), this.storage.set(i, window.scoring.lessons_in_tech);
                    var o = {},
                        r = this;
                    this.storage.index().forEach(function (t, e) {
                        if (0 === t.indexOf("tech_") && -1 === t.indexOf("_count")) {
                            var n = JSON.parse(r.storage.get(t) || []),
                                i = _.uniq(_.map(n, function (t) {
                                    return t.id
                                })),
                                s = i.length,
                                a = r.storage.get(t + "_count");
                            o[t] = {
                                unique_lessons_viewed: s,
                                total_lessons_viewed: n.length,
                                lessons_total: a,
                                view_percent: s / a,
                                view_weight: 20
                            }
                        }
                    }), this.already_scored = !0
                }
            }, e.prototype.determine_needs_data = function () {
                var t = window.survey_plinko(new this.fn_helper(this));
                if (!t) return !1;
                if (this.storage.get("survey_timer")) return !1;
                var e = Math.floor(3 * Math.random()) + 1;
                return 1 != e ? !1 : !0
            }, e.prototype.push_survey = function () {
                var e = this,
                    n = window.survey_plinko(new this.fn_helper(this));
                if (t(".survey-question .question-place").text(n.question), n) {
                    t.each(n.answers, function (e, n) {
                        var i = t("<li>").data("value", e).text(n);
                        t(".survey-answers").append(i)
                    });
                    var i = t("#survey-container"),
                        s = !1,
                        o = !1;
                    t("#survey-container .survey-why span").tooltip(), t("#survey-container").css("bottom", -20 * t("#survey-container").outerHeight()), t("#survey-container li").click(function (i) {
                        var o = t(this).data("value"),
                            r = {};
                        r[n.attr] = o, _dcq.push(["identify", _.merge({
                            success: function () {}
                        }, window.egh_user, r)]), _dcq.push(["track", "Completed a survey question", {
                            question: n.question,
                            answer: t(this).text(),
                            question_raw: n.attr,
                            answer_raw: o
                        }]), window.track("survey answered", {
                            question: n.question,
                            answer: t(this).text(),
                            question_raw: n.attr,
                            answer_raw: o
                        }), e.storage.set("survey_timer", 1, window.egh_user.is_pro ? 12048e5 : 6048e5), t("#survey-container .survey-why, #survey-container .survey-answers").hide(), t("#survey-container .question-place").text("Thanks!"), setTimeout(function () {
                            t("#survey-container").remove()
                        }, 2e3), s = !0
                    }), t("#survey-container .close-survey").click(function (i) {
                        i.preventDefault();
                        var o = {};
                        t("#survey-container").remove(), s || (o[n.attr] = "none", _dcq.push(["identify", _.merge({
                            success: function () {}
                        }, window.egh_user, o)]), window.track("survey dismissed", {
                            question: n.question,
                            answer: "none",
                            question_raw: n.attr,
                            answer_raw: "none"
                        }), e.storage.set("survey_timer", 1, window.egh_user.is_pro ? 112048e5 : 6048e5))
                    });
                    var r = !1;
                    t(window).scroll(function () {
                        var s = t(window).scrollTop(),
                            a = t(document).height(),
                            l = t(window).height();
                        scrolled = s / (a - l) * 100, scrolled > 40 && (r || (r = !0), i.addClass("expanded"), o || (window.track("survey shown", {
                            question: n.attr
                        }), e.storage.set("survey_timer", 1, 259200), o = !0))
                    }.bind(this))
                }
            }, e.prototype.drip_response_received = function (t) {
                this.debug("Drip response: ", t), this.drip_contact = _.merge({}, window.egh_user, t), this.is_anon = this.drip_contact.anonymous, this.is_pro = window.egh_user.is_pro, this.is_anon && this.debug("Visitor is anonymous"), this.is_anon || this.storage.set(this.settings.cookie_prefix + "_drip_id", t.email), this.offer = this.determine_offer(), this.debug("Offering: " + this.offer.offer), window.drip_offer = this.offer.offer, this.apply_offer_ctas(), window.scoring && this.score_content(t), this.track(), this.settings.post_drip_response(this.drip_contact, this)
            }, e.prototype.determine_offer = function () {
                return window[this.settings.offer_fn_name](new this.fn_helper(this))
            }, e.prototype.apply_offer_ctas = function () {
                var e = t.extend({}, this.offer);
                offer_name = e.offer, delete e.offer;
                for (var n in e) {
                    var i = e[n],
                        s = {};
                    if (t.isArray(i) && 3 == i.length && (s = i[2]), this.settings.can_display(n, s)) {
                        var o = (this.renderers[n] || this.renderers.replacer).bind(this),
                            r = e[n];
                        e[n] instanceof Array && (o = this.renderers[e[n][1]].bind(this), r = e[n][0]);
                        var a = t.Deferred();
                        a.intent = n, a.options = s, a.fn = o, "facebook" == n || s.inline ? a.resolve({
                            intent: n,
                            response: r,
                            options: s,
                            fn: o
                        }) : this.load_template(r, a), t.when(a).done(function (t) {
                            t.fn(t.intent, t.response, t.options)
                        })
                    }
                }
            }, e.prototype.fn_helper = function (t) {
                this.is_anon = t.is_anon, this.has_tag = function (e) {
                    return -1 !== t.drip_contact.tags.indexOf(e)
                }, this.attr = function (e) {
                    return t.drip_contact.custom_fields || (t.drip_contact.custom_fields = {}), t.drip_contact.custom_fields[e]
                }, this.cn = t
            }, e.prototype.load_template = function (e, n) {
                t.ajax({
                    type: "GET",
                    dataType: "html",
                    url: this.settings.template_path + e + this.settings.template_ext,
                    success: function (t) {
                        n.resolve({
                            intent: n.intent,
                            response: t,
                            options: n.options,
                            fn: n.fn
                        })
                    }
                })
            }, e.prototype.debug = function (t, e) {
                this.settings.debug && (e ? console.log(t, e) : console.log(t))
            }, e
        }(), window._drip_pro = new DripPro, window.drip_plinko = function (e) {
            var n = (t(document).width() < 992, e.cn.determine_needs_data()),
                i = {
                    offer: "none"
                };
            return e.cn.debug("Needs survey data: " + n + e.cn.storage.get("survey_timer")), e.is_anon || n && e.cn.push_survey(), i
        }, window.survey_plinko = function (t) {
            return !t || t.is_anon || t.is_pro || t.is_instructor ? !1 : t.attr("goals") ? t.attr("job_title") ? t.attr("framework_pref") || "developer" != t.attr("job_title") ? "founder" != t.attr("job_title") || t.attr("company_stage") ? t.attr("open_source_contrib") ? t.attr("open_source_motivation") || "occasionally" != t.attr("open_source_contrib") && "retired" != t.attr("open_source_contrib") && "want" != t.attr("open_source_contrib") ? t.attr("how_learn") ? !1 : {
                attr: "how_learn",
                question: "How do you best learn new skills?",
                answers: {
                    api: "Cracking into the API docs",
                    source: "Reading the source code",
                    books: "Books",
                    schools: "Online code schools / membership sites",
                    classroom: "Classroom courses",
                    mentorship: "1-on-1 mentorship"
                }
            } : {
                attr: "open_source_motivation",
                question: "What would help you get started / get back into contributing to open source software?",
                answers: {
                    skills: "Acquiring more skills",
                    ideas: "Having an idea to work on",
                    documentation: "Ability to write documentation",
                    confidence: "More personal confidence",
                    nothing: "Nothing"
                }
            } : {
                attr: "open_source_contrib",
                question: "Do you contribute to open source?",
                answers: {
                    regularly: "Regularly",
                    occasionally: "Occasionally",
                    retired: "I have in the past",
                    want: "I want to start",
                    no_desire: "No, I won't do that"
                }
            } : {
                attr: "company_stage",
                question: "What stage is your company?",
                answers: {
                    idea: "Still just an idea",
                    early: "Building out our prototype",
                    angel: "Received some early angel funding",
                    series: "Series A/B",
                    bootstrapped: "Bootstrapped and profitable",
                    scaling: "Stable and scaling"
                }
            } : {
                attr: "framework_pref",
                question: "What is your favorite JavaScript framework?",
                answers: {
                    angular: "Angular",
                    react: "React",
                    vue: "Vue",
                    aurelia: "Aurelia",
                    rxjs: "RxJS",
                    vanilla: "JS with no framework",
                    other: "Not Listed"
                }
            } : {
                attr: "job_title",
                question: "How would you describe your work?",
                answers: {
                    developer: "Developer",
                    designer: "Designer",
                    pm: "Manager",
                    founder: "Founder",
                    student: "Student",
                    other: "Other"
                }
            } : {
                attr: "goals",
                question: "Where do you want to be a year from now?",
                answers: {
                    first_job: "Land my first gig",
                    promotion: "Get a promotion at my current job",
                    new_job: "Qualifying for my dream job",
                    freelancing: "Freelancing / Consulting",
                    solo: "Running my own business",
                    other: "I've got other plans."
                }
            }
        }, t(function () {
            window._drip_pro.init({
                modal_delay: 3e3,
                can_display: function (t, e) {
                    return !0
                },
                post_drip_response: function (t, e) {}
            })
        })
    }(jQuery), ! function (t) {
        "function" == typeof define && define.amd ? define(["jquery"], function (e) {
            t(e, window, document)
        }) : "object" == typeof module && module.exports ? module.exports = t(require("jquery"), window, document) : t(jQuery, window, document)
    }(function (t, e, n, i) {
        "use strict";

        function s(e, n) {
            this.a = t(e), n && t.extend(n, n, {
                a: n.allowDropdown,
                b: n.autoHideDialCode,
                c: n.autoPlaceholder,
                c2: n.customPlaceholder,
                d: n.dropdownContainer,
                e: n.excludeCountries,
                f: n.formatOnInit,
                g: n.geoIpLookup,
                h: n.initialCountry,
                i: n.nationalMode,
                j: n.numberType,
                k: n.onlyCountries,
                l: n.preferredCountries,
                m: n.separateDialCode,
                n: n.utilsScript
            }), this.b = t.extend({}, a, n), this.ns = "." + o + r++, this.d = Boolean(e.setSelectionRange), this.e = Boolean(t(e).attr("placeholder"))
        }
        var o = "intlTelInput",
            r = 1,
            a = {
                a: !0,
                b: !0,
                c: !0,
                c2: null,
                d: "",
                e: [],
                f: !0,
                g: null,
                h: "",
                i: !0,
                j: "MOBILE",
                k: [],
                l: ["us", "gb"],
                m: !1,
                n: ""
            },
            l = {
                b: 38,
                c: 40,
                d: 13,
                e: 27,
                f: 43,
                A: 65,
                Z: 90,
                j: 32,
                k: 9
            };
        t(e).load(function () {
            t.fn[o].windowLoaded = !0
        }), s.prototype = {
            _a: function () {
                return this.b.i && (this.b.b = !1), this.b.m && (this.b.b = this.b.i = !1, this.b.a = !0), this.g = /Android.+Mobile|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent), this.g && (t("body").addClass("iti-mobile"), this.b.d || (this.b.d = "body")), this.h = new t.Deferred, this.i = new t.Deferred, this._b(), this._f(), this._h(), this._i(), this._i2(), [this.h, this.i]
            },
            _b: function () {
                this._d(), this._d2(), this._e()
            },
            _c: function (t, e, n) {
                e in this.q || (this.q[e] = []);
                var i = n || 0;
                this.q[e][i] = t
            },
            _c2: function (e, n) {
                var i;
                for (i = 0; i < e.length; i++) e[i] = e[i].toLowerCase();
                for (this.p = [], i = 0; i < u.length; i++) n(t.inArray(u[i].iso2, e)) && this.p.push(u[i])
            },
            _d: function () {
                this.b.k.length ? this._c2(this.b.k, function (t) {
                    return -1 != t
                }) : this.b.e.length ? this._c2(this.b.e, function (t) {
                    return -1 == t
                }) : this.p = u
            },
            _d2: function () {
                this.q = {};
                for (var t = 0; t < this.p.length; t++) {
                    var e = this.p[t];
                    if (this._c(e.iso2, e.dialCode, e.priority), e.areaCodes)
                        for (var n = 0; n < e.areaCodes.length; n++) this._c(e.iso2, e.dialCode + e.areaCodes[n])
                }
            },
            _e: function () {
                this.r = [];
                for (var t = 0; t < this.b.l.length; t++) {
                    var e = this.b.l[t].toLowerCase(),
                        n = this._y(e, !1, !0);
                    n && this.r.push(n)
                }
            },
            _f: function () {
                this.a.attr("autocomplete", "off");
                var e = "intl-tel-input";
                this.b.a && (e += " allow-dropdown"), this.b.m && (e += " separate-dial-code"), this.a.wrap(t("<div>", {
                    "class": e
                })), this.k = t("<div>", {
                    "class": "flag-container"
                }).insertBefore(this.a);
                var n = t("<div>", {
                    "class": "selected-flag"
                });
                n.appendTo(this.k), this.l = t("<div>", {
                    "class": "iti-flag"
                }).appendTo(n), this.b.m && (this.t = t("<div>", {
                    "class": "selected-dial-code"
                }).appendTo(n)), this.b.a ? (n.attr("tabindex", "0"), t("<div>", {
                    "class": "iti-arrow"
                }).appendTo(n), this.m = t("<ul>", {
                    "class": "country-list hide"
                }), this.r.length && (this._g(this.r, "preferred"), t("<li>", {
                    "class": "divider"
                }).appendTo(this.m)), this._g(this.p, ""), this.o = this.m.children(".country"), this.b.d ? this.dropdown = t("<div>", {
                    "class": "intl-tel-input iti-container"
                }).append(this.m) : this.m.appendTo(this.k)) : this.o = t()
            },
            _g: function (t, e) {
                for (var n = "", i = 0; i < t.length; i++) {
                    var s = t[i];
                    n += "<li class='country " + e + "' data-dial-code='" + s.dialCode + "' data-country-code='" + s.iso2 + "'>", n += "<div class='flag-box'><div class='iti-flag " + s.iso2 + "'></div></div>", n += "<span class='country-name'>" + s.name + "</span>", n += "<span class='dial-code'>+" + s.dialCode + "</span>", n += "</li>"
                }
                this.m.append(n)
            },
            _h: function () {
                var t = this.a.val();
                this._af(t) ? this._v(t, !0) : "auto" !== this.b.h && (this.b.h ? this._z(this.b.h, !0) : (this.j = this.r.length ? this.r[0].iso2 : this.p[0].iso2, t || this._z(this.j, !0)), t || this.b.i || this.b.b || this.b.m || this.a.val("+" + this.s.dialCode)), t && this._u(t, this.b.f)
            },
            _i: function () {
                this._j(), this.b.b && this._l(), this.b.a && this._i1()
            },
            _i1: function () {
                var t = this,
                    e = this.a.closest("label");
                e.length && e.on("click" + this.ns, function (e) {
                    t.m.hasClass("hide") ? t.a.focus() : e.preventDefault()
                });
                var n = this.l.parent();
                n.on("click" + this.ns, function (e) {
                    !t.m.hasClass("hide") || t.a.prop("disabled") || t.a.prop("readonly") || t._n()
                }), this.k.on("keydown" + t.ns, function (e) {
                    var n = t.m.hasClass("hide");
                    !n || e.which != l.b && e.which != l.c && e.which != l.j && e.which != l.d || (e.preventDefault(), e.stopPropagation(), t._n()), e.which == l.k && t._ac()
                })
            },
            _i2: function () {
                var n = this;
                this.b.n ? t.fn[o].windowLoaded ? t.fn[o].loadUtils(this.b.n, this.i) : t(e).load(function () {
                    t.fn[o].loadUtils(n.b.n, n.i)
                }) : this.i.resolve(), "auto" === this.b.h ? this._i3() : this.h.resolve()
            },
            _i3: function () {
                var n = e.Cookies ? Cookies.get("itiAutoCountry") : "";
                n && (t.fn[o].autoCountry = n), t.fn[o].autoCountry ? this.handleAutoCountry() : t.fn[o].startedLoadingAutoCountry || (t.fn[o].startedLoadingAutoCountry = !0, "function" == typeof this.b.g && this.b.g(function (n) {
                    t.fn[o].autoCountry = n.toLowerCase(), e.Cookies && Cookies.set("itiAutoCountry", t.fn[o].autoCountry, {
                        path: "/"
                    }), setTimeout(function () {
                        t(".intl-tel-input input").intlTelInput("handleAutoCountry")
                    })
                }))
            },
            _j: function () {
                var t = this;
                this.a.on("keyup" + this.ns, function () {
                    t._v(t.a.val())
                }), this.a.on("cut" + this.ns + " paste" + this.ns + " keyup" + this.ns, function () {
                    setTimeout(function () {
                        t._v(t.a.val())
                    })
                })
            },
            _j2: function (t) {
                var e = this.a.attr("maxlength");
                return e && t.length > e ? t.substr(0, e) : t
            },
            _l: function () {
                var e = this;
                this.a.on("mousedown" + this.ns, function (t) {
                    e.a.is(":focus") || e.a.val() || (t.preventDefault(), e.a.focus())
                }), this.a.on("focus" + this.ns, function (t) {
                    e.a.val() || e.a.prop("readonly") || !e.s.dialCode || (e.a.val("+" + e.s.dialCode), e.a.one("keypress.plus" + e.ns, function (t) {
                        t.which == l.f && e.a.val("")
                    }), setTimeout(function () {
                        var t = e.a[0];
                        if (e.d) {
                            var n = e.a.val().length;
                            t.setSelectionRange(n, n)
                        }
                    }))
                });
                var n = this.a.prop("form");
                n && t(n).on("submit" + this.ns, function () {
                    e._removeEmptyDialCode()
                }), this.a.on("blur" + this.ns, function () {
                    e._removeEmptyDialCode()
                })
            },
            _removeEmptyDialCode: function () {
                var t = this.a.val(),
                    e = "+" == t.charAt(0);
                if (e) {
                    var n = this._m(t);
                    n && this.s.dialCode != n || this.a.val("")
                }
                this.a.off("keypress.plus" + this.ns)
            },
            _m: function (t) {
                return t.replace(/\D/g, "")
            },
            _n: function () {
                this._o();
                var t = this.m.children(".active");
                t.length && (this._x(t), this._ad(t)), this._p(), this.l.children(".iti-arrow").addClass("up")
            },
            _o: function () {
                var n = this;
                if (this.b.d && this.dropdown.appendTo(this.b.d), this.n = this.m.removeClass("hide").outerHeight(), !this.g) {
                    var i = this.a.offset(),
                        s = i.top,
                        o = t(e).scrollTop(),
                        r = s + this.a.outerHeight() + this.n < o + t(e).height(),
                        a = s - this.n > o;
                    if (this.m.toggleClass("dropup", !r && a), this.b.d) {
                        var l = !r && a ? 0 : this.a.innerHeight();
                        this.dropdown.css({
                            top: s + l,
                            left: i.left
                        }), t(e).on("scroll" + this.ns, function () {
                            n._ac()
                        })
                    }
                }
            },
            _p: function () {
                var e = this;
                this.m.on("mouseover" + this.ns, ".country", function (n) {
                    e._x(t(this))
                }), this.m.on("click" + this.ns, ".country", function (n) {
                    e._ab(t(this))
                });
                var i = !0;
                t("html").on("click" + this.ns, function (t) {
                    i || e._ac(), i = !1
                });
                var s = "",
                    o = null;
                t(n).on("keydown" + this.ns, function (t) {
                    t.preventDefault(), t.which == l.b || t.which == l.c ? e._q(t.which) : t.which == l.d ? e._r() : t.which == l.e ? e._ac() : (t.which >= l.A && t.which <= l.Z || t.which == l.j) && (o && clearTimeout(o), s += String.fromCharCode(t.which), e._s(s), o = setTimeout(function () {
                        s = ""
                    }, 1e3))
                })
            },
            _q: function (t) {
                var e = this.m.children(".highlight").first(),
                    n = t == l.b ? e.prev() : e.next();
                n.length && (n.hasClass("divider") && (n = t == l.b ? n.prev() : n.next()), this._x(n), this._ad(n))
            },
            _r: function () {
                var t = this.m.children(".highlight").first();
                t.length && this._ab(t)
            },
            _s: function (t) {
                for (var e = 0; e < this.p.length; e++)
                    if (this._t(this.p[e].name, t)) {
                        var n = this.m.children("[data-country-code=" + this.p[e].iso2 + "]").not(".preferred");
                        this._x(n), this._ad(n, !0);
                        break
                    }
            },
            _t: function (t, e) {
                return t.substr(0, e.length).toUpperCase() == e
            },
            _u: function (n, i, s) {
                i && e.intlTelInputUtils && this.s && (t.isNumeric(s) || (s = this.b.m || !this.b.i && "+" == n.charAt(0) ? intlTelInputUtils.numberFormat.INTERNATIONAL : intlTelInputUtils.numberFormat.NATIONAL), n = intlTelInputUtils.formatNumber(n, this.s.iso2, s)), n = this._ah(n), this.a.val(n)
            },
            _v: function (e, n) {
                e && this.b.i && this.s && "1" == this.s.dialCode && "+" != e.charAt(0) && ("1" != e.charAt(0) && (e = "1" + e), e = "+" + e);
                var i = this._af(e),
                    s = null;
                if (i) {
                    var o = this.q[this._m(i)],
                        r = this.s && -1 != t.inArray(this.s.iso2, o);
                    if (!r || this._w(e, i))
                        for (var a = 0; a < o.length; a++)
                            if (o[a]) {
                                s = o[a];
                                break
                            }
                } else "+" == e.charAt(0) && this._m(e).length ? s = "" : e && "+" != e || (s = this.j);
                null !== s && this._z(s, n)
            },
            _w: function (t, e) {
                return "+1" == e && this._m(t).length >= 4
            },
            _x: function (t) {
                this.o.removeClass("highlight"), t.addClass("highlight")
            },
            _y: function (t, e, n) {
                for (var i = e ? u : this.p, s = 0; s < i.length; s++)
                    if (i[s].iso2 == t) return i[s];
                if (n) return null;
                throw new Error("No country data for '" + t + "'")
            },
            _z: function (t, e) {
                var n = this.s && this.s.iso2 ? this.s : {};
                this.s = t ? this._y(t, !1, !1) : {}, this.s.iso2 && (this.j = this.s.iso2), this.l.attr("class", "iti-flag " + t);
                var i = t ? this.s.name + ": +" + this.s.dialCode : "Unknown";
                if (this.l.parent().attr("title", i), this.b.m) {
                    var s = this.s.dialCode ? "+" + this.s.dialCode : "",
                        o = this.a.parent();
                    n.dialCode && o.removeClass("iti-sdc-" + (n.dialCode.length + 1)), s && o.addClass("iti-sdc-" + s.length), this.t.text(s)
                }
                this._aa(), this.o.removeClass("active"), t && this.o.find(".iti-flag." + t).first().closest(".country").addClass("active"), e || n.iso2 === t || this.a.trigger("countrychange", this.s)
            },
            _aa: function () {
                if (e.intlTelInputUtils && !this.e && this.b.c && this.s) {
                    var t = intlTelInputUtils.numberType[this.b.j],
                        n = this.s.iso2 ? intlTelInputUtils.getExampleNumber(this.s.iso2, this.b.i, t) : "";
                    n = this._ah(n), "function" == typeof this.b.c2 && (n = this.b.c2(n, this.s)), this.a.attr("placeholder", n)
                }
            },
            _ab: function (t) {
                if (this._z(t.attr("data-country-code")), this._ac(), this._ae(t.attr("data-dial-code"), !0), this.a.focus(), this.d) {
                    var e = this.a.val().length;
                    this.a[0].setSelectionRange(e, e)
                }
            },
            _ac: function () {
                this.m.addClass("hide"), this.l.children(".iti-arrow").removeClass("up"), t(n).off(this.ns), t("html").off(this.ns), this.m.off(this.ns), this.b.d && (this.g || t(e).off("scroll" + this.ns), this.dropdown.detach())
            },
            _ad: function (t, e) {
                var n = this.m,
                    i = n.height(),
                    s = n.offset().top,
                    o = s + i,
                    r = t.outerHeight(),
                    a = t.offset().top,
                    l = a + r,
                    u = a - s + n.scrollTop(),
                    c = i / 2 - r / 2;
                if (s > a) e && (u -= c), n.scrollTop(u);
                else if (l > o) {
                    e && (u += c);
                    var h = i - r;
                    n.scrollTop(u - h)
                }
            },
            _ae: function (t, e) {
                var n, i = this.a.val();
                if (t = "+" + t, "+" == i.charAt(0)) {
                    var s = this._af(i);
                    n = s ? i.replace(s, t) : t
                } else {
                    if (this.b.i || this.b.m) return;
                    if (i) n = t + i;
                    else {
                        if (!e && this.b.b) return;
                        n = t
                    }
                }
                this.a.val(n)
            },
            _af: function (e) {
                var n = "";
                if ("+" == e.charAt(0))
                    for (var i = "", s = 0; s < e.length; s++) {
                        var o = e.charAt(s);
                        if (t.isNumeric(o) && (i += o, this.q[i] && (n = e.substr(0, s + 1)), 4 == i.length)) break
                    }
                return n
            },
            _ag: function () {
                var t = this.b.m ? "+" + this.s.dialCode : "";
                return t + this.a.val()
            },
            _ah: function (t) {
                if (this.b.m) {
                    var e = this._af(t);
                    if (e) {
                        null !== this.s.areaCodes && (e = "+" + this.s.dialCode);
                        var n = " " === t[e.length] || "-" === t[e.length] ? e.length + 1 : e.length;
                        t = t.substr(n)
                    }
                }
                return this._j2(t)
            },
            handleAutoCountry: function () {
                "auto" === this.b.h && (this.j = t.fn[o].autoCountry, this.a.val() || this.setCountry(this.j), this.h.resolve())
            },
            destroy: function () {
                if (this.allowDropdown && (this._ac(), this.l.parent().off(this.ns), this.a.closest("label").off(this.ns)), this.b.b) {
                    var e = this.a.prop("form");
                    e && t(e).off(this.ns)
                }
                this.a.off(this.ns);
                var n = this.a.parent();
                n.before(this.a).remove()
            },
            getExtension: function () {
                return e.intlTelInputUtils ? intlTelInputUtils.getExtension(this._ag(), this.s.iso2) : ""
            },
            getNumber: function (t) {
                return e.intlTelInputUtils ? intlTelInputUtils.formatNumber(this._ag(), this.s.iso2, t) : ""
            },
            getNumberType: function () {
                return e.intlTelInputUtils ? intlTelInputUtils.getNumberType(this._ag(), this.s.iso2) : -99
            },
            getSelectedCountryData: function () {
                return this.s || {}
            },
            getValidationError: function () {
                return e.intlTelInputUtils ? intlTelInputUtils.getValidationError(this._ag(), this.s.iso2) : -99
            },
            isValidNumber: function () {
                var n = t.trim(this._ag()),
                    i = this.b.i ? this.s.iso2 : "";
                return e.intlTelInputUtils ? intlTelInputUtils.isValidNumber(n, i) : null
            },
            setCountry: function (t) {
                t = t.toLowerCase(), this.l.hasClass(t) || (this._z(t), this._ae(this.s.dialCode, !1))
            },
            setNumber: function (e, n) {
                this._v(e), this._u(e, t.isNumeric(n), n)
            },
            handleUtils: function () {
                e.intlTelInputUtils && (this.a.val() && this._u(this.a.val(), this.b.f), this._aa()), this.i.resolve()
            }
        }, t.fn[o] = function (e) {
            var n = arguments;
            if (e === i || "object" == typeof e) {
                var r = [];
                return this.each(function () {
                    if (!t.data(this, "plugin_" + o)) {
                        var n = new s(this, e),
                            i = n._a();
                        r.push(i[0]), r.push(i[1]), t.data(this, "plugin_" + o, n)
                    }
                }), t.when.apply(null, r)
            }
            if ("string" == typeof e && "_" !== e[0]) {
                var a;
                return this.each(function () {
                    var i = t.data(this, "plugin_" + o);
                    i instanceof s && "function" == typeof i[e] && (a = i[e].apply(i, Array.prototype.slice.call(n, 1))), "destroy" === e && t.data(this, "plugin_" + o, null)
                }), a !== i ? a : this
            }
        }, t.fn[o].getCountryData = function () {
            return u
        }, t.fn[o].loadUtils = function (e, n) {
            t.fn[o].loadedUtilsScript ? n && n.resolve() : (t.fn[o].loadedUtilsScript = !0, t.ajax({
                url: e,
                complete: function () {
                    t(".intl-tel-input input").intlTelInput("handleUtils")
                },
                dataType: "script",
                cache: !0
            }))
        }, t.fn[o].version = "8.5.2";
        for (var u = [["Afghanistan (\u202b\u0627\u0641\u063a\u0627\u0646\u0633\u062a\u0627\u0646\u202c\u200e)", "af", "93"], ["Albania (Shqip\xebri)", "al", "355"], ["Algeria (\u202b\u0627\u0644\u062c\u0632\u0627\u0626\u0631\u202c\u200e)", "dz", "213"], ["American Samoa", "as", "1684"], ["Andorra", "ad", "376"], ["Angola", "ao", "244"], ["Anguilla", "ai", "1264"], ["Antigua and Barbuda", "ag", "1268"], ["Argentina", "ar", "54"], ["Armenia (\u0540\u0561\u0575\u0561\u057d\u057f\u0561\u0576)", "am", "374"], ["Aruba", "aw", "297"], ["Australia", "au", "61", 0], ["Austria (\xd6sterreich)", "at", "43"], ["Azerbaijan (Az\u0259rbaycan)", "az", "994"], ["Bahamas", "bs", "1242"], ["Bahrain (\u202b\u0627\u0644\u0628\u062d\u0631\u064a\u0646\u202c\u200e)", "bh", "973"], ["Bangladesh (\u09ac\u09be\u0982\u09b2\u09be\u09a6\u09c7\u09b6)", "bd", "880"], ["Barbados", "bb", "1246"], ["Belarus (\u0411\u0435\u043b\u0430\u0440\u0443\u0441\u044c)", "by", "375"], ["Belgium (Belgi\xeb)", "be", "32"], ["Belize", "bz", "501"], ["Benin (B\xe9nin)", "bj", "229"], ["Bermuda", "bm", "1441"], ["Bhutan (\u0f60\u0f56\u0fb2\u0f74\u0f42)", "bt", "975"], ["Bolivia", "bo", "591"], ["Bosnia and Herzegovina (\u0411\u043e\u0441\u043d\u0430 \u0438 \u0425\u0435\u0440\u0446\u0435\u0433\u043e\u0432\u0438\u043d\u0430)", "ba", "387"], ["Botswana", "bw", "267"], ["Brazil (Brasil)", "br", "55"], ["British Indian Ocean Territory", "io", "246"], ["British Virgin Islands", "vg", "1284"], ["Brunei", "bn", "673"], ["Bulgaria (\u0411\u044a\u043b\u0433\u0430\u0440\u0438\u044f)", "bg", "359"], ["Burkina Faso", "bf", "226"], ["Burundi (Uburundi)", "bi", "257"], ["Cambodia (\u1780\u1798\u17d2\u1796\u17bb\u1787\u17b6)", "kh", "855"], ["Cameroon (Cameroun)", "cm", "237"], ["Canada", "ca", "1", 1, ["204", "226", "236", "249", "250", "289", "306", "343", "365", "387", "403", "416", "418", "431", "437", "438", "450", "506", "514", "519", "548", "579", "581", "587", "604", "613", "639", "647", "672", "705", "709", "742", "778", "780", "782", "807", "819", "825", "867", "873", "902", "905"]], ["Cape Verde (Kabu Verdi)", "cv", "238"], ["Caribbean Netherlands", "bq", "599", 1], ["Cayman Islands", "ky", "1345"], ["Central African Republic (R\xe9publique centrafricaine)", "cf", "236"], ["Chad (Tchad)", "td", "235"], ["Chile", "cl", "56"], ["China (\u4e2d\u56fd)", "cn", "86"], ["Christmas Island", "cx", "61", 2], ["Cocos (Keeling) Islands", "cc", "61", 1], ["Colombia", "co", "57"], ["Comoros (\u202b\u062c\u0632\u0631 \u0627\u0644\u0642\u0645\u0631\u202c\u200e)", "km", "269"], ["Congo (DRC) (Jamhuri ya Kidemokrasia ya Kongo)", "cd", "243"], ["Congo (Republic) (Congo-Brazzaville)", "cg", "242"], ["Cook Islands", "ck", "682"], ["Costa Rica", "cr", "506"], ["C\xf4te d\u2019Ivoire", "ci", "225"], ["Croatia (Hrvatska)", "hr", "385"], ["Cuba", "cu", "53"], ["Cura\xe7ao", "cw", "599", 0], ["Cyprus (\u039a\u03cd\u03c0\u03c1\u03bf\u03c2)", "cy", "357"], ["Czech Republic (\u010cesk\xe1 republika)", "cz", "420"], ["Denmark (Danmark)", "dk", "45"], ["Djibouti", "dj", "253"], ["Dominica", "dm", "1767"], ["Dominican Republic (Rep\xfablica Dominicana)", "do", "1", 2, ["809", "829", "849"]], ["Ecuador", "ec", "593"], ["Egypt (\u202b\u0645\u0635\u0631\u202c\u200e)", "eg", "20"], ["El Salvador", "sv", "503"], ["Equatorial Guinea (Guinea Ecuatorial)", "gq", "240"], ["Eritrea", "er", "291"], ["Estonia (Eesti)", "ee", "372"], ["Ethiopia", "et", "251"], ["Falkland Islands (Islas Malvinas)", "fk", "500"], ["Faroe Islands (F\xf8royar)", "fo", "298"], ["Fiji", "fj", "679"], ["Finland (Suomi)", "fi", "358", 0], ["France", "fr", "33"], ["French Guiana (Guyane fran\xe7aise)", "gf", "594"], ["French Polynesia (Polyn\xe9sie fran\xe7aise)", "pf", "689"], ["Gabon", "ga", "241"], ["Gambia", "gm", "220"], ["Georgia (\u10e1\u10d0\u10e5\u10d0\u10e0\u10d7\u10d5\u10d4\u10da\u10dd)", "ge", "995"], ["Germany (Deutschland)", "de", "49"], ["Ghana (Gaana)", "gh", "233"], ["Gibraltar", "gi", "350"], ["Greece (\u0395\u03bb\u03bb\u03ac\u03b4\u03b1)", "gr", "30"], ["Greenland (Kalaallit Nunaat)", "gl", "299"], ["Grenada", "gd", "1473"], ["Guadeloupe", "gp", "590", 0], ["Guam", "gu", "1671"], ["Guatemala", "gt", "502"], ["Guernsey", "gg", "44", 1], ["Guinea (Guin\xe9e)", "gn", "224"], ["Guinea-Bissau (Guin\xe9 Bissau)", "gw", "245"], ["Guyana", "gy", "592"], ["Haiti", "ht", "509"], ["Honduras", "hn", "504"], ["Hong Kong (\u9999\u6e2f)", "hk", "852"], ["Hungary (Magyarorsz\xe1g)", "hu", "36"], ["Iceland (\xcdsland)", "is", "354"], ["India (\u092d\u093e\u0930\u0924)", "in", "91"], ["Indonesia", "id", "62"], ["Iran (\u202b\u0627\u06cc\u0631\u0627\u0646\u202c\u200e)", "ir", "98"], ["Iraq (\u202b\u0627\u0644\u0639\u0631\u0627\u0642\u202c\u200e)", "iq", "964"], ["Ireland", "ie", "353"], ["Isle of Man", "im", "44", 2], ["Israel (\u202b\u05d9\u05e9\u05e8\u05d0\u05dc\u202c\u200e)", "il", "972"], ["Italy (Italia)", "it", "39", 0], ["Jamaica", "jm", "1876"], ["Japan (\u65e5\u672c)", "jp", "81"], ["Jersey", "je", "44", 3], ["Jordan (\u202b\u0627\u0644\u0623\u0631\u062f\u0646\u202c\u200e)", "jo", "962"], ["Kazakhstan (\u041a\u0430\u0437\u0430\u0445\u0441\u0442\u0430\u043d)", "kz", "7", 1], ["Kenya", "ke", "254"], ["Kiribati", "ki", "686"], ["Kuwait (\u202b\u0627\u0644\u0643\u0648\u064a\u062a\u202c\u200e)", "kw", "965"], ["Kyrgyzstan (\u041a\u044b\u0440\u0433\u044b\u0437\u0441\u0442\u0430\u043d)", "kg", "996"], ["Laos (\u0ea5\u0eb2\u0ea7)", "la", "856"], ["Latvia (Latvija)", "lv", "371"], ["Lebanon (\u202b\u0644\u0628\u0646\u0627\u0646\u202c\u200e)", "lb", "961"], ["Lesotho", "ls", "266"], ["Liberia", "lr", "231"], ["Libya (\u202b\u0644\u064a\u0628\u064a\u0627\u202c\u200e)", "ly", "218"], ["Liechtenstein", "li", "423"], ["Lithuania (Lietuva)", "lt", "370"], ["Luxembourg", "lu", "352"], ["Macau (\u6fb3\u9580)", "mo", "853"], ["Macedonia (FYROM) (\u041c\u0430\u043a\u0435\u0434\u043e\u043d\u0438\u0458\u0430)", "mk", "389"], ["Madagascar (Madagasikara)", "mg", "261"], ["Malawi", "mw", "265"], ["Malaysia", "my", "60"], ["Maldives", "mv", "960"], ["Mali", "ml", "223"], ["Malta", "mt", "356"], ["Marshall Islands", "mh", "692"], ["Martinique", "mq", "596"], ["Mauritania (\u202b\u0645\u0648\u0631\u064a\u062a\u0627\u0646\u064a\u0627\u202c\u200e)", "mr", "222"], ["Mauritius (Moris)", "mu", "230"], ["Mayotte", "yt", "262", 1], ["Mexico (M\xe9xico)", "mx", "52"], ["Micronesia", "fm", "691"], ["Moldova (Republica Moldova)", "md", "373"], ["Monaco", "mc", "377"], ["Mongolia (\u041c\u043e\u043d\u0433\u043e\u043b)", "mn", "976"], ["Montenegro (Crna Gora)", "me", "382"], ["Montserrat", "ms", "1664"], ["Morocco (\u202b\u0627\u0644\u0645\u063a\u0631\u0628\u202c\u200e)", "ma", "212", 0], ["Mozambique (Mo\xe7ambique)", "mz", "258"], ["Myanmar (Burma) (\u1019\u103c\u1014\u103a\u1019\u102c)", "mm", "95"], ["Namibia (Namibi\xeb)", "na", "264"], ["Nauru", "nr", "674"], ["Nepal (\u0928\u0947\u092a\u093e\u0932)", "np", "977"], ["Netherlands (Nederland)", "nl", "31"], ["New Caledonia (Nouvelle-Cal\xe9donie)", "nc", "687"], ["New Zealand", "nz", "64"], ["Nicaragua", "ni", "505"], ["Niger (Nijar)", "ne", "227"], ["Nigeria", "ng", "234"], ["Niue", "nu", "683"], ["Norfolk Island", "nf", "672"], ["North Korea (\uc870\uc120 \ubbfc\uc8fc\uc8fc\uc758 \uc778\ubbfc \uacf5\ud654\uad6d)", "kp", "850"], ["Northern Mariana Islands", "mp", "1670"], ["Norway (Norge)", "no", "47", 0], ["Oman (\u202b\u0639\u064f\u0645\u0627\u0646\u202c\u200e)", "om", "968"], ["Pakistan (\u202b\u067e\u0627\u06a9\u0633\u062a\u0627\u0646\u202c\u200e)", "pk", "92"], ["Palau", "pw", "680"], ["Palestine (\u202b\u0641\u0644\u0633\u0637\u064a\u0646\u202c\u200e)", "ps", "970"], ["Panama (Panam\xe1)", "pa", "507"], ["Papua New Guinea", "pg", "675"], ["Paraguay", "py", "595"], ["Peru (Per\xfa)", "pe", "51"], ["Philippines", "ph", "63"], ["Poland (Polska)", "pl", "48"], ["Portugal", "pt", "351"], ["Puerto Rico", "pr", "1", 3, ["787", "939"]], ["Qatar (\u202b\u0642\u0637\u0631\u202c\u200e)", "qa", "974"], ["R\xe9union (La R\xe9union)", "re", "262", 0], ["Romania (Rom\xe2nia)", "ro", "40"], ["Russia (\u0420\u043e\u0441\u0441\u0438\u044f)", "ru", "7", 0], ["Rwanda", "rw", "250"], ["Saint Barth\xe9lemy (Saint-Barth\xe9lemy)", "bl", "590", 1], ["Saint Helena", "sh", "290"], ["Saint Kitts and Nevis", "kn", "1869"], ["Saint Lucia", "lc", "1758"], ["Saint Martin (Saint-Martin (partie fran\xe7aise))", "mf", "590", 2], ["Saint Pierre and Miquelon (Saint-Pierre-et-Miquelon)", "pm", "508"], ["Saint Vincent and the Grenadines", "vc", "1784"], ["Samoa", "ws", "685"], ["San Marino", "sm", "378"], ["S\xe3o Tom\xe9 and Pr\xedncipe (S\xe3o Tom\xe9 e Pr\xedncipe)", "st", "239"], ["Saudi Arabia (\u202b\u0627\u0644\u0645\u0645\u0644\u0643\u0629 \u0627\u0644\u0639\u0631\u0628\u064a\u0629 \u0627\u0644\u0633\u0639\u0648\u062f\u064a\u0629\u202c\u200e)", "sa", "966"], ["Senegal (S\xe9n\xe9gal)", "sn", "221"], ["Serbia (\u0421\u0440\u0431\u0438\u0458\u0430)", "rs", "381"], ["Seychelles", "sc", "248"], ["Sierra Leone", "sl", "232"], ["Singapore", "sg", "65"], ["Sint Maarten", "sx", "1721"], ["Slovakia (Slovensko)", "sk", "421"], ["Slovenia (Slovenija)", "si", "386"], ["Solomon Islands", "sb", "677"], ["Somalia (Soomaaliya)", "so", "252"], ["South Africa", "za", "27"], ["South Korea (\ub300\ud55c\ubbfc\uad6d)", "kr", "82"], ["South Sudan (\u202b\u062c\u0646\u0648\u0628 \u0627\u0644\u0633\u0648\u062f\u0627\u0646\u202c\u200e)", "ss", "211"], ["Spain (Espa\xf1a)", "es", "34"], ["Sri Lanka (\u0dc1\u0dca\u200d\u0dbb\u0dd3 \u0dbd\u0d82\u0d9a\u0dcf\u0dc0)", "lk", "94"], ["Sudan (\u202b\u0627\u0644\u0633\u0648\u062f\u0627\u0646\u202c\u200e)", "sd", "249"], ["Suriname", "sr", "597"], ["Svalbard and Jan Mayen", "sj", "47", 1], ["Swaziland", "sz", "268"], ["Sweden (Sverige)", "se", "46"], ["Switzerland (Schweiz)", "ch", "41"], ["Syria (\u202b\u0633\u0648\u0631\u064a\u0627\u202c\u200e)", "sy", "963"], ["Taiwan (\u53f0\u7063)", "tw", "886"], ["Tajikistan", "tj", "992"], ["Tanzania", "tz", "255"], ["Thailand (\u0e44\u0e17\u0e22)", "th", "66"], ["Timor-Leste", "tl", "670"], ["Togo", "tg", "228"], ["Tokelau", "tk", "690"], ["Tonga", "to", "676"], ["Trinidad and Tobago", "tt", "1868"], ["Tunisia (\u202b\u062a\u0648\u0646\u0633\u202c\u200e)", "tn", "216"], ["Turkey (T\xfcrkiye)", "tr", "90"], ["Turkmenistan", "tm", "993"], ["Turks and Caicos Islands", "tc", "1649"], ["Tuvalu", "tv", "688"], ["U.S. Virgin Islands", "vi", "1340"], ["Uganda", "ug", "256"], ["Ukraine (\u0423\u043a\u0440\u0430\u0457\u043d\u0430)", "ua", "380"], ["United Arab Emirates (\u202b\u0627\u0644\u0625\u0645\u0627\u0631\u0627\u062a \u0627\u0644\u0639\u0631\u0628\u064a\u0629 \u0627\u0644\u0645\u062a\u062d\u062f\u0629\u202c\u200e)", "ae", "971"], ["United Kingdom", "gb", "44", 0], ["United States", "us", "1", 0], ["Uruguay", "uy", "598"], ["Uzbekistan (O\u02bbzbekiston)", "uz", "998"], ["Vanuatu", "vu", "678"], ["Vatican City (Citt\xe0 del Vaticano)", "va", "39", 1], ["Venezuela", "ve", "58"], ["Vietnam (Vi\u1ec7t Nam)", "vn", "84"], ["Wallis and Futuna", "wf", "681"], ["Western Sahara (\u202b\u0627\u0644\u0635\u062d\u0631\u0627\u0621 \u0627\u0644\u063a\u0631\u0628\u064a\u0629\u202c\u200e)", "eh", "212", 1], ["Yemen (\u202b\u0627\u0644\u064a\u0645\u0646\u202c\u200e)", "ye", "967"], ["Zambia", "zm", "260"], ["Zimbabwe", "zw", "263"], ["\xc5land Islands", "ax", "358", 1]], c = 0; c < u.length; c++) {
            var h = u[c];
            u[c] = {
                name: h[0],
                iso2: h[1],
                dialCode: h[2],
                priority: h[3] || 0,
                areaCodes: h[4] || null
            }
        }
    }), ! function (t) {
        "use strict";
        "function" == typeof define && define.amd ? define(["jquery"], t) : "undefined" != typeof exports ? module.exports = t(require("jquery")) : t(jQuery)
    }(function (t) {
        "use strict";
        var e = window.Slick || {};
        e = function () {
            function e(e, i) {
                var s, o = this;
                o.defaults = {
                    accessibility: !0,
                    adaptiveHeight: !1,
                    appendArrows: t(e),
                    appendDots: t(e),
                    arrows: !0,
                    asNavFor: null,
                    prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>',
                    nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>',
                    autoplay: !1,
                    autoplaySpeed: 3e3,
                    centerMode: !1,
                    centerPadding: "50px",
                    cssEase: "ease",
                    customPaging: function (e, n) {
                        return t('<button type="button" data-role="none" role="button" tabindex="0" />').text(n + 1)
                    },
                    dots: !1,
                    dotsClass: "slick-dots",
                    draggable: !0,
                    easing: "linear",
                    edgeFriction: .35,
                    fade: !1,
                    focusOnSelect: !1,
                    infinite: !0,
                    initialSlide: 0,
                    lazyLoad: "ondemand",
                    mobileFirst: !1,
                    pauseOnHover: !0,
                    pauseOnFocus: !0,
                    pauseOnDotsHover: !1,
                    respondTo: "window",
                    responsive: null,
                    rows: 1,
                    rtl: !1,
                    slide: "",
                    slidesPerRow: 1,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    speed: 500,
                    swipe: !0,
                    swipeToSlide: !1,
                    touchMove: !0,
                    touchThreshold: 5,
                    useCSS: !0,
                    useTransform: !0,
                    variableWidth: !1,
                    vertical: !1,
                    verticalSwiping: !1,
                    waitForAnimate: !0,
                    zIndex: 1e3
                }, o.initials = {
                    animating: !1,
                    dragging: !1,
                    autoPlayTimer: null,
                    currentDirection: 0,
                    currentLeft: null,
                    currentSlide: 0,
                    direction: 1,
                    $dots: null,
                    listWidth: null,
                    listHeight: null,
                    loadIndex: 0,
                    $nextArrow: null,
                    $prevArrow: null,
                    slideCount: null,
                    slideWidth: null,
                    $slideTrack: null,
                    $slides: null,
                    sliding: !1,
                    slideOffset: 0,
                    swipeLeft: null,
                    $list: null,
                    touchObject: {},
                    transformsEnabled: !1,
                    unslicked: !1
                }, t.extend(o, o.initials), o.activeBreakpoint = null, o.animType = null, o.animProp = null, o.breakpoints = [], o.breakpointSettings = [], o.cssTransitions = !1, o.focussed = !1, o.interrupted = !1, o.hidden = "hidden", o.paused = !0, o.positionProp = null, o.respondTo = null, o.rowCount = 1, o.shouldClick = !0, o.$slider = t(e), o.$slidesCache = null, o.transformType = null, o.transitionType = null, o.visibilityChange = "visibilitychange", o.windowWidth = 0, o.windowTimer = null, s = t(e).data("slick") || {}, o.options = t.extend({}, o.defaults, i, s), o.currentSlide = o.options.initialSlide, o.originalSettings = o.options, "undefined" != typeof document.mozHidden ? (o.hidden = "mozHidden", o.visibilityChange = "mozvisibilitychange") : "undefined" != typeof document.webkitHidden && (o.hidden = "webkitHidden", o.visibilityChange = "webkitvisibilitychange"), o.autoPlay = t.proxy(o.autoPlay, o), o.autoPlayClear = t.proxy(o.autoPlayClear, o), o.autoPlayIterator = t.proxy(o.autoPlayIterator, o), o.changeSlide = t.proxy(o.changeSlide, o), o.clickHandler = t.proxy(o.clickHandler, o), o.selectHandler = t.proxy(o.selectHandler, o), o.setPosition = t.proxy(o.setPosition, o), o.swipeHandler = t.proxy(o.swipeHandler, o), o.dragHandler = t.proxy(o.dragHandler, o), o.keyHandler = t.proxy(o.keyHandler, o), o.instanceUid = n++, o.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, o.registerBreakpoints(), o.init(!0)
            }
            var n = 0;
            return e
        }(), e.prototype.activateADA = function () {
            var t = this;
            t.$slideTrack.find(".slick-active").attr({
                "aria-hidden": "false"
            }).find("a, input, button, select").attr({
                tabindex: "0"
            })
        }, e.prototype.addSlide = e.prototype.slickAdd = function (e, n, i) {
            var s = this;
            if ("boolean" == typeof n) i = n, n = null;
            else if (0 > n || n >= s.slideCount) return !1;
            s.unload(), "number" == typeof n ? 0 === n && 0 === s.$slides.length ? t(e).appendTo(s.$slideTrack) : i ? t(e).insertBefore(s.$slides.eq(n)) : t(e).insertAfter(s.$slides.eq(n)) : i === !0 ? t(e).prependTo(s.$slideTrack) : t(e).appendTo(s.$slideTrack), s.$slides = s.$slideTrack.children(this.options.slide), s.$slideTrack.children(this.options.slide).detach(), s.$slideTrack.append(s.$slides), s.$slides.each(function (e, n) {
                t(n).attr("data-slick-index", e)
            }), s.$slidesCache = s.$slides, s.reinit()
        }, e.prototype.animateHeight = function () {
            var t = this;
            if (1 === t.options.slidesToShow && t.options.adaptiveHeight === !0 && t.options.vertical === !1) {
                var e = t.$slides.eq(t.currentSlide).outerHeight(!0);
                t.$list.animate({
                    height: e
                }, t.options.speed)
            }
        }, e.prototype.animateSlide = function (e, n) {
            var i = {},
                s = this;
            s.animateHeight(), s.options.rtl === !0 && s.options.vertical === !1 && (e = -e), s.transformsEnabled === !1 ? s.options.vertical === !1 ? s.$slideTrack.animate({
                left: e
            }, s.options.speed, s.options.easing, n) : s.$slideTrack.animate({
                top: e
            }, s.options.speed, s.options.easing, n) : s.cssTransitions === !1 ? (s.options.rtl === !0 && (s.currentLeft = -s.currentLeft), t({
                animStart: s.currentLeft
            }).animate({
                animStart: e
            }, {
                duration: s.options.speed,
                easing: s.options.easing,
                step: function (t) {
                    t = Math.ceil(t), s.options.vertical === !1 ? (i[s.animType] = "translate(" + t + "px, 0px)", s.$slideTrack.css(i)) : (i[s.animType] = "translate(0px," + t + "px)", s.$slideTrack.css(i))
                },
                complete: function () {
                    n && n.call()
                }
            })) : (s.applyTransition(), e = Math.ceil(e), s.options.vertical === !1 ? i[s.animType] = "translate3d(" + e + "px, 0px, 0px)" : i[s.animType] = "translate3d(0px," + e + "px, 0px)", s.$slideTrack.css(i), n && setTimeout(function () {
                s.disableTransition(), n.call()
            }, s.options.speed))
        }, e.prototype.getNavTarget = function () {
            var e = this,
                n = e.options.asNavFor;
            return n && null !== n && (n = t(n).not(e.$slider)), n
        }, e.prototype.asNavFor = function (e) {
            var n = this,
                i = n.getNavTarget();
            null !== i && "object" == typeof i && i.each(function () {
                var n = t(this).slick("getSlick");
                n.unslicked || n.slideHandler(e, !0)
            })
        }, e.prototype.applyTransition = function (t) {
            var e = this,
                n = {};
            e.options.fade === !1 ? n[e.transitionType] = e.transformType + " " + e.options.speed + "ms " + e.options.cssEase : n[e.transitionType] = "opacity " + e.options.speed + "ms " + e.options.cssEase, e.options.fade === !1 ? e.$slideTrack.css(n) : e.$slides.eq(t).css(n)
        }, e.prototype.autoPlay = function () {
            var t = this;
            t.autoPlayClear(), t.slideCount > t.options.slidesToShow && (t.autoPlayTimer = setInterval(t.autoPlayIterator, t.options.autoplaySpeed))
        }, e.prototype.autoPlayClear = function () {
            var t = this;
            t.autoPlayTimer && clearInterval(t.autoPlayTimer)
        }, e.prototype.autoPlayIterator = function () {
            var t = this,
                e = t.currentSlide + t.options.slidesToScroll;
            t.paused || t.interrupted || t.focussed || (t.options.infinite === !1 && (1 === t.direction && t.currentSlide + 1 === t.slideCount - 1 ? t.direction = 0 : 0 === t.direction && (e = t.currentSlide - t.options.slidesToScroll, t.currentSlide - 1 === 0 && (t.direction = 1))), t.slideHandler(e))
        }, e.prototype.buildArrows = function () {
            var e = this;
            e.options.arrows === !0 && (e.$prevArrow = t(e.options.prevArrow).addClass("slick-arrow"), e.$nextArrow = t(e.options.nextArrow).addClass("slick-arrow"), e.slideCount > e.options.slidesToShow ? (e.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), e.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.prependTo(e.options.appendArrows), e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.appendTo(e.options.appendArrows), e.options.infinite !== !0 && e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : e.$prevArrow.add(e.$nextArrow).addClass("slick-hidden").attr({
                "aria-disabled": "true",
                tabindex: "-1"
            }))
        }, e.prototype.buildDots = function () {
            var e, n, i = this;
            if (i.options.dots === !0 && i.slideCount > i.options.slidesToShow) {
                for (i.$slider.addClass("slick-dotted"), n = t("<ul />").addClass(i.options.dotsClass), e = 0; e <= i.getDotCount(); e += 1) n.append(t("<li />").append(i.options.customPaging.call(this, i, e)));
                i.$dots = n.appendTo(i.options.appendDots), i.$dots.find("li").first().addClass("slick-active").attr("aria-hidden", "false")
            }
        }, e.prototype.buildOut = function () {
            var e = this;
            e.$slides = e.$slider.children(e.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), e.slideCount = e.$slides.length, e.$slides.each(function (e, n) {
                t(n).attr("data-slick-index", e).data("originalStyling", t(n).attr("style") || "")
            }), e.$slider.addClass("slick-slider"), e.$slideTrack = 0 === e.slideCount ? t('<div class="slick-track"/>').appendTo(e.$slider) : e.$slides.wrapAll('<div class="slick-track"/>').parent(), e.$list = e.$slideTrack.wrap('<div aria-live="polite" class="slick-list"/>').parent(), e.$slideTrack.css("opacity", 0), (e.options.centerMode === !0 || e.options.swipeToSlide === !0) && (e.options.slidesToScroll = 1), t("img[data-lazy]", e.$slider).not("[src]").addClass("slick-loading"), e.setupInfinite(), e.buildArrows(), e.buildDots(), e.updateDots(), e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0), e.options.draggable === !0 && e.$list.addClass("draggable")
        }, e.prototype.buildRows = function () {
            var t, e, n, i, s, o, r, a = this;
            if (i = document.createDocumentFragment(), o = a.$slider.children(), a.options.rows > 1) {
                for (r = a.options.slidesPerRow * a.options.rows, s = Math.ceil(o.length / r), t = 0; s > t; t++) {
                    var l = document.createElement("div");
                    for (e = 0; e < a.options.rows; e++) {
                        var u = document.createElement("div");
                        for (n = 0; n < a.options.slidesPerRow; n++) {
                            var c = t * r + (e * a.options.slidesPerRow + n);
                            o.get(c) && u.appendChild(o.get(c))
                        }
                        l.appendChild(u)
                    }
                    i.appendChild(l)
                }
                a.$slider.empty().append(i), a.$slider.children().children().children().css({
                    width: 100 / a.options.slidesPerRow + "%",
                    display: "inline-block"
                })
            }
        }, e.prototype.checkResponsive = function (e, n) {
            var i, s, o, r = this,
                a = !1,
                l = r.$slider.width(),
                u = window.innerWidth || t(window).width();
            if ("window" === r.respondTo ? o = u : "slider" === r.respondTo ? o = l : "min" === r.respondTo && (o = Math.min(u, l)), r.options.responsive && r.options.responsive.length && null !== r.options.responsive) {
                s = null;
                for (i in r.breakpoints) r.breakpoints.hasOwnProperty(i) && (r.originalSettings.mobileFirst === !1 ? o < r.breakpoints[i] && (s = r.breakpoints[i]) : o > r.breakpoints[i] && (s = r.breakpoints[i]));
                null !== s ? null !== r.activeBreakpoint ? (s !== r.activeBreakpoint || n) && (r.activeBreakpoint = s, "unslick" === r.breakpointSettings[s] ? r.unslick(s) : (r.options = t.extend({}, r.originalSettings, r.breakpointSettings[s]), e === !0 && (r.currentSlide = r.options.initialSlide), r.refresh(e)), a = s) : (r.activeBreakpoint = s, "unslick" === r.breakpointSettings[s] ? r.unslick(s) : (r.options = t.extend({}, r.originalSettings, r.breakpointSettings[s]), e === !0 && (r.currentSlide = r.options.initialSlide), r.refresh(e)), a = s) : null !== r.activeBreakpoint && (r.activeBreakpoint = null, r.options = r.originalSettings, e === !0 && (r.currentSlide = r.options.initialSlide), r.refresh(e), a = s), e || a === !1 || r.$slider.trigger("breakpoint", [r, a])
            }
        }, e.prototype.changeSlide = function (e, n) {
            var i, s, o, r = this,
                a = t(e.currentTarget);
            switch (a.is("a") && e.preventDefault(), a.is("li") || (a = a.closest("li")), o = r.slideCount % r.options.slidesToScroll !== 0, i = o ? 0 : (r.slideCount - r.currentSlide) % r.options.slidesToScroll, e.data.message) {
                case "previous":
                    s = 0 === i ? r.options.slidesToScroll : r.options.slidesToShow - i, r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide - s, !1, n);
                    break;
                case "next":
                    s = 0 === i ? r.options.slidesToScroll : i, r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide + s, !1, n);
                    break;
                case "index":
                    var l = 0 === e.data.index ? 0 : e.data.index || a.index() * r.options.slidesToScroll;
                    r.slideHandler(r.checkNavigable(l), !1, n), a.children().trigger("focus");
                    break;
                default:
                    return
            }
        }, e.prototype.checkNavigable = function (t) {
            var e, n, i = this;
            if (e = i.getNavigableIndexes(), n = 0, t > e[e.length - 1]) t = e[e.length - 1];
            else
                for (var s in e) {
                    if (t < e[s]) {
                        t = n;
                        break
                    }
                    n = e[s]
                }
            return t
        }, e.prototype.cleanUpEvents = function () {
            var e = this;
            e.options.dots && null !== e.$dots && t("li", e.$dots).off("click.slick", e.changeSlide).off("mouseenter.slick", t.proxy(e.interrupt, e, !0)).off("mouseleave.slick", t.proxy(e.interrupt, e, !1)), e.$slider.off("focus.slick blur.slick"), e.options.arrows === !0 && e.slideCount > e.options.slidesToShow && (e.$prevArrow && e.$prevArrow.off("click.slick", e.changeSlide), e.$nextArrow && e.$nextArrow.off("click.slick", e.changeSlide)), e.$list.off("touchstart.slick mousedown.slick", e.swipeHandler), e.$list.off("touchmove.slick mousemove.slick", e.swipeHandler), e.$list.off("touchend.slick mouseup.slick", e.swipeHandler), e.$list.off("touchcancel.slick mouseleave.slick", e.swipeHandler), e.$list.off("click.slick", e.clickHandler), t(document).off(e.visibilityChange, e.visibility), e.cleanUpSlideEvents(), e.options.accessibility === !0 && e.$list.off("keydown.slick", e.keyHandler), e.options.focusOnSelect === !0 && t(e.$slideTrack).children().off("click.slick", e.selectHandler), t(window).off("orientationchange.slick.slick-" + e.instanceUid, e.orientationChange), t(window).off("resize.slick.slick-" + e.instanceUid, e.resize), t("[draggable!=true]", e.$slideTrack).off("dragstart", e.preventDefault), t(window).off("load.slick.slick-" + e.instanceUid, e.setPosition), t(document).off("ready.slick.slick-" + e.instanceUid, e.setPosition)
        }, e.prototype.cleanUpSlideEvents = function () {
            var e = this;
            e.$list.off("mouseenter.slick", t.proxy(e.interrupt, e, !0)), e.$list.off("mouseleave.slick", t.proxy(e.interrupt, e, !1))
        }, e.prototype.cleanUpRows = function () {
            var t, e = this;
            e.options.rows > 1 && (t = e.$slides.children().children(), t.removeAttr("style"), e.$slider.empty().append(t))
        }, e.prototype.clickHandler = function (t) {
            var e = this;
            e.shouldClick === !1 && (t.stopImmediatePropagation(), t.stopPropagation(), t.preventDefault())
        }, e.prototype.destroy = function (e) {
            var n = this;
            n.autoPlayClear(), n.touchObject = {}, n.cleanUpEvents(), t(".slick-cloned", n.$slider).detach(), n.$dots && n.$dots.remove(), n.$prevArrow && n.$prevArrow.length && (n.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), n.htmlExpr.test(n.options.prevArrow) && n.$prevArrow.remove()), n.$nextArrow && n.$nextArrow.length && (n.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), n.htmlExpr.test(n.options.nextArrow) && n.$nextArrow.remove()), n.$slides && (n.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function () {
                t(this).attr("style", t(this).data("originalStyling"))
            }), n.$slideTrack.children(this.options.slide).detach(), n.$slideTrack.detach(), n.$list.detach(), n.$slider.append(n.$slides)), n.cleanUpRows(), n.$slider.removeClass("slick-slider"), n.$slider.removeClass("slick-initialized"), n.$slider.removeClass("slick-dotted"), n.unslicked = !0, e || n.$slider.trigger("destroy", [n])
        }, e.prototype.disableTransition = function (t) {
            var e = this,
                n = {};
            n[e.transitionType] = "", e.options.fade === !1 ? e.$slideTrack.css(n) : e.$slides.eq(t).css(n)
        }, e.prototype.fadeSlide = function (t, e) {
            var n = this;
            n.cssTransitions === !1 ? (n.$slides.eq(t).css({
                zIndex: n.options.zIndex
            }), n.$slides.eq(t).animate({
                opacity: 1
            }, n.options.speed, n.options.easing, e)) : (n.applyTransition(t), n.$slides.eq(t).css({
                opacity: 1,
                zIndex: n.options.zIndex
            }), e && setTimeout(function () {
                n.disableTransition(t), e.call()
            }, n.options.speed))
        }, e.prototype.fadeSlideOut = function (t) {
            var e = this;
            e.cssTransitions === !1 ? e.$slides.eq(t).animate({
                opacity: 0,
                zIndex: e.options.zIndex - 2
            }, e.options.speed, e.options.easing) : (e.applyTransition(t), e.$slides.eq(t).css({
                opacity: 0,
                zIndex: e.options.zIndex - 2
            }))
        }, e.prototype.filterSlides = e.prototype.slickFilter = function (t) {
            var e = this;
            null !== t && (e.$slidesCache = e.$slides, e.unload(), e.$slideTrack.children(this.options.slide).detach(), e.$slidesCache.filter(t).appendTo(e.$slideTrack), e.reinit())
        }, e.prototype.focusHandler = function () {
            var e = this;
            e.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*:not(.slick-arrow)", function (n) {
                n.stopImmediatePropagation();
                var i = t(this);
                setTimeout(function () {
                    e.options.pauseOnFocus && (e.focussed = i.is(":focus"), e.autoPlay())
                }, 0)
            })
        }, e.prototype.getCurrent = e.prototype.slickCurrentSlide = function () {
            var t = this;
            return t.currentSlide
        }, e.prototype.getDotCount = function () {
            var t = this,
                e = 0,
                n = 0,
                i = 0;
            if (t.options.infinite === !0)
                for (; e < t.slideCount;) ++i, e = n + t.options.slidesToScroll, n += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow;
            else if (t.options.centerMode === !0) i = t.slideCount;
            else if (t.options.asNavFor)
                for (; e < t.slideCount;) ++i, e = n + t.options.slidesToScroll, n += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow;
            else i = 1 + Math.ceil((t.slideCount - t.options.slidesToShow) / t.options.slidesToScroll);
            return i - 1
        }, e.prototype.getLeft = function (t) {
            var e, n, i, s = this,
                o = 0;
            return s.slideOffset = 0, n = s.$slides.first().outerHeight(!0), s.options.infinite === !0 ? (s.slideCount > s.options.slidesToShow && (s.slideOffset = s.slideWidth * s.options.slidesToShow * -1, o = n * s.options.slidesToShow * -1), s.slideCount % s.options.slidesToScroll !== 0 && t + s.options.slidesToScroll > s.slideCount && s.slideCount > s.options.slidesToShow && (t > s.slideCount ? (s.slideOffset = (s.options.slidesToShow - (t - s.slideCount)) * s.slideWidth * -1, o = (s.options.slidesToShow - (t - s.slideCount)) * n * -1) : (s.slideOffset = s.slideCount % s.options.slidesToScroll * s.slideWidth * -1, o = s.slideCount % s.options.slidesToScroll * n * -1))) : t + s.options.slidesToShow > s.slideCount && (s.slideOffset = (t + s.options.slidesToShow - s.slideCount) * s.slideWidth, o = (t + s.options.slidesToShow - s.slideCount) * n), s.slideCount <= s.options.slidesToShow && (s.slideOffset = 0, o = 0), s.options.centerMode === !0 && s.options.infinite === !0 ? s.slideOffset += s.slideWidth * Math.floor(s.options.slidesToShow / 2) - s.slideWidth : s.options.centerMode === !0 && (s.slideOffset = 0, s.slideOffset += s.slideWidth * Math.floor(s.options.slidesToShow / 2)), e = s.options.vertical === !1 ? t * s.slideWidth * -1 + s.slideOffset : t * n * -1 + o, s.options.variableWidth === !0 && (i = s.slideCount <= s.options.slidesToShow || s.options.infinite === !1 ? s.$slideTrack.children(".slick-slide").eq(t) : s.$slideTrack.children(".slick-slide").eq(t + s.options.slidesToShow), e = s.options.rtl === !0 ? i[0] ? -1 * (s.$slideTrack.width() - i[0].offsetLeft - i.width()) : 0 : i[0] ? -1 * i[0].offsetLeft : 0, s.options.centerMode === !0 && (i = s.slideCount <= s.options.slidesToShow || s.options.infinite === !1 ? s.$slideTrack.children(".slick-slide").eq(t) : s.$slideTrack.children(".slick-slide").eq(t + s.options.slidesToShow + 1), e = s.options.rtl === !0 ? i[0] ? -1 * (s.$slideTrack.width() - i[0].offsetLeft - i.width()) : 0 : i[0] ? -1 * i[0].offsetLeft : 0, e += (s.$list.width() - i.outerWidth()) / 2)), e
        }, e.prototype.getOption = e.prototype.slickGetOption = function (t) {
            var e = this;
            return e.options[t]
        }, e.prototype.getNavigableIndexes = function () {
            var t, e = this,
                n = 0,
                i = 0,
                s = [];
            for (e.options.infinite === !1 ? t = e.slideCount : (n = -1 * e.options.slidesToScroll, i = -1 * e.options.slidesToScroll, t = 2 * e.slideCount); t > n;) s.push(n), n = i + e.options.slidesToScroll, i += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
            return s
        }, e.prototype.getSlick = function () {
            return this
        }, e.prototype.getSlideCount = function () {
            var e, n, i, s = this;
            return i = s.options.centerMode === !0 ? s.slideWidth * Math.floor(s.options.slidesToShow / 2) : 0, s.options.swipeToSlide === !0 ? (s.$slideTrack.find(".slick-slide").each(function (e, o) {
                return o.offsetLeft - i + t(o).outerWidth() / 2 > -1 * s.swipeLeft ? (n = o, !1) : void 0
            }), e = Math.abs(t(n).attr("data-slick-index") - s.currentSlide) || 1) : s.options.slidesToScroll
        }, e.prototype.goTo = e.prototype.slickGoTo = function (t, e) {
            var n = this;
            n.changeSlide({
                data: {
                    message: "index",
                    index: parseInt(t)
                }
            }, e)
        }, e.prototype.init = function (e) {
            var n = this;
            t(n.$slider).hasClass("slick-initialized") || (t(n.$slider).addClass("slick-initialized"), n.buildRows(), n.buildOut(), n.setProps(), n.startLoad(), n.loadSlider(), n.initializeEvents(), n.updateArrows(), n.updateDots(), n.checkResponsive(!0), n.focusHandler()), e && n.$slider.trigger("init", [n]), n.options.accessibility === !0 && n.initADA(), n.options.autoplay && (n.paused = !1, n.autoPlay())
        }, e.prototype.initADA = function () {
            var e = this;
            e.$slides.add(e.$slideTrack.find(".slick-cloned")).attr({
                "aria-hidden": "true",
                tabindex: "-1"
            }).find("a, input, button, select").attr({
                tabindex: "-1"
            }), e.$slideTrack.attr("role", "listbox"), e.$slides.not(e.$slideTrack.find(".slick-cloned")).each(function (n) {
                t(this).attr({
                    role: "option",
                    "aria-describedby": "slick-slide" + e.instanceUid + n
                })
            }), null !== e.$dots && e.$dots.attr("role", "tablist").find("li").each(function (n) {
                t(this).attr({
                    role: "presentation",
                    "aria-selected": "false",
                    "aria-controls": "navigation" + e.instanceUid + n,
                    id: "slick-slide" + e.instanceUid + n
                })
            }).first().attr("aria-selected", "true").end().find("button").attr("role", "button").end().closest("div").attr("role", "toolbar"), e.activateADA()
        }, e.prototype.initArrowEvents = function () {
            var t = this;
            t.options.arrows === !0 && t.slideCount > t.options.slidesToShow && (t.$prevArrow.off("click.slick").on("click.slick", {
                message: "previous"
            }, t.changeSlide), t.$nextArrow.off("click.slick").on("click.slick", {
                message: "next"
            }, t.changeSlide))
        }, e.prototype.initDotEvents = function () {
            var e = this;
            e.options.dots === !0 && e.slideCount > e.options.slidesToShow && t("li", e.$dots).on("click.slick", {
                message: "index"
            }, e.changeSlide), e.options.dots === !0 && e.options.pauseOnDotsHover === !0 && t("li", e.$dots).on("mouseenter.slick", t.proxy(e.interrupt, e, !0)).on("mouseleave.slick", t.proxy(e.interrupt, e, !1))
        }, e.prototype.initSlideEvents = function () {
            var e = this;
            e.options.pauseOnHover && (e.$list.on("mouseenter.slick", t.proxy(e.interrupt, e, !0)), e.$list.on("mouseleave.slick", t.proxy(e.interrupt, e, !1)))
        }, e.prototype.initializeEvents = function () {
            var e = this;
            e.initArrowEvents(), e.initDotEvents(), e.initSlideEvents(), e.$list.on("touchstart.slick mousedown.slick", {
                action: "start"
            }, e.swipeHandler), e.$list.on("touchmove.slick mousemove.slick", {
                action: "move"
            }, e.swipeHandler), e.$list.on("touchend.slick mouseup.slick", {
                action: "end"
            }, e.swipeHandler), e.$list.on("touchcancel.slick mouseleave.slick", {
                action: "end"
            }, e.swipeHandler), e.$list.on("click.slick", e.clickHandler), t(document).on(e.visibilityChange, t.proxy(e.visibility, e)), e.options.accessibility === !0 && e.$list.on("keydown.slick", e.keyHandler), e.options.focusOnSelect === !0 && t(e.$slideTrack).children().on("click.slick", e.selectHandler), t(window).on("orientationchange.slick.slick-" + e.instanceUid, t.proxy(e.orientationChange, e)), t(window).on("resize.slick.slick-" + e.instanceUid, t.proxy(e.resize, e)), t("[draggable!=true]", e.$slideTrack).on("dragstart", e.preventDefault), t(window).on("load.slick.slick-" + e.instanceUid, e.setPosition), t(document).on("ready.slick.slick-" + e.instanceUid, e.setPosition)
        }, e.prototype.initUI = function () {
            var t = this;
            t.options.arrows === !0 && t.slideCount > t.options.slidesToShow && (t.$prevArrow.show(), t.$nextArrow.show()), t.options.dots === !0 && t.slideCount > t.options.slidesToShow && t.$dots.show()
        }, e.prototype.keyHandler = function (t) {
            var e = this;
            t.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === t.keyCode && e.options.accessibility === !0 ? e.changeSlide({
                data: {
                    message: e.options.rtl === !0 ? "next" : "previous"
                }
            }) : 39 === t.keyCode && e.options.accessibility === !0 && e.changeSlide({
                data: {
                    message: e.options.rtl === !0 ? "previous" : "next"
                }
            }))
        }, e.prototype.lazyLoad = function () {
            function e(e) {
                t("img[data-lazy]", e).each(function () {
                    var e = t(this),
                        n = t(this).attr("data-lazy"),
                        i = document.createElement("img");
                    i.onload = function () {
                        e.animate({
                            opacity: 0
                        }, 100, function () {
                            e.attr("src", n).animate({
                                opacity: 1
                            }, 200, function () {
                                e.removeAttr("data-lazy").removeClass("slick-loading")
                            }), r.$slider.trigger("lazyLoaded", [r, e, n])
                        })
                    }, i.onerror = function () {
                        e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), r.$slider.trigger("lazyLoadError", [r, e, n])
                    }, i.src = n
                })
            }
            var n, i, s, o, r = this;
            r.options.centerMode === !0 ? r.options.infinite === !0 ? (s = r.currentSlide + (r.options.slidesToShow / 2 + 1), o = s + r.options.slidesToShow + 2) : (s = Math.max(0, r.currentSlide - (r.options.slidesToShow / 2 + 1)), o = 2 + (r.options.slidesToShow / 2 + 1) + r.currentSlide) : (s = r.options.infinite ? r.options.slidesToShow + r.currentSlide : r.currentSlide, o = Math.ceil(s + r.options.slidesToShow), r.options.fade === !0 && (s > 0 && s--, o <= r.slideCount && o++)), n = r.$slider.find(".slick-slide").slice(s, o), e(n), r.slideCount <= r.options.slidesToShow ? (i = r.$slider.find(".slick-slide"), e(i)) : r.currentSlide >= r.slideCount - r.options.slidesToShow ? (i = r.$slider.find(".slick-cloned").slice(0, r.options.slidesToShow), e(i)) : 0 === r.currentSlide && (i = r.$slider.find(".slick-cloned").slice(-1 * r.options.slidesToShow), e(i))
        }, e.prototype.loadSlider = function () {
            var t = this;
            t.setPosition(), t.$slideTrack.css({
                opacity: 1
            }), t.$slider.removeClass("slick-loading"), t.initUI(), "progressive" === t.options.lazyLoad && t.progressiveLazyLoad()
        }, e.prototype.next = e.prototype.slickNext = function () {
            var t = this;
            t.changeSlide({
                data: {
                    message: "next"
                }
            })
        }, e.prototype.orientationChange = function () {
            var t = this;
            t.checkResponsive(), t.setPosition()
        }, e.prototype.pause = e.prototype.slickPause = function () {
            var t = this;
            t.autoPlayClear(), t.paused = !0
        }, e.prototype.play = e.prototype.slickPlay = function () {
            var t = this;
            t.autoPlay(), t.options.autoplay = !0, t.paused = !1, t.focussed = !1, t.interrupted = !1
        }, e.prototype.postSlide = function (t) {
            var e = this;
            e.unslicked || (e.$slider.trigger("afterChange", [e, t]), e.animating = !1, e.setPosition(), e.swipeLeft = null, e.options.autoplay && e.autoPlay(), e.options.accessibility === !0 && e.initADA())
        }, e.prototype.prev = e.prototype.slickPrev = function () {
            var t = this;
            t.changeSlide({
                data: {
                    message: "previous"
                }
            })
        }, e.prototype.preventDefault = function (t) {
            t.preventDefault()
        }, e.prototype.progressiveLazyLoad = function (e) {
            e = e || 1;
            var n, i, s, o = this,
                r = t("img[data-lazy]", o.$slider);
            r.length ? (n = r.first(), i = n.attr("data-lazy"), s = document.createElement("img"), s.onload = function () {
                n.attr("src", i).removeAttr("data-lazy").removeClass("slick-loading"), o.options.adaptiveHeight === !0 && o.setPosition(), o.$slider.trigger("lazyLoaded", [o, n, i]), o.progressiveLazyLoad()
            }, s.onerror = function () {
                3 > e ? setTimeout(function () {
                    o.progressiveLazyLoad(e + 1)
                }, 500) : (n.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), o.$slider.trigger("lazyLoadError", [o, n, i]), o.progressiveLazyLoad())
            }, s.src = i) : o.$slider.trigger("allImagesLoaded", [o])
        }, e.prototype.refresh = function (e) {
            var n, i, s = this;
            i = s.slideCount - s.options.slidesToShow, !s.options.infinite && s.currentSlide > i && (s.currentSlide = i), s.slideCount <= s.options.slidesToShow && (s.currentSlide = 0), n = s.currentSlide, s.destroy(!0), t.extend(s, s.initials, {
                currentSlide: n
            }), s.init(), e || s.changeSlide({
                data: {
                    message: "index",
                    index: n
                }
            }, !1)
        }, e.prototype.registerBreakpoints = function () {
            var e, n, i, s = this,
                o = s.options.responsive || null;
            if ("array" === t.type(o) && o.length) {
                s.respondTo = s.options.respondTo || "window";
                for (e in o)
                    if (i = s.breakpoints.length - 1, n = o[e].breakpoint, o.hasOwnProperty(e)) {
                        for (; i >= 0;) s.breakpoints[i] && s.breakpoints[i] === n && s.breakpoints.splice(i, 1), i--;
                        s.breakpoints.push(n), s.breakpointSettings[n] = o[e].settings
                    }
                s.breakpoints.sort(function (t, e) {
                    return s.options.mobileFirst ? t - e : e - t
                })
            }
        }, e.prototype.reinit = function () {
            var e = this;
            e.$slides = e.$slideTrack.children(e.options.slide).addClass("slick-slide"), e.slideCount = e.$slides.length, e.currentSlide >= e.slideCount && 0 !== e.currentSlide && (e.currentSlide = e.currentSlide - e.options.slidesToScroll), e.slideCount <= e.options.slidesToShow && (e.currentSlide = 0), e.registerBreakpoints(), e.setProps(), e.setupInfinite(), e.buildArrows(), e.updateArrows(), e.initArrowEvents(), e.buildDots(), e.updateDots(), e.initDotEvents(), e.cleanUpSlideEvents(), e.initSlideEvents(), e.checkResponsive(!1, !0), e.options.focusOnSelect === !0 && t(e.$slideTrack).children().on("click.slick", e.selectHandler), e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0), e.setPosition(), e.focusHandler(), e.paused = !e.options.autoplay, e.autoPlay(), e.$slider.trigger("reInit", [e])
        }, e.prototype.resize = function () {
            var e = this;
            t(window).width() !== e.windowWidth && (clearTimeout(e.windowDelay), e.windowDelay = window.setTimeout(function () {
                e.windowWidth = t(window).width(), e.checkResponsive(), e.unslicked || e.setPosition()
            }, 50))
        }, e.prototype.removeSlide = e.prototype.slickRemove = function (t, e, n) {
            var i = this;
            return "boolean" == typeof t ? (e = t, t = e === !0 ? 0 : i.slideCount - 1) : t = e === !0 ? --t : t, i.slideCount < 1 || 0 > t || t > i.slideCount - 1 ? !1 : (i.unload(), n === !0 ? i.$slideTrack.children().remove() : i.$slideTrack.children(this.options.slide).eq(t).remove(), i.$slides = i.$slideTrack.children(this.options.slide), i.$slideTrack.children(this.options.slide).detach(), i.$slideTrack.append(i.$slides), i.$slidesCache = i.$slides, void i.reinit())
        }, e.prototype.setCSS = function (t) {
            var e, n, i = this,
                s = {};
            i.options.rtl === !0 && (t = -t), e = "left" == i.positionProp ? Math.ceil(t) + "px" : "0px", n = "top" == i.positionProp ? Math.ceil(t) + "px" : "0px", s[i.positionProp] = t, i.transformsEnabled === !1 ? i.$slideTrack.css(s) : (s = {}, i.cssTransitions === !1 ? (s[i.animType] = "translate(" + e + ", " + n + ")", i.$slideTrack.css(s)) : (s[i.animType] = "translate3d(" + e + ", " + n + ", 0px)", i.$slideTrack.css(s)))
        }, e.prototype.setDimensions = function () {
            var t = this;
            t.options.vertical === !1 ? t.options.centerMode === !0 && t.$list.css({
                padding: "0px " + t.options.centerPadding
            }) : (t.$list.height(t.$slides.first().outerHeight(!0) * t.options.slidesToShow), t.options.centerMode === !0 && t.$list.css({
                padding: t.options.centerPadding + " 0px"
            })), t.listWidth = t.$list.width(), t.listHeight = t.$list.height(), t.options.vertical === !1 && t.options.variableWidth === !1 ? (t.slideWidth = Math.ceil(t.listWidth / t.options.slidesToShow), t.$slideTrack.width(Math.ceil(t.slideWidth * t.$slideTrack.children(".slick-slide").length))) : t.options.variableWidth === !0 ? t.$slideTrack.width(5e3 * t.slideCount) : (t.slideWidth = Math.ceil(t.listWidth), t.$slideTrack.height(Math.ceil(t.$slides.first().outerHeight(!0) * t.$slideTrack.children(".slick-slide").length)));
            var e = t.$slides.first().outerWidth(!0) - t.$slides.first().width();
            t.options.variableWidth === !1 && t.$slideTrack.children(".slick-slide").width(t.slideWidth - e)
        }, e.prototype.setFade = function () {
            var e, n = this;
            n.$slides.each(function (i, s) {
                e = n.slideWidth * i * -1, n.options.rtl === !0 ? t(s).css({
                    position: "relative",
                    right: e,
                    top: 0,
                    zIndex: n.options.zIndex - 2,
                    opacity: 0
                }) : t(s).css({
                    position: "relative",
                    left: e,
                    top: 0,
                    zIndex: n.options.zIndex - 2,
                    opacity: 0
                })
            }), n.$slides.eq(n.currentSlide).css({
                zIndex: n.options.zIndex - 1,
                opacity: 1
            })
        }, e.prototype.setHeight = function () {
            var t = this;
            if (1 === t.options.slidesToShow && t.options.adaptiveHeight === !0 && t.options.vertical === !1) {
                var e = t.$slides.eq(t.currentSlide).outerHeight(!0);
                t.$list.css("height", e)
            }
        }, e.prototype.setOption = e.prototype.slickSetOption = function () {
            var e, n, i, s, o, r = this,
                a = !1;
            if ("object" === t.type(arguments[0]) ? (i = arguments[0], a = arguments[1], o = "multiple") : "string" === t.type(arguments[0]) && (i = arguments[0], s = arguments[1], a = arguments[2], "responsive" === arguments[0] && "array" === t.type(arguments[1]) ? o = "responsive" : "undefined" != typeof arguments[1] && (o = "single")), "single" === o) r.options[i] = s;
            else if ("multiple" === o) t.each(i, function (t, e) {
                r.options[t] = e
            });
            else if ("responsive" === o)
                for (n in s)
                    if ("array" !== t.type(r.options.responsive)) r.options.responsive = [s[n]];
                    else {
                        for (e = r.options.responsive.length - 1; e >= 0;) r.options.responsive[e].breakpoint === s[n].breakpoint && r.options.responsive.splice(e, 1), e--;
                        r.options.responsive.push(s[n])
                    }
            a && (r.unload(), r.reinit())
        }, e.prototype.setPosition = function () {
            var t = this;
            t.setDimensions(), t.setHeight(), t.options.fade === !1 ? t.setCSS(t.getLeft(t.currentSlide)) : t.setFade(), t.$slider.trigger("setPosition", [t])
        }, e.prototype.setProps = function () {
            var t = this,
                e = document.body.style;
            t.positionProp = t.options.vertical === !0 ? "top" : "left", "top" === t.positionProp ? t.$slider.addClass("slick-vertical") : t.$slider.removeClass("slick-vertical"), (void 0 !== e.WebkitTransition || void 0 !== e.MozTransition || void 0 !== e.msTransition) && t.options.useCSS === !0 && (t.cssTransitions = !0), t.options.fade && ("number" == typeof t.options.zIndex ? t.options.zIndex < 3 && (t.options.zIndex = 3) : t.options.zIndex = t.defaults.zIndex), void 0 !== e.OTransform && (t.animType = "OTransform", t.transformType = "-o-transform", t.transitionType = "OTransition", void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (t.animType = !1)), void 0 !== e.MozTransform && (t.animType = "MozTransform", t.transformType = "-moz-transform", t.transitionType = "MozTransition", void 0 === e.perspectiveProperty && void 0 === e.MozPerspective && (t.animType = !1)), void 0 !== e.webkitTransform && (t.animType = "webkitTransform", t.transformType = "-webkit-transform", t.transitionType = "webkitTransition", void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (t.animType = !1)), void 0 !== e.msTransform && (t.animType = "msTransform", t.transformType = "-ms-transform", t.transitionType = "msTransition", void 0 === e.msTransform && (t.animType = !1)), void 0 !== e.transform && t.animType !== !1 && (t.animType = "transform", t.transformType = "transform", t.transitionType = "transition"), t.transformsEnabled = t.options.useTransform && null !== t.animType && t.animType !== !1
        }, e.prototype.setSlideClasses = function (t) {
            var e, n, i, s, o = this;
            n = o.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"), o.$slides.eq(t).addClass("slick-current"), o.options.centerMode === !0 ? (e = Math.floor(o.options.slidesToShow / 2), o.options.infinite === !0 && (t >= e && t <= o.slideCount - 1 - e ? o.$slides.slice(t - e, t + e + 1).addClass("slick-active").attr("aria-hidden", "false") : (i = o.options.slidesToShow + t, n.slice(i - e + 1, i + e + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === t ? n.eq(n.length - 1 - o.options.slidesToShow).addClass("slick-center") : t === o.slideCount - 1 && n.eq(o.options.slidesToShow).addClass("slick-center")), o.$slides.eq(t).addClass("slick-center")) : t >= 0 && t <= o.slideCount - o.options.slidesToShow ? o.$slides.slice(t, t + o.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : n.length <= o.options.slidesToShow ? n.addClass("slick-active").attr("aria-hidden", "false") : (s = o.slideCount % o.options.slidesToShow, i = o.options.infinite === !0 ? o.options.slidesToShow + t : t, o.options.slidesToShow == o.options.slidesToScroll && o.slideCount - t < o.options.slidesToShow ? n.slice(i - (o.options.slidesToShow - s), i + s).addClass("slick-active").attr("aria-hidden", "false") : n.slice(i, i + o.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false")),
                "ondemand" === o.options.lazyLoad && o.lazyLoad()
        }, e.prototype.setupInfinite = function () {
            var e, n, i, s = this;
            if (s.options.fade === !0 && (s.options.centerMode = !1), s.options.infinite === !0 && s.options.fade === !1 && (n = null, s.slideCount > s.options.slidesToShow)) {
                for (i = s.options.centerMode === !0 ? s.options.slidesToShow + 1 : s.options.slidesToShow, e = s.slideCount; e > s.slideCount - i; e -= 1) n = e - 1, t(s.$slides[n]).clone(!0).attr("id", "").attr("data-slick-index", n - s.slideCount).prependTo(s.$slideTrack).addClass("slick-cloned");
                for (e = 0; i > e; e += 1) n = e, t(s.$slides[n]).clone(!0).attr("id", "").attr("data-slick-index", n + s.slideCount).appendTo(s.$slideTrack).addClass("slick-cloned");
                s.$slideTrack.find(".slick-cloned").find("[id]").each(function () {
                    t(this).attr("id", "")
                })
            }
        }, e.prototype.interrupt = function (t) {
            var e = this;
            t || e.autoPlay(), e.interrupted = t
        }, e.prototype.selectHandler = function (e) {
            var n = this,
                i = t(e.target).is(".slick-slide") ? t(e.target) : t(e.target).parents(".slick-slide"),
                s = parseInt(i.attr("data-slick-index"));
            return s || (s = 0), n.slideCount <= n.options.slidesToShow ? (n.setSlideClasses(s), void n.asNavFor(s)) : void n.slideHandler(s)
        }, e.prototype.slideHandler = function (t, e, n) {
            var i, s, o, r, a, l = null,
                u = this;
            return e = e || !1, u.animating === !0 && u.options.waitForAnimate === !0 || u.options.fade === !0 && u.currentSlide === t || u.slideCount <= u.options.slidesToShow ? void 0 : (e === !1 && u.asNavFor(t), i = t, l = u.getLeft(i), r = u.getLeft(u.currentSlide), u.currentLeft = null === u.swipeLeft ? r : u.swipeLeft, u.options.infinite === !1 && u.options.centerMode === !1 && (0 > t || t > u.getDotCount() * u.options.slidesToScroll) ? void(u.options.fade === !1 && (i = u.currentSlide, n !== !0 ? u.animateSlide(r, function () {
                u.postSlide(i)
            }) : u.postSlide(i))) : u.options.infinite === !1 && u.options.centerMode === !0 && (0 > t || t > u.slideCount - u.options.slidesToScroll) ? void(u.options.fade === !1 && (i = u.currentSlide, n !== !0 ? u.animateSlide(r, function () {
                u.postSlide(i)
            }) : u.postSlide(i))) : (u.options.autoplay && clearInterval(u.autoPlayTimer), s = 0 > i ? u.slideCount % u.options.slidesToScroll !== 0 ? u.slideCount - u.slideCount % u.options.slidesToScroll : u.slideCount + i : i >= u.slideCount ? u.slideCount % u.options.slidesToScroll !== 0 ? 0 : i - u.slideCount : i, u.animating = !0, u.$slider.trigger("beforeChange", [u, u.currentSlide, s]), o = u.currentSlide, u.currentSlide = s, u.setSlideClasses(u.currentSlide), u.options.asNavFor && (a = u.getNavTarget(), a = a.slick("getSlick"), a.slideCount <= a.options.slidesToShow && a.setSlideClasses(u.currentSlide)), u.updateDots(), u.updateArrows(), u.options.fade === !0 ? (n !== !0 ? (u.fadeSlideOut(o), u.fadeSlide(s, function () {
                u.postSlide(s)
            })) : u.postSlide(s), void u.animateHeight()) : void(n !== !0 ? u.animateSlide(l, function () {
                u.postSlide(s)
            }) : u.postSlide(s))))
        }, e.prototype.startLoad = function () {
            var t = this;
            t.options.arrows === !0 && t.slideCount > t.options.slidesToShow && (t.$prevArrow.hide(), t.$nextArrow.hide()), t.options.dots === !0 && t.slideCount > t.options.slidesToShow && t.$dots.hide(), t.$slider.addClass("slick-loading")
        }, e.prototype.swipeDirection = function () {
            var t, e, n, i, s = this;
            return t = s.touchObject.startX - s.touchObject.curX, e = s.touchObject.startY - s.touchObject.curY, n = Math.atan2(e, t), i = Math.round(180 * n / Math.PI), 0 > i && (i = 360 - Math.abs(i)), 45 >= i && i >= 0 ? s.options.rtl === !1 ? "left" : "right" : 360 >= i && i >= 315 ? s.options.rtl === !1 ? "left" : "right" : i >= 135 && 225 >= i ? s.options.rtl === !1 ? "right" : "left" : s.options.verticalSwiping === !0 ? i >= 35 && 135 >= i ? "down" : "up" : "vertical"
        }, e.prototype.swipeEnd = function (t) {
            var e, n, i = this;
            if (i.dragging = !1, i.interrupted = !1, i.shouldClick = i.touchObject.swipeLength > 10 ? !1 : !0, void 0 === i.touchObject.curX) return !1;
            if (i.touchObject.edgeHit === !0 && i.$slider.trigger("edge", [i, i.swipeDirection()]), i.touchObject.swipeLength >= i.touchObject.minSwipe) {
                switch (n = i.swipeDirection()) {
                    case "left":
                    case "down":
                        e = i.options.swipeToSlide ? i.checkNavigable(i.currentSlide + i.getSlideCount()) : i.currentSlide + i.getSlideCount(), i.currentDirection = 0;
                        break;
                    case "right":
                    case "up":
                        e = i.options.swipeToSlide ? i.checkNavigable(i.currentSlide - i.getSlideCount()) : i.currentSlide - i.getSlideCount(), i.currentDirection = 1
                }
                "vertical" != n && (i.slideHandler(e), i.touchObject = {}, i.$slider.trigger("swipe", [i, n]))
            } else i.touchObject.startX !== i.touchObject.curX && (i.slideHandler(i.currentSlide), i.touchObject = {})
        }, e.prototype.swipeHandler = function (t) {
            var e = this;
            if (!(e.options.swipe === !1 || "ontouchend" in document && e.options.swipe === !1 || e.options.draggable === !1 && -1 !== t.type.indexOf("mouse"))) switch (e.touchObject.fingerCount = t.originalEvent && void 0 !== t.originalEvent.touches ? t.originalEvent.touches.length : 1, e.touchObject.minSwipe = e.listWidth / e.options.touchThreshold, e.options.verticalSwiping === !0 && (e.touchObject.minSwipe = e.listHeight / e.options.touchThreshold), t.data.action) {
                case "start":
                    e.swipeStart(t);
                    break;
                case "move":
                    e.swipeMove(t);
                    break;
                case "end":
                    e.swipeEnd(t)
            }
        }, e.prototype.swipeMove = function (t) {
            var e, n, i, s, o, r = this;
            return o = void 0 !== t.originalEvent ? t.originalEvent.touches : null, !r.dragging || o && 1 !== o.length ? !1 : (e = r.getLeft(r.currentSlide), r.touchObject.curX = void 0 !== o ? o[0].pageX : t.clientX, r.touchObject.curY = void 0 !== o ? o[0].pageY : t.clientY, r.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(r.touchObject.curX - r.touchObject.startX, 2))), r.options.verticalSwiping === !0 && (r.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(r.touchObject.curY - r.touchObject.startY, 2)))), n = r.swipeDirection(), "vertical" !== n ? (void 0 !== t.originalEvent && r.touchObject.swipeLength > 4 && t.preventDefault(), s = (r.options.rtl === !1 ? 1 : -1) * (r.touchObject.curX > r.touchObject.startX ? 1 : -1), r.options.verticalSwiping === !0 && (s = r.touchObject.curY > r.touchObject.startY ? 1 : -1), i = r.touchObject.swipeLength, r.touchObject.edgeHit = !1, r.options.infinite === !1 && (0 === r.currentSlide && "right" === n || r.currentSlide >= r.getDotCount() && "left" === n) && (i = r.touchObject.swipeLength * r.options.edgeFriction, r.touchObject.edgeHit = !0), r.options.vertical === !1 ? r.swipeLeft = e + i * s : r.swipeLeft = e + i * (r.$list.height() / r.listWidth) * s, r.options.verticalSwiping === !0 && (r.swipeLeft = e + i * s), r.options.fade === !0 || r.options.touchMove === !1 ? !1 : r.animating === !0 ? (r.swipeLeft = null, !1) : void r.setCSS(r.swipeLeft)) : void 0)
        }, e.prototype.swipeStart = function (t) {
            var e, n = this;
            return n.interrupted = !0, 1 !== n.touchObject.fingerCount || n.slideCount <= n.options.slidesToShow ? (n.touchObject = {}, !1) : (void 0 !== t.originalEvent && void 0 !== t.originalEvent.touches && (e = t.originalEvent.touches[0]), n.touchObject.startX = n.touchObject.curX = void 0 !== e ? e.pageX : t.clientX, n.touchObject.startY = n.touchObject.curY = void 0 !== e ? e.pageY : t.clientY, void(n.dragging = !0))
        }, e.prototype.unfilterSlides = e.prototype.slickUnfilter = function () {
            var t = this;
            null !== t.$slidesCache && (t.unload(), t.$slideTrack.children(this.options.slide).detach(), t.$slidesCache.appendTo(t.$slideTrack), t.reinit())
        }, e.prototype.unload = function () {
            var e = this;
            t(".slick-cloned", e.$slider).remove(), e.$dots && e.$dots.remove(), e.$prevArrow && e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.remove(), e.$nextArrow && e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.remove(), e.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "")
        }, e.prototype.unslick = function (t) {
            var e = this;
            e.$slider.trigger("unslick", [e, t]), e.destroy()
        }, e.prototype.updateArrows = function () {
            var t, e = this;
            t = Math.floor(e.options.slidesToShow / 2), e.options.arrows === !0 && e.slideCount > e.options.slidesToShow && !e.options.infinite && (e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === e.currentSlide ? (e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : e.currentSlide >= e.slideCount - e.options.slidesToShow && e.options.centerMode === !1 ? (e.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : e.currentSlide >= e.slideCount - 1 && e.options.centerMode === !0 && (e.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")))
        }, e.prototype.updateDots = function () {
            var t = this;
            null !== t.$dots && (t.$dots.find("li").removeClass("slick-active").attr("aria-hidden", "true"), t.$dots.find("li").eq(Math.floor(t.currentSlide / t.options.slidesToScroll)).addClass("slick-active").attr("aria-hidden", "false"))
        }, e.prototype.visibility = function () {
            var t = this;
            t.options.autoplay && (document[t.hidden] ? t.interrupted = !0 : t.interrupted = !1)
        }, t.fn.slick = function () {
            var t, n, i = this,
                s = arguments[0],
                o = Array.prototype.slice.call(arguments, 1),
                r = i.length;
            for (t = 0; r > t; t++)
                if ("object" == typeof s || "undefined" == typeof s ? i[t].slick = new e(i[t], s) : n = i[t].slick[s].apply(i[t].slick, o), "undefined" != typeof n) return n;
            return i
        }
    }), $(function () {
        $(document).on("click", "button.promotion", function () {
            $(this).parents(".promotion-box").hide();
            const t = $(this).data("promotion");
            $.get("/promotions/" + t + "/dismiss")
        })
    });
var handlers = {};
window.registerHandler = function (t, e) {
        handlers[t] || (handlers[t] = []), handlers[t].push(e)
    }, window.dispatchEvent = function (t, e) {
        handlers[t] && handlers[t].forEach(function (t) {
            t(e)
        })
    }, window.createTrianglify = function (t, e, n) {
        var i = Trianglify({
                width: e,
                height: n,
                cell_size: 30,
                x_colors: "YlGnBu"
            }),
            s = i.canvas();
        s.className = "testimonials__trianglify";
        var o = t.childNodes[0];
        o instanceof window.HTMLCanvasElement ? t.replaceChild(s, o) : t.insertBefore(s, o)
    }, window.track = function (t, e, n) {
        var i = !1,
            s = _.isFunction(e) ? {} : e,
            o = 1250,
            r = window.analytics;
        return _.isUndefined(n) && _.isFunction(e) && (n = e), setTimeout(function () {
            _.isFunction(n) && !i && (i = !0, n())
        }, o), $.get("/current_user").then(function (e) {
            return s = _.merge({}, s, e), mixpanel && mixpanel.track && mixpanel.track(t, s), _dcq && _dcq.push(["track", t, s]), _.isUndefined(r) ? void(_.isFunction(n) && !i && (i = !0, n())) : void(r && r.track && r.track(t, s, function () {
                _.isFunction(n) && !i && (i = !0, n.apply(null, arguments))
            }))
        })
    },
    function (t) {
        function e() {
            t(".nav-tooltip").tooltip({
                selector: "[data-toggle=tooltip]",
                container: "body"
            })
        }
        t.fn.uniformHeight = function () {
            var e = 0,
                n = Math.max;
            return this.each(function () {
                t(this).css({
                    height: ""
                })
            }), this.each(function () {
                e = n(e, t(this).height())
            }).height(e)
        }, e(), t(window).bind("page:change", function () {
            e()
        })
    }(jQuery),
    function (t) {
        t.fn.exists = function () {
            return 0 !== this.length
        }, t(document).ready(function () {
            function e() {
                t.cookie("", o, {
                    secure: f,
                    path: "/",
                    expires: 365
                })
            }

            function n(t, n) {
                e()
            }

            function i() {
                l.removeClass("active"), a.addClass("active"), u.removeClass("active"), c.addClass("active"), o.view_as_list = !0, n(c, u)
            }

            function s() {
                a.removeClass("active"), l.addClass("active"), c.removeClass("active"), u.addClass("active"), o.view_as_list = !1, n(u, c)
            }
            var o, r, a = t("#select-list"),
                l = t("#select-thumbs"),
                u = t("#lesson-thumbs"),
                c = t("#lesson-list"),
                h = t("#new-lesson-thumbs"),
                d = t("#new-lesson-list"),
                f = "https:" === window.location.protocol,
                p = !0;
            t.cookie.json = !0, u = h.exists() ? h : u, c = d.exists() ? d : c, u.exists() && c.exists() && (o = t.cookie("egghead_prefs"), r = t.cookie("egghead_session"), o || (o = {
                view_as_list: p
            }, t.cookie("egghead_prefs", o, {
                secure: f,
                path: "/",
                expires: 365
            })), r || (r = {
                has_session: !0
            }, t.cookie("egghead_session", r, {
                secure: f,
                path: "/",
                expires: 365
            }), track("New Session")), u && (a.click(i), l.click(s), o.view_as_list === !0 ? i() : s()))
        }), t.fn.scrollTo = function (e, n, i) {
            "function" == typeof n && 2 == arguments.length && (i = n, n = e);
            var s = t.extend({
                scrollTarget: e,
                offsetTop: 50,
                duration: 500,
                easing: "swing"
            }, n);
            return this.each(function () {
                var e = t(this),
                    n = "number" == typeof s.scrollTarget ? s.scrollTarget : t(s.scrollTarget),
                    o = "number" == typeof n ? n : n.offset().top + e.scrollTop() - parseInt(s.offsetTop);
                e.animate({
                    scrollTop: o
                }, parseInt(s.duration), s.easing, function () {
                    "function" == typeof i && i.call(this)
                })
            })
        }, t(function () {
            t(".truncate").succinct({
                size: 120
            })
        }), t(function () {
            function e(t) {
                var e = "";
                t.length > 0 && (e = t.val(), e && (window.location.href = "/search?q=" + encodeURI(e)))
            }
            t(".search-field__input").keypress(function (n) {
                var i = t(this);
                13 == n.which && e(i)
            }), t(".search-field__submit").click(function (n) {
                var i = t(this),
                    s = i.siblings(".search-field__input");
                e(s)
            })
        })
    }(jQuery),
    function (t) {
        t.QueryString = function (t) {
            if ("" == t) return {};
            for (var e = {}, n = 0; n < t.length; ++n) {
                var i = t[n].split("=");
                2 == i.length && (e[i[0]] = decodeURIComponent(i[1].replace(/\+/g, " ")))
            }
            return e
        }(window.location.search.substr(1).split("&"))
    }(jQuery);