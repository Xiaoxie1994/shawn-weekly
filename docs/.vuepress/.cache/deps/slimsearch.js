import {
  __publicField
} from "./chunk-V6TY7KAL.js";

// node_modules/slimsearch/dist/index.mjs
var xt = "ENTRIES";
var B = "KEYS";
var G = "VALUES";
var g = "";
var V = class {
  constructor(e, n) {
    __publicField(this, "set");
    __publicField(this, "_type");
    __publicField(this, "_path");
    const o = e._tree, s = Array.from(o.keys());
    this.set = e, this._type = n, this._path = s.length > 0 ? [{ node: o, keys: s }] : [];
  }
  next() {
    const e = this.dive();
    return this.backtrack(), e;
  }
  dive() {
    if (this._path.length === 0) return { done: true, value: void 0 };
    const { node: e, keys: n } = z(this._path);
    if (z(n) === g) return { done: false, value: this.result() };
    const o = e.get(z(n));
    return this._path.push({ node: o, keys: Array.from(o.keys()) }), this.dive();
  }
  backtrack() {
    if (this._path.length === 0) return;
    const e = z(this._path).keys;
    e.pop(), !(e.length > 0) && (this._path.pop(), this.backtrack());
  }
  key() {
    return this.set._prefix + this._path.map(({ keys: e }) => z(e)).filter((e) => e !== g).join("");
  }
  value() {
    return z(this._path).node.get(g);
  }
  result() {
    switch (this._type) {
      case G:
        return this.value();
      case B:
        return this.key();
      default:
        return [this.key(), this.value()];
    }
  }
  [Symbol.iterator]() {
    return this;
  }
};
var z = (t) => t[t.length - 1];
var zt = (t, e, n) => {
  const o = /* @__PURE__ */ new Map();
  if (typeof e != "string") return o;
  const s = e.length + 1, r = s + n, i = new Uint8Array(r * s).fill(n + 1);
  for (let c = 0; c < s; ++c) i[c] = c;
  for (let c = 1; c < r; ++c) i[c * s] = c;
  return K(t, e, n, o, i, 1, s, ""), o;
};
var K = (t, e, n, o, s, r, i, c) => {
  const u = r * i;
  t: for (const d of t.keys()) if (d === g) {
    const a = s[u - 1];
    a <= n && o.set(c, [t.get(d), a]);
  } else {
    let a = r;
    for (let h = 0; h < d.length; ++h, ++a) {
      const f = d[h], _ = i * a, p = _ - i;
      let l = s[_];
      const m = Math.max(0, a - n - 1), y = Math.min(i - 1, a + n);
      for (let w = m; w < y; ++w) {
        const C = f !== e[w], O = s[p + w] + +C, b = s[p + w + 1] + 1, x = s[_ + w] + 1, S = s[_ + w + 1] = Math.min(O, b, x);
        S < l && (l = S);
      }
      if (l > n) continue t;
    }
    K(t.get(d), e, n, o, s, a, i, c + d);
  }
};
var I = class _I {
  constructor(e = /* @__PURE__ */ new Map(), n = "") {
    __publicField(this, "_tree");
    __publicField(this, "_prefix");
    __publicField(this, "_size");
    this._tree = e, this._prefix = n;
  }
  atPrefix(e) {
    if (!e.startsWith(this._prefix)) throw new Error("Mismatched prefix");
    const [n, o] = v(this._tree, e.slice(this._prefix.length));
    if (n === void 0) {
      const [s, r] = L(o);
      for (const i of s.keys()) if (i !== g && i.startsWith(r)) {
        const c = /* @__PURE__ */ new Map();
        return c.set(i.slice(r.length), s.get(i)), new _I(c, e);
      }
    }
    return new _I(n, e);
  }
  clear() {
    this._size = void 0, this._tree.clear();
  }
  delete(e) {
    return this._size = void 0, St(this._tree, e);
  }
  entries() {
    return new V(this, xt);
  }
  forEach(e) {
    for (const [n, o] of this) e(n, o, this);
  }
  fuzzyGet(e, n) {
    return zt(this._tree, e, n);
  }
  get(e) {
    const n = T(this._tree, e);
    return n !== void 0 ? n.get(g) : void 0;
  }
  has(e) {
    var _a;
    return ((_a = T(this._tree, e)) == null ? void 0 : _a.has(g)) ?? false;
  }
  keys() {
    return new V(this, B);
  }
  set(e, n) {
    if (typeof e != "string") throw new Error("key must be a string");
    return this._size = void 0, M(this._tree, e).set(g, n), this;
  }
  get size() {
    if (this._size) return this._size;
    this._size = 0;
    const e = this.entries();
    for (; !e.next().done; ) this._size += 1;
    return this._size;
  }
  update(e, n) {
    if (typeof e != "string") throw new Error("key must be a string");
    this._size = void 0;
    const o = M(this._tree, e);
    return o.set(g, n(o.get(g))), this;
  }
  fetch(e, n) {
    if (typeof e != "string") throw new Error("key must be a string");
    this._size = void 0;
    const o = M(this._tree, e);
    let s = o.get(g);
    return s === void 0 && o.set(g, s = n()), s;
  }
  values() {
    return new V(this, G);
  }
  [Symbol.iterator]() {
    return this.entries();
  }
  static from(e) {
    const n = new _I();
    for (const [o, s] of e) n.set(o, s);
    return n;
  }
  static fromObject(e) {
    return _I.from(Object.entries(e));
  }
};
var v = (t, e, n = []) => {
  if (e.length === 0 || t == null) return [t, n];
  for (const o of t.keys()) if (o !== g && e.startsWith(o)) return n.push([t, o]), v(t.get(o), e.slice(o.length), n);
  return n.push([t, e]), v(void 0, "", n);
};
var T = (t, e) => {
  if (e.length === 0 || !t) return t;
  for (const n of t.keys()) if (n !== g && e.startsWith(n)) return T(t.get(n), e.slice(n.length));
};
var M = (t, e) => {
  const n = e.length;
  t: for (let o = 0; t && o < n; ) {
    for (const r of t.keys()) if (r !== g && e[o] === r[0]) {
      const i = Math.min(n - o, r.length);
      let c = 1;
      for (; c < i && e[o + c] === r[c]; ) ++c;
      const u = t.get(r);
      if (c === r.length) t = u;
      else {
        const d = /* @__PURE__ */ new Map();
        d.set(r.slice(c), u), t.set(e.slice(o, o + c), d), t.delete(r), t = d;
      }
      o += c;
      continue t;
    }
    const s = /* @__PURE__ */ new Map();
    return t.set(e.slice(o), s), s;
  }
  return t;
};
var St = (t, e) => {
  const [n, o] = v(t, e);
  if (n !== void 0) {
    if (n.delete(g), n.size === 0) Q(o);
    else if (n.size === 1) {
      const [s, r] = n.entries().next().value;
      Y(o, s, r);
    }
  }
};
var Q = (t) => {
  if (t.length === 0) return;
  const [e, n] = L(t);
  if (e.delete(n), e.size === 0) Q(t.slice(0, -1));
  else if (e.size === 1) {
    const [o, s] = e.entries().next().value;
    o !== g && Y(t.slice(0, -1), o, s);
  }
};
var Y = (t, e, n) => {
  if (t.length === 0) return;
  const [o, s] = L(t);
  o.set(s + e, n), o.delete(s);
};
var L = (t) => t[t.length - 1];
var Z = (t, e) => t._idToShortId.has(e);
var bt = (t, e) => {
  const n = t._idToShortId.get(e);
  if (n != null) return t._storedFields.get(n);
};
var vt = /[\n\r\p{Z}\p{P}]+/u;
var D = "or";
var H = "and";
var Ft = "and_not";
var X = (t) => new Promise((e) => setTimeout(e, t));
var kt = (t, e) => {
  t.includes(e) || t.push(e);
};
var tt = (t, e) => {
  for (const n of e) t.includes(n) || t.push(n);
};
var et = ({ score: t }, { score: e }) => e - t;
var nt = () => /* @__PURE__ */ new Map();
var F = (t) => {
  const e = /* @__PURE__ */ new Map();
  for (const n of Object.keys(t)) e.set(parseInt(n, 10), t[n]);
  return e;
};
var k = async (t) => {
  const e = /* @__PURE__ */ new Map();
  let n = 0;
  for (const o of Object.keys(t)) e.set(parseInt(o, 10), t[o]), ++n % 1e3 === 0 && await X(0);
  return e;
};
var E = (t, e) => Object.prototype.hasOwnProperty.call(t, e) ? t[e] : void 0;
var ot = { [D]: (t, e) => {
  for (const n of e.keys()) {
    const o = t.get(n);
    if (o == null) t.set(n, e.get(n));
    else {
      const { score: s, terms: r, match: i } = e.get(n);
      o.score = o.score + s, o.match = Object.assign(o.match, i), tt(o.terms, r);
    }
  }
  return t;
}, [H]: (t, e) => {
  const n = /* @__PURE__ */ new Map();
  for (const o of e.keys()) {
    const s = t.get(o);
    if (s == null) continue;
    const { score: r, terms: i, match: c } = e.get(o);
    tt(s.terms, i), n.set(o, { score: s.score + r, terms: s.terms, match: Object.assign(s.match, c) });
  }
  return n;
}, [Ft]: (t, e) => {
  for (const n of e.keys()) t.delete(n);
  return t;
} };
var Ct = (t, e, n, o, s, r) => {
  const { k: i, b: c, d: u } = r;
  return Math.log(1 + (n - e + 0.5) / (e + 0.5)) * (u + t * (i + 1) / (t + i * (1 - c + c * o / s)));
};
var Ot = (t) => (e, n, o) => ({ term: e, fuzzy: typeof t.fuzzy == "function" ? t.fuzzy(e, n, o) : t.fuzzy ?? false, prefix: typeof t.prefix == "function" ? t.prefix(e, n, o) : t.prefix === true, termBoost: typeof t.boostTerm == "function" ? t.boostTerm(e, n, o) : 1 });
var st = (t, e, n, o) => {
  for (const s of Object.keys(t._fieldIds)) if (t._fieldIds[s] === n) {
    t._options.logger("warn", `SlimSearch: document with ID ${t._documentIds.get(e)} has changed before removal: term "${o}" was not present in field "${s}". Removing a document after it has changed can corrupt the index!`, "version_conflict");
    return;
  }
};
var it = (t, e, n, o) => {
  const s = t._index.fetch(o, nt);
  let r = s.get(e);
  if (r == null) r = /* @__PURE__ */ new Map(), r.set(n, 1), s.set(e, r);
  else {
    const i = r.get(n);
    r.set(n, (i ?? 0) + 1);
  }
};
var A = (t, e, n, o) => {
  if (!t._index.has(o)) {
    st(t, n, e, o);
    return;
  }
  const s = t._index.fetch(o, nt), r = s.get(e), i = r == null ? void 0 : r.get(n);
  !r || typeof i > "u" ? st(t, n, e, o) : i <= 1 ? r.size <= 1 ? s.delete(e) : r.delete(n) : r.set(n, i - 1), t._index.get(o).size === 0 && t._index.delete(o);
};
var Vt = (t, e, n, o, s) => {
  let r = t._fieldLength.get(e);
  r == null && t._fieldLength.set(e, r = []), r[n] = s;
  const i = (t._avgFieldLength[n] || 0) * o + s;
  t._avgFieldLength[n] = i / (o + 1);
};
var Tt = (t, e) => {
  const n = t._nextId;
  return t._idToShortId.set(e, n), t._documentIds.set(n, e), t._documentCount += 1, t._nextId += 1, n;
};
var Mt = (t, e, n) => {
  const { storeFields: o, extractField: s } = t._options;
  if ((o == null ? void 0 : o.length) === 0) return;
  let r = t._storedFields.get(e);
  r === void 0 && t._storedFields.set(e, r = {});
  for (const i of o) {
    const c = s(n, i);
    c != null && (r[i] = c);
  }
};
var j = (t, e) => {
  const { extractField: n, tokenize: o, processTerm: s, fields: r, idField: i } = t._options, c = n(e, i);
  if (c == null) throw new Error(`SlimSearch: document does not have ID field "${i}"`);
  if (Z(t, c)) throw new Error(`SlimSearch: duplicate ID ${c}`);
  const u = Tt(t, c);
  Mt(t, u, e);
  for (const d of r) {
    const a = n(e, d);
    if (a == null) continue;
    const h = o(a.toString(), d), f = t._fieldIds[d], _ = new Set(h).size;
    Vt(t, u, f, t._documentCount - 1, _);
    for (const p of h) {
      const l = s(p, d);
      if (Array.isArray(l)) for (const m of l) it(t, f, u, m);
      else l && it(t, f, u, l);
    }
  }
};
var q = (t, e) => {
  for (const n of e) j(t, n);
};
var Lt = (t, e, n = {}) => {
  const { chunkSize: o = 10 } = n, s = { chunk: [], promise: Promise.resolve() }, { chunk: r, promise: i } = e.reduce(({ chunk: c, promise: u }, d, a) => (c.push(d), (a + 1) % o === 0 ? { chunk: [], promise: u.then(() => new Promise((h) => setTimeout(h, 0))).then(() => q(t, c)) } : { chunk: c, promise: u }), s);
  return i.then(() => q(t, r));
};
var Dt = { k: 1.2, b: 0.7, d: 0.5 };
var $ = { idField: "id", extractField: (t, e) => t[e], tokenize: (t) => t.split(vt), processTerm: (t) => t.toLowerCase(), fields: void 0, searchOptions: void 0, storeFields: [], logger: (t, e) => {
  var _a;
  (_a = console == null ? void 0 : console[t]) == null ? void 0 : _a.call(console, e);
}, autoVacuum: true };
var rt = { combineWith: D, prefix: false, fuzzy: false, maxFuzzy: 6, boost: {}, weights: { fuzzy: 0.45, prefix: 0.375 }, bm25: Dt };
var Et = { combineWith: H, prefix: (t, e, n) => e === n.length - 1 };
var N = { batchSize: 1e3, batchWait: 10 };
var W = { minDirtFactor: 0.1, minDirtCount: 20 };
var P = { ...N, ...W };
var At = (t) => {
  if ($.hasOwnProperty(t)) return E($, t);
  throw new Error(`SlimSearch: unknown option "${t}"`);
};
var R = Symbol("*");
var jt = (t, e) => {
  const n = /* @__PURE__ */ new Map(), o = { ...t._options.searchOptions, ...e };
  for (const [s, r] of t._documentIds) {
    const i = o.boostDocument ? o.boostDocument(r, "", t._storedFields.get(s)) : 1;
    n.set(s, { score: i, terms: [], match: {} });
  }
  return n;
};
var ct = (t, e = D) => {
  if (t.length === 0) return /* @__PURE__ */ new Map();
  const n = e.toLowerCase();
  if (!(n in ot)) throw new Error(`Invalid combination operator: ${e}`);
  return t.reduce(ot[n]);
};
var J = (t, e, n, o, s, r, i, c, u, d = /* @__PURE__ */ new Map()) => {
  if (r == null) return d;
  for (const a of Object.keys(i)) {
    const h = i[a], f = t._fieldIds[a], _ = r.get(f);
    if (_ == null) continue;
    let p = _.size;
    const l = t._avgFieldLength[f];
    for (const m of _.keys()) {
      if (!t._documentIds.has(m)) {
        A(t, f, m, n), p -= 1;
        continue;
      }
      const y = c ? c(t._documentIds.get(m), n, t._storedFields.get(m)) : 1;
      if (!y) continue;
      const w = _.get(m), C = t._fieldLength.get(m)[f], O = Ct(w, p, t._documentCount, C, l, u), b = o * s * h * y * O, x = d.get(m);
      if (x) {
        x.score += b, kt(x.terms, e);
        const S = E(x.match, n);
        S ? S.push(a) : x.match[n] = [a];
      } else d.set(m, { score: b, terms: [e], match: { [n]: [a] } });
    }
  }
  return d;
};
var qt = (t, e, n) => {
  const o = { ...t._options.searchOptions, ...n }, s = (o.fields ?? t._options.fields).reduce((l, m) => ({ ...l, [m]: E(o.boost, m) || 1 }), {}), { boostDocument: r, weights: i, maxFuzzy: c, bm25: u } = o, { fuzzy: d, prefix: a } = { ...rt.weights, ...i }, h = t._index.get(e.term), f = J(t, e.term, e.term, 1, e.termBoost, h, s, r, u);
  let _, p;
  if (e.prefix && (_ = t._index.atPrefix(e.term)), e.fuzzy) {
    const l = e.fuzzy === true ? 0.2 : e.fuzzy, m = l < 1 ? Math.min(c, Math.round(e.term.length * l)) : l;
    m && (p = t._index.fuzzyGet(e.term, m));
  }
  if (_) for (const [l, m] of _) {
    const y = l.length - e.term.length;
    if (!y) continue;
    p == null ? void 0 : p.delete(l);
    const w = a * l.length / (l.length + 0.3 * y);
    J(t, e.term, l, w, e.termBoost, m, s, r, u, f);
  }
  if (p) for (const l of p.keys()) {
    const [m, y] = p.get(l);
    if (!y) continue;
    const w = d * l.length / (l.length + y);
    J(t, e.term, l, w, e.termBoost, m, s, r, u, f);
  }
  return f;
};
var ut = (t, e, n = {}) => {
  if (e === R) return jt(t, n);
  if (typeof e != "string") {
    const a = { ...n, ...e, queries: void 0 }, h = e.queries.map((f) => ut(t, f, a));
    return ct(h, a.combineWith);
  }
  const { tokenize: o, processTerm: s, searchOptions: r } = t._options, i = { tokenize: o, processTerm: s, ...r, ...n }, { tokenize: c, processTerm: u } = i, d = c(e).flatMap((a) => u(a)).filter((a) => !!a).map(Ot(i)).map((a) => qt(t, a, i));
  return ct(d, i.combineWith);
};
var dt = (t, e, n = {}) => {
  const { searchOptions: o } = t._options, s = { ...o, ...n }, r = ut(t, e, n), i = [];
  for (const [c, { score: u, terms: d, match: a }] of r) {
    const h = d.length || 1, f = { id: t._documentIds.get(c), score: u * h, terms: Object.keys(a), queryTerms: d, match: a };
    Object.assign(f, t._storedFields.get(c)), (s.filter == null || s.filter(f)) && i.push(f);
  }
  return e === R && s.boostDocument == null || i.sort(et), i;
};
var $t = (t, e, n = {}) => {
  n = { ...t._options.autoSuggestOptions, ...n };
  const o = /* @__PURE__ */ new Map();
  for (const { score: r, terms: i } of dt(t, e, n)) {
    const c = i.join(" "), u = o.get(c);
    u != null ? (u.score += r, u.count += 1) : o.set(c, { score: r, terms: i, count: 1 });
  }
  const s = [];
  for (const [r, { score: i, terms: c, count: u }] of o) s.push({ suggestion: r, terms: c, score: i / u });
  return s.sort(et), s;
};
var Nt = class {
  constructor(e) {
    __publicField(this, "_options");
    __publicField(this, "_index");
    __publicField(this, "_documentCount");
    __publicField(this, "_documentIds");
    __publicField(this, "_idToShortId");
    __publicField(this, "_fieldIds");
    __publicField(this, "_fieldLength");
    __publicField(this, "_avgFieldLength");
    __publicField(this, "_nextId");
    __publicField(this, "_storedFields");
    __publicField(this, "_dirtCount");
    __publicField(this, "_currentVacuum");
    __publicField(this, "_enqueuedVacuum");
    __publicField(this, "_enqueuedVacuumConditions");
    if (!(e == null ? void 0 : e.fields)) throw new Error('SlimSearch: option "fields" must be provided');
    const n = e.autoVacuum == null || e.autoVacuum === true ? P : e.autoVacuum;
    this._options = { ...$, ...e, autoVacuum: n, searchOptions: { ...rt, ...e.searchOptions }, autoSuggestOptions: { ...Et, ...e.autoSuggestOptions } }, this._index = new I(), this._documentCount = 0, this._documentIds = /* @__PURE__ */ new Map(), this._idToShortId = /* @__PURE__ */ new Map(), this._fieldIds = {}, this._fieldLength = /* @__PURE__ */ new Map(), this._avgFieldLength = [], this._nextId = 0, this._storedFields = /* @__PURE__ */ new Map(), this._dirtCount = 0, this._currentVacuum = null, this._enqueuedVacuum = null, this._enqueuedVacuumConditions = W, this.addFields(this._options.fields);
  }
  get isVacuuming() {
    return this._currentVacuum != null;
  }
  get dirtCount() {
    return this._dirtCount;
  }
  get dirtFactor() {
    return this._dirtCount / (1 + this._documentCount + this._dirtCount);
  }
  get documentCount() {
    return this._documentCount;
  }
  get termCount() {
    return this._index.size;
  }
  toJSON() {
    const e = [];
    for (const [n, o] of this._index) {
      const s = {};
      for (const [r, i] of o) s[r] = Object.fromEntries(i);
      e.push([n, s]);
    }
    return { documentCount: this._documentCount, nextId: this._nextId, documentIds: Object.fromEntries(this._documentIds), fieldIds: this._fieldIds, fieldLength: Object.fromEntries(this._fieldLength), averageFieldLength: this._avgFieldLength, storedFields: Object.fromEntries(this._storedFields), dirtCount: this._dirtCount, index: e, version: 2 };
  }
  addFields(e) {
    for (let n = 0; n < e.length; n++) this._fieldIds[e[n]] = n;
  }
};
var at = (t) => `SlimSearch: ${t} should be given the same options used when serializing the index`;
var lt = (t) => new Nt(t);
var ht = ({ documentCount: t, nextId: e, fieldIds: n, averageFieldLength: o, dirtCount: s, version: r }, i) => {
  if (r !== 2) throw new Error("SlimSearch: cannot deserialize an index created with an incompatible version");
  const c = lt(i);
  return c._documentCount = t, c._nextId = e, c._idToShortId = /* @__PURE__ */ new Map(), c._fieldIds = n, c._avgFieldLength = o, c._dirtCount = s ?? 0, c._index = new I(), c;
};
var ft = (t, e) => {
  const { index: n, documentIds: o, fieldLength: s, storedFields: r } = t, i = ht(t, e);
  i._documentIds = F(o), i._fieldLength = F(s), i._storedFields = F(r);
  for (const [c, u] of i._documentIds) i._idToShortId.set(u, c);
  for (const [c, u] of n) {
    const d = /* @__PURE__ */ new Map();
    for (const a of Object.keys(u)) d.set(parseInt(a, 10), F(u[a]));
    i._index.set(c, d);
  }
  return i;
};
var mt = async (t, e) => {
  const { index: n, documentIds: o, fieldLength: s, storedFields: r } = t, i = ht(t, e);
  i._documentIds = await k(o), i._fieldLength = await k(s), i._storedFields = await k(r);
  for (const [u, d] of i._documentIds) i._idToShortId.set(d, u);
  let c = 0;
  for (const [u, d] of n) {
    const a = /* @__PURE__ */ new Map();
    for (const h of Object.keys(d)) a.set(parseInt(h, 10), await k(d[h]));
    ++c % 1e3 === 0 && await X(0), i._index.set(u, a);
  }
  return i;
};
var Wt = (t, e) => {
  if (!e) throw new Error(at("loadJSONIndex"));
  return ft(JSON.parse(t), e);
};
var Pt = (t, e) => {
  if (!e) throw new Error(at("loadJSONIndexAsync"));
  return mt(JSON.parse(t), e);
};
var _t = (t, e) => {
  if (e == null) return true;
  const { minDirtCount: n = P.minDirtCount, minDirtFactor: o = P.minDirtFactor } = e;
  return t.dirtCount >= n && t.dirtFactor >= o;
};
var gt = async (t, e, n) => {
  const o = t._dirtCount;
  if (_t(t, n)) {
    const s = e.batchSize ?? N.batchSize, r = e.batchWait ?? N.batchWait;
    let i = 1;
    for (const [c, u] of t._index) {
      for (const [d, a] of u) for (const [h] of a) t._documentIds.has(h) || (a.size <= 1 ? u.delete(d) : a.delete(h));
      t._index.get(c).size === 0 && t._index.delete(c), i % s === 0 && await new Promise((d) => setTimeout(d, r)), i += 1;
    }
    t._dirtCount -= o;
  }
  await null, t._currentVacuum = t._enqueuedVacuum, t._enqueuedVacuum = null;
};
var pt = (t, e, n) => t._currentVacuum ? (t._enqueuedVacuumConditions = t._enqueuedVacuumConditions && n, t._enqueuedVacuum != null || (t._enqueuedVacuum = t._currentVacuum.then(() => {
  const o = t._enqueuedVacuumConditions;
  return t._enqueuedVacuumConditions = W, gt(t, e, o);
})), t._enqueuedVacuum) : _t(t, n) ? (t._currentVacuum = gt(t, e), t._currentVacuum) : Promise.resolve();
var wt = (t) => {
  if (t._options.autoVacuum === false) return;
  const { minDirtFactor: e, minDirtCount: n, batchSize: o, batchWait: s } = t._options.autoVacuum;
  pt(t, { batchSize: o, batchWait: s }, { minDirtCount: n, minDirtFactor: e });
};
var Rt = (t, e = {}) => pt(t, e);
var yt = (t, e, n, o) => {
  if (n === 1) {
    t._avgFieldLength[e] = 0;
    return;
  }
  const s = t._avgFieldLength[e] * n - o;
  t._avgFieldLength[e] = s / (n - 1);
};
var U = (t, e) => {
  var _a;
  const n = t._idToShortId.get(e);
  if (n == null) throw new Error(`SlimSearch: cannot discard document with ID ${e}: it is not in the index`);
  t._idToShortId.delete(e), t._documentIds.delete(n), t._storedFields.delete(n), (_a = t._fieldLength.get(n)) == null ? void 0 : _a.forEach((o, s) => {
    yt(t, s, t._documentCount, o);
  }), t._fieldLength.delete(n), t._documentCount -= 1, t._dirtCount += 1, wt(t);
};
var Jt = (t, e) => {
  const n = t._options.autoVacuum;
  try {
    t._options.autoVacuum = false;
    for (const o of e) U(t, o);
  } finally {
    t._options.autoVacuum = n;
  }
  wt(t);
};
var It = (t, e) => {
  const { tokenize: n, processTerm: o, extractField: s, fields: r, idField: i } = t._options, c = s(e, i);
  if (c == null) throw new Error(`SlimSearch: document does not have ID field "${i}"`);
  const u = t._idToShortId.get(c);
  if (u == null) throw new Error(`SlimSearch: cannot remove document with ID ${c}: it is not in the index`);
  for (const d of r) {
    const a = s(e, d);
    if (a == null) continue;
    const h = n(a.toString(), d), f = t._fieldIds[d], _ = new Set(h).size;
    yt(t, f, t._documentCount, _);
    for (const p of h) {
      const l = o(p, d);
      if (Array.isArray(l)) for (const m of l) A(t, f, u, m);
      else l && A(t, f, u, l);
    }
  }
  t._storedFields.delete(u), t._documentIds.delete(u), t._idToShortId.delete(c), t._fieldLength.delete(u), t._documentCount -= 1;
};
var Ut = function(t, e) {
  if (e) for (const n of e) It(t, n);
  else {
    if (arguments.length > 1) throw new Error("Expected documents to be present. Omit the argument to remove all documents.");
    t._index = new I(), t._documentCount = 0, t._documentIds = /* @__PURE__ */ new Map(), t._idToShortId = /* @__PURE__ */ new Map(), t._fieldLength = /* @__PURE__ */ new Map(), t._avgFieldLength = [], t._storedFields = /* @__PURE__ */ new Map(), t._nextId = 0;
  }
};
var Bt = (t, e) => {
  const { idField: n, extractField: o } = t._options, s = o(e, n);
  U(t, s), j(t, e);
};
export {
  I as SearchableMap,
  R as WILDCARD,
  j as add,
  q as addAll,
  Lt as addAllAsync,
  $t as autoSuggest,
  lt as createIndex,
  U as discard,
  Jt as discardAll,
  At as getDefaultValue,
  bt as getStoredFields,
  Z as has,
  ft as loadIndex,
  mt as loadIndexAsync,
  Wt as loadJSONIndex,
  Pt as loadJSONIndexAsync,
  It as remove,
  Ut as removeAll,
  Bt as replace,
  dt as search,
  Rt as vacuum
};
//# sourceMappingURL=slimsearch.js.map
