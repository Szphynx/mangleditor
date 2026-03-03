(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function n(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(r){if(r.ep)return;r.ep=!0;const o=n(r);fetch(r.href,o)}})();function Bd(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const Nt={},Uo=[],hi=()=>{},Ig=()=>!1,du=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),kd=t=>t.startsWith("onUpdate:"),en=Object.assign,zd=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Iy=Object.prototype.hasOwnProperty,_t=(t,e)=>Iy.call(t,e),je=Array.isArray,Oo=t=>ha(t)==="[object Map]",Pg=t=>ha(t)==="[object Set]",Xh=t=>ha(t)==="[object Date]",et=t=>typeof t=="function",Bt=t=>typeof t=="string",qn=t=>typeof t=="symbol",bt=t=>t!==null&&typeof t=="object",Ng=t=>(bt(t)||et(t))&&et(t.then)&&et(t.catch),Dg=Object.prototype.toString,ha=t=>Dg.call(t),Py=t=>ha(t).slice(8,-1),Lg=t=>ha(t)==="[object Object]",hu=t=>Bt(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Ns=Bd(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),pu=t=>{const e=Object.create(null);return(n=>e[n]||(e[n]=t(n)))},Ny=/-\w/g,Fn=pu(t=>t.replace(Ny,e=>e.slice(1).toUpperCase())),Dy=/\B([A-Z])/g,po=pu(t=>t.replace(Dy,"-$1").toLowerCase()),mu=pu(t=>t.charAt(0).toUpperCase()+t.slice(1)),Zu=pu(t=>t?`on${mu(t)}`:""),Hi=(t,e)=>!Object.is(t,e),ju=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},Fg=(t,e,n,i=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:i,value:n})},Ly=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Yh;const gu=()=>Yh||(Yh=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function yt(t){if(je(t)){const e={};for(let n=0;n<t.length;n++){const i=t[n],r=Bt(i)?By(i):yt(i);if(r)for(const o in r)e[o]=r[o]}return e}else if(Bt(t)||bt(t))return t}const Fy=/;(?![^(]*\))/g,Uy=/:([^]+)/,Oy=/\/\*[^]*?\*\//g;function By(t){const e={};return t.replace(Oy,"").split(Fy).forEach(n=>{if(n){const i=n.split(Uy);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function Dt(t){let e="";if(Bt(t))e=t;else if(je(t))for(let n=0;n<t.length;n++){const i=Dt(t[n]);i&&(e+=i+" ")}else if(bt(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}function ky(t){if(!t)return null;let{class:e,style:n}=t;return e&&!Bt(e)&&(t.class=Dt(e)),n&&(t.style=yt(n)),t}const zy="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Vy=Bd(zy);function Ug(t){return!!t||t===""}function Hy(t,e){if(t.length!==e.length)return!1;let n=!0;for(let i=0;n&&i<t.length;i++)n=Vd(t[i],e[i]);return n}function Vd(t,e){if(t===e)return!0;let n=Xh(t),i=Xh(e);if(n||i)return n&&i?t.getTime()===e.getTime():!1;if(n=qn(t),i=qn(e),n||i)return t===e;if(n=je(t),i=je(e),n||i)return n&&i?Hy(t,e):!1;if(n=bt(t),i=bt(e),n||i){if(!n||!i)return!1;const r=Object.keys(t).length,o=Object.keys(e).length;if(r!==o)return!1;for(const s in t){const a=t.hasOwnProperty(s),l=e.hasOwnProperty(s);if(a&&!l||!a&&l||!Vd(t[s],e[s]))return!1}}return String(t)===String(e)}const Og=t=>!!(t&&t.__v_isRef===!0),Ze=t=>Bt(t)?t:t==null?"":je(t)||bt(t)&&(t.toString===Dg||!et(t.toString))?Og(t)?Ze(t.value):JSON.stringify(t,Bg,2):String(t),Bg=(t,e)=>Og(e)?Bg(t,e.value):Oo(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[i,r],o)=>(n[Ju(i,o)+" =>"]=r,n),{})}:Pg(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Ju(n))}:qn(e)?Ju(e):bt(e)&&!je(e)&&!Lg(e)?String(e):e,Ju=(t,e="")=>{var n;return qn(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};let on;class kg{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.__v_skip=!0,this.parent=on,!e&&on&&(this.index=(on.scopes||(on.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=on;try{return on=this,e()}finally{on=n}}}on(){++this._on===1&&(this.prevScope=on,on=this)}off(){this._on>0&&--this._on===0&&(on=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let n,i;for(n=0,i=this.effects.length;n<i;n++)this.effects[n].stop();for(this.effects.length=0,n=0,i=this.cleanups.length;n<i;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,i=this.scopes.length;n<i;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function vu(t){return new kg(t)}function _u(){return on}function Ds(t,e=!1){on&&on.cleanups.push(t)}let Ft;const Qu=new WeakSet;class zg{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,on&&on.active&&on.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Qu.has(this)&&(Qu.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Hg(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,qh(this),$g(this);const e=Ft,n=Yn;Ft=this,Yn=!0;try{return this.fn()}finally{Gg(this),Ft=e,Yn=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Gd(e);this.deps=this.depsTail=void 0,qh(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Qu.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){rf(this)&&this.run()}get dirty(){return rf(this)}}let Vg=0,Ls,Fs;function Hg(t,e=!1){if(t.flags|=8,e){t.next=Fs,Fs=t;return}t.next=Ls,Ls=t}function Hd(){Vg++}function $d(){if(--Vg>0)return;if(Fs){let e=Fs;for(Fs=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;Ls;){let e=Ls;for(Ls=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){t||(t=i)}e=n}}if(t)throw t}function $g(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Gg(t){let e,n=t.depsTail,i=n;for(;i;){const r=i.prevDep;i.version===-1?(i===n&&(n=r),Gd(i),$y(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=r}t.deps=e,t.depsTail=n}function rf(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Wg(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function Wg(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===$s)||(t.globalVersion=$s,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!rf(t))))return;t.flags|=2;const e=t.dep,n=Ft,i=Yn;Ft=t,Yn=!0;try{$g(t);const r=t.fn(t._value);(e.version===0||Hi(r,t._value))&&(t.flags|=128,t._value=r,e.version++)}catch(r){throw e.version++,r}finally{Ft=n,Yn=i,Gg(t),t.flags&=-3}}function Gd(t,e=!1){const{dep:n,prevSub:i,nextSub:r}=t;if(i&&(i.nextSub=r,t.prevSub=void 0),r&&(r.prevSub=i,t.nextSub=void 0),n.subs===t&&(n.subs=i,!i&&n.computed)){n.computed.flags&=-5;for(let o=n.computed.deps;o;o=o.nextDep)Gd(o,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function $y(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let Yn=!0;const Xg=[];function Yi(){Xg.push(Yn),Yn=!1}function qi(){const t=Xg.pop();Yn=t===void 0?!0:t}function qh(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=Ft;Ft=void 0;try{e()}finally{Ft=n}}}let $s=0;class Gy{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class yu{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!Ft||!Yn||Ft===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==Ft)n=this.activeLink=new Gy(Ft,this),Ft.deps?(n.prevDep=Ft.depsTail,Ft.depsTail.nextDep=n,Ft.depsTail=n):Ft.deps=Ft.depsTail=n,Yg(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const i=n.nextDep;i.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=i),n.prevDep=Ft.depsTail,n.nextDep=void 0,Ft.depsTail.nextDep=n,Ft.depsTail=n,Ft.deps===n&&(Ft.deps=i)}return n}trigger(e){this.version++,$s++,this.notify(e)}notify(e){Hd();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{$d()}}}function Yg(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)Yg(i)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const Ll=new WeakMap,to=Symbol(""),of=Symbol(""),Gs=Symbol("");function sn(t,e,n){if(Yn&&Ft){let i=Ll.get(t);i||Ll.set(t,i=new Map);let r=i.get(n);r||(i.set(n,r=new yu),r.map=i,r.key=n),r.track()}}function Fi(t,e,n,i,r,o){const s=Ll.get(t);if(!s){$s++;return}const a=l=>{l&&l.trigger()};if(Hd(),e==="clear")s.forEach(a);else{const l=je(t),u=l&&hu(n);if(l&&n==="length"){const c=Number(i);s.forEach((f,d)=>{(d==="length"||d===Gs||!qn(d)&&d>=c)&&a(f)})}else switch((n!==void 0||s.has(void 0))&&a(s.get(n)),u&&a(s.get(Gs)),e){case"add":l?u&&a(s.get("length")):(a(s.get(to)),Oo(t)&&a(s.get(of)));break;case"delete":l||(a(s.get(to)),Oo(t)&&a(s.get(of)));break;case"set":Oo(t)&&a(s.get(to));break}}$d()}function Wy(t,e){const n=Ll.get(t);return n&&n.get(e)}function vo(t){const e=mt(t);return e===t?e:(sn(e,"iterate",Gs),Tn(t)?e:e.map(Kn))}function xu(t){return sn(t=mt(t),"iterate",Gs),t}function _r(t,e){return Ki(t)?Yo($i(t)?Kn(e):e):Kn(e)}const Xy={__proto__:null,[Symbol.iterator](){return ec(this,Symbol.iterator,t=>_r(this,t))},concat(...t){return vo(this).concat(...t.map(e=>je(e)?vo(e):e))},entries(){return ec(this,"entries",t=>(t[1]=_r(this,t[1]),t))},every(t,e){return Ei(this,"every",t,e,void 0,arguments)},filter(t,e){return Ei(this,"filter",t,e,n=>n.map(i=>_r(this,i)),arguments)},find(t,e){return Ei(this,"find",t,e,n=>_r(this,n),arguments)},findIndex(t,e){return Ei(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return Ei(this,"findLast",t,e,n=>_r(this,n),arguments)},findLastIndex(t,e){return Ei(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return Ei(this,"forEach",t,e,void 0,arguments)},includes(...t){return tc(this,"includes",t)},indexOf(...t){return tc(this,"indexOf",t)},join(t){return vo(this).join(t)},lastIndexOf(...t){return tc(this,"lastIndexOf",t)},map(t,e){return Ei(this,"map",t,e,void 0,arguments)},pop(){return cs(this,"pop")},push(...t){return cs(this,"push",t)},reduce(t,...e){return Kh(this,"reduce",t,e)},reduceRight(t,...e){return Kh(this,"reduceRight",t,e)},shift(){return cs(this,"shift")},some(t,e){return Ei(this,"some",t,e,void 0,arguments)},splice(...t){return cs(this,"splice",t)},toReversed(){return vo(this).toReversed()},toSorted(t){return vo(this).toSorted(t)},toSpliced(...t){return vo(this).toSpliced(...t)},unshift(...t){return cs(this,"unshift",t)},values(){return ec(this,"values",t=>_r(this,t))}};function ec(t,e,n){const i=xu(t),r=i[e]();return i!==t&&!Tn(t)&&(r._next=r.next,r.next=()=>{const o=r._next();return o.done||(o.value=n(o.value)),o}),r}const Yy=Array.prototype;function Ei(t,e,n,i,r,o){const s=xu(t),a=s!==t&&!Tn(t),l=s[e];if(l!==Yy[e]){const f=l.apply(t,o);return a?Kn(f):f}let u=n;s!==t&&(a?u=function(f,d){return n.call(this,_r(t,f),d,t)}:n.length>2&&(u=function(f,d){return n.call(this,f,d,t)}));const c=l.call(s,u,i);return a&&r?r(c):c}function Kh(t,e,n,i){const r=xu(t);let o=n;return r!==t&&(Tn(t)?n.length>3&&(o=function(s,a,l){return n.call(this,s,a,l,t)}):o=function(s,a,l){return n.call(this,s,_r(t,a),l,t)}),r[e](o,...i)}function tc(t,e,n){const i=mt(t);sn(i,"iterate",Gs);const r=i[e](...n);return(r===-1||r===!1)&&bu(n[0])?(n[0]=mt(n[0]),i[e](...n)):r}function cs(t,e,n=[]){Yi(),Hd();const i=mt(t)[e].apply(t,n);return $d(),qi(),i}const qy=Bd("__proto__,__v_isRef,__isVue"),qg=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(qn));function Ky(t){qn(t)||(t=String(t));const e=mt(this);return sn(e,"has",t),e.hasOwnProperty(t)}class Kg{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,i){if(n==="__v_skip")return e.__v_skip;const r=this._isReadonly,o=this._isShallow;if(n==="__v_isReactive")return!r;if(n==="__v_isReadonly")return r;if(n==="__v_isShallow")return o;if(n==="__v_raw")return i===(r?o?ox:Qg:o?Jg:jg).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const s=je(e);if(!r){let l;if(s&&(l=Xy[n]))return l;if(n==="hasOwnProperty")return Ky}const a=Reflect.get(e,n,Ut(e)?e:i);if((qn(n)?qg.has(n):qy(n))||(r||sn(e,"get",n),o))return a;if(Ut(a)){const l=s&&hu(n)?a:a.value;return r&&bt(l)?Fl(l):l}return bt(a)?r?Fl(a):Ar(a):a}}class Zg extends Kg{constructor(e=!1){super(!1,e)}set(e,n,i,r){let o=e[n];const s=je(e)&&hu(n);if(!this._isShallow){const u=Ki(o);if(!Tn(i)&&!Ki(i)&&(o=mt(o),i=mt(i)),!s&&Ut(o)&&!Ut(i))return u||(o.value=i),!0}const a=s?Number(n)<e.length:_t(e,n),l=Reflect.set(e,n,i,Ut(e)?e:r);return e===mt(r)&&(a?Hi(i,o)&&Fi(e,"set",n,i):Fi(e,"add",n,i)),l}deleteProperty(e,n){const i=_t(e,n);e[n];const r=Reflect.deleteProperty(e,n);return r&&i&&Fi(e,"delete",n,void 0),r}has(e,n){const i=Reflect.has(e,n);return(!qn(n)||!qg.has(n))&&sn(e,"has",n),i}ownKeys(e){return sn(e,"iterate",je(e)?"length":to),Reflect.ownKeys(e)}}class Zy extends Kg{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const jy=new Zg,Jy=new Zy,Qy=new Zg(!0);const sf=t=>t,Aa=t=>Reflect.getPrototypeOf(t);function ex(t,e,n){return function(...i){const r=this.__v_raw,o=mt(r),s=Oo(o),a=t==="entries"||t===Symbol.iterator&&s,l=t==="keys"&&s,u=r[t](...i),c=n?sf:e?Yo:Kn;return!e&&sn(o,"iterate",l?of:to),en(Object.create(u),{next(){const{value:f,done:d}=u.next();return d?{value:f,done:d}:{value:a?[c(f[0]),c(f[1])]:c(f),done:d}}})}}function Ca(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function tx(t,e){const n={get(r){const o=this.__v_raw,s=mt(o),a=mt(r);t||(Hi(r,a)&&sn(s,"get",r),sn(s,"get",a));const{has:l}=Aa(s),u=e?sf:t?Yo:Kn;if(l.call(s,r))return u(o.get(r));if(l.call(s,a))return u(o.get(a));o!==s&&o.get(r)},get size(){const r=this.__v_raw;return!t&&sn(mt(r),"iterate",to),r.size},has(r){const o=this.__v_raw,s=mt(o),a=mt(r);return t||(Hi(r,a)&&sn(s,"has",r),sn(s,"has",a)),r===a?o.has(r):o.has(r)||o.has(a)},forEach(r,o){const s=this,a=s.__v_raw,l=mt(a),u=e?sf:t?Yo:Kn;return!t&&sn(l,"iterate",to),a.forEach((c,f)=>r.call(o,u(c),u(f),s))}};return en(n,t?{add:Ca("add"),set:Ca("set"),delete:Ca("delete"),clear:Ca("clear")}:{add(r){!e&&!Tn(r)&&!Ki(r)&&(r=mt(r));const o=mt(this);return Aa(o).has.call(o,r)||(o.add(r),Fi(o,"add",r,r)),this},set(r,o){!e&&!Tn(o)&&!Ki(o)&&(o=mt(o));const s=mt(this),{has:a,get:l}=Aa(s);let u=a.call(s,r);u||(r=mt(r),u=a.call(s,r));const c=l.call(s,r);return s.set(r,o),u?Hi(o,c)&&Fi(s,"set",r,o):Fi(s,"add",r,o),this},delete(r){const o=mt(this),{has:s,get:a}=Aa(o);let l=s.call(o,r);l||(r=mt(r),l=s.call(o,r)),a&&a.call(o,r);const u=o.delete(r);return l&&Fi(o,"delete",r,void 0),u},clear(){const r=mt(this),o=r.size!==0,s=r.clear();return o&&Fi(r,"clear",void 0,void 0),s}}),["keys","values","entries",Symbol.iterator].forEach(r=>{n[r]=ex(r,t,e)}),n}function Wd(t,e){const n=tx(t,e);return(i,r,o)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?i:Reflect.get(_t(n,r)&&r in i?n:i,r,o)}const nx={get:Wd(!1,!1)},ix={get:Wd(!1,!0)},rx={get:Wd(!0,!1)};const jg=new WeakMap,Jg=new WeakMap,Qg=new WeakMap,ox=new WeakMap;function sx(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function ax(t){return t.__v_skip||!Object.isExtensible(t)?0:sx(Py(t))}function Ar(t){return Ki(t)?t:Xd(t,!1,jy,nx,jg)}function lx(t){return Xd(t,!1,Qy,ix,Jg)}function Fl(t){return Xd(t,!0,Jy,rx,Qg)}function Xd(t,e,n,i,r){if(!bt(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const o=ax(t);if(o===0)return t;const s=r.get(t);if(s)return s;const a=new Proxy(t,o===2?i:n);return r.set(t,a),a}function $i(t){return Ki(t)?$i(t.__v_raw):!!(t&&t.__v_isReactive)}function Ki(t){return!!(t&&t.__v_isReadonly)}function Tn(t){return!!(t&&t.__v_isShallow)}function bu(t){return t?!!t.__v_raw:!1}function mt(t){const e=t&&t.__v_raw;return e?mt(e):t}function no(t){return!_t(t,"__v_skip")&&Object.isExtensible(t)&&Fg(t,"__v_skip",!0),t}const Kn=t=>bt(t)?Ar(t):t,Yo=t=>bt(t)?Fl(t):t;function Ut(t){return t?t.__v_isRef===!0:!1}function qe(t){return e0(t,!1)}function Er(t){return e0(t,!0)}function e0(t,e){return Ut(t)?t:new ux(t,e)}class ux{constructor(e,n){this.dep=new yu,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:mt(e),this._value=n?e:Kn(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,i=this.__v_isShallow||Tn(e)||Ki(e);e=i?e:mt(e),Hi(e,n)&&(this._rawValue=e,this._value=i?e:Kn(e),this.dep.trigger())}}function ge(t){return Ut(t)?t.value:t}function ct(t){return et(t)?t():ge(t)}const cx={get:(t,e,n)=>e==="__v_raw"?t:ge(Reflect.get(t,e,n)),set:(t,e,n,i)=>{const r=t[e];return Ut(r)&&!Ut(n)?(r.value=n,!0):Reflect.set(t,e,n,i)}};function t0(t){return $i(t)?t:new Proxy(t,cx)}class fx{constructor(e){this.__v_isRef=!0,this._value=void 0;const n=this.dep=new yu,{get:i,set:r}=e(n.track.bind(n),n.trigger.bind(n));this._get=i,this._set=r}get value(){return this._value=this._get()}set value(e){this._set(e)}}function dx(t){return new fx(t)}function n0(t){const e=je(t)?new Array(t.length):{};for(const n in t)e[n]=i0(t,n);return e}class hx{constructor(e,n,i){this._object=e,this._key=n,this._defaultValue=i,this.__v_isRef=!0,this._value=void 0,this._raw=mt(e);let r=!0,o=e;if(!je(e)||!hu(String(n)))do r=!bu(o)||Tn(o);while(r&&(o=o.__v_raw));this._shallow=r}get value(){let e=this._object[this._key];return this._shallow&&(e=ge(e)),this._value=e===void 0?this._defaultValue:e}set value(e){if(this._shallow&&Ut(this._raw[this._key])){const n=this._object[this._key];if(Ut(n)){n.value=e;return}}this._object[this._key]=e}get dep(){return Wy(this._raw,this._key)}}class px{constructor(e){this._getter=e,this.__v_isRef=!0,this.__v_isReadonly=!0,this._value=void 0}get value(){return this._value=this._getter()}}function vt(t,e,n){return Ut(t)?t:et(t)?new px(t):bt(t)&&arguments.length>1?i0(t,e,n):qe(t)}function i0(t,e,n){return new hx(t,e,n)}class mx{constructor(e,n,i){this.fn=e,this.setter=n,this._value=void 0,this.dep=new yu(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=$s-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&Ft!==this)return Hg(this,!0),!0}get value(){const e=this.dep.track();return Wg(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function gx(t,e,n=!1){let i,r;return et(t)?i=t:(i=t.get,r=t.set),new mx(i,r,n)}const Ra={},Ul=new WeakMap;let Gr;function vx(t,e=!1,n=Gr){if(n){let i=Ul.get(n);i||Ul.set(n,i=[]),i.push(t)}}function _x(t,e,n=Nt){const{immediate:i,deep:r,once:o,scheduler:s,augmentJob:a,call:l}=n,u=x=>r?x:Tn(x)||r===!1||r===0?Ui(x,1):Ui(x);let c,f,d,h,g=!1,_=!1;if(Ut(t)?(f=()=>t.value,g=Tn(t)):$i(t)?(f=()=>u(t),g=!0):je(t)?(_=!0,g=t.some(x=>$i(x)||Tn(x)),f=()=>t.map(x=>{if(Ut(x))return x.value;if($i(x))return u(x);if(et(x))return l?l(x,2):x()})):et(t)?e?f=l?()=>l(t,2):t:f=()=>{if(d){Yi();try{d()}finally{qi()}}const x=Gr;Gr=c;try{return l?l(t,3,[h]):t(h)}finally{Gr=x}}:f=hi,e&&r){const x=f,D=r===!0?1/0:r;f=()=>Ui(x(),D)}const m=_u(),p=()=>{c.stop(),m&&m.active&&zd(m.effects,c)};if(o&&e){const x=e;e=(...D)=>{x(...D),p()}}let b=_?new Array(t.length).fill(Ra):Ra;const S=x=>{if(!(!(c.flags&1)||!c.dirty&&!x))if(e){const D=c.run();if(r||g||(_?D.some((O,z)=>Hi(O,b[z])):Hi(D,b))){d&&d();const O=Gr;Gr=c;try{const z=[D,b===Ra?void 0:_&&b[0]===Ra?[]:b,h];b=D,l?l(e,3,z):e(...z)}finally{Gr=O}}}else c.run()};return a&&a(S),c=new zg(f),c.scheduler=s?()=>s(S,!1):S,h=x=>vx(x,!1,c),d=c.onStop=()=>{const x=Ul.get(c);if(x){if(l)l(x,4);else for(const D of x)D();Ul.delete(c)}},e?i?S(!0):b=c.run():s?s(S.bind(null,!0),!0):c.run(),p.pause=c.pause.bind(c),p.resume=c.resume.bind(c),p.stop=p,p}function Ui(t,e=1/0,n){if(e<=0||!bt(t)||t.__v_skip||(n=n||new Map,(n.get(t)||0)>=e))return t;if(n.set(t,e),e--,Ut(t))Ui(t.value,e,n);else if(je(t))for(let i=0;i<t.length;i++)Ui(t[i],e,n);else if(Pg(t)||Oo(t))t.forEach(i=>{Ui(i,e,n)});else if(Lg(t)){for(const i in t)Ui(t[i],e,n);for(const i of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,i)&&Ui(t[i],e,n)}return t}function pa(t,e,n,i){try{return i?t(...i):t()}catch(r){Su(r,e,n)}}function _i(t,e,n,i){if(et(t)){const r=pa(t,e,n,i);return r&&Ng(r)&&r.catch(o=>{Su(o,e,n)}),r}if(je(t)){const r=[];for(let o=0;o<t.length;o++)r.push(_i(t[o],e,n,i));return r}}function Su(t,e,n,i=!0){const r=e?e.vnode:null,{errorHandler:o,throwUnhandledErrorInProduction:s}=e&&e.appContext.config||Nt;if(e){let a=e.parent;const l=e.proxy,u=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const c=a.ec;if(c){for(let f=0;f<c.length;f++)if(c[f](t,l,u)===!1)return}a=a.parent}if(o){Yi(),pa(o,null,10,[t,l,u]),qi();return}}yx(t,n,r,i,s)}function yx(t,e,n,i=!0,r=!1){if(r)throw t;console.error(t)}const cn=[];let ii=-1;const Bo=[];let yr=null,Fo=0;const r0=Promise.resolve();let Ol=null;function Dn(t){const e=Ol||r0;return t?e.then(this?t.bind(this):t):e}function xx(t){let e=ii+1,n=cn.length;for(;e<n;){const i=e+n>>>1,r=cn[i],o=Ws(r);o<t||o===t&&r.flags&2?e=i+1:n=i}return e}function Yd(t){if(!(t.flags&1)){const e=Ws(t),n=cn[cn.length-1];!n||!(t.flags&2)&&e>=Ws(n)?cn.push(t):cn.splice(xx(e),0,t),t.flags|=1,o0()}}function o0(){Ol||(Ol=r0.then(a0))}function bx(t){je(t)?Bo.push(...t):yr&&t.id===-1?yr.splice(Fo+1,0,t):t.flags&1||(Bo.push(t),t.flags|=1),o0()}function Zh(t,e,n=ii+1){for(;n<cn.length;n++){const i=cn[n];if(i&&i.flags&2){if(t&&i.id!==t.uid)continue;cn.splice(n,1),n--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function s0(t){if(Bo.length){const e=[...new Set(Bo)].sort((n,i)=>Ws(n)-Ws(i));if(Bo.length=0,yr){yr.push(...e);return}for(yr=e,Fo=0;Fo<yr.length;Fo++){const n=yr[Fo];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}yr=null,Fo=0}}const Ws=t=>t.id==null?t.flags&2?-1:1/0:t.id;function a0(t){try{for(ii=0;ii<cn.length;ii++){const e=cn[ii];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),pa(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;ii<cn.length;ii++){const e=cn[ii];e&&(e.flags&=-2)}ii=-1,cn.length=0,s0(),Ol=null,(cn.length||Bo.length)&&a0()}}let jt=null,l0=null;function Bl(t){const e=jt;return jt=t,l0=t&&t.type.__scopeId||null,e}function En(t,e=jt,n){if(!e||t._n)return t;const i=(...r)=>{i._d&&Vl(-1);const o=Bl(e);let s;try{s=t(...r)}finally{Bl(o),i._d&&Vl(1)}return s};return i._n=!0,i._c=!0,i._d=!0,i}function af(t,e){if(jt===null)return t;const n=Au(jt),i=t.dirs||(t.dirs=[]);for(let r=0;r<e.length;r++){let[o,s,a,l=Nt]=e[r];o&&(et(o)&&(o={mounted:o,updated:o}),o.deep&&Ui(s),i.push({dir:o,instance:n,value:s,oldValue:void 0,arg:a,modifiers:l}))}return t}function Fr(t,e,n,i){const r=t.dirs,o=e&&e.dirs;for(let s=0;s<r.length;s++){const a=r[s];o&&(a.oldValue=o[s].value);let l=a.dir[i];l&&(Yi(),_i(l,n,8,[t.el,a,t,e]),qi())}}function Cr(t,e){if(an){let n=an.provides;const i=an.parent&&an.parent.provides;i===n&&(n=an.provides=Object.create(i)),n[t]=e}}function An(t,e,n=!1){const i=rr();if(i||io){let r=io?io._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(r&&t in r)return r[t];if(arguments.length>1)return n&&et(e)?e.call(i&&i.proxy):e}}function Sx(){return!!(rr()||io)}const Mx=Symbol.for("v-scx"),wx=()=>An(Mx);function u0(t,e){return qd(t,null,e)}function ft(t,e,n){return qd(t,e,n)}function qd(t,e,n=Nt){const{immediate:i,deep:r,flush:o,once:s}=n,a=en({},n),l=e&&i||!e&&o!=="post";let u;if(qs){if(o==="sync"){const h=wx();u=h.__watcherHandles||(h.__watcherHandles=[])}else if(!l){const h=()=>{};return h.stop=hi,h.resume=hi,h.pause=hi,h}}const c=an;a.call=(h,g,_)=>_i(h,c,g,_);let f=!1;o==="post"?a.scheduler=h=>{vn(h,c&&c.suspense)}:o!=="sync"&&(f=!0,a.scheduler=(h,g)=>{g?h():Yd(h)}),a.augmentJob=h=>{e&&(h.flags|=4),f&&(h.flags|=2,c&&(h.id=c.uid,h.i=c))};const d=_x(t,e,a);return qs&&(u?u.push(d):l&&d()),d}function Ex(t,e,n){const i=this.proxy,r=Bt(t)?t.includes(".")?c0(i,t):()=>i[t]:t.bind(i,i);let o;et(e)?o=e:(o=e.handler,n=e);const s=ma(this),a=qd(r,o.bind(i),n);return s(),a}function c0(t,e){const n=e.split(".");return()=>{let i=t;for(let r=0;r<n.length&&i;r++)i=i[n[r]];return i}}const Tx=Symbol("_vte"),Ax=t=>t.__isTeleport,Cx=Symbol("_leaveCb");function Kd(t,e){t.shapeFlag&6&&t.component?(t.transition=e,Kd(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Rt(t,e){return et(t)?en({name:t.name},e,{setup:t}):t}function f0(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function jh(t,e){let n;return!!((n=Object.getOwnPropertyDescriptor(t,e))&&!n.configurable)}const kl=new WeakMap;function Us(t,e,n,i,r=!1){if(je(t)){t.forEach((_,m)=>Us(_,e&&(je(e)?e[m]:e),n,i,r));return}if(ko(i)&&!r){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&Us(t,e,n,i.component.subTree);return}const o=i.shapeFlag&4?Au(i.component):i.el,s=r?null:o,{i:a,r:l}=t,u=e&&e.r,c=a.refs===Nt?a.refs={}:a.refs,f=a.setupState,d=mt(f),h=f===Nt?Ig:_=>jh(c,_)?!1:_t(d,_),g=(_,m)=>!(m&&jh(c,m));if(u!=null&&u!==l){if(Jh(e),Bt(u))c[u]=null,h(u)&&(f[u]=null);else if(Ut(u)){const _=e;g(u,_.k)&&(u.value=null),_.k&&(c[_.k]=null)}}if(et(l))pa(l,a,12,[s,c]);else{const _=Bt(l),m=Ut(l);if(_||m){const p=()=>{if(t.f){const b=_?h(l)?f[l]:c[l]:g()||!t.k?l.value:c[t.k];if(r)je(b)&&zd(b,o);else if(je(b))b.includes(o)||b.push(o);else if(_)c[l]=[o],h(l)&&(f[l]=c[l]);else{const S=[o];g(l,t.k)&&(l.value=S),t.k&&(c[t.k]=S)}}else _?(c[l]=s,h(l)&&(f[l]=s)):m&&(g(l,t.k)&&(l.value=s),t.k&&(c[t.k]=s))};if(s){const b=()=>{p(),kl.delete(t)};b.id=-1,kl.set(t,b),vn(b,n)}else Jh(t),p()}}}function Jh(t){const e=kl.get(t);e&&(e.flags|=8,kl.delete(t))}gu().requestIdleCallback;gu().cancelIdleCallback;const ko=t=>!!t.type.__asyncLoader,d0=t=>t.type.__isKeepAlive;function Rx(t,e){h0(t,"a",e)}function Ix(t,e){h0(t,"da",e)}function h0(t,e,n=an){const i=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(Mu(e,i,n),n){let r=n.parent;for(;r&&r.parent;)d0(r.parent.vnode)&&Px(i,e,n,r),r=r.parent}}function Px(t,e,n,i){const r=Mu(e,t,i,!0);wu(()=>{zd(i[e],r)},n)}function Mu(t,e,n=an,i=!1){if(n){const r=n[t]||(n[t]=[]),o=e.__weh||(e.__weh=(...s)=>{Yi();const a=ma(n),l=_i(e,n,t,s);return a(),qi(),l});return i?r.unshift(o):r.push(o),o}}const ir=t=>(e,n=an)=>{(!qs||t==="sp")&&Mu(t,(...i)=>e(...i),n)},p0=ir("bm"),On=ir("m"),Nx=ir("bu"),Dx=ir("u"),ss=ir("bum"),wu=ir("um"),Lx=ir("sp"),Fx=ir("rtg"),Ux=ir("rtc");function Ox(t,e=an){Mu("ec",t,e)}const m0="components";function g0(t,e){return y0(m0,t,!0,e)||t}const v0=Symbol.for("v-ndc");function _0(t){return Bt(t)?y0(m0,t,!1)||t:t||v0}function y0(t,e,n=!0,i=!1){const r=jt||an;if(r){const o=r.type;{const a=bb(o,!1);if(a&&(a===e||a===Fn(e)||a===mu(Fn(e))))return o}const s=Qh(r[t]||o[t],e)||Qh(r.appContext[t],e);return!s&&i?o:s}}function Qh(t,e){return t&&(t[e]||t[Fn(e)]||t[mu(Fn(e))])}function dn(t,e,n,i){let r;const o=n&&n[i],s=je(t);if(s||Bt(t)){const a=s&&$i(t);let l=!1,u=!1;a&&(l=!Tn(t),u=Ki(t),t=xu(t)),r=new Array(t.length);for(let c=0,f=t.length;c<f;c++)r[c]=e(l?u?Yo(Kn(t[c])):Kn(t[c]):t[c],c,void 0,o&&o[c])}else if(typeof t=="number"){r=new Array(t);for(let a=0;a<t;a++)r[a]=e(a+1,a,void 0,o&&o[a])}else if(bt(t))if(t[Symbol.iterator])r=Array.from(t,(a,l)=>e(a,l,void 0,o&&o[l]));else{const a=Object.keys(t);r=new Array(a.length);for(let l=0,u=a.length;l<u;l++){const c=a[l];r[l]=e(t[c],c,l,o&&o[l])}}else r=[];return n&&(n[i]=r),r}function Bx(t,e){for(let n=0;n<e.length;n++){const i=e[n];if(je(i))for(let r=0;r<i.length;r++)t[i[r].name]=i[r].fn;else i&&(t[i.name]=i.key?(...r)=>{const o=i.fn(...r);return o&&(o.key=i.key),o}:i.fn)}return t}function Ln(t,e,n={},i,r){if(jt.ce||jt.parent&&ko(jt.parent)&&jt.parent.ce){const u=Object.keys(n).length>0;return e!=="default"&&(n.name=e),ye(),mn(ut,null,[it("slot",n,i&&i())],u?-2:64)}let o=t[e];o&&o._c&&(o._d=!1),ye();const s=o&&x0(o(n)),a=n.key||s&&s.key,l=mn(ut,{key:(a&&!qn(a)?a:`_${e}`)+(!s&&i?"_fb":"")},s||(i?i():[]),s&&t._===1?64:-2);return l.scopeId&&(l.slotScopeIds=[l.scopeId+"-s"]),o&&o._c&&(o._d=!0),l}function x0(t){return t.some(e=>Xs(e)?!(e.type===Zi||e.type===ut&&!x0(e.children)):!0)?t:null}const lf=t=>t?H0(t)?Au(t):lf(t.parent):null,Os=en(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>lf(t.parent),$root:t=>lf(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>w0(t),$forceUpdate:t=>t.f||(t.f=()=>{Yd(t.update)}),$nextTick:t=>t.n||(t.n=Dn.bind(t.proxy)),$watch:t=>Ex.bind(t)}),nc=(t,e)=>t!==Nt&&!t.__isScriptSetup&&_t(t,e),kx={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:i,data:r,props:o,accessCache:s,type:a,appContext:l}=t;if(e[0]!=="$"){const d=s[e];if(d!==void 0)switch(d){case 1:return i[e];case 2:return r[e];case 4:return n[e];case 3:return o[e]}else{if(nc(i,e))return s[e]=1,i[e];if(r!==Nt&&_t(r,e))return s[e]=2,r[e];if(_t(o,e))return s[e]=3,o[e];if(n!==Nt&&_t(n,e))return s[e]=4,n[e];uf&&(s[e]=0)}}const u=Os[e];let c,f;if(u)return e==="$attrs"&&sn(t.attrs,"get",""),u(t);if((c=a.__cssModules)&&(c=c[e]))return c;if(n!==Nt&&_t(n,e))return s[e]=4,n[e];if(f=l.config.globalProperties,_t(f,e))return f[e]},set({_:t},e,n){const{data:i,setupState:r,ctx:o}=t;return nc(r,e)?(r[e]=n,!0):i!==Nt&&_t(i,e)?(i[e]=n,!0):_t(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(o[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:i,appContext:r,props:o,type:s}},a){let l;return!!(n[a]||t!==Nt&&a[0]!=="$"&&_t(t,a)||nc(e,a)||_t(o,a)||_t(i,a)||_t(Os,a)||_t(r.config.globalProperties,a)||(l=s.__cssModules)&&l[a])},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:_t(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function b0(){return S0().slots}function Zd(){return S0().attrs}function S0(t){const e=rr();return e.setupContext||(e.setupContext=G0(e))}function ep(t){return je(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}function zx(t,e){const n={};for(const i in t)e.includes(i)||Object.defineProperty(n,i,{enumerable:!0,get:()=>t[i]});return n}let uf=!0;function Vx(t){const e=w0(t),n=t.proxy,i=t.ctx;uf=!1,e.beforeCreate&&tp(e.beforeCreate,t,"bc");const{data:r,computed:o,methods:s,watch:a,provide:l,inject:u,created:c,beforeMount:f,mounted:d,beforeUpdate:h,updated:g,activated:_,deactivated:m,beforeDestroy:p,beforeUnmount:b,destroyed:S,unmounted:x,render:D,renderTracked:O,renderTriggered:z,errorCaptured:y,serverPrefetch:M,expose:N,inheritAttrs:C,components:P,directives:B,filters:v}=e;if(u&&Hx(u,i,null),s)for(const I in s){const V=s[I];et(V)&&(i[I]=V.bind(n))}if(r){const I=r.call(n,n);bt(I)&&(t.data=Ar(I))}if(uf=!0,o)for(const I in o){const V=o[I],W=et(V)?V.bind(n,n):et(V.get)?V.get.bind(n,n):hi,q=!et(V)&&et(V.set)?V.set.bind(n):hi,$=De({get:W,set:q});Object.defineProperty(i,I,{enumerable:!0,configurable:!0,get:()=>$.value,set:K=>$.value=K})}if(a)for(const I in a)M0(a[I],i,n,I);if(l){const I=et(l)?l.call(n):l;Reflect.ownKeys(I).forEach(V=>{Cr(V,I[V])})}c&&tp(c,t,"c");function E(I,V){je(V)?V.forEach(W=>I(W.bind(n))):V&&I(V.bind(n))}if(E(p0,f),E(On,d),E(Nx,h),E(Dx,g),E(Rx,_),E(Ix,m),E(Ox,y),E(Ux,O),E(Fx,z),E(ss,b),E(wu,x),E(Lx,M),je(N))if(N.length){const I=t.exposed||(t.exposed={});N.forEach(V=>{Object.defineProperty(I,V,{get:()=>n[V],set:W=>n[V]=W,enumerable:!0})})}else t.exposed||(t.exposed={});D&&t.render===hi&&(t.render=D),C!=null&&(t.inheritAttrs=C),P&&(t.components=P),B&&(t.directives=B),M&&f0(t)}function Hx(t,e,n=hi){je(t)&&(t=cf(t));for(const i in t){const r=t[i];let o;bt(r)?"default"in r?o=An(r.from||i,r.default,!0):o=An(r.from||i):o=An(r),Ut(o)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>o.value,set:s=>o.value=s}):e[i]=o}}function tp(t,e,n){_i(je(t)?t.map(i=>i.bind(e.proxy)):t.bind(e.proxy),e,n)}function M0(t,e,n,i){let r=i.includes(".")?c0(n,i):()=>n[i];if(Bt(t)){const o=e[t];et(o)&&ft(r,o)}else if(et(t))ft(r,t.bind(n));else if(bt(t))if(je(t))t.forEach(o=>M0(o,e,n,i));else{const o=et(t.handler)?t.handler.bind(n):e[t.handler];et(o)&&ft(r,o,t)}}function w0(t){const e=t.type,{mixins:n,extends:i}=e,{mixins:r,optionsCache:o,config:{optionMergeStrategies:s}}=t.appContext,a=o.get(e);let l;return a?l=a:!r.length&&!n&&!i?l=e:(l={},r.length&&r.forEach(u=>zl(l,u,s,!0)),zl(l,e,s)),bt(e)&&o.set(e,l),l}function zl(t,e,n,i=!1){const{mixins:r,extends:o}=e;o&&zl(t,o,n,!0),r&&r.forEach(s=>zl(t,s,n,!0));for(const s in e)if(!(i&&s==="expose")){const a=$x[s]||n&&n[s];t[s]=a?a(t[s],e[s]):e[s]}return t}const $x={data:np,props:ip,emits:ip,methods:ws,computed:ws,beforeCreate:ln,created:ln,beforeMount:ln,mounted:ln,beforeUpdate:ln,updated:ln,beforeDestroy:ln,beforeUnmount:ln,destroyed:ln,unmounted:ln,activated:ln,deactivated:ln,errorCaptured:ln,serverPrefetch:ln,components:ws,directives:ws,watch:Wx,provide:np,inject:Gx};function np(t,e){return e?t?function(){return en(et(t)?t.call(this,this):t,et(e)?e.call(this,this):e)}:e:t}function Gx(t,e){return ws(cf(t),cf(e))}function cf(t){if(je(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function ln(t,e){return t?[...new Set([].concat(t,e))]:e}function ws(t,e){return t?en(Object.create(null),t,e):e}function ip(t,e){return t?je(t)&&je(e)?[...new Set([...t,...e])]:en(Object.create(null),ep(t),ep(e??{})):e}function Wx(t,e){if(!t)return e;if(!e)return t;const n=en(Object.create(null),t);for(const i in e)n[i]=ln(t[i],e[i]);return n}function E0(){return{app:null,config:{isNativeTag:Ig,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Xx=0;function Yx(t,e){return function(i,r=null){et(i)||(i=en({},i)),r!=null&&!bt(r)&&(r=null);const o=E0(),s=new WeakSet,a=[];let l=!1;const u=o.app={_uid:Xx++,_component:i,_props:r,_container:null,_context:o,_instance:null,version:wb,get config(){return o.config},set config(c){},use(c,...f){return s.has(c)||(c&&et(c.install)?(s.add(c),c.install(u,...f)):et(c)&&(s.add(c),c(u,...f))),u},mixin(c){return o.mixins.includes(c)||o.mixins.push(c),u},component(c,f){return f?(o.components[c]=f,u):o.components[c]},directive(c,f){return f?(o.directives[c]=f,u):o.directives[c]},mount(c,f,d){if(!l){const h=u._ceVNode||it(i,r);return h.appContext=o,d===!0?d="svg":d===!1&&(d=void 0),t(h,c,d),l=!0,u._container=c,c.__vue_app__=u,Au(h.component)}},onUnmount(c){a.push(c)},unmount(){l&&(_i(a,u._instance,16),t(null,u._container),delete u._container.__vue_app__)},provide(c,f){return o.provides[c]=f,u},runWithContext(c){const f=io;io=u;try{return c()}finally{io=f}}};return u}}let io=null;const qx=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${Fn(e)}Modifiers`]||t[`${po(e)}Modifiers`];function Kx(t,e,...n){if(t.isUnmounted)return;const i=t.vnode.props||Nt;let r=n;const o=e.startsWith("update:"),s=o&&qx(i,e.slice(7));s&&(s.trim&&(r=n.map(c=>Bt(c)?c.trim():c)),s.number&&(r=n.map(Ly)));let a,l=i[a=Zu(e)]||i[a=Zu(Fn(e))];!l&&o&&(l=i[a=Zu(po(e))]),l&&_i(l,t,6,r);const u=i[a+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,_i(u,t,6,r)}}const Zx=new WeakMap;function T0(t,e,n=!1){const i=n?Zx:e.emitsCache,r=i.get(t);if(r!==void 0)return r;const o=t.emits;let s={},a=!1;if(!et(t)){const l=u=>{const c=T0(u,e,!0);c&&(a=!0,en(s,c))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!o&&!a?(bt(t)&&i.set(t,null),null):(je(o)?o.forEach(l=>s[l]=null):en(s,o),bt(t)&&i.set(t,s),s)}function Eu(t,e){return!t||!du(e)?!1:(e=e.slice(2).replace(/Once$/,""),_t(t,e[0].toLowerCase()+e.slice(1))||_t(t,po(e))||_t(t,e))}function rp(t){const{type:e,vnode:n,proxy:i,withProxy:r,propsOptions:[o],slots:s,attrs:a,emit:l,render:u,renderCache:c,props:f,data:d,setupState:h,ctx:g,inheritAttrs:_}=t,m=Bl(t);let p,b;try{if(n.shapeFlag&4){const x=r||i,D=x;p=oi(u.call(D,x,c,f,h,d,g)),b=a}else{const x=e;p=oi(x.length>1?x(f,{attrs:a,slots:s,emit:l}):x(f,null)),b=e.props?a:jx(a)}}catch(x){Bs.length=0,Su(x,t,1),p=it(Zi)}let S=p;if(b&&_!==!1){const x=Object.keys(b),{shapeFlag:D}=S;x.length&&D&7&&(o&&x.some(kd)&&(b=Jx(b,o)),S=Ko(S,b,!1,!0))}return n.dirs&&(S=Ko(S,null,!1,!0),S.dirs=S.dirs?S.dirs.concat(n.dirs):n.dirs),n.transition&&Kd(S,n.transition),p=S,Bl(m),p}const jx=t=>{let e;for(const n in t)(n==="class"||n==="style"||du(n))&&((e||(e={}))[n]=t[n]);return e},Jx=(t,e)=>{const n={};for(const i in t)(!kd(i)||!(i.slice(9)in e))&&(n[i]=t[i]);return n};function Qx(t,e,n){const{props:i,children:r,component:o}=t,{props:s,children:a,patchFlag:l}=e,u=o.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return i?op(i,s,u):!!s;if(l&8){const c=e.dynamicProps;for(let f=0;f<c.length;f++){const d=c[f];if(A0(s,i,d)&&!Eu(u,d))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:i===s?!1:i?s?op(i,s,u):!0:!!s;return!1}function op(t,e,n){const i=Object.keys(e);if(i.length!==Object.keys(t).length)return!0;for(let r=0;r<i.length;r++){const o=i[r];if(A0(e,t,o)&&!Eu(n,o))return!0}return!1}function A0(t,e,n){const i=t[n],r=e[n];return n==="style"&&bt(i)&&bt(r)?!Vd(i,r):i!==r}function eb({vnode:t,parent:e},n){for(;e;){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===t&&(i.el=t.el),i===t)(t=e.vnode).el=n,e=e.parent;else break}}const C0={},R0=()=>Object.create(C0),I0=t=>Object.getPrototypeOf(t)===C0;function tb(t,e,n,i=!1){const r={},o=R0();t.propsDefaults=Object.create(null),P0(t,e,r,o);for(const s in t.propsOptions[0])s in r||(r[s]=void 0);n?t.props=i?r:lx(r):t.type.props?t.props=r:t.props=o,t.attrs=o}function nb(t,e,n,i){const{props:r,attrs:o,vnode:{patchFlag:s}}=t,a=mt(r),[l]=t.propsOptions;let u=!1;if((i||s>0)&&!(s&16)){if(s&8){const c=t.vnode.dynamicProps;for(let f=0;f<c.length;f++){let d=c[f];if(Eu(t.emitsOptions,d))continue;const h=e[d];if(l)if(_t(o,d))h!==o[d]&&(o[d]=h,u=!0);else{const g=Fn(d);r[g]=ff(l,a,g,h,t,!1)}else h!==o[d]&&(o[d]=h,u=!0)}}}else{P0(t,e,r,o)&&(u=!0);let c;for(const f in a)(!e||!_t(e,f)&&((c=po(f))===f||!_t(e,c)))&&(l?n&&(n[f]!==void 0||n[c]!==void 0)&&(r[f]=ff(l,a,f,void 0,t,!0)):delete r[f]);if(o!==a)for(const f in o)(!e||!_t(e,f))&&(delete o[f],u=!0)}u&&Fi(t.attrs,"set","")}function P0(t,e,n,i){const[r,o]=t.propsOptions;let s=!1,a;if(e)for(let l in e){if(Ns(l))continue;const u=e[l];let c;r&&_t(r,c=Fn(l))?!o||!o.includes(c)?n[c]=u:(a||(a={}))[c]=u:Eu(t.emitsOptions,l)||(!(l in i)||u!==i[l])&&(i[l]=u,s=!0)}if(o){const l=mt(n),u=a||Nt;for(let c=0;c<o.length;c++){const f=o[c];n[f]=ff(r,l,f,u[f],t,!_t(u,f))}}return s}function ff(t,e,n,i,r,o){const s=t[n];if(s!=null){const a=_t(s,"default");if(a&&i===void 0){const l=s.default;if(s.type!==Function&&!s.skipFactory&&et(l)){const{propsDefaults:u}=r;if(n in u)i=u[n];else{const c=ma(r);i=u[n]=l.call(null,e),c()}}else i=l;r.ce&&r.ce._setProp(n,i)}s[0]&&(o&&!a?i=!1:s[1]&&(i===""||i===po(n))&&(i=!0))}return i}const ib=new WeakMap;function N0(t,e,n=!1){const i=n?ib:e.propsCache,r=i.get(t);if(r)return r;const o=t.props,s={},a=[];let l=!1;if(!et(t)){const c=f=>{l=!0;const[d,h]=N0(f,e,!0);en(s,d),h&&a.push(...h)};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}if(!o&&!l)return bt(t)&&i.set(t,Uo),Uo;if(je(o))for(let c=0;c<o.length;c++){const f=Fn(o[c]);sp(f)&&(s[f]=Nt)}else if(o)for(const c in o){const f=Fn(c);if(sp(f)){const d=o[c],h=s[f]=je(d)||et(d)?{type:d}:en({},d),g=h.type;let _=!1,m=!0;if(je(g))for(let p=0;p<g.length;++p){const b=g[p],S=et(b)&&b.name;if(S==="Boolean"){_=!0;break}else S==="String"&&(m=!1)}else _=et(g)&&g.name==="Boolean";h[0]=_,h[1]=m,(_||_t(h,"default"))&&a.push(f)}}const u=[s,a];return bt(t)&&i.set(t,u),u}function sp(t){return t[0]!=="$"&&!Ns(t)}const jd=t=>t==="_"||t==="_ctx"||t==="$stable",Jd=t=>je(t)?t.map(oi):[oi(t)],rb=(t,e,n)=>{if(e._n)return e;const i=En((...r)=>Jd(e(...r)),n);return i._c=!1,i},D0=(t,e,n)=>{const i=t._ctx;for(const r in t){if(jd(r))continue;const o=t[r];if(et(o))e[r]=rb(r,o,i);else if(o!=null){const s=Jd(o);e[r]=()=>s}}},L0=(t,e)=>{const n=Jd(e);t.slots.default=()=>n},F0=(t,e,n)=>{for(const i in e)(n||!jd(i))&&(t[i]=e[i])},ob=(t,e,n)=>{const i=t.slots=R0();if(t.vnode.shapeFlag&32){const r=e._;r?(F0(i,e,n),n&&Fg(i,"_",r,!0)):D0(e,i)}else e&&L0(t,e)},sb=(t,e,n)=>{const{vnode:i,slots:r}=t;let o=!0,s=Nt;if(i.shapeFlag&32){const a=e._;a?n&&a===1?o=!1:F0(r,e,n):(o=!e.$stable,D0(e,r)),s=e}else e&&(L0(t,e),s={default:1});if(o)for(const a in r)!jd(a)&&s[a]==null&&delete r[a]},vn=fb;function ab(t){return lb(t)}function lb(t,e){const n=gu();n.__VUE__=!0;const{insert:i,remove:r,patchProp:o,createElement:s,createText:a,createComment:l,setText:u,setElementText:c,parentNode:f,nextSibling:d,setScopeId:h=hi,insertStaticContent:g}=t,_=(H,X,L,F=null,U=null,G=null,T=void 0,te=null,Q=!!X.dynamicChildren)=>{if(H===X)return;H&&!fs(H,X)&&(F=ne(H),K(H,U,G,!0),H=null),X.patchFlag===-2&&(Q=!1,X.dynamicChildren=null);const{type:J,ref:ie,shapeFlag:R}=X;switch(J){case Tu:m(H,X,L,F);break;case Zi:p(H,X,L,F);break;case rc:H==null&&b(X,L,F,T);break;case ut:P(H,X,L,F,U,G,T,te,Q);break;default:R&1?D(H,X,L,F,U,G,T,te,Q):R&6?B(H,X,L,F,U,G,T,te,Q):(R&64||R&128)&&J.process(H,X,L,F,U,G,T,te,Q,be)}ie!=null&&U?Us(ie,H&&H.ref,G,X||H,!X):ie==null&&H&&H.ref!=null&&Us(H.ref,null,G,H,!0)},m=(H,X,L,F)=>{if(H==null)i(X.el=a(X.children),L,F);else{const U=X.el=H.el;X.children!==H.children&&u(U,X.children)}},p=(H,X,L,F)=>{H==null?i(X.el=l(X.children||""),L,F):X.el=H.el},b=(H,X,L,F)=>{[H.el,H.anchor]=g(H.children,X,L,F,H.el,H.anchor)},S=({el:H,anchor:X},L,F)=>{let U;for(;H&&H!==X;)U=d(H),i(H,L,F),H=U;i(X,L,F)},x=({el:H,anchor:X})=>{let L;for(;H&&H!==X;)L=d(H),r(H),H=L;r(X)},D=(H,X,L,F,U,G,T,te,Q)=>{if(X.type==="svg"?T="svg":X.type==="math"&&(T="mathml"),H==null)O(X,L,F,U,G,T,te,Q);else{const J=H.el&&H.el._isVueCE?H.el:null;try{J&&J._beginPatch(),M(H,X,U,G,T,te,Q)}finally{J&&J._endPatch()}}},O=(H,X,L,F,U,G,T,te)=>{let Q,J;const{props:ie,shapeFlag:R,transition:w,dirs:Y}=H;if(Q=H.el=s(H.type,G,ie&&ie.is,ie),R&8?c(Q,H.children):R&16&&y(H.children,Q,null,F,U,ic(H,G),T,te),Y&&Fr(H,null,F,"created"),z(Q,H,H.scopeId,T,F),ie){for(const de in ie)de!=="value"&&!Ns(de)&&o(Q,de,null,ie[de],G,F);"value"in ie&&o(Q,"value",null,ie.value,G),(J=ie.onVnodeBeforeMount)&&ei(J,F,H)}Y&&Fr(H,null,F,"beforeMount");const re=ub(U,w);re&&w.beforeEnter(Q),i(Q,X,L),((J=ie&&ie.onVnodeMounted)||re||Y)&&vn(()=>{J&&ei(J,F,H),re&&w.enter(Q),Y&&Fr(H,null,F,"mounted")},U)},z=(H,X,L,F,U)=>{if(L&&h(H,L),F)for(let G=0;G<F.length;G++)h(H,F[G]);if(U){let G=U.subTree;if(X===G||k0(G.type)&&(G.ssContent===X||G.ssFallback===X)){const T=U.vnode;z(H,T,T.scopeId,T.slotScopeIds,U.parent)}}},y=(H,X,L,F,U,G,T,te,Q=0)=>{for(let J=Q;J<H.length;J++){const ie=H[J]=te?Li(H[J]):oi(H[J]);_(null,ie,X,L,F,U,G,T,te)}},M=(H,X,L,F,U,G,T)=>{const te=X.el=H.el;let{patchFlag:Q,dynamicChildren:J,dirs:ie}=X;Q|=H.patchFlag&16;const R=H.props||Nt,w=X.props||Nt;let Y;if(L&&Ur(L,!1),(Y=w.onVnodeBeforeUpdate)&&ei(Y,L,X,H),ie&&Fr(X,H,L,"beforeUpdate"),L&&Ur(L,!0),(R.innerHTML&&w.innerHTML==null||R.textContent&&w.textContent==null)&&c(te,""),J?N(H.dynamicChildren,J,te,L,F,ic(X,U),G):T||V(H,X,te,null,L,F,ic(X,U),G,!1),Q>0){if(Q&16)C(te,R,w,L,U);else if(Q&2&&R.class!==w.class&&o(te,"class",null,w.class,U),Q&4&&o(te,"style",R.style,w.style,U),Q&8){const re=X.dynamicProps;for(let de=0;de<re.length;de++){const oe=re[de],Ie=R[oe],Me=w[oe];(Me!==Ie||oe==="value")&&o(te,oe,Ie,Me,U,L)}}Q&1&&H.children!==X.children&&c(te,X.children)}else!T&&J==null&&C(te,R,w,L,U);((Y=w.onVnodeUpdated)||ie)&&vn(()=>{Y&&ei(Y,L,X,H),ie&&Fr(X,H,L,"updated")},F)},N=(H,X,L,F,U,G,T)=>{for(let te=0;te<X.length;te++){const Q=H[te],J=X[te],ie=Q.el&&(Q.type===ut||!fs(Q,J)||Q.shapeFlag&198)?f(Q.el):L;_(Q,J,ie,null,F,U,G,T,!0)}},C=(H,X,L,F,U)=>{if(X!==L){if(X!==Nt)for(const G in X)!Ns(G)&&!(G in L)&&o(H,G,X[G],null,U,F);for(const G in L){if(Ns(G))continue;const T=L[G],te=X[G];T!==te&&G!=="value"&&o(H,G,te,T,U,F)}"value"in L&&o(H,"value",X.value,L.value,U)}},P=(H,X,L,F,U,G,T,te,Q)=>{const J=X.el=H?H.el:a(""),ie=X.anchor=H?H.anchor:a("");let{patchFlag:R,dynamicChildren:w,slotScopeIds:Y}=X;Y&&(te=te?te.concat(Y):Y),H==null?(i(J,L,F),i(ie,L,F),y(X.children||[],L,ie,U,G,T,te,Q)):R>0&&R&64&&w&&H.dynamicChildren&&H.dynamicChildren.length===w.length?(N(H.dynamicChildren,w,L,U,G,T,te),(X.key!=null||U&&X===U.subTree)&&U0(H,X,!0)):V(H,X,L,ie,U,G,T,te,Q)},B=(H,X,L,F,U,G,T,te,Q)=>{X.slotScopeIds=te,H==null?X.shapeFlag&512?U.ctx.activate(X,L,F,T,Q):v(X,L,F,U,G,T,Q):A(H,X,Q)},v=(H,X,L,F,U,G,T)=>{const te=H.component=vb(H,F,U);if(d0(H)&&(te.ctx.renderer=be),_b(te,!1,T),te.asyncDep){if(U&&U.registerDep(te,E,T),!H.el){const Q=te.subTree=it(Zi);p(null,Q,X,L),H.placeholder=Q.el}}else E(te,H,X,L,U,G,T)},A=(H,X,L)=>{const F=X.component=H.component;if(Qx(H,X,L))if(F.asyncDep&&!F.asyncResolved){I(F,X,L);return}else F.next=X,F.update();else X.el=H.el,F.vnode=X},E=(H,X,L,F,U,G,T)=>{const te=()=>{if(H.isMounted){let{next:R,bu:w,u:Y,parent:re,vnode:de}=H;{const We=O0(H);if(We){R&&(R.el=de.el,I(H,R,T)),We.asyncDep.then(()=>{vn(()=>{H.isUnmounted||J()},U)});return}}let oe=R,Ie;Ur(H,!1),R?(R.el=de.el,I(H,R,T)):R=de,w&&ju(w),(Ie=R.props&&R.props.onVnodeBeforeUpdate)&&ei(Ie,re,R,de),Ur(H,!0);const Me=rp(H),ze=H.subTree;H.subTree=Me,_(ze,Me,f(ze.el),ne(ze),H,U,G),R.el=Me.el,oe===null&&eb(H,Me.el),Y&&vn(Y,U),(Ie=R.props&&R.props.onVnodeUpdated)&&vn(()=>ei(Ie,re,R,de),U)}else{let R;const{el:w,props:Y}=X,{bm:re,m:de,parent:oe,root:Ie,type:Me}=H,ze=ko(X);Ur(H,!1),re&&ju(re),!ze&&(R=Y&&Y.onVnodeBeforeMount)&&ei(R,oe,X),Ur(H,!0);{Ie.ce&&Ie.ce._hasShadowRoot()&&Ie.ce._injectChildStyle(Me);const We=H.subTree=rp(H);_(null,We,L,F,H,U,G),X.el=We.el}if(de&&vn(de,U),!ze&&(R=Y&&Y.onVnodeMounted)){const We=X;vn(()=>ei(R,oe,We),U)}(X.shapeFlag&256||oe&&ko(oe.vnode)&&oe.vnode.shapeFlag&256)&&H.a&&vn(H.a,U),H.isMounted=!0,X=L=F=null}};H.scope.on();const Q=H.effect=new zg(te);H.scope.off();const J=H.update=Q.run.bind(Q),ie=H.job=Q.runIfDirty.bind(Q);ie.i=H,ie.id=H.uid,Q.scheduler=()=>Yd(ie),Ur(H,!0),J()},I=(H,X,L)=>{X.component=H;const F=H.vnode.props;H.vnode=X,H.next=null,nb(H,X.props,F,L),sb(H,X.children,L),Yi(),Zh(H),qi()},V=(H,X,L,F,U,G,T,te,Q=!1)=>{const J=H&&H.children,ie=H?H.shapeFlag:0,R=X.children,{patchFlag:w,shapeFlag:Y}=X;if(w>0){if(w&128){q(J,R,L,F,U,G,T,te,Q);return}else if(w&256){W(J,R,L,F,U,G,T,te,Q);return}}Y&8?(ie&16&&Z(J,U,G),R!==J&&c(L,R)):ie&16?Y&16?q(J,R,L,F,U,G,T,te,Q):Z(J,U,G,!0):(ie&8&&c(L,""),Y&16&&y(R,L,F,U,G,T,te,Q))},W=(H,X,L,F,U,G,T,te,Q)=>{H=H||Uo,X=X||Uo;const J=H.length,ie=X.length,R=Math.min(J,ie);let w;for(w=0;w<R;w++){const Y=X[w]=Q?Li(X[w]):oi(X[w]);_(H[w],Y,L,null,U,G,T,te,Q)}J>ie?Z(H,U,G,!0,!1,R):y(X,L,F,U,G,T,te,Q,R)},q=(H,X,L,F,U,G,T,te,Q)=>{let J=0;const ie=X.length;let R=H.length-1,w=ie-1;for(;J<=R&&J<=w;){const Y=H[J],re=X[J]=Q?Li(X[J]):oi(X[J]);if(fs(Y,re))_(Y,re,L,null,U,G,T,te,Q);else break;J++}for(;J<=R&&J<=w;){const Y=H[R],re=X[w]=Q?Li(X[w]):oi(X[w]);if(fs(Y,re))_(Y,re,L,null,U,G,T,te,Q);else break;R--,w--}if(J>R){if(J<=w){const Y=w+1,re=Y<ie?X[Y].el:F;for(;J<=w;)_(null,X[J]=Q?Li(X[J]):oi(X[J]),L,re,U,G,T,te,Q),J++}}else if(J>w)for(;J<=R;)K(H[J],U,G,!0),J++;else{const Y=J,re=J,de=new Map;for(J=re;J<=w;J++){const Pe=X[J]=Q?Li(X[J]):oi(X[J]);Pe.key!=null&&de.set(Pe.key,J)}let oe,Ie=0;const Me=w-re+1;let ze=!1,We=0;const we=new Array(Me);for(J=0;J<Me;J++)we[J]=0;for(J=Y;J<=R;J++){const Pe=H[J];if(Ie>=Me){K(Pe,U,G,!0);continue}let Ue;if(Pe.key!=null)Ue=de.get(Pe.key);else for(oe=re;oe<=w;oe++)if(we[oe-re]===0&&fs(Pe,X[oe])){Ue=oe;break}Ue===void 0?K(Pe,U,G,!0):(we[Ue-re]=J+1,Ue>=We?We=Ue:ze=!0,_(Pe,X[Ue],L,null,U,G,T,te,Q),Ie++)}const Te=ze?cb(we):Uo;for(oe=Te.length-1,J=Me-1;J>=0;J--){const Pe=re+J,Ue=X[Pe],Oe=X[Pe+1],rt=Pe+1<ie?Oe.el||B0(Oe):F;we[J]===0?_(null,Ue,L,rt,U,G,T,te,Q):ze&&(oe<0||J!==Te[oe]?$(Ue,L,rt,2):oe--)}}},$=(H,X,L,F,U=null)=>{const{el:G,type:T,transition:te,children:Q,shapeFlag:J}=H;if(J&6){$(H.component.subTree,X,L,F);return}if(J&128){H.suspense.move(X,L,F);return}if(J&64){T.move(H,X,L,be);return}if(T===ut){i(G,X,L);for(let R=0;R<Q.length;R++)$(Q[R],X,L,F);i(H.anchor,X,L);return}if(T===rc){S(H,X,L);return}if(F!==2&&J&1&&te)if(F===0)te.beforeEnter(G),i(G,X,L),vn(()=>te.enter(G),U);else{const{leave:R,delayLeave:w,afterLeave:Y}=te,re=()=>{H.ctx.isUnmounted?r(G):i(G,X,L)},de=()=>{G._isLeaving&&G[Cx](!0),R(G,()=>{re(),Y&&Y()})};w?w(G,re,de):de()}else i(G,X,L)},K=(H,X,L,F=!1,U=!1)=>{const{type:G,props:T,ref:te,children:Q,dynamicChildren:J,shapeFlag:ie,patchFlag:R,dirs:w,cacheIndex:Y}=H;if(R===-2&&(U=!1),te!=null&&(Yi(),Us(te,null,L,H,!0),qi()),Y!=null&&(X.renderCache[Y]=void 0),ie&256){X.ctx.deactivate(H);return}const re=ie&1&&w,de=!ko(H);let oe;if(de&&(oe=T&&T.onVnodeBeforeUnmount)&&ei(oe,X,H),ie&6)pe(H.component,L,F);else{if(ie&128){H.suspense.unmount(L,F);return}re&&Fr(H,null,X,"beforeUnmount"),ie&64?H.type.remove(H,X,L,be,F):J&&!J.hasOnce&&(G!==ut||R>0&&R&64)?Z(J,X,L,!1,!0):(G===ut&&R&384||!U&&ie&16)&&Z(Q,X,L),F&&ae(H)}(de&&(oe=T&&T.onVnodeUnmounted)||re)&&vn(()=>{oe&&ei(oe,X,H),re&&Fr(H,null,X,"unmounted")},L)},ae=H=>{const{type:X,el:L,anchor:F,transition:U}=H;if(X===ut){ve(L,F);return}if(X===rc){x(H);return}const G=()=>{r(L),U&&!U.persisted&&U.afterLeave&&U.afterLeave()};if(H.shapeFlag&1&&U&&!U.persisted){const{leave:T,delayLeave:te}=U,Q=()=>T(L,G);te?te(H.el,G,Q):Q()}else G()},ve=(H,X)=>{let L;for(;H!==X;)L=d(H),r(H),H=L;r(X)},pe=(H,X,L)=>{const{bum:F,scope:U,job:G,subTree:T,um:te,m:Q,a:J}=H;ap(Q),ap(J),F&&ju(F),U.stop(),G&&(G.flags|=8,K(T,H,X,L)),te&&vn(te,X),vn(()=>{H.isUnmounted=!0},X)},Z=(H,X,L,F=!1,U=!1,G=0)=>{for(let T=G;T<H.length;T++)K(H[T],X,L,F,U)},ne=H=>{if(H.shapeFlag&6)return ne(H.component.subTree);if(H.shapeFlag&128)return H.suspense.next();const X=d(H.anchor||H.el),L=X&&X[Tx];return L?d(L):X};let le=!1;const xe=(H,X,L)=>{let F;H==null?X._vnode&&(K(X._vnode,null,null,!0),F=X._vnode.component):_(X._vnode||null,H,X,null,null,null,L),X._vnode=H,le||(le=!0,Zh(F),s0(),le=!1)},be={p:_,um:K,m:$,r:ae,mt:v,mc:y,pc:V,pbc:N,n:ne,o:t};return{render:xe,hydrate:void 0,createApp:Yx(xe)}}function ic({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Ur({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function ub(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function U0(t,e,n=!1){const i=t.children,r=e.children;if(je(i)&&je(r))for(let o=0;o<i.length;o++){const s=i[o];let a=r[o];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[o]=Li(r[o]),a.el=s.el),!n&&a.patchFlag!==-2&&U0(s,a)),a.type===Tu&&(a.patchFlag===-1&&(a=r[o]=Li(a)),a.el=s.el),a.type===Zi&&!a.el&&(a.el=s.el)}}function cb(t){const e=t.slice(),n=[0];let i,r,o,s,a;const l=t.length;for(i=0;i<l;i++){const u=t[i];if(u!==0){if(r=n[n.length-1],t[r]<u){e[i]=r,n.push(i);continue}for(o=0,s=n.length-1;o<s;)a=o+s>>1,t[n[a]]<u?o=a+1:s=a;u<t[n[o]]&&(o>0&&(e[i]=n[o-1]),n[o]=i)}}for(o=n.length,s=n[o-1];o-- >0;)n[o]=s,s=e[s];return n}function O0(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:O0(e)}function ap(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}function B0(t){if(t.placeholder)return t.placeholder;const e=t.component;return e?B0(e.subTree):null}const k0=t=>t.__isSuspense;function fb(t,e){e&&e.pendingBranch?je(t)?e.effects.push(...t):e.effects.push(t):bx(t)}const ut=Symbol.for("v-fgt"),Tu=Symbol.for("v-txt"),Zi=Symbol.for("v-cmt"),rc=Symbol.for("v-stc"),Bs=[];let hn=null;function ye(t=!1){Bs.push(hn=t?null:[])}function db(){Bs.pop(),hn=Bs[Bs.length-1]||null}let qo=1;function Vl(t,e=!1){qo+=t,t<0&&hn&&e&&(hn.hasOnce=!0)}function z0(t){return t.dynamicChildren=qo>0?hn||Uo:null,db(),qo>0&&hn&&hn.push(t),t}function Se(t,e,n,i,r,o){return z0(fe(t,e,n,i,r,o,!0))}function mn(t,e,n,i,r){return z0(it(t,e,n,i,r,!0))}function Xs(t){return t?t.__v_isVNode===!0:!1}function fs(t,e){return t.type===e.type&&t.key===e.key}const V0=({key:t})=>t??null,ml=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Bt(t)||Ut(t)||et(t)?{i:jt,r:t,k:e,f:!!n}:t:null);function fe(t,e=null,n=null,i=0,r=null,o=t===ut?0:1,s=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&V0(e),ref:e&&ml(e),scopeId:l0,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:o,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:jt};return a?(eh(l,n),o&128&&t.normalize(l)):n&&(l.shapeFlag|=Bt(n)?8:16),qo>0&&!s&&hn&&(l.patchFlag>0||o&6)&&l.patchFlag!==32&&hn.push(l),l}const it=hb;function hb(t,e=null,n=null,i=0,r=null,o=!1){if((!t||t===v0)&&(t=Zi),Xs(t)){const a=Ko(t,e,!0);return n&&eh(a,n),qo>0&&!o&&hn&&(a.shapeFlag&6?hn[hn.indexOf(t)]=a:hn.push(a)),a.patchFlag=-2,a}if(Sb(t)&&(t=t.__vccOpts),e){e=pb(e);let{class:a,style:l}=e;a&&!Bt(a)&&(e.class=Dt(a)),bt(l)&&(bu(l)&&!je(l)&&(l=en({},l)),e.style=yt(l))}const s=Bt(t)?1:k0(t)?128:Ax(t)?64:bt(t)?4:et(t)?2:0;return fe(t,e,n,i,r,s,o,!0)}function pb(t){return t?bu(t)||I0(t)?en({},t):t:null}function Ko(t,e,n=!1,i=!1){const{props:r,ref:o,patchFlag:s,children:a,transition:l}=t,u=e?Ys(r||{},e):r,c={__v_isVNode:!0,__v_skip:!0,type:t.type,props:u,key:u&&V0(u),ref:e&&e.ref?n&&o?je(o)?o.concat(ml(e)):[o,ml(e)]:ml(e):o,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==ut?s===-1?16:s|16:s,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Ko(t.ssContent),ssFallback:t.ssFallback&&Ko(t.ssFallback),placeholder:t.placeholder,el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&i&&Kd(c,l.clone(c)),c}function Qd(t=" ",e=0){return it(Tu,null,t,e)}function Je(t="",e=!1){return e?(ye(),mn(Zi,null,t)):it(Zi,null,t)}function oi(t){return t==null||typeof t=="boolean"?it(Zi):je(t)?it(ut,null,t.slice()):Xs(t)?Li(t):it(Tu,null,String(t))}function Li(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Ko(t)}function eh(t,e){let n=0;const{shapeFlag:i}=t;if(e==null)e=null;else if(je(e))n=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),eh(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!I0(e)?e._ctx=jt:r===3&&jt&&(jt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else et(e)?(e={default:e,_ctx:jt},n=32):(e=String(e),i&64?(n=16,e=[Qd(e)]):n=8);t.children=e,t.shapeFlag|=n}function Ys(...t){const e={};for(let n=0;n<t.length;n++){const i=t[n];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=Dt([e.class,i.class]));else if(r==="style")e.style=yt([e.style,i.style]);else if(du(r)){const o=e[r],s=i[r];s&&o!==s&&!(je(o)&&o.includes(s))&&(e[r]=o?[].concat(o,s):s)}else r!==""&&(e[r]=i[r])}return e}function ei(t,e,n,i=null){_i(t,e,7,[n,i])}const mb=E0();let gb=0;function vb(t,e,n){const i=t.type,r=(e?e.appContext:t.appContext)||mb,o={uid:gb++,vnode:t,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new kg(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:N0(i,r),emitsOptions:T0(i,r),emit:null,emitted:null,propsDefaults:Nt,inheritAttrs:i.inheritAttrs,ctx:Nt,data:Nt,props:Nt,attrs:Nt,slots:Nt,refs:Nt,setupState:Nt,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return o.ctx={_:o},o.root=e?e.root:o,o.emit=Kx.bind(null,o),t.ce&&t.ce(o),o}let an=null;const rr=()=>an||jt;let Hl,df;{const t=gu(),e=(n,i)=>{let r;return(r=t[n])||(r=t[n]=[]),r.push(i),o=>{r.length>1?r.forEach(s=>s(o)):r[0](o)}};Hl=e("__VUE_INSTANCE_SETTERS__",n=>an=n),df=e("__VUE_SSR_SETTERS__",n=>qs=n)}const ma=t=>{const e=an;return Hl(t),t.scope.on(),()=>{t.scope.off(),Hl(e)}},lp=()=>{an&&an.scope.off(),Hl(null)};function H0(t){return t.vnode.shapeFlag&4}let qs=!1;function _b(t,e=!1,n=!1){e&&df(e);const{props:i,children:r}=t.vnode,o=H0(t);tb(t,i,o,e),ob(t,r,n||e);const s=o?yb(t,e):void 0;return e&&df(!1),s}function yb(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,kx);const{setup:i}=n;if(i){Yi();const r=t.setupContext=i.length>1?G0(t):null,o=ma(t),s=pa(i,t,0,[t.props,r]),a=Ng(s);if(qi(),o(),(a||t.sp)&&!ko(t)&&f0(t),a){if(s.then(lp,lp),e)return s.then(l=>{up(t,l)}).catch(l=>{Su(l,t,0)});t.asyncDep=s}else up(t,s)}else $0(t)}function up(t,e,n){et(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:bt(e)&&(t.setupState=t0(e)),$0(t)}function $0(t,e,n){const i=t.type;t.render||(t.render=i.render||hi);{const r=ma(t);Yi();try{Vx(t)}finally{qi(),r()}}}const xb={get(t,e){return sn(t,"get",""),t[e]}};function G0(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,xb),slots:t.slots,emit:t.emit,expose:e}}function Au(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(t0(no(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Os)return Os[n](t)},has(e,n){return n in e||n in Os}})):t.proxy}function bb(t,e=!0){return et(t)?t.displayName||t.name:t.name||e&&t.__name}function Sb(t){return et(t)&&"__vccOpts"in t}const De=(t,e)=>gx(t,e,qs);function xt(t,e,n){try{Vl(-1);const i=arguments.length;return i===2?bt(e)&&!je(e)?Xs(e)?it(t,null,[e]):it(t,e):it(t,null,e):(i>3?n=Array.prototype.slice.call(arguments,2):i===3&&Xs(n)&&(n=[n]),it(t,e,n))}finally{Vl(1)}}function Mb(t,e){const n=t.memo;if(n.length!=e.length)return!1;for(let i=0;i<n.length;i++)if(Hi(n[i],e[i]))return!1;return qo>0&&hn&&hn.push(t),!0}const wb="3.5.29";let hf;const cp=typeof window<"u"&&window.trustedTypes;if(cp)try{hf=cp.createPolicy("vue",{createHTML:t=>t})}catch{}const W0=hf?t=>hf.createHTML(t):t=>t,Eb="http://www.w3.org/2000/svg",Tb="http://www.w3.org/1998/Math/MathML",Di=typeof document<"u"?document:null,fp=Di&&Di.createElement("template"),Ab={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,i)=>{const r=e==="svg"?Di.createElementNS(Eb,t):e==="mathml"?Di.createElementNS(Tb,t):n?Di.createElement(t,{is:n}):Di.createElement(t);return t==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:t=>Di.createTextNode(t),createComment:t=>Di.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Di.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,i,r,o){const s=n?n.previousSibling:e.lastChild;if(r&&(r===o||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===o||!(r=r.nextSibling)););else{fp.innerHTML=W0(i==="svg"?`<svg>${t}</svg>`:i==="mathml"?`<math>${t}</math>`:t);const a=fp.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[s?s.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},Cb=Symbol("_vtc");function Rb(t,e,n){const i=t[Cb];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const $l=Symbol("_vod"),X0=Symbol("_vsh"),pf={name:"show",beforeMount(t,{value:e},{transition:n}){t[$l]=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):ds(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:i}){!e!=!n&&(i?e?(i.beforeEnter(t),ds(t,!0),i.enter(t)):i.leave(t,()=>{ds(t,!1)}):ds(t,e))},beforeUnmount(t,{value:e}){ds(t,e)}};function ds(t,e){t.style.display=e?t[$l]:"none",t[X0]=!e}const Ib=Symbol(""),Pb=/(?:^|;)\s*display\s*:/;function Nb(t,e,n){const i=t.style,r=Bt(n);let o=!1;if(n&&!r){if(e)if(Bt(e))for(const s of e.split(";")){const a=s.slice(0,s.indexOf(":")).trim();n[a]==null&&gl(i,a,"")}else for(const s in e)n[s]==null&&gl(i,s,"");for(const s in n)s==="display"&&(o=!0),gl(i,s,n[s])}else if(r){if(e!==n){const s=i[Ib];s&&(n+=";"+s),i.cssText=n,o=Pb.test(n)}}else e&&t.removeAttribute("style");$l in t&&(t[$l]=o?i.display:"",t[X0]&&(i.display="none"))}const dp=/\s*!important$/;function gl(t,e,n){if(je(n))n.forEach(i=>gl(t,e,i));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const i=Db(t,e);dp.test(n)?t.setProperty(po(i),n.replace(dp,""),"important"):t[i]=n}}const hp=["Webkit","Moz","ms"],oc={};function Db(t,e){const n=oc[e];if(n)return n;let i=Fn(e);if(i!=="filter"&&i in t)return oc[e]=i;i=mu(i);for(let r=0;r<hp.length;r++){const o=hp[r]+i;if(o in t)return oc[e]=o}return e}const pp="http://www.w3.org/1999/xlink";function mp(t,e,n,i,r,o=Vy(e)){i&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(pp,e.slice(6,e.length)):t.setAttributeNS(pp,e,n):n==null||o&&!Ug(n)?t.removeAttribute(e):t.setAttribute(e,o?"":qn(n)?String(n):n)}function gp(t,e,n,i,r){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?W0(n):n);return}const o=t.tagName;if(e==="value"&&o!=="PROGRESS"&&!o.includes("-")){const a=o==="OPTION"?t.getAttribute("value")||"":t.value,l=n==null?t.type==="checkbox"?"on":"":String(n);(a!==l||!("_value"in t))&&(t.value=l),n==null&&t.removeAttribute(e),t._value=n;return}let s=!1;if(n===""||n==null){const a=typeof t[e];a==="boolean"?n=Ug(n):n==null&&a==="string"?(n="",s=!0):a==="number"&&(n=0,s=!0)}try{t[e]=n}catch{}s&&t.removeAttribute(r||e)}function Lb(t,e,n,i){t.addEventListener(e,n,i)}function Fb(t,e,n,i){t.removeEventListener(e,n,i)}const vp=Symbol("_vei");function Ub(t,e,n,i,r=null){const o=t[vp]||(t[vp]={}),s=o[e];if(i&&s)s.value=i;else{const[a,l]=Ob(e);if(i){const u=o[e]=zb(i,r);Lb(t,a,u,l)}else s&&(Fb(t,a,s,l),o[e]=void 0)}}const _p=/(?:Once|Passive|Capture)$/;function Ob(t){let e;if(_p.test(t)){e={};let i;for(;i=t.match(_p);)t=t.slice(0,t.length-i[0].length),e[i[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):po(t.slice(2)),e]}let sc=0;const Bb=Promise.resolve(),kb=()=>sc||(Bb.then(()=>sc=0),sc=Date.now());function zb(t,e){const n=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=n.attached)return;_i(Vb(i,n.value),e,5,[i])};return n.value=t,n.attached=kb(),n}function Vb(t,e){if(je(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(i=>r=>!r._stopped&&i&&i(r))}else return e}const yp=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,Hb=(t,e,n,i,r,o)=>{const s=r==="svg";e==="class"?Rb(t,i,s):e==="style"?Nb(t,n,i):du(e)?kd(e)||Ub(t,e,n,i,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):$b(t,e,i,s))?(gp(t,e,i),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&mp(t,e,i,s,o,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!Bt(i))?gp(t,Fn(e),i,o,e):(e==="true-value"?t._trueValue=i:e==="false-value"&&(t._falseValue=i),mp(t,e,i,s))};function $b(t,e,n,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in t&&yp(e)&&et(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&t.tagName==="IFRAME"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=t.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return yp(e)&&Bt(n)?!1:e in t}const Gb=["ctrl","shift","alt","meta"],Wb={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>Gb.some(n=>t[`${n}Key`]&&!e.includes(n))},Qe=(t,e)=>{if(!t)return t;const n=t._withMods||(t._withMods={}),i=e.join(".");return n[i]||(n[i]=((r,...o)=>{for(let s=0;s<e.length;s++){const a=Wb[e[s]];if(a&&a(r,e))return}return t(r,...o)}))},Xb=en({patchProp:Hb},Ab);let xp;function Yb(){return xp||(xp=ab(Xb))}const qb=((...t)=>{const e=Yb().createApp(...t),{mount:n}=e;return e.mount=i=>{const r=Zb(i);if(!r)return;const o=e._component;!et(o)&&!o.render&&!o.template&&(o.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const s=n(r,!1,Kb(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),s},e});function Kb(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function Zb(t){return Bt(t)?document.querySelector(t):t}let Y0;const Cu=t=>Y0=t,q0=Symbol();function mf(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var ks;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(ks||(ks={}));function jb(){const t=vu(!0),e=t.run(()=>qe({}));let n=[],i=[];const r=no({install(o){Cu(r),r._a=o,o.provide(q0,r),o.config.globalProperties.$pinia=r,i.forEach(s=>n.push(s)),i=[]},use(o){return this._a?n.push(o):i.push(o),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return r}const K0=()=>{};function bp(t,e,n,i=K0){t.add(e);const r=()=>{t.delete(e)&&i()};return!n&&_u()&&Ds(r),r}function _o(t,...e){t.forEach(n=>{n(...e)})}const Jb=t=>t(),Sp=Symbol(),ac=Symbol();function gf(t,e){t instanceof Map&&e instanceof Map?e.forEach((n,i)=>t.set(i,n)):t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const i=e[n],r=t[n];mf(r)&&mf(i)&&t.hasOwnProperty(n)&&!Ut(i)&&!$i(i)?t[n]=gf(r,i):t[n]=i}return t}const Qb=Symbol();function e1(t){return!mf(t)||!Object.prototype.hasOwnProperty.call(t,Qb)}const{assign:mr}=Object;function t1(t){return!!(Ut(t)&&t.effect)}function n1(t,e,n,i){const{state:r,actions:o,getters:s}=e,a=n.state.value[t];let l;function u(){a||(n.state.value[t]=r?r():{});const c=n0(n.state.value[t]);return mr(c,o,Object.keys(s||{}).reduce((f,d)=>(f[d]=no(De(()=>{Cu(n);const h=n._s.get(t);return s[d].call(h,h)})),f),{}))}return l=Z0(t,u,e,n,i,!0),l}function Z0(t,e,n={},i,r,o){let s;const a=mr({actions:{}},n),l={deep:!0};let u,c,f=new Set,d=new Set,h;const g=i.state.value[t];!o&&!g&&(i.state.value[t]={});let _;function m(y){let M;u=c=!1,typeof y=="function"?(y(i.state.value[t]),M={type:ks.patchFunction,storeId:t,events:h}):(gf(i.state.value[t],y),M={type:ks.patchObject,payload:y,storeId:t,events:h});const N=_=Symbol();Dn().then(()=>{_===N&&(u=!0)}),c=!0,_o(f,M,i.state.value[t])}const p=o?function(){const{state:M}=n,N=M?M():{};this.$patch(C=>{mr(C,N)})}:K0;function b(){s.stop(),f.clear(),d.clear(),i._s.delete(t)}const S=(y,M="")=>{if(Sp in y)return y[ac]=M,y;const N=function(){Cu(i);const C=Array.from(arguments),P=new Set,B=new Set;function v(I){P.add(I)}function A(I){B.add(I)}_o(d,{args:C,name:N[ac],store:D,after:v,onError:A});let E;try{E=y.apply(this&&this.$id===t?this:D,C)}catch(I){throw _o(B,I),I}return E instanceof Promise?E.then(I=>(_o(P,I),I)).catch(I=>(_o(B,I),Promise.reject(I))):(_o(P,E),E)};return N[Sp]=!0,N[ac]=M,N},x={_p:i,$id:t,$onAction:bp.bind(null,d),$patch:m,$reset:p,$subscribe(y,M={}){const N=bp(f,y,M.detached,()=>C()),C=s.run(()=>ft(()=>i.state.value[t],P=>{(M.flush==="sync"?c:u)&&y({storeId:t,type:ks.direct,events:h},P)},mr({},l,M)));return N},$dispose:b},D=Ar(x);i._s.set(t,D);const z=(i._a&&i._a.runWithContext||Jb)(()=>i._e.run(()=>(s=vu()).run(()=>e({action:S}))));for(const y in z){const M=z[y];if(Ut(M)&&!t1(M)||$i(M))o||(g&&e1(M)&&(Ut(M)?M.value=g[y]:gf(M,g[y])),i.state.value[t][y]=M);else if(typeof M=="function"){const N=S(M,y);z[y]=N,a.actions[y]=M}}return mr(D,z),mr(mt(D),z),Object.defineProperty(D,"$state",{get:()=>i.state.value[t],set:y=>{m(M=>{mr(M,y)})}}),i._p.forEach(y=>{mr(D,s.run(()=>y({store:D,app:i._a,pinia:i,options:a})))}),g&&o&&n.hydrate&&n.hydrate(D.$state,g),u=!0,c=!0,D}function i1(t,e,n){let i;const r=typeof e=="function";i=r?n:e;function o(s,a){const l=Sx();return s=s||(l?An(q0,null):null),s&&Cu(s),s=Y0,s._s.has(t)||(r?Z0(t,e,i,s):n1(t,i,s)),s._s.get(t)}return o.$id=t,o}const th="183",r1=0,Mp=1,o1=2,vl=1,s1=2,Es=3,Rr=0,bn=1,Oi=2,Gi=0,zo=1,wp=2,Ep=3,Tp=4,a1=5,Xr=100,l1=101,u1=102,c1=103,f1=104,d1=200,h1=201,p1=202,m1=203,vf=204,_f=205,g1=206,v1=207,_1=208,y1=209,x1=210,b1=211,S1=212,M1=213,w1=214,yf=0,xf=1,bf=2,Zo=3,Sf=4,Mf=5,wf=6,Ef=7,j0=0,E1=1,T1=2,pi=0,J0=1,Q0=2,ev=3,tv=4,nv=5,iv=6,rv=7,ov=300,lo=301,jo=302,lc=303,uc=304,Ru=306,Tf=1e3,ki=1001,Af=1002,Jt=1003,A1=1004,Ia=1005,Ct=1006,cc=1007,jr=1008,fn=1009,sv=1010,av=1011,Ks=1012,nh=1013,yi=1014,ci=1015,ji=1016,ih=1017,rh=1018,Zs=1020,lv=35902,uv=35899,cv=1021,fv=1022,pn=1023,Ji=1026,Jr=1027,dv=1028,oh=1029,Jo=1030,sh=1031,ah=1033,_l=33776,yl=33777,xl=33778,bl=33779,Cf=35840,Rf=35841,If=35842,Pf=35843,Nf=36196,Df=37492,Lf=37496,Ff=37488,Uf=37489,Of=37490,Bf=37491,kf=37808,zf=37809,Vf=37810,Hf=37811,$f=37812,Gf=37813,Wf=37814,Xf=37815,Yf=37816,qf=37817,Kf=37818,Zf=37819,jf=37820,Jf=37821,Qf=36492,ed=36494,td=36495,nd=36283,id=36284,rd=36285,od=36286,C1=3200,R1=0,I1=1,Sr="",Nn="srgb",Ir="srgb-linear",Gl="linear",Mt="srgb",yo=7680,Ap=519,P1=512,N1=513,D1=514,lh=515,L1=516,F1=517,uh=518,U1=519,Cp=35044,Rp="300 es",fi=2e3,Wl=2001;function O1(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Xl(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function B1(){const t=Xl("canvas");return t.style.display="block",t}const Ip={};function Pp(...t){const e="THREE."+t.shift();console.log(e,...t)}function hv(t){const e=t[0];if(typeof e=="string"&&e.startsWith("TSL:")){const n=t[1];n&&n.isStackTrace?t[0]+=" "+n.getLocation():t[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return t}function nt(...t){t=hv(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.warn(n.getError(e)):console.warn(e,...t)}}function gt(...t){t=hv(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.error(n.getError(e)):console.error(e,...t)}}function Yl(...t){const e=t.join(" ");e in Ip||(Ip[e]=!0,nt(...t))}function k1(t,e,n){return new Promise(function(i,r){function o(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(o,n);break;default:i()}}setTimeout(o,n)})}const z1={[yf]:xf,[bf]:wf,[Sf]:Ef,[Zo]:Mf,[xf]:yf,[wf]:bf,[Ef]:Sf,[Mf]:Zo};class as{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const o=r.indexOf(n);o!==-1&&r.splice(o,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let o=0,s=r.length;o<s;o++)r[o].call(this,e);e.target=null}}}const nn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],fc=Math.PI/180,sd=180/Math.PI;function ga(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(nn[t&255]+nn[t>>8&255]+nn[t>>16&255]+nn[t>>24&255]+"-"+nn[e&255]+nn[e>>8&255]+"-"+nn[e>>16&15|64]+nn[e>>24&255]+"-"+nn[n&63|128]+nn[n>>8&255]+"-"+nn[n>>16&255]+nn[n>>24&255]+nn[i&255]+nn[i>>8&255]+nn[i>>16&255]+nn[i>>24&255]).toLowerCase()}function dt(t,e,n){return Math.max(e,Math.min(n,t))}function V1(t,e){return(t%e+e)%e}function dc(t,e,n){return(1-n)*t+n*e}function hs(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function gn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class Et{constructor(e=0,n=0){Et.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=dt(this.x,e.x,n.x),this.y=dt(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=dt(this.x,e,n),this.y=dt(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(dt(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(dt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),o=this.x-e.x,s=this.y-e.y;return this.x=o*i-s*r+e.x,this.y=o*r+s*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ls{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,o,s,a){let l=i[r+0],u=i[r+1],c=i[r+2],f=i[r+3],d=o[s+0],h=o[s+1],g=o[s+2],_=o[s+3];if(f!==_||l!==d||u!==h||c!==g){let m=l*d+u*h+c*g+f*_;m<0&&(d=-d,h=-h,g=-g,_=-_,m=-m);let p=1-a;if(m<.9995){const b=Math.acos(m),S=Math.sin(b);p=Math.sin(p*b)/S,a=Math.sin(a*b)/S,l=l*p+d*a,u=u*p+h*a,c=c*p+g*a,f=f*p+_*a}else{l=l*p+d*a,u=u*p+h*a,c=c*p+g*a,f=f*p+_*a;const b=1/Math.sqrt(l*l+u*u+c*c+f*f);l*=b,u*=b,c*=b,f*=b}}e[n]=l,e[n+1]=u,e[n+2]=c,e[n+3]=f}static multiplyQuaternionsFlat(e,n,i,r,o,s){const a=i[r],l=i[r+1],u=i[r+2],c=i[r+3],f=o[s],d=o[s+1],h=o[s+2],g=o[s+3];return e[n]=a*g+c*f+l*h-u*d,e[n+1]=l*g+c*d+u*f-a*h,e[n+2]=u*g+c*h+a*d-l*f,e[n+3]=c*g-a*f-l*d-u*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,o=e._z,s=e._order,a=Math.cos,l=Math.sin,u=a(i/2),c=a(r/2),f=a(o/2),d=l(i/2),h=l(r/2),g=l(o/2);switch(s){case"XYZ":this._x=d*c*f+u*h*g,this._y=u*h*f-d*c*g,this._z=u*c*g+d*h*f,this._w=u*c*f-d*h*g;break;case"YXZ":this._x=d*c*f+u*h*g,this._y=u*h*f-d*c*g,this._z=u*c*g-d*h*f,this._w=u*c*f+d*h*g;break;case"ZXY":this._x=d*c*f-u*h*g,this._y=u*h*f+d*c*g,this._z=u*c*g+d*h*f,this._w=u*c*f-d*h*g;break;case"ZYX":this._x=d*c*f-u*h*g,this._y=u*h*f+d*c*g,this._z=u*c*g-d*h*f,this._w=u*c*f+d*h*g;break;case"YZX":this._x=d*c*f+u*h*g,this._y=u*h*f+d*c*g,this._z=u*c*g-d*h*f,this._w=u*c*f-d*h*g;break;case"XZY":this._x=d*c*f-u*h*g,this._y=u*h*f-d*c*g,this._z=u*c*g+d*h*f,this._w=u*c*f+d*h*g;break;default:nt("Quaternion: .setFromEuler() encountered an unknown order: "+s)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],o=n[8],s=n[1],a=n[5],l=n[9],u=n[2],c=n[6],f=n[10],d=i+a+f;if(d>0){const h=.5/Math.sqrt(d+1);this._w=.25/h,this._x=(c-l)*h,this._y=(o-u)*h,this._z=(s-r)*h}else if(i>a&&i>f){const h=2*Math.sqrt(1+i-a-f);this._w=(c-l)/h,this._x=.25*h,this._y=(r+s)/h,this._z=(o+u)/h}else if(a>f){const h=2*Math.sqrt(1+a-i-f);this._w=(o-u)/h,this._x=(r+s)/h,this._y=.25*h,this._z=(l+c)/h}else{const h=2*Math.sqrt(1+f-i-a);this._w=(s-r)/h,this._x=(o+u)/h,this._y=(l+c)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(dt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,o=e._z,s=e._w,a=n._x,l=n._y,u=n._z,c=n._w;return this._x=i*c+s*a+r*u-o*l,this._y=r*c+s*l+o*a-i*u,this._z=o*c+s*u+i*l-r*a,this._w=s*c-i*a-r*l-o*u,this._onChangeCallback(),this}slerp(e,n){let i=e._x,r=e._y,o=e._z,s=e._w,a=this.dot(e);a<0&&(i=-i,r=-r,o=-o,s=-s,a=-a);let l=1-n;if(a<.9995){const u=Math.acos(a),c=Math.sin(u);l=Math.sin(l*u)/c,n=Math.sin(n*u)/c,this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+o*n,this._w=this._w*l+s*n,this._onChangeCallback()}else this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+o*n,this._w=this._w*l+s*n,this.normalize();return this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),o=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),o*Math.sin(n),o*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ce{constructor(e=0,n=0,i=0){ce.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Np.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Np.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,o=e.elements;return this.x=o[0]*n+o[3]*i+o[6]*r,this.y=o[1]*n+o[4]*i+o[7]*r,this.z=o[2]*n+o[5]*i+o[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,o=e.elements,s=1/(o[3]*n+o[7]*i+o[11]*r+o[15]);return this.x=(o[0]*n+o[4]*i+o[8]*r+o[12])*s,this.y=(o[1]*n+o[5]*i+o[9]*r+o[13])*s,this.z=(o[2]*n+o[6]*i+o[10]*r+o[14])*s,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,o=e.x,s=e.y,a=e.z,l=e.w,u=2*(s*r-a*i),c=2*(a*n-o*r),f=2*(o*i-s*n);return this.x=n+l*u+s*f-a*c,this.y=i+l*c+a*u-o*f,this.z=r+l*f+o*c-s*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r,this.y=o[1]*n+o[5]*i+o[9]*r,this.z=o[2]*n+o[6]*i+o[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=dt(this.x,e.x,n.x),this.y=dt(this.y,e.y,n.y),this.z=dt(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=dt(this.x,e,n),this.y=dt(this.y,e,n),this.z=dt(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(dt(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,o=e.z,s=n.x,a=n.y,l=n.z;return this.x=r*l-o*a,this.y=o*s-i*l,this.z=i*a-r*s,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return hc.copy(this).projectOnVector(e),this.sub(hc)}reflect(e){return this.sub(hc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(dt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const hc=new ce,Np=new ls;class st{constructor(e,n,i,r,o,s,a,l,u){st.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,o,s,a,l,u)}set(e,n,i,r,o,s,a,l,u){const c=this.elements;return c[0]=e,c[1]=r,c[2]=a,c[3]=n,c[4]=o,c[5]=l,c[6]=i,c[7]=s,c[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,o=this.elements,s=i[0],a=i[3],l=i[6],u=i[1],c=i[4],f=i[7],d=i[2],h=i[5],g=i[8],_=r[0],m=r[3],p=r[6],b=r[1],S=r[4],x=r[7],D=r[2],O=r[5],z=r[8];return o[0]=s*_+a*b+l*D,o[3]=s*m+a*S+l*O,o[6]=s*p+a*x+l*z,o[1]=u*_+c*b+f*D,o[4]=u*m+c*S+f*O,o[7]=u*p+c*x+f*z,o[2]=d*_+h*b+g*D,o[5]=d*m+h*S+g*O,o[8]=d*p+h*x+g*z,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],o=e[3],s=e[4],a=e[5],l=e[6],u=e[7],c=e[8];return n*s*c-n*a*u-i*o*c+i*a*l+r*o*u-r*s*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],o=e[3],s=e[4],a=e[5],l=e[6],u=e[7],c=e[8],f=c*s-a*u,d=a*l-c*o,h=u*o-s*l,g=n*f+i*d+r*h;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=f*_,e[1]=(r*u-c*i)*_,e[2]=(a*i-r*s)*_,e[3]=d*_,e[4]=(c*n-r*l)*_,e[5]=(r*o-a*n)*_,e[6]=h*_,e[7]=(i*l-u*n)*_,e[8]=(s*n-i*o)*_,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,o,s,a){const l=Math.cos(o),u=Math.sin(o);return this.set(i*l,i*u,-i*(l*s+u*a)+s+e,-r*u,r*l,-r*(-u*s+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(pc.makeScale(e,n)),this}rotate(e){return this.premultiply(pc.makeRotation(-e)),this}translate(e,n){return this.premultiply(pc.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const pc=new st,Dp=new st().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Lp=new st().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function H1(){const t={enabled:!0,workingColorSpace:Ir,spaces:{},convert:function(r,o,s){return this.enabled===!1||o===s||!o||!s||(this.spaces[o].transfer===Mt&&(r.r=Wi(r.r),r.g=Wi(r.g),r.b=Wi(r.b)),this.spaces[o].primaries!==this.spaces[s].primaries&&(r.applyMatrix3(this.spaces[o].toXYZ),r.applyMatrix3(this.spaces[s].fromXYZ)),this.spaces[s].transfer===Mt&&(r.r=Vo(r.r),r.g=Vo(r.g),r.b=Vo(r.b))),r},workingToColorSpace:function(r,o){return this.convert(r,this.workingColorSpace,o)},colorSpaceToWorking:function(r,o){return this.convert(r,o,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Sr?Gl:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,o=this.workingColorSpace){return r.fromArray(this.spaces[o].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,o,s){return r.copy(this.spaces[o].toXYZ).multiply(this.spaces[s].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,o){return Yl("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(r,o)},toWorkingColorSpace:function(r,o){return Yl("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(r,o)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[Ir]:{primaries:e,whitePoint:i,transfer:Gl,toXYZ:Dp,fromXYZ:Lp,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Nn},outputColorSpaceConfig:{drawingBufferColorSpace:Nn}},[Nn]:{primaries:e,whitePoint:i,transfer:Mt,toXYZ:Dp,fromXYZ:Lp,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Nn}}}),t}const ht=H1();function Wi(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Vo(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let xo;class $1{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{xo===void 0&&(xo=Xl("canvas")),xo.width=e.width,xo.height=e.height;const r=xo.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=xo}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Xl("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),o=r.data;for(let s=0;s<o.length;s++)o[s]=Wi(o[s]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Wi(n[i]/255)*255):n[i]=Wi(n[i]);return{data:n,width:e.width,height:e.height}}else return nt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let G1=0;class ch{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:G1++}),this.uuid=ga(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayHeight,n.displayWidth,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let o;if(Array.isArray(r)){o=[];for(let s=0,a=r.length;s<a;s++)r[s].isDataTexture?o.push(mc(r[s].image)):o.push(mc(r[s]))}else o=mc(r);i.url=o}return n||(e.images[this.uuid]=i),i}}function mc(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?$1.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(nt("Texture: Unable to serialize Texture."),{})}let W1=0;const gc=new ce;class Qt extends as{constructor(e=Qt.DEFAULT_IMAGE,n=Qt.DEFAULT_MAPPING,i=ki,r=ki,o=Ct,s=jr,a=pn,l=fn,u=Qt.DEFAULT_ANISOTROPY,c=Sr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:W1++}),this.uuid=ga(),this.name="",this.source=new ch(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=o,this.minFilter=s,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Et(0,0),this.repeat=new Et(1,1),this.center=new Et(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new st,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(gc).x}get height(){return this.source.getSize(gc).y}get depth(){return this.source.getSize(gc).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){nt(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){nt(`Texture.setValues(): property '${n}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ov)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Tf:e.x=e.x-Math.floor(e.x);break;case ki:e.x=e.x<0?0:1;break;case Af:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Tf:e.y=e.y-Math.floor(e.y);break;case ki:e.y=e.y<0?0:1;break;case Af:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Qt.DEFAULT_IMAGE=null;Qt.DEFAULT_MAPPING=ov;Qt.DEFAULT_ANISOTROPY=1;class zt{constructor(e=0,n=0,i=0,r=1){zt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,o=this.w,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r+s[12]*o,this.y=s[1]*n+s[5]*i+s[9]*r+s[13]*o,this.z=s[2]*n+s[6]*i+s[10]*r+s[14]*o,this.w=s[3]*n+s[7]*i+s[11]*r+s[15]*o,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,o;const l=e.elements,u=l[0],c=l[4],f=l[8],d=l[1],h=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(c-d)<.01&&Math.abs(f-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(c+d)<.1&&Math.abs(f+_)<.1&&Math.abs(g+m)<.1&&Math.abs(u+h+p-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const S=(u+1)/2,x=(h+1)/2,D=(p+1)/2,O=(c+d)/4,z=(f+_)/4,y=(g+m)/4;return S>x&&S>D?S<.01?(i=0,r=.707106781,o=.707106781):(i=Math.sqrt(S),r=O/i,o=z/i):x>D?x<.01?(i=.707106781,r=0,o=.707106781):(r=Math.sqrt(x),i=O/r,o=y/r):D<.01?(i=.707106781,r=.707106781,o=0):(o=Math.sqrt(D),i=z/o,r=y/o),this.set(i,r,o,n),this}let b=Math.sqrt((m-g)*(m-g)+(f-_)*(f-_)+(d-c)*(d-c));return Math.abs(b)<.001&&(b=1),this.x=(m-g)/b,this.y=(f-_)/b,this.z=(d-c)/b,this.w=Math.acos((u+h+p-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=dt(this.x,e.x,n.x),this.y=dt(this.y,e.y,n.y),this.z=dt(this.z,e.z,n.z),this.w=dt(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=dt(this.x,e,n),this.y=dt(this.y,e,n),this.z=dt(this.z,e,n),this.w=dt(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(dt(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class X1 extends as{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ct,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new zt(0,0,e,n),this.scissorTest=!1,this.viewport=new zt(0,0,e,n),this.textures=[];const r={width:e,height:n,depth:i.depth},o=new Qt(r),s=i.count;for(let a=0;a<s;a++)this.textures[a]=o.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const n={minFilter:Ct,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,o=this.textures.length;r<o;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const r=Object.assign({},e.textures[n].image);this.textures[n].source=new ch(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class _n extends X1{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class pv extends Qt{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Jt,this.minFilter=Jt,this.wrapR=ki,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Y1 extends Qt{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Jt,this.minFilter=Jt,this.wrapR=ki,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Gt{constructor(e,n,i,r,o,s,a,l,u,c,f,d,h,g,_,m){Gt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,o,s,a,l,u,c,f,d,h,g,_,m)}set(e,n,i,r,o,s,a,l,u,c,f,d,h,g,_,m){const p=this.elements;return p[0]=e,p[4]=n,p[8]=i,p[12]=r,p[1]=o,p[5]=s,p[9]=a,p[13]=l,p[2]=u,p[6]=c,p[10]=f,p[14]=d,p[3]=h,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Gt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return this.determinant()===0?(e.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const n=this.elements,i=e.elements,r=1/bo.setFromMatrixColumn(e,0).length(),o=1/bo.setFromMatrixColumn(e,1).length(),s=1/bo.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*o,n[5]=i[5]*o,n[6]=i[6]*o,n[7]=0,n[8]=i[8]*s,n[9]=i[9]*s,n[10]=i[10]*s,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,o=e.z,s=Math.cos(i),a=Math.sin(i),l=Math.cos(r),u=Math.sin(r),c=Math.cos(o),f=Math.sin(o);if(e.order==="XYZ"){const d=s*c,h=s*f,g=a*c,_=a*f;n[0]=l*c,n[4]=-l*f,n[8]=u,n[1]=h+g*u,n[5]=d-_*u,n[9]=-a*l,n[2]=_-d*u,n[6]=g+h*u,n[10]=s*l}else if(e.order==="YXZ"){const d=l*c,h=l*f,g=u*c,_=u*f;n[0]=d+_*a,n[4]=g*a-h,n[8]=s*u,n[1]=s*f,n[5]=s*c,n[9]=-a,n[2]=h*a-g,n[6]=_+d*a,n[10]=s*l}else if(e.order==="ZXY"){const d=l*c,h=l*f,g=u*c,_=u*f;n[0]=d-_*a,n[4]=-s*f,n[8]=g+h*a,n[1]=h+g*a,n[5]=s*c,n[9]=_-d*a,n[2]=-s*u,n[6]=a,n[10]=s*l}else if(e.order==="ZYX"){const d=s*c,h=s*f,g=a*c,_=a*f;n[0]=l*c,n[4]=g*u-h,n[8]=d*u+_,n[1]=l*f,n[5]=_*u+d,n[9]=h*u-g,n[2]=-u,n[6]=a*l,n[10]=s*l}else if(e.order==="YZX"){const d=s*l,h=s*u,g=a*l,_=a*u;n[0]=l*c,n[4]=_-d*f,n[8]=g*f+h,n[1]=f,n[5]=s*c,n[9]=-a*c,n[2]=-u*c,n[6]=h*f+g,n[10]=d-_*f}else if(e.order==="XZY"){const d=s*l,h=s*u,g=a*l,_=a*u;n[0]=l*c,n[4]=-f,n[8]=u*c,n[1]=d*f+_,n[5]=s*c,n[9]=h*f-g,n[2]=g*f-h,n[6]=a*c,n[10]=_*f+d}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(q1,e,K1)}lookAt(e,n,i){const r=this.elements;return Mn.subVectors(e,n),Mn.lengthSq()===0&&(Mn.z=1),Mn.normalize(),lr.crossVectors(i,Mn),lr.lengthSq()===0&&(Math.abs(i.z)===1?Mn.x+=1e-4:Mn.z+=1e-4,Mn.normalize(),lr.crossVectors(i,Mn)),lr.normalize(),Pa.crossVectors(Mn,lr),r[0]=lr.x,r[4]=Pa.x,r[8]=Mn.x,r[1]=lr.y,r[5]=Pa.y,r[9]=Mn.y,r[2]=lr.z,r[6]=Pa.z,r[10]=Mn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,o=this.elements,s=i[0],a=i[4],l=i[8],u=i[12],c=i[1],f=i[5],d=i[9],h=i[13],g=i[2],_=i[6],m=i[10],p=i[14],b=i[3],S=i[7],x=i[11],D=i[15],O=r[0],z=r[4],y=r[8],M=r[12],N=r[1],C=r[5],P=r[9],B=r[13],v=r[2],A=r[6],E=r[10],I=r[14],V=r[3],W=r[7],q=r[11],$=r[15];return o[0]=s*O+a*N+l*v+u*V,o[4]=s*z+a*C+l*A+u*W,o[8]=s*y+a*P+l*E+u*q,o[12]=s*M+a*B+l*I+u*$,o[1]=c*O+f*N+d*v+h*V,o[5]=c*z+f*C+d*A+h*W,o[9]=c*y+f*P+d*E+h*q,o[13]=c*M+f*B+d*I+h*$,o[2]=g*O+_*N+m*v+p*V,o[6]=g*z+_*C+m*A+p*W,o[10]=g*y+_*P+m*E+p*q,o[14]=g*M+_*B+m*I+p*$,o[3]=b*O+S*N+x*v+D*V,o[7]=b*z+S*C+x*A+D*W,o[11]=b*y+S*P+x*E+D*q,o[15]=b*M+S*B+x*I+D*$,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],o=e[12],s=e[1],a=e[5],l=e[9],u=e[13],c=e[2],f=e[6],d=e[10],h=e[14],g=e[3],_=e[7],m=e[11],p=e[15],b=l*h-u*d,S=a*h-u*f,x=a*d-l*f,D=s*h-u*c,O=s*d-l*c,z=s*f-a*c;return n*(_*b-m*S+p*x)-i*(g*b-m*D+p*O)+r*(g*S-_*D+p*z)-o*(g*x-_*O+m*z)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],o=e[3],s=e[4],a=e[5],l=e[6],u=e[7],c=e[8],f=e[9],d=e[10],h=e[11],g=e[12],_=e[13],m=e[14],p=e[15],b=n*a-i*s,S=n*l-r*s,x=n*u-o*s,D=i*l-r*a,O=i*u-o*a,z=r*u-o*l,y=c*_-f*g,M=c*m-d*g,N=c*p-h*g,C=f*m-d*_,P=f*p-h*_,B=d*p-h*m,v=b*B-S*P+x*C+D*N-O*M+z*y;if(v===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/v;return e[0]=(a*B-l*P+u*C)*A,e[1]=(r*P-i*B-o*C)*A,e[2]=(_*z-m*O+p*D)*A,e[3]=(d*O-f*z-h*D)*A,e[4]=(l*N-s*B-u*M)*A,e[5]=(n*B-r*N+o*M)*A,e[6]=(m*x-g*z-p*S)*A,e[7]=(c*z-d*x+h*S)*A,e[8]=(s*P-a*N+u*y)*A,e[9]=(i*N-n*P-o*y)*A,e[10]=(g*O-_*x+p*b)*A,e[11]=(f*x-c*O-h*b)*A,e[12]=(a*M-s*C-l*y)*A,e[13]=(n*C-i*M+r*y)*A,e[14]=(_*S-g*D-m*b)*A,e[15]=(c*D-f*S+d*b)*A,this}scale(e){const n=this.elements,i=e.x,r=e.y,o=e.z;return n[0]*=i,n[4]*=r,n[8]*=o,n[1]*=i,n[5]*=r,n[9]*=o,n[2]*=i,n[6]*=r,n[10]*=o,n[3]*=i,n[7]*=r,n[11]*=o,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),o=1-i,s=e.x,a=e.y,l=e.z,u=o*s,c=o*a;return this.set(u*s+i,u*a-r*l,u*l+r*a,0,u*a+r*l,c*a+i,c*l-r*s,0,u*l-r*a,c*l+r*s,o*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,o,s){return this.set(1,i,o,0,e,1,s,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,o=n._x,s=n._y,a=n._z,l=n._w,u=o+o,c=s+s,f=a+a,d=o*u,h=o*c,g=o*f,_=s*c,m=s*f,p=a*f,b=l*u,S=l*c,x=l*f,D=i.x,O=i.y,z=i.z;return r[0]=(1-(_+p))*D,r[1]=(h+x)*D,r[2]=(g-S)*D,r[3]=0,r[4]=(h-x)*O,r[5]=(1-(d+p))*O,r[6]=(m+b)*O,r[7]=0,r[8]=(g+S)*z,r[9]=(m-b)*z,r[10]=(1-(d+_))*z,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const o=this.determinant();if(o===0)return i.set(1,1,1),n.identity(),this;let s=bo.set(r[0],r[1],r[2]).length();const a=bo.set(r[4],r[5],r[6]).length(),l=bo.set(r[8],r[9],r[10]).length();o<0&&(s=-s),kn.copy(this);const u=1/s,c=1/a,f=1/l;return kn.elements[0]*=u,kn.elements[1]*=u,kn.elements[2]*=u,kn.elements[4]*=c,kn.elements[5]*=c,kn.elements[6]*=c,kn.elements[8]*=f,kn.elements[9]*=f,kn.elements[10]*=f,n.setFromRotationMatrix(kn),i.x=s,i.y=a,i.z=l,this}makePerspective(e,n,i,r,o,s,a=fi,l=!1){const u=this.elements,c=2*o/(n-e),f=2*o/(i-r),d=(n+e)/(n-e),h=(i+r)/(i-r);let g,_;if(l)g=o/(s-o),_=s*o/(s-o);else if(a===fi)g=-(s+o)/(s-o),_=-2*s*o/(s-o);else if(a===Wl)g=-s/(s-o),_=-s*o/(s-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return u[0]=c,u[4]=0,u[8]=d,u[12]=0,u[1]=0,u[5]=f,u[9]=h,u[13]=0,u[2]=0,u[6]=0,u[10]=g,u[14]=_,u[3]=0,u[7]=0,u[11]=-1,u[15]=0,this}makeOrthographic(e,n,i,r,o,s,a=fi,l=!1){const u=this.elements,c=2/(n-e),f=2/(i-r),d=-(n+e)/(n-e),h=-(i+r)/(i-r);let g,_;if(l)g=1/(s-o),_=s/(s-o);else if(a===fi)g=-2/(s-o),_=-(s+o)/(s-o);else if(a===Wl)g=-1/(s-o),_=-o/(s-o);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return u[0]=c,u[4]=0,u[8]=0,u[12]=d,u[1]=0,u[5]=f,u[9]=0,u[13]=h,u[2]=0,u[6]=0,u[10]=g,u[14]=_,u[3]=0,u[7]=0,u[11]=0,u[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const bo=new ce,kn=new Gt,q1=new ce(0,0,0),K1=new ce(1,1,1),lr=new ce,Pa=new ce,Mn=new ce,Fp=new Gt,Up=new ls;class Qi{constructor(e=0,n=0,i=0,r=Qi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,o=r[0],s=r[4],a=r[8],l=r[1],u=r[5],c=r[9],f=r[2],d=r[6],h=r[10];switch(n){case"XYZ":this._y=Math.asin(dt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-c,h),this._z=Math.atan2(-s,o)):(this._x=Math.atan2(d,u),this._z=0);break;case"YXZ":this._x=Math.asin(-dt(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(a,h),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-f,o),this._z=0);break;case"ZXY":this._x=Math.asin(dt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,h),this._z=Math.atan2(-s,u)):(this._y=0,this._z=Math.atan2(l,o));break;case"ZYX":this._y=Math.asin(-dt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,h),this._z=Math.atan2(l,o)):(this._x=0,this._z=Math.atan2(-s,u));break;case"YZX":this._z=Math.asin(dt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,u),this._y=Math.atan2(-f,o)):(this._x=0,this._y=Math.atan2(a,h));break;case"XZY":this._z=Math.asin(-dt(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(d,u),this._y=Math.atan2(a,o)):(this._x=Math.atan2(-c,h),this._y=0);break;default:nt("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Fp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Fp,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Up.setFromEuler(this),this.setFromQuaternion(Up,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Qi.DEFAULT_ORDER="XYZ";class mv{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Z1=0;const Op=new ce,So=new ls,Ti=new Gt,Na=new ce,ps=new ce,j1=new ce,J1=new ls,Bp=new ce(1,0,0),kp=new ce(0,1,0),zp=new ce(0,0,1),Vp={type:"added"},Q1={type:"removed"},Mo={type:"childadded",child:null},vc={type:"childremoved",child:null};class Cn extends as{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Z1++}),this.uuid=ga(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Cn.DEFAULT_UP.clone();const e=new ce,n=new Qi,i=new ls,r=new ce(1,1,1);function o(){i.setFromEuler(n,!1)}function s(){n.setFromQuaternion(i,void 0,!1)}n._onChange(o),i._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Gt},normalMatrix:{value:new st}}),this.matrix=new Gt,this.matrixWorld=new Gt,this.matrixAutoUpdate=Cn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Cn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new mv,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return So.setFromAxisAngle(e,n),this.quaternion.multiply(So),this}rotateOnWorldAxis(e,n){return So.setFromAxisAngle(e,n),this.quaternion.premultiply(So),this}rotateX(e){return this.rotateOnAxis(Bp,e)}rotateY(e){return this.rotateOnAxis(kp,e)}rotateZ(e){return this.rotateOnAxis(zp,e)}translateOnAxis(e,n){return Op.copy(e).applyQuaternion(this.quaternion),this.position.add(Op.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Bp,e)}translateY(e){return this.translateOnAxis(kp,e)}translateZ(e){return this.translateOnAxis(zp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ti.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Na.copy(e):Na.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),ps.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ti.lookAt(ps,Na,this.up):Ti.lookAt(Na,ps,this.up),this.quaternion.setFromRotationMatrix(Ti),r&&(Ti.extractRotation(r.matrixWorld),So.setFromRotationMatrix(Ti),this.quaternion.premultiply(So.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(gt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Vp),Mo.child=e,this.dispatchEvent(Mo),Mo.child=null):gt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(Q1),vc.child=e,this.dispatchEvent(vc),vc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ti.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ti.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ti),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Vp),Mo.child=e,this.dispatchEvent(Mo),Mo.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const s=this.children[i].getObjectByProperty(e,n);if(s!==void 0)return s}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let o=0,s=r.length;o<s;o++)r[o].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ps,e,j1),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ps,J1,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const n=e.x,i=e.y,r=e.z,o=this.matrix.elements;o[12]+=n-o[0]*n-o[4]*i-o[8]*r,o[13]+=i-o[1]*n-o[5]*i-o[9]*r,o[14]+=r-o[2]*n-o[6]*i-o[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let o=0,s=r.length;o<s;o++)r[o].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function o(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=o(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,c=l.length;u<c;u++){const f=l[u];o(e.shapes,f)}else o(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(o(e.materials,this.material[l]));r.material=a}else r.material=o(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(o(e.animations,l))}}if(n){const a=s(e.geometries),l=s(e.materials),u=s(e.textures),c=s(e.images),f=s(e.shapes),d=s(e.skeletons),h=s(e.animations),g=s(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),c.length>0&&(i.images=c),f.length>0&&(i.shapes=f),d.length>0&&(i.skeletons=d),h.length>0&&(i.animations=h),g.length>0&&(i.nodes=g)}return i.object=r,i;function s(a){const l=[];for(const u in a){const c=a[u];delete c.metadata,l.push(c)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),e.pivot!==null&&(this.pivot=e.pivot.clone()),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Cn.DEFAULT_UP=new ce(0,1,0);Cn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Cn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Da extends Cn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const eS={type:"move"};class _c{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Da,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Da,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ce,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ce),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Da,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ce,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ce),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,o=null,s=null;const a=this._targetRay,l=this._grip,u=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(u&&e.hand){s=!0;for(const _ of e.hand.values()){const m=n.getJointPose(_,i),p=this._getHandJoint(u,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const c=u.joints["index-finger-tip"],f=u.joints["thumb-tip"],d=c.position.distanceTo(f.position),h=.02,g=.005;u.inputState.pinching&&d>h+g?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&d<=h-g&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(o=n.getPose(e.gripSpace,i),o!==null&&(l.matrix.fromArray(o.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,o.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(o.linearVelocity)):l.hasLinearVelocity=!1,o.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(o.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&o!==null&&(r=o),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(eS)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=o!==null),u!==null&&(u.visible=s!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Da;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const gv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ur={h:0,s:0,l:0},La={h:0,s:0,l:0};function yc(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}let wt=class{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Nn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ht.colorSpaceToWorking(this,n),this}setRGB(e,n,i,r=ht.workingColorSpace){return this.r=e,this.g=n,this.b=i,ht.colorSpaceToWorking(this,r),this}setHSL(e,n,i,r=ht.workingColorSpace){if(e=V1(e,1),n=dt(n,0,1),i=dt(i,0,1),n===0)this.r=this.g=this.b=i;else{const o=i<=.5?i*(1+n):i+n-i*n,s=2*i-o;this.r=yc(s,o,e+1/3),this.g=yc(s,o,e),this.b=yc(s,o,e-1/3)}return ht.colorSpaceToWorking(this,r),this}setStyle(e,n=Nn){function i(o){o!==void 0&&parseFloat(o)<1&&nt("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let o;const s=r[1],a=r[2];switch(s){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,n);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,n);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,n);break;default:nt("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const o=r[1],s=o.length;if(s===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,n);if(s===6)return this.setHex(parseInt(o,16),n);nt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Nn){const i=gv[e.toLowerCase()];return i!==void 0?this.setHex(i,n):nt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Wi(e.r),this.g=Wi(e.g),this.b=Wi(e.b),this}copyLinearToSRGB(e){return this.r=Vo(e.r),this.g=Vo(e.g),this.b=Vo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Nn){return ht.workingToColorSpace(rn.copy(this),e),Math.round(dt(rn.r*255,0,255))*65536+Math.round(dt(rn.g*255,0,255))*256+Math.round(dt(rn.b*255,0,255))}getHexString(e=Nn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=ht.workingColorSpace){ht.workingToColorSpace(rn.copy(this),n);const i=rn.r,r=rn.g,o=rn.b,s=Math.max(i,r,o),a=Math.min(i,r,o);let l,u;const c=(a+s)/2;if(a===s)l=0,u=0;else{const f=s-a;switch(u=c<=.5?f/(s+a):f/(2-s-a),s){case i:l=(r-o)/f+(r<o?6:0);break;case r:l=(o-i)/f+2;break;case o:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=u,e.l=c,e}getRGB(e,n=ht.workingColorSpace){return ht.workingToColorSpace(rn.copy(this),n),e.r=rn.r,e.g=rn.g,e.b=rn.b,e}getStyle(e=Nn){ht.workingToColorSpace(rn.copy(this),e);const n=rn.r,i=rn.g,r=rn.b;return e!==Nn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(ur),this.setHSL(ur.h+e,ur.s+n,ur.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(ur),e.getHSL(La);const i=dc(ur.h,La.h,n),r=dc(ur.s,La.s,n),o=dc(ur.l,La.l,n);return this.setHSL(i,r,o),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,o=e.elements;return this.r=o[0]*n+o[3]*i+o[6]*r,this.g=o[1]*n+o[4]*i+o[7]*r,this.b=o[2]*n+o[5]*i+o[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}};const rn=new wt;wt.NAMES=gv;class tS extends Cn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Qi,this.environmentIntensity=1,this.environmentRotation=new Qi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const zn=new ce,Ai=new ce,xc=new ce,Ci=new ce,wo=new ce,Eo=new ce,Hp=new ce,bc=new ce,Sc=new ce,Mc=new ce,wc=new zt,Ec=new zt,Tc=new zt;class $n{constructor(e=new ce,n=new ce,i=new ce){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),zn.subVectors(e,n),r.cross(zn);const o=r.lengthSq();return o>0?r.multiplyScalar(1/Math.sqrt(o)):r.set(0,0,0)}static getBarycoord(e,n,i,r,o){zn.subVectors(r,n),Ai.subVectors(i,n),xc.subVectors(e,n);const s=zn.dot(zn),a=zn.dot(Ai),l=zn.dot(xc),u=Ai.dot(Ai),c=Ai.dot(xc),f=s*u-a*a;if(f===0)return o.set(0,0,0),null;const d=1/f,h=(u*l-a*c)*d,g=(s*c-a*l)*d;return o.set(1-h-g,g,h)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,Ci)===null?!1:Ci.x>=0&&Ci.y>=0&&Ci.x+Ci.y<=1}static getInterpolation(e,n,i,r,o,s,a,l){return this.getBarycoord(e,n,i,r,Ci)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(o,Ci.x),l.addScaledVector(s,Ci.y),l.addScaledVector(a,Ci.z),l)}static getInterpolatedAttribute(e,n,i,r,o,s){return wc.setScalar(0),Ec.setScalar(0),Tc.setScalar(0),wc.fromBufferAttribute(e,n),Ec.fromBufferAttribute(e,i),Tc.fromBufferAttribute(e,r),s.setScalar(0),s.addScaledVector(wc,o.x),s.addScaledVector(Ec,o.y),s.addScaledVector(Tc,o.z),s}static isFrontFacing(e,n,i,r){return zn.subVectors(i,n),Ai.subVectors(e,n),zn.cross(Ai).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return zn.subVectors(this.c,this.b),Ai.subVectors(this.a,this.b),zn.cross(Ai).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return $n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return $n.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,o){return $n.getInterpolation(e,this.a,this.b,this.c,n,i,r,o)}containsPoint(e){return $n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return $n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,o=this.c;let s,a;wo.subVectors(r,i),Eo.subVectors(o,i),bc.subVectors(e,i);const l=wo.dot(bc),u=Eo.dot(bc);if(l<=0&&u<=0)return n.copy(i);Sc.subVectors(e,r);const c=wo.dot(Sc),f=Eo.dot(Sc);if(c>=0&&f<=c)return n.copy(r);const d=l*f-c*u;if(d<=0&&l>=0&&c<=0)return s=l/(l-c),n.copy(i).addScaledVector(wo,s);Mc.subVectors(e,o);const h=wo.dot(Mc),g=Eo.dot(Mc);if(g>=0&&h<=g)return n.copy(o);const _=h*u-l*g;if(_<=0&&u>=0&&g<=0)return a=u/(u-g),n.copy(i).addScaledVector(Eo,a);const m=c*g-h*f;if(m<=0&&f-c>=0&&h-g>=0)return Hp.subVectors(o,r),a=(f-c)/(f-c+(h-g)),n.copy(r).addScaledVector(Hp,a);const p=1/(m+_+d);return s=_*p,a=d*p,n.copy(i).addScaledVector(wo,s).addScaledVector(Eo,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class va{constructor(e=new ce(1/0,1/0,1/0),n=new ce(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Vn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Vn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Vn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const o=i.getAttribute("position");if(n===!0&&o!==void 0&&e.isInstancedMesh!==!0)for(let s=0,a=o.count;s<a;s++)e.isMesh===!0?e.getVertexPosition(s,Vn):Vn.fromBufferAttribute(o,s),Vn.applyMatrix4(e.matrixWorld),this.expandByPoint(Vn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Fa.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Fa.copy(i.boundingBox)),Fa.applyMatrix4(e.matrixWorld),this.union(Fa)}const r=e.children;for(let o=0,s=r.length;o<s;o++)this.expandByObject(r[o],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Vn),Vn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ms),Ua.subVectors(this.max,ms),To.subVectors(e.a,ms),Ao.subVectors(e.b,ms),Co.subVectors(e.c,ms),cr.subVectors(Ao,To),fr.subVectors(Co,Ao),Or.subVectors(To,Co);let n=[0,-cr.z,cr.y,0,-fr.z,fr.y,0,-Or.z,Or.y,cr.z,0,-cr.x,fr.z,0,-fr.x,Or.z,0,-Or.x,-cr.y,cr.x,0,-fr.y,fr.x,0,-Or.y,Or.x,0];return!Ac(n,To,Ao,Co,Ua)||(n=[1,0,0,0,1,0,0,0,1],!Ac(n,To,Ao,Co,Ua))?!1:(Oa.crossVectors(cr,fr),n=[Oa.x,Oa.y,Oa.z],Ac(n,To,Ao,Co,Ua))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Vn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Vn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ri[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ri[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ri[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ri[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ri[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ri[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ri[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ri[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ri),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Ri=[new ce,new ce,new ce,new ce,new ce,new ce,new ce,new ce],Vn=new ce,Fa=new va,To=new ce,Ao=new ce,Co=new ce,cr=new ce,fr=new ce,Or=new ce,ms=new ce,Ua=new ce,Oa=new ce,Br=new ce;function Ac(t,e,n,i,r){for(let o=0,s=t.length-3;o<=s;o+=3){Br.fromArray(t,o);const a=r.x*Math.abs(Br.x)+r.y*Math.abs(Br.y)+r.z*Math.abs(Br.z),l=e.dot(Br),u=n.dot(Br),c=i.dot(Br);if(Math.max(-Math.max(l,u,c),Math.min(l,u,c))>a)return!1}return!0}const Vt=new ce,Ba=new Et;let nS=0;class mi{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:nS++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Cp,this.updateRanges=[],this.gpuType=ci,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,o=this.itemSize;r<o;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Ba.fromBufferAttribute(this,n),Ba.applyMatrix3(e),this.setXY(n,Ba.x,Ba.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Vt.fromBufferAttribute(this,n),Vt.applyMatrix3(e),this.setXYZ(n,Vt.x,Vt.y,Vt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Vt.fromBufferAttribute(this,n),Vt.applyMatrix4(e),this.setXYZ(n,Vt.x,Vt.y,Vt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Vt.fromBufferAttribute(this,n),Vt.applyNormalMatrix(e),this.setXYZ(n,Vt.x,Vt.y,Vt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Vt.fromBufferAttribute(this,n),Vt.transformDirection(e),this.setXYZ(n,Vt.x,Vt.y,Vt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=hs(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=gn(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=hs(n,this.array)),n}setX(e,n){return this.normalized&&(n=gn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=hs(n,this.array)),n}setY(e,n){return this.normalized&&(n=gn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=hs(n,this.array)),n}setZ(e,n){return this.normalized&&(n=gn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=hs(n,this.array)),n}setW(e,n){return this.normalized&&(n=gn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=gn(n,this.array),i=gn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=gn(n,this.array),i=gn(i,this.array),r=gn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,o){return e*=this.itemSize,this.normalized&&(n=gn(n,this.array),i=gn(i,this.array),r=gn(r,this.array),o=gn(o,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=o,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Cp&&(e.usage=this.usage),e}}class vv extends mi{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class _v extends mi{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Xi extends mi{constructor(e,n,i){super(new Float32Array(e),n,i)}}const iS=new va,gs=new ce,Cc=new ce;class fh{constructor(e=new ce,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):iS.setFromPoints(e).getCenter(i);let r=0;for(let o=0,s=e.length;o<s;o++)r=Math.max(r,i.distanceToSquared(e[o]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;gs.subVectors(e,this.center);const n=gs.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(gs,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Cc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(gs.copy(e.center).add(Cc)),this.expandByPoint(gs.copy(e.center).sub(Cc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let rS=0;const Pn=new Gt,Rc=new Cn,Ro=new ce,wn=new va,vs=new va,Kt=new ce;class or extends as{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:rS++}),this.uuid=ga(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(O1(e)?_v:vv)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const o=new st().getNormalMatrix(e);i.applyNormalMatrix(o),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Pn.makeRotationFromQuaternion(e),this.applyMatrix4(Pn),this}rotateX(e){return Pn.makeRotationX(e),this.applyMatrix4(Pn),this}rotateY(e){return Pn.makeRotationY(e),this.applyMatrix4(Pn),this}rotateZ(e){return Pn.makeRotationZ(e),this.applyMatrix4(Pn),this}translate(e,n,i){return Pn.makeTranslation(e,n,i),this.applyMatrix4(Pn),this}scale(e,n,i){return Pn.makeScale(e,n,i),this.applyMatrix4(Pn),this}lookAt(e){return Rc.lookAt(e),Rc.updateMatrix(),this.applyMatrix4(Rc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ro).negate(),this.translate(Ro.x,Ro.y,Ro.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,o=e.length;r<o;r++){const s=e[r];i.push(s.x,s.y,s.z||0)}this.setAttribute("position",new Xi(i,3))}else{const i=Math.min(e.length,n.count);for(let r=0;r<i;r++){const o=e[r];n.setXYZ(r,o.x,o.y,o.z||0)}e.length>n.count&&nt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new va);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){gt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ce(-1/0,-1/0,-1/0),new ce(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const o=n[i];wn.setFromBufferAttribute(o),this.morphTargetsRelative?(Kt.addVectors(this.boundingBox.min,wn.min),this.boundingBox.expandByPoint(Kt),Kt.addVectors(this.boundingBox.max,wn.max),this.boundingBox.expandByPoint(Kt)):(this.boundingBox.expandByPoint(wn.min),this.boundingBox.expandByPoint(wn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&gt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new fh);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){gt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ce,1/0);return}if(e){const i=this.boundingSphere.center;if(wn.setFromBufferAttribute(e),n)for(let o=0,s=n.length;o<s;o++){const a=n[o];vs.setFromBufferAttribute(a),this.morphTargetsRelative?(Kt.addVectors(wn.min,vs.min),wn.expandByPoint(Kt),Kt.addVectors(wn.max,vs.max),wn.expandByPoint(Kt)):(wn.expandByPoint(vs.min),wn.expandByPoint(vs.max))}wn.getCenter(i);let r=0;for(let o=0,s=e.count;o<s;o++)Kt.fromBufferAttribute(e,o),r=Math.max(r,i.distanceToSquared(Kt));if(n)for(let o=0,s=n.length;o<s;o++){const a=n[o],l=this.morphTargetsRelative;for(let u=0,c=a.count;u<c;u++)Kt.fromBufferAttribute(a,u),l&&(Ro.fromBufferAttribute(e,u),Kt.add(Ro)),r=Math.max(r,i.distanceToSquared(Kt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&gt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){gt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,o=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new mi(new Float32Array(4*i.count),4));const s=this.getAttribute("tangent"),a=[],l=[];for(let y=0;y<i.count;y++)a[y]=new ce,l[y]=new ce;const u=new ce,c=new ce,f=new ce,d=new Et,h=new Et,g=new Et,_=new ce,m=new ce;function p(y,M,N){u.fromBufferAttribute(i,y),c.fromBufferAttribute(i,M),f.fromBufferAttribute(i,N),d.fromBufferAttribute(o,y),h.fromBufferAttribute(o,M),g.fromBufferAttribute(o,N),c.sub(u),f.sub(u),h.sub(d),g.sub(d);const C=1/(h.x*g.y-g.x*h.y);isFinite(C)&&(_.copy(c).multiplyScalar(g.y).addScaledVector(f,-h.y).multiplyScalar(C),m.copy(f).multiplyScalar(h.x).addScaledVector(c,-g.x).multiplyScalar(C),a[y].add(_),a[M].add(_),a[N].add(_),l[y].add(m),l[M].add(m),l[N].add(m))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let y=0,M=b.length;y<M;++y){const N=b[y],C=N.start,P=N.count;for(let B=C,v=C+P;B<v;B+=3)p(e.getX(B+0),e.getX(B+1),e.getX(B+2))}const S=new ce,x=new ce,D=new ce,O=new ce;function z(y){D.fromBufferAttribute(r,y),O.copy(D);const M=a[y];S.copy(M),S.sub(D.multiplyScalar(D.dot(M))).normalize(),x.crossVectors(O,M);const C=x.dot(l[y])<0?-1:1;s.setXYZW(y,S.x,S.y,S.z,C)}for(let y=0,M=b.length;y<M;++y){const N=b[y],C=N.start,P=N.count;for(let B=C,v=C+P;B<v;B+=3)z(e.getX(B+0)),z(e.getX(B+1)),z(e.getX(B+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new mi(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let d=0,h=i.count;d<h;d++)i.setXYZ(d,0,0,0);const r=new ce,o=new ce,s=new ce,a=new ce,l=new ce,u=new ce,c=new ce,f=new ce;if(e)for(let d=0,h=e.count;d<h;d+=3){const g=e.getX(d+0),_=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(n,g),o.fromBufferAttribute(n,_),s.fromBufferAttribute(n,m),c.subVectors(s,o),f.subVectors(r,o),c.cross(f),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,_),u.fromBufferAttribute(i,m),a.add(c),l.add(c),u.add(c),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(m,u.x,u.y,u.z)}else for(let d=0,h=n.count;d<h;d+=3)r.fromBufferAttribute(n,d+0),o.fromBufferAttribute(n,d+1),s.fromBufferAttribute(n,d+2),c.subVectors(s,o),f.subVectors(r,o),c.cross(f),i.setXYZ(d+0,c.x,c.y,c.z),i.setXYZ(d+1,c.x,c.y,c.z),i.setXYZ(d+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Kt.fromBufferAttribute(e,n),Kt.normalize(),e.setXYZ(n,Kt.x,Kt.y,Kt.z)}toNonIndexed(){function e(a,l){const u=a.array,c=a.itemSize,f=a.normalized,d=new u.constructor(l.length*c);let h=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?h=l[_]*a.data.stride+a.offset:h=l[_]*c;for(let p=0;p<c;p++)d[g++]=u[h++]}return new mi(d,c,f)}if(this.index===null)return nt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new or,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],u=e(l,i);n.setAttribute(a,u)}const o=this.morphAttributes;for(const a in o){const l=[],u=o[a];for(let c=0,f=u.length;c<f;c++){const d=u[c],h=e(d,i);l.push(h)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let a=0,l=s.length;a<l;a++){const u=s[a];n.addGroup(u.start,u.count,u.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let o=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],c=[];for(let f=0,d=u.length;f<d;f++){const h=u[f];c.push(h.toJSON(e.data))}c.length>0&&(r[l]=c,o=!0)}o&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const u in r){const c=r[u];this.setAttribute(u,c.clone(n))}const o=e.morphAttributes;for(const u in o){const c=[],f=o[u];for(let d=0,h=f.length;d<h;d++)c.push(f[d].clone(n));this.morphAttributes[u]=c}this.morphTargetsRelative=e.morphTargetsRelative;const s=e.groups;for(let u=0,c=s.length;u<c;u++){const f=s[u];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let oS=0;class Iu extends as{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:oS++}),this.uuid=ga(),this.name="",this.type="Material",this.blending=zo,this.side=Rr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=vf,this.blendDst=_f,this.blendEquation=Xr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new wt(0,0,0),this.blendAlpha=0,this.depthFunc=Zo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ap,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=yo,this.stencilZFail=yo,this.stencilZPass=yo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){nt(`Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){nt(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==zo&&(i.blending=this.blending),this.side!==Rr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==vf&&(i.blendSrc=this.blendSrc),this.blendDst!==_f&&(i.blendDst=this.blendDst),this.blendEquation!==Xr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Zo&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ap&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==yo&&(i.stencilFail=this.stencilFail),this.stencilZFail!==yo&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==yo&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(o){const s=[];for(const a in o){const l=o[a];delete l.metadata,s.push(l)}return s}if(n){const o=r(e.textures),s=r(e.images);o.length>0&&(i.textures=o),s.length>0&&(i.images=s)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let o=0;o!==r;++o)i[o]=n[o].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Ii=new ce,Ic=new ce,ka=new ce,dr=new ce,Pc=new ce,za=new ce,Nc=new ce;class sS{constructor(e=new ce,n=new ce(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ii)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Ii.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Ii.copy(this.origin).addScaledVector(this.direction,n),Ii.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Ic.copy(e).add(n).multiplyScalar(.5),ka.copy(n).sub(e).normalize(),dr.copy(this.origin).sub(Ic);const o=e.distanceTo(n)*.5,s=-this.direction.dot(ka),a=dr.dot(this.direction),l=-dr.dot(ka),u=dr.lengthSq(),c=Math.abs(1-s*s);let f,d,h,g;if(c>0)if(f=s*l-a,d=s*a-l,g=o*c,f>=0)if(d>=-g)if(d<=g){const _=1/c;f*=_,d*=_,h=f*(f+s*d+2*a)+d*(s*f+d+2*l)+u}else d=o,f=Math.max(0,-(s*d+a)),h=-f*f+d*(d+2*l)+u;else d=-o,f=Math.max(0,-(s*d+a)),h=-f*f+d*(d+2*l)+u;else d<=-g?(f=Math.max(0,-(-s*o+a)),d=f>0?-o:Math.min(Math.max(-o,-l),o),h=-f*f+d*(d+2*l)+u):d<=g?(f=0,d=Math.min(Math.max(-o,-l),o),h=d*(d+2*l)+u):(f=Math.max(0,-(s*o+a)),d=f>0?o:Math.min(Math.max(-o,-l),o),h=-f*f+d*(d+2*l)+u);else d=s>0?-o:o,f=Math.max(0,-(s*d+a)),h=-f*f+d*(d+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Ic).addScaledVector(ka,d),h}intersectSphere(e,n){Ii.subVectors(e.center,this.origin);const i=Ii.dot(this.direction),r=Ii.dot(Ii)-i*i,o=e.radius*e.radius;if(r>o)return null;const s=Math.sqrt(o-r),a=i-s,l=i+s;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,o,s,a,l;const u=1/this.direction.x,c=1/this.direction.y,f=1/this.direction.z,d=this.origin;return u>=0?(i=(e.min.x-d.x)*u,r=(e.max.x-d.x)*u):(i=(e.max.x-d.x)*u,r=(e.min.x-d.x)*u),c>=0?(o=(e.min.y-d.y)*c,s=(e.max.y-d.y)*c):(o=(e.max.y-d.y)*c,s=(e.min.y-d.y)*c),i>s||o>r||((o>i||isNaN(i))&&(i=o),(s<r||isNaN(r))&&(r=s),f>=0?(a=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(a=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,Ii)!==null}intersectTriangle(e,n,i,r,o){Pc.subVectors(n,e),za.subVectors(i,e),Nc.crossVectors(Pc,za);let s=this.direction.dot(Nc),a;if(s>0){if(r)return null;a=1}else if(s<0)a=-1,s=-s;else return null;dr.subVectors(this.origin,e);const l=a*this.direction.dot(za.crossVectors(dr,za));if(l<0)return null;const u=a*this.direction.dot(Pc.cross(dr));if(u<0||l+u>s)return null;const c=-a*dr.dot(Nc);return c<0?null:this.at(c/s,o)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class yv extends Iu{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new wt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qi,this.combine=j0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const $p=new Gt,kr=new sS,Va=new fh,Gp=new ce,Ha=new ce,$a=new ce,Ga=new ce,Dc=new ce,Wa=new ce,Wp=new ce,Xa=new ce;class xi extends Cn{constructor(e=new or,n=new yv){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,s=r.length;o<s;o++){const a=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,o=i.morphAttributes.position,s=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(o&&a){Wa.set(0,0,0);for(let l=0,u=o.length;l<u;l++){const c=a[l],f=o[l];c!==0&&(Dc.fromBufferAttribute(f,e),s?Wa.addScaledVector(Dc,c):Wa.addScaledVector(Dc.sub(n),c))}n.add(Wa)}return n}raycast(e,n){const i=this.geometry,r=this.material,o=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Va.copy(i.boundingSphere),Va.applyMatrix4(o),kr.copy(e.ray).recast(e.near),!(Va.containsPoint(kr.origin)===!1&&(kr.intersectSphere(Va,Gp)===null||kr.origin.distanceToSquared(Gp)>(e.far-e.near)**2))&&($p.copy(o).invert(),kr.copy(e.ray).applyMatrix4($p),!(i.boundingBox!==null&&kr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,kr)))}_computeIntersections(e,n,i){let r;const o=this.geometry,s=this.material,a=o.index,l=o.attributes.position,u=o.attributes.uv,c=o.attributes.uv1,f=o.attributes.normal,d=o.groups,h=o.drawRange;if(a!==null)if(Array.isArray(s))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=s[m.materialIndex],b=Math.max(m.start,h.start),S=Math.min(a.count,Math.min(m.start+m.count,h.start+h.count));for(let x=b,D=S;x<D;x+=3){const O=a.getX(x),z=a.getX(x+1),y=a.getX(x+2);r=Ya(this,p,e,i,u,c,f,O,z,y),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const g=Math.max(0,h.start),_=Math.min(a.count,h.start+h.count);for(let m=g,p=_;m<p;m+=3){const b=a.getX(m),S=a.getX(m+1),x=a.getX(m+2);r=Ya(this,s,e,i,u,c,f,b,S,x),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(s))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=s[m.materialIndex],b=Math.max(m.start,h.start),S=Math.min(l.count,Math.min(m.start+m.count,h.start+h.count));for(let x=b,D=S;x<D;x+=3){const O=x,z=x+1,y=x+2;r=Ya(this,p,e,i,u,c,f,O,z,y),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const g=Math.max(0,h.start),_=Math.min(l.count,h.start+h.count);for(let m=g,p=_;m<p;m+=3){const b=m,S=m+1,x=m+2;r=Ya(this,s,e,i,u,c,f,b,S,x),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}}function aS(t,e,n,i,r,o,s,a){let l;if(e.side===bn?l=i.intersectTriangle(s,o,r,!0,a):l=i.intersectTriangle(r,o,s,e.side===Rr,a),l===null)return null;Xa.copy(a),Xa.applyMatrix4(t.matrixWorld);const u=n.ray.origin.distanceTo(Xa);return u<n.near||u>n.far?null:{distance:u,point:Xa.clone(),object:t}}function Ya(t,e,n,i,r,o,s,a,l,u){t.getVertexPosition(a,Ha),t.getVertexPosition(l,$a),t.getVertexPosition(u,Ga);const c=aS(t,e,n,i,Ha,$a,Ga,Wp);if(c){const f=new ce;$n.getBarycoord(Wp,Ha,$a,Ga,f),r&&(c.uv=$n.getInterpolatedAttribute(r,a,l,u,f,new Et)),o&&(c.uv1=$n.getInterpolatedAttribute(o,a,l,u,f,new Et)),s&&(c.normal=$n.getInterpolatedAttribute(s,a,l,u,f,new ce),c.normal.dot(i.direction)>0&&c.normal.multiplyScalar(-1));const d={a,b:l,c:u,normal:new ce,materialIndex:0};$n.getNormal(Ha,$a,Ga,d.normal),c.face=d,c.barycoord=f}return c}class lS extends Qt{constructor(e=null,n=1,i=1,r,o,s,a,l,u=Jt,c=Jt,f,d){super(null,s,a,l,u,c,r,o,f,d),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Lc=new ce,uS=new ce,cS=new st;class Wr{constructor(e=new ce(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Lc.subVectors(i,n).cross(uS.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(Lc),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/r;return o<0||o>1?null:n.copy(e.start).addScaledVector(i,o)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||cS.getNormalMatrix(e),r=this.coplanarPoint(Lc).applyMatrix4(e),o=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(o),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const zr=new fh,fS=new Et(.5,.5),qa=new ce;class xv{constructor(e=new Wr,n=new Wr,i=new Wr,r=new Wr,o=new Wr,s=new Wr){this.planes=[e,n,i,r,o,s]}set(e,n,i,r,o,s){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(o),a[5].copy(s),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=fi,i=!1){const r=this.planes,o=e.elements,s=o[0],a=o[1],l=o[2],u=o[3],c=o[4],f=o[5],d=o[6],h=o[7],g=o[8],_=o[9],m=o[10],p=o[11],b=o[12],S=o[13],x=o[14],D=o[15];if(r[0].setComponents(u-s,h-c,p-g,D-b).normalize(),r[1].setComponents(u+s,h+c,p+g,D+b).normalize(),r[2].setComponents(u+a,h+f,p+_,D+S).normalize(),r[3].setComponents(u-a,h-f,p-_,D-S).normalize(),i)r[4].setComponents(l,d,m,x).normalize(),r[5].setComponents(u-l,h-d,p-m,D-x).normalize();else if(r[4].setComponents(u-l,h-d,p-m,D-x).normalize(),n===fi)r[5].setComponents(u+l,h+d,p+m,D+x).normalize();else if(n===Wl)r[5].setComponents(l,d,m,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),zr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),zr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(zr)}intersectsSprite(e){zr.center.set(0,0,0);const n=fS.distanceTo(e.center);return zr.radius=.7071067811865476+n,zr.applyMatrix4(e.matrixWorld),this.intersectsSphere(zr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let o=0;o<6;o++)if(n[o].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(qa.x=r.normal.x>0?e.max.x:e.min.x,qa.y=r.normal.y>0?e.max.y:e.min.y,qa.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(qa)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class dS extends Qt{constructor(e,n,i,r,o=Ct,s=Ct,a,l,u){super(e,n,i,r,o,s,a,l,u),this.isVideoTexture=!0,this.generateMipmaps=!1,this._requestVideoFrameCallbackId=0;const c=this;function f(){c.needsUpdate=!0,c._requestVideoFrameCallbackId=e.requestVideoFrameCallback(f)}"requestVideoFrameCallback"in e&&(this._requestVideoFrameCallbackId=e.requestVideoFrameCallback(f))}clone(){return new this.constructor(this.image).copy(this)}update(){const e=this.image;"requestVideoFrameCallback"in e===!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}dispose(){this._requestVideoFrameCallbackId!==0&&(this.source.data.cancelVideoFrameCallback(this._requestVideoFrameCallbackId),this._requestVideoFrameCallbackId=0),super.dispose()}}class bv extends Qt{constructor(e=[],n=lo,i,r,o,s,a,l,u,c){super(e,n,i,r,o,s,a,l,u,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class js extends Qt{constructor(e,n,i=yi,r,o,s,a=Jt,l=Jt,u,c=Ji,f=1){if(c!==Ji&&c!==Jr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:n,depth:f};super(d,r,o,s,a,l,c,i,u),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new ch(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class hS extends js{constructor(e,n=yi,i=lo,r,o,s=Jt,a=Jt,l,u=Ji){const c={width:e,height:e,depth:1},f=[c,c,c,c,c,c];super(e,e,n,i,r,o,s,a,l,u),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Sv extends Qt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class _a extends or{constructor(e=1,n=1,i=1,r=1,o=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:o,depthSegments:s};const a=this;r=Math.floor(r),o=Math.floor(o),s=Math.floor(s);const l=[],u=[],c=[],f=[];let d=0,h=0;g("z","y","x",-1,-1,i,n,e,s,o,0),g("z","y","x",1,-1,i,n,-e,s,o,1),g("x","z","y",1,1,e,i,n,r,s,2),g("x","z","y",1,-1,e,i,-n,r,s,3),g("x","y","z",1,-1,e,n,i,r,o,4),g("x","y","z",-1,-1,e,n,-i,r,o,5),this.setIndex(l),this.setAttribute("position",new Xi(u,3)),this.setAttribute("normal",new Xi(c,3)),this.setAttribute("uv",new Xi(f,2));function g(_,m,p,b,S,x,D,O,z,y,M){const N=x/z,C=D/y,P=x/2,B=D/2,v=O/2,A=z+1,E=y+1;let I=0,V=0;const W=new ce;for(let q=0;q<E;q++){const $=q*C-B;for(let K=0;K<A;K++){const ae=K*N-P;W[_]=ae*b,W[m]=$*S,W[p]=v,u.push(W.x,W.y,W.z),W[_]=0,W[m]=0,W[p]=O>0?1:-1,c.push(W.x,W.y,W.z),f.push(K/z),f.push(1-q/y),I+=1}}for(let q=0;q<y;q++)for(let $=0;$<z;$++){const K=d+$+A*q,ae=d+$+A*(q+1),ve=d+($+1)+A*(q+1),pe=d+($+1)+A*q;l.push(K,ae,pe),l.push(ae,ve,pe),V+=6}a.addGroup(h,V,M),h+=V,d+=I}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _a(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class ya extends or{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const o=e/2,s=n/2,a=Math.floor(i),l=Math.floor(r),u=a+1,c=l+1,f=e/a,d=n/l,h=[],g=[],_=[],m=[];for(let p=0;p<c;p++){const b=p*d-s;for(let S=0;S<u;S++){const x=S*f-o;g.push(x,-b,0),_.push(0,0,1),m.push(S/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let b=0;b<a;b++){const S=b+u*p,x=b+u*(p+1),D=b+1+u*(p+1),O=b+1+u*p;h.push(S,x,O),h.push(x,D,O)}this.setIndex(h),this.setAttribute("position",new Xi(g,3)),this.setAttribute("normal",new Xi(_,3)),this.setAttribute("uv",new Xi(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ya(e.width,e.height,e.widthSegments,e.heightSegments)}}function Qo(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(nt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function un(t){const e={};for(let n=0;n<t.length;n++){const i=Qo(t[n]);for(const r in i)e[r]=i[r]}return e}function pS(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function Mv(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ht.workingColorSpace}const mS={clone:Qo,merge:un};var gS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,vS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Zn extends Iu{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=gS,this.fragmentShader=vS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Qo(e.uniforms),this.uniformsGroups=pS(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const s=this.uniforms[r].value;s&&s.isTexture?n.uniforms[r]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?n.uniforms[r]={type:"c",value:s.getHex()}:s&&s.isVector2?n.uniforms[r]={type:"v2",value:s.toArray()}:s&&s.isVector3?n.uniforms[r]={type:"v3",value:s.toArray()}:s&&s.isVector4?n.uniforms[r]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?n.uniforms[r]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?n.uniforms[r]={type:"m4",value:s.toArray()}:n.uniforms[r]={value:s}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class _S extends Zn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class yS extends Iu{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=C1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class xS extends Iu{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Ka=new ce,Za=new ls,ti=new ce;class wv extends Cn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Gt,this.projectionMatrix=new Gt,this.projectionMatrixInverse=new Gt,this.coordinateSystem=fi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Ka,Za,ti),ti.x===1&&ti.y===1&&ti.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ka,Za,ti.set(1,1,1)).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorld.decompose(Ka,Za,ti),ti.x===1&&ti.y===1&&ti.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ka,Za,ti.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const hr=new ce,Xp=new Et,Yp=new Et;class Hn extends wv{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=sd*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(fc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return sd*2*Math.atan(Math.tan(fc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){hr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(hr.x,hr.y).multiplyScalar(-e/hr.z),hr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(hr.x,hr.y).multiplyScalar(-e/hr.z)}getViewSize(e,n){return this.getViewBounds(e,Xp,Yp),n.subVectors(Yp,Xp)}setViewOffset(e,n,i,r,o,s){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=o,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(fc*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,o=-.5*r;const s=this.view;if(this.view!==null&&this.view.enabled){const l=s.fullWidth,u=s.fullHeight;o+=s.offsetX*r/l,n-=s.offsetY*i/u,r*=s.width/l,i*=s.height/u}const a=this.filmOffset;a!==0&&(o+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+r,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class dh extends wv{constructor(e=-1,n=1,i=1,r=-1,o=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=o,this.far=s,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,o,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=o,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let o=i-e,s=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=u*this.view.offsetX,s=o+u*this.view.width,a-=c*this.view.offsetY,l=a-c*this.view.height}this.projectionMatrix.makeOrthographic(o,s,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Io=-90,Po=1;class bS extends Cn{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Hn(Io,Po,e,n);r.layers=this.layers,this.add(r);const o=new Hn(Io,Po,e,n);o.layers=this.layers,this.add(o);const s=new Hn(Io,Po,e,n);s.layers=this.layers,this.add(s);const a=new Hn(Io,Po,e,n);a.layers=this.layers,this.add(a);const l=new Hn(Io,Po,e,n);l.layers=this.layers,this.add(l);const u=new Hn(Io,Po,e,n);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,o,s,a,l]=n;for(const u of n)this.remove(u);if(e===fi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Wl)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of n)this.add(u),u.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[o,s,a,l,u,c]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,o),e.setRenderTarget(i,1,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,s),e.setRenderTarget(i,2,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,a),e.setRenderTarget(i,3,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,l),e.setRenderTarget(i,4,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,u),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,c),e.setRenderTarget(f,d,h),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class SS extends Hn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function qp(t,e,n,i){const r=MS(i);switch(n){case cv:return t*e;case dv:return t*e/r.components*r.byteLength;case oh:return t*e/r.components*r.byteLength;case Jo:return t*e*2/r.components*r.byteLength;case sh:return t*e*2/r.components*r.byteLength;case fv:return t*e*3/r.components*r.byteLength;case pn:return t*e*4/r.components*r.byteLength;case ah:return t*e*4/r.components*r.byteLength;case _l:case yl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case xl:case bl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Rf:case Pf:return Math.max(t,16)*Math.max(e,8)/4;case Cf:case If:return Math.max(t,8)*Math.max(e,8)/2;case Nf:case Df:case Ff:case Uf:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Lf:case Of:case Bf:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case kf:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case zf:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Vf:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case Hf:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case $f:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case Gf:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case Wf:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case Xf:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case Yf:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case qf:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case Kf:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case Zf:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case jf:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case Jf:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case Qf:case ed:case td:return Math.ceil(t/4)*Math.ceil(e/4)*16;case nd:case id:return Math.ceil(t/4)*Math.ceil(e/4)*8;case rd:case od:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function MS(t){switch(t){case fn:case sv:return{byteLength:1,components:1};case Ks:case av:case ji:return{byteLength:2,components:1};case ih:case rh:return{byteLength:2,components:4};case yi:case nh:case ci:return{byteLength:4,components:1};case lv:case uv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:th}}));typeof window<"u"&&(window.__THREE__?nt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=th);function Ev(){let t=null,e=!1,n=null,i=null;function r(o,s){n(o,s),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(o){n=o},setContext:function(o){t=o}}}function wS(t){const e=new WeakMap;function n(a,l){const u=a.array,c=a.usage,f=u.byteLength,d=t.createBuffer();t.bindBuffer(l,d),t.bufferData(l,u,c),a.onUploadCallback();let h;if(u instanceof Float32Array)h=t.FLOAT;else if(typeof Float16Array<"u"&&u instanceof Float16Array)h=t.HALF_FLOAT;else if(u instanceof Uint16Array)a.isFloat16BufferAttribute?h=t.HALF_FLOAT:h=t.UNSIGNED_SHORT;else if(u instanceof Int16Array)h=t.SHORT;else if(u instanceof Uint32Array)h=t.UNSIGNED_INT;else if(u instanceof Int32Array)h=t.INT;else if(u instanceof Int8Array)h=t.BYTE;else if(u instanceof Uint8Array)h=t.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)h=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:d,type:h,bytesPerElement:u.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,l,u){const c=l.array,f=l.updateRanges;if(t.bindBuffer(u,a),f.length===0)t.bufferSubData(u,0,c);else{f.sort((h,g)=>h.start-g.start);let d=0;for(let h=1;h<f.length;h++){const g=f[d],_=f[h];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,f[d]=_)}f.length=d+1;for(let h=0,g=f.length;h<g;h++){const _=f[h];t.bufferSubData(u,_.start*c.BYTES_PER_ELEMENT,c,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function o(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function s(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const c=e.get(a);(!c||c.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const u=e.get(a);if(u===void 0)e.set(a,n(a,l));else if(u.version<a.version){if(u.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(u.buffer,a,l),u.version=a.version}}return{get:r,remove:o,update:s}}var ES=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,TS=`#ifdef USE_ALPHAHASH
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
#endif`,AS=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,CS=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,RS=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,IS=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,PS=`#ifdef USE_AOMAP
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
#endif`,NS=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,DS=`#ifdef USE_BATCHING
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
#endif`,LS=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,FS=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,US=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,OS=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,BS=`#ifdef USE_IRIDESCENCE
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
#endif`,kS=`#ifdef USE_BUMPMAP
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
#endif`,zS=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,VS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,HS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,$S=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,GS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,WS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,XS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,YS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,qS=`#define PI 3.141592653589793
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
} // validated`,KS=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,ZS=`vec3 transformedNormal = objectNormal;
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
#endif`,jS=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,JS=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,QS=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,eM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,tM="gl_FragColor = linearToOutputTexel( gl_FragColor );",nM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,iM=`#ifdef USE_ENVMAP
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
#endif`,rM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,oM=`#ifdef USE_ENVMAP
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
#endif`,sM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,aM=`#ifdef USE_ENVMAP
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
#endif`,lM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,uM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,cM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,dM=`#ifdef USE_GRADIENTMAP
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
}`,hM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,pM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,mM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,gM=`uniform bool receiveShadow;
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
#endif`,vM=`#ifdef USE_ENVMAP
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
#endif`,_M=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,yM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,xM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,bM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,SM=`PhysicalMaterial material;
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
#endif`,MM=`uniform sampler2D dfgLUT;
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
}`,wM=`
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
#endif`,EM=`#if defined( RE_IndirectDiffuse )
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
#endif`,TM=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,AM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,CM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,RM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,IM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,PM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,NM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,DM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,LM=`#if defined( USE_POINTS_UV )
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
#endif`,FM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,UM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,OM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,BM=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,kM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,zM=`#ifdef USE_MORPHTARGETS
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
#endif`,VM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,HM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,$M=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,GM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,WM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,XM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,YM=`#ifdef USE_NORMALMAP
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
#endif`,qM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,KM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ZM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,jM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,JM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,QM=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,ew=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,tw=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,nw=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,iw=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,rw=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ow=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,sw=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,aw=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,lw=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,uw=`float getShadowMask() {
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
}`,cw=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,fw=`#ifdef USE_SKINNING
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
#endif`,dw=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,hw=`#ifdef USE_SKINNING
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
#endif`,pw=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,mw=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,gw=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,vw=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,_w=`#ifdef USE_TRANSMISSION
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
#endif`,yw=`#ifdef USE_TRANSMISSION
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
#endif`,xw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,bw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Sw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Mw=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ww=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ew=`uniform sampler2D t2D;
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
}`,Tw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Aw=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Cw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Rw=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Iw=`#include <common>
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
}`,Pw=`#if DEPTH_PACKING == 3200
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
}`,Nw=`#define DISTANCE
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
}`,Dw=`#define DISTANCE
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
}`,Lw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Fw=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Uw=`uniform float scale;
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
}`,Ow=`uniform vec3 diffuse;
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
}`,Bw=`#include <common>
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
}`,kw=`uniform vec3 diffuse;
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
}`,zw=`#define LAMBERT
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
}`,Vw=`#define LAMBERT
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
}`,Hw=`#define MATCAP
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
}`,$w=`#define MATCAP
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
}`,Gw=`#define NORMAL
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
}`,Ww=`#define NORMAL
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
}`,Xw=`#define PHONG
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
}`,Yw=`#define PHONG
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
}`,qw=`#define STANDARD
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
}`,Kw=`#define STANDARD
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
}`,Zw=`#define TOON
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
}`,jw=`#define TOON
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
}`,Jw=`uniform float size;
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
}`,Qw=`uniform vec3 diffuse;
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
}`,eE=`#include <common>
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
}`,tE=`uniform vec3 color;
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
}`,nE=`uniform float rotation;
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
}`,iE=`uniform vec3 diffuse;
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
}`,at={alphahash_fragment:ES,alphahash_pars_fragment:TS,alphamap_fragment:AS,alphamap_pars_fragment:CS,alphatest_fragment:RS,alphatest_pars_fragment:IS,aomap_fragment:PS,aomap_pars_fragment:NS,batching_pars_vertex:DS,batching_vertex:LS,begin_vertex:FS,beginnormal_vertex:US,bsdfs:OS,iridescence_fragment:BS,bumpmap_pars_fragment:kS,clipping_planes_fragment:zS,clipping_planes_pars_fragment:VS,clipping_planes_pars_vertex:HS,clipping_planes_vertex:$S,color_fragment:GS,color_pars_fragment:WS,color_pars_vertex:XS,color_vertex:YS,common:qS,cube_uv_reflection_fragment:KS,defaultnormal_vertex:ZS,displacementmap_pars_vertex:jS,displacementmap_vertex:JS,emissivemap_fragment:QS,emissivemap_pars_fragment:eM,colorspace_fragment:tM,colorspace_pars_fragment:nM,envmap_fragment:iM,envmap_common_pars_fragment:rM,envmap_pars_fragment:oM,envmap_pars_vertex:sM,envmap_physical_pars_fragment:vM,envmap_vertex:aM,fog_vertex:lM,fog_pars_vertex:uM,fog_fragment:cM,fog_pars_fragment:fM,gradientmap_pars_fragment:dM,lightmap_pars_fragment:hM,lights_lambert_fragment:pM,lights_lambert_pars_fragment:mM,lights_pars_begin:gM,lights_toon_fragment:_M,lights_toon_pars_fragment:yM,lights_phong_fragment:xM,lights_phong_pars_fragment:bM,lights_physical_fragment:SM,lights_physical_pars_fragment:MM,lights_fragment_begin:wM,lights_fragment_maps:EM,lights_fragment_end:TM,logdepthbuf_fragment:AM,logdepthbuf_pars_fragment:CM,logdepthbuf_pars_vertex:RM,logdepthbuf_vertex:IM,map_fragment:PM,map_pars_fragment:NM,map_particle_fragment:DM,map_particle_pars_fragment:LM,metalnessmap_fragment:FM,metalnessmap_pars_fragment:UM,morphinstance_vertex:OM,morphcolor_vertex:BM,morphnormal_vertex:kM,morphtarget_pars_vertex:zM,morphtarget_vertex:VM,normal_fragment_begin:HM,normal_fragment_maps:$M,normal_pars_fragment:GM,normal_pars_vertex:WM,normal_vertex:XM,normalmap_pars_fragment:YM,clearcoat_normal_fragment_begin:qM,clearcoat_normal_fragment_maps:KM,clearcoat_pars_fragment:ZM,iridescence_pars_fragment:jM,opaque_fragment:JM,packing:QM,premultiplied_alpha_fragment:ew,project_vertex:tw,dithering_fragment:nw,dithering_pars_fragment:iw,roughnessmap_fragment:rw,roughnessmap_pars_fragment:ow,shadowmap_pars_fragment:sw,shadowmap_pars_vertex:aw,shadowmap_vertex:lw,shadowmask_pars_fragment:uw,skinbase_vertex:cw,skinning_pars_vertex:fw,skinning_vertex:dw,skinnormal_vertex:hw,specularmap_fragment:pw,specularmap_pars_fragment:mw,tonemapping_fragment:gw,tonemapping_pars_fragment:vw,transmission_fragment:_w,transmission_pars_fragment:yw,uv_pars_fragment:xw,uv_pars_vertex:bw,uv_vertex:Sw,worldpos_vertex:Mw,background_vert:ww,background_frag:Ew,backgroundCube_vert:Tw,backgroundCube_frag:Aw,cube_vert:Cw,cube_frag:Rw,depth_vert:Iw,depth_frag:Pw,distance_vert:Nw,distance_frag:Dw,equirect_vert:Lw,equirect_frag:Fw,linedashed_vert:Uw,linedashed_frag:Ow,meshbasic_vert:Bw,meshbasic_frag:kw,meshlambert_vert:zw,meshlambert_frag:Vw,meshmatcap_vert:Hw,meshmatcap_frag:$w,meshnormal_vert:Gw,meshnormal_frag:Ww,meshphong_vert:Xw,meshphong_frag:Yw,meshphysical_vert:qw,meshphysical_frag:Kw,meshtoon_vert:Zw,meshtoon_frag:jw,points_vert:Jw,points_frag:Qw,shadow_vert:eE,shadow_frag:tE,sprite_vert:nE,sprite_frag:iE},Ne={common:{diffuse:{value:new wt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new st},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new st}},envmap:{envMap:{value:null},envMapRotation:{value:new st},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new st}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new st}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new st},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new st},normalScale:{value:new Et(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new st},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new st}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new st}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new st}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new wt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new wt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0},uvTransform:{value:new st}},sprite:{diffuse:{value:new wt(16777215)},opacity:{value:1},center:{value:new Et(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new st},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0}}},si={basic:{uniforms:un([Ne.common,Ne.specularmap,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.fog]),vertexShader:at.meshbasic_vert,fragmentShader:at.meshbasic_frag},lambert:{uniforms:un([Ne.common,Ne.specularmap,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.fog,Ne.lights,{emissive:{value:new wt(0)},envMapIntensity:{value:1}}]),vertexShader:at.meshlambert_vert,fragmentShader:at.meshlambert_frag},phong:{uniforms:un([Ne.common,Ne.specularmap,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.fog,Ne.lights,{emissive:{value:new wt(0)},specular:{value:new wt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:at.meshphong_vert,fragmentShader:at.meshphong_frag},standard:{uniforms:un([Ne.common,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.roughnessmap,Ne.metalnessmap,Ne.fog,Ne.lights,{emissive:{value:new wt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:at.meshphysical_vert,fragmentShader:at.meshphysical_frag},toon:{uniforms:un([Ne.common,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.gradientmap,Ne.fog,Ne.lights,{emissive:{value:new wt(0)}}]),vertexShader:at.meshtoon_vert,fragmentShader:at.meshtoon_frag},matcap:{uniforms:un([Ne.common,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.fog,{matcap:{value:null}}]),vertexShader:at.meshmatcap_vert,fragmentShader:at.meshmatcap_frag},points:{uniforms:un([Ne.points,Ne.fog]),vertexShader:at.points_vert,fragmentShader:at.points_frag},dashed:{uniforms:un([Ne.common,Ne.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:at.linedashed_vert,fragmentShader:at.linedashed_frag},depth:{uniforms:un([Ne.common,Ne.displacementmap]),vertexShader:at.depth_vert,fragmentShader:at.depth_frag},normal:{uniforms:un([Ne.common,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,{opacity:{value:1}}]),vertexShader:at.meshnormal_vert,fragmentShader:at.meshnormal_frag},sprite:{uniforms:un([Ne.sprite,Ne.fog]),vertexShader:at.sprite_vert,fragmentShader:at.sprite_frag},background:{uniforms:{uvTransform:{value:new st},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:at.background_vert,fragmentShader:at.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new st}},vertexShader:at.backgroundCube_vert,fragmentShader:at.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:at.cube_vert,fragmentShader:at.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:at.equirect_vert,fragmentShader:at.equirect_frag},distance:{uniforms:un([Ne.common,Ne.displacementmap,{referencePosition:{value:new ce},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:at.distance_vert,fragmentShader:at.distance_frag},shadow:{uniforms:un([Ne.lights,Ne.fog,{color:{value:new wt(0)},opacity:{value:1}}]),vertexShader:at.shadow_vert,fragmentShader:at.shadow_frag}};si.physical={uniforms:un([si.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new st},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new st},clearcoatNormalScale:{value:new Et(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new st},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new st},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new st},sheen:{value:0},sheenColor:{value:new wt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new st},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new st},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new st},transmissionSamplerSize:{value:new Et},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new st},attenuationDistance:{value:0},attenuationColor:{value:new wt(0)},specularColor:{value:new wt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new st},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new st},anisotropyVector:{value:new Et},anisotropyMap:{value:null},anisotropyMapTransform:{value:new st}}]),vertexShader:at.meshphysical_vert,fragmentShader:at.meshphysical_frag};const ja={r:0,b:0,g:0},Vr=new Qi,rE=new Gt;function oE(t,e,n,i,r,o){const s=new wt(0);let a=r===!0?0:1,l,u,c=null,f=0,d=null;function h(b){let S=b.isScene===!0?b.background:null;if(S&&S.isTexture){const x=b.backgroundBlurriness>0;S=e.get(S,x)}return S}function g(b){let S=!1;const x=h(b);x===null?m(s,a):x&&x.isColor&&(m(x,1),S=!0);const D=t.xr.getEnvironmentBlendMode();D==="additive"?n.buffers.color.setClear(0,0,0,1,o):D==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(t.autoClear||S)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function _(b,S){const x=h(S);x&&(x.isCubeTexture||x.mapping===Ru)?(u===void 0&&(u=new xi(new _a(1,1,1),new Zn({name:"BackgroundCubeMaterial",uniforms:Qo(si.backgroundCube.uniforms),vertexShader:si.backgroundCube.vertexShader,fragmentShader:si.backgroundCube.fragmentShader,side:bn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(D,O,z){this.matrixWorld.copyPosition(z.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),Vr.copy(S.backgroundRotation),Vr.x*=-1,Vr.y*=-1,Vr.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Vr.y*=-1,Vr.z*=-1),u.material.uniforms.envMap.value=x,u.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(rE.makeRotationFromEuler(Vr)),u.material.toneMapped=ht.getTransfer(x.colorSpace)!==Mt,(c!==x||f!==x.version||d!==t.toneMapping)&&(u.material.needsUpdate=!0,c=x,f=x.version,d=t.toneMapping),u.layers.enableAll(),b.unshift(u,u.geometry,u.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new xi(new ya(2,2),new Zn({name:"BackgroundMaterial",uniforms:Qo(si.background.uniforms),vertexShader:si.background.vertexShader,fragmentShader:si.background.fragmentShader,side:Rr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,l.material.toneMapped=ht.getTransfer(x.colorSpace)!==Mt,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(c!==x||f!==x.version||d!==t.toneMapping)&&(l.material.needsUpdate=!0,c=x,f=x.version,d=t.toneMapping),l.layers.enableAll(),b.unshift(l,l.geometry,l.material,0,0,null))}function m(b,S){b.getRGB(ja,Mv(t)),n.buffers.color.setClear(ja.r,ja.g,ja.b,S,o)}function p(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return s},setClearColor:function(b,S=1){s.set(b),a=S,m(s,a)},getClearAlpha:function(){return a},setClearAlpha:function(b){a=b,m(s,a)},render:g,addToRenderList:_,dispose:p}}function sE(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=d(null);let o=r,s=!1;function a(C,P,B,v,A){let E=!1;const I=f(C,v,B,P);o!==I&&(o=I,u(o.object)),E=h(C,v,B,A),E&&g(C,v,B,A),A!==null&&e.update(A,t.ELEMENT_ARRAY_BUFFER),(E||s)&&(s=!1,x(C,P,B,v),A!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(A).buffer))}function l(){return t.createVertexArray()}function u(C){return t.bindVertexArray(C)}function c(C){return t.deleteVertexArray(C)}function f(C,P,B,v){const A=v.wireframe===!0;let E=i[P.id];E===void 0&&(E={},i[P.id]=E);const I=C.isInstancedMesh===!0?C.id:0;let V=E[I];V===void 0&&(V={},E[I]=V);let W=V[B.id];W===void 0&&(W={},V[B.id]=W);let q=W[A];return q===void 0&&(q=d(l()),W[A]=q),q}function d(C){const P=[],B=[],v=[];for(let A=0;A<n;A++)P[A]=0,B[A]=0,v[A]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:B,attributeDivisors:v,object:C,attributes:{},index:null}}function h(C,P,B,v){const A=o.attributes,E=P.attributes;let I=0;const V=B.getAttributes();for(const W in V)if(V[W].location>=0){const $=A[W];let K=E[W];if(K===void 0&&(W==="instanceMatrix"&&C.instanceMatrix&&(K=C.instanceMatrix),W==="instanceColor"&&C.instanceColor&&(K=C.instanceColor)),$===void 0||$.attribute!==K||K&&$.data!==K.data)return!0;I++}return o.attributesNum!==I||o.index!==v}function g(C,P,B,v){const A={},E=P.attributes;let I=0;const V=B.getAttributes();for(const W in V)if(V[W].location>=0){let $=E[W];$===void 0&&(W==="instanceMatrix"&&C.instanceMatrix&&($=C.instanceMatrix),W==="instanceColor"&&C.instanceColor&&($=C.instanceColor));const K={};K.attribute=$,$&&$.data&&(K.data=$.data),A[W]=K,I++}o.attributes=A,o.attributesNum=I,o.index=v}function _(){const C=o.newAttributes;for(let P=0,B=C.length;P<B;P++)C[P]=0}function m(C){p(C,0)}function p(C,P){const B=o.newAttributes,v=o.enabledAttributes,A=o.attributeDivisors;B[C]=1,v[C]===0&&(t.enableVertexAttribArray(C),v[C]=1),A[C]!==P&&(t.vertexAttribDivisor(C,P),A[C]=P)}function b(){const C=o.newAttributes,P=o.enabledAttributes;for(let B=0,v=P.length;B<v;B++)P[B]!==C[B]&&(t.disableVertexAttribArray(B),P[B]=0)}function S(C,P,B,v,A,E,I){I===!0?t.vertexAttribIPointer(C,P,B,A,E):t.vertexAttribPointer(C,P,B,v,A,E)}function x(C,P,B,v){_();const A=v.attributes,E=B.getAttributes(),I=P.defaultAttributeValues;for(const V in E){const W=E[V];if(W.location>=0){let q=A[V];if(q===void 0&&(V==="instanceMatrix"&&C.instanceMatrix&&(q=C.instanceMatrix),V==="instanceColor"&&C.instanceColor&&(q=C.instanceColor)),q!==void 0){const $=q.normalized,K=q.itemSize,ae=e.get(q);if(ae===void 0)continue;const ve=ae.buffer,pe=ae.type,Z=ae.bytesPerElement,ne=pe===t.INT||pe===t.UNSIGNED_INT||q.gpuType===nh;if(q.isInterleavedBufferAttribute){const le=q.data,xe=le.stride,be=q.offset;if(le.isInstancedInterleavedBuffer){for(let Ce=0;Ce<W.locationSize;Ce++)p(W.location+Ce,le.meshPerAttribute);C.isInstancedMesh!==!0&&v._maxInstanceCount===void 0&&(v._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let Ce=0;Ce<W.locationSize;Ce++)m(W.location+Ce);t.bindBuffer(t.ARRAY_BUFFER,ve);for(let Ce=0;Ce<W.locationSize;Ce++)S(W.location+Ce,K/W.locationSize,pe,$,xe*Z,(be+K/W.locationSize*Ce)*Z,ne)}else{if(q.isInstancedBufferAttribute){for(let le=0;le<W.locationSize;le++)p(W.location+le,q.meshPerAttribute);C.isInstancedMesh!==!0&&v._maxInstanceCount===void 0&&(v._maxInstanceCount=q.meshPerAttribute*q.count)}else for(let le=0;le<W.locationSize;le++)m(W.location+le);t.bindBuffer(t.ARRAY_BUFFER,ve);for(let le=0;le<W.locationSize;le++)S(W.location+le,K/W.locationSize,pe,$,K*Z,K/W.locationSize*le*Z,ne)}}else if(I!==void 0){const $=I[V];if($!==void 0)switch($.length){case 2:t.vertexAttrib2fv(W.location,$);break;case 3:t.vertexAttrib3fv(W.location,$);break;case 4:t.vertexAttrib4fv(W.location,$);break;default:t.vertexAttrib1fv(W.location,$)}}}}b()}function D(){M();for(const C in i){const P=i[C];for(const B in P){const v=P[B];for(const A in v){const E=v[A];for(const I in E)c(E[I].object),delete E[I];delete v[A]}}delete i[C]}}function O(C){if(i[C.id]===void 0)return;const P=i[C.id];for(const B in P){const v=P[B];for(const A in v){const E=v[A];for(const I in E)c(E[I].object),delete E[I];delete v[A]}}delete i[C.id]}function z(C){for(const P in i){const B=i[P];for(const v in B){const A=B[v];if(A[C.id]===void 0)continue;const E=A[C.id];for(const I in E)c(E[I].object),delete E[I];delete A[C.id]}}}function y(C){for(const P in i){const B=i[P],v=C.isInstancedMesh===!0?C.id:0,A=B[v];if(A!==void 0){for(const E in A){const I=A[E];for(const V in I)c(I[V].object),delete I[V];delete A[E]}delete B[v],Object.keys(B).length===0&&delete i[P]}}}function M(){N(),s=!0,o!==r&&(o=r,u(o.object))}function N(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:M,resetDefaultState:N,dispose:D,releaseStatesOfGeometry:O,releaseStatesOfObject:y,releaseStatesOfProgram:z,initAttributes:_,enableAttribute:m,disableUnusedAttributes:b}}function aE(t,e,n){let i;function r(u){i=u}function o(u,c){t.drawArrays(i,u,c),n.update(c,i,1)}function s(u,c,f){f!==0&&(t.drawArraysInstanced(i,u,c,f),n.update(c,i,f))}function a(u,c,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,u,0,c,0,f);let h=0;for(let g=0;g<f;g++)h+=c[g];n.update(h,i,1)}function l(u,c,f,d){if(f===0)return;const h=e.get("WEBGL_multi_draw");if(h===null)for(let g=0;g<u.length;g++)s(u[g],c[g],d[g]);else{h.multiDrawArraysInstancedWEBGL(i,u,0,c,0,d,0,f);let g=0;for(let _=0;_<f;_++)g+=c[_]*d[_];n.update(g,i,1)}}this.setMode=r,this.render=o,this.renderInstances=s,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function lE(t,e,n,i){let r;function o(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const z=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(z.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function s(z){return!(z!==pn&&i.convert(z)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(z){const y=z===ji&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(z!==fn&&i.convert(z)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&z!==ci&&!y)}function l(z){if(z==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";z="mediump"}return z==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=n.precision!==void 0?n.precision:"highp";const c=l(u);c!==u&&(nt("WebGLRenderer:",u,"not supported, using",c,"instead."),u=c);const f=n.logarithmicDepthBuffer===!0,d=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),h=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),g=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=t.getParameter(t.MAX_TEXTURE_SIZE),m=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),p=t.getParameter(t.MAX_VERTEX_ATTRIBS),b=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),S=t.getParameter(t.MAX_VARYING_VECTORS),x=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),D=t.getParameter(t.MAX_SAMPLES),O=t.getParameter(t.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:l,textureFormatReadable:s,textureTypeReadable:a,precision:u,logarithmicDepthBuffer:f,reversedDepthBuffer:d,maxTextures:h,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:b,maxVaryings:S,maxFragmentUniforms:x,maxSamples:D,samples:O}}function uE(t){const e=this;let n=null,i=0,r=!1,o=!1;const s=new Wr,a=new st,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const h=f.length!==0||d||i!==0||r;return r=d,i=f.length,h},this.beginShadows=function(){o=!0,c(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(f,d){n=c(f,d,0)},this.setState=function(f,d,h){const g=f.clippingPlanes,_=f.clipIntersection,m=f.clipShadows,p=t.get(f);if(!r||g===null||g.length===0||o&&!m)o?c(null):u();else{const b=o?0:i,S=b*4;let x=p.clippingState||null;l.value=x,x=c(g,d,S,h);for(let D=0;D!==S;++D)x[D]=n[D];p.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=b}};function u(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function c(f,d,h,g){const _=f!==null?f.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const p=h+_*4,b=d.matrixWorldInverse;a.getNormalMatrix(b),(m===null||m.length<p)&&(m=new Float32Array(p));for(let S=0,x=h;S!==_;++S,x+=4)s.copy(f[S]).applyMatrix4(b,a),s.normal.toArray(m,x),m[x+3]=s.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}const Tr=4,Kp=[.125,.215,.35,.446,.526,.582],Yr=20,cE=256,_s=new dh,Zp=new wt;let Fc=null,Uc=0,Oc=0,Bc=!1;const fE=new ce;class jp{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,i=.1,r=100,o={}){const{size:s=256,position:a=fE}=o;Fc=this._renderer.getRenderTarget(),Uc=this._renderer.getActiveCubeFace(),Oc=this._renderer.getActiveMipmapLevel(),Bc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(s);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,a),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=em(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Qp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Fc,Uc,Oc),this._renderer.xr.enabled=Bc,e.scissorTest=!1,No(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===lo||e.mapping===jo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Fc=this._renderer.getRenderTarget(),Uc=this._renderer.getActiveCubeFace(),Oc=this._renderer.getActiveMipmapLevel(),Bc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Ct,minFilter:Ct,generateMipmaps:!1,type:ji,format:pn,colorSpace:Ir,depthBuffer:!1},r=Jp(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Jp(e,n,i);const{_lodMax:o}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=dE(o)),this._blurMaterial=pE(o,e,n),this._ggxMaterial=hE(o,e,n)}return r}_compileMaterial(e){const n=new xi(new or,e);this._renderer.compile(n,_s)}_sceneToCubeUV(e,n,i,r,o){const l=new Hn(90,1,n,i),u=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],f=this._renderer,d=f.autoClear,h=f.toneMapping;f.getClearColor(Zp),f.toneMapping=pi,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(r),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new xi(new _a,new yv({name:"PMREM.Background",side:bn,depthWrite:!1,depthTest:!1})));const _=this._backgroundBox,m=_.material;let p=!1;const b=e.background;b?b.isColor&&(m.color.copy(b),e.background=null,p=!0):(m.color.copy(Zp),p=!0);for(let S=0;S<6;S++){const x=S%3;x===0?(l.up.set(0,u[S],0),l.position.set(o.x,o.y,o.z),l.lookAt(o.x+c[S],o.y,o.z)):x===1?(l.up.set(0,0,u[S]),l.position.set(o.x,o.y,o.z),l.lookAt(o.x,o.y+c[S],o.z)):(l.up.set(0,u[S],0),l.position.set(o.x,o.y,o.z),l.lookAt(o.x,o.y,o.z+c[S]));const D=this._cubeSize;No(r,x*D,S>2?D:0,D,D),f.setRenderTarget(r),p&&f.render(_,l),f.render(e,l)}f.toneMapping=h,f.autoClear=d,e.background=b}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===lo||e.mapping===jo;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=em()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Qp());const o=r?this._cubemapMaterial:this._equirectMaterial,s=this._lodMeshes[0];s.material=o;const a=o.uniforms;a.envMap.value=e;const l=this._cubeSize;No(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(s,_s)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodMeshes.length;for(let o=1;o<r;o++)this._applyGGXFilter(e,o-1,o);n.autoClear=i}_applyGGXFilter(e,n,i){const r=this._renderer,o=this._pingPongRenderTarget,s=this._ggxMaterial,a=this._lodMeshes[i];a.material=s;const l=s.uniforms,u=i/(this._lodMeshes.length-1),c=n/(this._lodMeshes.length-1),f=Math.sqrt(u*u-c*c),d=0+u*1.25,h=f*d,{_lodMax:g}=this,_=this._sizeLods[i],m=3*_*(i>g-Tr?i-g+Tr:0),p=4*(this._cubeSize-_);l.envMap.value=e.texture,l.roughness.value=h,l.mipInt.value=g-n,No(o,m,p,3*_,2*_),r.setRenderTarget(o),r.render(a,_s),l.envMap.value=o.texture,l.roughness.value=0,l.mipInt.value=g-i,No(e,m,p,3*_,2*_),r.setRenderTarget(e),r.render(a,_s)}_blur(e,n,i,r,o){const s=this._pingPongRenderTarget;this._halfBlur(e,s,n,i,r,"latitudinal",o),this._halfBlur(s,e,i,i,r,"longitudinal",o)}_halfBlur(e,n,i,r,o,s,a){const l=this._renderer,u=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&gt("blur direction must be either latitudinal or longitudinal!");const c=3,f=this._lodMeshes[r];f.material=u;const d=u.uniforms,h=this._sizeLods[i]-1,g=isFinite(o)?Math.PI/(2*h):2*Math.PI/(2*Yr-1),_=o/g,m=isFinite(o)?1+Math.floor(c*_):Yr;m>Yr&&nt(`sigmaRadians, ${o}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Yr}`);const p=[];let b=0;for(let z=0;z<Yr;++z){const y=z/_,M=Math.exp(-y*y/2);p.push(M),z===0?b+=M:z<m&&(b+=2*M)}for(let z=0;z<p.length;z++)p[z]=p[z]/b;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=s==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:S}=this;d.dTheta.value=g,d.mipInt.value=S-i;const x=this._sizeLods[r],D=3*x*(r>S-Tr?r-S+Tr:0),O=4*(this._cubeSize-x);No(n,D,O,3*x,2*x),l.setRenderTarget(n),l.render(f,_s)}}function dE(t){const e=[],n=[],i=[];let r=t;const o=t-Tr+1+Kp.length;for(let s=0;s<o;s++){const a=Math.pow(2,r);e.push(a);let l=1/a;s>t-Tr?l=Kp[s-t+Tr-1]:s===0&&(l=0),n.push(l);const u=1/(a-2),c=-u,f=1+u,d=[c,c,f,c,f,f,c,c,f,f,c,f],h=6,g=6,_=3,m=2,p=1,b=new Float32Array(_*g*h),S=new Float32Array(m*g*h),x=new Float32Array(p*g*h);for(let O=0;O<h;O++){const z=O%3*2/3-1,y=O>2?0:-1,M=[z,y,0,z+2/3,y,0,z+2/3,y+1,0,z,y,0,z+2/3,y+1,0,z,y+1,0];b.set(M,_*g*O),S.set(d,m*g*O);const N=[O,O,O,O,O,O];x.set(N,p*g*O)}const D=new or;D.setAttribute("position",new mi(b,_)),D.setAttribute("uv",new mi(S,m)),D.setAttribute("faceIndex",new mi(x,p)),i.push(new xi(D,null)),r>Tr&&r--}return{lodMeshes:i,sizeLods:e,sigmas:n}}function Jp(t,e,n){const i=new _n(t,e,n);return i.texture.mapping=Ru,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function No(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function hE(t,e,n){return new Zn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:cE,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Pu(),fragmentShader:`

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
		`,blending:Gi,depthTest:!1,depthWrite:!1})}function pE(t,e,n){const i=new Float32Array(Yr),r=new ce(0,1,0);return new Zn({name:"SphericalGaussianBlur",defines:{n:Yr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Pu(),fragmentShader:`

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
		`,blending:Gi,depthTest:!1,depthWrite:!1})}function Qp(){return new Zn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Pu(),fragmentShader:`

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
		`,blending:Gi,depthTest:!1,depthWrite:!1})}function em(){return new Zn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Pu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Gi,depthTest:!1,depthWrite:!1})}function Pu(){return`

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
	`}class Tv extends _n{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new bv(r),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new _a(5,5,5),o=new Zn({name:"CubemapFromEquirect",uniforms:Qo(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:bn,blending:Gi});o.uniforms.tEquirect.value=n;const s=new xi(r,o),a=n.minFilter;return n.minFilter===jr&&(n.minFilter=Ct),new bS(1,10,this).update(e,s),n.minFilter=a,s.geometry.dispose(),s.material.dispose(),this}clear(e,n=!0,i=!0,r=!0){const o=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(n,i,r);e.setRenderTarget(o)}}function mE(t){let e=new WeakMap,n=new WeakMap,i=null;function r(d,h=!1){return d==null?null:h?s(d):o(d)}function o(d){if(d&&d.isTexture){const h=d.mapping;if(h===lc||h===uc)if(e.has(d)){const g=e.get(d).texture;return a(g,d.mapping)}else{const g=d.image;if(g&&g.height>0){const _=new Tv(g.height);return _.fromEquirectangularTexture(t,d),e.set(d,_),d.addEventListener("dispose",u),a(_.texture,d.mapping)}else return null}}return d}function s(d){if(d&&d.isTexture){const h=d.mapping,g=h===lc||h===uc,_=h===lo||h===jo;if(g||_){let m=n.get(d);const p=m!==void 0?m.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==p)return i===null&&(i=new jp(t)),m=g?i.fromEquirectangular(d,m):i.fromCubemap(d,m),m.texture.pmremVersion=d.pmremVersion,n.set(d,m),m.texture;if(m!==void 0)return m.texture;{const b=d.image;return g&&b&&b.height>0||_&&b&&l(b)?(i===null&&(i=new jp(t)),m=g?i.fromEquirectangular(d):i.fromCubemap(d),m.texture.pmremVersion=d.pmremVersion,n.set(d,m),d.addEventListener("dispose",c),m.texture):null}}}return d}function a(d,h){return h===lc?d.mapping=lo:h===uc&&(d.mapping=jo),d}function l(d){let h=0;const g=6;for(let _=0;_<g;_++)d[_]!==void 0&&h++;return h===g}function u(d){const h=d.target;h.removeEventListener("dispose",u);const g=e.get(h);g!==void 0&&(e.delete(h),g.dispose())}function c(d){const h=d.target;h.removeEventListener("dispose",c);const g=n.get(h);g!==void 0&&(n.delete(h),g.dispose())}function f(){e=new WeakMap,n=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:f}}function gE(t){const e={};function n(i){if(e[i]!==void 0)return e[i];const r=t.getExtension(i);return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&Yl("WebGLRenderer: "+i+" extension not supported."),r}}}function vE(t,e,n,i){const r={},o=new WeakMap;function s(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",s),delete r[d.id];const h=o.get(d);h&&(e.remove(h),o.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,n.memory.geometries--}function a(f,d){return r[d.id]===!0||(d.addEventListener("dispose",s),r[d.id]=!0,n.memory.geometries++),d}function l(f){const d=f.attributes;for(const h in d)e.update(d[h],t.ARRAY_BUFFER)}function u(f){const d=[],h=f.index,g=f.attributes.position;let _=0;if(g===void 0)return;if(h!==null){const b=h.array;_=h.version;for(let S=0,x=b.length;S<x;S+=3){const D=b[S+0],O=b[S+1],z=b[S+2];d.push(D,O,O,z,z,D)}}else{const b=g.array;_=g.version;for(let S=0,x=b.length/3-1;S<x;S+=3){const D=S+0,O=S+1,z=S+2;d.push(D,O,O,z,z,D)}}const m=new(g.count>=65535?_v:vv)(d,1);m.version=_;const p=o.get(f);p&&e.remove(p),o.set(f,m)}function c(f){const d=o.get(f);if(d){const h=f.index;h!==null&&d.version<h.version&&u(f)}else u(f);return o.get(f)}return{get:a,update:l,getWireframeAttribute:c}}function _E(t,e,n){let i;function r(d){i=d}let o,s;function a(d){o=d.type,s=d.bytesPerElement}function l(d,h){t.drawElements(i,h,o,d*s),n.update(h,i,1)}function u(d,h,g){g!==0&&(t.drawElementsInstanced(i,h,o,d*s,g),n.update(h,i,g))}function c(d,h,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,h,0,o,d,0,g);let m=0;for(let p=0;p<g;p++)m+=h[p];n.update(m,i,1)}function f(d,h,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)u(d[p]/s,h[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(i,h,0,o,d,0,_,0,g);let p=0;for(let b=0;b<g;b++)p+=h[b]*_[b];n.update(p,i,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=u,this.renderMultiDraw=c,this.renderMultiDrawInstances=f}function yE(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(o,s,a){switch(n.calls++,s){case t.TRIANGLES:n.triangles+=a*(o/3);break;case t.LINES:n.lines+=a*(o/2);break;case t.LINE_STRIP:n.lines+=a*(o-1);break;case t.LINE_LOOP:n.lines+=a*o;break;case t.POINTS:n.points+=a*o;break;default:gt("WebGLInfo: Unknown draw mode:",s);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function xE(t,e,n){const i=new WeakMap,r=new zt;function o(s,a,l){const u=s.morphTargetInfluences,c=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=c!==void 0?c.length:0;let d=i.get(a);if(d===void 0||d.count!==f){let M=function(){z.dispose(),i.delete(a),a.removeEventListener("dispose",M)};d!==void 0&&d.texture.dispose();const h=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],b=a.morphAttributes.color||[];let S=0;h===!0&&(S=1),g===!0&&(S=2),_===!0&&(S=3);let x=a.attributes.position.count*S,D=1;x>e.maxTextureSize&&(D=Math.ceil(x/e.maxTextureSize),x=e.maxTextureSize);const O=new Float32Array(x*D*4*f),z=new pv(O,x,D,f);z.type=ci,z.needsUpdate=!0;const y=S*4;for(let N=0;N<f;N++){const C=m[N],P=p[N],B=b[N],v=x*D*4*N;for(let A=0;A<C.count;A++){const E=A*y;h===!0&&(r.fromBufferAttribute(C,A),O[v+E+0]=r.x,O[v+E+1]=r.y,O[v+E+2]=r.z,O[v+E+3]=0),g===!0&&(r.fromBufferAttribute(P,A),O[v+E+4]=r.x,O[v+E+5]=r.y,O[v+E+6]=r.z,O[v+E+7]=0),_===!0&&(r.fromBufferAttribute(B,A),O[v+E+8]=r.x,O[v+E+9]=r.y,O[v+E+10]=r.z,O[v+E+11]=B.itemSize===4?r.w:1)}}d={count:f,texture:z,size:new Et(x,D)},i.set(a,d),a.addEventListener("dispose",M)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",s.morphTexture,n);else{let h=0;for(let _=0;_<u.length;_++)h+=u[_];const g=a.morphTargetsRelative?1:1-h;l.getUniforms().setValue(t,"morphTargetBaseInfluence",g),l.getUniforms().setValue(t,"morphTargetInfluences",u)}l.getUniforms().setValue(t,"morphTargetsTexture",d.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",d.size)}return{update:o}}function bE(t,e,n,i,r){let o=new WeakMap;function s(u){const c=r.render.frame,f=u.geometry,d=e.get(u,f);if(o.get(d)!==c&&(e.update(d),o.set(d,c)),u.isInstancedMesh&&(u.hasEventListener("dispose",l)===!1&&u.addEventListener("dispose",l),o.get(u)!==c&&(n.update(u.instanceMatrix,t.ARRAY_BUFFER),u.instanceColor!==null&&n.update(u.instanceColor,t.ARRAY_BUFFER),o.set(u,c))),u.isSkinnedMesh){const h=u.skeleton;o.get(h)!==c&&(h.update(),o.set(h,c))}return d}function a(){o=new WeakMap}function l(u){const c=u.target;c.removeEventListener("dispose",l),i.releaseStatesOfObject(c),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:a}}const SE={[J0]:"LINEAR_TONE_MAPPING",[Q0]:"REINHARD_TONE_MAPPING",[ev]:"CINEON_TONE_MAPPING",[tv]:"ACES_FILMIC_TONE_MAPPING",[iv]:"AGX_TONE_MAPPING",[rv]:"NEUTRAL_TONE_MAPPING",[nv]:"CUSTOM_TONE_MAPPING"};function ME(t,e,n,i,r){const o=new _n(e,n,{type:t,depthBuffer:i,stencilBuffer:r}),s=new _n(e,n,{type:ji,depthBuffer:!1,stencilBuffer:!1}),a=new or;a.setAttribute("position",new Xi([-1,3,0,-1,-1,0,3,-1,0],3)),a.setAttribute("uv",new Xi([0,2,0,0,2,0],2));const l=new _S({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),u=new xi(a,l),c=new dh(-1,1,1,-1,0,1);let f=null,d=null,h=!1,g,_=null,m=[],p=!1;this.setSize=function(b,S){o.setSize(b,S),s.setSize(b,S);for(let x=0;x<m.length;x++){const D=m[x];D.setSize&&D.setSize(b,S)}},this.setEffects=function(b){m=b,p=m.length>0&&m[0].isRenderPass===!0;const S=o.width,x=o.height;for(let D=0;D<m.length;D++){const O=m[D];O.setSize&&O.setSize(S,x)}},this.begin=function(b,S){if(h||b.toneMapping===pi&&m.length===0)return!1;if(_=S,S!==null){const x=S.width,D=S.height;(o.width!==x||o.height!==D)&&this.setSize(x,D)}return p===!1&&b.setRenderTarget(o),g=b.toneMapping,b.toneMapping=pi,!0},this.hasRenderPass=function(){return p},this.end=function(b,S){b.toneMapping=g,h=!0;let x=o,D=s;for(let O=0;O<m.length;O++){const z=m[O];if(z.enabled!==!1&&(z.render(b,D,x,S),z.needsSwap!==!1)){const y=x;x=D,D=y}}if(f!==b.outputColorSpace||d!==b.toneMapping){f=b.outputColorSpace,d=b.toneMapping,l.defines={},ht.getTransfer(f)===Mt&&(l.defines.SRGB_TRANSFER="");const O=SE[d];O&&(l.defines[O]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=x.texture,b.setRenderTarget(_),b.render(u,c),_=null,h=!1},this.isCompositing=function(){return h},this.dispose=function(){o.dispose(),s.dispose(),a.dispose(),l.dispose()}}const Av=new Qt,ad=new js(1,1),Cv=new pv,Rv=new Y1,Iv=new bv,tm=[],nm=[],im=new Float32Array(16),rm=new Float32Array(9),om=new Float32Array(4);function us(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let o=tm[r];if(o===void 0&&(o=new Float32Array(r),tm[r]=o),e!==0){i.toArray(o,0);for(let s=1,a=0;s!==e;++s)a+=n,t[s].toArray(o,a)}return o}function Xt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Yt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Nu(t,e){let n=nm[e];n===void 0&&(n=new Int32Array(e),nm[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function wE(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function EE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Xt(n,e))return;t.uniform2fv(this.addr,e),Yt(n,e)}}function TE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Xt(n,e))return;t.uniform3fv(this.addr,e),Yt(n,e)}}function AE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Xt(n,e))return;t.uniform4fv(this.addr,e),Yt(n,e)}}function CE(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Xt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Yt(n,e)}else{if(Xt(n,i))return;om.set(i),t.uniformMatrix2fv(this.addr,!1,om),Yt(n,i)}}function RE(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Xt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Yt(n,e)}else{if(Xt(n,i))return;rm.set(i),t.uniformMatrix3fv(this.addr,!1,rm),Yt(n,i)}}function IE(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Xt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Yt(n,e)}else{if(Xt(n,i))return;im.set(i),t.uniformMatrix4fv(this.addr,!1,im),Yt(n,i)}}function PE(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function NE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Xt(n,e))return;t.uniform2iv(this.addr,e),Yt(n,e)}}function DE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Xt(n,e))return;t.uniform3iv(this.addr,e),Yt(n,e)}}function LE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Xt(n,e))return;t.uniform4iv(this.addr,e),Yt(n,e)}}function FE(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function UE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Xt(n,e))return;t.uniform2uiv(this.addr,e),Yt(n,e)}}function OE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Xt(n,e))return;t.uniform3uiv(this.addr,e),Yt(n,e)}}function BE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Xt(n,e))return;t.uniform4uiv(this.addr,e),Yt(n,e)}}function kE(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let o;this.type===t.SAMPLER_2D_SHADOW?(ad.compareFunction=n.isReversedDepthBuffer()?uh:lh,o=ad):o=Av,n.setTexture2D(e||o,r)}function zE(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||Rv,r)}function VE(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||Iv,r)}function HE(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||Cv,r)}function $E(t){switch(t){case 5126:return wE;case 35664:return EE;case 35665:return TE;case 35666:return AE;case 35674:return CE;case 35675:return RE;case 35676:return IE;case 5124:case 35670:return PE;case 35667:case 35671:return NE;case 35668:case 35672:return DE;case 35669:case 35673:return LE;case 5125:return FE;case 36294:return UE;case 36295:return OE;case 36296:return BE;case 35678:case 36198:case 36298:case 36306:case 35682:return kE;case 35679:case 36299:case 36307:return zE;case 35680:case 36300:case 36308:case 36293:return VE;case 36289:case 36303:case 36311:case 36292:return HE}}function GE(t,e){t.uniform1fv(this.addr,e)}function WE(t,e){const n=us(e,this.size,2);t.uniform2fv(this.addr,n)}function XE(t,e){const n=us(e,this.size,3);t.uniform3fv(this.addr,n)}function YE(t,e){const n=us(e,this.size,4);t.uniform4fv(this.addr,n)}function qE(t,e){const n=us(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function KE(t,e){const n=us(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function ZE(t,e){const n=us(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function jE(t,e){t.uniform1iv(this.addr,e)}function JE(t,e){t.uniform2iv(this.addr,e)}function QE(t,e){t.uniform3iv(this.addr,e)}function eT(t,e){t.uniform4iv(this.addr,e)}function tT(t,e){t.uniform1uiv(this.addr,e)}function nT(t,e){t.uniform2uiv(this.addr,e)}function iT(t,e){t.uniform3uiv(this.addr,e)}function rT(t,e){t.uniform4uiv(this.addr,e)}function oT(t,e,n){const i=this.cache,r=e.length,o=Nu(n,r);Xt(i,o)||(t.uniform1iv(this.addr,o),Yt(i,o));let s;this.type===t.SAMPLER_2D_SHADOW?s=ad:s=Av;for(let a=0;a!==r;++a)n.setTexture2D(e[a]||s,o[a])}function sT(t,e,n){const i=this.cache,r=e.length,o=Nu(n,r);Xt(i,o)||(t.uniform1iv(this.addr,o),Yt(i,o));for(let s=0;s!==r;++s)n.setTexture3D(e[s]||Rv,o[s])}function aT(t,e,n){const i=this.cache,r=e.length,o=Nu(n,r);Xt(i,o)||(t.uniform1iv(this.addr,o),Yt(i,o));for(let s=0;s!==r;++s)n.setTextureCube(e[s]||Iv,o[s])}function lT(t,e,n){const i=this.cache,r=e.length,o=Nu(n,r);Xt(i,o)||(t.uniform1iv(this.addr,o),Yt(i,o));for(let s=0;s!==r;++s)n.setTexture2DArray(e[s]||Cv,o[s])}function uT(t){switch(t){case 5126:return GE;case 35664:return WE;case 35665:return XE;case 35666:return YE;case 35674:return qE;case 35675:return KE;case 35676:return ZE;case 5124:case 35670:return jE;case 35667:case 35671:return JE;case 35668:case 35672:return QE;case 35669:case 35673:return eT;case 5125:return tT;case 36294:return nT;case 36295:return iT;case 36296:return rT;case 35678:case 36198:case 36298:case 36306:case 35682:return oT;case 35679:case 36299:case 36307:return sT;case 35680:case 36300:case 36308:case 36293:return aT;case 36289:case 36303:case 36311:case 36292:return lT}}class cT{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=$E(n.type)}}class fT{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=uT(n.type)}}class dT{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let o=0,s=r.length;o!==s;++o){const a=r[o];a.setValue(e,n[a.id],i)}}}const kc=/(\w+)(\])?(\[|\.)?/g;function sm(t,e){t.seq.push(e),t.map[e.id]=e}function hT(t,e,n){const i=t.name,r=i.length;for(kc.lastIndex=0;;){const o=kc.exec(i),s=kc.lastIndex;let a=o[1];const l=o[2]==="]",u=o[3];if(l&&(a=a|0),u===void 0||u==="["&&s+2===r){sm(n,u===void 0?new cT(a,t,e):new fT(a,t,e));break}else{let f=n.map[a];f===void 0&&(f=new dT(a),sm(n,f)),n=f}}}class Sl{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const a=e.getActiveUniform(n,s),l=e.getUniformLocation(n,a.name);hT(a,l,this)}const r=[],o=[];for(const s of this.seq)s.type===e.SAMPLER_2D_SHADOW||s.type===e.SAMPLER_CUBE_SHADOW||s.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(s):o.push(s);r.length>0&&(this.seq=r.concat(o))}setValue(e,n,i,r){const o=this.map[n];o!==void 0&&o.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let o=0,s=n.length;o!==s;++o){const a=n[o],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,o=e.length;r!==o;++r){const s=e[r];s.id in n&&i.push(s)}return i}}function am(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const pT=37297;let mT=0;function gT(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),o=Math.min(e+6,n.length);for(let s=r;s<o;s++){const a=s+1;i.push(`${a===e?">":" "} ${a}: ${n[s]}`)}return i.join(`
`)}const lm=new st;function vT(t){ht._getMatrix(lm,ht.workingColorSpace,t);const e=`mat3( ${lm.elements.map(n=>n.toFixed(4))} )`;switch(ht.getTransfer(t)){case Gl:return[e,"LinearTransferOETF"];case Mt:return[e,"sRGBTransferOETF"];default:return nt("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function um(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),o=(t.getShaderInfoLog(e)||"").trim();if(i&&o==="")return"";const s=/ERROR: 0:(\d+)/.exec(o);if(s){const a=parseInt(s[1]);return n.toUpperCase()+`

`+o+`

`+gT(t.getShaderSource(e),a)}else return o}function _T(t,e){const n=vT(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const yT={[J0]:"Linear",[Q0]:"Reinhard",[ev]:"Cineon",[tv]:"ACESFilmic",[iv]:"AgX",[rv]:"Neutral",[nv]:"Custom"};function xT(t,e){const n=yT[e];return n===void 0?(nt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+t+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Ja=new ce;function bT(){ht.getLuminanceCoefficients(Ja);const t=Ja.x.toFixed(4),e=Ja.y.toFixed(4),n=Ja.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function ST(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ts).join(`
`)}function MT(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function wT(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const o=t.getActiveAttrib(e,r),s=o.name;let a=1;o.type===t.FLOAT_MAT2&&(a=2),o.type===t.FLOAT_MAT3&&(a=3),o.type===t.FLOAT_MAT4&&(a=4),n[s]={type:o.type,location:t.getAttribLocation(e,s),locationSize:a}}return n}function Ts(t){return t!==""}function cm(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function fm(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const ET=/^[ \t]*#include +<([\w\d./]+)>/gm;function ld(t){return t.replace(ET,AT)}const TT=new Map;function AT(t,e){let n=at[e];if(n===void 0){const i=TT.get(e);if(i!==void 0)n=at[i],nt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return ld(n)}const CT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function dm(t){return t.replace(CT,RT)}function RT(t,e,n,i){let r="";for(let o=parseInt(e);o<parseInt(n);o++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return r}function hm(t){let e=`precision ${t.precision} float;
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
#define LOW_PRECISION`),e}const IT={[vl]:"SHADOWMAP_TYPE_PCF",[Es]:"SHADOWMAP_TYPE_VSM"};function PT(t){return IT[t.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const NT={[lo]:"ENVMAP_TYPE_CUBE",[jo]:"ENVMAP_TYPE_CUBE",[Ru]:"ENVMAP_TYPE_CUBE_UV"};function DT(t){return t.envMap===!1?"ENVMAP_TYPE_CUBE":NT[t.envMapMode]||"ENVMAP_TYPE_CUBE"}const LT={[jo]:"ENVMAP_MODE_REFRACTION"};function FT(t){return t.envMap===!1?"ENVMAP_MODE_REFLECTION":LT[t.envMapMode]||"ENVMAP_MODE_REFLECTION"}const UT={[j0]:"ENVMAP_BLENDING_MULTIPLY",[E1]:"ENVMAP_BLENDING_MIX",[T1]:"ENVMAP_BLENDING_ADD"};function OT(t){return t.envMap===!1?"ENVMAP_BLENDING_NONE":UT[t.combine]||"ENVMAP_BLENDING_NONE"}function BT(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:i,maxMip:n}}function kT(t,e,n,i){const r=t.getContext(),o=n.defines;let s=n.vertexShader,a=n.fragmentShader;const l=PT(n),u=DT(n),c=FT(n),f=OT(n),d=BT(n),h=ST(n),g=MT(o),_=r.createProgram();let m,p,b=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(Ts).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(Ts).join(`
`),p.length>0&&(p+=`
`)):(m=[hm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ts).join(`
`),p=[hm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.envMap?"#define "+c:"",n.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==pi?"#define TONE_MAPPING":"",n.toneMapping!==pi?at.tonemapping_pars_fragment:"",n.toneMapping!==pi?xT("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",at.colorspace_pars_fragment,_T("linearToOutputTexel",n.outputColorSpace),bT(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Ts).join(`
`)),s=ld(s),s=cm(s,n),s=fm(s,n),a=ld(a),a=cm(a,n),a=fm(a,n),s=dm(s),a=dm(a),n.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,m=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",n.glslVersion===Rp?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Rp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const S=b+m+s,x=b+p+a,D=am(r,r.VERTEX_SHADER,S),O=am(r,r.FRAGMENT_SHADER,x);r.attachShader(_,D),r.attachShader(_,O),n.index0AttributeName!==void 0?r.bindAttribLocation(_,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function z(C){if(t.debug.checkShaderErrors){const P=r.getProgramInfoLog(_)||"",B=r.getShaderInfoLog(D)||"",v=r.getShaderInfoLog(O)||"",A=P.trim(),E=B.trim(),I=v.trim();let V=!0,W=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(V=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,_,D,O);else{const q=um(r,D,"vertex"),$=um(r,O,"fragment");gt("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+A+`
`+q+`
`+$)}else A!==""?nt("WebGLProgram: Program Info Log:",A):(E===""||I==="")&&(W=!1);W&&(C.diagnostics={runnable:V,programLog:A,vertexShader:{log:E,prefix:m},fragmentShader:{log:I,prefix:p}})}r.deleteShader(D),r.deleteShader(O),y=new Sl(r,_),M=wT(r,_)}let y;this.getUniforms=function(){return y===void 0&&z(this),y};let M;this.getAttributes=function(){return M===void 0&&z(this),M};let N=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return N===!1&&(N=r.getProgramParameter(_,pT)),N},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=mT++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=D,this.fragmentShader=O,this}let zT=0;class VT{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),o=this._getShaderStage(i),s=this._getShaderCacheForMaterial(e);return s.has(r)===!1&&(s.add(r),r.usedTimes++),s.has(o)===!1&&(s.add(o),o.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new HT(e),n.set(e,i)),i}}class HT{constructor(e){this.id=zT++,this.code=e,this.usedTimes=0}}function $T(t,e,n,i,r,o){const s=new mv,a=new VT,l=new Set,u=[],c=new Map,f=i.logarithmicDepthBuffer;let d=i.precision;const h={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(y){return l.add(y),y===0?"uv":`uv${y}`}function _(y,M,N,C,P){const B=C.fog,v=P.geometry,A=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?C.environment:null,E=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,I=e.get(y.envMap||A,E),V=I&&I.mapping===Ru?I.image.height:null,W=h[y.type];y.precision!==null&&(d=i.getMaxPrecision(y.precision),d!==y.precision&&nt("WebGLProgram.getParameters:",y.precision,"not supported, using",d,"instead."));const q=v.morphAttributes.position||v.morphAttributes.normal||v.morphAttributes.color,$=q!==void 0?q.length:0;let K=0;v.morphAttributes.position!==void 0&&(K=1),v.morphAttributes.normal!==void 0&&(K=2),v.morphAttributes.color!==void 0&&(K=3);let ae,ve,pe,Z;if(W){const St=si[W];ae=St.vertexShader,ve=St.fragmentShader}else ae=y.vertexShader,ve=y.fragmentShader,a.update(y),pe=a.getVertexShaderID(y),Z=a.getFragmentShaderID(y);const ne=t.getRenderTarget(),le=t.state.buffers.depth.getReversed(),xe=P.isInstancedMesh===!0,be=P.isBatchedMesh===!0,Ce=!!y.map,H=!!y.matcap,X=!!I,L=!!y.aoMap,F=!!y.lightMap,U=!!y.bumpMap,G=!!y.normalMap,T=!!y.displacementMap,te=!!y.emissiveMap,Q=!!y.metalnessMap,J=!!y.roughnessMap,ie=y.anisotropy>0,R=y.clearcoat>0,w=y.dispersion>0,Y=y.iridescence>0,re=y.sheen>0,de=y.transmission>0,oe=ie&&!!y.anisotropyMap,Ie=R&&!!y.clearcoatMap,Me=R&&!!y.clearcoatNormalMap,ze=R&&!!y.clearcoatRoughnessMap,We=Y&&!!y.iridescenceMap,we=Y&&!!y.iridescenceThicknessMap,Te=re&&!!y.sheenColorMap,Pe=re&&!!y.sheenRoughnessMap,Ue=!!y.specularMap,Oe=!!y.specularColorMap,rt=!!y.specularIntensityMap,j=de&&!!y.transmissionMap,Re=de&&!!y.thicknessMap,Ae=!!y.gradientMap,Ve=!!y.alphaMap,Ee=y.alphaTest>0,_e=!!y.alphaHash,$e=!!y.extensions;let tt=pi;y.toneMapped&&(ne===null||ne.isXRRenderTarget===!0)&&(tt=t.toneMapping);const Lt={shaderID:W,shaderType:y.type,shaderName:y.name,vertexShader:ae,fragmentShader:ve,defines:y.defines,customVertexShaderID:pe,customFragmentShaderID:Z,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:d,batching:be,batchingColor:be&&P._colorsTexture!==null,instancing:xe,instancingColor:xe&&P.instanceColor!==null,instancingMorph:xe&&P.morphTexture!==null,outputColorSpace:ne===null?t.outputColorSpace:ne.isXRRenderTarget===!0?ne.texture.colorSpace:Ir,alphaToCoverage:!!y.alphaToCoverage,map:Ce,matcap:H,envMap:X,envMapMode:X&&I.mapping,envMapCubeUVHeight:V,aoMap:L,lightMap:F,bumpMap:U,normalMap:G,displacementMap:T,emissiveMap:te,normalMapObjectSpace:G&&y.normalMapType===I1,normalMapTangentSpace:G&&y.normalMapType===R1,metalnessMap:Q,roughnessMap:J,anisotropy:ie,anisotropyMap:oe,clearcoat:R,clearcoatMap:Ie,clearcoatNormalMap:Me,clearcoatRoughnessMap:ze,dispersion:w,iridescence:Y,iridescenceMap:We,iridescenceThicknessMap:we,sheen:re,sheenColorMap:Te,sheenRoughnessMap:Pe,specularMap:Ue,specularColorMap:Oe,specularIntensityMap:rt,transmission:de,transmissionMap:j,thicknessMap:Re,gradientMap:Ae,opaque:y.transparent===!1&&y.blending===zo&&y.alphaToCoverage===!1,alphaMap:Ve,alphaTest:Ee,alphaHash:_e,combine:y.combine,mapUv:Ce&&g(y.map.channel),aoMapUv:L&&g(y.aoMap.channel),lightMapUv:F&&g(y.lightMap.channel),bumpMapUv:U&&g(y.bumpMap.channel),normalMapUv:G&&g(y.normalMap.channel),displacementMapUv:T&&g(y.displacementMap.channel),emissiveMapUv:te&&g(y.emissiveMap.channel),metalnessMapUv:Q&&g(y.metalnessMap.channel),roughnessMapUv:J&&g(y.roughnessMap.channel),anisotropyMapUv:oe&&g(y.anisotropyMap.channel),clearcoatMapUv:Ie&&g(y.clearcoatMap.channel),clearcoatNormalMapUv:Me&&g(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ze&&g(y.clearcoatRoughnessMap.channel),iridescenceMapUv:We&&g(y.iridescenceMap.channel),iridescenceThicknessMapUv:we&&g(y.iridescenceThicknessMap.channel),sheenColorMapUv:Te&&g(y.sheenColorMap.channel),sheenRoughnessMapUv:Pe&&g(y.sheenRoughnessMap.channel),specularMapUv:Ue&&g(y.specularMap.channel),specularColorMapUv:Oe&&g(y.specularColorMap.channel),specularIntensityMapUv:rt&&g(y.specularIntensityMap.channel),transmissionMapUv:j&&g(y.transmissionMap.channel),thicknessMapUv:Re&&g(y.thicknessMap.channel),alphaMapUv:Ve&&g(y.alphaMap.channel),vertexTangents:!!v.attributes.tangent&&(G||ie),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!v.attributes.color&&v.attributes.color.itemSize===4,pointsUvs:P.isPoints===!0&&!!v.attributes.uv&&(Ce||Ve),fog:!!B,useFog:y.fog===!0,fogExp2:!!B&&B.isFogExp2,flatShading:y.wireframe===!1&&(y.flatShading===!0||v.attributes.normal===void 0&&G===!1&&(y.isMeshLambertMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isMeshPhysicalMaterial)),sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:le,skinning:P.isSkinnedMesh===!0,morphTargets:v.morphAttributes.position!==void 0,morphNormals:v.morphAttributes.normal!==void 0,morphColors:v.morphAttributes.color!==void 0,morphTargetsCount:$,morphTextureStride:K,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:t.shadowMap.enabled&&N.length>0,shadowMapType:t.shadowMap.type,toneMapping:tt,decodeVideoTexture:Ce&&y.map.isVideoTexture===!0&&ht.getTransfer(y.map.colorSpace)===Mt,decodeVideoTextureEmissive:te&&y.emissiveMap.isVideoTexture===!0&&ht.getTransfer(y.emissiveMap.colorSpace)===Mt,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Oi,flipSided:y.side===bn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:$e&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:($e&&y.extensions.multiDraw===!0||be)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Lt.vertexUv1s=l.has(1),Lt.vertexUv2s=l.has(2),Lt.vertexUv3s=l.has(3),l.clear(),Lt}function m(y){const M=[];if(y.shaderID?M.push(y.shaderID):(M.push(y.customVertexShaderID),M.push(y.customFragmentShaderID)),y.defines!==void 0)for(const N in y.defines)M.push(N),M.push(y.defines[N]);return y.isRawShaderMaterial===!1&&(p(M,y),b(M,y),M.push(t.outputColorSpace)),M.push(y.customProgramCacheKey),M.join()}function p(y,M){y.push(M.precision),y.push(M.outputColorSpace),y.push(M.envMapMode),y.push(M.envMapCubeUVHeight),y.push(M.mapUv),y.push(M.alphaMapUv),y.push(M.lightMapUv),y.push(M.aoMapUv),y.push(M.bumpMapUv),y.push(M.normalMapUv),y.push(M.displacementMapUv),y.push(M.emissiveMapUv),y.push(M.metalnessMapUv),y.push(M.roughnessMapUv),y.push(M.anisotropyMapUv),y.push(M.clearcoatMapUv),y.push(M.clearcoatNormalMapUv),y.push(M.clearcoatRoughnessMapUv),y.push(M.iridescenceMapUv),y.push(M.iridescenceThicknessMapUv),y.push(M.sheenColorMapUv),y.push(M.sheenRoughnessMapUv),y.push(M.specularMapUv),y.push(M.specularColorMapUv),y.push(M.specularIntensityMapUv),y.push(M.transmissionMapUv),y.push(M.thicknessMapUv),y.push(M.combine),y.push(M.fogExp2),y.push(M.sizeAttenuation),y.push(M.morphTargetsCount),y.push(M.morphAttributeCount),y.push(M.numDirLights),y.push(M.numPointLights),y.push(M.numSpotLights),y.push(M.numSpotLightMaps),y.push(M.numHemiLights),y.push(M.numRectAreaLights),y.push(M.numDirLightShadows),y.push(M.numPointLightShadows),y.push(M.numSpotLightShadows),y.push(M.numSpotLightShadowsWithMaps),y.push(M.numLightProbes),y.push(M.shadowMapType),y.push(M.toneMapping),y.push(M.numClippingPlanes),y.push(M.numClipIntersection),y.push(M.depthPacking)}function b(y,M){s.disableAll(),M.instancing&&s.enable(0),M.instancingColor&&s.enable(1),M.instancingMorph&&s.enable(2),M.matcap&&s.enable(3),M.envMap&&s.enable(4),M.normalMapObjectSpace&&s.enable(5),M.normalMapTangentSpace&&s.enable(6),M.clearcoat&&s.enable(7),M.iridescence&&s.enable(8),M.alphaTest&&s.enable(9),M.vertexColors&&s.enable(10),M.vertexAlphas&&s.enable(11),M.vertexUv1s&&s.enable(12),M.vertexUv2s&&s.enable(13),M.vertexUv3s&&s.enable(14),M.vertexTangents&&s.enable(15),M.anisotropy&&s.enable(16),M.alphaHash&&s.enable(17),M.batching&&s.enable(18),M.dispersion&&s.enable(19),M.batchingColor&&s.enable(20),M.gradientMap&&s.enable(21),y.push(s.mask),s.disableAll(),M.fog&&s.enable(0),M.useFog&&s.enable(1),M.flatShading&&s.enable(2),M.logarithmicDepthBuffer&&s.enable(3),M.reversedDepthBuffer&&s.enable(4),M.skinning&&s.enable(5),M.morphTargets&&s.enable(6),M.morphNormals&&s.enable(7),M.morphColors&&s.enable(8),M.premultipliedAlpha&&s.enable(9),M.shadowMapEnabled&&s.enable(10),M.doubleSided&&s.enable(11),M.flipSided&&s.enable(12),M.useDepthPacking&&s.enable(13),M.dithering&&s.enable(14),M.transmission&&s.enable(15),M.sheen&&s.enable(16),M.opaque&&s.enable(17),M.pointsUvs&&s.enable(18),M.decodeVideoTexture&&s.enable(19),M.decodeVideoTextureEmissive&&s.enable(20),M.alphaToCoverage&&s.enable(21),y.push(s.mask)}function S(y){const M=h[y.type];let N;if(M){const C=si[M];N=mS.clone(C.uniforms)}else N=y.uniforms;return N}function x(y,M){let N=c.get(M);return N!==void 0?++N.usedTimes:(N=new kT(t,M,y,r),u.push(N),c.set(M,N)),N}function D(y){if(--y.usedTimes===0){const M=u.indexOf(y);u[M]=u[u.length-1],u.pop(),c.delete(y.cacheKey),y.destroy()}}function O(y){a.remove(y)}function z(){a.dispose()}return{getParameters:_,getProgramCacheKey:m,getUniforms:S,acquireProgram:x,releaseProgram:D,releaseShaderCache:O,programs:u,dispose:z}}function GT(){let t=new WeakMap;function e(s){return t.has(s)}function n(s){let a=t.get(s);return a===void 0&&(a={},t.set(s,a)),a}function i(s){t.delete(s)}function r(s,a,l){t.get(s)[a]=l}function o(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:o}}function WT(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.materialVariant!==e.materialVariant?t.materialVariant-e.materialVariant:t.z!==e.z?t.z-e.z:t.id-e.id}function pm(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function mm(){const t=[];let e=0;const n=[],i=[],r=[];function o(){e=0,n.length=0,i.length=0,r.length=0}function s(d){let h=0;return d.isInstancedMesh&&(h+=2),d.isSkinnedMesh&&(h+=1),h}function a(d,h,g,_,m,p){let b=t[e];return b===void 0?(b={id:d.id,object:d,geometry:h,material:g,materialVariant:s(d),groupOrder:_,renderOrder:d.renderOrder,z:m,group:p},t[e]=b):(b.id=d.id,b.object=d,b.geometry=h,b.material=g,b.materialVariant=s(d),b.groupOrder=_,b.renderOrder=d.renderOrder,b.z=m,b.group=p),e++,b}function l(d,h,g,_,m,p){const b=a(d,h,g,_,m,p);g.transmission>0?i.push(b):g.transparent===!0?r.push(b):n.push(b)}function u(d,h,g,_,m,p){const b=a(d,h,g,_,m,p);g.transmission>0?i.unshift(b):g.transparent===!0?r.unshift(b):n.unshift(b)}function c(d,h){n.length>1&&n.sort(d||WT),i.length>1&&i.sort(h||pm),r.length>1&&r.sort(h||pm)}function f(){for(let d=e,h=t.length;d<h;d++){const g=t[d];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:n,transmissive:i,transparent:r,init:o,push:l,unshift:u,finish:f,sort:c}}function XT(){let t=new WeakMap;function e(i,r){const o=t.get(i);let s;return o===void 0?(s=new mm,t.set(i,[s])):r>=o.length?(s=new mm,o.push(s)):s=o[r],s}function n(){t=new WeakMap}return{get:e,dispose:n}}function YT(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new ce,color:new wt};break;case"SpotLight":n={position:new ce,direction:new ce,color:new wt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new ce,color:new wt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new ce,skyColor:new wt,groundColor:new wt};break;case"RectAreaLight":n={color:new wt,position:new ce,halfWidth:new ce,halfHeight:new ce};break}return t[e.id]=n,n}}}function qT(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Et};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Et};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Et,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let KT=0;function ZT(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function jT(t){const e=new YT,n=qT(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new ce);const r=new ce,o=new Gt,s=new Gt;function a(u){let c=0,f=0,d=0;for(let M=0;M<9;M++)i.probe[M].set(0,0,0);let h=0,g=0,_=0,m=0,p=0,b=0,S=0,x=0,D=0,O=0,z=0;u.sort(ZT);for(let M=0,N=u.length;M<N;M++){const C=u[M],P=C.color,B=C.intensity,v=C.distance;let A=null;if(C.shadow&&C.shadow.map&&(C.shadow.map.texture.format===Jo?A=C.shadow.map.texture:A=C.shadow.map.depthTexture||C.shadow.map.texture),C.isAmbientLight)c+=P.r*B,f+=P.g*B,d+=P.b*B;else if(C.isLightProbe){for(let E=0;E<9;E++)i.probe[E].addScaledVector(C.sh.coefficients[E],B);z++}else if(C.isDirectionalLight){const E=e.get(C);if(E.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const I=C.shadow,V=n.get(C);V.shadowIntensity=I.intensity,V.shadowBias=I.bias,V.shadowNormalBias=I.normalBias,V.shadowRadius=I.radius,V.shadowMapSize=I.mapSize,i.directionalShadow[h]=V,i.directionalShadowMap[h]=A,i.directionalShadowMatrix[h]=C.shadow.matrix,b++}i.directional[h]=E,h++}else if(C.isSpotLight){const E=e.get(C);E.position.setFromMatrixPosition(C.matrixWorld),E.color.copy(P).multiplyScalar(B),E.distance=v,E.coneCos=Math.cos(C.angle),E.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),E.decay=C.decay,i.spot[_]=E;const I=C.shadow;if(C.map&&(i.spotLightMap[D]=C.map,D++,I.updateMatrices(C),C.castShadow&&O++),i.spotLightMatrix[_]=I.matrix,C.castShadow){const V=n.get(C);V.shadowIntensity=I.intensity,V.shadowBias=I.bias,V.shadowNormalBias=I.normalBias,V.shadowRadius=I.radius,V.shadowMapSize=I.mapSize,i.spotShadow[_]=V,i.spotShadowMap[_]=A,x++}_++}else if(C.isRectAreaLight){const E=e.get(C);E.color.copy(P).multiplyScalar(B),E.halfWidth.set(C.width*.5,0,0),E.halfHeight.set(0,C.height*.5,0),i.rectArea[m]=E,m++}else if(C.isPointLight){const E=e.get(C);if(E.color.copy(C.color).multiplyScalar(C.intensity),E.distance=C.distance,E.decay=C.decay,C.castShadow){const I=C.shadow,V=n.get(C);V.shadowIntensity=I.intensity,V.shadowBias=I.bias,V.shadowNormalBias=I.normalBias,V.shadowRadius=I.radius,V.shadowMapSize=I.mapSize,V.shadowCameraNear=I.camera.near,V.shadowCameraFar=I.camera.far,i.pointShadow[g]=V,i.pointShadowMap[g]=A,i.pointShadowMatrix[g]=C.shadow.matrix,S++}i.point[g]=E,g++}else if(C.isHemisphereLight){const E=e.get(C);E.skyColor.copy(C.color).multiplyScalar(B),E.groundColor.copy(C.groundColor).multiplyScalar(B),i.hemi[p]=E,p++}}m>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ne.LTC_FLOAT_1,i.rectAreaLTC2=Ne.LTC_FLOAT_2):(i.rectAreaLTC1=Ne.LTC_HALF_1,i.rectAreaLTC2=Ne.LTC_HALF_2)),i.ambient[0]=c,i.ambient[1]=f,i.ambient[2]=d;const y=i.hash;(y.directionalLength!==h||y.pointLength!==g||y.spotLength!==_||y.rectAreaLength!==m||y.hemiLength!==p||y.numDirectionalShadows!==b||y.numPointShadows!==S||y.numSpotShadows!==x||y.numSpotMaps!==D||y.numLightProbes!==z)&&(i.directional.length=h,i.spot.length=_,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.pointShadow.length=S,i.pointShadowMap.length=S,i.spotShadow.length=x,i.spotShadowMap.length=x,i.directionalShadowMatrix.length=b,i.pointShadowMatrix.length=S,i.spotLightMatrix.length=x+D-O,i.spotLightMap.length=D,i.numSpotLightShadowsWithMaps=O,i.numLightProbes=z,y.directionalLength=h,y.pointLength=g,y.spotLength=_,y.rectAreaLength=m,y.hemiLength=p,y.numDirectionalShadows=b,y.numPointShadows=S,y.numSpotShadows=x,y.numSpotMaps=D,y.numLightProbes=z,i.version=KT++)}function l(u,c){let f=0,d=0,h=0,g=0,_=0;const m=c.matrixWorldInverse;for(let p=0,b=u.length;p<b;p++){const S=u[p];if(S.isDirectionalLight){const x=i.directional[f];x.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(m),f++}else if(S.isSpotLight){const x=i.spot[h];x.position.setFromMatrixPosition(S.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(m),h++}else if(S.isRectAreaLight){const x=i.rectArea[g];x.position.setFromMatrixPosition(S.matrixWorld),x.position.applyMatrix4(m),s.identity(),o.copy(S.matrixWorld),o.premultiply(m),s.extractRotation(o),x.halfWidth.set(S.width*.5,0,0),x.halfHeight.set(0,S.height*.5,0),x.halfWidth.applyMatrix4(s),x.halfHeight.applyMatrix4(s),g++}else if(S.isPointLight){const x=i.point[d];x.position.setFromMatrixPosition(S.matrixWorld),x.position.applyMatrix4(m),d++}else if(S.isHemisphereLight){const x=i.hemi[_];x.direction.setFromMatrixPosition(S.matrixWorld),x.direction.transformDirection(m),_++}}}return{setup:a,setupView:l,state:i}}function gm(t){const e=new jT(t),n=[],i=[];function r(c){u.camera=c,n.length=0,i.length=0}function o(c){n.push(c)}function s(c){i.push(c)}function a(){e.setup(n)}function l(c){e.setupView(n,c)}const u={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:u,setupLights:a,setupLightsView:l,pushLight:o,pushShadow:s}}function JT(t){let e=new WeakMap;function n(r,o=0){const s=e.get(r);let a;return s===void 0?(a=new gm(t),e.set(r,[a])):o>=s.length?(a=new gm(t),s.push(a)):a=s[o],a}function i(){e=new WeakMap}return{get:n,dispose:i}}const QT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,eA=`uniform sampler2D shadow_pass;
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
}`,tA=[new ce(1,0,0),new ce(-1,0,0),new ce(0,1,0),new ce(0,-1,0),new ce(0,0,1),new ce(0,0,-1)],nA=[new ce(0,-1,0),new ce(0,-1,0),new ce(0,0,1),new ce(0,0,-1),new ce(0,-1,0),new ce(0,-1,0)],vm=new Gt,ys=new ce,zc=new ce;function iA(t,e,n){let i=new xv;const r=new Et,o=new Et,s=new zt,a=new yS,l=new xS,u={},c=n.maxTextureSize,f={[Rr]:bn,[bn]:Rr,[Oi]:Oi},d=new Zn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Et},radius:{value:4}},vertexShader:QT,fragmentShader:eA}),h=d.clone();h.defines.HORIZONTAL_PASS=1;const g=new or;g.setAttribute("position",new mi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new xi(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=vl;let p=this.type;this.render=function(O,z,y){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||O.length===0)return;this.type===s1&&(nt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=vl);const M=t.getRenderTarget(),N=t.getActiveCubeFace(),C=t.getActiveMipmapLevel(),P=t.state;P.setBlending(Gi),P.buffers.depth.getReversed()===!0?P.buffers.color.setClear(0,0,0,0):P.buffers.color.setClear(1,1,1,1),P.buffers.depth.setTest(!0),P.setScissorTest(!1);const B=p!==this.type;B&&z.traverse(function(v){v.material&&(Array.isArray(v.material)?v.material.forEach(A=>A.needsUpdate=!0):v.material.needsUpdate=!0)});for(let v=0,A=O.length;v<A;v++){const E=O[v],I=E.shadow;if(I===void 0){nt("WebGLShadowMap:",E,"has no shadow.");continue}if(I.autoUpdate===!1&&I.needsUpdate===!1)continue;r.copy(I.mapSize);const V=I.getFrameExtents();r.multiply(V),o.copy(I.mapSize),(r.x>c||r.y>c)&&(r.x>c&&(o.x=Math.floor(c/V.x),r.x=o.x*V.x,I.mapSize.x=o.x),r.y>c&&(o.y=Math.floor(c/V.y),r.y=o.y*V.y,I.mapSize.y=o.y));const W=t.state.buffers.depth.getReversed();if(I.camera._reversedDepth=W,I.map===null||B===!0){if(I.map!==null&&(I.map.depthTexture!==null&&(I.map.depthTexture.dispose(),I.map.depthTexture=null),I.map.dispose()),this.type===Es){if(E.isPointLight){nt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}I.map=new _n(r.x,r.y,{format:Jo,type:ji,minFilter:Ct,magFilter:Ct,generateMipmaps:!1}),I.map.texture.name=E.name+".shadowMap",I.map.depthTexture=new js(r.x,r.y,ci),I.map.depthTexture.name=E.name+".shadowMapDepth",I.map.depthTexture.format=Ji,I.map.depthTexture.compareFunction=null,I.map.depthTexture.minFilter=Jt,I.map.depthTexture.magFilter=Jt}else E.isPointLight?(I.map=new Tv(r.x),I.map.depthTexture=new hS(r.x,yi)):(I.map=new _n(r.x,r.y),I.map.depthTexture=new js(r.x,r.y,yi)),I.map.depthTexture.name=E.name+".shadowMap",I.map.depthTexture.format=Ji,this.type===vl?(I.map.depthTexture.compareFunction=W?uh:lh,I.map.depthTexture.minFilter=Ct,I.map.depthTexture.magFilter=Ct):(I.map.depthTexture.compareFunction=null,I.map.depthTexture.minFilter=Jt,I.map.depthTexture.magFilter=Jt);I.camera.updateProjectionMatrix()}const q=I.map.isWebGLCubeRenderTarget?6:1;for(let $=0;$<q;$++){if(I.map.isWebGLCubeRenderTarget)t.setRenderTarget(I.map,$),t.clear();else{$===0&&(t.setRenderTarget(I.map),t.clear());const K=I.getViewport($);s.set(o.x*K.x,o.y*K.y,o.x*K.z,o.y*K.w),P.viewport(s)}if(E.isPointLight){const K=I.camera,ae=I.matrix,ve=E.distance||K.far;ve!==K.far&&(K.far=ve,K.updateProjectionMatrix()),ys.setFromMatrixPosition(E.matrixWorld),K.position.copy(ys),zc.copy(K.position),zc.add(tA[$]),K.up.copy(nA[$]),K.lookAt(zc),K.updateMatrixWorld(),ae.makeTranslation(-ys.x,-ys.y,-ys.z),vm.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),I._frustum.setFromProjectionMatrix(vm,K.coordinateSystem,K.reversedDepth)}else I.updateMatrices(E);i=I.getFrustum(),x(z,y,I.camera,E,this.type)}I.isPointLightShadow!==!0&&this.type===Es&&b(I,y),I.needsUpdate=!1}p=this.type,m.needsUpdate=!1,t.setRenderTarget(M,N,C)};function b(O,z){const y=e.update(_);d.defines.VSM_SAMPLES!==O.blurSamples&&(d.defines.VSM_SAMPLES=O.blurSamples,h.defines.VSM_SAMPLES=O.blurSamples,d.needsUpdate=!0,h.needsUpdate=!0),O.mapPass===null&&(O.mapPass=new _n(r.x,r.y,{format:Jo,type:ji})),d.uniforms.shadow_pass.value=O.map.depthTexture,d.uniforms.resolution.value=O.mapSize,d.uniforms.radius.value=O.radius,t.setRenderTarget(O.mapPass),t.clear(),t.renderBufferDirect(z,null,y,d,_,null),h.uniforms.shadow_pass.value=O.mapPass.texture,h.uniforms.resolution.value=O.mapSize,h.uniforms.radius.value=O.radius,t.setRenderTarget(O.map),t.clear(),t.renderBufferDirect(z,null,y,h,_,null)}function S(O,z,y,M){let N=null;const C=y.isPointLight===!0?O.customDistanceMaterial:O.customDepthMaterial;if(C!==void 0)N=C;else if(N=y.isPointLight===!0?l:a,t.localClippingEnabled&&z.clipShadows===!0&&Array.isArray(z.clippingPlanes)&&z.clippingPlanes.length!==0||z.displacementMap&&z.displacementScale!==0||z.alphaMap&&z.alphaTest>0||z.map&&z.alphaTest>0||z.alphaToCoverage===!0){const P=N.uuid,B=z.uuid;let v=u[P];v===void 0&&(v={},u[P]=v);let A=v[B];A===void 0&&(A=N.clone(),v[B]=A,z.addEventListener("dispose",D)),N=A}if(N.visible=z.visible,N.wireframe=z.wireframe,M===Es?N.side=z.shadowSide!==null?z.shadowSide:z.side:N.side=z.shadowSide!==null?z.shadowSide:f[z.side],N.alphaMap=z.alphaMap,N.alphaTest=z.alphaToCoverage===!0?.5:z.alphaTest,N.map=z.map,N.clipShadows=z.clipShadows,N.clippingPlanes=z.clippingPlanes,N.clipIntersection=z.clipIntersection,N.displacementMap=z.displacementMap,N.displacementScale=z.displacementScale,N.displacementBias=z.displacementBias,N.wireframeLinewidth=z.wireframeLinewidth,N.linewidth=z.linewidth,y.isPointLight===!0&&N.isMeshDistanceMaterial===!0){const P=t.properties.get(N);P.light=y}return N}function x(O,z,y,M,N){if(O.visible===!1)return;if(O.layers.test(z.layers)&&(O.isMesh||O.isLine||O.isPoints)&&(O.castShadow||O.receiveShadow&&N===Es)&&(!O.frustumCulled||i.intersectsObject(O))){O.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,O.matrixWorld);const B=e.update(O),v=O.material;if(Array.isArray(v)){const A=B.groups;for(let E=0,I=A.length;E<I;E++){const V=A[E],W=v[V.materialIndex];if(W&&W.visible){const q=S(O,W,M,N);O.onBeforeShadow(t,O,z,y,B,q,V),t.renderBufferDirect(y,null,B,q,O,V),O.onAfterShadow(t,O,z,y,B,q,V)}}}else if(v.visible){const A=S(O,v,M,N);O.onBeforeShadow(t,O,z,y,B,A,null),t.renderBufferDirect(y,null,B,A,O,null),O.onAfterShadow(t,O,z,y,B,A,null)}}const P=O.children;for(let B=0,v=P.length;B<v;B++)x(P[B],z,y,M,N)}function D(O){O.target.removeEventListener("dispose",D);for(const y in u){const M=u[y],N=O.target.uuid;N in M&&(M[N].dispose(),delete M[N])}}}function rA(t,e){function n(){let j=!1;const Re=new zt;let Ae=null;const Ve=new zt(0,0,0,0);return{setMask:function(Ee){Ae!==Ee&&!j&&(t.colorMask(Ee,Ee,Ee,Ee),Ae=Ee)},setLocked:function(Ee){j=Ee},setClear:function(Ee,_e,$e,tt,Lt){Lt===!0&&(Ee*=tt,_e*=tt,$e*=tt),Re.set(Ee,_e,$e,tt),Ve.equals(Re)===!1&&(t.clearColor(Ee,_e,$e,tt),Ve.copy(Re))},reset:function(){j=!1,Ae=null,Ve.set(-1,0,0,0)}}}function i(){let j=!1,Re=!1,Ae=null,Ve=null,Ee=null;return{setReversed:function(_e){if(Re!==_e){const $e=e.get("EXT_clip_control");_e?$e.clipControlEXT($e.LOWER_LEFT_EXT,$e.ZERO_TO_ONE_EXT):$e.clipControlEXT($e.LOWER_LEFT_EXT,$e.NEGATIVE_ONE_TO_ONE_EXT),Re=_e;const tt=Ee;Ee=null,this.setClear(tt)}},getReversed:function(){return Re},setTest:function(_e){_e?ne(t.DEPTH_TEST):le(t.DEPTH_TEST)},setMask:function(_e){Ae!==_e&&!j&&(t.depthMask(_e),Ae=_e)},setFunc:function(_e){if(Re&&(_e=z1[_e]),Ve!==_e){switch(_e){case yf:t.depthFunc(t.NEVER);break;case xf:t.depthFunc(t.ALWAYS);break;case bf:t.depthFunc(t.LESS);break;case Zo:t.depthFunc(t.LEQUAL);break;case Sf:t.depthFunc(t.EQUAL);break;case Mf:t.depthFunc(t.GEQUAL);break;case wf:t.depthFunc(t.GREATER);break;case Ef:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}Ve=_e}},setLocked:function(_e){j=_e},setClear:function(_e){Ee!==_e&&(Ee=_e,Re&&(_e=1-_e),t.clearDepth(_e))},reset:function(){j=!1,Ae=null,Ve=null,Ee=null,Re=!1}}}function r(){let j=!1,Re=null,Ae=null,Ve=null,Ee=null,_e=null,$e=null,tt=null,Lt=null;return{setTest:function(St){j||(St?ne(t.STENCIL_TEST):le(t.STENCIL_TEST))},setMask:function(St){Re!==St&&!j&&(t.stencilMask(St),Re=St)},setFunc:function(St,Mi,wi){(Ae!==St||Ve!==Mi||Ee!==wi)&&(t.stencilFunc(St,Mi,wi),Ae=St,Ve=Mi,Ee=wi)},setOp:function(St,Mi,wi){(_e!==St||$e!==Mi||tt!==wi)&&(t.stencilOp(St,Mi,wi),_e=St,$e=Mi,tt=wi)},setLocked:function(St){j=St},setClear:function(St){Lt!==St&&(t.clearStencil(St),Lt=St)},reset:function(){j=!1,Re=null,Ae=null,Ve=null,Ee=null,_e=null,$e=null,tt=null,Lt=null}}}const o=new n,s=new i,a=new r,l=new WeakMap,u=new WeakMap;let c={},f={},d=new WeakMap,h=[],g=null,_=!1,m=null,p=null,b=null,S=null,x=null,D=null,O=null,z=new wt(0,0,0),y=0,M=!1,N=null,C=null,P=null,B=null,v=null;const A=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let E=!1,I=0;const V=t.getParameter(t.VERSION);V.indexOf("WebGL")!==-1?(I=parseFloat(/^WebGL (\d)/.exec(V)[1]),E=I>=1):V.indexOf("OpenGL ES")!==-1&&(I=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),E=I>=2);let W=null,q={};const $=t.getParameter(t.SCISSOR_BOX),K=t.getParameter(t.VIEWPORT),ae=new zt().fromArray($),ve=new zt().fromArray(K);function pe(j,Re,Ae,Ve){const Ee=new Uint8Array(4),_e=t.createTexture();t.bindTexture(j,_e),t.texParameteri(j,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(j,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let $e=0;$e<Ae;$e++)j===t.TEXTURE_3D||j===t.TEXTURE_2D_ARRAY?t.texImage3D(Re,0,t.RGBA,1,1,Ve,0,t.RGBA,t.UNSIGNED_BYTE,Ee):t.texImage2D(Re+$e,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,Ee);return _e}const Z={};Z[t.TEXTURE_2D]=pe(t.TEXTURE_2D,t.TEXTURE_2D,1),Z[t.TEXTURE_CUBE_MAP]=pe(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),Z[t.TEXTURE_2D_ARRAY]=pe(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),Z[t.TEXTURE_3D]=pe(t.TEXTURE_3D,t.TEXTURE_3D,1,1),o.setClear(0,0,0,1),s.setClear(1),a.setClear(0),ne(t.DEPTH_TEST),s.setFunc(Zo),U(!1),G(Mp),ne(t.CULL_FACE),L(Gi);function ne(j){c[j]!==!0&&(t.enable(j),c[j]=!0)}function le(j){c[j]!==!1&&(t.disable(j),c[j]=!1)}function xe(j,Re){return f[j]!==Re?(t.bindFramebuffer(j,Re),f[j]=Re,j===t.DRAW_FRAMEBUFFER&&(f[t.FRAMEBUFFER]=Re),j===t.FRAMEBUFFER&&(f[t.DRAW_FRAMEBUFFER]=Re),!0):!1}function be(j,Re){let Ae=h,Ve=!1;if(j){Ae=d.get(Re),Ae===void 0&&(Ae=[],d.set(Re,Ae));const Ee=j.textures;if(Ae.length!==Ee.length||Ae[0]!==t.COLOR_ATTACHMENT0){for(let _e=0,$e=Ee.length;_e<$e;_e++)Ae[_e]=t.COLOR_ATTACHMENT0+_e;Ae.length=Ee.length,Ve=!0}}else Ae[0]!==t.BACK&&(Ae[0]=t.BACK,Ve=!0);Ve&&t.drawBuffers(Ae)}function Ce(j){return g!==j?(t.useProgram(j),g=j,!0):!1}const H={[Xr]:t.FUNC_ADD,[l1]:t.FUNC_SUBTRACT,[u1]:t.FUNC_REVERSE_SUBTRACT};H[c1]=t.MIN,H[f1]=t.MAX;const X={[d1]:t.ZERO,[h1]:t.ONE,[p1]:t.SRC_COLOR,[vf]:t.SRC_ALPHA,[x1]:t.SRC_ALPHA_SATURATE,[_1]:t.DST_COLOR,[g1]:t.DST_ALPHA,[m1]:t.ONE_MINUS_SRC_COLOR,[_f]:t.ONE_MINUS_SRC_ALPHA,[y1]:t.ONE_MINUS_DST_COLOR,[v1]:t.ONE_MINUS_DST_ALPHA,[b1]:t.CONSTANT_COLOR,[S1]:t.ONE_MINUS_CONSTANT_COLOR,[M1]:t.CONSTANT_ALPHA,[w1]:t.ONE_MINUS_CONSTANT_ALPHA};function L(j,Re,Ae,Ve,Ee,_e,$e,tt,Lt,St){if(j===Gi){_===!0&&(le(t.BLEND),_=!1);return}if(_===!1&&(ne(t.BLEND),_=!0),j!==a1){if(j!==m||St!==M){if((p!==Xr||x!==Xr)&&(t.blendEquation(t.FUNC_ADD),p=Xr,x=Xr),St)switch(j){case zo:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case wp:t.blendFunc(t.ONE,t.ONE);break;case Ep:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Tp:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:gt("WebGLState: Invalid blending: ",j);break}else switch(j){case zo:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case wp:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case Ep:gt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Tp:gt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:gt("WebGLState: Invalid blending: ",j);break}b=null,S=null,D=null,O=null,z.set(0,0,0),y=0,m=j,M=St}return}Ee=Ee||Re,_e=_e||Ae,$e=$e||Ve,(Re!==p||Ee!==x)&&(t.blendEquationSeparate(H[Re],H[Ee]),p=Re,x=Ee),(Ae!==b||Ve!==S||_e!==D||$e!==O)&&(t.blendFuncSeparate(X[Ae],X[Ve],X[_e],X[$e]),b=Ae,S=Ve,D=_e,O=$e),(tt.equals(z)===!1||Lt!==y)&&(t.blendColor(tt.r,tt.g,tt.b,Lt),z.copy(tt),y=Lt),m=j,M=!1}function F(j,Re){j.side===Oi?le(t.CULL_FACE):ne(t.CULL_FACE);let Ae=j.side===bn;Re&&(Ae=!Ae),U(Ae),j.blending===zo&&j.transparent===!1?L(Gi):L(j.blending,j.blendEquation,j.blendSrc,j.blendDst,j.blendEquationAlpha,j.blendSrcAlpha,j.blendDstAlpha,j.blendColor,j.blendAlpha,j.premultipliedAlpha),s.setFunc(j.depthFunc),s.setTest(j.depthTest),s.setMask(j.depthWrite),o.setMask(j.colorWrite);const Ve=j.stencilWrite;a.setTest(Ve),Ve&&(a.setMask(j.stencilWriteMask),a.setFunc(j.stencilFunc,j.stencilRef,j.stencilFuncMask),a.setOp(j.stencilFail,j.stencilZFail,j.stencilZPass)),te(j.polygonOffset,j.polygonOffsetFactor,j.polygonOffsetUnits),j.alphaToCoverage===!0?ne(t.SAMPLE_ALPHA_TO_COVERAGE):le(t.SAMPLE_ALPHA_TO_COVERAGE)}function U(j){N!==j&&(j?t.frontFace(t.CW):t.frontFace(t.CCW),N=j)}function G(j){j!==r1?(ne(t.CULL_FACE),j!==C&&(j===Mp?t.cullFace(t.BACK):j===o1?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):le(t.CULL_FACE),C=j}function T(j){j!==P&&(E&&t.lineWidth(j),P=j)}function te(j,Re,Ae){j?(ne(t.POLYGON_OFFSET_FILL),(B!==Re||v!==Ae)&&(B=Re,v=Ae,s.getReversed()&&(Re=-Re),t.polygonOffset(Re,Ae))):le(t.POLYGON_OFFSET_FILL)}function Q(j){j?ne(t.SCISSOR_TEST):le(t.SCISSOR_TEST)}function J(j){j===void 0&&(j=t.TEXTURE0+A-1),W!==j&&(t.activeTexture(j),W=j)}function ie(j,Re,Ae){Ae===void 0&&(W===null?Ae=t.TEXTURE0+A-1:Ae=W);let Ve=q[Ae];Ve===void 0&&(Ve={type:void 0,texture:void 0},q[Ae]=Ve),(Ve.type!==j||Ve.texture!==Re)&&(W!==Ae&&(t.activeTexture(Ae),W=Ae),t.bindTexture(j,Re||Z[j]),Ve.type=j,Ve.texture=Re)}function R(){const j=q[W];j!==void 0&&j.type!==void 0&&(t.bindTexture(j.type,null),j.type=void 0,j.texture=void 0)}function w(){try{t.compressedTexImage2D(...arguments)}catch(j){gt("WebGLState:",j)}}function Y(){try{t.compressedTexImage3D(...arguments)}catch(j){gt("WebGLState:",j)}}function re(){try{t.texSubImage2D(...arguments)}catch(j){gt("WebGLState:",j)}}function de(){try{t.texSubImage3D(...arguments)}catch(j){gt("WebGLState:",j)}}function oe(){try{t.compressedTexSubImage2D(...arguments)}catch(j){gt("WebGLState:",j)}}function Ie(){try{t.compressedTexSubImage3D(...arguments)}catch(j){gt("WebGLState:",j)}}function Me(){try{t.texStorage2D(...arguments)}catch(j){gt("WebGLState:",j)}}function ze(){try{t.texStorage3D(...arguments)}catch(j){gt("WebGLState:",j)}}function We(){try{t.texImage2D(...arguments)}catch(j){gt("WebGLState:",j)}}function we(){try{t.texImage3D(...arguments)}catch(j){gt("WebGLState:",j)}}function Te(j){ae.equals(j)===!1&&(t.scissor(j.x,j.y,j.z,j.w),ae.copy(j))}function Pe(j){ve.equals(j)===!1&&(t.viewport(j.x,j.y,j.z,j.w),ve.copy(j))}function Ue(j,Re){let Ae=u.get(Re);Ae===void 0&&(Ae=new WeakMap,u.set(Re,Ae));let Ve=Ae.get(j);Ve===void 0&&(Ve=t.getUniformBlockIndex(Re,j.name),Ae.set(j,Ve))}function Oe(j,Re){const Ve=u.get(Re).get(j);l.get(Re)!==Ve&&(t.uniformBlockBinding(Re,Ve,j.__bindingPointIndex),l.set(Re,Ve))}function rt(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),s.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),c={},W=null,q={},f={},d=new WeakMap,h=[],g=null,_=!1,m=null,p=null,b=null,S=null,x=null,D=null,O=null,z=new wt(0,0,0),y=0,M=!1,N=null,C=null,P=null,B=null,v=null,ae.set(0,0,t.canvas.width,t.canvas.height),ve.set(0,0,t.canvas.width,t.canvas.height),o.reset(),s.reset(),a.reset()}return{buffers:{color:o,depth:s,stencil:a},enable:ne,disable:le,bindFramebuffer:xe,drawBuffers:be,useProgram:Ce,setBlending:L,setMaterial:F,setFlipSided:U,setCullFace:G,setLineWidth:T,setPolygonOffset:te,setScissorTest:Q,activeTexture:J,bindTexture:ie,unbindTexture:R,compressedTexImage2D:w,compressedTexImage3D:Y,texImage2D:We,texImage3D:we,updateUBOMapping:Ue,uniformBlockBinding:Oe,texStorage2D:Me,texStorage3D:ze,texSubImage2D:re,texSubImage3D:de,compressedTexSubImage2D:oe,compressedTexSubImage3D:Ie,scissor:Te,viewport:Pe,reset:rt}}function oA(t,e,n,i,r,o,s){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new Et,c=new WeakMap;let f;const d=new WeakMap;let h=!1;try{h=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(R,w){return h?new OffscreenCanvas(R,w):Xl("canvas")}function _(R,w,Y){let re=1;const de=ie(R);if((de.width>Y||de.height>Y)&&(re=Y/Math.max(de.width,de.height)),re<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const oe=Math.floor(re*de.width),Ie=Math.floor(re*de.height);f===void 0&&(f=g(oe,Ie));const Me=w?g(oe,Ie):f;return Me.width=oe,Me.height=Ie,Me.getContext("2d").drawImage(R,0,0,oe,Ie),nt("WebGLRenderer: Texture has been resized from ("+de.width+"x"+de.height+") to ("+oe+"x"+Ie+")."),Me}else return"data"in R&&nt("WebGLRenderer: Image in DataTexture is too big ("+de.width+"x"+de.height+")."),R;return R}function m(R){return R.generateMipmaps}function p(R){t.generateMipmap(R)}function b(R){return R.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?t.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function S(R,w,Y,re,de=!1){if(R!==null){if(t[R]!==void 0)return t[R];nt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let oe=w;if(w===t.RED&&(Y===t.FLOAT&&(oe=t.R32F),Y===t.HALF_FLOAT&&(oe=t.R16F),Y===t.UNSIGNED_BYTE&&(oe=t.R8)),w===t.RED_INTEGER&&(Y===t.UNSIGNED_BYTE&&(oe=t.R8UI),Y===t.UNSIGNED_SHORT&&(oe=t.R16UI),Y===t.UNSIGNED_INT&&(oe=t.R32UI),Y===t.BYTE&&(oe=t.R8I),Y===t.SHORT&&(oe=t.R16I),Y===t.INT&&(oe=t.R32I)),w===t.RG&&(Y===t.FLOAT&&(oe=t.RG32F),Y===t.HALF_FLOAT&&(oe=t.RG16F),Y===t.UNSIGNED_BYTE&&(oe=t.RG8)),w===t.RG_INTEGER&&(Y===t.UNSIGNED_BYTE&&(oe=t.RG8UI),Y===t.UNSIGNED_SHORT&&(oe=t.RG16UI),Y===t.UNSIGNED_INT&&(oe=t.RG32UI),Y===t.BYTE&&(oe=t.RG8I),Y===t.SHORT&&(oe=t.RG16I),Y===t.INT&&(oe=t.RG32I)),w===t.RGB_INTEGER&&(Y===t.UNSIGNED_BYTE&&(oe=t.RGB8UI),Y===t.UNSIGNED_SHORT&&(oe=t.RGB16UI),Y===t.UNSIGNED_INT&&(oe=t.RGB32UI),Y===t.BYTE&&(oe=t.RGB8I),Y===t.SHORT&&(oe=t.RGB16I),Y===t.INT&&(oe=t.RGB32I)),w===t.RGBA_INTEGER&&(Y===t.UNSIGNED_BYTE&&(oe=t.RGBA8UI),Y===t.UNSIGNED_SHORT&&(oe=t.RGBA16UI),Y===t.UNSIGNED_INT&&(oe=t.RGBA32UI),Y===t.BYTE&&(oe=t.RGBA8I),Y===t.SHORT&&(oe=t.RGBA16I),Y===t.INT&&(oe=t.RGBA32I)),w===t.RGB&&(Y===t.UNSIGNED_INT_5_9_9_9_REV&&(oe=t.RGB9_E5),Y===t.UNSIGNED_INT_10F_11F_11F_REV&&(oe=t.R11F_G11F_B10F)),w===t.RGBA){const Ie=de?Gl:ht.getTransfer(re);Y===t.FLOAT&&(oe=t.RGBA32F),Y===t.HALF_FLOAT&&(oe=t.RGBA16F),Y===t.UNSIGNED_BYTE&&(oe=Ie===Mt?t.SRGB8_ALPHA8:t.RGBA8),Y===t.UNSIGNED_SHORT_4_4_4_4&&(oe=t.RGBA4),Y===t.UNSIGNED_SHORT_5_5_5_1&&(oe=t.RGB5_A1)}return(oe===t.R16F||oe===t.R32F||oe===t.RG16F||oe===t.RG32F||oe===t.RGBA16F||oe===t.RGBA32F)&&e.get("EXT_color_buffer_float"),oe}function x(R,w){let Y;return R?w===null||w===yi||w===Zs?Y=t.DEPTH24_STENCIL8:w===ci?Y=t.DEPTH32F_STENCIL8:w===Ks&&(Y=t.DEPTH24_STENCIL8,nt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===yi||w===Zs?Y=t.DEPTH_COMPONENT24:w===ci?Y=t.DEPTH_COMPONENT32F:w===Ks&&(Y=t.DEPTH_COMPONENT16),Y}function D(R,w){return m(R)===!0||R.isFramebufferTexture&&R.minFilter!==Jt&&R.minFilter!==Ct?Math.log2(Math.max(w.width,w.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?w.mipmaps.length:1}function O(R){const w=R.target;w.removeEventListener("dispose",O),y(w),w.isVideoTexture&&c.delete(w)}function z(R){const w=R.target;w.removeEventListener("dispose",z),N(w)}function y(R){const w=i.get(R);if(w.__webglInit===void 0)return;const Y=R.source,re=d.get(Y);if(re){const de=re[w.__cacheKey];de.usedTimes--,de.usedTimes===0&&M(R),Object.keys(re).length===0&&d.delete(Y)}i.remove(R)}function M(R){const w=i.get(R);t.deleteTexture(w.__webglTexture);const Y=R.source,re=d.get(Y);delete re[w.__cacheKey],s.memory.textures--}function N(R){const w=i.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),i.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let re=0;re<6;re++){if(Array.isArray(w.__webglFramebuffer[re]))for(let de=0;de<w.__webglFramebuffer[re].length;de++)t.deleteFramebuffer(w.__webglFramebuffer[re][de]);else t.deleteFramebuffer(w.__webglFramebuffer[re]);w.__webglDepthbuffer&&t.deleteRenderbuffer(w.__webglDepthbuffer[re])}else{if(Array.isArray(w.__webglFramebuffer))for(let re=0;re<w.__webglFramebuffer.length;re++)t.deleteFramebuffer(w.__webglFramebuffer[re]);else t.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&t.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&t.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let re=0;re<w.__webglColorRenderbuffer.length;re++)w.__webglColorRenderbuffer[re]&&t.deleteRenderbuffer(w.__webglColorRenderbuffer[re]);w.__webglDepthRenderbuffer&&t.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const Y=R.textures;for(let re=0,de=Y.length;re<de;re++){const oe=i.get(Y[re]);oe.__webglTexture&&(t.deleteTexture(oe.__webglTexture),s.memory.textures--),i.remove(Y[re])}i.remove(R)}let C=0;function P(){C=0}function B(){const R=C;return R>=r.maxTextures&&nt("WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+r.maxTextures),C+=1,R}function v(R){const w=[];return w.push(R.wrapS),w.push(R.wrapT),w.push(R.wrapR||0),w.push(R.magFilter),w.push(R.minFilter),w.push(R.anisotropy),w.push(R.internalFormat),w.push(R.format),w.push(R.type),w.push(R.generateMipmaps),w.push(R.premultiplyAlpha),w.push(R.flipY),w.push(R.unpackAlignment),w.push(R.colorSpace),w.join()}function A(R,w){const Y=i.get(R);if(R.isVideoTexture&&Q(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&Y.__version!==R.version){const re=R.image;if(re===null)nt("WebGLRenderer: Texture marked for update but no image data found.");else if(re.complete===!1)nt("WebGLRenderer: Texture marked for update but image is incomplete");else{Z(Y,R,w);return}}else R.isExternalTexture&&(Y.__webglTexture=R.sourceTexture?R.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,Y.__webglTexture,t.TEXTURE0+w)}function E(R,w){const Y=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&Y.__version!==R.version){Z(Y,R,w);return}else R.isExternalTexture&&(Y.__webglTexture=R.sourceTexture?R.sourceTexture:null);n.bindTexture(t.TEXTURE_2D_ARRAY,Y.__webglTexture,t.TEXTURE0+w)}function I(R,w){const Y=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&Y.__version!==R.version){Z(Y,R,w);return}n.bindTexture(t.TEXTURE_3D,Y.__webglTexture,t.TEXTURE0+w)}function V(R,w){const Y=i.get(R);if(R.isCubeDepthTexture!==!0&&R.version>0&&Y.__version!==R.version){ne(Y,R,w);return}n.bindTexture(t.TEXTURE_CUBE_MAP,Y.__webglTexture,t.TEXTURE0+w)}const W={[Tf]:t.REPEAT,[ki]:t.CLAMP_TO_EDGE,[Af]:t.MIRRORED_REPEAT},q={[Jt]:t.NEAREST,[A1]:t.NEAREST_MIPMAP_NEAREST,[Ia]:t.NEAREST_MIPMAP_LINEAR,[Ct]:t.LINEAR,[cc]:t.LINEAR_MIPMAP_NEAREST,[jr]:t.LINEAR_MIPMAP_LINEAR},$={[P1]:t.NEVER,[U1]:t.ALWAYS,[N1]:t.LESS,[lh]:t.LEQUAL,[D1]:t.EQUAL,[uh]:t.GEQUAL,[L1]:t.GREATER,[F1]:t.NOTEQUAL};function K(R,w){if(w.type===ci&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===Ct||w.magFilter===cc||w.magFilter===Ia||w.magFilter===jr||w.minFilter===Ct||w.minFilter===cc||w.minFilter===Ia||w.minFilter===jr)&&nt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(R,t.TEXTURE_WRAP_S,W[w.wrapS]),t.texParameteri(R,t.TEXTURE_WRAP_T,W[w.wrapT]),(R===t.TEXTURE_3D||R===t.TEXTURE_2D_ARRAY)&&t.texParameteri(R,t.TEXTURE_WRAP_R,W[w.wrapR]),t.texParameteri(R,t.TEXTURE_MAG_FILTER,q[w.magFilter]),t.texParameteri(R,t.TEXTURE_MIN_FILTER,q[w.minFilter]),w.compareFunction&&(t.texParameteri(R,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(R,t.TEXTURE_COMPARE_FUNC,$[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===Jt||w.minFilter!==Ia&&w.minFilter!==jr||w.type===ci&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||i.get(w).__currentAnisotropy){const Y=e.get("EXT_texture_filter_anisotropic");t.texParameterf(R,Y.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,r.getMaxAnisotropy())),i.get(w).__currentAnisotropy=w.anisotropy}}}function ae(R,w){let Y=!1;R.__webglInit===void 0&&(R.__webglInit=!0,w.addEventListener("dispose",O));const re=w.source;let de=d.get(re);de===void 0&&(de={},d.set(re,de));const oe=v(w);if(oe!==R.__cacheKey){de[oe]===void 0&&(de[oe]={texture:t.createTexture(),usedTimes:0},s.memory.textures++,Y=!0),de[oe].usedTimes++;const Ie=de[R.__cacheKey];Ie!==void 0&&(de[R.__cacheKey].usedTimes--,Ie.usedTimes===0&&M(w)),R.__cacheKey=oe,R.__webglTexture=de[oe].texture}return Y}function ve(R,w,Y){return Math.floor(Math.floor(R/Y)/w)}function pe(R,w,Y,re){const oe=R.updateRanges;if(oe.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,w.width,w.height,Y,re,w.data);else{oe.sort((we,Te)=>we.start-Te.start);let Ie=0;for(let we=1;we<oe.length;we++){const Te=oe[Ie],Pe=oe[we],Ue=Te.start+Te.count,Oe=ve(Pe.start,w.width,4),rt=ve(Te.start,w.width,4);Pe.start<=Ue+1&&Oe===rt&&ve(Pe.start+Pe.count-1,w.width,4)===Oe?Te.count=Math.max(Te.count,Pe.start+Pe.count-Te.start):(++Ie,oe[Ie]=Pe)}oe.length=Ie+1;const Me=t.getParameter(t.UNPACK_ROW_LENGTH),ze=t.getParameter(t.UNPACK_SKIP_PIXELS),We=t.getParameter(t.UNPACK_SKIP_ROWS);t.pixelStorei(t.UNPACK_ROW_LENGTH,w.width);for(let we=0,Te=oe.length;we<Te;we++){const Pe=oe[we],Ue=Math.floor(Pe.start/4),Oe=Math.ceil(Pe.count/4),rt=Ue%w.width,j=Math.floor(Ue/w.width),Re=Oe,Ae=1;t.pixelStorei(t.UNPACK_SKIP_PIXELS,rt),t.pixelStorei(t.UNPACK_SKIP_ROWS,j),n.texSubImage2D(t.TEXTURE_2D,0,rt,j,Re,Ae,Y,re,w.data)}R.clearUpdateRanges(),t.pixelStorei(t.UNPACK_ROW_LENGTH,Me),t.pixelStorei(t.UNPACK_SKIP_PIXELS,ze),t.pixelStorei(t.UNPACK_SKIP_ROWS,We)}}function Z(R,w,Y){let re=t.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(re=t.TEXTURE_2D_ARRAY),w.isData3DTexture&&(re=t.TEXTURE_3D);const de=ae(R,w),oe=w.source;n.bindTexture(re,R.__webglTexture,t.TEXTURE0+Y);const Ie=i.get(oe);if(oe.version!==Ie.__version||de===!0){n.activeTexture(t.TEXTURE0+Y);const Me=ht.getPrimaries(ht.workingColorSpace),ze=w.colorSpace===Sr?null:ht.getPrimaries(w.colorSpace),We=w.colorSpace===Sr||Me===ze?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,w.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,w.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,We);let we=_(w.image,!1,r.maxTextureSize);we=J(w,we);const Te=o.convert(w.format,w.colorSpace),Pe=o.convert(w.type);let Ue=S(w.internalFormat,Te,Pe,w.colorSpace,w.isVideoTexture);K(re,w);let Oe;const rt=w.mipmaps,j=w.isVideoTexture!==!0,Re=Ie.__version===void 0||de===!0,Ae=oe.dataReady,Ve=D(w,we);if(w.isDepthTexture)Ue=x(w.format===Jr,w.type),Re&&(j?n.texStorage2D(t.TEXTURE_2D,1,Ue,we.width,we.height):n.texImage2D(t.TEXTURE_2D,0,Ue,we.width,we.height,0,Te,Pe,null));else if(w.isDataTexture)if(rt.length>0){j&&Re&&n.texStorage2D(t.TEXTURE_2D,Ve,Ue,rt[0].width,rt[0].height);for(let Ee=0,_e=rt.length;Ee<_e;Ee++)Oe=rt[Ee],j?Ae&&n.texSubImage2D(t.TEXTURE_2D,Ee,0,0,Oe.width,Oe.height,Te,Pe,Oe.data):n.texImage2D(t.TEXTURE_2D,Ee,Ue,Oe.width,Oe.height,0,Te,Pe,Oe.data);w.generateMipmaps=!1}else j?(Re&&n.texStorage2D(t.TEXTURE_2D,Ve,Ue,we.width,we.height),Ae&&pe(w,we,Te,Pe)):n.texImage2D(t.TEXTURE_2D,0,Ue,we.width,we.height,0,Te,Pe,we.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){j&&Re&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Ve,Ue,rt[0].width,rt[0].height,we.depth);for(let Ee=0,_e=rt.length;Ee<_e;Ee++)if(Oe=rt[Ee],w.format!==pn)if(Te!==null)if(j){if(Ae)if(w.layerUpdates.size>0){const $e=qp(Oe.width,Oe.height,w.format,w.type);for(const tt of w.layerUpdates){const Lt=Oe.data.subarray(tt*$e/Oe.data.BYTES_PER_ELEMENT,(tt+1)*$e/Oe.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,Ee,0,0,tt,Oe.width,Oe.height,1,Te,Lt)}w.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,Ee,0,0,0,Oe.width,Oe.height,we.depth,Te,Oe.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,Ee,Ue,Oe.width,Oe.height,we.depth,0,Oe.data,0,0);else nt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else j?Ae&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,Ee,0,0,0,Oe.width,Oe.height,we.depth,Te,Pe,Oe.data):n.texImage3D(t.TEXTURE_2D_ARRAY,Ee,Ue,Oe.width,Oe.height,we.depth,0,Te,Pe,Oe.data)}else{j&&Re&&n.texStorage2D(t.TEXTURE_2D,Ve,Ue,rt[0].width,rt[0].height);for(let Ee=0,_e=rt.length;Ee<_e;Ee++)Oe=rt[Ee],w.format!==pn?Te!==null?j?Ae&&n.compressedTexSubImage2D(t.TEXTURE_2D,Ee,0,0,Oe.width,Oe.height,Te,Oe.data):n.compressedTexImage2D(t.TEXTURE_2D,Ee,Ue,Oe.width,Oe.height,0,Oe.data):nt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):j?Ae&&n.texSubImage2D(t.TEXTURE_2D,Ee,0,0,Oe.width,Oe.height,Te,Pe,Oe.data):n.texImage2D(t.TEXTURE_2D,Ee,Ue,Oe.width,Oe.height,0,Te,Pe,Oe.data)}else if(w.isDataArrayTexture)if(j){if(Re&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Ve,Ue,we.width,we.height,we.depth),Ae)if(w.layerUpdates.size>0){const Ee=qp(we.width,we.height,w.format,w.type);for(const _e of w.layerUpdates){const $e=we.data.subarray(_e*Ee/we.data.BYTES_PER_ELEMENT,(_e+1)*Ee/we.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,_e,we.width,we.height,1,Te,Pe,$e)}w.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,we.width,we.height,we.depth,Te,Pe,we.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Ue,we.width,we.height,we.depth,0,Te,Pe,we.data);else if(w.isData3DTexture)j?(Re&&n.texStorage3D(t.TEXTURE_3D,Ve,Ue,we.width,we.height,we.depth),Ae&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,we.width,we.height,we.depth,Te,Pe,we.data)):n.texImage3D(t.TEXTURE_3D,0,Ue,we.width,we.height,we.depth,0,Te,Pe,we.data);else if(w.isFramebufferTexture){if(Re)if(j)n.texStorage2D(t.TEXTURE_2D,Ve,Ue,we.width,we.height);else{let Ee=we.width,_e=we.height;for(let $e=0;$e<Ve;$e++)n.texImage2D(t.TEXTURE_2D,$e,Ue,Ee,_e,0,Te,Pe,null),Ee>>=1,_e>>=1}}else if(rt.length>0){if(j&&Re){const Ee=ie(rt[0]);n.texStorage2D(t.TEXTURE_2D,Ve,Ue,Ee.width,Ee.height)}for(let Ee=0,_e=rt.length;Ee<_e;Ee++)Oe=rt[Ee],j?Ae&&n.texSubImage2D(t.TEXTURE_2D,Ee,0,0,Te,Pe,Oe):n.texImage2D(t.TEXTURE_2D,Ee,Ue,Te,Pe,Oe);w.generateMipmaps=!1}else if(j){if(Re){const Ee=ie(we);n.texStorage2D(t.TEXTURE_2D,Ve,Ue,Ee.width,Ee.height)}Ae&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,Te,Pe,we)}else n.texImage2D(t.TEXTURE_2D,0,Ue,Te,Pe,we);m(w)&&p(re),Ie.__version=oe.version,w.onUpdate&&w.onUpdate(w)}R.__version=w.version}function ne(R,w,Y){if(w.image.length!==6)return;const re=ae(R,w),de=w.source;n.bindTexture(t.TEXTURE_CUBE_MAP,R.__webglTexture,t.TEXTURE0+Y);const oe=i.get(de);if(de.version!==oe.__version||re===!0){n.activeTexture(t.TEXTURE0+Y);const Ie=ht.getPrimaries(ht.workingColorSpace),Me=w.colorSpace===Sr?null:ht.getPrimaries(w.colorSpace),ze=w.colorSpace===Sr||Ie===Me?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,w.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,w.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ze);const We=w.isCompressedTexture||w.image[0].isCompressedTexture,we=w.image[0]&&w.image[0].isDataTexture,Te=[];for(let _e=0;_e<6;_e++)!We&&!we?Te[_e]=_(w.image[_e],!0,r.maxCubemapSize):Te[_e]=we?w.image[_e].image:w.image[_e],Te[_e]=J(w,Te[_e]);const Pe=Te[0],Ue=o.convert(w.format,w.colorSpace),Oe=o.convert(w.type),rt=S(w.internalFormat,Ue,Oe,w.colorSpace),j=w.isVideoTexture!==!0,Re=oe.__version===void 0||re===!0,Ae=de.dataReady;let Ve=D(w,Pe);K(t.TEXTURE_CUBE_MAP,w);let Ee;if(We){j&&Re&&n.texStorage2D(t.TEXTURE_CUBE_MAP,Ve,rt,Pe.width,Pe.height);for(let _e=0;_e<6;_e++){Ee=Te[_e].mipmaps;for(let $e=0;$e<Ee.length;$e++){const tt=Ee[$e];w.format!==pn?Ue!==null?j?Ae&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+_e,$e,0,0,tt.width,tt.height,Ue,tt.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+_e,$e,rt,tt.width,tt.height,0,tt.data):nt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):j?Ae&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+_e,$e,0,0,tt.width,tt.height,Ue,Oe,tt.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+_e,$e,rt,tt.width,tt.height,0,Ue,Oe,tt.data)}}}else{if(Ee=w.mipmaps,j&&Re){Ee.length>0&&Ve++;const _e=ie(Te[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,Ve,rt,_e.width,_e.height)}for(let _e=0;_e<6;_e++)if(we){j?Ae&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,0,0,Te[_e].width,Te[_e].height,Ue,Oe,Te[_e].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,rt,Te[_e].width,Te[_e].height,0,Ue,Oe,Te[_e].data);for(let $e=0;$e<Ee.length;$e++){const Lt=Ee[$e].image[_e].image;j?Ae&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+_e,$e+1,0,0,Lt.width,Lt.height,Ue,Oe,Lt.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+_e,$e+1,rt,Lt.width,Lt.height,0,Ue,Oe,Lt.data)}}else{j?Ae&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,0,0,Ue,Oe,Te[_e]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,rt,Ue,Oe,Te[_e]);for(let $e=0;$e<Ee.length;$e++){const tt=Ee[$e];j?Ae&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+_e,$e+1,0,0,Ue,Oe,tt.image[_e]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+_e,$e+1,rt,Ue,Oe,tt.image[_e])}}}m(w)&&p(t.TEXTURE_CUBE_MAP),oe.__version=de.version,w.onUpdate&&w.onUpdate(w)}R.__version=w.version}function le(R,w,Y,re,de,oe){const Ie=o.convert(Y.format,Y.colorSpace),Me=o.convert(Y.type),ze=S(Y.internalFormat,Ie,Me,Y.colorSpace),We=i.get(w),we=i.get(Y);if(we.__renderTarget=w,!We.__hasExternalTextures){const Te=Math.max(1,w.width>>oe),Pe=Math.max(1,w.height>>oe);de===t.TEXTURE_3D||de===t.TEXTURE_2D_ARRAY?n.texImage3D(de,oe,ze,Te,Pe,w.depth,0,Ie,Me,null):n.texImage2D(de,oe,ze,Te,Pe,0,Ie,Me,null)}n.bindFramebuffer(t.FRAMEBUFFER,R),te(w)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,re,de,we.__webglTexture,0,T(w)):(de===t.TEXTURE_2D||de>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&de<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,re,de,we.__webglTexture,oe),n.bindFramebuffer(t.FRAMEBUFFER,null)}function xe(R,w,Y){if(t.bindRenderbuffer(t.RENDERBUFFER,R),w.depthBuffer){const re=w.depthTexture,de=re&&re.isDepthTexture?re.type:null,oe=x(w.stencilBuffer,de),Ie=w.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;te(w)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,T(w),oe,w.width,w.height):Y?t.renderbufferStorageMultisample(t.RENDERBUFFER,T(w),oe,w.width,w.height):t.renderbufferStorage(t.RENDERBUFFER,oe,w.width,w.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,Ie,t.RENDERBUFFER,R)}else{const re=w.textures;for(let de=0;de<re.length;de++){const oe=re[de],Ie=o.convert(oe.format,oe.colorSpace),Me=o.convert(oe.type),ze=S(oe.internalFormat,Ie,Me,oe.colorSpace);te(w)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,T(w),ze,w.width,w.height):Y?t.renderbufferStorageMultisample(t.RENDERBUFFER,T(w),ze,w.width,w.height):t.renderbufferStorage(t.RENDERBUFFER,ze,w.width,w.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function be(R,w,Y){const re=w.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(t.FRAMEBUFFER,R),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const de=i.get(w.depthTexture);if(de.__renderTarget=w,(!de.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),re){if(de.__webglInit===void 0&&(de.__webglInit=!0,w.depthTexture.addEventListener("dispose",O)),de.__webglTexture===void 0){de.__webglTexture=t.createTexture(),n.bindTexture(t.TEXTURE_CUBE_MAP,de.__webglTexture),K(t.TEXTURE_CUBE_MAP,w.depthTexture);const We=o.convert(w.depthTexture.format),we=o.convert(w.depthTexture.type);let Te;w.depthTexture.format===Ji?Te=t.DEPTH_COMPONENT24:w.depthTexture.format===Jr&&(Te=t.DEPTH24_STENCIL8);for(let Pe=0;Pe<6;Pe++)t.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,0,Te,w.width,w.height,0,We,we,null)}}else A(w.depthTexture,0);const oe=de.__webglTexture,Ie=T(w),Me=re?t.TEXTURE_CUBE_MAP_POSITIVE_X+Y:t.TEXTURE_2D,ze=w.depthTexture.format===Jr?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(w.depthTexture.format===Ji)te(w)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ze,Me,oe,0,Ie):t.framebufferTexture2D(t.FRAMEBUFFER,ze,Me,oe,0);else if(w.depthTexture.format===Jr)te(w)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ze,Me,oe,0,Ie):t.framebufferTexture2D(t.FRAMEBUFFER,ze,Me,oe,0);else throw new Error("Unknown depthTexture format")}function Ce(R){const w=i.get(R),Y=R.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==R.depthTexture){const re=R.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),re){const de=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,re.removeEventListener("dispose",de)};re.addEventListener("dispose",de),w.__depthDisposeCallback=de}w.__boundDepthTexture=re}if(R.depthTexture&&!w.__autoAllocateDepthBuffer)if(Y)for(let re=0;re<6;re++)be(w.__webglFramebuffer[re],R,re);else{const re=R.texture.mipmaps;re&&re.length>0?be(w.__webglFramebuffer[0],R,0):be(w.__webglFramebuffer,R,0)}else if(Y){w.__webglDepthbuffer=[];for(let re=0;re<6;re++)if(n.bindFramebuffer(t.FRAMEBUFFER,w.__webglFramebuffer[re]),w.__webglDepthbuffer[re]===void 0)w.__webglDepthbuffer[re]=t.createRenderbuffer(),xe(w.__webglDepthbuffer[re],R,!1);else{const de=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,oe=w.__webglDepthbuffer[re];t.bindRenderbuffer(t.RENDERBUFFER,oe),t.framebufferRenderbuffer(t.FRAMEBUFFER,de,t.RENDERBUFFER,oe)}}else{const re=R.texture.mipmaps;if(re&&re.length>0?n.bindFramebuffer(t.FRAMEBUFFER,w.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=t.createRenderbuffer(),xe(w.__webglDepthbuffer,R,!1);else{const de=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,oe=w.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,oe),t.framebufferRenderbuffer(t.FRAMEBUFFER,de,t.RENDERBUFFER,oe)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function H(R,w,Y){const re=i.get(R);w!==void 0&&le(re.__webglFramebuffer,R,R.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),Y!==void 0&&Ce(R)}function X(R){const w=R.texture,Y=i.get(R),re=i.get(w);R.addEventListener("dispose",z);const de=R.textures,oe=R.isWebGLCubeRenderTarget===!0,Ie=de.length>1;if(Ie||(re.__webglTexture===void 0&&(re.__webglTexture=t.createTexture()),re.__version=w.version,s.memory.textures++),oe){Y.__webglFramebuffer=[];for(let Me=0;Me<6;Me++)if(w.mipmaps&&w.mipmaps.length>0){Y.__webglFramebuffer[Me]=[];for(let ze=0;ze<w.mipmaps.length;ze++)Y.__webglFramebuffer[Me][ze]=t.createFramebuffer()}else Y.__webglFramebuffer[Me]=t.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){Y.__webglFramebuffer=[];for(let Me=0;Me<w.mipmaps.length;Me++)Y.__webglFramebuffer[Me]=t.createFramebuffer()}else Y.__webglFramebuffer=t.createFramebuffer();if(Ie)for(let Me=0,ze=de.length;Me<ze;Me++){const We=i.get(de[Me]);We.__webglTexture===void 0&&(We.__webglTexture=t.createTexture(),s.memory.textures++)}if(R.samples>0&&te(R)===!1){Y.__webglMultisampledFramebuffer=t.createFramebuffer(),Y.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,Y.__webglMultisampledFramebuffer);for(let Me=0;Me<de.length;Me++){const ze=de[Me];Y.__webglColorRenderbuffer[Me]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,Y.__webglColorRenderbuffer[Me]);const We=o.convert(ze.format,ze.colorSpace),we=o.convert(ze.type),Te=S(ze.internalFormat,We,we,ze.colorSpace,R.isXRRenderTarget===!0),Pe=T(R);t.renderbufferStorageMultisample(t.RENDERBUFFER,Pe,Te,R.width,R.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Me,t.RENDERBUFFER,Y.__webglColorRenderbuffer[Me])}t.bindRenderbuffer(t.RENDERBUFFER,null),R.depthBuffer&&(Y.__webglDepthRenderbuffer=t.createRenderbuffer(),xe(Y.__webglDepthRenderbuffer,R,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(oe){n.bindTexture(t.TEXTURE_CUBE_MAP,re.__webglTexture),K(t.TEXTURE_CUBE_MAP,w);for(let Me=0;Me<6;Me++)if(w.mipmaps&&w.mipmaps.length>0)for(let ze=0;ze<w.mipmaps.length;ze++)le(Y.__webglFramebuffer[Me][ze],R,w,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+Me,ze);else le(Y.__webglFramebuffer[Me],R,w,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0);m(w)&&p(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Ie){for(let Me=0,ze=de.length;Me<ze;Me++){const We=de[Me],we=i.get(We);let Te=t.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(Te=R.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(Te,we.__webglTexture),K(Te,We),le(Y.__webglFramebuffer,R,We,t.COLOR_ATTACHMENT0+Me,Te,0),m(We)&&p(Te)}n.unbindTexture()}else{let Me=t.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(Me=R.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(Me,re.__webglTexture),K(Me,w),w.mipmaps&&w.mipmaps.length>0)for(let ze=0;ze<w.mipmaps.length;ze++)le(Y.__webglFramebuffer[ze],R,w,t.COLOR_ATTACHMENT0,Me,ze);else le(Y.__webglFramebuffer,R,w,t.COLOR_ATTACHMENT0,Me,0);m(w)&&p(Me),n.unbindTexture()}R.depthBuffer&&Ce(R)}function L(R){const w=R.textures;for(let Y=0,re=w.length;Y<re;Y++){const de=w[Y];if(m(de)){const oe=b(R),Ie=i.get(de).__webglTexture;n.bindTexture(oe,Ie),p(oe),n.unbindTexture()}}}const F=[],U=[];function G(R){if(R.samples>0){if(te(R)===!1){const w=R.textures,Y=R.width,re=R.height;let de=t.COLOR_BUFFER_BIT;const oe=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Ie=i.get(R),Me=w.length>1;if(Me)for(let We=0;We<w.length;We++)n.bindFramebuffer(t.FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+We,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Ie.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+We,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Ie.__webglMultisampledFramebuffer);const ze=R.texture.mipmaps;ze&&ze.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Ie.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Ie.__webglFramebuffer);for(let We=0;We<w.length;We++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(de|=t.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(de|=t.STENCIL_BUFFER_BIT)),Me){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Ie.__webglColorRenderbuffer[We]);const we=i.get(w[We]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,we,0)}t.blitFramebuffer(0,0,Y,re,0,0,Y,re,de,t.NEAREST),l===!0&&(F.length=0,U.length=0,F.push(t.COLOR_ATTACHMENT0+We),R.depthBuffer&&R.resolveDepthBuffer===!1&&(F.push(oe),U.push(oe),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,U)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,F))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),Me)for(let We=0;We<w.length;We++){n.bindFramebuffer(t.FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+We,t.RENDERBUFFER,Ie.__webglColorRenderbuffer[We]);const we=i.get(w[We]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Ie.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+We,t.TEXTURE_2D,we,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Ie.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const w=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[w])}}}function T(R){return Math.min(r.maxSamples,R.samples)}function te(R){const w=i.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function Q(R){const w=s.render.frame;c.get(R)!==w&&(c.set(R,w),R.update())}function J(R,w){const Y=R.colorSpace,re=R.format,de=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||Y!==Ir&&Y!==Sr&&(ht.getTransfer(Y)===Mt?(re!==pn||de!==fn)&&nt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):gt("WebGLTextures: Unsupported texture color space:",Y)),w}function ie(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(u.width=R.naturalWidth||R.width,u.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(u.width=R.displayWidth,u.height=R.displayHeight):(u.width=R.width,u.height=R.height),u}this.allocateTextureUnit=B,this.resetTextureUnits=P,this.setTexture2D=A,this.setTexture2DArray=E,this.setTexture3D=I,this.setTextureCube=V,this.rebindTextures=H,this.setupRenderTarget=X,this.updateRenderTargetMipmap=L,this.updateMultisampleRenderTarget=G,this.setupDepthRenderbuffer=Ce,this.setupFrameBufferTexture=le,this.useMultisampledRTT=te,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function sA(t,e){function n(i,r=Sr){let o;const s=ht.getTransfer(r);if(i===fn)return t.UNSIGNED_BYTE;if(i===ih)return t.UNSIGNED_SHORT_4_4_4_4;if(i===rh)return t.UNSIGNED_SHORT_5_5_5_1;if(i===lv)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===uv)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===sv)return t.BYTE;if(i===av)return t.SHORT;if(i===Ks)return t.UNSIGNED_SHORT;if(i===nh)return t.INT;if(i===yi)return t.UNSIGNED_INT;if(i===ci)return t.FLOAT;if(i===ji)return t.HALF_FLOAT;if(i===cv)return t.ALPHA;if(i===fv)return t.RGB;if(i===pn)return t.RGBA;if(i===Ji)return t.DEPTH_COMPONENT;if(i===Jr)return t.DEPTH_STENCIL;if(i===dv)return t.RED;if(i===oh)return t.RED_INTEGER;if(i===Jo)return t.RG;if(i===sh)return t.RG_INTEGER;if(i===ah)return t.RGBA_INTEGER;if(i===_l||i===yl||i===xl||i===bl)if(s===Mt)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(i===_l)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===yl)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===xl)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===bl)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(i===_l)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===yl)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===xl)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===bl)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Cf||i===Rf||i===If||i===Pf)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(i===Cf)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Rf)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===If)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Pf)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Nf||i===Df||i===Lf||i===Ff||i===Uf||i===Of||i===Bf)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(i===Nf||i===Df)return s===Mt?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(i===Lf)return s===Mt?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC;if(i===Ff)return o.COMPRESSED_R11_EAC;if(i===Uf)return o.COMPRESSED_SIGNED_R11_EAC;if(i===Of)return o.COMPRESSED_RG11_EAC;if(i===Bf)return o.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===kf||i===zf||i===Vf||i===Hf||i===$f||i===Gf||i===Wf||i===Xf||i===Yf||i===qf||i===Kf||i===Zf||i===jf||i===Jf)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(i===kf)return s===Mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===zf)return s===Mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Vf)return s===Mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Hf)return s===Mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===$f)return s===Mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Gf)return s===Mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Wf)return s===Mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Xf)return s===Mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Yf)return s===Mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===qf)return s===Mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Kf)return s===Mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Zf)return s===Mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===jf)return s===Mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Jf)return s===Mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Qf||i===ed||i===td)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(i===Qf)return s===Mt?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===ed)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===td)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===nd||i===id||i===rd||i===od)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(i===nd)return o.COMPRESSED_RED_RGTC1_EXT;if(i===id)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===rd)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===od)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Zs?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const aA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,lA=`
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

}`;class uA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const i=new Sv(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new Zn({vertexShader:aA,fragmentShader:lA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new xi(new ya(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class cA extends as{constructor(e,n){super();const i=this;let r=null,o=1,s=null,a="local-floor",l=1,u=null,c=null,f=null,d=null,h=null,g=null;const _=typeof XRWebGLBinding<"u",m=new uA,p={},b=n.getContextAttributes();let S=null,x=null;const D=[],O=[],z=new Et;let y=null;const M=new Hn;M.viewport=new zt;const N=new Hn;N.viewport=new zt;const C=[M,N],P=new SS;let B=null,v=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let ne=D[Z];return ne===void 0&&(ne=new _c,D[Z]=ne),ne.getTargetRaySpace()},this.getControllerGrip=function(Z){let ne=D[Z];return ne===void 0&&(ne=new _c,D[Z]=ne),ne.getGripSpace()},this.getHand=function(Z){let ne=D[Z];return ne===void 0&&(ne=new _c,D[Z]=ne),ne.getHandSpace()};function A(Z){const ne=O.indexOf(Z.inputSource);if(ne===-1)return;const le=D[ne];le!==void 0&&(le.update(Z.inputSource,Z.frame,u||s),le.dispatchEvent({type:Z.type,data:Z.inputSource}))}function E(){r.removeEventListener("select",A),r.removeEventListener("selectstart",A),r.removeEventListener("selectend",A),r.removeEventListener("squeeze",A),r.removeEventListener("squeezestart",A),r.removeEventListener("squeezeend",A),r.removeEventListener("end",E),r.removeEventListener("inputsourceschange",I);for(let Z=0;Z<D.length;Z++){const ne=O[Z];ne!==null&&(O[Z]=null,D[Z].disconnect(ne))}B=null,v=null,m.reset();for(const Z in p)delete p[Z];e.setRenderTarget(S),h=null,d=null,f=null,r=null,x=null,pe.stop(),i.isPresenting=!1,e.setPixelRatio(y),e.setSize(z.width,z.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){o=Z,i.isPresenting===!0&&nt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){a=Z,i.isPresenting===!0&&nt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||s},this.setReferenceSpace=function(Z){u=Z},this.getBaseLayer=function(){return d!==null?d:h},this.getBinding=function(){return f===null&&_&&(f=new XRWebGLBinding(r,n)),f},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(Z){if(r=Z,r!==null){if(S=e.getRenderTarget(),r.addEventListener("select",A),r.addEventListener("selectstart",A),r.addEventListener("selectend",A),r.addEventListener("squeeze",A),r.addEventListener("squeezestart",A),r.addEventListener("squeezeend",A),r.addEventListener("end",E),r.addEventListener("inputsourceschange",I),b.xrCompatible!==!0&&await n.makeXRCompatible(),y=e.getPixelRatio(),e.getSize(z),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let le=null,xe=null,be=null;b.depth&&(be=b.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,le=b.stencil?Jr:Ji,xe=b.stencil?Zs:yi);const Ce={colorFormat:n.RGBA8,depthFormat:be,scaleFactor:o};f=this.getBinding(),d=f.createProjectionLayer(Ce),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),x=new _n(d.textureWidth,d.textureHeight,{format:pn,type:fn,depthTexture:new js(d.textureWidth,d.textureHeight,xe,void 0,void 0,void 0,void 0,void 0,void 0,le),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const le={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:o};h=new XRWebGLLayer(r,n,le),r.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),x=new _n(h.framebufferWidth,h.framebufferHeight,{format:pn,type:fn,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),u=null,s=await r.requestReferenceSpace(a),pe.setContext(r),pe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function I(Z){for(let ne=0;ne<Z.removed.length;ne++){const le=Z.removed[ne],xe=O.indexOf(le);xe>=0&&(O[xe]=null,D[xe].disconnect(le))}for(let ne=0;ne<Z.added.length;ne++){const le=Z.added[ne];let xe=O.indexOf(le);if(xe===-1){for(let Ce=0;Ce<D.length;Ce++)if(Ce>=O.length){O.push(le),xe=Ce;break}else if(O[Ce]===null){O[Ce]=le,xe=Ce;break}if(xe===-1)break}const be=D[xe];be&&be.connect(le)}}const V=new ce,W=new ce;function q(Z,ne,le){V.setFromMatrixPosition(ne.matrixWorld),W.setFromMatrixPosition(le.matrixWorld);const xe=V.distanceTo(W),be=ne.projectionMatrix.elements,Ce=le.projectionMatrix.elements,H=be[14]/(be[10]-1),X=be[14]/(be[10]+1),L=(be[9]+1)/be[5],F=(be[9]-1)/be[5],U=(be[8]-1)/be[0],G=(Ce[8]+1)/Ce[0],T=H*U,te=H*G,Q=xe/(-U+G),J=Q*-U;if(ne.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(J),Z.translateZ(Q),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),be[10]===-1)Z.projectionMatrix.copy(ne.projectionMatrix),Z.projectionMatrixInverse.copy(ne.projectionMatrixInverse);else{const ie=H+Q,R=X+Q,w=T-J,Y=te+(xe-J),re=L*X/R*ie,de=F*X/R*ie;Z.projectionMatrix.makePerspective(w,Y,re,de,ie,R),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function $(Z,ne){ne===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(ne.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(r===null)return;let ne=Z.near,le=Z.far;m.texture!==null&&(m.depthNear>0&&(ne=m.depthNear),m.depthFar>0&&(le=m.depthFar)),P.near=N.near=M.near=ne,P.far=N.far=M.far=le,(B!==P.near||v!==P.far)&&(r.updateRenderState({depthNear:P.near,depthFar:P.far}),B=P.near,v=P.far),P.layers.mask=Z.layers.mask|6,M.layers.mask=P.layers.mask&-5,N.layers.mask=P.layers.mask&-3;const xe=Z.parent,be=P.cameras;$(P,xe);for(let Ce=0;Ce<be.length;Ce++)$(be[Ce],xe);be.length===2?q(P,M,N):P.projectionMatrix.copy(M.projectionMatrix),K(Z,P,xe)};function K(Z,ne,le){le===null?Z.matrix.copy(ne.matrixWorld):(Z.matrix.copy(le.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(ne.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(ne.projectionMatrix),Z.projectionMatrixInverse.copy(ne.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=sd*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return P},this.getFoveation=function(){if(!(d===null&&h===null))return l},this.setFoveation=function(Z){l=Z,d!==null&&(d.fixedFoveation=Z),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=Z)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(P)},this.getCameraTexture=function(Z){return p[Z]};let ae=null;function ve(Z,ne){if(c=ne.getViewerPose(u||s),g=ne,c!==null){const le=c.views;h!==null&&(e.setRenderTargetFramebuffer(x,h.framebuffer),e.setRenderTarget(x));let xe=!1;le.length!==P.cameras.length&&(P.cameras.length=0,xe=!0);for(let X=0;X<le.length;X++){const L=le[X];let F=null;if(h!==null)F=h.getViewport(L);else{const G=f.getViewSubImage(d,L);F=G.viewport,X===0&&(e.setRenderTargetTextures(x,G.colorTexture,G.depthStencilTexture),e.setRenderTarget(x))}let U=C[X];U===void 0&&(U=new Hn,U.layers.enable(X),U.viewport=new zt,C[X]=U),U.matrix.fromArray(L.transform.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale),U.projectionMatrix.fromArray(L.projectionMatrix),U.projectionMatrixInverse.copy(U.projectionMatrix).invert(),U.viewport.set(F.x,F.y,F.width,F.height),X===0&&(P.matrix.copy(U.matrix),P.matrix.decompose(P.position,P.quaternion,P.scale)),xe===!0&&P.cameras.push(U)}const be=r.enabledFeatures;if(be&&be.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&_){f=i.getBinding();const X=f.getDepthInformation(le[0]);X&&X.isValid&&X.texture&&m.init(X,r.renderState)}if(be&&be.includes("camera-access")&&_){e.state.unbindTexture(),f=i.getBinding();for(let X=0;X<le.length;X++){const L=le[X].camera;if(L){let F=p[L];F||(F=new Sv,p[L]=F);const U=f.getCameraImage(L);F.sourceTexture=U}}}}for(let le=0;le<D.length;le++){const xe=O[le],be=D[le];xe!==null&&be!==void 0&&be.update(xe,ne,u||s)}ae&&ae(Z,ne),ne.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ne}),g=null}const pe=new Ev;pe.setAnimationLoop(ve),this.setAnimationLoop=function(Z){ae=Z},this.dispose=function(){}}}const Hr=new Qi,fA=new Gt;function dA(t,e){function n(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,Mv(t)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,b,S,x){p.isMeshBasicMaterial?o(m,p):p.isMeshLambertMaterial?(o(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(o(m,p),f(m,p)):p.isMeshPhongMaterial?(o(m,p),c(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(o(m,p),d(m,p),p.isMeshPhysicalMaterial&&h(m,p,x)):p.isMeshMatcapMaterial?(o(m,p),g(m,p)):p.isMeshDepthMaterial?o(m,p):p.isMeshDistanceMaterial?(o(m,p),_(m,p)):p.isMeshNormalMaterial?o(m,p):p.isLineBasicMaterial?(s(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,b,S):p.isSpriteMaterial?u(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function o(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,n(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,n(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,n(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===bn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,n(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===bn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,n(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,n(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,n(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const b=e.get(p),S=b.envMap,x=b.envMapRotation;S&&(m.envMap.value=S,Hr.copy(x),Hr.x*=-1,Hr.y*=-1,Hr.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Hr.y*=-1,Hr.z*=-1),m.envMapRotation.value.setFromMatrix4(fA.makeRotationFromEuler(Hr)),m.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,n(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,n(p.aoMap,m.aoMapTransform))}function s(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,n(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,b,S){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*b,m.scale.value=S*.5,p.map&&(m.map.value=p.map,n(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,n(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,n(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,n(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function f(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,n(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,n(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function h(m,p,b){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,n(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,n(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,n(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,n(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,n(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===bn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,n(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,n(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,n(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,n(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,n(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,n(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,n(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const b=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(b.matrixWorld),m.nearDistance.value=b.shadow.camera.near,m.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function hA(t,e,n,i){let r={},o={},s=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,S){const x=S.program;i.uniformBlockBinding(b,x)}function u(b,S){let x=r[b.id];x===void 0&&(g(b),x=c(b),r[b.id]=x,b.addEventListener("dispose",m));const D=S.program;i.updateUBOMapping(b,D);const O=e.render.frame;o[b.id]!==O&&(d(b),o[b.id]=O)}function c(b){const S=f();b.__bindingPointIndex=S;const x=t.createBuffer(),D=b.__size,O=b.usage;return t.bindBuffer(t.UNIFORM_BUFFER,x),t.bufferData(t.UNIFORM_BUFFER,D,O),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,S,x),x}function f(){for(let b=0;b<a;b++)if(s.indexOf(b)===-1)return s.push(b),b;return gt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(b){const S=r[b.id],x=b.uniforms,D=b.__cache;t.bindBuffer(t.UNIFORM_BUFFER,S);for(let O=0,z=x.length;O<z;O++){const y=Array.isArray(x[O])?x[O]:[x[O]];for(let M=0,N=y.length;M<N;M++){const C=y[M];if(h(C,O,M,D)===!0){const P=C.__offset,B=Array.isArray(C.value)?C.value:[C.value];let v=0;for(let A=0;A<B.length;A++){const E=B[A],I=_(E);typeof E=="number"||typeof E=="boolean"?(C.__data[0]=E,t.bufferSubData(t.UNIFORM_BUFFER,P+v,C.__data)):E.isMatrix3?(C.__data[0]=E.elements[0],C.__data[1]=E.elements[1],C.__data[2]=E.elements[2],C.__data[3]=0,C.__data[4]=E.elements[3],C.__data[5]=E.elements[4],C.__data[6]=E.elements[5],C.__data[7]=0,C.__data[8]=E.elements[6],C.__data[9]=E.elements[7],C.__data[10]=E.elements[8],C.__data[11]=0):(E.toArray(C.__data,v),v+=I.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,P,C.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function h(b,S,x,D){const O=b.value,z=S+"_"+x;if(D[z]===void 0)return typeof O=="number"||typeof O=="boolean"?D[z]=O:D[z]=O.clone(),!0;{const y=D[z];if(typeof O=="number"||typeof O=="boolean"){if(y!==O)return D[z]=O,!0}else if(y.equals(O)===!1)return y.copy(O),!0}return!1}function g(b){const S=b.uniforms;let x=0;const D=16;for(let z=0,y=S.length;z<y;z++){const M=Array.isArray(S[z])?S[z]:[S[z]];for(let N=0,C=M.length;N<C;N++){const P=M[N],B=Array.isArray(P.value)?P.value:[P.value];for(let v=0,A=B.length;v<A;v++){const E=B[v],I=_(E),V=x%D,W=V%I.boundary,q=V+W;x+=W,q!==0&&D-q<I.storage&&(x+=D-q),P.__data=new Float32Array(I.storage/Float32Array.BYTES_PER_ELEMENT),P.__offset=x,x+=I.storage}}}const O=x%D;return O>0&&(x+=D-O),b.__size=x,b.__cache={},this}function _(b){const S={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(S.boundary=4,S.storage=4):b.isVector2?(S.boundary=8,S.storage=8):b.isVector3||b.isColor?(S.boundary=16,S.storage=12):b.isVector4?(S.boundary=16,S.storage=16):b.isMatrix3?(S.boundary=48,S.storage=48):b.isMatrix4?(S.boundary=64,S.storage=64):b.isTexture?nt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):nt("WebGLRenderer: Unsupported uniform value type.",b),S}function m(b){const S=b.target;S.removeEventListener("dispose",m);const x=s.indexOf(S.__bindingPointIndex);s.splice(x,1),t.deleteBuffer(r[S.id]),delete r[S.id],delete o[S.id]}function p(){for(const b in r)t.deleteBuffer(r[b]);s=[],r={},o={}}return{bind:l,update:u,dispose:p}}const pA=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let ni=null;function mA(){return ni===null&&(ni=new lS(pA,16,16,Jo,ji),ni.name="DFG_LUT",ni.minFilter=Ct,ni.magFilter=Ct,ni.wrapS=ki,ni.wrapT=ki,ni.generateMipmaps=!1,ni.needsUpdate=!0),ni}class gA{constructor(e={}){const{canvas:n=B1(),context:i=null,depth:r=!0,stencil:o=!1,alpha:s=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:d=!1,outputBufferType:h=fn}=e;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=s;const _=h,m=new Set([ah,sh,oh]),p=new Set([fn,yi,Ks,Zs,ih,rh]),b=new Uint32Array(4),S=new Int32Array(4);let x=null,D=null;const O=[],z=[];let y=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=pi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const M=this;let N=!1;this._outputColorSpace=Nn;let C=0,P=0,B=null,v=-1,A=null;const E=new zt,I=new zt;let V=null;const W=new wt(0);let q=0,$=n.width,K=n.height,ae=1,ve=null,pe=null;const Z=new zt(0,0,$,K),ne=new zt(0,0,$,K);let le=!1;const xe=new xv;let be=!1,Ce=!1;const H=new Gt,X=new ce,L=new zt,F={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let U=!1;function G(){return B===null?ae:1}let T=i;function te(k,ee){return n.getContext(k,ee)}try{const k={alpha:!0,depth:r,stencil:o,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:c,failIfMajorPerformanceCaveat:f};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${th}`),n.addEventListener("webglcontextlost",$e,!1),n.addEventListener("webglcontextrestored",tt,!1),n.addEventListener("webglcontextcreationerror",Lt,!1),T===null){const ee="webgl2";if(T=te(ee,k),T===null)throw te(ee)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(k){throw gt("WebGLRenderer: "+k.message),k}let Q,J,ie,R,w,Y,re,de,oe,Ie,Me,ze,We,we,Te,Pe,Ue,Oe,rt,j,Re,Ae,Ve;function Ee(){Q=new gE(T),Q.init(),Re=new sA(T,Q),J=new lE(T,Q,e,Re),ie=new rA(T,Q),J.reversedDepthBuffer&&d&&ie.buffers.depth.setReversed(!0),R=new yE(T),w=new GT,Y=new oA(T,Q,ie,w,J,Re,R),re=new mE(M),de=new wS(T),Ae=new sE(T,de),oe=new vE(T,de,R,Ae),Ie=new bE(T,oe,de,Ae,R),Oe=new xE(T,J,Y),Te=new uE(w),Me=new $T(M,re,Q,J,Ae,Te),ze=new dA(M,w),We=new XT,we=new JT(Q),Ue=new oE(M,re,ie,Ie,g,l),Pe=new iA(M,Ie,J),Ve=new hA(T,R,J,ie),rt=new aE(T,Q,R),j=new _E(T,Q,R),R.programs=Me.programs,M.capabilities=J,M.extensions=Q,M.properties=w,M.renderLists=We,M.shadowMap=Pe,M.state=ie,M.info=R}Ee(),_!==fn&&(y=new ME(_,n.width,n.height,r,o));const _e=new cA(M,T);this.xr=_e,this.getContext=function(){return T},this.getContextAttributes=function(){return T.getContextAttributes()},this.forceContextLoss=function(){const k=Q.get("WEBGL_lose_context");k&&k.loseContext()},this.forceContextRestore=function(){const k=Q.get("WEBGL_lose_context");k&&k.restoreContext()},this.getPixelRatio=function(){return ae},this.setPixelRatio=function(k){k!==void 0&&(ae=k,this.setSize($,K,!1))},this.getSize=function(k){return k.set($,K)},this.setSize=function(k,ee,he=!0){if(_e.isPresenting){nt("WebGLRenderer: Can't change size while VR device is presenting.");return}$=k,K=ee,n.width=Math.floor(k*ae),n.height=Math.floor(ee*ae),he===!0&&(n.style.width=k+"px",n.style.height=ee+"px"),y!==null&&y.setSize(n.width,n.height),this.setViewport(0,0,k,ee)},this.getDrawingBufferSize=function(k){return k.set($*ae,K*ae).floor()},this.setDrawingBufferSize=function(k,ee,he){$=k,K=ee,ae=he,n.width=Math.floor(k*he),n.height=Math.floor(ee*he),this.setViewport(0,0,k,ee)},this.setEffects=function(k){if(_===fn){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(k){for(let ee=0;ee<k.length;ee++)if(k[ee].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}y.setEffects(k||[])},this.getCurrentViewport=function(k){return k.copy(E)},this.getViewport=function(k){return k.copy(Z)},this.setViewport=function(k,ee,he,ue){k.isVector4?Z.set(k.x,k.y,k.z,k.w):Z.set(k,ee,he,ue),ie.viewport(E.copy(Z).multiplyScalar(ae).round())},this.getScissor=function(k){return k.copy(ne)},this.setScissor=function(k,ee,he,ue){k.isVector4?ne.set(k.x,k.y,k.z,k.w):ne.set(k,ee,he,ue),ie.scissor(I.copy(ne).multiplyScalar(ae).round())},this.getScissorTest=function(){return le},this.setScissorTest=function(k){ie.setScissorTest(le=k)},this.setOpaqueSort=function(k){ve=k},this.setTransparentSort=function(k){pe=k},this.getClearColor=function(k){return k.copy(Ue.getClearColor())},this.setClearColor=function(){Ue.setClearColor(...arguments)},this.getClearAlpha=function(){return Ue.getClearAlpha()},this.setClearAlpha=function(){Ue.setClearAlpha(...arguments)},this.clear=function(k=!0,ee=!0,he=!0){let ue=0;if(k){let se=!1;if(B!==null){const Le=B.texture.format;se=m.has(Le)}if(se){const Le=B.texture.type,ke=p.has(Le),Fe=Ue.getClearColor(),Ge=Ue.getClearAlpha(),Ye=Fe.r,ot=Fe.g,lt=Fe.b;ke?(b[0]=Ye,b[1]=ot,b[2]=lt,b[3]=Ge,T.clearBufferuiv(T.COLOR,0,b)):(S[0]=Ye,S[1]=ot,S[2]=lt,S[3]=Ge,T.clearBufferiv(T.COLOR,0,S))}else ue|=T.COLOR_BUFFER_BIT}ee&&(ue|=T.DEPTH_BUFFER_BIT),he&&(ue|=T.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ue!==0&&T.clear(ue)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",$e,!1),n.removeEventListener("webglcontextrestored",tt,!1),n.removeEventListener("webglcontextcreationerror",Lt,!1),Ue.dispose(),We.dispose(),we.dispose(),w.dispose(),re.dispose(),Ie.dispose(),Ae.dispose(),Ve.dispose(),Me.dispose(),_e.dispose(),_e.removeEventListener("sessionstart",Bh),_e.removeEventListener("sessionend",kh),Dr.stop()};function $e(k){k.preventDefault(),Pp("WebGLRenderer: Context Lost."),N=!0}function tt(){Pp("WebGLRenderer: Context Restored."),N=!1;const k=R.autoReset,ee=Pe.enabled,he=Pe.autoUpdate,ue=Pe.needsUpdate,se=Pe.type;Ee(),R.autoReset=k,Pe.enabled=ee,Pe.autoUpdate=he,Pe.needsUpdate=ue,Pe.type=se}function Lt(k){gt("WebGLRenderer: A WebGL context could not be created. Reason: ",k.statusMessage)}function St(k){const ee=k.target;ee.removeEventListener("dispose",St),Mi(ee)}function Mi(k){wi(k),w.remove(k)}function wi(k){const ee=w.get(k).programs;ee!==void 0&&(ee.forEach(function(he){Me.releaseProgram(he)}),k.isShaderMaterial&&Me.releaseShaderCache(k))}this.renderBufferDirect=function(k,ee,he,ue,se,Le){ee===null&&(ee=F);const ke=se.isMesh&&se.matrixWorld.determinant()<0,Fe=wy(k,ee,he,ue,se);ie.setMaterial(ue,ke);let Ge=he.index,Ye=1;if(ue.wireframe===!0){if(Ge=oe.getWireframeAttribute(he),Ge===void 0)return;Ye=2}const ot=he.drawRange,lt=he.attributes.position;let Ke=ot.start*Ye,Tt=(ot.start+ot.count)*Ye;Le!==null&&(Ke=Math.max(Ke,Le.start*Ye),Tt=Math.min(Tt,(Le.start+Le.count)*Ye)),Ge!==null?(Ke=Math.max(Ke,0),Tt=Math.min(Tt,Ge.count)):lt!=null&&(Ke=Math.max(Ke,0),Tt=Math.min(Tt,lt.count));const kt=Tt-Ke;if(kt<0||kt===1/0)return;Ae.setup(se,ue,Fe,he,Ge);let Ot,At=rt;if(Ge!==null&&(Ot=de.get(Ge),At=j,At.setIndex(Ot)),se.isMesh)ue.wireframe===!0?(ie.setLineWidth(ue.wireframeLinewidth*G()),At.setMode(T.LINES)):At.setMode(T.TRIANGLES);else if(se.isLine){let tn=ue.linewidth;tn===void 0&&(tn=1),ie.setLineWidth(tn*G()),se.isLineSegments?At.setMode(T.LINES):se.isLineLoop?At.setMode(T.LINE_LOOP):At.setMode(T.LINE_STRIP)}else se.isPoints?At.setMode(T.POINTS):se.isSprite&&At.setMode(T.TRIANGLES);if(se.isBatchedMesh)if(se._multiDrawInstances!==null)Yl("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),At.renderMultiDrawInstances(se._multiDrawStarts,se._multiDrawCounts,se._multiDrawCount,se._multiDrawInstances);else if(Q.get("WEBGL_multi_draw"))At.renderMultiDraw(se._multiDrawStarts,se._multiDrawCounts,se._multiDrawCount);else{const tn=se._multiDrawStarts,Xe=se._multiDrawCounts,Sn=se._multiDrawCount,pt=Ge?de.get(Ge).bytesPerElement:1,Bn=w.get(ue).currentProgram.getUniforms();for(let Qn=0;Qn<Sn;Qn++)Bn.setValue(T,"_gl_DrawID",Qn),At.render(tn[Qn]/pt,Xe[Qn])}else if(se.isInstancedMesh)At.renderInstances(Ke,kt,se.count);else if(he.isInstancedBufferGeometry){const tn=he._maxInstanceCount!==void 0?he._maxInstanceCount:1/0,Xe=Math.min(he.instanceCount,tn);At.renderInstances(Ke,kt,Xe)}else At.render(Ke,kt)};function Oh(k,ee,he){k.transparent===!0&&k.side===Oi&&k.forceSinglePass===!1?(k.side=bn,k.needsUpdate=!0,Ta(k,ee,he),k.side=Rr,k.needsUpdate=!0,Ta(k,ee,he),k.side=Oi):Ta(k,ee,he)}this.compile=function(k,ee,he=null){he===null&&(he=k),D=we.get(he),D.init(ee),z.push(D),he.traverseVisible(function(se){se.isLight&&se.layers.test(ee.layers)&&(D.pushLight(se),se.castShadow&&D.pushShadow(se))}),k!==he&&k.traverseVisible(function(se){se.isLight&&se.layers.test(ee.layers)&&(D.pushLight(se),se.castShadow&&D.pushShadow(se))}),D.setupLights();const ue=new Set;return k.traverse(function(se){if(!(se.isMesh||se.isPoints||se.isLine||se.isSprite))return;const Le=se.material;if(Le)if(Array.isArray(Le))for(let ke=0;ke<Le.length;ke++){const Fe=Le[ke];Oh(Fe,he,se),ue.add(Fe)}else Oh(Le,he,se),ue.add(Le)}),D=z.pop(),ue},this.compileAsync=function(k,ee,he=null){const ue=this.compile(k,ee,he);return new Promise(se=>{function Le(){if(ue.forEach(function(ke){w.get(ke).currentProgram.isReady()&&ue.delete(ke)}),ue.size===0){se(k);return}setTimeout(Le,10)}Q.get("KHR_parallel_shader_compile")!==null?Le():setTimeout(Le,10)})};let qu=null;function My(k){qu&&qu(k)}function Bh(){Dr.stop()}function kh(){Dr.start()}const Dr=new Ev;Dr.setAnimationLoop(My),typeof self<"u"&&Dr.setContext(self),this.setAnimationLoop=function(k){qu=k,_e.setAnimationLoop(k),k===null?Dr.stop():Dr.start()},_e.addEventListener("sessionstart",Bh),_e.addEventListener("sessionend",kh),this.render=function(k,ee){if(ee!==void 0&&ee.isCamera!==!0){gt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;const he=_e.enabled===!0&&_e.isPresenting===!0,ue=y!==null&&(B===null||he)&&y.begin(M,B);if(k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),ee.parent===null&&ee.matrixWorldAutoUpdate===!0&&ee.updateMatrixWorld(),_e.enabled===!0&&_e.isPresenting===!0&&(y===null||y.isCompositing()===!1)&&(_e.cameraAutoUpdate===!0&&_e.updateCamera(ee),ee=_e.getCamera()),k.isScene===!0&&k.onBeforeRender(M,k,ee,B),D=we.get(k,z.length),D.init(ee),z.push(D),H.multiplyMatrices(ee.projectionMatrix,ee.matrixWorldInverse),xe.setFromProjectionMatrix(H,fi,ee.reversedDepth),Ce=this.localClippingEnabled,be=Te.init(this.clippingPlanes,Ce),x=We.get(k,O.length),x.init(),O.push(x),_e.enabled===!0&&_e.isPresenting===!0){const ke=M.xr.getDepthSensingMesh();ke!==null&&Ku(ke,ee,-1/0,M.sortObjects)}Ku(k,ee,0,M.sortObjects),x.finish(),M.sortObjects===!0&&x.sort(ve,pe),U=_e.enabled===!1||_e.isPresenting===!1||_e.hasDepthSensing()===!1,U&&Ue.addToRenderList(x,k),this.info.render.frame++,be===!0&&Te.beginShadows();const se=D.state.shadowsArray;if(Pe.render(se,k,ee),be===!0&&Te.endShadows(),this.info.autoReset===!0&&this.info.reset(),(ue&&y.hasRenderPass())===!1){const ke=x.opaque,Fe=x.transmissive;if(D.setupLights(),ee.isArrayCamera){const Ge=ee.cameras;if(Fe.length>0)for(let Ye=0,ot=Ge.length;Ye<ot;Ye++){const lt=Ge[Ye];Vh(ke,Fe,k,lt)}U&&Ue.render(k);for(let Ye=0,ot=Ge.length;Ye<ot;Ye++){const lt=Ge[Ye];zh(x,k,lt,lt.viewport)}}else Fe.length>0&&Vh(ke,Fe,k,ee),U&&Ue.render(k),zh(x,k,ee)}B!==null&&P===0&&(Y.updateMultisampleRenderTarget(B),Y.updateRenderTargetMipmap(B)),ue&&y.end(M),k.isScene===!0&&k.onAfterRender(M,k,ee),Ae.resetDefaultState(),v=-1,A=null,z.pop(),z.length>0?(D=z[z.length-1],be===!0&&Te.setGlobalState(M.clippingPlanes,D.state.camera)):D=null,O.pop(),O.length>0?x=O[O.length-1]:x=null};function Ku(k,ee,he,ue){if(k.visible===!1)return;if(k.layers.test(ee.layers)){if(k.isGroup)he=k.renderOrder;else if(k.isLOD)k.autoUpdate===!0&&k.update(ee);else if(k.isLight)D.pushLight(k),k.castShadow&&D.pushShadow(k);else if(k.isSprite){if(!k.frustumCulled||xe.intersectsSprite(k)){ue&&L.setFromMatrixPosition(k.matrixWorld).applyMatrix4(H);const ke=Ie.update(k),Fe=k.material;Fe.visible&&x.push(k,ke,Fe,he,L.z,null)}}else if((k.isMesh||k.isLine||k.isPoints)&&(!k.frustumCulled||xe.intersectsObject(k))){const ke=Ie.update(k),Fe=k.material;if(ue&&(k.boundingSphere!==void 0?(k.boundingSphere===null&&k.computeBoundingSphere(),L.copy(k.boundingSphere.center)):(ke.boundingSphere===null&&ke.computeBoundingSphere(),L.copy(ke.boundingSphere.center)),L.applyMatrix4(k.matrixWorld).applyMatrix4(H)),Array.isArray(Fe)){const Ge=ke.groups;for(let Ye=0,ot=Ge.length;Ye<ot;Ye++){const lt=Ge[Ye],Ke=Fe[lt.materialIndex];Ke&&Ke.visible&&x.push(k,ke,Ke,he,L.z,lt)}}else Fe.visible&&x.push(k,ke,Fe,he,L.z,null)}}const Le=k.children;for(let ke=0,Fe=Le.length;ke<Fe;ke++)Ku(Le[ke],ee,he,ue)}function zh(k,ee,he,ue){const{opaque:se,transmissive:Le,transparent:ke}=k;D.setupLightsView(he),be===!0&&Te.setGlobalState(M.clippingPlanes,he),ue&&ie.viewport(E.copy(ue)),se.length>0&&Ea(se,ee,he),Le.length>0&&Ea(Le,ee,he),ke.length>0&&Ea(ke,ee,he),ie.buffers.depth.setTest(!0),ie.buffers.depth.setMask(!0),ie.buffers.color.setMask(!0),ie.setPolygonOffset(!1)}function Vh(k,ee,he,ue){if((he.isScene===!0?he.overrideMaterial:null)!==null)return;if(D.state.transmissionRenderTarget[ue.id]===void 0){const Ke=Q.has("EXT_color_buffer_half_float")||Q.has("EXT_color_buffer_float");D.state.transmissionRenderTarget[ue.id]=new _n(1,1,{generateMipmaps:!0,type:Ke?ji:fn,minFilter:jr,samples:Math.max(4,J.samples),stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ht.workingColorSpace})}const Le=D.state.transmissionRenderTarget[ue.id],ke=ue.viewport||E;Le.setSize(ke.z*M.transmissionResolutionScale,ke.w*M.transmissionResolutionScale);const Fe=M.getRenderTarget(),Ge=M.getActiveCubeFace(),Ye=M.getActiveMipmapLevel();M.setRenderTarget(Le),M.getClearColor(W),q=M.getClearAlpha(),q<1&&M.setClearColor(16777215,.5),M.clear(),U&&Ue.render(he);const ot=M.toneMapping;M.toneMapping=pi;const lt=ue.viewport;if(ue.viewport!==void 0&&(ue.viewport=void 0),D.setupLightsView(ue),be===!0&&Te.setGlobalState(M.clippingPlanes,ue),Ea(k,he,ue),Y.updateMultisampleRenderTarget(Le),Y.updateRenderTargetMipmap(Le),Q.has("WEBGL_multisampled_render_to_texture")===!1){let Ke=!1;for(let Tt=0,kt=ee.length;Tt<kt;Tt++){const Ot=ee[Tt],{object:At,geometry:tn,material:Xe,group:Sn}=Ot;if(Xe.side===Oi&&At.layers.test(ue.layers)){const pt=Xe.side;Xe.side=bn,Xe.needsUpdate=!0,Hh(At,he,ue,tn,Xe,Sn),Xe.side=pt,Xe.needsUpdate=!0,Ke=!0}}Ke===!0&&(Y.updateMultisampleRenderTarget(Le),Y.updateRenderTargetMipmap(Le))}M.setRenderTarget(Fe,Ge,Ye),M.setClearColor(W,q),lt!==void 0&&(ue.viewport=lt),M.toneMapping=ot}function Ea(k,ee,he){const ue=ee.isScene===!0?ee.overrideMaterial:null;for(let se=0,Le=k.length;se<Le;se++){const ke=k[se],{object:Fe,geometry:Ge,group:Ye}=ke;let ot=ke.material;ot.allowOverride===!0&&ue!==null&&(ot=ue),Fe.layers.test(he.layers)&&Hh(Fe,ee,he,Ge,ot,Ye)}}function Hh(k,ee,he,ue,se,Le){k.onBeforeRender(M,ee,he,ue,se,Le),k.modelViewMatrix.multiplyMatrices(he.matrixWorldInverse,k.matrixWorld),k.normalMatrix.getNormalMatrix(k.modelViewMatrix),se.onBeforeRender(M,ee,he,ue,k,Le),se.transparent===!0&&se.side===Oi&&se.forceSinglePass===!1?(se.side=bn,se.needsUpdate=!0,M.renderBufferDirect(he,ee,ue,se,k,Le),se.side=Rr,se.needsUpdate=!0,M.renderBufferDirect(he,ee,ue,se,k,Le),se.side=Oi):M.renderBufferDirect(he,ee,ue,se,k,Le),k.onAfterRender(M,ee,he,ue,se,Le)}function Ta(k,ee,he){ee.isScene!==!0&&(ee=F);const ue=w.get(k),se=D.state.lights,Le=D.state.shadowsArray,ke=se.state.version,Fe=Me.getParameters(k,se.state,Le,ee,he),Ge=Me.getProgramCacheKey(Fe);let Ye=ue.programs;ue.environment=k.isMeshStandardMaterial||k.isMeshLambertMaterial||k.isMeshPhongMaterial?ee.environment:null,ue.fog=ee.fog;const ot=k.isMeshStandardMaterial||k.isMeshLambertMaterial&&!k.envMap||k.isMeshPhongMaterial&&!k.envMap;ue.envMap=re.get(k.envMap||ue.environment,ot),ue.envMapRotation=ue.environment!==null&&k.envMap===null?ee.environmentRotation:k.envMapRotation,Ye===void 0&&(k.addEventListener("dispose",St),Ye=new Map,ue.programs=Ye);let lt=Ye.get(Ge);if(lt!==void 0){if(ue.currentProgram===lt&&ue.lightsStateVersion===ke)return Gh(k,Fe),lt}else Fe.uniforms=Me.getUniforms(k),k.onBeforeCompile(Fe,M),lt=Me.acquireProgram(Fe,Ge),Ye.set(Ge,lt),ue.uniforms=Fe.uniforms;const Ke=ue.uniforms;return(!k.isShaderMaterial&&!k.isRawShaderMaterial||k.clipping===!0)&&(Ke.clippingPlanes=Te.uniform),Gh(k,Fe),ue.needsLights=Ty(k),ue.lightsStateVersion=ke,ue.needsLights&&(Ke.ambientLightColor.value=se.state.ambient,Ke.lightProbe.value=se.state.probe,Ke.directionalLights.value=se.state.directional,Ke.directionalLightShadows.value=se.state.directionalShadow,Ke.spotLights.value=se.state.spot,Ke.spotLightShadows.value=se.state.spotShadow,Ke.rectAreaLights.value=se.state.rectArea,Ke.ltc_1.value=se.state.rectAreaLTC1,Ke.ltc_2.value=se.state.rectAreaLTC2,Ke.pointLights.value=se.state.point,Ke.pointLightShadows.value=se.state.pointShadow,Ke.hemisphereLights.value=se.state.hemi,Ke.directionalShadowMatrix.value=se.state.directionalShadowMatrix,Ke.spotLightMatrix.value=se.state.spotLightMatrix,Ke.spotLightMap.value=se.state.spotLightMap,Ke.pointShadowMatrix.value=se.state.pointShadowMatrix),ue.currentProgram=lt,ue.uniformsList=null,lt}function $h(k){if(k.uniformsList===null){const ee=k.currentProgram.getUniforms();k.uniformsList=Sl.seqWithValue(ee.seq,k.uniforms)}return k.uniformsList}function Gh(k,ee){const he=w.get(k);he.outputColorSpace=ee.outputColorSpace,he.batching=ee.batching,he.batchingColor=ee.batchingColor,he.instancing=ee.instancing,he.instancingColor=ee.instancingColor,he.instancingMorph=ee.instancingMorph,he.skinning=ee.skinning,he.morphTargets=ee.morphTargets,he.morphNormals=ee.morphNormals,he.morphColors=ee.morphColors,he.morphTargetsCount=ee.morphTargetsCount,he.numClippingPlanes=ee.numClippingPlanes,he.numIntersection=ee.numClipIntersection,he.vertexAlphas=ee.vertexAlphas,he.vertexTangents=ee.vertexTangents,he.toneMapping=ee.toneMapping}function wy(k,ee,he,ue,se){ee.isScene!==!0&&(ee=F),Y.resetTextureUnits();const Le=ee.fog,ke=ue.isMeshStandardMaterial||ue.isMeshLambertMaterial||ue.isMeshPhongMaterial?ee.environment:null,Fe=B===null?M.outputColorSpace:B.isXRRenderTarget===!0?B.texture.colorSpace:Ir,Ge=ue.isMeshStandardMaterial||ue.isMeshLambertMaterial&&!ue.envMap||ue.isMeshPhongMaterial&&!ue.envMap,Ye=re.get(ue.envMap||ke,Ge),ot=ue.vertexColors===!0&&!!he.attributes.color&&he.attributes.color.itemSize===4,lt=!!he.attributes.tangent&&(!!ue.normalMap||ue.anisotropy>0),Ke=!!he.morphAttributes.position,Tt=!!he.morphAttributes.normal,kt=!!he.morphAttributes.color;let Ot=pi;ue.toneMapped&&(B===null||B.isXRRenderTarget===!0)&&(Ot=M.toneMapping);const At=he.morphAttributes.position||he.morphAttributes.normal||he.morphAttributes.color,tn=At!==void 0?At.length:0,Xe=w.get(ue),Sn=D.state.lights;if(be===!0&&(Ce===!0||k!==A)){const qt=k===A&&ue.id===v;Te.setState(ue,k,qt)}let pt=!1;ue.version===Xe.__version?(Xe.needsLights&&Xe.lightsStateVersion!==Sn.state.version||Xe.outputColorSpace!==Fe||se.isBatchedMesh&&Xe.batching===!1||!se.isBatchedMesh&&Xe.batching===!0||se.isBatchedMesh&&Xe.batchingColor===!0&&se.colorTexture===null||se.isBatchedMesh&&Xe.batchingColor===!1&&se.colorTexture!==null||se.isInstancedMesh&&Xe.instancing===!1||!se.isInstancedMesh&&Xe.instancing===!0||se.isSkinnedMesh&&Xe.skinning===!1||!se.isSkinnedMesh&&Xe.skinning===!0||se.isInstancedMesh&&Xe.instancingColor===!0&&se.instanceColor===null||se.isInstancedMesh&&Xe.instancingColor===!1&&se.instanceColor!==null||se.isInstancedMesh&&Xe.instancingMorph===!0&&se.morphTexture===null||se.isInstancedMesh&&Xe.instancingMorph===!1&&se.morphTexture!==null||Xe.envMap!==Ye||ue.fog===!0&&Xe.fog!==Le||Xe.numClippingPlanes!==void 0&&(Xe.numClippingPlanes!==Te.numPlanes||Xe.numIntersection!==Te.numIntersection)||Xe.vertexAlphas!==ot||Xe.vertexTangents!==lt||Xe.morphTargets!==Ke||Xe.morphNormals!==Tt||Xe.morphColors!==kt||Xe.toneMapping!==Ot||Xe.morphTargetsCount!==tn)&&(pt=!0):(pt=!0,Xe.__version=ue.version);let Bn=Xe.currentProgram;pt===!0&&(Bn=Ta(ue,ee,se));let Qn=!1,Lr=!1,mo=!1;const Pt=Bn.getUniforms(),Zt=Xe.uniforms;if(ie.useProgram(Bn.program)&&(Qn=!0,Lr=!0,mo=!0),ue.id!==v&&(v=ue.id,Lr=!0),Qn||A!==k){ie.buffers.depth.getReversed()&&k.reversedDepth!==!0&&(k._reversedDepth=!0,k.updateProjectionMatrix()),Pt.setValue(T,"projectionMatrix",k.projectionMatrix),Pt.setValue(T,"viewMatrix",k.matrixWorldInverse);const ar=Pt.map.cameraPosition;ar!==void 0&&ar.setValue(T,X.setFromMatrixPosition(k.matrixWorld)),J.logarithmicDepthBuffer&&Pt.setValue(T,"logDepthBufFC",2/(Math.log(k.far+1)/Math.LN2)),(ue.isMeshPhongMaterial||ue.isMeshToonMaterial||ue.isMeshLambertMaterial||ue.isMeshBasicMaterial||ue.isMeshStandardMaterial||ue.isShaderMaterial)&&Pt.setValue(T,"isOrthographic",k.isOrthographicCamera===!0),A!==k&&(A=k,Lr=!0,mo=!0)}if(Xe.needsLights&&(Sn.state.directionalShadowMap.length>0&&Pt.setValue(T,"directionalShadowMap",Sn.state.directionalShadowMap,Y),Sn.state.spotShadowMap.length>0&&Pt.setValue(T,"spotShadowMap",Sn.state.spotShadowMap,Y),Sn.state.pointShadowMap.length>0&&Pt.setValue(T,"pointShadowMap",Sn.state.pointShadowMap,Y)),se.isSkinnedMesh){Pt.setOptional(T,se,"bindMatrix"),Pt.setOptional(T,se,"bindMatrixInverse");const qt=se.skeleton;qt&&(qt.boneTexture===null&&qt.computeBoneTexture(),Pt.setValue(T,"boneTexture",qt.boneTexture,Y))}se.isBatchedMesh&&(Pt.setOptional(T,se,"batchingTexture"),Pt.setValue(T,"batchingTexture",se._matricesTexture,Y),Pt.setOptional(T,se,"batchingIdTexture"),Pt.setValue(T,"batchingIdTexture",se._indirectTexture,Y),Pt.setOptional(T,se,"batchingColorTexture"),se._colorsTexture!==null&&Pt.setValue(T,"batchingColorTexture",se._colorsTexture,Y));const sr=he.morphAttributes;if((sr.position!==void 0||sr.normal!==void 0||sr.color!==void 0)&&Oe.update(se,he,Bn),(Lr||Xe.receiveShadow!==se.receiveShadow)&&(Xe.receiveShadow=se.receiveShadow,Pt.setValue(T,"receiveShadow",se.receiveShadow)),(ue.isMeshStandardMaterial||ue.isMeshLambertMaterial||ue.isMeshPhongMaterial)&&ue.envMap===null&&ee.environment!==null&&(Zt.envMapIntensity.value=ee.environmentIntensity),Zt.dfgLUT!==void 0&&(Zt.dfgLUT.value=mA()),Lr&&(Pt.setValue(T,"toneMappingExposure",M.toneMappingExposure),Xe.needsLights&&Ey(Zt,mo),Le&&ue.fog===!0&&ze.refreshFogUniforms(Zt,Le),ze.refreshMaterialUniforms(Zt,ue,ae,K,D.state.transmissionRenderTarget[k.id]),Sl.upload(T,$h(Xe),Zt,Y)),ue.isShaderMaterial&&ue.uniformsNeedUpdate===!0&&(Sl.upload(T,$h(Xe),Zt,Y),ue.uniformsNeedUpdate=!1),ue.isSpriteMaterial&&Pt.setValue(T,"center",se.center),Pt.setValue(T,"modelViewMatrix",se.modelViewMatrix),Pt.setValue(T,"normalMatrix",se.normalMatrix),Pt.setValue(T,"modelMatrix",se.matrixWorld),ue.isShaderMaterial||ue.isRawShaderMaterial){const qt=ue.uniformsGroups;for(let ar=0,go=qt.length;ar<go;ar++){const Wh=qt[ar];Ve.update(Wh,Bn),Ve.bind(Wh,Bn)}}return Bn}function Ey(k,ee){k.ambientLightColor.needsUpdate=ee,k.lightProbe.needsUpdate=ee,k.directionalLights.needsUpdate=ee,k.directionalLightShadows.needsUpdate=ee,k.pointLights.needsUpdate=ee,k.pointLightShadows.needsUpdate=ee,k.spotLights.needsUpdate=ee,k.spotLightShadows.needsUpdate=ee,k.rectAreaLights.needsUpdate=ee,k.hemisphereLights.needsUpdate=ee}function Ty(k){return k.isMeshLambertMaterial||k.isMeshToonMaterial||k.isMeshPhongMaterial||k.isMeshStandardMaterial||k.isShadowMaterial||k.isShaderMaterial&&k.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return B},this.setRenderTargetTextures=function(k,ee,he){const ue=w.get(k);ue.__autoAllocateDepthBuffer=k.resolveDepthBuffer===!1,ue.__autoAllocateDepthBuffer===!1&&(ue.__useRenderToTexture=!1),w.get(k.texture).__webglTexture=ee,w.get(k.depthTexture).__webglTexture=ue.__autoAllocateDepthBuffer?void 0:he,ue.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(k,ee){const he=w.get(k);he.__webglFramebuffer=ee,he.__useDefaultFramebuffer=ee===void 0};const Ay=T.createFramebuffer();this.setRenderTarget=function(k,ee=0,he=0){B=k,C=ee,P=he;let ue=null,se=!1,Le=!1;if(k){const Fe=w.get(k);if(Fe.__useDefaultFramebuffer!==void 0){ie.bindFramebuffer(T.FRAMEBUFFER,Fe.__webglFramebuffer),E.copy(k.viewport),I.copy(k.scissor),V=k.scissorTest,ie.viewport(E),ie.scissor(I),ie.setScissorTest(V),v=-1;return}else if(Fe.__webglFramebuffer===void 0)Y.setupRenderTarget(k);else if(Fe.__hasExternalTextures)Y.rebindTextures(k,w.get(k.texture).__webglTexture,w.get(k.depthTexture).__webglTexture);else if(k.depthBuffer){const ot=k.depthTexture;if(Fe.__boundDepthTexture!==ot){if(ot!==null&&w.has(ot)&&(k.width!==ot.image.width||k.height!==ot.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Y.setupDepthRenderbuffer(k)}}const Ge=k.texture;(Ge.isData3DTexture||Ge.isDataArrayTexture||Ge.isCompressedArrayTexture)&&(Le=!0);const Ye=w.get(k).__webglFramebuffer;k.isWebGLCubeRenderTarget?(Array.isArray(Ye[ee])?ue=Ye[ee][he]:ue=Ye[ee],se=!0):k.samples>0&&Y.useMultisampledRTT(k)===!1?ue=w.get(k).__webglMultisampledFramebuffer:Array.isArray(Ye)?ue=Ye[he]:ue=Ye,E.copy(k.viewport),I.copy(k.scissor),V=k.scissorTest}else E.copy(Z).multiplyScalar(ae).floor(),I.copy(ne).multiplyScalar(ae).floor(),V=le;if(he!==0&&(ue=Ay),ie.bindFramebuffer(T.FRAMEBUFFER,ue)&&ie.drawBuffers(k,ue),ie.viewport(E),ie.scissor(I),ie.setScissorTest(V),se){const Fe=w.get(k.texture);T.framebufferTexture2D(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Fe.__webglTexture,he)}else if(Le){const Fe=ee;for(let Ge=0;Ge<k.textures.length;Ge++){const Ye=w.get(k.textures[Ge]);T.framebufferTextureLayer(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0+Ge,Ye.__webglTexture,he,Fe)}}else if(k!==null&&he!==0){const Fe=w.get(k.texture);T.framebufferTexture2D(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_2D,Fe.__webglTexture,he)}v=-1},this.readRenderTargetPixels=function(k,ee,he,ue,se,Le,ke,Fe=0){if(!(k&&k.isWebGLRenderTarget)){gt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ge=w.get(k).__webglFramebuffer;if(k.isWebGLCubeRenderTarget&&ke!==void 0&&(Ge=Ge[ke]),Ge){ie.bindFramebuffer(T.FRAMEBUFFER,Ge);try{const Ye=k.textures[Fe],ot=Ye.format,lt=Ye.type;if(k.textures.length>1&&T.readBuffer(T.COLOR_ATTACHMENT0+Fe),!J.textureFormatReadable(ot)){gt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!J.textureTypeReadable(lt)){gt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}ee>=0&&ee<=k.width-ue&&he>=0&&he<=k.height-se&&T.readPixels(ee,he,ue,se,Re.convert(ot),Re.convert(lt),Le)}finally{const Ye=B!==null?w.get(B).__webglFramebuffer:null;ie.bindFramebuffer(T.FRAMEBUFFER,Ye)}}},this.readRenderTargetPixelsAsync=async function(k,ee,he,ue,se,Le,ke,Fe=0){if(!(k&&k.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ge=w.get(k).__webglFramebuffer;if(k.isWebGLCubeRenderTarget&&ke!==void 0&&(Ge=Ge[ke]),Ge)if(ee>=0&&ee<=k.width-ue&&he>=0&&he<=k.height-se){ie.bindFramebuffer(T.FRAMEBUFFER,Ge);const Ye=k.textures[Fe],ot=Ye.format,lt=Ye.type;if(k.textures.length>1&&T.readBuffer(T.COLOR_ATTACHMENT0+Fe),!J.textureFormatReadable(ot))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!J.textureTypeReadable(lt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ke=T.createBuffer();T.bindBuffer(T.PIXEL_PACK_BUFFER,Ke),T.bufferData(T.PIXEL_PACK_BUFFER,Le.byteLength,T.STREAM_READ),T.readPixels(ee,he,ue,se,Re.convert(ot),Re.convert(lt),0);const Tt=B!==null?w.get(B).__webglFramebuffer:null;ie.bindFramebuffer(T.FRAMEBUFFER,Tt);const kt=T.fenceSync(T.SYNC_GPU_COMMANDS_COMPLETE,0);return T.flush(),await k1(T,kt,4),T.bindBuffer(T.PIXEL_PACK_BUFFER,Ke),T.getBufferSubData(T.PIXEL_PACK_BUFFER,0,Le),T.deleteBuffer(Ke),T.deleteSync(kt),Le}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(k,ee=null,he=0){const ue=Math.pow(2,-he),se=Math.floor(k.image.width*ue),Le=Math.floor(k.image.height*ue),ke=ee!==null?ee.x:0,Fe=ee!==null?ee.y:0;Y.setTexture2D(k,0),T.copyTexSubImage2D(T.TEXTURE_2D,he,0,0,ke,Fe,se,Le),ie.unbindTexture()};const Cy=T.createFramebuffer(),Ry=T.createFramebuffer();this.copyTextureToTexture=function(k,ee,he=null,ue=null,se=0,Le=0){let ke,Fe,Ge,Ye,ot,lt,Ke,Tt,kt;const Ot=k.isCompressedTexture?k.mipmaps[Le]:k.image;if(he!==null)ke=he.max.x-he.min.x,Fe=he.max.y-he.min.y,Ge=he.isBox3?he.max.z-he.min.z:1,Ye=he.min.x,ot=he.min.y,lt=he.isBox3?he.min.z:0;else{const Zt=Math.pow(2,-se);ke=Math.floor(Ot.width*Zt),Fe=Math.floor(Ot.height*Zt),k.isDataArrayTexture?Ge=Ot.depth:k.isData3DTexture?Ge=Math.floor(Ot.depth*Zt):Ge=1,Ye=0,ot=0,lt=0}ue!==null?(Ke=ue.x,Tt=ue.y,kt=ue.z):(Ke=0,Tt=0,kt=0);const At=Re.convert(ee.format),tn=Re.convert(ee.type);let Xe;ee.isData3DTexture?(Y.setTexture3D(ee,0),Xe=T.TEXTURE_3D):ee.isDataArrayTexture||ee.isCompressedArrayTexture?(Y.setTexture2DArray(ee,0),Xe=T.TEXTURE_2D_ARRAY):(Y.setTexture2D(ee,0),Xe=T.TEXTURE_2D),T.pixelStorei(T.UNPACK_FLIP_Y_WEBGL,ee.flipY),T.pixelStorei(T.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ee.premultiplyAlpha),T.pixelStorei(T.UNPACK_ALIGNMENT,ee.unpackAlignment);const Sn=T.getParameter(T.UNPACK_ROW_LENGTH),pt=T.getParameter(T.UNPACK_IMAGE_HEIGHT),Bn=T.getParameter(T.UNPACK_SKIP_PIXELS),Qn=T.getParameter(T.UNPACK_SKIP_ROWS),Lr=T.getParameter(T.UNPACK_SKIP_IMAGES);T.pixelStorei(T.UNPACK_ROW_LENGTH,Ot.width),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,Ot.height),T.pixelStorei(T.UNPACK_SKIP_PIXELS,Ye),T.pixelStorei(T.UNPACK_SKIP_ROWS,ot),T.pixelStorei(T.UNPACK_SKIP_IMAGES,lt);const mo=k.isDataArrayTexture||k.isData3DTexture,Pt=ee.isDataArrayTexture||ee.isData3DTexture;if(k.isDepthTexture){const Zt=w.get(k),sr=w.get(ee),qt=w.get(Zt.__renderTarget),ar=w.get(sr.__renderTarget);ie.bindFramebuffer(T.READ_FRAMEBUFFER,qt.__webglFramebuffer),ie.bindFramebuffer(T.DRAW_FRAMEBUFFER,ar.__webglFramebuffer);for(let go=0;go<Ge;go++)mo&&(T.framebufferTextureLayer(T.READ_FRAMEBUFFER,T.COLOR_ATTACHMENT0,w.get(k).__webglTexture,se,lt+go),T.framebufferTextureLayer(T.DRAW_FRAMEBUFFER,T.COLOR_ATTACHMENT0,w.get(ee).__webglTexture,Le,kt+go)),T.blitFramebuffer(Ye,ot,ke,Fe,Ke,Tt,ke,Fe,T.DEPTH_BUFFER_BIT,T.NEAREST);ie.bindFramebuffer(T.READ_FRAMEBUFFER,null),ie.bindFramebuffer(T.DRAW_FRAMEBUFFER,null)}else if(se!==0||k.isRenderTargetTexture||w.has(k)){const Zt=w.get(k),sr=w.get(ee);ie.bindFramebuffer(T.READ_FRAMEBUFFER,Cy),ie.bindFramebuffer(T.DRAW_FRAMEBUFFER,Ry);for(let qt=0;qt<Ge;qt++)mo?T.framebufferTextureLayer(T.READ_FRAMEBUFFER,T.COLOR_ATTACHMENT0,Zt.__webglTexture,se,lt+qt):T.framebufferTexture2D(T.READ_FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_2D,Zt.__webglTexture,se),Pt?T.framebufferTextureLayer(T.DRAW_FRAMEBUFFER,T.COLOR_ATTACHMENT0,sr.__webglTexture,Le,kt+qt):T.framebufferTexture2D(T.DRAW_FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_2D,sr.__webglTexture,Le),se!==0?T.blitFramebuffer(Ye,ot,ke,Fe,Ke,Tt,ke,Fe,T.COLOR_BUFFER_BIT,T.NEAREST):Pt?T.copyTexSubImage3D(Xe,Le,Ke,Tt,kt+qt,Ye,ot,ke,Fe):T.copyTexSubImage2D(Xe,Le,Ke,Tt,Ye,ot,ke,Fe);ie.bindFramebuffer(T.READ_FRAMEBUFFER,null),ie.bindFramebuffer(T.DRAW_FRAMEBUFFER,null)}else Pt?k.isDataTexture||k.isData3DTexture?T.texSubImage3D(Xe,Le,Ke,Tt,kt,ke,Fe,Ge,At,tn,Ot.data):ee.isCompressedArrayTexture?T.compressedTexSubImage3D(Xe,Le,Ke,Tt,kt,ke,Fe,Ge,At,Ot.data):T.texSubImage3D(Xe,Le,Ke,Tt,kt,ke,Fe,Ge,At,tn,Ot):k.isDataTexture?T.texSubImage2D(T.TEXTURE_2D,Le,Ke,Tt,ke,Fe,At,tn,Ot.data):k.isCompressedTexture?T.compressedTexSubImage2D(T.TEXTURE_2D,Le,Ke,Tt,Ot.width,Ot.height,At,Ot.data):T.texSubImage2D(T.TEXTURE_2D,Le,Ke,Tt,ke,Fe,At,tn,Ot);T.pixelStorei(T.UNPACK_ROW_LENGTH,Sn),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,pt),T.pixelStorei(T.UNPACK_SKIP_PIXELS,Bn),T.pixelStorei(T.UNPACK_SKIP_ROWS,Qn),T.pixelStorei(T.UNPACK_SKIP_IMAGES,Lr),Le===0&&ee.generateMipmaps&&T.generateMipmap(Xe),ie.unbindTexture()},this.initRenderTarget=function(k){w.get(k).__webglFramebuffer===void 0&&Y.setupRenderTarget(k)},this.initTexture=function(k){k.isCubeTexture?Y.setTextureCube(k,0):k.isData3DTexture?Y.setTexture3D(k,0):k.isDataArrayTexture||k.isCompressedArrayTexture?Y.setTexture2DArray(k,0):Y.setTexture2D(k,0),ie.unbindTexture()},this.resetState=function(){C=0,P=0,B=null,ie.reset(),Ae.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return fi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=ht._getDrawingBufferColorSpace(e),n.unpackColorSpace=ht._getUnpackColorSpace()}}const vA=""+new URL("../mangleditor-icon.png",import.meta.url).href,_A={class:"top-bar"},yA=["value"],xA=["title"],bA={class:"top-bar__status"},SA={__name:"TopBar",props:{isRendering:{type:Boolean,default:!0},previewMode:{type:String,default:"panel"},projectTitle:{type:String,default:"Untitled Project"}},emits:["save","load","download","import","reset","toggleRender","togglePreview","updateTitle"],setup(t,{emit:e}){const n=e,i=qe(null);function r(){i.value?.click()}function o(s){const a=s.target.files?.[0];if(!a)return;const l=new FileReader;l.onload=()=>{n("import",l.result)},l.readAsText(a),s.target.value=""}return(s,a)=>(ye(),Se("div",_A,[a[8]||(a[8]=fe("div",{class:"top-bar__logo-container"},[fe("img",{src:vA,class:"top-bar__logo-icon",alt:"mangleditor"}),fe("span",{class:"top-bar__logo-text"},"mangleditor"),fe("span",{class:"top-bar__coded-by"},"coded with love and haste")],-1)),fe("input",{class:"top-bar__title-input",type:"text",value:t.projectTitle,onInput:a[0]||(a[0]=l=>s.$emit("updateTitle",l.target.value)),onBlur:a[1]||(a[1]=l=>s.$emit("updateTitle",l.target.value)),placeholder:"Untitled Project",title:"Project title — used for save/export filenames"},null,40,yA),a[9]||(a[9]=fe("div",{class:"top-bar__divider"},null,-1)),fe("button",{class:"top-bar__btn",onClick:a[2]||(a[2]=l=>s.$emit("save")),title:"Save to browser"}," 💾 Save "),fe("button",{class:"top-bar__btn",onClick:a[3]||(a[3]=l=>s.$emit("load")),title:"Load from browser"}," 📂 Load "),fe("button",{class:"top-bar__btn",onClick:a[4]||(a[4]=l=>s.$emit("download")),title:"Download graph as JSON"}," ⬇ Download "),fe("button",{class:"top-bar__btn",onClick:r,title:"Import graph JSON"}," ⬆ Import "),fe("input",{ref_key:"importInput",ref:i,type:"file",accept:".json",class:"file-input-hidden",onChange:o},null,544),a[10]||(a[10]=fe("div",{class:"top-bar__divider"},null,-1)),fe("button",{class:"top-bar__btn top-bar__btn--danger",onClick:a[5]||(a[5]=l=>s.$emit("reset")),title:"Clear all nodes"}," 🗑 Reset "),a[11]||(a[11]=fe("div",{class:"top-bar__divider"},null,-1)),fe("button",{class:Dt(["top-bar__btn",t.isRendering?"top-bar__btn--running":"top-bar__btn--stop"]),onClick:a[6]||(a[6]=l=>s.$emit("toggleRender")),title:t.isRendering?"Stop rendering":"Resume rendering"},Ze(t.isRendering?"⏸ Stop":"▶ Resume"),11,xA),fe("button",{class:"top-bar__btn",onClick:a[7]||(a[7]=l=>s.$emit("togglePreview")),title:"Toggle preview mode"},Ze(t.previewMode==="panel"?"🖥 Panel":"🌌 Background"),1),fe("div",bA,[fe("div",{class:Dt(["top-bar__status-dot",{"top-bar__status-dot--stopped":!t.isRendering}])},null,2),fe("span",null,Ze(t.isRendering?"RENDERING":"STOPPED"),1)])]))}},me={IMAGE:"image",FLOAT:"float",INT:"int",VEC2:"vec2",BOOL:"bool",TRIGGER:"trigger"},MA={[me.IMAGE]:"#00d4ff",[me.FLOAT]:"#ff9a2e",[me.INT]:"#ffe14d",[me.VEC2]:"#ff6eb4",[me.BOOL]:"#ff4444",[me.TRIGGER]:"#ffffff"},wA={[me.IMAGE]:[me.IMAGE],[me.FLOAT]:[me.FLOAT],[me.INT]:[me.INT,me.FLOAT],[me.VEC2]:[me.VEC2],[me.BOOL]:[me.BOOL],[me.TRIGGER]:[me.TRIGGER]};function EA(t,e){const n=wA[t];return n?n.includes(e):!1}function Vc(t){return MA[t]||"#888888"}const hh={imageInput:{type:"imageInput",label:"Image Input",category:"image",inputs:[],outputs:[{id:"out",label:"Image",type:me.IMAGE}],params:{},shaderKey:null},uiImageSlot:{type:"uiImageSlot",label:"UI Image Slot",category:"image",inputs:[],outputs:[{id:"out",label:"Image",type:me.IMAGE}],params:{},shaderKey:null},webcamInput:{type:"webcamInput",label:"Webcam",category:"image",inputs:[],outputs:[{id:"out",label:"Image",type:me.IMAGE}],params:{},shaderKey:null},imageOutput:{type:"imageOutput",label:"Image Output",category:"image",inputs:[{id:"in",label:"Image",type:me.IMAGE}],outputs:[],params:{format:{type:"select",default:"png",options:["png","tiff","bmp"],label:"Format"},filename:{type:"string",default:"output",label:"Filename"}},shaderKey:null},pixelSort:{type:"pixelSort",label:"Pixel Sort",category:"image",inputs:[{id:"in",label:"Image",type:me.IMAGE}],outputs:[{id:"out",label:"Image",type:me.IMAGE}],params:{direction:{type:"select",default:"horizontal",options:["horizontal","vertical"],label:"Direction"},sortBy:{type:"select",default:"brightness",options:["brightness","hue","saturation"],label:"Sort By"},threshold:{type:"float",default:.5,min:0,max:1,step:.01,label:"Threshold"},upperThreshold:{type:"float",default:.8,min:0,max:1,step:.01,label:"Upper Threshold"},reverse:{type:"bool",default:!1,label:"Reverse"},blendAmount:{type:"float",default:1,min:0,max:1,step:.01,label:"Mix / Blend"}},shaderKey:"pixelSort"},reededGlass:{type:"reededGlass",label:"Reeded Glass",category:"image",inputs:[{id:"in",label:"Image",type:me.IMAGE},{id:"texture",label:"Texture",type:me.IMAGE,optional:!0}],outputs:[{id:"out",label:"Image",type:me.IMAGE}],params:{scale:{type:"float",default:20,min:1,max:200,step:.5,label:"Scale"},intensity:{type:"float",default:.05,min:0,max:.5,step:.001,label:"Intensity"},angle:{type:"float",default:0,min:0,max:360,step:1,label:"Angle"},blur:{type:"float",default:.5,min:0,max:5,step:.1,label:"Blur"},blendAmount:{type:"float",default:1,min:0,max:1,step:.01,label:"Mix / Blend"}},shaderKey:"reededGlass"},chromaticAberration:{type:"chromaticAberration",label:"Chromatic Aberration",category:"image",inputs:[{id:"in",label:"Image",type:me.IMAGE}],outputs:[{id:"out",label:"Image",type:me.IMAGE}],params:{intensity:{type:"float",default:5,min:0,max:50,step:.5,label:"Intensity"},direction:{type:"select",default:"radial",options:["radial","horizontal","vertical"],label:"Direction"},centerX:{type:"float",default:.5,min:0,max:1,step:.01,label:"Center X"},centerY:{type:"float",default:.5,min:0,max:1,step:.01,label:"Center Y"},blendAmount:{type:"float",default:1,min:0,max:1,step:.01,label:"Mix / Blend"}},shaderKey:"chromaticAberration"},displacement:{type:"displacement",label:"Heightmap Displacement",category:"image",inputs:[{id:"in",label:"Image",type:me.IMAGE},{id:"heightmap",label:"Heightmap",type:me.IMAGE}],outputs:[{id:"out",label:"Image",type:me.IMAGE}],params:{strength:{type:"float",default:.05,min:0,max:.5,step:.001,label:"Strength"},channel:{type:"select",default:"luminance",options:["luminance","r","g","b"],label:"Channel"},blendAmount:{type:"float",default:1,min:0,max:1,step:.01,label:"Mix / Blend"}},shaderKey:"displacement"},levels:{type:"levels",label:"Levels",category:"image",inputs:[{id:"in",label:"Image",type:me.IMAGE},{id:"inputBlack",label:"In Black",type:me.INT,optional:!0},{id:"inputWhite",label:"In White",type:me.INT,optional:!0},{id:"gamma",label:"Gamma",type:me.FLOAT,optional:!0}],outputs:[{id:"out",label:"Image",type:me.IMAGE}],params:{inputBlack:{type:"int",default:0,min:0,max:255,step:1,label:"Input Black"},inputWhite:{type:"int",default:255,min:0,max:255,step:1,label:"Input White"},gamma:{type:"float",default:1,min:.1,max:10,step:.01,label:"Gamma"},outputBlack:{type:"int",default:0,min:0,max:255,step:1,label:"Output Black"},outputWhite:{type:"int",default:255,min:0,max:255,step:1,label:"Output White"},channel:{type:"select",default:"master",options:["master","r","g","b"],label:"Channel"},blendAmount:{type:"float",default:1,min:0,max:1,step:.01,label:"Mix / Blend"}},shaderKey:"levels"},surfaceBlur:{type:"surfaceBlur",label:"Surface Blur",category:"image",inputs:[{id:"in",label:"Image",type:me.IMAGE}],outputs:[{id:"out",label:"Image",type:me.IMAGE}],params:{radius:{type:"int",default:5,min:1,max:20,step:1,label:"Radius"},threshold:{type:"float",default:.1,min:0,max:1,step:.01,label:"Threshold"},blendAmount:{type:"float",default:1,min:0,max:1,step:.01,label:"Mix / Blend"}},shaderKey:"surfaceBlur"},feedbackLoop:{type:"feedbackLoop",label:"Feedback Loop",category:"image",inputs:[{id:"in",label:"Image",type:me.IMAGE}],outputs:[{id:"out",label:"Image",type:me.IMAGE}],params:{decay:{type:"float",default:.9,min:0,max:1,step:.01,label:"Decay"},iterations:{type:"int",default:1,min:1,max:100,step:1,label:"Iterations"},blendMode:{type:"select",default:"normal",options:["normal","add","multiply"],label:"Blend Mode"}},shaderKey:"feedback"},blend:{type:"blend",label:"Blend",category:"image",inputs:[{id:"base",label:"Base",type:me.IMAGE},{id:"overlay",label:"Overlay",type:me.IMAGE}],outputs:[{id:"out",label:"Image",type:me.IMAGE}],params:{mode:{type:"select",default:"normal",options:["normal","multiply","screen","overlay","softLight","hardLight","difference","exclusion","add","subtract"],label:"Mode"},opacity:{type:"float",default:1,min:0,max:1,step:.01,label:"Opacity"}},shaderKey:"blend"},diffusion:{type:"diffusion",label:"Diffusion Reaction",category:"image",inputs:[{id:"in",label:"Init State",type:me.IMAGE}],outputs:[{id:"out",label:"Image",type:me.IMAGE}],params:{dA:{type:"float",default:1,min:0,max:2,step:.01,label:"Diff A"},dB:{type:"float",default:.5,min:0,max:2,step:.01,label:"Diff B"},feed:{type:"float",default:.055,min:0,max:.1,step:.001,label:"Feed Rate"},kill:{type:"float",default:.062,min:0,max:.1,step:.001,label:"Kill Rate"},dt:{type:"float",default:1,min:0,max:2,step:.01,label:"Delta Time"}},shaderKey:"diffusion"},xerox:{type:"xerox",label:"Xerox Photocopy",category:"image",inputs:[{id:"in",label:"Image",type:me.IMAGE}],outputs:[{id:"out",label:"Image",type:me.IMAGE}],params:{threshold:{type:"float",default:.5,min:0,max:1,step:.01,label:"Threshold"},noiseAmount:{type:"float",default:.1,min:0,max:1,step:.01,label:"Noise"},contrast:{type:"float",default:2,min:0,max:5,step:.1,label:"Contrast"},blendAmount:{type:"float",default:1,min:0,max:1,step:.01,label:"Mix / Blend"}},shaderKey:"xerox"},liquidDeform:{type:"liquidDeform",label:"Liquid Deform",category:"uv",inputs:[{id:"in",label:"Image",type:me.IMAGE}],outputs:[{id:"out",label:"Image",type:me.IMAGE}],params:{scale:{type:"float",default:1,min:.1,max:10,step:.01,label:"Zoom/Scale"},intensity:{type:"float",default:1,min:0,max:5,step:.01,label:"Swirl Int."},speed:{type:"float",default:1,min:0,max:5,step:.01,label:"Swirl Spd"},samples:{type:"float",default:20,min:1,max:20,step:1,label:"Samples"},gammaLift:{type:"float",default:1,min:.1,max:5,step:.01,label:"GammaLift"},blendAmount:{type:"float",default:1,min:0,max:1,step:.01,label:"Mix/Blend"}},shaderKey:"liquidDeform"},noiseContours:{type:"noiseContours",label:"Noise Contours",category:"image",inputs:[{id:"in",label:"Image",type:me.IMAGE},{id:"texture",label:"Overlay Tex",type:me.IMAGE,optional:!0}],outputs:[{id:"out",label:"Image",type:me.IMAGE}],params:{speed:{type:"float",default:1,min:0,max:5,step:.01,label:"Speed"},scale:{type:"float",default:1,min:.1,max:4,step:.01,label:"Scale"},palNum:{type:"float",default:9,min:2,max:20,step:1,label:"Contour Bands"},edgeStrength:{type:"float",default:5,min:0,max:20,step:.1,label:"Edge Strength"},highlight:{type:"float",default:10,min:0,max:30,step:.1,label:"Highlight"},hueShift:{type:"float",default:-.25,min:-3.14,max:3.14,step:.01,label:"Hue Shift"},hueRadius:{type:"float",default:.4,min:0,max:2,step:.01,label:"Hue Radius"},imageBlend:{type:"float",default:0,min:0,max:1,step:.01,label:"Image Color"},taper:{type:"float",default:1,min:0,max:3,step:.01,label:"Taper"},blendAmount:{type:"float",default:1,min:0,max:1,step:.01,label:"Blend"}},shaderKey:"noiseContours"},fisheye:{type:"fisheye",label:"Fisheye",category:"image",inputs:[{id:"in",label:"Image",type:me.IMAGE}],outputs:[{id:"out",label:"Image",type:me.IMAGE}],params:{power:{type:"float",default:1,min:-3,max:3,step:.01,label:"Power"},centerX:{type:"float",default:.5,min:.1,max:.9,step:.01,label:"Center X"},centerY:{type:"float",default:.5,min:.1,max:.9,step:.01,label:"Center Y"},zoom:{type:"float",default:1,min:.1,max:4,step:.01,label:"Zoom"},blendAmount:{type:"float",default:1,min:0,max:1,step:.01,label:"Blend"}},shaderKey:"fisheye"},crt:{type:"crt",label:"CRT Display",category:"image",inputs:[{id:"in",label:"Image",type:me.IMAGE}],outputs:[{id:"out",label:"Image",type:me.IMAGE}],params:{curvature:{type:"float",default:.5,min:0,max:1,step:.01,label:"Curvature"},scanLines:{type:"float",default:.5,min:0,max:1,step:.01,label:"Scanlines"},rgbShift:{type:"float",default:.2,min:0,max:1,step:.01,label:"RGB Shift"},brightness:{type:"float",default:1.2,min:0,max:3,step:.1,label:"Brightness"},blendAmount:{type:"float",default:1,min:0,max:1,step:.01,label:"Mix / Blend"}},shaderKey:"crt"},ascii:{type:"ascii",label:"ASCII Art",category:"image",inputs:[{id:"in",label:"Image",type:me.IMAGE},{id:"texture",label:"Overlay Tex",type:me.IMAGE,optional:!0}],outputs:[{id:"out",label:"Image",type:me.IMAGE}],params:{cellSize:{type:"float",default:12,min:4,max:48,step:1,label:"Cell Size"},brightness:{type:"float",default:0,min:-1,max:1,step:.01,label:"Threshold Shift"},colorMode:{type:"float",default:0,min:0,max:1,step:1,label:"Color Mode (Orig/Flat)"},fgColor:{type:"color",default:"#00ff66",label:"FG Color"},bgColor:{type:"color",default:"#000000",label:"BG Color"},intensity:{type:"float",default:1,min:0,max:1,step:.01,label:"Effect Mix"},blendAmount:{type:"float",default:1,min:0,max:1,step:.01,label:"Mix / Blend"}},shaderKey:"ascii"},asciiV2:{type:"asciiV2",label:"ASCII v2",category:"image",inputs:[{id:"in",label:"Image",type:me.IMAGE},{id:"texture",label:"Overlay Tex",type:me.IMAGE,optional:!0}],outputs:[{id:"out",label:"Image",type:me.IMAGE}],params:{cellSize:{type:"float",default:12,min:4,max:64,step:1,label:"Cell Size"},brightness:{type:"float",default:0,min:-.5,max:.5,step:.01,label:"Brightness"},colorMode:{type:"select",default:"Palette",options:["Palette","Original","Flat"],label:"Color Mode"},fgColor:{type:"color",default:"#00ff66",label:"FG Color"},bgColor:{type:"color",default:"#000000",label:"BG Color"},extendedPalette:{type:"bool",default:!1,label:"Extended Chars"},intensity:{type:"float",default:1,min:0,max:1,step:.01,label:"Intensity"},blendAmount:{type:"float",default:1,min:0,max:1,step:.01,label:"Blend"}},shaderKey:"asciiV2"},motionBlur:{type:"motionBlur",label:"Motion Blur",category:"image",inputs:[{id:"in",label:"Image",type:me.IMAGE}],outputs:[{id:"out",label:"Image",type:me.IMAGE}],params:{angle:{type:"float",default:0,min:0,max:3.1415,step:.01,label:"Angle (rad)"},strength:{type:"float",default:5,min:0,max:50,step:.1,label:"Strength"},samples:{type:"int",default:15,min:1,max:50,step:1,label:"Samples"},blendAmount:{type:"float",default:1,min:0,max:1,step:.01,label:"Mix / Blend"}},shaderKey:"motionBlur"},dithering:{type:"dithering",label:"Dithering (4x4)",category:"image",inputs:[{id:"in",label:"Image",type:me.IMAGE}],outputs:[{id:"out",label:"Image",type:me.IMAGE}],params:{colors:{type:"float",default:2,min:1,max:32,step:1,label:"Colors"},spread:{type:"float",default:.5,min:0,max:2,step:.01,label:"Spread"},blendAmount:{type:"float",default:1,min:0,max:1,step:.01,label:"Mix / Blend"}},shaderKey:"dithering"},lfo:{type:"lfo",label:"LFO",category:"animation",compact:!0,inlineParams:["waveform","frequency","amplitude"],inputs:[],outputs:[{id:"out",label:"Value",type:me.FLOAT}],params:{waveform:{type:"select",default:"sine",options:["sine","saw","square","triangle"],label:"Waveform"},frequency:{type:"float",default:1,min:.01,max:60,step:.01,label:"Frequency (Hz)"},amplitude:{type:"float",default:1,min:0,max:100,step:.01,label:"Amplitude"},offset:{type:"float",default:0,min:-100,max:100,step:.01,label:"Offset"},phase:{type:"float",default:0,min:0,max:360,step:1,label:"Phase (°)"}},shaderKey:null,isAnimated:!0},timer:{type:"timer",label:"Timer",category:"animation",inputs:[{id:"reset",label:"Reset",type:me.TRIGGER,optional:!0}],outputs:[{id:"out",label:"Time",type:me.FLOAT}],params:{speed:{type:"float",default:1,min:.01,max:10,step:.01,label:"Speed"},loop:{type:"bool",default:!1,label:"Loop"},loopDuration:{type:"float",default:5,min:.1,max:300,step:.1,label:"Loop Duration (s)"}},shaderKey:null,isAnimated:!0},random:{type:"random",label:"Random",category:"animation",inputs:[{id:"reseed",label:"Reseed",type:me.TRIGGER,optional:!0}],outputs:[{id:"out",label:"Value",type:me.FLOAT}],params:{min:{type:"float",default:0,min:-1e3,max:1e3,step:.01,label:"Min"},max:{type:"float",default:1,min:-1e3,max:1e3,step:.01,label:"Max"},mode:{type:"select",default:"continuous",options:["continuous","onTrigger"],label:"Mode"},seed:{type:"int",default:42,min:0,max:99999,step:1,label:"Seed"}},shaderKey:null,isAnimated:!0},damper:{type:"damper",label:"Damper",category:"animation",inputs:[{id:"target",label:"Target",type:me.FLOAT}],outputs:[{id:"out",label:"Value",type:me.FLOAT}],params:{smoothing:{type:"float",default:.9,min:0,max:.999,step:.001,label:"Smoothing"}},shaderKey:null,isAnimated:!0},fft:{type:"fft",label:"Audio FFT",category:"animation",compact:!0,inputs:[],outputs:[{id:"bass",label:"Bass",type:me.FLOAT},{id:"lowMid",label:"Low Mid",type:me.FLOAT},{id:"mid",label:"Mid",type:me.FLOAT},{id:"high",label:"High",type:me.FLOAT}],params:{smoothing:{type:"float",default:.8,min:0,max:.99,step:.01,label:"Smoothing"},gain:{type:"float",default:1,min:0,max:10,step:.1,label:"Gain"}},shaderKey:null,isAnimated:!0},button:{type:"button",label:"Button",category:"trigger",inputs:[],outputs:[{id:"out",label:"Trigger",type:me.TRIGGER}],params:{label:{type:"string",default:"Press",label:"Label"}},shaderKey:null},slider:{type:"slider",label:"Slider",category:"trigger",inputs:[],outputs:[{id:"out",label:"Value",type:me.FLOAT}],params:{value:{type:"float",default:.5,min:0,max:1,step:.01,label:"Value"},min:{type:"float",default:0,min:-1e4,max:1e4,step:.01,label:"Min"},max:{type:"float",default:1,min:-1e4,max:1e4,step:.01,label:"Max"},step:{type:"float",default:.01,min:.001,max:100,step:.001,label:"Step"},outputType:{type:"select",default:"float",options:["float","int"],label:"Output Type"}},shaderKey:null},knob:{type:"knob",label:"Knob",category:"trigger",compact:!0,inputs:[],outputs:[{id:"out",label:"Value",type:me.FLOAT}],params:{value:{type:"float",default:.5,min:0,max:1,step:.01,label:"Value"},min:{type:"float",default:0,min:-1e4,max:1e4,step:.01,label:"Min"},max:{type:"float",default:1,min:-1e4,max:1e4,step:.01,label:"Max"},step:{type:"float",default:.01,min:.001,max:100,step:.001,label:"Step"}},shaderKey:null},bang:{type:"bang",label:"Bang",category:"trigger",compact:!0,inputs:[],outputs:[{id:"out",label:"Trigger",type:me.TRIGGER}],params:{label:{type:"string",default:"Bang!",label:"Label"}},shaderKey:null},toggle:{type:"toggle",label:"Toggle (Bool)",category:"trigger",compact:!0,inputs:[],outputs:[{id:"out",label:"State",type:me.BOOL}],params:{state:{type:"bool",default:!1,label:"State"}},shaderKey:null},edgeTrigger:{type:"edgeTrigger",label:"Edge -> Bang",category:"trigger",compact:!0,inputs:[{id:"in",label:"Bool",type:me.BOOL}],outputs:[{id:"out",label:"Trigger",type:me.TRIGGER}],params:{mode:{type:"select",default:"rising",options:["rising","falling","both"],label:"Edge"}},shaderKey:null},changeTrigger:{type:"changeTrigger",label:"Change -> Bang",category:"trigger",compact:!0,inputs:[{id:"in",label:"Value",type:me.FLOAT}],outputs:[{id:"out",label:"Trigger",type:me.TRIGGER}],params:{threshold:{type:"float",default:.1,min:.001,max:100,step:.001,label:"Threshold"}},shaderKey:null},compare:{type:"compare",label:"Compare",category:"math",inputs:[{id:"a",label:"A",type:me.FLOAT},{id:"b",label:"B",type:me.FLOAT}],outputs:[{id:"out",label:"Bool",type:me.BOOL}],params:{op:{type:"select",default:">",options:[">","<",">=","<=","==","!="],label:"Operator"}},shaderKey:null},valueCondition:{type:"valueCondition",label:"If / Else",category:"math",inputs:[{id:"cond",label:"Condition",type:me.BOOL},{id:"trueVal",label:"True",type:me.FLOAT,optional:!0},{id:"falseVal",label:"False",type:me.FLOAT,optional:!0}],outputs:[{id:"out",label:"Result",type:me.FLOAT}],params:{defaultTrue:{type:"float",default:1,min:-1e3,max:1e3,step:.01,label:"Def True"},defaultFalse:{type:"float",default:0,min:-1e3,max:1e3,step:.01,label:"Def False"}},shaderKey:null},mathAdd:{type:"mathAdd",label:"Add",category:"math",inputs:[{id:"a",label:"A",type:me.FLOAT},{id:"b",label:"B",type:me.FLOAT}],outputs:[{id:"out",label:"Result",type:me.FLOAT}],params:{},shaderKey:null},mathMultiply:{type:"mathMultiply",label:"Multiply",category:"math",inputs:[{id:"a",label:"A",type:me.FLOAT},{id:"b",label:"B",type:me.FLOAT}],outputs:[{id:"out",label:"Result",type:me.FLOAT}],params:{},shaderKey:null},mathDivide:{type:"mathDivide",label:"Divide",category:"math",inputs:[{id:"a",label:"A",type:me.FLOAT},{id:"b",label:"B",type:me.FLOAT}],outputs:[{id:"out",label:"Result",type:me.FLOAT}],params:{},shaderKey:null},mathSqrt:{type:"mathSqrt",label:"Sqrt",category:"math",inputs:[{id:"a",label:"Value",type:me.FLOAT}],outputs:[{id:"out",label:"Result",type:me.FLOAT}],params:{},shaderKey:null},mathMap:{type:"mathMap",label:"Map",category:"math",inputs:[{id:"value",label:"Value",type:me.FLOAT}],outputs:[{id:"out",label:"Result",type:me.FLOAT}],params:{inMin:{type:"float",default:0,min:-1e4,max:1e4,step:.01,label:"In Min"},inMax:{type:"float",default:1,min:-1e4,max:1e4,step:.01,label:"In Max"},outMin:{type:"float",default:0,min:-1e4,max:1e4,step:.01,label:"Out Min"},outMax:{type:"float",default:1,min:-1e4,max:1e4,step:.01,label:"Out Max"}},shaderKey:null},mathClamp:{type:"mathClamp",label:"Clamp",category:"math",inputs:[{id:"value",label:"Value",type:me.FLOAT}],outputs:[{id:"out",label:"Result",type:me.FLOAT}],params:{min:{type:"float",default:0,min:-1e4,max:1e4,step:.01,label:"Min"},max:{type:"float",default:1,min:-1e4,max:1e4,step:.01,label:"Max"}},shaderKey:null},mathWrap:{type:"mathWrap",label:"Wrap",category:"math",inputs:[{id:"value",label:"Value",type:me.FLOAT}],outputs:[{id:"out",label:"Result",type:me.FLOAT}],params:{min:{type:"float",default:0,min:-1e4,max:1e4,step:.01,label:"Min"},max:{type:"float",default:1,min:-1e4,max:1e4,step:.01,label:"Max"}},shaderKey:null},floatToInt:{type:"floatToInt",label:"Float → Int",category:"math",compact:!0,inputs:[{id:"in",label:"Float",type:me.FLOAT}],outputs:[{id:"out",label:"Int",type:me.INT}],params:{mode:{type:"select",default:"round",options:["round","floor","ceil","truncate"],label:"Mode"},clampMin:{type:"int",default:-2147483648,min:-2147483648,max:2147483647,step:1,label:"Clamp Min"},clampMax:{type:"int",default:2147483647,min:-2147483648,max:2147483647,step:1,label:"Clamp Max"}},shaderKey:null},intToFloat:{type:"intToFloat",label:"Int → Float",category:"math",inputs:[{id:"in",label:"Int",type:me.INT}],outputs:[{id:"out",label:"Float",type:me.FLOAT}],params:{},shaderKey:null},uvGenerator:{type:"uvGenerator",label:"UV Generator",category:"uv",inputs:[],outputs:[{id:"out",label:"UV",type:me.IMAGE}],params:{},shaderKey:"uvGenerator"},uvTransform:{type:"uvTransform",label:"UV Transform",category:"uv",inputs:[{id:"in",label:"Image",type:me.IMAGE}],outputs:[{id:"out",label:"Image",type:me.IMAGE}],params:{scaleX:{type:"float",default:1,min:.01,max:10,step:.01,label:"Scale X"},scaleY:{type:"float",default:1,min:.01,max:10,step:.01,label:"Scale Y"},rotation:{type:"float",default:0,min:0,max:360,step:1,label:"Rotation (°)"},translateX:{type:"float",default:0,min:-2,max:2,step:.01,label:"Translate X"},translateY:{type:"float",default:0,min:-2,max:2,step:.01,label:"Translate Y"}},shaderKey:"uvTransform"},uvRepeat:{type:"uvRepeat",label:"UV Repeat",category:"uv",inputs:[{id:"in",label:"Image",type:me.IMAGE}],outputs:[{id:"out",label:"Image",type:me.IMAGE}],params:{repeatX:{type:"float",default:2,min:.1,max:50,step:.1,label:"Repeat X"},repeatY:{type:"float",default:2,min:.1,max:50,step:.1,label:"Repeat Y"},mirror:{type:"bool",default:!1,label:"Mirror"},offsetX:{type:"float",default:0,min:0,max:1,step:.01,label:"Offset X"},offsetY:{type:"float",default:0,min:0,max:1,step:.01,label:"Offset Y"}},shaderKey:"uvRepeat"},uvGlitch:{type:"uvGlitch",label:"UV Glitch",category:"uv",inputs:[{id:"in",label:"Image",type:me.IMAGE}],outputs:[{id:"out",label:"Image",type:me.IMAGE}],params:{blockSize:{type:"int",default:8,min:1,max:128,step:1,label:"Block Size"},intensity:{type:"float",default:.1,min:0,max:1,step:.01,label:"Intensity"},seed:{type:"float",default:0,min:0,max:1e3,step:.1,label:"Seed"},direction:{type:"select",default:"horizontal",options:["horizontal","vertical","both"],label:"Direction"}},shaderKey:"uvGlitch"},uvPolar:{type:"uvPolar",label:"UV Polar",category:"uv",inputs:[{id:"in",label:"Image",type:me.IMAGE}],outputs:[{id:"out",label:"Image",type:me.IMAGE}],params:{mode:{type:"select",default:"toPolar",options:["toPolar","fromPolar"],label:"Mode"},centerX:{type:"float",default:.5,min:0,max:1,step:.01,label:"Center X"},centerY:{type:"float",default:.5,min:0,max:1,step:.01,label:"Center Y"}},shaderKey:"uvPolar"},numberMonitor:{type:"numberMonitor",label:"Number Monitor",category:"utility",inputs:[{id:"in",label:"Value",type:me.FLOAT}],outputs:[{id:"out",label:"Value",type:me.FLOAT}],params:{decimals:{type:"int",default:3,min:0,max:10,step:1,label:"Decimals"},showGraph:{type:"bool",default:!0,label:"Show Graph"}},shaderKey:null,isPassthrough:!0},preview:{type:"preview",label:"Preview",category:"utility",inputs:[{id:"in",label:"Image",type:me.IMAGE}],outputs:[{id:"out",label:"Image",type:me.IMAGE}],params:{},shaderKey:"passthrough",isPassthrough:!0}},ql={image:{label:"Image",icon:"🖼️",color:"#00d4ff"},animation:{label:"Animation",icon:"⏱️",color:"#9b59b6"},trigger:{label:"Controls",icon:"🎛️",color:"#2ecc71"},math:{label:"Math",icon:"🔢",color:"#ff9a2e"},uv:{label:"UV / Texture",icon:"🌀",color:"#ff6eb4"},utility:{label:"Utility",icon:"🔍",color:"#a0a0b0"}};function ai(t){return hh[t]||null}function TA(){return{...hh}}function AA(t){return Object.values(hh).filter(e=>e.category===t)}const CA={class:"node-palette"},RA=["onClick"],IA={class:"node-palette__category-icon"},PA={class:"node-palette__category-label"},NA={style:{"font-size":"10px",color:"var(--text-muted)"}},DA=["onDragstart","onClick"],LA={__name:"NodePalette",emits:["addNode"],setup(t,{emit:e}){const n=ql,i=Ar(Object.fromEntries(Object.keys(ql).map(a=>[a,!0])));function r(a){i[a]=!i[a]}function o(a){return AA(a)}function s(a,l){a.dataTransfer.setData("application/node-type",l),a.dataTransfer.effectAllowed="move"}return(a,l)=>(ye(),Se("div",CA,[l[0]||(l[0]=fe("div",{class:"node-palette__header"},"Node Library",-1)),(ye(!0),Se(ut,null,dn(ge(n),(u,c)=>(ye(),Se("div",{key:c,class:"node-palette__category"},[fe("div",{class:"node-palette__category-header",onClick:f=>r(c)},[fe("span",IA,Ze(u.icon),1),fe("span",PA,Ze(u.label),1),fe("span",NA,Ze(i[c]?"▾":"▸"),1)],8,RA),i[c]?(ye(!0),Se(ut,{key:0},dn(o(c),f=>(ye(),Se("div",{key:f.type,class:"node-palette__item",draggable:"true",onDragstart:d=>s(d,f.type),onClick:d=>a.$emit("addNode",f.type)},[fe("div",{class:"node-palette__item-dot",style:yt({background:u.color})},null,4),Qd(" "+Ze(f.label),1)],40,DA))),128)):Je("",!0)]))),128))]))}};function Js(t){return _u()?(Ds(t),!0):!1}function Bi(t){return typeof t=="function"?t():ge(t)}const FA=typeof window<"u"&&typeof document<"u",UA=t=>typeof t<"u",OA=Object.prototype.toString,BA=t=>OA.call(t)==="[object Object]",kA=()=>{};function zA(t,e){function n(...i){return new Promise((r,o)=>{Promise.resolve(t(()=>e.apply(this,i),{fn:e,thisArg:this,args:i})).then(r).catch(o)})}return n}const Pv=t=>t();function VA(t=Pv){const e=qe(!0);function n(){e.value=!1}function i(){e.value=!0}return{isActive:Fl(e),pause:n,resume:i,eventFilter:(...o)=>{e.value&&t(...o)}}}function _m(t,e=!1,n="Timeout"){return new Promise((i,r)=>{setTimeout(e?()=>r(n):i,t)})}function HA(t,e,n={}){const{eventFilter:i=Pv,...r}=n;return ft(t,zA(i,e),r)}function Do(t,e,n={}){const{eventFilter:i,...r}=n,{eventFilter:o,pause:s,resume:a,isActive:l}=VA(i);return{stop:HA(t,e,{...r,eventFilter:o}),pause:s,resume:a,isActive:l}}function $A(t,e={}){if(!Ut(t))return n0(t);const n=Array.isArray(t.value)?Array.from({length:t.value.length}):{};for(const i in t.value)n[i]=dx(()=>({get(){return t.value[i]},set(r){var o;if((o=Bi(e.replaceRef))!=null?o:!0)if(Array.isArray(t.value)){const a=[...t.value];a[i]=r,t.value=a}else{const a={...t.value,[i]:r};Object.setPrototypeOf(a,Object.getPrototypeOf(t.value)),t.value=a}else t.value[i]=r}}));return n}function ud(t,e=!1){function n(f,{flush:d="sync",deep:h=!1,timeout:g,throwOnTimeout:_}={}){let m=null;const b=[new Promise(S=>{m=ft(t,x=>{f(x)!==e&&(m?.(),S(x))},{flush:d,deep:h,immediate:!0})})];return g!=null&&b.push(_m(g,_).then(()=>Bi(t)).finally(()=>m?.())),Promise.race(b)}function i(f,d){if(!Ut(f))return n(x=>x===f,d);const{flush:h="sync",deep:g=!1,timeout:_,throwOnTimeout:m}=d??{};let p=null;const S=[new Promise(x=>{p=ft([t,f],([D,O])=>{e!==(D===O)&&(p?.(),x(D))},{flush:h,deep:g,immediate:!0})})];return _!=null&&S.push(_m(_,m).then(()=>Bi(t)).finally(()=>(p?.(),Bi(t)))),Promise.race(S)}function r(f){return n(d=>!!d,f)}function o(f){return i(null,f)}function s(f){return i(void 0,f)}function a(f){return n(Number.isNaN,f)}function l(f,d){return n(h=>{const g=Array.from(h);return g.includes(f)||g.includes(Bi(f))},d)}function u(f){return c(1,f)}function c(f=1,d){let h=-1;return n(()=>(h+=1,h>=f),d)}return Array.isArray(Bi(t))?{toMatch:n,toContains:l,changed:u,changedTimes:c,get not(){return ud(t,!e)}}:{toMatch:n,toBe:i,toBeTruthy:r,toBeNull:o,toBeNaN:a,toBeUndefined:s,changed:u,changedTimes:c,get not(){return ud(t,!e)}}}function cd(t){return ud(t)}function GA(t){var e;const n=Bi(t);return(e=n?.$el)!=null?e:n}const Nv=FA?window:void 0;function Dv(...t){let e,n,i,r;if(typeof t[0]=="string"||Array.isArray(t[0])?([n,i,r]=t,e=Nv):[e,n,i,r]=t,!e)return kA;Array.isArray(n)||(n=[n]),Array.isArray(i)||(i=[i]);const o=[],s=()=>{o.forEach(c=>c()),o.length=0},a=(c,f,d,h)=>(c.addEventListener(f,d,h),()=>c.removeEventListener(f,d,h)),l=ft(()=>[GA(e),Bi(r)],([c,f])=>{if(s(),!c)return;const d=BA(f)?{...f}:f;o.push(...n.flatMap(h=>i.map(g=>a(c,h,g,d))))},{immediate:!0,flush:"post"}),u=()=>{l(),s()};return Js(u),u}function WA(t){return typeof t=="function"?t:typeof t=="string"?e=>e.key===t:Array.isArray(t)?e=>t.includes(e.key):()=>!0}function ym(...t){let e,n,i={};t.length===3?(e=t[0],n=t[1],i=t[2]):t.length===2?typeof t[1]=="object"?(e=!0,n=t[0],i=t[1]):(e=t[0],n=t[1]):(e=!0,n=t[0]);const{target:r=Nv,eventName:o="keydown",passive:s=!1,dedupe:a=!1}=i,l=WA(e);return Dv(r,o,c=>{c.repeat&&Bi(a)||l(c)&&n(c)},s)}function XA(t){return JSON.parse(JSON.stringify(t))}function Hc(t,e,n,i={}){var r,o,s;const{clone:a=!1,passive:l=!1,eventName:u,deep:c=!1,defaultValue:f,shouldEmit:d}=i,h=rr(),g=n||h?.emit||((r=h?.$emit)==null?void 0:r.bind(h))||((s=(o=h?.proxy)==null?void 0:o.$emit)==null?void 0:s.bind(h?.proxy));let _=u;e||(e="modelValue"),_=_||`update:${e.toString()}`;const m=S=>a?typeof a=="function"?a(S):XA(S):S,p=()=>UA(t[e])?m(t[e]):f,b=S=>{d?d(S)&&g(_,S):g(_,S)};if(l){const S=p(),x=qe(S);let D=!1;return ft(()=>t[e],O=>{D||(D=!0,x.value=m(O),Dn(()=>D=!1))}),ft(x,O=>{!D&&(O!==t[e]||c)&&b(O)},{deep:c}),x}else return De({get(){return p()},set(S){b(S)}})}var YA={value:()=>{}};function Du(){for(var t=0,e=arguments.length,n={},i;t<e;++t){if(!(i=arguments[t]+"")||i in n||/[\s.]/.test(i))throw new Error("illegal type: "+i);n[i]=[]}return new Ml(n)}function Ml(t){this._=t}function qA(t,e){return t.trim().split(/^|\s+/).map(function(n){var i="",r=n.indexOf(".");if(r>=0&&(i=n.slice(r+1),n=n.slice(0,r)),n&&!e.hasOwnProperty(n))throw new Error("unknown type: "+n);return{type:n,name:i}})}Ml.prototype=Du.prototype={constructor:Ml,on:function(t,e){var n=this._,i=qA(t+"",n),r,o=-1,s=i.length;if(arguments.length<2){for(;++o<s;)if((r=(t=i[o]).type)&&(r=KA(n[r],t.name)))return r;return}if(e!=null&&typeof e!="function")throw new Error("invalid callback: "+e);for(;++o<s;)if(r=(t=i[o]).type)n[r]=xm(n[r],t.name,e);else if(e==null)for(r in n)n[r]=xm(n[r],t.name,null);return this},copy:function(){var t={},e=this._;for(var n in e)t[n]=e[n].slice();return new Ml(t)},call:function(t,e){if((r=arguments.length-2)>0)for(var n=new Array(r),i=0,r,o;i<r;++i)n[i]=arguments[i+2];if(!this._.hasOwnProperty(t))throw new Error("unknown type: "+t);for(o=this._[t],i=0,r=o.length;i<r;++i)o[i].value.apply(e,n)},apply:function(t,e,n){if(!this._.hasOwnProperty(t))throw new Error("unknown type: "+t);for(var i=this._[t],r=0,o=i.length;r<o;++r)i[r].value.apply(e,n)}};function KA(t,e){for(var n=0,i=t.length,r;n<i;++n)if((r=t[n]).name===e)return r.value}function xm(t,e,n){for(var i=0,r=t.length;i<r;++i)if(t[i].name===e){t[i]=YA,t=t.slice(0,i).concat(t.slice(i+1));break}return n!=null&&t.push({name:e,value:n}),t}var fd="http://www.w3.org/1999/xhtml";const bm={svg:"http://www.w3.org/2000/svg",xhtml:fd,xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"};function Lu(t){var e=t+="",n=e.indexOf(":");return n>=0&&(e=t.slice(0,n))!=="xmlns"&&(t=t.slice(n+1)),bm.hasOwnProperty(e)?{space:bm[e],local:t}:t}function ZA(t){return function(){var e=this.ownerDocument,n=this.namespaceURI;return n===fd&&e.documentElement.namespaceURI===fd?e.createElement(t):e.createElementNS(n,t)}}function jA(t){return function(){return this.ownerDocument.createElementNS(t.space,t.local)}}function Lv(t){var e=Lu(t);return(e.local?jA:ZA)(e)}function JA(){}function ph(t){return t==null?JA:function(){return this.querySelector(t)}}function QA(t){typeof t!="function"&&(t=ph(t));for(var e=this._groups,n=e.length,i=new Array(n),r=0;r<n;++r)for(var o=e[r],s=o.length,a=i[r]=new Array(s),l,u,c=0;c<s;++c)(l=o[c])&&(u=t.call(l,l.__data__,c,o))&&("__data__"in l&&(u.__data__=l.__data__),a[c]=u);return new Rn(i,this._parents)}function eC(t){return t==null?[]:Array.isArray(t)?t:Array.from(t)}function tC(){return[]}function Fv(t){return t==null?tC:function(){return this.querySelectorAll(t)}}function nC(t){return function(){return eC(t.apply(this,arguments))}}function iC(t){typeof t=="function"?t=nC(t):t=Fv(t);for(var e=this._groups,n=e.length,i=[],r=[],o=0;o<n;++o)for(var s=e[o],a=s.length,l,u=0;u<a;++u)(l=s[u])&&(i.push(t.call(l,l.__data__,u,s)),r.push(l));return new Rn(i,r)}function Uv(t){return function(){return this.matches(t)}}function Ov(t){return function(e){return e.matches(t)}}var rC=Array.prototype.find;function oC(t){return function(){return rC.call(this.children,t)}}function sC(){return this.firstElementChild}function aC(t){return this.select(t==null?sC:oC(typeof t=="function"?t:Ov(t)))}var lC=Array.prototype.filter;function uC(){return Array.from(this.children)}function cC(t){return function(){return lC.call(this.children,t)}}function fC(t){return this.selectAll(t==null?uC:cC(typeof t=="function"?t:Ov(t)))}function dC(t){typeof t!="function"&&(t=Uv(t));for(var e=this._groups,n=e.length,i=new Array(n),r=0;r<n;++r)for(var o=e[r],s=o.length,a=i[r]=[],l,u=0;u<s;++u)(l=o[u])&&t.call(l,l.__data__,u,o)&&a.push(l);return new Rn(i,this._parents)}function Bv(t){return new Array(t.length)}function hC(){return new Rn(this._enter||this._groups.map(Bv),this._parents)}function Kl(t,e){this.ownerDocument=t.ownerDocument,this.namespaceURI=t.namespaceURI,this._next=null,this._parent=t,this.__data__=e}Kl.prototype={constructor:Kl,appendChild:function(t){return this._parent.insertBefore(t,this._next)},insertBefore:function(t,e){return this._parent.insertBefore(t,e)},querySelector:function(t){return this._parent.querySelector(t)},querySelectorAll:function(t){return this._parent.querySelectorAll(t)}};function pC(t){return function(){return t}}function mC(t,e,n,i,r,o){for(var s=0,a,l=e.length,u=o.length;s<u;++s)(a=e[s])?(a.__data__=o[s],i[s]=a):n[s]=new Kl(t,o[s]);for(;s<l;++s)(a=e[s])&&(r[s]=a)}function gC(t,e,n,i,r,o,s){var a,l,u=new Map,c=e.length,f=o.length,d=new Array(c),h;for(a=0;a<c;++a)(l=e[a])&&(d[a]=h=s.call(l,l.__data__,a,e)+"",u.has(h)?r[a]=l:u.set(h,l));for(a=0;a<f;++a)h=s.call(t,o[a],a,o)+"",(l=u.get(h))?(i[a]=l,l.__data__=o[a],u.delete(h)):n[a]=new Kl(t,o[a]);for(a=0;a<c;++a)(l=e[a])&&u.get(d[a])===l&&(r[a]=l)}function vC(t){return t.__data__}function _C(t,e){if(!arguments.length)return Array.from(this,vC);var n=e?gC:mC,i=this._parents,r=this._groups;typeof t!="function"&&(t=pC(t));for(var o=r.length,s=new Array(o),a=new Array(o),l=new Array(o),u=0;u<o;++u){var c=i[u],f=r[u],d=f.length,h=yC(t.call(c,c&&c.__data__,u,i)),g=h.length,_=a[u]=new Array(g),m=s[u]=new Array(g),p=l[u]=new Array(d);n(c,f,_,m,p,h,e);for(var b=0,S=0,x,D;b<g;++b)if(x=_[b]){for(b>=S&&(S=b+1);!(D=m[S])&&++S<g;);x._next=D||null}}return s=new Rn(s,i),s._enter=a,s._exit=l,s}function yC(t){return typeof t=="object"&&"length"in t?t:Array.from(t)}function xC(){return new Rn(this._exit||this._groups.map(Bv),this._parents)}function bC(t,e,n){var i=this.enter(),r=this,o=this.exit();return typeof t=="function"?(i=t(i),i&&(i=i.selection())):i=i.append(t+""),e!=null&&(r=e(r),r&&(r=r.selection())),n==null?o.remove():n(o),i&&r?i.merge(r).order():r}function SC(t){for(var e=t.selection?t.selection():t,n=this._groups,i=e._groups,r=n.length,o=i.length,s=Math.min(r,o),a=new Array(r),l=0;l<s;++l)for(var u=n[l],c=i[l],f=u.length,d=a[l]=new Array(f),h,g=0;g<f;++g)(h=u[g]||c[g])&&(d[g]=h);for(;l<r;++l)a[l]=n[l];return new Rn(a,this._parents)}function MC(){for(var t=this._groups,e=-1,n=t.length;++e<n;)for(var i=t[e],r=i.length-1,o=i[r],s;--r>=0;)(s=i[r])&&(o&&s.compareDocumentPosition(o)^4&&o.parentNode.insertBefore(s,o),o=s);return this}function wC(t){t||(t=EC);function e(f,d){return f&&d?t(f.__data__,d.__data__):!f-!d}for(var n=this._groups,i=n.length,r=new Array(i),o=0;o<i;++o){for(var s=n[o],a=s.length,l=r[o]=new Array(a),u,c=0;c<a;++c)(u=s[c])&&(l[c]=u);l.sort(e)}return new Rn(r,this._parents).order()}function EC(t,e){return t<e?-1:t>e?1:t>=e?0:NaN}function TC(){var t=arguments[0];return arguments[0]=this,t.apply(null,arguments),this}function AC(){return Array.from(this)}function CC(){for(var t=this._groups,e=0,n=t.length;e<n;++e)for(var i=t[e],r=0,o=i.length;r<o;++r){var s=i[r];if(s)return s}return null}function RC(){let t=0;for(const e of this)++t;return t}function IC(){return!this.node()}function PC(t){for(var e=this._groups,n=0,i=e.length;n<i;++n)for(var r=e[n],o=0,s=r.length,a;o<s;++o)(a=r[o])&&t.call(a,a.__data__,o,r);return this}function NC(t){return function(){this.removeAttribute(t)}}function DC(t){return function(){this.removeAttributeNS(t.space,t.local)}}function LC(t,e){return function(){this.setAttribute(t,e)}}function FC(t,e){return function(){this.setAttributeNS(t.space,t.local,e)}}function UC(t,e){return function(){var n=e.apply(this,arguments);n==null?this.removeAttribute(t):this.setAttribute(t,n)}}function OC(t,e){return function(){var n=e.apply(this,arguments);n==null?this.removeAttributeNS(t.space,t.local):this.setAttributeNS(t.space,t.local,n)}}function BC(t,e){var n=Lu(t);if(arguments.length<2){var i=this.node();return n.local?i.getAttributeNS(n.space,n.local):i.getAttribute(n)}return this.each((e==null?n.local?DC:NC:typeof e=="function"?n.local?OC:UC:n.local?FC:LC)(n,e))}function kv(t){return t.ownerDocument&&t.ownerDocument.defaultView||t.document&&t||t.defaultView}function kC(t){return function(){this.style.removeProperty(t)}}function zC(t,e,n){return function(){this.style.setProperty(t,e,n)}}function VC(t,e,n){return function(){var i=e.apply(this,arguments);i==null?this.style.removeProperty(t):this.style.setProperty(t,i,n)}}function HC(t,e,n){return arguments.length>1?this.each((e==null?kC:typeof e=="function"?VC:zC)(t,e,n??"")):es(this.node(),t)}function es(t,e){return t.style.getPropertyValue(e)||kv(t).getComputedStyle(t,null).getPropertyValue(e)}function $C(t){return function(){delete this[t]}}function GC(t,e){return function(){this[t]=e}}function WC(t,e){return function(){var n=e.apply(this,arguments);n==null?delete this[t]:this[t]=n}}function XC(t,e){return arguments.length>1?this.each((e==null?$C:typeof e=="function"?WC:GC)(t,e)):this.node()[t]}function zv(t){return t.trim().split(/^|\s+/)}function mh(t){return t.classList||new Vv(t)}function Vv(t){this._node=t,this._names=zv(t.getAttribute("class")||"")}Vv.prototype={add:function(t){var e=this._names.indexOf(t);e<0&&(this._names.push(t),this._node.setAttribute("class",this._names.join(" ")))},remove:function(t){var e=this._names.indexOf(t);e>=0&&(this._names.splice(e,1),this._node.setAttribute("class",this._names.join(" ")))},contains:function(t){return this._names.indexOf(t)>=0}};function Hv(t,e){for(var n=mh(t),i=-1,r=e.length;++i<r;)n.add(e[i])}function $v(t,e){for(var n=mh(t),i=-1,r=e.length;++i<r;)n.remove(e[i])}function YC(t){return function(){Hv(this,t)}}function qC(t){return function(){$v(this,t)}}function KC(t,e){return function(){(e.apply(this,arguments)?Hv:$v)(this,t)}}function ZC(t,e){var n=zv(t+"");if(arguments.length<2){for(var i=mh(this.node()),r=-1,o=n.length;++r<o;)if(!i.contains(n[r]))return!1;return!0}return this.each((typeof e=="function"?KC:e?YC:qC)(n,e))}function jC(){this.textContent=""}function JC(t){return function(){this.textContent=t}}function QC(t){return function(){var e=t.apply(this,arguments);this.textContent=e??""}}function e2(t){return arguments.length?this.each(t==null?jC:(typeof t=="function"?QC:JC)(t)):this.node().textContent}function t2(){this.innerHTML=""}function n2(t){return function(){this.innerHTML=t}}function i2(t){return function(){var e=t.apply(this,arguments);this.innerHTML=e??""}}function r2(t){return arguments.length?this.each(t==null?t2:(typeof t=="function"?i2:n2)(t)):this.node().innerHTML}function o2(){this.nextSibling&&this.parentNode.appendChild(this)}function s2(){return this.each(o2)}function a2(){this.previousSibling&&this.parentNode.insertBefore(this,this.parentNode.firstChild)}function l2(){return this.each(a2)}function u2(t){var e=typeof t=="function"?t:Lv(t);return this.select(function(){return this.appendChild(e.apply(this,arguments))})}function c2(){return null}function f2(t,e){var n=typeof t=="function"?t:Lv(t),i=e==null?c2:typeof e=="function"?e:ph(e);return this.select(function(){return this.insertBefore(n.apply(this,arguments),i.apply(this,arguments)||null)})}function d2(){var t=this.parentNode;t&&t.removeChild(this)}function h2(){return this.each(d2)}function p2(){var t=this.cloneNode(!1),e=this.parentNode;return e?e.insertBefore(t,this.nextSibling):t}function m2(){var t=this.cloneNode(!0),e=this.parentNode;return e?e.insertBefore(t,this.nextSibling):t}function g2(t){return this.select(t?m2:p2)}function v2(t){return arguments.length?this.property("__data__",t):this.node().__data__}function _2(t){return function(e){t.call(this,e,this.__data__)}}function y2(t){return t.trim().split(/^|\s+/).map(function(e){var n="",i=e.indexOf(".");return i>=0&&(n=e.slice(i+1),e=e.slice(0,i)),{type:e,name:n}})}function x2(t){return function(){var e=this.__on;if(e){for(var n=0,i=-1,r=e.length,o;n<r;++n)o=e[n],(!t.type||o.type===t.type)&&o.name===t.name?this.removeEventListener(o.type,o.listener,o.options):e[++i]=o;++i?e.length=i:delete this.__on}}}function b2(t,e,n){return function(){var i=this.__on,r,o=_2(e);if(i){for(var s=0,a=i.length;s<a;++s)if((r=i[s]).type===t.type&&r.name===t.name){this.removeEventListener(r.type,r.listener,r.options),this.addEventListener(r.type,r.listener=o,r.options=n),r.value=e;return}}this.addEventListener(t.type,o,n),r={type:t.type,name:t.name,value:e,listener:o,options:n},i?i.push(r):this.__on=[r]}}function S2(t,e,n){var i=y2(t+""),r,o=i.length,s;if(arguments.length<2){var a=this.node().__on;if(a){for(var l=0,u=a.length,c;l<u;++l)for(r=0,c=a[l];r<o;++r)if((s=i[r]).type===c.type&&s.name===c.name)return c.value}return}for(a=e?b2:x2,r=0;r<o;++r)this.each(a(i[r],e,n));return this}function Gv(t,e,n){var i=kv(t),r=i.CustomEvent;typeof r=="function"?r=new r(e,n):(r=i.document.createEvent("Event"),n?(r.initEvent(e,n.bubbles,n.cancelable),r.detail=n.detail):r.initEvent(e,!1,!1)),t.dispatchEvent(r)}function M2(t,e){return function(){return Gv(this,t,e)}}function w2(t,e){return function(){return Gv(this,t,e.apply(this,arguments))}}function E2(t,e){return this.each((typeof e=="function"?w2:M2)(t,e))}function*T2(){for(var t=this._groups,e=0,n=t.length;e<n;++e)for(var i=t[e],r=0,o=i.length,s;r<o;++r)(s=i[r])&&(yield s)}var Wv=[null];function Rn(t,e){this._groups=t,this._parents=e}function xa(){return new Rn([[document.documentElement]],Wv)}function A2(){return this}Rn.prototype=xa.prototype={constructor:Rn,select:QA,selectAll:iC,selectChild:aC,selectChildren:fC,filter:dC,data:_C,enter:hC,exit:xC,join:bC,merge:SC,selection:A2,order:MC,sort:wC,call:TC,nodes:AC,node:CC,size:RC,empty:IC,each:PC,attr:BC,style:HC,property:XC,classed:ZC,text:e2,html:r2,raise:s2,lower:l2,append:u2,insert:f2,remove:h2,clone:g2,datum:v2,on:S2,dispatch:E2,[Symbol.iterator]:T2};function Gn(t){return typeof t=="string"?new Rn([[document.querySelector(t)]],[document.documentElement]):new Rn([[t]],Wv)}function C2(t){let e;for(;e=t.sourceEvent;)t=e;return t}function ri(t,e){if(t=C2(t),e===void 0&&(e=t.currentTarget),e){var n=e.ownerSVGElement||e;if(n.createSVGPoint){var i=n.createSVGPoint();return i.x=t.clientX,i.y=t.clientY,i=i.matrixTransform(e.getScreenCTM().inverse()),[i.x,i.y]}if(e.getBoundingClientRect){var r=e.getBoundingClientRect();return[t.clientX-r.left-e.clientLeft,t.clientY-r.top-e.clientTop]}}return[t.pageX,t.pageY]}const R2={passive:!1},Qs={capture:!0,passive:!1};function $c(t){t.stopImmediatePropagation()}function Ho(t){t.preventDefault(),t.stopImmediatePropagation()}function Xv(t){var e=t.document.documentElement,n=Gn(t).on("dragstart.drag",Ho,Qs);"onselectstart"in e?n.on("selectstart.drag",Ho,Qs):(e.__noselect=e.style.MozUserSelect,e.style.MozUserSelect="none")}function Yv(t,e){var n=t.document.documentElement,i=Gn(t).on("dragstart.drag",null);e&&(i.on("click.drag",Ho,Qs),setTimeout(function(){i.on("click.drag",null)},0)),"onselectstart"in n?i.on("selectstart.drag",null):(n.style.MozUserSelect=n.__noselect,delete n.__noselect)}const Qa=t=>()=>t;function dd(t,{sourceEvent:e,subject:n,target:i,identifier:r,active:o,x:s,y:a,dx:l,dy:u,dispatch:c}){Object.defineProperties(this,{type:{value:t,enumerable:!0,configurable:!0},sourceEvent:{value:e,enumerable:!0,configurable:!0},subject:{value:n,enumerable:!0,configurable:!0},target:{value:i,enumerable:!0,configurable:!0},identifier:{value:r,enumerable:!0,configurable:!0},active:{value:o,enumerable:!0,configurable:!0},x:{value:s,enumerable:!0,configurable:!0},y:{value:a,enumerable:!0,configurable:!0},dx:{value:l,enumerable:!0,configurable:!0},dy:{value:u,enumerable:!0,configurable:!0},_:{value:c}})}dd.prototype.on=function(){var t=this._.on.apply(this._,arguments);return t===this._?this:t};function I2(t){return!t.ctrlKey&&!t.button}function P2(){return this.parentNode}function N2(t,e){return e??{x:t.x,y:t.y}}function D2(){return navigator.maxTouchPoints||"ontouchstart"in this}function L2(){var t=I2,e=P2,n=N2,i=D2,r={},o=Du("start","drag","end"),s=0,a,l,u,c,f=0;function d(x){x.on("mousedown.drag",h).filter(i).on("touchstart.drag",m).on("touchmove.drag",p,R2).on("touchend.drag touchcancel.drag",b).style("touch-action","none").style("-webkit-tap-highlight-color","rgba(0,0,0,0)")}function h(x,D){if(!(c||!t.call(this,x,D))){var O=S(this,e.call(this,x,D),x,D,"mouse");O&&(Gn(x.view).on("mousemove.drag",g,Qs).on("mouseup.drag",_,Qs),Xv(x.view),$c(x),u=!1,a=x.clientX,l=x.clientY,O("start",x))}}function g(x){if(Ho(x),!u){var D=x.clientX-a,O=x.clientY-l;u=D*D+O*O>f}r.mouse("drag",x)}function _(x){Gn(x.view).on("mousemove.drag mouseup.drag",null),Yv(x.view,u),Ho(x),r.mouse("end",x)}function m(x,D){if(t.call(this,x,D)){var O=x.changedTouches,z=e.call(this,x,D),y=O.length,M,N;for(M=0;M<y;++M)(N=S(this,z,x,D,O[M].identifier,O[M]))&&($c(x),N("start",x,O[M]))}}function p(x){var D=x.changedTouches,O=D.length,z,y;for(z=0;z<O;++z)(y=r[D[z].identifier])&&(Ho(x),y("drag",x,D[z]))}function b(x){var D=x.changedTouches,O=D.length,z,y;for(c&&clearTimeout(c),c=setTimeout(function(){c=null},500),z=0;z<O;++z)(y=r[D[z].identifier])&&($c(x),y("end",x,D[z]))}function S(x,D,O,z,y,M){var N=o.copy(),C=ri(M||O,D),P,B,v;if((v=n.call(x,new dd("beforestart",{sourceEvent:O,target:d,identifier:y,active:s,x:C[0],y:C[1],dx:0,dy:0,dispatch:N}),z))!=null)return P=v.x-C[0]||0,B=v.y-C[1]||0,function A(E,I,V){var W=C,q;switch(E){case"start":r[y]=A,q=s++;break;case"end":delete r[y],--s;case"drag":C=ri(V||I,D),q=s;break}N.call(E,x,new dd(E,{sourceEvent:I,subject:v,target:d,identifier:y,active:q,x:C[0]+P,y:C[1]+B,dx:C[0]-W[0],dy:C[1]-W[1],dispatch:N}),z)}}return d.filter=function(x){return arguments.length?(t=typeof x=="function"?x:Qa(!!x),d):t},d.container=function(x){return arguments.length?(e=typeof x=="function"?x:Qa(x),d):e},d.subject=function(x){return arguments.length?(n=typeof x=="function"?x:Qa(x),d):n},d.touchable=function(x){return arguments.length?(i=typeof x=="function"?x:Qa(!!x),d):i},d.on=function(){var x=o.on.apply(o,arguments);return x===o?d:x},d.clickDistance=function(x){return arguments.length?(f=(x=+x)*x,d):Math.sqrt(f)},d}function gh(t,e,n){t.prototype=e.prototype=n,n.constructor=t}function qv(t,e){var n=Object.create(t.prototype);for(var i in e)n[i]=e[i];return n}function ba(){}var ea=.7,Zl=1/ea,$o="\\s*([+-]?\\d+)\\s*",ta="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",gi="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",F2=/^#([0-9a-f]{3,8})$/,U2=new RegExp(`^rgb\\(${$o},${$o},${$o}\\)$`),O2=new RegExp(`^rgb\\(${gi},${gi},${gi}\\)$`),B2=new RegExp(`^rgba\\(${$o},${$o},${$o},${ta}\\)$`),k2=new RegExp(`^rgba\\(${gi},${gi},${gi},${ta}\\)$`),z2=new RegExp(`^hsl\\(${ta},${gi},${gi}\\)$`),V2=new RegExp(`^hsla\\(${ta},${gi},${gi},${ta}\\)$`),Sm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};gh(ba,uo,{copy(t){return Object.assign(new this.constructor,this,t)},displayable(){return this.rgb().displayable()},hex:Mm,formatHex:Mm,formatHex8:H2,formatHsl:$2,formatRgb:wm,toString:wm});function Mm(){return this.rgb().formatHex()}function H2(){return this.rgb().formatHex8()}function $2(){return Kv(this).formatHsl()}function wm(){return this.rgb().formatRgb()}function uo(t){var e,n;return t=(t+"").trim().toLowerCase(),(e=F2.exec(t))?(n=e[1].length,e=parseInt(e[1],16),n===6?Em(e):n===3?new yn(e>>8&15|e>>4&240,e>>4&15|e&240,(e&15)<<4|e&15,1):n===8?el(e>>24&255,e>>16&255,e>>8&255,(e&255)/255):n===4?el(e>>12&15|e>>8&240,e>>8&15|e>>4&240,e>>4&15|e&240,((e&15)<<4|e&15)/255):null):(e=U2.exec(t))?new yn(e[1],e[2],e[3],1):(e=O2.exec(t))?new yn(e[1]*255/100,e[2]*255/100,e[3]*255/100,1):(e=B2.exec(t))?el(e[1],e[2],e[3],e[4]):(e=k2.exec(t))?el(e[1]*255/100,e[2]*255/100,e[3]*255/100,e[4]):(e=z2.exec(t))?Cm(e[1],e[2]/100,e[3]/100,1):(e=V2.exec(t))?Cm(e[1],e[2]/100,e[3]/100,e[4]):Sm.hasOwnProperty(t)?Em(Sm[t]):t==="transparent"?new yn(NaN,NaN,NaN,0):null}function Em(t){return new yn(t>>16&255,t>>8&255,t&255,1)}function el(t,e,n,i){return i<=0&&(t=e=n=NaN),new yn(t,e,n,i)}function G2(t){return t instanceof ba||(t=uo(t)),t?(t=t.rgb(),new yn(t.r,t.g,t.b,t.opacity)):new yn}function hd(t,e,n,i){return arguments.length===1?G2(t):new yn(t,e,n,i??1)}function yn(t,e,n,i){this.r=+t,this.g=+e,this.b=+n,this.opacity=+i}gh(yn,hd,qv(ba,{brighter(t){return t=t==null?Zl:Math.pow(Zl,t),new yn(this.r*t,this.g*t,this.b*t,this.opacity)},darker(t){return t=t==null?ea:Math.pow(ea,t),new yn(this.r*t,this.g*t,this.b*t,this.opacity)},rgb(){return this},clamp(){return new yn(ro(this.r),ro(this.g),ro(this.b),jl(this.opacity))},displayable(){return-.5<=this.r&&this.r<255.5&&-.5<=this.g&&this.g<255.5&&-.5<=this.b&&this.b<255.5&&0<=this.opacity&&this.opacity<=1},hex:Tm,formatHex:Tm,formatHex8:W2,formatRgb:Am,toString:Am}));function Tm(){return`#${Qr(this.r)}${Qr(this.g)}${Qr(this.b)}`}function W2(){return`#${Qr(this.r)}${Qr(this.g)}${Qr(this.b)}${Qr((isNaN(this.opacity)?1:this.opacity)*255)}`}function Am(){const t=jl(this.opacity);return`${t===1?"rgb(":"rgba("}${ro(this.r)}, ${ro(this.g)}, ${ro(this.b)}${t===1?")":`, ${t})`}`}function jl(t){return isNaN(t)?1:Math.max(0,Math.min(1,t))}function ro(t){return Math.max(0,Math.min(255,Math.round(t)||0))}function Qr(t){return t=ro(t),(t<16?"0":"")+t.toString(16)}function Cm(t,e,n,i){return i<=0?t=e=n=NaN:n<=0||n>=1?t=e=NaN:e<=0&&(t=NaN),new Wn(t,e,n,i)}function Kv(t){if(t instanceof Wn)return new Wn(t.h,t.s,t.l,t.opacity);if(t instanceof ba||(t=uo(t)),!t)return new Wn;if(t instanceof Wn)return t;t=t.rgb();var e=t.r/255,n=t.g/255,i=t.b/255,r=Math.min(e,n,i),o=Math.max(e,n,i),s=NaN,a=o-r,l=(o+r)/2;return a?(e===o?s=(n-i)/a+(n<i)*6:n===o?s=(i-e)/a+2:s=(e-n)/a+4,a/=l<.5?o+r:2-o-r,s*=60):a=l>0&&l<1?0:s,new Wn(s,a,l,t.opacity)}function X2(t,e,n,i){return arguments.length===1?Kv(t):new Wn(t,e,n,i??1)}function Wn(t,e,n,i){this.h=+t,this.s=+e,this.l=+n,this.opacity=+i}gh(Wn,X2,qv(ba,{brighter(t){return t=t==null?Zl:Math.pow(Zl,t),new Wn(this.h,this.s,this.l*t,this.opacity)},darker(t){return t=t==null?ea:Math.pow(ea,t),new Wn(this.h,this.s,this.l*t,this.opacity)},rgb(){var t=this.h%360+(this.h<0)*360,e=isNaN(t)||isNaN(this.s)?0:this.s,n=this.l,i=n+(n<.5?n:1-n)*e,r=2*n-i;return new yn(Gc(t>=240?t-240:t+120,r,i),Gc(t,r,i),Gc(t<120?t+240:t-120,r,i),this.opacity)},clamp(){return new Wn(Rm(this.h),tl(this.s),tl(this.l),jl(this.opacity))},displayable(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1},formatHsl(){const t=jl(this.opacity);return`${t===1?"hsl(":"hsla("}${Rm(this.h)}, ${tl(this.s)*100}%, ${tl(this.l)*100}%${t===1?")":`, ${t})`}`}}));function Rm(t){return t=(t||0)%360,t<0?t+360:t}function tl(t){return Math.max(0,Math.min(1,t||0))}function Gc(t,e,n){return(t<60?e+(n-e)*t/60:t<180?n:t<240?e+(n-e)*(240-t)/60:e)*255}const vh=t=>()=>t;function Y2(t,e){return function(n){return t+n*e}}function q2(t,e,n){return t=Math.pow(t,n),e=Math.pow(e,n)-t,n=1/n,function(i){return Math.pow(t+i*e,n)}}function K2(t){return(t=+t)==1?Zv:function(e,n){return n-e?q2(e,n,t):vh(isNaN(e)?n:e)}}function Zv(t,e){var n=e-t;return n?Y2(t,n):vh(isNaN(t)?e:t)}const Jl=(function t(e){var n=K2(e);function i(r,o){var s=n((r=hd(r)).r,(o=hd(o)).r),a=n(r.g,o.g),l=n(r.b,o.b),u=Zv(r.opacity,o.opacity);return function(c){return r.r=s(c),r.g=a(c),r.b=l(c),r.opacity=u(c),r+""}}return i.gamma=t,i})(1);function Z2(t,e){e||(e=[]);var n=t?Math.min(e.length,t.length):0,i=e.slice(),r;return function(o){for(r=0;r<n;++r)i[r]=t[r]*(1-o)+e[r]*o;return i}}function j2(t){return ArrayBuffer.isView(t)&&!(t instanceof DataView)}function J2(t,e){var n=e?e.length:0,i=t?Math.min(n,t.length):0,r=new Array(i),o=new Array(n),s;for(s=0;s<i;++s)r[s]=zs(t[s],e[s]);for(;s<n;++s)o[s]=e[s];return function(a){for(s=0;s<i;++s)o[s]=r[s](a);return o}}function Q2(t,e){var n=new Date;return t=+t,e=+e,function(i){return n.setTime(t*(1-i)+e*i),n}}function li(t,e){return t=+t,e=+e,function(n){return t*(1-n)+e*n}}function eR(t,e){var n={},i={},r;(t===null||typeof t!="object")&&(t={}),(e===null||typeof e!="object")&&(e={});for(r in e)r in t?n[r]=zs(t[r],e[r]):i[r]=e[r];return function(o){for(r in n)i[r]=n[r](o);return i}}var pd=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,Wc=new RegExp(pd.source,"g");function tR(t){return function(){return t}}function nR(t){return function(e){return t(e)+""}}function jv(t,e){var n=pd.lastIndex=Wc.lastIndex=0,i,r,o,s=-1,a=[],l=[];for(t=t+"",e=e+"";(i=pd.exec(t))&&(r=Wc.exec(e));)(o=r.index)>n&&(o=e.slice(n,o),a[s]?a[s]+=o:a[++s]=o),(i=i[0])===(r=r[0])?a[s]?a[s]+=r:a[++s]=r:(a[++s]=null,l.push({i:s,x:li(i,r)})),n=Wc.lastIndex;return n<e.length&&(o=e.slice(n),a[s]?a[s]+=o:a[++s]=o),a.length<2?l[0]?nR(l[0].x):tR(e):(e=l.length,function(u){for(var c=0,f;c<e;++c)a[(f=l[c]).i]=f.x(u);return a.join("")})}function zs(t,e){var n=typeof e,i;return e==null||n==="boolean"?vh(e):(n==="number"?li:n==="string"?(i=uo(e))?(e=i,Jl):jv:e instanceof uo?Jl:e instanceof Date?Q2:j2(e)?Z2:Array.isArray(e)?J2:typeof e.valueOf!="function"&&typeof e.toString!="function"||isNaN(e)?eR:li)(t,e)}var Im=180/Math.PI,md={translateX:0,translateY:0,rotate:0,skewX:0,scaleX:1,scaleY:1};function Jv(t,e,n,i,r,o){var s,a,l;return(s=Math.sqrt(t*t+e*e))&&(t/=s,e/=s),(l=t*n+e*i)&&(n-=t*l,i-=e*l),(a=Math.sqrt(n*n+i*i))&&(n/=a,i/=a,l/=a),t*i<e*n&&(t=-t,e=-e,l=-l,s=-s),{translateX:r,translateY:o,rotate:Math.atan2(e,t)*Im,skewX:Math.atan(l)*Im,scaleX:s,scaleY:a}}var nl;function iR(t){const e=new(typeof DOMMatrix=="function"?DOMMatrix:WebKitCSSMatrix)(t+"");return e.isIdentity?md:Jv(e.a,e.b,e.c,e.d,e.e,e.f)}function rR(t){return t==null||(nl||(nl=document.createElementNS("http://www.w3.org/2000/svg","g")),nl.setAttribute("transform",t),!(t=nl.transform.baseVal.consolidate()))?md:(t=t.matrix,Jv(t.a,t.b,t.c,t.d,t.e,t.f))}function Qv(t,e,n,i){function r(u){return u.length?u.pop()+" ":""}function o(u,c,f,d,h,g){if(u!==f||c!==d){var _=h.push("translate(",null,e,null,n);g.push({i:_-4,x:li(u,f)},{i:_-2,x:li(c,d)})}else(f||d)&&h.push("translate("+f+e+d+n)}function s(u,c,f,d){u!==c?(u-c>180?c+=360:c-u>180&&(u+=360),d.push({i:f.push(r(f)+"rotate(",null,i)-2,x:li(u,c)})):c&&f.push(r(f)+"rotate("+c+i)}function a(u,c,f,d){u!==c?d.push({i:f.push(r(f)+"skewX(",null,i)-2,x:li(u,c)}):c&&f.push(r(f)+"skewX("+c+i)}function l(u,c,f,d,h,g){if(u!==f||c!==d){var _=h.push(r(h)+"scale(",null,",",null,")");g.push({i:_-4,x:li(u,f)},{i:_-2,x:li(c,d)})}else(f!==1||d!==1)&&h.push(r(h)+"scale("+f+","+d+")")}return function(u,c){var f=[],d=[];return u=t(u),c=t(c),o(u.translateX,u.translateY,c.translateX,c.translateY,f,d),s(u.rotate,c.rotate,f,d),a(u.skewX,c.skewX,f,d),l(u.scaleX,u.scaleY,c.scaleX,c.scaleY,f,d),u=c=null,function(h){for(var g=-1,_=d.length,m;++g<_;)f[(m=d[g]).i]=m.x(h);return f.join("")}}}var oR=Qv(iR,"px, ","px)","deg)"),sR=Qv(rR,", ",")",")"),aR=1e-12;function Pm(t){return((t=Math.exp(t))+1/t)/2}function lR(t){return((t=Math.exp(t))-1/t)/2}function uR(t){return((t=Math.exp(2*t))-1)/(t+1)}const wl=(function t(e,n,i){function r(o,s){var a=o[0],l=o[1],u=o[2],c=s[0],f=s[1],d=s[2],h=c-a,g=f-l,_=h*h+g*g,m,p;if(_<aR)p=Math.log(d/u)/e,m=function(z){return[a+z*h,l+z*g,u*Math.exp(e*z*p)]};else{var b=Math.sqrt(_),S=(d*d-u*u+i*_)/(2*u*n*b),x=(d*d-u*u-i*_)/(2*d*n*b),D=Math.log(Math.sqrt(S*S+1)-S),O=Math.log(Math.sqrt(x*x+1)-x);p=(O-D)/e,m=function(z){var y=z*p,M=Pm(D),N=u/(n*b)*(M*uR(e*y+D)-lR(D));return[a+N*h,l+N*g,u*M/Pm(e*y+D)]}}return m.duration=p*1e3*e/Math.SQRT2,m}return r.rho=function(o){var s=Math.max(.001,+o),a=s*s,l=a*a;return t(s,a,l)},r})(Math.SQRT2,2,4);var ts=0,As=0,xs=0,e_=1e3,Ql,Cs,eu=0,co=0,Fu=0,na=typeof performance=="object"&&performance.now?performance:Date,t_=typeof window=="object"&&window.requestAnimationFrame?window.requestAnimationFrame.bind(window):function(t){setTimeout(t,17)};function _h(){return co||(t_(cR),co=na.now()+Fu)}function cR(){co=0}function tu(){this._call=this._time=this._next=null}tu.prototype=n_.prototype={constructor:tu,restart:function(t,e,n){if(typeof t!="function")throw new TypeError("callback is not a function");n=(n==null?_h():+n)+(e==null?0:+e),!this._next&&Cs!==this&&(Cs?Cs._next=this:Ql=this,Cs=this),this._call=t,this._time=n,gd()},stop:function(){this._call&&(this._call=null,this._time=1/0,gd())}};function n_(t,e,n){var i=new tu;return i.restart(t,e,n),i}function fR(){_h(),++ts;for(var t=Ql,e;t;)(e=co-t._time)>=0&&t._call.call(void 0,e),t=t._next;--ts}function Nm(){co=(eu=na.now())+Fu,ts=As=0;try{fR()}finally{ts=0,hR(),co=0}}function dR(){var t=na.now(),e=t-eu;e>e_&&(Fu-=e,eu=t)}function hR(){for(var t,e=Ql,n,i=1/0;e;)e._call?(i>e._time&&(i=e._time),t=e,e=e._next):(n=e._next,e._next=null,e=t?t._next=n:Ql=n);Cs=t,gd(i)}function gd(t){if(!ts){As&&(As=clearTimeout(As));var e=t-co;e>24?(t<1/0&&(As=setTimeout(Nm,t-na.now()-Fu)),xs&&(xs=clearInterval(xs))):(xs||(eu=na.now(),xs=setInterval(dR,e_)),ts=1,t_(Nm))}}function Dm(t,e,n){var i=new tu;return e=e==null?0:+e,i.restart(r=>{i.stop(),t(r+e)},e,n),i}var pR=Du("start","end","cancel","interrupt"),mR=[],i_=0,Lm=1,vd=2,El=3,Fm=4,_d=5,Tl=6;function Uu(t,e,n,i,r,o){var s=t.__transition;if(!s)t.__transition={};else if(n in s)return;gR(t,n,{name:e,index:i,group:r,on:pR,tween:mR,time:o.time,delay:o.delay,duration:o.duration,ease:o.ease,timer:null,state:i_})}function yh(t,e){var n=jn(t,e);if(n.state>i_)throw new Error("too late; already scheduled");return n}function bi(t,e){var n=jn(t,e);if(n.state>El)throw new Error("too late; already running");return n}function jn(t,e){var n=t.__transition;if(!n||!(n=n[e]))throw new Error("transition not found");return n}function gR(t,e,n){var i=t.__transition,r;i[e]=n,n.timer=n_(o,0,n.time);function o(u){n.state=Lm,n.timer.restart(s,n.delay,n.time),n.delay<=u&&s(u-n.delay)}function s(u){var c,f,d,h;if(n.state!==Lm)return l();for(c in i)if(h=i[c],h.name===n.name){if(h.state===El)return Dm(s);h.state===Fm?(h.state=Tl,h.timer.stop(),h.on.call("interrupt",t,t.__data__,h.index,h.group),delete i[c]):+c<e&&(h.state=Tl,h.timer.stop(),h.on.call("cancel",t,t.__data__,h.index,h.group),delete i[c])}if(Dm(function(){n.state===El&&(n.state=Fm,n.timer.restart(a,n.delay,n.time),a(u))}),n.state=vd,n.on.call("start",t,t.__data__,n.index,n.group),n.state===vd){for(n.state=El,r=new Array(d=n.tween.length),c=0,f=-1;c<d;++c)(h=n.tween[c].value.call(t,t.__data__,n.index,n.group))&&(r[++f]=h);r.length=f+1}}function a(u){for(var c=u<n.duration?n.ease.call(null,u/n.duration):(n.timer.restart(l),n.state=_d,1),f=-1,d=r.length;++f<d;)r[f].call(t,c);n.state===_d&&(n.on.call("end",t,t.__data__,n.index,n.group),l())}function l(){n.state=Tl,n.timer.stop(),delete i[e];for(var u in i)return;delete t.__transition}}function Al(t,e){var n=t.__transition,i,r,o=!0,s;if(n){e=e==null?null:e+"";for(s in n){if((i=n[s]).name!==e){o=!1;continue}r=i.state>vd&&i.state<_d,i.state=Tl,i.timer.stop(),i.on.call(r?"interrupt":"cancel",t,t.__data__,i.index,i.group),delete n[s]}o&&delete t.__transition}}function vR(t){return this.each(function(){Al(this,t)})}function _R(t,e){var n,i;return function(){var r=bi(this,t),o=r.tween;if(o!==n){i=n=o;for(var s=0,a=i.length;s<a;++s)if(i[s].name===e){i=i.slice(),i.splice(s,1);break}}r.tween=i}}function yR(t,e,n){var i,r;if(typeof n!="function")throw new Error;return function(){var o=bi(this,t),s=o.tween;if(s!==i){r=(i=s).slice();for(var a={name:e,value:n},l=0,u=r.length;l<u;++l)if(r[l].name===e){r[l]=a;break}l===u&&r.push(a)}o.tween=r}}function xR(t,e){var n=this._id;if(t+="",arguments.length<2){for(var i=jn(this.node(),n).tween,r=0,o=i.length,s;r<o;++r)if((s=i[r]).name===t)return s.value;return null}return this.each((e==null?_R:yR)(n,t,e))}function xh(t,e,n){var i=t._id;return t.each(function(){var r=bi(this,i);(r.value||(r.value={}))[e]=n.apply(this,arguments)}),function(r){return jn(r,i).value[e]}}function r_(t,e){var n;return(typeof e=="number"?li:e instanceof uo?Jl:(n=uo(e))?(e=n,Jl):jv)(t,e)}function bR(t){return function(){this.removeAttribute(t)}}function SR(t){return function(){this.removeAttributeNS(t.space,t.local)}}function MR(t,e,n){var i,r=n+"",o;return function(){var s=this.getAttribute(t);return s===r?null:s===i?o:o=e(i=s,n)}}function wR(t,e,n){var i,r=n+"",o;return function(){var s=this.getAttributeNS(t.space,t.local);return s===r?null:s===i?o:o=e(i=s,n)}}function ER(t,e,n){var i,r,o;return function(){var s,a=n(this),l;return a==null?void this.removeAttribute(t):(s=this.getAttribute(t),l=a+"",s===l?null:s===i&&l===r?o:(r=l,o=e(i=s,a)))}}function TR(t,e,n){var i,r,o;return function(){var s,a=n(this),l;return a==null?void this.removeAttributeNS(t.space,t.local):(s=this.getAttributeNS(t.space,t.local),l=a+"",s===l?null:s===i&&l===r?o:(r=l,o=e(i=s,a)))}}function AR(t,e){var n=Lu(t),i=n==="transform"?sR:r_;return this.attrTween(t,typeof e=="function"?(n.local?TR:ER)(n,i,xh(this,"attr."+t,e)):e==null?(n.local?SR:bR)(n):(n.local?wR:MR)(n,i,e))}function CR(t,e){return function(n){this.setAttribute(t,e.call(this,n))}}function RR(t,e){return function(n){this.setAttributeNS(t.space,t.local,e.call(this,n))}}function IR(t,e){var n,i;function r(){var o=e.apply(this,arguments);return o!==i&&(n=(i=o)&&RR(t,o)),n}return r._value=e,r}function PR(t,e){var n,i;function r(){var o=e.apply(this,arguments);return o!==i&&(n=(i=o)&&CR(t,o)),n}return r._value=e,r}function NR(t,e){var n="attr."+t;if(arguments.length<2)return(n=this.tween(n))&&n._value;if(e==null)return this.tween(n,null);if(typeof e!="function")throw new Error;var i=Lu(t);return this.tween(n,(i.local?IR:PR)(i,e))}function DR(t,e){return function(){yh(this,t).delay=+e.apply(this,arguments)}}function LR(t,e){return e=+e,function(){yh(this,t).delay=e}}function FR(t){var e=this._id;return arguments.length?this.each((typeof t=="function"?DR:LR)(e,t)):jn(this.node(),e).delay}function UR(t,e){return function(){bi(this,t).duration=+e.apply(this,arguments)}}function OR(t,e){return e=+e,function(){bi(this,t).duration=e}}function BR(t){var e=this._id;return arguments.length?this.each((typeof t=="function"?UR:OR)(e,t)):jn(this.node(),e).duration}function kR(t,e){if(typeof e!="function")throw new Error;return function(){bi(this,t).ease=e}}function zR(t){var e=this._id;return arguments.length?this.each(kR(e,t)):jn(this.node(),e).ease}function VR(t,e){return function(){var n=e.apply(this,arguments);if(typeof n!="function")throw new Error;bi(this,t).ease=n}}function HR(t){if(typeof t!="function")throw new Error;return this.each(VR(this._id,t))}function $R(t){typeof t!="function"&&(t=Uv(t));for(var e=this._groups,n=e.length,i=new Array(n),r=0;r<n;++r)for(var o=e[r],s=o.length,a=i[r]=[],l,u=0;u<s;++u)(l=o[u])&&t.call(l,l.__data__,u,o)&&a.push(l);return new er(i,this._parents,this._name,this._id)}function GR(t){if(t._id!==this._id)throw new Error;for(var e=this._groups,n=t._groups,i=e.length,r=n.length,o=Math.min(i,r),s=new Array(i),a=0;a<o;++a)for(var l=e[a],u=n[a],c=l.length,f=s[a]=new Array(c),d,h=0;h<c;++h)(d=l[h]||u[h])&&(f[h]=d);for(;a<i;++a)s[a]=e[a];return new er(s,this._parents,this._name,this._id)}function WR(t){return(t+"").trim().split(/^|\s+/).every(function(e){var n=e.indexOf(".");return n>=0&&(e=e.slice(0,n)),!e||e==="start"})}function XR(t,e,n){var i,r,o=WR(e)?yh:bi;return function(){var s=o(this,t),a=s.on;a!==i&&(r=(i=a).copy()).on(e,n),s.on=r}}function YR(t,e){var n=this._id;return arguments.length<2?jn(this.node(),n).on.on(t):this.each(XR(n,t,e))}function qR(t){return function(){var e=this.parentNode;for(var n in this.__transition)if(+n!==t)return;e&&e.removeChild(this)}}function KR(){return this.on("end.remove",qR(this._id))}function ZR(t){var e=this._name,n=this._id;typeof t!="function"&&(t=ph(t));for(var i=this._groups,r=i.length,o=new Array(r),s=0;s<r;++s)for(var a=i[s],l=a.length,u=o[s]=new Array(l),c,f,d=0;d<l;++d)(c=a[d])&&(f=t.call(c,c.__data__,d,a))&&("__data__"in c&&(f.__data__=c.__data__),u[d]=f,Uu(u[d],e,n,d,u,jn(c,n)));return new er(o,this._parents,e,n)}function jR(t){var e=this._name,n=this._id;typeof t!="function"&&(t=Fv(t));for(var i=this._groups,r=i.length,o=[],s=[],a=0;a<r;++a)for(var l=i[a],u=l.length,c,f=0;f<u;++f)if(c=l[f]){for(var d=t.call(c,c.__data__,f,l),h,g=jn(c,n),_=0,m=d.length;_<m;++_)(h=d[_])&&Uu(h,e,n,_,d,g);o.push(d),s.push(c)}return new er(o,s,e,n)}var JR=xa.prototype.constructor;function QR(){return new JR(this._groups,this._parents)}function e3(t,e){var n,i,r;return function(){var o=es(this,t),s=(this.style.removeProperty(t),es(this,t));return o===s?null:o===n&&s===i?r:r=e(n=o,i=s)}}function o_(t){return function(){this.style.removeProperty(t)}}function t3(t,e,n){var i,r=n+"",o;return function(){var s=es(this,t);return s===r?null:s===i?o:o=e(i=s,n)}}function n3(t,e,n){var i,r,o;return function(){var s=es(this,t),a=n(this),l=a+"";return a==null&&(l=a=(this.style.removeProperty(t),es(this,t))),s===l?null:s===i&&l===r?o:(r=l,o=e(i=s,a))}}function i3(t,e){var n,i,r,o="style."+e,s="end."+o,a;return function(){var l=bi(this,t),u=l.on,c=l.value[o]==null?a||(a=o_(e)):void 0;(u!==n||r!==c)&&(i=(n=u).copy()).on(s,r=c),l.on=i}}function r3(t,e,n){var i=(t+="")=="transform"?oR:r_;return e==null?this.styleTween(t,e3(t,i)).on("end.style."+t,o_(t)):typeof e=="function"?this.styleTween(t,n3(t,i,xh(this,"style."+t,e))).each(i3(this._id,t)):this.styleTween(t,t3(t,i,e),n).on("end.style."+t,null)}function o3(t,e,n){return function(i){this.style.setProperty(t,e.call(this,i),n)}}function s3(t,e,n){var i,r;function o(){var s=e.apply(this,arguments);return s!==r&&(i=(r=s)&&o3(t,s,n)),i}return o._value=e,o}function a3(t,e,n){var i="style."+(t+="");if(arguments.length<2)return(i=this.tween(i))&&i._value;if(e==null)return this.tween(i,null);if(typeof e!="function")throw new Error;return this.tween(i,s3(t,e,n??""))}function l3(t){return function(){this.textContent=t}}function u3(t){return function(){var e=t(this);this.textContent=e??""}}function c3(t){return this.tween("text",typeof t=="function"?u3(xh(this,"text",t)):l3(t==null?"":t+""))}function f3(t){return function(e){this.textContent=t.call(this,e)}}function d3(t){var e,n;function i(){var r=t.apply(this,arguments);return r!==n&&(e=(n=r)&&f3(r)),e}return i._value=t,i}function h3(t){var e="text";if(arguments.length<1)return(e=this.tween(e))&&e._value;if(t==null)return this.tween(e,null);if(typeof t!="function")throw new Error;return this.tween(e,d3(t))}function p3(){for(var t=this._name,e=this._id,n=s_(),i=this._groups,r=i.length,o=0;o<r;++o)for(var s=i[o],a=s.length,l,u=0;u<a;++u)if(l=s[u]){var c=jn(l,e);Uu(l,t,n,u,s,{time:c.time+c.delay+c.duration,delay:0,duration:c.duration,ease:c.ease})}return new er(i,this._parents,t,n)}function m3(){var t,e,n=this,i=n._id,r=n.size();return new Promise(function(o,s){var a={value:s},l={value:function(){--r===0&&o()}};n.each(function(){var u=bi(this,i),c=u.on;c!==t&&(e=(t=c).copy(),e._.cancel.push(a),e._.interrupt.push(a),e._.end.push(l)),u.on=e}),r===0&&o()})}var g3=0;function er(t,e,n,i){this._groups=t,this._parents=e,this._name=n,this._id=i}function s_(){return++g3}var Pi=xa.prototype;er.prototype={constructor:er,select:ZR,selectAll:jR,selectChild:Pi.selectChild,selectChildren:Pi.selectChildren,filter:$R,merge:GR,selection:QR,transition:p3,call:Pi.call,nodes:Pi.nodes,node:Pi.node,size:Pi.size,empty:Pi.empty,each:Pi.each,on:YR,attr:AR,attrTween:NR,style:r3,styleTween:a3,text:c3,textTween:h3,remove:KR,tween:xR,delay:FR,duration:BR,ease:zR,easeVarying:HR,end:m3,[Symbol.iterator]:Pi[Symbol.iterator]};function v3(t){return((t*=2)<=1?t*t*t:(t-=2)*t*t+2)/2}var _3={time:null,delay:0,duration:250,ease:v3};function y3(t,e){for(var n;!(n=t.__transition)||!(n=n[e]);)if(!(t=t.parentNode))throw new Error(`transition ${e} not found`);return n}function x3(t){var e,n;t instanceof er?(e=t._id,t=t._name):(e=s_(),(n=_3).time=_h(),t=t==null?null:t+"");for(var i=this._groups,r=i.length,o=0;o<r;++o)for(var s=i[o],a=s.length,l,u=0;u<a;++u)(l=s[u])&&Uu(l,t,e,u,s,n||y3(l,e));return new er(i,this._parents,t,e)}xa.prototype.interrupt=vR;xa.prototype.transition=x3;const il=t=>()=>t;function b3(t,{sourceEvent:e,target:n,transform:i,dispatch:r}){Object.defineProperties(this,{type:{value:t,enumerable:!0,configurable:!0},sourceEvent:{value:e,enumerable:!0,configurable:!0},target:{value:n,enumerable:!0,configurable:!0},transform:{value:i,enumerable:!0,configurable:!0},_:{value:r}})}function zi(t,e,n){this.k=t,this.x=e,this.y=n}zi.prototype={constructor:zi,scale:function(t){return t===1?this:new zi(this.k*t,this.x,this.y)},translate:function(t,e){return t===0&e===0?this:new zi(this.k,this.x+this.k*t,this.y+this.k*e)},apply:function(t){return[t[0]*this.k+this.x,t[1]*this.k+this.y]},applyX:function(t){return t*this.k+this.x},applyY:function(t){return t*this.k+this.y},invert:function(t){return[(t[0]-this.x)/this.k,(t[1]-this.y)/this.k]},invertX:function(t){return(t-this.x)/this.k},invertY:function(t){return(t-this.y)/this.k},rescaleX:function(t){return t.copy().domain(t.range().map(this.invertX,this).map(t.invert,t))},rescaleY:function(t){return t.copy().domain(t.range().map(this.invertY,this).map(t.invert,t))},toString:function(){return"translate("+this.x+","+this.y+") scale("+this.k+")"}};var ns=new zi(1,0,0);zi.prototype;function Xc(t){t.stopImmediatePropagation()}function bs(t){t.preventDefault(),t.stopImmediatePropagation()}function S3(t){return(!t.ctrlKey||t.type==="wheel")&&!t.button}function M3(){var t=this;return t instanceof SVGElement?(t=t.ownerSVGElement||t,t.hasAttribute("viewBox")?(t=t.viewBox.baseVal,[[t.x,t.y],[t.x+t.width,t.y+t.height]]):[[0,0],[t.width.baseVal.value,t.height.baseVal.value]]):[[0,0],[t.clientWidth,t.clientHeight]]}function Um(){return this.__zoom||ns}function w3(t){return-t.deltaY*(t.deltaMode===1?.05:t.deltaMode?1:.002)*(t.ctrlKey?10:1)}function E3(){return navigator.maxTouchPoints||"ontouchstart"in this}function T3(t,e,n){var i=t.invertX(e[0][0])-n[0][0],r=t.invertX(e[1][0])-n[1][0],o=t.invertY(e[0][1])-n[0][1],s=t.invertY(e[1][1])-n[1][1];return t.translate(r>i?(i+r)/2:Math.min(0,i)||Math.max(0,r),s>o?(o+s)/2:Math.min(0,o)||Math.max(0,s))}function A3(){var t=S3,e=M3,n=T3,i=w3,r=E3,o=[0,1/0],s=[[-1/0,-1/0],[1/0,1/0]],a=250,l=wl,u=Du("start","zoom","end"),c,f,d,h=500,g=150,_=0,m=10;function p(v){v.property("__zoom",Um).on("wheel.zoom",y,{passive:!1}).on("mousedown.zoom",M).on("dblclick.zoom",N).filter(r).on("touchstart.zoom",C).on("touchmove.zoom",P).on("touchend.zoom touchcancel.zoom",B).style("-webkit-tap-highlight-color","rgba(0,0,0,0)")}p.transform=function(v,A,E,I){var V=v.selection?v.selection():v;V.property("__zoom",Um),v!==V?D(v,A,E,I):V.interrupt().each(function(){O(this,arguments).event(I).start().zoom(null,typeof A=="function"?A.apply(this,arguments):A).end()})},p.scaleBy=function(v,A,E,I){p.scaleTo(v,function(){var V=this.__zoom.k,W=typeof A=="function"?A.apply(this,arguments):A;return V*W},E,I)},p.scaleTo=function(v,A,E,I){p.transform(v,function(){var V=e.apply(this,arguments),W=this.__zoom,q=E==null?x(V):typeof E=="function"?E.apply(this,arguments):E,$=W.invert(q),K=typeof A=="function"?A.apply(this,arguments):A;return n(S(b(W,K),q,$),V,s)},E,I)},p.translateBy=function(v,A,E,I){p.transform(v,function(){return n(this.__zoom.translate(typeof A=="function"?A.apply(this,arguments):A,typeof E=="function"?E.apply(this,arguments):E),e.apply(this,arguments),s)},null,I)},p.translateTo=function(v,A,E,I,V){p.transform(v,function(){var W=e.apply(this,arguments),q=this.__zoom,$=I==null?x(W):typeof I=="function"?I.apply(this,arguments):I;return n(ns.translate($[0],$[1]).scale(q.k).translate(typeof A=="function"?-A.apply(this,arguments):-A,typeof E=="function"?-E.apply(this,arguments):-E),W,s)},I,V)};function b(v,A){return A=Math.max(o[0],Math.min(o[1],A)),A===v.k?v:new zi(A,v.x,v.y)}function S(v,A,E){var I=A[0]-E[0]*v.k,V=A[1]-E[1]*v.k;return I===v.x&&V===v.y?v:new zi(v.k,I,V)}function x(v){return[(+v[0][0]+ +v[1][0])/2,(+v[0][1]+ +v[1][1])/2]}function D(v,A,E,I){v.on("start.zoom",function(){O(this,arguments).event(I).start()}).on("interrupt.zoom end.zoom",function(){O(this,arguments).event(I).end()}).tween("zoom",function(){var V=this,W=arguments,q=O(V,W).event(I),$=e.apply(V,W),K=E==null?x($):typeof E=="function"?E.apply(V,W):E,ae=Math.max($[1][0]-$[0][0],$[1][1]-$[0][1]),ve=V.__zoom,pe=typeof A=="function"?A.apply(V,W):A,Z=l(ve.invert(K).concat(ae/ve.k),pe.invert(K).concat(ae/pe.k));return function(ne){if(ne===1)ne=pe;else{var le=Z(ne),xe=ae/le[2];ne=new zi(xe,K[0]-le[0]*xe,K[1]-le[1]*xe)}q.zoom(null,ne)}})}function O(v,A,E){return!E&&v.__zooming||new z(v,A)}function z(v,A){this.that=v,this.args=A,this.active=0,this.sourceEvent=null,this.extent=e.apply(v,A),this.taps=0}z.prototype={event:function(v){return v&&(this.sourceEvent=v),this},start:function(){return++this.active===1&&(this.that.__zooming=this,this.emit("start")),this},zoom:function(v,A){return this.mouse&&v!=="mouse"&&(this.mouse[1]=A.invert(this.mouse[0])),this.touch0&&v!=="touch"&&(this.touch0[1]=A.invert(this.touch0[0])),this.touch1&&v!=="touch"&&(this.touch1[1]=A.invert(this.touch1[0])),this.that.__zoom=A,this.emit("zoom"),this},end:function(){return--this.active===0&&(delete this.that.__zooming,this.emit("end")),this},emit:function(v){var A=Gn(this.that).datum();u.call(v,this.that,new b3(v,{sourceEvent:this.sourceEvent,target:p,transform:this.that.__zoom,dispatch:u}),A)}};function y(v,...A){if(!t.apply(this,arguments))return;var E=O(this,A).event(v),I=this.__zoom,V=Math.max(o[0],Math.min(o[1],I.k*Math.pow(2,i.apply(this,arguments)))),W=ri(v);if(E.wheel)(E.mouse[0][0]!==W[0]||E.mouse[0][1]!==W[1])&&(E.mouse[1]=I.invert(E.mouse[0]=W)),clearTimeout(E.wheel);else{if(I.k===V)return;E.mouse=[W,I.invert(W)],Al(this),E.start()}bs(v),E.wheel=setTimeout(q,g),E.zoom("mouse",n(S(b(I,V),E.mouse[0],E.mouse[1]),E.extent,s));function q(){E.wheel=null,E.end()}}function M(v,...A){if(d||!t.apply(this,arguments))return;var E=v.currentTarget,I=O(this,A,!0).event(v),V=Gn(v.view).on("mousemove.zoom",K,!0).on("mouseup.zoom",ae,!0),W=ri(v,E),q=v.clientX,$=v.clientY;Xv(v.view),Xc(v),I.mouse=[W,this.__zoom.invert(W)],Al(this),I.start();function K(ve){if(bs(ve),!I.moved){var pe=ve.clientX-q,Z=ve.clientY-$;I.moved=pe*pe+Z*Z>_}I.event(ve).zoom("mouse",n(S(I.that.__zoom,I.mouse[0]=ri(ve,E),I.mouse[1]),I.extent,s))}function ae(ve){V.on("mousemove.zoom mouseup.zoom",null),Yv(ve.view,I.moved),bs(ve),I.event(ve).end()}}function N(v,...A){if(t.apply(this,arguments)){var E=this.__zoom,I=ri(v.changedTouches?v.changedTouches[0]:v,this),V=E.invert(I),W=E.k*(v.shiftKey?.5:2),q=n(S(b(E,W),I,V),e.apply(this,A),s);bs(v),a>0?Gn(this).transition().duration(a).call(D,q,I,v):Gn(this).call(p.transform,q,I,v)}}function C(v,...A){if(t.apply(this,arguments)){var E=v.touches,I=E.length,V=O(this,A,v.changedTouches.length===I).event(v),W,q,$,K;for(Xc(v),q=0;q<I;++q)$=E[q],K=ri($,this),K=[K,this.__zoom.invert(K),$.identifier],V.touch0?!V.touch1&&V.touch0[2]!==K[2]&&(V.touch1=K,V.taps=0):(V.touch0=K,W=!0,V.taps=1+!!c);c&&(c=clearTimeout(c)),W&&(V.taps<2&&(f=K[0],c=setTimeout(function(){c=null},h)),Al(this),V.start())}}function P(v,...A){if(this.__zooming){var E=O(this,A).event(v),I=v.changedTouches,V=I.length,W,q,$,K;for(bs(v),W=0;W<V;++W)q=I[W],$=ri(q,this),E.touch0&&E.touch0[2]===q.identifier?E.touch0[0]=$:E.touch1&&E.touch1[2]===q.identifier&&(E.touch1[0]=$);if(q=E.that.__zoom,E.touch1){var ae=E.touch0[0],ve=E.touch0[1],pe=E.touch1[0],Z=E.touch1[1],ne=(ne=pe[0]-ae[0])*ne+(ne=pe[1]-ae[1])*ne,le=(le=Z[0]-ve[0])*le+(le=Z[1]-ve[1])*le;q=b(q,Math.sqrt(ne/le)),$=[(ae[0]+pe[0])/2,(ae[1]+pe[1])/2],K=[(ve[0]+Z[0])/2,(ve[1]+Z[1])/2]}else if(E.touch0)$=E.touch0[0],K=E.touch0[1];else return;E.zoom("touch",n(S(q,$,K),E.extent,s))}}function B(v,...A){if(this.__zooming){var E=O(this,A).event(v),I=v.changedTouches,V=I.length,W,q;for(Xc(v),d&&clearTimeout(d),d=setTimeout(function(){d=null},h),W=0;W<V;++W)q=I[W],E.touch0&&E.touch0[2]===q.identifier?delete E.touch0:E.touch1&&E.touch1[2]===q.identifier&&delete E.touch1;if(E.touch1&&!E.touch0&&(E.touch0=E.touch1,delete E.touch1),E.touch0)E.touch0[1]=this.__zoom.invert(E.touch0[0]);else if(E.end(),E.taps===2&&(q=ri(q,this),Math.hypot(f[0]-q[0],f[1]-q[1])<m)){var $=Gn(this).on("dblclick.zoom");$&&$.apply(this,arguments)}}}return p.wheelDelta=function(v){return arguments.length?(i=typeof v=="function"?v:il(+v),p):i},p.filter=function(v){return arguments.length?(t=typeof v=="function"?v:il(!!v),p):t},p.touchable=function(v){return arguments.length?(r=typeof v=="function"?v:il(!!v),p):r},p.extent=function(v){return arguments.length?(e=typeof v=="function"?v:il([[+v[0][0],+v[0][1]],[+v[1][0],+v[1][1]]]),p):e},p.scaleExtent=function(v){return arguments.length?(o[0]=+v[0],o[1]=+v[1],p):[o[0],o[1]]},p.translateExtent=function(v){return arguments.length?(s[0][0]=+v[0][0],s[1][0]=+v[1][0],s[0][1]=+v[0][1],s[1][1]=+v[1][1],p):[[s[0][0],s[0][1]],[s[1][0],s[1][1]]]},p.constrain=function(v){return arguments.length?(n=v,p):n},p.duration=function(v){return arguments.length?(a=+v,p):a},p.interpolate=function(v){return arguments.length?(l=v,p):l},p.on=function(){var v=u.on.apply(u,arguments);return v===u?p:v},p.clickDistance=function(v){return arguments.length?(_=(v=+v)*v,p):Math.sqrt(_)},p.tapDistance=function(v){return arguments.length?(m=+v,p):m},p}var He=(t=>(t.Left="left",t.Top="top",t.Right="right",t.Bottom="bottom",t))(He||{}),bh=(t=>(t.Partial="partial",t.Full="full",t))(bh||{}),qr=(t=>(t.Bezier="default",t.SimpleBezier="simple-bezier",t.Straight="straight",t.Step="step",t.SmoothStep="smoothstep",t))(qr||{}),Pr=(t=>(t.Strict="strict",t.Loose="loose",t))(Pr||{}),yd=(t=>(t.Arrow="arrow",t.ArrowClosed="arrowclosed",t))(yd||{}),Vs=(t=>(t.Free="free",t.Vertical="vertical",t.Horizontal="horizontal",t))(Vs||{});const C3=["INPUT","SELECT","TEXTAREA"],R3=typeof document<"u"?document:null;function xd(t){var e,n;const i=((n=(e=t.composedPath)==null?void 0:e.call(t))==null?void 0:n[0])||t.target,r=typeof i?.hasAttribute=="function"?i.hasAttribute("contenteditable"):!1,o=typeof i?.closest=="function"?i.closest(".nokey"):null;return C3.includes(i?.nodeName)||r||!!o}function I3(t){return t.ctrlKey||t.metaKey||t.shiftKey||t.altKey}function Om(t,e,n,i){const r=e.replace("+",`
`).replace(`

`,`
+`).split(`
`).map(s=>s.trim().toLowerCase());if(r.length===1)return t.toLowerCase()===e.toLowerCase();i||n.add(t.toLowerCase());const o=r.every((s,a)=>n.has(s)&&Array.from(n.values())[a]===r[a]);return i&&n.delete(t.toLowerCase()),o}function P3(t,e){return n=>{if(!n.code&&!n.key)return!1;const i=N3(n.code,t);return Array.isArray(t)?t.some(r=>Om(n[i],r,e,n.type==="keyup")):Om(n[i],t,e,n.type==="keyup")}}function N3(t,e){return e.includes(t)?"code":"key"}function Hs(t,e){const n=De(()=>ct(e?.target)??R3),i=Er(ct(t)===!0);let r=!1;const o=new Set;let s=l(ct(t));ft(()=>ct(t),(u,c)=>{typeof c=="boolean"&&typeof u!="boolean"&&a(),s=l(u)},{immediate:!0}),Dv(["blur","contextmenu"],a),ym((...u)=>s(...u),u=>{var c,f;const d=ct(e?.actInsideInputWithModifier)??!0,h=ct(e?.preventDefault)??!1;if(r=I3(u),(!r||r&&!d)&&xd(u))return;const _=((f=(c=u.composedPath)==null?void 0:c.call(u))==null?void 0:f[0])||u.target,m=_?.nodeName==="BUTTON"||_?.nodeName==="A";!h&&(r||!m)&&u.preventDefault(),i.value=!0},{eventName:"keydown",target:n}),ym((...u)=>s(...u),u=>{const c=ct(e?.actInsideInputWithModifier)??!0;if(i.value){if((!r||r&&!c)&&xd(u))return;r=!1,i.value=!1}},{eventName:"keyup",target:n});function a(){r=!1,o.clear(),i.value=ct(t)===!0}function l(u){return u===null?(a(),()=>!1):typeof u=="boolean"?(a(),i.value=u,()=>!1):Array.isArray(u)||typeof u=="string"?P3(u,o):u}return i}const a_="vue-flow__node-desc",l_="vue-flow__edge-desc",D3="vue-flow__aria-live",u_=["Enter"," ","Escape"],Go={ArrowUp:{x:0,y:-1},ArrowDown:{x:0,y:1},ArrowLeft:{x:-1,y:0},ArrowRight:{x:1,y:0}};function nu(t){return{...t.computedPosition||{x:0,y:0},width:t.dimensions.width||0,height:t.dimensions.height||0}}function iu(t,e){const n=Math.max(0,Math.min(t.x+t.width,e.x+e.width)-Math.max(t.x,e.x)),i=Math.max(0,Math.min(t.y+t.height,e.y+e.height)-Math.max(t.y,e.y));return Math.ceil(n*i)}function Ou(t){return{width:t.offsetWidth,height:t.offsetHeight}}function tr(t,e=0,n=1){return Math.min(Math.max(t,e),n)}function c_(t,e){return{x:tr(t.x,e[0][0],e[1][0]),y:tr(t.y,e[0][1],e[1][1])}}function Bm(t){const e=t.getRootNode();return"elementFromPoint"in e?e:window.document}function Nr(t){return t&&typeof t=="object"&&"id"in t&&"source"in t&&"target"in t}function oo(t){return t&&typeof t=="object"&&"id"in t&&"position"in t&&!Nr(t)}function Rs(t){return oo(t)&&"computedPosition"in t}function rl(t){return!Number.isNaN(t)&&Number.isFinite(t)}function L3(t){return rl(t.width)&&rl(t.height)&&rl(t.x)&&rl(t.y)}function F3(t,e,n){const i={id:t.id.toString(),type:t.type??"default",dimensions:no({width:0,height:0}),computedPosition:no({z:0,...t.position}),handleBounds:{source:[],target:[]},draggable:void 0,selectable:void 0,connectable:void 0,focusable:void 0,selected:!1,dragging:!1,resizing:!1,initialized:!1,isParent:!1,position:{x:0,y:0},data:Ht(t.data)?t.data:{},events:no(Ht(t.events)?t.events:{})};return Object.assign(e??i,t,{id:t.id.toString(),parentNode:n})}function f_(t,e,n){var i,r;const o={id:t.id.toString(),type:t.type??e?.type??"default",source:t.source.toString(),target:t.target.toString(),sourceHandle:(i=t.sourceHandle)==null?void 0:i.toString(),targetHandle:(r=t.targetHandle)==null?void 0:r.toString(),updatable:t.updatable??n?.updatable,selectable:t.selectable??n?.selectable,focusable:t.focusable??n?.focusable,data:Ht(t.data)?t.data:{},events:no(Ht(t.events)?t.events:{}),label:t.label??"",interactionWidth:t.interactionWidth??n?.interactionWidth,...n??{}};return Object.assign(e??o,t,{id:t.id.toString()})}function d_(t,e,n,i){const r=typeof t=="string"?t:t.id,o=new Set,s=i==="source"?"target":"source";for(const a of n)a[s]===r&&o.add(a[i]);return e.filter(a=>o.has(a.id))}function U3(...t){if(t.length===3){const[o,s,a]=t;return d_(o,s,a,"target")}const[e,n]=t,i=typeof e=="string"?e:e.id;return n.filter(o=>Nr(o)&&o.source===i).map(o=>n.find(s=>oo(s)&&s.id===o.target))}function O3(...t){if(t.length===3){const[o,s,a]=t;return d_(o,s,a,"source")}const[e,n]=t,i=typeof e=="string"?e:e.id;return n.filter(o=>Nr(o)&&o.target===i).map(o=>n.find(s=>oo(s)&&s.id===o.source))}function h_({source:t,sourceHandle:e,target:n,targetHandle:i}){return`vueflow__edge-${t}${e??""}-${n}${i??""}`}function B3(t,e){return e.some(n=>Nr(n)&&n.source===t.source&&n.target===t.target&&(n.sourceHandle===t.sourceHandle||!n.sourceHandle&&!t.sourceHandle)&&(n.targetHandle===t.targetHandle||!n.targetHandle&&!t.targetHandle))}function ia({x:t,y:e},{x:n,y:i,zoom:r}){return{x:t*r+n,y:e*r+i}}function ra({x:t,y:e},{x:n,y:i,zoom:r},o=!1,s=[1,1]){const a={x:(t-n)/r,y:(e-i)/r};return o?Bu(a,s):a}function p_(t,e){return{x:Math.min(t.x,e.x),y:Math.min(t.y,e.y),x2:Math.max(t.x2,e.x2),y2:Math.max(t.y2,e.y2)}}function ru({x:t,y:e,width:n,height:i}){return{x:t,y:e,x2:t+n,y2:e+i}}function m_({x:t,y:e,x2:n,y2:i}){return{x:t,y:e,width:n-t,height:i-e}}function k3(t,e){return m_(p_(ru(t),ru(e)))}function Sh(t){let e={x:Number.POSITIVE_INFINITY,y:Number.POSITIVE_INFINITY,x2:Number.NEGATIVE_INFINITY,y2:Number.NEGATIVE_INFINITY};for(let n=0;n<t.length;n++){const i=t[n];e=p_(e,ru({...i.computedPosition,...i.dimensions}))}return m_(e)}function g_(t,e,n={x:0,y:0,zoom:1},i=!1,r=!1){const o={...ra(e,n),width:e.width/n.zoom,height:e.height/n.zoom},s=[];for(const a of t){const{dimensions:l,selectable:u=!0,hidden:c=!1}=a,f=l.width??a.width??null,d=l.height??a.height??null;if(r&&!u||c)continue;const h=iu(o,nu(a)),g=f===null||d===null,_=i&&h>0,m=(f??0)*(d??0);(g||_||h>=m||a.dragging)&&s.push(a)}return s}function Kr(t,e){const n=new Set;if(typeof t=="string")n.add(t);else if(t.length>=1)for(const i of t)n.add(i.id);return e.filter(i=>n.has(i.source)||n.has(i.target))}function Lo(t,e){if(typeof t=="number")return Math.floor((e-e/(1+t))*.5);if(typeof t=="string"&&t.endsWith("px")){const n=Number.parseFloat(t);if(!Number.isNaN(n))return Math.floor(n)}if(typeof t=="string"&&t.endsWith("%")){const n=Number.parseFloat(t);if(!Number.isNaN(n))return Math.floor(e*n*.01)}return Sa(`The padding value "${t}" is invalid. Please provide a number or a string with a valid unit (px or %).`),0}function z3(t,e,n){if(typeof t=="string"||typeof t=="number"){const i=Lo(t,n),r=Lo(t,e);return{top:i,right:r,bottom:i,left:r,x:r*2,y:i*2}}if(typeof t=="object"){const i=Lo(t.top??t.y??0,n),r=Lo(t.bottom??t.y??0,n),o=Lo(t.left??t.x??0,e),s=Lo(t.right??t.x??0,e);return{top:i,right:s,bottom:r,left:o,x:o+s,y:i+r}}return{top:0,right:0,bottom:0,left:0,x:0,y:0}}function V3(t,e,n,i,r,o){const{x:s,y:a}=ia(t,{x:e,y:n,zoom:i}),{x:l,y:u}=ia({x:t.x+t.width,y:t.y+t.height},{x:e,y:n,zoom:i}),c=r-l,f=o-u;return{left:Math.floor(s),top:Math.floor(a),right:Math.floor(c),bottom:Math.floor(f)}}function km(t,e,n,i,r,o=.1){const s=z3(o,e,n),a=(e-s.x)/t.width,l=(n-s.y)/t.height,u=Math.min(a,l),c=tr(u,i,r),f=t.x+t.width/2,d=t.y+t.height/2,h=e/2-f*c,g=n/2-d*c,_=V3(t,h,g,c,e,n),m={left:Math.min(_.left-s.left,0),top:Math.min(_.top-s.top,0),right:Math.min(_.right-s.right,0),bottom:Math.min(_.bottom-s.bottom,0)};return{x:h-m.left+m.right,y:g-m.top+m.bottom,zoom:c}}function H3(t,e){return{x:e.x+t.x,y:e.y+t.y,z:(t.z>e.z?t.z:e.z)+1}}function v_(t,e){if(!t.parentNode)return!1;const n=e.get(t.parentNode);return n?n.selected?!0:v_(n,e):!1}function oa(t,e){return typeof t>"u"?"":typeof t=="string"?t:`${e?`${e}__`:""}${Object.keys(t).sort().map(i=>`${i}=${t[i]}`).join("&")}`}function bd(t){const e=t.ctrlKey&&sa()?10:1;return-t.deltaY*(t.deltaMode===1?.05:t.deltaMode?1:.002)*e}function zm(t,e,n){return t<e?tr(Math.abs(t-e),1,e)/e:t>n?-tr(Math.abs(t-n),1,e)/e:0}function __(t,e,n=15,i=40){const r=zm(t.x,i,e.width-i)*n,o=zm(t.y,i,e.height-i)*n;return[r,o]}function Yc(t,e){if(e){const n=t.position.x+t.dimensions.width-e.dimensions.width,i=t.position.y+t.dimensions.height-e.dimensions.height;if(n>0||i>0||t.position.x<0||t.position.y<0){let r={};if(typeof e.style=="function"?r={...e.style(e)}:e.style&&(r={...e.style}),r.width=r.width??`${e.dimensions.width}px`,r.height=r.height??`${e.dimensions.height}px`,n>0)if(typeof r.width=="string"){const o=Number(r.width.replace("px",""));r.width=`${o+n}px`}else r.width+=n;if(i>0)if(typeof r.height=="string"){const o=Number(r.height.replace("px",""));r.height=`${o+i}px`}else r.height+=i;if(t.position.x<0){const o=Math.abs(t.position.x);if(e.position.x=e.position.x-o,typeof r.width=="string"){const s=Number(r.width.replace("px",""));r.width=`${s+o}px`}else r.width+=o;t.position.x=0}if(t.position.y<0){const o=Math.abs(t.position.y);if(e.position.y=e.position.y-o,typeof r.height=="string"){const s=Number(r.height.replace("px",""));r.height=`${s+o}px`}else r.height+=o;t.position.y=0}e.dimensions.width=Number(r.width.toString().replace("px","")),e.dimensions.height=Number(r.height.toString().replace("px","")),typeof e.style=="function"?e.style=o=>{const s=e.style;return{...s(o),...r}}:e.style={...e.style,...r}}}}function Vm(t,e){var n,i;const r=t.filter(s=>s.type==="add"||s.type==="remove");for(const s of r)if(s.type==="add")e.findIndex(l=>l.id===s.item.id)===-1&&e.push(s.item);else if(s.type==="remove"){const a=e.findIndex(l=>l.id===s.id);a!==-1&&e.splice(a,1)}const o=e.map(s=>s.id);for(const s of e)for(const a of t)if(a.id===s.id)switch(a.type){case"select":s.selected=a.selected;break;case"position":if(Rs(s)&&(typeof a.position<"u"&&(s.position=a.position),typeof a.dragging<"u"&&(s.dragging=a.dragging),s.expandParent&&s.parentNode)){const l=e[o.indexOf(s.parentNode)];l&&Rs(l)&&Yc(s,l)}break;case"dimensions":if(Rs(s)&&(typeof a.dimensions<"u"&&(s.dimensions=a.dimensions),typeof a.updateStyle<"u"&&a.updateStyle&&(s.style={...s.style||{},width:`${(n=a.dimensions)==null?void 0:n.width}px`,height:`${(i=a.dimensions)==null?void 0:i.height}px`}),typeof a.resizing<"u"&&(s.resizing=a.resizing),s.expandParent&&s.parentNode)){const l=e[o.indexOf(s.parentNode)];l&&Rs(l)&&(!!l.dimensions.width&&!!l.dimensions.height?Yc(s,l):Dn(()=>{Yc(s,l)}))}break}return e}function gr(t,e){return{id:t,type:"select",selected:e}}function Hm(t){return{item:t,type:"add"}}function $m(t){return{id:t,type:"remove"}}function Gm(t,e,n,i,r){return{id:t,source:e,target:n,sourceHandle:i||null,targetHandle:r||null,type:"remove"}}function xr(t,e=new Set,n=!1){const i=[];for(const[r,o]of t){const s=e.has(r);!(o.selected===void 0&&!s)&&o.selected!==s&&(n&&(o.selected=s),i.push(gr(o.id,s)))}return i}const Wm=()=>{};function Be(t){const e=new Set;let n=Wm,i=()=>!1;const r=()=>e.size>0||i(),o=d=>{n=d},s=()=>{n=Wm},a=d=>{i=d},l=()=>{i=()=>!1},u=d=>{e.delete(d)};return{on:d=>{e.add(d);const h=()=>u(d);return Js(h),{off:h}},off:u,trigger:d=>{const h=[n];return r()?h.push(...e):t&&h.push(t),Promise.allSettled(h.map(g=>g(d)))},hasListeners:r,listeners:e,setEmitter:o,removeEmitter:s,setHasEmitListeners:a,removeHasEmitListeners:l}}function Xm(t,e,n){let i=t;do{if(i&&i.matches(e))return!0;if(i===n)return!1;i=i.parentElement}while(i);return!1}function $3(t,e,n,i){var r,o;const s=new Map;for(const[a,l]of t)(l.selected||l.id===i)&&(!l.parentNode||!v_(l,t))&&(l.draggable||e&&typeof l.draggable>"u")&&t.get(a)&&s.set(a,{id:l.id,position:l.position||{x:0,y:0},distance:{x:n.x-((r=l.computedPosition)==null?void 0:r.x)||0,y:n.y-((o=l.computedPosition)==null?void 0:o.y)||0},from:{x:l.computedPosition.x,y:l.computedPosition.y},extent:l.extent,parentNode:l.parentNode,dimensions:{...l.dimensions},expandParent:l.expandParent});return Array.from(s.values())}function qc({id:t,dragItems:e,findNode:n}){const i=[];for(const r of e){const o=n(r.id);o&&i.push(o)}return[t?i.find(r=>r.id===t):i[0],i]}function y_(t){if(Array.isArray(t))switch(t.length){case 1:return[t[0],t[0],t[0],t[0]];case 2:return[t[0],t[1],t[0],t[1]];case 3:return[t[0],t[1],t[2],t[1]];case 4:return t;default:return[0,0,0,0]}return[t,t,t,t]}function G3(t,e,n){const[i,r,o,s]=typeof t!="string"?y_(t.padding):[0,0,0,0];return n&&typeof n.computedPosition.x<"u"&&typeof n.computedPosition.y<"u"&&typeof n.dimensions.width<"u"&&typeof n.dimensions.height<"u"?[[n.computedPosition.x+s,n.computedPosition.y+i],[n.computedPosition.x+n.dimensions.width-r,n.computedPosition.y+n.dimensions.height-o]]:!1}function W3(t,e,n,i){let r=t.extent||n;if((r==="parent"||!Array.isArray(r)&&r?.range==="parent")&&!t.expandParent)if(t.parentNode&&i&&t.dimensions.width&&t.dimensions.height){const o=G3(r,t,i);o&&(r=o)}else e(new Wt($t.NODE_EXTENT_INVALID,t.id)),r=n;else if(Array.isArray(r)){const o=i?.computedPosition.x||0,s=i?.computedPosition.y||0;r=[[r[0][0]+o,r[0][1]+s],[r[1][0]+o,r[1][1]+s]]}else if(r!=="parent"&&r?.range&&Array.isArray(r.range)){const[o,s,a,l]=y_(r.padding),u=i?.computedPosition.x||0,c=i?.computedPosition.y||0;r=[[r.range[0][0]+u+l,r.range[0][1]+c+o],[r.range[1][0]+u-s,r.range[1][1]+c-a]]}return r==="parent"?[[Number.NEGATIVE_INFINITY,Number.NEGATIVE_INFINITY],[Number.POSITIVE_INFINITY,Number.POSITIVE_INFINITY]]:r}function X3({width:t,height:e},n){return[n[0],[n[1][0]-(t||0),n[1][1]-(e||0)]]}function Mh(t,e,n,i,r){const o=X3(t.dimensions,W3(t,n,i,r)),s=c_(e,o);return{position:{x:s.x-(r?.computedPosition.x||0),y:s.y-(r?.computedPosition.y||0)},computedPosition:s}}function is(t,e,n=He.Left,i=!1){const r=(e?.x??0)+t.computedPosition.x,o=(e?.y??0)+t.computedPosition.y,{width:s,height:a}=e??Z3(t);if(i)return{x:r+s/2,y:o+a/2};switch(e?.position??n){case He.Top:return{x:r+s/2,y:o};case He.Right:return{x:r+s,y:o+a/2};case He.Bottom:return{x:r+s/2,y:o+a};case He.Left:return{x:r,y:o+a/2}}}function Ym(t,e){return t&&(e?t.find(n=>n.id===e):t[0])||null}function Y3({sourcePos:t,targetPos:e,sourceWidth:n,sourceHeight:i,targetWidth:r,targetHeight:o,width:s,height:a,viewport:l}){const u={x:Math.min(t.x,e.x),y:Math.min(t.y,e.y),x2:Math.max(t.x+n,e.x+r),y2:Math.max(t.y+i,e.y+o)};u.x===u.x2&&(u.x2+=1),u.y===u.y2&&(u.y2+=1);const c=ru({x:(0-l.x)/l.zoom,y:(0-l.y)/l.zoom,width:s/l.zoom,height:a/l.zoom}),f=Math.max(0,Math.min(c.x2,u.x2)-Math.max(c.x,u.x)),d=Math.max(0,Math.min(c.y2,u.y2)-Math.max(c.y,u.y));return Math.ceil(f*d)>0}function q3(t,e,n=!1){const i=typeof t.zIndex=="number";let r=i?t.zIndex:0;const o=e(t.source),s=e(t.target);return!o||!s?0:(n&&(r=i?t.zIndex:Math.max(o.computedPosition.z||0,s.computedPosition.z||0)),r)}var $t=(t=>(t.MISSING_STYLES="MISSING_STYLES",t.MISSING_VIEWPORT_DIMENSIONS="MISSING_VIEWPORT_DIMENSIONS",t.NODE_INVALID="NODE_INVALID",t.NODE_NOT_FOUND="NODE_NOT_FOUND",t.NODE_MISSING_PARENT="NODE_MISSING_PARENT",t.NODE_TYPE_MISSING="NODE_TYPE_MISSING",t.NODE_EXTENT_INVALID="NODE_EXTENT_INVALID",t.EDGE_INVALID="EDGE_INVALID",t.EDGE_NOT_FOUND="EDGE_NOT_FOUND",t.EDGE_SOURCE_MISSING="EDGE_SOURCE_MISSING",t.EDGE_TARGET_MISSING="EDGE_TARGET_MISSING",t.EDGE_TYPE_MISSING="EDGE_TYPE_MISSING",t.EDGE_SOURCE_TARGET_SAME="EDGE_SOURCE_TARGET_SAME",t.EDGE_SOURCE_TARGET_MISSING="EDGE_SOURCE_TARGET_MISSING",t.EDGE_ORPHANED="EDGE_ORPHANED",t.USEVUEFLOW_OPTIONS="USEVUEFLOW_OPTIONS",t))($t||{});const qm={MISSING_STYLES:()=>"It seems that you haven't loaded the necessary styles. Please import '@vue-flow/core/dist/style.css' to ensure that the graph is rendered correctly",MISSING_VIEWPORT_DIMENSIONS:()=>"The Vue Flow parent container needs a width and a height to render the graph",NODE_INVALID:t=>`Node is invalid
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
Edge: ${t}`,USEVUEFLOW_OPTIONS:()=>"The options parameter is deprecated and will be removed in the next major version. Please use the id parameter instead"};class Wt extends Error{constructor(e,...n){var i;super((i=qm[e])==null?void 0:i.call(qm,...n)),this.name="VueFlowError",this.code=e,this.args=n}}function wh(t){return"clientX"in t}function K3(t){return"sourceEvent"in t}function ui(t,e){const n=wh(t);let i,r;return n?(i=t.clientX,r=t.clientY):"touches"in t&&t.touches.length>0?(i=t.touches[0].clientX,r=t.touches[0].clientY):"changedTouches"in t&&t.changedTouches.length>0?(i=t.changedTouches[0].clientX,r=t.changedTouches[0].clientY):(i=0,r=0),{x:i-(e?.left??0),y:r-(e?.top??0)}}const sa=()=>{var t;return typeof navigator<"u"&&((t=navigator?.userAgent)==null?void 0:t.indexOf("Mac"))>=0};function Z3(t){var e,n;return{width:((e=t.dimensions)==null?void 0:e.width)??t.width??0,height:((n=t.dimensions)==null?void 0:n.height)??t.height??0}}function Bu(t,e=[1,1]){return{x:e[0]*Math.round(t.x/e[0]),y:e[1]*Math.round(t.y/e[1])}}const j3=()=>!0;function Kc(t){t?.classList.remove("valid","connecting","vue-flow__handle-valid","vue-flow__handle-connecting")}function J3(t,e,n){const i=[],r={x:t.x-n,y:t.y-n,width:n*2,height:n*2};for(const o of e.values())iu(r,nu(o))>0&&i.push(o);return i}const Q3=250;function eI(t,e,n,i){var r,o;let s=[],a=Number.POSITIVE_INFINITY;const l=J3(t,n,e+Q3);for(const u of l){const c=[...((r=u.handleBounds)==null?void 0:r.source)??[],...((o=u.handleBounds)==null?void 0:o.target)??[]];for(const f of c){if(i.nodeId===f.nodeId&&i.type===f.type&&i.id===f.id)continue;const{x:d,y:h}=is(u,f,f.position,!0),g=Math.sqrt((d-t.x)**2+(h-t.y)**2);g>e||(g<a?(s=[{...f,x:d,y:h}],a=g):g===a&&s.push({...f,x:d,y:h}))}}if(!s.length)return null;if(s.length>1){const u=i.type==="source"?"target":"source";return s.find(c=>c.type===u)??s[0]}return s[0]}function Km(t,{handle:e,connectionMode:n,fromNodeId:i,fromHandleId:r,fromType:o,doc:s,lib:a,flowId:l,isValidConnection:u=j3},c,f,d,h){const g=o==="target",_=e?s.querySelector(`.${a}-flow__handle[data-id="${l}-${e?.nodeId}-${e?.id}-${e?.type}"]`):null,{x:m,y:p}=ui(t),b=s.elementFromPoint(m,p),S=b?.classList.contains(`${a}-flow__handle`)?b:_,x={handleDomNode:S,isValid:!1,connection:null,toHandle:null};if(S){const D=x_(void 0,S),O=S.getAttribute("data-nodeid"),z=S.getAttribute("data-handleid"),y=S.classList.contains("connectable"),M=S.classList.contains("connectableend");if(!O||!D)return x;const N={source:g?O:i,sourceHandle:g?z:r,target:g?i:O,targetHandle:g?r:z};x.connection=N;const P=y&&M&&(n===Pr.Strict?g&&D==="source"||!g&&D==="target":O!==i||z!==r);x.isValid=P&&u(N,{nodes:f,edges:c,sourceNode:d(N.source),targetNode:d(N.target)}),x.toHandle=b_(O,D,z,h,n,!0)}return x}function x_(t,e){return t||(e?.classList.contains("target")?"target":e?.classList.contains("source")?"source":null)}function tI(t,e){let n=null;return e?n="valid":t&&!e&&(n="invalid"),n}function nI(t,e){let n=null;return e?n=!0:t&&!e&&(n=!1),n}function b_(t,e,n,i,r,o=!1){var s,a,l;const u=i.get(t);if(!u)return null;const c=r===Pr.Strict?(s=u.handleBounds)==null?void 0:s[e]:[...((a=u.handleBounds)==null?void 0:a.source)??[],...((l=u.handleBounds)==null?void 0:l.target)??[]],f=(n?c?.find(d=>d.id===n):c?.[0])??null;return f&&o?{...f,...is(u,f,f.position,!0)}:f}const Sd={[He.Left]:He.Right,[He.Right]:He.Left,[He.Top]:He.Bottom,[He.Bottom]:He.Top},iI=["production","prod"];function Sa(t,...e){S_()&&console.warn(`[Vue Flow]: ${t}`,...e)}function S_(){return!iI.includes("production")}function Zm(t,e,n,i,r){const o=e.querySelectorAll(`.vue-flow__handle.${t}`);return o?.length?Array.from(o).map(s=>{const a=s.getBoundingClientRect();return{id:s.getAttribute("data-handleid"),type:t,nodeId:r,position:s.getAttribute("data-handlepos"),x:(a.left-n.left)/i,y:(a.top-n.top)/i,...Ou(s)}}):null}function Md(t,e,n,i,r,o=!1,s){r.value=!1,t.selected?(o||t.selected&&e)&&(i([t]),Dn(()=>{s.blur()})):n([t])}function Ht(t){return typeof ge(t)<"u"}function rI(t,e,n,i){if(!t||!t.source||!t.target)return n(new Wt($t.EDGE_INVALID,t?.id??"[ID UNKNOWN]")),!1;let r;return Nr(t)?r=t:r={...t,id:h_(t)},r=f_(r,void 0,i),B3(r,e)?!1:r}function oI(t,e,n,i,r){if(!e.source||!e.target)return r(new Wt($t.EDGE_INVALID,t.id)),!1;if(!n)return r(new Wt($t.EDGE_NOT_FOUND,t.id)),!1;const{id:o,...s}=t;return{...s,id:i?h_(e):o,source:e.source,target:e.target,sourceHandle:e.sourceHandle,targetHandle:e.targetHandle}}function jm(t,e,n){const i={},r=[];for(let o=0;o<t.length;++o){const s=t[o];if(!oo(s)){n(new Wt($t.NODE_INVALID,s?.id)||`[ID UNKNOWN|INDEX ${o}]`);continue}const a=F3(s,e(s.id),s.parentNode);s.parentNode&&(i[s.parentNode]=!0),r[o]=a}for(const o of r){const s=e(o.parentNode)||r.find(a=>a.id===o.parentNode);o.parentNode&&!s&&n(new Wt($t.NODE_MISSING_PARENT,o.id,o.parentNode)),(o.parentNode||i[o.id])&&(i[o.id]&&(o.isParent=!0),s&&(s.isParent=!0))}return r}function Jm(t,e,n,i,r,o){let s=r;const a=i.get(s)||new Map;i.set(s,a.set(n,e)),s=`${r}-${t}`;const l=i.get(s)||new Map;if(i.set(s,l.set(n,e)),o){s=`${r}-${t}-${o}`;const u=i.get(s)||new Map;i.set(s,u.set(n,e))}}function Zc(t,e,n){t.clear();for(const i of n){const{source:r,target:o,sourceHandle:s=null,targetHandle:a=null}=i,l={edgeId:i.id,source:r,target:o,sourceHandle:s,targetHandle:a},u=`${r}-${s}--${o}-${a}`,c=`${o}-${a}--${r}-${s}`;Jm("source",l,c,t,r,s),Jm("target",l,u,t,o,a)}}function Qm(t,e){if(t.size!==e.size)return!1;for(const n of t)if(!e.has(n))return!1;return!0}function jc(t,e,n,i,r,o,s,a){const l=[];for(const u of t){const c=Nr(u)?u:rI(u,a,r,o);if(!c)continue;const f=n(c.source),d=n(c.target);if(!f||!d){r(new Wt($t.EDGE_SOURCE_TARGET_MISSING,c.id,c.source,c.target));continue}if(!f){r(new Wt($t.EDGE_SOURCE_MISSING,c.id,c.source));continue}if(!d){r(new Wt($t.EDGE_TARGET_MISSING,c.id,c.target));continue}if(e&&!e(c,{edges:a,nodes:s,sourceNode:f,targetNode:d})){r(new Wt($t.EDGE_INVALID,c.id));continue}const h=i(c.id);l.push({...f_(c,h,o),sourceNode:f,targetNode:d})}return l}const eg=Symbol("vueFlow"),Eh=Symbol("nodeId"),M_=Symbol("nodeRef"),sI=Symbol("edgeId"),aI=Symbol("edgeRef"),ku=Symbol("slots");function w_(t){const{vueFlowRef:e,snapToGrid:n,snapGrid:i,noDragClassName:r,nodeLookup:o,nodeExtent:s,nodeDragThreshold:a,viewport:l,autoPanOnNodeDrag:u,autoPanSpeed:c,nodesDraggable:f,panBy:d,findNode:h,multiSelectionActive:g,nodesSelectionActive:_,selectNodesOnDrag:m,removeSelectedElements:p,addSelectedNodes:b,updateNodePositions:S,emits:x}=It(),{onStart:D,onDrag:O,onStop:z,onClick:y,el:M,disabled:N,id:C,selectable:P,dragHandle:B}=t,v=Er(!1);let A=[],E,I=null,V={x:void 0,y:void 0},W={x:0,y:0},q=null,$=!1,K=!1,ae=0,ve=!1;const pe=E_(),Z=({x:H,y:X})=>{V={x:H,y:X};let L=!1;if(A=A.map(F=>{const U={x:H-F.distance.x,y:X-F.distance.y},{computedPosition:G}=Mh(F,n.value?Bu(U,i.value):U,x.error,s.value,F.parentNode?h(F.parentNode):void 0);return L=L||F.position.x!==G.x||F.position.y!==G.y,F.position=G,F}),K=K||L,!!L&&(S(A,!0,!0),v.value=!0,q)){const[F,U]=qc({id:C,dragItems:A,findNode:h});O({event:q,node:F,nodes:U})}},ne=()=>{if(!I)return;const[H,X]=__(W,I,c.value);if(H!==0||X!==0){const L={x:(V.x??0)-H/l.value.zoom,y:(V.y??0)-X/l.value.zoom};d({x:H,y:X})&&Z(L)}ae=requestAnimationFrame(ne)},le=(H,X)=>{$=!0;const L=h(C);!m.value&&!g.value&&L&&(L.selected||p()),L&&ct(P)&&m.value&&Md(L,g.value,b,p,_,!1,X);const F=pe(H.sourceEvent);if(V=F,A=$3(o.value,f.value,F,C),A.length){const[U,G]=qc({id:C,dragItems:A,findNode:h});D({event:H.sourceEvent,node:U,nodes:G})}},xe=(H,X)=>{var L;H.sourceEvent.type==="touchmove"&&H.sourceEvent.touches.length>1||(K=!1,a.value===0&&le(H,X),V=pe(H.sourceEvent),I=((L=e.value)==null?void 0:L.getBoundingClientRect())||null,W=ui(H.sourceEvent,I))},be=(H,X)=>{const L=pe(H.sourceEvent);if(!ve&&$&&u.value&&(ve=!0,ne()),!$){const F=L.xSnapped-(V.x??0),U=L.ySnapped-(V.y??0);Math.sqrt(F*F+U*U)>a.value&&le(H,X)}(V.x!==L.xSnapped||V.y!==L.ySnapped)&&A.length&&$&&(q=H.sourceEvent,W=ui(H.sourceEvent,I),Z(L))},Ce=H=>{let X=!1;if(!$&&!v.value&&!g.value){const L=H.sourceEvent,F=pe(L),U=F.xSnapped-(V.x??0),G=F.ySnapped-(V.y??0),T=Math.sqrt(U*U+G*G);T!==0&&T<=a.value&&(y?.(L),X=!0)}if(A.length&&!X){K&&(S(A,!1,!1),K=!1);const[L,F]=qc({id:C,dragItems:A,findNode:h});z({event:H.sourceEvent,node:L,nodes:F})}A=[],v.value=!1,ve=!1,$=!1,V={x:void 0,y:void 0},cancelAnimationFrame(ae)};return ft([()=>ct(N),M],([H,X],L,F)=>{if(X){const U=Gn(X);H||(E=L2().on("start",G=>xe(G,X)).on("drag",G=>be(G,X)).on("end",G=>Ce(G)).filter(G=>{const T=G.target,te=ct(B);return!G.button&&(!r.value||!Xm(T,`.${r.value}`,X)&&(!te||Xm(T,te,X)))}),U.call(E)),F(()=>{U.on(".drag",null),E&&(E.on("start",null),E.on("drag",null),E.on("end",null))})}}),v}function lI(){return{doubleClick:Be(),click:Be(),mouseEnter:Be(),mouseMove:Be(),mouseLeave:Be(),contextMenu:Be(),updateStart:Be(),update:Be(),updateEnd:Be()}}function uI(t,e){const n=lI();return n.doubleClick.on(i=>{var r,o;e.edgeDoubleClick(i),(o=(r=t.events)==null?void 0:r.doubleClick)==null||o.call(r,i)}),n.click.on(i=>{var r,o;e.edgeClick(i),(o=(r=t.events)==null?void 0:r.click)==null||o.call(r,i)}),n.mouseEnter.on(i=>{var r,o;e.edgeMouseEnter(i),(o=(r=t.events)==null?void 0:r.mouseEnter)==null||o.call(r,i)}),n.mouseMove.on(i=>{var r,o;e.edgeMouseMove(i),(o=(r=t.events)==null?void 0:r.mouseMove)==null||o.call(r,i)}),n.mouseLeave.on(i=>{var r,o;e.edgeMouseLeave(i),(o=(r=t.events)==null?void 0:r.mouseLeave)==null||o.call(r,i)}),n.contextMenu.on(i=>{var r,o;e.edgeContextMenu(i),(o=(r=t.events)==null?void 0:r.contextMenu)==null||o.call(r,i)}),n.updateStart.on(i=>{var r,o;e.edgeUpdateStart(i),(o=(r=t.events)==null?void 0:r.updateStart)==null||o.call(r,i)}),n.update.on(i=>{var r,o;e.edgeUpdate(i),(o=(r=t.events)==null?void 0:r.update)==null||o.call(r,i)}),n.updateEnd.on(i=>{var r,o;e.edgeUpdateEnd(i),(o=(r=t.events)==null?void 0:r.updateEnd)==null||o.call(r,i)}),Object.entries(n).reduce((i,[r,o])=>(i.emit[r]=o.trigger,i.on[r]=o.on,i),{emit:{},on:{}})}function E_(){const{viewport:t,snapGrid:e,snapToGrid:n,vueFlowRef:i}=It();return r=>{var o;const s=((o=i.value)==null?void 0:o.getBoundingClientRect())??{left:0,top:0},a=K3(r)?r.sourceEvent:r,{x:l,y:u}=ui(a,s),c=ra({x:l,y:u},t.value),{x:f,y:d}=n.value?Bu(c,e.value):c;return{xSnapped:f,ySnapped:d,...c}}}function ol(){return!0}function T_({handleId:t,nodeId:e,type:n,isValidConnection:i,edgeUpdaterType:r,onEdgeUpdate:o,onEdgeUpdateEnd:s}){const{id:a,vueFlowRef:l,connectionMode:u,connectionRadius:c,connectOnClick:f,connectionClickStartHandle:d,nodesConnectable:h,autoPanOnConnect:g,autoPanSpeed:_,findNode:m,panBy:p,startConnection:b,updateConnection:S,endConnection:x,emits:D,viewport:O,edges:z,nodes:y,isValidConnection:M,nodeLookup:N}=It();let C=null,P=!1,B=null;function v(E){var I;const V=ct(n)==="target",W=wh(E),q=Bm(E.target),$=E.currentTarget;if($&&(W&&E.button===0||!W)){let K=function(ie){L=ui(ie,Ce),Z=eI(ra(L,O.value,!1,[1,1]),c.value,N.value,G),F||(U(),F=!0);const R=Km(ie,{handle:Z,connectionMode:u.value,fromNodeId:ct(e),fromHandleId:ct(t),fromType:V?"target":"source",isValidConnection:pe,doc:q,lib:"vue",flowId:a,nodeLookup:N.value},z.value,y.value,m,N.value);B=R.handleDomNode,C=R.connection,P=nI(!!Z,R.isValid);const w={...J,isValid:P,to:R.toHandle&&P?ia({x:R.toHandle.x,y:R.toHandle.y},O.value):L,toHandle:R.toHandle,toPosition:P&&R.toHandle?R.toHandle.position:Sd[G.position],toNode:R.toHandle?N.value.get(R.toHandle.nodeId):null};if(P&&Z&&J?.toHandle&&w.toHandle&&J.toHandle.type===w.toHandle.type&&J.toHandle.nodeId===w.toHandle.nodeId&&J.toHandle.id===w.toHandle.id&&J.to.x===w.to.x&&J.to.y===w.to.y)return;const Y=Z??R.toHandle;if(S(Y&&P?ia({x:Y.x,y:Y.y},O.value):L,Y,tI(!!Y,P)),J=w,!Z&&!P&&!B)return Kc(X);C&&C.source!==C.target&&B&&(Kc(X),X=B,B.classList.add("connecting","vue-flow__handle-connecting"),B.classList.toggle("valid",!!P),B.classList.toggle("vue-flow__handle-valid",!!P))},ae=function(ie){"touches"in ie&&ie.touches.length>0||((Z||B)&&C&&P&&(o?o(ie,C):D.connect(C)),D.connectEnd(ie),r&&s?.(ie),Kc(X),cancelAnimationFrame(ne),x(ie),F=!1,P=!1,C=null,B=null,q.removeEventListener("mousemove",K),q.removeEventListener("mouseup",ae),q.removeEventListener("touchmove",K),q.removeEventListener("touchend",ae))};const ve=m(ct(e));let pe=ct(i)||M.value||ol;!pe&&ve&&(pe=(V?ve.isValidSourcePos:ve.isValidTargetPos)||ol);let Z,ne=0;const{x:le,y:xe}=ui(E),be=x_(ct(r),$),Ce=(I=l.value)==null?void 0:I.getBoundingClientRect();if(!Ce||!be)return;const H=b_(ct(e),be,ct(t),N.value,u.value);if(!H)return;let X,L=ui(E,Ce),F=!1;const U=()=>{if(!g.value)return;const[ie,R]=__(L,Ce,_.value);p({x:ie,y:R}),ne=requestAnimationFrame(U)},G={...H,nodeId:ct(e),type:be,position:H.position},T=N.value.get(ct(e)),Q={inProgress:!0,isValid:null,from:is(T,G,He.Left,!0),fromHandle:G,fromPosition:G.position,fromNode:T,to:L,toHandle:null,toPosition:Sd[G.position],toNode:null};b({nodeId:ct(e),id:ct(t),type:be,position:$?.getAttribute("data-handlepos")||He.Top,...L},{x:le-Ce.left,y:xe-Ce.top}),D.connectStart({event:E,nodeId:ct(e),handleId:ct(t),handleType:be});let J=Q;q.addEventListener("mousemove",K),q.addEventListener("mouseup",ae),q.addEventListener("touchmove",K),q.addEventListener("touchend",ae)}}function A(E){var I,V;if(!f.value)return;const W=ct(n)==="target";if(!d.value){D.clickConnectStart({event:E,nodeId:ct(e),handleId:ct(t)}),b({nodeId:ct(e),type:ct(n),id:ct(t),position:He.Top,...ui(E)},void 0,!0);return}let q=ct(i)||M.value||ol;const $=m(ct(e));if(!q&&$&&(q=(W?$.isValidSourcePos:$.isValidTargetPos)||ol),$&&(typeof $.connectable>"u"?h.value:$.connectable)===!1)return;const K=Bm(E.target),ae=Km(E,{handle:{nodeId:ct(e),id:ct(t),type:ct(n),position:He.Top,...ui(E)},connectionMode:u.value,fromNodeId:d.value.nodeId,fromHandleId:d.value.id??null,fromType:d.value.type,isValidConnection:q,doc:K,lib:"vue",flowId:a,nodeLookup:N.value},z.value,y.value,m,N.value),ve=((I=ae.connection)==null?void 0:I.source)===((V=ae.connection)==null?void 0:V.target);ae.isValid&&ae.connection&&!ve&&D.connect(ae.connection),D.clickConnectEnd(E),x(E,!0)}return{handlePointerDown:v,handleClick:A}}function cI(){return An(Eh,"")}function A_(t){const e=t??cI()??"",n=An(M_,qe(null)),{findNode:i,edges:r,emits:o}=It(),s=i(e);return s||o.error(new Wt($t.NODE_NOT_FOUND,e)),{id:e,nodeEl:n,node:s,parentNode:De(()=>i(s.parentNode)),connectedEdges:De(()=>Kr([s],r.value))}}function fI(){return{doubleClick:Be(),click:Be(),mouseEnter:Be(),mouseMove:Be(),mouseLeave:Be(),contextMenu:Be(),dragStart:Be(),drag:Be(),dragStop:Be()}}function dI(t,e){const n=fI();return n.doubleClick.on(i=>{var r,o;e.nodeDoubleClick(i),(o=(r=t.events)==null?void 0:r.doubleClick)==null||o.call(r,i)}),n.click.on(i=>{var r,o;e.nodeClick(i),(o=(r=t.events)==null?void 0:r.click)==null||o.call(r,i)}),n.mouseEnter.on(i=>{var r,o;e.nodeMouseEnter(i),(o=(r=t.events)==null?void 0:r.mouseEnter)==null||o.call(r,i)}),n.mouseMove.on(i=>{var r,o;e.nodeMouseMove(i),(o=(r=t.events)==null?void 0:r.mouseMove)==null||o.call(r,i)}),n.mouseLeave.on(i=>{var r,o;e.nodeMouseLeave(i),(o=(r=t.events)==null?void 0:r.mouseLeave)==null||o.call(r,i)}),n.contextMenu.on(i=>{var r,o;e.nodeContextMenu(i),(o=(r=t.events)==null?void 0:r.contextMenu)==null||o.call(r,i)}),n.dragStart.on(i=>{var r,o;e.nodeDragStart(i),(o=(r=t.events)==null?void 0:r.dragStart)==null||o.call(r,i)}),n.drag.on(i=>{var r,o;e.nodeDrag(i),(o=(r=t.events)==null?void 0:r.drag)==null||o.call(r,i)}),n.dragStop.on(i=>{var r,o;e.nodeDragStop(i),(o=(r=t.events)==null?void 0:r.dragStop)==null||o.call(r,i)}),Object.entries(n).reduce((i,[r,o])=>(i.emit[r]=o.trigger,i.on[r]=o.on,i),{emit:{},on:{}})}function C_(){const{getSelectedNodes:t,nodeExtent:e,updateNodePositions:n,findNode:i,snapGrid:r,snapToGrid:o,nodesDraggable:s,emits:a}=It();return(l,u=!1)=>{const c=o.value?r.value[0]:5,f=o.value?r.value[1]:5,d=u?4:1,h=l.x*c*d,g=l.y*f*d,_=[];for(const m of t.value)if(m.draggable||s&&typeof m.draggable>"u"){const p={x:m.computedPosition.x+h,y:m.computedPosition.y+g},{position:b}=Mh(m,p,a.error,e.value,m.parentNode?i(m.parentNode):void 0);_.push({id:m.id,position:b,from:m.position,distance:{x:l.x,y:l.y},dimensions:m.dimensions})}n(_,!0,!1)}}const sl=.1,hI=t=>((t*=2)<=1?t*t*t:(t-=2)*t*t+2)/2;function pr(){return Sa("Viewport not initialized yet."),Promise.resolve(!1)}const pI={zoomIn:pr,zoomOut:pr,zoomTo:pr,fitView:pr,setCenter:pr,fitBounds:pr,project:t=>t,screenToFlowCoordinate:t=>t,flowToScreenCoordinate:t=>t,setViewport:pr,setTransform:pr,getViewport:()=>({x:0,y:0,zoom:1}),getTransform:()=>({x:0,y:0,zoom:1}),viewportInitialized:!1};function mI(t){function e(i,r){return new Promise(o=>{t.d3Selection&&t.d3Zoom?t.d3Zoom.interpolate(r?.interpolate==="linear"?zs:wl).scaleBy(Jc(t.d3Selection,r?.duration,r?.ease,()=>{o(!0)}),i):o(!1)})}function n(i,r,o,s){return new Promise(a=>{var l;const{x:u,y:c}=c_({x:-i,y:-r},t.translateExtent),f=ns.translate(-u,-c).scale(o);t.d3Selection&&t.d3Zoom?(l=t.d3Zoom)==null||l.interpolate(s?.interpolate==="linear"?zs:wl).transform(Jc(t.d3Selection,s?.duration,s?.ease,()=>{a(!0)}),f):a(!1)})}return De(()=>t.d3Zoom&&t.d3Selection&&t.dimensions.width&&t.dimensions.height?{viewportInitialized:!0,zoomIn:r=>e(1.2,r),zoomOut:r=>e(1/1.2,r),zoomTo:(r,o)=>new Promise(s=>{t.d3Selection&&t.d3Zoom?t.d3Zoom.interpolate(o?.interpolate==="linear"?zs:wl).scaleTo(Jc(t.d3Selection,o?.duration,o?.ease,()=>{s(!0)}),r):s(!1)}),setViewport:(r,o)=>n(r.x,r.y,r.zoom,o),setTransform:(r,o)=>n(r.x,r.y,r.zoom,o),getViewport:()=>({x:t.viewport.x,y:t.viewport.y,zoom:t.viewport.zoom}),getTransform:()=>({x:t.viewport.x,y:t.viewport.y,zoom:t.viewport.zoom}),fitView:(r={padding:sl,includeHiddenNodes:!1,duration:0})=>{var o,s;const a=[];for(const d of t.nodes)d.dimensions.width&&d.dimensions.height&&(r?.includeHiddenNodes||!d.hidden)&&(!((o=r.nodes)!=null&&o.length)||(s=r.nodes)!=null&&s.length&&r.nodes.includes(d.id))&&a.push(d);if(!a.length)return Promise.resolve(!1);const l=Sh(a),{x:u,y:c,zoom:f}=km(l,t.dimensions.width,t.dimensions.height,r.minZoom??t.minZoom,r.maxZoom??t.maxZoom,r.padding??sl);return n(u,c,f,r)},setCenter:(r,o,s)=>{const a=typeof s?.zoom<"u"?s.zoom:t.maxZoom,l=t.dimensions.width/2-r*a,u=t.dimensions.height/2-o*a;return n(l,u,a,s)},fitBounds:(r,o={padding:sl})=>{const{x:s,y:a,zoom:l}=km(r,t.dimensions.width,t.dimensions.height,t.minZoom,t.maxZoom,o.padding??sl);return n(s,a,l,o)},project:r=>ra(r,t.viewport,t.snapToGrid,t.snapGrid),screenToFlowCoordinate:r=>{if(t.vueFlowRef){const{x:o,y:s}=t.vueFlowRef.getBoundingClientRect(),a={x:r.x-o,y:r.y-s};return ra(a,t.viewport,t.snapToGrid,t.snapGrid)}return{x:0,y:0}},flowToScreenCoordinate:r=>{if(t.vueFlowRef){const{x:o,y:s}=t.vueFlowRef.getBoundingClientRect(),a={x:r.x+o,y:r.y+s};return ia(a,t.viewport)}return{x:0,y:0}}}:pI)}function Jc(t,e=0,n=hI,i=()=>{}){const r=typeof e=="number"&&e>0;return r||i(),r?t.transition().duration(e).ease(n).on("end",i):t}function gI(t,e,n){const i=vu(!0);return i.run(()=>{const r=()=>{i.run(()=>{let _,m,p=!!(n.nodes.value.length||n.edges.value.length);_=Do([t.modelValue,()=>{var b,S;return(S=(b=t.modelValue)==null?void 0:b.value)==null?void 0:S.length}],([b])=>{b&&Array.isArray(b)&&(m?.pause(),n.setElements(b),!m&&!p&&b.length?p=!0:m?.resume())}),m=Do([n.nodes,n.edges,()=>n.edges.value.length,()=>n.nodes.value.length],([b,S])=>{var x;(x=t.modelValue)!=null&&x.value&&Array.isArray(t.modelValue.value)&&(_?.pause(),t.modelValue.value=[...b,...S],Dn(()=>{_?.resume()}))},{immediate:p}),Ds(()=>{_?.stop(),m?.stop()})})},o=()=>{i.run(()=>{let _,m,p=!!n.nodes.value.length;_=Do([t.nodes,()=>{var b,S;return(S=(b=t.nodes)==null?void 0:b.value)==null?void 0:S.length}],([b])=>{b&&Array.isArray(b)&&(m?.pause(),n.setNodes(b),!m&&!p&&b.length?p=!0:m?.resume())}),m=Do([n.nodes,()=>n.nodes.value.length],([b])=>{var S;(S=t.nodes)!=null&&S.value&&Array.isArray(t.nodes.value)&&(_?.pause(),t.nodes.value=[...b],Dn(()=>{_?.resume()}))},{immediate:p}),Ds(()=>{_?.stop(),m?.stop()})})},s=()=>{i.run(()=>{let _,m,p=!!n.edges.value.length;_=Do([t.edges,()=>{var b,S;return(S=(b=t.edges)==null?void 0:b.value)==null?void 0:S.length}],([b])=>{b&&Array.isArray(b)&&(m?.pause(),n.setEdges(b),!m&&!p&&b.length?p=!0:m?.resume())}),m=Do([n.edges,()=>n.edges.value.length],([b])=>{var S;(S=t.edges)!=null&&S.value&&Array.isArray(t.edges.value)&&(_?.pause(),t.edges.value=[...b],Dn(()=>{_?.resume()}))},{immediate:p}),Ds(()=>{_?.stop(),m?.stop()})})},a=()=>{i.run(()=>{ft(()=>e.maxZoom,()=>{e.maxZoom&&Ht(e.maxZoom)&&n.setMaxZoom(e.maxZoom)},{immediate:!0})})},l=()=>{i.run(()=>{ft(()=>e.minZoom,()=>{e.minZoom&&Ht(e.minZoom)&&n.setMinZoom(e.minZoom)},{immediate:!0})})},u=()=>{i.run(()=>{ft(()=>e.translateExtent,()=>{e.translateExtent&&Ht(e.translateExtent)&&n.setTranslateExtent(e.translateExtent)},{immediate:!0})})},c=()=>{i.run(()=>{ft(()=>e.nodeExtent,()=>{e.nodeExtent&&Ht(e.nodeExtent)&&n.setNodeExtent(e.nodeExtent)},{immediate:!0})})},f=()=>{i.run(()=>{ft(()=>e.applyDefault,()=>{Ht(e.applyDefault)&&(n.applyDefault.value=e.applyDefault)},{immediate:!0})})},d=()=>{i.run(()=>{const _=async m=>{let p=m;typeof e.autoConnect=="function"&&(p=await e.autoConnect(m)),p!==!1&&n.addEdges([p])};ft(()=>e.autoConnect,()=>{Ht(e.autoConnect)&&(n.autoConnect.value=e.autoConnect)},{immediate:!0}),ft(n.autoConnect,(m,p,b)=>{m?n.onConnect(_):n.hooks.value.connect.off(_),b(()=>{n.hooks.value.connect.off(_)})},{immediate:!0})})},h=()=>{const _=["id","modelValue","translateExtent","nodeExtent","edges","nodes","maxZoom","minZoom","applyDefault","autoConnect"];for(const m of Object.keys(e)){const p=m;if(!_.includes(p)){const b=vt(()=>e[p]),S=n[p];Ut(S)&&i.run(()=>{ft(b,x=>{Ht(x)&&(S.value=x)},{immediate:!0})})}}};r(),o(),s(),l(),a(),u(),c(),f(),d(),h()}),()=>i.stop()}function vI(){return{edgesChange:Be(),nodesChange:Be(),nodeDoubleClick:Be(),nodeClick:Be(),nodeMouseEnter:Be(),nodeMouseMove:Be(),nodeMouseLeave:Be(),nodeContextMenu:Be(),nodeDragStart:Be(),nodeDrag:Be(),nodeDragStop:Be(),nodesInitialized:Be(),miniMapNodeClick:Be(),miniMapNodeDoubleClick:Be(),miniMapNodeMouseEnter:Be(),miniMapNodeMouseMove:Be(),miniMapNodeMouseLeave:Be(),connect:Be(),connectStart:Be(),connectEnd:Be(),clickConnectStart:Be(),clickConnectEnd:Be(),paneReady:Be(),init:Be(),move:Be(),moveStart:Be(),moveEnd:Be(),selectionDragStart:Be(),selectionDrag:Be(),selectionDragStop:Be(),selectionContextMenu:Be(),selectionStart:Be(),selectionEnd:Be(),viewportChangeStart:Be(),viewportChange:Be(),viewportChangeEnd:Be(),paneScroll:Be(),paneClick:Be(),paneContextMenu:Be(),paneMouseEnter:Be(),paneMouseMove:Be(),paneMouseLeave:Be(),edgeContextMenu:Be(),edgeMouseEnter:Be(),edgeMouseMove:Be(),edgeMouseLeave:Be(),edgeDoubleClick:Be(),edgeClick:Be(),edgeUpdateStart:Be(),edgeUpdate:Be(),edgeUpdateEnd:Be(),updateNodeInternals:Be(),error:Be(t=>Sa(t.message))}}function _I(t,e){const n=rr();p0(()=>{for(const[r,o]of Object.entries(e.value)){const s=a=>{t(r,a)};o.setEmitter(s),Js(o.removeEmitter),o.setHasEmitListeners(()=>i(r)),Js(o.removeHasEmitListeners)}});function i(r){var o;const s=yI(r);return!!((o=n?.vnode.props)==null?void 0:o[s])}}function yI(t){const[e,...n]=t.split(":");return`on${e.replace(/(?:^|-)(\w)/g,(r,o)=>o.toUpperCase())}${n.length?`:${n.join(":")}`:""}`}function R_(){return{vueFlowRef:null,viewportRef:null,nodes:[],edges:[],connectionLookup:new Map,nodeTypes:{},edgeTypes:{},initialized:!1,dimensions:{width:0,height:0},viewport:{x:0,y:0,zoom:1},d3Zoom:null,d3Selection:null,d3ZoomHandler:null,minZoom:.5,maxZoom:2,translateExtent:[[Number.NEGATIVE_INFINITY,Number.NEGATIVE_INFINITY],[Number.POSITIVE_INFINITY,Number.POSITIVE_INFINITY]],nodeExtent:[[Number.NEGATIVE_INFINITY,Number.NEGATIVE_INFINITY],[Number.POSITIVE_INFINITY,Number.POSITIVE_INFINITY]],selectionMode:bh.Full,paneDragging:!1,preventScrolling:!0,zoomOnScroll:!0,zoomOnPinch:!0,zoomOnDoubleClick:!0,panOnScroll:!1,panOnScrollSpeed:.5,panOnScrollMode:Vs.Free,paneClickDistance:0,panOnDrag:!0,edgeUpdaterRadius:10,onlyRenderVisibleElements:!1,defaultViewport:{x:0,y:0,zoom:1},nodesSelectionActive:!1,userSelectionActive:!1,userSelectionRect:null,defaultMarkerColor:"#b1b1b7",connectionLineStyle:{},connectionLineType:null,connectionLineOptions:{type:qr.Bezier,style:{}},connectionMode:Pr.Loose,connectionStartHandle:null,connectionEndHandle:null,connectionClickStartHandle:null,connectionPosition:{x:Number.NaN,y:Number.NaN},connectionRadius:20,connectOnClick:!0,connectionStatus:null,isValidConnection:null,snapGrid:[15,15],snapToGrid:!1,edgesUpdatable:!1,edgesFocusable:!0,nodesFocusable:!0,nodesConnectable:!0,nodesDraggable:!0,nodeDragThreshold:1,elementsSelectable:!0,selectNodesOnDrag:!0,multiSelectionActive:!1,selectionKeyCode:"Shift",multiSelectionKeyCode:sa()?"Meta":"Control",zoomActivationKeyCode:sa()?"Meta":"Control",deleteKeyCode:"Backspace",panActivationKeyCode:"Space",hooks:vI(),applyDefault:!0,autoConnect:!1,fitViewOnInit:!1,fitViewOnInitDone:!1,noDragClassName:"nodrag",noWheelClassName:"nowheel",noPanClassName:"nopan",defaultEdgeOptions:void 0,elevateEdgesOnSelect:!1,elevateNodesOnSelect:!0,autoPanOnNodeDrag:!0,autoPanOnConnect:!0,autoPanSpeed:15,disableKeyboardA11y:!1,ariaLiveMessage:""}}const xI=["id","vueFlowRef","viewportRef","initialized","modelValue","nodes","edges","maxZoom","minZoom","translateExtent","hooks","defaultEdgeOptions"];function bI(t,e,n){const i=mI(t),r=L=>{const F=L??[];t.hooks.updateNodeInternals.trigger(F)},o=L=>O3(L,t.nodes,t.edges),s=L=>U3(L,t.nodes,t.edges),a=L=>Kr(L,t.edges),l=({id:L,type:F,nodeId:U})=>{var G;const T=L?`-${F}-${L}`:`-${F}`;return Array.from(((G=t.connectionLookup.get(`${U}${T}`))==null?void 0:G.values())??[])},u=L=>{if(L)return e.value.get(L)},c=L=>{if(L)return n.value.get(L)},f=(L,F,U)=>{var G,T;const te=[];for(const Q of L){const J={id:Q.id,type:"position",dragging:U,from:Q.from};if(F&&(J.position=Q.position,Q.parentNode)){const ie=u(Q.parentNode);J.position={x:J.position.x-(((G=ie?.computedPosition)==null?void 0:G.x)??0),y:J.position.y-(((T=ie?.computedPosition)==null?void 0:T.y)??0)}}te.push(J)}te?.length&&t.hooks.nodesChange.trigger(te)},d=L=>{if(!t.vueFlowRef)return;const F=t.vueFlowRef.querySelector(".vue-flow__transformationpane");if(!F)return;const U=window.getComputedStyle(F),{m22:G}=new window.DOMMatrixReadOnly(U.transform),T=[];for(const te of L){const Q=te,J=u(Q.id);if(J){const ie=Ou(Q.nodeElement);if(!!(ie.width&&ie.height&&(J.dimensions.width!==ie.width||J.dimensions.height!==ie.height||Q.forceUpdate))){const w=Q.nodeElement.getBoundingClientRect();J.dimensions=ie,J.handleBounds.source=Zm("source",Q.nodeElement,w,G,J.id),J.handleBounds.target=Zm("target",Q.nodeElement,w,G,J.id),T.push({id:J.id,type:"dimensions",dimensions:ie})}}}!t.fitViewOnInitDone&&t.fitViewOnInit&&i.value.fitView().then(()=>{t.fitViewOnInitDone=!0}),T.length&&t.hooks.nodesChange.trigger(T)},h=(L,F)=>{const U=new Set,G=new Set;for(const Q of L)oo(Q)?U.add(Q.id):Nr(Q)&&G.add(Q.id);const T=xr(e.value,U,!0),te=xr(n.value,G);if(t.multiSelectionActive){for(const Q of U)T.push(gr(Q,F));for(const Q of G)te.push(gr(Q,F))}T.length&&t.hooks.nodesChange.trigger(T),te.length&&t.hooks.edgesChange.trigger(te)},g=L=>{if(t.multiSelectionActive){const F=L.map(U=>gr(U.id,!0));t.hooks.nodesChange.trigger(F);return}t.hooks.nodesChange.trigger(xr(e.value,new Set(L.map(F=>F.id)),!0)),t.hooks.edgesChange.trigger(xr(n.value))},_=L=>{if(t.multiSelectionActive){const F=L.map(U=>gr(U.id,!0));t.hooks.edgesChange.trigger(F);return}t.hooks.edgesChange.trigger(xr(n.value,new Set(L.map(F=>F.id)))),t.hooks.nodesChange.trigger(xr(e.value,new Set,!0))},m=L=>{h(L,!0)},p=L=>{const U=(L||t.nodes).map(G=>(G.selected=!1,gr(G.id,!1)));t.hooks.nodesChange.trigger(U)},b=L=>{const U=(L||t.edges).map(G=>(G.selected=!1,gr(G.id,!1)));t.hooks.edgesChange.trigger(U)},S=L=>{if(!L||!L.length)return h([],!1);const F=L.reduce((U,G)=>{const T=gr(G.id,!1);return oo(G)?U.nodes.push(T):U.edges.push(T),U},{nodes:[],edges:[]});F.nodes.length&&t.hooks.nodesChange.trigger(F.nodes),F.edges.length&&t.hooks.edgesChange.trigger(F.edges)},x=L=>{var F;(F=t.d3Zoom)==null||F.scaleExtent([L,t.maxZoom]),t.minZoom=L},D=L=>{var F;(F=t.d3Zoom)==null||F.scaleExtent([t.minZoom,L]),t.maxZoom=L},O=L=>{var F;(F=t.d3Zoom)==null||F.translateExtent(L),t.translateExtent=L},z=L=>{t.nodeExtent=L,r()},y=L=>{var F;(F=t.d3Zoom)==null||F.clickDistance(L)},M=L=>{t.nodesDraggable=L,t.nodesConnectable=L,t.elementsSelectable=L},N=L=>{const F=L instanceof Function?L(t.nodes):L;!t.initialized&&!F.length||(t.nodes=jm(F,u,t.hooks.error.trigger))},C=L=>{const F=L instanceof Function?L(t.edges):L;if(!t.initialized&&!F.length)return;const U=jc(F,t.isValidConnection,u,c,t.hooks.error.trigger,t.defaultEdgeOptions,t.nodes,t.edges);Zc(t.connectionLookup,n.value,U),t.edges=U},P=L=>{const F=L instanceof Function?L([...t.nodes,...t.edges]):L;!t.initialized&&!F.length||(N(F.filter(oo)),C(F.filter(Nr)))},B=L=>{let F=L instanceof Function?L(t.nodes):L;F=Array.isArray(F)?F:[F];const U=jm(F,u,t.hooks.error.trigger),G=[];for(const T of U)G.push(Hm(T));G.length&&t.hooks.nodesChange.trigger(G)},v=L=>{let F=L instanceof Function?L(t.edges):L;F=Array.isArray(F)?F:[F];const U=jc(F,t.isValidConnection,u,c,t.hooks.error.trigger,t.defaultEdgeOptions,t.nodes,t.edges),G=[];for(const T of U)G.push(Hm(T));G.length&&t.hooks.edgesChange.trigger(G)},A=(L,F=!0,U=!1)=>{const G=L instanceof Function?L(t.nodes):L,T=Array.isArray(G)?G:[G],te=[],Q=[];function J(R){const w=a(R);for(const Y of w)(!Ht(Y.deletable)||Y.deletable)&&Q.push(Gm(Y.id,Y.source,Y.target,Y.sourceHandle,Y.targetHandle))}function ie(R){const w=[];for(const Y of t.nodes)Y.parentNode===R&&w.push(Y);if(w.length){for(const Y of w)te.push($m(Y.id));F&&J(w);for(const Y of w)ie(Y.id)}}for(const R of T){const w=typeof R=="string"?u(R):R;w&&(Ht(w.deletable)&&!w.deletable||(te.push($m(w.id)),F&&J([w]),U&&ie(w.id)))}Q.length&&t.hooks.edgesChange.trigger(Q),te.length&&t.hooks.nodesChange.trigger(te)},E=L=>{const F=L instanceof Function?L(t.edges):L,U=Array.isArray(F)?F:[F],G=[];for(const T of U){const te=typeof T=="string"?c(T):T;te&&(Ht(te.deletable)&&!te.deletable||G.push(Gm(typeof T=="string"?T:T.id,te.source,te.target,te.sourceHandle,te.targetHandle)))}t.hooks.edgesChange.trigger(G)},I=(L,F,U=!0)=>{const G=c(L.id);if(!G)return!1;const T=t.edges.indexOf(G),te=oI(L,F,G,U,t.hooks.error.trigger);if(te){const[Q]=jc([te],t.isValidConnection,u,c,t.hooks.error.trigger,t.defaultEdgeOptions,t.nodes,t.edges);return t.edges=t.edges.map((J,ie)=>ie===T?Q:J),Zc(t.connectionLookup,n.value,[Q]),Q}return!1},V=(L,F,U={replace:!1})=>{const G=c(L);if(!G)return;const T=typeof F=="function"?F(G):F;G.data=U.replace?T:{...G.data,...T}},W=L=>Vm(L,t.nodes),q=L=>{const F=Vm(L,t.edges);return Zc(t.connectionLookup,n.value,F),F},$=(L,F,U={replace:!1})=>{const G=u(L);if(!G)return;const T=typeof F=="function"?F(G):F;U.replace?t.nodes.splice(t.nodes.indexOf(G),1,T):Object.assign(G,T)},K=(L,F,U={replace:!1})=>{const G=u(L);if(!G)return;const T=typeof F=="function"?F(G):F;G.data=U.replace?T:{...G.data,...T}},ae=(L,F,U=!1)=>{U?t.connectionClickStartHandle=L:t.connectionStartHandle=L,t.connectionEndHandle=null,t.connectionStatus=null,F&&(t.connectionPosition=F)},ve=(L,F=null,U=null)=>{t.connectionStartHandle&&(t.connectionPosition=L,t.connectionEndHandle=F,t.connectionStatus=U)},pe=(L,F)=>{t.connectionPosition={x:Number.NaN,y:Number.NaN},t.connectionEndHandle=null,t.connectionStatus=null,F?t.connectionClickStartHandle=null:t.connectionStartHandle=null},Z=L=>{const F=L3(L),U=F?null:Rs(L)?L:u(L.id);return!F&&!U?[null,null,F]:[F?L:nu(U),U,F]},ne=(L,F=!0,U=t.nodes)=>{const[G,T,te]=Z(L);if(!G)return[];const Q=[];for(const J of U||t.nodes){if(!te&&(J.id===T.id||!J.computedPosition))continue;const ie=nu(J),R=iu(ie,G);(F&&R>0||R>=ie.width*ie.height||R>=Number(G.width)*Number(G.height))&&Q.push(J)}return Q},le=(L,F,U=!0)=>{const[G]=Z(L);if(!G)return!1;const T=iu(G,F);return U&&T>0||T>=Number(G.width)*Number(G.height)},xe=L=>{const{viewport:F,dimensions:U,d3Zoom:G,d3Selection:T,translateExtent:te}=t;if(!G||!T||!L.x&&!L.y)return!1;const Q=ns.translate(F.x+L.x,F.y+L.y).scale(F.zoom),J=[[0,0],[U.width,U.height]],ie=G.constrain()(Q,J,te),R=t.viewport.x!==ie.x||t.viewport.y!==ie.y||t.viewport.zoom!==ie.k;return G.transform(T,ie),R},be=L=>{const F=L instanceof Function?L(t):L,U=["d3Zoom","d3Selection","d3ZoomHandler","viewportRef","vueFlowRef","dimensions","hooks"];Ht(F.defaultEdgeOptions)&&(t.defaultEdgeOptions=F.defaultEdgeOptions);const G=F.modelValue||F.nodes||F.edges?[]:void 0;G&&(F.modelValue&&G.push(...F.modelValue),F.nodes&&G.push(...F.nodes),F.edges&&G.push(...F.edges),P(G));const T=()=>{Ht(F.maxZoom)&&D(F.maxZoom),Ht(F.minZoom)&&x(F.minZoom),Ht(F.translateExtent)&&O(F.translateExtent)};for(const te of Object.keys(F)){const Q=te,J=F[Q];![...xI,...U].includes(Q)&&Ht(J)&&(t[Q]=J)}cd(()=>t.d3Zoom).not.toBeNull().then(T),t.initialized||(t.initialized=!0)};return{updateNodePositions:f,updateNodeDimensions:d,setElements:P,setNodes:N,setEdges:C,addNodes:B,addEdges:v,removeNodes:A,removeEdges:E,findNode:u,findEdge:c,updateEdge:I,updateEdgeData:V,updateNode:$,updateNodeData:K,applyEdgeChanges:q,applyNodeChanges:W,addSelectedElements:m,addSelectedNodes:g,addSelectedEdges:_,setMinZoom:x,setMaxZoom:D,setTranslateExtent:O,setNodeExtent:z,setPaneClickDistance:y,removeSelectedElements:S,removeSelectedNodes:p,removeSelectedEdges:b,startConnection:ae,updateConnection:ve,endConnection:pe,setInteractive:M,setState:be,getIntersectingNodes:ne,getIncomers:o,getOutgoers:s,getConnectedEdges:a,getHandleConnections:l,isNodeIntersecting:le,panBy:xe,fitView:L=>i.value.fitView(L),zoomIn:L=>i.value.zoomIn(L),zoomOut:L=>i.value.zoomOut(L),zoomTo:(L,F)=>i.value.zoomTo(L,F),setViewport:(L,F)=>i.value.setViewport(L,F),setTransform:(L,F)=>i.value.setTransform(L,F),getViewport:()=>i.value.getViewport(),getTransform:()=>i.value.getTransform(),setCenter:(L,F,U)=>i.value.setCenter(L,F,U),fitBounds:(L,F)=>i.value.fitBounds(L,F),project:L=>i.value.project(L),screenToFlowCoordinate:L=>i.value.screenToFlowCoordinate(L),flowToScreenCoordinate:L=>i.value.flowToScreenCoordinate(L),toObject:()=>{const L=[],F=[];for(const U of t.nodes){const{computedPosition:G,handleBounds:T,selected:te,dimensions:Q,isParent:J,resizing:ie,dragging:R,events:w,...Y}=U;L.push(Y)}for(const U of t.edges){const{selected:G,sourceNode:T,targetNode:te,events:Q,...J}=U;F.push(J)}return JSON.parse(JSON.stringify({nodes:L,edges:F,position:[t.viewport.x,t.viewport.y],zoom:t.viewport.zoom,viewport:t.viewport}))},fromObject:L=>new Promise(F=>{const{nodes:U,edges:G,position:T,zoom:te,viewport:Q}=L;U&&N(U),G&&C(G);const[J,ie]=Q?.x&&Q?.y?[Q.x,Q.y]:T??[null,null];if(J&&ie){const R=Q?.zoom||te||t.viewport.zoom;return cd(()=>i.value.viewportInitialized).toBe(!0).then(()=>{i.value.setViewport({x:J,y:ie,zoom:R}).then(()=>{F(!0)})})}else F(!0)}),updateNodeInternals:r,viewportHelper:i,$reset:()=>{const L=R_();if(t.edges=[],t.nodes=[],t.d3Zoom&&t.d3Selection){const F=ns.translate(L.defaultViewport.x??0,L.defaultViewport.y??0).scale(tr(L.defaultViewport.zoom??1,L.minZoom,L.maxZoom)),U=t.viewportRef.getBoundingClientRect(),G=[[0,0],[U.width,U.height]],T=t.d3Zoom.constrain()(F,G,L.translateExtent);t.d3Zoom.transform(t.d3Selection,T)}be(L)},$destroy:()=>{}}}const SI=["data-id","data-handleid","data-nodeid","data-handlepos"],MI={name:"Handle",compatConfig:{MODE:3}},so=Rt({...MI,props:{id:{default:null},type:{},position:{default:()=>He.Top},isValidConnection:{type:Function},connectable:{type:[Boolean,Number,String,Function],default:void 0},connectableStart:{type:Boolean,default:!0},connectableEnd:{type:Boolean,default:!0}},setup(t,{expose:e}){const n=zx(t,["position","connectable","connectableStart","connectableEnd","id"]),i=vt(()=>n.type??"source"),r=vt(()=>n.isValidConnection??null),{id:o,connectionStartHandle:s,connectionClickStartHandle:a,connectionEndHandle:l,vueFlowRef:u,nodesConnectable:c,noDragClassName:f,noPanClassName:d}=It(),{id:h,node:g,nodeEl:_,connectedEdges:m}=A_(),p=qe(),b=vt(()=>typeof t.connectableStart<"u"?t.connectableStart:!0),S=vt(()=>typeof t.connectableEnd<"u"?t.connectableEnd:!0),x=vt(()=>{var C,P,B,v,A,E;return((C=s.value)==null?void 0:C.nodeId)===h&&((P=s.value)==null?void 0:P.id)===t.id&&((B=s.value)==null?void 0:B.type)===i.value||((v=l.value)==null?void 0:v.nodeId)===h&&((A=l.value)==null?void 0:A.id)===t.id&&((E=l.value)==null?void 0:E.type)===i.value}),D=vt(()=>{var C,P,B;return((C=a.value)==null?void 0:C.nodeId)===h&&((P=a.value)==null?void 0:P.id)===t.id&&((B=a.value)==null?void 0:B.type)===i.value}),{handlePointerDown:O,handleClick:z}=T_({nodeId:h,handleId:t.id,isValidConnection:r,type:i}),y=De(()=>typeof t.connectable=="string"&&t.connectable==="single"?!m.value.some(C=>{const P=C[`${i.value}Handle`];return C[i.value]!==h?!1:P?P===t.id:!0}):typeof t.connectable=="number"?m.value.filter(C=>{const P=C[`${i.value}Handle`];return C[i.value]!==h?!1:P?P===t.id:!0}).length<t.connectable:typeof t.connectable=="function"?t.connectable(g,m.value):Ht(t.connectable)?t.connectable:c.value);On(()=>{var C;if(!g.dimensions.width||!g.dimensions.height)return;const P=(C=g.handleBounds[i.value])==null?void 0:C.find(W=>W.id===t.id);if(!u.value||P)return;const B=u.value.querySelector(".vue-flow__transformationpane");if(!_.value||!p.value||!B||!t.id)return;const v=_.value.getBoundingClientRect(),A=p.value.getBoundingClientRect(),E=window.getComputedStyle(B),{m22:I}=new window.DOMMatrixReadOnly(E.transform),V={id:t.id,position:t.position,x:(A.left-v.left)/I,y:(A.top-v.top)/I,type:i.value,nodeId:h,...Ou(p.value)};g.handleBounds[i.value]=[...g.handleBounds[i.value]??[],V]});function M(C){const P=wh(C);y.value&&b.value&&(P&&C.button===0||!P)&&O(C)}function N(C){!h||!a.value&&!b.value||y.value&&z(C)}return e({handleClick:z,handlePointerDown:O,onClick:N,onPointerDown:M}),(C,P)=>(ye(),Se("div",{ref_key:"handle",ref:p,"data-id":`${ge(o)}-${ge(h)}-${t.id}-${i.value}`,"data-handleid":t.id,"data-nodeid":ge(h),"data-handlepos":C.position,class:Dt(["vue-flow__handle",[`vue-flow__handle-${C.position}`,`vue-flow__handle-${t.id}`,ge(f),ge(d),i.value,{connectable:y.value,connecting:D.value,connectablestart:b.value,connectableend:S.value,connectionindicator:y.value&&(b.value&&!x.value||S.value&&x.value)}]]),onMousedown:M,onTouchstartPassive:M,onClick:N},[Ln(C.$slots,"default",{id:C.id})],42,SI))}}),zu=function({sourcePosition:t=He.Bottom,targetPosition:e=He.Top,label:n,connectable:i=!0,isValidTargetPos:r,isValidSourcePos:o,data:s}){const a=s.label??n;return[xt(so,{type:"target",position:e,connectable:i,isValidConnection:r}),typeof a!="string"&&a?xt(a):xt(ut,[a]),xt(so,{type:"source",position:t,connectable:i,isValidConnection:o})]};zu.props=["sourcePosition","targetPosition","label","isValidTargetPos","isValidSourcePos","connectable","data"];zu.inheritAttrs=!1;zu.compatConfig={MODE:3};const wI=zu,Vu=function({targetPosition:t=He.Top,label:e,connectable:n=!0,isValidTargetPos:i,data:r}){const o=r.label??e;return[xt(so,{type:"target",position:t,connectable:n,isValidConnection:i}),typeof o!="string"&&o?xt(o):xt(ut,[o])]};Vu.props=["targetPosition","label","isValidTargetPos","connectable","data"];Vu.inheritAttrs=!1;Vu.compatConfig={MODE:3};const EI=Vu,Hu=function({sourcePosition:t=He.Bottom,label:e,connectable:n=!0,isValidSourcePos:i,data:r}){const o=r.label??e;return[typeof o!="string"&&o?xt(o):xt(ut,[o]),xt(so,{type:"source",position:t,connectable:n,isValidConnection:i})]};Hu.props=["sourcePosition","label","isValidSourcePos","connectable","data"];Hu.inheritAttrs=!1;Hu.compatConfig={MODE:3};const TI=Hu,AI=["transform"],CI=["width","height","x","y","rx","ry"],RI=["y"],II={name:"EdgeText",compatConfig:{MODE:3}},PI=Rt({...II,props:{x:{},y:{},label:{},labelStyle:{default:()=>({})},labelShowBg:{type:Boolean,default:!0},labelBgStyle:{default:()=>({})},labelBgPadding:{default:()=>[2,4]},labelBgBorderRadius:{default:2}},setup(t){const e=qe({x:0,y:0,width:0,height:0}),n=qe(null),i=De(()=>`translate(${t.x-e.value.width/2} ${t.y-e.value.height/2})`);On(r),ft([()=>t.x,()=>t.y,n,()=>t.label],r);function r(){if(!n.value)return;const o=n.value.getBBox();(o.width!==e.value.width||o.height!==e.value.height)&&(e.value=o)}return(o,s)=>(ye(),Se("g",{transform:i.value,class:"vue-flow__edge-textwrapper"},[o.labelShowBg?(ye(),Se("rect",{key:0,class:"vue-flow__edge-textbg",width:`${e.value.width+2*o.labelBgPadding[0]}px`,height:`${e.value.height+2*o.labelBgPadding[1]}px`,x:-o.labelBgPadding[0],y:-o.labelBgPadding[1],style:yt(o.labelBgStyle),rx:o.labelBgBorderRadius,ry:o.labelBgBorderRadius},null,12,CI)):Je("",!0),fe("text",Ys(o.$attrs,{ref_key:"el",ref:n,class:"vue-flow__edge-text",y:e.value.height/2,dy:"0.3em",style:o.labelStyle}),[Ln(o.$slots,"default",{},()=>[typeof o.label!="string"?(ye(),mn(_0(o.label),{key:0})):(ye(),Se(ut,{key:1},[Qd(Ze(o.label),1)],64))])],16,RI)],8,AI))}}),NI=["id","d","marker-end","marker-start"],DI=["d","stroke-width"],LI={name:"BaseEdge",inheritAttrs:!1,compatConfig:{MODE:3}},$u=Rt({...LI,props:{id:{},labelX:{},labelY:{},path:{},label:{},markerStart:{},markerEnd:{},interactionWidth:{default:20},labelStyle:{},labelShowBg:{type:Boolean},labelBgStyle:{},labelBgPadding:{},labelBgBorderRadius:{}},setup(t,{expose:e}){const n=qe(null),i=qe(null),r=qe(null),o=Zd();return e({pathEl:n,interactionEl:i,labelEl:r}),(s,a)=>(ye(),Se(ut,null,[fe("path",Ys(ge(o),{id:s.id,ref_key:"pathEl",ref:n,d:s.path,class:"vue-flow__edge-path","marker-end":s.markerEnd,"marker-start":s.markerStart}),null,16,NI),s.interactionWidth?(ye(),Se("path",{key:0,ref_key:"interactionEl",ref:i,fill:"none",d:s.path,"stroke-width":s.interactionWidth,"stroke-opacity":0,class:"vue-flow__edge-interaction"},null,8,DI)):Je("",!0),s.label&&s.labelX&&s.labelY?(ye(),mn(PI,{key:1,ref_key:"labelEl",ref:r,x:s.labelX,y:s.labelY,label:s.label,"label-show-bg":s.labelShowBg,"label-bg-style":s.labelBgStyle,"label-bg-padding":s.labelBgPadding,"label-bg-border-radius":s.labelBgBorderRadius,"label-style":s.labelStyle},null,8,["x","y","label","label-show-bg","label-bg-style","label-bg-padding","label-bg-border-radius","label-style"])):Je("",!0)],64))}});function I_({sourceX:t,sourceY:e,targetX:n,targetY:i}){const r=Math.abs(n-t)/2,o=n<t?n+r:n-r,s=Math.abs(i-e)/2,a=i<e?i+s:i-s;return[o,a,r,s]}function P_({sourceX:t,sourceY:e,targetX:n,targetY:i,sourceControlX:r,sourceControlY:o,targetControlX:s,targetControlY:a}){const l=t*.125+r*.375+s*.375+n*.125,u=e*.125+o*.375+a*.375+i*.125,c=Math.abs(l-t),f=Math.abs(u-e);return[l,u,c,f]}function al(t,e){return t>=0?.5*t:e*25*Math.sqrt(-t)}function tg({pos:t,x1:e,y1:n,x2:i,y2:r,c:o}){let s,a;switch(t){case He.Left:s=e-al(e-i,o),a=n;break;case He.Right:s=e+al(i-e,o),a=n;break;case He.Top:s=e,a=n-al(n-r,o);break;case He.Bottom:s=e,a=n+al(r-n,o);break}return[s,a]}function N_(t){const{sourceX:e,sourceY:n,sourcePosition:i=He.Bottom,targetX:r,targetY:o,targetPosition:s=He.Top,curvature:a=.25}=t,[l,u]=tg({pos:i,x1:e,y1:n,x2:r,y2:o,c:a}),[c,f]=tg({pos:s,x1:r,y1:o,x2:e,y2:n,c:a}),[d,h,g,_]=P_({sourceX:e,sourceY:n,targetX:r,targetY:o,sourceControlX:l,sourceControlY:u,targetControlX:c,targetControlY:f});return[`M${e},${n} C${l},${u} ${c},${f} ${r},${o}`,d,h,g,_]}function ng({pos:t,x1:e,y1:n,x2:i,y2:r}){let o,s;switch(t){case He.Left:case He.Right:o=.5*(e+i),s=n;break;case He.Top:case He.Bottom:o=e,s=.5*(n+r);break}return[o,s]}function D_(t){const{sourceX:e,sourceY:n,sourcePosition:i=He.Bottom,targetX:r,targetY:o,targetPosition:s=He.Top}=t,[a,l]=ng({pos:i,x1:e,y1:n,x2:r,y2:o}),[u,c]=ng({pos:s,x1:r,y1:o,x2:e,y2:n}),[f,d,h,g]=P_({sourceX:e,sourceY:n,targetX:r,targetY:o,sourceControlX:a,sourceControlY:l,targetControlX:u,targetControlY:c});return[`M${e},${n} C${a},${l} ${u},${c} ${r},${o}`,f,d,h,g]}const ig={[He.Left]:{x:-1,y:0},[He.Right]:{x:1,y:0},[He.Top]:{x:0,y:-1},[He.Bottom]:{x:0,y:1}};function FI({source:t,sourcePosition:e=He.Bottom,target:n}){return e===He.Left||e===He.Right?t.x<n.x?{x:1,y:0}:{x:-1,y:0}:t.y<n.y?{x:0,y:1}:{x:0,y:-1}}function rg(t,e){return Math.sqrt((e.x-t.x)**2+(e.y-t.y)**2)}function UI({source:t,sourcePosition:e=He.Bottom,target:n,targetPosition:i=He.Top,center:r,offset:o}){const s=ig[e],a=ig[i],l={x:t.x+s.x*o,y:t.y+s.y*o},u={x:n.x+a.x*o,y:n.y+a.y*o},c=FI({source:l,sourcePosition:e,target:u}),f=c.x!==0?"x":"y",d=c[f];let h,g,_;const m={x:0,y:0},p={x:0,y:0},[b,S,x,D]=I_({sourceX:t.x,sourceY:t.y,targetX:n.x,targetY:n.y});if(s[f]*a[f]===-1){g=r.x??b,_=r.y??S;const z=[{x:g,y:l.y},{x:g,y:u.y}],y=[{x:l.x,y:_},{x:u.x,y:_}];s[f]===d?h=f==="x"?z:y:h=f==="x"?y:z}else{const z=[{x:l.x,y:u.y}],y=[{x:u.x,y:l.y}];if(f==="x"?h=s.x===d?y:z:h=s.y===d?z:y,e===i){const B=Math.abs(t[f]-n[f]);if(B<=o){const v=Math.min(o-1,o-B);s[f]===d?m[f]=(l[f]>t[f]?-1:1)*v:p[f]=(u[f]>n[f]?-1:1)*v}}if(e!==i){const B=f==="x"?"y":"x",v=s[f]===a[B],A=l[B]>u[B],E=l[B]<u[B];(s[f]===1&&(!v&&A||v&&E)||s[f]!==1&&(!v&&E||v&&A))&&(h=f==="x"?z:y)}const M={x:l.x+m.x,y:l.y+m.y},N={x:u.x+p.x,y:u.y+p.y},C=Math.max(Math.abs(M.x-h[0].x),Math.abs(N.x-h[0].x)),P=Math.max(Math.abs(M.y-h[0].y),Math.abs(N.y-h[0].y));C>=P?(g=(M.x+N.x)/2,_=h[0].y):(g=h[0].x,_=(M.y+N.y)/2)}return[[t,{x:l.x+m.x,y:l.y+m.y},...h,{x:u.x+p.x,y:u.y+p.y},n],g,_,x,D]}function OI(t,e,n,i){const r=Math.min(rg(t,e)/2,rg(e,n)/2,i),{x:o,y:s}=e;if(t.x===o&&o===n.x||t.y===s&&s===n.y)return`L${o} ${s}`;if(t.y===s){const u=t.x<n.x?-1:1,c=t.y<n.y?1:-1;return`L ${o+r*u},${s}Q ${o},${s} ${o},${s+r*c}`}const a=t.x<n.x?1:-1,l=t.y<n.y?-1:1;return`L ${o},${s+r*l}Q ${o},${s} ${o+r*a},${s}`}function wd(t){const{sourceX:e,sourceY:n,sourcePosition:i=He.Bottom,targetX:r,targetY:o,targetPosition:s=He.Top,borderRadius:a=5,centerX:l,centerY:u,offset:c=20}=t,[f,d,h,g,_]=UI({source:{x:e,y:n},sourcePosition:i,target:{x:r,y:o},targetPosition:s,center:{x:l,y:u},offset:c});return[f.reduce((p,b,S)=>{let x;return S>0&&S<f.length-1?x=OI(f[S-1],b,f[S+1],a):x=`${S===0?"M":"L"}${b.x} ${b.y}`,p+=x,p},""),d,h,g,_]}function BI(t){const{sourceX:e,sourceY:n,targetX:i,targetY:r}=t,[o,s,a,l]=I_({sourceX:e,sourceY:n,targetX:i,targetY:r});return[`M ${e},${n}L ${i},${r}`,o,s,a,l]}const kI=Rt({name:"StraightEdge",props:["label","labelStyle","labelShowBg","labelBgStyle","labelBgPadding","labelBgBorderRadius","sourceY","sourceX","targetX","targetY","markerEnd","markerStart","interactionWidth"],compatConfig:{MODE:3},setup(t,{attrs:e}){return()=>{const[n,i,r]=BI(t);return xt($u,{path:n,labelX:i,labelY:r,...e,...t})}}}),zI=kI,VI=Rt({name:"SmoothStepEdge",props:["sourcePosition","targetPosition","label","labelStyle","labelShowBg","labelBgStyle","labelBgPadding","labelBgBorderRadius","sourceY","sourceX","targetX","targetY","borderRadius","markerEnd","markerStart","interactionWidth","offset"],compatConfig:{MODE:3},setup(t,{attrs:e}){return()=>{const[n,i,r]=wd({...t,sourcePosition:t.sourcePosition??He.Bottom,targetPosition:t.targetPosition??He.Top});return xt($u,{path:n,labelX:i,labelY:r,...e,...t})}}}),L_=VI,HI=Rt({name:"StepEdge",props:["sourcePosition","targetPosition","label","labelStyle","labelShowBg","labelBgStyle","labelBgPadding","labelBgBorderRadius","sourceY","sourceX","targetX","targetY","markerEnd","markerStart","interactionWidth"],setup(t,{attrs:e}){return()=>xt(L_,{...t,...e,borderRadius:0})}}),$I=HI,GI=Rt({name:"BezierEdge",props:["sourcePosition","targetPosition","label","labelStyle","labelShowBg","labelBgStyle","labelBgPadding","labelBgBorderRadius","sourceY","sourceX","targetX","targetY","curvature","markerEnd","markerStart","interactionWidth"],compatConfig:{MODE:3},setup(t,{attrs:e}){return()=>{const[n,i,r]=N_({...t,sourcePosition:t.sourcePosition??He.Bottom,targetPosition:t.targetPosition??He.Top});return xt($u,{path:n,labelX:i,labelY:r,...e,...t})}}}),WI=GI,XI=Rt({name:"SimpleBezierEdge",props:["sourcePosition","targetPosition","label","labelStyle","labelShowBg","labelBgStyle","labelBgPadding","labelBgBorderRadius","sourceY","sourceX","targetX","targetY","markerEnd","markerStart","interactionWidth"],compatConfig:{MODE:3},setup(t,{attrs:e}){return()=>{const[n,i,r]=D_({...t,sourcePosition:t.sourcePosition??He.Bottom,targetPosition:t.targetPosition??He.Top});return xt($u,{path:n,labelX:i,labelY:r,...e,...t})}}}),YI=XI,qI={input:TI,default:wI,output:EI},KI={default:WI,straight:zI,step:$I,smoothstep:L_,simplebezier:YI};function ZI(t,e,n){const i=De(()=>_=>e.value.get(_)),r=De(()=>_=>n.value.get(_)),o=De(()=>{const _={...KI,...t.edgeTypes},m=Object.keys(_);for(const p of t.edges)p.type&&!m.includes(p.type)&&(_[p.type]=p.type);return _}),s=De(()=>{const _={...qI,...t.nodeTypes},m=Object.keys(_);for(const p of t.nodes)p.type&&!m.includes(p.type)&&(_[p.type]=p.type);return _}),a=De(()=>t.onlyRenderVisibleElements?g_(t.nodes,{x:0,y:0,width:t.dimensions.width,height:t.dimensions.height},t.viewport,!0):t.nodes),l=De(()=>{if(t.onlyRenderVisibleElements){const _=[];for(const m of t.edges){const p=e.value.get(m.source),b=e.value.get(m.target);Y3({sourcePos:p.computedPosition||{x:0,y:0},targetPos:b.computedPosition||{x:0,y:0},sourceWidth:p.dimensions.width,sourceHeight:p.dimensions.height,targetWidth:b.dimensions.width,targetHeight:b.dimensions.height,width:t.dimensions.width,height:t.dimensions.height,viewport:t.viewport})&&_.push(m)}return _}return t.edges}),u=De(()=>[...a.value,...l.value]),c=De(()=>{const _=[];for(const m of t.nodes)m.selected&&_.push(m);return _}),f=De(()=>{const _=[];for(const m of t.edges)m.selected&&_.push(m);return _}),d=De(()=>[...c.value,...f.value]),h=De(()=>{const _=[];for(const m of t.nodes)m.dimensions.width&&m.dimensions.height&&m.handleBounds!==void 0&&_.push(m);return _}),g=De(()=>a.value.length>0&&h.value.length===a.value.length);return{getNode:i,getEdge:r,getElements:u,getEdgeTypes:o,getNodeTypes:s,getEdges:l,getNodes:a,getSelectedElements:d,getSelectedNodes:c,getSelectedEdges:f,getNodesInitialized:h,areNodesInitialized:g}}class Zr{constructor(){this.currentId=0,this.flows=new Map}static getInstance(){var e;const n=(e=rr())==null?void 0:e.appContext.app,i=n?.config.globalProperties.$vueFlowStorage??Zr.instance;return Zr.instance=i??new Zr,n&&(n.config.globalProperties.$vueFlowStorage=Zr.instance),Zr.instance}set(e,n){return this.flows.set(e,n)}get(e){return this.flows.get(e)}remove(e){return this.flows.delete(e)}create(e,n){const i=R_(),r=Ar(i),o={};for(const[d,h]of Object.entries(r.hooks)){const g=`on${d.charAt(0).toUpperCase()+d.slice(1)}`;o[g]=h.on}const s={};for(const[d,h]of Object.entries(r.hooks))s[d]=h.trigger;const a=De(()=>{const d=new Map;for(const h of r.nodes)d.set(h.id,h);return d}),l=De(()=>{const d=new Map;for(const h of r.edges)d.set(h.id,h);return d}),u=ZI(r,a,l),c=bI(r,a,l);c.setState({...r,...n});const f={...o,...u,...c,...$A(r),nodeLookup:a,edgeLookup:l,emits:s,id:e,vueFlowVersion:"1.48.2",$destroy:()=>{this.remove(e)}};return this.set(e,f),f}getId(){return`vue-flow-${this.currentId++}`}}function It(t){const e=Zr.getInstance(),n=_u(),i=typeof t=="object",r=i?t:{id:t},o=r.id,s=o??n?.vueFlowId;let a;if(n){const l=An(eg,null);typeof l<"u"&&l!==null&&(!s||l.id===s)&&(a=l)}if(a||s&&(a=e.get(s)),!a||s&&a.id!==s){const l=o??e.getId(),u=e.create(l,r);a=u,(n??vu(!0)).run(()=>{ft(u.applyDefault,(f,d,h)=>{const g=m=>{u.applyNodeChanges(m)},_=m=>{u.applyEdgeChanges(m)};f?(u.onNodesChange(g),u.onEdgesChange(_)):(u.hooks.value.nodesChange.off(g),u.hooks.value.edgesChange.off(_)),h(()=>{u.hooks.value.nodesChange.off(g),u.hooks.value.edgesChange.off(_)})},{immediate:!0}),Js(()=>{if(a){const f=e.get(a.id);f?f.$destroy():Sa(`No store instance found for id ${a.id} in storage.`)}})})}else i&&a.setState(r);if(n&&(Cr(eg,a),n.vueFlowId=a.id),i){const l=rr();l?.type.name!=="VueFlow"&&a.emits.error(new Wt($t.USEVUEFLOW_OPTIONS))}return a}function jI(t){const{emits:e,dimensions:n}=It();let i;On(()=>{const r=()=>{var o,s;if(!t.value||!(((s=(o=t.value).checkVisibility)==null?void 0:s.call(o))??!0))return;const a=Ou(t.value);(a.width===0||a.height===0)&&e.error(new Wt($t.MISSING_VIEWPORT_DIMENSIONS)),n.value={width:a.width||500,height:a.height||500}};r(),window.addEventListener("resize",r),t.value&&(i=new ResizeObserver(()=>r()),i.observe(t.value)),ss(()=>{window.removeEventListener("resize",r),i&&t.value&&i.unobserve(t.value)})})}const JI={name:"UserSelection",compatConfig:{MODE:3}},QI=Rt({...JI,props:{userSelectionRect:{}},setup(t){return(e,n)=>(ye(),Se("div",{class:"vue-flow__selection vue-flow__container",style:yt({width:`${e.userSelectionRect.width}px`,height:`${e.userSelectionRect.height}px`,transform:`translate(${e.userSelectionRect.x}px, ${e.userSelectionRect.y}px)`})},null,4))}}),eP=["tabIndex"],tP={name:"NodesSelection",compatConfig:{MODE:3}},nP=Rt({...tP,setup(t){const{emits:e,viewport:n,getSelectedNodes:i,noPanClassName:r,disableKeyboardA11y:o,userSelectionActive:s}=It(),a=C_(),l=qe(null),u=w_({el:l,onStart(g){e.selectionDragStart(g),e.nodeDragStart(g)},onDrag(g){e.selectionDrag(g),e.nodeDrag(g)},onStop(g){e.selectionDragStop(g),e.nodeDragStop(g)}});On(()=>{var g;o.value||(g=l.value)==null||g.focus({preventScroll:!0})});const c=De(()=>Sh(i.value)),f=De(()=>({width:`${c.value.width}px`,height:`${c.value.height}px`,top:`${c.value.y}px`,left:`${c.value.x}px`}));function d(g){e.selectionContextMenu({event:g,nodes:i.value})}function h(g){o.value||Go[g.key]&&(g.preventDefault(),a({x:Go[g.key].x,y:Go[g.key].y},g.shiftKey))}return(g,_)=>!ge(s)&&c.value.width&&c.value.height?(ye(),Se("div",{key:0,class:Dt(["vue-flow__nodesselection vue-flow__container",ge(r)]),style:yt({transform:`translate(${ge(n).x}px,${ge(n).y}px) scale(${ge(n).zoom})`})},[fe("div",{ref_key:"el",ref:l,class:Dt([{dragging:ge(u)},"vue-flow__nodesselection-rect"]),style:yt(f.value),tabIndex:ge(o)?void 0:-1,onContextmenu:d,onKeydown:h},null,46,eP)],6)):Je("",!0)}});function iP(t,e){return{x:t.clientX-e.left,y:t.clientY-e.top}}const rP={name:"Pane",compatConfig:{MODE:3}},oP=Rt({...rP,props:{isSelecting:{type:Boolean},selectionKeyPressed:{type:Boolean}},setup(t){const{vueFlowRef:e,nodes:n,viewport:i,emits:r,userSelectionActive:o,removeSelectedElements:s,userSelectionRect:a,elementsSelectable:l,nodesSelectionActive:u,getSelectedEdges:c,getSelectedNodes:f,removeNodes:d,removeEdges:h,selectionMode:g,deleteKeyCode:_,multiSelectionKeyCode:m,multiSelectionActive:p,edgeLookup:b,nodeLookup:S,connectionLookup:x,defaultEdgeOptions:D,connectionStartHandle:O,panOnDrag:z}=It(),y=Er(null),M=Er(new Set),N=Er(new Set),C=Er(null),P=vt(()=>l.value&&(t.isSelecting||o.value)),B=vt(()=>O.value!==null);let v=!1,A=!1;const E=Hs(_,{actInsideInputWithModifier:!1}),I=Hs(m);ft(E,pe=>{pe&&(d(f.value),h(c.value),u.value=!1)}),ft(I,pe=>{p.value=pe});function V(pe,Z){return ne=>{ne.target===Z&&pe?.(ne)}}function W(pe){if(v||B.value){v=!1;return}r.paneClick(pe),s(),u.value=!1}function q(pe){var Z;if(Array.isArray(z.value)&&((Z=z.value)!=null&&Z.includes(2))){pe.preventDefault();return}r.paneContextMenu(pe)}function $(pe){r.paneScroll(pe)}function K(pe){var Z,ne,le;if(C.value=((Z=e.value)==null?void 0:Z.getBoundingClientRect())??null,!l.value||!t.isSelecting||pe.button!==0||pe.target!==y.value||!C.value)return;(le=(ne=pe.target)==null?void 0:ne.setPointerCapture)==null||le.call(ne,pe.pointerId);const{x:xe,y:be}=iP(pe,C.value);A=!0,v=!1,s(),a.value={width:0,height:0,startX:xe,startY:be,x:xe,y:be},r.selectionStart(pe)}function ae(pe){var Z;if(!C.value||!a.value)return;v=!0;const{x:ne,y:le}=ui(pe,C.value),{startX:xe=0,startY:be=0}=a.value,Ce={startX:xe,startY:be,x:ne<xe?ne:xe,y:le<be?le:be,width:Math.abs(ne-xe),height:Math.abs(le-be)},H=M.value,X=N.value;M.value=new Set(g_(n.value,Ce,i.value,g.value===bh.Partial,!0).map(F=>F.id)),N.value=new Set;const L=((Z=D.value)==null?void 0:Z.selectable)??!0;for(const F of M.value){const U=x.value.get(F);if(U)for(const{edgeId:G}of U.values()){const T=b.value.get(G);T&&(T.selectable??L)&&N.value.add(G)}}if(!Qm(H,M.value)){const F=xr(S.value,M.value,!0);r.nodesChange(F)}if(!Qm(X,N.value)){const F=xr(b.value,N.value);r.edgesChange(F)}a.value=Ce,o.value=!0,u.value=!1}function ve(pe){var Z;pe.button!==0||!A||((Z=pe.target)==null||Z.releasePointerCapture(pe.pointerId),!o.value&&a.value&&pe.target===y.value&&W(pe),o.value=!1,a.value=null,u.value=M.value.size>0,r.selectionEnd(pe),t.selectionKeyPressed&&(v=!1),A=!1)}return(pe,Z)=>(ye(),Se("div",{ref_key:"container",ref:y,class:Dt(["vue-flow__pane vue-flow__container",{selection:pe.isSelecting}]),onClick:Z[0]||(Z[0]=ne=>P.value?void 0:V(W,y.value)(ne)),onContextmenu:Z[1]||(Z[1]=ne=>V(q,y.value)(ne)),onWheelPassive:Z[2]||(Z[2]=ne=>V($,y.value)(ne)),onPointerenter:Z[3]||(Z[3]=ne=>P.value?void 0:ge(r).paneMouseEnter(ne)),onPointerdown:Z[4]||(Z[4]=ne=>P.value?K(ne):ge(r).paneMouseMove(ne)),onPointermove:Z[5]||(Z[5]=ne=>P.value?ae(ne):ge(r).paneMouseMove(ne)),onPointerup:Z[6]||(Z[6]=ne=>P.value?ve(ne):void 0),onPointerleave:Z[7]||(Z[7]=ne=>ge(r).paneMouseLeave(ne))},[Ln(pe.$slots,"default"),ge(o)&&ge(a)?(ye(),mn(QI,{key:0,"user-selection-rect":ge(a)},null,8,["user-selection-rect"])):Je("",!0),ge(u)&&ge(f).length?(ye(),mn(nP,{key:1})):Je("",!0)],34))}}),sP={name:"Transform",compatConfig:{MODE:3}},aP=Rt({...sP,setup(t){const{viewport:e,fitViewOnInit:n,fitViewOnInitDone:i}=It(),r=De(()=>n.value?!i.value:!1),o=De(()=>`translate(${e.value.x}px,${e.value.y}px) scale(${e.value.zoom})`);return(s,a)=>(ye(),Se("div",{class:"vue-flow__transformationpane vue-flow__container",style:yt({transform:o.value,opacity:r.value?0:void 0})},[Ln(s.$slots,"default")],4))}}),lP={name:"Viewport",compatConfig:{MODE:3}},uP=Rt({...lP,setup(t){const{minZoom:e,maxZoom:n,defaultViewport:i,translateExtent:r,zoomActivationKeyCode:o,selectionKeyCode:s,panActivationKeyCode:a,panOnScroll:l,panOnScrollMode:u,panOnScrollSpeed:c,panOnDrag:f,zoomOnDoubleClick:d,zoomOnPinch:h,zoomOnScroll:g,preventScrolling:_,noWheelClassName:m,noPanClassName:p,emits:b,connectionStartHandle:S,userSelectionActive:x,paneDragging:D,d3Zoom:O,d3Selection:z,d3ZoomHandler:y,viewport:M,viewportRef:N,paneClickDistance:C}=It();jI(N);const P=Er(!1),B=Er(!1);let v=null,A=!1,E=0,I={x:0,y:0,zoom:0};const V=Hs(a),W=Hs(s),q=Hs(o),$=vt(()=>(!W.value||W.value&&s.value===!0)&&(V.value||f.value)),K=vt(()=>V.value||l.value),ae=vt(()=>s.value===!0&&$.value!==!0),ve=vt(()=>W.value&&s.value!==!0||x.value||ae.value),pe=vt(()=>S.value!==null);On(()=>{if(!N.value){Sa("Viewport element is missing");return}const be=N.value,Ce=be.getBoundingClientRect(),H=A3().clickDistance(C.value).scaleExtent([e.value,n.value]).translateExtent(r.value),X=Gn(be).call(H),L=X.on("wheel.zoom"),F=ns.translate(i.value.x??0,i.value.y??0).scale(tr(i.value.zoom??1,e.value,n.value)),U=[[0,0],[Ce.width,Ce.height]],G=H.constrain()(F,U,r.value);H.transform(X,G),H.wheelDelta(bd),O.value=H,z.value=X,y.value=L,M.value={x:G.x,y:G.y,zoom:G.k},H.on("start",T=>{var te;if(!T.sourceEvent)return null;E=T.sourceEvent.button,P.value=!0;const Q=le(T.transform);((te=T.sourceEvent)==null?void 0:te.type)==="mousedown"&&(D.value=!0),I=Q,b.viewportChangeStart(Q),b.moveStart({event:T,flowTransform:Q})}),H.on("end",T=>{if(!T.sourceEvent)return null;if(P.value=!1,D.value=!1,Z($.value,E??0)&&!A&&b.paneContextMenu(T.sourceEvent),A=!1,ne(I,T.transform)){const te=le(T.transform);I=te,b.viewportChangeEnd(te),b.moveEnd({event:T,flowTransform:te})}}),H.filter(T=>{var te;const Q=q.value||g.value,J=h.value&&T.ctrlKey,ie=T.button,R=T.type==="wheel";if(ie===1&&T.type==="mousedown"&&(xe(T,"vue-flow__node")||xe(T,"vue-flow__edge")))return!0;if(!$.value&&!Q&&!K.value&&!d.value&&!h.value||x.value||pe.value&&!R||!d.value&&T.type==="dblclick"||xe(T,m.value)&&R||xe(T,p.value)&&(!R||K.value&&R&&!q.value)||!h.value&&T.ctrlKey&&R||!Q&&!K.value&&!J&&R)return!1;if(!h&&T.type==="touchstart"&&((te=T.touches)==null?void 0:te.length)>1)return T.preventDefault(),!1;if(!$.value&&(T.type==="mousedown"||T.type==="touchstart")||ae.value&&Array.isArray(f.value)&&f.value.includes(0)&&ie===0||Array.isArray(f.value)&&!f.value.includes(ie)&&(T.type==="mousedown"||T.type==="touchstart"))return!1;const w=Array.isArray(f.value)&&f.value.includes(ie)||s.value===!0&&Array.isArray(f.value)&&!f.value.includes(0)||!ie||ie<=1;return(!T.ctrlKey||V.value||R)&&w}),ft([x,$],()=>{x.value&&!P.value?H.on("zoom",null):x.value||H.on("zoom",T=>{M.value={x:T.transform.x,y:T.transform.y,zoom:T.transform.k};const te=le(T.transform);A=Z($.value,E??0),b.viewportChange(te),b.move({event:T,flowTransform:te})})},{immediate:!0}),ft([x,K,u,q,h,_,m],()=>{K.value&&!q.value&&!x.value?X.on("wheel.zoom",T=>{if(xe(T,m.value))return!1;const te=q.value||g.value,Q=h.value&&T.ctrlKey;if(!(!_.value||K.value||te||Q))return!1;T.preventDefault(),T.stopImmediatePropagation();const ie=X.property("__zoom").k||1,R=sa();if(!V.value&&T.ctrlKey&&h.value&&R){const oe=ri(T),Ie=bd(T),Me=ie*2**Ie;H.scaleTo(X,Me,oe,T);return}const w=T.deltaMode===1?20:1;let Y=u.value===Vs.Vertical?0:T.deltaX*w,re=u.value===Vs.Horizontal?0:T.deltaY*w;!R&&T.shiftKey&&u.value!==Vs.Vertical&&!Y&&re&&(Y=re,re=0),H.translateBy(X,-(Y/ie)*c.value,-(re/ie)*c.value);const de=le(X.property("__zoom"));v&&clearTimeout(v),B.value?(b.move({event:T,flowTransform:de}),b.viewportChange(de),v=setTimeout(()=>{b.moveEnd({event:T,flowTransform:de}),b.viewportChangeEnd(de),B.value=!1},150)):(B.value=!0,b.moveStart({event:T,flowTransform:de}),b.viewportChangeStart(de))},{passive:!1}):typeof L<"u"&&X.on("wheel.zoom",function(T,te){const Q=!_.value&&T.type==="wheel"&&!T.ctrlKey,J=q.value||g.value,ie=h.value&&T.ctrlKey;if(!J&&!l.value&&!ie&&T.type==="wheel"||Q||xe(T,m.value))return null;T.preventDefault(),L.call(this,T,te)},{passive:!1})},{immediate:!0})});function Z(be,Ce){return Ce===2&&Array.isArray(be)&&be.includes(2)}function ne(be,Ce){return be.x!==Ce.x&&!Number.isNaN(Ce.x)||be.y!==Ce.y&&!Number.isNaN(Ce.y)||be.zoom!==Ce.k&&!Number.isNaN(Ce.k)}function le(be){return{x:be.x,y:be.y,zoom:be.k}}function xe(be,Ce){return be.target.closest(`.${Ce}`)}return(be,Ce)=>(ye(),Se("div",{ref_key:"viewportRef",ref:N,class:"vue-flow__viewport vue-flow__container"},[it(oP,{"is-selecting":ve.value,"selection-key-pressed":ge(W),class:Dt({connecting:pe.value,dragging:ge(D),draggable:ge(f)===!0||Array.isArray(ge(f))&&ge(f).includes(0)})},{default:En(()=>[it(aP,null,{default:En(()=>[Ln(be.$slots,"default")]),_:3})]),_:3},8,["is-selecting","selection-key-pressed","class"])],512))}}),cP=["id"],fP=["id"],dP=["id"],hP={name:"A11yDescriptions",compatConfig:{MODE:3}},pP=Rt({...hP,setup(t){const{id:e,disableKeyboardA11y:n,ariaLiveMessage:i}=It();return(r,o)=>(ye(),Se(ut,null,[fe("div",{id:`${ge(a_)}-${ge(e)}`,style:{display:"none"}}," Press enter or space to select a node. "+Ze(ge(n)?"":"You can then use the arrow keys to move the node around.")+" You can then use the arrow keys to move the node around, press delete to remove it and press escape to cancel. ",9,cP),fe("div",{id:`${ge(l_)}-${ge(e)}`,style:{display:"none"}}," Press enter or space to select an edge. You can then press delete to remove it or press escape to cancel. ",8,fP),ge(n)?Je("",!0):(ye(),Se("div",{key:0,id:`${ge(D3)}-${ge(e)}`,"aria-live":"assertive","aria-atomic":"true",style:{position:"absolute",width:"1px",height:"1px",margin:"-1px",border:"0",padding:"0",overflow:"hidden",clip:"rect(0px, 0px, 0px, 0px)","clip-path":"inset(100%)"}},Ze(ge(i)),9,dP))],64))}});function mP(){const t=It();ft(()=>t.viewportHelper.value.viewportInitialized,e=>{e&&setTimeout(()=>{t.emits.init(t),t.emits.paneReady(t)},1)})}function gP(t,e,n){return n===He.Left?t-e:n===He.Right?t+e:t}function vP(t,e,n){return n===He.Top?t-e:n===He.Bottom?t+e:t}const Th=function({radius:t=10,centerX:e=0,centerY:n=0,position:i=He.Top,type:r}){return xt("circle",{class:`vue-flow__edgeupdater vue-flow__edgeupdater-${r}`,cx:gP(e,t,i),cy:vP(n,t,i),r:t,stroke:"transparent",fill:"transparent"})};Th.props=["radius","centerX","centerY","position","type"];Th.compatConfig={MODE:3};const og=Th,_P=Rt({name:"Edge",compatConfig:{MODE:3},props:["id"],setup(t){const{id:e,addSelectedEdges:n,connectionMode:i,edgeUpdaterRadius:r,emits:o,nodesSelectionActive:s,noPanClassName:a,getEdgeTypes:l,removeSelectedEdges:u,findEdge:c,findNode:f,isValidConnection:d,multiSelectionActive:h,disableKeyboardA11y:g,elementsSelectable:_,edgesUpdatable:m,edgesFocusable:p,hooks:b}=It(),S=De(()=>c(t.id)),{emit:x,on:D}=uI(S.value,o),O=An(ku),z=rr(),y=qe(!1),M=qe(!1),N=qe(""),C=qe(null),P=qe("source"),B=qe(null),v=vt(()=>typeof S.value.selectable>"u"?_.value:S.value.selectable),A=vt(()=>typeof S.value.updatable>"u"?m.value:S.value.updatable),E=vt(()=>typeof S.value.focusable>"u"?p.value:S.value.focusable);Cr(sI,t.id),Cr(aI,B);const I=De(()=>S.value.class instanceof Function?S.value.class(S.value):S.value.class),V=De(()=>S.value.style instanceof Function?S.value.style(S.value):S.value.style),W=De(()=>{const F=S.value.type||"default",U=O?.[`edge-${F}`];if(U)return U;let G=S.value.template??l.value[F];if(typeof G=="string"&&z){const T=Object.keys(z.appContext.components);T&&T.includes(F)&&(G=g0(F,!1))}return G&&typeof G!="string"?G:(o.error(new Wt($t.EDGE_TYPE_MISSING,G)),!1)}),{handlePointerDown:q}=T_({nodeId:N,handleId:C,type:P,isValidConnection:d,edgeUpdaterType:P,onEdgeUpdate:ae,onEdgeUpdateEnd:ve});return()=>{const F=f(S.value.source),U=f(S.value.target),G="pathOptions"in S.value?S.value.pathOptions:{};if(!F&&!U)return o.error(new Wt($t.EDGE_SOURCE_TARGET_MISSING,S.value.id,S.value.source,S.value.target)),null;if(!F)return o.error(new Wt($t.EDGE_SOURCE_MISSING,S.value.id,S.value.source)),null;if(!U)return o.error(new Wt($t.EDGE_TARGET_MISSING,S.value.id,S.value.target)),null;if(!S.value||S.value.hidden||F.hidden||U.hidden)return null;let T;i.value===Pr.Strict?T=F.handleBounds.source:T=[...F.handleBounds.source||[],...F.handleBounds.target||[]];const te=Ym(T,S.value.sourceHandle);let Q;i.value===Pr.Strict?Q=U.handleBounds.target:Q=[...U.handleBounds.target||[],...U.handleBounds.source||[]];const J=Ym(Q,S.value.targetHandle),ie=te?.position||He.Bottom,R=J?.position||He.Top,{x:w,y:Y}=is(F,te,ie),{x:re,y:de}=is(U,J,R);return S.value.sourceX=w,S.value.sourceY=Y,S.value.targetX=re,S.value.targetY=de,xt("g",{ref:B,key:t.id,"data-id":t.id,class:["vue-flow__edge",`vue-flow__edge-${W.value===!1?"default":S.value.type||"default"}`,a.value,I.value,{updating:y.value,selected:S.value.selected,animated:S.value.animated,inactive:!v.value&&!b.value.edgeClick.hasListeners()}],tabIndex:E.value?0:void 0,"aria-label":S.value.ariaLabel===null?void 0:S.value.ariaLabel??`Edge from ${S.value.source} to ${S.value.target}`,"aria-describedby":E.value?`${l_}-${e}`:void 0,"aria-roledescription":"edge",role:E.value?"group":"img",...S.value.domAttributes,onClick:Z,onContextmenu:ne,onDblclick:le,onMouseenter:xe,onMousemove:be,onMouseleave:Ce,onKeyDown:E.value?L:void 0},[M.value?null:xt(W.value===!1?l.value.default:W.value,{id:t.id,sourceNode:F,targetNode:U,source:S.value.source,target:S.value.target,type:S.value.type,updatable:A.value,selected:S.value.selected,animated:S.value.animated,label:S.value.label,labelStyle:S.value.labelStyle,labelShowBg:S.value.labelShowBg,labelBgStyle:S.value.labelBgStyle,labelBgPadding:S.value.labelBgPadding,labelBgBorderRadius:S.value.labelBgBorderRadius,data:S.value.data,events:{...S.value.events,...D},style:V.value,markerStart:`url('#${oa(S.value.markerStart,e)}')`,markerEnd:`url('#${oa(S.value.markerEnd,e)}')`,sourcePosition:ie,targetPosition:R,sourceX:w,sourceY:Y,targetX:re,targetY:de,sourceHandleId:S.value.sourceHandle,targetHandleId:S.value.targetHandle,interactionWidth:S.value.interactionWidth,...G}),[A.value==="source"||A.value===!0?[xt("g",{onMousedown:H,onMouseenter:$,onMouseout:K},xt(og,{position:ie,centerX:w,centerY:Y,radius:r.value,type:"source","data-type":"source"}))]:null,A.value==="target"||A.value===!0?[xt("g",{onMousedown:X,onMouseenter:$,onMouseout:K},xt(og,{position:R,centerX:re,centerY:de,radius:r.value,type:"target","data-type":"target"}))]:null]])};function $(){y.value=!0}function K(){y.value=!1}function ae(F,U){x.update({event:F,edge:S.value,connection:U})}function ve(F){x.updateEnd({event:F,edge:S.value}),M.value=!1}function pe(F,U){F.button===0&&(M.value=!0,N.value=U?S.value.target:S.value.source,C.value=(U?S.value.targetHandle:S.value.sourceHandle)??null,P.value=U?"target":"source",x.updateStart({event:F,edge:S.value}),q(F))}function Z(F){var U;const G={event:F,edge:S.value};v.value&&(s.value=!1,S.value.selected&&h.value?(u([S.value]),(U=B.value)==null||U.blur()):n([S.value])),x.click(G)}function ne(F){x.contextMenu({event:F,edge:S.value})}function le(F){x.doubleClick({event:F,edge:S.value})}function xe(F){x.mouseEnter({event:F,edge:S.value})}function be(F){x.mouseMove({event:F,edge:S.value})}function Ce(F){x.mouseLeave({event:F,edge:S.value})}function H(F){pe(F,!0)}function X(F){pe(F,!1)}function L(F){var U;!g.value&&u_.includes(F.key)&&v.value&&(F.key==="Escape"?((U=B.value)==null||U.blur(),u([c(t.id)])):n([c(t.id)]))}}}),yP=_P,xP=Rt({name:"ConnectionLine",compatConfig:{MODE:3},setup(){var t;const{id:e,connectionMode:n,connectionStartHandle:i,connectionEndHandle:r,connectionPosition:o,connectionLineType:s,connectionLineStyle:a,connectionLineOptions:l,connectionStatus:u,viewport:c,findNode:f}=It(),d=(t=An(ku))==null?void 0:t["connection-line"],h=De(()=>{var b;return f((b=i.value)==null?void 0:b.nodeId)}),g=De(()=>{var b;return f((b=r.value)==null?void 0:b.nodeId)??null}),_=De(()=>({x:(o.value.x-c.value.x)/c.value.zoom,y:(o.value.y-c.value.y)/c.value.zoom})),m=De(()=>l.value.markerStart?`url(#${oa(l.value.markerStart,e)})`:""),p=De(()=>l.value.markerEnd?`url(#${oa(l.value.markerEnd,e)})`:"");return()=>{var b,S,x;if(!h.value||!i.value)return null;const D=i.value.id,O=i.value.type,z=h.value.handleBounds;let y=z?.[O]??[];if(n.value===Pr.Loose){const V=z?.[O==="source"?"target":"source"]??[];y=[...y,...V]}if(!y)return null;const M=(D?y.find(V=>V.id===D):y[0])??null,N=M?.position??He.Top,{x:C,y:P}=is(h.value,M,N);let B=null;g.value&&(n.value===Pr.Strict?B=((b=g.value.handleBounds[O==="source"?"target":"source"])==null?void 0:b.find(V=>{var W;return V.id===((W=r.value)==null?void 0:W.id)}))||null:B=((S=[...g.value.handleBounds.source??[],...g.value.handleBounds.target??[]])==null?void 0:S.find(V=>{var W;return V.id===((W=r.value)==null?void 0:W.id)}))||null);const v=((x=r.value)==null?void 0:x.position)??(N?Sd[N]:null);if(!N||!v)return null;const A=s.value??l.value.type??qr.Bezier;let E="";const I={sourceX:C,sourceY:P,sourcePosition:N,targetX:_.value.x,targetY:_.value.y,targetPosition:v};return A===qr.Bezier?[E]=N_(I):A===qr.Step?[E]=wd({...I,borderRadius:0}):A===qr.SmoothStep?[E]=wd(I):A===qr.SimpleBezier?[E]=D_(I):E=`M${C},${P} ${_.value.x},${_.value.y}`,xt("svg",{class:"vue-flow__edges vue-flow__connectionline vue-flow__container"},xt("g",{class:"vue-flow__connection"},d?xt(d,{sourceX:C,sourceY:P,sourcePosition:N,targetX:_.value.x,targetY:_.value.y,targetPosition:v,sourceNode:h.value,sourceHandle:M,targetNode:g.value,targetHandle:B,markerEnd:p.value,markerStart:m.value,connectionStatus:u.value}):xt("path",{d:E,class:[l.value.class,u.value,"vue-flow__connection-path"],style:{...a.value,...l.value.style},"marker-end":p.value,"marker-start":m.value})))}}}),bP=xP,SP=["id","markerWidth","markerHeight","markerUnits","orient"],MP={name:"MarkerType",compatConfig:{MODE:3}},wP=Rt({...MP,props:{id:{},type:{},color:{default:"none"},width:{default:12.5},height:{default:12.5},markerUnits:{default:"strokeWidth"},orient:{default:"auto-start-reverse"},strokeWidth:{default:1}},setup(t){return(e,n)=>(ye(),Se("marker",{id:e.id,class:"vue-flow__arrowhead",viewBox:"-10 -10 20 20",refX:"0",refY:"0",markerWidth:`${e.width}`,markerHeight:`${e.height}`,markerUnits:e.markerUnits,orient:e.orient},[e.type===ge(yd).ArrowClosed?(ye(),Se("polyline",{key:0,style:yt({stroke:e.color,fill:e.color,strokeWidth:e.strokeWidth}),"stroke-linecap":"round","stroke-linejoin":"round",points:"-5,-4 0,0 -5,4 -5,-4"},null,4)):Je("",!0),e.type===ge(yd).Arrow?(ye(),Se("polyline",{key:1,style:yt({stroke:e.color,strokeWidth:e.strokeWidth}),"stroke-linecap":"round","stroke-linejoin":"round",fill:"none",points:"-5,-4 0,0 -5,4"},null,4)):Je("",!0)],8,SP))}}),EP={class:"vue-flow__marker vue-flow__container","aria-hidden":"true"},TP={name:"MarkerDefinitions",compatConfig:{MODE:3}},AP=Rt({...TP,setup(t){const{id:e,edges:n,connectionLineOptions:i,defaultMarkerColor:r}=It(),o=De(()=>{const s=new Set,a=[],l=u=>{if(u){const c=oa(u,e);s.has(c)||(typeof u=="object"?a.push({...u,id:c,color:u.color||r.value}):a.push({id:c,color:r.value,type:u}),s.add(c))}};for(const u of[i.value.markerEnd,i.value.markerStart])l(u);for(const u of n.value)for(const c of[u.markerStart,u.markerEnd])l(c);return a.sort((u,c)=>u.id.localeCompare(c.id))});return(s,a)=>(ye(),Se("svg",EP,[fe("defs",null,[(ye(!0),Se(ut,null,dn(o.value,l=>(ye(),mn(wP,{id:l.id,key:l.id,type:l.type,color:l.color,width:l.width,height:l.height,markerUnits:l.markerUnits,"stroke-width":l.strokeWidth,orient:l.orient},null,8,["id","type","color","width","height","markerUnits","stroke-width","orient"]))),128))])]))}}),CP={name:"Edges",compatConfig:{MODE:3}},RP=Rt({...CP,setup(t){const{findNode:e,getEdges:n,elevateEdgesOnSelect:i}=It();return(r,o)=>(ye(),Se(ut,null,[it(AP),(ye(!0),Se(ut,null,dn(ge(n),s=>(ye(),Se("svg",{key:s.id,class:"vue-flow__edges vue-flow__container",style:yt({zIndex:ge(q3)(s,ge(e),ge(i))})},[it(ge(yP),{id:s.id},null,8,["id"])],4))),128)),it(ge(bP))],64))}}),IP=Rt({name:"Node",compatConfig:{MODE:3},props:["id","resizeObserver"],setup(t){const{id:e,noPanClassName:n,selectNodesOnDrag:i,nodesSelectionActive:r,multiSelectionActive:o,emits:s,removeSelectedNodes:a,addSelectedNodes:l,updateNodeDimensions:u,onUpdateNodeInternals:c,getNodeTypes:f,nodeExtent:d,elevateNodesOnSelect:h,disableKeyboardA11y:g,ariaLiveMessage:_,snapToGrid:m,snapGrid:p,nodeDragThreshold:b,nodesDraggable:S,elementsSelectable:x,nodesConnectable:D,nodesFocusable:O,hooks:z}=It(),y=qe(null);Cr(M_,y),Cr(Eh,t.id);const M=An(ku),N=rr(),C=C_(),{node:P,parentNode:B}=A_(t.id),{emit:v,on:A}=dI(P,s),E=vt(()=>typeof P.draggable>"u"?S.value:P.draggable),I=vt(()=>typeof P.selectable>"u"?x.value:P.selectable),V=vt(()=>typeof P.connectable>"u"?D.value:P.connectable),W=vt(()=>typeof P.focusable>"u"?O.value:P.focusable),q=De(()=>I.value||E.value||z.value.nodeClick.hasListeners()||z.value.nodeDoubleClick.hasListeners()||z.value.nodeMouseEnter.hasListeners()||z.value.nodeMouseMove.hasListeners()||z.value.nodeMouseLeave.hasListeners()),$=vt(()=>!!P.dimensions.width&&!!P.dimensions.height),K=De(()=>{const U=P.type||"default",G=M?.[`node-${U}`];if(G)return G;let T=P.template||f.value[U];if(typeof T=="string"&&N){const te=Object.keys(N.appContext.components);te&&te.includes(U)&&(T=g0(U,!1))}return T&&typeof T!="string"?T:(s.error(new Wt($t.NODE_TYPE_MISSING,T)),!1)}),ae=w_({id:t.id,el:y,disabled:()=>!E.value,selectable:I,dragHandle:()=>P.dragHandle,onStart(U){v.dragStart(U)},onDrag(U){v.drag(U)},onStop(U){v.dragStop(U)},onClick(U){L(U)}}),ve=De(()=>P.class instanceof Function?P.class(P):P.class),pe=De(()=>{const U=(P.style instanceof Function?P.style(P):P.style)||{},G=P.width instanceof Function?P.width(P):P.width,T=P.height instanceof Function?P.height(P):P.height;return!U.width&&G&&(U.width=typeof G=="string"?G:`${G}px`),!U.height&&T&&(U.height=typeof T=="string"?T:`${T}px`),U}),Z=vt(()=>Number(P.zIndex??pe.value.zIndex??0));return c(U=>{(U.includes(t.id)||!U.length)&&le()}),On(()=>{ft(()=>P.hidden,(U=!1,G,T)=>{!U&&y.value&&(t.resizeObserver.observe(y.value),T(()=>{y.value&&t.resizeObserver.unobserve(y.value)}))},{immediate:!0,flush:"post"})}),ft([()=>P.type,()=>P.sourcePosition,()=>P.targetPosition],()=>{Dn(()=>{u([{id:t.id,nodeElement:y.value,forceUpdate:!0}])})}),ft([()=>P.position.x,()=>P.position.y,()=>{var U;return(U=B.value)==null?void 0:U.computedPosition.x},()=>{var U;return(U=B.value)==null?void 0:U.computedPosition.y},()=>{var U;return(U=B.value)==null?void 0:U.computedPosition.z},Z,()=>P.selected,()=>P.dimensions.height,()=>P.dimensions.width,()=>{var U;return(U=B.value)==null?void 0:U.dimensions.height},()=>{var U;return(U=B.value)==null?void 0:U.dimensions.width}],([U,G,T,te,Q,J])=>{const ie={x:U,y:G,z:J+(h.value&&P.selected?1e3:0)};typeof T<"u"&&typeof te<"u"?P.computedPosition=H3({x:T,y:te,z:Q},ie):P.computedPosition=ie},{flush:"post",immediate:!0}),ft([()=>P.extent,d],([U,G],[T,te])=>{(U!==T||G!==te)&&ne()}),P.extent==="parent"||typeof P.extent=="object"&&"range"in P.extent&&P.extent.range==="parent"?cd(()=>$).toBe(!0).then(ne):ne(),()=>P.hidden?null:xt("div",{ref:y,"data-id":P.id,class:["vue-flow__node",`vue-flow__node-${K.value===!1?"default":P.type||"default"}`,{[n.value]:E.value,dragging:ae?.value,draggable:E.value,selected:P.selected,selectable:I.value,parent:P.isParent},ve.value],style:{visibility:$.value?"visible":"hidden",zIndex:P.computedPosition.z??Z.value,transform:`translate(${P.computedPosition.x}px,${P.computedPosition.y}px)`,pointerEvents:q.value?"all":"none",...pe.value},tabIndex:W.value?0:void 0,role:W.value?"group":void 0,"aria-describedby":g.value?void 0:`${a_}-${e}`,"aria-label":P.ariaLabel,"aria-roledescription":"node",...P.domAttributes,onMouseenter:xe,onMousemove:be,onMouseleave:Ce,onContextmenu:H,onClick:L,onDblclick:X,onKeydown:F},[xt(K.value===!1?f.value.default:K.value,{id:P.id,type:P.type,data:P.data,events:{...P.events,...A},selected:P.selected,resizing:P.resizing,dragging:ae.value,connectable:V.value,position:P.computedPosition,dimensions:P.dimensions,isValidTargetPos:P.isValidTargetPos,isValidSourcePos:P.isValidSourcePos,parent:P.parentNode,parentNodeId:P.parentNode,zIndex:P.computedPosition.z??Z.value,targetPosition:P.targetPosition,sourcePosition:P.sourcePosition,label:P.label,dragHandle:P.dragHandle,onUpdateNodeInternals:le})]);function ne(){const U=P.computedPosition,{computedPosition:G,position:T}=Mh(P,m.value?Bu(U,p.value):U,s.error,d.value,B.value);(P.computedPosition.x!==G.x||P.computedPosition.y!==G.y)&&(P.computedPosition={...P.computedPosition,...G}),(P.position.x!==T.x||P.position.y!==T.y)&&(P.position=T)}function le(){y.value&&u([{id:t.id,nodeElement:y.value,forceUpdate:!0}])}function xe(U){ae?.value||v.mouseEnter({event:U,node:P})}function be(U){ae?.value||v.mouseMove({event:U,node:P})}function Ce(U){ae?.value||v.mouseLeave({event:U,node:P})}function H(U){return v.contextMenu({event:U,node:P})}function X(U){return v.doubleClick({event:U,node:P})}function L(U){I.value&&(!i.value||!E.value||b.value>0)&&Md(P,o.value,l,a,r,!1,y.value),v.click({event:U,node:P})}function F(U){if(!(xd(U)||g.value))if(u_.includes(U.key)&&I.value){const G=U.key==="Escape";Md(P,o.value,l,a,r,G,y.value)}else E.value&&P.selected&&Go[U.key]&&(U.preventDefault(),_.value=`Moved selected node ${U.key.replace("Arrow","").toLowerCase()}. New position, x: ${~~P.position.x}, y: ${~~P.position.y}`,C({x:Go[U.key].x,y:Go[U.key].y},U.shiftKey))}}}),PP=IP;function NP(t={includeHiddenNodes:!1}){const{nodes:e}=It();return De(()=>{if(e.value.length===0)return!1;for(const n of e.value)if((t.includeHiddenNodes||!n.hidden)&&(n?.handleBounds===void 0||n.dimensions.width===0||n.dimensions.height===0))return!1;return!0})}const DP={class:"vue-flow__nodes vue-flow__container"},LP={name:"Nodes",compatConfig:{MODE:3}},FP=Rt({...LP,setup(t){const{getNodes:e,updateNodeDimensions:n,emits:i}=It(),r=NP(),o=qe();return ft(r,s=>{s&&Dn(()=>{i.nodesInitialized(e.value)})},{immediate:!0}),On(()=>{o.value=new ResizeObserver(s=>{const a=s.map(l=>({id:l.target.getAttribute("data-id"),nodeElement:l.target,forceUpdate:!0}));Dn(()=>n(a))})}),ss(()=>{var s;return(s=o.value)==null?void 0:s.disconnect()}),(s,a)=>(ye(),Se("div",DP,[o.value?(ye(!0),Se(ut,{key:0},dn(ge(e),(l,u,c,f)=>{const d=[l.id];if(f&&f.key===l.id&&Mb(f,d))return f;const h=(ye(),mn(ge(PP),{id:l.id,key:l.id,"resize-observer":o.value},null,8,["id","resize-observer"]));return h.memo=d,h},a,0),128)):Je("",!0)]))}});function UP(){const{emits:t}=It();On(()=>{if(S_()){const e=document.querySelector(".vue-flow__pane");e&&window.getComputedStyle(e).zIndex!=="1"&&t.error(new Wt($t.MISSING_STYLES))}})}const OP=fe("div",{class:"vue-flow__edge-labels"},null,-1),BP={name:"VueFlow",compatConfig:{MODE:3}},kP=Rt({...BP,props:{id:{},modelValue:{},nodes:{},edges:{},edgeTypes:{},nodeTypes:{},connectionMode:{},connectionLineType:{},connectionLineStyle:{default:void 0},connectionLineOptions:{default:void 0},connectionRadius:{},isValidConnection:{type:[Function,null],default:void 0},deleteKeyCode:{default:void 0},selectionKeyCode:{type:[Boolean,null],default:void 0},multiSelectionKeyCode:{default:void 0},zoomActivationKeyCode:{default:void 0},panActivationKeyCode:{default:void 0},snapToGrid:{type:Boolean,default:void 0},snapGrid:{},onlyRenderVisibleElements:{type:Boolean,default:void 0},edgesUpdatable:{type:[Boolean,String],default:void 0},nodesDraggable:{type:Boolean,default:void 0},nodesConnectable:{type:Boolean,default:void 0},nodeDragThreshold:{},elementsSelectable:{type:Boolean,default:void 0},selectNodesOnDrag:{type:Boolean,default:void 0},panOnDrag:{type:[Boolean,Array],default:void 0},minZoom:{},maxZoom:{},defaultViewport:{},translateExtent:{},nodeExtent:{},defaultMarkerColor:{},zoomOnScroll:{type:Boolean,default:void 0},zoomOnPinch:{type:Boolean,default:void 0},panOnScroll:{type:Boolean,default:void 0},panOnScrollSpeed:{},panOnScrollMode:{},paneClickDistance:{},zoomOnDoubleClick:{type:Boolean,default:void 0},preventScrolling:{type:Boolean,default:void 0},selectionMode:{},edgeUpdaterRadius:{},fitViewOnInit:{type:Boolean,default:void 0},connectOnClick:{type:Boolean,default:void 0},applyDefault:{type:Boolean,default:void 0},autoConnect:{type:[Boolean,Function],default:void 0},noDragClassName:{},noWheelClassName:{},noPanClassName:{},defaultEdgeOptions:{},elevateEdgesOnSelect:{type:Boolean,default:void 0},elevateNodesOnSelect:{type:Boolean,default:void 0},disableKeyboardA11y:{type:Boolean,default:void 0},edgesFocusable:{type:Boolean,default:void 0},nodesFocusable:{type:Boolean,default:void 0},autoPanOnConnect:{type:Boolean,default:void 0},autoPanOnNodeDrag:{type:Boolean,default:void 0},autoPanSpeed:{}},emits:["nodesChange","edgesChange","nodesInitialized","paneReady","init","updateNodeInternals","error","connect","connectStart","connectEnd","clickConnectStart","clickConnectEnd","moveStart","move","moveEnd","selectionDragStart","selectionDrag","selectionDragStop","selectionContextMenu","selectionStart","selectionEnd","viewportChangeStart","viewportChange","viewportChangeEnd","paneScroll","paneClick","paneContextMenu","paneMouseEnter","paneMouseMove","paneMouseLeave","edgeUpdate","edgeContextMenu","edgeMouseEnter","edgeMouseMove","edgeMouseLeave","edgeDoubleClick","edgeClick","edgeUpdateStart","edgeUpdateEnd","nodeContextMenu","nodeMouseEnter","nodeMouseMove","nodeMouseLeave","nodeDoubleClick","nodeClick","nodeDragStart","nodeDrag","nodeDragStop","miniMapNodeClick","miniMapNodeDoubleClick","miniMapNodeMouseEnter","miniMapNodeMouseMove","miniMapNodeMouseLeave","update:modelValue","update:nodes","update:edges"],setup(t,{expose:e,emit:n}){const i=t,r=b0(),o=Hc(i,"modelValue",n),s=Hc(i,"nodes",n),a=Hc(i,"edges",n),l=It(i),u=gI({modelValue:o,nodes:s,edges:a},i,l);return _I(n,l.hooks),mP(),UP(),Cr(ku,r),wu(u),e(l),(c,f)=>(ye(),Se("div",{ref:ge(l).vueFlowRef,class:"vue-flow"},[it(uP,null,{default:En(()=>[it(RP),OP,it(FP),Ln(c.$slots,"zoom-pane")]),_:3}),Ln(c.$slots,"default"),it(pP)],512))}}),zP={name:"Panel",compatConfig:{MODE:3}},VP=Rt({...zP,props:{position:{}},setup(t){const e=t,{userSelectionActive:n}=It(),i=De(()=>`${e.position}`.split("-"));return(r,o)=>(ye(),Se("div",{class:Dt(["vue-flow__panel",i.value]),style:yt({pointerEvents:ge(n)?"none":"all"})},[Ln(r.$slots,"default")],6))}});var di=(t=>(t.Lines="lines",t.Dots="dots",t))(di||{});const F_=function({dimensions:t,size:e,color:n}){return xt("path",{stroke:n,"stroke-width":e,d:`M${t[0]/2} 0 V${t[1]} M0 ${t[1]/2} H${t[0]}`})},U_=function({radius:t,color:e}){return xt("circle",{cx:t,cy:t,r:t,fill:e})};di.Lines+"",di.Dots+"";const HP={[di.Dots]:"#81818a",[di.Lines]:"#eee"},$P=["id","x","y","width","height","patternTransform"],GP={key:2,height:"100",width:"100"},WP=["fill"],XP=["x","y","fill"],YP={name:"Background",compatConfig:{MODE:3}},qP=Rt({...YP,props:{id:{},variant:{default:()=>di.Dots},gap:{default:20},size:{default:1},lineWidth:{default:1},patternColor:{},color:{},bgColor:{},height:{default:100},width:{default:100},x:{default:0},y:{default:0},offset:{default:0}},setup(t){const{id:e,viewport:n}=It(),i=De(()=>{const s=n.value.zoom,[a,l]=Array.isArray(t.gap)?t.gap:[t.gap,t.gap],u=[a*s||1,l*s||1],c=t.size*s,[f,d]=Array.isArray(t.offset)?t.offset:[t.offset,t.offset],h=[f*s||1+u[0]/2,d*s||1+u[1]/2];return{scaledGap:u,offset:h,size:c}}),r=vt(()=>`pattern-${e}${t.id?`-${t.id}`:""}`),o=vt(()=>t.color||t.patternColor||HP[t.variant||di.Dots]);return(s,a)=>(ye(),Se("svg",{class:"vue-flow__background vue-flow__container",style:yt({height:`${s.height>100?100:s.height}%`,width:`${s.width>100?100:s.width}%`})},[Ln(s.$slots,"pattern-container",{id:r.value},()=>[fe("pattern",{id:r.value,x:ge(n).x%i.value.scaledGap[0],y:ge(n).y%i.value.scaledGap[1],width:i.value.scaledGap[0],height:i.value.scaledGap[1],patternTransform:`translate(-${i.value.offset[0]},-${i.value.offset[1]})`,patternUnits:"userSpaceOnUse"},[Ln(s.$slots,"pattern",{},()=>[s.variant===ge(di).Lines?(ye(),mn(ge(F_),{key:0,size:s.lineWidth,color:o.value,dimensions:i.value.scaledGap},null,8,["size","color","dimensions"])):s.variant===ge(di).Dots?(ye(),mn(ge(U_),{key:1,color:o.value,radius:i.value.size/2},null,8,["color","radius"])):Je("",!0),s.bgColor?(ye(),Se("svg",GP,[fe("rect",{width:"100%",height:"100%",fill:s.bgColor},null,8,WP)])):Je("",!0)])],8,$P)]),fe("rect",{x:s.x,y:s.y,width:"100%",height:"100%",fill:`url(#${r.value})`},null,8,XP),Ln(s.$slots,"default",{id:r.value})],4))}});var KP={value:()=>{}};function Ah(){for(var t=0,e=arguments.length,n={},i;t<e;++t){if(!(i=arguments[t]+"")||i in n||/[\s.]/.test(i))throw new Error("illegal type: "+i);n[i]=[]}return new Cl(n)}function Cl(t){this._=t}function ZP(t,e){return t.trim().split(/^|\s+/).map(function(n){var i="",r=n.indexOf(".");if(r>=0&&(i=n.slice(r+1),n=n.slice(0,r)),n&&!e.hasOwnProperty(n))throw new Error("unknown type: "+n);return{type:n,name:i}})}Cl.prototype=Ah.prototype={constructor:Cl,on:function(t,e){var n=this._,i=ZP(t+"",n),r,o=-1,s=i.length;if(arguments.length<2){for(;++o<s;)if((r=(t=i[o]).type)&&(r=jP(n[r],t.name)))return r;return}if(e!=null&&typeof e!="function")throw new Error("invalid callback: "+e);for(;++o<s;)if(r=(t=i[o]).type)n[r]=sg(n[r],t.name,e);else if(e==null)for(r in n)n[r]=sg(n[r],t.name,null);return this},copy:function(){var t={},e=this._;for(var n in e)t[n]=e[n].slice();return new Cl(t)},call:function(t,e){if((r=arguments.length-2)>0)for(var n=new Array(r),i=0,r,o;i<r;++i)n[i]=arguments[i+2];if(!this._.hasOwnProperty(t))throw new Error("unknown type: "+t);for(o=this._[t],i=0,r=o.length;i<r;++i)o[i].value.apply(e,n)},apply:function(t,e,n){if(!this._.hasOwnProperty(t))throw new Error("unknown type: "+t);for(var i=this._[t],r=0,o=i.length;r<o;++r)i[r].value.apply(e,n)}};function jP(t,e){for(var n=0,i=t.length,r;n<i;++n)if((r=t[n]).name===e)return r.value}function sg(t,e,n){for(var i=0,r=t.length;i<r;++i)if(t[i].name===e){t[i]=KP,t=t.slice(0,i).concat(t.slice(i+1));break}return n!=null&&t.push({name:e,value:n}),t}var Ed="http://www.w3.org/1999/xhtml";const ag={svg:"http://www.w3.org/2000/svg",xhtml:Ed,xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"};function Gu(t){var e=t+="",n=e.indexOf(":");return n>=0&&(e=t.slice(0,n))!=="xmlns"&&(t=t.slice(n+1)),ag.hasOwnProperty(e)?{space:ag[e],local:t}:t}function JP(t){return function(){var e=this.ownerDocument,n=this.namespaceURI;return n===Ed&&e.documentElement.namespaceURI===Ed?e.createElement(t):e.createElementNS(n,t)}}function QP(t){return function(){return this.ownerDocument.createElementNS(t.space,t.local)}}function O_(t){var e=Gu(t);return(e.local?QP:JP)(e)}function eN(){}function Ch(t){return t==null?eN:function(){return this.querySelector(t)}}function tN(t){typeof t!="function"&&(t=Ch(t));for(var e=this._groups,n=e.length,i=new Array(n),r=0;r<n;++r)for(var o=e[r],s=o.length,a=i[r]=new Array(s),l,u,c=0;c<s;++c)(l=o[c])&&(u=t.call(l,l.__data__,c,o))&&("__data__"in l&&(u.__data__=l.__data__),a[c]=u);return new In(i,this._parents)}function nN(t){return t==null?[]:Array.isArray(t)?t:Array.from(t)}function iN(){return[]}function B_(t){return t==null?iN:function(){return this.querySelectorAll(t)}}function rN(t){return function(){return nN(t.apply(this,arguments))}}function oN(t){typeof t=="function"?t=rN(t):t=B_(t);for(var e=this._groups,n=e.length,i=[],r=[],o=0;o<n;++o)for(var s=e[o],a=s.length,l,u=0;u<a;++u)(l=s[u])&&(i.push(t.call(l,l.__data__,u,s)),r.push(l));return new In(i,r)}function k_(t){return function(){return this.matches(t)}}function z_(t){return function(e){return e.matches(t)}}var sN=Array.prototype.find;function aN(t){return function(){return sN.call(this.children,t)}}function lN(){return this.firstElementChild}function uN(t){return this.select(t==null?lN:aN(typeof t=="function"?t:z_(t)))}var cN=Array.prototype.filter;function fN(){return Array.from(this.children)}function dN(t){return function(){return cN.call(this.children,t)}}function hN(t){return this.selectAll(t==null?fN:dN(typeof t=="function"?t:z_(t)))}function pN(t){typeof t!="function"&&(t=k_(t));for(var e=this._groups,n=e.length,i=new Array(n),r=0;r<n;++r)for(var o=e[r],s=o.length,a=i[r]=[],l,u=0;u<s;++u)(l=o[u])&&t.call(l,l.__data__,u,o)&&a.push(l);return new In(i,this._parents)}function V_(t){return new Array(t.length)}function mN(){return new In(this._enter||this._groups.map(V_),this._parents)}function ou(t,e){this.ownerDocument=t.ownerDocument,this.namespaceURI=t.namespaceURI,this._next=null,this._parent=t,this.__data__=e}ou.prototype={constructor:ou,appendChild:function(t){return this._parent.insertBefore(t,this._next)},insertBefore:function(t,e){return this._parent.insertBefore(t,e)},querySelector:function(t){return this._parent.querySelector(t)},querySelectorAll:function(t){return this._parent.querySelectorAll(t)}};function gN(t){return function(){return t}}function vN(t,e,n,i,r,o){for(var s=0,a,l=e.length,u=o.length;s<u;++s)(a=e[s])?(a.__data__=o[s],i[s]=a):n[s]=new ou(t,o[s]);for(;s<l;++s)(a=e[s])&&(r[s]=a)}function _N(t,e,n,i,r,o,s){var a,l,u=new Map,c=e.length,f=o.length,d=new Array(c),h;for(a=0;a<c;++a)(l=e[a])&&(d[a]=h=s.call(l,l.__data__,a,e)+"",u.has(h)?r[a]=l:u.set(h,l));for(a=0;a<f;++a)h=s.call(t,o[a],a,o)+"",(l=u.get(h))?(i[a]=l,l.__data__=o[a],u.delete(h)):n[a]=new ou(t,o[a]);for(a=0;a<c;++a)(l=e[a])&&u.get(d[a])===l&&(r[a]=l)}function yN(t){return t.__data__}function xN(t,e){if(!arguments.length)return Array.from(this,yN);var n=e?_N:vN,i=this._parents,r=this._groups;typeof t!="function"&&(t=gN(t));for(var o=r.length,s=new Array(o),a=new Array(o),l=new Array(o),u=0;u<o;++u){var c=i[u],f=r[u],d=f.length,h=bN(t.call(c,c&&c.__data__,u,i)),g=h.length,_=a[u]=new Array(g),m=s[u]=new Array(g),p=l[u]=new Array(d);n(c,f,_,m,p,h,e);for(var b=0,S=0,x,D;b<g;++b)if(x=_[b]){for(b>=S&&(S=b+1);!(D=m[S])&&++S<g;);x._next=D||null}}return s=new In(s,i),s._enter=a,s._exit=l,s}function bN(t){return typeof t=="object"&&"length"in t?t:Array.from(t)}function SN(){return new In(this._exit||this._groups.map(V_),this._parents)}function MN(t,e,n){var i=this.enter(),r=this,o=this.exit();return typeof t=="function"?(i=t(i),i&&(i=i.selection())):i=i.append(t+""),e!=null&&(r=e(r),r&&(r=r.selection())),n==null?o.remove():n(o),i&&r?i.merge(r).order():r}function wN(t){for(var e=t.selection?t.selection():t,n=this._groups,i=e._groups,r=n.length,o=i.length,s=Math.min(r,o),a=new Array(r),l=0;l<s;++l)for(var u=n[l],c=i[l],f=u.length,d=a[l]=new Array(f),h,g=0;g<f;++g)(h=u[g]||c[g])&&(d[g]=h);for(;l<r;++l)a[l]=n[l];return new In(a,this._parents)}function EN(){for(var t=this._groups,e=-1,n=t.length;++e<n;)for(var i=t[e],r=i.length-1,o=i[r],s;--r>=0;)(s=i[r])&&(o&&s.compareDocumentPosition(o)^4&&o.parentNode.insertBefore(s,o),o=s);return this}function TN(t){t||(t=AN);function e(f,d){return f&&d?t(f.__data__,d.__data__):!f-!d}for(var n=this._groups,i=n.length,r=new Array(i),o=0;o<i;++o){for(var s=n[o],a=s.length,l=r[o]=new Array(a),u,c=0;c<a;++c)(u=s[c])&&(l[c]=u);l.sort(e)}return new In(r,this._parents).order()}function AN(t,e){return t<e?-1:t>e?1:t>=e?0:NaN}function CN(){var t=arguments[0];return arguments[0]=this,t.apply(null,arguments),this}function RN(){return Array.from(this)}function IN(){for(var t=this._groups,e=0,n=t.length;e<n;++e)for(var i=t[e],r=0,o=i.length;r<o;++r){var s=i[r];if(s)return s}return null}function PN(){let t=0;for(const e of this)++t;return t}function NN(){return!this.node()}function DN(t){for(var e=this._groups,n=0,i=e.length;n<i;++n)for(var r=e[n],o=0,s=r.length,a;o<s;++o)(a=r[o])&&t.call(a,a.__data__,o,r);return this}function LN(t){return function(){this.removeAttribute(t)}}function FN(t){return function(){this.removeAttributeNS(t.space,t.local)}}function UN(t,e){return function(){this.setAttribute(t,e)}}function ON(t,e){return function(){this.setAttributeNS(t.space,t.local,e)}}function BN(t,e){return function(){var n=e.apply(this,arguments);n==null?this.removeAttribute(t):this.setAttribute(t,n)}}function kN(t,e){return function(){var n=e.apply(this,arguments);n==null?this.removeAttributeNS(t.space,t.local):this.setAttributeNS(t.space,t.local,n)}}function zN(t,e){var n=Gu(t);if(arguments.length<2){var i=this.node();return n.local?i.getAttributeNS(n.space,n.local):i.getAttribute(n)}return this.each((e==null?n.local?FN:LN:typeof e=="function"?n.local?kN:BN:n.local?ON:UN)(n,e))}function H_(t){return t.ownerDocument&&t.ownerDocument.defaultView||t.document&&t||t.defaultView}function VN(t){return function(){this.style.removeProperty(t)}}function HN(t,e,n){return function(){this.style.setProperty(t,e,n)}}function $N(t,e,n){return function(){var i=e.apply(this,arguments);i==null?this.style.removeProperty(t):this.style.setProperty(t,i,n)}}function GN(t,e,n){return arguments.length>1?this.each((e==null?VN:typeof e=="function"?$N:HN)(t,e,n??"")):rs(this.node(),t)}function rs(t,e){return t.style.getPropertyValue(e)||H_(t).getComputedStyle(t,null).getPropertyValue(e)}function WN(t){return function(){delete this[t]}}function XN(t,e){return function(){this[t]=e}}function YN(t,e){return function(){var n=e.apply(this,arguments);n==null?delete this[t]:this[t]=n}}function qN(t,e){return arguments.length>1?this.each((e==null?WN:typeof e=="function"?YN:XN)(t,e)):this.node()[t]}function $_(t){return t.trim().split(/^|\s+/)}function Rh(t){return t.classList||new G_(t)}function G_(t){this._node=t,this._names=$_(t.getAttribute("class")||"")}G_.prototype={add:function(t){var e=this._names.indexOf(t);e<0&&(this._names.push(t),this._node.setAttribute("class",this._names.join(" ")))},remove:function(t){var e=this._names.indexOf(t);e>=0&&(this._names.splice(e,1),this._node.setAttribute("class",this._names.join(" ")))},contains:function(t){return this._names.indexOf(t)>=0}};function W_(t,e){for(var n=Rh(t),i=-1,r=e.length;++i<r;)n.add(e[i])}function X_(t,e){for(var n=Rh(t),i=-1,r=e.length;++i<r;)n.remove(e[i])}function KN(t){return function(){W_(this,t)}}function ZN(t){return function(){X_(this,t)}}function jN(t,e){return function(){(e.apply(this,arguments)?W_:X_)(this,t)}}function JN(t,e){var n=$_(t+"");if(arguments.length<2){for(var i=Rh(this.node()),r=-1,o=n.length;++r<o;)if(!i.contains(n[r]))return!1;return!0}return this.each((typeof e=="function"?jN:e?KN:ZN)(n,e))}function QN(){this.textContent=""}function eD(t){return function(){this.textContent=t}}function tD(t){return function(){var e=t.apply(this,arguments);this.textContent=e??""}}function nD(t){return arguments.length?this.each(t==null?QN:(typeof t=="function"?tD:eD)(t)):this.node().textContent}function iD(){this.innerHTML=""}function rD(t){return function(){this.innerHTML=t}}function oD(t){return function(){var e=t.apply(this,arguments);this.innerHTML=e??""}}function sD(t){return arguments.length?this.each(t==null?iD:(typeof t=="function"?oD:rD)(t)):this.node().innerHTML}function aD(){this.nextSibling&&this.parentNode.appendChild(this)}function lD(){return this.each(aD)}function uD(){this.previousSibling&&this.parentNode.insertBefore(this,this.parentNode.firstChild)}function cD(){return this.each(uD)}function fD(t){var e=typeof t=="function"?t:O_(t);return this.select(function(){return this.appendChild(e.apply(this,arguments))})}function dD(){return null}function hD(t,e){var n=typeof t=="function"?t:O_(t),i=e==null?dD:typeof e=="function"?e:Ch(e);return this.select(function(){return this.insertBefore(n.apply(this,arguments),i.apply(this,arguments)||null)})}function pD(){var t=this.parentNode;t&&t.removeChild(this)}function mD(){return this.each(pD)}function gD(){var t=this.cloneNode(!1),e=this.parentNode;return e?e.insertBefore(t,this.nextSibling):t}function vD(){var t=this.cloneNode(!0),e=this.parentNode;return e?e.insertBefore(t,this.nextSibling):t}function _D(t){return this.select(t?vD:gD)}function yD(t){return arguments.length?this.property("__data__",t):this.node().__data__}function xD(t){return function(e){t.call(this,e,this.__data__)}}function bD(t){return t.trim().split(/^|\s+/).map(function(e){var n="",i=e.indexOf(".");return i>=0&&(n=e.slice(i+1),e=e.slice(0,i)),{type:e,name:n}})}function SD(t){return function(){var e=this.__on;if(e){for(var n=0,i=-1,r=e.length,o;n<r;++n)o=e[n],(!t.type||o.type===t.type)&&o.name===t.name?this.removeEventListener(o.type,o.listener,o.options):e[++i]=o;++i?e.length=i:delete this.__on}}}function MD(t,e,n){return function(){var i=this.__on,r,o=xD(e);if(i){for(var s=0,a=i.length;s<a;++s)if((r=i[s]).type===t.type&&r.name===t.name){this.removeEventListener(r.type,r.listener,r.options),this.addEventListener(r.type,r.listener=o,r.options=n),r.value=e;return}}this.addEventListener(t.type,o,n),r={type:t.type,name:t.name,value:e,listener:o,options:n},i?i.push(r):this.__on=[r]}}function wD(t,e,n){var i=bD(t+""),r,o=i.length,s;if(arguments.length<2){var a=this.node().__on;if(a){for(var l=0,u=a.length,c;l<u;++l)for(r=0,c=a[l];r<o;++r)if((s=i[r]).type===c.type&&s.name===c.name)return c.value}return}for(a=e?MD:SD,r=0;r<o;++r)this.each(a(i[r],e,n));return this}function Y_(t,e,n){var i=H_(t),r=i.CustomEvent;typeof r=="function"?r=new r(e,n):(r=i.document.createEvent("Event"),n?(r.initEvent(e,n.bubbles,n.cancelable),r.detail=n.detail):r.initEvent(e,!1,!1)),t.dispatchEvent(r)}function ED(t,e){return function(){return Y_(this,t,e)}}function TD(t,e){return function(){return Y_(this,t,e.apply(this,arguments))}}function AD(t,e){return this.each((typeof e=="function"?TD:ED)(t,e))}function*CD(){for(var t=this._groups,e=0,n=t.length;e<n;++e)for(var i=t[e],r=0,o=i.length,s;r<o;++r)(s=i[r])&&(yield s)}var q_=[null];function In(t,e){this._groups=t,this._parents=e}function Ma(){return new In([[document.documentElement]],q_)}function RD(){return this}In.prototype=Ma.prototype={constructor:In,select:tN,selectAll:oN,selectChild:uN,selectChildren:hN,filter:pN,data:xN,enter:mN,exit:SN,join:MN,merge:wN,selection:RD,order:EN,sort:TN,call:CN,nodes:RN,node:IN,size:PN,empty:NN,each:DN,attr:zN,style:GN,property:qN,classed:JN,text:nD,html:sD,raise:lD,lower:cD,append:fD,insert:hD,remove:mD,clone:_D,datum:yD,on:wD,dispatch:AD,[Symbol.iterator]:CD};function Mr(t){return typeof t=="string"?new In([[document.querySelector(t)]],[document.documentElement]):new In([[t]],q_)}function ID(t){let e;for(;e=t.sourceEvent;)t=e;return t}function vr(t,e){if(t=ID(t),e===void 0&&(e=t.currentTarget),e){var n=e.ownerSVGElement||e;if(n.createSVGPoint){var i=n.createSVGPoint();return i.x=t.clientX,i.y=t.clientY,i=i.matrixTransform(e.getScreenCTM().inverse()),[i.x,i.y]}if(e.getBoundingClientRect){var r=e.getBoundingClientRect();return[t.clientX-r.left-e.clientLeft,t.clientY-r.top-e.clientTop]}}return[t.pageX,t.pageY]}const Td={capture:!0,passive:!1};function Ad(t){t.preventDefault(),t.stopImmediatePropagation()}function PD(t){var e=t.document.documentElement,n=Mr(t).on("dragstart.drag",Ad,Td);"onselectstart"in e?n.on("selectstart.drag",Ad,Td):(e.__noselect=e.style.MozUserSelect,e.style.MozUserSelect="none")}function ND(t,e){var n=t.document.documentElement,i=Mr(t).on("dragstart.drag",null);e&&(i.on("click.drag",Ad,Td),setTimeout(function(){i.on("click.drag",null)},0)),"onselectstart"in n?i.on("selectstart.drag",null):(n.style.MozUserSelect=n.__noselect,delete n.__noselect)}function Ih(t,e,n){t.prototype=e.prototype=n,n.constructor=t}function K_(t,e){var n=Object.create(t.prototype);for(var i in e)n[i]=e[i];return n}function wa(){}var aa=.7,su=1/aa,Wo="\\s*([+-]?\\d+)\\s*",la="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",vi="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",DD=/^#([0-9a-f]{3,8})$/,LD=new RegExp(`^rgb\\(${Wo},${Wo},${Wo}\\)$`),FD=new RegExp(`^rgb\\(${vi},${vi},${vi}\\)$`),UD=new RegExp(`^rgba\\(${Wo},${Wo},${Wo},${la}\\)$`),OD=new RegExp(`^rgba\\(${vi},${vi},${vi},${la}\\)$`),BD=new RegExp(`^hsl\\(${la},${vi},${vi}\\)$`),kD=new RegExp(`^hsla\\(${la},${vi},${vi},${la}\\)$`),lg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};Ih(wa,ua,{copy(t){return Object.assign(new this.constructor,this,t)},displayable(){return this.rgb().displayable()},hex:ug,formatHex:ug,formatHex8:zD,formatHsl:VD,formatRgb:cg,toString:cg});function ug(){return this.rgb().formatHex()}function zD(){return this.rgb().formatHex8()}function VD(){return Z_(this).formatHsl()}function cg(){return this.rgb().formatRgb()}function ua(t){var e,n;return t=(t+"").trim().toLowerCase(),(e=DD.exec(t))?(n=e[1].length,e=parseInt(e[1],16),n===6?fg(e):n===3?new xn(e>>8&15|e>>4&240,e>>4&15|e&240,(e&15)<<4|e&15,1):n===8?ll(e>>24&255,e>>16&255,e>>8&255,(e&255)/255):n===4?ll(e>>12&15|e>>8&240,e>>8&15|e>>4&240,e>>4&15|e&240,((e&15)<<4|e&15)/255):null):(e=LD.exec(t))?new xn(e[1],e[2],e[3],1):(e=FD.exec(t))?new xn(e[1]*255/100,e[2]*255/100,e[3]*255/100,1):(e=UD.exec(t))?ll(e[1],e[2],e[3],e[4]):(e=OD.exec(t))?ll(e[1]*255/100,e[2]*255/100,e[3]*255/100,e[4]):(e=BD.exec(t))?pg(e[1],e[2]/100,e[3]/100,1):(e=kD.exec(t))?pg(e[1],e[2]/100,e[3]/100,e[4]):lg.hasOwnProperty(t)?fg(lg[t]):t==="transparent"?new xn(NaN,NaN,NaN,0):null}function fg(t){return new xn(t>>16&255,t>>8&255,t&255,1)}function ll(t,e,n,i){return i<=0&&(t=e=n=NaN),new xn(t,e,n,i)}function HD(t){return t instanceof wa||(t=ua(t)),t?(t=t.rgb(),new xn(t.r,t.g,t.b,t.opacity)):new xn}function Cd(t,e,n,i){return arguments.length===1?HD(t):new xn(t,e,n,i??1)}function xn(t,e,n,i){this.r=+t,this.g=+e,this.b=+n,this.opacity=+i}Ih(xn,Cd,K_(wa,{brighter(t){return t=t==null?su:Math.pow(su,t),new xn(this.r*t,this.g*t,this.b*t,this.opacity)},darker(t){return t=t==null?aa:Math.pow(aa,t),new xn(this.r*t,this.g*t,this.b*t,this.opacity)},rgb(){return this},clamp(){return new xn(ao(this.r),ao(this.g),ao(this.b),au(this.opacity))},displayable(){return-.5<=this.r&&this.r<255.5&&-.5<=this.g&&this.g<255.5&&-.5<=this.b&&this.b<255.5&&0<=this.opacity&&this.opacity<=1},hex:dg,formatHex:dg,formatHex8:$D,formatRgb:hg,toString:hg}));function dg(){return`#${eo(this.r)}${eo(this.g)}${eo(this.b)}`}function $D(){return`#${eo(this.r)}${eo(this.g)}${eo(this.b)}${eo((isNaN(this.opacity)?1:this.opacity)*255)}`}function hg(){const t=au(this.opacity);return`${t===1?"rgb(":"rgba("}${ao(this.r)}, ${ao(this.g)}, ${ao(this.b)}${t===1?")":`, ${t})`}`}function au(t){return isNaN(t)?1:Math.max(0,Math.min(1,t))}function ao(t){return Math.max(0,Math.min(255,Math.round(t)||0))}function eo(t){return t=ao(t),(t<16?"0":"")+t.toString(16)}function pg(t,e,n,i){return i<=0?t=e=n=NaN:n<=0||n>=1?t=e=NaN:e<=0&&(t=NaN),new Xn(t,e,n,i)}function Z_(t){if(t instanceof Xn)return new Xn(t.h,t.s,t.l,t.opacity);if(t instanceof wa||(t=ua(t)),!t)return new Xn;if(t instanceof Xn)return t;t=t.rgb();var e=t.r/255,n=t.g/255,i=t.b/255,r=Math.min(e,n,i),o=Math.max(e,n,i),s=NaN,a=o-r,l=(o+r)/2;return a?(e===o?s=(n-i)/a+(n<i)*6:n===o?s=(i-e)/a+2:s=(e-n)/a+4,a/=l<.5?o+r:2-o-r,s*=60):a=l>0&&l<1?0:s,new Xn(s,a,l,t.opacity)}function GD(t,e,n,i){return arguments.length===1?Z_(t):new Xn(t,e,n,i??1)}function Xn(t,e,n,i){this.h=+t,this.s=+e,this.l=+n,this.opacity=+i}Ih(Xn,GD,K_(wa,{brighter(t){return t=t==null?su:Math.pow(su,t),new Xn(this.h,this.s,this.l*t,this.opacity)},darker(t){return t=t==null?aa:Math.pow(aa,t),new Xn(this.h,this.s,this.l*t,this.opacity)},rgb(){var t=this.h%360+(this.h<0)*360,e=isNaN(t)||isNaN(this.s)?0:this.s,n=this.l,i=n+(n<.5?n:1-n)*e,r=2*n-i;return new xn(Qc(t>=240?t-240:t+120,r,i),Qc(t,r,i),Qc(t<120?t+240:t-120,r,i),this.opacity)},clamp(){return new Xn(mg(this.h),ul(this.s),ul(this.l),au(this.opacity))},displayable(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1},formatHsl(){const t=au(this.opacity);return`${t===1?"hsl(":"hsla("}${mg(this.h)}, ${ul(this.s)*100}%, ${ul(this.l)*100}%${t===1?")":`, ${t})`}`}}));function mg(t){return t=(t||0)%360,t<0?t+360:t}function ul(t){return Math.max(0,Math.min(1,t||0))}function Qc(t,e,n){return(t<60?e+(n-e)*t/60:t<180?n:t<240?e+(n-e)*(240-t)/60:e)*255}const j_=t=>()=>t;function WD(t,e){return function(n){return t+n*e}}function XD(t,e,n){return t=Math.pow(t,n),e=Math.pow(e,n)-t,n=1/n,function(i){return Math.pow(t+i*e,n)}}function YD(t){return(t=+t)==1?J_:function(e,n){return n-e?XD(e,n,t):j_(isNaN(e)?n:e)}}function J_(t,e){var n=e-t;return n?WD(t,n):j_(isNaN(t)?e:t)}const gg=(function t(e){var n=YD(e);function i(r,o){var s=n((r=Cd(r)).r,(o=Cd(o)).r),a=n(r.g,o.g),l=n(r.b,o.b),u=J_(r.opacity,o.opacity);return function(c){return r.r=s(c),r.g=a(c),r.b=l(c),r.opacity=u(c),r+""}}return i.gamma=t,i})(1);function br(t,e){return t=+t,e=+e,function(n){return t*(1-n)+e*n}}var Rd=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,ef=new RegExp(Rd.source,"g");function qD(t){return function(){return t}}function KD(t){return function(e){return t(e)+""}}function ZD(t,e){var n=Rd.lastIndex=ef.lastIndex=0,i,r,o,s=-1,a=[],l=[];for(t=t+"",e=e+"";(i=Rd.exec(t))&&(r=ef.exec(e));)(o=r.index)>n&&(o=e.slice(n,o),a[s]?a[s]+=o:a[++s]=o),(i=i[0])===(r=r[0])?a[s]?a[s]+=r:a[++s]=r:(a[++s]=null,l.push({i:s,x:br(i,r)})),n=ef.lastIndex;return n<e.length&&(o=e.slice(n),a[s]?a[s]+=o:a[++s]=o),a.length<2?l[0]?KD(l[0].x):qD(e):(e=l.length,function(u){for(var c=0,f;c<e;++c)a[(f=l[c]).i]=f.x(u);return a.join("")})}var vg=180/Math.PI,Id={translateX:0,translateY:0,rotate:0,skewX:0,scaleX:1,scaleY:1};function Q_(t,e,n,i,r,o){var s,a,l;return(s=Math.sqrt(t*t+e*e))&&(t/=s,e/=s),(l=t*n+e*i)&&(n-=t*l,i-=e*l),(a=Math.sqrt(n*n+i*i))&&(n/=a,i/=a,l/=a),t*i<e*n&&(t=-t,e=-e,l=-l,s=-s),{translateX:r,translateY:o,rotate:Math.atan2(e,t)*vg,skewX:Math.atan(l)*vg,scaleX:s,scaleY:a}}var cl;function jD(t){const e=new(typeof DOMMatrix=="function"?DOMMatrix:WebKitCSSMatrix)(t+"");return e.isIdentity?Id:Q_(e.a,e.b,e.c,e.d,e.e,e.f)}function JD(t){return t==null||(cl||(cl=document.createElementNS("http://www.w3.org/2000/svg","g")),cl.setAttribute("transform",t),!(t=cl.transform.baseVal.consolidate()))?Id:(t=t.matrix,Q_(t.a,t.b,t.c,t.d,t.e,t.f))}function ey(t,e,n,i){function r(u){return u.length?u.pop()+" ":""}function o(u,c,f,d,h,g){if(u!==f||c!==d){var _=h.push("translate(",null,e,null,n);g.push({i:_-4,x:br(u,f)},{i:_-2,x:br(c,d)})}else(f||d)&&h.push("translate("+f+e+d+n)}function s(u,c,f,d){u!==c?(u-c>180?c+=360:c-u>180&&(u+=360),d.push({i:f.push(r(f)+"rotate(",null,i)-2,x:br(u,c)})):c&&f.push(r(f)+"rotate("+c+i)}function a(u,c,f,d){u!==c?d.push({i:f.push(r(f)+"skewX(",null,i)-2,x:br(u,c)}):c&&f.push(r(f)+"skewX("+c+i)}function l(u,c,f,d,h,g){if(u!==f||c!==d){var _=h.push(r(h)+"scale(",null,",",null,")");g.push({i:_-4,x:br(u,f)},{i:_-2,x:br(c,d)})}else(f!==1||d!==1)&&h.push(r(h)+"scale("+f+","+d+")")}return function(u,c){var f=[],d=[];return u=t(u),c=t(c),o(u.translateX,u.translateY,c.translateX,c.translateY,f,d),s(u.rotate,c.rotate,f,d),a(u.skewX,c.skewX,f,d),l(u.scaleX,u.scaleY,c.scaleX,c.scaleY,f,d),u=c=null,function(h){for(var g=-1,_=d.length,m;++g<_;)f[(m=d[g]).i]=m.x(h);return f.join("")}}}var QD=ey(jD,"px, ","px)","deg)"),eL=ey(JD,", ",")",")"),tL=1e-12;function _g(t){return((t=Math.exp(t))+1/t)/2}function nL(t){return((t=Math.exp(t))-1/t)/2}function iL(t){return((t=Math.exp(2*t))-1)/(t+1)}const rL=(function t(e,n,i){function r(o,s){var a=o[0],l=o[1],u=o[2],c=s[0],f=s[1],d=s[2],h=c-a,g=f-l,_=h*h+g*g,m,p;if(_<tL)p=Math.log(d/u)/e,m=function(z){return[a+z*h,l+z*g,u*Math.exp(e*z*p)]};else{var b=Math.sqrt(_),S=(d*d-u*u+i*_)/(2*u*n*b),x=(d*d-u*u-i*_)/(2*d*n*b),D=Math.log(Math.sqrt(S*S+1)-S),O=Math.log(Math.sqrt(x*x+1)-x);p=(O-D)/e,m=function(z){var y=z*p,M=_g(D),N=u/(n*b)*(M*iL(e*y+D)-nL(D));return[a+N*h,l+N*g,u*M/_g(e*y+D)]}}return m.duration=p*1e3*e/Math.SQRT2,m}return r.rho=function(o){var s=Math.max(.001,+o),a=s*s,l=a*a;return t(s,a,l)},r})(Math.SQRT2,2,4);var os=0,Is=0,Ss=0,ty=1e3,lu,Ps,uu=0,fo=0,Wu=0,ca=typeof performance=="object"&&performance.now?performance:Date,ny=typeof window=="object"&&window.requestAnimationFrame?window.requestAnimationFrame.bind(window):function(t){setTimeout(t,17)};function Ph(){return fo||(ny(oL),fo=ca.now()+Wu)}function oL(){fo=0}function cu(){this._call=this._time=this._next=null}cu.prototype=iy.prototype={constructor:cu,restart:function(t,e,n){if(typeof t!="function")throw new TypeError("callback is not a function");n=(n==null?Ph():+n)+(e==null?0:+e),!this._next&&Ps!==this&&(Ps?Ps._next=this:lu=this,Ps=this),this._call=t,this._time=n,Pd()},stop:function(){this._call&&(this._call=null,this._time=1/0,Pd())}};function iy(t,e,n){var i=new cu;return i.restart(t,e,n),i}function sL(){Ph(),++os;for(var t=lu,e;t;)(e=fo-t._time)>=0&&t._call.call(void 0,e),t=t._next;--os}function yg(){fo=(uu=ca.now())+Wu,os=Is=0;try{sL()}finally{os=0,lL(),fo=0}}function aL(){var t=ca.now(),e=t-uu;e>ty&&(Wu-=e,uu=t)}function lL(){for(var t,e=lu,n,i=1/0;e;)e._call?(i>e._time&&(i=e._time),t=e,e=e._next):(n=e._next,e._next=null,e=t?t._next=n:lu=n);Ps=t,Pd(i)}function Pd(t){if(!os){Is&&(Is=clearTimeout(Is));var e=t-fo;e>24?(t<1/0&&(Is=setTimeout(yg,t-ca.now()-Wu)),Ss&&(Ss=clearInterval(Ss))):(Ss||(uu=ca.now(),Ss=setInterval(aL,ty)),os=1,ny(yg))}}function xg(t,e,n){var i=new cu;return e=e==null?0:+e,i.restart(r=>{i.stop(),t(r+e)},e,n),i}var uL=Ah("start","end","cancel","interrupt"),cL=[],ry=0,bg=1,Nd=2,Rl=3,Sg=4,Dd=5,Il=6;function Xu(t,e,n,i,r,o){var s=t.__transition;if(!s)t.__transition={};else if(n in s)return;fL(t,n,{name:e,index:i,group:r,on:uL,tween:cL,time:o.time,delay:o.delay,duration:o.duration,ease:o.ease,timer:null,state:ry})}function Nh(t,e){var n=Jn(t,e);if(n.state>ry)throw new Error("too late; already scheduled");return n}function Si(t,e){var n=Jn(t,e);if(n.state>Rl)throw new Error("too late; already running");return n}function Jn(t,e){var n=t.__transition;if(!n||!(n=n[e]))throw new Error("transition not found");return n}function fL(t,e,n){var i=t.__transition,r;i[e]=n,n.timer=iy(o,0,n.time);function o(u){n.state=bg,n.timer.restart(s,n.delay,n.time),n.delay<=u&&s(u-n.delay)}function s(u){var c,f,d,h;if(n.state!==bg)return l();for(c in i)if(h=i[c],h.name===n.name){if(h.state===Rl)return xg(s);h.state===Sg?(h.state=Il,h.timer.stop(),h.on.call("interrupt",t,t.__data__,h.index,h.group),delete i[c]):+c<e&&(h.state=Il,h.timer.stop(),h.on.call("cancel",t,t.__data__,h.index,h.group),delete i[c])}if(xg(function(){n.state===Rl&&(n.state=Sg,n.timer.restart(a,n.delay,n.time),a(u))}),n.state=Nd,n.on.call("start",t,t.__data__,n.index,n.group),n.state===Nd){for(n.state=Rl,r=new Array(d=n.tween.length),c=0,f=-1;c<d;++c)(h=n.tween[c].value.call(t,t.__data__,n.index,n.group))&&(r[++f]=h);r.length=f+1}}function a(u){for(var c=u<n.duration?n.ease.call(null,u/n.duration):(n.timer.restart(l),n.state=Dd,1),f=-1,d=r.length;++f<d;)r[f].call(t,c);n.state===Dd&&(n.on.call("end",t,t.__data__,n.index,n.group),l())}function l(){n.state=Il,n.timer.stop(),delete i[e];for(var u in i)return;delete t.__transition}}function Pl(t,e){var n=t.__transition,i,r,o=!0,s;if(n){e=e==null?null:e+"";for(s in n){if((i=n[s]).name!==e){o=!1;continue}r=i.state>Nd&&i.state<Dd,i.state=Il,i.timer.stop(),i.on.call(r?"interrupt":"cancel",t,t.__data__,i.index,i.group),delete n[s]}o&&delete t.__transition}}function dL(t){return this.each(function(){Pl(this,t)})}function hL(t,e){var n,i;return function(){var r=Si(this,t),o=r.tween;if(o!==n){i=n=o;for(var s=0,a=i.length;s<a;++s)if(i[s].name===e){i=i.slice(),i.splice(s,1);break}}r.tween=i}}function pL(t,e,n){var i,r;if(typeof n!="function")throw new Error;return function(){var o=Si(this,t),s=o.tween;if(s!==i){r=(i=s).slice();for(var a={name:e,value:n},l=0,u=r.length;l<u;++l)if(r[l].name===e){r[l]=a;break}l===u&&r.push(a)}o.tween=r}}function mL(t,e){var n=this._id;if(t+="",arguments.length<2){for(var i=Jn(this.node(),n).tween,r=0,o=i.length,s;r<o;++r)if((s=i[r]).name===t)return s.value;return null}return this.each((e==null?hL:pL)(n,t,e))}function Dh(t,e,n){var i=t._id;return t.each(function(){var r=Si(this,i);(r.value||(r.value={}))[e]=n.apply(this,arguments)}),function(r){return Jn(r,i).value[e]}}function oy(t,e){var n;return(typeof e=="number"?br:e instanceof ua?gg:(n=ua(e))?(e=n,gg):ZD)(t,e)}function gL(t){return function(){this.removeAttribute(t)}}function vL(t){return function(){this.removeAttributeNS(t.space,t.local)}}function _L(t,e,n){var i,r=n+"",o;return function(){var s=this.getAttribute(t);return s===r?null:s===i?o:o=e(i=s,n)}}function yL(t,e,n){var i,r=n+"",o;return function(){var s=this.getAttributeNS(t.space,t.local);return s===r?null:s===i?o:o=e(i=s,n)}}function xL(t,e,n){var i,r,o;return function(){var s,a=n(this),l;return a==null?void this.removeAttribute(t):(s=this.getAttribute(t),l=a+"",s===l?null:s===i&&l===r?o:(r=l,o=e(i=s,a)))}}function bL(t,e,n){var i,r,o;return function(){var s,a=n(this),l;return a==null?void this.removeAttributeNS(t.space,t.local):(s=this.getAttributeNS(t.space,t.local),l=a+"",s===l?null:s===i&&l===r?o:(r=l,o=e(i=s,a)))}}function SL(t,e){var n=Gu(t),i=n==="transform"?eL:oy;return this.attrTween(t,typeof e=="function"?(n.local?bL:xL)(n,i,Dh(this,"attr."+t,e)):e==null?(n.local?vL:gL)(n):(n.local?yL:_L)(n,i,e))}function ML(t,e){return function(n){this.setAttribute(t,e.call(this,n))}}function wL(t,e){return function(n){this.setAttributeNS(t.space,t.local,e.call(this,n))}}function EL(t,e){var n,i;function r(){var o=e.apply(this,arguments);return o!==i&&(n=(i=o)&&wL(t,o)),n}return r._value=e,r}function TL(t,e){var n,i;function r(){var o=e.apply(this,arguments);return o!==i&&(n=(i=o)&&ML(t,o)),n}return r._value=e,r}function AL(t,e){var n="attr."+t;if(arguments.length<2)return(n=this.tween(n))&&n._value;if(e==null)return this.tween(n,null);if(typeof e!="function")throw new Error;var i=Gu(t);return this.tween(n,(i.local?EL:TL)(i,e))}function CL(t,e){return function(){Nh(this,t).delay=+e.apply(this,arguments)}}function RL(t,e){return e=+e,function(){Nh(this,t).delay=e}}function IL(t){var e=this._id;return arguments.length?this.each((typeof t=="function"?CL:RL)(e,t)):Jn(this.node(),e).delay}function PL(t,e){return function(){Si(this,t).duration=+e.apply(this,arguments)}}function NL(t,e){return e=+e,function(){Si(this,t).duration=e}}function DL(t){var e=this._id;return arguments.length?this.each((typeof t=="function"?PL:NL)(e,t)):Jn(this.node(),e).duration}function LL(t,e){if(typeof e!="function")throw new Error;return function(){Si(this,t).ease=e}}function FL(t){var e=this._id;return arguments.length?this.each(LL(e,t)):Jn(this.node(),e).ease}function UL(t,e){return function(){var n=e.apply(this,arguments);if(typeof n!="function")throw new Error;Si(this,t).ease=n}}function OL(t){if(typeof t!="function")throw new Error;return this.each(UL(this._id,t))}function BL(t){typeof t!="function"&&(t=k_(t));for(var e=this._groups,n=e.length,i=new Array(n),r=0;r<n;++r)for(var o=e[r],s=o.length,a=i[r]=[],l,u=0;u<s;++u)(l=o[u])&&t.call(l,l.__data__,u,o)&&a.push(l);return new nr(i,this._parents,this._name,this._id)}function kL(t){if(t._id!==this._id)throw new Error;for(var e=this._groups,n=t._groups,i=e.length,r=n.length,o=Math.min(i,r),s=new Array(i),a=0;a<o;++a)for(var l=e[a],u=n[a],c=l.length,f=s[a]=new Array(c),d,h=0;h<c;++h)(d=l[h]||u[h])&&(f[h]=d);for(;a<i;++a)s[a]=e[a];return new nr(s,this._parents,this._name,this._id)}function zL(t){return(t+"").trim().split(/^|\s+/).every(function(e){var n=e.indexOf(".");return n>=0&&(e=e.slice(0,n)),!e||e==="start"})}function VL(t,e,n){var i,r,o=zL(e)?Nh:Si;return function(){var s=o(this,t),a=s.on;a!==i&&(r=(i=a).copy()).on(e,n),s.on=r}}function HL(t,e){var n=this._id;return arguments.length<2?Jn(this.node(),n).on.on(t):this.each(VL(n,t,e))}function $L(t){return function(){var e=this.parentNode;for(var n in this.__transition)if(+n!==t)return;e&&e.removeChild(this)}}function GL(){return this.on("end.remove",$L(this._id))}function WL(t){var e=this._name,n=this._id;typeof t!="function"&&(t=Ch(t));for(var i=this._groups,r=i.length,o=new Array(r),s=0;s<r;++s)for(var a=i[s],l=a.length,u=o[s]=new Array(l),c,f,d=0;d<l;++d)(c=a[d])&&(f=t.call(c,c.__data__,d,a))&&("__data__"in c&&(f.__data__=c.__data__),u[d]=f,Xu(u[d],e,n,d,u,Jn(c,n)));return new nr(o,this._parents,e,n)}function XL(t){var e=this._name,n=this._id;typeof t!="function"&&(t=B_(t));for(var i=this._groups,r=i.length,o=[],s=[],a=0;a<r;++a)for(var l=i[a],u=l.length,c,f=0;f<u;++f)if(c=l[f]){for(var d=t.call(c,c.__data__,f,l),h,g=Jn(c,n),_=0,m=d.length;_<m;++_)(h=d[_])&&Xu(h,e,n,_,d,g);o.push(d),s.push(c)}return new nr(o,s,e,n)}var YL=Ma.prototype.constructor;function qL(){return new YL(this._groups,this._parents)}function KL(t,e){var n,i,r;return function(){var o=rs(this,t),s=(this.style.removeProperty(t),rs(this,t));return o===s?null:o===n&&s===i?r:r=e(n=o,i=s)}}function sy(t){return function(){this.style.removeProperty(t)}}function ZL(t,e,n){var i,r=n+"",o;return function(){var s=rs(this,t);return s===r?null:s===i?o:o=e(i=s,n)}}function jL(t,e,n){var i,r,o;return function(){var s=rs(this,t),a=n(this),l=a+"";return a==null&&(l=a=(this.style.removeProperty(t),rs(this,t))),s===l?null:s===i&&l===r?o:(r=l,o=e(i=s,a))}}function JL(t,e){var n,i,r,o="style."+e,s="end."+o,a;return function(){var l=Si(this,t),u=l.on,c=l.value[o]==null?a||(a=sy(e)):void 0;(u!==n||r!==c)&&(i=(n=u).copy()).on(s,r=c),l.on=i}}function QL(t,e,n){var i=(t+="")=="transform"?QD:oy;return e==null?this.styleTween(t,KL(t,i)).on("end.style."+t,sy(t)):typeof e=="function"?this.styleTween(t,jL(t,i,Dh(this,"style."+t,e))).each(JL(this._id,t)):this.styleTween(t,ZL(t,i,e),n).on("end.style."+t,null)}function eF(t,e,n){return function(i){this.style.setProperty(t,e.call(this,i),n)}}function tF(t,e,n){var i,r;function o(){var s=e.apply(this,arguments);return s!==r&&(i=(r=s)&&eF(t,s,n)),i}return o._value=e,o}function nF(t,e,n){var i="style."+(t+="");if(arguments.length<2)return(i=this.tween(i))&&i._value;if(e==null)return this.tween(i,null);if(typeof e!="function")throw new Error;return this.tween(i,tF(t,e,n??""))}function iF(t){return function(){this.textContent=t}}function rF(t){return function(){var e=t(this);this.textContent=e??""}}function oF(t){return this.tween("text",typeof t=="function"?rF(Dh(this,"text",t)):iF(t==null?"":t+""))}function sF(t){return function(e){this.textContent=t.call(this,e)}}function aF(t){var e,n;function i(){var r=t.apply(this,arguments);return r!==n&&(e=(n=r)&&sF(r)),e}return i._value=t,i}function lF(t){var e="text";if(arguments.length<1)return(e=this.tween(e))&&e._value;if(t==null)return this.tween(e,null);if(typeof t!="function")throw new Error;return this.tween(e,aF(t))}function uF(){for(var t=this._name,e=this._id,n=ay(),i=this._groups,r=i.length,o=0;o<r;++o)for(var s=i[o],a=s.length,l,u=0;u<a;++u)if(l=s[u]){var c=Jn(l,e);Xu(l,t,n,u,s,{time:c.time+c.delay+c.duration,delay:0,duration:c.duration,ease:c.ease})}return new nr(i,this._parents,t,n)}function cF(){var t,e,n=this,i=n._id,r=n.size();return new Promise(function(o,s){var a={value:s},l={value:function(){--r===0&&o()}};n.each(function(){var u=Si(this,i),c=u.on;c!==t&&(e=(t=c).copy(),e._.cancel.push(a),e._.interrupt.push(a),e._.end.push(l)),u.on=e}),r===0&&o()})}var fF=0;function nr(t,e,n,i){this._groups=t,this._parents=e,this._name=n,this._id=i}function ay(){return++fF}var Ni=Ma.prototype;nr.prototype={constructor:nr,select:WL,selectAll:XL,selectChild:Ni.selectChild,selectChildren:Ni.selectChildren,filter:BL,merge:kL,selection:qL,transition:uF,call:Ni.call,nodes:Ni.nodes,node:Ni.node,size:Ni.size,empty:Ni.empty,each:Ni.each,on:HL,attr:SL,attrTween:AL,style:QL,styleTween:nF,text:oF,textTween:lF,remove:GL,tween:mL,delay:IL,duration:DL,ease:FL,easeVarying:OL,end:cF,[Symbol.iterator]:Ni[Symbol.iterator]};function dF(t){return((t*=2)<=1?t*t*t:(t-=2)*t*t+2)/2}var hF={time:null,delay:0,duration:250,ease:dF};function pF(t,e){for(var n;!(n=t.__transition)||!(n=n[e]);)if(!(t=t.parentNode))throw new Error(`transition ${e} not found`);return n}function mF(t){var e,n;t instanceof nr?(e=t._id,t=t._name):(e=ay(),(n=hF).time=Ph(),t=t==null?null:t+"");for(var i=this._groups,r=i.length,o=0;o<r;++o)for(var s=i[o],a=s.length,l,u=0;u<a;++u)(l=s[u])&&Xu(l,t,e,u,s,n||pF(l,e));return new nr(i,this._parents,t,e)}Ma.prototype.interrupt=dL;Ma.prototype.transition=mF;const fl=t=>()=>t;function gF(t,{sourceEvent:e,target:n,transform:i,dispatch:r}){Object.defineProperties(this,{type:{value:t,enumerable:!0,configurable:!0},sourceEvent:{value:e,enumerable:!0,configurable:!0},target:{value:n,enumerable:!0,configurable:!0},transform:{value:i,enumerable:!0,configurable:!0},_:{value:r}})}function Vi(t,e,n){this.k=t,this.x=e,this.y=n}Vi.prototype={constructor:Vi,scale:function(t){return t===1?this:new Vi(this.k*t,this.x,this.y)},translate:function(t,e){return t===0&e===0?this:new Vi(this.k,this.x+this.k*t,this.y+this.k*e)},apply:function(t){return[t[0]*this.k+this.x,t[1]*this.k+this.y]},applyX:function(t){return t*this.k+this.x},applyY:function(t){return t*this.k+this.y},invert:function(t){return[(t[0]-this.x)/this.k,(t[1]-this.y)/this.k]},invertX:function(t){return(t-this.x)/this.k},invertY:function(t){return(t-this.y)/this.k},rescaleX:function(t){return t.copy().domain(t.range().map(this.invertX,this).map(t.invert,t))},rescaleY:function(t){return t.copy().domain(t.range().map(this.invertY,this).map(t.invert,t))},toString:function(){return"translate("+this.x+","+this.y+") scale("+this.k+")"}};var Lh=new Vi(1,0,0);Vi.prototype;function tf(t){t.stopImmediatePropagation()}function Ms(t){t.preventDefault(),t.stopImmediatePropagation()}function vF(t){return(!t.ctrlKey||t.type==="wheel")&&!t.button}function _F(){var t=this;return t instanceof SVGElement?(t=t.ownerSVGElement||t,t.hasAttribute("viewBox")?(t=t.viewBox.baseVal,[[t.x,t.y],[t.x+t.width,t.y+t.height]]):[[0,0],[t.width.baseVal.value,t.height.baseVal.value]]):[[0,0],[t.clientWidth,t.clientHeight]]}function Mg(){return this.__zoom||Lh}function yF(t){return-t.deltaY*(t.deltaMode===1?.05:t.deltaMode?1:.002)*(t.ctrlKey?10:1)}function xF(){return navigator.maxTouchPoints||"ontouchstart"in this}function bF(t,e,n){var i=t.invertX(e[0][0])-n[0][0],r=t.invertX(e[1][0])-n[1][0],o=t.invertY(e[0][1])-n[0][1],s=t.invertY(e[1][1])-n[1][1];return t.translate(r>i?(i+r)/2:Math.min(0,i)||Math.max(0,r),s>o?(o+s)/2:Math.min(0,o)||Math.max(0,s))}function SF(){var t=vF,e=_F,n=bF,i=yF,r=xF,o=[0,1/0],s=[[-1/0,-1/0],[1/0,1/0]],a=250,l=rL,u=Ah("start","zoom","end"),c,f,d,h=500,g=150,_=0,m=10;function p(v){v.property("__zoom",Mg).on("wheel.zoom",y,{passive:!1}).on("mousedown.zoom",M).on("dblclick.zoom",N).filter(r).on("touchstart.zoom",C).on("touchmove.zoom",P).on("touchend.zoom touchcancel.zoom",B).style("-webkit-tap-highlight-color","rgba(0,0,0,0)")}p.transform=function(v,A,E,I){var V=v.selection?v.selection():v;V.property("__zoom",Mg),v!==V?D(v,A,E,I):V.interrupt().each(function(){O(this,arguments).event(I).start().zoom(null,typeof A=="function"?A.apply(this,arguments):A).end()})},p.scaleBy=function(v,A,E,I){p.scaleTo(v,function(){var V=this.__zoom.k,W=typeof A=="function"?A.apply(this,arguments):A;return V*W},E,I)},p.scaleTo=function(v,A,E,I){p.transform(v,function(){var V=e.apply(this,arguments),W=this.__zoom,q=E==null?x(V):typeof E=="function"?E.apply(this,arguments):E,$=W.invert(q),K=typeof A=="function"?A.apply(this,arguments):A;return n(S(b(W,K),q,$),V,s)},E,I)},p.translateBy=function(v,A,E,I){p.transform(v,function(){return n(this.__zoom.translate(typeof A=="function"?A.apply(this,arguments):A,typeof E=="function"?E.apply(this,arguments):E),e.apply(this,arguments),s)},null,I)},p.translateTo=function(v,A,E,I,V){p.transform(v,function(){var W=e.apply(this,arguments),q=this.__zoom,$=I==null?x(W):typeof I=="function"?I.apply(this,arguments):I;return n(Lh.translate($[0],$[1]).scale(q.k).translate(typeof A=="function"?-A.apply(this,arguments):-A,typeof E=="function"?-E.apply(this,arguments):-E),W,s)},I,V)};function b(v,A){return A=Math.max(o[0],Math.min(o[1],A)),A===v.k?v:new Vi(A,v.x,v.y)}function S(v,A,E){var I=A[0]-E[0]*v.k,V=A[1]-E[1]*v.k;return I===v.x&&V===v.y?v:new Vi(v.k,I,V)}function x(v){return[(+v[0][0]+ +v[1][0])/2,(+v[0][1]+ +v[1][1])/2]}function D(v,A,E,I){v.on("start.zoom",function(){O(this,arguments).event(I).start()}).on("interrupt.zoom end.zoom",function(){O(this,arguments).event(I).end()}).tween("zoom",function(){var V=this,W=arguments,q=O(V,W).event(I),$=e.apply(V,W),K=E==null?x($):typeof E=="function"?E.apply(V,W):E,ae=Math.max($[1][0]-$[0][0],$[1][1]-$[0][1]),ve=V.__zoom,pe=typeof A=="function"?A.apply(V,W):A,Z=l(ve.invert(K).concat(ae/ve.k),pe.invert(K).concat(ae/pe.k));return function(ne){if(ne===1)ne=pe;else{var le=Z(ne),xe=ae/le[2];ne=new Vi(xe,K[0]-le[0]*xe,K[1]-le[1]*xe)}q.zoom(null,ne)}})}function O(v,A,E){return!E&&v.__zooming||new z(v,A)}function z(v,A){this.that=v,this.args=A,this.active=0,this.sourceEvent=null,this.extent=e.apply(v,A),this.taps=0}z.prototype={event:function(v){return v&&(this.sourceEvent=v),this},start:function(){return++this.active===1&&(this.that.__zooming=this,this.emit("start")),this},zoom:function(v,A){return this.mouse&&v!=="mouse"&&(this.mouse[1]=A.invert(this.mouse[0])),this.touch0&&v!=="touch"&&(this.touch0[1]=A.invert(this.touch0[0])),this.touch1&&v!=="touch"&&(this.touch1[1]=A.invert(this.touch1[0])),this.that.__zoom=A,this.emit("zoom"),this},end:function(){return--this.active===0&&(delete this.that.__zooming,this.emit("end")),this},emit:function(v){var A=Mr(this.that).datum();u.call(v,this.that,new gF(v,{sourceEvent:this.sourceEvent,target:p,transform:this.that.__zoom,dispatch:u}),A)}};function y(v,...A){if(!t.apply(this,arguments))return;var E=O(this,A).event(v),I=this.__zoom,V=Math.max(o[0],Math.min(o[1],I.k*Math.pow(2,i.apply(this,arguments)))),W=vr(v);if(E.wheel)(E.mouse[0][0]!==W[0]||E.mouse[0][1]!==W[1])&&(E.mouse[1]=I.invert(E.mouse[0]=W)),clearTimeout(E.wheel);else{if(I.k===V)return;E.mouse=[W,I.invert(W)],Pl(this),E.start()}Ms(v),E.wheel=setTimeout(q,g),E.zoom("mouse",n(S(b(I,V),E.mouse[0],E.mouse[1]),E.extent,s));function q(){E.wheel=null,E.end()}}function M(v,...A){if(d||!t.apply(this,arguments))return;var E=v.currentTarget,I=O(this,A,!0).event(v),V=Mr(v.view).on("mousemove.zoom",K,!0).on("mouseup.zoom",ae,!0),W=vr(v,E),q=v.clientX,$=v.clientY;PD(v.view),tf(v),I.mouse=[W,this.__zoom.invert(W)],Pl(this),I.start();function K(ve){if(Ms(ve),!I.moved){var pe=ve.clientX-q,Z=ve.clientY-$;I.moved=pe*pe+Z*Z>_}I.event(ve).zoom("mouse",n(S(I.that.__zoom,I.mouse[0]=vr(ve,E),I.mouse[1]),I.extent,s))}function ae(ve){V.on("mousemove.zoom mouseup.zoom",null),ND(ve.view,I.moved),Ms(ve),I.event(ve).end()}}function N(v,...A){if(t.apply(this,arguments)){var E=this.__zoom,I=vr(v.changedTouches?v.changedTouches[0]:v,this),V=E.invert(I),W=E.k*(v.shiftKey?.5:2),q=n(S(b(E,W),I,V),e.apply(this,A),s);Ms(v),a>0?Mr(this).transition().duration(a).call(D,q,I,v):Mr(this).call(p.transform,q,I,v)}}function C(v,...A){if(t.apply(this,arguments)){var E=v.touches,I=E.length,V=O(this,A,v.changedTouches.length===I).event(v),W,q,$,K;for(tf(v),q=0;q<I;++q)$=E[q],K=vr($,this),K=[K,this.__zoom.invert(K),$.identifier],V.touch0?!V.touch1&&V.touch0[2]!==K[2]&&(V.touch1=K,V.taps=0):(V.touch0=K,W=!0,V.taps=1+!!c);c&&(c=clearTimeout(c)),W&&(V.taps<2&&(f=K[0],c=setTimeout(function(){c=null},h)),Pl(this),V.start())}}function P(v,...A){if(this.__zooming){var E=O(this,A).event(v),I=v.changedTouches,V=I.length,W,q,$,K;for(Ms(v),W=0;W<V;++W)q=I[W],$=vr(q,this),E.touch0&&E.touch0[2]===q.identifier?E.touch0[0]=$:E.touch1&&E.touch1[2]===q.identifier&&(E.touch1[0]=$);if(q=E.that.__zoom,E.touch1){var ae=E.touch0[0],ve=E.touch0[1],pe=E.touch1[0],Z=E.touch1[1],ne=(ne=pe[0]-ae[0])*ne+(ne=pe[1]-ae[1])*ne,le=(le=Z[0]-ve[0])*le+(le=Z[1]-ve[1])*le;q=b(q,Math.sqrt(ne/le)),$=[(ae[0]+pe[0])/2,(ae[1]+pe[1])/2],K=[(ve[0]+Z[0])/2,(ve[1]+Z[1])/2]}else if(E.touch0)$=E.touch0[0],K=E.touch0[1];else return;E.zoom("touch",n(S(q,$,K),E.extent,s))}}function B(v,...A){if(this.__zooming){var E=O(this,A).event(v),I=v.changedTouches,V=I.length,W,q;for(tf(v),d&&clearTimeout(d),d=setTimeout(function(){d=null},h),W=0;W<V;++W)q=I[W],E.touch0&&E.touch0[2]===q.identifier?delete E.touch0:E.touch1&&E.touch1[2]===q.identifier&&delete E.touch1;if(E.touch1&&!E.touch0&&(E.touch0=E.touch1,delete E.touch1),E.touch0)E.touch0[1]=this.__zoom.invert(E.touch0[0]);else if(E.end(),E.taps===2&&(q=vr(q,this),Math.hypot(f[0]-q[0],f[1]-q[1])<m)){var $=Mr(this).on("dblclick.zoom");$&&$.apply(this,arguments)}}}return p.wheelDelta=function(v){return arguments.length?(i=typeof v=="function"?v:fl(+v),p):i},p.filter=function(v){return arguments.length?(t=typeof v=="function"?v:fl(!!v),p):t},p.touchable=function(v){return arguments.length?(r=typeof v=="function"?v:fl(!!v),p):r},p.extent=function(v){return arguments.length?(e=typeof v=="function"?v:fl([[+v[0][0],+v[0][1]],[+v[1][0],+v[1][1]]]),p):e},p.scaleExtent=function(v){return arguments.length?(o[0]=+v[0],o[1]=+v[1],p):[o[0],o[1]]},p.translateExtent=function(v){return arguments.length?(s[0][0]=+v[0][0],s[1][0]=+v[1][0],s[0][1]=+v[0][1],s[1][1]=+v[1][1],p):[[s[0][0],s[0][1]],[s[1][0],s[1][1]]]},p.constrain=function(v){return arguments.length?(n=v,p):n},p.duration=function(v){return arguments.length?(a=+v,p):a},p.interpolate=function(v){return arguments.length?(l=v,p):l},p.on=function(){var v=u.on.apply(u,arguments);return v===u?p:v},p.clickDistance=function(v){return arguments.length?(_=(v=+v)*v,p):Math.sqrt(_)},p.tapDistance=function(v){return arguments.length?(m=+v,p):m},p}const ly=Symbol("MiniMapSlots"),MF=["id","x","y","rx","ry","width","height","fill","stroke","stroke-width","shape-rendering"],wF={name:"MiniMapNode",compatConfig:{MODE:3},inheritAttrs:!1},EF=Rt({...wF,props:{id:{},type:{},selected:{type:Boolean},dragging:{type:Boolean},position:{},dimensions:{},borderRadius:{},color:{},shapeRendering:{},strokeColor:{},strokeWidth:{},hidden:{type:Boolean}},emits:["click","dblclick","mouseenter","mousemove","mouseleave"],setup(t,{emit:e}){const n=t,i=An(ly),r=Zd(),o=vt(()=>r.style??{});function s(f){e("click",f)}function a(f){e("dblclick",f)}function l(f){e("mouseenter",f)}function u(f){e("mousemove",f)}function c(f){e("mouseleave",f)}return(f,d)=>!f.hidden&&f.dimensions.width!==0&&f.dimensions.height!==0?(ye(),Se(ut,{key:0},[ge(i)[`node-${n.type}`]?(ye(),mn(_0(ge(i)[`node-${n.type}`]),ky(Ys({key:0},{...n,...f.$attrs})),null,16)):(ye(),Se("rect",Ys({key:1,id:f.id},f.$attrs,{class:["vue-flow__minimap-node",{selected:f.selected,dragging:f.dragging}],x:f.position.x,y:f.position.y,rx:f.borderRadius,ry:f.borderRadius,width:f.dimensions.width,height:f.dimensions.height,fill:f.color||o.value.background||o.value.backgroundColor,stroke:f.strokeColor,"stroke-width":f.strokeWidth,"shape-rendering":f.shapeRendering,onClick:s,onDblclick:a,onMouseenter:l,onMousemove:u,onMouseleave:c}),null,16,MF))],64)):Je("",!0)}}),TF=["width","height","viewBox","aria-labelledby"],AF=["id"],CF=["d","fill","stroke","stroke-width"],RF={name:"MiniMap",compatConfig:{MODE:3}},IF=Rt({...RF,props:{nodeColor:{type:[String,Function],default:"#e2e2e2"},nodeStrokeColor:{type:[String,Function],default:"transparent"},nodeClassName:{type:[String,Function]},nodeBorderRadius:{default:5},nodeStrokeWidth:{default:2},maskColor:{default:"rgb(240, 240, 240, 0.6)"},maskStrokeColor:{default:"none"},maskStrokeWidth:{default:1},position:{default:"bottom-right"},pannable:{type:Boolean,default:!1},zoomable:{type:Boolean,default:!1},width:{},height:{},ariaLabel:{default:"Vue Flow mini map"},inversePan:{type:Boolean,default:!1},zoomStep:{default:1},offsetScale:{default:5},maskBorderRadius:{default:0}},emits:["click","nodeClick","nodeDblclick","nodeMouseenter","nodeMousemove","nodeMouseleave"],setup(t,{emit:e}){const n=b0(),i=Zd(),r=200,o=150,{id:s,edges:a,viewport:l,translateExtent:u,dimensions:c,emits:f,d3Selection:d,d3Zoom:h,getNodesInitialized:g}=It(),_=qe();Cr(ly,n);const m=vt(()=>{var V;return t.width??((V=i.style)==null?void 0:V.width)??r}),p=vt(()=>{var V;return t.height??((V=i.style)==null?void 0:V.height)??o}),b=typeof window>"u"||window.chrome?"crispEdges":"geometricPrecision",S=De(()=>typeof t.nodeColor=="string"?()=>t.nodeColor:t.nodeColor),x=De(()=>typeof t.nodeStrokeColor=="string"?()=>t.nodeStrokeColor:t.nodeStrokeColor),D=De(()=>typeof t.nodeClassName=="string"?()=>t.nodeClassName:typeof t.nodeClassName=="function"?t.nodeClassName:()=>""),O=De(()=>Sh(g.value.filter(V=>!V.hidden))),z=De(()=>({x:-l.value.x/l.value.zoom,y:-l.value.y/l.value.zoom,width:c.value.width/l.value.zoom,height:c.value.height/l.value.zoom})),y=De(()=>g.value&&g.value.length?k3(O.value,z.value):z.value),M=De(()=>{const V=y.value.width/m.value,W=y.value.height/p.value;return Math.max(V,W)}),N=De(()=>{const V=M.value*m.value,W=M.value*p.value,q=t.offsetScale*M.value;return{offset:q,x:y.value.x-(V-y.value.width)/2-q,y:y.value.y-(W-y.value.height)/2-q,width:V+q*2,height:W+q*2}}),C=De(()=>!N.value.x||!N.value.y?"":`
    M${N.value.x-N.value.offset},${N.value.y-N.value.offset}
    h${N.value.width+N.value.offset*2}
    v${N.value.height+N.value.offset*2}
    h${-N.value.width-N.value.offset*2}z
    M${z.value.x+t.maskBorderRadius},${z.value.y}
    h${z.value.width-2*t.maskBorderRadius}
    a${t.maskBorderRadius},${t.maskBorderRadius} 0 0 1 ${t.maskBorderRadius},${t.maskBorderRadius}
    v${z.value.height-2*t.maskBorderRadius}
    a${t.maskBorderRadius},${t.maskBorderRadius} 0 0 1 -${t.maskBorderRadius},${t.maskBorderRadius}
    h${-(z.value.width-2*t.maskBorderRadius)}
    a${t.maskBorderRadius},${t.maskBorderRadius} 0 0 1 -${t.maskBorderRadius},-${t.maskBorderRadius}
    v${-(z.value.height-2*t.maskBorderRadius)}
    a${t.maskBorderRadius},${t.maskBorderRadius} 0 0 1 ${t.maskBorderRadius},-${t.maskBorderRadius}z`);u0(V=>{if(_.value){const W=Mr(_.value),q=ae=>{if(ae.sourceEvent.type!=="wheel"||!d.value||!h.value)return;const ve=ae.sourceEvent.ctrlKey&&sa()?10:1,pe=-ae.sourceEvent.deltaY*(ae.sourceEvent.deltaMode===1?.05:ae.sourceEvent.deltaMode?1:.002)*t.zoomStep,Z=l.value.zoom*2**(pe*ve);h.value.scaleTo(d.value,Z)},$=ae=>{if(ae.sourceEvent.type!=="mousemove"||!d.value||!h.value)return;const ve=M.value*Math.max(1,l.value.zoom)*(t.inversePan?-1:1),pe={x:l.value.x-ae.sourceEvent.movementX*ve,y:l.value.y-ae.sourceEvent.movementY*ve},Z=[[0,0],[c.value.width,c.value.height]],ne=Lh.translate(pe.x,pe.y).scale(l.value.zoom),le=h.value.constrain()(ne,Z,u.value);h.value.transform(d.value,le)},K=SF().wheelDelta(ae=>bd(ae)*(t.zoomStep/10)).on("zoom",t.pannable?$:()=>{}).on("zoom.wheel",t.zoomable?q:()=>{});W.call(K),V(()=>{W.on("zoom",null)})}},{flush:"post"});function P(V){const[W,q]=vr(V);e("click",{event:V,position:{x:W,y:q}})}function B(V,W){const q={event:V,node:W,connectedEdges:Kr([W],a.value)};f.miniMapNodeClick(q),e("nodeClick",q)}function v(V,W){const q={event:V,node:W,connectedEdges:Kr([W],a.value)};f.miniMapNodeDoubleClick(q),e("nodeDblclick",q)}function A(V,W){const q={event:V,node:W,connectedEdges:Kr([W],a.value)};f.miniMapNodeMouseEnter(q),e("nodeMouseenter",q)}function E(V,W){const q={event:V,node:W,connectedEdges:Kr([W],a.value)};f.miniMapNodeMouseMove(q),e("nodeMousemove",q)}function I(V,W){const q={event:V,node:W,connectedEdges:Kr([W],a.value)};f.miniMapNodeMouseLeave(q),e("nodeMouseleave",q)}return(V,W)=>(ye(),mn(ge(VP),{position:V.position,class:Dt(["vue-flow__minimap",{pannable:V.pannable,zoomable:V.zoomable}])},{default:En(()=>[(ye(),Se("svg",{ref_key:"el",ref:_,width:m.value,height:p.value,viewBox:[N.value.x,N.value.y,N.value.width,N.value.height].join(" "),role:"img","aria-labelledby":`vue-flow__minimap-${ge(s)}`,onClick:P},[V.ariaLabel?(ye(),Se("title",{key:0,id:`vue-flow__minimap-${ge(s)}`},Ze(V.ariaLabel),9,AF)):Je("",!0),(ye(!0),Se(ut,null,dn(ge(g),q=>(ye(),mn(EF,{id:q.id,key:q.id,f:"",position:q.computedPosition,dimensions:q.dimensions,selected:q.selected,dragging:q.dragging,style:yt(q.style),class:Dt(D.value(q)),color:S.value(q),"border-radius":V.nodeBorderRadius,"stroke-color":x.value(q),"stroke-width":V.nodeStrokeWidth,"shape-rendering":ge(b),type:q.type,hidden:q.hidden,onClick:$=>B($,q),onDblclick:$=>v($,q),onMouseenter:$=>A($,q),onMousemove:$=>E($,q),onMouseleave:$=>I($,q)},null,8,["id","position","dimensions","selected","dragging","style","class","color","border-radius","stroke-color","stroke-width","shape-rendering","type","hidden","onClick","onDblclick","onMouseenter","onMousemove","onMouseleave"]))),128)),fe("path",{class:"vue-flow__minimap-mask",d:C.value,fill:V.maskColor,stroke:V.maskStrokeColor,"stroke-width":V.maskStrokeWidth,"fill-rule":"evenodd"},null,8,CF)],8,TF))]),_:1},8,["position","class"]))}});var Ld="http://www.w3.org/1999/xhtml";const wg={svg:"http://www.w3.org/2000/svg",xhtml:Ld,xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"};function uy(t){var e=t+="",n=e.indexOf(":");return n>=0&&(e=t.slice(0,n))!=="xmlns"&&(t=t.slice(n+1)),wg.hasOwnProperty(e)?{space:wg[e],local:t}:t}function PF(t){return function(){var e=this.ownerDocument,n=this.namespaceURI;return n===Ld&&e.documentElement.namespaceURI===Ld?e.createElement(t):e.createElementNS(n,t)}}function NF(t){return function(){return this.ownerDocument.createElementNS(t.space,t.local)}}function cy(t){var e=uy(t);return(e.local?NF:PF)(e)}function DF(){}function fy(t){return t==null?DF:function(){return this.querySelector(t)}}function LF(t){typeof t!="function"&&(t=fy(t));for(var e=this._groups,n=e.length,i=new Array(n),r=0;r<n;++r)for(var o=e[r],s=o.length,a=i[r]=new Array(s),l,u,c=0;c<s;++c)(l=o[c])&&(u=t.call(l,l.__data__,c,o))&&("__data__"in l&&(u.__data__=l.__data__),a[c]=u);return new Un(i,this._parents)}function FF(t){return t==null?[]:Array.isArray(t)?t:Array.from(t)}function UF(){return[]}function OF(t){return t==null?UF:function(){return this.querySelectorAll(t)}}function BF(t){return function(){return FF(t.apply(this,arguments))}}function kF(t){typeof t=="function"?t=BF(t):t=OF(t);for(var e=this._groups,n=e.length,i=[],r=[],o=0;o<n;++o)for(var s=e[o],a=s.length,l,u=0;u<a;++u)(l=s[u])&&(i.push(t.call(l,l.__data__,u,s)),r.push(l));return new Un(i,r)}function zF(t){return function(){return this.matches(t)}}function dy(t){return function(e){return e.matches(t)}}var VF=Array.prototype.find;function HF(t){return function(){return VF.call(this.children,t)}}function $F(){return this.firstElementChild}function GF(t){return this.select(t==null?$F:HF(typeof t=="function"?t:dy(t)))}var WF=Array.prototype.filter;function XF(){return Array.from(this.children)}function YF(t){return function(){return WF.call(this.children,t)}}function qF(t){return this.selectAll(t==null?XF:YF(typeof t=="function"?t:dy(t)))}function KF(t){typeof t!="function"&&(t=zF(t));for(var e=this._groups,n=e.length,i=new Array(n),r=0;r<n;++r)for(var o=e[r],s=o.length,a=i[r]=[],l,u=0;u<s;++u)(l=o[u])&&t.call(l,l.__data__,u,o)&&a.push(l);return new Un(i,this._parents)}function hy(t){return new Array(t.length)}function ZF(){return new Un(this._enter||this._groups.map(hy),this._parents)}function fu(t,e){this.ownerDocument=t.ownerDocument,this.namespaceURI=t.namespaceURI,this._next=null,this._parent=t,this.__data__=e}fu.prototype={constructor:fu,appendChild:function(t){return this._parent.insertBefore(t,this._next)},insertBefore:function(t,e){return this._parent.insertBefore(t,e)},querySelector:function(t){return this._parent.querySelector(t)},querySelectorAll:function(t){return this._parent.querySelectorAll(t)}};function jF(t){return function(){return t}}function JF(t,e,n,i,r,o){for(var s=0,a,l=e.length,u=o.length;s<u;++s)(a=e[s])?(a.__data__=o[s],i[s]=a):n[s]=new fu(t,o[s]);for(;s<l;++s)(a=e[s])&&(r[s]=a)}function QF(t,e,n,i,r,o,s){var a,l,u=new Map,c=e.length,f=o.length,d=new Array(c),h;for(a=0;a<c;++a)(l=e[a])&&(d[a]=h=s.call(l,l.__data__,a,e)+"",u.has(h)?r[a]=l:u.set(h,l));for(a=0;a<f;++a)h=s.call(t,o[a],a,o)+"",(l=u.get(h))?(i[a]=l,l.__data__=o[a],u.delete(h)):n[a]=new fu(t,o[a]);for(a=0;a<c;++a)(l=e[a])&&u.get(d[a])===l&&(r[a]=l)}function eU(t){return t.__data__}function tU(t,e){if(!arguments.length)return Array.from(this,eU);var n=e?QF:JF,i=this._parents,r=this._groups;typeof t!="function"&&(t=jF(t));for(var o=r.length,s=new Array(o),a=new Array(o),l=new Array(o),u=0;u<o;++u){var c=i[u],f=r[u],d=f.length,h=nU(t.call(c,c&&c.__data__,u,i)),g=h.length,_=a[u]=new Array(g),m=s[u]=new Array(g),p=l[u]=new Array(d);n(c,f,_,m,p,h,e);for(var b=0,S=0,x,D;b<g;++b)if(x=_[b]){for(b>=S&&(S=b+1);!(D=m[S])&&++S<g;);x._next=D||null}}return s=new Un(s,i),s._enter=a,s._exit=l,s}function nU(t){return typeof t=="object"&&"length"in t?t:Array.from(t)}function iU(){return new Un(this._exit||this._groups.map(hy),this._parents)}function rU(t,e,n){var i=this.enter(),r=this,o=this.exit();return typeof t=="function"?(i=t(i),i&&(i=i.selection())):i=i.append(t+""),e!=null&&(r=e(r),r&&(r=r.selection())),n==null?o.remove():n(o),i&&r?i.merge(r).order():r}function oU(t){for(var e=t.selection?t.selection():t,n=this._groups,i=e._groups,r=n.length,o=i.length,s=Math.min(r,o),a=new Array(r),l=0;l<s;++l)for(var u=n[l],c=i[l],f=u.length,d=a[l]=new Array(f),h,g=0;g<f;++g)(h=u[g]||c[g])&&(d[g]=h);for(;l<r;++l)a[l]=n[l];return new Un(a,this._parents)}function sU(){for(var t=this._groups,e=-1,n=t.length;++e<n;)for(var i=t[e],r=i.length-1,o=i[r],s;--r>=0;)(s=i[r])&&(o&&s.compareDocumentPosition(o)^4&&o.parentNode.insertBefore(s,o),o=s);return this}function aU(t){t||(t=lU);function e(f,d){return f&&d?t(f.__data__,d.__data__):!f-!d}for(var n=this._groups,i=n.length,r=new Array(i),o=0;o<i;++o){for(var s=n[o],a=s.length,l=r[o]=new Array(a),u,c=0;c<a;++c)(u=s[c])&&(l[c]=u);l.sort(e)}return new Un(r,this._parents).order()}function lU(t,e){return t<e?-1:t>e?1:t>=e?0:NaN}function uU(){var t=arguments[0];return arguments[0]=this,t.apply(null,arguments),this}function cU(){return Array.from(this)}function fU(){for(var t=this._groups,e=0,n=t.length;e<n;++e)for(var i=t[e],r=0,o=i.length;r<o;++r){var s=i[r];if(s)return s}return null}function dU(){let t=0;for(const e of this)++t;return t}function hU(){return!this.node()}function pU(t){for(var e=this._groups,n=0,i=e.length;n<i;++n)for(var r=e[n],o=0,s=r.length,a;o<s;++o)(a=r[o])&&t.call(a,a.__data__,o,r);return this}function mU(t){return function(){this.removeAttribute(t)}}function gU(t){return function(){this.removeAttributeNS(t.space,t.local)}}function vU(t,e){return function(){this.setAttribute(t,e)}}function _U(t,e){return function(){this.setAttributeNS(t.space,t.local,e)}}function yU(t,e){return function(){var n=e.apply(this,arguments);n==null?this.removeAttribute(t):this.setAttribute(t,n)}}function xU(t,e){return function(){var n=e.apply(this,arguments);n==null?this.removeAttributeNS(t.space,t.local):this.setAttributeNS(t.space,t.local,n)}}function bU(t,e){var n=uy(t);if(arguments.length<2){var i=this.node();return n.local?i.getAttributeNS(n.space,n.local):i.getAttribute(n)}return this.each((e==null?n.local?gU:mU:typeof e=="function"?n.local?xU:yU:n.local?_U:vU)(n,e))}function py(t){return t.ownerDocument&&t.ownerDocument.defaultView||t.document&&t||t.defaultView}function SU(t){return function(){this.style.removeProperty(t)}}function MU(t,e,n){return function(){this.style.setProperty(t,e,n)}}function wU(t,e,n){return function(){var i=e.apply(this,arguments);i==null?this.style.removeProperty(t):this.style.setProperty(t,i,n)}}function EU(t,e,n){return arguments.length>1?this.each((e==null?SU:typeof e=="function"?wU:MU)(t,e,n??"")):TU(this.node(),t)}function TU(t,e){return t.style.getPropertyValue(e)||py(t).getComputedStyle(t,null).getPropertyValue(e)}function AU(t){return function(){delete this[t]}}function CU(t,e){return function(){this[t]=e}}function RU(t,e){return function(){var n=e.apply(this,arguments);n==null?delete this[t]:this[t]=n}}function IU(t,e){return arguments.length>1?this.each((e==null?AU:typeof e=="function"?RU:CU)(t,e)):this.node()[t]}function my(t){return t.trim().split(/^|\s+/)}function Fh(t){return t.classList||new gy(t)}function gy(t){this._node=t,this._names=my(t.getAttribute("class")||"")}gy.prototype={add:function(t){var e=this._names.indexOf(t);e<0&&(this._names.push(t),this._node.setAttribute("class",this._names.join(" ")))},remove:function(t){var e=this._names.indexOf(t);e>=0&&(this._names.splice(e,1),this._node.setAttribute("class",this._names.join(" ")))},contains:function(t){return this._names.indexOf(t)>=0}};function vy(t,e){for(var n=Fh(t),i=-1,r=e.length;++i<r;)n.add(e[i])}function _y(t,e){for(var n=Fh(t),i=-1,r=e.length;++i<r;)n.remove(e[i])}function PU(t){return function(){vy(this,t)}}function NU(t){return function(){_y(this,t)}}function DU(t,e){return function(){(e.apply(this,arguments)?vy:_y)(this,t)}}function LU(t,e){var n=my(t+"");if(arguments.length<2){for(var i=Fh(this.node()),r=-1,o=n.length;++r<o;)if(!i.contains(n[r]))return!1;return!0}return this.each((typeof e=="function"?DU:e?PU:NU)(n,e))}function FU(){this.textContent=""}function UU(t){return function(){this.textContent=t}}function OU(t){return function(){var e=t.apply(this,arguments);this.textContent=e??""}}function BU(t){return arguments.length?this.each(t==null?FU:(typeof t=="function"?OU:UU)(t)):this.node().textContent}function kU(){this.innerHTML=""}function zU(t){return function(){this.innerHTML=t}}function VU(t){return function(){var e=t.apply(this,arguments);this.innerHTML=e??""}}function HU(t){return arguments.length?this.each(t==null?kU:(typeof t=="function"?VU:zU)(t)):this.node().innerHTML}function $U(){this.nextSibling&&this.parentNode.appendChild(this)}function GU(){return this.each($U)}function WU(){this.previousSibling&&this.parentNode.insertBefore(this,this.parentNode.firstChild)}function XU(){return this.each(WU)}function YU(t){var e=typeof t=="function"?t:cy(t);return this.select(function(){return this.appendChild(e.apply(this,arguments))})}function qU(){return null}function KU(t,e){var n=typeof t=="function"?t:cy(t),i=e==null?qU:typeof e=="function"?e:fy(e);return this.select(function(){return this.insertBefore(n.apply(this,arguments),i.apply(this,arguments)||null)})}function ZU(){var t=this.parentNode;t&&t.removeChild(this)}function jU(){return this.each(ZU)}function JU(){var t=this.cloneNode(!1),e=this.parentNode;return e?e.insertBefore(t,this.nextSibling):t}function QU(){var t=this.cloneNode(!0),e=this.parentNode;return e?e.insertBefore(t,this.nextSibling):t}function eO(t){return this.select(t?QU:JU)}function tO(t){return arguments.length?this.property("__data__",t):this.node().__data__}function nO(t){return function(e){t.call(this,e,this.__data__)}}function iO(t){return t.trim().split(/^|\s+/).map(function(e){var n="",i=e.indexOf(".");return i>=0&&(n=e.slice(i+1),e=e.slice(0,i)),{type:e,name:n}})}function rO(t){return function(){var e=this.__on;if(e){for(var n=0,i=-1,r=e.length,o;n<r;++n)o=e[n],(!t.type||o.type===t.type)&&o.name===t.name?this.removeEventListener(o.type,o.listener,o.options):e[++i]=o;++i?e.length=i:delete this.__on}}}function oO(t,e,n){return function(){var i=this.__on,r,o=nO(e);if(i){for(var s=0,a=i.length;s<a;++s)if((r=i[s]).type===t.type&&r.name===t.name){this.removeEventListener(r.type,r.listener,r.options),this.addEventListener(r.type,r.listener=o,r.options=n),r.value=e;return}}this.addEventListener(t.type,o,n),r={type:t.type,name:t.name,value:e,listener:o,options:n},i?i.push(r):this.__on=[r]}}function sO(t,e,n){var i=iO(t+""),r,o=i.length,s;if(arguments.length<2){var a=this.node().__on;if(a){for(var l=0,u=a.length,c;l<u;++l)for(r=0,c=a[l];r<o;++r)if((s=i[r]).type===c.type&&s.name===c.name)return c.value}return}for(a=e?oO:rO,r=0;r<o;++r)this.each(a(i[r],e,n));return this}function yy(t,e,n){var i=py(t),r=i.CustomEvent;typeof r=="function"?r=new r(e,n):(r=i.document.createEvent("Event"),n?(r.initEvent(e,n.bubbles,n.cancelable),r.detail=n.detail):r.initEvent(e,!1,!1)),t.dispatchEvent(r)}function aO(t,e){return function(){return yy(this,t,e)}}function lO(t,e){return function(){return yy(this,t,e.apply(this,arguments))}}function uO(t,e){return this.each((typeof e=="function"?lO:aO)(t,e))}function*cO(){for(var t=this._groups,e=0,n=t.length;e<n;++e)for(var i=t[e],r=0,o=i.length,s;r<o;++r)(s=i[r])&&(yield s)}var fO=[null];function Un(t,e){this._groups=t,this._parents=e}function dO(){return this}Un.prototype={constructor:Un,select:LF,selectAll:kF,selectChild:GF,selectChildren:qF,filter:KF,data:tU,enter:ZF,exit:iU,join:rU,merge:oU,selection:dO,order:sU,sort:aU,call:uU,nodes:cU,node:fU,size:dU,empty:hU,each:pU,attr:bU,style:EU,property:IU,classed:LU,text:BU,html:HU,raise:GU,lower:XU,append:YU,insert:KU,remove:jU,clone:eO,datum:tO,on:sO,dispatch:uO,[Symbol.iterator]:cO};function fa(t){return typeof t=="string"?new Un([[document.querySelector(t)]],[document.documentElement]):new Un([[t]],fO)}function hO(t){let e;for(;e=t.sourceEvent;)t=e;return t}function Eg(t,e){if(t=hO(t),e===void 0&&(e=t.currentTarget),e){var n=e.ownerSVGElement||e;if(n.createSVGPoint){var i=n.createSVGPoint();return i.x=t.clientX,i.y=t.clientY,i=i.matrixTransform(e.getScreenCTM().inverse()),[i.x,i.y]}if(e.getBoundingClientRect){var r=e.getBoundingClientRect();return[t.clientX-r.left-e.clientLeft,t.clientY-r.top-e.clientTop]}}return[t.pageX,t.pageY]}var pO={value:()=>{}};function xy(){for(var t=0,e=arguments.length,n={},i;t<e;++t){if(!(i=arguments[t]+"")||i in n||/[\s.]/.test(i))throw new Error("illegal type: "+i);n[i]=[]}return new Nl(n)}function Nl(t){this._=t}function mO(t,e){return t.trim().split(/^|\s+/).map(function(n){var i="",r=n.indexOf(".");if(r>=0&&(i=n.slice(r+1),n=n.slice(0,r)),n&&!e.hasOwnProperty(n))throw new Error("unknown type: "+n);return{type:n,name:i}})}Nl.prototype=xy.prototype={constructor:Nl,on:function(t,e){var n=this._,i=mO(t+"",n),r,o=-1,s=i.length;if(arguments.length<2){for(;++o<s;)if((r=(t=i[o]).type)&&(r=gO(n[r],t.name)))return r;return}if(e!=null&&typeof e!="function")throw new Error("invalid callback: "+e);for(;++o<s;)if(r=(t=i[o]).type)n[r]=Tg(n[r],t.name,e);else if(e==null)for(r in n)n[r]=Tg(n[r],t.name,null);return this},copy:function(){var t={},e=this._;for(var n in e)t[n]=e[n].slice();return new Nl(t)},call:function(t,e){if((r=arguments.length-2)>0)for(var n=new Array(r),i=0,r,o;i<r;++i)n[i]=arguments[i+2];if(!this._.hasOwnProperty(t))throw new Error("unknown type: "+t);for(o=this._[t],i=0,r=o.length;i<r;++i)o[i].value.apply(e,n)},apply:function(t,e,n){if(!this._.hasOwnProperty(t))throw new Error("unknown type: "+t);for(var i=this._[t],r=0,o=i.length;r<o;++r)i[r].value.apply(e,n)}};function gO(t,e){for(var n=0,i=t.length,r;n<i;++n)if((r=t[n]).name===e)return r.value}function Tg(t,e,n){for(var i=0,r=t.length;i<r;++i)if(t[i].name===e){t[i]=pO,t=t.slice(0,i).concat(t.slice(i+1));break}return n!=null&&t.push({name:e,value:n}),t}const vO={passive:!1},da={capture:!0,passive:!1};function nf(t){t.stopImmediatePropagation()}function Xo(t){t.preventDefault(),t.stopImmediatePropagation()}function _O(t){var e=t.document.documentElement,n=fa(t).on("dragstart.drag",Xo,da);"onselectstart"in e?n.on("selectstart.drag",Xo,da):(e.__noselect=e.style.MozUserSelect,e.style.MozUserSelect="none")}function yO(t,e){var n=t.document.documentElement,i=fa(t).on("dragstart.drag",null);e&&(i.on("click.drag",Xo,da),setTimeout(function(){i.on("click.drag",null)},0)),"onselectstart"in n?i.on("selectstart.drag",null):(n.style.MozUserSelect=n.__noselect,delete n.__noselect)}const dl=t=>()=>t;function Fd(t,{sourceEvent:e,subject:n,target:i,identifier:r,active:o,x:s,y:a,dx:l,dy:u,dispatch:c}){Object.defineProperties(this,{type:{value:t,enumerable:!0,configurable:!0},sourceEvent:{value:e,enumerable:!0,configurable:!0},subject:{value:n,enumerable:!0,configurable:!0},target:{value:i,enumerable:!0,configurable:!0},identifier:{value:r,enumerable:!0,configurable:!0},active:{value:o,enumerable:!0,configurable:!0},x:{value:s,enumerable:!0,configurable:!0},y:{value:a,enumerable:!0,configurable:!0},dx:{value:l,enumerable:!0,configurable:!0},dy:{value:u,enumerable:!0,configurable:!0},_:{value:c}})}Fd.prototype.on=function(){var t=this._.on.apply(this._,arguments);return t===this._?this:t};function xO(t){return!t.ctrlKey&&!t.button}function bO(){return this.parentNode}function SO(t,e){return e??{x:t.x,y:t.y}}function MO(){return navigator.maxTouchPoints||"ontouchstart"in this}function wO(){var t=xO,e=bO,n=SO,i=MO,r={},o=xy("start","drag","end"),s=0,a,l,u,c,f=0;function d(x){x.on("mousedown.drag",h).filter(i).on("touchstart.drag",m).on("touchmove.drag",p,vO).on("touchend.drag touchcancel.drag",b).style("touch-action","none").style("-webkit-tap-highlight-color","rgba(0,0,0,0)")}function h(x,D){if(!(c||!t.call(this,x,D))){var O=S(this,e.call(this,x,D),x,D,"mouse");O&&(fa(x.view).on("mousemove.drag",g,da).on("mouseup.drag",_,da),_O(x.view),nf(x),u=!1,a=x.clientX,l=x.clientY,O("start",x))}}function g(x){if(Xo(x),!u){var D=x.clientX-a,O=x.clientY-l;u=D*D+O*O>f}r.mouse("drag",x)}function _(x){fa(x.view).on("mousemove.drag mouseup.drag",null),yO(x.view,u),Xo(x),r.mouse("end",x)}function m(x,D){if(t.call(this,x,D)){var O=x.changedTouches,z=e.call(this,x,D),y=O.length,M,N;for(M=0;M<y;++M)(N=S(this,z,x,D,O[M].identifier,O[M]))&&(nf(x),N("start",x,O[M]))}}function p(x){var D=x.changedTouches,O=D.length,z,y;for(z=0;z<O;++z)(y=r[D[z].identifier])&&(Xo(x),y("drag",x,D[z]))}function b(x){var D=x.changedTouches,O=D.length,z,y;for(c&&clearTimeout(c),c=setTimeout(function(){c=null},500),z=0;z<O;++z)(y=r[D[z].identifier])&&(nf(x),y("end",x,D[z]))}function S(x,D,O,z,y,M){var N=o.copy(),C=Eg(M||O,D),P,B,v;if((v=n.call(x,new Fd("beforestart",{sourceEvent:O,target:d,identifier:y,active:s,x:C[0],y:C[1],dx:0,dy:0,dispatch:N}),z))!=null)return P=v.x-C[0]||0,B=v.y-C[1]||0,function A(E,I,V){var W=C,q;switch(E){case"start":r[y]=A,q=s++;break;case"end":delete r[y],--s;case"drag":C=Eg(V||I,D),q=s;break}N.call(E,x,new Fd(E,{sourceEvent:I,subject:v,target:d,identifier:y,active:q,x:C[0]+P,y:C[1]+B,dx:C[0]-W[0],dy:C[1]-W[1],dispatch:N}),z)}}return d.filter=function(x){return arguments.length?(t=typeof x=="function"?x:dl(!!x),d):t},d.container=function(x){return arguments.length?(e=typeof x=="function"?x:dl(x),d):e},d.subject=function(x){return arguments.length?(n=typeof x=="function"?x:dl(x),d):n},d.touchable=function(x){return arguments.length?(i=typeof x=="function"?x:dl(!!x),d):i},d.on=function(){var x=o.on.apply(o,arguments);return x===o?d:x},d.clickDistance=function(x){return arguments.length?(f=(x=+x)*x,d):Math.sqrt(f)},d}var ho=(t=>(t.Line="line",t.Handle="handle",t))(ho||{});function EO({width:t,prevWidth:e,height:n,prevHeight:i,invertX:r,invertY:o}){const s=t-e,a=n-i,l=[s>0?1:s<0?-1:0,a>0?1:a<0?-1:0];return s&&r&&(l[0]=l[0]*-1),a&&o&&(l[1]=l[1]*-1),l}const TO={[ho.Line]:"right",[ho.Handle]:"bottom-right"},AO={[ho.Line]:"borderColor",[ho.Handle]:"backgroundColor"},CO={name:"ResizeControl",compatConfig:{MODE:3}},Ag=Rt({...CO,props:{nodeId:{},color:{},minWidth:{default:10},minHeight:{default:10},maxWidth:{default:Number.MAX_VALUE},maxHeight:{default:Number.MAX_VALUE},position:{},variant:{default:"handle"},shouldResize:{},keepAspectRatio:{type:[Boolean,Number],default:!1},autoScale:{type:Boolean,default:!0},handleClassName:{},handleStyle:{},lineClassName:{},lineStyle:{},isVisible:{type:Boolean}},emits:["resizeStart","resize","resizeEnd"],setup(t,{emit:e}){const n=t,i={width:0,height:0,x:0,y:0},r={...i,pointerX:0,pointerY:0,aspectRatio:1},{findNode:o,emits:s,viewport:a,noDragClassName:l}=It(),u=E_(),c=qe();let f=r,d=i;const h=vt(()=>n.position??TO[n.variant]),g=De(()=>h.value.split("-")),_=vt(()=>n.color?{[AO[n.variant]]:n.color}:{}),m=vt(()=>n.variant===ho.Handle),p=De(()=>m.value&&n.autoScale?`${Math.max(1/a.value.zoom,1)}`:void 0);return u0(b=>{if(!c.value||!n.nodeId)return;const S=fa(c.value),x=h.value.includes("right")||h.value.includes("left"),D=h.value.includes("bottom")||h.value.includes("top"),O=h.value.includes("left"),z=h.value.includes("top"),y=wO().on("start",M=>{const N=o(n.nodeId),{xSnapped:C,ySnapped:P}=u(M);d={width:N?.dimensions.width??0,height:N?.dimensions.height??0,x:N?.position.x??0,y:N?.position.y??0},f={...d,pointerX:C,pointerY:P,aspectRatio:d.width/d.height},e("resizeStart",{event:M,params:d})}).on("drag",M=>{var N;const{xSnapped:C,ySnapped:P}=u(M),B=o(n.nodeId);if(B){const v=[],{pointerX:A,pointerY:E,width:I,height:V,x:W,y:q,aspectRatio:$}=f,{x:K,y:ae,width:ve,height:pe}=d,Z=Math.floor(x?C-A:0),ne=Math.floor(D?P-E:0);let le=tr(I+(O?-Z:Z),n.minWidth,n.maxWidth),xe=tr(V+(z?-ne:ne),n.minHeight,n.maxHeight);if(n.keepAspectRatio){const F=le/xe;let U=$;typeof n.keepAspectRatio=="number"&&F!==n.keepAspectRatio&&(U=n.keepAspectRatio);const G=x&&D,T=x&&!D,te=D&&!x;le=F<=U&&G||te?xe*U:le,xe=F>U&&G||T?le/U:xe,le>=n.maxWidth?(le=n.maxWidth,xe=n.maxWidth/U):le<=n.minWidth&&(le=n.minWidth,xe=n.minWidth/U),xe>=n.maxHeight?(xe=n.maxHeight,le=n.maxHeight*U):xe<=n.minHeight&&(xe=n.minHeight,le=n.minHeight*U)}const be=le!==ve,Ce=xe!==pe;if(O||z){const F=O?W-(le-I):W,U=z?q-(xe-V):q,G=F!==K&&be,T=U!==ae&&Ce;if(G||T){const te={id:B.id,type:"position",from:B.position,position:{x:G?F:K,y:T?U:ae}};v.push(te),d.x=te.position.x,d.y=te.position.y}}if(n.nodeId&&(be||Ce)){const F={id:n.nodeId,type:"dimensions",updateStyle:!0,resizing:!0,dimensions:{width:le,height:xe}};v.push(F),d.width=le,d.height=xe}if(v.length===0)return;const H=EO({width:d.width,prevWidth:ve,height:d.height,prevHeight:pe,invertX:O,invertY:z}),X={...d,direction:H};if(((N=n.shouldResize)==null?void 0:N.call(n,M,X))===!1)return;e("resize",{event:M,params:X}),s.nodesChange(v)}}).on("end",M=>{if(n.nodeId){const N={id:n.nodeId,type:"dimensions",resizing:!1};e("resizeEnd",{event:M,params:d}),s.nodesChange([N])}});S.call(y),b(()=>{S.on(".drag",null)})}),(b,S)=>(ye(),Se("div",{ref_key:"resizeControlRef",ref:c,class:Dt(["vue-flow__resize-control",[...g.value,b.variant,ge(l)]]),style:yt({..._.value,scale:p.value})},[Ln(b.$slots,"default")],6))}}),RO={name:"NodeResizer",compatConfig:{MODE:3},inheritAttrs:!1},IO=Rt({...RO,props:{nodeId:{},color:{},handleClassName:{},handleStyle:{},lineClassName:{},lineStyle:{},isVisible:{type:Boolean,default:!0},minWidth:{},minHeight:{},maxWidth:{},maxHeight:{},shouldResize:{},keepAspectRatio:{type:[Boolean,Number]},autoScale:{type:Boolean,default:!0}},emits:["resizeStart","resize","resizeEnd"],setup(t,{emit:e}){const n=t,{findNode:i,emits:r}=It(),o=["top-left","top-right","bottom-left","bottom-right"],s=["top","right","bottom","left"],a=An(Eh,null),l=vt(()=>typeof n.nodeId=="string"?n.nodeId:a),u=De(()=>i(l.value));return ft([()=>n.minWidth,()=>n.minHeight,()=>n.maxWidth,()=>n.maxHeight,()=>{var c;return!!((c=u.value)!=null&&c.dimensions.width)&&!!u.value.dimensions.height}],([c,f,d,h,g])=>{const _=u.value;if(_&&g){const m={id:_.id,type:"dimensions",updateStyle:!0,dimensions:{width:_.dimensions.width,height:_.dimensions.height}};c&&_.dimensions.width<c&&(m.dimensions.width=c),f&&_.dimensions.height<f&&(m.dimensions.height=f),d&&_.dimensions.width>d&&(m.dimensions.width=d),h&&_.dimensions.height>h&&(m.dimensions.height=h),(m.dimensions.width!==_.dimensions.width||m.dimensions.height!==_.dimensions.height)&&r.nodesChange([m])}},{flush:"post",immediate:!0}),(c,f)=>c.isVisible?(ye(),Se(ut,{key:0},[(ye(),Se(ut,null,dn(s,d=>it(Ag,{key:d,class:Dt(c.lineClassName),style:yt(c.lineStyle),"node-id":l.value,position:d,variant:ge(ho).Line,color:c.color,"min-width":c.minWidth,"min-height":c.minHeight,"max-width":c.maxWidth,"max-height":c.maxHeight,"should-resize":c.shouldResize,"keep-aspect-ratio":c.keepAspectRatio,"auto-scale":c.autoScale,onResizeStart:f[0]||(f[0]=h=>e("resizeStart",h)),onResize:f[1]||(f[1]=h=>e("resize",h)),onResizeEnd:f[2]||(f[2]=h=>e("resizeEnd",h))},null,8,["class","style","node-id","position","variant","color","min-width","min-height","max-width","max-height","should-resize","keep-aspect-ratio","auto-scale"])),64)),(ye(),Se(ut,null,dn(o,d=>it(Ag,{key:d,class:Dt(c.handleClassName),style:yt(c.handleStyle),"node-id":l.value,position:d,color:c.color,"min-width":c.minWidth,"min-height":c.minHeight,"max-width":c.maxWidth,"max-height":c.maxHeight,"should-resize":c.shouldResize,"keep-aspect-ratio":c.keepAspectRatio,"auto-scale":c.autoScale,onResizeStart:f[3]||(f[3]=h=>e("resizeStart",h)),onResize:f[4]||(f[4]=h=>e("resize",h)),onResizeEnd:f[5]||(f[5]=h=>e("resizeEnd",h))},null,8,["class","style","node-id","position","color","min-width","min-height","max-width","max-height","should-resize","keep-aspect-ratio","auto-scale"])),64))],64)):Je("",!0)}});let Ud=0;function PO(){return`node_${++Ud}_${Date.now().toString(36)}`}const Yu=i1("graph",()=>{const t=qe([]),e=qe([]),n=Ar({}),i=qe(null),r=qe(!0),o=qe("panel"),s=qe(null),a=qe("Untitled Project"),l=qe({}),u=qe({}),c=qe({});let f=null;const d=Ar({}),h=De(()=>i.value&&t.value.find($=>$.id===i.value)||null),g=De(()=>h.value?ai(h.value.type):null),_=De(()=>i.value?n[i.value]||{}:{});function m($){f=$}function p($,K={x:200,y:200}){const ae=ai($);if(!ae)return console.warn(`Unknown node type: ${$}`),null;const ve=PO(),pe={};for(const[ne,le]of Object.entries(ae.params))pe[ne]=le.default;n[ve]=pe;const Z={id:ve,type:$,position:K,data:{label:ae.label,category:ae.category,def:ae}};return t.value=[...t.value,Z],ve}function b($){f&&f($),t.value=t.value.filter(K=>K.id!==$),e.value=e.value.filter(K=>K.source!==$&&K.target!==$),delete n[$],delete d[$],i.value===$&&(i.value=null),s.value===$&&(s.value=null)}function S($){const K=t.value.find(xe=>xe.id===$.source),ae=t.value.find(xe=>xe.id===$.target);if(!K||!ae)return!1;const ve=ai(K.type),pe=ai(ae.type);if(!ve||!pe)return!1;const Z=ve.outputs.find(xe=>xe.id===$.sourceHandle);let ne=pe.inputs.find(xe=>xe.id===$.targetHandle);if(!ne){const xe=d[ae.id];if(xe&&xe[$.targetHandle]){const be=pe.params[$.targetHandle];if(be){const Ce=be.type==="int"?me.INT:(be.type==="float",me.FLOAT);ne={id:$.targetHandle,type:Ce}}}}if(!Z||!ne)return!1;if(!EA(Z.type,ne.type))return console.warn(`Type mismatch: ${Z.type} → ${ne.type}`),!1;e.value=e.value.filter(xe=>!(xe.target===$.target&&xe.targetHandle===$.targetHandle));const le={id:`e_${$.source}_${$.sourceHandle}-${$.target}_${$.targetHandle}`,source:$.source,sourceHandle:$.sourceHandle,target:$.target,targetHandle:$.targetHandle};return e.value=[...e.value,le],!0}function x($){e.value=e.value.filter(K=>K.id!==$)}function D($,K,ae){n[$]||(n[$]={}),n[$][K]=ae}function O($,K){d[$]||(d[$]={}),d[$][K]=!d[$][K],d[$][K]||(e.value=e.value.filter(ae=>!(ae.target===$&&ae.targetHandle===K)))}function z($,K){return!!d[$]?.[K]}function y($){const K=t.value.find(pe=>pe.id===$);if(!K)return[];const ae=ai(K.type);if(!ae)return[];const ve=d[$]||{};return Object.entries(ve).filter(([pe,Z])=>Z).map(([pe])=>{const Z=ae.params[pe];if(!Z)return null;const ne=Z.type==="int"?me.INT:(Z.type==="float",me.FLOAT);return{id:pe,label:Z.label,type:ne}}).filter(Boolean)}function M($){i.value=$}function N(){r.value=!r.value}function C(){r.value=!1}function P(){r.value=!0}function B(){o.value=o.value==="panel"?"background":"panel"}function v(){for(const $ of t.value)f&&f($.id);t.value=[],e.value=[],Object.keys(n).forEach($=>delete n[$]),Object.keys(d).forEach($=>delete d[$]),i.value=null,s.value=null,Ud=0}function A(){const $={version:1,title:a.value,timestamp:Date.now(),nodes:t.value.map(K=>({id:K.id,type:K.type,position:K.position})),edges:e.value.map(K=>({id:K.id,source:K.source,sourceHandle:K.sourceHandle,target:K.target,targetHandle:K.targetHandle})),params:{...n},exposedParams:{...d},settings:{previewMode:o.value}};return JSON.stringify($,null,2)}function E($){try{const K=JSON.parse($);K.version!==1&&console.warn("Unknown graph version:",K.version),v(),a.value=K.title||"Untitled Project";for(const ve of K.nodes){const pe=ai(ve.type);if(!pe){console.warn(`Skipping unknown node type: ${ve.type}`);continue}const Z={id:ve.id,type:ve.type,position:ve.position,data:{label:pe.label,category:pe.category,def:pe}};t.value.push(Z);const ne={};for(const[le,xe]of Object.entries(pe.params))ne[le]=K.params?.[ve.id]?.[le]??xe.default;n[ve.id]=ne}if(K.exposedParams)for(const[ve,pe]of Object.entries(K.exposedParams))d[ve]={...pe};for(const ve of K.edges)e.value.push(ve);return K.settings&&(o.value=K.settings.previewMode||"panel"),Ud=K.nodes.reduce((ve,pe)=>{const Z=pe.id.match(/node_(\d+)_/);return Z?Math.max(ve,parseInt(Z[1])):ve},0),!0}catch(K){return console.error("Failed to load graph:",K),!1}}function I(){const $=A(),K=`mangleditor-graph-${a.value||"default"}`;return localStorage.setItem(K,$),!0}async function V($=null){try{const K=$?`mangleditor-graph-${$}`:`mangleditor-graph-${a.value||"default"}`,ae=localStorage.getItem(K);if(ae)return E(ae);if(!$){console.log("No local save found. Loading StarterTemplate by default...");try{const ve=await fetch("./StarterTemplate.json");if(ve.ok){const pe=await ve.text();return E(pe)}}catch(ve){console.error("Failed to auto-load StarterTemplate:",ve)}}return!1}catch(K){return console.error("Failed to load from localStorage:",K),!1}}function W(){const $=A(),K=new Blob([$],{type:"application/json"}),ae=URL.createObjectURL(K),ve=document.createElement("a");ve.href=ae;const pe=(a.value||"mangleditor").replace(/[^a-zA-Z0-9_-]/g,"_");ve.download=`${pe}.json`,ve.click(),URL.revokeObjectURL(ae)}function q($){const K=t.value.find(ae=>ae.id===$);K&&K.type==="button"&&(K._triggered=!0)}return{nodes:t,edges:e,nodeParams:n,selectedNodeId:i,isRendering:r,previewMode:o,previewNodeId:s,projectTitle:a,exposedParams:d,selectedNode:h,selectedNodeDef:g,selectedNodeParams:_,dataOutputs:l,perfTimings:u,previewImages:c,getDataOutput($,K){return l.value[$]?.[K]},addNode:p,removeNode:b,addEdge:S,removeEdge:x,setParam:D,selectNode:M,toggleRendering:N,stopRendering:C,startRendering:P,togglePreviewMode:B,resetGraph:v,saveGraph:A,saveToLocalStorage:I,loadGraph:E,loadFromLocalStorage:V,downloadGraph:W,triggerButton:q,onNodeRemoved:m,toggleExposeParam:O,isParamExposed:z,getExposedHandles:y}}),Uh=(t,e)=>{const n=t.__vccOpts||t;for(const[i,r]of e)n[i]=r;return n},NO={width:"100%",height:"100%",viewBox:"0 0 100 100"},DO=["d"],LO=["x2","y2"],FO={key:0,class:"knob-value"},UO=270,hl=-135,OO={__name:"KnobControl",props:{modelValue:{type:Number,default:0},min:{type:Number,default:0},max:{type:Number,default:1},step:{type:Number,default:.01},size:{type:Number,default:60},showValue:{type:Boolean,default:!0}},emits:["update:modelValue"],setup(t,{emit:e}){const n=t,i=e,r=De(()=>{const p=n.min!==void 0?n.min:0,b=n.max!==void 0?n.max:1;return p===b?0:Math.max(0,Math.min(1,(n.modelValue-p)/(b-p)))}),o=De(()=>hl+r.value*UO);function s(p,b,S,x){const D=(x-90)*Math.PI/180;return{x:p+S*Math.cos(D),y:b+S*Math.sin(D)}}const a=De(()=>{const p=s(50,50,40,hl),b=s(50,50,40,o.value),S=o.value-hl<=180?"0":"1";return["M",p.x,p.y,"A",40,40,0,S,1,b.x,b.y].join(" ")}),l=De(()=>s(50,50,24,o.value).x),u=De(()=>s(50,50,24,o.value).y);let c=0,f=0;function d(p){c=p.clientY,f=n.modelValue,document.addEventListener("mousemove",h),document.addEventListener("mouseup",g)}function h(p){const b=c-p.clientY,S=n.min!==void 0?n.min:0,x=n.max!==void 0?n.max:1;let O=(x-S||1)/150;p.shiftKey&&(O*=.1);let z=f+b*O;z=Math.max(S,Math.min(x,z)),n.step&&(z=Math.round(z/n.step)*n.step);const y=n.step.toString().split(".")[1]?.length||0;z=Number(z.toFixed(y)),i("update:modelValue",z)}function g(){document.removeEventListener("mousemove",h),document.removeEventListener("mouseup",g)}function _(){const p=n.min!==void 0?n.min:0,S=((n.max!==void 0?n.max:1)+p)/2;i("update:modelValue",S)}const m=De(()=>Number(n.modelValue).toFixed(Math.min(3,n.step.toString().split(".")[1]?.length||3)));return(p,b)=>(ye(),Se("div",{class:"knob-control",onMousedown:Qe(d,["stop","prevent"]),onDblclick:Qe(_,["stop"]),style:yt({width:t.size?t.size+"px":"100%",height:t.size?t.size+"px":"100%"})},[(ye(),Se("svg",NO,[b[0]||(b[0]=fe("path",{class:"knob-track",d:"M 21.716 78.284 A 40 40 0 1 1 78.284 78.284",fill:"none",stroke:"rgba(255, 255, 255, 0.1)","stroke-width":"12","stroke-linecap":"round"},null,-1)),o.value>hl?(ye(),Se("path",{key:0,class:"knob-arc",d:a.value,fill:"none",stroke:"var(--accent-primary, #00d4ff)","stroke-width":"12","stroke-linecap":"round"},null,8,DO)):Je("",!0),b[1]||(b[1]=fe("circle",{cx:"50",cy:"50",r:"26",fill:"var(--bg-light, #333)",stroke:"var(--border-color, #444)","stroke-width":"2"},null,-1)),fe("line",{x1:50,y1:50,x2:l.value,y2:u.value,stroke:"var(--text-color, #fff)","stroke-width":"4","stroke-linecap":"round"},null,8,LO)])),t.showValue?(ye(),Se("div",FO,Ze(m.value),1)):Je("",!0)],36))}},BO=Uh(OO,[["__scopeId","data-v-ab9f1301"]]),kO=["title"],zO={key:0,class:"flow-node__collapsed-badge flow-node__collapsed-badge--in"},VO={class:"flow-node__title"},HO={key:1,class:"flow-node__collapsed-badge flow-node__collapsed-badge--out"},$O=["title"],GO=["title"],WO=["title"],XO=["title"],YO={class:"flow-node__body"},qO={class:"flow-node__handles"},KO={class:"flow-node__handle-label"},ZO={class:"flow-node__handle-type"},jO=["title"],JO={class:"flow-node__handle-label flow-node__handle-label--exposed"},QO={class:"flow-node__handle-type"},eB={key:1,class:"flow-node__image-preview-container"},tB=["src"],nB={key:1,class:"flow-node__slot-label",style:{"text-align":"center",color:"var(--accent-success)",padding:"8px 0","font-size":"11px"}},iB={key:1,class:"flow-node__image-preview-container"},rB=["min","max","step","value"],oB={class:"flow-node__slider-value"},sB={class:"flow-node__inline-param-row"},aB=["value"],lB=["value"],uB={class:"flow-node__inline-param-row"},cB=["value"],fB={class:"flow-node__inline-param-val"},dB={class:"flow-node__inline-param-row"},hB=["value"],pB={class:"flow-node__inline-param-val"},mB={key:8,class:"flow-node__monitor"},gB=["title"],vB={key:9,class:"flow-node__preview-inline"},_B={class:"flow-node__handles"},yB={class:"flow-node__handle-type"},xB={class:"flow-node__handle-label"},bB=["title"],Cg=100,SB={__name:"FlowNode",props:{nodeId:{type:String,required:!0},nodeType:{type:String,required:!0},def:{type:Object,required:!0},params:{type:Object,default:()=>({})},selected:{type:Boolean,default:!1},inputValues:{type:Object,default:()=>({})},outputValues:{type:Object,default:()=>({})},monitorValue:{type:Number,default:null},exposedHandles:{type:Array,default:()=>[]},perfMs:{type:Number,default:null}},emits:["select","imageLoaded","export","trigger","paramChange"],setup(t,{emit:e}){const n=t,i=e,r=Yu(),o=De(()=>{const B=r.edges.filter(v=>v.target===n.nodeId);return[...new Set(B.map(v=>v.targetHandle))]}),s=De(()=>{const B=r.edges.filter(v=>v.source===n.nodeId);return[...new Set(B.map(v=>v.sourceHandle))]}),a=De(()=>{if(!n.params._collapsed)return"";let B=`INPUTS
`;if(o.value.length===0)B+=`  (none)
`;else for(const v of o.value){const A=n.def.inputs.find(V=>V.id===v),E=A?A.label:v,I=n.inputValues[v];B+=`• ${E}: ${I!==void 0?C(I):"—"}
`}if(B+=`
OUTPUTS
`,s.value.length===0)B+=`  (none)
`;else for(const v of s.value){const A=n.def.outputs.find(V=>V.id===v),E=A?A.label:v,I=n.outputValues[v];B+=`• ${E}: ${I!==void 0?C(I):"—"}
`}return B}),l=De(()=>ql[n.def.category]?.color||"#888"),u=De(()=>n.def.params?Object.values(n.def.params).some(B=>B.type==="float"||B.type==="int"):!1);function c(){if(n.def.params){for(const[B,v]of Object.entries(n.def.params))if(v.type==="float"||v.type==="int"){const A=B==="value"&&n.params.min!==void 0?n.params.min:v.min!==void 0?v.min:0,E=B==="value"&&n.params.max!==void 0?n.params.max:v.max!==void 0?v.max:1,I=n.params[`_randMin_${B}`]??A,V=n.params[`_randMax_${B}`]??E;let W=I+Math.random()*(V-I);v.type==="int"?W=Math.floor(W):v.step&&(W=Math.round(W/v.step)*v.step),i("paramChange",B,W)}}}const f=qe(null),d=qe(!1),h=qe(null),g=De(()=>!!h.value);On(()=>{if((n.nodeType==="imageInput"||n.nodeType==="uiImageSlot")&&!h.value){const B="/default_img.jpg";h.value=B;const v=new Image;v.crossOrigin="anonymous",v.src=B,v.onload=()=>{i("imageLoaded",{url:B,width:v.naturalWidth,height:v.naturalHeight,img:v})}}});const _=qe(null),m=qe([]),p=qe(null);ft(()=>r.previewImages[n.nodeId],B=>{if(n.nodeType!=="preview"||!B||!p.value)return;const v=p.value,A=v.getContext("2d");(v.width!==B.width||v.height!==B.height)&&(v.width=B.width,v.height=B.height);const E=document.createElement("canvas");E.width=B.width,E.height=B.height;const I=E.getContext("2d"),V=new ImageData(new Uint8ClampedArray(B.pixels.buffer),B.width,B.height);I.putImageData(V,0,0),A.save(),A.scale(1,-1),A.drawImage(E,0,-B.height),A.restore()});const b=qe(!1),S=qe(null);let x=null;async function D(){try{x=await navigator.mediaDevices.getUserMedia({video:{width:1280,height:720},audio:!1}),b.value=!0,setTimeout(()=>{S.value&&(S.value.srcObject=x,S.value.onloadedmetadata=()=>{S.value.play(),i("imageLoaded",{url:"webcam",width:S.value.videoWidth,height:S.value.videoHeight,img:S.value,isVideo:!0})})},50)}catch(B){console.error("Failed to access webcam:",B),alert("Could not access webcam. Please check permissions.")}}function O(){x&&(x.getTracks().forEach(B=>B.stop()),x=null),b.value=!1,i("imageLoaded",{url:"webcam",width:1,height:1,img:null,isVideo:!1})}ss(()=>{O()});function z(){f.value?.click()}function y(B){const v=B.target.files?.[0];v&&N(v)}function M(B){d.value=!1;const v=B.dataTransfer.files?.[0];v&&v.type.startsWith("image/")&&N(v)}function N(B){const v=URL.createObjectURL(B);h.value=v;const A=new Image;A.onload=()=>{i("imageLoaded",{url:v,width:A.naturalWidth,height:A.naturalHeight,img:A})},A.src=v}function C(B){return B==null?"":typeof B=="number"?B.toFixed(2):String(B)}ft(()=>n.monitorValue,B=>{B!=null&&(m.value.push(B),m.value.length>Cg&&m.value.shift(),P())});function P(){const B=_.value;if(!B)return;const v=B.getContext("2d"),A=B.width,E=B.height,I=m.value;if(v.clearRect(0,0,A,E),I.length<2)return;const V=Math.min(...I),W=Math.max(...I),q=W-V||1;v.strokeStyle="#00d4ff",v.lineWidth=1.5,v.beginPath();for(let $=0;$<I.length;$++){const K=$/(Cg-1)*A,ae=E-(I[$]-V)/q*(E-4)-2;$===0?v.moveTo(K,ae):v.lineTo(K,ae)}if(v.stroke(),V<=0&&W>=0){const $=E-(0-V)/q*(E-4)-2;v.strokeStyle="#ffffff30",v.lineWidth=.5,v.beginPath(),v.moveTo(0,$),v.lineTo(A,$),v.stroke()}}return(B,v)=>(ye(),Se("div",{class:Dt(["flow-node",{"flow-node--selected":t.selected},{"flow-node--compact":t.def.compact},{"flow-node--bypassed":t.params._bypass},{"flow-node--collapsed":t.params._collapsed},{"flow-node--resizable":!t.params._collapsed&&["preview","knob","imageInput","webcamInput"].includes(t.nodeType)&&t.params._resizable}]),onClick:v[36]||(v[36]=A=>B.$emit("select")),onDblclick:v[37]||(v[37]=Qe(A=>B.$emit("paramChange","_collapsed",!t.params._collapsed),["stop"]))},[["preview","knob","imageInput","webcamInput"].includes(t.nodeType)&&t.params._resizable?(ye(),mn(ge(IO),{key:0,"min-width":60,"min-height":60,"max-width":540,"max-height":540,"keep-aspect-ratio":!0,"is-visible":t.selected,class:"nodrag"},null,8,["is-visible"])):Je("",!0),fe("div",{class:"flow-node__header",title:a.value},[t.params._collapsed&&o.value.length>0?(ye(),Se("span",zO," ["+Ze(o.value.length)+"] ",1)):Je("",!0),fe("div",{class:"flow-node__category-dot",style:yt({background:l.value})},null,4),fe("div",VO,Ze(t.def.label),1),t.params._collapsed&&s.value.length>0?(ye(),Se("span",HO," ["+Ze(s.value.length)+"] ",1)):Je("",!0),u.value?(ye(),Se("button",{key:2,class:"flow-node__bypass-btn",style:{"margin-right":"4px"},onClick:Qe(c,["stop"]),title:"Randomize Parameters"}," 🎲 ")):Je("",!0),fe("button",{class:Dt(["flow-node__bypass-btn",{"flow-node__bypass-btn--active":t.params._collapsed}]),style:{"margin-right":"4px"},onClick:v[0]||(v[0]=Qe(A=>B.$emit("paramChange","_collapsed",!t.params._collapsed),["stop"])),title:t.params._collapsed?"Expand Node":"Collapse Node"},Ze(t.params._collapsed?"▼":"▬"),11,$O),!t.params._collapsed&&["preview","knob","imageInput","webcamInput"].includes(t.nodeType)?(ye(),Se("button",{key:3,class:Dt(["flow-node__bypass-btn",{"flow-node__bypass-btn--active":t.params._resizable}]),style:{"margin-right":"4px"},onClick:v[1]||(v[1]=Qe(A=>B.$emit("paramChange","_resizable",!t.params._resizable),["stop"])),title:t.params._resizable?"Disable Resizing":"Enable Resizing"}," ⤢ ",10,GO)):Je("",!0),t.def.shaderKey||t.def.category==="image"||t.def.category==="uv"?(ye(),Se("button",{key:4,class:Dt(["flow-node__bypass-btn",{"flow-node__bypass-btn--active":t.params._bypass}]),onClick:v[2]||(v[2]=Qe(A=>B.$emit("paramChange","_bypass",!t.params._bypass),["stop"])),title:t.params._bypass?"Enable (bypassed)":"Bypass"},Ze(t.params._bypass?"⊘":"⏵"),11,WO)):Je("",!0),t.perfMs!==null?(ye(),Se("span",{key:5,class:"flow-node__perf-badge",title:t.perfMs+"ms"},Ze(t.perfMs<1?"<1":t.perfMs.toFixed(1))+"ms ",9,XO)):Je("",!0)],8,kO),fe("div",YO,[fe("div",qO,[(ye(!0),Se(ut,null,dn(t.def.inputs,A=>(ye(),Se("div",{key:"in-"+A.id,class:"flow-node__handle-row flow-node__handle-row--input"},[it(ge(so),{type:"target",id:A.id,position:ge(He).Left,style:yt({background:ge(Vc)(A.type)})},null,8,["id","position","style"]),fe("span",KO,Ze(A.label),1),fe("span",ZO,Ze(A.type),1),t.inputValues[A.id]!==void 0?(ye(),Se("span",{key:0,class:"flow-node__handle-value",title:"Value: "+t.inputValues[A.id]},Ze(C(t.inputValues[A.id])),9,jO)):Je("",!0)]))),128)),(ye(!0),Se(ut,null,dn(t.exposedHandles,A=>(ye(),Se("div",{key:"exp-"+A.id,class:"flow-node__handle-row flow-node__handle-row--input flow-node__handle-row--exposed"},[it(ge(so),{type:"target",id:A.id,position:ge(He).Left,style:yt({background:ge(Vc)(A.type)})},null,8,["id","position","style"]),fe("span",JO,"⊕ "+Ze(A.label),1),fe("span",QO,Ze(A.type),1)]))),128))]),t.params._collapsed?Je("",!0):(ye(),Se(ut,{key:0},[t.nodeType==="imageInput"||t.nodeType==="uiImageSlot"?(ye(),Se("div",{key:0,class:"flow-node__controls",onPointerdown:v[5]||(v[5]=Qe(()=>{},["stop"])),onMousedown:v[6]||(v[6]=Qe(()=>{},["stop"]))},[fe("input",{ref_key:"fileInput",ref:f,type:"file",accept:"image/*",class:"file-input-hidden",onChange:y},null,544),g.value?(ye(),Se("div",eB,[fe("button",{class:"flow-node__inline-btn flow-node__inline-btn--sm",onClick:Qe(z,["stop"]),style:{"margin-bottom":"4px",width:"100%"}}," 📷 Replace Image "),t.nodeType==="imageInput"?(ye(),Se("img",{key:0,src:h.value,class:"flow-node__image-preview"},null,8,tB)):(ye(),Se("div",nB," Image Loaded ✓ "))])):(ye(),Se("div",{key:0,class:Dt(["flow-node__drop-zone",{"flow-node__drop-zone--active":d.value}]),onClick:Qe(z,["stop"]),onDragover:v[3]||(v[3]=Qe(A=>d.value=!0,["prevent"])),onDragleave:v[4]||(v[4]=A=>d.value=!1),onDrop:Qe(M,["prevent"])}," 📷 Drop image or click to browse ",34))],32)):Je("",!0),t.nodeType==="webcamInput"?(ye(),Se("div",{key:1,class:"flow-node__controls",onPointerdown:v[7]||(v[7]=Qe(()=>{},["stop"])),onMousedown:v[8]||(v[8]=Qe(()=>{},["stop"]))},[b.value?(ye(),Se("div",iB,[fe("button",{class:"flow-node__inline-btn flow-node__inline-btn--sm",onClick:Qe(O,["stop"]),style:{"margin-bottom":"4px",width:"100%",background:"var(--bg-red-dim)","border-color":"var(--accent-danger)"}}," Stop Webcam "),fe("video",{ref_key:"webcamVideo",ref:S,class:"flow-node__image-preview",autoplay:"",playsinline:"",muted:""},null,512)])):(ye(),Se("div",{key:0,class:"flow-node__drop-zone",onClick:Qe(D,["stop"])}," 🎥 Start Webcam "))],32)):Je("",!0),t.nodeType==="imageOutput"?(ye(),Se("div",{key:2,class:"flow-node__controls",onPointerdown:v[10]||(v[10]=Qe(()=>{},["stop"])),onMousedown:v[11]||(v[11]=Qe(()=>{},["stop"]))},[fe("button",{class:"flow-node__inline-btn",onClick:v[9]||(v[9]=Qe(A=>B.$emit("export"),["stop"]))}," ⬇ Export "+Ze(t.params.format||"PNG"),1)],32)):Je("",!0),t.nodeType==="button"?(ye(),Se("div",{key:3,class:"flow-node__controls",onPointerdown:v[13]||(v[13]=Qe(()=>{},["stop"])),onMousedown:v[14]||(v[14]=Qe(()=>{},["stop"]))},[fe("button",{class:"flow-node__inline-btn",onClick:v[12]||(v[12]=Qe(A=>B.$emit("trigger"),["stop"]))},Ze(t.params.label||"Press"),1)],32)):Je("",!0),t.nodeType==="slider"?(ye(),Se("div",{key:4,class:"flow-node__slider-container",onPointerdown:v[18]||(v[18]=Qe(()=>{},["stop"])),onMousedown:v[19]||(v[19]=Qe(()=>{},["stop"]))},[fe("input",{type:"range",class:"flow-node__inline-slider",min:t.params.min??0,max:t.params.max??1,step:t.params.step??.01,value:t.params.value??.5,onInput:v[15]||(v[15]=Qe(A=>B.$emit("paramChange","value",Number(A.target.value)),["stop"])),onPointerdown:v[16]||(v[16]=Qe(()=>{},["stop"])),onMousedown:v[17]||(v[17]=Qe(()=>{},["stop"]))},null,40,rB),fe("div",oB,Ze((t.params.value??.5).toFixed(3)),1)],32)):Je("",!0),t.nodeType==="knob"?(ye(),Se("div",{key:5,class:"flow-node__knob-container",onPointerdown:v[21]||(v[21]=Qe(()=>{},["stop"])),onMousedown:v[22]||(v[22]=Qe(()=>{},["stop"]))},[it(BO,{modelValue:t.params.value??(t.def.params.value?t.def.params.value.default:.5),min:t.params.min??(t.def.params.min?t.def.params.min.default:0),max:t.params.max??(t.def.params.max?t.def.params.max.default:1),step:t.params.step??(t.def.params.step?t.def.params.step.default:.01),size:null,"onUpdate:modelValue":v[20]||(v[20]=A=>B.$emit("paramChange","value",A))},null,8,["modelValue","min","max","step"])],32)):Je("",!0),t.nodeType==="lfo"?(ye(),Se("div",{key:6,class:"flow-node__inline-params",onPointerdown:v[32]||(v[32]=Qe(()=>{},["stop"])),onMousedown:v[33]||(v[33]=Qe(()=>{},["stop"]))},[fe("div",sB,[v[38]||(v[38]=fe("span",{class:"flow-node__inline-param-label"},"wave",-1)),fe("select",{class:"flow-node__inline-select",value:t.params.waveform??"sine",onChange:v[23]||(v[23]=Qe(A=>B.$emit("paramChange","waveform",A.target.value),["stop"])),onPointerdown:v[24]||(v[24]=Qe(()=>{},["stop"])),onMousedown:v[25]||(v[25]=Qe(()=>{},["stop"]))},[(ye(),Se(ut,null,dn(["sine","saw","square","triangle"],A=>fe("option",{key:A,value:A},Ze(A),9,lB)),64))],40,aB)]),fe("div",uB,[v[39]||(v[39]=fe("span",{class:"flow-node__inline-param-label"},"freq",-1)),fe("input",{type:"range",class:"flow-node__inline-slider-sm",min:"0.01",max:"20",step:"0.01",value:t.params.frequency??1,onInput:v[26]||(v[26]=Qe(A=>B.$emit("paramChange","frequency",Number(A.target.value)),["stop"])),onPointerdown:v[27]||(v[27]=Qe(()=>{},["stop"])),onMousedown:v[28]||(v[28]=Qe(()=>{},["stop"]))},null,40,cB),fe("span",fB,Ze((t.params.frequency??1).toFixed(2)),1)]),fe("div",dB,[v[40]||(v[40]=fe("span",{class:"flow-node__inline-param-label"},"amp",-1)),fe("input",{type:"range",class:"flow-node__inline-slider-sm",min:"0",max:"10",step:"0.01",value:t.params.amplitude??1,onInput:v[29]||(v[29]=Qe(A=>B.$emit("paramChange","amplitude",Number(A.target.value)),["stop"])),onPointerdown:v[30]||(v[30]=Qe(()=>{},["stop"])),onMousedown:v[31]||(v[31]=Qe(()=>{},["stop"]))},null,40,hB),fe("span",pB,Ze((t.params.amplitude??1).toFixed(2)),1)])],32)):Je("",!0),t.nodeType==="fft"?(ye(),Se("div",{key:7,class:"flow-node__fft-container",onPointerdown:v[34]||(v[34]=Qe(()=>{},["stop"])),onMousedown:v[35]||(v[35]=Qe(()=>{},["stop"]))},[fe("div",{class:"flow-node__fft-bar flow-node__fft-bar--bass",style:yt({height:Math.max(2,(t.outputValues.bass||0)*40)+"px"})},null,4),fe("div",{class:"flow-node__fft-bar flow-node__fft-bar--low-mid",style:yt({height:Math.max(2,(t.outputValues.lowMid||0)*40)+"px"})},null,4),fe("div",{class:"flow-node__fft-bar flow-node__fft-bar--mid",style:yt({height:Math.max(2,(t.outputValues.mid||0)*40)+"px"})},null,4),fe("div",{class:"flow-node__fft-bar flow-node__fft-bar--high",style:yt({height:Math.max(2,(t.outputValues.high||0)*40)+"px"})},null,4)],32)):Je("",!0),t.nodeType==="numberMonitor"?(ye(),Se("div",mB,[fe("div",{class:"flow-node__monitor-value",title:"Value: "+(t.monitorValue??0)},Ze(t.monitorValue!==null&&t.monitorValue!==void 0?t.monitorValue.toFixed(t.params.decimals??3):"—"),9,gB),t.params.showGraph!==!1?(ye(),Se("canvas",{key:0,ref_key:"monitorCanvas",ref:_,class:"flow-node__monitor-graph",width:"176",height:"40"},null,512)):Je("",!0)])):Je("",!0),t.nodeType==="preview"?(ye(),Se("div",vB,[fe("canvas",{ref_key:"previewCanvas",ref:p,class:"flow-node__preview-canvas",width:"176",height:"100"},null,512),v[41]||(v[41]=fe("div",{class:"flow-node__preview-label"},"Preview Node",-1))])):Je("",!0)],64)),fe("div",_B,[(ye(!0),Se(ut,null,dn(t.def.outputs,A=>(ye(),Se("div",{key:"out-"+A.id,class:"flow-node__handle-row flow-node__handle-row--output"},[fe("span",yB,Ze(A.type),1),fe("span",xB,Ze(A.label),1),t.outputValues[A.id]!==void 0?(ye(),Se("span",{key:0,class:"flow-node__handle-value",title:"Value: "+t.outputValues[A.id]},Ze(C(t.outputValues[A.id])),9,bB)):Je("",!0),it(ge(so),{type:"source",id:A.id,position:ge(He).Right,style:yt({background:ge(Vc)(A.type)})},null,8,["id","position","style"])]))),128))])])],34))}},$r=Uh(SB,[["__scopeId","data-v-a5c15acd"]]),MB={class:"editor-controls"},wB={__name:"EditorCanvas",emits:["imageLoaded","exportImage"],setup(t,{expose:e,emit:n}){const i=Yu(),{viewport:r,dimensions:o,project:s,zoomIn:a,zoomOut:l,setViewport:u,fitView:c}=It();function f(){const{x:y,y:M}=r.value;u({x:y,y:M,zoom:1},{duration:600})}function d(){c({padding:.1,duration:600})}function h(y){["INPUT","TEXTAREA"].includes(y.target.tagName)||(y.key==="f"||y.key==="F")&&(i.selectedNodeId?c({nodes:[i.selectedNodeId],padding:.2,duration:600}):c({padding:.1,duration:600}))}On(()=>{window.addEventListener("keydown",h)}),wu(()=>{window.removeEventListener("keydown",h)});function g(y){const{x:M,y:N,zoom:C}=r.value,{width:P,height:B}=o.value,v=P||800,A=B||600,E=(v/2-M)/C,I=(A/2-N)/C;i.addNode(y,{x:E+(Math.random()-.5)*60,y:I+(Math.random()-.5)*60})}e({addNodeAtCenter:g});const _=["imageInput","uiImageSlot","webcamInput","imageOutput","button","slider"],m=De(()=>Object.keys(TA()).filter(y=>!_.includes(y)));function p(y){for(const M of y)if(M.type==="position"&&M.position){const N=i.nodes.find(C=>C.id===M.id);N&&(N.position=M.position)}else M.type==="remove"&&i.removeNode(M.id)}function b(y){for(const M of y)M.type==="remove"&&i.removeEdge(M.id)}function S(y){i.addEdge(y)}function x({node:y}){i.selectNode(y.id)}function D(){i.selectNode(null)}function O({edge:y}){}function z(y){const M=y.dataTransfer.getData("application/node-type");if(!M)return;const N=y.currentTarget.getBoundingClientRect(),{x:C,y:P,zoom:B}=r.value,v=(y.clientX-N.left-C)/B,A=(y.clientY-N.top-P)/B;i.addNode(M,{x:v,y:A})}return(y,M)=>(ye(),Se("div",{class:"editor-canvas",onDrop:Qe(z,["prevent"]),onDragover:M[2]||(M[2]=Qe(()=>{},["prevent"]))},[it(ge(kP),{nodes:ge(i).nodes,edges:ge(i).edges,"default-viewport":{zoom:1,x:0,y:0},"min-zoom":.2,"max-zoom":3,"fit-view-on-init":"",onNodesChange:p,onEdgesChange:b,onConnect:S,onNodeClick:x,onPaneClick:D,onEdgeClick:O},Bx({"node-imageInput":En(N=>[it($r,{"node-id":N.id,"node-type":N.type,def:N.data.def,params:ge(i).nodeParams[N.id]||{},selected:ge(i).selectedNodeId===N.id,onSelect:C=>ge(i).selectNode(N.id),onImageLoaded:C=>y.$emit("imageLoaded",N.id,C)},null,8,["node-id","node-type","def","params","selected","onSelect","onImageLoaded"])]),"node-uiImageSlot":En(N=>[it($r,{"node-id":N.id,"node-type":N.type,def:N.data.def,params:ge(i).nodeParams[N.id]||{},selected:ge(i).selectedNodeId===N.id,onSelect:C=>ge(i).selectNode(N.id),onImageLoaded:C=>y.$emit("imageLoaded",N.id,C)},null,8,["node-id","node-type","def","params","selected","onSelect","onImageLoaded"])]),"node-webcamInput":En(N=>[it($r,{"node-id":N.id,"node-type":N.type,def:N.data.def,params:ge(i).nodeParams[N.id]||{},selected:ge(i).selectedNodeId===N.id,onSelect:C=>ge(i).selectNode(N.id),onImageLoaded:C=>y.$emit("imageLoaded",N.id,C)},null,8,["node-id","node-type","def","params","selected","onSelect","onImageLoaded"])]),"node-imageOutput":En(N=>[it($r,{"node-type":N.type,def:N.data.def,params:ge(i).nodeParams[N.id]||{},selected:ge(i).selectedNodeId===N.id,onSelect:C=>ge(i).selectNode(N.id),onExport:C=>y.$emit("exportImage",N.id)},null,8,["node-type","def","params","selected","onSelect","onExport"])]),"node-button":En(N=>[it($r,{"node-type":N.type,def:N.data.def,params:ge(i).nodeParams[N.id]||{},selected:ge(i).selectedNodeId===N.id,onSelect:C=>ge(i).selectNode(N.id),onTrigger:C=>ge(i).triggerButton(N.id)},null,8,["node-type","def","params","selected","onSelect","onTrigger"])]),"node-slider":En(N=>[it($r,{"node-type":N.type,def:N.data.def,params:ge(i).nodeParams[N.id]||{},selected:ge(i).selectedNodeId===N.id,onSelect:C=>ge(i).selectNode(N.id),onParamChange:(C,P)=>ge(i).setParam(N.id,C,P)},null,8,["node-type","def","params","selected","onSelect","onParamChange"])]),default:En(()=>[it(ge(qP),{variant:ge(di).Dots,gap:16,size:2,"pattern-color":"#333"},null,8,["variant"]),fe("div",MB,[fe("button",{onClick:M[0]||(M[0]=N=>ge(a)({duration:300})),title:"Zoom In (+)"},"+"),fe("button",{onClick:M[1]||(M[1]=N=>ge(l)({duration:300})),title:"Zoom Out (-)"},"−"),fe("button",{onClick:f,title:"Zoom to 100% (1:1)"},"1:1"),fe("button",{onClick:d,title:"Fit View to All"},"[ ]")]),it(ge(IF),{pannable:"",zoomable:"",position:"bottom-right"})]),_:2},[dn(m.value,N=>({name:`node-${N}`,fn:En(C=>[it($r,{"node-id":C.id,"node-type":C.type,def:C.data.def,params:ge(i).nodeParams[C.id]||{},selected:ge(i).selectedNodeId===C.id,"exposed-handles":ge(i).getExposedHandles(C.id),"monitor-value":C.type==="numberMonitor"?ge(i).getDataOutput(C.id,"out"):null,"perf-ms":ge(i).perfTimings[C.id]??null,onSelect:P=>ge(i).selectNode(C.id),onParamChange:(P,B)=>ge(i).setParam(C.id,P,B)},null,8,["node-id","node-type","def","params","selected","exposed-handles","monitor-value","perf-ms","onSelect","onParamChange"])])}))]),1032,["nodes","edges"])],32))}},EB=Uh(wB,[["__scopeId","data-v-e8f17822"]]),TB={class:"preview-panel__toolbar"},AB={class:"preview-panel__zoom-level"},CB={class:"preview-panel__overlay"},RB={class:"preview-panel__badge"},IB={key:0,class:"preview-panel__badge",style:{color:"var(--accent-primary)"}},PB={key:1,class:"preview-panel__badge",style:{color:"var(--accent-danger)"}},NB={key:0,class:"preview-panel__histogram"},DB={class:"preview-panel__info-row"},LB={key:0},FB={__name:"PreviewPanel",props:{hidden:{type:Boolean,default:!1},isRendering:{type:Boolean,default:!0},pipeline:{type:Object,default:null},fps:{type:Number,default:0}},setup(t,{expose:e}){const n=qe(null),i=qe(null),r=qe(null),o=qe(512),s=qe(512),a=qe(1),l=qe(0),u=qe(0),c=qe(!1),f=qe({x:0,y:0}),d=qe(!1);let h=null;function g(){return n.value}e({canvasRef:n,width:o,height:s,getCanvas:g}),ft(d,M=>{M?(z(),h=setInterval(z,500)):(h&&clearInterval(h),h=null)}),ss(()=>{h&&clearInterval(h)});function _(){a.value=Math.min(a.value*1.25,10)}function m(){a.value=Math.max(a.value/1.25,.1)}function p(){a.value=1,l.value=0,u.value=0}function b(){if(!r.value)return;const M=r.value.clientWidth,N=r.value.clientHeight,C=M/o.value,P=N/s.value;a.value=Math.min(C,P,1)*.95,l.value=(M-o.value*a.value)/2,u.value=(N-s.value*a.value)/2}function S(M){const N=M.deltaY>0?.9:1.1,C=Math.max(.1,Math.min(10,a.value*N)),P=r.value.getBoundingClientRect(),B=M.clientX-P.left,v=M.clientY-P.top;l.value=B-(B-l.value)*(C/a.value),u.value=v-(v-u.value)*(C/a.value),a.value=C}function x(M){(M.button===0||M.button===1)&&(c.value=!0,f.value={x:M.clientX,y:M.clientY},r.value?.setPointerCapture(M.pointerId))}function D(M){if(!c.value)return;const N=M.clientX-f.value.x,C=M.clientY-f.value.y;l.value+=N,u.value+=C,f.value={x:M.clientX,y:M.clientY}}function O(M){c.value=!1,r.value?.releasePointerCapture(M.pointerId)}function z(){if(!d.value||!i.value)return;const M=n.value;if(!M)return;const N=M.getContext("webgl2",{preserveDrawingBuffer:!0})||M.getContext("webgl",{preserveDrawingBuffer:!0});if(!N)return;const C=M.width,P=M.height;if(C===0||P===0)return;const B=new Uint8Array(C*P*4);N.readPixels(0,0,C,P,N.RGBA,N.UNSIGNED_BYTE,B);const v=new Uint32Array(256),A=new Uint32Array(256),E=new Uint32Array(256);for(let $=0;$<B.length;$+=4)v[B[$]]++,A[B[$+1]]++,E[B[$+2]]++;const I=i.value.getContext("2d"),V=256,W=80;I.clearRect(0,0,V,W);const q=Math.max(...v.slice(1,255),...A.slice(1,255),...E.slice(1,255),1);y(I,v,q,V,W,"rgba(255,80,80,0.5)"),y(I,A,q,V,W,"rgba(80,255,80,0.5)"),y(I,E,q,V,W,"rgba(80,80,255,0.5)")}function y(M,N,C,P,B,v){M.fillStyle=v,M.beginPath(),M.moveTo(0,B);for(let A=0;A<256;A++){const E=N[A]/C*(B-2);M.lineTo(A,B-E)}M.lineTo(255,B),M.closePath(),M.fill()}return(M,N)=>(ye(),Se("div",{class:Dt(["preview-panel",{hidden:t.hidden}])},[fe("div",TB,[fe("button",{class:"preview-panel__tool-btn",onClick:_,title:"Zoom In"},"+"),fe("button",{class:"preview-panel__tool-btn",onClick:m,title:"Zoom Out"},"−"),fe("button",{class:"preview-panel__tool-btn",onClick:b,title:"Fit"},"⊡"),fe("button",{class:"preview-panel__tool-btn",onClick:p,title:"Reset Zoom"},"1:1"),fe("span",AB,Ze(Math.round(a.value*100))+"%",1),fe("button",{class:Dt(["preview-panel__tool-btn",{active:d.value}]),onClick:N[0]||(N[0]=C=>d.value=!d.value),title:"Toggle Histogram"},"📊",2)]),fe("div",{class:"preview-panel__viewport",ref_key:"viewportRef",ref:r,onWheel:Qe(S,["prevent"]),onPointerdown:x,onPointermove:D,onPointerup:O},[fe("div",{class:"preview-panel__canvas-wrap",style:yt({transform:`translate(${l.value}px, ${u.value}px) scale(${a.value})`,transformOrigin:"0 0"})},[fe("canvas",{ref_key:"canvasRef",ref:n,class:"preview-panel__canvas"},null,512)],4)],544),fe("div",CB,[fe("span",RB,Ze(o.value)+"×"+Ze(s.value),1),t.fps&&t.isRendering?(ye(),Se("span",IB,Ze(t.fps)+" FPS ",1)):Je("",!0),t.isRendering?Je("",!0):(ye(),Se("span",PB," STOPPED "))]),d.value?(ye(),Se("div",NB,[fe("canvas",{ref_key:"histCanvas",ref:i,class:"preview-panel__hist-canvas",width:"256",height:"80"},null,512),fe("div",DB,[fe("span",null,"Resolution: "+Ze(o.value)+"×"+Ze(s.value),1),t.fps?(ye(),Se("span",LB,Ze(t.fps)+" FPS",1)):Je("",!0)])])):Je("",!0)],2))}},UB={class:"param-panel"},OB={class:"param-panel__header"},BB={class:"param-panel__title"},kB={class:"param-panel__type"},zB={key:0,class:"param-panel__section"},VB={class:"param-field__header"},HB={class:"param-field__label"},$B={style:{display:"flex",gap:"4px"}},GB=["onClick"],WB=["onClick","title"],XB=["min","max","step","value","onInput"],YB={class:"param-field__range-info"},qB=["step","value","onChange"],KB={class:"param-field__random-bounds-card"},ZB={class:"param-field__random-bounds-inputs"},jB={style:{display:"flex","flex-direction":"column",gap:"2px"}},JB=["step","value","onChange"],QB={style:{display:"flex","flex-direction":"column",gap:"2px"}},ek=["step","value","onChange"],tk=["value","onChange"],nk=["value"],ik={key:2,class:"param-field__checkbox"},rk=["checked","onChange"],ok=["value","onInput"],sk={class:"param-panel__section"},ak={class:"param-field"},lk={class:"mono",style:{"font-size":"10px",color:"var(--text-muted)"}},uk={class:"param-field"},ck={style:{"font-size":"11px"}},fk={class:"param-field"},dk={style:{"font-size":"11px"}},hk={class:"param-field"},pk={style:{"font-size":"11px"}},mk={key:1,class:"param-panel__empty"},gk={__name:"ParameterPanel",setup(t){const e=Yu(),n=qe({}),i=De(()=>e.selectedNodeDef||{label:"",type:"",params:{},inputs:[],outputs:[],category:""}),r=De(()=>e.selectedNodeParams),o=De(()=>ql[i.value.category]?.color||"#888");function s(l,u){e.selectedNodeId&&e.setParam(e.selectedNodeId,l,u)}function a(l,u){return u==="int"?Math.round(l).toString():typeof l=="number"?l.toFixed(3):String(l)}return(l,u)=>(ye(),Se("div",UB,[ge(e).selectedNode?(ye(),Se(ut,{key:0},[fe("div",OB,[fe("div",{class:"flow-node__category-dot",style:yt({background:o.value})},null,4),fe("span",BB,Ze(i.value.label),1),fe("span",kB,Ze(i.value.type),1)]),Object.keys(i.value.params).length>0?(ye(),Se("div",zB,[u[4]||(u[4]=fe("div",{class:"param-panel__section-title"},"Parameters",-1)),(ye(!0),Se(ut,null,dn(i.value.params,(c,f)=>(ye(),Se("div",{key:f,class:"param-field"},[fe("div",VB,[fe("label",HB,Ze(c.label),1),fe("div",$B,[c.type==="float"||c.type==="int"?(ye(),Se("button",{key:0,class:Dt(["param-field__expose-btn",{"param-field__expose-btn--active":n.value[f]}]),onClick:d=>n.value[f]=!n.value[f],title:"Toggle Randomizer Bounds"}," 🎲 ",10,GB)):Je("",!0),c.type==="float"||c.type==="int"?(ye(),Se("button",{key:1,class:Dt(["param-field__expose-btn",{"param-field__expose-btn--active":ge(e).isParamExposed(ge(e).selectedNodeId,f)}]),onClick:d=>ge(e).toggleExposeParam(ge(e).selectedNodeId,f),title:ge(e).isParamExposed(ge(e).selectedNodeId,f)?"Unexpose input":"Expose as input handle"},Ze(ge(e).isParamExposed(ge(e).selectedNodeId,f)?"🔗":"⊕"),11,WB)):Je("",!0)])]),c.type==="float"||c.type==="int"?(ye(),Se(ut,{key:0},[fe("input",{type:"range",class:"param-field__input",min:f==="value"&&r.value.min!==void 0?r.value.min:c.min,max:f==="value"&&r.value.max!==void 0?r.value.max:c.max,step:f==="value"&&r.value.step!==void 0?r.value.step:c.step,value:r.value[f]??c.default,onInput:d=>s(f,c.type==="int"?parseInt(d.target.value):parseFloat(d.target.value))},null,40,XB),fe("div",YB,[fe("span",null,Ze(f==="value"&&r.value.min!==void 0?r.value.min:c.min),1),fe("input",{type:"number",class:"param-field__number-input mono",step:f==="value"&&r.value.step!==void 0?r.value.step:c.step,value:a(r.value[f]??c.default,c.type),onChange:d=>s(f,c.type==="int"?parseInt(d.target.value):parseFloat(d.target.value))},null,40,qB),fe("span",null,Ze(f==="value"&&r.value.max!==void 0?r.value.max:c.max),1)]),af(fe("div",KB,[u[3]||(u[3]=fe("div",{class:"param-field__random-bounds-header"},"🎲 Randomizer Range",-1)),fe("div",ZB,[fe("div",jB,[u[0]||(u[0]=fe("span",{style:{"font-size":"9px",opacity:"0.7"}},"Min",-1)),fe("input",{type:"number",class:"param-field__number-input mono",step:c.step,value:r.value[`_randMin_${f}`]??(f==="value"&&r.value.min!==void 0?r.value.min:c.min)??0,onChange:d=>s(`_randMin_${f}`,c.type==="int"?parseInt(d.target.value):parseFloat(d.target.value)),title:"Min random value"},null,40,JB)]),u[2]||(u[2]=fe("span",{style:{opacity:"0.5","font-size":"10px","margin-top":"10px"}},"to",-1)),fe("div",QB,[u[1]||(u[1]=fe("span",{style:{"font-size":"9px",opacity:"0.7"}},"Max",-1)),fe("input",{type:"number",class:"param-field__number-input mono",step:c.step,value:r.value[`_randMax_${f}`]??(f==="value"&&r.value.max!==void 0?r.value.max:c.max)??1,onChange:d=>s(`_randMax_${f}`,c.type==="int"?parseInt(d.target.value):parseFloat(d.target.value)),title:"Max random value"},null,40,ek)])])],512),[[pf,n.value[f]]])],64)):c.type==="select"?(ye(),Se("select",{key:1,class:"param-field__input",value:r.value[f]??c.default,onChange:d=>s(f,d.target.value)},[(ye(!0),Se(ut,null,dn(c.options,d=>(ye(),Se("option",{key:d,value:d},Ze(d),9,nk))),128))],40,tk)):c.type==="bool"?(ye(),Se("label",ik,[fe("input",{type:"checkbox",checked:r.value[f]??c.default,onChange:d=>s(f,d.target.checked)},null,40,rk),fe("span",null,Ze(c.label),1)])):c.type==="string"?(ye(),Se("input",{key:3,type:"text",class:"param-field__input",value:r.value[f]??c.default,onInput:d=>s(f,d.target.value)},null,40,ok)):Je("",!0)]))),128))])):Je("",!0),fe("div",sk,[u[9]||(u[9]=fe("div",{class:"param-panel__section-title"},"Info",-1)),fe("div",ak,[u[5]||(u[5]=fe("span",{class:"param-field__label"},"ID",-1)),fe("span",lk,Ze(ge(e).selectedNodeId),1)]),fe("div",uk,[u[6]||(u[6]=fe("span",{class:"param-field__label"},"Category",-1)),fe("span",ck,Ze(i.value.category),1)]),fe("div",fk,[u[7]||(u[7]=fe("span",{class:"param-field__label"},"Inputs",-1)),fe("span",dk,Ze(i.value.inputs.length),1)]),fe("div",hk,[u[8]||(u[8]=fe("span",{class:"param-field__label"},"Outputs",-1)),fe("span",pk,Ze(i.value.outputs.length),1)])])],64)):(ye(),Se("div",mk," Select a node to edit its parameters "))]))}},vk=`// Passthrough — renders texture as-is\r
precision highp float;\r
varying vec2 vUv;\r
uniform sampler2D uTexture;\r
\r
void main() {\r
  gl_FragColor = texture2D(uTexture, vUv);\r
}\r
`,_k=`// Reeded Glass — ribbed/fluted glass refraction\r
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
`,yk=`// Chromatic Aberration — RGB channel offset\r
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
`,xk=`// Heightmap Displacement — displace pixels using a heightmap image\r
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
`,bk=`// Levels — shadows/midtones/highlights per-channel adjustment\r
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
`,Sk=`// Surface Blur — edge-preserving bilateral filter approximation\r
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
`,Mk=`// Blend — combine two images with blend modes\r
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
`,wk=`// Feedback Loop — blend current frame with previous frame\r
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
`,Ek=`// UV Generator — outputs UV coordinates as color (R=U, G=V)\r
precision highp float;\r
varying vec2 vUv;\r
\r
void main() {\r
  gl_FragColor = vec4(vUv.x, vUv.y, 0.0, 1.0);\r
}\r
`,Tk=`// UV Transform — scale, rotate, translate UVs\r
precision highp float;\r
varying vec2 vUv;\r
uniform sampler2D uIn;\r
uniform float uScaleX;\r
uniform float uScaleY;\r
uniform float uRotation;    // degrees\r
uniform float uTranslateX;\r
uniform float uTranslateY;\r
\r
void main() {\r
  vec2 uv = vUv;\r
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
  gl_FragColor = texture2D(uIn, uv);\r
}\r
`,Ak=`// UV Repeat — tile image with mirror/offset options\r
precision highp float;\r
varying vec2 vUv;\r
uniform sampler2D uIn;\r
uniform float uRepeatX;\r
uniform float uRepeatY;\r
uniform float uMirror;\r
uniform float uOffsetX;\r
uniform float uOffsetY;\r
\r
void main() {\r
  vec2 uv = vUv * vec2(uRepeatX, uRepeatY) + vec2(uOffsetX, uOffsetY);\r
\r
  if (uMirror > 0.5) {\r
    // Mirror repeat\r
    vec2 cell = floor(uv);\r
    uv = fract(uv);\r
    // Mirror on odd cells\r
    if (mod(cell.x, 2.0) >= 1.0) uv.x = 1.0 - uv.x;\r
    if (mod(cell.y, 2.0) >= 1.0) uv.y = 1.0 - uv.y;\r
  } else {\r
    uv = fract(uv);\r
  }\r
\r
  gl_FragColor = texture2D(uIn, uv);\r
}\r
`,Ck=`// UV Glitch — random block displacement of UV coordinates\r
precision highp float;\r
varying vec2 vUv;\r
uniform sampler2D uIn;\r
uniform float uBlockSize;\r
uniform float uIntensity;\r
uniform float uSeed;\r
uniform int uDirection; // 0=horizontal, 1=vertical, 2=both\r
\r
// Simple hash function\r
float hash(vec2 p) {\r
  return fract(sin(dot(p + uSeed, vec2(127.1, 311.7))) * 43758.5453);\r
}\r
\r
void main() {\r
  vec2 uv = vUv;\r
  float bs = max(uBlockSize, 1.0) / 256.0; // normalize block size\r
\r
  // Get block coordinate\r
  vec2 block = floor(uv / bs);\r
  float h = hash(block);\r
\r
  // Apply displacement based on direction\r
  if (h > 1.0 - uIntensity) {\r
    float offset = (hash(block + 0.5) - 0.5) * uIntensity * 0.5;\r
\r
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
  gl_FragColor = texture2D(uIn, uv);\r
}\r
`,Rk=`// UV Polar — cartesian to polar and polar to cartesian conversion\r
precision highp float;\r
varying vec2 vUv;\r
uniform sampler2D uIn;\r
uniform int uMode;       // 0=toPolar, 1=fromPolar\r
uniform float uCenterX;\r
uniform float uCenterY;\r
\r
#define PI 3.14159265359\r
#define TAU 6.28318530718\r
\r
void main() {\r
  vec2 center = vec2(uCenterX, uCenterY);\r
  vec2 uv;\r
\r
  if (uMode == 0) {\r
    // Cartesian to Polar\r
    vec2 delta = vUv - center;\r
    float radius = length(delta) * 2.0;\r
    float angle = atan(delta.y, delta.x);\r
    uv = vec2(angle / TAU + 0.5, radius);\r
  } else {\r
    // Polar to Cartesian\r
    float angle = (vUv.x - 0.5) * TAU;\r
    float radius = vUv.y * 0.5;\r
    uv = center + vec2(cos(angle), sin(angle)) * radius;\r
  }\r
\r
  uv = clamp(uv, 0.0, 1.0);\r
  gl_FragColor = texture2D(uIn, uv);\r
}\r
`,Ik=`varying vec2 vUv;\r
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
`,Pk=`varying vec2 vUv;\r
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
`,Nk=`varying vec2 vUv;\r
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
`,Dk=`varying vec2 vUv;\r
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
`,Lk=`varying vec2 vUv;\r
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
`,Fk=`// Liquid Deform — swirling polar texture deformation\r
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
`,Uk=`// ASCII Art — bitmap glyph post-processing effect\r
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
`,Ok=`// ASCII Art v2 — bitmap glyphs with palette color matching\r
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
`,Bk=`// Fisheye / Antifisheye — barrel and pincushion lens distortion\r
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
`,kk=`// Smooth Noise Contours — antialiased simplex noise contour lines\r
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
`,zk=`
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position, 1.0);
}
`,Vk={passthrough:vk,reededGlass:_k,chromaticAberration:yk,displacement:xk,levels:bk,surfaceBlur:Sk,blend:Mk,feedback:wk,uvGenerator:Ek,uvTransform:Tk,uvRepeat:Ak,uvGlitch:Ck,uvPolar:Rk,diffusion:Ik,xerox:Pk,crt:Nk,motionBlur:Dk,dithering:Lk,liquidDeform:Fk,ascii:Uk,asciiV2:Ok,fisheye:Bk,noiseContours:kk},Rg=20;class Hk{constructor(){this.renderer=null,this.scene=null,this.camera=null,this.quad=null,this.fbos={},this.materials={},this.textures={},this.feedbackFBOs={},this.width=512,this.height=512,this.isInitialized=!1}init(e,n,i){this.width=n||512,this.height=i||512,this.renderer=new gA({canvas:e,alpha:!0,preserveDrawingBuffer:!0,antialias:!1}),this.renderer.setSize(this.width,this.height),this.renderer.autoClear=!1,this.camera=new dh(-1,1,1,-1,0,1);const r=new ya(2,2);this.scene=new tS,this.quad=new xi(r,null),this.scene.add(this.quad),this.isInitialized=!0}resize(e,n){this.width=e,this.height=n,this.renderer&&this.renderer.setSize(e,n);for(const[i,r]of Object.entries(this.fbos))r.setSize(e,n);for(const[i,r]of Object.entries(this.feedbackFBOs))r.current.setSize(e,n),r.previous.setSize(e,n)}setInputTexture(e,n){n.colorSpace=Ir,n.minFilter=Ct,n.magFilter=Ct,this.textures[e]=n}getOrCreateFBO(e){if(this.fbos[e])return this.fbos[e];if(Object.keys(this.fbos).length>=Rg)return console.warn(`Max FBO count (${Rg}) reached. Cannot create FBO for node ${e}`),null;const n=new _n(this.width,this.height,{minFilter:Ct,magFilter:Ct,format:pn,type:fn,colorSpace:Ir});return this.fbos[e]=n,n}getOrCreateFeedbackFBOs(e){if(this.feedbackFBOs[e])return this.feedbackFBOs[e];const n={minFilter:Ct,magFilter:Ct,format:pn,type:fn};return this.feedbackFBOs[e]={current:new _n(this.width,this.height,n),previous:new _n(this.width,this.height,n)},this.feedbackFBOs[e]}getOrCreateMaterial(e,n,i){let r=Vk[n];if(!r)return this.getOrCreateMaterial(e,"passthrough",i);if(n!=="passthrough"&&n!=="feedback"){const a=r.includes("uniform sampler2D uIn;"),l=r.includes("uniform sampler2D uTexture;");if(a||l){const u=a?"uIn":"uTexture";r=r.replace("void main()",`uniform float uBlendAmount;
void main()`),r=r.replace(/gl_FragColor\s*=\s*([^;]+);([^;]*)$/,`vec4 effectColor = $1;
  vec4 originalColor = texture2D(${u}, vUv);
  gl_FragColor = mix(originalColor, effectColor, uBlendAmount);$2`)}}if(this.materials[e]&&this.materials[e]._shaderKey===n){const a=this.materials[e];let l=!1;for(const[u,c]of Object.entries(i))a.uniforms[u]?a.uniforms[u].value=c:(a.uniforms[u]={value:c},l=!0);return l&&(a.needsUpdate=!0),a}this.materials[e]&&this.materials[e].dispose();const o={};for(const[a,l]of Object.entries(i))o[a]={value:l};const s=new Zn({vertexShader:zk,fragmentShader:r,uniforms:o,depthTest:!1,depthWrite:!1});return s._shaderKey=n,this.materials[e]=s,s}renderNode(e,n,i){this.quad.material=n,i?this.renderer.setRenderTarget(i):this.renderer.setRenderTarget(null),this.renderer.clear(),this.renderer.render(this.scene,this.camera)}removeNodeResources(e){this.fbos[e]&&(this.fbos[e].dispose(),delete this.fbos[e]),this.materials[e]&&(this.materials[e].dispose(),delete this.materials[e]),this.textures[e]&&(this.textures[e].dispose(),delete this.textures[e]),this.feedbackFBOs[e]&&(this.feedbackFBOs[e].current.dispose(),this.feedbackFBOs[e].previous.dispose(),delete this.feedbackFBOs[e])}execute(e,n,i,r,o,s,a){if(!this.isInitialized||!this.renderer)return;const l={};for(const h of n)l[h.id]=h;const u={};for(const h of i)u[h.target]||(u[h.target]=[]),u[h.target].push({sourceNodeId:h.source,sourceHandle:h.sourceHandle,targetHandle:h.targetHandle});let c=null;const f={};for(const h of e){const g=l[h];if(!g)continue;const _=ai(g.type);if(!_)continue;const m=r[h]||{};if(g.type==="imageInput"||g.type==="imageOutput"||g.type==="pixelSort")continue;if(m._bypass){const y=u[h]||[];for(const M of y){const N=l[M.sourceNodeId];if(!N)continue;let C=null;if(N.type==="imageInput"?C=this.textures[M.sourceNodeId]||null:this.fbos[M.sourceNodeId]&&(C=this.fbos[M.sourceNodeId].texture),C){const P=this.getOrCreateFBO(h);if(P){const B=this.getOrCreateMaterial(h,"passthrough",{uTexture:C});this.renderNode(h,B,P),c=P}break}}f[h]=0;continue}const p=u[h]||[],b={uTime:a,uResolution:new Et(this.width,this.height)};for(const y of _.inputs)if(y.type==="image"){const M="u"+y.id.charAt(0).toUpperCase()+y.id.slice(1);b[M+"Connected"]=!1,b[M]=null}let S=!1;for(const y of p){const M=l[y.sourceNodeId];if(!M||!ai(M.type))continue;let C=null;if(M.type==="imageInput"||M.type==="uiImageSlot"||M.type==="webcamInput"?C=this.textures[y.sourceNodeId]||null:this.fbos[y.sourceNodeId]&&(C=this.fbos[y.sourceNodeId].texture),C&&(S=!0,_.inputs.find(B=>B.id===y.targetHandle))){const B="u"+y.targetHandle.charAt(0).toUpperCase()+y.targetHandle.slice(1);b[B]=C,b[B+"Connected"]=!0}if(o[y.sourceNodeId]){const P=o[y.sourceNodeId][y.sourceHandle];if(P!==void 0){const B=_.inputs.find(A=>A.id===y.targetHandle),v=!B&&_.params[y.targetHandle];(B||v)&&(m[y.targetHandle]=P)}}}if(!S&&_.inputs.some(y=>y.type==="image"))continue;for(const[y,M]of Object.entries(m)){const N=_.params[y];if(!N)continue;const C="u"+y.charAt(0).toUpperCase()+y.slice(1);if(N.type==="float"||N.type==="int")b[C]=Number(M);else if(N.type==="bool")b[C]=M?1:0;else if(N.type==="select"){const P=N.options||[];b[C]=P.indexOf(M)}else N.type==="color"&&(b[C]=new wt(M))}if(g.type==="feedbackLoop"){const y=this.getOrCreateFeedbackFBOs(h);b.uPreviousFrame=y.previous.texture,b.uDecay=m.decay??.9,b.uBlendMode=["normal","add","multiply"].indexOf(m.blendMode??"normal");const M=this.getOrCreateMaterial(h,"feedback",b),N=Math.min(m.iterations??1,100);for(let C=0;C<N;C++){this.renderNode(h,M,y.current);const P=y.previous;y.previous=y.current,y.current=P,M.uniforms.uPreviousFrame.value=y.previous.texture}this.fbos[h]=y.previous,c=y.previous;continue}const x=_.shaderKey;if(!x)continue;const D=this.getOrCreateFBO(h);if(!D)continue;const O=performance.now(),z=this.getOrCreateMaterial(h,x,b);this.renderNode(h,z,D),f[h]=performance.now()-O,c=D}const d=s&&this.fbos[s]?this.fbos[s]:c;if(d){this.materials.__preview__&&(this.materials.__preview__.uniforms.uTexture.value=d.texture);const h=this.getOrCreateMaterial("__preview__","passthrough",{uTexture:d.texture});this.renderNode("__preview__",h,null)}return this.perfTimings=f,f}readPixels(e){const n=this.fbos[e];if(!n||!this.renderer)return null;const i=new Uint8Array(this.width*this.height*4);return this.renderer.readRenderTargetPixels(n,0,0,this.width,this.height,i),{pixels:i,width:this.width,height:this.height}}getScaledPixels(e,n,i){const r=this.getNodeTexture(e);if(!r||!this.renderer)return null;(!this._previewFBO||this._previewFBO.width!==n||this._previewFBO.height!==i)&&(this._previewFBO&&this._previewFBO.dispose(),this._previewFBO=new _n(n,i,{minFilter:Ct,magFilter:Ct,format:pn,type:fn}));const o=this.getOrCreateMaterial("__preview_scale__","passthrough",{uTexture:r});this.renderNode("__preview_scale__",o,this._previewFBO);const s=new Uint8Array(n*i*4);return this.renderer.readRenderTargetPixels(this._previewFBO,0,0,n,i,s),{pixels:s,width:n,height:i}}getNodeTexture(e){return this.textures[e]?this.textures[e]:this.fbos[e]?this.fbos[e].texture:null}removeNode(e){this.fbos[e]&&(this.fbos[e].dispose(),delete this.fbos[e]),this.materials[e]&&(this.materials[e].dispose(),delete this.materials[e]),this.textures[e]&&(this.textures[e].dispose(),delete this.textures[e]),this.feedbackFBOs[e]&&(this.feedbackFBOs[e].current.dispose(),this.feedbackFBOs[e].previous.dispose(),delete this.feedbackFBOs[e])}dispose(){for(const e of Object.values(this.fbos))e.dispose();for(const e of Object.values(this.materials))e.dispose();for(const e of Object.values(this.textures))e.dispose();for(const e of Object.values(this.feedbackFBOs))e.current.dispose(),e.previous.dispose();this.fbos={},this.materials={},this.textures={},this.feedbackFBOs={},this.renderer&&this.renderer.dispose()}}class $k{constructor(){this.isRunning=!1,this.startTime=0,this.lastTime=0,this.time=0,this.deltaTime=0,this.frameId=null,this.callbacks=[]}onFrame(e){return this.callbacks.push(e),()=>{this.callbacks=this.callbacks.filter(n=>n!==e)}}start(){this.isRunning||(this.isRunning=!0,this.startTime=performance.now()/1e3,this.lastTime=this.startTime,this._tick())}stop(){this.isRunning=!1,this.frameId!==null&&(cancelAnimationFrame(this.frameId),this.frameId=null)}reset(){this.startTime=performance.now()/1e3,this.time=0,this.deltaTime=0}_tick(){if(!this.isRunning)return;const e=performance.now()/1e3;this.deltaTime=e-this.lastTime,this.time=e-this.startTime,this.lastTime=e;for(const n of this.callbacks)n(this.time,this.deltaTime);this.frameId=requestAnimationFrame(()=>this._tick())}}let pl=null,wr=null,Dl=null,Od=!1;function by(){if(!pl)try{const t=window.AudioContext||window.webkitAudioContext;pl=new t,wr=pl.createAnalyser(),wr.fftSize=512,wr.smoothingTimeConstant=.8,Dl=new Uint8Array(wr.frequencyBinCount),navigator.mediaDevices.getUserMedia({audio:!0,video:!1}).then(e=>{pl.createMediaStreamSource(e).connect(wr),Od=!0}).catch(e=>console.warn("Audio FFT access denied or error:",e))}catch(t){console.warn("Audio context not supported",t)}}function Gk(t,e){const n={},i={};for(const s of t)n[s.id]=0,i[s.id]=[];for(const s of e)i[s.source]&&(i[s.source].push(s.target),n[s.target]=(n[s.target]||0)+1);const r=[];for(const s of t)n[s.id]===0&&r.push(s.id);const o=[];for(;r.length>0;){const s=r.shift();o.push(s);for(const a of i[s]||[])n[a]--,n[a]===0&&r.push(a)}return o.length!==t.length&&console.warn("Cycle detected in graph — some nodes skipped"),o}function Wk(t,e,n){const i={};for(const r of e)if(r.target===t){const o=n[r.source];o&&(i[r.targetHandle]={sourceNodeId:r.source,sourceHandleId:r.sourceHandle,value:o[r.sourceHandle]})}return i}function Xk(t,e,n,i,r,o){const s={};for(const l of e)s[l.id]=l;const a={};for(const l of t){const u=s[l];if(!u)continue;const c=ai(u.type);if(!c||c.category==="image"||c.category==="uv"||u.type==="preview")continue;const f=i[l]||{},d=Wk(l,n,a),h={};switch(u.type){case"lfo":{const g=f.frequency??1,_=f.amplitude??1,m=f.offset??0,p=(f.phase??0)*Math.PI/180,b=r*g*Math.PI*2+p,S=f.waveform??"sine";let x=0;S==="sine"?x=Math.sin(b):S==="saw"?x=2*(b/(Math.PI*2)%1)-1:S==="square"?x=Math.sin(b)>=0?1:-1:S==="triangle"&&(x=2*Math.abs(2*(b/(Math.PI*2)%1)-1)-1),h.out=x*_+m;break}case"timer":{const g=f.speed??1,_=f.loop??!1,m=f.loopDuration??5;let p=r*g;_&&m>0&&(p=p%m),h.out=p;break}case"random":{const g=f.min??0,_=f.max??1,m=f.seed??42,p=Math.sin(m+r*100)*43758.5453,b=p-Math.floor(p);h.out=g+b*(_-g);break}case"damper":{const g=d.target?.value??0,_=f.smoothing??.9,m=u._damperValue??g,p=m+(g-m)*(1-_);u._damperValue=p,h.out=p;break}case"fft":{Od||by();const g=f.smoothing??.8,_=f.gain??1;if(Od&&wr&&Dl){wr.smoothingTimeConstant=g,wr.getByteFrequencyData(Dl);let m=0,p=0,b=0,S=0;for(let x=0;x<256;x++){const D=Dl[x]/255;x<=10?m+=D:x<=50?p+=D:x<=120?b+=D:S+=D}h.bass=Math.min(m/11*_,1),h.lowMid=Math.min(p/40*_,1),h.mid=Math.min(b/70*_,1),h.high=Math.min(S/135*_,1)}else h.bass=0,h.lowMid=0,h.mid=0,h.high=0;break}case"button":case"bang":{h.out=u._triggered?1:0,u._triggered=!1;break}case"toggle":{h.out=f.state?1:0;break}case"edgeTrigger":{const g=d.in?.value??!1,_=u._prevEdgeVal??!1,m=f.mode??"rising";let p=!1;m==="rising"&&!_&&g&&(p=!0),m==="falling"&&_&&!g&&(p=!0),m==="both"&&_!==g&&(p=!0),h.out=p?1:0,u._prevEdgeVal=g;break}case"changeTrigger":{const g=d.in?.value??0,_=f.threshold??.1;u._lastTriggerVal===void 0&&(u._lastTriggerVal=g);const m=u._lastTriggerVal;let p=!1;Math.abs(g-m)>=_&&(p=!0,u._lastTriggerVal=g),h.out=p?1:0;break}case"slider":case"knob":{const g=f.value??.5,_=f.outputType??"float";h.out=_==="int"?Math.round(g):g;break}case"compare":{const g=d.a?.value??0,_=d.b?.value??0,m=f.op??">";let p=!1;switch(m){case">":p=g>_;break;case"<":p=g<_;break;case">=":p=g>=_;break;case"<=":p=g<=_;break;case"==":p=g===_;break;case"!=":p=g!==_;break}h.out=p;break}case"valueCondition":{const g=d.cond?.value??!1,_=d.trueVal?.value??f.defaultTrue??1,m=d.falseVal?.value??f.defaultFalse??0;h.out=g?_:m;break}case"mathAdd":{const g=d.a?.value??0,_=d.b?.value??0;h.out=g+_;break}case"mathMultiply":{const g=d.a?.value??0,_=d.b?.value??1;h.out=g*_;break}case"mathDivide":{const g=d.a?.value??0,_=d.b?.value??1;h.out=_!==0?g/_:0;break}case"mathSqrt":{const g=d.a?.value??0;h.out=Math.sqrt(Math.abs(g));break}case"mathMap":{const g=d.value?.value??0,_=f.inMin??0,m=f.inMax??1,p=f.outMin??0,b=f.outMax??1,S=m!==_?(g-_)/(m-_):0;h.out=p+S*(b-p);break}case"mathClamp":{const g=d.value?.value??0,_=f.min??0,m=f.max??1;h.out=Math.min(Math.max(g,_),m);break}case"mathWrap":{const g=d.value?.value??0,_=f.min??0,p=(f.max??1)-_;if(p<=0){h.out=_;break}h.out=_+((g-_)%p+p)%p;break}case"floatToInt":{const g=d.in?.value??0,_=f.mode??"round";let m;_==="floor"?m=Math.floor(g):_==="ceil"?m=Math.ceil(g):_==="truncate"?m=Math.trunc(g):m=Math.round(g);const p=f.clampMin??-2147483648,b=f.clampMax??2147483647;h.out=Math.min(Math.max(m,p),b);break}case"intToFloat":{h.out=Number(d.in?.value??0);break}case"numberMonitor":{h.out=d.in?.value??0;break}}a[l]=h}return a}function Yk(t,e){const n={};for(const i of e)n[i.id]=i;return t.filter(i=>{const r=n[i];if(!r)return!1;const o=ai(r.type);return o?o.category==="image"||o.category==="uv":!1})}const qk={id:"app"},Kk={class:"main-layout"},Zk={class:"preview-background"},jk={__name:"App",setup(t){const e=Yu(),n=qe(null),i=qe(null),r=qe(null);function o(){by(),window.removeEventListener("click",o),window.removeEventListener("keydown",o)}let s=null,a=null,l=null;const u=qe(0);let c=0,f=0;const d={};let h=null;On(async()=>{await Dn(),window.addEventListener("click",o),window.addEventListener("keydown",o);const y=i.value?.getCanvas?.();y&&(s=new Hk,s.init(y,512,512)),r.value&&(h=r.value.getContext("2d")),e.onNodeRemoved(M=>{s&&s.removeNodeResources(M),delete d[M]}),f=performance.now(),a=new $k,l=a.onFrame((M,N)=>{if(!e.isRendering)return;c++;const C=performance.now();C-f>=500&&(u.value=Math.round(c/(C-f)*1e3),c=0,f=C),_(M)}),a.start(),await e.loadFromLocalStorage()}),ss(()=>{l&&l(),a&&a.stop(),s&&s.dispose()});let g=0;function _(y,M){if(!s?.isInitialized)return;const N=e.nodes,C=e.edges,P=e.nodeParams;if(N.length===0){h&&r.value&&h.clearRect(0,0,r.value.width,r.value.height);return}const B=Gk(N,C),v=Xk(B,N,C,P,y);e.dataOutputs=v;const A=Yk(B,N),E=s.execute(A,N,C,P,v,e.previewNodeId,y);if(e.perfTimings=E||{},e.previewMode==="background"&&h&&r.value){const I=i.value?.getCanvas?.();I&&I.width>0&&I.height>0&&(r.value.width=I.width,r.value.height=I.height,h.drawImage(I,0,0))}if(g%4===0){const I=N.filter(V=>V.type==="preview");for(const V of I){const W=C.find(q=>q.target===V.id&&q.targetHandle==="in");if(W){const q=s.getScaledPixels(W.source,176,100);q&&(e.previewImages[V.id]=q)}}}g++}function m(y){if(n.value&&n.value.addNodeAtCenter)n.value.addNodeAtCenter(y);else{const M=300+Math.random()*200,N=200+Math.random()*200;e.addNode(y,{x:M,y:N})}}function p(y,M){if(!s)return;d[y]=M;let N;M.isVideo?(N=new dS(M.img),N.minFilter=Ct,N.magFilter=Ct,N.format=pn):(N=new Qt(M.img),N.needsUpdate=!0),s.setInputTexture(y,N),b(y),s.resize(M.width,M.height),i.value&&(i.value.width=M.width,i.value.height=M.height)}function b(y){if(!s)return;const M=new Set,N=[y];for(;N.length;){const C=N.shift();if(!M.has(C)){M.add(C);for(const P of e.edges)P.source===C&&!M.has(P.target)&&(s.fbos[P.target]&&(s.fbos[P.target].dispose(),delete s.fbos[P.target]),s.materials[P.target]&&(s.materials[P.target].dispose(),delete s.materials[P.target]),N.push(P.target))}}}function S(y){if(!s)return;const M=e.edges.filter($=>$.target===y);let N=null;for(const $ of M)if($.targetHandle==="in"){N=$.source;break}if(!N){alert("No image connected to output node");return}const C=s.readPixels(N);if(!C){alert("Could not read pixels — make sure an image is connected and the pipeline has run");return}const{pixels:P,width:B,height:v}=C,E=(e.nodeParams[y]||{}).filename||e.projectTitle||"output",I=document.createElement("canvas");I.width=B,I.height=v;const V=I.getContext("2d"),W=V.createImageData(B,v);for(let $=0;$<v;$++)for(let K=0;K<B;K++){const ae=((v-1-$)*B+K)*4,ve=($*B+K)*4;W.data[ve]=P[ae],W.data[ve+1]=P[ae+1],W.data[ve+2]=P[ae+2],W.data[ve+3]=P[ae+3]}V.putImageData(W,0,0);const q=E.replace(/[^a-zA-Z0-9_-]/g,"_");I.toBlob($=>{if(!$)return;const K=URL.createObjectURL($),ae=document.createElement("a");ae.href=K,ae.download=`${q}.png`,ae.click(),URL.revokeObjectURL(K)},"image/png")}function x(){e.saveToLocalStorage()}async function D(){await e.loadFromLocalStorage()||alert("No saved graph found")}function O(y){e.loadGraph(y)||alert("Failed to import graph — invalid JSON")}function z(){confirm("Clear entire graph? This cannot be undone.")&&(e.resetGraph(),Object.keys(d).forEach(y=>delete d[y]))}return(y,M)=>(ye(),Se("div",qk,[it(SA,{"is-rendering":ge(e).isRendering,"preview-mode":ge(e).previewMode,"project-title":ge(e).projectTitle,onSave:x,onLoad:D,onDownload:M[0]||(M[0]=N=>ge(e).downloadGraph()),onImport:O,onReset:z,onToggleRender:M[1]||(M[1]=N=>ge(e).toggleRendering()),onTogglePreview:M[2]||(M[2]=N=>ge(e).togglePreviewMode()),onUpdateTitle:M[3]||(M[3]=N=>ge(e).projectTitle=N)},null,8,["is-rendering","preview-mode","project-title"]),fe("div",Kk,[it(LA,{onAddNode:m}),fe("div",{class:Dt(["editor-area",{"editor-area--bg-mode":ge(e).previewMode==="background"}])},[af(fe("div",Zk,[fe("canvas",{ref_key:"bgCanvasRef",ref:r},null,512)],512),[[pf,ge(e).previewMode==="background"]]),it(EB,{ref_key:"editorRef",ref:n,onImageLoaded:p,onExportImage:S},null,512),af(it(FB,{ref_key:"previewRef",ref:i,"is-rendering":ge(e).isRendering,fps:u.value},null,8,["is-rendering","fps"]),[[pf,ge(e).previewMode==="panel"]])],2),it(gk)])]))}},Sy=qb(jk);Sy.use(jb());Sy.mount("#app");
