(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function n(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(r){if(r.ep)return;r.ep=!0;const o=n(r);fetch(r.href,o)}})();function ah(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const Pt={},Ko=[],gi=()=>{},fv=()=>!1,Pu=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),lh=t=>t.startsWith("onUpdate:"),Kt=Object.assign,uh=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},_x=Object.prototype.hasOwnProperty,xt=(t,e)=>_x.call(t,e),et=Array.isArray,Zo=t=>Ra(t)==="[object Map]",hv=t=>Ra(t)==="[object Set]",mp=t=>Ra(t)==="[object Date]",rt=t=>typeof t=="function",Ot=t=>typeof t=="string",Zn=t=>typeof t=="symbol",yt=t=>t!==null&&typeof t=="object",pv=t=>(yt(t)||rt(t))&&rt(t.then)&&rt(t.catch),mv=Object.prototype.toString,Ra=t=>mv.call(t),yx=t=>Ra(t).slice(8,-1),gv=t=>Ra(t)==="[object Object]",Nu=t=>Ot(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Ws=ah(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Du=t=>{const e=Object.create(null);return(n=>e[n]||(e[n]=t(n)))},xx=/-\w/g,Bn=Du(t=>t.replace(xx,e=>e.slice(1).toUpperCase())),bx=/\B([A-Z])/g,Hr=Du(t=>t.replace(bx,"-$1").toLowerCase()),Lu=Du(t=>t.charAt(0).toUpperCase()+t.slice(1)),pc=Du(t=>t?`on${Lu(t)}`:""),qi=(t,e)=>!Object.is(t,e),mc=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},vv=(t,e,n,i=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:i,value:n})},Sx=t=>{const e=parseFloat(t);return isNaN(e)?t:e},Mx=t=>{const e=Ot(t)?Number(t):NaN;return isNaN(e)?t:e};let gp;const Uu=()=>gp||(gp=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function nt(t){if(et(t)){const e={};for(let n=0;n<t.length;n++){const i=t[n],r=Ot(i)?Cx(i):nt(i);if(r)for(const o in r)e[o]=r[o]}return e}else if(Ot(t)||yt(t))return t}const wx=/;(?![^(]*\))/g,Ex=/:([^]+)/,Tx=/\/\*[^]*?\*\//g;function Cx(t){const e={};return t.replace(Tx,"").split(wx).forEach(n=>{if(n){const i=n.split(Ex);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function lt(t){let e="";if(Ot(t))e=t;else if(et(t))for(let n=0;n<t.length;n++){const i=lt(t[n]);i&&(e+=i+" ")}else if(yt(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}function Ax(t){if(!t)return null;let{class:e,style:n}=t;return e&&!Ot(e)&&(t.class=lt(e)),n&&(t.style=nt(n)),t}const Rx="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Ix=ah(Rx);function _v(t){return!!t||t===""}function Px(t,e){if(t.length!==e.length)return!1;let n=!0;for(let i=0;n&&i<t.length;i++)n=ch(t[i],e[i]);return n}function ch(t,e){if(t===e)return!0;let n=mp(t),i=mp(e);if(n||i)return n&&i?t.getTime()===e.getTime():!1;if(n=Zn(t),i=Zn(e),n||i)return t===e;if(n=et(t),i=et(e),n||i)return n&&i?Px(t,e):!1;if(n=yt(t),i=yt(e),n||i){if(!n||!i)return!1;const r=Object.keys(t).length,o=Object.keys(e).length;if(r!==o)return!1;for(const s in t){const a=t.hasOwnProperty(s),l=e.hasOwnProperty(s);if(a&&!l||!a&&l||!ch(t[s],e[s]))return!1}}return String(t)===String(e)}const yv=t=>!!(t&&t.__v_isRef===!0),Re=t=>Ot(t)?t:t==null?"":et(t)||yt(t)&&(t.toString===mv||!rt(t.toString))?yv(t)?Re(t.value):JSON.stringify(t,xv,2):String(t),xv=(t,e)=>yv(e)?xv(t,e.value):Zo(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[i,r],o)=>(n[gc(i,o)+" =>"]=r,n),{})}:hv(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>gc(n))}:Zn(e)?gc(e):yt(e)&&!et(e)&&!gv(e)?String(e):e,gc=(t,e="")=>{var n;return Zn(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};let fn;class bv{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.__v_skip=!0,this.parent=fn,!e&&fn&&(this.index=(fn.scopes||(fn.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=fn;try{return fn=this,e()}finally{fn=n}}}on(){++this._on===1&&(this.prevScope=fn,fn=this)}off(){this._on>0&&--this._on===0&&(fn=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let n,i;for(n=0,i=this.effects.length;n<i;n++)this.effects[n].stop();for(this.effects.length=0,n=0,i=this.cleanups.length;n<i;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,i=this.scopes.length;n<i;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function Fu(t){return new bv(t)}function Ou(){return fn}function Xs(t,e=!1){fn&&fn.cleanups.push(t)}let Ut;const vc=new WeakSet;class Sv{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,fn&&fn.active&&fn.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,vc.has(this)&&(vc.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||wv(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,vp(this),Ev(this);const e=Ut,n=Kn;Ut=this,Kn=!0;try{return this.fn()}finally{Tv(this),Ut=e,Kn=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)hh(e);this.deps=this.depsTail=void 0,vp(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?vc.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Ed(this)&&this.run()}get dirty(){return Ed(this)}}let Mv=0,Ys,qs;function wv(t,e=!1){if(t.flags|=8,e){t.next=qs,qs=t;return}t.next=Ys,Ys=t}function dh(){Mv++}function fh(){if(--Mv>0)return;if(qs){let e=qs;for(qs=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;Ys;){let e=Ys;for(Ys=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){t||(t=i)}e=n}}if(t)throw t}function Ev(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Tv(t){let e,n=t.depsTail,i=n;for(;i;){const r=i.prevDep;i.version===-1?(i===n&&(n=r),hh(i),Nx(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=r}t.deps=e,t.depsTail=n}function Ed(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Cv(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function Cv(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===ia)||(t.globalVersion=ia,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!Ed(t))))return;t.flags|=2;const e=t.dep,n=Ut,i=Kn;Ut=t,Kn=!0;try{Ev(t);const r=t.fn(t._value);(e.version===0||qi(r,t._value))&&(t.flags|=128,t._value=r,e.version++)}catch(r){throw e.version++,r}finally{Ut=n,Kn=i,Tv(t),t.flags&=-3}}function hh(t,e=!1){const{dep:n,prevSub:i,nextSub:r}=t;if(i&&(i.nextSub=r,t.prevSub=void 0),r&&(r.prevSub=i,t.nextSub=void 0),n.subs===t&&(n.subs=i,!i&&n.computed)){n.computed.flags&=-5;for(let o=n.computed.deps;o;o=o.nextDep)hh(o,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function Nx(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let Kn=!0;const Av=[];function Qi(){Av.push(Kn),Kn=!1}function er(){const t=Av.pop();Kn=t===void 0?!0:t}function vp(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=Ut;Ut=void 0;try{e()}finally{Ut=n}}}let ia=0;class Dx{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Bu{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!Ut||!Kn||Ut===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==Ut)n=this.activeLink=new Dx(Ut,this),Ut.deps?(n.prevDep=Ut.depsTail,Ut.depsTail.nextDep=n,Ut.depsTail=n):Ut.deps=Ut.depsTail=n,Rv(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const i=n.nextDep;i.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=i),n.prevDep=Ut.depsTail,n.nextDep=void 0,Ut.depsTail.nextDep=n,Ut.depsTail=n,Ut.deps===n&&(Ut.deps=i)}return n}trigger(e){this.version++,ia++,this.notify(e)}notify(e){dh();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{fh()}}}function Rv(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)Rv(i)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const Ql=new WeakMap,mo=Symbol(""),Td=Symbol(""),ra=Symbol("");function hn(t,e,n){if(Kn&&Ut){let i=Ql.get(t);i||Ql.set(t,i=new Map);let r=i.get(n);r||(i.set(n,r=new Bu),r.map=i,r.key=n),r.track()}}function ki(t,e,n,i,r,o){const s=Ql.get(t);if(!s){ia++;return}const a=l=>{l&&l.trigger()};if(dh(),e==="clear")s.forEach(a);else{const l=et(t),u=l&&Nu(n);if(l&&n==="length"){const c=Number(i);s.forEach((f,d)=>{(d==="length"||d===ra||!Zn(d)&&d>=c)&&a(f)})}else switch((n!==void 0||s.has(void 0))&&a(s.get(n)),u&&a(s.get(ra)),e){case"add":l?u&&a(s.get("length")):(a(s.get(mo)),Zo(t)&&a(s.get(Td)));break;case"delete":l||(a(s.get(mo)),Zo(t)&&a(s.get(Td)));break;case"set":Zo(t)&&a(s.get(mo));break}}fh()}function Lx(t,e){const n=Ql.get(t);return n&&n.get(e)}function Io(t){const e=mt(t);return e===t?e:(hn(e,"iterate",ra),In(t)?e:e.map(jn))}function ku(t){return hn(t=mt(t),"iterate",ra),t}function Cr(t,e){return tr(t)?ss(Ki(t)?jn(e):e):jn(e)}const Ux={__proto__:null,[Symbol.iterator](){return _c(this,Symbol.iterator,t=>Cr(this,t))},concat(...t){return Io(this).concat(...t.map(e=>et(e)?Io(e):e))},entries(){return _c(this,"entries",t=>(t[1]=Cr(this,t[1]),t))},every(t,e){return Ai(this,"every",t,e,void 0,arguments)},filter(t,e){return Ai(this,"filter",t,e,n=>n.map(i=>Cr(this,i)),arguments)},find(t,e){return Ai(this,"find",t,e,n=>Cr(this,n),arguments)},findIndex(t,e){return Ai(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return Ai(this,"findLast",t,e,n=>Cr(this,n),arguments)},findLastIndex(t,e){return Ai(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return Ai(this,"forEach",t,e,void 0,arguments)},includes(...t){return yc(this,"includes",t)},indexOf(...t){return yc(this,"indexOf",t)},join(t){return Io(this).join(t)},lastIndexOf(...t){return yc(this,"lastIndexOf",t)},map(t,e){return Ai(this,"map",t,e,void 0,arguments)},pop(){return Ss(this,"pop")},push(...t){return Ss(this,"push",t)},reduce(t,...e){return _p(this,"reduce",t,e)},reduceRight(t,...e){return _p(this,"reduceRight",t,e)},shift(){return Ss(this,"shift")},some(t,e){return Ai(this,"some",t,e,void 0,arguments)},splice(...t){return Ss(this,"splice",t)},toReversed(){return Io(this).toReversed()},toSorted(t){return Io(this).toSorted(t)},toSpliced(...t){return Io(this).toSpliced(...t)},unshift(...t){return Ss(this,"unshift",t)},values(){return _c(this,"values",t=>Cr(this,t))}};function _c(t,e,n){const i=ku(t),r=i[e]();return i!==t&&!In(t)&&(r._next=r.next,r.next=()=>{const o=r._next();return o.done||(o.value=n(o.value)),o}),r}const Fx=Array.prototype;function Ai(t,e,n,i,r,o){const s=ku(t),a=s!==t&&!In(t),l=s[e];if(l!==Fx[e]){const f=l.apply(t,o);return a?jn(f):f}let u=n;s!==t&&(a?u=function(f,d){return n.call(this,Cr(t,f),d,t)}:n.length>2&&(u=function(f,d){return n.call(this,f,d,t)}));const c=l.call(s,u,i);return a&&r?r(c):c}function _p(t,e,n,i){const r=ku(t);let o=n;return r!==t&&(In(t)?n.length>3&&(o=function(s,a,l){return n.call(this,s,a,l,t)}):o=function(s,a,l){return n.call(this,s,Cr(t,a),l,t)}),r[e](o,...i)}function yc(t,e,n){const i=mt(t);hn(i,"iterate",ra);const r=i[e](...n);return(r===-1||r===!1)&&Vu(n[0])?(n[0]=mt(n[0]),i[e](...n)):r}function Ss(t,e,n=[]){Qi(),dh();const i=mt(t)[e].apply(t,n);return fh(),er(),i}const Ox=ah("__proto__,__v_isRef,__isVue"),Iv=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Zn));function Bx(t){Zn(t)||(t=String(t));const e=mt(this);return hn(e,"has",t),e.hasOwnProperty(t)}class Pv{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,i){if(n==="__v_skip")return e.__v_skip;const r=this._isReadonly,o=this._isShallow;if(n==="__v_isReactive")return!r;if(n==="__v_isReadonly")return r;if(n==="__v_isShallow")return o;if(n==="__v_raw")return i===(r?o?qx:Uv:o?Lv:Dv).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const s=et(e);if(!r){let l;if(s&&(l=Ux[n]))return l;if(n==="hasOwnProperty")return Bx}const a=Reflect.get(e,n,Ft(e)?e:i);if((Zn(n)?Iv.has(n):Ox(n))||(r||hn(e,"get",n),o))return a;if(Ft(a)){const l=s&&Nu(n)?a:a.value;return r&&yt(l)?eu(l):l}return yt(a)?r?eu(a):Fr(a):a}}class Nv extends Pv{constructor(e=!1){super(!1,e)}set(e,n,i,r){let o=e[n];const s=et(e)&&Nu(n);if(!this._isShallow){const u=tr(o);if(!In(i)&&!tr(i)&&(o=mt(o),i=mt(i)),!s&&Ft(o)&&!Ft(i))return u||(o.value=i),!0}const a=s?Number(n)<e.length:xt(e,n),l=Reflect.set(e,n,i,Ft(e)?e:r);return e===mt(r)&&(a?qi(i,o)&&ki(e,"set",n,i):ki(e,"add",n,i)),l}deleteProperty(e,n){const i=xt(e,n);e[n];const r=Reflect.deleteProperty(e,n);return r&&i&&ki(e,"delete",n,void 0),r}has(e,n){const i=Reflect.has(e,n);return(!Zn(n)||!Iv.has(n))&&hn(e,"has",n),i}ownKeys(e){return hn(e,"iterate",et(e)?"length":mo),Reflect.ownKeys(e)}}class kx extends Pv{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const Vx=new Nv,zx=new kx,$x=new Nv(!0);const Cd=t=>t,Ha=t=>Reflect.getPrototypeOf(t);function Hx(t,e,n){return function(...i){const r=this.__v_raw,o=mt(r),s=Zo(o),a=t==="entries"||t===Symbol.iterator&&s,l=t==="keys"&&s,u=r[t](...i),c=n?Cd:e?ss:jn;return!e&&hn(o,"iterate",l?Td:mo),Kt(Object.create(u),{next(){const{value:f,done:d}=u.next();return d?{value:f,done:d}:{value:a?[c(f[0]),c(f[1])]:c(f),done:d}}})}}function Ga(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function Gx(t,e){const n={get(r){const o=this.__v_raw,s=mt(o),a=mt(r);t||(qi(r,a)&&hn(s,"get",r),hn(s,"get",a));const{has:l}=Ha(s),u=e?Cd:t?ss:jn;if(l.call(s,r))return u(o.get(r));if(l.call(s,a))return u(o.get(a));o!==s&&o.get(r)},get size(){const r=this.__v_raw;return!t&&hn(mt(r),"iterate",mo),r.size},has(r){const o=this.__v_raw,s=mt(o),a=mt(r);return t||(qi(r,a)&&hn(s,"has",r),hn(s,"has",a)),r===a?o.has(r):o.has(r)||o.has(a)},forEach(r,o){const s=this,a=s.__v_raw,l=mt(a),u=e?Cd:t?ss:jn;return!t&&hn(l,"iterate",mo),a.forEach((c,f)=>r.call(o,u(c),u(f),s))}};return Kt(n,t?{add:Ga("add"),set:Ga("set"),delete:Ga("delete"),clear:Ga("clear")}:{add(r){!e&&!In(r)&&!tr(r)&&(r=mt(r));const o=mt(this);return Ha(o).has.call(o,r)||(o.add(r),ki(o,"add",r,r)),this},set(r,o){!e&&!In(o)&&!tr(o)&&(o=mt(o));const s=mt(this),{has:a,get:l}=Ha(s);let u=a.call(s,r);u||(r=mt(r),u=a.call(s,r));const c=l.call(s,r);return s.set(r,o),u?qi(o,c)&&ki(s,"set",r,o):ki(s,"add",r,o),this},delete(r){const o=mt(this),{has:s,get:a}=Ha(o);let l=s.call(o,r);l||(r=mt(r),l=s.call(o,r)),a&&a.call(o,r);const u=o.delete(r);return l&&ki(o,"delete",r,void 0),u},clear(){const r=mt(this),o=r.size!==0,s=r.clear();return o&&ki(r,"clear",void 0,void 0),s}}),["keys","values","entries",Symbol.iterator].forEach(r=>{n[r]=Hx(r,t,e)}),n}function ph(t,e){const n=Gx(t,e);return(i,r,o)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?i:Reflect.get(xt(n,r)&&r in i?n:i,r,o)}const Wx={get:ph(!1,!1)},Xx={get:ph(!1,!0)},Yx={get:ph(!0,!1)};const Dv=new WeakMap,Lv=new WeakMap,Uv=new WeakMap,qx=new WeakMap;function Kx(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Zx(t){return t.__v_skip||!Object.isExtensible(t)?0:Kx(yx(t))}function Fr(t){return tr(t)?t:mh(t,!1,Vx,Wx,Dv)}function jx(t){return mh(t,!1,$x,Xx,Lv)}function eu(t){return mh(t,!0,zx,Yx,Uv)}function mh(t,e,n,i,r){if(!yt(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const o=Zx(t);if(o===0)return t;const s=r.get(t);if(s)return s;const a=new Proxy(t,o===2?i:n);return r.set(t,a),a}function Ki(t){return tr(t)?Ki(t.__v_raw):!!(t&&t.__v_isReactive)}function tr(t){return!!(t&&t.__v_isReadonly)}function In(t){return!!(t&&t.__v_isShallow)}function Vu(t){return t?!!t.__v_raw:!1}function mt(t){const e=t&&t.__v_raw;return e?mt(e):t}function go(t){return!xt(t,"__v_skip")&&Object.isExtensible(t)&&vv(t,"__v_skip",!0),t}const jn=t=>yt(t)?Fr(t):t,ss=t=>yt(t)?eu(t):t;function Ft(t){return t?t.__v_isRef===!0:!1}function Ne(t){return Fv(t,!1)}function Lr(t){return Fv(t,!0)}function Fv(t,e){return Ft(t)?t:new Jx(t,e)}class Jx{constructor(e,n){this.dep=new Bu,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:mt(e),this._value=n?e:jn(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,i=this.__v_isShallow||In(e)||tr(e);e=i?e:mt(e),qi(e,n)&&(this._rawValue=e,this._value=i?e:jn(e),this.dep.trigger())}}function fe(t){return Ft(t)?t.value:t}function ht(t){return rt(t)?t():fe(t)}const Qx={get:(t,e,n)=>e==="__v_raw"?t:fe(Reflect.get(t,e,n)),set:(t,e,n,i)=>{const r=t[e];return Ft(r)&&!Ft(n)?(r.value=n,!0):Reflect.set(t,e,n,i)}};function Ov(t){return Ki(t)?t:new Proxy(t,Qx)}class eb{constructor(e){this.__v_isRef=!0,this._value=void 0;const n=this.dep=new Bu,{get:i,set:r}=e(n.track.bind(n),n.trigger.bind(n));this._get=i,this._set=r}get value(){return this._value=this._get()}set value(e){this._set(e)}}function tb(t){return new eb(t)}function Bv(t){const e=et(t)?new Array(t.length):{};for(const n in t)e[n]=kv(t,n);return e}class nb{constructor(e,n,i){this._object=e,this._key=n,this._defaultValue=i,this.__v_isRef=!0,this._value=void 0,this._raw=mt(e);let r=!0,o=e;if(!et(e)||!Nu(String(n)))do r=!Vu(o)||In(o);while(r&&(o=o.__v_raw));this._shallow=r}get value(){let e=this._object[this._key];return this._shallow&&(e=fe(e)),this._value=e===void 0?this._defaultValue:e}set value(e){if(this._shallow&&Ft(this._raw[this._key])){const n=this._object[this._key];if(Ft(n)){n.value=e;return}}this._object[this._key]=e}get dep(){return Lx(this._raw,this._key)}}class ib{constructor(e){this._getter=e,this.__v_isRef=!0,this.__v_isReadonly=!0,this._value=void 0}get value(){return this._value=this._getter()}}function bt(t,e,n){return Ft(t)?t:rt(t)?new ib(t):yt(t)&&arguments.length>1?kv(t,e,n):Ne(t)}function kv(t,e,n){return new nb(t,e,n)}class rb{constructor(e,n,i){this.fn=e,this.setter=n,this._value=void 0,this.dep=new Bu(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=ia-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&Ut!==this)return wv(this,!0),!0}get value(){const e=this.dep.track();return Cv(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function ob(t,e,n=!1){let i,r;return rt(t)?i=t:(i=t.get,r=t.set),new rb(i,r,n)}const Wa={},tu=new WeakMap;let no;function sb(t,e=!1,n=no){if(n){let i=tu.get(n);i||tu.set(n,i=[]),i.push(t)}}function ab(t,e,n=Pt){const{immediate:i,deep:r,once:o,scheduler:s,augmentJob:a,call:l}=n,u=_=>r?_:In(_)||r===!1||r===0?Vi(_,1):Vi(_);let c,f,d,h,m=!1,v=!1;if(Ft(t)?(f=()=>t.value,m=In(t)):Ki(t)?(f=()=>u(t),m=!0):et(t)?(v=!0,m=t.some(_=>Ki(_)||In(_)),f=()=>t.map(_=>{if(Ft(_))return _.value;if(Ki(_))return u(_);if(rt(_))return l?l(_,2):_()})):rt(t)?e?f=l?()=>l(t,2):t:f=()=>{if(d){Qi();try{d()}finally{er()}}const _=no;no=c;try{return l?l(t,3,[h]):t(h)}finally{no=_}}:f=gi,e&&r){const _=f,R=r===!0?1/0:r;f=()=>Vi(_(),R)}const g=Ou(),p=()=>{c.stop(),g&&g.active&&uh(g.effects,c)};if(o&&e){const _=e;e=(...R)=>{_(...R),p()}}let y=v?new Array(t.length).fill(Wa):Wa;const S=_=>{if(!(!(c.flags&1)||!c.dirty&&!_))if(e){const R=c.run();if(r||m||(v?R.some((N,F)=>qi(N,y[F])):qi(R,y))){d&&d();const N=no;no=c;try{const F=[R,y===Wa?void 0:v&&y[0]===Wa?[]:y,h];y=R,l?l(e,3,F):e(...F)}finally{no=N}}}else c.run()};return a&&a(S),c=new Sv(f),c.scheduler=s?()=>s(S,!1):S,h=_=>sb(_,!1,c),d=c.onStop=()=>{const _=tu.get(c);if(_){if(l)l(_,4);else for(const R of _)R();tu.delete(c)}},e?i?S(!0):y=c.run():s?s(S.bind(null,!0),!0):c.run(),p.pause=c.pause.bind(c),p.resume=c.resume.bind(c),p.stop=p,p}function Vi(t,e=1/0,n){if(e<=0||!yt(t)||t.__v_skip||(n=n||new Map,(n.get(t)||0)>=e))return t;if(n.set(t,e),e--,Ft(t))Vi(t.value,e,n);else if(et(t))for(let i=0;i<t.length;i++)Vi(t[i],e,n);else if(hv(t)||Zo(t))t.forEach(i=>{Vi(i,e,n)});else if(gv(t)){for(const i in t)Vi(t[i],e,n);for(const i of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,i)&&Vi(t[i],e,n)}return t}function Ia(t,e,n,i){try{return i?t(...i):t()}catch(r){zu(r,e,n)}}function Jn(t,e,n,i){if(rt(t)){const r=Ia(t,e,n,i);return r&&pv(r)&&r.catch(o=>{zu(o,e,n)}),r}if(et(t)){const r=[];for(let o=0;o<t.length;o++)r.push(Jn(t[o],e,n,i));return r}}function zu(t,e,n,i=!0){const r=e?e.vnode:null,{errorHandler:o,throwUnhandledErrorInProduction:s}=e&&e.appContext.config||Pt;if(e){let a=e.parent;const l=e.proxy,u=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const c=a.ec;if(c){for(let f=0;f<c.length;f++)if(c[f](t,l,u)===!1)return}a=a.parent}if(o){Qi(),Ia(o,null,10,[t,l,u]),er();return}}lb(t,n,r,i,s)}function lb(t,e,n,i=!0,r=!1){if(r)throw t;console.error(t)}const _n=[];let si=-1;const jo=[];let Ar=null,qo=0;const Vv=Promise.resolve();let nu=null;function qt(t){const e=nu||Vv;return t?e.then(this?t.bind(this):t):e}function ub(t){let e=si+1,n=_n.length;for(;e<n;){const i=e+n>>>1,r=_n[i],o=oa(r);o<t||o===t&&r.flags&2?e=i+1:n=i}return e}function gh(t){if(!(t.flags&1)){const e=oa(t),n=_n[_n.length-1];!n||!(t.flags&2)&&e>=oa(n)?_n.push(t):_n.splice(ub(e),0,t),t.flags|=1,zv()}}function zv(){nu||(nu=Vv.then(Hv))}function cb(t){et(t)?jo.push(...t):Ar&&t.id===-1?Ar.splice(qo+1,0,t):t.flags&1||(jo.push(t),t.flags|=1),zv()}function yp(t,e,n=si+1){for(;n<_n.length;n++){const i=_n[n];if(i&&i.flags&2){if(t&&i.id!==t.uid)continue;_n.splice(n,1),n--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function $v(t){if(jo.length){const e=[...new Set(jo)].sort((n,i)=>oa(n)-oa(i));if(jo.length=0,Ar){Ar.push(...e);return}for(Ar=e,qo=0;qo<Ar.length;qo++){const n=Ar[qo];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Ar=null,qo=0}}const oa=t=>t.id==null?t.flags&2?-1:1/0:t.id;function Hv(t){try{for(si=0;si<_n.length;si++){const e=_n[si];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Ia(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;si<_n.length;si++){const e=_n[si];e&&(e.flags&=-2)}si=-1,_n.length=0,$v(),nu=null,(_n.length||jo.length)&&Hv()}}let on=null,Gv=null;function iu(t){const e=on;return on=t,Gv=t&&t.type.__scopeId||null,e}function rn(t,e=on,n){if(!e||t._n)return t;const i=(...r)=>{i._d&&su(-1);const o=iu(e);let s;try{s=t(...r)}finally{iu(o),i._d&&su(1)}return s};return i._n=!0,i._c=!0,i._d=!0,i}function Hi(t,e){if(on===null)return t;const n=Xu(on),i=t.dirs||(t.dirs=[]);for(let r=0;r<e.length;r++){let[o,s,a,l=Pt]=e[r];o&&(rt(o)&&(o={mounted:o,updated:o}),o.deep&&Vi(s),i.push({dir:o,instance:n,value:s,oldValue:void 0,arg:a,modifiers:l}))}return t}function Xr(t,e,n,i){const r=t.dirs,o=e&&e.dirs;for(let s=0;s<r.length;s++){const a=r[s];o&&(a.oldValue=o[s].value);let l=a.dir[i];l&&(Qi(),Jn(l,n,8,[t.el,a,t,e]),er())}}function Or(t,e){if(mn){let n=mn.provides;const i=mn.parent&&mn.parent.provides;i===n&&(n=mn.provides=Object.create(i)),n[t]=e}}function Pn(t,e,n=!1){const i=Mi();if(i||vo){let r=vo?vo._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(r&&t in r)return r[t];if(arguments.length>1)return n&&rt(e)?e.call(i&&i.proxy):e}}function db(){return!!(Mi()||vo)}const fb=Symbol.for("v-scx"),hb=()=>Pn(fb);function Wv(t,e){return vh(t,null,e)}function at(t,e,n){return vh(t,e,n)}function vh(t,e,n=Pt){const{immediate:i,deep:r,flush:o,once:s}=n,a=Kt({},n),l=e&&i||!e&&o!=="post";let u;if(ua){if(o==="sync"){const h=hb();u=h.__watcherHandles||(h.__watcherHandles=[])}else if(!l){const h=()=>{};return h.stop=gi,h.resume=gi,h.pause=gi,h}}const c=mn;a.call=(h,m,v)=>Jn(h,c,m,v);let f=!1;o==="post"?a.scheduler=h=>{dn(h,c&&c.suspense)}:o!=="sync"&&(f=!0,a.scheduler=(h,m)=>{m?h():gh(h)}),a.augmentJob=h=>{e&&(h.flags|=4),f&&(h.flags|=2,c&&(h.id=c.uid,h.i=c))};const d=ab(t,e,a);return ua&&(u?u.push(d):l&&d()),d}function pb(t,e,n){const i=this.proxy,r=Ot(t)?t.includes(".")?Xv(i,t):()=>i[t]:t.bind(i,i);let o;rt(e)?o=e:(o=e.handler,n=e);const s=Pa(this),a=vh(r,o.bind(i),n);return s(),a}function Xv(t,e){const n=e.split(".");return()=>{let i=t;for(let r=0;r<n.length&&i;r++)i=i[n[r]];return i}}const Yv=Symbol("_vte"),qv=t=>t.__isTeleport,Ks=t=>t&&(t.disabled||t.disabled===""),xp=t=>t&&(t.defer||t.defer===""),bp=t=>typeof SVGElement<"u"&&t instanceof SVGElement,Sp=t=>typeof MathMLElement=="function"&&t instanceof MathMLElement,Ad=(t,e)=>{const n=t&&t.to;return Ot(n)?e?e(n):null:n},Kv={name:"Teleport",__isTeleport:!0,process(t,e,n,i,r,o,s,a,l,u){const{mc:c,pc:f,pbc:d,o:{insert:h,querySelector:m,createText:v,createComment:g}}=u,p=Ks(e.props);let{shapeFlag:y,children:S,dynamicChildren:_}=e;if(t==null){const R=e.el=v(""),N=e.anchor=v("");h(R,n,i),h(N,n,i);const F=(b,P)=>{y&16&&c(S,b,P,r,o,s,a,l)},x=()=>{const b=e.target=Ad(e.props,m),P=Rd(b,e,v,h);b&&(s!=="svg"&&bp(b)?s="svg":s!=="mathml"&&Sp(b)&&(s="mathml"),r&&r.isCE&&(r.ce._teleportTargets||(r.ce._teleportTargets=new Set)).add(b),p||(F(b,P),Dl(e,!1)))};p&&(F(n,N),Dl(e,!0)),xp(e.props)?(e.el.__isMounted=!1,dn(()=>{x(),delete e.el.__isMounted},o)):x()}else{if(xp(e.props)&&t.el.__isMounted===!1){dn(()=>{Kv.process(t,e,n,i,r,o,s,a,l,u)},o);return}e.el=t.el,e.targetStart=t.targetStart;const R=e.anchor=t.anchor,N=e.target=t.target,F=e.targetAnchor=t.targetAnchor,x=Ks(t.props),b=x?n:N,P=x?R:F;if(s==="svg"||bp(N)?s="svg":(s==="mathml"||Sp(N))&&(s="mathml"),_?(d(t.dynamicChildren,_,b,r,o,s,a),Mh(t,e,!0)):l||f(t,e,b,P,r,o,s,a,!1),p)x?e.props&&t.props&&e.props.to!==t.props.to&&(e.props.to=t.props.to):Xa(e,n,R,u,1);else if((e.props&&e.props.to)!==(t.props&&t.props.to)){const M=e.target=Ad(e.props,m);M&&Xa(e,M,null,u,0)}else x&&Xa(e,N,F,u,1);Dl(e,p)}},remove(t,e,n,{um:i,o:{remove:r}},o){const{shapeFlag:s,children:a,anchor:l,targetStart:u,targetAnchor:c,target:f,props:d}=t;if(f&&(r(u),r(c)),o&&r(l),s&16){const h=o||!Ks(d);for(let m=0;m<a.length;m++){const v=a[m];i(v,e,n,h,!!v.dynamicChildren)}}},move:Xa,hydrate:mb};function Xa(t,e,n,{o:{insert:i},m:r},o=2){o===0&&i(t.targetAnchor,e,n);const{el:s,anchor:a,shapeFlag:l,children:u,props:c}=t,f=o===2;if(f&&i(s,e,n),(!f||Ks(c))&&l&16)for(let d=0;d<u.length;d++)r(u[d],e,n,2);f&&i(a,e,n)}function mb(t,e,n,i,r,o,{o:{nextSibling:s,parentNode:a,querySelector:l,insert:u,createText:c}},f){function d(g,p){let y=p;for(;y;){if(y&&y.nodeType===8){if(y.data==="teleport start anchor")e.targetStart=y;else if(y.data==="teleport anchor"){e.targetAnchor=y,g._lpa=e.targetAnchor&&s(e.targetAnchor);break}}y=s(y)}}function h(g,p){p.anchor=f(s(g),p,a(g),n,i,r,o)}const m=e.target=Ad(e.props,l),v=Ks(e.props);if(m){const g=m._lpa||m.firstChild;e.shapeFlag&16&&(v?(h(t,e),d(m,g),e.targetAnchor||Rd(m,e,c,u,a(t)===m?t:null)):(e.anchor=s(t),d(m,g),e.targetAnchor||Rd(m,e,c,u),f(g&&s(g),e,m,n,i,r,o))),Dl(e,v)}else v&&e.shapeFlag&16&&(h(t,e),e.targetStart=t,e.targetAnchor=s(t));return e.anchor&&s(e.anchor)}const _h=Kv;function Dl(t,e){const n=t.ctx;if(n&&n.ut){let i,r;for(e?(i=t.el,r=t.anchor):(i=t.targetStart,r=t.targetAnchor);i&&i!==r;)i.nodeType===1&&i.setAttribute("data-v-owner",n.uid),i=i.nextSibling;n.ut()}}function Rd(t,e,n,i,r=null){const o=e.targetStart=n(""),s=e.targetAnchor=n("");return o[Yv]=s,t&&(i(o,t,r),i(s,t,r)),s}const ai=Symbol("_leaveCb"),Ms=Symbol("_enterCb");function gb(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Zt(()=>{t.isMounted=!0}),cr(()=>{t.isUnmounting=!0}),t}const Un=[Function,Array],Zv={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Un,onEnter:Un,onAfterEnter:Un,onEnterCancelled:Un,onBeforeLeave:Un,onLeave:Un,onAfterLeave:Un,onLeaveCancelled:Un,onBeforeAppear:Un,onAppear:Un,onAfterAppear:Un,onAppearCancelled:Un},jv=t=>{const e=t.subTree;return e.component?jv(e.component):e},vb={name:"BaseTransition",props:Zv,setup(t,{slots:e}){const n=Mi(),i=gb();return()=>{const r=e.default&&e0(e.default(),!0);if(!r||!r.length)return;const o=Jv(r),s=mt(t),{mode:a}=s;if(i.isLeaving)return xc(o);const l=Mp(o);if(!l)return xc(o);let u=Id(l,s,i,n,f=>u=f);l.type!==pn&&sa(l,u);let c=n.subTree&&Mp(n.subTree);if(c&&c.type!==pn&&!ro(c,l)&&jv(n).type!==pn){let f=Id(c,s,i,n);if(sa(c,f),a==="out-in"&&l.type!==pn)return i.isLeaving=!0,f.afterLeave=()=>{i.isLeaving=!1,n.job.flags&8||n.update(),delete f.afterLeave,c=void 0},xc(o);a==="in-out"&&l.type!==pn?f.delayLeave=(d,h,m)=>{const v=Qv(i,c);v[String(c.key)]=c,d[ai]=()=>{h(),d[ai]=void 0,delete u.delayedLeave,c=void 0},u.delayedLeave=()=>{m(),delete u.delayedLeave,c=void 0}}:c=void 0}else c&&(c=void 0);return o}}};function Jv(t){let e=t[0];if(t.length>1){for(const n of t)if(n.type!==pn){e=n;break}}return e}const _b=vb;function Qv(t,e){const{leavingVNodes:n}=t;let i=n.get(e.type);return i||(i=Object.create(null),n.set(e.type,i)),i}function Id(t,e,n,i,r){const{appear:o,mode:s,persisted:a=!1,onBeforeEnter:l,onEnter:u,onAfterEnter:c,onEnterCancelled:f,onBeforeLeave:d,onLeave:h,onAfterLeave:m,onLeaveCancelled:v,onBeforeAppear:g,onAppear:p,onAfterAppear:y,onAppearCancelled:S}=e,_=String(t.key),R=Qv(n,t),N=(b,P)=>{b&&Jn(b,i,9,P)},F=(b,P)=>{const M=P[1];N(b,P),et(b)?b.every(w=>w.length<=1)&&M():b.length<=1&&M()},x={mode:s,persisted:a,beforeEnter(b){let P=l;if(!n.isMounted)if(o)P=g||l;else return;b[ai]&&b[ai](!0);const M=R[_];M&&ro(t,M)&&M.el[ai]&&M.el[ai](),N(P,[b])},enter(b){if(R[_]===t)return;let P=u,M=c,w=f;if(!n.isMounted)if(o)P=p||u,M=y||c,w=S||f;else return;let W=!1;b[Ms]=k=>{W||(W=!0,k?N(w,[b]):N(M,[b]),x.delayedLeave&&x.delayedLeave(),b[Ms]=void 0)};const E=b[Ms].bind(null,!1);P?F(P,[b,E]):E()},leave(b,P){const M=String(t.key);if(b[Ms]&&b[Ms](!0),n.isUnmounting)return P();N(d,[b]);let w=!1;b[ai]=E=>{w||(w=!0,P(),E?N(v,[b]):N(m,[b]),b[ai]=void 0,R[M]===t&&delete R[M])};const W=b[ai].bind(null,!1);R[M]=t,h?F(h,[b,W]):W()},clone(b){const P=Id(b,e,n,i,r);return r&&r(P),P}};return x}function xc(t){if($u(t))return t=Br(t),t.children=null,t}function Mp(t){if(!$u(t))return qv(t.type)&&t.children?Jv(t.children):t;if(t.component)return t.component.subTree;const{shapeFlag:e,children:n}=t;if(n){if(e&16)return n[0];if(e&32&&rt(n.default))return n.default()}}function sa(t,e){t.shapeFlag&6&&t.component?(t.transition=e,sa(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function e0(t,e=!1,n){let i=[],r=0;for(let o=0;o<t.length;o++){let s=t[o];const a=n==null?s.key:String(n)+String(s.key!=null?s.key:o);s.type===it?(s.patchFlag&128&&r++,i=i.concat(e0(s.children,e,a))):(e||s.type!==pn)&&i.push(a!=null?Br(s,{key:a}):s)}if(r>1)for(let o=0;o<i.length;o++)i[o].patchFlag=-2;return i}function Nt(t,e){return rt(t)?Kt({name:t.name},e,{setup:t}):t}function t0(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function wp(t,e){let n;return!!((n=Object.getOwnPropertyDescriptor(t,e))&&!n.configurable)}const ru=new WeakMap;function Zs(t,e,n,i,r=!1){if(et(t)){t.forEach((v,g)=>Zs(v,e&&(et(e)?e[g]:e),n,i,r));return}if(Jo(i)&&!r){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&Zs(t,e,n,i.component.subTree);return}const o=i.shapeFlag&4?Xu(i.component):i.el,s=r?null:o,{i:a,r:l}=t,u=e&&e.r,c=a.refs===Pt?a.refs={}:a.refs,f=a.setupState,d=mt(f),h=f===Pt?fv:v=>wp(c,v)?!1:xt(d,v),m=(v,g)=>!(g&&wp(c,g));if(u!=null&&u!==l){if(Ep(e),Ot(u))c[u]=null,h(u)&&(f[u]=null);else if(Ft(u)){const v=e;m(u,v.k)&&(u.value=null),v.k&&(c[v.k]=null)}}if(rt(l))Ia(l,a,12,[s,c]);else{const v=Ot(l),g=Ft(l);if(v||g){const p=()=>{if(t.f){const y=v?h(l)?f[l]:c[l]:m()||!t.k?l.value:c[t.k];if(r)et(y)&&uh(y,o);else if(et(y))y.includes(o)||y.push(o);else if(v)c[l]=[o],h(l)&&(f[l]=c[l]);else{const S=[o];m(l,t.k)&&(l.value=S),t.k&&(c[t.k]=S)}}else v?(c[l]=s,h(l)&&(f[l]=s)):g&&(m(l,t.k)&&(l.value=s),t.k&&(c[t.k]=s))};if(s){const y=()=>{p(),ru.delete(t)};y.id=-1,ru.set(t,y),dn(y,n)}else Ep(t),p()}}}function Ep(t){const e=ru.get(t);e&&(e.flags|=8,ru.delete(t))}Uu().requestIdleCallback;Uu().cancelIdleCallback;const Jo=t=>!!t.type.__asyncLoader,$u=t=>t.type.__isKeepAlive;function yb(t,e){n0(t,"a",e)}function xb(t,e){n0(t,"da",e)}function n0(t,e,n=mn){const i=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(Hu(e,i,n),n){let r=n.parent;for(;r&&r.parent;)$u(r.parent.vnode)&&bb(i,e,n,r),r=r.parent}}function bb(t,e,n,i){const r=Hu(e,t,i,!0);_s(()=>{uh(i[e],r)},n)}function Hu(t,e,n=mn,i=!1){if(n){const r=n[t]||(n[t]=[]),o=e.__weh||(e.__weh=(...s)=>{Qi();const a=Pa(n),l=Jn(e,n,t,s);return a(),er(),l});return i?r.unshift(o):r.push(o),o}}const ur=t=>(e,n=mn)=>{(!ua||t==="sp")&&Hu(t,(...i)=>e(...i),n)},i0=ur("bm"),Zt=ur("m"),Sb=ur("bu"),Mb=ur("u"),cr=ur("bum"),_s=ur("um"),wb=ur("sp"),Eb=ur("rtg"),Tb=ur("rtc");function Cb(t,e=mn){Hu("ec",t,e)}const r0="components";function yh(t,e){return a0(r0,t,!0,e)||t}const o0=Symbol.for("v-ndc");function s0(t){return Ot(t)?a0(r0,t,!1)||t:t||o0}function a0(t,e,n=!0,i=!1){const r=on||mn;if(r){const o=r.type;{const a=d1(o,!1);if(a&&(a===e||a===Bn(e)||a===Lu(Bn(e))))return o}const s=Tp(r[t]||o[t],e)||Tp(r.appContext[t],e);return!s&&i?o:s}}function Tp(t,e){return t&&(t[e]||t[Bn(e)]||t[Lu(Bn(e))])}function Gt(t,e,n,i){let r;const o=n&&n[i],s=et(t);if(s||Ot(t)){const a=s&&Ki(t);let l=!1,u=!1;a&&(l=!In(t),u=tr(t),t=ku(t)),r=new Array(t.length);for(let c=0,f=t.length;c<f;c++)r[c]=e(l?u?ss(jn(t[c])):jn(t[c]):t[c],c,void 0,o&&o[c])}else if(typeof t=="number"){r=new Array(t);for(let a=0;a<t;a++)r[a]=e(a+1,a,void 0,o&&o[a])}else if(yt(t))if(t[Symbol.iterator])r=Array.from(t,(a,l)=>e(a,l,void 0,o&&o[l]));else{const a=Object.keys(t);r=new Array(a.length);for(let l=0,u=a.length;l<u;l++){const c=a[l];r[l]=e(t[c],c,l,o&&o[l])}}else r=[];return n&&(n[i]=r),r}function Ab(t,e){for(let n=0;n<e.length;n++){const i=e[n];if(et(i))for(let r=0;r<i.length;r++)t[i[r].name]=i[r].fn;else i&&(t[i.name]=i.key?(...r)=>{const o=i.fn(...r);return o&&(o.key=i.key),o}:i.fn)}return t}function nr(t,e,n={},i,r){if(on.ce||on.parent&&Jo(on.parent)&&on.parent.ce){const u=Object.keys(n).length>0;return e!=="default"&&(n.name=e),ae(),tn(it,null,[tt("slot",n,i&&i())],u?-2:64)}let o=t[e];o&&o._c&&(o._d=!1),ae();const s=o&&l0(o(n)),a=n.key||s&&s.key,l=tn(it,{key:(a&&!Zn(a)?a:`_${e}`)+(!s&&i?"_fb":"")},s||(i?i():[]),s&&t._===1?64:-2);return l.scopeId&&(l.slotScopeIds=[l.scopeId+"-s"]),o&&o._c&&(o._d=!0),l}function l0(t){return t.some(e=>aa(e)?!(e.type===pn||e.type===it&&!l0(e.children)):!0)?t:null}const Pd=t=>t?R0(t)?Xu(t):Pd(t.parent):null,js=Kt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Pd(t.parent),$root:t=>Pd(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>f0(t),$forceUpdate:t=>t.f||(t.f=()=>{gh(t.update)}),$nextTick:t=>t.n||(t.n=qt.bind(t.proxy)),$watch:t=>pb.bind(t)}),bc=(t,e)=>t!==Pt&&!t.__isScriptSetup&&xt(t,e),Rb={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:i,data:r,props:o,accessCache:s,type:a,appContext:l}=t;if(e[0]!=="$"){const d=s[e];if(d!==void 0)switch(d){case 1:return i[e];case 2:return r[e];case 4:return n[e];case 3:return o[e]}else{if(bc(i,e))return s[e]=1,i[e];if(r!==Pt&&xt(r,e))return s[e]=2,r[e];if(xt(o,e))return s[e]=3,o[e];if(n!==Pt&&xt(n,e))return s[e]=4,n[e];Nd&&(s[e]=0)}}const u=js[e];let c,f;if(u)return e==="$attrs"&&hn(t.attrs,"get",""),u(t);if((c=a.__cssModules)&&(c=c[e]))return c;if(n!==Pt&&xt(n,e))return s[e]=4,n[e];if(f=l.config.globalProperties,xt(f,e))return f[e]},set({_:t},e,n){const{data:i,setupState:r,ctx:o}=t;return bc(r,e)?(r[e]=n,!0):i!==Pt&&xt(i,e)?(i[e]=n,!0):xt(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(o[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:i,appContext:r,props:o,type:s}},a){let l;return!!(n[a]||t!==Pt&&a[0]!=="$"&&xt(t,a)||bc(e,a)||xt(o,a)||xt(i,a)||xt(js,a)||xt(r.config.globalProperties,a)||(l=s.__cssModules)&&l[a])},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:xt(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function u0(){return c0().slots}function xh(){return c0().attrs}function c0(t){const e=Mi();return e.setupContext||(e.setupContext=P0(e))}function Cp(t){return et(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}function Ib(t,e){const n={};for(const i in t)e.includes(i)||Object.defineProperty(n,i,{enumerable:!0,get:()=>t[i]});return n}let Nd=!0;function Pb(t){const e=f0(t),n=t.proxy,i=t.ctx;Nd=!1,e.beforeCreate&&Ap(e.beforeCreate,t,"bc");const{data:r,computed:o,methods:s,watch:a,provide:l,inject:u,created:c,beforeMount:f,mounted:d,beforeUpdate:h,updated:m,activated:v,deactivated:g,beforeDestroy:p,beforeUnmount:y,destroyed:S,unmounted:_,render:R,renderTracked:N,renderTriggered:F,errorCaptured:x,serverPrefetch:b,expose:P,inheritAttrs:M,components:w,directives:W,filters:E}=e;if(u&&Nb(u,i,null),s)for(const I in s){const O=s[I];rt(O)&&(i[I]=O.bind(n))}if(r){const I=r.call(n,n);yt(I)&&(t.data=Fr(I))}if(Nd=!0,o)for(const I in o){const O=o[I],z=rt(O)?O.bind(n,n):rt(O.get)?O.get.bind(n,n):gi,q=!rt(O)&&rt(O.set)?O.set.bind(n):gi,te=De({get:z,set:q});Object.defineProperty(i,I,{enumerable:!0,configurable:!0,get:()=>te.value,set:ne=>te.value=ne})}if(a)for(const I in a)d0(a[I],i,n,I);if(l){const I=rt(l)?l.call(n):l;Reflect.ownKeys(I).forEach(O=>{Or(O,I[O])})}c&&Ap(c,t,"c");function A(I,O){et(O)?O.forEach(z=>I(z.bind(n))):O&&I(O.bind(n))}if(A(i0,f),A(Zt,d),A(Sb,h),A(Mb,m),A(yb,v),A(xb,g),A(Cb,x),A(Tb,N),A(Eb,F),A(cr,y),A(_s,_),A(wb,b),et(P))if(P.length){const I=t.exposed||(t.exposed={});P.forEach(O=>{Object.defineProperty(I,O,{get:()=>n[O],set:z=>n[O]=z,enumerable:!0})})}else t.exposed||(t.exposed={});R&&t.render===gi&&(t.render=R),M!=null&&(t.inheritAttrs=M),w&&(t.components=w),W&&(t.directives=W),b&&t0(t)}function Nb(t,e,n=gi){et(t)&&(t=Dd(t));for(const i in t){const r=t[i];let o;yt(r)?"default"in r?o=Pn(r.from||i,r.default,!0):o=Pn(r.from||i):o=Pn(r),Ft(o)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>o.value,set:s=>o.value=s}):e[i]=o}}function Ap(t,e,n){Jn(et(t)?t.map(i=>i.bind(e.proxy)):t.bind(e.proxy),e,n)}function d0(t,e,n,i){let r=i.includes(".")?Xv(n,i):()=>n[i];if(Ot(t)){const o=e[t];rt(o)&&at(r,o)}else if(rt(t))at(r,t.bind(n));else if(yt(t))if(et(t))t.forEach(o=>d0(o,e,n,i));else{const o=rt(t.handler)?t.handler.bind(n):e[t.handler];rt(o)&&at(r,o,t)}}function f0(t){const e=t.type,{mixins:n,extends:i}=e,{mixins:r,optionsCache:o,config:{optionMergeStrategies:s}}=t.appContext,a=o.get(e);let l;return a?l=a:!r.length&&!n&&!i?l=e:(l={},r.length&&r.forEach(u=>ou(l,u,s,!0)),ou(l,e,s)),yt(e)&&o.set(e,l),l}function ou(t,e,n,i=!1){const{mixins:r,extends:o}=e;o&&ou(t,o,n,!0),r&&r.forEach(s=>ou(t,s,n,!0));for(const s in e)if(!(i&&s==="expose")){const a=Db[s]||n&&n[s];t[s]=a?a(t[s],e[s]):e[s]}return t}const Db={data:Rp,props:Ip,emits:Ip,methods:Os,computed:Os,beforeCreate:gn,created:gn,beforeMount:gn,mounted:gn,beforeUpdate:gn,updated:gn,beforeDestroy:gn,beforeUnmount:gn,destroyed:gn,unmounted:gn,activated:gn,deactivated:gn,errorCaptured:gn,serverPrefetch:gn,components:Os,directives:Os,watch:Ub,provide:Rp,inject:Lb};function Rp(t,e){return e?t?function(){return Kt(rt(t)?t.call(this,this):t,rt(e)?e.call(this,this):e)}:e:t}function Lb(t,e){return Os(Dd(t),Dd(e))}function Dd(t){if(et(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function gn(t,e){return t?[...new Set([].concat(t,e))]:e}function Os(t,e){return t?Kt(Object.create(null),t,e):e}function Ip(t,e){return t?et(t)&&et(e)?[...new Set([...t,...e])]:Kt(Object.create(null),Cp(t),Cp(e??{})):e}function Ub(t,e){if(!t)return e;if(!e)return t;const n=Kt(Object.create(null),t);for(const i in e)n[i]=gn(t[i],e[i]);return n}function h0(){return{app:null,config:{isNativeTag:fv,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Fb=0;function Ob(t,e){return function(i,r=null){rt(i)||(i=Kt({},i)),r!=null&&!yt(r)&&(r=null);const o=h0(),s=new WeakSet,a=[];let l=!1;const u=o.app={_uid:Fb++,_component:i,_props:r,_container:null,_context:o,_instance:null,version:p1,get config(){return o.config},set config(c){},use(c,...f){return s.has(c)||(c&&rt(c.install)?(s.add(c),c.install(u,...f)):rt(c)&&(s.add(c),c(u,...f))),u},mixin(c){return o.mixins.includes(c)||o.mixins.push(c),u},component(c,f){return f?(o.components[c]=f,u):o.components[c]},directive(c,f){return f?(o.directives[c]=f,u):o.directives[c]},mount(c,f,d){if(!l){const h=u._ceVNode||tt(i,r);return h.appContext=o,d===!0?d="svg":d===!1&&(d=void 0),t(h,c,d),l=!0,u._container=c,c.__vue_app__=u,Xu(h.component)}},onUnmount(c){a.push(c)},unmount(){l&&(Jn(a,u._instance,16),t(null,u._container),delete u._container.__vue_app__)},provide(c,f){return o.provides[c]=f,u},runWithContext(c){const f=vo;vo=u;try{return c()}finally{vo=f}}};return u}}let vo=null;const Bb=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${Bn(e)}Modifiers`]||t[`${Hr(e)}Modifiers`];function kb(t,e,...n){if(t.isUnmounted)return;const i=t.vnode.props||Pt;let r=n;const o=e.startsWith("update:"),s=o&&Bb(i,e.slice(7));s&&(s.trim&&(r=n.map(c=>Ot(c)?c.trim():c)),s.number&&(r=n.map(Sx)));let a,l=i[a=pc(e)]||i[a=pc(Bn(e))];!l&&o&&(l=i[a=pc(Hr(e))]),l&&Jn(l,t,6,r);const u=i[a+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Jn(u,t,6,r)}}const Vb=new WeakMap;function p0(t,e,n=!1){const i=n?Vb:e.emitsCache,r=i.get(t);if(r!==void 0)return r;const o=t.emits;let s={},a=!1;if(!rt(t)){const l=u=>{const c=p0(u,e,!0);c&&(a=!0,Kt(s,c))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!o&&!a?(yt(t)&&i.set(t,null),null):(et(o)?o.forEach(l=>s[l]=null):Kt(s,o),yt(t)&&i.set(t,s),s)}function Gu(t,e){return!t||!Pu(e)?!1:(e=e.slice(2).replace(/Once$/,""),xt(t,e[0].toLowerCase()+e.slice(1))||xt(t,Hr(e))||xt(t,e))}function Pp(t){const{type:e,vnode:n,proxy:i,withProxy:r,propsOptions:[o],slots:s,attrs:a,emit:l,render:u,renderCache:c,props:f,data:d,setupState:h,ctx:m,inheritAttrs:v}=t,g=iu(t);let p,y;try{if(n.shapeFlag&4){const _=r||i,R=_;p=ui(u.call(R,_,c,f,h,d,m)),y=a}else{const _=e;p=ui(_.length>1?_(f,{attrs:a,slots:s,emit:l}):_(f,null)),y=e.props?a:zb(a)}}catch(_){Js.length=0,zu(_,t,1),p=tt(pn)}let S=p;if(y&&v!==!1){const _=Object.keys(y),{shapeFlag:R}=S;_.length&&R&7&&(o&&_.some(lh)&&(y=$b(y,o)),S=Br(S,y,!1,!0))}return n.dirs&&(S=Br(S,null,!1,!0),S.dirs=S.dirs?S.dirs.concat(n.dirs):n.dirs),n.transition&&sa(S,n.transition),p=S,iu(g),p}const zb=t=>{let e;for(const n in t)(n==="class"||n==="style"||Pu(n))&&((e||(e={}))[n]=t[n]);return e},$b=(t,e)=>{const n={};for(const i in t)(!lh(i)||!(i.slice(9)in e))&&(n[i]=t[i]);return n};function Hb(t,e,n){const{props:i,children:r,component:o}=t,{props:s,children:a,patchFlag:l}=e,u=o.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return i?Np(i,s,u):!!s;if(l&8){const c=e.dynamicProps;for(let f=0;f<c.length;f++){const d=c[f];if(m0(s,i,d)&&!Gu(u,d))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:i===s?!1:i?s?Np(i,s,u):!0:!!s;return!1}function Np(t,e,n){const i=Object.keys(e);if(i.length!==Object.keys(t).length)return!0;for(let r=0;r<i.length;r++){const o=i[r];if(m0(e,t,o)&&!Gu(n,o))return!0}return!1}function m0(t,e,n){const i=t[n],r=e[n];return n==="style"&&yt(i)&&yt(r)?!ch(i,r):i!==r}function Gb({vnode:t,parent:e},n){for(;e;){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===t&&(i.el=t.el),i===t)(t=e.vnode).el=n,e=e.parent;else break}}const g0={},v0=()=>Object.create(g0),_0=t=>Object.getPrototypeOf(t)===g0;function Wb(t,e,n,i=!1){const r={},o=v0();t.propsDefaults=Object.create(null),y0(t,e,r,o);for(const s in t.propsOptions[0])s in r||(r[s]=void 0);n?t.props=i?r:jx(r):t.type.props?t.props=r:t.props=o,t.attrs=o}function Xb(t,e,n,i){const{props:r,attrs:o,vnode:{patchFlag:s}}=t,a=mt(r),[l]=t.propsOptions;let u=!1;if((i||s>0)&&!(s&16)){if(s&8){const c=t.vnode.dynamicProps;for(let f=0;f<c.length;f++){let d=c[f];if(Gu(t.emitsOptions,d))continue;const h=e[d];if(l)if(xt(o,d))h!==o[d]&&(o[d]=h,u=!0);else{const m=Bn(d);r[m]=Ld(l,a,m,h,t,!1)}else h!==o[d]&&(o[d]=h,u=!0)}}}else{y0(t,e,r,o)&&(u=!0);let c;for(const f in a)(!e||!xt(e,f)&&((c=Hr(f))===f||!xt(e,c)))&&(l?n&&(n[f]!==void 0||n[c]!==void 0)&&(r[f]=Ld(l,a,f,void 0,t,!0)):delete r[f]);if(o!==a)for(const f in o)(!e||!xt(e,f))&&(delete o[f],u=!0)}u&&ki(t.attrs,"set","")}function y0(t,e,n,i){const[r,o]=t.propsOptions;let s=!1,a;if(e)for(let l in e){if(Ws(l))continue;const u=e[l];let c;r&&xt(r,c=Bn(l))?!o||!o.includes(c)?n[c]=u:(a||(a={}))[c]=u:Gu(t.emitsOptions,l)||(!(l in i)||u!==i[l])&&(i[l]=u,s=!0)}if(o){const l=mt(n),u=a||Pt;for(let c=0;c<o.length;c++){const f=o[c];n[f]=Ld(r,l,f,u[f],t,!xt(u,f))}}return s}function Ld(t,e,n,i,r,o){const s=t[n];if(s!=null){const a=xt(s,"default");if(a&&i===void 0){const l=s.default;if(s.type!==Function&&!s.skipFactory&&rt(l)){const{propsDefaults:u}=r;if(n in u)i=u[n];else{const c=Pa(r);i=u[n]=l.call(null,e),c()}}else i=l;r.ce&&r.ce._setProp(n,i)}s[0]&&(o&&!a?i=!1:s[1]&&(i===""||i===Hr(n))&&(i=!0))}return i}const Yb=new WeakMap;function x0(t,e,n=!1){const i=n?Yb:e.propsCache,r=i.get(t);if(r)return r;const o=t.props,s={},a=[];let l=!1;if(!rt(t)){const c=f=>{l=!0;const[d,h]=x0(f,e,!0);Kt(s,d),h&&a.push(...h)};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}if(!o&&!l)return yt(t)&&i.set(t,Ko),Ko;if(et(o))for(let c=0;c<o.length;c++){const f=Bn(o[c]);Dp(f)&&(s[f]=Pt)}else if(o)for(const c in o){const f=Bn(c);if(Dp(f)){const d=o[c],h=s[f]=et(d)||rt(d)?{type:d}:Kt({},d),m=h.type;let v=!1,g=!0;if(et(m))for(let p=0;p<m.length;++p){const y=m[p],S=rt(y)&&y.name;if(S==="Boolean"){v=!0;break}else S==="String"&&(g=!1)}else v=rt(m)&&m.name==="Boolean";h[0]=v,h[1]=g,(v||xt(h,"default"))&&a.push(f)}}const u=[s,a];return yt(t)&&i.set(t,u),u}function Dp(t){return t[0]!=="$"&&!Ws(t)}const bh=t=>t==="_"||t==="_ctx"||t==="$stable",Sh=t=>et(t)?t.map(ui):[ui(t)],qb=(t,e,n)=>{if(e._n)return e;const i=rn((...r)=>Sh(e(...r)),n);return i._c=!1,i},b0=(t,e,n)=>{const i=t._ctx;for(const r in t){if(bh(r))continue;const o=t[r];if(rt(o))e[r]=qb(r,o,i);else if(o!=null){const s=Sh(o);e[r]=()=>s}}},S0=(t,e)=>{const n=Sh(e);t.slots.default=()=>n},M0=(t,e,n)=>{for(const i in e)(n||!bh(i))&&(t[i]=e[i])},Kb=(t,e,n)=>{const i=t.slots=v0();if(t.vnode.shapeFlag&32){const r=e._;r?(M0(i,e,n),n&&vv(i,"_",r,!0)):b0(e,i)}else e&&S0(t,e)},Zb=(t,e,n)=>{const{vnode:i,slots:r}=t;let o=!0,s=Pt;if(i.shapeFlag&32){const a=e._;a?n&&a===1?o=!1:M0(r,e,n):(o=!e.$stable,b0(e,r)),s=e}else e&&(S0(t,e),s={default:1});if(o)for(const a in r)!bh(a)&&s[a]==null&&delete r[a]},dn=t1;function jb(t){return Jb(t)}function Jb(t,e){const n=Uu();n.__VUE__=!0;const{insert:i,remove:r,patchProp:o,createElement:s,createText:a,createComment:l,setText:u,setElementText:c,parentNode:f,nextSibling:d,setScopeId:h=gi,insertStaticContent:m}=t,v=(G,Y,L,U=null,V=null,Z=null,C=void 0,se=null,re=!!Y.dynamicChildren)=>{if(G===Y)return;G&&!ro(G,Y)&&(U=B(G),ne(G,V,Z,!0),G=null),Y.patchFlag===-2&&(re=!1,Y.dynamicChildren=null);const{type:oe,ref:ue,shapeFlag:D}=Y;switch(oe){case Wu:g(G,Y,L,U);break;case pn:p(G,Y,L,U);break;case Mc:G==null&&y(Y,L,U,C);break;case it:w(G,Y,L,U,V,Z,C,se,re);break;default:D&1?R(G,Y,L,U,V,Z,C,se,re):D&6?W(G,Y,L,U,V,Z,C,se,re):(D&64||D&128)&&oe.process(G,Y,L,U,V,Z,C,se,re,we)}ue!=null&&V?Zs(ue,G&&G.ref,Z,Y||G,!Y):ue==null&&G&&G.ref!=null&&Zs(G.ref,null,Z,G,!0)},g=(G,Y,L,U)=>{if(G==null)i(Y.el=a(Y.children),L,U);else{const V=Y.el=G.el;Y.children!==G.children&&u(V,Y.children)}},p=(G,Y,L,U)=>{G==null?i(Y.el=l(Y.children||""),L,U):Y.el=G.el},y=(G,Y,L,U)=>{[G.el,G.anchor]=m(G.children,Y,L,U,G.el,G.anchor)},S=({el:G,anchor:Y},L,U)=>{let V;for(;G&&G!==Y;)V=d(G),i(G,L,U),G=V;i(Y,L,U)},_=({el:G,anchor:Y})=>{let L;for(;G&&G!==Y;)L=d(G),r(G),G=L;r(Y)},R=(G,Y,L,U,V,Z,C,se,re)=>{if(Y.type==="svg"?C="svg":Y.type==="math"&&(C="mathml"),G==null)N(Y,L,U,V,Z,C,se,re);else{const oe=G.el&&G.el._isVueCE?G.el:null;try{oe&&oe._beginPatch(),b(G,Y,V,Z,C,se,re)}finally{oe&&oe._endPatch()}}},N=(G,Y,L,U,V,Z,C,se)=>{let re,oe;const{props:ue,shapeFlag:D,transition:T,dirs:j}=G;if(re=G.el=s(G.type,Z,ue&&ue.is,ue),D&8?c(re,G.children):D&16&&x(G.children,re,null,U,V,Sc(G,Z),C,se),j&&Xr(G,null,U,"created"),F(re,G,G.scopeId,C,U),ue){for(const Se in ue)Se!=="value"&&!Ws(Se)&&o(re,Se,null,ue[Se],Z,U);"value"in ue&&o(re,"value",null,ue.value,Z),(oe=ue.onVnodeBeforeMount)&&ii(oe,U,G)}j&&Xr(G,null,U,"beforeMount");const he=Qb(V,T);he&&T.beforeEnter(re),i(re,Y,L),((oe=ue&&ue.onVnodeMounted)||he||j)&&dn(()=>{oe&&ii(oe,U,G),he&&T.enter(re),j&&Xr(G,null,U,"mounted")},V)},F=(G,Y,L,U,V)=>{if(L&&h(G,L),U)for(let Z=0;Z<U.length;Z++)h(G,U[Z]);if(V){let Z=V.subTree;if(Y===Z||T0(Z.type)&&(Z.ssContent===Y||Z.ssFallback===Y)){const C=V.vnode;F(G,C,C.scopeId,C.slotScopeIds,V.parent)}}},x=(G,Y,L,U,V,Z,C,se,re=0)=>{for(let oe=re;oe<G.length;oe++){const ue=G[oe]=se?Bi(G[oe]):ui(G[oe]);v(null,ue,Y,L,U,V,Z,C,se)}},b=(G,Y,L,U,V,Z,C)=>{const se=Y.el=G.el;let{patchFlag:re,dynamicChildren:oe,dirs:ue}=Y;re|=G.patchFlag&16;const D=G.props||Pt,T=Y.props||Pt;let j;if(L&&Yr(L,!1),(j=T.onVnodeBeforeUpdate)&&ii(j,L,Y,G),ue&&Xr(Y,G,L,"beforeUpdate"),L&&Yr(L,!0),(D.innerHTML&&T.innerHTML==null||D.textContent&&T.textContent==null)&&c(se,""),oe?P(G.dynamicChildren,oe,se,L,U,Sc(Y,V),Z):C||O(G,Y,se,null,L,U,Sc(Y,V),Z,!1),re>0){if(re&16)M(se,D,T,L,V);else if(re&2&&D.class!==T.class&&o(se,"class",null,T.class,V),re&4&&o(se,"style",D.style,T.style,V),re&8){const he=Y.dynamicProps;for(let Se=0;Se<he.length;Se++){const pe=he[Se],ke=D[pe],Ue=T[pe];(Ue!==ke||pe==="value")&&o(se,pe,ke,Ue,V,L)}}re&1&&G.children!==Y.children&&c(se,Y.children)}else!C&&oe==null&&M(se,D,T,L,V);((j=T.onVnodeUpdated)||ue)&&dn(()=>{j&&ii(j,L,Y,G),ue&&Xr(Y,G,L,"updated")},U)},P=(G,Y,L,U,V,Z,C)=>{for(let se=0;se<Y.length;se++){const re=G[se],oe=Y[se],ue=re.el&&(re.type===it||!ro(re,oe)||re.shapeFlag&198)?f(re.el):L;v(re,oe,ue,null,U,V,Z,C,!0)}},M=(G,Y,L,U,V)=>{if(Y!==L){if(Y!==Pt)for(const Z in Y)!Ws(Z)&&!(Z in L)&&o(G,Z,Y[Z],null,V,U);for(const Z in L){if(Ws(Z))continue;const C=L[Z],se=Y[Z];C!==se&&Z!=="value"&&o(G,Z,se,C,V,U)}"value"in L&&o(G,"value",Y.value,L.value,V)}},w=(G,Y,L,U,V,Z,C,se,re)=>{const oe=Y.el=G?G.el:a(""),ue=Y.anchor=G?G.anchor:a("");let{patchFlag:D,dynamicChildren:T,slotScopeIds:j}=Y;j&&(se=se?se.concat(j):j),G==null?(i(oe,L,U),i(ue,L,U),x(Y.children||[],L,ue,V,Z,C,se,re)):D>0&&D&64&&T&&G.dynamicChildren&&G.dynamicChildren.length===T.length?(P(G.dynamicChildren,T,L,V,Z,C,se),(Y.key!=null||V&&Y===V.subTree)&&Mh(G,Y,!0)):O(G,Y,L,ue,V,Z,C,se,re)},W=(G,Y,L,U,V,Z,C,se,re)=>{Y.slotScopeIds=se,G==null?Y.shapeFlag&512?V.ctx.activate(Y,L,U,C,re):E(Y,L,U,V,Z,C,re):k(G,Y,re)},E=(G,Y,L,U,V,Z,C)=>{const se=G.component=a1(G,U,V);if($u(G)&&(se.ctx.renderer=we),l1(se,!1,C),se.asyncDep){if(V&&V.registerDep(se,A,C),!G.el){const re=se.subTree=tt(pn);p(null,re,Y,L),G.placeholder=re.el}}else A(se,G,Y,L,V,Z,C)},k=(G,Y,L)=>{const U=Y.component=G.component;if(Hb(G,Y,L))if(U.asyncDep&&!U.asyncResolved){I(U,Y,L);return}else U.next=Y,U.update();else Y.el=G.el,U.vnode=Y},A=(G,Y,L,U,V,Z,C)=>{const se=()=>{if(G.isMounted){let{next:D,bu:T,u:j,parent:he,vnode:Se}=G;{const ce=w0(G);if(ce){D&&(D.el=Se.el,I(G,D,C)),ce.asyncDep.then(()=>{dn(()=>{G.isUnmounted||oe()},V)});return}}let pe=D,ke;Yr(G,!1),D?(D.el=Se.el,I(G,D,C)):D=Se,T&&mc(T),(ke=D.props&&D.props.onVnodeBeforeUpdate)&&ii(ke,he,D,Se),Yr(G,!0);const Ue=Pp(G),ie=G.subTree;G.subTree=Ue,v(ie,Ue,f(ie.el),B(ie),G,V,Z),D.el=Ue.el,pe===null&&Gb(G,Ue.el),j&&dn(j,V),(ke=D.props&&D.props.onVnodeUpdated)&&dn(()=>ii(ke,he,D,Se),V)}else{let D;const{el:T,props:j}=Y,{bm:he,m:Se,parent:pe,root:ke,type:Ue}=G,ie=Jo(Y);Yr(G,!1),he&&mc(he),!ie&&(D=j&&j.onVnodeBeforeMount)&&ii(D,pe,Y),Yr(G,!0);{ke.ce&&ke.ce._hasShadowRoot()&&ke.ce._injectChildStyle(Ue);const ce=G.subTree=Pp(G);v(null,ce,L,U,G,V,Z),Y.el=ce.el}if(Se&&dn(Se,V),!ie&&(D=j&&j.onVnodeMounted)){const ce=Y;dn(()=>ii(D,pe,ce),V)}(Y.shapeFlag&256||pe&&Jo(pe.vnode)&&pe.vnode.shapeFlag&256)&&G.a&&dn(G.a,V),G.isMounted=!0,Y=L=U=null}};G.scope.on();const re=G.effect=new Sv(se);G.scope.off();const oe=G.update=re.run.bind(re),ue=G.job=re.runIfDirty.bind(re);ue.i=G,ue.id=G.uid,re.scheduler=()=>gh(ue),Yr(G,!0),oe()},I=(G,Y,L)=>{Y.component=G;const U=G.vnode.props;G.vnode=Y,G.next=null,Xb(G,Y.props,U,L),Zb(G,Y.children,L),Qi(),yp(G),er()},O=(G,Y,L,U,V,Z,C,se,re=!1)=>{const oe=G&&G.children,ue=G?G.shapeFlag:0,D=Y.children,{patchFlag:T,shapeFlag:j}=Y;if(T>0){if(T&128){q(oe,D,L,U,V,Z,C,se,re);return}else if(T&256){z(oe,D,L,U,V,Z,C,se,re);return}}j&8?(ue&16&&H(oe,V,Z),D!==oe&&c(L,D)):ue&16?j&16?q(oe,D,L,U,V,Z,C,se,re):H(oe,V,Z,!0):(ue&8&&c(L,""),j&16&&x(D,L,U,V,Z,C,se,re))},z=(G,Y,L,U,V,Z,C,se,re)=>{G=G||Ko,Y=Y||Ko;const oe=G.length,ue=Y.length,D=Math.min(oe,ue);let T;for(T=0;T<D;T++){const j=Y[T]=re?Bi(Y[T]):ui(Y[T]);v(G[T],j,L,null,V,Z,C,se,re)}oe>ue?H(G,V,Z,!0,!1,D):x(Y,L,U,V,Z,C,se,re,D)},q=(G,Y,L,U,V,Z,C,se,re)=>{let oe=0;const ue=Y.length;let D=G.length-1,T=ue-1;for(;oe<=D&&oe<=T;){const j=G[oe],he=Y[oe]=re?Bi(Y[oe]):ui(Y[oe]);if(ro(j,he))v(j,he,L,null,V,Z,C,se,re);else break;oe++}for(;oe<=D&&oe<=T;){const j=G[D],he=Y[T]=re?Bi(Y[T]):ui(Y[T]);if(ro(j,he))v(j,he,L,null,V,Z,C,se,re);else break;D--,T--}if(oe>D){if(oe<=T){const j=T+1,he=j<ue?Y[j].el:U;for(;oe<=T;)v(null,Y[oe]=re?Bi(Y[oe]):ui(Y[oe]),L,he,V,Z,C,se,re),oe++}}else if(oe>T)for(;oe<=D;)ne(G[oe],V,Z,!0),oe++;else{const j=oe,he=oe,Se=new Map;for(oe=he;oe<=T;oe++){const J=Y[oe]=re?Bi(Y[oe]):ui(Y[oe]);J.key!=null&&Se.set(J.key,oe)}let pe,ke=0;const Ue=T-he+1;let ie=!1,ce=0;const de=new Array(Ue);for(oe=0;oe<Ue;oe++)de[oe]=0;for(oe=j;oe<=D;oe++){const J=G[oe];if(ke>=Ue){ne(J,V,Z,!0);continue}let _e;if(J.key!=null)_e=Se.get(J.key);else for(pe=he;pe<=T;pe++)if(de[pe-he]===0&&ro(J,Y[pe])){_e=pe;break}_e===void 0?ne(J,V,Z,!0):(de[_e-he]=oe+1,_e>=ce?ce=_e:ie=!0,v(J,Y[_e],L,null,V,Z,C,se,re),ke++)}const Q=ie?e1(de):Ko;for(pe=Q.length-1,oe=Ue-1;oe>=0;oe--){const J=he+oe,_e=Y[J],Ie=Y[J+1],We=J+1<ue?Ie.el||E0(Ie):U;de[oe]===0?v(null,_e,L,We,V,Z,C,se,re):ie&&(pe<0||oe!==Q[pe]?te(_e,L,We,2):pe--)}}},te=(G,Y,L,U,V=null)=>{const{el:Z,type:C,transition:se,children:re,shapeFlag:oe}=G;if(oe&6){te(G.component.subTree,Y,L,U);return}if(oe&128){G.suspense.move(Y,L,U);return}if(oe&64){C.move(G,Y,L,we);return}if(C===it){i(Z,Y,L);for(let D=0;D<re.length;D++)te(re[D],Y,L,U);i(G.anchor,Y,L);return}if(C===Mc){S(G,Y,L);return}if(U!==2&&oe&1&&se)if(U===0)se.beforeEnter(Z),i(Z,Y,L),dn(()=>se.enter(Z),V);else{const{leave:D,delayLeave:T,afterLeave:j}=se,he=()=>{G.ctx.isUnmounted?r(Z):i(Z,Y,L)},Se=()=>{Z._isLeaving&&Z[ai](!0),D(Z,()=>{he(),j&&j()})};T?T(Z,he,Se):Se()}else i(Z,Y,L)},ne=(G,Y,L,U=!1,V=!1)=>{const{type:Z,props:C,ref:se,children:re,dynamicChildren:oe,shapeFlag:ue,patchFlag:D,dirs:T,cacheIndex:j}=G;if(D===-2&&(V=!1),se!=null&&(Qi(),Zs(se,null,L,G,!0),er()),j!=null&&(Y.renderCache[j]=void 0),ue&256){Y.ctx.deactivate(G);return}const he=ue&1&&T,Se=!Jo(G);let pe;if(Se&&(pe=C&&C.onVnodeBeforeUnmount)&&ii(pe,Y,G),ue&6)Te(G.component,L,U);else{if(ue&128){G.suspense.unmount(L,U);return}he&&Xr(G,null,Y,"beforeUnmount"),ue&64?G.type.remove(G,Y,L,we,U):oe&&!oe.hasOnce&&(Z!==it||D>0&&D&64)?H(oe,Y,L,!1,!0):(Z===it&&D&384||!V&&ue&16)&&H(re,Y,L),U&&ye(G)}(Se&&(pe=C&&C.onVnodeUnmounted)||he)&&dn(()=>{pe&&ii(pe,Y,G),he&&Xr(G,null,Y,"unmounted")},L)},ye=G=>{const{type:Y,el:L,anchor:U,transition:V}=G;if(Y===it){Pe(L,U);return}if(Y===Mc){_(G);return}const Z=()=>{r(L),V&&!V.persisted&&V.afterLeave&&V.afterLeave()};if(G.shapeFlag&1&&V&&!V.persisted){const{leave:C,delayLeave:se}=V,re=()=>C(L,Z);se?se(G.el,Z,re):re()}else Z()},Pe=(G,Y)=>{let L;for(;G!==Y;)L=d(G),r(G),G=L;r(Y)},Te=(G,Y,L)=>{const{bum:U,scope:V,job:Z,subTree:C,um:se,m:re,a:oe}=G;Lp(re),Lp(oe),U&&mc(U),V.stop(),Z&&(Z.flags|=8,ne(C,G,Y,L)),se&&dn(se,Y),dn(()=>{G.isUnmounted=!0},Y)},H=(G,Y,L,U=!1,V=!1,Z=0)=>{for(let C=Z;C<G.length;C++)ne(G[C],Y,L,U,V)},B=G=>{if(G.shapeFlag&6)return B(G.component.subTree);if(G.shapeFlag&128)return G.suspense.next();const Y=d(G.anchor||G.el),L=Y&&Y[Yv];return L?d(L):Y};let X=!1;const ve=(G,Y,L)=>{let U;G==null?Y._vnode&&(ne(Y._vnode,null,null,!0),U=Y._vnode.component):v(Y._vnode||null,G,Y,null,null,null,L),Y._vnode=G,X||(X=!0,yp(U),$v(),X=!1)},we={p:v,um:ne,m:te,r:ye,mt:E,mc:x,pc:O,pbc:P,n:B,o:t};return{render:ve,hydrate:void 0,createApp:Ob(ve)}}function Sc({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Yr({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function Qb(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Mh(t,e,n=!1){const i=t.children,r=e.children;if(et(i)&&et(r))for(let o=0;o<i.length;o++){const s=i[o];let a=r[o];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[o]=Bi(r[o]),a.el=s.el),!n&&a.patchFlag!==-2&&Mh(s,a)),a.type===Wu&&(a.patchFlag===-1&&(a=r[o]=Bi(a)),a.el=s.el),a.type===pn&&!a.el&&(a.el=s.el)}}function e1(t){const e=t.slice(),n=[0];let i,r,o,s,a;const l=t.length;for(i=0;i<l;i++){const u=t[i];if(u!==0){if(r=n[n.length-1],t[r]<u){e[i]=r,n.push(i);continue}for(o=0,s=n.length-1;o<s;)a=o+s>>1,t[n[a]]<u?o=a+1:s=a;u<t[n[o]]&&(o>0&&(e[i]=n[o-1]),n[o]=i)}}for(o=n.length,s=n[o-1];o-- >0;)n[o]=s,s=e[s];return n}function w0(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:w0(e)}function Lp(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}function E0(t){if(t.placeholder)return t.placeholder;const e=t.component;return e?E0(e.subTree):null}const T0=t=>t.__isSuspense;function t1(t,e){e&&e.pendingBranch?et(t)?e.effects.push(...t):e.effects.push(t):cb(t)}const it=Symbol.for("v-fgt"),Wu=Symbol.for("v-txt"),pn=Symbol.for("v-cmt"),Mc=Symbol.for("v-stc"),Js=[];let xn=null;function ae(t=!1){Js.push(xn=t?null:[])}function n1(){Js.pop(),xn=Js[Js.length-1]||null}let as=1;function su(t,e=!1){as+=t,t<0&&xn&&e&&(xn.hasOnce=!0)}function C0(t){return t.dynamicChildren=as>0?xn||Ko:null,n1(),as>0&&xn&&xn.push(t),t}function ge(t,e,n,i,r,o){return C0(K(t,e,n,i,r,o,!0))}function tn(t,e,n,i,r){return C0(tt(t,e,n,i,r,!0))}function aa(t){return t?t.__v_isVNode===!0:!1}function ro(t,e){return t.type===e.type&&t.key===e.key}const A0=({key:t})=>t??null,Ll=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Ot(t)||Ft(t)||rt(t)?{i:on,r:t,k:e,f:!!n}:t:null);function K(t,e=null,n=null,i=0,r=null,o=t===it?0:1,s=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&A0(e),ref:e&&Ll(e),scopeId:Gv,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:o,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:on};return a?(wh(l,n),o&128&&t.normalize(l)):n&&(l.shapeFlag|=Ot(n)?8:16),as>0&&!s&&xn&&(l.patchFlag>0||o&6)&&l.patchFlag!==32&&xn.push(l),l}const tt=i1;function i1(t,e=null,n=null,i=0,r=null,o=!1){if((!t||t===o0)&&(t=pn),aa(t)){const a=Br(t,e,!0);return n&&wh(a,n),as>0&&!o&&xn&&(a.shapeFlag&6?xn[xn.indexOf(t)]=a:xn.push(a)),a.patchFlag=-2,a}if(f1(t)&&(t=t.__vccOpts),e){e=r1(e);let{class:a,style:l}=e;a&&!Ot(a)&&(e.class=lt(a)),yt(l)&&(Vu(l)&&!et(l)&&(l=Kt({},l)),e.style=nt(l))}const s=Ot(t)?1:T0(t)?128:qv(t)?64:yt(t)?4:rt(t)?2:0;return K(t,e,n,i,r,s,o,!0)}function r1(t){return t?Vu(t)||_0(t)?Kt({},t):t:null}function Br(t,e,n=!1,i=!1){const{props:r,ref:o,patchFlag:s,children:a,transition:l}=t,u=e?la(r||{},e):r,c={__v_isVNode:!0,__v_skip:!0,type:t.type,props:u,key:u&&A0(u),ref:e&&e.ref?n&&o?et(o)?o.concat(Ll(e)):[o,Ll(e)]:Ll(e):o,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==it?s===-1?16:s|16:s,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Br(t.ssContent),ssFallback:t.ssFallback&&Br(t.ssFallback),placeholder:t.placeholder,el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&i&&sa(c,l.clone(c)),c}function hi(t=" ",e=0){return tt(Wu,null,t,e)}function $e(t="",e=!1){return e?(ae(),tn(pn,null,t)):tt(pn,null,t)}function ui(t){return t==null||typeof t=="boolean"?tt(pn):et(t)?tt(it,null,t.slice()):aa(t)?Bi(t):tt(Wu,null,String(t))}function Bi(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Br(t)}function wh(t,e){let n=0;const{shapeFlag:i}=t;if(e==null)e=null;else if(et(e))n=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),wh(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!_0(e)?e._ctx=on:r===3&&on&&(on.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else rt(e)?(e={default:e,_ctx:on},n=32):(e=String(e),i&64?(n=16,e=[hi(e)]):n=8);t.children=e,t.shapeFlag|=n}function la(...t){const e={};for(let n=0;n<t.length;n++){const i=t[n];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=lt([e.class,i.class]));else if(r==="style")e.style=nt([e.style,i.style]);else if(Pu(r)){const o=e[r],s=i[r];s&&o!==s&&!(et(o)&&o.includes(s))&&(e[r]=o?[].concat(o,s):s)}else r!==""&&(e[r]=i[r])}return e}function ii(t,e,n,i=null){Jn(t,e,7,[n,i])}const o1=h0();let s1=0;function a1(t,e,n){const i=t.type,r=(e?e.appContext:t.appContext)||o1,o={uid:s1++,vnode:t,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new bv(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:x0(i,r),emitsOptions:p0(i,r),emit:null,emitted:null,propsDefaults:Pt,inheritAttrs:i.inheritAttrs,ctx:Pt,data:Pt,props:Pt,attrs:Pt,slots:Pt,refs:Pt,setupState:Pt,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return o.ctx={_:o},o.root=e?e.root:o,o.emit=kb.bind(null,o),t.ce&&t.ce(o),o}let mn=null;const Mi=()=>mn||on;let au,Ud;{const t=Uu(),e=(n,i)=>{let r;return(r=t[n])||(r=t[n]=[]),r.push(i),o=>{r.length>1?r.forEach(s=>s(o)):r[0](o)}};au=e("__VUE_INSTANCE_SETTERS__",n=>mn=n),Ud=e("__VUE_SSR_SETTERS__",n=>ua=n)}const Pa=t=>{const e=mn;return au(t),t.scope.on(),()=>{t.scope.off(),au(e)}},Up=()=>{mn&&mn.scope.off(),au(null)};function R0(t){return t.vnode.shapeFlag&4}let ua=!1;function l1(t,e=!1,n=!1){e&&Ud(e);const{props:i,children:r}=t.vnode,o=R0(t);Wb(t,i,o,e),Kb(t,r,n||e);const s=o?u1(t,e):void 0;return e&&Ud(!1),s}function u1(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,Rb);const{setup:i}=n;if(i){Qi();const r=t.setupContext=i.length>1?P0(t):null,o=Pa(t),s=Ia(i,t,0,[t.props,r]),a=pv(s);if(er(),o(),(a||t.sp)&&!Jo(t)&&t0(t),a){if(s.then(Up,Up),e)return s.then(l=>{Fp(t,l)}).catch(l=>{zu(l,t,0)});t.asyncDep=s}else Fp(t,s)}else I0(t)}function Fp(t,e,n){rt(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:yt(e)&&(t.setupState=Ov(e)),I0(t)}function I0(t,e,n){const i=t.type;t.render||(t.render=i.render||gi);{const r=Pa(t);Qi();try{Pb(t)}finally{er(),r()}}}const c1={get(t,e){return hn(t,"get",""),t[e]}};function P0(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,c1),slots:t.slots,emit:t.emit,expose:e}}function Xu(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(Ov(go(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in js)return js[n](t)},has(e,n){return n in e||n in js}})):t.proxy}function d1(t,e=!0){return rt(t)?t.displayName||t.name:t.name||e&&t.__name}function f1(t){return rt(t)&&"__vccOpts"in t}const De=(t,e)=>ob(t,e,ua);function wt(t,e,n){try{su(-1);const i=arguments.length;return i===2?yt(e)&&!et(e)?aa(e)?tt(t,null,[e]):tt(t,e):tt(t,null,e):(i>3?n=Array.prototype.slice.call(arguments,2):i===3&&aa(n)&&(n=[n]),tt(t,e,n))}finally{su(1)}}function h1(t,e){const n=t.memo;if(n.length!=e.length)return!1;for(let i=0;i<n.length;i++)if(qi(n[i],e[i]))return!1;return as>0&&xn&&xn.push(t),!0}const p1="3.5.29";let Fd;const Op=typeof window<"u"&&window.trustedTypes;if(Op)try{Fd=Op.createPolicy("vue",{createHTML:t=>t})}catch{}const N0=Fd?t=>Fd.createHTML(t):t=>t,m1="http://www.w3.org/2000/svg",g1="http://www.w3.org/1998/Math/MathML",Oi=typeof document<"u"?document:null,Bp=Oi&&Oi.createElement("template"),v1={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,i)=>{const r=e==="svg"?Oi.createElementNS(m1,t):e==="mathml"?Oi.createElementNS(g1,t):n?Oi.createElement(t,{is:n}):Oi.createElement(t);return t==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:t=>Oi.createTextNode(t),createComment:t=>Oi.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Oi.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,i,r,o){const s=n?n.previousSibling:e.lastChild;if(r&&(r===o||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===o||!(r=r.nextSibling)););else{Bp.innerHTML=N0(i==="svg"?`<svg>${t}</svg>`:i==="mathml"?`<math>${t}</math>`:t);const a=Bp.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[s?s.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},mr="transition",ws="animation",ca=Symbol("_vtc"),D0={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},_1=Kt({},Zv,D0),y1=t=>(t.displayName="Transition",t.props=_1,t),kp=y1((t,{slots:e})=>wt(_b,x1(t),e)),qr=(t,e=[])=>{et(t)?t.forEach(n=>n(...e)):t&&t(...e)},Vp=t=>t?et(t)?t.some(e=>e.length>1):t.length>1:!1;function x1(t){const e={};for(const w in t)w in D0||(e[w]=t[w]);if(t.css===!1)return e;const{name:n="v",type:i,duration:r,enterFromClass:o=`${n}-enter-from`,enterActiveClass:s=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:l=o,appearActiveClass:u=s,appearToClass:c=a,leaveFromClass:f=`${n}-leave-from`,leaveActiveClass:d=`${n}-leave-active`,leaveToClass:h=`${n}-leave-to`}=t,m=b1(r),v=m&&m[0],g=m&&m[1],{onBeforeEnter:p,onEnter:y,onEnterCancelled:S,onLeave:_,onLeaveCancelled:R,onBeforeAppear:N=p,onAppear:F=y,onAppearCancelled:x=S}=e,b=(w,W,E,k)=>{w._enterCancelled=k,Kr(w,W?c:a),Kr(w,W?u:s),E&&E()},P=(w,W)=>{w._isLeaving=!1,Kr(w,f),Kr(w,h),Kr(w,d),W&&W()},M=w=>(W,E)=>{const k=w?F:y,A=()=>b(W,w,E);qr(k,[W,A]),zp(()=>{Kr(W,w?l:o),Ri(W,w?c:a),Vp(k)||$p(W,i,v,A)})};return Kt(e,{onBeforeEnter(w){qr(p,[w]),Ri(w,o),Ri(w,s)},onBeforeAppear(w){qr(N,[w]),Ri(w,l),Ri(w,u)},onEnter:M(!1),onAppear:M(!0),onLeave(w,W){w._isLeaving=!0;const E=()=>P(w,W);Ri(w,f),w._enterCancelled?(Ri(w,d),Wp(w)):(Wp(w),Ri(w,d)),zp(()=>{w._isLeaving&&(Kr(w,f),Ri(w,h),Vp(_)||$p(w,i,g,E))}),qr(_,[w,E])},onEnterCancelled(w){b(w,!1,void 0,!0),qr(S,[w])},onAppearCancelled(w){b(w,!0,void 0,!0),qr(x,[w])},onLeaveCancelled(w){P(w),qr(R,[w])}})}function b1(t){if(t==null)return null;if(yt(t))return[wc(t.enter),wc(t.leave)];{const e=wc(t);return[e,e]}}function wc(t){return Mx(t)}function Ri(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[ca]||(t[ca]=new Set)).add(e)}function Kr(t,e){e.split(/\s+/).forEach(i=>i&&t.classList.remove(i));const n=t[ca];n&&(n.delete(e),n.size||(t[ca]=void 0))}function zp(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let S1=0;function $p(t,e,n,i){const r=t._endId=++S1,o=()=>{r===t._endId&&i()};if(n!=null)return setTimeout(o,n);const{type:s,timeout:a,propCount:l}=M1(t,e);if(!s)return i();const u=s+"end";let c=0;const f=()=>{t.removeEventListener(u,d),o()},d=h=>{h.target===t&&++c>=l&&f()};setTimeout(()=>{c<l&&f()},a+1),t.addEventListener(u,d)}function M1(t,e){const n=window.getComputedStyle(t),i=m=>(n[m]||"").split(", "),r=i(`${mr}Delay`),o=i(`${mr}Duration`),s=Hp(r,o),a=i(`${ws}Delay`),l=i(`${ws}Duration`),u=Hp(a,l);let c=null,f=0,d=0;e===mr?s>0&&(c=mr,f=s,d=o.length):e===ws?u>0&&(c=ws,f=u,d=l.length):(f=Math.max(s,u),c=f>0?s>u?mr:ws:null,d=c?c===mr?o.length:l.length:0);const h=c===mr&&/\b(?:transform|all)(?:,|$)/.test(i(`${mr}Property`).toString());return{type:c,timeout:f,propCount:d,hasTransform:h}}function Hp(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,i)=>Gp(n)+Gp(t[i])))}function Gp(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function Wp(t){return(t?t.ownerDocument:document).body.offsetHeight}function w1(t,e,n){const i=t[ca];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const lu=Symbol("_vod"),L0=Symbol("_vsh"),Gi={name:"show",beforeMount(t,{value:e},{transition:n}){t[lu]=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):Es(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:i}){!e!=!n&&(i?e?(i.beforeEnter(t),Es(t,!0),i.enter(t)):i.leave(t,()=>{Es(t,!1)}):Es(t,e))},beforeUnmount(t,{value:e}){Es(t,e)}};function Es(t,e){t.style.display=e?t[lu]:"none",t[L0]=!e}const E1=Symbol(""),T1=/(?:^|;)\s*display\s*:/;function C1(t,e,n){const i=t.style,r=Ot(n);let o=!1;if(n&&!r){if(e)if(Ot(e))for(const s of e.split(";")){const a=s.slice(0,s.indexOf(":")).trim();n[a]==null&&Ul(i,a,"")}else for(const s in e)n[s]==null&&Ul(i,s,"");for(const s in n)s==="display"&&(o=!0),Ul(i,s,n[s])}else if(r){if(e!==n){const s=i[E1];s&&(n+=";"+s),i.cssText=n,o=T1.test(n)}}else e&&t.removeAttribute("style");lu in t&&(t[lu]=o?i.display:"",t[L0]&&(i.display="none"))}const Xp=/\s*!important$/;function Ul(t,e,n){if(et(n))n.forEach(i=>Ul(t,e,i));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const i=A1(t,e);Xp.test(n)?t.setProperty(Hr(i),n.replace(Xp,""),"important"):t[i]=n}}const Yp=["Webkit","Moz","ms"],Ec={};function A1(t,e){const n=Ec[e];if(n)return n;let i=Bn(e);if(i!=="filter"&&i in t)return Ec[e]=i;i=Lu(i);for(let r=0;r<Yp.length;r++){const o=Yp[r]+i;if(o in t)return Ec[e]=o}return e}const qp="http://www.w3.org/1999/xlink";function Kp(t,e,n,i,r,o=Ix(e)){i&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(qp,e.slice(6,e.length)):t.setAttributeNS(qp,e,n):n==null||o&&!_v(n)?t.removeAttribute(e):t.setAttribute(e,o?"":Zn(n)?String(n):n)}function Zp(t,e,n,i,r){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?N0(n):n);return}const o=t.tagName;if(e==="value"&&o!=="PROGRESS"&&!o.includes("-")){const a=o==="OPTION"?t.getAttribute("value")||"":t.value,l=n==null?t.type==="checkbox"?"on":"":String(n);(a!==l||!("_value"in t))&&(t.value=l),n==null&&t.removeAttribute(e),t._value=n;return}let s=!1;if(n===""||n==null){const a=typeof t[e];a==="boolean"?n=_v(n):n==null&&a==="string"?(n="",s=!0):a==="number"&&(n=0,s=!0)}try{t[e]=n}catch{}s&&t.removeAttribute(r||e)}function R1(t,e,n,i){t.addEventListener(e,n,i)}function I1(t,e,n,i){t.removeEventListener(e,n,i)}const jp=Symbol("_vei");function P1(t,e,n,i,r=null){const o=t[jp]||(t[jp]={}),s=o[e];if(i&&s)s.value=i;else{const[a,l]=N1(e);if(i){const u=o[e]=U1(i,r);R1(t,a,u,l)}else s&&(I1(t,a,s,l),o[e]=void 0)}}const Jp=/(?:Once|Passive|Capture)$/;function N1(t){let e;if(Jp.test(t)){e={};let i;for(;i=t.match(Jp);)t=t.slice(0,t.length-i[0].length),e[i[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Hr(t.slice(2)),e]}let Tc=0;const D1=Promise.resolve(),L1=()=>Tc||(D1.then(()=>Tc=0),Tc=Date.now());function U1(t,e){const n=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=n.attached)return;Jn(F1(i,n.value),e,5,[i])};return n.value=t,n.attached=L1(),n}function F1(t,e){if(et(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(i=>r=>!r._stopped&&i&&i(r))}else return e}const Qp=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,O1=(t,e,n,i,r,o)=>{const s=r==="svg";e==="class"?w1(t,i,s):e==="style"?C1(t,n,i):Pu(e)?lh(e)||P1(t,e,n,i,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):B1(t,e,i,s))?(Zp(t,e,i),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Kp(t,e,i,s,o,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!Ot(i))?Zp(t,Bn(e),i,o,e):(e==="true-value"?t._trueValue=i:e==="false-value"&&(t._falseValue=i),Kp(t,e,i,s))};function B1(t,e,n,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in t&&Qp(e)&&rt(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&t.tagName==="IFRAME"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=t.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return Qp(e)&&Ot(n)?!1:e in t}const k1=["ctrl","shift","alt","meta"],V1={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>k1.some(n=>t[`${n}Key`]&&!e.includes(n))},Ve=(t,e)=>{if(!t)return t;const n=t._withMods||(t._withMods={}),i=e.join(".");return n[i]||(n[i]=((r,...o)=>{for(let s=0;s<e.length;s++){const a=V1[e[s]];if(a&&a(r,e))return}return t(r,...o)}))},z1={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},$1=(t,e)=>{const n=t._withKeys||(t._withKeys={}),i=e.join(".");return n[i]||(n[i]=(r=>{if(!("key"in r))return;const o=Hr(r.key);if(e.some(s=>s===o||z1[s]===o))return t(r)}))},H1=Kt({patchProp:O1},v1);let em;function G1(){return em||(em=jb(H1))}const W1=((...t)=>{const e=G1().createApp(...t),{mount:n}=e;return e.mount=i=>{const r=Y1(i);if(!r)return;const o=e._component;!rt(o)&&!o.render&&!o.template&&(o.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const s=n(r,!1,X1(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),s},e});function X1(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function Y1(t){return Ot(t)?document.querySelector(t):t}let U0;const Yu=t=>U0=t,F0=Symbol();function Od(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var Qs;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(Qs||(Qs={}));function q1(){const t=Fu(!0),e=t.run(()=>Ne({}));let n=[],i=[];const r=go({install(o){Yu(r),r._a=o,o.provide(F0,r),o.config.globalProperties.$pinia=r,i.forEach(s=>n.push(s)),i=[]},use(o){return this._a?n.push(o):i.push(o),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return r}const O0=()=>{};function tm(t,e,n,i=O0){t.add(e);const r=()=>{t.delete(e)&&i()};return!n&&Ou()&&Xs(r),r}function Po(t,...e){t.forEach(n=>{n(...e)})}const K1=t=>t(),nm=Symbol(),Cc=Symbol();function Bd(t,e){t instanceof Map&&e instanceof Map?e.forEach((n,i)=>t.set(i,n)):t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const i=e[n],r=t[n];Od(r)&&Od(i)&&t.hasOwnProperty(n)&&!Ft(i)&&!Ki(i)?t[n]=Bd(r,i):t[n]=i}return t}const Z1=Symbol();function j1(t){return!Od(t)||!Object.prototype.hasOwnProperty.call(t,Z1)}const{assign:wr}=Object;function J1(t){return!!(Ft(t)&&t.effect)}function Q1(t,e,n,i){const{state:r,actions:o,getters:s}=e,a=n.state.value[t];let l;function u(){a||(n.state.value[t]=r?r():{});const c=Bv(n.state.value[t]);return wr(c,o,Object.keys(s||{}).reduce((f,d)=>(f[d]=go(De(()=>{Yu(n);const h=n._s.get(t);return s[d].call(h,h)})),f),{}))}return l=B0(t,u,e,n,i,!0),l}function B0(t,e,n={},i,r,o){let s;const a=wr({actions:{}},n),l={deep:!0};let u,c,f=new Set,d=new Set,h;const m=i.state.value[t];!o&&!m&&(i.state.value[t]={});let v;function g(x){let b;u=c=!1,typeof x=="function"?(x(i.state.value[t]),b={type:Qs.patchFunction,storeId:t,events:h}):(Bd(i.state.value[t],x),b={type:Qs.patchObject,payload:x,storeId:t,events:h});const P=v=Symbol();qt().then(()=>{v===P&&(u=!0)}),c=!0,Po(f,b,i.state.value[t])}const p=o?function(){const{state:b}=n,P=b?b():{};this.$patch(M=>{wr(M,P)})}:O0;function y(){s.stop(),f.clear(),d.clear(),i._s.delete(t)}const S=(x,b="")=>{if(nm in x)return x[Cc]=b,x;const P=function(){Yu(i);const M=Array.from(arguments),w=new Set,W=new Set;function E(I){w.add(I)}function k(I){W.add(I)}Po(d,{args:M,name:P[Cc],store:R,after:E,onError:k});let A;try{A=x.apply(this&&this.$id===t?this:R,M)}catch(I){throw Po(W,I),I}return A instanceof Promise?A.then(I=>(Po(w,I),I)).catch(I=>(Po(W,I),Promise.reject(I))):(Po(w,A),A)};return P[nm]=!0,P[Cc]=b,P},_={_p:i,$id:t,$onAction:tm.bind(null,d),$patch:g,$reset:p,$subscribe(x,b={}){const P=tm(f,x,b.detached,()=>M()),M=s.run(()=>at(()=>i.state.value[t],w=>{(b.flush==="sync"?c:u)&&x({storeId:t,type:Qs.direct,events:h},w)},wr({},l,b)));return P},$dispose:y},R=Fr(_);i._s.set(t,R);const F=(i._a&&i._a.runWithContext||K1)(()=>i._e.run(()=>(s=Fu()).run(()=>e({action:S}))));for(const x in F){const b=F[x];if(Ft(b)&&!J1(b)||Ki(b))o||(m&&j1(b)&&(Ft(b)?b.value=m[x]:Bd(b,m[x])),i.state.value[t][x]=b);else if(typeof b=="function"){const P=S(b,x);F[x]=P,a.actions[x]=b}}return wr(R,F),wr(mt(R),F),Object.defineProperty(R,"$state",{get:()=>i.state.value[t],set:x=>{g(b=>{wr(b,x)})}}),i._p.forEach(x=>{wr(R,s.run(()=>x({store:R,app:i._a,pinia:i,options:a})))}),m&&o&&n.hydrate&&n.hydrate(R.$state,m),u=!0,c=!0,R}function eS(t,e,n){let i;const r=typeof e=="function";i=r?n:e;function o(s,a){const l=db();return s=s||(l?Pn(F0,null):null),s&&Yu(s),s=U0,s._s.has(t)||(r?B0(t,e,i,s):Q1(t,i,s)),s._s.get(t)}return o.$id=t,o}const Eh="183",tS=0,im=1,nS=2,Fl=1,iS=2,Bs=3,kr=0,Tn=1,zi=2,Zi=0,Qo=1,rm=2,om=3,sm=4,rS=5,oo=100,oS=101,sS=102,aS=103,lS=104,uS=200,cS=201,dS=202,fS=203,kd=204,Vd=205,hS=206,pS=207,mS=208,gS=209,vS=210,_S=211,yS=212,xS=213,bS=214,zd=0,$d=1,Hd=2,ls=3,Gd=4,Wd=5,Xd=6,Yd=7,k0=0,SS=1,MS=2,vi=0,V0=1,z0=2,$0=3,H0=4,G0=5,W0=6,X0=7,Y0=300,So=301,us=302,Ac=303,Rc=304,qu=306,qd=1e3,Wi=1001,Kd=1002,sn=1003,wS=1004,Ya=1005,Rt=1006,Ic=1007,co=1008,yn=1009,q0=1010,K0=1011,da=1012,Th=1013,bi=1014,pi=1015,ir=1016,Ch=1017,Ah=1018,fa=1020,Z0=35902,j0=35899,J0=1021,Q0=1022,bn=1023,rr=1026,fo=1027,e_=1028,Rh=1029,cs=1030,Ih=1031,Ph=1033,Ol=33776,Bl=33777,kl=33778,Vl=33779,Zd=35840,jd=35841,Jd=35842,Qd=35843,ef=36196,tf=37492,nf=37496,rf=37488,of=37489,sf=37490,af=37491,lf=37808,uf=37809,cf=37810,df=37811,ff=37812,hf=37813,pf=37814,mf=37815,gf=37816,vf=37817,_f=37818,yf=37819,xf=37820,bf=37821,Sf=36492,Mf=36494,wf=36495,Ef=36283,Tf=36284,Cf=36285,Af=36286,ES=3200,TS=0,CS=1,Pr="",On="srgb",Vr="srgb-linear",uu="linear",Mt="srgb",No=7680,am=519,AS=512,RS=513,IS=514,Nh=515,PS=516,NS=517,Dh=518,DS=519,lm=35044,um="300 es",mi=2e3,cu=2001;function LS(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function du(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function US(){const t=du("canvas");return t.style.display="block",t}const cm={};function dm(...t){const e="THREE."+t.shift();console.log(e,...t)}function t_(t){const e=t[0];if(typeof e=="string"&&e.startsWith("TSL:")){const n=t[1];n&&n.isStackTrace?t[0]+=" "+n.getLocation():t[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return t}function st(...t){t=t_(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.warn(n.getError(e)):console.warn(e,...t)}}function _t(...t){t=t_(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.error(n.getError(e)):console.error(e,...t)}}function fu(...t){const e=t.join(" ");e in cm||(cm[e]=!0,st(...t))}function FS(t,e,n){return new Promise(function(i,r){function o(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(o,n);break;default:i()}}setTimeout(o,n)})}const OS={[zd]:$d,[Hd]:Xd,[Gd]:Yd,[ls]:Wd,[$d]:zd,[Xd]:Hd,[Yd]:Gd,[Wd]:ls};class ys{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const o=r.indexOf(n);o!==-1&&r.splice(o,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let o=0,s=r.length;o<s;o++)r[o].call(this,e);e.target=null}}}const un=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Pc=Math.PI/180,Rf=180/Math.PI;function Na(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(un[t&255]+un[t>>8&255]+un[t>>16&255]+un[t>>24&255]+"-"+un[e&255]+un[e>>8&255]+"-"+un[e>>16&15|64]+un[e>>24&255]+"-"+un[n&63|128]+un[n>>8&255]+"-"+un[n>>16&255]+un[n>>24&255]+un[i&255]+un[i>>8&255]+un[i>>16&255]+un[i>>24&255]).toLowerCase()}function pt(t,e,n){return Math.max(e,Math.min(n,t))}function BS(t,e){return(t%e+e)%e}function Nc(t,e,n){return(1-n)*t+n*e}function Ts(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function Sn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class Tt{constructor(e=0,n=0){Tt.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=pt(this.x,e.x,n.x),this.y=pt(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=pt(this.x,e,n),this.y=pt(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(pt(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(pt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),o=this.x-e.x,s=this.y-e.y;return this.x=o*i-s*r+e.x,this.y=o*r+s*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class xs{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,o,s,a){let l=i[r+0],u=i[r+1],c=i[r+2],f=i[r+3],d=o[s+0],h=o[s+1],m=o[s+2],v=o[s+3];if(f!==v||l!==d||u!==h||c!==m){let g=l*d+u*h+c*m+f*v;g<0&&(d=-d,h=-h,m=-m,v=-v,g=-g);let p=1-a;if(g<.9995){const y=Math.acos(g),S=Math.sin(y);p=Math.sin(p*y)/S,a=Math.sin(a*y)/S,l=l*p+d*a,u=u*p+h*a,c=c*p+m*a,f=f*p+v*a}else{l=l*p+d*a,u=u*p+h*a,c=c*p+m*a,f=f*p+v*a;const y=1/Math.sqrt(l*l+u*u+c*c+f*f);l*=y,u*=y,c*=y,f*=y}}e[n]=l,e[n+1]=u,e[n+2]=c,e[n+3]=f}static multiplyQuaternionsFlat(e,n,i,r,o,s){const a=i[r],l=i[r+1],u=i[r+2],c=i[r+3],f=o[s],d=o[s+1],h=o[s+2],m=o[s+3];return e[n]=a*m+c*f+l*h-u*d,e[n+1]=l*m+c*d+u*f-a*h,e[n+2]=u*m+c*h+a*d-l*f,e[n+3]=c*m-a*f-l*d-u*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,o=e._z,s=e._order,a=Math.cos,l=Math.sin,u=a(i/2),c=a(r/2),f=a(o/2),d=l(i/2),h=l(r/2),m=l(o/2);switch(s){case"XYZ":this._x=d*c*f+u*h*m,this._y=u*h*f-d*c*m,this._z=u*c*m+d*h*f,this._w=u*c*f-d*h*m;break;case"YXZ":this._x=d*c*f+u*h*m,this._y=u*h*f-d*c*m,this._z=u*c*m-d*h*f,this._w=u*c*f+d*h*m;break;case"ZXY":this._x=d*c*f-u*h*m,this._y=u*h*f+d*c*m,this._z=u*c*m+d*h*f,this._w=u*c*f-d*h*m;break;case"ZYX":this._x=d*c*f-u*h*m,this._y=u*h*f+d*c*m,this._z=u*c*m-d*h*f,this._w=u*c*f+d*h*m;break;case"YZX":this._x=d*c*f+u*h*m,this._y=u*h*f+d*c*m,this._z=u*c*m-d*h*f,this._w=u*c*f-d*h*m;break;case"XZY":this._x=d*c*f-u*h*m,this._y=u*h*f-d*c*m,this._z=u*c*m+d*h*f,this._w=u*c*f+d*h*m;break;default:st("Quaternion: .setFromEuler() encountered an unknown order: "+s)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],o=n[8],s=n[1],a=n[5],l=n[9],u=n[2],c=n[6],f=n[10],d=i+a+f;if(d>0){const h=.5/Math.sqrt(d+1);this._w=.25/h,this._x=(c-l)*h,this._y=(o-u)*h,this._z=(s-r)*h}else if(i>a&&i>f){const h=2*Math.sqrt(1+i-a-f);this._w=(c-l)/h,this._x=.25*h,this._y=(r+s)/h,this._z=(o+u)/h}else if(a>f){const h=2*Math.sqrt(1+a-i-f);this._w=(o-u)/h,this._x=(r+s)/h,this._y=.25*h,this._z=(l+c)/h}else{const h=2*Math.sqrt(1+f-i-a);this._w=(s-r)/h,this._x=(o+u)/h,this._y=(l+c)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(pt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,o=e._z,s=e._w,a=n._x,l=n._y,u=n._z,c=n._w;return this._x=i*c+s*a+r*u-o*l,this._y=r*c+s*l+o*a-i*u,this._z=o*c+s*u+i*l-r*a,this._w=s*c-i*a-r*l-o*u,this._onChangeCallback(),this}slerp(e,n){let i=e._x,r=e._y,o=e._z,s=e._w,a=this.dot(e);a<0&&(i=-i,r=-r,o=-o,s=-s,a=-a);let l=1-n;if(a<.9995){const u=Math.acos(a),c=Math.sin(u);l=Math.sin(l*u)/c,n=Math.sin(n*u)/c,this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+o*n,this._w=this._w*l+s*n,this._onChangeCallback()}else this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+o*n,this._w=this._w*l+s*n,this.normalize();return this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),o=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),o*Math.sin(n),o*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Me{constructor(e=0,n=0,i=0){Me.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(fm.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(fm.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,o=e.elements;return this.x=o[0]*n+o[3]*i+o[6]*r,this.y=o[1]*n+o[4]*i+o[7]*r,this.z=o[2]*n+o[5]*i+o[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,o=e.elements,s=1/(o[3]*n+o[7]*i+o[11]*r+o[15]);return this.x=(o[0]*n+o[4]*i+o[8]*r+o[12])*s,this.y=(o[1]*n+o[5]*i+o[9]*r+o[13])*s,this.z=(o[2]*n+o[6]*i+o[10]*r+o[14])*s,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,o=e.x,s=e.y,a=e.z,l=e.w,u=2*(s*r-a*i),c=2*(a*n-o*r),f=2*(o*i-s*n);return this.x=n+l*u+s*f-a*c,this.y=i+l*c+a*u-o*f,this.z=r+l*f+o*c-s*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r,this.y=o[1]*n+o[5]*i+o[9]*r,this.z=o[2]*n+o[6]*i+o[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=pt(this.x,e.x,n.x),this.y=pt(this.y,e.y,n.y),this.z=pt(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=pt(this.x,e,n),this.y=pt(this.y,e,n),this.z=pt(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(pt(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,o=e.z,s=n.x,a=n.y,l=n.z;return this.x=r*l-o*a,this.y=o*s-i*l,this.z=i*a-r*s,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Dc.copy(this).projectOnVector(e),this.sub(Dc)}reflect(e){return this.sub(Dc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(pt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Dc=new Me,fm=new xs;class ct{constructor(e,n,i,r,o,s,a,l,u){ct.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,o,s,a,l,u)}set(e,n,i,r,o,s,a,l,u){const c=this.elements;return c[0]=e,c[1]=r,c[2]=a,c[3]=n,c[4]=o,c[5]=l,c[6]=i,c[7]=s,c[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,o=this.elements,s=i[0],a=i[3],l=i[6],u=i[1],c=i[4],f=i[7],d=i[2],h=i[5],m=i[8],v=r[0],g=r[3],p=r[6],y=r[1],S=r[4],_=r[7],R=r[2],N=r[5],F=r[8];return o[0]=s*v+a*y+l*R,o[3]=s*g+a*S+l*N,o[6]=s*p+a*_+l*F,o[1]=u*v+c*y+f*R,o[4]=u*g+c*S+f*N,o[7]=u*p+c*_+f*F,o[2]=d*v+h*y+m*R,o[5]=d*g+h*S+m*N,o[8]=d*p+h*_+m*F,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],o=e[3],s=e[4],a=e[5],l=e[6],u=e[7],c=e[8];return n*s*c-n*a*u-i*o*c+i*a*l+r*o*u-r*s*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],o=e[3],s=e[4],a=e[5],l=e[6],u=e[7],c=e[8],f=c*s-a*u,d=a*l-c*o,h=u*o-s*l,m=n*f+i*d+r*h;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/m;return e[0]=f*v,e[1]=(r*u-c*i)*v,e[2]=(a*i-r*s)*v,e[3]=d*v,e[4]=(c*n-r*l)*v,e[5]=(r*o-a*n)*v,e[6]=h*v,e[7]=(i*l-u*n)*v,e[8]=(s*n-i*o)*v,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,o,s,a){const l=Math.cos(o),u=Math.sin(o);return this.set(i*l,i*u,-i*(l*s+u*a)+s+e,-r*u,r*l,-r*(-u*s+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(Lc.makeScale(e,n)),this}rotate(e){return this.premultiply(Lc.makeRotation(-e)),this}translate(e,n){return this.premultiply(Lc.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Lc=new ct,hm=new ct().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),pm=new ct().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function kS(){const t={enabled:!0,workingColorSpace:Vr,spaces:{},convert:function(r,o,s){return this.enabled===!1||o===s||!o||!s||(this.spaces[o].transfer===Mt&&(r.r=ji(r.r),r.g=ji(r.g),r.b=ji(r.b)),this.spaces[o].primaries!==this.spaces[s].primaries&&(r.applyMatrix3(this.spaces[o].toXYZ),r.applyMatrix3(this.spaces[s].fromXYZ)),this.spaces[s].transfer===Mt&&(r.r=es(r.r),r.g=es(r.g),r.b=es(r.b))),r},workingToColorSpace:function(r,o){return this.convert(r,this.workingColorSpace,o)},colorSpaceToWorking:function(r,o){return this.convert(r,o,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Pr?uu:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,o=this.workingColorSpace){return r.fromArray(this.spaces[o].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,o,s){return r.copy(this.spaces[o].toXYZ).multiply(this.spaces[s].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,o){return fu("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(r,o)},toWorkingColorSpace:function(r,o){return fu("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(r,o)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[Vr]:{primaries:e,whitePoint:i,transfer:uu,toXYZ:hm,fromXYZ:pm,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:On},outputColorSpaceConfig:{drawingBufferColorSpace:On}},[On]:{primaries:e,whitePoint:i,transfer:Mt,toXYZ:hm,fromXYZ:pm,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:On}}}),t}const gt=kS();function ji(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function es(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Do;class VS{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Do===void 0&&(Do=du("canvas")),Do.width=e.width,Do.height=e.height;const r=Do.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=Do}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=du("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),o=r.data;for(let s=0;s<o.length;s++)o[s]=ji(o[s]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(ji(n[i]/255)*255):n[i]=ji(n[i]);return{data:n,width:e.width,height:e.height}}else return st("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let zS=0;class Lh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:zS++}),this.uuid=Na(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayHeight,n.displayWidth,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let o;if(Array.isArray(r)){o=[];for(let s=0,a=r.length;s<a;s++)r[s].isDataTexture?o.push(Uc(r[s].image)):o.push(Uc(r[s]))}else o=Uc(r);i.url=o}return n||(e.images[this.uuid]=i),i}}function Uc(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?VS.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(st("Texture: Unable to serialize Texture."),{})}let $S=0;const Fc=new Me;class an extends ys{constructor(e=an.DEFAULT_IMAGE,n=an.DEFAULT_MAPPING,i=Wi,r=Wi,o=Rt,s=co,a=bn,l=yn,u=an.DEFAULT_ANISOTROPY,c=Pr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:$S++}),this.uuid=Na(),this.name="",this.source=new Lh(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=o,this.minFilter=s,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Tt(0,0),this.repeat=new Tt(1,1),this.center=new Tt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ct,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Fc).x}get height(){return this.source.getSize(Fc).y}get depth(){return this.source.getSize(Fc).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){st(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){st(`Texture.setValues(): property '${n}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Y0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case qd:e.x=e.x-Math.floor(e.x);break;case Wi:e.x=e.x<0?0:1;break;case Kd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case qd:e.y=e.y-Math.floor(e.y);break;case Wi:e.y=e.y<0?0:1;break;case Kd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}an.DEFAULT_IMAGE=null;an.DEFAULT_MAPPING=Y0;an.DEFAULT_ANISOTROPY=1;class Vt{constructor(e=0,n=0,i=0,r=1){Vt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,o=this.w,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r+s[12]*o,this.y=s[1]*n+s[5]*i+s[9]*r+s[13]*o,this.z=s[2]*n+s[6]*i+s[10]*r+s[14]*o,this.w=s[3]*n+s[7]*i+s[11]*r+s[15]*o,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,o;const l=e.elements,u=l[0],c=l[4],f=l[8],d=l[1],h=l[5],m=l[9],v=l[2],g=l[6],p=l[10];if(Math.abs(c-d)<.01&&Math.abs(f-v)<.01&&Math.abs(m-g)<.01){if(Math.abs(c+d)<.1&&Math.abs(f+v)<.1&&Math.abs(m+g)<.1&&Math.abs(u+h+p-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const S=(u+1)/2,_=(h+1)/2,R=(p+1)/2,N=(c+d)/4,F=(f+v)/4,x=(m+g)/4;return S>_&&S>R?S<.01?(i=0,r=.707106781,o=.707106781):(i=Math.sqrt(S),r=N/i,o=F/i):_>R?_<.01?(i=.707106781,r=0,o=.707106781):(r=Math.sqrt(_),i=N/r,o=x/r):R<.01?(i=.707106781,r=.707106781,o=0):(o=Math.sqrt(R),i=F/o,r=x/o),this.set(i,r,o,n),this}let y=Math.sqrt((g-m)*(g-m)+(f-v)*(f-v)+(d-c)*(d-c));return Math.abs(y)<.001&&(y=1),this.x=(g-m)/y,this.y=(f-v)/y,this.z=(d-c)/y,this.w=Math.acos((u+h+p-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=pt(this.x,e.x,n.x),this.y=pt(this.y,e.y,n.y),this.z=pt(this.z,e.z,n.z),this.w=pt(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=pt(this.x,e,n),this.y=pt(this.y,e,n),this.z=pt(this.z,e,n),this.w=pt(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(pt(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class HS extends ys{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Rt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new Vt(0,0,e,n),this.scissorTest=!1,this.viewport=new Vt(0,0,e,n),this.textures=[];const r={width:e,height:n,depth:i.depth},o=new an(r),s=i.count;for(let a=0;a<s;a++)this.textures[a]=o.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const n={minFilter:Rt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,o=this.textures.length;r<o;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const r=Object.assign({},e.textures[n].image);this.textures[n].source=new Lh(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Mn extends HS{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class n_ extends an{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=sn,this.minFilter=sn,this.wrapR=Wi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class GS extends an{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=sn,this.minFilter=sn,this.wrapR=Wi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Xt{constructor(e,n,i,r,o,s,a,l,u,c,f,d,h,m,v,g){Xt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,o,s,a,l,u,c,f,d,h,m,v,g)}set(e,n,i,r,o,s,a,l,u,c,f,d,h,m,v,g){const p=this.elements;return p[0]=e,p[4]=n,p[8]=i,p[12]=r,p[1]=o,p[5]=s,p[9]=a,p[13]=l,p[2]=u,p[6]=c,p[10]=f,p[14]=d,p[3]=h,p[7]=m,p[11]=v,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Xt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return this.determinant()===0?(e.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const n=this.elements,i=e.elements,r=1/Lo.setFromMatrixColumn(e,0).length(),o=1/Lo.setFromMatrixColumn(e,1).length(),s=1/Lo.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*o,n[5]=i[5]*o,n[6]=i[6]*o,n[7]=0,n[8]=i[8]*s,n[9]=i[9]*s,n[10]=i[10]*s,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,o=e.z,s=Math.cos(i),a=Math.sin(i),l=Math.cos(r),u=Math.sin(r),c=Math.cos(o),f=Math.sin(o);if(e.order==="XYZ"){const d=s*c,h=s*f,m=a*c,v=a*f;n[0]=l*c,n[4]=-l*f,n[8]=u,n[1]=h+m*u,n[5]=d-v*u,n[9]=-a*l,n[2]=v-d*u,n[6]=m+h*u,n[10]=s*l}else if(e.order==="YXZ"){const d=l*c,h=l*f,m=u*c,v=u*f;n[0]=d+v*a,n[4]=m*a-h,n[8]=s*u,n[1]=s*f,n[5]=s*c,n[9]=-a,n[2]=h*a-m,n[6]=v+d*a,n[10]=s*l}else if(e.order==="ZXY"){const d=l*c,h=l*f,m=u*c,v=u*f;n[0]=d-v*a,n[4]=-s*f,n[8]=m+h*a,n[1]=h+m*a,n[5]=s*c,n[9]=v-d*a,n[2]=-s*u,n[6]=a,n[10]=s*l}else if(e.order==="ZYX"){const d=s*c,h=s*f,m=a*c,v=a*f;n[0]=l*c,n[4]=m*u-h,n[8]=d*u+v,n[1]=l*f,n[5]=v*u+d,n[9]=h*u-m,n[2]=-u,n[6]=a*l,n[10]=s*l}else if(e.order==="YZX"){const d=s*l,h=s*u,m=a*l,v=a*u;n[0]=l*c,n[4]=v-d*f,n[8]=m*f+h,n[1]=f,n[5]=s*c,n[9]=-a*c,n[2]=-u*c,n[6]=h*f+m,n[10]=d-v*f}else if(e.order==="XZY"){const d=s*l,h=s*u,m=a*l,v=a*u;n[0]=l*c,n[4]=-f,n[8]=u*c,n[1]=d*f+v,n[5]=s*c,n[9]=h*f-m,n[2]=m*f-h,n[6]=a*c,n[10]=v*f+d}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(WS,e,XS)}lookAt(e,n,i){const r=this.elements;return An.subVectors(e,n),An.lengthSq()===0&&(An.z=1),An.normalize(),gr.crossVectors(i,An),gr.lengthSq()===0&&(Math.abs(i.z)===1?An.x+=1e-4:An.z+=1e-4,An.normalize(),gr.crossVectors(i,An)),gr.normalize(),qa.crossVectors(An,gr),r[0]=gr.x,r[4]=qa.x,r[8]=An.x,r[1]=gr.y,r[5]=qa.y,r[9]=An.y,r[2]=gr.z,r[6]=qa.z,r[10]=An.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,o=this.elements,s=i[0],a=i[4],l=i[8],u=i[12],c=i[1],f=i[5],d=i[9],h=i[13],m=i[2],v=i[6],g=i[10],p=i[14],y=i[3],S=i[7],_=i[11],R=i[15],N=r[0],F=r[4],x=r[8],b=r[12],P=r[1],M=r[5],w=r[9],W=r[13],E=r[2],k=r[6],A=r[10],I=r[14],O=r[3],z=r[7],q=r[11],te=r[15];return o[0]=s*N+a*P+l*E+u*O,o[4]=s*F+a*M+l*k+u*z,o[8]=s*x+a*w+l*A+u*q,o[12]=s*b+a*W+l*I+u*te,o[1]=c*N+f*P+d*E+h*O,o[5]=c*F+f*M+d*k+h*z,o[9]=c*x+f*w+d*A+h*q,o[13]=c*b+f*W+d*I+h*te,o[2]=m*N+v*P+g*E+p*O,o[6]=m*F+v*M+g*k+p*z,o[10]=m*x+v*w+g*A+p*q,o[14]=m*b+v*W+g*I+p*te,o[3]=y*N+S*P+_*E+R*O,o[7]=y*F+S*M+_*k+R*z,o[11]=y*x+S*w+_*A+R*q,o[15]=y*b+S*W+_*I+R*te,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],o=e[12],s=e[1],a=e[5],l=e[9],u=e[13],c=e[2],f=e[6],d=e[10],h=e[14],m=e[3],v=e[7],g=e[11],p=e[15],y=l*h-u*d,S=a*h-u*f,_=a*d-l*f,R=s*h-u*c,N=s*d-l*c,F=s*f-a*c;return n*(v*y-g*S+p*_)-i*(m*y-g*R+p*N)+r*(m*S-v*R+p*F)-o*(m*_-v*N+g*F)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],o=e[3],s=e[4],a=e[5],l=e[6],u=e[7],c=e[8],f=e[9],d=e[10],h=e[11],m=e[12],v=e[13],g=e[14],p=e[15],y=n*a-i*s,S=n*l-r*s,_=n*u-o*s,R=i*l-r*a,N=i*u-o*a,F=r*u-o*l,x=c*v-f*m,b=c*g-d*m,P=c*p-h*m,M=f*g-d*v,w=f*p-h*v,W=d*p-h*g,E=y*W-S*w+_*M+R*P-N*b+F*x;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const k=1/E;return e[0]=(a*W-l*w+u*M)*k,e[1]=(r*w-i*W-o*M)*k,e[2]=(v*F-g*N+p*R)*k,e[3]=(d*N-f*F-h*R)*k,e[4]=(l*P-s*W-u*b)*k,e[5]=(n*W-r*P+o*b)*k,e[6]=(g*_-m*F-p*S)*k,e[7]=(c*F-d*_+h*S)*k,e[8]=(s*w-a*P+u*x)*k,e[9]=(i*P-n*w-o*x)*k,e[10]=(m*N-v*_+p*y)*k,e[11]=(f*_-c*N-h*y)*k,e[12]=(a*b-s*M-l*x)*k,e[13]=(n*M-i*b+r*x)*k,e[14]=(v*S-m*R-g*y)*k,e[15]=(c*R-f*S+d*y)*k,this}scale(e){const n=this.elements,i=e.x,r=e.y,o=e.z;return n[0]*=i,n[4]*=r,n[8]*=o,n[1]*=i,n[5]*=r,n[9]*=o,n[2]*=i,n[6]*=r,n[10]*=o,n[3]*=i,n[7]*=r,n[11]*=o,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),o=1-i,s=e.x,a=e.y,l=e.z,u=o*s,c=o*a;return this.set(u*s+i,u*a-r*l,u*l+r*a,0,u*a+r*l,c*a+i,c*l-r*s,0,u*l-r*a,c*l+r*s,o*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,o,s){return this.set(1,i,o,0,e,1,s,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,o=n._x,s=n._y,a=n._z,l=n._w,u=o+o,c=s+s,f=a+a,d=o*u,h=o*c,m=o*f,v=s*c,g=s*f,p=a*f,y=l*u,S=l*c,_=l*f,R=i.x,N=i.y,F=i.z;return r[0]=(1-(v+p))*R,r[1]=(h+_)*R,r[2]=(m-S)*R,r[3]=0,r[4]=(h-_)*N,r[5]=(1-(d+p))*N,r[6]=(g+y)*N,r[7]=0,r[8]=(m+S)*F,r[9]=(g-y)*F,r[10]=(1-(d+v))*F,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const o=this.determinant();if(o===0)return i.set(1,1,1),n.identity(),this;let s=Lo.set(r[0],r[1],r[2]).length();const a=Lo.set(r[4],r[5],r[6]).length(),l=Lo.set(r[8],r[9],r[10]).length();o<0&&(s=-s),zn.copy(this);const u=1/s,c=1/a,f=1/l;return zn.elements[0]*=u,zn.elements[1]*=u,zn.elements[2]*=u,zn.elements[4]*=c,zn.elements[5]*=c,zn.elements[6]*=c,zn.elements[8]*=f,zn.elements[9]*=f,zn.elements[10]*=f,n.setFromRotationMatrix(zn),i.x=s,i.y=a,i.z=l,this}makePerspective(e,n,i,r,o,s,a=mi,l=!1){const u=this.elements,c=2*o/(n-e),f=2*o/(i-r),d=(n+e)/(n-e),h=(i+r)/(i-r);let m,v;if(l)m=o/(s-o),v=s*o/(s-o);else if(a===mi)m=-(s+o)/(s-o),v=-2*s*o/(s-o);else if(a===cu)m=-s/(s-o),v=-s*o/(s-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return u[0]=c,u[4]=0,u[8]=d,u[12]=0,u[1]=0,u[5]=f,u[9]=h,u[13]=0,u[2]=0,u[6]=0,u[10]=m,u[14]=v,u[3]=0,u[7]=0,u[11]=-1,u[15]=0,this}makeOrthographic(e,n,i,r,o,s,a=mi,l=!1){const u=this.elements,c=2/(n-e),f=2/(i-r),d=-(n+e)/(n-e),h=-(i+r)/(i-r);let m,v;if(l)m=1/(s-o),v=s/(s-o);else if(a===mi)m=-2/(s-o),v=-(s+o)/(s-o);else if(a===cu)m=-1/(s-o),v=-o/(s-o);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return u[0]=c,u[4]=0,u[8]=0,u[12]=d,u[1]=0,u[5]=f,u[9]=0,u[13]=h,u[2]=0,u[6]=0,u[10]=m,u[14]=v,u[3]=0,u[7]=0,u[11]=0,u[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Lo=new Me,zn=new Xt,WS=new Me(0,0,0),XS=new Me(1,1,1),gr=new Me,qa=new Me,An=new Me,mm=new Xt,gm=new xs;class or{constructor(e=0,n=0,i=0,r=or.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,o=r[0],s=r[4],a=r[8],l=r[1],u=r[5],c=r[9],f=r[2],d=r[6],h=r[10];switch(n){case"XYZ":this._y=Math.asin(pt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-c,h),this._z=Math.atan2(-s,o)):(this._x=Math.atan2(d,u),this._z=0);break;case"YXZ":this._x=Math.asin(-pt(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(a,h),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-f,o),this._z=0);break;case"ZXY":this._x=Math.asin(pt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,h),this._z=Math.atan2(-s,u)):(this._y=0,this._z=Math.atan2(l,o));break;case"ZYX":this._y=Math.asin(-pt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,h),this._z=Math.atan2(l,o)):(this._x=0,this._z=Math.atan2(-s,u));break;case"YZX":this._z=Math.asin(pt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,u),this._y=Math.atan2(-f,o)):(this._x=0,this._y=Math.atan2(a,h));break;case"XZY":this._z=Math.asin(-pt(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(d,u),this._y=Math.atan2(a,o)):(this._x=Math.atan2(-c,h),this._y=0);break;default:st("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return mm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(mm,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return gm.setFromEuler(this),this.setFromQuaternion(gm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}or.DEFAULT_ORDER="XYZ";class i_{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let YS=0;const vm=new Me,Uo=new xs,Ii=new Xt,Ka=new Me,Cs=new Me,qS=new Me,KS=new xs,_m=new Me(1,0,0),ym=new Me(0,1,0),xm=new Me(0,0,1),bm={type:"added"},ZS={type:"removed"},Fo={type:"childadded",child:null},Oc={type:"childremoved",child:null};class Nn extends ys{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:YS++}),this.uuid=Na(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Nn.DEFAULT_UP.clone();const e=new Me,n=new or,i=new xs,r=new Me(1,1,1);function o(){i.setFromEuler(n,!1)}function s(){n.setFromQuaternion(i,void 0,!1)}n._onChange(o),i._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Xt},normalMatrix:{value:new ct}}),this.matrix=new Xt,this.matrixWorld=new Xt,this.matrixAutoUpdate=Nn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Nn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new i_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Uo.setFromAxisAngle(e,n),this.quaternion.multiply(Uo),this}rotateOnWorldAxis(e,n){return Uo.setFromAxisAngle(e,n),this.quaternion.premultiply(Uo),this}rotateX(e){return this.rotateOnAxis(_m,e)}rotateY(e){return this.rotateOnAxis(ym,e)}rotateZ(e){return this.rotateOnAxis(xm,e)}translateOnAxis(e,n){return vm.copy(e).applyQuaternion(this.quaternion),this.position.add(vm.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(_m,e)}translateY(e){return this.translateOnAxis(ym,e)}translateZ(e){return this.translateOnAxis(xm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ii.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Ka.copy(e):Ka.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Cs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ii.lookAt(Cs,Ka,this.up):Ii.lookAt(Ka,Cs,this.up),this.quaternion.setFromRotationMatrix(Ii),r&&(Ii.extractRotation(r.matrixWorld),Uo.setFromRotationMatrix(Ii),this.quaternion.premultiply(Uo.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(_t("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(bm),Fo.child=e,this.dispatchEvent(Fo),Fo.child=null):_t("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(ZS),Oc.child=e,this.dispatchEvent(Oc),Oc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ii.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ii.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ii),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(bm),Fo.child=e,this.dispatchEvent(Fo),Fo.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const s=this.children[i].getObjectByProperty(e,n);if(s!==void 0)return s}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let o=0,s=r.length;o<s;o++)r[o].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Cs,e,qS),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Cs,KS,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const n=e.x,i=e.y,r=e.z,o=this.matrix.elements;o[12]+=n-o[0]*n-o[4]*i-o[8]*r,o[13]+=i-o[1]*n-o[5]*i-o[9]*r,o[14]+=r-o[2]*n-o[6]*i-o[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let o=0,s=r.length;o<s;o++)r[o].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function o(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=o(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,c=l.length;u<c;u++){const f=l[u];o(e.shapes,f)}else o(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(o(e.materials,this.material[l]));r.material=a}else r.material=o(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(o(e.animations,l))}}if(n){const a=s(e.geometries),l=s(e.materials),u=s(e.textures),c=s(e.images),f=s(e.shapes),d=s(e.skeletons),h=s(e.animations),m=s(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),c.length>0&&(i.images=c),f.length>0&&(i.shapes=f),d.length>0&&(i.skeletons=d),h.length>0&&(i.animations=h),m.length>0&&(i.nodes=m)}return i.object=r,i;function s(a){const l=[];for(const u in a){const c=a[u];delete c.metadata,l.push(c)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),e.pivot!==null&&(this.pivot=e.pivot.clone()),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Nn.DEFAULT_UP=new Me(0,1,0);Nn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Nn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Za extends Nn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const jS={type:"move"};class Bc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Za,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Za,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Me,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Me),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Za,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Me,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Me),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,o=null,s=null;const a=this._targetRay,l=this._grip,u=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(u&&e.hand){s=!0;for(const v of e.hand.values()){const g=n.getJointPose(v,i),p=this._getHandJoint(u,v);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}const c=u.joints["index-finger-tip"],f=u.joints["thumb-tip"],d=c.position.distanceTo(f.position),h=.02,m=.005;u.inputState.pinching&&d>h+m?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&d<=h-m&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(o=n.getPose(e.gripSpace,i),o!==null&&(l.matrix.fromArray(o.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,o.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(o.linearVelocity)):l.hasLinearVelocity=!1,o.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(o.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&o!==null&&(r=o),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(jS)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=o!==null),u!==null&&(u.visible=s!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Za;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const r_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},vr={h:0,s:0,l:0},ja={h:0,s:0,l:0};function kc(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}let Et=class{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=On){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,gt.colorSpaceToWorking(this,n),this}setRGB(e,n,i,r=gt.workingColorSpace){return this.r=e,this.g=n,this.b=i,gt.colorSpaceToWorking(this,r),this}setHSL(e,n,i,r=gt.workingColorSpace){if(e=BS(e,1),n=pt(n,0,1),i=pt(i,0,1),n===0)this.r=this.g=this.b=i;else{const o=i<=.5?i*(1+n):i+n-i*n,s=2*i-o;this.r=kc(s,o,e+1/3),this.g=kc(s,o,e),this.b=kc(s,o,e-1/3)}return gt.colorSpaceToWorking(this,r),this}setStyle(e,n=On){function i(o){o!==void 0&&parseFloat(o)<1&&st("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let o;const s=r[1],a=r[2];switch(s){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,n);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,n);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,n);break;default:st("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const o=r[1],s=o.length;if(s===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,n);if(s===6)return this.setHex(parseInt(o,16),n);st("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=On){const i=r_[e.toLowerCase()];return i!==void 0?this.setHex(i,n):st("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ji(e.r),this.g=ji(e.g),this.b=ji(e.b),this}copyLinearToSRGB(e){return this.r=es(e.r),this.g=es(e.g),this.b=es(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=On){return gt.workingToColorSpace(cn.copy(this),e),Math.round(pt(cn.r*255,0,255))*65536+Math.round(pt(cn.g*255,0,255))*256+Math.round(pt(cn.b*255,0,255))}getHexString(e=On){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=gt.workingColorSpace){gt.workingToColorSpace(cn.copy(this),n);const i=cn.r,r=cn.g,o=cn.b,s=Math.max(i,r,o),a=Math.min(i,r,o);let l,u;const c=(a+s)/2;if(a===s)l=0,u=0;else{const f=s-a;switch(u=c<=.5?f/(s+a):f/(2-s-a),s){case i:l=(r-o)/f+(r<o?6:0);break;case r:l=(o-i)/f+2;break;case o:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=u,e.l=c,e}getRGB(e,n=gt.workingColorSpace){return gt.workingToColorSpace(cn.copy(this),n),e.r=cn.r,e.g=cn.g,e.b=cn.b,e}getStyle(e=On){gt.workingToColorSpace(cn.copy(this),e);const n=cn.r,i=cn.g,r=cn.b;return e!==On?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(vr),this.setHSL(vr.h+e,vr.s+n,vr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(vr),e.getHSL(ja);const i=Nc(vr.h,ja.h,n),r=Nc(vr.s,ja.s,n),o=Nc(vr.l,ja.l,n);return this.setHSL(i,r,o),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,o=e.elements;return this.r=o[0]*n+o[3]*i+o[6]*r,this.g=o[1]*n+o[4]*i+o[7]*r,this.b=o[2]*n+o[5]*i+o[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}};const cn=new Et;Et.NAMES=r_;class JS extends Nn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new or,this.environmentIntensity=1,this.environmentRotation=new or,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const $n=new Me,Pi=new Me,Vc=new Me,Ni=new Me,Oo=new Me,Bo=new Me,Sm=new Me,zc=new Me,$c=new Me,Hc=new Me,Gc=new Vt,Wc=new Vt,Xc=new Vt;class Wn{constructor(e=new Me,n=new Me,i=new Me){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),$n.subVectors(e,n),r.cross($n);const o=r.lengthSq();return o>0?r.multiplyScalar(1/Math.sqrt(o)):r.set(0,0,0)}static getBarycoord(e,n,i,r,o){$n.subVectors(r,n),Pi.subVectors(i,n),Vc.subVectors(e,n);const s=$n.dot($n),a=$n.dot(Pi),l=$n.dot(Vc),u=Pi.dot(Pi),c=Pi.dot(Vc),f=s*u-a*a;if(f===0)return o.set(0,0,0),null;const d=1/f,h=(u*l-a*c)*d,m=(s*c-a*l)*d;return o.set(1-h-m,m,h)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,Ni)===null?!1:Ni.x>=0&&Ni.y>=0&&Ni.x+Ni.y<=1}static getInterpolation(e,n,i,r,o,s,a,l){return this.getBarycoord(e,n,i,r,Ni)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(o,Ni.x),l.addScaledVector(s,Ni.y),l.addScaledVector(a,Ni.z),l)}static getInterpolatedAttribute(e,n,i,r,o,s){return Gc.setScalar(0),Wc.setScalar(0),Xc.setScalar(0),Gc.fromBufferAttribute(e,n),Wc.fromBufferAttribute(e,i),Xc.fromBufferAttribute(e,r),s.setScalar(0),s.addScaledVector(Gc,o.x),s.addScaledVector(Wc,o.y),s.addScaledVector(Xc,o.z),s}static isFrontFacing(e,n,i,r){return $n.subVectors(i,n),Pi.subVectors(e,n),$n.cross(Pi).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return $n.subVectors(this.c,this.b),Pi.subVectors(this.a,this.b),$n.cross(Pi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Wn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Wn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,o){return Wn.getInterpolation(e,this.a,this.b,this.c,n,i,r,o)}containsPoint(e){return Wn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Wn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,o=this.c;let s,a;Oo.subVectors(r,i),Bo.subVectors(o,i),zc.subVectors(e,i);const l=Oo.dot(zc),u=Bo.dot(zc);if(l<=0&&u<=0)return n.copy(i);$c.subVectors(e,r);const c=Oo.dot($c),f=Bo.dot($c);if(c>=0&&f<=c)return n.copy(r);const d=l*f-c*u;if(d<=0&&l>=0&&c<=0)return s=l/(l-c),n.copy(i).addScaledVector(Oo,s);Hc.subVectors(e,o);const h=Oo.dot(Hc),m=Bo.dot(Hc);if(m>=0&&h<=m)return n.copy(o);const v=h*u-l*m;if(v<=0&&u>=0&&m<=0)return a=u/(u-m),n.copy(i).addScaledVector(Bo,a);const g=c*m-h*f;if(g<=0&&f-c>=0&&h-m>=0)return Sm.subVectors(o,r),a=(f-c)/(f-c+(h-m)),n.copy(r).addScaledVector(Sm,a);const p=1/(g+v+d);return s=v*p,a=d*p,n.copy(i).addScaledVector(Oo,s).addScaledVector(Bo,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Da{constructor(e=new Me(1/0,1/0,1/0),n=new Me(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Hn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Hn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Hn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const o=i.getAttribute("position");if(n===!0&&o!==void 0&&e.isInstancedMesh!==!0)for(let s=0,a=o.count;s<a;s++)e.isMesh===!0?e.getVertexPosition(s,Hn):Hn.fromBufferAttribute(o,s),Hn.applyMatrix4(e.matrixWorld),this.expandByPoint(Hn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ja.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ja.copy(i.boundingBox)),Ja.applyMatrix4(e.matrixWorld),this.union(Ja)}const r=e.children;for(let o=0,s=r.length;o<s;o++)this.expandByObject(r[o],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Hn),Hn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(As),Qa.subVectors(this.max,As),ko.subVectors(e.a,As),Vo.subVectors(e.b,As),zo.subVectors(e.c,As),_r.subVectors(Vo,ko),yr.subVectors(zo,Vo),Zr.subVectors(ko,zo);let n=[0,-_r.z,_r.y,0,-yr.z,yr.y,0,-Zr.z,Zr.y,_r.z,0,-_r.x,yr.z,0,-yr.x,Zr.z,0,-Zr.x,-_r.y,_r.x,0,-yr.y,yr.x,0,-Zr.y,Zr.x,0];return!Yc(n,ko,Vo,zo,Qa)||(n=[1,0,0,0,1,0,0,0,1],!Yc(n,ko,Vo,zo,Qa))?!1:(el.crossVectors(_r,yr),n=[el.x,el.y,el.z],Yc(n,ko,Vo,zo,Qa))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Hn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Hn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Di[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Di[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Di[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Di[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Di[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Di[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Di[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Di[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Di),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Di=[new Me,new Me,new Me,new Me,new Me,new Me,new Me,new Me],Hn=new Me,Ja=new Da,ko=new Me,Vo=new Me,zo=new Me,_r=new Me,yr=new Me,Zr=new Me,As=new Me,Qa=new Me,el=new Me,jr=new Me;function Yc(t,e,n,i,r){for(let o=0,s=t.length-3;o<=s;o+=3){jr.fromArray(t,o);const a=r.x*Math.abs(jr.x)+r.y*Math.abs(jr.y)+r.z*Math.abs(jr.z),l=e.dot(jr),u=n.dot(jr),c=i.dot(jr);if(Math.max(-Math.max(l,u,c),Math.min(l,u,c))>a)return!1}return!0}const zt=new Me,tl=new Tt;let QS=0;class _i{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:QS++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=lm,this.updateRanges=[],this.gpuType=pi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,o=this.itemSize;r<o;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)tl.fromBufferAttribute(this,n),tl.applyMatrix3(e),this.setXY(n,tl.x,tl.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)zt.fromBufferAttribute(this,n),zt.applyMatrix3(e),this.setXYZ(n,zt.x,zt.y,zt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)zt.fromBufferAttribute(this,n),zt.applyMatrix4(e),this.setXYZ(n,zt.x,zt.y,zt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)zt.fromBufferAttribute(this,n),zt.applyNormalMatrix(e),this.setXYZ(n,zt.x,zt.y,zt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)zt.fromBufferAttribute(this,n),zt.transformDirection(e),this.setXYZ(n,zt.x,zt.y,zt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Ts(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=Sn(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Ts(n,this.array)),n}setX(e,n){return this.normalized&&(n=Sn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Ts(n,this.array)),n}setY(e,n){return this.normalized&&(n=Sn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Ts(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Sn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Ts(n,this.array)),n}setW(e,n){return this.normalized&&(n=Sn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=Sn(n,this.array),i=Sn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=Sn(n,this.array),i=Sn(i,this.array),r=Sn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,o){return e*=this.itemSize,this.normalized&&(n=Sn(n,this.array),i=Sn(i,this.array),r=Sn(r,this.array),o=Sn(o,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=o,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==lm&&(e.usage=this.usage),e}}class o_ extends _i{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class s_ extends _i{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Ji extends _i{constructor(e,n,i){super(new Float32Array(e),n,i)}}const eM=new Da,Rs=new Me,qc=new Me;class Uh{constructor(e=new Me,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):eM.setFromPoints(e).getCenter(i);let r=0;for(let o=0,s=e.length;o<s;o++)r=Math.max(r,i.distanceToSquared(e[o]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Rs.subVectors(e,this.center);const n=Rs.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Rs,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(qc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Rs.copy(e.center).add(qc)),this.expandByPoint(Rs.copy(e.center).sub(qc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let tM=0;const Fn=new Xt,Kc=new Nn,$o=new Me,Rn=new Da,Is=new Da,en=new Me;class dr extends ys{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:tM++}),this.uuid=Na(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(LS(e)?s_:o_)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const o=new ct().getNormalMatrix(e);i.applyNormalMatrix(o),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Fn.makeRotationFromQuaternion(e),this.applyMatrix4(Fn),this}rotateX(e){return Fn.makeRotationX(e),this.applyMatrix4(Fn),this}rotateY(e){return Fn.makeRotationY(e),this.applyMatrix4(Fn),this}rotateZ(e){return Fn.makeRotationZ(e),this.applyMatrix4(Fn),this}translate(e,n,i){return Fn.makeTranslation(e,n,i),this.applyMatrix4(Fn),this}scale(e,n,i){return Fn.makeScale(e,n,i),this.applyMatrix4(Fn),this}lookAt(e){return Kc.lookAt(e),Kc.updateMatrix(),this.applyMatrix4(Kc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter($o).negate(),this.translate($o.x,$o.y,$o.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,o=e.length;r<o;r++){const s=e[r];i.push(s.x,s.y,s.z||0)}this.setAttribute("position",new Ji(i,3))}else{const i=Math.min(e.length,n.count);for(let r=0;r<i;r++){const o=e[r];n.setXYZ(r,o.x,o.y,o.z||0)}e.length>n.count&&st("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Da);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){_t("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Me(-1/0,-1/0,-1/0),new Me(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const o=n[i];Rn.setFromBufferAttribute(o),this.morphTargetsRelative?(en.addVectors(this.boundingBox.min,Rn.min),this.boundingBox.expandByPoint(en),en.addVectors(this.boundingBox.max,Rn.max),this.boundingBox.expandByPoint(en)):(this.boundingBox.expandByPoint(Rn.min),this.boundingBox.expandByPoint(Rn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&_t('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Uh);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){_t("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Me,1/0);return}if(e){const i=this.boundingSphere.center;if(Rn.setFromBufferAttribute(e),n)for(let o=0,s=n.length;o<s;o++){const a=n[o];Is.setFromBufferAttribute(a),this.morphTargetsRelative?(en.addVectors(Rn.min,Is.min),Rn.expandByPoint(en),en.addVectors(Rn.max,Is.max),Rn.expandByPoint(en)):(Rn.expandByPoint(Is.min),Rn.expandByPoint(Is.max))}Rn.getCenter(i);let r=0;for(let o=0,s=e.count;o<s;o++)en.fromBufferAttribute(e,o),r=Math.max(r,i.distanceToSquared(en));if(n)for(let o=0,s=n.length;o<s;o++){const a=n[o],l=this.morphTargetsRelative;for(let u=0,c=a.count;u<c;u++)en.fromBufferAttribute(a,u),l&&($o.fromBufferAttribute(e,u),en.add($o)),r=Math.max(r,i.distanceToSquared(en))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&_t('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){_t("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,o=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new _i(new Float32Array(4*i.count),4));const s=this.getAttribute("tangent"),a=[],l=[];for(let x=0;x<i.count;x++)a[x]=new Me,l[x]=new Me;const u=new Me,c=new Me,f=new Me,d=new Tt,h=new Tt,m=new Tt,v=new Me,g=new Me;function p(x,b,P){u.fromBufferAttribute(i,x),c.fromBufferAttribute(i,b),f.fromBufferAttribute(i,P),d.fromBufferAttribute(o,x),h.fromBufferAttribute(o,b),m.fromBufferAttribute(o,P),c.sub(u),f.sub(u),h.sub(d),m.sub(d);const M=1/(h.x*m.y-m.x*h.y);isFinite(M)&&(v.copy(c).multiplyScalar(m.y).addScaledVector(f,-h.y).multiplyScalar(M),g.copy(f).multiplyScalar(h.x).addScaledVector(c,-m.x).multiplyScalar(M),a[x].add(v),a[b].add(v),a[P].add(v),l[x].add(g),l[b].add(g),l[P].add(g))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let x=0,b=y.length;x<b;++x){const P=y[x],M=P.start,w=P.count;for(let W=M,E=M+w;W<E;W+=3)p(e.getX(W+0),e.getX(W+1),e.getX(W+2))}const S=new Me,_=new Me,R=new Me,N=new Me;function F(x){R.fromBufferAttribute(r,x),N.copy(R);const b=a[x];S.copy(b),S.sub(R.multiplyScalar(R.dot(b))).normalize(),_.crossVectors(N,b);const M=_.dot(l[x])<0?-1:1;s.setXYZW(x,S.x,S.y,S.z,M)}for(let x=0,b=y.length;x<b;++x){const P=y[x],M=P.start,w=P.count;for(let W=M,E=M+w;W<E;W+=3)F(e.getX(W+0)),F(e.getX(W+1)),F(e.getX(W+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new _i(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let d=0,h=i.count;d<h;d++)i.setXYZ(d,0,0,0);const r=new Me,o=new Me,s=new Me,a=new Me,l=new Me,u=new Me,c=new Me,f=new Me;if(e)for(let d=0,h=e.count;d<h;d+=3){const m=e.getX(d+0),v=e.getX(d+1),g=e.getX(d+2);r.fromBufferAttribute(n,m),o.fromBufferAttribute(n,v),s.fromBufferAttribute(n,g),c.subVectors(s,o),f.subVectors(r,o),c.cross(f),a.fromBufferAttribute(i,m),l.fromBufferAttribute(i,v),u.fromBufferAttribute(i,g),a.add(c),l.add(c),u.add(c),i.setXYZ(m,a.x,a.y,a.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(g,u.x,u.y,u.z)}else for(let d=0,h=n.count;d<h;d+=3)r.fromBufferAttribute(n,d+0),o.fromBufferAttribute(n,d+1),s.fromBufferAttribute(n,d+2),c.subVectors(s,o),f.subVectors(r,o),c.cross(f),i.setXYZ(d+0,c.x,c.y,c.z),i.setXYZ(d+1,c.x,c.y,c.z),i.setXYZ(d+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)en.fromBufferAttribute(e,n),en.normalize(),e.setXYZ(n,en.x,en.y,en.z)}toNonIndexed(){function e(a,l){const u=a.array,c=a.itemSize,f=a.normalized,d=new u.constructor(l.length*c);let h=0,m=0;for(let v=0,g=l.length;v<g;v++){a.isInterleavedBufferAttribute?h=l[v]*a.data.stride+a.offset:h=l[v]*c;for(let p=0;p<c;p++)d[m++]=u[h++]}return new _i(d,c,f)}if(this.index===null)return st("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new dr,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],u=e(l,i);n.setAttribute(a,u)}const o=this.morphAttributes;for(const a in o){const l=[],u=o[a];for(let c=0,f=u.length;c<f;c++){const d=u[c],h=e(d,i);l.push(h)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let a=0,l=s.length;a<l;a++){const u=s[a];n.addGroup(u.start,u.count,u.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let o=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],c=[];for(let f=0,d=u.length;f<d;f++){const h=u[f];c.push(h.toJSON(e.data))}c.length>0&&(r[l]=c,o=!0)}o&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const u in r){const c=r[u];this.setAttribute(u,c.clone(n))}const o=e.morphAttributes;for(const u in o){const c=[],f=o[u];for(let d=0,h=f.length;d<h;d++)c.push(f[d].clone(n));this.morphAttributes[u]=c}this.morphTargetsRelative=e.morphTargetsRelative;const s=e.groups;for(let u=0,c=s.length;u<c;u++){const f=s[u];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let nM=0;class Ku extends ys{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:nM++}),this.uuid=Na(),this.name="",this.type="Material",this.blending=Qo,this.side=kr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=kd,this.blendDst=Vd,this.blendEquation=oo,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Et(0,0,0),this.blendAlpha=0,this.depthFunc=ls,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=am,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=No,this.stencilZFail=No,this.stencilZPass=No,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){st(`Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){st(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Qo&&(i.blending=this.blending),this.side!==kr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==kd&&(i.blendSrc=this.blendSrc),this.blendDst!==Vd&&(i.blendDst=this.blendDst),this.blendEquation!==oo&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==ls&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==am&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==No&&(i.stencilFail=this.stencilFail),this.stencilZFail!==No&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==No&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(o){const s=[];for(const a in o){const l=o[a];delete l.metadata,s.push(l)}return s}if(n){const o=r(e.textures),s=r(e.images);o.length>0&&(i.textures=o),s.length>0&&(i.images=s)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let o=0;o!==r;++o)i[o]=n[o].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Li=new Me,Zc=new Me,nl=new Me,xr=new Me,jc=new Me,il=new Me,Jc=new Me;class iM{constructor(e=new Me,n=new Me(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Li)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Li.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Li.copy(this.origin).addScaledVector(this.direction,n),Li.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Zc.copy(e).add(n).multiplyScalar(.5),nl.copy(n).sub(e).normalize(),xr.copy(this.origin).sub(Zc);const o=e.distanceTo(n)*.5,s=-this.direction.dot(nl),a=xr.dot(this.direction),l=-xr.dot(nl),u=xr.lengthSq(),c=Math.abs(1-s*s);let f,d,h,m;if(c>0)if(f=s*l-a,d=s*a-l,m=o*c,f>=0)if(d>=-m)if(d<=m){const v=1/c;f*=v,d*=v,h=f*(f+s*d+2*a)+d*(s*f+d+2*l)+u}else d=o,f=Math.max(0,-(s*d+a)),h=-f*f+d*(d+2*l)+u;else d=-o,f=Math.max(0,-(s*d+a)),h=-f*f+d*(d+2*l)+u;else d<=-m?(f=Math.max(0,-(-s*o+a)),d=f>0?-o:Math.min(Math.max(-o,-l),o),h=-f*f+d*(d+2*l)+u):d<=m?(f=0,d=Math.min(Math.max(-o,-l),o),h=d*(d+2*l)+u):(f=Math.max(0,-(s*o+a)),d=f>0?o:Math.min(Math.max(-o,-l),o),h=-f*f+d*(d+2*l)+u);else d=s>0?-o:o,f=Math.max(0,-(s*d+a)),h=-f*f+d*(d+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Zc).addScaledVector(nl,d),h}intersectSphere(e,n){Li.subVectors(e.center,this.origin);const i=Li.dot(this.direction),r=Li.dot(Li)-i*i,o=e.radius*e.radius;if(r>o)return null;const s=Math.sqrt(o-r),a=i-s,l=i+s;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,o,s,a,l;const u=1/this.direction.x,c=1/this.direction.y,f=1/this.direction.z,d=this.origin;return u>=0?(i=(e.min.x-d.x)*u,r=(e.max.x-d.x)*u):(i=(e.max.x-d.x)*u,r=(e.min.x-d.x)*u),c>=0?(o=(e.min.y-d.y)*c,s=(e.max.y-d.y)*c):(o=(e.max.y-d.y)*c,s=(e.min.y-d.y)*c),i>s||o>r||((o>i||isNaN(i))&&(i=o),(s<r||isNaN(r))&&(r=s),f>=0?(a=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(a=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,Li)!==null}intersectTriangle(e,n,i,r,o){jc.subVectors(n,e),il.subVectors(i,e),Jc.crossVectors(jc,il);let s=this.direction.dot(Jc),a;if(s>0){if(r)return null;a=1}else if(s<0)a=-1,s=-s;else return null;xr.subVectors(this.origin,e);const l=a*this.direction.dot(il.crossVectors(xr,il));if(l<0)return null;const u=a*this.direction.dot(jc.cross(xr));if(u<0||l+u>s)return null;const c=-a*xr.dot(Jc);return c<0?null:this.at(c/s,o)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class a_ extends Ku{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Et(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new or,this.combine=k0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Mm=new Xt,Jr=new iM,rl=new Uh,wm=new Me,ol=new Me,sl=new Me,al=new Me,Qc=new Me,ll=new Me,Em=new Me,ul=new Me;class Si extends Nn{constructor(e=new dr,n=new a_){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,s=r.length;o<s;o++){const a=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,o=i.morphAttributes.position,s=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(o&&a){ll.set(0,0,0);for(let l=0,u=o.length;l<u;l++){const c=a[l],f=o[l];c!==0&&(Qc.fromBufferAttribute(f,e),s?ll.addScaledVector(Qc,c):ll.addScaledVector(Qc.sub(n),c))}n.add(ll)}return n}raycast(e,n){const i=this.geometry,r=this.material,o=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),rl.copy(i.boundingSphere),rl.applyMatrix4(o),Jr.copy(e.ray).recast(e.near),!(rl.containsPoint(Jr.origin)===!1&&(Jr.intersectSphere(rl,wm)===null||Jr.origin.distanceToSquared(wm)>(e.far-e.near)**2))&&(Mm.copy(o).invert(),Jr.copy(e.ray).applyMatrix4(Mm),!(i.boundingBox!==null&&Jr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Jr)))}_computeIntersections(e,n,i){let r;const o=this.geometry,s=this.material,a=o.index,l=o.attributes.position,u=o.attributes.uv,c=o.attributes.uv1,f=o.attributes.normal,d=o.groups,h=o.drawRange;if(a!==null)if(Array.isArray(s))for(let m=0,v=d.length;m<v;m++){const g=d[m],p=s[g.materialIndex],y=Math.max(g.start,h.start),S=Math.min(a.count,Math.min(g.start+g.count,h.start+h.count));for(let _=y,R=S;_<R;_+=3){const N=a.getX(_),F=a.getX(_+1),x=a.getX(_+2);r=cl(this,p,e,i,u,c,f,N,F,x),r&&(r.faceIndex=Math.floor(_/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{const m=Math.max(0,h.start),v=Math.min(a.count,h.start+h.count);for(let g=m,p=v;g<p;g+=3){const y=a.getX(g),S=a.getX(g+1),_=a.getX(g+2);r=cl(this,s,e,i,u,c,f,y,S,_),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(s))for(let m=0,v=d.length;m<v;m++){const g=d[m],p=s[g.materialIndex],y=Math.max(g.start,h.start),S=Math.min(l.count,Math.min(g.start+g.count,h.start+h.count));for(let _=y,R=S;_<R;_+=3){const N=_,F=_+1,x=_+2;r=cl(this,p,e,i,u,c,f,N,F,x),r&&(r.faceIndex=Math.floor(_/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{const m=Math.max(0,h.start),v=Math.min(l.count,h.start+h.count);for(let g=m,p=v;g<p;g+=3){const y=g,S=g+1,_=g+2;r=cl(this,s,e,i,u,c,f,y,S,_),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}}}function rM(t,e,n,i,r,o,s,a){let l;if(e.side===Tn?l=i.intersectTriangle(s,o,r,!0,a):l=i.intersectTriangle(r,o,s,e.side===kr,a),l===null)return null;ul.copy(a),ul.applyMatrix4(t.matrixWorld);const u=n.ray.origin.distanceTo(ul);return u<n.near||u>n.far?null:{distance:u,point:ul.clone(),object:t}}function cl(t,e,n,i,r,o,s,a,l,u){t.getVertexPosition(a,ol),t.getVertexPosition(l,sl),t.getVertexPosition(u,al);const c=rM(t,e,n,i,ol,sl,al,Em);if(c){const f=new Me;Wn.getBarycoord(Em,ol,sl,al,f),r&&(c.uv=Wn.getInterpolatedAttribute(r,a,l,u,f,new Tt)),o&&(c.uv1=Wn.getInterpolatedAttribute(o,a,l,u,f,new Tt)),s&&(c.normal=Wn.getInterpolatedAttribute(s,a,l,u,f,new Me),c.normal.dot(i.direction)>0&&c.normal.multiplyScalar(-1));const d={a,b:l,c:u,normal:new Me,materialIndex:0};Wn.getNormal(ol,sl,al,d.normal),c.face=d,c.barycoord=f}return c}class oM extends an{constructor(e=null,n=1,i=1,r,o,s,a,l,u=sn,c=sn,f,d){super(null,s,a,l,u,c,r,o,f,d),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const ed=new Me,sM=new Me,aM=new ct;class io{constructor(e=new Me(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=ed.subVectors(i,n).cross(sM.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(ed),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/r;return o<0||o>1?null:n.copy(e.start).addScaledVector(i,o)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||aM.getNormalMatrix(e),r=this.coplanarPoint(ed).applyMatrix4(e),o=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(o),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Qr=new Uh,lM=new Tt(.5,.5),dl=new Me;class l_{constructor(e=new io,n=new io,i=new io,r=new io,o=new io,s=new io){this.planes=[e,n,i,r,o,s]}set(e,n,i,r,o,s){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(o),a[5].copy(s),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=mi,i=!1){const r=this.planes,o=e.elements,s=o[0],a=o[1],l=o[2],u=o[3],c=o[4],f=o[5],d=o[6],h=o[7],m=o[8],v=o[9],g=o[10],p=o[11],y=o[12],S=o[13],_=o[14],R=o[15];if(r[0].setComponents(u-s,h-c,p-m,R-y).normalize(),r[1].setComponents(u+s,h+c,p+m,R+y).normalize(),r[2].setComponents(u+a,h+f,p+v,R+S).normalize(),r[3].setComponents(u-a,h-f,p-v,R-S).normalize(),i)r[4].setComponents(l,d,g,_).normalize(),r[5].setComponents(u-l,h-d,p-g,R-_).normalize();else if(r[4].setComponents(u-l,h-d,p-g,R-_).normalize(),n===mi)r[5].setComponents(u+l,h+d,p+g,R+_).normalize();else if(n===cu)r[5].setComponents(l,d,g,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Qr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Qr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Qr)}intersectsSprite(e){Qr.center.set(0,0,0);const n=lM.distanceTo(e.center);return Qr.radius=.7071067811865476+n,Qr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Qr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let o=0;o<6;o++)if(n[o].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(dl.x=r.normal.x>0?e.max.x:e.min.x,dl.y=r.normal.y>0?e.max.y:e.min.y,dl.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(dl)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class uM extends an{constructor(e,n,i,r,o=Rt,s=Rt,a,l,u){super(e,n,i,r,o,s,a,l,u),this.isVideoTexture=!0,this.generateMipmaps=!1,this._requestVideoFrameCallbackId=0;const c=this;function f(){c.needsUpdate=!0,c._requestVideoFrameCallbackId=e.requestVideoFrameCallback(f)}"requestVideoFrameCallback"in e&&(this._requestVideoFrameCallbackId=e.requestVideoFrameCallback(f))}clone(){return new this.constructor(this.image).copy(this)}update(){const e=this.image;"requestVideoFrameCallback"in e===!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}dispose(){this._requestVideoFrameCallbackId!==0&&(this.source.data.cancelVideoFrameCallback(this._requestVideoFrameCallbackId),this._requestVideoFrameCallbackId=0),super.dispose()}}class u_ extends an{constructor(e=[],n=So,i,r,o,s,a,l,u,c){super(e,n,i,r,o,s,a,l,u,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ha extends an{constructor(e,n,i=bi,r,o,s,a=sn,l=sn,u,c=rr,f=1){if(c!==rr&&c!==fo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:n,depth:f};super(d,r,o,s,a,l,c,i,u),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Lh(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class cM extends ha{constructor(e,n=bi,i=So,r,o,s=sn,a=sn,l,u=rr){const c={width:e,height:e,depth:1},f=[c,c,c,c,c,c];super(e,e,n,i,r,o,s,a,l,u),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class c_ extends an{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class La extends dr{constructor(e=1,n=1,i=1,r=1,o=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:o,depthSegments:s};const a=this;r=Math.floor(r),o=Math.floor(o),s=Math.floor(s);const l=[],u=[],c=[],f=[];let d=0,h=0;m("z","y","x",-1,-1,i,n,e,s,o,0),m("z","y","x",1,-1,i,n,-e,s,o,1),m("x","z","y",1,1,e,i,n,r,s,2),m("x","z","y",1,-1,e,i,-n,r,s,3),m("x","y","z",1,-1,e,n,i,r,o,4),m("x","y","z",-1,-1,e,n,-i,r,o,5),this.setIndex(l),this.setAttribute("position",new Ji(u,3)),this.setAttribute("normal",new Ji(c,3)),this.setAttribute("uv",new Ji(f,2));function m(v,g,p,y,S,_,R,N,F,x,b){const P=_/F,M=R/x,w=_/2,W=R/2,E=N/2,k=F+1,A=x+1;let I=0,O=0;const z=new Me;for(let q=0;q<A;q++){const te=q*M-W;for(let ne=0;ne<k;ne++){const ye=ne*P-w;z[v]=ye*y,z[g]=te*S,z[p]=E,u.push(z.x,z.y,z.z),z[v]=0,z[g]=0,z[p]=N>0?1:-1,c.push(z.x,z.y,z.z),f.push(ne/F),f.push(1-q/x),I+=1}}for(let q=0;q<x;q++)for(let te=0;te<F;te++){const ne=d+te+k*q,ye=d+te+k*(q+1),Pe=d+(te+1)+k*(q+1),Te=d+(te+1)+k*q;l.push(ne,ye,Te),l.push(ye,Pe,Te),O+=6}a.addGroup(h,O,b),h+=O,d+=I}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new La(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Ua extends dr{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const o=e/2,s=n/2,a=Math.floor(i),l=Math.floor(r),u=a+1,c=l+1,f=e/a,d=n/l,h=[],m=[],v=[],g=[];for(let p=0;p<c;p++){const y=p*d-s;for(let S=0;S<u;S++){const _=S*f-o;m.push(_,-y,0),v.push(0,0,1),g.push(S/a),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let y=0;y<a;y++){const S=y+u*p,_=y+u*(p+1),R=y+1+u*(p+1),N=y+1+u*p;h.push(S,_,N),h.push(_,R,N)}this.setIndex(h),this.setAttribute("position",new Ji(m,3)),this.setAttribute("normal",new Ji(v,3)),this.setAttribute("uv",new Ji(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ua(e.width,e.height,e.widthSegments,e.heightSegments)}}function ds(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(st("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function vn(t){const e={};for(let n=0;n<t.length;n++){const i=ds(t[n]);for(const r in i)e[r]=i[r]}return e}function dM(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function d_(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:gt.workingColorSpace}const fM={clone:ds,merge:vn};var hM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,pM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Qn extends Ku{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=hM,this.fragmentShader=pM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ds(e.uniforms),this.uniformsGroups=dM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const s=this.uniforms[r].value;s&&s.isTexture?n.uniforms[r]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?n.uniforms[r]={type:"c",value:s.getHex()}:s&&s.isVector2?n.uniforms[r]={type:"v2",value:s.toArray()}:s&&s.isVector3?n.uniforms[r]={type:"v3",value:s.toArray()}:s&&s.isVector4?n.uniforms[r]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?n.uniforms[r]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?n.uniforms[r]={type:"m4",value:s.toArray()}:n.uniforms[r]={value:s}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class mM extends Qn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class gM extends Ku{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ES,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class vM extends Ku{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const fl=new Me,hl=new xs,ri=new Me;class f_ extends Nn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Xt,this.projectionMatrix=new Xt,this.projectionMatrixInverse=new Xt,this.coordinateSystem=mi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(fl,hl,ri),ri.x===1&&ri.y===1&&ri.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(fl,hl,ri.set(1,1,1)).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorld.decompose(fl,hl,ri),ri.x===1&&ri.y===1&&ri.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(fl,hl,ri.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const br=new Me,Tm=new Tt,Cm=new Tt;class Gn extends f_{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Rf*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Pc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Rf*2*Math.atan(Math.tan(Pc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){br.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(br.x,br.y).multiplyScalar(-e/br.z),br.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(br.x,br.y).multiplyScalar(-e/br.z)}getViewSize(e,n){return this.getViewBounds(e,Tm,Cm),n.subVectors(Cm,Tm)}setViewOffset(e,n,i,r,o,s){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=o,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Pc*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,o=-.5*r;const s=this.view;if(this.view!==null&&this.view.enabled){const l=s.fullWidth,u=s.fullHeight;o+=s.offsetX*r/l,n-=s.offsetY*i/u,r*=s.width/l,i*=s.height/u}const a=this.filmOffset;a!==0&&(o+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+r,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class Fh extends f_{constructor(e=-1,n=1,i=1,r=-1,o=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=o,this.far=s,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,o,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=o,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let o=i-e,s=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=u*this.view.offsetX,s=o+u*this.view.width,a-=c*this.view.offsetY,l=a-c*this.view.height}this.projectionMatrix.makeOrthographic(o,s,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Ho=-90,Go=1;class _M extends Nn{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Gn(Ho,Go,e,n);r.layers=this.layers,this.add(r);const o=new Gn(Ho,Go,e,n);o.layers=this.layers,this.add(o);const s=new Gn(Ho,Go,e,n);s.layers=this.layers,this.add(s);const a=new Gn(Ho,Go,e,n);a.layers=this.layers,this.add(a);const l=new Gn(Ho,Go,e,n);l.layers=this.layers,this.add(l);const u=new Gn(Ho,Go,e,n);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,o,s,a,l]=n;for(const u of n)this.remove(u);if(e===mi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===cu)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of n)this.add(u),u.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[o,s,a,l,u,c]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,o),e.setRenderTarget(i,1,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,s),e.setRenderTarget(i,2,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,a),e.setRenderTarget(i,3,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,l),e.setRenderTarget(i,4,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,u),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,c),e.setRenderTarget(f,d,h),e.xr.enabled=m,i.texture.needsPMREMUpdate=!0}}class yM extends Gn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function Am(t,e,n,i){const r=xM(i);switch(n){case J0:return t*e;case e_:return t*e/r.components*r.byteLength;case Rh:return t*e/r.components*r.byteLength;case cs:return t*e*2/r.components*r.byteLength;case Ih:return t*e*2/r.components*r.byteLength;case Q0:return t*e*3/r.components*r.byteLength;case bn:return t*e*4/r.components*r.byteLength;case Ph:return t*e*4/r.components*r.byteLength;case Ol:case Bl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case kl:case Vl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case jd:case Qd:return Math.max(t,16)*Math.max(e,8)/4;case Zd:case Jd:return Math.max(t,8)*Math.max(e,8)/2;case ef:case tf:case rf:case of:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case nf:case sf:case af:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case lf:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case uf:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case cf:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case df:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case ff:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case hf:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case pf:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case mf:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case gf:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case vf:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case _f:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case yf:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case xf:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case bf:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case Sf:case Mf:case wf:return Math.ceil(t/4)*Math.ceil(e/4)*16;case Ef:case Tf:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Cf:case Af:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function xM(t){switch(t){case yn:case q0:return{byteLength:1,components:1};case da:case K0:case ir:return{byteLength:2,components:1};case Ch:case Ah:return{byteLength:2,components:4};case bi:case Th:case pi:return{byteLength:4,components:1};case Z0:case j0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Eh}}));typeof window<"u"&&(window.__THREE__?st("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Eh);function h_(){let t=null,e=!1,n=null,i=null;function r(o,s){n(o,s),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(o){n=o},setContext:function(o){t=o}}}function bM(t){const e=new WeakMap;function n(a,l){const u=a.array,c=a.usage,f=u.byteLength,d=t.createBuffer();t.bindBuffer(l,d),t.bufferData(l,u,c),a.onUploadCallback();let h;if(u instanceof Float32Array)h=t.FLOAT;else if(typeof Float16Array<"u"&&u instanceof Float16Array)h=t.HALF_FLOAT;else if(u instanceof Uint16Array)a.isFloat16BufferAttribute?h=t.HALF_FLOAT:h=t.UNSIGNED_SHORT;else if(u instanceof Int16Array)h=t.SHORT;else if(u instanceof Uint32Array)h=t.UNSIGNED_INT;else if(u instanceof Int32Array)h=t.INT;else if(u instanceof Int8Array)h=t.BYTE;else if(u instanceof Uint8Array)h=t.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)h=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:d,type:h,bytesPerElement:u.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,l,u){const c=l.array,f=l.updateRanges;if(t.bindBuffer(u,a),f.length===0)t.bufferSubData(u,0,c);else{f.sort((h,m)=>h.start-m.start);let d=0;for(let h=1;h<f.length;h++){const m=f[d],v=f[h];v.start<=m.start+m.count+1?m.count=Math.max(m.count,v.start+v.count-m.start):(++d,f[d]=v)}f.length=d+1;for(let h=0,m=f.length;h<m;h++){const v=f[h];t.bufferSubData(u,v.start*c.BYTES_PER_ELEMENT,c,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function o(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function s(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const c=e.get(a);(!c||c.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const u=e.get(a);if(u===void 0)e.set(a,n(a,l));else if(u.version<a.version){if(u.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(u.buffer,a,l),u.version=a.version}}return{get:r,remove:o,update:s}}var SM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,MM=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,wM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,EM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,TM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,CM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,AM=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,RM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,IM=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,PM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,NM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,DM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,LM=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,UM=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,FM=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,OM=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,BM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,kM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,VM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,zM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,$M=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,HM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,GM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,WM=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,XM=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,YM=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,qM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,KM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ZM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,jM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,JM="gl_FragColor = linearToOutputTexel( gl_FragColor );",QM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ew=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,tw=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,nw=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,iw=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,rw=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,ow=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,sw=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,aw=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,lw=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,uw=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,cw=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,dw=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,fw=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,hw=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,pw=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,mw=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,gw=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,vw=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,_w=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,yw=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,xw=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,bw=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Sw=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Mw=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ww=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ew=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Tw=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Cw=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Aw=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Rw=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Iw=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Pw=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Nw=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Dw=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Lw=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Uw=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Fw=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ow=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Bw=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,kw=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Vw=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,zw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$w=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Hw=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Gw=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Ww=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Xw=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Yw=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,qw=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Kw=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Zw=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,jw=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Jw=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Qw=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,eE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,tE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,nE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,iE=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,rE=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,oE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,sE=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,aE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,lE=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,uE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,cE=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,dE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,fE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,hE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,pE=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,mE=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,gE=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,vE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,_E=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,yE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,xE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const bE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,SE=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ME=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,wE=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,EE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,TE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,CE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,AE=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,RE=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,IE=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,PE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,NE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,DE=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,LE=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,UE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,FE=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,OE=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,BE=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,kE=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,VE=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zE=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,$E=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,HE=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,GE=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,WE=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,XE=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,YE=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,qE=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,KE=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,ZE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,jE=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,JE=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,QE=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,eT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,dt={alphahash_fragment:SM,alphahash_pars_fragment:MM,alphamap_fragment:wM,alphamap_pars_fragment:EM,alphatest_fragment:TM,alphatest_pars_fragment:CM,aomap_fragment:AM,aomap_pars_fragment:RM,batching_pars_vertex:IM,batching_vertex:PM,begin_vertex:NM,beginnormal_vertex:DM,bsdfs:LM,iridescence_fragment:UM,bumpmap_pars_fragment:FM,clipping_planes_fragment:OM,clipping_planes_pars_fragment:BM,clipping_planes_pars_vertex:kM,clipping_planes_vertex:VM,color_fragment:zM,color_pars_fragment:$M,color_pars_vertex:HM,color_vertex:GM,common:WM,cube_uv_reflection_fragment:XM,defaultnormal_vertex:YM,displacementmap_pars_vertex:qM,displacementmap_vertex:KM,emissivemap_fragment:ZM,emissivemap_pars_fragment:jM,colorspace_fragment:JM,colorspace_pars_fragment:QM,envmap_fragment:ew,envmap_common_pars_fragment:tw,envmap_pars_fragment:nw,envmap_pars_vertex:iw,envmap_physical_pars_fragment:pw,envmap_vertex:rw,fog_vertex:ow,fog_pars_vertex:sw,fog_fragment:aw,fog_pars_fragment:lw,gradientmap_pars_fragment:uw,lightmap_pars_fragment:cw,lights_lambert_fragment:dw,lights_lambert_pars_fragment:fw,lights_pars_begin:hw,lights_toon_fragment:mw,lights_toon_pars_fragment:gw,lights_phong_fragment:vw,lights_phong_pars_fragment:_w,lights_physical_fragment:yw,lights_physical_pars_fragment:xw,lights_fragment_begin:bw,lights_fragment_maps:Sw,lights_fragment_end:Mw,logdepthbuf_fragment:ww,logdepthbuf_pars_fragment:Ew,logdepthbuf_pars_vertex:Tw,logdepthbuf_vertex:Cw,map_fragment:Aw,map_pars_fragment:Rw,map_particle_fragment:Iw,map_particle_pars_fragment:Pw,metalnessmap_fragment:Nw,metalnessmap_pars_fragment:Dw,morphinstance_vertex:Lw,morphcolor_vertex:Uw,morphnormal_vertex:Fw,morphtarget_pars_vertex:Ow,morphtarget_vertex:Bw,normal_fragment_begin:kw,normal_fragment_maps:Vw,normal_pars_fragment:zw,normal_pars_vertex:$w,normal_vertex:Hw,normalmap_pars_fragment:Gw,clearcoat_normal_fragment_begin:Ww,clearcoat_normal_fragment_maps:Xw,clearcoat_pars_fragment:Yw,iridescence_pars_fragment:qw,opaque_fragment:Kw,packing:Zw,premultiplied_alpha_fragment:jw,project_vertex:Jw,dithering_fragment:Qw,dithering_pars_fragment:eE,roughnessmap_fragment:tE,roughnessmap_pars_fragment:nE,shadowmap_pars_fragment:iE,shadowmap_pars_vertex:rE,shadowmap_vertex:oE,shadowmask_pars_fragment:sE,skinbase_vertex:aE,skinning_pars_vertex:lE,skinning_vertex:uE,skinnormal_vertex:cE,specularmap_fragment:dE,specularmap_pars_fragment:fE,tonemapping_fragment:hE,tonemapping_pars_fragment:pE,transmission_fragment:mE,transmission_pars_fragment:gE,uv_pars_fragment:vE,uv_pars_vertex:_E,uv_vertex:yE,worldpos_vertex:xE,background_vert:bE,background_frag:SE,backgroundCube_vert:ME,backgroundCube_frag:wE,cube_vert:EE,cube_frag:TE,depth_vert:CE,depth_frag:AE,distance_vert:RE,distance_frag:IE,equirect_vert:PE,equirect_frag:NE,linedashed_vert:DE,linedashed_frag:LE,meshbasic_vert:UE,meshbasic_frag:FE,meshlambert_vert:OE,meshlambert_frag:BE,meshmatcap_vert:kE,meshmatcap_frag:VE,meshnormal_vert:zE,meshnormal_frag:$E,meshphong_vert:HE,meshphong_frag:GE,meshphysical_vert:WE,meshphysical_frag:XE,meshtoon_vert:YE,meshtoon_frag:qE,points_vert:KE,points_frag:ZE,shadow_vert:jE,shadow_frag:JE,sprite_vert:QE,sprite_frag:eT},ze={common:{diffuse:{value:new Et(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ct},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ct}},envmap:{envMap:{value:null},envMapRotation:{value:new ct},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ct}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ct}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ct},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ct},normalScale:{value:new Tt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ct},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ct}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ct}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ct}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Et(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Et(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0},uvTransform:{value:new ct}},sprite:{diffuse:{value:new Et(16777215)},opacity:{value:1},center:{value:new Tt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ct},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0}}},ci={basic:{uniforms:vn([ze.common,ze.specularmap,ze.envmap,ze.aomap,ze.lightmap,ze.fog]),vertexShader:dt.meshbasic_vert,fragmentShader:dt.meshbasic_frag},lambert:{uniforms:vn([ze.common,ze.specularmap,ze.envmap,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.fog,ze.lights,{emissive:{value:new Et(0)},envMapIntensity:{value:1}}]),vertexShader:dt.meshlambert_vert,fragmentShader:dt.meshlambert_frag},phong:{uniforms:vn([ze.common,ze.specularmap,ze.envmap,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.fog,ze.lights,{emissive:{value:new Et(0)},specular:{value:new Et(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:dt.meshphong_vert,fragmentShader:dt.meshphong_frag},standard:{uniforms:vn([ze.common,ze.envmap,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.roughnessmap,ze.metalnessmap,ze.fog,ze.lights,{emissive:{value:new Et(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:dt.meshphysical_vert,fragmentShader:dt.meshphysical_frag},toon:{uniforms:vn([ze.common,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.gradientmap,ze.fog,ze.lights,{emissive:{value:new Et(0)}}]),vertexShader:dt.meshtoon_vert,fragmentShader:dt.meshtoon_frag},matcap:{uniforms:vn([ze.common,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.fog,{matcap:{value:null}}]),vertexShader:dt.meshmatcap_vert,fragmentShader:dt.meshmatcap_frag},points:{uniforms:vn([ze.points,ze.fog]),vertexShader:dt.points_vert,fragmentShader:dt.points_frag},dashed:{uniforms:vn([ze.common,ze.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:dt.linedashed_vert,fragmentShader:dt.linedashed_frag},depth:{uniforms:vn([ze.common,ze.displacementmap]),vertexShader:dt.depth_vert,fragmentShader:dt.depth_frag},normal:{uniforms:vn([ze.common,ze.bumpmap,ze.normalmap,ze.displacementmap,{opacity:{value:1}}]),vertexShader:dt.meshnormal_vert,fragmentShader:dt.meshnormal_frag},sprite:{uniforms:vn([ze.sprite,ze.fog]),vertexShader:dt.sprite_vert,fragmentShader:dt.sprite_frag},background:{uniforms:{uvTransform:{value:new ct},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:dt.background_vert,fragmentShader:dt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ct}},vertexShader:dt.backgroundCube_vert,fragmentShader:dt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:dt.cube_vert,fragmentShader:dt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:dt.equirect_vert,fragmentShader:dt.equirect_frag},distance:{uniforms:vn([ze.common,ze.displacementmap,{referencePosition:{value:new Me},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:dt.distance_vert,fragmentShader:dt.distance_frag},shadow:{uniforms:vn([ze.lights,ze.fog,{color:{value:new Et(0)},opacity:{value:1}}]),vertexShader:dt.shadow_vert,fragmentShader:dt.shadow_frag}};ci.physical={uniforms:vn([ci.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ct},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ct},clearcoatNormalScale:{value:new Tt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ct},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ct},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ct},sheen:{value:0},sheenColor:{value:new Et(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ct},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ct},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ct},transmissionSamplerSize:{value:new Tt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ct},attenuationDistance:{value:0},attenuationColor:{value:new Et(0)},specularColor:{value:new Et(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ct},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ct},anisotropyVector:{value:new Tt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ct}}]),vertexShader:dt.meshphysical_vert,fragmentShader:dt.meshphysical_frag};const pl={r:0,b:0,g:0},eo=new or,tT=new Xt;function nT(t,e,n,i,r,o){const s=new Et(0);let a=r===!0?0:1,l,u,c=null,f=0,d=null;function h(y){let S=y.isScene===!0?y.background:null;if(S&&S.isTexture){const _=y.backgroundBlurriness>0;S=e.get(S,_)}return S}function m(y){let S=!1;const _=h(y);_===null?g(s,a):_&&_.isColor&&(g(_,1),S=!0);const R=t.xr.getEnvironmentBlendMode();R==="additive"?n.buffers.color.setClear(0,0,0,1,o):R==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(t.autoClear||S)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function v(y,S){const _=h(S);_&&(_.isCubeTexture||_.mapping===qu)?(u===void 0&&(u=new Si(new La(1,1,1),new Qn({name:"BackgroundCubeMaterial",uniforms:ds(ci.backgroundCube.uniforms),vertexShader:ci.backgroundCube.vertexShader,fragmentShader:ci.backgroundCube.fragmentShader,side:Tn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(R,N,F){this.matrixWorld.copyPosition(F.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),eo.copy(S.backgroundRotation),eo.x*=-1,eo.y*=-1,eo.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(eo.y*=-1,eo.z*=-1),u.material.uniforms.envMap.value=_,u.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(tT.makeRotationFromEuler(eo)),u.material.toneMapped=gt.getTransfer(_.colorSpace)!==Mt,(c!==_||f!==_.version||d!==t.toneMapping)&&(u.material.needsUpdate=!0,c=_,f=_.version,d=t.toneMapping),u.layers.enableAll(),y.unshift(u,u.geometry,u.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new Si(new Ua(2,2),new Qn({name:"BackgroundMaterial",uniforms:ds(ci.background.uniforms),vertexShader:ci.background.vertexShader,fragmentShader:ci.background.fragmentShader,side:kr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,l.material.toneMapped=gt.getTransfer(_.colorSpace)!==Mt,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),(c!==_||f!==_.version||d!==t.toneMapping)&&(l.material.needsUpdate=!0,c=_,f=_.version,d=t.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function g(y,S){y.getRGB(pl,d_(t)),n.buffers.color.setClear(pl.r,pl.g,pl.b,S,o)}function p(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return s},setClearColor:function(y,S=1){s.set(y),a=S,g(s,a)},getClearAlpha:function(){return a},setClearAlpha:function(y){a=y,g(s,a)},render:m,addToRenderList:v,dispose:p}}function iT(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=d(null);let o=r,s=!1;function a(M,w,W,E,k){let A=!1;const I=f(M,E,W,w);o!==I&&(o=I,u(o.object)),A=h(M,E,W,k),A&&m(M,E,W,k),k!==null&&e.update(k,t.ELEMENT_ARRAY_BUFFER),(A||s)&&(s=!1,_(M,w,W,E),k!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(k).buffer))}function l(){return t.createVertexArray()}function u(M){return t.bindVertexArray(M)}function c(M){return t.deleteVertexArray(M)}function f(M,w,W,E){const k=E.wireframe===!0;let A=i[w.id];A===void 0&&(A={},i[w.id]=A);const I=M.isInstancedMesh===!0?M.id:0;let O=A[I];O===void 0&&(O={},A[I]=O);let z=O[W.id];z===void 0&&(z={},O[W.id]=z);let q=z[k];return q===void 0&&(q=d(l()),z[k]=q),q}function d(M){const w=[],W=[],E=[];for(let k=0;k<n;k++)w[k]=0,W[k]=0,E[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:w,enabledAttributes:W,attributeDivisors:E,object:M,attributes:{},index:null}}function h(M,w,W,E){const k=o.attributes,A=w.attributes;let I=0;const O=W.getAttributes();for(const z in O)if(O[z].location>=0){const te=k[z];let ne=A[z];if(ne===void 0&&(z==="instanceMatrix"&&M.instanceMatrix&&(ne=M.instanceMatrix),z==="instanceColor"&&M.instanceColor&&(ne=M.instanceColor)),te===void 0||te.attribute!==ne||ne&&te.data!==ne.data)return!0;I++}return o.attributesNum!==I||o.index!==E}function m(M,w,W,E){const k={},A=w.attributes;let I=0;const O=W.getAttributes();for(const z in O)if(O[z].location>=0){let te=A[z];te===void 0&&(z==="instanceMatrix"&&M.instanceMatrix&&(te=M.instanceMatrix),z==="instanceColor"&&M.instanceColor&&(te=M.instanceColor));const ne={};ne.attribute=te,te&&te.data&&(ne.data=te.data),k[z]=ne,I++}o.attributes=k,o.attributesNum=I,o.index=E}function v(){const M=o.newAttributes;for(let w=0,W=M.length;w<W;w++)M[w]=0}function g(M){p(M,0)}function p(M,w){const W=o.newAttributes,E=o.enabledAttributes,k=o.attributeDivisors;W[M]=1,E[M]===0&&(t.enableVertexAttribArray(M),E[M]=1),k[M]!==w&&(t.vertexAttribDivisor(M,w),k[M]=w)}function y(){const M=o.newAttributes,w=o.enabledAttributes;for(let W=0,E=w.length;W<E;W++)w[W]!==M[W]&&(t.disableVertexAttribArray(W),w[W]=0)}function S(M,w,W,E,k,A,I){I===!0?t.vertexAttribIPointer(M,w,W,k,A):t.vertexAttribPointer(M,w,W,E,k,A)}function _(M,w,W,E){v();const k=E.attributes,A=W.getAttributes(),I=w.defaultAttributeValues;for(const O in A){const z=A[O];if(z.location>=0){let q=k[O];if(q===void 0&&(O==="instanceMatrix"&&M.instanceMatrix&&(q=M.instanceMatrix),O==="instanceColor"&&M.instanceColor&&(q=M.instanceColor)),q!==void 0){const te=q.normalized,ne=q.itemSize,ye=e.get(q);if(ye===void 0)continue;const Pe=ye.buffer,Te=ye.type,H=ye.bytesPerElement,B=Te===t.INT||Te===t.UNSIGNED_INT||q.gpuType===Th;if(q.isInterleavedBufferAttribute){const X=q.data,ve=X.stride,we=q.offset;if(X.isInstancedInterleavedBuffer){for(let Ae=0;Ae<z.locationSize;Ae++)p(z.location+Ae,X.meshPerAttribute);M.isInstancedMesh!==!0&&E._maxInstanceCount===void 0&&(E._maxInstanceCount=X.meshPerAttribute*X.count)}else for(let Ae=0;Ae<z.locationSize;Ae++)g(z.location+Ae);t.bindBuffer(t.ARRAY_BUFFER,Pe);for(let Ae=0;Ae<z.locationSize;Ae++)S(z.location+Ae,ne/z.locationSize,Te,te,ve*H,(we+ne/z.locationSize*Ae)*H,B)}else{if(q.isInstancedBufferAttribute){for(let X=0;X<z.locationSize;X++)p(z.location+X,q.meshPerAttribute);M.isInstancedMesh!==!0&&E._maxInstanceCount===void 0&&(E._maxInstanceCount=q.meshPerAttribute*q.count)}else for(let X=0;X<z.locationSize;X++)g(z.location+X);t.bindBuffer(t.ARRAY_BUFFER,Pe);for(let X=0;X<z.locationSize;X++)S(z.location+X,ne/z.locationSize,Te,te,ne*H,ne/z.locationSize*X*H,B)}}else if(I!==void 0){const te=I[O];if(te!==void 0)switch(te.length){case 2:t.vertexAttrib2fv(z.location,te);break;case 3:t.vertexAttrib3fv(z.location,te);break;case 4:t.vertexAttrib4fv(z.location,te);break;default:t.vertexAttrib1fv(z.location,te)}}}}y()}function R(){b();for(const M in i){const w=i[M];for(const W in w){const E=w[W];for(const k in E){const A=E[k];for(const I in A)c(A[I].object),delete A[I];delete E[k]}}delete i[M]}}function N(M){if(i[M.id]===void 0)return;const w=i[M.id];for(const W in w){const E=w[W];for(const k in E){const A=E[k];for(const I in A)c(A[I].object),delete A[I];delete E[k]}}delete i[M.id]}function F(M){for(const w in i){const W=i[w];for(const E in W){const k=W[E];if(k[M.id]===void 0)continue;const A=k[M.id];for(const I in A)c(A[I].object),delete A[I];delete k[M.id]}}}function x(M){for(const w in i){const W=i[w],E=M.isInstancedMesh===!0?M.id:0,k=W[E];if(k!==void 0){for(const A in k){const I=k[A];for(const O in I)c(I[O].object),delete I[O];delete k[A]}delete W[E],Object.keys(W).length===0&&delete i[w]}}}function b(){P(),s=!0,o!==r&&(o=r,u(o.object))}function P(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:b,resetDefaultState:P,dispose:R,releaseStatesOfGeometry:N,releaseStatesOfObject:x,releaseStatesOfProgram:F,initAttributes:v,enableAttribute:g,disableUnusedAttributes:y}}function rT(t,e,n){let i;function r(u){i=u}function o(u,c){t.drawArrays(i,u,c),n.update(c,i,1)}function s(u,c,f){f!==0&&(t.drawArraysInstanced(i,u,c,f),n.update(c,i,f))}function a(u,c,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,u,0,c,0,f);let h=0;for(let m=0;m<f;m++)h+=c[m];n.update(h,i,1)}function l(u,c,f,d){if(f===0)return;const h=e.get("WEBGL_multi_draw");if(h===null)for(let m=0;m<u.length;m++)s(u[m],c[m],d[m]);else{h.multiDrawArraysInstancedWEBGL(i,u,0,c,0,d,0,f);let m=0;for(let v=0;v<f;v++)m+=c[v]*d[v];n.update(m,i,1)}}this.setMode=r,this.render=o,this.renderInstances=s,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function oT(t,e,n,i){let r;function o(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const F=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function s(F){return!(F!==bn&&i.convert(F)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(F){const x=F===ir&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(F!==yn&&i.convert(F)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&F!==pi&&!x)}function l(F){if(F==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";F="mediump"}return F==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=n.precision!==void 0?n.precision:"highp";const c=l(u);c!==u&&(st("WebGLRenderer:",u,"not supported, using",c,"instead."),u=c);const f=n.logarithmicDepthBuffer===!0,d=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),h=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),m=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=t.getParameter(t.MAX_TEXTURE_SIZE),g=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),p=t.getParameter(t.MAX_VERTEX_ATTRIBS),y=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),S=t.getParameter(t.MAX_VARYING_VECTORS),_=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),R=t.getParameter(t.MAX_SAMPLES),N=t.getParameter(t.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:l,textureFormatReadable:s,textureTypeReadable:a,precision:u,logarithmicDepthBuffer:f,reversedDepthBuffer:d,maxTextures:h,maxVertexTextures:m,maxTextureSize:v,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:y,maxVaryings:S,maxFragmentUniforms:_,maxSamples:R,samples:N}}function sT(t){const e=this;let n=null,i=0,r=!1,o=!1;const s=new io,a=new ct,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const h=f.length!==0||d||i!==0||r;return r=d,i=f.length,h},this.beginShadows=function(){o=!0,c(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(f,d){n=c(f,d,0)},this.setState=function(f,d,h){const m=f.clippingPlanes,v=f.clipIntersection,g=f.clipShadows,p=t.get(f);if(!r||m===null||m.length===0||o&&!g)o?c(null):u();else{const y=o?0:i,S=y*4;let _=p.clippingState||null;l.value=_,_=c(m,d,S,h);for(let R=0;R!==S;++R)_[R]=n[R];p.clippingState=_,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=y}};function u(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function c(f,d,h,m){const v=f!==null?f.length:0;let g=null;if(v!==0){if(g=l.value,m!==!0||g===null){const p=h+v*4,y=d.matrixWorldInverse;a.getNormalMatrix(y),(g===null||g.length<p)&&(g=new Float32Array(p));for(let S=0,_=h;S!==v;++S,_+=4)s.copy(f[S]).applyMatrix4(y,a),s.normal.toArray(g,_),g[_+3]=s.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,g}}const Ur=4,Rm=[.125,.215,.35,.446,.526,.582],so=20,aT=256,Ps=new Fh,Im=new Et;let td=null,nd=0,id=0,rd=!1;const lT=new Me;class Pm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,i=.1,r=100,o={}){const{size:s=256,position:a=lT}=o;td=this._renderer.getRenderTarget(),nd=this._renderer.getActiveCubeFace(),id=this._renderer.getActiveMipmapLevel(),rd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(s);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,a),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Lm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Dm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(td,nd,id),this._renderer.xr.enabled=rd,e.scissorTest=!1,Wo(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===So||e.mapping===us?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),td=this._renderer.getRenderTarget(),nd=this._renderer.getActiveCubeFace(),id=this._renderer.getActiveMipmapLevel(),rd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Rt,minFilter:Rt,generateMipmaps:!1,type:ir,format:bn,colorSpace:Vr,depthBuffer:!1},r=Nm(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Nm(e,n,i);const{_lodMax:o}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=uT(o)),this._blurMaterial=dT(o,e,n),this._ggxMaterial=cT(o,e,n)}return r}_compileMaterial(e){const n=new Si(new dr,e);this._renderer.compile(n,Ps)}_sceneToCubeUV(e,n,i,r,o){const l=new Gn(90,1,n,i),u=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],f=this._renderer,d=f.autoClear,h=f.toneMapping;f.getClearColor(Im),f.toneMapping=vi,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(r),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Si(new La,new a_({name:"PMREM.Background",side:Tn,depthWrite:!1,depthTest:!1})));const v=this._backgroundBox,g=v.material;let p=!1;const y=e.background;y?y.isColor&&(g.color.copy(y),e.background=null,p=!0):(g.color.copy(Im),p=!0);for(let S=0;S<6;S++){const _=S%3;_===0?(l.up.set(0,u[S],0),l.position.set(o.x,o.y,o.z),l.lookAt(o.x+c[S],o.y,o.z)):_===1?(l.up.set(0,0,u[S]),l.position.set(o.x,o.y,o.z),l.lookAt(o.x,o.y+c[S],o.z)):(l.up.set(0,u[S],0),l.position.set(o.x,o.y,o.z),l.lookAt(o.x,o.y,o.z+c[S]));const R=this._cubeSize;Wo(r,_*R,S>2?R:0,R,R),f.setRenderTarget(r),p&&f.render(v,l),f.render(e,l)}f.toneMapping=h,f.autoClear=d,e.background=y}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===So||e.mapping===us;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Lm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Dm());const o=r?this._cubemapMaterial:this._equirectMaterial,s=this._lodMeshes[0];s.material=o;const a=o.uniforms;a.envMap.value=e;const l=this._cubeSize;Wo(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(s,Ps)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodMeshes.length;for(let o=1;o<r;o++)this._applyGGXFilter(e,o-1,o);n.autoClear=i}_applyGGXFilter(e,n,i){const r=this._renderer,o=this._pingPongRenderTarget,s=this._ggxMaterial,a=this._lodMeshes[i];a.material=s;const l=s.uniforms,u=i/(this._lodMeshes.length-1),c=n/(this._lodMeshes.length-1),f=Math.sqrt(u*u-c*c),d=0+u*1.25,h=f*d,{_lodMax:m}=this,v=this._sizeLods[i],g=3*v*(i>m-Ur?i-m+Ur:0),p=4*(this._cubeSize-v);l.envMap.value=e.texture,l.roughness.value=h,l.mipInt.value=m-n,Wo(o,g,p,3*v,2*v),r.setRenderTarget(o),r.render(a,Ps),l.envMap.value=o.texture,l.roughness.value=0,l.mipInt.value=m-i,Wo(e,g,p,3*v,2*v),r.setRenderTarget(e),r.render(a,Ps)}_blur(e,n,i,r,o){const s=this._pingPongRenderTarget;this._halfBlur(e,s,n,i,r,"latitudinal",o),this._halfBlur(s,e,i,i,r,"longitudinal",o)}_halfBlur(e,n,i,r,o,s,a){const l=this._renderer,u=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&_t("blur direction must be either latitudinal or longitudinal!");const c=3,f=this._lodMeshes[r];f.material=u;const d=u.uniforms,h=this._sizeLods[i]-1,m=isFinite(o)?Math.PI/(2*h):2*Math.PI/(2*so-1),v=o/m,g=isFinite(o)?1+Math.floor(c*v):so;g>so&&st(`sigmaRadians, ${o}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${so}`);const p=[];let y=0;for(let F=0;F<so;++F){const x=F/v,b=Math.exp(-x*x/2);p.push(b),F===0?y+=b:F<g&&(y+=2*b)}for(let F=0;F<p.length;F++)p[F]=p[F]/y;d.envMap.value=e.texture,d.samples.value=g,d.weights.value=p,d.latitudinal.value=s==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:S}=this;d.dTheta.value=m,d.mipInt.value=S-i;const _=this._sizeLods[r],R=3*_*(r>S-Ur?r-S+Ur:0),N=4*(this._cubeSize-_);Wo(n,R,N,3*_,2*_),l.setRenderTarget(n),l.render(f,Ps)}}function uT(t){const e=[],n=[],i=[];let r=t;const o=t-Ur+1+Rm.length;for(let s=0;s<o;s++){const a=Math.pow(2,r);e.push(a);let l=1/a;s>t-Ur?l=Rm[s-t+Ur-1]:s===0&&(l=0),n.push(l);const u=1/(a-2),c=-u,f=1+u,d=[c,c,f,c,f,f,c,c,f,f,c,f],h=6,m=6,v=3,g=2,p=1,y=new Float32Array(v*m*h),S=new Float32Array(g*m*h),_=new Float32Array(p*m*h);for(let N=0;N<h;N++){const F=N%3*2/3-1,x=N>2?0:-1,b=[F,x,0,F+2/3,x,0,F+2/3,x+1,0,F,x,0,F+2/3,x+1,0,F,x+1,0];y.set(b,v*m*N),S.set(d,g*m*N);const P=[N,N,N,N,N,N];_.set(P,p*m*N)}const R=new dr;R.setAttribute("position",new _i(y,v)),R.setAttribute("uv",new _i(S,g)),R.setAttribute("faceIndex",new _i(_,p)),i.push(new Si(R,null)),r>Ur&&r--}return{lodMeshes:i,sizeLods:e,sigmas:n}}function Nm(t,e,n){const i=new Mn(t,e,n);return i.texture.mapping=qu,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Wo(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function cT(t,e,n){return new Qn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:aT,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Zu(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Zi,depthTest:!1,depthWrite:!1})}function dT(t,e,n){const i=new Float32Array(so),r=new Me(0,1,0);return new Qn({name:"SphericalGaussianBlur",defines:{n:so,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Zu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Zi,depthTest:!1,depthWrite:!1})}function Dm(){return new Qn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Zu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Zi,depthTest:!1,depthWrite:!1})}function Lm(){return new Qn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Zu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Zi,depthTest:!1,depthWrite:!1})}function Zu(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class p_ extends Mn{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new u_(r),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new La(5,5,5),o=new Qn({name:"CubemapFromEquirect",uniforms:ds(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Tn,blending:Zi});o.uniforms.tEquirect.value=n;const s=new Si(r,o),a=n.minFilter;return n.minFilter===co&&(n.minFilter=Rt),new _M(1,10,this).update(e,s),n.minFilter=a,s.geometry.dispose(),s.material.dispose(),this}clear(e,n=!0,i=!0,r=!0){const o=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(n,i,r);e.setRenderTarget(o)}}function fT(t){let e=new WeakMap,n=new WeakMap,i=null;function r(d,h=!1){return d==null?null:h?s(d):o(d)}function o(d){if(d&&d.isTexture){const h=d.mapping;if(h===Ac||h===Rc)if(e.has(d)){const m=e.get(d).texture;return a(m,d.mapping)}else{const m=d.image;if(m&&m.height>0){const v=new p_(m.height);return v.fromEquirectangularTexture(t,d),e.set(d,v),d.addEventListener("dispose",u),a(v.texture,d.mapping)}else return null}}return d}function s(d){if(d&&d.isTexture){const h=d.mapping,m=h===Ac||h===Rc,v=h===So||h===us;if(m||v){let g=n.get(d);const p=g!==void 0?g.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==p)return i===null&&(i=new Pm(t)),g=m?i.fromEquirectangular(d,g):i.fromCubemap(d,g),g.texture.pmremVersion=d.pmremVersion,n.set(d,g),g.texture;if(g!==void 0)return g.texture;{const y=d.image;return m&&y&&y.height>0||v&&y&&l(y)?(i===null&&(i=new Pm(t)),g=m?i.fromEquirectangular(d):i.fromCubemap(d),g.texture.pmremVersion=d.pmremVersion,n.set(d,g),d.addEventListener("dispose",c),g.texture):null}}}return d}function a(d,h){return h===Ac?d.mapping=So:h===Rc&&(d.mapping=us),d}function l(d){let h=0;const m=6;for(let v=0;v<m;v++)d[v]!==void 0&&h++;return h===m}function u(d){const h=d.target;h.removeEventListener("dispose",u);const m=e.get(h);m!==void 0&&(e.delete(h),m.dispose())}function c(d){const h=d.target;h.removeEventListener("dispose",c);const m=n.get(h);m!==void 0&&(n.delete(h),m.dispose())}function f(){e=new WeakMap,n=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:f}}function hT(t){const e={};function n(i){if(e[i]!==void 0)return e[i];const r=t.getExtension(i);return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&fu("WebGLRenderer: "+i+" extension not supported."),r}}}function pT(t,e,n,i){const r={},o=new WeakMap;function s(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const m in d.attributes)e.remove(d.attributes[m]);d.removeEventListener("dispose",s),delete r[d.id];const h=o.get(d);h&&(e.remove(h),o.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,n.memory.geometries--}function a(f,d){return r[d.id]===!0||(d.addEventListener("dispose",s),r[d.id]=!0,n.memory.geometries++),d}function l(f){const d=f.attributes;for(const h in d)e.update(d[h],t.ARRAY_BUFFER)}function u(f){const d=[],h=f.index,m=f.attributes.position;let v=0;if(m===void 0)return;if(h!==null){const y=h.array;v=h.version;for(let S=0,_=y.length;S<_;S+=3){const R=y[S+0],N=y[S+1],F=y[S+2];d.push(R,N,N,F,F,R)}}else{const y=m.array;v=m.version;for(let S=0,_=y.length/3-1;S<_;S+=3){const R=S+0,N=S+1,F=S+2;d.push(R,N,N,F,F,R)}}const g=new(m.count>=65535?s_:o_)(d,1);g.version=v;const p=o.get(f);p&&e.remove(p),o.set(f,g)}function c(f){const d=o.get(f);if(d){const h=f.index;h!==null&&d.version<h.version&&u(f)}else u(f);return o.get(f)}return{get:a,update:l,getWireframeAttribute:c}}function mT(t,e,n){let i;function r(d){i=d}let o,s;function a(d){o=d.type,s=d.bytesPerElement}function l(d,h){t.drawElements(i,h,o,d*s),n.update(h,i,1)}function u(d,h,m){m!==0&&(t.drawElementsInstanced(i,h,o,d*s,m),n.update(h,i,m))}function c(d,h,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,h,0,o,d,0,m);let g=0;for(let p=0;p<m;p++)g+=h[p];n.update(g,i,1)}function f(d,h,m,v){if(m===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<d.length;p++)u(d[p]/s,h[p],v[p]);else{g.multiDrawElementsInstancedWEBGL(i,h,0,o,d,0,v,0,m);let p=0;for(let y=0;y<m;y++)p+=h[y]*v[y];n.update(p,i,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=u,this.renderMultiDraw=c,this.renderMultiDrawInstances=f}function gT(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(o,s,a){switch(n.calls++,s){case t.TRIANGLES:n.triangles+=a*(o/3);break;case t.LINES:n.lines+=a*(o/2);break;case t.LINE_STRIP:n.lines+=a*(o-1);break;case t.LINE_LOOP:n.lines+=a*o;break;case t.POINTS:n.points+=a*o;break;default:_t("WebGLInfo: Unknown draw mode:",s);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function vT(t,e,n){const i=new WeakMap,r=new Vt;function o(s,a,l){const u=s.morphTargetInfluences,c=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=c!==void 0?c.length:0;let d=i.get(a);if(d===void 0||d.count!==f){let P=function(){x.dispose(),i.delete(a),a.removeEventListener("dispose",P)};var h=P;d!==void 0&&d.texture.dispose();const m=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],y=a.morphAttributes.normal||[],S=a.morphAttributes.color||[];let _=0;m===!0&&(_=1),v===!0&&(_=2),g===!0&&(_=3);let R=a.attributes.position.count*_,N=1;R>e.maxTextureSize&&(N=Math.ceil(R/e.maxTextureSize),R=e.maxTextureSize);const F=new Float32Array(R*N*4*f),x=new n_(F,R,N,f);x.type=pi,x.needsUpdate=!0;const b=_*4;for(let M=0;M<f;M++){const w=p[M],W=y[M],E=S[M],k=R*N*4*M;for(let A=0;A<w.count;A++){const I=A*b;m===!0&&(r.fromBufferAttribute(w,A),F[k+I+0]=r.x,F[k+I+1]=r.y,F[k+I+2]=r.z,F[k+I+3]=0),v===!0&&(r.fromBufferAttribute(W,A),F[k+I+4]=r.x,F[k+I+5]=r.y,F[k+I+6]=r.z,F[k+I+7]=0),g===!0&&(r.fromBufferAttribute(E,A),F[k+I+8]=r.x,F[k+I+9]=r.y,F[k+I+10]=r.z,F[k+I+11]=E.itemSize===4?r.w:1)}}d={count:f,texture:x,size:new Tt(R,N)},i.set(a,d),a.addEventListener("dispose",P)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",s.morphTexture,n);else{let m=0;for(let g=0;g<u.length;g++)m+=u[g];const v=a.morphTargetsRelative?1:1-m;l.getUniforms().setValue(t,"morphTargetBaseInfluence",v),l.getUniforms().setValue(t,"morphTargetInfluences",u)}l.getUniforms().setValue(t,"morphTargetsTexture",d.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",d.size)}return{update:o}}function _T(t,e,n,i,r){let o=new WeakMap;function s(u){const c=r.render.frame,f=u.geometry,d=e.get(u,f);if(o.get(d)!==c&&(e.update(d),o.set(d,c)),u.isInstancedMesh&&(u.hasEventListener("dispose",l)===!1&&u.addEventListener("dispose",l),o.get(u)!==c&&(n.update(u.instanceMatrix,t.ARRAY_BUFFER),u.instanceColor!==null&&n.update(u.instanceColor,t.ARRAY_BUFFER),o.set(u,c))),u.isSkinnedMesh){const h=u.skeleton;o.get(h)!==c&&(h.update(),o.set(h,c))}return d}function a(){o=new WeakMap}function l(u){const c=u.target;c.removeEventListener("dispose",l),i.releaseStatesOfObject(c),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:a}}const yT={[V0]:"LINEAR_TONE_MAPPING",[z0]:"REINHARD_TONE_MAPPING",[$0]:"CINEON_TONE_MAPPING",[H0]:"ACES_FILMIC_TONE_MAPPING",[W0]:"AGX_TONE_MAPPING",[X0]:"NEUTRAL_TONE_MAPPING",[G0]:"CUSTOM_TONE_MAPPING"};function xT(t,e,n,i,r){const o=new Mn(e,n,{type:t,depthBuffer:i,stencilBuffer:r}),s=new Mn(e,n,{type:ir,depthBuffer:!1,stencilBuffer:!1}),a=new dr;a.setAttribute("position",new Ji([-1,3,0,-1,-1,0,3,-1,0],3)),a.setAttribute("uv",new Ji([0,2,0,0,2,0],2));const l=new mM({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),u=new Si(a,l),c=new Fh(-1,1,1,-1,0,1);let f=null,d=null,h=!1,m,v=null,g=[],p=!1;this.setSize=function(y,S){o.setSize(y,S),s.setSize(y,S);for(let _=0;_<g.length;_++){const R=g[_];R.setSize&&R.setSize(y,S)}},this.setEffects=function(y){g=y,p=g.length>0&&g[0].isRenderPass===!0;const S=o.width,_=o.height;for(let R=0;R<g.length;R++){const N=g[R];N.setSize&&N.setSize(S,_)}},this.begin=function(y,S){if(h||y.toneMapping===vi&&g.length===0)return!1;if(v=S,S!==null){const _=S.width,R=S.height;(o.width!==_||o.height!==R)&&this.setSize(_,R)}return p===!1&&y.setRenderTarget(o),m=y.toneMapping,y.toneMapping=vi,!0},this.hasRenderPass=function(){return p},this.end=function(y,S){y.toneMapping=m,h=!0;let _=o,R=s;for(let N=0;N<g.length;N++){const F=g[N];if(F.enabled!==!1&&(F.render(y,R,_,S),F.needsSwap!==!1)){const x=_;_=R,R=x}}if(f!==y.outputColorSpace||d!==y.toneMapping){f=y.outputColorSpace,d=y.toneMapping,l.defines={},gt.getTransfer(f)===Mt&&(l.defines.SRGB_TRANSFER="");const N=yT[d];N&&(l.defines[N]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=_.texture,y.setRenderTarget(v),y.render(u,c),v=null,h=!1},this.isCompositing=function(){return h},this.dispose=function(){o.dispose(),s.dispose(),a.dispose(),l.dispose()}}const m_=new an,If=new ha(1,1),g_=new n_,v_=new GS,__=new u_,Um=[],Fm=[],Om=new Float32Array(16),Bm=new Float32Array(9),km=new Float32Array(4);function bs(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let o=Um[r];if(o===void 0&&(o=new Float32Array(r),Um[r]=o),e!==0){i.toArray(o,0);for(let s=1,a=0;s!==e;++s)a+=n,t[s].toArray(o,a)}return o}function jt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Jt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function ju(t,e){let n=Fm[e];n===void 0&&(n=new Int32Array(e),Fm[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function bT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function ST(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(jt(n,e))return;t.uniform2fv(this.addr,e),Jt(n,e)}}function MT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(jt(n,e))return;t.uniform3fv(this.addr,e),Jt(n,e)}}function wT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(jt(n,e))return;t.uniform4fv(this.addr,e),Jt(n,e)}}function ET(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(jt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Jt(n,e)}else{if(jt(n,i))return;km.set(i),t.uniformMatrix2fv(this.addr,!1,km),Jt(n,i)}}function TT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(jt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Jt(n,e)}else{if(jt(n,i))return;Bm.set(i),t.uniformMatrix3fv(this.addr,!1,Bm),Jt(n,i)}}function CT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(jt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Jt(n,e)}else{if(jt(n,i))return;Om.set(i),t.uniformMatrix4fv(this.addr,!1,Om),Jt(n,i)}}function AT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function RT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(jt(n,e))return;t.uniform2iv(this.addr,e),Jt(n,e)}}function IT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(jt(n,e))return;t.uniform3iv(this.addr,e),Jt(n,e)}}function PT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(jt(n,e))return;t.uniform4iv(this.addr,e),Jt(n,e)}}function NT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function DT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(jt(n,e))return;t.uniform2uiv(this.addr,e),Jt(n,e)}}function LT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(jt(n,e))return;t.uniform3uiv(this.addr,e),Jt(n,e)}}function UT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(jt(n,e))return;t.uniform4uiv(this.addr,e),Jt(n,e)}}function FT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let o;this.type===t.SAMPLER_2D_SHADOW?(If.compareFunction=n.isReversedDepthBuffer()?Dh:Nh,o=If):o=m_,n.setTexture2D(e||o,r)}function OT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||v_,r)}function BT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||__,r)}function kT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||g_,r)}function VT(t){switch(t){case 5126:return bT;case 35664:return ST;case 35665:return MT;case 35666:return wT;case 35674:return ET;case 35675:return TT;case 35676:return CT;case 5124:case 35670:return AT;case 35667:case 35671:return RT;case 35668:case 35672:return IT;case 35669:case 35673:return PT;case 5125:return NT;case 36294:return DT;case 36295:return LT;case 36296:return UT;case 35678:case 36198:case 36298:case 36306:case 35682:return FT;case 35679:case 36299:case 36307:return OT;case 35680:case 36300:case 36308:case 36293:return BT;case 36289:case 36303:case 36311:case 36292:return kT}}function zT(t,e){t.uniform1fv(this.addr,e)}function $T(t,e){const n=bs(e,this.size,2);t.uniform2fv(this.addr,n)}function HT(t,e){const n=bs(e,this.size,3);t.uniform3fv(this.addr,n)}function GT(t,e){const n=bs(e,this.size,4);t.uniform4fv(this.addr,n)}function WT(t,e){const n=bs(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function XT(t,e){const n=bs(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function YT(t,e){const n=bs(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function qT(t,e){t.uniform1iv(this.addr,e)}function KT(t,e){t.uniform2iv(this.addr,e)}function ZT(t,e){t.uniform3iv(this.addr,e)}function jT(t,e){t.uniform4iv(this.addr,e)}function JT(t,e){t.uniform1uiv(this.addr,e)}function QT(t,e){t.uniform2uiv(this.addr,e)}function eC(t,e){t.uniform3uiv(this.addr,e)}function tC(t,e){t.uniform4uiv(this.addr,e)}function nC(t,e,n){const i=this.cache,r=e.length,o=ju(n,r);jt(i,o)||(t.uniform1iv(this.addr,o),Jt(i,o));let s;this.type===t.SAMPLER_2D_SHADOW?s=If:s=m_;for(let a=0;a!==r;++a)n.setTexture2D(e[a]||s,o[a])}function iC(t,e,n){const i=this.cache,r=e.length,o=ju(n,r);jt(i,o)||(t.uniform1iv(this.addr,o),Jt(i,o));for(let s=0;s!==r;++s)n.setTexture3D(e[s]||v_,o[s])}function rC(t,e,n){const i=this.cache,r=e.length,o=ju(n,r);jt(i,o)||(t.uniform1iv(this.addr,o),Jt(i,o));for(let s=0;s!==r;++s)n.setTextureCube(e[s]||__,o[s])}function oC(t,e,n){const i=this.cache,r=e.length,o=ju(n,r);jt(i,o)||(t.uniform1iv(this.addr,o),Jt(i,o));for(let s=0;s!==r;++s)n.setTexture2DArray(e[s]||g_,o[s])}function sC(t){switch(t){case 5126:return zT;case 35664:return $T;case 35665:return HT;case 35666:return GT;case 35674:return WT;case 35675:return XT;case 35676:return YT;case 5124:case 35670:return qT;case 35667:case 35671:return KT;case 35668:case 35672:return ZT;case 35669:case 35673:return jT;case 5125:return JT;case 36294:return QT;case 36295:return eC;case 36296:return tC;case 35678:case 36198:case 36298:case 36306:case 35682:return nC;case 35679:case 36299:case 36307:return iC;case 35680:case 36300:case 36308:case 36293:return rC;case 36289:case 36303:case 36311:case 36292:return oC}}class aC{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=VT(n.type)}}class lC{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=sC(n.type)}}class uC{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let o=0,s=r.length;o!==s;++o){const a=r[o];a.setValue(e,n[a.id],i)}}}const od=/(\w+)(\])?(\[|\.)?/g;function Vm(t,e){t.seq.push(e),t.map[e.id]=e}function cC(t,e,n){const i=t.name,r=i.length;for(od.lastIndex=0;;){const o=od.exec(i),s=od.lastIndex;let a=o[1];const l=o[2]==="]",u=o[3];if(l&&(a=a|0),u===void 0||u==="["&&s+2===r){Vm(n,u===void 0?new aC(a,t,e):new lC(a,t,e));break}else{let f=n.map[a];f===void 0&&(f=new uC(a),Vm(n,f)),n=f}}}class zl{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const a=e.getActiveUniform(n,s),l=e.getUniformLocation(n,a.name);cC(a,l,this)}const r=[],o=[];for(const s of this.seq)s.type===e.SAMPLER_2D_SHADOW||s.type===e.SAMPLER_CUBE_SHADOW||s.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(s):o.push(s);r.length>0&&(this.seq=r.concat(o))}setValue(e,n,i,r){const o=this.map[n];o!==void 0&&o.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let o=0,s=n.length;o!==s;++o){const a=n[o],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,o=e.length;r!==o;++r){const s=e[r];s.id in n&&i.push(s)}return i}}function zm(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const dC=37297;let fC=0;function hC(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),o=Math.min(e+6,n.length);for(let s=r;s<o;s++){const a=s+1;i.push(`${a===e?">":" "} ${a}: ${n[s]}`)}return i.join(`
`)}const $m=new ct;function pC(t){gt._getMatrix($m,gt.workingColorSpace,t);const e=`mat3( ${$m.elements.map(n=>n.toFixed(4))} )`;switch(gt.getTransfer(t)){case uu:return[e,"LinearTransferOETF"];case Mt:return[e,"sRGBTransferOETF"];default:return st("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function Hm(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),o=(t.getShaderInfoLog(e)||"").trim();if(i&&o==="")return"";const s=/ERROR: 0:(\d+)/.exec(o);if(s){const a=parseInt(s[1]);return n.toUpperCase()+`

`+o+`

`+hC(t.getShaderSource(e),a)}else return o}function mC(t,e){const n=pC(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const gC={[V0]:"Linear",[z0]:"Reinhard",[$0]:"Cineon",[H0]:"ACESFilmic",[W0]:"AgX",[X0]:"Neutral",[G0]:"Custom"};function vC(t,e){const n=gC[e];return n===void 0?(st("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+t+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const ml=new Me;function _C(){gt.getLuminanceCoefficients(ml);const t=ml.x.toFixed(4),e=ml.y.toFixed(4),n=ml.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function yC(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ks).join(`
`)}function xC(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function bC(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const o=t.getActiveAttrib(e,r),s=o.name;let a=1;o.type===t.FLOAT_MAT2&&(a=2),o.type===t.FLOAT_MAT3&&(a=3),o.type===t.FLOAT_MAT4&&(a=4),n[s]={type:o.type,location:t.getAttribLocation(e,s),locationSize:a}}return n}function ks(t){return t!==""}function Gm(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Wm(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const SC=/^[ \t]*#include +<([\w\d./]+)>/gm;function Pf(t){return t.replace(SC,wC)}const MC=new Map;function wC(t,e){let n=dt[e];if(n===void 0){const i=MC.get(e);if(i!==void 0)n=dt[i],st('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Pf(n)}const EC=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Xm(t){return t.replace(EC,TC)}function TC(t,e,n,i){let r="";for(let o=parseInt(e);o<parseInt(n);o++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return r}function Ym(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const CC={[Fl]:"SHADOWMAP_TYPE_PCF",[Bs]:"SHADOWMAP_TYPE_VSM"};function AC(t){return CC[t.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const RC={[So]:"ENVMAP_TYPE_CUBE",[us]:"ENVMAP_TYPE_CUBE",[qu]:"ENVMAP_TYPE_CUBE_UV"};function IC(t){return t.envMap===!1?"ENVMAP_TYPE_CUBE":RC[t.envMapMode]||"ENVMAP_TYPE_CUBE"}const PC={[us]:"ENVMAP_MODE_REFRACTION"};function NC(t){return t.envMap===!1?"ENVMAP_MODE_REFLECTION":PC[t.envMapMode]||"ENVMAP_MODE_REFLECTION"}const DC={[k0]:"ENVMAP_BLENDING_MULTIPLY",[SS]:"ENVMAP_BLENDING_MIX",[MS]:"ENVMAP_BLENDING_ADD"};function LC(t){return t.envMap===!1?"ENVMAP_BLENDING_NONE":DC[t.combine]||"ENVMAP_BLENDING_NONE"}function UC(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:i,maxMip:n}}function FC(t,e,n,i){const r=t.getContext(),o=n.defines;let s=n.vertexShader,a=n.fragmentShader;const l=AC(n),u=IC(n),c=NC(n),f=LC(n),d=UC(n),h=yC(n),m=xC(o),v=r.createProgram();let g,p,y=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(g=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,m].filter(ks).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,m].filter(ks).join(`
`),p.length>0&&(p+=`
`)):(g=[Ym(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,m,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ks).join(`
`),p=[Ym(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,m,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.envMap?"#define "+c:"",n.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==vi?"#define TONE_MAPPING":"",n.toneMapping!==vi?dt.tonemapping_pars_fragment:"",n.toneMapping!==vi?vC("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",dt.colorspace_pars_fragment,mC("linearToOutputTexel",n.outputColorSpace),_C(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(ks).join(`
`)),s=Pf(s),s=Gm(s,n),s=Wm(s,n),a=Pf(a),a=Gm(a,n),a=Wm(a,n),s=Xm(s),a=Xm(a),n.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,g=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",n.glslVersion===um?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===um?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const S=y+g+s,_=y+p+a,R=zm(r,r.VERTEX_SHADER,S),N=zm(r,r.FRAGMENT_SHADER,_);r.attachShader(v,R),r.attachShader(v,N),n.index0AttributeName!==void 0?r.bindAttribLocation(v,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v);function F(M){if(t.debug.checkShaderErrors){const w=r.getProgramInfoLog(v)||"",W=r.getShaderInfoLog(R)||"",E=r.getShaderInfoLog(N)||"",k=w.trim(),A=W.trim(),I=E.trim();let O=!0,z=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(O=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,v,R,N);else{const q=Hm(r,R,"vertex"),te=Hm(r,N,"fragment");_t("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Material Name: `+M.name+`
Material Type: `+M.type+`

Program Info Log: `+k+`
`+q+`
`+te)}else k!==""?st("WebGLProgram: Program Info Log:",k):(A===""||I==="")&&(z=!1);z&&(M.diagnostics={runnable:O,programLog:k,vertexShader:{log:A,prefix:g},fragmentShader:{log:I,prefix:p}})}r.deleteShader(R),r.deleteShader(N),x=new zl(r,v),b=bC(r,v)}let x;this.getUniforms=function(){return x===void 0&&F(this),x};let b;this.getAttributes=function(){return b===void 0&&F(this),b};let P=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=r.getProgramParameter(v,dC)),P},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=fC++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=R,this.fragmentShader=N,this}let OC=0;class BC{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),o=this._getShaderStage(i),s=this._getShaderCacheForMaterial(e);return s.has(r)===!1&&(s.add(r),r.usedTimes++),s.has(o)===!1&&(s.add(o),o.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new kC(e),n.set(e,i)),i}}class kC{constructor(e){this.id=OC++,this.code=e,this.usedTimes=0}}function VC(t,e,n,i,r,o){const s=new i_,a=new BC,l=new Set,u=[],c=new Map,f=i.logarithmicDepthBuffer;let d=i.precision;const h={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(x){return l.add(x),x===0?"uv":`uv${x}`}function v(x,b,P,M,w){const W=M.fog,E=w.geometry,k=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?M.environment:null,A=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,I=e.get(x.envMap||k,A),O=I&&I.mapping===qu?I.image.height:null,z=h[x.type];x.precision!==null&&(d=i.getMaxPrecision(x.precision),d!==x.precision&&st("WebGLProgram.getParameters:",x.precision,"not supported, using",d,"instead."));const q=E.morphAttributes.position||E.morphAttributes.normal||E.morphAttributes.color,te=q!==void 0?q.length:0;let ne=0;E.morphAttributes.position!==void 0&&(ne=1),E.morphAttributes.normal!==void 0&&(ne=2),E.morphAttributes.color!==void 0&&(ne=3);let ye,Pe,Te,H;if(z){const St=ci[z];ye=St.vertexShader,Pe=St.fragmentShader}else ye=x.vertexShader,Pe=x.fragmentShader,a.update(x),Te=a.getVertexShaderID(x),H=a.getFragmentShaderID(x);const B=t.getRenderTarget(),X=t.state.buffers.depth.getReversed(),ve=w.isInstancedMesh===!0,we=w.isBatchedMesh===!0,Ae=!!x.map,G=!!x.matcap,Y=!!I,L=!!x.aoMap,U=!!x.lightMap,V=!!x.bumpMap,Z=!!x.normalMap,C=!!x.displacementMap,se=!!x.emissiveMap,re=!!x.metalnessMap,oe=!!x.roughnessMap,ue=x.anisotropy>0,D=x.clearcoat>0,T=x.dispersion>0,j=x.iridescence>0,he=x.sheen>0,Se=x.transmission>0,pe=ue&&!!x.anisotropyMap,ke=D&&!!x.clearcoatMap,Ue=D&&!!x.clearcoatNormalMap,ie=D&&!!x.clearcoatRoughnessMap,ce=j&&!!x.iridescenceMap,de=j&&!!x.iridescenceThicknessMap,Q=he&&!!x.sheenColorMap,J=he&&!!x.sheenRoughnessMap,_e=!!x.specularMap,Ie=!!x.specularColorMap,We=!!x.specularIntensityMap,ee=Se&&!!x.transmissionMap,Le=Se&&!!x.thicknessMap,Oe=!!x.gradientMap,Be=!!x.alphaMap,Fe=x.alphaTest>0,Ce=!!x.alphaHash,Ke=!!x.extensions;let ot=vi;x.toneMapped&&(B===null||B.isXRRenderTarget===!0)&&(ot=t.toneMapping);const Lt={shaderID:z,shaderType:x.type,shaderName:x.name,vertexShader:ye,fragmentShader:Pe,defines:x.defines,customVertexShaderID:Te,customFragmentShaderID:H,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:d,batching:we,batchingColor:we&&w._colorsTexture!==null,instancing:ve,instancingColor:ve&&w.instanceColor!==null,instancingMorph:ve&&w.morphTexture!==null,outputColorSpace:B===null?t.outputColorSpace:B.isXRRenderTarget===!0?B.texture.colorSpace:Vr,alphaToCoverage:!!x.alphaToCoverage,map:Ae,matcap:G,envMap:Y,envMapMode:Y&&I.mapping,envMapCubeUVHeight:O,aoMap:L,lightMap:U,bumpMap:V,normalMap:Z,displacementMap:C,emissiveMap:se,normalMapObjectSpace:Z&&x.normalMapType===CS,normalMapTangentSpace:Z&&x.normalMapType===TS,metalnessMap:re,roughnessMap:oe,anisotropy:ue,anisotropyMap:pe,clearcoat:D,clearcoatMap:ke,clearcoatNormalMap:Ue,clearcoatRoughnessMap:ie,dispersion:T,iridescence:j,iridescenceMap:ce,iridescenceThicknessMap:de,sheen:he,sheenColorMap:Q,sheenRoughnessMap:J,specularMap:_e,specularColorMap:Ie,specularIntensityMap:We,transmission:Se,transmissionMap:ee,thicknessMap:Le,gradientMap:Oe,opaque:x.transparent===!1&&x.blending===Qo&&x.alphaToCoverage===!1,alphaMap:Be,alphaTest:Fe,alphaHash:Ce,combine:x.combine,mapUv:Ae&&m(x.map.channel),aoMapUv:L&&m(x.aoMap.channel),lightMapUv:U&&m(x.lightMap.channel),bumpMapUv:V&&m(x.bumpMap.channel),normalMapUv:Z&&m(x.normalMap.channel),displacementMapUv:C&&m(x.displacementMap.channel),emissiveMapUv:se&&m(x.emissiveMap.channel),metalnessMapUv:re&&m(x.metalnessMap.channel),roughnessMapUv:oe&&m(x.roughnessMap.channel),anisotropyMapUv:pe&&m(x.anisotropyMap.channel),clearcoatMapUv:ke&&m(x.clearcoatMap.channel),clearcoatNormalMapUv:Ue&&m(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ie&&m(x.clearcoatRoughnessMap.channel),iridescenceMapUv:ce&&m(x.iridescenceMap.channel),iridescenceThicknessMapUv:de&&m(x.iridescenceThicknessMap.channel),sheenColorMapUv:Q&&m(x.sheenColorMap.channel),sheenRoughnessMapUv:J&&m(x.sheenRoughnessMap.channel),specularMapUv:_e&&m(x.specularMap.channel),specularColorMapUv:Ie&&m(x.specularColorMap.channel),specularIntensityMapUv:We&&m(x.specularIntensityMap.channel),transmissionMapUv:ee&&m(x.transmissionMap.channel),thicknessMapUv:Le&&m(x.thicknessMap.channel),alphaMapUv:Be&&m(x.alphaMap.channel),vertexTangents:!!E.attributes.tangent&&(Z||ue),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!E.attributes.color&&E.attributes.color.itemSize===4,pointsUvs:w.isPoints===!0&&!!E.attributes.uv&&(Ae||Be),fog:!!W,useFog:x.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||E.attributes.normal===void 0&&Z===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:X,skinning:w.isSkinnedMesh===!0,morphTargets:E.morphAttributes.position!==void 0,morphNormals:E.morphAttributes.normal!==void 0,morphColors:E.morphAttributes.color!==void 0,morphTargetsCount:te,morphTextureStride:ne,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:x.dithering,shadowMapEnabled:t.shadowMap.enabled&&P.length>0,shadowMapType:t.shadowMap.type,toneMapping:ot,decodeVideoTexture:Ae&&x.map.isVideoTexture===!0&&gt.getTransfer(x.map.colorSpace)===Mt,decodeVideoTextureEmissive:se&&x.emissiveMap.isVideoTexture===!0&&gt.getTransfer(x.emissiveMap.colorSpace)===Mt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===zi,flipSided:x.side===Tn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:Ke&&x.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ke&&x.extensions.multiDraw===!0||we)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Lt.vertexUv1s=l.has(1),Lt.vertexUv2s=l.has(2),Lt.vertexUv3s=l.has(3),l.clear(),Lt}function g(x){const b=[];if(x.shaderID?b.push(x.shaderID):(b.push(x.customVertexShaderID),b.push(x.customFragmentShaderID)),x.defines!==void 0)for(const P in x.defines)b.push(P),b.push(x.defines[P]);return x.isRawShaderMaterial===!1&&(p(b,x),y(b,x),b.push(t.outputColorSpace)),b.push(x.customProgramCacheKey),b.join()}function p(x,b){x.push(b.precision),x.push(b.outputColorSpace),x.push(b.envMapMode),x.push(b.envMapCubeUVHeight),x.push(b.mapUv),x.push(b.alphaMapUv),x.push(b.lightMapUv),x.push(b.aoMapUv),x.push(b.bumpMapUv),x.push(b.normalMapUv),x.push(b.displacementMapUv),x.push(b.emissiveMapUv),x.push(b.metalnessMapUv),x.push(b.roughnessMapUv),x.push(b.anisotropyMapUv),x.push(b.clearcoatMapUv),x.push(b.clearcoatNormalMapUv),x.push(b.clearcoatRoughnessMapUv),x.push(b.iridescenceMapUv),x.push(b.iridescenceThicknessMapUv),x.push(b.sheenColorMapUv),x.push(b.sheenRoughnessMapUv),x.push(b.specularMapUv),x.push(b.specularColorMapUv),x.push(b.specularIntensityMapUv),x.push(b.transmissionMapUv),x.push(b.thicknessMapUv),x.push(b.combine),x.push(b.fogExp2),x.push(b.sizeAttenuation),x.push(b.morphTargetsCount),x.push(b.morphAttributeCount),x.push(b.numDirLights),x.push(b.numPointLights),x.push(b.numSpotLights),x.push(b.numSpotLightMaps),x.push(b.numHemiLights),x.push(b.numRectAreaLights),x.push(b.numDirLightShadows),x.push(b.numPointLightShadows),x.push(b.numSpotLightShadows),x.push(b.numSpotLightShadowsWithMaps),x.push(b.numLightProbes),x.push(b.shadowMapType),x.push(b.toneMapping),x.push(b.numClippingPlanes),x.push(b.numClipIntersection),x.push(b.depthPacking)}function y(x,b){s.disableAll(),b.instancing&&s.enable(0),b.instancingColor&&s.enable(1),b.instancingMorph&&s.enable(2),b.matcap&&s.enable(3),b.envMap&&s.enable(4),b.normalMapObjectSpace&&s.enable(5),b.normalMapTangentSpace&&s.enable(6),b.clearcoat&&s.enable(7),b.iridescence&&s.enable(8),b.alphaTest&&s.enable(9),b.vertexColors&&s.enable(10),b.vertexAlphas&&s.enable(11),b.vertexUv1s&&s.enable(12),b.vertexUv2s&&s.enable(13),b.vertexUv3s&&s.enable(14),b.vertexTangents&&s.enable(15),b.anisotropy&&s.enable(16),b.alphaHash&&s.enable(17),b.batching&&s.enable(18),b.dispersion&&s.enable(19),b.batchingColor&&s.enable(20),b.gradientMap&&s.enable(21),x.push(s.mask),s.disableAll(),b.fog&&s.enable(0),b.useFog&&s.enable(1),b.flatShading&&s.enable(2),b.logarithmicDepthBuffer&&s.enable(3),b.reversedDepthBuffer&&s.enable(4),b.skinning&&s.enable(5),b.morphTargets&&s.enable(6),b.morphNormals&&s.enable(7),b.morphColors&&s.enable(8),b.premultipliedAlpha&&s.enable(9),b.shadowMapEnabled&&s.enable(10),b.doubleSided&&s.enable(11),b.flipSided&&s.enable(12),b.useDepthPacking&&s.enable(13),b.dithering&&s.enable(14),b.transmission&&s.enable(15),b.sheen&&s.enable(16),b.opaque&&s.enable(17),b.pointsUvs&&s.enable(18),b.decodeVideoTexture&&s.enable(19),b.decodeVideoTextureEmissive&&s.enable(20),b.alphaToCoverage&&s.enable(21),x.push(s.mask)}function S(x){const b=h[x.type];let P;if(b){const M=ci[b];P=fM.clone(M.uniforms)}else P=x.uniforms;return P}function _(x,b){let P=c.get(b);return P!==void 0?++P.usedTimes:(P=new FC(t,b,x,r),u.push(P),c.set(b,P)),P}function R(x){if(--x.usedTimes===0){const b=u.indexOf(x);u[b]=u[u.length-1],u.pop(),c.delete(x.cacheKey),x.destroy()}}function N(x){a.remove(x)}function F(){a.dispose()}return{getParameters:v,getProgramCacheKey:g,getUniforms:S,acquireProgram:_,releaseProgram:R,releaseShaderCache:N,programs:u,dispose:F}}function zC(){let t=new WeakMap;function e(s){return t.has(s)}function n(s){let a=t.get(s);return a===void 0&&(a={},t.set(s,a)),a}function i(s){t.delete(s)}function r(s,a,l){t.get(s)[a]=l}function o(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:o}}function $C(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.materialVariant!==e.materialVariant?t.materialVariant-e.materialVariant:t.z!==e.z?t.z-e.z:t.id-e.id}function qm(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Km(){const t=[];let e=0;const n=[],i=[],r=[];function o(){e=0,n.length=0,i.length=0,r.length=0}function s(d){let h=0;return d.isInstancedMesh&&(h+=2),d.isSkinnedMesh&&(h+=1),h}function a(d,h,m,v,g,p){let y=t[e];return y===void 0?(y={id:d.id,object:d,geometry:h,material:m,materialVariant:s(d),groupOrder:v,renderOrder:d.renderOrder,z:g,group:p},t[e]=y):(y.id=d.id,y.object=d,y.geometry=h,y.material=m,y.materialVariant=s(d),y.groupOrder=v,y.renderOrder=d.renderOrder,y.z=g,y.group=p),e++,y}function l(d,h,m,v,g,p){const y=a(d,h,m,v,g,p);m.transmission>0?i.push(y):m.transparent===!0?r.push(y):n.push(y)}function u(d,h,m,v,g,p){const y=a(d,h,m,v,g,p);m.transmission>0?i.unshift(y):m.transparent===!0?r.unshift(y):n.unshift(y)}function c(d,h){n.length>1&&n.sort(d||$C),i.length>1&&i.sort(h||qm),r.length>1&&r.sort(h||qm)}function f(){for(let d=e,h=t.length;d<h;d++){const m=t[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:n,transmissive:i,transparent:r,init:o,push:l,unshift:u,finish:f,sort:c}}function HC(){let t=new WeakMap;function e(i,r){const o=t.get(i);let s;return o===void 0?(s=new Km,t.set(i,[s])):r>=o.length?(s=new Km,o.push(s)):s=o[r],s}function n(){t=new WeakMap}return{get:e,dispose:n}}function GC(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new Me,color:new Et};break;case"SpotLight":n={position:new Me,direction:new Me,color:new Et,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new Me,color:new Et,distance:0,decay:0};break;case"HemisphereLight":n={direction:new Me,skyColor:new Et,groundColor:new Et};break;case"RectAreaLight":n={color:new Et,position:new Me,halfWidth:new Me,halfHeight:new Me};break}return t[e.id]=n,n}}}function WC(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Tt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Tt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Tt,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let XC=0;function YC(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function qC(t){const e=new GC,n=WC(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new Me);const r=new Me,o=new Xt,s=new Xt;function a(u){let c=0,f=0,d=0;for(let b=0;b<9;b++)i.probe[b].set(0,0,0);let h=0,m=0,v=0,g=0,p=0,y=0,S=0,_=0,R=0,N=0,F=0;u.sort(YC);for(let b=0,P=u.length;b<P;b++){const M=u[b],w=M.color,W=M.intensity,E=M.distance;let k=null;if(M.shadow&&M.shadow.map&&(M.shadow.map.texture.format===cs?k=M.shadow.map.texture:k=M.shadow.map.depthTexture||M.shadow.map.texture),M.isAmbientLight)c+=w.r*W,f+=w.g*W,d+=w.b*W;else if(M.isLightProbe){for(let A=0;A<9;A++)i.probe[A].addScaledVector(M.sh.coefficients[A],W);F++}else if(M.isDirectionalLight){const A=e.get(M);if(A.color.copy(M.color).multiplyScalar(M.intensity),M.castShadow){const I=M.shadow,O=n.get(M);O.shadowIntensity=I.intensity,O.shadowBias=I.bias,O.shadowNormalBias=I.normalBias,O.shadowRadius=I.radius,O.shadowMapSize=I.mapSize,i.directionalShadow[h]=O,i.directionalShadowMap[h]=k,i.directionalShadowMatrix[h]=M.shadow.matrix,y++}i.directional[h]=A,h++}else if(M.isSpotLight){const A=e.get(M);A.position.setFromMatrixPosition(M.matrixWorld),A.color.copy(w).multiplyScalar(W),A.distance=E,A.coneCos=Math.cos(M.angle),A.penumbraCos=Math.cos(M.angle*(1-M.penumbra)),A.decay=M.decay,i.spot[v]=A;const I=M.shadow;if(M.map&&(i.spotLightMap[R]=M.map,R++,I.updateMatrices(M),M.castShadow&&N++),i.spotLightMatrix[v]=I.matrix,M.castShadow){const O=n.get(M);O.shadowIntensity=I.intensity,O.shadowBias=I.bias,O.shadowNormalBias=I.normalBias,O.shadowRadius=I.radius,O.shadowMapSize=I.mapSize,i.spotShadow[v]=O,i.spotShadowMap[v]=k,_++}v++}else if(M.isRectAreaLight){const A=e.get(M);A.color.copy(w).multiplyScalar(W),A.halfWidth.set(M.width*.5,0,0),A.halfHeight.set(0,M.height*.5,0),i.rectArea[g]=A,g++}else if(M.isPointLight){const A=e.get(M);if(A.color.copy(M.color).multiplyScalar(M.intensity),A.distance=M.distance,A.decay=M.decay,M.castShadow){const I=M.shadow,O=n.get(M);O.shadowIntensity=I.intensity,O.shadowBias=I.bias,O.shadowNormalBias=I.normalBias,O.shadowRadius=I.radius,O.shadowMapSize=I.mapSize,O.shadowCameraNear=I.camera.near,O.shadowCameraFar=I.camera.far,i.pointShadow[m]=O,i.pointShadowMap[m]=k,i.pointShadowMatrix[m]=M.shadow.matrix,S++}i.point[m]=A,m++}else if(M.isHemisphereLight){const A=e.get(M);A.skyColor.copy(M.color).multiplyScalar(W),A.groundColor.copy(M.groundColor).multiplyScalar(W),i.hemi[p]=A,p++}}g>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ze.LTC_FLOAT_1,i.rectAreaLTC2=ze.LTC_FLOAT_2):(i.rectAreaLTC1=ze.LTC_HALF_1,i.rectAreaLTC2=ze.LTC_HALF_2)),i.ambient[0]=c,i.ambient[1]=f,i.ambient[2]=d;const x=i.hash;(x.directionalLength!==h||x.pointLength!==m||x.spotLength!==v||x.rectAreaLength!==g||x.hemiLength!==p||x.numDirectionalShadows!==y||x.numPointShadows!==S||x.numSpotShadows!==_||x.numSpotMaps!==R||x.numLightProbes!==F)&&(i.directional.length=h,i.spot.length=v,i.rectArea.length=g,i.point.length=m,i.hemi.length=p,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.pointShadow.length=S,i.pointShadowMap.length=S,i.spotShadow.length=_,i.spotShadowMap.length=_,i.directionalShadowMatrix.length=y,i.pointShadowMatrix.length=S,i.spotLightMatrix.length=_+R-N,i.spotLightMap.length=R,i.numSpotLightShadowsWithMaps=N,i.numLightProbes=F,x.directionalLength=h,x.pointLength=m,x.spotLength=v,x.rectAreaLength=g,x.hemiLength=p,x.numDirectionalShadows=y,x.numPointShadows=S,x.numSpotShadows=_,x.numSpotMaps=R,x.numLightProbes=F,i.version=XC++)}function l(u,c){let f=0,d=0,h=0,m=0,v=0;const g=c.matrixWorldInverse;for(let p=0,y=u.length;p<y;p++){const S=u[p];if(S.isDirectionalLight){const _=i.directional[f];_.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),_.direction.sub(r),_.direction.transformDirection(g),f++}else if(S.isSpotLight){const _=i.spot[h];_.position.setFromMatrixPosition(S.matrixWorld),_.position.applyMatrix4(g),_.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),_.direction.sub(r),_.direction.transformDirection(g),h++}else if(S.isRectAreaLight){const _=i.rectArea[m];_.position.setFromMatrixPosition(S.matrixWorld),_.position.applyMatrix4(g),s.identity(),o.copy(S.matrixWorld),o.premultiply(g),s.extractRotation(o),_.halfWidth.set(S.width*.5,0,0),_.halfHeight.set(0,S.height*.5,0),_.halfWidth.applyMatrix4(s),_.halfHeight.applyMatrix4(s),m++}else if(S.isPointLight){const _=i.point[d];_.position.setFromMatrixPosition(S.matrixWorld),_.position.applyMatrix4(g),d++}else if(S.isHemisphereLight){const _=i.hemi[v];_.direction.setFromMatrixPosition(S.matrixWorld),_.direction.transformDirection(g),v++}}}return{setup:a,setupView:l,state:i}}function Zm(t){const e=new qC(t),n=[],i=[];function r(c){u.camera=c,n.length=0,i.length=0}function o(c){n.push(c)}function s(c){i.push(c)}function a(){e.setup(n)}function l(c){e.setupView(n,c)}const u={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:u,setupLights:a,setupLightsView:l,pushLight:o,pushShadow:s}}function KC(t){let e=new WeakMap;function n(r,o=0){const s=e.get(r);let a;return s===void 0?(a=new Zm(t),e.set(r,[a])):o>=s.length?(a=new Zm(t),s.push(a)):a=s[o],a}function i(){e=new WeakMap}return{get:n,dispose:i}}const ZC=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,jC=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,JC=[new Me(1,0,0),new Me(-1,0,0),new Me(0,1,0),new Me(0,-1,0),new Me(0,0,1),new Me(0,0,-1)],QC=[new Me(0,-1,0),new Me(0,-1,0),new Me(0,0,1),new Me(0,0,-1),new Me(0,-1,0),new Me(0,-1,0)],jm=new Xt,Ns=new Me,sd=new Me;function eA(t,e,n){let i=new l_;const r=new Tt,o=new Tt,s=new Vt,a=new gM,l=new vM,u={},c=n.maxTextureSize,f={[kr]:Tn,[Tn]:kr,[zi]:zi},d=new Qn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Tt},radius:{value:4}},vertexShader:ZC,fragmentShader:jC}),h=d.clone();h.defines.HORIZONTAL_PASS=1;const m=new dr;m.setAttribute("position",new _i(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Si(m,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Fl;let p=this.type;this.render=function(N,F,x){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||N.length===0)return;this.type===iS&&(st("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Fl);const b=t.getRenderTarget(),P=t.getActiveCubeFace(),M=t.getActiveMipmapLevel(),w=t.state;w.setBlending(Zi),w.buffers.depth.getReversed()===!0?w.buffers.color.setClear(0,0,0,0):w.buffers.color.setClear(1,1,1,1),w.buffers.depth.setTest(!0),w.setScissorTest(!1);const W=p!==this.type;W&&F.traverse(function(E){E.material&&(Array.isArray(E.material)?E.material.forEach(k=>k.needsUpdate=!0):E.material.needsUpdate=!0)});for(let E=0,k=N.length;E<k;E++){const A=N[E],I=A.shadow;if(I===void 0){st("WebGLShadowMap:",A,"has no shadow.");continue}if(I.autoUpdate===!1&&I.needsUpdate===!1)continue;r.copy(I.mapSize);const O=I.getFrameExtents();r.multiply(O),o.copy(I.mapSize),(r.x>c||r.y>c)&&(r.x>c&&(o.x=Math.floor(c/O.x),r.x=o.x*O.x,I.mapSize.x=o.x),r.y>c&&(o.y=Math.floor(c/O.y),r.y=o.y*O.y,I.mapSize.y=o.y));const z=t.state.buffers.depth.getReversed();if(I.camera._reversedDepth=z,I.map===null||W===!0){if(I.map!==null&&(I.map.depthTexture!==null&&(I.map.depthTexture.dispose(),I.map.depthTexture=null),I.map.dispose()),this.type===Bs){if(A.isPointLight){st("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}I.map=new Mn(r.x,r.y,{format:cs,type:ir,minFilter:Rt,magFilter:Rt,generateMipmaps:!1}),I.map.texture.name=A.name+".shadowMap",I.map.depthTexture=new ha(r.x,r.y,pi),I.map.depthTexture.name=A.name+".shadowMapDepth",I.map.depthTexture.format=rr,I.map.depthTexture.compareFunction=null,I.map.depthTexture.minFilter=sn,I.map.depthTexture.magFilter=sn}else A.isPointLight?(I.map=new p_(r.x),I.map.depthTexture=new cM(r.x,bi)):(I.map=new Mn(r.x,r.y),I.map.depthTexture=new ha(r.x,r.y,bi)),I.map.depthTexture.name=A.name+".shadowMap",I.map.depthTexture.format=rr,this.type===Fl?(I.map.depthTexture.compareFunction=z?Dh:Nh,I.map.depthTexture.minFilter=Rt,I.map.depthTexture.magFilter=Rt):(I.map.depthTexture.compareFunction=null,I.map.depthTexture.minFilter=sn,I.map.depthTexture.magFilter=sn);I.camera.updateProjectionMatrix()}const q=I.map.isWebGLCubeRenderTarget?6:1;for(let te=0;te<q;te++){if(I.map.isWebGLCubeRenderTarget)t.setRenderTarget(I.map,te),t.clear();else{te===0&&(t.setRenderTarget(I.map),t.clear());const ne=I.getViewport(te);s.set(o.x*ne.x,o.y*ne.y,o.x*ne.z,o.y*ne.w),w.viewport(s)}if(A.isPointLight){const ne=I.camera,ye=I.matrix,Pe=A.distance||ne.far;Pe!==ne.far&&(ne.far=Pe,ne.updateProjectionMatrix()),Ns.setFromMatrixPosition(A.matrixWorld),ne.position.copy(Ns),sd.copy(ne.position),sd.add(JC[te]),ne.up.copy(QC[te]),ne.lookAt(sd),ne.updateMatrixWorld(),ye.makeTranslation(-Ns.x,-Ns.y,-Ns.z),jm.multiplyMatrices(ne.projectionMatrix,ne.matrixWorldInverse),I._frustum.setFromProjectionMatrix(jm,ne.coordinateSystem,ne.reversedDepth)}else I.updateMatrices(A);i=I.getFrustum(),_(F,x,I.camera,A,this.type)}I.isPointLightShadow!==!0&&this.type===Bs&&y(I,x),I.needsUpdate=!1}p=this.type,g.needsUpdate=!1,t.setRenderTarget(b,P,M)};function y(N,F){const x=e.update(v);d.defines.VSM_SAMPLES!==N.blurSamples&&(d.defines.VSM_SAMPLES=N.blurSamples,h.defines.VSM_SAMPLES=N.blurSamples,d.needsUpdate=!0,h.needsUpdate=!0),N.mapPass===null&&(N.mapPass=new Mn(r.x,r.y,{format:cs,type:ir})),d.uniforms.shadow_pass.value=N.map.depthTexture,d.uniforms.resolution.value=N.mapSize,d.uniforms.radius.value=N.radius,t.setRenderTarget(N.mapPass),t.clear(),t.renderBufferDirect(F,null,x,d,v,null),h.uniforms.shadow_pass.value=N.mapPass.texture,h.uniforms.resolution.value=N.mapSize,h.uniforms.radius.value=N.radius,t.setRenderTarget(N.map),t.clear(),t.renderBufferDirect(F,null,x,h,v,null)}function S(N,F,x,b){let P=null;const M=x.isPointLight===!0?N.customDistanceMaterial:N.customDepthMaterial;if(M!==void 0)P=M;else if(P=x.isPointLight===!0?l:a,t.localClippingEnabled&&F.clipShadows===!0&&Array.isArray(F.clippingPlanes)&&F.clippingPlanes.length!==0||F.displacementMap&&F.displacementScale!==0||F.alphaMap&&F.alphaTest>0||F.map&&F.alphaTest>0||F.alphaToCoverage===!0){const w=P.uuid,W=F.uuid;let E=u[w];E===void 0&&(E={},u[w]=E);let k=E[W];k===void 0&&(k=P.clone(),E[W]=k,F.addEventListener("dispose",R)),P=k}if(P.visible=F.visible,P.wireframe=F.wireframe,b===Bs?P.side=F.shadowSide!==null?F.shadowSide:F.side:P.side=F.shadowSide!==null?F.shadowSide:f[F.side],P.alphaMap=F.alphaMap,P.alphaTest=F.alphaToCoverage===!0?.5:F.alphaTest,P.map=F.map,P.clipShadows=F.clipShadows,P.clippingPlanes=F.clippingPlanes,P.clipIntersection=F.clipIntersection,P.displacementMap=F.displacementMap,P.displacementScale=F.displacementScale,P.displacementBias=F.displacementBias,P.wireframeLinewidth=F.wireframeLinewidth,P.linewidth=F.linewidth,x.isPointLight===!0&&P.isMeshDistanceMaterial===!0){const w=t.properties.get(P);w.light=x}return P}function _(N,F,x,b,P){if(N.visible===!1)return;if(N.layers.test(F.layers)&&(N.isMesh||N.isLine||N.isPoints)&&(N.castShadow||N.receiveShadow&&P===Bs)&&(!N.frustumCulled||i.intersectsObject(N))){N.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,N.matrixWorld);const W=e.update(N),E=N.material;if(Array.isArray(E)){const k=W.groups;for(let A=0,I=k.length;A<I;A++){const O=k[A],z=E[O.materialIndex];if(z&&z.visible){const q=S(N,z,b,P);N.onBeforeShadow(t,N,F,x,W,q,O),t.renderBufferDirect(x,null,W,q,N,O),N.onAfterShadow(t,N,F,x,W,q,O)}}}else if(E.visible){const k=S(N,E,b,P);N.onBeforeShadow(t,N,F,x,W,k,null),t.renderBufferDirect(x,null,W,k,N,null),N.onAfterShadow(t,N,F,x,W,k,null)}}const w=N.children;for(let W=0,E=w.length;W<E;W++)_(w[W],F,x,b,P)}function R(N){N.target.removeEventListener("dispose",R);for(const x in u){const b=u[x],P=N.target.uuid;P in b&&(b[P].dispose(),delete b[P])}}}function tA(t,e){function n(){let ee=!1;const Le=new Vt;let Oe=null;const Be=new Vt(0,0,0,0);return{setMask:function(Fe){Oe!==Fe&&!ee&&(t.colorMask(Fe,Fe,Fe,Fe),Oe=Fe)},setLocked:function(Fe){ee=Fe},setClear:function(Fe,Ce,Ke,ot,Lt){Lt===!0&&(Fe*=ot,Ce*=ot,Ke*=ot),Le.set(Fe,Ce,Ke,ot),Be.equals(Le)===!1&&(t.clearColor(Fe,Ce,Ke,ot),Be.copy(Le))},reset:function(){ee=!1,Oe=null,Be.set(-1,0,0,0)}}}function i(){let ee=!1,Le=!1,Oe=null,Be=null,Fe=null;return{setReversed:function(Ce){if(Le!==Ce){const Ke=e.get("EXT_clip_control");Ce?Ke.clipControlEXT(Ke.LOWER_LEFT_EXT,Ke.ZERO_TO_ONE_EXT):Ke.clipControlEXT(Ke.LOWER_LEFT_EXT,Ke.NEGATIVE_ONE_TO_ONE_EXT),Le=Ce;const ot=Fe;Fe=null,this.setClear(ot)}},getReversed:function(){return Le},setTest:function(Ce){Ce?B(t.DEPTH_TEST):X(t.DEPTH_TEST)},setMask:function(Ce){Oe!==Ce&&!ee&&(t.depthMask(Ce),Oe=Ce)},setFunc:function(Ce){if(Le&&(Ce=OS[Ce]),Be!==Ce){switch(Ce){case zd:t.depthFunc(t.NEVER);break;case $d:t.depthFunc(t.ALWAYS);break;case Hd:t.depthFunc(t.LESS);break;case ls:t.depthFunc(t.LEQUAL);break;case Gd:t.depthFunc(t.EQUAL);break;case Wd:t.depthFunc(t.GEQUAL);break;case Xd:t.depthFunc(t.GREATER);break;case Yd:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}Be=Ce}},setLocked:function(Ce){ee=Ce},setClear:function(Ce){Fe!==Ce&&(Fe=Ce,Le&&(Ce=1-Ce),t.clearDepth(Ce))},reset:function(){ee=!1,Oe=null,Be=null,Fe=null,Le=!1}}}function r(){let ee=!1,Le=null,Oe=null,Be=null,Fe=null,Ce=null,Ke=null,ot=null,Lt=null;return{setTest:function(St){ee||(St?B(t.STENCIL_TEST):X(t.STENCIL_TEST))},setMask:function(St){Le!==St&&!ee&&(t.stencilMask(St),Le=St)},setFunc:function(St,Ti,Ci){(Oe!==St||Be!==Ti||Fe!==Ci)&&(t.stencilFunc(St,Ti,Ci),Oe=St,Be=Ti,Fe=Ci)},setOp:function(St,Ti,Ci){(Ce!==St||Ke!==Ti||ot!==Ci)&&(t.stencilOp(St,Ti,Ci),Ce=St,Ke=Ti,ot=Ci)},setLocked:function(St){ee=St},setClear:function(St){Lt!==St&&(t.clearStencil(St),Lt=St)},reset:function(){ee=!1,Le=null,Oe=null,Be=null,Fe=null,Ce=null,Ke=null,ot=null,Lt=null}}}const o=new n,s=new i,a=new r,l=new WeakMap,u=new WeakMap;let c={},f={},d=new WeakMap,h=[],m=null,v=!1,g=null,p=null,y=null,S=null,_=null,R=null,N=null,F=new Et(0,0,0),x=0,b=!1,P=null,M=null,w=null,W=null,E=null;const k=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let A=!1,I=0;const O=t.getParameter(t.VERSION);O.indexOf("WebGL")!==-1?(I=parseFloat(/^WebGL (\d)/.exec(O)[1]),A=I>=1):O.indexOf("OpenGL ES")!==-1&&(I=parseFloat(/^OpenGL ES (\d)/.exec(O)[1]),A=I>=2);let z=null,q={};const te=t.getParameter(t.SCISSOR_BOX),ne=t.getParameter(t.VIEWPORT),ye=new Vt().fromArray(te),Pe=new Vt().fromArray(ne);function Te(ee,Le,Oe,Be){const Fe=new Uint8Array(4),Ce=t.createTexture();t.bindTexture(ee,Ce),t.texParameteri(ee,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(ee,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Ke=0;Ke<Oe;Ke++)ee===t.TEXTURE_3D||ee===t.TEXTURE_2D_ARRAY?t.texImage3D(Le,0,t.RGBA,1,1,Be,0,t.RGBA,t.UNSIGNED_BYTE,Fe):t.texImage2D(Le+Ke,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,Fe);return Ce}const H={};H[t.TEXTURE_2D]=Te(t.TEXTURE_2D,t.TEXTURE_2D,1),H[t.TEXTURE_CUBE_MAP]=Te(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),H[t.TEXTURE_2D_ARRAY]=Te(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),H[t.TEXTURE_3D]=Te(t.TEXTURE_3D,t.TEXTURE_3D,1,1),o.setClear(0,0,0,1),s.setClear(1),a.setClear(0),B(t.DEPTH_TEST),s.setFunc(ls),V(!1),Z(im),B(t.CULL_FACE),L(Zi);function B(ee){c[ee]!==!0&&(t.enable(ee),c[ee]=!0)}function X(ee){c[ee]!==!1&&(t.disable(ee),c[ee]=!1)}function ve(ee,Le){return f[ee]!==Le?(t.bindFramebuffer(ee,Le),f[ee]=Le,ee===t.DRAW_FRAMEBUFFER&&(f[t.FRAMEBUFFER]=Le),ee===t.FRAMEBUFFER&&(f[t.DRAW_FRAMEBUFFER]=Le),!0):!1}function we(ee,Le){let Oe=h,Be=!1;if(ee){Oe=d.get(Le),Oe===void 0&&(Oe=[],d.set(Le,Oe));const Fe=ee.textures;if(Oe.length!==Fe.length||Oe[0]!==t.COLOR_ATTACHMENT0){for(let Ce=0,Ke=Fe.length;Ce<Ke;Ce++)Oe[Ce]=t.COLOR_ATTACHMENT0+Ce;Oe.length=Fe.length,Be=!0}}else Oe[0]!==t.BACK&&(Oe[0]=t.BACK,Be=!0);Be&&t.drawBuffers(Oe)}function Ae(ee){return m!==ee?(t.useProgram(ee),m=ee,!0):!1}const G={[oo]:t.FUNC_ADD,[oS]:t.FUNC_SUBTRACT,[sS]:t.FUNC_REVERSE_SUBTRACT};G[aS]=t.MIN,G[lS]=t.MAX;const Y={[uS]:t.ZERO,[cS]:t.ONE,[dS]:t.SRC_COLOR,[kd]:t.SRC_ALPHA,[vS]:t.SRC_ALPHA_SATURATE,[mS]:t.DST_COLOR,[hS]:t.DST_ALPHA,[fS]:t.ONE_MINUS_SRC_COLOR,[Vd]:t.ONE_MINUS_SRC_ALPHA,[gS]:t.ONE_MINUS_DST_COLOR,[pS]:t.ONE_MINUS_DST_ALPHA,[_S]:t.CONSTANT_COLOR,[yS]:t.ONE_MINUS_CONSTANT_COLOR,[xS]:t.CONSTANT_ALPHA,[bS]:t.ONE_MINUS_CONSTANT_ALPHA};function L(ee,Le,Oe,Be,Fe,Ce,Ke,ot,Lt,St){if(ee===Zi){v===!0&&(X(t.BLEND),v=!1);return}if(v===!1&&(B(t.BLEND),v=!0),ee!==rS){if(ee!==g||St!==b){if((p!==oo||_!==oo)&&(t.blendEquation(t.FUNC_ADD),p=oo,_=oo),St)switch(ee){case Qo:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case rm:t.blendFunc(t.ONE,t.ONE);break;case om:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case sm:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:_t("WebGLState: Invalid blending: ",ee);break}else switch(ee){case Qo:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case rm:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case om:_t("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case sm:_t("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:_t("WebGLState: Invalid blending: ",ee);break}y=null,S=null,R=null,N=null,F.set(0,0,0),x=0,g=ee,b=St}return}Fe=Fe||Le,Ce=Ce||Oe,Ke=Ke||Be,(Le!==p||Fe!==_)&&(t.blendEquationSeparate(G[Le],G[Fe]),p=Le,_=Fe),(Oe!==y||Be!==S||Ce!==R||Ke!==N)&&(t.blendFuncSeparate(Y[Oe],Y[Be],Y[Ce],Y[Ke]),y=Oe,S=Be,R=Ce,N=Ke),(ot.equals(F)===!1||Lt!==x)&&(t.blendColor(ot.r,ot.g,ot.b,Lt),F.copy(ot),x=Lt),g=ee,b=!1}function U(ee,Le){ee.side===zi?X(t.CULL_FACE):B(t.CULL_FACE);let Oe=ee.side===Tn;Le&&(Oe=!Oe),V(Oe),ee.blending===Qo&&ee.transparent===!1?L(Zi):L(ee.blending,ee.blendEquation,ee.blendSrc,ee.blendDst,ee.blendEquationAlpha,ee.blendSrcAlpha,ee.blendDstAlpha,ee.blendColor,ee.blendAlpha,ee.premultipliedAlpha),s.setFunc(ee.depthFunc),s.setTest(ee.depthTest),s.setMask(ee.depthWrite),o.setMask(ee.colorWrite);const Be=ee.stencilWrite;a.setTest(Be),Be&&(a.setMask(ee.stencilWriteMask),a.setFunc(ee.stencilFunc,ee.stencilRef,ee.stencilFuncMask),a.setOp(ee.stencilFail,ee.stencilZFail,ee.stencilZPass)),se(ee.polygonOffset,ee.polygonOffsetFactor,ee.polygonOffsetUnits),ee.alphaToCoverage===!0?B(t.SAMPLE_ALPHA_TO_COVERAGE):X(t.SAMPLE_ALPHA_TO_COVERAGE)}function V(ee){P!==ee&&(ee?t.frontFace(t.CW):t.frontFace(t.CCW),P=ee)}function Z(ee){ee!==tS?(B(t.CULL_FACE),ee!==M&&(ee===im?t.cullFace(t.BACK):ee===nS?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):X(t.CULL_FACE),M=ee}function C(ee){ee!==w&&(A&&t.lineWidth(ee),w=ee)}function se(ee,Le,Oe){ee?(B(t.POLYGON_OFFSET_FILL),(W!==Le||E!==Oe)&&(W=Le,E=Oe,s.getReversed()&&(Le=-Le),t.polygonOffset(Le,Oe))):X(t.POLYGON_OFFSET_FILL)}function re(ee){ee?B(t.SCISSOR_TEST):X(t.SCISSOR_TEST)}function oe(ee){ee===void 0&&(ee=t.TEXTURE0+k-1),z!==ee&&(t.activeTexture(ee),z=ee)}function ue(ee,Le,Oe){Oe===void 0&&(z===null?Oe=t.TEXTURE0+k-1:Oe=z);let Be=q[Oe];Be===void 0&&(Be={type:void 0,texture:void 0},q[Oe]=Be),(Be.type!==ee||Be.texture!==Le)&&(z!==Oe&&(t.activeTexture(Oe),z=Oe),t.bindTexture(ee,Le||H[ee]),Be.type=ee,Be.texture=Le)}function D(){const ee=q[z];ee!==void 0&&ee.type!==void 0&&(t.bindTexture(ee.type,null),ee.type=void 0,ee.texture=void 0)}function T(){try{t.compressedTexImage2D(...arguments)}catch(ee){_t("WebGLState:",ee)}}function j(){try{t.compressedTexImage3D(...arguments)}catch(ee){_t("WebGLState:",ee)}}function he(){try{t.texSubImage2D(...arguments)}catch(ee){_t("WebGLState:",ee)}}function Se(){try{t.texSubImage3D(...arguments)}catch(ee){_t("WebGLState:",ee)}}function pe(){try{t.compressedTexSubImage2D(...arguments)}catch(ee){_t("WebGLState:",ee)}}function ke(){try{t.compressedTexSubImage3D(...arguments)}catch(ee){_t("WebGLState:",ee)}}function Ue(){try{t.texStorage2D(...arguments)}catch(ee){_t("WebGLState:",ee)}}function ie(){try{t.texStorage3D(...arguments)}catch(ee){_t("WebGLState:",ee)}}function ce(){try{t.texImage2D(...arguments)}catch(ee){_t("WebGLState:",ee)}}function de(){try{t.texImage3D(...arguments)}catch(ee){_t("WebGLState:",ee)}}function Q(ee){ye.equals(ee)===!1&&(t.scissor(ee.x,ee.y,ee.z,ee.w),ye.copy(ee))}function J(ee){Pe.equals(ee)===!1&&(t.viewport(ee.x,ee.y,ee.z,ee.w),Pe.copy(ee))}function _e(ee,Le){let Oe=u.get(Le);Oe===void 0&&(Oe=new WeakMap,u.set(Le,Oe));let Be=Oe.get(ee);Be===void 0&&(Be=t.getUniformBlockIndex(Le,ee.name),Oe.set(ee,Be))}function Ie(ee,Le){const Be=u.get(Le).get(ee);l.get(Le)!==Be&&(t.uniformBlockBinding(Le,Be,ee.__bindingPointIndex),l.set(Le,Be))}function We(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),s.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),c={},z=null,q={},f={},d=new WeakMap,h=[],m=null,v=!1,g=null,p=null,y=null,S=null,_=null,R=null,N=null,F=new Et(0,0,0),x=0,b=!1,P=null,M=null,w=null,W=null,E=null,ye.set(0,0,t.canvas.width,t.canvas.height),Pe.set(0,0,t.canvas.width,t.canvas.height),o.reset(),s.reset(),a.reset()}return{buffers:{color:o,depth:s,stencil:a},enable:B,disable:X,bindFramebuffer:ve,drawBuffers:we,useProgram:Ae,setBlending:L,setMaterial:U,setFlipSided:V,setCullFace:Z,setLineWidth:C,setPolygonOffset:se,setScissorTest:re,activeTexture:oe,bindTexture:ue,unbindTexture:D,compressedTexImage2D:T,compressedTexImage3D:j,texImage2D:ce,texImage3D:de,updateUBOMapping:_e,uniformBlockBinding:Ie,texStorage2D:Ue,texStorage3D:ie,texSubImage2D:he,texSubImage3D:Se,compressedTexSubImage2D:pe,compressedTexSubImage3D:ke,scissor:Q,viewport:J,reset:We}}function nA(t,e,n,i,r,o,s){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new Tt,c=new WeakMap;let f;const d=new WeakMap;let h=!1;try{h=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(D,T){return h?new OffscreenCanvas(D,T):du("canvas")}function v(D,T,j){let he=1;const Se=ue(D);if((Se.width>j||Se.height>j)&&(he=j/Math.max(Se.width,Se.height)),he<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const pe=Math.floor(he*Se.width),ke=Math.floor(he*Se.height);f===void 0&&(f=m(pe,ke));const Ue=T?m(pe,ke):f;return Ue.width=pe,Ue.height=ke,Ue.getContext("2d").drawImage(D,0,0,pe,ke),st("WebGLRenderer: Texture has been resized from ("+Se.width+"x"+Se.height+") to ("+pe+"x"+ke+")."),Ue}else return"data"in D&&st("WebGLRenderer: Image in DataTexture is too big ("+Se.width+"x"+Se.height+")."),D;return D}function g(D){return D.generateMipmaps}function p(D){t.generateMipmap(D)}function y(D){return D.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?t.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function S(D,T,j,he,Se=!1){if(D!==null){if(t[D]!==void 0)return t[D];st("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let pe=T;if(T===t.RED&&(j===t.FLOAT&&(pe=t.R32F),j===t.HALF_FLOAT&&(pe=t.R16F),j===t.UNSIGNED_BYTE&&(pe=t.R8)),T===t.RED_INTEGER&&(j===t.UNSIGNED_BYTE&&(pe=t.R8UI),j===t.UNSIGNED_SHORT&&(pe=t.R16UI),j===t.UNSIGNED_INT&&(pe=t.R32UI),j===t.BYTE&&(pe=t.R8I),j===t.SHORT&&(pe=t.R16I),j===t.INT&&(pe=t.R32I)),T===t.RG&&(j===t.FLOAT&&(pe=t.RG32F),j===t.HALF_FLOAT&&(pe=t.RG16F),j===t.UNSIGNED_BYTE&&(pe=t.RG8)),T===t.RG_INTEGER&&(j===t.UNSIGNED_BYTE&&(pe=t.RG8UI),j===t.UNSIGNED_SHORT&&(pe=t.RG16UI),j===t.UNSIGNED_INT&&(pe=t.RG32UI),j===t.BYTE&&(pe=t.RG8I),j===t.SHORT&&(pe=t.RG16I),j===t.INT&&(pe=t.RG32I)),T===t.RGB_INTEGER&&(j===t.UNSIGNED_BYTE&&(pe=t.RGB8UI),j===t.UNSIGNED_SHORT&&(pe=t.RGB16UI),j===t.UNSIGNED_INT&&(pe=t.RGB32UI),j===t.BYTE&&(pe=t.RGB8I),j===t.SHORT&&(pe=t.RGB16I),j===t.INT&&(pe=t.RGB32I)),T===t.RGBA_INTEGER&&(j===t.UNSIGNED_BYTE&&(pe=t.RGBA8UI),j===t.UNSIGNED_SHORT&&(pe=t.RGBA16UI),j===t.UNSIGNED_INT&&(pe=t.RGBA32UI),j===t.BYTE&&(pe=t.RGBA8I),j===t.SHORT&&(pe=t.RGBA16I),j===t.INT&&(pe=t.RGBA32I)),T===t.RGB&&(j===t.UNSIGNED_INT_5_9_9_9_REV&&(pe=t.RGB9_E5),j===t.UNSIGNED_INT_10F_11F_11F_REV&&(pe=t.R11F_G11F_B10F)),T===t.RGBA){const ke=Se?uu:gt.getTransfer(he);j===t.FLOAT&&(pe=t.RGBA32F),j===t.HALF_FLOAT&&(pe=t.RGBA16F),j===t.UNSIGNED_BYTE&&(pe=ke===Mt?t.SRGB8_ALPHA8:t.RGBA8),j===t.UNSIGNED_SHORT_4_4_4_4&&(pe=t.RGBA4),j===t.UNSIGNED_SHORT_5_5_5_1&&(pe=t.RGB5_A1)}return(pe===t.R16F||pe===t.R32F||pe===t.RG16F||pe===t.RG32F||pe===t.RGBA16F||pe===t.RGBA32F)&&e.get("EXT_color_buffer_float"),pe}function _(D,T){let j;return D?T===null||T===bi||T===fa?j=t.DEPTH24_STENCIL8:T===pi?j=t.DEPTH32F_STENCIL8:T===da&&(j=t.DEPTH24_STENCIL8,st("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===bi||T===fa?j=t.DEPTH_COMPONENT24:T===pi?j=t.DEPTH_COMPONENT32F:T===da&&(j=t.DEPTH_COMPONENT16),j}function R(D,T){return g(D)===!0||D.isFramebufferTexture&&D.minFilter!==sn&&D.minFilter!==Rt?Math.log2(Math.max(T.width,T.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?T.mipmaps.length:1}function N(D){const T=D.target;T.removeEventListener("dispose",N),x(T),T.isVideoTexture&&c.delete(T)}function F(D){const T=D.target;T.removeEventListener("dispose",F),P(T)}function x(D){const T=i.get(D);if(T.__webglInit===void 0)return;const j=D.source,he=d.get(j);if(he){const Se=he[T.__cacheKey];Se.usedTimes--,Se.usedTimes===0&&b(D),Object.keys(he).length===0&&d.delete(j)}i.remove(D)}function b(D){const T=i.get(D);t.deleteTexture(T.__webglTexture);const j=D.source,he=d.get(j);delete he[T.__cacheKey],s.memory.textures--}function P(D){const T=i.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),i.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let he=0;he<6;he++){if(Array.isArray(T.__webglFramebuffer[he]))for(let Se=0;Se<T.__webglFramebuffer[he].length;Se++)t.deleteFramebuffer(T.__webglFramebuffer[he][Se]);else t.deleteFramebuffer(T.__webglFramebuffer[he]);T.__webglDepthbuffer&&t.deleteRenderbuffer(T.__webglDepthbuffer[he])}else{if(Array.isArray(T.__webglFramebuffer))for(let he=0;he<T.__webglFramebuffer.length;he++)t.deleteFramebuffer(T.__webglFramebuffer[he]);else t.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&t.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&t.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let he=0;he<T.__webglColorRenderbuffer.length;he++)T.__webglColorRenderbuffer[he]&&t.deleteRenderbuffer(T.__webglColorRenderbuffer[he]);T.__webglDepthRenderbuffer&&t.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const j=D.textures;for(let he=0,Se=j.length;he<Se;he++){const pe=i.get(j[he]);pe.__webglTexture&&(t.deleteTexture(pe.__webglTexture),s.memory.textures--),i.remove(j[he])}i.remove(D)}let M=0;function w(){M=0}function W(){const D=M;return D>=r.maxTextures&&st("WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+r.maxTextures),M+=1,D}function E(D){const T=[];return T.push(D.wrapS),T.push(D.wrapT),T.push(D.wrapR||0),T.push(D.magFilter),T.push(D.minFilter),T.push(D.anisotropy),T.push(D.internalFormat),T.push(D.format),T.push(D.type),T.push(D.generateMipmaps),T.push(D.premultiplyAlpha),T.push(D.flipY),T.push(D.unpackAlignment),T.push(D.colorSpace),T.join()}function k(D,T){const j=i.get(D);if(D.isVideoTexture&&re(D),D.isRenderTargetTexture===!1&&D.isExternalTexture!==!0&&D.version>0&&j.__version!==D.version){const he=D.image;if(he===null)st("WebGLRenderer: Texture marked for update but no image data found.");else if(he.complete===!1)st("WebGLRenderer: Texture marked for update but image is incomplete");else{H(j,D,T);return}}else D.isExternalTexture&&(j.__webglTexture=D.sourceTexture?D.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,j.__webglTexture,t.TEXTURE0+T)}function A(D,T){const j=i.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&j.__version!==D.version){H(j,D,T);return}else D.isExternalTexture&&(j.__webglTexture=D.sourceTexture?D.sourceTexture:null);n.bindTexture(t.TEXTURE_2D_ARRAY,j.__webglTexture,t.TEXTURE0+T)}function I(D,T){const j=i.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&j.__version!==D.version){H(j,D,T);return}n.bindTexture(t.TEXTURE_3D,j.__webglTexture,t.TEXTURE0+T)}function O(D,T){const j=i.get(D);if(D.isCubeDepthTexture!==!0&&D.version>0&&j.__version!==D.version){B(j,D,T);return}n.bindTexture(t.TEXTURE_CUBE_MAP,j.__webglTexture,t.TEXTURE0+T)}const z={[qd]:t.REPEAT,[Wi]:t.CLAMP_TO_EDGE,[Kd]:t.MIRRORED_REPEAT},q={[sn]:t.NEAREST,[wS]:t.NEAREST_MIPMAP_NEAREST,[Ya]:t.NEAREST_MIPMAP_LINEAR,[Rt]:t.LINEAR,[Ic]:t.LINEAR_MIPMAP_NEAREST,[co]:t.LINEAR_MIPMAP_LINEAR},te={[AS]:t.NEVER,[DS]:t.ALWAYS,[RS]:t.LESS,[Nh]:t.LEQUAL,[IS]:t.EQUAL,[Dh]:t.GEQUAL,[PS]:t.GREATER,[NS]:t.NOTEQUAL};function ne(D,T){if(T.type===pi&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===Rt||T.magFilter===Ic||T.magFilter===Ya||T.magFilter===co||T.minFilter===Rt||T.minFilter===Ic||T.minFilter===Ya||T.minFilter===co)&&st("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(D,t.TEXTURE_WRAP_S,z[T.wrapS]),t.texParameteri(D,t.TEXTURE_WRAP_T,z[T.wrapT]),(D===t.TEXTURE_3D||D===t.TEXTURE_2D_ARRAY)&&t.texParameteri(D,t.TEXTURE_WRAP_R,z[T.wrapR]),t.texParameteri(D,t.TEXTURE_MAG_FILTER,q[T.magFilter]),t.texParameteri(D,t.TEXTURE_MIN_FILTER,q[T.minFilter]),T.compareFunction&&(t.texParameteri(D,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(D,t.TEXTURE_COMPARE_FUNC,te[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===sn||T.minFilter!==Ya&&T.minFilter!==co||T.type===pi&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||i.get(T).__currentAnisotropy){const j=e.get("EXT_texture_filter_anisotropic");t.texParameterf(D,j.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,r.getMaxAnisotropy())),i.get(T).__currentAnisotropy=T.anisotropy}}}function ye(D,T){let j=!1;D.__webglInit===void 0&&(D.__webglInit=!0,T.addEventListener("dispose",N));const he=T.source;let Se=d.get(he);Se===void 0&&(Se={},d.set(he,Se));const pe=E(T);if(pe!==D.__cacheKey){Se[pe]===void 0&&(Se[pe]={texture:t.createTexture(),usedTimes:0},s.memory.textures++,j=!0),Se[pe].usedTimes++;const ke=Se[D.__cacheKey];ke!==void 0&&(Se[D.__cacheKey].usedTimes--,ke.usedTimes===0&&b(T)),D.__cacheKey=pe,D.__webglTexture=Se[pe].texture}return j}function Pe(D,T,j){return Math.floor(Math.floor(D/j)/T)}function Te(D,T,j,he){const pe=D.updateRanges;if(pe.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,T.width,T.height,j,he,T.data);else{pe.sort((de,Q)=>de.start-Q.start);let ke=0;for(let de=1;de<pe.length;de++){const Q=pe[ke],J=pe[de],_e=Q.start+Q.count,Ie=Pe(J.start,T.width,4),We=Pe(Q.start,T.width,4);J.start<=_e+1&&Ie===We&&Pe(J.start+J.count-1,T.width,4)===Ie?Q.count=Math.max(Q.count,J.start+J.count-Q.start):(++ke,pe[ke]=J)}pe.length=ke+1;const Ue=t.getParameter(t.UNPACK_ROW_LENGTH),ie=t.getParameter(t.UNPACK_SKIP_PIXELS),ce=t.getParameter(t.UNPACK_SKIP_ROWS);t.pixelStorei(t.UNPACK_ROW_LENGTH,T.width);for(let de=0,Q=pe.length;de<Q;de++){const J=pe[de],_e=Math.floor(J.start/4),Ie=Math.ceil(J.count/4),We=_e%T.width,ee=Math.floor(_e/T.width),Le=Ie,Oe=1;t.pixelStorei(t.UNPACK_SKIP_PIXELS,We),t.pixelStorei(t.UNPACK_SKIP_ROWS,ee),n.texSubImage2D(t.TEXTURE_2D,0,We,ee,Le,Oe,j,he,T.data)}D.clearUpdateRanges(),t.pixelStorei(t.UNPACK_ROW_LENGTH,Ue),t.pixelStorei(t.UNPACK_SKIP_PIXELS,ie),t.pixelStorei(t.UNPACK_SKIP_ROWS,ce)}}function H(D,T,j){let he=t.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(he=t.TEXTURE_2D_ARRAY),T.isData3DTexture&&(he=t.TEXTURE_3D);const Se=ye(D,T),pe=T.source;n.bindTexture(he,D.__webglTexture,t.TEXTURE0+j);const ke=i.get(pe);if(pe.version!==ke.__version||Se===!0){n.activeTexture(t.TEXTURE0+j);const Ue=gt.getPrimaries(gt.workingColorSpace),ie=T.colorSpace===Pr?null:gt.getPrimaries(T.colorSpace),ce=T.colorSpace===Pr||Ue===ie?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,T.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,T.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ce);let de=v(T.image,!1,r.maxTextureSize);de=oe(T,de);const Q=o.convert(T.format,T.colorSpace),J=o.convert(T.type);let _e=S(T.internalFormat,Q,J,T.colorSpace,T.isVideoTexture);ne(he,T);let Ie;const We=T.mipmaps,ee=T.isVideoTexture!==!0,Le=ke.__version===void 0||Se===!0,Oe=pe.dataReady,Be=R(T,de);if(T.isDepthTexture)_e=_(T.format===fo,T.type),Le&&(ee?n.texStorage2D(t.TEXTURE_2D,1,_e,de.width,de.height):n.texImage2D(t.TEXTURE_2D,0,_e,de.width,de.height,0,Q,J,null));else if(T.isDataTexture)if(We.length>0){ee&&Le&&n.texStorage2D(t.TEXTURE_2D,Be,_e,We[0].width,We[0].height);for(let Fe=0,Ce=We.length;Fe<Ce;Fe++)Ie=We[Fe],ee?Oe&&n.texSubImage2D(t.TEXTURE_2D,Fe,0,0,Ie.width,Ie.height,Q,J,Ie.data):n.texImage2D(t.TEXTURE_2D,Fe,_e,Ie.width,Ie.height,0,Q,J,Ie.data);T.generateMipmaps=!1}else ee?(Le&&n.texStorage2D(t.TEXTURE_2D,Be,_e,de.width,de.height),Oe&&Te(T,de,Q,J)):n.texImage2D(t.TEXTURE_2D,0,_e,de.width,de.height,0,Q,J,de.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){ee&&Le&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Be,_e,We[0].width,We[0].height,de.depth);for(let Fe=0,Ce=We.length;Fe<Ce;Fe++)if(Ie=We[Fe],T.format!==bn)if(Q!==null)if(ee){if(Oe)if(T.layerUpdates.size>0){const Ke=Am(Ie.width,Ie.height,T.format,T.type);for(const ot of T.layerUpdates){const Lt=Ie.data.subarray(ot*Ke/Ie.data.BYTES_PER_ELEMENT,(ot+1)*Ke/Ie.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,Fe,0,0,ot,Ie.width,Ie.height,1,Q,Lt)}T.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,Fe,0,0,0,Ie.width,Ie.height,de.depth,Q,Ie.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,Fe,_e,Ie.width,Ie.height,de.depth,0,Ie.data,0,0);else st("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ee?Oe&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,Fe,0,0,0,Ie.width,Ie.height,de.depth,Q,J,Ie.data):n.texImage3D(t.TEXTURE_2D_ARRAY,Fe,_e,Ie.width,Ie.height,de.depth,0,Q,J,Ie.data)}else{ee&&Le&&n.texStorage2D(t.TEXTURE_2D,Be,_e,We[0].width,We[0].height);for(let Fe=0,Ce=We.length;Fe<Ce;Fe++)Ie=We[Fe],T.format!==bn?Q!==null?ee?Oe&&n.compressedTexSubImage2D(t.TEXTURE_2D,Fe,0,0,Ie.width,Ie.height,Q,Ie.data):n.compressedTexImage2D(t.TEXTURE_2D,Fe,_e,Ie.width,Ie.height,0,Ie.data):st("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ee?Oe&&n.texSubImage2D(t.TEXTURE_2D,Fe,0,0,Ie.width,Ie.height,Q,J,Ie.data):n.texImage2D(t.TEXTURE_2D,Fe,_e,Ie.width,Ie.height,0,Q,J,Ie.data)}else if(T.isDataArrayTexture)if(ee){if(Le&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Be,_e,de.width,de.height,de.depth),Oe)if(T.layerUpdates.size>0){const Fe=Am(de.width,de.height,T.format,T.type);for(const Ce of T.layerUpdates){const Ke=de.data.subarray(Ce*Fe/de.data.BYTES_PER_ELEMENT,(Ce+1)*Fe/de.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,Ce,de.width,de.height,1,Q,J,Ke)}T.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,de.width,de.height,de.depth,Q,J,de.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,_e,de.width,de.height,de.depth,0,Q,J,de.data);else if(T.isData3DTexture)ee?(Le&&n.texStorage3D(t.TEXTURE_3D,Be,_e,de.width,de.height,de.depth),Oe&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,de.width,de.height,de.depth,Q,J,de.data)):n.texImage3D(t.TEXTURE_3D,0,_e,de.width,de.height,de.depth,0,Q,J,de.data);else if(T.isFramebufferTexture){if(Le)if(ee)n.texStorage2D(t.TEXTURE_2D,Be,_e,de.width,de.height);else{let Fe=de.width,Ce=de.height;for(let Ke=0;Ke<Be;Ke++)n.texImage2D(t.TEXTURE_2D,Ke,_e,Fe,Ce,0,Q,J,null),Fe>>=1,Ce>>=1}}else if(We.length>0){if(ee&&Le){const Fe=ue(We[0]);n.texStorage2D(t.TEXTURE_2D,Be,_e,Fe.width,Fe.height)}for(let Fe=0,Ce=We.length;Fe<Ce;Fe++)Ie=We[Fe],ee?Oe&&n.texSubImage2D(t.TEXTURE_2D,Fe,0,0,Q,J,Ie):n.texImage2D(t.TEXTURE_2D,Fe,_e,Q,J,Ie);T.generateMipmaps=!1}else if(ee){if(Le){const Fe=ue(de);n.texStorage2D(t.TEXTURE_2D,Be,_e,Fe.width,Fe.height)}Oe&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,Q,J,de)}else n.texImage2D(t.TEXTURE_2D,0,_e,Q,J,de);g(T)&&p(he),ke.__version=pe.version,T.onUpdate&&T.onUpdate(T)}D.__version=T.version}function B(D,T,j){if(T.image.length!==6)return;const he=ye(D,T),Se=T.source;n.bindTexture(t.TEXTURE_CUBE_MAP,D.__webglTexture,t.TEXTURE0+j);const pe=i.get(Se);if(Se.version!==pe.__version||he===!0){n.activeTexture(t.TEXTURE0+j);const ke=gt.getPrimaries(gt.workingColorSpace),Ue=T.colorSpace===Pr?null:gt.getPrimaries(T.colorSpace),ie=T.colorSpace===Pr||ke===Ue?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,T.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,T.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ie);const ce=T.isCompressedTexture||T.image[0].isCompressedTexture,de=T.image[0]&&T.image[0].isDataTexture,Q=[];for(let Ce=0;Ce<6;Ce++)!ce&&!de?Q[Ce]=v(T.image[Ce],!0,r.maxCubemapSize):Q[Ce]=de?T.image[Ce].image:T.image[Ce],Q[Ce]=oe(T,Q[Ce]);const J=Q[0],_e=o.convert(T.format,T.colorSpace),Ie=o.convert(T.type),We=S(T.internalFormat,_e,Ie,T.colorSpace),ee=T.isVideoTexture!==!0,Le=pe.__version===void 0||he===!0,Oe=Se.dataReady;let Be=R(T,J);ne(t.TEXTURE_CUBE_MAP,T);let Fe;if(ce){ee&&Le&&n.texStorage2D(t.TEXTURE_CUBE_MAP,Be,We,J.width,J.height);for(let Ce=0;Ce<6;Ce++){Fe=Q[Ce].mipmaps;for(let Ke=0;Ke<Fe.length;Ke++){const ot=Fe[Ke];T.format!==bn?_e!==null?ee?Oe&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,Ke,0,0,ot.width,ot.height,_e,ot.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,Ke,We,ot.width,ot.height,0,ot.data):st("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ee?Oe&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,Ke,0,0,ot.width,ot.height,_e,Ie,ot.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,Ke,We,ot.width,ot.height,0,_e,Ie,ot.data)}}}else{if(Fe=T.mipmaps,ee&&Le){Fe.length>0&&Be++;const Ce=ue(Q[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,Be,We,Ce.width,Ce.height)}for(let Ce=0;Ce<6;Ce++)if(de){ee?Oe&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,0,0,0,Q[Ce].width,Q[Ce].height,_e,Ie,Q[Ce].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,0,We,Q[Ce].width,Q[Ce].height,0,_e,Ie,Q[Ce].data);for(let Ke=0;Ke<Fe.length;Ke++){const Lt=Fe[Ke].image[Ce].image;ee?Oe&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,Ke+1,0,0,Lt.width,Lt.height,_e,Ie,Lt.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,Ke+1,We,Lt.width,Lt.height,0,_e,Ie,Lt.data)}}else{ee?Oe&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,0,0,0,_e,Ie,Q[Ce]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,0,We,_e,Ie,Q[Ce]);for(let Ke=0;Ke<Fe.length;Ke++){const ot=Fe[Ke];ee?Oe&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,Ke+1,0,0,_e,Ie,ot.image[Ce]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,Ke+1,We,_e,Ie,ot.image[Ce])}}}g(T)&&p(t.TEXTURE_CUBE_MAP),pe.__version=Se.version,T.onUpdate&&T.onUpdate(T)}D.__version=T.version}function X(D,T,j,he,Se,pe){const ke=o.convert(j.format,j.colorSpace),Ue=o.convert(j.type),ie=S(j.internalFormat,ke,Ue,j.colorSpace),ce=i.get(T),de=i.get(j);if(de.__renderTarget=T,!ce.__hasExternalTextures){const Q=Math.max(1,T.width>>pe),J=Math.max(1,T.height>>pe);Se===t.TEXTURE_3D||Se===t.TEXTURE_2D_ARRAY?n.texImage3D(Se,pe,ie,Q,J,T.depth,0,ke,Ue,null):n.texImage2D(Se,pe,ie,Q,J,0,ke,Ue,null)}n.bindFramebuffer(t.FRAMEBUFFER,D),se(T)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,he,Se,de.__webglTexture,0,C(T)):(Se===t.TEXTURE_2D||Se>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&Se<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,he,Se,de.__webglTexture,pe),n.bindFramebuffer(t.FRAMEBUFFER,null)}function ve(D,T,j){if(t.bindRenderbuffer(t.RENDERBUFFER,D),T.depthBuffer){const he=T.depthTexture,Se=he&&he.isDepthTexture?he.type:null,pe=_(T.stencilBuffer,Se),ke=T.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;se(T)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,C(T),pe,T.width,T.height):j?t.renderbufferStorageMultisample(t.RENDERBUFFER,C(T),pe,T.width,T.height):t.renderbufferStorage(t.RENDERBUFFER,pe,T.width,T.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,ke,t.RENDERBUFFER,D)}else{const he=T.textures;for(let Se=0;Se<he.length;Se++){const pe=he[Se],ke=o.convert(pe.format,pe.colorSpace),Ue=o.convert(pe.type),ie=S(pe.internalFormat,ke,Ue,pe.colorSpace);se(T)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,C(T),ie,T.width,T.height):j?t.renderbufferStorageMultisample(t.RENDERBUFFER,C(T),ie,T.width,T.height):t.renderbufferStorage(t.RENDERBUFFER,ie,T.width,T.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function we(D,T,j){const he=T.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(t.FRAMEBUFFER,D),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Se=i.get(T.depthTexture);if(Se.__renderTarget=T,(!Se.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),he){if(Se.__webglInit===void 0&&(Se.__webglInit=!0,T.depthTexture.addEventListener("dispose",N)),Se.__webglTexture===void 0){Se.__webglTexture=t.createTexture(),n.bindTexture(t.TEXTURE_CUBE_MAP,Se.__webglTexture),ne(t.TEXTURE_CUBE_MAP,T.depthTexture);const ce=o.convert(T.depthTexture.format),de=o.convert(T.depthTexture.type);let Q;T.depthTexture.format===rr?Q=t.DEPTH_COMPONENT24:T.depthTexture.format===fo&&(Q=t.DEPTH24_STENCIL8);for(let J=0;J<6;J++)t.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Q,T.width,T.height,0,ce,de,null)}}else k(T.depthTexture,0);const pe=Se.__webglTexture,ke=C(T),Ue=he?t.TEXTURE_CUBE_MAP_POSITIVE_X+j:t.TEXTURE_2D,ie=T.depthTexture.format===fo?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(T.depthTexture.format===rr)se(T)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ie,Ue,pe,0,ke):t.framebufferTexture2D(t.FRAMEBUFFER,ie,Ue,pe,0);else if(T.depthTexture.format===fo)se(T)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ie,Ue,pe,0,ke):t.framebufferTexture2D(t.FRAMEBUFFER,ie,Ue,pe,0);else throw new Error("Unknown depthTexture format")}function Ae(D){const T=i.get(D),j=D.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==D.depthTexture){const he=D.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),he){const Se=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,he.removeEventListener("dispose",Se)};he.addEventListener("dispose",Se),T.__depthDisposeCallback=Se}T.__boundDepthTexture=he}if(D.depthTexture&&!T.__autoAllocateDepthBuffer)if(j)for(let he=0;he<6;he++)we(T.__webglFramebuffer[he],D,he);else{const he=D.texture.mipmaps;he&&he.length>0?we(T.__webglFramebuffer[0],D,0):we(T.__webglFramebuffer,D,0)}else if(j){T.__webglDepthbuffer=[];for(let he=0;he<6;he++)if(n.bindFramebuffer(t.FRAMEBUFFER,T.__webglFramebuffer[he]),T.__webglDepthbuffer[he]===void 0)T.__webglDepthbuffer[he]=t.createRenderbuffer(),ve(T.__webglDepthbuffer[he],D,!1);else{const Se=D.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,pe=T.__webglDepthbuffer[he];t.bindRenderbuffer(t.RENDERBUFFER,pe),t.framebufferRenderbuffer(t.FRAMEBUFFER,Se,t.RENDERBUFFER,pe)}}else{const he=D.texture.mipmaps;if(he&&he.length>0?n.bindFramebuffer(t.FRAMEBUFFER,T.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=t.createRenderbuffer(),ve(T.__webglDepthbuffer,D,!1);else{const Se=D.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,pe=T.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,pe),t.framebufferRenderbuffer(t.FRAMEBUFFER,Se,t.RENDERBUFFER,pe)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function G(D,T,j){const he=i.get(D);T!==void 0&&X(he.__webglFramebuffer,D,D.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),j!==void 0&&Ae(D)}function Y(D){const T=D.texture,j=i.get(D),he=i.get(T);D.addEventListener("dispose",F);const Se=D.textures,pe=D.isWebGLCubeRenderTarget===!0,ke=Se.length>1;if(ke||(he.__webglTexture===void 0&&(he.__webglTexture=t.createTexture()),he.__version=T.version,s.memory.textures++),pe){j.__webglFramebuffer=[];for(let Ue=0;Ue<6;Ue++)if(T.mipmaps&&T.mipmaps.length>0){j.__webglFramebuffer[Ue]=[];for(let ie=0;ie<T.mipmaps.length;ie++)j.__webglFramebuffer[Ue][ie]=t.createFramebuffer()}else j.__webglFramebuffer[Ue]=t.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){j.__webglFramebuffer=[];for(let Ue=0;Ue<T.mipmaps.length;Ue++)j.__webglFramebuffer[Ue]=t.createFramebuffer()}else j.__webglFramebuffer=t.createFramebuffer();if(ke)for(let Ue=0,ie=Se.length;Ue<ie;Ue++){const ce=i.get(Se[Ue]);ce.__webglTexture===void 0&&(ce.__webglTexture=t.createTexture(),s.memory.textures++)}if(D.samples>0&&se(D)===!1){j.__webglMultisampledFramebuffer=t.createFramebuffer(),j.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,j.__webglMultisampledFramebuffer);for(let Ue=0;Ue<Se.length;Ue++){const ie=Se[Ue];j.__webglColorRenderbuffer[Ue]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,j.__webglColorRenderbuffer[Ue]);const ce=o.convert(ie.format,ie.colorSpace),de=o.convert(ie.type),Q=S(ie.internalFormat,ce,de,ie.colorSpace,D.isXRRenderTarget===!0),J=C(D);t.renderbufferStorageMultisample(t.RENDERBUFFER,J,Q,D.width,D.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ue,t.RENDERBUFFER,j.__webglColorRenderbuffer[Ue])}t.bindRenderbuffer(t.RENDERBUFFER,null),D.depthBuffer&&(j.__webglDepthRenderbuffer=t.createRenderbuffer(),ve(j.__webglDepthRenderbuffer,D,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(pe){n.bindTexture(t.TEXTURE_CUBE_MAP,he.__webglTexture),ne(t.TEXTURE_CUBE_MAP,T);for(let Ue=0;Ue<6;Ue++)if(T.mipmaps&&T.mipmaps.length>0)for(let ie=0;ie<T.mipmaps.length;ie++)X(j.__webglFramebuffer[Ue][ie],D,T,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+Ue,ie);else X(j.__webglFramebuffer[Ue],D,T,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+Ue,0);g(T)&&p(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(ke){for(let Ue=0,ie=Se.length;Ue<ie;Ue++){const ce=Se[Ue],de=i.get(ce);let Q=t.TEXTURE_2D;(D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(Q=D.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(Q,de.__webglTexture),ne(Q,ce),X(j.__webglFramebuffer,D,ce,t.COLOR_ATTACHMENT0+Ue,Q,0),g(ce)&&p(Q)}n.unbindTexture()}else{let Ue=t.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(Ue=D.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(Ue,he.__webglTexture),ne(Ue,T),T.mipmaps&&T.mipmaps.length>0)for(let ie=0;ie<T.mipmaps.length;ie++)X(j.__webglFramebuffer[ie],D,T,t.COLOR_ATTACHMENT0,Ue,ie);else X(j.__webglFramebuffer,D,T,t.COLOR_ATTACHMENT0,Ue,0);g(T)&&p(Ue),n.unbindTexture()}D.depthBuffer&&Ae(D)}function L(D){const T=D.textures;for(let j=0,he=T.length;j<he;j++){const Se=T[j];if(g(Se)){const pe=y(D),ke=i.get(Se).__webglTexture;n.bindTexture(pe,ke),p(pe),n.unbindTexture()}}}const U=[],V=[];function Z(D){if(D.samples>0){if(se(D)===!1){const T=D.textures,j=D.width,he=D.height;let Se=t.COLOR_BUFFER_BIT;const pe=D.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ke=i.get(D),Ue=T.length>1;if(Ue)for(let ce=0;ce<T.length;ce++)n.bindFramebuffer(t.FRAMEBUFFER,ke.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ce,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,ke.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ce,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,ke.__webglMultisampledFramebuffer);const ie=D.texture.mipmaps;ie&&ie.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ke.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ke.__webglFramebuffer);for(let ce=0;ce<T.length;ce++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(Se|=t.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(Se|=t.STENCIL_BUFFER_BIT)),Ue){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,ke.__webglColorRenderbuffer[ce]);const de=i.get(T[ce]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,de,0)}t.blitFramebuffer(0,0,j,he,0,0,j,he,Se,t.NEAREST),l===!0&&(U.length=0,V.length=0,U.push(t.COLOR_ATTACHMENT0+ce),D.depthBuffer&&D.resolveDepthBuffer===!1&&(U.push(pe),V.push(pe),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,V)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,U))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),Ue)for(let ce=0;ce<T.length;ce++){n.bindFramebuffer(t.FRAMEBUFFER,ke.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ce,t.RENDERBUFFER,ke.__webglColorRenderbuffer[ce]);const de=i.get(T[ce]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,ke.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ce,t.TEXTURE_2D,de,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ke.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&l){const T=D.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[T])}}}function C(D){return Math.min(r.maxSamples,D.samples)}function se(D){const T=i.get(D);return D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function re(D){const T=s.render.frame;c.get(D)!==T&&(c.set(D,T),D.update())}function oe(D,T){const j=D.colorSpace,he=D.format,Se=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||j!==Vr&&j!==Pr&&(gt.getTransfer(j)===Mt?(he!==bn||Se!==yn)&&st("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):_t("WebGLTextures: Unsupported texture color space:",j)),T}function ue(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(u.width=D.naturalWidth||D.width,u.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(u.width=D.displayWidth,u.height=D.displayHeight):(u.width=D.width,u.height=D.height),u}this.allocateTextureUnit=W,this.resetTextureUnits=w,this.setTexture2D=k,this.setTexture2DArray=A,this.setTexture3D=I,this.setTextureCube=O,this.rebindTextures=G,this.setupRenderTarget=Y,this.updateRenderTargetMipmap=L,this.updateMultisampleRenderTarget=Z,this.setupDepthRenderbuffer=Ae,this.setupFrameBufferTexture=X,this.useMultisampledRTT=se,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function iA(t,e){function n(i,r=Pr){let o;const s=gt.getTransfer(r);if(i===yn)return t.UNSIGNED_BYTE;if(i===Ch)return t.UNSIGNED_SHORT_4_4_4_4;if(i===Ah)return t.UNSIGNED_SHORT_5_5_5_1;if(i===Z0)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===j0)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===q0)return t.BYTE;if(i===K0)return t.SHORT;if(i===da)return t.UNSIGNED_SHORT;if(i===Th)return t.INT;if(i===bi)return t.UNSIGNED_INT;if(i===pi)return t.FLOAT;if(i===ir)return t.HALF_FLOAT;if(i===J0)return t.ALPHA;if(i===Q0)return t.RGB;if(i===bn)return t.RGBA;if(i===rr)return t.DEPTH_COMPONENT;if(i===fo)return t.DEPTH_STENCIL;if(i===e_)return t.RED;if(i===Rh)return t.RED_INTEGER;if(i===cs)return t.RG;if(i===Ih)return t.RG_INTEGER;if(i===Ph)return t.RGBA_INTEGER;if(i===Ol||i===Bl||i===kl||i===Vl)if(s===Mt)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(i===Ol)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Bl)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===kl)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Vl)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(i===Ol)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Bl)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===kl)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Vl)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Zd||i===jd||i===Jd||i===Qd)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(i===Zd)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===jd)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Jd)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Qd)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===ef||i===tf||i===nf||i===rf||i===of||i===sf||i===af)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(i===ef||i===tf)return s===Mt?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(i===nf)return s===Mt?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC;if(i===rf)return o.COMPRESSED_R11_EAC;if(i===of)return o.COMPRESSED_SIGNED_R11_EAC;if(i===sf)return o.COMPRESSED_RG11_EAC;if(i===af)return o.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===lf||i===uf||i===cf||i===df||i===ff||i===hf||i===pf||i===mf||i===gf||i===vf||i===_f||i===yf||i===xf||i===bf)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(i===lf)return s===Mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===uf)return s===Mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===cf)return s===Mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===df)return s===Mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===ff)return s===Mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===hf)return s===Mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===pf)return s===Mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===mf)return s===Mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===gf)return s===Mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===vf)return s===Mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===_f)return s===Mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===yf)return s===Mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===xf)return s===Mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===bf)return s===Mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Sf||i===Mf||i===wf)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(i===Sf)return s===Mt?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Mf)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===wf)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Ef||i===Tf||i===Cf||i===Af)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(i===Ef)return o.COMPRESSED_RED_RGTC1_EXT;if(i===Tf)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Cf)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Af)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===fa?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const rA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,oA=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class sA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const i=new c_(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new Qn({vertexShader:rA,fragmentShader:oA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Si(new Ua(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class aA extends ys{constructor(e,n){super();const i=this;let r=null,o=1,s=null,a="local-floor",l=1,u=null,c=null,f=null,d=null,h=null,m=null;const v=typeof XRWebGLBinding<"u",g=new sA,p={},y=n.getContextAttributes();let S=null,_=null;const R=[],N=[],F=new Tt;let x=null;const b=new Gn;b.viewport=new Vt;const P=new Gn;P.viewport=new Vt;const M=[b,P],w=new yM;let W=null,E=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(H){let B=R[H];return B===void 0&&(B=new Bc,R[H]=B),B.getTargetRaySpace()},this.getControllerGrip=function(H){let B=R[H];return B===void 0&&(B=new Bc,R[H]=B),B.getGripSpace()},this.getHand=function(H){let B=R[H];return B===void 0&&(B=new Bc,R[H]=B),B.getHandSpace()};function k(H){const B=N.indexOf(H.inputSource);if(B===-1)return;const X=R[B];X!==void 0&&(X.update(H.inputSource,H.frame,u||s),X.dispatchEvent({type:H.type,data:H.inputSource}))}function A(){r.removeEventListener("select",k),r.removeEventListener("selectstart",k),r.removeEventListener("selectend",k),r.removeEventListener("squeeze",k),r.removeEventListener("squeezestart",k),r.removeEventListener("squeezeend",k),r.removeEventListener("end",A),r.removeEventListener("inputsourceschange",I);for(let H=0;H<R.length;H++){const B=N[H];B!==null&&(N[H]=null,R[H].disconnect(B))}W=null,E=null,g.reset();for(const H in p)delete p[H];e.setRenderTarget(S),h=null,d=null,f=null,r=null,_=null,Te.stop(),i.isPresenting=!1,e.setPixelRatio(x),e.setSize(F.width,F.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(H){o=H,i.isPresenting===!0&&st("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(H){a=H,i.isPresenting===!0&&st("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||s},this.setReferenceSpace=function(H){u=H},this.getBaseLayer=function(){return d!==null?d:h},this.getBinding=function(){return f===null&&v&&(f=new XRWebGLBinding(r,n)),f},this.getFrame=function(){return m},this.getSession=function(){return r},this.setSession=async function(H){if(r=H,r!==null){if(S=e.getRenderTarget(),r.addEventListener("select",k),r.addEventListener("selectstart",k),r.addEventListener("selectend",k),r.addEventListener("squeeze",k),r.addEventListener("squeezestart",k),r.addEventListener("squeezeend",k),r.addEventListener("end",A),r.addEventListener("inputsourceschange",I),y.xrCompatible!==!0&&await n.makeXRCompatible(),x=e.getPixelRatio(),e.getSize(F),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let X=null,ve=null,we=null;y.depth&&(we=y.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,X=y.stencil?fo:rr,ve=y.stencil?fa:bi);const Ae={colorFormat:n.RGBA8,depthFormat:we,scaleFactor:o};f=this.getBinding(),d=f.createProjectionLayer(Ae),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),_=new Mn(d.textureWidth,d.textureHeight,{format:bn,type:yn,depthTexture:new ha(d.textureWidth,d.textureHeight,ve,void 0,void 0,void 0,void 0,void 0,void 0,X),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const X={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:o};h=new XRWebGLLayer(r,n,X),r.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),_=new Mn(h.framebufferWidth,h.framebufferHeight,{format:bn,type:yn,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),u=null,s=await r.requestReferenceSpace(a),Te.setContext(r),Te.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function I(H){for(let B=0;B<H.removed.length;B++){const X=H.removed[B],ve=N.indexOf(X);ve>=0&&(N[ve]=null,R[ve].disconnect(X))}for(let B=0;B<H.added.length;B++){const X=H.added[B];let ve=N.indexOf(X);if(ve===-1){for(let Ae=0;Ae<R.length;Ae++)if(Ae>=N.length){N.push(X),ve=Ae;break}else if(N[Ae]===null){N[Ae]=X,ve=Ae;break}if(ve===-1)break}const we=R[ve];we&&we.connect(X)}}const O=new Me,z=new Me;function q(H,B,X){O.setFromMatrixPosition(B.matrixWorld),z.setFromMatrixPosition(X.matrixWorld);const ve=O.distanceTo(z),we=B.projectionMatrix.elements,Ae=X.projectionMatrix.elements,G=we[14]/(we[10]-1),Y=we[14]/(we[10]+1),L=(we[9]+1)/we[5],U=(we[9]-1)/we[5],V=(we[8]-1)/we[0],Z=(Ae[8]+1)/Ae[0],C=G*V,se=G*Z,re=ve/(-V+Z),oe=re*-V;if(B.matrixWorld.decompose(H.position,H.quaternion,H.scale),H.translateX(oe),H.translateZ(re),H.matrixWorld.compose(H.position,H.quaternion,H.scale),H.matrixWorldInverse.copy(H.matrixWorld).invert(),we[10]===-1)H.projectionMatrix.copy(B.projectionMatrix),H.projectionMatrixInverse.copy(B.projectionMatrixInverse);else{const ue=G+re,D=Y+re,T=C-oe,j=se+(ve-oe),he=L*Y/D*ue,Se=U*Y/D*ue;H.projectionMatrix.makePerspective(T,j,he,Se,ue,D),H.projectionMatrixInverse.copy(H.projectionMatrix).invert()}}function te(H,B){B===null?H.matrixWorld.copy(H.matrix):H.matrixWorld.multiplyMatrices(B.matrixWorld,H.matrix),H.matrixWorldInverse.copy(H.matrixWorld).invert()}this.updateCamera=function(H){if(r===null)return;let B=H.near,X=H.far;g.texture!==null&&(g.depthNear>0&&(B=g.depthNear),g.depthFar>0&&(X=g.depthFar)),w.near=P.near=b.near=B,w.far=P.far=b.far=X,(W!==w.near||E!==w.far)&&(r.updateRenderState({depthNear:w.near,depthFar:w.far}),W=w.near,E=w.far),w.layers.mask=H.layers.mask|6,b.layers.mask=w.layers.mask&-5,P.layers.mask=w.layers.mask&-3;const ve=H.parent,we=w.cameras;te(w,ve);for(let Ae=0;Ae<we.length;Ae++)te(we[Ae],ve);we.length===2?q(w,b,P):w.projectionMatrix.copy(b.projectionMatrix),ne(H,w,ve)};function ne(H,B,X){X===null?H.matrix.copy(B.matrixWorld):(H.matrix.copy(X.matrixWorld),H.matrix.invert(),H.matrix.multiply(B.matrixWorld)),H.matrix.decompose(H.position,H.quaternion,H.scale),H.updateMatrixWorld(!0),H.projectionMatrix.copy(B.projectionMatrix),H.projectionMatrixInverse.copy(B.projectionMatrixInverse),H.isPerspectiveCamera&&(H.fov=Rf*2*Math.atan(1/H.projectionMatrix.elements[5]),H.zoom=1)}this.getCamera=function(){return w},this.getFoveation=function(){if(!(d===null&&h===null))return l},this.setFoveation=function(H){l=H,d!==null&&(d.fixedFoveation=H),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=H)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(w)},this.getCameraTexture=function(H){return p[H]};let ye=null;function Pe(H,B){if(c=B.getViewerPose(u||s),m=B,c!==null){const X=c.views;h!==null&&(e.setRenderTargetFramebuffer(_,h.framebuffer),e.setRenderTarget(_));let ve=!1;X.length!==w.cameras.length&&(w.cameras.length=0,ve=!0);for(let Y=0;Y<X.length;Y++){const L=X[Y];let U=null;if(h!==null)U=h.getViewport(L);else{const Z=f.getViewSubImage(d,L);U=Z.viewport,Y===0&&(e.setRenderTargetTextures(_,Z.colorTexture,Z.depthStencilTexture),e.setRenderTarget(_))}let V=M[Y];V===void 0&&(V=new Gn,V.layers.enable(Y),V.viewport=new Vt,M[Y]=V),V.matrix.fromArray(L.transform.matrix),V.matrix.decompose(V.position,V.quaternion,V.scale),V.projectionMatrix.fromArray(L.projectionMatrix),V.projectionMatrixInverse.copy(V.projectionMatrix).invert(),V.viewport.set(U.x,U.y,U.width,U.height),Y===0&&(w.matrix.copy(V.matrix),w.matrix.decompose(w.position,w.quaternion,w.scale)),ve===!0&&w.cameras.push(V)}const we=r.enabledFeatures;if(we&&we.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&v){f=i.getBinding();const Y=f.getDepthInformation(X[0]);Y&&Y.isValid&&Y.texture&&g.init(Y,r.renderState)}if(we&&we.includes("camera-access")&&v){e.state.unbindTexture(),f=i.getBinding();for(let Y=0;Y<X.length;Y++){const L=X[Y].camera;if(L){let U=p[L];U||(U=new c_,p[L]=U);const V=f.getCameraImage(L);U.sourceTexture=V}}}}for(let X=0;X<R.length;X++){const ve=N[X],we=R[X];ve!==null&&we!==void 0&&we.update(ve,B,u||s)}ye&&ye(H,B),B.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:B}),m=null}const Te=new h_;Te.setAnimationLoop(Pe),this.setAnimationLoop=function(H){ye=H},this.dispose=function(){}}}const to=new or,lA=new Xt;function uA(t,e){function n(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function i(g,p){p.color.getRGB(g.fogColor.value,d_(t)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function r(g,p,y,S,_){p.isMeshBasicMaterial?o(g,p):p.isMeshLambertMaterial?(o(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(o(g,p),f(g,p)):p.isMeshPhongMaterial?(o(g,p),c(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(o(g,p),d(g,p),p.isMeshPhysicalMaterial&&h(g,p,_)):p.isMeshMatcapMaterial?(o(g,p),m(g,p)):p.isMeshDepthMaterial?o(g,p):p.isMeshDistanceMaterial?(o(g,p),v(g,p)):p.isMeshNormalMaterial?o(g,p):p.isLineBasicMaterial?(s(g,p),p.isLineDashedMaterial&&a(g,p)):p.isPointsMaterial?l(g,p,y,S):p.isSpriteMaterial?u(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function o(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,n(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,n(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,n(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===Tn&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,n(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===Tn&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,n(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,n(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,n(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);const y=e.get(p),S=y.envMap,_=y.envMapRotation;S&&(g.envMap.value=S,to.copy(_),to.x*=-1,to.y*=-1,to.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(to.y*=-1,to.z*=-1),g.envMapRotation.value.setFromMatrix4(lA.makeRotationFromEuler(to)),g.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,n(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,n(p.aoMap,g.aoMapTransform))}function s(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,n(p.map,g.mapTransform))}function a(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,y,S){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*y,g.scale.value=S*.5,p.map&&(g.map.value=p.map,n(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,n(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function u(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,n(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,n(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function f(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function d(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,n(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,n(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function h(g,p,y){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,n(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,n(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,n(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,n(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,n(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Tn&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,n(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,n(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=y.texture,g.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,n(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,n(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,n(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,n(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,n(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function v(g,p){const y=e.get(p).light;g.referencePosition.value.setFromMatrixPosition(y.matrixWorld),g.nearDistance.value=y.shadow.camera.near,g.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function cA(t,e,n,i){let r={},o={},s=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,S){const _=S.program;i.uniformBlockBinding(y,_)}function u(y,S){let _=r[y.id];_===void 0&&(m(y),_=c(y),r[y.id]=_,y.addEventListener("dispose",g));const R=S.program;i.updateUBOMapping(y,R);const N=e.render.frame;o[y.id]!==N&&(d(y),o[y.id]=N)}function c(y){const S=f();y.__bindingPointIndex=S;const _=t.createBuffer(),R=y.__size,N=y.usage;return t.bindBuffer(t.UNIFORM_BUFFER,_),t.bufferData(t.UNIFORM_BUFFER,R,N),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,S,_),_}function f(){for(let y=0;y<a;y++)if(s.indexOf(y)===-1)return s.push(y),y;return _t("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){const S=r[y.id],_=y.uniforms,R=y.__cache;t.bindBuffer(t.UNIFORM_BUFFER,S);for(let N=0,F=_.length;N<F;N++){const x=Array.isArray(_[N])?_[N]:[_[N]];for(let b=0,P=x.length;b<P;b++){const M=x[b];if(h(M,N,b,R)===!0){const w=M.__offset,W=Array.isArray(M.value)?M.value:[M.value];let E=0;for(let k=0;k<W.length;k++){const A=W[k],I=v(A);typeof A=="number"||typeof A=="boolean"?(M.__data[0]=A,t.bufferSubData(t.UNIFORM_BUFFER,w+E,M.__data)):A.isMatrix3?(M.__data[0]=A.elements[0],M.__data[1]=A.elements[1],M.__data[2]=A.elements[2],M.__data[3]=0,M.__data[4]=A.elements[3],M.__data[5]=A.elements[4],M.__data[6]=A.elements[5],M.__data[7]=0,M.__data[8]=A.elements[6],M.__data[9]=A.elements[7],M.__data[10]=A.elements[8],M.__data[11]=0):(A.toArray(M.__data,E),E+=I.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,w,M.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function h(y,S,_,R){const N=y.value,F=S+"_"+_;if(R[F]===void 0)return typeof N=="number"||typeof N=="boolean"?R[F]=N:R[F]=N.clone(),!0;{const x=R[F];if(typeof N=="number"||typeof N=="boolean"){if(x!==N)return R[F]=N,!0}else if(x.equals(N)===!1)return x.copy(N),!0}return!1}function m(y){const S=y.uniforms;let _=0;const R=16;for(let F=0,x=S.length;F<x;F++){const b=Array.isArray(S[F])?S[F]:[S[F]];for(let P=0,M=b.length;P<M;P++){const w=b[P],W=Array.isArray(w.value)?w.value:[w.value];for(let E=0,k=W.length;E<k;E++){const A=W[E],I=v(A),O=_%R,z=O%I.boundary,q=O+z;_+=z,q!==0&&R-q<I.storage&&(_+=R-q),w.__data=new Float32Array(I.storage/Float32Array.BYTES_PER_ELEMENT),w.__offset=_,_+=I.storage}}}const N=_%R;return N>0&&(_+=R-N),y.__size=_,y.__cache={},this}function v(y){const S={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(S.boundary=4,S.storage=4):y.isVector2?(S.boundary=8,S.storage=8):y.isVector3||y.isColor?(S.boundary=16,S.storage=12):y.isVector4?(S.boundary=16,S.storage=16):y.isMatrix3?(S.boundary=48,S.storage=48):y.isMatrix4?(S.boundary=64,S.storage=64):y.isTexture?st("WebGLRenderer: Texture samplers can not be part of an uniforms group."):st("WebGLRenderer: Unsupported uniform value type.",y),S}function g(y){const S=y.target;S.removeEventListener("dispose",g);const _=s.indexOf(S.__bindingPointIndex);s.splice(_,1),t.deleteBuffer(r[S.id]),delete r[S.id],delete o[S.id]}function p(){for(const y in r)t.deleteBuffer(r[y]);s=[],r={},o={}}return{bind:l,update:u,dispose:p}}const dA=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let oi=null;function fA(){return oi===null&&(oi=new oM(dA,16,16,cs,ir),oi.name="DFG_LUT",oi.minFilter=Rt,oi.magFilter=Rt,oi.wrapS=Wi,oi.wrapT=Wi,oi.generateMipmaps=!1,oi.needsUpdate=!0),oi}class hA{constructor(e={}){const{canvas:n=US(),context:i=null,depth:r=!0,stencil:o=!1,alpha:s=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:d=!1,outputBufferType:h=yn}=e;this.isWebGLRenderer=!0;let m;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=i.getContextAttributes().alpha}else m=s;const v=h,g=new Set([Ph,Ih,Rh]),p=new Set([yn,bi,da,fa,Ch,Ah]),y=new Uint32Array(4),S=new Int32Array(4);let _=null,R=null;const N=[],F=[];let x=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=vi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const b=this;let P=!1;this._outputColorSpace=On;let M=0,w=0,W=null,E=-1,k=null;const A=new Vt,I=new Vt;let O=null;const z=new Et(0);let q=0,te=n.width,ne=n.height,ye=1,Pe=null,Te=null;const H=new Vt(0,0,te,ne),B=new Vt(0,0,te,ne);let X=!1;const ve=new l_;let we=!1,Ae=!1;const G=new Xt,Y=new Me,L=new Vt,U={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let V=!1;function Z(){return W===null?ye:1}let C=i;function se($,le){return n.getContext($,le)}try{const $={alpha:!0,depth:r,stencil:o,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:c,failIfMajorPerformanceCaveat:f};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Eh}`),n.addEventListener("webglcontextlost",Ke,!1),n.addEventListener("webglcontextrestored",ot,!1),n.addEventListener("webglcontextcreationerror",Lt,!1),C===null){const le="webgl2";if(C=se(le,$),C===null)throw se(le)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch($){throw _t("WebGLRenderer: "+$.message),$}let re,oe,ue,D,T,j,he,Se,pe,ke,Ue,ie,ce,de,Q,J,_e,Ie,We,ee,Le,Oe,Be;function Fe(){re=new hT(C),re.init(),Le=new iA(C,re),oe=new oT(C,re,e,Le),ue=new tA(C,re),oe.reversedDepthBuffer&&d&&ue.buffers.depth.setReversed(!0),D=new gT(C),T=new zC,j=new nA(C,re,ue,T,oe,Le,D),he=new fT(b),Se=new bM(C),Oe=new iT(C,Se),pe=new pT(C,Se,D,Oe),ke=new _T(C,pe,Se,Oe,D),Ie=new vT(C,oe,j),Q=new sT(T),Ue=new VC(b,he,re,oe,Oe,Q),ie=new uA(b,T),ce=new HC,de=new KC(re),_e=new nT(b,he,ue,ke,m,l),J=new eA(b,ke,oe),Be=new cA(C,D,oe,ue),We=new rT(C,re,D),ee=new mT(C,re,D),D.programs=Ue.programs,b.capabilities=oe,b.extensions=re,b.properties=T,b.renderLists=ce,b.shadowMap=J,b.state=ue,b.info=D}Fe(),v!==yn&&(x=new xT(v,n.width,n.height,r,o));const Ce=new aA(b,C);this.xr=Ce,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){const $=re.get("WEBGL_lose_context");$&&$.loseContext()},this.forceContextRestore=function(){const $=re.get("WEBGL_lose_context");$&&$.restoreContext()},this.getPixelRatio=function(){return ye},this.setPixelRatio=function($){$!==void 0&&(ye=$,this.setSize(te,ne,!1))},this.getSize=function($){return $.set(te,ne)},this.setSize=function($,le,Ee=!0){if(Ce.isPresenting){st("WebGLRenderer: Can't change size while VR device is presenting.");return}te=$,ne=le,n.width=Math.floor($*ye),n.height=Math.floor(le*ye),Ee===!0&&(n.style.width=$+"px",n.style.height=le+"px"),x!==null&&x.setSize(n.width,n.height),this.setViewport(0,0,$,le)},this.getDrawingBufferSize=function($){return $.set(te*ye,ne*ye).floor()},this.setDrawingBufferSize=function($,le,Ee){te=$,ne=le,ye=Ee,n.width=Math.floor($*Ee),n.height=Math.floor(le*Ee),this.setViewport(0,0,$,le)},this.setEffects=function($){if(v===yn){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if($){for(let le=0;le<$.length;le++)if($[le].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}x.setEffects($||[])},this.getCurrentViewport=function($){return $.copy(A)},this.getViewport=function($){return $.copy(H)},this.setViewport=function($,le,Ee,be){$.isVector4?H.set($.x,$.y,$.z,$.w):H.set($,le,Ee,be),ue.viewport(A.copy(H).multiplyScalar(ye).round())},this.getScissor=function($){return $.copy(B)},this.setScissor=function($,le,Ee,be){$.isVector4?B.set($.x,$.y,$.z,$.w):B.set($,le,Ee,be),ue.scissor(I.copy(B).multiplyScalar(ye).round())},this.getScissorTest=function(){return X},this.setScissorTest=function($){ue.setScissorTest(X=$)},this.setOpaqueSort=function($){Pe=$},this.setTransparentSort=function($){Te=$},this.getClearColor=function($){return $.copy(_e.getClearColor())},this.setClearColor=function(){_e.setClearColor(...arguments)},this.getClearAlpha=function(){return _e.getClearAlpha()},this.setClearAlpha=function(){_e.setClearAlpha(...arguments)},this.clear=function($=!0,le=!0,Ee=!0){let be=0;if($){let xe=!1;if(W!==null){const He=W.texture.format;xe=g.has(He)}if(xe){const He=W.texture.type,Ye=p.has(He),Ge=_e.getClearColor(),Ze=_e.getClearAlpha(),Je=Ge.r,ut=Ge.g,ft=Ge.b;Ye?(y[0]=Je,y[1]=ut,y[2]=ft,y[3]=Ze,C.clearBufferuiv(C.COLOR,0,y)):(S[0]=Je,S[1]=ut,S[2]=ft,S[3]=Ze,C.clearBufferiv(C.COLOR,0,S))}else be|=C.COLOR_BUFFER_BIT}le&&(be|=C.DEPTH_BUFFER_BIT),Ee&&(be|=C.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),be!==0&&C.clear(be)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",Ke,!1),n.removeEventListener("webglcontextrestored",ot,!1),n.removeEventListener("webglcontextcreationerror",Lt,!1),_e.dispose(),ce.dispose(),de.dispose(),T.dispose(),he.dispose(),ke.dispose(),Oe.dispose(),Be.dispose(),Ue.dispose(),Ce.dispose(),Ce.removeEventListener("sessionstart",ap),Ce.removeEventListener("sessionend",lp),Gr.stop()};function Ke($){$.preventDefault(),dm("WebGLRenderer: Context Lost."),P=!0}function ot(){dm("WebGLRenderer: Context Restored."),P=!1;const $=D.autoReset,le=J.enabled,Ee=J.autoUpdate,be=J.needsUpdate,xe=J.type;Fe(),D.autoReset=$,J.enabled=le,J.autoUpdate=Ee,J.needsUpdate=be,J.type=xe}function Lt($){_t("WebGLRenderer: A WebGL context could not be created. Reason: ",$.statusMessage)}function St($){const le=$.target;le.removeEventListener("dispose",St),Ti(le)}function Ti($){Ci($),T.remove($)}function Ci($){const le=T.get($).programs;le!==void 0&&(le.forEach(function(Ee){Ue.releaseProgram(Ee)}),$.isShaderMaterial&&Ue.releaseShaderCache($))}this.renderBufferDirect=function($,le,Ee,be,xe,He){le===null&&(le=U);const Ye=xe.isMesh&&xe.matrixWorld.determinant()<0,Ge=fx($,le,Ee,be,xe);ue.setMaterial(be,Ye);let Ze=Ee.index,Je=1;if(be.wireframe===!0){if(Ze=pe.getWireframeAttribute(Ee),Ze===void 0)return;Je=2}const ut=Ee.drawRange,ft=Ee.attributes.position;let Qe=ut.start*Je,Ct=(ut.start+ut.count)*Je;He!==null&&(Qe=Math.max(Qe,He.start*Je),Ct=Math.min(Ct,(He.start+He.count)*Je)),Ze!==null?(Qe=Math.max(Qe,0),Ct=Math.min(Ct,Ze.count)):ft!=null&&(Qe=Math.max(Qe,0),Ct=Math.min(Ct,ft.count));const kt=Ct-Qe;if(kt<0||kt===1/0)return;Oe.setup(xe,be,Ge,Ee,Ze);let Bt,At=We;if(Ze!==null&&(Bt=Se.get(Ze),At=ee,At.setIndex(Bt)),xe.isMesh)be.wireframe===!0?(ue.setLineWidth(be.wireframeLinewidth*Z()),At.setMode(C.LINES)):At.setMode(C.TRIANGLES);else if(xe.isLine){let ln=be.linewidth;ln===void 0&&(ln=1),ue.setLineWidth(ln*Z()),xe.isLineSegments?At.setMode(C.LINES):xe.isLineLoop?At.setMode(C.LINE_LOOP):At.setMode(C.LINE_STRIP)}else xe.isPoints?At.setMode(C.POINTS):xe.isSprite&&At.setMode(C.TRIANGLES);if(xe.isBatchedMesh)if(xe._multiDrawInstances!==null)fu("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),At.renderMultiDrawInstances(xe._multiDrawStarts,xe._multiDrawCounts,xe._multiDrawCount,xe._multiDrawInstances);else if(re.get("WEBGL_multi_draw"))At.renderMultiDraw(xe._multiDrawStarts,xe._multiDrawCounts,xe._multiDrawCount);else{const ln=xe._multiDrawStarts,je=xe._multiDrawCounts,Cn=xe._multiDrawCount,vt=Ze?Se.get(Ze).bytesPerElement:1,Vn=T.get(be).currentProgram.getUniforms();for(let ni=0;ni<Cn;ni++)Vn.setValue(C,"_gl_DrawID",ni),At.render(ln[ni]/vt,je[ni])}else if(xe.isInstancedMesh)At.renderInstances(Qe,kt,xe.count);else if(Ee.isInstancedBufferGeometry){const ln=Ee._maxInstanceCount!==void 0?Ee._maxInstanceCount:1/0,je=Math.min(Ee.instanceCount,ln);At.renderInstances(Qe,kt,je)}else At.render(Qe,kt)};function sp($,le,Ee){$.transparent===!0&&$.side===zi&&$.forceSinglePass===!1?($.side=Tn,$.needsUpdate=!0,$a($,le,Ee),$.side=kr,$.needsUpdate=!0,$a($,le,Ee),$.side=zi):$a($,le,Ee)}this.compile=function($,le,Ee=null){Ee===null&&(Ee=$),R=de.get(Ee),R.init(le),F.push(R),Ee.traverseVisible(function(xe){xe.isLight&&xe.layers.test(le.layers)&&(R.pushLight(xe),xe.castShadow&&R.pushShadow(xe))}),$!==Ee&&$.traverseVisible(function(xe){xe.isLight&&xe.layers.test(le.layers)&&(R.pushLight(xe),xe.castShadow&&R.pushShadow(xe))}),R.setupLights();const be=new Set;return $.traverse(function(xe){if(!(xe.isMesh||xe.isPoints||xe.isLine||xe.isSprite))return;const He=xe.material;if(He)if(Array.isArray(He))for(let Ye=0;Ye<He.length;Ye++){const Ge=He[Ye];sp(Ge,Ee,xe),be.add(Ge)}else sp(He,Ee,xe),be.add(He)}),R=F.pop(),be},this.compileAsync=function($,le,Ee=null){const be=this.compile($,le,Ee);return new Promise(xe=>{function He(){if(be.forEach(function(Ye){T.get(Ye).currentProgram.isReady()&&be.delete(Ye)}),be.size===0){xe($);return}setTimeout(He,10)}re.get("KHR_parallel_shader_compile")!==null?He():setTimeout(He,10)})};let fc=null;function dx($){fc&&fc($)}function ap(){Gr.stop()}function lp(){Gr.start()}const Gr=new h_;Gr.setAnimationLoop(dx),typeof self<"u"&&Gr.setContext(self),this.setAnimationLoop=function($){fc=$,Ce.setAnimationLoop($),$===null?Gr.stop():Gr.start()},Ce.addEventListener("sessionstart",ap),Ce.addEventListener("sessionend",lp),this.render=function($,le){if(le!==void 0&&le.isCamera!==!0){_t("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;const Ee=Ce.enabled===!0&&Ce.isPresenting===!0,be=x!==null&&(W===null||Ee)&&x.begin(b,W);if($.matrixWorldAutoUpdate===!0&&$.updateMatrixWorld(),le.parent===null&&le.matrixWorldAutoUpdate===!0&&le.updateMatrixWorld(),Ce.enabled===!0&&Ce.isPresenting===!0&&(x===null||x.isCompositing()===!1)&&(Ce.cameraAutoUpdate===!0&&Ce.updateCamera(le),le=Ce.getCamera()),$.isScene===!0&&$.onBeforeRender(b,$,le,W),R=de.get($,F.length),R.init(le),F.push(R),G.multiplyMatrices(le.projectionMatrix,le.matrixWorldInverse),ve.setFromProjectionMatrix(G,mi,le.reversedDepth),Ae=this.localClippingEnabled,we=Q.init(this.clippingPlanes,Ae),_=ce.get($,N.length),_.init(),N.push(_),Ce.enabled===!0&&Ce.isPresenting===!0){const Ye=b.xr.getDepthSensingMesh();Ye!==null&&hc(Ye,le,-1/0,b.sortObjects)}hc($,le,0,b.sortObjects),_.finish(),b.sortObjects===!0&&_.sort(Pe,Te),V=Ce.enabled===!1||Ce.isPresenting===!1||Ce.hasDepthSensing()===!1,V&&_e.addToRenderList(_,$),this.info.render.frame++,we===!0&&Q.beginShadows();const xe=R.state.shadowsArray;if(J.render(xe,$,le),we===!0&&Q.endShadows(),this.info.autoReset===!0&&this.info.reset(),(be&&x.hasRenderPass())===!1){const Ye=_.opaque,Ge=_.transmissive;if(R.setupLights(),le.isArrayCamera){const Ze=le.cameras;if(Ge.length>0)for(let Je=0,ut=Ze.length;Je<ut;Je++){const ft=Ze[Je];cp(Ye,Ge,$,ft)}V&&_e.render($);for(let Je=0,ut=Ze.length;Je<ut;Je++){const ft=Ze[Je];up(_,$,ft,ft.viewport)}}else Ge.length>0&&cp(Ye,Ge,$,le),V&&_e.render($),up(_,$,le)}W!==null&&w===0&&(j.updateMultisampleRenderTarget(W),j.updateRenderTargetMipmap(W)),be&&x.end(b),$.isScene===!0&&$.onAfterRender(b,$,le),Oe.resetDefaultState(),E=-1,k=null,F.pop(),F.length>0?(R=F[F.length-1],we===!0&&Q.setGlobalState(b.clippingPlanes,R.state.camera)):R=null,N.pop(),N.length>0?_=N[N.length-1]:_=null};function hc($,le,Ee,be){if($.visible===!1)return;if($.layers.test(le.layers)){if($.isGroup)Ee=$.renderOrder;else if($.isLOD)$.autoUpdate===!0&&$.update(le);else if($.isLight)R.pushLight($),$.castShadow&&R.pushShadow($);else if($.isSprite){if(!$.frustumCulled||ve.intersectsSprite($)){be&&L.setFromMatrixPosition($.matrixWorld).applyMatrix4(G);const Ye=ke.update($),Ge=$.material;Ge.visible&&_.push($,Ye,Ge,Ee,L.z,null)}}else if(($.isMesh||$.isLine||$.isPoints)&&(!$.frustumCulled||ve.intersectsObject($))){const Ye=ke.update($),Ge=$.material;if(be&&($.boundingSphere!==void 0?($.boundingSphere===null&&$.computeBoundingSphere(),L.copy($.boundingSphere.center)):(Ye.boundingSphere===null&&Ye.computeBoundingSphere(),L.copy(Ye.boundingSphere.center)),L.applyMatrix4($.matrixWorld).applyMatrix4(G)),Array.isArray(Ge)){const Ze=Ye.groups;for(let Je=0,ut=Ze.length;Je<ut;Je++){const ft=Ze[Je],Qe=Ge[ft.materialIndex];Qe&&Qe.visible&&_.push($,Ye,Qe,Ee,L.z,ft)}}else Ge.visible&&_.push($,Ye,Ge,Ee,L.z,null)}}const He=$.children;for(let Ye=0,Ge=He.length;Ye<Ge;Ye++)hc(He[Ye],le,Ee,be)}function up($,le,Ee,be){const{opaque:xe,transmissive:He,transparent:Ye}=$;R.setupLightsView(Ee),we===!0&&Q.setGlobalState(b.clippingPlanes,Ee),be&&ue.viewport(A.copy(be)),xe.length>0&&za(xe,le,Ee),He.length>0&&za(He,le,Ee),Ye.length>0&&za(Ye,le,Ee),ue.buffers.depth.setTest(!0),ue.buffers.depth.setMask(!0),ue.buffers.color.setMask(!0),ue.setPolygonOffset(!1)}function cp($,le,Ee,be){if((Ee.isScene===!0?Ee.overrideMaterial:null)!==null)return;if(R.state.transmissionRenderTarget[be.id]===void 0){const Qe=re.has("EXT_color_buffer_half_float")||re.has("EXT_color_buffer_float");R.state.transmissionRenderTarget[be.id]=new Mn(1,1,{generateMipmaps:!0,type:Qe?ir:yn,minFilter:co,samples:Math.max(4,oe.samples),stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:gt.workingColorSpace})}const He=R.state.transmissionRenderTarget[be.id],Ye=be.viewport||A;He.setSize(Ye.z*b.transmissionResolutionScale,Ye.w*b.transmissionResolutionScale);const Ge=b.getRenderTarget(),Ze=b.getActiveCubeFace(),Je=b.getActiveMipmapLevel();b.setRenderTarget(He),b.getClearColor(z),q=b.getClearAlpha(),q<1&&b.setClearColor(16777215,.5),b.clear(),V&&_e.render(Ee);const ut=b.toneMapping;b.toneMapping=vi;const ft=be.viewport;if(be.viewport!==void 0&&(be.viewport=void 0),R.setupLightsView(be),we===!0&&Q.setGlobalState(b.clippingPlanes,be),za($,Ee,be),j.updateMultisampleRenderTarget(He),j.updateRenderTargetMipmap(He),re.has("WEBGL_multisampled_render_to_texture")===!1){let Qe=!1;for(let Ct=0,kt=le.length;Ct<kt;Ct++){const Bt=le[Ct],{object:At,geometry:ln,material:je,group:Cn}=Bt;if(je.side===zi&&At.layers.test(be.layers)){const vt=je.side;je.side=Tn,je.needsUpdate=!0,dp(At,Ee,be,ln,je,Cn),je.side=vt,je.needsUpdate=!0,Qe=!0}}Qe===!0&&(j.updateMultisampleRenderTarget(He),j.updateRenderTargetMipmap(He))}b.setRenderTarget(Ge,Ze,Je),b.setClearColor(z,q),ft!==void 0&&(be.viewport=ft),b.toneMapping=ut}function za($,le,Ee){const be=le.isScene===!0?le.overrideMaterial:null;for(let xe=0,He=$.length;xe<He;xe++){const Ye=$[xe],{object:Ge,geometry:Ze,group:Je}=Ye;let ut=Ye.material;ut.allowOverride===!0&&be!==null&&(ut=be),Ge.layers.test(Ee.layers)&&dp(Ge,le,Ee,Ze,ut,Je)}}function dp($,le,Ee,be,xe,He){$.onBeforeRender(b,le,Ee,be,xe,He),$.modelViewMatrix.multiplyMatrices(Ee.matrixWorldInverse,$.matrixWorld),$.normalMatrix.getNormalMatrix($.modelViewMatrix),xe.onBeforeRender(b,le,Ee,be,$,He),xe.transparent===!0&&xe.side===zi&&xe.forceSinglePass===!1?(xe.side=Tn,xe.needsUpdate=!0,b.renderBufferDirect(Ee,le,be,xe,$,He),xe.side=kr,xe.needsUpdate=!0,b.renderBufferDirect(Ee,le,be,xe,$,He),xe.side=zi):b.renderBufferDirect(Ee,le,be,xe,$,He),$.onAfterRender(b,le,Ee,be,xe,He)}function $a($,le,Ee){le.isScene!==!0&&(le=U);const be=T.get($),xe=R.state.lights,He=R.state.shadowsArray,Ye=xe.state.version,Ge=Ue.getParameters($,xe.state,He,le,Ee),Ze=Ue.getProgramCacheKey(Ge);let Je=be.programs;be.environment=$.isMeshStandardMaterial||$.isMeshLambertMaterial||$.isMeshPhongMaterial?le.environment:null,be.fog=le.fog;const ut=$.isMeshStandardMaterial||$.isMeshLambertMaterial&&!$.envMap||$.isMeshPhongMaterial&&!$.envMap;be.envMap=he.get($.envMap||be.environment,ut),be.envMapRotation=be.environment!==null&&$.envMap===null?le.environmentRotation:$.envMapRotation,Je===void 0&&($.addEventListener("dispose",St),Je=new Map,be.programs=Je);let ft=Je.get(Ze);if(ft!==void 0){if(be.currentProgram===ft&&be.lightsStateVersion===Ye)return hp($,Ge),ft}else Ge.uniforms=Ue.getUniforms($),$.onBeforeCompile(Ge,b),ft=Ue.acquireProgram(Ge,Ze),Je.set(Ze,ft),be.uniforms=Ge.uniforms;const Qe=be.uniforms;return(!$.isShaderMaterial&&!$.isRawShaderMaterial||$.clipping===!0)&&(Qe.clippingPlanes=Q.uniform),hp($,Ge),be.needsLights=px($),be.lightsStateVersion=Ye,be.needsLights&&(Qe.ambientLightColor.value=xe.state.ambient,Qe.lightProbe.value=xe.state.probe,Qe.directionalLights.value=xe.state.directional,Qe.directionalLightShadows.value=xe.state.directionalShadow,Qe.spotLights.value=xe.state.spot,Qe.spotLightShadows.value=xe.state.spotShadow,Qe.rectAreaLights.value=xe.state.rectArea,Qe.ltc_1.value=xe.state.rectAreaLTC1,Qe.ltc_2.value=xe.state.rectAreaLTC2,Qe.pointLights.value=xe.state.point,Qe.pointLightShadows.value=xe.state.pointShadow,Qe.hemisphereLights.value=xe.state.hemi,Qe.directionalShadowMatrix.value=xe.state.directionalShadowMatrix,Qe.spotLightMatrix.value=xe.state.spotLightMatrix,Qe.spotLightMap.value=xe.state.spotLightMap,Qe.pointShadowMatrix.value=xe.state.pointShadowMatrix),be.currentProgram=ft,be.uniformsList=null,ft}function fp($){if($.uniformsList===null){const le=$.currentProgram.getUniforms();$.uniformsList=zl.seqWithValue(le.seq,$.uniforms)}return $.uniformsList}function hp($,le){const Ee=T.get($);Ee.outputColorSpace=le.outputColorSpace,Ee.batching=le.batching,Ee.batchingColor=le.batchingColor,Ee.instancing=le.instancing,Ee.instancingColor=le.instancingColor,Ee.instancingMorph=le.instancingMorph,Ee.skinning=le.skinning,Ee.morphTargets=le.morphTargets,Ee.morphNormals=le.morphNormals,Ee.morphColors=le.morphColors,Ee.morphTargetsCount=le.morphTargetsCount,Ee.numClippingPlanes=le.numClippingPlanes,Ee.numIntersection=le.numClipIntersection,Ee.vertexAlphas=le.vertexAlphas,Ee.vertexTangents=le.vertexTangents,Ee.toneMapping=le.toneMapping}function fx($,le,Ee,be,xe){le.isScene!==!0&&(le=U),j.resetTextureUnits();const He=le.fog,Ye=be.isMeshStandardMaterial||be.isMeshLambertMaterial||be.isMeshPhongMaterial?le.environment:null,Ge=W===null?b.outputColorSpace:W.isXRRenderTarget===!0?W.texture.colorSpace:Vr,Ze=be.isMeshStandardMaterial||be.isMeshLambertMaterial&&!be.envMap||be.isMeshPhongMaterial&&!be.envMap,Je=he.get(be.envMap||Ye,Ze),ut=be.vertexColors===!0&&!!Ee.attributes.color&&Ee.attributes.color.itemSize===4,ft=!!Ee.attributes.tangent&&(!!be.normalMap||be.anisotropy>0),Qe=!!Ee.morphAttributes.position,Ct=!!Ee.morphAttributes.normal,kt=!!Ee.morphAttributes.color;let Bt=vi;be.toneMapped&&(W===null||W.isXRRenderTarget===!0)&&(Bt=b.toneMapping);const At=Ee.morphAttributes.position||Ee.morphAttributes.normal||Ee.morphAttributes.color,ln=At!==void 0?At.length:0,je=T.get(be),Cn=R.state.lights;if(we===!0&&(Ae===!0||$!==k)){const Qt=$===k&&be.id===E;Q.setState(be,$,Qt)}let vt=!1;be.version===je.__version?(je.needsLights&&je.lightsStateVersion!==Cn.state.version||je.outputColorSpace!==Ge||xe.isBatchedMesh&&je.batching===!1||!xe.isBatchedMesh&&je.batching===!0||xe.isBatchedMesh&&je.batchingColor===!0&&xe.colorTexture===null||xe.isBatchedMesh&&je.batchingColor===!1&&xe.colorTexture!==null||xe.isInstancedMesh&&je.instancing===!1||!xe.isInstancedMesh&&je.instancing===!0||xe.isSkinnedMesh&&je.skinning===!1||!xe.isSkinnedMesh&&je.skinning===!0||xe.isInstancedMesh&&je.instancingColor===!0&&xe.instanceColor===null||xe.isInstancedMesh&&je.instancingColor===!1&&xe.instanceColor!==null||xe.isInstancedMesh&&je.instancingMorph===!0&&xe.morphTexture===null||xe.isInstancedMesh&&je.instancingMorph===!1&&xe.morphTexture!==null||je.envMap!==Je||be.fog===!0&&je.fog!==He||je.numClippingPlanes!==void 0&&(je.numClippingPlanes!==Q.numPlanes||je.numIntersection!==Q.numIntersection)||je.vertexAlphas!==ut||je.vertexTangents!==ft||je.morphTargets!==Qe||je.morphNormals!==Ct||je.morphColors!==kt||je.toneMapping!==Bt||je.morphTargetsCount!==ln)&&(vt=!0):(vt=!0,je.__version=be.version);let Vn=je.currentProgram;vt===!0&&(Vn=$a(be,le,xe));let ni=!1,Wr=!1,Ao=!1;const It=Vn.getUniforms(),nn=je.uniforms;if(ue.useProgram(Vn.program)&&(ni=!0,Wr=!0,Ao=!0),be.id!==E&&(E=be.id,Wr=!0),ni||k!==$){ue.buffers.depth.getReversed()&&$.reversedDepth!==!0&&($._reversedDepth=!0,$.updateProjectionMatrix()),It.setValue(C,"projectionMatrix",$.projectionMatrix),It.setValue(C,"viewMatrix",$.matrixWorldInverse);const pr=It.map.cameraPosition;pr!==void 0&&pr.setValue(C,Y.setFromMatrixPosition($.matrixWorld)),oe.logarithmicDepthBuffer&&It.setValue(C,"logDepthBufFC",2/(Math.log($.far+1)/Math.LN2)),(be.isMeshPhongMaterial||be.isMeshToonMaterial||be.isMeshLambertMaterial||be.isMeshBasicMaterial||be.isMeshStandardMaterial||be.isShaderMaterial)&&It.setValue(C,"isOrthographic",$.isOrthographicCamera===!0),k!==$&&(k=$,Wr=!0,Ao=!0)}if(je.needsLights&&(Cn.state.directionalShadowMap.length>0&&It.setValue(C,"directionalShadowMap",Cn.state.directionalShadowMap,j),Cn.state.spotShadowMap.length>0&&It.setValue(C,"spotShadowMap",Cn.state.spotShadowMap,j),Cn.state.pointShadowMap.length>0&&It.setValue(C,"pointShadowMap",Cn.state.pointShadowMap,j)),xe.isSkinnedMesh){It.setOptional(C,xe,"bindMatrix"),It.setOptional(C,xe,"bindMatrixInverse");const Qt=xe.skeleton;Qt&&(Qt.boneTexture===null&&Qt.computeBoneTexture(),It.setValue(C,"boneTexture",Qt.boneTexture,j))}xe.isBatchedMesh&&(It.setOptional(C,xe,"batchingTexture"),It.setValue(C,"batchingTexture",xe._matricesTexture,j),It.setOptional(C,xe,"batchingIdTexture"),It.setValue(C,"batchingIdTexture",xe._indirectTexture,j),It.setOptional(C,xe,"batchingColorTexture"),xe._colorsTexture!==null&&It.setValue(C,"batchingColorTexture",xe._colorsTexture,j));const hr=Ee.morphAttributes;if((hr.position!==void 0||hr.normal!==void 0||hr.color!==void 0)&&Ie.update(xe,Ee,Vn),(Wr||je.receiveShadow!==xe.receiveShadow)&&(je.receiveShadow=xe.receiveShadow,It.setValue(C,"receiveShadow",xe.receiveShadow)),(be.isMeshStandardMaterial||be.isMeshLambertMaterial||be.isMeshPhongMaterial)&&be.envMap===null&&le.environment!==null&&(nn.envMapIntensity.value=le.environmentIntensity),nn.dfgLUT!==void 0&&(nn.dfgLUT.value=fA()),Wr&&(It.setValue(C,"toneMappingExposure",b.toneMappingExposure),je.needsLights&&hx(nn,Ao),He&&be.fog===!0&&ie.refreshFogUniforms(nn,He),ie.refreshMaterialUniforms(nn,be,ye,ne,R.state.transmissionRenderTarget[$.id]),zl.upload(C,fp(je),nn,j)),be.isShaderMaterial&&be.uniformsNeedUpdate===!0&&(zl.upload(C,fp(je),nn,j),be.uniformsNeedUpdate=!1),be.isSpriteMaterial&&It.setValue(C,"center",xe.center),It.setValue(C,"modelViewMatrix",xe.modelViewMatrix),It.setValue(C,"normalMatrix",xe.normalMatrix),It.setValue(C,"modelMatrix",xe.matrixWorld),be.isShaderMaterial||be.isRawShaderMaterial){const Qt=be.uniformsGroups;for(let pr=0,Ro=Qt.length;pr<Ro;pr++){const pp=Qt[pr];Be.update(pp,Vn),Be.bind(pp,Vn)}}return Vn}function hx($,le){$.ambientLightColor.needsUpdate=le,$.lightProbe.needsUpdate=le,$.directionalLights.needsUpdate=le,$.directionalLightShadows.needsUpdate=le,$.pointLights.needsUpdate=le,$.pointLightShadows.needsUpdate=le,$.spotLights.needsUpdate=le,$.spotLightShadows.needsUpdate=le,$.rectAreaLights.needsUpdate=le,$.hemisphereLights.needsUpdate=le}function px($){return $.isMeshLambertMaterial||$.isMeshToonMaterial||$.isMeshPhongMaterial||$.isMeshStandardMaterial||$.isShadowMaterial||$.isShaderMaterial&&$.lights===!0}this.getActiveCubeFace=function(){return M},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return W},this.setRenderTargetTextures=function($,le,Ee){const be=T.get($);be.__autoAllocateDepthBuffer=$.resolveDepthBuffer===!1,be.__autoAllocateDepthBuffer===!1&&(be.__useRenderToTexture=!1),T.get($.texture).__webglTexture=le,T.get($.depthTexture).__webglTexture=be.__autoAllocateDepthBuffer?void 0:Ee,be.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function($,le){const Ee=T.get($);Ee.__webglFramebuffer=le,Ee.__useDefaultFramebuffer=le===void 0};const mx=C.createFramebuffer();this.setRenderTarget=function($,le=0,Ee=0){W=$,M=le,w=Ee;let be=null,xe=!1,He=!1;if($){const Ge=T.get($);if(Ge.__useDefaultFramebuffer!==void 0){ue.bindFramebuffer(C.FRAMEBUFFER,Ge.__webglFramebuffer),A.copy($.viewport),I.copy($.scissor),O=$.scissorTest,ue.viewport(A),ue.scissor(I),ue.setScissorTest(O),E=-1;return}else if(Ge.__webglFramebuffer===void 0)j.setupRenderTarget($);else if(Ge.__hasExternalTextures)j.rebindTextures($,T.get($.texture).__webglTexture,T.get($.depthTexture).__webglTexture);else if($.depthBuffer){const ut=$.depthTexture;if(Ge.__boundDepthTexture!==ut){if(ut!==null&&T.has(ut)&&($.width!==ut.image.width||$.height!==ut.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");j.setupDepthRenderbuffer($)}}const Ze=$.texture;(Ze.isData3DTexture||Ze.isDataArrayTexture||Ze.isCompressedArrayTexture)&&(He=!0);const Je=T.get($).__webglFramebuffer;$.isWebGLCubeRenderTarget?(Array.isArray(Je[le])?be=Je[le][Ee]:be=Je[le],xe=!0):$.samples>0&&j.useMultisampledRTT($)===!1?be=T.get($).__webglMultisampledFramebuffer:Array.isArray(Je)?be=Je[Ee]:be=Je,A.copy($.viewport),I.copy($.scissor),O=$.scissorTest}else A.copy(H).multiplyScalar(ye).floor(),I.copy(B).multiplyScalar(ye).floor(),O=X;if(Ee!==0&&(be=mx),ue.bindFramebuffer(C.FRAMEBUFFER,be)&&ue.drawBuffers($,be),ue.viewport(A),ue.scissor(I),ue.setScissorTest(O),xe){const Ge=T.get($.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+le,Ge.__webglTexture,Ee)}else if(He){const Ge=le;for(let Ze=0;Ze<$.textures.length;Ze++){const Je=T.get($.textures[Ze]);C.framebufferTextureLayer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0+Ze,Je.__webglTexture,Ee,Ge)}}else if($!==null&&Ee!==0){const Ge=T.get($.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,Ge.__webglTexture,Ee)}E=-1},this.readRenderTargetPixels=function($,le,Ee,be,xe,He,Ye,Ge=0){if(!($&&$.isWebGLRenderTarget)){_t("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ze=T.get($).__webglFramebuffer;if($.isWebGLCubeRenderTarget&&Ye!==void 0&&(Ze=Ze[Ye]),Ze){ue.bindFramebuffer(C.FRAMEBUFFER,Ze);try{const Je=$.textures[Ge],ut=Je.format,ft=Je.type;if($.textures.length>1&&C.readBuffer(C.COLOR_ATTACHMENT0+Ge),!oe.textureFormatReadable(ut)){_t("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!oe.textureTypeReadable(ft)){_t("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}le>=0&&le<=$.width-be&&Ee>=0&&Ee<=$.height-xe&&C.readPixels(le,Ee,be,xe,Le.convert(ut),Le.convert(ft),He)}finally{const Je=W!==null?T.get(W).__webglFramebuffer:null;ue.bindFramebuffer(C.FRAMEBUFFER,Je)}}},this.readRenderTargetPixelsAsync=async function($,le,Ee,be,xe,He,Ye,Ge=0){if(!($&&$.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ze=T.get($).__webglFramebuffer;if($.isWebGLCubeRenderTarget&&Ye!==void 0&&(Ze=Ze[Ye]),Ze)if(le>=0&&le<=$.width-be&&Ee>=0&&Ee<=$.height-xe){ue.bindFramebuffer(C.FRAMEBUFFER,Ze);const Je=$.textures[Ge],ut=Je.format,ft=Je.type;if($.textures.length>1&&C.readBuffer(C.COLOR_ATTACHMENT0+Ge),!oe.textureFormatReadable(ut))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!oe.textureTypeReadable(ft))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Qe=C.createBuffer();C.bindBuffer(C.PIXEL_PACK_BUFFER,Qe),C.bufferData(C.PIXEL_PACK_BUFFER,He.byteLength,C.STREAM_READ),C.readPixels(le,Ee,be,xe,Le.convert(ut),Le.convert(ft),0);const Ct=W!==null?T.get(W).__webglFramebuffer:null;ue.bindFramebuffer(C.FRAMEBUFFER,Ct);const kt=C.fenceSync(C.SYNC_GPU_COMMANDS_COMPLETE,0);return C.flush(),await FS(C,kt,4),C.bindBuffer(C.PIXEL_PACK_BUFFER,Qe),C.getBufferSubData(C.PIXEL_PACK_BUFFER,0,He),C.deleteBuffer(Qe),C.deleteSync(kt),He}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function($,le=null,Ee=0){const be=Math.pow(2,-Ee),xe=Math.floor($.image.width*be),He=Math.floor($.image.height*be),Ye=le!==null?le.x:0,Ge=le!==null?le.y:0;j.setTexture2D($,0),C.copyTexSubImage2D(C.TEXTURE_2D,Ee,0,0,Ye,Ge,xe,He),ue.unbindTexture()};const gx=C.createFramebuffer(),vx=C.createFramebuffer();this.copyTextureToTexture=function($,le,Ee=null,be=null,xe=0,He=0){let Ye,Ge,Ze,Je,ut,ft,Qe,Ct,kt;const Bt=$.isCompressedTexture?$.mipmaps[He]:$.image;if(Ee!==null)Ye=Ee.max.x-Ee.min.x,Ge=Ee.max.y-Ee.min.y,Ze=Ee.isBox3?Ee.max.z-Ee.min.z:1,Je=Ee.min.x,ut=Ee.min.y,ft=Ee.isBox3?Ee.min.z:0;else{const nn=Math.pow(2,-xe);Ye=Math.floor(Bt.width*nn),Ge=Math.floor(Bt.height*nn),$.isDataArrayTexture?Ze=Bt.depth:$.isData3DTexture?Ze=Math.floor(Bt.depth*nn):Ze=1,Je=0,ut=0,ft=0}be!==null?(Qe=be.x,Ct=be.y,kt=be.z):(Qe=0,Ct=0,kt=0);const At=Le.convert(le.format),ln=Le.convert(le.type);let je;le.isData3DTexture?(j.setTexture3D(le,0),je=C.TEXTURE_3D):le.isDataArrayTexture||le.isCompressedArrayTexture?(j.setTexture2DArray(le,0),je=C.TEXTURE_2D_ARRAY):(j.setTexture2D(le,0),je=C.TEXTURE_2D),C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,le.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,le.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,le.unpackAlignment);const Cn=C.getParameter(C.UNPACK_ROW_LENGTH),vt=C.getParameter(C.UNPACK_IMAGE_HEIGHT),Vn=C.getParameter(C.UNPACK_SKIP_PIXELS),ni=C.getParameter(C.UNPACK_SKIP_ROWS),Wr=C.getParameter(C.UNPACK_SKIP_IMAGES);C.pixelStorei(C.UNPACK_ROW_LENGTH,Bt.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,Bt.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Je),C.pixelStorei(C.UNPACK_SKIP_ROWS,ut),C.pixelStorei(C.UNPACK_SKIP_IMAGES,ft);const Ao=$.isDataArrayTexture||$.isData3DTexture,It=le.isDataArrayTexture||le.isData3DTexture;if($.isDepthTexture){const nn=T.get($),hr=T.get(le),Qt=T.get(nn.__renderTarget),pr=T.get(hr.__renderTarget);ue.bindFramebuffer(C.READ_FRAMEBUFFER,Qt.__webglFramebuffer),ue.bindFramebuffer(C.DRAW_FRAMEBUFFER,pr.__webglFramebuffer);for(let Ro=0;Ro<Ze;Ro++)Ao&&(C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,T.get($).__webglTexture,xe,ft+Ro),C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,T.get(le).__webglTexture,He,kt+Ro)),C.blitFramebuffer(Je,ut,Ye,Ge,Qe,Ct,Ye,Ge,C.DEPTH_BUFFER_BIT,C.NEAREST);ue.bindFramebuffer(C.READ_FRAMEBUFFER,null),ue.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else if(xe!==0||$.isRenderTargetTexture||T.has($)){const nn=T.get($),hr=T.get(le);ue.bindFramebuffer(C.READ_FRAMEBUFFER,gx),ue.bindFramebuffer(C.DRAW_FRAMEBUFFER,vx);for(let Qt=0;Qt<Ze;Qt++)Ao?C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,nn.__webglTexture,xe,ft+Qt):C.framebufferTexture2D(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,nn.__webglTexture,xe),It?C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,hr.__webglTexture,He,kt+Qt):C.framebufferTexture2D(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,hr.__webglTexture,He),xe!==0?C.blitFramebuffer(Je,ut,Ye,Ge,Qe,Ct,Ye,Ge,C.COLOR_BUFFER_BIT,C.NEAREST):It?C.copyTexSubImage3D(je,He,Qe,Ct,kt+Qt,Je,ut,Ye,Ge):C.copyTexSubImage2D(je,He,Qe,Ct,Je,ut,Ye,Ge);ue.bindFramebuffer(C.READ_FRAMEBUFFER,null),ue.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else It?$.isDataTexture||$.isData3DTexture?C.texSubImage3D(je,He,Qe,Ct,kt,Ye,Ge,Ze,At,ln,Bt.data):le.isCompressedArrayTexture?C.compressedTexSubImage3D(je,He,Qe,Ct,kt,Ye,Ge,Ze,At,Bt.data):C.texSubImage3D(je,He,Qe,Ct,kt,Ye,Ge,Ze,At,ln,Bt):$.isDataTexture?C.texSubImage2D(C.TEXTURE_2D,He,Qe,Ct,Ye,Ge,At,ln,Bt.data):$.isCompressedTexture?C.compressedTexSubImage2D(C.TEXTURE_2D,He,Qe,Ct,Bt.width,Bt.height,At,Bt.data):C.texSubImage2D(C.TEXTURE_2D,He,Qe,Ct,Ye,Ge,At,ln,Bt);C.pixelStorei(C.UNPACK_ROW_LENGTH,Cn),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,vt),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Vn),C.pixelStorei(C.UNPACK_SKIP_ROWS,ni),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Wr),He===0&&le.generateMipmaps&&C.generateMipmap(je),ue.unbindTexture()},this.initRenderTarget=function($){T.get($).__webglFramebuffer===void 0&&j.setupRenderTarget($)},this.initTexture=function($){$.isCubeTexture?j.setTextureCube($,0):$.isData3DTexture?j.setTexture3D($,0):$.isDataArrayTexture||$.isCompressedArrayTexture?j.setTexture2DArray($,0):j.setTexture2D($,0),ue.unbindTexture()},this.resetState=function(){M=0,w=0,W=null,ue.reset(),Oe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return mi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=gt._getDrawingBufferColorSpace(e),n.unpackColorSpace=gt._getUnpackColorSpace()}}const pA="mangleditor",mA="0.1.0",gA="module",vA={dev:"vite --host",build:"vite build",preview:"vite preview",deploy:"gh-pages -d dist"},_A={"@vue-flow/background":"^1.3.2","@vue-flow/controls":"^1.1.3","@vue-flow/core":"^1.48.2","@vue-flow/minimap":"^1.5.4","@vue-flow/node-resizer":"^1.5.1",pinia:"^3.0.4",three:"^0.183.2",vue:"^3.5.25"},yA={"@vitejs/plugin-vue":"^6.0.2","gh-pages":"^6.3.0",vite:"^7.3.1"},y_={name:pA,private:!0,version:mA,type:gA,scripts:vA,dependencies:_A,devDependencies:yA},fr=(t,e)=>{const n=t.__vccOpts||t;for(const[i,r]of e)n[i]=r;return n},xA={class:"top-bar"},bA={class:"top-bar__logo-container"},SA=["src"],MA={class:"top-bar__logo-text"},wA={class:"top-bar__version"},EA=["value"],TA={class:"top-bar__dropdown-wrapper"},CA={key:0,class:"top-bar__dropdown-menu"},AA=["title"],RA={class:"top-bar__btn-label"},IA={key:0,class:"top-bar__slider-group top-bar__mobile-hide",title:"Workspace Darkness"},PA=["value"],NA={class:"top-bar__status"},DA={__name:"TopBar",props:{isRendering:{type:Boolean,default:!0},previewMode:{type:String,default:"panel"},projectTitle:{type:String,default:"Untitled Project"},bgOpacity:{type:Number,default:.4},showShadows:{type:Boolean,default:!0},isPerformanceMode:{type:Boolean,default:!1}},emits:["save","load","download","import","reset","toggleRender","togglePreview","updateTitle","updateBgOpacity","toggleShadows","openPopup","togglePerformance"],setup(t,{emit:e}){const n="/mangleditor/",i=e,r=Ne(null);function o(){r.value?.click()}function s(f){const d=f.target.files?.[0];if(!d)return;const h=new FileReader;h.onload=()=>{i("import",h.result)},h.readAsText(d),f.target.value="",a.value=!1}const a=Ne(!1);function l(f){a.value=!a.value,f.stopPropagation()}function u(){a.value=!1}async function c(f){try{const d=await fetch(f);if(!d.ok)throw new Error("Could not load");const h=await d.text();i("import",h)}catch{alert("Failed to load example patch.")}}return Zt(()=>{window.addEventListener("click",u)}),_s(()=>{window.removeEventListener("click",u)}),(f,d)=>(ae(),ge("div",xA,[K("div",bA,[K("img",{src:`${fe(n)}mangleditor-icon.png`,class:"top-bar__logo-icon",alt:"mangleditor"},null,8,SA),K("span",MA,[d[14]||(d[14]=hi("mangleditor ",-1)),K("span",wA,"v"+Re(fe(y_).version),1)]),d[15]||(d[15]=K("span",{class:"top-bar__coded-by"},"coded with love and haste",-1))]),K("input",{class:"top-bar__title-input",type:"text",value:t.projectTitle,onInput:d[0]||(d[0]=h=>f.$emit("updateTitle",h.target.value)),onBlur:d[1]||(d[1]=h=>f.$emit("updateTitle",h.target.value)),placeholder:"Untitled Project",title:"Project title — used for save/export filenames"},null,40,EA),d[21]||(d[21]=K("div",{class:"top-bar__divider"},null,-1)),K("div",TA,[K("button",{class:"top-bar__btn",onClick:l}," File ▾ "),a.value?(ae(),ge("div",CA,[K("button",{class:"top-bar__dropdown-item",onClick:d[2]||(d[2]=h=>f.$emit("save"))},"💾 Save"),K("button",{class:"top-bar__dropdown-item",onClick:d[3]||(d[3]=h=>f.$emit("load"))},"📂 Load"),K("button",{class:"top-bar__dropdown-item",onClick:d[4]||(d[4]=h=>o())},"⬆ Import"),K("button",{class:"top-bar__dropdown-item",onClick:d[5]||(d[5]=h=>f.$emit("download"))},"⬇ Download"),d[16]||(d[16]=K("div",{class:"top-bar__dropdown-divider"},null,-1)),d[17]||(d[17]=K("div",{class:"top-bar__dropdown-header"},"Examples",-1)),K("button",{class:"top-bar__dropdown-item",onClick:d[6]||(d[6]=h=>c(fe(n)+"templates/UV_Combo_Demo.json"))},"🌌 UV Combo Demo")])):$e("",!0)]),K("input",{ref_key:"importInput",ref:r,type:"file",accept:".json",class:"file-input-hidden",onChange:s},null,544),d[22]||(d[22]=K("div",{class:"top-bar__divider"},null,-1)),K("button",{class:"top-bar__btn top-bar__btn--danger",onClick:d[7]||(d[7]=h=>f.$emit("reset")),title:"Clear all nodes"},[...d[18]||(d[18]=[hi(" 🗑 ",-1),K("span",{class:"top-bar__btn-label"},"Reset",-1)])]),d[23]||(d[23]=K("div",{class:"top-bar__divider"},null,-1)),K("button",{class:lt(["top-bar__btn",t.isRendering?"top-bar__btn--running":"top-bar__btn--stop"]),onClick:d[8]||(d[8]=h=>f.$emit("toggleRender")),title:t.isRendering?"Stop rendering":"Resume rendering"},[hi(Re(t.isRendering?"⏸":"▶")+" ",1),K("span",RA,Re(t.isRendering?"Stop":"Resume"),1)],10,AA),K("button",{class:"top-bar__btn top-bar__mobile-hide",onClick:d[9]||(d[9]=h=>f.$emit("togglePreview")),title:"Toggle preview mode"},Re(t.previewMode==="anchored"?"🖥 Anchored":t.previewMode==="floating"?"🪟 Floating":"🌌 Background"),1),K("button",{class:"top-bar__btn top-bar__mobile-hide",onClick:d[10]||(d[10]=h=>f.$emit("openPopup")),title:"Open renderer in a separate pop-up window"}," ↗ Popout "),K("button",{class:lt(["top-bar__btn",{"top-bar__btn--active":t.isPerformanceMode}]),onClick:d[11]||(d[11]=h=>f.$emit("togglePerformance")),title:"Toggle Performance Mode (P)"},[...d[19]||(d[19]=[hi(" ⚡ ",-1),K("span",{class:"top-bar__btn-label"},"Perf",-1)])],2),d[24]||(d[24]=K("div",{class:"top-bar__divider top-bar__mobile-hide"},null,-1)),K("button",{class:lt(["top-bar__btn top-bar__mobile-hide",{"top-bar__btn--active":t.showShadows}]),onClick:d[12]||(d[12]=h=>f.$emit("toggleShadows")),title:"Toggle CSS drop shadows on nodes and cables"}," ☁ Shadows ",2),t.previewMode==="background"?(ae(),ge("div",IA,[d[20]||(d[20]=K("span",{class:"top-bar__slider-label"},"Dim",-1)),K("input",{type:"range",min:"0",max:"1",step:"0.05",class:"top-bar__range",value:t.bgOpacity,onInput:d[13]||(d[13]=h=>f.$emit("updateBgOpacity",parseFloat(h.target.value)))},null,40,PA)])):$e("",!0),K("div",NA,[K("div",{class:lt(["top-bar__status-dot",{"top-bar__status-dot--stopped":!t.isRendering}])},null,2),K("span",null,Re(t.isRendering?"RENDERING":"STOPPED"),1)])]))}},LA=fr(DA,[["__scopeId","data-v-55c92a99"]]),me={IMAGE:"image",FLOAT:"float",INT:"int",VEC2:"vec2",BOOL:"bool",TRIGGER:"trigger",UV_MAP:"uvmap"},UA={[me.IMAGE]:"#00d4ff",[me.FLOAT]:"#ff9a2e",[me.INT]:"#ffe14d",[me.VEC2]:"#ff6eb4",[me.BOOL]:"#ff4444",[me.TRIGGER]:"#ffffff",[me.UV_MAP]:"#7fff6e"},FA={[me.IMAGE]:[me.IMAGE],[me.FLOAT]:[me.FLOAT],[me.INT]:[me.INT,me.FLOAT],[me.VEC2]:[me.VEC2],[me.BOOL]:[me.BOOL],[me.TRIGGER]:[me.TRIGGER],[me.UV_MAP]:[me.UV_MAP,me.IMAGE]};function Jm(t,e){const n=FA[t];return n?n.includes(e):!1}function ad(t){return UA[t]||"#888888"}const Oh={imageInput:{type:"imageInput",label:"Image Input",category:"image",inputs:[],outputs:[{id:"out",label:"Image",type:me.IMAGE}],params:{},shaderKey:null},uiImageSlot:{type:"uiImageSlot",label:"UI Image Slot",category:"image",inputs:[],outputs:[{id:"out",label:"Image",type:me.IMAGE}],params:{},shaderKey:null},webcamInput:{type:"webcamInput",label:"Webcam",category:"image",inputs:[{id:"trigger",label:"Enable/Trigger",type:me.FLOAT,optional:!0}],outputs:[{id:"out",label:"Image",type:me.IMAGE}],params:{enable:{type:"bool",ui:"button",default:!1,label:"Enable Webcam"}},shaderKey:null},imageOutput:{type:"imageOutput",label:"Image Output",category:"image",inputs:[{id:"in",label:"Image",type:me.IMAGE}],outputs:[],params:{format:{type:"select",default:"png",options:["png","tiff","bmp"],label:"Format"},filename:{type:"string",default:"output",label:"Filename"}},shaderKey:null},pixelSort:{type:"pixelSort",label:"Pixel Sort",category:"image",inputs:[{id:"in",label:"Image",type:me.IMAGE}],outputs:[{id:"out",label:"Image",type:me.IMAGE}],params:{direction:{type:"select",default:"horizontal",options:["horizontal","vertical"],label:"Direction"},sortBy:{type:"select",default:"brightness",options:["brightness","hue","saturation"],label:"Sort By"},threshold:{type:"float",default:.5,min:0,max:1,step:.01,label:"Threshold"},upperThreshold:{type:"float",default:.8,min:0,max:1,step:.01,label:"Upper Threshold"},reverse:{type:"bool",default:!1,label:"Reverse"},blendAmount:{type:"float",default:1,min:0,max:1,step:.01,label:"Mix / Blend"}},shaderKey:"pixelSort"},reededGlass:{type:"reededGlass",label:"Reeded Glass",category:"image",inputs:[{id:"in",label:"Image",type:me.IMAGE},{id:"texture",label:"Texture",type:me.IMAGE,optional:!0}],outputs:[{id:"out",label:"Image",type:me.IMAGE}],params:{scale:{type:"float",default:20,min:1,max:200,step:.5,label:"Scale"},intensity:{type:"float",default:.05,min:0,max:.5,step:.001,label:"Intensity"},angle:{type:"float",default:0,min:0,max:360,step:1,label:"Angle"},blur:{type:"float",default:.5,min:0,max:5,step:.1,label:"Blur"},blendAmount:{type:"float",default:1,min:0,max:1,step:.01,label:"Mix / Blend"}},shaderKey:"reededGlass"},chromaticAberration:{type:"chromaticAberration",label:"Chromatic Aberration",category:"image",inputs:[{id:"in",label:"Image",type:me.IMAGE}],outputs:[{id:"out",label:"Image",type:me.IMAGE}],params:{intensity:{type:"float",default:5,min:0,max:50,step:.5,label:"Intensity"},direction:{type:"select",default:"radial",options:["radial","horizontal","vertical"],label:"Direction"},centerX:{type:"float",default:.5,min:0,max:1,step:.01,label:"Center X"},centerY:{type:"float",default:.5,min:0,max:1,step:.01,label:"Center Y"},blendAmount:{type:"float",default:1,min:0,max:1,step:.01,label:"Mix / Blend"}},shaderKey:"chromaticAberration"},displacement:{type:"displacement",label:"Heightmap Displacement",category:"image",inputs:[{id:"in",label:"Image",type:me.IMAGE},{id:"heightmap",label:"Heightmap",type:me.IMAGE}],outputs:[{id:"out",label:"Image",type:me.IMAGE}],params:{strength:{type:"float",default:.05,min:0,max:.5,step:.001,label:"Strength"},channel:{type:"select",default:"luminance",options:["luminance","r","g","b"],label:"Channel"},blendAmount:{type:"float",default:1,min:0,max:1,step:.01,label:"Mix / Blend"}},shaderKey:"displacement"},levels:{type:"levels",label:"Levels",category:"image",inputs:[{id:"in",label:"Image",type:me.IMAGE},{id:"inputBlack",label:"In Black",type:me.INT,optional:!0},{id:"inputWhite",label:"In White",type:me.INT,optional:!0},{id:"gamma",label:"Gamma",type:me.FLOAT,optional:!0}],outputs:[{id:"out",label:"Image",type:me.IMAGE}],params:{inputBlack:{type:"int",default:0,min:0,max:255,step:1,label:"Input Black"},inputWhite:{type:"int",default:255,min:0,max:255,step:1,label:"Input White"},gamma:{type:"float",default:1,min:.1,max:10,step:.01,label:"Gamma"},outputBlack:{type:"int",default:0,min:0,max:255,step:1,label:"Output Black"},outputWhite:{type:"int",default:255,min:0,max:255,step:1,label:"Output White"},channel:{type:"select",default:"master",options:["master","r","g","b"],label:"Channel"},blendAmount:{type:"float",default:1,min:0,max:1,step:.01,label:"Mix / Blend"}},shaderKey:"levels"},surfaceBlur:{type:"surfaceBlur",label:"Surface Blur",category:"image",inputs:[{id:"in",label:"Image",type:me.IMAGE}],outputs:[{id:"out",label:"Image",type:me.IMAGE}],params:{radius:{type:"int",default:5,min:1,max:20,step:1,label:"Radius"},threshold:{type:"float",default:.1,min:0,max:1,step:.01,label:"Threshold"},blendAmount:{type:"float",default:1,min:0,max:1,step:.01,label:"Mix / Blend"}},shaderKey:"surfaceBlur"},feedbackLoop:{type:"feedbackLoop",label:"Feedback Loop",category:"image",inputs:[{id:"in",label:"Image",type:me.IMAGE}],outputs:[{id:"out",label:"Image",type:me.IMAGE}],params:{decay:{type:"float",default:.9,min:0,max:1,step:.01,label:"Decay"},iterations:{type:"int",default:1,min:1,max:100,step:1,label:"Iterations"},blendMode:{type:"select",default:"normal",options:["normal","add","multiply"],label:"Blend Mode"}},shaderKey:"feedback"},blend:{type:"blend",label:"Blend",category:"image",inputs:[{id:"base",label:"Base",type:me.IMAGE},{id:"overlay",label:"Overlay",type:me.IMAGE}],outputs:[{id:"out",label:"Image",type:me.IMAGE}],params:{mode:{type:"select",default:"normal",options:["normal","multiply","screen","overlay","softLight","hardLight","difference","exclusion","add","subtract"],label:"Mode"},opacity:{type:"float",default:1,min:0,max:1,step:.01,label:"Opacity"}},shaderKey:"blend"},diffusion:{type:"diffusion",label:"Diffusion Reaction",category:"image",inputs:[{id:"in",label:"Init State",type:me.IMAGE}],outputs:[{id:"out",label:"Image",type:me.IMAGE}],params:{dA:{type:"float",default:1,min:0,max:2,step:.01,label:"Diff A"},dB:{type:"float",default:.5,min:0,max:2,step:.01,label:"Diff B"},feed:{type:"float",default:.055,min:0,max:.1,step:.001,label:"Feed Rate"},kill:{type:"float",default:.062,min:0,max:.1,step:.001,label:"Kill Rate"},dt:{type:"float",default:1,min:0,max:2,step:.01,label:"Delta Time"}},shaderKey:"diffusion"},xerox:{type:"xerox",label:"Xerox Photocopy",category:"image",inputs:[{id:"in",label:"Image",type:me.IMAGE}],outputs:[{id:"out",label:"Image",type:me.IMAGE}],params:{threshold:{type:"float",default:.5,min:0,max:1,step:.01,label:"Threshold"},noiseAmount:{type:"float",default:.1,min:0,max:1,step:.01,label:"Noise"},contrast:{type:"float",default:2,min:0,max:5,step:.1,label:"Contrast"},blendAmount:{type:"float",default:1,min:0,max:1,step:.01,label:"Mix / Blend"}},shaderKey:"xerox"},liquidDeform:{type:"liquidDeform",label:"Liquid Deform",category:"uv",inputs:[{id:"in",label:"Image",type:me.IMAGE}],outputs:[{id:"out",label:"Image",type:me.IMAGE}],params:{scale:{type:"float",default:1,min:.1,max:10,step:.01,label:"Zoom/Scale"},intensity:{type:"float",default:1,min:0,max:5,step:.01,label:"Swirl Int."},speed:{type:"float",default:1,min:0,max:5,step:.01,label:"Swirl Spd"},samples:{type:"float",default:20,min:1,max:20,step:1,label:"Samples"},gammaLift:{type:"float",default:1,min:.1,max:5,step:.01,label:"GammaLift"},blendAmount:{type:"float",default:1,min:0,max:1,step:.01,label:"Mix/Blend"}},shaderKey:"liquidDeform"},noiseContours:{type:"noiseContours",label:"Noise Contours",category:"image",inputs:[{id:"in",label:"Image",type:me.IMAGE},{id:"texture",label:"Overlay Tex",type:me.IMAGE,optional:!0}],outputs:[{id:"out",label:"Image",type:me.IMAGE}],params:{speed:{type:"float",default:1,min:0,max:5,step:.01,label:"Speed"},scale:{type:"float",default:1,min:.1,max:4,step:.01,label:"Scale"},palNum:{type:"float",default:9,min:2,max:20,step:1,label:"Contour Bands"},edgeStrength:{type:"float",default:5,min:0,max:20,step:.1,label:"Edge Strength"},highlight:{type:"float",default:10,min:0,max:30,step:.1,label:"Highlight"},hueShift:{type:"float",default:-.25,min:-3.14,max:3.14,step:.01,label:"Hue Shift"},hueRadius:{type:"float",default:.4,min:0,max:2,step:.01,label:"Hue Radius"},imageBlend:{type:"float",default:0,min:0,max:1,step:.01,label:"Image Color"},taper:{type:"float",default:1,min:0,max:3,step:.01,label:"Taper"},blendAmount:{type:"float",default:1,min:0,max:1,step:.01,label:"Blend"}},shaderKey:"noiseContours"},fisheye:{type:"fisheye",label:"Fisheye",category:"image",inputs:[{id:"in",label:"Image",type:me.IMAGE}],outputs:[{id:"out",label:"Image",type:me.IMAGE}],params:{power:{type:"float",default:1,min:-3,max:3,step:.01,label:"Power"},centerX:{type:"float",default:.5,min:.1,max:.9,step:.01,label:"Center X"},centerY:{type:"float",default:.5,min:.1,max:.9,step:.01,label:"Center Y"},zoom:{type:"float",default:1,min:.1,max:4,step:.01,label:"Zoom"},blendAmount:{type:"float",default:1,min:0,max:1,step:.01,label:"Blend"}},shaderKey:"fisheye"},crt:{type:"crt",label:"CRT Display",category:"image",inputs:[{id:"in",label:"Image",type:me.IMAGE}],outputs:[{id:"out",label:"Image",type:me.IMAGE}],params:{curvature:{type:"float",default:.5,min:0,max:1,step:.01,label:"Curvature"},scanLines:{type:"float",default:.5,min:0,max:1,step:.01,label:"Scanlines"},rgbShift:{type:"float",default:.2,min:0,max:1,step:.01,label:"RGB Shift"},brightness:{type:"float",default:1.2,min:0,max:3,step:.1,label:"Brightness"},blendAmount:{type:"float",default:1,min:0,max:1,step:.01,label:"Mix / Blend"}},shaderKey:"crt"},ascii:{type:"ascii",label:"ASCII Art",category:"image",inputs:[{id:"in",label:"Image",type:me.IMAGE},{id:"texture",label:"Overlay Tex",type:me.IMAGE,optional:!0}],outputs:[{id:"out",label:"Image",type:me.IMAGE}],params:{cellSize:{type:"float",default:12,min:4,max:48,step:1,label:"Cell Size"},brightness:{type:"float",default:0,min:-1,max:1,step:.01,label:"Threshold Shift"},colorMode:{type:"float",default:0,min:0,max:1,step:1,label:"Color Mode (Orig/Flat)"},fgColor:{type:"color",default:"#00ff66",label:"FG Color"},bgColor:{type:"color",default:"#000000",label:"BG Color"},intensity:{type:"float",default:1,min:0,max:1,step:.01,label:"Effect Mix"},blendAmount:{type:"float",default:1,min:0,max:1,step:.01,label:"Mix / Blend"}},shaderKey:"ascii"},asciiV2:{type:"asciiV2",label:"ASCII v2",category:"image",inputs:[{id:"in",label:"Image",type:me.IMAGE},{id:"texture",label:"Overlay Tex",type:me.IMAGE,optional:!0}],outputs:[{id:"out",label:"Image",type:me.IMAGE}],params:{cellSize:{type:"float",default:12,min:4,max:64,step:1,label:"Cell Size"},brightness:{type:"float",default:0,min:-.5,max:.5,step:.01,label:"Brightness"},colorMode:{type:"select",default:"Palette",options:["Palette","Original","Flat"],label:"Color Mode"},fgColor:{type:"color",default:"#00ff66",label:"FG Color"},bgColor:{type:"color",default:"#000000",label:"BG Color"},extendedPalette:{type:"bool",default:!1,label:"Extended Chars"},intensity:{type:"float",default:1,min:0,max:1,step:.01,label:"Intensity"},blendAmount:{type:"float",default:1,min:0,max:1,step:.01,label:"Blend"}},shaderKey:"asciiV2"},motionBlur:{type:"motionBlur",label:"Motion Blur",category:"image",inputs:[{id:"in",label:"Image",type:me.IMAGE}],outputs:[{id:"out",label:"Image",type:me.IMAGE}],params:{angle:{type:"float",default:0,min:0,max:3.1415,step:.01,label:"Angle (rad)"},strength:{type:"float",default:5,min:0,max:50,step:.1,label:"Strength"},samples:{type:"int",default:15,min:1,max:50,step:1,label:"Samples"},blendAmount:{type:"float",default:1,min:0,max:1,step:.01,label:"Mix / Blend"}},shaderKey:"motionBlur"},dithering:{type:"dithering",label:"Dithering (4x4)",category:"image",inputs:[{id:"in",label:"Image",type:me.IMAGE}],outputs:[{id:"out",label:"Image",type:me.IMAGE}],params:{colors:{type:"float",default:2,min:1,max:32,step:1,label:"Colors"},spread:{type:"float",default:.5,min:0,max:2,step:.01,label:"Spread"},blendAmount:{type:"float",default:1,min:0,max:1,step:.01,label:"Mix / Blend"}},shaderKey:"dithering"},lfo:{type:"lfo",label:"LFO",category:"animation",compact:!0,inlineParams:["waveform","frequency","amplitude"],inputs:[],outputs:[{id:"out",label:"Value",type:me.FLOAT}],params:{waveform:{type:"select",default:"sine",options:["sine","saw","square","triangle"],label:"Waveform"},frequency:{type:"float",default:1,min:.01,max:60,step:.01,label:"Frequency (Hz)"},amplitude:{type:"float",default:1,min:0,max:100,step:.01,label:"Amplitude"},offset:{type:"float",default:0,min:-100,max:100,step:.01,label:"Offset"},phase:{type:"float",default:0,min:0,max:360,step:1,label:"Phase (°)"}},shaderKey:null,isAnimated:!0},timer:{type:"timer",label:"Timer",category:"animation",inputs:[{id:"reset",label:"Reset",type:me.TRIGGER,optional:!0}],outputs:[{id:"out",label:"Time",type:me.FLOAT}],params:{speed:{type:"float",default:1,min:.01,max:10,step:.01,label:"Speed"},loop:{type:"bool",default:!1,label:"Loop"},loopDuration:{type:"float",default:5,min:.1,max:300,step:.1,label:"Loop Duration (s)"}},shaderKey:null,isAnimated:!0},random:{type:"random",label:"Random",category:"animation",inputs:[{id:"trigger",label:"Trigger",type:me.TRIGGER,optional:!0}],outputs:[{id:"out",label:"Value",type:me.FLOAT}],params:{min:{type:"float",default:0,min:-1e3,max:1e3,step:.01,label:"Min"},max:{type:"float",default:1,min:-1e3,max:1e3,step:.01,label:"Max"},triggerInterval:{type:"float",default:.5,min:.01,max:30,step:.01,label:"Self-Trigger (s)"},damping:{type:"float",default:0,min:0,max:.999,step:.001,label:"Damping"},seed:{type:"int",default:42,min:0,max:99999,step:1,label:"Seed"}},shaderKey:null,isAnimated:!0},damper:{type:"damper",label:"Damper",category:"animation",inputs:[{id:"target",label:"Target",type:me.FLOAT}],outputs:[{id:"out",label:"Value",type:me.FLOAT}],params:{smoothing:{type:"float",default:.9,min:0,max:.999,step:.001,label:"Smoothing"}},shaderKey:null,isAnimated:!0},fft:{type:"fft",label:"Audio FFT",category:"animation",compact:!0,inputs:[],outputs:[{id:"bass",label:"Bass",type:me.FLOAT},{id:"lowMid",label:"Low Mid",type:me.FLOAT},{id:"mid",label:"Mid",type:me.FLOAT},{id:"high",label:"High",type:me.FLOAT}],params:{smoothing:{type:"float",default:.8,min:0,max:.99,step:.01,label:"Smoothing"},gain:{type:"float",default:1,min:0,max:10,step:.1,label:"Gain"}},shaderKey:null,isAnimated:!0},button:{type:"button",label:"Button",category:"trigger",inputs:[],outputs:[{id:"out",label:"Trigger",type:me.TRIGGER}],params:{label:{type:"string",default:"Press",label:"Label"}},shaderKey:null},slider:{type:"slider",label:"Slider",category:"trigger",inputs:[],outputs:[{id:"out",label:"Value",type:me.FLOAT}],params:{value:{type:"float",default:.5,min:0,max:1,step:.01,label:"Value"},min:{type:"float",default:0,min:-1e4,max:1e4,step:.01,label:"Min"},max:{type:"float",default:1,min:-1e4,max:1e4,step:.01,label:"Max"},step:{type:"float",default:.01,min:.001,max:100,step:.001,label:"Step"},outputType:{type:"select",default:"float",options:["float","int"],label:"Output Type"}},shaderKey:null},knob:{type:"knob",label:"Knob",category:"trigger",compact:!0,inputs:[],outputs:[{id:"out",label:"Value",type:me.FLOAT}],params:{value:{type:"float",default:.5,min:0,max:1,step:.01,label:"Value"},min:{type:"float",default:0,min:-1e4,max:1e4,step:.01,label:"Min"},max:{type:"float",default:1,min:-1e4,max:1e4,step:.01,label:"Max"},step:{type:"float",default:.01,min:.001,max:100,step:.001,label:"Step"}},shaderKey:null},onStart:{type:"onStart",label:"On Start (Init)",category:"logic",inputs:[],outputs:[{id:"out",label:"Trigger",type:me.FLOAT}],params:{}},bang:{type:"bang",label:"Bang",category:"trigger",compact:!0,inputs:[],outputs:[{id:"out",label:"Trigger",type:me.FLOAT}],params:{label:{type:"string",default:"Bang!",label:"Label"}},shaderKey:null},toggle:{type:"toggle",label:"Toggle (Bool)",category:"trigger",compact:!0,inputs:[],outputs:[{id:"out",label:"State",type:me.BOOL}],params:{state:{type:"bool",default:!1,label:"State"}},shaderKey:null},edgeTrigger:{type:"edgeTrigger",label:"Edge -> Bang",category:"trigger",compact:!0,inputs:[{id:"in",label:"Bool",type:me.BOOL}],outputs:[{id:"out",label:"Trigger",type:me.TRIGGER}],params:{mode:{type:"select",default:"rising",options:["rising","falling","both"],label:"Edge"}},shaderKey:null},changeTrigger:{type:"changeTrigger",label:"Change -> Bang",category:"trigger",compact:!0,inputs:[{id:"in",label:"Value",type:me.FLOAT}],outputs:[{id:"out",label:"Trigger",type:me.TRIGGER}],params:{threshold:{type:"float",default:.1,min:.001,max:100,step:.001,label:"Threshold"}},shaderKey:null},compare:{type:"compare",label:"Compare",category:"math",inputs:[{id:"a",label:"A",type:me.FLOAT},{id:"b",label:"B",type:me.FLOAT}],outputs:[{id:"out",label:"Bool",type:me.BOOL}],params:{op:{type:"select",default:">",options:[">","<",">=","<=","==","!="],label:"Operator"}},shaderKey:null},valueCondition:{type:"valueCondition",label:"If / Else",category:"math",inputs:[{id:"cond",label:"Condition",type:me.BOOL},{id:"trueVal",label:"True",type:me.FLOAT,optional:!0},{id:"falseVal",label:"False",type:me.FLOAT,optional:!0}],outputs:[{id:"out",label:"Result",type:me.FLOAT}],params:{defaultTrue:{type:"float",default:1,min:-1e3,max:1e3,step:.01,label:"Def True"},defaultFalse:{type:"float",default:0,min:-1e3,max:1e3,step:.01,label:"Def False"}},shaderKey:null},mathAdd:{type:"mathAdd",label:"Add",category:"math",inputs:[{id:"a",label:"A",type:me.FLOAT},{id:"b",label:"B",type:me.FLOAT}],outputs:[{id:"out",label:"Result",type:me.FLOAT}],params:{},shaderKey:null},mathMultiply:{type:"mathMultiply",label:"Multiply",category:"math",inputs:[{id:"a",label:"A",type:me.FLOAT},{id:"b",label:"B",type:me.FLOAT}],outputs:[{id:"out",label:"Result",type:me.FLOAT}],params:{},shaderKey:null},mathDivide:{type:"mathDivide",label:"Divide",category:"math",inputs:[{id:"a",label:"A",type:me.FLOAT},{id:"b",label:"B",type:me.FLOAT}],outputs:[{id:"out",label:"Result",type:me.FLOAT}],params:{},shaderKey:null},mathSqrt:{type:"mathSqrt",label:"Sqrt",category:"math",inputs:[{id:"a",label:"Value",type:me.FLOAT}],outputs:[{id:"out",label:"Result",type:me.FLOAT}],params:{},shaderKey:null},mathMap:{type:"mathMap",label:"Map",category:"math",inputs:[{id:"value",label:"Value",type:me.FLOAT}],outputs:[{id:"out",label:"Result",type:me.FLOAT}],params:{inMin:{type:"float",default:0,min:-1e4,max:1e4,step:.01,label:"In Min"},inMax:{type:"float",default:1,min:-1e4,max:1e4,step:.01,label:"In Max"},outMin:{type:"float",default:0,min:-1e4,max:1e4,step:.01,label:"Out Min"},outMax:{type:"float",default:1,min:-1e4,max:1e4,step:.01,label:"Out Max"}},shaderKey:null},mathClamp:{type:"mathClamp",label:"Clamp",category:"math",inputs:[{id:"value",label:"Value",type:me.FLOAT}],outputs:[{id:"out",label:"Result",type:me.FLOAT}],params:{min:{type:"float",default:0,min:-1e4,max:1e4,step:.01,label:"Min"},max:{type:"float",default:1,min:-1e4,max:1e4,step:.01,label:"Max"}},shaderKey:null},mathWrap:{type:"mathWrap",label:"Wrap",category:"math",inputs:[{id:"value",label:"Value",type:me.FLOAT}],outputs:[{id:"out",label:"Result",type:me.FLOAT}],params:{min:{type:"float",default:0,min:-1e4,max:1e4,step:.01,label:"Min"},max:{type:"float",default:1,min:-1e4,max:1e4,step:.01,label:"Max"}},shaderKey:null},floatToInt:{type:"floatToInt",label:"Float → Int",category:"math",compact:!0,inputs:[{id:"in",label:"Float",type:me.FLOAT}],outputs:[{id:"out",label:"Int",type:me.INT}],params:{mode:{type:"select",default:"round",options:["round","floor","ceil","truncate"],label:"Mode"},clampMin:{type:"int",default:-2147483648,min:-2147483648,max:2147483647,step:1,label:"Clamp Min"},clampMax:{type:"int",default:2147483647,min:-2147483648,max:2147483647,step:1,label:"Clamp Max"}},shaderKey:null},intToFloat:{type:"intToFloat",label:"Int → Float",category:"math",inputs:[{id:"in",label:"Int",type:me.INT}],outputs:[{id:"out",label:"Float",type:me.FLOAT}],params:{},shaderKey:null},uvGenerator:{type:"uvGenerator",label:"UV Generator",category:"hidden",inputs:[],outputs:[{id:"out",label:"UV Map",type:me.UV_MAP}],params:{},shaderKey:"uvGenerator",isUvNode:!0},uvTransform:{type:"uvTransform",label:"UV Transform",category:"uv",inputs:[{id:"uvIn",label:"UV Map",type:me.UV_MAP,optional:!0},{id:"in",label:"Image (Legacy)",type:me.IMAGE,optional:!0}],outputs:[{id:"out",label:"UV Map",type:me.UV_MAP}],params:{scaleX:{type:"float",default:1,min:.01,max:10,step:.01,label:"Scale X"},scaleY:{type:"float",default:1,min:.01,max:10,step:.01,label:"Scale Y"},rotation:{type:"float",default:0,min:0,max:360,step:1,label:"Rotation (°)"},translateX:{type:"float",default:0,min:-2,max:2,step:.01,label:"Translate X"},translateY:{type:"float",default:0,min:-2,max:2,step:.01,label:"Translate Y"}},shaderKey:"uvTransform",isUvNode:!0},uvRepeat:{type:"uvRepeat",label:"UV Repeat",category:"uv",inputs:[{id:"uvIn",label:"UV Map",type:me.UV_MAP,optional:!0},{id:"in",label:"Image (Legacy)",type:me.IMAGE,optional:!0}],outputs:[{id:"out",label:"UV Map",type:me.UV_MAP}],params:{repeatX:{type:"float",default:2,min:.1,max:50,step:.1,label:"Repeat X"},repeatY:{type:"float",default:2,min:.1,max:50,step:.1,label:"Repeat Y"},mirror:{type:"bool",default:!1,label:"Mirror"},offsetX:{type:"float",default:0,min:0,max:1,step:.01,label:"Offset X"},offsetY:{type:"float",default:0,min:0,max:1,step:.01,label:"Offset Y"}},shaderKey:"uvRepeat",isUvNode:!0},uvGlitch:{type:"uvGlitch",label:"UV Glitch",category:"uv",inputs:[{id:"uvIn",label:"UV Map",type:me.UV_MAP,optional:!0},{id:"in",label:"Image (Legacy)",type:me.IMAGE,optional:!0}],outputs:[{id:"out",label:"UV Map",type:me.UV_MAP}],params:{blockSize:{type:"int",default:8,min:1,max:128,step:1,label:"Block Size"},intensity:{type:"float",default:.1,min:0,max:1,step:.01,label:"Intensity"},seed:{type:"float",default:0,min:0,max:1e3,step:.1,label:"Seed"},direction:{type:"select",default:"horizontal",options:["horizontal","vertical","both"],label:"Direction"}},shaderKey:"uvGlitch",isUvNode:!0},uvPolar:{type:"uvPolar",label:"UV Polar",category:"uv",inputs:[{id:"uvIn",label:"UV Map",type:me.UV_MAP,optional:!0},{id:"in",label:"Image (Legacy)",type:me.IMAGE,optional:!0}],outputs:[{id:"out",label:"UV Map",type:me.UV_MAP}],params:{mode:{type:"select",default:"toPolar",options:["toPolar","fromPolar"],label:"Mode"},centerX:{type:"float",default:.5,min:0,max:1,step:.01,label:"Center X"},centerY:{type:"float",default:.5,min:0,max:1,step:.01,label:"Center Y"}},shaderKey:"uvPolar",isUvNode:!0},textureTransform:{type:"textureTransform",label:"Texture Transform",category:"uv",inputs:[{id:"in",label:"Image",type:me.IMAGE,optional:!0},{id:"uvIn",label:"UV Map",type:me.UV_MAP,optional:!0}],outputs:[{id:"out",label:"Image/UV",type:me.IMAGE}],params:{scaleX:{type:"float",default:1,min:.01,max:10,step:.01,label:"Scale X"},scaleY:{type:"float",default:1,min:.01,max:10,step:.01,label:"Scale Y"},rotation:{type:"float",default:0,min:0,max:360,step:1,label:"Rotation (°)"},translateX:{type:"float",default:0,min:-2,max:2,step:.01,label:"Translate X"},translateY:{type:"float",default:0,min:-2,max:2,step:.01,label:"Translate Y"},wrapMode:{type:"select",default:"clamp",options:["clamp","repeat","mirror"],label:"Wrap Mode"}},shaderKey:"textureTransform"},numberMonitor:{type:"numberMonitor",label:"Number Monitor",category:"utility",inputs:[{id:"in",label:"Value",type:me.FLOAT}],outputs:[{id:"out",label:"Value",type:me.FLOAT}],params:{decimals:{type:"int",default:3,min:0,max:10,step:1,label:"Decimals"},showGraph:{type:"bool",default:!0,label:"Show Graph"}},shaderKey:null,isPassthrough:!0},preview:{type:"preview",label:"Preview",category:"utility",inputs:[{id:"in",label:"Image",type:me.IMAGE}],outputs:[{id:"out",label:"Image",type:me.IMAGE}],params:{},shaderKey:"passthrough",isPassthrough:!0},accelerometer:{type:"accelerometer",label:"Accelerometer",category:"trigger",compact:!0,inputs:[],outputs:[{id:"x",label:"X",type:me.FLOAT},{id:"y",label:"Y",type:me.FLOAT},{id:"z",label:"Z",type:me.FLOAT}],params:{sensitivity:{type:"float",default:1,min:.01,max:10,step:.01,label:"Sensitivity"},smoothing:{type:"float",default:.5,min:0,max:.99,step:.01,label:"Smoothing"}},shaderKey:null,isAnimated:!0},xyPad:{type:"xyPad",label:"XY Pad",category:"trigger",inputs:[],outputs:[{id:"x",label:"X",type:me.FLOAT},{id:"y",label:"Y",type:me.FLOAT}],params:{x:{type:"float",default:.5,min:0,max:1,step:.001,label:"X"},y:{type:"float",default:.5,min:0,max:1,step:.001,label:"Y"},minX:{type:"float",default:0,min:-1e3,max:1e3,step:.01,label:"Min X"},maxX:{type:"float",default:1,min:-1e3,max:1e3,step:.01,label:"Max X"},minY:{type:"float",default:0,min:-1e3,max:1e3,step:.01,label:"Min Y"},maxY:{type:"float",default:1,min:-1e3,max:1e3,step:.01,label:"Max Y"}},shaderKey:null},textNode:{type:"textNode",label:"Text",category:"utility",inputs:[],outputs:[],params:{content:{type:"string",default:"Double click to edit text...",hidden:!0},fontSize:{type:"int",default:24,min:8,max:200,step:1,label:"Font Size"},fontFamily:{type:"select",default:"sans-serif",options:["sans-serif","serif","monospace","cursive","fantasy"],label:"Font Family"},color:{type:"string",default:"#ffffff",ui:"color",label:"Color"},align:{type:"select",default:"left",options:["left","center","right","justify"],label:"Alignment"},fontWeight:{type:"select",default:"normal",options:["normal","bold","100","300","900"],label:"Weight"},fontStyle:{type:"select",default:"normal",options:["normal","italic","oblique"],label:"Style"}},shaderKey:null}},hu={image:{label:"Image",icon:"🖼️",color:"#00d4ff"},animation:{label:"Animation",icon:"⏱️",color:"#9b59b6"},trigger:{label:"Controls",icon:"🎛️",color:"#2ecc71"},logic:{label:"Logic",icon:"🧠",color:"#f39c12"},math:{label:"Math",icon:"🔢",color:"#ff9a2e"},uv:{label:"UV / Texture",icon:"🌀",color:"#ff6eb4"},utility:{label:"Utility",icon:"🔍",color:"#a0a0b0"}};function $t(t){return Oh[t]||null}function OA(){return{...Oh}}function BA(t){return Object.values(Oh).filter(e=>e.category===t)}const kA={class:"node-palette__collapse-btn"},VA=["onClick"],zA={class:"node-palette__category-icon"},$A={class:"node-palette__category-label"},HA={style:{"font-size":"10px",color:"var(--text-muted)"}},GA=["onDragstart","onClick"],WA={__name:"NodePalette",emits:["addNode"],setup(t,{emit:e}){const n=hu,i=Ne(!1),r=Fr(Object.fromEntries(Object.keys(hu).map(l=>[l,!0])));function o(l){r[l]=!r[l]}function s(l){return BA(l)}function a(l,u){l.dataTransfer.setData("application/node-type",u),l.dataTransfer.effectAllowed="move"}return(l,u)=>(ae(),ge("div",{class:lt(["node-palette",{"node-palette--collapsed":i.value}])},[K("div",{class:"node-palette__header",onClick:u[0]||(u[0]=c=>i.value=!i.value),title:"Toggle node library"},[Hi(K("span",null,"Node Library",512),[[Gi,!i.value]]),K("span",kA,Re(i.value?"›":"‹"),1)]),i.value?$e("",!0):(ae(!0),ge(it,{key:0},Gt(fe(n),(c,f)=>(ae(),ge("div",{key:f,class:"node-palette__category"},[K("div",{class:"node-palette__category-header",onClick:d=>o(f)},[K("span",zA,Re(c.icon),1),K("span",$A,Re(c.label),1),K("span",HA,Re(r[f]?"▾":"▸"),1)],8,VA),r[f]?(ae(!0),ge(it,{key:0},Gt(s(f),d=>(ae(),ge("div",{key:d.type,class:"node-palette__item",draggable:"true",onDragstart:h=>a(h,d.type),onClick:h=>l.$emit("addNode",d.type)},[K("div",{class:"node-palette__item-dot",style:nt({background:c.color})},null,4),hi(" "+Re(d.label),1)],40,GA))),128)):$e("",!0)]))),128))],2))}};function pa(t){return Ou()?(Xs(t),!0):!1}function $i(t){return typeof t=="function"?t():fe(t)}const XA=typeof window<"u"&&typeof document<"u",YA=t=>typeof t<"u",qA=Object.prototype.toString,KA=t=>qA.call(t)==="[object Object]",ZA=()=>{};function jA(t,e){function n(...i){return new Promise((r,o)=>{Promise.resolve(t(()=>e.apply(this,i),{fn:e,thisArg:this,args:i})).then(r).catch(o)})}return n}const x_=t=>t();function JA(t=x_){const e=Ne(!0);function n(){e.value=!1}function i(){e.value=!0}return{isActive:eu(e),pause:n,resume:i,eventFilter:(...o)=>{e.value&&t(...o)}}}function Qm(t,e=!1,n="Timeout"){return new Promise((i,r)=>{setTimeout(e?()=>r(n):i,t)})}function QA(t,e,n={}){const{eventFilter:i=x_,...r}=n;return at(t,jA(i,e),r)}function Xo(t,e,n={}){const{eventFilter:i,...r}=n,{eventFilter:o,pause:s,resume:a,isActive:l}=JA(i);return{stop:QA(t,e,{...r,eventFilter:o}),pause:s,resume:a,isActive:l}}function e2(t,e={}){if(!Ft(t))return Bv(t);const n=Array.isArray(t.value)?Array.from({length:t.value.length}):{};for(const i in t.value)n[i]=tb(()=>({get(){return t.value[i]},set(r){var o;if((o=$i(e.replaceRef))!=null?o:!0)if(Array.isArray(t.value)){const a=[...t.value];a[i]=r,t.value=a}else{const a={...t.value,[i]:r};Object.setPrototypeOf(a,Object.getPrototypeOf(t.value)),t.value=a}else t.value[i]=r}}));return n}function Nf(t,e=!1){function n(f,{flush:d="sync",deep:h=!1,timeout:m,throwOnTimeout:v}={}){let g=null;const y=[new Promise(S=>{g=at(t,_=>{f(_)!==e&&(g?.(),S(_))},{flush:d,deep:h,immediate:!0})})];return m!=null&&y.push(Qm(m,v).then(()=>$i(t)).finally(()=>g?.())),Promise.race(y)}function i(f,d){if(!Ft(f))return n(_=>_===f,d);const{flush:h="sync",deep:m=!1,timeout:v,throwOnTimeout:g}=d??{};let p=null;const S=[new Promise(_=>{p=at([t,f],([R,N])=>{e!==(R===N)&&(p?.(),_(R))},{flush:h,deep:m,immediate:!0})})];return v!=null&&S.push(Qm(v,g).then(()=>$i(t)).finally(()=>(p?.(),$i(t)))),Promise.race(S)}function r(f){return n(d=>!!d,f)}function o(f){return i(null,f)}function s(f){return i(void 0,f)}function a(f){return n(Number.isNaN,f)}function l(f,d){return n(h=>{const m=Array.from(h);return m.includes(f)||m.includes($i(f))},d)}function u(f){return c(1,f)}function c(f=1,d){let h=-1;return n(()=>(h+=1,h>=f),d)}return Array.isArray($i(t))?{toMatch:n,toContains:l,changed:u,changedTimes:c,get not(){return Nf(t,!e)}}:{toMatch:n,toBe:i,toBeTruthy:r,toBeNull:o,toBeNaN:a,toBeUndefined:s,changed:u,changedTimes:c,get not(){return Nf(t,!e)}}}function Df(t){return Nf(t)}function t2(t){var e;const n=$i(t);return(e=n?.$el)!=null?e:n}const b_=XA?window:void 0;function S_(...t){let e,n,i,r;if(typeof t[0]=="string"||Array.isArray(t[0])?([n,i,r]=t,e=b_):[e,n,i,r]=t,!e)return ZA;Array.isArray(n)||(n=[n]),Array.isArray(i)||(i=[i]);const o=[],s=()=>{o.forEach(c=>c()),o.length=0},a=(c,f,d,h)=>(c.addEventListener(f,d,h),()=>c.removeEventListener(f,d,h)),l=at(()=>[t2(e),$i(r)],([c,f])=>{if(s(),!c)return;const d=KA(f)?{...f}:f;o.push(...n.flatMap(h=>i.map(m=>a(c,h,m,d))))},{immediate:!0,flush:"post"}),u=()=>{l(),s()};return pa(u),u}function n2(t){return typeof t=="function"?t:typeof t=="string"?e=>e.key===t:Array.isArray(t)?e=>t.includes(e.key):()=>!0}function eg(...t){let e,n,i={};t.length===3?(e=t[0],n=t[1],i=t[2]):t.length===2?typeof t[1]=="object"?(e=!0,n=t[0],i=t[1]):(e=t[0],n=t[1]):(e=!0,n=t[0]);const{target:r=b_,eventName:o="keydown",passive:s=!1,dedupe:a=!1}=i,l=n2(e);return S_(r,o,c=>{c.repeat&&$i(a)||l(c)&&n(c)},s)}function i2(t){return JSON.parse(JSON.stringify(t))}function ld(t,e,n,i={}){var r,o,s;const{clone:a=!1,passive:l=!1,eventName:u,deep:c=!1,defaultValue:f,shouldEmit:d}=i,h=Mi(),m=n||h?.emit||((r=h?.$emit)==null?void 0:r.bind(h))||((s=(o=h?.proxy)==null?void 0:o.$emit)==null?void 0:s.bind(h?.proxy));let v=u;e||(e="modelValue"),v=v||`update:${e.toString()}`;const g=S=>a?typeof a=="function"?a(S):i2(S):S,p=()=>YA(t[e])?g(t[e]):f,y=S=>{d?d(S)&&m(v,S):m(v,S)};if(l){const S=p(),_=Ne(S);let R=!1;return at(()=>t[e],N=>{R||(R=!0,_.value=g(N),qt(()=>R=!1))}),at(_,N=>{!R&&(N!==t[e]||c)&&y(N)},{deep:c}),_}else return De({get(){return p()},set(S){y(S)}})}var r2={value:()=>{}};function Ju(){for(var t=0,e=arguments.length,n={},i;t<e;++t){if(!(i=arguments[t]+"")||i in n||/[\s.]/.test(i))throw new Error("illegal type: "+i);n[i]=[]}return new $l(n)}function $l(t){this._=t}function o2(t,e){return t.trim().split(/^|\s+/).map(function(n){var i="",r=n.indexOf(".");if(r>=0&&(i=n.slice(r+1),n=n.slice(0,r)),n&&!e.hasOwnProperty(n))throw new Error("unknown type: "+n);return{type:n,name:i}})}$l.prototype=Ju.prototype={constructor:$l,on:function(t,e){var n=this._,i=o2(t+"",n),r,o=-1,s=i.length;if(arguments.length<2){for(;++o<s;)if((r=(t=i[o]).type)&&(r=s2(n[r],t.name)))return r;return}if(e!=null&&typeof e!="function")throw new Error("invalid callback: "+e);for(;++o<s;)if(r=(t=i[o]).type)n[r]=tg(n[r],t.name,e);else if(e==null)for(r in n)n[r]=tg(n[r],t.name,null);return this},copy:function(){var t={},e=this._;for(var n in e)t[n]=e[n].slice();return new $l(t)},call:function(t,e){if((r=arguments.length-2)>0)for(var n=new Array(r),i=0,r,o;i<r;++i)n[i]=arguments[i+2];if(!this._.hasOwnProperty(t))throw new Error("unknown type: "+t);for(o=this._[t],i=0,r=o.length;i<r;++i)o[i].value.apply(e,n)},apply:function(t,e,n){if(!this._.hasOwnProperty(t))throw new Error("unknown type: "+t);for(var i=this._[t],r=0,o=i.length;r<o;++r)i[r].value.apply(e,n)}};function s2(t,e){for(var n=0,i=t.length,r;n<i;++n)if((r=t[n]).name===e)return r.value}function tg(t,e,n){for(var i=0,r=t.length;i<r;++i)if(t[i].name===e){t[i]=r2,t=t.slice(0,i).concat(t.slice(i+1));break}return n!=null&&t.push({name:e,value:n}),t}var Lf="http://www.w3.org/1999/xhtml";const ng={svg:"http://www.w3.org/2000/svg",xhtml:Lf,xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"};function Qu(t){var e=t+="",n=e.indexOf(":");return n>=0&&(e=t.slice(0,n))!=="xmlns"&&(t=t.slice(n+1)),ng.hasOwnProperty(e)?{space:ng[e],local:t}:t}function a2(t){return function(){var e=this.ownerDocument,n=this.namespaceURI;return n===Lf&&e.documentElement.namespaceURI===Lf?e.createElement(t):e.createElementNS(n,t)}}function l2(t){return function(){return this.ownerDocument.createElementNS(t.space,t.local)}}function M_(t){var e=Qu(t);return(e.local?l2:a2)(e)}function u2(){}function Bh(t){return t==null?u2:function(){return this.querySelector(t)}}function c2(t){typeof t!="function"&&(t=Bh(t));for(var e=this._groups,n=e.length,i=new Array(n),r=0;r<n;++r)for(var o=e[r],s=o.length,a=i[r]=new Array(s),l,u,c=0;c<s;++c)(l=o[c])&&(u=t.call(l,l.__data__,c,o))&&("__data__"in l&&(u.__data__=l.__data__),a[c]=u);return new Dn(i,this._parents)}function d2(t){return t==null?[]:Array.isArray(t)?t:Array.from(t)}function f2(){return[]}function w_(t){return t==null?f2:function(){return this.querySelectorAll(t)}}function h2(t){return function(){return d2(t.apply(this,arguments))}}function p2(t){typeof t=="function"?t=h2(t):t=w_(t);for(var e=this._groups,n=e.length,i=[],r=[],o=0;o<n;++o)for(var s=e[o],a=s.length,l,u=0;u<a;++u)(l=s[u])&&(i.push(t.call(l,l.__data__,u,s)),r.push(l));return new Dn(i,r)}function E_(t){return function(){return this.matches(t)}}function T_(t){return function(e){return e.matches(t)}}var m2=Array.prototype.find;function g2(t){return function(){return m2.call(this.children,t)}}function v2(){return this.firstElementChild}function _2(t){return this.select(t==null?v2:g2(typeof t=="function"?t:T_(t)))}var y2=Array.prototype.filter;function x2(){return Array.from(this.children)}function b2(t){return function(){return y2.call(this.children,t)}}function S2(t){return this.selectAll(t==null?x2:b2(typeof t=="function"?t:T_(t)))}function M2(t){typeof t!="function"&&(t=E_(t));for(var e=this._groups,n=e.length,i=new Array(n),r=0;r<n;++r)for(var o=e[r],s=o.length,a=i[r]=[],l,u=0;u<s;++u)(l=o[u])&&t.call(l,l.__data__,u,o)&&a.push(l);return new Dn(i,this._parents)}function C_(t){return new Array(t.length)}function w2(){return new Dn(this._enter||this._groups.map(C_),this._parents)}function pu(t,e){this.ownerDocument=t.ownerDocument,this.namespaceURI=t.namespaceURI,this._next=null,this._parent=t,this.__data__=e}pu.prototype={constructor:pu,appendChild:function(t){return this._parent.insertBefore(t,this._next)},insertBefore:function(t,e){return this._parent.insertBefore(t,e)},querySelector:function(t){return this._parent.querySelector(t)},querySelectorAll:function(t){return this._parent.querySelectorAll(t)}};function E2(t){return function(){return t}}function T2(t,e,n,i,r,o){for(var s=0,a,l=e.length,u=o.length;s<u;++s)(a=e[s])?(a.__data__=o[s],i[s]=a):n[s]=new pu(t,o[s]);for(;s<l;++s)(a=e[s])&&(r[s]=a)}function C2(t,e,n,i,r,o,s){var a,l,u=new Map,c=e.length,f=o.length,d=new Array(c),h;for(a=0;a<c;++a)(l=e[a])&&(d[a]=h=s.call(l,l.__data__,a,e)+"",u.has(h)?r[a]=l:u.set(h,l));for(a=0;a<f;++a)h=s.call(t,o[a],a,o)+"",(l=u.get(h))?(i[a]=l,l.__data__=o[a],u.delete(h)):n[a]=new pu(t,o[a]);for(a=0;a<c;++a)(l=e[a])&&u.get(d[a])===l&&(r[a]=l)}function A2(t){return t.__data__}function R2(t,e){if(!arguments.length)return Array.from(this,A2);var n=e?C2:T2,i=this._parents,r=this._groups;typeof t!="function"&&(t=E2(t));for(var o=r.length,s=new Array(o),a=new Array(o),l=new Array(o),u=0;u<o;++u){var c=i[u],f=r[u],d=f.length,h=I2(t.call(c,c&&c.__data__,u,i)),m=h.length,v=a[u]=new Array(m),g=s[u]=new Array(m),p=l[u]=new Array(d);n(c,f,v,g,p,h,e);for(var y=0,S=0,_,R;y<m;++y)if(_=v[y]){for(y>=S&&(S=y+1);!(R=g[S])&&++S<m;);_._next=R||null}}return s=new Dn(s,i),s._enter=a,s._exit=l,s}function I2(t){return typeof t=="object"&&"length"in t?t:Array.from(t)}function P2(){return new Dn(this._exit||this._groups.map(C_),this._parents)}function N2(t,e,n){var i=this.enter(),r=this,o=this.exit();return typeof t=="function"?(i=t(i),i&&(i=i.selection())):i=i.append(t+""),e!=null&&(r=e(r),r&&(r=r.selection())),n==null?o.remove():n(o),i&&r?i.merge(r).order():r}function D2(t){for(var e=t.selection?t.selection():t,n=this._groups,i=e._groups,r=n.length,o=i.length,s=Math.min(r,o),a=new Array(r),l=0;l<s;++l)for(var u=n[l],c=i[l],f=u.length,d=a[l]=new Array(f),h,m=0;m<f;++m)(h=u[m]||c[m])&&(d[m]=h);for(;l<r;++l)a[l]=n[l];return new Dn(a,this._parents)}function L2(){for(var t=this._groups,e=-1,n=t.length;++e<n;)for(var i=t[e],r=i.length-1,o=i[r],s;--r>=0;)(s=i[r])&&(o&&s.compareDocumentPosition(o)^4&&o.parentNode.insertBefore(s,o),o=s);return this}function U2(t){t||(t=F2);function e(f,d){return f&&d?t(f.__data__,d.__data__):!f-!d}for(var n=this._groups,i=n.length,r=new Array(i),o=0;o<i;++o){for(var s=n[o],a=s.length,l=r[o]=new Array(a),u,c=0;c<a;++c)(u=s[c])&&(l[c]=u);l.sort(e)}return new Dn(r,this._parents).order()}function F2(t,e){return t<e?-1:t>e?1:t>=e?0:NaN}function O2(){var t=arguments[0];return arguments[0]=this,t.apply(null,arguments),this}function B2(){return Array.from(this)}function k2(){for(var t=this._groups,e=0,n=t.length;e<n;++e)for(var i=t[e],r=0,o=i.length;r<o;++r){var s=i[r];if(s)return s}return null}function V2(){let t=0;for(const e of this)++t;return t}function z2(){return!this.node()}function $2(t){for(var e=this._groups,n=0,i=e.length;n<i;++n)for(var r=e[n],o=0,s=r.length,a;o<s;++o)(a=r[o])&&t.call(a,a.__data__,o,r);return this}function H2(t){return function(){this.removeAttribute(t)}}function G2(t){return function(){this.removeAttributeNS(t.space,t.local)}}function W2(t,e){return function(){this.setAttribute(t,e)}}function X2(t,e){return function(){this.setAttributeNS(t.space,t.local,e)}}function Y2(t,e){return function(){var n=e.apply(this,arguments);n==null?this.removeAttribute(t):this.setAttribute(t,n)}}function q2(t,e){return function(){var n=e.apply(this,arguments);n==null?this.removeAttributeNS(t.space,t.local):this.setAttributeNS(t.space,t.local,n)}}function K2(t,e){var n=Qu(t);if(arguments.length<2){var i=this.node();return n.local?i.getAttributeNS(n.space,n.local):i.getAttribute(n)}return this.each((e==null?n.local?G2:H2:typeof e=="function"?n.local?q2:Y2:n.local?X2:W2)(n,e))}function A_(t){return t.ownerDocument&&t.ownerDocument.defaultView||t.document&&t||t.defaultView}function Z2(t){return function(){this.style.removeProperty(t)}}function j2(t,e,n){return function(){this.style.setProperty(t,e,n)}}function J2(t,e,n){return function(){var i=e.apply(this,arguments);i==null?this.style.removeProperty(t):this.style.setProperty(t,i,n)}}function Q2(t,e,n){return arguments.length>1?this.each((e==null?Z2:typeof e=="function"?J2:j2)(t,e,n??"")):fs(this.node(),t)}function fs(t,e){return t.style.getPropertyValue(e)||A_(t).getComputedStyle(t,null).getPropertyValue(e)}function eR(t){return function(){delete this[t]}}function tR(t,e){return function(){this[t]=e}}function nR(t,e){return function(){var n=e.apply(this,arguments);n==null?delete this[t]:this[t]=n}}function iR(t,e){return arguments.length>1?this.each((e==null?eR:typeof e=="function"?nR:tR)(t,e)):this.node()[t]}function R_(t){return t.trim().split(/^|\s+/)}function kh(t){return t.classList||new I_(t)}function I_(t){this._node=t,this._names=R_(t.getAttribute("class")||"")}I_.prototype={add:function(t){var e=this._names.indexOf(t);e<0&&(this._names.push(t),this._node.setAttribute("class",this._names.join(" ")))},remove:function(t){var e=this._names.indexOf(t);e>=0&&(this._names.splice(e,1),this._node.setAttribute("class",this._names.join(" ")))},contains:function(t){return this._names.indexOf(t)>=0}};function P_(t,e){for(var n=kh(t),i=-1,r=e.length;++i<r;)n.add(e[i])}function N_(t,e){for(var n=kh(t),i=-1,r=e.length;++i<r;)n.remove(e[i])}function rR(t){return function(){P_(this,t)}}function oR(t){return function(){N_(this,t)}}function sR(t,e){return function(){(e.apply(this,arguments)?P_:N_)(this,t)}}function aR(t,e){var n=R_(t+"");if(arguments.length<2){for(var i=kh(this.node()),r=-1,o=n.length;++r<o;)if(!i.contains(n[r]))return!1;return!0}return this.each((typeof e=="function"?sR:e?rR:oR)(n,e))}function lR(){this.textContent=""}function uR(t){return function(){this.textContent=t}}function cR(t){return function(){var e=t.apply(this,arguments);this.textContent=e??""}}function dR(t){return arguments.length?this.each(t==null?lR:(typeof t=="function"?cR:uR)(t)):this.node().textContent}function fR(){this.innerHTML=""}function hR(t){return function(){this.innerHTML=t}}function pR(t){return function(){var e=t.apply(this,arguments);this.innerHTML=e??""}}function mR(t){return arguments.length?this.each(t==null?fR:(typeof t=="function"?pR:hR)(t)):this.node().innerHTML}function gR(){this.nextSibling&&this.parentNode.appendChild(this)}function vR(){return this.each(gR)}function _R(){this.previousSibling&&this.parentNode.insertBefore(this,this.parentNode.firstChild)}function yR(){return this.each(_R)}function xR(t){var e=typeof t=="function"?t:M_(t);return this.select(function(){return this.appendChild(e.apply(this,arguments))})}function bR(){return null}function SR(t,e){var n=typeof t=="function"?t:M_(t),i=e==null?bR:typeof e=="function"?e:Bh(e);return this.select(function(){return this.insertBefore(n.apply(this,arguments),i.apply(this,arguments)||null)})}function MR(){var t=this.parentNode;t&&t.removeChild(this)}function wR(){return this.each(MR)}function ER(){var t=this.cloneNode(!1),e=this.parentNode;return e?e.insertBefore(t,this.nextSibling):t}function TR(){var t=this.cloneNode(!0),e=this.parentNode;return e?e.insertBefore(t,this.nextSibling):t}function CR(t){return this.select(t?TR:ER)}function AR(t){return arguments.length?this.property("__data__",t):this.node().__data__}function RR(t){return function(e){t.call(this,e,this.__data__)}}function IR(t){return t.trim().split(/^|\s+/).map(function(e){var n="",i=e.indexOf(".");return i>=0&&(n=e.slice(i+1),e=e.slice(0,i)),{type:e,name:n}})}function PR(t){return function(){var e=this.__on;if(e){for(var n=0,i=-1,r=e.length,o;n<r;++n)o=e[n],(!t.type||o.type===t.type)&&o.name===t.name?this.removeEventListener(o.type,o.listener,o.options):e[++i]=o;++i?e.length=i:delete this.__on}}}function NR(t,e,n){return function(){var i=this.__on,r,o=RR(e);if(i){for(var s=0,a=i.length;s<a;++s)if((r=i[s]).type===t.type&&r.name===t.name){this.removeEventListener(r.type,r.listener,r.options),this.addEventListener(r.type,r.listener=o,r.options=n),r.value=e;return}}this.addEventListener(t.type,o,n),r={type:t.type,name:t.name,value:e,listener:o,options:n},i?i.push(r):this.__on=[r]}}function DR(t,e,n){var i=IR(t+""),r,o=i.length,s;if(arguments.length<2){var a=this.node().__on;if(a){for(var l=0,u=a.length,c;l<u;++l)for(r=0,c=a[l];r<o;++r)if((s=i[r]).type===c.type&&s.name===c.name)return c.value}return}for(a=e?NR:PR,r=0;r<o;++r)this.each(a(i[r],e,n));return this}function D_(t,e,n){var i=A_(t),r=i.CustomEvent;typeof r=="function"?r=new r(e,n):(r=i.document.createEvent("Event"),n?(r.initEvent(e,n.bubbles,n.cancelable),r.detail=n.detail):r.initEvent(e,!1,!1)),t.dispatchEvent(r)}function LR(t,e){return function(){return D_(this,t,e)}}function UR(t,e){return function(){return D_(this,t,e.apply(this,arguments))}}function FR(t,e){return this.each((typeof e=="function"?UR:LR)(t,e))}function*OR(){for(var t=this._groups,e=0,n=t.length;e<n;++e)for(var i=t[e],r=0,o=i.length,s;r<o;++r)(s=i[r])&&(yield s)}var L_=[null];function Dn(t,e){this._groups=t,this._parents=e}function Fa(){return new Dn([[document.documentElement]],L_)}function BR(){return this}Dn.prototype=Fa.prototype={constructor:Dn,select:c2,selectAll:p2,selectChild:_2,selectChildren:S2,filter:M2,data:R2,enter:w2,exit:P2,join:N2,merge:D2,selection:BR,order:L2,sort:U2,call:O2,nodes:B2,node:k2,size:V2,empty:z2,each:$2,attr:K2,style:Q2,property:iR,classed:aR,text:dR,html:mR,raise:vR,lower:yR,append:xR,insert:SR,remove:wR,clone:CR,datum:AR,on:DR,dispatch:FR,[Symbol.iterator]:OR};function Xn(t){return typeof t=="string"?new Dn([[document.querySelector(t)]],[document.documentElement]):new Dn([[t]],L_)}function kR(t){let e;for(;e=t.sourceEvent;)t=e;return t}function li(t,e){if(t=kR(t),e===void 0&&(e=t.currentTarget),e){var n=e.ownerSVGElement||e;if(n.createSVGPoint){var i=n.createSVGPoint();return i.x=t.clientX,i.y=t.clientY,i=i.matrixTransform(e.getScreenCTM().inverse()),[i.x,i.y]}if(e.getBoundingClientRect){var r=e.getBoundingClientRect();return[t.clientX-r.left-e.clientLeft,t.clientY-r.top-e.clientTop]}}return[t.pageX,t.pageY]}const VR={passive:!1},ma={capture:!0,passive:!1};function ud(t){t.stopImmediatePropagation()}function ts(t){t.preventDefault(),t.stopImmediatePropagation()}function U_(t){var e=t.document.documentElement,n=Xn(t).on("dragstart.drag",ts,ma);"onselectstart"in e?n.on("selectstart.drag",ts,ma):(e.__noselect=e.style.MozUserSelect,e.style.MozUserSelect="none")}function F_(t,e){var n=t.document.documentElement,i=Xn(t).on("dragstart.drag",null);e&&(i.on("click.drag",ts,ma),setTimeout(function(){i.on("click.drag",null)},0)),"onselectstart"in n?i.on("selectstart.drag",null):(n.style.MozUserSelect=n.__noselect,delete n.__noselect)}const gl=t=>()=>t;function Uf(t,{sourceEvent:e,subject:n,target:i,identifier:r,active:o,x:s,y:a,dx:l,dy:u,dispatch:c}){Object.defineProperties(this,{type:{value:t,enumerable:!0,configurable:!0},sourceEvent:{value:e,enumerable:!0,configurable:!0},subject:{value:n,enumerable:!0,configurable:!0},target:{value:i,enumerable:!0,configurable:!0},identifier:{value:r,enumerable:!0,configurable:!0},active:{value:o,enumerable:!0,configurable:!0},x:{value:s,enumerable:!0,configurable:!0},y:{value:a,enumerable:!0,configurable:!0},dx:{value:l,enumerable:!0,configurable:!0},dy:{value:u,enumerable:!0,configurable:!0},_:{value:c}})}Uf.prototype.on=function(){var t=this._.on.apply(this._,arguments);return t===this._?this:t};function zR(t){return!t.ctrlKey&&!t.button}function $R(){return this.parentNode}function HR(t,e){return e??{x:t.x,y:t.y}}function GR(){return navigator.maxTouchPoints||"ontouchstart"in this}function WR(){var t=zR,e=$R,n=HR,i=GR,r={},o=Ju("start","drag","end"),s=0,a,l,u,c,f=0;function d(_){_.on("mousedown.drag",h).filter(i).on("touchstart.drag",g).on("touchmove.drag",p,VR).on("touchend.drag touchcancel.drag",y).style("touch-action","none").style("-webkit-tap-highlight-color","rgba(0,0,0,0)")}function h(_,R){if(!(c||!t.call(this,_,R))){var N=S(this,e.call(this,_,R),_,R,"mouse");N&&(Xn(_.view).on("mousemove.drag",m,ma).on("mouseup.drag",v,ma),U_(_.view),ud(_),u=!1,a=_.clientX,l=_.clientY,N("start",_))}}function m(_){if(ts(_),!u){var R=_.clientX-a,N=_.clientY-l;u=R*R+N*N>f}r.mouse("drag",_)}function v(_){Xn(_.view).on("mousemove.drag mouseup.drag",null),F_(_.view,u),ts(_),r.mouse("end",_)}function g(_,R){if(t.call(this,_,R)){var N=_.changedTouches,F=e.call(this,_,R),x=N.length,b,P;for(b=0;b<x;++b)(P=S(this,F,_,R,N[b].identifier,N[b]))&&(ud(_),P("start",_,N[b]))}}function p(_){var R=_.changedTouches,N=R.length,F,x;for(F=0;F<N;++F)(x=r[R[F].identifier])&&(ts(_),x("drag",_,R[F]))}function y(_){var R=_.changedTouches,N=R.length,F,x;for(c&&clearTimeout(c),c=setTimeout(function(){c=null},500),F=0;F<N;++F)(x=r[R[F].identifier])&&(ud(_),x("end",_,R[F]))}function S(_,R,N,F,x,b){var P=o.copy(),M=li(b||N,R),w,W,E;if((E=n.call(_,new Uf("beforestart",{sourceEvent:N,target:d,identifier:x,active:s,x:M[0],y:M[1],dx:0,dy:0,dispatch:P}),F))!=null)return w=E.x-M[0]||0,W=E.y-M[1]||0,function k(A,I,O){var z=M,q;switch(A){case"start":r[x]=k,q=s++;break;case"end":delete r[x],--s;case"drag":M=li(O||I,R),q=s;break}P.call(A,_,new Uf(A,{sourceEvent:I,subject:E,target:d,identifier:x,active:q,x:M[0]+w,y:M[1]+W,dx:M[0]-z[0],dy:M[1]-z[1],dispatch:P}),F)}}return d.filter=function(_){return arguments.length?(t=typeof _=="function"?_:gl(!!_),d):t},d.container=function(_){return arguments.length?(e=typeof _=="function"?_:gl(_),d):e},d.subject=function(_){return arguments.length?(n=typeof _=="function"?_:gl(_),d):n},d.touchable=function(_){return arguments.length?(i=typeof _=="function"?_:gl(!!_),d):i},d.on=function(){var _=o.on.apply(o,arguments);return _===o?d:_},d.clickDistance=function(_){return arguments.length?(f=(_=+_)*_,d):Math.sqrt(f)},d}function Vh(t,e,n){t.prototype=e.prototype=n,n.constructor=t}function O_(t,e){var n=Object.create(t.prototype);for(var i in e)n[i]=e[i];return n}function Oa(){}var ga=.7,mu=1/ga,ns="\\s*([+-]?\\d+)\\s*",va="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",yi="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",XR=/^#([0-9a-f]{3,8})$/,YR=new RegExp(`^rgb\\(${ns},${ns},${ns}\\)$`),qR=new RegExp(`^rgb\\(${yi},${yi},${yi}\\)$`),KR=new RegExp(`^rgba\\(${ns},${ns},${ns},${va}\\)$`),ZR=new RegExp(`^rgba\\(${yi},${yi},${yi},${va}\\)$`),jR=new RegExp(`^hsl\\(${va},${yi},${yi}\\)$`),JR=new RegExp(`^hsla\\(${va},${yi},${yi},${va}\\)$`),ig={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};Vh(Oa,Mo,{copy(t){return Object.assign(new this.constructor,this,t)},displayable(){return this.rgb().displayable()},hex:rg,formatHex:rg,formatHex8:QR,formatHsl:eI,formatRgb:og,toString:og});function rg(){return this.rgb().formatHex()}function QR(){return this.rgb().formatHex8()}function eI(){return B_(this).formatHsl()}function og(){return this.rgb().formatRgb()}function Mo(t){var e,n;return t=(t+"").trim().toLowerCase(),(e=XR.exec(t))?(n=e[1].length,e=parseInt(e[1],16),n===6?sg(e):n===3?new wn(e>>8&15|e>>4&240,e>>4&15|e&240,(e&15)<<4|e&15,1):n===8?vl(e>>24&255,e>>16&255,e>>8&255,(e&255)/255):n===4?vl(e>>12&15|e>>8&240,e>>8&15|e>>4&240,e>>4&15|e&240,((e&15)<<4|e&15)/255):null):(e=YR.exec(t))?new wn(e[1],e[2],e[3],1):(e=qR.exec(t))?new wn(e[1]*255/100,e[2]*255/100,e[3]*255/100,1):(e=KR.exec(t))?vl(e[1],e[2],e[3],e[4]):(e=ZR.exec(t))?vl(e[1]*255/100,e[2]*255/100,e[3]*255/100,e[4]):(e=jR.exec(t))?ug(e[1],e[2]/100,e[3]/100,1):(e=JR.exec(t))?ug(e[1],e[2]/100,e[3]/100,e[4]):ig.hasOwnProperty(t)?sg(ig[t]):t==="transparent"?new wn(NaN,NaN,NaN,0):null}function sg(t){return new wn(t>>16&255,t>>8&255,t&255,1)}function vl(t,e,n,i){return i<=0&&(t=e=n=NaN),new wn(t,e,n,i)}function tI(t){return t instanceof Oa||(t=Mo(t)),t?(t=t.rgb(),new wn(t.r,t.g,t.b,t.opacity)):new wn}function Ff(t,e,n,i){return arguments.length===1?tI(t):new wn(t,e,n,i??1)}function wn(t,e,n,i){this.r=+t,this.g=+e,this.b=+n,this.opacity=+i}Vh(wn,Ff,O_(Oa,{brighter(t){return t=t==null?mu:Math.pow(mu,t),new wn(this.r*t,this.g*t,this.b*t,this.opacity)},darker(t){return t=t==null?ga:Math.pow(ga,t),new wn(this.r*t,this.g*t,this.b*t,this.opacity)},rgb(){return this},clamp(){return new wn(_o(this.r),_o(this.g),_o(this.b),gu(this.opacity))},displayable(){return-.5<=this.r&&this.r<255.5&&-.5<=this.g&&this.g<255.5&&-.5<=this.b&&this.b<255.5&&0<=this.opacity&&this.opacity<=1},hex:ag,formatHex:ag,formatHex8:nI,formatRgb:lg,toString:lg}));function ag(){return`#${ho(this.r)}${ho(this.g)}${ho(this.b)}`}function nI(){return`#${ho(this.r)}${ho(this.g)}${ho(this.b)}${ho((isNaN(this.opacity)?1:this.opacity)*255)}`}function lg(){const t=gu(this.opacity);return`${t===1?"rgb(":"rgba("}${_o(this.r)}, ${_o(this.g)}, ${_o(this.b)}${t===1?")":`, ${t})`}`}function gu(t){return isNaN(t)?1:Math.max(0,Math.min(1,t))}function _o(t){return Math.max(0,Math.min(255,Math.round(t)||0))}function ho(t){return t=_o(t),(t<16?"0":"")+t.toString(16)}function ug(t,e,n,i){return i<=0?t=e=n=NaN:n<=0||n>=1?t=e=NaN:e<=0&&(t=NaN),new Yn(t,e,n,i)}function B_(t){if(t instanceof Yn)return new Yn(t.h,t.s,t.l,t.opacity);if(t instanceof Oa||(t=Mo(t)),!t)return new Yn;if(t instanceof Yn)return t;t=t.rgb();var e=t.r/255,n=t.g/255,i=t.b/255,r=Math.min(e,n,i),o=Math.max(e,n,i),s=NaN,a=o-r,l=(o+r)/2;return a?(e===o?s=(n-i)/a+(n<i)*6:n===o?s=(i-e)/a+2:s=(e-n)/a+4,a/=l<.5?o+r:2-o-r,s*=60):a=l>0&&l<1?0:s,new Yn(s,a,l,t.opacity)}function iI(t,e,n,i){return arguments.length===1?B_(t):new Yn(t,e,n,i??1)}function Yn(t,e,n,i){this.h=+t,this.s=+e,this.l=+n,this.opacity=+i}Vh(Yn,iI,O_(Oa,{brighter(t){return t=t==null?mu:Math.pow(mu,t),new Yn(this.h,this.s,this.l*t,this.opacity)},darker(t){return t=t==null?ga:Math.pow(ga,t),new Yn(this.h,this.s,this.l*t,this.opacity)},rgb(){var t=this.h%360+(this.h<0)*360,e=isNaN(t)||isNaN(this.s)?0:this.s,n=this.l,i=n+(n<.5?n:1-n)*e,r=2*n-i;return new wn(cd(t>=240?t-240:t+120,r,i),cd(t,r,i),cd(t<120?t+240:t-120,r,i),this.opacity)},clamp(){return new Yn(cg(this.h),_l(this.s),_l(this.l),gu(this.opacity))},displayable(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1},formatHsl(){const t=gu(this.opacity);return`${t===1?"hsl(":"hsla("}${cg(this.h)}, ${_l(this.s)*100}%, ${_l(this.l)*100}%${t===1?")":`, ${t})`}`}}));function cg(t){return t=(t||0)%360,t<0?t+360:t}function _l(t){return Math.max(0,Math.min(1,t||0))}function cd(t,e,n){return(t<60?e+(n-e)*t/60:t<180?n:t<240?e+(n-e)*(240-t)/60:e)*255}const zh=t=>()=>t;function rI(t,e){return function(n){return t+n*e}}function oI(t,e,n){return t=Math.pow(t,n),e=Math.pow(e,n)-t,n=1/n,function(i){return Math.pow(t+i*e,n)}}function sI(t){return(t=+t)==1?k_:function(e,n){return n-e?oI(e,n,t):zh(isNaN(e)?n:e)}}function k_(t,e){var n=e-t;return n?rI(t,n):zh(isNaN(t)?e:t)}const vu=(function t(e){var n=sI(e);function i(r,o){var s=n((r=Ff(r)).r,(o=Ff(o)).r),a=n(r.g,o.g),l=n(r.b,o.b),u=k_(r.opacity,o.opacity);return function(c){return r.r=s(c),r.g=a(c),r.b=l(c),r.opacity=u(c),r+""}}return i.gamma=t,i})(1);function aI(t,e){e||(e=[]);var n=t?Math.min(e.length,t.length):0,i=e.slice(),r;return function(o){for(r=0;r<n;++r)i[r]=t[r]*(1-o)+e[r]*o;return i}}function lI(t){return ArrayBuffer.isView(t)&&!(t instanceof DataView)}function uI(t,e){var n=e?e.length:0,i=t?Math.min(n,t.length):0,r=new Array(i),o=new Array(n),s;for(s=0;s<i;++s)r[s]=ea(t[s],e[s]);for(;s<n;++s)o[s]=e[s];return function(a){for(s=0;s<i;++s)o[s]=r[s](a);return o}}function cI(t,e){var n=new Date;return t=+t,e=+e,function(i){return n.setTime(t*(1-i)+e*i),n}}function di(t,e){return t=+t,e=+e,function(n){return t*(1-n)+e*n}}function dI(t,e){var n={},i={},r;(t===null||typeof t!="object")&&(t={}),(e===null||typeof e!="object")&&(e={});for(r in e)r in t?n[r]=ea(t[r],e[r]):i[r]=e[r];return function(o){for(r in n)i[r]=n[r](o);return i}}var Of=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,dd=new RegExp(Of.source,"g");function fI(t){return function(){return t}}function hI(t){return function(e){return t(e)+""}}function V_(t,e){var n=Of.lastIndex=dd.lastIndex=0,i,r,o,s=-1,a=[],l=[];for(t=t+"",e=e+"";(i=Of.exec(t))&&(r=dd.exec(e));)(o=r.index)>n&&(o=e.slice(n,o),a[s]?a[s]+=o:a[++s]=o),(i=i[0])===(r=r[0])?a[s]?a[s]+=r:a[++s]=r:(a[++s]=null,l.push({i:s,x:di(i,r)})),n=dd.lastIndex;return n<e.length&&(o=e.slice(n),a[s]?a[s]+=o:a[++s]=o),a.length<2?l[0]?hI(l[0].x):fI(e):(e=l.length,function(u){for(var c=0,f;c<e;++c)a[(f=l[c]).i]=f.x(u);return a.join("")})}function ea(t,e){var n=typeof e,i;return e==null||n==="boolean"?zh(e):(n==="number"?di:n==="string"?(i=Mo(e))?(e=i,vu):V_:e instanceof Mo?vu:e instanceof Date?cI:lI(e)?aI:Array.isArray(e)?uI:typeof e.valueOf!="function"&&typeof e.toString!="function"||isNaN(e)?dI:di)(t,e)}var dg=180/Math.PI,Bf={translateX:0,translateY:0,rotate:0,skewX:0,scaleX:1,scaleY:1};function z_(t,e,n,i,r,o){var s,a,l;return(s=Math.sqrt(t*t+e*e))&&(t/=s,e/=s),(l=t*n+e*i)&&(n-=t*l,i-=e*l),(a=Math.sqrt(n*n+i*i))&&(n/=a,i/=a,l/=a),t*i<e*n&&(t=-t,e=-e,l=-l,s=-s),{translateX:r,translateY:o,rotate:Math.atan2(e,t)*dg,skewX:Math.atan(l)*dg,scaleX:s,scaleY:a}}var yl;function pI(t){const e=new(typeof DOMMatrix=="function"?DOMMatrix:WebKitCSSMatrix)(t+"");return e.isIdentity?Bf:z_(e.a,e.b,e.c,e.d,e.e,e.f)}function mI(t){return t==null||(yl||(yl=document.createElementNS("http://www.w3.org/2000/svg","g")),yl.setAttribute("transform",t),!(t=yl.transform.baseVal.consolidate()))?Bf:(t=t.matrix,z_(t.a,t.b,t.c,t.d,t.e,t.f))}function $_(t,e,n,i){function r(u){return u.length?u.pop()+" ":""}function o(u,c,f,d,h,m){if(u!==f||c!==d){var v=h.push("translate(",null,e,null,n);m.push({i:v-4,x:di(u,f)},{i:v-2,x:di(c,d)})}else(f||d)&&h.push("translate("+f+e+d+n)}function s(u,c,f,d){u!==c?(u-c>180?c+=360:c-u>180&&(u+=360),d.push({i:f.push(r(f)+"rotate(",null,i)-2,x:di(u,c)})):c&&f.push(r(f)+"rotate("+c+i)}function a(u,c,f,d){u!==c?d.push({i:f.push(r(f)+"skewX(",null,i)-2,x:di(u,c)}):c&&f.push(r(f)+"skewX("+c+i)}function l(u,c,f,d,h,m){if(u!==f||c!==d){var v=h.push(r(h)+"scale(",null,",",null,")");m.push({i:v-4,x:di(u,f)},{i:v-2,x:di(c,d)})}else(f!==1||d!==1)&&h.push(r(h)+"scale("+f+","+d+")")}return function(u,c){var f=[],d=[];return u=t(u),c=t(c),o(u.translateX,u.translateY,c.translateX,c.translateY,f,d),s(u.rotate,c.rotate,f,d),a(u.skewX,c.skewX,f,d),l(u.scaleX,u.scaleY,c.scaleX,c.scaleY,f,d),u=c=null,function(h){for(var m=-1,v=d.length,g;++m<v;)f[(g=d[m]).i]=g.x(h);return f.join("")}}}var gI=$_(pI,"px, ","px)","deg)"),vI=$_(mI,", ",")",")"),_I=1e-12;function fg(t){return((t=Math.exp(t))+1/t)/2}function yI(t){return((t=Math.exp(t))-1/t)/2}function xI(t){return((t=Math.exp(2*t))-1)/(t+1)}const Hl=(function t(e,n,i){function r(o,s){var a=o[0],l=o[1],u=o[2],c=s[0],f=s[1],d=s[2],h=c-a,m=f-l,v=h*h+m*m,g,p;if(v<_I)p=Math.log(d/u)/e,g=function(F){return[a+F*h,l+F*m,u*Math.exp(e*F*p)]};else{var y=Math.sqrt(v),S=(d*d-u*u+i*v)/(2*u*n*y),_=(d*d-u*u-i*v)/(2*d*n*y),R=Math.log(Math.sqrt(S*S+1)-S),N=Math.log(Math.sqrt(_*_+1)-_);p=(N-R)/e,g=function(F){var x=F*p,b=fg(R),P=u/(n*y)*(b*xI(e*x+R)-yI(R));return[a+P*h,l+P*m,u*b/fg(e*x+R)]}}return g.duration=p*1e3*e/Math.SQRT2,g}return r.rho=function(o){var s=Math.max(.001,+o),a=s*s,l=a*a;return t(s,a,l)},r})(Math.SQRT2,2,4);var hs=0,Vs=0,Ds=0,H_=1e3,_u,zs,yu=0,wo=0,ec=0,_a=typeof performance=="object"&&performance.now?performance:Date,G_=typeof window=="object"&&window.requestAnimationFrame?window.requestAnimationFrame.bind(window):function(t){setTimeout(t,17)};function $h(){return wo||(G_(bI),wo=_a.now()+ec)}function bI(){wo=0}function xu(){this._call=this._time=this._next=null}xu.prototype=W_.prototype={constructor:xu,restart:function(t,e,n){if(typeof t!="function")throw new TypeError("callback is not a function");n=(n==null?$h():+n)+(e==null?0:+e),!this._next&&zs!==this&&(zs?zs._next=this:_u=this,zs=this),this._call=t,this._time=n,kf()},stop:function(){this._call&&(this._call=null,this._time=1/0,kf())}};function W_(t,e,n){var i=new xu;return i.restart(t,e,n),i}function SI(){$h(),++hs;for(var t=_u,e;t;)(e=wo-t._time)>=0&&t._call.call(void 0,e),t=t._next;--hs}function hg(){wo=(yu=_a.now())+ec,hs=Vs=0;try{SI()}finally{hs=0,wI(),wo=0}}function MI(){var t=_a.now(),e=t-yu;e>H_&&(ec-=e,yu=t)}function wI(){for(var t,e=_u,n,i=1/0;e;)e._call?(i>e._time&&(i=e._time),t=e,e=e._next):(n=e._next,e._next=null,e=t?t._next=n:_u=n);zs=t,kf(i)}function kf(t){if(!hs){Vs&&(Vs=clearTimeout(Vs));var e=t-wo;e>24?(t<1/0&&(Vs=setTimeout(hg,t-_a.now()-ec)),Ds&&(Ds=clearInterval(Ds))):(Ds||(yu=_a.now(),Ds=setInterval(MI,H_)),hs=1,G_(hg))}}function pg(t,e,n){var i=new xu;return e=e==null?0:+e,i.restart(r=>{i.stop(),t(r+e)},e,n),i}var EI=Ju("start","end","cancel","interrupt"),TI=[],X_=0,mg=1,Vf=2,Gl=3,gg=4,zf=5,Wl=6;function tc(t,e,n,i,r,o){var s=t.__transition;if(!s)t.__transition={};else if(n in s)return;CI(t,n,{name:e,index:i,group:r,on:EI,tween:TI,time:o.time,delay:o.delay,duration:o.duration,ease:o.ease,timer:null,state:X_})}function Hh(t,e){var n=ei(t,e);if(n.state>X_)throw new Error("too late; already scheduled");return n}function wi(t,e){var n=ei(t,e);if(n.state>Gl)throw new Error("too late; already running");return n}function ei(t,e){var n=t.__transition;if(!n||!(n=n[e]))throw new Error("transition not found");return n}function CI(t,e,n){var i=t.__transition,r;i[e]=n,n.timer=W_(o,0,n.time);function o(u){n.state=mg,n.timer.restart(s,n.delay,n.time),n.delay<=u&&s(u-n.delay)}function s(u){var c,f,d,h;if(n.state!==mg)return l();for(c in i)if(h=i[c],h.name===n.name){if(h.state===Gl)return pg(s);h.state===gg?(h.state=Wl,h.timer.stop(),h.on.call("interrupt",t,t.__data__,h.index,h.group),delete i[c]):+c<e&&(h.state=Wl,h.timer.stop(),h.on.call("cancel",t,t.__data__,h.index,h.group),delete i[c])}if(pg(function(){n.state===Gl&&(n.state=gg,n.timer.restart(a,n.delay,n.time),a(u))}),n.state=Vf,n.on.call("start",t,t.__data__,n.index,n.group),n.state===Vf){for(n.state=Gl,r=new Array(d=n.tween.length),c=0,f=-1;c<d;++c)(h=n.tween[c].value.call(t,t.__data__,n.index,n.group))&&(r[++f]=h);r.length=f+1}}function a(u){for(var c=u<n.duration?n.ease.call(null,u/n.duration):(n.timer.restart(l),n.state=zf,1),f=-1,d=r.length;++f<d;)r[f].call(t,c);n.state===zf&&(n.on.call("end",t,t.__data__,n.index,n.group),l())}function l(){n.state=Wl,n.timer.stop(),delete i[e];for(var u in i)return;delete t.__transition}}function Xl(t,e){var n=t.__transition,i,r,o=!0,s;if(n){e=e==null?null:e+"";for(s in n){if((i=n[s]).name!==e){o=!1;continue}r=i.state>Vf&&i.state<zf,i.state=Wl,i.timer.stop(),i.on.call(r?"interrupt":"cancel",t,t.__data__,i.index,i.group),delete n[s]}o&&delete t.__transition}}function AI(t){return this.each(function(){Xl(this,t)})}function RI(t,e){var n,i;return function(){var r=wi(this,t),o=r.tween;if(o!==n){i=n=o;for(var s=0,a=i.length;s<a;++s)if(i[s].name===e){i=i.slice(),i.splice(s,1);break}}r.tween=i}}function II(t,e,n){var i,r;if(typeof n!="function")throw new Error;return function(){var o=wi(this,t),s=o.tween;if(s!==i){r=(i=s).slice();for(var a={name:e,value:n},l=0,u=r.length;l<u;++l)if(r[l].name===e){r[l]=a;break}l===u&&r.push(a)}o.tween=r}}function PI(t,e){var n=this._id;if(t+="",arguments.length<2){for(var i=ei(this.node(),n).tween,r=0,o=i.length,s;r<o;++r)if((s=i[r]).name===t)return s.value;return null}return this.each((e==null?RI:II)(n,t,e))}function Gh(t,e,n){var i=t._id;return t.each(function(){var r=wi(this,i);(r.value||(r.value={}))[e]=n.apply(this,arguments)}),function(r){return ei(r,i).value[e]}}function Y_(t,e){var n;return(typeof e=="number"?di:e instanceof Mo?vu:(n=Mo(e))?(e=n,vu):V_)(t,e)}function NI(t){return function(){this.removeAttribute(t)}}function DI(t){return function(){this.removeAttributeNS(t.space,t.local)}}function LI(t,e,n){var i,r=n+"",o;return function(){var s=this.getAttribute(t);return s===r?null:s===i?o:o=e(i=s,n)}}function UI(t,e,n){var i,r=n+"",o;return function(){var s=this.getAttributeNS(t.space,t.local);return s===r?null:s===i?o:o=e(i=s,n)}}function FI(t,e,n){var i,r,o;return function(){var s,a=n(this),l;return a==null?void this.removeAttribute(t):(s=this.getAttribute(t),l=a+"",s===l?null:s===i&&l===r?o:(r=l,o=e(i=s,a)))}}function OI(t,e,n){var i,r,o;return function(){var s,a=n(this),l;return a==null?void this.removeAttributeNS(t.space,t.local):(s=this.getAttributeNS(t.space,t.local),l=a+"",s===l?null:s===i&&l===r?o:(r=l,o=e(i=s,a)))}}function BI(t,e){var n=Qu(t),i=n==="transform"?vI:Y_;return this.attrTween(t,typeof e=="function"?(n.local?OI:FI)(n,i,Gh(this,"attr."+t,e)):e==null?(n.local?DI:NI)(n):(n.local?UI:LI)(n,i,e))}function kI(t,e){return function(n){this.setAttribute(t,e.call(this,n))}}function VI(t,e){return function(n){this.setAttributeNS(t.space,t.local,e.call(this,n))}}function zI(t,e){var n,i;function r(){var o=e.apply(this,arguments);return o!==i&&(n=(i=o)&&VI(t,o)),n}return r._value=e,r}function $I(t,e){var n,i;function r(){var o=e.apply(this,arguments);return o!==i&&(n=(i=o)&&kI(t,o)),n}return r._value=e,r}function HI(t,e){var n="attr."+t;if(arguments.length<2)return(n=this.tween(n))&&n._value;if(e==null)return this.tween(n,null);if(typeof e!="function")throw new Error;var i=Qu(t);return this.tween(n,(i.local?zI:$I)(i,e))}function GI(t,e){return function(){Hh(this,t).delay=+e.apply(this,arguments)}}function WI(t,e){return e=+e,function(){Hh(this,t).delay=e}}function XI(t){var e=this._id;return arguments.length?this.each((typeof t=="function"?GI:WI)(e,t)):ei(this.node(),e).delay}function YI(t,e){return function(){wi(this,t).duration=+e.apply(this,arguments)}}function qI(t,e){return e=+e,function(){wi(this,t).duration=e}}function KI(t){var e=this._id;return arguments.length?this.each((typeof t=="function"?YI:qI)(e,t)):ei(this.node(),e).duration}function ZI(t,e){if(typeof e!="function")throw new Error;return function(){wi(this,t).ease=e}}function jI(t){var e=this._id;return arguments.length?this.each(ZI(e,t)):ei(this.node(),e).ease}function JI(t,e){return function(){var n=e.apply(this,arguments);if(typeof n!="function")throw new Error;wi(this,t).ease=n}}function QI(t){if(typeof t!="function")throw new Error;return this.each(JI(this._id,t))}function eP(t){typeof t!="function"&&(t=E_(t));for(var e=this._groups,n=e.length,i=new Array(n),r=0;r<n;++r)for(var o=e[r],s=o.length,a=i[r]=[],l,u=0;u<s;++u)(l=o[u])&&t.call(l,l.__data__,u,o)&&a.push(l);return new sr(i,this._parents,this._name,this._id)}function tP(t){if(t._id!==this._id)throw new Error;for(var e=this._groups,n=t._groups,i=e.length,r=n.length,o=Math.min(i,r),s=new Array(i),a=0;a<o;++a)for(var l=e[a],u=n[a],c=l.length,f=s[a]=new Array(c),d,h=0;h<c;++h)(d=l[h]||u[h])&&(f[h]=d);for(;a<i;++a)s[a]=e[a];return new sr(s,this._parents,this._name,this._id)}function nP(t){return(t+"").trim().split(/^|\s+/).every(function(e){var n=e.indexOf(".");return n>=0&&(e=e.slice(0,n)),!e||e==="start"})}function iP(t,e,n){var i,r,o=nP(e)?Hh:wi;return function(){var s=o(this,t),a=s.on;a!==i&&(r=(i=a).copy()).on(e,n),s.on=r}}function rP(t,e){var n=this._id;return arguments.length<2?ei(this.node(),n).on.on(t):this.each(iP(n,t,e))}function oP(t){return function(){var e=this.parentNode;for(var n in this.__transition)if(+n!==t)return;e&&e.removeChild(this)}}function sP(){return this.on("end.remove",oP(this._id))}function aP(t){var e=this._name,n=this._id;typeof t!="function"&&(t=Bh(t));for(var i=this._groups,r=i.length,o=new Array(r),s=0;s<r;++s)for(var a=i[s],l=a.length,u=o[s]=new Array(l),c,f,d=0;d<l;++d)(c=a[d])&&(f=t.call(c,c.__data__,d,a))&&("__data__"in c&&(f.__data__=c.__data__),u[d]=f,tc(u[d],e,n,d,u,ei(c,n)));return new sr(o,this._parents,e,n)}function lP(t){var e=this._name,n=this._id;typeof t!="function"&&(t=w_(t));for(var i=this._groups,r=i.length,o=[],s=[],a=0;a<r;++a)for(var l=i[a],u=l.length,c,f=0;f<u;++f)if(c=l[f]){for(var d=t.call(c,c.__data__,f,l),h,m=ei(c,n),v=0,g=d.length;v<g;++v)(h=d[v])&&tc(h,e,n,v,d,m);o.push(d),s.push(c)}return new sr(o,s,e,n)}var uP=Fa.prototype.constructor;function cP(){return new uP(this._groups,this._parents)}function dP(t,e){var n,i,r;return function(){var o=fs(this,t),s=(this.style.removeProperty(t),fs(this,t));return o===s?null:o===n&&s===i?r:r=e(n=o,i=s)}}function q_(t){return function(){this.style.removeProperty(t)}}function fP(t,e,n){var i,r=n+"",o;return function(){var s=fs(this,t);return s===r?null:s===i?o:o=e(i=s,n)}}function hP(t,e,n){var i,r,o;return function(){var s=fs(this,t),a=n(this),l=a+"";return a==null&&(l=a=(this.style.removeProperty(t),fs(this,t))),s===l?null:s===i&&l===r?o:(r=l,o=e(i=s,a))}}function pP(t,e){var n,i,r,o="style."+e,s="end."+o,a;return function(){var l=wi(this,t),u=l.on,c=l.value[o]==null?a||(a=q_(e)):void 0;(u!==n||r!==c)&&(i=(n=u).copy()).on(s,r=c),l.on=i}}function mP(t,e,n){var i=(t+="")=="transform"?gI:Y_;return e==null?this.styleTween(t,dP(t,i)).on("end.style."+t,q_(t)):typeof e=="function"?this.styleTween(t,hP(t,i,Gh(this,"style."+t,e))).each(pP(this._id,t)):this.styleTween(t,fP(t,i,e),n).on("end.style."+t,null)}function gP(t,e,n){return function(i){this.style.setProperty(t,e.call(this,i),n)}}function vP(t,e,n){var i,r;function o(){var s=e.apply(this,arguments);return s!==r&&(i=(r=s)&&gP(t,s,n)),i}return o._value=e,o}function _P(t,e,n){var i="style."+(t+="");if(arguments.length<2)return(i=this.tween(i))&&i._value;if(e==null)return this.tween(i,null);if(typeof e!="function")throw new Error;return this.tween(i,vP(t,e,n??""))}function yP(t){return function(){this.textContent=t}}function xP(t){return function(){var e=t(this);this.textContent=e??""}}function bP(t){return this.tween("text",typeof t=="function"?xP(Gh(this,"text",t)):yP(t==null?"":t+""))}function SP(t){return function(e){this.textContent=t.call(this,e)}}function MP(t){var e,n;function i(){var r=t.apply(this,arguments);return r!==n&&(e=(n=r)&&SP(r)),e}return i._value=t,i}function wP(t){var e="text";if(arguments.length<1)return(e=this.tween(e))&&e._value;if(t==null)return this.tween(e,null);if(typeof t!="function")throw new Error;return this.tween(e,MP(t))}function EP(){for(var t=this._name,e=this._id,n=K_(),i=this._groups,r=i.length,o=0;o<r;++o)for(var s=i[o],a=s.length,l,u=0;u<a;++u)if(l=s[u]){var c=ei(l,e);tc(l,t,n,u,s,{time:c.time+c.delay+c.duration,delay:0,duration:c.duration,ease:c.ease})}return new sr(i,this._parents,t,n)}function TP(){var t,e,n=this,i=n._id,r=n.size();return new Promise(function(o,s){var a={value:s},l={value:function(){--r===0&&o()}};n.each(function(){var u=wi(this,i),c=u.on;c!==t&&(e=(t=c).copy(),e._.cancel.push(a),e._.interrupt.push(a),e._.end.push(l)),u.on=e}),r===0&&o()})}var CP=0;function sr(t,e,n,i){this._groups=t,this._parents=e,this._name=n,this._id=i}function K_(){return++CP}var Ui=Fa.prototype;sr.prototype={constructor:sr,select:aP,selectAll:lP,selectChild:Ui.selectChild,selectChildren:Ui.selectChildren,filter:eP,merge:tP,selection:cP,transition:EP,call:Ui.call,nodes:Ui.nodes,node:Ui.node,size:Ui.size,empty:Ui.empty,each:Ui.each,on:rP,attr:BI,attrTween:HI,style:mP,styleTween:_P,text:bP,textTween:wP,remove:sP,tween:PI,delay:XI,duration:KI,ease:jI,easeVarying:QI,end:TP,[Symbol.iterator]:Ui[Symbol.iterator]};function AP(t){return((t*=2)<=1?t*t*t:(t-=2)*t*t+2)/2}var RP={time:null,delay:0,duration:250,ease:AP};function IP(t,e){for(var n;!(n=t.__transition)||!(n=n[e]);)if(!(t=t.parentNode))throw new Error(`transition ${e} not found`);return n}function PP(t){var e,n;t instanceof sr?(e=t._id,t=t._name):(e=K_(),(n=RP).time=$h(),t=t==null?null:t+"");for(var i=this._groups,r=i.length,o=0;o<r;++o)for(var s=i[o],a=s.length,l,u=0;u<a;++u)(l=s[u])&&tc(l,t,e,u,s,n||IP(l,e));return new sr(i,this._parents,t,e)}Fa.prototype.interrupt=AI;Fa.prototype.transition=PP;const xl=t=>()=>t;function NP(t,{sourceEvent:e,target:n,transform:i,dispatch:r}){Object.defineProperties(this,{type:{value:t,enumerable:!0,configurable:!0},sourceEvent:{value:e,enumerable:!0,configurable:!0},target:{value:n,enumerable:!0,configurable:!0},transform:{value:i,enumerable:!0,configurable:!0},_:{value:r}})}function Xi(t,e,n){this.k=t,this.x=e,this.y=n}Xi.prototype={constructor:Xi,scale:function(t){return t===1?this:new Xi(this.k*t,this.x,this.y)},translate:function(t,e){return t===0&e===0?this:new Xi(this.k,this.x+this.k*t,this.y+this.k*e)},apply:function(t){return[t[0]*this.k+this.x,t[1]*this.k+this.y]},applyX:function(t){return t*this.k+this.x},applyY:function(t){return t*this.k+this.y},invert:function(t){return[(t[0]-this.x)/this.k,(t[1]-this.y)/this.k]},invertX:function(t){return(t-this.x)/this.k},invertY:function(t){return(t-this.y)/this.k},rescaleX:function(t){return t.copy().domain(t.range().map(this.invertX,this).map(t.invert,t))},rescaleY:function(t){return t.copy().domain(t.range().map(this.invertY,this).map(t.invert,t))},toString:function(){return"translate("+this.x+","+this.y+") scale("+this.k+")"}};var ps=new Xi(1,0,0);Xi.prototype;function fd(t){t.stopImmediatePropagation()}function Ls(t){t.preventDefault(),t.stopImmediatePropagation()}function DP(t){return(!t.ctrlKey||t.type==="wheel")&&!t.button}function LP(){var t=this;return t instanceof SVGElement?(t=t.ownerSVGElement||t,t.hasAttribute("viewBox")?(t=t.viewBox.baseVal,[[t.x,t.y],[t.x+t.width,t.y+t.height]]):[[0,0],[t.width.baseVal.value,t.height.baseVal.value]]):[[0,0],[t.clientWidth,t.clientHeight]]}function vg(){return this.__zoom||ps}function UP(t){return-t.deltaY*(t.deltaMode===1?.05:t.deltaMode?1:.002)*(t.ctrlKey?10:1)}function FP(){return navigator.maxTouchPoints||"ontouchstart"in this}function OP(t,e,n){var i=t.invertX(e[0][0])-n[0][0],r=t.invertX(e[1][0])-n[1][0],o=t.invertY(e[0][1])-n[0][1],s=t.invertY(e[1][1])-n[1][1];return t.translate(r>i?(i+r)/2:Math.min(0,i)||Math.max(0,r),s>o?(o+s)/2:Math.min(0,o)||Math.max(0,s))}function BP(){var t=DP,e=LP,n=OP,i=UP,r=FP,o=[0,1/0],s=[[-1/0,-1/0],[1/0,1/0]],a=250,l=Hl,u=Ju("start","zoom","end"),c,f,d,h=500,m=150,v=0,g=10;function p(E){E.property("__zoom",vg).on("wheel.zoom",x,{passive:!1}).on("mousedown.zoom",b).on("dblclick.zoom",P).filter(r).on("touchstart.zoom",M).on("touchmove.zoom",w).on("touchend.zoom touchcancel.zoom",W).style("-webkit-tap-highlight-color","rgba(0,0,0,0)")}p.transform=function(E,k,A,I){var O=E.selection?E.selection():E;O.property("__zoom",vg),E!==O?R(E,k,A,I):O.interrupt().each(function(){N(this,arguments).event(I).start().zoom(null,typeof k=="function"?k.apply(this,arguments):k).end()})},p.scaleBy=function(E,k,A,I){p.scaleTo(E,function(){var O=this.__zoom.k,z=typeof k=="function"?k.apply(this,arguments):k;return O*z},A,I)},p.scaleTo=function(E,k,A,I){p.transform(E,function(){var O=e.apply(this,arguments),z=this.__zoom,q=A==null?_(O):typeof A=="function"?A.apply(this,arguments):A,te=z.invert(q),ne=typeof k=="function"?k.apply(this,arguments):k;return n(S(y(z,ne),q,te),O,s)},A,I)},p.translateBy=function(E,k,A,I){p.transform(E,function(){return n(this.__zoom.translate(typeof k=="function"?k.apply(this,arguments):k,typeof A=="function"?A.apply(this,arguments):A),e.apply(this,arguments),s)},null,I)},p.translateTo=function(E,k,A,I,O){p.transform(E,function(){var z=e.apply(this,arguments),q=this.__zoom,te=I==null?_(z):typeof I=="function"?I.apply(this,arguments):I;return n(ps.translate(te[0],te[1]).scale(q.k).translate(typeof k=="function"?-k.apply(this,arguments):-k,typeof A=="function"?-A.apply(this,arguments):-A),z,s)},I,O)};function y(E,k){return k=Math.max(o[0],Math.min(o[1],k)),k===E.k?E:new Xi(k,E.x,E.y)}function S(E,k,A){var I=k[0]-A[0]*E.k,O=k[1]-A[1]*E.k;return I===E.x&&O===E.y?E:new Xi(E.k,I,O)}function _(E){return[(+E[0][0]+ +E[1][0])/2,(+E[0][1]+ +E[1][1])/2]}function R(E,k,A,I){E.on("start.zoom",function(){N(this,arguments).event(I).start()}).on("interrupt.zoom end.zoom",function(){N(this,arguments).event(I).end()}).tween("zoom",function(){var O=this,z=arguments,q=N(O,z).event(I),te=e.apply(O,z),ne=A==null?_(te):typeof A=="function"?A.apply(O,z):A,ye=Math.max(te[1][0]-te[0][0],te[1][1]-te[0][1]),Pe=O.__zoom,Te=typeof k=="function"?k.apply(O,z):k,H=l(Pe.invert(ne).concat(ye/Pe.k),Te.invert(ne).concat(ye/Te.k));return function(B){if(B===1)B=Te;else{var X=H(B),ve=ye/X[2];B=new Xi(ve,ne[0]-X[0]*ve,ne[1]-X[1]*ve)}q.zoom(null,B)}})}function N(E,k,A){return!A&&E.__zooming||new F(E,k)}function F(E,k){this.that=E,this.args=k,this.active=0,this.sourceEvent=null,this.extent=e.apply(E,k),this.taps=0}F.prototype={event:function(E){return E&&(this.sourceEvent=E),this},start:function(){return++this.active===1&&(this.that.__zooming=this,this.emit("start")),this},zoom:function(E,k){return this.mouse&&E!=="mouse"&&(this.mouse[1]=k.invert(this.mouse[0])),this.touch0&&E!=="touch"&&(this.touch0[1]=k.invert(this.touch0[0])),this.touch1&&E!=="touch"&&(this.touch1[1]=k.invert(this.touch1[0])),this.that.__zoom=k,this.emit("zoom"),this},end:function(){return--this.active===0&&(delete this.that.__zooming,this.emit("end")),this},emit:function(E){var k=Xn(this.that).datum();u.call(E,this.that,new NP(E,{sourceEvent:this.sourceEvent,target:p,transform:this.that.__zoom,dispatch:u}),k)}};function x(E,...k){if(!t.apply(this,arguments))return;var A=N(this,k).event(E),I=this.__zoom,O=Math.max(o[0],Math.min(o[1],I.k*Math.pow(2,i.apply(this,arguments)))),z=li(E);if(A.wheel)(A.mouse[0][0]!==z[0]||A.mouse[0][1]!==z[1])&&(A.mouse[1]=I.invert(A.mouse[0]=z)),clearTimeout(A.wheel);else{if(I.k===O)return;A.mouse=[z,I.invert(z)],Xl(this),A.start()}Ls(E),A.wheel=setTimeout(q,m),A.zoom("mouse",n(S(y(I,O),A.mouse[0],A.mouse[1]),A.extent,s));function q(){A.wheel=null,A.end()}}function b(E,...k){if(d||!t.apply(this,arguments))return;var A=E.currentTarget,I=N(this,k,!0).event(E),O=Xn(E.view).on("mousemove.zoom",ne,!0).on("mouseup.zoom",ye,!0),z=li(E,A),q=E.clientX,te=E.clientY;U_(E.view),fd(E),I.mouse=[z,this.__zoom.invert(z)],Xl(this),I.start();function ne(Pe){if(Ls(Pe),!I.moved){var Te=Pe.clientX-q,H=Pe.clientY-te;I.moved=Te*Te+H*H>v}I.event(Pe).zoom("mouse",n(S(I.that.__zoom,I.mouse[0]=li(Pe,A),I.mouse[1]),I.extent,s))}function ye(Pe){O.on("mousemove.zoom mouseup.zoom",null),F_(Pe.view,I.moved),Ls(Pe),I.event(Pe).end()}}function P(E,...k){if(t.apply(this,arguments)){var A=this.__zoom,I=li(E.changedTouches?E.changedTouches[0]:E,this),O=A.invert(I),z=A.k*(E.shiftKey?.5:2),q=n(S(y(A,z),I,O),e.apply(this,k),s);Ls(E),a>0?Xn(this).transition().duration(a).call(R,q,I,E):Xn(this).call(p.transform,q,I,E)}}function M(E,...k){if(t.apply(this,arguments)){var A=E.touches,I=A.length,O=N(this,k,E.changedTouches.length===I).event(E),z,q,te,ne;for(fd(E),q=0;q<I;++q)te=A[q],ne=li(te,this),ne=[ne,this.__zoom.invert(ne),te.identifier],O.touch0?!O.touch1&&O.touch0[2]!==ne[2]&&(O.touch1=ne,O.taps=0):(O.touch0=ne,z=!0,O.taps=1+!!c);c&&(c=clearTimeout(c)),z&&(O.taps<2&&(f=ne[0],c=setTimeout(function(){c=null},h)),Xl(this),O.start())}}function w(E,...k){if(this.__zooming){var A=N(this,k).event(E),I=E.changedTouches,O=I.length,z,q,te,ne;for(Ls(E),z=0;z<O;++z)q=I[z],te=li(q,this),A.touch0&&A.touch0[2]===q.identifier?A.touch0[0]=te:A.touch1&&A.touch1[2]===q.identifier&&(A.touch1[0]=te);if(q=A.that.__zoom,A.touch1){var ye=A.touch0[0],Pe=A.touch0[1],Te=A.touch1[0],H=A.touch1[1],B=(B=Te[0]-ye[0])*B+(B=Te[1]-ye[1])*B,X=(X=H[0]-Pe[0])*X+(X=H[1]-Pe[1])*X;q=y(q,Math.sqrt(B/X)),te=[(ye[0]+Te[0])/2,(ye[1]+Te[1])/2],ne=[(Pe[0]+H[0])/2,(Pe[1]+H[1])/2]}else if(A.touch0)te=A.touch0[0],ne=A.touch0[1];else return;A.zoom("touch",n(S(q,te,ne),A.extent,s))}}function W(E,...k){if(this.__zooming){var A=N(this,k).event(E),I=E.changedTouches,O=I.length,z,q;for(fd(E),d&&clearTimeout(d),d=setTimeout(function(){d=null},h),z=0;z<O;++z)q=I[z],A.touch0&&A.touch0[2]===q.identifier?delete A.touch0:A.touch1&&A.touch1[2]===q.identifier&&delete A.touch1;if(A.touch1&&!A.touch0&&(A.touch0=A.touch1,delete A.touch1),A.touch0)A.touch0[1]=this.__zoom.invert(A.touch0[0]);else if(A.end(),A.taps===2&&(q=li(q,this),Math.hypot(f[0]-q[0],f[1]-q[1])<g)){var te=Xn(this).on("dblclick.zoom");te&&te.apply(this,arguments)}}}return p.wheelDelta=function(E){return arguments.length?(i=typeof E=="function"?E:xl(+E),p):i},p.filter=function(E){return arguments.length?(t=typeof E=="function"?E:xl(!!E),p):t},p.touchable=function(E){return arguments.length?(r=typeof E=="function"?E:xl(!!E),p):r},p.extent=function(E){return arguments.length?(e=typeof E=="function"?E:xl([[+E[0][0],+E[0][1]],[+E[1][0],+E[1][1]]]),p):e},p.scaleExtent=function(E){return arguments.length?(o[0]=+E[0],o[1]=+E[1],p):[o[0],o[1]]},p.translateExtent=function(E){return arguments.length?(s[0][0]=+E[0][0],s[1][0]=+E[1][0],s[0][1]=+E[0][1],s[1][1]=+E[1][1],p):[[s[0][0],s[0][1]],[s[1][0],s[1][1]]]},p.constrain=function(E){return arguments.length?(n=E,p):n},p.duration=function(E){return arguments.length?(a=+E,p):a},p.interpolate=function(E){return arguments.length?(l=E,p):l},p.on=function(){var E=u.on.apply(u,arguments);return E===u?p:E},p.clickDistance=function(E){return arguments.length?(v=(E=+E)*E,p):Math.sqrt(v)},p.tapDistance=function(E){return arguments.length?(g=+E,p):g},p}var qe=(t=>(t.Left="left",t.Top="top",t.Right="right",t.Bottom="bottom",t))(qe||{}),Wh=(t=>(t.Partial="partial",t.Full="full",t))(Wh||{}),ao=(t=>(t.Bezier="default",t.SimpleBezier="simple-bezier",t.Straight="straight",t.Step="step",t.SmoothStep="smoothstep",t))(ao||{}),zr=(t=>(t.Strict="strict",t.Loose="loose",t))(zr||{}),$f=(t=>(t.Arrow="arrow",t.ArrowClosed="arrowclosed",t))($f||{}),ta=(t=>(t.Free="free",t.Vertical="vertical",t.Horizontal="horizontal",t))(ta||{});const kP=["INPUT","SELECT","TEXTAREA"],VP=typeof document<"u"?document:null;function Hf(t){var e,n;const i=((n=(e=t.composedPath)==null?void 0:e.call(t))==null?void 0:n[0])||t.target,r=typeof i?.hasAttribute=="function"?i.hasAttribute("contenteditable"):!1,o=typeof i?.closest=="function"?i.closest(".nokey"):null;return kP.includes(i?.nodeName)||r||!!o}function zP(t){return t.ctrlKey||t.metaKey||t.shiftKey||t.altKey}function _g(t,e,n,i){const r=e.replace("+",`
`).replace(`

`,`
+`).split(`
`).map(s=>s.trim().toLowerCase());if(r.length===1)return t.toLowerCase()===e.toLowerCase();i||n.add(t.toLowerCase());const o=r.every((s,a)=>n.has(s)&&Array.from(n.values())[a]===r[a]);return i&&n.delete(t.toLowerCase()),o}function $P(t,e){return n=>{if(!n.code&&!n.key)return!1;const i=HP(n.code,t);return Array.isArray(t)?t.some(r=>_g(n[i],r,e,n.type==="keyup")):_g(n[i],t,e,n.type==="keyup")}}function HP(t,e){return e.includes(t)?"code":"key"}function na(t,e){const n=De(()=>ht(e?.target)??VP),i=Lr(ht(t)===!0);let r=!1;const o=new Set;let s=l(ht(t));at(()=>ht(t),(u,c)=>{typeof c=="boolean"&&typeof u!="boolean"&&a(),s=l(u)},{immediate:!0}),S_(["blur","contextmenu"],a),eg((...u)=>s(...u),u=>{var c,f;const d=ht(e?.actInsideInputWithModifier)??!0,h=ht(e?.preventDefault)??!1;if(r=zP(u),(!r||r&&!d)&&Hf(u))return;const v=((f=(c=u.composedPath)==null?void 0:c.call(u))==null?void 0:f[0])||u.target,g=v?.nodeName==="BUTTON"||v?.nodeName==="A";!h&&(r||!g)&&u.preventDefault(),i.value=!0},{eventName:"keydown",target:n}),eg((...u)=>s(...u),u=>{const c=ht(e?.actInsideInputWithModifier)??!0;if(i.value){if((!r||r&&!c)&&Hf(u))return;r=!1,i.value=!1}},{eventName:"keyup",target:n});function a(){r=!1,o.clear(),i.value=ht(t)===!0}function l(u){return u===null?(a(),()=>!1):typeof u=="boolean"?(a(),i.value=u,()=>!1):Array.isArray(u)||typeof u=="string"?$P(u,o):u}return i}const Z_="vue-flow__node-desc",j_="vue-flow__edge-desc",GP="vue-flow__aria-live",J_=["Enter"," ","Escape"],is={ArrowUp:{x:0,y:-1},ArrowDown:{x:0,y:1},ArrowLeft:{x:-1,y:0},ArrowRight:{x:1,y:0}};function bu(t){return{...t.computedPosition||{x:0,y:0},width:t.dimensions.width||0,height:t.dimensions.height||0}}function Su(t,e){const n=Math.max(0,Math.min(t.x+t.width,e.x+e.width)-Math.max(t.x,e.x)),i=Math.max(0,Math.min(t.y+t.height,e.y+e.height)-Math.max(t.y,e.y));return Math.ceil(n*i)}function nc(t){return{width:t.offsetWidth,height:t.offsetHeight}}function ar(t,e=0,n=1){return Math.min(Math.max(t,e),n)}function Q_(t,e){return{x:ar(t.x,e[0][0],e[1][0]),y:ar(t.y,e[0][1],e[1][1])}}function yg(t){const e=t.getRootNode();return"elementFromPoint"in e?e:window.document}function $r(t){return t&&typeof t=="object"&&"id"in t&&"source"in t&&"target"in t}function yo(t){return t&&typeof t=="object"&&"id"in t&&"position"in t&&!$r(t)}function $s(t){return yo(t)&&"computedPosition"in t}function bl(t){return!Number.isNaN(t)&&Number.isFinite(t)}function WP(t){return bl(t.width)&&bl(t.height)&&bl(t.x)&&bl(t.y)}function XP(t,e,n){const i={id:t.id.toString(),type:t.type??"default",dimensions:go({width:0,height:0}),computedPosition:go({z:0,...t.position}),handleBounds:{source:[],target:[]},draggable:void 0,selectable:void 0,connectable:void 0,focusable:void 0,selected:!1,dragging:!1,resizing:!1,initialized:!1,isParent:!1,position:{x:0,y:0},data:Ht(t.data)?t.data:{},events:go(Ht(t.events)?t.events:{})};return Object.assign(e??i,t,{id:t.id.toString(),parentNode:n})}function ey(t,e,n){var i,r;const o={id:t.id.toString(),type:t.type??e?.type??"default",source:t.source.toString(),target:t.target.toString(),sourceHandle:(i=t.sourceHandle)==null?void 0:i.toString(),targetHandle:(r=t.targetHandle)==null?void 0:r.toString(),updatable:t.updatable??n?.updatable,selectable:t.selectable??n?.selectable,focusable:t.focusable??n?.focusable,data:Ht(t.data)?t.data:{},events:go(Ht(t.events)?t.events:{}),label:t.label??"",interactionWidth:t.interactionWidth??n?.interactionWidth,...n??{}};return Object.assign(e??o,t,{id:t.id.toString()})}function ty(t,e,n,i){const r=typeof t=="string"?t:t.id,o=new Set,s=i==="source"?"target":"source";for(const a of n)a[s]===r&&o.add(a[i]);return e.filter(a=>o.has(a.id))}function YP(...t){if(t.length===3){const[o,s,a]=t;return ty(o,s,a,"target")}const[e,n]=t,i=typeof e=="string"?e:e.id;return n.filter(o=>$r(o)&&o.source===i).map(o=>n.find(s=>yo(s)&&s.id===o.target))}function qP(...t){if(t.length===3){const[o,s,a]=t;return ty(o,s,a,"source")}const[e,n]=t,i=typeof e=="string"?e:e.id;return n.filter(o=>$r(o)&&o.target===i).map(o=>n.find(s=>yo(s)&&s.id===o.source))}function ny({source:t,sourceHandle:e,target:n,targetHandle:i}){return`vueflow__edge-${t}${e??""}-${n}${i??""}`}function KP(t,e){return e.some(n=>$r(n)&&n.source===t.source&&n.target===t.target&&(n.sourceHandle===t.sourceHandle||!n.sourceHandle&&!t.sourceHandle)&&(n.targetHandle===t.targetHandle||!n.targetHandle&&!t.targetHandle))}function ya({x:t,y:e},{x:n,y:i,zoom:r}){return{x:t*r+n,y:e*r+i}}function xa({x:t,y:e},{x:n,y:i,zoom:r},o=!1,s=[1,1]){const a={x:(t-n)/r,y:(e-i)/r};return o?ic(a,s):a}function iy(t,e){return{x:Math.min(t.x,e.x),y:Math.min(t.y,e.y),x2:Math.max(t.x2,e.x2),y2:Math.max(t.y2,e.y2)}}function Mu({x:t,y:e,width:n,height:i}){return{x:t,y:e,x2:t+n,y2:e+i}}function ry({x:t,y:e,x2:n,y2:i}){return{x:t,y:e,width:n-t,height:i-e}}function ZP(t,e){return ry(iy(Mu(t),Mu(e)))}function Xh(t){let e={x:Number.POSITIVE_INFINITY,y:Number.POSITIVE_INFINITY,x2:Number.NEGATIVE_INFINITY,y2:Number.NEGATIVE_INFINITY};for(let n=0;n<t.length;n++){const i=t[n];e=iy(e,Mu({...i.computedPosition,...i.dimensions}))}return ry(e)}function oy(t,e,n={x:0,y:0,zoom:1},i=!1,r=!1){const o={...xa(e,n),width:e.width/n.zoom,height:e.height/n.zoom},s=[];for(const a of t){const{dimensions:l,selectable:u=!0,hidden:c=!1}=a,f=l.width??a.width??null,d=l.height??a.height??null;if(r&&!u||c)continue;const h=Su(o,bu(a)),m=f===null||d===null,v=i&&h>0,g=(f??0)*(d??0);(m||v||h>=g||a.dragging)&&s.push(a)}return s}function lo(t,e){const n=new Set;if(typeof t=="string")n.add(t);else if(t.length>=1)for(const i of t)n.add(i.id);return e.filter(i=>n.has(i.source)||n.has(i.target))}function Yo(t,e){if(typeof t=="number")return Math.floor((e-e/(1+t))*.5);if(typeof t=="string"&&t.endsWith("px")){const n=Number.parseFloat(t);if(!Number.isNaN(n))return Math.floor(n)}if(typeof t=="string"&&t.endsWith("%")){const n=Number.parseFloat(t);if(!Number.isNaN(n))return Math.floor(e*n*.01)}return Ba(`The padding value "${t}" is invalid. Please provide a number or a string with a valid unit (px or %).`),0}function jP(t,e,n){if(typeof t=="string"||typeof t=="number"){const i=Yo(t,n),r=Yo(t,e);return{top:i,right:r,bottom:i,left:r,x:r*2,y:i*2}}if(typeof t=="object"){const i=Yo(t.top??t.y??0,n),r=Yo(t.bottom??t.y??0,n),o=Yo(t.left??t.x??0,e),s=Yo(t.right??t.x??0,e);return{top:i,right:s,bottom:r,left:o,x:o+s,y:i+r}}return{top:0,right:0,bottom:0,left:0,x:0,y:0}}function JP(t,e,n,i,r,o){const{x:s,y:a}=ya(t,{x:e,y:n,zoom:i}),{x:l,y:u}=ya({x:t.x+t.width,y:t.y+t.height},{x:e,y:n,zoom:i}),c=r-l,f=o-u;return{left:Math.floor(s),top:Math.floor(a),right:Math.floor(c),bottom:Math.floor(f)}}function xg(t,e,n,i,r,o=.1){const s=jP(o,e,n),a=(e-s.x)/t.width,l=(n-s.y)/t.height,u=Math.min(a,l),c=ar(u,i,r),f=t.x+t.width/2,d=t.y+t.height/2,h=e/2-f*c,m=n/2-d*c,v=JP(t,h,m,c,e,n),g={left:Math.min(v.left-s.left,0),top:Math.min(v.top-s.top,0),right:Math.min(v.right-s.right,0),bottom:Math.min(v.bottom-s.bottom,0)};return{x:h-g.left+g.right,y:m-g.top+g.bottom,zoom:c}}function QP(t,e){return{x:e.x+t.x,y:e.y+t.y,z:(t.z>e.z?t.z:e.z)+1}}function sy(t,e){if(!t.parentNode)return!1;const n=e.get(t.parentNode);return n?n.selected?!0:sy(n,e):!1}function ba(t,e){return typeof t>"u"?"":typeof t=="string"?t:`${e?`${e}__`:""}${Object.keys(t).sort().map(i=>`${i}=${t[i]}`).join("&")}`}function Gf(t){const e=t.ctrlKey&&Sa()?10:1;return-t.deltaY*(t.deltaMode===1?.05:t.deltaMode?1:.002)*e}function bg(t,e,n){return t<e?ar(Math.abs(t-e),1,e)/e:t>n?-ar(Math.abs(t-n),1,e)/e:0}function ay(t,e,n=15,i=40){const r=bg(t.x,i,e.width-i)*n,o=bg(t.y,i,e.height-i)*n;return[r,o]}function hd(t,e){if(e){const n=t.position.x+t.dimensions.width-e.dimensions.width,i=t.position.y+t.dimensions.height-e.dimensions.height;if(n>0||i>0||t.position.x<0||t.position.y<0){let r={};if(typeof e.style=="function"?r={...e.style(e)}:e.style&&(r={...e.style}),r.width=r.width??`${e.dimensions.width}px`,r.height=r.height??`${e.dimensions.height}px`,n>0)if(typeof r.width=="string"){const o=Number(r.width.replace("px",""));r.width=`${o+n}px`}else r.width+=n;if(i>0)if(typeof r.height=="string"){const o=Number(r.height.replace("px",""));r.height=`${o+i}px`}else r.height+=i;if(t.position.x<0){const o=Math.abs(t.position.x);if(e.position.x=e.position.x-o,typeof r.width=="string"){const s=Number(r.width.replace("px",""));r.width=`${s+o}px`}else r.width+=o;t.position.x=0}if(t.position.y<0){const o=Math.abs(t.position.y);if(e.position.y=e.position.y-o,typeof r.height=="string"){const s=Number(r.height.replace("px",""));r.height=`${s+o}px`}else r.height+=o;t.position.y=0}e.dimensions.width=Number(r.width.toString().replace("px","")),e.dimensions.height=Number(r.height.toString().replace("px","")),typeof e.style=="function"?e.style=o=>{const s=e.style;return{...s(o),...r}}:e.style={...e.style,...r}}}}function Sg(t,e){var n,i;const r=t.filter(s=>s.type==="add"||s.type==="remove");for(const s of r)if(s.type==="add")e.findIndex(l=>l.id===s.item.id)===-1&&e.push(s.item);else if(s.type==="remove"){const a=e.findIndex(l=>l.id===s.id);a!==-1&&e.splice(a,1)}const o=e.map(s=>s.id);for(const s of e)for(const a of t)if(a.id===s.id)switch(a.type){case"select":s.selected=a.selected;break;case"position":if($s(s)&&(typeof a.position<"u"&&(s.position=a.position),typeof a.dragging<"u"&&(s.dragging=a.dragging),s.expandParent&&s.parentNode)){const l=e[o.indexOf(s.parentNode)];l&&$s(l)&&hd(s,l)}break;case"dimensions":if($s(s)&&(typeof a.dimensions<"u"&&(s.dimensions=a.dimensions),typeof a.updateStyle<"u"&&a.updateStyle&&(s.style={...s.style||{},width:`${(n=a.dimensions)==null?void 0:n.width}px`,height:`${(i=a.dimensions)==null?void 0:i.height}px`}),typeof a.resizing<"u"&&(s.resizing=a.resizing),s.expandParent&&s.parentNode)){const l=e[o.indexOf(s.parentNode)];l&&$s(l)&&(!!l.dimensions.width&&!!l.dimensions.height?hd(s,l):qt(()=>{hd(s,l)}))}break}return e}function Er(t,e){return{id:t,type:"select",selected:e}}function Mg(t){return{item:t,type:"add"}}function wg(t){return{id:t,type:"remove"}}function Eg(t,e,n,i,r){return{id:t,source:e,target:n,sourceHandle:i||null,targetHandle:r||null,type:"remove"}}function Rr(t,e=new Set,n=!1){const i=[];for(const[r,o]of t){const s=e.has(r);!(o.selected===void 0&&!s)&&o.selected!==s&&(n&&(o.selected=s),i.push(Er(o.id,s)))}return i}const Tg=()=>{};function Xe(t){const e=new Set;let n=Tg,i=()=>!1;const r=()=>e.size>0||i(),o=d=>{n=d},s=()=>{n=Tg},a=d=>{i=d},l=()=>{i=()=>!1},u=d=>{e.delete(d)};return{on:d=>{e.add(d);const h=()=>u(d);return pa(h),{off:h}},off:u,trigger:d=>{const h=[n];return r()?h.push(...e):t&&h.push(t),Promise.allSettled(h.map(m=>m(d)))},hasListeners:r,listeners:e,setEmitter:o,removeEmitter:s,setHasEmitListeners:a,removeHasEmitListeners:l}}function Cg(t,e,n){let i=t;do{if(i&&i.matches(e))return!0;if(i===n)return!1;i=i.parentElement}while(i);return!1}function e3(t,e,n,i){var r,o;const s=new Map;for(const[a,l]of t)(l.selected||l.id===i)&&(!l.parentNode||!sy(l,t))&&(l.draggable||e&&typeof l.draggable>"u")&&t.get(a)&&s.set(a,{id:l.id,position:l.position||{x:0,y:0},distance:{x:n.x-((r=l.computedPosition)==null?void 0:r.x)||0,y:n.y-((o=l.computedPosition)==null?void 0:o.y)||0},from:{x:l.computedPosition.x,y:l.computedPosition.y},extent:l.extent,parentNode:l.parentNode,dimensions:{...l.dimensions},expandParent:l.expandParent});return Array.from(s.values())}function pd({id:t,dragItems:e,findNode:n}){const i=[];for(const r of e){const o=n(r.id);o&&i.push(o)}return[t?i.find(r=>r.id===t):i[0],i]}function ly(t){if(Array.isArray(t))switch(t.length){case 1:return[t[0],t[0],t[0],t[0]];case 2:return[t[0],t[1],t[0],t[1]];case 3:return[t[0],t[1],t[2],t[1]];case 4:return t;default:return[0,0,0,0]}return[t,t,t,t]}function t3(t,e,n){const[i,r,o,s]=typeof t!="string"?ly(t.padding):[0,0,0,0];return n&&typeof n.computedPosition.x<"u"&&typeof n.computedPosition.y<"u"&&typeof n.dimensions.width<"u"&&typeof n.dimensions.height<"u"?[[n.computedPosition.x+s,n.computedPosition.y+i],[n.computedPosition.x+n.dimensions.width-r,n.computedPosition.y+n.dimensions.height-o]]:!1}function n3(t,e,n,i){let r=t.extent||n;if((r==="parent"||!Array.isArray(r)&&r?.range==="parent")&&!t.expandParent)if(t.parentNode&&i&&t.dimensions.width&&t.dimensions.height){const o=t3(r,t,i);o&&(r=o)}else e(new Yt(Wt.NODE_EXTENT_INVALID,t.id)),r=n;else if(Array.isArray(r)){const o=i?.computedPosition.x||0,s=i?.computedPosition.y||0;r=[[r[0][0]+o,r[0][1]+s],[r[1][0]+o,r[1][1]+s]]}else if(r!=="parent"&&r?.range&&Array.isArray(r.range)){const[o,s,a,l]=ly(r.padding),u=i?.computedPosition.x||0,c=i?.computedPosition.y||0;r=[[r.range[0][0]+u+l,r.range[0][1]+c+o],[r.range[1][0]+u-s,r.range[1][1]+c-a]]}return r==="parent"?[[Number.NEGATIVE_INFINITY,Number.NEGATIVE_INFINITY],[Number.POSITIVE_INFINITY,Number.POSITIVE_INFINITY]]:r}function i3({width:t,height:e},n){return[n[0],[n[1][0]-(t||0),n[1][1]-(e||0)]]}function Yh(t,e,n,i,r){const o=i3(t.dimensions,n3(t,n,i,r)),s=Q_(e,o);return{position:{x:s.x-(r?.computedPosition.x||0),y:s.y-(r?.computedPosition.y||0)},computedPosition:s}}function ms(t,e,n=qe.Left,i=!1){const r=(e?.x??0)+t.computedPosition.x,o=(e?.y??0)+t.computedPosition.y,{width:s,height:a}=e??a3(t);if(i)return{x:r+s/2,y:o+a/2};switch(e?.position??n){case qe.Top:return{x:r+s/2,y:o};case qe.Right:return{x:r+s,y:o+a/2};case qe.Bottom:return{x:r+s/2,y:o+a};case qe.Left:return{x:r,y:o+a/2}}}function Ag(t,e){return t&&(e?t.find(n=>n.id===e):t[0])||null}function r3({sourcePos:t,targetPos:e,sourceWidth:n,sourceHeight:i,targetWidth:r,targetHeight:o,width:s,height:a,viewport:l}){const u={x:Math.min(t.x,e.x),y:Math.min(t.y,e.y),x2:Math.max(t.x+n,e.x+r),y2:Math.max(t.y+i,e.y+o)};u.x===u.x2&&(u.x2+=1),u.y===u.y2&&(u.y2+=1);const c=Mu({x:(0-l.x)/l.zoom,y:(0-l.y)/l.zoom,width:s/l.zoom,height:a/l.zoom}),f=Math.max(0,Math.min(c.x2,u.x2)-Math.max(c.x,u.x)),d=Math.max(0,Math.min(c.y2,u.y2)-Math.max(c.y,u.y));return Math.ceil(f*d)>0}function o3(t,e,n=!1){const i=typeof t.zIndex=="number";let r=i?t.zIndex:0;const o=e(t.source),s=e(t.target);return!o||!s?0:(n&&(r=i?t.zIndex:Math.max(o.computedPosition.z||0,s.computedPosition.z||0)),r)}var Wt=(t=>(t.MISSING_STYLES="MISSING_STYLES",t.MISSING_VIEWPORT_DIMENSIONS="MISSING_VIEWPORT_DIMENSIONS",t.NODE_INVALID="NODE_INVALID",t.NODE_NOT_FOUND="NODE_NOT_FOUND",t.NODE_MISSING_PARENT="NODE_MISSING_PARENT",t.NODE_TYPE_MISSING="NODE_TYPE_MISSING",t.NODE_EXTENT_INVALID="NODE_EXTENT_INVALID",t.EDGE_INVALID="EDGE_INVALID",t.EDGE_NOT_FOUND="EDGE_NOT_FOUND",t.EDGE_SOURCE_MISSING="EDGE_SOURCE_MISSING",t.EDGE_TARGET_MISSING="EDGE_TARGET_MISSING",t.EDGE_TYPE_MISSING="EDGE_TYPE_MISSING",t.EDGE_SOURCE_TARGET_SAME="EDGE_SOURCE_TARGET_SAME",t.EDGE_SOURCE_TARGET_MISSING="EDGE_SOURCE_TARGET_MISSING",t.EDGE_ORPHANED="EDGE_ORPHANED",t.USEVUEFLOW_OPTIONS="USEVUEFLOW_OPTIONS",t))(Wt||{});const Rg={MISSING_STYLES:()=>"It seems that you haven't loaded the necessary styles. Please import '@vue-flow/core/dist/style.css' to ensure that the graph is rendered correctly",MISSING_VIEWPORT_DIMENSIONS:()=>"The Vue Flow parent container needs a width and a height to render the graph",NODE_INVALID:t=>`Node is invalid
Node: ${t}`,NODE_NOT_FOUND:t=>`Node not found
Node: ${t}`,NODE_MISSING_PARENT:(t,e)=>`Node is missing a parent
Node: ${t}
Parent: ${e}`,NODE_TYPE_MISSING:t=>`Node type is missing
Type: ${t}`,NODE_EXTENT_INVALID:t=>`Only child nodes can use a parent extent
Node: ${t}`,EDGE_INVALID:t=>`An edge needs a source and a target
Edge: ${t}`,EDGE_SOURCE_MISSING:(t,e)=>`Edge source is missing
Edge: ${t} 
Source: ${e}`,EDGE_TARGET_MISSING:(t,e)=>`Edge target is missing
Edge: ${t} 
Target: ${e}`,EDGE_TYPE_MISSING:t=>`Edge type is missing
Type: ${t}`,EDGE_SOURCE_TARGET_SAME:(t,e,n)=>`Edge source and target are the same
Edge: ${t} 
Source: ${e} 
Target: ${n}`,EDGE_SOURCE_TARGET_MISSING:(t,e,n)=>`Edge source or target is missing
Edge: ${t} 
Source: ${e} 
Target: ${n}`,EDGE_ORPHANED:t=>`Edge was orphaned (suddenly missing source or target) and has been removed
Edge: ${t}`,EDGE_NOT_FOUND:t=>`Edge not found
Edge: ${t}`,USEVUEFLOW_OPTIONS:()=>"The options parameter is deprecated and will be removed in the next major version. Please use the id parameter instead"};class Yt extends Error{constructor(e,...n){var i;super((i=Rg[e])==null?void 0:i.call(Rg,...n)),this.name="VueFlowError",this.code=e,this.args=n}}function qh(t){return"clientX"in t}function s3(t){return"sourceEvent"in t}function fi(t,e){const n=qh(t);let i,r;return n?(i=t.clientX,r=t.clientY):"touches"in t&&t.touches.length>0?(i=t.touches[0].clientX,r=t.touches[0].clientY):"changedTouches"in t&&t.changedTouches.length>0?(i=t.changedTouches[0].clientX,r=t.changedTouches[0].clientY):(i=0,r=0),{x:i-(e?.left??0),y:r-(e?.top??0)}}const Sa=()=>{var t;return typeof navigator<"u"&&((t=navigator?.userAgent)==null?void 0:t.indexOf("Mac"))>=0};function a3(t){var e,n;return{width:((e=t.dimensions)==null?void 0:e.width)??t.width??0,height:((n=t.dimensions)==null?void 0:n.height)??t.height??0}}function ic(t,e=[1,1]){return{x:e[0]*Math.round(t.x/e[0]),y:e[1]*Math.round(t.y/e[1])}}const l3=()=>!0;function md(t){t?.classList.remove("valid","connecting","vue-flow__handle-valid","vue-flow__handle-connecting")}function u3(t,e,n){const i=[],r={x:t.x-n,y:t.y-n,width:n*2,height:n*2};for(const o of e.values())Su(r,bu(o))>0&&i.push(o);return i}const c3=250;function d3(t,e,n,i){var r,o;let s=[],a=Number.POSITIVE_INFINITY;const l=u3(t,n,e+c3);for(const u of l){const c=[...((r=u.handleBounds)==null?void 0:r.source)??[],...((o=u.handleBounds)==null?void 0:o.target)??[]];for(const f of c){if(i.nodeId===f.nodeId&&i.type===f.type&&i.id===f.id)continue;const{x:d,y:h}=ms(u,f,f.position,!0),m=Math.sqrt((d-t.x)**2+(h-t.y)**2);m>e||(m<a?(s=[{...f,x:d,y:h}],a=m):m===a&&s.push({...f,x:d,y:h}))}}if(!s.length)return null;if(s.length>1){const u=i.type==="source"?"target":"source";return s.find(c=>c.type===u)??s[0]}return s[0]}function Ig(t,{handle:e,connectionMode:n,fromNodeId:i,fromHandleId:r,fromType:o,doc:s,lib:a,flowId:l,isValidConnection:u=l3},c,f,d,h){const m=o==="target",v=e?s.querySelector(`.${a}-flow__handle[data-id="${l}-${e?.nodeId}-${e?.id}-${e?.type}"]`):null,{x:g,y:p}=fi(t),y=s.elementFromPoint(g,p),S=y?.classList.contains(`${a}-flow__handle`)?y:v,_={handleDomNode:S,isValid:!1,connection:null,toHandle:null};if(S){const R=uy(void 0,S),N=S.getAttribute("data-nodeid"),F=S.getAttribute("data-handleid"),x=S.classList.contains("connectable"),b=S.classList.contains("connectableend");if(!N||!R)return _;const P={source:m?N:i,sourceHandle:m?F:r,target:m?i:N,targetHandle:m?r:F};_.connection=P;const w=x&&b&&(n===zr.Strict?m&&R==="source"||!m&&R==="target":N!==i||F!==r);_.isValid=w&&u(P,{nodes:f,edges:c,sourceNode:d(P.source),targetNode:d(P.target)}),_.toHandle=cy(N,R,F,h,n,!0)}return _}function uy(t,e){return t||(e?.classList.contains("target")?"target":e?.classList.contains("source")?"source":null)}function f3(t,e){let n=null;return e?n="valid":t&&!e&&(n="invalid"),n}function h3(t,e){let n=null;return e?n=!0:t&&!e&&(n=!1),n}function cy(t,e,n,i,r,o=!1){var s,a,l;const u=i.get(t);if(!u)return null;const c=r===zr.Strict?(s=u.handleBounds)==null?void 0:s[e]:[...((a=u.handleBounds)==null?void 0:a.source)??[],...((l=u.handleBounds)==null?void 0:l.target)??[]],f=(n?c?.find(d=>d.id===n):c?.[0])??null;return f&&o?{...f,...ms(u,f,f.position,!0)}:f}const Wf={[qe.Left]:qe.Right,[qe.Right]:qe.Left,[qe.Top]:qe.Bottom,[qe.Bottom]:qe.Top},p3=["production","prod"];function Ba(t,...e){dy()&&console.warn(`[Vue Flow]: ${t}`,...e)}function dy(){return!p3.includes("production")}function Pg(t,e,n,i,r){const o=e.querySelectorAll(`.vue-flow__handle.${t}`);return o?.length?Array.from(o).map(s=>{const a=s.getBoundingClientRect();return{id:s.getAttribute("data-handleid"),type:t,nodeId:r,position:s.getAttribute("data-handlepos"),x:(a.left-n.left)/i,y:(a.top-n.top)/i,...nc(s)}}):null}function Xf(t,e,n,i,r,o=!1,s){r.value=!1,t.selected?(o||t.selected&&e)&&(i([t]),qt(()=>{s.blur()})):n([t])}function Ht(t){return typeof fe(t)<"u"}function m3(t,e,n,i){if(!t||!t.source||!t.target)return n(new Yt(Wt.EDGE_INVALID,t?.id??"[ID UNKNOWN]")),!1;let r;return $r(t)?r=t:r={...t,id:ny(t)},r=ey(r,void 0,i),KP(r,e)?!1:r}function g3(t,e,n,i,r){if(!e.source||!e.target)return r(new Yt(Wt.EDGE_INVALID,t.id)),!1;if(!n)return r(new Yt(Wt.EDGE_NOT_FOUND,t.id)),!1;const{id:o,...s}=t;return{...s,id:i?ny(e):o,source:e.source,target:e.target,sourceHandle:e.sourceHandle,targetHandle:e.targetHandle}}function Ng(t,e,n){const i={},r=[];for(let o=0;o<t.length;++o){const s=t[o];if(!yo(s)){n(new Yt(Wt.NODE_INVALID,s?.id)||`[ID UNKNOWN|INDEX ${o}]`);continue}const a=XP(s,e(s.id),s.parentNode);s.parentNode&&(i[s.parentNode]=!0),r[o]=a}for(const o of r){const s=e(o.parentNode)||r.find(a=>a.id===o.parentNode);o.parentNode&&!s&&n(new Yt(Wt.NODE_MISSING_PARENT,o.id,o.parentNode)),(o.parentNode||i[o.id])&&(i[o.id]&&(o.isParent=!0),s&&(s.isParent=!0))}return r}function Dg(t,e,n,i,r,o){let s=r;const a=i.get(s)||new Map;i.set(s,a.set(n,e)),s=`${r}-${t}`;const l=i.get(s)||new Map;if(i.set(s,l.set(n,e)),o){s=`${r}-${t}-${o}`;const u=i.get(s)||new Map;i.set(s,u.set(n,e))}}function gd(t,e,n){t.clear();for(const i of n){const{source:r,target:o,sourceHandle:s=null,targetHandle:a=null}=i,l={edgeId:i.id,source:r,target:o,sourceHandle:s,targetHandle:a},u=`${r}-${s}--${o}-${a}`,c=`${o}-${a}--${r}-${s}`;Dg("source",l,c,t,r,s),Dg("target",l,u,t,o,a)}}function Lg(t,e){if(t.size!==e.size)return!1;for(const n of t)if(!e.has(n))return!1;return!0}function vd(t,e,n,i,r,o,s,a){const l=[];for(const u of t){const c=$r(u)?u:m3(u,a,r,o);if(!c)continue;const f=n(c.source),d=n(c.target);if(!f||!d){r(new Yt(Wt.EDGE_SOURCE_TARGET_MISSING,c.id,c.source,c.target));continue}if(!f){r(new Yt(Wt.EDGE_SOURCE_MISSING,c.id,c.source));continue}if(!d){r(new Yt(Wt.EDGE_TARGET_MISSING,c.id,c.target));continue}if(e&&!e(c,{edges:a,nodes:s,sourceNode:f,targetNode:d})){r(new Yt(Wt.EDGE_INVALID,c.id));continue}const h=i(c.id);l.push({...ey(c,h,o),sourceNode:f,targetNode:d})}return l}const Ug=Symbol("vueFlow"),Kh=Symbol("nodeId"),fy=Symbol("nodeRef"),v3=Symbol("edgeId"),_3=Symbol("edgeRef"),rc=Symbol("slots");function hy(t){const{vueFlowRef:e,snapToGrid:n,snapGrid:i,noDragClassName:r,nodeLookup:o,nodeExtent:s,nodeDragThreshold:a,viewport:l,autoPanOnNodeDrag:u,autoPanSpeed:c,nodesDraggable:f,panBy:d,findNode:h,multiSelectionActive:m,nodesSelectionActive:v,selectNodesOnDrag:g,removeSelectedElements:p,addSelectedNodes:y,updateNodePositions:S,emits:_}=Dt(),{onStart:R,onDrag:N,onStop:F,onClick:x,el:b,disabled:P,id:M,selectable:w,dragHandle:W}=t,E=Lr(!1);let k=[],A,I=null,O={x:void 0,y:void 0},z={x:0,y:0},q=null,te=!1,ne=!1,ye=0,Pe=!1;const Te=py(),H=({x:G,y:Y})=>{O={x:G,y:Y};let L=!1;if(k=k.map(U=>{const V={x:G-U.distance.x,y:Y-U.distance.y},{computedPosition:Z}=Yh(U,n.value?ic(V,i.value):V,_.error,s.value,U.parentNode?h(U.parentNode):void 0);return L=L||U.position.x!==Z.x||U.position.y!==Z.y,U.position=Z,U}),ne=ne||L,!!L&&(S(k,!0,!0),E.value=!0,q)){const[U,V]=pd({id:M,dragItems:k,findNode:h});N({event:q,node:U,nodes:V})}},B=()=>{if(!I)return;const[G,Y]=ay(z,I,c.value);if(G!==0||Y!==0){const L={x:(O.x??0)-G/l.value.zoom,y:(O.y??0)-Y/l.value.zoom};d({x:G,y:Y})&&H(L)}ye=requestAnimationFrame(B)},X=(G,Y)=>{te=!0;const L=h(M);!g.value&&!m.value&&L&&(L.selected||p()),L&&ht(w)&&g.value&&Xf(L,m.value,y,p,v,!1,Y);const U=Te(G.sourceEvent);if(O=U,k=e3(o.value,f.value,U,M),k.length){const[V,Z]=pd({id:M,dragItems:k,findNode:h});R({event:G.sourceEvent,node:V,nodes:Z})}},ve=(G,Y)=>{var L;G.sourceEvent.type==="touchmove"&&G.sourceEvent.touches.length>1||(ne=!1,a.value===0&&X(G,Y),O=Te(G.sourceEvent),I=((L=e.value)==null?void 0:L.getBoundingClientRect())||null,z=fi(G.sourceEvent,I))},we=(G,Y)=>{const L=Te(G.sourceEvent);if(!Pe&&te&&u.value&&(Pe=!0,B()),!te){const U=L.xSnapped-(O.x??0),V=L.ySnapped-(O.y??0);Math.sqrt(U*U+V*V)>a.value&&X(G,Y)}(O.x!==L.xSnapped||O.y!==L.ySnapped)&&k.length&&te&&(q=G.sourceEvent,z=fi(G.sourceEvent,I),H(L))},Ae=G=>{let Y=!1;if(!te&&!E.value&&!m.value){const L=G.sourceEvent,U=Te(L),V=U.xSnapped-(O.x??0),Z=U.ySnapped-(O.y??0),C=Math.sqrt(V*V+Z*Z);C!==0&&C<=a.value&&(x?.(L),Y=!0)}if(k.length&&!Y){ne&&(S(k,!1,!1),ne=!1);const[L,U]=pd({id:M,dragItems:k,findNode:h});F({event:G.sourceEvent,node:L,nodes:U})}k=[],E.value=!1,Pe=!1,te=!1,O={x:void 0,y:void 0},cancelAnimationFrame(ye)};return at([()=>ht(P),b],([G,Y],L,U)=>{if(Y){const V=Xn(Y);G||(A=WR().on("start",Z=>ve(Z,Y)).on("drag",Z=>we(Z,Y)).on("end",Z=>Ae(Z)).filter(Z=>{const C=Z.target,se=ht(W);return!Z.button&&(!r.value||!Cg(C,`.${r.value}`,Y)&&(!se||Cg(C,se,Y)))}),V.call(A)),U(()=>{V.on(".drag",null),A&&(A.on("start",null),A.on("drag",null),A.on("end",null))})}}),E}function y3(){return{doubleClick:Xe(),click:Xe(),mouseEnter:Xe(),mouseMove:Xe(),mouseLeave:Xe(),contextMenu:Xe(),updateStart:Xe(),update:Xe(),updateEnd:Xe()}}function x3(t,e){const n=y3();return n.doubleClick.on(i=>{var r,o;e.edgeDoubleClick(i),(o=(r=t.events)==null?void 0:r.doubleClick)==null||o.call(r,i)}),n.click.on(i=>{var r,o;e.edgeClick(i),(o=(r=t.events)==null?void 0:r.click)==null||o.call(r,i)}),n.mouseEnter.on(i=>{var r,o;e.edgeMouseEnter(i),(o=(r=t.events)==null?void 0:r.mouseEnter)==null||o.call(r,i)}),n.mouseMove.on(i=>{var r,o;e.edgeMouseMove(i),(o=(r=t.events)==null?void 0:r.mouseMove)==null||o.call(r,i)}),n.mouseLeave.on(i=>{var r,o;e.edgeMouseLeave(i),(o=(r=t.events)==null?void 0:r.mouseLeave)==null||o.call(r,i)}),n.contextMenu.on(i=>{var r,o;e.edgeContextMenu(i),(o=(r=t.events)==null?void 0:r.contextMenu)==null||o.call(r,i)}),n.updateStart.on(i=>{var r,o;e.edgeUpdateStart(i),(o=(r=t.events)==null?void 0:r.updateStart)==null||o.call(r,i)}),n.update.on(i=>{var r,o;e.edgeUpdate(i),(o=(r=t.events)==null?void 0:r.update)==null||o.call(r,i)}),n.updateEnd.on(i=>{var r,o;e.edgeUpdateEnd(i),(o=(r=t.events)==null?void 0:r.updateEnd)==null||o.call(r,i)}),Object.entries(n).reduce((i,[r,o])=>(i.emit[r]=o.trigger,i.on[r]=o.on,i),{emit:{},on:{}})}function py(){const{viewport:t,snapGrid:e,snapToGrid:n,vueFlowRef:i}=Dt();return r=>{var o;const s=((o=i.value)==null?void 0:o.getBoundingClientRect())??{left:0,top:0},a=s3(r)?r.sourceEvent:r,{x:l,y:u}=fi(a,s),c=xa({x:l,y:u},t.value),{x:f,y:d}=n.value?ic(c,e.value):c;return{xSnapped:f,ySnapped:d,...c}}}function Sl(){return!0}function my({handleId:t,nodeId:e,type:n,isValidConnection:i,edgeUpdaterType:r,onEdgeUpdate:o,onEdgeUpdateEnd:s}){const{id:a,vueFlowRef:l,connectionMode:u,connectionRadius:c,connectOnClick:f,connectionClickStartHandle:d,nodesConnectable:h,autoPanOnConnect:m,autoPanSpeed:v,findNode:g,panBy:p,startConnection:y,updateConnection:S,endConnection:_,emits:R,viewport:N,edges:F,nodes:x,isValidConnection:b,nodeLookup:P}=Dt();let M=null,w=!1,W=null;function E(A){var I;const O=ht(n)==="target",z=qh(A),q=yg(A.target),te=A.currentTarget;if(te&&(z&&A.button===0||!z)){let ne=function(ue){L=fi(ue,Ae),H=d3(xa(L,N.value,!1,[1,1]),c.value,P.value,Z),U||(V(),U=!0);const D=Ig(ue,{handle:H,connectionMode:u.value,fromNodeId:ht(e),fromHandleId:ht(t),fromType:O?"target":"source",isValidConnection:Te,doc:q,lib:"vue",flowId:a,nodeLookup:P.value},F.value,x.value,g,P.value);W=D.handleDomNode,M=D.connection,w=h3(!!H,D.isValid);const T={...oe,isValid:w,to:D.toHandle&&w?ya({x:D.toHandle.x,y:D.toHandle.y},N.value):L,toHandle:D.toHandle,toPosition:w&&D.toHandle?D.toHandle.position:Wf[Z.position],toNode:D.toHandle?P.value.get(D.toHandle.nodeId):null};if(w&&H&&oe?.toHandle&&T.toHandle&&oe.toHandle.type===T.toHandle.type&&oe.toHandle.nodeId===T.toHandle.nodeId&&oe.toHandle.id===T.toHandle.id&&oe.to.x===T.to.x&&oe.to.y===T.to.y)return;const j=H??D.toHandle;if(S(j&&w?ya({x:j.x,y:j.y},N.value):L,j,f3(!!j,w)),oe=T,!H&&!w&&!W)return md(Y);M&&M.source!==M.target&&W&&(md(Y),Y=W,W.classList.add("connecting","vue-flow__handle-connecting"),W.classList.toggle("valid",!!w),W.classList.toggle("vue-flow__handle-valid",!!w))},ye=function(ue){"touches"in ue&&ue.touches.length>0||((H||W)&&M&&w&&(o?o(ue,M):R.connect(M)),R.connectEnd(ue),r&&s?.(ue),md(Y),cancelAnimationFrame(B),_(ue),U=!1,w=!1,M=null,W=null,q.removeEventListener("mousemove",ne),q.removeEventListener("mouseup",ye),q.removeEventListener("touchmove",ne),q.removeEventListener("touchend",ye))};const Pe=g(ht(e));let Te=ht(i)||b.value||Sl;!Te&&Pe&&(Te=(O?Pe.isValidSourcePos:Pe.isValidTargetPos)||Sl);let H,B=0;const{x:X,y:ve}=fi(A),we=uy(ht(r),te),Ae=(I=l.value)==null?void 0:I.getBoundingClientRect();if(!Ae||!we)return;const G=cy(ht(e),we,ht(t),P.value,u.value);if(!G)return;let Y,L=fi(A,Ae),U=!1;const V=()=>{if(!m.value)return;const[ue,D]=ay(L,Ae,v.value);p({x:ue,y:D}),B=requestAnimationFrame(V)},Z={...G,nodeId:ht(e),type:we,position:G.position},C=P.value.get(ht(e)),re={inProgress:!0,isValid:null,from:ms(C,Z,qe.Left,!0),fromHandle:Z,fromPosition:Z.position,fromNode:C,to:L,toHandle:null,toPosition:Wf[Z.position],toNode:null};y({nodeId:ht(e),id:ht(t),type:we,position:te?.getAttribute("data-handlepos")||qe.Top,...L},{x:X-Ae.left,y:ve-Ae.top}),R.connectStart({event:A,nodeId:ht(e),handleId:ht(t),handleType:we});let oe=re;q.addEventListener("mousemove",ne),q.addEventListener("mouseup",ye),q.addEventListener("touchmove",ne),q.addEventListener("touchend",ye)}}function k(A){var I,O;if(!f.value)return;const z=ht(n)==="target";if(!d.value){R.clickConnectStart({event:A,nodeId:ht(e),handleId:ht(t)}),y({nodeId:ht(e),type:ht(n),id:ht(t),position:qe.Top,...fi(A)},void 0,!0);return}let q=ht(i)||b.value||Sl;const te=g(ht(e));if(!q&&te&&(q=(z?te.isValidSourcePos:te.isValidTargetPos)||Sl),te&&(typeof te.connectable>"u"?h.value:te.connectable)===!1)return;const ne=yg(A.target),ye=Ig(A,{handle:{nodeId:ht(e),id:ht(t),type:ht(n),position:qe.Top,...fi(A)},connectionMode:u.value,fromNodeId:d.value.nodeId,fromHandleId:d.value.id??null,fromType:d.value.type,isValidConnection:q,doc:ne,lib:"vue",flowId:a,nodeLookup:P.value},F.value,x.value,g,P.value),Pe=((I=ye.connection)==null?void 0:I.source)===((O=ye.connection)==null?void 0:O.target);ye.isValid&&ye.connection&&!Pe&&R.connect(ye.connection),R.clickConnectEnd(A),_(A,!0)}return{handlePointerDown:E,handleClick:k}}function b3(){return Pn(Kh,"")}function gy(t){const e=t??b3()??"",n=Pn(fy,Ne(null)),{findNode:i,edges:r,emits:o}=Dt(),s=i(e);return s||o.error(new Yt(Wt.NODE_NOT_FOUND,e)),{id:e,nodeEl:n,node:s,parentNode:De(()=>i(s.parentNode)),connectedEdges:De(()=>lo([s],r.value))}}function S3(){return{doubleClick:Xe(),click:Xe(),mouseEnter:Xe(),mouseMove:Xe(),mouseLeave:Xe(),contextMenu:Xe(),dragStart:Xe(),drag:Xe(),dragStop:Xe()}}function M3(t,e){const n=S3();return n.doubleClick.on(i=>{var r,o;e.nodeDoubleClick(i),(o=(r=t.events)==null?void 0:r.doubleClick)==null||o.call(r,i)}),n.click.on(i=>{var r,o;e.nodeClick(i),(o=(r=t.events)==null?void 0:r.click)==null||o.call(r,i)}),n.mouseEnter.on(i=>{var r,o;e.nodeMouseEnter(i),(o=(r=t.events)==null?void 0:r.mouseEnter)==null||o.call(r,i)}),n.mouseMove.on(i=>{var r,o;e.nodeMouseMove(i),(o=(r=t.events)==null?void 0:r.mouseMove)==null||o.call(r,i)}),n.mouseLeave.on(i=>{var r,o;e.nodeMouseLeave(i),(o=(r=t.events)==null?void 0:r.mouseLeave)==null||o.call(r,i)}),n.contextMenu.on(i=>{var r,o;e.nodeContextMenu(i),(o=(r=t.events)==null?void 0:r.contextMenu)==null||o.call(r,i)}),n.dragStart.on(i=>{var r,o;e.nodeDragStart(i),(o=(r=t.events)==null?void 0:r.dragStart)==null||o.call(r,i)}),n.drag.on(i=>{var r,o;e.nodeDrag(i),(o=(r=t.events)==null?void 0:r.drag)==null||o.call(r,i)}),n.dragStop.on(i=>{var r,o;e.nodeDragStop(i),(o=(r=t.events)==null?void 0:r.dragStop)==null||o.call(r,i)}),Object.entries(n).reduce((i,[r,o])=>(i.emit[r]=o.trigger,i.on[r]=o.on,i),{emit:{},on:{}})}function vy(){const{getSelectedNodes:t,nodeExtent:e,updateNodePositions:n,findNode:i,snapGrid:r,snapToGrid:o,nodesDraggable:s,emits:a}=Dt();return(l,u=!1)=>{const c=o.value?r.value[0]:5,f=o.value?r.value[1]:5,d=u?4:1,h=l.x*c*d,m=l.y*f*d,v=[];for(const g of t.value)if(g.draggable||s&&typeof g.draggable>"u"){const p={x:g.computedPosition.x+h,y:g.computedPosition.y+m},{position:y}=Yh(g,p,a.error,e.value,g.parentNode?i(g.parentNode):void 0);v.push({id:g.id,position:y,from:g.position,distance:{x:l.x,y:l.y},dimensions:g.dimensions})}n(v,!0,!1)}}const Ml=.1,w3=t=>((t*=2)<=1?t*t*t:(t-=2)*t*t+2)/2;function Sr(){return Ba("Viewport not initialized yet."),Promise.resolve(!1)}const E3={zoomIn:Sr,zoomOut:Sr,zoomTo:Sr,fitView:Sr,setCenter:Sr,fitBounds:Sr,project:t=>t,screenToFlowCoordinate:t=>t,flowToScreenCoordinate:t=>t,setViewport:Sr,setTransform:Sr,getViewport:()=>({x:0,y:0,zoom:1}),getTransform:()=>({x:0,y:0,zoom:1}),viewportInitialized:!1};function T3(t){function e(i,r){return new Promise(o=>{t.d3Selection&&t.d3Zoom?t.d3Zoom.interpolate(r?.interpolate==="linear"?ea:Hl).scaleBy(_d(t.d3Selection,r?.duration,r?.ease,()=>{o(!0)}),i):o(!1)})}function n(i,r,o,s){return new Promise(a=>{var l;const{x:u,y:c}=Q_({x:-i,y:-r},t.translateExtent),f=ps.translate(-u,-c).scale(o);t.d3Selection&&t.d3Zoom?(l=t.d3Zoom)==null||l.interpolate(s?.interpolate==="linear"?ea:Hl).transform(_d(t.d3Selection,s?.duration,s?.ease,()=>{a(!0)}),f):a(!1)})}return De(()=>t.d3Zoom&&t.d3Selection&&t.dimensions.width&&t.dimensions.height?{viewportInitialized:!0,zoomIn:r=>e(1.2,r),zoomOut:r=>e(1/1.2,r),zoomTo:(r,o)=>new Promise(s=>{t.d3Selection&&t.d3Zoom?t.d3Zoom.interpolate(o?.interpolate==="linear"?ea:Hl).scaleTo(_d(t.d3Selection,o?.duration,o?.ease,()=>{s(!0)}),r):s(!1)}),setViewport:(r,o)=>n(r.x,r.y,r.zoom,o),setTransform:(r,o)=>n(r.x,r.y,r.zoom,o),getViewport:()=>({x:t.viewport.x,y:t.viewport.y,zoom:t.viewport.zoom}),getTransform:()=>({x:t.viewport.x,y:t.viewport.y,zoom:t.viewport.zoom}),fitView:(r={padding:Ml,includeHiddenNodes:!1,duration:0})=>{var o,s;const a=[];for(const d of t.nodes)d.dimensions.width&&d.dimensions.height&&(r?.includeHiddenNodes||!d.hidden)&&(!((o=r.nodes)!=null&&o.length)||(s=r.nodes)!=null&&s.length&&r.nodes.includes(d.id))&&a.push(d);if(!a.length)return Promise.resolve(!1);const l=Xh(a),{x:u,y:c,zoom:f}=xg(l,t.dimensions.width,t.dimensions.height,r.minZoom??t.minZoom,r.maxZoom??t.maxZoom,r.padding??Ml);return n(u,c,f,r)},setCenter:(r,o,s)=>{const a=typeof s?.zoom<"u"?s.zoom:t.maxZoom,l=t.dimensions.width/2-r*a,u=t.dimensions.height/2-o*a;return n(l,u,a,s)},fitBounds:(r,o={padding:Ml})=>{const{x:s,y:a,zoom:l}=xg(r,t.dimensions.width,t.dimensions.height,t.minZoom,t.maxZoom,o.padding??Ml);return n(s,a,l,o)},project:r=>xa(r,t.viewport,t.snapToGrid,t.snapGrid),screenToFlowCoordinate:r=>{if(t.vueFlowRef){const{x:o,y:s}=t.vueFlowRef.getBoundingClientRect(),a={x:r.x-o,y:r.y-s};return xa(a,t.viewport,t.snapToGrid,t.snapGrid)}return{x:0,y:0}},flowToScreenCoordinate:r=>{if(t.vueFlowRef){const{x:o,y:s}=t.vueFlowRef.getBoundingClientRect(),a={x:r.x+o,y:r.y+s};return ya(a,t.viewport)}return{x:0,y:0}}}:E3)}function _d(t,e=0,n=w3,i=()=>{}){const r=typeof e=="number"&&e>0;return r||i(),r?t.transition().duration(e).ease(n).on("end",i):t}function C3(t,e,n){const i=Fu(!0);return i.run(()=>{const r=()=>{i.run(()=>{let v,g,p=!!(n.nodes.value.length||n.edges.value.length);v=Xo([t.modelValue,()=>{var y,S;return(S=(y=t.modelValue)==null?void 0:y.value)==null?void 0:S.length}],([y])=>{y&&Array.isArray(y)&&(g?.pause(),n.setElements(y),!g&&!p&&y.length?p=!0:g?.resume())}),g=Xo([n.nodes,n.edges,()=>n.edges.value.length,()=>n.nodes.value.length],([y,S])=>{var _;(_=t.modelValue)!=null&&_.value&&Array.isArray(t.modelValue.value)&&(v?.pause(),t.modelValue.value=[...y,...S],qt(()=>{v?.resume()}))},{immediate:p}),Xs(()=>{v?.stop(),g?.stop()})})},o=()=>{i.run(()=>{let v,g,p=!!n.nodes.value.length;v=Xo([t.nodes,()=>{var y,S;return(S=(y=t.nodes)==null?void 0:y.value)==null?void 0:S.length}],([y])=>{y&&Array.isArray(y)&&(g?.pause(),n.setNodes(y),!g&&!p&&y.length?p=!0:g?.resume())}),g=Xo([n.nodes,()=>n.nodes.value.length],([y])=>{var S;(S=t.nodes)!=null&&S.value&&Array.isArray(t.nodes.value)&&(v?.pause(),t.nodes.value=[...y],qt(()=>{v?.resume()}))},{immediate:p}),Xs(()=>{v?.stop(),g?.stop()})})},s=()=>{i.run(()=>{let v,g,p=!!n.edges.value.length;v=Xo([t.edges,()=>{var y,S;return(S=(y=t.edges)==null?void 0:y.value)==null?void 0:S.length}],([y])=>{y&&Array.isArray(y)&&(g?.pause(),n.setEdges(y),!g&&!p&&y.length?p=!0:g?.resume())}),g=Xo([n.edges,()=>n.edges.value.length],([y])=>{var S;(S=t.edges)!=null&&S.value&&Array.isArray(t.edges.value)&&(v?.pause(),t.edges.value=[...y],qt(()=>{v?.resume()}))},{immediate:p}),Xs(()=>{v?.stop(),g?.stop()})})},a=()=>{i.run(()=>{at(()=>e.maxZoom,()=>{e.maxZoom&&Ht(e.maxZoom)&&n.setMaxZoom(e.maxZoom)},{immediate:!0})})},l=()=>{i.run(()=>{at(()=>e.minZoom,()=>{e.minZoom&&Ht(e.minZoom)&&n.setMinZoom(e.minZoom)},{immediate:!0})})},u=()=>{i.run(()=>{at(()=>e.translateExtent,()=>{e.translateExtent&&Ht(e.translateExtent)&&n.setTranslateExtent(e.translateExtent)},{immediate:!0})})},c=()=>{i.run(()=>{at(()=>e.nodeExtent,()=>{e.nodeExtent&&Ht(e.nodeExtent)&&n.setNodeExtent(e.nodeExtent)},{immediate:!0})})},f=()=>{i.run(()=>{at(()=>e.applyDefault,()=>{Ht(e.applyDefault)&&(n.applyDefault.value=e.applyDefault)},{immediate:!0})})},d=()=>{i.run(()=>{const v=async g=>{let p=g;typeof e.autoConnect=="function"&&(p=await e.autoConnect(g)),p!==!1&&n.addEdges([p])};at(()=>e.autoConnect,()=>{Ht(e.autoConnect)&&(n.autoConnect.value=e.autoConnect)},{immediate:!0}),at(n.autoConnect,(g,p,y)=>{g?n.onConnect(v):n.hooks.value.connect.off(v),y(()=>{n.hooks.value.connect.off(v)})},{immediate:!0})})},h=()=>{const v=["id","modelValue","translateExtent","nodeExtent","edges","nodes","maxZoom","minZoom","applyDefault","autoConnect"];for(const g of Object.keys(e)){const p=g;if(!v.includes(p)){const y=bt(()=>e[p]),S=n[p];Ft(S)&&i.run(()=>{at(y,_=>{Ht(_)&&(S.value=_)},{immediate:!0})})}}};r(),o(),s(),l(),a(),u(),c(),f(),d(),h()}),()=>i.stop()}function A3(){return{edgesChange:Xe(),nodesChange:Xe(),nodeDoubleClick:Xe(),nodeClick:Xe(),nodeMouseEnter:Xe(),nodeMouseMove:Xe(),nodeMouseLeave:Xe(),nodeContextMenu:Xe(),nodeDragStart:Xe(),nodeDrag:Xe(),nodeDragStop:Xe(),nodesInitialized:Xe(),miniMapNodeClick:Xe(),miniMapNodeDoubleClick:Xe(),miniMapNodeMouseEnter:Xe(),miniMapNodeMouseMove:Xe(),miniMapNodeMouseLeave:Xe(),connect:Xe(),connectStart:Xe(),connectEnd:Xe(),clickConnectStart:Xe(),clickConnectEnd:Xe(),paneReady:Xe(),init:Xe(),move:Xe(),moveStart:Xe(),moveEnd:Xe(),selectionDragStart:Xe(),selectionDrag:Xe(),selectionDragStop:Xe(),selectionContextMenu:Xe(),selectionStart:Xe(),selectionEnd:Xe(),viewportChangeStart:Xe(),viewportChange:Xe(),viewportChangeEnd:Xe(),paneScroll:Xe(),paneClick:Xe(),paneContextMenu:Xe(),paneMouseEnter:Xe(),paneMouseMove:Xe(),paneMouseLeave:Xe(),edgeContextMenu:Xe(),edgeMouseEnter:Xe(),edgeMouseMove:Xe(),edgeMouseLeave:Xe(),edgeDoubleClick:Xe(),edgeClick:Xe(),edgeUpdateStart:Xe(),edgeUpdate:Xe(),edgeUpdateEnd:Xe(),updateNodeInternals:Xe(),error:Xe(t=>Ba(t.message))}}function R3(t,e){const n=Mi();i0(()=>{for(const[r,o]of Object.entries(e.value)){const s=a=>{t(r,a)};o.setEmitter(s),pa(o.removeEmitter),o.setHasEmitListeners(()=>i(r)),pa(o.removeHasEmitListeners)}});function i(r){var o;const s=I3(r);return!!((o=n?.vnode.props)==null?void 0:o[s])}}function I3(t){const[e,...n]=t.split(":");return`on${e.replace(/(?:^|-)(\w)/g,(r,o)=>o.toUpperCase())}${n.length?`:${n.join(":")}`:""}`}function _y(){return{vueFlowRef:null,viewportRef:null,nodes:[],edges:[],connectionLookup:new Map,nodeTypes:{},edgeTypes:{},initialized:!1,dimensions:{width:0,height:0},viewport:{x:0,y:0,zoom:1},d3Zoom:null,d3Selection:null,d3ZoomHandler:null,minZoom:.5,maxZoom:2,translateExtent:[[Number.NEGATIVE_INFINITY,Number.NEGATIVE_INFINITY],[Number.POSITIVE_INFINITY,Number.POSITIVE_INFINITY]],nodeExtent:[[Number.NEGATIVE_INFINITY,Number.NEGATIVE_INFINITY],[Number.POSITIVE_INFINITY,Number.POSITIVE_INFINITY]],selectionMode:Wh.Full,paneDragging:!1,preventScrolling:!0,zoomOnScroll:!0,zoomOnPinch:!0,zoomOnDoubleClick:!0,panOnScroll:!1,panOnScrollSpeed:.5,panOnScrollMode:ta.Free,paneClickDistance:0,panOnDrag:!0,edgeUpdaterRadius:10,onlyRenderVisibleElements:!1,defaultViewport:{x:0,y:0,zoom:1},nodesSelectionActive:!1,userSelectionActive:!1,userSelectionRect:null,defaultMarkerColor:"#b1b1b7",connectionLineStyle:{},connectionLineType:null,connectionLineOptions:{type:ao.Bezier,style:{}},connectionMode:zr.Loose,connectionStartHandle:null,connectionEndHandle:null,connectionClickStartHandle:null,connectionPosition:{x:Number.NaN,y:Number.NaN},connectionRadius:20,connectOnClick:!0,connectionStatus:null,isValidConnection:null,snapGrid:[15,15],snapToGrid:!1,edgesUpdatable:!1,edgesFocusable:!0,nodesFocusable:!0,nodesConnectable:!0,nodesDraggable:!0,nodeDragThreshold:1,elementsSelectable:!0,selectNodesOnDrag:!0,multiSelectionActive:!1,selectionKeyCode:"Shift",multiSelectionKeyCode:Sa()?"Meta":"Control",zoomActivationKeyCode:Sa()?"Meta":"Control",deleteKeyCode:"Backspace",panActivationKeyCode:"Space",hooks:A3(),applyDefault:!0,autoConnect:!1,fitViewOnInit:!1,fitViewOnInitDone:!1,noDragClassName:"nodrag",noWheelClassName:"nowheel",noPanClassName:"nopan",defaultEdgeOptions:void 0,elevateEdgesOnSelect:!1,elevateNodesOnSelect:!0,autoPanOnNodeDrag:!0,autoPanOnConnect:!0,autoPanSpeed:15,disableKeyboardA11y:!1,ariaLiveMessage:""}}const P3=["id","vueFlowRef","viewportRef","initialized","modelValue","nodes","edges","maxZoom","minZoom","translateExtent","hooks","defaultEdgeOptions"];function N3(t,e,n){const i=T3(t),r=L=>{const U=L??[];t.hooks.updateNodeInternals.trigger(U)},o=L=>qP(L,t.nodes,t.edges),s=L=>YP(L,t.nodes,t.edges),a=L=>lo(L,t.edges),l=({id:L,type:U,nodeId:V})=>{var Z;const C=L?`-${U}-${L}`:`-${U}`;return Array.from(((Z=t.connectionLookup.get(`${V}${C}`))==null?void 0:Z.values())??[])},u=L=>{if(L)return e.value.get(L)},c=L=>{if(L)return n.value.get(L)},f=(L,U,V)=>{var Z,C;const se=[];for(const re of L){const oe={id:re.id,type:"position",dragging:V,from:re.from};if(U&&(oe.position=re.position,re.parentNode)){const ue=u(re.parentNode);oe.position={x:oe.position.x-(((Z=ue?.computedPosition)==null?void 0:Z.x)??0),y:oe.position.y-(((C=ue?.computedPosition)==null?void 0:C.y)??0)}}se.push(oe)}se?.length&&t.hooks.nodesChange.trigger(se)},d=L=>{if(!t.vueFlowRef)return;const U=t.vueFlowRef.querySelector(".vue-flow__transformationpane");if(!U)return;const V=window.getComputedStyle(U),{m22:Z}=new window.DOMMatrixReadOnly(V.transform),C=[];for(const se of L){const re=se,oe=u(re.id);if(oe){const ue=nc(re.nodeElement);if(!!(ue.width&&ue.height&&(oe.dimensions.width!==ue.width||oe.dimensions.height!==ue.height||re.forceUpdate))){const T=re.nodeElement.getBoundingClientRect();oe.dimensions=ue,oe.handleBounds.source=Pg("source",re.nodeElement,T,Z,oe.id),oe.handleBounds.target=Pg("target",re.nodeElement,T,Z,oe.id),C.push({id:oe.id,type:"dimensions",dimensions:ue})}}}!t.fitViewOnInitDone&&t.fitViewOnInit&&i.value.fitView().then(()=>{t.fitViewOnInitDone=!0}),C.length&&t.hooks.nodesChange.trigger(C)},h=(L,U)=>{const V=new Set,Z=new Set;for(const re of L)yo(re)?V.add(re.id):$r(re)&&Z.add(re.id);const C=Rr(e.value,V,!0),se=Rr(n.value,Z);if(t.multiSelectionActive){for(const re of V)C.push(Er(re,U));for(const re of Z)se.push(Er(re,U))}C.length&&t.hooks.nodesChange.trigger(C),se.length&&t.hooks.edgesChange.trigger(se)},m=L=>{if(t.multiSelectionActive){const U=L.map(V=>Er(V.id,!0));t.hooks.nodesChange.trigger(U);return}t.hooks.nodesChange.trigger(Rr(e.value,new Set(L.map(U=>U.id)),!0)),t.hooks.edgesChange.trigger(Rr(n.value))},v=L=>{if(t.multiSelectionActive){const U=L.map(V=>Er(V.id,!0));t.hooks.edgesChange.trigger(U);return}t.hooks.edgesChange.trigger(Rr(n.value,new Set(L.map(U=>U.id)))),t.hooks.nodesChange.trigger(Rr(e.value,new Set,!0))},g=L=>{h(L,!0)},p=L=>{const V=(L||t.nodes).map(Z=>(Z.selected=!1,Er(Z.id,!1)));t.hooks.nodesChange.trigger(V)},y=L=>{const V=(L||t.edges).map(Z=>(Z.selected=!1,Er(Z.id,!1)));t.hooks.edgesChange.trigger(V)},S=L=>{if(!L||!L.length)return h([],!1);const U=L.reduce((V,Z)=>{const C=Er(Z.id,!1);return yo(Z)?V.nodes.push(C):V.edges.push(C),V},{nodes:[],edges:[]});U.nodes.length&&t.hooks.nodesChange.trigger(U.nodes),U.edges.length&&t.hooks.edgesChange.trigger(U.edges)},_=L=>{var U;(U=t.d3Zoom)==null||U.scaleExtent([L,t.maxZoom]),t.minZoom=L},R=L=>{var U;(U=t.d3Zoom)==null||U.scaleExtent([t.minZoom,L]),t.maxZoom=L},N=L=>{var U;(U=t.d3Zoom)==null||U.translateExtent(L),t.translateExtent=L},F=L=>{t.nodeExtent=L,r()},x=L=>{var U;(U=t.d3Zoom)==null||U.clickDistance(L)},b=L=>{t.nodesDraggable=L,t.nodesConnectable=L,t.elementsSelectable=L},P=L=>{const U=L instanceof Function?L(t.nodes):L;!t.initialized&&!U.length||(t.nodes=Ng(U,u,t.hooks.error.trigger))},M=L=>{const U=L instanceof Function?L(t.edges):L;if(!t.initialized&&!U.length)return;const V=vd(U,t.isValidConnection,u,c,t.hooks.error.trigger,t.defaultEdgeOptions,t.nodes,t.edges);gd(t.connectionLookup,n.value,V),t.edges=V},w=L=>{const U=L instanceof Function?L([...t.nodes,...t.edges]):L;!t.initialized&&!U.length||(P(U.filter(yo)),M(U.filter($r)))},W=L=>{let U=L instanceof Function?L(t.nodes):L;U=Array.isArray(U)?U:[U];const V=Ng(U,u,t.hooks.error.trigger),Z=[];for(const C of V)Z.push(Mg(C));Z.length&&t.hooks.nodesChange.trigger(Z)},E=L=>{let U=L instanceof Function?L(t.edges):L;U=Array.isArray(U)?U:[U];const V=vd(U,t.isValidConnection,u,c,t.hooks.error.trigger,t.defaultEdgeOptions,t.nodes,t.edges),Z=[];for(const C of V)Z.push(Mg(C));Z.length&&t.hooks.edgesChange.trigger(Z)},k=(L,U=!0,V=!1)=>{const Z=L instanceof Function?L(t.nodes):L,C=Array.isArray(Z)?Z:[Z],se=[],re=[];function oe(D){const T=a(D);for(const j of T)(!Ht(j.deletable)||j.deletable)&&re.push(Eg(j.id,j.source,j.target,j.sourceHandle,j.targetHandle))}function ue(D){const T=[];for(const j of t.nodes)j.parentNode===D&&T.push(j);if(T.length){for(const j of T)se.push(wg(j.id));U&&oe(T);for(const j of T)ue(j.id)}}for(const D of C){const T=typeof D=="string"?u(D):D;T&&(Ht(T.deletable)&&!T.deletable||(se.push(wg(T.id)),U&&oe([T]),V&&ue(T.id)))}re.length&&t.hooks.edgesChange.trigger(re),se.length&&t.hooks.nodesChange.trigger(se)},A=L=>{const U=L instanceof Function?L(t.edges):L,V=Array.isArray(U)?U:[U],Z=[];for(const C of V){const se=typeof C=="string"?c(C):C;se&&(Ht(se.deletable)&&!se.deletable||Z.push(Eg(typeof C=="string"?C:C.id,se.source,se.target,se.sourceHandle,se.targetHandle)))}t.hooks.edgesChange.trigger(Z)},I=(L,U,V=!0)=>{const Z=c(L.id);if(!Z)return!1;const C=t.edges.indexOf(Z),se=g3(L,U,Z,V,t.hooks.error.trigger);if(se){const[re]=vd([se],t.isValidConnection,u,c,t.hooks.error.trigger,t.defaultEdgeOptions,t.nodes,t.edges);return t.edges=t.edges.map((oe,ue)=>ue===C?re:oe),gd(t.connectionLookup,n.value,[re]),re}return!1},O=(L,U,V={replace:!1})=>{const Z=c(L);if(!Z)return;const C=typeof U=="function"?U(Z):U;Z.data=V.replace?C:{...Z.data,...C}},z=L=>Sg(L,t.nodes),q=L=>{const U=Sg(L,t.edges);return gd(t.connectionLookup,n.value,U),U},te=(L,U,V={replace:!1})=>{const Z=u(L);if(!Z)return;const C=typeof U=="function"?U(Z):U;V.replace?t.nodes.splice(t.nodes.indexOf(Z),1,C):Object.assign(Z,C)},ne=(L,U,V={replace:!1})=>{const Z=u(L);if(!Z)return;const C=typeof U=="function"?U(Z):U;Z.data=V.replace?C:{...Z.data,...C}},ye=(L,U,V=!1)=>{V?t.connectionClickStartHandle=L:t.connectionStartHandle=L,t.connectionEndHandle=null,t.connectionStatus=null,U&&(t.connectionPosition=U)},Pe=(L,U=null,V=null)=>{t.connectionStartHandle&&(t.connectionPosition=L,t.connectionEndHandle=U,t.connectionStatus=V)},Te=(L,U)=>{t.connectionPosition={x:Number.NaN,y:Number.NaN},t.connectionEndHandle=null,t.connectionStatus=null,U?t.connectionClickStartHandle=null:t.connectionStartHandle=null},H=L=>{const U=WP(L),V=U?null:$s(L)?L:u(L.id);return!U&&!V?[null,null,U]:[U?L:bu(V),V,U]},B=(L,U=!0,V=t.nodes)=>{const[Z,C,se]=H(L);if(!Z)return[];const re=[];for(const oe of V||t.nodes){if(!se&&(oe.id===C.id||!oe.computedPosition))continue;const ue=bu(oe),D=Su(ue,Z);(U&&D>0||D>=ue.width*ue.height||D>=Number(Z.width)*Number(Z.height))&&re.push(oe)}return re},X=(L,U,V=!0)=>{const[Z]=H(L);if(!Z)return!1;const C=Su(Z,U);return V&&C>0||C>=Number(Z.width)*Number(Z.height)},ve=L=>{const{viewport:U,dimensions:V,d3Zoom:Z,d3Selection:C,translateExtent:se}=t;if(!Z||!C||!L.x&&!L.y)return!1;const re=ps.translate(U.x+L.x,U.y+L.y).scale(U.zoom),oe=[[0,0],[V.width,V.height]],ue=Z.constrain()(re,oe,se),D=t.viewport.x!==ue.x||t.viewport.y!==ue.y||t.viewport.zoom!==ue.k;return Z.transform(C,ue),D},we=L=>{const U=L instanceof Function?L(t):L,V=["d3Zoom","d3Selection","d3ZoomHandler","viewportRef","vueFlowRef","dimensions","hooks"];Ht(U.defaultEdgeOptions)&&(t.defaultEdgeOptions=U.defaultEdgeOptions);const Z=U.modelValue||U.nodes||U.edges?[]:void 0;Z&&(U.modelValue&&Z.push(...U.modelValue),U.nodes&&Z.push(...U.nodes),U.edges&&Z.push(...U.edges),w(Z));const C=()=>{Ht(U.maxZoom)&&R(U.maxZoom),Ht(U.minZoom)&&_(U.minZoom),Ht(U.translateExtent)&&N(U.translateExtent)};for(const se of Object.keys(U)){const re=se,oe=U[re];![...P3,...V].includes(re)&&Ht(oe)&&(t[re]=oe)}Df(()=>t.d3Zoom).not.toBeNull().then(C),t.initialized||(t.initialized=!0)};return{updateNodePositions:f,updateNodeDimensions:d,setElements:w,setNodes:P,setEdges:M,addNodes:W,addEdges:E,removeNodes:k,removeEdges:A,findNode:u,findEdge:c,updateEdge:I,updateEdgeData:O,updateNode:te,updateNodeData:ne,applyEdgeChanges:q,applyNodeChanges:z,addSelectedElements:g,addSelectedNodes:m,addSelectedEdges:v,setMinZoom:_,setMaxZoom:R,setTranslateExtent:N,setNodeExtent:F,setPaneClickDistance:x,removeSelectedElements:S,removeSelectedNodes:p,removeSelectedEdges:y,startConnection:ye,updateConnection:Pe,endConnection:Te,setInteractive:b,setState:we,getIntersectingNodes:B,getIncomers:o,getOutgoers:s,getConnectedEdges:a,getHandleConnections:l,isNodeIntersecting:X,panBy:ve,fitView:L=>i.value.fitView(L),zoomIn:L=>i.value.zoomIn(L),zoomOut:L=>i.value.zoomOut(L),zoomTo:(L,U)=>i.value.zoomTo(L,U),setViewport:(L,U)=>i.value.setViewport(L,U),setTransform:(L,U)=>i.value.setTransform(L,U),getViewport:()=>i.value.getViewport(),getTransform:()=>i.value.getTransform(),setCenter:(L,U,V)=>i.value.setCenter(L,U,V),fitBounds:(L,U)=>i.value.fitBounds(L,U),project:L=>i.value.project(L),screenToFlowCoordinate:L=>i.value.screenToFlowCoordinate(L),flowToScreenCoordinate:L=>i.value.flowToScreenCoordinate(L),toObject:()=>{const L=[],U=[];for(const V of t.nodes){const{computedPosition:Z,handleBounds:C,selected:se,dimensions:re,isParent:oe,resizing:ue,dragging:D,events:T,...j}=V;L.push(j)}for(const V of t.edges){const{selected:Z,sourceNode:C,targetNode:se,events:re,...oe}=V;U.push(oe)}return JSON.parse(JSON.stringify({nodes:L,edges:U,position:[t.viewport.x,t.viewport.y],zoom:t.viewport.zoom,viewport:t.viewport}))},fromObject:L=>new Promise(U=>{const{nodes:V,edges:Z,position:C,zoom:se,viewport:re}=L;V&&P(V),Z&&M(Z);const[oe,ue]=re?.x&&re?.y?[re.x,re.y]:C??[null,null];if(oe&&ue){const D=re?.zoom||se||t.viewport.zoom;return Df(()=>i.value.viewportInitialized).toBe(!0).then(()=>{i.value.setViewport({x:oe,y:ue,zoom:D}).then(()=>{U(!0)})})}else U(!0)}),updateNodeInternals:r,viewportHelper:i,$reset:()=>{const L=_y();if(t.edges=[],t.nodes=[],t.d3Zoom&&t.d3Selection){const U=ps.translate(L.defaultViewport.x??0,L.defaultViewport.y??0).scale(ar(L.defaultViewport.zoom??1,L.minZoom,L.maxZoom)),V=t.viewportRef.getBoundingClientRect(),Z=[[0,0],[V.width,V.height]],C=t.d3Zoom.constrain()(U,Z,L.translateExtent);t.d3Zoom.transform(t.d3Selection,C)}we(L)},$destroy:()=>{}}}const D3=["data-id","data-handleid","data-nodeid","data-handlepos"],L3={name:"Handle",compatConfig:{MODE:3}},xo=Nt({...L3,props:{id:{default:null},type:{},position:{default:()=>qe.Top},isValidConnection:{type:Function},connectable:{type:[Boolean,Number,String,Function],default:void 0},connectableStart:{type:Boolean,default:!0},connectableEnd:{type:Boolean,default:!0}},setup(t,{expose:e}){const n=Ib(t,["position","connectable","connectableStart","connectableEnd","id"]),i=bt(()=>n.type??"source"),r=bt(()=>n.isValidConnection??null),{id:o,connectionStartHandle:s,connectionClickStartHandle:a,connectionEndHandle:l,vueFlowRef:u,nodesConnectable:c,noDragClassName:f,noPanClassName:d}=Dt(),{id:h,node:m,nodeEl:v,connectedEdges:g}=gy(),p=Ne(),y=bt(()=>typeof t.connectableStart<"u"?t.connectableStart:!0),S=bt(()=>typeof t.connectableEnd<"u"?t.connectableEnd:!0),_=bt(()=>{var M,w,W,E,k,A;return((M=s.value)==null?void 0:M.nodeId)===h&&((w=s.value)==null?void 0:w.id)===t.id&&((W=s.value)==null?void 0:W.type)===i.value||((E=l.value)==null?void 0:E.nodeId)===h&&((k=l.value)==null?void 0:k.id)===t.id&&((A=l.value)==null?void 0:A.type)===i.value}),R=bt(()=>{var M,w,W;return((M=a.value)==null?void 0:M.nodeId)===h&&((w=a.value)==null?void 0:w.id)===t.id&&((W=a.value)==null?void 0:W.type)===i.value}),{handlePointerDown:N,handleClick:F}=my({nodeId:h,handleId:t.id,isValidConnection:r,type:i}),x=De(()=>typeof t.connectable=="string"&&t.connectable==="single"?!g.value.some(M=>{const w=M[`${i.value}Handle`];return M[i.value]!==h?!1:w?w===t.id:!0}):typeof t.connectable=="number"?g.value.filter(M=>{const w=M[`${i.value}Handle`];return M[i.value]!==h?!1:w?w===t.id:!0}).length<t.connectable:typeof t.connectable=="function"?t.connectable(m,g.value):Ht(t.connectable)?t.connectable:c.value);Zt(()=>{var M;if(!m.dimensions.width||!m.dimensions.height)return;const w=(M=m.handleBounds[i.value])==null?void 0:M.find(z=>z.id===t.id);if(!u.value||w)return;const W=u.value.querySelector(".vue-flow__transformationpane");if(!v.value||!p.value||!W||!t.id)return;const E=v.value.getBoundingClientRect(),k=p.value.getBoundingClientRect(),A=window.getComputedStyle(W),{m22:I}=new window.DOMMatrixReadOnly(A.transform),O={id:t.id,position:t.position,x:(k.left-E.left)/I,y:(k.top-E.top)/I,type:i.value,nodeId:h,...nc(p.value)};m.handleBounds[i.value]=[...m.handleBounds[i.value]??[],O]});function b(M){const w=qh(M);x.value&&y.value&&(w&&M.button===0||!w)&&N(M)}function P(M){!h||!a.value&&!y.value||x.value&&F(M)}return e({handleClick:F,handlePointerDown:N,onClick:P,onPointerDown:b}),(M,w)=>(ae(),ge("div",{ref_key:"handle",ref:p,"data-id":`${fe(o)}-${fe(h)}-${t.id}-${i.value}`,"data-handleid":t.id,"data-nodeid":fe(h),"data-handlepos":M.position,class:lt(["vue-flow__handle",[`vue-flow__handle-${M.position}`,`vue-flow__handle-${t.id}`,fe(f),fe(d),i.value,{connectable:x.value,connecting:R.value,connectablestart:y.value,connectableend:S.value,connectionindicator:x.value&&(y.value&&!_.value||S.value&&_.value)}]]),onMousedown:b,onTouchstartPassive:b,onClick:P},[nr(M.$slots,"default",{id:M.id})],42,D3))}}),oc=function({sourcePosition:t=qe.Bottom,targetPosition:e=qe.Top,label:n,connectable:i=!0,isValidTargetPos:r,isValidSourcePos:o,data:s}){const a=s.label??n;return[wt(xo,{type:"target",position:e,connectable:i,isValidConnection:r}),typeof a!="string"&&a?wt(a):wt(it,[a]),wt(xo,{type:"source",position:t,connectable:i,isValidConnection:o})]};oc.props=["sourcePosition","targetPosition","label","isValidTargetPos","isValidSourcePos","connectable","data"];oc.inheritAttrs=!1;oc.compatConfig={MODE:3};const U3=oc,sc=function({targetPosition:t=qe.Top,label:e,connectable:n=!0,isValidTargetPos:i,data:r}){const o=r.label??e;return[wt(xo,{type:"target",position:t,connectable:n,isValidConnection:i}),typeof o!="string"&&o?wt(o):wt(it,[o])]};sc.props=["targetPosition","label","isValidTargetPos","connectable","data"];sc.inheritAttrs=!1;sc.compatConfig={MODE:3};const F3=sc,ac=function({sourcePosition:t=qe.Bottom,label:e,connectable:n=!0,isValidSourcePos:i,data:r}){const o=r.label??e;return[typeof o!="string"&&o?wt(o):wt(it,[o]),wt(xo,{type:"source",position:t,connectable:n,isValidConnection:i})]};ac.props=["sourcePosition","label","isValidSourcePos","connectable","data"];ac.inheritAttrs=!1;ac.compatConfig={MODE:3};const O3=ac,B3=["transform"],k3=["width","height","x","y","rx","ry"],V3=["y"],z3={name:"EdgeText",compatConfig:{MODE:3}},$3=Nt({...z3,props:{x:{},y:{},label:{},labelStyle:{default:()=>({})},labelShowBg:{type:Boolean,default:!0},labelBgStyle:{default:()=>({})},labelBgPadding:{default:()=>[2,4]},labelBgBorderRadius:{default:2}},setup(t){const e=Ne({x:0,y:0,width:0,height:0}),n=Ne(null),i=De(()=>`translate(${t.x-e.value.width/2} ${t.y-e.value.height/2})`);Zt(r),at([()=>t.x,()=>t.y,n,()=>t.label],r);function r(){if(!n.value)return;const o=n.value.getBBox();(o.width!==e.value.width||o.height!==e.value.height)&&(e.value=o)}return(o,s)=>(ae(),ge("g",{transform:i.value,class:"vue-flow__edge-textwrapper"},[o.labelShowBg?(ae(),ge("rect",{key:0,class:"vue-flow__edge-textbg",width:`${e.value.width+2*o.labelBgPadding[0]}px`,height:`${e.value.height+2*o.labelBgPadding[1]}px`,x:-o.labelBgPadding[0],y:-o.labelBgPadding[1],style:nt(o.labelBgStyle),rx:o.labelBgBorderRadius,ry:o.labelBgBorderRadius},null,12,k3)):$e("",!0),K("text",la(o.$attrs,{ref_key:"el",ref:n,class:"vue-flow__edge-text",y:e.value.height/2,dy:"0.3em",style:o.labelStyle}),[nr(o.$slots,"default",{},()=>[typeof o.label!="string"?(ae(),tn(s0(o.label),{key:0})):(ae(),ge(it,{key:1},[hi(Re(o.label),1)],64))])],16,V3)],8,B3))}}),H3=["id","d","marker-end","marker-start"],G3=["d","stroke-width"],W3={name:"BaseEdge",inheritAttrs:!1,compatConfig:{MODE:3}},lc=Nt({...W3,props:{id:{},labelX:{},labelY:{},path:{},label:{},markerStart:{},markerEnd:{},interactionWidth:{default:20},labelStyle:{},labelShowBg:{type:Boolean},labelBgStyle:{},labelBgPadding:{},labelBgBorderRadius:{}},setup(t,{expose:e}){const n=Ne(null),i=Ne(null),r=Ne(null),o=xh();return e({pathEl:n,interactionEl:i,labelEl:r}),(s,a)=>(ae(),ge(it,null,[K("path",la(fe(o),{id:s.id,ref_key:"pathEl",ref:n,d:s.path,class:"vue-flow__edge-path","marker-end":s.markerEnd,"marker-start":s.markerStart}),null,16,H3),s.interactionWidth?(ae(),ge("path",{key:0,ref_key:"interactionEl",ref:i,fill:"none",d:s.path,"stroke-width":s.interactionWidth,"stroke-opacity":0,class:"vue-flow__edge-interaction"},null,8,G3)):$e("",!0),s.label&&s.labelX&&s.labelY?(ae(),tn($3,{key:1,ref_key:"labelEl",ref:r,x:s.labelX,y:s.labelY,label:s.label,"label-show-bg":s.labelShowBg,"label-bg-style":s.labelBgStyle,"label-bg-padding":s.labelBgPadding,"label-bg-border-radius":s.labelBgBorderRadius,"label-style":s.labelStyle},null,8,["x","y","label","label-show-bg","label-bg-style","label-bg-padding","label-bg-border-radius","label-style"])):$e("",!0)],64))}});function yy({sourceX:t,sourceY:e,targetX:n,targetY:i}){const r=Math.abs(n-t)/2,o=n<t?n+r:n-r,s=Math.abs(i-e)/2,a=i<e?i+s:i-s;return[o,a,r,s]}function xy({sourceX:t,sourceY:e,targetX:n,targetY:i,sourceControlX:r,sourceControlY:o,targetControlX:s,targetControlY:a}){const l=t*.125+r*.375+s*.375+n*.125,u=e*.125+o*.375+a*.375+i*.125,c=Math.abs(l-t),f=Math.abs(u-e);return[l,u,c,f]}function wl(t,e){return t>=0?.5*t:e*25*Math.sqrt(-t)}function Fg({pos:t,x1:e,y1:n,x2:i,y2:r,c:o}){let s,a;switch(t){case qe.Left:s=e-wl(e-i,o),a=n;break;case qe.Right:s=e+wl(i-e,o),a=n;break;case qe.Top:s=e,a=n-wl(n-r,o);break;case qe.Bottom:s=e,a=n+wl(r-n,o);break}return[s,a]}function by(t){const{sourceX:e,sourceY:n,sourcePosition:i=qe.Bottom,targetX:r,targetY:o,targetPosition:s=qe.Top,curvature:a=.25}=t,[l,u]=Fg({pos:i,x1:e,y1:n,x2:r,y2:o,c:a}),[c,f]=Fg({pos:s,x1:r,y1:o,x2:e,y2:n,c:a}),[d,h,m,v]=xy({sourceX:e,sourceY:n,targetX:r,targetY:o,sourceControlX:l,sourceControlY:u,targetControlX:c,targetControlY:f});return[`M${e},${n} C${l},${u} ${c},${f} ${r},${o}`,d,h,m,v]}function Og({pos:t,x1:e,y1:n,x2:i,y2:r}){let o,s;switch(t){case qe.Left:case qe.Right:o=.5*(e+i),s=n;break;case qe.Top:case qe.Bottom:o=e,s=.5*(n+r);break}return[o,s]}function Sy(t){const{sourceX:e,sourceY:n,sourcePosition:i=qe.Bottom,targetX:r,targetY:o,targetPosition:s=qe.Top}=t,[a,l]=Og({pos:i,x1:e,y1:n,x2:r,y2:o}),[u,c]=Og({pos:s,x1:r,y1:o,x2:e,y2:n}),[f,d,h,m]=xy({sourceX:e,sourceY:n,targetX:r,targetY:o,sourceControlX:a,sourceControlY:l,targetControlX:u,targetControlY:c});return[`M${e},${n} C${a},${l} ${u},${c} ${r},${o}`,f,d,h,m]}const Bg={[qe.Left]:{x:-1,y:0},[qe.Right]:{x:1,y:0},[qe.Top]:{x:0,y:-1},[qe.Bottom]:{x:0,y:1}};function X3({source:t,sourcePosition:e=qe.Bottom,target:n}){return e===qe.Left||e===qe.Right?t.x<n.x?{x:1,y:0}:{x:-1,y:0}:t.y<n.y?{x:0,y:1}:{x:0,y:-1}}function kg(t,e){return Math.sqrt((e.x-t.x)**2+(e.y-t.y)**2)}function Y3({source:t,sourcePosition:e=qe.Bottom,target:n,targetPosition:i=qe.Top,center:r,offset:o}){const s=Bg[e],a=Bg[i],l={x:t.x+s.x*o,y:t.y+s.y*o},u={x:n.x+a.x*o,y:n.y+a.y*o},c=X3({source:l,sourcePosition:e,target:u}),f=c.x!==0?"x":"y",d=c[f];let h,m,v;const g={x:0,y:0},p={x:0,y:0},[y,S,_,R]=yy({sourceX:t.x,sourceY:t.y,targetX:n.x,targetY:n.y});if(s[f]*a[f]===-1){m=r.x??y,v=r.y??S;const F=[{x:m,y:l.y},{x:m,y:u.y}],x=[{x:l.x,y:v},{x:u.x,y:v}];s[f]===d?h=f==="x"?F:x:h=f==="x"?x:F}else{const F=[{x:l.x,y:u.y}],x=[{x:u.x,y:l.y}];if(f==="x"?h=s.x===d?x:F:h=s.y===d?F:x,e===i){const W=Math.abs(t[f]-n[f]);if(W<=o){const E=Math.min(o-1,o-W);s[f]===d?g[f]=(l[f]>t[f]?-1:1)*E:p[f]=(u[f]>n[f]?-1:1)*E}}if(e!==i){const W=f==="x"?"y":"x",E=s[f]===a[W],k=l[W]>u[W],A=l[W]<u[W];(s[f]===1&&(!E&&k||E&&A)||s[f]!==1&&(!E&&A||E&&k))&&(h=f==="x"?F:x)}const b={x:l.x+g.x,y:l.y+g.y},P={x:u.x+p.x,y:u.y+p.y},M=Math.max(Math.abs(b.x-h[0].x),Math.abs(P.x-h[0].x)),w=Math.max(Math.abs(b.y-h[0].y),Math.abs(P.y-h[0].y));M>=w?(m=(b.x+P.x)/2,v=h[0].y):(m=h[0].x,v=(b.y+P.y)/2)}return[[t,{x:l.x+g.x,y:l.y+g.y},...h,{x:u.x+p.x,y:u.y+p.y},n],m,v,_,R]}function q3(t,e,n,i){const r=Math.min(kg(t,e)/2,kg(e,n)/2,i),{x:o,y:s}=e;if(t.x===o&&o===n.x||t.y===s&&s===n.y)return`L${o} ${s}`;if(t.y===s){const u=t.x<n.x?-1:1,c=t.y<n.y?1:-1;return`L ${o+r*u},${s}Q ${o},${s} ${o},${s+r*c}`}const a=t.x<n.x?1:-1,l=t.y<n.y?-1:1;return`L ${o},${s+r*l}Q ${o},${s} ${o+r*a},${s}`}function Yf(t){const{sourceX:e,sourceY:n,sourcePosition:i=qe.Bottom,targetX:r,targetY:o,targetPosition:s=qe.Top,borderRadius:a=5,centerX:l,centerY:u,offset:c=20}=t,[f,d,h,m,v]=Y3({source:{x:e,y:n},sourcePosition:i,target:{x:r,y:o},targetPosition:s,center:{x:l,y:u},offset:c});return[f.reduce((p,y,S)=>{let _;return S>0&&S<f.length-1?_=q3(f[S-1],y,f[S+1],a):_=`${S===0?"M":"L"}${y.x} ${y.y}`,p+=_,p},""),d,h,m,v]}function K3(t){const{sourceX:e,sourceY:n,targetX:i,targetY:r}=t,[o,s,a,l]=yy({sourceX:e,sourceY:n,targetX:i,targetY:r});return[`M ${e},${n}L ${i},${r}`,o,s,a,l]}const Z3=Nt({name:"StraightEdge",props:["label","labelStyle","labelShowBg","labelBgStyle","labelBgPadding","labelBgBorderRadius","sourceY","sourceX","targetX","targetY","markerEnd","markerStart","interactionWidth"],compatConfig:{MODE:3},setup(t,{attrs:e}){return()=>{const[n,i,r]=K3(t);return wt(lc,{path:n,labelX:i,labelY:r,...e,...t})}}}),j3=Z3,J3=Nt({name:"SmoothStepEdge",props:["sourcePosition","targetPosition","label","labelStyle","labelShowBg","labelBgStyle","labelBgPadding","labelBgBorderRadius","sourceY","sourceX","targetX","targetY","borderRadius","markerEnd","markerStart","interactionWidth","offset"],compatConfig:{MODE:3},setup(t,{attrs:e}){return()=>{const[n,i,r]=Yf({...t,sourcePosition:t.sourcePosition??qe.Bottom,targetPosition:t.targetPosition??qe.Top});return wt(lc,{path:n,labelX:i,labelY:r,...e,...t})}}}),My=J3,Q3=Nt({name:"StepEdge",props:["sourcePosition","targetPosition","label","labelStyle","labelShowBg","labelBgStyle","labelBgPadding","labelBgBorderRadius","sourceY","sourceX","targetX","targetY","markerEnd","markerStart","interactionWidth"],setup(t,{attrs:e}){return()=>wt(My,{...t,...e,borderRadius:0})}}),eN=Q3,tN=Nt({name:"BezierEdge",props:["sourcePosition","targetPosition","label","labelStyle","labelShowBg","labelBgStyle","labelBgPadding","labelBgBorderRadius","sourceY","sourceX","targetX","targetY","curvature","markerEnd","markerStart","interactionWidth"],compatConfig:{MODE:3},setup(t,{attrs:e}){return()=>{const[n,i,r]=by({...t,sourcePosition:t.sourcePosition??qe.Bottom,targetPosition:t.targetPosition??qe.Top});return wt(lc,{path:n,labelX:i,labelY:r,...e,...t})}}}),nN=tN,iN=Nt({name:"SimpleBezierEdge",props:["sourcePosition","targetPosition","label","labelStyle","labelShowBg","labelBgStyle","labelBgPadding","labelBgBorderRadius","sourceY","sourceX","targetX","targetY","markerEnd","markerStart","interactionWidth"],compatConfig:{MODE:3},setup(t,{attrs:e}){return()=>{const[n,i,r]=Sy({...t,sourcePosition:t.sourcePosition??qe.Bottom,targetPosition:t.targetPosition??qe.Top});return wt(lc,{path:n,labelX:i,labelY:r,...e,...t})}}}),rN=iN,oN={input:O3,default:U3,output:F3},sN={default:nN,straight:j3,step:eN,smoothstep:My,simplebezier:rN};function aN(t,e,n){const i=De(()=>v=>e.value.get(v)),r=De(()=>v=>n.value.get(v)),o=De(()=>{const v={...sN,...t.edgeTypes},g=Object.keys(v);for(const p of t.edges)p.type&&!g.includes(p.type)&&(v[p.type]=p.type);return v}),s=De(()=>{const v={...oN,...t.nodeTypes},g=Object.keys(v);for(const p of t.nodes)p.type&&!g.includes(p.type)&&(v[p.type]=p.type);return v}),a=De(()=>t.onlyRenderVisibleElements?oy(t.nodes,{x:0,y:0,width:t.dimensions.width,height:t.dimensions.height},t.viewport,!0):t.nodes),l=De(()=>{if(t.onlyRenderVisibleElements){const v=[];for(const g of t.edges){const p=e.value.get(g.source),y=e.value.get(g.target);r3({sourcePos:p.computedPosition||{x:0,y:0},targetPos:y.computedPosition||{x:0,y:0},sourceWidth:p.dimensions.width,sourceHeight:p.dimensions.height,targetWidth:y.dimensions.width,targetHeight:y.dimensions.height,width:t.dimensions.width,height:t.dimensions.height,viewport:t.viewport})&&v.push(g)}return v}return t.edges}),u=De(()=>[...a.value,...l.value]),c=De(()=>{const v=[];for(const g of t.nodes)g.selected&&v.push(g);return v}),f=De(()=>{const v=[];for(const g of t.edges)g.selected&&v.push(g);return v}),d=De(()=>[...c.value,...f.value]),h=De(()=>{const v=[];for(const g of t.nodes)g.dimensions.width&&g.dimensions.height&&g.handleBounds!==void 0&&v.push(g);return v}),m=De(()=>a.value.length>0&&h.value.length===a.value.length);return{getNode:i,getEdge:r,getElements:u,getEdgeTypes:o,getNodeTypes:s,getEdges:l,getNodes:a,getSelectedElements:d,getSelectedNodes:c,getSelectedEdges:f,getNodesInitialized:h,areNodesInitialized:m}}class uo{constructor(){this.currentId=0,this.flows=new Map}static getInstance(){var e;const n=(e=Mi())==null?void 0:e.appContext.app,i=n?.config.globalProperties.$vueFlowStorage??uo.instance;return uo.instance=i??new uo,n&&(n.config.globalProperties.$vueFlowStorage=uo.instance),uo.instance}set(e,n){return this.flows.set(e,n)}get(e){return this.flows.get(e)}remove(e){return this.flows.delete(e)}create(e,n){const i=_y(),r=Fr(i),o={};for(const[d,h]of Object.entries(r.hooks)){const m=`on${d.charAt(0).toUpperCase()+d.slice(1)}`;o[m]=h.on}const s={};for(const[d,h]of Object.entries(r.hooks))s[d]=h.trigger;const a=De(()=>{const d=new Map;for(const h of r.nodes)d.set(h.id,h);return d}),l=De(()=>{const d=new Map;for(const h of r.edges)d.set(h.id,h);return d}),u=aN(r,a,l),c=N3(r,a,l);c.setState({...r,...n});const f={...o,...u,...c,...e2(r),nodeLookup:a,edgeLookup:l,emits:s,id:e,vueFlowVersion:"1.48.2",$destroy:()=>{this.remove(e)}};return this.set(e,f),f}getId(){return`vue-flow-${this.currentId++}`}}function Dt(t){const e=uo.getInstance(),n=Ou(),i=typeof t=="object",r=i?t:{id:t},o=r.id,s=o??n?.vueFlowId;let a;if(n){const l=Pn(Ug,null);typeof l<"u"&&l!==null&&(!s||l.id===s)&&(a=l)}if(a||s&&(a=e.get(s)),!a||s&&a.id!==s){const l=o??e.getId(),u=e.create(l,r);a=u,(n??Fu(!0)).run(()=>{at(u.applyDefault,(f,d,h)=>{const m=g=>{u.applyNodeChanges(g)},v=g=>{u.applyEdgeChanges(g)};f?(u.onNodesChange(m),u.onEdgesChange(v)):(u.hooks.value.nodesChange.off(m),u.hooks.value.edgesChange.off(v)),h(()=>{u.hooks.value.nodesChange.off(m),u.hooks.value.edgesChange.off(v)})},{immediate:!0}),pa(()=>{if(a){const f=e.get(a.id);f?f.$destroy():Ba(`No store instance found for id ${a.id} in storage.`)}})})}else i&&a.setState(r);if(n&&(Or(Ug,a),n.vueFlowId=a.id),i){const l=Mi();l?.type.name!=="VueFlow"&&a.emits.error(new Yt(Wt.USEVUEFLOW_OPTIONS))}return a}function lN(t){const{emits:e,dimensions:n}=Dt();let i;Zt(()=>{const r=()=>{var o,s;if(!t.value||!(((s=(o=t.value).checkVisibility)==null?void 0:s.call(o))??!0))return;const a=nc(t.value);(a.width===0||a.height===0)&&e.error(new Yt(Wt.MISSING_VIEWPORT_DIMENSIONS)),n.value={width:a.width||500,height:a.height||500}};r(),window.addEventListener("resize",r),t.value&&(i=new ResizeObserver(()=>r()),i.observe(t.value)),cr(()=>{window.removeEventListener("resize",r),i&&t.value&&i.unobserve(t.value)})})}const uN={name:"UserSelection",compatConfig:{MODE:3}},cN=Nt({...uN,props:{userSelectionRect:{}},setup(t){return(e,n)=>(ae(),ge("div",{class:"vue-flow__selection vue-flow__container",style:nt({width:`${e.userSelectionRect.width}px`,height:`${e.userSelectionRect.height}px`,transform:`translate(${e.userSelectionRect.x}px, ${e.userSelectionRect.y}px)`})},null,4))}}),dN=["tabIndex"],fN={name:"NodesSelection",compatConfig:{MODE:3}},hN=Nt({...fN,setup(t){const{emits:e,viewport:n,getSelectedNodes:i,noPanClassName:r,disableKeyboardA11y:o,userSelectionActive:s}=Dt(),a=vy(),l=Ne(null),u=hy({el:l,onStart(m){e.selectionDragStart(m),e.nodeDragStart(m)},onDrag(m){e.selectionDrag(m),e.nodeDrag(m)},onStop(m){e.selectionDragStop(m),e.nodeDragStop(m)}});Zt(()=>{var m;o.value||(m=l.value)==null||m.focus({preventScroll:!0})});const c=De(()=>Xh(i.value)),f=De(()=>({width:`${c.value.width}px`,height:`${c.value.height}px`,top:`${c.value.y}px`,left:`${c.value.x}px`}));function d(m){e.selectionContextMenu({event:m,nodes:i.value})}function h(m){o.value||is[m.key]&&(m.preventDefault(),a({x:is[m.key].x,y:is[m.key].y},m.shiftKey))}return(m,v)=>!fe(s)&&c.value.width&&c.value.height?(ae(),ge("div",{key:0,class:lt(["vue-flow__nodesselection vue-flow__container",fe(r)]),style:nt({transform:`translate(${fe(n).x}px,${fe(n).y}px) scale(${fe(n).zoom})`})},[K("div",{ref_key:"el",ref:l,class:lt([{dragging:fe(u)},"vue-flow__nodesselection-rect"]),style:nt(f.value),tabIndex:fe(o)?void 0:-1,onContextmenu:d,onKeydown:h},null,46,dN)],6)):$e("",!0)}});function pN(t,e){return{x:t.clientX-e.left,y:t.clientY-e.top}}const mN={name:"Pane",compatConfig:{MODE:3}},gN=Nt({...mN,props:{isSelecting:{type:Boolean},selectionKeyPressed:{type:Boolean}},setup(t){const{vueFlowRef:e,nodes:n,viewport:i,emits:r,userSelectionActive:o,removeSelectedElements:s,userSelectionRect:a,elementsSelectable:l,nodesSelectionActive:u,getSelectedEdges:c,getSelectedNodes:f,removeNodes:d,removeEdges:h,selectionMode:m,deleteKeyCode:v,multiSelectionKeyCode:g,multiSelectionActive:p,edgeLookup:y,nodeLookup:S,connectionLookup:_,defaultEdgeOptions:R,connectionStartHandle:N,panOnDrag:F}=Dt(),x=Lr(null),b=Lr(new Set),P=Lr(new Set),M=Lr(null),w=bt(()=>l.value&&(t.isSelecting||o.value)),W=bt(()=>N.value!==null);let E=!1,k=!1;const A=na(v,{actInsideInputWithModifier:!1}),I=na(g);at(A,Te=>{Te&&(d(f.value),h(c.value),u.value=!1)}),at(I,Te=>{p.value=Te});function O(Te,H){return B=>{B.target===H&&Te?.(B)}}function z(Te){if(E||W.value){E=!1;return}r.paneClick(Te),s(),u.value=!1}function q(Te){var H;if(Array.isArray(F.value)&&((H=F.value)!=null&&H.includes(2))){Te.preventDefault();return}r.paneContextMenu(Te)}function te(Te){r.paneScroll(Te)}function ne(Te){var H,B,X;if(M.value=((H=e.value)==null?void 0:H.getBoundingClientRect())??null,!l.value||!t.isSelecting||Te.button!==0||Te.target!==x.value||!M.value)return;(X=(B=Te.target)==null?void 0:B.setPointerCapture)==null||X.call(B,Te.pointerId);const{x:ve,y:we}=pN(Te,M.value);k=!0,E=!1,s(),a.value={width:0,height:0,startX:ve,startY:we,x:ve,y:we},r.selectionStart(Te)}function ye(Te){var H;if(!M.value||!a.value)return;E=!0;const{x:B,y:X}=fi(Te,M.value),{startX:ve=0,startY:we=0}=a.value,Ae={startX:ve,startY:we,x:B<ve?B:ve,y:X<we?X:we,width:Math.abs(B-ve),height:Math.abs(X-we)},G=b.value,Y=P.value;b.value=new Set(oy(n.value,Ae,i.value,m.value===Wh.Partial,!0).map(U=>U.id)),P.value=new Set;const L=((H=R.value)==null?void 0:H.selectable)??!0;for(const U of b.value){const V=_.value.get(U);if(V)for(const{edgeId:Z}of V.values()){const C=y.value.get(Z);C&&(C.selectable??L)&&P.value.add(Z)}}if(!Lg(G,b.value)){const U=Rr(S.value,b.value,!0);r.nodesChange(U)}if(!Lg(Y,P.value)){const U=Rr(y.value,P.value);r.edgesChange(U)}a.value=Ae,o.value=!0,u.value=!1}function Pe(Te){var H;Te.button!==0||!k||((H=Te.target)==null||H.releasePointerCapture(Te.pointerId),!o.value&&a.value&&Te.target===x.value&&z(Te),o.value=!1,a.value=null,u.value=b.value.size>0,r.selectionEnd(Te),t.selectionKeyPressed&&(E=!1),k=!1)}return(Te,H)=>(ae(),ge("div",{ref_key:"container",ref:x,class:lt(["vue-flow__pane vue-flow__container",{selection:Te.isSelecting}]),onClick:H[0]||(H[0]=B=>w.value?void 0:O(z,x.value)(B)),onContextmenu:H[1]||(H[1]=B=>O(q,x.value)(B)),onWheelPassive:H[2]||(H[2]=B=>O(te,x.value)(B)),onPointerenter:H[3]||(H[3]=B=>w.value?void 0:fe(r).paneMouseEnter(B)),onPointerdown:H[4]||(H[4]=B=>w.value?ne(B):fe(r).paneMouseMove(B)),onPointermove:H[5]||(H[5]=B=>w.value?ye(B):fe(r).paneMouseMove(B)),onPointerup:H[6]||(H[6]=B=>w.value?Pe(B):void 0),onPointerleave:H[7]||(H[7]=B=>fe(r).paneMouseLeave(B))},[nr(Te.$slots,"default"),fe(o)&&fe(a)?(ae(),tn(cN,{key:0,"user-selection-rect":fe(a)},null,8,["user-selection-rect"])):$e("",!0),fe(u)&&fe(f).length?(ae(),tn(hN,{key:1})):$e("",!0)],34))}}),vN={name:"Transform",compatConfig:{MODE:3}},_N=Nt({...vN,setup(t){const{viewport:e,fitViewOnInit:n,fitViewOnInitDone:i}=Dt(),r=De(()=>n.value?!i.value:!1),o=De(()=>`translate(${e.value.x}px,${e.value.y}px) scale(${e.value.zoom})`);return(s,a)=>(ae(),ge("div",{class:"vue-flow__transformationpane vue-flow__container",style:nt({transform:o.value,opacity:r.value?0:void 0})},[nr(s.$slots,"default")],4))}}),yN={name:"Viewport",compatConfig:{MODE:3}},xN=Nt({...yN,setup(t){const{minZoom:e,maxZoom:n,defaultViewport:i,translateExtent:r,zoomActivationKeyCode:o,selectionKeyCode:s,panActivationKeyCode:a,panOnScroll:l,panOnScrollMode:u,panOnScrollSpeed:c,panOnDrag:f,zoomOnDoubleClick:d,zoomOnPinch:h,zoomOnScroll:m,preventScrolling:v,noWheelClassName:g,noPanClassName:p,emits:y,connectionStartHandle:S,userSelectionActive:_,paneDragging:R,d3Zoom:N,d3Selection:F,d3ZoomHandler:x,viewport:b,viewportRef:P,paneClickDistance:M}=Dt();lN(P);const w=Lr(!1),W=Lr(!1);let E=null,k=!1,A=0,I={x:0,y:0,zoom:0};const O=na(a),z=na(s),q=na(o),te=bt(()=>(!z.value||z.value&&s.value===!0)&&(O.value||f.value)),ne=bt(()=>O.value||l.value),ye=bt(()=>s.value===!0&&te.value!==!0),Pe=bt(()=>z.value&&s.value!==!0||_.value||ye.value),Te=bt(()=>S.value!==null);Zt(()=>{if(!P.value){Ba("Viewport element is missing");return}const we=P.value,Ae=we.getBoundingClientRect(),G=BP().clickDistance(M.value).scaleExtent([e.value,n.value]).translateExtent(r.value),Y=Xn(we).call(G),L=Y.on("wheel.zoom"),U=ps.translate(i.value.x??0,i.value.y??0).scale(ar(i.value.zoom??1,e.value,n.value)),V=[[0,0],[Ae.width,Ae.height]],Z=G.constrain()(U,V,r.value);G.transform(Y,Z),G.wheelDelta(Gf),N.value=G,F.value=Y,x.value=L,b.value={x:Z.x,y:Z.y,zoom:Z.k},G.on("start",C=>{var se;if(!C.sourceEvent)return null;A=C.sourceEvent.button,w.value=!0;const re=X(C.transform);((se=C.sourceEvent)==null?void 0:se.type)==="mousedown"&&(R.value=!0),I=re,y.viewportChangeStart(re),y.moveStart({event:C,flowTransform:re})}),G.on("end",C=>{if(!C.sourceEvent)return null;if(w.value=!1,R.value=!1,H(te.value,A??0)&&!k&&y.paneContextMenu(C.sourceEvent),k=!1,B(I,C.transform)){const se=X(C.transform);I=se,y.viewportChangeEnd(se),y.moveEnd({event:C,flowTransform:se})}}),G.filter(C=>{var se;const re=q.value||m.value,oe=h.value&&C.ctrlKey,ue=C.button,D=C.type==="wheel";if(ue===1&&C.type==="mousedown"&&(ve(C,"vue-flow__node")||ve(C,"vue-flow__edge")))return!0;if(!te.value&&!re&&!ne.value&&!d.value&&!h.value||_.value||Te.value&&!D||!d.value&&C.type==="dblclick"||ve(C,g.value)&&D||ve(C,p.value)&&(!D||ne.value&&D&&!q.value)||!h.value&&C.ctrlKey&&D||!re&&!ne.value&&!oe&&D)return!1;if(!h&&C.type==="touchstart"&&((se=C.touches)==null?void 0:se.length)>1)return C.preventDefault(),!1;if(!te.value&&(C.type==="mousedown"||C.type==="touchstart")||ye.value&&Array.isArray(f.value)&&f.value.includes(0)&&ue===0||Array.isArray(f.value)&&!f.value.includes(ue)&&(C.type==="mousedown"||C.type==="touchstart"))return!1;const T=Array.isArray(f.value)&&f.value.includes(ue)||s.value===!0&&Array.isArray(f.value)&&!f.value.includes(0)||!ue||ue<=1;return(!C.ctrlKey||O.value||D)&&T}),at([_,te],()=>{_.value&&!w.value?G.on("zoom",null):_.value||G.on("zoom",C=>{b.value={x:C.transform.x,y:C.transform.y,zoom:C.transform.k};const se=X(C.transform);k=H(te.value,A??0),y.viewportChange(se),y.move({event:C,flowTransform:se})})},{immediate:!0}),at([_,ne,u,q,h,v,g],()=>{ne.value&&!q.value&&!_.value?Y.on("wheel.zoom",C=>{if(ve(C,g.value))return!1;const se=q.value||m.value,re=h.value&&C.ctrlKey;if(!(!v.value||ne.value||se||re))return!1;C.preventDefault(),C.stopImmediatePropagation();const ue=Y.property("__zoom").k||1,D=Sa();if(!O.value&&C.ctrlKey&&h.value&&D){const pe=li(C),ke=Gf(C),Ue=ue*2**ke;G.scaleTo(Y,Ue,pe,C);return}const T=C.deltaMode===1?20:1;let j=u.value===ta.Vertical?0:C.deltaX*T,he=u.value===ta.Horizontal?0:C.deltaY*T;!D&&C.shiftKey&&u.value!==ta.Vertical&&!j&&he&&(j=he,he=0),G.translateBy(Y,-(j/ue)*c.value,-(he/ue)*c.value);const Se=X(Y.property("__zoom"));E&&clearTimeout(E),W.value?(y.move({event:C,flowTransform:Se}),y.viewportChange(Se),E=setTimeout(()=>{y.moveEnd({event:C,flowTransform:Se}),y.viewportChangeEnd(Se),W.value=!1},150)):(W.value=!0,y.moveStart({event:C,flowTransform:Se}),y.viewportChangeStart(Se))},{passive:!1}):typeof L<"u"&&Y.on("wheel.zoom",function(C,se){const re=!v.value&&C.type==="wheel"&&!C.ctrlKey,oe=q.value||m.value,ue=h.value&&C.ctrlKey;if(!oe&&!l.value&&!ue&&C.type==="wheel"||re||ve(C,g.value))return null;C.preventDefault(),L.call(this,C,se)},{passive:!1})},{immediate:!0})});function H(we,Ae){return Ae===2&&Array.isArray(we)&&we.includes(2)}function B(we,Ae){return we.x!==Ae.x&&!Number.isNaN(Ae.x)||we.y!==Ae.y&&!Number.isNaN(Ae.y)||we.zoom!==Ae.k&&!Number.isNaN(Ae.k)}function X(we){return{x:we.x,y:we.y,zoom:we.k}}function ve(we,Ae){return we.target.closest(`.${Ae}`)}return(we,Ae)=>(ae(),ge("div",{ref_key:"viewportRef",ref:P,class:"vue-flow__viewport vue-flow__container"},[tt(gN,{"is-selecting":Pe.value,"selection-key-pressed":fe(z),class:lt({connecting:Te.value,dragging:fe(R),draggable:fe(f)===!0||Array.isArray(fe(f))&&fe(f).includes(0)})},{default:rn(()=>[tt(_N,null,{default:rn(()=>[nr(we.$slots,"default")]),_:3})]),_:3},8,["is-selecting","selection-key-pressed","class"])],512))}}),bN=["id"],SN=["id"],MN=["id"],wN={name:"A11yDescriptions",compatConfig:{MODE:3}},EN=Nt({...wN,setup(t){const{id:e,disableKeyboardA11y:n,ariaLiveMessage:i}=Dt();return(r,o)=>(ae(),ge(it,null,[K("div",{id:`${fe(Z_)}-${fe(e)}`,style:{display:"none"}}," Press enter or space to select a node. "+Re(fe(n)?"":"You can then use the arrow keys to move the node around.")+" You can then use the arrow keys to move the node around, press delete to remove it and press escape to cancel. ",9,bN),K("div",{id:`${fe(j_)}-${fe(e)}`,style:{display:"none"}}," Press enter or space to select an edge. You can then press delete to remove it or press escape to cancel. ",8,SN),fe(n)?$e("",!0):(ae(),ge("div",{key:0,id:`${fe(GP)}-${fe(e)}`,"aria-live":"assertive","aria-atomic":"true",style:{position:"absolute",width:"1px",height:"1px",margin:"-1px",border:"0",padding:"0",overflow:"hidden",clip:"rect(0px, 0px, 0px, 0px)","clip-path":"inset(100%)"}},Re(fe(i)),9,MN))],64))}});function TN(){const t=Dt();at(()=>t.viewportHelper.value.viewportInitialized,e=>{e&&setTimeout(()=>{t.emits.init(t),t.emits.paneReady(t)},1)})}function CN(t,e,n){return n===qe.Left?t-e:n===qe.Right?t+e:t}function AN(t,e,n){return n===qe.Top?t-e:n===qe.Bottom?t+e:t}const Zh=function({radius:t=10,centerX:e=0,centerY:n=0,position:i=qe.Top,type:r}){return wt("circle",{class:`vue-flow__edgeupdater vue-flow__edgeupdater-${r}`,cx:CN(e,t,i),cy:AN(n,t,i),r:t,stroke:"transparent",fill:"transparent"})};Zh.props=["radius","centerX","centerY","position","type"];Zh.compatConfig={MODE:3};const Vg=Zh,RN=Nt({name:"Edge",compatConfig:{MODE:3},props:["id"],setup(t){const{id:e,addSelectedEdges:n,connectionMode:i,edgeUpdaterRadius:r,emits:o,nodesSelectionActive:s,noPanClassName:a,getEdgeTypes:l,removeSelectedEdges:u,findEdge:c,findNode:f,isValidConnection:d,multiSelectionActive:h,disableKeyboardA11y:m,elementsSelectable:v,edgesUpdatable:g,edgesFocusable:p,hooks:y}=Dt(),S=De(()=>c(t.id)),{emit:_,on:R}=x3(S.value,o),N=Pn(rc),F=Mi(),x=Ne(!1),b=Ne(!1),P=Ne(""),M=Ne(null),w=Ne("source"),W=Ne(null),E=bt(()=>typeof S.value.selectable>"u"?v.value:S.value.selectable),k=bt(()=>typeof S.value.updatable>"u"?g.value:S.value.updatable),A=bt(()=>typeof S.value.focusable>"u"?p.value:S.value.focusable);Or(v3,t.id),Or(_3,W);const I=De(()=>S.value.class instanceof Function?S.value.class(S.value):S.value.class),O=De(()=>S.value.style instanceof Function?S.value.style(S.value):S.value.style),z=De(()=>{const U=S.value.type||"default",V=N?.[`edge-${U}`];if(V)return V;let Z=S.value.template??l.value[U];if(typeof Z=="string"&&F){const C=Object.keys(F.appContext.components);C&&C.includes(U)&&(Z=yh(U,!1))}return Z&&typeof Z!="string"?Z:(o.error(new Yt(Wt.EDGE_TYPE_MISSING,Z)),!1)}),{handlePointerDown:q}=my({nodeId:P,handleId:M,type:w,isValidConnection:d,edgeUpdaterType:w,onEdgeUpdate:ye,onEdgeUpdateEnd:Pe});return()=>{const U=f(S.value.source),V=f(S.value.target),Z="pathOptions"in S.value?S.value.pathOptions:{};if(!U&&!V)return o.error(new Yt(Wt.EDGE_SOURCE_TARGET_MISSING,S.value.id,S.value.source,S.value.target)),null;if(!U)return o.error(new Yt(Wt.EDGE_SOURCE_MISSING,S.value.id,S.value.source)),null;if(!V)return o.error(new Yt(Wt.EDGE_TARGET_MISSING,S.value.id,S.value.target)),null;if(!S.value||S.value.hidden||U.hidden||V.hidden)return null;let C;i.value===zr.Strict?C=U.handleBounds.source:C=[...U.handleBounds.source||[],...U.handleBounds.target||[]];const se=Ag(C,S.value.sourceHandle);let re;i.value===zr.Strict?re=V.handleBounds.target:re=[...V.handleBounds.target||[],...V.handleBounds.source||[]];const oe=Ag(re,S.value.targetHandle),ue=se?.position||qe.Bottom,D=oe?.position||qe.Top,{x:T,y:j}=ms(U,se,ue),{x:he,y:Se}=ms(V,oe,D);return S.value.sourceX=T,S.value.sourceY=j,S.value.targetX=he,S.value.targetY=Se,wt("g",{ref:W,key:t.id,"data-id":t.id,class:["vue-flow__edge",`vue-flow__edge-${z.value===!1?"default":S.value.type||"default"}`,a.value,I.value,{updating:x.value,selected:S.value.selected,animated:S.value.animated,inactive:!E.value&&!y.value.edgeClick.hasListeners()}],tabIndex:A.value?0:void 0,"aria-label":S.value.ariaLabel===null?void 0:S.value.ariaLabel??`Edge from ${S.value.source} to ${S.value.target}`,"aria-describedby":A.value?`${j_}-${e}`:void 0,"aria-roledescription":"edge",role:A.value?"group":"img",...S.value.domAttributes,onClick:H,onContextmenu:B,onDblclick:X,onMouseenter:ve,onMousemove:we,onMouseleave:Ae,onKeyDown:A.value?L:void 0},[b.value?null:wt(z.value===!1?l.value.default:z.value,{id:t.id,sourceNode:U,targetNode:V,source:S.value.source,target:S.value.target,type:S.value.type,updatable:k.value,selected:S.value.selected,animated:S.value.animated,label:S.value.label,labelStyle:S.value.labelStyle,labelShowBg:S.value.labelShowBg,labelBgStyle:S.value.labelBgStyle,labelBgPadding:S.value.labelBgPadding,labelBgBorderRadius:S.value.labelBgBorderRadius,data:S.value.data,events:{...S.value.events,...R},style:O.value,markerStart:`url('#${ba(S.value.markerStart,e)}')`,markerEnd:`url('#${ba(S.value.markerEnd,e)}')`,sourcePosition:ue,targetPosition:D,sourceX:T,sourceY:j,targetX:he,targetY:Se,sourceHandleId:S.value.sourceHandle,targetHandleId:S.value.targetHandle,interactionWidth:S.value.interactionWidth,...Z}),[k.value==="source"||k.value===!0?[wt("g",{onMousedown:G,onMouseenter:te,onMouseout:ne},wt(Vg,{position:ue,centerX:T,centerY:j,radius:r.value,type:"source","data-type":"source"}))]:null,k.value==="target"||k.value===!0?[wt("g",{onMousedown:Y,onMouseenter:te,onMouseout:ne},wt(Vg,{position:D,centerX:he,centerY:Se,radius:r.value,type:"target","data-type":"target"}))]:null]])};function te(){x.value=!0}function ne(){x.value=!1}function ye(U,V){_.update({event:U,edge:S.value,connection:V})}function Pe(U){_.updateEnd({event:U,edge:S.value}),b.value=!1}function Te(U,V){U.button===0&&(b.value=!0,P.value=V?S.value.target:S.value.source,M.value=(V?S.value.targetHandle:S.value.sourceHandle)??null,w.value=V?"target":"source",_.updateStart({event:U,edge:S.value}),q(U))}function H(U){var V;const Z={event:U,edge:S.value};E.value&&(s.value=!1,S.value.selected&&h.value?(u([S.value]),(V=W.value)==null||V.blur()):n([S.value])),_.click(Z)}function B(U){_.contextMenu({event:U,edge:S.value})}function X(U){_.doubleClick({event:U,edge:S.value})}function ve(U){_.mouseEnter({event:U,edge:S.value})}function we(U){_.mouseMove({event:U,edge:S.value})}function Ae(U){_.mouseLeave({event:U,edge:S.value})}function G(U){Te(U,!0)}function Y(U){Te(U,!1)}function L(U){var V;!m.value&&J_.includes(U.key)&&E.value&&(U.key==="Escape"?((V=W.value)==null||V.blur(),u([c(t.id)])):n([c(t.id)]))}}}),IN=RN,PN=Nt({name:"ConnectionLine",compatConfig:{MODE:3},setup(){var t;const{id:e,connectionMode:n,connectionStartHandle:i,connectionEndHandle:r,connectionPosition:o,connectionLineType:s,connectionLineStyle:a,connectionLineOptions:l,connectionStatus:u,viewport:c,findNode:f}=Dt(),d=(t=Pn(rc))==null?void 0:t["connection-line"],h=De(()=>{var y;return f((y=i.value)==null?void 0:y.nodeId)}),m=De(()=>{var y;return f((y=r.value)==null?void 0:y.nodeId)??null}),v=De(()=>({x:(o.value.x-c.value.x)/c.value.zoom,y:(o.value.y-c.value.y)/c.value.zoom})),g=De(()=>l.value.markerStart?`url(#${ba(l.value.markerStart,e)})`:""),p=De(()=>l.value.markerEnd?`url(#${ba(l.value.markerEnd,e)})`:"");return()=>{var y,S,_;if(!h.value||!i.value)return null;const R=i.value.id,N=i.value.type,F=h.value.handleBounds;let x=F?.[N]??[];if(n.value===zr.Loose){const O=F?.[N==="source"?"target":"source"]??[];x=[...x,...O]}if(!x)return null;const b=(R?x.find(O=>O.id===R):x[0])??null,P=b?.position??qe.Top,{x:M,y:w}=ms(h.value,b,P);let W=null;m.value&&(n.value===zr.Strict?W=((y=m.value.handleBounds[N==="source"?"target":"source"])==null?void 0:y.find(O=>{var z;return O.id===((z=r.value)==null?void 0:z.id)}))||null:W=((S=[...m.value.handleBounds.source??[],...m.value.handleBounds.target??[]])==null?void 0:S.find(O=>{var z;return O.id===((z=r.value)==null?void 0:z.id)}))||null);const E=((_=r.value)==null?void 0:_.position)??(P?Wf[P]:null);if(!P||!E)return null;const k=s.value??l.value.type??ao.Bezier;let A="";const I={sourceX:M,sourceY:w,sourcePosition:P,targetX:v.value.x,targetY:v.value.y,targetPosition:E};return k===ao.Bezier?[A]=by(I):k===ao.Step?[A]=Yf({...I,borderRadius:0}):k===ao.SmoothStep?[A]=Yf(I):k===ao.SimpleBezier?[A]=Sy(I):A=`M${M},${w} ${v.value.x},${v.value.y}`,wt("svg",{class:"vue-flow__edges vue-flow__connectionline vue-flow__container"},wt("g",{class:"vue-flow__connection"},d?wt(d,{sourceX:M,sourceY:w,sourcePosition:P,targetX:v.value.x,targetY:v.value.y,targetPosition:E,sourceNode:h.value,sourceHandle:b,targetNode:m.value,targetHandle:W,markerEnd:p.value,markerStart:g.value,connectionStatus:u.value}):wt("path",{d:A,class:[l.value.class,u.value,"vue-flow__connection-path"],style:{...a.value,...l.value.style},"marker-end":p.value,"marker-start":g.value})))}}}),NN=PN,DN=["id","markerWidth","markerHeight","markerUnits","orient"],LN={name:"MarkerType",compatConfig:{MODE:3}},UN=Nt({...LN,props:{id:{},type:{},color:{default:"none"},width:{default:12.5},height:{default:12.5},markerUnits:{default:"strokeWidth"},orient:{default:"auto-start-reverse"},strokeWidth:{default:1}},setup(t){return(e,n)=>(ae(),ge("marker",{id:e.id,class:"vue-flow__arrowhead",viewBox:"-10 -10 20 20",refX:"0",refY:"0",markerWidth:`${e.width}`,markerHeight:`${e.height}`,markerUnits:e.markerUnits,orient:e.orient},[e.type===fe($f).ArrowClosed?(ae(),ge("polyline",{key:0,style:nt({stroke:e.color,fill:e.color,strokeWidth:e.strokeWidth}),"stroke-linecap":"round","stroke-linejoin":"round",points:"-5,-4 0,0 -5,4 -5,-4"},null,4)):$e("",!0),e.type===fe($f).Arrow?(ae(),ge("polyline",{key:1,style:nt({stroke:e.color,strokeWidth:e.strokeWidth}),"stroke-linecap":"round","stroke-linejoin":"round",fill:"none",points:"-5,-4 0,0 -5,4"},null,4)):$e("",!0)],8,DN))}}),FN={class:"vue-flow__marker vue-flow__container","aria-hidden":"true"},ON={name:"MarkerDefinitions",compatConfig:{MODE:3}},BN=Nt({...ON,setup(t){const{id:e,edges:n,connectionLineOptions:i,defaultMarkerColor:r}=Dt(),o=De(()=>{const s=new Set,a=[],l=u=>{if(u){const c=ba(u,e);s.has(c)||(typeof u=="object"?a.push({...u,id:c,color:u.color||r.value}):a.push({id:c,color:r.value,type:u}),s.add(c))}};for(const u of[i.value.markerEnd,i.value.markerStart])l(u);for(const u of n.value)for(const c of[u.markerStart,u.markerEnd])l(c);return a.sort((u,c)=>u.id.localeCompare(c.id))});return(s,a)=>(ae(),ge("svg",FN,[K("defs",null,[(ae(!0),ge(it,null,Gt(o.value,l=>(ae(),tn(UN,{id:l.id,key:l.id,type:l.type,color:l.color,width:l.width,height:l.height,markerUnits:l.markerUnits,"stroke-width":l.strokeWidth,orient:l.orient},null,8,["id","type","color","width","height","markerUnits","stroke-width","orient"]))),128))])]))}}),kN={name:"Edges",compatConfig:{MODE:3}},VN=Nt({...kN,setup(t){const{findNode:e,getEdges:n,elevateEdgesOnSelect:i}=Dt();return(r,o)=>(ae(),ge(it,null,[tt(BN),(ae(!0),ge(it,null,Gt(fe(n),s=>(ae(),ge("svg",{key:s.id,class:"vue-flow__edges vue-flow__container",style:nt({zIndex:fe(o3)(s,fe(e),fe(i))})},[tt(fe(IN),{id:s.id},null,8,["id"])],4))),128)),tt(fe(NN))],64))}}),zN=Nt({name:"Node",compatConfig:{MODE:3},props:["id","resizeObserver"],setup(t){const{id:e,noPanClassName:n,selectNodesOnDrag:i,nodesSelectionActive:r,multiSelectionActive:o,emits:s,removeSelectedNodes:a,addSelectedNodes:l,updateNodeDimensions:u,onUpdateNodeInternals:c,getNodeTypes:f,nodeExtent:d,elevateNodesOnSelect:h,disableKeyboardA11y:m,ariaLiveMessage:v,snapToGrid:g,snapGrid:p,nodeDragThreshold:y,nodesDraggable:S,elementsSelectable:_,nodesConnectable:R,nodesFocusable:N,hooks:F}=Dt(),x=Ne(null);Or(fy,x),Or(Kh,t.id);const b=Pn(rc),P=Mi(),M=vy(),{node:w,parentNode:W}=gy(t.id),{emit:E,on:k}=M3(w,s),A=bt(()=>typeof w.draggable>"u"?S.value:w.draggable),I=bt(()=>typeof w.selectable>"u"?_.value:w.selectable),O=bt(()=>typeof w.connectable>"u"?R.value:w.connectable),z=bt(()=>typeof w.focusable>"u"?N.value:w.focusable),q=De(()=>I.value||A.value||F.value.nodeClick.hasListeners()||F.value.nodeDoubleClick.hasListeners()||F.value.nodeMouseEnter.hasListeners()||F.value.nodeMouseMove.hasListeners()||F.value.nodeMouseLeave.hasListeners()),te=bt(()=>!!w.dimensions.width&&!!w.dimensions.height),ne=De(()=>{const V=w.type||"default",Z=b?.[`node-${V}`];if(Z)return Z;let C=w.template||f.value[V];if(typeof C=="string"&&P){const se=Object.keys(P.appContext.components);se&&se.includes(V)&&(C=yh(V,!1))}return C&&typeof C!="string"?C:(s.error(new Yt(Wt.NODE_TYPE_MISSING,C)),!1)}),ye=hy({id:t.id,el:x,disabled:()=>!A.value,selectable:I,dragHandle:()=>w.dragHandle,onStart(V){E.dragStart(V)},onDrag(V){E.drag(V)},onStop(V){E.dragStop(V)},onClick(V){L(V)}}),Pe=De(()=>w.class instanceof Function?w.class(w):w.class),Te=De(()=>{const V=(w.style instanceof Function?w.style(w):w.style)||{},Z=w.width instanceof Function?w.width(w):w.width,C=w.height instanceof Function?w.height(w):w.height;return!V.width&&Z&&(V.width=typeof Z=="string"?Z:`${Z}px`),!V.height&&C&&(V.height=typeof C=="string"?C:`${C}px`),V}),H=bt(()=>Number(w.zIndex??Te.value.zIndex??0));return c(V=>{(V.includes(t.id)||!V.length)&&X()}),Zt(()=>{at(()=>w.hidden,(V=!1,Z,C)=>{!V&&x.value&&(t.resizeObserver.observe(x.value),C(()=>{x.value&&t.resizeObserver.unobserve(x.value)}))},{immediate:!0,flush:"post"})}),at([()=>w.type,()=>w.sourcePosition,()=>w.targetPosition],()=>{qt(()=>{u([{id:t.id,nodeElement:x.value,forceUpdate:!0}])})}),at([()=>w.position.x,()=>w.position.y,()=>{var V;return(V=W.value)==null?void 0:V.computedPosition.x},()=>{var V;return(V=W.value)==null?void 0:V.computedPosition.y},()=>{var V;return(V=W.value)==null?void 0:V.computedPosition.z},H,()=>w.selected,()=>w.dimensions.height,()=>w.dimensions.width,()=>{var V;return(V=W.value)==null?void 0:V.dimensions.height},()=>{var V;return(V=W.value)==null?void 0:V.dimensions.width}],([V,Z,C,se,re,oe])=>{const ue={x:V,y:Z,z:oe+(h.value&&w.selected?1e3:0)};typeof C<"u"&&typeof se<"u"?w.computedPosition=QP({x:C,y:se,z:re},ue):w.computedPosition=ue},{flush:"post",immediate:!0}),at([()=>w.extent,d],([V,Z],[C,se])=>{(V!==C||Z!==se)&&B()}),w.extent==="parent"||typeof w.extent=="object"&&"range"in w.extent&&w.extent.range==="parent"?Df(()=>te).toBe(!0).then(B):B(),()=>w.hidden?null:wt("div",{ref:x,"data-id":w.id,class:["vue-flow__node",`vue-flow__node-${ne.value===!1?"default":w.type||"default"}`,{[n.value]:A.value,dragging:ye?.value,draggable:A.value,selected:w.selected,selectable:I.value,parent:w.isParent},Pe.value],style:{visibility:te.value?"visible":"hidden",zIndex:w.computedPosition.z??H.value,transform:`translate(${w.computedPosition.x}px,${w.computedPosition.y}px)`,pointerEvents:q.value?"all":"none",...Te.value},tabIndex:z.value?0:void 0,role:z.value?"group":void 0,"aria-describedby":m.value?void 0:`${Z_}-${e}`,"aria-label":w.ariaLabel,"aria-roledescription":"node",...w.domAttributes,onMouseenter:ve,onMousemove:we,onMouseleave:Ae,onContextmenu:G,onClick:L,onDblclick:Y,onKeydown:U},[wt(ne.value===!1?f.value.default:ne.value,{id:w.id,type:w.type,data:w.data,events:{...w.events,...k},selected:w.selected,resizing:w.resizing,dragging:ye.value,connectable:O.value,position:w.computedPosition,dimensions:w.dimensions,isValidTargetPos:w.isValidTargetPos,isValidSourcePos:w.isValidSourcePos,parent:w.parentNode,parentNodeId:w.parentNode,zIndex:w.computedPosition.z??H.value,targetPosition:w.targetPosition,sourcePosition:w.sourcePosition,label:w.label,dragHandle:w.dragHandle,onUpdateNodeInternals:X})]);function B(){const V=w.computedPosition,{computedPosition:Z,position:C}=Yh(w,g.value?ic(V,p.value):V,s.error,d.value,W.value);(w.computedPosition.x!==Z.x||w.computedPosition.y!==Z.y)&&(w.computedPosition={...w.computedPosition,...Z}),(w.position.x!==C.x||w.position.y!==C.y)&&(w.position=C)}function X(){x.value&&u([{id:t.id,nodeElement:x.value,forceUpdate:!0}])}function ve(V){ye?.value||E.mouseEnter({event:V,node:w})}function we(V){ye?.value||E.mouseMove({event:V,node:w})}function Ae(V){ye?.value||E.mouseLeave({event:V,node:w})}function G(V){return E.contextMenu({event:V,node:w})}function Y(V){return E.doubleClick({event:V,node:w})}function L(V){I.value&&(!i.value||!A.value||y.value>0)&&Xf(w,o.value,l,a,r,!1,x.value),E.click({event:V,node:w})}function U(V){if(!(Hf(V)||m.value))if(J_.includes(V.key)&&I.value){const Z=V.key==="Escape";Xf(w,o.value,l,a,r,Z,x.value)}else A.value&&w.selected&&is[V.key]&&(V.preventDefault(),v.value=`Moved selected node ${V.key.replace("Arrow","").toLowerCase()}. New position, x: ${~~w.position.x}, y: ${~~w.position.y}`,M({x:is[V.key].x,y:is[V.key].y},V.shiftKey))}}}),$N=zN;function HN(t={includeHiddenNodes:!1}){const{nodes:e}=Dt();return De(()=>{if(e.value.length===0)return!1;for(const n of e.value)if((t.includeHiddenNodes||!n.hidden)&&(n?.handleBounds===void 0||n.dimensions.width===0||n.dimensions.height===0))return!1;return!0})}const GN={class:"vue-flow__nodes vue-flow__container"},WN={name:"Nodes",compatConfig:{MODE:3}},XN=Nt({...WN,setup(t){const{getNodes:e,updateNodeDimensions:n,emits:i}=Dt(),r=HN(),o=Ne();return at(r,s=>{s&&qt(()=>{i.nodesInitialized(e.value)})},{immediate:!0}),Zt(()=>{o.value=new ResizeObserver(s=>{const a=s.map(l=>({id:l.target.getAttribute("data-id"),nodeElement:l.target,forceUpdate:!0}));qt(()=>n(a))})}),cr(()=>{var s;return(s=o.value)==null?void 0:s.disconnect()}),(s,a)=>(ae(),ge("div",GN,[o.value?(ae(!0),ge(it,{key:0},Gt(fe(e),(l,u,c,f)=>{const d=[l.id];if(f&&f.key===l.id&&h1(f,d))return f;const h=(ae(),tn(fe($N),{id:l.id,key:l.id,"resize-observer":o.value},null,8,["id","resize-observer"]));return h.memo=d,h},a,0),128)):$e("",!0)]))}});function YN(){const{emits:t}=Dt();Zt(()=>{if(dy()){const e=document.querySelector(".vue-flow__pane");e&&window.getComputedStyle(e).zIndex!=="1"&&t.error(new Yt(Wt.MISSING_STYLES))}})}const qN=K("div",{class:"vue-flow__edge-labels"},null,-1),KN={name:"VueFlow",compatConfig:{MODE:3}},ZN=Nt({...KN,props:{id:{},modelValue:{},nodes:{},edges:{},edgeTypes:{},nodeTypes:{},connectionMode:{},connectionLineType:{},connectionLineStyle:{default:void 0},connectionLineOptions:{default:void 0},connectionRadius:{},isValidConnection:{type:[Function,null],default:void 0},deleteKeyCode:{default:void 0},selectionKeyCode:{type:[Boolean,null],default:void 0},multiSelectionKeyCode:{default:void 0},zoomActivationKeyCode:{default:void 0},panActivationKeyCode:{default:void 0},snapToGrid:{type:Boolean,default:void 0},snapGrid:{},onlyRenderVisibleElements:{type:Boolean,default:void 0},edgesUpdatable:{type:[Boolean,String],default:void 0},nodesDraggable:{type:Boolean,default:void 0},nodesConnectable:{type:Boolean,default:void 0},nodeDragThreshold:{},elementsSelectable:{type:Boolean,default:void 0},selectNodesOnDrag:{type:Boolean,default:void 0},panOnDrag:{type:[Boolean,Array],default:void 0},minZoom:{},maxZoom:{},defaultViewport:{},translateExtent:{},nodeExtent:{},defaultMarkerColor:{},zoomOnScroll:{type:Boolean,default:void 0},zoomOnPinch:{type:Boolean,default:void 0},panOnScroll:{type:Boolean,default:void 0},panOnScrollSpeed:{},panOnScrollMode:{},paneClickDistance:{},zoomOnDoubleClick:{type:Boolean,default:void 0},preventScrolling:{type:Boolean,default:void 0},selectionMode:{},edgeUpdaterRadius:{},fitViewOnInit:{type:Boolean,default:void 0},connectOnClick:{type:Boolean,default:void 0},applyDefault:{type:Boolean,default:void 0},autoConnect:{type:[Boolean,Function],default:void 0},noDragClassName:{},noWheelClassName:{},noPanClassName:{},defaultEdgeOptions:{},elevateEdgesOnSelect:{type:Boolean,default:void 0},elevateNodesOnSelect:{type:Boolean,default:void 0},disableKeyboardA11y:{type:Boolean,default:void 0},edgesFocusable:{type:Boolean,default:void 0},nodesFocusable:{type:Boolean,default:void 0},autoPanOnConnect:{type:Boolean,default:void 0},autoPanOnNodeDrag:{type:Boolean,default:void 0},autoPanSpeed:{}},emits:["nodesChange","edgesChange","nodesInitialized","paneReady","init","updateNodeInternals","error","connect","connectStart","connectEnd","clickConnectStart","clickConnectEnd","moveStart","move","moveEnd","selectionDragStart","selectionDrag","selectionDragStop","selectionContextMenu","selectionStart","selectionEnd","viewportChangeStart","viewportChange","viewportChangeEnd","paneScroll","paneClick","paneContextMenu","paneMouseEnter","paneMouseMove","paneMouseLeave","edgeUpdate","edgeContextMenu","edgeMouseEnter","edgeMouseMove","edgeMouseLeave","edgeDoubleClick","edgeClick","edgeUpdateStart","edgeUpdateEnd","nodeContextMenu","nodeMouseEnter","nodeMouseMove","nodeMouseLeave","nodeDoubleClick","nodeClick","nodeDragStart","nodeDrag","nodeDragStop","miniMapNodeClick","miniMapNodeDoubleClick","miniMapNodeMouseEnter","miniMapNodeMouseMove","miniMapNodeMouseLeave","update:modelValue","update:nodes","update:edges"],setup(t,{expose:e,emit:n}){const i=t,r=u0(),o=ld(i,"modelValue",n),s=ld(i,"nodes",n),a=ld(i,"edges",n),l=Dt(i),u=C3({modelValue:o,nodes:s,edges:a},i,l);return R3(n,l.hooks),TN(),YN(),Or(rc,r),_s(u),e(l),(c,f)=>(ae(),ge("div",{ref:fe(l).vueFlowRef,class:"vue-flow"},[tt(xN,null,{default:rn(()=>[tt(VN),qN,tt(XN),nr(c.$slots,"zoom-pane")]),_:3}),nr(c.$slots,"default"),tt(EN)],512))}}),jN={name:"Panel",compatConfig:{MODE:3}},JN=Nt({...jN,props:{position:{}},setup(t){const e=t,{userSelectionActive:n}=Dt(),i=De(()=>`${e.position}`.split("-"));return(r,o)=>(ae(),ge("div",{class:lt(["vue-flow__panel",i.value]),style:nt({pointerEvents:fe(n)?"none":"all"})},[nr(r.$slots,"default")],6))}});var QN={value:()=>{}};function jh(){for(var t=0,e=arguments.length,n={},i;t<e;++t){if(!(i=arguments[t]+"")||i in n||/[\s.]/.test(i))throw new Error("illegal type: "+i);n[i]=[]}return new Yl(n)}function Yl(t){this._=t}function eD(t,e){return t.trim().split(/^|\s+/).map(function(n){var i="",r=n.indexOf(".");if(r>=0&&(i=n.slice(r+1),n=n.slice(0,r)),n&&!e.hasOwnProperty(n))throw new Error("unknown type: "+n);return{type:n,name:i}})}Yl.prototype=jh.prototype={constructor:Yl,on:function(t,e){var n=this._,i=eD(t+"",n),r,o=-1,s=i.length;if(arguments.length<2){for(;++o<s;)if((r=(t=i[o]).type)&&(r=tD(n[r],t.name)))return r;return}if(e!=null&&typeof e!="function")throw new Error("invalid callback: "+e);for(;++o<s;)if(r=(t=i[o]).type)n[r]=zg(n[r],t.name,e);else if(e==null)for(r in n)n[r]=zg(n[r],t.name,null);return this},copy:function(){var t={},e=this._;for(var n in e)t[n]=e[n].slice();return new Yl(t)},call:function(t,e){if((r=arguments.length-2)>0)for(var n=new Array(r),i=0,r,o;i<r;++i)n[i]=arguments[i+2];if(!this._.hasOwnProperty(t))throw new Error("unknown type: "+t);for(o=this._[t],i=0,r=o.length;i<r;++i)o[i].value.apply(e,n)},apply:function(t,e,n){if(!this._.hasOwnProperty(t))throw new Error("unknown type: "+t);for(var i=this._[t],r=0,o=i.length;r<o;++r)i[r].value.apply(e,n)}};function tD(t,e){for(var n=0,i=t.length,r;n<i;++n)if((r=t[n]).name===e)return r.value}function zg(t,e,n){for(var i=0,r=t.length;i<r;++i)if(t[i].name===e){t[i]=QN,t=t.slice(0,i).concat(t.slice(i+1));break}return n!=null&&t.push({name:e,value:n}),t}var qf="http://www.w3.org/1999/xhtml";const $g={svg:"http://www.w3.org/2000/svg",xhtml:qf,xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"};function uc(t){var e=t+="",n=e.indexOf(":");return n>=0&&(e=t.slice(0,n))!=="xmlns"&&(t=t.slice(n+1)),$g.hasOwnProperty(e)?{space:$g[e],local:t}:t}function nD(t){return function(){var e=this.ownerDocument,n=this.namespaceURI;return n===qf&&e.documentElement.namespaceURI===qf?e.createElement(t):e.createElementNS(n,t)}}function iD(t){return function(){return this.ownerDocument.createElementNS(t.space,t.local)}}function wy(t){var e=uc(t);return(e.local?iD:nD)(e)}function rD(){}function Jh(t){return t==null?rD:function(){return this.querySelector(t)}}function oD(t){typeof t!="function"&&(t=Jh(t));for(var e=this._groups,n=e.length,i=new Array(n),r=0;r<n;++r)for(var o=e[r],s=o.length,a=i[r]=new Array(s),l,u,c=0;c<s;++c)(l=o[c])&&(u=t.call(l,l.__data__,c,o))&&("__data__"in l&&(u.__data__=l.__data__),a[c]=u);return new Ln(i,this._parents)}function sD(t){return t==null?[]:Array.isArray(t)?t:Array.from(t)}function aD(){return[]}function Ey(t){return t==null?aD:function(){return this.querySelectorAll(t)}}function lD(t){return function(){return sD(t.apply(this,arguments))}}function uD(t){typeof t=="function"?t=lD(t):t=Ey(t);for(var e=this._groups,n=e.length,i=[],r=[],o=0;o<n;++o)for(var s=e[o],a=s.length,l,u=0;u<a;++u)(l=s[u])&&(i.push(t.call(l,l.__data__,u,s)),r.push(l));return new Ln(i,r)}function Ty(t){return function(){return this.matches(t)}}function Cy(t){return function(e){return e.matches(t)}}var cD=Array.prototype.find;function dD(t){return function(){return cD.call(this.children,t)}}function fD(){return this.firstElementChild}function hD(t){return this.select(t==null?fD:dD(typeof t=="function"?t:Cy(t)))}var pD=Array.prototype.filter;function mD(){return Array.from(this.children)}function gD(t){return function(){return pD.call(this.children,t)}}function vD(t){return this.selectAll(t==null?mD:gD(typeof t=="function"?t:Cy(t)))}function _D(t){typeof t!="function"&&(t=Ty(t));for(var e=this._groups,n=e.length,i=new Array(n),r=0;r<n;++r)for(var o=e[r],s=o.length,a=i[r]=[],l,u=0;u<s;++u)(l=o[u])&&t.call(l,l.__data__,u,o)&&a.push(l);return new Ln(i,this._parents)}function Ay(t){return new Array(t.length)}function yD(){return new Ln(this._enter||this._groups.map(Ay),this._parents)}function wu(t,e){this.ownerDocument=t.ownerDocument,this.namespaceURI=t.namespaceURI,this._next=null,this._parent=t,this.__data__=e}wu.prototype={constructor:wu,appendChild:function(t){return this._parent.insertBefore(t,this._next)},insertBefore:function(t,e){return this._parent.insertBefore(t,e)},querySelector:function(t){return this._parent.querySelector(t)},querySelectorAll:function(t){return this._parent.querySelectorAll(t)}};function xD(t){return function(){return t}}function bD(t,e,n,i,r,o){for(var s=0,a,l=e.length,u=o.length;s<u;++s)(a=e[s])?(a.__data__=o[s],i[s]=a):n[s]=new wu(t,o[s]);for(;s<l;++s)(a=e[s])&&(r[s]=a)}function SD(t,e,n,i,r,o,s){var a,l,u=new Map,c=e.length,f=o.length,d=new Array(c),h;for(a=0;a<c;++a)(l=e[a])&&(d[a]=h=s.call(l,l.__data__,a,e)+"",u.has(h)?r[a]=l:u.set(h,l));for(a=0;a<f;++a)h=s.call(t,o[a],a,o)+"",(l=u.get(h))?(i[a]=l,l.__data__=o[a],u.delete(h)):n[a]=new wu(t,o[a]);for(a=0;a<c;++a)(l=e[a])&&u.get(d[a])===l&&(r[a]=l)}function MD(t){return t.__data__}function wD(t,e){if(!arguments.length)return Array.from(this,MD);var n=e?SD:bD,i=this._parents,r=this._groups;typeof t!="function"&&(t=xD(t));for(var o=r.length,s=new Array(o),a=new Array(o),l=new Array(o),u=0;u<o;++u){var c=i[u],f=r[u],d=f.length,h=ED(t.call(c,c&&c.__data__,u,i)),m=h.length,v=a[u]=new Array(m),g=s[u]=new Array(m),p=l[u]=new Array(d);n(c,f,v,g,p,h,e);for(var y=0,S=0,_,R;y<m;++y)if(_=v[y]){for(y>=S&&(S=y+1);!(R=g[S])&&++S<m;);_._next=R||null}}return s=new Ln(s,i),s._enter=a,s._exit=l,s}function ED(t){return typeof t=="object"&&"length"in t?t:Array.from(t)}function TD(){return new Ln(this._exit||this._groups.map(Ay),this._parents)}function CD(t,e,n){var i=this.enter(),r=this,o=this.exit();return typeof t=="function"?(i=t(i),i&&(i=i.selection())):i=i.append(t+""),e!=null&&(r=e(r),r&&(r=r.selection())),n==null?o.remove():n(o),i&&r?i.merge(r).order():r}function AD(t){for(var e=t.selection?t.selection():t,n=this._groups,i=e._groups,r=n.length,o=i.length,s=Math.min(r,o),a=new Array(r),l=0;l<s;++l)for(var u=n[l],c=i[l],f=u.length,d=a[l]=new Array(f),h,m=0;m<f;++m)(h=u[m]||c[m])&&(d[m]=h);for(;l<r;++l)a[l]=n[l];return new Ln(a,this._parents)}function RD(){for(var t=this._groups,e=-1,n=t.length;++e<n;)for(var i=t[e],r=i.length-1,o=i[r],s;--r>=0;)(s=i[r])&&(o&&s.compareDocumentPosition(o)^4&&o.parentNode.insertBefore(s,o),o=s);return this}function ID(t){t||(t=PD);function e(f,d){return f&&d?t(f.__data__,d.__data__):!f-!d}for(var n=this._groups,i=n.length,r=new Array(i),o=0;o<i;++o){for(var s=n[o],a=s.length,l=r[o]=new Array(a),u,c=0;c<a;++c)(u=s[c])&&(l[c]=u);l.sort(e)}return new Ln(r,this._parents).order()}function PD(t,e){return t<e?-1:t>e?1:t>=e?0:NaN}function ND(){var t=arguments[0];return arguments[0]=this,t.apply(null,arguments),this}function DD(){return Array.from(this)}function LD(){for(var t=this._groups,e=0,n=t.length;e<n;++e)for(var i=t[e],r=0,o=i.length;r<o;++r){var s=i[r];if(s)return s}return null}function UD(){let t=0;for(const e of this)++t;return t}function FD(){return!this.node()}function OD(t){for(var e=this._groups,n=0,i=e.length;n<i;++n)for(var r=e[n],o=0,s=r.length,a;o<s;++o)(a=r[o])&&t.call(a,a.__data__,o,r);return this}function BD(t){return function(){this.removeAttribute(t)}}function kD(t){return function(){this.removeAttributeNS(t.space,t.local)}}function VD(t,e){return function(){this.setAttribute(t,e)}}function zD(t,e){return function(){this.setAttributeNS(t.space,t.local,e)}}function $D(t,e){return function(){var n=e.apply(this,arguments);n==null?this.removeAttribute(t):this.setAttribute(t,n)}}function HD(t,e){return function(){var n=e.apply(this,arguments);n==null?this.removeAttributeNS(t.space,t.local):this.setAttributeNS(t.space,t.local,n)}}function GD(t,e){var n=uc(t);if(arguments.length<2){var i=this.node();return n.local?i.getAttributeNS(n.space,n.local):i.getAttribute(n)}return this.each((e==null?n.local?kD:BD:typeof e=="function"?n.local?HD:$D:n.local?zD:VD)(n,e))}function Ry(t){return t.ownerDocument&&t.ownerDocument.defaultView||t.document&&t||t.defaultView}function WD(t){return function(){this.style.removeProperty(t)}}function XD(t,e,n){return function(){this.style.setProperty(t,e,n)}}function YD(t,e,n){return function(){var i=e.apply(this,arguments);i==null?this.style.removeProperty(t):this.style.setProperty(t,i,n)}}function qD(t,e,n){return arguments.length>1?this.each((e==null?WD:typeof e=="function"?YD:XD)(t,e,n??"")):gs(this.node(),t)}function gs(t,e){return t.style.getPropertyValue(e)||Ry(t).getComputedStyle(t,null).getPropertyValue(e)}function KD(t){return function(){delete this[t]}}function ZD(t,e){return function(){this[t]=e}}function jD(t,e){return function(){var n=e.apply(this,arguments);n==null?delete this[t]:this[t]=n}}function JD(t,e){return arguments.length>1?this.each((e==null?KD:typeof e=="function"?jD:ZD)(t,e)):this.node()[t]}function Iy(t){return t.trim().split(/^|\s+/)}function Qh(t){return t.classList||new Py(t)}function Py(t){this._node=t,this._names=Iy(t.getAttribute("class")||"")}Py.prototype={add:function(t){var e=this._names.indexOf(t);e<0&&(this._names.push(t),this._node.setAttribute("class",this._names.join(" ")))},remove:function(t){var e=this._names.indexOf(t);e>=0&&(this._names.splice(e,1),this._node.setAttribute("class",this._names.join(" ")))},contains:function(t){return this._names.indexOf(t)>=0}};function Ny(t,e){for(var n=Qh(t),i=-1,r=e.length;++i<r;)n.add(e[i])}function Dy(t,e){for(var n=Qh(t),i=-1,r=e.length;++i<r;)n.remove(e[i])}function QD(t){return function(){Ny(this,t)}}function eL(t){return function(){Dy(this,t)}}function tL(t,e){return function(){(e.apply(this,arguments)?Ny:Dy)(this,t)}}function nL(t,e){var n=Iy(t+"");if(arguments.length<2){for(var i=Qh(this.node()),r=-1,o=n.length;++r<o;)if(!i.contains(n[r]))return!1;return!0}return this.each((typeof e=="function"?tL:e?QD:eL)(n,e))}function iL(){this.textContent=""}function rL(t){return function(){this.textContent=t}}function oL(t){return function(){var e=t.apply(this,arguments);this.textContent=e??""}}function sL(t){return arguments.length?this.each(t==null?iL:(typeof t=="function"?oL:rL)(t)):this.node().textContent}function aL(){this.innerHTML=""}function lL(t){return function(){this.innerHTML=t}}function uL(t){return function(){var e=t.apply(this,arguments);this.innerHTML=e??""}}function cL(t){return arguments.length?this.each(t==null?aL:(typeof t=="function"?uL:lL)(t)):this.node().innerHTML}function dL(){this.nextSibling&&this.parentNode.appendChild(this)}function fL(){return this.each(dL)}function hL(){this.previousSibling&&this.parentNode.insertBefore(this,this.parentNode.firstChild)}function pL(){return this.each(hL)}function mL(t){var e=typeof t=="function"?t:wy(t);return this.select(function(){return this.appendChild(e.apply(this,arguments))})}function gL(){return null}function vL(t,e){var n=typeof t=="function"?t:wy(t),i=e==null?gL:typeof e=="function"?e:Jh(e);return this.select(function(){return this.insertBefore(n.apply(this,arguments),i.apply(this,arguments)||null)})}function _L(){var t=this.parentNode;t&&t.removeChild(this)}function yL(){return this.each(_L)}function xL(){var t=this.cloneNode(!1),e=this.parentNode;return e?e.insertBefore(t,this.nextSibling):t}function bL(){var t=this.cloneNode(!0),e=this.parentNode;return e?e.insertBefore(t,this.nextSibling):t}function SL(t){return this.select(t?bL:xL)}function ML(t){return arguments.length?this.property("__data__",t):this.node().__data__}function wL(t){return function(e){t.call(this,e,this.__data__)}}function EL(t){return t.trim().split(/^|\s+/).map(function(e){var n="",i=e.indexOf(".");return i>=0&&(n=e.slice(i+1),e=e.slice(0,i)),{type:e,name:n}})}function TL(t){return function(){var e=this.__on;if(e){for(var n=0,i=-1,r=e.length,o;n<r;++n)o=e[n],(!t.type||o.type===t.type)&&o.name===t.name?this.removeEventListener(o.type,o.listener,o.options):e[++i]=o;++i?e.length=i:delete this.__on}}}function CL(t,e,n){return function(){var i=this.__on,r,o=wL(e);if(i){for(var s=0,a=i.length;s<a;++s)if((r=i[s]).type===t.type&&r.name===t.name){this.removeEventListener(r.type,r.listener,r.options),this.addEventListener(r.type,r.listener=o,r.options=n),r.value=e;return}}this.addEventListener(t.type,o,n),r={type:t.type,name:t.name,value:e,listener:o,options:n},i?i.push(r):this.__on=[r]}}function AL(t,e,n){var i=EL(t+""),r,o=i.length,s;if(arguments.length<2){var a=this.node().__on;if(a){for(var l=0,u=a.length,c;l<u;++l)for(r=0,c=a[l];r<o;++r)if((s=i[r]).type===c.type&&s.name===c.name)return c.value}return}for(a=e?CL:TL,r=0;r<o;++r)this.each(a(i[r],e,n));return this}function Ly(t,e,n){var i=Ry(t),r=i.CustomEvent;typeof r=="function"?r=new r(e,n):(r=i.document.createEvent("Event"),n?(r.initEvent(e,n.bubbles,n.cancelable),r.detail=n.detail):r.initEvent(e,!1,!1)),t.dispatchEvent(r)}function RL(t,e){return function(){return Ly(this,t,e)}}function IL(t,e){return function(){return Ly(this,t,e.apply(this,arguments))}}function PL(t,e){return this.each((typeof e=="function"?IL:RL)(t,e))}function*NL(){for(var t=this._groups,e=0,n=t.length;e<n;++e)for(var i=t[e],r=0,o=i.length,s;r<o;++r)(s=i[r])&&(yield s)}var Uy=[null];function Ln(t,e){this._groups=t,this._parents=e}function ka(){return new Ln([[document.documentElement]],Uy)}function DL(){return this}Ln.prototype=ka.prototype={constructor:Ln,select:oD,selectAll:uD,selectChild:hD,selectChildren:vD,filter:_D,data:wD,enter:yD,exit:TD,join:CD,merge:AD,selection:DL,order:RD,sort:ID,call:ND,nodes:DD,node:LD,size:UD,empty:FD,each:OD,attr:GD,style:qD,property:JD,classed:nL,text:sL,html:cL,raise:fL,lower:pL,append:mL,insert:vL,remove:yL,clone:SL,datum:ML,on:AL,dispatch:PL,[Symbol.iterator]:NL};function Nr(t){return typeof t=="string"?new Ln([[document.querySelector(t)]],[document.documentElement]):new Ln([[t]],Uy)}function LL(t){let e;for(;e=t.sourceEvent;)t=e;return t}function Tr(t,e){if(t=LL(t),e===void 0&&(e=t.currentTarget),e){var n=e.ownerSVGElement||e;if(n.createSVGPoint){var i=n.createSVGPoint();return i.x=t.clientX,i.y=t.clientY,i=i.matrixTransform(e.getScreenCTM().inverse()),[i.x,i.y]}if(e.getBoundingClientRect){var r=e.getBoundingClientRect();return[t.clientX-r.left-e.clientLeft,t.clientY-r.top-e.clientTop]}}return[t.pageX,t.pageY]}const Kf={capture:!0,passive:!1};function Zf(t){t.preventDefault(),t.stopImmediatePropagation()}function UL(t){var e=t.document.documentElement,n=Nr(t).on("dragstart.drag",Zf,Kf);"onselectstart"in e?n.on("selectstart.drag",Zf,Kf):(e.__noselect=e.style.MozUserSelect,e.style.MozUserSelect="none")}function FL(t,e){var n=t.document.documentElement,i=Nr(t).on("dragstart.drag",null);e&&(i.on("click.drag",Zf,Kf),setTimeout(function(){i.on("click.drag",null)},0)),"onselectstart"in n?i.on("selectstart.drag",null):(n.style.MozUserSelect=n.__noselect,delete n.__noselect)}function ep(t,e,n){t.prototype=e.prototype=n,n.constructor=t}function Fy(t,e){var n=Object.create(t.prototype);for(var i in e)n[i]=e[i];return n}function Va(){}var Ma=.7,Eu=1/Ma,rs="\\s*([+-]?\\d+)\\s*",wa="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",xi="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",OL=/^#([0-9a-f]{3,8})$/,BL=new RegExp(`^rgb\\(${rs},${rs},${rs}\\)$`),kL=new RegExp(`^rgb\\(${xi},${xi},${xi}\\)$`),VL=new RegExp(`^rgba\\(${rs},${rs},${rs},${wa}\\)$`),zL=new RegExp(`^rgba\\(${xi},${xi},${xi},${wa}\\)$`),$L=new RegExp(`^hsl\\(${wa},${xi},${xi}\\)$`),HL=new RegExp(`^hsla\\(${wa},${xi},${xi},${wa}\\)$`),Hg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};ep(Va,Ea,{copy(t){return Object.assign(new this.constructor,this,t)},displayable(){return this.rgb().displayable()},hex:Gg,formatHex:Gg,formatHex8:GL,formatHsl:WL,formatRgb:Wg,toString:Wg});function Gg(){return this.rgb().formatHex()}function GL(){return this.rgb().formatHex8()}function WL(){return Oy(this).formatHsl()}function Wg(){return this.rgb().formatRgb()}function Ea(t){var e,n;return t=(t+"").trim().toLowerCase(),(e=OL.exec(t))?(n=e[1].length,e=parseInt(e[1],16),n===6?Xg(e):n===3?new En(e>>8&15|e>>4&240,e>>4&15|e&240,(e&15)<<4|e&15,1):n===8?El(e>>24&255,e>>16&255,e>>8&255,(e&255)/255):n===4?El(e>>12&15|e>>8&240,e>>8&15|e>>4&240,e>>4&15|e&240,((e&15)<<4|e&15)/255):null):(e=BL.exec(t))?new En(e[1],e[2],e[3],1):(e=kL.exec(t))?new En(e[1]*255/100,e[2]*255/100,e[3]*255/100,1):(e=VL.exec(t))?El(e[1],e[2],e[3],e[4]):(e=zL.exec(t))?El(e[1]*255/100,e[2]*255/100,e[3]*255/100,e[4]):(e=$L.exec(t))?Kg(e[1],e[2]/100,e[3]/100,1):(e=HL.exec(t))?Kg(e[1],e[2]/100,e[3]/100,e[4]):Hg.hasOwnProperty(t)?Xg(Hg[t]):t==="transparent"?new En(NaN,NaN,NaN,0):null}function Xg(t){return new En(t>>16&255,t>>8&255,t&255,1)}function El(t,e,n,i){return i<=0&&(t=e=n=NaN),new En(t,e,n,i)}function XL(t){return t instanceof Va||(t=Ea(t)),t?(t=t.rgb(),new En(t.r,t.g,t.b,t.opacity)):new En}function jf(t,e,n,i){return arguments.length===1?XL(t):new En(t,e,n,i??1)}function En(t,e,n,i){this.r=+t,this.g=+e,this.b=+n,this.opacity=+i}ep(En,jf,Fy(Va,{brighter(t){return t=t==null?Eu:Math.pow(Eu,t),new En(this.r*t,this.g*t,this.b*t,this.opacity)},darker(t){return t=t==null?Ma:Math.pow(Ma,t),new En(this.r*t,this.g*t,this.b*t,this.opacity)},rgb(){return this},clamp(){return new En(bo(this.r),bo(this.g),bo(this.b),Tu(this.opacity))},displayable(){return-.5<=this.r&&this.r<255.5&&-.5<=this.g&&this.g<255.5&&-.5<=this.b&&this.b<255.5&&0<=this.opacity&&this.opacity<=1},hex:Yg,formatHex:Yg,formatHex8:YL,formatRgb:qg,toString:qg}));function Yg(){return`#${po(this.r)}${po(this.g)}${po(this.b)}`}function YL(){return`#${po(this.r)}${po(this.g)}${po(this.b)}${po((isNaN(this.opacity)?1:this.opacity)*255)}`}function qg(){const t=Tu(this.opacity);return`${t===1?"rgb(":"rgba("}${bo(this.r)}, ${bo(this.g)}, ${bo(this.b)}${t===1?")":`, ${t})`}`}function Tu(t){return isNaN(t)?1:Math.max(0,Math.min(1,t))}function bo(t){return Math.max(0,Math.min(255,Math.round(t)||0))}function po(t){return t=bo(t),(t<16?"0":"")+t.toString(16)}function Kg(t,e,n,i){return i<=0?t=e=n=NaN:n<=0||n>=1?t=e=NaN:e<=0&&(t=NaN),new qn(t,e,n,i)}function Oy(t){if(t instanceof qn)return new qn(t.h,t.s,t.l,t.opacity);if(t instanceof Va||(t=Ea(t)),!t)return new qn;if(t instanceof qn)return t;t=t.rgb();var e=t.r/255,n=t.g/255,i=t.b/255,r=Math.min(e,n,i),o=Math.max(e,n,i),s=NaN,a=o-r,l=(o+r)/2;return a?(e===o?s=(n-i)/a+(n<i)*6:n===o?s=(i-e)/a+2:s=(e-n)/a+4,a/=l<.5?o+r:2-o-r,s*=60):a=l>0&&l<1?0:s,new qn(s,a,l,t.opacity)}function qL(t,e,n,i){return arguments.length===1?Oy(t):new qn(t,e,n,i??1)}function qn(t,e,n,i){this.h=+t,this.s=+e,this.l=+n,this.opacity=+i}ep(qn,qL,Fy(Va,{brighter(t){return t=t==null?Eu:Math.pow(Eu,t),new qn(this.h,this.s,this.l*t,this.opacity)},darker(t){return t=t==null?Ma:Math.pow(Ma,t),new qn(this.h,this.s,this.l*t,this.opacity)},rgb(){var t=this.h%360+(this.h<0)*360,e=isNaN(t)||isNaN(this.s)?0:this.s,n=this.l,i=n+(n<.5?n:1-n)*e,r=2*n-i;return new En(yd(t>=240?t-240:t+120,r,i),yd(t,r,i),yd(t<120?t+240:t-120,r,i),this.opacity)},clamp(){return new qn(Zg(this.h),Tl(this.s),Tl(this.l),Tu(this.opacity))},displayable(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1},formatHsl(){const t=Tu(this.opacity);return`${t===1?"hsl(":"hsla("}${Zg(this.h)}, ${Tl(this.s)*100}%, ${Tl(this.l)*100}%${t===1?")":`, ${t})`}`}}));function Zg(t){return t=(t||0)%360,t<0?t+360:t}function Tl(t){return Math.max(0,Math.min(1,t||0))}function yd(t,e,n){return(t<60?e+(n-e)*t/60:t<180?n:t<240?e+(n-e)*(240-t)/60:e)*255}const By=t=>()=>t;function KL(t,e){return function(n){return t+n*e}}function ZL(t,e,n){return t=Math.pow(t,n),e=Math.pow(e,n)-t,n=1/n,function(i){return Math.pow(t+i*e,n)}}function jL(t){return(t=+t)==1?ky:function(e,n){return n-e?ZL(e,n,t):By(isNaN(e)?n:e)}}function ky(t,e){var n=e-t;return n?KL(t,n):By(isNaN(t)?e:t)}const jg=(function t(e){var n=jL(e);function i(r,o){var s=n((r=jf(r)).r,(o=jf(o)).r),a=n(r.g,o.g),l=n(r.b,o.b),u=ky(r.opacity,o.opacity);return function(c){return r.r=s(c),r.g=a(c),r.b=l(c),r.opacity=u(c),r+""}}return i.gamma=t,i})(1);function Ir(t,e){return t=+t,e=+e,function(n){return t*(1-n)+e*n}}var Jf=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,xd=new RegExp(Jf.source,"g");function JL(t){return function(){return t}}function QL(t){return function(e){return t(e)+""}}function eU(t,e){var n=Jf.lastIndex=xd.lastIndex=0,i,r,o,s=-1,a=[],l=[];for(t=t+"",e=e+"";(i=Jf.exec(t))&&(r=xd.exec(e));)(o=r.index)>n&&(o=e.slice(n,o),a[s]?a[s]+=o:a[++s]=o),(i=i[0])===(r=r[0])?a[s]?a[s]+=r:a[++s]=r:(a[++s]=null,l.push({i:s,x:Ir(i,r)})),n=xd.lastIndex;return n<e.length&&(o=e.slice(n),a[s]?a[s]+=o:a[++s]=o),a.length<2?l[0]?QL(l[0].x):JL(e):(e=l.length,function(u){for(var c=0,f;c<e;++c)a[(f=l[c]).i]=f.x(u);return a.join("")})}var Jg=180/Math.PI,Qf={translateX:0,translateY:0,rotate:0,skewX:0,scaleX:1,scaleY:1};function Vy(t,e,n,i,r,o){var s,a,l;return(s=Math.sqrt(t*t+e*e))&&(t/=s,e/=s),(l=t*n+e*i)&&(n-=t*l,i-=e*l),(a=Math.sqrt(n*n+i*i))&&(n/=a,i/=a,l/=a),t*i<e*n&&(t=-t,e=-e,l=-l,s=-s),{translateX:r,translateY:o,rotate:Math.atan2(e,t)*Jg,skewX:Math.atan(l)*Jg,scaleX:s,scaleY:a}}var Cl;function tU(t){const e=new(typeof DOMMatrix=="function"?DOMMatrix:WebKitCSSMatrix)(t+"");return e.isIdentity?Qf:Vy(e.a,e.b,e.c,e.d,e.e,e.f)}function nU(t){return t==null||(Cl||(Cl=document.createElementNS("http://www.w3.org/2000/svg","g")),Cl.setAttribute("transform",t),!(t=Cl.transform.baseVal.consolidate()))?Qf:(t=t.matrix,Vy(t.a,t.b,t.c,t.d,t.e,t.f))}function zy(t,e,n,i){function r(u){return u.length?u.pop()+" ":""}function o(u,c,f,d,h,m){if(u!==f||c!==d){var v=h.push("translate(",null,e,null,n);m.push({i:v-4,x:Ir(u,f)},{i:v-2,x:Ir(c,d)})}else(f||d)&&h.push("translate("+f+e+d+n)}function s(u,c,f,d){u!==c?(u-c>180?c+=360:c-u>180&&(u+=360),d.push({i:f.push(r(f)+"rotate(",null,i)-2,x:Ir(u,c)})):c&&f.push(r(f)+"rotate("+c+i)}function a(u,c,f,d){u!==c?d.push({i:f.push(r(f)+"skewX(",null,i)-2,x:Ir(u,c)}):c&&f.push(r(f)+"skewX("+c+i)}function l(u,c,f,d,h,m){if(u!==f||c!==d){var v=h.push(r(h)+"scale(",null,",",null,")");m.push({i:v-4,x:Ir(u,f)},{i:v-2,x:Ir(c,d)})}else(f!==1||d!==1)&&h.push(r(h)+"scale("+f+","+d+")")}return function(u,c){var f=[],d=[];return u=t(u),c=t(c),o(u.translateX,u.translateY,c.translateX,c.translateY,f,d),s(u.rotate,c.rotate,f,d),a(u.skewX,c.skewX,f,d),l(u.scaleX,u.scaleY,c.scaleX,c.scaleY,f,d),u=c=null,function(h){for(var m=-1,v=d.length,g;++m<v;)f[(g=d[m]).i]=g.x(h);return f.join("")}}}var iU=zy(tU,"px, ","px)","deg)"),rU=zy(nU,", ",")",")"),oU=1e-12;function Qg(t){return((t=Math.exp(t))+1/t)/2}function sU(t){return((t=Math.exp(t))-1/t)/2}function aU(t){return((t=Math.exp(2*t))-1)/(t+1)}const lU=(function t(e,n,i){function r(o,s){var a=o[0],l=o[1],u=o[2],c=s[0],f=s[1],d=s[2],h=c-a,m=f-l,v=h*h+m*m,g,p;if(v<oU)p=Math.log(d/u)/e,g=function(F){return[a+F*h,l+F*m,u*Math.exp(e*F*p)]};else{var y=Math.sqrt(v),S=(d*d-u*u+i*v)/(2*u*n*y),_=(d*d-u*u-i*v)/(2*d*n*y),R=Math.log(Math.sqrt(S*S+1)-S),N=Math.log(Math.sqrt(_*_+1)-_);p=(N-R)/e,g=function(F){var x=F*p,b=Qg(R),P=u/(n*y)*(b*aU(e*x+R)-sU(R));return[a+P*h,l+P*m,u*b/Qg(e*x+R)]}}return g.duration=p*1e3*e/Math.SQRT2,g}return r.rho=function(o){var s=Math.max(.001,+o),a=s*s,l=a*a;return t(s,a,l)},r})(Math.SQRT2,2,4);var vs=0,Hs=0,Us=0,$y=1e3,Cu,Gs,Au=0,Eo=0,cc=0,Ta=typeof performance=="object"&&performance.now?performance:Date,Hy=typeof window=="object"&&window.requestAnimationFrame?window.requestAnimationFrame.bind(window):function(t){setTimeout(t,17)};function tp(){return Eo||(Hy(uU),Eo=Ta.now()+cc)}function uU(){Eo=0}function Ru(){this._call=this._time=this._next=null}Ru.prototype=Gy.prototype={constructor:Ru,restart:function(t,e,n){if(typeof t!="function")throw new TypeError("callback is not a function");n=(n==null?tp():+n)+(e==null?0:+e),!this._next&&Gs!==this&&(Gs?Gs._next=this:Cu=this,Gs=this),this._call=t,this._time=n,eh()},stop:function(){this._call&&(this._call=null,this._time=1/0,eh())}};function Gy(t,e,n){var i=new Ru;return i.restart(t,e,n),i}function cU(){tp(),++vs;for(var t=Cu,e;t;)(e=Eo-t._time)>=0&&t._call.call(void 0,e),t=t._next;--vs}function ev(){Eo=(Au=Ta.now())+cc,vs=Hs=0;try{cU()}finally{vs=0,fU(),Eo=0}}function dU(){var t=Ta.now(),e=t-Au;e>$y&&(cc-=e,Au=t)}function fU(){for(var t,e=Cu,n,i=1/0;e;)e._call?(i>e._time&&(i=e._time),t=e,e=e._next):(n=e._next,e._next=null,e=t?t._next=n:Cu=n);Gs=t,eh(i)}function eh(t){if(!vs){Hs&&(Hs=clearTimeout(Hs));var e=t-Eo;e>24?(t<1/0&&(Hs=setTimeout(ev,t-Ta.now()-cc)),Us&&(Us=clearInterval(Us))):(Us||(Au=Ta.now(),Us=setInterval(dU,$y)),vs=1,Hy(ev))}}function tv(t,e,n){var i=new Ru;return e=e==null?0:+e,i.restart(r=>{i.stop(),t(r+e)},e,n),i}var hU=jh("start","end","cancel","interrupt"),pU=[],Wy=0,nv=1,th=2,ql=3,iv=4,nh=5,Kl=6;function dc(t,e,n,i,r,o){var s=t.__transition;if(!s)t.__transition={};else if(n in s)return;mU(t,n,{name:e,index:i,group:r,on:hU,tween:pU,time:o.time,delay:o.delay,duration:o.duration,ease:o.ease,timer:null,state:Wy})}function np(t,e){var n=ti(t,e);if(n.state>Wy)throw new Error("too late; already scheduled");return n}function Ei(t,e){var n=ti(t,e);if(n.state>ql)throw new Error("too late; already running");return n}function ti(t,e){var n=t.__transition;if(!n||!(n=n[e]))throw new Error("transition not found");return n}function mU(t,e,n){var i=t.__transition,r;i[e]=n,n.timer=Gy(o,0,n.time);function o(u){n.state=nv,n.timer.restart(s,n.delay,n.time),n.delay<=u&&s(u-n.delay)}function s(u){var c,f,d,h;if(n.state!==nv)return l();for(c in i)if(h=i[c],h.name===n.name){if(h.state===ql)return tv(s);h.state===iv?(h.state=Kl,h.timer.stop(),h.on.call("interrupt",t,t.__data__,h.index,h.group),delete i[c]):+c<e&&(h.state=Kl,h.timer.stop(),h.on.call("cancel",t,t.__data__,h.index,h.group),delete i[c])}if(tv(function(){n.state===ql&&(n.state=iv,n.timer.restart(a,n.delay,n.time),a(u))}),n.state=th,n.on.call("start",t,t.__data__,n.index,n.group),n.state===th){for(n.state=ql,r=new Array(d=n.tween.length),c=0,f=-1;c<d;++c)(h=n.tween[c].value.call(t,t.__data__,n.index,n.group))&&(r[++f]=h);r.length=f+1}}function a(u){for(var c=u<n.duration?n.ease.call(null,u/n.duration):(n.timer.restart(l),n.state=nh,1),f=-1,d=r.length;++f<d;)r[f].call(t,c);n.state===nh&&(n.on.call("end",t,t.__data__,n.index,n.group),l())}function l(){n.state=Kl,n.timer.stop(),delete i[e];for(var u in i)return;delete t.__transition}}function Zl(t,e){var n=t.__transition,i,r,o=!0,s;if(n){e=e==null?null:e+"";for(s in n){if((i=n[s]).name!==e){o=!1;continue}r=i.state>th&&i.state<nh,i.state=Kl,i.timer.stop(),i.on.call(r?"interrupt":"cancel",t,t.__data__,i.index,i.group),delete n[s]}o&&delete t.__transition}}function gU(t){return this.each(function(){Zl(this,t)})}function vU(t,e){var n,i;return function(){var r=Ei(this,t),o=r.tween;if(o!==n){i=n=o;for(var s=0,a=i.length;s<a;++s)if(i[s].name===e){i=i.slice(),i.splice(s,1);break}}r.tween=i}}function _U(t,e,n){var i,r;if(typeof n!="function")throw new Error;return function(){var o=Ei(this,t),s=o.tween;if(s!==i){r=(i=s).slice();for(var a={name:e,value:n},l=0,u=r.length;l<u;++l)if(r[l].name===e){r[l]=a;break}l===u&&r.push(a)}o.tween=r}}function yU(t,e){var n=this._id;if(t+="",arguments.length<2){for(var i=ti(this.node(),n).tween,r=0,o=i.length,s;r<o;++r)if((s=i[r]).name===t)return s.value;return null}return this.each((e==null?vU:_U)(n,t,e))}function ip(t,e,n){var i=t._id;return t.each(function(){var r=Ei(this,i);(r.value||(r.value={}))[e]=n.apply(this,arguments)}),function(r){return ti(r,i).value[e]}}function Xy(t,e){var n;return(typeof e=="number"?Ir:e instanceof Ea?jg:(n=Ea(e))?(e=n,jg):eU)(t,e)}function xU(t){return function(){this.removeAttribute(t)}}function bU(t){return function(){this.removeAttributeNS(t.space,t.local)}}function SU(t,e,n){var i,r=n+"",o;return function(){var s=this.getAttribute(t);return s===r?null:s===i?o:o=e(i=s,n)}}function MU(t,e,n){var i,r=n+"",o;return function(){var s=this.getAttributeNS(t.space,t.local);return s===r?null:s===i?o:o=e(i=s,n)}}function wU(t,e,n){var i,r,o;return function(){var s,a=n(this),l;return a==null?void this.removeAttribute(t):(s=this.getAttribute(t),l=a+"",s===l?null:s===i&&l===r?o:(r=l,o=e(i=s,a)))}}function EU(t,e,n){var i,r,o;return function(){var s,a=n(this),l;return a==null?void this.removeAttributeNS(t.space,t.local):(s=this.getAttributeNS(t.space,t.local),l=a+"",s===l?null:s===i&&l===r?o:(r=l,o=e(i=s,a)))}}function TU(t,e){var n=uc(t),i=n==="transform"?rU:Xy;return this.attrTween(t,typeof e=="function"?(n.local?EU:wU)(n,i,ip(this,"attr."+t,e)):e==null?(n.local?bU:xU)(n):(n.local?MU:SU)(n,i,e))}function CU(t,e){return function(n){this.setAttribute(t,e.call(this,n))}}function AU(t,e){return function(n){this.setAttributeNS(t.space,t.local,e.call(this,n))}}function RU(t,e){var n,i;function r(){var o=e.apply(this,arguments);return o!==i&&(n=(i=o)&&AU(t,o)),n}return r._value=e,r}function IU(t,e){var n,i;function r(){var o=e.apply(this,arguments);return o!==i&&(n=(i=o)&&CU(t,o)),n}return r._value=e,r}function PU(t,e){var n="attr."+t;if(arguments.length<2)return(n=this.tween(n))&&n._value;if(e==null)return this.tween(n,null);if(typeof e!="function")throw new Error;var i=uc(t);return this.tween(n,(i.local?RU:IU)(i,e))}function NU(t,e){return function(){np(this,t).delay=+e.apply(this,arguments)}}function DU(t,e){return e=+e,function(){np(this,t).delay=e}}function LU(t){var e=this._id;return arguments.length?this.each((typeof t=="function"?NU:DU)(e,t)):ti(this.node(),e).delay}function UU(t,e){return function(){Ei(this,t).duration=+e.apply(this,arguments)}}function FU(t,e){return e=+e,function(){Ei(this,t).duration=e}}function OU(t){var e=this._id;return arguments.length?this.each((typeof t=="function"?UU:FU)(e,t)):ti(this.node(),e).duration}function BU(t,e){if(typeof e!="function")throw new Error;return function(){Ei(this,t).ease=e}}function kU(t){var e=this._id;return arguments.length?this.each(BU(e,t)):ti(this.node(),e).ease}function VU(t,e){return function(){var n=e.apply(this,arguments);if(typeof n!="function")throw new Error;Ei(this,t).ease=n}}function zU(t){if(typeof t!="function")throw new Error;return this.each(VU(this._id,t))}function $U(t){typeof t!="function"&&(t=Ty(t));for(var e=this._groups,n=e.length,i=new Array(n),r=0;r<n;++r)for(var o=e[r],s=o.length,a=i[r]=[],l,u=0;u<s;++u)(l=o[u])&&t.call(l,l.__data__,u,o)&&a.push(l);return new lr(i,this._parents,this._name,this._id)}function HU(t){if(t._id!==this._id)throw new Error;for(var e=this._groups,n=t._groups,i=e.length,r=n.length,o=Math.min(i,r),s=new Array(i),a=0;a<o;++a)for(var l=e[a],u=n[a],c=l.length,f=s[a]=new Array(c),d,h=0;h<c;++h)(d=l[h]||u[h])&&(f[h]=d);for(;a<i;++a)s[a]=e[a];return new lr(s,this._parents,this._name,this._id)}function GU(t){return(t+"").trim().split(/^|\s+/).every(function(e){var n=e.indexOf(".");return n>=0&&(e=e.slice(0,n)),!e||e==="start"})}function WU(t,e,n){var i,r,o=GU(e)?np:Ei;return function(){var s=o(this,t),a=s.on;a!==i&&(r=(i=a).copy()).on(e,n),s.on=r}}function XU(t,e){var n=this._id;return arguments.length<2?ti(this.node(),n).on.on(t):this.each(WU(n,t,e))}function YU(t){return function(){var e=this.parentNode;for(var n in this.__transition)if(+n!==t)return;e&&e.removeChild(this)}}function qU(){return this.on("end.remove",YU(this._id))}function KU(t){var e=this._name,n=this._id;typeof t!="function"&&(t=Jh(t));for(var i=this._groups,r=i.length,o=new Array(r),s=0;s<r;++s)for(var a=i[s],l=a.length,u=o[s]=new Array(l),c,f,d=0;d<l;++d)(c=a[d])&&(f=t.call(c,c.__data__,d,a))&&("__data__"in c&&(f.__data__=c.__data__),u[d]=f,dc(u[d],e,n,d,u,ti(c,n)));return new lr(o,this._parents,e,n)}function ZU(t){var e=this._name,n=this._id;typeof t!="function"&&(t=Ey(t));for(var i=this._groups,r=i.length,o=[],s=[],a=0;a<r;++a)for(var l=i[a],u=l.length,c,f=0;f<u;++f)if(c=l[f]){for(var d=t.call(c,c.__data__,f,l),h,m=ti(c,n),v=0,g=d.length;v<g;++v)(h=d[v])&&dc(h,e,n,v,d,m);o.push(d),s.push(c)}return new lr(o,s,e,n)}var jU=ka.prototype.constructor;function JU(){return new jU(this._groups,this._parents)}function QU(t,e){var n,i,r;return function(){var o=gs(this,t),s=(this.style.removeProperty(t),gs(this,t));return o===s?null:o===n&&s===i?r:r=e(n=o,i=s)}}function Yy(t){return function(){this.style.removeProperty(t)}}function eF(t,e,n){var i,r=n+"",o;return function(){var s=gs(this,t);return s===r?null:s===i?o:o=e(i=s,n)}}function tF(t,e,n){var i,r,o;return function(){var s=gs(this,t),a=n(this),l=a+"";return a==null&&(l=a=(this.style.removeProperty(t),gs(this,t))),s===l?null:s===i&&l===r?o:(r=l,o=e(i=s,a))}}function nF(t,e){var n,i,r,o="style."+e,s="end."+o,a;return function(){var l=Ei(this,t),u=l.on,c=l.value[o]==null?a||(a=Yy(e)):void 0;(u!==n||r!==c)&&(i=(n=u).copy()).on(s,r=c),l.on=i}}function iF(t,e,n){var i=(t+="")=="transform"?iU:Xy;return e==null?this.styleTween(t,QU(t,i)).on("end.style."+t,Yy(t)):typeof e=="function"?this.styleTween(t,tF(t,i,ip(this,"style."+t,e))).each(nF(this._id,t)):this.styleTween(t,eF(t,i,e),n).on("end.style."+t,null)}function rF(t,e,n){return function(i){this.style.setProperty(t,e.call(this,i),n)}}function oF(t,e,n){var i,r;function o(){var s=e.apply(this,arguments);return s!==r&&(i=(r=s)&&rF(t,s,n)),i}return o._value=e,o}function sF(t,e,n){var i="style."+(t+="");if(arguments.length<2)return(i=this.tween(i))&&i._value;if(e==null)return this.tween(i,null);if(typeof e!="function")throw new Error;return this.tween(i,oF(t,e,n??""))}function aF(t){return function(){this.textContent=t}}function lF(t){return function(){var e=t(this);this.textContent=e??""}}function uF(t){return this.tween("text",typeof t=="function"?lF(ip(this,"text",t)):aF(t==null?"":t+""))}function cF(t){return function(e){this.textContent=t.call(this,e)}}function dF(t){var e,n;function i(){var r=t.apply(this,arguments);return r!==n&&(e=(n=r)&&cF(r)),e}return i._value=t,i}function fF(t){var e="text";if(arguments.length<1)return(e=this.tween(e))&&e._value;if(t==null)return this.tween(e,null);if(typeof t!="function")throw new Error;return this.tween(e,dF(t))}function hF(){for(var t=this._name,e=this._id,n=qy(),i=this._groups,r=i.length,o=0;o<r;++o)for(var s=i[o],a=s.length,l,u=0;u<a;++u)if(l=s[u]){var c=ti(l,e);dc(l,t,n,u,s,{time:c.time+c.delay+c.duration,delay:0,duration:c.duration,ease:c.ease})}return new lr(i,this._parents,t,n)}function pF(){var t,e,n=this,i=n._id,r=n.size();return new Promise(function(o,s){var a={value:s},l={value:function(){--r===0&&o()}};n.each(function(){var u=Ei(this,i),c=u.on;c!==t&&(e=(t=c).copy(),e._.cancel.push(a),e._.interrupt.push(a),e._.end.push(l)),u.on=e}),r===0&&o()})}var mF=0;function lr(t,e,n,i){this._groups=t,this._parents=e,this._name=n,this._id=i}function qy(){return++mF}var Fi=ka.prototype;lr.prototype={constructor:lr,select:KU,selectAll:ZU,selectChild:Fi.selectChild,selectChildren:Fi.selectChildren,filter:$U,merge:HU,selection:JU,transition:hF,call:Fi.call,nodes:Fi.nodes,node:Fi.node,size:Fi.size,empty:Fi.empty,each:Fi.each,on:XU,attr:TU,attrTween:PU,style:iF,styleTween:sF,text:uF,textTween:fF,remove:qU,tween:yU,delay:LU,duration:OU,ease:kU,easeVarying:zU,end:pF,[Symbol.iterator]:Fi[Symbol.iterator]};function gF(t){return((t*=2)<=1?t*t*t:(t-=2)*t*t+2)/2}var vF={time:null,delay:0,duration:250,ease:gF};function _F(t,e){for(var n;!(n=t.__transition)||!(n=n[e]);)if(!(t=t.parentNode))throw new Error(`transition ${e} not found`);return n}function yF(t){var e,n;t instanceof lr?(e=t._id,t=t._name):(e=qy(),(n=vF).time=tp(),t=t==null?null:t+"");for(var i=this._groups,r=i.length,o=0;o<r;++o)for(var s=i[o],a=s.length,l,u=0;u<a;++u)(l=s[u])&&dc(l,t,e,u,s,n||_F(l,e));return new lr(i,this._parents,t,e)}ka.prototype.interrupt=gU;ka.prototype.transition=yF;const Al=t=>()=>t;function xF(t,{sourceEvent:e,target:n,transform:i,dispatch:r}){Object.defineProperties(this,{type:{value:t,enumerable:!0,configurable:!0},sourceEvent:{value:e,enumerable:!0,configurable:!0},target:{value:n,enumerable:!0,configurable:!0},transform:{value:i,enumerable:!0,configurable:!0},_:{value:r}})}function Yi(t,e,n){this.k=t,this.x=e,this.y=n}Yi.prototype={constructor:Yi,scale:function(t){return t===1?this:new Yi(this.k*t,this.x,this.y)},translate:function(t,e){return t===0&e===0?this:new Yi(this.k,this.x+this.k*t,this.y+this.k*e)},apply:function(t){return[t[0]*this.k+this.x,t[1]*this.k+this.y]},applyX:function(t){return t*this.k+this.x},applyY:function(t){return t*this.k+this.y},invert:function(t){return[(t[0]-this.x)/this.k,(t[1]-this.y)/this.k]},invertX:function(t){return(t-this.x)/this.k},invertY:function(t){return(t-this.y)/this.k},rescaleX:function(t){return t.copy().domain(t.range().map(this.invertX,this).map(t.invert,t))},rescaleY:function(t){return t.copy().domain(t.range().map(this.invertY,this).map(t.invert,t))},toString:function(){return"translate("+this.x+","+this.y+") scale("+this.k+")"}};var rp=new Yi(1,0,0);Yi.prototype;function bd(t){t.stopImmediatePropagation()}function Fs(t){t.preventDefault(),t.stopImmediatePropagation()}function bF(t){return(!t.ctrlKey||t.type==="wheel")&&!t.button}function SF(){var t=this;return t instanceof SVGElement?(t=t.ownerSVGElement||t,t.hasAttribute("viewBox")?(t=t.viewBox.baseVal,[[t.x,t.y],[t.x+t.width,t.y+t.height]]):[[0,0],[t.width.baseVal.value,t.height.baseVal.value]]):[[0,0],[t.clientWidth,t.clientHeight]]}function rv(){return this.__zoom||rp}function MF(t){return-t.deltaY*(t.deltaMode===1?.05:t.deltaMode?1:.002)*(t.ctrlKey?10:1)}function wF(){return navigator.maxTouchPoints||"ontouchstart"in this}function EF(t,e,n){var i=t.invertX(e[0][0])-n[0][0],r=t.invertX(e[1][0])-n[1][0],o=t.invertY(e[0][1])-n[0][1],s=t.invertY(e[1][1])-n[1][1];return t.translate(r>i?(i+r)/2:Math.min(0,i)||Math.max(0,r),s>o?(o+s)/2:Math.min(0,o)||Math.max(0,s))}function TF(){var t=bF,e=SF,n=EF,i=MF,r=wF,o=[0,1/0],s=[[-1/0,-1/0],[1/0,1/0]],a=250,l=lU,u=jh("start","zoom","end"),c,f,d,h=500,m=150,v=0,g=10;function p(E){E.property("__zoom",rv).on("wheel.zoom",x,{passive:!1}).on("mousedown.zoom",b).on("dblclick.zoom",P).filter(r).on("touchstart.zoom",M).on("touchmove.zoom",w).on("touchend.zoom touchcancel.zoom",W).style("-webkit-tap-highlight-color","rgba(0,0,0,0)")}p.transform=function(E,k,A,I){var O=E.selection?E.selection():E;O.property("__zoom",rv),E!==O?R(E,k,A,I):O.interrupt().each(function(){N(this,arguments).event(I).start().zoom(null,typeof k=="function"?k.apply(this,arguments):k).end()})},p.scaleBy=function(E,k,A,I){p.scaleTo(E,function(){var O=this.__zoom.k,z=typeof k=="function"?k.apply(this,arguments):k;return O*z},A,I)},p.scaleTo=function(E,k,A,I){p.transform(E,function(){var O=e.apply(this,arguments),z=this.__zoom,q=A==null?_(O):typeof A=="function"?A.apply(this,arguments):A,te=z.invert(q),ne=typeof k=="function"?k.apply(this,arguments):k;return n(S(y(z,ne),q,te),O,s)},A,I)},p.translateBy=function(E,k,A,I){p.transform(E,function(){return n(this.__zoom.translate(typeof k=="function"?k.apply(this,arguments):k,typeof A=="function"?A.apply(this,arguments):A),e.apply(this,arguments),s)},null,I)},p.translateTo=function(E,k,A,I,O){p.transform(E,function(){var z=e.apply(this,arguments),q=this.__zoom,te=I==null?_(z):typeof I=="function"?I.apply(this,arguments):I;return n(rp.translate(te[0],te[1]).scale(q.k).translate(typeof k=="function"?-k.apply(this,arguments):-k,typeof A=="function"?-A.apply(this,arguments):-A),z,s)},I,O)};function y(E,k){return k=Math.max(o[0],Math.min(o[1],k)),k===E.k?E:new Yi(k,E.x,E.y)}function S(E,k,A){var I=k[0]-A[0]*E.k,O=k[1]-A[1]*E.k;return I===E.x&&O===E.y?E:new Yi(E.k,I,O)}function _(E){return[(+E[0][0]+ +E[1][0])/2,(+E[0][1]+ +E[1][1])/2]}function R(E,k,A,I){E.on("start.zoom",function(){N(this,arguments).event(I).start()}).on("interrupt.zoom end.zoom",function(){N(this,arguments).event(I).end()}).tween("zoom",function(){var O=this,z=arguments,q=N(O,z).event(I),te=e.apply(O,z),ne=A==null?_(te):typeof A=="function"?A.apply(O,z):A,ye=Math.max(te[1][0]-te[0][0],te[1][1]-te[0][1]),Pe=O.__zoom,Te=typeof k=="function"?k.apply(O,z):k,H=l(Pe.invert(ne).concat(ye/Pe.k),Te.invert(ne).concat(ye/Te.k));return function(B){if(B===1)B=Te;else{var X=H(B),ve=ye/X[2];B=new Yi(ve,ne[0]-X[0]*ve,ne[1]-X[1]*ve)}q.zoom(null,B)}})}function N(E,k,A){return!A&&E.__zooming||new F(E,k)}function F(E,k){this.that=E,this.args=k,this.active=0,this.sourceEvent=null,this.extent=e.apply(E,k),this.taps=0}F.prototype={event:function(E){return E&&(this.sourceEvent=E),this},start:function(){return++this.active===1&&(this.that.__zooming=this,this.emit("start")),this},zoom:function(E,k){return this.mouse&&E!=="mouse"&&(this.mouse[1]=k.invert(this.mouse[0])),this.touch0&&E!=="touch"&&(this.touch0[1]=k.invert(this.touch0[0])),this.touch1&&E!=="touch"&&(this.touch1[1]=k.invert(this.touch1[0])),this.that.__zoom=k,this.emit("zoom"),this},end:function(){return--this.active===0&&(delete this.that.__zooming,this.emit("end")),this},emit:function(E){var k=Nr(this.that).datum();u.call(E,this.that,new xF(E,{sourceEvent:this.sourceEvent,target:p,transform:this.that.__zoom,dispatch:u}),k)}};function x(E,...k){if(!t.apply(this,arguments))return;var A=N(this,k).event(E),I=this.__zoom,O=Math.max(o[0],Math.min(o[1],I.k*Math.pow(2,i.apply(this,arguments)))),z=Tr(E);if(A.wheel)(A.mouse[0][0]!==z[0]||A.mouse[0][1]!==z[1])&&(A.mouse[1]=I.invert(A.mouse[0]=z)),clearTimeout(A.wheel);else{if(I.k===O)return;A.mouse=[z,I.invert(z)],Zl(this),A.start()}Fs(E),A.wheel=setTimeout(q,m),A.zoom("mouse",n(S(y(I,O),A.mouse[0],A.mouse[1]),A.extent,s));function q(){A.wheel=null,A.end()}}function b(E,...k){if(d||!t.apply(this,arguments))return;var A=E.currentTarget,I=N(this,k,!0).event(E),O=Nr(E.view).on("mousemove.zoom",ne,!0).on("mouseup.zoom",ye,!0),z=Tr(E,A),q=E.clientX,te=E.clientY;UL(E.view),bd(E),I.mouse=[z,this.__zoom.invert(z)],Zl(this),I.start();function ne(Pe){if(Fs(Pe),!I.moved){var Te=Pe.clientX-q,H=Pe.clientY-te;I.moved=Te*Te+H*H>v}I.event(Pe).zoom("mouse",n(S(I.that.__zoom,I.mouse[0]=Tr(Pe,A),I.mouse[1]),I.extent,s))}function ye(Pe){O.on("mousemove.zoom mouseup.zoom",null),FL(Pe.view,I.moved),Fs(Pe),I.event(Pe).end()}}function P(E,...k){if(t.apply(this,arguments)){var A=this.__zoom,I=Tr(E.changedTouches?E.changedTouches[0]:E,this),O=A.invert(I),z=A.k*(E.shiftKey?.5:2),q=n(S(y(A,z),I,O),e.apply(this,k),s);Fs(E),a>0?Nr(this).transition().duration(a).call(R,q,I,E):Nr(this).call(p.transform,q,I,E)}}function M(E,...k){if(t.apply(this,arguments)){var A=E.touches,I=A.length,O=N(this,k,E.changedTouches.length===I).event(E),z,q,te,ne;for(bd(E),q=0;q<I;++q)te=A[q],ne=Tr(te,this),ne=[ne,this.__zoom.invert(ne),te.identifier],O.touch0?!O.touch1&&O.touch0[2]!==ne[2]&&(O.touch1=ne,O.taps=0):(O.touch0=ne,z=!0,O.taps=1+!!c);c&&(c=clearTimeout(c)),z&&(O.taps<2&&(f=ne[0],c=setTimeout(function(){c=null},h)),Zl(this),O.start())}}function w(E,...k){if(this.__zooming){var A=N(this,k).event(E),I=E.changedTouches,O=I.length,z,q,te,ne;for(Fs(E),z=0;z<O;++z)q=I[z],te=Tr(q,this),A.touch0&&A.touch0[2]===q.identifier?A.touch0[0]=te:A.touch1&&A.touch1[2]===q.identifier&&(A.touch1[0]=te);if(q=A.that.__zoom,A.touch1){var ye=A.touch0[0],Pe=A.touch0[1],Te=A.touch1[0],H=A.touch1[1],B=(B=Te[0]-ye[0])*B+(B=Te[1]-ye[1])*B,X=(X=H[0]-Pe[0])*X+(X=H[1]-Pe[1])*X;q=y(q,Math.sqrt(B/X)),te=[(ye[0]+Te[0])/2,(ye[1]+Te[1])/2],ne=[(Pe[0]+H[0])/2,(Pe[1]+H[1])/2]}else if(A.touch0)te=A.touch0[0],ne=A.touch0[1];else return;A.zoom("touch",n(S(q,te,ne),A.extent,s))}}function W(E,...k){if(this.__zooming){var A=N(this,k).event(E),I=E.changedTouches,O=I.length,z,q;for(bd(E),d&&clearTimeout(d),d=setTimeout(function(){d=null},h),z=0;z<O;++z)q=I[z],A.touch0&&A.touch0[2]===q.identifier?delete A.touch0:A.touch1&&A.touch1[2]===q.identifier&&delete A.touch1;if(A.touch1&&!A.touch0&&(A.touch0=A.touch1,delete A.touch1),A.touch0)A.touch0[1]=this.__zoom.invert(A.touch0[0]);else if(A.end(),A.taps===2&&(q=Tr(q,this),Math.hypot(f[0]-q[0],f[1]-q[1])<g)){var te=Nr(this).on("dblclick.zoom");te&&te.apply(this,arguments)}}}return p.wheelDelta=function(E){return arguments.length?(i=typeof E=="function"?E:Al(+E),p):i},p.filter=function(E){return arguments.length?(t=typeof E=="function"?E:Al(!!E),p):t},p.touchable=function(E){return arguments.length?(r=typeof E=="function"?E:Al(!!E),p):r},p.extent=function(E){return arguments.length?(e=typeof E=="function"?E:Al([[+E[0][0],+E[0][1]],[+E[1][0],+E[1][1]]]),p):e},p.scaleExtent=function(E){return arguments.length?(o[0]=+E[0],o[1]=+E[1],p):[o[0],o[1]]},p.translateExtent=function(E){return arguments.length?(s[0][0]=+E[0][0],s[1][0]=+E[1][0],s[0][1]=+E[0][1],s[1][1]=+E[1][1],p):[[s[0][0],s[0][1]],[s[1][0],s[1][1]]]},p.constrain=function(E){return arguments.length?(n=E,p):n},p.duration=function(E){return arguments.length?(a=+E,p):a},p.interpolate=function(E){return arguments.length?(l=E,p):l},p.on=function(){var E=u.on.apply(u,arguments);return E===u?p:E},p.clickDistance=function(E){return arguments.length?(v=(E=+E)*E,p):Math.sqrt(v)},p.tapDistance=function(E){return arguments.length?(g=+E,p):g},p}const Ky=Symbol("MiniMapSlots"),CF=["id","x","y","rx","ry","width","height","fill","stroke","stroke-width","shape-rendering"],AF={name:"MiniMapNode",compatConfig:{MODE:3},inheritAttrs:!1},RF=Nt({...AF,props:{id:{},type:{},selected:{type:Boolean},dragging:{type:Boolean},position:{},dimensions:{},borderRadius:{},color:{},shapeRendering:{},strokeColor:{},strokeWidth:{},hidden:{type:Boolean}},emits:["click","dblclick","mouseenter","mousemove","mouseleave"],setup(t,{emit:e}){const n=t,i=Pn(Ky),r=xh(),o=bt(()=>r.style??{});function s(f){e("click",f)}function a(f){e("dblclick",f)}function l(f){e("mouseenter",f)}function u(f){e("mousemove",f)}function c(f){e("mouseleave",f)}return(f,d)=>!f.hidden&&f.dimensions.width!==0&&f.dimensions.height!==0?(ae(),ge(it,{key:0},[fe(i)[`node-${n.type}`]?(ae(),tn(s0(fe(i)[`node-${n.type}`]),Ax(la({key:0},{...n,...f.$attrs})),null,16)):(ae(),ge("rect",la({key:1,id:f.id},f.$attrs,{class:["vue-flow__minimap-node",{selected:f.selected,dragging:f.dragging}],x:f.position.x,y:f.position.y,rx:f.borderRadius,ry:f.borderRadius,width:f.dimensions.width,height:f.dimensions.height,fill:f.color||o.value.background||o.value.backgroundColor,stroke:f.strokeColor,"stroke-width":f.strokeWidth,"shape-rendering":f.shapeRendering,onClick:s,onDblclick:a,onMouseenter:l,onMousemove:u,onMouseleave:c}),null,16,CF))],64)):$e("",!0)}}),IF=["width","height","viewBox","aria-labelledby"],PF=["id"],NF=["d","fill","stroke","stroke-width"],DF={name:"MiniMap",compatConfig:{MODE:3}},LF=Nt({...DF,props:{nodeColor:{type:[String,Function],default:"#e2e2e2"},nodeStrokeColor:{type:[String,Function],default:"transparent"},nodeClassName:{type:[String,Function]},nodeBorderRadius:{default:5},nodeStrokeWidth:{default:2},maskColor:{default:"rgb(240, 240, 240, 0.6)"},maskStrokeColor:{default:"none"},maskStrokeWidth:{default:1},position:{default:"bottom-right"},pannable:{type:Boolean,default:!1},zoomable:{type:Boolean,default:!1},width:{},height:{},ariaLabel:{default:"Vue Flow mini map"},inversePan:{type:Boolean,default:!1},zoomStep:{default:1},offsetScale:{default:5},maskBorderRadius:{default:0}},emits:["click","nodeClick","nodeDblclick","nodeMouseenter","nodeMousemove","nodeMouseleave"],setup(t,{emit:e}){const n=u0(),i=xh(),r=200,o=150,{id:s,edges:a,viewport:l,translateExtent:u,dimensions:c,emits:f,d3Selection:d,d3Zoom:h,getNodesInitialized:m}=Dt(),v=Ne();Or(Ky,n);const g=bt(()=>{var O;return t.width??((O=i.style)==null?void 0:O.width)??r}),p=bt(()=>{var O;return t.height??((O=i.style)==null?void 0:O.height)??o}),y=typeof window>"u"||window.chrome?"crispEdges":"geometricPrecision",S=De(()=>typeof t.nodeColor=="string"?()=>t.nodeColor:t.nodeColor),_=De(()=>typeof t.nodeStrokeColor=="string"?()=>t.nodeStrokeColor:t.nodeStrokeColor),R=De(()=>typeof t.nodeClassName=="string"?()=>t.nodeClassName:typeof t.nodeClassName=="function"?t.nodeClassName:()=>""),N=De(()=>Xh(m.value.filter(O=>!O.hidden))),F=De(()=>({x:-l.value.x/l.value.zoom,y:-l.value.y/l.value.zoom,width:c.value.width/l.value.zoom,height:c.value.height/l.value.zoom})),x=De(()=>m.value&&m.value.length?ZP(N.value,F.value):F.value),b=De(()=>{const O=x.value.width/g.value,z=x.value.height/p.value;return Math.max(O,z)}),P=De(()=>{const O=b.value*g.value,z=b.value*p.value,q=t.offsetScale*b.value;return{offset:q,x:x.value.x-(O-x.value.width)/2-q,y:x.value.y-(z-x.value.height)/2-q,width:O+q*2,height:z+q*2}}),M=De(()=>!P.value.x||!P.value.y?"":`
    M${P.value.x-P.value.offset},${P.value.y-P.value.offset}
    h${P.value.width+P.value.offset*2}
    v${P.value.height+P.value.offset*2}
    h${-P.value.width-P.value.offset*2}z
    M${F.value.x+t.maskBorderRadius},${F.value.y}
    h${F.value.width-2*t.maskBorderRadius}
    a${t.maskBorderRadius},${t.maskBorderRadius} 0 0 1 ${t.maskBorderRadius},${t.maskBorderRadius}
    v${F.value.height-2*t.maskBorderRadius}
    a${t.maskBorderRadius},${t.maskBorderRadius} 0 0 1 -${t.maskBorderRadius},${t.maskBorderRadius}
    h${-(F.value.width-2*t.maskBorderRadius)}
    a${t.maskBorderRadius},${t.maskBorderRadius} 0 0 1 -${t.maskBorderRadius},-${t.maskBorderRadius}
    v${-(F.value.height-2*t.maskBorderRadius)}
    a${t.maskBorderRadius},${t.maskBorderRadius} 0 0 1 ${t.maskBorderRadius},-${t.maskBorderRadius}z`);Wv(O=>{if(v.value){const z=Nr(v.value),q=ye=>{if(ye.sourceEvent.type!=="wheel"||!d.value||!h.value)return;const Pe=ye.sourceEvent.ctrlKey&&Sa()?10:1,Te=-ye.sourceEvent.deltaY*(ye.sourceEvent.deltaMode===1?.05:ye.sourceEvent.deltaMode?1:.002)*t.zoomStep,H=l.value.zoom*2**(Te*Pe);h.value.scaleTo(d.value,H)},te=ye=>{if(ye.sourceEvent.type!=="mousemove"||!d.value||!h.value)return;const Pe=b.value*Math.max(1,l.value.zoom)*(t.inversePan?-1:1),Te={x:l.value.x-ye.sourceEvent.movementX*Pe,y:l.value.y-ye.sourceEvent.movementY*Pe},H=[[0,0],[c.value.width,c.value.height]],B=rp.translate(Te.x,Te.y).scale(l.value.zoom),X=h.value.constrain()(B,H,u.value);h.value.transform(d.value,X)},ne=TF().wheelDelta(ye=>Gf(ye)*(t.zoomStep/10)).on("zoom",t.pannable?te:()=>{}).on("zoom.wheel",t.zoomable?q:()=>{});z.call(ne),O(()=>{z.on("zoom",null)})}},{flush:"post"});function w(O){const[z,q]=Tr(O);e("click",{event:O,position:{x:z,y:q}})}function W(O,z){const q={event:O,node:z,connectedEdges:lo([z],a.value)};f.miniMapNodeClick(q),e("nodeClick",q)}function E(O,z){const q={event:O,node:z,connectedEdges:lo([z],a.value)};f.miniMapNodeDoubleClick(q),e("nodeDblclick",q)}function k(O,z){const q={event:O,node:z,connectedEdges:lo([z],a.value)};f.miniMapNodeMouseEnter(q),e("nodeMouseenter",q)}function A(O,z){const q={event:O,node:z,connectedEdges:lo([z],a.value)};f.miniMapNodeMouseMove(q),e("nodeMousemove",q)}function I(O,z){const q={event:O,node:z,connectedEdges:lo([z],a.value)};f.miniMapNodeMouseLeave(q),e("nodeMouseleave",q)}return(O,z)=>(ae(),tn(fe(JN),{position:O.position,class:lt(["vue-flow__minimap",{pannable:O.pannable,zoomable:O.zoomable}])},{default:rn(()=>[(ae(),ge("svg",{ref_key:"el",ref:v,width:g.value,height:p.value,viewBox:[P.value.x,P.value.y,P.value.width,P.value.height].join(" "),role:"img","aria-labelledby":`vue-flow__minimap-${fe(s)}`,onClick:w},[O.ariaLabel?(ae(),ge("title",{key:0,id:`vue-flow__minimap-${fe(s)}`},Re(O.ariaLabel),9,PF)):$e("",!0),(ae(!0),ge(it,null,Gt(fe(m),q=>(ae(),tn(RF,{id:q.id,key:q.id,f:"",position:q.computedPosition,dimensions:q.dimensions,selected:q.selected,dragging:q.dragging,style:nt(q.style),class:lt(R.value(q)),color:S.value(q),"border-radius":O.nodeBorderRadius,"stroke-color":_.value(q),"stroke-width":O.nodeStrokeWidth,"shape-rendering":fe(y),type:q.type,hidden:q.hidden,onClick:te=>W(te,q),onDblclick:te=>E(te,q),onMouseenter:te=>k(te,q),onMousemove:te=>A(te,q),onMouseleave:te=>I(te,q)},null,8,["id","position","dimensions","selected","dragging","style","class","color","border-radius","stroke-color","stroke-width","shape-rendering","type","hidden","onClick","onDblclick","onMouseenter","onMousemove","onMouseleave"]))),128)),K("path",{class:"vue-flow__minimap-mask",d:M.value,fill:O.maskColor,stroke:O.maskStrokeColor,"stroke-width":O.maskStrokeWidth,"fill-rule":"evenodd"},null,8,NF)],8,IF))]),_:1},8,["position","class"]))}});var ih="http://www.w3.org/1999/xhtml";const ov={svg:"http://www.w3.org/2000/svg",xhtml:ih,xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"};function Zy(t){var e=t+="",n=e.indexOf(":");return n>=0&&(e=t.slice(0,n))!=="xmlns"&&(t=t.slice(n+1)),ov.hasOwnProperty(e)?{space:ov[e],local:t}:t}function UF(t){return function(){var e=this.ownerDocument,n=this.namespaceURI;return n===ih&&e.documentElement.namespaceURI===ih?e.createElement(t):e.createElementNS(n,t)}}function FF(t){return function(){return this.ownerDocument.createElementNS(t.space,t.local)}}function jy(t){var e=Zy(t);return(e.local?FF:UF)(e)}function OF(){}function Jy(t){return t==null?OF:function(){return this.querySelector(t)}}function BF(t){typeof t!="function"&&(t=Jy(t));for(var e=this._groups,n=e.length,i=new Array(n),r=0;r<n;++r)for(var o=e[r],s=o.length,a=i[r]=new Array(s),l,u,c=0;c<s;++c)(l=o[c])&&(u=t.call(l,l.__data__,c,o))&&("__data__"in l&&(u.__data__=l.__data__),a[c]=u);return new kn(i,this._parents)}function kF(t){return t==null?[]:Array.isArray(t)?t:Array.from(t)}function VF(){return[]}function zF(t){return t==null?VF:function(){return this.querySelectorAll(t)}}function $F(t){return function(){return kF(t.apply(this,arguments))}}function HF(t){typeof t=="function"?t=$F(t):t=zF(t);for(var e=this._groups,n=e.length,i=[],r=[],o=0;o<n;++o)for(var s=e[o],a=s.length,l,u=0;u<a;++u)(l=s[u])&&(i.push(t.call(l,l.__data__,u,s)),r.push(l));return new kn(i,r)}function GF(t){return function(){return this.matches(t)}}function Qy(t){return function(e){return e.matches(t)}}var WF=Array.prototype.find;function XF(t){return function(){return WF.call(this.children,t)}}function YF(){return this.firstElementChild}function qF(t){return this.select(t==null?YF:XF(typeof t=="function"?t:Qy(t)))}var KF=Array.prototype.filter;function ZF(){return Array.from(this.children)}function jF(t){return function(){return KF.call(this.children,t)}}function JF(t){return this.selectAll(t==null?ZF:jF(typeof t=="function"?t:Qy(t)))}function QF(t){typeof t!="function"&&(t=GF(t));for(var e=this._groups,n=e.length,i=new Array(n),r=0;r<n;++r)for(var o=e[r],s=o.length,a=i[r]=[],l,u=0;u<s;++u)(l=o[u])&&t.call(l,l.__data__,u,o)&&a.push(l);return new kn(i,this._parents)}function ex(t){return new Array(t.length)}function eO(){return new kn(this._enter||this._groups.map(ex),this._parents)}function Iu(t,e){this.ownerDocument=t.ownerDocument,this.namespaceURI=t.namespaceURI,this._next=null,this._parent=t,this.__data__=e}Iu.prototype={constructor:Iu,appendChild:function(t){return this._parent.insertBefore(t,this._next)},insertBefore:function(t,e){return this._parent.insertBefore(t,e)},querySelector:function(t){return this._parent.querySelector(t)},querySelectorAll:function(t){return this._parent.querySelectorAll(t)}};function tO(t){return function(){return t}}function nO(t,e,n,i,r,o){for(var s=0,a,l=e.length,u=o.length;s<u;++s)(a=e[s])?(a.__data__=o[s],i[s]=a):n[s]=new Iu(t,o[s]);for(;s<l;++s)(a=e[s])&&(r[s]=a)}function iO(t,e,n,i,r,o,s){var a,l,u=new Map,c=e.length,f=o.length,d=new Array(c),h;for(a=0;a<c;++a)(l=e[a])&&(d[a]=h=s.call(l,l.__data__,a,e)+"",u.has(h)?r[a]=l:u.set(h,l));for(a=0;a<f;++a)h=s.call(t,o[a],a,o)+"",(l=u.get(h))?(i[a]=l,l.__data__=o[a],u.delete(h)):n[a]=new Iu(t,o[a]);for(a=0;a<c;++a)(l=e[a])&&u.get(d[a])===l&&(r[a]=l)}function rO(t){return t.__data__}function oO(t,e){if(!arguments.length)return Array.from(this,rO);var n=e?iO:nO,i=this._parents,r=this._groups;typeof t!="function"&&(t=tO(t));for(var o=r.length,s=new Array(o),a=new Array(o),l=new Array(o),u=0;u<o;++u){var c=i[u],f=r[u],d=f.length,h=sO(t.call(c,c&&c.__data__,u,i)),m=h.length,v=a[u]=new Array(m),g=s[u]=new Array(m),p=l[u]=new Array(d);n(c,f,v,g,p,h,e);for(var y=0,S=0,_,R;y<m;++y)if(_=v[y]){for(y>=S&&(S=y+1);!(R=g[S])&&++S<m;);_._next=R||null}}return s=new kn(s,i),s._enter=a,s._exit=l,s}function sO(t){return typeof t=="object"&&"length"in t?t:Array.from(t)}function aO(){return new kn(this._exit||this._groups.map(ex),this._parents)}function lO(t,e,n){var i=this.enter(),r=this,o=this.exit();return typeof t=="function"?(i=t(i),i&&(i=i.selection())):i=i.append(t+""),e!=null&&(r=e(r),r&&(r=r.selection())),n==null?o.remove():n(o),i&&r?i.merge(r).order():r}function uO(t){for(var e=t.selection?t.selection():t,n=this._groups,i=e._groups,r=n.length,o=i.length,s=Math.min(r,o),a=new Array(r),l=0;l<s;++l)for(var u=n[l],c=i[l],f=u.length,d=a[l]=new Array(f),h,m=0;m<f;++m)(h=u[m]||c[m])&&(d[m]=h);for(;l<r;++l)a[l]=n[l];return new kn(a,this._parents)}function cO(){for(var t=this._groups,e=-1,n=t.length;++e<n;)for(var i=t[e],r=i.length-1,o=i[r],s;--r>=0;)(s=i[r])&&(o&&s.compareDocumentPosition(o)^4&&o.parentNode.insertBefore(s,o),o=s);return this}function dO(t){t||(t=fO);function e(f,d){return f&&d?t(f.__data__,d.__data__):!f-!d}for(var n=this._groups,i=n.length,r=new Array(i),o=0;o<i;++o){for(var s=n[o],a=s.length,l=r[o]=new Array(a),u,c=0;c<a;++c)(u=s[c])&&(l[c]=u);l.sort(e)}return new kn(r,this._parents).order()}function fO(t,e){return t<e?-1:t>e?1:t>=e?0:NaN}function hO(){var t=arguments[0];return arguments[0]=this,t.apply(null,arguments),this}function pO(){return Array.from(this)}function mO(){for(var t=this._groups,e=0,n=t.length;e<n;++e)for(var i=t[e],r=0,o=i.length;r<o;++r){var s=i[r];if(s)return s}return null}function gO(){let t=0;for(const e of this)++t;return t}function vO(){return!this.node()}function _O(t){for(var e=this._groups,n=0,i=e.length;n<i;++n)for(var r=e[n],o=0,s=r.length,a;o<s;++o)(a=r[o])&&t.call(a,a.__data__,o,r);return this}function yO(t){return function(){this.removeAttribute(t)}}function xO(t){return function(){this.removeAttributeNS(t.space,t.local)}}function bO(t,e){return function(){this.setAttribute(t,e)}}function SO(t,e){return function(){this.setAttributeNS(t.space,t.local,e)}}function MO(t,e){return function(){var n=e.apply(this,arguments);n==null?this.removeAttribute(t):this.setAttribute(t,n)}}function wO(t,e){return function(){var n=e.apply(this,arguments);n==null?this.removeAttributeNS(t.space,t.local):this.setAttributeNS(t.space,t.local,n)}}function EO(t,e){var n=Zy(t);if(arguments.length<2){var i=this.node();return n.local?i.getAttributeNS(n.space,n.local):i.getAttribute(n)}return this.each((e==null?n.local?xO:yO:typeof e=="function"?n.local?wO:MO:n.local?SO:bO)(n,e))}function tx(t){return t.ownerDocument&&t.ownerDocument.defaultView||t.document&&t||t.defaultView}function TO(t){return function(){this.style.removeProperty(t)}}function CO(t,e,n){return function(){this.style.setProperty(t,e,n)}}function AO(t,e,n){return function(){var i=e.apply(this,arguments);i==null?this.style.removeProperty(t):this.style.setProperty(t,i,n)}}function RO(t,e,n){return arguments.length>1?this.each((e==null?TO:typeof e=="function"?AO:CO)(t,e,n??"")):IO(this.node(),t)}function IO(t,e){return t.style.getPropertyValue(e)||tx(t).getComputedStyle(t,null).getPropertyValue(e)}function PO(t){return function(){delete this[t]}}function NO(t,e){return function(){this[t]=e}}function DO(t,e){return function(){var n=e.apply(this,arguments);n==null?delete this[t]:this[t]=n}}function LO(t,e){return arguments.length>1?this.each((e==null?PO:typeof e=="function"?DO:NO)(t,e)):this.node()[t]}function nx(t){return t.trim().split(/^|\s+/)}function op(t){return t.classList||new ix(t)}function ix(t){this._node=t,this._names=nx(t.getAttribute("class")||"")}ix.prototype={add:function(t){var e=this._names.indexOf(t);e<0&&(this._names.push(t),this._node.setAttribute("class",this._names.join(" ")))},remove:function(t){var e=this._names.indexOf(t);e>=0&&(this._names.splice(e,1),this._node.setAttribute("class",this._names.join(" ")))},contains:function(t){return this._names.indexOf(t)>=0}};function rx(t,e){for(var n=op(t),i=-1,r=e.length;++i<r;)n.add(e[i])}function ox(t,e){for(var n=op(t),i=-1,r=e.length;++i<r;)n.remove(e[i])}function UO(t){return function(){rx(this,t)}}function FO(t){return function(){ox(this,t)}}function OO(t,e){return function(){(e.apply(this,arguments)?rx:ox)(this,t)}}function BO(t,e){var n=nx(t+"");if(arguments.length<2){for(var i=op(this.node()),r=-1,o=n.length;++r<o;)if(!i.contains(n[r]))return!1;return!0}return this.each((typeof e=="function"?OO:e?UO:FO)(n,e))}function kO(){this.textContent=""}function VO(t){return function(){this.textContent=t}}function zO(t){return function(){var e=t.apply(this,arguments);this.textContent=e??""}}function $O(t){return arguments.length?this.each(t==null?kO:(typeof t=="function"?zO:VO)(t)):this.node().textContent}function HO(){this.innerHTML=""}function GO(t){return function(){this.innerHTML=t}}function WO(t){return function(){var e=t.apply(this,arguments);this.innerHTML=e??""}}function XO(t){return arguments.length?this.each(t==null?HO:(typeof t=="function"?WO:GO)(t)):this.node().innerHTML}function YO(){this.nextSibling&&this.parentNode.appendChild(this)}function qO(){return this.each(YO)}function KO(){this.previousSibling&&this.parentNode.insertBefore(this,this.parentNode.firstChild)}function ZO(){return this.each(KO)}function jO(t){var e=typeof t=="function"?t:jy(t);return this.select(function(){return this.appendChild(e.apply(this,arguments))})}function JO(){return null}function QO(t,e){var n=typeof t=="function"?t:jy(t),i=e==null?JO:typeof e=="function"?e:Jy(e);return this.select(function(){return this.insertBefore(n.apply(this,arguments),i.apply(this,arguments)||null)})}function eB(){var t=this.parentNode;t&&t.removeChild(this)}function tB(){return this.each(eB)}function nB(){var t=this.cloneNode(!1),e=this.parentNode;return e?e.insertBefore(t,this.nextSibling):t}function iB(){var t=this.cloneNode(!0),e=this.parentNode;return e?e.insertBefore(t,this.nextSibling):t}function rB(t){return this.select(t?iB:nB)}function oB(t){return arguments.length?this.property("__data__",t):this.node().__data__}function sB(t){return function(e){t.call(this,e,this.__data__)}}function aB(t){return t.trim().split(/^|\s+/).map(function(e){var n="",i=e.indexOf(".");return i>=0&&(n=e.slice(i+1),e=e.slice(0,i)),{type:e,name:n}})}function lB(t){return function(){var e=this.__on;if(e){for(var n=0,i=-1,r=e.length,o;n<r;++n)o=e[n],(!t.type||o.type===t.type)&&o.name===t.name?this.removeEventListener(o.type,o.listener,o.options):e[++i]=o;++i?e.length=i:delete this.__on}}}function uB(t,e,n){return function(){var i=this.__on,r,o=sB(e);if(i){for(var s=0,a=i.length;s<a;++s)if((r=i[s]).type===t.type&&r.name===t.name){this.removeEventListener(r.type,r.listener,r.options),this.addEventListener(r.type,r.listener=o,r.options=n),r.value=e;return}}this.addEventListener(t.type,o,n),r={type:t.type,name:t.name,value:e,listener:o,options:n},i?i.push(r):this.__on=[r]}}function cB(t,e,n){var i=aB(t+""),r,o=i.length,s;if(arguments.length<2){var a=this.node().__on;if(a){for(var l=0,u=a.length,c;l<u;++l)for(r=0,c=a[l];r<o;++r)if((s=i[r]).type===c.type&&s.name===c.name)return c.value}return}for(a=e?uB:lB,r=0;r<o;++r)this.each(a(i[r],e,n));return this}function sx(t,e,n){var i=tx(t),r=i.CustomEvent;typeof r=="function"?r=new r(e,n):(r=i.document.createEvent("Event"),n?(r.initEvent(e,n.bubbles,n.cancelable),r.detail=n.detail):r.initEvent(e,!1,!1)),t.dispatchEvent(r)}function dB(t,e){return function(){return sx(this,t,e)}}function fB(t,e){return function(){return sx(this,t,e.apply(this,arguments))}}function hB(t,e){return this.each((typeof e=="function"?fB:dB)(t,e))}function*pB(){for(var t=this._groups,e=0,n=t.length;e<n;++e)for(var i=t[e],r=0,o=i.length,s;r<o;++r)(s=i[r])&&(yield s)}var mB=[null];function kn(t,e){this._groups=t,this._parents=e}function gB(){return this}kn.prototype={constructor:kn,select:BF,selectAll:HF,selectChild:qF,selectChildren:JF,filter:QF,data:oO,enter:eO,exit:aO,join:lO,merge:uO,selection:gB,order:cO,sort:dO,call:hO,nodes:pO,node:mO,size:gO,empty:vO,each:_O,attr:EO,style:RO,property:LO,classed:BO,text:$O,html:XO,raise:qO,lower:ZO,append:jO,insert:QO,remove:tB,clone:rB,datum:oB,on:cB,dispatch:hB,[Symbol.iterator]:pB};function Ca(t){return typeof t=="string"?new kn([[document.querySelector(t)]],[document.documentElement]):new kn([[t]],mB)}function vB(t){let e;for(;e=t.sourceEvent;)t=e;return t}function sv(t,e){if(t=vB(t),e===void 0&&(e=t.currentTarget),e){var n=e.ownerSVGElement||e;if(n.createSVGPoint){var i=n.createSVGPoint();return i.x=t.clientX,i.y=t.clientY,i=i.matrixTransform(e.getScreenCTM().inverse()),[i.x,i.y]}if(e.getBoundingClientRect){var r=e.getBoundingClientRect();return[t.clientX-r.left-e.clientLeft,t.clientY-r.top-e.clientTop]}}return[t.pageX,t.pageY]}var _B={value:()=>{}};function ax(){for(var t=0,e=arguments.length,n={},i;t<e;++t){if(!(i=arguments[t]+"")||i in n||/[\s.]/.test(i))throw new Error("illegal type: "+i);n[i]=[]}return new jl(n)}function jl(t){this._=t}function yB(t,e){return t.trim().split(/^|\s+/).map(function(n){var i="",r=n.indexOf(".");if(r>=0&&(i=n.slice(r+1),n=n.slice(0,r)),n&&!e.hasOwnProperty(n))throw new Error("unknown type: "+n);return{type:n,name:i}})}jl.prototype=ax.prototype={constructor:jl,on:function(t,e){var n=this._,i=yB(t+"",n),r,o=-1,s=i.length;if(arguments.length<2){for(;++o<s;)if((r=(t=i[o]).type)&&(r=xB(n[r],t.name)))return r;return}if(e!=null&&typeof e!="function")throw new Error("invalid callback: "+e);for(;++o<s;)if(r=(t=i[o]).type)n[r]=av(n[r],t.name,e);else if(e==null)for(r in n)n[r]=av(n[r],t.name,null);return this},copy:function(){var t={},e=this._;for(var n in e)t[n]=e[n].slice();return new jl(t)},call:function(t,e){if((r=arguments.length-2)>0)for(var n=new Array(r),i=0,r,o;i<r;++i)n[i]=arguments[i+2];if(!this._.hasOwnProperty(t))throw new Error("unknown type: "+t);for(o=this._[t],i=0,r=o.length;i<r;++i)o[i].value.apply(e,n)},apply:function(t,e,n){if(!this._.hasOwnProperty(t))throw new Error("unknown type: "+t);for(var i=this._[t],r=0,o=i.length;r<o;++r)i[r].value.apply(e,n)}};function xB(t,e){for(var n=0,i=t.length,r;n<i;++n)if((r=t[n]).name===e)return r.value}function av(t,e,n){for(var i=0,r=t.length;i<r;++i)if(t[i].name===e){t[i]=_B,t=t.slice(0,i).concat(t.slice(i+1));break}return n!=null&&t.push({name:e,value:n}),t}const bB={passive:!1},Aa={capture:!0,passive:!1};function Sd(t){t.stopImmediatePropagation()}function os(t){t.preventDefault(),t.stopImmediatePropagation()}function SB(t){var e=t.document.documentElement,n=Ca(t).on("dragstart.drag",os,Aa);"onselectstart"in e?n.on("selectstart.drag",os,Aa):(e.__noselect=e.style.MozUserSelect,e.style.MozUserSelect="none")}function MB(t,e){var n=t.document.documentElement,i=Ca(t).on("dragstart.drag",null);e&&(i.on("click.drag",os,Aa),setTimeout(function(){i.on("click.drag",null)},0)),"onselectstart"in n?i.on("selectstart.drag",null):(n.style.MozUserSelect=n.__noselect,delete n.__noselect)}const Rl=t=>()=>t;function rh(t,{sourceEvent:e,subject:n,target:i,identifier:r,active:o,x:s,y:a,dx:l,dy:u,dispatch:c}){Object.defineProperties(this,{type:{value:t,enumerable:!0,configurable:!0},sourceEvent:{value:e,enumerable:!0,configurable:!0},subject:{value:n,enumerable:!0,configurable:!0},target:{value:i,enumerable:!0,configurable:!0},identifier:{value:r,enumerable:!0,configurable:!0},active:{value:o,enumerable:!0,configurable:!0},x:{value:s,enumerable:!0,configurable:!0},y:{value:a,enumerable:!0,configurable:!0},dx:{value:l,enumerable:!0,configurable:!0},dy:{value:u,enumerable:!0,configurable:!0},_:{value:c}})}rh.prototype.on=function(){var t=this._.on.apply(this._,arguments);return t===this._?this:t};function wB(t){return!t.ctrlKey&&!t.button}function EB(){return this.parentNode}function TB(t,e){return e??{x:t.x,y:t.y}}function CB(){return navigator.maxTouchPoints||"ontouchstart"in this}function AB(){var t=wB,e=EB,n=TB,i=CB,r={},o=ax("start","drag","end"),s=0,a,l,u,c,f=0;function d(_){_.on("mousedown.drag",h).filter(i).on("touchstart.drag",g).on("touchmove.drag",p,bB).on("touchend.drag touchcancel.drag",y).style("touch-action","none").style("-webkit-tap-highlight-color","rgba(0,0,0,0)")}function h(_,R){if(!(c||!t.call(this,_,R))){var N=S(this,e.call(this,_,R),_,R,"mouse");N&&(Ca(_.view).on("mousemove.drag",m,Aa).on("mouseup.drag",v,Aa),SB(_.view),Sd(_),u=!1,a=_.clientX,l=_.clientY,N("start",_))}}function m(_){if(os(_),!u){var R=_.clientX-a,N=_.clientY-l;u=R*R+N*N>f}r.mouse("drag",_)}function v(_){Ca(_.view).on("mousemove.drag mouseup.drag",null),MB(_.view,u),os(_),r.mouse("end",_)}function g(_,R){if(t.call(this,_,R)){var N=_.changedTouches,F=e.call(this,_,R),x=N.length,b,P;for(b=0;b<x;++b)(P=S(this,F,_,R,N[b].identifier,N[b]))&&(Sd(_),P("start",_,N[b]))}}function p(_){var R=_.changedTouches,N=R.length,F,x;for(F=0;F<N;++F)(x=r[R[F].identifier])&&(os(_),x("drag",_,R[F]))}function y(_){var R=_.changedTouches,N=R.length,F,x;for(c&&clearTimeout(c),c=setTimeout(function(){c=null},500),F=0;F<N;++F)(x=r[R[F].identifier])&&(Sd(_),x("end",_,R[F]))}function S(_,R,N,F,x,b){var P=o.copy(),M=sv(b||N,R),w,W,E;if((E=n.call(_,new rh("beforestart",{sourceEvent:N,target:d,identifier:x,active:s,x:M[0],y:M[1],dx:0,dy:0,dispatch:P}),F))!=null)return w=E.x-M[0]||0,W=E.y-M[1]||0,function k(A,I,O){var z=M,q;switch(A){case"start":r[x]=k,q=s++;break;case"end":delete r[x],--s;case"drag":M=sv(O||I,R),q=s;break}P.call(A,_,new rh(A,{sourceEvent:I,subject:E,target:d,identifier:x,active:q,x:M[0]+w,y:M[1]+W,dx:M[0]-z[0],dy:M[1]-z[1],dispatch:P}),F)}}return d.filter=function(_){return arguments.length?(t=typeof _=="function"?_:Rl(!!_),d):t},d.container=function(_){return arguments.length?(e=typeof _=="function"?_:Rl(_),d):e},d.subject=function(_){return arguments.length?(n=typeof _=="function"?_:Rl(_),d):n},d.touchable=function(_){return arguments.length?(i=typeof _=="function"?_:Rl(!!_),d):i},d.on=function(){var _=o.on.apply(o,arguments);return _===o?d:_},d.clickDistance=function(_){return arguments.length?(f=(_=+_)*_,d):Math.sqrt(f)},d}var To=(t=>(t.Line="line",t.Handle="handle",t))(To||{});function RB({width:t,prevWidth:e,height:n,prevHeight:i,invertX:r,invertY:o}){const s=t-e,a=n-i,l=[s>0?1:s<0?-1:0,a>0?1:a<0?-1:0];return s&&r&&(l[0]=l[0]*-1),a&&o&&(l[1]=l[1]*-1),l}const IB={[To.Line]:"right",[To.Handle]:"bottom-right"},PB={[To.Line]:"borderColor",[To.Handle]:"backgroundColor"},NB={name:"ResizeControl",compatConfig:{MODE:3}},lv=Nt({...NB,props:{nodeId:{},color:{},minWidth:{default:10},minHeight:{default:10},maxWidth:{default:Number.MAX_VALUE},maxHeight:{default:Number.MAX_VALUE},position:{},variant:{default:"handle"},shouldResize:{},keepAspectRatio:{type:[Boolean,Number],default:!1},autoScale:{type:Boolean,default:!0},handleClassName:{},handleStyle:{},lineClassName:{},lineStyle:{},isVisible:{type:Boolean}},emits:["resizeStart","resize","resizeEnd"],setup(t,{emit:e}){const n=t,i={width:0,height:0,x:0,y:0},r={...i,pointerX:0,pointerY:0,aspectRatio:1},{findNode:o,emits:s,viewport:a,noDragClassName:l}=Dt(),u=py(),c=Ne();let f=r,d=i;const h=bt(()=>n.position??IB[n.variant]),m=De(()=>h.value.split("-")),v=bt(()=>n.color?{[PB[n.variant]]:n.color}:{}),g=bt(()=>n.variant===To.Handle),p=De(()=>g.value&&n.autoScale?`${Math.max(1/a.value.zoom,1)}`:void 0);return Wv(y=>{if(!c.value||!n.nodeId)return;const S=Ca(c.value),_=h.value.includes("right")||h.value.includes("left"),R=h.value.includes("bottom")||h.value.includes("top"),N=h.value.includes("left"),F=h.value.includes("top"),x=AB().on("start",b=>{const P=o(n.nodeId),{xSnapped:M,ySnapped:w}=u(b);d={width:P?.dimensions.width??0,height:P?.dimensions.height??0,x:P?.position.x??0,y:P?.position.y??0},f={...d,pointerX:M,pointerY:w,aspectRatio:d.width/d.height},e("resizeStart",{event:b,params:d})}).on("drag",b=>{var P;const{xSnapped:M,ySnapped:w}=u(b),W=o(n.nodeId);if(W){const E=[],{pointerX:k,pointerY:A,width:I,height:O,x:z,y:q,aspectRatio:te}=f,{x:ne,y:ye,width:Pe,height:Te}=d,H=Math.floor(_?M-k:0),B=Math.floor(R?w-A:0);let X=ar(I+(N?-H:H),n.minWidth,n.maxWidth),ve=ar(O+(F?-B:B),n.minHeight,n.maxHeight);if(n.keepAspectRatio){const U=X/ve;let V=te;typeof n.keepAspectRatio=="number"&&U!==n.keepAspectRatio&&(V=n.keepAspectRatio);const Z=_&&R,C=_&&!R,se=R&&!_;X=U<=V&&Z||se?ve*V:X,ve=U>V&&Z||C?X/V:ve,X>=n.maxWidth?(X=n.maxWidth,ve=n.maxWidth/V):X<=n.minWidth&&(X=n.minWidth,ve=n.minWidth/V),ve>=n.maxHeight?(ve=n.maxHeight,X=n.maxHeight*V):ve<=n.minHeight&&(ve=n.minHeight,X=n.minHeight*V)}const we=X!==Pe,Ae=ve!==Te;if(N||F){const U=N?z-(X-I):z,V=F?q-(ve-O):q,Z=U!==ne&&we,C=V!==ye&&Ae;if(Z||C){const se={id:W.id,type:"position",from:W.position,position:{x:Z?U:ne,y:C?V:ye}};E.push(se),d.x=se.position.x,d.y=se.position.y}}if(n.nodeId&&(we||Ae)){const U={id:n.nodeId,type:"dimensions",updateStyle:!0,resizing:!0,dimensions:{width:X,height:ve}};E.push(U),d.width=X,d.height=ve}if(E.length===0)return;const G=RB({width:d.width,prevWidth:Pe,height:d.height,prevHeight:Te,invertX:N,invertY:F}),Y={...d,direction:G};if(((P=n.shouldResize)==null?void 0:P.call(n,b,Y))===!1)return;e("resize",{event:b,params:Y}),s.nodesChange(E)}}).on("end",b=>{if(n.nodeId){const P={id:n.nodeId,type:"dimensions",resizing:!1};e("resizeEnd",{event:b,params:d}),s.nodesChange([P])}});S.call(x),y(()=>{S.on(".drag",null)})}),(y,S)=>(ae(),ge("div",{ref_key:"resizeControlRef",ref:c,class:lt(["vue-flow__resize-control",[...m.value,y.variant,fe(l)]]),style:nt({...v.value,scale:p.value})},[nr(y.$slots,"default")],6))}}),DB={name:"NodeResizer",compatConfig:{MODE:3},inheritAttrs:!1},LB=Nt({...DB,props:{nodeId:{},color:{},handleClassName:{},handleStyle:{},lineClassName:{},lineStyle:{},isVisible:{type:Boolean,default:!0},minWidth:{},minHeight:{},maxWidth:{},maxHeight:{},shouldResize:{},keepAspectRatio:{type:[Boolean,Number]},autoScale:{type:Boolean,default:!0}},emits:["resizeStart","resize","resizeEnd"],setup(t,{emit:e}){const n=t,{findNode:i,emits:r}=Dt(),o=["top-left","top-right","bottom-left","bottom-right"],s=["top","right","bottom","left"],a=Pn(Kh,null),l=bt(()=>typeof n.nodeId=="string"?n.nodeId:a),u=De(()=>i(l.value));return at([()=>n.minWidth,()=>n.minHeight,()=>n.maxWidth,()=>n.maxHeight,()=>{var c;return!!((c=u.value)!=null&&c.dimensions.width)&&!!u.value.dimensions.height}],([c,f,d,h,m])=>{const v=u.value;if(v&&m){const g={id:v.id,type:"dimensions",updateStyle:!0,dimensions:{width:v.dimensions.width,height:v.dimensions.height}};c&&v.dimensions.width<c&&(g.dimensions.width=c),f&&v.dimensions.height<f&&(g.dimensions.height=f),d&&v.dimensions.width>d&&(g.dimensions.width=d),h&&v.dimensions.height>h&&(g.dimensions.height=h),(g.dimensions.width!==v.dimensions.width||g.dimensions.height!==v.dimensions.height)&&r.nodesChange([g])}},{flush:"post",immediate:!0}),(c,f)=>c.isVisible?(ae(),ge(it,{key:0},[(ae(),ge(it,null,Gt(s,d=>tt(lv,{key:d,class:lt(c.lineClassName),style:nt(c.lineStyle),"node-id":l.value,position:d,variant:fe(To).Line,color:c.color,"min-width":c.minWidth,"min-height":c.minHeight,"max-width":c.maxWidth,"max-height":c.maxHeight,"should-resize":c.shouldResize,"keep-aspect-ratio":c.keepAspectRatio,"auto-scale":c.autoScale,onResizeStart:f[0]||(f[0]=h=>e("resizeStart",h)),onResize:f[1]||(f[1]=h=>e("resize",h)),onResizeEnd:f[2]||(f[2]=h=>e("resizeEnd",h))},null,8,["class","style","node-id","position","variant","color","min-width","min-height","max-width","max-height","should-resize","keep-aspect-ratio","auto-scale"])),64)),(ae(),ge(it,null,Gt(o,d=>tt(lv,{key:d,class:lt(c.handleClassName),style:nt(c.handleStyle),"node-id":l.value,position:d,color:c.color,"min-width":c.minWidth,"min-height":c.minHeight,"max-width":c.maxWidth,"max-height":c.maxHeight,"should-resize":c.shouldResize,"keep-aspect-ratio":c.keepAspectRatio,"auto-scale":c.autoScale,onResizeStart:f[3]||(f[3]=h=>e("resizeStart",h)),onResize:f[4]||(f[4]=h=>e("resize",h)),onResizeEnd:f[5]||(f[5]=h=>e("resizeEnd",h))},null,8,["class","style","node-id","position","color","min-width","min-height","max-width","max-height","should-resize","keep-aspect-ratio","auto-scale"])),64))],64)):$e("",!0)}});let oh=0;function UB(){return`node_${++oh}_${Date.now().toString(36)}`}const Co=eS("graph",()=>{const t=Ne([]),e=Ne([]),n=Fr({}),i=Ne(null),r=Ne(!0),o=Ne("anchored"),s=Ne(null),a=Ne("Untitled Project"),l=Ne(0),u=Ne(!0),c=Ne(!1),f=Ne(!1),d=Ne([]);let h=0;const m=Ne({}),v=Ne({}),g=Ne({});let p=null;const y=Fr({}),S=Ne([]),_=Ne([]),R=Ne(null),N=De(()=>i.value&&t.value.find(ie=>ie.id===i.value)||null),F=De(()=>N.value?$t(N.value.type):null),x=De(()=>i.value?n[i.value]||{}:{}),b=De(()=>S.value.length>0),P=De(()=>_.value.length>0);function M(ie){p=ie}function w(){const ie={nodes:JSON.parse(JSON.stringify(t.value)),edges:JSON.parse(JSON.stringify(e.value)),nodeParams:JSON.parse(JSON.stringify(n)),exposedParams:JSON.parse(JSON.stringify(y))};S.value=[...S.value.slice(-49),ie],_.value=[]}function W(ie){t.value=ie.nodes,e.value=ie.edges,Object.keys(n).forEach(ce=>delete n[ce]),Object.assign(n,ie.nodeParams),Object.keys(y).forEach(ce=>delete y[ce]),Object.assign(y,ie.exposedParams)}function E(){if(S.value.length===0)return;const ie={nodes:JSON.parse(JSON.stringify(t.value)),edges:JSON.parse(JSON.stringify(e.value)),nodeParams:JSON.parse(JSON.stringify(n)),exposedParams:JSON.parse(JSON.stringify(y))};_.value=[..._.value,ie];const ce=S.value[S.value.length-1];S.value=S.value.slice(0,-1),W(ce),i.value=null}function k(){if(_.value.length===0)return;const ie={nodes:JSON.parse(JSON.stringify(t.value)),edges:JSON.parse(JSON.stringify(e.value)),nodeParams:JSON.parse(JSON.stringify(n)),exposedParams:JSON.parse(JSON.stringify(y))};S.value=[...S.value,ie];const ce=_.value[_.value.length-1];_.value=_.value.slice(0,-1),W(ce),i.value=null}function A(){if(!i.value)return;const ie=t.value.find(ce=>ce.id===i.value);ie&&(R.value={type:ie.type,position:{...ie.position},params:JSON.parse(JSON.stringify(n[ie.id]||{})),exposedParams:JSON.parse(JSON.stringify(y[ie.id]||{}))})}function I(){if(!R.value)return;const{type:ie,position:ce,params:de,exposedParams:Q}=R.value,J={x:ce.x+40,y:ce.y+40};w();const _e=O(ie,J,!0);_e&&(Object.assign(n[_e],de),Object.keys(Q).length&&(y[_e]={...Q}),R.value={...R.value,position:J},B(_e))}function O(ie,ce={x:200,y:200},de=!1){const Q=$t(ie);if(!Q)return console.warn(`Unknown node type: ${ie}`),null;de||w();const J=UB(),_e={};for(const[We,ee]of Object.entries(Q.params))_e[We]=ee.default;n[J]=_e;const Ie={id:J,type:ie,position:ce,data:{label:Q.label,category:Q.category,def:Q}};return t.value=[...t.value,Ie],J}function z(ie){w(),p&&p(ie),t.value=t.value.filter(ce=>ce.id!==ie),e.value=e.value.filter(ce=>ce.source!==ie&&ce.target!==ie),delete n[ie],delete y[ie],i.value===ie&&(i.value=null),s.value===ie&&(s.value=null)}function q(ie){const ce=t.value.find(Le=>Le.id===ie.source),de=t.value.find(Le=>Le.id===ie.target);if(!ce||!de)return!1;const Q=$t(ce.type),J=$t(de.type);if(!Q||!J)return!1;let _e=Q.outputs.find(Le=>Le.id===ie.sourceHandle),Ie=J.inputs.find(Le=>Le.id===ie.targetHandle);if(!Ie){const Le=y[de.id];if(Le&&Le[ie.targetHandle]){const Oe=J.params[ie.targetHandle];if(Oe){const Be=Oe.type==="int"?me.INT:(Oe.type==="float",me.FLOAT);Ie={id:ie.targetHandle,type:Be}}}}if(Q&&_e){const Oe=H(ie.source).find(Be=>Be.id===ie.sourceHandle);Oe&&(_e=Oe)}if(!_e||!Ie)return!1;if(!Jm(_e.type,Ie.type))return console.warn(`Type mismatch: ${_e.type} → ${Ie.type}`),!1;e.value=e.value.filter(Le=>!(Le.target===ie.target&&Le.targetHandle===ie.targetHandle));const We=_e.type!==me.IMAGE&&_e.type!==me.UV_MAP,ee={id:`e_${ie.source}_${ie.sourceHandle}-${ie.target}_${ie.targetHandle}`,source:ie.source,sourceHandle:ie.sourceHandle,target:ie.target,targetHandle:ie.targetHandle,animated:We};return e.value=[...e.value,ee],w(),!0}function te(ie){w(),e.value=e.value.filter(ce=>ce.id!==ie)}function ne(ie,ce,de){n[ie]||(n[ie]={});const Q=n[ie][ce];if(n[ie][ce]=de,ce==="outputType"){const J=t.value.find(_e=>_e.id===ie);if(J&&J.type==="slider"&&Q!==de){const Ie=H(ie).find(ee=>ee.id==="out")?.type;let We=!1;e.value=e.value.filter(ee=>{if(ee.source!==ie)return!0;const Le=t.value.find(Fe=>Fe.id===ee.target),Oe=Le?$t(Le.type):null;let Be=Oe?.inputs?.find(Fe=>Fe.id===ee.targetHandle)?.type;return!Be&&y[ee.target]?.[ee.targetHandle]&&(Be=Oe?.params?.[ee.targetHandle]?.type==="int"?me.INT:me.FLOAT),Be&&!Jm(Ie,Be)?(console.warn(`Disconnecting edge from ${ie} to ${ee.target} due to type mismatch.`),We=!0,!1):!0}),We&&window.alert("One or more cables were disconnected because the data type changed and they are no longer compatible.")}}}function ye(ie,ce){y[ie]||(y[ie]={}),y[ie][ce]=!y[ie][ce],y[ie][ce]||(e.value=e.value.filter(de=>!(de.target===ie&&de.targetHandle===ce)))}function Pe(ie,ce){return!!y[ie]?.[ce]}function Te(ie){const ce=t.value.find(J=>J.id===ie);if(!ce)return[];const de=$t(ce.type);if(!de)return[];const Q=y[ie]||{};return Object.entries(Q).filter(([J,_e])=>_e).map(([J])=>{const _e=de.params[J];if(!_e)return null;const Ie=_e.type==="int"?me.INT:(_e.type==="float",me.FLOAT);return{id:J,label:_e.label,type:Ie}}).filter(Boolean)}function H(ie){const ce=t.value.find(J=>J.id===ie);if(!ce)return[];const de=$t(ce.type);if(!de||!de.outputs)return[];const Q=de.outputs.map(J=>({...J}));if(ce.type==="slider"){const J=n[ie]?.outputType||"float",_e=Q.find(Ie=>Ie.id==="out");_e&&(_e.type=J==="int"?me.INT:me.FLOAT)}return Q}function B(ie){i.value=ie}function X(){r.value=!r.value}function ve(){r.value=!1}function we(){r.value=!0}function Ae(){o.value==="anchored"?o.value="floating":o.value==="floating"?o.value="background":o.value="anchored"}function G(){for(const ie of t.value)p&&p(ie.id);t.value=[],e.value=[],Object.keys(n).forEach(ie=>delete n[ie]),Object.keys(y).forEach(ie=>delete y[ie]),i.value=null,s.value=null,oh=0}function Y(){const ie={version:1,title:a.value,timestamp:Date.now(),nodes:t.value.map(ce=>({id:ce.id,type:ce.type,position:ce.position})),edges:e.value.map(ce=>({id:ce.id,source:ce.source,sourceHandle:ce.sourceHandle,target:ce.target,targetHandle:ce.targetHandle})),params:{...n},exposedParams:{...y},perfGridCells:d.value.map(ce=>({...ce})),settings:{previewMode:o.value}};return JSON.stringify(ie,null,2)}function L(ie){try{const ce=JSON.parse(ie);ce.version!==1&&console.warn("Unknown graph version:",ce.version),G(),a.value=ce.title||"Untitled Project";for(const Q of ce.nodes){const J=$t(Q.type);if(!J){console.warn(`Skipping unknown node type: ${Q.type}`);continue}const _e={id:Q.id,type:Q.type,position:Q.position,data:{label:J.label,category:J.category,def:J}};t.value.push(_e);const Ie={};for(const[We,ee]of Object.entries(J.params))Ie[We]=ce.params?.[Q.id]?.[We]??ee.default;n[Q.id]=Ie}if(ce.exposedParams)for(const[Q,J]of Object.entries(ce.exposedParams))y[Q]={...J};for(const Q of ce.edges){if(!Q.style||!Q.animated){const J=t.value.find(_e=>_e.id===Q.source);if(J){const _e=$t(J.type);let Ie=_e?.outputs?.find(We=>We.id===Q.sourceHandle);!Ie&&_e&&(Ie=H(Q.source).find(ee=>ee.id===Q.sourceHandle)),Ie&&Ie.type!==me.IMAGE&&Ie.type!==me.UV_MAP&&(Q.animated=!0)}}e.value.push(Q)}return ce.perfGridCells?(d.value=ce.perfGridCells.map(J=>({...J})),h=ce.perfGridCells.reduce((J,_e)=>{const Ie=_e.id.match(/perf_(\d+)_/);return Ie?Math.max(J,parseInt(Ie[1])):J},0)):(d.value=[],h=0),ce.settings&&(o.value="anchored"),oh=ce.nodes.reduce((Q,J)=>{const _e=J.id.match(/node_(\d+)_/);return _e?Math.max(Q,parseInt(_e[1])):Q},0),t.length>0&&(i.value=null),window.dispatchEvent(new Event("graph-loaded")),!0}catch(ce){return console.error("Failed to load graph:",ce),!1}}function U(){const ie=Y(),ce=`mangleditor-graph-${a.value||"default"}`;return localStorage.setItem(ce,ie),!0}async function V(ie=null){try{const ce=ie?`mangleditor-graph-${ie}`:`mangleditor-graph-${a.value||"default"}`,de=localStorage.getItem(ce);if(de)return L(de);if(!ie){console.log("No local save found. Loading StarterTemplate by default...");try{const Q=await fetch("/mangleditor/StarterTemplate.json");if(Q.ok){const J=await Q.text();return L(J)}}catch(Q){console.error("Failed to auto-load StarterTemplate:",Q)}}return!1}catch(ce){return console.error("Failed to load from localStorage:",ce),!1}}function Z(){const ie=Y(),ce=new Blob([ie],{type:"application/json"}),de=URL.createObjectURL(ce),Q=document.createElement("a");Q.href=de;const J=(a.value||"mangleditor").replace(/[^a-zA-Z0-9_-]/g,"_");Q.download=`${J}.json`,Q.click(),URL.revokeObjectURL(de)}function C(ie){const ce=t.value.find(de=>de.id===ie);ce&&(ce.type==="button"||ce.type==="bang")&&(ce._triggered=!0)}function se(){c.value=!c.value,c.value||(f.value=!1)}function re(){f.value=!f.value}function oe(ie){const ce=`perf_${++h}_${Date.now().toString(36)}`;return d.value=[...d.value,{id:ce,controlType:ie,boundNodeId:null,boundParamKey:null,boundTargetNodeId:null,boundParamKeyY:null,boundTargetNodeIdY:null,nickname:"",gridOrder:d.value.length}],ce}function ue(ie){const ce=d.value.find(de=>de.id===ie);ce&&["lfo","timer","damper","fft","accelerometer","xypad"].includes(ce.controlType)&&ce.boundNodeId&&z(ce.boundNodeId),d.value=d.value.filter(de=>de.id!==ie)}function D(ie,ce){return e.value.some(de=>de.target===ie&&de.targetHandle===ce)}function T(ie,ce,de){if(D(ce,de)){console.warn(`Cannot bind perf cell to ${ce}.${de} because it is already modulated by a node connection.`);return}const Q=d.value.find(J=>J.id===ie);Q&&(Q.boundNodeId=ce,Q.boundParamKey=de)}function j(ie,ce,de){const Q=d.value.find(J=>J.id===ie);Q&&(Q.boundTargetNodeId=ce,Q.boundParamKey=de)}function he(ie,ce,de){const Q=d.value.find(J=>J.id===ie);Q&&(Q.boundTargetNodeIdY=ce,Q.boundParamKeyY=de)}function Se(ie,ce){const de=d.value.find(Q=>Q.id===ie);de&&(de.nickname=ce)}function pe(ie,ce){const de=[...d.value],[Q]=de.splice(ie,1);de.splice(ce,0,Q),d.value=de}function ke(){const ie=new Set;for(const de of d.value)de.boundNodeId&&de.boundParamKey&&!de.boundTargetNodeId&&ie.add(`${de.boundNodeId}::${de.boundParamKey}`),de.boundTargetNodeId&&de.boundParamKey&&ie.add(`${de.boundTargetNodeId}::${de.boundParamKey}`),de.boundTargetNodeIdY&&de.boundParamKeyY&&ie.add(`${de.boundTargetNodeIdY}::${de.boundParamKeyY}`);const ce=[];for(const[de,Q]of Object.entries(y))for(const[J,_e]of Object.entries(Q))if(_e&&!ie.has(`${de}::${J}`)&&!D(de,J)){const Ie=t.value.find(Le=>Le.id===de),We=Ie?$t(Ie.type):null;if(We?.isPassthrough)continue;const ee=We?.params?.[J];ce.push({nodeId:de,paramKey:J,nodeLabel:We?.label||Ie?.type||de,paramLabel:ee?.label||J})}return ce}function Ue(){const ie=["knob","slider","bang","button","toggle"];return t.value.filter(ce=>ie.includes(ce.type))}return{nodes:t,edges:e,nodeParams:n,selectedNodeId:i,isRendering:r,previewMode:o,previewNodeId:s,projectTitle:a,exposedParams:y,selectedNode:N,selectedNodeDef:F,selectedNodeParams:x,dataOutputs:m,perfTimings:v,previewImages:g,getDataOutput(ie,ce){return m.value[ie]?.[ce]},addNode:O,removeNode:z,addEdge:q,removeEdge:te,setParam:ne,selectNode:B,toggleRendering:X,stopRendering:ve,startRendering:we,togglePreviewMode:Ae,resetGraph:G,saveGraph:Y,saveToLocalStorage:U,loadGraph:L,loadFromLocalStorage:V,downloadGraph:Z,triggerButton:C,onNodeRemoved:M,toggleExposeParam:ye,isParamExposed:Pe,getExposedHandles:Te,getNodeOutputs:H,undo:E,redo:k,canUndo:b,canRedo:P,copySelected:A,pasteClipboard:I,clipboard:R,isPerformanceMode:c,isPerfEditMode:f,perfGridCells:d,togglePerformanceMode:se,togglePerfEditMode:re,addPerfCell:oe,removePerfCell:ue,bindPerfCell:T,bindPerfCellTarget:j,bindPerfCellTargetY:he,setPerfCellNickname:Se,reorderPerfCells:pe,getUnboundExposedParams:ke,getControlNodes:Ue,bgOpacity:l,showShadows:u}}),FB={width:"100%",height:"100%",viewBox:"0 0 100 100"},OB=["d"],BB=["x2","y2"],kB={key:0,class:"knob-value"},VB=270,Il=-135,zB={__name:"KnobControl",props:{modelValue:{type:Number,default:0},min:{type:Number,default:0},max:{type:Number,default:1},step:{type:Number,default:.01},size:{type:Number,default:60},showValue:{type:Boolean,default:!0}},emits:["update:modelValue"],setup(t,{emit:e}){const n=t,i=e,r=De(()=>{const R=n.min!==void 0?n.min:0,N=n.max!==void 0?n.max:1;return R===N?0:Math.max(0,Math.min(1,(n.modelValue-R)/(N-R)))}),o=De(()=>Il+r.value*VB);function s(R,N,F,x){const b=(x-90)*Math.PI/180;return{x:R+F*Math.cos(b),y:N+F*Math.sin(b)}}const a=De(()=>{const R=s(50,50,40,Il),N=s(50,50,40,o.value),F=o.value-Il<=180?"0":"1";return["M",R.x,R.y,"A",40,40,0,F,1,N.x,N.y].join(" ")}),l=De(()=>s(50,50,24,o.value).x),u=De(()=>s(50,50,24,o.value).y);let c=0,f=0;function d(R,N){const F=c-R,x=n.min!==void 0?n.min:0,b=n.max!==void 0?n.max:1;let M=(b-x||1)/150;N&&(M*=.1);let w=f+F*M;w=Math.max(x,Math.min(b,w)),n.step&&(w=Math.round(w/n.step)*n.step);const W=n.step.toString().split(".")[1]?.length||0;w=Number(w.toFixed(W)),i("update:modelValue",w)}function h(R){c=R.clientY,f=n.modelValue,document.addEventListener("mousemove",m),document.addEventListener("mouseup",v)}function m(R){d(R.clientY,R.shiftKey)}function v(){document.removeEventListener("mousemove",m),document.removeEventListener("mouseup",v)}function g(R){c=R.touches[0].clientY,f=n.modelValue,document.addEventListener("touchmove",p,{passive:!1}),document.addEventListener("touchend",y),document.addEventListener("touchcancel",y)}function p(R){R.preventDefault();const N=R.touches[0];d(N.clientY,!1)}function y(){document.removeEventListener("touchmove",p),document.removeEventListener("touchend",y),document.removeEventListener("touchcancel",y)}function S(){const R=n.min!==void 0?n.min:0,F=((n.max!==void 0?n.max:1)+R)/2;i("update:modelValue",F)}const _=De(()=>Number(n.modelValue).toFixed(Math.min(3,n.step.toString().split(".")[1]?.length||3)));return(R,N)=>(ae(),ge("div",{class:"knob-control",onMousedown:Ve(h,["stop","prevent"]),onTouchstart:Ve(g,["stop","prevent"]),onDblclick:Ve(S,["stop"]),style:nt({width:t.size?t.size+"px":"100%",height:t.size?t.size+"px":"100%"})},[(ae(),ge("svg",FB,[N[0]||(N[0]=K("path",{class:"knob-track",d:"M 21.716 78.284 A 40 40 0 1 1 78.284 78.284",fill:"none",stroke:"rgba(255, 255, 255, 0.1)","stroke-width":"12","stroke-linecap":"round"},null,-1)),o.value>Il?(ae(),ge("path",{key:0,class:"knob-arc",d:a.value,fill:"none",stroke:"var(--accent-primary, #00d4ff)","stroke-width":"12","stroke-linecap":"round"},null,8,OB)):$e("",!0),N[1]||(N[1]=K("circle",{cx:"50",cy:"50",r:"26",fill:"var(--bg-light, #333)",stroke:"var(--border-color, #444)","stroke-width":"2"},null,-1)),K("line",{x1:50,y1:50,x2:l.value,y2:u.value,stroke:"var(--text-color, #fff)","stroke-width":"4","stroke-linecap":"round"},null,8,BB)])),t.showValue?(ae(),ge("div",kB,Re(_.value),1)):$e("",!0)],36))}},lx=fr(zB,[["__scopeId","data-v-06e9e2ee"]]),$B=["title"],HB={key:0,class:"flow-node__collapsed-badge flow-node__collapsed-badge--in"},GB={class:"flow-node__title"},WB={key:1,class:"flow-node__collapsed-badge flow-node__collapsed-badge--out"},XB=["title"],YB=["title"],qB=["title"],KB=["title"],ZB={class:"flow-node__body"},jB={class:"flow-node__handles"},JB={key:0,class:"flow-node__handle-tooltip flow-node__handle-tooltip--left"},QB={class:"flow-node__handle-label"},ek={class:"flow-node__handle-type"},tk=["title"],nk={key:0,class:"flow-node__handle-tooltip flow-node__handle-tooltip--left"},ik={class:"flow-node__handle-label flow-node__handle-label--exposed"},rk={class:"flow-node__handle-type"},ok={style:{width:"100%"}},sk={key:1,class:"flow-node__image-preview-container"},ak=["src"],lk={key:1,class:"flow-node__slot-label",style:{"text-align":"center",color:"var(--accent-success)",padding:"8px 0","font-size":"11px"}},uk={key:1,class:"flow-node__image-preview-container"},ck=["min","max","step","value"],dk={class:"flow-node__slider-value"},fk={class:"flow-node__inline-param-row"},hk=["value"],pk=["value"],mk={class:"flow-node__inline-param-row"},gk=["value"],vk={class:"flow-node__inline-param-val"},_k={class:"flow-node__inline-param-row"},yk=["value"],xk={class:"flow-node__inline-param-val"},bk={class:"flow-node__xypad-readout"},Sk={class:"flow-node__inline-param-val"},Mk={class:"flow-node__inline-param-val"},wk={key:9,class:"flow-node__monitor"},Ek=["title"],Tk={key:10,class:"flow-node__preview-inline"},Ck={class:"flow-node__handles"},Ak={class:"flow-node__handle-type"},Rk={class:"flow-node__handle-label"},Ik=["title"],Pk={key:1,class:"flow-node__handle-tooltip flow-node__handle-tooltip--right"},uv=100,Md=60,Nk={__name:"FlowNode",props:{nodeId:{type:String,required:!0},nodeType:{type:String,required:!0},def:{type:Object,required:!0},params:{type:Object,default:()=>({})},selected:{type:Boolean,default:!1},inputValues:{type:Object,default:()=>({})},outputValues:{type:Object,default:()=>({})},monitorValue:{type:Number,default:null},exposedHandles:{type:Array,default:()=>[]},perfMs:{type:Number,default:null}},emits:["select","imageLoaded","export","trigger","paramChange"],setup(t,{emit:e}){const n=t,i=e,r=Co(),o=De(()=>{const H=r.edges.filter(B=>B.target===n.nodeId);return[...new Set(H.map(B=>B.targetHandle))]}),s=De(()=>{const H=r.edges.filter(B=>B.source===n.nodeId);return[...new Set(H.map(B=>B.sourceHandle))]}),a=De(()=>r.getNodeOutputs(n.nodeId)),l=De(()=>{if(!n.params._collapsed)return"";let H=`INPUTS
`;if(o.value.length===0)H+=`  (none)
`;else for(const B of o.value){const X=n.def.inputs.find(Ae=>Ae.id===B),ve=X?X.label:B,we=n.inputValues[B];H+=`• ${ve}: ${we!==void 0?ye(we):"—"}
`}if(H+=`
OUTPUTS
`,s.value.length===0)H+=`  (none)
`;else for(const B of s.value){const X=n.def.outputs.find(Ae=>Ae.id===B),ve=X?X.label:B,we=n.outputValues[B];H+=`• ${ve}: ${we!==void 0?ye(we):"—"}
`}return H}),u=De(()=>hu[n.def.category]?.color||"#888"),c=De(()=>n.def.params?Object.values(n.def.params).some(H=>H.type==="float"||H.type==="int"):!1);function f(){if(n.def.params){for(const[H,B]of Object.entries(n.def.params))if(B.type==="float"||B.type==="int"){const X=H==="value"&&n.params.min!==void 0?n.params.min:B.min!==void 0?B.min:0,ve=H==="value"&&n.params.max!==void 0?n.params.max:B.max!==void 0?B.max:1,we=n.params[`_randMin_${H}`]??X,Ae=n.params[`_randMax_${H}`]??ve;let G=we+Math.random()*(Ae-we);B.type==="int"?G=Math.floor(G):B.step&&(G=Math.round(G/B.step)*B.step),i("paramChange",H,G)}}}const d=Ne(null),h=Ne(!1),m=Ne(null),v=De(()=>!!m.value);Zt(()=>{if((n.nodeType==="imageInput"||n.nodeType==="uiImageSlot")&&!m.value){const H="/mangleditor/default_img.jpg";m.value=H;const B=new Image;B.crossOrigin="anonymous",B.src=H,B.onload=()=>{i("imageLoaded",{url:H,width:B.naturalWidth,height:B.naturalHeight,img:B})}}});const g=Ne(null),p=Ne([]),y=Ne(null);at(()=>r.previewImages[n.nodeId],H=>{if(n.nodeType!=="preview"||!H||!y.value)return;const B=y.value,X=B.getContext("2d");(B.width!==H.width||B.height!==H.height)&&(B.width=H.width,B.height=H.height);const ve=document.createElement("canvas");ve.width=H.width,ve.height=H.height;const we=ve.getContext("2d"),Ae=new ImageData(new Uint8ClampedArray(H.pixels.buffer),H.width,H.height);we.putImageData(Ae,0,0),X.save(),X.scale(1,-1),X.drawImage(ve,0,-H.height),X.restore()});const S=Ne(!1),_=Ne(null);let R=null;async function N(){try{R=await navigator.mediaDevices.getUserMedia({video:{width:1280,height:720},audio:!1}),S.value=!0,setTimeout(()=>{_.value&&(_.value.srcObject=R,_.value.onloadedmetadata=()=>{_.value.play(),i("imageLoaded",{url:"webcam",width:_.value.videoWidth,height:_.value.videoHeight,img:_.value,isVideo:!0})})},50)}catch(H){console.error("Failed to access webcam:",H),alert("Could not access webcam. Please check permissions.")}}function F(){R&&(R.getTracks().forEach(H=>H.stop()),R=null),S.value=!1,i("imageLoaded",{url:"webcam",width:1,height:1,img:null,isVideo:!1})}const x=Ne(null),b=De(()=>({left:(n.params.x??.5)*100+"%",top:(1-(n.params.y??.5))*100+"%"}));let P=!1;function M(H){P=!0,E(H),window.addEventListener("pointermove",w),window.addEventListener("pointerup",W)}function w(H){P&&E(H)}function W(){P=!1,window.removeEventListener("pointermove",w),window.removeEventListener("pointerup",W)}function E(H){const B=x.value;if(!B)return;const X=B.getBoundingClientRect(),ve=Math.max(0,Math.min(1,(H.clientX-X.left)/X.width)),we=Math.max(0,Math.min(1,1-(H.clientY-X.top)/X.height));i("paramChange","x",ve),i("paramChange","y",we)}const k=Ne(null),A=[];let I=null;n.nodeType==="lfo"&&Zt(()=>{I=setInterval(()=>{const H=n.outputValues?.out??0;A.push(H),A.length>Md&&A.shift(),O()},50)});function O(){const H=k.value;if(!H||A.length<2)return;(H.width!==H.clientWidth||H.height!==H.clientHeight)&&(H.width=H.clientWidth,H.height=H.clientHeight);const B=H.getContext("2d"),X=H.width,ve=H.height;B.clearRect(0,0,X,ve);let we=1/0,Ae=-1/0;for(const Y of A)Y<we&&(we=Y),Y>Ae&&(Ae=Y);Ae===we&&(we-=.5,Ae+=.5);const G=Ae-we;B.strokeStyle="#00d4ff",B.lineWidth=1.5,B.lineJoin="round",B.beginPath();for(let Y=0;Y<A.length;Y++){const L=Y/(Md-1)*X,U=ve-(A[Y]-we)/G*ve;Y===0?B.moveTo(L,U):B.lineTo(L,U)}B.stroke(),B.lineTo((A.length-1)/(Md-1)*X,ve),B.lineTo(0,ve),B.closePath(),B.fillStyle="rgba(0, 212, 255, 0.08)",B.fill()}cr(()=>{F(),clearInterval(I)});function z(){d.value?.click()}function q(H){const B=H.target.files?.[0];B&&ne(B)}function te(H){h.value=!1;const B=H.dataTransfer.files?.[0];B&&B.type.startsWith("image/")&&ne(B)}function ne(H){const B=URL.createObjectURL(H);m.value=B;const X=new Image;X.onload=()=>{i("imageLoaded",{url:B,width:X.naturalWidth,height:X.naturalHeight,img:X})},X.src=B}function ye(H){return H==null?"":typeof H=="number"?H.toFixed(2):String(H)}at(()=>n.monitorValue,H=>{H!=null&&(p.value.push(H),p.value.length>uv&&p.value.shift(),Pe())});function Pe(){const H=g.value;if(!H)return;(H.width!==H.clientWidth||H.height!==H.clientHeight)&&(H.width=H.clientWidth,H.height=H.clientHeight);const B=H.getContext("2d"),X=H.width,ve=H.height,we=p.value;if(B.clearRect(0,0,X,ve),we.length<2)return;const Ae=Math.min(...we),G=Math.max(...we),Y=G-Ae||1;B.strokeStyle="#00d4ff",B.lineWidth=1.5,B.beginPath();for(let L=0;L<we.length;L++){const U=L/(uv-1)*X,V=ve-(we[L]-Ae)/Y*(ve-4)-2;L===0?B.moveTo(U,V):B.lineTo(U,V)}if(B.stroke(),Ae<=0&&G>=0){const L=ve-(0-Ae)/Y*(ve-4)-2;B.strokeStyle="#ffffff30",B.lineWidth=.5,B.beginPath(),B.moveTo(0,L),B.lineTo(X,L),B.stroke()}}const Te=De(()=>{if(n.nodeType!=="webcamInput")return!1;const H=n.params?.enable===!0,B=r.dataOutputs[n.nodeId]?.trigger??0;return H||B>.5});return at(Te,H=>{H&&!S.value?N():!H&&S.value&&F()},{immediate:!0}),(H,B)=>(ae(),ge("div",{class:lt(["flow-node",{"flow-node--selected":t.selected},{"flow-node--compact":t.def.compact},{"flow-node--bypassed":t.params._bypass},{"flow-node--collapsed":t.params._collapsed},{"flow-node--resizable":!t.params._collapsed&&["preview","knob","imageInput","webcamInput"].includes(t.nodeType)&&t.params._resizable}]),onClick:B[40]||(B[40]=X=>H.$emit("select")),onDblclick:B[41]||(B[41]=Ve(X=>H.$emit("paramChange","_collapsed",!t.params._collapsed),["stop"]))},[["preview","knob","imageInput","webcamInput"].includes(t.nodeType)&&t.params._resizable?(ae(),tn(fe(LB),{key:0,"min-width":60,"min-height":60,"max-width":540,"max-height":540,"keep-aspect-ratio":!0,"is-visible":t.selected,class:"nodrag"},null,8,["is-visible"])):$e("",!0),K("div",{class:"flow-node__header",title:l.value},[t.params._collapsed&&o.value.length>0?(ae(),ge("span",HB," ["+Re(o.value.length)+"] ",1)):$e("",!0),K("div",{class:"flow-node__category-dot",style:nt({background:u.value})},null,4),K("div",GB,Re(t.def.label),1),t.params._collapsed&&s.value.length>0?(ae(),ge("span",WB," ["+Re(s.value.length)+"] ",1)):$e("",!0),c.value?(ae(),ge("button",{key:2,class:"flow-node__bypass-btn",style:{"margin-right":"4px"},onClick:Ve(f,["stop"]),title:"Randomize Parameters"}," 🎲 ")):$e("",!0),K("button",{class:lt(["flow-node__bypass-btn",{"flow-node__bypass-btn--active":t.params._collapsed}]),style:{"margin-right":"4px"},onClick:B[0]||(B[0]=Ve(X=>H.$emit("paramChange","_collapsed",!t.params._collapsed),["stop"])),title:t.params._collapsed?"Expand Node":"Collapse Node"},Re(t.params._collapsed?"▼":"▬"),11,XB),!t.params._collapsed&&["preview","knob","imageInput","webcamInput"].includes(t.nodeType)?(ae(),ge("button",{key:3,class:lt(["flow-node__bypass-btn",{"flow-node__bypass-btn--active":t.params._resizable}]),style:{"margin-right":"4px"},onClick:B[1]||(B[1]=Ve(X=>H.$emit("paramChange","_resizable",!t.params._resizable),["stop"])),title:t.params._resizable?"Disable Resizing":"Enable Resizing"}," ⤢ ",10,YB)):$e("",!0),t.def.shaderKey||t.def.category==="image"||t.def.category==="uv"?(ae(),ge("button",{key:4,class:lt(["flow-node__bypass-btn",{"flow-node__bypass-btn--active":t.params._bypass}]),onClick:B[2]||(B[2]=Ve(X=>H.$emit("paramChange","_bypass",!t.params._bypass),["stop"])),title:t.params._bypass?"Enable (bypassed)":"Bypass"},Re(t.params._bypass?"⊘":"⏵"),11,qB)):$e("",!0),t.perfMs!==null?(ae(),ge("span",{key:5,class:"flow-node__perf-badge",title:t.perfMs+"ms"},Re(t.perfMs<1?"<1":t.perfMs.toFixed(1))+"ms ",9,KB)):$e("",!0)],8,$B),K("div",ZB,[K("div",jB,[(ae(!0),ge(it,null,Gt(t.def.inputs,X=>(ae(),ge("div",{key:"in-"+X.id,class:"flow-node__handle-row flow-node__handle-row--input"},[tt(fe(xo),{type:"target",id:X.id,position:fe(qe).Left,style:nt({background:fe(ad)(X.type)})},null,8,["id","position","style"]),X.type!=="image"&&X.type!=="uvmap"&&t.inputValues[X.id]!==void 0?(ae(),ge("div",JB,Re(ye(t.inputValues[X.id])),1)):$e("",!0),K("span",QB,Re(X.label),1),K("span",ek,Re(X.type),1),t.inputValues[X.id]!==void 0?(ae(),ge("span",{key:1,class:"flow-node__handle-value",title:"Value: "+t.inputValues[X.id]},Re(ye(t.inputValues[X.id])),9,tk)):$e("",!0)]))),128)),(ae(!0),ge(it,null,Gt(t.exposedHandles,X=>(ae(),ge("div",{key:"exp-"+X.id,class:"flow-node__handle-row flow-node__handle-row--input flow-node__handle-row--exposed"},[tt(fe(xo),{type:"target",id:X.id,position:fe(qe).Left,style:nt({background:fe(ad)(X.type)})},null,8,["id","position","style"]),X.type!=="image"&&X.type!=="uvmap"&&t.inputValues[X.id]!==void 0?(ae(),ge("div",nk,Re(ye(t.inputValues[X.id])),1)):$e("",!0),K("span",ik,"⊕ "+Re(X.label),1),K("span",rk,Re(X.type),1)]))),128))]),Hi(K("div",ok,[t.nodeType==="imageInput"||t.nodeType==="uiImageSlot"?(ae(),ge("div",{key:0,class:"flow-node__controls",onPointerdown:B[5]||(B[5]=Ve(()=>{},["stop"])),onMousedown:B[6]||(B[6]=Ve(()=>{},["stop"]))},[K("input",{ref_key:"fileInput",ref:d,type:"file",accept:"image/*",class:"file-input-hidden",onChange:q},null,544),v.value?(ae(),ge("div",sk,[K("button",{class:"flow-node__inline-btn flow-node__inline-btn--sm",onClick:Ve(z,["stop"]),style:{"margin-bottom":"4px",width:"100%"}}," 📷 Replace Image "),t.nodeType==="imageInput"?(ae(),ge("img",{key:0,src:m.value,class:"flow-node__image-preview"},null,8,ak)):(ae(),ge("div",lk," Image Loaded ✓ "))])):(ae(),ge("div",{key:0,class:lt(["flow-node__drop-zone",{"flow-node__drop-zone--active":h.value}]),onClick:Ve(z,["stop"]),onDragover:B[3]||(B[3]=Ve(X=>h.value=!0,["prevent"])),onDragleave:B[4]||(B[4]=X=>h.value=!1),onDrop:Ve(te,["prevent"])}," 📷 Drop image or click to browse ",34))],32)):$e("",!0),t.nodeType==="webcamInput"?(ae(),ge("div",{key:1,class:"flow-node__controls",onPointerdown:B[9]||(B[9]=Ve(()=>{},["stop"])),onMousedown:B[10]||(B[10]=Ve(()=>{},["stop"]))},[S.value?(ae(),ge("div",uk,[K("button",{class:"flow-node__inline-btn flow-node__inline-btn--sm",onClick:B[8]||(B[8]=Ve(X=>H.$emit("paramChange","enable",!1),["stop"])),style:{"margin-bottom":"4px",width:"100%",background:"var(--bg-red-dim)","border-color":"var(--accent-danger)"}}," Stop Webcam "),K("video",{ref_key:"webcamVideo",ref:_,class:"flow-node__image-preview",autoplay:"",playsinline:"",muted:""},null,512)])):(ae(),ge("button",{key:0,class:"flow-node__inline-btn flow-node__inline-btn--sm",onClick:B[7]||(B[7]=Ve(X=>H.$emit("paramChange","enable",!0),["stop"])),style:{width:"100%"}}," 🎥 Start Webcam "))],32)):$e("",!0),t.nodeType==="imageOutput"?(ae(),ge("div",{key:2,class:"flow-node__controls",onPointerdown:B[12]||(B[12]=Ve(()=>{},["stop"])),onMousedown:B[13]||(B[13]=Ve(()=>{},["stop"]))},[K("button",{class:"flow-node__inline-btn",onClick:B[11]||(B[11]=Ve(X=>H.$emit("export"),["stop"]))}," ⬇ Export "+Re(t.params.format||"PNG"),1)],32)):$e("",!0),t.nodeType==="button"||t.nodeType==="bang"?(ae(),ge("div",{key:3,class:"flow-node__controls",onPointerdown:B[15]||(B[15]=Ve(()=>{},["stop"])),onMousedown:B[16]||(B[16]=Ve(()=>{},["stop"]))},[K("button",{class:"flow-node__inline-btn",onClick:B[14]||(B[14]=Ve(X=>H.$emit("trigger"),["stop"]))},Re(t.params.label||"Bang!"),1)],32)):$e("",!0),t.nodeType==="slider"?(ae(),ge("div",{key:4,class:"flow-node__slider-container",onPointerdown:B[20]||(B[20]=Ve(()=>{},["stop"])),onMousedown:B[21]||(B[21]=Ve(()=>{},["stop"]))},[K("input",{type:"range",class:"flow-node__inline-slider",min:t.params.min??0,max:t.params.max??1,step:t.params.step??.01,value:t.params.value??.5,onInput:B[17]||(B[17]=Ve(X=>H.$emit("paramChange","value",Number(X.target.value)),["stop"])),onPointerdown:B[18]||(B[18]=Ve(()=>{},["stop"])),onMousedown:B[19]||(B[19]=Ve(()=>{},["stop"]))},null,40,ck),K("div",dk,Re((t.params.value??.5).toFixed(3)),1)],32)):$e("",!0),t.nodeType==="knob"?(ae(),ge("div",{key:5,class:"flow-node__knob-container",onPointerdown:B[23]||(B[23]=Ve(()=>{},["stop"])),onMousedown:B[24]||(B[24]=Ve(()=>{},["stop"]))},[tt(lx,{modelValue:t.params.value??(t.def.params.value?t.def.params.value.default:.5),min:t.params.min??(t.def.params.min?t.def.params.min.default:0),max:t.params.max??(t.def.params.max?t.def.params.max.default:1),step:t.params.step??(t.def.params.step?t.def.params.step.default:.01),size:null,"onUpdate:modelValue":B[22]||(B[22]=X=>H.$emit("paramChange","value",X))},null,8,["modelValue","min","max","step"])],32)):$e("",!0),t.nodeType==="lfo"?(ae(),ge("div",{key:6,class:"flow-node__inline-params",onPointerdown:B[34]||(B[34]=Ve(()=>{},["stop"])),onMousedown:B[35]||(B[35]=Ve(()=>{},["stop"]))},[K("canvas",{ref_key:"lfoCanvasRef",ref:k,class:"flow-node__lfo-graph",width:"176",height:"40"},null,512),K("div",fk,[B[42]||(B[42]=K("span",{class:"flow-node__inline-param-label"},"wave",-1)),K("select",{class:"flow-node__inline-select",value:t.params.waveform??"sine",onChange:B[25]||(B[25]=Ve(X=>H.$emit("paramChange","waveform",X.target.value),["stop"])),onPointerdown:B[26]||(B[26]=Ve(()=>{},["stop"])),onMousedown:B[27]||(B[27]=Ve(()=>{},["stop"]))},[(ae(),ge(it,null,Gt(["sine","saw","square","triangle"],X=>K("option",{key:X,value:X},Re(X),9,pk)),64))],40,hk)]),K("div",mk,[B[43]||(B[43]=K("span",{class:"flow-node__inline-param-label"},"freq",-1)),K("input",{type:"range",class:"flow-node__inline-slider-sm",min:"0.01",max:"20",step:"0.01",value:t.params.frequency??1,onInput:B[28]||(B[28]=Ve(X=>H.$emit("paramChange","frequency",Number(X.target.value)),["stop"])),onPointerdown:B[29]||(B[29]=Ve(()=>{},["stop"])),onMousedown:B[30]||(B[30]=Ve(()=>{},["stop"]))},null,40,gk),K("span",vk,Re((t.params.frequency??1).toFixed(2)),1)]),K("div",_k,[B[44]||(B[44]=K("span",{class:"flow-node__inline-param-label"},"amp",-1)),K("input",{type:"range",class:"flow-node__inline-slider-sm",min:"0",max:"10",step:"0.01",value:t.params.amplitude??1,onInput:B[31]||(B[31]=Ve(X=>H.$emit("paramChange","amplitude",Number(X.target.value)),["stop"])),onPointerdown:B[32]||(B[32]=Ve(()=>{},["stop"])),onMousedown:B[33]||(B[33]=Ve(()=>{},["stop"]))},null,40,yk),K("span",xk,Re((t.params.amplitude??1).toFixed(2)),1)])],32)):$e("",!0),t.nodeType==="xyPad"?(ae(),ge("div",{key:7,class:"flow-node__xypad-wrapper",onPointerdown:B[36]||(B[36]=Ve(()=>{},["stop"])),onMousedown:B[37]||(B[37]=Ve(()=>{},["stop"]))},[K("div",{class:"flow-node__xypad",ref_key:"xyPadNodeRef",ref:x,onPointerdown:M},[K("div",{class:"flow-node__xypad-crosshair",style:nt(b.value)},null,4)],544),K("div",bk,[K("span",Sk,"X: "+Re((t.params.x??.5).toFixed(2)),1),K("span",Mk,"Y: "+Re((t.params.y??.5).toFixed(2)),1)])],32)):$e("",!0),t.nodeType==="fft"?(ae(),ge("div",{key:8,class:"flow-node__fft-container",onPointerdown:B[38]||(B[38]=Ve(()=>{},["stop"])),onMousedown:B[39]||(B[39]=Ve(()=>{},["stop"]))},[K("div",{class:"flow-node__fft-bar flow-node__fft-bar--bass",style:nt({height:Math.max(2,(t.outputValues.bass||0)*40)+"px"})},null,4),K("div",{class:"flow-node__fft-bar flow-node__fft-bar--low-mid",style:nt({height:Math.max(2,(t.outputValues.lowMid||0)*40)+"px"})},null,4),K("div",{class:"flow-node__fft-bar flow-node__fft-bar--mid",style:nt({height:Math.max(2,(t.outputValues.mid||0)*40)+"px"})},null,4),K("div",{class:"flow-node__fft-bar flow-node__fft-bar--high",style:nt({height:Math.max(2,(t.outputValues.high||0)*40)+"px"})},null,4)],32)):$e("",!0),t.nodeType==="numberMonitor"?(ae(),ge("div",wk,[K("div",{class:"flow-node__monitor-value",title:"Value: "+(t.monitorValue??0)},Re(t.monitorValue!==null&&t.monitorValue!==void 0?t.monitorValue.toFixed(t.params.decimals??3):"—"),9,Ek),t.params.showGraph!==!1?(ae(),ge("canvas",{key:0,ref_key:"monitorCanvas",ref:g,class:"flow-node__monitor-graph",width:"176",height:"40"},null,512)):$e("",!0)])):$e("",!0),t.nodeType==="preview"?(ae(),ge("div",Tk,[K("canvas",{ref_key:"previewCanvas",ref:y,class:"flow-node__preview-canvas",width:"176",height:"100"},null,512),B[45]||(B[45]=K("div",{class:"flow-node__preview-label"},"Preview Node",-1))])):$e("",!0)],512),[[Gi,!t.params._collapsed]]),K("div",Ck,[(ae(!0),ge(it,null,Gt(a.value,X=>(ae(),ge("div",{key:"out-"+X.id,class:"flow-node__handle-row flow-node__handle-row--output"},[K("span",Ak,Re(X.type),1),K("span",Rk,Re(X.label),1),t.outputValues[X.id]!==void 0?(ae(),ge("span",{key:0,class:"flow-node__handle-value",title:"Value: "+t.outputValues[X.id]},Re(ye(t.outputValues[X.id])),9,Ik)):$e("",!0),tt(fe(xo),{type:"source",id:X.id,position:fe(qe).Right,style:nt({background:fe(ad)(X.type)})},null,8,["id","position","style"]),X.type!=="image"&&X.type!=="uvmap"&&t.outputValues[X.id]!==void 0?(ae(),ge("div",Pk,Re(ye(t.outputValues[X.id])),1)):$e("",!0)]))),128))])])],34))}},Mr=fr(Nk,[["__scopeId","data-v-8f7e0b4a"]]),Dk=["onClick"],Lk=["value","onInput"],Uk={class:"editor-controls"},Fk={__name:"EditorCanvas",emits:["imageLoaded","exportImage"],setup(t,{expose:e,emit:n}){const i=Co(),{viewport:r,dimensions:o,project:s,zoomIn:a,zoomOut:l,setViewport:u,fitView:c}=Dt();function f(){const{x,y:b}=r.value;u({x,y:b,zoom:1},{duration:600})}function d(){c({padding:.1,duration:600})}function h(x){if(["INPUT","TEXTAREA"].includes(x.target.tagName))return;const b=x.ctrlKey||x.metaKey;if(b&&(x.key==="z"||x.key==="Z")&&!x.shiftKey){x.preventDefault(),i.undo();return}if(b&&(x.key==="y"||x.key==="Y"||(x.key==="z"||x.key==="Z")&&x.shiftKey)){x.preventDefault(),i.redo();return}if(b&&(x.key==="c"||x.key==="C")){x.preventDefault(),i.copySelected();return}if(b&&(x.key==="v"||x.key==="V")){x.preventDefault(),i.pasteClipboard();return}(x.key==="f"||x.key==="F")&&(i.selectedNodeId?c({nodes:[i.selectedNodeId],padding:.2,duration:600}):c({padding:.1,duration:600}))}Zt(()=>{window.addEventListener("keydown",h)}),_s(()=>{window.removeEventListener("keydown",h)});function m(x){const{x:b,y:P,zoom:M}=r.value,{width:w,height:W}=o.value,E=w||800,k=W||600,A=(E/2-b)/M,I=(k/2-P)/M;i.addNode(x,{x:A+(Math.random()-.5)*60,y:I+(Math.random()-.5)*60})}e({addNodeAtCenter:m});const v=["imageInput","uiImageSlot","webcamInput","imageOutput","button","slider","textNode"],g=De(()=>Object.keys(OA()).filter(x=>!v.includes(x)));function p(x){for(const b of x)if(b.type==="position"&&b.position){const P=i.nodes.find(M=>M.id===b.id);P&&(P.position=b.position)}else b.type==="remove"&&i.removeNode(b.id)}function y(x){for(const b of x)b.type==="remove"&&i.removeEdge(b.id)}function S(x){i.addEdge(x)}function _({node:x}){i.selectNode(x.id)}function R(){i.selectNode(null)}function N({edge:x}){}function F(x){const b=x.dataTransfer.getData("application/node-type");if(!b)return;const P=x.currentTarget.getBoundingClientRect(),{x:M,y:w,zoom:W}=r.value,E=(x.clientX-P.left-M)/W,k=(x.clientY-P.top-w)/W;i.addNode(b,{x:E,y:k})}return(x,b)=>{const P=yh("NodeResizer");return ae(),ge("div",{class:"editor-canvas",onDrop:Ve(F,["prevent"]),onDragover:b[2]||(b[2]=Ve(()=>{},["prevent"]))},[tt(fe(ZN),{nodes:fe(i).nodes,edges:fe(i).edges,"default-viewport":{zoom:1,x:0,y:0},"min-zoom":.2,"max-zoom":3,"fit-view-on-init":"",onNodesChange:p,onEdgesChange:y,onConnect:S,onNodeClick:_,onPaneClick:R,onEdgeClick:N},Ab({"node-imageInput":rn(M=>[tt(Mr,{"node-id":M.id,"node-type":M.type,def:M.data.def,params:fe(i).nodeParams[M.id]||{},selected:fe(i).selectedNodeId===M.id,onSelect:w=>fe(i).selectNode(M.id),onImageLoaded:w=>x.$emit("imageLoaded",M.id,w)},null,8,["node-id","node-type","def","params","selected","onSelect","onImageLoaded"])]),"node-uiImageSlot":rn(M=>[tt(Mr,{"node-id":M.id,"node-type":M.type,def:M.data.def,params:fe(i).nodeParams[M.id]||{},selected:fe(i).selectedNodeId===M.id,onSelect:w=>fe(i).selectNode(M.id),onImageLoaded:w=>x.$emit("imageLoaded",M.id,w)},null,8,["node-id","node-type","def","params","selected","onSelect","onImageLoaded"])]),"node-webcamInput":rn(M=>[tt(Mr,{"node-id":M.id,"node-type":M.type,def:M.data.def,params:fe(i).nodeParams[M.id]||{},selected:fe(i).selectedNodeId===M.id,onSelect:w=>fe(i).selectNode(M.id),onImageLoaded:w=>x.$emit("imageLoaded",M.id,w),onParamChange:(w,W)=>fe(i).setParam(M.id,w,W)},null,8,["node-id","node-type","def","params","selected","onSelect","onImageLoaded","onParamChange"])]),"node-imageOutput":rn(M=>[tt(Mr,{"node-type":M.type,def:M.data.def,params:fe(i).nodeParams[M.id]||{},selected:fe(i).selectedNodeId===M.id,onSelect:w=>fe(i).selectNode(M.id),onExport:w=>x.$emit("exportImage",M.id)},null,8,["node-type","def","params","selected","onSelect","onExport"])]),"node-button":rn(M=>[tt(Mr,{"node-type":M.type,def:M.data.def,params:fe(i).nodeParams[M.id]||{},selected:fe(i).selectedNodeId===M.id,onSelect:w=>fe(i).selectNode(M.id),onTrigger:w=>fe(i).triggerButton(M.id)},null,8,["node-type","def","params","selected","onSelect","onTrigger"])]),"node-bang":rn(M=>[tt(Mr,{"node-id":M.id,"node-type":M.type,def:M.data.def,params:fe(i).nodeParams[M.id]||{},selected:fe(i).selectedNodeId===M.id,onSelect:w=>fe(i).selectNode(M.id),onTrigger:w=>fe(i).triggerButton(M.id),onParamChange:(w,W)=>fe(i).setParam(M.id,w,W)},null,8,["node-id","node-type","def","params","selected","onSelect","onTrigger","onParamChange"])]),"node-slider":rn(M=>[tt(Mr,{"node-id":M.id,"node-type":M.type,def:M.data.def,params:fe(i).nodeParams[M.id]||{},selected:fe(i).selectedNodeId===M.id,onSelect:w=>fe(i).selectNode(M.id),onParamChange:(w,W)=>fe(i).setParam(M.id,w,W)},null,8,["node-id","node-type","def","params","selected","onSelect","onParamChange"])]),"node-textNode":rn(M=>[K("div",{class:lt(["text-node-custom",{"text-node-custom--selected":fe(i).selectedNodeId===M.id}]),onClick:w=>fe(i).selectNode(M.id),style:nt({minWidth:Math.max(50,(fe(i).nodeParams[M.id]?.fontSize||24)*4)+"px",minHeight:Math.max(30,(fe(i).nodeParams[M.id]?.fontSize||24)*1.5)+"px"})},[tt(P,{"min-width":10,"min-height":10,"is-visible":fe(i).selectedNodeId===M.id,class:"nodrag"},null,8,["is-visible"]),K("textarea",{class:"text-node-custom__input",value:fe(i).nodeParams[M.id]?.content||"",onInput:w=>fe(i).setParam(M.id,"content",w.target.value),style:nt({fontSize:(fe(i).nodeParams[M.id]?.fontSize||24)+"px",fontFamily:fe(i).nodeParams[M.id]?.fontFamily||"sans-serif",color:fe(i).nodeParams[M.id]?.color||"#ffffff",textAlign:fe(i).nodeParams[M.id]?.align||"left",fontWeight:fe(i).nodeParams[M.id]?.fontWeight||"normal",fontStyle:fe(i).nodeParams[M.id]?.fontStyle||"normal"}),placeholder:"Type something..."},null,44,Lk)],14,Dk)]),default:rn(()=>[K("div",Uk,[K("button",{onClick:b[0]||(b[0]=M=>fe(a)({duration:300})),title:"Zoom In (+)"},"+"),K("button",{onClick:b[1]||(b[1]=M=>fe(l)({duration:300})),title:"Zoom Out (-)"},"−"),K("button",{onClick:f,title:"Zoom to 100% (1:1)"},"1:1"),K("button",{onClick:d,title:"Fit View to All"},"[ ]")]),tt(fe(LF),{pannable:"",zoomable:"",position:"bottom-right"})]),_:2},[Gt(g.value,M=>({name:`node-${M}`,fn:rn(w=>[tt(Mr,{"node-id":w.id,"node-type":w.type,def:w.data.def,params:fe(i).nodeParams[w.id]||{},selected:fe(i).selectedNodeId===w.id,"exposed-handles":fe(i).getExposedHandles(w.id),"output-values":fe(i).dataOutputs[w.id]||{},"monitor-value":w.type==="numberMonitor"?fe(i).getDataOutput(w.id,"out"):null,"perf-ms":fe(i).perfTimings[w.id]??null,onSelect:W=>fe(i).selectNode(w.id),onParamChange:(W,E)=>fe(i).setParam(w.id,W,E)},null,8,["node-id","node-type","def","params","selected","exposed-handles","output-values","monitor-value","perf-ms","onSelect","onParamChange"])])}))]),1032,["nodes","edges"])],32)}}},Ok=fr(Fk,[["__scopeId","data-v-5cbaea8f"]]),Bk={class:"preview-panel__toolbar"},kk={class:"preview-panel__badge"},Vk={key:0,class:"preview-panel__badge",style:{color:"var(--accent-primary)"}},zk={key:1,class:"preview-panel__badge",style:{color:"var(--accent-danger)"}},$k={class:"preview-panel__zoom-level"},Hk={key:2,class:"preview-panel__histogram"},Gk={class:"preview-panel__info-row"},Wk={key:0},Xk={__name:"PreviewPanel",props:{hidden:{type:Boolean,default:!1},isRendering:{type:Boolean,default:!0},pipeline:{type:Object,default:null},fps:{type:Number,default:0},previewMode:{type:String,default:"anchored"}},setup(t,{expose:e}){const n=Ne(400),i=Ne(40),r=Ne(!1),o=Ne({x:0,y:0});function s(I){I.button===0&&(r.value=!0,o.value={x:I.clientX-n.value,y:I.clientY-i.value},window.addEventListener("pointermove",a),window.addEventListener("pointerup",l))}function a(I){r.value&&(n.value=I.clientX-o.value.x,i.value=I.clientY-o.value.y)}function l(){r.value=!1,window.removeEventListener("pointermove",a),window.removeEventListener("pointerup",l)}const u=Ne(300),c=Ne(!1);function f(I){if(I.button!==0)return;c.value=!0;const O=I.clientY,z=u.value;function q(ne){if(!c.value)return;const ye=O-ne.clientY;u.value=Math.max(100,Math.min(window.innerHeight*.8,z+ye))}function te(){c.value=!1,window.removeEventListener("pointermove",q),window.removeEventListener("pointerup",te)}window.addEventListener("pointermove",q),window.addEventListener("pointerup",te)}const d=Ne(null),h=Ne(null),m=Ne(null),v=Ne(512),g=Ne(512),p=Ne(1),y=Ne(0),S=Ne(0),_=Ne(!1),R=Ne({x:0,y:0}),N=Ne(!1);let F=null;function x(){return d.value}e({canvasRef:d,width:v,height:g,getCanvas:x,fitView:P}),at([v,g],async()=>{await qt(),P()}),Zt(async()=>{await qt(),P(),window.addEventListener("resize",P)}),at(N,I=>{I?(k(),F=setInterval(k,500)):(F&&clearInterval(F),F=null)}),cr(()=>{F&&clearInterval(F),window.removeEventListener("resize",P)});function b(){p.value=1,y.value=0,S.value=0}function P(){if(!m.value)return;const I=m.value.clientWidth,O=m.value.clientHeight,z=I/v.value,q=O/g.value;p.value=Math.min(z,q,1)*.95,y.value=(I-v.value*p.value)/2,S.value=(O-g.value*p.value)/2}function M(I){const O=I.deltaY>0?.9:1.1,z=Math.max(.1,Math.min(10,p.value*O)),q=m.value.getBoundingClientRect(),te=I.clientX-q.left,ne=I.clientY-q.top;y.value=te-(te-y.value)*(z/p.value),S.value=ne-(ne-S.value)*(z/p.value),p.value=z}function w(I){(I.button===0||I.button===1)&&(_.value=!0,R.value={x:I.clientX,y:I.clientY},m.value?.setPointerCapture(I.pointerId))}function W(I){if(!_.value)return;const O=I.clientX-R.value.x,z=I.clientY-R.value.y;y.value+=O,S.value+=z,R.value={x:I.clientX,y:I.clientY}}function E(I){_.value=!1,m.value?.releasePointerCapture(I.pointerId)}function k(){if(!N.value||!h.value)return;const I=d.value;if(!I)return;const O=I.getContext("webgl2",{preserveDrawingBuffer:!0})||I.getContext("webgl",{preserveDrawingBuffer:!0});if(!O)return;const z=I.width,q=I.height;if(z===0||q===0)return;const te=new Uint8Array(z*q*4);O.readPixels(0,0,z,q,O.RGBA,O.UNSIGNED_BYTE,te);const ne=new Uint32Array(256),ye=new Uint32Array(256),Pe=new Uint32Array(256);for(let ve=0;ve<te.length;ve+=4)ne[te[ve]]++,ye[te[ve+1]]++,Pe[te[ve+2]]++;const Te=h.value.getContext("2d"),H=256,B=80;Te.clearRect(0,0,H,B);const X=Math.max(...ne.slice(1,255),...ye.slice(1,255),...Pe.slice(1,255),1);A(Te,ne,X,H,B,"rgba(255,80,80,0.5)"),A(Te,ye,X,H,B,"rgba(80,255,80,0.5)"),A(Te,Pe,X,H,B,"rgba(80,80,255,0.5)")}function A(I,O,z,q,te,ne){I.fillStyle=ne,I.beginPath(),I.moveTo(0,te);for(let ye=0;ye<256;ye++){const Pe=O[ye]/z*(te-2);I.lineTo(ye,te-Pe)}I.lineTo(255,te),I.closePath(),I.fill()}return(I,O)=>(ae(),ge("div",{class:lt(["preview-panel",`preview-panel--${t.previewMode}`,{hidden:t.hidden}]),style:nt(t.previewMode==="floating"?{top:`${i.value}px`,left:`${n.value}px`}:t.previewMode==="anchored"?{height:`${u.value}px`}:{})},[t.previewMode==="anchored"?(ae(),ge("div",{key:0,class:"preview-panel__resize-handle",onPointerdown:f},null,32)):$e("",!0),t.previewMode==="floating"?(ae(),ge("div",{key:1,class:"preview-panel__header",onPointerdown:s},[...O[1]||(O[1]=[K("span",{class:"preview-panel__header-title"},"Live Preview",-1)])],32)):$e("",!0),K("div",Bk,[K("span",kk,Re(v.value)+"×"+Re(g.value),1),t.fps&&t.isRendering?(ae(),ge("span",Vk,Re(t.fps)+" FPS",1)):$e("",!0),t.isRendering?$e("",!0):(ae(),ge("span",zk,"STOPPED")),O[2]||(O[2]=K("div",{style:{flex:"1"}},null,-1)),K("span",$k,Re(Math.round(p.value*100))+"%",1),K("button",{class:"preview-panel__tool-btn",onClick:P,title:"Fit"},"⊡"),K("button",{class:"preview-panel__tool-btn",onClick:b,title:"Reset Zoom"},"1:1"),K("button",{class:lt(["preview-panel__tool-btn",{active:N.value}]),onClick:O[0]||(O[0]=z=>N.value=!N.value),title:"Toggle Histogram"},"📊",2)]),K("div",{class:"preview-panel__viewport",ref_key:"viewportRef",ref:m,onWheel:Ve(M,["prevent"]),onPointerdown:w,onPointermove:W,onPointerup:E},[K("div",{class:"preview-panel__canvas-wrap",style:nt({transform:`translate(${y.value}px, ${S.value}px) scale(${p.value})`,transformOrigin:"0 0"})},[K("canvas",{ref_key:"canvasRef",ref:d,class:"preview-panel__canvas"},null,512)],4)],544),N.value?(ae(),ge("div",Hk,[K("canvas",{ref_key:"histCanvas",ref:h,class:"preview-panel__hist-canvas",width:"256",height:"80"},null,512),K("div",Gk,[K("span",null,"Resolution: "+Re(v.value)+"×"+Re(g.value),1),t.fps?(ae(),ge("span",Wk,Re(t.fps)+" FPS",1)):$e("",!0)])])):$e("",!0)],6))}},Yk=["title"],qk={class:"param-panel__collapse-label"},Kk={class:"param-panel__collapse-btn"},Zk={class:"param-panel__header"},jk={class:"param-panel__title"},Jk={class:"param-panel__type"},Qk={key:0,class:"param-panel__nickname-row"},e4=["value"],t4={key:1,class:"param-panel__section"},n4={key:0,class:"param-field"},i4={class:"param-field__header"},r4={class:"param-field__label"},o4={style:{display:"flex",gap:"4px"}},s4=["onClick"],a4=["onClick","title"],l4=["min","max","step","value","onInput"],u4={class:"param-field__range-info"},c4=["step","value","onChange"],d4={class:"param-field__random-bounds-card"},f4={class:"param-field__random-bounds-inputs"},h4={style:{display:"flex","flex-direction":"column",gap:"2px"}},p4=["step","value","onChange"],m4={style:{display:"flex","flex-direction":"column",gap:"2px"}},g4=["step","value","onChange"],v4=["value","onChange"],_4=["value"],y4=["onClick"],x4={key:1,class:"param-field__checkbox"},b4=["checked","onChange"],S4={key:0,style:{display:"flex","align-items":"center",gap:"8px"}},M4=["value","onInput"],w4={class:"mono",style:{"font-size":"11px"}},E4=["value","onInput"],T4={class:"param-panel__section"},C4={class:"param-field"},A4={class:"mono",style:{"font-size":"10px",color:"var(--text-muted)"}},R4={class:"param-field"},I4={style:{"font-size":"11px"}},P4={class:"param-field"},N4={style:{"font-size":"11px"}},D4={class:"param-field"},L4={style:{"font-size":"11px"}},U4={key:1,class:"param-panel__empty"},F4={__name:"ParameterPanel",setup(t){const e=Co(),n=Ne({}),i=Ne(window.innerWidth<768),r=De(()=>e.selectedNodeDef||{label:"",type:"",params:{},inputs:[],outputs:[],category:""}),o=De(()=>e.selectedNodeParams),s=De(()=>hu[r.value.category]?.color||"#888"),a=De(()=>e.selectedNodeId&&e.perfGridCells.find(c=>c.boundNodeId===e.selectedNodeId||c.boundTargetNodeId===e.selectedNodeId)||null);function l(c,f){e.selectedNodeId&&e.setParam(e.selectedNodeId,c,f)}function u(c,f){return f==="int"?Math.round(c).toString():typeof c=="number"?c.toFixed(3):String(c)}return(c,f)=>(ae(),ge("div",{class:lt(["param-panel",{"param-panel--collapsed":i.value}])},[K("div",{class:"param-panel__collapse-bar",onClick:f[0]||(f[0]=d=>i.value=!i.value),title:i.value?"Expand inspector":"Collapse inspector"},[Hi(K("span",qk,"Inspector",512),[[Gi,!i.value]]),K("span",Kk,Re(i.value?"‹":"›"),1)],8,Yk),i.value?$e("",!0):(ae(),ge(it,{key:0},[fe(e).selectedNode?(ae(),ge(it,{key:0},[K("div",Zk,[K("div",{class:"flow-node__category-dot",style:nt({background:s.value})},null,4),K("span",jk,Re(r.value.label),1),K("span",Jk,Re(r.value.type),1)]),a.value?(ae(),ge("div",Qk,[f[2]||(f[2]=K("label",{class:"param-panel__nickname-label"},"Nickname",-1)),K("input",{class:"param-panel__nickname-input",type:"text",value:a.value.nickname||"",placeholder:"Display name in Performance Mode",onInput:f[1]||(f[1]=d=>fe(e).setPerfCellNickname(a.value.id,d.target.value))},null,40,e4)])):$e("",!0),Object.keys(r.value.params).length>0?(ae(),ge("div",t4,[f[7]||(f[7]=K("div",{class:"param-panel__section-title"},"Parameters",-1)),(ae(!0),ge(it,null,Gt(r.value.params,(d,h)=>(ae(),ge(it,{key:h},[d.hidden?$e("",!0):(ae(),ge("div",n4,[K("div",i4,[K("label",r4,Re(d.label),1),K("div",o4,[d.type==="float"||d.type==="int"?(ae(),ge("button",{key:0,class:lt(["param-field__expose-btn",{"param-field__expose-btn--active":n.value[h]}]),onClick:m=>n.value[h]=!n.value[h],title:"Toggle Randomizer Bounds"}," 🎲 ",10,s4)):$e("",!0),d.type==="float"||d.type==="int"?(ae(),ge("button",{key:1,class:lt(["param-field__expose-btn",{"param-field__expose-btn--active":fe(e).isParamExposed(fe(e).selectedNodeId,h)}]),onClick:m=>fe(e).toggleExposeParam(fe(e).selectedNodeId,h),title:fe(e).isParamExposed(fe(e).selectedNodeId,h)?"Unexpose input":"Expose as input handle"},Re(fe(e).isParamExposed(fe(e).selectedNodeId,h)?"🔗":"⊕"),11,a4)):$e("",!0)])]),d.type==="float"||d.type==="int"?(ae(),ge(it,{key:0},[K("input",{type:"range",class:"param-field__input",min:h==="value"&&o.value.min!==void 0?o.value.min:d.min,max:h==="value"&&o.value.max!==void 0?o.value.max:d.max,step:h==="value"&&o.value.step!==void 0?o.value.step:d.step,value:o.value[h]??d.default,onInput:m=>l(h,d.type==="int"?parseInt(m.target.value):parseFloat(m.target.value))},null,40,l4),K("div",u4,[K("span",null,Re(h==="value"&&o.value.min!==void 0?o.value.min:d.min),1),K("input",{type:"number",class:"param-field__number-input mono",step:h==="value"&&o.value.step!==void 0?o.value.step:d.step,value:u(o.value[h]??d.default,d.type),onChange:m=>l(h,d.type==="int"?parseInt(m.target.value):parseFloat(m.target.value))},null,40,c4),K("span",null,Re(h==="value"&&o.value.max!==void 0?o.value.max:d.max),1)]),Hi(K("div",d4,[f[6]||(f[6]=K("div",{class:"param-field__random-bounds-header"},"🎲 Randomizer Range",-1)),K("div",f4,[K("div",h4,[f[3]||(f[3]=K("span",{style:{"font-size":"9px",opacity:"0.7"}},"Min",-1)),K("input",{type:"number",class:"param-field__number-input mono",step:d.step,value:o.value[`_randMin_${h}`]??(h==="value"&&o.value.min!==void 0?o.value.min:d.min)??0,onChange:m=>l(`_randMin_${h}`,d.type==="int"?parseInt(m.target.value):parseFloat(m.target.value)),title:"Min random value"},null,40,p4)]),f[5]||(f[5]=K("span",{style:{opacity:"0.5","font-size":"10px","margin-top":"10px"}},"to",-1)),K("div",m4,[f[4]||(f[4]=K("span",{style:{"font-size":"9px",opacity:"0.7"}},"Max",-1)),K("input",{type:"number",class:"param-field__number-input mono",step:d.step,value:o.value[`_randMax_${h}`]??(h==="value"&&o.value.max!==void 0?o.value.max:d.max)??1,onChange:m=>l(`_randMax_${h}`,d.type==="int"?parseInt(m.target.value):parseFloat(m.target.value)),title:"Max random value"},null,40,g4)])])],512),[[Gi,n.value[h]]])],64)):d.type==="select"?(ae(),ge("select",{key:1,class:"param-field__input",value:o.value[h]??d.default,onChange:m=>l(h,m.target.value)},[(ae(!0),ge(it,null,Gt(d.options,m=>(ae(),ge("option",{key:m,value:m},Re(m),9,_4))),128))],40,v4)):d.type==="bool"?(ae(),ge(it,{key:2},[d.ui==="button"?(ae(),ge("button",{key:0,class:"flow-node__inline-btn",style:nt([{width:"100%","margin-top":"4px",padding:"6px"},{background:o.value[h]??d.default?"var(--bg-red-dim)":"var(--bg-tertiary)",borderColor:o.value[h]??d.default?"var(--accent-danger)":"var(--border-color)"}]),onClick:m=>l(h,!(o.value[h]??d.default))},Re(o.value[h]??d.default?"Stop":"Start")+" "+Re(d.label.replace("Enable","")),13,y4)):(ae(),ge("label",x4,[K("input",{type:"checkbox",checked:o.value[h]??d.default,onChange:m=>l(h,m.target.checked)},null,40,b4),K("span",null,Re(d.label),1)]))],64)):d.type==="string"?(ae(),ge(it,{key:3},[d.ui==="color"?(ae(),ge("div",S4,[K("input",{type:"color",class:"param-field__color",value:o.value[h]??d.default,onInput:m=>l(h,m.target.value)},null,40,M4),K("span",w4,Re(o.value[h]??d.default),1)])):(ae(),ge("input",{key:1,type:"text",class:"param-field__input",value:o.value[h]??d.default,onInput:m=>l(h,m.target.value)},null,40,E4))],64)):$e("",!0)]))],64))),128))])):$e("",!0),K("div",T4,[f[12]||(f[12]=K("div",{class:"param-panel__section-title"},"Info",-1)),K("div",C4,[f[8]||(f[8]=K("span",{class:"param-field__label"},"ID",-1)),K("span",A4,Re(fe(e).selectedNodeId),1)]),K("div",R4,[f[9]||(f[9]=K("span",{class:"param-field__label"},"Category",-1)),K("span",I4,Re(r.value.category),1)]),K("div",P4,[f[10]||(f[10]=K("span",{class:"param-field__label"},"Inputs",-1)),K("span",N4,Re(r.value.inputs.length),1)]),K("div",D4,[f[11]||(f[11]=K("span",{class:"param-field__label"},"Outputs",-1)),K("span",L4,Re(r.value.outputs.length),1)])])],64)):(ae(),ge("div",U4," Select a node to edit its parameters "))],64))],2))}},O4=fr(F4,[["__scopeId","data-v-7f855c93"]]),B4=["draggable"],k4={class:"control-cell__unbound-icon"},V4={key:2,class:"control-cell__widget control-cell__anim-widget"},z4={class:"control-cell__lfo-readout"},$4={class:"control-cell__lfo-waveforms"},H4=["onClick"],G4={class:"control-cell__label"},W4={key:0,class:"control-cell__target-label"},X4={key:1,class:"control-cell__node-label"},Y4={key:3,class:"control-cell__widget control-cell__anim-widget"},q4={class:"control-cell__value mono"},K4={class:"control-cell__label"},Z4={key:0,class:"control-cell__target-label"},j4={key:1,class:"control-cell__node-label"},J4={key:4,class:"control-cell__widget control-cell__anim-widget"},Q4={class:"control-cell__value mono"},e5={class:"control-cell__label"},t5={key:0,class:"control-cell__target-label"},n5={key:1,class:"control-cell__node-label"},i5={class:"control-cell__value mono"},r5={class:"control-cell__label"},o5={key:0,class:"control-cell__target-label"},s5={key:1,class:"control-cell__node-label"},a5={key:2,class:"control-cell__pulse-ring"},l5={key:6,class:"control-cell__widget control-cell__anim-widget"},u5={class:"control-cell__fft-bars"},c5={class:"control-cell__node-label"},d5={class:"control-cell__label"},f5={class:"control-cell__node-label"},h5=["min","max","step","value"],p5={class:"control-cell__value mono"},m5={class:"control-cell__label"},g5={class:"control-cell__node-label"},v5={class:"control-cell__node-label"},_5={class:"control-cell__label"},y5={class:"control-cell__node-label"},x5={class:"control-cell__lfo-readout"},b5={key:0,class:"control-cell__xy-assignments"},S5={key:0,class:"control-cell__target-label"},M5={key:1,class:"control-cell__target-label"},w5={class:"control-cell__label"},E5={key:1,class:"control-cell__node-label"},T5={key:12,class:"control-cell__widget"},C5={class:"control-cell__accel-readout"},A5={class:"control-cell__accel-axis"},R5={class:"control-cell__accel-bar-track"},I5={class:"control-cell__accel-axis"},P5={class:"control-cell__accel-bar-track"},N5={class:"control-cell__node-label"},D5={class:"value-edit-popup"},L5={class:"value-edit-popup__title"},U5=["value","step"],F5={class:"value-edit-popup__actions"},wd=60,O5={__name:"ControlCell",props:{cell:{type:Object,required:!0},editMode:{type:Boolean,default:!1},index:{type:Number,default:0}},emits:["delete","assign","reorder"],setup(t,{emit:e}){const n=t,i=e,r=Co(),o=Ne(!1),s=Ne(null),a=Ne(null),l=["lfo","timer","damper","fft","random"],u=De(()=>l.includes(n.cell.controlType)),c=De(()=>({knob:"🎛️",slider:"═══",bang:"💥",toggle:"⏻",lfo:"〰️",timer:"⏱️",damper:"🫧",fft:"🎵",random:"🎲",xypad:"✛",accelerometer:"📱"})[n.cell.controlType]||"?"),f=De(()=>{if(!n.cell.boundNodeId)return"";const Q=r.nodes.find(_e=>_e.id===n.cell.boundNodeId);return Q?$t(Q.type)?.label||Q.type:""}),d=De(()=>n.cell.nickname?n.cell.nickname:n.cell.boundParamKey&&!n.cell.boundTargetNodeId?n.cell.boundParamKey.toUpperCase():n.cell.controlType.toUpperCase()),h=De(()=>{if(!n.cell.boundTargetNodeId||!n.cell.boundParamKey)return"";const Q=r.nodes.find(ee=>ee.id===n.cell.boundTargetNodeId);if(!Q)return"";const J=$t(Q.type),Ie=J?.params?.[n.cell.boundParamKey]?.label||n.cell.boundParamKey;return`→ ${J?.label||Q.type}.${Ie}`}),m=De(()=>{if(!n.cell.boundTargetNodeId||!n.cell.boundParamKey)return"";const Q=r.nodes.find(Ie=>Ie.id===n.cell.boundTargetNodeId);return Q?`X → ${$t(Q.type)?.params?.[n.cell.boundParamKey]?.label||n.cell.boundParamKey}`:""}),v=De(()=>{if(!n.cell.boundTargetNodeIdY||!n.cell.boundParamKeyY)return"";const Q=r.nodes.find(Ie=>Ie.id===n.cell.boundTargetNodeIdY);return Q?`Y → ${$t(Q.type)?.params?.[n.cell.boundParamKeyY]?.label||n.cell.boundParamKeyY}`:""}),g=De(()=>{if(!n.cell.boundNodeId||!n.cell.boundParamKey)return null;const Q=r.nodes.find(_e=>_e.id===n.cell.boundNodeId);return Q&&$t(Q.type)?.params?.[n.cell.boundParamKey]||null}),p=De(()=>!n.cell.boundNodeId||!n.cell.boundParamKey?0:r.nodeParams[n.cell.boundNodeId]?.[n.cell.boundParamKey]??g.value?.default??0),y=De(()=>g.value?.min??0),S=De(()=>g.value?.max??1),_=De(()=>g.value?.step??.01),R=De(()=>n.cell.boundNodeId?r.dataOutputs[n.cell.boundNodeId]?.out??0:0),N=De(()=>{if(!n.cell.boundNodeId)return{bass:0,lowMid:0,mid:0,high:0};const Q=r.dataOutputs[n.cell.boundNodeId];return{bass:Q?.bass??0,lowMid:Q?.lowMid??0,mid:Q?.mid??0,high:Q?.high??0}}),F=Ne([]);let x=null;Zt(()=>{u.value&&n.cell.controlType!=="fft"&&(x=setInterval(b,50))}),cr(()=>{clearInterval(x)});function b(){if(!n.cell.boundNodeId)return;const Q=R.value,J=F.value;J.push(Q),J.length>wd&&J.shift(),F.value=J,P()}function P(){const Q=s.value;if(!Q)return;const J=Q.getContext("2d"),_e=Q.width,Ie=Q.height,We=F.value;if(J.clearRect(0,0,_e,Ie),We.length<2)return;let ee=1/0,Le=-1/0;for(const Be of We)Be<ee&&(ee=Be),Be>Le&&(Le=Be);Le===ee&&(ee-=.5,Le+=.5);const Oe=Le-ee;J.strokeStyle="#00d4ff",J.lineWidth=1.5,J.lineJoin="round",J.beginPath();for(let Be=0;Be<We.length;Be++){const Fe=Be/(wd-1)*_e,Ce=Ie-(We[Be]-ee)/Oe*Ie;Be===0?J.moveTo(Fe,Ce):J.lineTo(Fe,Ce)}J.stroke(),J.lineTo((We.length-1)/(wd-1)*_e,Ie),J.lineTo(0,Ie),J.closePath(),J.fillStyle="rgba(0, 212, 255, 0.1)",J.fill()}const M=De(()=>n.cell.boundNodeId?r.nodeParams[n.cell.boundNodeId]?.frequency??1:1),w=De(()=>n.cell.boundNodeId?r.nodeParams[n.cell.boundNodeId]?.amplitude??1:1),W=De(()=>n.cell.boundNodeId?r.nodeParams[n.cell.boundNodeId]?.waveform??"sine":"sine");function E(Q){return{sine:"∿",saw:"⩘",square:"⊓",triangle:"△"}[Q]||Q}function k(Q){n.cell.boundNodeId&&r.setParam(n.cell.boundNodeId,"waveform",Q)}let A=0,I=0,O=0,z=0,q=!1;function te(Q){if(n.editMode)return;q=!0;const J=Q.touches?Q.touches[0]:Q;A=J.clientX,I=J.clientY,O=M.value,z=w.value,window.addEventListener("pointermove",ne),window.addEventListener("pointerup",Pe),window.addEventListener("touchmove",ye,{passive:!1}),window.addEventListener("touchend",Pe)}function ne(Q){if(!q||!n.cell.boundNodeId)return;const J=Q.clientX-A,_e=-(Q.clientY-I),Ie=Math.max(.01,Math.min(5,O+J*.05)),We=Math.max(0,Math.min(5,z+_e*.02));r.setParam(n.cell.boundNodeId,"frequency",Ie),r.setParam(n.cell.boundNodeId,"amplitude",We)}function ye(Q){Q.preventDefault();const J=Q.touches[0];ne({clientX:J.clientX,clientY:J.clientY})}function Pe(){q=!1,window.removeEventListener("pointermove",ne),window.removeEventListener("pointerup",Pe),window.removeEventListener("touchmove",ye),window.removeEventListener("touchend",Pe)}const Te=De(()=>n.cell.boundNodeId?r.nodeParams[n.cell.boundNodeId]?.triggerInterval??.5:.5),H=De(()=>n.cell.boundNodeId?r.nodeParams[n.cell.boundNodeId]?.damping??0:0),B=Ne(!1);let X=null;function ve(Q){n.cell.boundNodeId&&(B.value=!1,Ae.value=Q,G.value=Q==="triggerInterval"?"Self-Trigger Interval (s)":"Damping",Y.value=r.nodeParams[n.cell.boundNodeId]?.[Q]??(Q==="triggerInterval"?.5:0),L.value=Q==="triggerInterval"?.01:.001,we.value=!0,qt(()=>U.value?.focus?.()))}const we=Ne(!1),Ae=Ne(""),G=Ne(""),Y=Ne(0),L=Ne(.01),U=Ne(null);n.cell.controlType==="random"&&at(R,Q=>{!we.value&&X!==null&&Math.abs(Q-X)>.005&&(B.value=!0,setTimeout(()=>{B.value=!1},300)),X=Q});function V(Q){n.cell.boundNodeId&&(Ae.value=Q,G.value=Q==="frequency"?"Frequency (Hz)":"Amplitude",Y.value=r.nodeParams[n.cell.boundNodeId]?.[Q]??1,L.value=.01,we.value=!0,qt(()=>U.value?.focus?.()))}function Z(Q){n.cell.boundNodeId&&Ae.value&&!isNaN(Q)&&r.setParam(n.cell.boundNodeId,Ae.value,Q),we.value=!1}function C(Q){n.cell.boundNodeId&&(Ae.value=Q,G.value=Q==="x"?"X Value":"Y Value",Y.value=r.nodeParams[n.cell.boundNodeId]?.[Q]??.5,L.value=.001,we.value=!0,qt(()=>U.value?.focus?.()))}const se=De(()=>n.cell.boundNodeId?r.nodeParams[n.cell.boundNodeId]?.x??.5:.5),re=De(()=>n.cell.boundNodeId?r.nodeParams[n.cell.boundNodeId]?.y??.5:.5),oe=De(()=>({left:se.value*100+"%",top:(1-re.value)*100+"%"})),ue=De(()=>({left:se.value*100+"%",top:(1-re.value)*100+"%"}));let D=!1;function T(Q){D=!0,Se(Q),window.addEventListener("pointermove",j),window.addEventListener("pointerup",he)}function j(Q){D&&Se(Q)}function he(){D=!1,window.removeEventListener("pointermove",j),window.removeEventListener("pointerup",he)}function Se(Q){const J=a.value;if(!J||!n.cell.boundNodeId)return;const _e=J.getBoundingClientRect(),Ie=Math.max(0,Math.min(1,(Q.clientX-_e.left)/_e.width)),We=Math.max(0,Math.min(1,1-(Q.clientY-_e.top)/_e.height));r.setParam(n.cell.boundNodeId,"x",Ie),r.setParam(n.cell.boundNodeId,"y",We)}function pe(Q){if(!n.cell.boundNodeId)return 50;const _e=r.dataOutputs[n.cell.boundNodeId]?.[Q]??0;return Math.max(0,Math.min(100,(_e+1)*50))}function ke(Q){n.cell.boundNodeId&&n.cell.boundParamKey&&r.setParam(n.cell.boundNodeId,n.cell.boundParamKey,Q)}function Ue(){n.cell.boundNodeId&&r.triggerButton(n.cell.boundNodeId)}function ie(Q){o.value=!0,Q.dataTransfer.setData("text/plain",String(n.index)),Q.dataTransfer.effectAllowed="move"}function ce(){o.value=!1}function de(Q){const J=parseInt(Q.dataTransfer.getData("text/plain"),10);!isNaN(J)&&J!==n.index&&i("reorder",J,n.index)}return(Q,J)=>(ae(),ge("div",{class:lt(["control-cell",{"control-cell--edit":t.editMode,"control-cell--unbound":!t.cell.boundNodeId&&!u.value,"control-cell--dragging":o.value}]),draggable:t.editMode,onDragstart:ie,onDragend:ce,onDragover:J[26]||(J[26]=Ve(()=>{},["prevent"])),onDrop:de},[t.editMode?(ae(),ge("button",{key:0,class:"control-cell__delete",onClick:J[0]||(J[0]=Ve(_e=>Q.$emit("delete"),["stop"]))},"✕")):$e("",!0),!t.cell.boundNodeId&&!u.value?(ae(),ge("div",{key:1,class:"control-cell__unbound",onClick:J[1]||(J[1]=Ve(_e=>Q.$emit("assign"),["stop"]))},[K("span",k4,Re(c.value),1),J[27]||(J[27]=K("span",{class:"control-cell__unbound-label"},"Tap to assign",-1))])):t.cell.controlType==="lfo"?(ae(),ge("div",V4,[K("canvas",{ref_key:"graphCanvas",ref:s,class:"control-cell__mini-graph control-cell__mini-graph--interactive",width:"120",height:"50",onPointerdown:te,onTouchstart:Ve(te,["prevent"])},null,544),K("div",z4,[K("span",{class:"control-cell__value mono",onClick:J[2]||(J[2]=Ve(_e=>V("frequency"),["stop"])),title:"Tap to edit"},Re(M.value.toFixed(2))+" Hz",1),K("span",{class:"control-cell__value mono",onClick:J[3]||(J[3]=Ve(_e=>V("amplitude"),["stop"])),title:"Tap to edit"},"amp "+Re(w.value.toFixed(2)),1)]),K("div",$4,[(ae(),ge(it,null,Gt(["sine","saw","square","triangle"],_e=>K("button",{key:_e,class:lt(["control-cell__wf-btn",{"control-cell__wf-btn--active":W.value===_e}]),onClick:Ve(Ie=>k(_e),["stop"])},Re(E(_e)),11,H4)),64))]),K("div",G4,Re(d.value),1),h.value?(ae(),ge("div",W4,Re(h.value),1)):(ae(),ge("div",X4,Re(f.value||"LFO"),1))])):t.cell.controlType==="timer"?(ae(),ge("div",Y4,[K("canvas",{ref_key:"graphCanvas",ref:s,class:"control-cell__mini-graph",width:"120",height:"50"},null,512),K("div",q4,Re(R.value?.toFixed(2)??"0.00")+" s",1),K("div",K4,Re(d.value),1),h.value?(ae(),ge("div",Z4,Re(h.value),1)):(ae(),ge("div",j4,Re(f.value||"Timer"),1))])):t.cell.controlType==="damper"?(ae(),ge("div",J4,[K("canvas",{ref_key:"graphCanvas",ref:s,class:"control-cell__mini-graph",width:"120",height:"50"},null,512),K("div",Q4,Re(R.value?.toFixed(3)??"0.000"),1),K("div",e5,Re(d.value),1),h.value?(ae(),ge("div",t5,Re(h.value),1)):(ae(),ge("div",n5,Re(f.value||"Damper"),1))])):t.cell.controlType==="random"?(ae(),ge("div",{key:5,class:lt(["control-cell__widget control-cell__anim-widget control-cell__random-widget",{"control-cell__random-widget--pulsing":B.value}])},[K("canvas",{ref_key:"graphCanvas",ref:s,class:"control-cell__mini-graph",width:"120",height:"50"},null,512),K("div",i5,Re(R.value?.toFixed(3)??"0.000"),1),K("div",{class:"control-cell__lfo-readout",onPointerdown:J[6]||(J[6]=Ve(()=>{},["stop"])),onMousedown:J[7]||(J[7]=Ve(()=>{},["stop"]))},[K("span",{class:"control-cell__value mono control-cell__value--tappable",onClick:J[4]||(J[4]=Ve(_e=>ve("triggerInterval"),["stop"])),title:"Tap to edit"},"⏱ "+Re(Te.value.toFixed(2))+"s",1),K("span",{class:"control-cell__value mono control-cell__value--tappable",onClick:J[5]||(J[5]=Ve(_e=>ve("damping"),["stop"])),title:"Tap to edit"},"◈ "+Re(H.value.toFixed(3)),1)],32),K("div",r5,Re(d.value),1),h.value?(ae(),ge("div",o5,Re(h.value),1)):(ae(),ge("div",s5,Re(f.value||"Random"),1)),B.value?(ae(),ge("div",a5)):$e("",!0)],2)):t.cell.controlType==="fft"?(ae(),ge("div",l5,[K("div",u5,[K("div",{class:"control-cell__fft-bar",style:nt({height:N.value.bass*100+"%"})},[...J[28]||(J[28]=[K("span",null,"B",-1)])],4),K("div",{class:"control-cell__fft-bar",style:nt({height:N.value.lowMid*100+"%"})},[...J[29]||(J[29]=[K("span",null,"LM",-1)])],4),K("div",{class:"control-cell__fft-bar",style:nt({height:N.value.mid*100+"%"})},[...J[30]||(J[30]=[K("span",null,"M",-1)])],4),K("div",{class:"control-cell__fft-bar",style:nt({height:N.value.high*100+"%"})},[...J[31]||(J[31]=[K("span",null,"H",-1)])],4)]),J[32]||(J[32]=K("div",{class:"control-cell__label"},"FFT",-1)),K("div",c5,Re(f.value||"Audio FFT"),1)])):t.cell.controlType==="knob"?(ae(),ge("div",{key:7,class:"control-cell__widget",onPointerdown:J[8]||(J[8]=Ve(()=>{},["stop"])),onMousedown:J[9]||(J[9]=Ve(()=>{},["stop"]))},[tt(lx,{modelValue:p.value,min:y.value,max:S.value,step:_.value,size:null,"onUpdate:modelValue":ke},null,8,["modelValue","min","max","step"]),K("div",d5,Re(d.value),1),K("div",f5,Re(f.value),1)],32)):t.cell.controlType==="slider"?(ae(),ge("div",{key:8,class:"control-cell__widget",onPointerdown:J[11]||(J[11]=Ve(()=>{},["stop"])),onMousedown:J[12]||(J[12]=Ve(()=>{},["stop"]))},[K("input",{type:"range",class:"control-cell__slider",min:y.value,max:S.value,step:_.value,value:p.value,onInput:J[10]||(J[10]=_e=>ke(Number(_e.target.value)))},null,40,h5),K("div",p5,Re(p.value?.toFixed(2)),1),K("div",m5,Re(d.value),1),K("div",g5,Re(f.value),1)],32)):t.cell.controlType==="bang"?(ae(),ge("div",{key:9,class:"control-cell__widget",onPointerdown:J[13]||(J[13]=Ve(()=>{},["stop"])),onMousedown:J[14]||(J[14]=Ve(()=>{},["stop"]))},[K("button",{class:"control-cell__bang-btn",onClick:Ve(Ue,["stop"])},Re(d.value||"Bang!"),1),K("div",v5,Re(f.value),1)],32)):t.cell.controlType==="toggle"?(ae(),ge("div",{key:10,class:"control-cell__widget",onPointerdown:J[16]||(J[16]=Ve(()=>{},["stop"])),onMousedown:J[17]||(J[17]=Ve(()=>{},["stop"]))},[K("button",{class:lt(["control-cell__toggle-btn",{"control-cell__toggle-btn--active":!!p.value}]),onClick:J[15]||(J[15]=Ve(_e=>ke(!p.value),["stop"]))},Re(p.value?"ON":"OFF"),3),K("div",_5,Re(d.value),1),K("div",y5,Re(f.value),1)],32)):t.cell.controlType==="xypad"?(ae(),ge("div",{key:11,class:"control-cell__widget",onPointerdown:J[20]||(J[20]=Ve(()=>{},["stop"])),onMousedown:J[21]||(J[21]=Ve(()=>{},["stop"]))},[K("div",{class:"control-cell__xypad",ref_key:"xyPadRef",ref:a,onPointerdown:T},[K("div",{class:"control-cell__xypad-crosshair",style:nt(oe.value)},null,4),K("div",{class:"control-cell__xypad-glow",style:nt(ue.value)},null,4)],544),K("div",x5,[K("span",{class:"control-cell__value mono",onClick:J[18]||(J[18]=Ve(_e=>C("x"),["stop"])),title:"Tap to edit"},"X: "+Re(se.value.toFixed(2)),1),K("span",{class:"control-cell__value mono",onClick:J[19]||(J[19]=Ve(_e=>C("y"),["stop"])),title:"Tap to edit"},"Y: "+Re(re.value.toFixed(2)),1)]),m.value||v.value?(ae(),ge("div",b5,[m.value?(ae(),ge("div",S5,Re(m.value),1)):$e("",!0),v.value?(ae(),ge("div",M5,Re(v.value),1)):$e("",!0)])):$e("",!0),K("div",w5,Re(d.value),1),!m.value&&!v.value?(ae(),ge("div",E5,Re(f.value),1)):$e("",!0)],32)):t.cell.controlType==="accelerometer"?(ae(),ge("div",T5,[K("div",C5,[K("div",A5,[J[33]||(J[33]=K("span",{class:"control-cell__accel-label"},"X",-1)),K("div",R5,[K("div",{class:"control-cell__accel-bar",style:nt({width:pe("x")+"%",background:"#ff4757"})},null,4)])]),K("div",I5,[J[34]||(J[34]=K("span",{class:"control-cell__accel-label"},"Y",-1)),K("div",P5,[K("div",{class:"control-cell__accel-bar",style:nt({width:pe("y")+"%",background:"#2ed573"})},null,4)])])]),J[35]||(J[35]=K("div",{class:"control-cell__label"},"Accelerometer",-1)),K("div",N5,Re(f.value),1)])):$e("",!0),(ae(),tn(_h,{to:"body"},[we.value?(ae(),ge("div",{key:0,class:"value-edit-overlay",onClick:J[25]||(J[25]=Ve(_e=>we.value=!1,["self"]))},[K("div",D5,[K("div",L5,Re(G.value),1),K("input",{ref_key:"valueEditInput",ref:U,type:"number",class:"value-edit-popup__input",value:Y.value,step:L.value,onKeydown:J[22]||(J[22]=$1(_e=>Z(Number(_e.target.value)),["enter"]))},null,40,U5),K("div",F5,[K("button",{class:"value-edit-popup__btn",onClick:J[23]||(J[23]=_e=>we.value=!1)},"Cancel"),K("button",{class:"value-edit-popup__btn value-edit-popup__btn--ok",onClick:J[24]||(J[24]=_e=>Z(Number(Q.$refs.valueEditInput?.value)))},"OK")])])])):$e("",!0)]))],42,B4))}},B5=fr(O5,[["__scopeId","data-v-d1dd8399"]]),k5={class:"radial-menu__center"},V5={class:"radial-menu__segment-icon"},z5={class:"radial-menu__segment-label"},$5={class:"radial-menu__segment-icon"},H5={class:"radial-menu__segment-label"},cv=100,Pl=64,G5={__name:"RadialMenu",props:{categories:{type:Array,default:()=>[]}},emits:["select","cancel"],setup(t,{expose:e,emit:n}){const i=t,r=n,o=Ne(!1),s=Ne(0),a=Ne(0),l=Ne(null),u=Ne(null),c=De(()=>u.value?i.categories.find(p=>p.id===u.value)?.items||[]:[]);function f(g,p){s.value=g,a.value=p,l.value=null,u.value=null,o.value=!0}function d(){o.value=!1,l.value=null,u.value=null}function h(g,p){const y=g/p*2*Math.PI-Math.PI/2,S=Math.cos(y)*cv,_=Math.sin(y)*cv;return{transform:`translate(${S-Pl/2}px, ${_-Pl/2}px)`,width:Pl+"px",height:Pl+"px"}}function m(g){const p=g.clientX-s.value,y=g.clientY-a.value;if(Math.sqrt(p*p+y*y)<30){l.value=null;return}const _=Math.atan2(y,p),R=u.value?c.value:i.categories,N=R.length;if(N===0)return;const F=(_+Math.PI/2+2*Math.PI)%(2*Math.PI),x=Math.floor(F/(2*Math.PI/N))%N;l.value=R[x]?.id||null}function v(){if(!l.value){if(u.value){u.value=null,l.value=null;return}r("cancel"),d();return}if(!u.value){u.value=l.value,l.value=null;return}r("select",l.value),d()}return e({show:f,hide:d,visible:o}),(g,p)=>(ae(),tn(_h,{to:"body"},[o.value?(ae(),ge("div",{key:0,class:"radial-overlay",onPointerup:v,onPointermove:m,onTouchmove:p[0]||(p[0]=Ve(()=>{},["prevent"]))},[K("div",{class:"radial-menu",style:nt({left:s.value+"px",top:a.value+"px"})},[K("div",k5,Re(u.value?u.value:l.value||"⊕"),1),u.value?(ae(!0),ge(it,{key:1},Gt(c.value,(y,S)=>(ae(),ge("div",{key:y.id,class:lt(["radial-menu__segment",{"radial-menu__segment--active":l.value===y.id}]),style:nt(h(S,c.value.length))},[K("span",$5,Re(y.icon),1),K("span",H5,Re(y.label),1)],6))),128)):(ae(!0),ge(it,{key:0},Gt(t.categories,(y,S)=>(ae(),ge("div",{key:y.id,class:lt(["radial-menu__segment",{"radial-menu__segment--active":l.value===y.id}]),style:nt(h(S,t.categories.length))},[K("span",V5,Re(y.icon),1),K("span",z5,Re(y.label),1)],6))),128))],4)],32)):$e("",!0)]))}},W5=fr(G5,[["__scopeId","data-v-ffb4e9d0"]]),X5={class:"control-drawer__handle-arrow"},Y5={class:"control-drawer__handle-actions"},q5=["title"],K5={class:"control-drawer__grid"},Z5={class:"assign-popup"},j5={class:"assign-popup__header"},J5={key:0,class:"assign-popup__empty"},Q5=["onClick"],eV={class:"assign-popup__item-node"},tV={class:"assign-popup__item-param"},nV={key:1,class:"assign-popup__skip-row"},iV={__name:"ControlDrawer",setup(t){const e=Co(),n=Ne(!1),i=Ne(null),r=Ne(!1),o=Ne(null),s=Ne(!1),a=Ne(null),l=Ne(null);let u=null,c=!1;const f=[{id:"controls",label:"Controls",icon:"🎛️",items:[{id:"knob",label:"Knob",icon:"🎛️"},{id:"slider",label:"Slider",icon:"═══"},{id:"bang",label:"Bang",icon:"💥"},{id:"toggle",label:"Toggle",icon:"⏻"},{id:"xypad",label:"XY Pad",icon:"✛"}]},{id:"animation",label:"Animation",icon:"🌊",items:[{id:"lfo",label:"LFO",icon:"〜️"},{id:"timer",label:"Timer",icon:"⏱️"},{id:"damper",label:"Damper",icon:"🫧"},{id:"fft",label:"FFT",icon:"🎵"}]}],d=De(()=>e.getUnboundExposedParams()),h=De(()=>l.value||(s.value?"Route Output To…":"Assign Parameter")),m=De(()=>e.perfGridCells.filter(P=>["knob","slider","button","toggle","bang"].includes(P.controlType)&&P.boundNodeId&&P.boundParamKey?!e.edges.some(W=>W.target===P.boundNodeId&&W.targetHandle===P.boundParamKey):!0));at(()=>e.isPerformanceMode,P=>{P&&v()},{immediate:!0}),Zt(()=>{window.addEventListener("graph-loaded",()=>{e.isPerformanceMode&&v()})}),_s(()=>{window.removeEventListener("graph-loaded",v)});function v(){const P=e.getControlNodes(),M=new Set(e.perfGridCells.map(w=>w.boundNodeId).filter(Boolean));for(const w of P){if(M.has(w.id))continue;const E={knob:"knob",slider:"slider",bang:"bang",button:"toggle",toggle:"toggle"}[w.type];if(!E||!E)continue;const k=w.data?.def;if(k?.params){const A=Object.keys(k.params)[0];if(A&&!e.edges.some(O=>O.target===w.id&&O.targetHandle===A)&&!e.perfGridCells.some(z=>z.boundNodeId===w.id&&z.boundParamKey===A)){const z=e.addPerfCell(E);e.bindPerfCell(z,w.id,A)}}}}function g(P){c=!1;const M=P.touches?P.touches[0]:P,w=M.clientX,W=M.clientY;u=setTimeout(()=>{c=!0,i.value?.show(w,W)},400)}function p(){clearTimeout(u)}function y(){if(c)return;const P=e.addPerfCell("knob");o.value=P,r.value=!0}function S(P){const M={lfo:"lfo",timer:"timer",damper:"damper",fft:"fft",random:"random",accelerometer:"accelerometer",xypad:"xyPad"};if(M[P]){const W=M[P],E=e.addNode(W,{x:100+Math.random()*200,y:100+Math.random()*200});if(E){const k=e.addPerfCell(P);e.bindPerfCell(k,E,null),P==="accelerometer"&&x(E),o.value=k,s.value=!0,r.value=!0}return}const w=e.addPerfCell(P);o.value=w,s.value=!1,r.value=!0}function _(P){o.value=P,r.value=!0}function R(P,M,w,W){const E=e.nodes.find(z=>z.id===M);if(!E)return;const A=$t(E.type)?.params?.[w];if(!A)return;const I=A.min??0,O=A.max??1;W==="X"?(e.setParam(P,"minX",I),e.setParam(P,"maxX",O)):(e.setParam(P,"minY",I),e.setParam(P,"maxY",O))}function N(P){if(!o.value)return;const M=e.perfGridCells.find(w=>w.id===o.value);if(!M){r.value=!1;return}if(s.value)if(M.controlType==="xypad"&&!a.value){e.bindPerfCellTarget(M.id,P.nodeId,P.paramKey),R(M.boundNodeId,P.nodeId,P.paramKey,"X"),e.addEdge({source:M.boundNodeId,sourceHandle:"x",target:P.nodeId,targetHandle:P.paramKey}),a.value="y",l.value="Assign Y Axis To…";return}else if(M.controlType==="xypad"&&a.value==="y")e.bindPerfCellTargetY(M.id,P.nodeId,P.paramKey),R(M.boundNodeId,P.nodeId,P.paramKey,"Y"),e.addEdge({source:M.boundNodeId,sourceHandle:"y",target:P.nodeId,targetHandle:P.paramKey}),a.value=null,l.value=null;else{e.bindPerfCellTarget(M.id,P.nodeId,P.paramKey);const w=M.controlType==="fft"?"bass":M.controlType==="accelerometer"?"x":"out";e.addEdge({source:M.boundNodeId,sourceHandle:w,target:P.nodeId,targetHandle:P.paramKey})}else e.bindPerfCell(M.id,P.nodeId,P.paramKey);r.value=!1,o.value=null,a.value=null,l.value=null}function F(P,M){e.reorderPerfCells(P,M)}function x(P){typeof DeviceMotionEvent<"u"&&(typeof DeviceMotionEvent.requestPermission=="function"?DeviceMotionEvent.requestPermission().then(M=>{M==="granted"&&b(P)}).catch(console.warn):b(P))}function b(P){window.addEventListener("devicemotion",M=>{const w=e.nodes.find(E=>E.id===P);if(!w)return;const W=M.accelerationIncludingGravity;W&&(w._accelX=(W.x??0)/9.81,w._accelY=(W.y??0)/9.81,w._accelZ=(W.z??0)/9.81)})}return(P,M)=>(ae(),ge("div",{class:lt(["control-drawer",{"control-drawer--collapsed":n.value}])},[K("div",{class:"control-drawer__handle",onClick:M[1]||(M[1]=w=>n.value=!n.value)},[K("span",X5,Re(n.value?"▲":"▼"),1),M[5]||(M[5]=K("span",{class:"control-drawer__handle-title"},"Controls",-1)),K("div",Y5,[K("button",{class:lt(["control-drawer__lock-btn",{"control-drawer__lock-btn--unlocked":fe(e).isPerfEditMode}]),onClick:M[0]||(M[0]=Ve(w=>fe(e).togglePerfEditMode(),["stop"])),title:fe(e).isPerfEditMode?"Lock Controls":"Unlock to Edit"},Re(fe(e).isPerfEditMode?"🔓":"🔒"),11,q5)])]),Hi(K("div",K5,[(ae(!0),ge(it,null,Gt(m.value,(w,W)=>(ae(),tn(B5,{key:w.id,cell:w,"edit-mode":fe(e).isPerfEditMode,index:W,onDelete:E=>fe(e).removePerfCell(w.id),onAssign:E=>_(w.id),onReorder:F},null,8,["cell","edit-mode","index","onDelete","onAssign"]))),128)),fe(e).isPerfEditMode?(ae(),ge("div",{key:0,class:"control-drawer__add-cell",onPointerdown:g,onPointerup:p,onPointerleave:p,onTouchstart:Ve(g,["prevent"]),onClick:y},[...M[6]||(M[6]=[K("span",{class:"control-drawer__add-icon"},"➕",-1),K("span",{class:"control-drawer__add-label"},[hi("Hold for menu"),K("br"),hi("Tap to quick-add")],-1)])],32)):$e("",!0)],512),[[Gi,!n.value]]),tt(W5,{ref_key:"radialMenuRef",ref:i,categories:f,onSelect:S,onCancel:()=>{}},null,512),(ae(),tn(_h,{to:"body"},[r.value?(ae(),ge("div",{key:0,class:"assign-overlay",onClick:M[4]||(M[4]=Ve(w=>r.value=!1,["self"]))},[K("div",Z5,[K("div",j5,Re(h.value),1),d.value.length===0?(ae(),ge("div",J5,[M[7]||(M[7]=hi(" No unbound exposed parameters available. ",-1)),M[8]||(M[8]=K("br",null,null,-1)),M[9]||(M[9]=K("br",null,null,-1)),M[10]||(M[10]=K("span",{style:{"font-size":"11px",opacity:"0.7"}}," Expose parameters in Editor Mode first (🔗 icon in the inspector). ",-1)),M[11]||(M[11]=K("br",null,null,-1)),M[12]||(M[12]=K("br",null,null,-1)),s.value?(ae(),ge("button",{key:0,class:"assign-popup__skip-btn",onClick:M[2]||(M[2]=w=>r.value=!1)},"Skip — use standalone")):$e("",!0)])):$e("",!0),(ae(!0),ge(it,null,Gt(d.value,w=>(ae(),ge("div",{key:`${w.nodeId}::${w.paramKey}`,class:"assign-popup__item",onClick:W=>N(w)},[K("span",eV,Re(w.nodeLabel),1),M[13]||(M[13]=K("span",{class:"assign-popup__item-sep"},"→",-1)),K("span",tV,Re(w.paramLabel),1)],8,Q5))),128)),s.value&&d.value.length>0?(ae(),ge("div",nV,[K("button",{class:"assign-popup__skip-btn",onClick:M[3]||(M[3]=w=>r.value=!1)},"Skip — use standalone")])):$e("",!0)])])):$e("",!0)]))],2))}},rV=fr(iV,[["__scopeId","data-v-8a7140bd"]]),oV={class:"perf-view"},sV={class:"perf-view__toolbar"},aV={class:"perf-view__badge mono"},lV={class:"perf-view__badge mono"},uV={class:"perf-view__zoom-level mono"},cV={key:0,class:"perf-view__histogram"},dV={__name:"PerformanceView",props:{fps:{type:Number,default:0}},setup(t,{expose:e}){const n=Co(),i=Ne(null),r=Ne(null),o=Ne(null),s=Ne(!1),a=Ne(1),l=Ne(0),u=Ne(0);let c=!1,f=0,d=0,h=0,m=0;const v=De(()=>{const b=i.value;return b?`${b.width}×${b.height}`:"—"});function g(b){const P=b.deltaY>0?.9:1.1,M=Math.max(.1,Math.min(10,a.value*P)),w=r.value?.getBoundingClientRect();if(w){const W=b.clientX-w.left,E=b.clientY-w.top;l.value=W-(W-l.value)*(M/a.value),u.value=E-(E-u.value)*(M/a.value)}a.value=M}function p(b){(b.button===1||b.button===0)&&(c=!0,f=b.clientX,d=b.clientY,h=l.value,m=u.value,b.currentTarget?.setPointerCapture?.(b.pointerId))}function y(b){c&&(l.value=h+(b.clientX-f),u.value=m+(b.clientY-d))}function S(){c=!1}function _(){const b=r.value,P=i.value;if(!b||!P||!P.width||!P.height)return;const M=b.clientWidth,w=b.clientHeight,W=Math.min(M/P.width,w/P.height);a.value=W,l.value=(M-P.width*W)/2,u.value=(w-P.height*W)/2}function R(){a.value=1;const b=r.value,P=i.value;b&&P&&(l.value=(b.clientWidth-P.width)/2,u.value=(b.clientHeight-P.height)/2)}at(s,async b=>{b&&(await qt(),N())});function N(){const b=i.value,P=o.value;if(!b||!P||!b.width)return;const M=document.createElement("canvas");M.width=b.width,M.height=b.height;const w=M.getContext("2d");w.drawImage(b,0,0);const E=w.getImageData(0,0,M.width,M.height).data,k=new Array(256).fill(0),A=new Array(256).fill(0),I=new Array(256).fill(0);for(let ye=0;ye<E.length;ye+=4)k[E[ye]]++,A[E[ye+1]]++,I[E[ye+2]]++;const O=Math.max(...k,...A,...I,1),z=P.getContext("2d"),q=P.width,te=P.height;z.clearRect(0,0,q,te);function ne(ye,Pe){z.strokeStyle=Pe,z.lineWidth=1,z.globalAlpha=.6,z.beginPath();for(let Te=0;Te<256;Te++){const H=Te/255*q,B=te-ye[Te]/O*te;Te===0?z.moveTo(H,B):z.lineTo(H,B)}z.stroke()}ne(k,"#ff4757"),ne(A,"#2ed573"),ne(I,"#1e90ff"),z.globalAlpha=1}let F=null;at(s,b=>{b?F=setInterval(N,500):clearInterval(F)},{immediate:!0});function x(){setTimeout(()=>_(),100)}return Zt(async()=>{await qt(),_(),window.addEventListener("resize",x),window.addEventListener("orientationchange",x)}),cr(()=>{window.removeEventListener("resize",x),window.removeEventListener("orientationchange",x),clearInterval(F)}),e({perfCanvasRef:i,fitView:_}),(b,P)=>(ae(),ge("div",oV,[K("div",{class:"perf-view__renderer",ref_key:"viewportRef",ref:r,onWheel:Ve(g,["prevent"]),onPointerdown:p,onPointermove:y,onPointerup:S},[K("div",{class:"perf-view__canvas-wrap",style:nt({transform:`translate(${l.value}px, ${u.value}px) scale(${a.value})`,transformOrigin:"0 0"})},[K("canvas",{ref_key:"perfCanvasRef",ref:i,class:"perf-view__canvas"},null,512)],4)],544),K("div",sV,[K("span",aV,"v"+Re(fe(y_).version),1),K("span",lV,Re(v.value),1),K("span",{class:lt(["perf-view__badge perf-view__fps mono",{"perf-view__fps--ok":t.fps>=50}])},Re(t.fps)+" FPS",3),P[2]||(P[2]=K("div",{style:{flex:"1"}},null,-1)),K("span",uV,Re(Math.round(a.value*100))+"%",1),K("button",{class:"perf-view__tool-btn",onClick:_,title:"Fit to viewport"},"⊡"),K("button",{class:"perf-view__tool-btn",onClick:R,title:"1:1 pixel zoom"},"1:1"),K("button",{class:lt(["perf-view__tool-btn",{active:s.value}]),onClick:P[0]||(P[0]=M=>s.value=!s.value),title:"Toggle Histogram"},"📊",2),P[3]||(P[3]=K("div",{class:"perf-view__divider"},null,-1)),K("button",{class:"perf-view__exit-btn",onClick:P[1]||(P[1]=M=>fe(n).togglePerformanceMode()),title:"Exit Performance Mode"}," ✕ Editor ")]),s.value?(ae(),ge("div",cV,[K("canvas",{ref_key:"histCanvas",ref:o,class:"perf-view__hist-canvas",width:"256",height:"60"},null,512)])):$e("",!0),tt(rV)]))}},fV=fr(dV,[["__scopeId","data-v-b350fb74"]]),hV=`// Passthrough — renders texture as-is\r
precision highp float;\r
varying vec2 vUv;\r
uniform sampler2D uTexture;\r
\r
void main() {\r
  gl_FragColor = texture2D(uTexture, vUv);\r
}\r
`,pV=`// Reeded Glass — ribbed/fluted glass refraction\r
precision highp float;\r
varying vec2 vUv;\r
uniform sampler2D uIn;\r
uniform sampler2D uTexture;\r
uniform bool uTextureConnected;\r
uniform float uScale;\r
uniform float uIntensity;\r
uniform float uAngle;\r
uniform float uBlur;\r
uniform vec2 uResolution;\r
uniform float uTime;\r
\r
void main() {\r
  float angleRad = uAngle * 3.14159265 / 180.0;\r
  vec2 dir = vec2(cos(angleRad), sin(angleRad));\r
  vec2 perpDir = vec2(-dir.y, dir.x);\r
\r
  // Project UV onto the rib direction\r
  float projected = dot(vUv * uResolution / max(uResolution.x, uResolution.y), perpDir);\r
  float ribPattern;\r
\r
  if (uTextureConnected) {\r
    // Use external texture for refraction pattern\r
    vec2 texUV = vec2(fract(projected * uScale / 10.0), 0.5);\r
    ribPattern = texture2D(uTexture, texUV).r * 2.0 - 1.0;\r
  } else {\r
    // Procedural ribs — sinusoidal\r
    ribPattern = sin(projected * uScale);\r
  }\r
\r
  // Displacement\r
  vec2 offset = perpDir * ribPattern * uIntensity;\r
\r
  // Multi-sample blur along rib direction\r
  vec4 color = vec4(0.0);\r
  float blurSamples = max(1.0, uBlur * 4.0);\r
  float totalWeight = 0.0;\r
\r
  for (float i = -8.0; i <= 8.0; i += 1.0) {\r
    if (abs(i) > blurSamples * 0.5) continue;\r
    float weight = exp(-0.5 * (i * i) / max(blurSamples * 0.25, 0.1));\r
    vec2 sampleUV = vUv + offset + dir * i * uBlur * 0.002;\r
    sampleUV = clamp(sampleUV, 0.0, 1.0);\r
    color += texture2D(uIn, sampleUV) * weight;\r
    totalWeight += weight;\r
  }\r
\r
  gl_FragColor = color / totalWeight;\r
}\r
`,mV=`// Chromatic Aberration — RGB channel offset\r
precision highp float;\r
varying vec2 vUv;\r
uniform sampler2D uIn;\r
uniform float uIntensity;\r
uniform int uDirection; // 0=radial, 1=horizontal, 2=vertical\r
uniform float uCenterX;\r
uniform float uCenterY;\r
uniform vec2 uResolution;\r
\r
void main() {\r
  vec2 center = vec2(uCenterX, uCenterY);\r
  vec2 toCenter = vUv - center;\r
  float dist = length(toCenter);\r
  vec2 dir;\r
\r
  float pixelSize = uIntensity / max(uResolution.x, uResolution.y);\r
\r
  if (uDirection == 0) {\r
    // Radial\r
    dir = normalize(toCenter + 0.0001) * dist * pixelSize;\r
  } else if (uDirection == 1) {\r
    // Horizontal\r
    dir = vec2(pixelSize, 0.0);\r
  } else {\r
    // Vertical\r
    dir = vec2(0.0, pixelSize);\r
  }\r
\r
  float r = texture2D(uIn, vUv + dir).r;\r
  float g = texture2D(uIn, vUv).g;\r
  float b = texture2D(uIn, vUv - dir).b;\r
  float a = texture2D(uIn, vUv).a;\r
\r
  gl_FragColor = vec4(r, g, b, a);\r
}\r
`,gV=`// Heightmap Displacement — displace pixels using a heightmap image\r
precision highp float;\r
varying vec2 vUv;\r
uniform sampler2D uIn;\r
uniform sampler2D uHeightmap;\r
uniform float uStrength;\r
uniform int uChannel; // 0=luminance, 1=r, 2=g, 3=b\r
uniform vec2 uResolution;\r
\r
float getHeight(vec4 c) {\r
  if (uChannel == 1) return c.r;\r
  if (uChannel == 2) return c.g;\r
  if (uChannel == 3) return c.b;\r
  // luminance\r
  return dot(c.rgb, vec3(0.2126, 0.7152, 0.0722));\r
}\r
\r
void main() {\r
  vec4 hSample = texture2D(uHeightmap, vUv);\r
  float h = getHeight(hSample);\r
\r
  // Compute gradient for displacement direction\r
  vec2 texel = 1.0 / uResolution;\r
  float hL = getHeight(texture2D(uHeightmap, vUv - vec2(texel.x, 0.0)));\r
  float hR = getHeight(texture2D(uHeightmap, vUv + vec2(texel.x, 0.0)));\r
  float hU = getHeight(texture2D(uHeightmap, vUv + vec2(0.0, texel.y)));\r
  float hD = getHeight(texture2D(uHeightmap, vUv - vec2(0.0, texel.y)));\r
\r
  vec2 gradient = vec2(hR - hL, hU - hD);\r
  vec2 displaced = vUv + gradient * uStrength;\r
  displaced = clamp(displaced, 0.0, 1.0);\r
\r
  gl_FragColor = texture2D(uIn, displaced);\r
}\r
`,vV=`// Levels — shadows/midtones/highlights per-channel adjustment\r
precision highp float;\r
varying vec2 vUv;\r
uniform sampler2D uIn;\r
uniform float uInputBlack;   // 0-255 range\r
uniform float uInputWhite;   // 0-255 range\r
uniform float uGamma;\r
uniform float uOutputBlack;  // 0-255 range\r
uniform float uOutputWhite;  // 0-255 range\r
uniform int uChannel;        // 0=master, 1=r, 2=g, 3=b\r
\r
vec3 applyLevels(vec3 color) {\r
  float inBlack = uInputBlack / 255.0;\r
  float inWhite = uInputWhite / 255.0;\r
  float outBlack = uOutputBlack / 255.0;\r
  float outWhite = uOutputWhite / 255.0;\r
  float invGamma = 1.0 / max(uGamma, 0.01);\r
\r
  // Normalize to input range\r
  vec3 c = clamp((color - inBlack) / max(inWhite - inBlack, 0.001), 0.0, 1.0);\r
\r
  // Apply gamma\r
  c = pow(c, vec3(invGamma));\r
\r
  // Map to output range\r
  c = outBlack + c * (outWhite - outBlack);\r
\r
  return clamp(c, 0.0, 1.0);\r
}\r
\r
void main() {\r
  vec4 color = texture2D(uIn, vUv);\r
\r
  if (uChannel == 0) {\r
    // Master — apply to all channels\r
    color.rgb = applyLevels(color.rgb);\r
  } else if (uChannel == 1) {\r
    color.r = applyLevels(vec3(color.r)).r;\r
  } else if (uChannel == 2) {\r
    color.g = applyLevels(vec3(color.g)).r;\r
  } else if (uChannel == 3) {\r
    color.b = applyLevels(vec3(color.b)).r;\r
  }\r
\r
  gl_FragColor = color;\r
}\r
`,_V=`// Surface Blur — edge-preserving bilateral filter approximation\r
precision highp float;\r
varying vec2 vUv;\r
uniform sampler2D uIn;\r
uniform float uRadius;     // 1-20 as int but sent as float\r
uniform float uThreshold;  // color difference tolerance 0-1\r
uniform vec2 uResolution;\r
\r
void main() {\r
  vec2 texel = 1.0 / uResolution;\r
  vec4 center = texture2D(uIn, vUv);\r
  int rad = int(uRadius);\r
\r
  vec4 sum = vec4(0.0);\r
  float totalWeight = 0.0;\r
\r
  for (int y = -20; y <= 20; y++) {\r
    for (int x = -20; x <= 20; x++) {\r
      if (x < -rad || x > rad || y < -rad || y > rad) continue;\r
\r
      vec2 offset = vec2(float(x), float(y)) * texel;\r
      vec4 sample_color = texture2D(uIn, vUv + offset);\r
\r
      // Color difference (edge-preserving)\r
      float diff = length(sample_color.rgb - center.rgb);\r
\r
      // Bilateral weight: spatial * range\r
      float spatialWeight = exp(-float(x * x + y * y) / (2.0 * uRadius * uRadius));\r
      float rangeWeight = diff < uThreshold ? 1.0 : exp(-(diff - uThreshold) * 10.0);\r
      float weight = spatialWeight * rangeWeight;\r
\r
      sum += sample_color * weight;\r
      totalWeight += weight;\r
    }\r
  }\r
\r
  gl_FragColor = totalWeight > 0.0 ? sum / totalWeight : center;\r
}\r
`,yV=`// Blend — combine two images with blend modes\r
precision highp float;\r
varying vec2 vUv;\r
uniform sampler2D uBase;\r
uniform sampler2D uOverlay;\r
uniform int uMode;     // 0=normal,1=multiply,2=screen,3=overlay,4=softLight,5=hardLight,6=difference,7=exclusion,8=add,9=subtract\r
uniform float uOpacity;\r
\r
vec3 blendNormal(vec3 base, vec3 blend) { return blend; }\r
vec3 blendMultiply(vec3 base, vec3 blend) { return base * blend; }\r
vec3 blendScreen(vec3 base, vec3 blend) { return 1.0 - (1.0 - base) * (1.0 - blend); }\r
\r
vec3 blendOverlay(vec3 base, vec3 blend) {\r
  return vec3(\r
    base.r < 0.5 ? 2.0 * base.r * blend.r : 1.0 - 2.0 * (1.0 - base.r) * (1.0 - blend.r),\r
    base.g < 0.5 ? 2.0 * base.g * blend.g : 1.0 - 2.0 * (1.0 - base.g) * (1.0 - blend.g),\r
    base.b < 0.5 ? 2.0 * base.b * blend.b : 1.0 - 2.0 * (1.0 - base.b) * (1.0 - blend.b)\r
  );\r
}\r
\r
vec3 blendSoftLight(vec3 base, vec3 blend) {\r
  return vec3(\r
    blend.r < 0.5 ? 2.0*base.r*blend.r + base.r*base.r*(1.0-2.0*blend.r) : sqrt(base.r)*(2.0*blend.r-1.0)+2.0*base.r*(1.0-blend.r),\r
    blend.g < 0.5 ? 2.0*base.g*blend.g + base.g*base.g*(1.0-2.0*blend.g) : sqrt(base.g)*(2.0*blend.g-1.0)+2.0*base.g*(1.0-blend.g),\r
    blend.b < 0.5 ? 2.0*base.b*blend.b + base.b*base.b*(1.0-2.0*blend.b) : sqrt(base.b)*(2.0*blend.b-1.0)+2.0*base.b*(1.0-blend.b)\r
  );\r
}\r
\r
vec3 blendHardLight(vec3 base, vec3 blend) { return blendOverlay(blend, base); }\r
vec3 blendDifference(vec3 base, vec3 blend) { return abs(base - blend); }\r
vec3 blendExclusion(vec3 base, vec3 blend) { return base + blend - 2.0 * base * blend; }\r
vec3 blendAdd(vec3 base, vec3 blend) { return min(base + blend, 1.0); }\r
vec3 blendSubtract(vec3 base, vec3 blend) { return max(base - blend, 0.0); }\r
\r
void main() {\r
  vec4 baseColor = texture2D(uBase, vUv);\r
  vec4 overlayColor = texture2D(uOverlay, vUv);\r
\r
  vec3 result;\r
  if (uMode == 0) result = blendNormal(baseColor.rgb, overlayColor.rgb);\r
  else if (uMode == 1) result = blendMultiply(baseColor.rgb, overlayColor.rgb);\r
  else if (uMode == 2) result = blendScreen(baseColor.rgb, overlayColor.rgb);\r
  else if (uMode == 3) result = blendOverlay(baseColor.rgb, overlayColor.rgb);\r
  else if (uMode == 4) result = blendSoftLight(baseColor.rgb, overlayColor.rgb);\r
  else if (uMode == 5) result = blendHardLight(baseColor.rgb, overlayColor.rgb);\r
  else if (uMode == 6) result = blendDifference(baseColor.rgb, overlayColor.rgb);\r
  else if (uMode == 7) result = blendExclusion(baseColor.rgb, overlayColor.rgb);\r
  else if (uMode == 8) result = blendAdd(baseColor.rgb, overlayColor.rgb);\r
  else if (uMode == 9) result = blendSubtract(baseColor.rgb, overlayColor.rgb);\r
  else result = overlayColor.rgb;\r
\r
  gl_FragColor = vec4(mix(baseColor.rgb, result, uOpacity), baseColor.a);\r
}\r
`,xV=`// Feedback Loop — blend current frame with previous frame\r
precision highp float;\r
varying vec2 vUv;\r
uniform sampler2D uIn;\r
uniform sampler2D uPreviousFrame;\r
uniform float uDecay;\r
uniform int uBlendMode; // 0=normal, 1=add, 2=multiply\r
\r
void main() {\r
  vec4 current = texture2D(uIn, vUv);\r
  vec4 previous = texture2D(uPreviousFrame, vUv);\r
\r
  vec3 blended;\r
  if (uBlendMode == 0) {\r
    blended = mix(current.rgb, previous.rgb, uDecay);\r
  } else if (uBlendMode == 1) {\r
    blended = current.rgb + previous.rgb * uDecay;\r
    blended = min(blended, 1.0);\r
  } else {\r
    blended = current.rgb * (1.0 - uDecay) + current.rgb * previous.rgb * uDecay;\r
  }\r
\r
  gl_FragColor = vec4(blended, current.a);\r
}\r
`,bV=`// UV Generator — emits a UV coordinate map (RG = UV coordinates, range 0..1)\r
// Connect this to any UV node to begin a UV chain.\r
precision highp float;\r
varying vec2 vUv;\r
\r
void main() {\r
  // Simply output the screen-space UV coordinates as RG color data.\r
  // This is the "identity" UV map — no transformation applied.\r
  gl_FragColor = vec4(vUv.x, vUv.y, 0.0, 1.0);\r
}\r
`,SV=`// UV Transform — warps an incoming UV map with scale, rotate, translate.\r
// Reads UV coordinates from uUvIn (or vUv if not connected) and outputs a new UV map.\r
precision highp float;\r
varying vec2 vUv;\r
uniform sampler2D uUvIn;\r
uniform float uScaleX;\r
uniform float uScaleY;\r
uniform float uRotation;    // degrees\r
uniform float uTranslateX;\r
uniform float uTranslateY;\r
uniform int uHasUvIn;       // 1 if a UV map is connected, 0 = use screen UV\r
\r
void main() {\r
  // Read base UV: from upstream UV map or screen coordinates\r
  vec2 uv = uHasUvIn == 1 ? texture2D(uUvIn, vUv).rg : vUv;\r
\r
  // Translate\r
  uv -= vec2(uTranslateX, uTranslateY);\r
\r
  // Center for rotation/scale\r
  uv -= 0.5;\r
\r
  // Scale\r
  uv /= vec2(max(uScaleX, 0.001), max(uScaleY, 0.001));\r
\r
  // Rotate\r
  float rad = uRotation * 3.14159265 / 180.0;\r
  float c = cos(rad);\r
  float s = sin(rad);\r
  uv = mat2(c, -s, s, c) * uv;\r
\r
  // Uncenter\r
  uv += 0.5;\r
\r
  // Output new UV map as RG\r
  gl_FragColor = vec4(uv.x, uv.y, 0.0, 1.0);\r
}\r
`,MV=`// UV Repeat — tile + mirror UV coordinates. Outputs a UV map (RG channels).\r
// Reads an upstream UV map (uUvIn) or falls back to screen UVs.\r
precision highp float;\r
varying vec2 vUv;\r
uniform sampler2D uUvIn;\r
uniform float uRepeatX;\r
uniform float uRepeatY;\r
uniform float uMirror;\r
uniform float uOffsetX;\r
uniform float uOffsetY;\r
uniform int uHasUvIn;   // 1 if UV map is connected, 0 = use screen UV\r
\r
void main() {\r
  vec2 base = uHasUvIn == 1 ? texture2D(uUvIn, vUv).rg : vUv;\r
  vec2 uv = base * vec2(uRepeatX, uRepeatY) + vec2(uOffsetX, uOffsetY);\r
\r
  if (uMirror > 0.5) {\r
    vec2 cell = floor(uv);\r
    uv = fract(uv);\r
    if (mod(cell.x, 2.0) >= 1.0) uv.x = 1.0 - uv.x;\r
    if (mod(cell.y, 2.0) >= 1.0) uv.y = 1.0 - uv.y;\r
  } else {\r
    uv = fract(uv);\r
  }\r
\r
  // Output UV map as RG\r
  gl_FragColor = vec4(uv.x, uv.y, 0.0, 1.0);\r
}\r
`,wV=`// UV Glitch — random block displacement of UV coordinates. Outputs a UV map (RG channels).\r
// Reads an upstream UV map (uUvIn) or falls back to screen UVs.\r
precision highp float;\r
varying vec2 vUv;\r
uniform sampler2D uUvIn;\r
uniform float uBlockSize;\r
uniform float uIntensity;\r
uniform float uSeed;\r
uniform int uDirection; // 0=horizontal, 1=vertical, 2=both\r
uniform int uHasUvIn;   // 1 if UV map is connected, 0 = use screen UV\r
\r
float hash(vec2 p) {\r
  return fract(sin(dot(p + uSeed, vec2(127.1, 311.7))) * 43758.5453);\r
}\r
\r
void main() {\r
  vec2 uv = uHasUvIn == 1 ? texture2D(uUvIn, vUv).rg : vUv;\r
  float bs = max(uBlockSize, 1.0) / 256.0;\r
\r
  vec2 block = floor(uv / bs);\r
  float h = hash(block);\r
\r
  if (h > 1.0 - uIntensity) {\r
    float offset = (hash(block + 0.5) - 0.5) * uIntensity * 0.5;\r
    if (uDirection == 0) {\r
      uv.x += offset;\r
    } else if (uDirection == 1) {\r
      uv.y += offset;\r
    } else {\r
      uv.x += offset;\r
      uv.y += (hash(block + 1.0) - 0.5) * uIntensity * 0.5;\r
    }\r
  }\r
\r
  uv = fract(uv);\r
  // Output UV map as RG\r
  gl_FragColor = vec4(uv.x, uv.y, 0.0, 1.0);\r
}\r
`,EV=`// UV Polar — cartesian ↔ polar coordinate conversion on a UV map.\r
// Outputs a new UV map (RG channels).\r
precision highp float;\r
varying vec2 vUv;\r
uniform sampler2D uUvIn;\r
uniform int uMode;       // 0=toPolar, 1=fromPolar\r
uniform float uCenterX;\r
uniform float uCenterY;\r
uniform int uHasUvIn;   // 1 if UV map is connected, 0 = use screen UV\r
\r
#define PI 3.14159265359\r
#define TAU 6.28318530718\r
\r
void main() {\r
  // Read base UV: from upstream UV map or screen coordinates\r
  vec2 base = uHasUvIn == 1 ? texture2D(uUvIn, vUv).rg : vUv;\r
  vec2 center = vec2(uCenterX, uCenterY);\r
  vec2 uv;\r
\r
  if (uMode == 0) {\r
    // Cartesian to Polar\r
    vec2 delta = base - center;\r
    float radius = length(delta) * 2.0;\r
    float angle = atan(delta.y, delta.x);\r
    uv = vec2(angle / TAU + 0.5, radius);\r
  } else {\r
    // Polar to Cartesian\r
    float angle = (base.x - 0.5) * TAU;\r
    float radius = base.y * 0.5;\r
    uv = center + vec2(cos(angle), sin(angle)) * radius;\r
  }\r
\r
  // Output new UV map as RG\r
  gl_FragColor = vec4(uv.x, uv.y, 0.0, 1.0);\r
}\r
`,TV=`varying vec2 vUv;\r
uniform sampler2D uIn;\r
uniform vec2 uResolution;\r
uniform float uFeed;\r
uniform float uKill;\r
uniform float udA;\r
uniform float udB;\r
uniform float uDt;\r
\r
void main() {\r
    vec2 uv = vUv;\r
    vec2 pixel = 1.0 / uResolution;\r
    \r
    vec4 c = texture2D(uIn, uv);\r
    float A = c.r; // Use R for A\r
    float B = c.g; // Use G for B\r
    \r
    // 3x3 Laplacian\r
    float lapA = 0.0;\r
    float lapB = 0.0;\r
    \r
    vec2 offsets[9];\r
    offsets[0] = vec2(-1.0, -1.0); offsets[1] = vec2(0.0, -1.0); offsets[2] = vec2(1.0, -1.0);\r
    offsets[3] = vec2(-1.0,  0.0); offsets[4] = vec2(0.0,  0.0); offsets[5] = vec2(1.0,  0.0);\r
    offsets[6] = vec2(-1.0,  1.0); offsets[7] = vec2(0.0,  1.0); offsets[8] = vec2(1.0,  1.0);\r
    \r
    float weights[9];\r
    weights[0] = 0.05; weights[1] = 0.2; weights[2] = 0.05;\r
    weights[3] = 0.2;  weights[4] = -1.0; weights[5] = 0.2;\r
    weights[6] = 0.05; weights[7] = 0.2; weights[8] = 0.05;\r
    \r
    for (int i = 0; i < 9; i++) {\r
        vec4 n = texture2D(uIn, uv + offsets[i] * pixel);\r
        lapA += n.r * weights[i];\r
        lapB += n.g * weights[i];\r
    }\r
    \r
    // Reaction-Diffusion formula\r
    float reaction = A * B * B;\r
    float nextA = A + (udA * lapA - reaction + uFeed * (1.0 - A)) * uDt;\r
    float nextB = B + (udB * lapB + reaction - (uKill + uFeed) * B) * uDt;\r
    \r
    nextA = clamp(nextA, 0.0, 1.0);\r
    nextB = clamp(nextB, 0.0, 1.0);\r
    \r
    // Render out as grayscale or custom maps. B is the 'spots' so we invert it for typical RD look.\r
    // We store A in Red, B in Green, and the visual output in Blue so it's somewhat visible.\r
    float visual = clamp(1.0 - nextB * 2.0, 0.0, 1.0);\r
    gl_FragColor = vec4(nextA, nextB, visual, 1.0);\r
}\r
`,CV=`varying vec2 vUv;\r
uniform sampler2D uIn;\r
uniform float uThreshold;\r
uniform float uNoiseAmount;\r
uniform float uContrast;\r
uniform vec2 uResolution;\r
\r
float rand(vec2 co){\r
    return fract(sin(dot(co.xy ,vec2(12.9898,78.233))) * 43758.5453);\r
}\r
\r
void main() {\r
    vec2 uv = vUv;\r
    vec4 color = texture2D(uIn, uv);\r
    \r
    // Grayscale\r
    float lum = dot(color.rgb, vec3(0.299, 0.587, 0.114));\r
    \r
    // Noise\r
    float n = rand(uv * 10.0 + fract(uThreshold)) * uNoiseAmount - (uNoiseAmount / 2.0);\r
    lum += n;\r
    \r
    // Contrast\r
    lum = (lum - 0.5) * uContrast + 0.5;\r
    \r
    // Threshold (Photocopy harshness)\r
    float xerox = step(uThreshold, lum);\r
    \r
    gl_FragColor = vec4(vec3(xerox), color.a);\r
}\r
`,AV=`varying vec2 vUv;\r
uniform sampler2D uIn;\r
uniform vec2 uResolution;\r
uniform float uCurvature;\r
uniform float uScanLines;\r
uniform float uRgbShift;\r
uniform float uBrightness;\r
\r
vec2 curve(vec2 uv) {\r
    uv = (uv - 0.5) * 2.0;\r
    uv *= 1.1;	\r
    uv.x *= 1.0 + pow((abs(uv.y) / 5.0), 2.0);\r
    uv.y *= 1.0 + pow((abs(uv.x) / 4.0), 2.0);\r
    uv  = (uv / 2.0) + 0.5;\r
    uv =  uv *0.92 + 0.04;\r
    return uv;\r
}\r
\r
void main() {\r
    vec2 q = vUv;\r
    vec2 uv = q;\r
    \r
    if (uCurvature > 0.0) {\r
        uv = mix(q, curve(q), uCurvature);\r
    }\r
    \r
    float x_shift = uRgbShift * 0.01;\r
    \r
    vec3 col = vec3(0.0);\r
    if (uv.x < 0.0 || uv.x > 1.0 || uv.y < 0.0 || uv.y > 1.0) {\r
        gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);\r
        return;\r
    }\r
    \r
    col.r = texture2D(uIn, vec2(uv.x + x_shift, uv.y)).r;\r
    col.g = texture2D(uIn, uv).g;\r
    col.b = texture2D(uIn, vec2(uv.x - x_shift, uv.y)).b;\r
    \r
    // Scanlines\r
    if (uScanLines > 0.0) {\r
        float s = sin(uv.y * uResolution.y * uScanLines * 3.1415);\r
        col *= 1.0 - (0.15 * s);\r
    }\r
    \r
    col *= uBrightness;\r
    \r
    // Vignette\r
    float vig = (0.0 + 1.0*16.0*uv.x*uv.y*(1.0-uv.x)*(1.0-uv.y));\r
    col *= pow(vig, 0.3);\r
    \r
    gl_FragColor = vec4(col, 1.0);\r
}\r
`,RV=`varying vec2 vUv;\r
uniform sampler2D uIn;\r
uniform vec2 uResolution;\r
uniform float uAngle;\r
uniform float uStrength;\r
uniform int uSamples;\r
\r
void main() {\r
    vec2 uv = vUv;\r
    vec2 dir = vec2(cos(uAngle), sin(uAngle)) * uStrength * 0.01;\r
    \r
    vec4 color = vec4(0.0);\r
    int validSamples = 0;\r
    \r
    for (int i = 0; i < 50; i++) {\r
        if (i >= uSamples) break;\r
        \r
        float t = float(i) / float(uSamples);\r
        vec2 offset = dir * (t - 0.5); // Center the blur\r
        vec2 sampleUV = uv + offset;\r
        \r
        // Clamp to edge to avoid wrap around artifacts\r
        if (sampleUV.x >= 0.0 && sampleUV.x <= 1.0 && sampleUV.y >= 0.0 && sampleUV.y <= 1.0) {\r
            color += texture2D(uIn, sampleUV);\r
            validSamples++;\r
        }\r
    }\r
    \r
    if (validSamples > 0) {\r
        color /= float(validSamples);\r
    } else {\r
        color = texture2D(uIn, uv);\r
    }\r
    \r
    gl_FragColor = color;\r
}\r
`,IV=`varying vec2 vUv;\r
uniform sampler2D uIn;\r
uniform vec2 uResolution;\r
uniform float uColors;\r
uniform float uSpread;\r
\r
const mat4 bayerMatrix = mat4(\r
    0.0/16.0,  8.0/16.0,  2.0/16.0, 10.0/16.0,\r
    12.0/16.0,  4.0/16.0, 14.0/16.0,  6.0/16.0,\r
    3.0/16.0, 11.0/16.0,  1.0/16.0,  9.0/16.0,\r
    15.0/16.0,  7.0/16.0, 13.0/16.0,  5.0/16.0\r
);\r
\r
void main() {\r
    vec2 uv = vUv;\r
    vec4 color = texture2D(uIn, uv);\r
    \r
    // Convert to grayscale for simplicity or apply to RGB\r
    int x = int(mod(gl_FragCoord.x, 4.0));\r
    int y = int(mod(gl_FragCoord.y, 4.0));\r
    \r
    float bayerValue = 0.0;\r
    if(x==0&&y==0) bayerValue=bayerMatrix[0][0]; else if(x==0&&y==1) bayerValue=bayerMatrix[0][1]; else if(x==0&&y==2) bayerValue=bayerMatrix[0][2]; else if(x==0&&y==3) bayerValue=bayerMatrix[0][3];\r
    else if(x==1&&y==0) bayerValue=bayerMatrix[1][0]; else if(x==1&&y==1) bayerValue=bayerMatrix[1][1]; else if(x==1&&y==2) bayerValue=bayerMatrix[1][2]; else if(x==1&&y==3) bayerValue=bayerMatrix[1][3];\r
    else if(x==2&&y==0) bayerValue=bayerMatrix[2][0]; else if(x==2&&y==1) bayerValue=bayerMatrix[2][1]; else if(x==2&&y==2) bayerValue=bayerMatrix[2][2]; else if(x==2&&y==3) bayerValue=bayerMatrix[2][3];\r
    else if(x==3&&y==0) bayerValue=bayerMatrix[3][0]; else if(x==3&&y==1) bayerValue=bayerMatrix[3][1]; else if(x==3&&y==2) bayerValue=bayerMatrix[3][2]; else if(x==3&&y==3) bayerValue=bayerMatrix[3][3];\r
    \r
    // Map bayer to spread\r
    bayerValue = (bayerValue - 0.5) * uSpread;\r
    \r
    vec3 c = color.rgb + bayerValue;\r
    \r
    // Posterize\r
    c = floor(c * uColors + 0.5) / uColors;\r
    \r
    gl_FragColor = vec4(c, color.a);\r
}\r
`,PV=`// Liquid Deform — swirling polar texture deformation\r
// Adapted from Inigo Quilez (iq/2013)\r
precision highp float;\r
varying vec2 vUv;\r
uniform sampler2D uIn;\r
uniform vec2 uResolution;\r
uniform float uTime;\r
\r
uniform float uScale;       \r
uniform float uIntensity;   \r
uniform float uSpeed;       \r
uniform float uSamples;     \r
uniform float uGammaLift;   \r
\r
vec3 deform(in vec2 p, in float t) {\r
  t *= 2.0;\r
\r
  p += 0.5 * uIntensity * sin(t * vec2(1.1, 1.3) + vec2(0.0, 0.5));\r
\r
  float a = atan(p.y, p.x);\r
  float r = length(p);\r
  float s = r * (1.0 + 0.5 * cos(t * 1.7));\r
\r
  vec2 uv = 0.1 * t\r
          + 0.05 * p.yx * uScale\r
          + 0.05 * vec2(cos(t + a * 2.0),\r
                        sin(t + a * 2.0)) / max(s, 0.001);\r
\r
  uv = fract(uv * 0.5 + 0.5); // wrap safely into [0,1]\r
\r
  return texture2D(uIn, uv).rgb;\r
}\r
\r
void main() {\r
  vec2 q = vUv;\r
  vec2 p = -1.0 + 2.0 * q;\r
\r
  // Correct for non-square viewports\r
  p.x *= uResolution.x / uResolution.y;\r
\r
  vec3 col = vec3(0.0);\r
  float numSamples = clamp(uSamples, 1.0, 20.0);\r
\r
  // We must use a constant up to 20 for loop condition in WebGL 1\r
  for (int i = 0; i < 20; i++) {\r
    if (float(i) >= numSamples) break;\r
    float t = uTime * uSpeed + float(i) * 0.0035;\r
    col += deform(p, t);\r
  }\r
  \r
  col /= numSamples;\r
\r
  // Gamma curve — original used vec3(0.6, 0.7, 0.8) per channel\r
  vec3 gamma = vec3(0.6, 0.7, 0.8) / max(uGammaLift, 0.01);\r
  col = pow(max(col, vec3(0.0)), gamma);\r
\r
  gl_FragColor = vec4(col, 1.0);\r
}\r
`,NV=`// ASCII Art — bitmap glyph post-processing effect\r
precision highp float;\r
varying vec2 vUv;\r
uniform sampler2D uIn;\r
uniform sampler2D uTexture;\r
uniform bool uTextureConnected;\r
uniform vec2 uResolution;\r
uniform float uTime;\r
\r
// --- ASCII Controls ---\r
// Cell size in pixels (resolution of the ASCII grid)\r
uniform float uCellSize;       // e.g. 8.0 – 32.0\r
// Brightness threshold shift: negative = more chars, positive = fewer\r
uniform float uBrightness;     // e.g. -0.3 to 0.3\r
// Color mode: 0 = original color tinted, 1 = single fg/bg color\r
uniform float uColorMode;\r
// Foreground color (used when uColorMode == 1.0)\r
uniform vec3 uFgColor;         // e.g. vec3(0.0, 1.0, 0.4) — green terminal\r
// Background color\r
uniform vec3 uBgColor;         // e.g. vec3(0.0)\r
// Intensity of the ASCII effect vs original (0 = passthrough, 1 = full ASCII)\r
uniform float uIntensity;\r
\r
// ─── 5×5 Bitmap Character Renderer ─────────────────────────────────────────\r
\r
float renderChar(float n, vec2 p) {\r
  p = floor(p * vec2(4.0, -4.0) + 2.5);\r
  if (clamp(p.x, 0.0, 4.0) == p.x && clamp(p.y, 0.0, 4.0) == p.y) {\r
    float bit = p.x + 5.0 * p.y;\r
    float shifted = floor(n / pow(2.0, bit));\r
    if (mod(shifted, 2.0) >= 1.0) return 1.0;\r
  }\r
  return 0.0;\r
}\r
\r
void main() {\r
  vec2 fragCoord = vUv * uResolution;\r
  float cell = max(uCellSize, 2.0);\r
\r
  vec2 cellOriginUV = floor(fragCoord / cell) * cell / uResolution;\r
  vec4 srcColor = vec4(0.0);\r
\r
  // 2×2 average sample\r
  for (int i = 0; i < 2; i++) {\r
    for (int j = 0; j < 2; j++) {\r
      float dx = 0.25 + float(j) * 0.5;\r
      float dy = 0.25 + float(i) * 0.5;\r
      vec2 sampleUV = cellOriginUV + (vec2(dx, dy) * cell) / uResolution;\r
      sampleUV = clamp(sampleUV, 0.0, 1.0);\r
      srcColor += texture2D(uIn, sampleUV);\r
    }\r
  }\r
  srcColor /= 4.0;\r
\r
  if (uTextureConnected) {\r
    vec4 texSample = texture2D(uTexture, cellOriginUV);\r
    srcColor = mix(srcColor, texSample, 0.5);\r
  }\r
\r
  float luma = dot(srcColor.rgb, vec3(0.299, 0.587, 0.114));\r
  luma = clamp(luma + uBrightness, 0.0, 1.0);\r
\r
  // Using floats for bitmasks to avoid WebGL1 int precision issues\r
  float charBits = 0.0;\r
  if (luma > 0.11) charBits = 4096.0;      // '.'\r
  if (luma > 0.22) charBits = 65600.0;     // ':'\r
  if (luma > 0.33) charBits = 332772.0;    // '*'\r
  if (luma > 0.44) charBits = 15255086.0;  // 'o'\r
  if (luma > 0.55) charBits = 23385164.0;  // '&'\r
  if (luma > 0.66) charBits = 15252014.0;  // '8'\r
  if (luma > 0.77) charBits = 13199452.0;  // '@'\r
  if (luma > 0.88) charBits = 11512810.0;  // '#'\r
\r
  vec2 subCell = mod(fragCoord / cell, 1.0) * 2.0 - 1.0;\r
  float glyph = renderChar(charBits, subCell);\r
\r
  vec3 asciiColor;\r
  if (uColorMode < 0.5) {\r
    asciiColor = mix(uBgColor, srcColor.rgb, glyph);\r
  } else {\r
    asciiColor = mix(uBgColor, uFgColor * luma, glyph);\r
  }\r
\r
  vec3 finalColor = mix(srcColor.rgb, asciiColor, uIntensity);\r
  gl_FragColor = vec4(finalColor, srcColor.a);\r
}\r
`,DV=`// ASCII Art v2 — bitmap glyphs with palette color matching\r
precision highp float;\r
varying vec2 vUv;\r
uniform sampler2D uIn;\r
uniform sampler2D uTexture;\r
uniform bool uTextureConnected;\r
uniform vec2 uResolution;\r
uniform float uTime;\r
\r
uniform float uCellSize;        // Grid resolution, e.g. 8.0–32.0\r
uniform float uBrightness;      // Luminance shift, -0.5 to 0.5\r
uniform float uColorMode;       // 0 = palette fg/bg, 1 = original color, 2 = flat fg/bg\r
uniform vec3 uFgColor;          // Flat foreground (used when uColorMode == 2.0)\r
uniform vec3 uBgColor;          // Background color (all modes)\r
uniform float uExtendedPalette; // 0 = 10 chars, 1 = 18 chars (denser set)\r
uniform float uIntensity;       // Blend ASCII vs original\r
\r
// ── 5×5 Bitmap glyph renderer ───────────────────────────────────────────────\r
float renderChar(float n, vec2 p) {\r
  p = floor(p * vec2(4.0, -4.0) + 2.5);\r
  if (clamp(p.x, 0.0, 4.0) == p.x && clamp(p.y, 0.0, 4.0) == p.y) {\r
    float bit = p.x + 5.0 * p.y;\r
    float shifted = floor(n / pow(2.0, bit));\r
    if (mod(shifted, 2.0) >= 1.0) return 1.0;\r
  }\r
  return 0.0;\r
}\r
\r
// ── Char palette selection ───────────────────────────────────────────────────\r
// Basic 10:  ' ' . : - = + * # % @\r
// Extended 18 adds rounder, denser mid-range glyphs\r
float selectChar(float luma, float extended) {\r
  if (extended < 0.5) {\r
    // Basic 10-level set\r
    if (luma < 0.05) return 0.0;\r
    if (luma < 0.15) return 4096.0;        // '.'\r
    if (luma < 0.25) return 65600.0;       // ':'\r
    if (luma < 0.35) return 1182764.0;     // '-'\r
    if (luma < 0.45) return 1193046.0;     // '='\r
    if (luma < 0.55) return 332772.0;      // '+'\r
    if (luma < 0.65) return 332772.0;      // '*'\r
    if (luma < 0.75) return 11512810.0;    // '#'\r
    if (luma < 0.88) return 23385164.0;    // '%'\r
    return 13199452.0;                     // '@'\r
  } else {\r
    // Extended 18-level set — denser mid-range from ShaderToy palette\r
    if (luma < 0.03) return 0.0;           // ' '\r
    if (luma < 0.09) return 4096.0;        // '.'\r
    if (luma < 0.15) return 2184.0;        // '\\''\r
    if (luma < 0.21) return 65600.0;       // ':'\r
    if (luma < 0.27) return 1182764.0;     // '-'\r
    if (luma < 0.33) return 4329476.0;     // '~'\r
    if (luma < 0.39) return 332772.0;      // '+'\r
    if (luma < 0.45) return 1193046.0;     // '='\r
    if (luma < 0.51) return 9082912.0;     // 'o'\r
    if (luma < 0.57) return 15255086.0;    // 'c'  (round, mid-dense)\r
    if (luma < 0.63) return 11512810.0;    // 'x'\r
    if (luma < 0.69) return 23385164.0;    // 'X'\r
    if (luma < 0.75) return 15252014.0;    // '8'\r
    if (luma < 0.80) return 11512810.0;    // '#'\r
    if (luma < 0.85) return 23385164.0;    // '%'\r
    if (luma < 0.90) return 13199452.0;    // '@'\r
    if (luma < 0.95) return 15252014.0;    // '$'\r
    return 33080895.0;                     // '█' (full block)\r
  }\r
}\r
\r
// ── 16-color CGA palette ─────────────────────────────────────────────────────\r
vec3 cgaColor(int i) {\r
  if (i == 0)  return vec3(0.0,   0.0,   0.0);\r
  if (i == 1)  return vec3(0.667, 0.0,   0.0);\r
  if (i == 2)  return vec3(0.0,   0.667, 0.0);\r
  if (i == 3)  return vec3(0.667, 0.333, 0.0);\r
  if (i == 4)  return vec3(0.0,   0.0,   0.667);\r
  if (i == 5)  return vec3(0.667, 0.0,   0.667);\r
  if (i == 6)  return vec3(0.0,   0.667, 0.667);\r
  if (i == 7)  return vec3(0.667, 0.667, 0.667);\r
  if (i == 8)  return vec3(0.333, 0.333, 0.333);\r
  if (i == 9)  return vec3(1.0,   0.333, 0.333);\r
  if (i == 10) return vec3(0.333, 1.0,   0.333);\r
  if (i == 11) return vec3(1.0,   1.0,   0.333);\r
  if (i == 12) return vec3(0.333, 0.333, 1.0);\r
  if (i == 13) return vec3(1.0,   0.333, 1.0);\r
  if (i == 14) return vec3(0.333, 1.0,   1.0);\r
  return vec3(1.0, 1.0, 1.0);\r
}\r
\r
int nearestCGA(vec3 color) {\r
  float best = 9999.0;\r
  int idx = 0;\r
  for (int i = 0; i < 16; i++) {\r
    float d = distance(color, cgaColor(i));\r
    if (d < best) { best = d; idx = i; }\r
  }\r
  return idx;\r
}\r
\r
// Find the second-nearest CGA color (used as background)\r
int secondCGA(vec3 color, int foreIdx) {\r
  float best = 9999.0;\r
  int idx = 0;\r
  vec3 fg = cgaColor(foreIdx);\r
  for (int i = 0; i < 16; i++) {\r
    if (i == foreIdx) continue;\r
    // Bias toward colors that are darker than fg (more readable bg)\r
    float d = distance(color, cgaColor(i)) + max(0.0, distance(cgaColor(i), vec3(0.0)) - distance(fg, vec3(0.0))) * 0.5;\r
    if (d < best) { best = d; idx = i; }\r
  }\r
  return idx;\r
}\r
\r
// ── Main ─────────────────────────────────────────────────────────────────────\r
void main() {\r
  vec2 fragCoord = vUv * uResolution;\r
  float cell = max(uCellSize, 2.0);\r
\r
  vec2 cellOriginUV = floor(fragCoord / cell) * cell / uResolution;\r
  vec4 srcColor = vec4(0.0);\r
\r
  // 2×2 average sample per cell\r
  for (int i = 0; i < 2; i++) {\r
    for (int j = 0; j < 2; j++) {\r
      float dx = 0.25 + float(j) * 0.5;\r
      float dy = 0.25 + float(i) * 0.5;\r
      vec2 sampleUV = cellOriginUV + (vec2(dx, dy) * cell) / uResolution;\r
      srcColor += texture2D(uIn, clamp(sampleUV, 0.0, 1.0));\r
    }\r
  }\r
  srcColor /= 4.0;\r
\r
  if (uTextureConnected) {\r
    srcColor = mix(srcColor, texture2D(uTexture, cellOriginUV), 0.5);\r
  }\r
\r
  float luma = clamp(dot(srcColor.rgb, vec3(0.299, 0.587, 0.114)) + uBrightness, 0.0, 1.0);\r
\r
  float charBits = selectChar(luma, uExtendedPalette);\r
  vec2 subCell = mod(fragCoord / cell, 1.0) * 2.0 - 1.0;\r
  float glyph = renderChar(charBits, subCell);\r
\r
  // ── Colorize ──────────────────────────────────────────────────────────────\r
  vec3 asciiColor;\r
  if (uColorMode < 0.5) {\r
    // Palette mode: snap fg and bg to nearest CGA colors\r
    int fg = nearestCGA(srcColor.rgb);\r
    int bg = secondCGA(srcColor.rgb, fg);\r
    asciiColor = mix(cgaColor(fg), cgaColor(bg), glyph);\r
  } else if (uColorMode < 1.5) {\r
    // Original color mode: source color on dark background\r
    asciiColor = mix(uBgColor, srcColor.rgb, glyph);\r
  } else {\r
    // Flat mode: uniform fg color, definable bg\r
    asciiColor = mix(uBgColor, uFgColor * luma, glyph);\r
  }\r
\r
  gl_FragColor = vec4(mix(srcColor.rgb, asciiColor, uIntensity), srcColor.a);\r
}\r
`,LV=`// Fisheye / Antifisheye — barrel and pincushion lens distortion\r
// Inspired by stackoverflow.com/questions/6030814 (iq-style port)\r
precision highp float;\r
\r
varying vec2 vUv;\r
\r
uniform sampler2D uIn;\r
uniform vec2 uResolution;\r
uniform float uTime;\r
\r
uniform float uPower;       // Distortion amount: >0 = fisheye, <0 = antifisheye, 0 = passthrough\r
uniform float uCenterX;     // Lens center X offset (default 0.5)\r
uniform float uCenterY;     // Lens center Y offset (default 0.5)\r
uniform float uZoom;        // Post-distortion zoom (default 1.0)\r
\r
void main() {\r
  float prop = uResolution.x / uResolution.y;\r
\r
  // Normalize with aspect cheat (assume square, correct for prop later)\r
  vec2 p = vUv;\r
  p.x *= uResolution.x / uResolution.x; // identity — kept for clarity\r
  p = vec2(p.x, p.y / prop);\r
\r
  vec2 m = vec2(clamp(uCenterX, 0.1, 0.9),\r
                clamp(uCenterY, 0.1, 0.9) / prop);\r
\r
  vec2 d = p - m;\r
  float r = sqrt(dot(d, d));\r
\r
  float power = uPower;\r
\r
  float bind;\r
  if (power > 0.0) {\r
    bind = sqrt(dot(m, m));\r
  } else {\r
    if (prop < 1.0) bind = m.x;\r
    else bind = m.y;\r
  }\r
\r
  vec2 uv;\r
  if (power > 0.001) {\r
    // Fisheye (barrel distortion)\r
    uv = m + normalize(d) * tan(r * power) * bind / tan(bind * power);\r
  } else if (power < -0.001) {\r
    // Antifisheye (pincushion distortion)\r
    uv = m + normalize(d) * atan(r * -power * 10.0) * bind / atan(-power * bind * 10.0);\r
  } else {\r
    // Passthrough\r
    uv = p;\r
  }\r
\r
  // Apply zoom around center\r
  uv = m + (uv - m) / max(uZoom, 0.01);\r
\r
  // Reconstruct proper UV: undo aspect cheat, re-apply for sampling\r
  vec2 sampleUV = vec2(uv.x, -uv.y * prop);\r
\r
  // Clamp to prevent edge bleed\r
  sampleUV = clamp(sampleUV, 0.0, 1.0);\r
\r
  vec3 col = texture2D(uIn, sampleUV).rgb;\r
\r
  gl_FragColor = vec4(col, 1.0);\r
}\r
`,UV=`// Smooth Noise Contours — antialiased simplex noise contour lines\r
// Original by Shane / ShaderToy, adapted for Image Mangler\r
precision highp float;\r
\r
varying vec2 vUv;\r
\r
uniform sampler2D uIn;\r
uniform sampler2D uTexture;\r
uniform bool uTextureConnected;\r
uniform vec2 uResolution;\r
uniform float uTime;\r
\r
uniform float uSpeed;         // Animation speed (default 1.0)\r
uniform float uScale;         // Noise scale (default 1.0)\r
uniform float uPalNum;        // Contour band count (default 9.0, range 2–20)\r
uniform float uEdgeStrength;  // Dark edge sharpness (default 5.0)\r
uniform float uHighlight;     // Rim highlight intensity (default 10.0)\r
uniform float uHueShift;      // Global hue rotation (default -0.25)\r
uniform float uHueRadius;     // Hue shift by position radius (default 0.4)\r
uniform float uImageBlend;    // 0 = pure noise color, 1 = image-colored contours\r
uniform float uTaper;         // Oval taper falloff strength (default 1.0)\r
\r
// ── Smooth fract / floor (Ollj's formula, via Shane) ────────────────────────\r
float sFract(float x, float sm) {\r
  vec2 u = vec2(x, fwidth(x) * sm);\r
  u.x = fract(u.x);\r
  u += (1.0 - 2.0 * u) * step(u.y, u.x);\r
  return clamp(1.0 - u.x / u.y, 0.0, 1.0);\r
}\r
\r
float sFloor(float x) { return x - sFract(x, 1.0); }\r
\r
// ── Hue rotation ─────────────────────────────────────────────────────────────\r
vec3 rotHue(vec3 p, float a) {\r
  vec2 cs = sin(vec2(1.570796, 0.0) + a);\r
  mat3 hr = mat3(0.299,  0.587,  0.114,  0.299,  0.587,  0.114,  0.299,  0.587,  0.114) +\r
            mat3(0.701, -0.587, -0.114, -0.299,  0.413, -0.114, -0.300, -0.588,  0.886) * cs.x +\r
            mat3(0.168,  0.330, -0.497, -0.328,  0.035,  0.292,  1.250, -1.050, -0.203) * cs.y;\r
  return clamp(p * hr, 0.0, 1.0);\r
}\r
\r
// ── Hash ─────────────────────────────────────────────────────────────────────\r
vec3 hash33(vec3 p) {\r
  float n = sin(dot(p, vec3(7.0, 157.0, 113.0)));\r
  return fract(vec3(2097152.0, 262144.0, 32768.0) * n) * 2.0 - 1.0;\r
}\r
\r
// ── Simplex-style tetrahedral noise ──────────────────────────────────────────\r
float tetraNoise(in vec3 p) {\r
  vec3 i = floor(p + dot(p, vec3(1.0 / 3.0)));\r
  p -= i - dot(i, vec3(1.0 / 6.0));\r
  vec3 i1 = step(p.yzx, p);\r
  vec3 i2 = max(i1, 1.0 - i1.zxy);\r
  i1 = min(i1, 1.0 - i1.zxy);\r
  vec3 p1 = p - i1 + 1.0 / 6.0;\r
  vec3 p2 = p - i2 + 1.0 / 3.0;\r
  vec3 p3 = p - 0.5;\r
  vec4 v = max(0.5 - vec4(dot(p, p), dot(p1, p1), dot(p2, p2), dot(p3, p3)), 0.0);\r
  vec4 d = vec4(dot(p, hash33(i)), dot(p1, hash33(i + i1)),\r
                dot(p2, hash33(i + i2)), dot(p3, hash33(i + 1.0)));\r
  return clamp(dot(d, v * v * v * 8.0) * 1.732 + 0.5, 0.0, 1.0);\r
}\r
\r
// ── Contour function — returns vec2(palettized, raw) ─────────────────────────\r
// Packing ns (raw noise) into .y avoids a mutable global (WebGL1 unsafe)\r
vec2 func(vec2 p) {\r
  float n = tetraNoise(vec3(p.x * 4.0 * uScale, p.y * 4.0 * uScale, 0.0)\r
                       - vec3(0.0, 0.25, 0.5) * uTime * uSpeed);\r
\r
  float taper = 0.1 + dot(p, p * vec2(0.35, 1.0)) * uTaper;\r
  n = max(n - taper, 0.0) / max(1.0 - taper, 0.0001);\r
\r
  float raw = n;\r
\r
  float palNum = max(uPalNum, 2.0);\r
  float palettized = n * 0.25 + clamp(sFloor(n * (palNum - 0.001)) / (palNum - 1.0), 0.0, 1.0) * 0.75;\r
\r
  return vec2(palettized, raw);\r
}\r
\r
void main() {\r
  // WebGL 1 requires enabling OES_standard_derivatives extension to use fwidth()\r
  // Since we use fwidth in sFract, we could run into issues if the browser/device doesn't support it \r
  // It's usually supported though.\r
  \r
  vec2 u = (vUv - 0.5) * vec2(uResolution.x / uResolution.y, 1.0);\r
\r
  vec2 fv   = func(u);\r
  float f   = fv.x;\r
  float ssd = fv.y;\r
\r
  // Edge sampling\r
  vec2 e = vec2(1.5 / uResolution.y, 0.0);\r
  float fxl = func(u + e.xy).x;\r
  float fxr = func(u - e.xy).x;\r
  float fyt = func(u + e.yx).x;\r
  float fyb = func(u - e.yx).x;\r
\r
  // Base noise color\r
  vec3 noiseCol = pow(\r
    min(vec3(1.5, 1.0, 1.0) * (f * 0.7 + ssd * 0.35), 1.0),\r
    vec3(1.0, 2.0, 10.0) * 2.0\r
  ) + 0.01;\r
  noiseCol = rotHue(noiseCol, uHueShift + uHueRadius * length(u));\r
\r
  // Sample image input color (mapped to same centered UV space)\r
  vec2 imgUV = vUv;\r
  if (uTextureConnected) {\r
    imgUV = mix(imgUV, texture2D(uTexture, vUv).rg, 0.5);\r
  }\r
  vec3 imgCol = texture2D(uIn, imgUV).rgb;\r
\r
  // Blend noise color with image color using contour bands as mask\r
  vec3 col = mix(noiseCol, imgCol * (f * 0.7 + ssd * 0.35 + 0.01), uImageBlend);\r
\r
  // Dark edges\r
  col *= max(1.0 - (abs(fxl - fxr) + abs(fyt - fyb)) * uEdgeStrength, 0.0);\r
\r
  // Highlights — resample at wider spread\r
  float fxlH = func(u + e.xy * 1.5).x;\r
  float fytH = func(u + e.yx * 1.5).x;\r
  col += vec3(0.5, 0.7, 1.0) * (max(f - fytH, 0.0) + max(f - fxlH, 0.0)) * ssd * uHighlight;\r
\r
  // Gamma correction\r
  gl_FragColor = vec4(sqrt(clamp(col, 0.0, 1.0)), 1.0);\r
}\r
`,FV=`// Texture Transform Combo — generates/reads UVs, scales/rotates/translates, and samples an image.\r
// Inputs: uIn (image - optional), uUvIn (UV map from a UV chain - optional)\r
// Wrap modes: 0=clamp, 1=repeat, 2=mirror\r
precision highp float;\r
varying vec2 vUv;\r
uniform sampler2D uIn;\r
uniform sampler2D uUvIn;\r
\r
// Input Connection Flags\r
uniform bool uInConnected;\r
uniform bool uUvInConnected;\r
\r
uniform float uScaleX;\r
uniform float uScaleY;\r
uniform float uRotation;\r
uniform float uTranslateX;\r
uniform float uTranslateY;\r
uniform int uWrapMode;\r
\r
vec2 applyWrap(vec2 uv) {\r
  if (uWrapMode == 1) {\r
    return fract(uv);\r
  } else if (uWrapMode == 2) {\r
    vec2 t = fract(uv * 0.5) * 2.0;\r
    return vec2(\r
      t.x > 1.0 ? 2.0 - t.x : t.x,\r
      t.y > 1.0 ? 2.0 - t.y : t.y\r
    );\r
  }\r
  // clamp (default)\r
  return clamp(uv, 0.0, 1.0);\r
}\r
\r
void main() {\r
  // 1. Get base UVs (from screen, or upstream UV map if connected)\r
  vec2 uv = uUvInConnected ? texture2D(uUvIn, vUv).rg : vUv;\r
\r
  // 2. Apply Transform Math\r
  // Translate\r
  uv -= vec2(uTranslateX, uTranslateY);\r
\r
  // Scale (Origin based)\r
  uv -= 0.5;\r
  uv /= vec2(max(uScaleX, 0.001), max(uScaleY, 0.001));\r
\r
  // Rotate (Origin based)\r
  float angle = radians(-uRotation);\r
  float s = sin(angle);\r
  float c = cos(angle);\r
  uv = mat2(c, -s, s, c) * uv;\r
  uv += 0.5;\r
\r
  // 3. Output logic\r
  if (uInConnected) {\r
    // If an Image is connected, sample the image and output pixels\r
    uv = applyWrap(uv);\r
    gl_FragColor = texture2D(uIn, uv);\r
  } else {\r
    // If NO image is connected, output the transformed UV map as raw RG data\r
    gl_FragColor = vec4(uv.x, uv.y, 0.0, 1.0);\r
  }\r
}\r
`,OV=`
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position, 1.0);
}
`,BV={passthrough:hV,reededGlass:pV,chromaticAberration:mV,displacement:gV,levels:vV,surfaceBlur:_V,blend:yV,feedback:xV,uvGenerator:bV,uvTransform:SV,uvRepeat:MV,uvGlitch:wV,uvPolar:EV,diffusion:TV,xerox:CV,crt:AV,motionBlur:RV,dithering:IV,liquidDeform:PV,ascii:NV,asciiV2:DV,fisheye:LV,noiseContours:UV,textureTransform:FV},dv=20;class kV{constructor(){this.renderer=null,this.scene=null,this.camera=null,this.quad=null,this.fbos={},this.materials={},this.textures={},this.feedbackFBOs={},this.width=512,this.height=512,this.isInitialized=!1}init(e,n,i){this.width=n||512,this.height=i||512,this.renderer=new hA({canvas:e,alpha:!0,preserveDrawingBuffer:!0,antialias:!1}),this.renderer.setSize(this.width,this.height),this.renderer.autoClear=!1,this.camera=new Fh(-1,1,1,-1,0,1);const r=new Ua(2,2);this.scene=new JS,this.quad=new Si(r,null),this.scene.add(this.quad),this.isInitialized=!0}resize(e,n){this.width=e,this.height=n,this.renderer&&this.renderer.setSize(e,n);for(const[i,r]of Object.entries(this.fbos))r.setSize(e,n);for(const[i,r]of Object.entries(this.feedbackFBOs))r.current.setSize(e,n),r.previous.setSize(e,n)}setInputTexture(e,n){n.colorSpace=Vr,n.minFilter=Rt,n.magFilter=Rt,this.textures[e]=n}getOrCreateFBO(e){if(this.fbos[e])return this.fbos[e];if(Object.keys(this.fbos).length>=dv)return console.warn(`Max FBO count (${dv}) reached. Cannot create FBO for node ${e}`),null;const n=new Mn(this.width,this.height,{minFilter:Rt,magFilter:Rt,format:bn,type:yn,colorSpace:Vr});return this.fbos[e]=n,n}getOrCreateFeedbackFBOs(e){if(this.feedbackFBOs[e])return this.feedbackFBOs[e];const n={minFilter:Rt,magFilter:Rt,format:bn,type:yn};return this.feedbackFBOs[e]={current:new Mn(this.width,this.height,n),previous:new Mn(this.width,this.height,n)},this.feedbackFBOs[e]}getOrCreateMaterial(e,n,i){let r=BV[n];if(!r)return this.getOrCreateMaterial(e,"passthrough",i);if(!new Set(["passthrough","feedback","uvTransform","uvPolar","uvRepeat","uvGlitch","uvGenerator","textureSampler","textureTransform"]).has(n)){const l=r.includes("uniform sampler2D uIn;"),u=r.includes("uniform sampler2D uTexture;");if(l||u){const c=l?"uIn":"uTexture";r=r.replace("void main()",`uniform float uBlendAmount;
void main()`),r=r.replace(/gl_FragColor\s*=\s*([^;]+);([^;]*)$/,`vec4 effectColor = $1;
  vec4 originalColor = texture2D(${c}, vUv);
  gl_FragColor = mix(originalColor, effectColor, uBlendAmount);$2`)}}if(this.materials[e]&&this.materials[e]._shaderKey===n){const l=this.materials[e];let u=!1;for(const[c,f]of Object.entries(i))l.uniforms[c]?l.uniforms[c].value=f:(l.uniforms[c]={value:f},u=!0);return u&&(l.needsUpdate=!0),l}this.materials[e]&&this.materials[e].dispose();const s={};for(const[l,u]of Object.entries(i))s[l]={value:u};const a=new Qn({vertexShader:OV,fragmentShader:r,uniforms:s,depthTest:!1,depthWrite:!1});return a._shaderKey=n,this.materials[e]=a,a}renderNode(e,n,i){this.quad.material=n,i?this.renderer.setRenderTarget(i):this.renderer.setRenderTarget(null),this.renderer.clear(),this.renderer.render(this.scene,this.camera)}removeNodeResources(e){this.fbos[e]&&(this.fbos[e].dispose(),delete this.fbos[e]),this.materials[e]&&(this.materials[e].dispose(),delete this.materials[e]),this.textures[e]&&(this.textures[e].dispose(),delete this.textures[e]),this.feedbackFBOs[e]&&(this.feedbackFBOs[e].current.dispose(),this.feedbackFBOs[e].previous.dispose(),delete this.feedbackFBOs[e])}execute(e,n,i,r,o,s,a){if(!this.isInitialized||!this.renderer)return;const l={};for(const h of n)l[h.id]=h;const u={};for(const h of i)u[h.target]||(u[h.target]=[]),u[h.target].push({sourceNodeId:h.source,sourceHandle:h.sourceHandle,targetHandle:h.targetHandle});let c=null;const f={};for(const h of e){const m=l[h];if(!m)continue;const v=$t(m.type);if(!v)continue;const g=r[h]||{};if(m.type==="imageInput"||m.type==="imageOutput"||m.type==="pixelSort")continue;if(g._bypass){const b=u[h]||[];for(const P of b){const M=l[P.sourceNodeId];if(!M)continue;let w=null;if(M.type==="imageInput"?w=this.textures[P.sourceNodeId]||null:this.fbos[P.sourceNodeId]&&(w=this.fbos[P.sourceNodeId].texture),w){const W=this.getOrCreateFBO(h);if(W){const E=this.getOrCreateMaterial(h,"passthrough",{uTexture:w});this.renderNode(h,E,W),c=W}break}}f[h]=0;continue}const p=u[h]||[],y={uTime:a,uResolution:new Tt(this.width,this.height)};for(const b of v.inputs)if(b.type==="image"){const P="u"+b.id.charAt(0).toUpperCase()+b.id.slice(1);y[P+"Connected"]=!1,y[P]=null}let S=!1;for(const b of p){const P=l[b.sourceNodeId];if(!P||!$t(P.type))continue;let w=null;if(P.type==="imageInput"||P.type==="uiImageSlot"||P.type==="webcamInput"?w=this.textures[b.sourceNodeId]||null:this.fbos[b.sourceNodeId]&&(w=this.fbos[b.sourceNodeId].texture),w&&(S=!0,v.inputs.find(E=>E.id===b.targetHandle))){const E="u"+b.targetHandle.charAt(0).toUpperCase()+b.targetHandle.slice(1);y[E]=w,y[E+"Connected"]=!0}if(o[b.sourceNodeId]){const W=o[b.sourceNodeId][b.sourceHandle];if(W!==void 0){const E=v.inputs.find(A=>A.id===b.targetHandle),k=!E&&v.params[b.targetHandle];(E||k)&&(g[b.targetHandle]=W)}}}const _=!!v.isUvNode;if(!S&&!_&&v.inputs.some(b=>b.type==="image"))continue;if(_){const b=p.find(M=>M.targetHandle==="uvIn"),P=b&&this.fbos[b.sourceNodeId]?.texture;y.uUvIn=P||null,y.uHasUvIn=P?1:0}for(const[b,P]of Object.entries(g)){const M=v.params[b];if(!M)continue;const w="u"+b.charAt(0).toUpperCase()+b.slice(1);if(M.type==="float"||M.type==="int")y[w]=Number(P);else if(M.type==="bool")y[w]=P?1:0;else if(M.type==="select"){const W=M.options||[];y[w]=W.indexOf(P)}else M.type==="color"&&(y[w]=new Et(P))}if(m.type==="feedbackLoop"){const b=this.getOrCreateFeedbackFBOs(h);y.uPreviousFrame=b.previous.texture,y.uDecay=g.decay??.9,y.uBlendMode=["normal","add","multiply"].indexOf(g.blendMode??"normal");const P=this.getOrCreateMaterial(h,"feedback",y),M=Math.min(g.iterations??1,100);for(let w=0;w<M;w++){this.renderNode(h,P,b.current);const W=b.previous;b.previous=b.current,b.current=W,P.uniforms.uPreviousFrame.value=b.previous.texture}this.fbos[h]=b.previous,c=b.previous;continue}const R=v.shaderKey;if(!R)continue;const N=this.getOrCreateFBO(h);if(!N)continue;const F=performance.now(),x=this.getOrCreateMaterial(h,R,y);if(this.renderNode(h,x,N),f[h]=performance.now()-F,c=N,_){const b=p.find(P=>P.targetHandle==="in");if(b){const P=l[b.sourceNodeId];let M=null;if(P&&(P.type==="imageInput"||P.type==="uiImageSlot"||P.type==="webcamInput")?M=this.textures[b.sourceNodeId]||null:b.sourceNodeId&&this.fbos[b.sourceNodeId]&&(M=this.fbos[b.sourceNodeId].texture),M){const w=h+"__legacy__",W=this.getOrCreateFBO(w),E=this.getOrCreateMaterial(w,"textureTransform",{uIn:M,uInConnected:!0,uUvIn:N.texture,uUvInConnected:!0,uScaleX:1,uScaleY:1,uRotation:0,uTranslateX:0,uTranslateY:0,uWrapMode:0});this.renderNode(w,E,W),this.fbos[h]=W,c=W}}}}const d=s&&this.fbos[s]?this.fbos[s]:c;if(d){this.materials.__preview__&&(this.materials.__preview__.uniforms.uTexture.value=d.texture);const h=this.getOrCreateMaterial("__preview__","passthrough",{uTexture:d.texture});this.renderNode("__preview__",h,null)}return this.perfTimings=f,f}readPixels(e){const n=this.fbos[e];if(!n||!this.renderer)return null;const i=new Uint8Array(this.width*this.height*4);return this.renderer.readRenderTargetPixels(n,0,0,this.width,this.height,i),{pixels:i,width:this.width,height:this.height}}getScaledPixels(e,n,i){const r=this.getNodeTexture(e);if(!r||!this.renderer)return null;(!this._previewFBO||this._previewFBO.width!==n||this._previewFBO.height!==i)&&(this._previewFBO&&this._previewFBO.dispose(),this._previewFBO=new Mn(n,i,{minFilter:Rt,magFilter:Rt,format:bn,type:yn}));const o=this.getOrCreateMaterial("__preview_scale__","passthrough",{uTexture:r});this.renderNode("__preview_scale__",o,this._previewFBO);const s=new Uint8Array(n*i*4);return this.renderer.readRenderTargetPixels(this._previewFBO,0,0,n,i,s),{pixels:s,width:n,height:i}}getNodeTexture(e){return this.textures[e]?this.textures[e]:this.fbos[e]?this.fbos[e].texture:null}removeNode(e){this.fbos[e]&&(this.fbos[e].dispose(),delete this.fbos[e]),this.materials[e]&&(this.materials[e].dispose(),delete this.materials[e]),this.textures[e]&&(this.textures[e].dispose(),delete this.textures[e]),this.feedbackFBOs[e]&&(this.feedbackFBOs[e].current.dispose(),this.feedbackFBOs[e].previous.dispose(),delete this.feedbackFBOs[e])}dispose(){for(const e of Object.values(this.fbos))e.dispose();for(const e of Object.values(this.materials))e.dispose();for(const e of Object.values(this.textures))e.dispose();for(const e of Object.values(this.feedbackFBOs))e.current.dispose(),e.previous.dispose();this.fbos={},this.materials={},this.textures={},this.feedbackFBOs={},this.renderer&&this.renderer.dispose()}}class VV{constructor(){this.isRunning=!1,this.startTime=0,this.lastTime=0,this.time=0,this.deltaTime=0,this.frameId=null,this.customWindow=null,this.callbacks=[]}onFrame(e){return this.callbacks.push(e),()=>{this.callbacks=this.callbacks.filter(n=>n!==e)}}start(){this.isRunning||(this.isRunning=!0,this.startTime=performance.now()/1e3,this.lastTime=this.startTime,this._tick())}stop(){this.isRunning=!1,this.frameId!==null&&(cancelAnimationFrame(this.frameId),this.frameId=null)}reset(){this.startTime=performance.now()/1e3,this.time=0,this.deltaTime=0}_tick(){if(!this.isRunning)return;const e=performance.now()/1e3;this.deltaTime=e-this.lastTime,this.time=e-this.startTime,this.lastTime=e;for(const i of this.callbacks)i(this.time,this.deltaTime);const n=this.customWindow||window;this.frameId=n.requestAnimationFrame(()=>this._tick())}}let Nl=null,Dr=null,Jl=null,sh=!1;function ux(){if(!Nl)try{const t=window.AudioContext||window.webkitAudioContext;Nl=new t,Dr=Nl.createAnalyser(),Dr.fftSize=512,Dr.smoothingTimeConstant=.8,Jl=new Uint8Array(Dr.frequencyBinCount),navigator.mediaDevices.getUserMedia({audio:!0,video:!1}).then(e=>{Nl.createMediaStreamSource(e).connect(Dr),sh=!0}).catch(e=>console.warn("Audio FFT access denied or error:",e))}catch(t){console.warn("Audio context not supported",t)}}function zV(t,e){const n={},i={};for(const s of t)n[s.id]=0,i[s.id]=[];for(const s of e)i[s.source]&&(i[s.source].push(s.target),n[s.target]=(n[s.target]||0)+1);const r=[];for(const s of t)n[s.id]===0&&r.push(s.id);const o=[];for(;r.length>0;){const s=r.shift();o.push(s);for(const a of i[s]||[])n[a]--,n[a]===0&&r.push(a)}return o.length!==t.length&&console.warn("Cycle detected in graph — some nodes skipped"),o}function $V(t,e,n){const i={};for(const r of e)if(r.target===t){const o=n[r.source];o&&(i[r.targetHandle]={sourceNodeId:r.source,sourceHandleId:r.sourceHandle,value:o[r.sourceHandle]})}return i}function HV(t,e,n,i,r,o){const s={};for(const l of e)s[l.id]=l;const a={};for(const l of t){const u=s[l];if(!u)continue;const c=$t(u.type);if(!c||(c.category==="image"||c.category==="uv")&&u.type!=="preview"&&u.type!=="webcamInput")continue;const f=i[l]||{},d=$V(l,n,a),h={};switch(u.type){case"lfo":{const m=f.frequency??1,v=f.amplitude??1,g=f.offset??0,p=(f.phase??0)*Math.PI/180,y=r*m*Math.PI*2+p,S=f.waveform??"sine";let _=0;S==="sine"?_=Math.sin(y):S==="saw"?_=2*(y/(Math.PI*2)%1)-1:S==="square"?_=Math.sin(y)>=0?1:-1:S==="triangle"&&(_=2*Math.abs(2*(y/(Math.PI*2)%1)-1)-1),h.out=_*v+g;break}case"timer":{const m=f.speed??1,v=f.loop??!1,g=f.loopDuration??5;let p=r*m;v&&g>0&&(p=p%g),h.out=p;break}case"random":{const m=f.min??0,v=f.max??1,g=f.seed??42,p=f.triggerInterval??.5,y=Math.max(0,Math.min(.999,f.damping??0)),S=d.trigger?.value??0,_=n.some(x=>x.target===l&&x.targetHandle==="trigger"),R=u._prevRandTrigger??0;let N=!1;if(_)S>0&&R<=0&&(N=!0),u._prevRandTrigger=S;else{const x=u._lastFireTime??-p;r-x>=p&&(N=!0)}if(N||u._randTarget===void 0){u._randSeedCounter=(u._randSeedCounter??0)+1;const x=Math.sin(g+u._randSeedCounter*12.9898)*43758.5453,b=x-Math.floor(x);u._randTarget=m+b*(v-m),u._lastFireTime=r}const F=u._randCurrentValue??u._randTarget;y>0?u._randCurrentValue=F+(u._randTarget-F)*(1-y):u._randCurrentValue=u._randTarget,h.out=u._randCurrentValue;break}case"damper":{const m=d.target?.value??0,v=Math.max(0,Math.min(.999,f.smoothing??.9)),g=u._damperValue??m,p=g+(m-g)*(1-v);u._damperValue=p,h.out=p;break}case"fft":{sh||ux();const m=f.smoothing??.8,v=f.gain??1;if(sh&&Dr&&Jl){Dr.smoothingTimeConstant=m,Dr.getByteFrequencyData(Jl);let g=0,p=0,y=0,S=0;for(let _=0;_<256;_++){const R=Jl[_]/255;_<=10?g+=R:_<=50?p+=R:_<=120?y+=R:S+=R}h.bass=Math.min(g/11*v,1),h.lowMid=Math.min(p/40*v,1),h.mid=Math.min(y/70*v,1),h.high=Math.min(S/135*v,1)}else h.bass=0,h.lowMid=0,h.mid=0,h.high=0;break}case"button":case"bang":{h.out=u._triggered?1:0,u._triggered=!1;break}case"onStart":{u._hasTriggered?h.out=0:(u._hasTriggered=!0,h.out=1);break}case"toggle":{const m=d.trigger?.value??0,v=u._prevTriggerVal??0;m>=.5&&v<.5&&(f.state=!f.state),u._prevTriggerVal=m,h.out=f.state?1:0;break}case"edgeTrigger":{const m=d.in?.value??!1,v=u._prevEdgeVal??!1,g=f.mode??"rising";let p=!1;g==="rising"&&!v&&m&&(p=!0),g==="falling"&&v&&!m&&(p=!0),g==="both"&&v!==m&&(p=!0),h.out=p?1:0,u._prevEdgeVal=m;break}case"webcamInput":{h.trigger=d.trigger?.value??0;break}case"accelerometer":{const m=f.sensitivity??1,v=f.smoothing??.5,g=u._accelX??0,p=u._accelY??0,y=u._accelZ??0,S=u._smoothX??0,_=u._smoothY??0,R=u._smoothZ??0;u._smoothX=S+(g*m-S)*(1-v),u._smoothY=_+(p*m-_)*(1-v),u._smoothZ=R+(y*m-R)*(1-v),h.x=u._smoothX,h.y=u._smoothY,h.z=u._smoothZ;break}case"xyPad":{const m=f.x??.5,v=f.y??.5,g=f.minX??0,p=f.maxX??1,y=f.minY??0,S=f.maxY??1;h.x=g+m*(p-g),h.y=y+v*(S-y);break}case"changeTrigger":{const m=d.in?.value??0,v=f.threshold??.1;u._lastTriggerVal===void 0&&(u._lastTriggerVal=m);const g=u._lastTriggerVal;let p=!1;Math.abs(m-g)>=v&&(p=!0,u._lastTriggerVal=m),h.out=p?1:0;break}case"slider":case"knob":{const m=f.value??.5,v=f.outputType??"float";h.out=v==="int"?Math.round(m):m;break}case"compare":{const m=d.a?.value??0,v=d.b?.value??0,g=f.op??">";let p=!1;switch(g){case">":p=m>v;break;case"<":p=m<v;break;case">=":p=m>=v;break;case"<=":p=m<=v;break;case"==":p=m===v;break;case"!=":p=m!==v;break}h.out=p;break}case"valueCondition":{const m=d.cond?.value??!1,v=d.trueVal?.value??f.defaultTrue??1,g=d.falseVal?.value??f.defaultFalse??0;h.out=m?v:g;break}case"mathAdd":{const m=d.a?.value??0,v=d.b?.value??0;h.out=m+v;break}case"mathMultiply":{const m=d.a?.value??0,v=d.b?.value??1;h.out=m*v;break}case"mathDivide":{const m=d.a?.value??0,v=d.b?.value??1;h.out=v!==0?m/v:0;break}case"mathSqrt":{const m=d.a?.value??0;h.out=Math.sqrt(Math.abs(m));break}case"mathMap":{const m=d.value?.value??0,v=f.inMin??0,g=f.inMax??1,p=f.outMin??0,y=f.outMax??1,S=g!==v?(m-v)/(g-v):0;h.out=p+S*(y-p);break}case"mathClamp":{const m=d.value?.value??0,v=f.min??0,g=f.max??1;h.out=Math.min(Math.max(m,v),g);break}case"mathWrap":{const m=d.value?.value??0,v=f.min??0,p=(f.max??1)-v;if(p<=0){h.out=v;break}h.out=v+((m-v)%p+p)%p;break}case"floatToInt":{const m=d.in?.value??0,v=f.mode??"round";let g;v==="floor"?g=Math.floor(m):v==="ceil"?g=Math.ceil(m):v==="truncate"?g=Math.trunc(m):g=Math.round(m);const p=f.clampMin??-2147483648,y=f.clampMax??2147483647;h.out=Math.min(Math.max(g,p),y);break}case"intToFloat":{h.out=Number(d.in?.value??0);break}case"numberMonitor":{h.out=d.in?.value??0;break}}a[l]=h}return a}function GV(t,e){const n={};for(const i of e)n[i.id]=i;return t.filter(i=>{const r=n[i];if(!r)return!1;const o=$t(r.type);return o?o.category==="image"||o.category==="uv":!1})}const WV={id:"app"},XV={class:"main-layout"},YV={class:"preview-background"},qV={key:0,class:"rotate-hint-overlay"},KV={key:0,class:"rotate-hint-overlay"},ZV={__name:"App",setup(t){const e=Co(),n=Ne(null),i=Ne(null),r=Ne(null),o=Ne(null),s=Ne(!1),a=Ne(!1);let l=null,u=null;const c=/Mobi|Android/i.test(navigator.userAgent)||window.innerWidth<768;function f(O,z,q=2500){O.value=!0,clearTimeout(z.value),z.value=setTimeout(()=>{O.value=!1},q)}at(()=>e.isPerformanceMode,(O,z)=>{c&&(z&&!O?(f(s,{value:l}),l=setTimeout(()=>{s.value=!1},2500),s.value=!0,e.previewMode!=="background"&&(e.previewMode="background")):!z&&O&&(a.value=!0,clearTimeout(u),u=setTimeout(()=>{a.value=!1},2500)))});function d(){ux(),window.removeEventListener("click",d),window.removeEventListener("keydown",d)}let h=null,m=null,v=null;const g=Ne(0);let p=0,y=0;const S={};let _=null,R=null,N=null;function F(){if(R&&!R.closed){R.focus();return}if(R=window.open("","ImageManglerPopup","width=800,height=600,menubar=no,toolbar=no,location=no,status=no"),!R){alert("Popup blocked! Please allow popups to open the external renderer.");return}R.document.write(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>Image Mangler Renderer</title>
      <style>
        body { 
          margin: 0; 
          background: #000; 
          width: 100vw; 
          height: 100vh; 
          overflow: hidden; 
          display: flex; 
          align-items: center; 
          justify-content: center; 
        }
        canvas { 
          width: 100%; 
          height: 100%; 
          object-fit: contain; 
        }
      </style>
    </head>
    <body>
      <canvas id="out"></canvas>
    </body>
    </html>
  `),R.document.close(),setTimeout(()=>{const O=R.document.getElementById("out");O&&(N=O.getContext("2d"))},50),m&&(m.customWindow=R),R.addEventListener("beforeunload",()=>{m&&(m.customWindow=null),R=null,N=null})}Zt(async()=>{await qt(),window.addEventListener("click",d),window.addEventListener("keydown",d),window.addEventListener("keydown",x),c&&(e.isPerformanceMode=!0);const O=i.value?.getCanvas?.();O&&(h=new kV,h.init(O,512,512)),r.value&&(_=r.value.getContext("2d")),e.onNodeRemoved(z=>{h&&h.removeNodeResources(z),delete S[z]}),y=performance.now(),m=new VV,v=m.onFrame((z,q)=>{if(!e.isRendering)return;p++;const te=performance.now();te-y>=500&&(g.value=Math.round(p/(te-y)*1e3),p=0,y=te),b(z)}),m.start(),await e.loadFromLocalStorage()}),cr(()=>{v&&v(),m&&m.stop(),h&&h.dispose(),window.removeEventListener("keydown",x),window.removeEventListener("orientationchange",checkPortrait),window.removeEventListener("resize",checkPortrait),clearTimeout(rotateHintTimer)});function x(O){O.target.tagName==="INPUT"||O.target.tagName==="TEXTAREA"||O.target.tagName==="SELECT"||(O.key==="p"||O.key==="P")&&(O.preventDefault(),e.togglePerformanceMode())}function b(O,z){if(!h?.isInitialized)return;const q=e.nodes,te=e.edges,ne=e.nodeParams;if(q.length===0){_&&r.value&&_.clearRect(0,0,r.value.width,r.value.height);return}const ye=zV(q,te),Pe=HV(ye,q,te,ne,O);e.dataOutputs=Pe;const Te=["lfo","timer","damper","fft","xypad","accelerometer"];for(const X of e.perfGridCells){if(!X.boundNodeId||!Te.includes(X.controlType))continue;const ve=Pe[X.boundNodeId];ve&&(X.controlType==="xypad"?(X.boundParamKey&&X.boundTargetNodeId&&e.setParam(X.boundTargetNodeId,X.boundParamKey,ve.x??.5),X.boundParamKeyY&&X.boundTargetNodeIdY&&e.setParam(X.boundTargetNodeIdY,X.boundParamKeyY,ve.y??.5)):X.controlType==="fft"?X.boundParamKey&&X.boundTargetNodeId&&e.setParam(X.boundTargetNodeId,X.boundParamKey,ve.bass??0):X.controlType==="accelerometer"?X.boundParamKey&&X.boundTargetNodeId&&e.setParam(X.boundTargetNodeId,X.boundParamKey,ve.x??0):X.boundParamKey&&X.boundTargetNodeId&&e.setParam(X.boundTargetNodeId,X.boundParamKey,ve.out??0))}const H=GV(ye,q),B=h.execute(H,q,te,ne,Pe,e.previewNodeId,O);if(e.perfTimings=B||{},e.previewMode==="background"&&_&&r.value){const X=i.value?.getCanvas?.();X&&X.width>0&&X.height>0&&((r.value.width!==X.width||r.value.height!==X.height)&&(r.value.width=X.width,r.value.height=X.height),_.clearRect(0,0,r.value.width,r.value.height),_.drawImage(X,0,0))}if(R&&!R.closed&&N){const X=i.value?.getCanvas?.();if(X&&X.width>0&&X.height>0){const ve=N.canvas;(ve.width!==X.width||ve.height!==X.height)&&(ve.width=X.width,ve.height=X.height),N.clearRect(0,0,ve.width,ve.height),N.drawImage(X,0,0)}}if(e.isPerformanceMode&&o.value?.perfCanvasRef){const X=i.value?.getCanvas?.(),ve=o.value.perfCanvasRef;if(X&&X.width>0&&X.height>0){(ve.width!==X.width||ve.height!==X.height)&&(ve.width=X.width,ve.height=X.height,typeof o.value?.fitView=="function"&&o.value.fitView());const we=ve.getContext("2d");we.clearRect(0,0,ve.width,ve.height),we.drawImage(X,0,0)}}}function P(O){if(n.value&&n.value.addNodeAtCenter)n.value.addNodeAtCenter(O);else{const z=300+Math.random()*200,q=200+Math.random()*200;e.addNode(O,{x:z,y:q})}}function M(O,z){if(!h)return;S[O]=z;let q;z.isVideo?(q=new uM(z.img),q.minFilter=Rt,q.magFilter=Rt,q.format=bn):(q=new an(z.img),q.needsUpdate=!0),h.setInputTexture(O,q),w(O),h.resize(z.width,z.height),i.value&&(i.value.width=z.width,i.value.height=z.height)}function w(O){if(!h)return;const z=new Set,q=[O];for(;q.length;){const te=q.shift();if(!z.has(te)){z.add(te);for(const ne of e.edges)ne.source===te&&!z.has(ne.target)&&(h.fbos[ne.target]&&(h.fbos[ne.target].dispose(),delete h.fbos[ne.target]),h.materials[ne.target]&&(h.materials[ne.target].dispose(),delete h.materials[ne.target]),q.push(ne.target))}}}function W(O){if(!h)return;const z=e.edges.filter(Ae=>Ae.target===O);let q=null;for(const Ae of z)if(Ae.targetHandle==="in"){q=Ae.source;break}if(!q){alert("No image connected to output node");return}const te=h.readPixels(q);if(!te){alert("Could not read pixels — make sure an image is connected and the pipeline has run");return}const{pixels:ne,width:ye,height:Pe}=te,H=(e.nodeParams[O]||{}).filename||e.projectTitle||"output",B=document.createElement("canvas");B.width=ye,B.height=Pe;const X=B.getContext("2d"),ve=X.createImageData(ye,Pe);for(let Ae=0;Ae<Pe;Ae++)for(let G=0;G<ye;G++){const Y=((Pe-1-Ae)*ye+G)*4,L=(Ae*ye+G)*4;ve.data[L]=ne[Y],ve.data[L+1]=ne[Y+1],ve.data[L+2]=ne[Y+2],ve.data[L+3]=ne[Y+3]}X.putImageData(ve,0,0);const we=H.replace(/[^a-zA-Z0-9_-]/g,"_");B.toBlob(Ae=>{if(!Ae)return;const G=URL.createObjectURL(Ae),Y=document.createElement("a");Y.href=G,Y.download=`${we}.png`,Y.click(),URL.revokeObjectURL(G)},"image/png")}function E(){e.saveToLocalStorage()}async function k(){await e.loadFromLocalStorage()||alert("No saved graph found")}function A(O){e.loadGraph(O)||alert("Failed to import graph — invalid JSON")}function I(){confirm("Clear entire graph? This cannot be undone.")&&(e.resetGraph(),Object.keys(S).forEach(O=>delete S[O]))}return(O,z)=>(ae(),ge("div",WV,[Hi(tt(LA,{"is-rendering":fe(e).isRendering,"preview-mode":fe(e).previewMode,"project-title":fe(e).projectTitle,"show-shadows":fe(e).showShadows,"is-performance-mode":fe(e).isPerformanceMode,onSave:E,onLoad:k,onDownload:z[0]||(z[0]=q=>fe(e).downloadGraph()),onImport:A,onReset:I,onToggleRender:z[1]||(z[1]=q=>fe(e).toggleRendering()),onTogglePreview:z[2]||(z[2]=q=>fe(e).togglePreviewMode()),onToggleShadows:z[3]||(z[3]=q=>fe(e).showShadows=!fe(e).showShadows),onOpenPopup:F,onUpdateTitle:z[4]||(z[4]=q=>fe(e).projectTitle=q),onUpdateBgOpacity:z[5]||(z[5]=q=>fe(e).bgOpacity=q),onTogglePerformance:z[6]||(z[6]=q=>fe(e).togglePerformanceMode())},null,8,["is-rendering","preview-mode","project-title","show-shadows","is-performance-mode"]),[[Gi,!fe(e).isPerformanceMode]]),fe(e).isPerformanceMode?(ae(),tn(fV,{key:0,ref_key:"perfViewRef",ref:o,fps:g.value},null,8,["fps"])):$e("",!0),Hi(K("div",XV,[tt(WA,{onAddNode:P}),K("div",{class:lt(["editor-area",{"editor-area--bg-mode":fe(e).previewMode==="background"}])},[Hi(K("div",YV,[K("canvas",{ref_key:"bgCanvasRef",ref:r},null,512),K("div",{class:"preview-background__overlay",style:nt({opacity:fe(e).bgOpacity})},null,4)],512),[[Gi,fe(e).previewMode==="background"]]),tt(Ok,{ref_key:"editorRef",ref:n,class:lt({"editor-canvas--no-shadows":!fe(e).showShadows}),onImageLoaded:M,onExportImage:W},null,8,["class"]),Hi(tt(Xk,{ref_key:"previewRef",ref:i,"is-rendering":fe(e).isRendering,fps:g.value,"preview-mode":fe(e).previewMode},null,8,["is-rendering","fps","preview-mode"]),[[Gi,fe(e).previewMode==="anchored"||fe(e).previewMode==="floating"]])],2),tt(O4)],512),[[Gi,!fe(e).isPerformanceMode]]),tt(kp,{name:"rotate-hint"},{default:rn(()=>[s.value?(ae(),ge("div",qV,[...z[7]||(z[7]=[K("div",{class:"rotate-hint__icon",style:{"animation-name":"hint-rotate-landscape"}},"📱",-1),K("div",{class:"rotate-hint__text"},"Rotate to landscape for Editor mode",-1)])])):$e("",!0)]),_:1}),tt(kp,{name:"rotate-hint"},{default:rn(()=>[a.value?(ae(),ge("div",KV,[...z[8]||(z[8]=[K("div",{class:"rotate-hint__icon"},"📱",-1),K("div",{class:"rotate-hint__text"},"Rotate to portrait for Performance mode",-1)])])):$e("",!0)]),_:1})]))}},cx=W1(ZV);cx.use(q1());cx.mount("#app");
