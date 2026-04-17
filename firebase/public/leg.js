var pa = Object.defineProperty,
  ua = Object.defineProperties
var Aa = Object.getOwnPropertyDescriptors
var Me = Object.getOwnPropertySymbols
var ga = Object.prototype.hasOwnProperty,
  va = Object.prototype.propertyIsEnumerable
var me = (a, e, o) =>
    e in a
      ? pa(a, e, { enumerable: !0, configurable: !0, writable: !0, value: o })
      : (a[e] = o),
  E = (a, e) => {
    for (var o in e || (e = {})) ga.call(e, o) && me(a, o, e[o])
    if (Me) for (var o of Me(e)) va.call(e, o) && me(a, o, e[o])
    return a
  },
  w = (a, e) => ua(a, Aa(e))
var b = (a, e, o) => me(a, typeof e != 'symbol' ? e + '' : e, o)
var oe,
  O,
  Ue,
  fa,
  k,
  xe,
  Fe,
  Le,
  Be,
  ge,
  pe,
  ue,
  Ia,
  Y = {},
  ee = [],
  ha = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,
  re = Array.isArray
function M(a, e) {
  for (var o in e) a[o] = e[o]
  return a
}
function ve(a) {
  a && a.parentNode && a.parentNode.removeChild(a)
}
function ba(a, e, o) {
  var i,
    r,
    n,
    t = {}
  for (n in e) n == 'key' ? (i = e[n]) : n == 'ref' ? (r = e[n]) : (t[n] = e[n])
  if (
    (arguments.length > 2 &&
      (t.children = arguments.length > 3 ? oe.call(arguments, 2) : o),
    typeof a == 'function' && a.defaultProps != null)
  )
    for (n in a.defaultProps) t[n] === void 0 && (t[n] = a.defaultProps[n])
  return W(a, t, i, r, null)
}
function W(a, e, o, i, r) {
  var n = {
    type: a,
    props: e,
    key: o,
    ref: i,
    __k: null,
    __: null,
    __b: 0,
    __e: null,
    __c: null,
    constructor: void 0,
    __v: r == null ? ++Ue : r,
    __i: -1,
    __u: 0,
  }
  return r == null && O.vnode != null && O.vnode(n), n
}
function j(a) {
  return a.children
}
function K(a, e) {
  ;(this.props = a), (this.context = e)
}
function y(a, e) {
  if (e == null) return a.__ ? y(a.__, a.__i + 1) : null
  for (var o; e < a.__k.length; e++)
    if ((o = a.__k[e]) != null && o.__e != null) return o.__e
  return typeof a.type == 'function' ? y(a) : null
}
function Sa(a) {
  if (a.__P && a.__d) {
    var e = a.__v,
      o = e.__e,
      i = [],
      r = [],
      n = M({}, e)
    ;(n.__v = e.__v + 1),
      O.vnode && O.vnode(n),
      fe(
        a.__P,
        n,
        e,
        a.__n,
        a.__P.namespaceURI,
        32 & e.__u ? [o] : null,
        i,
        o == null ? y(e) : o,
        !!(32 & e.__u),
        r,
      ),
      (n.__v = e.__v),
      (n.__.__k[n.__i] = n),
      Ge(i, n, r),
      (e.__e = e.__ = null),
      n.__e != o && we(n)
  }
}
function we(a) {
  if ((a = a.__) != null && a.__c != null)
    return (
      (a.__e = a.__c.base = null),
      a.__k.some((e) => {
        if (e != null && e.__e != null) return (a.__e = a.__c.base = e.__e)
      }),
      we(a)
    )
}
function ze(a) {
  ;((!a.__d && (a.__d = !0) && k.push(a) && !ae.__r++) ||
    xe != O.debounceRendering) &&
    ((xe = O.debounceRendering) || Fe)(ae)
}
function ae() {
  for (var a, e = 1; k.length; )
    k.length > e && k.sort(Le), (a = k.shift()), (e = k.length), Sa(a)
  ae.__r = 0
}
function ye(a, e, o, i, r, n, t, s, l, d, m) {
  var c,
    u,
    A,
    p,
    S,
    g,
    h,
    v = (i && i.__k) || ee,
    D = e.length
  for (l = Oa(o, e, v, l, D), c = 0; c < D; c++)
    (A = o.__k[c]) != null &&
      ((u = (A.__i != -1 && v[A.__i]) || Y),
      (A.__i = c),
      (g = fe(a, A, u, r, n, t, s, l, d, m)),
      (p = A.__e),
      A.ref &&
        u.ref != A.ref &&
        (u.ref && Ie(u.ref, null, A), m.push(A.ref, A.__c || p, A)),
      S == null && p != null && (S = p),
      (h = !!(4 & A.__u)) || u.__k === A.__k
        ? (l = je(A, l, a, h))
        : typeof A.type == 'function' && g !== void 0
          ? (l = g)
          : p && (l = p.nextSibling),
      (A.__u &= -7))
  return (o.__e = S), l
}
function Oa(a, e, o, i, r) {
  var n,
    t,
    s,
    l,
    d,
    m = o.length,
    c = m,
    u = 0
  for (a.__k = new Array(r), n = 0; n < r; n++)
    (t = e[n]) != null && typeof t != 'boolean' && typeof t != 'function'
      ? (typeof t == 'string' ||
        typeof t == 'number' ||
        typeof t == 'bigint' ||
        t.constructor == String
          ? (t = a.__k[n] = W(null, t, null, null, null))
          : re(t)
            ? (t = a.__k[n] = W(j, { children: t }, null, null, null))
            : t.constructor === void 0 && t.__b > 0
              ? (t = a.__k[n] =
                  W(t.type, t.props, t.key, t.ref ? t.ref : null, t.__v))
              : (a.__k[n] = t),
        (l = n + u),
        (t.__ = a),
        (t.__b = a.__b + 1),
        (s = null),
        (d = t.__i = Pa(t, o, l, c)) != -1 && (c--, (s = o[d]) && (s.__u |= 2)),
        s == null || s.__v == null
          ? (d == -1 && (r > m ? u-- : r < m && u++),
            typeof t.type != 'function' && (t.__u |= 4))
          : d != l &&
            (d == l - 1
              ? u--
              : d == l + 1
                ? u++
                : (d > l ? u-- : u++, (t.__u |= 4))))
      : (a.__k[n] = null)
  if (c)
    for (n = 0; n < m; n++)
      (s = o[n]) != null &&
        (2 & s.__u) == 0 &&
        (s.__e == i && (i = y(s)), He(s, s))
  return i
}
function je(a, e, o, i) {
  var r, n
  if (typeof a.type == 'function') {
    for (r = a.__k, n = 0; r && n < r.length; n++)
      r[n] && ((r[n].__ = a), (e = je(r[n], e, o, i)))
    return e
  }
  a.__e != e &&
    (i &&
      (e && a.type && !e.parentNode && (e = y(a)),
      o.insertBefore(a.__e, e || null)),
    (e = a.__e))
  do e = e && e.nextSibling
  while (e != null && e.nodeType == 8)
  return e
}
function Pa(a, e, o, i) {
  var r,
    n,
    t,
    s = a.key,
    l = a.type,
    d = e[o],
    m = d != null && (2 & d.__u) == 0
  if ((d === null && s == null) || (m && s == d.key && l == d.type)) return o
  if (i > (m ? 1 : 0)) {
    for (r = o - 1, n = o + 1; r >= 0 || n < e.length; )
      if (
        (d = e[(t = r >= 0 ? r-- : n++)]) != null &&
        (2 & d.__u) == 0 &&
        s == d.key &&
        l == d.type
      )
        return t
  }
  return -1
}
function Ve(a, e, o) {
  e[0] == '-'
    ? a.setProperty(e, o == null ? '' : o)
    : (a[e] =
        o == null ? '' : typeof o != 'number' || ha.test(e) ? o : o + 'px')
}
function Q(a, e, o, i, r) {
  var n, t
  e: if (e == 'style')
    if (typeof o == 'string') a.style.cssText = o
    else {
      if ((typeof i == 'string' && (a.style.cssText = i = ''), i))
        for (e in i) (o && e in o) || Ve(a.style, e, '')
      if (o) for (e in o) (i && o[e] == i[e]) || Ve(a.style, e, o[e])
    }
  else if (e[0] == 'o' && e[1] == 'n')
    (n = e != (e = e.replace(Be, '$1'))),
      (t = e.toLowerCase()),
      (e =
        t in a || e == 'onFocusOut' || e == 'onFocusIn'
          ? t.slice(2)
          : e.slice(2)),
      a.l || (a.l = {}),
      (a.l[e + n] = o),
      o
        ? i
          ? (o.u = i.u)
          : ((o.u = ge), a.addEventListener(e, n ? ue : pe, n))
        : a.removeEventListener(e, n ? ue : pe, n)
  else {
    if (r == 'http://www.w3.org/2000/svg')
      e = e.replace(/xlink(H|:h)/, 'h').replace(/sName$/, 's')
    else if (
      e != 'width' &&
      e != 'height' &&
      e != 'href' &&
      e != 'list' &&
      e != 'form' &&
      e != 'tabIndex' &&
      e != 'download' &&
      e != 'rowSpan' &&
      e != 'colSpan' &&
      e != 'role' &&
      e != 'popover' &&
      e in a
    )
      try {
        a[e] = o == null ? '' : o
        break e
      } catch (s) {}
    typeof o == 'function' ||
      (o == null || (o === !1 && e[4] != '-')
        ? a.removeAttribute(e)
        : a.setAttribute(e, e == 'popover' && o == 1 ? '' : o))
  }
}
function ke(a) {
  return function (e) {
    if (this.l) {
      var o = this.l[e.type + a]
      if (e.t == null) e.t = ge++
      else if (e.t < o.u) return
      return o(O.event ? O.event(e) : e)
    }
  }
}
function fe(a, e, o, i, r, n, t, s, l, d) {
  var m,
    c,
    u,
    A,
    p,
    S,
    g,
    h,
    v,
    D,
    R,
    V,
    J,
    x,
    N,
    T = e.type
  if (e.constructor !== void 0) return null
  128 & o.__u && ((l = !!(32 & o.__u)), (n = [(s = e.__e = o.__e)])),
    (m = O.__b) && m(e)
  e: if (typeof T == 'function')
    try {
      if (
        ((h = e.props),
        (v = 'prototype' in T && T.prototype.render),
        (D = (m = T.contextType) && i[m.__c]),
        (R = m ? (D ? D.props.value : m.__) : i),
        o.__c
          ? (g = (c = e.__c = o.__c).__ = c.__E)
          : (v
              ? (e.__c = c = new T(h, R))
              : ((e.__c = c = new K(h, R)),
                (c.constructor = T),
                (c.render = Da)),
            D && D.sub(c),
            c.state || (c.state = {}),
            (c.__n = i),
            (u = c.__d = !0),
            (c.__h = []),
            (c._sb = [])),
        v && c.__s == null && (c.__s = c.state),
        v &&
          T.getDerivedStateFromProps != null &&
          (c.__s == c.state && (c.__s = M({}, c.__s)),
          M(c.__s, T.getDerivedStateFromProps(h, c.__s))),
        (A = c.props),
        (p = c.state),
        (c.__v = e),
        u)
      )
        v &&
          T.getDerivedStateFromProps == null &&
          c.componentWillMount != null &&
          c.componentWillMount(),
          v && c.componentDidMount != null && c.__h.push(c.componentDidMount)
      else {
        if (
          (v &&
            T.getDerivedStateFromProps == null &&
            h !== A &&
            c.componentWillReceiveProps != null &&
            c.componentWillReceiveProps(h, R),
          e.__v == o.__v ||
            (!c.__e &&
              c.shouldComponentUpdate != null &&
              c.shouldComponentUpdate(h, c.__s, R) === !1))
        ) {
          e.__v != o.__v && ((c.props = h), (c.state = c.__s), (c.__d = !1)),
            (e.__e = o.__e),
            (e.__k = o.__k),
            e.__k.some((B) => {
              B && (B.__ = e)
            }),
            ee.push.apply(c.__h, c._sb),
            (c._sb = []),
            c.__h.length && t.push(c)
          break e
        }
        c.componentWillUpdate != null && c.componentWillUpdate(h, c.__s, R),
          v &&
            c.componentDidUpdate != null &&
            c.__h.push(() => {
              c.componentDidUpdate(A, p, S)
            })
      }
      if (
        ((c.context = R),
        (c.props = h),
        (c.__P = a),
        (c.__e = !1),
        (V = O.__r),
        (J = 0),
        v)
      )
        (c.state = c.__s),
          (c.__d = !1),
          V && V(e),
          (m = c.render(c.props, c.state, c.context)),
          ee.push.apply(c.__h, c._sb),
          (c._sb = [])
      else
        do
          (c.__d = !1),
            V && V(e),
            (m = c.render(c.props, c.state, c.context)),
            (c.state = c.__s)
        while (c.__d && ++J < 25)
      ;(c.state = c.__s),
        c.getChildContext != null && (i = M(M({}, i), c.getChildContext())),
        v &&
          !u &&
          c.getSnapshotBeforeUpdate != null &&
          (S = c.getSnapshotBeforeUpdate(A, p)),
        (x =
          m != null && m.type === j && m.key == null
            ? $e(m.props.children)
            : m),
        (s = ye(a, re(x) ? x : [x], e, o, i, r, n, t, s, l, d)),
        (c.base = e.__e),
        (e.__u &= -161),
        c.__h.length && t.push(c),
        g && (c.__E = c.__ = null)
    } catch (B) {
      if (((e.__v = null), l || n != null))
        if (B.then) {
          for (e.__u |= l ? 160 : 128; s && s.nodeType == 8 && s.nextSibling; )
            s = s.nextSibling
          ;(n[n.indexOf(s)] = null), (e.__e = s)
        } else {
          for (N = n.length; N--; ) ve(n[N])
          Ae(e)
        }
      else (e.__e = o.__e), (e.__k = o.__k), B.then || Ae(e)
      O.__e(B, e, o)
    }
  else
    n == null && e.__v == o.__v
      ? ((e.__k = o.__k), (e.__e = o.__e))
      : (s = e.__e = Ea(o.__e, e, o, i, r, n, t, l, d))
  return (m = O.diffed) && m(e), 128 & e.__u ? void 0 : s
}
function Ae(a) {
  a && (a.__c && (a.__c.__e = !0), a.__k && a.__k.some(Ae))
}
function Ge(a, e, o) {
  for (var i = 0; i < o.length; i++) Ie(o[i], o[++i], o[++i])
  O.__c && O.__c(e, a),
    a.some((r) => {
      try {
        ;(a = r.__h),
          (r.__h = []),
          a.some((n) => {
            n.call(r)
          })
      } catch (n) {
        O.__e(n, r.__v)
      }
    })
}
function $e(a) {
  return typeof a != 'object' || a == null || a.__b > 0
    ? a
    : re(a)
      ? a.map($e)
      : M({}, a)
}
function Ea(a, e, o, i, r, n, t, s, l) {
  var d,
    m,
    c,
    u,
    A,
    p,
    S,
    g = o.props || Y,
    h = e.props,
    v = e.type
  if (
    (v == 'svg'
      ? (r = 'http://www.w3.org/2000/svg')
      : v == 'math'
        ? (r = 'http://www.w3.org/1998/Math/MathML')
        : r || (r = 'http://www.w3.org/1999/xhtml'),
    n != null)
  ) {
    for (d = 0; d < n.length; d++)
      if (
        (A = n[d]) &&
        'setAttribute' in A == !!v &&
        (v ? A.localName == v : A.nodeType == 3)
      ) {
        ;(a = A), (n[d] = null)
        break
      }
  }
  if (a == null) {
    if (v == null) return document.createTextNode(h)
    ;(a = document.createElementNS(r, v, h.is && h)),
      s && (O.__m && O.__m(e, n), (s = !1)),
      (n = null)
  }
  if (v == null) g === h || (s && a.data == h) || (a.data = h)
  else {
    if (((n = n && oe.call(a.childNodes)), !s && n != null))
      for (g = {}, d = 0; d < a.attributes.length; d++)
        g[(A = a.attributes[d]).name] = A.value
    for (d in g)
      (A = g[d]),
        d == 'dangerouslySetInnerHTML'
          ? (c = A)
          : d == 'children' ||
            d in h ||
            (d == 'value' && 'defaultValue' in h) ||
            (d == 'checked' && 'defaultChecked' in h) ||
            Q(a, d, null, A, r)
    for (d in h)
      (A = h[d]),
        d == 'children'
          ? (u = A)
          : d == 'dangerouslySetInnerHTML'
            ? (m = A)
            : d == 'value'
              ? (p = A)
              : d == 'checked'
                ? (S = A)
                : (s && typeof A != 'function') ||
                  g[d] === A ||
                  Q(a, d, A, g[d], r)
    if (m)
      s ||
        (c && (m.__html == c.__html || m.__html == a.innerHTML)) ||
        (a.innerHTML = m.__html),
        (e.__k = [])
    else if (
      (c && (a.innerHTML = ''),
      ye(
        e.type == 'template' ? a.content : a,
        re(u) ? u : [u],
        e,
        o,
        i,
        v == 'foreignObject' ? 'http://www.w3.org/1999/xhtml' : r,
        n,
        t,
        n ? n[0] : o.__k && y(o, 0),
        s,
        l,
      ),
      n != null)
    )
      for (d = n.length; d--; ) ve(n[d])
    s ||
      ((d = 'value'),
      v == 'progress' && p == null
        ? a.removeAttribute('value')
        : p != null &&
          (p !== a[d] ||
            (v == 'progress' && !p) ||
            (v == 'option' && p != g[d])) &&
          Q(a, d, p, g[d], r),
      (d = 'checked'),
      S != null && S != a[d] && Q(a, d, S, g[d], r))
  }
  return a
}
function Ie(a, e, o) {
  try {
    if (typeof a == 'function') {
      var i = typeof a.__u == 'function'
      i && a.__u(), (i && e == null) || (a.__u = a(e))
    } else a.current = e
  } catch (r) {
    O.__e(r, o)
  }
}
function He(a, e, o) {
  var i, r
  if (
    (O.unmount && O.unmount(a),
    (i = a.ref) && ((i.current && i.current != a.__e) || Ie(i, null, e)),
    (i = a.__c) != null)
  ) {
    if (i.componentWillUnmount)
      try {
        i.componentWillUnmount()
      } catch (n) {
        O.__e(n, e)
      }
    i.base = i.__P = null
  }
  if ((i = a.__k))
    for (r = 0; r < i.length; r++)
      i[r] && He(i[r], e, o || typeof a.type != 'function')
  o || ve(a.__e), (a.__c = a.__ = a.__e = void 0)
}
function Da(a, e, o) {
  return this.constructor(a, o)
}
function Xe(a, e, o) {
  var i, r, n, t
  e == document && (e = document.documentElement),
    O.__ && O.__(a, e),
    (r = (i = typeof o == 'function') ? null : (o && o.__k) || e.__k),
    (n = []),
    (t = []),
    fe(
      e,
      (a = ((!i && o) || e).__k = ba(j, null, [a])),
      r || Y,
      Y,
      e.namespaceURI,
      !i && o ? [o] : r ? null : e.firstChild ? oe.call(e.childNodes) : null,
      n,
      !i && o ? o : r ? r.__e : e.firstChild,
      i,
      t,
    ),
    Ge(n, a, t)
}
;(oe = ee.slice),
  (O = {
    __e: (a, e, o, i) => {
      for (var r, n, t; (e = e.__); )
        if ((r = e.__c) && !r.__)
          try {
            if (
              ((n = r.constructor) &&
                n.getDerivedStateFromError != null &&
                (r.setState(n.getDerivedStateFromError(a)), (t = r.__d)),
              r.componentDidCatch != null &&
                (r.componentDidCatch(a, i || {}), (t = r.__d)),
              t)
            )
              return (r.__E = r)
          } catch (s) {
            a = s
          }
      throw a
    },
  }),
  (Ue = 0),
  (fa = (a) => a != null && a.constructor === void 0),
  (K.prototype.setState = function (a, e) {
    var o
    ;(o =
      this.__s != null && this.__s != this.state
        ? this.__s
        : (this.__s = M({}, this.state))),
      typeof a == 'function' && (a = a(M({}, o), this.props)),
      a && M(o, a),
      a != null && this.__v && (e && this._sb.push(e), ze(this))
  }),
  (K.prototype.forceUpdate = function (a) {
    this.__v && ((this.__e = !0), a && this.__h.push(a), ze(this))
  }),
  (K.prototype.render = j),
  (k = []),
  (Fe =
    typeof Promise == 'function'
      ? Promise.prototype.then.bind(Promise.resolve())
      : setTimeout),
  (Le = (a, e) => a.__v.__b - e.__v.__b),
  (ae.__r = 0),
  (Be = /(PointerCapture)$|Capture$/i),
  (ge = 0),
  (pe = ke(!1)),
  (ue = ke(!0)),
  (Ia = 0)
function Oe() {
  return {
    async: !1,
    breaks: !1,
    extensions: null,
    gfm: !0,
    hooks: null,
    pedantic: !1,
    renderer: null,
    silent: !1,
    tokenizer: null,
    walkTokens: null,
  }
}
var L = Oe()
function aa(a) {
  L = a
}
var U = { exec: () => null }
function f(a, e = '') {
  let o = typeof a == 'string' ? a : a.source,
    i = {
      replace: (r, n) => {
        let t = typeof n == 'string' ? n : n.source
        return (t = t.replace(P.caret, '$1')), (o = o.replace(r, t)), i
      },
      getRegex: () => new RegExp(o, e),
    }
  return i
}
var _a = (() => {
    try {
      return !!/(?<=1)(?<!1)/
    } catch (a) {
      return !1
    }
  })(),
  P = {
    codeRemoveIndent: /^(?: {1,4}| {0,3}\t)/gm,
    outputLinkReplace: /\\([[\]])/g,
    indentCodeCompensation: /^(\s+)(?:```)/,
    beginningSpace: /^\s+/,
    endingHash: /#$/,
    startingSpaceChar: /^ /,
    endingSpaceChar: / $/,
    nonSpaceChar: /[^ ]/,
    newLineCharGlobal: /\n/g,
    tabCharGlobal: /\t/g,
    multipleSpaceGlobal: /\s+/g,
    blankLine: /^[ \t]*$/,
    doubleBlankLine: /\n[ \t]*\n[ \t]*$/,
    blockquoteStart: /^ {0,3}>/,
    blockquoteSetextReplace: /\n {0,3}((?:=+|-+) *)(?=\n|$)/g,
    blockquoteSetextReplace2: /^ {0,3}>[ \t]?/gm,
    listReplaceNesting: /^ {1,4}(?=( {4})*[^ ])/g,
    listIsTask: /^\[[ xX]\] +\S/,
    listReplaceTask: /^\[[ xX]\] +/,
    listTaskCheckbox: /\[[ xX]\]/,
    anyLine: /\n.*\n/,
    hrefBrackets: /^<(.*)>$/,
    tableDelimiter: /[:|]/,
    tableAlignChars: /^\||\| *$/g,
    tableRowBlankLine: /\n[ \t]*$/,
    tableAlignRight: /^ *-+: *$/,
    tableAlignCenter: /^ *:-+: *$/,
    tableAlignLeft: /^ *:-+ *$/,
    startATag: /^<a /i,
    endATag: /^<\/a>/i,
    startPreScriptTag: /^<(pre|code|kbd|script)(\s|>)/i,
    endPreScriptTag: /^<\/(pre|code|kbd|script)(\s|>)/i,
    startAngleBracket: /^</,
    endAngleBracket: />$/,
    pedanticHrefTitle: /^([^'"]*[^\s])\s+(['"])(.*)\2/,
    unicodeAlphaNumeric: /[\p{L}\p{N}]/u,
    escapeTest: /[&<>"']/,
    escapeReplace: /[&<>"']/g,
    escapeTestNoEncode: /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,
    escapeReplaceNoEncode: /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,
    caret: /(^|[^[])\^/g,
    percentDecode: /%25/g,
    findPipe: /\|/g,
    splitPipe: / \|/,
    slashPipe: /\\\|/g,
    carriageReturn: /\r\n|\r/g,
    spaceLine: /^ +$/gm,
    notSpaceStart: /^\S*/,
    endingNewline: /\n$/,
    listItemRegex: (a) =>
      new RegExp(`^( {0,3}${a})((?:[	 ][^\\n]*)?(?:\\n|$))`),
    nextBulletRegex: (a) =>
      new RegExp(
        `^ {0,${Math.min(3, a - 1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`,
      ),
    hrRegex: (a) =>
      new RegExp(
        `^ {0,${Math.min(3, a - 1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`,
      ),
    fencesBeginRegex: (a) =>
      new RegExp(`^ {0,${Math.min(3, a - 1)}}(?:\`\`\`|~~~)`),
    headingBeginRegex: (a) => new RegExp(`^ {0,${Math.min(3, a - 1)}}#`),
    htmlBeginRegex: (a) =>
      new RegExp(`^ {0,${Math.min(3, a - 1)}}<(?:[a-z].*>|!--)`, 'i'),
    blockquoteBeginRegex: (a) => new RegExp(`^ {0,${Math.min(3, a - 1)}}>`),
  },
  Ca = /^(?:[ \t]*(?:\n|$))+/,
  Ra = /^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,
  Ta =
    /^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,
  Z = /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,
  qa = /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,
  Pe = / {0,3}(?:[*+-]|\d{1,9}[.)])/,
  oa =
    /^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
  ra = f(oa)
    .replace(/bull/g, Pe)
    .replace(/blockCode/g, /(?: {4}| {0,3}\t)/)
    .replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/)
    .replace(/blockquote/g, / {0,3}>/)
    .replace(/heading/g, / {0,3}#{1,6}/)
    .replace(/html/g, / {0,3}<[^\n>]+>\n/)
    .replace(/\|table/g, '')
    .getRegex(),
  Na = f(oa)
    .replace(/bull/g, Pe)
    .replace(/blockCode/g, /(?: {4}| {0,3}\t)/)
    .replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/)
    .replace(/blockquote/g, / {0,3}>/)
    .replace(/heading/g, / {0,3}#{1,6}/)
    .replace(/html/g, / {0,3}<[^\n>]+>\n/)
    .replace(/table/g, / {0,3}\|?(?:[:\- ]*\|)+[:\- ]*\n/)
    .getRegex(),
  Ee =
    /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,
  Ma = /^[^\n]+/,
  De = /(?!\s*\])(?:\\[\s\S]|[^[\]\\])+/,
  xa = f(
    /^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/,
  )
    .replace('label', De)
    .replace(
      'title',
      /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/,
    )
    .getRegex(),
  za = f(/^(bull)([ \t][^\n]+?)?(?:\n|$)/)
    .replace(/bull/g, Pe)
    .getRegex(),
  ce =
    'address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul',
  _e = /<!--(?:-?>|[\s\S]*?(?:-->|$))/,
  Va = f(
    '^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))',
    'i',
  )
    .replace('comment', _e)
    .replace('tag', ce)
    .replace(
      'attribute',
      / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/,
    )
    .getRegex(),
  ia = f(Ee)
    .replace('hr', Z)
    .replace('heading', ' {0,3}#{1,6}(?:\\s|$)')
    .replace('|lheading', '')
    .replace('|table', '')
    .replace('blockquote', ' {0,3}>')
    .replace('fences', ' {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n')
    .replace('list', ' {0,3}(?:[*+-]|1[.)])[ \\t]')
    .replace(
      'html',
      '</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)',
    )
    .replace('tag', ce)
    .getRegex(),
  ka = f(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/)
    .replace('paragraph', ia)
    .getRegex(),
  Ce = {
    blockquote: ka,
    code: Ra,
    def: xa,
    fences: Ta,
    heading: qa,
    hr: Z,
    html: Va,
    lheading: ra,
    list: za,
    newline: Ca,
    paragraph: ia,
    table: U,
    text: Ma,
  },
  Ze = f(
    '^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)',
  )
    .replace('hr', Z)
    .replace('heading', ' {0,3}#{1,6}(?:\\s|$)')
    .replace('blockquote', ' {0,3}>')
    .replace('code', '(?: {4}| {0,3}	)[^\\n]')
    .replace('fences', ' {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n')
    .replace('list', ' {0,3}(?:[*+-]|1[.)])[ \\t]')
    .replace(
      'html',
      '</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)',
    )
    .replace('tag', ce)
    .getRegex(),
  Ua = w(E({}, Ce), {
    lheading: Na,
    table: Ze,
    paragraph: f(Ee)
      .replace('hr', Z)
      .replace('heading', ' {0,3}#{1,6}(?:\\s|$)')
      .replace('|lheading', '')
      .replace('table', Ze)
      .replace('blockquote', ' {0,3}>')
      .replace('fences', ' {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n')
      .replace('list', ' {0,3}(?:[*+-]|1[.)])[ \\t]')
      .replace(
        'html',
        '</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)',
      )
      .replace('tag', ce)
      .getRegex(),
  }),
  Fa = w(E({}, Ce), {
    html: f(
      `^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`,
    )
      .replace('comment', _e)
      .replace(
        /tag/g,
        '(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b',
      )
      .getRegex(),
    def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
    heading: /^(#{1,6})(.*)(?:\n+|$)/,
    fences: U,
    lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
    paragraph: f(Ee)
      .replace('hr', Z)
      .replace(
        'heading',
        ` *#{1,6} *[^
]`,
      )
      .replace('lheading', ra)
      .replace('|table', '')
      .replace('blockquote', ' {0,3}>')
      .replace('|fences', '')
      .replace('|list', '')
      .replace('|html', '')
      .replace('|tag', '')
      .getRegex(),
  }),
  La = /^\\([!"#$%&'()*+,\-./:;<=>?@[\]\\^_`{|}~])/,
  Ba = /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,
  na = /^( {2,}|\\)\n(?!\s*$)/,
  wa =
    /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<![`*_]|\b_|$)|[^ ](?= {2,}\n)))/,
  G = /[\p{P}\p{S}]/u,
  le = /[\s\p{P}\p{S}]/u,
  Re = /[^\s\p{P}\p{S}]/u,
  ya = f(/^((?![*_])punctSpace)/, 'u')
    .replace(/punctSpace/g, le)
    .getRegex(),
  sa = /(?!~)[\p{P}\p{S}]/u,
  ja = /(?!~)[\s\p{P}\p{S}]/u,
  Ga = /(?:[^\s\p{P}\p{S}]|~)/u,
  $a = f(/link|precode-code|html/, 'g')
    .replace(
      'link',
      /\[(?:[^[\]`]|(?<a>`+)[^`]+\k<a>(?!`))*?\]\((?:\\[\s\S]|[^\\()]|\((?:\\[\s\S]|[^\\()])*\))*\)/,
    )
    .replace('precode-', _a ? '(?<!`)()' : '(^^|[^`])')
    .replace('code', /(?<b>`+)[^`]+\k<b>(?!`)/)
    .replace('html', /<(?! )[^<>]*?>/)
    .getRegex(),
  ta = /^(?:\*+(?:((?!\*)punct)|([^\s*]))?)|^_+(?:((?!_)punct)|([^\s_]))?/,
  Ha = f(ta, 'u').replace(/punct/g, G).getRegex(),
  Xa = f(ta, 'u').replace(/punct/g, sa).getRegex(),
  da =
    '^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)',
  Za = f(da, 'gu')
    .replace(/notPunctSpace/g, Re)
    .replace(/punctSpace/g, le)
    .replace(/punct/g, G)
    .getRegex(),
  Ja = f(da, 'gu')
    .replace(/notPunctSpace/g, Ga)
    .replace(/punctSpace/g, ja)
    .replace(/punct/g, sa)
    .getRegex(),
  Qa = f(
    '^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)',
    'gu',
  )
    .replace(/notPunctSpace/g, Re)
    .replace(/punctSpace/g, le)
    .replace(/punct/g, G)
    .getRegex(),
  Wa = f(/^~~?(?:((?!~)punct)|[^\s~])/, 'u')
    .replace(/punct/g, G)
    .getRegex(),
  Ka =
    '^[^~]+(?=[^~])|(?!~)punct(~~?)(?=[\\s]|$)|notPunctSpace(~~?)(?!~)(?=punctSpace|$)|(?!~)punctSpace(~~?)(?=notPunctSpace)|[\\s](~~?)(?!~)(?=punct)|(?!~)punct(~~?)(?!~)(?=punct)|notPunctSpace(~~?)(?=notPunctSpace)',
  Ya = f(Ka, 'gu')
    .replace(/notPunctSpace/g, Re)
    .replace(/punctSpace/g, le)
    .replace(/punct/g, G)
    .getRegex(),
  eo = f(/\\(punct)/, 'gu')
    .replace(/punct/g, G)
    .getRegex(),
  ao = f(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/)
    .replace('scheme', /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/)
    .replace(
      'email',
      /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/,
    )
    .getRegex(),
  oo = f(_e).replace('(?:-->|$)', '-->').getRegex(),
  ro = f(
    '^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>',
  )
    .replace('comment', oo)
    .replace(
      'attribute',
      /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/,
    )
    .getRegex(),
  se =
    /(?:\[(?:\\[\s\S]|[^[\]\\])*\]|\\[\s\S]|`+(?!`)[^`]*?`+(?!`)|``+(?=\])|[^[\]\\`])*?/,
  io = f(
    /^!?\[(label)\]\(\s*(href)(?:(?:[ \t]+(?:\n[ \t]*)?|\n[ \t]*)(title))?\s*\)/,
  )
    .replace('label', se)
    .replace('href', /<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/)
    .replace(
      'title',
      /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/,
    )
    .getRegex(),
  ca = f(/^!?\[(label)\]\[(ref)\]/)
    .replace('label', se)
    .replace('ref', De)
    .getRegex(),
  la = f(/^!?\[(ref)\](?:\[\])?/)
    .replace('ref', De)
    .getRegex(),
  no = f('reflink|nolink(?!\\()', 'g')
    .replace('reflink', ca)
    .replace('nolink', la)
    .getRegex(),
  Je = /[hH][tT][tT][pP][sS]?|[fF][tT][pP]/,
  Te = {
    _backpedal: U,
    anyPunctuation: eo,
    autolink: ao,
    blockSkip: $a,
    br: na,
    code: Ba,
    del: U,
    delLDelim: U,
    delRDelim: U,
    emStrongLDelim: Ha,
    emStrongRDelimAst: Za,
    emStrongRDelimUnd: Qa,
    escape: La,
    link: io,
    nolink: la,
    punctuation: ya,
    reflink: ca,
    reflinkSearch: no,
    tag: ro,
    text: wa,
    url: U,
  },
  so = w(E({}, Te), {
    link: f(/^!?\[(label)\]\((.*?)\)/)
      .replace('label', se)
      .getRegex(),
    reflink: f(/^!?\[(label)\]\s*\[([^\]]*)\]/)
      .replace('label', se)
      .getRegex(),
  }),
  he = w(E({}, Te), {
    emStrongRDelimAst: Ja,
    emStrongLDelim: Xa,
    delLDelim: Wa,
    delRDelim: Ya,
    url: f(/^((?:protocol):\/\/|www\.)(?:[a-zA-Z0-9-]+\.?)+[^\s<]*|^email/)
      .replace('protocol', Je)
      .replace(
        'email',
        /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,
      )
      .getRegex(),
    _backpedal:
      /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,
    del: /^(~~?)(?=[^\s~])((?:\\[\s\S]|[^\\])*?(?:\\[\s\S]|[^\s~\\]))\1(?=[^~]|$)/,
    text: f(
      /^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+/=?_`{|}~-]+@)|[\s\S]*?(?:(?=[\\<![`*~_]|\b_|protocol:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+/=?_`{|}~-](?=[a-zA-Z0-9.!#$%&'*+/=?_`{|}~-]+@)))/,
    )
      .replace('protocol', Je)
      .getRegex(),
  }),
  to = w(E({}, he), {
    br: f(na).replace('{2,}', '*').getRegex(),
    text: f(he.text)
      .replace('\\b_', '\\b_| {2,}\\n')
      .replace(/\{2,\}/g, '*')
      .getRegex(),
  }),
  ie = { normal: Ce, gfm: Ua, pedantic: Fa },
  H = { normal: Te, gfm: he, breaks: to, pedantic: so },
  co = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' },
  Qe = (a) => co[a]
function q(a, e) {
  if (e) {
    if (P.escapeTest.test(a)) return a.replace(P.escapeReplace, Qe)
  } else if (P.escapeTestNoEncode.test(a))
    return a.replace(P.escapeReplaceNoEncode, Qe)
  return a
}
function We(a) {
  try {
    a = encodeURI(a).replace(P.percentDecode, '%')
  } catch (e) {
    return null
  }
  return a
}
function Ke(a, e) {
  var n
  let o = a.replace(P.findPipe, (t, s, l) => {
      let d = !1,
        m = s
      for (; --m >= 0 && l[m] === '\\'; ) d = !d
      return d ? '|' : ' |'
    }),
    i = o.split(P.splitPipe),
    r = 0
  if (
    (i[0].trim() || i.shift(),
    i.length > 0 && !((n = i.at(-1)) != null && n.trim()) && i.pop(),
    e)
  )
    if (i.length > e) i.splice(e)
    else for (; i.length < e; ) i.push('')
  for (; r < i.length; r++) i[r] = i[r].trim().replace(P.slashPipe, '|')
  return i
}
function z(a, e, o) {
  const i = a.length
  if (i === 0) return ''
  let r = 0
  for (; r < i; ) {
    const n = a.charAt(i - r - 1)
    if (n === e && !o) r++
    else if (n !== e && o) r++
    else break
  }
  return a.slice(0, i - r)
}
function Ye(a) {
  let e = a.split(`
`),
    o = e.length - 1
  for (; o >= 0 && !e[o].trim(); ) o--
  return e.length - o <= 2
    ? a
    : e.slice(0, o + 1).join(`
`)
}
function lo(a, e) {
  if (a.indexOf(e[1]) === -1) return -1
  let o = 0
  for (let i = 0; i < a.length; i++)
    if (a[i] === '\\') i++
    else if (a[i] === e[0]) o++
    else if (a[i] === e[1] && (o--, o < 0)) return i
  return o > 0 ? -2 : -1
}
function mo(a, e = 0) {
  let o = e,
    i = ''
  for (const r of a)
    if (r === '	') {
      const n = 4 - (o % 4)
      ;(i += ' '.repeat(n)), (o += n)
    } else (i += r), o++
  return i
}
function ea(a, e, o, i, r) {
  const n = e.href,
    t = e.title || null,
    s = a[1].replace(r.other.outputLinkReplace, '$1')
  i.state.inLink = !0
  const l = {
    type: a[0].charAt(0) === '!' ? 'image' : 'link',
    raw: o,
    href: n,
    title: t,
    text: s,
    tokens: i.inlineTokens(s),
  }
  return (i.state.inLink = !1), l
}
function po(a, e, o) {
  const i = a.match(o.other.indentCodeCompensation)
  if (i === null) return e
  const r = i[1]
  return e
    .split(`
`)
    .map((n) => {
      const t = n.match(o.other.beginningSpace)
      if (t === null) return n
      const [s] = t
      return s.length >= r.length ? n.slice(r.length) : n
    })
    .join(`
`)
}
var te = class {
    constructor(a) {
      b(this, 'options')
      b(this, 'rules')
      b(this, 'lexer')
      this.options = a || L
    }
    space(a) {
      const e = this.rules.block.newline.exec(a)
      if (e && e[0].length > 0) return { type: 'space', raw: e[0] }
    }
    code(a) {
      const e = this.rules.block.code.exec(a)
      if (e) {
        const o = this.options.pedantic ? e[0] : Ye(e[0]),
          i = o.replace(this.rules.other.codeRemoveIndent, '')
        return { type: 'code', raw: o, codeBlockStyle: 'indented', text: i }
      }
    }
    fences(a) {
      const e = this.rules.block.fences.exec(a)
      if (e) {
        const o = e[0],
          i = po(o, e[3] || '', this.rules)
        return {
          type: 'code',
          raw: o,
          lang: e[2]
            ? e[2].trim().replace(this.rules.inline.anyPunctuation, '$1')
            : e[2],
          text: i,
        }
      }
    }
    heading(a) {
      const e = this.rules.block.heading.exec(a)
      if (e) {
        let o = e[2].trim()
        if (this.rules.other.endingHash.test(o)) {
          const i = z(o, '#')
          ;(this.options.pedantic ||
            !i ||
            this.rules.other.endingSpaceChar.test(i)) &&
            (o = i.trim())
        }
        return {
          type: 'heading',
          raw: z(
            e[0],
            `
`,
          ),
          depth: e[1].length,
          text: o,
          tokens: this.lexer.inline(o),
        }
      }
    }
    hr(a) {
      const e = this.rules.block.hr.exec(a)
      if (e)
        return {
          type: 'hr',
          raw: z(
            e[0],
            `
`,
          ),
        }
    }
    blockquote(a) {
      const e = this.rules.block.blockquote.exec(a)
      if (e) {
        let o = z(
            e[0],
            `
`,
          ).split(`
`),
          i = '',
          r = '',
          n = []
        for (; o.length > 0; ) {
          let t = !1,
            s = [],
            l
          for (l = 0; l < o.length; l++)
            if (this.rules.other.blockquoteStart.test(o[l]))
              s.push(o[l]), (t = !0)
            else if (!t) s.push(o[l])
            else break
          o = o.slice(l)
          const d = s.join(`
`),
            m = d
              .replace(
                this.rules.other.blockquoteSetextReplace,
                `
    $1`,
              )
              .replace(this.rules.other.blockquoteSetextReplace2, '')
          ;(i = i
            ? `${i}
${d}`
            : d),
            (r = r
              ? `${r}
${m}`
              : m)
          const c = this.lexer.state.top
          if (
            ((this.lexer.state.top = !0),
            this.lexer.blockTokens(m, n, !0),
            (this.lexer.state.top = c),
            o.length === 0)
          )
            break
          const u = n.at(-1)
          if ((u == null ? void 0 : u.type) === 'code') break
          if ((u == null ? void 0 : u.type) === 'blockquote') {
            const A = u,
              p =
                A.raw +
                `
` +
                o.join(`
`),
              S = this.blockquote(p)
            ;(n[n.length - 1] = S),
              (i = i.substring(0, i.length - A.raw.length) + S.raw),
              (r = r.substring(0, r.length - A.text.length) + S.text)
            break
          } else if ((u == null ? void 0 : u.type) === 'list') {
            const A = u,
              p =
                A.raw +
                `
` +
                o.join(`
`),
              S = this.list(p)
            ;(n[n.length - 1] = S),
              (i = i.substring(0, i.length - u.raw.length) + S.raw),
              (r = r.substring(0, r.length - A.raw.length) + S.raw),
              (o = p.substring(n.at(-1).raw.length).split(`
`))
          }
        }
        return { type: 'blockquote', raw: i, tokens: n, text: r }
      }
    }
    list(a) {
      var o, i
      let e = this.rules.block.list.exec(a)
      if (e) {
        let r = e[1].trim(),
          n = r.length > 1,
          t = {
            type: 'list',
            raw: '',
            ordered: n,
            start: n ? +r.slice(0, -1) : '',
            loose: !1,
            items: [],
          }
        ;(r = n ? `\\d{1,9}\\${r.slice(-1)}` : `\\${r}`),
          this.options.pedantic && (r = n ? r : '[*+-]')
        let s = this.rules.other.listItemRegex(r),
          l = !1
        for (; a; ) {
          let m = !1,
            c = '',
            u = ''
          if (!(e = s.exec(a)) || this.rules.block.hr.test(a)) break
          ;(c = e[0]), (a = a.substring(c.length))
          let A = mo(
              e[2].split(
                `
`,
                1,
              )[0],
              e[1].length,
            ),
            p = a.split(
              `
`,
              1,
            )[0],
            S = !A.trim(),
            g = 0
          if (
            (this.options.pedantic
              ? ((g = 2), (u = A.trimStart()))
              : S
                ? (g = e[1].length + 1)
                : ((g = A.search(this.rules.other.nonSpaceChar)),
                  (g = g > 4 ? 1 : g),
                  (u = A.slice(g)),
                  (g += e[1].length)),
            S &&
              this.rules.other.blankLine.test(p) &&
              ((c +=
                p +
                `
`),
              (a = a.substring(p.length + 1)),
              (m = !0)),
            !m)
          ) {
            const h = this.rules.other.nextBulletRegex(g),
              v = this.rules.other.hrRegex(g),
              D = this.rules.other.fencesBeginRegex(g),
              R = this.rules.other.headingBeginRegex(g),
              V = this.rules.other.htmlBeginRegex(g),
              J = this.rules.other.blockquoteBeginRegex(g)
            for (; a; ) {
              let x = a.split(
                  `
`,
                  1,
                )[0],
                N
              if (
                ((p = x),
                this.options.pedantic
                  ? ((p = p.replace(this.rules.other.listReplaceNesting, '  ')),
                    (N = p))
                  : (N = p.replace(this.rules.other.tabCharGlobal, '    ')),
                D.test(p) ||
                  R.test(p) ||
                  V.test(p) ||
                  J.test(p) ||
                  h.test(p) ||
                  v.test(p))
              )
                break
              if (N.search(this.rules.other.nonSpaceChar) >= g || !p.trim())
                u +=
                  `
` + N.slice(g)
              else {
                if (
                  S ||
                  A.replace(this.rules.other.tabCharGlobal, '    ').search(
                    this.rules.other.nonSpaceChar,
                  ) >= 4 ||
                  D.test(A) ||
                  R.test(A) ||
                  v.test(A)
                )
                  break
                u +=
                  `
` + p
              }
              ;(S = !p.trim()),
                (c +=
                  x +
                  `
`),
                (a = a.substring(x.length + 1)),
                (A = N.slice(g))
            }
          }
          t.loose ||
            (l
              ? (t.loose = !0)
              : this.rules.other.doubleBlankLine.test(c) && (l = !0)),
            t.items.push({
              type: 'list_item',
              raw: c,
              task: !!this.options.gfm && this.rules.other.listIsTask.test(u),
              loose: !1,
              text: u,
              tokens: [],
            }),
            (t.raw += c)
        }
        const d = t.items.at(-1)
        if (d) (d.raw = d.raw.trimEnd()), (d.text = d.text.trimEnd())
        else return
        t.raw = t.raw.trimEnd()
        for (const m of t.items) {
          if (
            ((this.lexer.state.top = !1),
            (m.tokens = this.lexer.blockTokens(m.text, [])),
            m.task)
          ) {
            if (
              ((m.text = m.text.replace(this.rules.other.listReplaceTask, '')),
              ((o = m.tokens[0]) == null ? void 0 : o.type) === 'text' ||
                ((i = m.tokens[0]) == null ? void 0 : i.type) === 'paragraph')
            ) {
              ;(m.tokens[0].raw = m.tokens[0].raw.replace(
                this.rules.other.listReplaceTask,
                '',
              )),
                (m.tokens[0].text = m.tokens[0].text.replace(
                  this.rules.other.listReplaceTask,
                  '',
                ))
              for (let u = this.lexer.inlineQueue.length - 1; u >= 0; u--)
                if (
                  this.rules.other.listIsTask.test(
                    this.lexer.inlineQueue[u].src,
                  )
                ) {
                  this.lexer.inlineQueue[u].src = this.lexer.inlineQueue[
                    u
                  ].src.replace(this.rules.other.listReplaceTask, '')
                  break
                }
            }
            const c = this.rules.other.listTaskCheckbox.exec(m.raw)
            if (c) {
              const u = {
                type: 'checkbox',
                raw: c[0] + ' ',
                checked: c[0] !== '[ ]',
              }
              ;(m.checked = u.checked),
                t.loose
                  ? m.tokens[0] &&
                    ['paragraph', 'text'].includes(m.tokens[0].type) &&
                    'tokens' in m.tokens[0] &&
                    m.tokens[0].tokens
                    ? ((m.tokens[0].raw = u.raw + m.tokens[0].raw),
                      (m.tokens[0].text = u.raw + m.tokens[0].text),
                      m.tokens[0].tokens.unshift(u))
                    : m.tokens.unshift({
                        type: 'paragraph',
                        raw: u.raw,
                        text: u.raw,
                        tokens: [u],
                      })
                  : m.tokens.unshift(u)
            }
          }
          if (!t.loose) {
            const c = m.tokens.filter((A) => A.type === 'space'),
              u =
                c.length > 0 &&
                c.some((A) => this.rules.other.anyLine.test(A.raw))
            t.loose = u
          }
        }
        if (t.loose)
          for (const m of t.items) {
            m.loose = !0
            for (const c of m.tokens)
              c.type === 'text' && (c.type = 'paragraph')
          }
        return t
      }
    }
    html(a) {
      const e = this.rules.block.html.exec(a)
      if (e) {
        const o = Ye(e[0])
        return {
          type: 'html',
          block: !0,
          raw: o,
          pre: e[1] === 'pre' || e[1] === 'script' || e[1] === 'style',
          text: o,
        }
      }
    }
    def(a) {
      const e = this.rules.block.def.exec(a)
      if (e) {
        const o = e[1]
            .toLowerCase()
            .replace(this.rules.other.multipleSpaceGlobal, ' '),
          i = e[2]
            ? e[2]
                .replace(this.rules.other.hrefBrackets, '$1')
                .replace(this.rules.inline.anyPunctuation, '$1')
            : '',
          r = e[3]
            ? e[3]
                .substring(1, e[3].length - 1)
                .replace(this.rules.inline.anyPunctuation, '$1')
            : e[3]
        return {
          type: 'def',
          tag: o,
          raw: z(
            e[0],
            `
`,
          ),
          href: i,
          title: r,
        }
      }
    }
    table(a) {
      var t
      const e = this.rules.block.table.exec(a)
      if (!e || !this.rules.other.tableDelimiter.test(e[2])) return
      const o = Ke(e[1]),
        i = e[2].replace(this.rules.other.tableAlignChars, '').split('|'),
        r =
          (t = e[3]) != null && t.trim()
            ? e[3].replace(this.rules.other.tableRowBlankLine, '').split(`
`)
            : [],
        n = {
          type: 'table',
          raw: z(
            e[0],
            `
`,
          ),
          header: [],
          align: [],
          rows: [],
        }
      if (o.length === i.length) {
        for (const s of i)
          this.rules.other.tableAlignRight.test(s)
            ? n.align.push('right')
            : this.rules.other.tableAlignCenter.test(s)
              ? n.align.push('center')
              : this.rules.other.tableAlignLeft.test(s)
                ? n.align.push('left')
                : n.align.push(null)
        for (let s = 0; s < o.length; s++)
          n.header.push({
            text: o[s],
            tokens: this.lexer.inline(o[s]),
            header: !0,
            align: n.align[s],
          })
        for (const s of r)
          n.rows.push(
            Ke(s, n.header.length).map((l, d) => ({
              text: l,
              tokens: this.lexer.inline(l),
              header: !1,
              align: n.align[d],
            })),
          )
        return n
      }
    }
    lheading(a) {
      const e = this.rules.block.lheading.exec(a)
      if (e) {
        const o = e[1].trim()
        return {
          type: 'heading',
          raw: z(
            e[0],
            `
`,
          ),
          depth: e[2].charAt(0) === '=' ? 1 : 2,
          text: o,
          tokens: this.lexer.inline(o),
        }
      }
    }
    paragraph(a) {
      const e = this.rules.block.paragraph.exec(a)
      if (e) {
        const o =
          e[1].charAt(e[1].length - 1) ===
          `
`
            ? e[1].slice(0, -1)
            : e[1]
        return {
          type: 'paragraph',
          raw: e[0],
          text: o,
          tokens: this.lexer.inline(o),
        }
      }
    }
    text(a) {
      const e = this.rules.block.text.exec(a)
      if (e)
        return {
          type: 'text',
          raw: e[0],
          text: e[0],
          tokens: this.lexer.inline(e[0]),
        }
    }
    escape(a) {
      const e = this.rules.inline.escape.exec(a)
      if (e) return { type: 'escape', raw: e[0], text: e[1] }
    }
    tag(a) {
      const e = this.rules.inline.tag.exec(a)
      if (e)
        return (
          !this.lexer.state.inLink && this.rules.other.startATag.test(e[0])
            ? (this.lexer.state.inLink = !0)
            : this.lexer.state.inLink &&
              this.rules.other.endATag.test(e[0]) &&
              (this.lexer.state.inLink = !1),
          !this.lexer.state.inRawBlock &&
          this.rules.other.startPreScriptTag.test(e[0])
            ? (this.lexer.state.inRawBlock = !0)
            : this.lexer.state.inRawBlock &&
              this.rules.other.endPreScriptTag.test(e[0]) &&
              (this.lexer.state.inRawBlock = !1),
          {
            type: 'html',
            raw: e[0],
            inLink: this.lexer.state.inLink,
            inRawBlock: this.lexer.state.inRawBlock,
            block: !1,
            text: e[0],
          }
        )
    }
    link(a) {
      const e = this.rules.inline.link.exec(a)
      if (e) {
        const o = e[2].trim()
        if (
          !this.options.pedantic &&
          this.rules.other.startAngleBracket.test(o)
        ) {
          if (!this.rules.other.endAngleBracket.test(o)) return
          const n = z(o.slice(0, -1), '\\')
          if ((o.length - n.length) % 2 === 0) return
        } else {
          const n = lo(e[2], '()')
          if (n === -2) return
          if (n > -1) {
            const t = (e[0].indexOf('!') === 0 ? 5 : 4) + e[1].length + n
            ;(e[2] = e[2].substring(0, n)),
              (e[0] = e[0].substring(0, t).trim()),
              (e[3] = '')
          }
        }
        let i = e[2],
          r = ''
        if (this.options.pedantic) {
          const n = this.rules.other.pedanticHrefTitle.exec(i)
          n && ((i = n[1]), (r = n[3]))
        } else r = e[3] ? e[3].slice(1, -1) : ''
        return (
          (i = i.trim()),
          this.rules.other.startAngleBracket.test(i) &&
            (this.options.pedantic && !this.rules.other.endAngleBracket.test(o)
              ? (i = i.slice(1))
              : (i = i.slice(1, -1))),
          ea(
            e,
            {
              href: i && i.replace(this.rules.inline.anyPunctuation, '$1'),
              title: r && r.replace(this.rules.inline.anyPunctuation, '$1'),
            },
            e[0],
            this.lexer,
            this.rules,
          )
        )
      }
    }
    reflink(a, e) {
      let o
      if (
        (o = this.rules.inline.reflink.exec(a)) ||
        (o = this.rules.inline.nolink.exec(a))
      ) {
        const i = (o[2] || o[1]).replace(
            this.rules.other.multipleSpaceGlobal,
            ' ',
          ),
          r = e[i.toLowerCase()]
        if (!r) {
          const n = o[0].charAt(0)
          return { type: 'text', raw: n, text: n }
        }
        return ea(o, r, o[0], this.lexer, this.rules)
      }
    }
    emStrong(a, e, o = '') {
      let i = this.rules.inline.emStrongLDelim.exec(a)
      if (
        !(
          !i ||
          (!i[1] && !i[2] && !i[3] && !i[4]) ||
          (i[4] && o.match(this.rules.other.unicodeAlphaNumeric))
        ) &&
        (!(i[1] || i[3]) || !o || this.rules.inline.punctuation.exec(o))
      ) {
        let r = [...i[0]].length - 1,
          n,
          t,
          s = r,
          l = 0,
          d =
            i[0][0] === '*'
              ? this.rules.inline.emStrongRDelimAst
              : this.rules.inline.emStrongRDelimUnd
        for (
          d.lastIndex = 0, e = e.slice(-1 * a.length + r);
          (i = d.exec(e)) !== null;
        ) {
          if (((n = i[1] || i[2] || i[3] || i[4] || i[5] || i[6]), !n)) continue
          if (((t = [...n].length), i[3] || i[4])) {
            s += t
            continue
          } else if ((i[5] || i[6]) && r % 3 && !((r + t) % 3)) {
            l += t
            continue
          }
          if (((s -= t), s > 0)) continue
          t = Math.min(t, t + s + l)
          const m = [...i[0]][0].length,
            c = a.slice(0, r + i.index + m + t)
          if (Math.min(r, t) % 2) {
            const A = c.slice(1, -1)
            return {
              type: 'em',
              raw: c,
              text: A,
              tokens: this.lexer.inlineTokens(A),
            }
          }
          const u = c.slice(2, -2)
          return {
            type: 'strong',
            raw: c,
            text: u,
            tokens: this.lexer.inlineTokens(u),
          }
        }
      }
    }
    codespan(a) {
      const e = this.rules.inline.code.exec(a)
      if (e) {
        let o = e[2].replace(this.rules.other.newLineCharGlobal, ' '),
          i = this.rules.other.nonSpaceChar.test(o),
          r =
            this.rules.other.startingSpaceChar.test(o) &&
            this.rules.other.endingSpaceChar.test(o)
        return (
          i && r && (o = o.substring(1, o.length - 1)),
          { type: 'codespan', raw: e[0], text: o }
        )
      }
    }
    br(a) {
      const e = this.rules.inline.br.exec(a)
      if (e) return { type: 'br', raw: e[0] }
    }
    del(a, e, o = '') {
      let i = this.rules.inline.delLDelim.exec(a)
      if (i && (!i[1] || !o || this.rules.inline.punctuation.exec(o))) {
        let r = [...i[0]].length - 1,
          n,
          t,
          s = r,
          l = this.rules.inline.delRDelim
        for (
          l.lastIndex = 0, e = e.slice(-1 * a.length + r);
          (i = l.exec(e)) !== null;
        ) {
          if (
            ((n = i[1] || i[2] || i[3] || i[4] || i[5] || i[6]),
            !n || ((t = [...n].length), t !== r))
          )
            continue
          if (i[3] || i[4]) {
            s += t
            continue
          }
          if (((s -= t), s > 0)) continue
          t = Math.min(t, t + s)
          const d = [...i[0]][0].length,
            m = a.slice(0, r + i.index + d + t),
            c = m.slice(r, -r)
          return {
            type: 'del',
            raw: m,
            text: c,
            tokens: this.lexer.inlineTokens(c),
          }
        }
      }
    }
    autolink(a) {
      const e = this.rules.inline.autolink.exec(a)
      if (e) {
        let o, i
        return (
          e[2] === '@'
            ? ((o = e[1]), (i = 'mailto:' + o))
            : ((o = e[1]), (i = o)),
          {
            type: 'link',
            raw: e[0],
            text: o,
            href: i,
            tokens: [{ type: 'text', raw: o, text: o }],
          }
        )
      }
    }
    url(a) {
      var o, i
      let e
      if ((e = this.rules.inline.url.exec(a))) {
        let r, n
        if (e[2] === '@') (r = e[0]), (n = 'mailto:' + r)
        else {
          let t
          do
            (t = e[0]),
              (e[0] =
                (i =
                  (o = this.rules.inline._backpedal.exec(e[0])) == null
                    ? void 0
                    : o[0]) != null
                  ? i
                  : '')
          while (t !== e[0])
          ;(r = e[0]), e[1] === 'www.' ? (n = 'http://' + e[0]) : (n = e[0])
        }
        return {
          type: 'link',
          raw: e[0],
          text: r,
          href: n,
          tokens: [{ type: 'text', raw: r, text: r }],
        }
      }
    }
    inlineText(a) {
      const e = this.rules.inline.text.exec(a)
      if (e) {
        const o = this.lexer.state.inRawBlock
        return { type: 'text', raw: e[0], text: e[0], escaped: o }
      }
    }
  },
  _ = class be {
    constructor(e) {
      b(this, 'tokens')
      b(this, 'options')
      b(this, 'state')
      b(this, 'inlineQueue')
      b(this, 'tokenizer')
      ;(this.tokens = []),
        (this.tokens.links = Object.create(null)),
        (this.options = e || L),
        (this.options.tokenizer = this.options.tokenizer || new te()),
        (this.tokenizer = this.options.tokenizer),
        (this.tokenizer.options = this.options),
        (this.tokenizer.lexer = this),
        (this.inlineQueue = []),
        (this.state = { inLink: !1, inRawBlock: !1, top: !0 })
      const o = { other: P, block: ie.normal, inline: H.normal }
      this.options.pedantic
        ? ((o.block = ie.pedantic), (o.inline = H.pedantic))
        : this.options.gfm &&
          ((o.block = ie.gfm),
          this.options.breaks ? (o.inline = H.breaks) : (o.inline = H.gfm)),
        (this.tokenizer.rules = o)
    }
    static get rules() {
      return { block: ie, inline: H }
    }
    static lex(e, o) {
      return new be(o).lex(e)
    }
    static lexInline(e, o) {
      return new be(o).inlineTokens(e)
    }
    lex(e) {
      ;(e = e.replace(
        P.carriageReturn,
        `
`,
      )),
        this.blockTokens(e, this.tokens)
      for (let o = 0; o < this.inlineQueue.length; o++) {
        const i = this.inlineQueue[o]
        this.inlineTokens(i.src, i.tokens)
      }
      return (this.inlineQueue = []), this.tokens
    }
    blockTokens(e, o = [], i = !1) {
      var r, n, t
      for (
        this.tokenizer.lexer = this,
          this.options.pedantic &&
            (e = e.replace(P.tabCharGlobal, '    ').replace(P.spaceLine, ''));
        e;
      ) {
        let s
        if (
          (n = (r = this.options.extensions) == null ? void 0 : r.block) !=
            null &&
          n.some((d) =>
            (s = d.call({ lexer: this }, e, o))
              ? ((e = e.substring(s.raw.length)), o.push(s), !0)
              : !1,
          )
        )
          continue
        if ((s = this.tokenizer.space(e))) {
          e = e.substring(s.raw.length)
          const d = o.at(-1)
          s.raw.length === 1 && d !== void 0
            ? (d.raw += `
`)
            : o.push(s)
          continue
        }
        if ((s = this.tokenizer.code(e))) {
          e = e.substring(s.raw.length)
          const d = o.at(-1)
          ;(d == null ? void 0 : d.type) === 'paragraph' ||
          (d == null ? void 0 : d.type) === 'text'
            ? ((d.raw +=
                (d.raw.endsWith(`
`)
                  ? ''
                  : `
`) + s.raw),
              (d.text +=
                `
` + s.text),
              (this.inlineQueue.at(-1).src = d.text))
            : o.push(s)
          continue
        }
        if ((s = this.tokenizer.fences(e))) {
          ;(e = e.substring(s.raw.length)), o.push(s)
          continue
        }
        if ((s = this.tokenizer.heading(e))) {
          ;(e = e.substring(s.raw.length)), o.push(s)
          continue
        }
        if ((s = this.tokenizer.hr(e))) {
          ;(e = e.substring(s.raw.length)), o.push(s)
          continue
        }
        if ((s = this.tokenizer.blockquote(e))) {
          ;(e = e.substring(s.raw.length)), o.push(s)
          continue
        }
        if ((s = this.tokenizer.list(e))) {
          ;(e = e.substring(s.raw.length)), o.push(s)
          continue
        }
        if ((s = this.tokenizer.html(e))) {
          ;(e = e.substring(s.raw.length)), o.push(s)
          continue
        }
        if ((s = this.tokenizer.def(e))) {
          e = e.substring(s.raw.length)
          const d = o.at(-1)
          ;(d == null ? void 0 : d.type) === 'paragraph' ||
          (d == null ? void 0 : d.type) === 'text'
            ? ((d.raw +=
                (d.raw.endsWith(`
`)
                  ? ''
                  : `
`) + s.raw),
              (d.text +=
                `
` + s.raw),
              (this.inlineQueue.at(-1).src = d.text))
            : this.tokens.links[s.tag] ||
              ((this.tokens.links[s.tag] = { href: s.href, title: s.title }),
              o.push(s))
          continue
        }
        if ((s = this.tokenizer.table(e))) {
          ;(e = e.substring(s.raw.length)), o.push(s)
          continue
        }
        if ((s = this.tokenizer.lheading(e))) {
          ;(e = e.substring(s.raw.length)), o.push(s)
          continue
        }
        let l = e
        if ((t = this.options.extensions) != null && t.startBlock) {
          let d = 1 / 0,
            m = e.slice(1),
            c
          this.options.extensions.startBlock.forEach((u) => {
            ;(c = u.call({ lexer: this }, m)),
              typeof c == 'number' && c >= 0 && (d = Math.min(d, c))
          }),
            d < 1 / 0 && d >= 0 && (l = e.substring(0, d + 1))
        }
        if (this.state.top && (s = this.tokenizer.paragraph(l))) {
          const d = o.at(-1)
          i && (d == null ? void 0 : d.type) === 'paragraph'
            ? ((d.raw +=
                (d.raw.endsWith(`
`)
                  ? ''
                  : `
`) + s.raw),
              (d.text +=
                `
` + s.text),
              this.inlineQueue.pop(),
              (this.inlineQueue.at(-1).src = d.text))
            : o.push(s),
            (i = l.length !== e.length),
            (e = e.substring(s.raw.length))
          continue
        }
        if ((s = this.tokenizer.text(e))) {
          e = e.substring(s.raw.length)
          const d = o.at(-1)
          ;(d == null ? void 0 : d.type) === 'text'
            ? ((d.raw +=
                (d.raw.endsWith(`
`)
                  ? ''
                  : `
`) + s.raw),
              (d.text +=
                `
` + s.text),
              this.inlineQueue.pop(),
              (this.inlineQueue.at(-1).src = d.text))
            : o.push(s)
          continue
        }
        if (e) {
          const d = 'Infinite loop on byte: ' + e.charCodeAt(0)
          if (this.options.silent) {
            console.error(d)
            break
          } else throw new Error(d)
        }
      }
      return (this.state.top = !0), o
    }
    inline(e, o = []) {
      return this.inlineQueue.push({ src: e, tokens: o }), o
    }
    inlineTokens(e, o = []) {
      var l, d, m, c, u, A
      this.tokenizer.lexer = this
      let i = e,
        r = null
      if (this.tokens.links) {
        const p = Object.keys(this.tokens.links)
        if (p.length > 0)
          for (
            ;
            (r = this.tokenizer.rules.inline.reflinkSearch.exec(i)) !== null;
          )
            p.includes(r[0].slice(r[0].lastIndexOf('[') + 1, -1)) &&
              (i =
                i.slice(0, r.index) +
                '[' +
                'a'.repeat(r[0].length - 2) +
                ']' +
                i.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))
      }
      for (
        ;
        (r = this.tokenizer.rules.inline.anyPunctuation.exec(i)) !== null;
      )
        i =
          i.slice(0, r.index) +
          '++' +
          i.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex)
      let n
      for (; (r = this.tokenizer.rules.inline.blockSkip.exec(i)) !== null; )
        (n = r[2] ? r[2].length : 0),
          (i =
            i.slice(0, r.index + n) +
            '[' +
            'a'.repeat(r[0].length - n - 2) +
            ']' +
            i.slice(this.tokenizer.rules.inline.blockSkip.lastIndex))
      i =
        (m =
          (d = (l = this.options.hooks) == null ? void 0 : l.emStrongMask) ==
          null
            ? void 0
            : d.call({ lexer: this }, i)) != null
          ? m
          : i
      let t = !1,
        s = ''
      for (; e; ) {
        t || (s = ''), (t = !1)
        let p
        if (
          (u = (c = this.options.extensions) == null ? void 0 : c.inline) !=
            null &&
          u.some((g) =>
            (p = g.call({ lexer: this }, e, o))
              ? ((e = e.substring(p.raw.length)), o.push(p), !0)
              : !1,
          )
        )
          continue
        if ((p = this.tokenizer.escape(e))) {
          ;(e = e.substring(p.raw.length)), o.push(p)
          continue
        }
        if ((p = this.tokenizer.tag(e))) {
          ;(e = e.substring(p.raw.length)), o.push(p)
          continue
        }
        if ((p = this.tokenizer.link(e))) {
          ;(e = e.substring(p.raw.length)), o.push(p)
          continue
        }
        if ((p = this.tokenizer.reflink(e, this.tokens.links))) {
          e = e.substring(p.raw.length)
          const g = o.at(-1)
          p.type === 'text' && (g == null ? void 0 : g.type) === 'text'
            ? ((g.raw += p.raw), (g.text += p.text))
            : o.push(p)
          continue
        }
        if ((p = this.tokenizer.emStrong(e, i, s))) {
          ;(e = e.substring(p.raw.length)), o.push(p)
          continue
        }
        if ((p = this.tokenizer.codespan(e))) {
          ;(e = e.substring(p.raw.length)), o.push(p)
          continue
        }
        if ((p = this.tokenizer.br(e))) {
          ;(e = e.substring(p.raw.length)), o.push(p)
          continue
        }
        if ((p = this.tokenizer.del(e, i, s))) {
          ;(e = e.substring(p.raw.length)), o.push(p)
          continue
        }
        if ((p = this.tokenizer.autolink(e))) {
          ;(e = e.substring(p.raw.length)), o.push(p)
          continue
        }
        if (!this.state.inLink && (p = this.tokenizer.url(e))) {
          ;(e = e.substring(p.raw.length)), o.push(p)
          continue
        }
        let S = e
        if ((A = this.options.extensions) != null && A.startInline) {
          let g = 1 / 0,
            h = e.slice(1),
            v
          this.options.extensions.startInline.forEach((D) => {
            ;(v = D.call({ lexer: this }, h)),
              typeof v == 'number' && v >= 0 && (g = Math.min(g, v))
          }),
            g < 1 / 0 && g >= 0 && (S = e.substring(0, g + 1))
        }
        if ((p = this.tokenizer.inlineText(S))) {
          ;(e = e.substring(p.raw.length)),
            p.raw.slice(-1) !== '_' && (s = p.raw.slice(-1)),
            (t = !0)
          const g = o.at(-1)
          ;(g == null ? void 0 : g.type) === 'text'
            ? ((g.raw += p.raw), (g.text += p.text))
            : o.push(p)
          continue
        }
        if (e) {
          const g = 'Infinite loop on byte: ' + e.charCodeAt(0)
          if (this.options.silent) {
            console.error(g)
            break
          } else throw new Error(g)
        }
      }
      return o
    }
  },
  de = class {
    constructor(a) {
      b(this, 'options')
      b(this, 'parser')
      this.options = a || L
    }
    space(a) {
      return ''
    }
    code({ text: a, lang: e, escaped: o }) {
      var n
      const i = (n = (e || '').match(P.notSpaceStart)) == null ? void 0 : n[0],
        r =
          a.replace(P.endingNewline, '') +
          `
`
      return i
        ? '<pre><code class="language-' +
            q(i) +
            '">' +
            (o ? r : q(r, !0)) +
            `</code></pre>
`
        : '<pre><code>' +
            (o ? r : q(r, !0)) +
            `</code></pre>
`
    }
    blockquote({ tokens: a }) {
      return `<blockquote>
${this.parser.parse(a)}</blockquote>
`
    }
    html({ text: a }) {
      return a
    }
    def(a) {
      return ''
    }
    heading({ tokens: a, depth: e }) {
      return `<h${e}>${this.parser.parseInline(a)}</h${e}>
`
    }
    hr(a) {
      return `<hr>
`
    }
    list(a) {
      let e = a.ordered,
        o = a.start,
        i = ''
      for (let t = 0; t < a.items.length; t++) {
        const s = a.items[t]
        i += this.listitem(s)
      }
      const r = e ? 'ol' : 'ul',
        n = e && o !== 1 ? ' start="' + o + '"' : ''
      return (
        '<' +
        r +
        n +
        `>
` +
        i +
        '</' +
        r +
        `>
`
      )
    }
    listitem(a) {
      return `<li>${this.parser.parse(a.tokens)}</li>
`
    }
    checkbox({ checked: a }) {
      return (
        '<input ' + (a ? 'checked="" ' : '') + 'disabled="" type="checkbox"> '
      )
    }
    paragraph({ tokens: a }) {
      return `<p>${this.parser.parseInline(a)}</p>
`
    }
    table(a) {
      let e = '',
        o = ''
      for (let r = 0; r < a.header.length; r++) o += this.tablecell(a.header[r])
      e += this.tablerow({ text: o })
      let i = ''
      for (let r = 0; r < a.rows.length; r++) {
        const n = a.rows[r]
        o = ''
        for (let t = 0; t < n.length; t++) o += this.tablecell(n[t])
        i += this.tablerow({ text: o })
      }
      return (
        i && (i = `<tbody>${i}</tbody>`),
        `<table>
<thead>
` +
          e +
          `</thead>
` +
          i +
          `</table>
`
      )
    }
    tablerow({ text: a }) {
      return `<tr>
${a}</tr>
`
    }
    tablecell(a) {
      const e = this.parser.parseInline(a.tokens),
        o = a.header ? 'th' : 'td'
      return (
        (a.align ? `<${o} align="${a.align}">` : `<${o}>`) +
        e +
        `</${o}>
`
      )
    }
    strong({ tokens: a }) {
      return `<strong>${this.parser.parseInline(a)}</strong>`
    }
    em({ tokens: a }) {
      return `<em>${this.parser.parseInline(a)}</em>`
    }
    codespan({ text: a }) {
      return `<code>${q(a, !0)}</code>`
    }
    br(a) {
      return '<br>'
    }
    del({ tokens: a }) {
      return `<del>${this.parser.parseInline(a)}</del>`
    }
    link({ href: a, title: e, tokens: o }) {
      const i = this.parser.parseInline(o),
        r = We(a)
      if (r === null) return i
      a = r
      let n = '<a href="' + a + '"'
      return e && (n += ' title="' + q(e) + '"'), (n += '>' + i + '</a>'), n
    }
    image({ href: a, title: e, text: o, tokens: i }) {
      i && (o = this.parser.parseInline(i, this.parser.textRenderer))
      const r = We(a)
      if (r === null) return q(o)
      a = r
      let n = `<img src="${a}" alt="${q(o)}"`
      return e && (n += ` title="${q(e)}"`), (n += '>'), n
    }
    text(a) {
      return 'tokens' in a && a.tokens
        ? this.parser.parseInline(a.tokens)
        : 'escaped' in a && a.escaped
          ? a.text
          : q(a.text)
    }
  },
  qe = class {
    strong({ text: a }) {
      return a
    }
    em({ text: a }) {
      return a
    }
    codespan({ text: a }) {
      return a
    }
    del({ text: a }) {
      return a
    }
    html({ text: a }) {
      return a
    }
    text({ text: a }) {
      return a
    }
    link({ text: a }) {
      return '' + a
    }
    image({ text: a }) {
      return '' + a
    }
    br() {
      return ''
    }
    checkbox({ raw: a }) {
      return a
    }
  },
  C = class Se {
    constructor(e) {
      b(this, 'options')
      b(this, 'renderer')
      b(this, 'textRenderer')
      ;(this.options = e || L),
        (this.options.renderer = this.options.renderer || new de()),
        (this.renderer = this.options.renderer),
        (this.renderer.options = this.options),
        (this.renderer.parser = this),
        (this.textRenderer = new qe())
    }
    static parse(e, o) {
      return new Se(o).parse(e)
    }
    static parseInline(e, o) {
      return new Se(o).parseInline(e)
    }
    parse(e) {
      var i, r
      this.renderer.parser = this
      let o = ''
      for (let n = 0; n < e.length; n++) {
        const t = e[n]
        if (
          (r = (i = this.options.extensions) == null ? void 0 : i.renderers) !=
            null &&
          r[t.type]
        ) {
          const l = t,
            d = this.options.extensions.renderers[l.type].call(
              { parser: this },
              l,
            )
          if (
            d !== !1 ||
            ![
              'space',
              'hr',
              'heading',
              'code',
              'table',
              'blockquote',
              'list',
              'html',
              'def',
              'paragraph',
              'text',
            ].includes(l.type)
          ) {
            o += d || ''
            continue
          }
        }
        const s = t
        switch (s.type) {
          case 'space': {
            o += this.renderer.space(s)
            break
          }
          case 'hr': {
            o += this.renderer.hr(s)
            break
          }
          case 'heading': {
            o += this.renderer.heading(s)
            break
          }
          case 'code': {
            o += this.renderer.code(s)
            break
          }
          case 'table': {
            o += this.renderer.table(s)
            break
          }
          case 'blockquote': {
            o += this.renderer.blockquote(s)
            break
          }
          case 'list': {
            o += this.renderer.list(s)
            break
          }
          case 'checkbox': {
            o += this.renderer.checkbox(s)
            break
          }
          case 'html': {
            o += this.renderer.html(s)
            break
          }
          case 'def': {
            o += this.renderer.def(s)
            break
          }
          case 'paragraph': {
            o += this.renderer.paragraph(s)
            break
          }
          case 'text': {
            o += this.renderer.text(s)
            break
          }
          default: {
            const l = 'Token with "' + s.type + '" type was not found.'
            if (this.options.silent) return console.error(l), ''
            throw new Error(l)
          }
        }
      }
      return o
    }
    parseInline(e, o = this.renderer) {
      var r, n
      this.renderer.parser = this
      let i = ''
      for (let t = 0; t < e.length; t++) {
        const s = e[t]
        if (
          (n = (r = this.options.extensions) == null ? void 0 : r.renderers) !=
            null &&
          n[s.type]
        ) {
          const d = this.options.extensions.renderers[s.type].call(
            { parser: this },
            s,
          )
          if (
            d !== !1 ||
            ![
              'escape',
              'html',
              'link',
              'image',
              'strong',
              'em',
              'codespan',
              'br',
              'del',
              'text',
            ].includes(s.type)
          ) {
            i += d || ''
            continue
          }
        }
        const l = s
        switch (l.type) {
          case 'escape': {
            i += o.text(l)
            break
          }
          case 'html': {
            i += o.html(l)
            break
          }
          case 'link': {
            i += o.link(l)
            break
          }
          case 'image': {
            i += o.image(l)
            break
          }
          case 'checkbox': {
            i += o.checkbox(l)
            break
          }
          case 'strong': {
            i += o.strong(l)
            break
          }
          case 'em': {
            i += o.em(l)
            break
          }
          case 'codespan': {
            i += o.codespan(l)
            break
          }
          case 'br': {
            i += o.br(l)
            break
          }
          case 'del': {
            i += o.del(l)
            break
          }
          case 'text': {
            i += o.text(l)
            break
          }
          default: {
            const d = 'Token with "' + l.type + '" type was not found.'
            if (this.options.silent) return console.error(d), ''
            throw new Error(d)
          }
        }
      }
      return i
    }
  },
  ne,
  X =
    ((ne = class {
      constructor(a) {
        b(this, 'options')
        b(this, 'block')
        this.options = a || L
      }
      preprocess(a) {
        return a
      }
      postprocess(a) {
        return a
      }
      processAllTokens(a) {
        return a
      }
      emStrongMask(a) {
        return a
      }
      provideLexer(a = this.block) {
        return a ? _.lex : _.lexInline
      }
      provideParser(a = this.block) {
        return a ? C.parse : C.parseInline
      }
    }),
    b(
      ne,
      'passThroughHooks',
      new Set([
        'preprocess',
        'postprocess',
        'processAllTokens',
        'emStrongMask',
      ]),
    ),
    b(
      ne,
      'passThroughHooksRespectAsync',
      new Set(['preprocess', 'postprocess', 'processAllTokens']),
    ),
    ne),
  uo = class {
    constructor(...a) {
      b(this, 'defaults', Oe())
      b(this, 'options', this.setOptions)
      b(this, 'parse', this.parseMarkdown(!0))
      b(this, 'parseInline', this.parseMarkdown(!1))
      b(this, 'Parser', C)
      b(this, 'Renderer', de)
      b(this, 'TextRenderer', qe)
      b(this, 'Lexer', _)
      b(this, 'Tokenizer', te)
      b(this, 'Hooks', X)
      this.use(...a)
    }
    walkTokens(a, e) {
      var i, r
      let o = []
      for (const n of a)
        switch (((o = o.concat(e.call(this, n))), n.type)) {
          case 'table': {
            const t = n
            for (const s of t.header) o = o.concat(this.walkTokens(s.tokens, e))
            for (const s of t.rows)
              for (const l of s) o = o.concat(this.walkTokens(l.tokens, e))
            break
          }
          case 'list': {
            const t = n
            o = o.concat(this.walkTokens(t.items, e))
            break
          }
          default: {
            const t = n
            ;(r =
              (i = this.defaults.extensions) == null
                ? void 0
                : i.childTokens) != null && r[t.type]
              ? this.defaults.extensions.childTokens[t.type].forEach((s) => {
                  const l = t[s].flat(1 / 0)
                  o = o.concat(this.walkTokens(l, e))
                })
              : t.tokens && (o = o.concat(this.walkTokens(t.tokens, e)))
          }
        }
      return o
    }
    use(...a) {
      const e = this.defaults.extensions || { renderers: {}, childTokens: {} }
      return (
        a.forEach((o) => {
          const i = E({}, o)
          if (
            ((i.async = this.defaults.async || i.async || !1),
            o.extensions &&
              (o.extensions.forEach((r) => {
                if (!r.name) throw new Error('extension name required')
                if ('renderer' in r) {
                  const n = e.renderers[r.name]
                  n
                    ? (e.renderers[r.name] = function (...t) {
                        let s = r.renderer.apply(this, t)
                        return s === !1 && (s = n.apply(this, t)), s
                      })
                    : (e.renderers[r.name] = r.renderer)
                }
                if ('tokenizer' in r) {
                  if (!r.level || (r.level !== 'block' && r.level !== 'inline'))
                    throw new Error(
                      "extension level must be 'block' or 'inline'",
                    )
                  const n = e[r.level]
                  n ? n.unshift(r.tokenizer) : (e[r.level] = [r.tokenizer]),
                    r.start &&
                      (r.level === 'block'
                        ? e.startBlock
                          ? e.startBlock.push(r.start)
                          : (e.startBlock = [r.start])
                        : r.level === 'inline' &&
                          (e.startInline
                            ? e.startInline.push(r.start)
                            : (e.startInline = [r.start])))
                }
                'childTokens' in r &&
                  r.childTokens &&
                  (e.childTokens[r.name] = r.childTokens)
              }),
              (i.extensions = e)),
            o.renderer)
          ) {
            const r = this.defaults.renderer || new de(this.defaults)
            for (const n in o.renderer) {
              if (!(n in r)) throw new Error(`renderer '${n}' does not exist`)
              if (['options', 'parser'].includes(n)) continue
              const t = n,
                s = o.renderer[t],
                l = r[t]
              r[t] = (...d) => {
                let m = s.apply(r, d)
                return m === !1 && (m = l.apply(r, d)), m || ''
              }
            }
            i.renderer = r
          }
          if (o.tokenizer) {
            const r = this.defaults.tokenizer || new te(this.defaults)
            for (const n in o.tokenizer) {
              if (!(n in r)) throw new Error(`tokenizer '${n}' does not exist`)
              if (['options', 'rules', 'lexer'].includes(n)) continue
              const t = n,
                s = o.tokenizer[t],
                l = r[t]
              r[t] = (...d) => {
                let m = s.apply(r, d)
                return m === !1 && (m = l.apply(r, d)), m
              }
            }
            i.tokenizer = r
          }
          if (o.hooks) {
            const r = this.defaults.hooks || new X()
            for (const n in o.hooks) {
              if (!(n in r)) throw new Error(`hook '${n}' does not exist`)
              if (['options', 'block'].includes(n)) continue
              const t = n,
                s = o.hooks[t],
                l = r[t]
              X.passThroughHooks.has(n)
                ? (r[t] = (d) => {
                    if (
                      this.defaults.async &&
                      X.passThroughHooksRespectAsync.has(n)
                    )
                      return (async () => {
                        const c = await s.call(r, d)
                        return l.call(r, c)
                      })()
                    const m = s.call(r, d)
                    return l.call(r, m)
                  })
                : (r[t] = (...d) => {
                    if (this.defaults.async)
                      return (async () => {
                        let c = await s.apply(r, d)
                        return c === !1 && (c = await l.apply(r, d)), c
                      })()
                    let m = s.apply(r, d)
                    return m === !1 && (m = l.apply(r, d)), m
                  })
            }
            i.hooks = r
          }
          if (o.walkTokens) {
            const r = this.defaults.walkTokens,
              n = o.walkTokens
            i.walkTokens = function (t) {
              let s = []
              return (
                s.push(n.call(this, t)), r && (s = s.concat(r.call(this, t))), s
              )
            }
          }
          this.defaults = E(E({}, this.defaults), i)
        }),
        this
      )
    }
    setOptions(a) {
      return (this.defaults = E(E({}, this.defaults), a)), this
    }
    lexer(a, e) {
      return _.lex(a, e != null ? e : this.defaults)
    }
    parser(a, e) {
      return C.parse(a, e != null ? e : this.defaults)
    }
    parseMarkdown(a) {
      return (e, o) => {
        const i = E({}, o),
          r = E(E({}, this.defaults), i),
          n = this.onError(!!r.silent, !!r.async)
        if (this.defaults.async === !0 && i.async === !1)
          return n(
            new Error(
              'marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise.',
            ),
          )
        if (typeof e > 'u' || e === null)
          return n(new Error('marked(): input parameter is undefined or null'))
        if (typeof e != 'string')
          return n(
            new Error(
              'marked(): input parameter is of type ' +
                Object.prototype.toString.call(e) +
                ', string expected',
            ),
          )
        if ((r.hooks && ((r.hooks.options = r), (r.hooks.block = a)), r.async))
          return (async () => {
            const t = r.hooks ? await r.hooks.preprocess(e) : e,
              s = await (r.hooks
                ? await r.hooks.provideLexer(a)
                : a
                  ? _.lex
                  : _.lexInline)(t, r),
              l = r.hooks ? await r.hooks.processAllTokens(s) : s
            r.walkTokens &&
              (await Promise.all(this.walkTokens(l, r.walkTokens)))
            const d = await (r.hooks
              ? await r.hooks.provideParser(a)
              : a
                ? C.parse
                : C.parseInline)(l, r)
            return r.hooks ? await r.hooks.postprocess(d) : d
          })().catch(n)
        try {
          r.hooks && (e = r.hooks.preprocess(e))
          let t = (r.hooks ? r.hooks.provideLexer(a) : a ? _.lex : _.lexInline)(
            e,
            r,
          )
          r.hooks && (t = r.hooks.processAllTokens(t)),
            r.walkTokens && this.walkTokens(t, r.walkTokens)
          let s = (
            r.hooks ? r.hooks.provideParser(a) : a ? C.parse : C.parseInline
          )(t, r)
          return r.hooks && (s = r.hooks.postprocess(s)), s
        } catch (t) {
          return n(t)
        }
      }
    }
    onError(a, e) {
      return (o) => {
        if (
          ((o.message += `
Please report this to https://github.com/markedjs/marked.`),
          a)
        ) {
          const i =
            '<p>An error occurred:</p><pre>' + q(o.message + '', !0) + '</pre>'
          return e ? Promise.resolve(i) : i
        }
        if (e) return Promise.reject(o)
        throw o
      }
    }
  },
  F = new uo()
function I(a, e) {
  return F.parse(a, e)
}
I.options = I.setOptions = (a) => (
  F.setOptions(a), (I.defaults = F.defaults), aa(I.defaults), I
)
I.getDefaults = Oe
I.defaults = L
I.use = (...a) => (F.use(...a), (I.defaults = F.defaults), aa(I.defaults), I)
I.walkTokens = (a, e) => F.walkTokens(a, e)
I.parseInline = F.parseInline
I.Parser = C
I.parser = C.parse
I.Renderer = de
I.TextRenderer = qe
I.Lexer = _
I.lexer = _.lex
I.Tokenizer = te
I.Hooks = X
I.parse = I
var Io = I.options,
  ho = I.setOptions,
  bo = I.use,
  So = I.walkTokens,
  Oo = I.parseInline
var Po = C.parse,
  Eo = _.lex
var ma = [
  {
    id: 'IN02-2014',
    texto: `MINIST\xC9RIO DA AGRICULTURA, PECU\xC1RIA E ABASTECIMENTO

GABINETE DO MINISTRO

INSTRU\xC7\xC3O NORMATIVA N\xBA 2, DE 6 DE FEVEREIRO DE 2014

O MINISTRO DE ESTADO DA AGRICULTURA, PECU\xC1RIA E ABASTECIMENTO, no uso das atribui\xE7\xF5es que lhe confere o art. 87, par\xE1grafo \xFAnico, inciso II, da Constitui\xE7\xE3o, tendo em vista o disposto no Decreto n\xBA 24.114, de 12 de abril de 1934, no Decreto no 5.741, de 30 de mar\xE7o de 2006, e o que consta dos Processos no 21000.004565/1998-69 e n\xBA 21000.000179/2002-45, resolve:

Art. 1\xBA Estabelecer as medidas a serem adotadas pelo produtor, importador, comerciante ou detentor de
plantas e partes de plantas de esp\xE9cies do g\xEAnero Vitis, para preven\xE7\xE3o, controle e erradica\xE7\xE3o da praga *Xanthomonas campestris pv. viticola*, agente etiol\xF3gico do cancro bacteriano da videira.

Art. 2\xBA As medidas fitossanit\xE1rias a serem adotadas em \xE1reas de produ\xE7\xE3o de frutos, em campos de plantas
fornecedoras de material de propaga\xE7\xE3o, ou em quaisquer \xE1reas com exist\xEAncia de plantas do g\xEAnero Vitis, em Unidades da Federa\xE7\xE3o (UFs) sem ocorr\xEAncia da praga, est\xE3o estabelecidas a seguir.
\xA7 1\xBA As medidas fitossanit\xE1rias a serem adotadas pelo produtor, propriet\xE1rio, arrendat\xE1rio ou ocupante a qualquer t\xEDtulo, de propriedade com plantas do g\xEAnero Vitis s\xE3o:
I - utiliza\xE7\xE3o de material propagativo livre da praga;
II - impedimento da entrada na propriedade, de pessoas e equipamentos provenientes de \xE1reas com
ocorr\xEAncia da praga, sem as devidas medidas profil\xE1ticas; e
III - inspe\xE7\xE3o visual frequente das plantas e comunica\xE7\xE3o imediata ao \xD3rg\xE3o Oficial de Defesa
Agropecu\xE1ria sobre qualquer suspeita de ocorr\xEAncia da praga.
\xA7 2\xBA As medidas fitossanit\xE1rias a serem adotadas pelo \xD3rg\xE3o Oficial de Defesa Agropecu\xE1ria s\xE3o:
I - levantamentos de detec\xE7\xE3o a cada ciclo produtivo, realizando inspe\xE7\xE3o visual de ramos, folhas,
infloresc\xEAncias e cachos, obedecendo a uma casualiza\xE7\xE3o em ziguezague, sendo amostradas:
a) seis plantas dentro da \xE1rea e quatro plantas na bordadura, para \xE1reas de at\xE9 um hectare; ou b) doze plantas dentro da \xE1rea e oito plantas na bordadura, para \xE1reas de mais de um at\xE9 cinco hectares, ou ado\xE7\xE3o de uma proporcionalidade, para \xE1reas maiores de cinco hectares;
II - concentra\xE7\xE3o dos levantamentos nas \xE1reas com variedades mais suscet\xEDveis e no per\xEDodo de condi\xE7\xF5es
ambientais favor\xE1veis a ocorr\xEAncia da praga; e
III - coleta e envio de material com sintomas para diagn\xF3stico laboratorial.
\xA7 3\xBA Em caso de confirma\xE7\xE3o, por laudo laboratorial, da presen\xE7a de *Xanthomonas campestris pv. viticola* em UFs sem ocorr\xEAncia da praga, devem ser adotadas as seguintes medidas para erradica\xE7\xE3o do foco:
I - elimina\xE7\xE3o pelo produtor, propriet\xE1rio, arrendat\xE1rio ou ocupante a qualquer t\xEDtulo da propriedade, por
meio de arranquio e queima, de todas as plantas e partes de plantas do talh\xE3o ou do lote no viveiro, inclusive as ervas daninhas;
II - proibi\xE7\xE3o, pelo \xD3rg\xE3o Oficial de Defesa Agropecu\xE1ria, do plantio de variedades mais suscet\xEDveis a
*Xanthomonas campestris pv. viticola* no local da erradica\xE7\xE3o, durante tr\xEAs anos; e
III - inspe\xE7\xE3o conjunta pelo produtor e pelo \xD3rg\xE3o Oficial de Defesa Agropecu\xE1ria, da \xE1rea afetada e
talh\xF5es circunvizinhos daqueles erradicados, a cada trinta dias, no per\xEDodo de condi\xE7\xF5es ambientais favor\xE1veis a ocorr\xEAncia da praga, e a cada sessenta dias, no per\xEDodo de condi\xE7\xF5es ambientais menos favor\xE1veis, durante dois ciclos produtivos, com a finalidade de eliminar novos focos.

Art. 3\xBA As medidas fitossanit\xE1rias a serem adotadas em \xE1reas de produ\xE7\xE3o de frutos, em campos de plantas
fornecedoras de material de propaga\xE7\xE3o, ou em quaisquer \xE1reas com exist\xEAncia de plantas do g\xEAnero Vitis, em Unidades da Federa\xE7\xE3o (UFs) com ocorr\xEAncia da praga, est\xE3o estabelecidas conforme a seguir:
\xA7 1\xBA As medidas fitossanit\xE1rias a serem adotadas pelo produtor, propriet\xE1rio, arrendat\xE1rio ou ocupante a qualquer titulo, de propriedade com plantas do g\xEAnero Vitis, s\xE3o:
I - impedimento da entrada na propriedade que se localize em munic\xEDpio sem ocorr\xEAncia da praga, de
pessoas e equipamentos provenientes de munic\xEDpios com ocorr\xEAncia da praga, sem as devidas medidas profil\xE1ticas;
II - realiza\xE7\xE3o de podas nos meses de menores \xEDndices pluviom\xE9tricos, para as variedades mais
suscet\xEDveis;
III - desinfesta\xE7\xE3o, ap\xF3s cada utiliza\xE7\xE3o, de equipamentos, de ferramentas para poda e de material de
colheita, com produtos sanitizantes recomendados pela pesquisa; e
IV - elimina\xE7\xE3o de todo o material resultante das podas, por meio de enterrio ou queima, para as
variedades mais suscet\xEDveis e sintom\xE1ticas.
\xA7 2\xBA As medidas fitossanit\xE1rias a serem adotadas pelo \xD3rg\xE3o Oficial de Defesa Agropecu\xE1ria s\xE3o:
I - levantamentos de detec\xE7\xE3o e delimita\xE7\xE3o a cada ciclo produtivo, realizando inspe\xE7\xE3o visual de ramos,
folhas, infloresc\xEAncias e cachos;
II - concentra\xE7\xE3o dos levantamentos nas \xE1reas com variedades mais suscet\xEDveis e no per\xEDodo de condi\xE7\xF5es
ambientais favor\xE1veis a ocorr\xEAncia da praga; e
III - coleta e envio de material com sintomas para diagn\xF3stico laboratorial.
\xA7 3\xBA Caso seja detectada a presen\xE7a da praga em munic\xEDpio sem ocorr\xEAncia, dentro de UFs com ocorr\xEAncia da praga, devem ser adotadas as mesmas medidas para erradica\xE7\xE3o do foco descritas no \xA7 3\xBA do art. 2\xBA desta Instru\xE7\xE3o Normativa.

Art. 4\xBA As medidas fitossanit\xE1rias para produ\xE7\xE3o de mudas est\xE3o estabelecidas a seguir, sendo
complementares \xE0 legisla\xE7\xE3o brasileira sobre sementes e mudas.
\xA7 1\xBA As medidas fitossanit\xE1rias a serem adotadas pelo produtor de mudas de videira s\xE3o:
I - manuten\xE7\xE3o do viveiro cercado com a finalidade de restringir o ingresso de pessoas estranhas ao
servi\xE7o;
II fornecimento de vestimentas e botas que dever\xE3o ser utilizadas exclusivamente no viveiro;
III - desinfesta\xE7\xE3o dos equipamentos e ferramentas utilizados na produ\xE7\xE3o, com produtos sanitizantes
recomendados pela pesquisa;
IV - realiza\xE7\xE3o de inspe\xE7\xF5es visuais em todo o viveiro semanalmente, concentrando-se nas variedades
mais suscet\xEDveis e nos per\xEDodos de condi\xE7\xF5es ambientais favor\xE1veis a ocorr\xEAncia da praga; e
V - comunica\xE7\xE3o imediata ao \xD3rg\xE3o Oficial de Defesa Agropecu\xE1ria sobre qualquer suspeita de
ocorr\xEAncia da praga.
\xA7 2\xBA As medidas fitossanit\xE1rias a serem adotadas pelos \xD3rg\xE3os Oficiais de Defesa Agropecu\xE1ria s\xE3o:

I - inspe\xE7\xF5es para verifica\xE7\xE3o de que os campos de plantas fornecedoras de material de propaga\xE7\xE3o,
borbulheiras, jardins clonais e quaisquer outros locais que forne\xE7am material de propaga\xE7\xE3o sejam conduzidos sob as medidas fitossanit\xE1rias constantes nesta Instru\xE7\xE3o Normativa;
II - coleta e envio de material com sintomas para diagn\xF3stico laboratorial; e
III - exig\xEAncia de que, quando confirmada a presen\xE7a de *Xanthomonas campestris pv. viticola* por laudo
laboratorial, as mudas de todo o lote sejam eliminadas por meio de queima.

Art. 5\xBA Os levantamentos para detec\xE7\xE3o e delimita\xE7\xE3o das \xE1reas de ocorr\xEAncia da praga e a orienta\xE7\xE3o aos
produtores e viveiristas sobre as variedades suscet\xEDveis e sobre as medidas obrigat\xF3rias de preven\xE7\xE3o, controle e erradica\xE7\xE3o estabelecidas nesta Instru\xE7\xE3o Normativa, s\xE3o de responsabilidade dos \xD3rg\xE3os Oficiais de Defesa Agropecu\xE1ria.
\xA7 1\xBA Quando se detectar material suspeito de infec\xE7\xE3o por *Xanthomonas campestris pv. viticola*, coleta-se amostra para diagn\xF3stico em laborat\xF3rio da Rede Nacional de Laborat\xF3rios Agropecu\xE1rios do Sistema Unificado de Aten\xE7\xE3o \xE0 Sanidade Agropecu\xE1ria.
\xA7 2\xBA Caso o diagn\xF3stico laboratorial confirme a presen\xE7a da praga, devem ser adotadas \xE0s expensas do produtor, importador, comerciante ou detentor, todas as medidas exigidas para preven\xE7\xE3o, controle e erradica\xE7\xE3o da praga.
\xA7 3\xBA Os \xD3rg\xE3os Oficiais de Defesa Agropecu\xE1ria devem realizar inspe\xE7\xF5es durante o ciclo produtivo da cultura, a fim de verificar o cumprimento das medidas estabelecidas nesta Instru\xE7\xE3o Normativa.
\xA7 4\xBA Os \xD3rg\xE3os Oficiais de Defesa Agropecu\xE1ria devem encaminhar os relat\xF3rios decorrentes das inspe\xE7\xF5es ao Servi\xE7o respons\xE1vel pela Sanidade Vegetal na Superintend\xEAncia Federal de Agricultura (SFA) da UF, que por sua vez encaminha c\xF3pia ao Departamento de Sanidade Vegetal - DSV, Secretaria de Defesa Agropecu\xE1ria - SDA, Minist\xE9rio da Agricultura, Pecu\xE1ria e Abastecimento- MAPA.

Art. 6\xBA O tr\xE2nsito de plantas e partes de plantas do g\xEAnero Vitis provenientes de UF com ocorr\xEAncia
comprovada da praga com destino a UF sem ocorr\xEAncia da praga somente \xE9 permitido nos seguintes casos:
I - quando se tratar de mudas acompanhadas de Permiss\xE3o de Tr\xE2nsito de Vegetais (PTV) com a seguinte
Declara\xE7\xE3o Adicional:
"As mudas foram obtidas por micropropaga\xE7\xE3o e indexadas para *Xanthomonas campestris pv. viticola*";
II - quando se tratar de frutos exclusivamente para consumo in natura e acompanhados de PTV com a
seguinte Declara\xE7\xE3o Adicional:
"Os frutos foram produzidos em propriedade onde s\xE3o adotadas as medidas de preven\xE7\xE3o e controle do cancro bacteriano da videira, previstas na legisla\xE7\xE3o fitossanit\xE1ria"; e
III - quando se tratar de material vegetal para fins de pesquisa institucional - caso em que os \xD3rg\xE3os
Estaduais de Defesa Agropecu\xE1ria das UFs de origem e de destino atender\xE3o a solicita\xE7\xE3o do pesquisador, por se tratar de interesse nacional em obten\xE7\xE3o de conhecimento sobre a praga - desde que obrigatoriamente cumpridos os seguintes procedimentos:
a) o material deve transitar acompanhado de PTV com a seguinte Declara\xE7\xE3o Adicional: "O material foi lacrado na origem, sob n\xFAmero de lacre X, e embalado de maneira a garantir a n\xE3o dispers\xE3o da praga";
b) PTV ser\xE1 emitida ap\xF3s o recebimento de uma via do Termo de Compromisso, assinada pelo pesquisador, o qual se responsabiliza pela n\xE3o dispers\xE3o da praga, e pela esteriliza\xE7\xE3o do material ap\xF3s a realiza\xE7\xE3o da pesquisa;
c) \xD3rg\xE3o Estadual de Defesa Agropecu\xE1ria da UF de destino deve manter uma segunda via do Termo de Compromisso assinada, com anota\xE7\xE3o da identifica\xE7\xE3o da PTV que acompanhou o material; e d) o \xD3rg\xE3o Estadual de Defesa Agropecu\xE1ria da UF de origem do material deve comunicar o envio, ao \xD3rg\xE3o Estadual de Defesa Agropecu\xE1ria da UF de destino.

Art. 7\xBA Cabe ao Servi\xE7o respons\xE1vel pela Sanidade Vegetal da SFA na UF a supervis\xE3o da execu\xE7\xE3o das
medidas previstas nesta Instru\xE7\xE3o Normativa.
Par\xE1grafo \xFAnico. As a\xE7\xF5es a serem executadas pelas Unidades da Federa\xE7\xE3o originam-se de conv\xEAnios firmados junto ao MAPA, nos termos do art. 157 do Decreto n\xBA 5.741, de 30 de mar\xE7o de 2006.

Art. 8\xBA Esta Instru\xE7\xE3o Normativa entra em vigor decorridos 30 (trinta) dias ap\xF3s a sua publica\xE7\xE3o.

Art. 9\xBA Fica revogada a Instru\xE7\xE3o Normativa n\xBA 9, de 20 de abril de 2006.

ANT\xD4NIO ANDRADE
D.O.U., 07/02/2014 - Se\xE7\xE3o 1`,
  },
  {
    id: 'IN02-2018',
    texto: `MINIST\xC9RIO DA AGRICULTURA, PECU\xC1RIA E ABASTECIMENTO

GABINETE DA SDA

INSTRU\xC7\xC3O NORMATIVA N\xBA 2, DE 19 DE JANEIRO DE 2018

O SECRET\xC1RIO DE DEFESA AGROPECU\xC1RIA, DO MINIST\xC9RIO DA AGRICULTURA, PECU\xC1RIA E ABASTECIMENTO, no uso das atribui\xE7\xF5es que lhe conferem os arts. 18 e 53 do Anexo I do Decreto n\xBA 8.852, de 20 de setembro de 2016, tendo em vista o disposto no Decreto n\xBA 24.114, de 12 de abril de 1934, no Decreto n\xBA 5.741, de 30 de mar\xE7o de 2006, no Decreto n\xBA 5.759, de 17 de abril de 2006, na Instru\xE7\xE3o Normativa n\xBA 28, de 20 de julho de 2017, e o que consta do Processo n\xBA 21000.053608/2017-63, resolve:

Art. 1\xBA Fica estabelecida a Classifica\xE7\xE3o de Risco de introdu\xE7\xE3o e
dispers\xE3o da praga *Bactrocera carambolae* das Unidades da Federa\xE7\xE3o sem ocorr\xEAncia da praga, conforme anexo.

Art. 2\xBA Esta Instru\xE7\xE3o Normativa entra em vigor na data de sua
publica\xE7\xE3o.

##### Classifica\xE7\xE3o de Risco por Unidade da Federa\xE7\xE3o

 **BAIXO:** Mato Grosso do Sul, Cear\xE1, Rio Grande do Norte, Para\xEDba, Pernambuco, Bahia, Alagoas, Sergipe, Minas Gerais, Esp\xEDrito Santo, Rio de Janeiro, S\xE3o Paulo, Paran\xE1, Santa Catarina e Rio Grande do Sul.
**M\xC9DIO:** Acre, Piau\xED, Rond\xF4nia, Goi\xE1s e Distrito Federal 
**ALTO:** Amazonas, Tocantins, Mato Grosso e Maranh\xE3o Este conte\xFAdo n\xE3o substitui o publicado na vers\xE3o certificada.`,
  },
  {
    id: 'IN08-2012',
    texto: `MINIST\xC9RIO DA AGRICULTURA, PECU\xC1RIA E ABASTECIMENTO

GABINETE DO MINISTRO

INSTRU\xC7\xC3O NORMATIVA N\xBA 8, DE 17 DE ABRIL DE 2012

O MINISTRO DE ESTADO, INTERINO, DA AGRICULTURA, PECU\xC1RIA E ABASTECIMENTO,
no uso da atribui\xE7\xE3o que lhe confere o art. 87, par\xE1grafo \xFAnico, inciso II, da Constitui\xE7\xE3o, tendo em vista o disposto no Decreto n\xBA 5.741, de 30 de mar\xE7o de 2006, no Decreto n\xBA 24.114, de 12 de abril de 1934, e o que consta do Processo n\xBA 21000.005697/2008-41, resolve:

Art. 1\xBA Proibir o tr\xE2nsito de vegetais e suas partes das esp\xE9cies *Citrus spp.*, *Cocos nucifera*, *Acacia sp.*,
*Azadirachta indica*, *Melia azedarach* e *Sorghum bicolor*, hospedeiras do \xC1caro Hindu dos Citros (*Schizotetranychus hindustanicus*), quando oriundas de Unidades da Federa\xE7\xE3o (UF) onde seja constatada, por laudo laboratorial oficial, a presen\xE7a da praga. *(Reda\xE7\xE3o dada pela Instru\xE7\xE3o Normativa* *6/2013/MAPA)*
_____________________________________________________________________ *Reda\xE7\xF5es* *Anteriores* 

Par\xE1grafo \xFAnico. Excetuam-se desta proibi\xE7\xE3o o material in vitro e a madeira serrada de todas as esp\xE9cies relacionadas no caput deste artigo, assim como os frutos de *Cocos nucifera* secos e descascados.
*(Acrescentado pela Instru\xE7\xE3o Normativa 6/2013/MAPA)*

Art. 2\xBA Os frutos de *Citrus spp.* provenientes de UF com ocorr\xEAncia da praga poder\xE3o transitar para outras UFs desde que passem por beneficiamento seguido de inspe\xE7\xE3o.
\xA7 1\xBA O beneficiamento dever\xE1 constar de, no m\xEDnimo, imers\xE3o de frutos em solu\xE7\xE3o de hipoclorito de s\xF3dio a 200 ppm por 10 minutos, seguida de lavagem com solu\xE7\xE3o de detergente neutro, escova\xE7\xE3o, secagem e aplica\xE7\xE3o de cera.
\xA7 2\xBA A inspe\xE7\xE3o ser\xE1 realizada pelo Respons\xE1vel T\xE9cnico habilitado para Certifica\xE7\xE3o Fitossanit\xE1ria de Origem em amostra representativa de cada partida, colhida de acordo com a seguinte tabela:
| Tamanho da partida (n\xBA de caixas) | Tamanho da amostra | Quantidade de frutos a inspecionar (kg) |
| --- | --- | --- |
| 001 a 500 | 1,0% | 5 |
| 501 a 2000 | 0,5% | 10 |
| 2001 a 5000 | 0,2% | 15 |
| 5001 a 20000 | 0,1% | 20 |
| mais de 20001 | 0,05% | 30 |

\xA7 3\xBA O Certificado Fitossanit\xE1rio de Origem - CFO ou Certificado Fitossanit\xE1rio de Origem Consolidado - CFOC dever\xE1 conter a seguinte Declara\xE7\xE3o Adicional: "Os frutos foram imersos em solu\xE7\xE3o de hipoclorito de s\xF3dio a 200 ppm por 10 minutos, seguido de lavagem com solu\xE7\xE3o de detergente neutro, escova\xE7\xE3o, secagem e aplica\xE7\xE3o de cera e encontram-se livres do \xC1caro Hindu dos Citros".
\xA7 4\xBA Para o tr\xE2nsito de frutos, ser\xE1 exigida a Permiss\xE3o de Tr\xE2nsito de Vegetais (PTV) devidamente embasada em Certificado Fitossanit\xE1rio de Origem (CFO) ou Certificado Fitossanit\xE1rio de Origem Consolidado (CFOC) com a seguinte Declara\xE7\xE3o Adicional:

"A partida atende \xE0s exig\xEAncias constantes da Instru\xE7\xE3o Normativa n\xBA [n\xFAmero desta Instru\xE7\xE3o Normativa] e encontra-se livre do \xC1caro Hindu dos Citros".

Art. 3\xBA Excetuam-se das exig\xEAncias descritas nesta Instru\xE7\xE3o Normativa os vegetais hospedeiros e suas partes, oriundos de \xC1rea Livre da Praga (ALP) *Schizotetranichus hindustanicus*, oficialmente institu\xEDda pelo Minist\xE9rio da Agricultura, Pecu\xE1ria e Abastecimento, devendo essa condi\xE7\xE3o ser atestada por PTV embasada em CFO ou CFOC com a seguinte Declara\xE7\xE3o Adicional:
"A partida \xE9 proveniente de \xC1rea Livre da Praga \xC1caro Hindu dos Citros".

Art. 4\xBA Esta Instru\xE7\xE3o Normativa entra em vigor na data de sua publica\xE7\xE3o.

Art. 5\xBA Fica revogada a Instru\xE7\xE3o Normativa n\xBA 34, de 8 de setembro de 2009 .

JOS\xC9 CARLOS VAZ

D.O.U., 18/04/2012 - Se\xE7\xE3o 1`,
  },
  {
    id: 'IN112-2020',
    texto: `DI\xC1RIO OFICIAL DA UNI\xC3O
Publicado em: 15/12/2020 | Edi\xE7\xE3o: 239 | Se\xE7\xE3o: 1 | P\xE1gina: 10
\xD3rg\xE3o: Minist\xE9rio da Agricultura, Pecu\xE1ria e Abastecimento/Secretaria de Defesa Agropecu\xE1ria

INSTRU\xC7\xC3O NORMATIVA N\xBA 112, DE 11 DE DEZEMBRO DE 2020

Institui o Plano Nacional de Preven\xE7\xE3o e Vigil\xE2ncia de Moniliophthora roreri - PNPV/Monil\xEDase.

O SECRET\xC1RIO DE DEFESA AGROPECU\xC1RIA DO MINIST\xC9RIO DA AGRICULTURA, PECU\xC1RIA E ABASTECIMENTO, no uso das atribui\xE7\xF5es que lhe conferem os arts. 21 e 63 do Anexo I do Decreto n\xBA 10.253, de 20 de fevereiro de 2020, tendo em vista o disposto no Decreto n\xBA 24.114, de 12 de abril de 1934, no Decreto n\xBA 5.759, de 17 de abril de 2006, no Decreto n\xBA 5.741, de 30 de mar\xE7o de 2006, no Decreto n\xBA 8.133, de 28 de outubro de 2013, no Decreto n\xBA 8.762, de 10 de maio de 2016, na Instru\xE7\xE3o Normativa n\xBA 45, de 22 de agosto de 2018, na Instru\xE7\xE3o Normativa n\xBA 39, de 1 de outubro de 2018, na Portaria n\xBA 131, de 27 de junho de 2019, e o que consta do Processo n\xBA 21000.007096/2019-25, resolve:

CAP\xCDTULO I
DAS DISPOSI\xC7\xD5ES GERAIS

Art. 1\xBA Instituir no \xE2mbito do Programa Nacional de Preven\xE7\xE3o e Vigil\xE2ncia de Pragas Quarenten\xE1rias Ausentes, o Plano Nacional de Preven\xE7\xE3o e Vigil\xE2ncia de Moniliophthora roreri - PNPV/Monil\xEDase, na forma desta Instru\xE7\xE3o Normativa.

Art. 2\xBA O PNPV/Monil\xEDase estabelece as diretrizes e os procedimentos operacionais para aplica\xE7\xE3o de medidas preventivas e de conten\xE7\xE3o, supress\xE3o e erradica\xE7\xE3o de focos de Moniliophthora roreri por meio de:
I - educa\xE7\xE3o fitossanit\xE1ria;
II - capacita\xE7\xE3o;
III - elabora\xE7\xE3o, coordena\xE7\xE3o e execu\xE7\xE3o de a\xE7\xF5es fitossanit\xE1rias para preven\xE7\xE3o; e
IV - elabora\xE7\xE3o, coordena\xE7\xE3o e execu\xE7\xE3o de a\xE7\xF5es fitossanit\xE1rias para conting\xEAncia.

Art. 3\xBA O PNPV/Monil\xEDase ser\xE1 coordenado pela \xE1rea competente do Departamento de Sanidade Vegetal e Insumos Agr\xEDcolas, da Secretaria de Defesa Agropecu\xE1ria, do Minist\xE9rio da Agricultura, Pecu\xE1ria e Abastecimento, visando identificar, propor e articular a implementa\xE7\xE3o de a\xE7\xF5es fitossanit\xE1rias para a preven\xE7\xE3o e conting\xEAncia relacionadas \xE0 praga no Brasil.
Par\xE1grafo \xFAnico. O Departamento de Sanidade Vegetal e Insumos Agr\xEDcolas poder\xE1 convidar representantes de entidades p\xFAblicas federais, estaduais e da iniciativa privada, vinculadas \xE0 pesquisa e \xE0 produ\xE7\xE3o agropecu\xE1ria para realizar a\xE7\xF5es do PNPV/Monil\xEDase, cujas atividades, n\xE3o remuneradas, ser\xE3o consideradas de relevante interesse p\xFAblico.

Art. 4\xBA Compete \xE0s Superintend\xEAncias Federais de Agricultura, Pecu\xE1ria e Abastecimento nas Unidades da Federa\xE7\xE3o, por meio de suas unidades de sanidade vegetal:
I - implementar, executar e coordenar as a\xE7\xF5es do PNPV/Monil\xEDase, em articula\xE7\xE3o com o \xD3rg\xE3o Estadual de Defesa Sanit\xE1ria Vegetal - OEDSV, com entidades e institui\xE7\xF5es de pesquisa agropecu\xE1ria e com o setor produtivo, na respectiva Unidade da Federa\xE7\xE3o - UF;
II - coordenar a capacita\xE7\xE3o dos agentes respons\xE1veis pela execu\xE7\xE3o das a\xE7\xF5es previstas neste PNPV/Monil\xEDase; e
III - coordenar e implementar a\xE7\xF5es de educa\xE7\xE3o fitossanit\xE1ria junto a produtores, t\xE9cnicos e popula\xE7\xE3o em geral.

CAP\xCDTULO II
DAS A\xC7\xD5ES FITOSSANIT\xC1RIAS PARA PREVEN\xC7\xC3O DE MONILIOPHTHORA RORERI

Art. 5\xBA As a\xE7\xF5es fitossanit\xE1rias para preven\xE7\xE3o de Moniliophthora roreri ser\xE3o aplicadas a partir da vig\xEAncia desta Instru\xE7\xE3o Normativa, enquanto for considerada praga quarenten\xE1ria ausente, priorizada conforme legisla\xE7\xE3o espec\xEDfica.
Par\xE1grafo \xFAnico As \xE1reas para a ado\xE7\xE3o das a\xE7\xF5es fitossanit\xE1rias previstas no caput ser\xE3o definidas pelas Superintend\xEAncias Federais de Agricultura, Pecu\xE1ria e Abastecimento considerando a presen\xE7a de hospedeiros suscet\xEDveis a Moniliophthora roreri e a exist\xEAncia de pontos de ingresso de produtos vegetais oriundos de pa\xEDses onde a praga est\xE1 presente.

Art. 6\xBA As Superintend\xEAncias Federais de Agricultura, Pecu\xE1ria e Abastecimento dever\xE3o realizar em articula\xE7\xE3o com os \xD3rg\xE3os Estaduais de Defesa Sanit\xE1ria Vegetal - OEDSV, levantamentos fitossanit\xE1rios espec\xEDficos de detec\xE7\xE3o da praga Moniliophthora roreri.
\xA7 1\xBA A metodologia de levantamento espec\xEDfico de detec\xE7\xE3o ser\xE1 detalhada pelo Departamento de Sanidade Vegetal e Insumos Agr\xEDcolas e seguir\xE1 as diretrizes da Norma Internacional de Medidas Fitossanit\xE1rias n\xBA 6 - Diretrizes para Vigil\xE2ncia.
\xA7 2\xBA O levantamento dever\xE1 ser realizado anualmente, no per\xEDodo de frutifica\xE7\xE3o do cacaueiro, do cupua\xE7uzeiro e de outras esp\xE9cies dos g\xEAneros Theobroma e Herrania.

Art. 7\xBA O Departamento de Sanidade Vegetal e Insumos Agr\xEDcolas definir\xE1 diretrizes para a fiscaliza\xE7\xE3o e o controle de tr\xE2nsito em portos, aeroportos e postos de fronteira para orientar as unidades de Vigil\xE2ncia Agropecu\xE1ria Internacional nas a\xE7\xF5es espec\xEDficas para a preven\xE7\xE3o da introdu\xE7\xE3o de Moniliophthora roreri.

Art. 8\xBA O Departamento de Sanidade Vegetal e Insumos Agr\xEDcolas divulgar\xE1 Alertas Quarenten\xE1rios relacionados \xE0 praga Moniliophthora roreri.

Art. 9\xBA . O Departamento de Sanidade Vegetal e Insumos Agr\xEDcolas far\xE1 gest\xE3o junto aos \xF3rg\xE3os p\xFAblicos que regulamentam o transporte a\xE9reo, mar\xEDtimo, fluvial e rodovi\xE1rio do Pa\xEDs, para que informem aos seus usu\xE1rios da proibi\xE7\xE3o de importa\xE7\xE3o de material propagativo de plantas reconhecidamente hospedeiras de Moniliophthora roreridos pa\xEDses com presen\xE7a da praga, bem como dos riscos relacionados a outros artigos regulamentados capazes de disseminar o fungo.

CAP\xCDTULO III
DAS A\xC7\xD5ES FITOSSANIT\xC1RIAS PARA A CONTING\xCANCIA DE MONILIOPHTHORA RORERI

Art. 10. As suspeitas de ocorr\xEAncia de Moniliophthora roreri em levantamentos de detec\xE7\xE3o ou em decorr\xEAncia de notifica\xE7\xE3o dever\xE3o ser investigadas pela Superintend\xEAncia Federal de Agricultura, Pecu\xE1ria e Abastecimento em articula\xE7\xE3o com o OEDSV.
\xA7 1\xBA A notifica\xE7\xE3o da suspeita poder\xE1 ser efetuada por entidades federais, estaduais, municipais e da iniciativa privada, ou por qualquer cidad\xE3o, devendo ser encaminhada \xE0 Superintend\xEAncia Federal de Agricultura, Pecu\xE1ria e Abastecimento, a quem compete iniciar o processo de apura\xE7\xE3o.
\xA7 2\xBA A suspeita de ocorr\xEAncia da praga Moniliophthora roreridever\xE1 ser imediatamente comunicada ao Departamento de Sanidade Vegetal e Insumos Agr\xEDcolas pela Superintend\xEAncia Federal de de Agricultura, Pecu\xE1ria e Abastecimento.
\xA7 3\xBA Ap\xF3s recebida a notifica\xE7\xE3o, dever\xE1 ser realizada dilig\xEAncia visando \xE0 apura\xE7\xE3o da suspeita por meio de coleta de amostra do material vegetal e envio a um laborat\xF3rio oficial do Minist\xE9rio da Agricultura, Pecu\xE1ria e Abastecimento para identifica\xE7\xE3o do agente causal.
\xA7 4\xBA Os procedimentos de coleta, identifica\xE7\xE3o e envio da amostra, assim como os aspectos de biosseguran\xE7a a serem seguidos, ser\xE3o elaborados e atualizados pelo Departamento de Sanidade Vegetal e Insumos Agr\xEDcolas.

Art. 11. Como medida cautelar, o agente p\xFAblico competente da Superintend\xEAncia Federal de de Agricultura, Pecu\xE1ria e Abastecimento ou do OEDSV/UF poder\xE1 determinar a interdi\xE7\xE3o total ou parcial da propriedade e a suspens\xE3o imediata de atividades que promovam a dissemina\xE7\xE3o da praga.
\xA7 1\xBA Caso o propriet\xE1rio ou preposto n\xE3o adote as a\xE7\xF5es fitossanit\xE1rias determinadas ou as promova de forma negligente, colocando em risco outras \xE1reas de produ\xE7\xE3o, o Minist\xE9rio da Agricultura, Pecu\xE1ria e Abastecimento promover\xE1 representa\xE7\xE3o junto ao Minist\xE9rio P\xFAblico para apura\xE7\xE3o de responsabilidade.
\xA7 2\xBA Caso n\xE3o seja confirmada a ocorr\xEAncia, a propriedade ser\xE1 imediatamente desinterditada.

Art. 12. Confirmada a ocorr\xEAncia da praga, ser\xE1 estabelecida, mediante Portaria, a \xE1rea sob quarentena formada pelo raio de 1 km, a partir do ponto de detec\xE7\xE3o da praga.
\xA7 1\xBA A Superintend\xEAncia Federal de Agricultura, Pecu\xE1ria e Abastecimento, em parceria com o OEDSV, iniciar\xE1 imediatamente na \xE1rea sob quarentena as a\xE7\xF5es fitossanit\xE1rias de conten\xE7\xE3o, supress\xE3o e erradica\xE7\xE3o, em \xE1reas de produ\xE7\xE3o comercial ou n\xE3o comercial, conforme orienta\xE7\xE3o do Departamento de Sanidade Vegetal e Insumos Agr\xEDcolas.
\xA7 2\xBA A medida cautelar de que trata o art. 12 dever\xE1 ser mantida, e caso n\xE3o tenha sido aplicada, dever\xE1 ser interditada imediatamente a propriedade, total ou parcialmente, e dever\xE3o ser suspensas as atividades que promovam a dissemina\xE7\xE3o da praga.
\xA7 3\xBA As am\xEAndoas fermentadas e secas de cacau, classificadas como Tipo I e II poder\xE3o ser comercializadas, desde que sejam acondicionadas em sacarias novas.
\xA7 4\xBA Para outros artigos regulamentados, n\xE3o hospedeiros de Moniliophthora roreri, mas capazes de disseminar a praga existente na \xE1rea delimitada, poder\xE3o ser adotadas medidas fitossanit\xE1rias de desinfesta\xE7\xE3o, conforme defini\xE7\xE3o do Departamento de Sanidade Vegetal e Insumos Agr\xEDcolas, visando evitar a dissemina\xE7\xE3o da praga.

Art. 13. A Superintend\xEAncia Federal de Agricultura, Pecu\xE1ria e Abastecimento, em parceria com o OEDSV, realizar\xE1 levantamento de delimita\xE7\xE3o nas \xE1reas circunvizinhas \xE0 \xE1rea de quarentena conforme procedimento definido pelo Departamento de Sanidade Vegetal e Insumos Agr\xEDcolas.
Par\xE1grafo \xFAnico. No caso de novas detec\xE7\xF5es da praga durante as a\xE7\xF5es de levantamento fitossanit\xE1rio aplicar-se-\xE3o os procedimentos previstos no art. 12.

Art. 14. Alternativas que impe\xE7am a dispers\xE3o da praga poder\xE3o ser definidas pelo Departamento de Sanidade Vegetal e Insumos Agr\xEDcolas.

Art. 15. Caber\xE1 exclusivamente ao Departamento de Sanidade Vegetal e Insumos Agr\xEDcolas a comunica\xE7\xE3o oficial da primeira detec\xE7\xE3o em territ\xF3rio nacional da praga Moniliophthora roreri.

CAP\xCDTULO IV
DISPOSI\xC7\xD5ES FINAIS

Art. 16. N\xE3o havendo novas detec\xE7\xF5es de frutos infectados por Moniliophthora roreri durante duas safras da cultura, ap\xF3s a \xFAltima detec\xE7\xE3o da praga, as a\xE7\xF5es fitossanit\xE1rias de conting\xEAncia na \xE1rea sob quarentena ser\xE3o conclu\xEDdas.

Art. 17. Os \xF3rg\xE3os com mandato ou atribui\xE7\xE3o para execu\xE7\xE3o de atividades relativas \xE0 defesa agropecu\xE1ria nas unidades da federa\xE7\xE3o atuar\xE3o na fiscaliza\xE7\xE3o do cumprimento desta Instru\xE7\xE3o Normativa.

Art. 18. As institui\xE7\xF5es, p\xFAblicas ou privadas, que receberem miss\xF5es t\xE9cnicas internacionais ou realizarem pesquisa ou treinamentos em pa\xEDses de ocorr\xEAncia da praga dever\xE3o adotar procedimentos m\xEDnimos de biosseguran\xE7a visando evitar a introdu\xE7\xE3o da praga no Brasil conforme procedimentos definidos pelo Departamento de Sanidade Vegetal e Insumos Agr\xEDcolas.

Art. 19. Esta Instru\xE7\xE3o Normativa entra em vigor na data de 04 de janeiro de 2021.

JOS\xC9 GUILHERME TOLLSTADIUS LEAL`,
  },
  {
    id: 'IN17-2005',
    texto: `MINIST\xC9RIO DA AGRICULTURA, PECU\xC1RIA E ABASTECIMENTO

SECRETARIA DE DEFESA AGROPECU\xC1RIA

INSTRU\xC7\xC3O NORMATIVA N\xBA 17, DE 31 DE MAIO DE 2005
Decreto n\xBA 5.351, de 21 de janeiro de 2005, tendo em vista o disposto no Regulamento de Defesa

do Processo n\xBA 21000.010414/2004-59, resolve:

Art. 1\xBA Aprovar os PROCEDIMENTOS PARA A CARACTERIZA\xC7\xC3O, IMPLANTA\xC7\xC3O E
MANUTEN\xC7\xC3O DE \xC1REA LIVRE DA SIGATOKA NEGRA e os PROCEDIMENTOS PARA
IMPLANTA\xC7\xC3O E MANUTEN\xC7\xC3O DO SISTEMA DE MITIGA\xC7\xC3O DE RISCO PARA SIGATOKA
NEGRA - Mycosphaerella fijiensis (Morelet) Deighton, constantes dos Anexos I e II desta Instru\xE7\xE3o Normativa.
\xA7 1\xBA Nas Unidades da Federa\xE7\xE3o onde a praga n\xE3o foi detectada, dever\xE1 ser comprovada a condi\xE7\xE3o de \xC1rea Livre da Sigatoka Negra ao Departamento de Sanidade Vegetal - DSV, desta Secretaria, para reconhecimento oficial, no prazo de 180 (cento e oitenta) dias, a partir da data de publica\xE7\xE3o desta Instru\xE7\xE3o Normativa.
\xA7 2\xBA Ficam convalidados os prazos vincendos estabelecidos conforme a Instru\xE7\xE3o Normativa n\xBA 41, de 21 de junho de 2002, para a manuten\xE7\xE3o dos Locais de Produ\xE7\xE3o Livres e das \xC1reas Livres da Sigatoka Negra reconhecidos pelo MAPA.

Art. 2\xBA O tr\xE2nsito de frutos de bananeira nas Unidades da Federa\xE7\xE3o - UF somente poder\xE1 ocorrer nos
seguintes casos: *(Reda\xE7\xE3o dada pela Instru\xE7\xE3o Normativa 4/2012/SDA/MAPA)* _____________________________________________________________________ *Reda\xE7\xF5es* *Anteriores*
I - entre \xC1reas Livres de Sigatoka Negra; *(Acrescentado pela Instru\xE7\xE3o Normativa 4/2012/SDA/MAPA)*
II - entre UF sem ocorr\xEAncia de Sigatoka Negra, ressalvadas as \xC1reas Livres; *(Acrescentado pela*
*Instru\xE7\xE3o Normativa 4/2012/SDA/MAPA)*
III - de \xC1rea Livre de Sigatoka Negra para \xE1rea com ocorr\xEAncia da praga; *(Acrescentado pela Instru\xE7\xE3o*
*Normativa 4/2012/SDA/MAPA)*
IV - de UF sem ocorr\xEAncia de Sigatoka Negra para \xE1rea com ocorr\xEAncia da praga; *(Acrescentado pela*
*Instru\xE7\xE3o Normativa 4/2012/SDA/MAPA)*
V - entre \xE1reas com ocorr\xEAncia de Sigatoka Negra, vedada a passagem por \xC1rea Livre ou UF considerada
de ocorr\xEAncia da praga, que tenha solicitado a revis\xE3o de sua condi\xE7\xE3o fitossanit\xE1ria, nos termos do \xA7 1\xBA do art. 11; ou *(Acrescentado pela Instru\xE7\xE3o Normativa 4/2012/SDA/MAPA)*
VI - de Unidade de Produ\xE7\xE3o sob Sistema de Mitiga\xE7\xE3o de Risco para Sigatoka Negra para as demais
\xE1reas. *(Acrescentado pela Instru\xE7\xE3o Normativa 4/2012/SDA/MAPA)*

Art. 3\xBA Proibir o tr\xE2nsito de mudas de Musa spp e seus cultivares micropropagados, entre as Unidades da
Federa\xE7\xE3o, que n\xE3o forem:
I - pr\xE9-aclimatadas ou aclimatadas em estufas ou casas de vegeta\xE7\xE3o; e

II - tratadas com fungicidas registrados, 10 (dez) dias antes de sua expedi\xE7\xE3o para as Unidades da
Federa\xE7\xE3o.
III - transportadas ainda in vitro. *(Acrescentado(a) pelo(a) Instru\xE7\xE3o Normativa 21/2005/SDA/MAPA)*

Art. 4\xBA Proibir o tr\xE2nsito de mudas de bananeira, n\xE3o micropropagadas, que n\xE3o sejam provenientes de
bananais de \xC1reas Livres de Sigatoka Negra. *(Reda\xE7\xE3o dada pela Instru\xE7\xE3o Normativa*
*4/2012/SDA/MAPA)*
_____________________________________________________________________ *Reda\xE7\xF5es* *Anteriores*

Art. 5\xBA No interesse de institui\xE7\xF5es de pesquisa cient\xEDfica, ser\xE1 permitido o tr\xE2nsito de material gen\xE9tico de
Musa spp e seus cultivares, para estudo, acompanhado de Autoriza\xE7\xE3o Declarat\xF3ria emitida pela \xC1rea de Sanidade Vegetal da Superintend\xEAncia Federal da Agricultura - SFA na Unidade da Federa\xE7\xE3o de origem do material.
\xA7 1\xBA O material gen\xE9tico de que trata o caput deste artigo dever\xE1 ser transportado em recipiente lacrado, devendo o n\xFAmero do lacre constar da Autoriza\xE7\xE3o Declarat\xF3ria.
\xA7 2\xBA A SFA no Estado emitente dever\xE1 comunicar, \xE0 SFA no Estado de destino, a remessa do material.
\xA7 3\xBA O interessado dever\xE1 comunicar a SFA de destino quando do recebimento do material para que haja inspe\xE7\xE3o do mesmo.

Art. 6\xBA Proibir o tr\xE2nsito de bananas em cacho em todo o territ\xF3rio nacional.

Art. 7\xBA O tr\xE2nsito de plantas ou partes de plantas de Helic\xF4nias obedecer\xE1 aos mesmos crit\xE9rios e medidas
previstos para o tr\xE2nsito de mudas, partes de plantas e frutos de banana.

Art. 8\xBA O tr\xE2nsito de plantas, mudas micropropagadas ou partes de plantas de bananeira (Musa spp e seus
cultivares) obedecer\xE1 \xE0 legisla\xE7\xE3o de certifica\xE7\xE3o fitossanit\xE1ria de origem, a certifica\xE7\xE3o fitossanit\xE1ria de origem consolidada e permiss\xE3o de tr\xE2nsito de vegetais vigente.
Par\xE1grafo \xFAnico. Fica proibido o tr\xE2nsito de folhas de bananeira ou parte da planta no acondicionamento de qualquer produto.

Art. 9\xBA Os \xF3rg\xE3os estaduais de defesa sanit\xE1ria vegetal ser\xE3o respons\xE1veis por garantir que, nas \xE1reas
infestadas, os bananais abandonados, as bananeiras abandonadas e os cultivos de Helic\xF4nias abandonados e sem controle da praga ser\xE3o eliminados, n\xE3o cabendo aos propriet\xE1rios, arrendat\xE1rios ou ocupantes a qualquer t\xEDtulo, de im\xF3veis ou propriedades, indeniza\xE7\xE3o no todo ou em parte das plantas eliminadas.
Par\xE1grafo \xFAnico. Os bananais e bananeiras abandonados e cultivos plantas e partes de plantas de Helic\xF4nias dever\xE3o ser inspecionados e, sendo comprovada a presen\xE7a da praga Sigatoka Negra, ser\xE3o eliminados por m\xE9todos mec\xE2nicos ou qu\xEDmicos.

Art. 10. O DSV, por interm\xE9dio da Coordena\xE7\xE3o Geral de Prote\xE7\xE3o de Plantas - CGPP, coordenar\xE1 as
atividades de preven\xE7\xE3o e controle da Sigatoka Negra em todo o territ\xF3rio nacional e as Secretarias de Agricultura ou os \xF3rg\xE3os estaduais de defesa sanit\xE1ria vegetal fiscalizar\xE3o e executar\xE3o as atividades no \xE2mbito estadual, em cumprimento a esta Instru\xE7\xE3o Normativa.

Art. 11. As ocorr\xEAncias da praga Sigatoka Negra dever\xE3o ser notificadas \xE0s autoridades fitossanit\xE1rias
federais ou estaduais, que repassar\xE3o imediatamente as informa\xE7\xF5es ao DSV, desta Secretaria de Defesa Agropecu\xE1ria.
\xA7 1\xBA A UF onde ocorreu detec\xE7\xE3o de Sigatoka Negra poder\xE1 solicitar a revis\xE3o de sua condi\xE7\xE3o

fitossanit\xE1ria ap\xF3s 5 (cinco) anos sem a presen\xE7a da praga. *(Acrescentado pela Instru\xE7\xE3o Normativa*
*4/2012/SDA/MAPA)*
\xA7 2\xBA O reconhecimento de \xC1rea Livre de Sigatoka Negra em munic\xEDpio onde houve detec\xE7\xE3o da praga somente poder\xE1 ocorrer ap\xF3s 10 (dez) anos sem novas detec\xE7\xF5es. *(Acrescentado pela Instru\xE7\xE3o* *Normativa 4/2012/SDA/MAPA)* \xA7 3\xBA O \xD3rg\xE3o Estadual de Defesa Sanit\xE1ria Vegetal - OEDSV, respons\xE1vel pela solicita\xE7\xE3o, dever\xE1 realizar levantamento fitossanit\xE1rio anual em 5% (cinco por cento) das propriedades produtoras de banana e 2% (dois por cento) das propriedades produtoras de helic\xF4nias, abrangendo \xE1reas homog\xEAneas onde a praga \xE9 considerada presente. *(Acrescentado pela Instru\xE7\xE3o Normativa 4/2012/SDA/MAPA)* \xA7 4\xBA A unidade de sanidade vegetal da respectiva SFA dever\xE1 supervisionar os levantamentos realizados pelo OEDSV, emitindo Parecer T\xE9cnico acerca de sua realiza\xE7\xE3o. *(Acrescentado pela Instru\xE7\xE3o* *Normativa 4/2012/SDA/MAPA)*

Art. 12. O descumprimento das exig\xEAncias desta Instru\xE7\xE3o Normativa configurar\xE1 os crimes previstos no
art. 259, do C\xF3digo Penal, e no art. 61, da Lei n\xBA 9.605, de 12 de fevereiro de 1998, podendo implicar o cancelamento do reconhecimento oficial de \xC1rea Livre da Sigatoka Negra.

Art. 13. Esta Instru\xE7\xE3o Normativa entra em vigor na data de sua publica\xE7\xE3o.

Art. 14. Fica revogada a Instru\xE7\xE3o Normativa n\xBA 41, de 21 de junho de 2002.
GABRIEL ALVES MACIEL
ANEXO I
PROCEDIMENTOS PARA CARACTERIZA\xC7\xC3O, IMPLANTA\xC7\xC3O E MANUTEN\xC7\xC3O DE \xC1REA
LIVRE DA SIGATOKA NEGRA - Mycosphaerella fijiensis (Morelet) Deighton PARA EFEITO
DESTES PROCEDIMENTOS,
CONSIDERA-SE:
\xC1REA LIVRE DE PRAGA - \xE1rea onde uma praga espec\xEDfica n\xE3o ocorre, sendo esse fato demonstrado por evid\xEAncia cient\xEDfica e na qual, de forma apropriada, essa condi\xE7\xE3o est\xE1 sendo mantida oficialmente.
\xC1REA INFESTADA - \xE1rea urbana ou rural, com a delimita\xE7\xE3o de seus limites, onde foi detectada a praga.
1 - CARACTERIZA\xC7\xC3O DA CULTURA DA BANANA E SITUA\xC7\xC3O DA SIGATOKA NEGRA NA
UNIDADE DA FEDERA\xC7\xC3O (realizado pelo \xD3rg\xE3o Estadual de Defesa de Sanidade Vegetal - OEDSV, da Unidade da Federa\xE7\xE3o) 1.1 - Descrever a situa\xE7\xE3o da cultura da banana na Unidade da Federa\xE7\xE3o (\xE1rea plantada, variedades cultivadas, estimativa de produ\xE7\xE3o, destino da produ\xE7\xE3o, sistemas de cultivo - tecnologias aplicadas e procedimentos de colheita e p\xF3s-colheita, quantidade de m\xE3o-de-obra empregada na cadeia produtiva - direta e indireta).
1.2 - Apresentar, em mapa cartogr\xE1fico, as rotas de tr\xE2nsito de banana no estado.
1.3 - Elaborar mapa georreferenciado, identificando:
1.3.1 - \xC1reas de produ\xE7\xE3o comercial; e

1.3.2 - Focos de ocorr\xEAncia da praga.
1.4 - Fornecer informa\xE7\xF5es sobre dados climatol\xF3gicos da regi\xE3o.
2 - DIRETRIZES PARA LEVANTAMENTOS FITOSSANIT\xC1RIOS DA SIGATOKA NEGRA
2.1 - Levantamento para Detec\xE7\xE3o da Praga (conduzido pelo OEDSV da Unidade da Federa\xE7\xE3o, em uma \xE1rea sem relato de ocorr\xEAncia da praga, para determinar se a praga est\xE1 presente).
2.1.1 - Amostragem das \xE1reas a serem inspecionadas:
2.1.1.1 - Em \xE1rea sem relato de ocorr\xEAncia da praga, inspecionar 1% das propriedades ou quarteir\xF5es; e 2.1.1.2 - Em \xC1rea Livre, inspecionar 2% das propriedades ou quarteir\xF5es.
2.1.2 - Amostragem das plantas a serem inspecionadas:
2.1.2.1 - Em \xE1rea urbana e \xE1rea rural n\xE3o comercial, inspecionar no m\xEDnimo 3 plantas adultas, pr\xF3ximas do florescimento, por hectare; e 2.1.2.2 - Em \xE1rea de produ\xE7\xE3o comercial, inspecionar no m\xEDnimo 5 plantas adultas, pr\xF3ximas do florescimento, por hectare.
2.1.3 - Periodicidade dos levantamentos nas propriedades rurais com produ\xE7\xE3o n\xE3o comercial e zonas urbanas as inspe\xE7\xF5es dever\xE3o ser realizadas pelo OEDSV a cada 3 meses.
2.2 - Levantamento para Delimita\xE7\xE3o da Praga (conduzido pelo OEDSV da Unidade da Federa\xE7\xE3o para estabelecer os limites de uma \xE1rea considerada como infestada por uma praga).
2.2.1 - Num raio de 0 a 10 km do foco da praga, inspecionar 3 plantas adultas, pr\xF3ximas do florescimento, por hectare, em 50% das propriedades.
2.2.2 - Num raio de 10 a 30 km do foco da praga, inspecionar 3 plantas adultas, pr\xF3ximas do florescimento, por hectare, em 30% das propriedades.
2.2.3 - Num raio de 30 a 70 km do foco da praga, inspecionar 3 plantas adultas, pr\xF3ximas do florescimento, por hectare, em 10% das propriedades.
2.2.4 - Nas estradas que sejam rotas de risco para a praga, inspecionar 3 plantas adultas, pr\xF3ximas do florescimento, por hectare, em 50% das propriedades existentes \xE0s suas margens.
2.3 - Monitoramento para certifica\xE7\xE3o da produ\xE7\xE3o e manuten\xE7\xE3o do reconhecimento de \xC1rea Livre da Sigatoka Negra:
2.3.1 - A metodologia de monitoramento ser\xE1 definida de acordo com as condi\xE7\xF5es do produtor, podendo ser adotada:
2.3.1.1 - esta\xE7\xF5es de pr\xE9-aviso bioclim\xE1tico (modelo da Empresa de Pesquisa Agropecu\xE1ria de Santa Catarina);
2.3.1.2 - pr\xE9-aviso biol\xF3gico (modelo da Empresa de Pesquisa Agropecu\xE1ria de Minas Gerais); e 2.3.1.3 - bosques de bananeiras de cultivares indicadoras, resistentes \xE0 Sigatoka Amarela, mas suscet\xEDveis \xE0 Sigatoka Negra (no m\xEDnimo 20 mudas das cultivares Terra, D'Angola, Nam, Pioneira e Tropical), que ser\xE3o observadas semanalmente pelo t\xE9cnico respons\xE1vel, que dever\xE1 comunicar ao OEDSV qualquer suspeita.

3 - DELIMITA\xC7\xC3O E MEDIDAS OFICIAIS ADOTADAS PARA CARACTERIZA\xC7\xC3O DA \xC1REA
LIVRE DA SIGATOKA NEGRA
3.1 - Considerar uma dist\xE2ncia m\xEDnima de 70km de poss\xEDveis fontes de infesta\xE7\xE3o da praga.
3.2 - Obedecer aos limites oficialmente reconhecidos (estradas, rios, etc.).
3.3 - Descrever a exist\xEAncia de poss\xEDveis barreiras naturais que dificultem o avan\xE7o da praga.
3.4 - Documentar os levantamentos oficiais realizados para a declara\xE7\xE3o de \xC1rea Livre da Praga.
3.5 - Elaborar Plano Emergencial a ser aplicado em caso de surgimento de foco da praga na \xC1rea Livre da Praga.
3.6 - Elaborar mapa georreferenciado com as propriedades que possuem plantios comerciais de banana dentro dos limites da \xC1rea Livre da Sigatoka Negra.
3.7 - Fazer o cadastramento das propriedades da \xC1rea Livre da Praga atendendo os seguintes itens:
3.7.1 - Nome do produtor;
3.7.2 - Situa\xE7\xE3o fundi\xE1ria da propriedade;
3.7.3 - Localiza\xE7\xE3o da propriedade com GPS;
3.7.4 - Identifica\xE7\xE3o das cultivares e idade dos plantios de banana em produ\xE7\xE3o e forma\xE7\xE3o;
3.7.5 - Estimativa da produ\xE7\xE3o anual (kg);
3.7.6 - Destino da produ\xE7\xE3o; e 3.7.7 - Nome do Respons\xE1vel T\xE9cnico.
3.8 - Relacionar os Fiscais Estaduais cadastrados para emiss\xE3o da Permiss\xE3o de Tr\xE2nsito de Vegetais - PTV, designados para atuar na regi\xE3o da \xC1rea Livre da Praga, que dever\xE3o:
3.8.1 - Fiscalizar as Casas de Embalagens para garantir que nelas n\xE3o tenham sido processadas bananas de \xE1reas n\xE3o cadastradas;
3.8.2 - Inspecionar as propriedades cadastradas para verifica\xE7\xE3o da conformidade com as medidas fitossanit\xE1rias estabelecidas por este regulamento; e 3.8.3. A fiscaliza\xE7\xE3o de defesa vegetal, quando necess\xE1rio, dever\xE1 lacrar a carga emitindo as PTVs nas pr\xF3prias casas de embalagens ou nas barreiras de fiscaliza\xE7\xE3o fitossanit\xE1rias mais pr\xF3ximas das casas de embalagens, anotando o n\xFAmero dos lacres nas PTVs. *(Reda\xE7\xE3o dada pela Instru\xE7\xE3o Normativa*
*4/2012/SDA/MAPA)*
_____________________________________________________________________ *Reda\xE7\xF5es* *Anteriores* 3.9 - Mapa georreferenciado das barreiras fitossanit\xE1rias existentes para o controle do tr\xE2nsito, com descri\xE7\xE3o dos recursos materiais e humanos de cada barreira e escalas de plant\xE3o dos Fiscais Estaduais.
3.10 - Regulamenta\xE7\xE3o, pela autoridade competente da Unidade da Federa\xE7\xE3o, de medidas de preven\xE7\xE3o a serem adotadas obrigatoriamente, entre as quais:
3.10.1 - Implantar mecanismos que garantam que os ve\xEDculos que entrem na \xC1rea Livre sejam

desinfetados;
3.10.2 - Aplicar os m\xE9todos de manejo recomendados;
3.10.3 - Introduzir somente material de propaga\xE7\xE3o livre da praga;
3.10.4 - Manter o registro dos procedimentos de cultivo, medidas e levantamentos fitossanit\xE1rios executados no per\xEDodo de reconhecimento; e 3.10.5 - Notificar ao OEDSV qualquer presen\xE7a suspeita ou efetiva da praga.
3.11 - O OEDSV da Unidade da Federa\xE7\xE3o dever\xE1 encaminhar ao DSV, por meio da Superintend\xEAncia Federal da Agricultura - SFA, relat\xF3rios bimensais sobre todas as atividades desenvolvidas na \xC1rea Livre da Sigatoka Negra.
4 - SUPERVIS\xC3O PARA MANUTEN\xC7\xC3O DA SITUA\xC7\xC3O DE \xC1REA LIVRE DA SIGATOKA
NEGRA
4.1 - O OEDSV da Unidade da Federa\xE7\xE3o dever\xE1 supervisionar todos os setores envolvidos no processo de certifica\xE7\xE3o, garantindo a realiza\xE7\xE3o de todos os levantamentos e medidas fitossanit\xE1rias de controle estabelecidas por este regulamento.
4.2 - O DSV, em conjunto com \xC1REA DE SANIDADE VEGETAL DA IFA na Unidade da Federa\xE7\xE3o, dever\xE1 realizar, no m\xEDnimo, uma auditoria por ano nas \xC1reas Livres.
5 - IDENTIFICA\xC7\xC3O DO PRODUTO E SEGURAN\xC7A FITOSSANIT\xC1RIA DA PARTIDA
5.1 - Utilizar embalagens pl\xE1sticas higienizadas.
5.2 - As embalagens de madeira dever\xE3o ser novas, de primeiro uso ou de papel\xE3o.
5.3 - A identifica\xE7\xE3o nas embalagens dever\xE1 ser fixa e n\xE3o colada, em conformidade com as normas espec\xEDficas.
5.4. A carga destinada \xE0 outra \xC1rea Livre de Sigatoka Negra, que transitar por Unidade da Federa\xE7\xE3o com ocorr\xEAncia da praga, dever\xE1 estar amarrada e lacrada, garantindo a origem do produto. *(Reda\xE7\xE3o dada* *pela Instru\xE7\xE3o Normativa 4/2012/SDA/MAPA)* _____________________________________________________________________ *Reda\xE7\xF5es* *Anteriores* 5.5 - Declara\xE7\xE3o Adicional constando que a partida \xE9 origin\xE1ria de \xC1rea Livre da Sigatoka Negra.
6 - RECONHECIMENTO DA SITUA\xC7\xC3O DE \xC1REA LIVRE DA SIGATOKA NEGRA
6.1 - O DSV dever\xE1 analisar o processo e proceder \xE0 auditoria t\xE9cnica para verificar a conformidade na aplica\xE7\xE3o das medidas fitossanit\xE1rias estabelecidas por este regulamento.
6.2 - A Secretaria de Defesa Agropecu\xE1ria - SDA dever\xE1 publicar ato de reconhecimento oficial da situa\xE7\xE3o da \xE1rea e dar ampla divulga\xE7\xE3o a todas as SFAs e aos OEDSVs.
ANEXO II
PROCEDIMENTOS PARA IMPLANTA\xC7\xC3O E MANUTEN\xC7\xC3O DO SISTEMA DE MITIGA\xC7\xC3O DE
RISCO PARA A PRAGA SIGATOKA NEGRA - Mycosphaerella fijiensis (Morelet) Deighton 1 - SISTEMA DE MITIGA\xC7\xC3O DE RISCO - SMR: integra\xE7\xE3o de diferentes medidas de manejo de risco

de pragas das quais pelo menos duas atuam independentemente com efeito acumulativo, para atingir o n\xEDvel apropriado de seguran\xE7a fitossanit\xE1ria.
2 - IMPLANTA\xC7\xC3O: o SMR poder\xE1 ser implantado nas \xE1reas onde for detectada a presen\xE7a da Sigatoka Negra, possibilitando ao produtor a manuten\xE7\xE3o de sua atividade e comercializa\xE7\xE3o do seu produto nas Unidades da Federa\xE7\xE3o.
3 - IDENTIFICA\xC7\xC3O DA PROPRIEDADE (levantamento realizado pelo OEDSV):
3.1 - nome do propriet\xE1rio / meeiro / arrendat\xE1rio;
3.2 - nome da propriedade;
3.3 - localiza\xE7\xE3o georreferenciada;
3.4 - \xE1rea total da propriedade, em hectares;
3.5 - \xE1rea com bananeiras (idade, cultivares, estimativa de produ\xE7\xE3o); e 3.6 - \xE1rea com outras culturas (especificar: idade, variedades).
4 - CADASTRAMENTO DA UNIDADE DE PRODU\xC7\xC3O
4.1 - Unidade de Produ\xE7\xE3o - UP: \xE1rea cultivada com bananeiras, cadastrada junto ao OEDSV para implanta\xE7\xE3o do SMR.
4.2 - O propriet\xE1rio dever\xE1 solicitar o cadastramento da UP ao OEDSV.
4.3 - Para efeito de rastreabilidade, o OEDSV, ap\xF3s o cadastramento da UP, emitir\xE1 para cada UP um c\xF3digo alfanum\xE9rico.
4.4 - Identificar o Respons\xE1vel T\xE9cnico - RT e n\xFAmero do seu cadastramento no OEDSV.
4.5 - Identificar o destino da produ\xE7\xE3o.
4.6 - O propriet\xE1rio dever\xE1 assinar o Termo de Ades\xE3o junto ao OEDSV.
4.7 - O propriet\xE1rio dever\xE1 informar no prazo m\xE1ximo de 30 (trinta) dias, ao OEDSV, a mudan\xE7a do RT, quando ocorrer.
5 - EXECU\xC7\xC3O DE PR\xC1TICAS AGR\xCDCOLAS
5.1 - Executar Pr\xE1ticas Agr\xEDcolas para a cultura da banana.
5.2 - A parte da folha que apresentar sintomas da Sigatoka Negra dever\xE1 ser podada.
5.3 - Adotar o manejo integrado da Sigatoka Negra, incluindo, se necess\xE1rio, controle qu\xEDmico com produtos registrados no Minist\xE9rio da Agricultura, Pecu\xE1ria e Abastecimento - MAPA.
5.4 - Poder\xE3o ser utilizados m\xE9todos alternativos de aplica\xE7\xE3o de agrot\xF3xicos recomendados por entidades oficiais de pesquisa.
5.5 - Fazer o plantio de cultivares tolerantes recomendadas pela pesquisa e certificadas.
5.6 - A metodologia de monitoramento ser\xE1 definida de acordo com as condi\xE7\xF5es do produtor, para indicar o momento mais prop\xEDcio para executar o controle qu\xEDmico.

5.7 - Adotar, quando for o caso, sistemas org\xE2nicos de produ\xE7\xE3o ou o sistema de produ\xE7\xE3o integrada de banana (PIB).
6 - CUIDADOS NO P\xD3S-COLHEITA NAS CASAS DE EMBALAGEM
6.1 - Identificar, com base no Certificado Fitossanit\xE1rio de Origem - CFO, os lotes de banana que entram na Casa de Embalagem quando origin\xE1rios de outras UPs.
6.2 - Os cachos dever\xE3o ser previamente despencados na UP.
6.3 - As pencas dever\xE3o ser higienizadas com produtos recomendados por entidades oficiais de pesquisa.
6.4 - Utilizar caixas pl\xE1sticas higienizadas acompanhadas de declara\xE7\xE3o de higieniza\xE7\xE3o emitida por empresa credenciada pelo OEDSV; caixas de madeira somente novas e n\xE3o retorn\xE1veis ou caixas de papel\xE3o descart\xE1veis.
6.5 - A emiss\xE3o do CFO, Certificado Fitossanit\xE1rio de Origem Consolidado - CFOC e PTV obedecer\xE3o \xE0 legisla\xE7\xE3o vigente.
6.5.1 - Para as cargas que atendem ao disposto nesta Instru\xE7\xE3o Normativa, os Respons\xE1veis T\xE9cnicos e os Fiscais Estaduais, nos documentos de suas compet\xEAncias, far\xE3o constar a seguinte declara\xE7\xE3o adicional:
"A partida \xE9 origin\xE1ria de Unidade de Produ\xE7\xE3o onde foi implantado o Sistema de Mitiga\xE7\xE3o de Risco para Sigatoka Negra" 6.6 - Todos os procedimentos dever\xE3o ser registrados por seus respectivos respons\xE1veis.
6.7 - As bananas que n\xE3o passarem por Casas de Embalagens s\xF3 poder\xE3o ser comercializadas no pr\xF3prio estado de origem.
7 - VISTORIA DA CASA DE EMBALAGEM
7.1 - As Casas de Embalagem que beneficiam frutos para exporta\xE7\xE3o dever\xE3o ser cadastradas junto ao OEDSV da UF.
7.2 - O OEDSV da UF far\xE1 a vistoria da Casa de Embalagem emitindo o Laudo de Vistoria que, n\xE3o havendo nada em contr\xE1rio, receber\xE1 o cadastramento.
7.3 - \xC9 proibido o cadastramento de Casas de Embalagem localizadas em Centrais de Abastecimento - CEASAs ou locais similares.
8 - INSPE\xC7\xC3O / FISCALIZA\xC7\xC3O
8.1 - O OEDSV realizar\xE1 as inspe\xE7\xF5es nas UPs e Casas de Embalagens cadastradas.
9 - CONTROLES E RELAT\xD3RIOS
9.1 - O RT respons\xE1vel pelo acompanhamento da UP dever\xE1 elaborar relat\xF3rio trimestral, encaminhando-o ao OEDSV ate o 5\xBA dia \xFAtil.
9.2 - Os relat\xF3rios enviados pelos RTs ser\xE3o analisados pelo OEDSV, que determinar\xE1 a necessidade ou n\xE3o da implementa\xE7\xE3o de a\xE7\xF5es corretivas.
9.3 - O OEDSV encaminhar\xE1, trimestralmente, relat\xF3rios \xE0 SFA.
9.4 - A SFA, ap\xF3s an\xE1lise e consolida\xE7\xE3o das informa\xE7\xF5es, enviar\xE1, trimestralmente, os relat\xF3rios ao DSV para acompanhamento, avalia\xE7\xE3o e parecer.

10 - PENALIDADES
10.1 - A UP, a Casa de Embalagem ou o RT poder\xE3o ter os seus cadastros cancelados quando n\xE3o forem atendidas as exig\xEAncias e responsabilidades previstas, respectivamente, nesta Instru\xE7\xE3o Normativa.
D.O.U., 03/06/2005`,
  },
  {
    id: 'IN17-2009',
    texto: `MINIST\xC9RIO DA AGRICULTURA, PECU\xC1RIA E ABASTECIMENTO

SECRETARIA DE DEFESA AGROPECU\xC1RIA

INSTRU\xC7\xC3O NORMATIVA N\xBA 17, DE 27 DE MAIO DE 2009

e o que consta do Processo n\xBA 21000.003714/2007-24, resolve:

Art. 1\xBA Regulamentar os crit\xE9rios para reconhecimento e manuten\xE7\xE3o de \xC1reas Livres da Praga Ralstonia solanacearum ra\xE7a 2 (ALP Moko da Bananeira), visando atender exig\xEAncias quarenten\xE1rias de pa\xEDses importadores, na forma do Anexo I, desta Instru\xE7\xE3o Normativa.

Art. 2\xBA Regulamentar os crit\xE9rios para implanta\xE7\xE3o e manuten\xE7\xE3o da aplica\xE7\xE3o de medidas integradas em um enfoque de Sistemas para o Manejo de Risco de pragas para Moko da Bananeira (SMR Moko da Bananeira), visando atender exig\xEAncias quarenten\xE1rias de pa\xEDses importadores, na forma do Anexo II, desta Instru\xE7\xE3o Normativa.

Art. 3\xBA Proibir o tr\xE2nsito de mudas e rizomas de bananeira e helic\xF4nias, produzidas em Unidades da Federa\xE7\xE3o (UF) com ocorr\xEAncia de *Ralstonia solanacearum ra\xE7a 2*, salvo nos casos de mudas:
I - produzidas em ALP Moko da Bananeira, existente na UF;
II - transportadas ainda in vitro; e
III - micropropagadas, desde que sem contato com o solo local, da aclimata\xE7\xE3o ao transporte.

Art. 4\xBA As condi\xE7\xF5es previstas nos incisos II e III, do art. 3\xBA, desta Instru\xE7\xE3o Normativa, dever\xE3o ser descritas no documento para informa\xE7\xF5es complementares do Certificado Fitossanit\xE1rio de Origem (CFO), que conter\xE1 a seguinte declara\xE7\xE3o adicional: "As mudas encontram- se livres de *Ralstonia solanacearum ra\xE7a 2*.".
Par\xE1grafo \xFAnico. Em caso de tr\xE2nsito interestadual, a fiscaliza\xE7\xE3o estadual dever\xE1 lacrar a carga, emitindo a Permiss\xE3o de Tr\xE2nsito de Vegetais (PTV), nos locais de produ\xE7\xE3o ou nas barreiras de fiscaliza\xE7\xE3o fitossanit\xE1ria mais pr\xF3ximas destes, anotando o n\xFAmero do lacre na mesma, e transcrevendo as informa\xE7\xF5es complementares e a declara\xE7\xE3o adicional, constante do caput.

Art. 5\xBA Para o tr\xE2nsito interestadual de mudas produzidas em ALP Moko da Bananeira, ser\xE1 exigida a PTV, fundamentada em CFO, contendo a seguinte declara\xE7\xE3o adicional: "As mudas foram produzidas em \xC1rea Livre de *Ralstonia solanacearum ra\xE7a 2*, oficialmente reconhecida pelo Minist\xE9rio da Agricultura, Pecu\xE1ria e Abastecimento.".
Par\xE1grafo \xFAnico. A carga das mudas previstas no caput dever\xE1 ser lacrada pela fiscaliza\xE7\xE3o estadual, anotando o n\xFAmero do lacre na PTV.

Art. 6\xBA Para o tr\xE2nsito interestadual de mudas produzidas em UF com aus\xEAncia de Ralstonia solanacearum ra\xE7a 2, ser\xE1 exigida a PTV contendo a seguinte declara\xE7\xE3o adicional: "As mudas se encontram livres de *Ralstonia solanacearum ra\xE7a 2*.".
Par\xE1grafo \xFAnico. Quando em tr\xE2nsito por UF com a presen\xE7a da praga, tendo como destino ALP Moko da Bananeira ou UF sem presen\xE7a de *Ralstonia solanacearum ra\xE7a 2*, a carga dever\xE1 ser lacrada na UF de origem, devendo o fiscal respons\xE1vel anotar o n\xFAmero do lacre na PTV.

Art. 7\xBA Restringir a entrada, em ALP Moko da Bananeira, de frutos de banana e infloresc\xEAncias de helic\xF4nias produzidos em UF com ocorr\xEAncia de *Ralstonia solanacearum ra\xE7a 2*.
Par\xE1grafo \xFAnico. Para entrada dos produtos a que se refere o caput, em ALP Moko da Bananeira, ser\xE1 exigida a PTV, contendo uma das seguintes declara\xE7\xF5es adicionais: "Os frutos ou infloresc\xEAncias foram produzidos em \xC1rea Livre de *Ralstonia solanacearum ra\xE7a 2* oficialmente reconhecida pelo Minist\xE9rio da Agricultura, Pecu\xE1ria e Abastecimento" ou "Os frutos ou infloresc\xEAncias foram produzidos sob aplica\xE7\xE3o de medidas integradas em um enfoque de Sistemas para o Manejo de Risco da praga *Ralstonia solanacearum ra\xE7a 2*".

Art. 8\xBA Para o tr\xE2nsito interestadual de frutos de banana e infloresc\xEAncias de helic\xF4nias produzidos em UF com aus\xEAncia de *Ralstonia solanacearum ra\xE7a 2*, ser\xE1 exigida a PTV apenas para comprova\xE7\xE3o da origem.

Art. 9\xBA Para a entrada em UF com aus\xEAncia de *Ralstonia solanacearum ra\xE7a 2*, de frutos de banana e infloresc\xEAncias de helic\xF4nias produzidos em UF com presen\xE7a da praga, ser\xE1 exigida a PTV, fundamentada em CFO.
\xA7 1\xBA No caso de frutos ou infloresc\xEAncias n\xE3o produzidos sob SMR Moko da Bananeira, o CFO dever\xE1 conter a seguinte declara\xE7\xE3o adicional: "Os frutos ou infloresc\xEAncias foram produzidos em UP onde n\xE3o foi observada a presen\xE7a de *Ralstonia solanacearum ra\xE7a 2*, nos \xFAltimos doze meses".
\xA7 2\xBA Para frutos ou infloresc\xEAncias produzidos sob SMR Moko da Bananeira, o CFO dever\xE1 conter a seguinte declara\xE7\xE3o adicional: "Os frutos ou infloresc\xEAncias foram produzidos sob aplica\xE7\xE3o de medidas integradas em um enfoque de Sistemas para o Manejo de Risco da praga *Ralstonia solanacearum ra\xE7a 2*".

Art. 10. O tr\xE2nsito de plantas de bananeira e helic\xF4nias e de suas partes, para estudo em institui\xE7\xF5es de pesquisa cient\xEDfica, dever\xE1 ser autorizado pela \xE1rea de sanidade vegetal da Superintend\xEAncia Federal de Agricultura, Pecu\xE1ria e Abastecimento (SFA), na UF de origem do material.
\xA7 1\xBA N\xE3o se aplica o disposto no caput deste artigo no caso de tr\xE2nsito entre UF's com ocorr\xEAncia de Moko da Bananeira.
\xA7 2\xBA O material de que trata o caput deste artigo dever\xE1 ser transportado em compartimento lacrado.
\xA7 3\xBA A SFA na UF de origem dever\xE1 comunicar a remessa do material previsto no caput, com no m\xEDnimo setenta e duas horas de anteced\xEAncia, \xE0 SFA na UF de destino.
\xA7 4\xBA A institui\xE7\xE3o destinat\xE1ria quando do recebimento do material dever\xE1 comunicar imediatamente a SFA na UF de destino, para inspe\xE7\xE3o do mesmo.
\xA7 5\xBA Caso o material inspecionado apresente sintomas de Moko da Bananeira, ser\xE3o coletadas amostras para realiza\xE7\xE3o de an\xE1lise em laborat\xF3rio oficial ou credenciado pelo Minist\xE9rio da Agricultura, Pecu\xE1ria e Abastecimento (MAPA), devendo o material ficar retido na institui\xE7\xE3o destinat\xE1ria at\xE9 a emiss\xE3o do laudo laboratorial conclusivo.
\xA7 6\xBA Confirmada contamina\xE7\xE3o por *Ralstonia solanacearum ra\xE7a 2*, do material constante do par\xE1grafo anterior, ser\xE3o adotadas as seguintes provid\xEAncias:
I - o material retido ser\xE1 destru\xEDdo, n\xE3o cabendo qualquer tipo de indeniza\xE7\xE3o; e
II - n\xE3o ser\xE3o expedidas novas autoriza\xE7\xF5es para a institui\xE7\xE3o de origem do material contaminado pelo
prazo de um ano.

Art. 11. O material propagativo, os frutos de banana ou as infloresc\xEAncias de helic\xF4nia apreendidos pela fiscaliza\xE7\xE3o de defesa sanit\xE1ria vegetal, em desacordo com o previsto nesta Instru\xE7\xE3o Normativa, ser\xE3o sumariamente destru\xEDdos, ou determinado o retorno \xE0 origem, n\xE3o cabendo ao infrator qualquer tipo de indeniza\xE7\xE3o, sem preju\xEDzo das demais san\xE7\xF5es estabelecidas pela legisla\xE7\xE3o pr\xF3pria.

Par\xE1grafo \xFAnico. A destrui\xE7\xE3o citada no caput deste artigo dever\xE1 ser feita com emprego de m\xE9todos e materiais que assegurem a completa inutiliza\xE7\xE3o do material propagativo, frutos ou infloresc\xEAncias, com elimina\xE7\xE3o do pat\xF3geno.

Art. 12. Detec\xE7\xE3o de Moko da Bananeira em UF na qual a praga estiver ausente ou em ALP Moko da Bananeira dever\xE1 ser imediatamente comunicada \xE0 SFA da UF correspondente, que informar\xE1 ao \xD3rg\xE3o Estadual de Defesa Sanit\xE1ria Vegetal (OEDSV), da Inst\xE2ncia Intermedi\xE1ria do Sistema Unificado de Aten\xE7\xE3o \xE0 Sanidade Agropecu\xE1ria, bem como \xE0 Secretaria de Defesa Agropecu\xE1ria (SDA) do MAPA.
\xA7 1\xBA O OEDSV dever\xE1 realizar levantamentos fitossanit\xE1rios anuais, na UF sem presen\xE7a de *Ralstonia solanacearum ra\xE7a 2*, exceto ALP Moko da Bananeira, informando os resultados \xE0 SFA correspondente.
\xA7 2\xBA Caso sejam detectados focos de *Ralstonia solanacearum ra\xE7a 2*, dever\xE3o ser aplicadas as medidas previstas nas se\xE7\xF5es IV e V, do Anexo I, desta Instru\xE7\xE3o Normativa.

Art. 13. Em casos excepcionais, com aprova\xE7\xE3o ou por determina\xE7\xE3o da SDA/MAPA, quaisquer atividades atribu\xEDdas \xE0s Inst\xE2ncias Intermedi\xE1rias do Sistema Unificado de Aten\xE7\xE3o \xE0 Sanidade Agropecu\xE1ria, por esta Instru\xE7\xE3o Normativa e seus Anexos, poder\xE3o ser executadas pela Inst\xE2ncia Central e Superior.

Art. 14. A SDA/MAPA, diretamente ou representada pela \xE1rea de sanidade vegetal da SFA na UF correspondente, dever\xE1 realizar, no m\xEDnimo, uma auditoria por ano nas ALP's Moko da Bananeira e nas UF's que implantarem o SMR Moko da Bananeira.

Art. 15. Esta Instru\xE7\xE3o Normativa entra em vigor cento e oitenta dias da data de sua publica\xE7\xE3o.

IN\xC1CIO AFONSO KROETZ

ANEXO I
CAP\xCDTULO I
DO RECONHECIMENTO E MANUTEN\xC7\xC3O DE ALP MOKO DA BANANEIRA
Se\xE7\xE3o I Das defini\xE7\xF5es

Art. 1\xBA Denominar-se-\xE1 ALP Moko da Bananeira, uma \xE1rea onde a praga *Ralstonia solanacearum ra\xE7a 2*
n\xE3o ocorre, sendo isto demonstrado por evid\xEAncia cient\xEDfica e na qual, de forma apropriada, esta condi\xE7\xE3o est\xE1 sendo mantida oficialmente.

Art. 2\xBA Denominar-se-\xE1 praga ausente, quando n\xE3o for detectada pela vigil\xE2ncia geral a presen\xE7a desta em determinada \xE1rea, condi\xE7\xE3o que deve ser comprovada por meio de registros espec\xEDficos.

Art. 3\xBA Entender-se-\xE1 por erradica\xE7\xE3o da doen\xE7a, as medidas a serem adotadas para elimina\xE7\xE3o completa da bact\xE9ria *Ralstonia solanacearum ra\xE7a 2*.

Art. 4\xBA Denominar-se-\xE1 \xE1rea perifocal, aquela abrangida pela dist\xE2ncia de dez metros a partir do foco ou do per\xEDmetro dos viveiros contaminados, podendo ser ampliada at\xE9 o m\xE1ximo de vinte metros ou reduzida at\xE9 o m\xEDnimo de cinco metros, a crit\xE9rio das Inst\xE2ncias Intermedi\xE1rias do Sistema Unificado de Aten\xE7\xE3o \xE0 Sanidade Agropecu\xE1ria, nas \xE1reas geogr\xE1ficas sob sua circunscri\xE7\xE3o.

Art. 5\xBA Denominar-se-\xE1 foco, a planta ou as plantas infectadas por *Ralstonia solanacearum ra\xE7a 2*.

Se\xE7\xE3o II

Do procedimento para reconhecimento oficial de ALP Moko da Bananeira

Art. 6\xBA O OEDSV dever\xE1 realizar levantamento fitossanit\xE1rio nas \xE1reas a serem reconhecidas como livres de Moko da Bananeira.
\xA7 1\xBA Os levantamentos dever\xE3o ser realizados em cada uma das regi\xF5es homog\xEAneas da UF, de maneira a se obter uma cobertura geogr\xE1fica representativa.
\xA7 2\xBA O levantamento ser\xE1 realizado em dez por cento da \xE1rea cultivada com banana e cinco por cento da \xE1rea cultivada com helic\xF4nia, na UF, segundo dados do Instituto Brasileiro de Geografia e Estat\xEDstica (IBGE), de maneira proporcional \xE0 produ\xE7\xE3o das regi\xF5es citadas no par\xE1grafo anterior.
\xA7 3\xBA Ser\xE1 inspecionado um por cento das touceiras de cada propriedade amostrada, selecionando pontos aleat\xF3rios, georreferenciados, a partir dos quais ser\xE3o examinadas cinco touceiras consecutivas.
\xA7 4\xBA Caso sejam observadas plantas com sintomas de Moko da Bananeira, devem ser coletadas amostras para diagn\xF3stico em laborat\xF3rio oficial ou credenciado pelo MAPA.

Art. 7\xBA As atividades concernentes ao levantamento fitossanit\xE1rio e os resultados obtidos, inclusive laudos laboratoriais, devem constar em relat\xF3rio espec\xEDfico.

Art. 8\xBA O OEDSV dever\xE1 encaminhar \xE0 SFA, para posterior encaminhamento \xE0 SDA/MAPA, visando o reconhecimento de ALP Moko da Bananeira, solicita\xE7\xE3o acompanhada dos seguintes documentos:
I - of\xEDcio solicitando o reconhecimento da ALP Moko da Bananeira;
II - delimita\xE7\xE3o da ALP Moko da Bananeira, considerando limites administrativos, acidentes geogr\xE1ficos, rodovias, ferrovias e hidrovias;
III - mapa com indica\xE7\xE3o das regi\xF5es que possuem plantios comerciais de banana ou helic\xF4nias dentro dos limites da ALP Moko da Bananeira;
IV - mapa indicando as rotas de risco e barreiras fitossanit\xE1rias existentes para o controle do tr\xE2nsito de vegetais;
V - descri\xE7\xE3o dos recursos materiais e humanos de cada barreira fitossanit\xE1ria e escalas de plant\xE3o dos Fiscais Estaduais;
VI - n\xFAmero de propriedades cadastradas para produ\xE7\xE3o de banana e helic\xF4nias;
VII - \xE1rea cultivada com banana e helic\xF4nia na UF, e produ\xE7\xE3o segundo estat\xEDsticas oficiais; e
VIII - relat\xF3rios espec\xEDficos dos levantamentos fitossanit\xE1rios realizados.

Art. 9\xBA A \xE1rea de sanidade vegetal da SFA que receber a solicita\xE7\xE3o acompanhada da documenta\xE7\xE3o prevista no art. 8\xBA, deste Anexo II, dever\xE1 providenciar a formaliza\xE7\xE3o de processo administrativo, anexar parecer t\xE9cnico sobre o cumprimento das disposi\xE7\xF5es desta Instru\xE7\xE3o Normativa e encaminhar o processo \xE0 SDA/MAPA.

Art. 10. A SDA/MAPA dever\xE1 analisar o processo e proceder \xE0 auditoria t\xE9cnica, para verificar a conformidade na aplica\xE7\xE3o das medidas fitossanit\xE1rias estabelecidas por esta Instru\xE7\xE3o Normativa.
Par\xE1grafo \xFAnico. A realiza\xE7\xE3o da auditoria de que trata o caput deste artigo poder\xE1 ser delegada \xE0 \xE1rea de sanidade vegetal da SFA.

Art. 11. A SDA/MAPA dever\xE1 analisar o relat\xF3rio da auditoria e emitir parecer t\xE9cnico conclusivo sobre a possibilidade de reconhecimento da ALP Moko da Bananeira.

Art. 12. A SDA/MAPA dever\xE1 publicar, em meio oficial, ato de reconhecimento da ALP Moko da Bananeira, por tempo indeterminado.
Se\xE7\xE3o III Da manuten\xE7\xE3o da \xC1rea Livre de *Ralstonia solanacearum ra\xE7a 2*

Art. 13. Ap\xF3s o reconhecimento oficial da ALP Moko da Bananeira, o OEDSV dever\xE1 realizar inspe\xE7\xF5es fitossanit\xE1rias semestrais, no m\xEDnimo, em bananais comerciais ou dom\xE9sticos, localizados tanto na zona rural como urbana, bem como em viveiros produtores de mudas de banana e helic\xF4nias, objetivando manter a condi\xE7\xE3o de ALP.
\xA7 1\xBA Com base nas inspe\xE7\xF5es semestrais, dever\xE1 ser elaborado relat\xF3rio t\xE9cnico, apresentando as seguintes informa\xE7\xF5es:
I - per\xEDodo de refer\xEAncia do relat\xF3rio;
II - n\xFAmero de propriedades cadastradas;
III - listagem das propriedades inspecionadas;
IV - c\xF3pias de laudos laboratoriais, quando houver coleta de amostras para diagn\xF3stico fitossanit\xE1rio de
*Ralstonia solanacearum ra\xE7a 2*;
V - focos erradicados;
VI - quantidade de CFO e PTV emitidos no per\xEDodo de refer\xEAncia do relat\xF3rio;
VII - quantidade de partidas de banana e helic\xF4nias inspecionadas nas barreiras fitossanit\xE1rias; e
VIII - ocorr\xEAncias fitossanit\xE1rias nas barreiras.
\xA7 2\xBA Outras informa\xE7\xF5es poder\xE3o ser acrescentadas a crit\xE9rio do OEDSV.
\xA7 3\xBA O relat\xF3rio dever\xE1 ser encaminhado \xE0 SFA correspondente, que emitir\xE1 parecer t\xE9cnico sobre o mesmo e enviar\xE1 toda a documenta\xE7\xE3o \xE0 SDA/MAPA.
\xA7 4\xBA A documenta\xE7\xE3o ser\xE1 analisada pela SDA/MAPA que, se for o caso, poder\xE1 determinar a ado\xE7\xE3o de a\xE7\xF5es corretivas.

Art. 14. O descumprimento das disposi\xE7\xF5es previstas nesta se\xE7\xE3o III, implicar\xE1 na perda do reconhecimento oficial da ALP Moko da Bananeira.
Se\xE7\xE3o IV Da inspe\xE7\xE3o e erradica\xE7\xE3o de focos no campo

Art. 15. Nas inspe\xE7\xF5es realizadas pelo OEDSV, sendo detectada planta com sintoma de Moko da Bananeira, dever\xE1 ser coletada amostra que ser\xE1 encaminhada para an\xE1lise em laborat\xF3rio oficial ou credenciado pelo MAPA, para emiss\xE3o de laudo conclusivo.

Art. 16. De posse do laudo conclusivo, e em caso de resultado positivo, o OEDSV notificar\xE1 o propriet\xE1rio, arrendat\xE1rio ou ocupante a qualquer t\xEDtulo do estabelecimento, determinando prazo para realiza\xE7\xE3o de vistoria e elimina\xE7\xE3o de todas as plantas sintom\xE1ticas, bem como daquelas adjacentes localizadas dentro da \xE1rea perifocal, mediante m\xE9todos mec\xE2nicos ou qu\xEDmicos, com manejo para evitar rebrota, n\xE3o podendo ocorrer replantio na \xE1rea durante um ano.

\xA7 1\xBA A elimina\xE7\xE3o de que trata o caput deste artigo compete ao propriet\xE1rio, arrendat\xE1rio ou ocupante a qualquer t\xEDtulo do estabelecimento, n\xE3o lhe cabendo qualquer tipo de indeniza\xE7\xE3o.
2\xBA As propriedades onde for comprovada a presen\xE7a do Moko da Bananeira ser\xE3o interditadas, pelo OEDSV, n\xE3o podendo ocorrer sa\xEDda de plantas e partes de plantas de bananeira e helic\xF4nia, at\xE9 que sejam tomadas as provid\xEAncias necess\xE1rias \xE0 erradica\xE7\xE3o dos focos.
\xA7 3\xBA Os propriet\xE1rios, arrendat\xE1rios ou ocupantes a qualquer titulo de im\xF3veis rurais e urbanos, que tiverem bananeiras erradicadas, ficam obrigados a eliminar, \xE0s suas expensas, as rebrotas que porventura apare\xE7am ap\xF3s a erradica\xE7\xE3o das plantas.
\xA7 4\xBA Se o propriet\xE1rio, arrendat\xE1rio ou ocupante a qualquer t\xEDtulo do estabelecimento ou seu representante legal n\xE3o eliminar as plantas no prazo definido na notifica\xE7\xE3o, o OEDSV providenciar\xE1 a elimina\xE7\xE3o das mesmas nas \xE1reas amostradas, sendo imputados ao propriet\xE1rio, arrendat\xE1rio ou ocupante os custos decorrentes dessa opera\xE7\xE3o, sem preju\xEDzo das demais san\xE7\xF5es estabelecidas pelas legisla\xE7\xF5es estadual e federal de defesa sanit\xE1ria vegetal.

Art. 17. A n\xE3o erradica\xE7\xE3o das plantas na \xE1rea perifocal, em at\xE9 sessenta dias ap\xF3s a data de emiss\xE3o do laudo laboratorial, implicar\xE1 na perda do reconhecimento oficial da condi\xE7\xE3o de ALP Moko da Bananeira.

Art. 18. O OEDSV dever\xE1 realizar inspe\xE7\xE3o fitossanit\xE1ria na \xE1rea abrangida por um raio de cinco quil\xF4metros a partir do foco de Moko da Bananeira.
Se\xE7\xE3o V Da inspe\xE7\xE3o e erradica\xE7\xE3o de focos em viveiros de bananeiras

Art. 19. O OEDSV promover\xE1 inspe\xE7\xF5es semestrais em dez por cento do n\xFAmero de viveiros existentes na ALP Moko da Bananeira, enviando material suspeito para an\xE1lise em laborat\xF3rio oficial ou credenciado pelo MAPA, objetivando manter a condi\xE7\xE3o de \xE1rea livre.

Art. 20. O local do viveiro deve estar delimitado, com boas condi\xE7\xF5es de drenagem, para n\xE3o possibilitar a entrada de \xE1guas invasoras e, ser protegido contra o acesso de pessoas n\xE3o autorizadas e de animais.

Art. 21. A \xE1rea reservada para a instala\xE7\xE3o do viveiro n\xE3o pode ser aproveitada simultaneamente para qualquer outra finalidade diferente da produ\xE7\xE3o de mudas, e nem apresentar hist\xF3rico da ocorr\xEAncia de Moko da Bananeira, nos \xFAltimos dois anos.

Art. 22. Os viveiros onde for comprovada a presen\xE7a do Moko da Bananeira ser\xE3o interditados pelo OEDSV, e ser\xE1 feita a elimina\xE7\xE3o total das suas plantas, bem como dos demais viveiros situados na \xE1rea perifocal, n\xE3o podendo ocorrer replantio dos mesmos nos pr\xF3ximos dois anos.
Par\xE1grafo \xFAnico. Existindo bananal pr\xF3ximo a viveiros contaminados, ser\xE3o eliminadas as plantas situadas na \xE1rea perifocal.

Art. 23. As elimina\xE7\xF5es de que trata o art. 21, deste Anexo I, compete ao propriet\xE1rio, arrendat\xE1rio ou ocupante a qualquer t\xEDtulo do estabelecimento, n\xE3o cabendo qualquer tipo de indeniza\xE7\xE3o.

Art. 24. Se o propriet\xE1rio, arrendat\xE1rio ou ocupante a qualquer t\xEDtulo do estabelecimento ou seu representante legal n\xE3o eliminar as mudas no prazo definido na notifica\xE7\xE3o, o OEDSV providenciar\xE1 a elimina\xE7\xE3o das mesmas, sendo imputados ao propriet\xE1rio, arrendat\xE1rio ou ocupante, os custos decorrentes dessa opera\xE7\xE3o, sem preju\xEDzo das demais san\xE7\xF5es estabelecidas pelas legisla\xE7\xF5es estadual e federal de defesa sanit\xE1ria vegetal.

Art. 25. A n\xE3o erradica\xE7\xE3o dos viveiros com plantas infectadas, em at\xE9 sessenta dias ap\xF3s a data de emiss\xE3o do laudo laboratorial, implicar\xE1 na perda do reconhecimento oficial da ALP Moko da Bananeira.

ANEXO II
CAP\xCDTULO I
DA IMPLANTA\xC7\xC3O E MANUTEN\xC7\xC3O DO SMR MOKO DA BANANEIRA
Se\xE7\xE3o I Das defini\xE7\xF5es

Art. 1\xBA Denominar-se-\xE1 SMR Moko da Bananeira, \xE0 integra\xE7\xE3o de diferentes medidas de manejo de risco de pragas, das quais pelo menos duas atuam independentemente, com efeito acumulativo, para atingir o n\xEDvel apropriado de seguran\xE7a fitossanit\xE1ria.

Art. 2\xBA Entender-se-\xE1 por erradica\xE7\xE3o, as medidas a serem adotadas para elimina\xE7\xE3o completa da bact\xE9ria *Ralstonia solanacearum ra\xE7a 2*.
Se\xE7\xE3o II Do procedimento para aplica\xE7\xE3o de medidas integradas em um enfoque de Sistemas para o Manejo de Risco para Moko da Bananeira (SMR Moko da Bananeira)

Art. 3\xBA O SMR Moko da Bananeira, poder\xE1 ser implantado de modo a evitar restri\xE7\xF5es ao tr\xE2nsito de frutos de banana e infloresc\xEAncias de helic\xF4nias.

Art. 4\xBA Caber\xE1 ao OEDSV promover e organizar a inscri\xE7\xE3o das UP's que adotarem o SMR Moko da Bananeira.
\xA7 1\xBA O propriet\xE1rio interessado, dever\xE1 solicitar a inscri\xE7\xE3o da UP, no SMR Moko da Bananeira, ao OEDSV.
\xA7 2\xBA Caso a UP j\xE1 esteja inscrita em algum outro cadastro do OEDSV, poder\xE3o ser aproveitados os dados para compor o cadastro de SMR Moko da Bananeira.
\xA7 3\xBA O c\xF3digo de identifica\xE7\xE3o da UP inscrita no SMR Moko da Bananeira, dever\xE1 ser o mesmo institu\xEDdo pelas normas referentes \xE0 certifica\xE7\xE3o fitossanit\xE1ria de origem.

Art. 5\xBA Dever\xE3o ser adotadas as seguintes pr\xE1ticas:
\xA7 1\xBA Nos cultivos de bananeiras:
I - nas regi\xF5es onde ocorrem estirpes transmiss\xEDveis por insetos, proteger as infloresc\xEAncias,
imediatamente ao seu surgimento, envolvendo-as com sacos de polietileno, mantendo-os at\xE9 a emiss\xE3o da \xFAltima penca, caso retire a prote\xE7\xE3o, remover a infloresc\xEAncia masculina (mangar\xE1, cora\xE7\xE3o ou umbigo);
II - em caso de planta suspeita, realizar corte nos frutos para confirmar a presen\xE7a ou aus\xEAncia de
sintomas; e
III - comercializar os frutos sempre despencados, descartando os cachos que apresentarem sintomas
durante o despencamento.
\xA7 2\xBA Nos cultivos de helic\xF4nias:
I - inspecionar periodicamente touceiras e novas brota\xE7\xF5es, por meio de corte do pseudocaule,
desinfestando os equipamentos de corte; e
II - tratar a \xE1gua dos tanques de lavagem das infloresc\xEAncias com dois por cento de hipoclorito de s\xF3dio

ativo, antes do descarte, para evitar a dissemina\xE7\xE3o do pat\xF3geno na \xE1rea;
\xA7 3\xBA Nos cultivos de bananeiras e helic\xF4nias:
I - plantar mudas produzidas em ALP Moko da Bananeira;
II - proceder desinfesta\xE7\xE3o de ferramentas utilizadas em desbaste, desfolha, corte do cora\xE7\xE3o e colheita,
ap\xF3s o trabalho em no m\xE1ximo dez touceiras, utilizando uma das seguintes solu\xE7\xF5es:
a) formalde\xEDdo/\xE1gua (1:3);
b) formalde\xEDdo ( 5%);
c) formol (10%); e d) desinfestantes \xE0 base de creosol, hipoclorito de s\xF3dio ou c\xE1lcio, \xE1lcool ou am\xF4nia quatern\xE1ria;
III - substituir capina manual ou mec\xE2nica por ro\xE7agem do mato ou uso de herbicidas; e
IV - erradicar imediatamente os focos de Moko da Bananeira, bem como as plantas existentes no raio de cinco metros dos mesmos, n\xE3o podendo ocorrer replantio durante um ano.

Art. 6\xBA O OEDSV n\xE3o aceitar\xE1 inscri\xE7\xE3o de UP localizada numa dist\xE2ncia inferior a vinte metros de um foco de Moko da Bananeira.

Se\xE7\xE3o III Dos controles e san\xE7\xF5es

Art. 7\xBA A inscri\xE7\xE3o de nova UP no cadastro de SMR Moko da Bananeira dever\xE1 ser comunicada \xE0 SFA pelo OEDSV em um prazo de cinco dias \xFAteis.

Art. 8\xBA A listagem atualizada das UP's inclu\xEDdas no SMR Moko da Bananeira dever\xE1 ser encaminhada \xE0 SFA, por meio de m\xEDdia impressa e eletr\xF4nica, trimestralmente ou sempre que solicitado pela SDA/MAPA.
Par\xE1grafo \xFAnico. A SFA encaminhar\xE1 a listagem de que trata o caput \xE0 SDA/MAPA.

Art. 9\xBA O respons\xE1vel t\xE9cnico pela UP informar\xE1 ao OEDSV sobre a ocorr\xEAncia de focos de Moko da Bananeira, e os respectivos procedimentos de erradica\xE7\xE3o adotados.

Art. 10. O OEDSV realizar\xE1 inspe\xE7\xF5es trimestrais em amostra aleat\xF3ria das UP's cadastradas, determinando a necessidade ou n\xE3o da implementa\xE7\xE3o de a\xE7\xF5es corretivas.

Art. 11. O OEDSV encaminhar\xE1 relat\xF3rios trimestrais \xE0 SFA, apresentando os resultados das inspe\xE7\xF5es realizadas.
\xA7 1\xBA Ap\xF3s an\xE1lise e emiss\xE3o de parecer t\xE9cnico, pela SFA, os relat\xF3rios dever\xE3o ser encaminhados \xE0 SDA/MAPA.
\xA7 2\xBA A SDA/MAPA poder\xE1 determinar a necessidade de a\xE7\xF5es corretivas, inclusive a exclus\xE3o de UP do cadastro de SMR.

Art. 12. S\xE3o consideradas irregularidades na manuten\xE7\xE3o do SMR Moko da Bananeira:
I - localiza\xE7\xE3o geogr\xE1fica (coordenadas) da UP em desacordo com o informado;
II - \xE1rea de plantio em desacordo com o informado na inscri\xE7\xE3o da UP;
III - emiss\xE3o de CFO sem registro no Livro de Acompanhamento;
IV - inexist\xEAncia do Livro de Acompanhamento;
V - n\xE3o realiza\xE7\xE3o das pr\xE1ticas previstas no art. 5\xBA, deste Anexo II; e
VI - emiss\xE3o de CFO com declara\xE7\xE3o adicional de SMR Moko da Bananeira para frutos produzidos em
UP que n\xE3o esteja regularmente inscrita no sistema.

Art. 13. Constatada qualquer das situa\xE7\xF5es previstas nos incisos I, II, III e IV, art. 12, deste Anexo II, o OEDSV notificar\xE1 o propriet\xE1rio, estabelecendo prazo de trinta dias para corre\xE7\xE3o das irregularidades.
\xA7 1\xBA A n\xE3o corre\xE7\xE3o da irregularidade prevista no inciso I, implica na suspens\xE3o do registro da UP, no SMR Moko da Bananeira, at\xE9 que seja atendida a determina\xE7\xE3o do OEDSV.
\xA7 2\xBA A n\xE3o corre\xE7\xE3o das irregularidades previstas nos incisos II, II, e IV implica na suspens\xE3o do registro da UP, no SMR Moko da Bananeira, pelo per\xEDodo de seis meses.

Art. 14. Constatada qualquer das situa\xE7\xF5es previstas nos incisos V e VI, art. 12, deste Anexo II, o OEDSV excluir\xE1 a UP do SMR Moko da Bananeira.
Par\xE1grafo \xFAnico. Tamb\xE9m, em caso de embara\xE7o ou impedimento \xE0 fiscaliza\xE7\xE3o agropecu\xE1ria oficial, a UP ser\xE1 exclu\xEDda do SMR Moko da Bananeira, sem preju\xEDzo das demais san\xE7\xF5es cab\xEDveis.

Art. 15. A aplica\xE7\xE3o das san\xE7\xF5es previstas nesta se\xE7\xE3o III, do Anexo II, dever\xE1 ser comunicada, imediatamente, \xE0 SFA, que dar\xE1 conhecimento da decis\xE3o \xE0 SDA/MAPA.

Art. 16. O propriet\xE1rio de UP exclu\xEDda do SMR Moko da Bananeira, n\xE3o poder\xE1 solicitar novo cadastramento, mesmo de outra UP, pelo prazo de doze meses, da data da exclus\xE3o.

D.O.U., 29/05/2009 - Se\xE7\xE3o 1`,
  },
  {
    id: 'IN20-2013',
    texto: `MINIST\xC9RIO DA AGRICULTURA, PECU\xC1RIA E ABASTECIMENTO

GABINETE DO MINISTRO

INSTRU\xC7\xC3O NORMATIVA N\xBA 20, DE 20 DE JUNHO DE 2013

O MINISTRO DE ESTADO DA AGRICULTURA, PECU\xC1- RIA E ABASTECIMENTO, no uso da atribui\xE7\xE3o que lhe confere o art. 87, par\xE1grafo \xFAnico, inciso II, da Constitui\xE7\xE3o, o art. 2\xBA do Decreto n\xBA 5.741, de 30 de mar\xE7o de 2006, tendo em vista o disposto no Decreto n\xBA 24.114, de 12 de abril de 1934, na Lei n\xBA 7.802, de 11 de julho de 1989, no Decreto n\xBA 5.153, de 23 de julho de 2004, no Decreto n\xBA 4.074, de 4 de janeiro de 2002, na Instru\xE7\xE3o Normativa n\xBA 54, de 4 de dezembro de 2007, na Instru\xE7\xE3o Normativa n\xBA 55, de 4 de dezembro de 2007, e o que consta do Processo n\xBA 21000.010758/2012-78, resolve:

Art. 1\xBA Instituir o Programa Nacional de Preven\xE7\xE3o e Controle do Cancro Europeu das Pom\xE1ceas
(Neonectria galligena) - PNCEP com a finalidade de estabelecer os crit\xE9rios e procedimentos para a conten\xE7\xE3o da praga, e Grupo com o objetivo de propor, acompanhar e avaliar as a\xE7\xF5es para a implementa\xE7\xE3o e o desenvolvimento do PNCEP no \xE2mbito do Minist\xE9rio da Agricultura, Pecu\xE1ria e Abastecimento- MAPA.
Par\xE1grafo \xFAnico. Para efeitos desta Instru\xE7\xE3o Normativa, ficam aprovados os modelos de declara\xE7\xE3o da situa\xE7\xE3o do cancro europeu no pomar, constante do Anexo I, e de declara\xE7\xE3o da situa\xE7\xE3o do cancro europeu no viveiro, constante do Anexo II.

Art. 2\xBA As a\xE7\xF5es previstas no PNCEP ser\xE3o coordenadas pelo Departamento de Sanidade Vegetal da
Secretaria de Defesa Agropecu\xE1ria - DSV/SDA.
CAP\xCDTULO I
DO GRUPO NACIONAL PARA A IMPLEMENTA\xC7\xC3O E O DESENVOLVIMENTO DO PNCEP

Art. 3\xBA O Grupo previsto no art. 1\xBA ser\xE1 integrado por representantes, titulares e suplentes, dos seguintes
\xF3rg\xE3os:
I - Departamento de Sanidade Vegetal - DSV/SDA/MAPA, sendo o seu Diretor o coordenador do Grupo;
II - Coordena\xE7\xE3o-Geral de Prote\xE7\xE3o de Plantas - CGPP/DSV/SDA/MAPA, cujo representante exercer\xE1 a
coordena\xE7\xE3o T\xE9cnico-Executiva;
III - Superintend\xEAncia Federal de Agricultura - SFA nos Estados do Rio Grande do Sul, Santa Catarina e
Paran\xE1;
IV - Secretaria de Estado de Agricultura, Pecu\xE1ria e Agroneg\xF3cio do Rio Grande do Sul - SEAPA;
V - Companhia Integrada de Desenvolvimento Agr\xEDcola de Santa Catarina - CIDASC/SC;
VI - Ag\xEAncia de Defesa Agropecu\xE1ria do Paran\xE1 - ADAPAR;
VII - Centro Nacional de Pesquisa de Uva e Vinho da EMBRAPA - CNPUV/EMBRAPA;
VIII - Empresa de Pesquisa Agropecu\xE1ria e Extens\xE3o Rural do Estado de Santa Catarina - EPAGRI;
IX - Instituto Agron\xF4mico do Paran\xE1 - IAPAR; e
X - Associa\xE7\xE3o Brasileira dos Produtores de Ma\xE7\xE3 - ABPM.

Art. 4\xBA O coordenador do Grupo poder\xE1 convidar representantes de outros \xF3rg\xE3os e entidades, p\xFAblicas ou

privadas, para participarem dos seus trabalhos ou reuni\xF5es.

Art. 5\xBA S\xE3o atribui\xE7\xF5es do Coordenador do PNCEP:
I - acompanhar o desenvolvimento do programa;
II - analisar e consolidar os relat\xF3rios semestrais apresentados;
III - remeter anualmente \xE0 Secretaria de Defesa Agropecu\xE1ria - SDA/MAPA e aos membros do Grupo
relat\xF3rio sobre as atividades e resultados obtidos pelo Programa;
IV - avaliar os resultados alcan\xE7ados e sugerir medidas corretivas.

Art. 6\xBA S\xE3o atribui\xE7\xF5es do Grupo:
I - elaborar o cronograma de atividades;
II - analisar propostas de m\xE9todos para o controle da praga e aprovar sua ado\xE7\xE3o pelo PNCEP;
III - recomendar pesquisas visando ao controle do Cancro Europeu das Pom\xE1ceas no Brasil; e
IV - indicar a\xE7\xF5es visando \xE0 educa\xE7\xE3o sanit\xE1ria e \xE0 forma\xE7\xE3o e treinamento dos profissionais envolvidos
no PNCEP.
CAP\xCDTULO II
DOS CRIT\xC9RIOS E PROCEDIMENTOS A SEREM ADOTADOS NO PNCEP
Se\xE7\xE3o I Da produ\xE7\xE3o e comercializa\xE7\xE3o

Art. 7\xBA A produ\xE7\xE3o, o beneficiamento e o transporte de material propagativo e de frutos de pom\xE1ceas
provenientes de Unidades da Federa\xE7\xE3o com ocorr\xEAncia comprovada de Cancro Europeu das Pom\xE1ceas, para fins de certifica\xE7\xE3o fitossanit\xE1ria de origem e de tr\xE2nsito de vegetais, obedecer\xE1 ao estabelecido nas Instru\xE7\xF5es Normativas nos 54 e 55, ambas de 4 de dezembro de 2007.
\xA7 1\xBA A partida dever\xE1 seguir acompanhada do Certificado Fitossanit\xE1rio de Origem (CFO) ou do Certificado Fitossanit\xE1rio de Origem Consolidado (CFOC) at\xE9 o momento da emiss\xE3o da Permiss\xE3o de Tr\xE2nsito de Vegetais (PTV).
\xA7 2\xBA Para frutos, dever\xE1 constar nos documentos previstos no \xA7 1\xBA deste artigo a seguinte Declara\xE7\xE3o Adicional: "Na unidade de produ\xE7\xE3o e Unidade de Consolida\xE7\xE3o - UC foram adotados os procedimentos de controle e preven\xE7\xE3o previstos nesta norma e os frutos n\xE3o apresentam sintomas de Neonectria galligena".
\xA7 3\xBA Quando tratar-se de material propagativo, exceto material in vitro, dever\xE1 constar nos documentos previstos no \xA7 1\xBA deste artigo a seguinte Declara\xE7\xE3o Adicional: "A Unidade de produ\xE7\xE3o foi inspecionada oficialmente durante o per\xEDodo de produ\xE7\xE3o e n\xE3o foi constatada a presen\xE7a de sintomas de infec\xE7\xE3o pela praga Neonectria galligena ".
\xA7 4\xBA Os procedimentos de higieniza\xE7\xE3o a serem observados durante o processamento dos frutos s\xE3o os seguintes:
I - na colheita, deve-se proceder \xE0 higieniza\xE7\xE3o de equipamentos, embalagens, local de trabalho e
trabalhadores;

II - realizar e implementar anualmente uma avalia\xE7\xE3o de risco, devidamente documentada e atualizada
que abranja os aspectos de higiene na colheita e transporte do produto;
III - na colheita, disponibilizar instala\xE7\xF5es sanit\xE1rias e lavagem de m\xE3os a menos de 500 (quinhentos)
metros do local de trabalho;
IV - na empacotadora, realizar uma avalia\xE7\xE3o de riscos sobre higiene, atualizada anualmente e definir os
procedimentos de controle;
V - disponibilizar para os trabalhadores da empacotadora instala\xE7\xF5es sanit\xE1rias limpas, pr\xF3ximas de sua
\xE1rea de trabalho, mas sem que abram para essa \xE1rea, a n\xE3o ser que a porta se feche de forma autom\xE1tica;
VI - na empacotadora, os trabalhadores devem cumprir as instru\xE7\xF5es sobre higiene durante o manuseio
dos produtos frescos.
Se\xE7\xE3o II Das Medidas de Preven\xE7\xE3o e Controle em Pomares

Art. 8\xBA No per\xEDodo de poda, dever\xE3o ser obedecidas as seguintes pr\xE1ticas:
I - pulveriza\xE7\xE3o das pom\xE1ceas com fungicidas protetores antes do in\xEDcio de cada poda e at\xE9 7 (sete) dias
ap\xF3s; e
II - quando necess\xE1ria a poda verde, execut\xE1-la at\xE9 o final de janeiro de cada ano.

Art. 9\xBA Em Unidades de Produ\xE7\xE3o - UPs com incid\xEAncia de at\xE9 1% (um por cento), as plantas com
sintomas dever\xE3o ser arrancadas e incineradas.

Art. 10. Nas UPs com incid\xEAncia superior a 1% (um por cento) de plantas com sintomas do fungo
Neonectria galligena, dever\xE3o ser realizados os seguintes procedimentos:
I - elimina\xE7\xE3o e incinera\xE7\xE3o dos ramos menores de 3 (tr\xEAs) cent\xEDmetros de di\xE2metro que apresentarem
cancros, sendo realizadas no m\xEDnimo duas interven\xE7\xF5es no per\xEDodo vegetativo e outras duas no per\xEDodo de repouso;
II - limpeza e tratamento de cancro em ramos maiores de 3 (tr\xEAs) cent\xEDmetros de di\xE2metro, sendo
realizadas no m\xEDnimo duas interven\xE7\xF5es no per\xEDodo vegetativo e outras duas no per\xEDodo de repouso e os segmentos retirados dos cancros cobertos com solo;
III - quando o tronco estiver comprometido em at\xE9 50% (cinquenta por cento) do per\xEDmetro pela praga,
este dever\xE1 ser limpo e desinfetado com \xE1lcool 70% (setenta por cento) seguido da aplica\xE7\xE3o de pastas fungicidas;
IV - as plantas que apresentarem o tronco comprometido com cancros maiores de 50% (cinquenta por
cento) do seu per\xEDmetro dever\xE3o ser arrancadas e incineradas;
V - as plantas tratadas ou podadas dever\xE3o ser identificadas para que, nos ciclos seguintes, possa se
verificar a efic\xE1cia das pr\xE1ticas;
VI - as plantas identificadas que apresentarem novas les\xF5es dever\xE3o ser removidas e incineradas;
VII - todas as ferramentas utilizadas na remo\xE7\xE3o dos ramos com cancros e na retirada dos tecidos afetados
pelos cancros dever\xE3o ser limpas com um desinfetante.
Par\xE1grafo \xFAnico. As plantas com menos de 3 (tr\xEAs) anos que apresentarem sintomas dever\xE3o ser eliminadas.

Art. 11. No per\xEDodo de queda das folhas e in\xEDcio de brota\xE7\xE3o, dever\xE3o ser realizados os seguintes
procedimentos para as pulveriza\xE7\xF5es dos pomares:
I - tratamentos com fungicidas protetores durante as fases:
10% (dez por cento) da queda de folhas, 90% (noventa por cento) da queda de folhas e 30 (trinta) dias ap\xF3s.
II - na fase de 50% (cinquenta por cento) de queda de folhas, dever\xE1 ser realizado um tratamento com
fungicida curativo associado um protetor; e
III - no in\xEDcio da brota\xE7\xE3o, as plantas dever\xE3o ser pulverizadas com fungicidas protetores.

Art. 12. Para os pomares que tenham sido afetados por granizo, dever\xE3o ser realizadas duas pulveriza\xE7\xF5es
com intervalo de 7 (sete) dias com uma combina\xE7\xE3o de fungicidas protetores, curativo e fosfito.

Art. 13. Para o controle da podrid\xE3o dos frutos causada pelo fungo Neonectria galligena, dever\xE1 ser
pulverizado fungicida curativo no est\xE1dio fenol\xF3gico de queda de p\xE9talas e at\xE9 15 (quinze) dias antes da colheita.
Se\xE7\xE3o III Das Medidas de Preven\xE7\xE3o e Controle em Unidades de Produ\xE7\xE3o de Mudas (Viveiros)

Art. 14. Os viveiros de pom\xE1ceas dever\xE3o obedecer aos seguintes procedimentos:
I - estar localizados a pelo menos 10 km (dez quil\xF4metros) de dist\xE2ncia de pomares com registro de
ocorr\xEAncia da praga Neonectria galligena;
II - o Respons\xE1vel T\xE9cnico do viveiro dever\xE1 solicitar ao \xD3rg\xE3o Estadual de Defesa Sanit\xE1ria Vegetal -
OEDSV a inscri\xE7\xE3o da UP com anteced\xEAncia m\xEDnima de 90 (noventa) dias antes do plantio;
III - as mudas dever\xE3o ser pulverizadas, no m\xEDnimo, mensalmente com fungicidas protetores alternados
com fungicidas curativos;
IV - sempre que realizada uma pr\xE1tica que cause ferimentos, as plantas dever\xE3o ser pulverizadas com
fungicidas protetores antes do in\xEDcio da pr\xE1tica e at\xE9 7 (sete) dias ap\xF3s a mesma.
Se\xE7\xE3o IV Dos Procedimentos a Serem Adotados e das Obriga\xE7\xF5es

Art. 15. O OEDSV dever\xE1 realizar anualmente levantamento nos pomares comerciais visando determinar
a ocorr\xEAncia de Neonectria galligena.

Art. 16. O OEDSV proceder\xE1 \xE0s inspe\xE7\xF5es das UPs de mudas no per\xEDodo da pr\xE9-comercializa\xE7\xE3o, com
vistas \xE0 detec\xE7\xE3o do fungo Neonectria galligena e:
I - quando detectadas plantas com sintomas do fungo Neonectria galligena, dever\xE1 ser coletada amostra e
enviada para an\xE1lise em laborat\xF3rio credenciado pelo MAPA, sendo que as mudas somente poder\xE3o ser comercializadas ap\xF3s comprova\xE7\xE3o laboratorial da aus\xEAncia da praga;
II - se o resultado da an\xE1lise indicar a presen\xE7a do fungo Neonectria galligena, as plantas da UP dever\xE3o
ser arrancadas e incineradas \xE0s custas do produtor.

Art. 17. O Respons\xE1vel T\xE9cnico de mudas dever\xE1 proceder a levantamento no per\xEDodo de

pr\xE9-comercializa\xE7\xE3o em 100% (cem por cento) do material de propaga\xE7\xE3o de todas as UPs de mudas e:
I - quando detectadas plantas com sintomas do fungo Neonectria galligena, dever\xE1 ser coletada amostra e
enviada para an\xE1lise em laborat\xF3rio credenciado pelo MAPA, sendo que as mudas somente poder\xE3o ser comercializadas ap\xF3s comprova\xE7\xE3o laboratorial da aus\xEAncia da praga;
II - se o resultado da an\xE1lise indicar a presen\xE7a do fungo Neonectria galligena, as plantas da unidade de
produ\xE7\xE3o dever\xE3o ser arrancadas e incineradas \xE0s custas do produtor; e
III - os resultados referentes \xE0s an\xE1lises mencionadas nos incisos I e II deste artigo dever\xE3o ser
encaminhados ao OEDSV, conforme modelo estabelecido no Anexo I desta Instru\xE7\xE3o Normativa.
Par\xE1grafo \xFAnico. Os levantamentos mencionados no caput dever\xE3o ser realizados antes da fiscaliza\xE7\xE3o do OEDSV, prevista no art. 18.

Art. 18. O OEDSV dever\xE1 encaminhar ao MAPA os resultados dos levantamentos e das inspe\xE7\xF5es de UPs
de mudas previstos nos arts. 16 e 17, bem como das demais a\xE7\xF5es realizadas na preven\xE7\xE3o e controle da praga Neonectria galligena.

Art. 19. O Respons\xE1vel T\xE9cnico do pomar dever\xE1 declarar ao OEDSV at\xE9 o dia 15 de outubro de cada ano
a presen\xE7a ou n\xE3o do fungo Neonectria galligena e o n\xFAmero de plantas infectadas, conforme modelo estabelecido no Anexo II desta Instru\xE7\xE3o Normativa.
CAP\xCDTULO III
DISPOSI\xC7\xD5ES FINAIS

Art. 20. As Superintend\xEAncias Federais de Agricultura, Pecu\xE1ria e Abastecimento nos Estados do RS, SC
e PR dever\xE3o acompanhar a execu\xE7\xE3o das a\xE7\xF5es previstas no PNCEP, bem como a ado\xE7\xE3o de medidas corretivas.

Art. 21. Os pomares onde n\xE3o forem adotadas as medidas estabelecidas nesta Instru\xE7\xE3o Normativa e
contaminados por Neonectria galligena, comprovado por laudo laboratorial oficial, dever\xE3o ser destru\xEDdos \xE0s custas do propriet\xE1rio.

Art. 22. Para atendimento do PNCEP, dever\xE3o ser utilizados fungicidas registrados no MAPA.

Art. 23. Esta Instru\xE7\xE3o Normativa entra em vigor na data de sua publica\xE7\xE3o.
ANT\xD4NIO ANDRADE
ANEXO I
DECLARA\xC7\xC3O DA SITUA\xC7\xC3O DO CANCRO EUROPEU NO VIVEIRO
ANO DA SAFRA ____________

| Nome do produtor/empresa: |  |
| --- | --- |
| Endere\xE7o: |  |
| Munic\xEDpio: | CEP: |
| CNPJ/CPF: | UF: |
| C\xF3digo da Unidade de Produ\xE7\xE3o n\xBA |  |
| Inscri\xE7\xE3o no RENASEM n\xBA |  |
| Ap\xF3s inspe\xE7\xE3o realizada na unidade de produ\xE7\xE3o anteriormente codificada, declaro que a detec\xE7\xE3o de plantas sintom\xE1ticas para cancro europeu deu-se de forma: |  |

| ( ) Positiva |  |  |  |
| --- | --- | --- | --- |
| ( ) Negativa |  |  |  |
| Caso for positivo preencher os dados a seguir: |  |  |  |
| Lote | Esp\xE9cie | Cultivar | Representatividade |
|  |  |  | do Lote |
| Dados do Respons\xE1vel T\xE9cnico |  |  |  |
| Nome Respons\xE1vel T\xE9cnico |  |  | CREA |
| Habilita\xE7\xE3o n\xBA |  |  |  |
| Local e Data |  |  |  |
| Assinatura e carimbo |  |  |  |

ANEXO II
DECLARA\xC7\xC3O DA SITUA\xC7\xC3O DO CANCRO EUROPEU NO POMAR
ANO DA SAFRA: ____________

| Nome do produtor/empresa: |  |  |  |
| --- | --- | --- | --- |
| Endere\xE7o: |  |  |  |
| Munic\xEDpio: |  |  | CEP: |
| CNPJ/CPF: |  |  | UF: |
| C\xF3digo da Unidade de Produ\xE7\xE3o n\xBA |  |  |  |
| \xC1rea: |  |  |  |
| Ap\xF3s inspe\xE7\xE3o realizada na unidade de produ\xE7\xE3o acima relacionada, declaro que a detec\xE7\xE3o de plantas sintom\xE1ticas para cancro europeu deu-se de forma: |  |  |  |
| ( ) Positiva |  |  |  |
| ( ) Negativa |  |  |  |
| Caso for positivo preencher os dados a seguir: |  |  |  |
| Esp\xE9cie | Cultivar | Idade | Origem das Mudas |
| Dados do Respons\xE1vel T\xE9cnico |  |  |  |
| Nome Respons\xE1vel T\xE9cnico |  | CREA |  |
| Habilita\xE7\xE3o n\xBA |  |  |  |
| Local e Data |  |  |  |
| Assinatura e carimbo |  |  |  |

D.O.U., 21/06/2013 - Se\xE7\xE3o 1`,
  },
  {
    id: 'IN21-2018',
    texto: `MINIST\xC9RIO DA AGRICULTURA, PECU\xC1RIA E ABASTECIMENTO GABINETE DO MINISTRO

GABINETE DO MINISTRO

INSTRU\xC7\xC3O NORMATIVA N\xBA 21, DE 25 DE ABRIL DE 2018

DOU de 11/05/2018 (n\xBA 90, Se\xE7\xE3o 1, p\xE1g. 9)

O MINISTRO DE ESTADO DA AGRICULTURA, PECU\xC1RIA E ABASTECIMENTO, no uso da atribui\xE7\xE3o que lhe confere o art. 87, par\xE1grafo \xFAnico, inciso II, da Constitui\xE7\xE3o, tendo em vista o disposto no Decreto n\xBA 8.852, de 20 de setembro de 2016, no Decreto n\xBA 24.114, de 12 de abril de 1934, no Decreto n\xBA 75.061, de 9 de dezembro de 1974, no Decreto n\xBA 5.741, de 30 de mar\xE7o de 2006, no Decreto n\xBA 5.759, de 17 de abril de 2006, na Instru\xE7\xE3o Normativa MAPA n\xBA 52, de 20 de novembro de 2007, e o que consta do Processo n\xBA 21000.004701/2018-25, resolve:
CAP\xCDTULO I
DAS DISPOSI\xC7\xD5ES GERAIS

Art. 1\xBA - Ficam institu\xEDdos, em todo o territ\xF3rio nacional, na forma desta Instru\xE7\xE3o Normativa, os crit\xE9rios e procedimentos para o
estabelecimento e manuten\xE7\xE3o do status fitossanit\xE1rio relativo \xE0 praga denominada Cancro C\xEDtrico (*Xanthomonas citri subsp. citri*).
Par\xE1grafo \xFAnico - As op\xE7\xF5es de status fitossanit\xE1rio de que trata o *caput* s\xE3o:
I - \xC1rea Sem Ocorr\xEAncia;
II - \xC1rea Livre de Praga - ALP;
III - \xC1rea sob Sistema de Mitiga\xE7\xE3o de Risco - SMR; e
IV - \xC1rea sob Erradica\xE7\xE3o.

Art. 2\xBA - As medidas de erradica\xE7\xE3o ou supress\xE3o do Cancro C\xEDtrico, obrigat\xF3rias para todos os im\xF3veis p\xFAblicos ou privados que
possuam plantas de esp\xE9cies ou h\xEDbridos dos g\xEAneros Citrus, Fortunella ou Poncirus, para fins comerciais ou n\xE3o, situados em zona rural ou urbana, ser\xE3o executadas conforme o disposto nesta Instru\xE7\xE3o Normativa.
\xA7 1\xBA - Em \xE1reas onde seja epidemiologicamente invi\xE1vel a ado\xE7\xE3o de medidas de erradica\xE7\xE3o, para viabilizar o tr\xE2nsito de material de propaga\xE7\xE3o vegetativa e de frutos c\xEDtricos com destino \xE0s \xE1reas previstas no art. 1\xBA, ser\xE3o adotadas as medidas constantes nesta Instru\xE7\xE3o Normativa.
\xA7 2\xBA - O \xD3rg\xE3o Estadual de Defesa Sanit\xE1ria Vegetal - OEDSV poder\xE1 requerer reconhecimento de status fitossanit\xE1rio para distintas \xE1reas da Unidade da Federa\xE7\xE3o - UF, observado o cumprimento das disposi\xE7\xF5es desta Instru\xE7\xE3o Normativa.

Art. 3\xBA - O reconhecimento do status fitossanit\xE1rio para o Cancro C\xEDtrico das \xE1reas previstas no art. 1\xBA desta Instru\xE7\xE3o Normativa fica
condicionado \xE0 observ\xE2ncia, pelos respectivos OEDSV, dos requisitos estabelecidos nesta norma.
\xA7 1\xBA - At\xE9 o reconhecimento oficial pelo Minist\xE9rio da Agricultura, Pecu\xE1ria e Abastecimento - MAPA, do status fitossanit\xE1rio requerido pelo OEDSV, a respectiva Unidade da Federa\xE7\xE3o (UF) ser\xE1 definida como de status fitossanit\xE1rio desconhecido para o Cancro C\xEDtrico.
\xA7 2\xBA - N\xE3o poder\xE1 ser emitida Permiss\xE3o de Tr\xE2nsito Vegetal (PTV) para as partidas de material de propaga\xE7\xE3o vegetativa e de frutos c\xEDtricos, provenientes de \xE1rea com status fitossanit\xE1rio desconhecido para o Cancro C\xEDtrico.
\xA7 3\xBA - A unidade da sanidade vegetal da Superintend\xEAncia Federal de Agricultura - SFA/MAPA/UF supervisionar\xE1 os trabalhos relativos aos procedimentos para caracteriza\xE7\xE3o e manuten\xE7\xE3o do status fitossanit\xE1rio requerido pelo OEDSV.
\xA7 4\xBA - O envio de amostra de controle oficial para diagn\xF3stico fitossanit\xE1rio em Laborat\xF3rio Oficial ou credenciado pelo MAPA n\xE3o se caracteriza como tr\xE2nsito vegetal.
\xA7 5\xBA - O envio de que trata o par\xE1grafo anterior dever\xE1 ser realizado em condi\xE7\xF5es de acondicionamento adequadas, de tal forma que garanta a integridade da amostra e a seguran\xE7a fitossanit\xE1ria do seu transporte.
CAP\xCDTULO II
PROCEDIMENTOS PARA CARACTERIZA\xC7\xC3O E MANUTEN\xC7\xC3O DO STATUS FITOSSANIT\xC1RIO DE \xC1REA SEM
OCORR\xCANCIA DE CANCRO C\xCDTRICO
Se\xE7\xE3o I Do Procedimento para Reconhecimento Oficial do Status Fitossanit\xE1rio de \xC1rea sem Ocorr\xEAncia de Cancro C\xEDtrico

Art. 4\xBA - Denomina-se como \xC1rea Sem Ocorr\xEAncia de Cancro C\xEDtrico aquela onde a aus\xEAncia da praga foi demonstrada por meio de
levantamento fitossanit\xE1rio de detec\xE7\xE3o.

Art. 5\xBA - O reconhecimento, pelo MAPA, do status fitossanit\xE1rio de \xC1rea Sem Ocorr\xEAncia de Cancro C\xEDtrico fica condicionado \xE0
realiza\xE7\xE3o de levantamentos fitossanit\xE1rios na respectiva \xE1rea, pelo OEDSV.
\xA7 1\xBA - Os levantamentos fitossanit\xE1rios ser\xE3o realizados em, no m\xEDnimo, dez por cento dos im\xF3veis com produ\xE7\xE3o comercial de c\xEDtricos, de maneira a se obter uma cobertura geogr\xE1fica representativa.
\xA7 2\xBA - A inspe\xE7\xE3o deve ser realizada em, no m\xEDnimo, vinte por cento das plantas c\xEDtricas de cada im\xF3vel, de acordo com uma das seguintes alternativas, percorrendo-se:
I - todas as ruas e inspecionando-se uma a cada cinco plantas; ou
II - uma a cada cinco ruas e inspecionando-se todas as plantas da rua, necessariamente iniciando-se na rua da bordadura.
\xA7 3\xBA - Para cada im\xF3vel com produ\xE7\xE3o comercial de citros inspecionado, dentro do raio m\xEDnimo de um quil\xF4metro, ser\xE3o inspecionadas todas as plantas c\xEDtricas existentes em im\xF3veis de produ\xE7\xE3o n\xE3o comercial, im\xF3veis urbanos e \xE1reas p\xFAblicas.
\xA7 4\xBA - Ser\xE3o inspecionadas todas as plantas c\xEDtricas nos:
I - viveiros;
II - campos de plantas fornecedoras de material de propaga\xE7\xE3o sem origem gen\xE9tica comprovada;
III - campos de produ\xE7\xE3o de porta-enxertos;
IV - jardins clonais; e
V - borbulheiras.
\xA7 5\xBA - As plantas com sintomas suspeitos de Cancro C\xEDtrico, detectadas durante os levantamentos a que se refere este artigo, dever\xE3o ter amostras coletadas e enviadas a Laborat\xF3rio Oficial ou credenciado pelo MAPA, para an\xE1lises de diagn\xF3stico fitossanit\xE1rio.
\xA7 6\xBA - Comprovada oficialmente a ocorr\xEAncia de Cancro C\xEDtrico na localidade reconhecida como \xC1rea Sem Ocorr\xEAncia de Cancro C\xEDtrico, o OEDSV dever\xE1, imediatamente, comunicar a unidade de sanidade vegetal da Superintend\xEAncia Federal de Agricultura, do Minist\xE9rio da Agricultura, Pecu\xE1ria e Abastecimento na UF (SFA/MAPA/UF), que notificar\xE1 o Departamento de Sanidade Vegetal da Secretaria de Defesa Agropecu\xE1ria (DSV/SDA/MAPA), observando-se as disposi\xE7\xF5es desta Instru\xE7\xE3o Normativa.

Art. 6\xBA - Al\xE9m dos levantamentos fitossanit\xE1rios, o OEDSV dever\xE1 tamb\xE9m realizar:
I - cadastramento de todos os im\xF3veis de produ\xE7\xE3o comercial de citros, com os seguintes dados:
a) nome do(s) produtor(es);
b) endere\xE7o e localiza\xE7\xE3o geogr\xE1fica do im\xF3vel, com base no datum oficial brasileiro (SIRGAS2000);
c) identifica\xE7\xE3o das cultivares e idade dos plantios de citros em produ\xE7\xE3o e em forma\xE7\xE3o;
d) estimativa da produ\xE7\xE3o anual, em toneladas; e e) nome do Respons\xE1vel T\xE9cnico (RT), quando couber;
II - cadastramento de todos os viveiros, campos de plantas fornecedoras de material de propaga\xE7\xE3o sem origem gen\xE9tica
comprovada, campos de produ\xE7\xE3o de porta-enxertos, jardins clonais e borbulheiras de plantas c\xEDtricas, com os seguintes dados:
a) nome do produtor;
b) endere\xE7o e localiza\xE7\xE3o geogr\xE1fica, com base no datum oficial brasileiro (SIRGAS2000);
c) estimativa da produ\xE7\xE3o anual, por tipo de material propagativo; e d) nome do RT.
Par\xE1grafo \xFAnico - Para os efeitos desta Instru\xE7\xE3o Normativa considera-se produtor o propriet\xE1rio, arrendat\xE1rio ou ocupante do im\xF3vel a qualquer t\xEDtulo.

Art. 7\xBA - \xC9 condi\xE7\xE3o, para avalia\xE7\xE3o do status fitossanit\xE1rio de \xC1rea Sem Ocorr\xEAncia de Cancro C\xEDtrico, o encaminhamento pelo
OEDSV \xE0 unidade de sanidade vegetal da SFA/MAPA/UF, que far\xE1 posterior encaminhamento ao DSV/SDA/MAPA, dos seguintes documentos:
I - of\xEDcio do OEDSV solicitando a avalia\xE7\xE3o de reconhecimento;
II - mapa indicando localiza\xE7\xE3o das barreiras fitossanit\xE1rias existentes para o controle do tr\xE2nsito de vegetais;

III - descri\xE7\xE3o dos recursos materiais e humanos de cada barreira fitossanit\xE1ria e regime de escalas de funcionamento; e
IV - relat\xF3rio das atividades concernentes aos levantamentos fitossanit\xE1rios e os resultados obtidos.
Par\xE1grafo \xFAnico - Os documentos relativos aos levantamentos descritos no art. 5\xBA, inclusive os laudos de diagn\xF3stico fitossanit\xE1rio, e os cadastros descritos no art. 6\xBA dever\xE3o estar devidamente arquivados e dispon\xEDveis \xE0 fiscaliza\xE7\xE3o.

Art. 8\xBA - A unidade de sanidade vegetal da SFA/MAPA/UF que receber a documenta\xE7\xE3o prevista no art. 7\xBA desta Instru\xE7\xE3o
Normativa, dever\xE1 instruir processo administrativo pr\xF3prio, elaborar parecer t\xE9cnico sobre o cumprimento das disposi\xE7\xF5es desta norma e encaminhar a demanda ao DSV/SDA/MAPA.
Par\xE1grafo \xFAnico - No parecer t\xE9cnico de que trata o *caput* dever\xE1 constar a manifesta\xE7\xE3o t\xE9cnica sobre os documentos mencionados no par\xE1grafo \xFAnico do art. 7\xBA.

Art. 9\xBA - O DSV/SDA/MAPA analisar\xE1 o processo e emitir\xE1 parecer t\xE9cnico de avalia\xE7\xE3o quanto ao cumprimento dos requisitos para
reconhecimento do status fitossanit\xE1rio de \xC1rea Sem Ocorr\xEAncia de Cancro C\xEDtrico.

Art. 10 - A SDA/MAPA, mediante parecer t\xE9cnico conclusivo favor\xE1vel do DSV/SDA/MAPA, publicar\xE1 ato de reconhecimento oficial
do status fitossanit\xE1rio de \xC1rea Sem Ocorr\xEAncia de Cancro C\xEDtrico.
Se\xE7\xE3o II Da Manuten\xE7\xE3o do Status Fitossanit\xE1rio de \xC1rea sem Ocorr\xEAncia de Cancro C\xEDtrico

Art. 11 - A manuten\xE7\xE3o do reconhecimento oficial do status fitossanit\xE1rio de \xC1rea Sem Ocorr\xEAncia de Cancro C\xEDtrico fica
condicionada \xE0 realiza\xE7\xE3o, pelo OEDSV de, no m\xEDnimo, um levantamento fitossanit\xE1rio por ano, conforme procedimento descrito no art. 5\xBA desta Instru\xE7\xE3o Normativa.
\xA7 1\xBA - Com base nos levantamentos fitossanit\xE1rios, ser\xE1 elaborado relat\xF3rio t\xE9cnico, contendo as seguintes informa\xE7\xF5es:
I - per\xEDodo de refer\xEAncia do relat\xF3rio;
II - rela\xE7\xE3o dos im\xF3veis produtores de citros inspecionados; e
III - quantidade e resultado de laudos de diagn\xF3stico fitossanit\xE1rio, quando houver coleta de amostras para fins de diagn\xF3stico
fitossanit\xE1rio.
\xA7 2\xBA - O relat\xF3rio dever\xE1 ser encaminhado pelo OEDSV \xE0 unidade de sanidade vegetal da SFA/MAPA/UF correspondente, que instruir\xE1 processo administrativo pr\xF3prio, emitir\xE1 parecer t\xE9cnico e enviar\xE1 o processo contendo toda a documenta\xE7\xE3o ao DSV/ SDA/
MAPA.
\xA7 3\xBA - A documenta\xE7\xE3o ser\xE1 analisada pelo DSV/SDA/MAPA, que emitir\xE1 parecer t\xE9cnico de avalia\xE7\xE3o quanto ao cumprimento dos requisitos para manuten\xE7\xE3o do status fitossanit\xE1rio de \xC1rea Sem Ocorr\xEAncia de Cancro C\xEDtrico.
\xA7 4\xBA - A SDA/MAPA, mediante parecer t\xE9cnico favor\xE1vel do DSV/SDA/MAPA, comunicar\xE1 oficialmente ao OEDSV a manuten\xE7\xE3o do status fitossanit\xE1rio de \xC1rea Sem Ocorr\xEAncia de Cancro C\xEDtrico.

Art. 12 - O descumprimento das disposi\xE7\xF5es previstas nesta Se\xE7\xE3o implicar\xE1 na mudan\xE7a do status fitossanit\xE1rio de \xC1rea Sem
Ocorr\xEAncia de Cancro C\xEDtrico para status fitossanit\xE1rio desconhecido.
Se\xE7\xE3o III Do Tr\xE2nsito de Material Vegetal

Art. 13 - Na emiss\xE3o do Certificado Fitossanit\xE1rio de Origem (CFO) ou de Certificado Fitossanit\xE1rio de Origem Consolidado (CFOC),
dever\xE1 ser adotada uma das seguintes Declara\xE7\xE3o Adicional (DA):
I - para fruto: "Os frutos s\xE3o origin\xE1rios de \xC1rea Sem Ocorr\xEAncia de Cancro C\xEDtrico (*Xanthomonas citri subsp. citri*), oficialmente
reconhecida"; ou
II - para material de propaga\xE7\xE3o: "O material de propaga\xE7\xE3o \xE9 origin\xE1rio de \xC1rea Sem Ocorr\xEAncia de Cancro C\xEDtrico (Xanthomonas
citri subsp. citri), oficialmente reconhecida".

Art. 14 - Para o tr\xE2nsito, o material vegetal de propaga\xE7\xE3o e frutos c\xEDtricos provenientes de \xC1rea Sem Ocorr\xEAncia de Cancro C\xEDtrico,
dever\xE1 ser acompanhado de Permiss\xE3o de Transito de Vegetais - PTV, embasada em CFO ou CFOC, com a transcri\xE7\xE3o das DAs especificadas no art. 13 desta Instru\xE7\xE3o Normativa.
CAP\xCDTULO III
PROCEDIMENTOS PARA CARACTERIZA\xC7\xC3O, IMPLANTA\xC7\xC3O E MANUTEN\xC7\xC3O DO STATUS FITOSSANIT\xC1RIO DE \xC1REA
LIVRE DE PRAGA PARA O CANCRO C\xCDTRICO
Se\xE7\xE3o I Do Procedimento para Reconhecimento Oficial do Status Fitossanit\xE1rio de \xC1rea Livre da Praga (ALP) para o Cancro C\xEDtrico

Art. 15 - Denomina-se como ALP para o Cancro C\xEDtrico, uma \xE1rea onde n\xE3o ocorra a referida praga, demonstrado por evid\xEAncia
cient\xEDfica, e na qual, de forma apropriada, essa condi\xE7\xE3o \xE9 oficialmente mantida.

Art. 16 - O reconhecimento, pelo MAPA, do status fitossanit\xE1rio de ALP para o Cancro C\xEDtrico, fica condicionado \xE0 realiza\xE7\xE3o de
levantamentos fitossanit\xE1rios pelo OEDSV na pretendida \xE1rea, obedecidos os procedimentos previstos nos par\xE1grafos 1\xBA, 2\xBA, 3\xBA, 4\xBA e 5\xBA, do art. 5\xBA, e do cadastramento previsto no art. 6\xBA desta Instru\xE7\xE3o Normativa.

Art. 17 - \xC9 condi\xE7\xE3o, para avalia\xE7\xE3o do status fitossanit\xE1rio de ALP para o Cancro C\xEDtrico, o encaminhamento pelo OEDSV \xE0
unidade de sanidade vegetal da SFA/MAPA/UF, dos documentos e informa\xE7\xF5es previstos nos incisos I, II, III e IV, do art. 7\xBA, desta Instru\xE7\xE3o Normativa, e ainda o que segue:
I - documento descritivo da delimita\xE7\xE3o da ALP para o Cancro C\xEDtrico, considerando limites territoriais, acidentes geogr\xE1ficos,
rodovias, ferrovias e hidrovias; e
II - plano emergencial a ser aplicado em caso de surgimento de foco de Cancro C\xEDtrico na ALP.

Art. 18 - Mesmo que a ALP para o Cancro C\xEDtrico n\xE3o corresponda \xE0 totalidade da \xE1rea da UF, dever\xE3o ser fornecidas as seguintes
informa\xE7\xF5es relativas \xE0 citricultura em toda a UF:
I - \xE1rea plantada por variedade, em hectares;
II - \xE1rea e distribui\xE7\xE3o dos locais de produ\xE7\xE3o de material propagativo;
III - mapa da UF, identificando:
a) as regi\xF5es de produ\xE7\xE3o comercial de citros; e b) \xE1reas com ocorr\xEAncia de Cancro C\xEDtrico;
IV - dist\xE2ncias de isolamento entre a ALP e locais de ocorr\xEAncia de Cancro C\xEDtrico, com informa\xE7\xF5es do embasamento t\xE9cnico desse
isolamento.

Art. 19 - A unidade de sanidade vegetal da SFA/MAPA/UF que receber a solicita\xE7\xE3o de reconhecimento, acompanhada da
documenta\xE7\xE3o prevista nos arts. 17 e 18 desta Instru\xE7\xE3o Normativa, dever\xE1 instruir processo administrativo pr\xF3prio, elaborar parecer t\xE9cnico sobre o cumprimento das disposi\xE7\xF5es desta norma e encaminhar o processo ao DSV/SDA/MAPA.
Par\xE1grafo \xFAnico - No parecer t\xE9cnico dever\xE1 constar, al\xE9m de outras, informa\xE7\xF5es sobre os documentos mencionados no par\xE1grafo \xFAnico do art. 7\xBA.

Art. 20 - O DSV/SDA/MAPA dever\xE1 analisar o processo e proceder \xE0 auditoria t\xE9cnica, para verificar a conformidade dos
procedimentos estabelecidos por esta Instru\xE7\xE3o Normativa.
Par\xE1grafo \xFAnico - A auditoria de que trata o *caput* deste artigo poder\xE1 ser realizada, a crit\xE9rio do DSV, por Auditor Fiscal Federal Agropecu\xE1rio - AFFA, de outras unidades de sanidade vegetal das SFA/MAPA/UF.

Art. 21 - O DSV/SDA/MAPA dever\xE1 analisar o relat\xF3rio da auditoria e emitir parecer t\xE9cnico de avalia\xE7\xE3o sobre o cumprimento dos
requisitos de reconhecimento do status fitossanit\xE1rio de ALP para o Cancro C\xEDtrico.

Art. 22 - A SDA/MAPA, mediante parecer t\xE9cnico favor\xE1vel, publicar\xE1 ato de reconhecimento oficial do status fitossanit\xE1rio de ALP
para o Cancro C\xEDtrico.
Se\xE7\xE3o II Da Manuten\xE7\xE3o do Status Fitossanit\xE1rio de ALP para o Cancro C\xEDtrico

Art. 23 - A manuten\xE7\xE3o do reconhecimento oficial do status fitossanit\xE1rio de ALP para o Cancro C\xEDtrico fica condicionada \xE0
realiza\xE7\xE3o, pelo OEDSV de, no m\xEDnimo, um levantamento fitossanit\xE1rio por ano, obedecidos os procedimentos previstos nos par\xE1grafos 1\xBA, 2\xBA, 3\xBA, 4\xBA e 5\xBA, do art. 5\xBA desta Instru\xE7\xE3o Normativa.
\xA7 1\xBA - Com base no levantamento fitossanit\xE1rio, ser\xE1 elaborado relat\xF3rio t\xE9cnico, contendo as seguintes informa\xE7\xF5es:
I - per\xEDodo de refer\xEAncia do relat\xF3rio;
II - rela\xE7\xE3o dos im\xF3veis com produ\xE7\xE3o de citros inspecionados;
III - n\xFAmero e resultados de laudos laboratoriais de diagn\xF3stico fitossanit\xE1rio, quando houver coleta de amostras para diagn\xF3stico
fitossanit\xE1rio relativo a Cancro C\xEDtrico;
IV - quantidade de CFO e PTV emitidos no per\xEDodo de refer\xEAncia do relat\xF3rio;
V - quantidade de partidas de citros inspecionadas nas barreiras fitossanit\xE1rias; e
VI - ocorr\xEAncias fitossanit\xE1rias relacionadas a Cancro C\xEDtrico observadas nas barreiras.
\xA7 2\xBA - O relat\xF3rio dever\xE1 ser encaminhado \xE0 unidade de sanidade vegetal da SFA/MAPA/UF correspondente, que instruir\xE1 processo administrativo pr\xF3prio, emitir\xE1 parecer t\xE9cnico e enviar\xE1 toda a documenta\xE7\xE3o ao DSV/SDA/MAPA.

\xA7 3\xBA - A documenta\xE7\xE3o ser\xE1 analisada pelo DSV/SDA/MAPA, que emitir\xE1 parecer t\xE9cnico de avalia\xE7\xE3o quanto ao cumprimento dos requisitos de reconhecimento da manuten\xE7\xE3o do status fitossanit\xE1rio de ALP para o Cancro C\xEDtrico.
\xA7 4\xBA - A SDA/MAPA, mediante parecer t\xE9cnico favor\xE1vel do DSV/SDA/MAPA, comunicar\xE1 oficialmente ao OEDSV a manuten\xE7\xE3o do status fitossanit\xE1rio de ALP para o Cancro C\xEDtrico.

Art. 24 - O descumprimento das disposi\xE7\xF5es previstas nesta Instru\xE7\xE3o Normativa implicar\xE1 na mudan\xE7a do status fitossanit\xE1rio de
ALP para o Cancro C\xEDtrico para o de status fitossanit\xE1rio desconhecido, devendo ser adotadas as medidas previstas nesta Instru\xE7\xE3o Normativa.
Se\xE7\xE3o III Das A\xE7\xF5es de Supervis\xE3o e Auditoria

Art. 25 - Al\xE9m das supervis\xF5es realizadas pela unidade de sanidade vegetal da SFA/MAPA/UF, conforme previsto no par\xE1grafo 3\xBA do
art. 3\xBA, o DSV/SDA/MAPA, em conjunto com a unidade de sanidade vegetal da SFA/MAPA/UF, dever\xE1 realizar, no m\xEDnimo, uma auditoria por ano na ALP.
Par\xE1grafo \xFAnico - A auditoria de que trata o *caput* deste artigo poder\xE1 ser realizada, a crit\xE9rio do DSV, por Auditor Fiscal Federal Agropecu\xE1rio - AFFA, de outras unidades de sanidade vegetal das SFA/MAPA/UF.
Se\xE7\xE3o IV Do Tr\xE2nsito de Material Vegetal

Art. 26 - Na emiss\xE3o do CFO/CFOC, dever\xE1 ser adotada as seguintes DAs:
I - para frutos: "Os frutos s\xE3o origin\xE1rios de \xC1rea Livre de Praga para o Cancro C\xEDtrico (*Xanthomonas citri subsp. citri*) oficialmente
reconhecida"; e
II - para material de propaga\xE7\xE3o: "O material de propaga\xE7\xE3o \xE9 origin\xE1rio de \xC1rea Livre de Praga para o Cancro C\xEDtrico (Xanthomonas
citri subsp. citri) oficialmente reconhecida".

Art. 27 - O tr\xE2nsito de frutos e de material de propaga\xE7\xE3o proveniente de ALP dever\xE1 ser acompanhado de PTV, embasada em CFO
ou CFOC, com a transcri\xE7\xE3o das DAs especificadas no art. 26.
CAP\xCDTULO IV
CRIT\xC9RIOS E PROCEDIMENTOS PARA CARACTERIZA\xC7\xC3O, IMPLANTA\xC7\xC3O, MANUTEN\xC7\xC3O E RECONHECIMENTO DO
STATUS FITOSSANIT\xC1RIO DE \xC1REA SOB SISTEMA DE MITIGA\xC7\xC3O DE RISCO (SMR) PARA O CANCRO C\xCDTRICO
Se\xE7\xE3o I Da Caracteriza\xE7\xE3o para Implanta\xE7\xE3o do SMR para o Cancro C\xEDtrico e dos Seus Objetivos

Art. 28 - Denomina-se Sistema de Mitiga\xE7\xE3o de Risco (SMR) para o Cancro C\xEDtrico a integra\xE7\xE3o de diferentes medidas de manejo de
risco, pelo menos duas das quais atuam independentemente, e que, cumulativamente, atingem o n\xEDvel apropriado de prote\xE7\xE3o contra a praga.

Art. 29 - O estabelecimento do SMR para o Cancro C\xEDtrico tem como objetivo:
I - reduzir o potencial de in\xF3culo visando \xE0 prote\xE7\xE3o de \xE1reas ainda sem a ocorr\xEAncia da praga Cancro C\xEDtrico;
II - permitir o tr\xE2nsito, para outras UFs, de frutos c\xEDtricos oriundos de \xE1reas de ocorr\xEAncia da praga Cancro C\xEDtrico; e
III - permitir a exporta\xE7\xE3o de frutos c\xEDtricos oriundos de \xE1reas de ocorr\xEAncia da praga Cancro C\xEDtrico para pa\xEDses que reconhe\xE7am o
SMR como medida fitossanit\xE1ria.

Art. 30 - O SMR para o Cancro C\xEDtrico de que trata esta Instru\xE7\xE3o Normativa consiste na aplica\xE7\xE3o das seguintes medidas:
I - cadastro de im\xF3veis com produ\xE7\xE3o comercial de citros;
II - inscri\xE7\xE3o de Unidade de Produ\xE7\xE3o (UP) e Unidade de Consolida\xE7\xE3o (UC);
III - aplica\xE7\xE3o de medidas de manejo durante o ciclo de cultivo;
IV - habilita\xE7\xE3o da UP, mediante vistoria pr\xE9via, para colheita;
V - emiss\xE3o de CFO, CFOC e PTV;
VI - vistoria e inspe\xE7\xE3o de frutos nas UPs e UCs; e
VII - tratamento higienizante de frutos, p\xF3s-colheita.
Se\xE7\xE3o II Da Implanta\xE7\xE3o e Manuten\xE7\xE3o do Status Fitossanit\xE1rio de \xC1rea sob SMR para o Cancro C\xEDtrico

Art. 31 - O reconhecimento, pelo MAPA do status fitossanit\xE1rio de \xC1rea sob SMR para o Cancro C\xEDtrico, fica condicionado \xE0
realiza\xE7\xE3o de levantamento fitossanit\xE1rio pelo OEDSV na pretendida \xE1rea, obedecidos os procedimentos previstos nos par\xE1grafos 1\xBA, 2\xBA, 3\xBA, 4\xBA e 5\xBA do art. 5\xBA desta Instru\xE7\xE3o Normativa.

Art. 32 - Para implanta\xE7\xE3o do status de \xC1rea sob SMR para o Cancro C\xEDtrico, o OEDSV dever\xE1 cadastrar os im\xF3veis que produzam e
comercializem frutos c\xEDtricos localizados na \xE1rea pretendida.
\xA7 1\xBA - O im\xF3vel identificado como sem ocorr\xEAncia de Cancro C\xEDtrico, poder\xE1 ter discriminada essa situa\xE7\xE3o em seu cadastro.
\xA7 2\xBA - A discrimina\xE7\xE3o referida no par\xE1grafo anterior poder\xE1 ser solicitada pelo RT, desde que apresente relat\xF3rio de vistoria realizada para identificar plantas suspeitas de contamina\xE7\xE3o, conforme procedimento descrito no par\xE1grafo 2\xBA do art. 5\xBA desta Instru\xE7\xE3o Normativa, com resultado negativo para a presen\xE7a de Cancro C\xEDtrico.
\xA7 3\xBA - A vistoria referida no par\xE1grafo anterior ser\xE1 realizada, no m\xEDnimo, uma vez por trimestre, devendo o RT encaminhar ao OEDSV relat\xF3rio semestral, com os resultados de cada UP, desde que n\xE3o tenham sido encontradas plantas com sintomas de Cancro C\xEDtrico.
\xA7 4\xBA - O relat\xF3rio do primeiro semestre dever\xE1 ser entregue at\xE9 quinze de julho e o do segundo semestre at\xE9 quinze de janeiro.
\xA7 5\xBA - Caber\xE1 ao OEDSV padronizar o formato e o controle do recebimento do relat\xF3rio das vistorias.
\xA7 6\xBA - A solicita\xE7\xE3o de que trata o par\xE1grafo 2\xBA deste artigo dever\xE1 ser homologada pelo OEDSV, que poder\xE1 estabelecer crit\xE9rios para atendimento da demanda.
\xA7 7\xBA - Os im\xF3veis mencionados no par\xE1grafo 1\xBA deste artigo dever\xE3o adotar as medidas previstas nos incisos I, III, IV, V e VI do art.
41, ficando desobrigadas daquelas estabelecidas nos arts. 42 e 43 desta Instru\xE7\xE3o Normativa.
\xA7 8\xBA - Diagnosticada a presen\xE7a de Cancro C\xEDtrico, o im\xF3vel fica sujeito a cumprir tamb\xE9m as medidas estabelecidas nos arts. 42 e 43 desta Instru\xE7\xE3o Normativa.

Art. 33 - Para ades\xE3o ao SMR para o Cancro C\xEDtrico, o produtor dever\xE1 solicitar ao OEDSV o cadastramento de seu im\xF3vel com
produ\xE7\xE3o comercial de citros e a inscri\xE7\xE3o de todas as UPs.
\xA7 1\xBA - Para o cadastramento do im\xF3vel e inscri\xE7\xE3o da UP, referidos no *caput* deste artigo, o produtor apresentar\xE1 solicita\xE7\xE3o formal ao OEDSV, conforme disposto na legisla\xE7\xE3o de Certifica\xE7\xE3o Fitossanit\xE1ria de Origem, no m\xEDnimo cento e vinte dias antes da colheita, fornecendo as seguintes informa\xE7\xF5es:
a) nome(s) do(s) produtor(es);
b) denomina\xE7\xE3o do im\xF3vel, \xE1rea total, endere\xE7o e localiza\xE7\xE3o geogr\xE1fica com base no datum oficial brasileiro (SIRGAS2000);
c) identifica\xE7\xE3o das cultivares e idade dos plantios de citros em produ\xE7\xE3o e forma\xE7\xE3o;
d) estimativa da produ\xE7\xE3o anual, em toneladas; e e) nome do Respons\xE1vel T\xE9cnico.
\xA7 2\xBA - Caso o im\xF3vel j\xE1 esteja cadastrado ou as UPs j\xE1 estejam inscritas no OEDSV, poder\xE3o ser aproveitados os dados para compor o cadastro do SMR para o Cancro C\xEDtrico.
\xA7 3\xBA - \xC9 condi\xE7\xE3o para manuten\xE7\xE3o da UP no SMR para o Cancro C\xEDtrico a renova\xE7\xE3o anual da inscri\xE7\xE3o, respeitando-se o prazo de, no m\xEDnimo, sessenta dias antes do in\xEDcio da colheita.

Art. 34 - Para inscri\xE7\xE3o da UC destinada ao processamento de frutos c\xEDtricos provenientes de UP sob SMR para o Cancro C\xEDtrico,
dever\xE1 ser observado o que determina a legisla\xE7\xE3o de CFO/CFOC e dever\xE1 ter equipamentos e instala\xE7\xF5es:
I - apropriados para a higieniza\xE7\xE3o de frutos, embalagens e ve\xEDculos;
II - para desvitaliza\xE7\xE3o do Cancro C\xEDtrico; e
III - para destrui\xE7\xE3o de frutos imprest\xE1veis e dos demais restos vegetais.
Par\xE1grafo \xFAnico - Caso a UC j\xE1 esteja inscrita no OEDSV, poder\xE3o ser aproveitados os dados para compor o cadastro das UC inscritas no SMR.

Art. 35 - Para inscri\xE7\xE3o da UC destinada ao recebimento de fruto processado e embalado, e que tenha por finalidade o envio de
frutos c\xEDtricos para outras UFs, dever\xE1 ser observado o que determina a legisla\xE7\xE3o de CFO/CFOC, n\xE3o sendo exigido os equipamentos e instala\xE7\xF5es previstas no artigo anterior.
\xA7 1\xBA - A UC descrita no *caput* desse artigo n\xE3o poder\xE1 realizar opera\xE7\xE3o de classifica\xE7\xE3o e reembalagem, ficando suas opera\xE7\xF5es restritas ao fracionamento e reorganiza\xE7\xE3o de cargas.
\xA7 2\xBA - A UC dever\xE1 manter o registro de origem e destino de cada lote de citros comercializado.

Art. 36 - O OEDSV dever\xE1 encaminhar rela\xE7\xE3o atualizada das UCs habilitadas para o processamento ou distribui\xE7\xE3o de frutos
c\xEDtricos provenientes de SMR \xE0 unidade de sanidade vegetal da SFA/MAPA/UF, at\xE9 a primeira quinzena do m\xEAs de maio de cada ano.

Art. 37 - \xC9 condi\xE7\xE3o para avalia\xE7\xE3o do status fitossanit\xE1rio de \xC1rea sob SMR para o Cancro C\xEDtrico, o encaminhamento pelo OEDSV
de solicita\xE7\xE3o de reconhecimento e do relat\xF3rio do levantamento determinado nos par\xE1grafos 1\xBA, 2\xBA, 3\xBA, 4\xBA e 5\xBA do art. 5\xBA, \xE0 unidade de sanidade vegetal da SFA/MAPA/UF, que elaborar\xE1 parecer t\xE9cnico de avalia\xE7\xE3o quanto ao cumprimento dos requisitos para reconhecimento do status fitossanit\xE1rio e encaminhar\xE1 ao DSV/ SDA/ MAPA.
Par\xE1grafo \xFAnico - A unidade de sanidade vegetal da SFA/MAPA/UF que receber a documenta\xE7\xE3o prevista no *caput* deste artigo, dever\xE1 instruir processo administrativo pr\xF3prio, elaborar parecer t\xE9cnico sobre o cumprimento das disposi\xE7\xF5es desta norma e encaminhar ao DSV/SDA/MAPA.

Art. 38 - O DSV/SDA/MAPA dever\xE1 analisar o processo e emitir parecer t\xE9cnico de avalia\xE7\xE3o quanto ao cumprimento dos requisitos
para reconhecimento do status fitossanit\xE1rio de \xC1rea Sob SMR de Cancro C\xEDtrico.

Art. 39 - A SDA/MAPA, mediante parecer t\xE9cnico conclusivo favor\xE1vel do DSV/SDA/MAPA, publicar\xE1 ato de reconhecimento oficial
do status fitossanit\xE1rio de \xC1rea Sob SMR de Cancro C\xEDtrico.

Art. 40 - A manuten\xE7\xE3o do reconhecimento oficial do status fitossanit\xE1rio de SMR para o Cancro C\xEDtrico fica condicionada ao
cumprimento do disposto nesta Instru\xE7\xE3o Normativa, comprovada por meio de auditoria realizada pela unidade de sanidade vegetal da SFA/ MAPA/ UF.
Par\xE1grafo \xFAnico - A auditoria de que trata o *caput* deste artigo poder\xE1 ser realizada, a crit\xE9rio do DSV/SDA/MAPA, por AFFA de outras unidades de sanidade vegetal das SFA/MAPA/UF.
Se\xE7\xE3o III Das Medidas a Serem Adotadas

Art. 41 - Para reduzir o potencial de in\xF3culo da praga e, consequentemente, o n\xFAmero de frutos contaminados na \xE1rea, devem ser
adotadas durante o cultivo as seguintes medidas de manejo para as plantas c\xEDtricas nos im\xF3veis sob SMR:
I - uso, preferencialmente, de cultivares menos suscet\xEDveis ao Cancro C\xEDtrico, recomendadas pela pesquisa, para novos plantios;
II - retirada de frutos infestados, os quais ser\xE3o destru\xEDdos ou enviados para unidades de processamento de suco;
III - tratamentos fitossanit\xE1rios preventivos;
IV - manejo integrado do minador dos citros (Phyllocnistis citrella);
V - descontamina\xE7\xE3o de ferramentas e m\xE1quinas; e
VI - uso de quebra ventos, com esp\xE9cies recomendadas pela pesquisa, quando necess\xE1rio.
\xA7 1\xBA - O OEDSV poder\xE1 determinar a ado\xE7\xE3o de medidas complementares de manejo, desde que tecnicamente fundamentadas.
\xA7 2\xBA - As medidas de manejo adotadas durante o cultivo em UP, em im\xF3veis sob SMR, ser\xE3o informadas pelo RT no livro de acompanhamento de campo.
\xA7 3\xBA - Os frutos descritos no inciso II poder\xE3o ser encaminhados para ind\xFAstria localizada em UF lim\xEDtrofe, exceto se estiver localizada em ALP ou \xC1rea Sem Ocorr\xEAncia de Cancro C\xEDtrico, desde que sejam transportados em ve\xEDculo fechado ou coberto, lacrado, acompanhados de PTV, na qual dever\xE1 constar o n\xFAmero do lacre e a DA: "Frutos contaminados com Cancro C\xEDtrico (*Xanthomonas citri subsp. citri*) destinados exclusivamente \xE0 ind\xFAstria".
\xA7 4\xBA - Cabe ao OEDSV regulamentar o tr\xE2nsito interno de frutos provenientes de suas \xE1reas sob o SMR para o Cancro C\xEDtrico e destinados \xE0 ind\xFAstria localizada dentro do seu territ\xF3rio.
Se\xE7\xE3o IV Da Habilita\xE7\xE3o para Colheita

Art. 42 - Para habilita\xE7\xE3o da UP ou de seus talh\xF5es espec\xEDficos para colheita, dever\xE1 ser realizada vistoria pr\xE9via com objetivo de
verificar a incid\xEAncia do Cancro C\xEDtrico nos frutos.
\xA7 1\xBA - A vistoria pr\xE9via de que trata o *caput* deste artigo ser\xE1 supervisionada pelo RT, e ser\xE1 realizada, no m\xE1ximo, trinta dias antes da colheita.
\xA7 2\xBA - Caso a colheita se estenda por v\xE1rios meses, a vistoria dever\xE1 ser repetida a cada noventa dias.

Art. 43 - Dever\xE3o ser vistoriados dez mil frutos por UP, observando vinte frutos por planta, com caminhamento aleat\xF3rio dentro da UP
e inspecionando todos os lados da planta.
\xA7 1\xBA - Em UP com at\xE9 quinhentas plantas, todas as plantas dever\xE3o ser vistoriadas, observando-se, no m\xEDnimo, vinte frutos por planta.

\xA7 2\xBA - O RT far\xE1 as anota\xE7\xF5es no livro de acompanhamento de campo, sob supervis\xE3o do OEDSV.
\xA7 3\xBA - O RT dever\xE1 apresentar ao OEDSV o relat\xF3rio de vistoria das UPs em at\xE9 dez dias ap\xF3s o t\xE9rmino da vistoria.
\xA7 4\xBA - Caber\xE1 ao OEDSV padronizar o formato e o controle do recebimento do relat\xF3rio a ser apresentado pelo RT.

Art. 44 - Ap\xF3s o recebimento do relat\xF3rio de vistoria, o OEDSV emitir\xE1, em at\xE9 sete dias, o Termo de Habilita\xE7\xE3o de Colheita para
cada UP ou para seus talh\xF5es espec\xEDficos, que apresentem, no m\xE1ximo, um por cento de frutos com sintomas de Cancro C\xEDtrico.
Par\xE1grafo \xFAnico - Os frutos de UP ou de seus talh\xF5es espec\xEDficos que tiverem sua habilita\xE7\xE3o de colheita indeferida, somente poder\xE3o:
I - transitar dentro da UF de acordo com o que for estabelecido pelo OEDSV; ou
II - ser enviados para ind\xFAstria de suco localizada em UF lim\xEDtrofe, exceto em \xC1rea Livre ou \xC1rea Sem Ocorr\xEAncia, desde que o
transporte seja realizado de acordo com o estabelecido no par\xE1grafo 3\xBA do art. 41 desta Instru\xE7\xE3o Normativa.

Art. 45 - O OEDSV encaminhar\xE1 rela\xE7\xE3o atualizada das UPs ou de seus talh\xF5es espec\xEDficos dentro de cada UP, habilitadas para
colheita, \xE0 unidade de sanidade vegetal da SFA/MAPA/UF, semestralmente ou sempre que solicitado pelo DSV/SDA/MAPA.
Se\xE7\xE3o V Do Processamento dos Frutos

Art. 46 - Os frutos c\xEDtricos produzidos em UP ou em seus talh\xF5es espec\xEDficos, com habilita\xE7\xE3o de colheita deferida, dever\xE3o
ingressar na UC localizada dentro da mesma \xE1rea homologada para o SMR onde est\xE1 a UP, acompanhados de CFO com a seguinte
DA:
"Os frutos foram produzidos em UP, de im\xF3vel cadastrado no SMR para o Cancro C\xEDtrico, que apresentou at\xE9 um por cento de frutos com sintomas de Cancro C\xEDtrico (*Xanthomonas citri subsp. citri*)".
\xA7 1\xBA - Os frutos na UC dever\xE3o ser separados e armazenados de acordo com o respectivo CFO.
\xA7 2\xBA - Caso o processamento seja em UC ou ind\xFAstria localizada em UF lim\xEDtrofe, a partida dever\xE1 ser transportada em ve\xEDculo fechado ou coberto, lacrado e acompanhada de PTV contendo o n\xFAmero do lacre e a DA constante no CFO, conforme descrito no *caput* deste artigo, acrescida de:
I - "e se destinam a ind\xFAstria.", quando for esse o destino; ou
II - "e se destinam ao beneficiamento em Unidade de Consolida\xE7\xE3o.".
\xA7 3\xBA - Cabe ao OEDSV regulamentar o tr\xE2nsito interno de frutos provenientes de suas \xE1reas sob o SMR para o Cancro C\xEDtrico (*Xanthomonas citri subsp. citri*) e destinados \xE0 ind\xFAstria localizada dentro do seu territ\xF3rio.

Art. 47 - Os frutos provenientes de im\xF3veis sem ocorr\xEAncia do Cancro C\xEDtrico poder\xE3o ingressar em UC ou ind\xFAstria localizada em
outras UFs, transportados em ve\xEDculo fechado ou coberto e acompanhados de PTV embasada em CFO ou CFOC, com a seguinte DA: "Os frutos s\xE3o provenientes de im\xF3vel sem ocorr\xEAncia do Cancro C\xEDtrico (*Xanthomonas citri subsp. citri*), localizado em \xC1rea sob SMR", acrescida de "e se destinam a ind\xFAstria"; ou "e se destinam ao beneficiamento em Unidade de Consolida\xE7\xE3o", conforme o destino.
I - ocorrendo intercepta\xE7\xE3o, no destino, de frutos com sintomas, esses ser\xE3o enviados, pelo OEDSV, para an\xE1lise de diagn\xF3stico de
Cancro C\xEDtrico e o fato comunicado ao OEDSV de origem;
II - at\xE9 a obten\xE7\xE3o do laudo laboratorial com resultado da an\xE1lise para Cancro C\xEDtrico, n\xE3o poder\xE1 ser emitida PTV para partidas
provenientes da UP de origem;
III - o OEDSV comunicar\xE1 o resultado da an\xE1lise laboratorial ao OEDSV de origem que, em caso positivo, far\xE1 a mudan\xE7a no
cadastro do im\xF3vel, o qual passar\xE1 a executar, tamb\xE9m, as medidas estabelecidas nos arts. 42 e 43 desta Instru\xE7\xE3o Normativa.

Art. 48 - Na chegada da partida de frutos \xE0 UC e durante o processamento, dever\xE3o ocorrer vistorias, para detec\xE7\xE3o de frutos com
sintomas de Cancro C\xEDtrico, sob supervis\xE3o do RT.
\xA7 1\xBA - A partida que tiver, na chegada \xE0 UC ou no processamento, frutos com a presen\xE7a de sintomas de Cancro C\xEDtrico, para que possa ser inclu\xEDda no CFOC, dever\xE1 ser reprocessada para retirada de frutos sintom\xE1ticos, os quais dever\xE3o ser destru\xEDdos ou encaminhados a ind\xFAstria de suco, localizada dentro da \xE1rea de SMR, desde que transportado em ve\xEDculo fechado ou coberto.
\xA7 2\xBA - Os frutos contaminados e restos de material vegetal provenientes da limpeza da UC e dos ve\xEDculos transportadores dever\xE3o ser diariamente segregados e destru\xEDdos, no m\xEDnimo, semanalmente, devendo o RT registrar no livro de acompanhamento da UC, o peso dos frutos contaminados destru\xEDdos, a data e a forma da destrui\xE7\xE3o.
\xA7 3\xBA - Caso os frutos contaminados sejam destinados \xE0 ind\xFAstria e n\xE3o sejam transportados no mesmo dia, esses dever\xE3o ser armazenados de forma segura, fora da \xE1rea de processamento, para que n\xE3o venham a ser fonte de contamina\xE7\xE3o.

Art. 49 - Durante o processamento, os frutos dever\xE3o ser submetidos \xE0 higieniza\xE7\xE3o, conforme as seguintes op\xE7\xF5es:

I - imers\xE3o em solu\xE7\xE3o com Hipoclorito de S\xF3dio a duzentos ppm, pH sete, durante dois minutos; ou
II - outros m\xE9todos ou produtos para higieniza\xE7\xE3o, homologados pela pesquisa e reconhecidos pelo DSV/ SDA/ MAPA.
Se\xE7\xE3o VI Do Tr\xE2nsito de Material Vegetal

Art. 50 - Na emiss\xE3o do CFOC, dever\xE1 ser adotada a seguinte DA: "Os frutos s\xE3o origin\xE1rios de Unidade de Produ\xE7\xE3o onde foi
implantado o Sistema de Mitiga\xE7\xE3o de Risco (SMR) reconhecido oficialmente, foram higienizados por imers\xE3o em solu\xE7\xE3o com Hipoclorito de S\xF3dio a duzentos ppm, pH sete, durante dois minutos e se encontram sem sintomas de Cancro C\xEDtrico (*Xanthomonas citri subsp. citri*)".

Art. 51 - O tr\xE2nsito de frutos c\xEDtricos dever\xE1 ser realizado em ve\xEDculo fechado ou coberto, seja para transporte a granel, em
embalagens descart\xE1veis ou em caixas pl\xE1sticas retorn\xE1veis.
\xA7 1\xBA - Na op\xE7\xE3o pela caixa pl\xE1stica retorn\xE1vel, as caixas dever\xE3o ser higienizadas por pulveriza\xE7\xE3o ou imers\xE3o em solu\xE7\xE3o de cloreto de benzalc\xF4nio (am\xF4nio quatern\xE1rio), cento e vinte e cinco gramas por litro, na concentra\xE7\xE3o de um d\xE9cimo percentual.
\xA7 2\xBA - O RT encarregado da certifica\xE7\xE3o na origem dever\xE1 acrescentar no CFO e CFOC, al\xE9m do disposto no art. 50 a seguinte DA:
I - se higienizadas por pulveriza\xE7\xE3o: "As caixas pl\xE1sticas retorn\xE1veis foram higienizadas por pulveriza\xE7\xE3o em solu\xE7\xE3o de cloreto de
benzalc\xF4nio (am\xF4nio quatern\xE1rio) 125 (cento e vinte e cinco) gramas/litro, na concentra\xE7\xE3o de 0,1% (um d\xE9cimo percentual)";
II - se higienizadas por imers\xE3o: "As caixas pl\xE1sticas retorn\xE1veis foram higienizadas por imers\xE3o em solu\xE7\xE3o de cloreto de
benzalc\xF4nio (am\xF4nio quatern\xE1rio) 125 (cento e vinte e cinco) gramas/litro, na concentra\xE7\xE3o de 0,1% (um d\xE9cimo percentual)".
\xA7 3\xBA - Poder\xE1 ser utilizado outro produto de efic\xE1cia comprovada para higieniza\xE7\xE3o das caixas pl\xE1sticas retorn\xE1veis, desde que reconhecido pelo DSV/SDA/MAPA.

Art. 52 - Os materiais de propaga\xE7\xE3o de c\xEDtricos somente poder\xE3o transitar para outras UFs ou para ALP quando produzido:
I - em ambiente protegido, desde que distante, no m\xEDnimo, trinta metros de qualquer planta c\xEDtrica, observada a legisla\xE7\xE3o espec\xEDfica
da UF para esse sistema de cultivo;
II - a c\xE9u aberto, desde que distante, no m\xEDnimo, trinta metros de qualquer planta c\xEDtrica e mil e duzentos metros de foco de Cancro
C\xEDtrico.
\xA7 1\xBA - Verificada a ocorr\xEAncia de Cancro C\xEDtrico em material de propaga\xE7\xE3o sob ambiente protegido, ser\xE3o aplicadas as medidas previstas no art. 82 desta Instru\xE7\xE3o Normativa.
\xA7 2\xBA - Verificada a ocorr\xEAncia de Cancro C\xEDtrico em material de propaga\xE7\xE3o \xE0 c\xE9u aberto, todo material ser\xE1 destru\xEDdo, ficando a \xE1rea interditada por um per\xEDodo de cento e oitenta dias para produ\xE7\xE3o desse material.
\xA7 3\xBA - Verificada a ocorr\xEAncia de foco de Cancro C\xEDtrico na \xE1rea de isolamento prevista no inciso II, o material de propaga\xE7\xE3o n\xE3o poder\xE1 ser comercializado para outras UF ou ALP.
\xA7 4\xBA - O material que atender as exig\xEAncias acima mencionadas, poder\xE1 transitar para outras UF ou para ALP acompanhado de PTV, embasada em CFO, com a seguinte DA: "O material de propaga\xE7\xE3o \xE9 proveniente de \xC1rea sob SMR, se encontra livre de Cancro C\xEDtrico (*Xanthomonas citri subsp. citri*) e foi produzido conforme preconiza a legisla\xE7\xE3o espec\xEDfica em vigor".
Se\xE7\xE3o VII Outras Medidas

Art. 53 - A UP e a UC ter\xE3o suas inscri\xE7\xF5es canceladas quando n\xE3o forem atendidas as exig\xEAncias previstas nesta Instru\xE7\xE3o
Normativa.

Art. 54 - Em \xC1reas sob SMR para Cancro C\xEDtrico, no im\xF3vel com produ\xE7\xE3o comercial de plantas c\xEDtricas que o produtor n\xE3o aderiu ao
SMR e nos im\xF3veis com plantas c\xEDtricas sem finalidade comercial, dever\xE3o ser executadas as seguintes medidas:
I - pulveriza\xE7\xE3o de todas as plantas c\xEDtricas, no raio de trinta metros a partir da planta diagnosticada contaminada com Cancro
C\xEDtrico, com calda c\xFAprica na concentra\xE7\xE3o de um d\xE9cimo percentual de cobre met\xE1lico;
II - descontamina\xE7\xE3o de m\xE1quinas e ferramentas com solu\xE7\xE3o de Hipoclorito de S\xF3dio a duzentos ppm, pH sete durante dois
minutos ou solu\xE7\xE3o de cloreto de benzalc\xF4nio (am\xF4nio quatern\xE1rio), cento e vinte e cinco gramas por litro, na concentra\xE7\xE3o de um d\xE9cimo percentual; e
III - ado\xE7\xE3o, preferencialmente, de cultivares menos suscet\xEDveis ao Cancro C\xEDtrico, recomendadas pelos \xF3rg\xE3os de pesquisas, para
implanta\xE7\xE3o de novos plantios.
\xA7 1\xBA - Caso o OEDSV verifique, a qualquer tempo, o n\xE3o cumprimento do que determina este artigo, dever\xE1 notificar imediatamente o produtor a executar as medidas ali especificadas, dentro do prazo determinado.
\xA7 2\xBA - Encerrado o prazo a que se refere o par\xE1grafo 1\xBA deste artigo, e persistindo as inconformidades, o OEDSV executar\xE1 as medidas fitossanit\xE1rias necess\xE1rias, \xE0s custas do produtor, o que poder\xE1 incluir a elimina\xE7\xE3o de plantas diagnosticadas com Cancro C\xEDtrico.

Art. 55 - O DSV/SDA/MAPA, em conjunto com a unidade de sanidade vegetal das SFA/MAPA/UF, poder\xE1 a qualquer tempo, realizar
auditoria no SMR para o Cancro C\xEDtrico.
Par\xE1grafo \xFAnico - A auditoria de que trata o *caput* deste artigo poder\xE1 ser realizada, a crit\xE9rio do DSV/SDA/MAPA, por AFFA de outras unidades de sanidade vegetal das SFA/ MAPA/ UF.

Art. 56 - O descumprimento das disposi\xE7\xF5es previstas nesta Instru\xE7\xE3o Normativa implicar\xE1 na mudan\xE7a do status fitossanit\xE1rio de
\xC1rea sob SMR para o Cancro C\xEDtrico para o de status fitossanit\xE1rio desconhecido.
CAP\xCDTULO V
PROCEDIMENTOS PARA CARACTERIZA\xC7\xC3O, IMPLANTA\xC7\xC3O E MANUTEN\xC7\xC3O DO STATUS FITOSSANIT\xC1RIO DE \xC1REA SOB
ERRADICA\xC7\xC3O DO CANCRO C\xCDTRICO
Se\xE7\xE3o I Do Procedimento para Reconhecimento Oficial do Status Fitossanit\xE1rio como \xC1rea Sob Erradica\xE7\xE3o do Cancro C\xEDtrico

Art. 57 - Denomina-se como status fitossanit\xE1rio de \xC1rea sob Erradica\xE7\xE3o do Cancro C\xEDtrico, uma \xE1rea onde a praga ocorre, por\xE9m
n\xE3o se encontra amplamente distribu\xEDda, e na qual s\xE3o empregadas medidas oficiais de preven\xE7\xE3o, de vigil\xE2ncia e de controle por meio da elimina\xE7\xE3o sistem\xE1tica de plantas c\xEDtricas contaminadas e daquelas suspeitas de contamina\xE7\xE3o com Cancro C\xEDtrico, com o objetivo de erradicar a praga.

Art. 58 - O reconhecimento, pelo MAPA, do status fitossanit\xE1rio de \xC1rea Sob Erradica\xE7\xE3o do Cancro C\xEDtrico, fica condicionado \xE0
realiza\xE7\xE3o de levantamento fitossanit\xE1rio na \xE1rea de interesse pelo OEDSV e dos cadastramentos previstos no art. 6\xBA desta Instru\xE7\xE3o Normativa.
\xA7 1\xBA - O levantamento fitossanit\xE1rio ser\xE1 realizado em, no m\xEDnimo, cinco por cento das Unidades de Produ\xE7\xE3o (UP) com produ\xE7\xE3o comercial de citros, de maneira a se obter uma cobertura geogr\xE1fica representativa.
\xA7 2\xBA - Para cada im\xF3vel com produ\xE7\xE3o comercial de citros que cont\xE9m a UP inspecionada, dentro do raio m\xEDnimo de duzentos metros, ser\xE3o inspecionadas todas as plantas c\xEDtricas existentes em im\xF3veis rurais de produ\xE7\xE3o n\xE3o comercial de citros, im\xF3veis urbanos e \xE1reas p\xFAblicas.
\xA7 3\xBA - O levantamento fitossanit\xE1rio ser\xE1 realizado de acordo com os procedimentos previstos nos par\xE1grafos 2\xBA, 4\xBA e 5\xBA, do art. 5\xBA desta Instru\xE7\xE3o Normativa.
\xA7 4\xBA - Tamb\xE9m dever\xE3o ser fornecidas as seguintes informa\xE7\xF5es:
I - \xE1rea e distribui\xE7\xE3o dos locais de produ\xE7\xE3o de material propagativo;
II - mapeamento das \xE1reas de ocorr\xEAncia de Cancro C\xEDtrico; e
III - Dist\xE2ncia de isolamento entre os locais de produ\xE7\xE3o de material de propaga\xE7\xE3o e as \xE1reas de ocorr\xEAncia de Cancro C\xEDtrico, com
informa\xE7\xF5es do embasamento t\xE9cnico desse isolamento.

Art. 59 - \xC9 condi\xE7\xE3o, para avalia\xE7\xE3o do status fitossanit\xE1rio de \xC1rea Sob Erradica\xE7\xE3o para o Cancro C\xEDtrico, o encaminhamento pelo
OEDSV \xE0 unidade de sanidade vegetal da SFA/MAPA/UF dos documentos e dados previstos nos incisos I e IV, do art. 7\xBA, desta Instru\xE7\xE3o Normativa.
Par\xE1grafo \xFAnico - Al\xE9m dos documentos previstos no *caput* , a solicita\xE7\xE3o deve estar acompanhada do documento descritivo de delimita\xE7\xE3o da \xC1rea Sob Erradica\xE7\xE3o para o Cancro C\xEDtrico, considerando limites territoriais, acidentes geogr\xE1ficos, rodovias, ferrovias e hidrovias.

Art. 60 - A unidade de sanidade vegetal da SFA/MAPA/UF que receber a documenta\xE7\xE3o prevista no art. 59 desta Instru\xE7\xE3o
Normativa, dever\xE1 instruir processo administrativo pr\xF3prio, elaborar parecer t\xE9cnico sobre o cumprimento das disposi\xE7\xF5es desta norma e encaminhar o processo ao DSV/SDA/MAPA.
Par\xE1grafo \xFAnico - No parecer t\xE9cnico dever\xE1 constar, al\xE9m de outras, informa\xE7\xF5es sobre os documentos mencionados no par\xE1grafo \xFAnico do art. 7\xBA desta Instru\xE7\xE3o Normativa.

Art. 61 - O DSV/SDA/MAPA dever\xE1 analisar o processo e emitir parecer t\xE9cnico de avalia\xE7\xE3o sobre o cumprimento dos requisitos
para reconhecimento oficial do status fitossanit\xE1rio de \xC1rea sob Erradica\xE7\xE3o do Cancro C\xEDtrico.

Art. 62 - A SDA/MAPA, mediante parecer t\xE9cnico favor\xE1vel do DSV/SDA/MAPA, publicar\xE1 ato de reconhecimento oficial do status
fitossanit\xE1rio de \xC1rea sob Erradica\xE7\xE3o do Cancro C\xEDtrico.
Se\xE7\xE3o II Da Manuten\xE7\xE3o do Status Fitossanit\xE1rio de \xC1rea sob Erradica\xE7\xE3o do Cancro C\xEDtrico

Art. 63 - A manuten\xE7\xE3o do reconhecimento oficial do status fitossanit\xE1rio de \xC1rea sob Erradica\xE7\xE3o para o Cancro C\xEDtrico fica
condicionada \xE0 realiza\xE7\xE3o, pelo OEDSV, de no m\xEDnimo um levantamento fitossanit\xE1rio por ano, conforme procedimento descrito no art. 58 desta Instru\xE7\xE3o Normativa.

\xA7 1\xBA - Com base nos levantamentos fitossanit\xE1rios ser\xE1 elaborado relat\xF3rio t\xE9cnico, contendo as seguintes informa\xE7\xF5es:
I - per\xEDodo de refer\xEAncia do relat\xF3rio;
II - listagem de im\xF3veis inspecionados com produ\xE7\xE3o comercial de citros e respectivas UPs;
III - n\xFAmero de plantas c\xEDtricas inspecionadas;
IV - n\xFAmero de plantas c\xEDtricas infectadas;
V - n\xFAmero de plantas c\xEDtricas eliminadas; e
VI - quantidade de CFO e PTV emitidos no per\xEDodo de refer\xEAncia do relat\xF3rio.
\xA7 2\xBA - O relat\xF3rio dever\xE1 ser encaminhado pelo OEDSV \xE0 unidade de sanidade vegetal da SFA/MAPA/UF correspondente, que instruir\xE1 processo administrativo pr\xF3prio, emitir\xE1 parecer t\xE9cnico e enviar\xE1 o processo ao DSV/SDA/MAPA.
\xA7 3\xBA - O processo ser\xE1 analisado pelo DSV/SDA/MAPA que emitir\xE1 parecer t\xE9cnico de avalia\xE7\xE3o sobre o cumprimento dos requisitos para manuten\xE7\xE3o do status fitossanit\xE1rio de \xC1rea sob Erradica\xE7\xE3o do Cancro C\xEDtrico, de acordo com os crit\xE9rios t\xE9cnicos dispostos nesta Instru\xE7\xE3o Normativa.
\xA7 4\xBA - A SDA/MAPA, mediante parecer t\xE9cnico favor\xE1vel do DSV/SDA/MAPA, comunicar\xE1 oficialmente ao OEDSV a manuten\xE7\xE3o do status fitossanit\xE1rio de \xC1rea sob Erradica\xE7\xE3o do Cancro C\xEDtrico.

Art. 64 - O descumprimento das disposi\xE7\xF5es previstas nesta Se\xE7\xE3o implicar\xE1 na mudan\xE7a do status fitossanit\xE1rio de \xC1rea sob
Erradica\xE7\xE3o do Cancro C\xEDtrico, para o de status fitossanit\xE1rio desconhecido, n\xE3o podendo, nesse caso, ser emitida a PTV para plantas c\xEDtricas e suas partes.

Art. 65 - Al\xE9m das supervis\xF5es realizadas pela unidade de sanidade vegetal da SFA/MAPA/UF, conforme previsto no par\xE1grafo 3\xBA do
art. 3\xBA, essa unidade dever\xE1 realizar, no m\xEDnimo, uma auditoria por ano na \xC1rea sob Erradica\xE7\xE3o do Cancro C\xEDtrico.
Par\xE1grafo \xFAnico - A auditoria de que trata o *caput* deste artigo poder\xE1 ser realizada, a crit\xE9rio do DSV/SDA/MAPA, por AFFA de outras unidades de unidade de sanidade vegetal das SFA/ MAPA/ UF.
Se\xE7\xE3o III Do Tr\xE2nsito de Material Vegetal Proveniente de \xC1rea sob Erradica\xE7\xE3o de Cancro C\xEDtrico

Art. 66 - Os frutos das plantas c\xEDtricas que n\xE3o apresentaram contamina\xE7\xE3o por Cancro C\xEDtrico, provenientes de im\xF3vel interditado,
conforme disposto no art. 72, somente poder\xE3o transitar para outras UF ou para ALP ap\xF3s realizada a erradica\xE7\xE3o do foco, conforme prescrito no art. 79, e procedendo-se \xE0 higieniza\xE7\xE3o dos frutos em UC inscrita, conforme as seguintes op\xE7\xF5es:
I - imers\xE3o em Hipoclorito de S\xF3dio a duzentos ppm, pH sete, durante dois minutos; ou
II - outros produtos ou m\xE9todos de higieniza\xE7\xE3o reconhecidos pelo DSV/SDA/MAPA.
\xA7 1\xBA - O CFO dever\xE1 conter a seguinte Declara\xE7\xE3o Adicional (DA): "Os frutos s\xE3o provenientes de plantas sadias de im\xF3vel sob supervis\xE3o oficial, localizado em \xC1rea sob Erradica\xE7\xE3o, e encontram-se livres de Cancro C\xEDtrico (*Xanthomonas citri subsp. citri*)".
\xA7 2\xBA - A PTV ser\xE1 embasada em CFO ou CFOC com a seguinte DA: "Os frutos s\xE3o provenientes de plantas sadias de im\xF3vel sob supervis\xE3o oficial, localizado em \xC1rea sob Erradica\xE7\xE3o, foram higienizados com Hipoclorito de S\xF3dio a duzentos ppm, pH sete, durante dois minutos e encontram-se livres de *Xanthomonas citri subsp. citri*".
\xA7 3\xBA - O tr\xE2nsito de frutos c\xEDtricos de im\xF3vel sob supervis\xE3o oficial dever\xE1 ser realizado conforme o descrito no art. 51 desta Instru\xE7\xE3o Normativa.
\xA7 4\xBA - Para frutos destinados \xE0 ind\xFAstria n\xE3o se aplica a higieniza\xE7\xE3o prevista no *caput* desse artigo.
\xA7 5\xBA - A PTV, no caso previsto no par\xE1grafo anterior, ser\xE1 embasada em CFO ou Certificado Fitossanit\xE1rio de Origem Consolidado (CFOC) com a seguinte DA: "Os frutos s\xE3o provenientes de plantas sadias de im\xF3vel sob supervis\xE3o oficial, localizado em \xC1rea sob Erradica\xE7\xE3o, e se destinam \xE0 ind\xFAstria.".

Art. 67 - Os frutos c\xEDtricos provenientes de im\xF3veis sem ocorr\xEAncia do Cancro C\xEDtrico poder\xE3o transitar para outras UFs ou para ALP
acompanhados de PTV, fundamentada em CFO ou CFOC, com a seguinte DA: "Os frutos s\xE3o provenientes de im\xF3vel sem ocorr\xEAncia do Cancro C\xEDtrico (*Xanthomonas citri subsp. citri*), localizado em \xC1rea sob Erradica\xE7\xE3o.".

Art. 68 - Os materiais de propaga\xE7\xE3o de esp\xE9cies c\xEDtricas somente poder\xE3o transitar para outra UF ou para ALP quando produzidos
em im\xF3vel sem ocorr\xEAncia de Cancro C\xEDtrico, e acompanhados de PTV, embasada em CFO, com a seguinte DA: "O material de propaga\xE7\xE3o \xE9 proveniente de \xC1rea sob Erradica\xE7\xE3o e foi produzido em im\xF3vel sem ocorr\xEAncia de Cancro C\xEDtrico (*Xanthomonas citri subsp. citri*), conforme preconiza a legisla\xE7\xE3o espec\xEDfica vigente".
CAP\xCDTULO VI
CRIT\xC9RIOS E PROCEDIMENTOS PARA ERRADICA\xC7\xC3O DO CANCRO C\xCDTRICO
Se\xE7\xE3o I

Da Execu\xE7\xE3o dos Levantamentos

Art. 69 - Nos im\xF3veis com produ\xE7\xE3o comercial de citros, dever\xE1 ser realizada, sob supervis\xE3o do RT, no m\xEDnimo, uma vistoria por
trimestre, para identificar plantas suspeitas de contamina\xE7\xE3o com Cancro C\xEDtrico.
\xA7 1\xBA - O RT dever\xE1 apresentar ao OEDSV relat\xF3rio semestral com os resultados das vistorias nos im\xF3veis, dentro do prazo previsto no par\xE1grafo 4\xBA, do art. 32 desta Instru\xE7\xE3o Normativa.
\xA7 2\xBA - Ocorrendo detec\xE7\xE3o de plantas suspeitas de contamina\xE7\xE3o, o RT dever\xE1 comunicar de imediato ao OEDSV, para coleta e envio de amostras ao laborat\xF3rio de controle oficial ou credenciado pelo MAPA, para an\xE1lises de diagn\xF3stico fitossanit\xE1rio.
\xA7 3\xBA - Caber\xE1 ao OEDSV padronizar o formato e o controle do recebimento do relat\xF3rio a ser apresentado pelo produtor.

Art. 70 - O OEDSV dever\xE1 fiscalizar os im\xF3veis com produ\xE7\xE3o comercial de citros para verificar \xE0 realiza\xE7\xE3o das vistorias estipuladas
no art. 69 desta Instru\xE7\xE3o Normativa, a veracidade das informa\xE7\xF5es dos relat\xF3rios entregues, e, principalmente, a exist\xEAncia de plantas que possam estar contaminadas com Cancro C\xEDtrico.
Par\xE1grafo \xFAnico - Na inspe\xE7\xE3o, qualquer planta com sintomas de Cancro C\xEDtrico ser\xE1 identificada, ter\xE1 amostra coletada e encaminhada para diagn\xF3stico fitossanit\xE1rio em laborat\xF3rio de controle oficial ou credenciado pelo MAPA, adotando-se os crit\xE9rios previstos nesta Instru\xE7\xE3o Normativa.

Art. 71 - Em im\xF3veis com produ\xE7\xE3o n\xE3o comercial de citros, localizados em \xE1reas urbanas ou rurais, p\xFAblicas ou privadas, compete
ao OEDSV a realiza\xE7\xE3o de inspe\xE7\xF5es e, caso haja suspeita de ocorr\xEAncia de Cancro C\xEDtrico, a ado\xE7\xE3o das medidas previstas no par\xE1grafo \xFAnico do art. 70 desta Instru\xE7\xE3o Normativa.
Se\xE7\xE3o II Da Interdi\xE7\xE3o

Art. 72 - No caso da suspeita de Cancro C\xEDtrico, o OEDSV coletar\xE1 amostra a ser enviada a laborat\xF3rio de controle oficial ou
credenciado pelo MAPA, e, como medida cautelar, interditar\xE1 imediatamente o im\xF3vel, mediante lavratura de Auto de Interdi\xE7\xE3o, ficando temporariamente proibida a sa\xEDda de frutos c\xEDtricos e de qualquer material de propaga\xE7\xE3o.
Par\xE1grafo \xFAnico - Para cada im\xF3vel rural ou urbano, com finalidade comercial ou n\xE3o, com suspeita da ocorr\xEAncia do Cancro C\xEDtrico, o OEDSV dever\xE1 instruir processo administrativo pr\xF3prio, contendo os seguintes documentos:
I - Termo de Fiscaliza\xE7\xE3o do Im\xF3vel;
II - Ficha de Coleta de Amostra para diagn\xF3stico fitossanit\xE1rio ou documento equivalente; e
III - Auto de Interdi\xE7\xE3o do Im\xF3vel.

Art. 73 - O im\xF3vel em que o laudo de diagn\xF3stico fitossanit\xE1rio do laborat\xF3rio for positivo para a presen\xE7a de Cancro C\xEDtrico
permanecer\xE1 interditado, devendo o referido laudo ser juntado ao processo a que se refere o par\xE1grafo \xFAnico do art. 72 desta Instru\xE7\xE3o Normativa.
Par\xE1grafo \xFAnico - Caso o laudo de diagn\xF3stico fitossanit\xE1rio for negativo, o im\xF3vel ser\xE1 desinterditado mediante a lavratura de Termo de Desinterdi\xE7\xE3o.

Art. 74 - Confirmada a presen\xE7a de Cancro C\xEDtrico, os im\xF3veis vizinhos com presen\xE7a de plantas c\xEDtricas ou material de propaga\xE7\xE3o,
na \xE1rea abrangida pelo raio de erradica\xE7\xE3o previsto nos arts. 80 e 81, ser\xE3o tamb\xE9m interditados e notificados para vistoria imediata de todas as plantas c\xEDtricas.
\xA7 1\xBA - Os demais im\xF3veis lim\xEDtrofes ser\xE3o notificados para vistoria imediata de todas as plantas c\xEDtricas.
\xA7 2\xBA - A vistoria de que trata este artigo ser\xE1 realizada sob supervis\xE3o do RT e do OEDSV, atendido os dispostos nos arts. 69, 70 e 72 desta Instru\xE7\xE3o Normativa.

Art. 75 - Para cada im\xF3vel lim\xEDtrofe interditado em fun\xE7\xE3o da abrang\xEAncia do raio de erradica\xE7\xE3o, o OEDSV dever\xE1 instruir processo
administrativo pr\xF3prio, contendo os seguintes documentos:
I - original do Termo de Fiscaliza\xE7\xE3o do Im\xF3vel;
II - c\xF3pia do Laudo de Diagn\xF3stico Fitossanit\xE1rio; e
III - original do Auto de Interdi\xE7\xE3o do Im\xF3vel.

Art. 76 - Nos im\xF3veis interditados ser\xE3o aplicadas as medidas para erradica\xE7\xE3o do foco, previstas nos arts. 79 a 83 desta Instru\xE7\xE3o
Normativa.
\xA7 1\xBA - A sa\xEDda de frutos c\xEDtricos do im\xF3vel interditado, s\xF3 ser\xE1 permitida ap\xF3s a erradica\xE7\xE3o do foco, passando o im\xF3vel a ser considerado sob supervis\xE3o oficial.
\xA7 2\xBA - Somente ser\xE1 permitido o plantio de plantas hospedeiras do Cancro C\xEDtrico na \xE1rea perifocal ap\xF3s a desinterdi\xE7\xE3o do im\xF3vel.

\xA7 3\xBA - No per\xEDodo de interdi\xE7\xE3o, ser\xE1 permitido o plantio de plantas c\xEDtricas nas demais \xE1reas do im\xF3vel, exceto a instala\xE7\xE3o de viveiros de mudas c\xEDtricas, que s\xF3 poder\xE1 ocorrer ap\xF3s a desinterdi\xE7\xE3o.

Art. 77 - O OEDSV dar\xE1 continuidade aos processos administrativos citados no par\xE1grafo \xFAnico do art. 72 e no art. 75, desta
Instru\xE7\xE3o Normativa, juntando o Auto de Destrui\xE7\xE3o de Plantas.

Art. 78 - O OEDSV encaminhar\xE1 semestralmente \xE0 unidade de sanidade vegetal da SFA/MAPA/UF, o relat\xF3rio dos trabalhos
realizados.
Se\xE7\xE3o III Da Erradica\xE7\xE3o do Cancro C\xEDtrico

Art. 79 - Comprovada oficialmente a ocorr\xEAncia do Cancro C\xEDtrico, ser\xE3o adotadas todas as medidas para a sua erradica\xE7\xE3o, por um
dos seguintes m\xE9todos:
I - elimina\xE7\xE3o da planta foco e pulveriza\xE7\xE3o de todas as plantas c\xEDtricas, no raio de trinta metros, com calda c\xFAprica na concentra\xE7\xE3o
de um d\xE9cimo percentual de cobre met\xE1lico; ou
II - elimina\xE7\xE3o da planta foco e de todas as plantas c\xEDtricas contidas na \xE1rea perifocal de raio m\xEDnimo de trinta metros;
\xA7 1\xBA - Entende-se por foco a planta ou as plantas c\xEDtricas contaminadas, mediante a comprova\xE7\xE3o por laudo de diagn\xF3stico fitossanit\xE1rio.
\xA7 2\xBA - Ap\xF3s a elimina\xE7\xE3o das plantas, dever\xE3o ser efetuadas vistorias, supervisionadas pelo RT habilitado para emiss\xE3o de CFO e pelo OEDSV, observando-se o seguinte:
I - as vistorias devem ser realizadas em todas as plantas c\xEDtricas do im\xF3vel, at\xE9 completar dois anos sem a constata\xE7\xE3o de novos
focos de Cancro C\xEDtrico; e
II - para o m\xE9todo de elimina\xE7\xE3o da planta foco, prevista no inciso I do *caput* deste artigo, as vistorias ser\xE3o realizadas
mensalmente, e no m\xE1ximo a cada sessenta dias para o m\xE9todo previsto no inciso II.
\xA7 3\xBA - Nos im\xF3veis rurais e urbanos que tiverem plantas c\xEDtricas erradicadas, ficam os produtores obrigados a manejar o pomar de modo a evitar novas brota\xE7\xF5es dessas plantas.

Art. 80 - Existindo viveiros, campos de plantas fornecedoras de material de propaga\xE7\xE3o sem origem gen\xE9tica comprovada, campos
de produ\xE7\xE3o de porta-enxertos, jardins clonais e borbulheiras de plantas c\xEDtricas a c\xE9u aberto, num raio m\xEDnimo de duzentos metros a partir do foco, a propriedade ser\xE1 interditada e todo o material de propaga\xE7\xE3o dever\xE1 ser eliminado pelo produtor, sob supervis\xE3o do OEDSV.
\xA7 1\xBA - As \xE1reas a que se refere o *caput* deste artigo, se existentes num raio de mil metros a partir do foco, ser\xE3o interditadas pelo
OEDSV.
\xA7 2\xBA - As \xE1reas interditadas permanecer\xE3o sob vigil\xE2ncia e responsabilidade do seu RT, por um per\xEDodo de cento e oitenta dias, com vistorias a cada trinta dias, sendo supervisionadas pelo OEDSV.

Art. 81 - Existindo produ\xE7\xE3o de material de propaga\xE7\xE3o de citros em estruturas individualizadas protegidas por tela de malha e com
cobertura imperme\xE1vel, num raio de duzentos metros a partir do foco em planta c\xEDtrica, todo o im\xF3vel ser\xE1 interditado por um per\xEDodo de cento e vinte dias, e permanecer\xE1 sob vigil\xE2ncia e responsabilidade do seu RT, com vistorias a cada trinta dias, sendo supervisionado pelo OEDSV.

Art. 82 - Verificada a ocorr\xEAncia do Cancro C\xEDtrico em material de propaga\xE7\xE3o sob estruturas individualizadas protegidas por tela de
malha e com cobertura imperme\xE1vel, dever\xE3o ser eliminadas todas as plantas da estrutura onde foi detectado o foco do Cancro C\xEDtrico, permanecendo todo o im\xF3vel interditado por um per\xEDodo de cento e vinte dias.
\xA7 1\xBA - A estrutura individualizada onde for detectada o foco de Cancro C\xEDtrico, dever\xE1 permanecer sem plantas durante todo o per\xEDodo de interdi\xE7\xE3o.
\xA7 2\xBA - As demais estruturas individualizadas, por ventura existentes, dever\xE3o ser vistoriadas, a cada trinta dias, com supervis\xE3o do RT e do OEDSV.

Art. 83 - O im\xF3vel com produ\xE7\xE3o comercial de fruto e com viveiros, campos de plantas fornecedoras de material de propaga\xE7\xE3o sem
origem gen\xE9tica comprovada, campos de produ\xE7\xE3o de portaenxertos, jardins clonais ou borbulheiras, ser\xE1 interditado se detectada a presen\xE7a da praga em material de propaga\xE7\xE3o.
I - comprovada oficialmente a ocorr\xEAncia de Cancro C\xEDtrico, todo o material de propaga\xE7\xE3o vegetativa ser\xE1 eliminado;
II - ap\xF3s a elimina\xE7\xE3o do foco, dever\xE1 ser realizada vistoria, sob a supervis\xE3o do RT e do OEDSV, de todas as plantas c\xEDtricas da
\xE1rea de produ\xE7\xE3o.
III - n\xE3o sendo detectada a presen\xE7a de Cancro C\xEDtrico, os frutos poder\xE3o transitar para outras UF ou para ALP desde que seja
realizada a higieniza\xE7\xE3o prevista no art. 66 desta Instru\xE7\xE3o Normativa.

IV - somente poder\xE1 ser cultivado citros na \xE1rea erradicada, se ap\xF3s o per\xEDodo de cento e oitenta dias, com vistorias realizadas a
cada trinta dias, sob supervis\xE3o do RT e do OEDSV, n\xE3o for detectada a ocorr\xEAncia de Cancro C\xEDtrico.
Se\xE7\xE3o IV Da Desinterdi\xE7\xE3o

Art. 84 - Para a desinterdi\xE7\xE3o do im\xF3vel devem ser atendidas as seguintes condi\xE7\xF5es:
I - parecer conclusivo do OEDSV relacionado a finaliza\xE7\xE3o dos trabalhos de erradica\xE7\xE3o e ao cumprimento das vistorias previstas
nos artigos 79 a 83 desta Instru\xE7\xE3o Normativa; e
II - constata\xE7\xE3o da aus\xEAncia:
a) de replantio de plantas c\xEDtricas na \xE1rea perifocal;
b) do surgimento de novos focos; e c) de rebrotas ou sementeiras das plantas removidas, durante o per\xEDodo de interdi\xE7\xE3o.

Art. 85 - Atendido o que consta no art. 84 desta Instru\xE7\xE3o Normativa o OEDSV emitir\xE1 Termo de Desinterdi\xE7\xE3o, que dever\xE1 ser
juntado ao respectivo processo administrativo.
CAP\xCDTULO VII
DAS DISPOSI\xC7\xD5ES FINAIS E TRANSIT\xD3RIAS

Art. 86 - Aos im\xF3veis que tenham sido interditados com base na Portaria n\xBA 291, de 23 de julho de 1997, dever\xE3o ser aplicadas as
medidas previstas nesta Instru\xE7\xE3o Normativa, correspondentes ao status assumido pela \xE1rea onde eles est\xE3o inseridos.

Art. 87 - Os propriet\xE1rios, arrendat\xE1rios ou ocupantes a qualquer t\xEDtulo, de im\xF3veis rurais ou urbanos, s\xE3o obrigados a executar, \xE0s
suas custas, nos respectivos im\xF3veis e no prazo que lhes for determinado, todas as medidas de erradica\xE7\xE3o do Cancro C\xEDtrico constantes desta Instru\xE7\xE3o Normativa.

| \xA7 1\xBA - Quando n\xE3o executadas as medidas previstas no caput deste artigo, o OEDSV dever\xE1 aplic\xE1-las, compulsoriamente, por conta |
| --- |
| dos propriet\xE1rios, arrendat\xE1rios ou ocupantes a qualquer t\xEDtulo. |

conta dos propriet\xE1rios, arrendat\xE1rios ou ocupantes a qualquer t\xEDtulo.
\xA7 2\xBA - Os propriet\xE1rios, arrendat\xE1rios ou ocupantes a qualquer t\xEDtulo, cujos im\xF3veis tenham plantas c\xEDtricas eliminadas por for\xE7a das a\xE7\xF5es de erradica\xE7\xE3o do Cancro C\xEDtrico, n\xE3o ter\xE3o direito a qualquer tipo de indeniza\xE7\xE3o.

Art. 88 - As DAs, presentes nesta Instru\xE7\xE3o Normativa poder\xE3o ser alteradas, a qualquer tempo, pelo DSV/SDA/MAPA, para
adequa\xE7\xE3o ou para atender requisitos fitossanit\xE1rios de importa\xE7\xE3o espec\xEDficos.

Art. 89 - Fica revogada a Instru\xE7\xE3o Normativa n\xBA 37, de 5 de setembro de 2016.

Art. 90 - Esta Instru\xE7\xE3o Normativa entra em vigor na data de sua publica\xE7\xE3o.
BLAIRO MAGGI`,
  },
  {
    texto: `MINIST\xC9RIO DA AGRICULTURA, PECU\xC1RIA E ABASTECIMENTO

GABINETE DO MINISTRO

INSTRU\xC7\xC3O NORMATIVA N\xBA 28, DE 24 DE AGOSTO DE 2016

DOU de 25/08/2016 (n\xBA 164, Se\xE7\xE3o 1, p\xE1g. 6)

O MINISTRO DE ESTADO DA AGRICULTURA, PECU\xC1RIA E ABASTECIMENTO, no uso das atribui\xE7\xF5es que lhe confere o art. 87, par\xE1grafo \xFAnico, inciso II, da Constitui\xE7\xE3o, tendo em vista o disposto no art. 2\xBA do Decreto n\xBA 5.741, de 30 de mar\xE7o de 2006, no Decreto n\xBA 24.114, de 12 de abril de 1934, e o que consta do Processo n\xBA 21000.006486/2013\xAD92, resolve:

Art. 1\xBA \xAD Fica Aprovada a Norma T\xE9cnica para a utiliza\xE7\xE3o da Permiss\xE3o de Tr\xE2nsito de Vegetais \xAD PTV desta
Instru\xE7\xE3o Normativa.
CAP\xCDTULO I
DA UTILIZA\xC7\xC3O DA PTV
Se\xE7\xE3o I Da Exig\xEAncia e do Uso da PTV

Art. 2\xBA \xAD A PTV \xE9 o documento emitido para acompanhar o tr\xE2nsito da partida de plantas ou produtos
vegetais, de acordo com as normas de defesa sanit\xE1ria vegetal, e para subsidiar, conforme o caso, a emiss\xE3o do Certificado Fitossanit\xE1rio \xAD CF e do Certificado Fitossanit\xE1rio de Reexporta\xE7\xE3o \xAD CFR, com declara\xE7\xE3o adicional do Minist\xE9rio da Agricultura, Pecu\xE1ria e Abastecimento \xAD Mapa.
Par\xE1grafo \xFAnico \xAD O controle do tr\xE2nsito de plantas ou de produtos vegetais envolve o transporte interno rodovi\xE1rio, a\xE9reo, hidrovi\xE1rio e ferrovi\xE1rio.

Art. 3\xBA \xAD A PTV ser\xE1 exigida para o tr\xE2nsito de partida de plantas ou de produtos vegetais com potencial de
veicular praga quarenten\xE1ria presente, praga n\xE3o quarenten\xE1ria regulamentada, praga de interesse da Unidade da Federa\xE7\xE3o \xAD UF e por exig\xEAncia de pa\xEDs importador, salvo quando for dispensada em norma espec\xEDfica da praga.
Par\xE1grafo \xFAnico \xAD Entende\xADse por praga de interesse de UF aquela de import\xE2ncia econ\xF4mica, cuja dissemina\xE7\xE3o possa ocorrer por meio de tr\xE2nsito de plantas e de produtos vegetais e que seja objeto de programa oficial de preven\xE7\xE3o ou controle na mesma UF, reconhecido pelo Departamento de Sanidade Vegetal \xAD DSV.

Art. 4\xBA \xAD A emiss\xE3o da PTV ser\xE1 fundamentada em Certificado Fitossanit\xE1rio de Origem \xAD CFO ou em
Certificado Fitossanit\xE1rio de Origem Consolidado \xAD CFOC para o tr\xE2nsito de partidas de plantas ou de produtos vegetais, nos seguintes casos:
I \xAD para as pragas regulamentadas, na UF de ocorr\xEAncia ou de risco desconhecido, salvo quando a normativa espec\xEDfica dispensar a certifica\xE7\xE3o\u037E II \xAD para comprovar a origem de \xC1rea Livre de Praga \xAD ALP, Local Livre de Praga \xAD LLP, Sistema de Mitiga\xE7\xE3o de Riscos de Praga \xAD SMRP ou \xC1rea de Baixa Preval\xEAncia de Praga \xAD ABPP, reconhecida pelo Mapa\u037E e III \xAD para atender exig\xEAncia espec\xEDfica de certifica\xE7\xE3o fitossanit\xE1ria de origem para praga de interesse de UF, com aprova\xE7\xE3o do DSV, ou por exig\xEAncia de Organiza\xE7\xE3o Nacional de Prote\xE7\xE3o Fitossanit\xE1ria \xAD ONPF de pa\xEDs importador.
Par\xE1grafo \xFAnico \xAD Entende\xADse por UF de risco desconhecido como sendo aquela em que o \xD3rg\xE3o Estadual de Defesa Sanit\xE1ria \xAD OEDSV, n\xE3o realiza levantamentos anuais para comprova\xE7\xE3o da n\xE3o ocorr\xEAncia de praga regulamentada.

Art. 5\xBA \xAD N\xE3o ser\xE1 exigido PTV para plantas e produtos vegetais cuja exig\xEAncia seja laudo laboratorial,
certificado de tratamento, atestado de origem gen\xE9tica, termo de conformidade ou certificado de sementes ou mudas.
Par\xE1grafo \xFAnico \xAD Para material de propaga\xE7\xE3o com n\xEDveis de toler\xE2ncia estabelecidos para pragas n\xE3o quarenten\xE1rias regulamentadas, ser\xE3o utilizados o Atestado de Origem Gen\xE9tica, ou o Termo de Conformidade, ou o Certificado de Sementes ou de Mudas, conforme a categoria da semente ou da muda, previstos na legisla\xE7\xE3o de sementes e mudas, como documentos de tr\xE2nsito.

Art. 6\xBA \xAD A PTV fundamentar\xE1 a emiss\xE3o do CF e do CFR, quando houver exig\xEAncia de Declara\xE7\xE3o Adicional
\xAD DA referente a inspe\xE7\xE3o na origem.
Par\xE1grafo \xFAnico \xAD Esta exig\xEAncia n\xE3o se aplica quando houver a emiss\xE3o do CF na origem, por for\xE7a de acordo bilateral ou de norma espec\xEDfica.

Art. 7\xBA \xAD A partida acompanhada de CF ou de CFR emitido por Fiscal Federal Agropecu\xE1rio \xAD FFA do Mapa,
na origem, dever\xE1 ser lacrada, ficando isenta da exig\xEAncia da emiss\xE3o da PTV durante o tr\xE2nsito interno at\xE9 o ponto de egresso.

Art. 8\xBA \xAD Os termos da utilizados na emiss\xE3o da PTV ser\xE3o fornecidos pelo Mapa ou far\xE3o parte do requisito
oficial da ONPF do pa\xEDs importador.
Se\xE7\xE3o II Da Emiss\xE3o e Controle da PTV

Art. 9\xBA \xAD O OEDSV dever\xE1 utilizar o formul\xE1rio da PTV, conforme o modelo apresentado no Anexo I e I\xADA,
desta Instru\xE7\xE3o Normativa.
\xA7 1\xBA \xAD A identifica\xE7\xE3o num\xE9rica da PTV ser\xE1 em ordem crescente, com c\xF3digo num\xE9rico da UF, seguida do ano, com dois d\xEDgitos, e n\xFAmero sequencial de seis d\xEDgitos.
\xA7 2\xBA \xAD O c\xF3digo num\xE9rico da UF seguir\xE1 o padr\xE3o do Instituto Brasileiro de Geografia e Estat\xEDstica \xAD IBGE.

Art. 10 \xAD O OEDSV, como Inst\xE2ncia Intermedi\xE1ria do Sistema Unificado de Aten\xE7\xE3o \xE0 Sanidade Agropecu\xE1ria
\xAD Suasa, estabelecer\xE1 procedimentos pr\xF3prios de controle sobre a impress\xE3o do formul\xE1rio da PTV, sua distribui\xE7\xE3o, assinatura e a emiss\xE3o pelos Respons\xE1veis T\xE9cnicos habilitados.
CAP\xCDTULO II
DA HABILITA\xC7\xC3O DE RESPONS\xC1VEL T\xC9CNICO DE OEDSV

Art. 11 \xAD Para oficializar a habilita\xE7\xE3o, o Respons\xE1vel T\xE9cnico \xAD RT, dever\xE1 preencher e assinar duas vias do
Termo de Habilita\xE7\xE3o \xAD TH, conforme o Anexo II, ficando a cargo do OEDSV o encaminhamento de uma via \xE0 Superintend\xEAncia Federal de Agricultura \xAD SFA na UF, para sua inclus\xE3o no Cadastro Nacional dos Respons\xE1veis T\xE9cnicos Habilitados para emiss\xE3o da PTV.
\xA7 1\xBA \xAD O n\xFAmero do Termo de Habilita\xE7\xE3o fornecido pelo OEDSV ser\xE1 composto do c\xF3digo num\xE9rico da UF, ano da habilita\xE7\xE3o, com dois d\xEDgitos, e numera\xE7\xE3o sequencial.
\xA7 2\xBA \xAD O Mapa disponibilizar\xE1 o Cadastro Nacional dos Respons\xE1veis T\xE9cnicos Habilitados para a emiss\xE3o da PTV, do qual constar\xE1 o nome do RT, o n\xFAmero do termo de habilita\xE7\xE3o, OEDSV de lota\xE7\xE3o, local de atua\xE7\xE3o e a assinatura.

\xA7 3\xBA \xAD O RT habilitado para a emiss\xE3o da PTV dever\xE1 ser submetido, no m\xE1ximo a cada tr\xEAs anos, a curso de treinamento e de capacita\xE7\xE3o t\xE9cnica sobre normas de sanidade vegetal.
CAP\xCDTULO III
DA EMISS\xC3O DA PTV

Art. 12 \xAD A PTV, no caso de emiss\xE3o manual, somente poder\xE1 ser emitida e assinada por um Engenheiro
Agr\xF4nomo ou Engenheiro Florestal, em suas respectivas \xE1reas de compet\xEAncia profissional, habilitado e inscrito no Cadastro Nacional dos Respons\xE1veis T\xE9cnicos Habilitados para a emiss\xE3o da PTV, pertencentes ao quadro do OEDSV e que exer\xE7am atividade de fiscaliza\xE7\xE3o agropecu\xE1ria.
\xA7 1\xBA \xAD O CFO ou CFOC dever\xE1 ser anexado \xE0 via da PTV destinada ao OEDSV, para fins de rastreabilidade no processo.
\xA7 2\xBA \xAD Ser\xE1 dispensada a exig\xEAncia prevista no par\xE1grafo anterior quando houver sistema informatizado que permita a verifica\xE7\xE3o dos documentos que fundamentem a PTV e a rastreabilidade do processo.

Art. 13 \xAD A PTV poder\xE1 ser emitida eletronicamente em sistema informatizado, desde que a certifica\xE7\xE3o
fitossanit\xE1ria de origem seja fiscalizada permanentemente e homologada pelo RT habilitado para emiss\xE3o de
PTV.
\xA7 1\xBA \xAD O OEDSV dever\xE1 garantir a seguran\xE7a do sistema informatizado e disponibilizar consulta ao site para verificar a autenticidade dos documentos.
\xA7 2\xBA \xAD A homologa\xE7\xE3o da certifica\xE7\xE3o fitossanit\xE1ria de origem pelo RT habilitado para emiss\xE3o de PTV se dar\xE1 mediante uso de senha pessoal, de assinatura eletr\xF4nica ou de outra medida de seguran\xE7a equivalente.
\xA7 3\xBA \xAD A PTV eletr\xF4nica dispensar\xE1 a assinatura se estiver vinculada ao Engenheiro Agr\xF4nomo ou Florestal habilitado que homologar a certifica\xE7\xE3o fitossanit\xE1ria de origem.
\xA7 4\xBA \xAD A emiss\xE3o da PTV poder\xE1 ser realizada pelo produtor de Unidade de Produ\xE7\xE3o \xAD UP ou propriet\xE1rio de Unidade de Consolida\xE7\xE3o \xAD UC, atrav\xE9s de sistema informatizado disponibilizado pelo OEDSV.

Art. 14 \xAD Na emiss\xE3o de PTV fundamentada em outra PTV, dever\xE1 ser assegurada a manuten\xE7\xE3o da
identidade, da rastreabilidade e da condi\xE7\xE3o fitossanit\xE1ria do produto.

Art. 15 \xAD A PTV ser\xE1 emitida para o produto importado com potencial de veicular Praga Quarenten\xE1ria
Presente, a partir da UF declarada como destino da partida pelo importador, devendo ainda obedecer \xE0s exig\xEAncias a seguir:
I \xAD a partida importada seguir\xE1 no tr\xE2nsito interno, do ponto de ingresso ao ponto de destino declarado, amparada pela c\xF3pia autenticada do CF ou do CFR, o Requerimento para Fiscaliza\xE7\xE3o de Produtos Agropecu\xE1rios, emitido pelo Servi\xE7o de Vigil\xE2ncia Agropecu\xE1ria do Mapa do ponto de ingresso da partida\u037E II \xAD a partida importada poder\xE1 ser distribu\xEDda para outra UF desde que o OEDSV estabele\xE7a mecanismos de controle para assegurar a manuten\xE7\xE3o da conformidade fitossanit\xE1ria e a rastreabilidade no processo de certifica\xE7\xE3o\u037E III \xAD a declara\xE7\xE3o adicional constante do CF ou do CFR ser\xE1 transcrita para o campo espec\xEDfico da PTV, devendo ser inclu\xEDdo o n\xFAmero do CF e do Requerimento para Fiscaliza\xE7\xE3o de Produtos Agropecu\xE1rios, nos casos em que houver exig\xEAncia para o tr\xE2nsito interno\u037E IV \xAD o OEDSV dever\xE1 arquivar c\xF3pia do CF ou do CFR e c\xF3pia do Requerimento para Fiscaliza\xE7\xE3o de Produtos Agropecu\xE1rios, junto \xE0 via da PTV destinada ao controle do OEDSV, para efeito de rastreabilidade\u037E e

V \xAD o produto importado poder\xE1 compor lote de produto formado em UC, devendo ser inclu\xEDdo nos registros do livro de acompanhamento o n\xFAmero do CF ou do CFR e do TF, para a manuten\xE7\xE3o da rastreabilidade no processo de certifica\xE7\xE3o.

Art. 16 \xAD A PTV poder\xE1 ser emitida para a partida embarcada na mesma UF de produ\xE7\xE3o, quando houver
necessidade de constar do CF ou do CFR declara\xE7\xE3o adicional do Mapa para atender exig\xEAncia da ONPF do pa\xEDs importador.

Art. 17 \xAD A PTV ser\xE1 emitida nas barreiras fitossanit\xE1rias estaduais, m\xF3veis ou fixas, ou em unidade do
OEDSV.

Art. 18 \xAD A PTV ser\xE1 emitida em duas vias, com a seguinte destina\xE7\xE3o:
I \xAD 1\xAA via: acompanha a partida no tr\xE2nsito\u037E e II \xAD 2\xAA via: OEDSV, para arquivo junto com o CFO, CFOC, PTV, CF, CFR, Requerimento para Fiscaliza\xE7\xE3o de Produtos Agropecu\xE1rios.
\xA7 1\xBA \xAD No caso de emiss\xE3o eletr\xF4nica ser\xE1 admitida a emiss\xE3o de uma \xFAnica via para acompanhar a partida no tr\xE2nsito de vegetais.
\xA7 2\xBA \xAD A PTV ter\xE1 validade de at\xE9 30 (trinta) dias, ficando a cargo do emitente estabelecer o prazo.
\xA7 3\xBA \xAD Cada produto dever\xE1 estar relacionado individualmente, por nome cient\xEDfico, nome comum e cultivar ou clone, sendo exigida a identifica\xE7\xE3o da UP ou do lote consolidado, a rela\xE7\xE3o da quantidade correspondente e a respectiva Declara\xE7\xE3o Adicional.
\xA7 4\xBA \xAD Uma PTV poder\xE1 contemplar mais de um produto e mais de uma UP.
\xA7 5\xBA \xAD A PTV ser\xE1 emitida preenchendo\xADse sem rasuras cada campo existente, n\xE3o sendo permitida a utiliza\xE7\xE3o do verso do documento.
\xA7 6\xBA \xAD Os campos n\xE3o utilizados devem ser anulados de forma a evitar a adultera\xE7\xE3o do documento.
\xA7 7\xBA \xAD O Anexo I\xADA ser\xE1 utilizado para informa\xE7\xF5es complementares dos campos da PTV, quando for necess\xE1rio.

Art. 19 \xAD A legisla\xE7\xE3o espec\xEDfica da praga ou o acordo bilateral firmado pelo Mapa poder\xE1 estabelecer a
exig\xEAncia do uso de lacre no ato da emiss\xE3o da PTV.
Par\xE1grafo \xFAnico \xAD O n\xFAmero do lacre da partida certificada ou do meio de transporte dever\xE1 constar do campo espec\xEDfico da PTV.

Art. 20 \xAD N\xE3o poder\xE1 ser delegada a emiss\xE3o da PTV a profissional de institui\xE7\xF5es estaduais que atuem na \xE1rea
de assist\xEAncia t\xE9cnica, extens\xE3o rural, fomento ou pesquisa agropecu\xE1ria ou de compet\xEAncia profissional n\xE3o prevista por esta Instru\xE7\xE3o Normativa.
Par\xE1grafo \xFAnico \xAD Ap\xF3s autoriza\xE7\xE3o do Mapa, em casos especiais e a pedido do OEDSV, a PTV poder\xE1 ser emitida por FFA, designado por um per\xEDodo determinado.
CAP\xCDTULO IV
DAS OBRIGA\xC7\xD5ES PARA O USO DA PTV

Art. 21 \xAD O OEDSV dever\xE1 encaminhar relat\xF3rio semestral consolidado \xE0 SFA na UF, conforme Anexo III, at\xE9
o \xFAltimo dia do m\xEAs subsequente ao semestre respectivo.

Art. 22 \xAD O OEDSV n\xE3o emitir\xE1 a PTV para o tr\xE2nsito de partida de plantas, ou produtos vegetais, que se
encontrar em desacordo com o previsto nesta Instru\xE7\xE3o Normativa.

Art. 23 \xAD O OEDSV n\xE3o exigir\xE1 a PTV para o tr\xE2nsito interestadual de vegetais, em desacordo com legisla\xE7\xE3o
federal.
\xA7 1\xBA \xAD A inobserv\xE2ncia a este artigo dever\xE1 ser comunicada ao Mapa, o qual, como inst\xE2ncia central e superior do Suasa, averiguar\xE1 a n\xE3o conformidade no prazo de 10 (dez) dias.
\xA7 2\xBA \xAD O descumprimento do previsto no caput inviabilizar\xE1 repasses de recursos financeiros pelo Mapa ao
OEDSV.

Art. 24 \xAD O Mapa realizar\xE1 auditoria nos procedimentos adotados pelos OEDSV na emiss\xE3o da PTV nas
Unidades da Federa\xE7\xE3o.

Art. 25 \xAD Aprovar o modelo da PTV e os demais modelos, conforme os Anexos I a III.

Art. 26 \xAD Esta Instru\xE7\xE3o Normativa entra em vigor na data de sua publica\xE7\xE3o.

Art. 27 \xAD Fica revogada a Instru\xE7\xE3o Normativa n\xBA 54, de 4 de novembro de 2007.
BLAIRO MAGGI
ANEXO I
ANEXO I\xADA
ANEXO II
ANEXO III`,
    id: 'IN28-2016',
  },
  {
    id: 'IN34-2017',
    texto: `\xD3RG\xC3O: MINIST\xC9RIO DA AGRICULTURA, PECU\xC1RIA E ABASTECIMENTO/SECRETARIA DE DEFESA AGROPECU\xC1RIA

INSTRU\xC7\xC3O NORMATIVA N\xBA 34, DE 5 DE SETEMBRO DE 2017
Decreto n\xBA 5.759, de17 de abril de 2006, na Instru\xE7\xE3o Normativa n\xBA 52, de 20 de novembrode 2007, alterada pela Instru\xE7\xE3o Normativa

n\xBA 41, de 1\xBA dejulho de 2008, e o que consta do Processo n\xBA 21000.014390/2017-21,resolve:

Art. 1\xBA Reconhecer, para fins de controle interno, a detec\xE7\xE3oda praga quarenten\xE1ria ausente *Sternochetus mangiferae*, que tem como hospedeiro exclusivo a mangueira (*Mangifera indica*), em frutosde manga de \xE1reas n\xE3o comerciais localizadas nos munic\xEDpios de Belford Roxo, Duque de Caxias, Mag\xE9, Mesquita, Nil\xF3polis, Niter\xF3i, Paracambi, Rio de Janeiro e Serop\xE9dica, pertencentes \xE0 regi\xE3o metropolitanada cidade do Rio de Janeiro, do Estado do Rio de Janeiro.

Art.2\xBA Declarar os munic\xEDpios indicados no Art. 1\xBA como zona interditada e proibir o tr\xE2nsito de frutos de manga produzidosnaqueles munic\xEDpios para \xE1reas indenes.

Art.3\xBA. O tr\xE2nsito interestadual de frutos de manga produzidosno Estado do Rio de Janeiro fica condicionado \xE0 apresenta\xE7\xE3ode Permiss\xE3o de Tr\xE2nsito de Vegetais (PTV) devidamente embasadaem Certificado Fitossanit\xE1rio de Origem (CFO) ou Certificado Fitossanit\xE1riode Origem Consolidado (CFOC) com a seguinte Declara\xE7\xE3o Adicional: "A partida foi produzida fora da zona interditadae encontra-se livre de *Sternochetus mangiferae*".

Art. 4\xBA Fica o Departamento de Sanidade Vegetal autorizadoa editar instru\xE7\xF5es complementares para os trabalhos de erradica\xE7\xE3oda praga na zona interditada.

Art. 5\xBA Esta Instru\xE7\xE3o Normativa entra em vigor na data desua publica\xE7\xE3o.

LUIS EDUARDO PACIFICI RANGEL
Este conte\xFAdo n\xE3o substitui o publicado na vers\xE3o certificada (pdf).`,
  },
  {
    id: 'IN38-2008',
    texto: `| Minist\xE9rio da Agricultura, Pecu\xE1ria e Abastecimento | BINAGRI - SISLEGIS |

GABINETE DO MINISTRO

INSTRU\xC7\xC3O NORMATIVA N\xBA 38, DE 23 DE JUNHO DE 2008

O MINISTRO DE ESTADO DA AGRICULTURA, PECU\xC1RIA E ABASTECIMENTO, no uso da atribui\xE7\xE3o que lhe confere o art. 87, Par\xE1grafo \xFAnico, inciso II, da Constitui\xE7\xE3o, tendo em vista o disposto na Lei n\xBA 9.972, de 25 de maio de 2000, no Decreto n\xBA 6.268, de 22 de novembro de 2007, no Decreto n\xBA 5.741, de 30 de mar\xE7o de 2006, e o que consta do Processo n\xBA 21000.013771/2005 50, resolve:

Art. 1\xBA Estabelecer o Regulamento T\xE9cnico da Am\xEAndoa de Cacau, definindo o seu padr\xE3o
oficial de classifica\xE7\xE3o, com os requisitos de identidade e qualidade, a amostragem, o modo de apresenta\xE7\xE3o e a marca\xE7\xE3o ou rotulagem, na forma do Anexo \xE0 presente Instru\xE7\xE3o Normativa.

Art. 2\xBA Esta Instru\xE7\xE3o Normativa entra em vigor ap\xF3s decorridos 120 (cento e vinte) dias de
sua publica\xE7\xE3o.
REINHOLD STEPHANES
REGULAMENTO T\xC9CNICO DA AM\xCANDOA DE CACAU

Art. 1\xBA O presente Regulamento T\xE9cnico tem por objetivo definir o padr\xE3o oficial de
classifica\xE7\xE3o da am\xEAndoa de cacau, considerando seus requisitos de identidade e qualidade, a amostragem, o modo de apresenta\xE7\xE3o e a marca\xE7\xE3o ou rotulagem, nos aspectos referentes \xE0 classifica\xE7\xE3o do produto.

Art. 2\xBA Para efeito deste Regulamento T\xE9cnico, considerase:
I - am\xEAndoa de cacau: am\xEAndoas provenientes da esp\xE9cie *Theobroma cacao* L.;
II - achatadas ou chochas: as am\xEAndoas que apresentam aus\xEAncia de cotil\xE9dones ou que s\xE3o
t\xE3o finas que n\xE3o permitam o corte;
III - am\xEAndoas fermentadas: as am\xEAndoas que, entre a colheita e a secagem, passaram por
um processamento via fermenta\xE7\xE3o;
IV - am\xEAndoas secas: aquelas que apresentam teor de umidade dentro do limite
recomendado neste Regulamento T\xE9cnico;
V - ard\xF3sia: as am\xEAndoas n\xE3o fermentadas, de colora\xE7\xE3o cinzento-escura (cor de ard\xF3sia) ou
roxas, com embri\xE3o branco ou marfim e que podem se apresentar compactas;
VI - danificadas por insetos: as am\xEAndoas que se apresentam avariadas, em raz\xE3o de ataques
de insetos, vis\xEDveis a olho nu, em qualquer de seus est\xE1gios evolutivos;
VII - fora de tipo: o produto que ultrapassar o limite m\xE1ximo de toler\xE2ncia de defeitos
estabelecido para o Tipo 3, na Tabela 1, deste Regulamento T\xE9cnico;
VIII - fuma\xE7a: o aroma percebido nas am\xEAndoas de cacau com caracter\xEDsticas de defumado
ou de presunto;
IX - germinadas: as am\xEAndoas que apresentam a casca furada pelo desenvolvimento do
embri\xE3o;
X - impurezas: todas as part\xEDculas oriundas do cacau, tais como: restos de polpa, fragmentos
da placenta ou cord\xE3o central e de casca do fruto, entre outros;

XI - mat\xE9rias estranhas: todas as part\xEDculas n\xE3o oriundas do cacau, tais como: fragmentos
vegetais, sementes de outras esp\xE9cies, pedra, terra, entre outras;
XII - mat\xE9rias macrosc\xF3picas: aquelas estranhas ao produto, que podem ser detectadas por
observa\xE7\xE3o direta (olho nu), sem aux\xEDlio de instrumentos \xF3pticos e que est\xE3o relacionadas ao risco \xE0 sa\xFAde humana, segundo legisla\xE7\xE3o espec\xEDfica vigente;
XIII - mat\xE9rias microsc\xF3picas: aquelas estranhas ao produto, que podem ser detectadas com
aux\xEDlio de instrumentos \xF3pticos e que est\xE3o relacionadas ao risco \xE0 sa\xFAde humana, segundo legisla\xE7\xE3o espec\xEDfica vigente;
XIV - mofadas: as am\xEAndoas que apresentam, internamente, desenvolvimento miceliar de
fungos, vis\xEDveis a olho nu;
XV - part\xEDcula com toxicidade desconhecida: as part\xEDculas estranhas, am\xEAndoas ou partes
destas, diferentes de sua condi\xE7\xE3o natural, com suspeita de toxicidade;
XVI - quebradas: as am\xEAndoas que se apresentam partidas ou fragmentadas;
XVII - subst\xE2ncias nocivas \xE0 sa\xFAde: subst\xE2ncias ou agentes estranhos de origem biol\xF3gica,
qu\xEDmica ou f\xEDsica, que sejam nocivos \xE0 sa\xFAde, tais como: as micotoxinas, os res\xEDduos de produtos fitossanit\xE1rios ou outros contaminantes, previstos em legisla\xE7\xE3o espec\xEDfica vigente, n\xE3o sendo assim considerados aqueles cujo valor se verifica dentro dos limites m\xE1ximos previstos;
XVIII - umidade" : o percentual de \xE1gua encontrado na amostra do produto, isenta de
mat\xE9rias estranhas e impurezas, determinado por um m\xE9todo oficial ou por aparelho que d\xEA resultado equivalente; e *(Alterado(a) pelo(a) Instru\xE7\xE3o Normativa 57/2008/MAPA)*
XIX - violeta: a am\xEAndoa de colora\xE7\xE3o violeta ou p\xFArpura brilhante, que pode se apresentar
compacta, oriunda de fruto colhido imaturo ou resultante do processo de fermenta\xE7\xE3o insuficiente.

Art. 3\xBA O requisito de identidade da am\xEAndoa de cacau \xE9 definido pela pr\xF3pria esp\xE9cie do
produto, na forma disposta no inciso I, do art. 2\xBA, deste Regulamento T\xE9cnico.

Art. 4\xBA Os requisitos de qualidade da am\xEAndoa de cacau ser\xE3o definidos em fun\xE7\xE3o dos
limites m\xE1ximos de toler\xE2ncia de defeitos estabelecidos na Tabela 1 deste Regulamento T\xE9cnico.

Art. 5\xBA A am\xEAndoa de cacau ser\xE1 classificada em Tipos de acordo com os percentuais de
toler\xE2ncia de defeitos previstos na Tabela 1 deste Regulamento T\xE9cnico, podendo ainda ser enquadrada como Fora de Tipo ou Desclassificada.
Tabela 1 - Am\xEAndoa de cacau - Toler\xE2ncia de defeitos, expressa em % e respectivo enquadramento do produto. *(Alterado(a) pelo(a) Instru\xE7\xE3o Normativa 57/2008/MAPA)*
- Am\xEAndoa de cacau - Toler\xE2ncia de defeitos, expressa em % e respectivo enquadramento do
produto. (*)

| Enquadramento do Produto | Defeitos |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- |
|  | Mofadas | Fuma\xE7a | Danificadas por insetos | Ard\xF3sia | Germinadas | Achatadas |
| Tipo 1 | De zero at\xE9 4,0% | De zero at\xE9 1,0% | De zero at\xE9 4,0% | De zero at\xE9 5,0% | De zero at\xE9 5,0% | De zero at\xE9 5,0% |
| Tipo 2 | Acima de 4,0% at\xE9 6,0% | Acima de 1,0% at\xE9 4,0% | Acima de 4,0% at\xE9 6,0% | Acima de 5,0% at\xE9 10,0% | Acima de 5,0% at\xE9 6,0% | Acima de 5,0% at\xE9 6,0% |
| Tipo 3 | Acima de 6,0% at\xE9 12,0% | Acima de 4,0% at\xE9 6,0% | Acima de 6,0% at\xE9 8,0% | Acima de 10,0% at\xE9 15,0% | Acima de 6,0% at\xE9 7,0% | Acima de 6,0% at\xE9 7,0% |

| Fora de Tipo | Acima de 12,0% at\xE9 25,0% | Acima de 6,0% | Acima de 8,0% | Acima de 15,0% | Acima de 7,0% | Acima de 7,0% |
| --- | --- | --- | --- | --- | --- | --- |

(*) N. da COEJO: Republicada no DOU DE 30/06/2008, Se\xE7\xE3o 1.
\xA7 1\xBA O limite m\xE1ximo de toler\xE2ncia admitido para mat\xE9rias estranhas \xE9 de 0,3%; para impurezas \xE9 de 1,0% e para am\xEAndoas quebradas \xE9 de 5,0%; acima desses respectivos limites, o produto dever\xE1 ser rebeneficiado, desdobrado, recomposto ou mesclado.
\xA7 2\xBA A am\xEAndoa de cacau enquadrada como Fora de Tipo dever\xE1 ser rebeneficiada, desdobrada, recomposta ou mesclada para efeito de enquadramento em tipo.
\xA7 3\xBA A am\xEAndoa de cacau que exceder o limite de 25,0% (vinte e cinco por cento) de mofadas (mofo interno) n\xE3o poder\xE1 ser rebeneficiada, desdobrada, recomposta ou mesclada para efeito de enquadramento em tipo; acima desse limite, ser\xE1 enquadrada como desclassificada, n\xE3o podendo entrar no pa\xEDs ou ser comercializada. *(Reda\xE7\xE3o dada pelo(a)* *Instru\xE7\xE3o Normativa 57/2008/MAPA)* _______________________________________________ *Reda\xE7\xE3o(\xF5es) Anterior(es)* \xA7 4\xBA Ser\xE1 desclassificada e ter\xE1 a sua comercializa\xE7\xE3o proibida a am\xEAndoa de cacau que apresentar uma ou mais das caracter\xEDsticas indicadas a seguir:
I - mau estado de conserva\xE7\xE3o, dentre os quais:
a) percentual de am\xEAndoas de cacau mofadas (mofo interno) superior a 25,0% (vinte e cinco por cento);
b) odor estranho de qualquer natureza, impr\xF3prio ao produto, que inviabilize a sua utiliza\xE7\xE3o para o uso proposto; e c) presen\xE7a de sementes t\xF3xicas na amostra, na carga ou no lote amostrado; e
II - em caso de importa\xE7\xE3o, fica proibida a entrada no Pa\xEDs de am\xEAndoa de cacau
desclassificada, e os procedimentos legais e administrativos devem ser adotados em conjunto com a Vigil\xE2ncia Agropecu\xE1ria do Minist\xE9rio da Agricultura, Pecu\xE1ria e Abastecimento (MAPA), conforme a causa da desclassifica\xE7\xE3o do produto.

Art. 6\xBA Sempre que julgar necess\xE1rio, o MAPA ou a entidade credenciada por este \xD3rg\xE3o
para a execu\xE7\xE3o da classifica\xE7\xE3o poder\xE1 exigir an\xE1lise de subst\xE2ncias nocivas \xE0 sa\xFAde, mat\xE9rias macrosc\xF3picas, microsc\xF3picas e microbiol\xF3gicas relacionadas ao risco \xE0 sa\xFAde humana, de acordo com legisla\xE7\xE3o espec\xEDfica vigente, independentemente do resultado da classifica\xE7\xE3o do produto.
Par\xE1grafo \xFAnico. O lote de am\xEAndoa de cacau ser\xE1 desclassificado quando da an\xE1lise de que trata o caput deste artigo, se constatar a presen\xE7a das referidas subst\xE2ncias em limites superiores ao m\xE1ximo estabelecido na legisla\xE7\xE3o espec\xEDfica vigente.

Art. 7\xBA No caso de constata\xE7\xE3o de produto desclassificado, a entidade credenciada dever\xE1
emitir o correspondente Documento de Classifica\xE7\xE3o, desclassificando o produto, bem como comunicar o fato ao Setor T\xE9cnico competente da Superintend\xEAncia Federal de Agricultura, Pecu\xE1ria e Abastecimento (SFA), da Unidade da Federa\xE7\xE3o onde o produto se encontra estocado, para as provid\xEAncias cab\xEDveis.

Art. 8\xBA Caber\xE1 ao Setor T\xE9cnico competente da SFA da Unidade da Federa\xE7\xE3o adotar as
provid\xEAncias cab\xEDveis quanto ao produto desclassificado, podendo para isso articular-se, onde couber, com outros \xF3rg\xE3os oficiais.

Art. 9\xBA No caso espec\xEDfico da utiliza\xE7\xE3o do produto desclassificado para outros fins que n\xE3o
seja o uso proposto, o Setor T\xE9cnico competente da SFA da Unidade da Federa\xE7\xE3o dever\xE1 estabelecer todos os procedimentos necess\xE1rios ao acompanhamento do produto at\xE9 a sua completa descaracteriza\xE7\xE3o como alimento ou mat\xE9ria prima para elabora\xE7\xE3o de produto destinado ao consumo humano ou a sua destrui\xE7\xE3o, cabendo ao propriet\xE1rio do produto ou ao seu preposto, al\xE9m de arcar com os custos

pertinentes \xE0 opera\xE7\xE3o, ser o seu deposit\xE1rio.

Art. 10. A am\xEAndoa de cacau dever\xE1 se apresentar fisiologicamente desenvolvida, s\xE3, limpa
e seca, observadas as toler\xE2ncias previstas neste Regulamento T\xE9cnico.

Art. 11. A umidade dever\xE1 ser obrigatoriamente determinada, mas n\xE3o ser\xE1 considerada para
efeito de enquadramento do produto em Tipo, sendo recomendado para fins de comercializa\xE7\xE3o da am\xEAndoa de cacau o percentual m\xE1ximo de 8,00% (oito por cento) para os Tipos 1 e 2; e 9,00% (nove por cento) para o Tipo 3 e Fora de Tipo.

Art. 12. A amostragem da am\xEAndoa de cacau dever\xE1 observar o que segue:
I - as amostras coletadas, que servir\xE3o de base \xE0 realiza\xE7\xE3o da classifica\xE7\xE3o, dever\xE3o conter
os dados necess\xE1rios \xE0 identifica\xE7\xE3o do interessado ou solicitante da classifica\xE7\xE3o do produto, e conter ainda a informa\xE7\xE3o relativa \xE0 identifica\xE7\xE3o do lote ou volume do produto do qual se originaram;
II - caber\xE1 ao propriet\xE1rio, possuidor, detentor ou transportador da am\xEAndoa de cacau arcar
com a identifica\xE7\xE3o e com a movimenta\xE7\xE3o do produto, independentemente da forma em que se encontre, propiciando as condi\xE7\xF5es necess\xE1rias \xE0 sua adequada amostragem;
III - responder\xE1 pela representatividade da amostra, em rela\xE7\xE3o ao lote ou volume do qual se
originou, a pessoa f\xEDsica ou jur\xEDdica que a coletou, mediante apresenta\xE7\xE3o do documento comprobat\xF3rio correspondente; e
IV - na classifica\xE7\xE3o de produtos importados e na classifica\xE7\xE3o de fiscaliza\xE7\xE3o, o detentor da
mercadoria fiscalizada, seu representante legal, seu transportador ou seu armazenador devem propiciar as condi\xE7\xF5es necess\xE1rias aos trabalhos de amostragem exigidas pela autoridade fiscalizadora.
\xA7 1\xBA A amostragem em produto ensacado dever\xE1 observar a seguinte metodologia:
I - a coleta de amostras para classifica\xE7\xE3o deve ser feita em, no m\xEDnimo, 10,00% (dez por
cento) do total de sacos que comp\xF5em o lote, escolhidos ao acaso, com um calador apropriado; *(Alterado(a) pelo(a) Instru\xE7\xE3o Normativa 57/2008/MAPA)* e II - a quantidade de produto coletada dever\xE1 ser homogeneizada, quarteada e reduzida em, no m\xEDnimo, 4 kg (quatro quilogramas) para compor, no m\xEDnimo, 4 (quatro) vias de amostras, constitu\xEDdas de, no m\xEDnimo, 1 kg (um quilograma) cada uma, que ser\xE3o representativas do lote.
\xA7 2\xBA A amostragem em produto a granel dever\xE1 observar a seguinte metodologia:
I - as amostras ser\xE3o retiradas utilizando-se um coletor de amostras e realizando-se v\xE1rias
repeti\xE7\xF5es em pontos uniformemente distribu\xEDdos no lote, de modo que essa amostra represente fielmente a totalidade do mesmo; e *(Alterado(a) pelo(a) Instru\xE7\xE3o Normativa*
*57/2008/MAPA)*
II - as amostras coletadas ser\xE3o homogeneizadas, reduzidas e acondicionadas em, no
m\xEDnimo, 4 (quatro) vias, com peso de, no m\xEDnimo, 1 kg (um quilograma) cada uma, que ser\xE3o representativas do lote.
\xA7 3\xBA A amostragem em produto embalado dever\xE1 observar o que segue:
I - a am\xEAndoa de cacau embalada e classificada deve apresentar
se homog\xEAnea quanto \xE0s suas especifica\xE7\xF5es de qualidade, apresenta\xE7\xE3o e identifica\xE7\xE3o; e
II - a amostragem no produto embalado ser\xE1 realizada retirando- se um n\xFAmero de pacotes
ou embalagens em quantidade suficiente para compor, no m\xEDnimo, 4 (quatro) vias de amostra de, no m\xEDnimo, 1 kg (um quilograma) cada uma, observando, ainda, que o conte\xFAdo dos pacotes ou embalagens extra\xEDdo dever\xE1 ser homogeneizado, quarteado e reduzido a, no m\xEDnimo 4 kg (quatro quilogramas) para compor, no m\xEDnimo, 4 (quatro) amostras de, no m\xEDnimo, 1 kg (um quilograma) cada uma, que ser\xE3o representativas do lote.

\xA7 4\xBA O MAPA poder\xE1 aprovar regras espec\xEDficas para amostragem da am\xEAndoa de cacau oriunda de importa\xE7\xE3o, para fins de classifica\xE7\xE3o com vistas a sua entrada no Pa\xEDs.
\xA7 5\xBA As amostras para classifica\xE7\xE3o extra\xEDdas conforme os procedimentos descritos anteriormente dever\xE3o ser devidamente acondicionadas, lacradas, identificadas e autenticadas, e ter\xE3o a seguinte destina\xE7\xE3o:
I - uma amostra de trabalho para a realiza\xE7\xE3o da classifica\xE7\xE3o;
II - uma amostra que ser\xE1 colocada \xE0 disposi\xE7\xE3o do interessado;
III - uma amostra para atender a eventual pedido de Arbitragem;
e IV - uma amostra destinada ao controle interno de qualidade por parte da Entidade Credenciada.
\xA7 6\xBA Quando a amostra for coletada e enviada pelo interessado, dever\xE3o ser observados os mesmos crit\xE9rios e procedimentos de amostragem previstos neste Regulamento T\xE9cnico.
\xA7 7\xBA Na classifica\xE7\xE3o de fiscaliza\xE7\xE3o, as amostras extra\xEDdas conforme os procedimentos descritos anteriormente dever\xE3o ser devidamente acondicionadas, lacradas, identificadas, autenticadas, e ter\xE3o a seguinte destina\xE7\xE3o:
I - uma amostra de trabalho para a realiza\xE7\xE3o da classifica\xE7\xE3o de fiscaliza\xE7\xE3o;
II - uma amostra que ser\xE1 colocada \xE0 disposi\xE7\xE3o do fiscalizado;
III - uma amostra para atender a eventual pedido de per\xEDcia;
e IV - uma amostra de seguran\xE7a, caso uma das vias anteriores seja inutilizada ou haja necessidade de an\xE1lises complementares.
\xA7 8\xBA A quantidade remanescente do processo de amostragem, homogeneiza\xE7\xE3o e quarteamento ser\xE1 recolocada no lote ou devolvida ao detentor do produto.
\xA7 9\xBA O classificador, a entidade credenciada ou o \xF3rg\xE3o de fiscaliza\xE7\xE3o n\xE3o ser\xE3o obrigados a recompor ou ressarcir o produto porventura danificado em fun\xE7\xE3o da execu\xE7\xE3o da amostragem e da classifica\xE7\xE3o.

Art. 13. A classifica\xE7\xE3o da am\xEAndoa de cacau seguir\xE1 o seguinte roteiro ou procedimento
operacional:
I - previamente \xE0 homogeneiza\xE7\xE3o e quarteamento da amostra de, no m\xEDnimo, 1 kg (um
quilograma), verificar cuidadosamente se na amostra h\xE1 presen\xE7a de insetos vivos, sementes t\xF3xicas, caracter\xEDsticas desclassificantes ou outros fatores que dificultem ou impe\xE7am a classifica\xE7\xE3o da am\xEAndoa de cacau, observando que, em caso positivo, deve-se emitir o Laudo de Classifica\xE7\xE3o e recomendar, previamente \xE0 classifica\xE7\xE3o, o expurgo, ou outra forma de controle ou beneficiamento do produto, conforme o caso, observando ainda os crit\xE9rios definidos no \xA7 4\xBA, do art. 5\xBA, deste Regulamento T\xE9cnico;
II - separar as mat\xE9rias estranhas, as impurezas e as am\xEAndoas quebradas utilizando uma
peneira de crivos circulares de 6,00 mm (seis mil\xEDmetros) de di\xE2metro, executando movimentos cont\xEDnuos e uniformes, completando o procedimento manualmente quando necess\xE1rio; pesar separadamente as mat\xE9rias estranhas, as impurezas e as am\xEAndoas quebradas, calcular os respectivos percentuais e anotar os valores encontrados, separadamente, no Laudo de Classifica\xE7\xE3o; *(Reda\xE7\xE3o dada pelo(a) Instru\xE7\xE3o Normativa*
*57/2008/MAPA)*
_______________________________________________ *Reda\xE7\xE3o(\xF5es) Anterior(es)*
III - determinar o teor de umidade do produto em equipamento apropriado seguindo as
recomenda\xE7\xF5es do fabricante e anotar o valor encontrado no Laudo de Classifica\xE7\xE3o;
*(Reda\xE7\xE3o dada pelo(a) Instru\xE7\xE3o Normativa 57/2008/MAPA)* _______________________________________________ *Reda\xE7\xE3o(\xF5es) Anterior(es)*

IV - a identifica\xE7\xE3o e separa\xE7\xE3o dos defeitos ser\xE1 efetuada da seguinte forma: as am\xEAndoas
mofadas, fuma\xE7a, danificadas por insetos, ard\xF3sia, germinadas e achatadas ser\xE3o verificadas em 300 (trezentas) am\xEAndoas retiradas aleatoriamente; nessas 300 (trezentas) am\xEAndoas, proceder a um corte longitudinal e realizar o teste de aroma; em seguida, identificar os defeitos colocando as am\xEAndoas na t\xE1bua de classifica\xE7\xE3o, calcular o percentual de cada defeito e anotar o valor encontrado no Laudo de Classifica\xE7\xE3o;
V - caso a am\xEAndoa de cacau apresente mais de um defeito, prevalecer\xE1 o defeito mais grave
para efeito de enquadramento em Tipo, considerando-se a seguinte escala de gravidade, em ordem decrescente:
mofadas, fuma\xE7a, danificadas por insetos, ard\xF3sia, germinadas e achatadas;
VI - com base nos percentuais de defeitos anotados no Laudo de Classifica\xE7\xE3o, definir o
Tipo da am\xEAndoa de cacau com base na Tabela 1 deste Regulamento T\xE9cnico, enquadrando o produto em fun\xE7\xE3o do pior Tipo encontrado;
VII - fazer constar, no Laudo e no Documento de Classifica\xE7\xE3o, os motivos que levaram o
produto a ser considerado como Fora de Tipo e Desclassificado, quando for o caso; e
VIII - revisar, datar, carimbar e assinar o Laudo e o Documento de Classifica\xE7\xE3o, devendo
constar obrigatoriamente o carimbo, o nome do classificador e o seu n\xFAmero de registro no
MAPA.

Art. 14. No acondicionamento e no modo de apresenta\xE7\xE3o da am\xEAndoa de cacau, deve ser
observado o estabelecido nos par\xE1grafos seguintes.
\xA7 1\xBA A am\xEAndoa de cacau poder\xE1 apresentar-se a granel, ensacada ou embalada.
\xA7 2\xBA As embalagens utilizadas no acondicionamento da am\xEAndoa de cacau dever\xE3o ser de materiais apropriados.
\xA7 3\xBA As especifica\xE7\xF5es quanto \xE0 confec\xE7\xE3o e \xE0 capacidade das embalagens devem estar de acordo com a legisla\xE7\xE3o espec\xEDfica vigente.

Art. 15. Na marca\xE7\xE3o ou rotulagem da am\xEAndoa de cacau, deve ser observado o estabelecido
nos par\xE1grafos seguintes.
\xA7 1\xBA As especifica\xE7\xF5es de qualidade do produto referente \xE0 marca\xE7\xE3o ou rotulagem dever\xE3o estar em conson\xE2ncia com o respectivo Documento de Classifica\xE7\xE3o.
\xA7 2\xBA No caso da am\xEAndoa de cacau embalada para a venda direta \xE0 alimenta\xE7\xE3o humana, a marca\xE7\xE3o ou rotulagem, uma vez observada a legisla\xE7\xE3o espec\xEDfica vigente, dever\xE1 conter ainda as seguintes informa\xE7\xF5es:
I - relativas \xE0 classifica\xE7\xE3o do produto: tipo;
II - relativas ao produto e ao seu respons\xE1vel:
a) denomina\xE7\xE3o de venda do produto;
b) identifica\xE7\xE3o do Lote, que ser\xE1 de responsabilidade do interessado; e c) nome empresarial, Cadastro Nacional de Pessoa Jur\xEDdica (CNPJ), endere\xE7o da empresa embaladora ou do respons\xE1vel pelo produto.
\xA7 3\xBA A marca\xE7\xE3o ou rotulagem da am\xEAndoa de cacau importada dever\xE1 apresentar as seguintes informa\xE7\xF5es:
I - pa\xEDs de origem;
II - lote; e
III - *(Exclu\xEDdo(a) pelo(a) Instru\xE7\xE3o Normativa 57/2008/MAPA)*
_______________________________________________ *Reda\xE7\xE3o(\xF5es) Anterior(es)*

\xA7 4\xBA A marca\xE7\xE3o ou rotulagem deve ser de f\xE1cil visualiza\xE7\xE3o e de dif\xEDcil remo\xE7\xE3o, assegurando informa\xE7\xF5es corretas, claras, precisas, ostensivas e em l\xEDngua portuguesa, cumprindo as exig\xEAncias previstas em legisla\xE7\xE3o espec\xEDfica vigente, devendo ainda atender o que segue:
I - a informa\xE7\xE3o relativa ao Tipo deve ser grafada em algarismo ar\xE1bico; e
II - a informa\xE7\xE3o relativa ao Tipo deve ser grafada em caracteres do mesmo tamanho,
segundo as dimens\xF5es especificadas para o peso l\xEDquido, em legisla\xE7\xE3o metrol\xF3gica vigente.

Art. 16. Os casos omissos e as d\xFAvidas porventura surgidas na aplica\xE7\xE3o deste Regulamento
T\xE9cnico ser\xE3o resolvidos pelo MAPA.
D.O.U., 24/06/2008 - Se\xE7\xE3o 1`,
  },
  {
    id: 'IN46-2010',
    texto: `MINIST\xC9RIO DA AGRICULTURA, PECU\xC1RIA E ABASTECIMENTO

GABINETE DO MINISTRO

INSTRU\xC7\xC3O NORMATIVA N\xBA 46, DE 27 DE DEZEMBRO DE 2010

O MINISTRO DE ESTADO DA AGRICULTURA, PECU\xC1RIA E ABASTECIMENTO, no uso da atribui\xE7\xE3o que lhe confere o art. 87, par\xE1grafo \xFAnico, inciso II, da Constitui\xE7\xE3o, tendo em vista o disposto no Decreto n\xBA 24.114, de 12 de abril de 1934, na Lei n\xBA 10.711, de 5 de agosto de 2003, no Decreto n\xBA 5.153, de 23 de julho de 2004, no Decreto n\xBA 5.741, de 30 de mar\xE7o de 2006, na Portaria MA n\xBA 386, de 15 de dezembro de 1980, e o que consta do Processo no 21000.001356/2010-11, resolve:

Art. 1\xBA Estabelecer os crit\xE9rios e procedimentos de preven\xE7\xE3o e controle das pragas Banana Streak V\xEDrus -
BSV e Cucumber mosaic v\xEDrus - CMV em mudas de bananeira visando \xE0 certifica\xE7\xE3o fitossanit\xE1ria com vistas \xE0 sua comercializa\xE7\xE3o, na forma desta Instru\xE7\xE3o Normativa.

Art. 2\xBA As pragas Banana Streak V\xEDrus - BSV (v\xEDrus das estrias da bananeira) e Cucumber mosaic v\xEDrus -
CMV (v\xEDrus do mosaico do pepino) em material de propaga\xE7\xE3o de bananeira (*Musa spp.*) t\xEAm o status de Praga N\xE3o Quarenten\xE1ria Regulamentada.
Par\xE1grafo \xFAnico. Considera-se Praga N\xE3o Quarenten\xE1ria Regulamentada aquela n\xE3o quarenten\xE1ria cuja presen\xE7a em plantas ou partes destas, para plantio, influi no seu uso proposto com impactos econ\xF4micos inaceit\xE1veis.

Art. 3\xBA As pessoas f\xEDsicas e jur\xEDdicas que exer\xE7am as atividades de produ\xE7\xE3o, com\xE9rcio, armazenamento,
importa\xE7\xE3o e exporta\xE7\xE3o de mudas de bananeira (*Musa spp.*) dever\xE3o estar inscritas no Registro Nacional de Sementes e Mudas - RENASEM.

Art. 4\xBA O \xF3rg\xE3o estadual de defesa sanit\xE1ria vegetal dever\xE1 inscrever os viveiros produtores de mudas de
bananeiras, a pedido do respons\xE1vel t\xE9cnico, habilitando-os \xE0 certifica\xE7\xE3o fitossanit\xE1ria de origem.

Art. 5\xBA As plantas matrizes de bananeira dever\xE3o ser mantidas em ambientes protegidos do ataque de
insetos sugadores, como pulg\xF5es e cochonilhas, e isentos de esp\xE9cies hospedeiras do *BSV e CMV*.

Art. 6\xBA As plantas matrizes de bananeira dever\xE3o ser submetidas a exame de Polymerase Chain Reaction
(PCR) para a detec\xE7\xE3o de BSV e de Reverse Transcriptase - Polymerase Chain Reaction (RT-PCR) para
CMV.

Art. 7\xBA As plantas matrizes de bananeira dever\xE3o ser identificadas com c\xF3digos alfanum\xE9ricos de que
constem obrigatoriamente a cultivar e um n\xFAmero identificador no \xE2mbito do estabelecimento.

Art. 8\xBA Os lotes de material de propaga\xE7\xE3o produzidos dever\xE3o ser identificados com c\xF3digos
alfanum\xE9ricos de que constem obrigatoriamente o(s) c\xF3digo(s) da(s) planta(s) matriz(es) e a data da produ\xE7\xE3o.
\xA7 1\xBA As mudas dever\xE3o estar identificadas com, no m\xEDnimo, o c\xF3digo do lote e nome ou n\xFAmero do registro do estabelecimento produtor.
\xA7 2\xBA A identifica\xE7\xE3o de que trata o \xA7 1\xBA deste artigo poder\xE1 ser feita individualmente ou coletivamente quando acondicionadas em embalagens.

Art. 9\xBA Cada lote dever\xE1 ser submetido a exame para a confirma\xE7\xE3o da isen\xE7\xE3o de infec\xE7\xE3o de BSV e
CMV por meio de teste de PCR e RT-PCR, respectivamente, observando-se o seguinte:
I - o respons\xE1vel t\xE9cnico pelo estabelecimento dever\xE1 realizar amostragem em, no m\xEDnimo, 0,25 % (zero
v\xEDrgula vinte e cinco por cento) das mudas do lote, observando-se o n\xFAmero m\xEDnimo de 3 (tr\xEAs) mudas;

II - dever\xE1 ser coletada parte das folhas mais novas da muda para a realiza\xE7\xE3o do exame;
III - os exames dever\xE3o ser realizados em laborat\xF3rios oficiais ou credenciados, pertencentes \xE0 Rede
Nacional de Laborat\xF3rios Agropecu\xE1rios do Sistema Unificado de Aten\xE7\xE3o \xE0 Sanidade Agropecu\xE1ria.

Art. 10. Para cada lote produzido e cujos exames tiverem resultados negativos, o respons\xE1vel t\xE9cnico pelo
estabelecimento dever\xE1 emitir um Certificado Fitossanit\xE1rio de Origem (CFO) com as seguintes informa\xE7\xF5es:
I - Declara\xE7\xE3o Adicional: "A partida encontra-se livre dos v\xEDrus Banana streak virus (BSV) e Cucumber
mosaic virus (CMV), de acordo com o laudo laboratorial [n\xBA do laudo], [nome do laborat\xF3rio] - [munic\xEDpio e UF de localiza\xE7\xE3o do laborat\xF3rio]";
II - c\xF3digo identificador do lote;
III - n\xFAmero do registro ou inscri\xE7\xE3o do estabelecimento produtor no \xF3rg\xE3o estadual de defesa sanit\xE1ria
vegetal; e
IV - n\xFAmero de inscri\xE7\xE3o no RENASEM.

Art. 11. O estabelecimento produtor dever\xE1 manter registro, por 5 (cinco) anos, de todos os lotes
produzidos, bem como arquivo dos laudos laboratoriais e certificados fitossanit\xE1rios de origem emitidos neste per\xEDodo.
\xA7 1\xBA O registro dever\xE1 conter no m\xEDnimo as seguintes informa\xE7\xF5es:
I - identifica\xE7\xE3o do lote;
II - identifica\xE7\xE3o da planta matriz;
III - tamanho do lote (n\xFAmero de mudas produzidas);
IV - n\xFAmero do laudo laboratorial e nome do laborat\xF3rio que emitiu;
V - n\xFAmero do CFO e/ou CFOC;
VI - destino das mudas (nome e munic\xEDpio do comprador);
VII - data da produ\xE7\xE3o do lote.
\xA7 2\xBA O registro poder\xE1 ser feito em meio eletr\xF4nico, desde que c\xF3pia em papel, assinada pelo respons\xE1vel t\xE9cnico, esteja dispon\xEDvel para a fiscaliza\xE7\xE3o quando solicitada.

Art. 12. O Minist\xE9rio da Agricultura, Pecu\xE1ria e Abastecimento (MAPA) dever\xE1 fiscalizar os viveiros
produtores de mudas de bananeira, pertencentes \xE0s pessoas f\xEDsicas e jur\xEDdicas inscritas no RENASEM.
\xA7 1\xBA O MAPA poder\xE1 descentralizar, por conv\xEAnio ou acordo com entes p\xFAblicos, a execu\xE7\xE3o do servi\xE7o de fiscaliza\xE7\xE3o de que trata esta Instru\xE7\xE3o Normativa, desde que observado o procedimento descrito no art. 122 do Decreto n\xBA 5.153, de 23 de julho de 2004.
\xA7 2\xBA As a\xE7\xF5es decorrentes da delega\xE7\xE3o de compet\xEAncia prevista no \xA7 1\xBA deste artigo ficam sujeitas a auditorias regulares, a serem executadas pelo MAPA, nos termos do art. 123 do Decreto n\xBA 5.153, de 2004 .
\xA7 3\xBA Anualmente o \xF3rg\xE3o fiscalizador dever\xE1 coletar amostras, que ser\xE3o enviadas para laborat\xF3rio oficial ou credenciado pertencente \xE0 Rede Nacional de Laborat\xF3rios Agropecu\xE1rios do Sistema Unificado de Aten\xE7\xE3o \xE0 Sanidade Agropecu\xE1ria, para a realiza\xE7\xE3o de diagn\xF3stico fitossanit\xE1rio de infec\xE7\xE3o por BSV e

CMV, por meio de teste de PCR e RT-PCR, respectivamente.
\xA7 4\xBA Os procedimentos para a realiza\xE7\xE3o de amostragem pelo MAPA ser\xE3o os mesmos a serem adotados pelo respons\xE1vel t\xE9cnico do estabelecimento, estabelecidos no art. 9\xBA desta Instru\xE7\xE3o Normativa.
\xA7 5\xBA Os lotes e matrizes que apresentarem contamina\xE7\xE3o por qualquer dos v\xEDrus objeto desta Instru\xE7\xE3o Normativa ser\xE3o apreendidos e condenados, conforme previsto no art. 195, incisos III e IV, do Decreto n\xBA 5.153, de 2004.

Art. 13. Somente ser\xE1 permitido o tr\xE2nsito de mudas de bananeira quando emitida a Permiss\xE3o de Tr\xE2nsito
de Vegetais.
\xA7 1\xBA A Declara\xE7\xE3o Adicional do Certificado Fitossanit\xE1rio de Origem ou Certificado Fitossanit\xE1rio de Origem Consolidado dever\xE1 constar da Permiss\xE3o de Tr\xE2nsito de Vegetais.
\xA7 2\xBA As mudas de bananeira que transitarem em desrespeito \xE0s determina\xE7\xF5es deste artigo ficam sujeitas \xE0 intercepta\xE7\xE3o, caso em que ser\xE1 determinado o retorno das mesmas ao local de origem e comunicado ao \xF3rg\xE3o fiscalizador da produ\xE7\xE3o e com\xE9rcio, para ado\xE7\xE3o das provid\xEAncias cab\xEDveis.

Art. 14. Fica proibido o com\xE9rcio de mudas de bananeira produzidas com inobserv\xE2ncia do estabelecido
nesta Instru\xE7\xE3o Normativa.

Art. 15. Esta Instru\xE7\xE3o Normativa entra em vigor 120 (cento e vinte) dias ap\xF3s a data de sua publica\xE7\xE3o.
WAGNER ROSSI
D.O.U., 28/12/2010 - Se\xE7\xE3o 1`,
  },
  {
    id: 'PORT1257-2025',
    texto: `\xD3RG\xC3O: MINIST\xC9RIO DA AGRICULTURA E PECU\xC1RIA/SECRETARIA DE DEFESA AGROPECU\xC1RIA

PORTARIA SDA/MAPA N\xBA 1.257, DE 19 DE MAR\xC7O DE 2025

20/03/2025, 11:43 PORTARIA SDA/MAPA N\xBA 1.257, DE 19 DE MAR\xC7O DE 2025 - PORTARIA SDA/MAPA N\xBA 1.257, DE 19 DE MAR\xC7O DE 2025 - DOU - Imprensa Nacional

abril de 2006, e o que consta do Processo n\xBA 21008.000419/2024-47, resolve:

Art. 1\xBA Fica institu\xEDdo o Programa Nacional de Preven\xE7\xE3o e Controle da Vassoura-de-Bruxa da Mandioca - Ceratobasidium theobromae Rhizoctonia theobromae - PVBM.

Art. 2\xBA O Programa Nacional de Preven\xE7\xE3o e Controle da Vassoura-de-Bruxa da Mandioca -
PVBM visa ao fortalecimento da cadeia produtiva da mandioca, estabelecendo os crit\xE9rios e procedimentos para a preven\xE7\xE3o e o controle da praga Rhizoctonia theobromae.

Art. 3\xBA Dever\xE3o ser realizados levantamentos de detec\xE7\xE3o anuais nas Unidades Federativas sem a ocorr\xEAncia da praga, pelo \xD3rg\xE3o Estadual ou Distrital de Defesa Sanit\xE1ria Vegetal, conforme procedimentos e metas estipulados pelo Departamento de Sanidade Vegetal e Insumos Agr\xEDcolas da SECRETARIA DE DEFESA AGROPECU\xC1RIA DO MINIST\xC9RIO DA AGRICULTURA E PECU\xC1RIA.
\xA7 1\xBA Os levantamentos de detec\xE7\xE3o nas Unidades Federativas com a ocorr\xEAncia da praga, em munic\xEDpios sem ocorr\xEAncia, devem seguir os procedimentos e metas estipulados pelo Departamento de Sanidade Vegetal e Insumos Agr\xEDcolas.
\xA7 2\xBA O Departamento de Sanidade Vegetal e Insumos Agr\xEDcolas publicar\xE1, em Manual de Procedimentos espec\xEDfico, a\xE7\xF5es adicionais para o cumprimento do programa.

Art. 4\xBA Os levantamentos de delimita\xE7\xE3o dever\xE3o ser realizados em caso de detec\xE7\xE3o de
Rhizoctonia theobromae, pelo \xD3rg\xE3o Estadual ou Distrital de Defesa Sanit\xE1ria Vegetal, em todos os munic\xEDpios lim\xEDtrofes \xE0queles com ocorr\xEAncia da praga na mesma Unidade Federativa, conforme procedimentos e metas estipulados pelo Departamento de Sanidade Vegetal e Insumos Agr\xEDcolas.
Par\xE1grafo \xFAnico. No caso de detec\xE7\xE3o de novos focos, o levantamento ser\xE1 ampliado para os demais munic\xEDpios lim\xEDtrofes.

Art. 5\xBA A certifica\xE7\xE3o fitossanit\xE1ria de origem de plantas e partes de plantas hospedeiras da praga \xE9 dispensada em unidades de produ\xE7\xE3o e unidades de consolida\xE7\xE3o localizadas em Unidade Federativa sem ocorr\xEAncia da praga.
\xA7 1\xBA A Permiss\xE3o de Tr\xE2nsito de Vegetais - PTV fica dispensada quando as plantas e partes de plantas hospedeiras da praga se originarem de Unidade Federativa sem ocorr\xEAncia de Rhizoctonia theobromae.
\xA7 2\xBA A Permiss\xE3o de Tr\xE2nsito de Vegetais - PTV \xE9 necess\xE1ria no caso de a partida de plantas e partes de plantas hospedeiras da praga transitar em \xE1reas com ocorr\xEAncia, devendo este:
I - ser transportado em embalagens lacradas; e
II - ser lacrado pelo Respons\xE1vel T\xE9cnico ou pelo \xD3rg\xE3o Estadual, ou Distrital de Defesa Sanit\xE1ria Vegetal na Unidade Federativa de origem e o n\xFAmero do lacre informado na Permiss\xE3o de Tr\xE2nsito de Vegetais - PTV.

Art. 6\xBA O tr\xE2nsito interestadual de plantas e partes de plantas hospedeiras da praga, produzidas em Unidades Federativas com ocorr\xEAncia da praga, oriundo de munic\xEDpios sem ocorr\xEAncia, dever\xE1 ser amparado por Permiss\xE3o de Tr\xE2nsito de Vegetais - PTV, baseada em Certificado Fitossanit\xE1rio de Origem - CFO ou Certificado Fitossanit\xE1rio de Origem Consolidado - CFOC.
\xA7 1\xBA Na Permiss\xE3o de Tr\xE2nsito de Vegetais - PTV de que trata o caput dever\xE1 conter a seguinte declara\xE7\xE3o adicional "A partida \xE9 origin\xE1ria de munic\xEDpio sem ocorr\xEAncia de Rhizoctonia theobromae, em Unidade Federativa com ocorr\xEAncia, e encontra-se livre da praga".
\xA7 2\xBA A Permiss\xE3o de Tr\xE2nsito de Vegetais - PTV \xE9 necess\xE1ria no caso de a partida de plantas e partes de plantas hospedeiras da praga transitar em \xE1reas com ocorr\xEAncia, devendo esta:
I - ser transportada em embalagens lacradas; e
II - ser lacrada pelo Respons\xE1vel T\xE9cnico ou pelo \xD3rg\xE3o Estadual, ou Distrital de Defesa Sanit\xE1ria Vegetal no munic\xEDpio de origem e o n\xFAmero do lacre informado na Permiss\xE3o de Tr\xE2nsito de Vegetais -
PTV.

Art. 7\xBA Fica proibido o tr\xE2nsito de plantas e partes de plantas de esp\xE9cies hospedeiras da praga oriundas de munic\xEDpios com ocorr\xEAncia de Rhizoctonia theobromae.

Art. 8\xBA O Minist\xE9rio da Agricultura e Pecu\xE1ria exercer\xE1 auditoria, supervis\xE3o, avalia\xE7\xE3o e coordena\xE7\xE3o das a\xE7\xF5es desenvolvidas pelo \xD3rg\xE3o Estadual ou Distrital de Defesa Sanit\xE1ria Vegetal.

Art. 9\xBA O \xD3rg\xE3o Estadual ou Distrital de Defesa Sanit\xE1ria Vegetal dever\xE1 encaminhar \xE0
Superintend\xEAncia de Agricultura e Pecu\xE1ria o relat\xF3rio consolidado relativo ao Programa Nacional de Preven\xE7\xE3o e Controle da Vassoura-de-Bruxa da Mandioca - PVBM contendo as a\xE7\xF5es realizadas e os resultados obtidos at\xE9 o dia 31 de janeiro do ano subsequente ou quando solicitado pelo Departamento de Sanidade Vegetal e Insumos Agr\xEDcolas.
\xA7 1\xBA O relat\xF3rio consolidado de que trata o caput dever\xE1 discriminar os munic\xEDpios com ocorr\xEAncia de Rhizoctonia theobromae.
\xA7 2\xBA A Superintend\xEAncia de Agricultura e Pecu\xE1ria dever\xE1 emitir parecer t\xE9cnico conclusivo e encaminh\xE1-lo ao Departamento de Sanidade Vegetal e Insumos Agr\xEDcolas em at\xE9 trinta dias ap\xF3s o recebimento.

Art. 10. Esta Portaria entra em vigor na data de sua publica\xE7\xE3o.
ALLAN ROG\xC9RIO DE ALVARENGA
Este conte\xFAdo n\xE3o substitui o publicado na vers\xE3o certificada.
https://www.in.gov.br/en/web/dou/-/portaria-sda/mapa-n-1.257-de-19-de-marco-de-2025-618705995 2/2`,
  },
  {
    if: 'PORT1326-2025',
    texto: `**Minist\xE9rio da Agricultura e Pecu\xE1ria**
**Secretaria de Defesa Agropecu\xE1ria**
**PORTARIA SDA/MAPA N\xBA 1.326, DE 4 DE JULHO DE 2025**

*Institui o Programa Nacional de Preven\xE7\xE3o e Controle \xE0 doen\xE7a denominada Huanglongbing - PNCHLB e os crit\xE9rios e procedimentos para classifica\xE7\xE3o e manuten\xE7\xE3o do status fitossanit\xE1rio das Unidades Federativas e as medidas de preven\xE7\xE3o e controle da doen\xE7a, no territ\xF3rio nacional.*

O SECRET\xC1RIO DE DEFESA AGROPECU\xC1RIA, DO MINIST\xC9RIO DA AGRICULTURA E PECU\xC1RIA, no uso das atribui\xE7\xF5es que lhe conferem os art. 22 e 49 do Anexo I do Decreto n\xBA 11.332, de 1\xBA de janeiro de 2023, tendo em vista o disposto no Decreto n\xBA 24.114, de 12 de abril de 1934, no Decreto n\xBA 5.741, de 30 de mar\xE7o de 2006, no Decreto n\xBA 5.759, de 17 de abril de 2006, e o que consta do Processo n\xBA 21000.046036/2024-51, resolve:

### CAP\xCDTULO I
#### DAS DISPOSI\xC7\xD5ES GERAIS

**Art. 1\xBA** Fica institu\xEDdo o Programa Nacional de Preven\xE7\xE3o e Controle \xE0 doen\xE7a denominada Huanglongbing - PNCHLB, no \xE2mbito do Minist\xE9rio da Agricultura e Pecu\xE1ria.

**Art. 2\xBA** O PNCHLB tem por objetivo estabelecer as medidas fitossanit\xE1rias relativas \xE0 vigil\xE2ncia, \xE0 conten\xE7\xE3o e ao controle da praga quarenten\xE1ria presente *Candidatus* Liberibacter americanus e *Candidatus* Liberibacter asiaticus, bact\xE9rias causadoras da doen\xE7a denominada Huanglongbing - HLB, e do seu inseto vetor *Diaphorina citri*.

**Art. 3\xBA** As medidas de preven\xE7\xE3o e controle do HLB e de seu inseto vetor, em todo o territ\xF3rio nacional, em im\xF3veis com presen\xE7a de plantas hospedeiras, para fins comerciais ou n\xE3o, situados em zona rural ou urbana, ser\xE3o executadas conforme o disposto nesta Portaria.

**Art. 4\xBA** Os crit\xE9rios e procedimentos estabelecidos nesta Portaria constituem o padr\xE3o m\xEDnimo, podendo ser complementados pelos \xD3rg\xE3os Estaduais de Defesa Sanit\xE1ria Vegetal - OEDSV das Unidades Federativas - UF.

**Art. 5\xBA** Para efeito desta Portaria, entende-se por:
I - Unidade Federativa sem ocorr\xEAncia de HLB: aquela na qual n\xE3o h\xE1 registro oficial da presen\xE7a da praga *Candidatus* Liberibacter americanus ou *Candidatus* Liberibacter asiaticus;
II - Unidade Federativa com ocorr\xEAncia de HLB: aquela na qual h\xE1 registro oficial da presen\xE7a da praga *Candidatus* Liberibacter americanus ou *Candidatus* Liberibacter asiaticus;
III - Estabelecimento produtor de material de propaga\xE7\xE3o: local onde se produz mudas, borbulhas ou sementes de plantas hospedeiras de HLB;
IV - Planta hospedeira: todas as esp\xE9cies e variedades bot\xE2nicas da subfam\xEDlia *Aurantioideae*, da fam\xEDlia *Rutaceae*, que sejam suscept\xEDveis ao HLB ou ao seu inseto vetor;
V - Vetor: inseto da esp\xE9cie *Diaphorina citri*, capaz de transmitir as bact\xE9rias causadoras do HLB.

**Art. 6\xBA** O PNCHLB \xE9 coordenado pelo Departamento de Sanidade Vegetal e Insumos Agr\xEDcolas da Secretaria de Defesa Agropecu\xE1ria do Minist\xE9rio da Agricultura e Pecu\xE1ria e executado, com responsabilidades compartilhadas, pelos \xD3rg\xE3os Estaduais de Defesa Sanit\xE1ria Vegetal - OEDSV, sob supervis\xE3o das Superintend\xEAncias de Agricultura e Pecu\xE1ria - SFA das Unidades Federativas.

### CAP\xCDTULO II
#### DO STATUS FITOSSANIT\xC1RIO DAS UNIDADES FEDERATIVAS

**Art. 7\xBA** O status fitossanit\xE1rio de uma Unidade Federativa em rela\xE7\xE3o ao HLB ser\xE1 declarado e atualizado pelo Departamento de Sanidade Vegetal e Insumos Agr\xEDcolas, com base nos resultados de levantamentos fitossanit\xE1rios oficiais.

**Art. 8\xBA** Para a manuten\xE7\xE3o do status fitossanit\xE1rio de Unidade Federativa sem ocorr\xEAncia de HLB, o OEDSV dever\xE1:
I - realizar levantamentos fitossanit\xE1rios anuais de detec\xE7\xE3o da praga em \xE1reas representativas da produ\xE7\xE3o de citros na UF;
II - realizar o monitoramento do inseto vetor *Diaphorina citri* em \xE1reas de risco de introdu\xE7\xE3o da praga;
III - manter atualizado o cadastro georreferenciado de propriedades produtoras de citros e de estabelecimentos produtores de material de propaga\xE7\xE3o;
IV - fiscalizar o tr\xE2nsito de plantas hospedeiras e seus produtos.

**Art. 9\xBA** A confirma\xE7\xE3o oficial da ocorr\xEAncia de HLB em Unidade Federativa sem ocorr\xEAncia implicar\xE1 na altera\xE7\xE3o do seu status fitossanit\xE1rio para Unidade Federativa com ocorr\xEAncia de HLB.

### CAP\xCDTULO III
#### DAS MEDIDAS DE PREVEN\xC7\xC3O E CONTROLE

**Art. 10.** Em Unidades Federativas com ocorr\xEAncia de HLB, o OEDSV dever\xE1 delimitar as \xE1reas com presen\xE7a da praga e estabelecer medidas de conten\xE7\xE3o para evitar sua dispers\xE3o para \xE1reas sem ocorr\xEAncia.

**Art. 11.** \xC9 obrigat\xF3ria a inspe\xE7\xE3o de pomares de citros, pelo produtor, para identifica\xE7\xE3o e elimina\xE7\xE3o de plantas com sintomas de HLB.

**Art. 12.** O produtor dever\xE1 realizar o controle do inseto vetor *Diaphorina citri* nos pomares de citros, seguindo as recomenda\xE7\xF5es t\xE9cnicas de controle integrado.

### CAP\xCDTULO IV
#### DA PRODU\xC7\xC3O E TR\xC2NSITO DE MATERIAL DE PROPAGA\xC7\xC3O

**Art. 13.** A produ\xE7\xE3o de material de propaga\xE7\xE3o de plantas hospedeiras de HLB dever\xE1 ser realizada em ambiente protegido, em conformidade com as normas espec\xEDficas estabelecidas pelo Minist\xE9rio da Agricultura e Pecu\xE1ria.

**Art. 14.** O tr\xE2nsito de material de propaga\xE7\xE3o de plantas hospedeiras de HLB entre Unidades Federativas dever\xE1 estar acompanhado da Permiss\xE3o de Tr\xE2nsito de Vegetais - PTV, fundamentada em Certificado Fitossanit\xE1rio de Origem - CFO ou Certificado Fitossanit\xE1rio de Origem Consolidado - CFOC.

**Art. 15.** O tr\xE2nsito de mudas e borbulhas de citros de Unidade Federativa com ocorr\xEAncia de HLB para Unidade Federativa sem ocorr\xEAncia de HLB somente ser\xE1 permitido se o material for origin\xE1rio de estabelecimento produtor em ambiente protegido e apresentar laudo laboratorial negativo para HLB.

### CAP\xCDTULO V
#### DO TR\xC2NSITO DE FRUTOS

**Art. 16.** O tr\xE2nsito de frutos de citros de Unidade Federativa com ocorr\xEAncia de HLB para Unidade Federativa sem ocorr\xEAncia de HLB \xE9 permitido, desde que os frutos estejam desprovidos de ramos e folhas e tenham passado por processo de beneficiamento e higieniza\xE7\xE3o.

### CAP\xCDTULO VI
#### DAS DISPOSI\xC7\xD5ES FINAIS

**Art. 17.** O descumprimento das medidas estabelecidas nesta Portaria sujeitar\xE1 o infrator \xE0s san\xE7\xF5es administrativas, civis e penais cab\xEDveis.

**Art. 18.** Fica revogada a Portaria SDA/MAPA n\xBA 317, de 21 de maio de 2021.

**Art. 19.** Esta Portaria entra em vigor na data de sua publica\xE7\xE3o.

**CARLOS GOULART**

Publicado em: 07/07/2025 | Edi\xE7\xE3o: 128 | Se\xE7\xE3o: 1 | P\xE1gina: 45`,
  },
  {
    id: 'PORT1503-2025',
    texto: `## PORTARIA SDA/MAPA N\xBA 1.503, DE 19 DE DEZEMBRO DE 2025

Declara os munic\xEDpios de Itacoatiara, Manaus e Rio Preto da Eva, no Amazonas, como \xC1rea Sob Quarentena para a praga quarenten\xE1ria presente *Bactrocera carambolae* (mosca-da-carambola).

O SECRET\xC1RIO DE DEFESA AGROPECU\xC1RIA, DO MINIST\xC9RIO DA AGRICULTURA E PECU\xC1RIA, no uso das atribui\xE7\xF5es que lhe conferem o art. 23 e o art. 48 do anexo I ao Decreto n\xBA 12.642, de 1\xBA de outubro de 2025, e tendo em vista o disposto na Lei n\xBA 1.283, de 18 de dezembro de 1950, na Lei n\xBA 7.889, de 23 de novembro de 1989, no Decreto n\xBA 9.013, de 29 de mar\xE7o de 2017, e o que consta do Processo n\xBA 21000.091863/2025-14, resolve:

Art. 1\xBA Fica declarada como \xC1rea Sob Quarentena para a praga quarenten\xE1ria presente *Bactrocera carambolae*, no estado do Amazonas, os munic\xEDpios de Itacoatiara, Manaus e Rio Preto da Eva.

Art. 2\xBA Estabelecer como Zona Tamp\xE3o para *Bactrocera carambolae*, no estado do Amazonas, os munic\xEDpios de Manacapuru, Parintins, Tef\xE9, Coari, Tabatinga, Iranduba, Mau\xE9s, Humait\xE1, Manicor\xE9, S\xE3o Gabriel da Cachoeira, L\xE1brea, Autazes, Benjamin Constant, Boca do Acre, Eirunep\xE9, S\xE3o Paulo de Oliven\xE7a, Borba, Barreirinha, Presidente Figueiredo, Careiro, Carauari, Santo Ant\xF4nio do I\xE7\xE1, Fonte Boa, Juta\xED, Nova Olinda do Norte, Boa Vista do Ramos, Urucurituba, Ipixuna, Novo Aripuan\xE3, Codaj\xE1s, Beruri, Apu\xED, Nhamund\xE1, Tapau\xE1, Careiro da V\xE1rzea, Tonantins, Pauini, Urucar\xE1, Barcelos, Canutama, Anori, Envira, Alvar\xE3es, Novo Air\xE3o, Manaquiri, Atalaia do Norte, Mara\xE3, Uarini, Caapiranga, Guajar\xE1, Santa Isabel do Rio Negro, Silves, S\xE3o Sebasti\xE3o do Uatum\xE3, Itamarati, Amatur\xE1, Juru\xE1, Itapiranga, Anam\xE3 e Japur\xE1.

Art. 3\xBA Esta Portaria entra em vigor na data da sua publica\xE7\xE3o.

Este conte\xFAdo n\xE3o substitui o publicado na vers\xE3o certificada.

CARLOS GOULART

https://www.in.gov.br/en/web/dou/-/portaria-sda/mapa-n-1.503-de-19-de-dezembro-de-2025-676919455`,
  },
  {
    id: 'PORT1512-2026',
    texto: `\xD3RG\xC3O: MINIST\xC9RIO DA AGRICULTURA E PECU\xC1RIA/SECRETARIA DE DEFESA AGROPECU\xC1RIA

PORTARIA SDA/MAPA N\xBA 1.512, DE 7 DE JANEIRO DE 2026

08/01/2026, 08:28 PORTARIA SDA/MAPA N\xBA 1.512, DE 7 DE JANEIRO DE 2026 - PORTARIA SDA/MAPA N\xBA 1.512, DE 7 DE JANEIRO DE 2026 - DOU - Imprensa Nacional

21000.036807/2018-98, resolve:

Art. 1\xBA A Portaria SDA/MAPA n\xBA 1.443, de 05 de novembro de 2025, passa a vigorar com as
seguintes altera\xE7\xF5es:
"Art. 1\xBA Fica inclu\xEDdo o Estado do Par\xE1, munic\xEDpios de Almeirim, \xD3bidos e Oriximin\xE1, na \xE1rea da Terra Ind\xEDgena do Parque do Tumucumaque, como Unidade da Federa\xE7\xE3o com ocorr\xEAncia da praga quarenten\xE1ria presente Rhizoctonia theobromae ( Ceratobasidium theobromae )." (NR)

Art. 2\xBA Esta Portaria entra em vigor na data de sua publica\xE7\xE3o.
CARLOS GOULART
Este conte\xFAdo n\xE3o substitui o publicado na vers\xE3o certificada.
https://in.gov.br/web/dou/-/portaria-sda/mapa-n-1.512-de-7-de-janeiro-de-2026-679863714 1/1`,
  },
  {
    id: 'PORT627-2023',
    texto: `\xD3RG\xC3O: MINIST\xC9RIO DA AGRICULTURA E PECU\xC1RIA/GABINETE DO MINISTRO

PORTARIA MAPA N\xBA 627, DE 10 DE NOVEMBRO DE 2023

02/05/2024, 15:42 PORTARIA MAPA N\xBA 627, DE 10 DE NOVEMBRO DE 2023 - PORTARIA MAPA N\xBA 627, DE 10 DE NOVEMBRO DE 2023 - DOU - Imprensa Nacional

O MINISTRO DE ESTADO DA AGRlCULTURA E PECU\xC1RIA, no uso da atribui\xE7\xE3o que lhe confere o art. 87, par\xE1grafo \xFAnico, inciso II, da Constitui\xE7\xE3o, tendo em vista o disposto na Lei n\xBA 12.873, de 24 de outubro de 2013, no Decreto n\xBA 8.133, de 28 de outubro de 2013, no Decreto n\xBA 5.741, de 30 de mar\xE7o de 2006, na Instru\xE7\xE3o Normativa n\xBA 28, de 20 de julho de 2017, e o que consta do Processo n\xBA 21000.077540/2023-56, resolve:

Art. 1\xBA Declarar estado de emerg\xEAncia fitossanit\xE1ria relativo ao risco iminente de dispers\xE3o da
praga quarenten\xE1ria presente *Bactrocera carambolae* (mosca-da-carambola) nos estados do Amap\xE1, Amazonas, Par\xE1 e Roraima.
Par\xE1grafo \xFAnico. As diretrizes e medidas a serem adotadas ser\xE3o indicadas em Ato do Ministro da Agricultura e Pecu\xE1ria.

Art. 2\xBA O prazo de vig\xEAncia da emerg\xEAncia fitossanit\xE1ria previsto no art. 1\xBA ser\xE1 de 1 (um) ano, a
contar da data de publica\xE7\xE3o desta Portaria.

Art. 3\xBA Esta Portaria entra em vigor na data de sua publica\xE7\xE3o.
CARLOS F\xC1VARO
Este conte\xFAdo n\xE3o substitui o publicado na vers\xE3o certificada.
https://www.in.gov.br/en/web/dou/-/portaria-mapa-n-627-de-10-de-novembro-de-2023-522497468 1/1`,
  },
  {
    id: 'PORT703-2022',
    texto: `\xD3RG\xC3O: MINIST\xC9RIO DA AGRICULTURA, PECU\xC1RIA E ABASTECIMENTO/SECRETARIA DE DEFESA AGROPECU\xC1RIA

PORTARIA SDA N\xBA 703, DE 21 DE NOVEMBRO DE 2022

22/11/2022 09:17 PORTARIA SDA N\xBA 703, DE 21 DE NOVEMBRO DE 2022 - PORTARIA SDA N\xBA 703, DE 21 DE NOVEMBRO DE 2022 - DOU - Imprensa Nacional

112, de 11 de dezembro de 2020 e o que consta do Processo n\xBA 21000.053542/2021-98, resolve:

Art. 1\xBA Declarar os munic\xEDpios de Cruzeiro do Sul, M\xE2ncio Lima, Rodrigues Alves, Marechal
Thaumaturgo e Porto Walter no estado do Acre e todo o estado do Amazonas, como \xE1rea sob quarentena para a praga quarenten\xE1ria ausente *Moniliophthora roreri*.

Art. 2\xBA Fica proibido o tr\xE2nsito de materiais vegetais das esp\xE9cies do g\xEAnero Theobroma e
Herrania e outras hospedeiras de *Moniliophthora roreri* provenientes da \xE1rea sob quarentena para as demais unidades da federa\xE7\xE3o at\xE9 que seja declarada a erradica\xE7\xE3o dos focos confirmados da praga.

Art. 3\xBA Fica revogada a Portaria SDA n\xBA 535, de 18 de fevereiro de 2022, publicada no Di\xE1rio
Oficial da Uni\xE3o, Edi\xE7\xE3o 36, Se\xE7\xE3o 1, pagina 4, de 21 de fevereiro de 2022.

Art. 4\xBA Esta Portaria entra em vigor na data da sua publica\xE7\xE3o.
JOS\xC9 GUILHERME TOLLSTADIUS LEAL
Este conte\xFAdo n\xE3o substitui o publicado na vers\xE3o certificada.
https://in.gov.br/web/dou/-/portaria-sda-n-703-de-21-de-novembro-de-2022-444937315 1/1`,
  },
  {
    id: 'PORT734-2024',
    texto: `MINIST\xC9RIO DA AGRICULTURA E PECU\xC1RIA

GABINETE DO MINISTRO

PORTARIA MAPA N\xBA 734, DE 13 DE NOVEMBRO DE 2024

O MINISTRO DE ESTADO DA AGRICULTURA E PECU\xC1RIA, no uso da atribui\xE7\xE3o que lhe confere o art. 87, par\xE1grafo \xFAnico, inciso II, da Constitui\xE7\xE3o, e tendo em vista o disposto na Lei n\xBA 12.873, de 24 de outubro de 2013, na Lei n\xBA 14.989, de 25 de setembro de 2024, no Decreto n\xBA 8.133, de 28 de outubro de 2013, no Decreto n\xBA 5.741, de 30 de mar\xE7o de 2006, na Instru\xE7\xE3o Normativa n\xBA 28, de 20 de julho de 2017, e o que consta do Processo n\xBA 21000.077540/2023-56, resolve:

Art. 1\xBA Fica prorrogado, por mais um ano, o estado de emerg\xEAncia fitossanit\xE1ria, relativo ao risco iminente de dispers\xE3o da praga quarenten\xE1ria
presente *Bactrocera carambolae* (mosca-dacarambola), nos estados do Amap\xE1, Amazonas, Par\xE1 e Roraima, declarado pela Portaria MAPA n\xBA 627, de 10 de novembro de 2023.

Art. 2\xBA Esta Portaria entra em vigor na data de sua publica\xE7\xE3o.
CARLOS F\xC1VARO
D.O.U., 13/11/2024 - Edi\xE7\xE3o Extra 1A`,
  },
  {
    id: 'PORT776-2025',
    texto: `MINIST\xC9RIO DA AGRICULTURA E PECU\xC1RIA

GABINETE DO MINISTRO

PORTARIA MAPA N\xBA 776, DE 12 DE MAR\xC7O DE 2025

O MINISTRO DE ESTADO DA AGRICULTURA E PECU\xC1RIA, no uso da atribui\xE7\xE3o que lhe confere o art. 87, par\xE1grafo \xFAnico, inciso II, da Constitui\xE7\xE3o, e tendo em vista o disposto na Lei n\xBA 14.515, de 29 de dezembro de 2022, no Decreto n\xBA 24.114, de 12 de abril de 1934, no Decreto n\xBA 5.759, de 17 de abril de 2006, no Decreto n\xBA 5.741, de 30 de mar\xE7o de 2006, na Instru\xE7\xE3o Normativa n\xBA 24, de 8 de setembro de 2015, e o que consta do Processo n\xBA 21000.078338/2023-41, resolve
CAP\xCDTULO I
DISPOSI\xC7\xD5ES GERAIS

Art. 1\xBA Fica institu\xEDdo o Subprograma de *Bactrocera carambolae*, no \xE2mbito do Programa Nacional de
Combate \xE0s Moscas-das-Frutas.

Art. 2\xBA O Subprograma de *Bactrocera carambolae* tem por objetivo estabelecer as medidas fitossanit\xE1rias
relativas \xE0 vigil\xE2ncia, \xE0 conten\xE7\xE3o, \xE0 supress\xE3o e \xE0 erradica\xE7\xE3o da praga quarenten\xE1ria presente *Bactrocera carambolae*.
\xA7 1\xBA Os crit\xE9rios e procedimentos de que trata esta Portaria estabelecem um padr\xE3o m\xEDnimo, que podem ser complementados pelo \xD3rg\xE3o Estadual ou Distrital de Defesa Sanit\xE1ria Vegetal da Unidade Federativa.
\xA7 2\xBA As medidas fitossanit\xE1rias previstas englobam:
I - levantamentos fitossanit\xE1rios de detec\xE7\xE3o, delimita\xE7\xE3o e monitoramento;
II - a\xE7\xF5es de controle, como:
a) t\xE9cnica de aniquilamento de macho;
b) aplica\xE7\xE3o de iscas t\xF3xicas;
c) coleta e destrui\xE7\xE3o de frutos de hospedeiros;
d) poda de hospedeiros; e e) controle biol\xF3gico; e
III - outras medidas tecnicamente justificadas.

Art. 3\xBA O Subprograma de *Bactrocera carambolae* define os crit\xE9rios e os procedimentos para
classifica\xE7\xE3o e regulamenta\xE7\xE3o de \xE1reas e de zonas de aten\xE7\xE3o especial.
\xA7 1\xBA Os status fitossanit\xE1rios de que trata o caput s\xE3o:
I - \xE1rea erradicada;
II - \xE1rea sob quarentena;
III - \xE1rea transiente; e
IV - zona tamp\xE3o.
\xA7 2\xBA Em ato complementar, cabe ao Departamento de Sanidade Vegetal e Insumos Agr\xEDcolas formalizar:
I - \xE1reas e zonas de aten\xE7\xE3o especial; e
II - medidas de erradica\xE7\xE3o e supress\xE3o.

Art. 4\xBA Considerando os riscos de introdu\xE7\xE3o da praga, as Unidades Federativas sem ocorr\xEAncia ser\xE3o
classificadas como:
I - baixo risco;
II - m\xE9dio risco; e
III - alto risco.
Par\xE1grafo \xFAnico. A classifica\xE7\xE3o de risco de que trata o caput \xE9 realizada pelo Departamento da Sanidade Vegetal e Insumos Agr\xEDcolas, com base nos seguintes crit\xE9rios:
I - proximidade de outras \xE1reas com ocorr\xEAncia da praga;
II - movimento de pessoas, produtos, equipamentos e meios de transporte provenientes de \xE1reas de
ocorr\xEAncia da praga; e
III - outros crit\xE9rios tecnicamente justificados.

Art. 5\xBA O Subprograma *Bactrocera carambolae* \xE9:
I - coordenado pelo Departamento de Sanidade Vegetal e Insumos Agr\xEDcolas da Secretaria de Defesa
Agropecu\xE1ria do Minist\xE9rio da Agricultura e Pecu\xE1ria; e
II - executado, com responsabilidades compartilhadas, nos termos do disposto no Decreto n\xBA 5.741, de 30
de mar\xE7o de 2006, pelos \xD3rg\xE3os Estaduais ou Distrital de Defesa Sanit\xE1ria Vegetal, em articula\xE7\xE3o e sob supervis\xE3o das Superintend\xEAncias de Agricultura e Pecu\xE1ria.
CAP\xCDTULO II
DA VIGIL\xC2NCIA E DA FISCALIZA\xC7\xC3O
Se\xE7\xE3o I Diretrizes gerais

Art. 6\xBA As medidas de vigil\xE2ncia previstas s\xE3o:
I - levantamentos fitossanit\xE1rios de detec\xE7\xE3o;
II - elabora\xE7\xE3o e execu\xE7\xE3o do Plano Nacional de Educa\xE7\xE3o Fitossanit\xE1ria para *Bactrocera carambolae*;

III - elabora\xE7\xE3o e execu\xE7\xE3o do plano de conting\xEAncia;
IV - controle do tr\xE2nsito de frutos hospedeiros; e
V - capacita\xE7\xE3o dos agentes p\xFAblicos e privados que atuam na identifica\xE7\xE3o e reconhecimento da praga.

Art. 7\xBA O reconhecimento e a manuten\xE7\xE3o do status fitossanit\xE1rio de uma \xE1rea ou Unidade Federativa,
com rela\xE7\xE3o \xE0 praga *Bactrocera carambolae*, ficam condicionados \xE0:
I - apresenta\xE7\xE3o, com prazo a ser definido pelo Departamento de Sanidade Vegetal e Insumos Agr\xEDcolas,
de relat\xF3rio do levantamento fitossanit\xE1rio de detec\xE7\xE3o realizado pelos \xD3rg\xE3os Estaduais ou Distrital de Defesa Sanit\xE1ria Vegetal; e
II - aprova\xE7\xE3o do relat\xF3rio das a\xE7\xF5es de vigil\xE2ncia, realizadas pelo \xD3rg\xE3o Estadual ou Distrital de Defesa
Sanit\xE1ria Vegetal, pela Superintend\xEAncia de Agricultura e Pecu\xE1ria da Unidade Federativa.

Art. 8\xBA Cabe ao \xD3rg\xE3o Estadual ou Distrital de Defesa Sanit\xE1ria Vegetal, em articula\xE7\xE3o com as
Superintend\xEAncias de Agricultura e Pecu\xE1ria, ap\xF3s a elabora\xE7\xE3o e publica\xE7\xE3o do Manual de Procedimentos para *Bactrocera carambolae*, estabelecer:
I - plano de conting\xEAncia; e
II - outros documentos relacionados que produzam registros audit\xE1veis e assegurem a efetividade de sua
atua\xE7\xE3o.
\xA7 1\xBA No plano de conting\xEAncia, de que trata o inciso I, do caput, deve constar:
I - a identifica\xE7\xE3o das rotas de risco de introdu\xE7\xE3o na Unidade Federativa;
II - a estrat\xE9gia das a\xE7\xF5es, obedecendo \xE0s medidas fitossanit\xE1rias estabelecidas pelo Departamento da
Sanidade Vegetal e Insumos Agr\xEDcolas, a serem implementadas para conten\xE7\xE3o da praga e erradica\xE7\xE3o do foco;
III - a infraestrutura necess\xE1ria para sua implanta\xE7\xE3o e execu\xE7\xE3o;
IV - as responsabilidades compartilhadas, devidamente formalizadas, entre os entes p\xFAblicos ou privados;
e
V - outros crit\xE9rios tecnicamente justificados.
\xA7 2\xBA Os documentos de que tratam os incisos I e II do caput dever\xE3o ser atualizados sempre que necess\xE1rio e quando ocorrerem mudan\xE7as nas condi\xE7\xF5es sobre as quais eles foram concebidos.
\xA7 3\xBA Todos os procedimentos e documentos estabelecidos no caput dever\xE3o ser aprovados pela Superintend\xEAncia de Agricultura e Pecu\xE1ria da Unidade Federativa.

Art. 9\xBA A suspeita de ocorr\xEAncia de *Bactrocera carambolae* deve ser investigada pelo \xD3rg\xE3o Estadual ou
Distrital de Defesa Sanit\xE1ria Vegetal, em articula\xE7\xE3o com a Superintend\xEAncia de Agricultura e Pecu\xE1ria da Unidade Federativa.
\xA7 1\xBA A comunica\xE7\xE3o da suspeita de que trata o caput pode ser efetuada por entidades federais, estaduais ou municipais, agentes da iniciativa privada ou por qualquer cidad\xE3o.
\xA7 2\xBA A partir da comunica\xE7\xE3o da suspeita de ocorr\xEAncia, cabe ao \xD3rg\xE3o Estadual ou Distrital de Defesa Sanit\xE1ria Vegetal, em articula\xE7\xE3o e sob supervis\xE3o das Superintend\xEAncias de Agricultura e Pecu\xE1ria, implementar e executar as medidas fitossanit\xE1rias de monitoramento e controle contidas no plano de

conting\xEAncia.
\xA7 3\xBA N\xE3o confirmada a suspeita de ocorr\xEAncia da praga, as medidas fitossanit\xE1rias de controle aplicadas dever\xE3o ser suspensas.
Se\xE7\xE3o II Das \xE1reas sob quarentena

Art. 10. \xC9 considerada \xE1rea sob quarentena para *Bactrocera carambolae* aquela com a presen\xE7a da praga e
sob controle oficial, excetuando-se as \xE1reas transientes.
\xA7 1\xBA A delimita\xE7\xE3o da \xE1rea considerada sob quarentena a que se refere o caput pode ser constitu\xEDda por uma Unidade Federativa, parte de uma Unidade Federativa, um munic\xEDpio ou parte de um munic\xEDpio.
\xA7 2\xBA A delimita\xE7\xE3o da \xE1rea prevista no \xA7 1\xBA, realizada pelo \xD3rg\xE3o Estadual ou Distrital de Defesa Sanit\xE1ria Vegetal e aprovada pela Superintend\xEAncia de Agricultura e Pecu\xE1ria da Unidade Federativa, deve se basear nos seguintes crit\xE9rios:
I - levantamentos de delimita\xE7\xE3o e de monitoramento realizados;
II - efetividade de postos de fiscaliza\xE7\xE3o fitossanit\xE1ria, fixos ou volantes; e
III - outros crit\xE9rios tecnicamente justificados.
\xA7 3\xBA At\xE9 que sejam adotadas as medidas para delimita\xE7\xE3o previstas no \xA7 2\xBA, a \xE1rea sob quarentena abranger\xE1 a \xE1rea total da Unidade Federativa onde foi constatada a praga.
\xA7 4\xBA A partir da confirma\xE7\xE3o da praga, cabe ao Departamento de Sanidade Vegetal e Insumos Agr\xEDcolas, proibir, restringir ou estabelecer condi\xE7\xF5es para o tr\xE2nsito de frutos de esp\xE9cies hospedeiras.
\xA7 5\xBA Na \xE1rea sob quarentena, dever\xE3o ser estabelecidas as \xE1reas de foco quarenten\xE1rio, sendo aquelas na qual s\xE3o implementadas e mantidas a\xE7\xF5es de monitoramento e controle por, pelo menos, tr\xEAs ciclos da praga.
\xA7 6\xBA A \xE1rea de foco quarenten\xE1rio, estabelecida pelo \xD3rg\xE3o Estadual ou Distrital de Defesa Sanit\xE1ria Vegetal e aprovada pela Superintend\xEAncia de Agricultura e Pecu\xE1ria da Unidade Federativa, por meio dos levantamentos de delimita\xE7\xE3o e presen\xE7a de hospedeiros, poder\xE1 abranger parte ou a totalidade da \xE1rea sob quarentena.
Se\xE7\xE3o III Das \xE1reas transientes e transientes erradicadas

Art. 11. Fica estabelecida como \xE1rea transiente para *Bactrocera carambolae* aquela na qual houver apenas
capturas de esp\xE9cime macho da praga, desde que a primeira detec\xE7\xE3o seja confirmada por laudo oficial.
\xA7 1\xBA O per\xEDodo de transi\xEAncia da praga \xE9 de noventa dias ap\xF3s a data da \xFAltima captura de esp\xE9cime macho de *Bactrocera carambolae*.
\xA7 2\xBA A \xE1rea transiente \xE9 delimitada com um raio m\xEDnimo de cinco quil\xF4metros, a partir do ponto em que foi confirmada a detec\xE7\xE3o, devendo abranger a totalidade de Unidades de Produ\xE7\xE3o - UP, na qual n\xE3o ser\xE1 permitida a certifica\xE7\xE3o fitossanit\xE1ria de origem de frutos de hospedeiros.
\xA7 3\xBA A \xE1rea transiente pode ser ampliada \xE0 medida que ocorrerem novas capturas de machos nas armadilhas instaladas.

\xA7 4\xBA Na \xE1rea transiente, dever\xE3o ser estabelecidas as \xE1reas de foco transiente, sendo aquelas nas quais s\xE3o implementadas e mantidas a\xE7\xF5es de monitoramento e controle por, pelo menos, noventa dias a partir da data da \xFAltima detec\xE7\xE3o.
\xA7 5\xBA A \xE1rea de foco transiente, estabelecida pelo \xD3rg\xE3o Estadual ou Distrital de Defesa Sanit\xE1ria Vegetal e aprovada pela Superintend\xEAncia de Agricultura e Pecu\xE1ria da Unidade Federativa, por meio dos levantamentos de delimita\xE7\xE3o e presen\xE7a de hospedeiros, poder\xE1 abranger parte ou a totalidade da \xE1rea transiente.
\xA7 6\xBA Decorrido o per\xEDodo definido no \xA7 1\xBA sem que haja nova captura e ap\xF3s avalia\xE7\xE3o e emiss\xE3o de parecer t\xE9cnico da Superintend\xEAncia de Agricultura e Pecu\xE1ria da Unidade Federativa, a \xE1rea transiente torna-se \xE1rea transiente erradicada.
\xA7 7\xBA Ap\xF3s seis ciclos sem capturas da praga, as medidas aplic\xE1veis s\xE3o equivalentes \xE0quelas realizadas em zona tamp\xE3o, mantida a denomina\xE7\xE3o de \xE1rea transiente erradicada.
Se\xE7\xE3o IV Do Sistema de Mitiga\xE7\xE3o de Risco para *Bactrocera carambolae*

Art. 12. \xC9 considerado Sistema de Mitiga\xE7\xE3o de Risco a integra\xE7\xE3o de diferentes medidas de manejo de
risco, sendo que pelo menos duas das quais atuam independentemente, e que, cumulativamente, atingem o n\xEDvel apropriado de prote\xE7\xE3o contra a praga quarenten\xE1ria presente *Bactrocera carambolae*.

Art. 13. Poder\xE1 ser estabelecido Sistema de Mitiga\xE7\xE3o de Risco, como condi\xE7\xE3o para sa\xEDda de frutos de
Unidade Federativa com presen\xE7a da praga, desde que seja aplicado tratamento quarenten\xE1rio cientificamente comprovado para *Bactrocera carambolae* e reconhecido pelo Departamento de Sanidade Vegetal e Insumos Agr\xEDcolas.
\xA7 1\xBA Al\xE9m do tratamento quarenten\xE1rio de que trata o caput, a Unidade de Produ\xE7\xE3o - UP, dever\xE1 apresentar o \xCDndice Mosca/Armadilha/Dia - MAD com valor igual a zero na semana pr\xE9via \xE0 comercializa\xE7\xE3o.
\xA7 2\xBA O \xCDndice MAD dever\xE1 ser estabelecido por meio de monitoramento in loco, realizado pelo respons\xE1vel t\xE9cnico e supervisionado pelo \xD3rg\xE3o Estadual ou Distrital de Defesa Sanit\xE1ria Vegetal da Unidade Federativa.
\xA7 3\xBA Os resultados do \xCDndice MAD, por UP, devem ser enviados mensalmente pelo \xD3rg\xE3o Estadual ou Distrital de Defesa Sanit\xE1ria Vegetal, \xE0 Superintend\xEAncia de Agricultura e Pecu\xE1ria da Unidade Federativa, que fiscalizar\xE1 e auditar\xE1 o Sistema de Mitiga\xE7\xE3o de Risco.
\xA7 4\xBA A frequ\xEAncia e o n\xFAmero de armadilhas utilizados para obten\xE7\xE3o do \xCDndice MAD ser\xE3o definidos pelo Manual de Procedimentos para *Bactrocera carambolae* publicado pelo Departamento de Sanidade Vegetal e Insumos Agr\xEDcolas.
Se\xE7\xE3o V Do local de produ\xE7\xE3o livre de *Bactrocera carambolae*

Art. 14. \xC9 considerado local de produ\xE7\xE3o livre de *Bactrocera carambolae* uma por\xE7\xE3o definida de um
lugar de produ\xE7\xE3o onde n\xE3o h\xE1 ocorr\xEAncia da praga, como demonstrado por evid\xEAncia cient\xEDfica, e cuja condi\xE7\xE3o \xE9 oficialmente mantida por um per\xEDodo definido.

Art. 15. Em \xE1reas sob quarentena e em \xE1reas transientes poder\xE3o ser inscritos locais de produ\xE7\xE3o livres de
*Bactrocera carambolae*.
\xA7 1\xBA Em local de produ\xE7\xE3o livre de *Bactrocera carambolae*, a aus\xEAncia de praga ser\xE1 estabelecida por

levantamentos e inspe\xE7\xF5es realizadas durante esta\xE7\xF5es de cultivo e mantida por outras a\xE7\xF5es preventivas para evitar a entrada da praga no lugar de produ\xE7\xE3o.
\xA7 2\xBA Poder\xE3o ser comercializados, para outras Unidades Federativas, frutos produzidos em ambientes totalmente protegidos.
\xA7 3\xBA O ambiente de produ\xE7\xE3o deve ser lacrado com tela antiaf\xEDdica de no m\xE1ximo dois mil\xEDmetros de abertura e deve ter uma segunda prote\xE7\xE3o, tamb\xE9m, por tela antiaf\xEDdica de no m\xE1ximo dois mil\xEDmetros de abertura, bem como possuir armadilhas Jackson e McPhail, que ser\xE3o monitoradas pelo respons\xE1vel t\xE9cnico e supervisionadas pelo \xD3rg\xE3o Estadual ou Distrital de Defesa Sanit\xE1ria Vegetal da Unidade Federativa.
\xA7 4\xBA Nos locais de produ\xE7\xE3o livres de praga ser\xE1 exigido \xEDndice MAD com valor igual a zero na semana pr\xE9via \xE0 comercializa\xE7\xE3o.
\xA7 5\xBA A frequ\xEAncia e o n\xFAmero de armadilhas utilizados para os locais livres de *Bactrocera carambolae* ser\xE3o definidos no Manual de Procedimentos para *Bactrocera carambolae*, publicado pelo Departamento de Sanidade Vegetal e Insumos Agr\xEDcolas.
\xA7 6\xBA Os resultados do monitoramento realizado nos locais livres de *Bactrocera carambolae* devem ser enviados pelo \xD3rg\xE3o Estadual ou Distrital de Defesa Sanit\xE1ria Vegetal \xE0 Superintend\xEAncia de Agricultura e Pecu\xE1ria da Unidade Federativa, que fiscalizar\xE1 e auditar\xE1 os ambientes de produ\xE7\xE3o.
\xA7 7\xBA Os frutos produzidos em locais de produ\xE7\xE3o livres de *Bactrocera carambolae* poder\xE3o ser submetidos a tratamento quarenten\xE1rio, a crit\xE9rio do Departamento de Sanidade Vegetal e Insumos Agr\xEDcolas.
Se\xE7\xE3o VI Da zona tamp\xE3o

Art. 16. Fica estabelecida como zona tamp\xE3o, para *Bactrocera carambolae*, a \xE1rea circundante ou
adjacente a uma \xE1rea oficialmente delimitada para prop\xF3sitos fitossanit\xE1rios, visando a minimizar a probabilidade de dissemina\xE7\xE3o da praga-alvo dentro ou fora da \xE1rea delimitada e sujeita a medidas fitossanit\xE1rias ou outras medidas de controle, se apropriado.
Par\xE1grafo \xFAnico. A delimita\xE7\xE3o da \xE1rea que constitui a zona tamp\xE3o ser\xE1 realizada com base nos seguintes crit\xE9rios:
I - garantia de seguran\xE7a fitossanit\xE1ria nos levantamentos de delimita\xE7\xE3o e de monitoramento realizados
pelo \xD3rg\xE3o Estadual ou Distrital de Defesa Sanit\xE1ria Vegetal e outros agentes respons\xE1veis pela atividade, com avalia\xE7\xE3o favor\xE1vel, por meio de relat\xF3rio de supervis\xE3o, da Superintend\xEAncia de Agricultura e Pecu\xE1ria da Unidade Federativa;
II - garantias da exist\xEAncia e da qualidade de estrutura dos postos de fiscaliza\xE7\xE3o do tr\xE2nsito de frutos
hospedeiros, avaliadas e aprovadas, por meio de relat\xF3rios de supervis\xE3o, pela Superintend\xEAncia de Agricultura e Pecu\xE1ria da Unidade Federativa, observando pontos essenciais como a seguran\xE7a fitossanit\xE1ria, o hor\xE1rio de funcionamento e o apoio policial oferecido aos respectivos postos de fiscaliza\xE7\xE3o; e
III - outras medidas fitossanit\xE1rias necess\xE1rias propostas pela Superintend\xEAncia de Agricultura e Pecu\xE1ria
da Unidade Federativa a que pertence a \xE1rea.
Se\xE7\xE3o VII Das \xE1reas erradicadas

Art. 17. Fica estabelecida como \xE1rea erradicada a \xE1rea sob vigil\xE2ncia cont\xEDnua, caracterizada pela aus\xEAncia

da praga, quando os registros indicarem sua ocorr\xEAncia no passado e sua erradica\xE7\xE3o ap\xF3s a realiza\xE7\xE3o de programa documentado com essa finalidade.
\xA7 1\xBA O reconhecimento de \xE1rea erradicada ocorre quando os registros do levantamento de monitoramento indicarem a aus\xEAncia de detec\xE7\xE3o de *Bactrocera carambolae* por um per\xEDodo de tr\xEAs ciclos biol\xF3gicos completos da praga.
\xA7 2\xBA O per\xEDodo de que trata o \xA7 1\xBA se inicia a partir do registro da \xFAltima detec\xE7\xE3o da praga.
\xA7 3\xBA O reconhecimento de \xE1rea erradicada dever\xE1 ser confirmado pela realiza\xE7\xE3o do procedimento de amostragem de frutos, conforme orienta\xE7\xE3o do Departamento de Sanidade Vegetal e Insumos Agr\xEDcolas.
\xA7 4\xBA Ap\xF3s seis ciclos sem capturas da praga, o protocolo de monitoramento e controle, estabelecido pelo Departamento de Sanidade Vegetal e Insumos Agr\xEDcolas, voltar\xE1 a ser o de zona tamp\xE3o ou o de Unidade Federativa sem ocorr\xEAncia, preservando-se a denomina\xE7\xE3o de \xE1rea erradicada.
CAP\xCDTULO III
DA CERTIFICA\xC7\xC3O FITOSSANIT\xC1RIA E DO CONTROLE DO TR\xC2NSITO

Art. 18. O tr\xE2nsito de frutos de esp\xE9cies hospedeiras \xE9 livre entre Unidades Federativas sem ocorr\xEAncia de
*Bactrocera carambolae*.

Art. 19. S\xE3o proibidas a sa\xEDda de frutos e a certifica\xE7\xE3o fitossanit\xE1ria de origem de frutos de hospedeiros,
excetuando-se locais em Sistema de Mitiga\xE7\xE3o de Risco e locais livres de *Bactrocera carambolae*, reconhecidos pelo Departamento de Sanidade Vegetal e Insumos Agr\xEDcolas, nas seguintes \xE1reas:
I - transientes; e
II - sob quarentena.

Art. 20. O tr\xE2nsito de frutos de hospedeiros com origem em Unidades Federativas com a ocorr\xEAncia de
praga ser\xE1 permitido, por meio de certifica\xE7\xE3o fitossanit\xE1ria de origem, em:
I - \xE1rea erradicada;
II - \xE1rea transiente erradicada;
III - zona tamp\xE3o;
IV - \xE1reas sob quarentena e \xE1reas transientes, em Sistema de Mitiga\xE7\xE3o de Risco, reconhecido pelo
Departamento de Sanidade Vegetal e Insumos Agr\xEDcolas, desde que aprovado tratamento quarenten\xE1rio para *Bactrocera carambolae*; e
V - \xE1reas sob quarentena, em locais livres de *Bactrocera carambolae*, nos ambientes cadastrados
aprovados pelo \xD3rg\xE3o Estadual ou Distrital de Defesa Sanit\xE1ria Vegetal, pela Superintend\xEAncia de Agricultura e Pecu\xE1ria da Unidade Federativa e reconhecidos pelo Departamento de Sanidade Vegetal e Insumos Agr\xEDcolas.

Art. 21. A certifica\xE7\xE3o fitossanit\xE1ria de origem de frutos de hospedeiros \xE9 dispensada em unidades de
produ\xE7\xE3o e unidades de consolida\xE7\xE3o localizadas em Unidade Federativa sem ocorr\xEAncia da praga.
\xA7 1\xBA Nas Unidades Federativas sem ocorr\xEAncia da praga, ser\xE1 exigida apenas a permiss\xE3o de tr\xE2nsito de vegetais quando:
I - for destinado a Unidade Federativa com ocorr\xEAncia da praga;

II - transitar por \xE1rea sob quarentena; ou
III - transitar por \xE1rea transiente.
\xA7 2\xBA O envio que transitar em \xE1reas sob quarentena e em \xE1rea transiente dever\xE1:
I - estar acondicionado em embalagens que n\xE3o permitam o contato do fruto de esp\xE9cies hospedeiras com
a praga;
II - ser transportado em ve\xEDculos fechados ou, quando abertos, protegidos com tela de malha de no
m\xE1ximo dois mil\xEDmetros;
III - ser lacrado, pelo \xD3rg\xE3o Estadual ou Distrital de Defesa Sanit\xE1ria Vegetal, na entrada da \xE1rea sob
quarentena ou \xE1rea transiente; e
IV - ter o lacre de sua embalagem removido somente na sa\xEDda da \xE1rea sob quarentena ou \xE1rea transiente,
mediante inspe\xE7\xE3o pelo \xD3rg\xE3o Estadual ou Distrital de Defesa Sanit\xE1ria Vegetal.
CAP\xCDTULO IV
DA PESQUISA CIENT\xCDFICA

Art. 22. O transporte de esp\xE9cimes vivos de *Bactrocera carambolae* para fora das \xE1reas com ocorr\xEAncia
depender\xE1 de aprova\xE7\xE3o pr\xE9via do Departamento de Sanidade Vegetal e Insumos Agr\xEDcolas.

Art. 23. A pesquisa cient\xEDfica e a publica\xE7\xE3o de dados relacionados \xE0 *Bactrocera carambolae* devem ser
submetidas \xE0 an\xE1lise e \xE0 aprova\xE7\xE3o do Departamento de Sanidade Vegetal e Insumos Agr\xEDcolas.
CAP\xCDTULO V
DA DIVULGA\xC7\xC3O DE FOCOS EM NOVOS MUNIC\xCDPIOS

Art. 24. A divulga\xE7\xE3o em m\xEDdias privadas sobre a primeira detec\xE7\xE3o de *Bactrocera carambolae* em um
munic\xEDpio fica condicionada ao resultado positivo do laudo oficial e \xE0 autoriza\xE7\xE3o do Departamento de Sanidade Vegetal e Insumos Agr\xEDcolas.
CAP\xCDTULO VI
DISPOSI\xC7\xD5ES FINAIS

Art. 25. Os documentos previstos no art. 8\xBA devem ser elaborados e executados em at\xE9 cento e vinte dias,
a contar da data de publica\xE7\xE3o desta Portaria.

Art. 26. Fica revogada a Instru\xE7\xE3o Normativa n\xBA 28, de 20 de julho de 2017.

Art. 27. Esta Portaria entra em vigor na data de sua publica\xE7\xE3o.
CARLOS F\xC1VARO
Publicado em: 14/03/2025 | Edi\xE7\xE3o: 50 | Se\xE7\xE3o: 1 | P\xE1gina: 37`,
  },
  {
    id: 'PORT780-2023',
    texto: `MINIST\xC9RIO DA AGRICULTURA E PECU\xC1RIA

SECRETARIA DE DEFESA AGROPECU\xC1RIA

PORTARIA SDA N\xBA 780, DE 6 DE ABRIL DE 2023

Art. 24, da Instru\xE7\xE3o Normativa n\xBA 28, de 20 de julho de 2017, e o que consta do Processo n\xBA
21048.001240/2018-92, resolve:

Art. 1\xBA Declarar o estado de Roraima como \xC1rea Sob Quarentena para *Bactrocera carambolae*
(mosca-da-carambola).

Art. 2\xBA A declara\xE7\xE3o constante no artigo 1\xBA, desta Portaria, ter\xE1 vig\xEAncia por tempo indeterminado, desde
que n\xE3o ocorra altera\xE7\xE3o de status fitossanit\xE1rio e sejam observadas as exig\xEAncias legais para sua manuten\xE7\xE3o.

Art. 3\xBA Fica revogado a Portaria SDA n\xBA 534, publicada no D.O.U. de 21 de fevereiro de 2022, Edi\xE7\xE3o 36,
Se\xE7\xE3o 1, P\xE1gina 4.

Art. 4\xBA Esta Portaria entra em vigor na data da sua publica\xE7\xE3o.
CARLOS GOULART
Publicado em: 10/04/2023 | Edi\xE7\xE3o: 68 | Se\xE7\xE3o: 1 | P\xE1gina: 43`,
  },
  {
    id: 'PORT859-2023',
    texto: `\xD3RG\xC3O: MINIST\xC9RIO DA AGRICULTURA E PECU\xC1RIA/SECRETARIA DE DEFESA AGROPECU\xC1RIA

PORTARIA SDA/MAPA N\xBA 859, DE 19 DE JULHO DE 2023

25/07/2023, 13:51 PORTARIA SDA/MAPA N\xBA 859, DE 19 DE JULHO DE 2023 - PORTARIA SDA/MAPA N\xBA 859, DE 19 DE JULHO DE 2023 - DOU - Imprensa Nacional

do Processo n\xBA 21048.001240/2018-92, resolve:

Art. 1\xBA Declarar como zona tamp\xE3o para a mosca-da-carambola (*Bactrocera carambolae* ) , no
estado do Amazonas, a \xE1rea localizada no munic\xEDpio de Presidente Figueiredo, delimitada pelas seguintes coordenadas geogr\xE1ficas: S: -0,878003\xB0 e W: -60,531348\xB0; S:-1,240389\xB0 e W: -60,452032\xB0; S: -1,464697\xB0 e W:
-60,311264\xB0; S:-1,698183\xB0 e W: -60,187180\xB0; S: -1,825930\xB0 e W: -60,210970\xB0; S:1,881566\xB0 e W: -60,083692\xB0; S:
-2,126203\xB0 e W: -60,022037\xB0; S: -2,097566\xB0 e W: -59,791695\xB0; S:-2,011389\xB0 e W: -59,731692\xB0; S: -2,032341\xB0 e W: -59,888861\xB0; S:-1,703024\xB0 e W: -60,096583\xB0 e S:-1,573479\xB0 e W: -60,126909\xB0; S: -1,271557\xB0 e W:
-60,358531\xB0; S:-0,836236\xB0 e W:-60,501325\xB0.

Art. 2\xBA As demais \xE1reas do estado do Amazonas permanecem com o status de alto risco em
Unidade da Federa\xE7\xE3o sem ocorr\xEAncia da praga.

Art. 3\xBA As declara\xE7\xF5es constantes nos artigos 1\xBA e 2\xBA, desta Portaria, ter\xE3o vig\xEAncia por tempo
indeterminado, desde que n\xE3o ocorra altera\xE7\xE3o de status fitossanit\xE1rio e sejam observadas as exig\xEAncias legais para sua manuten\xE7\xE3o.

Art. 4\xBA Esta Portaria entra em vigor em 1\xBA de agosto de 2023.
M\xC1RCIO REZENDE EVARISTO CARLOS
Este conte\xFAdo n\xE3o substitui o publicado na vers\xE3o certificada.
https://www.in.gov.br/web/dou/-/portaria-sda/mapa-n-859-de-19-de-julho-de-2023-498428679 1/1`,
  },
  {
    id: 'PORT940-2023',
    texto: `\xD3RG\xC3O: MINIST\xC9RIO DA AGRICULTURA E PECU\xC1RIA/SECRETARIA DE DEFESA AGROPECU\xC1RIA

PORTARIA SDA/MAPA N\xBA 940, DE 17 DE NOVEMBRO DE 2023

20/11/2023, 12:09 PORTARIA SDA/MAPA N\xBA 940, DE 17 DE NOVEMBRO DE 2023 - PORTARIA SDA/MAPA N\xBA 940, DE 17 DE NOVEMBRO DE 2023 - DOU - Imprensa Nacional

na Lei 14.515, de 29 de dezembro de 2022, e o que consta do Processo n\xBA 21030.004616/2023-77, resolve:

Art. 1\xBA Declarar como \xC1rea Sob Quarentena para a praga *Bactrocera carambolae* (mosca-da-
carambola), no estado do Par\xE1, os munic\xEDpios de Afu\xE1, Almeirim, Anaj\xE1s, Bagre, Breves, Cachoeira do Arari, Chaves, Curralinho, Faro, Gurup\xE1, Juruti, Melga\xE7o, Muan\xE1, \xD3bidos, Oeiras do Par\xE1, Oriximin\xE1, Ponta de Pedras, Portel, Porto de Moz, Prainha, Salvaterra, Santa Cruz do Arari, S\xE3o Sebasti\xE3o da Boa Vista, Soure e Terra Santa.

Art. 2\xBA A zona tamp\xE3o abrange os munic\xEDpios de Abaetetuba, Acar\xE1, Alenquer, Altamira,
Ananindeua, Anapu, Augusto Corr\xEAa, Aurora do Par\xE1, Aveiro, Bai\xE3o, Barcarena, Bel\xE9m, Belterra, Benevides, Bonito, Bragan\xE7a, Brasil Novo, Bujaru, Cachoeira do Piri\xE1, Camet\xE1, Capanema, Capit\xE3o Po\xE7o, Castanhal, Colares, Conc\xF3rdia do Par\xE1, Curu\xE1, Curu\xE7\xE1, Garraf\xE3o do Norte, Igarap\xE9 A\xE7u, Igarap\xE9 Miri, Inhangapi, Ipixuna do Par\xE1, Irituia, Limoeiro do Ajuru, Magalh\xE3es Barata, Maracan\xE3, Marapanim, Marituba, Medicil\xE2ndia, Mocajuba, Moju, Moju\xED dos Campos, Monte Alegre, Nova Esperan\xE7a do Piri\xE1, Nova Timbote\xFAa, Our\xE9m, Pacaj\xE1, Peixe-Boi, Placas, Primavera, Quatipuru, Rur\xF3polis, Salin\xF3polis, Santa B\xE1rbara do Par\xE1, Santa Izabel do Par\xE1, Santa Luzia do Par\xE1, Santa Maria do Par\xE1, Santo Ant\xF4nio do Tau\xE1, S\xE3o Caetano de Odivelas, S\xE3o Domingos do Capim, S\xE3o Francisco do Par\xE1, S\xE3o Jo\xE3o da Ponta, S\xE3o Jo\xE3o de Pirabas, S\xE3o Miguel do Guam\xE1, Santar\xE9m, Santar\xE9m Novo, Senador Jos\xE9 Porfirio, Tail\xE2ndia, Terra Alta, Tom\xE9-A\xE7u, Tracuateua, Uruar\xE1, Vigia, Viseu, e Vit\xF3ria do Xingu.

Art. 3\xBA Os demais munic\xEDpios do estado s\xE3o considerados como "\xC1rea Sem Ocorr\xEAncia" para a
praga *Bactrocera carambolae* (mosca-da-carambola).

Art. 4\xBA As declara\xE7\xF5es constantes nos artigos 1\xBA, 2\xBA e 3\xBA, desta Portaria, ter\xE3o vig\xEAncia por tempo
indeterminado, desde que n\xE3o ocorra altera\xE7\xE3o de status fitossanit\xE1rio e sejam observadas as exig\xEAncias legais para sua manuten\xE7\xE3o.

Art. 5\xBA Fica revogada a Resolu\xE7\xE3o DSV n\xBA 04, de 29 de mar\xE7o de 2019.3, publicada no D.O.U. de
1 de abril de 2019, Edi\xE7\xE3o 62, Se\xE7\xE3o 1, P\xE1gina 15.

Art. 6\xBA Esta Portaria entra em vigor na data da sua publica\xE7\xE3o.
CARLOS GOULART
Este conte\xFAdo n\xE3o substitui o publicado na vers\xE3o certificada.
https://www.in.gov.br/web/dou/-/portaria-sda/mapa-n-940-de-17-de-novembro-de-2023-524269456 1/1`,
  },
  {
    id: 'RES04-2019',
    texto: `\xD3RG\xC3O: MINIST\xC9RIO DA AGRICULTURA, PECU\xC1RIA E ABASTECIMENTO/SECRETARIA DE DEFESA AGROPECU\xC1RIA/DEPARTAMENTO DE SANIDADE

RESOLU\xC7\xC3O N\xBA 4, DE 29 DE MAR\xC7O DE 2019

21030.000179/2018-55, resolve:

Art. 1\xBA - Declarar como \xC1rea Sob Quarentena para a praga quarenten\xE1ria presente *Bactrocera carambolae* (mosca-da-
carambola), no Estado do Par\xE1, os munic\xEDpios de Almeirim, Gurup\xE1, Porto de Moz, Pra\xEDnha, Afu\xE1, Anaj\xE1s, Bagre, Breves, Cachoeira do Arari, Chaves, Curralinho, Melga\xE7o, Muan\xE1, Oeiras do Par\xE1, Ponta de Pedras, Portel, Salvaterra, S\xE3o Sebasti\xE3o da Boa Vista, Santa Cruz do Arari e Soure.

Art. 2\xBA - Declarar como Zona Tamp\xE3o para a praga quarenten\xE1ria presente *Bactrocera carambolae* (mosca-da-
carambola), no Estado do Par\xE1, os munic\xEDpios de Abaetetuba, Acar\xE1, Bai\xE3o, Barcarena, Bujaru, Camet\xE1, Conc\xF3rdia do Par\xE1, Igarap\xE9 Miri, Limoeiro do Ajuru, Mocajuba, Moju, Tail\xE2ndia, Tom\xE9-A\xE7u, Altamira, Anapu, Brasil Novo, Medicil\xE2ndia, Placas, Senador Jos\xE9 Porfirio, Uruar\xE1, Vit\xF3ria do Xingu, Capanema, Augusto Corr\xEAa, Bonito, Bragan\xE7a, Cachoeira do Piri\xE1, Nova Timbote\xFAa, Peixe-Boi, Primavera, Quatipuru, Salin\xF3polis, Santa Luzia do Par\xE1, Santar\xE9m Novo, S\xE3o Jo\xE3o de Pirabas, Tracuateua, Viseu, Capit\xE3o Po\xE7o, Garraf\xE3o do Norte, Irituia, Nova Esperan\xE7a do Piri\xE1, Our\xE9m, Sta. Maria do Par\xE1, S\xE3o Miguel do Guam\xE1, Ananindeua, Benevides, Castanhal, Colares, Curu\xE7\xE1, Igarap\xE9 A\xE7u, Inhangapi, Magalh\xE3es Barata, Maracan\xE3, Marapanim, Marituba, Santa B\xE1rbara do Par\xE1, Santa Izabel do Par\xE1, Santo Ant\xF4nio do Tau\xE1, S\xE3o Caetano de Odivelas, S\xE3o Domingos do Capim, S\xE3o Francisco do Par\xE1, S\xE3o Jo\xE3o da Ponta, Terra Alta, Vigia, Curu\xE1, Faro, Juruti, \xD3bidos, Oriximin\xE1, Terra Santa, Aurora do Par\xE1, Ipixuna do Par\xE1, Alenquer, Belterra, Moju\xED dos Campos, Monte Alegre, Santar\xE9m, Bel\xE9m e Pacaj\xE1.

Art. 3\xBA - Declarar como \xC1rea Sem Detec\xE7\xE3o para a praga quarenten\xE1ria presente *Bactrocera carambolae* (mosca-da-
carambola), no Estado do Par\xE1, os munic\xEDpios de Aveiro, Itaituba, Jacareacanga, Rur\xF3polis, Trair\xE3o, Curion\xF3polis, Eldorado dos Caraj\xE1s, Itupiranga, Marab\xE1, Nova Ipiuxuna, Parauapebas, Novo Progresso, M\xE3e do Rio, Paragominas, Ulian\xF3polis, Concei\xE7\xE3o do Araguaia, Cumaru do Norte, Pau D\xB4\xC1rco, Reden\xE7\xE3o, Sta. Maria das Barreiras, Santana do Araguaia, Abel Figueiredo, Bom Jesus do Tocantins, Dom Elizeu, Rondon do Par\xE1, Brejo Grande do Araguaia, Palestina do Par\xE1, Pi\xE7arra, S\xE3o Domingos do Araguaia, S\xE3o Geraldo do Araguaia, S\xE3o Jo\xE3o do Araguaia, \xC1gua Azul do Norte, Ouril\xE2ndia do Norte, S\xE3o Felix do Xingu, Tucum\xE3, Breu Branco, Goian\xE9sia do Par\xE1, Jacund\xE1, Novo Repartimento, Tucuru\xED, Bannach, Cana\xE3 dos Caraj\xE1s, Floresta do Araguaia, Rio Maria, Sapucaia e Xinguara.

Art. 4\xBA - As declara\xE7\xF5es constantes nos Arts. 1\xBA, 2\xBA e 3\xBA ter\xE3o vig\xEAncia por tempo indeterminado, desde que n\xE3o ocorra
altera\xE7\xE3o de status fitossanit\xE1rio e sejam observadas as exig\xEAncias legais para a sua manuten\xE7\xE3o.

Art. 5\xBA - Esta Resolu\xE7\xE3o entra em vigor na data de sua publica\xE7\xE3o.
CARLOS GOULART
Este conte\xFAdo n\xE3o substitui o publicado na vers\xE3o certificada (pdf).`,
  },
  {
    id: 'RES05-2018',
    texto: `\xD3RG\xC3O: MINIST\xC9RIO DA AGRICULTURA, PECU\xC1RIA E ABASTECIMENTO/SECRETARIA DE DEFESA AGROPECU\xC1RIA

RESOLU\xC7\xC3O N\xBA5, DE 31 DE OUTUBRO DE 2018 -IMPRENSA NACIONAL P\xC1GINA 1 DE 1
RESOLU\xC7\xC3O N\xBA 5, DE 31 DE OUTUBRO DE 2018

o que consta do Processo 21000.041727/2018-54 , resolve:

Art. 1\xBA Declarar o Estado do Amap\xE1 como \xC1rea Sob Quarentena para a praga quarenten\xE1ria presente
*Bactrocera carambolae* (mosca-da-carambola).

Art. 2\xBA Esta Resolu\xE7\xE3o entra em vigor na data de sua publica\xE7\xE3o.
GRACIANE GON\xC7ALVES MAGALH\xC3ES DE CASTRO
Este conte\xFAdo n\xE3o substitui o publicado na vers\xE3o certificada.
http://www.in.gov.br/materia/-/asset_publisher/Kujrw0TZC2Mb/content/id/48228468 13/05/2019`,
  },
]
var Ao = 0
function $(a, e, o, i, r, n) {
  e || (e = {})
  var t,
    s,
    l = e
  if ('ref' in l)
    for (s in ((l = {}), e)) s == 'ref' ? (t = e[s]) : (l[s] = e[s])
  var d = {
    type: a,
    props: l,
    key: o,
    ref: t,
    __k: null,
    __: null,
    __b: 0,
    __e: null,
    __c: null,
    constructor: void 0,
    __v: --Ao,
    __i: -1,
    __u: 0,
    __source: r,
    __self: n,
  }
  if (typeof a == 'function' && (t = a.defaultProps))
    for (s in t) l[s] === void 0 && (l[s] = t[s])
  return O.vnode && O.vnode(d), d
}
function go() {
  const e = new URLSearchParams(window.location.search).get('id')
  if (!e)
    return $('h3', { children: 'ID da legisla\xE7\xE3o n\xE3o fornecido.' })
  const o = ma.find((i) => i.id === e)
  return o
    ? ((document.title = `${e} - CEFiTI`),
      $('div', { dangerouslySetInnerHTML: { __html: I.parse(o.texto) } }))
    : $('h3', {
        children: ['Legisla\xE7\xE3o com ID "', e, '" n\xE3o encontrada.'],
      })
}
var Ne = document.getElementById('root')
Ne && ((Ne.textContent = ''), Xe($(go, {}), Ne))
//# sourceMappingURL=leg.js.map
