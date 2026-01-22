var ol = {};
/**
* @vue/shared v3.5.18
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function et(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const ve = ol.NODE_ENV !== "production" ? Object.freeze({}) : {}, xs = ol.NODE_ENV !== "production" ? Object.freeze([]) : [], Fe = () => {
}, eo = () => !1, En = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), ii = (e) => e.startsWith("onUpdate:"), ge = Object.assign, il = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, jf = Object.prototype.hasOwnProperty, xe = (e, t) => jf.call(e, t), te = Array.isArray, ns = (e) => zs(e) === "[object Map]", hs = (e) => zs(e) === "[object Set]", ra = (e) => zs(e) === "[object Date]", Hf = (e) => zs(e) === "[object RegExp]", ce = (e) => typeof e == "function", de = (e) => typeof e == "string", Ot = (e) => typeof e == "symbol", Ee = (e) => e !== null && typeof e == "object", Vi = (e) => (Ee(e) || ce(e)) && ce(e.then) && ce(e.catch), $c = Object.prototype.toString, zs = (e) => $c.call(e), rl = (e) => zs(e).slice(8, -1), Ii = (e) => zs(e) === "[object Object]", ll = (e) => de(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Bn = /* @__PURE__ */ et(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Dc = /* @__PURE__ */ et(
  "bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"
), Mi = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, Uf = /-(\w)/g, Ie = Mi(
  (e) => e.replace(Uf, (t, n) => n ? n.toUpperCase() : "")
), qf = /\B([A-Z])/g, ut = Mi(
  (e) => e.replace(qf, "-$1").toLowerCase()
), un = Mi((e) => e.charAt(0).toUpperCase() + e.slice(1)), ln = Mi(
  (e) => e ? `on${un(e)}` : ""
), yt = (e, t) => !Object.is(e, t), Rn = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, cs = (e, t, n, s = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: s,
    value: n
  });
}, ri = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, li = (e) => {
  const t = de(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let la;
const $o = () => la || (la = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function zf(e, t) {
  return e + JSON.stringify(
    t,
    (n, s) => typeof s == "function" ? s.toString() : s
  );
}
const ro = {
  1: "TEXT",
  2: "CLASS",
  4: "STYLE",
  8: "PROPS",
  16: "FULL_PROPS",
  32: "NEED_HYDRATION",
  64: "STABLE_FRAGMENT",
  128: "KEYED_FRAGMENT",
  256: "UNKEYED_FRAGMENT",
  512: "NEED_PATCH",
  1024: "DYNAMIC_SLOTS",
  2048: "DEV_ROOT_FRAGMENT",
  [-1]: "CACHED",
  [-2]: "BAIL"
}, Wf = {
  1: "STABLE",
  2: "DYNAMIC",
  3: "FORWARDED"
}, Kf = "Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt,console,Error,Symbol", Gf = /* @__PURE__ */ et(Kf), aa = 2;
function Jf(e, t = 0, n = e.length) {
  if (t = Math.max(0, Math.min(t, e.length)), n = Math.max(0, Math.min(n, e.length)), t > n) return "";
  let s = e.split(/(\r?\n)/);
  const o = s.filter((l, a) => a % 2 === 1);
  s = s.filter((l, a) => a % 2 === 0);
  let i = 0;
  const r = [];
  for (let l = 0; l < s.length; l++)
    if (i += s[l].length + (o[l] && o[l].length || 0), i >= t) {
      for (let a = l - aa; a <= l + aa || n > i; a++) {
        if (a < 0 || a >= s.length) continue;
        const u = a + 1;
        r.push(
          `${u}${" ".repeat(Math.max(3 - String(u).length, 0))}|  ${s[a]}`
        );
        const f = s[a].length, c = o[a] && o[a].length || 0;
        if (a === l) {
          const p = t - (i - (f + c)), h = Math.max(
            1,
            n > i ? f - p : n - t
          );
          r.push("   |  " + " ".repeat(p) + "^".repeat(h));
        } else if (a > l) {
          if (n > i) {
            const p = Math.max(Math.min(n - i, f), 1);
            r.push("   |  " + "^".repeat(p));
          }
          i += f + c;
        }
      }
      break;
    }
  return r.join(`
`);
}
function Ve(e) {
  if (te(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const s = e[n], o = de(s) ? Ac(s) : Ve(s);
      if (o)
        for (const i in o)
          t[i] = o[i];
    }
    return t;
  } else if (de(e) || Ee(e))
    return e;
}
const Yf = /;(?![^(]*\))/g, Xf = /:([^]+)/, Qf = /\/\*[^]*?\*\//g;
function Ac(e) {
  const t = {};
  return e.replace(Qf, "").split(Yf).forEach((n) => {
    if (n) {
      const s = n.split(Xf);
      s.length > 1 && (t[s[0].trim()] = s[1].trim());
    }
  }), t;
}
function Zf(e) {
  if (!e) return "";
  if (de(e)) return e;
  let t = "";
  for (const n in e) {
    const s = e[n];
    if (de(s) || typeof s == "number") {
      const o = n.startsWith("--") ? n : ut(n);
      t += `${o}:${s};`;
    }
  }
  return t;
}
function be(e) {
  let t = "";
  if (de(e))
    t = e;
  else if (te(e))
    for (let n = 0; n < e.length; n++) {
      const s = be(e[n]);
      s && (t += s + " ");
    }
  else if (Ee(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
function ep(e) {
  if (!e) return null;
  let { class: t, style: n } = e;
  return t && !de(t) && (e.class = be(t)), n && (e.style = Ve(n)), e;
}
const tp = "html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot", np = "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view", sp = "annotation,annotation-xml,maction,maligngroup,malignmark,math,menclose,merror,mfenced,mfrac,mfraction,mglyph,mi,mlabeledtr,mlongdiv,mmultiscripts,mn,mo,mover,mpadded,mphantom,mprescripts,mroot,mrow,ms,mscarries,mscarry,msgroup,msline,mspace,msqrt,msrow,mstack,mstyle,msub,msubsup,msup,mtable,mtd,mtext,mtr,munder,munderover,none,semantics", op = "area,base,br,col,embed,hr,img,input,link,meta,param,source,track,wbr", Vc = /* @__PURE__ */ et(tp), Ic = /* @__PURE__ */ et(np), Mc = /* @__PURE__ */ et(sp), ip = /* @__PURE__ */ et(op), Pc = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", rp = /* @__PURE__ */ et(Pc), ca = /* @__PURE__ */ et(
  Pc + ",async,autofocus,autoplay,controls,default,defer,disabled,hidden,inert,loop,open,required,reversed,scoped,seamless,checked,muted,multiple,selected"
);
function al(e) {
  return !!e || e === "";
}
const lp = /* @__PURE__ */ et(
  "accept,accept-charset,accesskey,action,align,allow,alt,async,autocapitalize,autocomplete,autofocus,autoplay,background,bgcolor,border,buffered,capture,challenge,charset,checked,cite,class,code,codebase,color,cols,colspan,content,contenteditable,contextmenu,controls,coords,crossorigin,csp,data,datetime,decoding,default,defer,dir,dirname,disabled,download,draggable,dropzone,enctype,enterkeyhint,for,form,formaction,formenctype,formmethod,formnovalidate,formtarget,headers,height,hidden,high,href,hreflang,http-equiv,icon,id,importance,inert,integrity,ismap,itemprop,keytype,kind,label,lang,language,loading,list,loop,low,manifest,max,maxlength,minlength,media,min,multiple,muted,name,novalidate,open,optimum,pattern,ping,placeholder,poster,preload,radiogroup,readonly,referrerpolicy,rel,required,reversed,rows,rowspan,sandbox,scope,scoped,selected,shape,size,sizes,slot,span,spellcheck,src,srcdoc,srclang,srcset,start,step,style,summary,tabindex,target,title,translate,type,usemap,value,width,wrap"
), ap = /* @__PURE__ */ et(
  "xmlns,accent-height,accumulate,additive,alignment-baseline,alphabetic,amplitude,arabic-form,ascent,attributeName,attributeType,azimuth,baseFrequency,baseline-shift,baseProfile,bbox,begin,bias,by,calcMode,cap-height,class,clip,clipPathUnits,clip-path,clip-rule,color,color-interpolation,color-interpolation-filters,color-profile,color-rendering,contentScriptType,contentStyleType,crossorigin,cursor,cx,cy,d,decelerate,descent,diffuseConstant,direction,display,divisor,dominant-baseline,dur,dx,dy,edgeMode,elevation,enable-background,end,exponent,fill,fill-opacity,fill-rule,filter,filterRes,filterUnits,flood-color,flood-opacity,font-family,font-size,font-size-adjust,font-stretch,font-style,font-variant,font-weight,format,from,fr,fx,fy,g1,g2,glyph-name,glyph-orientation-horizontal,glyph-orientation-vertical,glyphRef,gradientTransform,gradientUnits,hanging,height,href,hreflang,horiz-adv-x,horiz-origin-x,id,ideographic,image-rendering,in,in2,intercept,k,k1,k2,k3,k4,kernelMatrix,kernelUnitLength,kerning,keyPoints,keySplines,keyTimes,lang,lengthAdjust,letter-spacing,lighting-color,limitingConeAngle,local,marker-end,marker-mid,marker-start,markerHeight,markerUnits,markerWidth,mask,maskContentUnits,maskUnits,mathematical,max,media,method,min,mode,name,numOctaves,offset,opacity,operator,order,orient,orientation,origin,overflow,overline-position,overline-thickness,panose-1,paint-order,path,pathLength,patternContentUnits,patternTransform,patternUnits,ping,pointer-events,points,pointsAtX,pointsAtY,pointsAtZ,preserveAlpha,preserveAspectRatio,primitiveUnits,r,radius,referrerPolicy,refX,refY,rel,rendering-intent,repeatCount,repeatDur,requiredExtensions,requiredFeatures,restart,result,rotate,rx,ry,scale,seed,shape-rendering,slope,spacing,specularConstant,specularExponent,speed,spreadMethod,startOffset,stdDeviation,stemh,stemv,stitchTiles,stop-color,stop-opacity,strikethrough-position,strikethrough-thickness,string,stroke,stroke-dasharray,stroke-dashoffset,stroke-linecap,stroke-linejoin,stroke-miterlimit,stroke-opacity,stroke-width,style,surfaceScale,systemLanguage,tabindex,tableValues,target,targetX,targetY,text-anchor,text-decoration,text-rendering,textLength,to,transform,transform-origin,type,u1,u2,underline-position,underline-thickness,unicode,unicode-bidi,unicode-range,units-per-em,v-alphabetic,v-hanging,v-ideographic,v-mathematical,values,vector-effect,version,vert-adv-y,vert-origin-x,vert-origin-y,viewBox,viewTarget,visibility,width,widths,word-spacing,writing-mode,x,x-height,x1,x2,xChannelSelector,xlink:actuate,xlink:arcrole,xlink:href,xlink:role,xlink:show,xlink:title,xlink:type,xmlns:xlink,xml:base,xml:lang,xml:space,y,y1,y2,yChannelSelector,z,zoomAndPan"
);
function cp(e) {
  if (e == null)
    return !1;
  const t = typeof e;
  return t === "string" || t === "number" || t === "boolean";
}
const up = /[ !"#$%&'()*+,./:;<=>?@[\\\]^`{|}~]/g;
function dp(e, t) {
  return e.replace(
    up,
    (n) => `\\${n}`
  );
}
function fp(e, t) {
  if (e.length !== t.length) return !1;
  let n = !0;
  for (let s = 0; n && s < e.length; s++)
    n = qn(e[s], t[s]);
  return n;
}
function qn(e, t) {
  if (e === t) return !0;
  let n = ra(e), s = ra(t);
  if (n || s)
    return n && s ? e.getTime() === t.getTime() : !1;
  if (n = Ot(e), s = Ot(t), n || s)
    return e === t;
  if (n = te(e), s = te(t), n || s)
    return n && s ? fp(e, t) : !1;
  if (n = Ee(e), s = Ee(t), n || s) {
    if (!n || !s)
      return !1;
    const o = Object.keys(e).length, i = Object.keys(t).length;
    if (o !== i)
      return !1;
    for (const r in e) {
      const l = e.hasOwnProperty(r), a = t.hasOwnProperty(r);
      if (l && !a || !l && a || !qn(e[r], t[r]))
        return !1;
    }
  }
  return String(e) === String(t);
}
function Pi(e, t) {
  return e.findIndex((n) => qn(n, t));
}
const Rc = (e) => !!(e && e.__v_isRef === !0), Q = (e) => de(e) ? e : e == null ? "" : te(e) || Ee(e) && (e.toString === $c || !ce(e.toString)) ? Rc(e) ? Q(e.value) : JSON.stringify(e, Lc, 2) : String(e), Lc = (e, t) => Rc(t) ? Lc(e, t.value) : ns(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [s, o], i) => (n[sr(s, i) + " =>"] = o, n),
    {}
  )
} : hs(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => sr(n))
} : Ot(t) ? sr(t) : Ee(t) && !te(t) && !Ii(t) ? String(t) : t, sr = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    Ot(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
function Fc(e) {
  return e == null ? "initial" : typeof e == "string" ? e === "" ? " " : e : ((typeof e != "number" || !Number.isFinite(e)) && ol.NODE_ENV !== "production" && console.warn(
    "[Vue warn] Invalid value used for CSS binding. Expected a string or a finite number but received:",
    e
  ), String(e));
}
var Ce = {};
function Bt(e, ...t) {
  console.warn(`[Vue warn] ${e}`, ...t);
}
let at;
class cl {
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.parent = at, !t && at && (this.index = (at.scopes || (at.scopes = [])).push(
      this
    ) - 1);
  }
  get active() {
    return this._active;
  }
  pause() {
    if (this._active) {
      this._isPaused = !0;
      let t, n;
      if (this.scopes)
        for (t = 0, n = this.scopes.length; t < n; t++)
          this.scopes[t].pause();
      for (t = 0, n = this.effects.length; t < n; t++)
        this.effects[t].pause();
    }
  }
  /**
   * Resumes the effect scope, including all child scopes and effects.
   */
  resume() {
    if (this._active && this._isPaused) {
      this._isPaused = !1;
      let t, n;
      if (this.scopes)
        for (t = 0, n = this.scopes.length; t < n; t++)
          this.scopes[t].resume();
      for (t = 0, n = this.effects.length; t < n; t++)
        this.effects[t].resume();
    }
  }
  run(t) {
    if (this._active) {
      const n = at;
      try {
        return at = this, t();
      } finally {
        at = n;
      }
    } else Ce.NODE_ENV !== "production" && Bt("cannot run an inactive effect scope.");
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = at, at = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    this._on > 0 && --this._on === 0 && (at = this.prevScope, this.prevScope = void 0);
  }
  stop(t) {
    if (this._active) {
      this._active = !1;
      let n, s;
      for (n = 0, s = this.effects.length; n < s; n++)
        this.effects[n].stop();
      for (this.effects.length = 0, n = 0, s = this.cleanups.length; n < s; n++)
        this.cleanups[n]();
      if (this.cleanups.length = 0, this.scopes) {
        for (n = 0, s = this.scopes.length; n < s; n++)
          this.scopes[n].stop(!0);
        this.scopes.length = 0;
      }
      if (!this.detached && this.parent && !t) {
        const o = this.parent.scopes.pop();
        o && o !== this && (this.parent.scopes[this.index] = o, o.index = this.index);
      }
      this.parent = void 0;
    }
  }
}
function pp(e) {
  return new cl(e);
}
function ul() {
  return at;
}
function Bc(e, t = !1) {
  at ? at.cleanups.push(e) : Ce.NODE_ENV !== "production" && !t && Bt(
    "onScopeDispose() is called when there is no active effect scope to be associated with."
  );
}
let Oe;
const or = /* @__PURE__ */ new WeakSet();
class vo {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, at && at.active && at.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, or.has(this) && (or.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Hc(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, ua(this), Uc(this);
    const t = Oe, n = Yt;
    Oe = this, Yt = !0;
    try {
      return this.fn();
    } finally {
      Ce.NODE_ENV !== "production" && Oe !== this && Bt(
        "Active effect was not restored correctly - this is likely a Vue internal bug."
      ), qc(this), Oe = t, Yt = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        pl(t);
      this.deps = this.depsTail = void 0, ua(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? or.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    wr(this) && this.run();
  }
  get dirty() {
    return wr(this);
  }
}
let jc = 0, lo, ao;
function Hc(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = ao, ao = e;
    return;
  }
  e.next = lo, lo = e;
}
function dl() {
  jc++;
}
function fl() {
  if (--jc > 0)
    return;
  if (ao) {
    let t = ao;
    for (ao = void 0; t; ) {
      const n = t.next;
      t.next = void 0, t.flags &= -9, t = n;
    }
  }
  let e;
  for (; lo; ) {
    let t = lo;
    for (lo = void 0; t; ) {
      const n = t.next;
      if (t.next = void 0, t.flags &= -9, t.flags & 1)
        try {
          t.trigger();
        } catch (s) {
          e || (e = s);
        }
      t = n;
    }
  }
  if (e) throw e;
}
function Uc(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function qc(e) {
  let t, n = e.depsTail, s = n;
  for (; s; ) {
    const o = s.prevDep;
    s.version === -1 ? (s === n && (n = o), pl(s), hp(s)) : t = s, s.dep.activeLink = s.prevActiveLink, s.prevActiveLink = void 0, s = o;
  }
  e.deps = t, e.depsTail = n;
}
function wr(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (zc(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function zc(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === yo) || (e.globalVersion = yo, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !wr(e))))
    return;
  e.flags |= 2;
  const t = e.dep, n = Oe, s = Yt;
  Oe = e, Yt = !0;
  try {
    Uc(e);
    const o = e.fn(e._value);
    (t.version === 0 || yt(o, e._value)) && (e.flags |= 128, e._value = o, t.version++);
  } catch (o) {
    throw t.version++, o;
  } finally {
    Oe = n, Yt = s, qc(e), e.flags &= -3;
  }
}
function pl(e, t = !1) {
  const { dep: n, prevSub: s, nextSub: o } = e;
  if (s && (s.nextSub = o, e.prevSub = void 0), o && (o.prevSub = s, e.nextSub = void 0), Ce.NODE_ENV !== "production" && n.subsHead === e && (n.subsHead = o), n.subs === e && (n.subs = s, !s && n.computed)) {
    n.computed.flags &= -5;
    for (let i = n.computed.deps; i; i = i.nextDep)
      pl(i, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function hp(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
function mp(e, t) {
  e.effect instanceof vo && (e = e.effect.fn);
  const n = new vo(e);
  t && ge(n, t);
  try {
    n.run();
  } catch (o) {
    throw n.stop(), o;
  }
  const s = n.run.bind(n);
  return s.effect = n, s;
}
function gp(e) {
  e.effect.stop();
}
let Yt = !0;
const Wc = [];
function Qt() {
  Wc.push(Yt), Yt = !1;
}
function Zt() {
  const e = Wc.pop();
  Yt = e === void 0 ? !0 : e;
}
function ua(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const n = Oe;
    Oe = void 0;
    try {
      t();
    } finally {
      Oe = n;
    }
  }
}
let yo = 0;
class vp {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class Ri {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0, Ce.NODE_ENV !== "production" && (this.subsHead = void 0);
  }
  track(t) {
    if (!Oe || !Yt || Oe === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== Oe)
      n = this.activeLink = new vp(Oe, this), Oe.deps ? (n.prevDep = Oe.depsTail, Oe.depsTail.nextDep = n, Oe.depsTail = n) : Oe.deps = Oe.depsTail = n, Kc(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const s = n.nextDep;
      s.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = s), n.prevDep = Oe.depsTail, n.nextDep = void 0, Oe.depsTail.nextDep = n, Oe.depsTail = n, Oe.deps === n && (Oe.deps = s);
    }
    return Ce.NODE_ENV !== "production" && Oe.onTrack && Oe.onTrack(
      ge(
        {
          effect: Oe
        },
        t
      )
    ), n;
  }
  trigger(t) {
    this.version++, yo++, this.notify(t);
  }
  notify(t) {
    dl();
    try {
      if (Ce.NODE_ENV !== "production")
        for (let n = this.subsHead; n; n = n.nextSub)
          n.sub.onTrigger && !(n.sub.flags & 8) && n.sub.onTrigger(
            ge(
              {
                effect: n.sub
              },
              t
            )
          );
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      fl();
    }
  }
}
function Kc(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let s = t.deps; s; s = s.nextDep)
        Kc(s);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), Ce.NODE_ENV !== "production" && e.dep.subsHead === void 0 && (e.dep.subsHead = e), e.dep.subs = e;
  }
}
const ai = /* @__PURE__ */ new WeakMap(), ss = Symbol(
  Ce.NODE_ENV !== "production" ? "Object iterate" : ""
), Er = Symbol(
  Ce.NODE_ENV !== "production" ? "Map keys iterate" : ""
), bo = Symbol(
  Ce.NODE_ENV !== "production" ? "Array iterate" : ""
);
function Xe(e, t, n) {
  if (Yt && Oe) {
    let s = ai.get(e);
    s || ai.set(e, s = /* @__PURE__ */ new Map());
    let o = s.get(n);
    o || (s.set(n, o = new Ri()), o.map = s, o.key = n), Ce.NODE_ENV !== "production" ? o.track({
      target: e,
      type: t,
      key: n
    }) : o.track();
  }
}
function an(e, t, n, s, o, i) {
  const r = ai.get(e);
  if (!r) {
    yo++;
    return;
  }
  const l = (a) => {
    a && (Ce.NODE_ENV !== "production" ? a.trigger({
      target: e,
      type: t,
      key: n,
      newValue: s,
      oldValue: o,
      oldTarget: i
    }) : a.trigger());
  };
  if (dl(), t === "clear")
    r.forEach(l);
  else {
    const a = te(e), u = a && ll(n);
    if (a && n === "length") {
      const f = Number(s);
      r.forEach((c, p) => {
        (p === "length" || p === bo || !Ot(p) && p >= f) && l(c);
      });
    } else
      switch ((n !== void 0 || r.has(void 0)) && l(r.get(n)), u && l(r.get(bo)), t) {
        case "add":
          a ? u && l(r.get("length")) : (l(r.get(ss)), ns(e) && l(r.get(Er)));
          break;
        case "delete":
          a || (l(r.get(ss)), ns(e) && l(r.get(Er)));
          break;
        case "set":
          ns(e) && l(r.get(ss));
          break;
      }
  }
  fl();
}
function yp(e, t) {
  const n = ai.get(e);
  return n && n.get(t);
}
function bs(e) {
  const t = he(e);
  return t === e ? t : (Xe(t, "iterate", bo), ft(e) ? t : t.map(ot));
}
function Li(e) {
  return Xe(e = he(e), "iterate", bo), e;
}
const bp = {
  __proto__: null,
  [Symbol.iterator]() {
    return ir(this, Symbol.iterator, ot);
  },
  concat(...e) {
    return bs(this).concat(
      ...e.map((t) => te(t) ? bs(t) : t)
    );
  },
  entries() {
    return ir(this, "entries", (e) => (e[1] = ot(e[1]), e));
  },
  every(e, t) {
    return fn(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return fn(this, "filter", e, t, (n) => n.map(ot), arguments);
  },
  find(e, t) {
    return fn(this, "find", e, t, ot, arguments);
  },
  findIndex(e, t) {
    return fn(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return fn(this, "findLast", e, t, ot, arguments);
  },
  findLastIndex(e, t) {
    return fn(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return fn(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return rr(this, "includes", e);
  },
  indexOf(...e) {
    return rr(this, "indexOf", e);
  },
  join(e) {
    return bs(this).join(e);
  },
  // keys() iterator only reads `length`, no optimisation required
  lastIndexOf(...e) {
    return rr(this, "lastIndexOf", e);
  },
  map(e, t) {
    return fn(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return Ys(this, "pop");
  },
  push(...e) {
    return Ys(this, "push", e);
  },
  reduce(e, ...t) {
    return da(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return da(this, "reduceRight", e, t);
  },
  shift() {
    return Ys(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return fn(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return Ys(this, "splice", e);
  },
  toReversed() {
    return bs(this).toReversed();
  },
  toSorted(e) {
    return bs(this).toSorted(e);
  },
  toSpliced(...e) {
    return bs(this).toSpliced(...e);
  },
  unshift(...e) {
    return Ys(this, "unshift", e);
  },
  values() {
    return ir(this, "values", ot);
  }
};
function ir(e, t, n) {
  const s = Li(e), o = s[t]();
  return s !== e && !ft(e) && (o._next = o.next, o.next = () => {
    const i = o._next();
    return i.value && (i.value = n(i.value)), i;
  }), o;
}
const _p = Array.prototype;
function fn(e, t, n, s, o, i) {
  const r = Li(e), l = r !== e && !ft(e), a = r[t];
  if (a !== _p[t]) {
    const c = a.apply(e, i);
    return l ? ot(c) : c;
  }
  let u = n;
  r !== e && (l ? u = function(c, p) {
    return n.call(this, ot(c), p, e);
  } : n.length > 2 && (u = function(c, p) {
    return n.call(this, c, p, e);
  }));
  const f = a.call(r, u, s);
  return l && o ? o(f) : f;
}
function da(e, t, n, s) {
  const o = Li(e);
  let i = n;
  return o !== e && (ft(e) ? n.length > 3 && (i = function(r, l, a) {
    return n.call(this, r, l, a, e);
  }) : i = function(r, l, a) {
    return n.call(this, r, ot(l), a, e);
  }), o[t](i, ...s);
}
function rr(e, t, n) {
  const s = he(e);
  Xe(s, "iterate", bo);
  const o = s[t](...n);
  return (o === -1 || o === !1) && Ds(n[0]) ? (n[0] = he(n[0]), s[t](...n)) : o;
}
function Ys(e, t, n = []) {
  Qt(), dl();
  const s = he(e)[t].apply(e, n);
  return fl(), Zt(), s;
}
const wp = /* @__PURE__ */ et("__proto__,__v_isRef,__isVue"), Gc = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Ot)
);
function Ep(e) {
  Ot(e) || (e = String(e));
  const t = he(this);
  return Xe(t, "has", e), t.hasOwnProperty(e);
}
class Jc {
  constructor(t = !1, n = !1) {
    this._isReadonly = t, this._isShallow = n;
  }
  get(t, n, s) {
    if (n === "__v_skip") return t.__v_skip;
    const o = this._isReadonly, i = this._isShallow;
    if (n === "__v_isReactive")
      return !o;
    if (n === "__v_isReadonly")
      return o;
    if (n === "__v_isShallow")
      return i;
    if (n === "__v_raw")
      return s === (o ? i ? tu : eu : i ? Zc : Qc).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(s) ? t : void 0;
    const r = te(t);
    if (!o) {
      let a;
      if (r && (a = bp[n]))
        return a;
      if (n === "hasOwnProperty")
        return Ep;
    }
    const l = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      Ue(t) ? t : s
    );
    return (Ot(n) ? Gc.has(n) : wp(n)) || (o || Xe(t, "get", n), i) ? l : Ue(l) ? r && ll(n) ? l : l.value : Ee(l) ? o ? Bi(l) : $s(l) : l;
  }
}
class Yc extends Jc {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, s, o) {
    let i = t[n];
    if (!this._isShallow) {
      const a = en(i);
      if (!ft(s) && !en(s) && (i = he(i), s = he(s)), !te(t) && Ue(i) && !Ue(s))
        return a ? !1 : (i.value = s, !0);
    }
    const r = te(t) && ll(n) ? Number(n) < t.length : xe(t, n), l = Reflect.set(
      t,
      n,
      s,
      Ue(t) ? t : o
    );
    return t === he(o) && (r ? yt(s, i) && an(t, "set", n, s, i) : an(t, "add", n, s)), l;
  }
  deleteProperty(t, n) {
    const s = xe(t, n), o = t[n], i = Reflect.deleteProperty(t, n);
    return i && s && an(t, "delete", n, void 0, o), i;
  }
  has(t, n) {
    const s = Reflect.has(t, n);
    return (!Ot(n) || !Gc.has(n)) && Xe(t, "has", n), s;
  }
  ownKeys(t) {
    return Xe(
      t,
      "iterate",
      te(t) ? "length" : ss
    ), Reflect.ownKeys(t);
  }
}
class Xc extends Jc {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, n) {
    return Ce.NODE_ENV !== "production" && Bt(
      `Set operation on key "${String(n)}" failed: target is readonly.`,
      t
    ), !0;
  }
  deleteProperty(t, n) {
    return Ce.NODE_ENV !== "production" && Bt(
      `Delete operation on key "${String(n)}" failed: target is readonly.`,
      t
    ), !0;
  }
}
const xp = /* @__PURE__ */ new Yc(), Np = /* @__PURE__ */ new Xc(), Sp = /* @__PURE__ */ new Yc(!0), kp = /* @__PURE__ */ new Xc(!0), xr = (e) => e, Lo = (e) => Reflect.getPrototypeOf(e);
function Cp(e, t, n) {
  return function(...s) {
    const o = this.__v_raw, i = he(o), r = ns(i), l = e === "entries" || e === Symbol.iterator && r, a = e === "keys" && r, u = o[e](...s), f = n ? xr : t ? ci : ot;
    return !t && Xe(
      i,
      "iterate",
      a ? Er : ss
    ), {
      // iterator protocol
      next() {
        const { value: c, done: p } = u.next();
        return p ? { value: c, done: p } : {
          value: l ? [f(c[0]), f(c[1])] : f(c),
          done: p
        };
      },
      // iterable protocol
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function Fo(e) {
  return function(...t) {
    if (Ce.NODE_ENV !== "production") {
      const n = t[0] ? `on key "${t[0]}" ` : "";
      Bt(
        `${un(e)} operation ${n}failed: target is readonly.`,
        he(this)
      );
    }
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function Op(e, t) {
  const n = {
    get(o) {
      const i = this.__v_raw, r = he(i), l = he(o);
      e || (yt(o, l) && Xe(r, "get", o), Xe(r, "get", l));
      const { has: a } = Lo(r), u = t ? xr : e ? ci : ot;
      if (a.call(r, o))
        return u(i.get(o));
      if (a.call(r, l))
        return u(i.get(l));
      i !== r && i.get(o);
    },
    get size() {
      const o = this.__v_raw;
      return !e && Xe(he(o), "iterate", ss), Reflect.get(o, "size", o);
    },
    has(o) {
      const i = this.__v_raw, r = he(i), l = he(o);
      return e || (yt(o, l) && Xe(r, "has", o), Xe(r, "has", l)), o === l ? i.has(o) : i.has(o) || i.has(l);
    },
    forEach(o, i) {
      const r = this, l = r.__v_raw, a = he(l), u = t ? xr : e ? ci : ot;
      return !e && Xe(a, "iterate", ss), l.forEach((f, c) => o.call(i, u(f), u(c), r));
    }
  };
  return ge(
    n,
    e ? {
      add: Fo("add"),
      set: Fo("set"),
      delete: Fo("delete"),
      clear: Fo("clear")
    } : {
      add(o) {
        !t && !ft(o) && !en(o) && (o = he(o));
        const i = he(this);
        return Lo(i).has.call(i, o) || (i.add(o), an(i, "add", o, o)), this;
      },
      set(o, i) {
        !t && !ft(i) && !en(i) && (i = he(i));
        const r = he(this), { has: l, get: a } = Lo(r);
        let u = l.call(r, o);
        u ? Ce.NODE_ENV !== "production" && fa(r, l, o) : (o = he(o), u = l.call(r, o));
        const f = a.call(r, o);
        return r.set(o, i), u ? yt(i, f) && an(r, "set", o, i, f) : an(r, "add", o, i), this;
      },
      delete(o) {
        const i = he(this), { has: r, get: l } = Lo(i);
        let a = r.call(i, o);
        a ? Ce.NODE_ENV !== "production" && fa(i, r, o) : (o = he(o), a = r.call(i, o));
        const u = l ? l.call(i, o) : void 0, f = i.delete(o);
        return a && an(i, "delete", o, void 0, u), f;
      },
      clear() {
        const o = he(this), i = o.size !== 0, r = Ce.NODE_ENV !== "production" ? ns(o) ? new Map(o) : new Set(o) : void 0, l = o.clear();
        return i && an(
          o,
          "clear",
          void 0,
          void 0,
          r
        ), l;
      }
    }
  ), [
    "keys",
    "values",
    "entries",
    Symbol.iterator
  ].forEach((o) => {
    n[o] = Cp(o, e, t);
  }), n;
}
function Fi(e, t) {
  const n = Op(e, t);
  return (s, o, i) => o === "__v_isReactive" ? !e : o === "__v_isReadonly" ? e : o === "__v_raw" ? s : Reflect.get(
    xe(n, o) && o in s ? n : s,
    o,
    i
  );
}
const Tp = {
  get: /* @__PURE__ */ Fi(!1, !1)
}, $p = {
  get: /* @__PURE__ */ Fi(!1, !0)
}, Dp = {
  get: /* @__PURE__ */ Fi(!0, !1)
}, Ap = {
  get: /* @__PURE__ */ Fi(!0, !0)
};
function fa(e, t, n) {
  const s = he(n);
  if (s !== n && t.call(e, s)) {
    const o = rl(e);
    Bt(
      `Reactive ${o} contains both the raw and reactive versions of the same object${o === "Map" ? " as keys" : ""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`
    );
  }
}
const Qc = /* @__PURE__ */ new WeakMap(), Zc = /* @__PURE__ */ new WeakMap(), eu = /* @__PURE__ */ new WeakMap(), tu = /* @__PURE__ */ new WeakMap();
function Vp(e) {
  switch (e) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function Ip(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : Vp(rl(e));
}
function $s(e) {
  return en(e) ? e : ji(
    e,
    !1,
    xp,
    Tp,
    Qc
  );
}
function nu(e) {
  return ji(
    e,
    !1,
    Sp,
    $p,
    Zc
  );
}
function Bi(e) {
  return ji(
    e,
    !0,
    Np,
    Dp,
    eu
  );
}
function Kt(e) {
  return ji(
    e,
    !0,
    kp,
    Ap,
    tu
  );
}
function ji(e, t, n, s, o) {
  if (!Ee(e))
    return Ce.NODE_ENV !== "production" && Bt(
      `value cannot be made ${t ? "readonly" : "reactive"}: ${String(
        e
      )}`
    ), e;
  if (e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const i = Ip(e);
  if (i === 0)
    return e;
  const r = o.get(e);
  if (r)
    return r;
  const l = new Proxy(
    e,
    i === 2 ? s : n
  );
  return o.set(e, l), l;
}
function bn(e) {
  return en(e) ? bn(e.__v_raw) : !!(e && e.__v_isReactive);
}
function en(e) {
  return !!(e && e.__v_isReadonly);
}
function ft(e) {
  return !!(e && e.__v_isShallow);
}
function Ds(e) {
  return e ? !!e.__v_raw : !1;
}
function he(e) {
  const t = e && e.__v_raw;
  return t ? he(t) : e;
}
function su(e) {
  return !xe(e, "__v_skip") && Object.isExtensible(e) && cs(e, "__v_skip", !0), e;
}
const ot = (e) => Ee(e) ? $s(e) : e, ci = (e) => Ee(e) ? Bi(e) : e;
function Ue(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function X(e) {
  return iu(e, !1);
}
function ou(e) {
  return iu(e, !0);
}
function iu(e, t) {
  return Ue(e) ? e : new Mp(e, t);
}
class Mp {
  constructor(t, n) {
    this.dep = new Ri(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : he(t), this._value = n ? t : ot(t), this.__v_isShallow = n;
  }
  get value() {
    return Ce.NODE_ENV !== "production" ? this.dep.track({
      target: this,
      type: "get",
      key: "value"
    }) : this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, s = this.__v_isShallow || ft(t) || en(t);
    t = s ? t : he(t), yt(t, n) && (this._rawValue = t, this._value = s ? t : ot(t), Ce.NODE_ENV !== "production" ? this.dep.trigger({
      target: this,
      type: "set",
      key: "value",
      newValue: t,
      oldValue: n
    }) : this.dep.trigger());
  }
}
function Pp(e) {
  e.dep && (Ce.NODE_ENV !== "production" ? e.dep.trigger({
    target: e,
    type: "set",
    key: "value",
    newValue: e._value
  }) : e.dep.trigger());
}
function Do(e) {
  return Ue(e) ? e.value : e;
}
function Rp(e) {
  return ce(e) ? e() : Do(e);
}
const Lp = {
  get: (e, t, n) => t === "__v_raw" ? e : Do(Reflect.get(e, t, n)),
  set: (e, t, n, s) => {
    const o = e[t];
    return Ue(o) && !Ue(n) ? (o.value = n, !0) : Reflect.set(e, t, n, s);
  }
};
function hl(e) {
  return bn(e) ? e : new Proxy(e, Lp);
}
class Fp {
  constructor(t) {
    this.__v_isRef = !0, this._value = void 0;
    const n = this.dep = new Ri(), { get: s, set: o } = t(n.track.bind(n), n.trigger.bind(n));
    this._get = s, this._set = o;
  }
  get value() {
    return this._value = this._get();
  }
  set value(t) {
    this._set(t);
  }
}
function ru(e) {
  return new Fp(e);
}
function Bp(e) {
  Ce.NODE_ENV !== "production" && !Ds(e) && Bt("toRefs() expects a reactive object but received a plain one.");
  const t = te(e) ? new Array(e.length) : {};
  for (const n in e)
    t[n] = lu(e, n);
  return t;
}
class jp {
  constructor(t, n, s) {
    this._object = t, this._key = n, this._defaultValue = s, this.__v_isRef = !0, this._value = void 0;
  }
  get value() {
    const t = this._object[this._key];
    return this._value = t === void 0 ? this._defaultValue : t;
  }
  set value(t) {
    this._object[this._key] = t;
  }
  get dep() {
    return yp(he(this._object), this._key);
  }
}
class Hp {
  constructor(t) {
    this._getter = t, this.__v_isRef = !0, this.__v_isReadonly = !0, this._value = void 0;
  }
  get value() {
    return this._value = this._getter();
  }
}
function Up(e, t, n) {
  return Ue(e) ? e : ce(e) ? new Hp(e) : Ee(e) && arguments.length > 1 ? lu(e, t, n) : X(e);
}
function lu(e, t, n) {
  const s = e[t];
  return Ue(s) ? s : new jp(e, t, n);
}
class qp {
  constructor(t, n, s) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new Ri(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = yo - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = s;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    Oe !== this)
      return Hc(this, !0), !0;
  }
  get value() {
    const t = Ce.NODE_ENV !== "production" ? this.dep.track({
      target: this,
      type: "get",
      key: "value"
    }) : this.dep.track();
    return zc(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter ? this.setter(t) : Ce.NODE_ENV !== "production" && Bt("Write operation failed: computed value is readonly");
  }
}
function zp(e, t, n = !1) {
  let s, o;
  ce(e) ? s = e : (s = e.get, o = e.set);
  const i = new qp(s, o, n);
  return Ce.NODE_ENV !== "production" && t && !n && (i.onTrack = t.onTrack, i.onTrigger = t.onTrigger), i;
}
const Wp = {
  GET: "get",
  HAS: "has",
  ITERATE: "iterate"
}, Kp = {
  SET: "set",
  ADD: "add",
  DELETE: "delete",
  CLEAR: "clear"
}, Bo = {}, ui = /* @__PURE__ */ new WeakMap();
let An;
function Gp() {
  return An;
}
function au(e, t = !1, n = An) {
  if (n) {
    let s = ui.get(n);
    s || ui.set(n, s = []), s.push(e);
  } else Ce.NODE_ENV !== "production" && !t && Bt(
    "onWatcherCleanup() was called when there was no active watcher to associate with."
  );
}
function Jp(e, t, n = ve) {
  const { immediate: s, deep: o, once: i, scheduler: r, augmentJob: l, call: a } = n, u = (v) => {
    (n.onWarn || Bt)(
      "Invalid watch source: ",
      v,
      "A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types."
    );
  }, f = (v) => o ? v : ft(v) || o === !1 || o === 0 ? vn(v, 1) : vn(v);
  let c, p, h, g, m = !1, D = !1;
  if (Ue(e) ? (p = () => e.value, m = ft(e)) : bn(e) ? (p = () => f(e), m = !0) : te(e) ? (D = !0, m = e.some((v) => bn(v) || ft(v)), p = () => e.map((v) => {
    if (Ue(v))
      return v.value;
    if (bn(v))
      return f(v);
    if (ce(v))
      return a ? a(v, 2) : v();
    Ce.NODE_ENV !== "production" && u(v);
  })) : ce(e) ? t ? p = a ? () => a(e, 2) : e : p = () => {
    if (h) {
      Qt();
      try {
        h();
      } finally {
        Zt();
      }
    }
    const v = An;
    An = c;
    try {
      return a ? a(e, 3, [g]) : e(g);
    } finally {
      An = v;
    }
  } : (p = Fe, Ce.NODE_ENV !== "production" && u(e)), t && o) {
    const v = p, w = o === !0 ? 1 / 0 : o;
    p = () => vn(v(), w);
  }
  const P = ul(), V = () => {
    c.stop(), P && P.active && il(P.effects, c);
  };
  if (i && t) {
    const v = t;
    t = (...w) => {
      v(...w), V();
    };
  }
  let _ = D ? new Array(e.length).fill(Bo) : Bo;
  const N = (v) => {
    if (!(!(c.flags & 1) || !c.dirty && !v))
      if (t) {
        const w = c.run();
        if (o || m || (D ? w.some((A, k) => yt(A, _[k])) : yt(w, _))) {
          h && h();
          const A = An;
          An = c;
          try {
            const k = [
              w,
              // pass undefined as the old value when it's changed for the first time
              _ === Bo ? void 0 : D && _[0] === Bo ? [] : _,
              g
            ];
            _ = w, a ? a(t, 3, k) : (
              // @ts-expect-error
              t(...k)
            );
          } finally {
            An = A;
          }
        }
      } else
        c.run();
  };
  return l && l(N), c = new vo(p), c.scheduler = r ? () => r(N, !1) : N, g = (v) => au(v, !1, c), h = c.onStop = () => {
    const v = ui.get(c);
    if (v) {
      if (a)
        a(v, 4);
      else
        for (const w of v) w();
      ui.delete(c);
    }
  }, Ce.NODE_ENV !== "production" && (c.onTrack = n.onTrack, c.onTrigger = n.onTrigger), t ? s ? N(!0) : _ = c.run() : r ? r(N.bind(null, !0), !0) : c.run(), V.pause = c.pause.bind(c), V.resume = c.resume.bind(c), V.stop = V, V;
}
function vn(e, t = 1 / 0, n) {
  if (t <= 0 || !Ee(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Set(), n.has(e)))
    return e;
  if (n.add(e), t--, Ue(e))
    vn(e.value, t, n);
  else if (te(e))
    for (let s = 0; s < e.length; s++)
      vn(e[s], t, n);
  else if (hs(e) || ns(e))
    e.forEach((s) => {
      vn(s, t, n);
    });
  else if (Ii(e)) {
    for (const s in e)
      vn(e[s], t, n);
    for (const s of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, s) && vn(e[s], t, n);
  }
  return e;
}
var S = {};
const os = [];
function Ns(e) {
  os.push(e);
}
function Ss() {
  os.pop();
}
let lr = !1;
function B(e, ...t) {
  if (lr) return;
  lr = !0, Qt();
  const n = os.length ? os[os.length - 1].component : null, s = n && n.appContext.config.warnHandler, o = Yp();
  if (s)
    ms(
      s,
      n,
      11,
      [
        // eslint-disable-next-line no-restricted-syntax
        e + t.map((i) => {
          var r, l;
          return (l = (r = i.toString) == null ? void 0 : r.call(i)) != null ? l : JSON.stringify(i);
        }).join(""),
        n && n.proxy,
        o.map(
          ({ vnode: i }) => `at <${Xi(n, i.type)}>`
        ).join(`
`),
        o
      ]
    );
  else {
    const i = [`[Vue warn]: ${e}`, ...t];
    o.length && i.push(`
`, ...Xp(o)), console.warn(...i);
  }
  Zt(), lr = !1;
}
function Yp() {
  let e = os[os.length - 1];
  if (!e)
    return [];
  const t = [];
  for (; e; ) {
    const n = t[0];
    n && n.vnode === e ? n.recurseCount++ : t.push({
      vnode: e,
      recurseCount: 0
    });
    const s = e.component && e.component.parent;
    e = s && s.vnode;
  }
  return t;
}
function Xp(e) {
  const t = [];
  return e.forEach((n, s) => {
    t.push(...s === 0 ? [] : [`
`], ...Qp(n));
  }), t;
}
function Qp({ vnode: e, recurseCount: t }) {
  const n = t > 0 ? `... (${t} recursive calls)` : "", s = e.component ? e.component.parent == null : !1, o = ` at <${Xi(
    e.component,
    e.type,
    s
  )}`, i = ">" + n;
  return e.props ? [o, ...Zp(e.props), i] : [o + i];
}
function Zp(e) {
  const t = [], n = Object.keys(e);
  return n.slice(0, 3).forEach((s) => {
    t.push(...cu(s, e[s]));
  }), n.length > 3 && t.push(" ..."), t;
}
function cu(e, t, n) {
  return de(t) ? (t = JSON.stringify(t), n ? t : [`${e}=${t}`]) : typeof t == "number" || typeof t == "boolean" || t == null ? n ? t : [`${e}=${t}`] : Ue(t) ? (t = cu(e, he(t.value), !0), n ? t : [`${e}=Ref<`, t, ">"]) : ce(t) ? [`${e}=fn${t.name ? `<${t.name}>` : ""}`] : (t = he(t), n ? t : [`${e}=`, t]);
}
function ml(e, t) {
  S.NODE_ENV !== "production" && e !== void 0 && (typeof e != "number" ? B(`${t} is not a valid number - got ${JSON.stringify(e)}.`) : isNaN(e) && B(`${t} is NaN - the duration expression might be incorrect.`));
}
const eh = {
  SETUP_FUNCTION: 0,
  0: "SETUP_FUNCTION",
  RENDER_FUNCTION: 1,
  1: "RENDER_FUNCTION",
  NATIVE_EVENT_HANDLER: 5,
  5: "NATIVE_EVENT_HANDLER",
  COMPONENT_EVENT_HANDLER: 6,
  6: "COMPONENT_EVENT_HANDLER",
  VNODE_HOOK: 7,
  7: "VNODE_HOOK",
  DIRECTIVE_HOOK: 8,
  8: "DIRECTIVE_HOOK",
  TRANSITION_HOOK: 9,
  9: "TRANSITION_HOOK",
  APP_ERROR_HANDLER: 10,
  10: "APP_ERROR_HANDLER",
  APP_WARN_HANDLER: 11,
  11: "APP_WARN_HANDLER",
  FUNCTION_REF: 12,
  12: "FUNCTION_REF",
  ASYNC_COMPONENT_LOADER: 13,
  13: "ASYNC_COMPONENT_LOADER",
  SCHEDULER: 14,
  14: "SCHEDULER",
  COMPONENT_UPDATE: 15,
  15: "COMPONENT_UPDATE",
  APP_UNMOUNT_CLEANUP: 16,
  16: "APP_UNMOUNT_CLEANUP"
}, Hi = {
  sp: "serverPrefetch hook",
  bc: "beforeCreate hook",
  c: "created hook",
  bm: "beforeMount hook",
  m: "mounted hook",
  bu: "beforeUpdate hook",
  u: "updated",
  bum: "beforeUnmount hook",
  um: "unmounted hook",
  a: "activated hook",
  da: "deactivated hook",
  ec: "errorCaptured hook",
  rtc: "renderTracked hook",
  rtg: "renderTriggered hook",
  0: "setup function",
  1: "render function",
  2: "watcher getter",
  3: "watcher callback",
  4: "watcher cleanup function",
  5: "native event handler",
  6: "component event handler",
  7: "vnode hook",
  8: "directive hook",
  9: "transition hook",
  10: "app errorHandler",
  11: "app warnHandler",
  12: "ref function",
  13: "async component loader",
  14: "scheduler flush",
  15: "component update",
  16: "app unmount cleanup function"
};
function ms(e, t, n, s) {
  try {
    return s ? e(...s) : e();
  } catch (o) {
    Wn(o, t, n);
  }
}
function jt(e, t, n, s) {
  if (ce(e)) {
    const o = ms(e, t, n, s);
    return o && Vi(o) && o.catch((i) => {
      Wn(i, t, n);
    }), o;
  }
  if (te(e)) {
    const o = [];
    for (let i = 0; i < e.length; i++)
      o.push(jt(e[i], t, n, s));
    return o;
  } else S.NODE_ENV !== "production" && B(
    `Invalid value type passed to callWithAsyncErrorHandling(): ${typeof e}`
  );
}
function Wn(e, t, n, s = !0) {
  const o = t ? t.vnode : null, { errorHandler: i, throwUnhandledErrorInProduction: r } = t && t.appContext.config || ve;
  if (t) {
    let l = t.parent;
    const a = t.proxy, u = S.NODE_ENV !== "production" ? Hi[n] : `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; l; ) {
      const f = l.ec;
      if (f) {
        for (let c = 0; c < f.length; c++)
          if (f[c](e, a, u) === !1)
            return;
      }
      l = l.parent;
    }
    if (i) {
      Qt(), ms(i, null, 10, [
        e,
        a,
        u
      ]), Zt();
      return;
    }
  }
  th(e, n, o, s, r);
}
function th(e, t, n, s = !0, o = !1) {
  if (S.NODE_ENV !== "production") {
    const i = Hi[t];
    if (n && Ns(n), B(`Unhandled error${i ? ` during execution of ${i}` : ""}`), n && Ss(), s)
      throw e;
    console.error(e);
  } else {
    if (o)
      throw e;
    console.error(e);
  }
}
const bt = [];
let on = -1;
const ks = [];
let Vn = null, Es = 0;
const uu = /* @__PURE__ */ Promise.resolve();
let di = null;
const nh = 100;
function xn(e) {
  const t = di || uu;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function sh(e) {
  let t = on + 1, n = bt.length;
  for (; t < n; ) {
    const s = t + n >>> 1, o = bt[s], i = _o(o);
    i < e || i === e && o.flags & 2 ? t = s + 1 : n = s;
  }
  return t;
}
function Ui(e) {
  if (!(e.flags & 1)) {
    const t = _o(e), n = bt[bt.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= _o(n) ? bt.push(e) : bt.splice(sh(t), 0, e), e.flags |= 1, du();
  }
}
function du() {
  di || (di = uu.then(fu));
}
function As(e) {
  te(e) ? ks.push(...e) : Vn && e.id === -1 ? Vn.splice(Es + 1, 0, e) : e.flags & 1 || (ks.push(e), e.flags |= 1), du();
}
function pa(e, t, n = on + 1) {
  for (S.NODE_ENV !== "production" && (t = t || /* @__PURE__ */ new Map()); n < bt.length; n++) {
    const s = bt[n];
    if (s && s.flags & 2) {
      if (e && s.id !== e.uid || S.NODE_ENV !== "production" && gl(t, s))
        continue;
      bt.splice(n, 1), n--, s.flags & 4 && (s.flags &= -2), s(), s.flags & 4 || (s.flags &= -2);
    }
  }
}
function fi(e) {
  if (ks.length) {
    const t = [...new Set(ks)].sort(
      (n, s) => _o(n) - _o(s)
    );
    if (ks.length = 0, Vn) {
      Vn.push(...t);
      return;
    }
    for (Vn = t, S.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), Es = 0; Es < Vn.length; Es++) {
      const n = Vn[Es];
      S.NODE_ENV !== "production" && gl(e, n) || (n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2);
    }
    Vn = null, Es = 0;
  }
}
const _o = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function fu(e) {
  S.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map());
  const t = S.NODE_ENV !== "production" ? (n) => gl(e, n) : Fe;
  try {
    for (on = 0; on < bt.length; on++) {
      const n = bt[on];
      if (n && !(n.flags & 8)) {
        if (S.NODE_ENV !== "production" && t(n))
          continue;
        n.flags & 4 && (n.flags &= -2), ms(
          n,
          n.i,
          n.i ? 15 : 14
        ), n.flags & 4 || (n.flags &= -2);
      }
    }
  } finally {
    for (; on < bt.length; on++) {
      const n = bt[on];
      n && (n.flags &= -2);
    }
    on = -1, bt.length = 0, fi(e), di = null, (bt.length || ks.length) && fu(e);
  }
}
function gl(e, t) {
  const n = e.get(t) || 0;
  if (n > nh) {
    const s = t.i, o = s && Ms(s.type);
    return Wn(
      `Maximum recursive updates exceeded${o ? ` in component <${o}>` : ""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`,
      null,
      10
    ), !0;
  }
  return e.set(t, n + 1), !1;
}
let Gt = !1;
const Yo = /* @__PURE__ */ new Map();
S.NODE_ENV !== "production" && ($o().__VUE_HMR_RUNTIME__ = {
  createRecord: ar(pu),
  rerender: ar(rh),
  reload: ar(lh)
});
const us = /* @__PURE__ */ new Map();
function oh(e) {
  const t = e.type.__hmrId;
  let n = us.get(t);
  n || (pu(t, e.type), n = us.get(t)), n.instances.add(e);
}
function ih(e) {
  us.get(e.type.__hmrId).instances.delete(e);
}
function pu(e, t) {
  return us.has(e) ? !1 : (us.set(e, {
    initialDef: pi(t),
    instances: /* @__PURE__ */ new Set()
  }), !0);
}
function pi(e) {
  return Ed(e) ? e.__vccOpts : e;
}
function rh(e, t) {
  const n = us.get(e);
  n && (n.initialDef.render = t, [...n.instances].forEach((s) => {
    t && (s.render = t, pi(s.type).render = t), s.renderCache = [], Gt = !0, s.update(), Gt = !1;
  }));
}
function lh(e, t) {
  const n = us.get(e);
  if (!n) return;
  t = pi(t), ha(n.initialDef, t);
  const s = [...n.instances];
  for (let o = 0; o < s.length; o++) {
    const i = s[o], r = pi(i.type);
    let l = Yo.get(r);
    l || (r !== n.initialDef && ha(r, t), Yo.set(r, l = /* @__PURE__ */ new Set())), l.add(i), i.appContext.propsCache.delete(i.type), i.appContext.emitsCache.delete(i.type), i.appContext.optionsCache.delete(i.type), i.ceReload ? (l.add(i), i.ceReload(t.styles), l.delete(i)) : i.parent ? Ui(() => {
      Gt = !0, i.parent.update(), Gt = !1, l.delete(i);
    }) : i.appContext.reload ? i.appContext.reload() : typeof window < "u" ? window.location.reload() : console.warn(
      "[HMR] Root or manually mounted instance modified. Full reload required."
    ), i.root.ce && i !== i.root && i.root.ce._removeChildStyle(r);
  }
  As(() => {
    Yo.clear();
  });
}
function ha(e, t) {
  ge(e, t);
  for (const n in e)
    n !== "__file" && !(n in t) && delete e[n];
}
function ar(e) {
  return (t, n) => {
    try {
      return e(t, n);
    } catch (s) {
      console.error(s), console.warn(
        "[HMR] Something went wrong during Vue component hot-reload. Full reload required."
      );
    }
  };
}
let zt, to = [], Nr = !1;
function Ao(e, ...t) {
  zt ? zt.emit(e, ...t) : Nr || to.push({ event: e, args: t });
}
function vl(e, t) {
  var n, s;
  zt = e, zt ? (zt.enabled = !0, to.forEach(({ event: o, args: i }) => zt.emit(o, ...i)), to = []) : /* handle late devtools injection - only do this if we are in an actual */ /* browser environment to avoid the timer handle stalling test runner exit */ /* (#4815) */ typeof window < "u" && // some envs mock window but not fully
  window.HTMLElement && // also exclude jsdom
  // eslint-disable-next-line no-restricted-syntax
  !((s = (n = window.navigator) == null ? void 0 : n.userAgent) != null && s.includes("jsdom")) ? ((t.__VUE_DEVTOOLS_HOOK_REPLAY__ = t.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push((i) => {
    vl(i, t);
  }), setTimeout(() => {
    zt || (t.__VUE_DEVTOOLS_HOOK_REPLAY__ = null, Nr = !0, to = []);
  }, 3e3)) : (Nr = !0, to = []);
}
function ah(e, t) {
  Ao("app:init", e, t, {
    Fragment: ae,
    Text: cn,
    Comment: Be,
    Static: Hn
  });
}
function ch(e) {
  Ao("app:unmount", e);
}
const Sr = /* @__PURE__ */ yl(
  "component:added"
  /* COMPONENT_ADDED */
), hu = /* @__PURE__ */ yl(
  "component:updated"
  /* COMPONENT_UPDATED */
), uh = /* @__PURE__ */ yl(
  "component:removed"
  /* COMPONENT_REMOVED */
), dh = (e) => {
  zt && typeof zt.cleanupBuffer == "function" && // remove the component if it wasn't buffered
  !zt.cleanupBuffer(e) && uh(e);
};
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function yl(e) {
  return (t) => {
    Ao(
      e,
      t.appContext.app,
      t.uid,
      t.parent ? t.parent.uid : void 0,
      t
    );
  };
}
const fh = /* @__PURE__ */ mu(
  "perf:start"
  /* PERFORMANCE_START */
), ph = /* @__PURE__ */ mu(
  "perf:end"
  /* PERFORMANCE_END */
);
function mu(e) {
  return (t, n, s) => {
    Ao(e, t.appContext.app, t.uid, t, n, s);
  };
}
function hh(e, t, n) {
  Ao(
    "component:emit",
    e.appContext.app,
    e,
    t,
    n
  );
}
let Je = null, qi = null;
function wo(e) {
  const t = Je;
  return Je = e, qi = e && e.type.__scopeId || null, t;
}
function mh(e) {
  qi = e;
}
function gh() {
  qi = null;
}
const vh = (e) => Re;
function Re(e, t = Je, n) {
  if (!t || e._n)
    return e;
  const s = (...o) => {
    s._d && Ir(-1);
    const i = wo(t);
    let r;
    try {
      r = e(...o);
    } finally {
      wo(i), s._d && Ir(1);
    }
    return S.NODE_ENV !== "production" && hu(t), r;
  };
  return s._n = !0, s._c = !0, s._d = !0, s;
}
function gu(e) {
  Dc(e) && B("Do not use built-in directive ids as custom directive id: " + e);
}
function Le(e, t) {
  if (Je === null)
    return S.NODE_ENV !== "production" && B("withDirectives can only be used inside render functions."), e;
  const n = Io(Je), s = e.dirs || (e.dirs = []);
  for (let o = 0; o < t.length; o++) {
    let [i, r, l, a = ve] = t[o];
    i && (ce(i) && (i = {
      mounted: i,
      updated: i
    }), i.deep && vn(r), s.push({
      dir: i,
      instance: n,
      value: r,
      oldValue: void 0,
      arg: l,
      modifiers: a
    }));
  }
  return e;
}
function rn(e, t, n, s) {
  const o = e.dirs, i = t && t.dirs;
  for (let r = 0; r < o.length; r++) {
    const l = o[r];
    i && (l.oldValue = i[r].value);
    let a = l.dir[s];
    a && (Qt(), jt(a, n, 8, [
      e.el,
      l,
      e,
      t
    ]), Zt());
  }
}
const vu = Symbol("_vte"), yu = (e) => e.__isTeleport, is = (e) => e && (e.disabled || e.disabled === ""), ma = (e) => e && (e.defer || e.defer === ""), ga = (e) => typeof SVGElement < "u" && e instanceof SVGElement, va = (e) => typeof MathMLElement == "function" && e instanceof MathMLElement, kr = (e, t) => {
  const n = e && e.to;
  if (de(n))
    if (t) {
      const s = t(n);
      return S.NODE_ENV !== "production" && !s && !is(e) && B(
        `Failed to locate Teleport target with selector "${n}". Note the target element must exist before the component is mounted - i.e. the target cannot be rendered by the component itself, and ideally should be outside of the entire Vue component tree.`
      ), s;
    } else
      return S.NODE_ENV !== "production" && B(
        "Current renderer does not support string target for Teleports. (missing querySelector renderer option)"
      ), null;
  else
    return S.NODE_ENV !== "production" && !n && !is(e) && B(`Invalid Teleport target: ${n}`), n;
}, bu = {
  name: "Teleport",
  __isTeleport: !0,
  process(e, t, n, s, o, i, r, l, a, u) {
    const {
      mc: f,
      pc: c,
      pbc: p,
      o: { insert: h, querySelector: g, createText: m, createComment: D }
    } = u, P = is(t.props);
    let { shapeFlag: V, children: _, dynamicChildren: N } = t;
    if (S.NODE_ENV !== "production" && Gt && (a = !1, N = null), e == null) {
      const v = t.el = S.NODE_ENV !== "production" ? D("teleport start") : m(""), w = t.anchor = S.NODE_ENV !== "production" ? D("teleport end") : m("");
      h(v, n, s), h(w, n, s);
      const A = (y, T) => {
        V & 16 && (o && o.isCE && (o.ce._teleportTarget = y), f(
          _,
          y,
          T,
          o,
          i,
          r,
          l,
          a
        ));
      }, k = () => {
        const y = t.target = kr(t.props, g), T = _u(y, t, m, h);
        y ? (r !== "svg" && ga(y) ? r = "svg" : r !== "mathml" && va(y) && (r = "mathml"), P || (A(y, T), Xo(t, !1))) : S.NODE_ENV !== "production" && !P && B(
          "Invalid Teleport target on mount:",
          y,
          `(${typeof y})`
        );
      };
      P && (A(n, w), Xo(t, !0)), ma(t.props) ? (t.el.__isMounted = !1, Ye(() => {
        k(), delete t.el.__isMounted;
      }, i)) : k();
    } else {
      if (ma(t.props) && e.el.__isMounted === !1) {
        Ye(() => {
          bu.process(
            e,
            t,
            n,
            s,
            o,
            i,
            r,
            l,
            a,
            u
          );
        }, i);
        return;
      }
      t.el = e.el, t.targetStart = e.targetStart;
      const v = t.anchor = e.anchor, w = t.target = e.target, A = t.targetAnchor = e.targetAnchor, k = is(e.props), y = k ? n : w, T = k ? v : A;
      if (r === "svg" || ga(w) ? r = "svg" : (r === "mathml" || va(w)) && (r = "mathml"), N ? (p(
        e.dynamicChildren,
        N,
        y,
        o,
        i,
        r,
        l
      ), fo(e, t, S.NODE_ENV === "production")) : a || c(
        e,
        t,
        y,
        T,
        o,
        i,
        r,
        l,
        !1
      ), P)
        k ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : jo(
          t,
          n,
          v,
          u,
          1
        );
      else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
        const O = t.target = kr(
          t.props,
          g
        );
        O ? jo(
          t,
          O,
          null,
          u,
          0
        ) : S.NODE_ENV !== "production" && B(
          "Invalid Teleport target on update:",
          w,
          `(${typeof w})`
        );
      } else k && jo(
        t,
        w,
        A,
        u,
        1
      );
      Xo(t, P);
    }
  },
  remove(e, t, n, { um: s, o: { remove: o } }, i) {
    const {
      shapeFlag: r,
      children: l,
      anchor: a,
      targetStart: u,
      targetAnchor: f,
      target: c,
      props: p
    } = e;
    if (c && (o(u), o(f)), i && o(a), r & 16) {
      const h = i || !is(p);
      for (let g = 0; g < l.length; g++) {
        const m = l[g];
        s(
          m,
          t,
          n,
          h,
          !!m.dynamicChildren
        );
      }
    }
  },
  move: jo,
  hydrate: yh
};
function jo(e, t, n, { o: { insert: s }, m: o }, i = 2) {
  i === 0 && s(e.targetAnchor, t, n);
  const { el: r, anchor: l, shapeFlag: a, children: u, props: f } = e, c = i === 2;
  if (c && s(r, t, n), (!c || is(f)) && a & 16)
    for (let p = 0; p < u.length; p++)
      o(
        u[p],
        t,
        n,
        2
      );
  c && s(l, t, n);
}
function yh(e, t, n, s, o, i, {
  o: { nextSibling: r, parentNode: l, querySelector: a, insert: u, createText: f }
}, c) {
  const p = t.target = kr(
    t.props,
    a
  );
  if (p) {
    const h = is(t.props), g = p._lpa || p.firstChild;
    if (t.shapeFlag & 16)
      if (h)
        t.anchor = c(
          r(e),
          t,
          l(e),
          n,
          s,
          o,
          i
        ), t.targetStart = g, t.targetAnchor = g && r(g);
      else {
        t.anchor = r(e);
        let m = g;
        for (; m; ) {
          if (m && m.nodeType === 8) {
            if (m.data === "teleport start anchor")
              t.targetStart = m;
            else if (m.data === "teleport anchor") {
              t.targetAnchor = m, p._lpa = t.targetAnchor && r(t.targetAnchor);
              break;
            }
          }
          m = r(m);
        }
        t.targetAnchor || _u(p, t, f, u), c(
          g && r(g),
          t,
          p,
          n,
          s,
          o,
          i
        );
      }
    Xo(t, h);
  }
  return t.anchor && r(t.anchor);
}
const Sn = bu;
function Xo(e, t) {
  const n = e.ctx;
  if (n && n.ut) {
    let s, o;
    for (t ? (s = e.el, o = e.anchor) : (s = e.targetStart, o = e.targetAnchor); s && s !== o; )
      s.nodeType === 1 && s.setAttribute("data-v-owner", n.uid), s = s.nextSibling;
    n.ut();
  }
}
function _u(e, t, n, s) {
  const o = t.targetStart = n(""), i = t.targetAnchor = n("");
  return o[vu] = i, e && (s(o, e), s(i, e)), i;
}
const In = Symbol("_leaveCb"), Ho = Symbol("_enterCb");
function bl() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  return rt(() => {
    e.isMounted = !0;
  }), Ks(() => {
    e.isUnmounting = !0;
  }), e;
}
const Pt = [Function, Array], _l = {
  mode: String,
  appear: Boolean,
  persisted: Boolean,
  // enter
  onBeforeEnter: Pt,
  onEnter: Pt,
  onAfterEnter: Pt,
  onEnterCancelled: Pt,
  // leave
  onBeforeLeave: Pt,
  onLeave: Pt,
  onAfterLeave: Pt,
  onLeaveCancelled: Pt,
  // appear
  onBeforeAppear: Pt,
  onAppear: Pt,
  onAfterAppear: Pt,
  onAppearCancelled: Pt
}, wu = (e) => {
  const t = e.subTree;
  return t.component ? wu(t.component) : t;
}, bh = {
  name: "BaseTransition",
  props: _l,
  setup(e, { slots: t }) {
    const n = mt(), s = bl();
    return () => {
      const o = t.default && zi(t.default(), !0);
      if (!o || !o.length)
        return;
      const i = Eu(o), r = he(e), { mode: l } = r;
      if (S.NODE_ENV !== "production" && l && l !== "in-out" && l !== "out-in" && l !== "default" && B(`invalid <transition> mode: ${l}`), s.isLeaving)
        return cr(i);
      const a = ya(i);
      if (!a)
        return cr(i);
      let u = Vs(
        a,
        r,
        s,
        n,
        // #11061, ensure enterHooks is fresh after clone
        (c) => u = c
      );
      a.type !== Be && Nn(a, u);
      let f = n.subTree && ya(n.subTree);
      if (f && f.type !== Be && !Wt(a, f) && wu(n).type !== Be) {
        let c = Vs(
          f,
          r,
          s,
          n
        );
        if (Nn(f, c), l === "out-in" && a.type !== Be)
          return s.isLeaving = !0, c.afterLeave = () => {
            s.isLeaving = !1, n.job.flags & 8 || n.update(), delete c.afterLeave, f = void 0;
          }, cr(i);
        l === "in-out" && a.type !== Be ? c.delayLeave = (p, h, g) => {
          const m = Nu(
            s,
            f
          );
          m[String(f.key)] = f, p[In] = () => {
            h(), p[In] = void 0, delete u.delayedLeave, f = void 0;
          }, u.delayedLeave = () => {
            g(), delete u.delayedLeave, f = void 0;
          };
        } : f = void 0;
      } else f && (f = void 0);
      return i;
    };
  }
};
function Eu(e) {
  let t = e[0];
  if (e.length > 1) {
    let n = !1;
    for (const s of e)
      if (s.type !== Be) {
        if (S.NODE_ENV !== "production" && n) {
          B(
            "<transition> can only be used on a single element or component. Use <transition-group> for lists."
          );
          break;
        }
        if (t = s, n = !0, S.NODE_ENV === "production") break;
      }
  }
  return t;
}
const xu = bh;
function Nu(e, t) {
  const { leavingVNodes: n } = e;
  let s = n.get(t.type);
  return s || (s = /* @__PURE__ */ Object.create(null), n.set(t.type, s)), s;
}
function Vs(e, t, n, s, o) {
  const {
    appear: i,
    mode: r,
    persisted: l = !1,
    onBeforeEnter: a,
    onEnter: u,
    onAfterEnter: f,
    onEnterCancelled: c,
    onBeforeLeave: p,
    onLeave: h,
    onAfterLeave: g,
    onLeaveCancelled: m,
    onBeforeAppear: D,
    onAppear: P,
    onAfterAppear: V,
    onAppearCancelled: _
  } = t, N = String(e.key), v = Nu(n, e), w = (y, T) => {
    y && jt(
      y,
      s,
      9,
      T
    );
  }, A = (y, T) => {
    const O = T[1];
    w(y, T), te(y) ? y.every((C) => C.length <= 1) && O() : y.length <= 1 && O();
  }, k = {
    mode: r,
    persisted: l,
    beforeEnter(y) {
      let T = a;
      if (!n.isMounted)
        if (i)
          T = D || a;
        else
          return;
      y[In] && y[In](
        !0
        /* cancelled */
      );
      const O = v[N];
      O && Wt(e, O) && O.el[In] && O.el[In](), w(T, [y]);
    },
    enter(y) {
      let T = u, O = f, C = c;
      if (!n.isMounted)
        if (i)
          T = P || u, O = V || f, C = _ || c;
        else
          return;
      let L = !1;
      const j = y[Ho] = (q) => {
        L || (L = !0, q ? w(C, [y]) : w(O, [y]), k.delayedLeave && k.delayedLeave(), y[Ho] = void 0);
      };
      T ? A(T, [y, j]) : j();
    },
    leave(y, T) {
      const O = String(e.key);
      if (y[Ho] && y[Ho](
        !0
        /* cancelled */
      ), n.isUnmounting)
        return T();
      w(p, [y]);
      let C = !1;
      const L = y[In] = (j) => {
        C || (C = !0, T(), j ? w(m, [y]) : w(g, [y]), y[In] = void 0, v[O] === e && delete v[O]);
      };
      v[O] = e, h ? A(h, [y, L]) : L();
    },
    clone(y) {
      const T = Vs(
        y,
        t,
        n,
        s,
        o
      );
      return o && o(T), T;
    }
  };
  return k;
}
function cr(e) {
  if (Ws(e))
    return e = Ht(e), e.children = null, e;
}
function ya(e) {
  if (!Ws(e))
    return yu(e.type) && e.children ? Eu(e.children) : e;
  if (e.component)
    return e.component.subTree;
  const { shapeFlag: t, children: n } = e;
  if (n) {
    if (t & 16)
      return n[0];
    if (t & 32 && ce(n.default))
      return n.default();
  }
}
function Nn(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, Nn(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function zi(e, t = !1, n) {
  let s = [], o = 0;
  for (let i = 0; i < e.length; i++) {
    let r = e[i];
    const l = n == null ? r.key : String(n) + String(r.key != null ? r.key : i);
    r.type === ae ? (r.patchFlag & 128 && o++, s = s.concat(
      zi(r.children, t, l)
    )) : (t || r.type !== Be) && s.push(l != null ? Ht(r, { key: l }) : r);
  }
  if (o > 1)
    for (let i = 0; i < s.length; i++)
      s[i].patchFlag = -2;
  return s;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function wl(e, t) {
  return ce(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    ge({ name: e.name }, t, { setup: e })
  ) : e;
}
function _h() {
  const e = mt();
  return e ? (e.appContext.config.idPrefix || "v") + "-" + e.ids[0] + e.ids[1]++ : (S.NODE_ENV !== "production" && B(
    "useId() is called when there is no active component instance to be associated with."
  ), "");
}
function El(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
const Su = /* @__PURE__ */ new WeakSet();
function wh(e) {
  const t = mt(), n = ou(null);
  if (t) {
    const o = t.refs === ve ? t.refs = {} : t.refs;
    let i;
    S.NODE_ENV !== "production" && (i = Object.getOwnPropertyDescriptor(o, e)) && !i.configurable ? B(`useTemplateRef('${e}') already exists.`) : Object.defineProperty(o, e, {
      enumerable: !0,
      get: () => n.value,
      set: (r) => n.value = r
    });
  } else S.NODE_ENV !== "production" && B(
    "useTemplateRef() is called when there is no active component instance to be associated with."
  );
  const s = S.NODE_ENV !== "production" ? Bi(n) : n;
  return S.NODE_ENV !== "production" && Su.add(s), s;
}
function Cs(e, t, n, s, o = !1) {
  if (te(e)) {
    e.forEach(
      (g, m) => Cs(
        g,
        t && (te(t) ? t[m] : t),
        n,
        s,
        o
      )
    );
    return;
  }
  if (jn(s) && !o) {
    s.shapeFlag & 512 && s.type.__asyncResolved && s.component.subTree.component && Cs(e, t, n, s.component.subTree);
    return;
  }
  const i = s.shapeFlag & 4 ? Io(s.component) : s.el, r = o ? null : i, { i: l, r: a } = e;
  if (S.NODE_ENV !== "production" && !l) {
    B(
      "Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function."
    );
    return;
  }
  const u = t && t.r, f = l.refs === ve ? l.refs = {} : l.refs, c = l.setupState, p = he(c), h = c === ve ? () => !1 : (g) => S.NODE_ENV !== "production" && (xe(p, g) && !Ue(p[g]) && B(
    `Template ref "${g}" used on a non-ref value. It will not work in the production build.`
  ), Su.has(p[g])) ? !1 : xe(p, g);
  if (u != null && u !== a && (de(u) ? (f[u] = null, h(u) && (c[u] = null)) : Ue(u) && (u.value = null)), ce(a))
    ms(a, l, 12, [r, f]);
  else {
    const g = de(a), m = Ue(a);
    if (g || m) {
      const D = () => {
        if (e.f) {
          const P = g ? h(a) ? c[a] : f[a] : a.value;
          o ? te(P) && il(P, i) : te(P) ? P.includes(i) || P.push(i) : g ? (f[a] = [i], h(a) && (c[a] = f[a])) : (a.value = [i], e.k && (f[e.k] = a.value));
        } else g ? (f[a] = r, h(a) && (c[a] = r)) : m ? (a.value = r, e.k && (f[e.k] = r)) : S.NODE_ENV !== "production" && B("Invalid template ref type:", a, `(${typeof a})`);
      };
      r ? (D.id = -1, Ye(D, n)) : D();
    } else S.NODE_ENV !== "production" && B("Invalid template ref type:", a, `(${typeof a})`);
  }
}
let ba = !1;
const Gn = () => {
  ba || (console.error("Hydration completed but contains mismatches."), ba = !0);
}, Eh = (e) => e.namespaceURI.includes("svg") && e.tagName !== "foreignObject", xh = (e) => e.namespaceURI.includes("MathML"), Uo = (e) => {
  if (e.nodeType === 1) {
    if (Eh(e)) return "svg";
    if (xh(e)) return "mathml";
  }
}, Zn = (e) => e.nodeType === 8;
function Nh(e) {
  const {
    mt: t,
    p: n,
    o: {
      patchProp: s,
      createText: o,
      nextSibling: i,
      parentNode: r,
      remove: l,
      insert: a,
      createComment: u
    }
  } = e, f = (_, N) => {
    if (!N.hasChildNodes()) {
      S.NODE_ENV !== "production" && B(
        "Attempting to hydrate existing markup but container is empty. Performing full mount instead."
      ), n(null, _, N), fi(), N._vnode = _;
      return;
    }
    c(N.firstChild, _, null, null, null), fi(), N._vnode = _;
  }, c = (_, N, v, w, A, k = !1) => {
    k = k || !!N.dynamicChildren;
    const y = Zn(_) && _.data === "[", T = () => m(
      _,
      N,
      v,
      w,
      A,
      y
    ), { type: O, ref: C, shapeFlag: L, patchFlag: j } = N;
    let q = _.nodeType;
    N.el = _, S.NODE_ENV !== "production" && (cs(_, "__vnode", N, !0), cs(_, "__vueParentComponent", v, !0)), j === -2 && (k = !1, N.dynamicChildren = null);
    let I = null;
    switch (O) {
      case cn:
        q !== 3 ? N.children === "" ? (a(N.el = o(""), r(_), _), I = _) : I = T() : (_.data !== N.children && (S.NODE_ENV !== "production" && B(
          "Hydration text mismatch in",
          _.parentNode,
          `
  - rendered on server: ${JSON.stringify(
            _.data
          )}
  - expected on client: ${JSON.stringify(N.children)}`
        ), Gn(), _.data = N.children), I = i(_));
        break;
      case Be:
        V(_) ? (I = i(_), P(
          N.el = _.content.firstChild,
          _,
          v
        )) : q !== 8 || y ? I = T() : I = i(_);
        break;
      case Hn:
        if (y && (_ = i(_), q = _.nodeType), q === 1 || q === 3) {
          I = _;
          const R = !N.children.length;
          for (let M = 0; M < N.staticCount; M++)
            R && (N.children += I.nodeType === 1 ? I.outerHTML : I.data), M === N.staticCount - 1 && (N.anchor = I), I = i(I);
          return y ? i(I) : I;
        } else
          T();
        break;
      case ae:
        y ? I = g(
          _,
          N,
          v,
          w,
          A,
          k
        ) : I = T();
        break;
      default:
        if (L & 1)
          (q !== 1 || N.type.toLowerCase() !== _.tagName.toLowerCase()) && !V(_) ? I = T() : I = p(
            _,
            N,
            v,
            w,
            A,
            k
          );
        else if (L & 6) {
          N.slotScopeIds = A;
          const R = r(_);
          if (y ? I = D(_) : Zn(_) && _.data === "teleport start" ? I = D(_, _.data, "teleport end") : I = i(_), t(
            N,
            R,
            null,
            v,
            w,
            Uo(R),
            k
          ), jn(N) && !N.type.__asyncResolved) {
            let M;
            y ? (M = fe(ae), M.anchor = I ? I.previousSibling : R.lastChild) : M = _.nodeType === 3 ? We("") : fe("div"), M.el = _, N.component.subTree = M;
          }
        } else L & 64 ? q !== 8 ? I = T() : I = N.type.hydrate(
          _,
          N,
          v,
          w,
          A,
          k,
          e,
          h
        ) : L & 128 ? I = N.type.hydrate(
          _,
          N,
          v,
          w,
          Uo(r(_)),
          A,
          k,
          e,
          c
        ) : S.NODE_ENV !== "production" && B("Invalid HostVNode type:", O, `(${typeof O})`);
    }
    return C != null && Cs(C, null, w, N), I;
  }, p = (_, N, v, w, A, k) => {
    k = k || !!N.dynamicChildren;
    const { type: y, props: T, patchFlag: O, shapeFlag: C, dirs: L, transition: j } = N, q = y === "input" || y === "option";
    if (S.NODE_ENV !== "production" || q || O !== -1) {
      L && rn(N, null, v, "created");
      let I = !1;
      if (V(_)) {
        I = Qu(
          null,
          // no need check parentSuspense in hydration
          j
        ) && v && v.vnode.props && v.vnode.props.appear;
        const M = _.content.firstChild;
        if (I) {
          const J = M.getAttribute("class");
          J && (M.$cls = J), j.beforeEnter(M);
        }
        P(M, _, v), N.el = _ = M;
      }
      if (C & 16 && // skip if element has innerHTML / textContent
      !(T && (T.innerHTML || T.textContent))) {
        let M = h(
          _.firstChild,
          N,
          _,
          v,
          w,
          A,
          k
        ), J = !1;
        for (; M; ) {
          no(
            _,
            1
            /* CHILDREN */
          ) || (S.NODE_ENV !== "production" && !J && (B(
            "Hydration children mismatch on",
            _,
            `
Server rendered element contains more child nodes than client vdom.`
          ), J = !0), Gn());
          const ye = M;
          M = M.nextSibling, l(ye);
        }
      } else if (C & 8) {
        let M = N.children;
        M[0] === `
` && (_.tagName === "PRE" || _.tagName === "TEXTAREA") && (M = M.slice(1)), _.textContent !== M && (no(
          _,
          0
          /* TEXT */
        ) || (S.NODE_ENV !== "production" && B(
          "Hydration text content mismatch on",
          _,
          `
  - rendered on server: ${_.textContent}
  - expected on client: ${N.children}`
        ), Gn()), _.textContent = N.children);
      }
      if (T) {
        if (S.NODE_ENV !== "production" || q || !k || O & 48) {
          const M = _.tagName.includes("-");
          for (const J in T)
            S.NODE_ENV !== "production" && // #11189 skip if this node has directives that have created hooks
            // as it could have mutated the DOM in any possible way
            !(L && L.some((ye) => ye.dir.created)) && Sh(_, J, T[J], N, v) && Gn(), (q && (J.endsWith("value") || J === "indeterminate") || En(J) && !Bn(J) || // force hydrate v-bind with .prop modifiers
            J[0] === "." || M) && s(_, J, null, T[J], void 0, v);
        } else if (T.onClick)
          s(
            _,
            "onClick",
            null,
            T.onClick,
            void 0,
            v
          );
        else if (O & 4 && bn(T.style))
          for (const M in T.style) T.style[M];
      }
      let R;
      (R = T && T.onVnodeBeforeMount) && St(R, v, N), L && rn(N, null, v, "beforeMount"), ((R = T && T.onVnodeMounted) || L || I) && ad(() => {
        R && St(R, v, N), I && j.enter(_), L && rn(N, null, v, "mounted");
      }, w);
    }
    return _.nextSibling;
  }, h = (_, N, v, w, A, k, y) => {
    y = y || !!N.dynamicChildren;
    const T = N.children, O = T.length;
    let C = !1;
    for (let L = 0; L < O; L++) {
      const j = y ? T[L] : T[L] = _t(T[L]), q = j.type === cn;
      _ ? (q && !y && L + 1 < O && _t(T[L + 1]).type === cn && (a(
        o(
          _.data.slice(j.children.length)
        ),
        v,
        i(_)
      ), _.data = j.children), _ = c(
        _,
        j,
        w,
        A,
        k,
        y
      )) : q && !j.children ? a(j.el = o(""), v) : (no(
        v,
        1
        /* CHILDREN */
      ) || (S.NODE_ENV !== "production" && !C && (B(
        "Hydration children mismatch on",
        v,
        `
Server rendered element contains fewer child nodes than client vdom.`
      ), C = !0), Gn()), n(
        null,
        j,
        v,
        null,
        w,
        A,
        Uo(v),
        k
      ));
    }
    return _;
  }, g = (_, N, v, w, A, k) => {
    const { slotScopeIds: y } = N;
    y && (A = A ? A.concat(y) : y);
    const T = r(_), O = h(
      i(_),
      N,
      T,
      v,
      w,
      A,
      k
    );
    return O && Zn(O) && O.data === "]" ? i(N.anchor = O) : (Gn(), a(N.anchor = u("]"), T, O), O);
  }, m = (_, N, v, w, A, k) => {
    if (no(
      _.parentElement,
      1
      /* CHILDREN */
    ) || (S.NODE_ENV !== "production" && B(
      `Hydration node mismatch:
- rendered on server:`,
      _,
      _.nodeType === 3 ? "(text)" : Zn(_) && _.data === "[" ? "(start of fragment)" : "",
      `
- expected on client:`,
      N.type
    ), Gn()), N.el = null, k) {
      const O = D(_);
      for (; ; ) {
        const C = i(_);
        if (C && C !== O)
          l(C);
        else
          break;
      }
    }
    const y = i(_), T = r(_);
    return l(_), n(
      null,
      N,
      T,
      y,
      v,
      w,
      Uo(T),
      A
    ), v && (v.vnode.el = N.el, Yi(v, N.el)), y;
  }, D = (_, N = "[", v = "]") => {
    let w = 0;
    for (; _; )
      if (_ = i(_), _ && Zn(_) && (_.data === N && w++, _.data === v)) {
        if (w === 0)
          return i(_);
        w--;
      }
    return _;
  }, P = (_, N, v) => {
    const w = N.parentNode;
    w && w.replaceChild(_, N);
    let A = v;
    for (; A; )
      A.vnode.el === N && (A.vnode.el = A.subTree.el = _), A = A.parent;
  }, V = (_) => _.nodeType === 1 && _.tagName === "TEMPLATE";
  return [f, c];
}
function Sh(e, t, n, s, o) {
  let i, r, l, a;
  if (t === "class")
    e.$cls ? (l = e.$cls, delete e.$cls) : l = e.getAttribute("class"), a = be(n), kh(_a(l || ""), _a(a)) || (i = 2, r = "class");
  else if (t === "style") {
    l = e.getAttribute("style") || "", a = de(n) ? n : Zf(Ve(n));
    const u = wa(l), f = wa(a);
    if (s.dirs)
      for (const { dir: c, value: p } of s.dirs)
        c.name === "show" && !p && f.set("display", "none");
    o && ku(o, s, f), Ch(u, f) || (i = 3, r = "style");
  } else (e instanceof SVGElement && ap(t) || e instanceof HTMLElement && (ca(t) || lp(t))) && (ca(t) ? (l = e.hasAttribute(t), a = al(n)) : n == null ? (l = e.hasAttribute(t), a = !1) : (e.hasAttribute(t) ? l = e.getAttribute(t) : t === "value" && e.tagName === "TEXTAREA" ? l = e.value : l = !1, a = cp(n) ? String(n) : !1), l !== a && (i = 4, r = t));
  if (i != null && !no(e, i)) {
    const u = (p) => p === !1 ? "(not rendered)" : `${r}="${p}"`, f = `Hydration ${Cu[i]} mismatch on`, c = `
  - rendered on server: ${u(l)}
  - expected on client: ${u(a)}
  Note: this mismatch is check-only. The DOM will not be rectified in production due to performance overhead.
  You should fix the source of the mismatch.`;
    return B(f, e, c), !0;
  }
  return !1;
}
function _a(e) {
  return new Set(e.trim().split(/\s+/));
}
function kh(e, t) {
  if (e.size !== t.size)
    return !1;
  for (const n of e)
    if (!t.has(n))
      return !1;
  return !0;
}
function wa(e) {
  const t = /* @__PURE__ */ new Map();
  for (const n of e.split(";")) {
    let [s, o] = n.split(":");
    s = s.trim(), o = o && o.trim(), s && o && t.set(s, o);
  }
  return t;
}
function Ch(e, t) {
  if (e.size !== t.size)
    return !1;
  for (const [n, s] of e)
    if (s !== t.get(n))
      return !1;
  return !0;
}
function ku(e, t, n) {
  const s = e.subTree;
  if (e.getCssVars && (t === s || s && s.type === ae && s.children.includes(t))) {
    const o = e.getCssVars();
    for (const i in o) {
      const r = Fc(o[i]);
      n.set(`--${dp(i)}`, r);
    }
  }
  t === s && e.parent && ku(e.parent, e.vnode, n);
}
const Ea = "data-allow-mismatch", Cu = {
  0: "text",
  1: "children",
  2: "class",
  3: "style",
  4: "attribute"
};
function no(e, t) {
  if (t === 0 || t === 1)
    for (; e && !e.hasAttribute(Ea); )
      e = e.parentElement;
  const n = e && e.getAttribute(Ea);
  if (n == null)
    return !1;
  if (n === "")
    return !0;
  {
    const s = n.split(",");
    return t === 0 && s.includes("children") ? !0 : s.includes(Cu[t]);
  }
}
const Oh = $o().requestIdleCallback || ((e) => setTimeout(e, 1)), Th = $o().cancelIdleCallback || ((e) => clearTimeout(e)), $h = (e = 1e4) => (t) => {
  const n = Oh(t, { timeout: e });
  return () => Th(n);
};
function Dh(e) {
  const { top: t, left: n, bottom: s, right: o } = e.getBoundingClientRect(), { innerHeight: i, innerWidth: r } = window;
  return (t > 0 && t < i || s > 0 && s < i) && (n > 0 && n < r || o > 0 && o < r);
}
const Ah = (e) => (t, n) => {
  const s = new IntersectionObserver((o) => {
    for (const i of o)
      if (i.isIntersecting) {
        s.disconnect(), t();
        break;
      }
  }, e);
  return n((o) => {
    if (o instanceof Element) {
      if (Dh(o))
        return t(), s.disconnect(), !1;
      s.observe(o);
    }
  }), () => s.disconnect();
}, Vh = (e) => (t) => {
  if (e) {
    const n = matchMedia(e);
    if (n.matches)
      t();
    else
      return n.addEventListener("change", t, { once: !0 }), () => n.removeEventListener("change", t);
  }
}, Ih = (e = []) => (t, n) => {
  de(e) && (e = [e]);
  let s = !1;
  const o = (r) => {
    s || (s = !0, i(), t(), r.target.dispatchEvent(new r.constructor(r.type, r)));
  }, i = () => {
    n((r) => {
      for (const l of e)
        r.removeEventListener(l, o);
    });
  };
  return n((r) => {
    for (const l of e)
      r.addEventListener(l, o, { once: !0 });
  }), i;
};
function Mh(e, t) {
  if (Zn(e) && e.data === "[") {
    let n = 1, s = e.nextSibling;
    for (; s; ) {
      if (s.nodeType === 1) {
        if (t(s) === !1)
          break;
      } else if (Zn(s))
        if (s.data === "]") {
          if (--n === 0) break;
        } else s.data === "[" && n++;
      s = s.nextSibling;
    }
  } else
    t(e);
}
const jn = (e) => !!e.type.__asyncLoader;
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function Ph(e) {
  ce(e) && (e = { loader: e });
  const {
    loader: t,
    loadingComponent: n,
    errorComponent: s,
    delay: o = 200,
    hydrate: i,
    timeout: r,
    // undefined = never times out
    suspensible: l = !0,
    onError: a
  } = e;
  let u = null, f, c = 0;
  const p = () => (c++, u = null, h()), h = () => {
    let g;
    return u || (g = u = t().catch((m) => {
      if (m = m instanceof Error ? m : new Error(String(m)), a)
        return new Promise((D, P) => {
          a(m, () => D(p()), () => P(m), c + 1);
        });
      throw m;
    }).then((m) => {
      if (g !== u && u)
        return u;
      if (S.NODE_ENV !== "production" && !m && B(
        "Async component loader resolved to undefined. If you are using retry(), make sure to return its return value."
      ), m && (m.__esModule || m[Symbol.toStringTag] === "Module") && (m = m.default), S.NODE_ENV !== "production" && m && !Ee(m) && !ce(m))
        throw new Error(`Invalid async component load result: ${m}`);
      return f = m, m;
    }));
  };
  return /* @__PURE__ */ wl({
    name: "AsyncComponentWrapper",
    __asyncLoader: h,
    __asyncHydrate(g, m, D) {
      let P = !1;
      (m.bu || (m.bu = [])).push(() => P = !0);
      const V = () => {
        if (P) {
          S.NODE_ENV !== "production" && B(
            `Skipping lazy hydration for component '${Ms(f) || f.__file}': it was updated before lazy hydration performed.`
          );
          return;
        }
        D();
      }, _ = i ? () => {
        const N = i(
          V,
          (v) => Mh(g, v)
        );
        N && (m.bum || (m.bum = [])).push(N);
      } : V;
      f ? _() : h().then(() => !m.isUnmounted && _());
    },
    get __asyncResolved() {
      return f;
    },
    setup() {
      const g = Ze;
      if (El(g), f)
        return () => ur(f, g);
      const m = (_) => {
        u = null, Wn(
          _,
          g,
          13,
          !s
        );
      };
      if (l && g.suspense || Is)
        return h().then((_) => () => ur(_, g)).catch((_) => (m(_), () => s ? fe(s, {
          error: _
        }) : null));
      const D = X(!1), P = X(), V = X(!!o);
      return o && setTimeout(() => {
        V.value = !1;
      }, o), r != null && setTimeout(() => {
        if (!D.value && !P.value) {
          const _ = new Error(
            `Async component timed out after ${r}ms.`
          );
          m(_), P.value = _;
        }
      }, r), h().then(() => {
        D.value = !0, g.parent && Ws(g.parent.vnode) && g.parent.update();
      }).catch((_) => {
        m(_), P.value = _;
      }), () => {
        if (D.value && f)
          return ur(f, g);
        if (P.value && s)
          return fe(s, {
            error: P.value
          });
        if (n && !V.value)
          return fe(n);
      };
    }
  });
}
function ur(e, t) {
  const { ref: n, props: s, children: o, ce: i } = t.vnode, r = fe(e, s, o);
  return r.ref = n, r.ce = i, delete t.vnode.ce, r;
}
const Ws = (e) => e.type.__isKeepAlive, Rh = {
  name: "KeepAlive",
  // Marker for special handling inside the renderer. We are not using a ===
  // check directly on KeepAlive in the renderer, because importing it directly
  // would prevent it from being tree-shaken.
  __isKeepAlive: !0,
  props: {
    include: [String, RegExp, Array],
    exclude: [String, RegExp, Array],
    max: [String, Number]
  },
  setup(e, { slots: t }) {
    const n = mt(), s = n.ctx;
    if (!s.renderer)
      return () => {
        const V = t.default && t.default();
        return V && V.length === 1 ? V[0] : V;
      };
    const o = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Set();
    let r = null;
    S.NODE_ENV !== "production" && (n.__v_cache = o);
    const l = n.suspense, {
      renderer: {
        p: a,
        m: u,
        um: f,
        o: { createElement: c }
      }
    } = s, p = c("div");
    s.activate = (V, _, N, v, w) => {
      const A = V.component;
      u(V, _, N, 0, l), a(
        A.vnode,
        V,
        _,
        N,
        A,
        l,
        v,
        V.slotScopeIds,
        w
      ), Ye(() => {
        A.isDeactivated = !1, A.a && Rn(A.a);
        const k = V.props && V.props.onVnodeMounted;
        k && St(k, A.parent, V);
      }, l), S.NODE_ENV !== "production" && Sr(A);
    }, s.deactivate = (V) => {
      const _ = V.component;
      vi(_.m), vi(_.a), u(V, p, null, 1, l), Ye(() => {
        _.da && Rn(_.da);
        const N = V.props && V.props.onVnodeUnmounted;
        N && St(N, _.parent, V), _.isDeactivated = !0;
      }, l), S.NODE_ENV !== "production" && Sr(_), S.NODE_ENV !== "production" && (_.__keepAliveStorageContainer = p);
    };
    function h(V) {
      dr(V), f(V, n, l, !0);
    }
    function g(V) {
      o.forEach((_, N) => {
        const v = Ms(_.type);
        v && !V(v) && m(N);
      });
    }
    function m(V) {
      const _ = o.get(V);
      _ && (!r || !Wt(_, r)) ? h(_) : r && dr(r), o.delete(V), i.delete(V);
    }
    Lt(
      () => [e.include, e.exclude],
      ([V, _]) => {
        V && g((N) => so(V, N)), _ && g((N) => !so(_, N));
      },
      // prune post-render after `current` has been updated
      { flush: "post", deep: !0 }
    );
    let D = null;
    const P = () => {
      D != null && (bi(n.subTree.type) ? Ye(() => {
        o.set(D, qo(n.subTree));
      }, n.subTree.suspense) : o.set(D, qo(n.subTree)));
    };
    return rt(P), Ki(P), Ks(() => {
      o.forEach((V) => {
        const { subTree: _, suspense: N } = n, v = qo(_);
        if (V.type === v.type && V.key === v.key) {
          dr(v);
          const w = v.component.da;
          w && Ye(w, N);
          return;
        }
        h(V);
      });
    }), () => {
      if (D = null, !t.default)
        return r = null;
      const V = t.default(), _ = V[0];
      if (V.length > 1)
        return S.NODE_ENV !== "production" && B("KeepAlive should contain exactly one component child."), r = null, V;
      if (!dn(_) || !(_.shapeFlag & 4) && !(_.shapeFlag & 128))
        return r = null, _;
      let N = qo(_);
      if (N.type === Be)
        return r = null, N;
      const v = N.type, w = Ms(
        jn(N) ? N.type.__asyncResolved || {} : v
      ), { include: A, exclude: k, max: y } = e;
      if (A && (!w || !so(A, w)) || k && w && so(k, w))
        return N.shapeFlag &= -257, r = N, _;
      const T = N.key == null ? v : N.key, O = o.get(T);
      return N.el && (N = Ht(N), _.shapeFlag & 128 && (_.ssContent = N)), D = T, O ? (N.el = O.el, N.component = O.component, N.transition && Nn(N, N.transition), N.shapeFlag |= 512, i.delete(T), i.add(T)) : (i.add(T), y && i.size > parseInt(y, 10) && m(i.values().next().value)), N.shapeFlag |= 256, r = N, bi(_.type) ? _ : N;
    };
  }
}, Lh = Rh;
function so(e, t) {
  return te(e) ? e.some((n) => so(n, t)) : de(e) ? e.split(",").includes(t) : Hf(e) ? (e.lastIndex = 0, e.test(t)) : !1;
}
function Ou(e, t) {
  $u(e, "a", t);
}
function Tu(e, t) {
  $u(e, "da", t);
}
function $u(e, t, n = Ze) {
  const s = e.__wdc || (e.__wdc = () => {
    let o = n;
    for (; o; ) {
      if (o.isDeactivated)
        return;
      o = o.parent;
    }
    return e();
  });
  if (Wi(t, s, n), n) {
    let o = n.parent;
    for (; o && o.parent; )
      Ws(o.parent.vnode) && Fh(s, t, n, o), o = o.parent;
  }
}
function Fh(e, t, n, s) {
  const o = Wi(
    t,
    e,
    s,
    !0
    /* prepend */
  );
  tn(() => {
    il(s[t], o);
  }, n);
}
function dr(e) {
  e.shapeFlag &= -257, e.shapeFlag &= -513;
}
function qo(e) {
  return e.shapeFlag & 128 ? e.ssContent : e;
}
function Wi(e, t, n = Ze, s = !1) {
  if (n) {
    const o = n[e] || (n[e] = []), i = t.__weh || (t.__weh = (...r) => {
      Qt();
      const l = fs(n), a = jt(t, n, e, r);
      return l(), Zt(), a;
    });
    return s ? o.unshift(i) : o.push(i), i;
  } else if (S.NODE_ENV !== "production") {
    const o = ln(Hi[e].replace(/ hook$/, ""));
    B(
      `${o} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`
    );
  }
}
const kn = (e) => (t, n = Ze) => {
  (!Is || e === "sp") && Wi(e, (...s) => t(...s), n);
}, Du = kn("bm"), rt = kn("m"), xl = kn(
  "bu"
), Ki = kn("u"), Ks = kn(
  "bum"
), tn = kn("um"), Au = kn(
  "sp"
), Vu = kn("rtg"), Iu = kn("rtc");
function Mu(e, t = Ze) {
  Wi("ec", e, t);
}
const hi = "components", Bh = "directives";
function jh(e, t) {
  return Sl(hi, e, !0, t) || e;
}
const Nl = Symbol.for("v-ndc");
function Pu(e) {
  return de(e) ? Sl(hi, e, !1) || e : e || Nl;
}
function Hh(e) {
  return Sl(Bh, e);
}
function Sl(e, t, n = !0, s = !1) {
  const o = Je || Ze;
  if (o) {
    const i = o.type;
    if (e === hi) {
      const l = Ms(
        i,
        !1
      );
      if (l && (l === t || l === Ie(t) || l === un(Ie(t))))
        return i;
    }
    const r = (
      // local registration
      // check instance[type] first which is resolved for options API
      xa(o[e] || i[e], t) || // global registration
      xa(o.appContext[e], t)
    );
    if (!r && s)
      return i;
    if (S.NODE_ENV !== "production" && n && !r) {
      const l = e === hi ? `
If this is a native custom element, make sure to exclude it from component resolution via compilerOptions.isCustomElement.` : "";
      B(`Failed to resolve ${e.slice(0, -1)}: ${t}${l}`);
    }
    return r;
  } else S.NODE_ENV !== "production" && B(
    `resolve${un(e.slice(0, -1))} can only be used in render() or setup().`
  );
}
function xa(e, t) {
  return e && (e[t] || e[Ie(t)] || e[un(Ie(t))]);
}
function we(e, t, n, s) {
  let o;
  const i = n && n[s], r = te(e);
  if (r || de(e)) {
    const l = r && bn(e);
    let a = !1, u = !1;
    l && (a = !ft(e), u = en(e), e = Li(e)), o = new Array(e.length);
    for (let f = 0, c = e.length; f < c; f++)
      o[f] = t(
        a ? u ? ci(ot(e[f])) : ot(e[f]) : e[f],
        f,
        void 0,
        i && i[f]
      );
  } else if (typeof e == "number") {
    S.NODE_ENV !== "production" && !Number.isInteger(e) && B(`The v-for range expect an integer value but got ${e}.`), o = new Array(e);
    for (let l = 0; l < e; l++)
      o[l] = t(l + 1, l, void 0, i && i[l]);
  } else if (Ee(e))
    if (e[Symbol.iterator])
      o = Array.from(
        e,
        (l, a) => t(l, a, void 0, i && i[a])
      );
    else {
      const l = Object.keys(e);
      o = new Array(l.length);
      for (let a = 0, u = l.length; a < u; a++) {
        const f = l[a];
        o[a] = t(e[f], f, a, i && i[a]);
      }
    }
  else
    o = [];
  return n && (n[s] = o), o;
}
function Uh(e, t) {
  for (let n = 0; n < t.length; n++) {
    const s = t[n];
    if (te(s))
      for (let o = 0; o < s.length; o++)
        e[s[o].name] = s[o].fn;
    else s && (e[s.name] = s.key ? (...o) => {
      const i = s.fn(...o);
      return i && (i.key = s.key), i;
    } : s.fn);
  }
  return e;
}
function kl(e, t, n = {}, s, o) {
  if (Je.ce || Je.parent && jn(Je.parent) && Je.parent.ce)
    return t !== "default" && (n.name = t), E(), Tt(
      ae,
      null,
      [fe("slot", n, s && s())],
      64
    );
  let i = e[t];
  S.NODE_ENV !== "production" && i && i.length > 1 && (B(
    "SSR-optimized slot function detected in a non-SSR-optimized render function. You need to mark this component with $dynamic-slots in the parent template."
  ), i = () => []), i && i._c && (i._d = !1), E();
  const r = i && Cl(i(n)), l = n.key || // slot content array of a dynamic conditional slot may have a branch
  // key attached in the `createSlots` helper, respect that
  r && r.key, a = Tt(
    ae,
    {
      key: (l && !Ot(l) ? l : `_${t}`) + // #7256 force differentiate fallback content from actual content
      (!r && s ? "_fb" : "")
    },
    r || (s ? s() : []),
    r && e._ === 1 ? 64 : -2
  );
  return !o && a.scopeId && (a.slotScopeIds = [a.scopeId + "-s"]), i && i._c && (i._d = !0), a;
}
function Cl(e) {
  return e.some((t) => dn(t) ? !(t.type === Be || t.type === ae && !Cl(t.children)) : !0) ? e : null;
}
function qh(e, t) {
  const n = {};
  if (S.NODE_ENV !== "production" && !Ee(e))
    return B("v-on with no argument expects an object value."), n;
  for (const s in e)
    n[t && /[A-Z]/.test(s) ? `on:${s}` : ln(s)] = e[s];
  return n;
}
const Cr = (e) => e ? vd(e) ? Io(e) : Cr(e.parent) : null, rs = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ ge(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => S.NODE_ENV !== "production" ? Kt(e.props) : e.props,
    $attrs: (e) => S.NODE_ENV !== "production" ? Kt(e.attrs) : e.attrs,
    $slots: (e) => S.NODE_ENV !== "production" ? Kt(e.slots) : e.slots,
    $refs: (e) => S.NODE_ENV !== "production" ? Kt(e.refs) : e.refs,
    $parent: (e) => Cr(e.parent),
    $root: (e) => Cr(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => Tl(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      Ui(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = xn.bind(e.proxy)),
    $watch: (e) => Im.bind(e)
  })
), Ol = (e) => e === "_" || e === "$", fr = (e, t) => e !== ve && !e.__isScriptSetup && xe(e, t), co = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: n, setupState: s, data: o, props: i, accessCache: r, type: l, appContext: a } = e;
    if (S.NODE_ENV !== "production" && t === "__isVue")
      return !0;
    let u;
    if (t[0] !== "$") {
      const h = r[t];
      if (h !== void 0)
        switch (h) {
          case 1:
            return s[t];
          case 2:
            return o[t];
          case 4:
            return n[t];
          case 3:
            return i[t];
        }
      else {
        if (fr(s, t))
          return r[t] = 1, s[t];
        if (o !== ve && xe(o, t))
          return r[t] = 2, o[t];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (u = e.propsOptions[0]) && xe(u, t)
        )
          return r[t] = 3, i[t];
        if (n !== ve && xe(n, t))
          return r[t] = 4, n[t];
        Or && (r[t] = 0);
      }
    }
    const f = rs[t];
    let c, p;
    if (f)
      return t === "$attrs" ? (Xe(e.attrs, "get", ""), S.NODE_ENV !== "production" && yi()) : S.NODE_ENV !== "production" && t === "$slots" && Xe(e, "get", t), f(e);
    if (
      // css module (injected by vue-loader)
      (c = l.__cssModules) && (c = c[t])
    )
      return c;
    if (n !== ve && xe(n, t))
      return r[t] = 4, n[t];
    if (
      // global properties
      p = a.config.globalProperties, xe(p, t)
    )
      return p[t];
    S.NODE_ENV !== "production" && Je && (!de(t) || // #1091 avoid internal isRef/isVNode checks on component instance leading
    // to infinite warning loop
    t.indexOf("__v") !== 0) && (o !== ve && Ol(t[0]) && xe(o, t) ? B(
      `Property ${JSON.stringify(
        t
      )} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`
    ) : e === Je && B(
      `Property ${JSON.stringify(t)} was accessed during render but is not defined on instance.`
    ));
  },
  set({ _: e }, t, n) {
    const { data: s, setupState: o, ctx: i } = e;
    return fr(o, t) ? (o[t] = n, !0) : S.NODE_ENV !== "production" && o.__isScriptSetup && xe(o, t) ? (B(`Cannot mutate <script setup> binding "${t}" from Options API.`), !1) : s !== ve && xe(s, t) ? (s[t] = n, !0) : xe(e.props, t) ? (S.NODE_ENV !== "production" && B(`Attempting to mutate prop "${t}". Props are readonly.`), !1) : t[0] === "$" && t.slice(1) in e ? (S.NODE_ENV !== "production" && B(
      `Attempting to mutate public property "${t}". Properties starting with $ are reserved and readonly.`
    ), !1) : (S.NODE_ENV !== "production" && t in e.appContext.config.globalProperties ? Object.defineProperty(i, t, {
      enumerable: !0,
      configurable: !0,
      value: n
    }) : i[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: s, appContext: o, propsOptions: i }
  }, r) {
    let l;
    return !!n[r] || e !== ve && xe(e, r) || fr(t, r) || (l = i[0]) && xe(l, r) || xe(s, r) || xe(rs, r) || xe(o.config.globalProperties, r);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : xe(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
S.NODE_ENV !== "production" && (co.ownKeys = (e) => (B(
  "Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."
), Reflect.ownKeys(e)));
const zh = /* @__PURE__ */ ge({}, co, {
  get(e, t) {
    if (t !== Symbol.unscopables)
      return co.get(e, t, e);
  },
  has(e, t) {
    const n = t[0] !== "_" && !Gf(t);
    return S.NODE_ENV !== "production" && !n && co.has(e, t) && B(
      `Property ${JSON.stringify(
        t
      )} should not start with _ which is a reserved prefix for Vue internals.`
    ), n;
  }
});
function Wh(e) {
  const t = {};
  return Object.defineProperty(t, "_", {
    configurable: !0,
    enumerable: !1,
    get: () => e
  }), Object.keys(rs).forEach((n) => {
    Object.defineProperty(t, n, {
      configurable: !0,
      enumerable: !1,
      get: () => rs[n](e),
      // intercepted by the proxy so no need for implementation,
      // but needed to prevent set errors
      set: Fe
    });
  }), t;
}
function Kh(e) {
  const {
    ctx: t,
    propsOptions: [n]
  } = e;
  n && Object.keys(n).forEach((s) => {
    Object.defineProperty(t, s, {
      enumerable: !0,
      configurable: !0,
      get: () => e.props[s],
      set: Fe
    });
  });
}
function Gh(e) {
  const { ctx: t, setupState: n } = e;
  Object.keys(he(n)).forEach((s) => {
    if (!n.__isScriptSetup) {
      if (Ol(s[0])) {
        B(
          `setup() return property ${JSON.stringify(
            s
          )} should not start with "$" or "_" which are reserved prefixes for Vue internals.`
        );
        return;
      }
      Object.defineProperty(t, s, {
        enumerable: !0,
        configurable: !0,
        get: () => n[s],
        set: Fe
      });
    }
  });
}
const gs = (e) => B(
  `${e}() is a compiler-hint helper that is only usable inside <script setup> of a single file component. Its arguments should be compiled away and passing it at runtime has no effect.`
);
function Jh() {
  return S.NODE_ENV !== "production" && gs("defineProps"), null;
}
function Yh() {
  return S.NODE_ENV !== "production" && gs("defineEmits"), null;
}
function Xh(e) {
  S.NODE_ENV !== "production" && gs("defineExpose");
}
function Qh(e) {
  S.NODE_ENV !== "production" && gs("defineOptions");
}
function Zh() {
  return S.NODE_ENV !== "production" && gs("defineSlots"), null;
}
function em() {
  S.NODE_ENV !== "production" && gs("defineModel");
}
function tm(e, t) {
  return S.NODE_ENV !== "production" && gs("withDefaults"), null;
}
function nm() {
  return Ru("useSlots").slots;
}
function sm() {
  return Ru("useAttrs").attrs;
}
function Ru(e) {
  const t = mt();
  return S.NODE_ENV !== "production" && !t && B(`${e}() called without active instance.`), t.setupContext || (t.setupContext = wd(t));
}
function Eo(e) {
  return te(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
function om(e, t) {
  const n = Eo(e);
  for (const s in t) {
    if (s.startsWith("__skip")) continue;
    let o = n[s];
    o ? te(o) || ce(o) ? o = n[s] = { type: o, default: t[s] } : o.default = t[s] : o === null ? o = n[s] = { default: t[s] } : S.NODE_ENV !== "production" && B(`props default key "${s}" has no corresponding declaration.`), o && t[`__skip_${s}`] && (o.skipFactory = !0);
  }
  return n;
}
function im(e, t) {
  return !e || !t ? e || t : te(e) && te(t) ? e.concat(t) : ge({}, Eo(e), Eo(t));
}
function rm(e, t) {
  const n = {};
  for (const s in e)
    t.includes(s) || Object.defineProperty(n, s, {
      enumerable: !0,
      get: () => e[s]
    });
  return n;
}
function lm(e) {
  const t = mt();
  S.NODE_ENV !== "production" && !t && B(
    "withAsyncContext called without active current instance. This is likely a bug."
  );
  let n = e();
  return Rr(), Vi(n) && (n = n.catch((s) => {
    throw fs(t), s;
  })), [n, () => fs(t)];
}
function am() {
  const e = /* @__PURE__ */ Object.create(null);
  return (t, n) => {
    e[n] ? B(`${t} property "${n}" is already defined in ${e[n]}.`) : e[n] = t;
  };
}
let Or = !0;
function cm(e) {
  const t = Tl(e), n = e.proxy, s = e.ctx;
  Or = !1, t.beforeCreate && Na(t.beforeCreate, e, "bc");
  const {
    // state
    data: o,
    computed: i,
    methods: r,
    watch: l,
    provide: a,
    inject: u,
    // lifecycle
    created: f,
    beforeMount: c,
    mounted: p,
    beforeUpdate: h,
    updated: g,
    activated: m,
    deactivated: D,
    beforeDestroy: P,
    beforeUnmount: V,
    destroyed: _,
    unmounted: N,
    render: v,
    renderTracked: w,
    renderTriggered: A,
    errorCaptured: k,
    serverPrefetch: y,
    // public API
    expose: T,
    inheritAttrs: O,
    // assets
    components: C,
    directives: L,
    filters: j
  } = t, q = S.NODE_ENV !== "production" ? am() : null;
  if (S.NODE_ENV !== "production") {
    const [R] = e.propsOptions;
    if (R)
      for (const M in R)
        q("Props", M);
  }
  if (u && um(u, s, q), r)
    for (const R in r) {
      const M = r[R];
      ce(M) ? (S.NODE_ENV !== "production" ? Object.defineProperty(s, R, {
        value: M.bind(n),
        configurable: !0,
        enumerable: !0,
        writable: !0
      }) : s[R] = M.bind(n), S.NODE_ENV !== "production" && q("Methods", R)) : S.NODE_ENV !== "production" && B(
        `Method "${R}" has type "${typeof M}" in the component definition. Did you reference the function correctly?`
      );
    }
  if (o) {
    S.NODE_ENV !== "production" && !ce(o) && B(
      "The data option must be a function. Plain object usage is no longer supported."
    );
    const R = o.call(n, n);
    if (S.NODE_ENV !== "production" && Vi(R) && B(
      "data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."
    ), !Ee(R))
      S.NODE_ENV !== "production" && B("data() should return an object.");
    else if (e.data = $s(R), S.NODE_ENV !== "production")
      for (const M in R)
        q("Data", M), Ol(M[0]) || Object.defineProperty(s, M, {
          configurable: !0,
          enumerable: !0,
          get: () => R[M],
          set: Fe
        });
  }
  if (Or = !0, i)
    for (const R in i) {
      const M = i[R], J = ce(M) ? M.bind(n, n) : ce(M.get) ? M.get.bind(n, n) : Fe;
      S.NODE_ENV !== "production" && J === Fe && B(`Computed property "${R}" has no getter.`);
      const ye = !ce(M) && ce(M.set) ? M.set.bind(n) : S.NODE_ENV !== "production" ? () => {
        B(
          `Write operation failed: computed property "${R}" is readonly.`
        );
      } : Fe, ke = G({
        get: J,
        set: ye
      });
      Object.defineProperty(s, R, {
        enumerable: !0,
        configurable: !0,
        get: () => ke.value,
        set: (De) => ke.value = De
      }), S.NODE_ENV !== "production" && q("Computed", R);
    }
  if (l)
    for (const R in l)
      Lu(l[R], s, n, R);
  if (a) {
    const R = ce(a) ? a.call(n) : a;
    Reflect.ownKeys(R).forEach((M) => {
      Bu(M, R[M]);
    });
  }
  f && Na(f, e, "c");
  function I(R, M) {
    te(M) ? M.forEach((J) => R(J.bind(n))) : M && R(M.bind(n));
  }
  if (I(Du, c), I(rt, p), I(xl, h), I(Ki, g), I(Ou, m), I(Tu, D), I(Mu, k), I(Iu, w), I(Vu, A), I(Ks, V), I(tn, N), I(Au, y), te(T))
    if (T.length) {
      const R = e.exposed || (e.exposed = {});
      T.forEach((M) => {
        Object.defineProperty(R, M, {
          get: () => n[M],
          set: (J) => n[M] = J,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  v && e.render === Fe && (e.render = v), O != null && (e.inheritAttrs = O), C && (e.components = C), L && (e.directives = L), y && El(e);
}
function um(e, t, n = Fe) {
  te(e) && (e = Tr(e));
  for (const s in e) {
    const o = e[s];
    let i;
    Ee(o) ? "default" in o ? i = uo(
      o.from || s,
      o.default,
      !0
    ) : i = uo(o.from || s) : i = uo(o), Ue(i) ? Object.defineProperty(t, s, {
      enumerable: !0,
      configurable: !0,
      get: () => i.value,
      set: (r) => i.value = r
    }) : t[s] = i, S.NODE_ENV !== "production" && n("Inject", s);
  }
}
function Na(e, t, n) {
  jt(
    te(e) ? e.map((s) => s.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function Lu(e, t, n, s) {
  let o = s.includes(".") ? sd(n, s) : () => n[s];
  if (de(e)) {
    const i = t[e];
    ce(i) ? Lt(o, i) : S.NODE_ENV !== "production" && B(`Invalid watch handler specified by key "${e}"`, i);
  } else if (ce(e))
    Lt(o, e.bind(n));
  else if (Ee(e))
    if (te(e))
      e.forEach((i) => Lu(i, t, n, s));
    else {
      const i = ce(e.handler) ? e.handler.bind(n) : t[e.handler];
      ce(i) ? Lt(o, i, e) : S.NODE_ENV !== "production" && B(`Invalid watch handler specified by key "${e.handler}"`, i);
    }
  else S.NODE_ENV !== "production" && B(`Invalid watch option: "${s}"`, e);
}
function Tl(e) {
  const t = e.type, { mixins: n, extends: s } = t, {
    mixins: o,
    optionsCache: i,
    config: { optionMergeStrategies: r }
  } = e.appContext, l = i.get(t);
  let a;
  return l ? a = l : !o.length && !n && !s ? a = t : (a = {}, o.length && o.forEach(
    (u) => mi(a, u, r, !0)
  ), mi(a, t, r)), Ee(t) && i.set(t, a), a;
}
function mi(e, t, n, s = !1) {
  const { mixins: o, extends: i } = t;
  i && mi(e, i, n, !0), o && o.forEach(
    (r) => mi(e, r, n, !0)
  );
  for (const r in t)
    if (s && r === "expose")
      S.NODE_ENV !== "production" && B(
        '"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.'
      );
    else {
      const l = dm[r] || n && n[r];
      e[r] = l ? l(e[r], t[r]) : t[r];
    }
  return e;
}
const dm = {
  data: Sa,
  props: ka,
  emits: ka,
  // objects
  methods: oo,
  computed: oo,
  // lifecycle
  beforeCreate: vt,
  created: vt,
  beforeMount: vt,
  mounted: vt,
  beforeUpdate: vt,
  updated: vt,
  beforeDestroy: vt,
  beforeUnmount: vt,
  destroyed: vt,
  unmounted: vt,
  activated: vt,
  deactivated: vt,
  errorCaptured: vt,
  serverPrefetch: vt,
  // assets
  components: oo,
  directives: oo,
  // watch
  watch: pm,
  // provide / inject
  provide: Sa,
  inject: fm
};
function Sa(e, t) {
  return t ? e ? function() {
    return ge(
      ce(e) ? e.call(this, this) : e,
      ce(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function fm(e, t) {
  return oo(Tr(e), Tr(t));
}
function Tr(e) {
  if (te(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function vt(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function oo(e, t) {
  return e ? ge(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function ka(e, t) {
  return e ? te(e) && te(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : ge(
    /* @__PURE__ */ Object.create(null),
    Eo(e),
    Eo(t ?? {})
  ) : t;
}
function pm(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = ge(/* @__PURE__ */ Object.create(null), e);
  for (const s in t)
    n[s] = vt(e[s], t[s]);
  return n;
}
function Fu() {
  return {
    app: null,
    config: {
      isNativeTag: eo,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {}
    },
    mixins: [],
    components: {},
    directives: {},
    provides: /* @__PURE__ */ Object.create(null),
    optionsCache: /* @__PURE__ */ new WeakMap(),
    propsCache: /* @__PURE__ */ new WeakMap(),
    emitsCache: /* @__PURE__ */ new WeakMap()
  };
}
let hm = 0;
function mm(e, t) {
  return function(s, o = null) {
    ce(s) || (s = ge({}, s)), o != null && !Ee(o) && (S.NODE_ENV !== "production" && B("root props passed to app.mount() must be an object."), o = null);
    const i = Fu(), r = /* @__PURE__ */ new WeakSet(), l = [];
    let a = !1;
    const u = i.app = {
      _uid: hm++,
      _component: s,
      _props: o,
      _container: null,
      _context: i,
      _instance: null,
      version: jr,
      get config() {
        return i.config;
      },
      set config(f) {
        S.NODE_ENV !== "production" && B(
          "app.config cannot be replaced. Modify individual options instead."
        );
      },
      use(f, ...c) {
        return r.has(f) ? S.NODE_ENV !== "production" && B("Plugin has already been applied to target app.") : f && ce(f.install) ? (r.add(f), f.install(u, ...c)) : ce(f) ? (r.add(f), f(u, ...c)) : S.NODE_ENV !== "production" && B(
          'A plugin must either be a function or an object with an "install" function.'
        ), u;
      },
      mixin(f) {
        return i.mixins.includes(f) ? S.NODE_ENV !== "production" && B(
          "Mixin has already been applied to target app" + (f.name ? `: ${f.name}` : "")
        ) : i.mixins.push(f), u;
      },
      component(f, c) {
        return S.NODE_ENV !== "production" && Lr(f, i.config), c ? (S.NODE_ENV !== "production" && i.components[f] && B(`Component "${f}" has already been registered in target app.`), i.components[f] = c, u) : i.components[f];
      },
      directive(f, c) {
        return S.NODE_ENV !== "production" && gu(f), c ? (S.NODE_ENV !== "production" && i.directives[f] && B(`Directive "${f}" has already been registered in target app.`), i.directives[f] = c, u) : i.directives[f];
      },
      mount(f, c, p) {
        if (a)
          S.NODE_ENV !== "production" && B(
            "App has already been mounted.\nIf you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. `const createMyApp = () => createApp(App)`"
          );
        else {
          S.NODE_ENV !== "production" && f.__vue_app__ && B(
            "There is already an app instance mounted on the host container.\n If you want to mount another app on the same host container, you need to unmount the previous app by calling `app.unmount()` first."
          );
          const h = u._ceVNode || fe(s, o);
          return h.appContext = i, p === !0 ? p = "svg" : p === !1 && (p = void 0), S.NODE_ENV !== "production" && (i.reload = () => {
            const g = Ht(h);
            g.el = null, e(g, f, p);
          }), c && t ? t(h, f) : e(h, f, p), a = !0, u._container = f, f.__vue_app__ = u, S.NODE_ENV !== "production" && (u._instance = h.component, ah(u, jr)), Io(h.component);
        }
      },
      onUnmount(f) {
        S.NODE_ENV !== "production" && typeof f != "function" && B(
          `Expected function as first argument to app.onUnmount(), but got ${typeof f}`
        ), l.push(f);
      },
      unmount() {
        a ? (jt(
          l,
          u._instance,
          16
        ), e(null, u._container), S.NODE_ENV !== "production" && (u._instance = null, ch(u)), delete u._container.__vue_app__) : S.NODE_ENV !== "production" && B("Cannot unmount an app that is not mounted.");
      },
      provide(f, c) {
        return S.NODE_ENV !== "production" && f in i.provides && (xe(i.provides, f) ? B(
          `App already provides property with key "${String(f)}". It will be overwritten with the new value.`
        ) : B(
          `App already provides property with key "${String(f)}" inherited from its parent element. It will be overwritten with the new value.`
        )), i.provides[f] = c, u;
      },
      runWithContext(f) {
        const c = ls;
        ls = u;
        try {
          return f();
        } finally {
          ls = c;
        }
      }
    };
    return u;
  };
}
let ls = null;
function Bu(e, t) {
  if (!Ze)
    S.NODE_ENV !== "production" && B("provide() can only be used inside setup().");
  else {
    let n = Ze.provides;
    const s = Ze.parent && Ze.parent.provides;
    s === n && (n = Ze.provides = Object.create(s)), n[e] = t;
  }
}
function uo(e, t, n = !1) {
  const s = mt();
  if (s || ls) {
    let o = ls ? ls._context.provides : s ? s.parent == null || s.ce ? s.vnode.appContext && s.vnode.appContext.provides : s.parent.provides : void 0;
    if (o && e in o)
      return o[e];
    if (arguments.length > 1)
      return n && ce(t) ? t.call(s && s.proxy) : t;
    S.NODE_ENV !== "production" && B(`injection "${String(e)}" not found.`);
  } else S.NODE_ENV !== "production" && B("inject() can only be used inside setup() or functional components.");
}
function gm() {
  return !!(mt() || ls);
}
const ju = {}, Hu = () => Object.create(ju), Uu = (e) => Object.getPrototypeOf(e) === ju;
function vm(e, t, n, s = !1) {
  const o = {}, i = Hu();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), qu(e, t, o, i);
  for (const r in e.propsOptions[0])
    r in o || (o[r] = void 0);
  S.NODE_ENV !== "production" && Wu(t || {}, o, e), n ? e.props = s ? o : nu(o) : e.type.props ? e.props = o : e.props = i, e.attrs = i;
}
function ym(e) {
  for (; e; ) {
    if (e.type.__hmrId) return !0;
    e = e.parent;
  }
}
function bm(e, t, n, s) {
  const {
    props: o,
    attrs: i,
    vnode: { patchFlag: r }
  } = e, l = he(o), [a] = e.propsOptions;
  let u = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    !(S.NODE_ENV !== "production" && ym(e)) && (s || r > 0) && !(r & 16)
  ) {
    if (r & 8) {
      const f = e.vnode.dynamicProps;
      for (let c = 0; c < f.length; c++) {
        let p = f[c];
        if (Gi(e.emitsOptions, p))
          continue;
        const h = t[p];
        if (a)
          if (xe(i, p))
            h !== i[p] && (i[p] = h, u = !0);
          else {
            const g = Ie(p);
            o[g] = $r(
              a,
              l,
              g,
              h,
              e,
              !1
            );
          }
        else
          h !== i[p] && (i[p] = h, u = !0);
      }
    }
  } else {
    qu(e, t, o, i) && (u = !0);
    let f;
    for (const c in l)
      (!t || // for camelCase
      !xe(t, c) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((f = ut(c)) === c || !xe(t, f))) && (a ? n && // for camelCase
      (n[c] !== void 0 || // for kebab-case
      n[f] !== void 0) && (o[c] = $r(
        a,
        l,
        c,
        void 0,
        e,
        !0
      )) : delete o[c]);
    if (i !== l)
      for (const c in i)
        (!t || !xe(t, c)) && (delete i[c], u = !0);
  }
  u && an(e.attrs, "set", ""), S.NODE_ENV !== "production" && Wu(t || {}, o, e);
}
function qu(e, t, n, s) {
  const [o, i] = e.propsOptions;
  let r = !1, l;
  if (t)
    for (let a in t) {
      if (Bn(a))
        continue;
      const u = t[a];
      let f;
      o && xe(o, f = Ie(a)) ? !i || !i.includes(f) ? n[f] = u : (l || (l = {}))[f] = u : Gi(e.emitsOptions, a) || (!(a in s) || u !== s[a]) && (s[a] = u, r = !0);
    }
  if (i) {
    const a = he(n), u = l || ve;
    for (let f = 0; f < i.length; f++) {
      const c = i[f];
      n[c] = $r(
        o,
        a,
        c,
        u[c],
        e,
        !xe(u, c)
      );
    }
  }
  return r;
}
function $r(e, t, n, s, o, i) {
  const r = e[n];
  if (r != null) {
    const l = xe(r, "default");
    if (l && s === void 0) {
      const a = r.default;
      if (r.type !== Function && !r.skipFactory && ce(a)) {
        const { propsDefaults: u } = o;
        if (n in u)
          s = u[n];
        else {
          const f = fs(o);
          s = u[n] = a.call(
            null,
            t
          ), f();
        }
      } else
        s = a;
      o.ce && o.ce._setProp(n, s);
    }
    r[
      0
      /* shouldCast */
    ] && (i && !l ? s = !1 : r[
      1
      /* shouldCastTrue */
    ] && (s === "" || s === ut(n)) && (s = !0));
  }
  return s;
}
const _m = /* @__PURE__ */ new WeakMap();
function zu(e, t, n = !1) {
  const s = n ? _m : t.propsCache, o = s.get(e);
  if (o)
    return o;
  const i = e.props, r = {}, l = [];
  let a = !1;
  if (!ce(e)) {
    const f = (c) => {
      a = !0;
      const [p, h] = zu(c, t, !0);
      ge(r, p), h && l.push(...h);
    };
    !n && t.mixins.length && t.mixins.forEach(f), e.extends && f(e.extends), e.mixins && e.mixins.forEach(f);
  }
  if (!i && !a)
    return Ee(e) && s.set(e, xs), xs;
  if (te(i))
    for (let f = 0; f < i.length; f++) {
      S.NODE_ENV !== "production" && !de(i[f]) && B("props must be strings when using array syntax.", i[f]);
      const c = Ie(i[f]);
      Ca(c) && (r[c] = ve);
    }
  else if (i) {
    S.NODE_ENV !== "production" && !Ee(i) && B("invalid props options", i);
    for (const f in i) {
      const c = Ie(f);
      if (Ca(c)) {
        const p = i[f], h = r[c] = te(p) || ce(p) ? { type: p } : ge({}, p), g = h.type;
        let m = !1, D = !0;
        if (te(g))
          for (let P = 0; P < g.length; ++P) {
            const V = g[P], _ = ce(V) && V.name;
            if (_ === "Boolean") {
              m = !0;
              break;
            } else _ === "String" && (D = !1);
          }
        else
          m = ce(g) && g.name === "Boolean";
        h[
          0
          /* shouldCast */
        ] = m, h[
          1
          /* shouldCastTrue */
        ] = D, (m || xe(h, "default")) && l.push(c);
      }
    }
  }
  const u = [r, l];
  return Ee(e) && s.set(e, u), u;
}
function Ca(e) {
  return e[0] !== "$" && !Bn(e) ? !0 : (S.NODE_ENV !== "production" && B(`Invalid prop name: "${e}" is a reserved property.`), !1);
}
function wm(e) {
  return e === null ? "null" : typeof e == "function" ? e.name || "" : typeof e == "object" && e.constructor && e.constructor.name || "";
}
function Wu(e, t, n) {
  const s = he(t), o = n.propsOptions[0], i = Object.keys(e).map((r) => Ie(r));
  for (const r in o) {
    let l = o[r];
    l != null && Em(
      r,
      s[r],
      l,
      S.NODE_ENV !== "production" ? Kt(s) : s,
      !i.includes(r)
    );
  }
}
function Em(e, t, n, s, o) {
  const { type: i, required: r, validator: l, skipCheck: a } = n;
  if (r && o) {
    B('Missing required prop: "' + e + '"');
    return;
  }
  if (!(t == null && !r)) {
    if (i != null && i !== !0 && !a) {
      let u = !1;
      const f = te(i) ? i : [i], c = [];
      for (let p = 0; p < f.length && !u; p++) {
        const { valid: h, expectedType: g } = Nm(t, f[p]);
        c.push(g || ""), u = h;
      }
      if (!u) {
        B(Sm(e, t, c));
        return;
      }
    }
    l && !l(t, s) && B('Invalid prop: custom validator check failed for prop "' + e + '".');
  }
}
const xm = /* @__PURE__ */ et(
  "String,Number,Boolean,Function,Symbol,BigInt"
);
function Nm(e, t) {
  let n;
  const s = wm(t);
  if (s === "null")
    n = e === null;
  else if (xm(s)) {
    const o = typeof e;
    n = o === s.toLowerCase(), !n && o === "object" && (n = e instanceof t);
  } else s === "Object" ? n = Ee(e) : s === "Array" ? n = te(e) : n = e instanceof t;
  return {
    valid: n,
    expectedType: s
  };
}
function Sm(e, t, n) {
  if (n.length === 0)
    return `Prop type [] for prop "${e}" won't match anything. Did you mean to use type Array instead?`;
  let s = `Invalid prop: type check failed for prop "${e}". Expected ${n.map(un).join(" | ")}`;
  const o = n[0], i = rl(t), r = Oa(t, o), l = Oa(t, i);
  return n.length === 1 && Ta(o) && !km(o, i) && (s += ` with value ${r}`), s += `, got ${i} `, Ta(i) && (s += `with value ${l}.`), s;
}
function Oa(e, t) {
  return t === "String" ? `"${e}"` : t === "Number" ? `${Number(e)}` : `${e}`;
}
function Ta(e) {
  return ["string", "number", "boolean"].some((n) => e.toLowerCase() === n);
}
function km(...e) {
  return e.some((t) => t.toLowerCase() === "boolean");
}
const $l = (e) => e === "_" || e === "__" || e === "_ctx" || e === "$stable", Dl = (e) => te(e) ? e.map(_t) : [_t(e)], Cm = (e, t, n) => {
  if (t._n)
    return t;
  const s = Re((...o) => (S.NODE_ENV !== "production" && Ze && !(n === null && Je) && !(n && n.root !== Ze.root) && B(
    `Slot "${e}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`
  ), Dl(t(...o))), n);
  return s._c = !1, s;
}, Ku = (e, t, n) => {
  const s = e._ctx;
  for (const o in e) {
    if ($l(o)) continue;
    const i = e[o];
    if (ce(i))
      t[o] = Cm(o, i, s);
    else if (i != null) {
      S.NODE_ENV !== "production" && B(
        `Non-function value encountered for slot "${o}". Prefer function slots for better performance.`
      );
      const r = Dl(i);
      t[o] = () => r;
    }
  }
}, Gu = (e, t) => {
  S.NODE_ENV !== "production" && !Ws(e.vnode) && B(
    "Non-function value encountered for default slot. Prefer function slots for better performance."
  );
  const n = Dl(t);
  e.slots.default = () => n;
}, Dr = (e, t, n) => {
  for (const s in t)
    (n || !$l(s)) && (e[s] = t[s]);
}, Om = (e, t, n) => {
  const s = e.slots = Hu();
  if (e.vnode.shapeFlag & 32) {
    const o = t.__;
    o && cs(s, "__", o, !0);
    const i = t._;
    i ? (Dr(s, t, n), n && cs(s, "_", i, !0)) : Ku(t, s);
  } else t && Gu(e, t);
}, Tm = (e, t, n) => {
  const { vnode: s, slots: o } = e;
  let i = !0, r = ve;
  if (s.shapeFlag & 32) {
    const l = t._;
    l ? S.NODE_ENV !== "production" && Gt ? (Dr(o, t, n), an(e, "set", "$slots")) : n && l === 1 ? i = !1 : Dr(o, t, n) : (i = !t.$stable, Ku(t, o)), r = t;
  } else t && (Gu(e, t), r = { default: 1 });
  if (i)
    for (const l in o)
      !$l(l) && r[l] == null && delete o[l];
};
let Xs, Ln;
function pn(e, t) {
  e.appContext.config.performance && gi() && Ln.mark(`vue-${t}-${e.uid}`), S.NODE_ENV !== "production" && fh(e, t, gi() ? Ln.now() : Date.now());
}
function hn(e, t) {
  if (e.appContext.config.performance && gi()) {
    const n = `vue-${t}-${e.uid}`, s = n + ":end";
    Ln.mark(s), Ln.measure(
      `<${Xi(e, e.type)}> ${t}`,
      n,
      s
    ), Ln.clearMarks(n), Ln.clearMarks(s);
  }
  S.NODE_ENV !== "production" && ph(e, t, gi() ? Ln.now() : Date.now());
}
function gi() {
  return Xs !== void 0 || (typeof window < "u" && window.performance ? (Xs = !0, Ln = window.performance) : Xs = !1), Xs;
}
function $m() {
  const e = [];
  if (S.NODE_ENV !== "production" && e.length) {
    const t = e.length > 1;
    console.warn(
      `Feature flag${t ? "s" : ""} ${e.join(", ")} ${t ? "are" : "is"} not explicitly defined. You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.

For more details, see https://link.vuejs.org/feature-flags.`
    );
  }
}
const Ye = ad;
function Ju(e) {
  return Xu(e);
}
function Yu(e) {
  return Xu(e, Nh);
}
function Xu(e, t) {
  $m();
  const n = $o();
  n.__VUE__ = !0, S.NODE_ENV !== "production" && vl(n.__VUE_DEVTOOLS_GLOBAL_HOOK__, n);
  const {
    insert: s,
    remove: o,
    patchProp: i,
    createElement: r,
    createText: l,
    createComment: a,
    setText: u,
    setElementText: f,
    parentNode: c,
    nextSibling: p,
    setScopeId: h = Fe,
    insertStaticContent: g
  } = e, m = (b, $, F, W = null, U = null, z = null, se = void 0, Z = null, Y = S.NODE_ENV !== "production" && Gt ? !1 : !!$.dynamicChildren) => {
    if (b === $)
      return;
    b && !Wt(b, $) && (W = qe(b), $t(b, U, z, !0), b = null), $.patchFlag === -2 && (Y = !1, $.dynamicChildren = null);
    const { type: K, ref: ue, shapeFlag: oe } = $;
    switch (K) {
      case cn:
        D(b, $, F, W);
        break;
      case Be:
        P(b, $, F, W);
        break;
      case Hn:
        b == null ? V($, F, W, se) : S.NODE_ENV !== "production" && _(b, $, F, se);
        break;
      case ae:
        L(
          b,
          $,
          F,
          W,
          U,
          z,
          se,
          Z,
          Y
        );
        break;
      default:
        oe & 1 ? w(
          b,
          $,
          F,
          W,
          U,
          z,
          se,
          Z,
          Y
        ) : oe & 6 ? j(
          b,
          $,
          F,
          W,
          U,
          z,
          se,
          Z,
          Y
        ) : oe & 64 || oe & 128 ? K.process(
          b,
          $,
          F,
          W,
          U,
          z,
          se,
          Z,
          Y,
          On
        ) : S.NODE_ENV !== "production" && B("Invalid VNode type:", K, `(${typeof K})`);
    }
    ue != null && U ? Cs(ue, b && b.ref, z, $ || b, !$) : ue == null && b && b.ref != null && Cs(b.ref, null, z, b, !0);
  }, D = (b, $, F, W) => {
    if (b == null)
      s(
        $.el = l($.children),
        F,
        W
      );
    else {
      const U = $.el = b.el;
      $.children !== b.children && u(U, $.children);
    }
  }, P = (b, $, F, W) => {
    b == null ? s(
      $.el = a($.children || ""),
      F,
      W
    ) : $.el = b.el;
  }, V = (b, $, F, W) => {
    [b.el, b.anchor] = g(
      b.children,
      $,
      F,
      W,
      b.el,
      b.anchor
    );
  }, _ = (b, $, F, W) => {
    if ($.children !== b.children) {
      const U = p(b.anchor);
      v(b), [$.el, $.anchor] = g(
        $.children,
        F,
        U,
        W
      );
    } else
      $.el = b.el, $.anchor = b.anchor;
  }, N = ({ el: b, anchor: $ }, F, W) => {
    let U;
    for (; b && b !== $; )
      U = p(b), s(b, F, W), b = U;
    s($, F, W);
  }, v = ({ el: b, anchor: $ }) => {
    let F;
    for (; b && b !== $; )
      F = p(b), o(b), b = F;
    o($);
  }, w = (b, $, F, W, U, z, se, Z, Y) => {
    $.type === "svg" ? se = "svg" : $.type === "math" && (se = "mathml"), b == null ? A(
      $,
      F,
      W,
      U,
      z,
      se,
      Z,
      Y
    ) : T(
      b,
      $,
      U,
      z,
      se,
      Z,
      Y
    );
  }, A = (b, $, F, W, U, z, se, Z) => {
    let Y, K;
    const { props: ue, shapeFlag: oe, transition: le, dirs: pe } = b;
    if (Y = b.el = r(
      b.type,
      z,
      ue && ue.is,
      ue
    ), oe & 8 ? f(Y, b.children) : oe & 16 && y(
      b.children,
      Y,
      null,
      W,
      U,
      pr(b, z),
      se,
      Z
    ), pe && rn(b, null, W, "created"), k(Y, b, b.scopeId, se, W), ue) {
      for (const Me in ue)
        Me !== "value" && !Bn(Me) && i(Y, Me, null, ue[Me], z, W);
      "value" in ue && i(Y, "value", null, ue.value, z), (K = ue.onVnodeBeforeMount) && St(K, W, b);
    }
    S.NODE_ENV !== "production" && (cs(Y, "__vnode", b, !0), cs(Y, "__vueParentComponent", W, !0)), pe && rn(b, null, W, "beforeMount");
    const Se = Qu(U, le);
    Se && le.beforeEnter(Y), s(Y, $, F), ((K = ue && ue.onVnodeMounted) || Se || pe) && Ye(() => {
      K && St(K, W, b), Se && le.enter(Y), pe && rn(b, null, W, "mounted");
    }, U);
  }, k = (b, $, F, W, U) => {
    if (F && h(b, F), W)
      for (let z = 0; z < W.length; z++)
        h(b, W[z]);
    if (U) {
      let z = U.subTree;
      if (S.NODE_ENV !== "production" && z.patchFlag > 0 && z.patchFlag & 2048 && (z = Ji(z.children) || z), $ === z || bi(z.type) && (z.ssContent === $ || z.ssFallback === $)) {
        const se = U.vnode;
        k(
          b,
          se,
          se.scopeId,
          se.slotScopeIds,
          U.parent
        );
      }
    }
  }, y = (b, $, F, W, U, z, se, Z, Y = 0) => {
    for (let K = Y; K < b.length; K++) {
      const ue = b[K] = Z ? Mn(b[K]) : _t(b[K]);
      m(
        null,
        ue,
        $,
        F,
        W,
        U,
        z,
        se,
        Z
      );
    }
  }, T = (b, $, F, W, U, z, se) => {
    const Z = $.el = b.el;
    S.NODE_ENV !== "production" && (Z.__vnode = $);
    let { patchFlag: Y, dynamicChildren: K, dirs: ue } = $;
    Y |= b.patchFlag & 16;
    const oe = b.props || ve, le = $.props || ve;
    let pe;
    if (F && Jn(F, !1), (pe = le.onVnodeBeforeUpdate) && St(pe, F, $, b), ue && rn($, b, F, "beforeUpdate"), F && Jn(F, !0), S.NODE_ENV !== "production" && Gt && (Y = 0, se = !1, K = null), (oe.innerHTML && le.innerHTML == null || oe.textContent && le.textContent == null) && f(Z, ""), K ? (O(
      b.dynamicChildren,
      K,
      Z,
      F,
      W,
      pr($, U),
      z
    ), S.NODE_ENV !== "production" && fo(b, $)) : se || J(
      b,
      $,
      Z,
      null,
      F,
      W,
      pr($, U),
      z,
      !1
    ), Y > 0) {
      if (Y & 16)
        C(Z, oe, le, F, U);
      else if (Y & 2 && oe.class !== le.class && i(Z, "class", null, le.class, U), Y & 4 && i(Z, "style", oe.style, le.style, U), Y & 8) {
        const Se = $.dynamicProps;
        for (let Me = 0; Me < Se.length; Me++) {
          const Te = Se[Me], wt = oe[Te], lt = le[Te];
          (lt !== wt || Te === "value") && i(Z, Te, wt, lt, U, F);
        }
      }
      Y & 1 && b.children !== $.children && f(Z, $.children);
    } else !se && K == null && C(Z, oe, le, F, U);
    ((pe = le.onVnodeUpdated) || ue) && Ye(() => {
      pe && St(pe, F, $, b), ue && rn($, b, F, "updated");
    }, W);
  }, O = (b, $, F, W, U, z, se) => {
    for (let Z = 0; Z < $.length; Z++) {
      const Y = b[Z], K = $[Z], ue = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        Y.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (Y.type === ae || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Wt(Y, K) || // - In the case of a component, it could contain anything.
        Y.shapeFlag & 198) ? c(Y.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          F
        )
      );
      m(
        Y,
        K,
        ue,
        null,
        W,
        U,
        z,
        se,
        !0
      );
    }
  }, C = (b, $, F, W, U) => {
    if ($ !== F) {
      if ($ !== ve)
        for (const z in $)
          !Bn(z) && !(z in F) && i(
            b,
            z,
            $[z],
            null,
            U,
            W
          );
      for (const z in F) {
        if (Bn(z)) continue;
        const se = F[z], Z = $[z];
        se !== Z && z !== "value" && i(b, z, Z, se, U, W);
      }
      "value" in F && i(b, "value", $.value, F.value, U);
    }
  }, L = (b, $, F, W, U, z, se, Z, Y) => {
    const K = $.el = b ? b.el : l(""), ue = $.anchor = b ? b.anchor : l("");
    let { patchFlag: oe, dynamicChildren: le, slotScopeIds: pe } = $;
    S.NODE_ENV !== "production" && // #5523 dev root fragment may inherit directives
    (Gt || oe & 2048) && (oe = 0, Y = !1, le = null), pe && (Z = Z ? Z.concat(pe) : pe), b == null ? (s(K, F, W), s(ue, F, W), y(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      $.children || [],
      F,
      ue,
      U,
      z,
      se,
      Z,
      Y
    )) : oe > 0 && oe & 64 && le && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    b.dynamicChildren ? (O(
      b.dynamicChildren,
      le,
      F,
      U,
      z,
      se,
      Z
    ), S.NODE_ENV !== "production" ? fo(b, $) : (
      // #2080 if the stable fragment has a key, it's a <template v-for> that may
      //  get moved around. Make sure all root level vnodes inherit el.
      // #2134 or if it's a component root, it may also get moved around
      // as the component is being moved.
      ($.key != null || U && $ === U.subTree) && fo(
        b,
        $,
        !0
        /* shallow */
      )
    )) : J(
      b,
      $,
      F,
      ue,
      U,
      z,
      se,
      Z,
      Y
    );
  }, j = (b, $, F, W, U, z, se, Z, Y) => {
    $.slotScopeIds = Z, b == null ? $.shapeFlag & 512 ? U.ctx.activate(
      $,
      F,
      W,
      se,
      Y
    ) : q(
      $,
      F,
      W,
      U,
      z,
      se,
      Y
    ) : I(b, $, Y);
  }, q = (b, $, F, W, U, z, se) => {
    const Z = b.component = gd(
      b,
      W,
      U
    );
    if (S.NODE_ENV !== "production" && Z.type.__hmrId && oh(Z), S.NODE_ENV !== "production" && (Ns(b), pn(Z, "mount")), Ws(b) && (Z.ctx.renderer = On), S.NODE_ENV !== "production" && pn(Z, "init"), yd(Z, !1, se), S.NODE_ENV !== "production" && hn(Z, "init"), S.NODE_ENV !== "production" && Gt && (b.el = null), Z.asyncDep) {
      if (U && U.registerDep(Z, R, se), !b.el) {
        const Y = Z.subTree = fe(Be);
        P(null, Y, $, F), b.placeholder = Y.el;
      }
    } else
      R(
        Z,
        b,
        $,
        F,
        U,
        z,
        se
      );
    S.NODE_ENV !== "production" && (Ss(), hn(Z, "mount"));
  }, I = (b, $, F) => {
    const W = $.component = b.component;
    if (Fm(b, $, F))
      if (W.asyncDep && !W.asyncResolved) {
        S.NODE_ENV !== "production" && Ns($), M(W, $, F), S.NODE_ENV !== "production" && Ss();
        return;
      } else
        W.next = $, W.update();
    else
      $.el = b.el, W.vnode = $;
  }, R = (b, $, F, W, U, z, se) => {
    const Z = () => {
      if (b.isMounted) {
        let { next: oe, bu: le, u: pe, parent: Se, vnode: Me } = b;
        {
          const Dt = Zu(b);
          if (Dt) {
            oe && (oe.el = Me.el, M(b, oe, se)), Dt.asyncDep.then(() => {
              b.isUnmounted || Z();
            });
            return;
          }
        }
        let Te = oe, wt;
        S.NODE_ENV !== "production" && Ns(oe || b.vnode), Jn(b, !1), oe ? (oe.el = Me.el, M(b, oe, se)) : oe = Me, le && Rn(le), (wt = oe.props && oe.props.onVnodeBeforeUpdate) && St(wt, Se, oe, Me), Jn(b, !0), S.NODE_ENV !== "production" && pn(b, "render");
        const lt = Qo(b);
        S.NODE_ENV !== "production" && hn(b, "render");
        const qt = b.subTree;
        b.subTree = lt, S.NODE_ENV !== "production" && pn(b, "patch"), m(
          qt,
          lt,
          // parent may have changed if it's in a teleport
          c(qt.el),
          // anchor may have changed if it's in a fragment
          qe(qt),
          b,
          U,
          z
        ), S.NODE_ENV !== "production" && hn(b, "patch"), oe.el = lt.el, Te === null && Yi(b, lt.el), pe && Ye(pe, U), (wt = oe.props && oe.props.onVnodeUpdated) && Ye(
          () => St(wt, Se, oe, Me),
          U
        ), S.NODE_ENV !== "production" && hu(b), S.NODE_ENV !== "production" && Ss();
      } else {
        let oe;
        const { el: le, props: pe } = $, { bm: Se, m: Me, parent: Te, root: wt, type: lt } = b, qt = jn($);
        if (Jn(b, !1), Se && Rn(Se), !qt && (oe = pe && pe.onVnodeBeforeMount) && St(oe, Te, $), Jn(b, !0), le && ys) {
          const Dt = () => {
            S.NODE_ENV !== "production" && pn(b, "render"), b.subTree = Qo(b), S.NODE_ENV !== "production" && hn(b, "render"), S.NODE_ENV !== "production" && pn(b, "hydrate"), ys(
              le,
              b.subTree,
              b,
              U,
              null
            ), S.NODE_ENV !== "production" && hn(b, "hydrate");
          };
          qt && lt.__asyncHydrate ? lt.__asyncHydrate(
            le,
            b,
            Dt
          ) : Dt();
        } else {
          wt.ce && // @ts-expect-error _def is private
          wt.ce._def.shadowRoot !== !1 && wt.ce._injectChildStyle(lt), S.NODE_ENV !== "production" && pn(b, "render");
          const Dt = b.subTree = Qo(b);
          S.NODE_ENV !== "production" && hn(b, "render"), S.NODE_ENV !== "production" && pn(b, "patch"), m(
            null,
            Dt,
            F,
            W,
            b,
            U,
            z
          ), S.NODE_ENV !== "production" && hn(b, "patch"), $.el = Dt.el;
        }
        if (Me && Ye(Me, U), !qt && (oe = pe && pe.onVnodeMounted)) {
          const Dt = $;
          Ye(
            () => St(oe, Te, Dt),
            U
          );
        }
        ($.shapeFlag & 256 || Te && jn(Te.vnode) && Te.vnode.shapeFlag & 256) && b.a && Ye(b.a, U), b.isMounted = !0, S.NODE_ENV !== "production" && Sr(b), $ = F = W = null;
      }
    };
    b.scope.on();
    const Y = b.effect = new vo(Z);
    b.scope.off();
    const K = b.update = Y.run.bind(Y), ue = b.job = Y.runIfDirty.bind(Y);
    ue.i = b, ue.id = b.uid, Y.scheduler = () => Ui(ue), Jn(b, !0), S.NODE_ENV !== "production" && (Y.onTrack = b.rtc ? (oe) => Rn(b.rtc, oe) : void 0, Y.onTrigger = b.rtg ? (oe) => Rn(b.rtg, oe) : void 0), K();
  }, M = (b, $, F) => {
    $.component = b;
    const W = b.vnode.props;
    b.vnode = $, b.next = null, bm(b, $.props, W, F), Tm(b, $.children, F), Qt(), pa(b), Zt();
  }, J = (b, $, F, W, U, z, se, Z, Y = !1) => {
    const K = b && b.children, ue = b ? b.shapeFlag : 0, oe = $.children, { patchFlag: le, shapeFlag: pe } = $;
    if (le > 0) {
      if (le & 128) {
        ke(
          K,
          oe,
          F,
          W,
          U,
          z,
          se,
          Z,
          Y
        );
        return;
      } else if (le & 256) {
        ye(
          K,
          oe,
          F,
          W,
          U,
          z,
          se,
          Z,
          Y
        );
        return;
      }
    }
    pe & 8 ? (ue & 16 && re(K, U, z), oe !== K && f(F, oe)) : ue & 16 ? pe & 16 ? ke(
      K,
      oe,
      F,
      W,
      U,
      z,
      se,
      Z,
      Y
    ) : re(K, U, z, !0) : (ue & 8 && f(F, ""), pe & 16 && y(
      oe,
      F,
      W,
      U,
      z,
      se,
      Z,
      Y
    ));
  }, ye = (b, $, F, W, U, z, se, Z, Y) => {
    b = b || xs, $ = $ || xs;
    const K = b.length, ue = $.length, oe = Math.min(K, ue);
    let le;
    for (le = 0; le < oe; le++) {
      const pe = $[le] = Y ? Mn($[le]) : _t($[le]);
      m(
        b[le],
        pe,
        F,
        null,
        U,
        z,
        se,
        Z,
        Y
      );
    }
    K > ue ? re(
      b,
      U,
      z,
      !0,
      !1,
      oe
    ) : y(
      $,
      F,
      W,
      U,
      z,
      se,
      Z,
      Y,
      oe
    );
  }, ke = (b, $, F, W, U, z, se, Z, Y) => {
    let K = 0;
    const ue = $.length;
    let oe = b.length - 1, le = ue - 1;
    for (; K <= oe && K <= le; ) {
      const pe = b[K], Se = $[K] = Y ? Mn($[K]) : _t($[K]);
      if (Wt(pe, Se))
        m(
          pe,
          Se,
          F,
          null,
          U,
          z,
          se,
          Z,
          Y
        );
      else
        break;
      K++;
    }
    for (; K <= oe && K <= le; ) {
      const pe = b[oe], Se = $[le] = Y ? Mn($[le]) : _t($[le]);
      if (Wt(pe, Se))
        m(
          pe,
          Se,
          F,
          null,
          U,
          z,
          se,
          Z,
          Y
        );
      else
        break;
      oe--, le--;
    }
    if (K > oe) {
      if (K <= le) {
        const pe = le + 1, Se = pe < ue ? $[pe].el : W;
        for (; K <= le; )
          m(
            null,
            $[K] = Y ? Mn($[K]) : _t($[K]),
            F,
            Se,
            U,
            z,
            se,
            Z,
            Y
          ), K++;
      }
    } else if (K > le)
      for (; K <= oe; )
        $t(b[K], U, z, !0), K++;
    else {
      const pe = K, Se = K, Me = /* @__PURE__ */ new Map();
      for (K = Se; K <= le; K++) {
        const gt = $[K] = Y ? Mn($[K]) : _t($[K]);
        gt.key != null && (S.NODE_ENV !== "production" && Me.has(gt.key) && B(
          "Duplicate keys found during update:",
          JSON.stringify(gt.key),
          "Make sure keys are unique."
        ), Me.set(gt.key, K));
      }
      let Te, wt = 0;
      const lt = le - Se + 1;
      let qt = !1, Dt = 0;
      const Js = new Array(lt);
      for (K = 0; K < lt; K++) Js[K] = 0;
      for (K = pe; K <= oe; K++) {
        const gt = b[K];
        if (wt >= lt) {
          $t(gt, U, z, !0);
          continue;
        }
        let nn;
        if (gt.key != null)
          nn = Me.get(gt.key);
        else
          for (Te = Se; Te <= le; Te++)
            if (Js[Te - Se] === 0 && Wt(gt, $[Te])) {
              nn = Te;
              break;
            }
        nn === void 0 ? $t(gt, U, z, !0) : (Js[nn - Se] = K + 1, nn >= Dt ? Dt = nn : qt = !0, m(
          gt,
          $[nn],
          F,
          null,
          U,
          z,
          se,
          Z,
          Y
        ), wt++);
      }
      const sa = qt ? Dm(Js) : xs;
      for (Te = sa.length - 1, K = lt - 1; K >= 0; K--) {
        const gt = Se + K, nn = $[gt], oa = $[gt + 1], ia = gt + 1 < ue ? (
          // #13559, fallback to el placeholder for unresolved async component
          oa.el || oa.placeholder
        ) : W;
        Js[K] === 0 ? m(
          null,
          nn,
          F,
          ia,
          U,
          z,
          se,
          Z,
          Y
        ) : qt && (Te < 0 || K !== sa[Te] ? De(nn, F, ia, 2) : Te--);
      }
    }
  }, De = (b, $, F, W, U = null) => {
    const { el: z, type: se, transition: Z, children: Y, shapeFlag: K } = b;
    if (K & 6) {
      De(b.component.subTree, $, F, W);
      return;
    }
    if (K & 128) {
      b.suspense.move($, F, W);
      return;
    }
    if (K & 64) {
      se.move(b, $, F, On);
      return;
    }
    if (se === ae) {
      s(z, $, F);
      for (let oe = 0; oe < Y.length; oe++)
        De(Y[oe], $, F, W);
      s(b.anchor, $, F);
      return;
    }
    if (se === Hn) {
      N(b, $, F);
      return;
    }
    if (W !== 2 && K & 1 && Z)
      if (W === 0)
        Z.beforeEnter(z), s(z, $, F), Ye(() => Z.enter(z), U);
      else {
        const { leave: oe, delayLeave: le, afterLeave: pe } = Z, Se = () => {
          b.ctx.isUnmounted ? o(z) : s(z, $, F);
        }, Me = () => {
          oe(z, () => {
            Se(), pe && pe();
          });
        };
        le ? le(z, Se, Me) : Me();
      }
    else
      s(z, $, F);
  }, $t = (b, $, F, W = !1, U = !1) => {
    const {
      type: z,
      props: se,
      ref: Z,
      children: Y,
      dynamicChildren: K,
      shapeFlag: ue,
      patchFlag: oe,
      dirs: le,
      cacheIndex: pe
    } = b;
    if (oe === -2 && (U = !1), Z != null && (Qt(), Cs(Z, null, F, b, !0), Zt()), pe != null && ($.renderCache[pe] = void 0), ue & 256) {
      $.ctx.deactivate(b);
      return;
    }
    const Se = ue & 1 && le, Me = !jn(b);
    let Te;
    if (Me && (Te = se && se.onVnodeBeforeUnmount) && St(Te, $, b), ue & 6)
      ee(b.component, F, W);
    else {
      if (ue & 128) {
        b.suspense.unmount(F, W);
        return;
      }
      Se && rn(b, null, $, "beforeUnmount"), ue & 64 ? b.type.remove(
        b,
        $,
        F,
        On,
        W
      ) : K && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !K.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (z !== ae || oe > 0 && oe & 64) ? re(
        K,
        $,
        F,
        !1,
        !0
      ) : (z === ae && oe & 384 || !U && ue & 16) && re(Y, $, F), W && Cn(b);
    }
    (Me && (Te = se && se.onVnodeUnmounted) || Se) && Ye(() => {
      Te && St(Te, $, b), Se && rn(b, null, $, "unmounted");
    }, F);
  }, Cn = (b) => {
    const { type: $, el: F, anchor: W, transition: U } = b;
    if ($ === ae) {
      S.NODE_ENV !== "production" && b.patchFlag > 0 && b.patchFlag & 2048 && U && !U.persisted ? b.children.forEach((se) => {
        se.type === Be ? o(se.el) : Cn(se);
      }) : ie(F, W);
      return;
    }
    if ($ === Hn) {
      v(b);
      return;
    }
    const z = () => {
      o(F), U && !U.persisted && U.afterLeave && U.afterLeave();
    };
    if (b.shapeFlag & 1 && U && !U.persisted) {
      const { leave: se, delayLeave: Z } = U, Y = () => se(F, z);
      Z ? Z(b.el, z, Y) : Y();
    } else
      z();
  }, ie = (b, $) => {
    let F;
    for (; b !== $; )
      F = p(b), o(b), b = F;
    o($);
  }, ee = (b, $, F) => {
    S.NODE_ENV !== "production" && b.type.__hmrId && ih(b);
    const {
      bum: W,
      scope: U,
      job: z,
      subTree: se,
      um: Z,
      m: Y,
      a: K,
      parent: ue,
      slots: { __: oe }
    } = b;
    vi(Y), vi(K), W && Rn(W), ue && te(oe) && oe.forEach((le) => {
      ue.renderCache[le] = void 0;
    }), U.stop(), z && (z.flags |= 8, $t(se, b, $, F)), Z && Ye(Z, $), Ye(() => {
      b.isUnmounted = !0;
    }, $), $ && $.pendingBranch && !$.isUnmounted && b.asyncDep && !b.asyncResolved && b.suspenseId === $.pendingId && ($.deps--, $.deps === 0 && $.resolve()), S.NODE_ENV !== "production" && dh(b);
  }, re = (b, $, F, W = !1, U = !1, z = 0) => {
    for (let se = z; se < b.length; se++)
      $t(b[se], $, F, W, U);
  }, qe = (b) => {
    if (b.shapeFlag & 6)
      return qe(b.component.subTree);
    if (b.shapeFlag & 128)
      return b.suspense.next();
    const $ = p(b.anchor || b.el), F = $ && $[vu];
    return F ? p(F) : $;
  };
  let tt = !1;
  const Kn = (b, $, F) => {
    b == null ? $._vnode && $t($._vnode, null, null, !0) : m(
      $._vnode || null,
      b,
      $,
      null,
      null,
      null,
      F
    ), $._vnode = b, tt || (tt = !0, pa(), fi(), tt = !1);
  }, On = {
    p: m,
    um: $t,
    m: De,
    r: Cn,
    mt: q,
    mc: y,
    pc: J,
    pbc: O,
    n: qe,
    o: e
  };
  let vs, ys;
  return t && ([vs, ys] = t(
    On
  )), {
    render: Kn,
    hydrate: vs,
    createApp: mm(Kn, vs)
  };
}
function pr({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function Jn({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function Qu(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function fo(e, t, n = !1) {
  const s = e.children, o = t.children;
  if (te(s) && te(o))
    for (let i = 0; i < s.length; i++) {
      const r = s[i];
      let l = o[i];
      l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = o[i] = Mn(o[i]), l.el = r.el), !n && l.patchFlag !== -2 && fo(r, l)), l.type === cn && (l.el = r.el), l.type === Be && !l.el && (l.el = r.el), S.NODE_ENV !== "production" && l.el && (l.el.__vnode = l);
    }
}
function Dm(e) {
  const t = e.slice(), n = [0];
  let s, o, i, r, l;
  const a = e.length;
  for (s = 0; s < a; s++) {
    const u = e[s];
    if (u !== 0) {
      if (o = n[n.length - 1], e[o] < u) {
        t[s] = o, n.push(s);
        continue;
      }
      for (i = 0, r = n.length - 1; i < r; )
        l = i + r >> 1, e[n[l]] < u ? i = l + 1 : r = l;
      u < e[n[i]] && (i > 0 && (t[s] = n[i - 1]), n[i] = s);
    }
  }
  for (i = n.length, r = n[i - 1]; i-- > 0; )
    n[i] = r, r = t[r];
  return n;
}
function Zu(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : Zu(t);
}
function vi(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
const ed = Symbol.for("v-scx"), td = () => {
  {
    const e = uo(ed);
    return e || S.NODE_ENV !== "production" && B(
      "Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."
    ), e;
  }
};
function Am(e, t) {
  return Vo(e, null, t);
}
function Vm(e, t) {
  return Vo(
    e,
    null,
    S.NODE_ENV !== "production" ? ge({}, t, { flush: "post" }) : { flush: "post" }
  );
}
function nd(e, t) {
  return Vo(
    e,
    null,
    S.NODE_ENV !== "production" ? ge({}, t, { flush: "sync" }) : { flush: "sync" }
  );
}
function Lt(e, t, n) {
  return S.NODE_ENV !== "production" && !ce(t) && B(
    "`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."
  ), Vo(e, t, n);
}
function Vo(e, t, n = ve) {
  const { immediate: s, deep: o, flush: i, once: r } = n;
  S.NODE_ENV !== "production" && !t && (s !== void 0 && B(
    'watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'
  ), o !== void 0 && B(
    'watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'
  ), r !== void 0 && B(
    'watch() "once" option is only respected when using the watch(source, callback, options?) signature.'
  ));
  const l = ge({}, n);
  S.NODE_ENV !== "production" && (l.onWarn = B);
  const a = t && s || !t && i !== "post";
  let u;
  if (Is) {
    if (i === "sync") {
      const h = td();
      u = h.__watcherHandles || (h.__watcherHandles = []);
    } else if (!a) {
      const h = () => {
      };
      return h.stop = Fe, h.resume = Fe, h.pause = Fe, h;
    }
  }
  const f = Ze;
  l.call = (h, g, m) => jt(h, f, g, m);
  let c = !1;
  i === "post" ? l.scheduler = (h) => {
    Ye(h, f && f.suspense);
  } : i !== "sync" && (c = !0, l.scheduler = (h, g) => {
    g ? h() : Ui(h);
  }), l.augmentJob = (h) => {
    t && (h.flags |= 4), c && (h.flags |= 2, f && (h.id = f.uid, h.i = f));
  };
  const p = Jp(e, t, l);
  return Is && (u ? u.push(p) : a && p()), p;
}
function Im(e, t, n) {
  const s = this.proxy, o = de(e) ? e.includes(".") ? sd(s, e) : () => s[e] : e.bind(s, s);
  let i;
  ce(t) ? i = t : (i = t.handler, n = t);
  const r = fs(this), l = Vo(o, i.bind(s), n);
  return r(), l;
}
function sd(e, t) {
  const n = t.split(".");
  return () => {
    let s = e;
    for (let o = 0; o < n.length && s; o++)
      s = s[n[o]];
    return s;
  };
}
function Mm(e, t, n = ve) {
  const s = mt();
  if (S.NODE_ENV !== "production" && !s)
    return B("useModel() called without active instance."), X();
  const o = Ie(t);
  if (S.NODE_ENV !== "production" && !s.propsOptions[0][o])
    return B(`useModel() called with prop "${t}" which is not declared.`), X();
  const i = ut(t), r = od(e, o), l = ru((a, u) => {
    let f, c = ve, p;
    return nd(() => {
      const h = e[o];
      yt(f, h) && (f = h, u());
    }), {
      get() {
        return a(), n.get ? n.get(f) : f;
      },
      set(h) {
        const g = n.set ? n.set(h) : h;
        if (!yt(g, f) && !(c !== ve && yt(h, c)))
          return;
        const m = s.vnode.props;
        m && // check if parent has passed v-model
        (t in m || o in m || i in m) && (`onUpdate:${t}` in m || `onUpdate:${o}` in m || `onUpdate:${i}` in m) || (f = h, u()), s.emit(`update:${t}`, g), yt(h, g) && yt(h, c) && !yt(g, p) && u(), c = h, p = g;
      }
    };
  });
  return l[Symbol.iterator] = () => {
    let a = 0;
    return {
      next() {
        return a < 2 ? { value: a++ ? r || ve : l, done: !1 } : { done: !0 };
      }
    };
  }, l;
}
const od = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${Ie(t)}Modifiers`] || e[`${ut(t)}Modifiers`];
function Pm(e, t, ...n) {
  if (e.isUnmounted) return;
  const s = e.vnode.props || ve;
  if (S.NODE_ENV !== "production") {
    const {
      emitsOptions: f,
      propsOptions: [c]
    } = e;
    if (f)
      if (!(t in f))
        (!c || !(ln(Ie(t)) in c)) && B(
          `Component emitted event "${t}" but it is neither declared in the emits option nor as an "${ln(Ie(t))}" prop.`
        );
      else {
        const p = f[t];
        ce(p) && (p(...n) || B(
          `Invalid event arguments: event validation failed for event "${t}".`
        ));
      }
  }
  let o = n;
  const i = t.startsWith("update:"), r = i && od(s, t.slice(7));
  if (r && (r.trim && (o = n.map((f) => de(f) ? f.trim() : f)), r.number && (o = n.map(ri))), S.NODE_ENV !== "production" && hh(e, t, o), S.NODE_ENV !== "production") {
    const f = t.toLowerCase();
    f !== t && s[ln(f)] && B(
      `Event "${f}" is emitted in component ${Xi(
        e,
        e.type
      )} but the handler is registered for "${t}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${ut(
        t
      )}" instead of "${t}".`
    );
  }
  let l, a = s[l = ln(t)] || // also try camelCase event handler (#2249)
  s[l = ln(Ie(t))];
  !a && i && (a = s[l = ln(ut(t))]), a && jt(
    a,
    e,
    6,
    o
  );
  const u = s[l + "Once"];
  if (u) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[l])
      return;
    e.emitted[l] = !0, jt(
      u,
      e,
      6,
      o
    );
  }
}
function id(e, t, n = !1) {
  const s = t.emitsCache, o = s.get(e);
  if (o !== void 0)
    return o;
  const i = e.emits;
  let r = {}, l = !1;
  if (!ce(e)) {
    const a = (u) => {
      const f = id(u, t, !0);
      f && (l = !0, ge(r, f));
    };
    !n && t.mixins.length && t.mixins.forEach(a), e.extends && a(e.extends), e.mixins && e.mixins.forEach(a);
  }
  return !i && !l ? (Ee(e) && s.set(e, null), null) : (te(i) ? i.forEach((a) => r[a] = null) : ge(r, i), Ee(e) && s.set(e, r), r);
}
function Gi(e, t) {
  return !e || !En(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), xe(e, t[0].toLowerCase() + t.slice(1)) || xe(e, ut(t)) || xe(e, t));
}
let Ar = !1;
function yi() {
  Ar = !0;
}
function Qo(e) {
  const {
    type: t,
    vnode: n,
    proxy: s,
    withProxy: o,
    propsOptions: [i],
    slots: r,
    attrs: l,
    emit: a,
    render: u,
    renderCache: f,
    props: c,
    data: p,
    setupState: h,
    ctx: g,
    inheritAttrs: m
  } = e, D = wo(e);
  let P, V;
  S.NODE_ENV !== "production" && (Ar = !1);
  try {
    if (n.shapeFlag & 4) {
      const v = o || s, w = S.NODE_ENV !== "production" && h.__isScriptSetup ? new Proxy(v, {
        get(A, k, y) {
          return B(
            `Property '${String(
              k
            )}' was accessed via 'this'. Avoid using 'this' in templates.`
          ), Reflect.get(A, k, y);
        }
      }) : v;
      P = _t(
        u.call(
          w,
          v,
          f,
          S.NODE_ENV !== "production" ? Kt(c) : c,
          h,
          p,
          g
        )
      ), V = l;
    } else {
      const v = t;
      S.NODE_ENV !== "production" && l === c && yi(), P = _t(
        v.length > 1 ? v(
          S.NODE_ENV !== "production" ? Kt(c) : c,
          S.NODE_ENV !== "production" ? {
            get attrs() {
              return yi(), Kt(l);
            },
            slots: r,
            emit: a
          } : { attrs: l, slots: r, emit: a }
        ) : v(
          S.NODE_ENV !== "production" ? Kt(c) : c,
          null
        )
      ), V = t.props ? l : Rm(l);
    }
  } catch (v) {
    po.length = 0, Wn(v, e, 1), P = fe(Be);
  }
  let _ = P, N;
  if (S.NODE_ENV !== "production" && P.patchFlag > 0 && P.patchFlag & 2048 && ([_, N] = rd(P)), V && m !== !1) {
    const v = Object.keys(V), { shapeFlag: w } = _;
    if (v.length) {
      if (w & 7)
        i && v.some(ii) && (V = Lm(
          V,
          i
        )), _ = Ht(_, V, !1, !0);
      else if (S.NODE_ENV !== "production" && !Ar && _.type !== Be) {
        const A = Object.keys(l), k = [], y = [];
        for (let T = 0, O = A.length; T < O; T++) {
          const C = A[T];
          En(C) ? ii(C) || k.push(C[2].toLowerCase() + C.slice(3)) : y.push(C);
        }
        y.length && B(
          `Extraneous non-props attributes (${y.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text or teleport root nodes.`
        ), k.length && B(
          `Extraneous non-emits event listeners (${k.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`
        );
      }
    }
  }
  return n.dirs && (S.NODE_ENV !== "production" && !$a(_) && B(
    "Runtime directive used on component with non-element root node. The directives will not function as intended."
  ), _ = Ht(_, null, !1, !0), _.dirs = _.dirs ? _.dirs.concat(n.dirs) : n.dirs), n.transition && (S.NODE_ENV !== "production" && !$a(_) && B(
    "Component inside <Transition> renders non-element root node that cannot be animated."
  ), Nn(_, n.transition)), S.NODE_ENV !== "production" && N ? N(_) : P = _, wo(D), P;
}
const rd = (e) => {
  const t = e.children, n = e.dynamicChildren, s = Ji(t, !1);
  if (s) {
    if (S.NODE_ENV !== "production" && s.patchFlag > 0 && s.patchFlag & 2048)
      return rd(s);
  } else return [e, void 0];
  const o = t.indexOf(s), i = n ? n.indexOf(s) : -1, r = (l) => {
    t[o] = l, n && (i > -1 ? n[i] = l : l.patchFlag > 0 && (e.dynamicChildren = [...n, l]));
  };
  return [_t(s), r];
};
function Ji(e, t = !0) {
  let n;
  for (let s = 0; s < e.length; s++) {
    const o = e[s];
    if (dn(o)) {
      if (o.type !== Be || o.children === "v-if") {
        if (n)
          return;
        if (n = o, S.NODE_ENV !== "production" && t && n.patchFlag > 0 && n.patchFlag & 2048)
          return Ji(n.children);
      }
    } else
      return;
  }
  return n;
}
const Rm = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || En(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, Lm = (e, t) => {
  const n = {};
  for (const s in e)
    (!ii(s) || !(s.slice(9) in t)) && (n[s] = e[s]);
  return n;
}, $a = (e) => e.shapeFlag & 7 || e.type === Be;
function Fm(e, t, n) {
  const { props: s, children: o, component: i } = e, { props: r, children: l, patchFlag: a } = t, u = i.emitsOptions;
  if (S.NODE_ENV !== "production" && (o || l) && Gt || t.dirs || t.transition)
    return !0;
  if (n && a >= 0) {
    if (a & 1024)
      return !0;
    if (a & 16)
      return s ? Da(s, r, u) : !!r;
    if (a & 8) {
      const f = t.dynamicProps;
      for (let c = 0; c < f.length; c++) {
        const p = f[c];
        if (r[p] !== s[p] && !Gi(u, p))
          return !0;
      }
    }
  } else
    return (o || l) && (!l || !l.$stable) ? !0 : s === r ? !1 : s ? r ? Da(s, r, u) : !0 : !!r;
  return !1;
}
function Da(e, t, n) {
  const s = Object.keys(t);
  if (s.length !== Object.keys(e).length)
    return !0;
  for (let o = 0; o < s.length; o++) {
    const i = s[o];
    if (t[i] !== e[i] && !Gi(n, i))
      return !0;
  }
  return !1;
}
function Yi({ vnode: e, parent: t }, n) {
  for (; t; ) {
    const s = t.subTree;
    if (s.suspense && s.suspense.activeBranch === e && (s.el = e.el), s === e)
      (e = t.vnode).el = n, t = t.parent;
    else
      break;
  }
}
const bi = (e) => e.__isSuspense;
let Vr = 0;
const Bm = {
  name: "Suspense",
  // In order to make Suspense tree-shakable, we need to avoid importing it
  // directly in the renderer. The renderer checks for the __isSuspense flag
  // on a vnode's type and calls the `process` method, passing in renderer
  // internals.
  __isSuspense: !0,
  process(e, t, n, s, o, i, r, l, a, u) {
    if (e == null)
      Hm(
        t,
        n,
        s,
        o,
        i,
        r,
        l,
        a,
        u
      );
    else {
      if (i && i.deps > 0 && !e.suspense.isInFallback) {
        t.suspense = e.suspense, t.suspense.vnode = t, t.el = e.el;
        return;
      }
      Um(
        e,
        t,
        n,
        s,
        o,
        r,
        l,
        a,
        u
      );
    }
  },
  hydrate: qm,
  normalize: zm
}, jm = Bm;
function xo(e, t) {
  const n = e.props && e.props[t];
  ce(n) && n();
}
function Hm(e, t, n, s, o, i, r, l, a) {
  const {
    p: u,
    o: { createElement: f }
  } = a, c = f("div"), p = e.suspense = ld(
    e,
    o,
    s,
    t,
    c,
    n,
    i,
    r,
    l,
    a
  );
  u(
    null,
    p.pendingBranch = e.ssContent,
    c,
    null,
    s,
    p,
    i,
    r
  ), p.deps > 0 ? (xo(e, "onPending"), xo(e, "onFallback"), u(
    null,
    e.ssFallback,
    t,
    n,
    s,
    null,
    // fallback tree will not have suspense context
    i,
    r
  ), Os(p, e.ssFallback)) : p.resolve(!1, !0);
}
function Um(e, t, n, s, o, i, r, l, { p: a, um: u, o: { createElement: f } }) {
  const c = t.suspense = e.suspense;
  c.vnode = t, t.el = e.el;
  const p = t.ssContent, h = t.ssFallback, { activeBranch: g, pendingBranch: m, isInFallback: D, isHydrating: P } = c;
  if (m)
    c.pendingBranch = p, Wt(p, m) ? (a(
      m,
      p,
      c.hiddenContainer,
      null,
      o,
      c,
      i,
      r,
      l
    ), c.deps <= 0 ? c.resolve() : D && (P || (a(
      g,
      h,
      n,
      s,
      o,
      null,
      // fallback tree will not have suspense context
      i,
      r,
      l
    ), Os(c, h)))) : (c.pendingId = Vr++, P ? (c.isHydrating = !1, c.activeBranch = m) : u(m, o, c), c.deps = 0, c.effects.length = 0, c.hiddenContainer = f("div"), D ? (a(
      null,
      p,
      c.hiddenContainer,
      null,
      o,
      c,
      i,
      r,
      l
    ), c.deps <= 0 ? c.resolve() : (a(
      g,
      h,
      n,
      s,
      o,
      null,
      // fallback tree will not have suspense context
      i,
      r,
      l
    ), Os(c, h))) : g && Wt(p, g) ? (a(
      g,
      p,
      n,
      s,
      o,
      c,
      i,
      r,
      l
    ), c.resolve(!0)) : (a(
      null,
      p,
      c.hiddenContainer,
      null,
      o,
      c,
      i,
      r,
      l
    ), c.deps <= 0 && c.resolve()));
  else if (g && Wt(p, g))
    a(
      g,
      p,
      n,
      s,
      o,
      c,
      i,
      r,
      l
    ), Os(c, p);
  else if (xo(t, "onPending"), c.pendingBranch = p, p.shapeFlag & 512 ? c.pendingId = p.component.suspenseId : c.pendingId = Vr++, a(
    null,
    p,
    c.hiddenContainer,
    null,
    o,
    c,
    i,
    r,
    l
  ), c.deps <= 0)
    c.resolve();
  else {
    const { timeout: V, pendingId: _ } = c;
    V > 0 ? setTimeout(() => {
      c.pendingId === _ && c.fallback(h);
    }, V) : V === 0 && c.fallback(h);
  }
}
let Aa = !1;
function ld(e, t, n, s, o, i, r, l, a, u, f = !1) {
  S.NODE_ENV !== "production" && !Aa && (Aa = !0, console[console.info ? "info" : "log"](
    "<Suspense> is an experimental feature and its API will likely change."
  ));
  const {
    p: c,
    m: p,
    um: h,
    n: g,
    o: { parentNode: m, remove: D }
  } = u;
  let P;
  const V = Wm(e);
  V && t && t.pendingBranch && (P = t.pendingId, t.deps++);
  const _ = e.props ? li(e.props.timeout) : void 0;
  S.NODE_ENV !== "production" && ml(_, "Suspense timeout");
  const N = i, v = {
    vnode: e,
    parent: t,
    parentComponent: n,
    namespace: r,
    container: s,
    hiddenContainer: o,
    deps: 0,
    pendingId: Vr++,
    timeout: typeof _ == "number" ? _ : -1,
    activeBranch: null,
    pendingBranch: null,
    isInFallback: !f,
    isHydrating: f,
    isUnmounted: !1,
    effects: [],
    resolve(w = !1, A = !1) {
      if (S.NODE_ENV !== "production") {
        if (!w && !v.pendingBranch)
          throw new Error(
            "suspense.resolve() is called without a pending branch."
          );
        if (v.isUnmounted)
          throw new Error(
            "suspense.resolve() is called on an already unmounted suspense boundary."
          );
      }
      const {
        vnode: k,
        activeBranch: y,
        pendingBranch: T,
        pendingId: O,
        effects: C,
        parentComponent: L,
        container: j
      } = v;
      let q = !1;
      v.isHydrating ? v.isHydrating = !1 : w || (q = y && T.transition && T.transition.mode === "out-in", q && (y.transition.afterLeave = () => {
        O === v.pendingId && (p(
          T,
          j,
          i === N ? g(y) : i,
          0
        ), As(C));
      }), y && (m(y.el) === j && (i = g(y)), h(y, L, v, !0)), q || p(T, j, i, 0)), Os(v, T), v.pendingBranch = null, v.isInFallback = !1;
      let I = v.parent, R = !1;
      for (; I; ) {
        if (I.pendingBranch) {
          I.effects.push(...C), R = !0;
          break;
        }
        I = I.parent;
      }
      !R && !q && As(C), v.effects = [], V && t && t.pendingBranch && P === t.pendingId && (t.deps--, t.deps === 0 && !A && t.resolve()), xo(k, "onResolve");
    },
    fallback(w) {
      if (!v.pendingBranch)
        return;
      const { vnode: A, activeBranch: k, parentComponent: y, container: T, namespace: O } = v;
      xo(A, "onFallback");
      const C = g(k), L = () => {
        v.isInFallback && (c(
          null,
          w,
          T,
          C,
          y,
          null,
          // fallback tree will not have suspense context
          O,
          l,
          a
        ), Os(v, w));
      }, j = w.transition && w.transition.mode === "out-in";
      j && (k.transition.afterLeave = L), v.isInFallback = !0, h(
        k,
        y,
        null,
        // no suspense so unmount hooks fire now
        !0
        // shouldRemove
      ), j || L();
    },
    move(w, A, k) {
      v.activeBranch && p(v.activeBranch, w, A, k), v.container = w;
    },
    next() {
      return v.activeBranch && g(v.activeBranch);
    },
    registerDep(w, A, k) {
      const y = !!v.pendingBranch;
      y && v.deps++;
      const T = w.vnode.el;
      w.asyncDep.catch((O) => {
        Wn(O, w, 0);
      }).then((O) => {
        if (w.isUnmounted || v.isUnmounted || v.pendingId !== w.suspenseId)
          return;
        w.asyncResolved = !0;
        const { vnode: C } = w;
        S.NODE_ENV !== "production" && Ns(C), Fr(w, O, !1), T && (C.el = T);
        const L = !T && w.subTree.el;
        A(
          w,
          C,
          // component may have been moved before resolve.
          // if this is not a hydration, instance.subTree will be the comment
          // placeholder.
          m(T || w.subTree.el),
          // anchor will not be used if this is hydration, so only need to
          // consider the comment placeholder case.
          T ? null : g(w.subTree),
          v,
          r,
          k
        ), L && D(L), Yi(w, C.el), S.NODE_ENV !== "production" && Ss(), y && --v.deps === 0 && v.resolve();
      });
    },
    unmount(w, A) {
      v.isUnmounted = !0, v.activeBranch && h(
        v.activeBranch,
        n,
        w,
        A
      ), v.pendingBranch && h(
        v.pendingBranch,
        n,
        w,
        A
      );
    }
  };
  return v;
}
function qm(e, t, n, s, o, i, r, l, a) {
  const u = t.suspense = ld(
    t,
    s,
    n,
    e.parentNode,
    // eslint-disable-next-line no-restricted-globals
    document.createElement("div"),
    null,
    o,
    i,
    r,
    l,
    !0
  ), f = a(
    e,
    u.pendingBranch = t.ssContent,
    n,
    u,
    i,
    r
  );
  return u.deps === 0 && u.resolve(!1, !0), f;
}
function zm(e) {
  const { shapeFlag: t, children: n } = e, s = t & 32;
  e.ssContent = Va(
    s ? n.default : n
  ), e.ssFallback = s ? Va(n.fallback) : fe(Be);
}
function Va(e) {
  let t;
  if (ce(e)) {
    const n = ds && e._c;
    n && (e._d = !1, E()), e = e(), n && (e._d = !0, t = dt, cd());
  }
  if (te(e)) {
    const n = Ji(e);
    S.NODE_ENV !== "production" && !n && e.filter((s) => s !== Nl).length > 0 && B("<Suspense> slots expect a single root node."), e = n;
  }
  return e = _t(e), t && !e.dynamicChildren && (e.dynamicChildren = t.filter((n) => n !== e)), e;
}
function ad(e, t) {
  t && t.pendingBranch ? te(e) ? t.effects.push(...e) : t.effects.push(e) : As(e);
}
function Os(e, t) {
  e.activeBranch = t;
  const { vnode: n, parentComponent: s } = e;
  let o = t.el;
  for (; !o && t.component; )
    t = t.component.subTree, o = t.el;
  n.el = o, s && s.subTree === n && (s.vnode.el = o, Yi(s, o));
}
function Wm(e) {
  const t = e.props && e.props.suspensible;
  return t != null && t !== !1;
}
const ae = Symbol.for("v-fgt"), cn = Symbol.for("v-txt"), Be = Symbol.for("v-cmt"), Hn = Symbol.for("v-stc"), po = [];
let dt = null;
function E(e = !1) {
  po.push(dt = e ? null : []);
}
function cd() {
  po.pop(), dt = po[po.length - 1] || null;
}
let ds = 1;
function Ir(e, t = !1) {
  ds += e, e < 0 && dt && t && (dt.hasOnce = !0);
}
function ud(e) {
  return e.dynamicChildren = ds > 0 ? dt || xs : null, cd(), ds > 0 && dt && dt.push(e), e;
}
function x(e, t, n, s, o, i) {
  return ud(
    d(
      e,
      t,
      n,
      s,
      o,
      i,
      !0
    )
  );
}
function Tt(e, t, n, s, o) {
  return ud(
    fe(
      e,
      t,
      n,
      s,
      o,
      !0
    )
  );
}
function dn(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Wt(e, t) {
  if (S.NODE_ENV !== "production" && t.shapeFlag & 6 && e.component) {
    const n = Yo.get(t.type);
    if (n && n.has(e.component))
      return e.shapeFlag &= -257, t.shapeFlag &= -513, !1;
  }
  return e.type === t.type && e.key === t.key;
}
let Mr;
function Km(e) {
  Mr = e;
}
const Gm = (...e) => fd(
  ...Mr ? Mr(e, Je) : e
), dd = ({ key: e }) => e ?? null, Zo = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? de(e) || Ue(e) || ce(e) ? { i: Je, r: e, k: t, f: !!n } : e : null);
function d(e, t = null, n = null, s = 0, o = null, i = e === ae ? 0 : 1, r = !1, l = !1) {
  const a = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && dd(t),
    ref: t && Zo(t),
    scopeId: qi,
    slotScopeIds: null,
    children: n,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetStart: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: i,
    patchFlag: s,
    dynamicProps: o,
    dynamicChildren: null,
    appContext: null,
    ctx: Je
  };
  return l ? (Al(a, n), i & 128 && e.normalize(a)) : n && (a.shapeFlag |= de(n) ? 8 : 16), S.NODE_ENV !== "production" && a.key !== a.key && B("VNode created with invalid key (NaN). VNode type:", a.type), ds > 0 && // avoid a block node from tracking itself
  !r && // has current parent block
  dt && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (a.patchFlag > 0 || i & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  a.patchFlag !== 32 && dt.push(a), a;
}
const fe = S.NODE_ENV !== "production" ? Gm : fd;
function fd(e, t = null, n = null, s = 0, o = null, i = !1) {
  if ((!e || e === Nl) && (S.NODE_ENV !== "production" && !e && B(`Invalid vnode type when creating vnode: ${e}.`), e = Be), dn(e)) {
    const l = Ht(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && Al(l, n), ds > 0 && !i && dt && (l.shapeFlag & 6 ? dt[dt.indexOf(e)] = l : dt.push(l)), l.patchFlag = -2, l;
  }
  if (Ed(e) && (e = e.__vccOpts), t) {
    t = pd(t);
    let { class: l, style: a } = t;
    l && !de(l) && (t.class = be(l)), Ee(a) && (Ds(a) && !te(a) && (a = ge({}, a)), t.style = Ve(a));
  }
  const r = de(e) ? 1 : bi(e) ? 128 : yu(e) ? 64 : Ee(e) ? 4 : ce(e) ? 2 : 0;
  return S.NODE_ENV !== "production" && r & 4 && Ds(e) && (e = he(e), B(
    "Vue received a Component that was made a reactive object. This can lead to unnecessary performance overhead and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",
    `
Component that was made reactive: `,
    e
  )), d(
    e,
    t,
    n,
    s,
    o,
    r,
    i,
    !0
  );
}
function pd(e) {
  return e ? Ds(e) || Uu(e) ? ge({}, e) : e : null;
}
function Ht(e, t, n = !1, s = !1) {
  const { props: o, ref: i, patchFlag: r, children: l, transition: a } = e, u = t ? md(o || {}, t) : o, f = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: u,
    key: u && dd(u),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && i ? te(i) ? i.concat(Zo(t)) : [i, Zo(t)] : Zo(t)
    ) : i,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: S.NODE_ENV !== "production" && r === -1 && te(l) ? l.map(hd) : l,
    target: e.target,
    targetStart: e.targetStart,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== ae ? r === -1 ? 16 : r | 16 : r,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: a,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && Ht(e.ssContent),
    ssFallback: e.ssFallback && Ht(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return a && s && Nn(
    f,
    a.clone(f)
  ), f;
}
function hd(e) {
  const t = Ht(e);
  return te(e.children) && (t.children = e.children.map(hd)), t;
}
function We(e = " ", t = 0) {
  return fe(cn, null, e, t);
}
function Gs(e, t) {
  const n = fe(Hn, null, e);
  return n.staticCount = t, n;
}
function H(e = "", t = !1) {
  return t ? (E(), Tt(Be, null, e)) : fe(Be, null, e);
}
function _t(e) {
  return e == null || typeof e == "boolean" ? fe(Be) : te(e) ? fe(
    ae,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : dn(e) ? Mn(e) : fe(cn, null, String(e));
}
function Mn(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : Ht(e);
}
function Al(e, t) {
  let n = 0;
  const { shapeFlag: s } = e;
  if (t == null)
    t = null;
  else if (te(t))
    n = 16;
  else if (typeof t == "object")
    if (s & 65) {
      const o = t.default;
      o && (o._c && (o._d = !1), Al(e, o()), o._c && (o._d = !0));
      return;
    } else {
      n = 32;
      const o = t._;
      !o && !Uu(t) ? t._ctx = Je : o === 3 && Je && (Je.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else ce(t) ? (t = { default: t, _ctx: Je }, n = 32) : (t = String(t), s & 64 ? (n = 16, t = [We(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function md(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const s = e[n];
    for (const o in s)
      if (o === "class")
        t.class !== s.class && (t.class = be([t.class, s.class]));
      else if (o === "style")
        t.style = Ve([t.style, s.style]);
      else if (En(o)) {
        const i = t[o], r = s[o];
        r && i !== r && !(te(i) && i.includes(r)) && (t[o] = i ? [].concat(i, r) : r);
      } else o !== "" && (t[o] = s[o]);
  }
  return t;
}
function St(e, t, n, s = null) {
  jt(e, t, 7, [
    n,
    s
  ]);
}
const Jm = Fu();
let Ym = 0;
function gd(e, t, n) {
  const s = e.type, o = (t ? t.appContext : e.appContext) || Jm, i = {
    uid: Ym++,
    vnode: e,
    type: s,
    parent: t,
    appContext: o,
    root: null,
    // to be immediately set
    next: null,
    subTree: null,
    // will be set synchronously right after creation
    effect: null,
    update: null,
    // will be set synchronously right after creation
    job: null,
    scope: new cl(
      !0
      /* detached */
    ),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: t ? t.provides : Object.create(o.provides),
    ids: t ? t.ids : ["", 0, 0],
    accessCache: null,
    renderCache: [],
    // local resolved assets
    components: null,
    directives: null,
    // resolved props and emits options
    propsOptions: zu(s, o),
    emitsOptions: id(s, o),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: ve,
    // inheritAttrs
    inheritAttrs: s.inheritAttrs,
    // state
    ctx: ve,
    data: ve,
    props: ve,
    attrs: ve,
    slots: ve,
    refs: ve,
    setupState: ve,
    setupContext: null,
    // suspense related
    suspense: n,
    suspenseId: n ? n.pendingId : 0,
    asyncDep: null,
    asyncResolved: !1,
    // lifecycle hooks
    // not using enums here because it results in computed properties
    isMounted: !1,
    isUnmounted: !1,
    isDeactivated: !1,
    bc: null,
    c: null,
    bm: null,
    m: null,
    bu: null,
    u: null,
    um: null,
    bum: null,
    da: null,
    a: null,
    rtg: null,
    rtc: null,
    ec: null,
    sp: null
  };
  return S.NODE_ENV !== "production" ? i.ctx = Wh(i) : i.ctx = { _: i }, i.root = t ? t.root : i, i.emit = Pm.bind(null, i), e.ce && e.ce(i), i;
}
let Ze = null;
const mt = () => Ze || Je;
let _i, Pr;
{
  const e = $o(), t = (n, s) => {
    let o;
    return (o = e[n]) || (o = e[n] = []), o.push(s), (i) => {
      o.length > 1 ? o.forEach((r) => r(i)) : o[0](i);
    };
  };
  _i = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => Ze = n
  ), Pr = t(
    "__VUE_SSR_SETTERS__",
    (n) => Is = n
  );
}
const fs = (e) => {
  const t = Ze;
  return _i(e), e.scope.on(), () => {
    e.scope.off(), _i(t);
  };
}, Rr = () => {
  Ze && Ze.scope.off(), _i(null);
}, Xm = /* @__PURE__ */ et("slot,component");
function Lr(e, { isNativeTag: t }) {
  (Xm(e) || t(e)) && B(
    "Do not use built-in or reserved HTML elements as component id: " + e
  );
}
function vd(e) {
  return e.vnode.shapeFlag & 4;
}
let Is = !1;
function yd(e, t = !1, n = !1) {
  t && Pr(t);
  const { props: s, children: o } = e.vnode, i = vd(e);
  vm(e, s, i, t), Om(e, o, n || t);
  const r = i ? Qm(e, t) : void 0;
  return t && Pr(!1), r;
}
function Qm(e, t) {
  var n;
  const s = e.type;
  if (S.NODE_ENV !== "production") {
    if (s.name && Lr(s.name, e.appContext.config), s.components) {
      const i = Object.keys(s.components);
      for (let r = 0; r < i.length; r++)
        Lr(i[r], e.appContext.config);
    }
    if (s.directives) {
      const i = Object.keys(s.directives);
      for (let r = 0; r < i.length; r++)
        gu(i[r]);
    }
    s.compilerOptions && Vl() && B(
      '"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.'
    );
  }
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, co), S.NODE_ENV !== "production" && Kh(e);
  const { setup: o } = s;
  if (o) {
    Qt();
    const i = e.setupContext = o.length > 1 ? wd(e) : null, r = fs(e), l = ms(
      o,
      e,
      0,
      [
        S.NODE_ENV !== "production" ? Kt(e.props) : e.props,
        i
      ]
    ), a = Vi(l);
    if (Zt(), r(), (a || e.sp) && !jn(e) && El(e), a) {
      if (l.then(Rr, Rr), t)
        return l.then((u) => {
          Fr(e, u, t);
        }).catch((u) => {
          Wn(u, e, 0);
        });
      if (e.asyncDep = l, S.NODE_ENV !== "production" && !e.suspense) {
        const u = (n = s.name) != null ? n : "Anonymous";
        B(
          `Component <${u}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`
        );
      }
    } else
      Fr(e, l, t);
  } else
    _d(e, t);
}
function Fr(e, t, n) {
  ce(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : Ee(t) ? (S.NODE_ENV !== "production" && dn(t) && B(
    "setup() should not return VNodes directly - return a render function instead."
  ), S.NODE_ENV !== "production" && (e.devtoolsRawSetupState = t), e.setupState = hl(t), S.NODE_ENV !== "production" && Gh(e)) : S.NODE_ENV !== "production" && t !== void 0 && B(
    `setup() should return an object. Received: ${t === null ? "null" : typeof t}`
  ), _d(e, n);
}
let ho, Br;
function bd(e) {
  ho = e, Br = (t) => {
    t.render._rc && (t.withProxy = new Proxy(t.ctx, zh));
  };
}
const Vl = () => !ho;
function _d(e, t, n) {
  const s = e.type;
  if (!e.render) {
    if (!t && ho && !s.render) {
      const o = s.template || Tl(e).template;
      if (o) {
        S.NODE_ENV !== "production" && pn(e, "compile");
        const { isCustomElement: i, compilerOptions: r } = e.appContext.config, { delimiters: l, compilerOptions: a } = s, u = ge(
          ge(
            {
              isCustomElement: i,
              delimiters: l
            },
            r
          ),
          a
        );
        s.render = ho(o, u), S.NODE_ENV !== "production" && hn(e, "compile");
      }
    }
    e.render = s.render || Fe, Br && Br(e);
  }
  {
    const o = fs(e);
    Qt();
    try {
      cm(e);
    } finally {
      Zt(), o();
    }
  }
  S.NODE_ENV !== "production" && !s.render && e.render === Fe && !t && (!ho && s.template ? B(
    'Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".'
  ) : B("Component is missing template or render function: ", s));
}
const Ia = S.NODE_ENV !== "production" ? {
  get(e, t) {
    return yi(), Xe(e, "get", ""), e[t];
  },
  set() {
    return B("setupContext.attrs is readonly."), !1;
  },
  deleteProperty() {
    return B("setupContext.attrs is readonly."), !1;
  }
} : {
  get(e, t) {
    return Xe(e, "get", ""), e[t];
  }
};
function Zm(e) {
  return new Proxy(e.slots, {
    get(t, n) {
      return Xe(e, "get", "$slots"), t[n];
    }
  });
}
function wd(e) {
  const t = (n) => {
    if (S.NODE_ENV !== "production" && (e.exposed && B("expose() should be called only once per setup()."), n != null)) {
      let s = typeof n;
      s === "object" && (te(n) ? s = "array" : Ue(n) && (s = "ref")), s !== "object" && B(
        `expose() should be passed a plain object, received ${s}.`
      );
    }
    e.exposed = n || {};
  };
  if (S.NODE_ENV !== "production") {
    let n, s;
    return Object.freeze({
      get attrs() {
        return n || (n = new Proxy(e.attrs, Ia));
      },
      get slots() {
        return s || (s = Zm(e));
      },
      get emit() {
        return (o, ...i) => e.emit(o, ...i);
      },
      expose: t
    });
  } else
    return {
      attrs: new Proxy(e.attrs, Ia),
      slots: e.slots,
      emit: e.emit,
      expose: t
    };
}
function Io(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(hl(su(e.exposed)), {
    get(t, n) {
      if (n in t)
        return t[n];
      if (n in rs)
        return rs[n](e);
    },
    has(t, n) {
      return n in t || n in rs;
    }
  })) : e.proxy;
}
const eg = /(?:^|[-_])(\w)/g, tg = (e) => e.replace(eg, (t) => t.toUpperCase()).replace(/[-_]/g, "");
function Ms(e, t = !0) {
  return ce(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function Xi(e, t, n = !1) {
  let s = Ms(t);
  if (!s && t.__file) {
    const o = t.__file.match(/([^/\\]+)\.\w+$/);
    o && (s = o[1]);
  }
  if (!s && e && e.parent) {
    const o = (i) => {
      for (const r in i)
        if (i[r] === t)
          return r;
    };
    s = o(
      e.components || e.parent.type.components
    ) || o(e.appContext.components);
  }
  return s ? tg(s) : n ? "App" : "Anonymous";
}
function Ed(e) {
  return ce(e) && "__vccOpts" in e;
}
const G = (e, t) => {
  const n = zp(e, t, Is);
  if (S.NODE_ENV !== "production") {
    const s = mt();
    s && s.appContext.config.warnRecursiveComputed && (n._warnRecursive = !0);
  }
  return n;
};
function xd(e, t, n) {
  const s = arguments.length;
  return s === 2 ? Ee(t) && !te(t) ? dn(t) ? fe(e, null, [t]) : fe(e, t) : fe(e, null, t) : (s > 3 ? n = Array.prototype.slice.call(arguments, 2) : s === 3 && dn(n) && (n = [n]), fe(e, t, n));
}
function Nd() {
  if (S.NODE_ENV === "production" || typeof window > "u")
    return;
  const e = { style: "color:#3ba776" }, t = { style: "color:#1677ff" }, n = { style: "color:#f5222d" }, s = { style: "color:#eb2f96" }, o = {
    __vue_custom_formatter: !0,
    header(c) {
      if (!Ee(c))
        return null;
      if (c.__isVue)
        return ["div", e, "VueInstance"];
      if (Ue(c)) {
        Qt();
        const p = c.value;
        return Zt(), [
          "div",
          {},
          ["span", e, f(c)],
          "<",
          l(p),
          ">"
        ];
      } else {
        if (bn(c))
          return [
            "div",
            {},
            ["span", e, ft(c) ? "ShallowReactive" : "Reactive"],
            "<",
            l(c),
            `>${en(c) ? " (readonly)" : ""}`
          ];
        if (en(c))
          return [
            "div",
            {},
            ["span", e, ft(c) ? "ShallowReadonly" : "Readonly"],
            "<",
            l(c),
            ">"
          ];
      }
      return null;
    },
    hasBody(c) {
      return c && c.__isVue;
    },
    body(c) {
      if (c && c.__isVue)
        return [
          "div",
          {},
          ...i(c.$)
        ];
    }
  };
  function i(c) {
    const p = [];
    c.type.props && c.props && p.push(r("props", he(c.props))), c.setupState !== ve && p.push(r("setup", c.setupState)), c.data !== ve && p.push(r("data", he(c.data)));
    const h = a(c, "computed");
    h && p.push(r("computed", h));
    const g = a(c, "inject");
    return g && p.push(r("injected", g)), p.push([
      "div",
      {},
      [
        "span",
        {
          style: s.style + ";opacity:0.66"
        },
        "$ (internal): "
      ],
      ["object", { object: c }]
    ]), p;
  }
  function r(c, p) {
    return p = ge({}, p), Object.keys(p).length ? [
      "div",
      { style: "line-height:1.25em;margin-bottom:0.6em" },
      [
        "div",
        {
          style: "color:#476582"
        },
        c
      ],
      [
        "div",
        {
          style: "padding-left:1.25em"
        },
        ...Object.keys(p).map((h) => [
          "div",
          {},
          ["span", s, h + ": "],
          l(p[h], !1)
        ])
      ]
    ] : ["span", {}];
  }
  function l(c, p = !0) {
    return typeof c == "number" ? ["span", t, c] : typeof c == "string" ? ["span", n, JSON.stringify(c)] : typeof c == "boolean" ? ["span", s, c] : Ee(c) ? ["object", { object: p ? he(c) : c }] : ["span", n, String(c)];
  }
  function a(c, p) {
    const h = c.type;
    if (ce(h))
      return;
    const g = {};
    for (const m in c.ctx)
      u(h, m, p) && (g[m] = c.ctx[m]);
    return g;
  }
  function u(c, p, h) {
    const g = c[h];
    if (te(g) && g.includes(p) || Ee(g) && p in g || c.extends && u(c.extends, p, h) || c.mixins && c.mixins.some((m) => u(m, p, h)))
      return !0;
  }
  function f(c) {
    return ft(c) ? "ShallowRef" : c.effect ? "ComputedRef" : "Ref";
  }
  window.devtoolsFormatters ? window.devtoolsFormatters.push(o) : window.devtoolsFormatters = [o];
}
function ng(e, t, n, s) {
  const o = n[s];
  if (o && Sd(o, e))
    return o;
  const i = t();
  return i.memo = e.slice(), i.cacheIndex = s, n[s] = i;
}
function Sd(e, t) {
  const n = e.memo;
  if (n.length != t.length)
    return !1;
  for (let s = 0; s < n.length; s++)
    if (yt(n[s], t[s]))
      return !1;
  return ds > 0 && dt && dt.push(e), !0;
}
const jr = "3.5.18", He = S.NODE_ENV !== "production" ? B : Fe, sg = Hi, og = zt, ig = vl, rg = {
  createComponentInstance: gd,
  setupComponent: yd,
  renderComponentRoot: Qo,
  setCurrentRenderingInstance: wo,
  isVNode: dn,
  normalizeVNode: _t,
  getComponentPublicInstance: Io,
  ensureValidVNode: Cl,
  pushWarningContext: Ns,
  popWarningContext: Ss
}, lg = rg, ag = null, cg = null, ug = null;
var Ae = {};
let Hr;
const Ma = typeof window < "u" && window.trustedTypes;
if (Ma)
  try {
    Hr = /* @__PURE__ */ Ma.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch (e) {
    Ae.NODE_ENV !== "production" && He(`Error creating trusted types policy: ${e}`);
  }
const kd = Hr ? (e) => Hr.createHTML(e) : (e) => e, dg = "http://www.w3.org/2000/svg", fg = "http://www.w3.org/1998/Math/MathML", gn = typeof document < "u" ? document : null, Pa = gn && /* @__PURE__ */ gn.createElement("template"), pg = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, s) => {
    const o = t === "svg" ? gn.createElementNS(dg, e) : t === "mathml" ? gn.createElementNS(fg, e) : n ? gn.createElement(e, { is: n }) : gn.createElement(e);
    return e === "select" && s && s.multiple != null && o.setAttribute("multiple", s.multiple), o;
  },
  createText: (e) => gn.createTextNode(e),
  createComment: (e) => gn.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => gn.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(e, t, n, s, o, i) {
    const r = n ? n.previousSibling : t.lastChild;
    if (o && (o === i || o.nextSibling))
      for (; t.insertBefore(o.cloneNode(!0), n), !(o === i || !(o = o.nextSibling)); )
        ;
    else {
      Pa.innerHTML = kd(
        s === "svg" ? `<svg>${e}</svg>` : s === "mathml" ? `<math>${e}</math>` : e
      );
      const l = Pa.content;
      if (s === "svg" || s === "mathml") {
        const a = l.firstChild;
        for (; a.firstChild; )
          l.appendChild(a.firstChild);
        l.removeChild(a);
      }
      t.insertBefore(l, n);
    }
    return [
      // first
      r ? r.nextSibling : t.firstChild,
      // last
      n ? n.previousSibling : t.lastChild
    ];
  }
}, Tn = "transition", Qs = "animation", Ps = Symbol("_vtc"), Cd = {
  name: String,
  type: String,
  css: {
    type: Boolean,
    default: !0
  },
  duration: [String, Number, Object],
  enterFromClass: String,
  enterActiveClass: String,
  enterToClass: String,
  appearFromClass: String,
  appearActiveClass: String,
  appearToClass: String,
  leaveFromClass: String,
  leaveActiveClass: String,
  leaveToClass: String
}, Od = /* @__PURE__ */ ge(
  {},
  _l,
  Cd
), hg = (e) => (e.displayName = "Transition", e.props = Od, e), it = /* @__PURE__ */ hg(
  (e, { slots: t }) => xd(xu, Td(e), t)
), Yn = (e, t = []) => {
  te(e) ? e.forEach((n) => n(...t)) : e && e(...t);
}, Ra = (e) => e ? te(e) ? e.some((t) => t.length > 1) : e.length > 1 : !1;
function Td(e) {
  const t = {};
  for (const C in e)
    C in Cd || (t[C] = e[C]);
  if (e.css === !1)
    return t;
  const {
    name: n = "v",
    type: s,
    duration: o,
    enterFromClass: i = `${n}-enter-from`,
    enterActiveClass: r = `${n}-enter-active`,
    enterToClass: l = `${n}-enter-to`,
    appearFromClass: a = i,
    appearActiveClass: u = r,
    appearToClass: f = l,
    leaveFromClass: c = `${n}-leave-from`,
    leaveActiveClass: p = `${n}-leave-active`,
    leaveToClass: h = `${n}-leave-to`
  } = e, g = mg(o), m = g && g[0], D = g && g[1], {
    onBeforeEnter: P,
    onEnter: V,
    onEnterCancelled: _,
    onLeave: N,
    onLeaveCancelled: v,
    onBeforeAppear: w = P,
    onAppear: A = V,
    onAppearCancelled: k = _
  } = t, y = (C, L, j, q) => {
    C._enterCancelled = q, Dn(C, L ? f : l), Dn(C, L ? u : r), j && j();
  }, T = (C, L) => {
    C._isLeaving = !1, Dn(C, c), Dn(C, h), Dn(C, p), L && L();
  }, O = (C) => (L, j) => {
    const q = C ? A : V, I = () => y(L, C, j);
    Yn(q, [L, I]), La(() => {
      Dn(L, C ? a : i), sn(L, C ? f : l), Ra(q) || Fa(L, s, m, I);
    });
  };
  return ge(t, {
    onBeforeEnter(C) {
      Yn(P, [C]), sn(C, i), sn(C, r);
    },
    onBeforeAppear(C) {
      Yn(w, [C]), sn(C, a), sn(C, u);
    },
    onEnter: O(!1),
    onAppear: O(!0),
    onLeave(C, L) {
      C._isLeaving = !0;
      const j = () => T(C, L);
      sn(C, c), C._enterCancelled ? (sn(C, p), Ur()) : (Ur(), sn(C, p)), La(() => {
        C._isLeaving && (Dn(C, c), sn(C, h), Ra(N) || Fa(C, s, D, j));
      }), Yn(N, [C, j]);
    },
    onEnterCancelled(C) {
      y(C, !1, void 0, !0), Yn(_, [C]);
    },
    onAppearCancelled(C) {
      y(C, !0, void 0, !0), Yn(k, [C]);
    },
    onLeaveCancelled(C) {
      T(C), Yn(v, [C]);
    }
  });
}
function mg(e) {
  if (e == null)
    return null;
  if (Ee(e))
    return [hr(e.enter), hr(e.leave)];
  {
    const t = hr(e);
    return [t, t];
  }
}
function hr(e) {
  const t = li(e);
  return Ae.NODE_ENV !== "production" && ml(t, "<transition> explicit duration"), t;
}
function sn(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.add(n)), (e[Ps] || (e[Ps] = /* @__PURE__ */ new Set())).add(t);
}
function Dn(e, t) {
  t.split(/\s+/).forEach((s) => s && e.classList.remove(s));
  const n = e[Ps];
  n && (n.delete(t), n.size || (e[Ps] = void 0));
}
function La(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let gg = 0;
function Fa(e, t, n, s) {
  const o = e._endId = ++gg, i = () => {
    o === e._endId && s();
  };
  if (n != null)
    return setTimeout(i, n);
  const { type: r, timeout: l, propCount: a } = $d(e, t);
  if (!r)
    return s();
  const u = r + "end";
  let f = 0;
  const c = () => {
    e.removeEventListener(u, p), i();
  }, p = (h) => {
    h.target === e && ++f >= a && c();
  };
  setTimeout(() => {
    f < a && c();
  }, l + 1), e.addEventListener(u, p);
}
function $d(e, t) {
  const n = window.getComputedStyle(e), s = (g) => (n[g] || "").split(", "), o = s(`${Tn}Delay`), i = s(`${Tn}Duration`), r = Ba(o, i), l = s(`${Qs}Delay`), a = s(`${Qs}Duration`), u = Ba(l, a);
  let f = null, c = 0, p = 0;
  t === Tn ? r > 0 && (f = Tn, c = r, p = i.length) : t === Qs ? u > 0 && (f = Qs, c = u, p = a.length) : (c = Math.max(r, u), f = c > 0 ? r > u ? Tn : Qs : null, p = f ? f === Tn ? i.length : a.length : 0);
  const h = f === Tn && /\b(transform|all)(,|$)/.test(
    s(`${Tn}Property`).toString()
  );
  return {
    type: f,
    timeout: c,
    propCount: p,
    hasTransform: h
  };
}
function Ba(e, t) {
  for (; e.length < t.length; )
    e = e.concat(e);
  return Math.max(...t.map((n, s) => ja(n) + ja(e[s])));
}
function ja(e) {
  return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function Ur() {
  return document.body.offsetHeight;
}
function vg(e, t, n) {
  const s = e[Ps];
  s && (t = (t ? [t, ...s] : [...s]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const wi = Symbol("_vod"), Dd = Symbol("_vsh"), Il = {
  beforeMount(e, { value: t }, { transition: n }) {
    e[wi] = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : Zs(e, t);
  },
  mounted(e, { value: t }, { transition: n }) {
    n && t && n.enter(e);
  },
  updated(e, { value: t, oldValue: n }, { transition: s }) {
    !t != !n && (s ? t ? (s.beforeEnter(e), Zs(e, !0), s.enter(e)) : s.leave(e, () => {
      Zs(e, !1);
    }) : Zs(e, t));
  },
  beforeUnmount(e, { value: t }) {
    Zs(e, t);
  }
};
Ae.NODE_ENV !== "production" && (Il.name = "show");
function Zs(e, t) {
  e.style.display = t ? e[wi] : "none", e[Dd] = !t;
}
function yg() {
  Il.getSSRProps = ({ value: e }) => {
    if (!e)
      return { style: { display: "none" } };
  };
}
const Ad = Symbol(Ae.NODE_ENV !== "production" ? "CSS_VAR_TEXT" : "");
function bg(e) {
  const t = mt();
  if (!t) {
    Ae.NODE_ENV !== "production" && He("useCssVars is called without current active component instance.");
    return;
  }
  const n = t.ut = (o = e(t.proxy)) => {
    Array.from(
      document.querySelectorAll(`[data-v-owner="${t.uid}"]`)
    ).forEach((i) => Ei(i, o));
  };
  Ae.NODE_ENV !== "production" && (t.getCssVars = () => e(t.proxy));
  const s = () => {
    const o = e(t.proxy);
    t.ce ? Ei(t.ce, o) : qr(t.subTree, o), n(o);
  };
  xl(() => {
    As(s);
  }), rt(() => {
    Lt(s, Fe, { flush: "post" });
    const o = new MutationObserver(s);
    o.observe(t.subTree.el.parentNode, { childList: !0 }), tn(() => o.disconnect());
  });
}
function qr(e, t) {
  if (e.shapeFlag & 128) {
    const n = e.suspense;
    e = n.activeBranch, n.pendingBranch && !n.isHydrating && n.effects.push(() => {
      qr(n.activeBranch, t);
    });
  }
  for (; e.component; )
    e = e.component.subTree;
  if (e.shapeFlag & 1 && e.el)
    Ei(e.el, t);
  else if (e.type === ae)
    e.children.forEach((n) => qr(n, t));
  else if (e.type === Hn) {
    let { el: n, anchor: s } = e;
    for (; n && (Ei(n, t), n !== s); )
      n = n.nextSibling;
  }
}
function Ei(e, t) {
  if (e.nodeType === 1) {
    const n = e.style;
    let s = "";
    for (const o in t) {
      const i = Fc(t[o]);
      n.setProperty(`--${o}`, i), s += `--${o}: ${i};`;
    }
    n[Ad] = s;
  }
}
const _g = /(^|;)\s*display\s*:/;
function wg(e, t, n) {
  const s = e.style, o = de(n);
  let i = !1;
  if (n && !o) {
    if (t)
      if (de(t))
        for (const r of t.split(";")) {
          const l = r.slice(0, r.indexOf(":")).trim();
          n[l] == null && ei(s, l, "");
        }
      else
        for (const r in t)
          n[r] == null && ei(s, r, "");
    for (const r in n)
      r === "display" && (i = !0), ei(s, r, n[r]);
  } else if (o) {
    if (t !== n) {
      const r = s[Ad];
      r && (n += ";" + r), s.cssText = n, i = _g.test(n);
    }
  } else t && e.removeAttribute("style");
  wi in e && (e[wi] = i ? s.display : "", e[Dd] && (s.display = "none"));
}
const Eg = /[^\\];\s*$/, Ha = /\s*!important$/;
function ei(e, t, n) {
  if (te(n))
    n.forEach((s) => ei(e, t, s));
  else if (n == null && (n = ""), Ae.NODE_ENV !== "production" && Eg.test(n) && He(
    `Unexpected semicolon at the end of '${t}' style value: '${n}'`
  ), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const s = xg(e, t);
    Ha.test(n) ? e.setProperty(
      ut(s),
      n.replace(Ha, ""),
      "important"
    ) : e[s] = n;
  }
}
const Ua = ["Webkit", "Moz", "ms"], mr = {};
function xg(e, t) {
  const n = mr[t];
  if (n)
    return n;
  let s = Ie(t);
  if (s !== "filter" && s in e)
    return mr[t] = s;
  s = un(s);
  for (let o = 0; o < Ua.length; o++) {
    const i = Ua[o] + s;
    if (i in e)
      return mr[t] = i;
  }
  return t;
}
const qa = "http://www.w3.org/1999/xlink";
function za(e, t, n, s, o, i = rp(t)) {
  s && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(qa, t.slice(6, t.length)) : e.setAttributeNS(qa, t, n) : n == null || i && !al(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    i ? "" : Ot(n) ? String(n) : n
  );
}
function Wa(e, t, n, s, o) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? kd(n) : n);
    return;
  }
  const i = e.tagName;
  if (t === "value" && i !== "PROGRESS" && // custom elements may use _value internally
  !i.includes("-")) {
    const l = i === "OPTION" ? e.getAttribute("value") || "" : e.value, a = n == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      e.type === "checkbox" ? "on" : ""
    ) : String(n);
    (l !== a || !("_value" in e)) && (e.value = a), n == null && e.removeAttribute(t), e._value = n;
    return;
  }
  let r = !1;
  if (n === "" || n == null) {
    const l = typeof e[t];
    l === "boolean" ? n = al(n) : n == null && l === "string" ? (n = "", r = !0) : l === "number" && (n = 0, r = !0);
  }
  try {
    e[t] = n;
  } catch (l) {
    Ae.NODE_ENV !== "production" && !r && He(
      `Failed setting prop "${t}" on <${i.toLowerCase()}>: value ${n} is invalid.`,
      l
    );
  }
  r && e.removeAttribute(o || t);
}
function yn(e, t, n, s) {
  e.addEventListener(t, n, s);
}
function Ng(e, t, n, s) {
  e.removeEventListener(t, n, s);
}
const Ka = Symbol("_vei");
function Sg(e, t, n, s, o = null) {
  const i = e[Ka] || (e[Ka] = {}), r = i[t];
  if (s && r)
    r.value = Ae.NODE_ENV !== "production" ? Ja(s, t) : s;
  else {
    const [l, a] = kg(t);
    if (s) {
      const u = i[t] = Tg(
        Ae.NODE_ENV !== "production" ? Ja(s, t) : s,
        o
      );
      yn(e, l, u, a);
    } else r && (Ng(e, l, r, a), i[t] = void 0);
  }
}
const Ga = /(?:Once|Passive|Capture)$/;
function kg(e) {
  let t;
  if (Ga.test(e)) {
    t = {};
    let s;
    for (; s = e.match(Ga); )
      e = e.slice(0, e.length - s[0].length), t[s[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : ut(e.slice(2)), t];
}
let gr = 0;
const Cg = /* @__PURE__ */ Promise.resolve(), Og = () => gr || (Cg.then(() => gr = 0), gr = Date.now());
function Tg(e, t) {
  const n = (s) => {
    if (!s._vts)
      s._vts = Date.now();
    else if (s._vts <= n.attached)
      return;
    jt(
      $g(s, n.value),
      t,
      5,
      [s]
    );
  };
  return n.value = e, n.attached = Og(), n;
}
function Ja(e, t) {
  return ce(e) || te(e) ? e : (He(
    `Wrong type passed as event handler to ${t} - did you forget @ or : in front of your prop?
Expected function or array of functions, received type ${typeof e}.`
  ), Fe);
}
function $g(e, t) {
  if (te(t)) {
    const n = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      n.call(e), e._stopped = !0;
    }, t.map(
      (s) => (o) => !o._stopped && s && s(o)
    );
  } else
    return t;
}
const Ya = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, Dg = (e, t, n, s, o, i) => {
  const r = o === "svg";
  t === "class" ? vg(e, s, r) : t === "style" ? wg(e, n, s) : En(t) ? ii(t) || Sg(e, t, n, s, i) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : Ag(e, t, s, r)) ? (Wa(e, t, s), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && za(e, t, s, r, i, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && (/[A-Z]/.test(t) || !de(s)) ? Wa(e, Ie(t), s, i, t) : (t === "true-value" ? e._trueValue = s : t === "false-value" && (e._falseValue = s), za(e, t, s, r));
};
function Ag(e, t, n, s) {
  if (s)
    return !!(t === "innerHTML" || t === "textContent" || t in e && Ya(t) && ce(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const o = e.tagName;
    if (o === "IMG" || o === "VIDEO" || o === "CANVAS" || o === "SOURCE")
      return !1;
  }
  return Ya(t) && de(n) ? !1 : t in e;
}
const Xa = {};
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function Ut(e, t, n) {
  const s = /* @__PURE__ */ wl(e, t);
  Ii(s) && ge(s, t);
  class o extends Qi {
    constructor(r) {
      super(s, r, n);
    }
  }
  return o.def = s, o;
}
/*! #__NO_SIDE_EFFECTS__ */
const Vg = /* @__NO_SIDE_EFFECTS__ */ (e, t) => /* @__PURE__ */ Ut(e, t, Hd), Ig = typeof HTMLElement < "u" ? HTMLElement : class {
};
class Qi extends Ig {
  constructor(t, n = {}, s = Nt) {
    super(), this._def = t, this._props = n, this._createApp = s, this._isVueCE = !0, this._instance = null, this._app = null, this._nonce = this._def.nonce, this._connected = !1, this._resolved = !1, this._numberProps = null, this._styleChildren = /* @__PURE__ */ new WeakSet(), this._ob = null, this.shadowRoot && s !== Nt ? this._root = this.shadowRoot : (Ae.NODE_ENV !== "production" && this.shadowRoot && He(
      "Custom element has pre-rendered declarative shadow root but is not defined as hydratable. Use `defineSSRCustomElement`."
    ), t.shadowRoot !== !1 ? (this.attachShadow({ mode: "open" }), this._root = this.shadowRoot) : this._root = this);
  }
  connectedCallback() {
    if (!this.isConnected) return;
    !this.shadowRoot && !this._resolved && this._parseSlots(), this._connected = !0;
    let t = this;
    for (; t = t && (t.parentNode || t.host); )
      if (t instanceof Qi) {
        this._parent = t;
        break;
      }
    this._instance || (this._resolved ? this._mount(this._def) : t && t._pendingResolve ? this._pendingResolve = t._pendingResolve.then(() => {
      this._pendingResolve = void 0, this._resolveDef();
    }) : this._resolveDef());
  }
  _setParent(t = this._parent) {
    t && (this._instance.parent = t._instance, this._inheritParentContext(t));
  }
  _inheritParentContext(t = this._parent) {
    t && this._app && Object.setPrototypeOf(
      this._app._context.provides,
      t._instance.provides
    );
  }
  disconnectedCallback() {
    this._connected = !1, xn(() => {
      this._connected || (this._ob && (this._ob.disconnect(), this._ob = null), this._app && this._app.unmount(), this._instance && (this._instance.ce = void 0), this._app = this._instance = null);
    });
  }
  /**
   * resolve inner component definition (handle possible async component)
   */
  _resolveDef() {
    if (this._pendingResolve)
      return;
    for (let s = 0; s < this.attributes.length; s++)
      this._setAttr(this.attributes[s].name);
    this._ob = new MutationObserver((s) => {
      for (const o of s)
        this._setAttr(o.attributeName);
    }), this._ob.observe(this, { attributes: !0 });
    const t = (s, o = !1) => {
      this._resolved = !0, this._pendingResolve = void 0;
      const { props: i, styles: r } = s;
      let l;
      if (i && !te(i))
        for (const a in i) {
          const u = i[a];
          (u === Number || u && u.type === Number) && (a in this._props && (this._props[a] = li(this._props[a])), (l || (l = /* @__PURE__ */ Object.create(null)))[Ie(a)] = !0);
        }
      this._numberProps = l, this._resolveProps(s), this.shadowRoot ? this._applyStyles(r) : Ae.NODE_ENV !== "production" && r && He(
        "Custom element style injection is not supported when using shadowRoot: false"
      ), this._mount(s);
    }, n = this._def.__asyncLoader;
    n ? this._pendingResolve = n().then((s) => {
      s.configureApp = this._def.configureApp, t(this._def = s, !0);
    }) : t(this._def);
  }
  _mount(t) {
    Ae.NODE_ENV !== "production" && !t.name && (t.name = "VueElement"), this._app = this._createApp(t), this._inheritParentContext(), t.configureApp && t.configureApp(this._app), this._app._ceVNode = this._createVNode(), this._app.mount(this._root);
    const n = this._instance && this._instance.exposed;
    if (n)
      for (const s in n)
        xe(this, s) ? Ae.NODE_ENV !== "production" && He(`Exposed property "${s}" already exists on custom element.`) : Object.defineProperty(this, s, {
          // unwrap ref to be consistent with public instance behavior
          get: () => Do(n[s])
        });
  }
  _resolveProps(t) {
    const { props: n } = t, s = te(n) ? n : Object.keys(n || {});
    for (const o of Object.keys(this))
      o[0] !== "_" && s.includes(o) && this._setProp(o, this[o]);
    for (const o of s.map(Ie))
      Object.defineProperty(this, o, {
        get() {
          return this._getProp(o);
        },
        set(i) {
          this._setProp(o, i, !0, !0);
        }
      });
  }
  _setAttr(t) {
    if (t.startsWith("data-v-")) return;
    const n = this.hasAttribute(t);
    let s = n ? this.getAttribute(t) : Xa;
    const o = Ie(t);
    n && this._numberProps && this._numberProps[o] && (s = li(s)), this._setProp(o, s, !1, !0);
  }
  /**
   * @internal
   */
  _getProp(t) {
    return this._props[t];
  }
  /**
   * @internal
   */
  _setProp(t, n, s = !0, o = !1) {
    if (n !== this._props[t] && (n === Xa ? delete this._props[t] : (this._props[t] = n, t === "key" && this._app && (this._app._ceVNode.key = n)), o && this._instance && this._update(), s)) {
      const i = this._ob;
      i && i.disconnect(), n === !0 ? this.setAttribute(ut(t), "") : typeof n == "string" || typeof n == "number" ? this.setAttribute(ut(t), n + "") : n || this.removeAttribute(ut(t)), i && i.observe(this, { attributes: !0 });
    }
  }
  _update() {
    const t = this._createVNode();
    this._app && (t.appContext = this._app._context), jd(t, this._root);
  }
  _createVNode() {
    const t = {};
    this.shadowRoot || (t.onVnodeMounted = t.onVnodeUpdated = this._renderSlots.bind(this));
    const n = fe(this._def, ge(t, this._props));
    return this._instance || (n.ce = (s) => {
      this._instance = s, s.ce = this, s.isCE = !0, Ae.NODE_ENV !== "production" && (s.ceReload = (i) => {
        this._styles && (this._styles.forEach((r) => this._root.removeChild(r)), this._styles.length = 0), this._applyStyles(i), this._instance = null, this._update();
      });
      const o = (i, r) => {
        this.dispatchEvent(
          new CustomEvent(
            i,
            Ii(r[0]) ? ge({ detail: r }, r[0]) : { detail: r }
          )
        );
      };
      s.emit = (i, ...r) => {
        o(i, r), ut(i) !== i && o(ut(i), r);
      }, this._setParent();
    }), n;
  }
  _applyStyles(t, n) {
    if (!t) return;
    if (n) {
      if (n === this._def || this._styleChildren.has(n))
        return;
      this._styleChildren.add(n);
    }
    const s = this._nonce;
    for (let o = t.length - 1; o >= 0; o--) {
      const i = document.createElement("style");
      if (s && i.setAttribute("nonce", s), i.textContent = t[o], this.shadowRoot.prepend(i), Ae.NODE_ENV !== "production")
        if (n) {
          if (n.__hmrId) {
            this._childStyles || (this._childStyles = /* @__PURE__ */ new Map());
            let r = this._childStyles.get(n.__hmrId);
            r || this._childStyles.set(n.__hmrId, r = []), r.push(i);
          }
        } else
          (this._styles || (this._styles = [])).push(i);
    }
  }
  /**
   * Only called when shadowRoot is false
   */
  _parseSlots() {
    const t = this._slots = {};
    let n;
    for (; n = this.firstChild; ) {
      const s = n.nodeType === 1 && n.getAttribute("slot") || "default";
      (t[s] || (t[s] = [])).push(n), this.removeChild(n);
    }
  }
  /**
   * Only called when shadowRoot is false
   */
  _renderSlots() {
    const t = (this._teleportTarget || this).querySelectorAll("slot"), n = this._instance.type.__scopeId;
    for (let s = 0; s < t.length; s++) {
      const o = t[s], i = o.getAttribute("name") || "default", r = this._slots[i], l = o.parentNode;
      if (r)
        for (const a of r) {
          if (n && a.nodeType === 1) {
            const u = n + "-s", f = document.createTreeWalker(a, 1);
            a.setAttribute(u, "");
            let c;
            for (; c = f.nextNode(); )
              c.setAttribute(u, "");
          }
          l.insertBefore(a, o);
        }
      else
        for (; o.firstChild; ) l.insertBefore(o.firstChild, o);
      l.removeChild(o);
    }
  }
  /**
   * @internal
   */
  _injectChildStyle(t) {
    this._applyStyles(t.styles, t);
  }
  /**
   * @internal
   */
  _removeChildStyle(t) {
    if (Ae.NODE_ENV !== "production" && (this._styleChildren.delete(t), this._childStyles && t.__hmrId)) {
      const n = this._childStyles.get(t.__hmrId);
      n && (n.forEach((s) => this._root.removeChild(s)), n.length = 0);
    }
  }
}
function zr(e) {
  const t = mt(), n = t && t.ce;
  return n || (Ae.NODE_ENV !== "production" && He(
    t ? `${e || "useHost"} can only be used in components defined via defineCustomElement.` : `${e || "useHost"} called without an active component instance.`
  ), null);
}
function Mg() {
  const e = Ae.NODE_ENV !== "production" ? zr("useShadowRoot") : zr();
  return e && e.shadowRoot;
}
function Pg(e = "$style") {
  {
    const t = mt();
    if (!t)
      return Ae.NODE_ENV !== "production" && He("useCssModule must be called inside setup()"), ve;
    const n = t.type.__cssModules;
    if (!n)
      return Ae.NODE_ENV !== "production" && He("Current instance does not have CSS modules injected."), ve;
    const s = n[e];
    return s || (Ae.NODE_ENV !== "production" && He(`Current instance does not have CSS module named "${e}".`), ve);
  }
}
const Vd = /* @__PURE__ */ new WeakMap(), Id = /* @__PURE__ */ new WeakMap(), xi = Symbol("_moveCb"), Qa = Symbol("_enterCb"), Rg = (e) => (delete e.props.mode, e), Lg = /* @__PURE__ */ Rg({
  name: "TransitionGroup",
  props: /* @__PURE__ */ ge({}, Od, {
    tag: String,
    moveClass: String
  }),
  setup(e, { slots: t }) {
    const n = mt(), s = bl();
    let o, i;
    return Ki(() => {
      if (!o.length)
        return;
      const r = e.moveClass || `${e.name || "v"}-move`;
      if (!Ug(
        o[0].el,
        n.vnode.el,
        r
      )) {
        o = [];
        return;
      }
      o.forEach(Bg), o.forEach(jg);
      const l = o.filter(Hg);
      Ur(), l.forEach((a) => {
        const u = a.el, f = u.style;
        sn(u, r), f.transform = f.webkitTransform = f.transitionDuration = "";
        const c = u[xi] = (p) => {
          p && p.target !== u || (!p || /transform$/.test(p.propertyName)) && (u.removeEventListener("transitionend", c), u[xi] = null, Dn(u, r));
        };
        u.addEventListener("transitionend", c);
      }), o = [];
    }), () => {
      const r = he(e), l = Td(r);
      let a = r.tag || ae;
      if (o = [], i)
        for (let u = 0; u < i.length; u++) {
          const f = i[u];
          f.el && f.el instanceof Element && (o.push(f), Nn(
            f,
            Vs(
              f,
              l,
              s,
              n
            )
          ), Vd.set(
            f,
            f.el.getBoundingClientRect()
          ));
        }
      i = t.default ? zi(t.default()) : [];
      for (let u = 0; u < i.length; u++) {
        const f = i[u];
        f.key != null ? Nn(
          f,
          Vs(f, l, s, n)
        ) : Ae.NODE_ENV !== "production" && f.type !== cn && He("<TransitionGroup> children must be keyed.");
      }
      return fe(a, null, i);
    };
  }
}), Fg = Lg;
function Bg(e) {
  const t = e.el;
  t[xi] && t[xi](), t[Qa] && t[Qa]();
}
function jg(e) {
  Id.set(e, e.el.getBoundingClientRect());
}
function Hg(e) {
  const t = Vd.get(e), n = Id.get(e), s = t.left - n.left, o = t.top - n.top;
  if (s || o) {
    const i = e.el.style;
    return i.transform = i.webkitTransform = `translate(${s}px,${o}px)`, i.transitionDuration = "0s", e;
  }
}
function Ug(e, t, n) {
  const s = e.cloneNode(), o = e[Ps];
  o && o.forEach((l) => {
    l.split(/\s+/).forEach((a) => a && s.classList.remove(a));
  }), n.split(/\s+/).forEach((l) => l && s.classList.add(l)), s.style.display = "none";
  const i = t.nodeType === 1 ? t : t.parentNode;
  i.appendChild(s);
  const { hasTransform: r } = $d(s);
  return i.removeChild(s), r;
}
const zn = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return te(t) ? (n) => Rn(t, n) : t;
};
function qg(e) {
  e.target.composing = !0;
}
function Za(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const Ft = Symbol("_assign"), Rs = {
  created(e, { modifiers: { lazy: t, trim: n, number: s } }, o) {
    e[Ft] = zn(o);
    const i = s || o.props && o.props.type === "number";
    yn(e, t ? "change" : "input", (r) => {
      if (r.target.composing) return;
      let l = e.value;
      n && (l = l.trim()), i && (l = ri(l)), e[Ft](l);
    }), n && yn(e, "change", () => {
      e.value = e.value.trim();
    }), t || (yn(e, "compositionstart", qg), yn(e, "compositionend", Za), yn(e, "change", Za));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t }) {
    e.value = t ?? "";
  },
  beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: s, trim: o, number: i } }, r) {
    if (e[Ft] = zn(r), e.composing) return;
    const l = (i || e.type === "number") && !/^0\d/.test(e.value) ? ri(e.value) : e.value, a = t ?? "";
    l !== a && (document.activeElement === e && e.type !== "range" && (s && t === n || o && e.value.trim() === a) || (e.value = a));
  }
}, Ke = {
  // #4096 array checkboxes need to be deep traversed
  deep: !0,
  created(e, t, n) {
    e[Ft] = zn(n), yn(e, "change", () => {
      const s = e._modelValue, o = Fs(e), i = e.checked, r = e[Ft];
      if (te(s)) {
        const l = Pi(s, o), a = l !== -1;
        if (i && !a)
          r(s.concat(o));
        else if (!i && a) {
          const u = [...s];
          u.splice(l, 1), r(u);
        }
      } else if (hs(s)) {
        const l = new Set(s);
        i ? l.add(o) : l.delete(o), r(l);
      } else
        r(Md(e, i));
    });
  },
  // set initial checked on mount to wait for true-value/false-value
  mounted: ec,
  beforeUpdate(e, t, n) {
    e[Ft] = zn(n), ec(e, t, n);
  }
};
function ec(e, { value: t, oldValue: n }, s) {
  e._modelValue = t;
  let o;
  if (te(t))
    o = Pi(t, s.props.value) > -1;
  else if (hs(t))
    o = t.has(s.props.value);
  else {
    if (t === n) return;
    o = qn(t, Md(e, !0));
  }
  e.checked !== o && (e.checked = o);
}
const Ml = {
  created(e, { value: t }, n) {
    e.checked = qn(t, n.props.value), e[Ft] = zn(n), yn(e, "change", () => {
      e[Ft](Fs(e));
    });
  },
  beforeUpdate(e, { value: t, oldValue: n }, s) {
    e[Ft] = zn(s), t !== n && (e.checked = qn(t, s.props.value));
  }
}, Ls = {
  // <select multiple> value need to be deep traversed
  deep: !0,
  created(e, { value: t, modifiers: { number: n } }, s) {
    const o = hs(t);
    yn(e, "change", () => {
      const i = Array.prototype.filter.call(e.options, (r) => r.selected).map(
        (r) => n ? ri(Fs(r)) : Fs(r)
      );
      e[Ft](
        e.multiple ? o ? new Set(i) : i : i[0]
      ), e._assigning = !0, xn(() => {
        e._assigning = !1;
      });
    }), e[Ft] = zn(s);
  },
  // set value in mounted & updated because <select> relies on its children
  // <option>s.
  mounted(e, { value: t }) {
    tc(e, t);
  },
  beforeUpdate(e, t, n) {
    e[Ft] = zn(n);
  },
  updated(e, { value: t }) {
    e._assigning || tc(e, t);
  }
};
function tc(e, t) {
  const n = e.multiple, s = te(t);
  if (n && !s && !hs(t)) {
    Ae.NODE_ENV !== "production" && He(
      `<select multiple v-model> expects an Array or Set value for its binding, but got ${Object.prototype.toString.call(t).slice(8, -1)}.`
    );
    return;
  }
  for (let o = 0, i = e.options.length; o < i; o++) {
    const r = e.options[o], l = Fs(r);
    if (n)
      if (s) {
        const a = typeof l;
        a === "string" || a === "number" ? r.selected = t.some((u) => String(u) === String(l)) : r.selected = Pi(t, l) > -1;
      } else
        r.selected = t.has(l);
    else if (qn(Fs(r), t)) {
      e.selectedIndex !== o && (e.selectedIndex = o);
      return;
    }
  }
  !n && e.selectedIndex !== -1 && (e.selectedIndex = -1);
}
function Fs(e) {
  return "_value" in e ? e._value : e.value;
}
function Md(e, t) {
  const n = t ? "_trueValue" : "_falseValue";
  return n in e ? e[n] : t;
}
const Pd = {
  created(e, t, n) {
    zo(e, t, n, null, "created");
  },
  mounted(e, t, n) {
    zo(e, t, n, null, "mounted");
  },
  beforeUpdate(e, t, n, s) {
    zo(e, t, n, s, "beforeUpdate");
  },
  updated(e, t, n, s) {
    zo(e, t, n, s, "updated");
  }
};
function Rd(e, t) {
  switch (e) {
    case "SELECT":
      return Ls;
    case "TEXTAREA":
      return Rs;
    default:
      switch (t) {
        case "checkbox":
          return Ke;
        case "radio":
          return Ml;
        default:
          return Rs;
      }
  }
}
function zo(e, t, n, s, o) {
  const r = Rd(
    e.tagName,
    n.props && n.props.type
  )[o];
  r && r(e, t, n, s);
}
function zg() {
  Rs.getSSRProps = ({ value: e }) => ({ value: e }), Ml.getSSRProps = ({ value: e }, t) => {
    if (t.props && qn(t.props.value, e))
      return { checked: !0 };
  }, Ke.getSSRProps = ({ value: e }, t) => {
    if (te(e)) {
      if (t.props && Pi(e, t.props.value) > -1)
        return { checked: !0 };
    } else if (hs(e)) {
      if (t.props && e.has(t.props.value))
        return { checked: !0 };
    } else if (e)
      return { checked: !0 };
  }, Pd.getSSRProps = (e, t) => {
    if (typeof t.type != "string")
      return;
    const n = Rd(
      // resolveDynamicModel expects an uppercase tag name, but vnode.type is lowercase
      t.type.toUpperCase(),
      t.props && t.props.type
    );
    if (n.getSSRProps)
      return n.getSSRProps(e, t);
  };
}
const Wg = ["ctrl", "shift", "alt", "meta"], Kg = {
  stop: (e) => e.stopPropagation(),
  prevent: (e) => e.preventDefault(),
  self: (e) => e.target !== e.currentTarget,
  ctrl: (e) => !e.ctrlKey,
  shift: (e) => !e.shiftKey,
  alt: (e) => !e.altKey,
  meta: (e) => !e.metaKey,
  left: (e) => "button" in e && e.button !== 0,
  middle: (e) => "button" in e && e.button !== 1,
  right: (e) => "button" in e && e.button !== 2,
  exact: (e, t) => Wg.some((n) => e[`${n}Key`] && !t.includes(n))
}, It = (e, t) => {
  const n = e._withMods || (e._withMods = {}), s = t.join(".");
  return n[s] || (n[s] = (o, ...i) => {
    for (let r = 0; r < t.length; r++) {
      const l = Kg[t[r]];
      if (l && l(o, t)) return;
    }
    return e(o, ...i);
  });
}, Gg = {
  esc: "escape",
  space: " ",
  up: "arrow-up",
  left: "arrow-left",
  right: "arrow-right",
  down: "arrow-down",
  delete: "backspace"
}, Wr = (e, t) => {
  const n = e._withKeys || (e._withKeys = {}), s = t.join(".");
  return n[s] || (n[s] = (o) => {
    if (!("key" in o))
      return;
    const i = ut(o.key);
    if (t.some(
      (r) => r === i || Gg[r] === i
    ))
      return e(o);
  });
}, Ld = /* @__PURE__ */ ge({ patchProp: Dg }, pg);
let mo, nc = !1;
function Fd() {
  return mo || (mo = Ju(Ld));
}
function Bd() {
  return mo = nc ? mo : Yu(Ld), nc = !0, mo;
}
const jd = (...e) => {
  Fd().render(...e);
}, Jg = (...e) => {
  Bd().hydrate(...e);
}, Nt = (...e) => {
  const t = Fd().createApp(...e);
  Ae.NODE_ENV !== "production" && (qd(t), zd(t));
  const { mount: n } = t;
  return t.mount = (s) => {
    const o = Wd(s);
    if (!o) return;
    const i = t._component;
    !ce(i) && !i.render && !i.template && (i.template = o.innerHTML), o.nodeType === 1 && (o.textContent = "");
    const r = n(o, !1, Ud(o));
    return o instanceof Element && (o.removeAttribute("v-cloak"), o.setAttribute("data-v-app", "")), r;
  }, t;
}, Hd = (...e) => {
  const t = Bd().createApp(...e);
  Ae.NODE_ENV !== "production" && (qd(t), zd(t));
  const { mount: n } = t;
  return t.mount = (s) => {
    const o = Wd(s);
    if (o)
      return n(o, !0, Ud(o));
  }, t;
};
function Ud(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function qd(e) {
  Object.defineProperty(e.config, "isNativeTag", {
    value: (t) => Vc(t) || Ic(t) || Mc(t),
    writable: !1
  });
}
function zd(e) {
  if (Vl()) {
    const t = e.config.isCustomElement;
    Object.defineProperty(e.config, "isCustomElement", {
      get() {
        return t;
      },
      set() {
        He(
          "The `isCustomElement` config option is deprecated. Use `compilerOptions.isCustomElement` instead."
        );
      }
    });
    const n = e.config.compilerOptions, s = 'The `compilerOptions` config option is only respected when using a build of Vue.js that includes the runtime compiler (aka "full build"). Since you are using the runtime-only build, `compilerOptions` must be passed to `@vue/compiler-dom` in the build setup instead.\n- For vue-loader: pass it via vue-loader\'s `compilerOptions` loader option.\n- For vue-cli: see https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-loader\n- For vite: pass it via @vitejs/plugin-vue options. See https://github.com/vitejs/vite-plugin-vue/tree/main/packages/plugin-vue#example-for-passing-options-to-vuecompiler-sfc';
    Object.defineProperty(e.config, "compilerOptions", {
      get() {
        return He(s), n;
      },
      set() {
        He(s);
      }
    });
  }
}
function Wd(e) {
  if (de(e)) {
    const t = document.querySelector(e);
    return Ae.NODE_ENV !== "production" && !t && He(
      `Failed to mount app: mount target selector "${e}" returned null.`
    ), t;
  }
  return Ae.NODE_ENV !== "production" && window.ShadowRoot && e instanceof window.ShadowRoot && e.mode === "closed" && He(
    'mounting on a ShadowRoot with `{mode: "closed"}` may lead to unpredictable bugs'
  ), e;
}
let sc = !1;
const Yg = () => {
  sc || (sc = !0, zg(), yg());
}, Xg = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  BaseTransition: xu,
  BaseTransitionPropsValidators: _l,
  Comment: Be,
  DeprecationTypes: ug,
  EffectScope: cl,
  ErrorCodes: eh,
  ErrorTypeStrings: sg,
  Fragment: ae,
  KeepAlive: Lh,
  ReactiveEffect: vo,
  Static: Hn,
  Suspense: jm,
  Teleport: Sn,
  Text: cn,
  TrackOpTypes: Wp,
  Transition: it,
  TransitionGroup: Fg,
  TriggerOpTypes: Kp,
  VueElement: Qi,
  assertNumber: ml,
  callWithAsyncErrorHandling: jt,
  callWithErrorHandling: ms,
  camelize: Ie,
  capitalize: un,
  cloneVNode: Ht,
  compatUtils: cg,
  computed: G,
  createApp: Nt,
  createBlock: Tt,
  createCommentVNode: H,
  createElementBlock: x,
  createElementVNode: d,
  createHydrationRenderer: Yu,
  createPropsRestProxy: rm,
  createRenderer: Ju,
  createSSRApp: Hd,
  createSlots: Uh,
  createStaticVNode: Gs,
  createTextVNode: We,
  createVNode: fe,
  customRef: ru,
  defineAsyncComponent: Ph,
  defineComponent: wl,
  defineCustomElement: Ut,
  defineEmits: Yh,
  defineExpose: Xh,
  defineModel: em,
  defineOptions: Qh,
  defineProps: Jh,
  defineSSRCustomElement: Vg,
  defineSlots: Zh,
  devtools: og,
  effect: mp,
  effectScope: pp,
  getCurrentInstance: mt,
  getCurrentScope: ul,
  getCurrentWatcher: Gp,
  getTransitionRawChildren: zi,
  guardReactiveProps: pd,
  h: xd,
  handleError: Wn,
  hasInjectionContext: gm,
  hydrate: Jg,
  hydrateOnIdle: $h,
  hydrateOnInteraction: Ih,
  hydrateOnMediaQuery: Vh,
  hydrateOnVisible: Ah,
  initCustomFormatter: Nd,
  initDirectivesForSSR: Yg,
  inject: uo,
  isMemoSame: Sd,
  isProxy: Ds,
  isReactive: bn,
  isReadonly: en,
  isRef: Ue,
  isRuntimeOnly: Vl,
  isShallow: ft,
  isVNode: dn,
  markRaw: su,
  mergeDefaults: om,
  mergeModels: im,
  mergeProps: md,
  nextTick: xn,
  normalizeClass: be,
  normalizeProps: ep,
  normalizeStyle: Ve,
  onActivated: Ou,
  onBeforeMount: Du,
  onBeforeUnmount: Ks,
  onBeforeUpdate: xl,
  onDeactivated: Tu,
  onErrorCaptured: Mu,
  onMounted: rt,
  onRenderTracked: Iu,
  onRenderTriggered: Vu,
  onScopeDispose: Bc,
  onServerPrefetch: Au,
  onUnmounted: tn,
  onUpdated: Ki,
  onWatcherCleanup: au,
  openBlock: E,
  popScopeId: gh,
  provide: Bu,
  proxyRefs: hl,
  pushScopeId: mh,
  queuePostFlushCb: As,
  reactive: $s,
  readonly: Bi,
  ref: X,
  registerRuntimeCompiler: bd,
  render: jd,
  renderList: we,
  renderSlot: kl,
  resolveComponent: jh,
  resolveDirective: Hh,
  resolveDynamicComponent: Pu,
  resolveFilter: ag,
  resolveTransitionHooks: Vs,
  setBlockTracking: Ir,
  setDevtoolsHook: ig,
  setTransitionHooks: Nn,
  shallowReactive: nu,
  shallowReadonly: Kt,
  shallowRef: ou,
  ssrContextKey: ed,
  ssrUtils: lg,
  stop: gp,
  toDisplayString: Q,
  toHandlerKey: ln,
  toHandlers: qh,
  toRaw: he,
  toRef: Up,
  toRefs: Bp,
  toValue: Rp,
  transformVNodeArgs: Km,
  triggerRef: Pp,
  unref: Do,
  useAttrs: sm,
  useCssModule: Pg,
  useCssVars: bg,
  useHost: zr,
  useId: _h,
  useModel: Mm,
  useSSRContext: td,
  useShadowRoot: Mg,
  useSlots: nm,
  useTemplateRef: wh,
  useTransitionState: bl,
  vModelCheckbox: Ke,
  vModelDynamic: Pd,
  vModelRadio: Ml,
  vModelSelect: Ls,
  vModelText: Rs,
  vShow: Il,
  version: jr,
  warn: He,
  watch: Lt,
  watchEffect: Am,
  watchPostEffect: Vm,
  watchSyncEffect: nd,
  withAsyncContext: lm,
  withCtx: Re,
  withDefaults: tm,
  withDirectives: Le,
  withKeys: Wr,
  withMemo: ng,
  withModifiers: It,
  withScopeId: vh
}, Symbol.toStringTag, { value: "Module" }));
var ne = {};
const No = Symbol(ne.NODE_ENV !== "production" ? "Fragment" : ""), go = Symbol(ne.NODE_ENV !== "production" ? "Teleport" : ""), Pl = Symbol(ne.NODE_ENV !== "production" ? "Suspense" : ""), Ni = Symbol(ne.NODE_ENV !== "production" ? "KeepAlive" : ""), Kd = Symbol(
  ne.NODE_ENV !== "production" ? "BaseTransition" : ""
), ps = Symbol(ne.NODE_ENV !== "production" ? "openBlock" : ""), Gd = Symbol(ne.NODE_ENV !== "production" ? "createBlock" : ""), Jd = Symbol(
  ne.NODE_ENV !== "production" ? "createElementBlock" : ""
), Rl = Symbol(ne.NODE_ENV !== "production" ? "createVNode" : ""), Ll = Symbol(
  ne.NODE_ENV !== "production" ? "createElementVNode" : ""
), Mo = Symbol(
  ne.NODE_ENV !== "production" ? "createCommentVNode" : ""
), Fl = Symbol(
  ne.NODE_ENV !== "production" ? "createTextVNode" : ""
), Yd = Symbol(
  ne.NODE_ENV !== "production" ? "createStaticVNode" : ""
), Bl = Symbol(
  ne.NODE_ENV !== "production" ? "resolveComponent" : ""
), jl = Symbol(
  ne.NODE_ENV !== "production" ? "resolveDynamicComponent" : ""
), Hl = Symbol(
  ne.NODE_ENV !== "production" ? "resolveDirective" : ""
), Ul = Symbol(
  ne.NODE_ENV !== "production" ? "resolveFilter" : ""
), ql = Symbol(
  ne.NODE_ENV !== "production" ? "withDirectives" : ""
), zl = Symbol(ne.NODE_ENV !== "production" ? "renderList" : ""), Xd = Symbol(ne.NODE_ENV !== "production" ? "renderSlot" : ""), Qd = Symbol(ne.NODE_ENV !== "production" ? "createSlots" : ""), Zi = Symbol(
  ne.NODE_ENV !== "production" ? "toDisplayString" : ""
), Si = Symbol(ne.NODE_ENV !== "production" ? "mergeProps" : ""), Wl = Symbol(
  ne.NODE_ENV !== "production" ? "normalizeClass" : ""
), Kl = Symbol(
  ne.NODE_ENV !== "production" ? "normalizeStyle" : ""
), So = Symbol(
  ne.NODE_ENV !== "production" ? "normalizeProps" : ""
), Po = Symbol(
  ne.NODE_ENV !== "production" ? "guardReactiveProps" : ""
), Gl = Symbol(ne.NODE_ENV !== "production" ? "toHandlers" : ""), Kr = Symbol(ne.NODE_ENV !== "production" ? "camelize" : ""), Qg = Symbol(ne.NODE_ENV !== "production" ? "capitalize" : ""), Gr = Symbol(
  ne.NODE_ENV !== "production" ? "toHandlerKey" : ""
), ki = Symbol(
  ne.NODE_ENV !== "production" ? "setBlockTracking" : ""
), Zg = Symbol(ne.NODE_ENV !== "production" ? "pushScopeId" : ""), e0 = Symbol(ne.NODE_ENV !== "production" ? "popScopeId" : ""), Jl = Symbol(ne.NODE_ENV !== "production" ? "withCtx" : ""), t0 = Symbol(ne.NODE_ENV !== "production" ? "unref" : ""), n0 = Symbol(ne.NODE_ENV !== "production" ? "isRef" : ""), Yl = Symbol(ne.NODE_ENV !== "production" ? "withMemo" : ""), Zd = Symbol(ne.NODE_ENV !== "production" ? "isMemoSame" : ""), Bs = {
  [No]: "Fragment",
  [go]: "Teleport",
  [Pl]: "Suspense",
  [Ni]: "KeepAlive",
  [Kd]: "BaseTransition",
  [ps]: "openBlock",
  [Gd]: "createBlock",
  [Jd]: "createElementBlock",
  [Rl]: "createVNode",
  [Ll]: "createElementVNode",
  [Mo]: "createCommentVNode",
  [Fl]: "createTextVNode",
  [Yd]: "createStaticVNode",
  [Bl]: "resolveComponent",
  [jl]: "resolveDynamicComponent",
  [Hl]: "resolveDirective",
  [Ul]: "resolveFilter",
  [ql]: "withDirectives",
  [zl]: "renderList",
  [Xd]: "renderSlot",
  [Qd]: "createSlots",
  [Zi]: "toDisplayString",
  [Si]: "mergeProps",
  [Wl]: "normalizeClass",
  [Kl]: "normalizeStyle",
  [So]: "normalizeProps",
  [Po]: "guardReactiveProps",
  [Gl]: "toHandlers",
  [Kr]: "camelize",
  [Qg]: "capitalize",
  [Gr]: "toHandlerKey",
  [ki]: "setBlockTracking",
  [Zg]: "pushScopeId",
  [e0]: "popScopeId",
  [Jl]: "withCtx",
  [t0]: "unref",
  [n0]: "isRef",
  [Yl]: "withMemo",
  [Zd]: "isMemoSame"
};
function s0(e) {
  Object.getOwnPropertySymbols(e).forEach((t) => {
    Bs[t] = e[t];
  });
}
const Mt = {
  start: { line: 1, column: 1, offset: 0 },
  end: { line: 1, column: 1, offset: 0 },
  source: ""
};
function o0(e, t = "") {
  return {
    type: 0,
    source: t,
    children: e,
    helpers: /* @__PURE__ */ new Set(),
    components: [],
    directives: [],
    hoists: [],
    imports: [],
    cached: [],
    temps: 0,
    codegenNode: void 0,
    loc: Mt
  };
}
function ko(e, t, n, s, o, i, r, l = !1, a = !1, u = !1, f = Mt) {
  return e && (l ? (e.helper(ps), e.helper(Us(e.inSSR, u))) : e.helper(Hs(e.inSSR, u)), r && e.helper(ql)), {
    type: 13,
    tag: t,
    props: n,
    children: s,
    patchFlag: o,
    dynamicProps: i,
    directives: r,
    isBlock: l,
    disableTracking: a,
    isComponent: u,
    loc: f
  };
}
function as(e, t = Mt) {
  return {
    type: 17,
    loc: t,
    elements: e
  };
}
function Rt(e, t = Mt) {
  return {
    type: 15,
    loc: t,
    properties: e
  };
}
function ze(e, t) {
  return {
    type: 16,
    loc: Mt,
    key: de(e) ? me(e, !0) : e,
    value: t
  };
}
function me(e, t = !1, n = Mt, s = 0) {
  return {
    type: 4,
    loc: n,
    content: e,
    isStatic: t,
    constType: t ? 3 : s
  };
}
function Xt(e, t = Mt) {
  return {
    type: 8,
    loc: t,
    children: e
  };
}
function Qe(e, t = [], n = Mt) {
  return {
    type: 14,
    loc: n,
    callee: e,
    arguments: t
  };
}
function js(e, t = void 0, n = !1, s = !1, o = Mt) {
  return {
    type: 18,
    params: e,
    returns: t,
    newline: n,
    isSlot: s,
    loc: o
  };
}
function Jr(e, t, n, s = !0) {
  return {
    type: 19,
    test: e,
    consequent: t,
    alternate: n,
    newline: s,
    loc: Mt
  };
}
function i0(e, t, n = !1, s = !1) {
  return {
    type: 20,
    index: e,
    value: t,
    needPauseTracking: n,
    inVOnce: s,
    needArraySpread: !1,
    loc: Mt
  };
}
function r0(e) {
  return {
    type: 21,
    body: e,
    loc: Mt
  };
}
function Hs(e, t) {
  return e || t ? Rl : Ll;
}
function Us(e, t) {
  return e || t ? Gd : Jd;
}
function Xl(e, { helper: t, removeHelper: n, inSSR: s }) {
  e.isBlock || (e.isBlock = !0, n(Hs(s, e.isComponent)), t(ps), t(Us(s, e.isComponent)));
}
const oc = new Uint8Array([123, 123]), ic = new Uint8Array([125, 125]);
function rc(e) {
  return e >= 97 && e <= 122 || e >= 65 && e <= 90;
}
function At(e) {
  return e === 32 || e === 10 || e === 9 || e === 12 || e === 13;
}
function $n(e) {
  return e === 47 || e === 62 || At(e);
}
function Ci(e) {
  const t = new Uint8Array(e.length);
  for (let n = 0; n < e.length; n++)
    t[n] = e.charCodeAt(n);
  return t;
}
const nt = {
  Cdata: new Uint8Array([67, 68, 65, 84, 65, 91]),
  // CDATA[
  CdataEnd: new Uint8Array([93, 93, 62]),
  // ]]>
  CommentEnd: new Uint8Array([45, 45, 62]),
  // `-->`
  ScriptEnd: new Uint8Array([60, 47, 115, 99, 114, 105, 112, 116]),
  // `<\/script`
  StyleEnd: new Uint8Array([60, 47, 115, 116, 121, 108, 101]),
  // `</style`
  TitleEnd: new Uint8Array([60, 47, 116, 105, 116, 108, 101]),
  // `</title`
  TextareaEnd: new Uint8Array([
    60,
    47,
    116,
    101,
    120,
    116,
    97,
    114,
    101,
    97
  ])
  // `</textarea
};
class l0 {
  constructor(t, n) {
    this.stack = t, this.cbs = n, this.state = 1, this.buffer = "", this.sectionStart = 0, this.index = 0, this.entityStart = 0, this.baseState = 1, this.inRCDATA = !1, this.inXML = !1, this.inVPre = !1, this.newlines = [], this.mode = 0, this.delimiterOpen = oc, this.delimiterClose = ic, this.delimiterIndex = -1, this.currentSequence = void 0, this.sequenceIndex = 0;
  }
  get inSFCRoot() {
    return this.mode === 2 && this.stack.length === 0;
  }
  reset() {
    this.state = 1, this.mode = 0, this.buffer = "", this.sectionStart = 0, this.index = 0, this.baseState = 1, this.inRCDATA = !1, this.currentSequence = void 0, this.newlines.length = 0, this.delimiterOpen = oc, this.delimiterClose = ic;
  }
  /**
   * Generate Position object with line / column information using recorded
   * newline positions. We know the index is always going to be an already
   * processed index, so all the newlines up to this index should have been
   * recorded.
   */
  getPos(t) {
    let n = 1, s = t + 1;
    for (let o = this.newlines.length - 1; o >= 0; o--) {
      const i = this.newlines[o];
      if (t > i) {
        n = o + 2, s = t - i;
        break;
      }
    }
    return {
      column: s,
      line: n,
      offset: t
    };
  }
  peek() {
    return this.buffer.charCodeAt(this.index + 1);
  }
  stateText(t) {
    t === 60 ? (this.index > this.sectionStart && this.cbs.ontext(this.sectionStart, this.index), this.state = 5, this.sectionStart = this.index) : !this.inVPre && t === this.delimiterOpen[0] && (this.state = 2, this.delimiterIndex = 0, this.stateInterpolationOpen(t));
  }
  stateInterpolationOpen(t) {
    if (t === this.delimiterOpen[this.delimiterIndex])
      if (this.delimiterIndex === this.delimiterOpen.length - 1) {
        const n = this.index + 1 - this.delimiterOpen.length;
        n > this.sectionStart && this.cbs.ontext(this.sectionStart, n), this.state = 3, this.sectionStart = n;
      } else
        this.delimiterIndex++;
    else this.inRCDATA ? (this.state = 32, this.stateInRCDATA(t)) : (this.state = 1, this.stateText(t));
  }
  stateInterpolation(t) {
    t === this.delimiterClose[0] && (this.state = 4, this.delimiterIndex = 0, this.stateInterpolationClose(t));
  }
  stateInterpolationClose(t) {
    t === this.delimiterClose[this.delimiterIndex] ? this.delimiterIndex === this.delimiterClose.length - 1 ? (this.cbs.oninterpolation(this.sectionStart, this.index + 1), this.inRCDATA ? this.state = 32 : this.state = 1, this.sectionStart = this.index + 1) : this.delimiterIndex++ : (this.state = 3, this.stateInterpolation(t));
  }
  stateSpecialStartSequence(t) {
    const n = this.sequenceIndex === this.currentSequence.length;
    if (!(n ? (
      // If we are at the end of the sequence, make sure the tag name has ended
      $n(t)
    ) : (
      // Otherwise, do a case-insensitive comparison
      (t | 32) === this.currentSequence[this.sequenceIndex]
    )))
      this.inRCDATA = !1;
    else if (!n) {
      this.sequenceIndex++;
      return;
    }
    this.sequenceIndex = 0, this.state = 6, this.stateInTagName(t);
  }
  /** Look for an end tag. For <title> and <textarea>, also decode entities. */
  stateInRCDATA(t) {
    if (this.sequenceIndex === this.currentSequence.length) {
      if (t === 62 || At(t)) {
        const n = this.index - this.currentSequence.length;
        if (this.sectionStart < n) {
          const s = this.index;
          this.index = n, this.cbs.ontext(this.sectionStart, n), this.index = s;
        }
        this.sectionStart = n + 2, this.stateInClosingTagName(t), this.inRCDATA = !1;
        return;
      }
      this.sequenceIndex = 0;
    }
    (t | 32) === this.currentSequence[this.sequenceIndex] ? this.sequenceIndex += 1 : this.sequenceIndex === 0 ? this.currentSequence === nt.TitleEnd || this.currentSequence === nt.TextareaEnd && !this.inSFCRoot ? !this.inVPre && t === this.delimiterOpen[0] && (this.state = 2, this.delimiterIndex = 0, this.stateInterpolationOpen(t)) : this.fastForwardTo(60) && (this.sequenceIndex = 1) : this.sequenceIndex = +(t === 60);
  }
  stateCDATASequence(t) {
    t === nt.Cdata[this.sequenceIndex] ? ++this.sequenceIndex === nt.Cdata.length && (this.state = 28, this.currentSequence = nt.CdataEnd, this.sequenceIndex = 0, this.sectionStart = this.index + 1) : (this.sequenceIndex = 0, this.state = 23, this.stateInDeclaration(t));
  }
  /**
   * When we wait for one specific character, we can speed things up
   * by skipping through the buffer until we find it.
   *
   * @returns Whether the character was found.
   */
  fastForwardTo(t) {
    for (; ++this.index < this.buffer.length; ) {
      const n = this.buffer.charCodeAt(this.index);
      if (n === 10 && this.newlines.push(this.index), n === t)
        return !0;
    }
    return this.index = this.buffer.length - 1, !1;
  }
  /**
   * Comments and CDATA end with `-->` and `]]>`.
   *
   * Their common qualities are:
   * - Their end sequences have a distinct character they start with.
   * - That character is then repeated, so we have to check multiple repeats.
   * - All characters but the start character of the sequence can be skipped.
   */
  stateInCommentLike(t) {
    t === this.currentSequence[this.sequenceIndex] ? ++this.sequenceIndex === this.currentSequence.length && (this.currentSequence === nt.CdataEnd ? this.cbs.oncdata(this.sectionStart, this.index - 2) : this.cbs.oncomment(this.sectionStart, this.index - 2), this.sequenceIndex = 0, this.sectionStart = this.index + 1, this.state = 1) : this.sequenceIndex === 0 ? this.fastForwardTo(this.currentSequence[0]) && (this.sequenceIndex = 1) : t !== this.currentSequence[this.sequenceIndex - 1] && (this.sequenceIndex = 0);
  }
  startSpecial(t, n) {
    this.enterRCDATA(t, n), this.state = 31;
  }
  enterRCDATA(t, n) {
    this.inRCDATA = !0, this.currentSequence = t, this.sequenceIndex = n;
  }
  stateBeforeTagName(t) {
    t === 33 ? (this.state = 22, this.sectionStart = this.index + 1) : t === 63 ? (this.state = 24, this.sectionStart = this.index + 1) : rc(t) ? (this.sectionStart = this.index, this.mode === 0 ? this.state = 6 : this.inSFCRoot ? this.state = 34 : this.inXML ? this.state = 6 : t === 116 ? this.state = 30 : this.state = t === 115 ? 29 : 6) : t === 47 ? this.state = 8 : (this.state = 1, this.stateText(t));
  }
  stateInTagName(t) {
    $n(t) && this.handleTagName(t);
  }
  stateInSFCRootTagName(t) {
    if ($n(t)) {
      const n = this.buffer.slice(this.sectionStart, this.index);
      n !== "template" && this.enterRCDATA(Ci("</" + n), 0), this.handleTagName(t);
    }
  }
  handleTagName(t) {
    this.cbs.onopentagname(this.sectionStart, this.index), this.sectionStart = -1, this.state = 11, this.stateBeforeAttrName(t);
  }
  stateBeforeClosingTagName(t) {
    At(t) || (t === 62 ? (ne.NODE_ENV !== "production" && this.cbs.onerr(14, this.index), this.state = 1, this.sectionStart = this.index + 1) : (this.state = rc(t) ? 9 : 27, this.sectionStart = this.index));
  }
  stateInClosingTagName(t) {
    (t === 62 || At(t)) && (this.cbs.onclosetag(this.sectionStart, this.index), this.sectionStart = -1, this.state = 10, this.stateAfterClosingTagName(t));
  }
  stateAfterClosingTagName(t) {
    t === 62 && (this.state = 1, this.sectionStart = this.index + 1);
  }
  stateBeforeAttrName(t) {
    t === 62 ? (this.cbs.onopentagend(this.index), this.inRCDATA ? this.state = 32 : this.state = 1, this.sectionStart = this.index + 1) : t === 47 ? (this.state = 7, ne.NODE_ENV !== "production" && this.peek() !== 62 && this.cbs.onerr(22, this.index)) : t === 60 && this.peek() === 47 ? (this.cbs.onopentagend(this.index), this.state = 5, this.sectionStart = this.index) : At(t) || (ne.NODE_ENV !== "production" && t === 61 && this.cbs.onerr(
      19,
      this.index
    ), this.handleAttrStart(t));
  }
  handleAttrStart(t) {
    t === 118 && this.peek() === 45 ? (this.state = 13, this.sectionStart = this.index) : t === 46 || t === 58 || t === 64 || t === 35 ? (this.cbs.ondirname(this.index, this.index + 1), this.state = 14, this.sectionStart = this.index + 1) : (this.state = 12, this.sectionStart = this.index);
  }
  stateInSelfClosingTag(t) {
    t === 62 ? (this.cbs.onselfclosingtag(this.index), this.state = 1, this.sectionStart = this.index + 1, this.inRCDATA = !1) : At(t) || (this.state = 11, this.stateBeforeAttrName(t));
  }
  stateInAttrName(t) {
    t === 61 || $n(t) ? (this.cbs.onattribname(this.sectionStart, this.index), this.handleAttrNameEnd(t)) : ne.NODE_ENV !== "production" && (t === 34 || t === 39 || t === 60) && this.cbs.onerr(
      17,
      this.index
    );
  }
  stateInDirName(t) {
    t === 61 || $n(t) ? (this.cbs.ondirname(this.sectionStart, this.index), this.handleAttrNameEnd(t)) : t === 58 ? (this.cbs.ondirname(this.sectionStart, this.index), this.state = 14, this.sectionStart = this.index + 1) : t === 46 && (this.cbs.ondirname(this.sectionStart, this.index), this.state = 16, this.sectionStart = this.index + 1);
  }
  stateInDirArg(t) {
    t === 61 || $n(t) ? (this.cbs.ondirarg(this.sectionStart, this.index), this.handleAttrNameEnd(t)) : t === 91 ? this.state = 15 : t === 46 && (this.cbs.ondirarg(this.sectionStart, this.index), this.state = 16, this.sectionStart = this.index + 1);
  }
  stateInDynamicDirArg(t) {
    t === 93 ? this.state = 14 : (t === 61 || $n(t)) && (this.cbs.ondirarg(this.sectionStart, this.index + 1), this.handleAttrNameEnd(t), ne.NODE_ENV !== "production" && this.cbs.onerr(
      27,
      this.index
    ));
  }
  stateInDirModifier(t) {
    t === 61 || $n(t) ? (this.cbs.ondirmodifier(this.sectionStart, this.index), this.handleAttrNameEnd(t)) : t === 46 && (this.cbs.ondirmodifier(this.sectionStart, this.index), this.sectionStart = this.index + 1);
  }
  handleAttrNameEnd(t) {
    this.sectionStart = this.index, this.state = 17, this.cbs.onattribnameend(this.index), this.stateAfterAttrName(t);
  }
  stateAfterAttrName(t) {
    t === 61 ? this.state = 18 : t === 47 || t === 62 ? (this.cbs.onattribend(0, this.sectionStart), this.sectionStart = -1, this.state = 11, this.stateBeforeAttrName(t)) : At(t) || (this.cbs.onattribend(0, this.sectionStart), this.handleAttrStart(t));
  }
  stateBeforeAttrValue(t) {
    t === 34 ? (this.state = 19, this.sectionStart = this.index + 1) : t === 39 ? (this.state = 20, this.sectionStart = this.index + 1) : At(t) || (this.sectionStart = this.index, this.state = 21, this.stateInAttrValueNoQuotes(t));
  }
  handleInAttrValue(t, n) {
    (t === n || this.fastForwardTo(n)) && (this.cbs.onattribdata(this.sectionStart, this.index), this.sectionStart = -1, this.cbs.onattribend(
      n === 34 ? 3 : 2,
      this.index + 1
    ), this.state = 11);
  }
  stateInAttrValueDoubleQuotes(t) {
    this.handleInAttrValue(t, 34);
  }
  stateInAttrValueSingleQuotes(t) {
    this.handleInAttrValue(t, 39);
  }
  stateInAttrValueNoQuotes(t) {
    At(t) || t === 62 ? (this.cbs.onattribdata(this.sectionStart, this.index), this.sectionStart = -1, this.cbs.onattribend(1, this.index), this.state = 11, this.stateBeforeAttrName(t)) : (ne.NODE_ENV !== "production" && t === 34 || t === 39 || t === 60 || t === 61 || t === 96) && this.cbs.onerr(
      18,
      this.index
    );
  }
  stateBeforeDeclaration(t) {
    t === 91 ? (this.state = 26, this.sequenceIndex = 0) : this.state = t === 45 ? 25 : 23;
  }
  stateInDeclaration(t) {
    (t === 62 || this.fastForwardTo(62)) && (this.state = 1, this.sectionStart = this.index + 1);
  }
  stateInProcessingInstruction(t) {
    (t === 62 || this.fastForwardTo(62)) && (this.cbs.onprocessinginstruction(this.sectionStart, this.index), this.state = 1, this.sectionStart = this.index + 1);
  }
  stateBeforeComment(t) {
    t === 45 ? (this.state = 28, this.currentSequence = nt.CommentEnd, this.sequenceIndex = 2, this.sectionStart = this.index + 1) : this.state = 23;
  }
  stateInSpecialComment(t) {
    (t === 62 || this.fastForwardTo(62)) && (this.cbs.oncomment(this.sectionStart, this.index), this.state = 1, this.sectionStart = this.index + 1);
  }
  stateBeforeSpecialS(t) {
    t === nt.ScriptEnd[3] ? this.startSpecial(nt.ScriptEnd, 4) : t === nt.StyleEnd[3] ? this.startSpecial(nt.StyleEnd, 4) : (this.state = 6, this.stateInTagName(t));
  }
  stateBeforeSpecialT(t) {
    t === nt.TitleEnd[3] ? this.startSpecial(nt.TitleEnd, 4) : t === nt.TextareaEnd[3] ? this.startSpecial(nt.TextareaEnd, 4) : (this.state = 6, this.stateInTagName(t));
  }
  startEntity() {
  }
  stateInEntity() {
  }
  /**
   * Iterates through the buffer, calling the function corresponding to the current state.
   *
   * States that are more likely to be hit are higher up, as a performance improvement.
   */
  parse(t) {
    for (this.buffer = t; this.index < this.buffer.length; ) {
      const n = this.buffer.charCodeAt(this.index);
      switch (n === 10 && this.state !== 33 && this.newlines.push(this.index), this.state) {
        case 1: {
          this.stateText(n);
          break;
        }
        case 2: {
          this.stateInterpolationOpen(n);
          break;
        }
        case 3: {
          this.stateInterpolation(n);
          break;
        }
        case 4: {
          this.stateInterpolationClose(n);
          break;
        }
        case 31: {
          this.stateSpecialStartSequence(n);
          break;
        }
        case 32: {
          this.stateInRCDATA(n);
          break;
        }
        case 26: {
          this.stateCDATASequence(n);
          break;
        }
        case 19: {
          this.stateInAttrValueDoubleQuotes(n);
          break;
        }
        case 12: {
          this.stateInAttrName(n);
          break;
        }
        case 13: {
          this.stateInDirName(n);
          break;
        }
        case 14: {
          this.stateInDirArg(n);
          break;
        }
        case 15: {
          this.stateInDynamicDirArg(n);
          break;
        }
        case 16: {
          this.stateInDirModifier(n);
          break;
        }
        case 28: {
          this.stateInCommentLike(n);
          break;
        }
        case 27: {
          this.stateInSpecialComment(n);
          break;
        }
        case 11: {
          this.stateBeforeAttrName(n);
          break;
        }
        case 6: {
          this.stateInTagName(n);
          break;
        }
        case 34: {
          this.stateInSFCRootTagName(n);
          break;
        }
        case 9: {
          this.stateInClosingTagName(n);
          break;
        }
        case 5: {
          this.stateBeforeTagName(n);
          break;
        }
        case 17: {
          this.stateAfterAttrName(n);
          break;
        }
        case 20: {
          this.stateInAttrValueSingleQuotes(n);
          break;
        }
        case 18: {
          this.stateBeforeAttrValue(n);
          break;
        }
        case 8: {
          this.stateBeforeClosingTagName(n);
          break;
        }
        case 10: {
          this.stateAfterClosingTagName(n);
          break;
        }
        case 29: {
          this.stateBeforeSpecialS(n);
          break;
        }
        case 30: {
          this.stateBeforeSpecialT(n);
          break;
        }
        case 21: {
          this.stateInAttrValueNoQuotes(n);
          break;
        }
        case 7: {
          this.stateInSelfClosingTag(n);
          break;
        }
        case 23: {
          this.stateInDeclaration(n);
          break;
        }
        case 22: {
          this.stateBeforeDeclaration(n);
          break;
        }
        case 25: {
          this.stateBeforeComment(n);
          break;
        }
        case 24: {
          this.stateInProcessingInstruction(n);
          break;
        }
        case 33: {
          this.stateInEntity();
          break;
        }
      }
      this.index++;
    }
    this.cleanup(), this.finish();
  }
  /**
   * Remove data that has already been consumed from the buffer.
   */
  cleanup() {
    this.sectionStart !== this.index && (this.state === 1 || this.state === 32 && this.sequenceIndex === 0 ? (this.cbs.ontext(this.sectionStart, this.index), this.sectionStart = this.index) : (this.state === 19 || this.state === 20 || this.state === 21) && (this.cbs.onattribdata(this.sectionStart, this.index), this.sectionStart = this.index));
  }
  finish() {
    this.handleTrailingData(), this.cbs.onend();
  }
  /** Handle any trailing data. */
  handleTrailingData() {
    const t = this.buffer.length;
    this.sectionStart >= t || (this.state === 28 ? this.currentSequence === nt.CdataEnd ? this.cbs.oncdata(this.sectionStart, t) : this.cbs.oncomment(this.sectionStart, t) : this.state === 6 || this.state === 11 || this.state === 18 || this.state === 17 || this.state === 12 || this.state === 13 || this.state === 14 || this.state === 15 || this.state === 16 || this.state === 20 || this.state === 19 || this.state === 21 || this.state === 9 || this.cbs.ontext(this.sectionStart, t));
  }
  emitCodePoint(t, n) {
  }
}
const a0 = {
  COMPILER_IS_ON_ELEMENT: {
    message: 'Platform-native elements with "is" prop will no longer be treated as components in Vue 3 unless the "is" value is explicitly prefixed with "vue:".',
    link: "https://v3-migration.vuejs.org/breaking-changes/custom-elements-interop.html"
  },
  COMPILER_V_BIND_SYNC: {
    message: (e) => `.sync modifier for v-bind has been removed. Use v-model with argument instead. \`v-bind:${e}.sync\` should be changed to \`v-model:${e}\`.`,
    link: "https://v3-migration.vuejs.org/breaking-changes/v-model.html"
  },
  COMPILER_V_BIND_OBJECT_ORDER: {
    message: 'v-bind="obj" usage is now order sensitive and behaves like JavaScript object spread: it will now overwrite an existing non-mergeable attribute that appears before v-bind in the case of conflict. To retain 2.x behavior, move v-bind to make it the first attribute. You can also suppress this warning if the usage is intended.',
    link: "https://v3-migration.vuejs.org/breaking-changes/v-bind.html"
  },
  COMPILER_V_ON_NATIVE: {
    message: ".native modifier for v-on has been removed as is no longer necessary.",
    link: "https://v3-migration.vuejs.org/breaking-changes/v-on-native-modifier-removed.html"
  },
  COMPILER_V_IF_V_FOR_PRECEDENCE: {
    message: "v-if / v-for precedence when used on the same element has changed in Vue 3: v-if now takes higher precedence and will no longer have access to v-for scope variables. It is best to avoid the ambiguity with <template> tags or use a computed property that filters v-for data source.",
    link: "https://v3-migration.vuejs.org/breaking-changes/v-if-v-for.html"
  },
  COMPILER_NATIVE_TEMPLATE: {
    message: "<template> with no special directives will render as a native template element instead of its inner content in Vue 3."
  },
  COMPILER_INLINE_TEMPLATE: {
    message: '"inline-template" has been removed in Vue 3.',
    link: "https://v3-migration.vuejs.org/breaking-changes/inline-template-attribute.html"
  },
  COMPILER_FILTERS: {
    message: 'filters have been removed in Vue 3. The "|" symbol will be treated as native JavaScript bitwise OR operator. Use method calls or computed properties instead.',
    link: "https://v3-migration.vuejs.org/breaking-changes/filters.html"
  }
};
function Yr(e, { compatConfig: t }) {
  const n = t && t[e];
  return e === "MODE" ? n || 3 : n;
}
function Un(e, t) {
  const n = Yr("MODE", t), s = Yr(e, t);
  return n === 3 ? s === !0 : s !== !1;
}
function qs(e, t, n, ...s) {
  const o = Un(e, t);
  return ne.NODE_ENV !== "production" && o && Oi(e, t, n, ...s), o;
}
function Oi(e, t, n, ...s) {
  if (Yr(e, t) === "suppress-warning")
    return;
  const { message: i, link: r } = a0[e], l = `(deprecation ${e}) ${typeof i == "function" ? i(...s) : i}${r ? `
  Details: ${r}` : ""}`, a = new SyntaxError(l);
  a.code = e, n && (a.loc = n), t.onWarn(a);
}
function Ql(e) {
  throw e;
}
function ef(e) {
  ne.NODE_ENV !== "production" && console.warn(`[Vue warn] ${e.message}`);
}
function $e(e, t, n, s) {
  const o = ne.NODE_ENV !== "production" ? (n || c0)[e] + (s || "") : `https://vuejs.org/error-reference/#compiler-${e}`, i = new SyntaxError(String(o));
  return i.code = e, i.loc = t, i;
}
const c0 = {
  // parse errors
  0: "Illegal comment.",
  1: "CDATA section is allowed only in XML context.",
  2: "Duplicate attribute.",
  3: "End tag cannot have attributes.",
  4: "Illegal '/' in tags.",
  5: "Unexpected EOF in tag.",
  6: "Unexpected EOF in CDATA section.",
  7: "Unexpected EOF in comment.",
  8: "Unexpected EOF in script.",
  9: "Unexpected EOF in tag.",
  10: "Incorrectly closed comment.",
  11: "Incorrectly opened comment.",
  12: "Illegal tag name. Use '&lt;' to print '<'.",
  13: "Attribute value was expected.",
  14: "End tag name was expected.",
  15: "Whitespace was expected.",
  16: "Unexpected '<!--' in comment.",
  17: `Attribute name cannot contain U+0022 ("), U+0027 ('), and U+003C (<).`,
  18: "Unquoted attribute value cannot contain U+0022 (\"), U+0027 ('), U+003C (<), U+003D (=), and U+0060 (`).",
  19: "Attribute name cannot start with '='.",
  21: "'<?' is allowed only in XML context.",
  20: "Unexpected null character.",
  22: "Illegal '/' in tags.",
  // Vue-specific parse errors
  23: "Invalid end tag.",
  24: "Element is missing end tag.",
  25: "Interpolation end sign was not found.",
  27: "End bracket for dynamic directive argument was not found. Note that dynamic directive argument cannot contain spaces.",
  26: "Legal directive name was expected.",
  // transform errors
  28: "v-if/v-else-if is missing expression.",
  29: "v-if/else branches must use unique keys.",
  30: "v-else/v-else-if has no adjacent v-if or v-else-if.",
  31: "v-for is missing expression.",
  32: "v-for has invalid expression.",
  33: "<template v-for> key should be placed on the <template> tag.",
  34: "v-bind is missing expression.",
  52: "v-bind with same-name shorthand only allows static argument.",
  35: "v-on is missing expression.",
  36: "Unexpected custom directive on <slot> outlet.",
  37: "Mixed v-slot usage on both the component and nested <template>. When there are multiple named slots, all slots should use <template> syntax to avoid scope ambiguity.",
  38: "Duplicate slot names found. ",
  39: "Extraneous children found when component already has explicitly named default slot. These children will be ignored.",
  40: "v-slot can only be used on components or <template> tags.",
  41: "v-model is missing expression.",
  42: "v-model value must be a valid JavaScript member expression.",
  43: "v-model cannot be used on v-for or v-slot scope variables because they are not writable.",
  44: `v-model cannot be used on a prop, because local prop bindings are not writable.
Use a v-bind binding combined with a v-on listener that emits update:x event instead.`,
  45: "Error parsing JavaScript expression: ",
  46: "<KeepAlive> expects exactly one child component.",
  51: "@vnode-* hooks in templates are no longer supported. Use the vue: prefix instead. For example, @vnode-mounted should be changed to @vue:mounted. @vnode-* hooks support has been removed in 3.4.",
  // generic errors
  47: '"prefixIdentifiers" option is not supported in this build of compiler.',
  48: "ES module mode is not supported in this build of compiler.",
  49: '"cacheHandlers" option is only supported when the "prefixIdentifiers" option is enabled.',
  50: '"scopeId" option is only supported in module mode.',
  // just to fulfill types
  53: ""
}, Ct = (e) => e.type === 4 && e.isStatic;
function tf(e) {
  switch (e) {
    case "Teleport":
    case "teleport":
      return go;
    case "Suspense":
    case "suspense":
      return Pl;
    case "KeepAlive":
    case "keep-alive":
      return Ni;
    case "BaseTransition":
    case "base-transition":
      return Kd;
  }
}
const u0 = /^$|^\d|[^\$\w\xA0-\uFFFF]/, Zl = (e) => !u0.test(e), d0 = /[A-Za-z_$\xA0-\uFFFF]/, f0 = /[\.\?\w$\xA0-\uFFFF]/, p0 = /\s+[.[]\s*|\s*[.[]\s+/g, nf = (e) => e.type === 4 ? e.content : e.loc.source, h0 = (e) => {
  const t = nf(e).trim().replace(p0, (l) => l.trim());
  let n = 0, s = [], o = 0, i = 0, r = null;
  for (let l = 0; l < t.length; l++) {
    const a = t.charAt(l);
    switch (n) {
      case 0:
        if (a === "[")
          s.push(n), n = 1, o++;
        else if (a === "(")
          s.push(n), n = 2, i++;
        else if (!(l === 0 ? d0 : f0).test(a))
          return !1;
        break;
      case 1:
        a === "'" || a === '"' || a === "`" ? (s.push(n), n = 3, r = a) : a === "[" ? o++ : a === "]" && (--o || (n = s.pop()));
        break;
      case 2:
        if (a === "'" || a === '"' || a === "`")
          s.push(n), n = 3, r = a;
        else if (a === "(")
          i++;
        else if (a === ")") {
          if (l === t.length - 1)
            return !1;
          --i || (n = s.pop());
        }
        break;
      case 3:
        a === r && (n = s.pop(), r = null);
        break;
    }
  }
  return !o && !i;
}, sf = h0, m0 = /^\s*(async\s*)?(\([^)]*?\)|[\w$_]+)\s*(:[^=]+)?=>|^\s*(async\s+)?function(?:\s+[\w$]+)?\s*\(/, g0 = (e) => m0.test(nf(e)), v0 = g0;
function lc(e, t) {
  if (!e)
    throw new Error(t || "unexpected compiler condition");
}
function kt(e, t, n = !1) {
  for (let s = 0; s < e.props.length; s++) {
    const o = e.props[s];
    if (o.type === 7 && (n || o.exp) && (de(t) ? o.name === t : t.test(o.name)))
      return o;
  }
}
function Co(e, t, n = !1, s = !1) {
  for (let o = 0; o < e.props.length; o++) {
    const i = e.props[o];
    if (i.type === 6) {
      if (n) continue;
      if (i.name === t && (i.value || s))
        return i;
    } else if (i.name === "bind" && (i.exp || s) && Fn(i.arg, t))
      return i;
  }
}
function Fn(e, t) {
  return !!(e && Ct(e) && e.content === t);
}
function y0(e) {
  return e.props.some(
    (t) => t.type === 7 && t.name === "bind" && (!t.arg || // v-bind="obj"
    t.arg.type !== 4 || // v-bind:[_ctx.foo]
    !t.arg.isStatic)
    // v-bind:[foo]
  );
}
function vr(e) {
  return e.type === 5 || e.type === 2;
}
function ac(e) {
  return e.type === 7 && e.name === "pre";
}
function b0(e) {
  return e.type === 7 && e.name === "slot";
}
function Ti(e) {
  return e.type === 1 && e.tagType === 3;
}
function $i(e) {
  return e.type === 1 && e.tagType === 2;
}
const _0 = /* @__PURE__ */ new Set([So, Po]);
function of(e, t = []) {
  if (e && !de(e) && e.type === 14) {
    const n = e.callee;
    if (!de(n) && _0.has(n))
      return of(
        e.arguments[0],
        t.concat(e)
      );
  }
  return [e, t];
}
function Di(e, t, n) {
  let s, o = e.type === 13 ? e.props : e.arguments[2], i = [], r;
  if (o && !de(o) && o.type === 14) {
    const l = of(o);
    o = l[0], i = l[1], r = i[i.length - 1];
  }
  if (o == null || de(o))
    s = Rt([t]);
  else if (o.type === 14) {
    const l = o.arguments[0];
    !de(l) && l.type === 15 ? cc(t, l) || l.properties.unshift(t) : o.callee === Gl ? s = Qe(n.helper(Si), [
      Rt([t]),
      o
    ]) : o.arguments.unshift(Rt([t])), !s && (s = o);
  } else o.type === 15 ? (cc(t, o) || o.properties.unshift(t), s = o) : (s = Qe(n.helper(Si), [
    Rt([t]),
    o
  ]), r && r.callee === Po && (r = i[i.length - 2]));
  e.type === 13 ? r ? r.arguments[0] = s : e.props = s : r ? r.arguments[0] = s : e.arguments[2] = s;
}
function cc(e, t) {
  let n = !1;
  if (e.key.type === 4) {
    const s = e.key.content;
    n = t.properties.some(
      (o) => o.key.type === 4 && o.key.content === s
    );
  }
  return n;
}
function Oo(e, t) {
  return `_${t}_${e.replace(/[^\w]/g, (n, s) => n === "-" ? "_" : e.charCodeAt(s).toString())}`;
}
function w0(e) {
  return e.type === 14 && e.callee === Yl ? e.arguments[1].returns : e;
}
const E0 = /([\s\S]*?)\s+(?:in|of)\s+(\S[\s\S]*)/, rf = {
  parseMode: "base",
  ns: 0,
  delimiters: ["{{", "}}"],
  getNamespace: () => 0,
  isVoidTag: eo,
  isPreTag: eo,
  isIgnoreNewlineTag: eo,
  isCustomElement: eo,
  onError: Ql,
  onWarn: ef,
  comments: ne.NODE_ENV !== "production",
  prefixIdentifiers: !1
};
let Ne = rf, To = null, _n = "", ct = null, _e = null, xt = "", mn = -1, Xn = -1, ea = 0, Pn = !1, Xr = null;
const je = [], Pe = new l0(je, {
  onerr: Et,
  ontext(e, t) {
    Wo(st(e, t), e, t);
  },
  ontextentity(e, t, n) {
    Wo(e, t, n);
  },
  oninterpolation(e, t) {
    if (Pn)
      return Wo(st(e, t), e, t);
    let n = e + Pe.delimiterOpen.length, s = t - Pe.delimiterClose.length;
    for (; At(_n.charCodeAt(n)); )
      n++;
    for (; At(_n.charCodeAt(s - 1)); )
      s--;
    let o = st(n, s);
    o.includes("&") && (o = Ne.decodeEntities(o, !1)), Qr({
      type: 5,
      content: ni(o, !1, Ge(n, s)),
      loc: Ge(e, t)
    });
  },
  onopentagname(e, t) {
    const n = st(e, t);
    ct = {
      type: 1,
      tag: n,
      ns: Ne.getNamespace(n, je[0], Ne.ns),
      tagType: 0,
      // will be refined on tag close
      props: [],
      children: [],
      loc: Ge(e - 1, t),
      codegenNode: void 0
    };
  },
  onopentagend(e) {
    dc(e);
  },
  onclosetag(e, t) {
    const n = st(e, t);
    if (!Ne.isVoidTag(n)) {
      let s = !1;
      for (let o = 0; o < je.length; o++)
        if (je[o].tag.toLowerCase() === n.toLowerCase()) {
          s = !0, o > 0 && Et(24, je[0].loc.start.offset);
          for (let r = 0; r <= o; r++) {
            const l = je.shift();
            ti(l, t, r < o);
          }
          break;
        }
      s || Et(23, lf(e, 60));
    }
  },
  onselfclosingtag(e) {
    const t = ct.tag;
    ct.isSelfClosing = !0, dc(e), je[0] && je[0].tag === t && ti(je.shift(), e);
  },
  onattribname(e, t) {
    _e = {
      type: 6,
      name: st(e, t),
      nameLoc: Ge(e, t),
      value: void 0,
      loc: Ge(e)
    };
  },
  ondirname(e, t) {
    const n = st(e, t), s = n === "." || n === ":" ? "bind" : n === "@" ? "on" : n === "#" ? "slot" : n.slice(2);
    if (!Pn && s === "" && Et(26, e), Pn || s === "")
      _e = {
        type: 6,
        name: n,
        nameLoc: Ge(e, t),
        value: void 0,
        loc: Ge(e)
      };
    else if (_e = {
      type: 7,
      name: s,
      rawName: n,
      exp: void 0,
      arg: void 0,
      modifiers: n === "." ? [me("prop")] : [],
      loc: Ge(e)
    }, s === "pre") {
      Pn = Pe.inVPre = !0, Xr = ct;
      const o = ct.props;
      for (let i = 0; i < o.length; i++)
        o[i].type === 7 && (o[i] = V0(o[i]));
    }
  },
  ondirarg(e, t) {
    if (e === t) return;
    const n = st(e, t);
    if (Pn && !ac(_e))
      _e.name += n, es(_e.nameLoc, t);
    else {
      const s = n[0] !== "[";
      _e.arg = ni(
        s ? n : n.slice(1, -1),
        s,
        Ge(e, t),
        s ? 3 : 0
      );
    }
  },
  ondirmodifier(e, t) {
    const n = st(e, t);
    if (Pn && !ac(_e))
      _e.name += "." + n, es(_e.nameLoc, t);
    else if (_e.name === "slot") {
      const s = _e.arg;
      s && (s.content += "." + n, es(s.loc, t));
    } else {
      const s = me(n, !0, Ge(e, t));
      _e.modifiers.push(s);
    }
  },
  onattribdata(e, t) {
    xt += st(e, t), mn < 0 && (mn = e), Xn = t;
  },
  onattribentity(e, t, n) {
    xt += e, mn < 0 && (mn = t), Xn = n;
  },
  onattribnameend(e) {
    const t = _e.loc.start.offset, n = st(t, e);
    _e.type === 7 && (_e.rawName = n), ct.props.some(
      (s) => (s.type === 7 ? s.rawName : s.name) === n
    ) && Et(2, t);
  },
  onattribend(e, t) {
    if (ct && _e) {
      if (es(_e.loc, t), e !== 0)
        if (xt.includes("&") && (xt = Ne.decodeEntities(
          xt,
          !0
        )), _e.type === 6)
          _e.name === "class" && (xt = cf(xt).trim()), e === 1 && !xt && Et(13, t), _e.value = {
            type: 2,
            content: xt,
            loc: e === 1 ? Ge(mn, Xn) : Ge(mn - 1, Xn + 1)
          }, Pe.inSFCRoot && ct.tag === "template" && _e.name === "lang" && xt && xt !== "html" && Pe.enterRCDATA(Ci("</template"), 0);
        else {
          let n = 0;
          _e.exp = ni(
            xt,
            !1,
            Ge(mn, Xn),
            0,
            n
          ), _e.name === "for" && (_e.forParseResult = N0(_e.exp));
          let s = -1;
          _e.name === "bind" && (s = _e.modifiers.findIndex(
            (o) => o.content === "sync"
          )) > -1 && qs(
            "COMPILER_V_BIND_SYNC",
            Ne,
            _e.loc,
            _e.arg.loc.source
          ) && (_e.name = "model", _e.modifiers.splice(s, 1));
        }
      (_e.type !== 7 || _e.name !== "pre") && ct.props.push(_e);
    }
    xt = "", mn = Xn = -1;
  },
  oncomment(e, t) {
    Ne.comments && Qr({
      type: 3,
      content: st(e, t),
      loc: Ge(e - 4, t + 3)
    });
  },
  onend() {
    const e = _n.length;
    if (ne.NODE_ENV !== "production" && Pe.state !== 1)
      switch (Pe.state) {
        case 5:
        case 8:
          Et(5, e);
          break;
        case 3:
        case 4:
          Et(
            25,
            Pe.sectionStart
          );
          break;
        case 28:
          Pe.currentSequence === nt.CdataEnd ? Et(6, e) : Et(7, e);
          break;
        case 6:
        case 7:
        case 9:
        case 11:
        case 12:
        case 13:
        case 14:
        case 15:
        case 16:
        case 17:
        case 18:
        case 19:
        case 20:
        case 21:
          Et(9, e);
          break;
      }
    for (let t = 0; t < je.length; t++)
      ti(je[t], e - 1), Et(24, je[t].loc.start.offset);
  },
  oncdata(e, t) {
    je[0].ns !== 0 ? Wo(st(e, t), e, t) : Et(1, e - 9);
  },
  onprocessinginstruction(e) {
    (je[0] ? je[0].ns : Ne.ns) === 0 && Et(
      21,
      e - 1
    );
  }
}), uc = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/, x0 = /^\(|\)$/g;
function N0(e) {
  const t = e.loc, n = e.content, s = n.match(E0);
  if (!s) return;
  const [, o, i] = s, r = (c, p, h = !1) => {
    const g = t.start.offset + p, m = g + c.length;
    return ni(
      c,
      !1,
      Ge(g, m),
      0,
      h ? 1 : 0
      /* Normal */
    );
  }, l = {
    source: r(i.trim(), n.indexOf(i, o.length)),
    value: void 0,
    key: void 0,
    index: void 0,
    finalized: !1
  };
  let a = o.trim().replace(x0, "").trim();
  const u = o.indexOf(a), f = a.match(uc);
  if (f) {
    a = a.replace(uc, "").trim();
    const c = f[1].trim();
    let p;
    if (c && (p = n.indexOf(c, u + a.length), l.key = r(c, p, !0)), f[2]) {
      const h = f[2].trim();
      h && (l.index = r(
        h,
        n.indexOf(
          h,
          l.key ? p + c.length : u + a.length
        ),
        !0
      ));
    }
  }
  return a && (l.value = r(a, u, !0)), l;
}
function st(e, t) {
  return _n.slice(e, t);
}
function dc(e) {
  Pe.inSFCRoot && (ct.innerLoc = Ge(e + 1, e + 1)), Qr(ct);
  const { tag: t, ns: n } = ct;
  n === 0 && Ne.isPreTag(t) && ea++, Ne.isVoidTag(t) ? ti(ct, e) : (je.unshift(ct), (n === 1 || n === 2) && (Pe.inXML = !0)), ct = null;
}
function Wo(e, t, n) {
  {
    const i = je[0] && je[0].tag;
    i !== "script" && i !== "style" && e.includes("&") && (e = Ne.decodeEntities(e, !1));
  }
  const s = je[0] || To, o = s.children[s.children.length - 1];
  o && o.type === 2 ? (o.content += e, es(o.loc, n)) : s.children.push({
    type: 2,
    content: e,
    loc: Ge(t, n)
  });
}
function ti(e, t, n = !1) {
  n ? es(e.loc, lf(t, 60)) : es(e.loc, S0(t, 62) + 1), Pe.inSFCRoot && (e.children.length ? e.innerLoc.end = ge({}, e.children[e.children.length - 1].loc.end) : e.innerLoc.end = ge({}, e.innerLoc.start), e.innerLoc.source = st(
    e.innerLoc.start.offset,
    e.innerLoc.end.offset
  ));
  const { tag: s, ns: o, children: i } = e;
  if (Pn || (s === "slot" ? e.tagType = 2 : fc(e) ? e.tagType = 3 : C0(e) && (e.tagType = 1)), Pe.inRCDATA || (e.children = af(i)), o === 0 && Ne.isIgnoreNewlineTag(s)) {
    const r = i[0];
    r && r.type === 2 && (r.content = r.content.replace(/^\r?\n/, ""));
  }
  o === 0 && Ne.isPreTag(s) && ea--, Xr === e && (Pn = Pe.inVPre = !1, Xr = null), Pe.inXML && (je[0] ? je[0].ns : Ne.ns) === 0 && (Pe.inXML = !1);
  {
    const r = e.props;
    if (ne.NODE_ENV !== "production" && Un(
      "COMPILER_V_IF_V_FOR_PRECEDENCE",
      Ne
    )) {
      let a = !1, u = !1;
      for (let f = 0; f < r.length; f++) {
        const c = r[f];
        if (c.type === 7 && (c.name === "if" ? a = !0 : c.name === "for" && (u = !0)), a && u) {
          Oi(
            "COMPILER_V_IF_V_FOR_PRECEDENCE",
            Ne,
            e.loc
          );
          break;
        }
      }
    }
    if (!Pe.inSFCRoot && Un(
      "COMPILER_NATIVE_TEMPLATE",
      Ne
    ) && e.tag === "template" && !fc(e)) {
      ne.NODE_ENV !== "production" && Oi(
        "COMPILER_NATIVE_TEMPLATE",
        Ne,
        e.loc
      );
      const a = je[0] || To, u = a.children.indexOf(e);
      a.children.splice(u, 1, ...e.children);
    }
    const l = r.find(
      (a) => a.type === 6 && a.name === "inline-template"
    );
    l && qs(
      "COMPILER_INLINE_TEMPLATE",
      Ne,
      l.loc
    ) && e.children.length && (l.value = {
      type: 2,
      content: st(
        e.children[0].loc.start.offset,
        e.children[e.children.length - 1].loc.end.offset
      ),
      loc: l.loc
    });
  }
}
function S0(e, t) {
  let n = e;
  for (; _n.charCodeAt(n) !== t && n < _n.length - 1; ) n++;
  return n;
}
function lf(e, t) {
  let n = e;
  for (; _n.charCodeAt(n) !== t && n >= 0; ) n--;
  return n;
}
const k0 = /* @__PURE__ */ new Set(["if", "else", "else-if", "for", "slot"]);
function fc({ tag: e, props: t }) {
  if (e === "template") {
    for (let n = 0; n < t.length; n++)
      if (t[n].type === 7 && k0.has(t[n].name))
        return !0;
  }
  return !1;
}
function C0({ tag: e, props: t }) {
  if (Ne.isCustomElement(e))
    return !1;
  if (e === "component" || O0(e.charCodeAt(0)) || tf(e) || Ne.isBuiltInComponent && Ne.isBuiltInComponent(e) || Ne.isNativeTag && !Ne.isNativeTag(e))
    return !0;
  for (let n = 0; n < t.length; n++) {
    const s = t[n];
    if (s.type === 6) {
      if (s.name === "is" && s.value) {
        if (s.value.content.startsWith("vue:"))
          return !0;
        if (qs(
          "COMPILER_IS_ON_ELEMENT",
          Ne,
          s.loc
        ))
          return !0;
      }
    } else if (
      // :is on plain element - only treat as component in compat mode
      s.name === "bind" && Fn(s.arg, "is") && qs(
        "COMPILER_IS_ON_ELEMENT",
        Ne,
        s.loc
      )
    )
      return !0;
  }
  return !1;
}
function O0(e) {
  return e > 64 && e < 91;
}
const T0 = /\r\n/g;
function af(e) {
  const t = Ne.whitespace !== "preserve";
  let n = !1;
  for (let s = 0; s < e.length; s++) {
    const o = e[s];
    if (o.type === 2)
      if (ea)
        o.content = o.content.replace(T0, `
`);
      else if ($0(o.content)) {
        const i = e[s - 1] && e[s - 1].type, r = e[s + 1] && e[s + 1].type;
        !i || !r || t && (i === 3 && (r === 3 || r === 1) || i === 1 && (r === 3 || r === 1 && D0(o.content))) ? (n = !0, e[s] = null) : o.content = " ";
      } else t && (o.content = cf(o.content));
  }
  return n ? e.filter(Boolean) : e;
}
function $0(e) {
  for (let t = 0; t < e.length; t++)
    if (!At(e.charCodeAt(t)))
      return !1;
  return !0;
}
function D0(e) {
  for (let t = 0; t < e.length; t++) {
    const n = e.charCodeAt(t);
    if (n === 10 || n === 13)
      return !0;
  }
  return !1;
}
function cf(e) {
  let t = "", n = !1;
  for (let s = 0; s < e.length; s++)
    At(e.charCodeAt(s)) ? n || (t += " ", n = !0) : (t += e[s], n = !1);
  return t;
}
function Qr(e) {
  (je[0] || To).children.push(e);
}
function Ge(e, t) {
  return {
    start: Pe.getPos(e),
    // @ts-expect-error allow late attachment
    end: t == null ? t : Pe.getPos(t),
    // @ts-expect-error allow late attachment
    source: t == null ? t : st(e, t)
  };
}
function A0(e) {
  return Ge(e.start.offset, e.end.offset);
}
function es(e, t) {
  e.end = Pe.getPos(t), e.source = st(e.start.offset, t);
}
function V0(e) {
  const t = {
    type: 6,
    name: e.rawName,
    nameLoc: Ge(
      e.loc.start.offset,
      e.loc.start.offset + e.rawName.length
    ),
    value: void 0,
    loc: e.loc
  };
  if (e.exp) {
    const n = e.exp.loc;
    n.end.offset < e.loc.end.offset && (n.start.offset--, n.start.column--, n.end.offset++, n.end.column++), t.value = {
      type: 2,
      content: e.exp.content,
      loc: n
    };
  }
  return t;
}
function ni(e, t = !1, n, s = 0, o = 0) {
  return me(e, t, n, s);
}
function Et(e, t, n) {
  Ne.onError(
    $e(e, Ge(t, t), void 0, n)
  );
}
function I0() {
  Pe.reset(), ct = null, _e = null, xt = "", mn = -1, Xn = -1, je.length = 0;
}
function M0(e, t) {
  if (I0(), _n = e, Ne = ge({}, rf), t) {
    let o;
    for (o in t)
      t[o] != null && (Ne[o] = t[o]);
  }
  if (ne.NODE_ENV !== "production" && !Ne.decodeEntities)
    throw new Error(
      "[@vue/compiler-core] decodeEntities option is required in browser builds."
    );
  Pe.mode = Ne.parseMode === "html" ? 1 : Ne.parseMode === "sfc" ? 2 : 0, Pe.inXML = Ne.ns === 1 || Ne.ns === 2;
  const n = t && t.delimiters;
  n && (Pe.delimiterOpen = Ci(n[0]), Pe.delimiterClose = Ci(n[1]));
  const s = To = o0([], e);
  return Pe.parse(_n), s.loc = Ge(0, e.length), s.children = af(s.children), To = null, s;
}
function P0(e, t) {
  si(
    e,
    void 0,
    t,
    // Root node is unfortunately non-hoistable due to potential parent
    // fallthrough attributes.
    !!uf(e)
  );
}
function uf(e) {
  const t = e.children.filter((n) => n.type !== 3);
  return t.length === 1 && t[0].type === 1 && !$i(t[0]) ? t[0] : null;
}
function si(e, t, n, s = !1, o = !1) {
  const { children: i } = e, r = [];
  for (let c = 0; c < i.length; c++) {
    const p = i[c];
    if (p.type === 1 && p.tagType === 0) {
      const h = s ? 0 : Vt(p, n);
      if (h > 0) {
        if (h >= 2) {
          p.codegenNode.patchFlag = -1, r.push(p);
          continue;
        }
      } else {
        const g = p.codegenNode;
        if (g.type === 13) {
          const m = g.patchFlag;
          if ((m === void 0 || m === 512 || m === 1) && ff(p, n) >= 2) {
            const D = pf(p);
            D && (g.props = n.hoist(D));
          }
          g.dynamicProps && (g.dynamicProps = n.hoist(g.dynamicProps));
        }
      }
    } else if (p.type === 12 && (s ? 0 : Vt(p, n)) >= 2) {
      p.codegenNode.type === 14 && p.codegenNode.arguments.length > 0 && p.codegenNode.arguments.push(
        -1 + (ne.NODE_ENV !== "production" ? ` /* ${ro[-1]} */` : "")
      ), r.push(p);
      continue;
    }
    if (p.type === 1) {
      const h = p.tagType === 1;
      h && n.scopes.vSlot++, si(p, e, n, !1, o), h && n.scopes.vSlot--;
    } else if (p.type === 11)
      si(p, e, n, p.children.length === 1, !0);
    else if (p.type === 9)
      for (let h = 0; h < p.branches.length; h++)
        si(
          p.branches[h],
          e,
          n,
          p.branches[h].children.length === 1,
          o
        );
  }
  let l = !1;
  const a = [];
  if (r.length === i.length && e.type === 1) {
    if (e.tagType === 0 && e.codegenNode && e.codegenNode.type === 13 && te(e.codegenNode.children))
      e.codegenNode.children = u(
        as(e.codegenNode.children)
      ), l = !0;
    else if (e.tagType === 1 && e.codegenNode && e.codegenNode.type === 13 && e.codegenNode.children && !te(e.codegenNode.children) && e.codegenNode.children.type === 15) {
      const c = f(e.codegenNode, "default");
      c && (a.push(n.cached.length), c.returns = u(
        as(c.returns)
      ), l = !0);
    } else if (e.tagType === 3 && t && t.type === 1 && t.tagType === 1 && t.codegenNode && t.codegenNode.type === 13 && t.codegenNode.children && !te(t.codegenNode.children) && t.codegenNode.children.type === 15) {
      const c = kt(e, "slot", !0), p = c && c.arg && f(t.codegenNode, c.arg);
      p && (a.push(n.cached.length), p.returns = u(
        as(p.returns)
      ), l = !0);
    }
  }
  if (!l)
    for (const c of r)
      a.push(n.cached.length), c.codegenNode = n.cache(c.codegenNode);
  a.length && e.type === 1 && e.tagType === 1 && e.codegenNode && e.codegenNode.type === 13 && e.codegenNode.children && !te(e.codegenNode.children) && e.codegenNode.children.type === 15 && e.codegenNode.children.properties.push(
    ze(
      "__",
      me(JSON.stringify(a), !1)
    )
  );
  function u(c) {
    const p = n.cache(c);
    return o && n.hmr && (p.needArraySpread = !0), p;
  }
  function f(c, p) {
    if (c.children && !te(c.children) && c.children.type === 15) {
      const h = c.children.properties.find(
        (g) => g.key === p || g.key.content === p
      );
      return h && h.value;
    }
  }
  r.length && n.transformHoist && n.transformHoist(i, n, e);
}
function Vt(e, t) {
  const { constantCache: n } = t;
  switch (e.type) {
    case 1:
      if (e.tagType !== 0)
        return 0;
      const s = n.get(e);
      if (s !== void 0)
        return s;
      const o = e.codegenNode;
      if (o.type !== 13 || o.isBlock && e.tag !== "svg" && e.tag !== "foreignObject" && e.tag !== "math")
        return 0;
      if (o.patchFlag === void 0) {
        let r = 3;
        const l = ff(e, t);
        if (l === 0)
          return n.set(e, 0), 0;
        l < r && (r = l);
        for (let a = 0; a < e.children.length; a++) {
          const u = Vt(e.children[a], t);
          if (u === 0)
            return n.set(e, 0), 0;
          u < r && (r = u);
        }
        if (r > 1)
          for (let a = 0; a < e.props.length; a++) {
            const u = e.props[a];
            if (u.type === 7 && u.name === "bind" && u.exp) {
              const f = Vt(u.exp, t);
              if (f === 0)
                return n.set(e, 0), 0;
              f < r && (r = f);
            }
          }
        if (o.isBlock) {
          for (let a = 0; a < e.props.length; a++)
            if (e.props[a].type === 7)
              return n.set(e, 0), 0;
          t.removeHelper(ps), t.removeHelper(
            Us(t.inSSR, o.isComponent)
          ), o.isBlock = !1, t.helper(Hs(t.inSSR, o.isComponent));
        }
        return n.set(e, r), r;
      } else
        return n.set(e, 0), 0;
    case 2:
    case 3:
      return 3;
    case 9:
    case 11:
    case 10:
      return 0;
    case 5:
    case 12:
      return Vt(e.content, t);
    case 4:
      return e.constType;
    case 8:
      let i = 3;
      for (let r = 0; r < e.children.length; r++) {
        const l = e.children[r];
        if (de(l) || Ot(l))
          continue;
        const a = Vt(l, t);
        if (a === 0)
          return 0;
        a < i && (i = a);
      }
      return i;
    case 20:
      return 2;
    default:
      return 0;
  }
}
const R0 = /* @__PURE__ */ new Set([
  Wl,
  Kl,
  So,
  Po
]);
function df(e, t) {
  if (e.type === 14 && !de(e.callee) && R0.has(e.callee)) {
    const n = e.arguments[0];
    if (n.type === 4)
      return Vt(n, t);
    if (n.type === 14)
      return df(n, t);
  }
  return 0;
}
function ff(e, t) {
  let n = 3;
  const s = pf(e);
  if (s && s.type === 15) {
    const { properties: o } = s;
    for (let i = 0; i < o.length; i++) {
      const { key: r, value: l } = o[i], a = Vt(r, t);
      if (a === 0)
        return a;
      a < n && (n = a);
      let u;
      if (l.type === 4 ? u = Vt(l, t) : l.type === 14 ? u = df(l, t) : u = 0, u === 0)
        return u;
      u < n && (n = u);
    }
  }
  return n;
}
function pf(e) {
  const t = e.codegenNode;
  if (t.type === 13)
    return t.props;
}
function L0(e, {
  filename: t = "",
  prefixIdentifiers: n = !1,
  hoistStatic: s = !1,
  hmr: o = !1,
  cacheHandlers: i = !1,
  nodeTransforms: r = [],
  directiveTransforms: l = {},
  transformHoist: a = null,
  isBuiltInComponent: u = Fe,
  isCustomElement: f = Fe,
  expressionPlugins: c = [],
  scopeId: p = null,
  slotted: h = !0,
  ssr: g = !1,
  inSSR: m = !1,
  ssrCssVars: D = "",
  bindingMetadata: P = ve,
  inline: V = !1,
  isTS: _ = !1,
  onError: N = Ql,
  onWarn: v = ef,
  compatConfig: w
}) {
  const A = t.replace(/\?.*$/, "").match(/([^/\\]+)\.\w+$/), k = {
    // options
    filename: t,
    selfName: A && un(Ie(A[1])),
    prefixIdentifiers: n,
    hoistStatic: s,
    hmr: o,
    cacheHandlers: i,
    nodeTransforms: r,
    directiveTransforms: l,
    transformHoist: a,
    isBuiltInComponent: u,
    isCustomElement: f,
    expressionPlugins: c,
    scopeId: p,
    slotted: h,
    ssr: g,
    inSSR: m,
    ssrCssVars: D,
    bindingMetadata: P,
    inline: V,
    isTS: _,
    onError: N,
    onWarn: v,
    compatConfig: w,
    // state
    root: e,
    helpers: /* @__PURE__ */ new Map(),
    components: /* @__PURE__ */ new Set(),
    directives: /* @__PURE__ */ new Set(),
    hoists: [],
    imports: [],
    cached: [],
    constantCache: /* @__PURE__ */ new WeakMap(),
    temps: 0,
    identifiers: /* @__PURE__ */ Object.create(null),
    scopes: {
      vFor: 0,
      vSlot: 0,
      vPre: 0,
      vOnce: 0
    },
    parent: null,
    grandParent: null,
    currentNode: e,
    childIndex: 0,
    inVOnce: !1,
    // methods
    helper(y) {
      const T = k.helpers.get(y) || 0;
      return k.helpers.set(y, T + 1), y;
    },
    removeHelper(y) {
      const T = k.helpers.get(y);
      if (T) {
        const O = T - 1;
        O ? k.helpers.set(y, O) : k.helpers.delete(y);
      }
    },
    helperString(y) {
      return `_${Bs[k.helper(y)]}`;
    },
    replaceNode(y) {
      if (ne.NODE_ENV !== "production") {
        if (!k.currentNode)
          throw new Error("Node being replaced is already removed.");
        if (!k.parent)
          throw new Error("Cannot replace root node.");
      }
      k.parent.children[k.childIndex] = k.currentNode = y;
    },
    removeNode(y) {
      if (ne.NODE_ENV !== "production" && !k.parent)
        throw new Error("Cannot remove root node.");
      const T = k.parent.children, O = y ? T.indexOf(y) : k.currentNode ? k.childIndex : -1;
      if (ne.NODE_ENV !== "production" && O < 0)
        throw new Error("node being removed is not a child of current parent");
      !y || y === k.currentNode ? (k.currentNode = null, k.onNodeRemoved()) : k.childIndex > O && (k.childIndex--, k.onNodeRemoved()), k.parent.children.splice(O, 1);
    },
    onNodeRemoved: Fe,
    addIdentifiers(y) {
    },
    removeIdentifiers(y) {
    },
    hoist(y) {
      de(y) && (y = me(y)), k.hoists.push(y);
      const T = me(
        `_hoisted_${k.hoists.length}`,
        !1,
        y.loc,
        2
      );
      return T.hoisted = y, T;
    },
    cache(y, T = !1, O = !1) {
      const C = i0(
        k.cached.length,
        y,
        T,
        O
      );
      return k.cached.push(C), C;
    }
  };
  return k.filters = /* @__PURE__ */ new Set(), k;
}
function F0(e, t) {
  const n = L0(e, t);
  er(e, n), t.hoistStatic && P0(e, n), t.ssr || B0(e, n), e.helpers = /* @__PURE__ */ new Set([...n.helpers.keys()]), e.components = [...n.components], e.directives = [...n.directives], e.imports = n.imports, e.hoists = n.hoists, e.temps = n.temps, e.cached = n.cached, e.transformed = !0, e.filters = [...n.filters];
}
function B0(e, t) {
  const { helper: n } = t, { children: s } = e;
  if (s.length === 1) {
    const o = uf(e);
    if (o && o.codegenNode) {
      const i = o.codegenNode;
      i.type === 13 && Xl(i, t), e.codegenNode = i;
    } else
      e.codegenNode = s[0];
  } else if (s.length > 1) {
    let o = 64;
    ne.NODE_ENV !== "production" && s.filter((i) => i.type !== 3).length === 1 && (o |= 2048), e.codegenNode = ko(
      t,
      n(No),
      void 0,
      e.children,
      o,
      void 0,
      void 0,
      !0,
      void 0,
      !1
    );
  }
}
function j0(e, t) {
  let n = 0;
  const s = () => {
    n--;
  };
  for (; n < e.children.length; n++) {
    const o = e.children[n];
    de(o) || (t.grandParent = t.parent, t.parent = e, t.childIndex = n, t.onNodeRemoved = s, er(o, t));
  }
}
function er(e, t) {
  t.currentNode = e;
  const { nodeTransforms: n } = t, s = [];
  for (let i = 0; i < n.length; i++) {
    const r = n[i](e, t);
    if (r && (te(r) ? s.push(...r) : s.push(r)), t.currentNode)
      e = t.currentNode;
    else
      return;
  }
  switch (e.type) {
    case 3:
      t.ssr || t.helper(Mo);
      break;
    case 5:
      t.ssr || t.helper(Zi);
      break;
    case 9:
      for (let i = 0; i < e.branches.length; i++)
        er(e.branches[i], t);
      break;
    case 10:
    case 11:
    case 1:
    case 0:
      j0(e, t);
      break;
  }
  t.currentNode = e;
  let o = s.length;
  for (; o--; )
    s[o]();
}
function hf(e, t) {
  const n = de(e) ? (s) => s === e : (s) => e.test(s);
  return (s, o) => {
    if (s.type === 1) {
      const { props: i } = s;
      if (s.tagType === 3 && i.some(b0))
        return;
      const r = [];
      for (let l = 0; l < i.length; l++) {
        const a = i[l];
        if (a.type === 7 && n(a.name)) {
          i.splice(l, 1), l--;
          const u = t(s, a, o);
          u && r.push(u);
        }
      }
      return r;
    }
  };
}
const tr = "/*@__PURE__*/", mf = (e) => `${Bs[e]}: _${Bs[e]}`;
function H0(e, {
  mode: t = "function",
  prefixIdentifiers: n = t === "module",
  sourceMap: s = !1,
  filename: o = "template.vue.html",
  scopeId: i = null,
  optimizeImports: r = !1,
  runtimeGlobalName: l = "Vue",
  runtimeModuleName: a = "vue",
  ssrRuntimeModuleName: u = "vue/server-renderer",
  ssr: f = !1,
  isTS: c = !1,
  inSSR: p = !1
}) {
  const h = {
    mode: t,
    prefixIdentifiers: n,
    sourceMap: s,
    filename: o,
    scopeId: i,
    optimizeImports: r,
    runtimeGlobalName: l,
    runtimeModuleName: a,
    ssrRuntimeModuleName: u,
    ssr: f,
    isTS: c,
    inSSR: p,
    source: e.source,
    code: "",
    column: 1,
    line: 1,
    offset: 0,
    indentLevel: 0,
    pure: !1,
    map: void 0,
    helper(m) {
      return `_${Bs[m]}`;
    },
    push(m, D = -2, P) {
      h.code += m;
    },
    indent() {
      g(++h.indentLevel);
    },
    deindent(m = !1) {
      m ? --h.indentLevel : g(--h.indentLevel);
    },
    newline() {
      g(h.indentLevel);
    }
  };
  function g(m) {
    h.push(
      `
` + "  ".repeat(m),
      0
      /* Start */
    );
  }
  return h;
}
function U0(e, t = {}) {
  const n = H0(e, t);
  t.onContextCreated && t.onContextCreated(n);
  const {
    mode: s,
    push: o,
    prefixIdentifiers: i,
    indent: r,
    deindent: l,
    newline: a,
    scopeId: u,
    ssr: f
  } = n, c = Array.from(e.helpers), p = c.length > 0, h = !i && s !== "module";
  q0(e, n);
  const m = f ? "ssrRender" : "render", P = (f ? ["_ctx", "_push", "_parent", "_attrs"] : ["_ctx", "_cache"]).join(", ");
  if (o(`function ${m}(${P}) {`), r(), h && (o("with (_ctx) {"), r(), p && (o(
    `const { ${c.map(mf).join(", ")} } = _Vue
`,
    -1
    /* End */
  ), a())), e.components.length && (yr(e.components, "component", n), (e.directives.length || e.temps > 0) && a()), e.directives.length && (yr(e.directives, "directive", n), e.temps > 0 && a()), e.filters && e.filters.length && (a(), yr(e.filters, "filter", n), a()), e.temps > 0) {
    o("let ");
    for (let V = 0; V < e.temps; V++)
      o(`${V > 0 ? ", " : ""}_temp${V}`);
  }
  return (e.components.length || e.directives.length || e.temps) && (o(
    `
`,
    0
    /* Start */
  ), a()), f || o("return "), e.codegenNode ? pt(e.codegenNode, n) : o("null"), h && (l(), o("}")), l(), o("}"), {
    ast: e,
    code: n.code,
    preamble: "",
    map: n.map ? n.map.toJSON() : void 0
  };
}
function q0(e, t) {
  const {
    ssr: n,
    prefixIdentifiers: s,
    push: o,
    newline: i,
    runtimeModuleName: r,
    runtimeGlobalName: l,
    ssrRuntimeModuleName: a
  } = t, u = l, f = Array.from(e.helpers);
  if (f.length > 0 && (o(
    `const _Vue = ${u}
`,
    -1
    /* End */
  ), e.hoists.length)) {
    const c = [
      Rl,
      Ll,
      Mo,
      Fl,
      Yd
    ].filter((p) => f.includes(p)).map(mf).join(", ");
    o(
      `const { ${c} } = _Vue
`,
      -1
      /* End */
    );
  }
  z0(e.hoists, t), i(), o("return ");
}
function yr(e, t, { helper: n, push: s, newline: o, isTS: i }) {
  const r = n(
    t === "filter" ? Ul : t === "component" ? Bl : Hl
  );
  for (let l = 0; l < e.length; l++) {
    let a = e[l];
    const u = a.endsWith("__self");
    u && (a = a.slice(0, -6)), s(
      `const ${Oo(a, t)} = ${r}(${JSON.stringify(a)}${u ? ", true" : ""})${i ? "!" : ""}`
    ), l < e.length - 1 && o();
  }
}
function z0(e, t) {
  if (!e.length)
    return;
  t.pure = !0;
  const { push: n, newline: s } = t;
  s();
  for (let o = 0; o < e.length; o++) {
    const i = e[o];
    i && (n(`const _hoisted_${o + 1} = `), pt(i, t), s());
  }
  t.pure = !1;
}
function W0(e) {
  return de(e) || e.type === 4 || e.type === 2 || e.type === 5 || e.type === 8;
}
function ta(e, t) {
  const n = e.length > 3 || ne.NODE_ENV !== "production" && e.some((s) => te(s) || !W0(s));
  t.push("["), n && t.indent(), Ro(e, t, n), n && t.deindent(), t.push("]");
}
function Ro(e, t, n = !1, s = !0) {
  const { push: o, newline: i } = t;
  for (let r = 0; r < e.length; r++) {
    const l = e[r];
    de(l) ? o(
      l,
      -3
      /* Unknown */
    ) : te(l) ? ta(l, t) : pt(l, t), r < e.length - 1 && (n ? (s && o(","), i()) : s && o(", "));
  }
}
function pt(e, t) {
  if (de(e)) {
    t.push(
      e,
      -3
      /* Unknown */
    );
    return;
  }
  if (Ot(e)) {
    t.push(t.helper(e));
    return;
  }
  switch (e.type) {
    case 1:
    case 9:
    case 11:
      ne.NODE_ENV !== "production" && lc(
        e.codegenNode != null,
        "Codegen node is missing for element/if/for node. Apply appropriate transforms first."
      ), pt(e.codegenNode, t);
      break;
    case 2:
      K0(e, t);
      break;
    case 4:
      gf(e, t);
      break;
    case 5:
      G0(e, t);
      break;
    case 12:
      pt(e.codegenNode, t);
      break;
    case 8:
      vf(e, t);
      break;
    case 3:
      Y0(e, t);
      break;
    case 13:
      X0(e, t);
      break;
    case 14:
      Z0(e, t);
      break;
    case 15:
      ev(e, t);
      break;
    case 17:
      tv(e, t);
      break;
    case 18:
      nv(e, t);
      break;
    case 19:
      sv(e, t);
      break;
    case 20:
      ov(e, t);
      break;
    case 21:
      Ro(e.body, t, !0, !1);
      break;
    case 22:
      break;
    case 23:
      break;
    case 24:
      break;
    case 25:
      break;
    case 26:
      break;
    case 10:
      break;
    default:
      if (ne.NODE_ENV !== "production")
        return lc(!1, `unhandled codegen node type: ${e.type}`), e;
  }
}
function K0(e, t) {
  t.push(JSON.stringify(e.content), -3, e);
}
function gf(e, t) {
  const { content: n, isStatic: s } = e;
  t.push(
    s ? JSON.stringify(n) : n,
    -3,
    e
  );
}
function G0(e, t) {
  const { push: n, helper: s, pure: o } = t;
  o && n(tr), n(`${s(Zi)}(`), pt(e.content, t), n(")");
}
function vf(e, t) {
  for (let n = 0; n < e.children.length; n++) {
    const s = e.children[n];
    de(s) ? t.push(
      s,
      -3
      /* Unknown */
    ) : pt(s, t);
  }
}
function J0(e, t) {
  const { push: n } = t;
  if (e.type === 8)
    n("["), vf(e, t), n("]");
  else if (e.isStatic) {
    const s = Zl(e.content) ? e.content : JSON.stringify(e.content);
    n(s, -2, e);
  } else
    n(`[${e.content}]`, -3, e);
}
function Y0(e, t) {
  const { push: n, helper: s, pure: o } = t;
  o && n(tr), n(
    `${s(Mo)}(${JSON.stringify(e.content)})`,
    -3,
    e
  );
}
function X0(e, t) {
  const { push: n, helper: s, pure: o } = t, {
    tag: i,
    props: r,
    children: l,
    patchFlag: a,
    dynamicProps: u,
    directives: f,
    isBlock: c,
    disableTracking: p,
    isComponent: h
  } = e;
  let g;
  if (a)
    if (ne.NODE_ENV !== "production")
      if (a < 0)
        g = a + ` /* ${ro[a]} */`;
      else {
        const D = Object.keys(ro).map(Number).filter((P) => P > 0 && a & P).map((P) => ro[P]).join(", ");
        g = a + ` /* ${D} */`;
      }
    else
      g = String(a);
  f && n(s(ql) + "("), c && n(`(${s(ps)}(${p ? "true" : ""}), `), o && n(tr);
  const m = c ? Us(t.inSSR, h) : Hs(t.inSSR, h);
  n(s(m) + "(", -2, e), Ro(
    Q0([i, r, l, g, u]),
    t
  ), n(")"), c && n(")"), f && (n(", "), pt(f, t), n(")"));
}
function Q0(e) {
  let t = e.length;
  for (; t-- && e[t] == null; )
    ;
  return e.slice(0, t + 1).map((n) => n || "null");
}
function Z0(e, t) {
  const { push: n, helper: s, pure: o } = t, i = de(e.callee) ? e.callee : s(e.callee);
  o && n(tr), n(i + "(", -2, e), Ro(e.arguments, t), n(")");
}
function ev(e, t) {
  const { push: n, indent: s, deindent: o, newline: i } = t, { properties: r } = e;
  if (!r.length) {
    n("{}", -2, e);
    return;
  }
  const l = r.length > 1 || ne.NODE_ENV !== "production" && r.some((a) => a.value.type !== 4);
  n(l ? "{" : "{ "), l && s();
  for (let a = 0; a < r.length; a++) {
    const { key: u, value: f } = r[a];
    J0(u, t), n(": "), pt(f, t), a < r.length - 1 && (n(","), i());
  }
  l && o(), n(l ? "}" : " }");
}
function tv(e, t) {
  ta(e.elements, t);
}
function nv(e, t) {
  const { push: n, indent: s, deindent: o } = t, { params: i, returns: r, body: l, newline: a, isSlot: u } = e;
  u && n(`_${Bs[Jl]}(`), n("(", -2, e), te(i) ? Ro(i, t) : i && pt(i, t), n(") => "), (a || l) && (n("{"), s()), r ? (a && n("return "), te(r) ? ta(r, t) : pt(r, t)) : l && pt(l, t), (a || l) && (o(), n("}")), u && (e.isNonScopedSlot && n(", undefined, true"), n(")"));
}
function sv(e, t) {
  const { test: n, consequent: s, alternate: o, newline: i } = e, { push: r, indent: l, deindent: a, newline: u } = t;
  if (n.type === 4) {
    const c = !Zl(n.content);
    c && r("("), gf(n, t), c && r(")");
  } else
    r("("), pt(n, t), r(")");
  i && l(), t.indentLevel++, i || r(" "), r("? "), pt(s, t), t.indentLevel--, i && u(), i || r(" "), r(": ");
  const f = o.type === 19;
  f || t.indentLevel++, pt(o, t), f || t.indentLevel--, i && a(
    !0
    /* without newline */
  );
}
function ov(e, t) {
  const { push: n, helper: s, indent: o, deindent: i, newline: r } = t, { needPauseTracking: l, needArraySpread: a } = e;
  a && n("[...("), n(`_cache[${e.index}] || (`), l && (o(), n(`${s(ki)}(-1`), e.inVOnce && n(", true"), n("),"), r(), n("(")), n(`_cache[${e.index}] = `), pt(e.value, t), l && (n(`).cacheIndex = ${e.index},`), r(), n(`${s(ki)}(1),`), r(), n(`_cache[${e.index}]`), i()), n(")"), a && n(")]");
}
const iv = new RegExp(
  "\\b" + "arguments,await,break,case,catch,class,const,continue,debugger,default,delete,do,else,export,extends,finally,for,function,if,import,let,new,return,super,switch,throw,try,var,void,while,with,yield".split(",").join("\\b|\\b") + "\\b"
), rv = /'(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"|`(?:[^`\\]|\\.)*\$\{|\}(?:[^`\\]|\\.)*`|`(?:[^`\\]|\\.)*`/g;
function ts(e, t, n = !1, s = !1) {
  const o = e.content;
  if (o.trim())
    try {
      new Function(
        s ? ` ${o} ` : `return ${n ? `(${o}) => {}` : `(${o})`}`
      );
    } catch (i) {
      let r = i.message;
      const l = o.replace(rv, "").match(iv);
      l && (r = `avoid using JavaScript keyword as property name: "${l[0]}"`), t.onError(
        $e(
          45,
          e.loc,
          void 0,
          r
        )
      );
    }
}
const lv = (e, t) => {
  if (e.type === 5)
    e.content = br(
      e.content,
      t
    );
  else if (e.type === 1) {
    const n = kt(e, "memo");
    for (let s = 0; s < e.props.length; s++) {
      const o = e.props[s];
      if (o.type === 7 && o.name !== "for") {
        const i = o.exp, r = o.arg;
        i && i.type === 4 && !(o.name === "on" && r) && // key has been processed in transformFor(vMemo + vFor)
        !(n && r && r.type === 4 && r.content === "key") && (o.exp = br(
          i,
          t,
          // slot args must be processed as function params
          o.name === "slot"
        )), r && r.type === 4 && !r.isStatic && (o.arg = br(r, t));
      }
    }
  }
};
function br(e, t, n = !1, s = !1, o = Object.create(t.identifiers)) {
  return ne.NODE_ENV !== "production" && ts(e, t, n, s), e;
}
const av = hf(
  /^(if|else|else-if)$/,
  (e, t, n) => cv(e, t, n, (s, o, i) => {
    const r = n.parent.children;
    let l = r.indexOf(s), a = 0;
    for (; l-- >= 0; ) {
      const u = r[l];
      u && u.type === 9 && (a += u.branches.length);
    }
    return () => {
      if (i)
        s.codegenNode = hc(
          o,
          a,
          n
        );
      else {
        const u = dv(s.codegenNode);
        u.alternate = hc(
          o,
          a + s.branches.length - 1,
          n
        );
      }
    };
  })
);
function cv(e, t, n, s) {
  if (t.name !== "else" && (!t.exp || !t.exp.content.trim())) {
    const o = t.exp ? t.exp.loc : e.loc;
    n.onError(
      $e(28, t.loc)
    ), t.exp = me("true", !1, o);
  }
  if (ne.NODE_ENV !== "production" && t.exp && ts(t.exp, n), t.name === "if") {
    const o = pc(e, t), i = {
      type: 9,
      loc: A0(e.loc),
      branches: [o]
    };
    if (n.replaceNode(i), s)
      return s(i, o, !0);
  } else {
    const o = n.parent.children, i = [];
    let r = o.indexOf(e);
    for (; r-- >= -1; ) {
      const l = o[r];
      if (l && l.type === 3) {
        n.removeNode(l), ne.NODE_ENV !== "production" && i.unshift(l);
        continue;
      }
      if (l && l.type === 2 && !l.content.trim().length) {
        n.removeNode(l);
        continue;
      }
      if (l && l.type === 9) {
        t.name === "else-if" && l.branches[l.branches.length - 1].condition === void 0 && n.onError(
          $e(30, e.loc)
        ), n.removeNode();
        const a = pc(e, t);
        if (ne.NODE_ENV !== "production" && i.length && // #3619 ignore comments if the v-if is direct child of <transition>
        !(n.parent && n.parent.type === 1 && (n.parent.tag === "transition" || n.parent.tag === "Transition")) && (a.children = [...i, ...a.children]), ne.NODE_ENV !== "production") {
          const f = a.userKey;
          f && l.branches.forEach(({ userKey: c }) => {
            uv(c, f) && n.onError(
              $e(
                29,
                a.userKey.loc
              )
            );
          });
        }
        l.branches.push(a);
        const u = s && s(l, a, !1);
        er(a, n), u && u(), n.currentNode = null;
      } else
        n.onError(
          $e(30, e.loc)
        );
      break;
    }
  }
}
function pc(e, t) {
  const n = e.tagType === 3;
  return {
    type: 10,
    loc: e.loc,
    condition: t.name === "else" ? void 0 : t.exp,
    children: n && !kt(e, "for") ? e.children : [e],
    userKey: Co(e, "key"),
    isTemplateIf: n
  };
}
function hc(e, t, n) {
  return e.condition ? Jr(
    e.condition,
    mc(e, t, n),
    // make sure to pass in asBlock: true so that the comment node call
    // closes the current block.
    Qe(n.helper(Mo), [
      ne.NODE_ENV !== "production" ? '"v-if"' : '""',
      "true"
    ])
  ) : mc(e, t, n);
}
function mc(e, t, n) {
  const { helper: s } = n, o = ze(
    "key",
    me(
      `${t}`,
      !1,
      Mt,
      2
    )
  ), { children: i } = e, r = i[0];
  if (i.length !== 1 || r.type !== 1)
    if (i.length === 1 && r.type === 11) {
      const a = r.codegenNode;
      return Di(a, o, n), a;
    } else {
      let a = 64;
      return ne.NODE_ENV !== "production" && !e.isTemplateIf && i.filter((u) => u.type !== 3).length === 1 && (a |= 2048), ko(
        n,
        s(No),
        Rt([o]),
        i,
        a,
        void 0,
        void 0,
        !0,
        !1,
        !1,
        e.loc
      );
    }
  else {
    const a = r.codegenNode, u = w0(a);
    return u.type === 13 && Xl(u, n), Di(u, o, n), a;
  }
}
function uv(e, t) {
  if (!e || e.type !== t.type)
    return !1;
  if (e.type === 6) {
    if (e.value.content !== t.value.content)
      return !1;
  } else {
    const n = e.exp, s = t.exp;
    if (n.type !== s.type || n.type !== 4 || n.isStatic !== s.isStatic || n.content !== s.content)
      return !1;
  }
  return !0;
}
function dv(e) {
  for (; ; )
    if (e.type === 19)
      if (e.alternate.type === 19)
        e = e.alternate;
      else
        return e;
    else e.type === 20 && (e = e.value);
}
const fv = (e, t, n) => {
  const { modifiers: s, loc: o } = e, i = e.arg;
  let { exp: r } = e;
  if (r && r.type === 4 && !r.content.trim() && (r = void 0), !r) {
    if (i.type !== 4 || !i.isStatic)
      return n.onError(
        $e(
          52,
          i.loc
        )
      ), {
        props: [
          ze(i, me("", !0, o))
        ]
      };
    yf(e), r = e.exp;
  }
  return i.type !== 4 ? (i.children.unshift("("), i.children.push(') || ""')) : i.isStatic || (i.content = i.content ? `${i.content} || ""` : '""'), s.some((l) => l.content === "camel") && (i.type === 4 ? i.isStatic ? i.content = Ie(i.content) : i.content = `${n.helperString(Kr)}(${i.content})` : (i.children.unshift(`${n.helperString(Kr)}(`), i.children.push(")"))), n.inSSR || (s.some((l) => l.content === "prop") && gc(i, "."), s.some((l) => l.content === "attr") && gc(i, "^")), {
    props: [ze(i, r)]
  };
}, yf = (e, t) => {
  const n = e.arg, s = Ie(n.content);
  e.exp = me(s, !1, n.loc);
}, gc = (e, t) => {
  e.type === 4 ? e.isStatic ? e.content = t + e.content : e.content = `\`${t}\${${e.content}}\`` : (e.children.unshift(`'${t}' + (`), e.children.push(")"));
}, pv = hf(
  "for",
  (e, t, n) => {
    const { helper: s, removeHelper: o } = n;
    return hv(e, t, n, (i) => {
      const r = Qe(s(zl), [
        i.source
      ]), l = Ti(e), a = kt(e, "memo"), u = Co(e, "key", !1, !0);
      u && u.type === 7 && !u.exp && yf(u);
      let c = u && (u.type === 6 ? u.value ? me(u.value.content, !0) : void 0 : u.exp);
      const p = u && c ? ze("key", c) : null, h = i.source.type === 4 && i.source.constType > 0, g = h ? 64 : u ? 128 : 256;
      return i.codegenNode = ko(
        n,
        s(No),
        void 0,
        r,
        g,
        void 0,
        void 0,
        !0,
        !h,
        !1,
        e.loc
      ), () => {
        let m;
        const { children: D } = i;
        ne.NODE_ENV !== "production" && l && e.children.some((_) => {
          if (_.type === 1) {
            const N = Co(_, "key");
            if (N)
              return n.onError(
                $e(
                  33,
                  N.loc
                )
              ), !0;
          }
        });
        const P = D.length !== 1 || D[0].type !== 1, V = $i(e) ? e : l && e.children.length === 1 && $i(e.children[0]) ? e.children[0] : null;
        if (V ? (m = V.codegenNode, l && p && Di(m, p, n)) : P ? m = ko(
          n,
          s(No),
          p ? Rt([p]) : void 0,
          e.children,
          64,
          void 0,
          void 0,
          !0,
          void 0,
          !1
        ) : (m = D[0].codegenNode, l && p && Di(m, p, n), m.isBlock !== !h && (m.isBlock ? (o(ps), o(
          Us(n.inSSR, m.isComponent)
        )) : o(
          Hs(n.inSSR, m.isComponent)
        )), m.isBlock = !h, m.isBlock ? (s(ps), s(Us(n.inSSR, m.isComponent))) : s(Hs(n.inSSR, m.isComponent))), a) {
          const _ = js(
            Zr(i.parseResult, [
              me("_cached")
            ])
          );
          _.body = r0([
            Xt(["const _memo = (", a.exp, ")"]),
            Xt([
              "if (_cached",
              ...c ? [" && _cached.key === ", c] : [],
              ` && ${n.helperString(
                Zd
              )}(_cached, _memo)) return _cached`
            ]),
            Xt(["const _item = ", m]),
            me("_item.memo = _memo"),
            me("return _item")
          ]), r.arguments.push(
            _,
            me("_cache"),
            me(String(n.cached.length))
          ), n.cached.push(null);
        } else
          r.arguments.push(
            js(
              Zr(i.parseResult),
              m,
              !0
            )
          );
      };
    });
  }
);
function hv(e, t, n, s) {
  if (!t.exp) {
    n.onError(
      $e(31, t.loc)
    );
    return;
  }
  const o = t.forParseResult;
  if (!o) {
    n.onError(
      $e(32, t.loc)
    );
    return;
  }
  bf(o, n);
  const { addIdentifiers: i, removeIdentifiers: r, scopes: l } = n, { source: a, value: u, key: f, index: c } = o, p = {
    type: 11,
    loc: t.loc,
    source: a,
    valueAlias: u,
    keyAlias: f,
    objectIndexAlias: c,
    parseResult: o,
    children: Ti(e) ? e.children : [e]
  };
  n.replaceNode(p), l.vFor++;
  const h = s && s(p);
  return () => {
    l.vFor--, h && h();
  };
}
function bf(e, t) {
  e.finalized || (ne.NODE_ENV !== "production" && (ts(e.source, t), e.key && ts(
    e.key,
    t,
    !0
  ), e.index && ts(
    e.index,
    t,
    !0
  ), e.value && ts(
    e.value,
    t,
    !0
  )), e.finalized = !0);
}
function Zr({ value: e, key: t, index: n }, s = []) {
  return mv([e, t, n, ...s]);
}
function mv(e) {
  let t = e.length;
  for (; t-- && !e[t]; )
    ;
  return e.slice(0, t + 1).map((n, s) => n || me("_".repeat(s + 1), !1));
}
const vc = me("undefined", !1), gv = (e, t) => {
  if (e.type === 1 && (e.tagType === 1 || e.tagType === 3)) {
    const n = kt(e, "slot");
    if (n)
      return n.exp, t.scopes.vSlot++, () => {
        t.scopes.vSlot--;
      };
  }
}, vv = (e, t, n, s) => js(
  e,
  n,
  !1,
  !0,
  n.length ? n[0].loc : s
);
function yv(e, t, n = vv) {
  t.helper(Jl);
  const { children: s, loc: o } = e, i = [], r = [];
  let l = t.scopes.vSlot > 0 || t.scopes.vFor > 0;
  const a = kt(e, "slot", !0);
  if (a) {
    const { arg: D, exp: P } = a;
    D && !Ct(D) && (l = !0), i.push(
      ze(
        D || me("default", !0),
        n(P, void 0, s, o)
      )
    );
  }
  let u = !1, f = !1;
  const c = [], p = /* @__PURE__ */ new Set();
  let h = 0;
  for (let D = 0; D < s.length; D++) {
    const P = s[D];
    let V;
    if (!Ti(P) || !(V = kt(P, "slot", !0))) {
      P.type !== 3 && c.push(P);
      continue;
    }
    if (a) {
      t.onError(
        $e(37, V.loc)
      );
      break;
    }
    u = !0;
    const { children: _, loc: N } = P, {
      arg: v = me("default", !0),
      exp: w,
      loc: A
    } = V;
    let k;
    Ct(v) ? k = v ? v.content : "default" : l = !0;
    const y = kt(P, "for"), T = n(w, y, _, N);
    let O, C;
    if (O = kt(P, "if"))
      l = !0, r.push(
        Jr(
          O.exp,
          Ko(v, T, h++),
          vc
        )
      );
    else if (C = kt(
      P,
      /^else(-if)?$/,
      !0
      /* allowEmpty */
    )) {
      let L = D, j;
      for (; L-- && (j = s[L], !(j.type !== 3 && el(j))); )
        ;
      if (j && Ti(j) && kt(j, /^(else-)?if$/)) {
        let q = r[r.length - 1];
        for (; q.alternate.type === 19; )
          q = q.alternate;
        q.alternate = C.exp ? Jr(
          C.exp,
          Ko(
            v,
            T,
            h++
          ),
          vc
        ) : Ko(v, T, h++);
      } else
        t.onError(
          $e(30, C.loc)
        );
    } else if (y) {
      l = !0;
      const L = y.forParseResult;
      L ? (bf(L, t), r.push(
        Qe(t.helper(zl), [
          L.source,
          js(
            Zr(L),
            Ko(v, T),
            !0
          )
        ])
      )) : t.onError(
        $e(
          32,
          y.loc
        )
      );
    } else {
      if (k) {
        if (p.has(k)) {
          t.onError(
            $e(
              38,
              A
            )
          );
          continue;
        }
        p.add(k), k === "default" && (f = !0);
      }
      i.push(ze(v, T));
    }
  }
  if (!a) {
    const D = (P, V) => {
      const _ = n(P, void 0, V, o);
      return t.compatConfig && (_.isNonScopedSlot = !0), ze("default", _);
    };
    u ? c.length && // #3766
    // with whitespace: 'preserve', whitespaces between slots will end up in
    // implicitDefaultChildren. Ignore if all implicit children are whitespaces.
    c.some((P) => el(P)) && (f ? t.onError(
      $e(
        39,
        c[0].loc
      )
    ) : i.push(
      D(void 0, c)
    )) : i.push(D(void 0, s));
  }
  const g = l ? 2 : oi(e.children) ? 3 : 1;
  let m = Rt(
    i.concat(
      ze(
        "_",
        // 2 = compiled but dynamic = can skip normalization, but must run diff
        // 1 = compiled and static = can skip normalization AND diff as optimized
        me(
          g + (ne.NODE_ENV !== "production" ? ` /* ${Wf[g]} */` : ""),
          !1
        )
      )
    ),
    o
  );
  return r.length && (m = Qe(t.helper(Qd), [
    m,
    as(r)
  ])), {
    slots: m,
    hasDynamicSlots: l
  };
}
function Ko(e, t, n) {
  const s = [
    ze("name", e),
    ze("fn", t)
  ];
  return n != null && s.push(
    ze("key", me(String(n), !0))
  ), Rt(s);
}
function oi(e) {
  for (let t = 0; t < e.length; t++) {
    const n = e[t];
    switch (n.type) {
      case 1:
        if (n.tagType === 2 || oi(n.children))
          return !0;
        break;
      case 9:
        if (oi(n.branches)) return !0;
        break;
      case 10:
      case 11:
        if (oi(n.children)) return !0;
        break;
    }
  }
  return !1;
}
function el(e) {
  return e.type !== 2 && e.type !== 12 ? !0 : e.type === 2 ? !!e.content.trim() : el(e.content);
}
const _f = /* @__PURE__ */ new WeakMap(), bv = (e, t) => function() {
  if (e = t.currentNode, !(e.type === 1 && (e.tagType === 0 || e.tagType === 1)))
    return;
  const { tag: s, props: o } = e, i = e.tagType === 1;
  let r = i ? _v(e, t) : `"${s}"`;
  const l = Ee(r) && r.callee === jl;
  let a, u, f = 0, c, p, h, g = (
    // dynamic component may resolve to plain elements
    l || r === go || r === Pl || !i && // <svg> and <foreignObject> must be forced into blocks so that block
    // updates inside get proper isSVG flag at runtime. (#639, #643)
    // This is technically web-specific, but splitting the logic out of core
    // leads to too much unnecessary complexity.
    (s === "svg" || s === "foreignObject" || s === "math")
  );
  if (o.length > 0) {
    const m = wf(
      e,
      t,
      void 0,
      i,
      l
    );
    a = m.props, f = m.patchFlag, p = m.dynamicPropNames;
    const D = m.directives;
    h = D && D.length ? as(
      D.map((P) => Ev(P, t))
    ) : void 0, m.shouldUseBlock && (g = !0);
  }
  if (e.children.length > 0)
    if (r === Ni && (g = !0, f |= 1024, ne.NODE_ENV !== "production" && e.children.length > 1 && t.onError(
      $e(46, {
        start: e.children[0].loc.start,
        end: e.children[e.children.length - 1].loc.end,
        source: ""
      })
    )), i && // Teleport is not a real component and has dedicated runtime handling
    r !== go && // explained above.
    r !== Ni) {
      const { slots: D, hasDynamicSlots: P } = yv(e, t);
      u = D, P && (f |= 1024);
    } else if (e.children.length === 1 && r !== go) {
      const D = e.children[0], P = D.type, V = P === 5 || P === 8;
      V && Vt(D, t) === 0 && (f |= 1), V || P === 2 ? u = D : u = e.children;
    } else
      u = e.children;
  p && p.length && (c = xv(p)), e.codegenNode = ko(
    t,
    r,
    a,
    u,
    f === 0 ? void 0 : f,
    c,
    h,
    !!g,
    !1,
    i,
    e.loc
  );
};
function _v(e, t, n = !1) {
  let { tag: s } = e;
  const o = tl(s), i = Co(
    e,
    "is",
    !1,
    !0
    /* allow empty */
  );
  if (i)
    if (o || Un(
      "COMPILER_IS_ON_ELEMENT",
      t
    )) {
      let l;
      if (i.type === 6 ? l = i.value && me(i.value.content, !0) : (l = i.exp, l || (l = me("is", !1, i.arg.loc))), l)
        return Qe(t.helper(jl), [
          l
        ]);
    } else i.type === 6 && i.value.content.startsWith("vue:") && (s = i.value.content.slice(4));
  const r = tf(s) || t.isBuiltInComponent(s);
  return r ? (n || t.helper(r), r) : (t.helper(Bl), t.components.add(s), Oo(s, "component"));
}
function wf(e, t, n = e.props, s, o, i = !1) {
  const { tag: r, loc: l, children: a } = e;
  let u = [];
  const f = [], c = [], p = a.length > 0;
  let h = !1, g = 0, m = !1, D = !1, P = !1, V = !1, _ = !1, N = !1;
  const v = [], w = (T) => {
    u.length && (f.push(
      Rt(yc(u), l)
    ), u = []), T && f.push(T);
  }, A = () => {
    t.scopes.vFor > 0 && u.push(
      ze(
        me("ref_for", !0),
        me("true")
      )
    );
  }, k = ({ key: T, value: O }) => {
    if (Ct(T)) {
      const C = T.content, L = En(C);
      if (L && (!s || o) && // omit the flag for click handlers because hydration gives click
      // dedicated fast path.
      C.toLowerCase() !== "onclick" && // omit v-model handlers
      C !== "onUpdate:modelValue" && // omit onVnodeXXX hooks
      !Bn(C) && (V = !0), L && Bn(C) && (N = !0), L && O.type === 14 && (O = O.arguments[0]), O.type === 20 || (O.type === 4 || O.type === 8) && Vt(O, t) > 0)
        return;
      C === "ref" ? m = !0 : C === "class" ? D = !0 : C === "style" ? P = !0 : C !== "key" && !v.includes(C) && v.push(C), s && (C === "class" || C === "style") && !v.includes(C) && v.push(C);
    } else
      _ = !0;
  };
  for (let T = 0; T < n.length; T++) {
    const O = n[T];
    if (O.type === 6) {
      const { loc: C, name: L, nameLoc: j, value: q } = O;
      let I = !0;
      if (L === "ref" && (m = !0, A()), L === "is" && (tl(r) || q && q.content.startsWith("vue:") || Un(
        "COMPILER_IS_ON_ELEMENT",
        t
      )))
        continue;
      u.push(
        ze(
          me(L, !0, j),
          me(
            q ? q.content : "",
            I,
            q ? q.loc : C
          )
        )
      );
    } else {
      const { name: C, arg: L, exp: j, loc: q, modifiers: I } = O, R = C === "bind", M = C === "on";
      if (C === "slot") {
        s || t.onError(
          $e(40, q)
        );
        continue;
      }
      if (C === "once" || C === "memo" || C === "is" || R && Fn(L, "is") && (tl(r) || Un(
        "COMPILER_IS_ON_ELEMENT",
        t
      )) || M && i)
        continue;
      if (
        // #938: elements with dynamic keys should be forced into blocks
        (R && Fn(L, "key") || // inline before-update hooks need to force block so that it is invoked
        // before children
        M && p && Fn(L, "vue:before-update")) && (h = !0), R && Fn(L, "ref") && A(), !L && (R || M)
      ) {
        if (_ = !0, j)
          if (R) {
            if (w(), ne.NODE_ENV !== "production" && f.some((ke) => ke.type === 15 ? ke.properties.some(({ key: De }) => De.type !== 4 || !De.isStatic ? !0 : De.content !== "class" && De.content !== "style" && !En(De.content)) : !0) && qs(
              "COMPILER_V_BIND_OBJECT_ORDER",
              t,
              q
            ), Un(
              "COMPILER_V_BIND_OBJECT_ORDER",
              t
            )) {
              f.unshift(j);
              continue;
            }
            A(), w(), f.push(j);
          } else
            w({
              type: 14,
              loc: q,
              callee: t.helper(Gl),
              arguments: s ? [j] : [j, "true"]
            });
        else
          t.onError(
            $e(
              R ? 34 : 35,
              q
            )
          );
        continue;
      }
      R && I.some((ye) => ye.content === "prop") && (g |= 32);
      const J = t.directiveTransforms[C];
      if (J) {
        const { props: ye, needRuntime: ke } = J(O, e, t);
        !i && ye.forEach(k), M && L && !Ct(L) ? w(Rt(ye, l)) : u.push(...ye), ke && (c.push(O), Ot(ke) && _f.set(O, ke));
      } else Dc(C) || (c.push(O), p && (h = !0));
    }
  }
  let y;
  if (f.length ? (w(), f.length > 1 ? y = Qe(
    t.helper(Si),
    f,
    l
  ) : y = f[0]) : u.length && (y = Rt(
    yc(u),
    l
  )), _ ? g |= 16 : (D && !s && (g |= 2), P && !s && (g |= 4), v.length && (g |= 8), V && (g |= 32)), !h && (g === 0 || g === 32) && (m || N || c.length > 0) && (g |= 512), !t.inSSR && y)
    switch (y.type) {
      case 15:
        let T = -1, O = -1, C = !1;
        for (let q = 0; q < y.properties.length; q++) {
          const I = y.properties[q].key;
          Ct(I) ? I.content === "class" ? T = q : I.content === "style" && (O = q) : I.isHandlerKey || (C = !0);
        }
        const L = y.properties[T], j = y.properties[O];
        C ? y = Qe(
          t.helper(So),
          [y]
        ) : (L && !Ct(L.value) && (L.value = Qe(
          t.helper(Wl),
          [L.value]
        )), j && // the static style is compiled into an object,
        // so use `hasStyleBinding` to ensure that it is a dynamic style binding
        (P || j.value.type === 4 && j.value.content.trim()[0] === "[" || // v-bind:style and style both exist,
        // v-bind:style with static literal object
        j.value.type === 17) && (j.value = Qe(
          t.helper(Kl),
          [j.value]
        )));
        break;
      case 14:
        break;
      default:
        y = Qe(
          t.helper(So),
          [
            Qe(t.helper(Po), [
              y
            ])
          ]
        );
        break;
    }
  return {
    props: y,
    directives: c,
    patchFlag: g,
    dynamicPropNames: v,
    shouldUseBlock: h
  };
}
function yc(e) {
  const t = /* @__PURE__ */ new Map(), n = [];
  for (let s = 0; s < e.length; s++) {
    const o = e[s];
    if (o.key.type === 8 || !o.key.isStatic) {
      n.push(o);
      continue;
    }
    const i = o.key.content, r = t.get(i);
    r ? (i === "style" || i === "class" || En(i)) && wv(r, o) : (t.set(i, o), n.push(o));
  }
  return n;
}
function wv(e, t) {
  e.value.type === 17 ? e.value.elements.push(t.value) : e.value = as(
    [e.value, t.value],
    e.loc
  );
}
function Ev(e, t) {
  const n = [], s = _f.get(e);
  s ? n.push(t.helperString(s)) : (t.helper(Hl), t.directives.add(e.name), n.push(Oo(e.name, "directive")));
  const { loc: o } = e;
  if (e.exp && n.push(e.exp), e.arg && (e.exp || n.push("void 0"), n.push(e.arg)), Object.keys(e.modifiers).length) {
    e.arg || (e.exp || n.push("void 0"), n.push("void 0"));
    const i = me("true", !1, o);
    n.push(
      Rt(
        e.modifiers.map(
          (r) => ze(r, i)
        ),
        o
      )
    );
  }
  return as(n, e.loc);
}
function xv(e) {
  let t = "[";
  for (let n = 0, s = e.length; n < s; n++)
    t += JSON.stringify(e[n]), n < s - 1 && (t += ", ");
  return t + "]";
}
function tl(e) {
  return e === "component" || e === "Component";
}
const Nv = (e, t) => {
  if ($i(e)) {
    const { children: n, loc: s } = e, { slotName: o, slotProps: i } = Sv(e, t), r = [
      t.prefixIdentifiers ? "_ctx.$slots" : "$slots",
      o,
      "{}",
      "undefined",
      "true"
    ];
    let l = 2;
    i && (r[2] = i, l = 3), n.length && (r[3] = js([], n, !1, !1, s), l = 4), t.scopeId && !t.slotted && (l = 5), r.splice(l), e.codegenNode = Qe(
      t.helper(Xd),
      r,
      s
    );
  }
};
function Sv(e, t) {
  let n = '"default"', s;
  const o = [];
  for (let i = 0; i < e.props.length; i++) {
    const r = e.props[i];
    if (r.type === 6)
      r.value && (r.name === "name" ? n = JSON.stringify(r.value.content) : (r.name = Ie(r.name), o.push(r)));
    else if (r.name === "bind" && Fn(r.arg, "name")) {
      if (r.exp)
        n = r.exp;
      else if (r.arg && r.arg.type === 4) {
        const l = Ie(r.arg.content);
        n = r.exp = me(l, !1, r.arg.loc);
      }
    } else
      r.name === "bind" && r.arg && Ct(r.arg) && (r.arg.content = Ie(r.arg.content)), o.push(r);
  }
  if (o.length > 0) {
    const { props: i, directives: r } = wf(
      e,
      t,
      o,
      !1,
      !1
    );
    s = i, r.length && t.onError(
      $e(
        36,
        r[0].loc
      )
    );
  }
  return {
    slotName: n,
    slotProps: s
  };
}
const Ef = (e, t, n, s) => {
  const { loc: o, modifiers: i, arg: r } = e;
  !e.exp && !i.length && n.onError($e(35, o));
  let l;
  if (r.type === 4)
    if (r.isStatic) {
      let c = r.content;
      ne.NODE_ENV !== "production" && c.startsWith("vnode") && n.onError($e(51, r.loc)), c.startsWith("vue:") && (c = `vnode-${c.slice(4)}`);
      const p = t.tagType !== 0 || c.startsWith("vnode") || !/[A-Z]/.test(c) ? (
        // for non-element and vnode lifecycle event listeners, auto convert
        // it to camelCase. See issue #2249
        ln(Ie(c))
      ) : (
        // preserve case for plain element listeners that have uppercase
        // letters, as these may be custom elements' custom events
        `on:${c}`
      );
      l = me(p, !0, r.loc);
    } else
      l = Xt([
        `${n.helperString(Gr)}(`,
        r,
        ")"
      ]);
  else
    l = r, l.children.unshift(`${n.helperString(Gr)}(`), l.children.push(")");
  let a = e.exp;
  a && !a.content.trim() && (a = void 0);
  let u = n.cacheHandlers && !a && !n.inVOnce;
  if (a) {
    const c = sf(a), p = !(c || v0(a)), h = a.content.includes(";");
    ne.NODE_ENV !== "production" && ts(
      a,
      n,
      !1,
      h
    ), (p || u && c) && (a = Xt([
      `${p ? "$event" : "(...args)"} => ${h ? "{" : "("}`,
      a,
      h ? "}" : ")"
    ]));
  }
  let f = {
    props: [
      ze(
        l,
        a || me("() => {}", !1, o)
      )
    ]
  };
  return s && (f = s(f)), u && (f.props[0].value = n.cache(f.props[0].value)), f.props.forEach((c) => c.key.isHandlerKey = !0), f;
}, kv = (e, t) => {
  if (e.type === 0 || e.type === 1 || e.type === 11 || e.type === 10)
    return () => {
      const n = e.children;
      let s, o = !1;
      for (let i = 0; i < n.length; i++) {
        const r = n[i];
        if (vr(r)) {
          o = !0;
          for (let l = i + 1; l < n.length; l++) {
            const a = n[l];
            if (vr(a))
              s || (s = n[i] = Xt(
                [r],
                r.loc
              )), s.children.push(" + ", a), n.splice(l, 1), l--;
            else {
              s = void 0;
              break;
            }
          }
        }
      }
      if (!(!o || // if this is a plain element with a single text child, leave it
      // as-is since the runtime has dedicated fast path for this by directly
      // setting textContent of the element.
      // for component root it's always normalized anyway.
      n.length === 1 && (e.type === 0 || e.type === 1 && e.tagType === 0 && // #3756
      // custom directives can potentially add DOM elements arbitrarily,
      // we need to avoid setting textContent of the element at runtime
      // to avoid accidentally overwriting the DOM elements added
      // by the user through custom directives.
      !e.props.find(
        (i) => i.type === 7 && !t.directiveTransforms[i.name]
      ) && e.tag !== "template")))
        for (let i = 0; i < n.length; i++) {
          const r = n[i];
          if (vr(r) || r.type === 8) {
            const l = [];
            (r.type !== 2 || r.content !== " ") && l.push(r), !t.ssr && Vt(r, t) === 0 && l.push(
              1 + (ne.NODE_ENV !== "production" ? ` /* ${ro[1]} */` : "")
            ), n[i] = {
              type: 12,
              content: r,
              loc: r.loc,
              codegenNode: Qe(
                t.helper(Fl),
                l
              )
            };
          }
        }
    };
}, bc = /* @__PURE__ */ new WeakSet(), Cv = (e, t) => {
  if (e.type === 1 && kt(e, "once", !0))
    return bc.has(e) || t.inVOnce || t.inSSR ? void 0 : (bc.add(e), t.inVOnce = !0, t.helper(ki), () => {
      t.inVOnce = !1;
      const n = t.currentNode;
      n.codegenNode && (n.codegenNode = t.cache(
        n.codegenNode,
        !0,
        !0
      ));
    });
}, xf = (e, t, n) => {
  const { exp: s, arg: o } = e;
  if (!s)
    return n.onError(
      $e(41, e.loc)
    ), Go();
  const i = s.loc.source.trim(), r = s.type === 4 ? s.content : i, l = n.bindingMetadata[i];
  if (l === "props" || l === "props-aliased")
    return n.onError($e(44, s.loc)), Go();
  if (!r.trim() || !sf(s))
    return n.onError(
      $e(42, s.loc)
    ), Go();
  const a = o || me("modelValue", !0), u = o ? Ct(o) ? `onUpdate:${Ie(o.content)}` : Xt(['"onUpdate:" + ', o]) : "onUpdate:modelValue";
  let f;
  const c = n.isTS ? "($event: any)" : "$event";
  f = Xt([
    `${c} => ((`,
    s,
    ") = $event)"
  ]);
  const p = [
    // modelValue: foo
    ze(a, e.exp),
    // "onUpdate:modelValue": $event => (foo = $event)
    ze(u, f)
  ];
  if (e.modifiers.length && t.tagType === 1) {
    const h = e.modifiers.map((m) => m.content).map((m) => (Zl(m) ? m : JSON.stringify(m)) + ": true").join(", "), g = o ? Ct(o) ? `${o.content}Modifiers` : Xt([o, ' + "Modifiers"']) : "modelModifiers";
    p.push(
      ze(
        g,
        me(
          `{ ${h} }`,
          !1,
          e.loc,
          2
        )
      )
    );
  }
  return Go(p);
};
function Go(e = []) {
  return { props: e };
}
const Ov = /[\w).+\-_$\]]/, Tv = (e, t) => {
  Un("COMPILER_FILTERS", t) && (e.type === 5 ? Ai(e.content, t) : e.type === 1 && e.props.forEach((n) => {
    n.type === 7 && n.name !== "for" && n.exp && Ai(n.exp, t);
  }));
};
function Ai(e, t) {
  if (e.type === 4)
    _c(e, t);
  else
    for (let n = 0; n < e.children.length; n++) {
      const s = e.children[n];
      typeof s == "object" && (s.type === 4 ? _c(s, t) : s.type === 8 ? Ai(e, t) : s.type === 5 && Ai(s.content, t));
    }
}
function _c(e, t) {
  const n = e.content;
  let s = !1, o = !1, i = !1, r = !1, l = 0, a = 0, u = 0, f = 0, c, p, h, g, m = [];
  for (h = 0; h < n.length; h++)
    if (p = c, c = n.charCodeAt(h), s)
      c === 39 && p !== 92 && (s = !1);
    else if (o)
      c === 34 && p !== 92 && (o = !1);
    else if (i)
      c === 96 && p !== 92 && (i = !1);
    else if (r)
      c === 47 && p !== 92 && (r = !1);
    else if (c === 124 && // pipe
    n.charCodeAt(h + 1) !== 124 && n.charCodeAt(h - 1) !== 124 && !l && !a && !u)
      g === void 0 ? (f = h + 1, g = n.slice(0, h).trim()) : D();
    else {
      switch (c) {
        case 34:
          o = !0;
          break;
        case 39:
          s = !0;
          break;
        case 96:
          i = !0;
          break;
        case 40:
          u++;
          break;
        case 41:
          u--;
          break;
        case 91:
          a++;
          break;
        case 93:
          a--;
          break;
        case 123:
          l++;
          break;
        case 125:
          l--;
          break;
      }
      if (c === 47) {
        let P = h - 1, V;
        for (; P >= 0 && (V = n.charAt(P), V === " "); P--)
          ;
        (!V || !Ov.test(V)) && (r = !0);
      }
    }
  g === void 0 ? g = n.slice(0, h).trim() : f !== 0 && D();
  function D() {
    m.push(n.slice(f, h).trim()), f = h + 1;
  }
  if (m.length) {
    for (ne.NODE_ENV !== "production" && Oi(
      "COMPILER_FILTERS",
      t,
      e.loc
    ), h = 0; h < m.length; h++)
      g = $v(g, m[h], t);
    e.content = g, e.ast = void 0;
  }
}
function $v(e, t, n) {
  n.helper(Ul);
  const s = t.indexOf("(");
  if (s < 0)
    return n.filters.add(t), `${Oo(t, "filter")}(${e})`;
  {
    const o = t.slice(0, s), i = t.slice(s + 1);
    return n.filters.add(o), `${Oo(o, "filter")}(${e}${i !== ")" ? "," + i : i}`;
  }
}
const wc = /* @__PURE__ */ new WeakSet(), Dv = (e, t) => {
  if (e.type === 1) {
    const n = kt(e, "memo");
    return !n || wc.has(e) ? void 0 : (wc.add(e), () => {
      const s = e.codegenNode || t.currentNode.codegenNode;
      s && s.type === 13 && (e.tagType !== 1 && Xl(s, t), e.codegenNode = Qe(t.helper(Yl), [
        n.exp,
        js(void 0, s),
        "_cache",
        String(t.cached.length)
      ]), t.cached.push(null));
    });
  }
};
function Av(e) {
  return [
    [
      Cv,
      av,
      Dv,
      pv,
      Tv,
      ...ne.NODE_ENV !== "production" ? [lv] : [],
      Nv,
      bv,
      gv,
      kv
    ],
    {
      on: Ef,
      bind: fv,
      model: xf
    }
  ];
}
function Vv(e, t = {}) {
  const n = t.onError || Ql, s = t.mode === "module";
  t.prefixIdentifiers === !0 ? n($e(47)) : s && n($e(48));
  const o = !1;
  t.cacheHandlers && n($e(49)), t.scopeId && !s && n($e(50));
  const i = ge({}, t, {
    prefixIdentifiers: o
  }), r = de(e) ? M0(e, i) : e, [l, a] = Av();
  return F0(
    r,
    ge({}, i, {
      nodeTransforms: [
        ...l,
        ...t.nodeTransforms || []
        // user transforms
      ],
      directiveTransforms: ge(
        {},
        a,
        t.directiveTransforms || {}
        // user transforms
      )
    })
  ), U0(r, i);
}
const Iv = () => ({ props: [] });
var ht = {};
const Nf = Symbol(ht.NODE_ENV !== "production" ? "vModelRadio" : ""), Sf = Symbol(
  ht.NODE_ENV !== "production" ? "vModelCheckbox" : ""
), kf = Symbol(ht.NODE_ENV !== "production" ? "vModelText" : ""), Cf = Symbol(
  ht.NODE_ENV !== "production" ? "vModelSelect" : ""
), nl = Symbol(
  ht.NODE_ENV !== "production" ? "vModelDynamic" : ""
), Of = Symbol(
  ht.NODE_ENV !== "production" ? "vOnModifiersGuard" : ""
), Tf = Symbol(
  ht.NODE_ENV !== "production" ? "vOnKeysGuard" : ""
), $f = Symbol(ht.NODE_ENV !== "production" ? "vShow" : ""), na = Symbol(ht.NODE_ENV !== "production" ? "Transition" : ""), Df = Symbol(
  ht.NODE_ENV !== "production" ? "TransitionGroup" : ""
);
s0({
  [Nf]: "vModelRadio",
  [Sf]: "vModelCheckbox",
  [kf]: "vModelText",
  [Cf]: "vModelSelect",
  [nl]: "vModelDynamic",
  [Of]: "withModifiers",
  [Tf]: "withKeys",
  [$f]: "vShow",
  [na]: "Transition",
  [Df]: "TransitionGroup"
});
let _s;
function Mv(e, t = !1) {
  return _s || (_s = document.createElement("div")), t ? (_s.innerHTML = `<div foo="${e.replace(/"/g, "&quot;")}">`, _s.children[0].getAttribute("foo")) : (_s.innerHTML = e, _s.textContent);
}
const Pv = {
  parseMode: "html",
  isVoidTag: ip,
  isNativeTag: (e) => Vc(e) || Ic(e) || Mc(e),
  isPreTag: (e) => e === "pre",
  isIgnoreNewlineTag: (e) => e === "pre" || e === "textarea",
  decodeEntities: Mv,
  isBuiltInComponent: (e) => {
    if (e === "Transition" || e === "transition")
      return na;
    if (e === "TransitionGroup" || e === "transition-group")
      return Df;
  },
  // https://html.spec.whatwg.org/multipage/parsing.html#tree-construction-dispatcher
  getNamespace(e, t, n) {
    let s = t ? t.ns : n;
    if (t && s === 2)
      if (t.tag === "annotation-xml") {
        if (e === "svg")
          return 1;
        t.props.some(
          (o) => o.type === 6 && o.name === "encoding" && o.value != null && (o.value.content === "text/html" || o.value.content === "application/xhtml+xml")
        ) && (s = 0);
      } else /^m(?:[ions]|text)$/.test(t.tag) && e !== "mglyph" && e !== "malignmark" && (s = 0);
    else t && s === 1 && (t.tag === "foreignObject" || t.tag === "desc" || t.tag === "title") && (s = 0);
    if (s === 0) {
      if (e === "svg")
        return 1;
      if (e === "math")
        return 2;
    }
    return s;
  }
}, Rv = (e) => {
  e.type === 1 && e.props.forEach((t, n) => {
    t.type === 6 && t.name === "style" && t.value && (e.props[n] = {
      type: 7,
      name: "bind",
      arg: me("style", !0, t.loc),
      exp: Lv(t.value.content, t.loc),
      modifiers: [],
      loc: t.loc
    });
  });
}, Lv = (e, t) => {
  const n = Ac(e);
  return me(
    JSON.stringify(n),
    !1,
    t,
    3
  );
};
function Jt(e, t) {
  return $e(
    e,
    t,
    ht.NODE_ENV !== "production" ? Fv : void 0
  );
}
const Fv = {
  53: "v-html is missing expression.",
  54: "v-html will override element children.",
  55: "v-text is missing expression.",
  56: "v-text will override element children.",
  57: "v-model can only be used on <input>, <textarea> and <select> elements.",
  58: "v-model argument is not supported on plain elements.",
  59: "v-model cannot be used on file inputs since they are read-only. Use a v-on:change listener instead.",
  60: "Unnecessary value binding used alongside v-model. It will interfere with v-model's behavior.",
  61: "v-show is missing expression.",
  62: "<Transition> expects exactly one child element or component.",
  63: "Tags with side effect (<script> and <style>) are ignored in client component templates."
}, Bv = (e, t, n) => {
  const { exp: s, loc: o } = e;
  return s || n.onError(
    Jt(53, o)
  ), t.children.length && (n.onError(
    Jt(54, o)
  ), t.children.length = 0), {
    props: [
      ze(
        me("innerHTML", !0, o),
        s || me("", !0)
      )
    ]
  };
}, jv = (e, t, n) => {
  const { exp: s, loc: o } = e;
  return s || n.onError(
    Jt(55, o)
  ), t.children.length && (n.onError(
    Jt(56, o)
  ), t.children.length = 0), {
    props: [
      ze(
        me("textContent", !0),
        s ? Vt(s, n) > 0 ? s : Qe(
          n.helperString(Zi),
          [s],
          o
        ) : me("", !0)
      )
    ]
  };
}, Hv = (e, t, n) => {
  const s = xf(e, t, n);
  if (!s.props.length || t.tagType === 1)
    return s;
  e.arg && n.onError(
    Jt(
      58,
      e.arg.loc
    )
  );
  function o() {
    const l = kt(t, "bind");
    l && Fn(l.arg, "value") && n.onError(
      Jt(
        60,
        l.loc
      )
    );
  }
  const { tag: i } = t, r = n.isCustomElement(i);
  if (i === "input" || i === "textarea" || i === "select" || r) {
    let l = kf, a = !1;
    if (i === "input" || r) {
      const u = Co(t, "type");
      if (u) {
        if (u.type === 7)
          l = nl;
        else if (u.value)
          switch (u.value.content) {
            case "radio":
              l = Nf;
              break;
            case "checkbox":
              l = Sf;
              break;
            case "file":
              a = !0, n.onError(
                Jt(
                  59,
                  e.loc
                )
              );
              break;
            default:
              ht.NODE_ENV !== "production" && o();
              break;
          }
      } else y0(t) ? l = nl : ht.NODE_ENV !== "production" && o();
    } else i === "select" ? l = Cf : ht.NODE_ENV !== "production" && o();
    a || (s.needRuntime = n.helper(l));
  } else
    n.onError(
      Jt(
        57,
        e.loc
      )
    );
  return s.props = s.props.filter(
    (l) => !(l.key.type === 4 && l.key.content === "modelValue")
  ), s;
}, Uv = /* @__PURE__ */ et("passive,once,capture"), qv = /* @__PURE__ */ et(
  // event propagation management
  "stop,prevent,self,ctrl,shift,alt,meta,exact,middle"
), zv = /* @__PURE__ */ et("left,right"), Af = /* @__PURE__ */ et("onkeyup,onkeydown,onkeypress"), Wv = (e, t, n, s) => {
  const o = [], i = [], r = [];
  for (let l = 0; l < t.length; l++) {
    const a = t[l].content;
    a === "native" && qs(
      "COMPILER_V_ON_NATIVE",
      n,
      s
    ) || Uv(a) ? r.push(a) : zv(a) ? Ct(e) ? Af(e.content.toLowerCase()) ? o.push(a) : i.push(a) : (o.push(a), i.push(a)) : qv(a) ? i.push(a) : o.push(a);
  }
  return {
    keyModifiers: o,
    nonKeyModifiers: i,
    eventOptionModifiers: r
  };
}, Ec = (e, t) => Ct(e) && e.content.toLowerCase() === "onclick" ? me(t, !0) : e.type !== 4 ? Xt([
  "(",
  e,
  `) === "onClick" ? "${t}" : (`,
  e,
  ")"
]) : e, Kv = (e, t, n) => Ef(e, t, n, (s) => {
  const { modifiers: o } = e;
  if (!o.length) return s;
  let { key: i, value: r } = s.props[0];
  const { keyModifiers: l, nonKeyModifiers: a, eventOptionModifiers: u } = Wv(i, o, n, e.loc);
  if (a.includes("right") && (i = Ec(i, "onContextmenu")), a.includes("middle") && (i = Ec(i, "onMouseup")), a.length && (r = Qe(n.helper(Of), [
    r,
    JSON.stringify(a)
  ])), l.length && // if event name is dynamic, always wrap with keys guard
  (!Ct(i) || Af(i.content.toLowerCase())) && (r = Qe(n.helper(Tf), [
    r,
    JSON.stringify(l)
  ])), u.length) {
    const f = u.map(un).join("");
    i = Ct(i) ? me(`${i.content}${f}`, !0) : Xt(["(", i, `) + "${f}"`]);
  }
  return {
    props: [ze(i, r)]
  };
}), Gv = (e, t, n) => {
  const { exp: s, loc: o } = e;
  return s || n.onError(
    Jt(61, o)
  ), {
    props: [],
    needRuntime: n.helper($f)
  };
}, Jv = (e, t) => {
  if (e.type === 1 && e.tagType === 1 && t.isBuiltInComponent(e.tag) === na)
    return () => {
      if (!e.children.length)
        return;
      Vf(e) && t.onError(
        Jt(
          62,
          {
            start: e.children[0].loc.start,
            end: e.children[e.children.length - 1].loc.end,
            source: ""
          }
        )
      );
      const s = e.children[0];
      if (s.type === 1)
        for (const o of s.props)
          o.type === 7 && o.name === "show" && e.props.push({
            type: 6,
            name: "persisted",
            nameLoc: e.loc,
            value: void 0,
            loc: e.loc
          });
    };
};
function Vf(e) {
  const t = e.children = e.children.filter(
    (s) => s.type !== 3 && !(s.type === 2 && !s.content.trim())
  ), n = t[0];
  return t.length !== 1 || n.type === 11 || n.type === 9 && n.branches.some(Vf);
}
const Yv = (e, t) => {
  e.type === 1 && e.tagType === 0 && (e.tag === "script" || e.tag === "style") && (ht.NODE_ENV !== "production" && t.onError(
    Jt(
      63,
      e.loc
    )
  ), t.removeNode());
};
function Xv(e, t) {
  return e === "template" ? !0 : e in xc ? xc[e].has(t) : t in Nc ? Nc[t].has(e) : !(e in Sc && Sc[e].has(t) || t in kc && kc[t].has(e));
}
const ws = /* @__PURE__ */ new Set(["h1", "h2", "h3", "h4", "h5", "h6"]), Qn = /* @__PURE__ */ new Set([]), xc = {
  head: /* @__PURE__ */ new Set([
    "base",
    "basefront",
    "bgsound",
    "link",
    "meta",
    "title",
    "noscript",
    "noframes",
    "style",
    "script",
    "template"
  ]),
  optgroup: /* @__PURE__ */ new Set(["option"]),
  select: /* @__PURE__ */ new Set(["optgroup", "option", "hr"]),
  // table
  table: /* @__PURE__ */ new Set(["caption", "colgroup", "tbody", "tfoot", "thead"]),
  tr: /* @__PURE__ */ new Set(["td", "th"]),
  colgroup: /* @__PURE__ */ new Set(["col"]),
  tbody: /* @__PURE__ */ new Set(["tr"]),
  thead: /* @__PURE__ */ new Set(["tr"]),
  tfoot: /* @__PURE__ */ new Set(["tr"]),
  // these elements can not have any children elements
  script: Qn,
  iframe: Qn,
  option: Qn,
  textarea: Qn,
  style: Qn,
  title: Qn
}, Nc = {
  // sections
  html: Qn,
  body: /* @__PURE__ */ new Set(["html"]),
  head: /* @__PURE__ */ new Set(["html"]),
  // table
  td: /* @__PURE__ */ new Set(["tr"]),
  colgroup: /* @__PURE__ */ new Set(["table"]),
  caption: /* @__PURE__ */ new Set(["table"]),
  tbody: /* @__PURE__ */ new Set(["table"]),
  tfoot: /* @__PURE__ */ new Set(["table"]),
  col: /* @__PURE__ */ new Set(["colgroup"]),
  th: /* @__PURE__ */ new Set(["tr"]),
  thead: /* @__PURE__ */ new Set(["table"]),
  tr: /* @__PURE__ */ new Set(["tbody", "thead", "tfoot"]),
  // data list
  dd: /* @__PURE__ */ new Set(["dl", "div"]),
  dt: /* @__PURE__ */ new Set(["dl", "div"]),
  // other
  figcaption: /* @__PURE__ */ new Set(["figure"]),
  // li: new Set(["ul", "ol"]),
  summary: /* @__PURE__ */ new Set(["details"]),
  area: /* @__PURE__ */ new Set(["map"])
}, Sc = {
  p: /* @__PURE__ */ new Set([
    "address",
    "article",
    "aside",
    "blockquote",
    "center",
    "details",
    "dialog",
    "dir",
    "div",
    "dl",
    "fieldset",
    "figure",
    "footer",
    "form",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "header",
    "hgroup",
    "hr",
    "li",
    "main",
    "nav",
    "menu",
    "ol",
    "p",
    "pre",
    "section",
    "table",
    "ul"
  ]),
  svg: /* @__PURE__ */ new Set([
    "b",
    "blockquote",
    "br",
    "code",
    "dd",
    "div",
    "dl",
    "dt",
    "em",
    "embed",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "hr",
    "i",
    "img",
    "li",
    "menu",
    "meta",
    "ol",
    "p",
    "pre",
    "ruby",
    "s",
    "small",
    "span",
    "strong",
    "sub",
    "sup",
    "table",
    "u",
    "ul",
    "var"
  ])
}, kc = {
  a: /* @__PURE__ */ new Set(["a"]),
  button: /* @__PURE__ */ new Set(["button"]),
  dd: /* @__PURE__ */ new Set(["dd", "dt"]),
  dt: /* @__PURE__ */ new Set(["dd", "dt"]),
  form: /* @__PURE__ */ new Set(["form"]),
  li: /* @__PURE__ */ new Set(["li"]),
  h1: ws,
  h2: ws,
  h3: ws,
  h4: ws,
  h5: ws,
  h6: ws
}, Qv = (e, t) => {
  if (e.type === 1 && e.tagType === 0 && t.parent && t.parent.type === 1 && t.parent.tagType === 0 && !Xv(t.parent.tag, e.tag)) {
    const n = new SyntaxError(
      `<${e.tag}> cannot be child of <${t.parent.tag}>, according to HTML specifications. This can cause hydration errors or potentially disrupt future functionality.`
    );
    n.loc = e.loc, t.onWarn(n);
  }
}, Zv = [
  Rv,
  ...ht.NODE_ENV !== "production" ? [Jv, Qv] : []
], ey = {
  cloak: Iv,
  html: Bv,
  text: jv,
  model: Hv,
  // override compiler-core
  on: Kv,
  // override compiler-core
  show: Gv
};
function ty(e, t = {}) {
  return Vv(
    e,
    ge({}, Pv, t, {
      nodeTransforms: [
        // ignore <script> and <tag>
        // this is not put inside DOMNodeTransforms because that list is used
        // by compiler-ssr to generate vnode fallback branches
        Yv,
        ...Zv,
        ...t.nodeTransforms || []
      ],
      directiveTransforms: ge(
        {},
        ey,
        t.directiveTransforms || {}
      ),
      transformHoist: null
    })
  );
}
var io = {};
function ny() {
  Nd();
}
io.NODE_ENV !== "production" && ny();
const Cc = /* @__PURE__ */ Object.create(null);
function sy(e, t) {
  if (!de(e))
    if (e.nodeType)
      e = e.innerHTML;
    else
      return io.NODE_ENV !== "production" && He("invalid template option: ", e), Fe;
  const n = zf(e, t), s = Cc[n];
  if (s)
    return s;
  if (e[0] === "#") {
    const a = document.querySelector(e);
    io.NODE_ENV !== "production" && !a && He(`Template element not found or is empty: ${e}`), e = a ? a.innerHTML : "";
  }
  const o = ge(
    {
      hoistStatic: !0,
      onError: io.NODE_ENV !== "production" ? r : void 0,
      onWarn: io.NODE_ENV !== "production" ? (a) => r(a, !0) : Fe
    },
    t
  );
  !o.isCustomElement && typeof customElements < "u" && (o.isCustomElement = (a) => !!customElements.get(a));
  const { code: i } = ty(e, o);
  function r(a, u = !1) {
    const f = u ? a.message : `Template compilation error: ${a.message}`, c = a.loc && Jf(
      e,
      a.loc.start.offset,
      a.loc.end.offset
    );
    He(c ? `${f}
${c}` : f);
  }
  const l = new Function("Vue", i)(Xg);
  return l._rc = !0, Cc[n] = l;
}
bd(sy);
const nr = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [s, o] of t)
    n[s] = o;
  return n;
}, oy = {
  key: 0,
  class: "animate-spin -ml-1 mr-3 h-5 w-5",
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24"
}, iy = {
  __name: "Button",
  props: {
    variant: {
      type: String,
      default: "primary",
      validator: (e) => ["primary", "secondary", "outline", "ghost", "link"].includes(e)
    },
    size: {
      type: String,
      default: "medium",
      validator: (e) => ["small", "medium", "large"].includes(e)
    },
    fullWidth: {
      type: Boolean,
      default: !1
    },
    href: {
      type: String,
      default: null
    },
    type: {
      type: String,
      default: "button"
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    loading: {
      type: Boolean,
      default: !1
    },
    rounded: {
      type: String,
      default: "default",
      validator: (e) => ["default", "full", "none"].includes(e)
    },
    // Global button settings can be passed as props
    buttonRadius: {
      type: [String, Number],
      default: null
    },
    primaryBg: {
      type: String,
      default: null
    },
    primaryBgHover: {
      type: String,
      default: null
    },
    primaryText: {
      type: String,
      default: null
    },
    secondaryBg: {
      type: String,
      default: null
    },
    secondaryBgHover: {
      type: String,
      default: null
    },
    secondaryText: {
      type: String,
      default: null
    },
    secondaryBorder: {
      type: String,
      default: null
    }
  },
  emits: ["click"],
  setup(e, { emit: t }) {
    const n = e, s = t, o = X(!1), i = G(() => n.href ? "a" : "button"), r = G(() => {
      const u = {};
      return n.rounded === "full" ? u.borderRadius = "9999px" : n.rounded === "none" && (u.borderRadius = "0"), u;
    }), l = G(() => {
      const u = ["btn"];
      n.fullWidth && u.push("w-full");
      const f = {
        small: "btn-sm",
        medium: "",
        // default size
        large: "btn-lg"
      };
      return f[n.size] && u.push(f[n.size]), n.variant === "primary" ? u.push("btn-primary") : n.variant === "secondary" ? u.push("btn-secondary") : n.variant === "outline" ? u.push("btn-outline") : n.variant === "ghost" ? u.push("btn-ghost") : n.variant === "link" && u.push("btn-link"), (n.disabled || n.loading) && u.push("disabled"), u.join(" ");
    }), a = (u) => {
      !n.disabled && !n.loading && s("click", u);
    };
    return (u, f) => (E(), Tt(Pu(i.value), {
      href: e.href,
      type: e.type,
      disabled: e.disabled || e.loading,
      class: be(l.value),
      style: Ve(r.value),
      onClick: a,
      onMouseenter: f[0] || (f[0] = (c) => o.value = !0),
      onMouseleave: f[1] || (f[1] = (c) => o.value = !1)
    }, {
      default: Re(() => [
        e.loading ? (E(), x("svg", oy, f[2] || (f[2] = [
          d("circle", {
            class: "opacity-25",
            cx: "12",
            cy: "12",
            r: "10",
            stroke: "currentColor",
            "stroke-width": "4"
          }, null, -1),
          d("path", {
            class: "opacity-75",
            fill: "currentColor",
            d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          }, null, -1)
        ]))) : H("", !0),
        kl(u.$slots, "default", {}, void 0, !0)
      ]),
      _: 3
    }, 40, ["href", "type", "disabled", "class", "style"]));
  }
}, wn = /* @__PURE__ */ nr(iy, [["__scopeId", "data-v-aa558e6d"]]), ry = ["disabled"], ly = ["value", "min", "max"], ay = ["disabled"], If = {
  __name: "QuantitySelector",
  props: {
    modelValue: {
      type: Number,
      default: 1
    },
    min: {
      type: Number,
      default: 1
    },
    max: {
      type: Number,
      default: 999
    },
    step: {
      type: Number,
      default: 1
    },
    size: {
      type: String,
      default: "default",
      // 'default', 'small'
      validator: (e) => ["default", "small"].includes(e)
    }
  },
  emits: ["update:modelValue", "update"],
  setup(e, { emit: t }) {
    const n = e, s = t, o = mt(), i = G({
      get: () => n.modelValue,
      set: (f) => {
        var p, h, g;
        const c = Math.max(n.min, Math.min(n.max, f));
        if (s("update:modelValue", c), s("update", c), ((g = (h = (p = o == null ? void 0 : o.vnode) == null ? void 0 : p.el) == null ? void 0 : h.parentElement) == null ? void 0 : g.tagName) === "QUANTITY-SELECTOR") {
          const m = o.vnode.el.parentElement, D = m.getAttribute("data-line-key");
          if (D) {
            const P = new CustomEvent("quantity-update", {
              detail: { key: D, value: c },
              bubbles: !0
            });
            m.dispatchEvent(P);
          }
        }
      }
    }), r = () => {
      i.value > n.min && (i.value = i.value - n.step);
    }, l = () => {
      i.value < n.max && (i.value = i.value + n.step);
    }, a = (f) => {
      const c = parseInt(f.target.value) || n.min;
      i.value = c;
    }, u = (f) => {
      const c = parseInt(f.target.value) || n.min;
      i.value = c, f.target.value = i.value;
    };
    return (f, c) => (E(), x("div", {
      class: be(["inline-flex items-center overflow-hidden bg-white", e.size === "small" ? "quantity-selector-small" : "quantity-selector"]),
      style: {
        border: "var(--input-border-thickness, 1px) solid rgba(var(--color-entry-line, 61, 50, 89), var(--input-border-opacity-decimal, 1))",
        borderRadius: "var(--input-border-radius, 30px)"
      }
    }, [
      d("button", {
        type: "button",
        class: be(["flex items-center justify-center bg-gray-50 transition-all duration-200 text-gray-600 cursor-pointer hover:bg-gray-100 hover:text-gray-900 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-gray-50 disabled:hover:text-gray-600", e.size === "small" ? "w-8 h-8 p-1" : "w-10 h-10"]),
        style: {
          borderRight: "1px solid rgba(var(--color-entry-line, 61, 50, 89), var(--input-border-opacity-decimal, 1))"
        },
        disabled: e.modelValue <= e.min,
        onClick: r,
        "aria-label": "Decrease quantity"
      }, [
        (E(), x("svg", {
          class: be((e.size === "small", "w-3 h-3")),
          fill: "none",
          stroke: "currentColor",
          viewBox: "0 0 24 24"
        }, c[0] || (c[0] = [
          d("path", {
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            "stroke-width": "2",
            d: "M20 12H4"
          }, null, -1)
        ]), 2))
      ], 10, ry),
      d("input", {
        type: "number",
        class: be(["quantity-input text-center bg-white text-gray-900 font-medium", e.size === "small" ? "w-10 h-8 text-xs p-1" : "w-16 h-10 text-sm"]),
        value: e.modelValue,
        min: e.min,
        max: e.max,
        onInput: a,
        onBlur: u,
        "aria-label": "Quantity"
      }, null, 42, ly),
      d("button", {
        type: "button",
        class: be(["flex items-center justify-center bg-gray-50 transition-all duration-200 text-gray-600 cursor-pointer hover:bg-gray-100 hover:text-gray-900 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-gray-50 disabled:hover:text-gray-600", e.size === "small" ? "w-8 h-8 p-1" : "w-10 h-10"]),
        style: {
          borderLeft: "1px solid rgba(var(--color-entry-line, 61, 50, 89), var(--input-border-opacity-decimal, 1))"
        },
        disabled: e.modelValue >= e.max,
        onClick: l,
        "aria-label": "Increase quantity"
      }, [
        (E(), x("svg", {
          class: be((e.size === "small", "w-3 h-3")),
          fill: "none",
          stroke: "currentColor",
          viewBox: "0 0 24 24"
        }, c[1] || (c[1] = [
          d("path", {
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            "stroke-width": "2",
            d: "M12 4v16m8-8H4"
          }, null, -1)
        ]), 2))
      ], 10, ay)
    ], 2));
  }
}, cy = ["data-updating"], uy = { class: "flex gap-3 lg:gap-4" }, dy = { class: "flex-shrink-0" }, fy = ["href"], py = ["src", "alt"], hy = { class: "flex-1 min-w-0" }, my = { class: "flex justify-between gap-4 mb-3" }, gy = { class: "flex-1" }, vy = { class: "text-sm lg:text-base font-medium mb-1" }, yy = ["href"], by = {
  key: 0,
  class: "text-sm text-gray-600 mb-2"
}, _y = {
  key: 1,
  class: "space-y-1 mt-2"
}, wy = { class: "font-medium" }, Ey = { class: "lg:hidden text-right flex-shrink-0" }, xy = { class: "text-sm font-semibold text-gray-900 whitespace-nowrap" }, Ny = {
  key: 0,
  class: "text-xs text-gray-500 line-through"
}, Sy = {
  key: 0,
  class: "space-y-2 mb-3"
}, ky = { class: "flex items-center justify-between gap-4" }, Cy = { class: "flex items-center gap-3" }, Oy = ["disabled"], Ty = {
  key: 0,
  class: "w-5 h-5",
  fill: "none",
  stroke: "currentColor",
  viewBox: "0 0 24 24"
}, $y = {
  key: 1,
  class: "w-5 h-5 animate-spin",
  fill: "none",
  viewBox: "0 0 24 24"
}, Dy = { class: "hidden lg:block text-right flex-shrink-0" }, Ay = { class: "text-sm font-semibold text-gray-900 whitespace-nowrap" }, Vy = {
  key: 0,
  class: "text-xs text-gray-500 line-through"
}, Iy = {
  key: 1,
  class: "text-xs text-green-600 font-medium mt-1"
}, My = {
  key: 1,
  class: "text-xs text-amber-600 mt-2"
}, Py = {
  key: 2,
  class: "text-xs text-red-600 mt-2"
}, Mf = {
  __name: "CartItem",
  props: {
    item: {
      type: Object,
      required: !0
    }
  },
  emits: ["update", "remove"],
  setup(e, { emit: t }) {
    const n = e, s = t, o = X(n.item.quantity), i = X(!1), r = X(""), l = G(() => !n.item.variant || n.item.variant.inventory_policy === "continue" ? 999 : Math.min(n.item.variant.inventory_quantity || 999, 999)), a = G(() => {
      var h;
      return ((h = n.item.variant) == null ? void 0 : h.inventory_quantity) && n.item.variant.inventory_quantity <= 10 && n.item.variant.inventory_policy !== "continue";
    }), u = G(() => {
      const h = n.item.image || "/assets/placeholder-product.svg";
      return window.getImageUrl && h !== "/assets/placeholder-product.svg" ? window.getImageUrl(h, { preset: "cart-item" }) : h;
    }), f = (h) => {
      var N, v;
      if (!h && h !== 0) return "$0.00";
      if (typeof h == "string" && h.includes("$"))
        return h;
      const g = window.ShoplineCurrency || {};
      g.symbol, g.current;
      const m = parseFloat(h);
      let D = g.format || ((N = Shopline == null ? void 0 : Shopline.shop) == null ? void 0 : N.money_format) || "${{amount}}";
      D && !D.includes("{{amount}}") && (D = D + "{{amount}}");
      const P = ((v = Shopline == null ? void 0 : Shopline.locale) == null ? void 0 : v.current) || "en", _ = new Intl.NumberFormat(P, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      }).format(m);
      return D.replace("{{amount}}", _);
    }, c = async (h) => {
      if (!i.value) {
        i.value = !0, r.value = "";
        try {
          s("update", {
            key: n.item.key,
            quantity: h
          }), h === 0 && s("remove", n.item.key);
        } catch (g) {
          console.error("Failed to update quantity:", g), r.value = "Failed to update quantity. Please try again.", o.value = n.item.quantity;
        } finally {
          i.value = !1;
        }
      }
    }, p = async () => {
      if (!i.value) {
        i.value = !0, r.value = "";
        try {
          s("remove", n.item.key);
        } catch (h) {
          console.error("Failed to remove item:", h), r.value = "Failed to remove item. Please try again.";
        } finally {
          i.value = !1;
        }
      }
    };
    return Lt(
      () => n.item.quantity,
      (h) => {
        o.value = h;
      }
    ), (h, g) => (E(), x("div", {
      class: "p-3 lg:p-4 border-b border-gray-200 last:border-b-0 bg-white hover:bg-gray-50 transition-colors",
      "data-updating": i.value
    }, [
      d("div", uy, [
        d("div", dy, [
          d("a", {
            href: e.item.url,
            class: "block relative overflow-hidden rounded-lg bg-gray-100"
          }, [
            d("img", {
              src: u.value,
              alt: e.item.product_title,
              class: "w-20 h-20 lg:w-24 lg:h-24 object-cover",
              loading: "lazy"
            }, null, 8, py)
          ], 8, fy)
        ]),
        d("div", hy, [
          d("div", my, [
            d("div", gy, [
              d("h3", vy, [
                d("a", {
                  href: e.item.url,
                  class: "text-gray-900 hover:text-gray-700 transition-colors"
                }, Q(e.item.product_title), 9, yy)
              ]),
              e.item.variant_title && e.item.variant_title !== "Default Title" ? (E(), x("p", by, Q(e.item.variant_title), 1)) : H("", !0),
              e.item.properties && Object.keys(e.item.properties).length ? (E(), x("div", _y, [
                (E(!0), x(ae, null, we(e.item.properties, (m, D) => (E(), x("p", {
                  key: D,
                  class: "text-xs text-gray-600"
                }, [
                  d("span", wy, Q(D) + ":", 1),
                  We(" " + Q(m), 1)
                ]))), 128))
              ])) : H("", !0)
            ]),
            d("div", Ey, [
              d("p", xy, Q(f(e.item.line_price || e.item.price * e.item.quantity)), 1),
              e.item.original_price && e.item.price < e.item.original_price ? (E(), x("p", Ny, Q(f(e.item.original_price * e.item.quantity)), 1)) : H("", !0)
            ])
          ]),
          e.item.discounts && e.item.discounts.length ? (E(), x("div", Sy, [
            (E(!0), x(ae, null, we(e.item.discounts, (m) => (E(), x("div", {
              key: m.id,
              class: "flex items-center gap-2 text-sm text-green-700 bg-green-50 px-3 py-1.5 rounded-lg"
            }, [
              g[1] || (g[1] = d("svg", {
                class: "w-4 h-4 flex-shrink-0",
                fill: "currentColor",
                viewBox: "0 0 20 20"
              }, [
                d("path", {
                  "fill-rule": "evenodd",
                  d: "M5 2a2 2 0 00-2 2v11a2 2 0 002 2h10a2 2 0 002-2V4a2 2 0 00-2-2H5zm0 2h10v7h-2l-1 2H8l-1-2H5V4z",
                  "clip-rule": "evenodd"
                })
              ], -1)),
              We(" " + Q(m.title) + " (-" + Q(f(m.amount || m.total_allocated_amount)) + ") ", 1)
            ]))), 128))
          ])) : H("", !0),
          d("div", ky, [
            d("div", Cy, [
              fe(If, {
                modelValue: o.value,
                "onUpdate:modelValue": [
                  g[0] || (g[0] = (m) => o.value = m),
                  c
                ],
                min: 0,
                max: l.value,
                disabled: i.value,
                size: "small"
              }, null, 8, ["modelValue", "max", "disabled"]),
              d("button", {
                type: "button",
                onClick: p,
                class: "p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all",
                disabled: i.value,
                "aria-label": "Remove item from cart"
              }, [
                i.value ? (E(), x("svg", $y, g[3] || (g[3] = [
                  d("circle", {
                    class: "opacity-25",
                    cx: "12",
                    cy: "12",
                    r: "10",
                    stroke: "currentColor",
                    "stroke-width": "4"
                  }, null, -1),
                  d("path", {
                    class: "opacity-75",
                    fill: "currentColor",
                    d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  }, null, -1)
                ]))) : (E(), x("svg", Ty, g[2] || (g[2] = [
                  d("path", {
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    "stroke-width": "2",
                    d: "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                  }, null, -1)
                ])))
              ], 8, Oy)
            ]),
            d("div", Dy, [
              d("p", Ay, Q(f(e.item.line_price || e.item.price * e.item.quantity)), 1),
              e.item.original_price && e.item.price < e.item.original_price ? (E(), x("p", Vy, Q(f(e.item.original_price * e.item.quantity)), 1)) : H("", !0),
              e.item.original_price && e.item.price < e.item.original_price ? (E(), x("p", Iy, " Save " + Q(Math.round(
                (e.item.original_price - e.item.price) / e.item.original_price * 100
              )) + "% ", 1)) : H("", !0)
            ])
          ]),
          a.value ? (E(), x("p", My, " Only " + Q(e.item.variant.inventory_quantity) + " left in stock ", 1)) : H("", !0),
          r.value ? (E(), x("p", Py, Q(r.value), 1)) : H("", !0)
        ])
      ])
    ], 8, cy));
  }
}, Ry = {
  key: 0,
  class: "fixed inset-0 z-[99999] overflow-hidden"
}, Ly = { class: "absolute inset-0 overflow-hidden" }, Fy = { class: "fixed inset-y-0 right-0 max-w-full flex pointer-events-none" }, By = {
  key: 0,
  class: "w-screen max-w-md pointer-events-auto"
}, jy = { class: "h-full flex flex-col bg-white shadow-xl transition-shadow duration-300" }, Hy = { class: "flex items-center justify-between px-4 py-6 sm:px-6 border-b border-gray-200" }, Uy = {
  key: 0,
  class: "text-sm text-gray-500 mt-1"
}, qy = { class: "flex-1 overflow-y-auto" }, zy = {
  key: 0,
  class: "flex flex-col items-center justify-center h-full px-4 py-12"
}, Wy = { key: 1 }, Ky = {
  key: 0,
  class: "border-t border-gray-200 px-4 py-6 sm:px-6 space-y-6"
}, Gy = {
  key: 0,
  class: "flex items-center gap-2"
}, Jy = {
  key: 1,
  class: "flex items-center gap-2"
}, Yy = { class: "text-sm text-blue-800" }, Xy = {
  key: 2,
  class: "mt-2 bg-blue-200 rounded-full h-2 overflow-hidden"
}, Qy = { class: "flex justify-between text-base font-medium text-gray-900" }, Zy = { class: "space-y-3" }, Pf = {
  __name: "CartDrawer",
  setup(e) {
    const t = X(!1), n = X([]), s = X(0), o = G(() => {
      var g;
      return ((g = Shopline == null ? void 0 : Shopline.routes) == null ? void 0 : g.cart) || "/checkout";
    }), i = G(() => {
      var m, D;
      return ((D = (m = Shopline == null ? void 0 : Shopline.theme) == null ? void 0 : m.settings) == null ? void 0 : D.free_shipping_threshold) || 50;
    }), r = G(() => {
      var g, m;
      return ((m = (g = Shopline == null ? void 0 : Shopline.theme) == null ? void 0 : g.settings) == null ? void 0 : m.show_free_shipping_bar) !== !1;
    }), l = (g) => {
      var v, w;
      if (!g && g !== 0) return "$0.00";
      const m = window.ShoplineCurrency || {};
      m.symbol;
      const D = parseFloat(g);
      let P = m.format || ((v = Shopline == null ? void 0 : Shopline.shop) == null ? void 0 : v.money_format) || "${{amount}}";
      P && !P.includes("{{amount}}") && (P = P + "{{amount}}");
      const V = ((w = Shopline == null ? void 0 : Shopline.locale) == null ? void 0 : w.current) || "en", N = new Intl.NumberFormat(V, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      }).format(D);
      return P.replace("{{amount}}", N);
    }, a = () => {
      t.value = !0, document.body.classList.add("overflow-hidden"), f();
    }, u = () => {
      t.value = !1, document.body.classList.remove("overflow-hidden");
    }, f = async () => {
      const g = await window.OrionCart.fetchCart();
      n.value = g.items, s.value = g.total_price;
    }, c = async ({ key: g, quantity: m }) => {
      await window.OrionCart.updateItem(g, m), f();
    }, p = async (g) => {
      await window.OrionCart.removeItem(g), f();
    }, h = (g) => {
      g.key === "Escape" && t.value && u();
    };
    return rt(() => {
      document.addEventListener("cart:open", a), document.addEventListener("cart:close", u), document.addEventListener("keydown", h);
    }), tn(() => {
      document.removeEventListener("cart:open", a), document.removeEventListener("cart:close", u), document.removeEventListener("keydown", h);
    }), (g, m) => (E(), Tt(Sn, { to: "body" }, [
      fe(it, { name: "drawer" }, {
        default: Re(() => [
          t.value ? (E(), x("div", Ry, [
            d("div", Ly, [
              fe(it, { name: "fade" }, {
                default: Re(() => [
                  t.value ? (E(), x("div", {
                    key: 0,
                    class: "absolute inset-0 bg-black/60 transition-opacity duration-300 overlay-close-cursor",
                    onClick: u
                  })) : H("", !0)
                ]),
                _: 1
              }),
              d("div", Fy, [
                fe(it, {
                  name: "slide",
                  appear: ""
                }, {
                  default: Re(() => [
                    t.value ? (E(), x("div", By, [
                      d("div", jy, [
                        d("div", Hy, [
                          d("div", null, [
                            m[0] || (m[0] = d("h2", { class: "text-xl" }, "Shopping Cart", -1)),
                            n.value.length > 0 ? (E(), x("p", Uy, Q(n.value.length) + " " + Q(n.value.length === 1 ? "item" : "items"), 1)) : H("", !0)
                          ]),
                          d("button", {
                            type: "button",
                            class: "ml-3 -m-1.5 p-1.5 text-gray-400 hover:text-gray-500 transition-colors",
                            onClick: u
                          }, m[1] || (m[1] = [
                            d("span", { class: "sr-only" }, "Close cart", -1),
                            d("svg", {
                              class: "h-6 w-6",
                              fill: "none",
                              viewBox: "0 0 24 24",
                              stroke: "currentColor"
                            }, [
                              d("path", {
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                                "stroke-width": "2",
                                d: "M6 18L18 6M6 6l12 12"
                              })
                            ], -1)
                          ]))
                        ]),
                        d("div", qy, [
                          n.value.length === 0 ? (E(), x("div", zy, [
                            m[3] || (m[3] = d("div", { class: "relative w-24 h-24 mb-6" }, [
                              d("div", { class: "absolute inset-0 bg-gray-100 rounded-full" }),
                              d("svg", {
                                class: "absolute inset-0 w-full h-full p-6 text-gray-400",
                                fill: "none",
                                viewBox: "0 0 24 24",
                                stroke: "currentColor",
                                "stroke-width": "1.5"
                              }, [
                                d("path", {
                                  "stroke-linecap": "round",
                                  "stroke-linejoin": "round",
                                  d: "M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                                })
                              ])
                            ], -1)),
                            m[4] || (m[4] = d("h3", { class: "text-lg font-semibold mb-2" }, "Your cart is empty", -1)),
                            m[5] || (m[5] = d("p", { class: "text-sm text-gray-500 text-center mb-8 max-w-xs" }, " Looks like you haven't added anything to your cart yet. Start shopping to find your perfect items! ", -1)),
                            fe(wn, {
                              href: "/collections",
                              variant: "primary",
                              "full-width": !0,
                              size: "large"
                            }, {
                              default: Re(() => m[2] || (m[2] = [
                                We(" Start Shopping ", -1)
                              ])),
                              _: 1,
                              __: [2]
                            })
                          ])) : (E(), x("div", Wy, [
                            (E(!0), x(ae, null, we(n.value, (D) => (E(), Tt(Mf, {
                              key: D.key,
                              item: D,
                              onUpdate: c,
                              onRemove: p
                            }, null, 8, ["item"]))), 128))
                          ]))
                        ]),
                        n.value.length > 0 ? (E(), x("div", Ky, [
                          r.value ? (E(), x("div", {
                            key: 0,
                            class: be([
                              s.value >= i.value ? "bg-green-50 border border-green-200" : "bg-blue-50 border border-blue-200",
                              "p-3"
                            ]),
                            style: { "border-radius": "var(--button-radius, 8px)" }
                          }, [
                            s.value >= i.value ? (E(), x("div", Gy, m[6] || (m[6] = [
                              d("svg", {
                                class: "w-5 h-5 text-green-600",
                                fill: "none",
                                viewBox: "0 0 24 24",
                                stroke: "currentColor"
                              }, [
                                d("path", {
                                  "stroke-linecap": "round",
                                  "stroke-linejoin": "round",
                                  "stroke-width": "2",
                                  d: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                })
                              ], -1),
                              d("p", { class: "text-xs text-green-800" }, " Congratulations! You've unlocked free shipping! ", -1)
                            ]))) : (E(), x("div", Jy, [
                              m[7] || (m[7] = d("svg", {
                                class: "w-5 h-5 text-blue-600",
                                fill: "none",
                                viewBox: "0 0 24 24",
                                stroke: "currentColor"
                              }, [
                                d("path", {
                                  "stroke-linecap": "round",
                                  "stroke-linejoin": "round",
                                  "stroke-width": "2",
                                  d: "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                })
                              ], -1)),
                              d("p", Yy, " Add " + Q(l(i.value - s.value)) + " more for free shipping! ", 1)
                            ])),
                            s.value < i.value ? (E(), x("div", Xy, [
                              d("div", {
                                class: "bg-blue-600 h-full transition-all duration-300",
                                style: Ve({ width: Math.min(s.value / i.value * 100, 100) + "%" })
                              }, null, 4)
                            ])) : H("", !0)
                          ], 2)) : H("", !0),
                          d("div", null, [
                            d("div", Qy, [
                              m[8] || (m[8] = d("p", { class: "uppercase font-semibold" }, "Subtotal", -1)),
                              d("p", null, Q(l(s.value)), 1)
                            ]),
                            m[9] || (m[9] = d("p", { class: "mt-0.5 text-sm text-gray-500" }, " Shipping and taxes calculated at checkout. ", -1))
                          ]),
                          d("div", Zy, [
                            fe(wn, {
                              href: o.value,
                              variant: "primary",
                              "full-width": !0,
                              size: "large"
                            }, {
                              default: Re(() => m[10] || (m[10] = [
                                We(" Checkout ", -1)
                              ])),
                              _: 1,
                              __: [10]
                            }, 8, ["href"]),
                            fe(wn, {
                              onClick: u,
                              variant: "secondary",
                              "full-width": !0,
                              size: "large"
                            }, {
                              default: Re(() => m[11] || (m[11] = [
                                We(" Continue Shopping ", -1)
                              ])),
                              _: 1,
                              __: [11]
                            })
                          ])
                        ])) : H("", !0)
                      ])
                    ])) : H("", !0)
                  ]),
                  _: 1
                })
              ])
            ])
          ])) : H("", !0)
        ]),
        _: 1
      })
    ]));
  }
}, eb = {
  key: 0,
  class: "fixed inset-0 z-[99999] overflow-hidden mobile-menu-overlay"
}, tb = { class: "absolute inset-0 overflow-hidden" }, nb = { class: "fixed inset-y-0 left-0 max-w-full flex pointer-events-none" }, sb = {
  key: 0,
  class: "w-screen max-w-sm pointer-events-auto"
}, ob = { class: "h-full flex flex-col bg-white shadow-xl transition-shadow duration-300" }, ib = { class: "flex-1 overflow-y-auto" }, rb = { class: "px-4 py-4" }, lb = { class: "space-y-1" }, ab = { key: 0 }, cb = { key: 0 }, ub = ["onClick"], db = {
  key: 0,
  class: "mt-1 space-y-1"
}, fb = { key: 0 }, pb = ["onClick"], hb = {
  key: 0,
  class: "mt-1 space-y-1"
}, mb = ["href"], gb = ["href"], vb = ["href"], yb = { class: "px-4 py-4 border-t" }, bb = { class: "space-y-1" }, _b = ["href"], wb = {
  key: 0,
  class: "px-4 py-4 border-t"
}, Eb = {
  __name: "MobileMenu",
  props: {
    menuItems: {
      type: Array,
      default: () => []
    },
    customerUrl: {
      type: String,
      default: null
    },
    showLocalization: {
      type: Boolean,
      default: !1
    }
  },
  setup(e, { expose: t }) {
    const n = e, s = G(() => n.menuItems && n.menuItems.length > 0 ? n.menuItems : window.mobileMenuData || []), o = G(() => n.customerUrl || window.mobileMenuCustomerUrl || "/user/signIn"), i = G(() => n.showLocalization || window.mobileMenuShowLocalization || !1), r = X(!1), l = X([]), a = () => {
      r.value = !0, document.body.classList.add("overflow-hidden");
    }, u = () => {
      r.value = !1, document.body.classList.remove("overflow-hidden");
    }, f = (c) => {
      const p = l.value.indexOf(c);
      p > -1 ? l.value.splice(p, 1) : l.value.push(c);
    };
    return t({
      openMenu: a,
      closeMenu: u
    }), rt(() => {
      document.addEventListener("mobile-menu:open", a), document.addEventListener("mobile-menu:close", u);
      const c = (p) => {
        p.key === "Escape" && r.value && u();
      };
      document.addEventListener("keydown", c), tn(() => {
        document.removeEventListener("mobile-menu:open", a), document.removeEventListener("mobile-menu:close", u), document.removeEventListener("keydown", c);
      });
    }), (c, p) => (E(), x("div", null, [
      (E(), Tt(Sn, { to: "body" }, [
        fe(it, { name: "menu" }, {
          default: Re(() => [
            r.value ? (E(), x("div", eb, [
              d("div", tb, [
                fe(it, { name: "fade" }, {
                  default: Re(() => [
                    r.value ? (E(), x("div", {
                      key: 0,
                      class: "absolute inset-0 bg-black/60 transition-opacity duration-300 overlay-close-cursor",
                      onClick: u
                    })) : H("", !0)
                  ]),
                  _: 1
                }),
                d("div", nb, [
                  fe(it, {
                    name: "slide-left",
                    appear: ""
                  }, {
                    default: Re(() => [
                      r.value ? (E(), x("div", sb, [
                        d("div", ob, [
                          d("div", { class: "flex items-center justify-between px-4 py-6 border-b" }, [
                            p[1] || (p[1] = d("h2", { class: "text-xl" }, "Menu", -1)),
                            d("button", {
                              type: "button",
                              class: "-m-1.5 p-1.5 text-gray-400 hover:text-gray-500",
                              onClick: u
                            }, p[0] || (p[0] = [
                              d("span", { class: "sr-only" }, "Close menu", -1),
                              d("svg", {
                                class: "h-6 w-6",
                                fill: "none",
                                viewBox: "0 0 24 24",
                                stroke: "currentColor"
                              }, [
                                d("path", {
                                  "stroke-linecap": "round",
                                  "stroke-linejoin": "round",
                                  "stroke-width": "2",
                                  d: "M6 18L18 6M6 6l12 12"
                                })
                              ], -1)
                            ]))
                          ]),
                          d("div", ib, [
                            d("nav", rb, [
                              d("ul", lb, [
                                s.value.length === 0 ? (E(), x("li", ab, p[2] || (p[2] = [
                                  d("a", {
                                    href: "/collections/all",
                                    class: "block px-3 py-2 text-base font-medium text-gray-900 rounded-md hover:bg-gray-50"
                                  }, " Shop ", -1)
                                ]))) : H("", !0),
                                (E(!0), x(ae, null, we(s.value, (h) => (E(), x("li", {
                                  key: h.id || h.title
                                }, [
                                  h.links && h.links.length ? (E(), x("div", cb, [
                                    d("button", {
                                      onClick: (g) => f(h.title),
                                      class: "w-full flex items-center justify-between px-3 py-2 text-base font-medium text-gray-900 rounded-md hover:bg-gray-50 focus:outline-none focus:bg-gray-50"
                                    }, [
                                      d("span", null, Q(h.title), 1),
                                      (E(), x("svg", {
                                        class: be(["h-5 w-5 transition-transform duration-200", {
                                          "rotate-180": l.value.includes(
                                            h.title
                                          )
                                        }]),
                                        fill: "none",
                                        viewBox: "0 0 24 24",
                                        stroke: "currentColor"
                                      }, p[3] || (p[3] = [
                                        d("path", {
                                          "stroke-linecap": "round",
                                          "stroke-linejoin": "round",
                                          "stroke-width": "2",
                                          d: "M19 9l-7 7-7-7"
                                        }, null, -1)
                                      ]), 2))
                                    ], 8, ub),
                                    fe(it, { name: "submenu" }, {
                                      default: Re(() => [
                                        l.value.includes(h.title) ? (E(), x("ul", db, [
                                          (E(!0), x(ae, null, we(h.links, (g) => (E(), x("li", {
                                            key: g.id || g.title
                                          }, [
                                            g.links && g.links.length ? (E(), x("div", fb, [
                                              d("button", {
                                                onClick: (m) => f(
                                                  `${h.title}-${g.title}`
                                                ),
                                                class: "w-full flex items-center justify-between pl-8 pr-3 py-2 text-sm text-gray-700 rounded-md hover:bg-gray-50"
                                              }, [
                                                d("span", null, Q(g.title), 1),
                                                (E(), x("svg", {
                                                  class: be(["h-4 w-4 transition-transform duration-200", {
                                                    "rotate-180": l.value.includes(
                                                      `${h.title}-${g.title}`
                                                    )
                                                  }]),
                                                  fill: "none",
                                                  viewBox: "0 0 24 24",
                                                  stroke: "currentColor"
                                                }, p[4] || (p[4] = [
                                                  d("path", {
                                                    "stroke-linecap": "round",
                                                    "stroke-linejoin": "round",
                                                    "stroke-width": "2",
                                                    d: "M19 9l-7 7-7-7"
                                                  }, null, -1)
                                                ]), 2))
                                              ], 8, pb),
                                              fe(it, { name: "submenu" }, {
                                                default: Re(() => [
                                                  l.value.includes(
                                                    `${h.title}-${g.title}`
                                                  ) ? (E(), x("ul", hb, [
                                                    (E(!0), x(ae, null, we(g.links, (m) => (E(), x("li", {
                                                      key: m.id || m.title
                                                    }, [
                                                      d("a", {
                                                        href: m.url,
                                                        class: "block pl-12 pr-3 py-2 text-sm text-gray-600 rounded-md hover:bg-gray-50",
                                                        onClick: u
                                                      }, Q(m.title), 9, mb)
                                                    ]))), 128))
                                                  ])) : H("", !0)
                                                ]),
                                                _: 2
                                              }, 1024)
                                            ])) : (E(), x("a", {
                                              key: 1,
                                              href: g.url,
                                              class: "block pl-8 pr-3 py-2 text-sm text-gray-700 rounded-md hover:bg-gray-50",
                                              onClick: u
                                            }, Q(g.title), 9, gb))
                                          ]))), 128))
                                        ])) : H("", !0)
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ])) : (E(), x("a", {
                                    key: 1,
                                    href: h.url,
                                    class: "block px-3 py-2 text-base font-medium text-gray-900 rounded-md hover:bg-gray-50",
                                    onClick: u
                                  }, Q(h.title), 9, vb))
                                ]))), 128))
                              ])
                            ]),
                            d("div", yb, [
                              d("div", bb, [
                                d("a", {
                                  href: o.value,
                                  class: "block px-3 py-2 text-base font-medium text-gray-900 rounded-md hover:bg-gray-50"
                                }, p[5] || (p[5] = [
                                  d("span", { class: "flex items-center" }, [
                                    d("svg", {
                                      class: "h-5 w-5 mr-2",
                                      fill: "none",
                                      viewBox: "0 0 24 24",
                                      stroke: "currentColor"
                                    }, [
                                      d("path", {
                                        "stroke-linecap": "round",
                                        "stroke-linejoin": "round",
                                        "stroke-width": "2",
                                        d: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                      })
                                    ]),
                                    We(" Account ")
                                  ], -1)
                                ]), 8, _b),
                                p[6] || (p[6] = d("a", {
                                  href: "/search",
                                  class: "block px-3 py-2 text-base font-medium text-gray-900 rounded-md hover:bg-gray-50"
                                }, [
                                  d("span", { class: "flex items-center" }, [
                                    d("svg", {
                                      class: "h-5 w-5 mr-2",
                                      fill: "none",
                                      viewBox: "0 0 24 24",
                                      stroke: "currentColor"
                                    }, [
                                      d("path", {
                                        "stroke-linecap": "round",
                                        "stroke-linejoin": "round",
                                        "stroke-width": "2",
                                        d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                      })
                                    ]),
                                    We(" Search ")
                                  ])
                                ], -1))
                              ])
                            ]),
                            i.value ? (E(), x("div", wb, [
                              kl(c.$slots, "localization")
                            ])) : H("", !0)
                          ])
                        ])
                      ])) : H("", !0)
                    ]),
                    _: 3
                  })
                ])
              ])
            ])) : H("", !0)
          ]),
          _: 3
        })
      ]))
    ]));
  }
}, xb = { class: "variant-picker" }, Nb = {
  key: 0,
  class: "w-12 h-12 single-variant-info mb-6 p-4 bg-gray-50 rounded-full overflow-hidden"
}, Sb = { class: "font-medium text-gray-900" }, kb = {
  key: 1,
  class: "mt-5 space-y-4"
}, Cb = { class: "ml-1 font-medium" }, Ob = {
  key: 0,
  class: "flex flex-wrap gap-3 p-1"
}, Tb = ["title", "aria-label", "disabled", "onClick"], $b = ["src", "alt"], Db = {
  key: 1,
  class: "text-xs"
}, Ab = {
  key: 1,
  class: "flex flex-wrap gap-2 mt-2 p-1"
}, Vb = ["title", "aria-label", "disabled", "onClick"], Ib = {
  key: 2,
  class: "flex flex-wrap gap-2 mt-2 p-1"
}, Mb = ["aria-label", "disabled", "onClick"], Pb = {
  key: 2,
  class: "single-variant-options"
}, Rb = { class: "text-sm font-medium text-gray-900" }, Lb = { class: "w-12 h-12 px-4 py-2 bg-gray-50 rounded-full overflow-hidden inline-block" }, Fb = { class: "text-sm font-medium text-gray-700" }, Bb = {
  key: 3,
  class: "variant-picker-empty"
}, jb = {
  __name: "ProductVariantPicker",
  props: {
    product: {
      type: Object,
      required: !1,
      default: () => ({})
    },
    selectedVariantId: {
      type: [String, Number],
      default: null
    },
    updateUrl: {
      type: Boolean,
      default: !0
    },
    sectionId: {
      type: String,
      default: ""
    }
  },
  emits: [
    "variant-change",
    "media-change",
    "product-info-update"
  ],
  setup(e, { emit: t }) {
    const n = e, s = t, o = (I, R) => {
      const M = document.getElementById("variantPicker");
      M && M.dispatchEvent(new CustomEvent(I, { detail: R, bubbles: !0 }));
    }, i = X({}), r = X(null), l = X(!1), a = () => n.product && n.product.id ? n.product : window.productPageData && window.productPageData.product ? window.productPageData.product : {}, u = X({}), f = G(() => u.value.variants || []), c = G(() => n.buttonTextColor || "#374151"), p = G(() => n.buttonBorderColor || "#d1d5db"), h = G(() => n.buttonSelectedBg || "#111827"), g = G(() => n.buttonSelectedText || "#ffffff"), m = G(() => n.buttonSelectedBorder || "#111827"), D = G(() => {
      if (u.value.options && u.value.options.length > 0)
        return u.value.options.map((R, M) => ({
          ...R,
          position: R.position || M + 1
        }));
      const I = [];
      if (f.value.length > 0) {
        if (f.value[0].option1) {
          const R = [
            ...new Set(f.value.map((M) => M.option1).filter(Boolean))
          ];
          I.push({
            name: "Size",
            position: 1,
            values: R
          });
        }
        if (f.value[0].option2) {
          const R = [
            ...new Set(f.value.map((M) => M.option2).filter(Boolean))
          ];
          I.push({
            name: "Color",
            position: 2,
            values: R
          });
        }
        if (f.value[0].option3) {
          const R = [
            ...new Set(f.value.map((M) => M.option3).filter(Boolean))
          ];
          I.push({
            name: "Option",
            position: 3,
            values: R
          });
        }
      }
      return I;
    }), P = G(
      () => u.value.options_with_values || D.value
    ), V = async (I = 5) => {
      for (let R = 0; R < I; R++) {
        const M = a();
        if (M && M.id)
          return u.value = M, !0;
        R < I - 1 && await new Promise((J) => setTimeout(J, 100));
      }
      return !1;
    };
    rt(async () => {
      if (await V(), f.value.length > 0) {
        let I = null;
        if (n.selectedVariantId && (I = f.value.find(
          (R) => R.id == n.selectedVariantId
        )), I || (I = f.value.find((R) => R.available) || f.value[0]), I)
          if (f.value.length === 1 && D.value.length === 0)
            xn(() => {
              _(I);
            });
          else {
            if (I.option1) {
              const R = D.value.find(
                (M) => M.position === 1
              );
              R && (i.value[R.name] = I.option1);
            }
            if (I.option2) {
              const R = D.value.find(
                (M) => M.position === 2
              );
              R && (i.value[R.name] = I.option2);
            }
            if (I.option3) {
              const R = D.value.find(
                (M) => M.position === 3
              );
              R && (i.value[R.name] = I.option3);
            }
            xn(() => {
              _(I);
            });
          }
      }
    });
    const _ = (I) => {
      I && (r.value = I, l.value = !0, D.value.forEach((R, M) => {
        i.value[R.name] = I[`option${M + 1}`];
      }), n.updateUrl && I && N(I), I && I.featured_media && (s("media-change", I.featured_media), o("media-change", I.featured_media)), s("variant-change", I), o("variant-change", I));
    }, N = (I) => {
      const R = new URL(window.location);
      I && I.id ? R.searchParams.set("sku", I.id) : R.searchParams.delete("sku"), window.history.replaceState({}, document.title, R.toString());
    }, v = (I, R) => {
      i.value[I] = R;
      const M = f.value.find((J) => D.value.every((ye, ke) => {
        const De = i.value[ye.name];
        return J[`option${ke + 1}`] === De;
      }));
      M && (_(M), n.sectionId && w(M));
    }, w = async (I) => {
      if (!(!I || !I.id))
        try {
          const R = await fetch(
            `${window.location.pathname}?sku=${I.id}&section_id=${n.sectionId}`,
            {
              headers: {
                "X-Requested-With": "XMLHttpRequest"
              }
            }
          );
          if (!R.ok) throw new Error("Failed to fetch product info");
          const M = await R.text(), ye = new DOMParser().parseFromString(M, "text/html");
          s("product-info-update", {
            variant: I,
            html: ye
          });
        } catch {
        }
    };
    Lt(
      () => n.selectedVariantId,
      (I) => {
        if (I) {
          const R = f.value.find((M) => M.id == I);
          R && _(R);
        }
      }
    );
    const A = (I, R) => i.value[I] === R, k = (I) => i.value[I] || null, y = (I, R) => {
      const M = D.value.findIndex(
        (J) => J.name === I
      );
      return f.value.some((J) => {
        const ye = J[`option${M + 1}`] === R, ke = D.value.every((De, $t) => {
          if (De.name === I) return !0;
          const Cn = i.value[De.name];
          return Cn ? J[`option${$t + 1}`] === Cn : !0;
        });
        return ye && ke && J.available;
      });
    }, T = (I) => {
      if (!I) return !1;
      const R = I.toLowerCase();
      return R === "color" || R === "colour" || R.includes("color") || R.includes("colour");
    }, O = (I) => {
      const M = {
        black: "#000000",
        white: "#FFFFFF",
        red: "#DC2626",
        blue: "#2563EB",
        green: "#16A34A",
        yellow: "#EAB308",
        purple: "#9333EA",
        pink: "#EC4899",
        gray: "#6B7280",
        grey: "#6B7280",
        brown: "#92400E",
        navy: "#1E3A8A",
        beige: "#D6D3D1",
        orange: "#EA580C",
        teal: "#14B8A6",
        cyan: "#06B6D4",
        indigo: "#4F46E5"
      }[I.toLowerCase()];
      return M || (I.startsWith("#") ? I : "#E5E7EB");
    }, C = (I) => P.value.some(
      (R) => R.name === I.name && R.values_images && R.values_images.length > 0
    ), L = (I) => {
      const R = P.value.find(
        (M) => M.name === I.name
      );
      return !R || !R.values_images ? I.values.map((M) => ({ value: M, image: null })) : R.values_images;
    }, j = (I, R = 100) => I ? typeof I == "string" ? I : I.src ? I.src : "" : "", q = (I, R) => {
      const M = A(I, R), J = y(I, R);
      let ye, ke, De;
      return M ? (ye = m.value || h.value || "rgb(17 24 39)", ke = h.value || "rgb(17 24 39)", De = g.value || "rgb(255 255 255)") : (ye = p.value || "rgb(209 213 219)", ke = "transparent", De = c.value || "rgb(55 65 81)"), {
        borderWidth: "1px",
        borderStyle: "solid",
        borderColor: ye,
        color: De,
        backgroundColor: ke,
        cursor: J ? "pointer" : "not-allowed",
        opacity: J ? "1" : "0.5"
      };
    };
    return (I, R) => (E(), x("div", xb, [
      f.value.length === 1 && D.value.length === 0 && f.value[0].title && f.value[0].title !== "Default" && f.value[0].title !== "Default Title" && f.value[0].title.toLowerCase() !== "default" ? (E(), x("div", Nb, [
        R[0] || (R[0] = d("div", { class: "text-sm text-gray-600 mb-2" }, "Selected Option:", -1)),
        d("div", Sb, Q(f.value[0].title), 1)
      ])) : D.value.length > 0 ? (E(), x("div", kb, [
        (E(!0), x(ae, null, we(D.value, (M) => (E(), x("div", {
          key: M.name,
          class: "variant-option"
        }, [
          d("div", {
            class: "font-medium text-sm mb-3",
            style: Ve({ color: c.value })
          }, [
            We(Q(M.name || "Option") + ": ", 1),
            d("span", Cb, Q(k(M.name) || "None selected"), 1)
          ], 4),
          C(M) ? (E(), x("div", Ob, [
            (E(!0), x(ae, null, we(L(M), (J, ye) => (E(), x("button", {
              key: J.value,
              type: "button",
              class: be([
                "variant-image-button",
                A(M.name, J.value) ? "variant-image-button--selected" : "",
                y(M.name, J.value) ? "" : "variant-image-button--unavailable"
              ]),
              title: J.value,
              "aria-label": `Select ${M.name} ${J.value}`,
              disabled: !y(M.name, J.value),
              onClick: (ke) => v(M.name, J.value)
            }, [
              J.image ? (E(), x("img", {
                key: 0,
                src: j(J.image, 100),
                alt: J.value,
                class: "w-full h-full object-cover"
              }, null, 8, $b)) : (E(), x("span", Db, Q(J.value), 1))
            ], 10, Tb))), 128))
          ])) : T(M.name) ? (E(), x("div", Ab, [
            (E(!0), x(ae, null, we(M.values, (J) => (E(), x("button", {
              key: J,
              type: "button",
              class: be([
                "variant-button-pill text-sm font-medium rounded-md transition-all duration-200",
                A(M.name, J) ? "variant-button-pill--selected" : "",
                y(M.name, J) ? "" : "variant-button-pill--unavailable"
              ]),
              style: Ve({
                ...q(M.name, J),
                padding: "8px 10px"
              }),
              title: J,
              "aria-label": `Select ${M.name} ${J}`,
              disabled: !y(M.name, J),
              onClick: It((ye) => v(M.name, J), ["stop"])
            }, [
              O(J) ? (E(), x("span", {
                key: 0,
                style: Ve({
                  backgroundColor: O(J),
                  width: "16px",
                  height: "16px",
                  borderRadius: "3px",
                  display: "inline-block",
                  marginRight: "6px",
                  border: "1px solid #ffffff",
                  boxShadow: "0 0 0 1px rgba(0,0,0,0.15)",
                  verticalAlign: "middle"
                })
              }, null, 4)) : H("", !0),
              We(" " + Q(J), 1)
            ], 14, Vb))), 128))
          ])) : (E(), x("div", Ib, [
            (E(!0), x(ae, null, we(M.values, (J) => (E(), x("button", {
              key: J,
              type: "button",
              class: be([
                "variant-button-pill",
                A(M.name, J) ? "variant-button-pill--selected" : "",
                y(M.name, J) ? "" : "variant-button-pill--unavailable"
              ]),
              style: Ve(q(M.name, J)),
              "aria-label": `Select ${M.name} ${J}`,
              disabled: !y(M.name, J),
              onClick: It((ye) => v(M.name, J), ["stop"])
            }, [
              We(Q(J) + " ", 1),
              y(M.name, J) ? H("", !0) : (E(), x("span", {
                key: 0,
                class: "variant-strikethrough",
                style: Ve(`background-color: ${c.value || "#374151"};`)
              }, null, 4))
            ], 14, Mb))), 128))
          ]))
        ]))), 128))
      ])) : f.value.length === 1 && D.value.length > 0 ? (E(), x("div", Pb, [
        (E(!0), x(ae, null, we(D.value, (M) => (E(), x("div", {
          key: M.name
        }, [
          d("h3", Rb, Q(M.name) + ":", 1),
          d("div", Lb, [
            d("span", Fb, Q(f.value[0][`option${D.value.indexOf(M) + 1}`] || M.values[0]), 1)
          ])
        ]))), 128))
      ])) : H("", !0),
      f.value.length === 0 && D.value.length === 0 && !l.value ? (E(), x("div", Bb, R[1] || (R[1] = [
        d("div", { class: "p-4 bg-gray-50 border border-gray-200 rounded-md" }, [
          d("p", { class: "text-sm text-gray-600" }, "Loading variant options...")
        ], -1)
      ]))) : H("", !0)
    ]));
  }
}, Hb = ["href"], Ub = ["src", "alt"], qb = ["src", "alt"], zb = ["src", "alt"], Wb = {
  key: 2,
  class: "h-full w-full flex items-center justify-center"
}, Kb = {
  key: 3,
  class: "absolute top-3 left-3 bg-gradient-to-r from-red-500 to-pink-500 text-white px-3 py-1.5 text-xs font-bold rounded-full shadow-lg"
}, Gb = { class: "relative w-5 h-5" }, Jb = {
  key: 5,
  class: "absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 ease-out z-30"
}, Yb = {
  key: 6,
  class: "absolute inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center"
}, Xb = { class: "p-4 flex-1 flex flex-col" }, Qb = { class: "flex-1" }, Zb = {
  key: 0,
  class: "mb-3"
}, e1 = { class: "flex gap-1.5 flex-wrap" }, t1 = ["onClick", "title"], n1 = {
  key: 0,
  class: "absolute inset-0 flex items-center justify-center"
}, s1 = {
  key: 1,
  class: "text-xs text-gray-500 uppercase tracking-wider mb-1"
}, o1 = { class: "text-lg font-semibold line-clamp-2 mb-2" }, i1 = ["href"], r1 = {
  key: 2,
  class: "mb-2"
}, l1 = {
  key: 0,
  class: "flex items-center gap-1 animate-pulse h-6"
}, a1 = { class: "flex" }, c1 = {
  key: 1,
  class: "flex items-center gap-1 h-6"
}, u1 = { class: "flex" }, d1 = { class: "text-xs text-gray-500" }, f1 = { class: "flex items-baseline gap-2 mb-4" }, p1 = { class: "text-lg font-bold text-gray-900" }, h1 = {
  key: 0,
  class: "text-sm text-gray-400 line-through"
}, m1 = { class: "mt-auto" }, g1 = ["disabled"], v1 = {
  __name: "ProductCard",
  props: {
    // Support both full product object and individual props
    product: {
      type: Object,
      required: !1,
      default: null
    },
    // Individual props as fallback
    productId: String,
    variantId: String,
    title: String,
    handle: String,
    url: String,
    vendor: String,
    price: [String, Number],
    compareAtPrice: [String, Number],
    image: String,
    images: Array,
    available: {
      type: Boolean,
      default: !0
    }
  },
  emits: ["add-to-cart"],
  setup(e, { emit: t }) {
    const n = G(() => {
      var ie, ee, re;
      return ((re = (ee = (ie = window.Shopline) == null ? void 0 : ie.theme) == null ? void 0 : ee.settings) == null ? void 0 : re.card_show_vendor) !== !1;
    }), s = G(() => {
      var ie, ee, re;
      return ((re = (ee = (ie = window.Shopline) == null ? void 0 : ie.theme) == null ? void 0 : ee.settings) == null ? void 0 : re.card_show_reviews) !== !1;
    }), o = G(() => {
      var ie, ee, re;
      return ((re = (ee = (ie = window.Shopline) == null ? void 0 : ie.theme) == null ? void 0 : ee.settings) == null ? void 0 : re.card_show_secondary_image) !== !1;
    }), i = e, r = t, l = X(""), a = X(!1), u = X(!1), f = X(!1), c = X(!1), p = () => {
      var ee;
      const ie = V.value.handle || V.value.id;
      f.value = ((ee = window.OrionWishlist) == null ? void 0 : ee.isWishlisted(ie)) || !1;
    }, h = X(!1), g = X(null), m = X(!1), D = G(() => {
      var ie, ee, re;
      return ((re = (ee = (ie = window.Shopline) == null ? void 0 : ie.theme) == null ? void 0 : ee.settings) == null ? void 0 : re.enable_quick_view) !== !1;
    }), P = G(() => {
      var re, qe, tt;
      const ie = "Quick View";
      return ((tt = (qe = (re = window.Shopline) == null ? void 0 : re.theme) == null ? void 0 : qe.settings) == null ? void 0 : tt.button_text_uppercase) ? ie.toUpperCase() : ie;
    }), V = G(() => i.product ? i.product : {
      id: i.productId,
      title: i.title,
      handle: i.handle,
      url: i.url,
      vendor: i.vendor,
      price: typeof i.price == "string" ? parseFloat(i.price) : i.price,
      compare_at_price: typeof i.compareAtPrice == "string" ? parseFloat(i.compareAtPrice) : i.compareAtPrice,
      available: i.available,
      images: i.images || (i.image ? [{ src: i.image }] : []),
      featured_image: i.image,
      options: [],
      variants: i.variantId ? [{ id: i.variantId }] : []
    }), _ = G(() => {
      const ie = V.value.handle;
      return V.value.url || (ie ? `/products/${ie}` : "#");
    }), N = G(() => {
      var ee, re;
      const ie = ((re = (ee = V.value.images) == null ? void 0 : ee[0]) == null ? void 0 : re.src) || V.value.featured_image || V.value.image || null;
      return ie && window.getImageUrl ? window.getImageUrl(ie, { preset: "product-card" }) : ie;
    }), v = G(() => {
      var ee, re;
      const ie = ((re = (ee = V.value.images) == null ? void 0 : ee[1]) == null ? void 0 : re.src) || null;
      return ie && window.getImageUrl ? window.getImageUrl(ie, { preset: "product-card" }) : ie;
    }), w = G(() => {
      var ie;
      return (ie = V.value.options) == null ? void 0 : ie.some(
        (ee) => {
          var re, qe;
          return ((re = ee.name) == null ? void 0 : re.toLowerCase().includes("color")) || ((qe = ee.name) == null ? void 0 : qe.toLowerCase().includes("colour"));
        }
      );
    }), A = G(() => {
      var ee;
      const ie = (ee = V.value.options) == null ? void 0 : ee.find(
        (re) => {
          var qe, tt;
          return ((qe = re.name) == null ? void 0 : qe.toLowerCase().includes("color")) || ((tt = re.name) == null ? void 0 : tt.toLowerCase().includes("colour"));
        }
      );
      return (ie == null ? void 0 : ie.values) || [];
    }), k = G(() => V.value.price || 0), y = G(() => V.value.compare_at_price || 0), T = G(() => {
      const ie = V.value.options || [];
      return ie.length === 0 ? !1 : ie.some((ee) => (ee.values || []).length > 1);
    }), O = G(() => V.value.available && y.value > k.value), C = G(() => O.value ? Math.round(
      (y.value - k.value) / y.value * 100
    ) : 0), L = G(() => ({
      borderRadius: "var(--card-radius, 8px)",
      boxShadow: h.value ? "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" : "var(--card-shadow, 0 4px 6px -1px rgba(0, 0, 0, 0.1))"
    })), j = G(() => ({
      ...L.value,
      backgroundColor: "rgb(var(--color-card-background, 255, 255, 255))"
    })), q = G(() => {
      var ie, ee, re;
      return ((re = (ee = (ie = window.Shopline) == null ? void 0 : ie.theme) == null ? void 0 : ee.settings) == null ? void 0 : re.show_product_card_wishlist) !== !1;
    }), I = (ie) => {
      var ys, b, $, F;
      if (typeof ie == "string" && (ie.includes("$") || ie.includes("€") || ie.includes("£") || ie.includes("¥") || ie.includes("₹")))
        return ie;
      let re = (window.ShoplineCurrency || {}).format || ((b = (ys = window.Shopline) == null ? void 0 : ys.shop) == null ? void 0 : b.money_format) || "${{amount}}";
      re && !re.includes("{{amount}}") && (re = re + "{{amount}}");
      let qe = ie;
      if (typeof ie == "string" && (qe = parseFloat(ie.replace(/[^0-9.-]/g, ""))), !qe || isNaN(qe))
        return re.replace("{{amount}}", "0.00");
      const tt = qe / 100, Kn = ((F = ($ = window.Shopline) == null ? void 0 : $.locale) == null ? void 0 : F.current) || "en", vs = new Intl.NumberFormat(Kn, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      }).format(tt);
      return re.replace("{{amount}}", vs);
    }, R = (ie) => {
      const ee = {
        black: "#000000",
        white: "#FFFFFF",
        red: "#FF0000",
        blue: "#0000FF",
        green: "#008000",
        yellow: "#FFFF00",
        pink: "#FFC0CB",
        purple: "#800080",
        orange: "#FFA500",
        brown: "#A52A2A",
        gray: "#808080",
        grey: "#808080",
        navy: "#000080",
        beige: "#F5F5DC",
        cream: "#FFFDD0"
      }, re = ie.toLowerCase();
      return ee[re] || `#${re.replace("#", "")}`;
    }, M = () => {
      var ie;
      h.value = !0, o.value && ((ie = V.value.images) == null ? void 0 : ie.length) > 1 && (a.value = !0);
    }, J = () => {
      h.value = !1, a.value = !1;
    }, ye = (ie) => {
      l.value = ie.value;
    }, ke = (ie) => {
      if (ie && (ie.preventDefault(), ie.stopPropagation()), c.value = !0, setTimeout(() => {
        c.value = !1;
      }, 600), window.OrionWishlist) {
        const ee = window.OrionWishlist.toggle(V.value);
        f.value = ee;
        const re = V.value.handle || V.value.id;
        window.dispatchEvent(new CustomEvent("wishlist:updated", {
          detail: { productHandle: re }
        }));
      }
      return !1;
    }, De = () => {
      const ie = V.value.handle;
      if (!ie) {
        console.error("No product handle found for quick view", V.value);
        return;
      }
      window.QuickViewModal && window.QuickViewModal.openWithHandle ? (console.log("Opening quick view for product:", ie), window.QuickViewModal.openWithHandle(ie)) : console.error("QuickViewModal not initialized");
    }, $t = async () => {
      if (!(!s.value || !V.value.id)) {
        m.value = !0;
        try {
          const ee = await (await fetch(
            "/api/isv-plugin/comment/front/query/summary",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                Accept: "application/json, text/plain, */*"
              },
              body: JSON.stringify({ productId: V.value.id })
            }
          )).json();
          ee.success && ee.code === "200" && (g.value = ee.data);
        } catch {
          console.debug("Could not fetch reviews for product:", V.value.id);
        } finally {
          m.value = !1;
        }
      }
    };
    rt(() => {
      $t(), p();
      const ie = (ee) => {
        const re = V.value.handle || V.value.id;
        (!ee.detail || ee.detail.productHandle === re) && p();
      };
      window.addEventListener("wishlist:updated", ie), tn(() => {
        window.removeEventListener("wishlist:updated", ie);
      });
    });
    const Cn = async () => {
      var ie, ee, re, qe;
      u.value = !0;
      try {
        const tt = (ee = (ie = V.value.variants) == null ? void 0 : ie[0]) == null ? void 0 : ee.id;
        if (!tt)
          throw console.error("No variant ID found for product:", V.value), new Error("No variant ID found");
        const Kn = await fetch("/api/carts/ajax-cart/add.js", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: JSON.stringify({
            items: [
              {
                id: tt,
                quantity: 1
              }
            ]
          })
        });
        if (!Kn.ok)
          throw new Error("Failed to add to cart");
        const On = await Kn.json();
        window.OrionCart ? (await window.OrionCart.fetchCart(), (((qe = (re = Shopline == null ? void 0 : Shopline.theme) == null ? void 0 : re.settings) == null ? void 0 : qe.cart_type) || "drawer") === "drawer" ? window.OrionCart.openDrawer() : window.location.href = "/cart") : window.location.href = "/cart", r("add-to-cart", { variantId: tt, quantity: 1 });
      } catch (tt) {
        console.error("Error adding to cart:", tt);
      } finally {
        u.value = !1;
      }
    };
    return (ie, ee) => (E(), x("div", {
      class: "product-card group relative transition-all duration-300 overflow-hidden h-full flex flex-col",
      style: Ve(j.value),
      onMouseenter: M,
      onMouseleave: J
    }, [
      d("a", {
        href: _.value,
        class: "block aspect-[3/4] relative overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100"
      }, [
        o.value && v.value && N.value ? (E(), x(ae, { key: 0 }, [
          d("img", {
            src: N.value,
            alt: V.value.title || "Product image",
            class: be(["absolute inset-0 h-full w-full object-cover object-center transition-all duration-500 group-hover:scale-110", a.value ? "opacity-0" : "opacity-100"])
          }, null, 10, Ub),
          d("img", {
            src: v.value,
            alt: V.value.title || "Product image",
            class: be(["absolute inset-0 h-full w-full object-cover object-center transition-all duration-500 group-hover:scale-110", a.value ? "opacity-100" : "opacity-0"])
          }, null, 10, qb)
        ], 64)) : N.value ? (E(), x("img", {
          key: 1,
          src: N.value,
          alt: V.value.title || "Product image",
          class: "h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
        }, null, 8, zb)) : (E(), x("div", Wb, ee[2] || (ee[2] = [
          d("svg", {
            class: "w-20 h-20 text-gray-300",
            fill: "none",
            stroke: "currentColor",
            viewBox: "0 0 24 24"
          }, [
            d("path", {
              "stroke-linecap": "round",
              "stroke-linejoin": "round",
              "stroke-width": "1.5",
              d: "M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
            })
          ], -1)
        ]))),
        O.value ? (E(), x("div", Kb, " -" + Q(C.value) + "% ", 1)) : H("", !0),
        V.value.available && q.value ? (E(), x("button", {
          key: 4,
          type: "button",
          class: "absolute top-3 right-3 w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-md opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white hover:scale-110",
          onClick: It(ke, ["prevent", "stop"])
        }, [
          d("div", Gb, [
            c.value ? (E(), x("svg", {
              key: 0,
              class: be(["absolute inset-0 w-5 h-5 heart-pulse-bg", f.value ? "text-red-500 fill-current" : "text-gray-600 fill-current"]),
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: "currentColor",
              "stroke-width": "2"
            }, ee[3] || (ee[3] = [
              d("path", { d: "M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" }, null, -1)
            ]), 2)) : H("", !0),
            (E(), x("svg", {
              class: be(["relative w-5 h-5 transition-colors duration-300", f.value ? "text-red-500 fill-current" : "text-gray-600"]),
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: "currentColor",
              "stroke-width": "2"
            }, ee[4] || (ee[4] = [
              d("path", { d: "M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" }, null, -1)
            ]), 2))
          ])
        ])) : H("", !0),
        V.value.available && D.value ? (E(), x("div", Jb, [
          T.value ? (E(), x("button", {
            key: 0,
            onClick: It(De, ["prevent"]),
            class: "w-full bg-black/90 backdrop-blur-sm text-white py-2.5 px-4 text-sm font-medium hover:bg-black transition-colors",
            style: { borderRadius: "var(--button-radius, 6px)" }
          }, [
            ee[5] || (ee[5] = d("svg", {
              class: "inline-block w-4 h-4 mr-2",
              fill: "none",
              stroke: "currentColor",
              viewBox: "0 0 24 24"
            }, [
              d("path", {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                "stroke-width": "2",
                d: "M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              }),
              d("path", {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                "stroke-width": "2",
                d: "M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
              })
            ], -1)),
            We(" " + Q(P.value), 1)
          ])) : (E(), x("button", {
            key: 1,
            onClick: It(De, ["prevent"]),
            class: "w-full bg-black/90 backdrop-blur-sm text-white py-2.5 px-4 text-sm font-medium hover:bg-black transition-colors",
            style: { borderRadius: "var(--button-radius, 6px)" }
          }, [
            ee[6] || (ee[6] = d("svg", {
              class: "inline-block w-4 h-4 mr-2",
              fill: "none",
              stroke: "currentColor",
              viewBox: "0 0 24 24"
            }, [
              d("path", {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                "stroke-width": "2",
                d: "M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              }),
              d("path", {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                "stroke-width": "2",
                d: "M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
              })
            ], -1)),
            We(" " + Q(P.value), 1)
          ]))
        ])) : H("", !0),
        V.value.available ? H("", !0) : (E(), x("div", Yb, ee[7] || (ee[7] = [
          d("span", { class: "bg-white text-gray-900 px-6 py-3 font-semibold rounded-full shadow-2xl" }, " Out of Stock ", -1)
        ])))
      ], 8, Hb),
      d("div", Xb, [
        d("div", Qb, [
          w.value ? (E(), x("div", Zb, [
            d("div", e1, [
              (E(!0), x(ae, null, we(A.value, (re) => (E(), x("button", {
                key: re.value,
                onClick: (qe) => ye(re),
                title: re.value,
                class: be([
                  "w-7 h-7 rounded-full border-2 transition-all duration-200 relative",
                  l.value === re.value ? "border-gray-900 scale-110 shadow-md" : "border-gray-200 hover:border-gray-400"
                ]),
                style: Ve({ backgroundColor: R(re.value) })
              }, [
                l.value === re.value ? (E(), x("span", n1, ee[8] || (ee[8] = [
                  d("svg", {
                    class: "w-4 h-4 text-white drop-shadow",
                    fill: "currentColor",
                    viewBox: "0 0 20 20"
                  }, [
                    d("path", {
                      "fill-rule": "evenodd",
                      d: "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",
                      "clip-rule": "evenodd"
                    })
                  ], -1)
                ]))) : H("", !0)
              ], 14, t1))), 128))
            ])
          ])) : H("", !0),
          n.value && V.value.vendor ? (E(), x("p", s1, Q(V.value.vendor), 1)) : H("", !0),
          d("h3", o1, [
            d("a", { href: _.value }, Q(V.value.title || "Untitled"), 9, i1)
          ]),
          s.value && (m.value || g.value && g.value.total > 0) ? (E(), x("div", r1, [
            m.value ? (E(), x("div", l1, [
              d("div", a1, [
                (E(), x(ae, null, we(5, (re) => d("svg", {
                  key: re,
                  class: "w-4 h-4 text-gray-200 fill-current",
                  viewBox: "0 0 20 20"
                }, ee[9] || (ee[9] = [
                  d("path", { d: "M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" }, null, -1)
                ]))), 64))
              ]),
              ee[10] || (ee[10] = d("span", { class: "bg-gray-200 rounded h-3 w-8" }, null, -1))
            ])) : g.value && g.value.total > 0 ? (E(), x("div", c1, [
              d("div", u1, [
                (E(), x(ae, null, we(5, (re) => d("svg", {
                  key: re,
                  class: be([
                    "w-4 h-4",
                    re <= Math.round(g.value.score) ? "text-yellow-400 fill-current" : "text-gray-300 fill-current"
                  ]),
                  viewBox: "0 0 20 20"
                }, ee[11] || (ee[11] = [
                  d("path", { d: "M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" }, null, -1)
                ]), 2)), 64))
              ]),
              d("span", d1, "(" + Q(g.value.total) + ")", 1)
            ])) : H("", !0)
          ])) : H("", !0),
          d("div", f1, [
            d("span", p1, Q(I(k.value)), 1),
            y.value > k.value ? (E(), x("span", h1, Q(I(y.value)), 1)) : H("", !0)
          ])
        ]),
        d("div", m1, [
          V.value.available ? (E(), x("button", {
            key: 0,
            onClick: Cn,
            disabled: u.value,
            class: "button w-full transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2",
            style: {
              backgroundColor: "var(--button-primary-bg)",
              color: "var(--button-primary-text)",
              borderRadius: "var(--button-radius)",
              minHeight: "40px",
              padding: "8px 16px"
            },
            onMouseenter: ee[0] || (ee[0] = (re) => re.target.style.backgroundColor = "var(--button-primary-bg-hover)"),
            onMouseleave: ee[1] || (ee[1] = (re) => re.target.style.backgroundColor = "var(--button-primary-bg)")
          }, [
            u.value ? (E(), x(ae, { key: 0 }, [
              ee[12] || (ee[12] = d("svg", {
                class: "animate-spin w-5 h-5",
                fill: "none",
                viewBox: "0 0 24 24"
              }, [
                d("circle", {
                  class: "opacity-25",
                  cx: "12",
                  cy: "12",
                  r: "10",
                  stroke: "currentColor",
                  "stroke-width": "4"
                }),
                d("path", {
                  class: "opacity-75",
                  fill: "currentColor",
                  d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                })
              ], -1)),
              ee[13] || (ee[13] = d("span", null, "Adding...", -1))
            ], 64)) : (E(), x(ae, { key: 1 }, [
              ee[14] || (ee[14] = d("svg", {
                class: "w-5 h-5",
                fill: "none",
                stroke: "currentColor",
                viewBox: "0 0 24 24"
              }, [
                d("path", {
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                  "stroke-width": "2",
                  d: "M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                })
              ], -1)),
              ee[15] || (ee[15] = d("span", null, "Add to Cart", -1))
            ], 64))
          ], 40, g1)) : H("", !0)
        ])
      ])
    ], 36));
  }
}, y1 = { class: "collection-filters" }, b1 = { class: "lg:hidden mb-4" }, _1 = {
  class: "hidden lg:block bg-white border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow overflow-hidden",
  style: { borderRadius: "var(--card-radius, 8px)" }
}, w1 = { class: "space-y-6" }, E1 = {
  key: 0,
  class: "pb-6 mb-6 border-b border-gray-200 last:pb-0 last:mb-0 last:border-b-0"
}, x1 = { class: "pb-6 mb-6 border-b border-gray-200 last:pb-0 last:mb-0 last:border-b-0" }, N1 = { class: "flex items-center" }, S1 = { class: "pb-6 mb-6 border-b border-gray-200 last:pb-0 last:mb-0 last:border-b-0" }, k1 = { class: "space-y-2" }, C1 = { class: "flex items-center" }, O1 = { class: "flex items-center" }, T1 = { class: "flex items-center" }, $1 = { class: "flex items-center" }, D1 = {
  key: 1,
  class: "pb-6 mb-6 border-b border-gray-200 last:pb-0 last:mb-0 last:border-b-0"
}, A1 = { class: "space-y-2" }, V1 = ["value"], I1 = { class: "ml-2 text-sm" }, M1 = {
  key: 2,
  class: "pb-6 mb-6 border-b border-gray-200 last:pb-0 last:mb-0 last:border-b-0"
}, P1 = { class: "space-y-2" }, R1 = ["value"], L1 = { class: "ml-2 text-sm" }, F1 = { class: "absolute inset-y-0 left-0 w-full max-w-sm bg-white shadow-xl" }, B1 = { class: "h-full flex flex-col" }, j1 = { class: "flex items-center justify-between p-4 border-b" }, H1 = { class: "flex-1 overflow-y-auto p-4" }, U1 = { class: "space-y-6" }, q1 = {
  key: 0,
  class: "pb-6 mb-6 border-b border-gray-200 last:pb-0 last:mb-0 last:border-b-0"
}, z1 = { class: "pb-6 mb-6 border-b border-gray-200 last:pb-0 last:mb-0 last:border-b-0" }, W1 = { class: "flex items-center" }, K1 = { class: "pb-6 mb-6 border-b border-gray-200 last:pb-0 last:mb-0 last:border-b-0" }, G1 = { class: "space-y-2" }, J1 = { class: "flex items-center" }, Y1 = { class: "flex items-center" }, X1 = { class: "flex items-center" }, Q1 = { class: "flex items-center" }, Z1 = {
  key: 1,
  class: "pb-6 mb-6 border-b border-gray-200 last:pb-0 last:mb-0 last:border-b-0"
}, e_ = { class: "space-y-2" }, t_ = ["value"], n_ = { class: "ml-2 text-sm" }, s_ = {
  key: 2,
  class: "pb-6 mb-6 border-b border-gray-200 last:pb-0 last:mb-0 last:border-b-0"
}, o_ = { class: "space-y-2" }, i_ = ["value"], r_ = { class: "ml-2 text-sm" }, Rf = {
  __name: "CollectionFilters",
  props: {
    products: {
      type: Array,
      default: () => []
    },
    initialFilters: {
      type: Object,
      default: () => ({})
    },
    showSort: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["update-filters"],
  setup(e, { emit: t }) {
    const n = e, s = t, o = X("manual"), i = X([]), r = X([]), l = X([]), a = X(!1), u = X(!1), f = () => {
      const v = new URLSearchParams(window.location.search);
      i.value = [], r.value = [], l.value = [], a.value = !1, o.value = v.get("sort_by") || "manual", v.get("filter.v.availability") === "1" && (a.value = !0);
      const w = v.getAll("filter.p.product_type");
      w.length > 0 && (r.value = w);
      const A = v.getAll("filter.p.vendor");
      A.length > 0 && (l.value = A);
      const k = v.getAll("filter.price.range");
      k.length > 0 && (i.value = k);
    }, c = () => {
      f();
    }, p = G(() => {
      const v = /* @__PURE__ */ new Set();
      return n.products.forEach((w) => {
        w.product_type && v.add(w.product_type);
      }), Array.from(v).sort();
    }), h = G(() => {
      const v = /* @__PURE__ */ new Set();
      return n.products.forEach((w) => {
        w.vendor && v.add(w.vendor);
      }), Array.from(v).sort();
    }), g = G(() => i.value.length > 0 || r.value.length > 0 || l.value.length > 0 || a.value), m = () => {
      const v = new URL(window.location.href);
      o.value === "manual" ? v.searchParams.delete("sort_by") : v.searchParams.set("sort_by", o.value), window.location.href = v.toString();
    }, D = () => {
      u.value || P(), N();
    }, P = () => {
      const v = new URLSearchParams(window.location.search), w = [];
      for (const [k] of v)
        k.startsWith("filter.") && w.push(k);
      w.forEach((k) => {
        for (; v.has(k); )
          v.delete(k);
      }), a.value && v.set("filter.v.availability", "1"), i.value.length > 0 && i.value.forEach((k) => {
        v.append("filter.price.range", k);
      }), r.value.length > 0 && r.value.forEach((k) => {
        v.append("filter.p.product_type", k);
      }), l.value.length > 0 && l.value.forEach((k) => {
        v.append("filter.p.vendor", k);
      });
      const A = `${window.location.pathname}${v.toString() ? "?" + v.toString() : ""}`;
      window.location.href = A;
    }, V = () => {
      i.value = [], r.value = [], l.value = [], a.value = !1;
      const v = new URLSearchParams(window.location.search), w = [];
      for (const [y] of v)
        y.startsWith("filter.") && w.push(y);
      w.forEach((y) => v.delete(y));
      const A = v.get("sort_by"), k = `${window.location.pathname}${A ? "?sort_by=" + A : ""}`;
      window.location.href = k;
    }, _ = () => {
      u.value = !1, P();
    }, N = () => {
      s("update-filters", {
        sort: o.value,
        priceRanges: i.value,
        types: r.value,
        vendors: l.value,
        inStockOnly: a.value
      });
    };
    return rt(() => {
      f(), window.addEventListener("popstate", c);
    }), Ks(() => {
      window.removeEventListener("popstate", c);
    }), (v, w) => (E(), x("div", y1, [
      d("div", b1, [
        d("button", {
          onClick: w[0] || (w[0] = (A) => u.value = !0),
          class: "flex items-center justify-between w-full px-4 py-2 bg-white border border-secondary-300 hover:bg-secondary-50 transition-colors",
          style: { borderRadius: "var(--card-radius, 8px)" }
        }, w[20] || (w[20] = [
          d("span", { class: "font-medium" }, "Filters", -1),
          d("svg", {
            class: "w-5 h-5",
            fill: "none",
            stroke: "currentColor",
            viewBox: "0 0 24 24"
          }, [
            d("path", {
              "stroke-linecap": "round",
              "stroke-linejoin": "round",
              "stroke-width": "2",
              d: "M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
            })
          ], -1)
        ]))
      ]),
      d("div", _1, [
        d("div", w1, [
          e.showSort ? (E(), x("div", E1, [
            w[22] || (w[22] = d("h3", { class: "text-base font-semibold mb-3" }, "Sort By", -1)),
            Le(d("select", {
              "onUpdate:modelValue": w[1] || (w[1] = (A) => o.value = A),
              onChange: m,
              class: "w-full px-3 py-2 border border-secondary-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
            }, w[21] || (w[21] = [
              Gs('<option value="manual">Featured</option><option value="best-selling">Best Selling</option><option value="title-ascending">Alphabetically, A-Z</option><option value="title-descending">Alphabetically, Z-A</option><option value="price-ascending">Price, low to high</option><option value="price-descending">Price, high to low</option><option value="created-ascending">Date, old to new</option><option value="created-descending">Date, new to old</option>', 8)
            ]), 544), [
              [Ls, o.value]
            ])
          ])) : H("", !0),
          d("div", x1, [
            w[24] || (w[24] = d("h3", { class: "text-base font-semibold mb-3" }, "Availability", -1)),
            d("label", N1, [
              Le(d("input", {
                type: "checkbox",
                "onUpdate:modelValue": w[2] || (w[2] = (A) => a.value = A),
                onChange: D,
                class: "w-4 h-4 text-black border-secondary-300 rounded focus:ring-black"
              }, null, 544), [
                [Ke, a.value]
              ]),
              w[23] || (w[23] = d("span", { class: "ml-2 text-sm" }, "In stock only", -1))
            ])
          ]),
          d("div", S1, [
            w[29] || (w[29] = d("h3", { class: "text-base font-semibold mb-3" }, "Price", -1)),
            d("div", k1, [
              d("label", C1, [
                Le(d("input", {
                  type: "checkbox",
                  value: "0-50",
                  "onUpdate:modelValue": w[3] || (w[3] = (A) => i.value = A),
                  onChange: D,
                  class: "w-4 h-4 text-black border-secondary-300 rounded focus:ring-black"
                }, null, 544), [
                  [Ke, i.value]
                ]),
                w[25] || (w[25] = d("span", { class: "ml-2 text-sm" }, "Under $50", -1))
              ]),
              d("label", O1, [
                Le(d("input", {
                  type: "checkbox",
                  value: "50-100",
                  "onUpdate:modelValue": w[4] || (w[4] = (A) => i.value = A),
                  onChange: D,
                  class: "w-4 h-4 text-black border-secondary-300 rounded focus:ring-black"
                }, null, 544), [
                  [Ke, i.value]
                ]),
                w[26] || (w[26] = d("span", { class: "ml-2 text-sm" }, "$50 - $100", -1))
              ]),
              d("label", T1, [
                Le(d("input", {
                  type: "checkbox",
                  value: "100-200",
                  "onUpdate:modelValue": w[5] || (w[5] = (A) => i.value = A),
                  onChange: D,
                  class: "w-4 h-4 text-black border-secondary-300 rounded focus:ring-black"
                }, null, 544), [
                  [Ke, i.value]
                ]),
                w[27] || (w[27] = d("span", { class: "ml-2 text-sm" }, "$100 - $200", -1))
              ]),
              d("label", $1, [
                Le(d("input", {
                  type: "checkbox",
                  value: "200+",
                  "onUpdate:modelValue": w[6] || (w[6] = (A) => i.value = A),
                  onChange: D,
                  class: "w-4 h-4 text-black border-secondary-300 rounded focus:ring-black"
                }, null, 544), [
                  [Ke, i.value]
                ]),
                w[28] || (w[28] = d("span", { class: "ml-2 text-sm" }, "Over $200", -1))
              ])
            ])
          ]),
          p.value.length > 0 ? (E(), x("div", D1, [
            w[30] || (w[30] = d("h3", { class: "text-base font-semibold mb-3" }, "Product Type", -1)),
            d("div", A1, [
              (E(!0), x(ae, null, we(p.value, (A) => (E(), x("label", {
                key: A,
                class: "flex items-center"
              }, [
                Le(d("input", {
                  type: "checkbox",
                  value: A,
                  "onUpdate:modelValue": w[7] || (w[7] = (k) => r.value = k),
                  onChange: D,
                  class: "w-4 h-4 text-black border-secondary-300 rounded focus:ring-black"
                }, null, 40, V1), [
                  [Ke, r.value]
                ]),
                d("span", I1, Q(A), 1)
              ]))), 128))
            ])
          ])) : H("", !0),
          h.value.length > 0 ? (E(), x("div", M1, [
            w[31] || (w[31] = d("h3", { class: "text-base font-semibold mb-3" }, "Brand", -1)),
            d("div", P1, [
              (E(!0), x(ae, null, we(h.value, (A) => (E(), x("label", {
                key: A,
                class: "flex items-center"
              }, [
                Le(d("input", {
                  type: "checkbox",
                  value: A,
                  "onUpdate:modelValue": w[8] || (w[8] = (k) => l.value = k),
                  onChange: D,
                  class: "w-4 h-4 text-black border-secondary-300 rounded focus:ring-black"
                }, null, 40, R1), [
                  [Ke, l.value]
                ]),
                d("span", L1, Q(A), 1)
              ]))), 128))
            ])
          ])) : H("", !0),
          g.value ? (E(), x("button", {
            key: 3,
            onClick: V,
            class: "text-sm text-black hover:text-black font-medium"
          }, " Clear all filters ")) : H("", !0)
        ])
      ]),
      (E(), Tt(Sn, { to: "body" }, [
        u.value ? (E(), x("div", {
          key: 0,
          class: "fixed inset-0 z-50 lg:hidden",
          onClick: w[19] || (w[19] = It((A) => u.value = !1, ["self"]))
        }, [
          d("div", {
            class: "absolute inset-0 bg-black/60 transition-opacity duration-300 overlay-close-cursor",
            onClick: w[9] || (w[9] = (A) => u.value = !1)
          }),
          d("div", F1, [
            d("div", B1, [
              d("div", j1, [
                w[33] || (w[33] = d("h2", { class: "text-lg" }, "Filters", -1)),
                d("button", {
                  onClick: w[10] || (w[10] = (A) => u.value = !1),
                  class: "p-2 hover:bg-secondary-100 rounded-full transition-colors"
                }, w[32] || (w[32] = [
                  d("svg", {
                    class: "w-5 h-5",
                    fill: "none",
                    stroke: "currentColor",
                    viewBox: "0 0 24 24"
                  }, [
                    d("path", {
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round",
                      "stroke-width": "2",
                      d: "M6 18L18 6M6 6l12 12"
                    })
                  ], -1)
                ]))
              ]),
              d("div", H1, [
                d("div", U1, [
                  e.showSort ? (E(), x("div", q1, [
                    w[35] || (w[35] = d("h3", { class: "text-base font-semibold mb-3" }, "Sort By", -1)),
                    Le(d("select", {
                      "onUpdate:modelValue": w[11] || (w[11] = (A) => o.value = A),
                      onChange: m,
                      class: "w-full px-3 py-2 border border-secondary-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                    }, w[34] || (w[34] = [
                      d("option", { value: "manual" }, "Featured", -1),
                      d("option", { value: "best-selling" }, "Best Selling", -1),
                      d("option", { value: "title-ascending" }, "Alphabetically, A-Z", -1),
                      d("option", { value: "title-descending" }, "Alphabetically, Z-A", -1),
                      d("option", { value: "price-ascending" }, "Price, low to high", -1),
                      d("option", { value: "price-descending" }, "Price, high to low", -1),
                      d("option", { value: "created-ascending" }, "Date, old to new", -1),
                      d("option", { value: "created-descending" }, "Date, new to old", -1)
                    ]), 544), [
                      [Ls, o.value]
                    ])
                  ])) : H("", !0),
                  d("div", z1, [
                    w[37] || (w[37] = d("h3", { class: "text-base font-semibold mb-3" }, "Availability", -1)),
                    d("label", W1, [
                      Le(d("input", {
                        type: "checkbox",
                        "onUpdate:modelValue": w[12] || (w[12] = (A) => a.value = A),
                        onChange: D,
                        class: "w-4 h-4 text-black border-secondary-300 rounded focus:ring-black"
                      }, null, 544), [
                        [Ke, a.value]
                      ]),
                      w[36] || (w[36] = d("span", { class: "ml-2 text-sm" }, "In stock only", -1))
                    ])
                  ]),
                  d("div", K1, [
                    w[42] || (w[42] = d("h3", { class: "text-base font-semibold mb-3" }, "Price", -1)),
                    d("div", G1, [
                      d("label", J1, [
                        Le(d("input", {
                          type: "checkbox",
                          value: "0-50",
                          "onUpdate:modelValue": w[13] || (w[13] = (A) => i.value = A),
                          onChange: D,
                          class: "w-4 h-4 text-black border-secondary-300 rounded focus:ring-black"
                        }, null, 544), [
                          [Ke, i.value]
                        ]),
                        w[38] || (w[38] = d("span", { class: "ml-2 text-sm" }, "Under $50", -1))
                      ]),
                      d("label", Y1, [
                        Le(d("input", {
                          type: "checkbox",
                          value: "50-100",
                          "onUpdate:modelValue": w[14] || (w[14] = (A) => i.value = A),
                          onChange: D,
                          class: "w-4 h-4 text-black border-secondary-300 rounded focus:ring-black"
                        }, null, 544), [
                          [Ke, i.value]
                        ]),
                        w[39] || (w[39] = d("span", { class: "ml-2 text-sm" }, "$50 - $100", -1))
                      ]),
                      d("label", X1, [
                        Le(d("input", {
                          type: "checkbox",
                          value: "100-200",
                          "onUpdate:modelValue": w[15] || (w[15] = (A) => i.value = A),
                          onChange: D,
                          class: "w-4 h-4 text-black border-secondary-300 rounded focus:ring-black"
                        }, null, 544), [
                          [Ke, i.value]
                        ]),
                        w[40] || (w[40] = d("span", { class: "ml-2 text-sm" }, "$100 - $200", -1))
                      ]),
                      d("label", Q1, [
                        Le(d("input", {
                          type: "checkbox",
                          value: "200+",
                          "onUpdate:modelValue": w[16] || (w[16] = (A) => i.value = A),
                          onChange: D,
                          class: "w-4 h-4 text-black border-secondary-300 rounded focus:ring-black"
                        }, null, 544), [
                          [Ke, i.value]
                        ]),
                        w[41] || (w[41] = d("span", { class: "ml-2 text-sm" }, "Over $200", -1))
                      ])
                    ])
                  ]),
                  p.value.length > 0 ? (E(), x("div", Z1, [
                    w[43] || (w[43] = d("h3", { class: "text-base font-semibold mb-3" }, "Product Type", -1)),
                    d("div", e_, [
                      (E(!0), x(ae, null, we(p.value, (A) => (E(), x("label", {
                        key: A,
                        class: "flex items-center"
                      }, [
                        Le(d("input", {
                          type: "checkbox",
                          value: A,
                          "onUpdate:modelValue": w[17] || (w[17] = (k) => r.value = k),
                          onChange: D,
                          class: "w-4 h-4 text-black border-secondary-300 rounded focus:ring-black"
                        }, null, 40, t_), [
                          [Ke, r.value]
                        ]),
                        d("span", n_, Q(A), 1)
                      ]))), 128))
                    ])
                  ])) : H("", !0),
                  h.value.length > 0 ? (E(), x("div", s_, [
                    w[44] || (w[44] = d("h3", { class: "text-base font-semibold mb-3" }, "Brand", -1)),
                    d("div", o_, [
                      (E(!0), x(ae, null, we(h.value, (A) => (E(), x("label", {
                        key: A,
                        class: "flex items-center"
                      }, [
                        Le(d("input", {
                          type: "checkbox",
                          value: A,
                          "onUpdate:modelValue": w[18] || (w[18] = (k) => l.value = k),
                          onChange: D,
                          class: "w-4 h-4 text-black border-secondary-300 rounded focus:ring-black"
                        }, null, 40, i_), [
                          [Ke, l.value]
                        ]),
                        d("span", r_, Q(A), 1)
                      ]))), 128))
                    ])
                  ])) : H("", !0),
                  g.value ? (E(), x("button", {
                    key: 3,
                    onClick: V,
                    class: "text-sm text-black hover:text-black font-medium"
                  }, " Clear all filters ")) : H("", !0)
                ])
              ]),
              d("div", { class: "p-4 border-t" }, [
                d("button", {
                  onClick: _,
                  class: "w-full bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800 transition-colors"
                }, " Apply Filters ")
              ])
            ])
          ])
        ])) : H("", !0)
      ]))
    ]));
  }
}, l_ = { class: "collection-grid" }, a_ = {
  key: 0,
  class: "mb-8"
}, c_ = { class: "text-3xl font-bold text-secondary-900 mb-4" }, u_ = {
  key: 0,
  class: "prose prose-sm max-w-none text-secondary-600"
}, d_ = { class: "mt-4 flex items-center justify-between" }, f_ = { class: "text-sm text-secondary-600" }, p_ = {
  key: 0,
  class: "lg:hidden"
}, h_ = { class: "lg:grid lg:grid-cols-4 lg:gap-8" }, m_ = {
  key: 0,
  class: "lg:col-span-1"
}, g_ = ["products"], v_ = {
  key: 1,
  class: "text-center py-12"
}, y_ = ["product"], b_ = {
  key: 3,
  class: "mt-8"
}, __ = {
  key: 0,
  class: "inline-flex items-center"
}, w_ = {
  key: 1,
  class: "text-center"
}, E_ = ["disabled"], x_ = { key: 0 }, N_ = { key: 1 }, S_ = {
  key: 2,
  class: "flex items-center justify-between"
}, k_ = { class: "flex-1 flex justify-between sm:hidden" }, C_ = ["disabled"], O_ = ["disabled"], T_ = { class: "hidden sm:flex-1 sm:flex sm:items-center sm:justify-center" }, $_ = {
  class: "relative z-0 inline-flex rounded-md shadow-sm -space-x-px",
  "aria-label": "Pagination"
}, D_ = ["disabled"], A_ = ["onClick"], V_ = ["disabled"], I_ = { class: "flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:p-0" }, M_ = {
  class: "relative bg-white text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-2xl sm:w-full",
  style: { borderRadius: "var(--button-radius)" }
}, P_ = { class: "bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4" }, R_ = { class: "text-lg font-medium text-secondary-900" }, L_ = {
  __name: "CollectionGrid",
  props: {
    products: {
      type: Array,
      default: () => []
    },
    collectionTitle: {
      type: String,
      default: "All Products"
    },
    collectionDescription: {
      type: String,
      default: ""
    },
    collectionHandle: {
      type: String,
      default: ""
    },
    totalProducts: {
      type: Number,
      default: 0
    },
    productsPerPage: {
      type: Number,
      default: 12
    },
    enableInfiniteScroll: {
      type: Boolean,
      default: !1
    },
    showHeader: {
      type: Boolean,
      default: !0
    },
    currentPage: {
      type: Number,
      default: 1
    },
    totalPages: {
      type: Number,
      default: 1
    },
    paginationInfo: {
      type: Object,
      default: () => ({})
    },
    columnsDesktop: {
      type: Number,
      default: 4
    },
    columnsMobile: {
      type: [Number, String],
      default: 2
    },
    enableFiltering: {
      type: Boolean,
      default: !0
    },
    enableSorting: {
      type: Boolean,
      default: !0
    },
    filterPosition: {
      type: String,
      default: "sidebar"
    }
  },
  setup(e) {
    const t = e, n = X(!1), s = X(!1), o = X(t.currentPage), i = X(t.products.length), r = X("manual"), l = X({}), a = X(null), u = X(null), f = G(() => {
      const y = Number(t.columnsMobile), T = t.columnsDesktop, O = y === 1 ? "grid-cols-1" : "grid-cols-2", C = T <= 3 ? `md:grid-cols-${T}` : "md:grid-cols-3", L = `lg:grid-cols-${T}`;
      return `grid ${O} ${C} ${L} gap-4 lg:gap-6`;
    }), c = G(() => {
      var O, C, L;
      let y = [...t.products];
      switch (l.value.inStockOnly && (y = y.filter((j) => j.available)), ((O = l.value.priceRanges) == null ? void 0 : O.length) > 0 && (y = y.filter((j) => {
        const q = j.price / 100;
        return l.value.priceRanges.some((I) => I === "0-50" ? q < 50 : I === "50-100" ? q >= 50 && q < 100 : I === "100-200" ? q >= 100 && q < 200 : I === "200+" ? q >= 200 : !1);
      })), ((C = l.value.types) == null ? void 0 : C.length) > 0 && (y = y.filter((j) => l.value.types.includes(j.product_type))), ((L = l.value.vendors) == null ? void 0 : L.length) > 0 && (y = y.filter((j) => l.value.vendors.includes(j.vendor))), l.value.sort || r.value) {
        case "price-ascending":
          y.sort((j, q) => j.price - q.price);
          break;
        case "price-descending":
          y.sort((j, q) => q.price - j.price);
          break;
        case "title-ascending":
          y.sort((j, q) => j.title.localeCompare(q.title));
          break;
        case "title-descending":
          y.sort((j, q) => q.title.localeCompare(j.title));
          break;
        case "created-ascending":
          y.sort((j, q) => new Date(j.created_at) - new Date(q.created_at));
          break;
        case "created-descending":
          y.sort((j, q) => new Date(q.created_at) - new Date(j.created_at));
          break;
      }
      return y;
    }), p = G(() => {
      if (t.enableInfiniteScroll)
        return c.value.slice(0, i.value);
      const y = (o.value - 1) * t.productsPerPage, T = y + t.productsPerPage;
      return c.value.slice(y, T);
    }), h = G(() => t.totalPages || Math.ceil(c.value.length / t.productsPerPage)), g = G(() => t.paginationInfo && t.paginationInfo.pages ? t.currentPage < t.totalPages : i.value < c.value.length), m = G(() => t.totalProducts ? Math.max(0, t.totalProducts - t.currentPage * t.productsPerPage) : Math.max(0, c.value.length - i.value)), D = G(() => {
      const y = [], T = h.value, O = o.value;
      if (T <= 7)
        for (let C = 1; C <= T; C++)
          y.push(C);
      else if (O <= 3) {
        for (let C = 1; C <= 5; C++)
          y.push(C);
        y.push("..."), y.push(T);
      } else if (O >= T - 2) {
        y.push(1), y.push("...");
        for (let C = T - 4; C <= T; C++)
          y.push(C);
      } else {
        y.push(1), y.push("...");
        for (let C = O - 1; C <= O + 1; C++)
          y.push(C);
        y.push("..."), y.push(T);
      }
      return y.filter((C) => C === "..." || C >= 1 && C <= T);
    }), P = (y) => {
      l.value = y, o.value = 1, i.value = t.productsPerPage;
    }, V = () => {
      o.value = 1, i.value = t.productsPerPage;
    }, _ = () => {
      s.value = !0, setTimeout(() => {
        i.value += t.productsPerPage, s.value = !1;
      }, 500);
    }, N = async (y) => {
      var O;
      const T = new FormData();
      T.append("id", y.variants[0].id), T.append("quantity", "1"), await ((O = window.OrionCart) == null ? void 0 : O.addItem(T)), console.log("Added to cart:", y.title);
    }, v = (y) => {
      a.value = y;
    }, w = () => {
      a.value = null;
    };
    let A = null;
    const k = () => {
      !t.enableInfiniteScroll || !u.value || (A = new IntersectionObserver(
        (y) => {
          y[0].isIntersecting && g.value && !s.value && _();
        },
        { threshold: 0.1 }
      ), A.observe(u.value));
    };
    return rt(() => {
      k();
    }), tn(() => {
      A && A.disconnect();
    }), Lt(() => t.enableInfiniteScroll, () => {
      k();
    }), (y, T) => (E(), x("div", l_, [
      e.showHeader ? (E(), x("div", a_, [
        d("h1", c_, Q(e.collectionTitle), 1),
        e.collectionDescription ? (E(), x("div", u_, Q(e.collectionDescription), 1)) : H("", !0),
        d("div", d_, [
          d("p", f_, Q(e.totalProducts || c.value.length) + " products ", 1),
          e.enableSorting ? (E(), x("div", p_, [
            Le(d("select", {
              "onUpdate:modelValue": T[0] || (T[0] = (O) => r.value = O),
              onChange: V,
              class: "px-3 py-2 border border-secondary-300 text-sm focus:outline-none focus:ring-2 focus:ring-black",
              style: { borderRadius: "var(--button-radius)" }
            }, T[5] || (T[5] = [
              Gs('<option value="manual">Featured</option><option value="best-selling">Best Selling</option><option value="title-ascending">A-Z</option><option value="title-descending">Z-A</option><option value="price-ascending">Price: Low to High</option><option value="price-descending">Price: High to Low</option>', 6)
            ]), 544), [
              [Ls, r.value]
            ])
          ])) : H("", !0)
        ])
      ])) : H("", !0),
      d("div", h_, [
        e.enableFiltering && e.filterPosition === "sidebar" ? (E(), x("aside", m_, [
          d("collection-filters", {
            products: e.products,
            onUpdateFilters: P
          }, null, 40, g_)
        ])) : H("", !0),
        d("div", {
          class: be(e.enableFiltering && e.filterPosition === "sidebar" ? "lg:col-span-3" : "lg:col-span-4")
        }, [
          n.value ? (E(), x("div", {
            key: 0,
            class: be(f.value)
          }, [
            (E(), x(ae, null, we(6, (O) => d("div", {
              key: O,
              class: "animate-pulse"
            }, T[6] || (T[6] = [
              d("div", {
                class: "bg-secondary-200 aspect-[3/4]",
                style: { borderRadius: "var(--button-radius)" }
              }, null, -1),
              d("div", { class: "mt-4 space-y-2" }, [
                d("div", { class: "h-4 bg-secondary-200 rounded w-3/4" }),
                d("div", { class: "h-4 bg-secondary-200 rounded w-1/2" })
              ], -1)
            ]))), 64))
          ], 2)) : c.value.length === 0 ? (E(), x("div", v_, T[7] || (T[7] = [
            d("svg", {
              class: "mx-auto h-12 w-12 text-secondary-400",
              fill: "none",
              stroke: "currentColor",
              viewBox: "0 0 24 24"
            }, [
              d("path", {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                "stroke-width": "2",
                d: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
              })
            ], -1),
            d("h3", { class: "mt-2 text-sm font-medium text-secondary-900" }, "No products found", -1),
            d("p", { class: "mt-1 text-sm text-secondary-500" }, "Try adjusting your filters", -1)
          ]))) : (E(), x("div", {
            key: 2,
            class: be(f.value)
          }, [
            (E(!0), x(ae, null, we(p.value, (O) => (E(), x("product-card", {
              key: O.id,
              product: O,
              onQuickAdd: N,
              onQuickView: v
            }, null, 40, y_))), 128))
          ], 2)),
          !n.value && c.value.length > 0 ? (E(), x("div", b_, [
            e.enableInfiniteScroll ? (E(), x("div", {
              key: 0,
              ref_key: "loadMoreTrigger",
              ref: u,
              class: "text-center py-4"
            }, [
              s.value ? (E(), x("div", __, T[8] || (T[8] = [
                d("svg", {
                  class: "animate-spin h-5 w-5 text-black mr-2",
                  fill: "none",
                  viewBox: "0 0 24 24"
                }, [
                  d("circle", {
                    class: "opacity-25",
                    cx: "12",
                    cy: "12",
                    r: "10",
                    stroke: "currentColor",
                    "stroke-width": "4"
                  }),
                  d("path", {
                    class: "opacity-75",
                    fill: "currentColor",
                    d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  })
                ], -1),
                We(" Loading more products... ", -1)
              ]))) : H("", !0)
            ], 512)) : g.value ? (E(), x("div", w_, [
              d("button", {
                onClick: _,
                disabled: s.value,
                class: "inline-flex items-center px-6 py-3 border border-secondary-300 text-sm font-medium text-secondary-700 bg-white hover:bg-secondary-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black disabled:opacity-50 disabled:cursor-not-allowed",
                style: { borderRadius: "var(--button-radius)" }
              }, [
                s.value ? (E(), x("span", x_, "Loading...")) : (E(), x("span", N_, "Load More (" + Q(m.value) + " remaining)", 1))
              ], 8, E_)
            ])) : H("", !0),
            !e.enableInfiniteScroll && h.value > 1 ? (E(), x("nav", S_, [
              d("div", k_, [
                d("button", {
                  onClick: T[1] || (T[1] = (O) => o.value--),
                  disabled: o.value === 1,
                  class: "relative inline-flex items-center px-4 py-2 border border-secondary-300 text-sm font-medium text-secondary-700 bg-white hover:bg-secondary-50 disabled:opacity-50 disabled:cursor-not-allowed",
                  style: { borderRadius: "var(--button-radius)" }
                }, " Previous ", 8, C_),
                d("button", {
                  onClick: T[2] || (T[2] = (O) => o.value++),
                  disabled: o.value === h.value,
                  class: "ml-3 relative inline-flex items-center px-4 py-2 border border-secondary-300 text-sm font-medium text-secondary-700 bg-white hover:bg-secondary-50 disabled:opacity-50 disabled:cursor-not-allowed",
                  style: { borderRadius: "var(--button-radius)" }
                }, " Next ", 8, O_)
              ]),
              d("div", T_, [
                d("div", null, [
                  d("nav", $_, [
                    d("button", {
                      onClick: T[3] || (T[3] = (O) => o.value--),
                      disabled: o.value === 1,
                      class: "relative inline-flex items-center px-2 py-2 border border-secondary-300 bg-white text-sm font-medium text-secondary-500 hover:bg-secondary-50 disabled:opacity-50 disabled:cursor-not-allowed",
                      style: { borderTopLeftRadius: "var(--button-radius)", borderBottomLeftRadius: "var(--button-radius)" }
                    }, T[9] || (T[9] = [
                      d("svg", {
                        class: "h-5 w-5",
                        fill: "currentColor",
                        viewBox: "0 0 20 20"
                      }, [
                        d("path", {
                          "fill-rule": "evenodd",
                          d: "M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z",
                          "clip-rule": "evenodd"
                        })
                      ], -1)
                    ]), 8, D_),
                    (E(!0), x(ae, null, we(D.value, (O) => (E(), x("button", {
                      key: O,
                      onClick: (C) => o.value = O,
                      class: be([
                        "relative inline-flex items-center px-4 py-2 border text-sm font-medium",
                        o.value === O ? "z-10 bg-gray-50 border-black text-black" : "bg-white border-secondary-300 text-secondary-500 hover:bg-secondary-50"
                      ])
                    }, Q(O), 11, A_))), 128)),
                    d("button", {
                      onClick: T[4] || (T[4] = (O) => o.value++),
                      disabled: o.value === h.value,
                      class: "relative inline-flex items-center px-2 py-2 border border-secondary-300 bg-white text-sm font-medium text-secondary-500 hover:bg-secondary-50 disabled:opacity-50 disabled:cursor-not-allowed",
                      style: { borderTopRightRadius: "var(--button-radius)", borderBottomRightRadius: "var(--button-radius)" }
                    }, T[10] || (T[10] = [
                      d("svg", {
                        class: "h-5 w-5",
                        fill: "currentColor",
                        viewBox: "0 0 20 20"
                      }, [
                        d("path", {
                          "fill-rule": "evenodd",
                          d: "M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z",
                          "clip-rule": "evenodd"
                        })
                      ], -1)
                    ]), 8, V_)
                  ])
                ])
              ])
            ])) : H("", !0)
          ])) : H("", !0)
        ], 2)
      ]),
      (E(), Tt(Sn, { to: "body" }, [
        a.value ? (E(), x("div", {
          key: 0,
          class: "fixed inset-0 z-50 overflow-y-auto",
          onClick: It(w, ["self"])
        }, [
          d("div", I_, [
            d("div", {
              class: "fixed inset-0 bg-black/60 transition-opacity duration-300 overlay-close-cursor",
              onClick: w
            }),
            d("div", M_, [
              d("div", { class: "absolute top-0 right-0 pt-4 pr-4" }, [
                d("button", {
                  onClick: w,
                  class: "bg-white text-secondary-400 hover:text-secondary-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black",
                  style: { borderRadius: "var(--card-radius, 8px)" }
                }, T[11] || (T[11] = [
                  d("svg", {
                    class: "h-6 w-6",
                    fill: "none",
                    stroke: "currentColor",
                    viewBox: "0 0 24 24"
                  }, [
                    d("path", {
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round",
                      "stroke-width": "2",
                      d: "M6 18L18 6M6 6l12 12"
                    })
                  ], -1)
                ]))
              ]),
              d("div", P_, [
                d("h3", R_, Q(a.value.title), 1),
                T[12] || (T[12] = d("p", { class: "mt-2 text-sm text-secondary-500" }, "Quick view functionality would be implemented here", -1))
              ])
            ])
          ])
        ])) : H("", !0)
      ]))
    ]));
  }
}, F_ = { class: "collection-sort-wrapper" }, B_ = {
  __name: "CollectionSort",
  props: {
    currentSort: {
      type: String,
      default: "manual"
    },
    collectionHandle: {
      type: String,
      required: !0
    }
  },
  setup(e) {
    const n = X(e.currentSort), s = () => new URLSearchParams(window.location.search), o = (r) => {
      const l = s();
      r === "manual" ? l.delete("sort_by") : l.set("sort_by", r);
      const a = `${window.location.pathname}${l.toString() ? "?" + l.toString() : ""}`;
      window.history.pushState({}, "", a), window.location.reload();
    }, i = () => {
      o(n.value);
    };
    return rt(() => {
      const l = s().get("sort_by");
      l && (n.value = l);
    }), (r, l) => (E(), x("div", F_, [
      Le(d("select", {
        "onUpdate:modelValue": l[0] || (l[0] = (a) => n.value = a),
        onChange: i,
        class: "px-4 py-2 min-w-[200px] border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black focus:border-black",
        style: { borderRadius: "var(--button-radius)" }
      }, l[1] || (l[1] = [
        Gs('<option value="manual">Featured</option><option value="best-selling">Best Selling</option><option value="title-ascending">A-Z</option><option value="title-descending">Z-A</option><option value="price-ascending">Price: Low to High</option><option value="price-descending">Price: High to Low</option><option value="created-ascending">Date: Old to New</option><option value="created-descending">Date: New to Old</option>', 8)
      ]), 544), [
        [Ls, n.value]
      ])
    ]));
  }
}, j_ = {
  key: 0,
  class: "ml-2 px-2 py-0.5 text-xs bg-gray-900 text-white rounded-full"
}, H_ = {
  key: 0,
  class: "fixed inset-0 z-50 overflow-hidden"
}, U_ = { class: "absolute inset-0 overflow-hidden" }, q_ = { class: "fixed inset-y-0 left-0 max-w-full flex pointer-events-none" }, z_ = {
  key: 0,
  class: "w-screen max-w-md pointer-events-auto"
}, W_ = { class: "h-full flex flex-col bg-white shadow-xl transition-shadow duration-300" }, K_ = { class: "flex items-center justify-between px-4 py-6 sm:px-6 border-b border-gray-200" }, G_ = { class: "h-12 flex flex-col justify-between" }, J_ = { class: "flex-1 overflow-y-auto px-4 py-6 sm:px-6" }, Y_ = { class: "mb-6" }, X_ = { class: "flex items-center cursor-pointer" }, Q_ = { class: "mb-6" }, Z_ = { class: "space-y-2" }, ew = ["value"], tw = { class: "ml-2 text-sm" }, nw = {
  key: 0,
  class: "mb-6"
}, sw = { class: "space-y-2" }, ow = ["value"], iw = { class: "ml-2 text-sm" }, rw = {
  key: 1,
  class: "mb-6"
}, lw = { class: "space-y-2" }, aw = ["value"], cw = { class: "ml-2 text-sm" }, uw = { class: "px-4 py-6 sm:px-6 border-t border-gray-200 space-y-3" }, dw = {
  __name: "CollectionFilterDrawer",
  props: {
    products: {
      type: Array,
      default: () => []
    },
    collectionHandle: {
      type: String,
      required: !0
    }
  },
  setup(e) {
    const t = e, n = X(!1), s = X({
      inStock: !1,
      priceRanges: [],
      types: [],
      vendors: []
    }), o = [
      { value: "0-50", label: "Under $50" },
      { value: "50-100", label: "$50 - $100" },
      { value: "100-200", label: "$100 - $200" },
      { value: "200+", label: "$200 & above" }
    ], i = G(() => {
      const g = /* @__PURE__ */ new Set();
      return t.products.forEach((m) => {
        m.product_type && g.add(m.product_type);
      }), Array.from(g).sort();
    }), r = G(() => {
      const g = /* @__PURE__ */ new Set();
      return t.products.forEach((m) => {
        m.vendor && g.add(m.vendor);
      }), Array.from(g).sort();
    }), l = G(() => {
      let g = 0;
      return s.value.inStock && g++, g += s.value.priceRanges.length, g += s.value.types.length, g += s.value.vendors.length, g;
    }), a = () => {
      n.value = !n.value, n.value ? (p(), document.body.classList.add("overflow-hidden")) : document.body.classList.remove("overflow-hidden");
    }, u = () => {
      n.value = !1, document.body.classList.remove("overflow-hidden");
    }, f = () => {
      const g = new URLSearchParams(window.location.search), m = [];
      for (const [P] of g)
        P.startsWith("filter.") && m.push(P);
      m.forEach((P) => {
        for (; g.has(P); )
          g.delete(P);
      }), s.value.inStock && g.set("filter.v.availability", "1"), s.value.priceRanges.length > 0 && s.value.priceRanges.forEach((P) => {
        g.append("filter.price.range", P);
      }), s.value.types.length > 0 && s.value.types.forEach((P) => {
        g.append("filter.p.product_type", P);
      }), s.value.vendors.length > 0 && s.value.vendors.forEach((P) => {
        g.append("filter.p.vendor", P);
      });
      const D = `${window.location.pathname}${g.toString() ? "?" + g.toString() : ""}`;
      window.location.href = D;
    }, c = () => {
      s.value = {
        inStock: !1,
        priceRanges: [],
        types: [],
        vendors: []
      };
      const g = new URLSearchParams(window.location.search), m = [];
      for (const [V] of g)
        V.startsWith("filter.") && m.push(V);
      m.forEach((V) => g.delete(V));
      const D = g.get("sort_by"), P = `${window.location.pathname}${D ? "?sort_by=" + D : ""}`;
      window.location.href = P;
    }, p = () => {
      const g = new URLSearchParams(window.location.search);
      s.value = {
        inStock: !1,
        priceRanges: [],
        types: [],
        vendors: []
      }, g.get("filter.v.availability") === "1" && (s.value.inStock = !0);
      const m = g.getAll("filter.p.product_type");
      m.length > 0 && (s.value.types = m);
      const D = g.getAll("filter.p.vendor");
      D.length > 0 && (s.value.vendors = D);
      const P = g.getAll("filter.price.range");
      P.length > 0 && (s.value.priceRanges = P);
    }, h = () => {
      p();
    };
    return rt(() => {
      p(), window.addEventListener("popstate", h);
    }), Ks(() => {
      window.removeEventListener("popstate", h), document.body.classList.remove("overflow-hidden");
    }), (g, m) => (E(), x("div", null, [
      fe(wn, {
        onClick: a,
        variant: "secondary",
        size: "medium",
        class: "relative"
      }, {
        default: Re(() => [
          m[4] || (m[4] = d("svg", {
            class: "w-5 h-5 mr-2",
            fill: "none",
            stroke: "currentColor",
            viewBox: "0 0 24 24"
          }, [
            d("path", {
              "stroke-linecap": "round",
              "stroke-linejoin": "round",
              "stroke-width": "2",
              d: "M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
            })
          ], -1)),
          m[5] || (m[5] = d("span", null, "Filter", -1)),
          l.value > 0 ? (E(), x("span", j_, Q(l.value), 1)) : H("", !0)
        ]),
        _: 1,
        __: [4, 5]
      }),
      (E(), Tt(Sn, { to: "body" }, [
        fe(it, { name: "drawer" }, {
          default: Re(() => [
            n.value ? (E(), x("div", H_, [
              d("div", U_, [
                fe(it, { name: "fade" }, {
                  default: Re(() => [
                    n.value ? (E(), x("div", {
                      key: 0,
                      class: "absolute inset-0 bg-black/60 transition-opacity duration-300 overlay-close-cursor",
                      onClick: u
                    })) : H("", !0)
                  ]),
                  _: 1
                }),
                d("div", q_, [
                  fe(it, {
                    name: "slide-left",
                    appear: ""
                  }, {
                    default: Re(() => [
                      n.value ? (E(), x("div", z_, [
                        d("div", W_, [
                          d("div", K_, [
                            d("div", G_, [
                              m[6] || (m[6] = d("h2", { class: "text-xl" }, "Filters", -1)),
                              d("p", {
                                class: be(["text-sm text-gray-500 h-5 transition-opacity duration-200", { "opacity-0": l.value === 0, "opacity-100": l.value > 0 }])
                              }, Q(l.value || "0") + " " + Q((l.value || 0) === 1 ? "filter" : "filters") + " active ", 3)
                            ]),
                            d("button", {
                              type: "button",
                              class: "ml-3 -m-1.5 p-1.5 text-gray-400 hover:text-gray-500 transition-colors",
                              onClick: u
                            }, m[7] || (m[7] = [
                              d("span", { class: "sr-only" }, "Close filters", -1),
                              d("svg", {
                                class: "h-6 w-6",
                                fill: "none",
                                viewBox: "0 0 24 24",
                                stroke: "currentColor"
                              }, [
                                d("path", {
                                  "stroke-linecap": "round",
                                  "stroke-linejoin": "round",
                                  "stroke-width": "2",
                                  d: "M6 18L18 6M6 6l12 12"
                                })
                              ], -1)
                            ]))
                          ]),
                          d("div", J_, [
                            d("div", Y_, [
                              m[9] || (m[9] = d("h3", { class: "text-lg mb-3" }, "Availability", -1)),
                              d("label", X_, [
                                Le(d("input", {
                                  type: "checkbox",
                                  "onUpdate:modelValue": m[0] || (m[0] = (D) => s.value.inStock = D),
                                  class: "w-4 h-4 text-black border-gray-300 rounded focus:ring-black"
                                }, null, 512), [
                                  [Ke, s.value.inStock]
                                ]),
                                m[8] || (m[8] = d("span", { class: "ml-2 text-sm" }, "In stock only", -1))
                              ])
                            ]),
                            d("div", Q_, [
                              m[10] || (m[10] = d("h3", { class: "text-lg mb-3" }, "Price", -1)),
                              d("div", Z_, [
                                (E(), x(ae, null, we(o, (D) => d("label", {
                                  key: D.value,
                                  class: "flex items-center cursor-pointer"
                                }, [
                                  Le(d("input", {
                                    type: "checkbox",
                                    value: D.value,
                                    "onUpdate:modelValue": m[1] || (m[1] = (P) => s.value.priceRanges = P),
                                    class: "w-4 h-4 text-black border-gray-300 rounded focus:ring-black"
                                  }, null, 8, ew), [
                                    [Ke, s.value.priceRanges]
                                  ]),
                                  d("span", tw, Q(D.label), 1)
                                ])), 64))
                              ])
                            ]),
                            i.value.length > 0 ? (E(), x("div", nw, [
                              m[11] || (m[11] = d("h3", { class: "text-lg mb-3" }, "Product Type", -1)),
                              d("div", sw, [
                                (E(!0), x(ae, null, we(i.value, (D) => (E(), x("label", {
                                  key: D,
                                  class: "flex items-center cursor-pointer"
                                }, [
                                  Le(d("input", {
                                    type: "checkbox",
                                    value: D,
                                    "onUpdate:modelValue": m[2] || (m[2] = (P) => s.value.types = P),
                                    class: "w-4 h-4 text-black border-gray-300 rounded focus:ring-black"
                                  }, null, 8, ow), [
                                    [Ke, s.value.types]
                                  ]),
                                  d("span", iw, Q(D), 1)
                                ]))), 128))
                              ])
                            ])) : H("", !0),
                            r.value.length > 0 ? (E(), x("div", rw, [
                              m[12] || (m[12] = d("h3", { class: "text-lg mb-3" }, "Brand", -1)),
                              d("div", lw, [
                                (E(!0), x(ae, null, we(r.value, (D) => (E(), x("label", {
                                  key: D,
                                  class: "flex items-center cursor-pointer"
                                }, [
                                  Le(d("input", {
                                    type: "checkbox",
                                    value: D,
                                    "onUpdate:modelValue": m[3] || (m[3] = (P) => s.value.vendors = P),
                                    class: "w-4 h-4 text-black border-gray-300 rounded focus:ring-black"
                                  }, null, 8, aw), [
                                    [Ke, s.value.vendors]
                                  ]),
                                  d("span", cw, Q(D), 1)
                                ]))), 128))
                              ])
                            ])) : H("", !0)
                          ]),
                          d("div", uw, [
                            fe(wn, {
                              onClick: f,
                              variant: "primary",
                              "full-width": !0,
                              size: "large"
                            }, {
                              default: Re(() => m[13] || (m[13] = [
                                We(" Apply Filters ", -1)
                              ])),
                              _: 1,
                              __: [13]
                            }),
                            fe(wn, {
                              onClick: c,
                              variant: "secondary",
                              "full-width": !0,
                              size: "large"
                            }, {
                              default: Re(() => m[14] || (m[14] = [
                                We(" Clear All ", -1)
                              ])),
                              _: 1,
                              __: [14]
                            })
                          ])
                        ])
                      ])) : H("", !0)
                    ]),
                    _: 1
                  })
                ])
              ])
            ])) : H("", !0)
          ]),
          _: 1
        })
      ]))
    ]));
  }
};
function fw(e) {
  return ul() ? (Bc(e), !0) : !1;
}
function Lf(e) {
  return typeof e == "function" ? e() : Do(e);
}
const pw = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const hw = Object.prototype.toString, mw = (e) => hw.call(e) === "[object Object]", sl = () => {
};
function gw(e) {
  var t;
  const n = Lf(e);
  return (t = n == null ? void 0 : n.$el) != null ? t : n;
}
const Ff = pw ? window : void 0;
function _r(...e) {
  let t, n, s, o;
  if (typeof e[0] == "string" || Array.isArray(e[0]) ? ([n, s, o] = e, t = Ff) : [t, n, s, o] = e, !t)
    return sl;
  Array.isArray(n) || (n = [n]), Array.isArray(s) || (s = [s]);
  const i = [], r = () => {
    i.forEach((f) => f()), i.length = 0;
  }, l = (f, c, p, h) => (f.addEventListener(c, p, h), () => f.removeEventListener(c, p, h)), a = Lt(
    () => [gw(t), Lf(o)],
    ([f, c]) => {
      if (r(), !f)
        return;
      const p = mw(c) ? { ...c } : c;
      i.push(
        ...n.flatMap((h) => s.map((g) => l(f, h, g, p)))
      );
    },
    { immediate: !0, flush: "post" }
  ), u = () => {
    a(), r();
  };
  return fw(u), u;
}
function vw(e, t = {}) {
  const {
    threshold: n = 50,
    onSwipe: s,
    onSwipeEnd: o,
    onSwipeStart: i,
    passive: r = !0,
    window: l = Ff
  } = t, a = $s({ x: 0, y: 0 }), u = $s({ x: 0, y: 0 }), f = G(() => a.x - u.x), c = G(() => a.y - u.y), { max: p, abs: h } = Math, g = G(() => p(h(f.value), h(c.value)) >= n), m = X(!1), D = G(() => g.value ? h(f.value) > h(c.value) ? f.value > 0 ? "left" : "right" : c.value > 0 ? "up" : "down" : "none"), P = (y) => [y.touches[0].clientX, y.touches[0].clientY], V = (y, T) => {
    a.x = y, a.y = T;
  }, _ = (y, T) => {
    u.x = y, u.y = T;
  };
  let N;
  const v = yw(l == null ? void 0 : l.document);
  r ? N = v ? { passive: !0 } : { capture: !1 } : N = v ? { passive: !1, capture: !0 } : { capture: !0 };
  const w = (y) => {
    m.value && (o == null || o(y, D.value)), m.value = !1;
  }, A = [
    _r(e, "touchstart", (y) => {
      if (y.touches.length !== 1)
        return;
      N.capture && !N.passive && y.preventDefault();
      const [T, O] = P(y);
      V(T, O), _(T, O), i == null || i(y);
    }, N),
    _r(e, "touchmove", (y) => {
      if (y.touches.length !== 1)
        return;
      const [T, O] = P(y);
      _(T, O), !m.value && g.value && (m.value = !0), m.value && (s == null || s(y));
    }, N),
    _r(e, ["touchend", "touchcancel"], w, N)
  ];
  return {
    isPassiveEventSupported: v,
    isSwiping: m,
    direction: D,
    coordsStart: a,
    coordsEnd: u,
    lengthX: f,
    lengthY: c,
    stop: () => A.forEach((y) => y())
  };
}
function yw(e) {
  if (!e)
    return !1;
  let t = !1;
  const n = {
    get passive() {
      return t = !0, !1;
    }
  };
  return e.addEventListener("x", sl, n), e.removeEventListener("x", sl), t;
}
const bw = { class: "product-gallery" }, _w = { class: "main-image-wrapper" }, ww = ["src", "alt"], Ew = {
  key: 0,
  class: "absolute inset-0 flex items-center justify-center"
}, xw = {
  key: 0,
  class: "thumbnails-wrapper"
}, Nw = ["disabled"], Sw = ["onClick", "aria-label"], kw = ["src", "alt"], Cw = ["disabled"], Ow = {
  key: 1,
  class: "swiper-dots"
}, Tw = ["onClick", "aria-label"], $w = ["src", "alt"], Dw = { class: "lightbox-counter" }, Aw = 80, Jo = 4, Oc = 2, Vw = {
  __name: "ProductGallery",
  props: {
    images: {
      type: Array,
      required: !0,
      default: () => []
    },
    productTitle: {
      type: String,
      default: ""
    },
    imageTransformWidth: {
      type: Number,
      default: 1200
    },
    thumbnailWidth: {
      type: Number,
      default: 120
    }
  },
  setup(e) {
    const t = e, n = X(0), s = X(!1), o = X(!1), i = X(!1), r = X(!1), l = X(0), a = X(null), u = X(0), f = X(0), c = X({}), p = G(() => t.images.map((A) => {
      if (A.src)
        return A;
      const k = A.url || A;
      return {
        src: `${k}?width=${t.imageTransformWidth}`,
        thumbnail: `${k}?width=${t.thumbnailWidth}`,
        alt: A.alt || t.productTitle
      };
    })), h = G(() => p.value[n.value] || { src: "", alt: "" }), g = G(() => ({
      width: "150px",
      height: "150px",
      left: `${u.value - 150 / 2}px`,
      top: `${f.value - 150 / 2}px`
    })), m = G(() => {
      const k = u.value / c.value.width * 100, y = f.value / c.value.height * 100;
      return {
        width: "400px",
        height: "400px",
        backgroundImage: `url(${h.value.src})`,
        backgroundSize: `${c.value.width * Oc}px ${c.value.height * Oc}px`,
        backgroundPosition: `${k}% ${y}%`
      };
    }), D = (A) => {
      s.value = !0, n.value = A;
    }, P = (A) => {
      A === "prev" ? l.value = Math.max(0, l.value - 1) : l.value = Math.min(
        p.value.length - Jo,
        l.value + 1
      );
    }, V = (A) => {
      n.value = A, o.value = !0, document.body.classList.add("overflow-hidden");
    }, _ = () => {
      o.value = !1, document.body.classList.remove("overflow-hidden");
    }, N = (A) => {
      A === "prev" ? n.value = n.value > 0 ? n.value - 1 : p.value.length - 1 : n.value = n.value < p.value.length - 1 ? n.value + 1 : 0;
    }, v = (A) => {
      const k = A.currentTarget.getBoundingClientRect();
      c.value = k, u.value = A.clientX - k.left, f.value = A.clientY - k.top;
    }, { lengthX: w } = vw(
      a,
      {
        onSwipeEnd() {
          w.value > 50 ? P("prev") : w.value < -50 && P("next");
        }
      }
    );
    return rt(() => {
      r.value = window.innerWidth < 768;
      const A = () => {
        r.value = window.innerWidth < 768;
      }, k = (y) => {
        o.value && (y.key === "Escape" && _(), y.key === "ArrowLeft" && N("prev"), y.key === "ArrowRight" && N("next"));
      };
      window.addEventListener("resize", A), window.addEventListener("keydown", k), tn(() => {
        window.removeEventListener("resize", A), window.removeEventListener("keydown", k);
      });
    }), (A, k) => (E(), x("div", bw, [
      d("div", _w, [
        d("div", {
          class: "main-image aspect-square bg-gray-100 overflow-hidden relative group cursor-zoom-in",
          style: { borderRadius: "var(--card-radius, 8px)" },
          onClick: k[1] || (k[1] = (y) => V(n.value)),
          onMouseenter: k[2] || (k[2] = (y) => i.value = !0),
          onMouseleave: k[3] || (k[3] = (y) => i.value = !1),
          onMousemove: v
        }, [
          d("img", {
            src: h.value.src,
            alt: h.value.alt,
            class: be(["w-full h-full object-contain transition-opacity duration-300", { "opacity-0": s.value }]),
            onLoad: k[0] || (k[0] = (y) => s.value = !1)
          }, null, 42, ww),
          s.value ? (E(), x("div", Ew, k[9] || (k[9] = [
            d("div", { class: "animate-spin rounded-full h-8 w-8 border-b-2 border-red-600" }, null, -1)
          ]))) : H("", !0),
          k[10] || (k[10] = d("div", { class: "absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity bg-white rounded-full p-2 shadow-md" }, [
            d("svg", {
              class: "w-5 h-5 text-gray-600",
              fill: "none",
              stroke: "currentColor",
              viewBox: "0 0 24 24"
            }, [
              d("path", {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                "stroke-width": "2",
                d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
              })
            ])
          ], -1)),
          i.value && !r.value ? (E(), x("div", {
            key: 1,
            class: "zoom-lens",
            style: Ve(g.value)
          }, null, 4)) : H("", !0)
        ], 32),
        i.value && !r.value ? (E(), x("div", {
          key: 0,
          class: "zoom-preview",
          style: Ve(m.value)
        }, null, 4)) : H("", !0)
      ]),
      p.value.length > 1 ? (E(), x("div", xw, [
        p.value.length > Jo ? (E(), x("button", {
          key: 0,
          onClick: k[4] || (k[4] = (y) => P("prev")),
          disabled: l.value === 0,
          class: "thumbnail-nav-btn prev",
          "aria-label": "Previous images"
        }, k[11] || (k[11] = [
          d("svg", {
            class: "w-4 h-4",
            fill: "none",
            stroke: "currentColor",
            viewBox: "0 0 24 24"
          }, [
            d("path", {
              "stroke-linecap": "round",
              "stroke-linejoin": "round",
              "stroke-width": "2",
              d: "M15 19l-7-7 7-7"
            })
          ], -1)
        ]), 8, Nw)) : H("", !0),
        d("div", {
          class: "thumbnails-container",
          ref_key: "thumbnailsContainer",
          ref: a
        }, [
          d("div", {
            class: "thumbnails-track",
            style: Ve({ transform: `translateX(-${l.value * (Aw + 8)}px)` })
          }, [
            (E(!0), x(ae, null, we(p.value, (y, T) => (E(), x("button", {
              key: T,
              onClick: (O) => D(T),
              class: be(["thumbnail", { active: T === n.value }]),
              "aria-label": `View image ${T + 1}`
            }, [
              d("img", {
                src: y.thumbnail || y.src,
                alt: y.alt,
                class: "w-full h-full object-contain"
              }, null, 8, kw)
            ], 10, Sw))), 128))
          ], 4)
        ], 512),
        p.value.length > Jo ? (E(), x("button", {
          key: 1,
          onClick: k[5] || (k[5] = (y) => P("next")),
          disabled: l.value >= p.value.length - Jo,
          class: "thumbnail-nav-btn next",
          "aria-label": "Next images"
        }, k[12] || (k[12] = [
          d("svg", {
            class: "w-4 h-4",
            fill: "none",
            stroke: "currentColor",
            viewBox: "0 0 24 24"
          }, [
            d("path", {
              "stroke-linecap": "round",
              "stroke-linejoin": "round",
              "stroke-width": "2",
              d: "M9 5l7 7-7 7"
            })
          ], -1)
        ]), 8, Cw)) : H("", !0)
      ])) : H("", !0),
      p.value.length > 1 && r.value ? (E(), x("div", Ow, [
        (E(!0), x(ae, null, we(p.value, (y, T) => (E(), x("button", {
          key: T,
          onClick: (O) => D(T),
          class: be(["swiper-dot", { active: T === n.value }]),
          "aria-label": `Go to image ${T + 1}`
        }, null, 10, Tw))), 128))
      ])) : H("", !0),
      (E(), Tt(Sn, { to: "body" }, [
        o.value ? (E(), x("div", {
          key: 0,
          class: "lightbox",
          onClick: _
        }, [
          d("button", {
            onClick: _,
            class: "lightbox-close",
            "aria-label": "Close lightbox"
          }, k[13] || (k[13] = [
            d("svg", {
              class: "w-6 h-6",
              fill: "none",
              stroke: "currentColor",
              viewBox: "0 0 24 24"
            }, [
              d("path", {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                "stroke-width": "2",
                d: "M6 18L18 6M6 6l12 12"
              })
            ], -1)
          ])),
          p.value.length > 1 ? (E(), x("button", {
            key: 0,
            onClick: k[6] || (k[6] = It((y) => N("prev"), ["stop"])),
            class: "lightbox-nav prev",
            "aria-label": "Previous image"
          }, k[14] || (k[14] = [
            d("svg", {
              class: "w-8 h-8",
              fill: "none",
              stroke: "currentColor",
              viewBox: "0 0 24 24"
            }, [
              d("path", {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                "stroke-width": "2",
                d: "M15 19l-7-7 7-7"
              })
            ], -1)
          ]))) : H("", !0),
          d("div", {
            class: "lightbox-image-wrapper",
            onClick: k[7] || (k[7] = It(() => {
            }, ["stop"]))
          }, [
            d("img", {
              src: h.value.src,
              alt: h.value.alt,
              class: "lightbox-image"
            }, null, 8, $w)
          ]),
          p.value.length > 1 ? (E(), x("button", {
            key: 1,
            onClick: k[8] || (k[8] = It((y) => N("next"), ["stop"])),
            class: "lightbox-nav next",
            "aria-label": "Next image"
          }, k[15] || (k[15] = [
            d("svg", {
              class: "w-8 h-8",
              fill: "none",
              stroke: "currentColor",
              viewBox: "0 0 24 24"
            }, [
              d("path", {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                "stroke-width": "2",
                d: "M9 5l7 7-7 7"
              })
            ], -1)
          ]))) : H("", !0),
          d("div", Dw, Q(n.value + 1) + " / " + Q(p.value.length), 1)
        ])) : H("", !0)
      ]))
    ]));
  }
}, Iw = /* @__PURE__ */ nr(Vw, [["__scopeId", "data-v-c20f6e1d"]]), Mw = {
  key: 0,
  class: "animate-pulse"
}, Pw = { class: "flex items-center gap-2 flex-nowrap" }, Rw = { class: "flex gap-0.5" }, Lw = { class: "flex items-center gap-2 flex-nowrap" }, Fw = { class: "flex gap-0.5" }, Bw = { class: "font-bold" }, jw = {
  __name: "ProductReviewSummary",
  props: {
    productId: {
      type: String,
      required: !0
    }
  },
  setup(e) {
    const t = e, n = X(null), s = X(null), o = X(!0), i = async () => {
      try {
        const a = await (await fetch(
          "/api/isv-plugin/comment/front/query/summary",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json, text/plain, */*"
            },
            body: JSON.stringify({ productId: t.productId })
          }
        )).json();
        if (a.success && a.code === "200")
          n.value = a.data;
        else
          throw new Error(a.msg || "Failed to fetch reviews");
      } catch (l) {
        s.value = `Error loading reviews: ${l.message}`;
      } finally {
        o.value = !1;
      }
    }, r = () => {
      const l = document.getElementById("plugin-product-comment");
      if (l) {
        const u = l.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({
          top: u - 150,
          behavior: "smooth"
        });
      }
    };
    return rt(i), (l, a) => o.value ? (E(), x("div", Mw, [
      d("div", Pw, [
        d("span", Rw, [
          (E(), x(ae, null, we(5, (u) => d("span", {
            key: u,
            class: "text-xl text-gray-200"
          }, "★")), 64))
        ]),
        a[0] || (a[0] = d("span", { class: "bg-gray-200 rounded h-5 w-8" }, null, -1))
      ])
    ])) : !s.value && n.value ? (E(), x("div", {
      key: 1,
      class: "cursor-pointer",
      onClick: r
    }, [
      d("div", Lw, [
        d("span", Fw, [
          (E(), x(ae, null, we(5, (u) => d("span", {
            key: u,
            class: be([
              "text-xl",
              u <= Math.round(n.value.score) ? "text-yellow-400" : "text-gray-300"
            ])
          }, "★", 2)), 64))
        ]),
        d("span", Bw, Q(n.value.score.toFixed(1)), 1)
      ])
    ])) : H("", !0);
  }
}, Hw = {
  class: "bg-gray-50 p-6 lg:sticky lg:top-24 border border-gray-200",
  style: { borderRadius: "var(--card-radius, 8px)", boxShadow: "var(--card-shadow, 0 4px 6px -1px rgba(0, 0, 0, 0.1))" }
}, Uw = { class: "space-y-3 mb-4" }, qw = { class: "flex justify-between text-sm" }, zw = { class: "text-gray-600" }, Ww = { class: "font-medium text-gray-900" }, Kw = {
  key: 0,
  class: "flex justify-between text-sm text-green-600"
}, Gw = {
  key: 1,
  class: "flex justify-between text-sm"
}, Jw = { class: "text-gray-900" }, Yw = {
  key: 2,
  class: "flex justify-between text-sm"
}, Xw = { class: "text-gray-900" }, Qw = { class: "border-t pt-4 mb-6" }, Zw = { class: "flex justify-between items-baseline" }, eE = { class: "text-right" }, tE = { class: "text-xl font-bold text-gray-900" }, nE = {
  key: 0,
  class: "text-xs text-green-600 font-medium"
}, sE = { class: "mb-6" }, oE = { class: "group" }, iE = { class: "mt-3" }, rE = ["disabled"], lE = ["disabled"], aE = {
  key: 0,
  class: "text-xs text-red-600 mt-2"
}, cE = {
  key: 1,
  class: "text-xs text-green-600 mt-2"
}, uE = ["disabled"], dE = {
  key: 0,
  class: "flex items-center gap-2"
}, fE = { key: 1 }, pE = {
  __name: "CartSummary",
  props: {
    cart: {
      type: Object,
      required: !0
    },
    showShipping: {
      type: Boolean,
      default: !0
    },
    showTax: {
      type: Boolean,
      default: !0
    }
  },
  emits: ["checkout"],
  setup(e, { emit: t }) {
    const n = e, s = t, o = X(""), i = X(""), r = X(""), l = X(!1), a = X(!1), u = X(!1), f = G(() => n.cart.item_count || 0), c = G(() => n.cart.total_price || 0), p = G(() => n.cart.original_total_price || n.cart.total_price || 0), h = G(() => n.cart.total_discount || 0), g = G(() => c.value >= 5e3 ? 0 : 500), m = G(() => Math.round(c.value * 0.1)), D = (_) => `$${(_ / 100).toFixed(2)}`, P = async () => {
      var _;
      if (!(!o.value.trim() || l.value)) {
        l.value = !0, i.value = "", r.value = "";
        try {
          const N = new FormData();
          N.append("discount_code", o.value);
          const v = await fetch("/discount/apply", {
            method: "POST",
            body: N
          });
          if (v.ok)
            r.value = "Promo code applied successfully!", o.value = "", await ((_ = window.OrionCart) == null ? void 0 : _.fetchCart());
          else {
            const w = await v.json();
            i.value = w.message || "Invalid promo code";
          }
        } catch (N) {
          console.error("Failed to apply promo code:", N), i.value = "Failed to apply promo code. Please try again.";
        } finally {
          l.value = !1;
        }
      }
    }, V = async () => {
      if (!(f.value === 0 || a.value)) {
        a.value = !0;
        try {
          s("checkout"), window.location.href = "/checkout";
        } catch (_) {
          console.error("Failed to proceed to checkout:", _), alert("Failed to proceed to checkout. Please try again.");
        } finally {
          a.value = !1;
        }
      }
    };
    return (_, N) => (E(), x("div", Hw, [
      N[10] || (N[10] = d("h2", { class: "text-lg font-semibold text-gray-900 mb-4" }, "Order Summary", -1)),
      d("div", Uw, [
        d("div", qw, [
          d("span", zw, "Subtotal (" + Q(f.value) + " " + Q(f.value === 1 ? "item" : "items") + ")", 1),
          d("span", Ww, Q(D(p.value)), 1)
        ]),
        h.value > 0 ? (E(), x("div", Kw, [
          N[3] || (N[3] = d("span", { class: "flex items-center gap-1" }, [
            d("svg", {
              class: "w-4 h-4",
              fill: "currentColor",
              viewBox: "0 0 20 20"
            }, [
              d("path", {
                "fill-rule": "evenodd",
                d: "M5 2a2 2 0 00-2 2v11a2 2 0 002 2h10a2 2 0 002-2V4a2 2 0 00-2-2H5zm0 2h10v7h-2l-1 2H8l-1-2H5V4z",
                "clip-rule": "evenodd"
              })
            ]),
            We(" Discounts ")
          ], -1)),
          d("span", null, "-" + Q(D(h.value)), 1)
        ])) : H("", !0),
        e.showShipping ? (E(), x("div", Gw, [
          N[4] || (N[4] = d("span", { class: "text-gray-600" }, "Estimated Shipping", -1)),
          d("span", Jw, Q(g.value === 0 ? "Free" : D(g.value)), 1)
        ])) : H("", !0),
        e.showTax ? (E(), x("div", Yw, [
          N[5] || (N[5] = d("span", { class: "text-gray-600" }, "Estimated Tax", -1)),
          d("span", Xw, Q(D(m.value)), 1)
        ])) : H("", !0)
      ]),
      d("div", Qw, [
        d("div", Zw, [
          N[6] || (N[6] = d("span", { class: "text-lg font-semibold" }, "Total", -1)),
          d("div", eE, [
            d("span", tE, Q(D(c.value)), 1),
            h.value > 0 ? (E(), x("p", nE, " You saved " + Q(D(h.value)) + "! ", 1)) : H("", !0)
          ])
        ])
      ]),
      d("div", sE, [
        d("details", oE, [
          N[7] || (N[7] = d("summary", { class: "flex justify-between items-center cursor-pointer text-sm font-medium text-gray-700 hover:text-gray-900" }, [
            d("span", null, "Have a promo code?"),
            d("svg", {
              class: "w-4 h-4 transition-transform group-open:rotate-180",
              fill: "none",
              stroke: "currentColor",
              viewBox: "0 0 24 24"
            }, [
              d("path", {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                "stroke-width": "2",
                d: "M19 9l-7 7-7-7"
              })
            ])
          ], -1)),
          d("div", iE, [
            d("form", {
              onSubmit: It(P, ["prevent"]),
              class: "flex gap-2"
            }, [
              Le(d("input", {
                "onUpdate:modelValue": N[0] || (N[0] = (v) => o.value = v),
                type: "text",
                placeholder: "Enter promo code",
                class: "flex-1 px-3 py-2 border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent",
                style: { borderRadius: "var(--card-radius, 8px)" },
                disabled: l.value
              }, null, 8, rE), [
                [Rs, o.value]
              ]),
              d("button", {
                type: "submit",
                class: "px-4 py-2 bg-gray-900 text-white text-sm hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
                style: { borderRadius: "var(--button-radius)" },
                disabled: !o.value.trim() || l.value
              }, Q(l.value ? "Applying..." : "Apply"), 9, lE)
            ], 32),
            i.value ? (E(), x("p", aE, Q(i.value), 1)) : H("", !0),
            r.value ? (E(), x("p", cE, Q(r.value), 1)) : H("", !0)
          ])
        ])
      ]),
      d("button", {
        onClick: V,
        class: "w-full py-3 px-6 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2",
        style: Ve({
          backgroundColor: u.value ? "var(--button-primary-bg-hover)" : "var(--button-primary-bg)",
          color: "var(--button-primary-text)",
          borderRadius: "var(--button-radius)"
        }),
        onMouseenter: N[1] || (N[1] = (v) => u.value = !0),
        onMouseleave: N[2] || (N[2] = (v) => u.value = !1),
        disabled: f.value === 0 || a.value
      }, [
        a.value ? (E(), x("span", dE, N[8] || (N[8] = [
          d("svg", {
            class: "animate-spin h-5 w-5",
            viewBox: "0 0 24 24"
          }, [
            d("circle", {
              class: "opacity-25",
              cx: "12",
              cy: "12",
              r: "10",
              stroke: "currentColor",
              "stroke-width": "4",
              fill: "none"
            }),
            d("path", {
              class: "opacity-75",
              fill: "currentColor",
              d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            })
          ], -1),
          We(" Processing... ", -1)
        ]))) : (E(), x("span", fE, N[9] || (N[9] = [
          We(" Proceed to Checkout ", -1),
          d("svg", {
            class: "w-5 h-5",
            fill: "none",
            stroke: "currentColor",
            viewBox: "0 0 24 24"
          }, [
            d("path", {
              "stroke-linecap": "round",
              "stroke-linejoin": "round",
              "stroke-width": "2",
              d: "M17 8l4 4m0 0l-4 4m4-4H3"
            })
          ], -1)
        ])))
      ], 44, uE),
      N[11] || (N[11] = Gs('<div class="mt-6 space-y-2"><div class="flex items-center gap-2 text-xs text-gray-600"><svg class="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg> Secure checkout </div><div class="flex items-center gap-2 text-xs text-gray-600"><svg class="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20"><path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"></path><path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1v-5a1 1 0 00-.293-.707l-2-2A1 1 0 0015 7h-1z"></path></svg> Free shipping on orders over $50 </div><div class="flex items-center gap-2 text-xs text-gray-600"><svg class="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd"></path></svg> 30-day return policy </div></div><div class="mt-6 pt-6 border-t"><p class="text-xs text-gray-600 mb-2">We accept</p><div class="flex gap-2"><svg class="h-6 text-gray-400" viewBox="0 0 48 32" fill="currentColor"><path d="M0 0h48v32H0z" fill="#1A1F71"></path><path d="M19.654 12.7l-2.365 7.3h-2.287l2.365-7.3h2.287zm9.524 4.696l1.502-3.862.859 3.862h-2.361zm3.174 2.604h2.115l-1.849-7.3h-1.953c-.44 0-.811.242-1.007.615l-3.545 6.685h2.479l.493-1.277h3.025l.242 1.277zm-6.372-2.383c.011-2.297-3.331-2.424-3.31-3.449.007-.312.32-.644 1.003-.729a4.6 4.6 0 012.172.366l.387-1.703a6.34 6.34 0 00-2.061-.361c-2.178 0-3.71 1.105-3.721 2.688-.013 1.17 1.094 1.824 1.929 2.214.859.4 1.147.656 1.143.1013-.006.547-.685.788-1.318.797a4.746 4.746 0 01-2.194-.494l-.388 1.712a6.922 6.922 0 002.357.416c2.235 0 3.697-1.053 3.701-2.683m-8.813-4.917l-3.849 7.3h-2.491l-1.897-6.776c-.115-.428-.215-.585-.564-.766-.571-.295-1.516-.571-2.345-.743l.056-.265h4.046c.515 0 .979.317 1.097.867l1.002 4.771 2.473-5.638h2.472z" fill="#fff"></path></svg><svg class="h-6 text-gray-400" viewBox="0 0 48 32" fill="currentColor"><rect width="48" height="32" rx="4" fill="#EB001B"></rect><circle cx="19" cy="16" r="8" fill="#FF5F00"></circle><circle cx="29" cy="16" r="8" fill="#F79E1B"></circle></svg><svg class="h-6 text-gray-400" viewBox="0 0 48 32" fill="currentColor"><rect width="48" height="32" rx="4" fill="#2E7BC4"></rect><path d="M20 10h8l-1 12h-6z" fill="#fff"></path></svg><svg class="h-6 text-gray-400" viewBox="0 0 48 32" fill="currentColor"><rect width="48" height="32" rx="4" fill="#253B80"></rect><path d="M19 11h10v10H19z" fill="#179BD7"></path></svg></div></div>', 2))
    ]));
  }
}, hE = {
  key: 0,
  class: "fixed inset-0 z-[99999] overflow-hidden"
}, mE = {
  key: 0,
  class: "relative z-10 pointer-events-auto"
}, gE = { class: "bg-white transition-all duration-300 border-b border-gray-200" }, vE = { class: "max-w-7xl mx-auto" }, yE = { class: "relative" }, bE = { class: "px-4 py-8 sm:px-6 lg:px-8" }, _E = { class: "flex items-center gap-4 max-w-3xl mx-auto" }, wE = { class: "flex-1 relative group" }, EE = { class: "absolute inset-y-0 right-0 flex items-center pr-4" }, xE = {
  key: 0,
  class: "relative"
}, NE = {
  key: 0,
  class: "mt-6 max-w-3xl mx-auto"
}, SE = { class: "flex flex-wrap gap-2" }, kE = ["onClick"], CE = {
  key: 0,
  class: "border-t border-gray-100"
}, OE = { class: "max-h-[60vh] overflow-y-auto custom-scrollbar" }, TE = {
  key: 0,
  class: "p-6"
}, $E = { class: "animate-pulse" }, DE = { class: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" }, AE = {
  key: 1,
  class: "p-6"
}, VE = { class: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" }, IE = ["href"], ME = { class: "relative overflow-hidden rounded-lg flex-shrink-0" }, PE = ["src", "alt"], RE = {
  key: 1,
  class: "w-24 h-24 bg-gray-100 flex items-center justify-center"
}, LE = { class: "flex-1 min-w-0" }, FE = { class: "text-base font-medium text-gray-900 group-hover:text-gray-700 transition-colors line-clamp-2" }, BE = { class: "mt-3 flex items-center gap-2" }, jE = { class: "text-lg font-semibold text-gray-900" }, HE = {
  key: 0,
  class: "text-sm text-gray-400 line-through"
}, UE = {
  key: 2,
  class: "p-6 border-t border-gray-100"
}, qE = { class: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3" }, zE = ["href"], WE = { class: "text-sm text-gray-700 group-hover:text-gray-900 transition-colors" }, KE = {
  key: 3,
  class: "p-12 text-center"
}, GE = {
  key: 0,
  class: "border-t border-gray-100 px-6 py-4 bg-gray-50/50"
}, JE = ["href"], YE = {
  __name: "SearchOverlay",
  setup(e) {
    const t = X(!1), n = X(""), s = X(null), o = X(!1), i = X({
      products: [],
      collections: []
    }), r = X(null), l = G(() => {
      var N;
      return ((N = Shopline == null ? void 0 : Shopline.routes) == null ? void 0 : N.search) || "/search";
    }), a = G(() => n.value.length > 0), u = G(() => {
      var w, A;
      const N = [], v = ((A = (w = window.Shopline) == null ? void 0 : w.theme) == null ? void 0 : A.settings) || {};
      for (let k = 1; k <= 6; k++) {
        const y = v[`popular_search_${k}`];
        y && y.trim() && N.push(y.trim());
      }
      return N;
    }), f = G(() => u.value.length > 0), c = G(() => {
      var v, w, A;
      const N = ((A = (w = (v = window.Shopline) == null ? void 0 : v.theme) == null ? void 0 : w.settings) == null ? void 0 : A.button_primary_bg) || "#dc2626";
      if (N.startsWith("#")) {
        const k = N.replace("#", ""), y = parseInt(k.substr(0, 2), 16), T = parseInt(k.substr(2, 2), 16), O = parseInt(k.substr(4, 2), 16);
        return `${y}, ${T}, ${O}`;
      }
      return N.replace("rgb(", "").replace(")", "");
    }), p = X(!1), h = (N) => {
      var O, C;
      if (!N && N !== 0) return "$0.00";
      const v = window.ShoplineCurrency || {};
      v.symbol;
      const w = parseFloat(N);
      let A = v.format || ((O = Shopline == null ? void 0 : Shopline.shop) == null ? void 0 : O.money_format) || "${{amount}}";
      A && !A.includes("{{amount}}") && (A = A + "{{amount}}");
      const k = ((C = Shopline == null ? void 0 : Shopline.locale) == null ? void 0 : C.current) || "en", T = new Intl.NumberFormat(k, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      }).format(w);
      return A.replace("{{amount}}", T);
    }, g = async () => {
      var N;
      t.value = !0, document.body.classList.add("overflow-hidden"), await xn(), (N = s.value) == null || N.focus();
    }, m = () => {
      t.value = !1, document.body.classList.remove("overflow-hidden"), n.value = "", i.value = { products: [], collections: [] };
    }, D = () => {
      if (clearTimeout(r.value), n.value.length < 2) {
        i.value = { products: [], collections: [] }, o.value = !1;
        return;
      }
      o.value = !0, r.value = setTimeout(() => {
        P();
      }, 300);
    }, P = async () => {
      var N;
      try {
        const v = n.value, A = `${((N = Shopline == null ? void 0 : Shopline.routes) == null ? void 0 : N.search) || "/search"}?keyword=${encodeURIComponent(v)}`, k = await fetch(A, {
          headers: {
            Accept: "application/json",
            "X-Requested-With": "XMLHttpRequest"
          }
        });
        if (!k.ok)
          throw new Error("Search request failed");
        const y = k.headers.get("content-type");
        let T;
        if (y && y.includes("application/json"))
          T = await k.json();
        else {
          const L = await k.text(), I = new DOMParser().parseFromString(L, "text/html").querySelectorAll("product-card"), R = [];
          I.forEach((M) => {
            const J = M.getAttribute("price") || "0", ye = M.getAttribute("compare-at-price") || "0", ke = {
              id: M.getAttribute("product-id"),
              title: M.getAttribute("title"),
              url: M.getAttribute("url"),
              handle: M.getAttribute("handle"),
              price: parseFloat(J) / 100,
              // Convert cents to dollars
              compareAtPrice: parseFloat(ye) / 100,
              // Convert cents to dollars
              image: M.getAttribute("image"),
              vendor: M.getAttribute("vendor"),
              available: M.getAttribute(":available") === "true"
            };
            ke.title && ke.id && R.push(ke);
          }), T = { products: R };
        }
        const C = (T.products || T.results || []).map((L) => ({
          id: L.id,
          url: L.url || `/products/${L.handle}`,
          title: L.title,
          image: L.featured_image || L.image || L.images && L.images[0],
          price: L.price,
          // Already converted from cents to dollars if from HTML parsing
          compareAtPrice: L.compare_at_price || L.compareAtPrice,
          // Already converted
          vendor: L.vendor,
          available: L.available !== !1
        })).slice(0, 8);
        i.value = {
          products: C,
          collections: []
        }, o.value = !1;
      } catch (v) {
        console.error("Search error:", v), i.value = { products: [], collections: [] }, o.value = !1;
      }
    }, V = () => {
      n.value && (window.location.href = `${l.value}?keyword=${encodeURIComponent(
        n.value
      )}`);
    }, _ = (N) => {
      N.key === "Escape" && t.value && m();
    };
    return rt(() => {
      document.addEventListener("search-overlay:open", g), document.addEventListener("search-overlay:close", m), document.addEventListener("keydown", _);
    }), tn(() => {
      document.removeEventListener("search-overlay:open", g), document.removeEventListener("search-overlay:close", m), document.removeEventListener("keydown", _);
    }), (N, v) => (E(), Tt(Sn, { to: "body" }, [
      fe(it, { name: "search-overlay" }, {
        default: Re(() => [
          t.value ? (E(), x("div", hE, [
            fe(it, { name: "fade" }, {
              default: Re(() => [
                t.value ? (E(), x("div", {
                  key: 0,
                  class: "absolute inset-0 bg-black/60 transition-opacity duration-300 overlay-close-cursor",
                  onClick: m
                })) : H("", !0)
              ]),
              _: 1
            }),
            fe(it, {
              name: "slide-down",
              appear: ""
            }, {
              default: Re(() => {
                var w, A;
                return [
                  t.value ? (E(), x("div", mE, [
                    d("div", gE, [
                      d("div", vE, [
                        d("div", yE, [
                          d("div", bE, [
                            d("div", _E, [
                              d("div", wE, [
                                v[6] || (v[6] = d("div", { class: "absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none" }, [
                                  d("svg", {
                                    class: "w-5 h-5 text-gray-400 group-focus-within:text-gray-600 transition-colors",
                                    fill: "none",
                                    stroke: "currentColor",
                                    viewBox: "0 0 24 24"
                                  }, [
                                    d("path", {
                                      "stroke-linecap": "round",
                                      "stroke-linejoin": "round",
                                      "stroke-width": "2",
                                      d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                    })
                                  ])
                                ], -1)),
                                Le(d("input", {
                                  ref_key: "searchInput",
                                  ref: s,
                                  "onUpdate:modelValue": v[0] || (v[0] = (k) => n.value = k),
                                  type: "search",
                                  placeholder: "Search for products...",
                                  class: "w-full pl-12 pr-12 py-4 text-lg text-gray-900 placeholder-gray-400 bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:bg-white transition-all duration-200",
                                  style: Ve({
                                    borderRadius: "var(--button-radius, 16px)",
                                    "--tw-ring-color": `rgb(${c.value})`,
                                    borderColor: p.value ? `rgb(${c.value})` : ""
                                  }),
                                  onInput: D,
                                  onKeydown: [
                                    Wr(m, ["escape"]),
                                    Wr(V, ["enter"])
                                  ],
                                  onFocus: v[1] || (v[1] = (k) => p.value = !0),
                                  onBlur: v[2] || (v[2] = (k) => p.value = !1)
                                }, null, 36), [
                                  [Rs, n.value]
                                ]),
                                d("div", EE, [
                                  o.value ? (E(), x("div", xE, v[4] || (v[4] = [
                                    d("div", { class: "animate-spin rounded-full h-5 w-5 border-2 border-gray-200" }, null, -1),
                                    d("div", { class: "animate-spin rounded-full h-5 w-5 border-2 border-gray-400 border-t-transparent absolute inset-0" }, null, -1)
                                  ]))) : n.value ? (E(), x("button", {
                                    key: 1,
                                    onClick: v[3] || (v[3] = (k) => n.value = ""),
                                    class: "p-1 hover:bg-gray-200/50 rounded-lg transition-colors"
                                  }, v[5] || (v[5] = [
                                    d("svg", {
                                      class: "w-4 h-4 text-gray-400",
                                      fill: "none",
                                      stroke: "currentColor",
                                      viewBox: "0 0 24 24"
                                    }, [
                                      d("path", {
                                        "stroke-linecap": "round",
                                        "stroke-linejoin": "round",
                                        "stroke-width": "2",
                                        d: "M6 18L18 6M6 6l12 12"
                                      })
                                    ], -1)
                                  ]))) : H("", !0)
                                ])
                              ]),
                              d("button", {
                                type: "button",
                                class: "p-3 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-xl transition-all duration-200",
                                onClick: m
                              }, v[7] || (v[7] = [
                                d("span", { class: "sr-only" }, "Close search", -1),
                                d("svg", {
                                  class: "h-6 w-6",
                                  fill: "none",
                                  viewBox: "0 0 24 24",
                                  stroke: "currentColor"
                                }, [
                                  d("path", {
                                    "stroke-linecap": "round",
                                    "stroke-linejoin": "round",
                                    "stroke-width": "2",
                                    d: "M6 18L18 6M6 6l12 12"
                                  })
                                ], -1)
                              ]))
                            ]),
                            !n.value && !o.value && f.value ? (E(), x("div", NE, [
                              v[8] || (v[8] = d("p", { class: "text-sm text-gray-500 mb-3" }, "Popular searches", -1)),
                              d("div", SE, [
                                (E(!0), x(ae, null, we(u.value, (k) => (E(), x("button", {
                                  key: k,
                                  onClick: (y) => {
                                    n.value = k, V();
                                  },
                                  class: "px-4 py-2 text-sm text-gray-600 bg-gray-100/50 hover:bg-gray-200/50 rounded-full transition-colors duration-200"
                                }, Q(k), 9, kE))), 128))
                              ])
                            ])) : H("", !0)
                          ]),
                          a.value ? (E(), x("div", CE, [
                            d("div", OE, [
                              o.value ? (E(), x("div", TE, [
                                d("div", $E, [
                                  d("div", DE, [
                                    (E(), x(ae, null, we(4, (k) => d("div", {
                                      key: k,
                                      class: "flex items-start space-x-3"
                                    }, v[9] || (v[9] = [
                                      d("div", { class: "w-20 h-20 bg-gray-200 rounded-xl" }, null, -1),
                                      d("div", { class: "flex-1" }, [
                                        d("div", { class: "h-4 bg-gray-200 rounded w-3/4 mb-2" }),
                                        d("div", { class: "h-3 bg-gray-200 rounded w-1/2" })
                                      ], -1)
                                    ]))), 64))
                                  ])
                                ])
                              ])) : i.value.products && i.value.products.length > 0 ? (E(), x("div", AE, [
                                d("div", VE, [
                                  (E(!0), x(ae, null, we(i.value.products, (k) => (E(), x("a", {
                                    key: k.id,
                                    href: k.url,
                                    class: "group flex items-start space-x-4 p-4 rounded-xl hover:bg-gray-50 transition-all duration-200 hover:shadow-lg",
                                    onClick: m
                                  }, [
                                    d("div", ME, [
                                      k.image ? (E(), x("img", {
                                        key: 0,
                                        src: k.image,
                                        alt: k.title,
                                        class: "w-24 h-24 object-cover group-hover:scale-110 transition-transform duration-300"
                                      }, null, 8, PE)) : (E(), x("div", RE, v[10] || (v[10] = [
                                        d("svg", {
                                          class: "w-8 h-8 text-gray-300",
                                          fill: "none",
                                          stroke: "currentColor",
                                          viewBox: "0 0 24 24"
                                        }, [
                                          d("path", {
                                            "stroke-linecap": "round",
                                            "stroke-linejoin": "round",
                                            "stroke-width": "2",
                                            d: "M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                                          })
                                        ], -1)
                                      ])))
                                    ]),
                                    d("div", LE, [
                                      d("p", FE, Q(k.title), 1),
                                      d("div", BE, [
                                        d("p", jE, Q(h(k.price)), 1),
                                        k.compareAtPrice && k.compareAtPrice > k.price ? (E(), x("p", HE, Q(h(k.compareAtPrice)), 1)) : H("", !0)
                                      ])
                                    ])
                                  ], 8, IE))), 128))
                                ])
                              ])) : H("", !0),
                              i.value.collections && i.value.collections.length > 0 ? (E(), x("div", UE, [
                                v[12] || (v[12] = d("h3", { class: "text-xs font-medium text-gray-500 uppercase tracking-wider mb-4" }, " Collections ", -1)),
                                d("div", qE, [
                                  (E(!0), x(ae, null, we(i.value.collections, (k) => (E(), x("a", {
                                    key: k.id,
                                    href: k.url,
                                    class: "group flex items-center justify-between px-4 py-3 bg-gray-50/50 hover:bg-gray-100/50 rounded-xl transition-all duration-200",
                                    onClick: m
                                  }, [
                                    d("span", WE, Q(k.title), 1),
                                    v[11] || (v[11] = d("svg", {
                                      class: "w-4 h-4 text-gray-400 group-hover:text-gray-600 group-hover:translate-x-1 transition-all",
                                      fill: "none",
                                      stroke: "currentColor",
                                      viewBox: "0 0 24 24"
                                    }, [
                                      d("path", {
                                        "stroke-linecap": "round",
                                        "stroke-linejoin": "round",
                                        "stroke-width": "2",
                                        d: "M9 5l7 7-7 7"
                                      })
                                    ], -1))
                                  ], 8, zE))), 128))
                                ])
                              ])) : H("", !0),
                              n.value && !o.value && (!i.value.products || i.value.products.length === 0) && (!i.value.collections || i.value.collections.length === 0) ? (E(), x("div", KE, v[13] || (v[13] = [
                                d("div", { class: "w-20 h-20 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center" }, [
                                  d("svg", {
                                    class: "w-10 h-10 text-gray-400",
                                    fill: "none",
                                    viewBox: "0 0 24 24",
                                    stroke: "currentColor"
                                  }, [
                                    d("path", {
                                      "stroke-linecap": "round",
                                      "stroke-linejoin": "round",
                                      "stroke-width": "1.5",
                                      d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                    })
                                  ])
                                ], -1),
                                d("p", { class: "text-gray-900 font-medium mb-2" }, " No results found ", -1),
                                d("p", { class: "text-sm text-gray-500" }, " Try searching for something else or check your spelling ", -1)
                              ]))) : H("", !0)
                            ]),
                            n.value && (((w = i.value.products) == null ? void 0 : w.length) > 0 || ((A = i.value.collections) == null ? void 0 : A.length) > 0) ? (E(), x("div", GE, [
                              d("a", {
                                href: `${l.value}?keyword=${encodeURIComponent(
                                  n.value
                                )}`,
                                class: "inline-flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors",
                                onClick: m
                              }, [
                                We(' View all results for "' + Q(n.value) + '" ', 1),
                                v[14] || (v[14] = d("svg", {
                                  class: "w-4 h-4",
                                  fill: "none",
                                  stroke: "currentColor",
                                  viewBox: "0 0 24 24"
                                }, [
                                  d("path", {
                                    "stroke-linecap": "round",
                                    "stroke-linejoin": "round",
                                    "stroke-width": "2",
                                    d: "M17 8l4 4m0 0l-4 4m4-4H3"
                                  })
                                ], -1))
                              ], 8, JE)
                            ])) : H("", !0)
                          ])) : H("", !0)
                        ])
                      ])
                    ])
                  ])) : H("", !0)
                ];
              }),
              _: 1
            })
          ])) : H("", !0)
        ]),
        _: 1
      })
    ]));
  }
}, XE = {
  name: "ArticleCard",
  props: {
    title: {
      type: String,
      required: !0
    },
    url: {
      type: String,
      required: !0
    },
    excerpt: {
      type: String,
      default: ""
    },
    content: {
      type: String,
      default: ""
    },
    author: {
      type: String,
      default: ""
    },
    publishedAt: {
      type: String,
      default: ""
    },
    rawPublishedAt: {
      type: String,
      default: ""
    },
    image: {
      type: String,
      default: ""
    },
    imageAlt: {
      type: String,
      default: ""
    },
    tags: {
      type: [Array, String],
      default: () => []
    },
    imageRatio: {
      type: String,
      default: "landscape",
      validator: (e) => ["landscape", "square", "portrait"].includes(e)
    },
    showImage: {
      type: Boolean,
      default: !0
    },
    showAuthor: {
      type: Boolean,
      default: !1
    },
    showDate: {
      type: Boolean,
      default: !0
    },
    showTags: {
      type: Boolean,
      default: !0
    }
  },
  setup(e) {
    const t = X(!1), n = X(!1), s = G(() => {
      switch (e.imageRatio) {
        case "square":
          return "aspect-square";
        case "portrait":
          return "aspect-[3/4]";
        default:
          return "aspect-[4/3]";
      }
    }), o = G(() => ({
      borderRadius: "var(--card-radius, 8px)",
      boxShadow: t.value ? "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" : "var(--card-shadow, 0 4px 6px -1px rgba(0, 0, 0, 0.1))"
    })), i = G(() => {
      if (!e.tags) return [];
      if (typeof e.tags == "string")
        try {
          const u = JSON.parse(e.tags);
          return Array.isArray(u) ? u : [];
        } catch {
          return [];
        }
      return Array.isArray(e.tags) ? e.tags : [];
    }), r = G(() => {
      if (!e.image) return "";
      if (typeof e.image == "string" && e.image.startsWith("{"))
        try {
          const u = JSON.parse(e.image);
          return u.mediaUrl || u.url || "";
        } catch {
          return e.image;
        }
      return e.image;
    }), l = G(() => {
      var f, c;
      if (e.publishedAt && e.publishedAt.trim() && !e.publishedAt.match(/^\d+$/) && // Not just a timestamp
      !e.publishedAt.includes("T") && // Not ISO date format
      !e.publishedAt.match(/^\d{4}-\d{2}-\d{2}/) && // Not YYYY-MM-DD format
      e.publishedAt.length < 20)
        return e.publishedAt;
      const u = e.rawPublishedAt || e.publishedAt;
      if (!u) return "";
      try {
        let p;
        const h = String(u).trim();
        if (/^\d+$/.test(h)) {
          const m = parseInt(h);
          p = new Date(
            m > 1e12 ? m : m * 1e3
          );
        } else if (typeof u == "string")
          p = new Date(u);
        else
          return "";
        if (isNaN(p.getTime()) || p.getFullYear() < 1900 || p.getFullYear() > 2100)
          return console.warn(
            "Invalid or unreasonable date:",
            u,
            "parsed as:",
            p
          ), "";
        const g = typeof window < "u" && typeof window.Shopline < "u" && ((c = (f = window.Shopline) == null ? void 0 : f.locale) == null ? void 0 : c.current) || "en";
        return new Intl.DateTimeFormat(g, {
          year: "numeric",
          month: "short",
          day: "numeric"
        }).format(p);
      } catch (p) {
        return console.warn("Error formatting date:", p, u), "";
      }
    }), a = G(() => {
      if (!e.content) return "";
      const u = e.content.replace(/<[^>]*>/g, "");
      return u.length <= 150 ? u : u.substring(0, 150).trim() + "...";
    });
    return {
      imageAspectClass: s,
      processedTags: i,
      processedImage: r,
      formattedDate: l,
      truncatedContent: a,
      cardStyles: o,
      isHovered: t,
      titleHovered: n
    };
  }
}, QE = ["href"], ZE = ["src", "alt"], e2 = { class: "relative p-6 flex-1 flex flex-col z-10" }, t2 = {
  key: 0,
  class: "flex flex-wrap gap-2 mb-4"
}, n2 = ["href"], s2 = {
  key: 1,
  class: "flex items-center gap-2 text-xs text-gray-500 mb-4"
}, o2 = { key: 0 }, i2 = {
  key: 1,
  class: "text-gray-300"
}, r2 = ["datetime"], l2 = { class: "flex-1 mb-6" }, a2 = {
  key: 0,
  class: "text-gray-600 line-clamp-2"
}, c2 = ["innerHTML"], u2 = { class: "mt-auto" }, d2 = ["href"];
function f2(e, t, n, s, o, i) {
  return E(), x("article", {
    class: "group relative bg-white overflow-hidden transition-all duration-500 h-full flex flex-col border border-gray-100",
    style: Ve(s.cardStyles),
    onMouseenter: t[4] || (t[4] = (r) => s.isHovered = !0),
    onMouseleave: t[5] || (t[5] = (r) => s.isHovered = !1)
  }, [
    t[8] || (t[8] = d("div", { class: "absolute inset-0 bg-gradient-to-br from-white via-gray-50/30 to-gray-100/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" }, null, -1)),
    n.showImage && s.processedImage ? (E(), x("div", {
      key: 0,
      class: be([s.imageAspectClass, "relative overflow-hidden"])
    }, [
      d("a", {
        href: n.url,
        class: "block w-full h-full"
      }, [
        d("img", {
          src: s.processedImage,
          alt: n.imageAlt,
          class: "w-full h-full object-cover group-hover:scale-110 transition-transform duration-700",
          loading: "lazy"
        }, null, 8, ZE),
        t[6] || (t[6] = d("div", { class: "absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" }, null, -1))
      ], 8, QE)
    ], 2)) : H("", !0),
    d("div", e2, [
      n.showTags && s.processedTags.length > 0 ? (E(), x("div", t2, [
        (E(!0), x(ae, null, we(s.processedTags.slice(0, 3), (r) => (E(), x("span", {
          key: r,
          class: "inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-red-500 to-pink-500 text-white shadow-sm hover:shadow-md transition-shadow duration-300"
        }, Q(r), 1))), 128))
      ])) : H("", !0),
      d("h3", {
        class: "text-xl mb-2 transition-colors duration-300 line-clamp-2",
        onMouseenter: t[0] || (t[0] = (r) => s.titleHovered = !0),
        onMouseleave: t[1] || (t[1] = (r) => s.titleHovered = !1)
      }, [
        d("a", {
          href: n.url,
          class: "hover:underline decoration-2 underline-offset-2",
          style: Ve(s.titleHovered ? { color: "var(--color-primary, #dc2626)" } : {})
        }, Q(n.title), 13, n2)
      ], 32),
      n.showAuthor && n.author || n.showDate && s.formattedDate ? (E(), x("div", s2, [
        n.showAuthor && n.author ? (E(), x("span", o2, Q(n.author), 1)) : H("", !0),
        n.showAuthor && n.author && n.showDate && s.formattedDate ? (E(), x("span", i2, "•")) : H("", !0),
        n.showDate && s.formattedDate ? (E(), x("time", {
          key: 2,
          datetime: n.rawPublishedAt || n.publishedAt
        }, Q(s.formattedDate), 9, r2)) : H("", !0)
      ])) : H("", !0),
      d("div", l2, [
        n.excerpt ? (E(), x("p", a2, Q(n.excerpt), 1)) : n.content ? (E(), x("div", {
          key: 1,
          class: "text-gray-600 line-clamp-2",
          innerHTML: s.truncatedContent
        }, null, 8, c2)) : H("", !0)
      ]),
      d("div", u2, [
        d("a", {
          href: n.url,
          class: "inline-flex items-center gap-2 font-semibold text-sm group transition-all duration-300",
          style: {
            color: "var(--color-primary, #dc2626)"
          },
          onMouseenter: t[2] || (t[2] = (r) => r.currentTarget.style.opacity = "0.8"),
          onMouseleave: t[3] || (t[3] = (r) => r.currentTarget.style.opacity = "1")
        }, t[7] || (t[7] = [
          d("span", null, "Read Article", -1),
          d("svg", {
            class: "w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300",
            fill: "none",
            stroke: "currentColor",
            viewBox: "0 0 24 24"
          }, [
            d("path", {
              "stroke-linecap": "round",
              "stroke-linejoin": "round",
              "stroke-width": "2",
              d: "M9 5l7 7-7 7"
            })
          ], -1)
        ]), 40, d2)
      ])
    ])
  ], 36);
}
const Bf = /* @__PURE__ */ nr(XE, [["render", f2]]), p2 = {
  name: "BlogArticles",
  components: {
    ArticleCard: Bf
  },
  props: {
    blogId: {
      type: String,
      required: !0
    },
    blogHandle: {
      type: String,
      default: ""
    },
    limit: {
      type: Number,
      default: 3
    },
    currentArticleId: {
      type: String,
      default: null
    },
    columnsDesktop: {
      type: Number,
      default: 3
    },
    imageRatio: {
      type: String,
      default: "landscape"
    },
    showImage: {
      type: Boolean,
      default: !0
    },
    showAuthor: {
      type: Boolean,
      default: !1
    },
    showDate: {
      type: Boolean,
      default: !0
    },
    showTags: {
      type: Boolean,
      default: !1
    }
  },
  setup(e) {
    const t = X([]), n = X(!0), s = X(null), o = G(() => Math.min(e.limit, 6)), i = G(() => {
      switch (e.imageRatio) {
        case "square":
          return "aspect-square";
        case "portrait":
          return "aspect-[3/4]";
        default:
          return "aspect-[4/3]";
      }
    }), r = G(() => ({
      maxWidth: e.columnsDesktop === 4 ? "300px" : e.columnsDesktop === 3 ? "350px" : e.columnsDesktop === 2 ? "500px" : "100%",
      borderRadius: "var(--card-radius, 8px)",
      backgroundColor: "var(--color-loading-bg, #f5f5f5)",
      overflow: "hidden"
    })), l = G(() => ({ maxWidth: e.columnsDesktop === 4 ? "300px" : e.columnsDesktop === 3 ? "350px" : e.columnsDesktop === 2 ? "500px" : "100%" })), a = (f) => {
      var c, p;
      if (!f) return "";
      try {
        const h = new Date(f), g = ((p = (c = window.Shopline) == null ? void 0 : c.locale) == null ? void 0 : p.current) || "en";
        return new Intl.DateTimeFormat(g, {
          year: "numeric",
          month: "short",
          day: "numeric"
        }).format(h);
      } catch {
        return f;
      }
    }, u = async () => {
      n.value = !0, s.value = null;
      try {
        if (e.blogHandle === "news") {
          t.value = [
            {
              id: "1",
              title: "Sample Article 1",
              url: "/blogs/news/sample-article-1",
              excerpt: "This is a sample article excerpt for testing purposes.",
              author: "Admin",
              published_at: (/* @__PURE__ */ new Date()).toISOString(),
              image: { src: "https://via.placeholder.com/400x300" },
              tags: ["sample", "test"]
            },
            {
              id: "2",
              title: "Sample Article 2",
              url: "/blogs/news/sample-article-2",
              excerpt: "Another sample article to demonstrate the layout.",
              author: "Admin",
              published_at: new Date(Date.now() - 864e5).toISOString(),
              image: { src: "https://via.placeholder.com/400x300" },
              tags: ["demo"]
            },
            {
              id: "3",
              title: "Sample Article 3",
              url: "/blogs/news/sample-article-3",
              excerpt: "A third article to show the grid layout working properly.",
              author: "Admin",
              published_at: new Date(Date.now() - 1728e5).toISOString(),
              image: { src: "https://via.placeholder.com/400x300" },
              tags: ["example"]
            }
          ], e.currentArticleId && (t.value = t.value.filter(
            (f) => String(f.id) !== String(e.currentArticleId)
          )), t.value = t.value.slice(0, e.limit);
          return;
        }
        throw new Error("Unable to fetch blog articles. Blog API endpoint not available.");
      } catch (f) {
        console.error("Error fetching blog articles:", f), s.value = "Unable to load articles. Please ensure a valid blog is selected.";
      } finally {
        n.value = !1;
      }
    };
    return rt(() => {
      u();
    }), {
      articles: t,
      loading: n,
      error: s,
      displayLimit: o,
      imageAspectClass: i,
      skeletonStyles: r,
      cardWrapperStyles: l,
      formatDate: a
    };
  }
}, h2 = { class: "blog-articles-component" }, m2 = {
  key: 0,
  class: "flex flex-wrap justify-center gap-6"
}, g2 = { class: "p-6" }, v2 = {
  key: 0,
  class: "flex gap-2 mb-4"
}, y2 = {
  key: 1,
  class: "h-4 bg-gray-200 rounded w-1/2 mb-4"
}, b2 = {
  key: 1,
  class: "text-center py-12"
}, _2 = { class: "text-gray-600" }, w2 = {
  key: 2,
  class: "flex flex-wrap justify-center gap-6"
}, E2 = ["title", "url", "excerpt", "content", "author", "published-at", "raw-published-at", "image", "image-alt", "tags", "image-ratio", "show-image", "show-author", "show-date"], x2 = {
  key: 3,
  class: "text-center py-12"
};
function N2(e, t, n, s, o, i) {
  return E(), x("div", h2, [
    s.loading ? (E(), x("div", m2, [
      (E(!0), x(ae, null, we(s.displayLimit, (r) => (E(), x("div", {
        key: `skeleton-${r}`,
        class: "article-skeleton flex-shrink-0 w-full sm:w-auto animate-pulse",
        style: Ve(s.skeletonStyles)
      }, [
        n.showImage ? (E(), x("div", {
          key: 0,
          class: be([s.imageAspectClass, "bg-gray-200"])
        }, null, 2)) : H("", !0),
        d("div", g2, [
          n.showTags ? (E(), x("div", v2, t[0] || (t[0] = [
            d("div", { class: "h-6 w-16 bg-gray-200 rounded-full" }, null, -1),
            d("div", { class: "h-6 w-20 bg-gray-200 rounded-full" }, null, -1)
          ]))) : H("", !0),
          t[1] || (t[1] = d("div", { class: "h-6 bg-gray-200 rounded mb-2" }, null, -1)),
          t[2] || (t[2] = d("div", { class: "h-6 bg-gray-200 rounded w-3/4 mb-4" }, null, -1)),
          n.showAuthor || n.showDate ? (E(), x("div", y2)) : H("", !0),
          t[3] || (t[3] = Gs('<div class="space-y-2 mb-6" data-v-d0155edf><div class="h-4 bg-gray-200 rounded" data-v-d0155edf></div><div class="h-4 bg-gray-200 rounded" data-v-d0155edf></div><div class="h-4 bg-gray-200 rounded w-2/3" data-v-d0155edf></div></div><div class="h-6 bg-gray-200 rounded w-24" data-v-d0155edf></div>', 2))
        ])
      ], 4))), 128))
    ])) : s.error ? (E(), x("div", b2, [
      t[4] || (t[4] = d("h3", { class: "text-xl font-semibold text-gray-900 mb-2" }, "Unable to load articles", -1)),
      d("p", _2, Q(s.error), 1)
    ])) : s.articles.length > 0 ? (E(), x("div", w2, [
      (E(!0), x(ae, null, we(s.articles, (r) => {
        var l, a;
        return E(), x("div", {
          key: r.id,
          class: "article-card-wrapper flex-shrink-0 w-full sm:w-auto",
          style: Ve(s.cardWrapperStyles)
        }, [
          d("article-card", {
            title: r.title,
            url: r.url,
            excerpt: r.excerpt,
            content: r.content,
            author: r.author,
            "published-at": s.formatDate(r.published_at),
            "raw-published-at": r.published_at,
            image: ((l = r.image) == null ? void 0 : l.src) || r.featured_image,
            "image-alt": ((a = r.image) == null ? void 0 : a.alt) || r.title,
            tags: r.tags,
            "image-ratio": n.imageRatio,
            "show-image": n.showImage,
            "show-author": n.showAuthor,
            "show-date": n.showDate,
            "show-tags": !1
          }, null, 8, E2)
        ], 4);
      }), 128))
    ])) : (E(), x("div", x2, t[5] || (t[5] = [
      d("h3", { class: "text-xl font-semibold text-gray-900 mb-2" }, "No articles found", -1),
      d("p", { class: "text-gray-600" }, "This blog has no articles yet.", -1)
    ])))
  ]);
}
const S2 = /* @__PURE__ */ nr(p2, [["render", N2], ["__scopeId", "data-v-d0155edf"]]), k2 = {
  key: 0,
  class: "flex flex-col md:flex-row h-full animate-pulse"
}, C2 = {
  key: 1,
  class: "flex flex-col md:flex-row h-full"
}, O2 = { class: "w-full md:w-1/2 md:h-full" }, T2 = { class: "relative overflow-hidden bg-gray-50 h-full" }, $2 = ["src", "alt"], D2 = {
  key: 1,
  class: "absolute inset-0 flex items-center justify-center bg-gray-50"
}, A2 = { class: "w-full md:w-1/2 p-4 md:p-6 flex flex-col overflow-y-auto" }, V2 = { class: "text-lg uppercase font-medium mb-2 pr-12" }, I2 = { class: "mb-1" }, M2 = { class: "flex flex-wrap items-center gap-2" }, P2 = {
  key: 0,
  class: "text-base line-through text-gray-400",
  style: { "font-family": "'Roboto Mono', monospace" }
}, R2 = {
  key: 1,
  class: "text-xs font-medium px-2 py-0.5 rounded-full md:ml-1",
  style: { "background-color": "rgb(194, 62, 62)", color: "white" }
}, L2 = {
  key: 0,
  class: "mb-4"
}, F2 = ["product", "selected-variant-id"], B2 = { class: "mt-auto" }, j2 = ["disabled"], H2 = {
  key: 0,
  class: "uppercase"
}, U2 = {
  key: 1,
  class: "uppercase"
}, q2 = {
  key: 2,
  class: "uppercase"
}, z2 = {
  key: 3,
  class: "animate-spin w-5 h-5",
  fill: "none",
  viewBox: "0 0 24 24"
}, W2 = {
  key: 2,
  class: "flex items-center justify-center h-full p-8"
}, K2 = {
  __name: "QuickView",
  setup(e, { expose: t }) {
    const n = X(!1), s = X(!1), o = X({}), i = X(1), r = X({}), l = X(null), a = X(!1), u = X(null), f = X(!1), c = X(window.innerWidth >= 768), p = G(() => {
      var C, L;
      const O = ((L = (C = window.Shopline) == null ? void 0 : C.theme) == null ? void 0 : L.settings) || {};
      return {
        backgroundColor: O.button_primary_bg || "#000000",
        color: O.button_primary_text || "#ffffff",
        borderRadius: `${O.button_border_radius || 0}px`,
        border: "none"
      };
    }), h = G(() => {
      var C, L, j;
      return `${((j = (L = (C = window.Shopline) == null ? void 0 : C.theme) == null ? void 0 : L.settings) == null ? void 0 : j.card_border_radius) || 0}px`;
    }), g = G(() => o.value.options && o.value.options.length > 0 && o.value.options.some((O) => O.values && O.values.length > 0)), m = G(() => {
      if (!o.value.variants || o.value.variants.length === 0)
        return {
          id: o.value.id,
          price: o.value.price,
          compare_at_price: o.value.compare_at_price,
          available: !0,
          featured_image: o.value.featured_image || o.value.image || o.value.images && o.value.images[0] || null
        };
      if (!o.value.options || o.value.options.length === 0) {
        const L = o.value.variants[0];
        if (L) {
          const j = L.available !== void 0 ? L.available : L.inventory_quantity !== void 0 && L.inventory_quantity !== null ? L.inventory_quantity > 0 : !L.sold_out;
          return {
            ...L,
            available: j
          };
        }
        return null;
      }
      if (!o.value.options.every((L) => {
        const j = typeof L == "object" && L.name ? L.name : L;
        return r.value[j] !== void 0 && r.value[j] !== null;
      }))
        return null;
      const C = o.value.variants.find((L) => o.value.options.every((j, q) => {
        const I = typeof j == "object" && j.name ? j.name : j, R = `option${q + 1}`;
        return L[R] === r.value[I];
      }));
      if (C) {
        const L = C.available !== void 0 ? C.available : C.inventory_quantity !== void 0 && C.inventory_quantity !== null ? C.inventory_quantity > 0 : !C.sold_out;
        return {
          ...C,
          available: L
        };
      }
      return null;
    }), D = G(() => {
      if (!m.value) return !1;
      const O = m.value.compare_at_price || o.value.compare_at_price, C = m.value.price || o.value.price;
      return O && O > C;
    }), P = (O) => {
      var J, ye;
      let L = (window.ShoplineCurrency || {}).format || "${{amount}}";
      if (L && !L.includes("{{amount}}") && (L = L + "{{amount}}"), !O && O !== 0)
        return L.replace("{{amount}}", "0.00");
      let j = O;
      if (typeof O == "string" && (j = parseFloat(O.replace(/[^0-9.-]/g, ""))), !j || isNaN(j))
        return L.replace("{{amount}}", "0.00");
      const q = j / 100, I = ((ye = (J = window.Shopline) == null ? void 0 : J.locale) == null ? void 0 : ye.current) || "en", M = new Intl.NumberFormat(I, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
        useGrouping: !1
      }).format(q);
      return L.replace("{{amount}}", M);
    }, V = async (O) => {
      var j, q, I;
      const C = await fetch(`/api/product/products.json?handle=${O}`);
      if (!C.ok)
        throw new Error(`Product not found (status: ${C.status})`);
      const L = await C.json();
      if (L.products && Array.isArray(L.products) && L.products.length > 0) {
        const R = L.products[0];
        return R.variants && (R.variants = R.variants.map((M) => ({
          ...M,
          available: M.available !== void 0 ? M.available : M.inventory_quantity !== void 0 && M.inventory_quantity !== null ? M.inventory_quantity > 0 : !M.sold_out
        }))), {
          ...R,
          featured_image: ((j = R.featured_image) == null ? void 0 : j.src) || ((I = (q = R.images) == null ? void 0 : q[0]) == null ? void 0 : I.src) || R.image || null
        };
      }
      throw new Error("Product not found");
    }, _ = async (O) => {
      if (O) {
        n.value = !0, s.value = !0, document.body.style.overflow = "hidden";
        try {
          const C = await V(O);
          await v(C);
        } catch {
          n.value = !1, document.body.style.overflow = "";
        } finally {
          s.value = !1;
        }
      }
    }, N = async (O) => {
      if (typeof O == "string") {
        await _(O);
        return;
      }
      if (O != null && O.handle) {
        await _(O.handle);
        return;
      }
    }, v = async (O) => {
      var L, j, q;
      o.value = {
        ...O,
        options: O.options || []
      }, i.value = 1, r.value = {};
      let C = null;
      if (O.variants && O.variants.length > 0 && (C = O.variants.find((I) => I.available !== void 0 ? I.available : I.inventory_quantity !== void 0 && I.inventory_quantity !== null ? I.inventory_quantity > 0 : !I.sold_out), C || (C = O.variants[0])), C) {
        l.value = C.id;
        const I = ((L = C.featured_image) == null ? void 0 : L.src) || C.featured_image || ((j = C.image) == null ? void 0 : j.src) || C.image;
        if (I ? u.value = I : u.value = O.featured_image || O.image || O.images && O.images[0] || null, ((q = o.value.options) == null ? void 0 : q.length) > 0) {
          const R = {};
          o.value.options.forEach((M, J) => {
            const ye = typeof M == "object" && M.name ? M.name : M, ke = C[`option${J + 1}`];
            ke != null && (R[ye] = ke);
          }), r.value = R, await xn();
        }
      } else
        u.value = O.featured_image || O.image || O.images && O.images[0] || null;
    }, w = () => {
      n.value = !1, document.body.style.overflow = "";
    }, A = async (O) => {
      var j, q, I;
      let C;
      if (O && O.detail ? C = Array.isArray(O.detail) ? O.detail[0] : O.detail : C = O, !C || !C.id)
        return;
      if (l.value = C.id, o.value.options && o.value.options.length > 0) {
        const R = {};
        o.value.options.forEach((M, J) => {
          const ye = typeof M == "object" && M.name ? M.name : M, ke = `option${J + 1}`, De = C[ke];
          De != null && (R[ye] = De);
        }), r.value = { ...R };
      }
      await xn();
      const L = ((j = C.featured_image) == null ? void 0 : j.src) || C.featured_image || ((q = C.image) == null ? void 0 : q.src) || C.image || ((I = C.featured_image_v2) == null ? void 0 : I.url);
      if (L)
        u.value = L;
      else {
        const R = o.value.featured_image || o.value.image || o.value.images && o.value.images[0] || null;
        u.value = R;
      }
    }, k = async () => {
      if (!(!m.value || !m.value.id) && m.value.available && !a.value) {
        a.value = !0;
        try {
          const O = new FormData();
          O.append("id", m.value.id), O.append("quantity", i.value.toString()), (await fetch("/cart/add.js", {
            method: "POST",
            body: O
          })).ok && (window.OrionCart && window.OrionCart.openDrawer && (window.OrionCart.openDrawer(), await window.OrionCart.fetchCart()), window.dispatchEvent(
            new CustomEvent("cart:added", {
              detail: {
                product: o.value,
                quantity: i.value,
                variant: m.value
              }
            })
          ), setTimeout(() => {
            w();
          }, 500));
        } catch {
        } finally {
          setTimeout(() => {
            a.value = !1;
          }, 500);
        }
      }
    };
    t({
      openModal: N,
      openModalWithHandle: _,
      closeModal: w
    }), Lt(m, (O, C) => {
      var L, j, q;
      if (O && O !== C) {
        const I = ((L = O.featured_image) == null ? void 0 : L.src) || O.featured_image || ((j = O.image) == null ? void 0 : j.src) || O.image || ((q = O.featured_image_v2) == null ? void 0 : q.url);
        if (I && I !== u.value)
          f.value = !0, u.value = I;
        else if (!I) {
          const R = o.value.featured_image || o.value.image || o.value.images && o.value.images[0] || null;
          R !== u.value && (f.value = !0), u.value = R;
        }
      }
    });
    const y = () => {
      f.value = !1;
    }, T = () => {
      c.value = window.innerWidth >= 768;
    };
    return window.addEventListener("resize", T), tn(() => {
      window.removeEventListener("resize", T);
    }), Lt(n, (O) => {
      if (O) {
        const C = (L) => {
          L.key === "Escape" && w();
        };
        return document.addEventListener("keydown", C), () => {
          document.removeEventListener("keydown", C);
        };
      }
    }), (O, C) => (E(), Tt(Sn, { to: "body" }, [
      fe(it, { name: "backdrop" }, {
        default: Re(() => [
          n.value ? (E(), x("div", {
            key: 0,
            class: "fixed inset-0 bg-black/60 z-40 transition-opacity duration-300 overlay-close-cursor",
            onClick: w
          })) : H("", !0)
        ]),
        _: 1
      }),
      fe(it, { name: "modal" }, {
        default: Re(() => {
          var L, j, q, I, R;
          return [
            n.value ? (E(), x("div", {
              key: 0,
              class: "fixed inset-4 md:inset-auto md:bottom-4 md:right-4 bg-white shadow-2xl z-50 md:w-[800px] md:h-[450px] md:max-w-[calc(100vw-2rem)] md:max-h-[450px] overflow-hidden",
              style: Ve({ borderRadius: h.value }),
              onClick: C[0] || (C[0] = It(() => {
              }, ["stop"]))
            }, [
              d("button", {
                onClick: w,
                class: "absolute top-3 right-3 w-10 h-10 flex items-center justify-center rounded-full bg-black hover:bg-gray-800 transition-colors z-10 shadow-lg"
              }, C[1] || (C[1] = [
                d("svg", {
                  class: "w-5 h-5 text-white",
                  fill: "none",
                  stroke: "currentColor",
                  viewBox: "0 0 24 24"
                }, [
                  d("path", {
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    "stroke-width": "2",
                    d: "M6 18L18 6M6 6l12 12"
                  })
                ], -1)
              ])),
              s.value ? (E(), x("div", k2, C[2] || (C[2] = [
                d("div", { class: "w-full md:w-1/2 h-48 md:h-full" }, [
                  d("div", { class: "bg-gray-50 h-full rounded-none" })
                ], -1),
                d("div", { class: "w-full md:w-1/2 p-4 md:p-6 flex flex-col gap-4" }, [
                  d("div", { class: "pr-12" }, [
                    d("div", { class: "h-6 bg-gray-200 rounded w-3/4" })
                  ]),
                  d("div", { class: "flex items-baseline gap-2" }, [
                    d("div", { class: "h-5 bg-gray-200 rounded w-20" }),
                    d("div", { class: "h-6 bg-gray-200 rounded w-24" })
                  ]),
                  d("div", { class: "space-y-4 mb-6" }, [
                    d("div", null, [
                      d("div", { class: "h-4 bg-gray-200 rounded w-16 mb-2" }),
                      d("div", { class: "flex gap-2" }, [
                        d("div", { class: "w-12 h-12 bg-gray-200 rounded-lg" }),
                        d("div", { class: "w-12 h-12 bg-gray-200 rounded-lg" }),
                        d("div", { class: "w-12 h-12 bg-gray-200 rounded-lg" }),
                        d("div", { class: "w-12 h-12 bg-gray-200 rounded-lg" }),
                        d("div", { class: "w-12 h-12 bg-gray-200 rounded-lg" })
                      ])
                    ]),
                    d("div", null, [
                      d("div", { class: "h-4 bg-gray-200 rounded w-20 mb-2" }),
                      d("div", { class: "flex gap-2" }, [
                        d("div", { class: "h-10 bg-gray-200 rounded w-24" }),
                        d("div", { class: "h-10 bg-gray-200 rounded w-20" })
                      ])
                    ])
                  ]),
                  d("div", { class: "mt-auto" }, [
                    d("div", { class: "w-full h-12 bg-gray-200 rounded" })
                  ])
                ], -1)
              ]))) : o.value && o.value.title ? (E(), x("div", C2, [
                d("div", O2, [
                  d("div", T2, [
                    d("div", {
                      class: "relative md:h-full",
                      style: Ve({ paddingBottom: c.value ? "0" : "100%" })
                    }, [
                      u.value ? (E(), x("img", {
                        key: u.value,
                        src: u.value,
                        alt: o.value.title,
                        class: be(["absolute inset-0 w-full h-full object-cover", { "opacity-0": f.value }]),
                        onLoad: y
                      }, null, 42, $2)) : H("", !0),
                      f.value || !u.value ? (E(), x("div", D2, C[3] || (C[3] = [
                        d("svg", {
                          class: "w-12 h-12 text-gray-300 animate-pulse",
                          fill: "none",
                          stroke: "currentColor",
                          viewBox: "0 0 24 24"
                        }, [
                          d("path", {
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round",
                            "stroke-width": "1.5",
                            d: "M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                          })
                        ], -1)
                      ]))) : H("", !0)
                    ], 4)
                  ])
                ]),
                d("div", A2, [
                  d("h1", V2, Q(o.value.title), 1),
                  d("div", I2, [
                    d("div", M2, [
                      D.value ? (E(), x("span", P2, Q(P(
                        ((L = m.value) == null ? void 0 : L.compare_at_price) || o.value.compare_at_price
                      )), 1)) : H("", !0),
                      d("span", {
                        class: "text-base",
                        style: Ve({
                          fontFamily: "'Roboto Mono', monospace",
                          color: D.value ? "rgb(194, 62, 62)" : "#000"
                        })
                      }, Q(P(((j = m.value) == null ? void 0 : j.price) || o.value.price)), 5),
                      D.value ? (E(), x("span", R2, " Save " + Q(P(
                        D.value ? (((q = m.value) == null ? void 0 : q.compare_at_price) || o.value.compare_at_price) - (((I = m.value) == null ? void 0 : I.price) || o.value.price) : 0
                      )), 1)) : H("", !0)
                    ])
                  ]),
                  g.value ? (E(), x("div", L2, [
                    d("product-variant-picker", {
                      product: o.value,
                      "selected-variant-id": l.value,
                      onVariantChange: A
                    }, null, 40, F2)
                  ])) : H("", !0),
                  d("div", B2, [
                    d("button", {
                      onClick: k,
                      disabled: a.value || !m.value || !m.value.available,
                      class: "w-full py-3 px-6 text-base font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2",
                      style: Ve(p.value)
                    }, [
                      m.value ? m.value.available ? a.value ? (E(), x("svg", z2, C[4] || (C[4] = [
                        d("circle", {
                          class: "opacity-25",
                          cx: "12",
                          cy: "12",
                          r: "10",
                          stroke: "currentColor",
                          "stroke-width": "4"
                        }, null, -1),
                        d("path", {
                          class: "opacity-75",
                          fill: "currentColor",
                          d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        }, null, -1)
                      ]))) : (E(), x("span", q2, "Add to Cart")) : (E(), x("span", U2, "Out of Stock")) : (E(), x("span", H2, "Select Options"))
                    ], 12, j2)
                  ])
                ])
              ])) : !s.value && !((R = o.value) != null && R.title) ? (E(), x("div", W2, C[5] || (C[5] = [
                d("div", { class: "text-center" }, [
                  d("div", { class: "text-gray-400 mb-4" }, [
                    d("svg", {
                      class: "w-16 h-16 mx-auto",
                      fill: "none",
                      stroke: "currentColor",
                      viewBox: "0 0 24 24"
                    }, [
                      d("path", {
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round",
                        "stroke-width": "1.5",
                        d: "M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      })
                    ])
                  ]),
                  d("h3", { class: "text-lg font-medium text-gray-900 mb-2" }, " Unable to load product "),
                  d("p", { class: "text-sm text-gray-600" }, "Please try again later")
                ], -1)
              ]))) : H("", !0)
            ], 4)) : H("", !0)
          ];
        }),
        _: 1
      })
    ]));
  }
};
({
  ...wn,
  props: {
    ...wn.props
  }
});
const G2 = /* @__PURE__ */ Ut(Pf), J2 = /* @__PURE__ */ Ut(Eb), Y2 = /* @__PURE__ */ Ut(jb, {
  shadowRoot: !1
}), X2 = /* @__PURE__ */ Ut(If), Q2 = /* @__PURE__ */ Ut(Rf), Z2 = /* @__PURE__ */ Ut(L_), ex = /* @__PURE__ */ Ut(Iw), tx = /* @__PURE__ */ Ut(Mf), nx = /* @__PURE__ */ Ut(pE);
customElements.define("cart-drawer", G2);
customElements.define("mobile-menu", J2);
customElements.define("product-variant-picker", Y2);
customElements.define("quantity-selector", X2);
customElements.define("collection-filters", Q2);
customElements.define("collection-grid", Z2);
customElements.define("product-gallery", ex);
customElements.define("cart-item", tx);
customElements.define("cart-summary", nx);
function Ts(e = document) {
  if (e.querySelectorAll(".cart-drawer-mount").forEach((c) => {
    if (c._vueApp) return;
    const p = Nt(Pf);
    c._vueApp = p, p.mount(c);
  }), e.querySelectorAll("product-card").forEach((c) => {
    if (c._vueApp) return;
    let p = {};
    const h = c.getAttribute(":product");
    if (h)
      try {
        p.product = JSON.parse(h);
      } catch (m) {
        console.error("Failed to parse product JSON:", m);
      }
    p.product || (p = {
      productId: c.getAttribute("product-id"),
      variantId: c.getAttribute("variant-id"),
      title: c.getAttribute("title"),
      handle: c.getAttribute("handle"),
      url: c.getAttribute("url"),
      vendor: c.getAttribute("vendor"),
      price: c.getAttribute("price"),
      compareAtPrice: c.getAttribute("compare-at-price"),
      image: c.getAttribute("image"),
      available: c.getAttribute(":available") === "true"
    });
    const g = Nt(v1, p);
    c._vueApp = g, g.mount(c);
  }), e.querySelectorAll("collection-sort").forEach((c) => {
    if (c._vueApp) return;
    const p = {
      collectionHandle: c.getAttribute("collection-handle"),
      currentSort: c.getAttribute("current-sort") || "manual"
    }, h = Nt(B_, p);
    c._vueApp = h, h.mount(c);
  }), e.querySelectorAll("orion-button").forEach((c) => {
    if (c._vueApp) return;
    const p = {
      variant: c.getAttribute("variant") || "primary",
      size: c.getAttribute("size") || "medium",
      fullWidth: c.hasAttribute("full-width"),
      href: c.getAttribute("href"),
      type: c.getAttribute("type") || "button",
      disabled: c.hasAttribute("disabled"),
      loading: c.hasAttribute("loading"),
      rounded: c.getAttribute("rounded") || "default"
    }, h = Nt(
      {
        components: { Button: wn },
        template: `<Button v-bind="$attrs">${c.innerHTML}</Button>`
      },
      p
    );
    c._vueApp = h, h.mount(c);
  }), e.querySelectorAll(
    "collection-filter-drawer"
  ).forEach((c) => {
    if (c._vueApp) return;
    const p = {
      collectionHandle: c.getAttribute("collection-handle"),
      products: JSON.parse(c.getAttribute(":products") || "[]")
    }, h = Nt(dw, p);
    c._vueApp = h, h.mount(c);
  }), e.querySelectorAll(
    "collection-filter-sidebar"
  ).forEach((c) => {
    if (c._vueApp) return;
    const p = {
      collectionHandle: c.getAttribute("collection-handle"),
      products: JSON.parse(c.getAttribute(":products") || "[]"),
      showSort: c.getAttribute(":show-sort") === "true"
    }, h = Nt(Rf, p);
    c._vueApp = h, h.mount(c);
  }), e.querySelectorAll("article-card").forEach((c) => {
    if (c._vueApp) return;
    const p = {
      title: c.getAttribute("title"),
      url: c.getAttribute("url"),
      excerpt: c.getAttribute("excerpt"),
      content: c.getAttribute("content"),
      author: c.getAttribute("author"),
      publishedAt: c.getAttribute("published-at"),
      rawPublishedAt: c.getAttribute("raw-published-at"),
      image: c.getAttribute("image"),
      imageAlt: c.getAttribute("image-alt"),
      tags: JSON.parse(c.getAttribute("tags") || "[]"),
      imageRatio: c.getAttribute("image-ratio") || "landscape",
      showImage: c.getAttribute("show-image") === "true",
      showAuthor: c.getAttribute("show-author") === "true",
      showDate: c.getAttribute("show-date") === "true",
      showTags: c.getAttribute("show-tags") === "true"
    }, h = Nt(Bf, p);
    c._vueApp = h, h.mount(c);
  }), e.querySelectorAll("blog-articles").forEach((c) => {
    if (c._vueApp) return;
    const p = {
      blogId: c.getAttribute("blog-id"),
      blogHandle: c.getAttribute("blog-handle") || "",
      limit: parseInt(c.getAttribute("limit")) || 3,
      currentArticleId: c.getAttribute("current-article-id"),
      columnsDesktop: parseInt(c.getAttribute("columns-desktop")) || 3,
      imageRatio: c.getAttribute("image-ratio") || "landscape",
      showImage: c.getAttribute("show-image") !== "false",
      showAuthor: c.getAttribute("show-author") === "true",
      showDate: c.getAttribute("show-date") !== "false",
      showTags: c.getAttribute("show-tags") === "true"
    }, h = Nt(S2, p);
    c._vueApp = h, h.mount(c);
  }), e.querySelectorAll("search-overlay").forEach((c) => {
    if (c._vueApp) return;
    const p = Nt(YE);
    c._vueApp = p, p.mount(c);
  }), e.querySelectorAll("reviews-summary").forEach((c) => {
    if (c._vueApp) return;
    const p = {
      productId: c.getAttribute("product-id")
    }, h = Nt(jw, p);
    c._vueApp = h, h.mount(c);
  }), e === document && !document.querySelector("#quick-view-mount")) {
    const c = document.createElement("div");
    c.id = "quick-view-mount", document.body.appendChild(c);
    const h = Nt(K2).mount(c);
    window.QuickViewModal.setInstance(h);
  }
  e === document && document.querySelectorAll(".header-group").forEach((p) => {
    const h = p.querySelector(".site-header");
    if (!h) return;
    const g = p.dataset.transparent === "true", m = document.body.classList.contains("template-index");
    if (g && m && window.scrollY === 0 && (h.style.backgroundColor = "transparent", h.style.borderBottomColor = "transparent", h.classList.add("transparent-not-scrolled")), p.dataset.sticky === "true" && !h._stickyInitialized) {
      let _ = function() {
        const N = window.scrollY, v = p.dataset.hideOnScroll === "true", w = p.dataset.transparent === "true", A = document.body.classList.contains("template-index");
        N > 0 ? p.classList.add("announcement-hidden") : p.classList.remove("announcement-hidden"), N > 0 ? (h.classList.add("scrolled"), h.classList.remove("transparent-not-scrolled")) : (h.classList.remove("scrolled"), w && A && h.classList.add("transparent-not-scrolled")), w && A && (N <= 50 ? (h.style.backgroundColor = "transparent", h.style.borderBottomColor = "transparent") : (h.style.backgroundColor = "", h.style.borderBottomColor = "")), v && (N > 300 && N > P ? (h.classList.add("hide-on-scroll"), h.classList.remove("show-on-scroll")) : (h.classList.remove("hide-on-scroll"), h.classList.add("show-on-scroll"))), P = N, V = !1;
      };
      var D = _;
      h._stickyInitialized = !0;
      let P = 0, V = !1;
      window.addEventListener("scroll", function() {
        V || (window.requestAnimationFrame(_), V = !0);
      }), _();
    }
  });
}
window.getImageUrl = function(e, t = {}) {
  if (!e || e === "null" || e === "undefined")
    return "";
  const n = {
    // Product images
    "product-card": { width: 800 },
    // 2x for 400px display on retina
    "product-card-small": { width: 600 },
    // 2x for 300px display
    "product-thumbnail": { width: 400 },
    // For thumbnails and small images
    "product-gallery": { width: 1200 },
    // For main product gallery
    "product-gallery-thumbnail": { width: 300 },
    // Gallery thumbnails
    // Cart images
    "cart-item": { width: 300 },
    // Cart drawer/page items
    "cart-item-small": { width: 150 },
    // Mini cart items
    // Hero/banner images
    "hero-mobile": { width: 768 },
    // Mobile hero images
    "hero-desktop": { width: 1920 },
    // Desktop hero images
    banner: { width: 1200 },
    // General banner images
    // Blog/article images
    "article-card": { width: 600 },
    // Blog article cards
    "article-hero": { width: 1200 },
    // Article hero images
    // Collection images
    "collection-card": { width: 800 },
    // Collection listing cards
    // General sizes
    small: { width: 300 },
    medium: { width: 600 },
    large: { width: 1200 },
    xlarge: { width: 1920 }
  };
  t.preset && n[t.preset] && (t = { ...n[t.preset], ...t });
  const { width: s, height: o, quality: i = 80, crop: r = null } = t;
  if (e.includes("myshopline.com") || e.includes("shopline")) {
    const l = new URL(e), a = l.pathname, u = a.lastIndexOf("/"), f = a.substring(0, u + 1), p = a.substring(u + 1).replace(/_\d+x\d*(?=\.[^.]*$)/, "").replace(/_\d+x(?=\.[^.]*$)/, ""), h = p.lastIndexOf("."), g = p.substring(0, h), m = p.substring(h);
    let D;
    s && o ? D = `${g}_${s}x${o}${m}` : s ? D = `${g}_${s}x${m}` : D = p;
    const P = `${l.protocol}//${l.host}${f}${D}`, V = new URLSearchParams(l.search);
    i !== 80 && V.set("q", i), r && V.set("crop", r);
    const _ = V.toString();
    return _ ? `${P}?${_}` : P;
  }
  return e;
};
window.getImageSrcSet = function(e, t = [400, 600, 800, 1e3, 1200]) {
  return !e || e === "null" || e === "undefined" ? "" : t.map((n) => `${window.getImageUrl(e, { width: n })} ${n}w`).join(", ");
};
window.createResponsiveImageTag = function(e, t = {}) {
  const {
    alt: n = "",
    className: s = "",
    sizes: o = "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
    widths: i = [400, 600, 800, 1e3, 1200],
    loading: r = "lazy"
  } = t;
  if (!e || e === "null" || e === "undefined")
    return "";
  const l = window.getImageSrcSet(e, i);
  return `<img 
    src="${window.getImageUrl(e, {
    width: i[Math.floor(i.length / 2)]
  })}"
    srcset="${l}"
    sizes="${o}"
    alt="${n}"
    class="${s}"
    loading="${r}"
  >`;
};
if (!window.QuickViewModal) {
  let e = null;
  window.QuickViewModal = {
    open(t) {
      e && e.openModal && e.openModal(t);
    },
    openWithHandle(t) {
      e && e.openModalWithHandle && e.openModalWithHandle(t);
    },
    close() {
      e && e.closeModal && e.closeModal();
    },
    setInstance(t) {
      e = t;
    }
  };
}
window.OrionCart || (window.OrionCart = {
  state: {
    isOpen: !1,
    items: [],
    totalPrice: 0,
    itemCount: 0
  },
  async fetchCart() {
    var e;
    try {
      const n = await (await fetch(
        (((e = Shopline == null ? void 0 : Shopline.routes) == null ? void 0 : e.cart) || "/cart") + ".js"
      )).json();
      return this.state.items = n.items, this.state.totalPrice = n.total_price, this.state.itemCount = n.item_count, document.dispatchEvent(
        new CustomEvent("cart:updated", { detail: n })
      ), n;
    } catch (t) {
      console.error("Failed to fetch cart:", t);
    }
  },
  async addItem(e) {
    var t;
    try {
      let n;
      e instanceof FormData ? n = await fetch(((t = Shopline == null ? void 0 : Shopline.routes) == null ? void 0 : t.cart_add) || "/cart/add", {
        method: "POST",
        body: e
      }) : n = await fetch("/api/carts/ajax-cart/add.js", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify(e)
      });
      const s = await n.json();
      return await this.fetchCart(), this.openDrawer(), s;
    } catch (n) {
      console.error("Failed to add item to cart:", n);
    }
  },
  async updateItem(e, t, n = null) {
    try {
      const s = {
        quantity: t
      };
      n !== null ? s.line = n : s.id = e;
      const i = await (await fetch("/api/carts/ajax-cart/change.js", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify(s)
      })).json();
      return await this.fetchCart(), i;
    } catch (s) {
      console.error("Failed to update cart:", s);
    }
  },
  async removeItem(e, t = null) {
    return this.updateItem(e, 0, t);
  },
  openDrawer() {
    this.state.isOpen = !0, document.dispatchEvent(new CustomEvent("cart:open"));
  },
  closeDrawer() {
    this.state.isOpen = !1, document.dispatchEvent(new CustomEvent("cart:close"));
  }
}, window.OrionCart.fetchCart(), window.OrionWishlist = {
  items: [],
  // Array of product IDs only
  productCache: {},
  // Cache for fetched product data
  currentNotification: null,
  // Track current notification
  notificationTimeout: null,
  // Track notification timeout
  // Initialize wishlist from localStorage
  init() {
    try {
      const e = localStorage.getItem("orion_wishlist");
      if (e) {
        const t = JSON.parse(e);
        t.length > 0 && typeof t[0] == "object" ? (this.items = t.map((n) => n.id || n.handle), this.save()) : this.items = t;
      }
    } catch (e) {
      console.error("Error loading wishlist:", e);
    }
  },
  // Save wishlist to localStorage (only IDs)
  save() {
    try {
      localStorage.setItem("orion_wishlist", JSON.stringify(this.items));
    } catch (e) {
      console.error("Error saving wishlist:", e);
    }
  },
  // Check if product is wishlisted
  isWishlisted(e) {
    return this.items.includes(e);
  },
  // Fetch fresh product data from Shopline API
  async fetchProduct(e) {
    try {
      if (this.productCache[e])
        return this.productCache[e];
      const t = await fetch(`/api/product/products.json?handle=${e}`);
      if (t.ok) {
        const n = await t.json();
        if (n.products && n.products.length > 0) {
          const s = n.products[0];
          return this.productCache[e] = s, s;
        }
      }
    } catch (t) {
      console.error(`Error fetching product ${e}:`, t);
    }
    return null;
  },
  // Get all wishlist items with fresh product data
  async getItems() {
    const e = [];
    for (const t of this.items) {
      const n = await this.fetchProduct(t);
      n && e.push(n);
    }
    return e;
  },
  // Add product to wishlist (store only handle)
  add(e) {
    const t = e.handle || e.id;
    this.isWishlisted(t) || (this.items.push(t), this.save(), this.productCache[t] = e, this.showNotification("Added to wishlist"));
  },
  // Remove product from wishlist
  remove(e) {
    const t = this.items.findIndex((n) => n === e);
    t > -1 && (this.items.splice(t, 1), this.save(), delete this.productCache[e], this.showNotification("Removed from wishlist"));
  },
  // Toggle product in wishlist
  toggle(e) {
    const t = e.handle || e.id;
    return this.isWishlisted(t) ? (this.remove(t), !1) : (this.add(e), !0);
  },
  // Get wishlist count
  get count() {
    return this.items.length;
  },
  // Clear all items
  clear() {
    this.items = [], this.save();
  },
  // Show notification (simple implementation)
  showNotification(e) {
    var o, i, r, l, a, u;
    if (this.currentNotification) {
      this.notificationTimeout && clearTimeout(this.notificationTimeout);
      const f = this.currentNotification;
      f.style.transform = "translateX(-50%) translateY(20px)", f.style.opacity = "0", setTimeout(() => {
        f.parentNode && f.remove();
      }, 300), this.currentNotification = null, this.notificationTimeout = null;
    }
    const t = ((r = (i = (o = window.Shopline) == null ? void 0 : o.theme) == null ? void 0 : i.settings) == null ? void 0 : r.button_border_radius) || 6, n = ((u = (a = (l = window.Shopline) == null ? void 0 : l.theme) == null ? void 0 : a.settings) == null ? void 0 : u.button_text_uppercase) || !1, s = document.createElement("div");
    s.textContent = e, s.style.cssText = `
        position: fixed;
        bottom: 20px;
        left: 50%;
        transform: translateX(-50%) translateY(20px);
        background: #333;
        color: white;
        padding: 12px 24px;
        border-radius: ${t}px;
        border: 2px solid white;
        z-index: 10000;
        font-size: 14px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        opacity: 0;
        transition: all 0.3s ease;
        white-space: nowrap;
        max-width: 90vw;
        overflow: hidden;
        text-overflow: ellipsis;
        text-transform: ${n ? "uppercase" : "none"};
        letter-spacing: ${n ? "0.05em" : "normal"};
        font-weight: 600;
      `, document.body.appendChild(s), this.currentNotification = s, setTimeout(() => {
      s.style.transform = "translateX(-50%) translateY(0)", s.style.opacity = "1";
    }, 10), this.notificationTimeout = setTimeout(() => {
      s.style.transform = "translateX(-50%) translateY(20px)", s.style.opacity = "0", setTimeout(() => {
        s.parentNode && s.remove(), this.currentNotification === s && (this.currentNotification = null, this.notificationTimeout = null);
      }, 300);
    }, 2e3);
  }
}, window.OrionWishlist.init(), document.addEventListener("cart:updated", (e) => {
  const t = e.detail.item_count;
  document.querySelectorAll(".cart-count").forEach((s) => {
    t > 0 ? (s.textContent = t, s.style.opacity = "1") : s.style.opacity = "0";
  });
}));
window.mountVueComponents = Ts;
document.addEventListener("DOMContentLoaded", () => {
  Ts();
});
document.readyState !== "loading" && Ts();
var Tc;
((Tc = window.Shopline) != null && Tc.designMode || window.location.href.includes("theme_preview_mode")) && (document.addEventListener("shopline:section:load", (e) => {
  const t = document.querySelector(`[data-section-id="${e.detail.sectionId}"]`) || document;
  Ts(t);
}), document.addEventListener("shopline:section:reorder", () => {
  Ts();
}), document.addEventListener("shopline:block:select", (e) => {
  const t = document.querySelector(
    `[data-block-id="${e.detail.blockId}"]`
  );
  t && Ts(t);
}));
