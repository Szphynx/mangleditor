(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function n(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(r){if(r.ep)return;r.ep=!0;const o=n(r);fetch(r.href,o)}})();function ah(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const Pt={},Ko=[],gi=()=>{},dv=()=>!1,Iu=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),lh=t=>t.startsWith("onUpdate:"),qt=Object.assign,uh=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},_x=Object.prototype.hasOwnProperty,xt=(t,e)=>_x.call(t,e),et=Array.isArray,Zo=t=>Ca(t)==="[object Map]",fv=t=>Ca(t)==="[object Set]",pp=t=>Ca(t)==="[object Date]",nt=t=>typeof t=="function",Ot=t=>typeof t=="string",Zn=t=>typeof t=="symbol",yt=t=>t!==null&&typeof t=="object",hv=t=>(yt(t)||nt(t))&&nt(t.then)&&nt(t.catch),pv=Object.prototype.toString,Ca=t=>pv.call(t),yx=t=>Ca(t).slice(8,-1),mv=t=>Ca(t)==="[object Object]",Pu=t=>Ot(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Gs=ah(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Nu=t=>{const e=Object.create(null);return(n=>e[n]||(e[n]=t(n)))},xx=/-\w/g,Bn=Nu(t=>t.replace(xx,e=>e.slice(1).toUpperCase())),bx=/\B([A-Z])/g,Hr=Nu(t=>t.replace(bx,"-$1").toLowerCase()),Du=Nu(t=>t.charAt(0).toUpperCase()+t.slice(1)),pc=Nu(t=>t?`on${Du(t)}`:""),Xi=(t,e)=>!Object.is(t,e),mc=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},gv=(t,e,n,i=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:i,value:n})},Sx=t=>{const e=parseFloat(t);return isNaN(e)?t:e},Mx=t=>{const e=Ot(t)?Number(t):NaN;return isNaN(e)?t:e};let mp;const Lu=()=>mp||(mp=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function rt(t){if(et(t)){const e={};for(let n=0;n<t.length;n++){const i=t[n],r=Ot(i)?Ax(i):rt(i);if(r)for(const o in r)e[o]=r[o]}return e}else if(Ot(t)||yt(t))return t}const wx=/;(?![^(]*\))/g,Ex=/:([^]+)/,Tx=/\/\*[^]*?\*\//g;function Ax(t){const e={};return t.replace(Tx,"").split(wx).forEach(n=>{if(n){const i=n.split(Ex);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function ut(t){let e="";if(Ot(t))e=t;else if(et(t))for(let n=0;n<t.length;n++){const i=ut(t[n]);i&&(e+=i+" ")}else if(yt(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}function Cx(t){if(!t)return null;let{class:e,style:n}=t;return e&&!Ot(e)&&(t.class=ut(e)),n&&(t.style=rt(n)),t}const Rx="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Ix=ah(Rx);function vv(t){return!!t||t===""}function Px(t,e){if(t.length!==e.length)return!1;let n=!0;for(let i=0;n&&i<t.length;i++)n=ch(t[i],e[i]);return n}function ch(t,e){if(t===e)return!0;let n=pp(t),i=pp(e);if(n||i)return n&&i?t.getTime()===e.getTime():!1;if(n=Zn(t),i=Zn(e),n||i)return t===e;if(n=et(t),i=et(e),n||i)return n&&i?Px(t,e):!1;if(n=yt(t),i=yt(e),n||i){if(!n||!i)return!1;const r=Object.keys(t).length,o=Object.keys(e).length;if(r!==o)return!1;for(const s in t){const a=t.hasOwnProperty(s),l=e.hasOwnProperty(s);if(a&&!l||!a&&l||!ch(t[s],e[s]))return!1}}return String(t)===String(e)}const _v=t=>!!(t&&t.__v_isRef===!0),Te=t=>Ot(t)?t:t==null?"":et(t)||yt(t)&&(t.toString===pv||!nt(t.toString))?_v(t)?Te(t.value):JSON.stringify(t,yv,2):String(t),yv=(t,e)=>_v(e)?yv(t,e.value):Zo(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[i,r],o)=>(n[gc(i,o)+" =>"]=r,n),{})}:fv(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>gc(n))}:Zn(e)?gc(e):yt(e)&&!et(e)&&!mv(e)?String(e):e,gc=(t,e="")=>{var n;return Zn(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};let cn;class xv{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.__v_skip=!0,this.parent=cn,!e&&cn&&(this.index=(cn.scopes||(cn.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=cn;try{return cn=this,e()}finally{cn=n}}}on(){++this._on===1&&(this.prevScope=cn,cn=this)}off(){this._on>0&&--this._on===0&&(cn=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let n,i;for(n=0,i=this.effects.length;n<i;n++)this.effects[n].stop();for(this.effects.length=0,n=0,i=this.cleanups.length;n<i;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,i=this.scopes.length;n<i;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function Fu(t){return new xv(t)}function Uu(){return cn}function Ws(t,e=!1){cn&&cn.cleanups.push(t)}let Ft;const vc=new WeakSet;class bv{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,cn&&cn.active&&cn.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,vc.has(this)&&(vc.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Mv(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,gp(this),wv(this);const e=Ft,n=Kn;Ft=this,Kn=!0;try{return this.fn()}finally{Ev(this),Ft=e,Kn=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)hh(e);this.deps=this.depsTail=void 0,gp(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?vc.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Ed(this)&&this.run()}get dirty(){return Ed(this)}}let Sv=0,Xs,Ys;function Mv(t,e=!1){if(t.flags|=8,e){t.next=Ys,Ys=t;return}t.next=Xs,Xs=t}function dh(){Sv++}function fh(){if(--Sv>0)return;if(Ys){let e=Ys;for(Ys=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;Xs;){let e=Xs;for(Xs=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){t||(t=i)}e=n}}if(t)throw t}function wv(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Ev(t){let e,n=t.depsTail,i=n;for(;i;){const r=i.prevDep;i.version===-1?(i===n&&(n=r),hh(i),Nx(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=r}t.deps=e,t.depsTail=n}function Ed(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Tv(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function Tv(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===na)||(t.globalVersion=na,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!Ed(t))))return;t.flags|=2;const e=t.dep,n=Ft,i=Kn;Ft=t,Kn=!0;try{wv(t);const r=t.fn(t._value);(e.version===0||Xi(r,t._value))&&(t.flags|=128,t._value=r,e.version++)}catch(r){throw e.version++,r}finally{Ft=n,Kn=i,Ev(t),t.flags&=-3}}function hh(t,e=!1){const{dep:n,prevSub:i,nextSub:r}=t;if(i&&(i.nextSub=r,t.prevSub=void 0),r&&(r.prevSub=i,t.nextSub=void 0),n.subs===t&&(n.subs=i,!i&&n.computed)){n.computed.flags&=-5;for(let o=n.computed.deps;o;o=o.nextDep)hh(o,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function Nx(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let Kn=!0;const Av=[];function ji(){Av.push(Kn),Kn=!1}function Ji(){const t=Av.pop();Kn=t===void 0?!0:t}function gp(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=Ft;Ft=void 0;try{e()}finally{Ft=n}}}let na=0;class Dx{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Ou{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!Ft||!Kn||Ft===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==Ft)n=this.activeLink=new Dx(Ft,this),Ft.deps?(n.prevDep=Ft.depsTail,Ft.depsTail.nextDep=n,Ft.depsTail=n):Ft.deps=Ft.depsTail=n,Cv(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const i=n.nextDep;i.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=i),n.prevDep=Ft.depsTail,n.nextDep=void 0,Ft.depsTail.nextDep=n,Ft.depsTail=n,Ft.deps===n&&(Ft.deps=i)}return n}trigger(e){this.version++,na++,this.notify(e)}notify(e){dh();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{fh()}}}function Cv(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)Cv(i)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const Jl=new WeakMap,mo=Symbol(""),Td=Symbol(""),ia=Symbol("");function fn(t,e,n){if(Kn&&Ft){let i=Jl.get(t);i||Jl.set(t,i=new Map);let r=i.get(n);r||(i.set(n,r=new Ou),r.map=i,r.key=n),r.track()}}function ki(t,e,n,i,r,o){const s=Jl.get(t);if(!s){na++;return}const a=l=>{l&&l.trigger()};if(dh(),e==="clear")s.forEach(a);else{const l=et(t),u=l&&Pu(n);if(l&&n==="length"){const c=Number(i);s.forEach((d,f)=>{(f==="length"||f===ia||!Zn(f)&&f>=c)&&a(d)})}else switch((n!==void 0||s.has(void 0))&&a(s.get(n)),u&&a(s.get(ia)),e){case"add":l?u&&a(s.get("length")):(a(s.get(mo)),Zo(t)&&a(s.get(Td)));break;case"delete":l||(a(s.get(mo)),Zo(t)&&a(s.get(Td)));break;case"set":Zo(t)&&a(s.get(mo));break}}fh()}function Lx(t,e){const n=Jl.get(t);return n&&n.get(e)}function Io(t){const e=mt(t);return e===t?e:(fn(e,"iterate",ia),In(t)?e:e.map(jn))}function Bu(t){return fn(t=mt(t),"iterate",ia),t}function Er(t,e){return Qi(t)?ss(Yi(t)?jn(e):e):jn(e)}const Fx={__proto__:null,[Symbol.iterator](){return _c(this,Symbol.iterator,t=>Er(this,t))},concat(...t){return Io(this).concat(...t.map(e=>et(e)?Io(e):e))},entries(){return _c(this,"entries",t=>(t[1]=Er(this,t[1]),t))},every(t,e){return Ci(this,"every",t,e,void 0,arguments)},filter(t,e){return Ci(this,"filter",t,e,n=>n.map(i=>Er(this,i)),arguments)},find(t,e){return Ci(this,"find",t,e,n=>Er(this,n),arguments)},findIndex(t,e){return Ci(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return Ci(this,"findLast",t,e,n=>Er(this,n),arguments)},findLastIndex(t,e){return Ci(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return Ci(this,"forEach",t,e,void 0,arguments)},includes(...t){return yc(this,"includes",t)},indexOf(...t){return yc(this,"indexOf",t)},join(t){return Io(this).join(t)},lastIndexOf(...t){return yc(this,"lastIndexOf",t)},map(t,e){return Ci(this,"map",t,e,void 0,arguments)},pop(){return bs(this,"pop")},push(...t){return bs(this,"push",t)},reduce(t,...e){return vp(this,"reduce",t,e)},reduceRight(t,...e){return vp(this,"reduceRight",t,e)},shift(){return bs(this,"shift")},some(t,e){return Ci(this,"some",t,e,void 0,arguments)},splice(...t){return bs(this,"splice",t)},toReversed(){return Io(this).toReversed()},toSorted(t){return Io(this).toSorted(t)},toSpliced(...t){return Io(this).toSpliced(...t)},unshift(...t){return bs(this,"unshift",t)},values(){return _c(this,"values",t=>Er(this,t))}};function _c(t,e,n){const i=Bu(t),r=i[e]();return i!==t&&!In(t)&&(r._next=r.next,r.next=()=>{const o=r._next();return o.done||(o.value=n(o.value)),o}),r}const Ux=Array.prototype;function Ci(t,e,n,i,r,o){const s=Bu(t),a=s!==t&&!In(t),l=s[e];if(l!==Ux[e]){const d=l.apply(t,o);return a?jn(d):d}let u=n;s!==t&&(a?u=function(d,f){return n.call(this,Er(t,d),f,t)}:n.length>2&&(u=function(d,f){return n.call(this,d,f,t)}));const c=l.call(s,u,i);return a&&r?r(c):c}function vp(t,e,n,i){const r=Bu(t);let o=n;return r!==t&&(In(t)?n.length>3&&(o=function(s,a,l){return n.call(this,s,a,l,t)}):o=function(s,a,l){return n.call(this,s,Er(t,a),l,t)}),r[e](o,...i)}function yc(t,e,n){const i=mt(t);fn(i,"iterate",ia);const r=i[e](...n);return(r===-1||r===!1)&&ku(n[0])?(n[0]=mt(n[0]),i[e](...n)):r}function bs(t,e,n=[]){ji(),dh();const i=mt(t)[e].apply(t,n);return fh(),Ji(),i}const Ox=ah("__proto__,__v_isRef,__isVue"),Rv=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Zn));function Bx(t){Zn(t)||(t=String(t));const e=mt(this);return fn(e,"has",t),e.hasOwnProperty(t)}class Iv{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,i){if(n==="__v_skip")return e.__v_skip;const r=this._isReadonly,o=this._isShallow;if(n==="__v_isReactive")return!r;if(n==="__v_isReadonly")return r;if(n==="__v_isShallow")return o;if(n==="__v_raw")return i===(r?o?qx:Lv:o?Dv:Nv).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const s=et(e);if(!r){let l;if(s&&(l=Fx[n]))return l;if(n==="hasOwnProperty")return Bx}const a=Reflect.get(e,n,Ut(e)?e:i);if((Zn(n)?Rv.has(n):Ox(n))||(r||fn(e,"get",n),o))return a;if(Ut(a)){const l=s&&Pu(n)?a:a.value;return r&&yt(l)?Ql(l):l}return yt(a)?r?Ql(a):Ur(a):a}}class Pv extends Iv{constructor(e=!1){super(!1,e)}set(e,n,i,r){let o=e[n];const s=et(e)&&Pu(n);if(!this._isShallow){const u=Qi(o);if(!In(i)&&!Qi(i)&&(o=mt(o),i=mt(i)),!s&&Ut(o)&&!Ut(i))return u||(o.value=i),!0}const a=s?Number(n)<e.length:xt(e,n),l=Reflect.set(e,n,i,Ut(e)?e:r);return e===mt(r)&&(a?Xi(i,o)&&ki(e,"set",n,i):ki(e,"add",n,i)),l}deleteProperty(e,n){const i=xt(e,n);e[n];const r=Reflect.deleteProperty(e,n);return r&&i&&ki(e,"delete",n,void 0),r}has(e,n){const i=Reflect.has(e,n);return(!Zn(n)||!Rv.has(n))&&fn(e,"has",n),i}ownKeys(e){return fn(e,"iterate",et(e)?"length":mo),Reflect.ownKeys(e)}}class kx extends Iv{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const zx=new Pv,Vx=new kx,$x=new Pv(!0);const Ad=t=>t,$a=t=>Reflect.getPrototypeOf(t);function Hx(t,e,n){return function(...i){const r=this.__v_raw,o=mt(r),s=Zo(o),a=t==="entries"||t===Symbol.iterator&&s,l=t==="keys"&&s,u=r[t](...i),c=n?Ad:e?ss:jn;return!e&&fn(o,"iterate",l?Td:mo),qt(Object.create(u),{next(){const{value:d,done:f}=u.next();return f?{value:d,done:f}:{value:a?[c(d[0]),c(d[1])]:c(d),done:f}}})}}function Ha(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function Gx(t,e){const n={get(r){const o=this.__v_raw,s=mt(o),a=mt(r);t||(Xi(r,a)&&fn(s,"get",r),fn(s,"get",a));const{has:l}=$a(s),u=e?Ad:t?ss:jn;if(l.call(s,r))return u(o.get(r));if(l.call(s,a))return u(o.get(a));o!==s&&o.get(r)},get size(){const r=this.__v_raw;return!t&&fn(mt(r),"iterate",mo),r.size},has(r){const o=this.__v_raw,s=mt(o),a=mt(r);return t||(Xi(r,a)&&fn(s,"has",r),fn(s,"has",a)),r===a?o.has(r):o.has(r)||o.has(a)},forEach(r,o){const s=this,a=s.__v_raw,l=mt(a),u=e?Ad:t?ss:jn;return!t&&fn(l,"iterate",mo),a.forEach((c,d)=>r.call(o,u(c),u(d),s))}};return qt(n,t?{add:Ha("add"),set:Ha("set"),delete:Ha("delete"),clear:Ha("clear")}:{add(r){!e&&!In(r)&&!Qi(r)&&(r=mt(r));const o=mt(this);return $a(o).has.call(o,r)||(o.add(r),ki(o,"add",r,r)),this},set(r,o){!e&&!In(o)&&!Qi(o)&&(o=mt(o));const s=mt(this),{has:a,get:l}=$a(s);let u=a.call(s,r);u||(r=mt(r),u=a.call(s,r));const c=l.call(s,r);return s.set(r,o),u?Xi(o,c)&&ki(s,"set",r,o):ki(s,"add",r,o),this},delete(r){const o=mt(this),{has:s,get:a}=$a(o);let l=s.call(o,r);l||(r=mt(r),l=s.call(o,r)),a&&a.call(o,r);const u=o.delete(r);return l&&ki(o,"delete",r,void 0),u},clear(){const r=mt(this),o=r.size!==0,s=r.clear();return o&&ki(r,"clear",void 0,void 0),s}}),["keys","values","entries",Symbol.iterator].forEach(r=>{n[r]=Hx(r,t,e)}),n}function ph(t,e){const n=Gx(t,e);return(i,r,o)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?i:Reflect.get(xt(n,r)&&r in i?n:i,r,o)}const Wx={get:ph(!1,!1)},Xx={get:ph(!1,!0)},Yx={get:ph(!0,!1)};const Nv=new WeakMap,Dv=new WeakMap,Lv=new WeakMap,qx=new WeakMap;function Kx(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Zx(t){return t.__v_skip||!Object.isExtensible(t)?0:Kx(yx(t))}function Ur(t){return Qi(t)?t:mh(t,!1,zx,Wx,Nv)}function jx(t){return mh(t,!1,$x,Xx,Dv)}function Ql(t){return mh(t,!0,Vx,Yx,Lv)}function mh(t,e,n,i,r){if(!yt(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const o=Zx(t);if(o===0)return t;const s=r.get(t);if(s)return s;const a=new Proxy(t,o===2?i:n);return r.set(t,a),a}function Yi(t){return Qi(t)?Yi(t.__v_raw):!!(t&&t.__v_isReactive)}function Qi(t){return!!(t&&t.__v_isReadonly)}function In(t){return!!(t&&t.__v_isShallow)}function ku(t){return t?!!t.__v_raw:!1}function mt(t){const e=t&&t.__v_raw;return e?mt(e):t}function go(t){return!xt(t,"__v_skip")&&Object.isExtensible(t)&&gv(t,"__v_skip",!0),t}const jn=t=>yt(t)?Ur(t):t,ss=t=>yt(t)?Ql(t):t;function Ut(t){return t?t.__v_isRef===!0:!1}function Ie(t){return Fv(t,!1)}function Nr(t){return Fv(t,!0)}function Fv(t,e){return Ut(t)?t:new Jx(t,e)}class Jx{constructor(e,n){this.dep=new Ou,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:mt(e),this._value=n?e:jn(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,i=this.__v_isShallow||In(e)||Qi(e);e=i?e:mt(e),Xi(e,n)&&(this._rawValue=e,this._value=i?e:jn(e),this.dep.trigger())}}function fe(t){return Ut(t)?t.value:t}function ht(t){return nt(t)?t():fe(t)}const Qx={get:(t,e,n)=>e==="__v_raw"?t:fe(Reflect.get(t,e,n)),set:(t,e,n,i)=>{const r=t[e];return Ut(r)&&!Ut(n)?(r.value=n,!0):Reflect.set(t,e,n,i)}};function Uv(t){return Yi(t)?t:new Proxy(t,Qx)}class eb{constructor(e){this.__v_isRef=!0,this._value=void 0;const n=this.dep=new Ou,{get:i,set:r}=e(n.track.bind(n),n.trigger.bind(n));this._get=i,this._set=r}get value(){return this._value=this._get()}set value(e){this._set(e)}}function tb(t){return new eb(t)}function Ov(t){const e=et(t)?new Array(t.length):{};for(const n in t)e[n]=Bv(t,n);return e}class nb{constructor(e,n,i){this._object=e,this._key=n,this._defaultValue=i,this.__v_isRef=!0,this._value=void 0,this._raw=mt(e);let r=!0,o=e;if(!et(e)||!Pu(String(n)))do r=!ku(o)||In(o);while(r&&(o=o.__v_raw));this._shallow=r}get value(){let e=this._object[this._key];return this._shallow&&(e=fe(e)),this._value=e===void 0?this._defaultValue:e}set value(e){if(this._shallow&&Ut(this._raw[this._key])){const n=this._object[this._key];if(Ut(n)){n.value=e;return}}this._object[this._key]=e}get dep(){return Lx(this._raw,this._key)}}class ib{constructor(e){this._getter=e,this.__v_isRef=!0,this.__v_isReadonly=!0,this._value=void 0}get value(){return this._value=this._getter()}}function bt(t,e,n){return Ut(t)?t:nt(t)?new ib(t):yt(t)&&arguments.length>1?Bv(t,e,n):Ie(t)}function Bv(t,e,n){return new nb(t,e,n)}class rb{constructor(e,n,i){this.fn=e,this.setter=n,this._value=void 0,this.dep=new Ou(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=na-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&Ft!==this)return Mv(this,!0),!0}get value(){const e=this.dep.track();return Tv(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function ob(t,e,n=!1){let i,r;return nt(t)?i=t:(i=t.get,r=t.set),new rb(i,r,n)}const Ga={},eu=new WeakMap;let no;function sb(t,e=!1,n=no){if(n){let i=eu.get(n);i||eu.set(n,i=[]),i.push(t)}}function ab(t,e,n=Pt){const{immediate:i,deep:r,once:o,scheduler:s,augmentJob:a,call:l}=n,u=_=>r?_:In(_)||r===!1||r===0?zi(_,1):zi(_);let c,d,f,h,m=!1,v=!1;if(Ut(t)?(d=()=>t.value,m=In(t)):Yi(t)?(d=()=>u(t),m=!0):et(t)?(v=!0,m=t.some(_=>Yi(_)||In(_)),d=()=>t.map(_=>{if(Ut(_))return _.value;if(Yi(_))return u(_);if(nt(_))return l?l(_,2):_()})):nt(t)?e?d=l?()=>l(t,2):t:d=()=>{if(f){ji();try{f()}finally{Ji()}}const _=no;no=c;try{return l?l(t,3,[h]):t(h)}finally{no=_}}:d=gi,e&&r){const _=d,P=r===!0?1/0:r;d=()=>zi(_(),P)}const g=Uu(),p=()=>{c.stop(),g&&g.active&&uh(g.effects,c)};if(o&&e){const _=e;e=(...P)=>{_(...P),p()}}let b=v?new Array(t.length).fill(Ga):Ga;const M=_=>{if(!(!(c.flags&1)||!c.dirty&&!_))if(e){const P=c.run();if(r||m||(v?P.some((D,B)=>Xi(D,b[B])):Xi(P,b))){f&&f();const D=no;no=c;try{const B=[P,b===Ga?void 0:v&&b[0]===Ga?[]:b,h];b=P,l?l(e,3,B):e(...B)}finally{no=D}}}else c.run()};return a&&a(M),c=new bv(d),c.scheduler=s?()=>s(M,!1):M,h=_=>sb(_,!1,c),f=c.onStop=()=>{const _=eu.get(c);if(_){if(l)l(_,4);else for(const P of _)P();eu.delete(c)}},e?i?M(!0):b=c.run():s?s(M.bind(null,!0),!0):c.run(),p.pause=c.pause.bind(c),p.resume=c.resume.bind(c),p.stop=p,p}function zi(t,e=1/0,n){if(e<=0||!yt(t)||t.__v_skip||(n=n||new Map,(n.get(t)||0)>=e))return t;if(n.set(t,e),e--,Ut(t))zi(t.value,e,n);else if(et(t))for(let i=0;i<t.length;i++)zi(t[i],e,n);else if(fv(t)||Zo(t))t.forEach(i=>{zi(i,e,n)});else if(mv(t)){for(const i in t)zi(t[i],e,n);for(const i of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,i)&&zi(t[i],e,n)}return t}function Ra(t,e,n,i){try{return i?t(...i):t()}catch(r){zu(r,e,n)}}function Jn(t,e,n,i){if(nt(t)){const r=Ra(t,e,n,i);return r&&hv(r)&&r.catch(o=>{zu(o,e,n)}),r}if(et(t)){const r=[];for(let o=0;o<t.length;o++)r.push(Jn(t[o],e,n,i));return r}}function zu(t,e,n,i=!0){const r=e?e.vnode:null,{errorHandler:o,throwUnhandledErrorInProduction:s}=e&&e.appContext.config||Pt;if(e){let a=e.parent;const l=e.proxy,u=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const c=a.ec;if(c){for(let d=0;d<c.length;d++)if(c[d](t,l,u)===!1)return}a=a.parent}if(o){ji(),Ra(o,null,10,[t,l,u]),Ji();return}}lb(t,n,r,i,s)}function lb(t,e,n,i=!0,r=!1){if(r)throw t;console.error(t)}const _n=[];let si=-1;const jo=[];let Tr=null,qo=0;const kv=Promise.resolve();let tu=null;function rn(t){const e=tu||kv;return t?e.then(this?t.bind(this):t):e}function ub(t){let e=si+1,n=_n.length;for(;e<n;){const i=e+n>>>1,r=_n[i],o=ra(r);o<t||o===t&&r.flags&2?e=i+1:n=i}return e}function gh(t){if(!(t.flags&1)){const e=ra(t),n=_n[_n.length-1];!n||!(t.flags&2)&&e>=ra(n)?_n.push(t):_n.splice(ub(e),0,t),t.flags|=1,zv()}}function zv(){tu||(tu=kv.then($v))}function cb(t){et(t)?jo.push(...t):Tr&&t.id===-1?Tr.splice(qo+1,0,t):t.flags&1||(jo.push(t),t.flags|=1),zv()}function _p(t,e,n=si+1){for(;n<_n.length;n++){const i=_n[n];if(i&&i.flags&2){if(t&&i.id!==t.uid)continue;_n.splice(n,1),n--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function Vv(t){if(jo.length){const e=[...new Set(jo)].sort((n,i)=>ra(n)-ra(i));if(jo.length=0,Tr){Tr.push(...e);return}for(Tr=e,qo=0;qo<Tr.length;qo++){const n=Tr[qo];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Tr=null,qo=0}}const ra=t=>t.id==null?t.flags&2?-1:1/0:t.id;function $v(t){try{for(si=0;si<_n.length;si++){const e=_n[si];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Ra(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;si<_n.length;si++){const e=_n[si];e&&(e.flags&=-2)}si=-1,_n.length=0,Vv(),tu=null,(_n.length||jo.length)&&$v()}}let tn=null,Hv=null;function nu(t){const e=tn;return tn=t,Hv=t&&t.type.__scopeId||null,e}function dn(t,e=tn,n){if(!e||t._n)return t;const i=(...r)=>{i._d&&ou(-1);const o=nu(e);let s;try{s=t(...r)}finally{nu(o),i._d&&ou(1)}return s};return i._n=!0,i._c=!0,i._d=!0,i}function Dr(t,e){if(tn===null)return t;const n=Xu(tn),i=t.dirs||(t.dirs=[]);for(let r=0;r<e.length;r++){let[o,s,a,l=Pt]=e[r];o&&(nt(o)&&(o={mounted:o,updated:o}),o.deep&&zi(s),i.push({dir:o,instance:n,value:s,oldValue:void 0,arg:a,modifiers:l}))}return t}function Xr(t,e,n,i){const r=t.dirs,o=e&&e.dirs;for(let s=0;s<r.length;s++){const a=r[s];o&&(a.oldValue=o[s].value);let l=a.dir[i];l&&(ji(),Jn(l,n,8,[t.el,a,t,e]),Ji())}}function Or(t,e){if(pn){let n=pn.provides;const i=pn.parent&&pn.parent.provides;i===n&&(n=pn.provides=Object.create(i)),n[t]=e}}function Pn(t,e,n=!1){const i=Mi();if(i||vo){let r=vo?vo._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(r&&t in r)return r[t];if(arguments.length>1)return n&&nt(e)?e.call(i&&i.proxy):e}}function db(){return!!(Mi()||vo)}const fb=Symbol.for("v-scx"),hb=()=>Pn(fb);function Gv(t,e){return vh(t,null,e)}function lt(t,e,n){return vh(t,e,n)}function vh(t,e,n=Pt){const{immediate:i,deep:r,flush:o,once:s}=n,a=qt({},n),l=e&&i||!e&&o!=="post";let u;if(la){if(o==="sync"){const h=hb();u=h.__watcherHandles||(h.__watcherHandles=[])}else if(!l){const h=()=>{};return h.stop=gi,h.resume=gi,h.pause=gi,h}}const c=pn;a.call=(h,m,v)=>Jn(h,c,m,v);let d=!1;o==="post"?a.scheduler=h=>{un(h,c&&c.suspense)}:o!=="sync"&&(d=!0,a.scheduler=(h,m)=>{m?h():gh(h)}),a.augmentJob=h=>{e&&(h.flags|=4),d&&(h.flags|=2,c&&(h.id=c.uid,h.i=c))};const f=ab(t,e,a);return la&&(u?u.push(f):l&&f()),f}function pb(t,e,n){const i=this.proxy,r=Ot(t)?t.includes(".")?Wv(i,t):()=>i[t]:t.bind(i,i);let o;nt(e)?o=e:(o=e.handler,n=e);const s=Ia(this),a=vh(r,o.bind(i),n);return s(),a}function Wv(t,e){const n=e.split(".");return()=>{let i=t;for(let r=0;r<n.length&&i;r++)i=i[n[r]];return i}}const Xv=Symbol("_vte"),Yv=t=>t.__isTeleport,qs=t=>t&&(t.disabled||t.disabled===""),yp=t=>t&&(t.defer||t.defer===""),xp=t=>typeof SVGElement<"u"&&t instanceof SVGElement,bp=t=>typeof MathMLElement=="function"&&t instanceof MathMLElement,Cd=(t,e)=>{const n=t&&t.to;return Ot(n)?e?e(n):null:n},qv={name:"Teleport",__isTeleport:!0,process(t,e,n,i,r,o,s,a,l,u){const{mc:c,pc:d,pbc:f,o:{insert:h,querySelector:m,createText:v,createComment:g}}=u,p=qs(e.props);let{shapeFlag:b,children:M,dynamicChildren:_}=e;if(t==null){const P=e.el=v(""),D=e.anchor=v("");h(P,n,i),h(D,n,i);const B=(x,T)=>{b&16&&c(M,x,T,r,o,s,a,l)},y=()=>{const x=e.target=Cd(e.props,m),T=Rd(x,e,v,h);x&&(s!=="svg"&&xp(x)?s="svg":s!=="mathml"&&bp(x)&&(s="mathml"),r&&r.isCE&&(r.ce._teleportTargets||(r.ce._teleportTargets=new Set)).add(x),p||(B(x,T),Nl(e,!1)))};p&&(B(n,D),Nl(e,!0)),yp(e.props)?(e.el.__isMounted=!1,un(()=>{y(),delete e.el.__isMounted},o)):y()}else{if(yp(e.props)&&t.el.__isMounted===!1){un(()=>{qv.process(t,e,n,i,r,o,s,a,l,u)},o);return}e.el=t.el,e.targetStart=t.targetStart;const P=e.anchor=t.anchor,D=e.target=t.target,B=e.targetAnchor=t.targetAnchor,y=qs(t.props),x=y?n:D,T=y?P:B;if(s==="svg"||xp(D)?s="svg":(s==="mathml"||bp(D))&&(s="mathml"),_?(f(t.dynamicChildren,_,x,r,o,s,a),Sh(t,e,!0)):l||d(t,e,x,T,r,o,s,a,!1),p)y?e.props&&t.props&&e.props.to!==t.props.to&&(e.props.to=t.props.to):Wa(e,n,P,u,1);else if((e.props&&e.props.to)!==(t.props&&t.props.to)){const E=e.target=Cd(e.props,m);E&&Wa(e,E,null,u,0)}else y&&Wa(e,D,B,u,1);Nl(e,p)}},remove(t,e,n,{um:i,o:{remove:r}},o){const{shapeFlag:s,children:a,anchor:l,targetStart:u,targetAnchor:c,target:d,props:f}=t;if(d&&(r(u),r(c)),o&&r(l),s&16){const h=o||!qs(f);for(let m=0;m<a.length;m++){const v=a[m];i(v,e,n,h,!!v.dynamicChildren)}}},move:Wa,hydrate:mb};function Wa(t,e,n,{o:{insert:i},m:r},o=2){o===0&&i(t.targetAnchor,e,n);const{el:s,anchor:a,shapeFlag:l,children:u,props:c}=t,d=o===2;if(d&&i(s,e,n),(!d||qs(c))&&l&16)for(let f=0;f<u.length;f++)r(u[f],e,n,2);d&&i(a,e,n)}function mb(t,e,n,i,r,o,{o:{nextSibling:s,parentNode:a,querySelector:l,insert:u,createText:c}},d){function f(g,p){let b=p;for(;b;){if(b&&b.nodeType===8){if(b.data==="teleport start anchor")e.targetStart=b;else if(b.data==="teleport anchor"){e.targetAnchor=b,g._lpa=e.targetAnchor&&s(e.targetAnchor);break}}b=s(b)}}function h(g,p){p.anchor=d(s(g),p,a(g),n,i,r,o)}const m=e.target=Cd(e.props,l),v=qs(e.props);if(m){const g=m._lpa||m.firstChild;e.shapeFlag&16&&(v?(h(t,e),f(m,g),e.targetAnchor||Rd(m,e,c,u,a(t)===m?t:null)):(e.anchor=s(t),f(m,g),e.targetAnchor||Rd(m,e,c,u),d(g&&s(g),e,m,n,i,r,o))),Nl(e,v)}else v&&e.shapeFlag&16&&(h(t,e),e.targetStart=t,e.targetAnchor=s(t));return e.anchor&&s(e.anchor)}const _h=qv;function Nl(t,e){const n=t.ctx;if(n&&n.ut){let i,r;for(e?(i=t.el,r=t.anchor):(i=t.targetStart,r=t.targetAnchor);i&&i!==r;)i.nodeType===1&&i.setAttribute("data-v-owner",n.uid),i=i.nextSibling;n.ut()}}function Rd(t,e,n,i,r=null){const o=e.targetStart=n(""),s=e.targetAnchor=n("");return o[Xv]=s,t&&(i(o,t,r),i(s,t,r)),s}const ai=Symbol("_leaveCb"),Ss=Symbol("_enterCb");function gb(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return mn(()=>{t.isMounted=!0}),lr(()=>{t.isUnmounting=!0}),t}const Fn=[Function,Array],Kv={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Fn,onEnter:Fn,onAfterEnter:Fn,onEnterCancelled:Fn,onBeforeLeave:Fn,onLeave:Fn,onAfterLeave:Fn,onLeaveCancelled:Fn,onBeforeAppear:Fn,onAppear:Fn,onAfterAppear:Fn,onAppearCancelled:Fn},Zv=t=>{const e=t.subTree;return e.component?Zv(e.component):e},vb={name:"BaseTransition",props:Kv,setup(t,{slots:e}){const n=Mi(),i=gb();return()=>{const r=e.default&&Qv(e.default(),!0);if(!r||!r.length)return;const o=jv(r),s=mt(t),{mode:a}=s;if(i.isLeaving)return xc(o);const l=Sp(o);if(!l)return xc(o);let u=Id(l,s,i,n,d=>u=d);l.type!==hn&&oa(l,u);let c=n.subTree&&Sp(n.subTree);if(c&&c.type!==hn&&!ro(c,l)&&Zv(n).type!==hn){let d=Id(c,s,i,n);if(oa(c,d),a==="out-in"&&l.type!==hn)return i.isLeaving=!0,d.afterLeave=()=>{i.isLeaving=!1,n.job.flags&8||n.update(),delete d.afterLeave,c=void 0},xc(o);a==="in-out"&&l.type!==hn?d.delayLeave=(f,h,m)=>{const v=Jv(i,c);v[String(c.key)]=c,f[ai]=()=>{h(),f[ai]=void 0,delete u.delayedLeave,c=void 0},u.delayedLeave=()=>{m(),delete u.delayedLeave,c=void 0}}:c=void 0}else c&&(c=void 0);return o}}};function jv(t){let e=t[0];if(t.length>1){for(const n of t)if(n.type!==hn){e=n;break}}return e}const _b=vb;function Jv(t,e){const{leavingVNodes:n}=t;let i=n.get(e.type);return i||(i=Object.create(null),n.set(e.type,i)),i}function Id(t,e,n,i,r){const{appear:o,mode:s,persisted:a=!1,onBeforeEnter:l,onEnter:u,onAfterEnter:c,onEnterCancelled:d,onBeforeLeave:f,onLeave:h,onAfterLeave:m,onLeaveCancelled:v,onBeforeAppear:g,onAppear:p,onAfterAppear:b,onAppearCancelled:M}=e,_=String(t.key),P=Jv(n,t),D=(x,T)=>{x&&Jn(x,i,9,T)},B=(x,T)=>{const E=T[1];D(x,T),et(x)?x.every(I=>I.length<=1)&&E():x.length<=1&&E()},y={mode:s,persisted:a,beforeEnter(x){let T=l;if(!n.isMounted)if(o)T=g||l;else return;x[ai]&&x[ai](!0);const E=P[_];E&&ro(t,E)&&E.el[ai]&&E.el[ai](),D(T,[x])},enter(x){if(P[_]===t)return;let T=u,E=c,I=d;if(!n.isMounted)if(o)T=p||u,E=b||c,I=M||d;else return;let q=!1;x[Ss]=k=>{q||(q=!0,k?D(I,[x]):D(E,[x]),y.delayedLeave&&y.delayedLeave(),x[Ss]=void 0)};const w=x[Ss].bind(null,!1);T?B(T,[x,w]):w()},leave(x,T){const E=String(t.key);if(x[Ss]&&x[Ss](!0),n.isUnmounting)return T();D(f,[x]);let I=!1;x[ai]=w=>{I||(I=!0,T(),w?D(v,[x]):D(m,[x]),x[ai]=void 0,P[E]===t&&delete P[E])};const q=x[ai].bind(null,!1);P[E]=t,h?B(h,[x,q]):q()},clone(x){const T=Id(x,e,n,i,r);return r&&r(T),T}};return y}function xc(t){if(Vu(t))return t=Br(t),t.children=null,t}function Sp(t){if(!Vu(t))return Yv(t.type)&&t.children?jv(t.children):t;if(t.component)return t.component.subTree;const{shapeFlag:e,children:n}=t;if(n){if(e&16)return n[0];if(e&32&&nt(n.default))return n.default()}}function oa(t,e){t.shapeFlag&6&&t.component?(t.transition=e,oa(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Qv(t,e=!1,n){let i=[],r=0;for(let o=0;o<t.length;o++){let s=t[o];const a=n==null?s.key:String(n)+String(s.key!=null?s.key:o);s.type===it?(s.patchFlag&128&&r++,i=i.concat(Qv(s.children,e,a))):(e||s.type!==hn)&&i.push(a!=null?Br(s,{key:a}):s)}if(r>1)for(let o=0;o<i.length;o++)i[o].patchFlag=-2;return i}function Nt(t,e){return nt(t)?qt({name:t.name},e,{setup:t}):t}function e0(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function Mp(t,e){let n;return!!((n=Object.getOwnPropertyDescriptor(t,e))&&!n.configurable)}const iu=new WeakMap;function Ks(t,e,n,i,r=!1){if(et(t)){t.forEach((v,g)=>Ks(v,e&&(et(e)?e[g]:e),n,i,r));return}if(Jo(i)&&!r){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&Ks(t,e,n,i.component.subTree);return}const o=i.shapeFlag&4?Xu(i.component):i.el,s=r?null:o,{i:a,r:l}=t,u=e&&e.r,c=a.refs===Pt?a.refs={}:a.refs,d=a.setupState,f=mt(d),h=d===Pt?dv:v=>Mp(c,v)?!1:xt(f,v),m=(v,g)=>!(g&&Mp(c,g));if(u!=null&&u!==l){if(wp(e),Ot(u))c[u]=null,h(u)&&(d[u]=null);else if(Ut(u)){const v=e;m(u,v.k)&&(u.value=null),v.k&&(c[v.k]=null)}}if(nt(l))Ra(l,a,12,[s,c]);else{const v=Ot(l),g=Ut(l);if(v||g){const p=()=>{if(t.f){const b=v?h(l)?d[l]:c[l]:m()||!t.k?l.value:c[t.k];if(r)et(b)&&uh(b,o);else if(et(b))b.includes(o)||b.push(o);else if(v)c[l]=[o],h(l)&&(d[l]=c[l]);else{const M=[o];m(l,t.k)&&(l.value=M),t.k&&(c[t.k]=M)}}else v?(c[l]=s,h(l)&&(d[l]=s)):g&&(m(l,t.k)&&(l.value=s),t.k&&(c[t.k]=s))};if(s){const b=()=>{p(),iu.delete(t)};b.id=-1,iu.set(t,b),un(b,n)}else wp(t),p()}}}function wp(t){const e=iu.get(t);e&&(e.flags|=8,iu.delete(t))}Lu().requestIdleCallback;Lu().cancelIdleCallback;const Jo=t=>!!t.type.__asyncLoader,Vu=t=>t.type.__isKeepAlive;function yb(t,e){t0(t,"a",e)}function xb(t,e){t0(t,"da",e)}function t0(t,e,n=pn){const i=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if($u(e,i,n),n){let r=n.parent;for(;r&&r.parent;)Vu(r.parent.vnode)&&bb(i,e,n,r),r=r.parent}}function bb(t,e,n,i){const r=$u(e,t,i,!0);Hu(()=>{uh(i[e],r)},n)}function $u(t,e,n=pn,i=!1){if(n){const r=n[t]||(n[t]=[]),o=e.__weh||(e.__weh=(...s)=>{ji();const a=Ia(n),l=Jn(e,n,t,s);return a(),Ji(),l});return i?r.unshift(o):r.push(o),o}}const ar=t=>(e,n=pn)=>{(!la||t==="sp")&&$u(t,(...i)=>e(...i),n)},n0=ar("bm"),mn=ar("m"),Sb=ar("bu"),Mb=ar("u"),lr=ar("bum"),Hu=ar("um"),wb=ar("sp"),Eb=ar("rtg"),Tb=ar("rtc");function Ab(t,e=pn){$u("ec",t,e)}const i0="components";function r0(t,e){return a0(i0,t,!0,e)||t}const o0=Symbol.for("v-ndc");function s0(t){return Ot(t)?a0(i0,t,!1)||t:t||o0}function a0(t,e,n=!0,i=!1){const r=tn||pn;if(r){const o=r.type;{const a=d1(o,!1);if(a&&(a===e||a===Bn(e)||a===Du(Bn(e))))return o}const s=Ep(r[t]||o[t],e)||Ep(r.appContext[t],e);return!s&&i?o:s}}function Ep(t,e){return t&&(t[e]||t[Bn(e)]||t[Du(Bn(e))])}function Ht(t,e,n,i){let r;const o=n&&n[i],s=et(t);if(s||Ot(t)){const a=s&&Yi(t);let l=!1,u=!1;a&&(l=!In(t),u=Qi(t),t=Bu(t)),r=new Array(t.length);for(let c=0,d=t.length;c<d;c++)r[c]=e(l?u?ss(jn(t[c])):jn(t[c]):t[c],c,void 0,o&&o[c])}else if(typeof t=="number"){r=new Array(t);for(let a=0;a<t;a++)r[a]=e(a+1,a,void 0,o&&o[a])}else if(yt(t))if(t[Symbol.iterator])r=Array.from(t,(a,l)=>e(a,l,void 0,o&&o[l]));else{const a=Object.keys(t);r=new Array(a.length);for(let l=0,u=a.length;l<u;l++){const c=a[l];r[l]=e(t[c],c,l,o&&o[l])}}else r=[];return n&&(n[i]=r),r}function Cb(t,e){for(let n=0;n<e.length;n++){const i=e[n];if(et(i))for(let r=0;r<i.length;r++)t[i[r].name]=i[r].fn;else i&&(t[i.name]=i.key?(...r)=>{const o=i.fn(...r);return o&&(o.key=i.key),o}:i.fn)}return t}function er(t,e,n={},i,r){if(tn.ce||tn.parent&&Jo(tn.parent)&&tn.parent.ce){const u=Object.keys(n).length>0;return e!=="default"&&(n.name=e),ce(),Qt(it,null,[tt("slot",n,i&&i())],u?-2:64)}let o=t[e];o&&o._c&&(o._d=!1),ce();const s=o&&l0(o(n)),a=n.key||s&&s.key,l=Qt(it,{key:(a&&!Zn(a)?a:`_${e}`)+(!s&&i?"_fb":"")},s||(i?i():[]),s&&t._===1?64:-2);return l.scopeId&&(l.slotScopeIds=[l.scopeId+"-s"]),o&&o._c&&(o._d=!0),l}function l0(t){return t.some(e=>sa(e)?!(e.type===hn||e.type===it&&!l0(e.children)):!0)?t:null}const Pd=t=>t?R0(t)?Xu(t):Pd(t.parent):null,Zs=qt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Pd(t.parent),$root:t=>Pd(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>f0(t),$forceUpdate:t=>t.f||(t.f=()=>{gh(t.update)}),$nextTick:t=>t.n||(t.n=rn.bind(t.proxy)),$watch:t=>pb.bind(t)}),bc=(t,e)=>t!==Pt&&!t.__isScriptSetup&&xt(t,e),Rb={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:i,data:r,props:o,accessCache:s,type:a,appContext:l}=t;if(e[0]!=="$"){const f=s[e];if(f!==void 0)switch(f){case 1:return i[e];case 2:return r[e];case 4:return n[e];case 3:return o[e]}else{if(bc(i,e))return s[e]=1,i[e];if(r!==Pt&&xt(r,e))return s[e]=2,r[e];if(xt(o,e))return s[e]=3,o[e];if(n!==Pt&&xt(n,e))return s[e]=4,n[e];Nd&&(s[e]=0)}}const u=Zs[e];let c,d;if(u)return e==="$attrs"&&fn(t.attrs,"get",""),u(t);if((c=a.__cssModules)&&(c=c[e]))return c;if(n!==Pt&&xt(n,e))return s[e]=4,n[e];if(d=l.config.globalProperties,xt(d,e))return d[e]},set({_:t},e,n){const{data:i,setupState:r,ctx:o}=t;return bc(r,e)?(r[e]=n,!0):i!==Pt&&xt(i,e)?(i[e]=n,!0):xt(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(o[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:i,appContext:r,props:o,type:s}},a){let l;return!!(n[a]||t!==Pt&&a[0]!=="$"&&xt(t,a)||bc(e,a)||xt(o,a)||xt(i,a)||xt(Zs,a)||xt(r.config.globalProperties,a)||(l=s.__cssModules)&&l[a])},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:xt(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function u0(){return c0().slots}function yh(){return c0().attrs}function c0(t){const e=Mi();return e.setupContext||(e.setupContext=P0(e))}function Tp(t){return et(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}function Ib(t,e){const n={};for(const i in t)e.includes(i)||Object.defineProperty(n,i,{enumerable:!0,get:()=>t[i]});return n}let Nd=!0;function Pb(t){const e=f0(t),n=t.proxy,i=t.ctx;Nd=!1,e.beforeCreate&&Ap(e.beforeCreate,t,"bc");const{data:r,computed:o,methods:s,watch:a,provide:l,inject:u,created:c,beforeMount:d,mounted:f,beforeUpdate:h,updated:m,activated:v,deactivated:g,beforeDestroy:p,beforeUnmount:b,destroyed:M,unmounted:_,render:P,renderTracked:D,renderTriggered:B,errorCaptured:y,serverPrefetch:x,expose:T,inheritAttrs:E,components:I,directives:q,filters:w}=e;if(u&&Nb(u,i,null),s)for(const N in s){const O=s[N];nt(O)&&(i[N]=O.bind(n))}if(r){const N=r.call(n,n);yt(N)&&(t.data=Ur(N))}if(Nd=!0,o)for(const N in o){const O=o[N],$=nt(O)?O.bind(n,n):nt(O.get)?O.get.bind(n,n):gi,K=!nt(O)&&nt(O.set)?O.set.bind(n):gi,te=Re({get:$,set:K});Object.defineProperty(i,N,{enumerable:!0,configurable:!0,get:()=>te.value,set:ne=>te.value=ne})}if(a)for(const N in a)d0(a[N],i,n,N);if(l){const N=nt(l)?l.call(n):l;Reflect.ownKeys(N).forEach(O=>{Or(O,N[O])})}c&&Ap(c,t,"c");function A(N,O){et(O)?O.forEach($=>N($.bind(n))):O&&N(O.bind(n))}if(A(n0,d),A(mn,f),A(Sb,h),A(Mb,m),A(yb,v),A(xb,g),A(Ab,y),A(Tb,D),A(Eb,B),A(lr,b),A(Hu,_),A(wb,x),et(T))if(T.length){const N=t.exposed||(t.exposed={});T.forEach(O=>{Object.defineProperty(N,O,{get:()=>n[O],set:$=>n[O]=$,enumerable:!0})})}else t.exposed||(t.exposed={});P&&t.render===gi&&(t.render=P),E!=null&&(t.inheritAttrs=E),I&&(t.components=I),q&&(t.directives=q),x&&e0(t)}function Nb(t,e,n=gi){et(t)&&(t=Dd(t));for(const i in t){const r=t[i];let o;yt(r)?"default"in r?o=Pn(r.from||i,r.default,!0):o=Pn(r.from||i):o=Pn(r),Ut(o)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>o.value,set:s=>o.value=s}):e[i]=o}}function Ap(t,e,n){Jn(et(t)?t.map(i=>i.bind(e.proxy)):t.bind(e.proxy),e,n)}function d0(t,e,n,i){let r=i.includes(".")?Wv(n,i):()=>n[i];if(Ot(t)){const o=e[t];nt(o)&&lt(r,o)}else if(nt(t))lt(r,t.bind(n));else if(yt(t))if(et(t))t.forEach(o=>d0(o,e,n,i));else{const o=nt(t.handler)?t.handler.bind(n):e[t.handler];nt(o)&&lt(r,o,t)}}function f0(t){const e=t.type,{mixins:n,extends:i}=e,{mixins:r,optionsCache:o,config:{optionMergeStrategies:s}}=t.appContext,a=o.get(e);let l;return a?l=a:!r.length&&!n&&!i?l=e:(l={},r.length&&r.forEach(u=>ru(l,u,s,!0)),ru(l,e,s)),yt(e)&&o.set(e,l),l}function ru(t,e,n,i=!1){const{mixins:r,extends:o}=e;o&&ru(t,o,n,!0),r&&r.forEach(s=>ru(t,s,n,!0));for(const s in e)if(!(i&&s==="expose")){const a=Db[s]||n&&n[s];t[s]=a?a(t[s],e[s]):e[s]}return t}const Db={data:Cp,props:Rp,emits:Rp,methods:Us,computed:Us,beforeCreate:gn,created:gn,beforeMount:gn,mounted:gn,beforeUpdate:gn,updated:gn,beforeDestroy:gn,beforeUnmount:gn,destroyed:gn,unmounted:gn,activated:gn,deactivated:gn,errorCaptured:gn,serverPrefetch:gn,components:Us,directives:Us,watch:Fb,provide:Cp,inject:Lb};function Cp(t,e){return e?t?function(){return qt(nt(t)?t.call(this,this):t,nt(e)?e.call(this,this):e)}:e:t}function Lb(t,e){return Us(Dd(t),Dd(e))}function Dd(t){if(et(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function gn(t,e){return t?[...new Set([].concat(t,e))]:e}function Us(t,e){return t?qt(Object.create(null),t,e):e}function Rp(t,e){return t?et(t)&&et(e)?[...new Set([...t,...e])]:qt(Object.create(null),Tp(t),Tp(e??{})):e}function Fb(t,e){if(!t)return e;if(!e)return t;const n=qt(Object.create(null),t);for(const i in e)n[i]=gn(t[i],e[i]);return n}function h0(){return{app:null,config:{isNativeTag:dv,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Ub=0;function Ob(t,e){return function(i,r=null){nt(i)||(i=qt({},i)),r!=null&&!yt(r)&&(r=null);const o=h0(),s=new WeakSet,a=[];let l=!1;const u=o.app={_uid:Ub++,_component:i,_props:r,_container:null,_context:o,_instance:null,version:p1,get config(){return o.config},set config(c){},use(c,...d){return s.has(c)||(c&&nt(c.install)?(s.add(c),c.install(u,...d)):nt(c)&&(s.add(c),c(u,...d))),u},mixin(c){return o.mixins.includes(c)||o.mixins.push(c),u},component(c,d){return d?(o.components[c]=d,u):o.components[c]},directive(c,d){return d?(o.directives[c]=d,u):o.directives[c]},mount(c,d,f){if(!l){const h=u._ceVNode||tt(i,r);return h.appContext=o,f===!0?f="svg":f===!1&&(f=void 0),t(h,c,f),l=!0,u._container=c,c.__vue_app__=u,Xu(h.component)}},onUnmount(c){a.push(c)},unmount(){l&&(Jn(a,u._instance,16),t(null,u._container),delete u._container.__vue_app__)},provide(c,d){return o.provides[c]=d,u},runWithContext(c){const d=vo;vo=u;try{return c()}finally{vo=d}}};return u}}let vo=null;const Bb=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${Bn(e)}Modifiers`]||t[`${Hr(e)}Modifiers`];function kb(t,e,...n){if(t.isUnmounted)return;const i=t.vnode.props||Pt;let r=n;const o=e.startsWith("update:"),s=o&&Bb(i,e.slice(7));s&&(s.trim&&(r=n.map(c=>Ot(c)?c.trim():c)),s.number&&(r=n.map(Sx)));let a,l=i[a=pc(e)]||i[a=pc(Bn(e))];!l&&o&&(l=i[a=pc(Hr(e))]),l&&Jn(l,t,6,r);const u=i[a+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Jn(u,t,6,r)}}const zb=new WeakMap;function p0(t,e,n=!1){const i=n?zb:e.emitsCache,r=i.get(t);if(r!==void 0)return r;const o=t.emits;let s={},a=!1;if(!nt(t)){const l=u=>{const c=p0(u,e,!0);c&&(a=!0,qt(s,c))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!o&&!a?(yt(t)&&i.set(t,null),null):(et(o)?o.forEach(l=>s[l]=null):qt(s,o),yt(t)&&i.set(t,s),s)}function Gu(t,e){return!t||!Iu(e)?!1:(e=e.slice(2).replace(/Once$/,""),xt(t,e[0].toLowerCase()+e.slice(1))||xt(t,Hr(e))||xt(t,e))}function Ip(t){const{type:e,vnode:n,proxy:i,withProxy:r,propsOptions:[o],slots:s,attrs:a,emit:l,render:u,renderCache:c,props:d,data:f,setupState:h,ctx:m,inheritAttrs:v}=t,g=nu(t);let p,b;try{if(n.shapeFlag&4){const _=r||i,P=_;p=ui(u.call(P,_,c,d,h,f,m)),b=a}else{const _=e;p=ui(_.length>1?_(d,{attrs:a,slots:s,emit:l}):_(d,null)),b=e.props?a:Vb(a)}}catch(_){js.length=0,zu(_,t,1),p=tt(hn)}let M=p;if(b&&v!==!1){const _=Object.keys(b),{shapeFlag:P}=M;_.length&&P&7&&(o&&_.some(lh)&&(b=$b(b,o)),M=Br(M,b,!1,!0))}return n.dirs&&(M=Br(M,null,!1,!0),M.dirs=M.dirs?M.dirs.concat(n.dirs):n.dirs),n.transition&&oa(M,n.transition),p=M,nu(g),p}const Vb=t=>{let e;for(const n in t)(n==="class"||n==="style"||Iu(n))&&((e||(e={}))[n]=t[n]);return e},$b=(t,e)=>{const n={};for(const i in t)(!lh(i)||!(i.slice(9)in e))&&(n[i]=t[i]);return n};function Hb(t,e,n){const{props:i,children:r,component:o}=t,{props:s,children:a,patchFlag:l}=e,u=o.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return i?Pp(i,s,u):!!s;if(l&8){const c=e.dynamicProps;for(let d=0;d<c.length;d++){const f=c[d];if(m0(s,i,f)&&!Gu(u,f))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:i===s?!1:i?s?Pp(i,s,u):!0:!!s;return!1}function Pp(t,e,n){const i=Object.keys(e);if(i.length!==Object.keys(t).length)return!0;for(let r=0;r<i.length;r++){const o=i[r];if(m0(e,t,o)&&!Gu(n,o))return!0}return!1}function m0(t,e,n){const i=t[n],r=e[n];return n==="style"&&yt(i)&&yt(r)?!ch(i,r):i!==r}function Gb({vnode:t,parent:e},n){for(;e;){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===t&&(i.el=t.el),i===t)(t=e.vnode).el=n,e=e.parent;else break}}const g0={},v0=()=>Object.create(g0),_0=t=>Object.getPrototypeOf(t)===g0;function Wb(t,e,n,i=!1){const r={},o=v0();t.propsDefaults=Object.create(null),y0(t,e,r,o);for(const s in t.propsOptions[0])s in r||(r[s]=void 0);n?t.props=i?r:jx(r):t.type.props?t.props=r:t.props=o,t.attrs=o}function Xb(t,e,n,i){const{props:r,attrs:o,vnode:{patchFlag:s}}=t,a=mt(r),[l]=t.propsOptions;let u=!1;if((i||s>0)&&!(s&16)){if(s&8){const c=t.vnode.dynamicProps;for(let d=0;d<c.length;d++){let f=c[d];if(Gu(t.emitsOptions,f))continue;const h=e[f];if(l)if(xt(o,f))h!==o[f]&&(o[f]=h,u=!0);else{const m=Bn(f);r[m]=Ld(l,a,m,h,t,!1)}else h!==o[f]&&(o[f]=h,u=!0)}}}else{y0(t,e,r,o)&&(u=!0);let c;for(const d in a)(!e||!xt(e,d)&&((c=Hr(d))===d||!xt(e,c)))&&(l?n&&(n[d]!==void 0||n[c]!==void 0)&&(r[d]=Ld(l,a,d,void 0,t,!0)):delete r[d]);if(o!==a)for(const d in o)(!e||!xt(e,d))&&(delete o[d],u=!0)}u&&ki(t.attrs,"set","")}function y0(t,e,n,i){const[r,o]=t.propsOptions;let s=!1,a;if(e)for(let l in e){if(Gs(l))continue;const u=e[l];let c;r&&xt(r,c=Bn(l))?!o||!o.includes(c)?n[c]=u:(a||(a={}))[c]=u:Gu(t.emitsOptions,l)||(!(l in i)||u!==i[l])&&(i[l]=u,s=!0)}if(o){const l=mt(n),u=a||Pt;for(let c=0;c<o.length;c++){const d=o[c];n[d]=Ld(r,l,d,u[d],t,!xt(u,d))}}return s}function Ld(t,e,n,i,r,o){const s=t[n];if(s!=null){const a=xt(s,"default");if(a&&i===void 0){const l=s.default;if(s.type!==Function&&!s.skipFactory&&nt(l)){const{propsDefaults:u}=r;if(n in u)i=u[n];else{const c=Ia(r);i=u[n]=l.call(null,e),c()}}else i=l;r.ce&&r.ce._setProp(n,i)}s[0]&&(o&&!a?i=!1:s[1]&&(i===""||i===Hr(n))&&(i=!0))}return i}const Yb=new WeakMap;function x0(t,e,n=!1){const i=n?Yb:e.propsCache,r=i.get(t);if(r)return r;const o=t.props,s={},a=[];let l=!1;if(!nt(t)){const c=d=>{l=!0;const[f,h]=x0(d,e,!0);qt(s,f),h&&a.push(...h)};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}if(!o&&!l)return yt(t)&&i.set(t,Ko),Ko;if(et(o))for(let c=0;c<o.length;c++){const d=Bn(o[c]);Np(d)&&(s[d]=Pt)}else if(o)for(const c in o){const d=Bn(c);if(Np(d)){const f=o[c],h=s[d]=et(f)||nt(f)?{type:f}:qt({},f),m=h.type;let v=!1,g=!0;if(et(m))for(let p=0;p<m.length;++p){const b=m[p],M=nt(b)&&b.name;if(M==="Boolean"){v=!0;break}else M==="String"&&(g=!1)}else v=nt(m)&&m.name==="Boolean";h[0]=v,h[1]=g,(v||xt(h,"default"))&&a.push(d)}}const u=[s,a];return yt(t)&&i.set(t,u),u}function Np(t){return t[0]!=="$"&&!Gs(t)}const xh=t=>t==="_"||t==="_ctx"||t==="$stable",bh=t=>et(t)?t.map(ui):[ui(t)],qb=(t,e,n)=>{if(e._n)return e;const i=dn((...r)=>bh(e(...r)),n);return i._c=!1,i},b0=(t,e,n)=>{const i=t._ctx;for(const r in t){if(xh(r))continue;const o=t[r];if(nt(o))e[r]=qb(r,o,i);else if(o!=null){const s=bh(o);e[r]=()=>s}}},S0=(t,e)=>{const n=bh(e);t.slots.default=()=>n},M0=(t,e,n)=>{for(const i in e)(n||!xh(i))&&(t[i]=e[i])},Kb=(t,e,n)=>{const i=t.slots=v0();if(t.vnode.shapeFlag&32){const r=e._;r?(M0(i,e,n),n&&gv(i,"_",r,!0)):b0(e,i)}else e&&S0(t,e)},Zb=(t,e,n)=>{const{vnode:i,slots:r}=t;let o=!0,s=Pt;if(i.shapeFlag&32){const a=e._;a?n&&a===1?o=!1:M0(r,e,n):(o=!e.$stable,b0(e,r)),s=e}else e&&(S0(t,e),s={default:1});if(o)for(const a in r)!xh(a)&&s[a]==null&&delete r[a]},un=t1;function jb(t){return Jb(t)}function Jb(t,e){const n=Lu();n.__VUE__=!0;const{insert:i,remove:r,patchProp:o,createElement:s,createText:a,createComment:l,setText:u,setElementText:c,parentNode:d,nextSibling:f,setScopeId:h=gi,insertStaticContent:m}=t,v=(H,X,L,F=null,z=null,J=null,C=void 0,ae=null,W=!!X.dynamicChildren)=>{if(H===X)return;H&&!ro(H,X)&&(F=U(H),ne(H,z,J,!0),H=null),X.patchFlag===-2&&(W=!1,X.dynamicChildren=null);const{type:j,ref:ee,shapeFlag:R}=X;switch(j){case Wu:g(H,X,L,F);break;case hn:p(H,X,L,F);break;case Mc:H==null&&b(X,L,F,C);break;case it:I(H,X,L,F,z,J,C,ae,W);break;default:R&1?P(H,X,L,F,z,J,C,ae,W):R&6?q(H,X,L,F,z,J,C,ae,W):(R&64||R&128)&&j.process(H,X,L,F,z,J,C,ae,W,xe)}ee!=null&&z?Ks(ee,H&&H.ref,J,X||H,!X):ee==null&&H&&H.ref!=null&&Ks(H.ref,null,J,H,!0)},g=(H,X,L,F)=>{if(H==null)i(X.el=a(X.children),L,F);else{const z=X.el=H.el;X.children!==H.children&&u(z,X.children)}},p=(H,X,L,F)=>{H==null?i(X.el=l(X.children||""),L,F):X.el=H.el},b=(H,X,L,F)=>{[H.el,H.anchor]=m(H.children,X,L,F,H.el,H.anchor)},M=({el:H,anchor:X},L,F)=>{let z;for(;H&&H!==X;)z=f(H),i(H,L,F),H=z;i(X,L,F)},_=({el:H,anchor:X})=>{let L;for(;H&&H!==X;)L=f(H),r(H),H=L;r(X)},P=(H,X,L,F,z,J,C,ae,W)=>{if(X.type==="svg"?C="svg":X.type==="math"&&(C="mathml"),H==null)D(X,L,F,z,J,C,ae,W);else{const j=H.el&&H.el._isVueCE?H.el:null;try{j&&j._beginPatch(),x(H,X,z,J,C,ae,W)}finally{j&&j._endPatch()}}},D=(H,X,L,F,z,J,C,ae)=>{let W,j;const{props:ee,shapeFlag:R,transition:S,dirs:Z}=H;if(W=H.el=s(H.type,J,ee&&ee.is,ee),R&8?c(W,H.children):R&16&&y(H.children,W,null,F,z,Sc(H,J),C,ae),Z&&Xr(H,null,F,"created"),B(W,H,H.scopeId,C,F),ee){for(const de in ee)de!=="value"&&!Gs(de)&&o(W,de,null,ee[de],J,F);"value"in ee&&o(W,"value",null,ee.value,J),(j=ee.onVnodeBeforeMount)&&ii(j,F,H)}Z&&Xr(H,null,F,"beforeMount");const oe=Qb(z,S);oe&&S.beforeEnter(W),i(W,X,L),((j=ee&&ee.onVnodeMounted)||oe||Z)&&un(()=>{j&&ii(j,F,H),oe&&S.enter(W),Z&&Xr(H,null,F,"mounted")},z)},B=(H,X,L,F,z)=>{if(L&&h(H,L),F)for(let J=0;J<F.length;J++)h(H,F[J]);if(z){let J=z.subTree;if(X===J||T0(J.type)&&(J.ssContent===X||J.ssFallback===X)){const C=z.vnode;B(H,C,C.scopeId,C.slotScopeIds,z.parent)}}},y=(H,X,L,F,z,J,C,ae,W=0)=>{for(let j=W;j<H.length;j++){const ee=H[j]=ae?Bi(H[j]):ui(H[j]);v(null,ee,X,L,F,z,J,C,ae)}},x=(H,X,L,F,z,J,C)=>{const ae=X.el=H.el;let{patchFlag:W,dynamicChildren:j,dirs:ee}=X;W|=H.patchFlag&16;const R=H.props||Pt,S=X.props||Pt;let Z;if(L&&Yr(L,!1),(Z=S.onVnodeBeforeUpdate)&&ii(Z,L,X,H),ee&&Xr(X,H,L,"beforeUpdate"),L&&Yr(L,!0),(R.innerHTML&&S.innerHTML==null||R.textContent&&S.textContent==null)&&c(ae,""),j?T(H.dynamicChildren,j,ae,L,F,Sc(X,z),J):C||O(H,X,ae,null,L,F,Sc(X,z),J,!1),W>0){if(W&16)E(ae,R,S,L,z);else if(W&2&&R.class!==S.class&&o(ae,"class",null,S.class,z),W&4&&o(ae,"style",R.style,S.style,z),W&8){const oe=X.dynamicProps;for(let de=0;de<oe.length;de++){const se=oe[de],Ne=R[se],Ce=S[se];(Ce!==Ne||se==="value")&&o(ae,se,Ne,Ce,z,L)}}W&1&&H.children!==X.children&&c(ae,X.children)}else!C&&j==null&&E(ae,R,S,L,z);((Z=S.onVnodeUpdated)||ee)&&un(()=>{Z&&ii(Z,L,X,H),ee&&Xr(X,H,L,"updated")},F)},T=(H,X,L,F,z,J,C)=>{for(let ae=0;ae<X.length;ae++){const W=H[ae],j=X[ae],ee=W.el&&(W.type===it||!ro(W,j)||W.shapeFlag&198)?d(W.el):L;v(W,j,ee,null,F,z,J,C,!0)}},E=(H,X,L,F,z)=>{if(X!==L){if(X!==Pt)for(const J in X)!Gs(J)&&!(J in L)&&o(H,J,X[J],null,z,F);for(const J in L){if(Gs(J))continue;const C=L[J],ae=X[J];C!==ae&&J!=="value"&&o(H,J,ae,C,z,F)}"value"in L&&o(H,"value",X.value,L.value,z)}},I=(H,X,L,F,z,J,C,ae,W)=>{const j=X.el=H?H.el:a(""),ee=X.anchor=H?H.anchor:a("");let{patchFlag:R,dynamicChildren:S,slotScopeIds:Z}=X;Z&&(ae=ae?ae.concat(Z):Z),H==null?(i(j,L,F),i(ee,L,F),y(X.children||[],L,ee,z,J,C,ae,W)):R>0&&R&64&&S&&H.dynamicChildren&&H.dynamicChildren.length===S.length?(T(H.dynamicChildren,S,L,z,J,C,ae),(X.key!=null||z&&X===z.subTree)&&Sh(H,X,!0)):O(H,X,L,ee,z,J,C,ae,W)},q=(H,X,L,F,z,J,C,ae,W)=>{X.slotScopeIds=ae,H==null?X.shapeFlag&512?z.ctx.activate(X,L,F,C,W):w(X,L,F,z,J,C,W):k(H,X,W)},w=(H,X,L,F,z,J,C)=>{const ae=H.component=a1(H,F,z);if(Vu(H)&&(ae.ctx.renderer=xe),l1(ae,!1,C),ae.asyncDep){if(z&&z.registerDep(ae,A,C),!H.el){const W=ae.subTree=tt(hn);p(null,W,X,L),H.placeholder=W.el}}else A(ae,H,X,L,z,J,C)},k=(H,X,L)=>{const F=X.component=H.component;if(Hb(H,X,L))if(F.asyncDep&&!F.asyncResolved){N(F,X,L);return}else F.next=X,F.update();else X.el=H.el,F.vnode=X},A=(H,X,L,F,z,J,C)=>{const ae=()=>{if(H.isMounted){let{next:R,bu:S,u:Z,parent:oe,vnode:de}=H;{const We=w0(H);if(We){R&&(R.el=de.el,N(H,R,C)),We.asyncDep.then(()=>{un(()=>{H.isUnmounted||j()},z)});return}}let se=R,Ne;Yr(H,!1),R?(R.el=de.el,N(H,R,C)):R=de,S&&mc(S),(Ne=R.props&&R.props.onVnodeBeforeUpdate)&&ii(Ne,oe,R,de),Yr(H,!0);const Ce=Ip(H),$e=H.subTree;H.subTree=Ce,v($e,Ce,d($e.el),U($e),H,z,J),R.el=Ce.el,se===null&&Gb(H,Ce.el),Z&&un(Z,z),(Ne=R.props&&R.props.onVnodeUpdated)&&un(()=>ii(Ne,oe,R,de),z)}else{let R;const{el:S,props:Z}=X,{bm:oe,m:de,parent:se,root:Ne,type:Ce}=H,$e=Jo(X);Yr(H,!1),oe&&mc(oe),!$e&&(R=Z&&Z.onVnodeBeforeMount)&&ii(R,se,X),Yr(H,!0);{Ne.ce&&Ne.ce._hasShadowRoot()&&Ne.ce._injectChildStyle(Ce);const We=H.subTree=Ip(H);v(null,We,L,F,H,z,J),X.el=We.el}if(de&&un(de,z),!$e&&(R=Z&&Z.onVnodeMounted)){const We=X;un(()=>ii(R,se,We),z)}(X.shapeFlag&256||se&&Jo(se.vnode)&&se.vnode.shapeFlag&256)&&H.a&&un(H.a,z),H.isMounted=!0,X=L=F=null}};H.scope.on();const W=H.effect=new bv(ae);H.scope.off();const j=H.update=W.run.bind(W),ee=H.job=W.runIfDirty.bind(W);ee.i=H,ee.id=H.uid,W.scheduler=()=>gh(ee),Yr(H,!0),j()},N=(H,X,L)=>{X.component=H;const F=H.vnode.props;H.vnode=X,H.next=null,Xb(H,X.props,F,L),Zb(H,X.children,L),ji(),_p(H),Ji()},O=(H,X,L,F,z,J,C,ae,W=!1)=>{const j=H&&H.children,ee=H?H.shapeFlag:0,R=X.children,{patchFlag:S,shapeFlag:Z}=X;if(S>0){if(S&128){K(j,R,L,F,z,J,C,ae,W);return}else if(S&256){$(j,R,L,F,z,J,C,ae,W);return}}Z&8?(ee&16&&G(j,z,J),R!==j&&c(L,R)):ee&16?Z&16?K(j,R,L,F,z,J,C,ae,W):G(j,z,J,!0):(ee&8&&c(L,""),Z&16&&y(R,L,F,z,J,C,ae,W))},$=(H,X,L,F,z,J,C,ae,W)=>{H=H||Ko,X=X||Ko;const j=H.length,ee=X.length,R=Math.min(j,ee);let S;for(S=0;S<R;S++){const Z=X[S]=W?Bi(X[S]):ui(X[S]);v(H[S],Z,L,null,z,J,C,ae,W)}j>ee?G(H,z,J,!0,!1,R):y(X,L,F,z,J,C,ae,W,R)},K=(H,X,L,F,z,J,C,ae,W)=>{let j=0;const ee=X.length;let R=H.length-1,S=ee-1;for(;j<=R&&j<=S;){const Z=H[j],oe=X[j]=W?Bi(X[j]):ui(X[j]);if(ro(Z,oe))v(Z,oe,L,null,z,J,C,ae,W);else break;j++}for(;j<=R&&j<=S;){const Z=H[R],oe=X[S]=W?Bi(X[S]):ui(X[S]);if(ro(Z,oe))v(Z,oe,L,null,z,J,C,ae,W);else break;R--,S--}if(j>R){if(j<=S){const Z=S+1,oe=Z<ee?X[Z].el:F;for(;j<=S;)v(null,X[j]=W?Bi(X[j]):ui(X[j]),L,oe,z,J,C,ae,W),j++}}else if(j>S)for(;j<=R;)ne(H[j],z,J,!0),j++;else{const Z=j,oe=j,de=new Map;for(j=oe;j<=S;j++){const re=X[j]=W?Bi(X[j]):ui(X[j]);re.key!=null&&de.set(re.key,j)}let se,Ne=0;const Ce=S-oe+1;let $e=!1,We=0;const Pe=new Array(Ce);for(j=0;j<Ce;j++)Pe[j]=0;for(j=Z;j<=R;j++){const re=H[j];if(Ne>=Ce){ne(re,z,J,!0);continue}let Ae;if(re.key!=null)Ae=de.get(re.key);else for(se=oe;se<=S;se++)if(Pe[se-oe]===0&&ro(re,X[se])){Ae=se;break}Ae===void 0?ne(re,z,J,!0):(Pe[Ae-oe]=j+1,Ae>=We?We=Ae:$e=!0,v(re,X[Ae],L,null,z,J,C,ae,W),Ne++)}const ue=$e?e1(Pe):Ko;for(se=ue.length-1,j=Ce-1;j>=0;j--){const re=oe+j,Ae=X[re],Le=X[re+1],Qe=re+1<ee?Le.el||E0(Le):F;Pe[j]===0?v(null,Ae,L,Qe,z,J,C,ae,W):$e&&(se<0||j!==ue[se]?te(Ae,L,Qe,2):se--)}}},te=(H,X,L,F,z=null)=>{const{el:J,type:C,transition:ae,children:W,shapeFlag:j}=H;if(j&6){te(H.component.subTree,X,L,F);return}if(j&128){H.suspense.move(X,L,F);return}if(j&64){C.move(H,X,L,xe);return}if(C===it){i(J,X,L);for(let R=0;R<W.length;R++)te(W[R],X,L,F);i(H.anchor,X,L);return}if(C===Mc){M(H,X,L);return}if(F!==2&&j&1&&ae)if(F===0)ae.beforeEnter(J),i(J,X,L),un(()=>ae.enter(J),z);else{const{leave:R,delayLeave:S,afterLeave:Z}=ae,oe=()=>{H.ctx.isUnmounted?r(J):i(J,X,L)},de=()=>{J._isLeaving&&J[ai](!0),R(J,()=>{oe(),Z&&Z()})};S?S(J,oe,de):de()}else i(J,X,L)},ne=(H,X,L,F=!1,z=!1)=>{const{type:J,props:C,ref:ae,children:W,dynamicChildren:j,shapeFlag:ee,patchFlag:R,dirs:S,cacheIndex:Z}=H;if(R===-2&&(z=!1),ae!=null&&(ji(),Ks(ae,null,L,H,!0),Ji()),Z!=null&&(X.renderCache[Z]=void 0),ee&256){X.ctx.deactivate(H);return}const oe=ee&1&&S,de=!Jo(H);let se;if(de&&(se=C&&C.onVnodeBeforeUnmount)&&ii(se,X,H),ee&6)Se(H.component,L,F);else{if(ee&128){H.suspense.unmount(L,F);return}oe&&Xr(H,null,X,"beforeUnmount"),ee&64?H.type.remove(H,X,L,xe,F):j&&!j.hasOnce&&(J!==it||R>0&&R&64)?G(j,X,L,!1,!0):(J===it&&R&384||!z&&ee&16)&&G(W,X,L),F&&ge(H)}(de&&(se=C&&C.onVnodeUnmounted)||oe)&&un(()=>{se&&ii(se,X,H),oe&&Xr(H,null,X,"unmounted")},L)},ge=H=>{const{type:X,el:L,anchor:F,transition:z}=H;if(X===it){Ee(L,F);return}if(X===Mc){_(H);return}const J=()=>{r(L),z&&!z.persisted&&z.afterLeave&&z.afterLeave()};if(H.shapeFlag&1&&z&&!z.persisted){const{leave:C,delayLeave:ae}=z,W=()=>C(L,J);ae?ae(H.el,J,W):W()}else J()},Ee=(H,X)=>{let L;for(;H!==X;)L=f(H),r(H),H=L;r(X)},Se=(H,X,L)=>{const{bum:F,scope:z,job:J,subTree:C,um:ae,m:W,a:j}=H;Dp(W),Dp(j),F&&mc(F),z.stop(),J&&(J.flags|=8,ne(C,H,X,L)),ae&&un(ae,X),un(()=>{H.isUnmounted=!0},X)},G=(H,X,L,F=!1,z=!1,J=0)=>{for(let C=J;C<H.length;C++)ne(H[C],X,L,F,z)},U=H=>{if(H.shapeFlag&6)return U(H.component.subTree);if(H.shapeFlag&128)return H.suspense.next();const X=f(H.anchor||H.el),L=X&&X[Xv];return L?f(L):X};let Y=!1;const he=(H,X,L)=>{let F;H==null?X._vnode&&(ne(X._vnode,null,null,!0),F=X._vnode.component):v(X._vnode||null,H,X,null,null,null,L),X._vnode=H,Y||(Y=!0,_p(F),Vv(),Y=!1)},xe={p:v,um:ne,m:te,r:ge,mt:w,mc:y,pc:O,pbc:T,n:U,o:t};return{render:he,hydrate:void 0,createApp:Ob(he)}}function Sc({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Yr({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function Qb(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Sh(t,e,n=!1){const i=t.children,r=e.children;if(et(i)&&et(r))for(let o=0;o<i.length;o++){const s=i[o];let a=r[o];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[o]=Bi(r[o]),a.el=s.el),!n&&a.patchFlag!==-2&&Sh(s,a)),a.type===Wu&&(a.patchFlag===-1&&(a=r[o]=Bi(a)),a.el=s.el),a.type===hn&&!a.el&&(a.el=s.el)}}function e1(t){const e=t.slice(),n=[0];let i,r,o,s,a;const l=t.length;for(i=0;i<l;i++){const u=t[i];if(u!==0){if(r=n[n.length-1],t[r]<u){e[i]=r,n.push(i);continue}for(o=0,s=n.length-1;o<s;)a=o+s>>1,t[n[a]]<u?o=a+1:s=a;u<t[n[o]]&&(o>0&&(e[i]=n[o-1]),n[o]=i)}}for(o=n.length,s=n[o-1];o-- >0;)n[o]=s,s=e[s];return n}function w0(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:w0(e)}function Dp(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}function E0(t){if(t.placeholder)return t.placeholder;const e=t.component;return e?E0(e.subTree):null}const T0=t=>t.__isSuspense;function t1(t,e){e&&e.pendingBranch?et(t)?e.effects.push(...t):e.effects.push(t):cb(t)}const it=Symbol.for("v-fgt"),Wu=Symbol.for("v-txt"),hn=Symbol.for("v-cmt"),Mc=Symbol.for("v-stc"),js=[];let xn=null;function ce(t=!1){js.push(xn=t?null:[])}function n1(){js.pop(),xn=js[js.length-1]||null}let as=1;function ou(t,e=!1){as+=t,t<0&&xn&&e&&(xn.hasOnce=!0)}function A0(t){return t.dynamicChildren=as>0?xn||Ko:null,n1(),as>0&&xn&&xn.push(t),t}function me(t,e,n,i,r,o){return A0(Q(t,e,n,i,r,o,!0))}function Qt(t,e,n,i,r){return A0(tt(t,e,n,i,r,!0))}function sa(t){return t?t.__v_isVNode===!0:!1}function ro(t,e){return t.type===e.type&&t.key===e.key}const C0=({key:t})=>t??null,Dl=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Ot(t)||Ut(t)||nt(t)?{i:tn,r:t,k:e,f:!!n}:t:null);function Q(t,e=null,n=null,i=0,r=null,o=t===it?0:1,s=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&C0(e),ref:e&&Dl(e),scopeId:Hv,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:o,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:tn};return a?(Mh(l,n),o&128&&t.normalize(l)):n&&(l.shapeFlag|=Ot(n)?8:16),as>0&&!s&&xn&&(l.patchFlag>0||o&6)&&l.patchFlag!==32&&xn.push(l),l}const tt=i1;function i1(t,e=null,n=null,i=0,r=null,o=!1){if((!t||t===o0)&&(t=hn),sa(t)){const a=Br(t,e,!0);return n&&Mh(a,n),as>0&&!o&&xn&&(a.shapeFlag&6?xn[xn.indexOf(t)]=a:xn.push(a)),a.patchFlag=-2,a}if(f1(t)&&(t=t.__vccOpts),e){e=r1(e);let{class:a,style:l}=e;a&&!Ot(a)&&(e.class=ut(a)),yt(l)&&(ku(l)&&!et(l)&&(l=qt({},l)),e.style=rt(l))}const s=Ot(t)?1:T0(t)?128:Yv(t)?64:yt(t)?4:nt(t)?2:0;return Q(t,e,n,i,r,s,o,!0)}function r1(t){return t?ku(t)||_0(t)?qt({},t):t:null}function Br(t,e,n=!1,i=!1){const{props:r,ref:o,patchFlag:s,children:a,transition:l}=t,u=e?aa(r||{},e):r,c={__v_isVNode:!0,__v_skip:!0,type:t.type,props:u,key:u&&C0(u),ref:e&&e.ref?n&&o?et(o)?o.concat(Dl(e)):[o,Dl(e)]:Dl(e):o,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==it?s===-1?16:s|16:s,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Br(t.ssContent),ssFallback:t.ssFallback&&Br(t.ssFallback),placeholder:t.placeholder,el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&i&&oa(c,l.clone(c)),c}function hi(t=" ",e=0){return tt(Wu,null,t,e)}function Ge(t="",e=!1){return e?(ce(),Qt(hn,null,t)):tt(hn,null,t)}function ui(t){return t==null||typeof t=="boolean"?tt(hn):et(t)?tt(it,null,t.slice()):sa(t)?Bi(t):tt(Wu,null,String(t))}function Bi(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Br(t)}function Mh(t,e){let n=0;const{shapeFlag:i}=t;if(e==null)e=null;else if(et(e))n=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),Mh(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!_0(e)?e._ctx=tn:r===3&&tn&&(tn.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else nt(e)?(e={default:e,_ctx:tn},n=32):(e=String(e),i&64?(n=16,e=[hi(e)]):n=8);t.children=e,t.shapeFlag|=n}function aa(...t){const e={};for(let n=0;n<t.length;n++){const i=t[n];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=ut([e.class,i.class]));else if(r==="style")e.style=rt([e.style,i.style]);else if(Iu(r)){const o=e[r],s=i[r];s&&o!==s&&!(et(o)&&o.includes(s))&&(e[r]=o?[].concat(o,s):s)}else r!==""&&(e[r]=i[r])}return e}function ii(t,e,n,i=null){Jn(t,e,7,[n,i])}const o1=h0();let s1=0;function a1(t,e,n){const i=t.type,r=(e?e.appContext:t.appContext)||o1,o={uid:s1++,vnode:t,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new xv(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:x0(i,r),emitsOptions:p0(i,r),emit:null,emitted:null,propsDefaults:Pt,inheritAttrs:i.inheritAttrs,ctx:Pt,data:Pt,props:Pt,attrs:Pt,slots:Pt,refs:Pt,setupState:Pt,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return o.ctx={_:o},o.root=e?e.root:o,o.emit=kb.bind(null,o),t.ce&&t.ce(o),o}let pn=null;const Mi=()=>pn||tn;let su,Fd;{const t=Lu(),e=(n,i)=>{let r;return(r=t[n])||(r=t[n]=[]),r.push(i),o=>{r.length>1?r.forEach(s=>s(o)):r[0](o)}};su=e("__VUE_INSTANCE_SETTERS__",n=>pn=n),Fd=e("__VUE_SSR_SETTERS__",n=>la=n)}const Ia=t=>{const e=pn;return su(t),t.scope.on(),()=>{t.scope.off(),su(e)}},Lp=()=>{pn&&pn.scope.off(),su(null)};function R0(t){return t.vnode.shapeFlag&4}let la=!1;function l1(t,e=!1,n=!1){e&&Fd(e);const{props:i,children:r}=t.vnode,o=R0(t);Wb(t,i,o,e),Kb(t,r,n||e);const s=o?u1(t,e):void 0;return e&&Fd(!1),s}function u1(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,Rb);const{setup:i}=n;if(i){ji();const r=t.setupContext=i.length>1?P0(t):null,o=Ia(t),s=Ra(i,t,0,[t.props,r]),a=hv(s);if(Ji(),o(),(a||t.sp)&&!Jo(t)&&e0(t),a){if(s.then(Lp,Lp),e)return s.then(l=>{Fp(t,l)}).catch(l=>{zu(l,t,0)});t.asyncDep=s}else Fp(t,s)}else I0(t)}function Fp(t,e,n){nt(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:yt(e)&&(t.setupState=Uv(e)),I0(t)}function I0(t,e,n){const i=t.type;t.render||(t.render=i.render||gi);{const r=Ia(t);ji();try{Pb(t)}finally{Ji(),r()}}}const c1={get(t,e){return fn(t,"get",""),t[e]}};function P0(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,c1),slots:t.slots,emit:t.emit,expose:e}}function Xu(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(Uv(go(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Zs)return Zs[n](t)},has(e,n){return n in e||n in Zs}})):t.proxy}function d1(t,e=!0){return nt(t)?t.displayName||t.name:t.name||e&&t.__name}function f1(t){return nt(t)&&"__vccOpts"in t}const Re=(t,e)=>ob(t,e,la);function wt(t,e,n){try{ou(-1);const i=arguments.length;return i===2?yt(e)&&!et(e)?sa(e)?tt(t,null,[e]):tt(t,e):tt(t,null,e):(i>3?n=Array.prototype.slice.call(arguments,2):i===3&&sa(n)&&(n=[n]),tt(t,e,n))}finally{ou(1)}}function h1(t,e){const n=t.memo;if(n.length!=e.length)return!1;for(let i=0;i<n.length;i++)if(Xi(n[i],e[i]))return!1;return as>0&&xn&&xn.push(t),!0}const p1="3.5.29";let Ud;const Up=typeof window<"u"&&window.trustedTypes;if(Up)try{Ud=Up.createPolicy("vue",{createHTML:t=>t})}catch{}const N0=Ud?t=>Ud.createHTML(t):t=>t,m1="http://www.w3.org/2000/svg",g1="http://www.w3.org/1998/Math/MathML",Oi=typeof document<"u"?document:null,Op=Oi&&Oi.createElement("template"),v1={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,i)=>{const r=e==="svg"?Oi.createElementNS(m1,t):e==="mathml"?Oi.createElementNS(g1,t):n?Oi.createElement(t,{is:n}):Oi.createElement(t);return t==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:t=>Oi.createTextNode(t),createComment:t=>Oi.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Oi.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,i,r,o){const s=n?n.previousSibling:e.lastChild;if(r&&(r===o||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===o||!(r=r.nextSibling)););else{Op.innerHTML=N0(i==="svg"?`<svg>${t}</svg>`:i==="mathml"?`<math>${t}</math>`:t);const a=Op.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[s?s.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},hr="transition",Ms="animation",ua=Symbol("_vtc"),D0={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},_1=qt({},Kv,D0),y1=t=>(t.displayName="Transition",t.props=_1,t),Bp=y1((t,{slots:e})=>wt(_b,x1(t),e)),qr=(t,e=[])=>{et(t)?t.forEach(n=>n(...e)):t&&t(...e)},kp=t=>t?et(t)?t.some(e=>e.length>1):t.length>1:!1;function x1(t){const e={};for(const I in t)I in D0||(e[I]=t[I]);if(t.css===!1)return e;const{name:n="v",type:i,duration:r,enterFromClass:o=`${n}-enter-from`,enterActiveClass:s=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:l=o,appearActiveClass:u=s,appearToClass:c=a,leaveFromClass:d=`${n}-leave-from`,leaveActiveClass:f=`${n}-leave-active`,leaveToClass:h=`${n}-leave-to`}=t,m=b1(r),v=m&&m[0],g=m&&m[1],{onBeforeEnter:p,onEnter:b,onEnterCancelled:M,onLeave:_,onLeaveCancelled:P,onBeforeAppear:D=p,onAppear:B=b,onAppearCancelled:y=M}=e,x=(I,q,w,k)=>{I._enterCancelled=k,Kr(I,q?c:a),Kr(I,q?u:s),w&&w()},T=(I,q)=>{I._isLeaving=!1,Kr(I,d),Kr(I,h),Kr(I,f),q&&q()},E=I=>(q,w)=>{const k=I?B:b,A=()=>x(q,I,w);qr(k,[q,A]),zp(()=>{Kr(q,I?l:o),Ri(q,I?c:a),kp(k)||Vp(q,i,v,A)})};return qt(e,{onBeforeEnter(I){qr(p,[I]),Ri(I,o),Ri(I,s)},onBeforeAppear(I){qr(D,[I]),Ri(I,l),Ri(I,u)},onEnter:E(!1),onAppear:E(!0),onLeave(I,q){I._isLeaving=!0;const w=()=>T(I,q);Ri(I,d),I._enterCancelled?(Ri(I,f),Gp(I)):(Gp(I),Ri(I,f)),zp(()=>{I._isLeaving&&(Kr(I,d),Ri(I,h),kp(_)||Vp(I,i,g,w))}),qr(_,[I,w])},onEnterCancelled(I){x(I,!1,void 0,!0),qr(M,[I])},onAppearCancelled(I){x(I,!0,void 0,!0),qr(y,[I])},onLeaveCancelled(I){T(I),qr(P,[I])}})}function b1(t){if(t==null)return null;if(yt(t))return[wc(t.enter),wc(t.leave)];{const e=wc(t);return[e,e]}}function wc(t){return Mx(t)}function Ri(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[ua]||(t[ua]=new Set)).add(e)}function Kr(t,e){e.split(/\s+/).forEach(i=>i&&t.classList.remove(i));const n=t[ua];n&&(n.delete(e),n.size||(t[ua]=void 0))}function zp(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let S1=0;function Vp(t,e,n,i){const r=t._endId=++S1,o=()=>{r===t._endId&&i()};if(n!=null)return setTimeout(o,n);const{type:s,timeout:a,propCount:l}=M1(t,e);if(!s)return i();const u=s+"end";let c=0;const d=()=>{t.removeEventListener(u,f),o()},f=h=>{h.target===t&&++c>=l&&d()};setTimeout(()=>{c<l&&d()},a+1),t.addEventListener(u,f)}function M1(t,e){const n=window.getComputedStyle(t),i=m=>(n[m]||"").split(", "),r=i(`${hr}Delay`),o=i(`${hr}Duration`),s=$p(r,o),a=i(`${Ms}Delay`),l=i(`${Ms}Duration`),u=$p(a,l);let c=null,d=0,f=0;e===hr?s>0&&(c=hr,d=s,f=o.length):e===Ms?u>0&&(c=Ms,d=u,f=l.length):(d=Math.max(s,u),c=d>0?s>u?hr:Ms:null,f=c?c===hr?o.length:l.length:0);const h=c===hr&&/\b(?:transform|all)(?:,|$)/.test(i(`${hr}Property`).toString());return{type:c,timeout:d,propCount:f,hasTransform:h}}function $p(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,i)=>Hp(n)+Hp(t[i])))}function Hp(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function Gp(t){return(t?t.ownerDocument:document).body.offsetHeight}function w1(t,e,n){const i=t[ua];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const au=Symbol("_vod"),L0=Symbol("_vsh"),Lr={name:"show",beforeMount(t,{value:e},{transition:n}){t[au]=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):ws(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:i}){!e!=!n&&(i?e?(i.beforeEnter(t),ws(t,!0),i.enter(t)):i.leave(t,()=>{ws(t,!1)}):ws(t,e))},beforeUnmount(t,{value:e}){ws(t,e)}};function ws(t,e){t.style.display=e?t[au]:"none",t[L0]=!e}const E1=Symbol(""),T1=/(?:^|;)\s*display\s*:/;function A1(t,e,n){const i=t.style,r=Ot(n);let o=!1;if(n&&!r){if(e)if(Ot(e))for(const s of e.split(";")){const a=s.slice(0,s.indexOf(":")).trim();n[a]==null&&Ll(i,a,"")}else for(const s in e)n[s]==null&&Ll(i,s,"");for(const s in n)s==="display"&&(o=!0),Ll(i,s,n[s])}else if(r){if(e!==n){const s=i[E1];s&&(n+=";"+s),i.cssText=n,o=T1.test(n)}}else e&&t.removeAttribute("style");au in t&&(t[au]=o?i.display:"",t[L0]&&(i.display="none"))}const Wp=/\s*!important$/;function Ll(t,e,n){if(et(n))n.forEach(i=>Ll(t,e,i));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const i=C1(t,e);Wp.test(n)?t.setProperty(Hr(i),n.replace(Wp,""),"important"):t[i]=n}}const Xp=["Webkit","Moz","ms"],Ec={};function C1(t,e){const n=Ec[e];if(n)return n;let i=Bn(e);if(i!=="filter"&&i in t)return Ec[e]=i;i=Du(i);for(let r=0;r<Xp.length;r++){const o=Xp[r]+i;if(o in t)return Ec[e]=o}return e}const Yp="http://www.w3.org/1999/xlink";function qp(t,e,n,i,r,o=Ix(e)){i&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(Yp,e.slice(6,e.length)):t.setAttributeNS(Yp,e,n):n==null||o&&!vv(n)?t.removeAttribute(e):t.setAttribute(e,o?"":Zn(n)?String(n):n)}function Kp(t,e,n,i,r){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?N0(n):n);return}const o=t.tagName;if(e==="value"&&o!=="PROGRESS"&&!o.includes("-")){const a=o==="OPTION"?t.getAttribute("value")||"":t.value,l=n==null?t.type==="checkbox"?"on":"":String(n);(a!==l||!("_value"in t))&&(t.value=l),n==null&&t.removeAttribute(e),t._value=n;return}let s=!1;if(n===""||n==null){const a=typeof t[e];a==="boolean"?n=vv(n):n==null&&a==="string"?(n="",s=!0):a==="number"&&(n=0,s=!0)}try{t[e]=n}catch{}s&&t.removeAttribute(r||e)}function R1(t,e,n,i){t.addEventListener(e,n,i)}function I1(t,e,n,i){t.removeEventListener(e,n,i)}const Zp=Symbol("_vei");function P1(t,e,n,i,r=null){const o=t[Zp]||(t[Zp]={}),s=o[e];if(i&&s)s.value=i;else{const[a,l]=N1(e);if(i){const u=o[e]=F1(i,r);R1(t,a,u,l)}else s&&(I1(t,a,s,l),o[e]=void 0)}}const jp=/(?:Once|Passive|Capture)$/;function N1(t){let e;if(jp.test(t)){e={};let i;for(;i=t.match(jp);)t=t.slice(0,t.length-i[0].length),e[i[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Hr(t.slice(2)),e]}let Tc=0;const D1=Promise.resolve(),L1=()=>Tc||(D1.then(()=>Tc=0),Tc=Date.now());function F1(t,e){const n=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=n.attached)return;Jn(U1(i,n.value),e,5,[i])};return n.value=t,n.attached=L1(),n}function U1(t,e){if(et(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(i=>r=>!r._stopped&&i&&i(r))}else return e}const Jp=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,O1=(t,e,n,i,r,o)=>{const s=r==="svg";e==="class"?w1(t,i,s):e==="style"?A1(t,n,i):Iu(e)?lh(e)||P1(t,e,n,i,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):B1(t,e,i,s))?(Kp(t,e,i),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&qp(t,e,i,s,o,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!Ot(i))?Kp(t,Bn(e),i,o,e):(e==="true-value"?t._trueValue=i:e==="false-value"&&(t._falseValue=i),qp(t,e,i,s))};function B1(t,e,n,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in t&&Jp(e)&&nt(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&t.tagName==="IFRAME"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=t.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return Jp(e)&&Ot(n)?!1:e in t}const k1=["ctrl","shift","alt","meta"],z1={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>k1.some(n=>t[`${n}Key`]&&!e.includes(n))},Oe=(t,e)=>{if(!t)return t;const n=t._withMods||(t._withMods={}),i=e.join(".");return n[i]||(n[i]=((r,...o)=>{for(let s=0;s<e.length;s++){const a=z1[e[s]];if(a&&a(r,e))return}return t(r,...o)}))},V1={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},$1=(t,e)=>{const n=t._withKeys||(t._withKeys={}),i=e.join(".");return n[i]||(n[i]=(r=>{if(!("key"in r))return;const o=Hr(r.key);if(e.some(s=>s===o||V1[s]===o))return t(r)}))},H1=qt({patchProp:O1},v1);let Qp;function G1(){return Qp||(Qp=jb(H1))}const W1=((...t)=>{const e=G1().createApp(...t),{mount:n}=e;return e.mount=i=>{const r=Y1(i);if(!r)return;const o=e._component;!nt(o)&&!o.render&&!o.template&&(o.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const s=n(r,!1,X1(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),s},e});function X1(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function Y1(t){return Ot(t)?document.querySelector(t):t}let F0;const Yu=t=>F0=t,U0=Symbol();function Od(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var Js;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(Js||(Js={}));function q1(){const t=Fu(!0),e=t.run(()=>Ie({}));let n=[],i=[];const r=go({install(o){Yu(r),r._a=o,o.provide(U0,r),o.config.globalProperties.$pinia=r,i.forEach(s=>n.push(s)),i=[]},use(o){return this._a?n.push(o):i.push(o),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return r}const O0=()=>{};function em(t,e,n,i=O0){t.add(e);const r=()=>{t.delete(e)&&i()};return!n&&Uu()&&Ws(r),r}function Po(t,...e){t.forEach(n=>{n(...e)})}const K1=t=>t(),tm=Symbol(),Ac=Symbol();function Bd(t,e){t instanceof Map&&e instanceof Map?e.forEach((n,i)=>t.set(i,n)):t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const i=e[n],r=t[n];Od(r)&&Od(i)&&t.hasOwnProperty(n)&&!Ut(i)&&!Yi(i)?t[n]=Bd(r,i):t[n]=i}return t}const Z1=Symbol();function j1(t){return!Od(t)||!Object.prototype.hasOwnProperty.call(t,Z1)}const{assign:Sr}=Object;function J1(t){return!!(Ut(t)&&t.effect)}function Q1(t,e,n,i){const{state:r,actions:o,getters:s}=e,a=n.state.value[t];let l;function u(){a||(n.state.value[t]=r?r():{});const c=Ov(n.state.value[t]);return Sr(c,o,Object.keys(s||{}).reduce((d,f)=>(d[f]=go(Re(()=>{Yu(n);const h=n._s.get(t);return s[f].call(h,h)})),d),{}))}return l=B0(t,u,e,n,i,!0),l}function B0(t,e,n={},i,r,o){let s;const a=Sr({actions:{}},n),l={deep:!0};let u,c,d=new Set,f=new Set,h;const m=i.state.value[t];!o&&!m&&(i.state.value[t]={});let v;function g(y){let x;u=c=!1,typeof y=="function"?(y(i.state.value[t]),x={type:Js.patchFunction,storeId:t,events:h}):(Bd(i.state.value[t],y),x={type:Js.patchObject,payload:y,storeId:t,events:h});const T=v=Symbol();rn().then(()=>{v===T&&(u=!0)}),c=!0,Po(d,x,i.state.value[t])}const p=o?function(){const{state:x}=n,T=x?x():{};this.$patch(E=>{Sr(E,T)})}:O0;function b(){s.stop(),d.clear(),f.clear(),i._s.delete(t)}const M=(y,x="")=>{if(tm in y)return y[Ac]=x,y;const T=function(){Yu(i);const E=Array.from(arguments),I=new Set,q=new Set;function w(N){I.add(N)}function k(N){q.add(N)}Po(f,{args:E,name:T[Ac],store:P,after:w,onError:k});let A;try{A=y.apply(this&&this.$id===t?this:P,E)}catch(N){throw Po(q,N),N}return A instanceof Promise?A.then(N=>(Po(I,N),N)).catch(N=>(Po(q,N),Promise.reject(N))):(Po(I,A),A)};return T[tm]=!0,T[Ac]=x,T},_={_p:i,$id:t,$onAction:em.bind(null,f),$patch:g,$reset:p,$subscribe(y,x={}){const T=em(d,y,x.detached,()=>E()),E=s.run(()=>lt(()=>i.state.value[t],I=>{(x.flush==="sync"?c:u)&&y({storeId:t,type:Js.direct,events:h},I)},Sr({},l,x)));return T},$dispose:b},P=Ur(_);i._s.set(t,P);const B=(i._a&&i._a.runWithContext||K1)(()=>i._e.run(()=>(s=Fu()).run(()=>e({action:M}))));for(const y in B){const x=B[y];if(Ut(x)&&!J1(x)||Yi(x))o||(m&&j1(x)&&(Ut(x)?x.value=m[y]:Bd(x,m[y])),i.state.value[t][y]=x);else if(typeof x=="function"){const T=M(x,y);B[y]=T,a.actions[y]=x}}return Sr(P,B),Sr(mt(P),B),Object.defineProperty(P,"$state",{get:()=>i.state.value[t],set:y=>{g(x=>{Sr(x,y)})}}),i._p.forEach(y=>{Sr(P,s.run(()=>y({store:P,app:i._a,pinia:i,options:a})))}),m&&o&&n.hydrate&&n.hydrate(P.$state,m),u=!0,c=!0,P}function eS(t,e,n){let i;const r=typeof e=="function";i=r?n:e;function o(s,a){const l=db();return s=s||(l?Pn(U0,null):null),s&&Yu(s),s=F0,s._s.has(t)||(r?B0(t,e,i,s):Q1(t,i,s)),s._s.get(t)}return o.$id=t,o}const wh="183",tS=0,nm=1,nS=2,Fl=1,iS=2,Os=3,kr=0,Tn=1,Vi=2,qi=0,Qo=1,im=2,rm=3,om=4,rS=5,oo=100,oS=101,sS=102,aS=103,lS=104,uS=200,cS=201,dS=202,fS=203,kd=204,zd=205,hS=206,pS=207,mS=208,gS=209,vS=210,_S=211,yS=212,xS=213,bS=214,Vd=0,$d=1,Hd=2,ls=3,Gd=4,Wd=5,Xd=6,Yd=7,k0=0,SS=1,MS=2,vi=0,z0=1,V0=2,$0=3,H0=4,G0=5,W0=6,X0=7,Y0=300,So=301,us=302,Cc=303,Rc=304,qu=306,qd=1e3,Hi=1001,Kd=1002,nn=1003,wS=1004,Xa=1005,Rt=1006,Ic=1007,co=1008,yn=1009,q0=1010,K0=1011,ca=1012,Eh=1013,bi=1014,pi=1015,tr=1016,Th=1017,Ah=1018,da=1020,Z0=35902,j0=35899,J0=1021,Q0=1022,bn=1023,nr=1026,fo=1027,e_=1028,Ch=1029,cs=1030,Rh=1031,Ih=1033,Ul=33776,Ol=33777,Bl=33778,kl=33779,Zd=35840,jd=35841,Jd=35842,Qd=35843,ef=36196,tf=37492,nf=37496,rf=37488,of=37489,sf=37490,af=37491,lf=37808,uf=37809,cf=37810,df=37811,ff=37812,hf=37813,pf=37814,mf=37815,gf=37816,vf=37817,_f=37818,yf=37819,xf=37820,bf=37821,Sf=36492,Mf=36494,wf=36495,Ef=36283,Tf=36284,Af=36285,Cf=36286,ES=3200,TS=0,AS=1,Rr="",On="srgb",zr="srgb-linear",lu="linear",Mt="srgb",No=7680,sm=519,CS=512,RS=513,IS=514,Ph=515,PS=516,NS=517,Nh=518,DS=519,am=35044,lm="300 es",mi=2e3,uu=2001;function LS(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function cu(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function FS(){const t=cu("canvas");return t.style.display="block",t}const um={};function cm(...t){const e="THREE."+t.shift();console.log(e,...t)}function t_(t){const e=t[0];if(typeof e=="string"&&e.startsWith("TSL:")){const n=t[1];n&&n.isStackTrace?t[0]+=" "+n.getLocation():t[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return t}function st(...t){t=t_(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.warn(n.getError(e)):console.warn(e,...t)}}function _t(...t){t=t_(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.error(n.getError(e)):console.error(e,...t)}}function du(...t){const e=t.join(" ");e in um||(um[e]=!0,st(...t))}function US(t,e,n){return new Promise(function(i,r){function o(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(o,n);break;default:i()}}setTimeout(o,n)})}const OS={[Vd]:$d,[Hd]:Xd,[Gd]:Yd,[ls]:Wd,[$d]:Vd,[Xd]:Hd,[Yd]:Gd,[Wd]:ls};class _s{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const o=r.indexOf(n);o!==-1&&r.splice(o,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let o=0,s=r.length;o<s;o++)r[o].call(this,e);e.target=null}}}const an=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Pc=Math.PI/180,Rf=180/Math.PI;function Pa(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(an[t&255]+an[t>>8&255]+an[t>>16&255]+an[t>>24&255]+"-"+an[e&255]+an[e>>8&255]+"-"+an[e>>16&15|64]+an[e>>24&255]+"-"+an[n&63|128]+an[n>>8&255]+"-"+an[n>>16&255]+an[n>>24&255]+an[i&255]+an[i>>8&255]+an[i>>16&255]+an[i>>24&255]).toLowerCase()}function pt(t,e,n){return Math.max(e,Math.min(n,t))}function BS(t,e){return(t%e+e)%e}function Nc(t,e,n){return(1-n)*t+n*e}function Es(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function Sn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class Tt{constructor(e=0,n=0){Tt.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=pt(this.x,e.x,n.x),this.y=pt(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=pt(this.x,e,n),this.y=pt(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(pt(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(pt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),o=this.x-e.x,s=this.y-e.y;return this.x=o*i-s*r+e.x,this.y=o*r+s*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ys{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,o,s,a){let l=i[r+0],u=i[r+1],c=i[r+2],d=i[r+3],f=o[s+0],h=o[s+1],m=o[s+2],v=o[s+3];if(d!==v||l!==f||u!==h||c!==m){let g=l*f+u*h+c*m+d*v;g<0&&(f=-f,h=-h,m=-m,v=-v,g=-g);let p=1-a;if(g<.9995){const b=Math.acos(g),M=Math.sin(b);p=Math.sin(p*b)/M,a=Math.sin(a*b)/M,l=l*p+f*a,u=u*p+h*a,c=c*p+m*a,d=d*p+v*a}else{l=l*p+f*a,u=u*p+h*a,c=c*p+m*a,d=d*p+v*a;const b=1/Math.sqrt(l*l+u*u+c*c+d*d);l*=b,u*=b,c*=b,d*=b}}e[n]=l,e[n+1]=u,e[n+2]=c,e[n+3]=d}static multiplyQuaternionsFlat(e,n,i,r,o,s){const a=i[r],l=i[r+1],u=i[r+2],c=i[r+3],d=o[s],f=o[s+1],h=o[s+2],m=o[s+3];return e[n]=a*m+c*d+l*h-u*f,e[n+1]=l*m+c*f+u*d-a*h,e[n+2]=u*m+c*h+a*f-l*d,e[n+3]=c*m-a*d-l*f-u*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,o=e._z,s=e._order,a=Math.cos,l=Math.sin,u=a(i/2),c=a(r/2),d=a(o/2),f=l(i/2),h=l(r/2),m=l(o/2);switch(s){case"XYZ":this._x=f*c*d+u*h*m,this._y=u*h*d-f*c*m,this._z=u*c*m+f*h*d,this._w=u*c*d-f*h*m;break;case"YXZ":this._x=f*c*d+u*h*m,this._y=u*h*d-f*c*m,this._z=u*c*m-f*h*d,this._w=u*c*d+f*h*m;break;case"ZXY":this._x=f*c*d-u*h*m,this._y=u*h*d+f*c*m,this._z=u*c*m+f*h*d,this._w=u*c*d-f*h*m;break;case"ZYX":this._x=f*c*d-u*h*m,this._y=u*h*d+f*c*m,this._z=u*c*m-f*h*d,this._w=u*c*d+f*h*m;break;case"YZX":this._x=f*c*d+u*h*m,this._y=u*h*d+f*c*m,this._z=u*c*m-f*h*d,this._w=u*c*d-f*h*m;break;case"XZY":this._x=f*c*d-u*h*m,this._y=u*h*d-f*c*m,this._z=u*c*m+f*h*d,this._w=u*c*d+f*h*m;break;default:st("Quaternion: .setFromEuler() encountered an unknown order: "+s)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],o=n[8],s=n[1],a=n[5],l=n[9],u=n[2],c=n[6],d=n[10],f=i+a+d;if(f>0){const h=.5/Math.sqrt(f+1);this._w=.25/h,this._x=(c-l)*h,this._y=(o-u)*h,this._z=(s-r)*h}else if(i>a&&i>d){const h=2*Math.sqrt(1+i-a-d);this._w=(c-l)/h,this._x=.25*h,this._y=(r+s)/h,this._z=(o+u)/h}else if(a>d){const h=2*Math.sqrt(1+a-i-d);this._w=(o-u)/h,this._x=(r+s)/h,this._y=.25*h,this._z=(l+c)/h}else{const h=2*Math.sqrt(1+d-i-a);this._w=(s-r)/h,this._x=(o+u)/h,this._y=(l+c)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(pt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,o=e._z,s=e._w,a=n._x,l=n._y,u=n._z,c=n._w;return this._x=i*c+s*a+r*u-o*l,this._y=r*c+s*l+o*a-i*u,this._z=o*c+s*u+i*l-r*a,this._w=s*c-i*a-r*l-o*u,this._onChangeCallback(),this}slerp(e,n){let i=e._x,r=e._y,o=e._z,s=e._w,a=this.dot(e);a<0&&(i=-i,r=-r,o=-o,s=-s,a=-a);let l=1-n;if(a<.9995){const u=Math.acos(a),c=Math.sin(u);l=Math.sin(l*u)/c,n=Math.sin(n*u)/c,this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+o*n,this._w=this._w*l+s*n,this._onChangeCallback()}else this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+o*n,this._w=this._w*l+s*n,this.normalize();return this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),o=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),o*Math.sin(n),o*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ye{constructor(e=0,n=0,i=0){ye.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(dm.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(dm.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,o=e.elements;return this.x=o[0]*n+o[3]*i+o[6]*r,this.y=o[1]*n+o[4]*i+o[7]*r,this.z=o[2]*n+o[5]*i+o[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,o=e.elements,s=1/(o[3]*n+o[7]*i+o[11]*r+o[15]);return this.x=(o[0]*n+o[4]*i+o[8]*r+o[12])*s,this.y=(o[1]*n+o[5]*i+o[9]*r+o[13])*s,this.z=(o[2]*n+o[6]*i+o[10]*r+o[14])*s,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,o=e.x,s=e.y,a=e.z,l=e.w,u=2*(s*r-a*i),c=2*(a*n-o*r),d=2*(o*i-s*n);return this.x=n+l*u+s*d-a*c,this.y=i+l*c+a*u-o*d,this.z=r+l*d+o*c-s*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r,this.y=o[1]*n+o[5]*i+o[9]*r,this.z=o[2]*n+o[6]*i+o[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=pt(this.x,e.x,n.x),this.y=pt(this.y,e.y,n.y),this.z=pt(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=pt(this.x,e,n),this.y=pt(this.y,e,n),this.z=pt(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(pt(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,o=e.z,s=n.x,a=n.y,l=n.z;return this.x=r*l-o*a,this.y=o*s-i*l,this.z=i*a-r*s,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Dc.copy(this).projectOnVector(e),this.sub(Dc)}reflect(e){return this.sub(Dc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(pt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Dc=new ye,dm=new ys;class ct{constructor(e,n,i,r,o,s,a,l,u){ct.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,o,s,a,l,u)}set(e,n,i,r,o,s,a,l,u){const c=this.elements;return c[0]=e,c[1]=r,c[2]=a,c[3]=n,c[4]=o,c[5]=l,c[6]=i,c[7]=s,c[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,o=this.elements,s=i[0],a=i[3],l=i[6],u=i[1],c=i[4],d=i[7],f=i[2],h=i[5],m=i[8],v=r[0],g=r[3],p=r[6],b=r[1],M=r[4],_=r[7],P=r[2],D=r[5],B=r[8];return o[0]=s*v+a*b+l*P,o[3]=s*g+a*M+l*D,o[6]=s*p+a*_+l*B,o[1]=u*v+c*b+d*P,o[4]=u*g+c*M+d*D,o[7]=u*p+c*_+d*B,o[2]=f*v+h*b+m*P,o[5]=f*g+h*M+m*D,o[8]=f*p+h*_+m*B,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],o=e[3],s=e[4],a=e[5],l=e[6],u=e[7],c=e[8];return n*s*c-n*a*u-i*o*c+i*a*l+r*o*u-r*s*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],o=e[3],s=e[4],a=e[5],l=e[6],u=e[7],c=e[8],d=c*s-a*u,f=a*l-c*o,h=u*o-s*l,m=n*d+i*f+r*h;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/m;return e[0]=d*v,e[1]=(r*u-c*i)*v,e[2]=(a*i-r*s)*v,e[3]=f*v,e[4]=(c*n-r*l)*v,e[5]=(r*o-a*n)*v,e[6]=h*v,e[7]=(i*l-u*n)*v,e[8]=(s*n-i*o)*v,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,o,s,a){const l=Math.cos(o),u=Math.sin(o);return this.set(i*l,i*u,-i*(l*s+u*a)+s+e,-r*u,r*l,-r*(-u*s+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(Lc.makeScale(e,n)),this}rotate(e){return this.premultiply(Lc.makeRotation(-e)),this}translate(e,n){return this.premultiply(Lc.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Lc=new ct,fm=new ct().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),hm=new ct().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function kS(){const t={enabled:!0,workingColorSpace:zr,spaces:{},convert:function(r,o,s){return this.enabled===!1||o===s||!o||!s||(this.spaces[o].transfer===Mt&&(r.r=Ki(r.r),r.g=Ki(r.g),r.b=Ki(r.b)),this.spaces[o].primaries!==this.spaces[s].primaries&&(r.applyMatrix3(this.spaces[o].toXYZ),r.applyMatrix3(this.spaces[s].fromXYZ)),this.spaces[s].transfer===Mt&&(r.r=es(r.r),r.g=es(r.g),r.b=es(r.b))),r},workingToColorSpace:function(r,o){return this.convert(r,this.workingColorSpace,o)},colorSpaceToWorking:function(r,o){return this.convert(r,o,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Rr?lu:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,o=this.workingColorSpace){return r.fromArray(this.spaces[o].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,o,s){return r.copy(this.spaces[o].toXYZ).multiply(this.spaces[s].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,o){return du("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(r,o)},toWorkingColorSpace:function(r,o){return du("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(r,o)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[zr]:{primaries:e,whitePoint:i,transfer:lu,toXYZ:fm,fromXYZ:hm,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:On},outputColorSpaceConfig:{drawingBufferColorSpace:On}},[On]:{primaries:e,whitePoint:i,transfer:Mt,toXYZ:fm,fromXYZ:hm,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:On}}}),t}const gt=kS();function Ki(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function es(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Do;class zS{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Do===void 0&&(Do=cu("canvas")),Do.width=e.width,Do.height=e.height;const r=Do.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=Do}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=cu("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),o=r.data;for(let s=0;s<o.length;s++)o[s]=Ki(o[s]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Ki(n[i]/255)*255):n[i]=Ki(n[i]);return{data:n,width:e.width,height:e.height}}else return st("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let VS=0;class Dh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:VS++}),this.uuid=Pa(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayHeight,n.displayWidth,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let o;if(Array.isArray(r)){o=[];for(let s=0,a=r.length;s<a;s++)r[s].isDataTexture?o.push(Fc(r[s].image)):o.push(Fc(r[s]))}else o=Fc(r);i.url=o}return n||(e.images[this.uuid]=i),i}}function Fc(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?zS.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(st("Texture: Unable to serialize Texture."),{})}let $S=0;const Uc=new ye;class on extends _s{constructor(e=on.DEFAULT_IMAGE,n=on.DEFAULT_MAPPING,i=Hi,r=Hi,o=Rt,s=co,a=bn,l=yn,u=on.DEFAULT_ANISOTROPY,c=Rr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:$S++}),this.uuid=Pa(),this.name="",this.source=new Dh(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=o,this.minFilter=s,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Tt(0,0),this.repeat=new Tt(1,1),this.center=new Tt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ct,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Uc).x}get height(){return this.source.getSize(Uc).y}get depth(){return this.source.getSize(Uc).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){st(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){st(`Texture.setValues(): property '${n}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Y0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case qd:e.x=e.x-Math.floor(e.x);break;case Hi:e.x=e.x<0?0:1;break;case Kd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case qd:e.y=e.y-Math.floor(e.y);break;case Hi:e.y=e.y<0?0:1;break;case Kd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}on.DEFAULT_IMAGE=null;on.DEFAULT_MAPPING=Y0;on.DEFAULT_ANISOTROPY=1;class zt{constructor(e=0,n=0,i=0,r=1){zt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,o=this.w,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r+s[12]*o,this.y=s[1]*n+s[5]*i+s[9]*r+s[13]*o,this.z=s[2]*n+s[6]*i+s[10]*r+s[14]*o,this.w=s[3]*n+s[7]*i+s[11]*r+s[15]*o,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,o;const l=e.elements,u=l[0],c=l[4],d=l[8],f=l[1],h=l[5],m=l[9],v=l[2],g=l[6],p=l[10];if(Math.abs(c-f)<.01&&Math.abs(d-v)<.01&&Math.abs(m-g)<.01){if(Math.abs(c+f)<.1&&Math.abs(d+v)<.1&&Math.abs(m+g)<.1&&Math.abs(u+h+p-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const M=(u+1)/2,_=(h+1)/2,P=(p+1)/2,D=(c+f)/4,B=(d+v)/4,y=(m+g)/4;return M>_&&M>P?M<.01?(i=0,r=.707106781,o=.707106781):(i=Math.sqrt(M),r=D/i,o=B/i):_>P?_<.01?(i=.707106781,r=0,o=.707106781):(r=Math.sqrt(_),i=D/r,o=y/r):P<.01?(i=.707106781,r=.707106781,o=0):(o=Math.sqrt(P),i=B/o,r=y/o),this.set(i,r,o,n),this}let b=Math.sqrt((g-m)*(g-m)+(d-v)*(d-v)+(f-c)*(f-c));return Math.abs(b)<.001&&(b=1),this.x=(g-m)/b,this.y=(d-v)/b,this.z=(f-c)/b,this.w=Math.acos((u+h+p-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=pt(this.x,e.x,n.x),this.y=pt(this.y,e.y,n.y),this.z=pt(this.z,e.z,n.z),this.w=pt(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=pt(this.x,e,n),this.y=pt(this.y,e,n),this.z=pt(this.z,e,n),this.w=pt(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(pt(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class HS extends _s{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Rt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new zt(0,0,e,n),this.scissorTest=!1,this.viewport=new zt(0,0,e,n),this.textures=[];const r={width:e,height:n,depth:i.depth},o=new on(r),s=i.count;for(let a=0;a<s;a++)this.textures[a]=o.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const n={minFilter:Rt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,o=this.textures.length;r<o;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const r=Object.assign({},e.textures[n].image);this.textures[n].source=new Dh(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Mn extends HS{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class n_ extends on{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=nn,this.minFilter=nn,this.wrapR=Hi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class GS extends on{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=nn,this.minFilter=nn,this.wrapR=Hi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Wt{constructor(e,n,i,r,o,s,a,l,u,c,d,f,h,m,v,g){Wt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,o,s,a,l,u,c,d,f,h,m,v,g)}set(e,n,i,r,o,s,a,l,u,c,d,f,h,m,v,g){const p=this.elements;return p[0]=e,p[4]=n,p[8]=i,p[12]=r,p[1]=o,p[5]=s,p[9]=a,p[13]=l,p[2]=u,p[6]=c,p[10]=d,p[14]=f,p[3]=h,p[7]=m,p[11]=v,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Wt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return this.determinant()===0?(e.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const n=this.elements,i=e.elements,r=1/Lo.setFromMatrixColumn(e,0).length(),o=1/Lo.setFromMatrixColumn(e,1).length(),s=1/Lo.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*o,n[5]=i[5]*o,n[6]=i[6]*o,n[7]=0,n[8]=i[8]*s,n[9]=i[9]*s,n[10]=i[10]*s,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,o=e.z,s=Math.cos(i),a=Math.sin(i),l=Math.cos(r),u=Math.sin(r),c=Math.cos(o),d=Math.sin(o);if(e.order==="XYZ"){const f=s*c,h=s*d,m=a*c,v=a*d;n[0]=l*c,n[4]=-l*d,n[8]=u,n[1]=h+m*u,n[5]=f-v*u,n[9]=-a*l,n[2]=v-f*u,n[6]=m+h*u,n[10]=s*l}else if(e.order==="YXZ"){const f=l*c,h=l*d,m=u*c,v=u*d;n[0]=f+v*a,n[4]=m*a-h,n[8]=s*u,n[1]=s*d,n[5]=s*c,n[9]=-a,n[2]=h*a-m,n[6]=v+f*a,n[10]=s*l}else if(e.order==="ZXY"){const f=l*c,h=l*d,m=u*c,v=u*d;n[0]=f-v*a,n[4]=-s*d,n[8]=m+h*a,n[1]=h+m*a,n[5]=s*c,n[9]=v-f*a,n[2]=-s*u,n[6]=a,n[10]=s*l}else if(e.order==="ZYX"){const f=s*c,h=s*d,m=a*c,v=a*d;n[0]=l*c,n[4]=m*u-h,n[8]=f*u+v,n[1]=l*d,n[5]=v*u+f,n[9]=h*u-m,n[2]=-u,n[6]=a*l,n[10]=s*l}else if(e.order==="YZX"){const f=s*l,h=s*u,m=a*l,v=a*u;n[0]=l*c,n[4]=v-f*d,n[8]=m*d+h,n[1]=d,n[5]=s*c,n[9]=-a*c,n[2]=-u*c,n[6]=h*d+m,n[10]=f-v*d}else if(e.order==="XZY"){const f=s*l,h=s*u,m=a*l,v=a*u;n[0]=l*c,n[4]=-d,n[8]=u*c,n[1]=f*d+v,n[5]=s*c,n[9]=h*d-m,n[2]=m*d-h,n[6]=a*c,n[10]=v*d+f}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(WS,e,XS)}lookAt(e,n,i){const r=this.elements;return Cn.subVectors(e,n),Cn.lengthSq()===0&&(Cn.z=1),Cn.normalize(),pr.crossVectors(i,Cn),pr.lengthSq()===0&&(Math.abs(i.z)===1?Cn.x+=1e-4:Cn.z+=1e-4,Cn.normalize(),pr.crossVectors(i,Cn)),pr.normalize(),Ya.crossVectors(Cn,pr),r[0]=pr.x,r[4]=Ya.x,r[8]=Cn.x,r[1]=pr.y,r[5]=Ya.y,r[9]=Cn.y,r[2]=pr.z,r[6]=Ya.z,r[10]=Cn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,o=this.elements,s=i[0],a=i[4],l=i[8],u=i[12],c=i[1],d=i[5],f=i[9],h=i[13],m=i[2],v=i[6],g=i[10],p=i[14],b=i[3],M=i[7],_=i[11],P=i[15],D=r[0],B=r[4],y=r[8],x=r[12],T=r[1],E=r[5],I=r[9],q=r[13],w=r[2],k=r[6],A=r[10],N=r[14],O=r[3],$=r[7],K=r[11],te=r[15];return o[0]=s*D+a*T+l*w+u*O,o[4]=s*B+a*E+l*k+u*$,o[8]=s*y+a*I+l*A+u*K,o[12]=s*x+a*q+l*N+u*te,o[1]=c*D+d*T+f*w+h*O,o[5]=c*B+d*E+f*k+h*$,o[9]=c*y+d*I+f*A+h*K,o[13]=c*x+d*q+f*N+h*te,o[2]=m*D+v*T+g*w+p*O,o[6]=m*B+v*E+g*k+p*$,o[10]=m*y+v*I+g*A+p*K,o[14]=m*x+v*q+g*N+p*te,o[3]=b*D+M*T+_*w+P*O,o[7]=b*B+M*E+_*k+P*$,o[11]=b*y+M*I+_*A+P*K,o[15]=b*x+M*q+_*N+P*te,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],o=e[12],s=e[1],a=e[5],l=e[9],u=e[13],c=e[2],d=e[6],f=e[10],h=e[14],m=e[3],v=e[7],g=e[11],p=e[15],b=l*h-u*f,M=a*h-u*d,_=a*f-l*d,P=s*h-u*c,D=s*f-l*c,B=s*d-a*c;return n*(v*b-g*M+p*_)-i*(m*b-g*P+p*D)+r*(m*M-v*P+p*B)-o*(m*_-v*D+g*B)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],o=e[3],s=e[4],a=e[5],l=e[6],u=e[7],c=e[8],d=e[9],f=e[10],h=e[11],m=e[12],v=e[13],g=e[14],p=e[15],b=n*a-i*s,M=n*l-r*s,_=n*u-o*s,P=i*l-r*a,D=i*u-o*a,B=r*u-o*l,y=c*v-d*m,x=c*g-f*m,T=c*p-h*m,E=d*g-f*v,I=d*p-h*v,q=f*p-h*g,w=b*q-M*I+_*E+P*T-D*x+B*y;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const k=1/w;return e[0]=(a*q-l*I+u*E)*k,e[1]=(r*I-i*q-o*E)*k,e[2]=(v*B-g*D+p*P)*k,e[3]=(f*D-d*B-h*P)*k,e[4]=(l*T-s*q-u*x)*k,e[5]=(n*q-r*T+o*x)*k,e[6]=(g*_-m*B-p*M)*k,e[7]=(c*B-f*_+h*M)*k,e[8]=(s*I-a*T+u*y)*k,e[9]=(i*T-n*I-o*y)*k,e[10]=(m*D-v*_+p*b)*k,e[11]=(d*_-c*D-h*b)*k,e[12]=(a*x-s*E-l*y)*k,e[13]=(n*E-i*x+r*y)*k,e[14]=(v*M-m*P-g*b)*k,e[15]=(c*P-d*M+f*b)*k,this}scale(e){const n=this.elements,i=e.x,r=e.y,o=e.z;return n[0]*=i,n[4]*=r,n[8]*=o,n[1]*=i,n[5]*=r,n[9]*=o,n[2]*=i,n[6]*=r,n[10]*=o,n[3]*=i,n[7]*=r,n[11]*=o,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),o=1-i,s=e.x,a=e.y,l=e.z,u=o*s,c=o*a;return this.set(u*s+i,u*a-r*l,u*l+r*a,0,u*a+r*l,c*a+i,c*l-r*s,0,u*l-r*a,c*l+r*s,o*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,o,s){return this.set(1,i,o,0,e,1,s,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,o=n._x,s=n._y,a=n._z,l=n._w,u=o+o,c=s+s,d=a+a,f=o*u,h=o*c,m=o*d,v=s*c,g=s*d,p=a*d,b=l*u,M=l*c,_=l*d,P=i.x,D=i.y,B=i.z;return r[0]=(1-(v+p))*P,r[1]=(h+_)*P,r[2]=(m-M)*P,r[3]=0,r[4]=(h-_)*D,r[5]=(1-(f+p))*D,r[6]=(g+b)*D,r[7]=0,r[8]=(m+M)*B,r[9]=(g-b)*B,r[10]=(1-(f+v))*B,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const o=this.determinant();if(o===0)return i.set(1,1,1),n.identity(),this;let s=Lo.set(r[0],r[1],r[2]).length();const a=Lo.set(r[4],r[5],r[6]).length(),l=Lo.set(r[8],r[9],r[10]).length();o<0&&(s=-s),Vn.copy(this);const u=1/s,c=1/a,d=1/l;return Vn.elements[0]*=u,Vn.elements[1]*=u,Vn.elements[2]*=u,Vn.elements[4]*=c,Vn.elements[5]*=c,Vn.elements[6]*=c,Vn.elements[8]*=d,Vn.elements[9]*=d,Vn.elements[10]*=d,n.setFromRotationMatrix(Vn),i.x=s,i.y=a,i.z=l,this}makePerspective(e,n,i,r,o,s,a=mi,l=!1){const u=this.elements,c=2*o/(n-e),d=2*o/(i-r),f=(n+e)/(n-e),h=(i+r)/(i-r);let m,v;if(l)m=o/(s-o),v=s*o/(s-o);else if(a===mi)m=-(s+o)/(s-o),v=-2*s*o/(s-o);else if(a===uu)m=-s/(s-o),v=-s*o/(s-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return u[0]=c,u[4]=0,u[8]=f,u[12]=0,u[1]=0,u[5]=d,u[9]=h,u[13]=0,u[2]=0,u[6]=0,u[10]=m,u[14]=v,u[3]=0,u[7]=0,u[11]=-1,u[15]=0,this}makeOrthographic(e,n,i,r,o,s,a=mi,l=!1){const u=this.elements,c=2/(n-e),d=2/(i-r),f=-(n+e)/(n-e),h=-(i+r)/(i-r);let m,v;if(l)m=1/(s-o),v=s/(s-o);else if(a===mi)m=-2/(s-o),v=-(s+o)/(s-o);else if(a===uu)m=-1/(s-o),v=-o/(s-o);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return u[0]=c,u[4]=0,u[8]=0,u[12]=f,u[1]=0,u[5]=d,u[9]=0,u[13]=h,u[2]=0,u[6]=0,u[10]=m,u[14]=v,u[3]=0,u[7]=0,u[11]=0,u[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Lo=new ye,Vn=new Wt,WS=new ye(0,0,0),XS=new ye(1,1,1),pr=new ye,Ya=new ye,Cn=new ye,pm=new Wt,mm=new ys;class ir{constructor(e=0,n=0,i=0,r=ir.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,o=r[0],s=r[4],a=r[8],l=r[1],u=r[5],c=r[9],d=r[2],f=r[6],h=r[10];switch(n){case"XYZ":this._y=Math.asin(pt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-c,h),this._z=Math.atan2(-s,o)):(this._x=Math.atan2(f,u),this._z=0);break;case"YXZ":this._x=Math.asin(-pt(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(a,h),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-d,o),this._z=0);break;case"ZXY":this._x=Math.asin(pt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,h),this._z=Math.atan2(-s,u)):(this._y=0,this._z=Math.atan2(l,o));break;case"ZYX":this._y=Math.asin(-pt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,h),this._z=Math.atan2(l,o)):(this._x=0,this._z=Math.atan2(-s,u));break;case"YZX":this._z=Math.asin(pt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,u),this._y=Math.atan2(-d,o)):(this._x=0,this._y=Math.atan2(a,h));break;case"XZY":this._z=Math.asin(-pt(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(f,u),this._y=Math.atan2(a,o)):(this._x=Math.atan2(-c,h),this._y=0);break;default:st("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return pm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(pm,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return mm.setFromEuler(this),this.setFromQuaternion(mm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ir.DEFAULT_ORDER="XYZ";class i_{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let YS=0;const gm=new ye,Fo=new ys,Ii=new Wt,qa=new ye,Ts=new ye,qS=new ye,KS=new ys,vm=new ye(1,0,0),_m=new ye(0,1,0),ym=new ye(0,0,1),xm={type:"added"},ZS={type:"removed"},Uo={type:"childadded",child:null},Oc={type:"childremoved",child:null};class Nn extends _s{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:YS++}),this.uuid=Pa(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Nn.DEFAULT_UP.clone();const e=new ye,n=new ir,i=new ys,r=new ye(1,1,1);function o(){i.setFromEuler(n,!1)}function s(){n.setFromQuaternion(i,void 0,!1)}n._onChange(o),i._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Wt},normalMatrix:{value:new ct}}),this.matrix=new Wt,this.matrixWorld=new Wt,this.matrixAutoUpdate=Nn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Nn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new i_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Fo.setFromAxisAngle(e,n),this.quaternion.multiply(Fo),this}rotateOnWorldAxis(e,n){return Fo.setFromAxisAngle(e,n),this.quaternion.premultiply(Fo),this}rotateX(e){return this.rotateOnAxis(vm,e)}rotateY(e){return this.rotateOnAxis(_m,e)}rotateZ(e){return this.rotateOnAxis(ym,e)}translateOnAxis(e,n){return gm.copy(e).applyQuaternion(this.quaternion),this.position.add(gm.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(vm,e)}translateY(e){return this.translateOnAxis(_m,e)}translateZ(e){return this.translateOnAxis(ym,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ii.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?qa.copy(e):qa.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Ts.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ii.lookAt(Ts,qa,this.up):Ii.lookAt(qa,Ts,this.up),this.quaternion.setFromRotationMatrix(Ii),r&&(Ii.extractRotation(r.matrixWorld),Fo.setFromRotationMatrix(Ii),this.quaternion.premultiply(Fo.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(_t("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(xm),Uo.child=e,this.dispatchEvent(Uo),Uo.child=null):_t("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(ZS),Oc.child=e,this.dispatchEvent(Oc),Oc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ii.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ii.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ii),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(xm),Uo.child=e,this.dispatchEvent(Uo),Uo.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const s=this.children[i].getObjectByProperty(e,n);if(s!==void 0)return s}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let o=0,s=r.length;o<s;o++)r[o].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ts,e,qS),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ts,KS,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const n=e.x,i=e.y,r=e.z,o=this.matrix.elements;o[12]+=n-o[0]*n-o[4]*i-o[8]*r,o[13]+=i-o[1]*n-o[5]*i-o[9]*r,o[14]+=r-o[2]*n-o[6]*i-o[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let o=0,s=r.length;o<s;o++)r[o].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function o(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=o(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,c=l.length;u<c;u++){const d=l[u];o(e.shapes,d)}else o(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(o(e.materials,this.material[l]));r.material=a}else r.material=o(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(o(e.animations,l))}}if(n){const a=s(e.geometries),l=s(e.materials),u=s(e.textures),c=s(e.images),d=s(e.shapes),f=s(e.skeletons),h=s(e.animations),m=s(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),c.length>0&&(i.images=c),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),h.length>0&&(i.animations=h),m.length>0&&(i.nodes=m)}return i.object=r,i;function s(a){const l=[];for(const u in a){const c=a[u];delete c.metadata,l.push(c)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),e.pivot!==null&&(this.pivot=e.pivot.clone()),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Nn.DEFAULT_UP=new ye(0,1,0);Nn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Nn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Ka extends Nn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const jS={type:"move"};class Bc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ka,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ka,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ye,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ye),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ka,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ye,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ye),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,o=null,s=null;const a=this._targetRay,l=this._grip,u=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(u&&e.hand){s=!0;for(const v of e.hand.values()){const g=n.getJointPose(v,i),p=this._getHandJoint(u,v);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}const c=u.joints["index-finger-tip"],d=u.joints["thumb-tip"],f=c.position.distanceTo(d.position),h=.02,m=.005;u.inputState.pinching&&f>h+m?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&f<=h-m&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(o=n.getPose(e.gripSpace,i),o!==null&&(l.matrix.fromArray(o.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,o.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(o.linearVelocity)):l.hasLinearVelocity=!1,o.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(o.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&o!==null&&(r=o),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(jS)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=o!==null),u!==null&&(u.visible=s!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Ka;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const r_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},mr={h:0,s:0,l:0},Za={h:0,s:0,l:0};function kc(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}let Et=class{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=On){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,gt.colorSpaceToWorking(this,n),this}setRGB(e,n,i,r=gt.workingColorSpace){return this.r=e,this.g=n,this.b=i,gt.colorSpaceToWorking(this,r),this}setHSL(e,n,i,r=gt.workingColorSpace){if(e=BS(e,1),n=pt(n,0,1),i=pt(i,0,1),n===0)this.r=this.g=this.b=i;else{const o=i<=.5?i*(1+n):i+n-i*n,s=2*i-o;this.r=kc(s,o,e+1/3),this.g=kc(s,o,e),this.b=kc(s,o,e-1/3)}return gt.colorSpaceToWorking(this,r),this}setStyle(e,n=On){function i(o){o!==void 0&&parseFloat(o)<1&&st("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let o;const s=r[1],a=r[2];switch(s){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,n);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,n);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,n);break;default:st("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const o=r[1],s=o.length;if(s===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,n);if(s===6)return this.setHex(parseInt(o,16),n);st("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=On){const i=r_[e.toLowerCase()];return i!==void 0?this.setHex(i,n):st("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ki(e.r),this.g=Ki(e.g),this.b=Ki(e.b),this}copyLinearToSRGB(e){return this.r=es(e.r),this.g=es(e.g),this.b=es(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=On){return gt.workingToColorSpace(ln.copy(this),e),Math.round(pt(ln.r*255,0,255))*65536+Math.round(pt(ln.g*255,0,255))*256+Math.round(pt(ln.b*255,0,255))}getHexString(e=On){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=gt.workingColorSpace){gt.workingToColorSpace(ln.copy(this),n);const i=ln.r,r=ln.g,o=ln.b,s=Math.max(i,r,o),a=Math.min(i,r,o);let l,u;const c=(a+s)/2;if(a===s)l=0,u=0;else{const d=s-a;switch(u=c<=.5?d/(s+a):d/(2-s-a),s){case i:l=(r-o)/d+(r<o?6:0);break;case r:l=(o-i)/d+2;break;case o:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=u,e.l=c,e}getRGB(e,n=gt.workingColorSpace){return gt.workingToColorSpace(ln.copy(this),n),e.r=ln.r,e.g=ln.g,e.b=ln.b,e}getStyle(e=On){gt.workingToColorSpace(ln.copy(this),e);const n=ln.r,i=ln.g,r=ln.b;return e!==On?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(mr),this.setHSL(mr.h+e,mr.s+n,mr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(mr),e.getHSL(Za);const i=Nc(mr.h,Za.h,n),r=Nc(mr.s,Za.s,n),o=Nc(mr.l,Za.l,n);return this.setHSL(i,r,o),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,o=e.elements;return this.r=o[0]*n+o[3]*i+o[6]*r,this.g=o[1]*n+o[4]*i+o[7]*r,this.b=o[2]*n+o[5]*i+o[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}};const ln=new Et;Et.NAMES=r_;class JS extends Nn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ir,this.environmentIntensity=1,this.environmentRotation=new ir,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const $n=new ye,Pi=new ye,zc=new ye,Ni=new ye,Oo=new ye,Bo=new ye,bm=new ye,Vc=new ye,$c=new ye,Hc=new ye,Gc=new zt,Wc=new zt,Xc=new zt;class Wn{constructor(e=new ye,n=new ye,i=new ye){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),$n.subVectors(e,n),r.cross($n);const o=r.lengthSq();return o>0?r.multiplyScalar(1/Math.sqrt(o)):r.set(0,0,0)}static getBarycoord(e,n,i,r,o){$n.subVectors(r,n),Pi.subVectors(i,n),zc.subVectors(e,n);const s=$n.dot($n),a=$n.dot(Pi),l=$n.dot(zc),u=Pi.dot(Pi),c=Pi.dot(zc),d=s*u-a*a;if(d===0)return o.set(0,0,0),null;const f=1/d,h=(u*l-a*c)*f,m=(s*c-a*l)*f;return o.set(1-h-m,m,h)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,Ni)===null?!1:Ni.x>=0&&Ni.y>=0&&Ni.x+Ni.y<=1}static getInterpolation(e,n,i,r,o,s,a,l){return this.getBarycoord(e,n,i,r,Ni)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(o,Ni.x),l.addScaledVector(s,Ni.y),l.addScaledVector(a,Ni.z),l)}static getInterpolatedAttribute(e,n,i,r,o,s){return Gc.setScalar(0),Wc.setScalar(0),Xc.setScalar(0),Gc.fromBufferAttribute(e,n),Wc.fromBufferAttribute(e,i),Xc.fromBufferAttribute(e,r),s.setScalar(0),s.addScaledVector(Gc,o.x),s.addScaledVector(Wc,o.y),s.addScaledVector(Xc,o.z),s}static isFrontFacing(e,n,i,r){return $n.subVectors(i,n),Pi.subVectors(e,n),$n.cross(Pi).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return $n.subVectors(this.c,this.b),Pi.subVectors(this.a,this.b),$n.cross(Pi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Wn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Wn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,o){return Wn.getInterpolation(e,this.a,this.b,this.c,n,i,r,o)}containsPoint(e){return Wn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Wn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,o=this.c;let s,a;Oo.subVectors(r,i),Bo.subVectors(o,i),Vc.subVectors(e,i);const l=Oo.dot(Vc),u=Bo.dot(Vc);if(l<=0&&u<=0)return n.copy(i);$c.subVectors(e,r);const c=Oo.dot($c),d=Bo.dot($c);if(c>=0&&d<=c)return n.copy(r);const f=l*d-c*u;if(f<=0&&l>=0&&c<=0)return s=l/(l-c),n.copy(i).addScaledVector(Oo,s);Hc.subVectors(e,o);const h=Oo.dot(Hc),m=Bo.dot(Hc);if(m>=0&&h<=m)return n.copy(o);const v=h*u-l*m;if(v<=0&&u>=0&&m<=0)return a=u/(u-m),n.copy(i).addScaledVector(Bo,a);const g=c*m-h*d;if(g<=0&&d-c>=0&&h-m>=0)return bm.subVectors(o,r),a=(d-c)/(d-c+(h-m)),n.copy(r).addScaledVector(bm,a);const p=1/(g+v+f);return s=v*p,a=f*p,n.copy(i).addScaledVector(Oo,s).addScaledVector(Bo,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Na{constructor(e=new ye(1/0,1/0,1/0),n=new ye(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Hn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Hn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Hn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const o=i.getAttribute("position");if(n===!0&&o!==void 0&&e.isInstancedMesh!==!0)for(let s=0,a=o.count;s<a;s++)e.isMesh===!0?e.getVertexPosition(s,Hn):Hn.fromBufferAttribute(o,s),Hn.applyMatrix4(e.matrixWorld),this.expandByPoint(Hn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ja.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ja.copy(i.boundingBox)),ja.applyMatrix4(e.matrixWorld),this.union(ja)}const r=e.children;for(let o=0,s=r.length;o<s;o++)this.expandByObject(r[o],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Hn),Hn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(As),Ja.subVectors(this.max,As),ko.subVectors(e.a,As),zo.subVectors(e.b,As),Vo.subVectors(e.c,As),gr.subVectors(zo,ko),vr.subVectors(Vo,zo),Zr.subVectors(ko,Vo);let n=[0,-gr.z,gr.y,0,-vr.z,vr.y,0,-Zr.z,Zr.y,gr.z,0,-gr.x,vr.z,0,-vr.x,Zr.z,0,-Zr.x,-gr.y,gr.x,0,-vr.y,vr.x,0,-Zr.y,Zr.x,0];return!Yc(n,ko,zo,Vo,Ja)||(n=[1,0,0,0,1,0,0,0,1],!Yc(n,ko,zo,Vo,Ja))?!1:(Qa.crossVectors(gr,vr),n=[Qa.x,Qa.y,Qa.z],Yc(n,ko,zo,Vo,Ja))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Hn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Hn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Di[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Di[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Di[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Di[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Di[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Di[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Di[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Di[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Di),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Di=[new ye,new ye,new ye,new ye,new ye,new ye,new ye,new ye],Hn=new ye,ja=new Na,ko=new ye,zo=new ye,Vo=new ye,gr=new ye,vr=new ye,Zr=new ye,As=new ye,Ja=new ye,Qa=new ye,jr=new ye;function Yc(t,e,n,i,r){for(let o=0,s=t.length-3;o<=s;o+=3){jr.fromArray(t,o);const a=r.x*Math.abs(jr.x)+r.y*Math.abs(jr.y)+r.z*Math.abs(jr.z),l=e.dot(jr),u=n.dot(jr),c=i.dot(jr);if(Math.max(-Math.max(l,u,c),Math.min(l,u,c))>a)return!1}return!0}const Vt=new ye,el=new Tt;let QS=0;class _i{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:QS++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=am,this.updateRanges=[],this.gpuType=pi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,o=this.itemSize;r<o;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)el.fromBufferAttribute(this,n),el.applyMatrix3(e),this.setXY(n,el.x,el.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Vt.fromBufferAttribute(this,n),Vt.applyMatrix3(e),this.setXYZ(n,Vt.x,Vt.y,Vt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Vt.fromBufferAttribute(this,n),Vt.applyMatrix4(e),this.setXYZ(n,Vt.x,Vt.y,Vt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Vt.fromBufferAttribute(this,n),Vt.applyNormalMatrix(e),this.setXYZ(n,Vt.x,Vt.y,Vt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Vt.fromBufferAttribute(this,n),Vt.transformDirection(e),this.setXYZ(n,Vt.x,Vt.y,Vt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Es(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=Sn(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Es(n,this.array)),n}setX(e,n){return this.normalized&&(n=Sn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Es(n,this.array)),n}setY(e,n){return this.normalized&&(n=Sn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Es(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Sn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Es(n,this.array)),n}setW(e,n){return this.normalized&&(n=Sn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=Sn(n,this.array),i=Sn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=Sn(n,this.array),i=Sn(i,this.array),r=Sn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,o){return e*=this.itemSize,this.normalized&&(n=Sn(n,this.array),i=Sn(i,this.array),r=Sn(r,this.array),o=Sn(o,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=o,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==am&&(e.usage=this.usage),e}}class o_ extends _i{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class s_ extends _i{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Zi extends _i{constructor(e,n,i){super(new Float32Array(e),n,i)}}const eM=new Na,Cs=new ye,qc=new ye;class Lh{constructor(e=new ye,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):eM.setFromPoints(e).getCenter(i);let r=0;for(let o=0,s=e.length;o<s;o++)r=Math.max(r,i.distanceToSquared(e[o]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Cs.subVectors(e,this.center);const n=Cs.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Cs,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(qc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Cs.copy(e.center).add(qc)),this.expandByPoint(Cs.copy(e.center).sub(qc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let tM=0;const Un=new Wt,Kc=new Nn,$o=new ye,Rn=new Na,Rs=new Na,Jt=new ye;class ur extends _s{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:tM++}),this.uuid=Pa(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(LS(e)?s_:o_)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const o=new ct().getNormalMatrix(e);i.applyNormalMatrix(o),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Un.makeRotationFromQuaternion(e),this.applyMatrix4(Un),this}rotateX(e){return Un.makeRotationX(e),this.applyMatrix4(Un),this}rotateY(e){return Un.makeRotationY(e),this.applyMatrix4(Un),this}rotateZ(e){return Un.makeRotationZ(e),this.applyMatrix4(Un),this}translate(e,n,i){return Un.makeTranslation(e,n,i),this.applyMatrix4(Un),this}scale(e,n,i){return Un.makeScale(e,n,i),this.applyMatrix4(Un),this}lookAt(e){return Kc.lookAt(e),Kc.updateMatrix(),this.applyMatrix4(Kc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter($o).negate(),this.translate($o.x,$o.y,$o.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,o=e.length;r<o;r++){const s=e[r];i.push(s.x,s.y,s.z||0)}this.setAttribute("position",new Zi(i,3))}else{const i=Math.min(e.length,n.count);for(let r=0;r<i;r++){const o=e[r];n.setXYZ(r,o.x,o.y,o.z||0)}e.length>n.count&&st("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Na);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){_t("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ye(-1/0,-1/0,-1/0),new ye(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const o=n[i];Rn.setFromBufferAttribute(o),this.morphTargetsRelative?(Jt.addVectors(this.boundingBox.min,Rn.min),this.boundingBox.expandByPoint(Jt),Jt.addVectors(this.boundingBox.max,Rn.max),this.boundingBox.expandByPoint(Jt)):(this.boundingBox.expandByPoint(Rn.min),this.boundingBox.expandByPoint(Rn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&_t('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Lh);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){_t("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ye,1/0);return}if(e){const i=this.boundingSphere.center;if(Rn.setFromBufferAttribute(e),n)for(let o=0,s=n.length;o<s;o++){const a=n[o];Rs.setFromBufferAttribute(a),this.morphTargetsRelative?(Jt.addVectors(Rn.min,Rs.min),Rn.expandByPoint(Jt),Jt.addVectors(Rn.max,Rs.max),Rn.expandByPoint(Jt)):(Rn.expandByPoint(Rs.min),Rn.expandByPoint(Rs.max))}Rn.getCenter(i);let r=0;for(let o=0,s=e.count;o<s;o++)Jt.fromBufferAttribute(e,o),r=Math.max(r,i.distanceToSquared(Jt));if(n)for(let o=0,s=n.length;o<s;o++){const a=n[o],l=this.morphTargetsRelative;for(let u=0,c=a.count;u<c;u++)Jt.fromBufferAttribute(a,u),l&&($o.fromBufferAttribute(e,u),Jt.add($o)),r=Math.max(r,i.distanceToSquared(Jt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&_t('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){_t("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,o=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new _i(new Float32Array(4*i.count),4));const s=this.getAttribute("tangent"),a=[],l=[];for(let y=0;y<i.count;y++)a[y]=new ye,l[y]=new ye;const u=new ye,c=new ye,d=new ye,f=new Tt,h=new Tt,m=new Tt,v=new ye,g=new ye;function p(y,x,T){u.fromBufferAttribute(i,y),c.fromBufferAttribute(i,x),d.fromBufferAttribute(i,T),f.fromBufferAttribute(o,y),h.fromBufferAttribute(o,x),m.fromBufferAttribute(o,T),c.sub(u),d.sub(u),h.sub(f),m.sub(f);const E=1/(h.x*m.y-m.x*h.y);isFinite(E)&&(v.copy(c).multiplyScalar(m.y).addScaledVector(d,-h.y).multiplyScalar(E),g.copy(d).multiplyScalar(h.x).addScaledVector(c,-m.x).multiplyScalar(E),a[y].add(v),a[x].add(v),a[T].add(v),l[y].add(g),l[x].add(g),l[T].add(g))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let y=0,x=b.length;y<x;++y){const T=b[y],E=T.start,I=T.count;for(let q=E,w=E+I;q<w;q+=3)p(e.getX(q+0),e.getX(q+1),e.getX(q+2))}const M=new ye,_=new ye,P=new ye,D=new ye;function B(y){P.fromBufferAttribute(r,y),D.copy(P);const x=a[y];M.copy(x),M.sub(P.multiplyScalar(P.dot(x))).normalize(),_.crossVectors(D,x);const E=_.dot(l[y])<0?-1:1;s.setXYZW(y,M.x,M.y,M.z,E)}for(let y=0,x=b.length;y<x;++y){const T=b[y],E=T.start,I=T.count;for(let q=E,w=E+I;q<w;q+=3)B(e.getX(q+0)),B(e.getX(q+1)),B(e.getX(q+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new _i(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let f=0,h=i.count;f<h;f++)i.setXYZ(f,0,0,0);const r=new ye,o=new ye,s=new ye,a=new ye,l=new ye,u=new ye,c=new ye,d=new ye;if(e)for(let f=0,h=e.count;f<h;f+=3){const m=e.getX(f+0),v=e.getX(f+1),g=e.getX(f+2);r.fromBufferAttribute(n,m),o.fromBufferAttribute(n,v),s.fromBufferAttribute(n,g),c.subVectors(s,o),d.subVectors(r,o),c.cross(d),a.fromBufferAttribute(i,m),l.fromBufferAttribute(i,v),u.fromBufferAttribute(i,g),a.add(c),l.add(c),u.add(c),i.setXYZ(m,a.x,a.y,a.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(g,u.x,u.y,u.z)}else for(let f=0,h=n.count;f<h;f+=3)r.fromBufferAttribute(n,f+0),o.fromBufferAttribute(n,f+1),s.fromBufferAttribute(n,f+2),c.subVectors(s,o),d.subVectors(r,o),c.cross(d),i.setXYZ(f+0,c.x,c.y,c.z),i.setXYZ(f+1,c.x,c.y,c.z),i.setXYZ(f+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Jt.fromBufferAttribute(e,n),Jt.normalize(),e.setXYZ(n,Jt.x,Jt.y,Jt.z)}toNonIndexed(){function e(a,l){const u=a.array,c=a.itemSize,d=a.normalized,f=new u.constructor(l.length*c);let h=0,m=0;for(let v=0,g=l.length;v<g;v++){a.isInterleavedBufferAttribute?h=l[v]*a.data.stride+a.offset:h=l[v]*c;for(let p=0;p<c;p++)f[m++]=u[h++]}return new _i(f,c,d)}if(this.index===null)return st("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new ur,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],u=e(l,i);n.setAttribute(a,u)}const o=this.morphAttributes;for(const a in o){const l=[],u=o[a];for(let c=0,d=u.length;c<d;c++){const f=u[c],h=e(f,i);l.push(h)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let a=0,l=s.length;a<l;a++){const u=s[a];n.addGroup(u.start,u.count,u.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let o=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],c=[];for(let d=0,f=u.length;d<f;d++){const h=u[d];c.push(h.toJSON(e.data))}c.length>0&&(r[l]=c,o=!0)}o&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const u in r){const c=r[u];this.setAttribute(u,c.clone(n))}const o=e.morphAttributes;for(const u in o){const c=[],d=o[u];for(let f=0,h=d.length;f<h;f++)c.push(d[f].clone(n));this.morphAttributes[u]=c}this.morphTargetsRelative=e.morphTargetsRelative;const s=e.groups;for(let u=0,c=s.length;u<c;u++){const d=s[u];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let nM=0;class Ku extends _s{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:nM++}),this.uuid=Pa(),this.name="",this.type="Material",this.blending=Qo,this.side=kr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=kd,this.blendDst=zd,this.blendEquation=oo,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Et(0,0,0),this.blendAlpha=0,this.depthFunc=ls,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=sm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=No,this.stencilZFail=No,this.stencilZPass=No,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){st(`Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){st(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Qo&&(i.blending=this.blending),this.side!==kr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==kd&&(i.blendSrc=this.blendSrc),this.blendDst!==zd&&(i.blendDst=this.blendDst),this.blendEquation!==oo&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==ls&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==sm&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==No&&(i.stencilFail=this.stencilFail),this.stencilZFail!==No&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==No&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(o){const s=[];for(const a in o){const l=o[a];delete l.metadata,s.push(l)}return s}if(n){const o=r(e.textures),s=r(e.images);o.length>0&&(i.textures=o),s.length>0&&(i.images=s)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let o=0;o!==r;++o)i[o]=n[o].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Li=new ye,Zc=new ye,tl=new ye,_r=new ye,jc=new ye,nl=new ye,Jc=new ye;class iM{constructor(e=new ye,n=new ye(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Li)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Li.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Li.copy(this.origin).addScaledVector(this.direction,n),Li.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Zc.copy(e).add(n).multiplyScalar(.5),tl.copy(n).sub(e).normalize(),_r.copy(this.origin).sub(Zc);const o=e.distanceTo(n)*.5,s=-this.direction.dot(tl),a=_r.dot(this.direction),l=-_r.dot(tl),u=_r.lengthSq(),c=Math.abs(1-s*s);let d,f,h,m;if(c>0)if(d=s*l-a,f=s*a-l,m=o*c,d>=0)if(f>=-m)if(f<=m){const v=1/c;d*=v,f*=v,h=d*(d+s*f+2*a)+f*(s*d+f+2*l)+u}else f=o,d=Math.max(0,-(s*f+a)),h=-d*d+f*(f+2*l)+u;else f=-o,d=Math.max(0,-(s*f+a)),h=-d*d+f*(f+2*l)+u;else f<=-m?(d=Math.max(0,-(-s*o+a)),f=d>0?-o:Math.min(Math.max(-o,-l),o),h=-d*d+f*(f+2*l)+u):f<=m?(d=0,f=Math.min(Math.max(-o,-l),o),h=f*(f+2*l)+u):(d=Math.max(0,-(s*o+a)),f=d>0?o:Math.min(Math.max(-o,-l),o),h=-d*d+f*(f+2*l)+u);else f=s>0?-o:o,d=Math.max(0,-(s*f+a)),h=-d*d+f*(f+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(Zc).addScaledVector(tl,f),h}intersectSphere(e,n){Li.subVectors(e.center,this.origin);const i=Li.dot(this.direction),r=Li.dot(Li)-i*i,o=e.radius*e.radius;if(r>o)return null;const s=Math.sqrt(o-r),a=i-s,l=i+s;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,o,s,a,l;const u=1/this.direction.x,c=1/this.direction.y,d=1/this.direction.z,f=this.origin;return u>=0?(i=(e.min.x-f.x)*u,r=(e.max.x-f.x)*u):(i=(e.max.x-f.x)*u,r=(e.min.x-f.x)*u),c>=0?(o=(e.min.y-f.y)*c,s=(e.max.y-f.y)*c):(o=(e.max.y-f.y)*c,s=(e.min.y-f.y)*c),i>s||o>r||((o>i||isNaN(i))&&(i=o),(s<r||isNaN(r))&&(r=s),d>=0?(a=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(a=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,Li)!==null}intersectTriangle(e,n,i,r,o){jc.subVectors(n,e),nl.subVectors(i,e),Jc.crossVectors(jc,nl);let s=this.direction.dot(Jc),a;if(s>0){if(r)return null;a=1}else if(s<0)a=-1,s=-s;else return null;_r.subVectors(this.origin,e);const l=a*this.direction.dot(nl.crossVectors(_r,nl));if(l<0)return null;const u=a*this.direction.dot(jc.cross(_r));if(u<0||l+u>s)return null;const c=-a*_r.dot(Jc);return c<0?null:this.at(c/s,o)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class a_ extends Ku{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Et(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ir,this.combine=k0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Sm=new Wt,Jr=new iM,il=new Lh,Mm=new ye,rl=new ye,ol=new ye,sl=new ye,Qc=new ye,al=new ye,wm=new ye,ll=new ye;class Si extends Nn{constructor(e=new ur,n=new a_){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,s=r.length;o<s;o++){const a=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,o=i.morphAttributes.position,s=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(o&&a){al.set(0,0,0);for(let l=0,u=o.length;l<u;l++){const c=a[l],d=o[l];c!==0&&(Qc.fromBufferAttribute(d,e),s?al.addScaledVector(Qc,c):al.addScaledVector(Qc.sub(n),c))}n.add(al)}return n}raycast(e,n){const i=this.geometry,r=this.material,o=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),il.copy(i.boundingSphere),il.applyMatrix4(o),Jr.copy(e.ray).recast(e.near),!(il.containsPoint(Jr.origin)===!1&&(Jr.intersectSphere(il,Mm)===null||Jr.origin.distanceToSquared(Mm)>(e.far-e.near)**2))&&(Sm.copy(o).invert(),Jr.copy(e.ray).applyMatrix4(Sm),!(i.boundingBox!==null&&Jr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Jr)))}_computeIntersections(e,n,i){let r;const o=this.geometry,s=this.material,a=o.index,l=o.attributes.position,u=o.attributes.uv,c=o.attributes.uv1,d=o.attributes.normal,f=o.groups,h=o.drawRange;if(a!==null)if(Array.isArray(s))for(let m=0,v=f.length;m<v;m++){const g=f[m],p=s[g.materialIndex],b=Math.max(g.start,h.start),M=Math.min(a.count,Math.min(g.start+g.count,h.start+h.count));for(let _=b,P=M;_<P;_+=3){const D=a.getX(_),B=a.getX(_+1),y=a.getX(_+2);r=ul(this,p,e,i,u,c,d,D,B,y),r&&(r.faceIndex=Math.floor(_/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{const m=Math.max(0,h.start),v=Math.min(a.count,h.start+h.count);for(let g=m,p=v;g<p;g+=3){const b=a.getX(g),M=a.getX(g+1),_=a.getX(g+2);r=ul(this,s,e,i,u,c,d,b,M,_),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(s))for(let m=0,v=f.length;m<v;m++){const g=f[m],p=s[g.materialIndex],b=Math.max(g.start,h.start),M=Math.min(l.count,Math.min(g.start+g.count,h.start+h.count));for(let _=b,P=M;_<P;_+=3){const D=_,B=_+1,y=_+2;r=ul(this,p,e,i,u,c,d,D,B,y),r&&(r.faceIndex=Math.floor(_/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{const m=Math.max(0,h.start),v=Math.min(l.count,h.start+h.count);for(let g=m,p=v;g<p;g+=3){const b=g,M=g+1,_=g+2;r=ul(this,s,e,i,u,c,d,b,M,_),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}}}function rM(t,e,n,i,r,o,s,a){let l;if(e.side===Tn?l=i.intersectTriangle(s,o,r,!0,a):l=i.intersectTriangle(r,o,s,e.side===kr,a),l===null)return null;ll.copy(a),ll.applyMatrix4(t.matrixWorld);const u=n.ray.origin.distanceTo(ll);return u<n.near||u>n.far?null:{distance:u,point:ll.clone(),object:t}}function ul(t,e,n,i,r,o,s,a,l,u){t.getVertexPosition(a,rl),t.getVertexPosition(l,ol),t.getVertexPosition(u,sl);const c=rM(t,e,n,i,rl,ol,sl,wm);if(c){const d=new ye;Wn.getBarycoord(wm,rl,ol,sl,d),r&&(c.uv=Wn.getInterpolatedAttribute(r,a,l,u,d,new Tt)),o&&(c.uv1=Wn.getInterpolatedAttribute(o,a,l,u,d,new Tt)),s&&(c.normal=Wn.getInterpolatedAttribute(s,a,l,u,d,new ye),c.normal.dot(i.direction)>0&&c.normal.multiplyScalar(-1));const f={a,b:l,c:u,normal:new ye,materialIndex:0};Wn.getNormal(rl,ol,sl,f.normal),c.face=f,c.barycoord=d}return c}class oM extends on{constructor(e=null,n=1,i=1,r,o,s,a,l,u=nn,c=nn,d,f){super(null,s,a,l,u,c,r,o,d,f),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const ed=new ye,sM=new ye,aM=new ct;class io{constructor(e=new ye(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=ed.subVectors(i,n).cross(sM.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(ed),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/r;return o<0||o>1?null:n.copy(e.start).addScaledVector(i,o)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||aM.getNormalMatrix(e),r=this.coplanarPoint(ed).applyMatrix4(e),o=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(o),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Qr=new Lh,lM=new Tt(.5,.5),cl=new ye;class l_{constructor(e=new io,n=new io,i=new io,r=new io,o=new io,s=new io){this.planes=[e,n,i,r,o,s]}set(e,n,i,r,o,s){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(o),a[5].copy(s),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=mi,i=!1){const r=this.planes,o=e.elements,s=o[0],a=o[1],l=o[2],u=o[3],c=o[4],d=o[5],f=o[6],h=o[7],m=o[8],v=o[9],g=o[10],p=o[11],b=o[12],M=o[13],_=o[14],P=o[15];if(r[0].setComponents(u-s,h-c,p-m,P-b).normalize(),r[1].setComponents(u+s,h+c,p+m,P+b).normalize(),r[2].setComponents(u+a,h+d,p+v,P+M).normalize(),r[3].setComponents(u-a,h-d,p-v,P-M).normalize(),i)r[4].setComponents(l,f,g,_).normalize(),r[5].setComponents(u-l,h-f,p-g,P-_).normalize();else if(r[4].setComponents(u-l,h-f,p-g,P-_).normalize(),n===mi)r[5].setComponents(u+l,h+f,p+g,P+_).normalize();else if(n===uu)r[5].setComponents(l,f,g,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Qr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Qr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Qr)}intersectsSprite(e){Qr.center.set(0,0,0);const n=lM.distanceTo(e.center);return Qr.radius=.7071067811865476+n,Qr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Qr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let o=0;o<6;o++)if(n[o].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(cl.x=r.normal.x>0?e.max.x:e.min.x,cl.y=r.normal.y>0?e.max.y:e.min.y,cl.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(cl)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class uM extends on{constructor(e,n,i,r,o=Rt,s=Rt,a,l,u){super(e,n,i,r,o,s,a,l,u),this.isVideoTexture=!0,this.generateMipmaps=!1,this._requestVideoFrameCallbackId=0;const c=this;function d(){c.needsUpdate=!0,c._requestVideoFrameCallbackId=e.requestVideoFrameCallback(d)}"requestVideoFrameCallback"in e&&(this._requestVideoFrameCallbackId=e.requestVideoFrameCallback(d))}clone(){return new this.constructor(this.image).copy(this)}update(){const e=this.image;"requestVideoFrameCallback"in e===!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}dispose(){this._requestVideoFrameCallbackId!==0&&(this.source.data.cancelVideoFrameCallback(this._requestVideoFrameCallbackId),this._requestVideoFrameCallbackId=0),super.dispose()}}class u_ extends on{constructor(e=[],n=So,i,r,o,s,a,l,u,c){super(e,n,i,r,o,s,a,l,u,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class fa extends on{constructor(e,n,i=bi,r,o,s,a=nn,l=nn,u,c=nr,d=1){if(c!==nr&&c!==fo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:n,depth:d};super(f,r,o,s,a,l,c,i,u),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Dh(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class cM extends fa{constructor(e,n=bi,i=So,r,o,s=nn,a=nn,l,u=nr){const c={width:e,height:e,depth:1},d=[c,c,c,c,c,c];super(e,e,n,i,r,o,s,a,l,u),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class c_ extends on{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Da extends ur{constructor(e=1,n=1,i=1,r=1,o=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:o,depthSegments:s};const a=this;r=Math.floor(r),o=Math.floor(o),s=Math.floor(s);const l=[],u=[],c=[],d=[];let f=0,h=0;m("z","y","x",-1,-1,i,n,e,s,o,0),m("z","y","x",1,-1,i,n,-e,s,o,1),m("x","z","y",1,1,e,i,n,r,s,2),m("x","z","y",1,-1,e,i,-n,r,s,3),m("x","y","z",1,-1,e,n,i,r,o,4),m("x","y","z",-1,-1,e,n,-i,r,o,5),this.setIndex(l),this.setAttribute("position",new Zi(u,3)),this.setAttribute("normal",new Zi(c,3)),this.setAttribute("uv",new Zi(d,2));function m(v,g,p,b,M,_,P,D,B,y,x){const T=_/B,E=P/y,I=_/2,q=P/2,w=D/2,k=B+1,A=y+1;let N=0,O=0;const $=new ye;for(let K=0;K<A;K++){const te=K*E-q;for(let ne=0;ne<k;ne++){const ge=ne*T-I;$[v]=ge*b,$[g]=te*M,$[p]=w,u.push($.x,$.y,$.z),$[v]=0,$[g]=0,$[p]=D>0?1:-1,c.push($.x,$.y,$.z),d.push(ne/B),d.push(1-K/y),N+=1}}for(let K=0;K<y;K++)for(let te=0;te<B;te++){const ne=f+te+k*K,ge=f+te+k*(K+1),Ee=f+(te+1)+k*(K+1),Se=f+(te+1)+k*K;l.push(ne,ge,Se),l.push(ge,Ee,Se),O+=6}a.addGroup(h,O,x),h+=O,f+=N}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Da(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class La extends ur{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const o=e/2,s=n/2,a=Math.floor(i),l=Math.floor(r),u=a+1,c=l+1,d=e/a,f=n/l,h=[],m=[],v=[],g=[];for(let p=0;p<c;p++){const b=p*f-s;for(let M=0;M<u;M++){const _=M*d-o;m.push(_,-b,0),v.push(0,0,1),g.push(M/a),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let b=0;b<a;b++){const M=b+u*p,_=b+u*(p+1),P=b+1+u*(p+1),D=b+1+u*p;h.push(M,_,D),h.push(_,P,D)}this.setIndex(h),this.setAttribute("position",new Zi(m,3)),this.setAttribute("normal",new Zi(v,3)),this.setAttribute("uv",new Zi(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new La(e.width,e.height,e.widthSegments,e.heightSegments)}}function ds(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(st("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function vn(t){const e={};for(let n=0;n<t.length;n++){const i=ds(t[n]);for(const r in i)e[r]=i[r]}return e}function dM(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function d_(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:gt.workingColorSpace}const fM={clone:ds,merge:vn};var hM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,pM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Qn extends Ku{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=hM,this.fragmentShader=pM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ds(e.uniforms),this.uniformsGroups=dM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const s=this.uniforms[r].value;s&&s.isTexture?n.uniforms[r]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?n.uniforms[r]={type:"c",value:s.getHex()}:s&&s.isVector2?n.uniforms[r]={type:"v2",value:s.toArray()}:s&&s.isVector3?n.uniforms[r]={type:"v3",value:s.toArray()}:s&&s.isVector4?n.uniforms[r]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?n.uniforms[r]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?n.uniforms[r]={type:"m4",value:s.toArray()}:n.uniforms[r]={value:s}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class mM extends Qn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class gM extends Ku{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ES,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class vM extends Ku{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const dl=new ye,fl=new ys,ri=new ye;class f_ extends Nn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Wt,this.projectionMatrix=new Wt,this.projectionMatrixInverse=new Wt,this.coordinateSystem=mi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(dl,fl,ri),ri.x===1&&ri.y===1&&ri.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(dl,fl,ri.set(1,1,1)).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorld.decompose(dl,fl,ri),ri.x===1&&ri.y===1&&ri.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(dl,fl,ri.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const yr=new ye,Em=new Tt,Tm=new Tt;class Gn extends f_{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Rf*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Pc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Rf*2*Math.atan(Math.tan(Pc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){yr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(yr.x,yr.y).multiplyScalar(-e/yr.z),yr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(yr.x,yr.y).multiplyScalar(-e/yr.z)}getViewSize(e,n){return this.getViewBounds(e,Em,Tm),n.subVectors(Tm,Em)}setViewOffset(e,n,i,r,o,s){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=o,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Pc*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,o=-.5*r;const s=this.view;if(this.view!==null&&this.view.enabled){const l=s.fullWidth,u=s.fullHeight;o+=s.offsetX*r/l,n-=s.offsetY*i/u,r*=s.width/l,i*=s.height/u}const a=this.filmOffset;a!==0&&(o+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+r,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class Fh extends f_{constructor(e=-1,n=1,i=1,r=-1,o=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=o,this.far=s,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,o,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=o,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let o=i-e,s=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=u*this.view.offsetX,s=o+u*this.view.width,a-=c*this.view.offsetY,l=a-c*this.view.height}this.projectionMatrix.makeOrthographic(o,s,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Ho=-90,Go=1;class _M extends Nn{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Gn(Ho,Go,e,n);r.layers=this.layers,this.add(r);const o=new Gn(Ho,Go,e,n);o.layers=this.layers,this.add(o);const s=new Gn(Ho,Go,e,n);s.layers=this.layers,this.add(s);const a=new Gn(Ho,Go,e,n);a.layers=this.layers,this.add(a);const l=new Gn(Ho,Go,e,n);l.layers=this.layers,this.add(l);const u=new Gn(Ho,Go,e,n);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,o,s,a,l]=n;for(const u of n)this.remove(u);if(e===mi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===uu)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of n)this.add(u),u.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[o,s,a,l,u,c]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,o),e.setRenderTarget(i,1,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,s),e.setRenderTarget(i,2,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,a),e.setRenderTarget(i,3,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,l),e.setRenderTarget(i,4,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,u),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,c),e.setRenderTarget(d,f,h),e.xr.enabled=m,i.texture.needsPMREMUpdate=!0}}class yM extends Gn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function Am(t,e,n,i){const r=xM(i);switch(n){case J0:return t*e;case e_:return t*e/r.components*r.byteLength;case Ch:return t*e/r.components*r.byteLength;case cs:return t*e*2/r.components*r.byteLength;case Rh:return t*e*2/r.components*r.byteLength;case Q0:return t*e*3/r.components*r.byteLength;case bn:return t*e*4/r.components*r.byteLength;case Ih:return t*e*4/r.components*r.byteLength;case Ul:case Ol:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Bl:case kl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case jd:case Qd:return Math.max(t,16)*Math.max(e,8)/4;case Zd:case Jd:return Math.max(t,8)*Math.max(e,8)/2;case ef:case tf:case rf:case of:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case nf:case sf:case af:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case lf:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case uf:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case cf:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case df:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case ff:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case hf:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case pf:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case mf:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case gf:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case vf:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case _f:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case yf:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case xf:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case bf:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case Sf:case Mf:case wf:return Math.ceil(t/4)*Math.ceil(e/4)*16;case Ef:case Tf:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Af:case Cf:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function xM(t){switch(t){case yn:case q0:return{byteLength:1,components:1};case ca:case K0:case tr:return{byteLength:2,components:1};case Th:case Ah:return{byteLength:2,components:4};case bi:case Eh:case pi:return{byteLength:4,components:1};case Z0:case j0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:wh}}));typeof window<"u"&&(window.__THREE__?st("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=wh);function h_(){let t=null,e=!1,n=null,i=null;function r(o,s){n(o,s),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(o){n=o},setContext:function(o){t=o}}}function bM(t){const e=new WeakMap;function n(a,l){const u=a.array,c=a.usage,d=u.byteLength,f=t.createBuffer();t.bindBuffer(l,f),t.bufferData(l,u,c),a.onUploadCallback();let h;if(u instanceof Float32Array)h=t.FLOAT;else if(typeof Float16Array<"u"&&u instanceof Float16Array)h=t.HALF_FLOAT;else if(u instanceof Uint16Array)a.isFloat16BufferAttribute?h=t.HALF_FLOAT:h=t.UNSIGNED_SHORT;else if(u instanceof Int16Array)h=t.SHORT;else if(u instanceof Uint32Array)h=t.UNSIGNED_INT;else if(u instanceof Int32Array)h=t.INT;else if(u instanceof Int8Array)h=t.BYTE;else if(u instanceof Uint8Array)h=t.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)h=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:f,type:h,bytesPerElement:u.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,l,u){const c=l.array,d=l.updateRanges;if(t.bindBuffer(u,a),d.length===0)t.bufferSubData(u,0,c);else{d.sort((h,m)=>h.start-m.start);let f=0;for(let h=1;h<d.length;h++){const m=d[f],v=d[h];v.start<=m.start+m.count+1?m.count=Math.max(m.count,v.start+v.count-m.start):(++f,d[f]=v)}d.length=f+1;for(let h=0,m=d.length;h<m;h++){const v=d[h];t.bufferSubData(u,v.start*c.BYTES_PER_ELEMENT,c,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function o(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function s(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const c=e.get(a);(!c||c.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const u=e.get(a);if(u===void 0)e.set(a,n(a,l));else if(u.version<a.version){if(u.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(u.buffer,a,l),u.version=a.version}}return{get:r,remove:o,update:s}}var SM=`#ifdef USE_ALPHAHASH
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
#endif`,AM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,CM=`#ifdef USE_AOMAP
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
} // validated`,FM=`#ifdef USE_IRIDESCENCE
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
#endif`,UM=`#ifdef USE_BUMPMAP
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
#endif`,zM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,VM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
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
#endif`,Aw=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Cw=`#ifdef USE_MAP
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
#endif`,Fw=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Uw=`#ifdef USE_MORPHNORMALS
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
vec3 nonPerturbedNormal = normal;`,zw=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Vw=`#ifndef FLAT_SHADED
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
}`,AE=`#include <common>
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
}`,CE=`#if DEPTH_PACKING == 3200
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
}`,FE=`#include <common>
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
}`,UE=`uniform vec3 diffuse;
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
}`,zE=`#define MATCAP
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
}`,VE=`#define NORMAL
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
}`,dt={alphahash_fragment:SM,alphahash_pars_fragment:MM,alphamap_fragment:wM,alphamap_pars_fragment:EM,alphatest_fragment:TM,alphatest_pars_fragment:AM,aomap_fragment:CM,aomap_pars_fragment:RM,batching_pars_vertex:IM,batching_vertex:PM,begin_vertex:NM,beginnormal_vertex:DM,bsdfs:LM,iridescence_fragment:FM,bumpmap_pars_fragment:UM,clipping_planes_fragment:OM,clipping_planes_pars_fragment:BM,clipping_planes_pars_vertex:kM,clipping_planes_vertex:zM,color_fragment:VM,color_pars_fragment:$M,color_pars_vertex:HM,color_vertex:GM,common:WM,cube_uv_reflection_fragment:XM,defaultnormal_vertex:YM,displacementmap_pars_vertex:qM,displacementmap_vertex:KM,emissivemap_fragment:ZM,emissivemap_pars_fragment:jM,colorspace_fragment:JM,colorspace_pars_fragment:QM,envmap_fragment:ew,envmap_common_pars_fragment:tw,envmap_pars_fragment:nw,envmap_pars_vertex:iw,envmap_physical_pars_fragment:pw,envmap_vertex:rw,fog_vertex:ow,fog_pars_vertex:sw,fog_fragment:aw,fog_pars_fragment:lw,gradientmap_pars_fragment:uw,lightmap_pars_fragment:cw,lights_lambert_fragment:dw,lights_lambert_pars_fragment:fw,lights_pars_begin:hw,lights_toon_fragment:mw,lights_toon_pars_fragment:gw,lights_phong_fragment:vw,lights_phong_pars_fragment:_w,lights_physical_fragment:yw,lights_physical_pars_fragment:xw,lights_fragment_begin:bw,lights_fragment_maps:Sw,lights_fragment_end:Mw,logdepthbuf_fragment:ww,logdepthbuf_pars_fragment:Ew,logdepthbuf_pars_vertex:Tw,logdepthbuf_vertex:Aw,map_fragment:Cw,map_pars_fragment:Rw,map_particle_fragment:Iw,map_particle_pars_fragment:Pw,metalnessmap_fragment:Nw,metalnessmap_pars_fragment:Dw,morphinstance_vertex:Lw,morphcolor_vertex:Fw,morphnormal_vertex:Uw,morphtarget_pars_vertex:Ow,morphtarget_vertex:Bw,normal_fragment_begin:kw,normal_fragment_maps:zw,normal_pars_fragment:Vw,normal_pars_vertex:$w,normal_vertex:Hw,normalmap_pars_fragment:Gw,clearcoat_normal_fragment_begin:Ww,clearcoat_normal_fragment_maps:Xw,clearcoat_pars_fragment:Yw,iridescence_pars_fragment:qw,opaque_fragment:Kw,packing:Zw,premultiplied_alpha_fragment:jw,project_vertex:Jw,dithering_fragment:Qw,dithering_pars_fragment:eE,roughnessmap_fragment:tE,roughnessmap_pars_fragment:nE,shadowmap_pars_fragment:iE,shadowmap_pars_vertex:rE,shadowmap_vertex:oE,shadowmask_pars_fragment:sE,skinbase_vertex:aE,skinning_pars_vertex:lE,skinning_vertex:uE,skinnormal_vertex:cE,specularmap_fragment:dE,specularmap_pars_fragment:fE,tonemapping_fragment:hE,tonemapping_pars_fragment:pE,transmission_fragment:mE,transmission_pars_fragment:gE,uv_pars_fragment:vE,uv_pars_vertex:_E,uv_vertex:yE,worldpos_vertex:xE,background_vert:bE,background_frag:SE,backgroundCube_vert:ME,backgroundCube_frag:wE,cube_vert:EE,cube_frag:TE,depth_vert:AE,depth_frag:CE,distance_vert:RE,distance_frag:IE,equirect_vert:PE,equirect_frag:NE,linedashed_vert:DE,linedashed_frag:LE,meshbasic_vert:FE,meshbasic_frag:UE,meshlambert_vert:OE,meshlambert_frag:BE,meshmatcap_vert:kE,meshmatcap_frag:zE,meshnormal_vert:VE,meshnormal_frag:$E,meshphong_vert:HE,meshphong_frag:GE,meshphysical_vert:WE,meshphysical_frag:XE,meshtoon_vert:YE,meshtoon_frag:qE,points_vert:KE,points_frag:ZE,shadow_vert:jE,shadow_frag:JE,sprite_vert:QE,sprite_frag:eT},ke={common:{diffuse:{value:new Et(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ct},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ct}},envmap:{envMap:{value:null},envMapRotation:{value:new ct},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ct}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ct}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ct},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ct},normalScale:{value:new Tt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ct},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ct}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ct}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ct}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Et(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Et(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0},uvTransform:{value:new ct}},sprite:{diffuse:{value:new Et(16777215)},opacity:{value:1},center:{value:new Tt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ct},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0}}},ci={basic:{uniforms:vn([ke.common,ke.specularmap,ke.envmap,ke.aomap,ke.lightmap,ke.fog]),vertexShader:dt.meshbasic_vert,fragmentShader:dt.meshbasic_frag},lambert:{uniforms:vn([ke.common,ke.specularmap,ke.envmap,ke.aomap,ke.lightmap,ke.emissivemap,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.fog,ke.lights,{emissive:{value:new Et(0)},envMapIntensity:{value:1}}]),vertexShader:dt.meshlambert_vert,fragmentShader:dt.meshlambert_frag},phong:{uniforms:vn([ke.common,ke.specularmap,ke.envmap,ke.aomap,ke.lightmap,ke.emissivemap,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.fog,ke.lights,{emissive:{value:new Et(0)},specular:{value:new Et(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:dt.meshphong_vert,fragmentShader:dt.meshphong_frag},standard:{uniforms:vn([ke.common,ke.envmap,ke.aomap,ke.lightmap,ke.emissivemap,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.roughnessmap,ke.metalnessmap,ke.fog,ke.lights,{emissive:{value:new Et(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:dt.meshphysical_vert,fragmentShader:dt.meshphysical_frag},toon:{uniforms:vn([ke.common,ke.aomap,ke.lightmap,ke.emissivemap,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.gradientmap,ke.fog,ke.lights,{emissive:{value:new Et(0)}}]),vertexShader:dt.meshtoon_vert,fragmentShader:dt.meshtoon_frag},matcap:{uniforms:vn([ke.common,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.fog,{matcap:{value:null}}]),vertexShader:dt.meshmatcap_vert,fragmentShader:dt.meshmatcap_frag},points:{uniforms:vn([ke.points,ke.fog]),vertexShader:dt.points_vert,fragmentShader:dt.points_frag},dashed:{uniforms:vn([ke.common,ke.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:dt.linedashed_vert,fragmentShader:dt.linedashed_frag},depth:{uniforms:vn([ke.common,ke.displacementmap]),vertexShader:dt.depth_vert,fragmentShader:dt.depth_frag},normal:{uniforms:vn([ke.common,ke.bumpmap,ke.normalmap,ke.displacementmap,{opacity:{value:1}}]),vertexShader:dt.meshnormal_vert,fragmentShader:dt.meshnormal_frag},sprite:{uniforms:vn([ke.sprite,ke.fog]),vertexShader:dt.sprite_vert,fragmentShader:dt.sprite_frag},background:{uniforms:{uvTransform:{value:new ct},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:dt.background_vert,fragmentShader:dt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ct}},vertexShader:dt.backgroundCube_vert,fragmentShader:dt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:dt.cube_vert,fragmentShader:dt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:dt.equirect_vert,fragmentShader:dt.equirect_frag},distance:{uniforms:vn([ke.common,ke.displacementmap,{referencePosition:{value:new ye},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:dt.distance_vert,fragmentShader:dt.distance_frag},shadow:{uniforms:vn([ke.lights,ke.fog,{color:{value:new Et(0)},opacity:{value:1}}]),vertexShader:dt.shadow_vert,fragmentShader:dt.shadow_frag}};ci.physical={uniforms:vn([ci.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ct},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ct},clearcoatNormalScale:{value:new Tt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ct},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ct},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ct},sheen:{value:0},sheenColor:{value:new Et(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ct},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ct},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ct},transmissionSamplerSize:{value:new Tt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ct},attenuationDistance:{value:0},attenuationColor:{value:new Et(0)},specularColor:{value:new Et(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ct},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ct},anisotropyVector:{value:new Tt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ct}}]),vertexShader:dt.meshphysical_vert,fragmentShader:dt.meshphysical_frag};const hl={r:0,b:0,g:0},eo=new ir,tT=new Wt;function nT(t,e,n,i,r,o){const s=new Et(0);let a=r===!0?0:1,l,u,c=null,d=0,f=null;function h(b){let M=b.isScene===!0?b.background:null;if(M&&M.isTexture){const _=b.backgroundBlurriness>0;M=e.get(M,_)}return M}function m(b){let M=!1;const _=h(b);_===null?g(s,a):_&&_.isColor&&(g(_,1),M=!0);const P=t.xr.getEnvironmentBlendMode();P==="additive"?n.buffers.color.setClear(0,0,0,1,o):P==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(t.autoClear||M)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function v(b,M){const _=h(M);_&&(_.isCubeTexture||_.mapping===qu)?(u===void 0&&(u=new Si(new Da(1,1,1),new Qn({name:"BackgroundCubeMaterial",uniforms:ds(ci.backgroundCube.uniforms),vertexShader:ci.backgroundCube.vertexShader,fragmentShader:ci.backgroundCube.fragmentShader,side:Tn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(P,D,B){this.matrixWorld.copyPosition(B.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),eo.copy(M.backgroundRotation),eo.x*=-1,eo.y*=-1,eo.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(eo.y*=-1,eo.z*=-1),u.material.uniforms.envMap.value=_,u.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(tT.makeRotationFromEuler(eo)),u.material.toneMapped=gt.getTransfer(_.colorSpace)!==Mt,(c!==_||d!==_.version||f!==t.toneMapping)&&(u.material.needsUpdate=!0,c=_,d=_.version,f=t.toneMapping),u.layers.enableAll(),b.unshift(u,u.geometry,u.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new Si(new La(2,2),new Qn({name:"BackgroundMaterial",uniforms:ds(ci.background.uniforms),vertexShader:ci.background.vertexShader,fragmentShader:ci.background.fragmentShader,side:kr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=gt.getTransfer(_.colorSpace)!==Mt,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),(c!==_||d!==_.version||f!==t.toneMapping)&&(l.material.needsUpdate=!0,c=_,d=_.version,f=t.toneMapping),l.layers.enableAll(),b.unshift(l,l.geometry,l.material,0,0,null))}function g(b,M){b.getRGB(hl,d_(t)),n.buffers.color.setClear(hl.r,hl.g,hl.b,M,o)}function p(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return s},setClearColor:function(b,M=1){s.set(b),a=M,g(s,a)},getClearAlpha:function(){return a},setClearAlpha:function(b){a=b,g(s,a)},render:m,addToRenderList:v,dispose:p}}function iT(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=f(null);let o=r,s=!1;function a(E,I,q,w,k){let A=!1;const N=d(E,w,q,I);o!==N&&(o=N,u(o.object)),A=h(E,w,q,k),A&&m(E,w,q,k),k!==null&&e.update(k,t.ELEMENT_ARRAY_BUFFER),(A||s)&&(s=!1,_(E,I,q,w),k!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(k).buffer))}function l(){return t.createVertexArray()}function u(E){return t.bindVertexArray(E)}function c(E){return t.deleteVertexArray(E)}function d(E,I,q,w){const k=w.wireframe===!0;let A=i[I.id];A===void 0&&(A={},i[I.id]=A);const N=E.isInstancedMesh===!0?E.id:0;let O=A[N];O===void 0&&(O={},A[N]=O);let $=O[q.id];$===void 0&&($={},O[q.id]=$);let K=$[k];return K===void 0&&(K=f(l()),$[k]=K),K}function f(E){const I=[],q=[],w=[];for(let k=0;k<n;k++)I[k]=0,q[k]=0,w[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:q,attributeDivisors:w,object:E,attributes:{},index:null}}function h(E,I,q,w){const k=o.attributes,A=I.attributes;let N=0;const O=q.getAttributes();for(const $ in O)if(O[$].location>=0){const te=k[$];let ne=A[$];if(ne===void 0&&($==="instanceMatrix"&&E.instanceMatrix&&(ne=E.instanceMatrix),$==="instanceColor"&&E.instanceColor&&(ne=E.instanceColor)),te===void 0||te.attribute!==ne||ne&&te.data!==ne.data)return!0;N++}return o.attributesNum!==N||o.index!==w}function m(E,I,q,w){const k={},A=I.attributes;let N=0;const O=q.getAttributes();for(const $ in O)if(O[$].location>=0){let te=A[$];te===void 0&&($==="instanceMatrix"&&E.instanceMatrix&&(te=E.instanceMatrix),$==="instanceColor"&&E.instanceColor&&(te=E.instanceColor));const ne={};ne.attribute=te,te&&te.data&&(ne.data=te.data),k[$]=ne,N++}o.attributes=k,o.attributesNum=N,o.index=w}function v(){const E=o.newAttributes;for(let I=0,q=E.length;I<q;I++)E[I]=0}function g(E){p(E,0)}function p(E,I){const q=o.newAttributes,w=o.enabledAttributes,k=o.attributeDivisors;q[E]=1,w[E]===0&&(t.enableVertexAttribArray(E),w[E]=1),k[E]!==I&&(t.vertexAttribDivisor(E,I),k[E]=I)}function b(){const E=o.newAttributes,I=o.enabledAttributes;for(let q=0,w=I.length;q<w;q++)I[q]!==E[q]&&(t.disableVertexAttribArray(q),I[q]=0)}function M(E,I,q,w,k,A,N){N===!0?t.vertexAttribIPointer(E,I,q,k,A):t.vertexAttribPointer(E,I,q,w,k,A)}function _(E,I,q,w){v();const k=w.attributes,A=q.getAttributes(),N=I.defaultAttributeValues;for(const O in A){const $=A[O];if($.location>=0){let K=k[O];if(K===void 0&&(O==="instanceMatrix"&&E.instanceMatrix&&(K=E.instanceMatrix),O==="instanceColor"&&E.instanceColor&&(K=E.instanceColor)),K!==void 0){const te=K.normalized,ne=K.itemSize,ge=e.get(K);if(ge===void 0)continue;const Ee=ge.buffer,Se=ge.type,G=ge.bytesPerElement,U=Se===t.INT||Se===t.UNSIGNED_INT||K.gpuType===Eh;if(K.isInterleavedBufferAttribute){const Y=K.data,he=Y.stride,xe=K.offset;if(Y.isInstancedInterleavedBuffer){for(let we=0;we<$.locationSize;we++)p($.location+we,Y.meshPerAttribute);E.isInstancedMesh!==!0&&w._maxInstanceCount===void 0&&(w._maxInstanceCount=Y.meshPerAttribute*Y.count)}else for(let we=0;we<$.locationSize;we++)g($.location+we);t.bindBuffer(t.ARRAY_BUFFER,Ee);for(let we=0;we<$.locationSize;we++)M($.location+we,ne/$.locationSize,Se,te,he*G,(xe+ne/$.locationSize*we)*G,U)}else{if(K.isInstancedBufferAttribute){for(let Y=0;Y<$.locationSize;Y++)p($.location+Y,K.meshPerAttribute);E.isInstancedMesh!==!0&&w._maxInstanceCount===void 0&&(w._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let Y=0;Y<$.locationSize;Y++)g($.location+Y);t.bindBuffer(t.ARRAY_BUFFER,Ee);for(let Y=0;Y<$.locationSize;Y++)M($.location+Y,ne/$.locationSize,Se,te,ne*G,ne/$.locationSize*Y*G,U)}}else if(N!==void 0){const te=N[O];if(te!==void 0)switch(te.length){case 2:t.vertexAttrib2fv($.location,te);break;case 3:t.vertexAttrib3fv($.location,te);break;case 4:t.vertexAttrib4fv($.location,te);break;default:t.vertexAttrib1fv($.location,te)}}}}b()}function P(){x();for(const E in i){const I=i[E];for(const q in I){const w=I[q];for(const k in w){const A=w[k];for(const N in A)c(A[N].object),delete A[N];delete w[k]}}delete i[E]}}function D(E){if(i[E.id]===void 0)return;const I=i[E.id];for(const q in I){const w=I[q];for(const k in w){const A=w[k];for(const N in A)c(A[N].object),delete A[N];delete w[k]}}delete i[E.id]}function B(E){for(const I in i){const q=i[I];for(const w in q){const k=q[w];if(k[E.id]===void 0)continue;const A=k[E.id];for(const N in A)c(A[N].object),delete A[N];delete k[E.id]}}}function y(E){for(const I in i){const q=i[I],w=E.isInstancedMesh===!0?E.id:0,k=q[w];if(k!==void 0){for(const A in k){const N=k[A];for(const O in N)c(N[O].object),delete N[O];delete k[A]}delete q[w],Object.keys(q).length===0&&delete i[I]}}}function x(){T(),s=!0,o!==r&&(o=r,u(o.object))}function T(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:x,resetDefaultState:T,dispose:P,releaseStatesOfGeometry:D,releaseStatesOfObject:y,releaseStatesOfProgram:B,initAttributes:v,enableAttribute:g,disableUnusedAttributes:b}}function rT(t,e,n){let i;function r(u){i=u}function o(u,c){t.drawArrays(i,u,c),n.update(c,i,1)}function s(u,c,d){d!==0&&(t.drawArraysInstanced(i,u,c,d),n.update(c,i,d))}function a(u,c,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,u,0,c,0,d);let h=0;for(let m=0;m<d;m++)h+=c[m];n.update(h,i,1)}function l(u,c,d,f){if(d===0)return;const h=e.get("WEBGL_multi_draw");if(h===null)for(let m=0;m<u.length;m++)s(u[m],c[m],f[m]);else{h.multiDrawArraysInstancedWEBGL(i,u,0,c,0,f,0,d);let m=0;for(let v=0;v<d;v++)m+=c[v]*f[v];n.update(m,i,1)}}this.setMode=r,this.render=o,this.renderInstances=s,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function oT(t,e,n,i){let r;function o(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const B=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(B.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function s(B){return!(B!==bn&&i.convert(B)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(B){const y=B===tr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(B!==yn&&i.convert(B)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&B!==pi&&!y)}function l(B){if(B==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";B="mediump"}return B==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=n.precision!==void 0?n.precision:"highp";const c=l(u);c!==u&&(st("WebGLRenderer:",u,"not supported, using",c,"instead."),u=c);const d=n.logarithmicDepthBuffer===!0,f=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),h=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),m=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=t.getParameter(t.MAX_TEXTURE_SIZE),g=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),p=t.getParameter(t.MAX_VERTEX_ATTRIBS),b=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),M=t.getParameter(t.MAX_VARYING_VECTORS),_=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),P=t.getParameter(t.MAX_SAMPLES),D=t.getParameter(t.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:l,textureFormatReadable:s,textureTypeReadable:a,precision:u,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:h,maxVertexTextures:m,maxTextureSize:v,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:b,maxVaryings:M,maxFragmentUniforms:_,maxSamples:P,samples:D}}function sT(t){const e=this;let n=null,i=0,r=!1,o=!1;const s=new io,a=new ct,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const h=d.length!==0||f||i!==0||r;return r=f,i=d.length,h},this.beginShadows=function(){o=!0,c(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(d,f){n=c(d,f,0)},this.setState=function(d,f,h){const m=d.clippingPlanes,v=d.clipIntersection,g=d.clipShadows,p=t.get(d);if(!r||m===null||m.length===0||o&&!g)o?c(null):u();else{const b=o?0:i,M=b*4;let _=p.clippingState||null;l.value=_,_=c(m,f,M,h);for(let P=0;P!==M;++P)_[P]=n[P];p.clippingState=_,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=b}};function u(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function c(d,f,h,m){const v=d!==null?d.length:0;let g=null;if(v!==0){if(g=l.value,m!==!0||g===null){const p=h+v*4,b=f.matrixWorldInverse;a.getNormalMatrix(b),(g===null||g.length<p)&&(g=new Float32Array(p));for(let M=0,_=h;M!==v;++M,_+=4)s.copy(d[M]).applyMatrix4(b,a),s.normal.toArray(g,_),g[_+3]=s.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,g}}const Fr=4,Cm=[.125,.215,.35,.446,.526,.582],so=20,aT=256,Is=new Fh,Rm=new Et;let td=null,nd=0,id=0,rd=!1;const lT=new ye;class Im{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,i=.1,r=100,o={}){const{size:s=256,position:a=lT}=o;td=this._renderer.getRenderTarget(),nd=this._renderer.getActiveCubeFace(),id=this._renderer.getActiveMipmapLevel(),rd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(s);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,a),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Dm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Nm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(td,nd,id),this._renderer.xr.enabled=rd,e.scissorTest=!1,Wo(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===So||e.mapping===us?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),td=this._renderer.getRenderTarget(),nd=this._renderer.getActiveCubeFace(),id=this._renderer.getActiveMipmapLevel(),rd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Rt,minFilter:Rt,generateMipmaps:!1,type:tr,format:bn,colorSpace:zr,depthBuffer:!1},r=Pm(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Pm(e,n,i);const{_lodMax:o}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=uT(o)),this._blurMaterial=dT(o,e,n),this._ggxMaterial=cT(o,e,n)}return r}_compileMaterial(e){const n=new Si(new ur,e);this._renderer.compile(n,Is)}_sceneToCubeUV(e,n,i,r,o){const l=new Gn(90,1,n,i),u=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,h=d.toneMapping;d.getClearColor(Rm),d.toneMapping=vi,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(r),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Si(new Da,new a_({name:"PMREM.Background",side:Tn,depthWrite:!1,depthTest:!1})));const v=this._backgroundBox,g=v.material;let p=!1;const b=e.background;b?b.isColor&&(g.color.copy(b),e.background=null,p=!0):(g.color.copy(Rm),p=!0);for(let M=0;M<6;M++){const _=M%3;_===0?(l.up.set(0,u[M],0),l.position.set(o.x,o.y,o.z),l.lookAt(o.x+c[M],o.y,o.z)):_===1?(l.up.set(0,0,u[M]),l.position.set(o.x,o.y,o.z),l.lookAt(o.x,o.y+c[M],o.z)):(l.up.set(0,u[M],0),l.position.set(o.x,o.y,o.z),l.lookAt(o.x,o.y,o.z+c[M]));const P=this._cubeSize;Wo(r,_*P,M>2?P:0,P,P),d.setRenderTarget(r),p&&d.render(v,l),d.render(e,l)}d.toneMapping=h,d.autoClear=f,e.background=b}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===So||e.mapping===us;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Dm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Nm());const o=r?this._cubemapMaterial:this._equirectMaterial,s=this._lodMeshes[0];s.material=o;const a=o.uniforms;a.envMap.value=e;const l=this._cubeSize;Wo(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(s,Is)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodMeshes.length;for(let o=1;o<r;o++)this._applyGGXFilter(e,o-1,o);n.autoClear=i}_applyGGXFilter(e,n,i){const r=this._renderer,o=this._pingPongRenderTarget,s=this._ggxMaterial,a=this._lodMeshes[i];a.material=s;const l=s.uniforms,u=i/(this._lodMeshes.length-1),c=n/(this._lodMeshes.length-1),d=Math.sqrt(u*u-c*c),f=0+u*1.25,h=d*f,{_lodMax:m}=this,v=this._sizeLods[i],g=3*v*(i>m-Fr?i-m+Fr:0),p=4*(this._cubeSize-v);l.envMap.value=e.texture,l.roughness.value=h,l.mipInt.value=m-n,Wo(o,g,p,3*v,2*v),r.setRenderTarget(o),r.render(a,Is),l.envMap.value=o.texture,l.roughness.value=0,l.mipInt.value=m-i,Wo(e,g,p,3*v,2*v),r.setRenderTarget(e),r.render(a,Is)}_blur(e,n,i,r,o){const s=this._pingPongRenderTarget;this._halfBlur(e,s,n,i,r,"latitudinal",o),this._halfBlur(s,e,i,i,r,"longitudinal",o)}_halfBlur(e,n,i,r,o,s,a){const l=this._renderer,u=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&_t("blur direction must be either latitudinal or longitudinal!");const c=3,d=this._lodMeshes[r];d.material=u;const f=u.uniforms,h=this._sizeLods[i]-1,m=isFinite(o)?Math.PI/(2*h):2*Math.PI/(2*so-1),v=o/m,g=isFinite(o)?1+Math.floor(c*v):so;g>so&&st(`sigmaRadians, ${o}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${so}`);const p=[];let b=0;for(let B=0;B<so;++B){const y=B/v,x=Math.exp(-y*y/2);p.push(x),B===0?b+=x:B<g&&(b+=2*x)}for(let B=0;B<p.length;B++)p[B]=p[B]/b;f.envMap.value=e.texture,f.samples.value=g,f.weights.value=p,f.latitudinal.value=s==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:M}=this;f.dTheta.value=m,f.mipInt.value=M-i;const _=this._sizeLods[r],P=3*_*(r>M-Fr?r-M+Fr:0),D=4*(this._cubeSize-_);Wo(n,P,D,3*_,2*_),l.setRenderTarget(n),l.render(d,Is)}}function uT(t){const e=[],n=[],i=[];let r=t;const o=t-Fr+1+Cm.length;for(let s=0;s<o;s++){const a=Math.pow(2,r);e.push(a);let l=1/a;s>t-Fr?l=Cm[s-t+Fr-1]:s===0&&(l=0),n.push(l);const u=1/(a-2),c=-u,d=1+u,f=[c,c,d,c,d,d,c,c,d,d,c,d],h=6,m=6,v=3,g=2,p=1,b=new Float32Array(v*m*h),M=new Float32Array(g*m*h),_=new Float32Array(p*m*h);for(let D=0;D<h;D++){const B=D%3*2/3-1,y=D>2?0:-1,x=[B,y,0,B+2/3,y,0,B+2/3,y+1,0,B,y,0,B+2/3,y+1,0,B,y+1,0];b.set(x,v*m*D),M.set(f,g*m*D);const T=[D,D,D,D,D,D];_.set(T,p*m*D)}const P=new ur;P.setAttribute("position",new _i(b,v)),P.setAttribute("uv",new _i(M,g)),P.setAttribute("faceIndex",new _i(_,p)),i.push(new Si(P,null)),r>Fr&&r--}return{lodMeshes:i,sizeLods:e,sigmas:n}}function Pm(t,e,n){const i=new Mn(t,e,n);return i.texture.mapping=qu,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Wo(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function cT(t,e,n){return new Qn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:aT,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Zu(),fragmentShader:`

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
		`,blending:qi,depthTest:!1,depthWrite:!1})}function dT(t,e,n){const i=new Float32Array(so),r=new ye(0,1,0);return new Qn({name:"SphericalGaussianBlur",defines:{n:so,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Zu(),fragmentShader:`

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
		`,blending:qi,depthTest:!1,depthWrite:!1})}function Nm(){return new Qn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Zu(),fragmentShader:`

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
		`,blending:qi,depthTest:!1,depthWrite:!1})}function Dm(){return new Qn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Zu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:qi,depthTest:!1,depthWrite:!1})}function Zu(){return`

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
			`},r=new Da(5,5,5),o=new Qn({name:"CubemapFromEquirect",uniforms:ds(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Tn,blending:qi});o.uniforms.tEquirect.value=n;const s=new Si(r,o),a=n.minFilter;return n.minFilter===co&&(n.minFilter=Rt),new _M(1,10,this).update(e,s),n.minFilter=a,s.geometry.dispose(),s.material.dispose(),this}clear(e,n=!0,i=!0,r=!0){const o=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(n,i,r);e.setRenderTarget(o)}}function fT(t){let e=new WeakMap,n=new WeakMap,i=null;function r(f,h=!1){return f==null?null:h?s(f):o(f)}function o(f){if(f&&f.isTexture){const h=f.mapping;if(h===Cc||h===Rc)if(e.has(f)){const m=e.get(f).texture;return a(m,f.mapping)}else{const m=f.image;if(m&&m.height>0){const v=new p_(m.height);return v.fromEquirectangularTexture(t,f),e.set(f,v),f.addEventListener("dispose",u),a(v.texture,f.mapping)}else return null}}return f}function s(f){if(f&&f.isTexture){const h=f.mapping,m=h===Cc||h===Rc,v=h===So||h===us;if(m||v){let g=n.get(f);const p=g!==void 0?g.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==p)return i===null&&(i=new Im(t)),g=m?i.fromEquirectangular(f,g):i.fromCubemap(f,g),g.texture.pmremVersion=f.pmremVersion,n.set(f,g),g.texture;if(g!==void 0)return g.texture;{const b=f.image;return m&&b&&b.height>0||v&&b&&l(b)?(i===null&&(i=new Im(t)),g=m?i.fromEquirectangular(f):i.fromCubemap(f),g.texture.pmremVersion=f.pmremVersion,n.set(f,g),f.addEventListener("dispose",c),g.texture):null}}}return f}function a(f,h){return h===Cc?f.mapping=So:h===Rc&&(f.mapping=us),f}function l(f){let h=0;const m=6;for(let v=0;v<m;v++)f[v]!==void 0&&h++;return h===m}function u(f){const h=f.target;h.removeEventListener("dispose",u);const m=e.get(h);m!==void 0&&(e.delete(h),m.dispose())}function c(f){const h=f.target;h.removeEventListener("dispose",c);const m=n.get(h);m!==void 0&&(n.delete(h),m.dispose())}function d(){e=new WeakMap,n=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:d}}function hT(t){const e={};function n(i){if(e[i]!==void 0)return e[i];const r=t.getExtension(i);return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&du("WebGLRenderer: "+i+" extension not supported."),r}}}function pT(t,e,n,i){const r={},o=new WeakMap;function s(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const m in f.attributes)e.remove(f.attributes[m]);f.removeEventListener("dispose",s),delete r[f.id];const h=o.get(f);h&&(e.remove(h),o.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,n.memory.geometries--}function a(d,f){return r[f.id]===!0||(f.addEventListener("dispose",s),r[f.id]=!0,n.memory.geometries++),f}function l(d){const f=d.attributes;for(const h in f)e.update(f[h],t.ARRAY_BUFFER)}function u(d){const f=[],h=d.index,m=d.attributes.position;let v=0;if(m===void 0)return;if(h!==null){const b=h.array;v=h.version;for(let M=0,_=b.length;M<_;M+=3){const P=b[M+0],D=b[M+1],B=b[M+2];f.push(P,D,D,B,B,P)}}else{const b=m.array;v=m.version;for(let M=0,_=b.length/3-1;M<_;M+=3){const P=M+0,D=M+1,B=M+2;f.push(P,D,D,B,B,P)}}const g=new(m.count>=65535?s_:o_)(f,1);g.version=v;const p=o.get(d);p&&e.remove(p),o.set(d,g)}function c(d){const f=o.get(d);if(f){const h=d.index;h!==null&&f.version<h.version&&u(d)}else u(d);return o.get(d)}return{get:a,update:l,getWireframeAttribute:c}}function mT(t,e,n){let i;function r(f){i=f}let o,s;function a(f){o=f.type,s=f.bytesPerElement}function l(f,h){t.drawElements(i,h,o,f*s),n.update(h,i,1)}function u(f,h,m){m!==0&&(t.drawElementsInstanced(i,h,o,f*s,m),n.update(h,i,m))}function c(f,h,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,h,0,o,f,0,m);let g=0;for(let p=0;p<m;p++)g+=h[p];n.update(g,i,1)}function d(f,h,m,v){if(m===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<f.length;p++)u(f[p]/s,h[p],v[p]);else{g.multiDrawElementsInstancedWEBGL(i,h,0,o,f,0,v,0,m);let p=0;for(let b=0;b<m;b++)p+=h[b]*v[b];n.update(p,i,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=u,this.renderMultiDraw=c,this.renderMultiDrawInstances=d}function gT(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(o,s,a){switch(n.calls++,s){case t.TRIANGLES:n.triangles+=a*(o/3);break;case t.LINES:n.lines+=a*(o/2);break;case t.LINE_STRIP:n.lines+=a*(o-1);break;case t.LINE_LOOP:n.lines+=a*o;break;case t.POINTS:n.points+=a*o;break;default:_t("WebGLInfo: Unknown draw mode:",s);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function vT(t,e,n){const i=new WeakMap,r=new zt;function o(s,a,l){const u=s.morphTargetInfluences,c=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=c!==void 0?c.length:0;let f=i.get(a);if(f===void 0||f.count!==d){let x=function(){B.dispose(),i.delete(a),a.removeEventListener("dispose",x)};f!==void 0&&f.texture.dispose();const h=a.morphAttributes.position!==void 0,m=a.morphAttributes.normal!==void 0,v=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],b=a.morphAttributes.color||[];let M=0;h===!0&&(M=1),m===!0&&(M=2),v===!0&&(M=3);let _=a.attributes.position.count*M,P=1;_>e.maxTextureSize&&(P=Math.ceil(_/e.maxTextureSize),_=e.maxTextureSize);const D=new Float32Array(_*P*4*d),B=new n_(D,_,P,d);B.type=pi,B.needsUpdate=!0;const y=M*4;for(let T=0;T<d;T++){const E=g[T],I=p[T],q=b[T],w=_*P*4*T;for(let k=0;k<E.count;k++){const A=k*y;h===!0&&(r.fromBufferAttribute(E,k),D[w+A+0]=r.x,D[w+A+1]=r.y,D[w+A+2]=r.z,D[w+A+3]=0),m===!0&&(r.fromBufferAttribute(I,k),D[w+A+4]=r.x,D[w+A+5]=r.y,D[w+A+6]=r.z,D[w+A+7]=0),v===!0&&(r.fromBufferAttribute(q,k),D[w+A+8]=r.x,D[w+A+9]=r.y,D[w+A+10]=r.z,D[w+A+11]=q.itemSize===4?r.w:1)}}f={count:d,texture:B,size:new Tt(_,P)},i.set(a,f),a.addEventListener("dispose",x)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",s.morphTexture,n);else{let h=0;for(let v=0;v<u.length;v++)h+=u[v];const m=a.morphTargetsRelative?1:1-h;l.getUniforms().setValue(t,"morphTargetBaseInfluence",m),l.getUniforms().setValue(t,"morphTargetInfluences",u)}l.getUniforms().setValue(t,"morphTargetsTexture",f.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",f.size)}return{update:o}}function _T(t,e,n,i,r){let o=new WeakMap;function s(u){const c=r.render.frame,d=u.geometry,f=e.get(u,d);if(o.get(f)!==c&&(e.update(f),o.set(f,c)),u.isInstancedMesh&&(u.hasEventListener("dispose",l)===!1&&u.addEventListener("dispose",l),o.get(u)!==c&&(n.update(u.instanceMatrix,t.ARRAY_BUFFER),u.instanceColor!==null&&n.update(u.instanceColor,t.ARRAY_BUFFER),o.set(u,c))),u.isSkinnedMesh){const h=u.skeleton;o.get(h)!==c&&(h.update(),o.set(h,c))}return f}function a(){o=new WeakMap}function l(u){const c=u.target;c.removeEventListener("dispose",l),i.releaseStatesOfObject(c),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:a}}const yT={[z0]:"LINEAR_TONE_MAPPING",[V0]:"REINHARD_TONE_MAPPING",[$0]:"CINEON_TONE_MAPPING",[H0]:"ACES_FILMIC_TONE_MAPPING",[W0]:"AGX_TONE_MAPPING",[X0]:"NEUTRAL_TONE_MAPPING",[G0]:"CUSTOM_TONE_MAPPING"};function xT(t,e,n,i,r){const o=new Mn(e,n,{type:t,depthBuffer:i,stencilBuffer:r}),s=new Mn(e,n,{type:tr,depthBuffer:!1,stencilBuffer:!1}),a=new ur;a.setAttribute("position",new Zi([-1,3,0,-1,-1,0,3,-1,0],3)),a.setAttribute("uv",new Zi([0,2,0,0,2,0],2));const l=new mM({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),u=new Si(a,l),c=new Fh(-1,1,1,-1,0,1);let d=null,f=null,h=!1,m,v=null,g=[],p=!1;this.setSize=function(b,M){o.setSize(b,M),s.setSize(b,M);for(let _=0;_<g.length;_++){const P=g[_];P.setSize&&P.setSize(b,M)}},this.setEffects=function(b){g=b,p=g.length>0&&g[0].isRenderPass===!0;const M=o.width,_=o.height;for(let P=0;P<g.length;P++){const D=g[P];D.setSize&&D.setSize(M,_)}},this.begin=function(b,M){if(h||b.toneMapping===vi&&g.length===0)return!1;if(v=M,M!==null){const _=M.width,P=M.height;(o.width!==_||o.height!==P)&&this.setSize(_,P)}return p===!1&&b.setRenderTarget(o),m=b.toneMapping,b.toneMapping=vi,!0},this.hasRenderPass=function(){return p},this.end=function(b,M){b.toneMapping=m,h=!0;let _=o,P=s;for(let D=0;D<g.length;D++){const B=g[D];if(B.enabled!==!1&&(B.render(b,P,_,M),B.needsSwap!==!1)){const y=_;_=P,P=y}}if(d!==b.outputColorSpace||f!==b.toneMapping){d=b.outputColorSpace,f=b.toneMapping,l.defines={},gt.getTransfer(d)===Mt&&(l.defines.SRGB_TRANSFER="");const D=yT[f];D&&(l.defines[D]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=_.texture,b.setRenderTarget(v),b.render(u,c),v=null,h=!1},this.isCompositing=function(){return h},this.dispose=function(){o.dispose(),s.dispose(),a.dispose(),l.dispose()}}const m_=new on,If=new fa(1,1),g_=new n_,v_=new GS,__=new u_,Lm=[],Fm=[],Um=new Float32Array(16),Om=new Float32Array(9),Bm=new Float32Array(4);function xs(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let o=Lm[r];if(o===void 0&&(o=new Float32Array(r),Lm[r]=o),e!==0){i.toArray(o,0);for(let s=1,a=0;s!==e;++s)a+=n,t[s].toArray(o,a)}return o}function Kt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Zt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function ju(t,e){let n=Fm[e];n===void 0&&(n=new Int32Array(e),Fm[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function bT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function ST(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Kt(n,e))return;t.uniform2fv(this.addr,e),Zt(n,e)}}function MT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Kt(n,e))return;t.uniform3fv(this.addr,e),Zt(n,e)}}function wT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Kt(n,e))return;t.uniform4fv(this.addr,e),Zt(n,e)}}function ET(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Kt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Zt(n,e)}else{if(Kt(n,i))return;Bm.set(i),t.uniformMatrix2fv(this.addr,!1,Bm),Zt(n,i)}}function TT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Kt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Zt(n,e)}else{if(Kt(n,i))return;Om.set(i),t.uniformMatrix3fv(this.addr,!1,Om),Zt(n,i)}}function AT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Kt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Zt(n,e)}else{if(Kt(n,i))return;Um.set(i),t.uniformMatrix4fv(this.addr,!1,Um),Zt(n,i)}}function CT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function RT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Kt(n,e))return;t.uniform2iv(this.addr,e),Zt(n,e)}}function IT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Kt(n,e))return;t.uniform3iv(this.addr,e),Zt(n,e)}}function PT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Kt(n,e))return;t.uniform4iv(this.addr,e),Zt(n,e)}}function NT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function DT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Kt(n,e))return;t.uniform2uiv(this.addr,e),Zt(n,e)}}function LT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Kt(n,e))return;t.uniform3uiv(this.addr,e),Zt(n,e)}}function FT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Kt(n,e))return;t.uniform4uiv(this.addr,e),Zt(n,e)}}function UT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let o;this.type===t.SAMPLER_2D_SHADOW?(If.compareFunction=n.isReversedDepthBuffer()?Nh:Ph,o=If):o=m_,n.setTexture2D(e||o,r)}function OT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||v_,r)}function BT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||__,r)}function kT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||g_,r)}function zT(t){switch(t){case 5126:return bT;case 35664:return ST;case 35665:return MT;case 35666:return wT;case 35674:return ET;case 35675:return TT;case 35676:return AT;case 5124:case 35670:return CT;case 35667:case 35671:return RT;case 35668:case 35672:return IT;case 35669:case 35673:return PT;case 5125:return NT;case 36294:return DT;case 36295:return LT;case 36296:return FT;case 35678:case 36198:case 36298:case 36306:case 35682:return UT;case 35679:case 36299:case 36307:return OT;case 35680:case 36300:case 36308:case 36293:return BT;case 36289:case 36303:case 36311:case 36292:return kT}}function VT(t,e){t.uniform1fv(this.addr,e)}function $T(t,e){const n=xs(e,this.size,2);t.uniform2fv(this.addr,n)}function HT(t,e){const n=xs(e,this.size,3);t.uniform3fv(this.addr,n)}function GT(t,e){const n=xs(e,this.size,4);t.uniform4fv(this.addr,n)}function WT(t,e){const n=xs(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function XT(t,e){const n=xs(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function YT(t,e){const n=xs(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function qT(t,e){t.uniform1iv(this.addr,e)}function KT(t,e){t.uniform2iv(this.addr,e)}function ZT(t,e){t.uniform3iv(this.addr,e)}function jT(t,e){t.uniform4iv(this.addr,e)}function JT(t,e){t.uniform1uiv(this.addr,e)}function QT(t,e){t.uniform2uiv(this.addr,e)}function eA(t,e){t.uniform3uiv(this.addr,e)}function tA(t,e){t.uniform4uiv(this.addr,e)}function nA(t,e,n){const i=this.cache,r=e.length,o=ju(n,r);Kt(i,o)||(t.uniform1iv(this.addr,o),Zt(i,o));let s;this.type===t.SAMPLER_2D_SHADOW?s=If:s=m_;for(let a=0;a!==r;++a)n.setTexture2D(e[a]||s,o[a])}function iA(t,e,n){const i=this.cache,r=e.length,o=ju(n,r);Kt(i,o)||(t.uniform1iv(this.addr,o),Zt(i,o));for(let s=0;s!==r;++s)n.setTexture3D(e[s]||v_,o[s])}function rA(t,e,n){const i=this.cache,r=e.length,o=ju(n,r);Kt(i,o)||(t.uniform1iv(this.addr,o),Zt(i,o));for(let s=0;s!==r;++s)n.setTextureCube(e[s]||__,o[s])}function oA(t,e,n){const i=this.cache,r=e.length,o=ju(n,r);Kt(i,o)||(t.uniform1iv(this.addr,o),Zt(i,o));for(let s=0;s!==r;++s)n.setTexture2DArray(e[s]||g_,o[s])}function sA(t){switch(t){case 5126:return VT;case 35664:return $T;case 35665:return HT;case 35666:return GT;case 35674:return WT;case 35675:return XT;case 35676:return YT;case 5124:case 35670:return qT;case 35667:case 35671:return KT;case 35668:case 35672:return ZT;case 35669:case 35673:return jT;case 5125:return JT;case 36294:return QT;case 36295:return eA;case 36296:return tA;case 35678:case 36198:case 36298:case 36306:case 35682:return nA;case 35679:case 36299:case 36307:return iA;case 35680:case 36300:case 36308:case 36293:return rA;case 36289:case 36303:case 36311:case 36292:return oA}}class aA{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=zT(n.type)}}class lA{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=sA(n.type)}}class uA{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let o=0,s=r.length;o!==s;++o){const a=r[o];a.setValue(e,n[a.id],i)}}}const od=/(\w+)(\])?(\[|\.)?/g;function km(t,e){t.seq.push(e),t.map[e.id]=e}function cA(t,e,n){const i=t.name,r=i.length;for(od.lastIndex=0;;){const o=od.exec(i),s=od.lastIndex;let a=o[1];const l=o[2]==="]",u=o[3];if(l&&(a=a|0),u===void 0||u==="["&&s+2===r){km(n,u===void 0?new aA(a,t,e):new lA(a,t,e));break}else{let d=n.map[a];d===void 0&&(d=new uA(a),km(n,d)),n=d}}}class zl{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const a=e.getActiveUniform(n,s),l=e.getUniformLocation(n,a.name);cA(a,l,this)}const r=[],o=[];for(const s of this.seq)s.type===e.SAMPLER_2D_SHADOW||s.type===e.SAMPLER_CUBE_SHADOW||s.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(s):o.push(s);r.length>0&&(this.seq=r.concat(o))}setValue(e,n,i,r){const o=this.map[n];o!==void 0&&o.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let o=0,s=n.length;o!==s;++o){const a=n[o],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,o=e.length;r!==o;++r){const s=e[r];s.id in n&&i.push(s)}return i}}function zm(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const dA=37297;let fA=0;function hA(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),o=Math.min(e+6,n.length);for(let s=r;s<o;s++){const a=s+1;i.push(`${a===e?">":" "} ${a}: ${n[s]}`)}return i.join(`
`)}const Vm=new ct;function pA(t){gt._getMatrix(Vm,gt.workingColorSpace,t);const e=`mat3( ${Vm.elements.map(n=>n.toFixed(4))} )`;switch(gt.getTransfer(t)){case lu:return[e,"LinearTransferOETF"];case Mt:return[e,"sRGBTransferOETF"];default:return st("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function $m(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),o=(t.getShaderInfoLog(e)||"").trim();if(i&&o==="")return"";const s=/ERROR: 0:(\d+)/.exec(o);if(s){const a=parseInt(s[1]);return n.toUpperCase()+`

`+o+`

`+hA(t.getShaderSource(e),a)}else return o}function mA(t,e){const n=pA(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const gA={[z0]:"Linear",[V0]:"Reinhard",[$0]:"Cineon",[H0]:"ACESFilmic",[W0]:"AgX",[X0]:"Neutral",[G0]:"Custom"};function vA(t,e){const n=gA[e];return n===void 0?(st("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+t+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const pl=new ye;function _A(){gt.getLuminanceCoefficients(pl);const t=pl.x.toFixed(4),e=pl.y.toFixed(4),n=pl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function yA(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Bs).join(`
`)}function xA(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function bA(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const o=t.getActiveAttrib(e,r),s=o.name;let a=1;o.type===t.FLOAT_MAT2&&(a=2),o.type===t.FLOAT_MAT3&&(a=3),o.type===t.FLOAT_MAT4&&(a=4),n[s]={type:o.type,location:t.getAttribLocation(e,s),locationSize:a}}return n}function Bs(t){return t!==""}function Hm(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Gm(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const SA=/^[ \t]*#include +<([\w\d./]+)>/gm;function Pf(t){return t.replace(SA,wA)}const MA=new Map;function wA(t,e){let n=dt[e];if(n===void 0){const i=MA.get(e);if(i!==void 0)n=dt[i],st('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Pf(n)}const EA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Wm(t){return t.replace(EA,TA)}function TA(t,e,n,i){let r="";for(let o=parseInt(e);o<parseInt(n);o++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return r}function Xm(t){let e=`precision ${t.precision} float;
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
#define LOW_PRECISION`),e}const AA={[Fl]:"SHADOWMAP_TYPE_PCF",[Os]:"SHADOWMAP_TYPE_VSM"};function CA(t){return AA[t.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const RA={[So]:"ENVMAP_TYPE_CUBE",[us]:"ENVMAP_TYPE_CUBE",[qu]:"ENVMAP_TYPE_CUBE_UV"};function IA(t){return t.envMap===!1?"ENVMAP_TYPE_CUBE":RA[t.envMapMode]||"ENVMAP_TYPE_CUBE"}const PA={[us]:"ENVMAP_MODE_REFRACTION"};function NA(t){return t.envMap===!1?"ENVMAP_MODE_REFLECTION":PA[t.envMapMode]||"ENVMAP_MODE_REFLECTION"}const DA={[k0]:"ENVMAP_BLENDING_MULTIPLY",[SS]:"ENVMAP_BLENDING_MIX",[MS]:"ENVMAP_BLENDING_ADD"};function LA(t){return t.envMap===!1?"ENVMAP_BLENDING_NONE":DA[t.combine]||"ENVMAP_BLENDING_NONE"}function FA(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:i,maxMip:n}}function UA(t,e,n,i){const r=t.getContext(),o=n.defines;let s=n.vertexShader,a=n.fragmentShader;const l=CA(n),u=IA(n),c=NA(n),d=LA(n),f=FA(n),h=yA(n),m=xA(o),v=r.createProgram();let g,p,b=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(g=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,m].filter(Bs).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,m].filter(Bs).join(`
`),p.length>0&&(p+=`
`)):(g=[Xm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,m,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Bs).join(`
`),p=[Xm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,m,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.envMap?"#define "+c:"",n.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==vi?"#define TONE_MAPPING":"",n.toneMapping!==vi?dt.tonemapping_pars_fragment:"",n.toneMapping!==vi?vA("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",dt.colorspace_pars_fragment,mA("linearToOutputTexel",n.outputColorSpace),_A(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Bs).join(`
`)),s=Pf(s),s=Hm(s,n),s=Gm(s,n),a=Pf(a),a=Hm(a,n),a=Gm(a,n),s=Wm(s),a=Wm(a),n.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,g=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",n.glslVersion===lm?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===lm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const M=b+g+s,_=b+p+a,P=zm(r,r.VERTEX_SHADER,M),D=zm(r,r.FRAGMENT_SHADER,_);r.attachShader(v,P),r.attachShader(v,D),n.index0AttributeName!==void 0?r.bindAttribLocation(v,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v);function B(E){if(t.debug.checkShaderErrors){const I=r.getProgramInfoLog(v)||"",q=r.getShaderInfoLog(P)||"",w=r.getShaderInfoLog(D)||"",k=I.trim(),A=q.trim(),N=w.trim();let O=!0,$=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(O=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,v,P,D);else{const K=$m(r,P,"vertex"),te=$m(r,D,"fragment");_t("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Material Name: `+E.name+`
Material Type: `+E.type+`

Program Info Log: `+k+`
`+K+`
`+te)}else k!==""?st("WebGLProgram: Program Info Log:",k):(A===""||N==="")&&($=!1);$&&(E.diagnostics={runnable:O,programLog:k,vertexShader:{log:A,prefix:g},fragmentShader:{log:N,prefix:p}})}r.deleteShader(P),r.deleteShader(D),y=new zl(r,v),x=bA(r,v)}let y;this.getUniforms=function(){return y===void 0&&B(this),y};let x;this.getAttributes=function(){return x===void 0&&B(this),x};let T=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=r.getProgramParameter(v,dA)),T},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=fA++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=P,this.fragmentShader=D,this}let OA=0;class BA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),o=this._getShaderStage(i),s=this._getShaderCacheForMaterial(e);return s.has(r)===!1&&(s.add(r),r.usedTimes++),s.has(o)===!1&&(s.add(o),o.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new kA(e),n.set(e,i)),i}}class kA{constructor(e){this.id=OA++,this.code=e,this.usedTimes=0}}function zA(t,e,n,i,r,o){const s=new i_,a=new BA,l=new Set,u=[],c=new Map,d=i.logarithmicDepthBuffer;let f=i.precision;const h={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(y){return l.add(y),y===0?"uv":`uv${y}`}function v(y,x,T,E,I){const q=E.fog,w=I.geometry,k=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?E.environment:null,A=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,N=e.get(y.envMap||k,A),O=N&&N.mapping===qu?N.image.height:null,$=h[y.type];y.precision!==null&&(f=i.getMaxPrecision(y.precision),f!==y.precision&&st("WebGLProgram.getParameters:",y.precision,"not supported, using",f,"instead."));const K=w.morphAttributes.position||w.morphAttributes.normal||w.morphAttributes.color,te=K!==void 0?K.length:0;let ne=0;w.morphAttributes.position!==void 0&&(ne=1),w.morphAttributes.normal!==void 0&&(ne=2),w.morphAttributes.color!==void 0&&(ne=3);let ge,Ee,Se,G;if($){const St=ci[$];ge=St.vertexShader,Ee=St.fragmentShader}else ge=y.vertexShader,Ee=y.fragmentShader,a.update(y),Se=a.getVertexShaderID(y),G=a.getFragmentShaderID(y);const U=t.getRenderTarget(),Y=t.state.buffers.depth.getReversed(),he=I.isInstancedMesh===!0,xe=I.isBatchedMesh===!0,we=!!y.map,H=!!y.matcap,X=!!N,L=!!y.aoMap,F=!!y.lightMap,z=!!y.bumpMap,J=!!y.normalMap,C=!!y.displacementMap,ae=!!y.emissiveMap,W=!!y.metalnessMap,j=!!y.roughnessMap,ee=y.anisotropy>0,R=y.clearcoat>0,S=y.dispersion>0,Z=y.iridescence>0,oe=y.sheen>0,de=y.transmission>0,se=ee&&!!y.anisotropyMap,Ne=R&&!!y.clearcoatMap,Ce=R&&!!y.clearcoatNormalMap,$e=R&&!!y.clearcoatRoughnessMap,We=Z&&!!y.iridescenceMap,Pe=Z&&!!y.iridescenceThicknessMap,ue=oe&&!!y.sheenColorMap,re=oe&&!!y.sheenRoughnessMap,Ae=!!y.specularMap,Le=!!y.specularColorMap,Qe=!!y.specularIntensityMap,ie=de&&!!y.transmissionMap,Fe=de&&!!y.thicknessMap,Ue=!!y.gradientMap,Be=!!y.alphaMap,De=y.alphaTest>0,Me=!!y.alphaHash,qe=!!y.extensions;let ot=vi;y.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(ot=t.toneMapping);const Lt={shaderID:$,shaderType:y.type,shaderName:y.name,vertexShader:ge,fragmentShader:Ee,defines:y.defines,customVertexShaderID:Se,customFragmentShaderID:G,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:f,batching:xe,batchingColor:xe&&I._colorsTexture!==null,instancing:he,instancingColor:he&&I.instanceColor!==null,instancingMorph:he&&I.morphTexture!==null,outputColorSpace:U===null?t.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:zr,alphaToCoverage:!!y.alphaToCoverage,map:we,matcap:H,envMap:X,envMapMode:X&&N.mapping,envMapCubeUVHeight:O,aoMap:L,lightMap:F,bumpMap:z,normalMap:J,displacementMap:C,emissiveMap:ae,normalMapObjectSpace:J&&y.normalMapType===AS,normalMapTangentSpace:J&&y.normalMapType===TS,metalnessMap:W,roughnessMap:j,anisotropy:ee,anisotropyMap:se,clearcoat:R,clearcoatMap:Ne,clearcoatNormalMap:Ce,clearcoatRoughnessMap:$e,dispersion:S,iridescence:Z,iridescenceMap:We,iridescenceThicknessMap:Pe,sheen:oe,sheenColorMap:ue,sheenRoughnessMap:re,specularMap:Ae,specularColorMap:Le,specularIntensityMap:Qe,transmission:de,transmissionMap:ie,thicknessMap:Fe,gradientMap:Ue,opaque:y.transparent===!1&&y.blending===Qo&&y.alphaToCoverage===!1,alphaMap:Be,alphaTest:De,alphaHash:Me,combine:y.combine,mapUv:we&&m(y.map.channel),aoMapUv:L&&m(y.aoMap.channel),lightMapUv:F&&m(y.lightMap.channel),bumpMapUv:z&&m(y.bumpMap.channel),normalMapUv:J&&m(y.normalMap.channel),displacementMapUv:C&&m(y.displacementMap.channel),emissiveMapUv:ae&&m(y.emissiveMap.channel),metalnessMapUv:W&&m(y.metalnessMap.channel),roughnessMapUv:j&&m(y.roughnessMap.channel),anisotropyMapUv:se&&m(y.anisotropyMap.channel),clearcoatMapUv:Ne&&m(y.clearcoatMap.channel),clearcoatNormalMapUv:Ce&&m(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:$e&&m(y.clearcoatRoughnessMap.channel),iridescenceMapUv:We&&m(y.iridescenceMap.channel),iridescenceThicknessMapUv:Pe&&m(y.iridescenceThicknessMap.channel),sheenColorMapUv:ue&&m(y.sheenColorMap.channel),sheenRoughnessMapUv:re&&m(y.sheenRoughnessMap.channel),specularMapUv:Ae&&m(y.specularMap.channel),specularColorMapUv:Le&&m(y.specularColorMap.channel),specularIntensityMapUv:Qe&&m(y.specularIntensityMap.channel),transmissionMapUv:ie&&m(y.transmissionMap.channel),thicknessMapUv:Fe&&m(y.thicknessMap.channel),alphaMapUv:Be&&m(y.alphaMap.channel),vertexTangents:!!w.attributes.tangent&&(J||ee),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!w.attributes.color&&w.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!w.attributes.uv&&(we||Be),fog:!!q,useFog:y.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:y.wireframe===!1&&(y.flatShading===!0||w.attributes.normal===void 0&&J===!1&&(y.isMeshLambertMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isMeshPhysicalMaterial)),sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:Y,skinning:I.isSkinnedMesh===!0,morphTargets:w.morphAttributes.position!==void 0,morphNormals:w.morphAttributes.normal!==void 0,morphColors:w.morphAttributes.color!==void 0,morphTargetsCount:te,morphTextureStride:ne,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:t.shadowMap.enabled&&T.length>0,shadowMapType:t.shadowMap.type,toneMapping:ot,decodeVideoTexture:we&&y.map.isVideoTexture===!0&&gt.getTransfer(y.map.colorSpace)===Mt,decodeVideoTextureEmissive:ae&&y.emissiveMap.isVideoTexture===!0&&gt.getTransfer(y.emissiveMap.colorSpace)===Mt,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Vi,flipSided:y.side===Tn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:qe&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(qe&&y.extensions.multiDraw===!0||xe)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Lt.vertexUv1s=l.has(1),Lt.vertexUv2s=l.has(2),Lt.vertexUv3s=l.has(3),l.clear(),Lt}function g(y){const x=[];if(y.shaderID?x.push(y.shaderID):(x.push(y.customVertexShaderID),x.push(y.customFragmentShaderID)),y.defines!==void 0)for(const T in y.defines)x.push(T),x.push(y.defines[T]);return y.isRawShaderMaterial===!1&&(p(x,y),b(x,y),x.push(t.outputColorSpace)),x.push(y.customProgramCacheKey),x.join()}function p(y,x){y.push(x.precision),y.push(x.outputColorSpace),y.push(x.envMapMode),y.push(x.envMapCubeUVHeight),y.push(x.mapUv),y.push(x.alphaMapUv),y.push(x.lightMapUv),y.push(x.aoMapUv),y.push(x.bumpMapUv),y.push(x.normalMapUv),y.push(x.displacementMapUv),y.push(x.emissiveMapUv),y.push(x.metalnessMapUv),y.push(x.roughnessMapUv),y.push(x.anisotropyMapUv),y.push(x.clearcoatMapUv),y.push(x.clearcoatNormalMapUv),y.push(x.clearcoatRoughnessMapUv),y.push(x.iridescenceMapUv),y.push(x.iridescenceThicknessMapUv),y.push(x.sheenColorMapUv),y.push(x.sheenRoughnessMapUv),y.push(x.specularMapUv),y.push(x.specularColorMapUv),y.push(x.specularIntensityMapUv),y.push(x.transmissionMapUv),y.push(x.thicknessMapUv),y.push(x.combine),y.push(x.fogExp2),y.push(x.sizeAttenuation),y.push(x.morphTargetsCount),y.push(x.morphAttributeCount),y.push(x.numDirLights),y.push(x.numPointLights),y.push(x.numSpotLights),y.push(x.numSpotLightMaps),y.push(x.numHemiLights),y.push(x.numRectAreaLights),y.push(x.numDirLightShadows),y.push(x.numPointLightShadows),y.push(x.numSpotLightShadows),y.push(x.numSpotLightShadowsWithMaps),y.push(x.numLightProbes),y.push(x.shadowMapType),y.push(x.toneMapping),y.push(x.numClippingPlanes),y.push(x.numClipIntersection),y.push(x.depthPacking)}function b(y,x){s.disableAll(),x.instancing&&s.enable(0),x.instancingColor&&s.enable(1),x.instancingMorph&&s.enable(2),x.matcap&&s.enable(3),x.envMap&&s.enable(4),x.normalMapObjectSpace&&s.enable(5),x.normalMapTangentSpace&&s.enable(6),x.clearcoat&&s.enable(7),x.iridescence&&s.enable(8),x.alphaTest&&s.enable(9),x.vertexColors&&s.enable(10),x.vertexAlphas&&s.enable(11),x.vertexUv1s&&s.enable(12),x.vertexUv2s&&s.enable(13),x.vertexUv3s&&s.enable(14),x.vertexTangents&&s.enable(15),x.anisotropy&&s.enable(16),x.alphaHash&&s.enable(17),x.batching&&s.enable(18),x.dispersion&&s.enable(19),x.batchingColor&&s.enable(20),x.gradientMap&&s.enable(21),y.push(s.mask),s.disableAll(),x.fog&&s.enable(0),x.useFog&&s.enable(1),x.flatShading&&s.enable(2),x.logarithmicDepthBuffer&&s.enable(3),x.reversedDepthBuffer&&s.enable(4),x.skinning&&s.enable(5),x.morphTargets&&s.enable(6),x.morphNormals&&s.enable(7),x.morphColors&&s.enable(8),x.premultipliedAlpha&&s.enable(9),x.shadowMapEnabled&&s.enable(10),x.doubleSided&&s.enable(11),x.flipSided&&s.enable(12),x.useDepthPacking&&s.enable(13),x.dithering&&s.enable(14),x.transmission&&s.enable(15),x.sheen&&s.enable(16),x.opaque&&s.enable(17),x.pointsUvs&&s.enable(18),x.decodeVideoTexture&&s.enable(19),x.decodeVideoTextureEmissive&&s.enable(20),x.alphaToCoverage&&s.enable(21),y.push(s.mask)}function M(y){const x=h[y.type];let T;if(x){const E=ci[x];T=fM.clone(E.uniforms)}else T=y.uniforms;return T}function _(y,x){let T=c.get(x);return T!==void 0?++T.usedTimes:(T=new UA(t,x,y,r),u.push(T),c.set(x,T)),T}function P(y){if(--y.usedTimes===0){const x=u.indexOf(y);u[x]=u[u.length-1],u.pop(),c.delete(y.cacheKey),y.destroy()}}function D(y){a.remove(y)}function B(){a.dispose()}return{getParameters:v,getProgramCacheKey:g,getUniforms:M,acquireProgram:_,releaseProgram:P,releaseShaderCache:D,programs:u,dispose:B}}function VA(){let t=new WeakMap;function e(s){return t.has(s)}function n(s){let a=t.get(s);return a===void 0&&(a={},t.set(s,a)),a}function i(s){t.delete(s)}function r(s,a,l){t.get(s)[a]=l}function o(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:o}}function $A(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.materialVariant!==e.materialVariant?t.materialVariant-e.materialVariant:t.z!==e.z?t.z-e.z:t.id-e.id}function Ym(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function qm(){const t=[];let e=0;const n=[],i=[],r=[];function o(){e=0,n.length=0,i.length=0,r.length=0}function s(f){let h=0;return f.isInstancedMesh&&(h+=2),f.isSkinnedMesh&&(h+=1),h}function a(f,h,m,v,g,p){let b=t[e];return b===void 0?(b={id:f.id,object:f,geometry:h,material:m,materialVariant:s(f),groupOrder:v,renderOrder:f.renderOrder,z:g,group:p},t[e]=b):(b.id=f.id,b.object=f,b.geometry=h,b.material=m,b.materialVariant=s(f),b.groupOrder=v,b.renderOrder=f.renderOrder,b.z=g,b.group=p),e++,b}function l(f,h,m,v,g,p){const b=a(f,h,m,v,g,p);m.transmission>0?i.push(b):m.transparent===!0?r.push(b):n.push(b)}function u(f,h,m,v,g,p){const b=a(f,h,m,v,g,p);m.transmission>0?i.unshift(b):m.transparent===!0?r.unshift(b):n.unshift(b)}function c(f,h){n.length>1&&n.sort(f||$A),i.length>1&&i.sort(h||Ym),r.length>1&&r.sort(h||Ym)}function d(){for(let f=e,h=t.length;f<h;f++){const m=t[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:n,transmissive:i,transparent:r,init:o,push:l,unshift:u,finish:d,sort:c}}function HA(){let t=new WeakMap;function e(i,r){const o=t.get(i);let s;return o===void 0?(s=new qm,t.set(i,[s])):r>=o.length?(s=new qm,o.push(s)):s=o[r],s}function n(){t=new WeakMap}return{get:e,dispose:n}}function GA(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new ye,color:new Et};break;case"SpotLight":n={position:new ye,direction:new ye,color:new Et,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new ye,color:new Et,distance:0,decay:0};break;case"HemisphereLight":n={direction:new ye,skyColor:new Et,groundColor:new Et};break;case"RectAreaLight":n={color:new Et,position:new ye,halfWidth:new ye,halfHeight:new ye};break}return t[e.id]=n,n}}}function WA(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Tt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Tt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Tt,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let XA=0;function YA(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function qA(t){const e=new GA,n=WA(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new ye);const r=new ye,o=new Wt,s=new Wt;function a(u){let c=0,d=0,f=0;for(let x=0;x<9;x++)i.probe[x].set(0,0,0);let h=0,m=0,v=0,g=0,p=0,b=0,M=0,_=0,P=0,D=0,B=0;u.sort(YA);for(let x=0,T=u.length;x<T;x++){const E=u[x],I=E.color,q=E.intensity,w=E.distance;let k=null;if(E.shadow&&E.shadow.map&&(E.shadow.map.texture.format===cs?k=E.shadow.map.texture:k=E.shadow.map.depthTexture||E.shadow.map.texture),E.isAmbientLight)c+=I.r*q,d+=I.g*q,f+=I.b*q;else if(E.isLightProbe){for(let A=0;A<9;A++)i.probe[A].addScaledVector(E.sh.coefficients[A],q);B++}else if(E.isDirectionalLight){const A=e.get(E);if(A.color.copy(E.color).multiplyScalar(E.intensity),E.castShadow){const N=E.shadow,O=n.get(E);O.shadowIntensity=N.intensity,O.shadowBias=N.bias,O.shadowNormalBias=N.normalBias,O.shadowRadius=N.radius,O.shadowMapSize=N.mapSize,i.directionalShadow[h]=O,i.directionalShadowMap[h]=k,i.directionalShadowMatrix[h]=E.shadow.matrix,b++}i.directional[h]=A,h++}else if(E.isSpotLight){const A=e.get(E);A.position.setFromMatrixPosition(E.matrixWorld),A.color.copy(I).multiplyScalar(q),A.distance=w,A.coneCos=Math.cos(E.angle),A.penumbraCos=Math.cos(E.angle*(1-E.penumbra)),A.decay=E.decay,i.spot[v]=A;const N=E.shadow;if(E.map&&(i.spotLightMap[P]=E.map,P++,N.updateMatrices(E),E.castShadow&&D++),i.spotLightMatrix[v]=N.matrix,E.castShadow){const O=n.get(E);O.shadowIntensity=N.intensity,O.shadowBias=N.bias,O.shadowNormalBias=N.normalBias,O.shadowRadius=N.radius,O.shadowMapSize=N.mapSize,i.spotShadow[v]=O,i.spotShadowMap[v]=k,_++}v++}else if(E.isRectAreaLight){const A=e.get(E);A.color.copy(I).multiplyScalar(q),A.halfWidth.set(E.width*.5,0,0),A.halfHeight.set(0,E.height*.5,0),i.rectArea[g]=A,g++}else if(E.isPointLight){const A=e.get(E);if(A.color.copy(E.color).multiplyScalar(E.intensity),A.distance=E.distance,A.decay=E.decay,E.castShadow){const N=E.shadow,O=n.get(E);O.shadowIntensity=N.intensity,O.shadowBias=N.bias,O.shadowNormalBias=N.normalBias,O.shadowRadius=N.radius,O.shadowMapSize=N.mapSize,O.shadowCameraNear=N.camera.near,O.shadowCameraFar=N.camera.far,i.pointShadow[m]=O,i.pointShadowMap[m]=k,i.pointShadowMatrix[m]=E.shadow.matrix,M++}i.point[m]=A,m++}else if(E.isHemisphereLight){const A=e.get(E);A.skyColor.copy(E.color).multiplyScalar(q),A.groundColor.copy(E.groundColor).multiplyScalar(q),i.hemi[p]=A,p++}}g>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ke.LTC_FLOAT_1,i.rectAreaLTC2=ke.LTC_FLOAT_2):(i.rectAreaLTC1=ke.LTC_HALF_1,i.rectAreaLTC2=ke.LTC_HALF_2)),i.ambient[0]=c,i.ambient[1]=d,i.ambient[2]=f;const y=i.hash;(y.directionalLength!==h||y.pointLength!==m||y.spotLength!==v||y.rectAreaLength!==g||y.hemiLength!==p||y.numDirectionalShadows!==b||y.numPointShadows!==M||y.numSpotShadows!==_||y.numSpotMaps!==P||y.numLightProbes!==B)&&(i.directional.length=h,i.spot.length=v,i.rectArea.length=g,i.point.length=m,i.hemi.length=p,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.pointShadow.length=M,i.pointShadowMap.length=M,i.spotShadow.length=_,i.spotShadowMap.length=_,i.directionalShadowMatrix.length=b,i.pointShadowMatrix.length=M,i.spotLightMatrix.length=_+P-D,i.spotLightMap.length=P,i.numSpotLightShadowsWithMaps=D,i.numLightProbes=B,y.directionalLength=h,y.pointLength=m,y.spotLength=v,y.rectAreaLength=g,y.hemiLength=p,y.numDirectionalShadows=b,y.numPointShadows=M,y.numSpotShadows=_,y.numSpotMaps=P,y.numLightProbes=B,i.version=XA++)}function l(u,c){let d=0,f=0,h=0,m=0,v=0;const g=c.matrixWorldInverse;for(let p=0,b=u.length;p<b;p++){const M=u[p];if(M.isDirectionalLight){const _=i.directional[d];_.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),_.direction.sub(r),_.direction.transformDirection(g),d++}else if(M.isSpotLight){const _=i.spot[h];_.position.setFromMatrixPosition(M.matrixWorld),_.position.applyMatrix4(g),_.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),_.direction.sub(r),_.direction.transformDirection(g),h++}else if(M.isRectAreaLight){const _=i.rectArea[m];_.position.setFromMatrixPosition(M.matrixWorld),_.position.applyMatrix4(g),s.identity(),o.copy(M.matrixWorld),o.premultiply(g),s.extractRotation(o),_.halfWidth.set(M.width*.5,0,0),_.halfHeight.set(0,M.height*.5,0),_.halfWidth.applyMatrix4(s),_.halfHeight.applyMatrix4(s),m++}else if(M.isPointLight){const _=i.point[f];_.position.setFromMatrixPosition(M.matrixWorld),_.position.applyMatrix4(g),f++}else if(M.isHemisphereLight){const _=i.hemi[v];_.direction.setFromMatrixPosition(M.matrixWorld),_.direction.transformDirection(g),v++}}}return{setup:a,setupView:l,state:i}}function Km(t){const e=new qA(t),n=[],i=[];function r(c){u.camera=c,n.length=0,i.length=0}function o(c){n.push(c)}function s(c){i.push(c)}function a(){e.setup(n)}function l(c){e.setupView(n,c)}const u={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:u,setupLights:a,setupLightsView:l,pushLight:o,pushShadow:s}}function KA(t){let e=new WeakMap;function n(r,o=0){const s=e.get(r);let a;return s===void 0?(a=new Km(t),e.set(r,[a])):o>=s.length?(a=new Km(t),s.push(a)):a=s[o],a}function i(){e=new WeakMap}return{get:n,dispose:i}}const ZA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,jA=`uniform sampler2D shadow_pass;
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
}`,JA=[new ye(1,0,0),new ye(-1,0,0),new ye(0,1,0),new ye(0,-1,0),new ye(0,0,1),new ye(0,0,-1)],QA=[new ye(0,-1,0),new ye(0,-1,0),new ye(0,0,1),new ye(0,0,-1),new ye(0,-1,0),new ye(0,-1,0)],Zm=new Wt,Ps=new ye,sd=new ye;function eC(t,e,n){let i=new l_;const r=new Tt,o=new Tt,s=new zt,a=new gM,l=new vM,u={},c=n.maxTextureSize,d={[kr]:Tn,[Tn]:kr,[Vi]:Vi},f=new Qn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Tt},radius:{value:4}},vertexShader:ZA,fragmentShader:jA}),h=f.clone();h.defines.HORIZONTAL_PASS=1;const m=new ur;m.setAttribute("position",new _i(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Si(m,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Fl;let p=this.type;this.render=function(D,B,y){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||D.length===0)return;this.type===iS&&(st("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Fl);const x=t.getRenderTarget(),T=t.getActiveCubeFace(),E=t.getActiveMipmapLevel(),I=t.state;I.setBlending(qi),I.buffers.depth.getReversed()===!0?I.buffers.color.setClear(0,0,0,0):I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);const q=p!==this.type;q&&B.traverse(function(w){w.material&&(Array.isArray(w.material)?w.material.forEach(k=>k.needsUpdate=!0):w.material.needsUpdate=!0)});for(let w=0,k=D.length;w<k;w++){const A=D[w],N=A.shadow;if(N===void 0){st("WebGLShadowMap:",A,"has no shadow.");continue}if(N.autoUpdate===!1&&N.needsUpdate===!1)continue;r.copy(N.mapSize);const O=N.getFrameExtents();r.multiply(O),o.copy(N.mapSize),(r.x>c||r.y>c)&&(r.x>c&&(o.x=Math.floor(c/O.x),r.x=o.x*O.x,N.mapSize.x=o.x),r.y>c&&(o.y=Math.floor(c/O.y),r.y=o.y*O.y,N.mapSize.y=o.y));const $=t.state.buffers.depth.getReversed();if(N.camera._reversedDepth=$,N.map===null||q===!0){if(N.map!==null&&(N.map.depthTexture!==null&&(N.map.depthTexture.dispose(),N.map.depthTexture=null),N.map.dispose()),this.type===Os){if(A.isPointLight){st("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}N.map=new Mn(r.x,r.y,{format:cs,type:tr,minFilter:Rt,magFilter:Rt,generateMipmaps:!1}),N.map.texture.name=A.name+".shadowMap",N.map.depthTexture=new fa(r.x,r.y,pi),N.map.depthTexture.name=A.name+".shadowMapDepth",N.map.depthTexture.format=nr,N.map.depthTexture.compareFunction=null,N.map.depthTexture.minFilter=nn,N.map.depthTexture.magFilter=nn}else A.isPointLight?(N.map=new p_(r.x),N.map.depthTexture=new cM(r.x,bi)):(N.map=new Mn(r.x,r.y),N.map.depthTexture=new fa(r.x,r.y,bi)),N.map.depthTexture.name=A.name+".shadowMap",N.map.depthTexture.format=nr,this.type===Fl?(N.map.depthTexture.compareFunction=$?Nh:Ph,N.map.depthTexture.minFilter=Rt,N.map.depthTexture.magFilter=Rt):(N.map.depthTexture.compareFunction=null,N.map.depthTexture.minFilter=nn,N.map.depthTexture.magFilter=nn);N.camera.updateProjectionMatrix()}const K=N.map.isWebGLCubeRenderTarget?6:1;for(let te=0;te<K;te++){if(N.map.isWebGLCubeRenderTarget)t.setRenderTarget(N.map,te),t.clear();else{te===0&&(t.setRenderTarget(N.map),t.clear());const ne=N.getViewport(te);s.set(o.x*ne.x,o.y*ne.y,o.x*ne.z,o.y*ne.w),I.viewport(s)}if(A.isPointLight){const ne=N.camera,ge=N.matrix,Ee=A.distance||ne.far;Ee!==ne.far&&(ne.far=Ee,ne.updateProjectionMatrix()),Ps.setFromMatrixPosition(A.matrixWorld),ne.position.copy(Ps),sd.copy(ne.position),sd.add(JA[te]),ne.up.copy(QA[te]),ne.lookAt(sd),ne.updateMatrixWorld(),ge.makeTranslation(-Ps.x,-Ps.y,-Ps.z),Zm.multiplyMatrices(ne.projectionMatrix,ne.matrixWorldInverse),N._frustum.setFromProjectionMatrix(Zm,ne.coordinateSystem,ne.reversedDepth)}else N.updateMatrices(A);i=N.getFrustum(),_(B,y,N.camera,A,this.type)}N.isPointLightShadow!==!0&&this.type===Os&&b(N,y),N.needsUpdate=!1}p=this.type,g.needsUpdate=!1,t.setRenderTarget(x,T,E)};function b(D,B){const y=e.update(v);f.defines.VSM_SAMPLES!==D.blurSamples&&(f.defines.VSM_SAMPLES=D.blurSamples,h.defines.VSM_SAMPLES=D.blurSamples,f.needsUpdate=!0,h.needsUpdate=!0),D.mapPass===null&&(D.mapPass=new Mn(r.x,r.y,{format:cs,type:tr})),f.uniforms.shadow_pass.value=D.map.depthTexture,f.uniforms.resolution.value=D.mapSize,f.uniforms.radius.value=D.radius,t.setRenderTarget(D.mapPass),t.clear(),t.renderBufferDirect(B,null,y,f,v,null),h.uniforms.shadow_pass.value=D.mapPass.texture,h.uniforms.resolution.value=D.mapSize,h.uniforms.radius.value=D.radius,t.setRenderTarget(D.map),t.clear(),t.renderBufferDirect(B,null,y,h,v,null)}function M(D,B,y,x){let T=null;const E=y.isPointLight===!0?D.customDistanceMaterial:D.customDepthMaterial;if(E!==void 0)T=E;else if(T=y.isPointLight===!0?l:a,t.localClippingEnabled&&B.clipShadows===!0&&Array.isArray(B.clippingPlanes)&&B.clippingPlanes.length!==0||B.displacementMap&&B.displacementScale!==0||B.alphaMap&&B.alphaTest>0||B.map&&B.alphaTest>0||B.alphaToCoverage===!0){const I=T.uuid,q=B.uuid;let w=u[I];w===void 0&&(w={},u[I]=w);let k=w[q];k===void 0&&(k=T.clone(),w[q]=k,B.addEventListener("dispose",P)),T=k}if(T.visible=B.visible,T.wireframe=B.wireframe,x===Os?T.side=B.shadowSide!==null?B.shadowSide:B.side:T.side=B.shadowSide!==null?B.shadowSide:d[B.side],T.alphaMap=B.alphaMap,T.alphaTest=B.alphaToCoverage===!0?.5:B.alphaTest,T.map=B.map,T.clipShadows=B.clipShadows,T.clippingPlanes=B.clippingPlanes,T.clipIntersection=B.clipIntersection,T.displacementMap=B.displacementMap,T.displacementScale=B.displacementScale,T.displacementBias=B.displacementBias,T.wireframeLinewidth=B.wireframeLinewidth,T.linewidth=B.linewidth,y.isPointLight===!0&&T.isMeshDistanceMaterial===!0){const I=t.properties.get(T);I.light=y}return T}function _(D,B,y,x,T){if(D.visible===!1)return;if(D.layers.test(B.layers)&&(D.isMesh||D.isLine||D.isPoints)&&(D.castShadow||D.receiveShadow&&T===Os)&&(!D.frustumCulled||i.intersectsObject(D))){D.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,D.matrixWorld);const q=e.update(D),w=D.material;if(Array.isArray(w)){const k=q.groups;for(let A=0,N=k.length;A<N;A++){const O=k[A],$=w[O.materialIndex];if($&&$.visible){const K=M(D,$,x,T);D.onBeforeShadow(t,D,B,y,q,K,O),t.renderBufferDirect(y,null,q,K,D,O),D.onAfterShadow(t,D,B,y,q,K,O)}}}else if(w.visible){const k=M(D,w,x,T);D.onBeforeShadow(t,D,B,y,q,k,null),t.renderBufferDirect(y,null,q,k,D,null),D.onAfterShadow(t,D,B,y,q,k,null)}}const I=D.children;for(let q=0,w=I.length;q<w;q++)_(I[q],B,y,x,T)}function P(D){D.target.removeEventListener("dispose",P);for(const y in u){const x=u[y],T=D.target.uuid;T in x&&(x[T].dispose(),delete x[T])}}}function tC(t,e){function n(){let ie=!1;const Fe=new zt;let Ue=null;const Be=new zt(0,0,0,0);return{setMask:function(De){Ue!==De&&!ie&&(t.colorMask(De,De,De,De),Ue=De)},setLocked:function(De){ie=De},setClear:function(De,Me,qe,ot,Lt){Lt===!0&&(De*=ot,Me*=ot,qe*=ot),Fe.set(De,Me,qe,ot),Be.equals(Fe)===!1&&(t.clearColor(De,Me,qe,ot),Be.copy(Fe))},reset:function(){ie=!1,Ue=null,Be.set(-1,0,0,0)}}}function i(){let ie=!1,Fe=!1,Ue=null,Be=null,De=null;return{setReversed:function(Me){if(Fe!==Me){const qe=e.get("EXT_clip_control");Me?qe.clipControlEXT(qe.LOWER_LEFT_EXT,qe.ZERO_TO_ONE_EXT):qe.clipControlEXT(qe.LOWER_LEFT_EXT,qe.NEGATIVE_ONE_TO_ONE_EXT),Fe=Me;const ot=De;De=null,this.setClear(ot)}},getReversed:function(){return Fe},setTest:function(Me){Me?U(t.DEPTH_TEST):Y(t.DEPTH_TEST)},setMask:function(Me){Ue!==Me&&!ie&&(t.depthMask(Me),Ue=Me)},setFunc:function(Me){if(Fe&&(Me=OS[Me]),Be!==Me){switch(Me){case Vd:t.depthFunc(t.NEVER);break;case $d:t.depthFunc(t.ALWAYS);break;case Hd:t.depthFunc(t.LESS);break;case ls:t.depthFunc(t.LEQUAL);break;case Gd:t.depthFunc(t.EQUAL);break;case Wd:t.depthFunc(t.GEQUAL);break;case Xd:t.depthFunc(t.GREATER);break;case Yd:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}Be=Me}},setLocked:function(Me){ie=Me},setClear:function(Me){De!==Me&&(De=Me,Fe&&(Me=1-Me),t.clearDepth(Me))},reset:function(){ie=!1,Ue=null,Be=null,De=null,Fe=!1}}}function r(){let ie=!1,Fe=null,Ue=null,Be=null,De=null,Me=null,qe=null,ot=null,Lt=null;return{setTest:function(St){ie||(St?U(t.STENCIL_TEST):Y(t.STENCIL_TEST))},setMask:function(St){Fe!==St&&!ie&&(t.stencilMask(St),Fe=St)},setFunc:function(St,Ti,Ai){(Ue!==St||Be!==Ti||De!==Ai)&&(t.stencilFunc(St,Ti,Ai),Ue=St,Be=Ti,De=Ai)},setOp:function(St,Ti,Ai){(Me!==St||qe!==Ti||ot!==Ai)&&(t.stencilOp(St,Ti,Ai),Me=St,qe=Ti,ot=Ai)},setLocked:function(St){ie=St},setClear:function(St){Lt!==St&&(t.clearStencil(St),Lt=St)},reset:function(){ie=!1,Fe=null,Ue=null,Be=null,De=null,Me=null,qe=null,ot=null,Lt=null}}}const o=new n,s=new i,a=new r,l=new WeakMap,u=new WeakMap;let c={},d={},f=new WeakMap,h=[],m=null,v=!1,g=null,p=null,b=null,M=null,_=null,P=null,D=null,B=new Et(0,0,0),y=0,x=!1,T=null,E=null,I=null,q=null,w=null;const k=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let A=!1,N=0;const O=t.getParameter(t.VERSION);O.indexOf("WebGL")!==-1?(N=parseFloat(/^WebGL (\d)/.exec(O)[1]),A=N>=1):O.indexOf("OpenGL ES")!==-1&&(N=parseFloat(/^OpenGL ES (\d)/.exec(O)[1]),A=N>=2);let $=null,K={};const te=t.getParameter(t.SCISSOR_BOX),ne=t.getParameter(t.VIEWPORT),ge=new zt().fromArray(te),Ee=new zt().fromArray(ne);function Se(ie,Fe,Ue,Be){const De=new Uint8Array(4),Me=t.createTexture();t.bindTexture(ie,Me),t.texParameteri(ie,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(ie,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let qe=0;qe<Ue;qe++)ie===t.TEXTURE_3D||ie===t.TEXTURE_2D_ARRAY?t.texImage3D(Fe,0,t.RGBA,1,1,Be,0,t.RGBA,t.UNSIGNED_BYTE,De):t.texImage2D(Fe+qe,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,De);return Me}const G={};G[t.TEXTURE_2D]=Se(t.TEXTURE_2D,t.TEXTURE_2D,1),G[t.TEXTURE_CUBE_MAP]=Se(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),G[t.TEXTURE_2D_ARRAY]=Se(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),G[t.TEXTURE_3D]=Se(t.TEXTURE_3D,t.TEXTURE_3D,1,1),o.setClear(0,0,0,1),s.setClear(1),a.setClear(0),U(t.DEPTH_TEST),s.setFunc(ls),z(!1),J(nm),U(t.CULL_FACE),L(qi);function U(ie){c[ie]!==!0&&(t.enable(ie),c[ie]=!0)}function Y(ie){c[ie]!==!1&&(t.disable(ie),c[ie]=!1)}function he(ie,Fe){return d[ie]!==Fe?(t.bindFramebuffer(ie,Fe),d[ie]=Fe,ie===t.DRAW_FRAMEBUFFER&&(d[t.FRAMEBUFFER]=Fe),ie===t.FRAMEBUFFER&&(d[t.DRAW_FRAMEBUFFER]=Fe),!0):!1}function xe(ie,Fe){let Ue=h,Be=!1;if(ie){Ue=f.get(Fe),Ue===void 0&&(Ue=[],f.set(Fe,Ue));const De=ie.textures;if(Ue.length!==De.length||Ue[0]!==t.COLOR_ATTACHMENT0){for(let Me=0,qe=De.length;Me<qe;Me++)Ue[Me]=t.COLOR_ATTACHMENT0+Me;Ue.length=De.length,Be=!0}}else Ue[0]!==t.BACK&&(Ue[0]=t.BACK,Be=!0);Be&&t.drawBuffers(Ue)}function we(ie){return m!==ie?(t.useProgram(ie),m=ie,!0):!1}const H={[oo]:t.FUNC_ADD,[oS]:t.FUNC_SUBTRACT,[sS]:t.FUNC_REVERSE_SUBTRACT};H[aS]=t.MIN,H[lS]=t.MAX;const X={[uS]:t.ZERO,[cS]:t.ONE,[dS]:t.SRC_COLOR,[kd]:t.SRC_ALPHA,[vS]:t.SRC_ALPHA_SATURATE,[mS]:t.DST_COLOR,[hS]:t.DST_ALPHA,[fS]:t.ONE_MINUS_SRC_COLOR,[zd]:t.ONE_MINUS_SRC_ALPHA,[gS]:t.ONE_MINUS_DST_COLOR,[pS]:t.ONE_MINUS_DST_ALPHA,[_S]:t.CONSTANT_COLOR,[yS]:t.ONE_MINUS_CONSTANT_COLOR,[xS]:t.CONSTANT_ALPHA,[bS]:t.ONE_MINUS_CONSTANT_ALPHA};function L(ie,Fe,Ue,Be,De,Me,qe,ot,Lt,St){if(ie===qi){v===!0&&(Y(t.BLEND),v=!1);return}if(v===!1&&(U(t.BLEND),v=!0),ie!==rS){if(ie!==g||St!==x){if((p!==oo||_!==oo)&&(t.blendEquation(t.FUNC_ADD),p=oo,_=oo),St)switch(ie){case Qo:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case im:t.blendFunc(t.ONE,t.ONE);break;case rm:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case om:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:_t("WebGLState: Invalid blending: ",ie);break}else switch(ie){case Qo:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case im:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case rm:_t("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case om:_t("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:_t("WebGLState: Invalid blending: ",ie);break}b=null,M=null,P=null,D=null,B.set(0,0,0),y=0,g=ie,x=St}return}De=De||Fe,Me=Me||Ue,qe=qe||Be,(Fe!==p||De!==_)&&(t.blendEquationSeparate(H[Fe],H[De]),p=Fe,_=De),(Ue!==b||Be!==M||Me!==P||qe!==D)&&(t.blendFuncSeparate(X[Ue],X[Be],X[Me],X[qe]),b=Ue,M=Be,P=Me,D=qe),(ot.equals(B)===!1||Lt!==y)&&(t.blendColor(ot.r,ot.g,ot.b,Lt),B.copy(ot),y=Lt),g=ie,x=!1}function F(ie,Fe){ie.side===Vi?Y(t.CULL_FACE):U(t.CULL_FACE);let Ue=ie.side===Tn;Fe&&(Ue=!Ue),z(Ue),ie.blending===Qo&&ie.transparent===!1?L(qi):L(ie.blending,ie.blendEquation,ie.blendSrc,ie.blendDst,ie.blendEquationAlpha,ie.blendSrcAlpha,ie.blendDstAlpha,ie.blendColor,ie.blendAlpha,ie.premultipliedAlpha),s.setFunc(ie.depthFunc),s.setTest(ie.depthTest),s.setMask(ie.depthWrite),o.setMask(ie.colorWrite);const Be=ie.stencilWrite;a.setTest(Be),Be&&(a.setMask(ie.stencilWriteMask),a.setFunc(ie.stencilFunc,ie.stencilRef,ie.stencilFuncMask),a.setOp(ie.stencilFail,ie.stencilZFail,ie.stencilZPass)),ae(ie.polygonOffset,ie.polygonOffsetFactor,ie.polygonOffsetUnits),ie.alphaToCoverage===!0?U(t.SAMPLE_ALPHA_TO_COVERAGE):Y(t.SAMPLE_ALPHA_TO_COVERAGE)}function z(ie){T!==ie&&(ie?t.frontFace(t.CW):t.frontFace(t.CCW),T=ie)}function J(ie){ie!==tS?(U(t.CULL_FACE),ie!==E&&(ie===nm?t.cullFace(t.BACK):ie===nS?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Y(t.CULL_FACE),E=ie}function C(ie){ie!==I&&(A&&t.lineWidth(ie),I=ie)}function ae(ie,Fe,Ue){ie?(U(t.POLYGON_OFFSET_FILL),(q!==Fe||w!==Ue)&&(q=Fe,w=Ue,s.getReversed()&&(Fe=-Fe),t.polygonOffset(Fe,Ue))):Y(t.POLYGON_OFFSET_FILL)}function W(ie){ie?U(t.SCISSOR_TEST):Y(t.SCISSOR_TEST)}function j(ie){ie===void 0&&(ie=t.TEXTURE0+k-1),$!==ie&&(t.activeTexture(ie),$=ie)}function ee(ie,Fe,Ue){Ue===void 0&&($===null?Ue=t.TEXTURE0+k-1:Ue=$);let Be=K[Ue];Be===void 0&&(Be={type:void 0,texture:void 0},K[Ue]=Be),(Be.type!==ie||Be.texture!==Fe)&&($!==Ue&&(t.activeTexture(Ue),$=Ue),t.bindTexture(ie,Fe||G[ie]),Be.type=ie,Be.texture=Fe)}function R(){const ie=K[$];ie!==void 0&&ie.type!==void 0&&(t.bindTexture(ie.type,null),ie.type=void 0,ie.texture=void 0)}function S(){try{t.compressedTexImage2D(...arguments)}catch(ie){_t("WebGLState:",ie)}}function Z(){try{t.compressedTexImage3D(...arguments)}catch(ie){_t("WebGLState:",ie)}}function oe(){try{t.texSubImage2D(...arguments)}catch(ie){_t("WebGLState:",ie)}}function de(){try{t.texSubImage3D(...arguments)}catch(ie){_t("WebGLState:",ie)}}function se(){try{t.compressedTexSubImage2D(...arguments)}catch(ie){_t("WebGLState:",ie)}}function Ne(){try{t.compressedTexSubImage3D(...arguments)}catch(ie){_t("WebGLState:",ie)}}function Ce(){try{t.texStorage2D(...arguments)}catch(ie){_t("WebGLState:",ie)}}function $e(){try{t.texStorage3D(...arguments)}catch(ie){_t("WebGLState:",ie)}}function We(){try{t.texImage2D(...arguments)}catch(ie){_t("WebGLState:",ie)}}function Pe(){try{t.texImage3D(...arguments)}catch(ie){_t("WebGLState:",ie)}}function ue(ie){ge.equals(ie)===!1&&(t.scissor(ie.x,ie.y,ie.z,ie.w),ge.copy(ie))}function re(ie){Ee.equals(ie)===!1&&(t.viewport(ie.x,ie.y,ie.z,ie.w),Ee.copy(ie))}function Ae(ie,Fe){let Ue=u.get(Fe);Ue===void 0&&(Ue=new WeakMap,u.set(Fe,Ue));let Be=Ue.get(ie);Be===void 0&&(Be=t.getUniformBlockIndex(Fe,ie.name),Ue.set(ie,Be))}function Le(ie,Fe){const Be=u.get(Fe).get(ie);l.get(Fe)!==Be&&(t.uniformBlockBinding(Fe,Be,ie.__bindingPointIndex),l.set(Fe,Be))}function Qe(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),s.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),c={},$=null,K={},d={},f=new WeakMap,h=[],m=null,v=!1,g=null,p=null,b=null,M=null,_=null,P=null,D=null,B=new Et(0,0,0),y=0,x=!1,T=null,E=null,I=null,q=null,w=null,ge.set(0,0,t.canvas.width,t.canvas.height),Ee.set(0,0,t.canvas.width,t.canvas.height),o.reset(),s.reset(),a.reset()}return{buffers:{color:o,depth:s,stencil:a},enable:U,disable:Y,bindFramebuffer:he,drawBuffers:xe,useProgram:we,setBlending:L,setMaterial:F,setFlipSided:z,setCullFace:J,setLineWidth:C,setPolygonOffset:ae,setScissorTest:W,activeTexture:j,bindTexture:ee,unbindTexture:R,compressedTexImage2D:S,compressedTexImage3D:Z,texImage2D:We,texImage3D:Pe,updateUBOMapping:Ae,uniformBlockBinding:Le,texStorage2D:Ce,texStorage3D:$e,texSubImage2D:oe,texSubImage3D:de,compressedTexSubImage2D:se,compressedTexSubImage3D:Ne,scissor:ue,viewport:re,reset:Qe}}function nC(t,e,n,i,r,o,s){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new Tt,c=new WeakMap;let d;const f=new WeakMap;let h=!1;try{h=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(R,S){return h?new OffscreenCanvas(R,S):cu("canvas")}function v(R,S,Z){let oe=1;const de=ee(R);if((de.width>Z||de.height>Z)&&(oe=Z/Math.max(de.width,de.height)),oe<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const se=Math.floor(oe*de.width),Ne=Math.floor(oe*de.height);d===void 0&&(d=m(se,Ne));const Ce=S?m(se,Ne):d;return Ce.width=se,Ce.height=Ne,Ce.getContext("2d").drawImage(R,0,0,se,Ne),st("WebGLRenderer: Texture has been resized from ("+de.width+"x"+de.height+") to ("+se+"x"+Ne+")."),Ce}else return"data"in R&&st("WebGLRenderer: Image in DataTexture is too big ("+de.width+"x"+de.height+")."),R;return R}function g(R){return R.generateMipmaps}function p(R){t.generateMipmap(R)}function b(R){return R.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?t.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function M(R,S,Z,oe,de=!1){if(R!==null){if(t[R]!==void 0)return t[R];st("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let se=S;if(S===t.RED&&(Z===t.FLOAT&&(se=t.R32F),Z===t.HALF_FLOAT&&(se=t.R16F),Z===t.UNSIGNED_BYTE&&(se=t.R8)),S===t.RED_INTEGER&&(Z===t.UNSIGNED_BYTE&&(se=t.R8UI),Z===t.UNSIGNED_SHORT&&(se=t.R16UI),Z===t.UNSIGNED_INT&&(se=t.R32UI),Z===t.BYTE&&(se=t.R8I),Z===t.SHORT&&(se=t.R16I),Z===t.INT&&(se=t.R32I)),S===t.RG&&(Z===t.FLOAT&&(se=t.RG32F),Z===t.HALF_FLOAT&&(se=t.RG16F),Z===t.UNSIGNED_BYTE&&(se=t.RG8)),S===t.RG_INTEGER&&(Z===t.UNSIGNED_BYTE&&(se=t.RG8UI),Z===t.UNSIGNED_SHORT&&(se=t.RG16UI),Z===t.UNSIGNED_INT&&(se=t.RG32UI),Z===t.BYTE&&(se=t.RG8I),Z===t.SHORT&&(se=t.RG16I),Z===t.INT&&(se=t.RG32I)),S===t.RGB_INTEGER&&(Z===t.UNSIGNED_BYTE&&(se=t.RGB8UI),Z===t.UNSIGNED_SHORT&&(se=t.RGB16UI),Z===t.UNSIGNED_INT&&(se=t.RGB32UI),Z===t.BYTE&&(se=t.RGB8I),Z===t.SHORT&&(se=t.RGB16I),Z===t.INT&&(se=t.RGB32I)),S===t.RGBA_INTEGER&&(Z===t.UNSIGNED_BYTE&&(se=t.RGBA8UI),Z===t.UNSIGNED_SHORT&&(se=t.RGBA16UI),Z===t.UNSIGNED_INT&&(se=t.RGBA32UI),Z===t.BYTE&&(se=t.RGBA8I),Z===t.SHORT&&(se=t.RGBA16I),Z===t.INT&&(se=t.RGBA32I)),S===t.RGB&&(Z===t.UNSIGNED_INT_5_9_9_9_REV&&(se=t.RGB9_E5),Z===t.UNSIGNED_INT_10F_11F_11F_REV&&(se=t.R11F_G11F_B10F)),S===t.RGBA){const Ne=de?lu:gt.getTransfer(oe);Z===t.FLOAT&&(se=t.RGBA32F),Z===t.HALF_FLOAT&&(se=t.RGBA16F),Z===t.UNSIGNED_BYTE&&(se=Ne===Mt?t.SRGB8_ALPHA8:t.RGBA8),Z===t.UNSIGNED_SHORT_4_4_4_4&&(se=t.RGBA4),Z===t.UNSIGNED_SHORT_5_5_5_1&&(se=t.RGB5_A1)}return(se===t.R16F||se===t.R32F||se===t.RG16F||se===t.RG32F||se===t.RGBA16F||se===t.RGBA32F)&&e.get("EXT_color_buffer_float"),se}function _(R,S){let Z;return R?S===null||S===bi||S===da?Z=t.DEPTH24_STENCIL8:S===pi?Z=t.DEPTH32F_STENCIL8:S===ca&&(Z=t.DEPTH24_STENCIL8,st("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===bi||S===da?Z=t.DEPTH_COMPONENT24:S===pi?Z=t.DEPTH_COMPONENT32F:S===ca&&(Z=t.DEPTH_COMPONENT16),Z}function P(R,S){return g(R)===!0||R.isFramebufferTexture&&R.minFilter!==nn&&R.minFilter!==Rt?Math.log2(Math.max(S.width,S.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?S.mipmaps.length:1}function D(R){const S=R.target;S.removeEventListener("dispose",D),y(S),S.isVideoTexture&&c.delete(S)}function B(R){const S=R.target;S.removeEventListener("dispose",B),T(S)}function y(R){const S=i.get(R);if(S.__webglInit===void 0)return;const Z=R.source,oe=f.get(Z);if(oe){const de=oe[S.__cacheKey];de.usedTimes--,de.usedTimes===0&&x(R),Object.keys(oe).length===0&&f.delete(Z)}i.remove(R)}function x(R){const S=i.get(R);t.deleteTexture(S.__webglTexture);const Z=R.source,oe=f.get(Z);delete oe[S.__cacheKey],s.memory.textures--}function T(R){const S=i.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),i.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let oe=0;oe<6;oe++){if(Array.isArray(S.__webglFramebuffer[oe]))for(let de=0;de<S.__webglFramebuffer[oe].length;de++)t.deleteFramebuffer(S.__webglFramebuffer[oe][de]);else t.deleteFramebuffer(S.__webglFramebuffer[oe]);S.__webglDepthbuffer&&t.deleteRenderbuffer(S.__webglDepthbuffer[oe])}else{if(Array.isArray(S.__webglFramebuffer))for(let oe=0;oe<S.__webglFramebuffer.length;oe++)t.deleteFramebuffer(S.__webglFramebuffer[oe]);else t.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&t.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&t.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let oe=0;oe<S.__webglColorRenderbuffer.length;oe++)S.__webglColorRenderbuffer[oe]&&t.deleteRenderbuffer(S.__webglColorRenderbuffer[oe]);S.__webglDepthRenderbuffer&&t.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const Z=R.textures;for(let oe=0,de=Z.length;oe<de;oe++){const se=i.get(Z[oe]);se.__webglTexture&&(t.deleteTexture(se.__webglTexture),s.memory.textures--),i.remove(Z[oe])}i.remove(R)}let E=0;function I(){E=0}function q(){const R=E;return R>=r.maxTextures&&st("WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+r.maxTextures),E+=1,R}function w(R){const S=[];return S.push(R.wrapS),S.push(R.wrapT),S.push(R.wrapR||0),S.push(R.magFilter),S.push(R.minFilter),S.push(R.anisotropy),S.push(R.internalFormat),S.push(R.format),S.push(R.type),S.push(R.generateMipmaps),S.push(R.premultiplyAlpha),S.push(R.flipY),S.push(R.unpackAlignment),S.push(R.colorSpace),S.join()}function k(R,S){const Z=i.get(R);if(R.isVideoTexture&&W(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&Z.__version!==R.version){const oe=R.image;if(oe===null)st("WebGLRenderer: Texture marked for update but no image data found.");else if(oe.complete===!1)st("WebGLRenderer: Texture marked for update but image is incomplete");else{G(Z,R,S);return}}else R.isExternalTexture&&(Z.__webglTexture=R.sourceTexture?R.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,Z.__webglTexture,t.TEXTURE0+S)}function A(R,S){const Z=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&Z.__version!==R.version){G(Z,R,S);return}else R.isExternalTexture&&(Z.__webglTexture=R.sourceTexture?R.sourceTexture:null);n.bindTexture(t.TEXTURE_2D_ARRAY,Z.__webglTexture,t.TEXTURE0+S)}function N(R,S){const Z=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&Z.__version!==R.version){G(Z,R,S);return}n.bindTexture(t.TEXTURE_3D,Z.__webglTexture,t.TEXTURE0+S)}function O(R,S){const Z=i.get(R);if(R.isCubeDepthTexture!==!0&&R.version>0&&Z.__version!==R.version){U(Z,R,S);return}n.bindTexture(t.TEXTURE_CUBE_MAP,Z.__webglTexture,t.TEXTURE0+S)}const $={[qd]:t.REPEAT,[Hi]:t.CLAMP_TO_EDGE,[Kd]:t.MIRRORED_REPEAT},K={[nn]:t.NEAREST,[wS]:t.NEAREST_MIPMAP_NEAREST,[Xa]:t.NEAREST_MIPMAP_LINEAR,[Rt]:t.LINEAR,[Ic]:t.LINEAR_MIPMAP_NEAREST,[co]:t.LINEAR_MIPMAP_LINEAR},te={[CS]:t.NEVER,[DS]:t.ALWAYS,[RS]:t.LESS,[Ph]:t.LEQUAL,[IS]:t.EQUAL,[Nh]:t.GEQUAL,[PS]:t.GREATER,[NS]:t.NOTEQUAL};function ne(R,S){if(S.type===pi&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===Rt||S.magFilter===Ic||S.magFilter===Xa||S.magFilter===co||S.minFilter===Rt||S.minFilter===Ic||S.minFilter===Xa||S.minFilter===co)&&st("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(R,t.TEXTURE_WRAP_S,$[S.wrapS]),t.texParameteri(R,t.TEXTURE_WRAP_T,$[S.wrapT]),(R===t.TEXTURE_3D||R===t.TEXTURE_2D_ARRAY)&&t.texParameteri(R,t.TEXTURE_WRAP_R,$[S.wrapR]),t.texParameteri(R,t.TEXTURE_MAG_FILTER,K[S.magFilter]),t.texParameteri(R,t.TEXTURE_MIN_FILTER,K[S.minFilter]),S.compareFunction&&(t.texParameteri(R,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(R,t.TEXTURE_COMPARE_FUNC,te[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===nn||S.minFilter!==Xa&&S.minFilter!==co||S.type===pi&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||i.get(S).__currentAnisotropy){const Z=e.get("EXT_texture_filter_anisotropic");t.texParameterf(R,Z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,r.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy}}}function ge(R,S){let Z=!1;R.__webglInit===void 0&&(R.__webglInit=!0,S.addEventListener("dispose",D));const oe=S.source;let de=f.get(oe);de===void 0&&(de={},f.set(oe,de));const se=w(S);if(se!==R.__cacheKey){de[se]===void 0&&(de[se]={texture:t.createTexture(),usedTimes:0},s.memory.textures++,Z=!0),de[se].usedTimes++;const Ne=de[R.__cacheKey];Ne!==void 0&&(de[R.__cacheKey].usedTimes--,Ne.usedTimes===0&&x(S)),R.__cacheKey=se,R.__webglTexture=de[se].texture}return Z}function Ee(R,S,Z){return Math.floor(Math.floor(R/Z)/S)}function Se(R,S,Z,oe){const se=R.updateRanges;if(se.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,S.width,S.height,Z,oe,S.data);else{se.sort((Pe,ue)=>Pe.start-ue.start);let Ne=0;for(let Pe=1;Pe<se.length;Pe++){const ue=se[Ne],re=se[Pe],Ae=ue.start+ue.count,Le=Ee(re.start,S.width,4),Qe=Ee(ue.start,S.width,4);re.start<=Ae+1&&Le===Qe&&Ee(re.start+re.count-1,S.width,4)===Le?ue.count=Math.max(ue.count,re.start+re.count-ue.start):(++Ne,se[Ne]=re)}se.length=Ne+1;const Ce=t.getParameter(t.UNPACK_ROW_LENGTH),$e=t.getParameter(t.UNPACK_SKIP_PIXELS),We=t.getParameter(t.UNPACK_SKIP_ROWS);t.pixelStorei(t.UNPACK_ROW_LENGTH,S.width);for(let Pe=0,ue=se.length;Pe<ue;Pe++){const re=se[Pe],Ae=Math.floor(re.start/4),Le=Math.ceil(re.count/4),Qe=Ae%S.width,ie=Math.floor(Ae/S.width),Fe=Le,Ue=1;t.pixelStorei(t.UNPACK_SKIP_PIXELS,Qe),t.pixelStorei(t.UNPACK_SKIP_ROWS,ie),n.texSubImage2D(t.TEXTURE_2D,0,Qe,ie,Fe,Ue,Z,oe,S.data)}R.clearUpdateRanges(),t.pixelStorei(t.UNPACK_ROW_LENGTH,Ce),t.pixelStorei(t.UNPACK_SKIP_PIXELS,$e),t.pixelStorei(t.UNPACK_SKIP_ROWS,We)}}function G(R,S,Z){let oe=t.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(oe=t.TEXTURE_2D_ARRAY),S.isData3DTexture&&(oe=t.TEXTURE_3D);const de=ge(R,S),se=S.source;n.bindTexture(oe,R.__webglTexture,t.TEXTURE0+Z);const Ne=i.get(se);if(se.version!==Ne.__version||de===!0){n.activeTexture(t.TEXTURE0+Z);const Ce=gt.getPrimaries(gt.workingColorSpace),$e=S.colorSpace===Rr?null:gt.getPrimaries(S.colorSpace),We=S.colorSpace===Rr||Ce===$e?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,S.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,We);let Pe=v(S.image,!1,r.maxTextureSize);Pe=j(S,Pe);const ue=o.convert(S.format,S.colorSpace),re=o.convert(S.type);let Ae=M(S.internalFormat,ue,re,S.colorSpace,S.isVideoTexture);ne(oe,S);let Le;const Qe=S.mipmaps,ie=S.isVideoTexture!==!0,Fe=Ne.__version===void 0||de===!0,Ue=se.dataReady,Be=P(S,Pe);if(S.isDepthTexture)Ae=_(S.format===fo,S.type),Fe&&(ie?n.texStorage2D(t.TEXTURE_2D,1,Ae,Pe.width,Pe.height):n.texImage2D(t.TEXTURE_2D,0,Ae,Pe.width,Pe.height,0,ue,re,null));else if(S.isDataTexture)if(Qe.length>0){ie&&Fe&&n.texStorage2D(t.TEXTURE_2D,Be,Ae,Qe[0].width,Qe[0].height);for(let De=0,Me=Qe.length;De<Me;De++)Le=Qe[De],ie?Ue&&n.texSubImage2D(t.TEXTURE_2D,De,0,0,Le.width,Le.height,ue,re,Le.data):n.texImage2D(t.TEXTURE_2D,De,Ae,Le.width,Le.height,0,ue,re,Le.data);S.generateMipmaps=!1}else ie?(Fe&&n.texStorage2D(t.TEXTURE_2D,Be,Ae,Pe.width,Pe.height),Ue&&Se(S,Pe,ue,re)):n.texImage2D(t.TEXTURE_2D,0,Ae,Pe.width,Pe.height,0,ue,re,Pe.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){ie&&Fe&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Be,Ae,Qe[0].width,Qe[0].height,Pe.depth);for(let De=0,Me=Qe.length;De<Me;De++)if(Le=Qe[De],S.format!==bn)if(ue!==null)if(ie){if(Ue)if(S.layerUpdates.size>0){const qe=Am(Le.width,Le.height,S.format,S.type);for(const ot of S.layerUpdates){const Lt=Le.data.subarray(ot*qe/Le.data.BYTES_PER_ELEMENT,(ot+1)*qe/Le.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,De,0,0,ot,Le.width,Le.height,1,ue,Lt)}S.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,De,0,0,0,Le.width,Le.height,Pe.depth,ue,Le.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,De,Ae,Le.width,Le.height,Pe.depth,0,Le.data,0,0);else st("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ie?Ue&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,De,0,0,0,Le.width,Le.height,Pe.depth,ue,re,Le.data):n.texImage3D(t.TEXTURE_2D_ARRAY,De,Ae,Le.width,Le.height,Pe.depth,0,ue,re,Le.data)}else{ie&&Fe&&n.texStorage2D(t.TEXTURE_2D,Be,Ae,Qe[0].width,Qe[0].height);for(let De=0,Me=Qe.length;De<Me;De++)Le=Qe[De],S.format!==bn?ue!==null?ie?Ue&&n.compressedTexSubImage2D(t.TEXTURE_2D,De,0,0,Le.width,Le.height,ue,Le.data):n.compressedTexImage2D(t.TEXTURE_2D,De,Ae,Le.width,Le.height,0,Le.data):st("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ie?Ue&&n.texSubImage2D(t.TEXTURE_2D,De,0,0,Le.width,Le.height,ue,re,Le.data):n.texImage2D(t.TEXTURE_2D,De,Ae,Le.width,Le.height,0,ue,re,Le.data)}else if(S.isDataArrayTexture)if(ie){if(Fe&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Be,Ae,Pe.width,Pe.height,Pe.depth),Ue)if(S.layerUpdates.size>0){const De=Am(Pe.width,Pe.height,S.format,S.type);for(const Me of S.layerUpdates){const qe=Pe.data.subarray(Me*De/Pe.data.BYTES_PER_ELEMENT,(Me+1)*De/Pe.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,Me,Pe.width,Pe.height,1,ue,re,qe)}S.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,Pe.width,Pe.height,Pe.depth,ue,re,Pe.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Ae,Pe.width,Pe.height,Pe.depth,0,ue,re,Pe.data);else if(S.isData3DTexture)ie?(Fe&&n.texStorage3D(t.TEXTURE_3D,Be,Ae,Pe.width,Pe.height,Pe.depth),Ue&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,Pe.width,Pe.height,Pe.depth,ue,re,Pe.data)):n.texImage3D(t.TEXTURE_3D,0,Ae,Pe.width,Pe.height,Pe.depth,0,ue,re,Pe.data);else if(S.isFramebufferTexture){if(Fe)if(ie)n.texStorage2D(t.TEXTURE_2D,Be,Ae,Pe.width,Pe.height);else{let De=Pe.width,Me=Pe.height;for(let qe=0;qe<Be;qe++)n.texImage2D(t.TEXTURE_2D,qe,Ae,De,Me,0,ue,re,null),De>>=1,Me>>=1}}else if(Qe.length>0){if(ie&&Fe){const De=ee(Qe[0]);n.texStorage2D(t.TEXTURE_2D,Be,Ae,De.width,De.height)}for(let De=0,Me=Qe.length;De<Me;De++)Le=Qe[De],ie?Ue&&n.texSubImage2D(t.TEXTURE_2D,De,0,0,ue,re,Le):n.texImage2D(t.TEXTURE_2D,De,Ae,ue,re,Le);S.generateMipmaps=!1}else if(ie){if(Fe){const De=ee(Pe);n.texStorage2D(t.TEXTURE_2D,Be,Ae,De.width,De.height)}Ue&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ue,re,Pe)}else n.texImage2D(t.TEXTURE_2D,0,Ae,ue,re,Pe);g(S)&&p(oe),Ne.__version=se.version,S.onUpdate&&S.onUpdate(S)}R.__version=S.version}function U(R,S,Z){if(S.image.length!==6)return;const oe=ge(R,S),de=S.source;n.bindTexture(t.TEXTURE_CUBE_MAP,R.__webglTexture,t.TEXTURE0+Z);const se=i.get(de);if(de.version!==se.__version||oe===!0){n.activeTexture(t.TEXTURE0+Z);const Ne=gt.getPrimaries(gt.workingColorSpace),Ce=S.colorSpace===Rr?null:gt.getPrimaries(S.colorSpace),$e=S.colorSpace===Rr||Ne===Ce?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,S.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,$e);const We=S.isCompressedTexture||S.image[0].isCompressedTexture,Pe=S.image[0]&&S.image[0].isDataTexture,ue=[];for(let Me=0;Me<6;Me++)!We&&!Pe?ue[Me]=v(S.image[Me],!0,r.maxCubemapSize):ue[Me]=Pe?S.image[Me].image:S.image[Me],ue[Me]=j(S,ue[Me]);const re=ue[0],Ae=o.convert(S.format,S.colorSpace),Le=o.convert(S.type),Qe=M(S.internalFormat,Ae,Le,S.colorSpace),ie=S.isVideoTexture!==!0,Fe=se.__version===void 0||oe===!0,Ue=de.dataReady;let Be=P(S,re);ne(t.TEXTURE_CUBE_MAP,S);let De;if(We){ie&&Fe&&n.texStorage2D(t.TEXTURE_CUBE_MAP,Be,Qe,re.width,re.height);for(let Me=0;Me<6;Me++){De=ue[Me].mipmaps;for(let qe=0;qe<De.length;qe++){const ot=De[qe];S.format!==bn?Ae!==null?ie?Ue&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Me,qe,0,0,ot.width,ot.height,Ae,ot.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Me,qe,Qe,ot.width,ot.height,0,ot.data):st("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ie?Ue&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Me,qe,0,0,ot.width,ot.height,Ae,Le,ot.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Me,qe,Qe,ot.width,ot.height,0,Ae,Le,ot.data)}}}else{if(De=S.mipmaps,ie&&Fe){De.length>0&&Be++;const Me=ee(ue[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,Be,Qe,Me.width,Me.height)}for(let Me=0;Me<6;Me++)if(Pe){ie?Ue&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,0,0,ue[Me].width,ue[Me].height,Ae,Le,ue[Me].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,Qe,ue[Me].width,ue[Me].height,0,Ae,Le,ue[Me].data);for(let qe=0;qe<De.length;qe++){const Lt=De[qe].image[Me].image;ie?Ue&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Me,qe+1,0,0,Lt.width,Lt.height,Ae,Le,Lt.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Me,qe+1,Qe,Lt.width,Lt.height,0,Ae,Le,Lt.data)}}else{ie?Ue&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,0,0,Ae,Le,ue[Me]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,Qe,Ae,Le,ue[Me]);for(let qe=0;qe<De.length;qe++){const ot=De[qe];ie?Ue&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Me,qe+1,0,0,Ae,Le,ot.image[Me]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Me,qe+1,Qe,Ae,Le,ot.image[Me])}}}g(S)&&p(t.TEXTURE_CUBE_MAP),se.__version=de.version,S.onUpdate&&S.onUpdate(S)}R.__version=S.version}function Y(R,S,Z,oe,de,se){const Ne=o.convert(Z.format,Z.colorSpace),Ce=o.convert(Z.type),$e=M(Z.internalFormat,Ne,Ce,Z.colorSpace),We=i.get(S),Pe=i.get(Z);if(Pe.__renderTarget=S,!We.__hasExternalTextures){const ue=Math.max(1,S.width>>se),re=Math.max(1,S.height>>se);de===t.TEXTURE_3D||de===t.TEXTURE_2D_ARRAY?n.texImage3D(de,se,$e,ue,re,S.depth,0,Ne,Ce,null):n.texImage2D(de,se,$e,ue,re,0,Ne,Ce,null)}n.bindFramebuffer(t.FRAMEBUFFER,R),ae(S)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,oe,de,Pe.__webglTexture,0,C(S)):(de===t.TEXTURE_2D||de>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&de<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,oe,de,Pe.__webglTexture,se),n.bindFramebuffer(t.FRAMEBUFFER,null)}function he(R,S,Z){if(t.bindRenderbuffer(t.RENDERBUFFER,R),S.depthBuffer){const oe=S.depthTexture,de=oe&&oe.isDepthTexture?oe.type:null,se=_(S.stencilBuffer,de),Ne=S.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;ae(S)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,C(S),se,S.width,S.height):Z?t.renderbufferStorageMultisample(t.RENDERBUFFER,C(S),se,S.width,S.height):t.renderbufferStorage(t.RENDERBUFFER,se,S.width,S.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,Ne,t.RENDERBUFFER,R)}else{const oe=S.textures;for(let de=0;de<oe.length;de++){const se=oe[de],Ne=o.convert(se.format,se.colorSpace),Ce=o.convert(se.type),$e=M(se.internalFormat,Ne,Ce,se.colorSpace);ae(S)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,C(S),$e,S.width,S.height):Z?t.renderbufferStorageMultisample(t.RENDERBUFFER,C(S),$e,S.width,S.height):t.renderbufferStorage(t.RENDERBUFFER,$e,S.width,S.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function xe(R,S,Z){const oe=S.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(t.FRAMEBUFFER,R),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const de=i.get(S.depthTexture);if(de.__renderTarget=S,(!de.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),oe){if(de.__webglInit===void 0&&(de.__webglInit=!0,S.depthTexture.addEventListener("dispose",D)),de.__webglTexture===void 0){de.__webglTexture=t.createTexture(),n.bindTexture(t.TEXTURE_CUBE_MAP,de.__webglTexture),ne(t.TEXTURE_CUBE_MAP,S.depthTexture);const We=o.convert(S.depthTexture.format),Pe=o.convert(S.depthTexture.type);let ue;S.depthTexture.format===nr?ue=t.DEPTH_COMPONENT24:S.depthTexture.format===fo&&(ue=t.DEPTH24_STENCIL8);for(let re=0;re<6;re++)t.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,ue,S.width,S.height,0,We,Pe,null)}}else k(S.depthTexture,0);const se=de.__webglTexture,Ne=C(S),Ce=oe?t.TEXTURE_CUBE_MAP_POSITIVE_X+Z:t.TEXTURE_2D,$e=S.depthTexture.format===fo?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(S.depthTexture.format===nr)ae(S)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,$e,Ce,se,0,Ne):t.framebufferTexture2D(t.FRAMEBUFFER,$e,Ce,se,0);else if(S.depthTexture.format===fo)ae(S)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,$e,Ce,se,0,Ne):t.framebufferTexture2D(t.FRAMEBUFFER,$e,Ce,se,0);else throw new Error("Unknown depthTexture format")}function we(R){const S=i.get(R),Z=R.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==R.depthTexture){const oe=R.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),oe){const de=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,oe.removeEventListener("dispose",de)};oe.addEventListener("dispose",de),S.__depthDisposeCallback=de}S.__boundDepthTexture=oe}if(R.depthTexture&&!S.__autoAllocateDepthBuffer)if(Z)for(let oe=0;oe<6;oe++)xe(S.__webglFramebuffer[oe],R,oe);else{const oe=R.texture.mipmaps;oe&&oe.length>0?xe(S.__webglFramebuffer[0],R,0):xe(S.__webglFramebuffer,R,0)}else if(Z){S.__webglDepthbuffer=[];for(let oe=0;oe<6;oe++)if(n.bindFramebuffer(t.FRAMEBUFFER,S.__webglFramebuffer[oe]),S.__webglDepthbuffer[oe]===void 0)S.__webglDepthbuffer[oe]=t.createRenderbuffer(),he(S.__webglDepthbuffer[oe],R,!1);else{const de=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,se=S.__webglDepthbuffer[oe];t.bindRenderbuffer(t.RENDERBUFFER,se),t.framebufferRenderbuffer(t.FRAMEBUFFER,de,t.RENDERBUFFER,se)}}else{const oe=R.texture.mipmaps;if(oe&&oe.length>0?n.bindFramebuffer(t.FRAMEBUFFER,S.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=t.createRenderbuffer(),he(S.__webglDepthbuffer,R,!1);else{const de=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,se=S.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,se),t.framebufferRenderbuffer(t.FRAMEBUFFER,de,t.RENDERBUFFER,se)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function H(R,S,Z){const oe=i.get(R);S!==void 0&&Y(oe.__webglFramebuffer,R,R.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),Z!==void 0&&we(R)}function X(R){const S=R.texture,Z=i.get(R),oe=i.get(S);R.addEventListener("dispose",B);const de=R.textures,se=R.isWebGLCubeRenderTarget===!0,Ne=de.length>1;if(Ne||(oe.__webglTexture===void 0&&(oe.__webglTexture=t.createTexture()),oe.__version=S.version,s.memory.textures++),se){Z.__webglFramebuffer=[];for(let Ce=0;Ce<6;Ce++)if(S.mipmaps&&S.mipmaps.length>0){Z.__webglFramebuffer[Ce]=[];for(let $e=0;$e<S.mipmaps.length;$e++)Z.__webglFramebuffer[Ce][$e]=t.createFramebuffer()}else Z.__webglFramebuffer[Ce]=t.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){Z.__webglFramebuffer=[];for(let Ce=0;Ce<S.mipmaps.length;Ce++)Z.__webglFramebuffer[Ce]=t.createFramebuffer()}else Z.__webglFramebuffer=t.createFramebuffer();if(Ne)for(let Ce=0,$e=de.length;Ce<$e;Ce++){const We=i.get(de[Ce]);We.__webglTexture===void 0&&(We.__webglTexture=t.createTexture(),s.memory.textures++)}if(R.samples>0&&ae(R)===!1){Z.__webglMultisampledFramebuffer=t.createFramebuffer(),Z.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,Z.__webglMultisampledFramebuffer);for(let Ce=0;Ce<de.length;Ce++){const $e=de[Ce];Z.__webglColorRenderbuffer[Ce]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,Z.__webglColorRenderbuffer[Ce]);const We=o.convert($e.format,$e.colorSpace),Pe=o.convert($e.type),ue=M($e.internalFormat,We,Pe,$e.colorSpace,R.isXRRenderTarget===!0),re=C(R);t.renderbufferStorageMultisample(t.RENDERBUFFER,re,ue,R.width,R.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ce,t.RENDERBUFFER,Z.__webglColorRenderbuffer[Ce])}t.bindRenderbuffer(t.RENDERBUFFER,null),R.depthBuffer&&(Z.__webglDepthRenderbuffer=t.createRenderbuffer(),he(Z.__webglDepthRenderbuffer,R,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(se){n.bindTexture(t.TEXTURE_CUBE_MAP,oe.__webglTexture),ne(t.TEXTURE_CUBE_MAP,S);for(let Ce=0;Ce<6;Ce++)if(S.mipmaps&&S.mipmaps.length>0)for(let $e=0;$e<S.mipmaps.length;$e++)Y(Z.__webglFramebuffer[Ce][$e],R,S,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,$e);else Y(Z.__webglFramebuffer[Ce],R,S,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,0);g(S)&&p(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Ne){for(let Ce=0,$e=de.length;Ce<$e;Ce++){const We=de[Ce],Pe=i.get(We);let ue=t.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ue=R.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(ue,Pe.__webglTexture),ne(ue,We),Y(Z.__webglFramebuffer,R,We,t.COLOR_ATTACHMENT0+Ce,ue,0),g(We)&&p(ue)}n.unbindTexture()}else{let Ce=t.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(Ce=R.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(Ce,oe.__webglTexture),ne(Ce,S),S.mipmaps&&S.mipmaps.length>0)for(let $e=0;$e<S.mipmaps.length;$e++)Y(Z.__webglFramebuffer[$e],R,S,t.COLOR_ATTACHMENT0,Ce,$e);else Y(Z.__webglFramebuffer,R,S,t.COLOR_ATTACHMENT0,Ce,0);g(S)&&p(Ce),n.unbindTexture()}R.depthBuffer&&we(R)}function L(R){const S=R.textures;for(let Z=0,oe=S.length;Z<oe;Z++){const de=S[Z];if(g(de)){const se=b(R),Ne=i.get(de).__webglTexture;n.bindTexture(se,Ne),p(se),n.unbindTexture()}}}const F=[],z=[];function J(R){if(R.samples>0){if(ae(R)===!1){const S=R.textures,Z=R.width,oe=R.height;let de=t.COLOR_BUFFER_BIT;const se=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Ne=i.get(R),Ce=S.length>1;if(Ce)for(let We=0;We<S.length;We++)n.bindFramebuffer(t.FRAMEBUFFER,Ne.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+We,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Ne.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+We,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Ne.__webglMultisampledFramebuffer);const $e=R.texture.mipmaps;$e&&$e.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Ne.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Ne.__webglFramebuffer);for(let We=0;We<S.length;We++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(de|=t.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(de|=t.STENCIL_BUFFER_BIT)),Ce){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Ne.__webglColorRenderbuffer[We]);const Pe=i.get(S[We]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Pe,0)}t.blitFramebuffer(0,0,Z,oe,0,0,Z,oe,de,t.NEAREST),l===!0&&(F.length=0,z.length=0,F.push(t.COLOR_ATTACHMENT0+We),R.depthBuffer&&R.resolveDepthBuffer===!1&&(F.push(se),z.push(se),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,z)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,F))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),Ce)for(let We=0;We<S.length;We++){n.bindFramebuffer(t.FRAMEBUFFER,Ne.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+We,t.RENDERBUFFER,Ne.__webglColorRenderbuffer[We]);const Pe=i.get(S[We]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Ne.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+We,t.TEXTURE_2D,Pe,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Ne.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const S=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[S])}}}function C(R){return Math.min(r.maxSamples,R.samples)}function ae(R){const S=i.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function W(R){const S=s.render.frame;c.get(R)!==S&&(c.set(R,S),R.update())}function j(R,S){const Z=R.colorSpace,oe=R.format,de=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||Z!==zr&&Z!==Rr&&(gt.getTransfer(Z)===Mt?(oe!==bn||de!==yn)&&st("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):_t("WebGLTextures: Unsupported texture color space:",Z)),S}function ee(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(u.width=R.naturalWidth||R.width,u.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(u.width=R.displayWidth,u.height=R.displayHeight):(u.width=R.width,u.height=R.height),u}this.allocateTextureUnit=q,this.resetTextureUnits=I,this.setTexture2D=k,this.setTexture2DArray=A,this.setTexture3D=N,this.setTextureCube=O,this.rebindTextures=H,this.setupRenderTarget=X,this.updateRenderTargetMipmap=L,this.updateMultisampleRenderTarget=J,this.setupDepthRenderbuffer=we,this.setupFrameBufferTexture=Y,this.useMultisampledRTT=ae,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function iC(t,e){function n(i,r=Rr){let o;const s=gt.getTransfer(r);if(i===yn)return t.UNSIGNED_BYTE;if(i===Th)return t.UNSIGNED_SHORT_4_4_4_4;if(i===Ah)return t.UNSIGNED_SHORT_5_5_5_1;if(i===Z0)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===j0)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===q0)return t.BYTE;if(i===K0)return t.SHORT;if(i===ca)return t.UNSIGNED_SHORT;if(i===Eh)return t.INT;if(i===bi)return t.UNSIGNED_INT;if(i===pi)return t.FLOAT;if(i===tr)return t.HALF_FLOAT;if(i===J0)return t.ALPHA;if(i===Q0)return t.RGB;if(i===bn)return t.RGBA;if(i===nr)return t.DEPTH_COMPONENT;if(i===fo)return t.DEPTH_STENCIL;if(i===e_)return t.RED;if(i===Ch)return t.RED_INTEGER;if(i===cs)return t.RG;if(i===Rh)return t.RG_INTEGER;if(i===Ih)return t.RGBA_INTEGER;if(i===Ul||i===Ol||i===Bl||i===kl)if(s===Mt)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(i===Ul)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ol)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Bl)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===kl)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(i===Ul)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ol)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Bl)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===kl)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Zd||i===jd||i===Jd||i===Qd)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(i===Zd)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===jd)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Jd)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Qd)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===ef||i===tf||i===nf||i===rf||i===of||i===sf||i===af)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(i===ef||i===tf)return s===Mt?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(i===nf)return s===Mt?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC;if(i===rf)return o.COMPRESSED_R11_EAC;if(i===of)return o.COMPRESSED_SIGNED_R11_EAC;if(i===sf)return o.COMPRESSED_RG11_EAC;if(i===af)return o.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===lf||i===uf||i===cf||i===df||i===ff||i===hf||i===pf||i===mf||i===gf||i===vf||i===_f||i===yf||i===xf||i===bf)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(i===lf)return s===Mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===uf)return s===Mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===cf)return s===Mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===df)return s===Mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===ff)return s===Mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===hf)return s===Mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===pf)return s===Mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===mf)return s===Mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===gf)return s===Mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===vf)return s===Mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===_f)return s===Mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===yf)return s===Mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===xf)return s===Mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===bf)return s===Mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Sf||i===Mf||i===wf)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(i===Sf)return s===Mt?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Mf)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===wf)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Ef||i===Tf||i===Af||i===Cf)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(i===Ef)return o.COMPRESSED_RED_RGTC1_EXT;if(i===Tf)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Af)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Cf)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===da?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const rC=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,oC=`
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

}`;class sC{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const i=new c_(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new Qn({vertexShader:rC,fragmentShader:oC,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Si(new La(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class aC extends _s{constructor(e,n){super();const i=this;let r=null,o=1,s=null,a="local-floor",l=1,u=null,c=null,d=null,f=null,h=null,m=null;const v=typeof XRWebGLBinding<"u",g=new sC,p={},b=n.getContextAttributes();let M=null,_=null;const P=[],D=[],B=new Tt;let y=null;const x=new Gn;x.viewport=new zt;const T=new Gn;T.viewport=new zt;const E=[x,T],I=new yM;let q=null,w=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let U=P[G];return U===void 0&&(U=new Bc,P[G]=U),U.getTargetRaySpace()},this.getControllerGrip=function(G){let U=P[G];return U===void 0&&(U=new Bc,P[G]=U),U.getGripSpace()},this.getHand=function(G){let U=P[G];return U===void 0&&(U=new Bc,P[G]=U),U.getHandSpace()};function k(G){const U=D.indexOf(G.inputSource);if(U===-1)return;const Y=P[U];Y!==void 0&&(Y.update(G.inputSource,G.frame,u||s),Y.dispatchEvent({type:G.type,data:G.inputSource}))}function A(){r.removeEventListener("select",k),r.removeEventListener("selectstart",k),r.removeEventListener("selectend",k),r.removeEventListener("squeeze",k),r.removeEventListener("squeezestart",k),r.removeEventListener("squeezeend",k),r.removeEventListener("end",A),r.removeEventListener("inputsourceschange",N);for(let G=0;G<P.length;G++){const U=D[G];U!==null&&(D[G]=null,P[G].disconnect(U))}q=null,w=null,g.reset();for(const G in p)delete p[G];e.setRenderTarget(M),h=null,f=null,d=null,r=null,_=null,Se.stop(),i.isPresenting=!1,e.setPixelRatio(y),e.setSize(B.width,B.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){o=G,i.isPresenting===!0&&st("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){a=G,i.isPresenting===!0&&st("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||s},this.setReferenceSpace=function(G){u=G},this.getBaseLayer=function(){return f!==null?f:h},this.getBinding=function(){return d===null&&v&&(d=new XRWebGLBinding(r,n)),d},this.getFrame=function(){return m},this.getSession=function(){return r},this.setSession=async function(G){if(r=G,r!==null){if(M=e.getRenderTarget(),r.addEventListener("select",k),r.addEventListener("selectstart",k),r.addEventListener("selectend",k),r.addEventListener("squeeze",k),r.addEventListener("squeezestart",k),r.addEventListener("squeezeend",k),r.addEventListener("end",A),r.addEventListener("inputsourceschange",N),b.xrCompatible!==!0&&await n.makeXRCompatible(),y=e.getPixelRatio(),e.getSize(B),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let Y=null,he=null,xe=null;b.depth&&(xe=b.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,Y=b.stencil?fo:nr,he=b.stencil?da:bi);const we={colorFormat:n.RGBA8,depthFormat:xe,scaleFactor:o};d=this.getBinding(),f=d.createProjectionLayer(we),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),_=new Mn(f.textureWidth,f.textureHeight,{format:bn,type:yn,depthTexture:new fa(f.textureWidth,f.textureHeight,he,void 0,void 0,void 0,void 0,void 0,void 0,Y),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const Y={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:o};h=new XRWebGLLayer(r,n,Y),r.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),_=new Mn(h.framebufferWidth,h.framebufferHeight,{format:bn,type:yn,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),u=null,s=await r.requestReferenceSpace(a),Se.setContext(r),Se.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function N(G){for(let U=0;U<G.removed.length;U++){const Y=G.removed[U],he=D.indexOf(Y);he>=0&&(D[he]=null,P[he].disconnect(Y))}for(let U=0;U<G.added.length;U++){const Y=G.added[U];let he=D.indexOf(Y);if(he===-1){for(let we=0;we<P.length;we++)if(we>=D.length){D.push(Y),he=we;break}else if(D[we]===null){D[we]=Y,he=we;break}if(he===-1)break}const xe=P[he];xe&&xe.connect(Y)}}const O=new ye,$=new ye;function K(G,U,Y){O.setFromMatrixPosition(U.matrixWorld),$.setFromMatrixPosition(Y.matrixWorld);const he=O.distanceTo($),xe=U.projectionMatrix.elements,we=Y.projectionMatrix.elements,H=xe[14]/(xe[10]-1),X=xe[14]/(xe[10]+1),L=(xe[9]+1)/xe[5],F=(xe[9]-1)/xe[5],z=(xe[8]-1)/xe[0],J=(we[8]+1)/we[0],C=H*z,ae=H*J,W=he/(-z+J),j=W*-z;if(U.matrixWorld.decompose(G.position,G.quaternion,G.scale),G.translateX(j),G.translateZ(W),G.matrixWorld.compose(G.position,G.quaternion,G.scale),G.matrixWorldInverse.copy(G.matrixWorld).invert(),xe[10]===-1)G.projectionMatrix.copy(U.projectionMatrix),G.projectionMatrixInverse.copy(U.projectionMatrixInverse);else{const ee=H+W,R=X+W,S=C-j,Z=ae+(he-j),oe=L*X/R*ee,de=F*X/R*ee;G.projectionMatrix.makePerspective(S,Z,oe,de,ee,R),G.projectionMatrixInverse.copy(G.projectionMatrix).invert()}}function te(G,U){U===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices(U.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(r===null)return;let U=G.near,Y=G.far;g.texture!==null&&(g.depthNear>0&&(U=g.depthNear),g.depthFar>0&&(Y=g.depthFar)),I.near=T.near=x.near=U,I.far=T.far=x.far=Y,(q!==I.near||w!==I.far)&&(r.updateRenderState({depthNear:I.near,depthFar:I.far}),q=I.near,w=I.far),I.layers.mask=G.layers.mask|6,x.layers.mask=I.layers.mask&-5,T.layers.mask=I.layers.mask&-3;const he=G.parent,xe=I.cameras;te(I,he);for(let we=0;we<xe.length;we++)te(xe[we],he);xe.length===2?K(I,x,T):I.projectionMatrix.copy(x.projectionMatrix),ne(G,I,he)};function ne(G,U,Y){Y===null?G.matrix.copy(U.matrixWorld):(G.matrix.copy(Y.matrixWorld),G.matrix.invert(),G.matrix.multiply(U.matrixWorld)),G.matrix.decompose(G.position,G.quaternion,G.scale),G.updateMatrixWorld(!0),G.projectionMatrix.copy(U.projectionMatrix),G.projectionMatrixInverse.copy(U.projectionMatrixInverse),G.isPerspectiveCamera&&(G.fov=Rf*2*Math.atan(1/G.projectionMatrix.elements[5]),G.zoom=1)}this.getCamera=function(){return I},this.getFoveation=function(){if(!(f===null&&h===null))return l},this.setFoveation=function(G){l=G,f!==null&&(f.fixedFoveation=G),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=G)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(I)},this.getCameraTexture=function(G){return p[G]};let ge=null;function Ee(G,U){if(c=U.getViewerPose(u||s),m=U,c!==null){const Y=c.views;h!==null&&(e.setRenderTargetFramebuffer(_,h.framebuffer),e.setRenderTarget(_));let he=!1;Y.length!==I.cameras.length&&(I.cameras.length=0,he=!0);for(let X=0;X<Y.length;X++){const L=Y[X];let F=null;if(h!==null)F=h.getViewport(L);else{const J=d.getViewSubImage(f,L);F=J.viewport,X===0&&(e.setRenderTargetTextures(_,J.colorTexture,J.depthStencilTexture),e.setRenderTarget(_))}let z=E[X];z===void 0&&(z=new Gn,z.layers.enable(X),z.viewport=new zt,E[X]=z),z.matrix.fromArray(L.transform.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale),z.projectionMatrix.fromArray(L.projectionMatrix),z.projectionMatrixInverse.copy(z.projectionMatrix).invert(),z.viewport.set(F.x,F.y,F.width,F.height),X===0&&(I.matrix.copy(z.matrix),I.matrix.decompose(I.position,I.quaternion,I.scale)),he===!0&&I.cameras.push(z)}const xe=r.enabledFeatures;if(xe&&xe.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&v){d=i.getBinding();const X=d.getDepthInformation(Y[0]);X&&X.isValid&&X.texture&&g.init(X,r.renderState)}if(xe&&xe.includes("camera-access")&&v){e.state.unbindTexture(),d=i.getBinding();for(let X=0;X<Y.length;X++){const L=Y[X].camera;if(L){let F=p[L];F||(F=new c_,p[L]=F);const z=d.getCameraImage(L);F.sourceTexture=z}}}}for(let Y=0;Y<P.length;Y++){const he=D[Y],xe=P[Y];he!==null&&xe!==void 0&&xe.update(he,U,u||s)}ge&&ge(G,U),U.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:U}),m=null}const Se=new h_;Se.setAnimationLoop(Ee),this.setAnimationLoop=function(G){ge=G},this.dispose=function(){}}}const to=new ir,lC=new Wt;function uC(t,e){function n(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function i(g,p){p.color.getRGB(g.fogColor.value,d_(t)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function r(g,p,b,M,_){p.isMeshBasicMaterial?o(g,p):p.isMeshLambertMaterial?(o(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(o(g,p),d(g,p)):p.isMeshPhongMaterial?(o(g,p),c(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(o(g,p),f(g,p),p.isMeshPhysicalMaterial&&h(g,p,_)):p.isMeshMatcapMaterial?(o(g,p),m(g,p)):p.isMeshDepthMaterial?o(g,p):p.isMeshDistanceMaterial?(o(g,p),v(g,p)):p.isMeshNormalMaterial?o(g,p):p.isLineBasicMaterial?(s(g,p),p.isLineDashedMaterial&&a(g,p)):p.isPointsMaterial?l(g,p,b,M):p.isSpriteMaterial?u(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function o(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,n(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,n(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,n(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===Tn&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,n(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===Tn&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,n(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,n(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,n(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);const b=e.get(p),M=b.envMap,_=b.envMapRotation;M&&(g.envMap.value=M,to.copy(_),to.x*=-1,to.y*=-1,to.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(to.y*=-1,to.z*=-1),g.envMapRotation.value.setFromMatrix4(lC.makeRotationFromEuler(to)),g.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,n(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,n(p.aoMap,g.aoMapTransform))}function s(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,n(p.map,g.mapTransform))}function a(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,b,M){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*b,g.scale.value=M*.5,p.map&&(g.map.value=p.map,n(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,n(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function u(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,n(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,n(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function d(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function f(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,n(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,n(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function h(g,p,b){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,n(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,n(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,n(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,n(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,n(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Tn&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,n(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,n(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=b.texture,g.transmissionSamplerSize.value.set(b.width,b.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,n(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,n(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,n(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,n(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,n(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function v(g,p){const b=e.get(p).light;g.referencePosition.value.setFromMatrixPosition(b.matrixWorld),g.nearDistance.value=b.shadow.camera.near,g.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function cC(t,e,n,i){let r={},o={},s=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,M){const _=M.program;i.uniformBlockBinding(b,_)}function u(b,M){let _=r[b.id];_===void 0&&(m(b),_=c(b),r[b.id]=_,b.addEventListener("dispose",g));const P=M.program;i.updateUBOMapping(b,P);const D=e.render.frame;o[b.id]!==D&&(f(b),o[b.id]=D)}function c(b){const M=d();b.__bindingPointIndex=M;const _=t.createBuffer(),P=b.__size,D=b.usage;return t.bindBuffer(t.UNIFORM_BUFFER,_),t.bufferData(t.UNIFORM_BUFFER,P,D),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,M,_),_}function d(){for(let b=0;b<a;b++)if(s.indexOf(b)===-1)return s.push(b),b;return _t("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(b){const M=r[b.id],_=b.uniforms,P=b.__cache;t.bindBuffer(t.UNIFORM_BUFFER,M);for(let D=0,B=_.length;D<B;D++){const y=Array.isArray(_[D])?_[D]:[_[D]];for(let x=0,T=y.length;x<T;x++){const E=y[x];if(h(E,D,x,P)===!0){const I=E.__offset,q=Array.isArray(E.value)?E.value:[E.value];let w=0;for(let k=0;k<q.length;k++){const A=q[k],N=v(A);typeof A=="number"||typeof A=="boolean"?(E.__data[0]=A,t.bufferSubData(t.UNIFORM_BUFFER,I+w,E.__data)):A.isMatrix3?(E.__data[0]=A.elements[0],E.__data[1]=A.elements[1],E.__data[2]=A.elements[2],E.__data[3]=0,E.__data[4]=A.elements[3],E.__data[5]=A.elements[4],E.__data[6]=A.elements[5],E.__data[7]=0,E.__data[8]=A.elements[6],E.__data[9]=A.elements[7],E.__data[10]=A.elements[8],E.__data[11]=0):(A.toArray(E.__data,w),w+=N.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,I,E.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function h(b,M,_,P){const D=b.value,B=M+"_"+_;if(P[B]===void 0)return typeof D=="number"||typeof D=="boolean"?P[B]=D:P[B]=D.clone(),!0;{const y=P[B];if(typeof D=="number"||typeof D=="boolean"){if(y!==D)return P[B]=D,!0}else if(y.equals(D)===!1)return y.copy(D),!0}return!1}function m(b){const M=b.uniforms;let _=0;const P=16;for(let B=0,y=M.length;B<y;B++){const x=Array.isArray(M[B])?M[B]:[M[B]];for(let T=0,E=x.length;T<E;T++){const I=x[T],q=Array.isArray(I.value)?I.value:[I.value];for(let w=0,k=q.length;w<k;w++){const A=q[w],N=v(A),O=_%P,$=O%N.boundary,K=O+$;_+=$,K!==0&&P-K<N.storage&&(_+=P-K),I.__data=new Float32Array(N.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=_,_+=N.storage}}}const D=_%P;return D>0&&(_+=P-D),b.__size=_,b.__cache={},this}function v(b){const M={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(M.boundary=4,M.storage=4):b.isVector2?(M.boundary=8,M.storage=8):b.isVector3||b.isColor?(M.boundary=16,M.storage=12):b.isVector4?(M.boundary=16,M.storage=16):b.isMatrix3?(M.boundary=48,M.storage=48):b.isMatrix4?(M.boundary=64,M.storage=64):b.isTexture?st("WebGLRenderer: Texture samplers can not be part of an uniforms group."):st("WebGLRenderer: Unsupported uniform value type.",b),M}function g(b){const M=b.target;M.removeEventListener("dispose",g);const _=s.indexOf(M.__bindingPointIndex);s.splice(_,1),t.deleteBuffer(r[M.id]),delete r[M.id],delete o[M.id]}function p(){for(const b in r)t.deleteBuffer(r[b]);s=[],r={},o={}}return{bind:l,update:u,dispose:p}}const dC=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let oi=null;function fC(){return oi===null&&(oi=new oM(dC,16,16,cs,tr),oi.name="DFG_LUT",oi.minFilter=Rt,oi.magFilter=Rt,oi.wrapS=Hi,oi.wrapT=Hi,oi.generateMipmaps=!1,oi.needsUpdate=!0),oi}class hC{constructor(e={}){const{canvas:n=FS(),context:i=null,depth:r=!0,stencil:o=!1,alpha:s=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:f=!1,outputBufferType:h=yn}=e;this.isWebGLRenderer=!0;let m;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=i.getContextAttributes().alpha}else m=s;const v=h,g=new Set([Ih,Rh,Ch]),p=new Set([yn,bi,ca,da,Th,Ah]),b=new Uint32Array(4),M=new Int32Array(4);let _=null,P=null;const D=[],B=[];let y=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=vi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const x=this;let T=!1;this._outputColorSpace=On;let E=0,I=0,q=null,w=-1,k=null;const A=new zt,N=new zt;let O=null;const $=new Et(0);let K=0,te=n.width,ne=n.height,ge=1,Ee=null,Se=null;const G=new zt(0,0,te,ne),U=new zt(0,0,te,ne);let Y=!1;const he=new l_;let xe=!1,we=!1;const H=new Wt,X=new ye,L=new zt,F={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let z=!1;function J(){return q===null?ge:1}let C=i;function ae(V,le){return n.getContext(V,le)}try{const V={alpha:!0,depth:r,stencil:o,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:c,failIfMajorPerformanceCaveat:d};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${wh}`),n.addEventListener("webglcontextlost",qe,!1),n.addEventListener("webglcontextrestored",ot,!1),n.addEventListener("webglcontextcreationerror",Lt,!1),C===null){const le="webgl2";if(C=ae(le,V),C===null)throw ae(le)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(V){throw _t("WebGLRenderer: "+V.message),V}let W,j,ee,R,S,Z,oe,de,se,Ne,Ce,$e,We,Pe,ue,re,Ae,Le,Qe,ie,Fe,Ue,Be;function De(){W=new hT(C),W.init(),Fe=new iC(C,W),j=new oT(C,W,e,Fe),ee=new tC(C,W),j.reversedDepthBuffer&&f&&ee.buffers.depth.setReversed(!0),R=new gT(C),S=new VA,Z=new nC(C,W,ee,S,j,Fe,R),oe=new fT(x),de=new bM(C),Ue=new iT(C,de),se=new pT(C,de,R,Ue),Ne=new _T(C,se,de,Ue,R),Le=new vT(C,j,Z),ue=new sT(S),Ce=new zA(x,oe,W,j,Ue,ue),$e=new uC(x,S),We=new HA,Pe=new KA(W),Ae=new nT(x,oe,ee,Ne,m,l),re=new eC(x,Ne,j),Be=new cC(C,R,j,ee),Qe=new rT(C,W,R),ie=new mT(C,W,R),R.programs=Ce.programs,x.capabilities=j,x.extensions=W,x.properties=S,x.renderLists=We,x.shadowMap=re,x.state=ee,x.info=R}De(),v!==yn&&(y=new xT(v,n.width,n.height,r,o));const Me=new aC(x,C);this.xr=Me,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){const V=W.get("WEBGL_lose_context");V&&V.loseContext()},this.forceContextRestore=function(){const V=W.get("WEBGL_lose_context");V&&V.restoreContext()},this.getPixelRatio=function(){return ge},this.setPixelRatio=function(V){V!==void 0&&(ge=V,this.setSize(te,ne,!1))},this.getSize=function(V){return V.set(te,ne)},this.setSize=function(V,le,be=!0){if(Me.isPresenting){st("WebGLRenderer: Can't change size while VR device is presenting.");return}te=V,ne=le,n.width=Math.floor(V*ge),n.height=Math.floor(le*ge),be===!0&&(n.style.width=V+"px",n.style.height=le+"px"),y!==null&&y.setSize(n.width,n.height),this.setViewport(0,0,V,le)},this.getDrawingBufferSize=function(V){return V.set(te*ge,ne*ge).floor()},this.setDrawingBufferSize=function(V,le,be){te=V,ne=le,ge=be,n.width=Math.floor(V*be),n.height=Math.floor(le*be),this.setViewport(0,0,V,le)},this.setEffects=function(V){if(v===yn){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(V){for(let le=0;le<V.length;le++)if(V[le].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}y.setEffects(V||[])},this.getCurrentViewport=function(V){return V.copy(A)},this.getViewport=function(V){return V.copy(G)},this.setViewport=function(V,le,be,ve){V.isVector4?G.set(V.x,V.y,V.z,V.w):G.set(V,le,be,ve),ee.viewport(A.copy(G).multiplyScalar(ge).round())},this.getScissor=function(V){return V.copy(U)},this.setScissor=function(V,le,be,ve){V.isVector4?U.set(V.x,V.y,V.z,V.w):U.set(V,le,be,ve),ee.scissor(N.copy(U).multiplyScalar(ge).round())},this.getScissorTest=function(){return Y},this.setScissorTest=function(V){ee.setScissorTest(Y=V)},this.setOpaqueSort=function(V){Ee=V},this.setTransparentSort=function(V){Se=V},this.getClearColor=function(V){return V.copy(Ae.getClearColor())},this.setClearColor=function(){Ae.setClearColor(...arguments)},this.getClearAlpha=function(){return Ae.getClearAlpha()},this.setClearAlpha=function(){Ae.setClearAlpha(...arguments)},this.clear=function(V=!0,le=!0,be=!0){let ve=0;if(V){let pe=!1;if(q!==null){const ze=q.texture.format;pe=g.has(ze)}if(pe){const ze=q.texture.type,Xe=p.has(ze),Ve=Ae.getClearColor(),Ke=Ae.getClearAlpha(),je=Ve.r,at=Ve.g,ft=Ve.b;Xe?(b[0]=je,b[1]=at,b[2]=ft,b[3]=Ke,C.clearBufferuiv(C.COLOR,0,b)):(M[0]=je,M[1]=at,M[2]=ft,M[3]=Ke,C.clearBufferiv(C.COLOR,0,M))}else ve|=C.COLOR_BUFFER_BIT}le&&(ve|=C.DEPTH_BUFFER_BIT),be&&(ve|=C.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ve!==0&&C.clear(ve)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",qe,!1),n.removeEventListener("webglcontextrestored",ot,!1),n.removeEventListener("webglcontextcreationerror",Lt,!1),Ae.dispose(),We.dispose(),Pe.dispose(),S.dispose(),oe.dispose(),Ne.dispose(),Ue.dispose(),Be.dispose(),Ce.dispose(),Me.dispose(),Me.removeEventListener("sessionstart",sp),Me.removeEventListener("sessionend",ap),Gr.stop()};function qe(V){V.preventDefault(),cm("WebGLRenderer: Context Lost."),T=!0}function ot(){cm("WebGLRenderer: Context Restored."),T=!1;const V=R.autoReset,le=re.enabled,be=re.autoUpdate,ve=re.needsUpdate,pe=re.type;De(),R.autoReset=V,re.enabled=le,re.autoUpdate=be,re.needsUpdate=ve,re.type=pe}function Lt(V){_t("WebGLRenderer: A WebGL context could not be created. Reason: ",V.statusMessage)}function St(V){const le=V.target;le.removeEventListener("dispose",St),Ti(le)}function Ti(V){Ai(V),S.remove(V)}function Ai(V){const le=S.get(V).programs;le!==void 0&&(le.forEach(function(be){Ce.releaseProgram(be)}),V.isShaderMaterial&&Ce.releaseShaderCache(V))}this.renderBufferDirect=function(V,le,be,ve,pe,ze){le===null&&(le=F);const Xe=pe.isMesh&&pe.matrixWorld.determinant()<0,Ve=fx(V,le,be,ve,pe);ee.setMaterial(ve,Xe);let Ke=be.index,je=1;if(ve.wireframe===!0){if(Ke=se.getWireframeAttribute(be),Ke===void 0)return;je=2}const at=be.drawRange,ft=be.attributes.position;let Je=at.start*je,At=(at.start+at.count)*je;ze!==null&&(Je=Math.max(Je,ze.start*je),At=Math.min(At,(ze.start+ze.count)*je)),Ke!==null?(Je=Math.max(Je,0),At=Math.min(At,Ke.count)):ft!=null&&(Je=Math.max(Je,0),At=Math.min(At,ft.count));const kt=At-Je;if(kt<0||kt===1/0)return;Ue.setup(pe,ve,Ve,be,Ke);let Bt,Ct=Qe;if(Ke!==null&&(Bt=de.get(Ke),Ct=ie,Ct.setIndex(Bt)),pe.isMesh)ve.wireframe===!0?(ee.setLineWidth(ve.wireframeLinewidth*J()),Ct.setMode(C.LINES)):Ct.setMode(C.TRIANGLES);else if(pe.isLine){let sn=ve.linewidth;sn===void 0&&(sn=1),ee.setLineWidth(sn*J()),pe.isLineSegments?Ct.setMode(C.LINES):pe.isLineLoop?Ct.setMode(C.LINE_LOOP):Ct.setMode(C.LINE_STRIP)}else pe.isPoints?Ct.setMode(C.POINTS):pe.isSprite&&Ct.setMode(C.TRIANGLES);if(pe.isBatchedMesh)if(pe._multiDrawInstances!==null)du("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Ct.renderMultiDrawInstances(pe._multiDrawStarts,pe._multiDrawCounts,pe._multiDrawCount,pe._multiDrawInstances);else if(W.get("WEBGL_multi_draw"))Ct.renderMultiDraw(pe._multiDrawStarts,pe._multiDrawCounts,pe._multiDrawCount);else{const sn=pe._multiDrawStarts,Ze=pe._multiDrawCounts,An=pe._multiDrawCount,vt=Ke?de.get(Ke).bytesPerElement:1,zn=S.get(ve).currentProgram.getUniforms();for(let ni=0;ni<An;ni++)zn.setValue(C,"_gl_DrawID",ni),Ct.render(sn[ni]/vt,Ze[ni])}else if(pe.isInstancedMesh)Ct.renderInstances(Je,kt,pe.count);else if(be.isInstancedBufferGeometry){const sn=be._maxInstanceCount!==void 0?be._maxInstanceCount:1/0,Ze=Math.min(be.instanceCount,sn);Ct.renderInstances(Je,kt,Ze)}else Ct.render(Je,kt)};function op(V,le,be){V.transparent===!0&&V.side===Vi&&V.forceSinglePass===!1?(V.side=Tn,V.needsUpdate=!0,Va(V,le,be),V.side=kr,V.needsUpdate=!0,Va(V,le,be),V.side=Vi):Va(V,le,be)}this.compile=function(V,le,be=null){be===null&&(be=V),P=Pe.get(be),P.init(le),B.push(P),be.traverseVisible(function(pe){pe.isLight&&pe.layers.test(le.layers)&&(P.pushLight(pe),pe.castShadow&&P.pushShadow(pe))}),V!==be&&V.traverseVisible(function(pe){pe.isLight&&pe.layers.test(le.layers)&&(P.pushLight(pe),pe.castShadow&&P.pushShadow(pe))}),P.setupLights();const ve=new Set;return V.traverse(function(pe){if(!(pe.isMesh||pe.isPoints||pe.isLine||pe.isSprite))return;const ze=pe.material;if(ze)if(Array.isArray(ze))for(let Xe=0;Xe<ze.length;Xe++){const Ve=ze[Xe];op(Ve,be,pe),ve.add(Ve)}else op(ze,be,pe),ve.add(ze)}),P=B.pop(),ve},this.compileAsync=function(V,le,be=null){const ve=this.compile(V,le,be);return new Promise(pe=>{function ze(){if(ve.forEach(function(Xe){S.get(Xe).currentProgram.isReady()&&ve.delete(Xe)}),ve.size===0){pe(V);return}setTimeout(ze,10)}W.get("KHR_parallel_shader_compile")!==null?ze():setTimeout(ze,10)})};let fc=null;function dx(V){fc&&fc(V)}function sp(){Gr.stop()}function ap(){Gr.start()}const Gr=new h_;Gr.setAnimationLoop(dx),typeof self<"u"&&Gr.setContext(self),this.setAnimationLoop=function(V){fc=V,Me.setAnimationLoop(V),V===null?Gr.stop():Gr.start()},Me.addEventListener("sessionstart",sp),Me.addEventListener("sessionend",ap),this.render=function(V,le){if(le!==void 0&&le.isCamera!==!0){_t("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;const be=Me.enabled===!0&&Me.isPresenting===!0,ve=y!==null&&(q===null||be)&&y.begin(x,q);if(V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),le.parent===null&&le.matrixWorldAutoUpdate===!0&&le.updateMatrixWorld(),Me.enabled===!0&&Me.isPresenting===!0&&(y===null||y.isCompositing()===!1)&&(Me.cameraAutoUpdate===!0&&Me.updateCamera(le),le=Me.getCamera()),V.isScene===!0&&V.onBeforeRender(x,V,le,q),P=Pe.get(V,B.length),P.init(le),B.push(P),H.multiplyMatrices(le.projectionMatrix,le.matrixWorldInverse),he.setFromProjectionMatrix(H,mi,le.reversedDepth),we=this.localClippingEnabled,xe=ue.init(this.clippingPlanes,we),_=We.get(V,D.length),_.init(),D.push(_),Me.enabled===!0&&Me.isPresenting===!0){const Xe=x.xr.getDepthSensingMesh();Xe!==null&&hc(Xe,le,-1/0,x.sortObjects)}hc(V,le,0,x.sortObjects),_.finish(),x.sortObjects===!0&&_.sort(Ee,Se),z=Me.enabled===!1||Me.isPresenting===!1||Me.hasDepthSensing()===!1,z&&Ae.addToRenderList(_,V),this.info.render.frame++,xe===!0&&ue.beginShadows();const pe=P.state.shadowsArray;if(re.render(pe,V,le),xe===!0&&ue.endShadows(),this.info.autoReset===!0&&this.info.reset(),(ve&&y.hasRenderPass())===!1){const Xe=_.opaque,Ve=_.transmissive;if(P.setupLights(),le.isArrayCamera){const Ke=le.cameras;if(Ve.length>0)for(let je=0,at=Ke.length;je<at;je++){const ft=Ke[je];up(Xe,Ve,V,ft)}z&&Ae.render(V);for(let je=0,at=Ke.length;je<at;je++){const ft=Ke[je];lp(_,V,ft,ft.viewport)}}else Ve.length>0&&up(Xe,Ve,V,le),z&&Ae.render(V),lp(_,V,le)}q!==null&&I===0&&(Z.updateMultisampleRenderTarget(q),Z.updateRenderTargetMipmap(q)),ve&&y.end(x),V.isScene===!0&&V.onAfterRender(x,V,le),Ue.resetDefaultState(),w=-1,k=null,B.pop(),B.length>0?(P=B[B.length-1],xe===!0&&ue.setGlobalState(x.clippingPlanes,P.state.camera)):P=null,D.pop(),D.length>0?_=D[D.length-1]:_=null};function hc(V,le,be,ve){if(V.visible===!1)return;if(V.layers.test(le.layers)){if(V.isGroup)be=V.renderOrder;else if(V.isLOD)V.autoUpdate===!0&&V.update(le);else if(V.isLight)P.pushLight(V),V.castShadow&&P.pushShadow(V);else if(V.isSprite){if(!V.frustumCulled||he.intersectsSprite(V)){ve&&L.setFromMatrixPosition(V.matrixWorld).applyMatrix4(H);const Xe=Ne.update(V),Ve=V.material;Ve.visible&&_.push(V,Xe,Ve,be,L.z,null)}}else if((V.isMesh||V.isLine||V.isPoints)&&(!V.frustumCulled||he.intersectsObject(V))){const Xe=Ne.update(V),Ve=V.material;if(ve&&(V.boundingSphere!==void 0?(V.boundingSphere===null&&V.computeBoundingSphere(),L.copy(V.boundingSphere.center)):(Xe.boundingSphere===null&&Xe.computeBoundingSphere(),L.copy(Xe.boundingSphere.center)),L.applyMatrix4(V.matrixWorld).applyMatrix4(H)),Array.isArray(Ve)){const Ke=Xe.groups;for(let je=0,at=Ke.length;je<at;je++){const ft=Ke[je],Je=Ve[ft.materialIndex];Je&&Je.visible&&_.push(V,Xe,Je,be,L.z,ft)}}else Ve.visible&&_.push(V,Xe,Ve,be,L.z,null)}}const ze=V.children;for(let Xe=0,Ve=ze.length;Xe<Ve;Xe++)hc(ze[Xe],le,be,ve)}function lp(V,le,be,ve){const{opaque:pe,transmissive:ze,transparent:Xe}=V;P.setupLightsView(be),xe===!0&&ue.setGlobalState(x.clippingPlanes,be),ve&&ee.viewport(A.copy(ve)),pe.length>0&&za(pe,le,be),ze.length>0&&za(ze,le,be),Xe.length>0&&za(Xe,le,be),ee.buffers.depth.setTest(!0),ee.buffers.depth.setMask(!0),ee.buffers.color.setMask(!0),ee.setPolygonOffset(!1)}function up(V,le,be,ve){if((be.isScene===!0?be.overrideMaterial:null)!==null)return;if(P.state.transmissionRenderTarget[ve.id]===void 0){const Je=W.has("EXT_color_buffer_half_float")||W.has("EXT_color_buffer_float");P.state.transmissionRenderTarget[ve.id]=new Mn(1,1,{generateMipmaps:!0,type:Je?tr:yn,minFilter:co,samples:Math.max(4,j.samples),stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:gt.workingColorSpace})}const ze=P.state.transmissionRenderTarget[ve.id],Xe=ve.viewport||A;ze.setSize(Xe.z*x.transmissionResolutionScale,Xe.w*x.transmissionResolutionScale);const Ve=x.getRenderTarget(),Ke=x.getActiveCubeFace(),je=x.getActiveMipmapLevel();x.setRenderTarget(ze),x.getClearColor($),K=x.getClearAlpha(),K<1&&x.setClearColor(16777215,.5),x.clear(),z&&Ae.render(be);const at=x.toneMapping;x.toneMapping=vi;const ft=ve.viewport;if(ve.viewport!==void 0&&(ve.viewport=void 0),P.setupLightsView(ve),xe===!0&&ue.setGlobalState(x.clippingPlanes,ve),za(V,be,ve),Z.updateMultisampleRenderTarget(ze),Z.updateRenderTargetMipmap(ze),W.has("WEBGL_multisampled_render_to_texture")===!1){let Je=!1;for(let At=0,kt=le.length;At<kt;At++){const Bt=le[At],{object:Ct,geometry:sn,material:Ze,group:An}=Bt;if(Ze.side===Vi&&Ct.layers.test(ve.layers)){const vt=Ze.side;Ze.side=Tn,Ze.needsUpdate=!0,cp(Ct,be,ve,sn,Ze,An),Ze.side=vt,Ze.needsUpdate=!0,Je=!0}}Je===!0&&(Z.updateMultisampleRenderTarget(ze),Z.updateRenderTargetMipmap(ze))}x.setRenderTarget(Ve,Ke,je),x.setClearColor($,K),ft!==void 0&&(ve.viewport=ft),x.toneMapping=at}function za(V,le,be){const ve=le.isScene===!0?le.overrideMaterial:null;for(let pe=0,ze=V.length;pe<ze;pe++){const Xe=V[pe],{object:Ve,geometry:Ke,group:je}=Xe;let at=Xe.material;at.allowOverride===!0&&ve!==null&&(at=ve),Ve.layers.test(be.layers)&&cp(Ve,le,be,Ke,at,je)}}function cp(V,le,be,ve,pe,ze){V.onBeforeRender(x,le,be,ve,pe,ze),V.modelViewMatrix.multiplyMatrices(be.matrixWorldInverse,V.matrixWorld),V.normalMatrix.getNormalMatrix(V.modelViewMatrix),pe.onBeforeRender(x,le,be,ve,V,ze),pe.transparent===!0&&pe.side===Vi&&pe.forceSinglePass===!1?(pe.side=Tn,pe.needsUpdate=!0,x.renderBufferDirect(be,le,ve,pe,V,ze),pe.side=kr,pe.needsUpdate=!0,x.renderBufferDirect(be,le,ve,pe,V,ze),pe.side=Vi):x.renderBufferDirect(be,le,ve,pe,V,ze),V.onAfterRender(x,le,be,ve,pe,ze)}function Va(V,le,be){le.isScene!==!0&&(le=F);const ve=S.get(V),pe=P.state.lights,ze=P.state.shadowsArray,Xe=pe.state.version,Ve=Ce.getParameters(V,pe.state,ze,le,be),Ke=Ce.getProgramCacheKey(Ve);let je=ve.programs;ve.environment=V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial?le.environment:null,ve.fog=le.fog;const at=V.isMeshStandardMaterial||V.isMeshLambertMaterial&&!V.envMap||V.isMeshPhongMaterial&&!V.envMap;ve.envMap=oe.get(V.envMap||ve.environment,at),ve.envMapRotation=ve.environment!==null&&V.envMap===null?le.environmentRotation:V.envMapRotation,je===void 0&&(V.addEventListener("dispose",St),je=new Map,ve.programs=je);let ft=je.get(Ke);if(ft!==void 0){if(ve.currentProgram===ft&&ve.lightsStateVersion===Xe)return fp(V,Ve),ft}else Ve.uniforms=Ce.getUniforms(V),V.onBeforeCompile(Ve,x),ft=Ce.acquireProgram(Ve,Ke),je.set(Ke,ft),ve.uniforms=Ve.uniforms;const Je=ve.uniforms;return(!V.isShaderMaterial&&!V.isRawShaderMaterial||V.clipping===!0)&&(Je.clippingPlanes=ue.uniform),fp(V,Ve),ve.needsLights=px(V),ve.lightsStateVersion=Xe,ve.needsLights&&(Je.ambientLightColor.value=pe.state.ambient,Je.lightProbe.value=pe.state.probe,Je.directionalLights.value=pe.state.directional,Je.directionalLightShadows.value=pe.state.directionalShadow,Je.spotLights.value=pe.state.spot,Je.spotLightShadows.value=pe.state.spotShadow,Je.rectAreaLights.value=pe.state.rectArea,Je.ltc_1.value=pe.state.rectAreaLTC1,Je.ltc_2.value=pe.state.rectAreaLTC2,Je.pointLights.value=pe.state.point,Je.pointLightShadows.value=pe.state.pointShadow,Je.hemisphereLights.value=pe.state.hemi,Je.directionalShadowMatrix.value=pe.state.directionalShadowMatrix,Je.spotLightMatrix.value=pe.state.spotLightMatrix,Je.spotLightMap.value=pe.state.spotLightMap,Je.pointShadowMatrix.value=pe.state.pointShadowMatrix),ve.currentProgram=ft,ve.uniformsList=null,ft}function dp(V){if(V.uniformsList===null){const le=V.currentProgram.getUniforms();V.uniformsList=zl.seqWithValue(le.seq,V.uniforms)}return V.uniformsList}function fp(V,le){const be=S.get(V);be.outputColorSpace=le.outputColorSpace,be.batching=le.batching,be.batchingColor=le.batchingColor,be.instancing=le.instancing,be.instancingColor=le.instancingColor,be.instancingMorph=le.instancingMorph,be.skinning=le.skinning,be.morphTargets=le.morphTargets,be.morphNormals=le.morphNormals,be.morphColors=le.morphColors,be.morphTargetsCount=le.morphTargetsCount,be.numClippingPlanes=le.numClippingPlanes,be.numIntersection=le.numClipIntersection,be.vertexAlphas=le.vertexAlphas,be.vertexTangents=le.vertexTangents,be.toneMapping=le.toneMapping}function fx(V,le,be,ve,pe){le.isScene!==!0&&(le=F),Z.resetTextureUnits();const ze=le.fog,Xe=ve.isMeshStandardMaterial||ve.isMeshLambertMaterial||ve.isMeshPhongMaterial?le.environment:null,Ve=q===null?x.outputColorSpace:q.isXRRenderTarget===!0?q.texture.colorSpace:zr,Ke=ve.isMeshStandardMaterial||ve.isMeshLambertMaterial&&!ve.envMap||ve.isMeshPhongMaterial&&!ve.envMap,je=oe.get(ve.envMap||Xe,Ke),at=ve.vertexColors===!0&&!!be.attributes.color&&be.attributes.color.itemSize===4,ft=!!be.attributes.tangent&&(!!ve.normalMap||ve.anisotropy>0),Je=!!be.morphAttributes.position,At=!!be.morphAttributes.normal,kt=!!be.morphAttributes.color;let Bt=vi;ve.toneMapped&&(q===null||q.isXRRenderTarget===!0)&&(Bt=x.toneMapping);const Ct=be.morphAttributes.position||be.morphAttributes.normal||be.morphAttributes.color,sn=Ct!==void 0?Ct.length:0,Ze=S.get(ve),An=P.state.lights;if(xe===!0&&(we===!0||V!==k)){const jt=V===k&&ve.id===w;ue.setState(ve,V,jt)}let vt=!1;ve.version===Ze.__version?(Ze.needsLights&&Ze.lightsStateVersion!==An.state.version||Ze.outputColorSpace!==Ve||pe.isBatchedMesh&&Ze.batching===!1||!pe.isBatchedMesh&&Ze.batching===!0||pe.isBatchedMesh&&Ze.batchingColor===!0&&pe.colorTexture===null||pe.isBatchedMesh&&Ze.batchingColor===!1&&pe.colorTexture!==null||pe.isInstancedMesh&&Ze.instancing===!1||!pe.isInstancedMesh&&Ze.instancing===!0||pe.isSkinnedMesh&&Ze.skinning===!1||!pe.isSkinnedMesh&&Ze.skinning===!0||pe.isInstancedMesh&&Ze.instancingColor===!0&&pe.instanceColor===null||pe.isInstancedMesh&&Ze.instancingColor===!1&&pe.instanceColor!==null||pe.isInstancedMesh&&Ze.instancingMorph===!0&&pe.morphTexture===null||pe.isInstancedMesh&&Ze.instancingMorph===!1&&pe.morphTexture!==null||Ze.envMap!==je||ve.fog===!0&&Ze.fog!==ze||Ze.numClippingPlanes!==void 0&&(Ze.numClippingPlanes!==ue.numPlanes||Ze.numIntersection!==ue.numIntersection)||Ze.vertexAlphas!==at||Ze.vertexTangents!==ft||Ze.morphTargets!==Je||Ze.morphNormals!==At||Ze.morphColors!==kt||Ze.toneMapping!==Bt||Ze.morphTargetsCount!==sn)&&(vt=!0):(vt=!0,Ze.__version=ve.version);let zn=Ze.currentProgram;vt===!0&&(zn=Va(ve,le,pe));let ni=!1,Wr=!1,Co=!1;const It=zn.getUniforms(),en=Ze.uniforms;if(ee.useProgram(zn.program)&&(ni=!0,Wr=!0,Co=!0),ve.id!==w&&(w=ve.id,Wr=!0),ni||k!==V){ee.buffers.depth.getReversed()&&V.reversedDepth!==!0&&(V._reversedDepth=!0,V.updateProjectionMatrix()),It.setValue(C,"projectionMatrix",V.projectionMatrix),It.setValue(C,"viewMatrix",V.matrixWorldInverse);const fr=It.map.cameraPosition;fr!==void 0&&fr.setValue(C,X.setFromMatrixPosition(V.matrixWorld)),j.logarithmicDepthBuffer&&It.setValue(C,"logDepthBufFC",2/(Math.log(V.far+1)/Math.LN2)),(ve.isMeshPhongMaterial||ve.isMeshToonMaterial||ve.isMeshLambertMaterial||ve.isMeshBasicMaterial||ve.isMeshStandardMaterial||ve.isShaderMaterial)&&It.setValue(C,"isOrthographic",V.isOrthographicCamera===!0),k!==V&&(k=V,Wr=!0,Co=!0)}if(Ze.needsLights&&(An.state.directionalShadowMap.length>0&&It.setValue(C,"directionalShadowMap",An.state.directionalShadowMap,Z),An.state.spotShadowMap.length>0&&It.setValue(C,"spotShadowMap",An.state.spotShadowMap,Z),An.state.pointShadowMap.length>0&&It.setValue(C,"pointShadowMap",An.state.pointShadowMap,Z)),pe.isSkinnedMesh){It.setOptional(C,pe,"bindMatrix"),It.setOptional(C,pe,"bindMatrixInverse");const jt=pe.skeleton;jt&&(jt.boneTexture===null&&jt.computeBoneTexture(),It.setValue(C,"boneTexture",jt.boneTexture,Z))}pe.isBatchedMesh&&(It.setOptional(C,pe,"batchingTexture"),It.setValue(C,"batchingTexture",pe._matricesTexture,Z),It.setOptional(C,pe,"batchingIdTexture"),It.setValue(C,"batchingIdTexture",pe._indirectTexture,Z),It.setOptional(C,pe,"batchingColorTexture"),pe._colorsTexture!==null&&It.setValue(C,"batchingColorTexture",pe._colorsTexture,Z));const dr=be.morphAttributes;if((dr.position!==void 0||dr.normal!==void 0||dr.color!==void 0)&&Le.update(pe,be,zn),(Wr||Ze.receiveShadow!==pe.receiveShadow)&&(Ze.receiveShadow=pe.receiveShadow,It.setValue(C,"receiveShadow",pe.receiveShadow)),(ve.isMeshStandardMaterial||ve.isMeshLambertMaterial||ve.isMeshPhongMaterial)&&ve.envMap===null&&le.environment!==null&&(en.envMapIntensity.value=le.environmentIntensity),en.dfgLUT!==void 0&&(en.dfgLUT.value=fC()),Wr&&(It.setValue(C,"toneMappingExposure",x.toneMappingExposure),Ze.needsLights&&hx(en,Co),ze&&ve.fog===!0&&$e.refreshFogUniforms(en,ze),$e.refreshMaterialUniforms(en,ve,ge,ne,P.state.transmissionRenderTarget[V.id]),zl.upload(C,dp(Ze),en,Z)),ve.isShaderMaterial&&ve.uniformsNeedUpdate===!0&&(zl.upload(C,dp(Ze),en,Z),ve.uniformsNeedUpdate=!1),ve.isSpriteMaterial&&It.setValue(C,"center",pe.center),It.setValue(C,"modelViewMatrix",pe.modelViewMatrix),It.setValue(C,"normalMatrix",pe.normalMatrix),It.setValue(C,"modelMatrix",pe.matrixWorld),ve.isShaderMaterial||ve.isRawShaderMaterial){const jt=ve.uniformsGroups;for(let fr=0,Ro=jt.length;fr<Ro;fr++){const hp=jt[fr];Be.update(hp,zn),Be.bind(hp,zn)}}return zn}function hx(V,le){V.ambientLightColor.needsUpdate=le,V.lightProbe.needsUpdate=le,V.directionalLights.needsUpdate=le,V.directionalLightShadows.needsUpdate=le,V.pointLights.needsUpdate=le,V.pointLightShadows.needsUpdate=le,V.spotLights.needsUpdate=le,V.spotLightShadows.needsUpdate=le,V.rectAreaLights.needsUpdate=le,V.hemisphereLights.needsUpdate=le}function px(V){return V.isMeshLambertMaterial||V.isMeshToonMaterial||V.isMeshPhongMaterial||V.isMeshStandardMaterial||V.isShadowMaterial||V.isShaderMaterial&&V.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return q},this.setRenderTargetTextures=function(V,le,be){const ve=S.get(V);ve.__autoAllocateDepthBuffer=V.resolveDepthBuffer===!1,ve.__autoAllocateDepthBuffer===!1&&(ve.__useRenderToTexture=!1),S.get(V.texture).__webglTexture=le,S.get(V.depthTexture).__webglTexture=ve.__autoAllocateDepthBuffer?void 0:be,ve.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(V,le){const be=S.get(V);be.__webglFramebuffer=le,be.__useDefaultFramebuffer=le===void 0};const mx=C.createFramebuffer();this.setRenderTarget=function(V,le=0,be=0){q=V,E=le,I=be;let ve=null,pe=!1,ze=!1;if(V){const Ve=S.get(V);if(Ve.__useDefaultFramebuffer!==void 0){ee.bindFramebuffer(C.FRAMEBUFFER,Ve.__webglFramebuffer),A.copy(V.viewport),N.copy(V.scissor),O=V.scissorTest,ee.viewport(A),ee.scissor(N),ee.setScissorTest(O),w=-1;return}else if(Ve.__webglFramebuffer===void 0)Z.setupRenderTarget(V);else if(Ve.__hasExternalTextures)Z.rebindTextures(V,S.get(V.texture).__webglTexture,S.get(V.depthTexture).__webglTexture);else if(V.depthBuffer){const at=V.depthTexture;if(Ve.__boundDepthTexture!==at){if(at!==null&&S.has(at)&&(V.width!==at.image.width||V.height!==at.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Z.setupDepthRenderbuffer(V)}}const Ke=V.texture;(Ke.isData3DTexture||Ke.isDataArrayTexture||Ke.isCompressedArrayTexture)&&(ze=!0);const je=S.get(V).__webglFramebuffer;V.isWebGLCubeRenderTarget?(Array.isArray(je[le])?ve=je[le][be]:ve=je[le],pe=!0):V.samples>0&&Z.useMultisampledRTT(V)===!1?ve=S.get(V).__webglMultisampledFramebuffer:Array.isArray(je)?ve=je[be]:ve=je,A.copy(V.viewport),N.copy(V.scissor),O=V.scissorTest}else A.copy(G).multiplyScalar(ge).floor(),N.copy(U).multiplyScalar(ge).floor(),O=Y;if(be!==0&&(ve=mx),ee.bindFramebuffer(C.FRAMEBUFFER,ve)&&ee.drawBuffers(V,ve),ee.viewport(A),ee.scissor(N),ee.setScissorTest(O),pe){const Ve=S.get(V.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+le,Ve.__webglTexture,be)}else if(ze){const Ve=le;for(let Ke=0;Ke<V.textures.length;Ke++){const je=S.get(V.textures[Ke]);C.framebufferTextureLayer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0+Ke,je.__webglTexture,be,Ve)}}else if(V!==null&&be!==0){const Ve=S.get(V.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,Ve.__webglTexture,be)}w=-1},this.readRenderTargetPixels=function(V,le,be,ve,pe,ze,Xe,Ve=0){if(!(V&&V.isWebGLRenderTarget)){_t("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ke=S.get(V).__webglFramebuffer;if(V.isWebGLCubeRenderTarget&&Xe!==void 0&&(Ke=Ke[Xe]),Ke){ee.bindFramebuffer(C.FRAMEBUFFER,Ke);try{const je=V.textures[Ve],at=je.format,ft=je.type;if(V.textures.length>1&&C.readBuffer(C.COLOR_ATTACHMENT0+Ve),!j.textureFormatReadable(at)){_t("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!j.textureTypeReadable(ft)){_t("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}le>=0&&le<=V.width-ve&&be>=0&&be<=V.height-pe&&C.readPixels(le,be,ve,pe,Fe.convert(at),Fe.convert(ft),ze)}finally{const je=q!==null?S.get(q).__webglFramebuffer:null;ee.bindFramebuffer(C.FRAMEBUFFER,je)}}},this.readRenderTargetPixelsAsync=async function(V,le,be,ve,pe,ze,Xe,Ve=0){if(!(V&&V.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ke=S.get(V).__webglFramebuffer;if(V.isWebGLCubeRenderTarget&&Xe!==void 0&&(Ke=Ke[Xe]),Ke)if(le>=0&&le<=V.width-ve&&be>=0&&be<=V.height-pe){ee.bindFramebuffer(C.FRAMEBUFFER,Ke);const je=V.textures[Ve],at=je.format,ft=je.type;if(V.textures.length>1&&C.readBuffer(C.COLOR_ATTACHMENT0+Ve),!j.textureFormatReadable(at))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!j.textureTypeReadable(ft))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Je=C.createBuffer();C.bindBuffer(C.PIXEL_PACK_BUFFER,Je),C.bufferData(C.PIXEL_PACK_BUFFER,ze.byteLength,C.STREAM_READ),C.readPixels(le,be,ve,pe,Fe.convert(at),Fe.convert(ft),0);const At=q!==null?S.get(q).__webglFramebuffer:null;ee.bindFramebuffer(C.FRAMEBUFFER,At);const kt=C.fenceSync(C.SYNC_GPU_COMMANDS_COMPLETE,0);return C.flush(),await US(C,kt,4),C.bindBuffer(C.PIXEL_PACK_BUFFER,Je),C.getBufferSubData(C.PIXEL_PACK_BUFFER,0,ze),C.deleteBuffer(Je),C.deleteSync(kt),ze}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(V,le=null,be=0){const ve=Math.pow(2,-be),pe=Math.floor(V.image.width*ve),ze=Math.floor(V.image.height*ve),Xe=le!==null?le.x:0,Ve=le!==null?le.y:0;Z.setTexture2D(V,0),C.copyTexSubImage2D(C.TEXTURE_2D,be,0,0,Xe,Ve,pe,ze),ee.unbindTexture()};const gx=C.createFramebuffer(),vx=C.createFramebuffer();this.copyTextureToTexture=function(V,le,be=null,ve=null,pe=0,ze=0){let Xe,Ve,Ke,je,at,ft,Je,At,kt;const Bt=V.isCompressedTexture?V.mipmaps[ze]:V.image;if(be!==null)Xe=be.max.x-be.min.x,Ve=be.max.y-be.min.y,Ke=be.isBox3?be.max.z-be.min.z:1,je=be.min.x,at=be.min.y,ft=be.isBox3?be.min.z:0;else{const en=Math.pow(2,-pe);Xe=Math.floor(Bt.width*en),Ve=Math.floor(Bt.height*en),V.isDataArrayTexture?Ke=Bt.depth:V.isData3DTexture?Ke=Math.floor(Bt.depth*en):Ke=1,je=0,at=0,ft=0}ve!==null?(Je=ve.x,At=ve.y,kt=ve.z):(Je=0,At=0,kt=0);const Ct=Fe.convert(le.format),sn=Fe.convert(le.type);let Ze;le.isData3DTexture?(Z.setTexture3D(le,0),Ze=C.TEXTURE_3D):le.isDataArrayTexture||le.isCompressedArrayTexture?(Z.setTexture2DArray(le,0),Ze=C.TEXTURE_2D_ARRAY):(Z.setTexture2D(le,0),Ze=C.TEXTURE_2D),C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,le.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,le.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,le.unpackAlignment);const An=C.getParameter(C.UNPACK_ROW_LENGTH),vt=C.getParameter(C.UNPACK_IMAGE_HEIGHT),zn=C.getParameter(C.UNPACK_SKIP_PIXELS),ni=C.getParameter(C.UNPACK_SKIP_ROWS),Wr=C.getParameter(C.UNPACK_SKIP_IMAGES);C.pixelStorei(C.UNPACK_ROW_LENGTH,Bt.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,Bt.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,je),C.pixelStorei(C.UNPACK_SKIP_ROWS,at),C.pixelStorei(C.UNPACK_SKIP_IMAGES,ft);const Co=V.isDataArrayTexture||V.isData3DTexture,It=le.isDataArrayTexture||le.isData3DTexture;if(V.isDepthTexture){const en=S.get(V),dr=S.get(le),jt=S.get(en.__renderTarget),fr=S.get(dr.__renderTarget);ee.bindFramebuffer(C.READ_FRAMEBUFFER,jt.__webglFramebuffer),ee.bindFramebuffer(C.DRAW_FRAMEBUFFER,fr.__webglFramebuffer);for(let Ro=0;Ro<Ke;Ro++)Co&&(C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,S.get(V).__webglTexture,pe,ft+Ro),C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,S.get(le).__webglTexture,ze,kt+Ro)),C.blitFramebuffer(je,at,Xe,Ve,Je,At,Xe,Ve,C.DEPTH_BUFFER_BIT,C.NEAREST);ee.bindFramebuffer(C.READ_FRAMEBUFFER,null),ee.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else if(pe!==0||V.isRenderTargetTexture||S.has(V)){const en=S.get(V),dr=S.get(le);ee.bindFramebuffer(C.READ_FRAMEBUFFER,gx),ee.bindFramebuffer(C.DRAW_FRAMEBUFFER,vx);for(let jt=0;jt<Ke;jt++)Co?C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,en.__webglTexture,pe,ft+jt):C.framebufferTexture2D(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,en.__webglTexture,pe),It?C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,dr.__webglTexture,ze,kt+jt):C.framebufferTexture2D(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,dr.__webglTexture,ze),pe!==0?C.blitFramebuffer(je,at,Xe,Ve,Je,At,Xe,Ve,C.COLOR_BUFFER_BIT,C.NEAREST):It?C.copyTexSubImage3D(Ze,ze,Je,At,kt+jt,je,at,Xe,Ve):C.copyTexSubImage2D(Ze,ze,Je,At,je,at,Xe,Ve);ee.bindFramebuffer(C.READ_FRAMEBUFFER,null),ee.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else It?V.isDataTexture||V.isData3DTexture?C.texSubImage3D(Ze,ze,Je,At,kt,Xe,Ve,Ke,Ct,sn,Bt.data):le.isCompressedArrayTexture?C.compressedTexSubImage3D(Ze,ze,Je,At,kt,Xe,Ve,Ke,Ct,Bt.data):C.texSubImage3D(Ze,ze,Je,At,kt,Xe,Ve,Ke,Ct,sn,Bt):V.isDataTexture?C.texSubImage2D(C.TEXTURE_2D,ze,Je,At,Xe,Ve,Ct,sn,Bt.data):V.isCompressedTexture?C.compressedTexSubImage2D(C.TEXTURE_2D,ze,Je,At,Bt.width,Bt.height,Ct,Bt.data):C.texSubImage2D(C.TEXTURE_2D,ze,Je,At,Xe,Ve,Ct,sn,Bt);C.pixelStorei(C.UNPACK_ROW_LENGTH,An),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,vt),C.pixelStorei(C.UNPACK_SKIP_PIXELS,zn),C.pixelStorei(C.UNPACK_SKIP_ROWS,ni),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Wr),ze===0&&le.generateMipmaps&&C.generateMipmap(Ze),ee.unbindTexture()},this.initRenderTarget=function(V){S.get(V).__webglFramebuffer===void 0&&Z.setupRenderTarget(V)},this.initTexture=function(V){V.isCubeTexture?Z.setTextureCube(V,0):V.isData3DTexture?Z.setTexture3D(V,0):V.isDataArrayTexture||V.isCompressedArrayTexture?Z.setTexture2DArray(V,0):Z.setTexture2D(V,0),ee.unbindTexture()},this.resetState=function(){E=0,I=0,q=null,ee.reset(),Ue.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return mi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=gt._getDrawingBufferColorSpace(e),n.unpackColorSpace=gt._getUnpackColorSpace()}}const pC=""+new URL("../mangleditor-icon.png",import.meta.url).href,mC="mangleditor",gC="0.1.0",vC="module",_C={dev:"vite --host",build:"vite build",preview:"vite preview",deploy:"gh-pages -d dist"},yC={"@vue-flow/background":"^1.3.2","@vue-flow/controls":"^1.1.3","@vue-flow/core":"^1.48.2","@vue-flow/minimap":"^1.5.4","@vue-flow/node-resizer":"^1.5.1",pinia:"^3.0.4",three:"^0.183.2",vue:"^3.5.25"},xC={"@vitejs/plugin-vue":"^6.0.2","gh-pages":"^6.3.0",vite:"^7.3.1"},y_={name:mC,private:!0,version:gC,type:vC,scripts:_C,dependencies:yC,devDependencies:xC},cr=(t,e)=>{const n=t.__vccOpts||t;for(const[i,r]of e)n[i]=r;return n},bC={class:"top-bar"},SC={class:"top-bar__logo-container"},MC={class:"top-bar__logo-text"},wC={class:"top-bar__version"},EC=["value"],TC=["title"],AC={class:"top-bar__btn-label"},CC={key:0,class:"top-bar__slider-group top-bar__mobile-hide",title:"Workspace Darkness"},RC=["value"],IC={class:"top-bar__status"},PC={__name:"TopBar",props:{isRendering:{type:Boolean,default:!0},previewMode:{type:String,default:"panel"},projectTitle:{type:String,default:"Untitled Project"},bgOpacity:{type:Number,default:.4},showShadows:{type:Boolean,default:!0},isPerformanceMode:{type:Boolean,default:!1}},emits:["save","load","download","import","reset","toggleRender","togglePreview","updateTitle","updateBgOpacity","toggleShadows","openPopup","togglePerformance"],setup(t,{emit:e}){const n=e,i=Ie(null);function r(){i.value?.click()}function o(s){const a=s.target.files?.[0];if(!a)return;const l=new FileReader;l.onload=()=>{n("import",l.result)},l.readAsText(a),s.target.value=""}return(s,a)=>(ce(),me("div",bC,[Q("div",SC,[a[13]||(a[13]=Q("img",{src:pC,class:"top-bar__logo-icon",alt:"mangleditor"},null,-1)),Q("span",MC,[a[12]||(a[12]=hi("mangleditor ",-1)),Q("span",wC,"v"+Te(fe(y_).version),1)]),a[14]||(a[14]=Q("span",{class:"top-bar__coded-by"},"coded with love and haste",-1))]),Q("input",{class:"top-bar__title-input",type:"text",value:t.projectTitle,onInput:a[0]||(a[0]=l=>s.$emit("updateTitle",l.target.value)),onBlur:a[1]||(a[1]=l=>s.$emit("updateTitle",l.target.value)),placeholder:"Untitled Project",title:"Project title — used for save/export filenames"},null,40,EC),a[18]||(a[18]=Q("div",{class:"top-bar__divider"},null,-1)),Q("button",{class:"top-bar__btn top-bar__mobile-hide",onClick:a[2]||(a[2]=l=>s.$emit("save")),title:"Save to browser"}," 💾 Save "),Q("button",{class:"top-bar__btn top-bar__mobile-hide",onClick:a[3]||(a[3]=l=>s.$emit("load")),title:"Load from browser storage"}," 📂 Load "),Q("button",{class:"top-bar__btn top-bar__mobile-hide",onClick:a[4]||(a[4]=l=>s.$emit("download")),title:"Download graph as JSON"}," ⬇ Download "),Q("button",{class:"top-bar__btn top-bar__mobile-hide",onClick:r,title:"Import graph JSON"}," ⬆ Import "),Q("input",{ref_key:"importInput",ref:i,type:"file",accept:".json",class:"file-input-hidden",onChange:o},null,544),a[19]||(a[19]=Q("div",{class:"top-bar__divider"},null,-1)),Q("button",{class:"top-bar__btn top-bar__btn--danger",onClick:a[5]||(a[5]=l=>s.$emit("reset")),title:"Clear all nodes"},[...a[15]||(a[15]=[hi(" 🗑 ",-1),Q("span",{class:"top-bar__btn-label"},"Reset",-1)])]),a[20]||(a[20]=Q("div",{class:"top-bar__divider"},null,-1)),Q("button",{class:ut(["top-bar__btn",t.isRendering?"top-bar__btn--running":"top-bar__btn--stop"]),onClick:a[6]||(a[6]=l=>s.$emit("toggleRender")),title:t.isRendering?"Stop rendering":"Resume rendering"},[hi(Te(t.isRendering?"⏸":"▶")+" ",1),Q("span",AC,Te(t.isRendering?"Stop":"Resume"),1)],10,TC),Q("button",{class:"top-bar__btn top-bar__mobile-hide",onClick:a[7]||(a[7]=l=>s.$emit("togglePreview")),title:"Toggle preview mode"},Te(t.previewMode==="anchored"?"🖥 Anchored":t.previewMode==="floating"?"🪟 Floating":"🌌 Background"),1),Q("button",{class:"top-bar__btn top-bar__mobile-hide",onClick:a[8]||(a[8]=l=>s.$emit("openPopup")),title:"Open renderer in a separate pop-up window"}," ↗ Popout "),Q("button",{class:ut(["top-bar__btn",{"top-bar__btn--active":t.isPerformanceMode}]),onClick:a[9]||(a[9]=l=>s.$emit("togglePerformance")),title:"Toggle Performance Mode (P)"},[...a[16]||(a[16]=[hi(" ⚡ ",-1),Q("span",{class:"top-bar__btn-label"},"Perf",-1)])],2),a[21]||(a[21]=Q("div",{class:"top-bar__divider top-bar__mobile-hide"},null,-1)),Q("button",{class:ut(["top-bar__btn top-bar__mobile-hide",{"top-bar__btn--active":t.showShadows}]),onClick:a[10]||(a[10]=l=>s.$emit("toggleShadows")),title:"Toggle CSS drop shadows on nodes and cables"}," ☁ Shadows ",2),t.previewMode==="background"?(ce(),me("div",CC,[a[17]||(a[17]=Q("span",{class:"top-bar__slider-label"},"Dim",-1)),Q("input",{type:"range",min:"0",max:"1",step:"0.05",class:"top-bar__range",value:t.bgOpacity,onInput:a[11]||(a[11]=l=>s.$emit("updateBgOpacity",parseFloat(l.target.value)))},null,40,RC)])):Ge("",!0),Q("div",IC,[Q("div",{class:ut(["top-bar__status-dot",{"top-bar__status-dot--stopped":!t.isRendering}])},null,2),Q("span",null,Te(t.isRendering?"RENDERING":"STOPPED"),1)])]))}},NC=cr(PC,[["__scopeId","data-v-03925bfc"]]),_e={IMAGE:"image",FLOAT:"float",INT:"int",VEC2:"vec2",BOOL:"bool",TRIGGER:"trigger"},DC={[_e.IMAGE]:"#00d4ff",[_e.FLOAT]:"#ff9a2e",[_e.INT]:"#ffe14d",[_e.VEC2]:"#ff6eb4",[_e.BOOL]:"#ff4444",[_e.TRIGGER]:"#ffffff"},LC={[_e.IMAGE]:[_e.IMAGE],[_e.FLOAT]:[_e.FLOAT],[_e.INT]:[_e.INT,_e.FLOAT],[_e.VEC2]:[_e.VEC2],[_e.BOOL]:[_e.BOOL],[_e.TRIGGER]:[_e.TRIGGER]};function jm(t,e){const n=LC[t];return n?n.includes(e):!1}function ad(t){return DC[t]||"#888888"}const Uh={imageInput:{type:"imageInput",label:"Image Input",category:"image",inputs:[],outputs:[{id:"out",label:"Image",type:_e.IMAGE}],params:{},shaderKey:null},uiImageSlot:{type:"uiImageSlot",label:"UI Image Slot",category:"image",inputs:[],outputs:[{id:"out",label:"Image",type:_e.IMAGE}],params:{},shaderKey:null},webcamInput:{type:"webcamInput",label:"Webcam",category:"image",inputs:[{id:"trigger",label:"Enable/Trigger",type:_e.FLOAT,optional:!0}],outputs:[{id:"out",label:"Image",type:_e.IMAGE}],params:{enable:{type:"bool",ui:"button",default:!1,label:"Enable Webcam"}},shaderKey:null},imageOutput:{type:"imageOutput",label:"Image Output",category:"image",inputs:[{id:"in",label:"Image",type:_e.IMAGE}],outputs:[],params:{format:{type:"select",default:"png",options:["png","tiff","bmp"],label:"Format"},filename:{type:"string",default:"output",label:"Filename"}},shaderKey:null},pixelSort:{type:"pixelSort",label:"Pixel Sort",category:"image",inputs:[{id:"in",label:"Image",type:_e.IMAGE}],outputs:[{id:"out",label:"Image",type:_e.IMAGE}],params:{direction:{type:"select",default:"horizontal",options:["horizontal","vertical"],label:"Direction"},sortBy:{type:"select",default:"brightness",options:["brightness","hue","saturation"],label:"Sort By"},threshold:{type:"float",default:.5,min:0,max:1,step:.01,label:"Threshold"},upperThreshold:{type:"float",default:.8,min:0,max:1,step:.01,label:"Upper Threshold"},reverse:{type:"bool",default:!1,label:"Reverse"},blendAmount:{type:"float",default:1,min:0,max:1,step:.01,label:"Mix / Blend"}},shaderKey:"pixelSort"},reededGlass:{type:"reededGlass",label:"Reeded Glass",category:"image",inputs:[{id:"in",label:"Image",type:_e.IMAGE},{id:"texture",label:"Texture",type:_e.IMAGE,optional:!0}],outputs:[{id:"out",label:"Image",type:_e.IMAGE}],params:{scale:{type:"float",default:20,min:1,max:200,step:.5,label:"Scale"},intensity:{type:"float",default:.05,min:0,max:.5,step:.001,label:"Intensity"},angle:{type:"float",default:0,min:0,max:360,step:1,label:"Angle"},blur:{type:"float",default:.5,min:0,max:5,step:.1,label:"Blur"},blendAmount:{type:"float",default:1,min:0,max:1,step:.01,label:"Mix / Blend"}},shaderKey:"reededGlass"},chromaticAberration:{type:"chromaticAberration",label:"Chromatic Aberration",category:"image",inputs:[{id:"in",label:"Image",type:_e.IMAGE}],outputs:[{id:"out",label:"Image",type:_e.IMAGE}],params:{intensity:{type:"float",default:5,min:0,max:50,step:.5,label:"Intensity"},direction:{type:"select",default:"radial",options:["radial","horizontal","vertical"],label:"Direction"},centerX:{type:"float",default:.5,min:0,max:1,step:.01,label:"Center X"},centerY:{type:"float",default:.5,min:0,max:1,step:.01,label:"Center Y"},blendAmount:{type:"float",default:1,min:0,max:1,step:.01,label:"Mix / Blend"}},shaderKey:"chromaticAberration"},displacement:{type:"displacement",label:"Heightmap Displacement",category:"image",inputs:[{id:"in",label:"Image",type:_e.IMAGE},{id:"heightmap",label:"Heightmap",type:_e.IMAGE}],outputs:[{id:"out",label:"Image",type:_e.IMAGE}],params:{strength:{type:"float",default:.05,min:0,max:.5,step:.001,label:"Strength"},channel:{type:"select",default:"luminance",options:["luminance","r","g","b"],label:"Channel"},blendAmount:{type:"float",default:1,min:0,max:1,step:.01,label:"Mix / Blend"}},shaderKey:"displacement"},levels:{type:"levels",label:"Levels",category:"image",inputs:[{id:"in",label:"Image",type:_e.IMAGE},{id:"inputBlack",label:"In Black",type:_e.INT,optional:!0},{id:"inputWhite",label:"In White",type:_e.INT,optional:!0},{id:"gamma",label:"Gamma",type:_e.FLOAT,optional:!0}],outputs:[{id:"out",label:"Image",type:_e.IMAGE}],params:{inputBlack:{type:"int",default:0,min:0,max:255,step:1,label:"Input Black"},inputWhite:{type:"int",default:255,min:0,max:255,step:1,label:"Input White"},gamma:{type:"float",default:1,min:.1,max:10,step:.01,label:"Gamma"},outputBlack:{type:"int",default:0,min:0,max:255,step:1,label:"Output Black"},outputWhite:{type:"int",default:255,min:0,max:255,step:1,label:"Output White"},channel:{type:"select",default:"master",options:["master","r","g","b"],label:"Channel"},blendAmount:{type:"float",default:1,min:0,max:1,step:.01,label:"Mix / Blend"}},shaderKey:"levels"},surfaceBlur:{type:"surfaceBlur",label:"Surface Blur",category:"image",inputs:[{id:"in",label:"Image",type:_e.IMAGE}],outputs:[{id:"out",label:"Image",type:_e.IMAGE}],params:{radius:{type:"int",default:5,min:1,max:20,step:1,label:"Radius"},threshold:{type:"float",default:.1,min:0,max:1,step:.01,label:"Threshold"},blendAmount:{type:"float",default:1,min:0,max:1,step:.01,label:"Mix / Blend"}},shaderKey:"surfaceBlur"},feedbackLoop:{type:"feedbackLoop",label:"Feedback Loop",category:"image",inputs:[{id:"in",label:"Image",type:_e.IMAGE}],outputs:[{id:"out",label:"Image",type:_e.IMAGE}],params:{decay:{type:"float",default:.9,min:0,max:1,step:.01,label:"Decay"},iterations:{type:"int",default:1,min:1,max:100,step:1,label:"Iterations"},blendMode:{type:"select",default:"normal",options:["normal","add","multiply"],label:"Blend Mode"}},shaderKey:"feedback"},blend:{type:"blend",label:"Blend",category:"image",inputs:[{id:"base",label:"Base",type:_e.IMAGE},{id:"overlay",label:"Overlay",type:_e.IMAGE}],outputs:[{id:"out",label:"Image",type:_e.IMAGE}],params:{mode:{type:"select",default:"normal",options:["normal","multiply","screen","overlay","softLight","hardLight","difference","exclusion","add","subtract"],label:"Mode"},opacity:{type:"float",default:1,min:0,max:1,step:.01,label:"Opacity"}},shaderKey:"blend"},diffusion:{type:"diffusion",label:"Diffusion Reaction",category:"image",inputs:[{id:"in",label:"Init State",type:_e.IMAGE}],outputs:[{id:"out",label:"Image",type:_e.IMAGE}],params:{dA:{type:"float",default:1,min:0,max:2,step:.01,label:"Diff A"},dB:{type:"float",default:.5,min:0,max:2,step:.01,label:"Diff B"},feed:{type:"float",default:.055,min:0,max:.1,step:.001,label:"Feed Rate"},kill:{type:"float",default:.062,min:0,max:.1,step:.001,label:"Kill Rate"},dt:{type:"float",default:1,min:0,max:2,step:.01,label:"Delta Time"}},shaderKey:"diffusion"},xerox:{type:"xerox",label:"Xerox Photocopy",category:"image",inputs:[{id:"in",label:"Image",type:_e.IMAGE}],outputs:[{id:"out",label:"Image",type:_e.IMAGE}],params:{threshold:{type:"float",default:.5,min:0,max:1,step:.01,label:"Threshold"},noiseAmount:{type:"float",default:.1,min:0,max:1,step:.01,label:"Noise"},contrast:{type:"float",default:2,min:0,max:5,step:.1,label:"Contrast"},blendAmount:{type:"float",default:1,min:0,max:1,step:.01,label:"Mix / Blend"}},shaderKey:"xerox"},liquidDeform:{type:"liquidDeform",label:"Liquid Deform",category:"uv",inputs:[{id:"in",label:"Image",type:_e.IMAGE}],outputs:[{id:"out",label:"Image",type:_e.IMAGE}],params:{scale:{type:"float",default:1,min:.1,max:10,step:.01,label:"Zoom/Scale"},intensity:{type:"float",default:1,min:0,max:5,step:.01,label:"Swirl Int."},speed:{type:"float",default:1,min:0,max:5,step:.01,label:"Swirl Spd"},samples:{type:"float",default:20,min:1,max:20,step:1,label:"Samples"},gammaLift:{type:"float",default:1,min:.1,max:5,step:.01,label:"GammaLift"},blendAmount:{type:"float",default:1,min:0,max:1,step:.01,label:"Mix/Blend"}},shaderKey:"liquidDeform"},noiseContours:{type:"noiseContours",label:"Noise Contours",category:"image",inputs:[{id:"in",label:"Image",type:_e.IMAGE},{id:"texture",label:"Overlay Tex",type:_e.IMAGE,optional:!0}],outputs:[{id:"out",label:"Image",type:_e.IMAGE}],params:{speed:{type:"float",default:1,min:0,max:5,step:.01,label:"Speed"},scale:{type:"float",default:1,min:.1,max:4,step:.01,label:"Scale"},palNum:{type:"float",default:9,min:2,max:20,step:1,label:"Contour Bands"},edgeStrength:{type:"float",default:5,min:0,max:20,step:.1,label:"Edge Strength"},highlight:{type:"float",default:10,min:0,max:30,step:.1,label:"Highlight"},hueShift:{type:"float",default:-.25,min:-3.14,max:3.14,step:.01,label:"Hue Shift"},hueRadius:{type:"float",default:.4,min:0,max:2,step:.01,label:"Hue Radius"},imageBlend:{type:"float",default:0,min:0,max:1,step:.01,label:"Image Color"},taper:{type:"float",default:1,min:0,max:3,step:.01,label:"Taper"},blendAmount:{type:"float",default:1,min:0,max:1,step:.01,label:"Blend"}},shaderKey:"noiseContours"},fisheye:{type:"fisheye",label:"Fisheye",category:"image",inputs:[{id:"in",label:"Image",type:_e.IMAGE}],outputs:[{id:"out",label:"Image",type:_e.IMAGE}],params:{power:{type:"float",default:1,min:-3,max:3,step:.01,label:"Power"},centerX:{type:"float",default:.5,min:.1,max:.9,step:.01,label:"Center X"},centerY:{type:"float",default:.5,min:.1,max:.9,step:.01,label:"Center Y"},zoom:{type:"float",default:1,min:.1,max:4,step:.01,label:"Zoom"},blendAmount:{type:"float",default:1,min:0,max:1,step:.01,label:"Blend"}},shaderKey:"fisheye"},crt:{type:"crt",label:"CRT Display",category:"image",inputs:[{id:"in",label:"Image",type:_e.IMAGE}],outputs:[{id:"out",label:"Image",type:_e.IMAGE}],params:{curvature:{type:"float",default:.5,min:0,max:1,step:.01,label:"Curvature"},scanLines:{type:"float",default:.5,min:0,max:1,step:.01,label:"Scanlines"},rgbShift:{type:"float",default:.2,min:0,max:1,step:.01,label:"RGB Shift"},brightness:{type:"float",default:1.2,min:0,max:3,step:.1,label:"Brightness"},blendAmount:{type:"float",default:1,min:0,max:1,step:.01,label:"Mix / Blend"}},shaderKey:"crt"},ascii:{type:"ascii",label:"ASCII Art",category:"image",inputs:[{id:"in",label:"Image",type:_e.IMAGE},{id:"texture",label:"Overlay Tex",type:_e.IMAGE,optional:!0}],outputs:[{id:"out",label:"Image",type:_e.IMAGE}],params:{cellSize:{type:"float",default:12,min:4,max:48,step:1,label:"Cell Size"},brightness:{type:"float",default:0,min:-1,max:1,step:.01,label:"Threshold Shift"},colorMode:{type:"float",default:0,min:0,max:1,step:1,label:"Color Mode (Orig/Flat)"},fgColor:{type:"color",default:"#00ff66",label:"FG Color"},bgColor:{type:"color",default:"#000000",label:"BG Color"},intensity:{type:"float",default:1,min:0,max:1,step:.01,label:"Effect Mix"},blendAmount:{type:"float",default:1,min:0,max:1,step:.01,label:"Mix / Blend"}},shaderKey:"ascii"},asciiV2:{type:"asciiV2",label:"ASCII v2",category:"image",inputs:[{id:"in",label:"Image",type:_e.IMAGE},{id:"texture",label:"Overlay Tex",type:_e.IMAGE,optional:!0}],outputs:[{id:"out",label:"Image",type:_e.IMAGE}],params:{cellSize:{type:"float",default:12,min:4,max:64,step:1,label:"Cell Size"},brightness:{type:"float",default:0,min:-.5,max:.5,step:.01,label:"Brightness"},colorMode:{type:"select",default:"Palette",options:["Palette","Original","Flat"],label:"Color Mode"},fgColor:{type:"color",default:"#00ff66",label:"FG Color"},bgColor:{type:"color",default:"#000000",label:"BG Color"},extendedPalette:{type:"bool",default:!1,label:"Extended Chars"},intensity:{type:"float",default:1,min:0,max:1,step:.01,label:"Intensity"},blendAmount:{type:"float",default:1,min:0,max:1,step:.01,label:"Blend"}},shaderKey:"asciiV2"},motionBlur:{type:"motionBlur",label:"Motion Blur",category:"image",inputs:[{id:"in",label:"Image",type:_e.IMAGE}],outputs:[{id:"out",label:"Image",type:_e.IMAGE}],params:{angle:{type:"float",default:0,min:0,max:3.1415,step:.01,label:"Angle (rad)"},strength:{type:"float",default:5,min:0,max:50,step:.1,label:"Strength"},samples:{type:"int",default:15,min:1,max:50,step:1,label:"Samples"},blendAmount:{type:"float",default:1,min:0,max:1,step:.01,label:"Mix / Blend"}},shaderKey:"motionBlur"},dithering:{type:"dithering",label:"Dithering (4x4)",category:"image",inputs:[{id:"in",label:"Image",type:_e.IMAGE}],outputs:[{id:"out",label:"Image",type:_e.IMAGE}],params:{colors:{type:"float",default:2,min:1,max:32,step:1,label:"Colors"},spread:{type:"float",default:.5,min:0,max:2,step:.01,label:"Spread"},blendAmount:{type:"float",default:1,min:0,max:1,step:.01,label:"Mix / Blend"}},shaderKey:"dithering"},lfo:{type:"lfo",label:"LFO",category:"animation",compact:!0,inlineParams:["waveform","frequency","amplitude"],inputs:[],outputs:[{id:"out",label:"Value",type:_e.FLOAT}],params:{waveform:{type:"select",default:"sine",options:["sine","saw","square","triangle"],label:"Waveform"},frequency:{type:"float",default:1,min:.01,max:60,step:.01,label:"Frequency (Hz)"},amplitude:{type:"float",default:1,min:0,max:100,step:.01,label:"Amplitude"},offset:{type:"float",default:0,min:-100,max:100,step:.01,label:"Offset"},phase:{type:"float",default:0,min:0,max:360,step:1,label:"Phase (°)"}},shaderKey:null,isAnimated:!0},timer:{type:"timer",label:"Timer",category:"animation",inputs:[{id:"reset",label:"Reset",type:_e.TRIGGER,optional:!0}],outputs:[{id:"out",label:"Time",type:_e.FLOAT}],params:{speed:{type:"float",default:1,min:.01,max:10,step:.01,label:"Speed"},loop:{type:"bool",default:!1,label:"Loop"},loopDuration:{type:"float",default:5,min:.1,max:300,step:.1,label:"Loop Duration (s)"}},shaderKey:null,isAnimated:!0},random:{type:"random",label:"Random",category:"animation",inputs:[{id:"trigger",label:"Trigger",type:_e.TRIGGER,optional:!0}],outputs:[{id:"out",label:"Value",type:_e.FLOAT}],params:{min:{type:"float",default:0,min:-1e3,max:1e3,step:.01,label:"Min"},max:{type:"float",default:1,min:-1e3,max:1e3,step:.01,label:"Max"},triggerInterval:{type:"float",default:.5,min:.01,max:30,step:.01,label:"Self-Trigger (s)"},damping:{type:"float",default:0,min:0,max:.999,step:.001,label:"Damping"},seed:{type:"int",default:42,min:0,max:99999,step:1,label:"Seed"}},shaderKey:null,isAnimated:!0},damper:{type:"damper",label:"Damper",category:"animation",inputs:[{id:"target",label:"Target",type:_e.FLOAT}],outputs:[{id:"out",label:"Value",type:_e.FLOAT}],params:{smoothing:{type:"float",default:.9,min:0,max:.999,step:.001,label:"Smoothing"}},shaderKey:null,isAnimated:!0},fft:{type:"fft",label:"Audio FFT",category:"animation",compact:!0,inputs:[],outputs:[{id:"bass",label:"Bass",type:_e.FLOAT},{id:"lowMid",label:"Low Mid",type:_e.FLOAT},{id:"mid",label:"Mid",type:_e.FLOAT},{id:"high",label:"High",type:_e.FLOAT}],params:{smoothing:{type:"float",default:.8,min:0,max:.99,step:.01,label:"Smoothing"},gain:{type:"float",default:1,min:0,max:10,step:.1,label:"Gain"}},shaderKey:null,isAnimated:!0},button:{type:"button",label:"Button",category:"trigger",inputs:[],outputs:[{id:"out",label:"Trigger",type:_e.TRIGGER}],params:{label:{type:"string",default:"Press",label:"Label"}},shaderKey:null},slider:{type:"slider",label:"Slider",category:"trigger",inputs:[],outputs:[{id:"out",label:"Value",type:_e.FLOAT}],params:{value:{type:"float",default:.5,min:0,max:1,step:.01,label:"Value"},min:{type:"float",default:0,min:-1e4,max:1e4,step:.01,label:"Min"},max:{type:"float",default:1,min:-1e4,max:1e4,step:.01,label:"Max"},step:{type:"float",default:.01,min:.001,max:100,step:.001,label:"Step"},outputType:{type:"select",default:"float",options:["float","int"],label:"Output Type"}},shaderKey:null},knob:{type:"knob",label:"Knob",category:"trigger",compact:!0,inputs:[],outputs:[{id:"out",label:"Value",type:_e.FLOAT}],params:{value:{type:"float",default:.5,min:0,max:1,step:.01,label:"Value"},min:{type:"float",default:0,min:-1e4,max:1e4,step:.01,label:"Min"},max:{type:"float",default:1,min:-1e4,max:1e4,step:.01,label:"Max"},step:{type:"float",default:.01,min:.001,max:100,step:.001,label:"Step"}},shaderKey:null},onStart:{type:"onStart",label:"On Start (Init)",category:"logic",inputs:[],outputs:[{id:"out",label:"Trigger",type:_e.FLOAT}],params:{}},bang:{type:"bang",label:"Bang",category:"trigger",compact:!0,inputs:[],outputs:[{id:"out",label:"Trigger",type:_e.FLOAT}],params:{label:{type:"string",default:"Bang!",label:"Label"}},shaderKey:null},toggle:{type:"toggle",label:"Toggle (Bool)",category:"trigger",compact:!0,inputs:[],outputs:[{id:"out",label:"State",type:_e.BOOL}],params:{state:{type:"bool",default:!1,label:"State"}},shaderKey:null},edgeTrigger:{type:"edgeTrigger",label:"Edge -> Bang",category:"trigger",compact:!0,inputs:[{id:"in",label:"Bool",type:_e.BOOL}],outputs:[{id:"out",label:"Trigger",type:_e.TRIGGER}],params:{mode:{type:"select",default:"rising",options:["rising","falling","both"],label:"Edge"}},shaderKey:null},changeTrigger:{type:"changeTrigger",label:"Change -> Bang",category:"trigger",compact:!0,inputs:[{id:"in",label:"Value",type:_e.FLOAT}],outputs:[{id:"out",label:"Trigger",type:_e.TRIGGER}],params:{threshold:{type:"float",default:.1,min:.001,max:100,step:.001,label:"Threshold"}},shaderKey:null},compare:{type:"compare",label:"Compare",category:"math",inputs:[{id:"a",label:"A",type:_e.FLOAT},{id:"b",label:"B",type:_e.FLOAT}],outputs:[{id:"out",label:"Bool",type:_e.BOOL}],params:{op:{type:"select",default:">",options:[">","<",">=","<=","==","!="],label:"Operator"}},shaderKey:null},valueCondition:{type:"valueCondition",label:"If / Else",category:"math",inputs:[{id:"cond",label:"Condition",type:_e.BOOL},{id:"trueVal",label:"True",type:_e.FLOAT,optional:!0},{id:"falseVal",label:"False",type:_e.FLOAT,optional:!0}],outputs:[{id:"out",label:"Result",type:_e.FLOAT}],params:{defaultTrue:{type:"float",default:1,min:-1e3,max:1e3,step:.01,label:"Def True"},defaultFalse:{type:"float",default:0,min:-1e3,max:1e3,step:.01,label:"Def False"}},shaderKey:null},mathAdd:{type:"mathAdd",label:"Add",category:"math",inputs:[{id:"a",label:"A",type:_e.FLOAT},{id:"b",label:"B",type:_e.FLOAT}],outputs:[{id:"out",label:"Result",type:_e.FLOAT}],params:{},shaderKey:null},mathMultiply:{type:"mathMultiply",label:"Multiply",category:"math",inputs:[{id:"a",label:"A",type:_e.FLOAT},{id:"b",label:"B",type:_e.FLOAT}],outputs:[{id:"out",label:"Result",type:_e.FLOAT}],params:{},shaderKey:null},mathDivide:{type:"mathDivide",label:"Divide",category:"math",inputs:[{id:"a",label:"A",type:_e.FLOAT},{id:"b",label:"B",type:_e.FLOAT}],outputs:[{id:"out",label:"Result",type:_e.FLOAT}],params:{},shaderKey:null},mathSqrt:{type:"mathSqrt",label:"Sqrt",category:"math",inputs:[{id:"a",label:"Value",type:_e.FLOAT}],outputs:[{id:"out",label:"Result",type:_e.FLOAT}],params:{},shaderKey:null},mathMap:{type:"mathMap",label:"Map",category:"math",inputs:[{id:"value",label:"Value",type:_e.FLOAT}],outputs:[{id:"out",label:"Result",type:_e.FLOAT}],params:{inMin:{type:"float",default:0,min:-1e4,max:1e4,step:.01,label:"In Min"},inMax:{type:"float",default:1,min:-1e4,max:1e4,step:.01,label:"In Max"},outMin:{type:"float",default:0,min:-1e4,max:1e4,step:.01,label:"Out Min"},outMax:{type:"float",default:1,min:-1e4,max:1e4,step:.01,label:"Out Max"}},shaderKey:null},mathClamp:{type:"mathClamp",label:"Clamp",category:"math",inputs:[{id:"value",label:"Value",type:_e.FLOAT}],outputs:[{id:"out",label:"Result",type:_e.FLOAT}],params:{min:{type:"float",default:0,min:-1e4,max:1e4,step:.01,label:"Min"},max:{type:"float",default:1,min:-1e4,max:1e4,step:.01,label:"Max"}},shaderKey:null},mathWrap:{type:"mathWrap",label:"Wrap",category:"math",inputs:[{id:"value",label:"Value",type:_e.FLOAT}],outputs:[{id:"out",label:"Result",type:_e.FLOAT}],params:{min:{type:"float",default:0,min:-1e4,max:1e4,step:.01,label:"Min"},max:{type:"float",default:1,min:-1e4,max:1e4,step:.01,label:"Max"}},shaderKey:null},floatToInt:{type:"floatToInt",label:"Float → Int",category:"math",compact:!0,inputs:[{id:"in",label:"Float",type:_e.FLOAT}],outputs:[{id:"out",label:"Int",type:_e.INT}],params:{mode:{type:"select",default:"round",options:["round","floor","ceil","truncate"],label:"Mode"},clampMin:{type:"int",default:-2147483648,min:-2147483648,max:2147483647,step:1,label:"Clamp Min"},clampMax:{type:"int",default:2147483647,min:-2147483648,max:2147483647,step:1,label:"Clamp Max"}},shaderKey:null},intToFloat:{type:"intToFloat",label:"Int → Float",category:"math",inputs:[{id:"in",label:"Int",type:_e.INT}],outputs:[{id:"out",label:"Float",type:_e.FLOAT}],params:{},shaderKey:null},uvGenerator:{type:"uvGenerator",label:"UV Generator",category:"uv",inputs:[],outputs:[{id:"out",label:"UV",type:_e.IMAGE}],params:{},shaderKey:"uvGenerator"},uvTransform:{type:"uvTransform",label:"UV Transform",category:"uv",inputs:[{id:"in",label:"Image",type:_e.IMAGE}],outputs:[{id:"out",label:"Image",type:_e.IMAGE}],params:{scaleX:{type:"float",default:1,min:.01,max:10,step:.01,label:"Scale X"},scaleY:{type:"float",default:1,min:.01,max:10,step:.01,label:"Scale Y"},rotation:{type:"float",default:0,min:0,max:360,step:1,label:"Rotation (°)"},translateX:{type:"float",default:0,min:-2,max:2,step:.01,label:"Translate X"},translateY:{type:"float",default:0,min:-2,max:2,step:.01,label:"Translate Y"}},shaderKey:"uvTransform"},uvRepeat:{type:"uvRepeat",label:"UV Repeat",category:"uv",inputs:[{id:"in",label:"Image",type:_e.IMAGE}],outputs:[{id:"out",label:"Image",type:_e.IMAGE}],params:{repeatX:{type:"float",default:2,min:.1,max:50,step:.1,label:"Repeat X"},repeatY:{type:"float",default:2,min:.1,max:50,step:.1,label:"Repeat Y"},mirror:{type:"bool",default:!1,label:"Mirror"},offsetX:{type:"float",default:0,min:0,max:1,step:.01,label:"Offset X"},offsetY:{type:"float",default:0,min:0,max:1,step:.01,label:"Offset Y"}},shaderKey:"uvRepeat"},uvGlitch:{type:"uvGlitch",label:"UV Glitch",category:"uv",inputs:[{id:"in",label:"Image",type:_e.IMAGE}],outputs:[{id:"out",label:"Image",type:_e.IMAGE}],params:{blockSize:{type:"int",default:8,min:1,max:128,step:1,label:"Block Size"},intensity:{type:"float",default:.1,min:0,max:1,step:.01,label:"Intensity"},seed:{type:"float",default:0,min:0,max:1e3,step:.1,label:"Seed"},direction:{type:"select",default:"horizontal",options:["horizontal","vertical","both"],label:"Direction"}},shaderKey:"uvGlitch"},uvPolar:{type:"uvPolar",label:"UV Polar",category:"uv",inputs:[{id:"in",label:"Image",type:_e.IMAGE}],outputs:[{id:"out",label:"Image",type:_e.IMAGE}],params:{mode:{type:"select",default:"toPolar",options:["toPolar","fromPolar"],label:"Mode"},centerX:{type:"float",default:.5,min:0,max:1,step:.01,label:"Center X"},centerY:{type:"float",default:.5,min:0,max:1,step:.01,label:"Center Y"}},shaderKey:"uvPolar"},numberMonitor:{type:"numberMonitor",label:"Number Monitor",category:"utility",inputs:[{id:"in",label:"Value",type:_e.FLOAT}],outputs:[{id:"out",label:"Value",type:_e.FLOAT}],params:{decimals:{type:"int",default:3,min:0,max:10,step:1,label:"Decimals"},showGraph:{type:"bool",default:!0,label:"Show Graph"}},shaderKey:null,isPassthrough:!0},preview:{type:"preview",label:"Preview",category:"utility",inputs:[{id:"in",label:"Image",type:_e.IMAGE}],outputs:[{id:"out",label:"Image",type:_e.IMAGE}],params:{},shaderKey:"passthrough",isPassthrough:!0},accelerometer:{type:"accelerometer",label:"Accelerometer",category:"trigger",compact:!0,inputs:[],outputs:[{id:"x",label:"X",type:_e.FLOAT},{id:"y",label:"Y",type:_e.FLOAT},{id:"z",label:"Z",type:_e.FLOAT}],params:{sensitivity:{type:"float",default:1,min:.01,max:10,step:.01,label:"Sensitivity"},smoothing:{type:"float",default:.5,min:0,max:.99,step:.01,label:"Smoothing"}},shaderKey:null,isAnimated:!0},xyPad:{type:"xyPad",label:"XY Pad",category:"trigger",inputs:[],outputs:[{id:"x",label:"X",type:_e.FLOAT},{id:"y",label:"Y",type:_e.FLOAT}],params:{x:{type:"float",default:.5,min:0,max:1,step:.001,label:"X"},y:{type:"float",default:.5,min:0,max:1,step:.001,label:"Y"},minX:{type:"float",default:0,min:-1e3,max:1e3,step:.01,label:"Min X"},maxX:{type:"float",default:1,min:-1e3,max:1e3,step:.01,label:"Max X"},minY:{type:"float",default:0,min:-1e3,max:1e3,step:.01,label:"Min Y"},maxY:{type:"float",default:1,min:-1e3,max:1e3,step:.01,label:"Max Y"}},shaderKey:null}},fu={image:{label:"Image",icon:"🖼️",color:"#00d4ff"},animation:{label:"Animation",icon:"⏱️",color:"#9b59b6"},trigger:{label:"Controls",icon:"🎛️",color:"#2ecc71"},logic:{label:"Logic",icon:"🧠",color:"#f39c12"},math:{label:"Math",icon:"🔢",color:"#ff9a2e"},uv:{label:"UV / Texture",icon:"🌀",color:"#ff6eb4"},utility:{label:"Utility",icon:"🔍",color:"#a0a0b0"}};function Xt(t){return Uh[t]||null}function FC(){return{...Uh}}function UC(t){return Object.values(Uh).filter(e=>e.category===t)}const OC={class:"node-palette__collapse-btn"},BC=["onClick"],kC={class:"node-palette__category-icon"},zC={class:"node-palette__category-label"},VC={style:{"font-size":"10px",color:"var(--text-muted)"}},$C=["onDragstart","onClick"],HC={__name:"NodePalette",emits:["addNode"],setup(t,{emit:e}){const n=fu,i=Ie(!1),r=Ur(Object.fromEntries(Object.keys(fu).map(l=>[l,!0])));function o(l){r[l]=!r[l]}function s(l){return UC(l)}function a(l,u){l.dataTransfer.setData("application/node-type",u),l.dataTransfer.effectAllowed="move"}return(l,u)=>(ce(),me("div",{class:ut(["node-palette",{"node-palette--collapsed":i.value}])},[Q("div",{class:"node-palette__header",onClick:u[0]||(u[0]=c=>i.value=!i.value),title:"Toggle node library"},[Dr(Q("span",null,"Node Library",512),[[Lr,!i.value]]),Q("span",OC,Te(i.value?"›":"‹"),1)]),i.value?Ge("",!0):(ce(!0),me(it,{key:0},Ht(fe(n),(c,d)=>(ce(),me("div",{key:d,class:"node-palette__category"},[Q("div",{class:"node-palette__category-header",onClick:f=>o(d)},[Q("span",kC,Te(c.icon),1),Q("span",zC,Te(c.label),1),Q("span",VC,Te(r[d]?"▾":"▸"),1)],8,BC),r[d]?(ce(!0),me(it,{key:0},Ht(s(d),f=>(ce(),me("div",{key:f.type,class:"node-palette__item",draggable:"true",onDragstart:h=>a(h,f.type),onClick:h=>l.$emit("addNode",f.type)},[Q("div",{class:"node-palette__item-dot",style:rt({background:c.color})},null,4),hi(" "+Te(f.label),1)],40,$C))),128)):Ge("",!0)]))),128))],2))}};function ha(t){return Uu()?(Ws(t),!0):!1}function $i(t){return typeof t=="function"?t():fe(t)}const GC=typeof window<"u"&&typeof document<"u",WC=t=>typeof t<"u",XC=Object.prototype.toString,YC=t=>XC.call(t)==="[object Object]",qC=()=>{};function KC(t,e){function n(...i){return new Promise((r,o)=>{Promise.resolve(t(()=>e.apply(this,i),{fn:e,thisArg:this,args:i})).then(r).catch(o)})}return n}const x_=t=>t();function ZC(t=x_){const e=Ie(!0);function n(){e.value=!1}function i(){e.value=!0}return{isActive:Ql(e),pause:n,resume:i,eventFilter:(...o)=>{e.value&&t(...o)}}}function Jm(t,e=!1,n="Timeout"){return new Promise((i,r)=>{setTimeout(e?()=>r(n):i,t)})}function jC(t,e,n={}){const{eventFilter:i=x_,...r}=n;return lt(t,KC(i,e),r)}function Xo(t,e,n={}){const{eventFilter:i,...r}=n,{eventFilter:o,pause:s,resume:a,isActive:l}=ZC(i);return{stop:jC(t,e,{...r,eventFilter:o}),pause:s,resume:a,isActive:l}}function JC(t,e={}){if(!Ut(t))return Ov(t);const n=Array.isArray(t.value)?Array.from({length:t.value.length}):{};for(const i in t.value)n[i]=tb(()=>({get(){return t.value[i]},set(r){var o;if((o=$i(e.replaceRef))!=null?o:!0)if(Array.isArray(t.value)){const a=[...t.value];a[i]=r,t.value=a}else{const a={...t.value,[i]:r};Object.setPrototypeOf(a,Object.getPrototypeOf(t.value)),t.value=a}else t.value[i]=r}}));return n}function Nf(t,e=!1){function n(d,{flush:f="sync",deep:h=!1,timeout:m,throwOnTimeout:v}={}){let g=null;const b=[new Promise(M=>{g=lt(t,_=>{d(_)!==e&&(g?.(),M(_))},{flush:f,deep:h,immediate:!0})})];return m!=null&&b.push(Jm(m,v).then(()=>$i(t)).finally(()=>g?.())),Promise.race(b)}function i(d,f){if(!Ut(d))return n(_=>_===d,f);const{flush:h="sync",deep:m=!1,timeout:v,throwOnTimeout:g}=f??{};let p=null;const M=[new Promise(_=>{p=lt([t,d],([P,D])=>{e!==(P===D)&&(p?.(),_(P))},{flush:h,deep:m,immediate:!0})})];return v!=null&&M.push(Jm(v,g).then(()=>$i(t)).finally(()=>(p?.(),$i(t)))),Promise.race(M)}function r(d){return n(f=>!!f,d)}function o(d){return i(null,d)}function s(d){return i(void 0,d)}function a(d){return n(Number.isNaN,d)}function l(d,f){return n(h=>{const m=Array.from(h);return m.includes(d)||m.includes($i(d))},f)}function u(d){return c(1,d)}function c(d=1,f){let h=-1;return n(()=>(h+=1,h>=d),f)}return Array.isArray($i(t))?{toMatch:n,toContains:l,changed:u,changedTimes:c,get not(){return Nf(t,!e)}}:{toMatch:n,toBe:i,toBeTruthy:r,toBeNull:o,toBeNaN:a,toBeUndefined:s,changed:u,changedTimes:c,get not(){return Nf(t,!e)}}}function Df(t){return Nf(t)}function QC(t){var e;const n=$i(t);return(e=n?.$el)!=null?e:n}const b_=GC?window:void 0;function S_(...t){let e,n,i,r;if(typeof t[0]=="string"||Array.isArray(t[0])?([n,i,r]=t,e=b_):[e,n,i,r]=t,!e)return qC;Array.isArray(n)||(n=[n]),Array.isArray(i)||(i=[i]);const o=[],s=()=>{o.forEach(c=>c()),o.length=0},a=(c,d,f,h)=>(c.addEventListener(d,f,h),()=>c.removeEventListener(d,f,h)),l=lt(()=>[QC(e),$i(r)],([c,d])=>{if(s(),!c)return;const f=YC(d)?{...d}:d;o.push(...n.flatMap(h=>i.map(m=>a(c,h,m,f))))},{immediate:!0,flush:"post"}),u=()=>{l(),s()};return ha(u),u}function e2(t){return typeof t=="function"?t:typeof t=="string"?e=>e.key===t:Array.isArray(t)?e=>t.includes(e.key):()=>!0}function Qm(...t){let e,n,i={};t.length===3?(e=t[0],n=t[1],i=t[2]):t.length===2?typeof t[1]=="object"?(e=!0,n=t[0],i=t[1]):(e=t[0],n=t[1]):(e=!0,n=t[0]);const{target:r=b_,eventName:o="keydown",passive:s=!1,dedupe:a=!1}=i,l=e2(e);return S_(r,o,c=>{c.repeat&&$i(a)||l(c)&&n(c)},s)}function t2(t){return JSON.parse(JSON.stringify(t))}function ld(t,e,n,i={}){var r,o,s;const{clone:a=!1,passive:l=!1,eventName:u,deep:c=!1,defaultValue:d,shouldEmit:f}=i,h=Mi(),m=n||h?.emit||((r=h?.$emit)==null?void 0:r.bind(h))||((s=(o=h?.proxy)==null?void 0:o.$emit)==null?void 0:s.bind(h?.proxy));let v=u;e||(e="modelValue"),v=v||`update:${e.toString()}`;const g=M=>a?typeof a=="function"?a(M):t2(M):M,p=()=>WC(t[e])?g(t[e]):d,b=M=>{f?f(M)&&m(v,M):m(v,M)};if(l){const M=p(),_=Ie(M);let P=!1;return lt(()=>t[e],D=>{P||(P=!0,_.value=g(D),rn(()=>P=!1))}),lt(_,D=>{!P&&(D!==t[e]||c)&&b(D)},{deep:c}),_}else return Re({get(){return p()},set(M){b(M)}})}var n2={value:()=>{}};function Ju(){for(var t=0,e=arguments.length,n={},i;t<e;++t){if(!(i=arguments[t]+"")||i in n||/[\s.]/.test(i))throw new Error("illegal type: "+i);n[i]=[]}return new Vl(n)}function Vl(t){this._=t}function i2(t,e){return t.trim().split(/^|\s+/).map(function(n){var i="",r=n.indexOf(".");if(r>=0&&(i=n.slice(r+1),n=n.slice(0,r)),n&&!e.hasOwnProperty(n))throw new Error("unknown type: "+n);return{type:n,name:i}})}Vl.prototype=Ju.prototype={constructor:Vl,on:function(t,e){var n=this._,i=i2(t+"",n),r,o=-1,s=i.length;if(arguments.length<2){for(;++o<s;)if((r=(t=i[o]).type)&&(r=r2(n[r],t.name)))return r;return}if(e!=null&&typeof e!="function")throw new Error("invalid callback: "+e);for(;++o<s;)if(r=(t=i[o]).type)n[r]=eg(n[r],t.name,e);else if(e==null)for(r in n)n[r]=eg(n[r],t.name,null);return this},copy:function(){var t={},e=this._;for(var n in e)t[n]=e[n].slice();return new Vl(t)},call:function(t,e){if((r=arguments.length-2)>0)for(var n=new Array(r),i=0,r,o;i<r;++i)n[i]=arguments[i+2];if(!this._.hasOwnProperty(t))throw new Error("unknown type: "+t);for(o=this._[t],i=0,r=o.length;i<r;++i)o[i].value.apply(e,n)},apply:function(t,e,n){if(!this._.hasOwnProperty(t))throw new Error("unknown type: "+t);for(var i=this._[t],r=0,o=i.length;r<o;++r)i[r].value.apply(e,n)}};function r2(t,e){for(var n=0,i=t.length,r;n<i;++n)if((r=t[n]).name===e)return r.value}function eg(t,e,n){for(var i=0,r=t.length;i<r;++i)if(t[i].name===e){t[i]=n2,t=t.slice(0,i).concat(t.slice(i+1));break}return n!=null&&t.push({name:e,value:n}),t}var Lf="http://www.w3.org/1999/xhtml";const tg={svg:"http://www.w3.org/2000/svg",xhtml:Lf,xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"};function Qu(t){var e=t+="",n=e.indexOf(":");return n>=0&&(e=t.slice(0,n))!=="xmlns"&&(t=t.slice(n+1)),tg.hasOwnProperty(e)?{space:tg[e],local:t}:t}function o2(t){return function(){var e=this.ownerDocument,n=this.namespaceURI;return n===Lf&&e.documentElement.namespaceURI===Lf?e.createElement(t):e.createElementNS(n,t)}}function s2(t){return function(){return this.ownerDocument.createElementNS(t.space,t.local)}}function M_(t){var e=Qu(t);return(e.local?s2:o2)(e)}function a2(){}function Oh(t){return t==null?a2:function(){return this.querySelector(t)}}function l2(t){typeof t!="function"&&(t=Oh(t));for(var e=this._groups,n=e.length,i=new Array(n),r=0;r<n;++r)for(var o=e[r],s=o.length,a=i[r]=new Array(s),l,u,c=0;c<s;++c)(l=o[c])&&(u=t.call(l,l.__data__,c,o))&&("__data__"in l&&(u.__data__=l.__data__),a[c]=u);return new Dn(i,this._parents)}function u2(t){return t==null?[]:Array.isArray(t)?t:Array.from(t)}function c2(){return[]}function w_(t){return t==null?c2:function(){return this.querySelectorAll(t)}}function d2(t){return function(){return u2(t.apply(this,arguments))}}function f2(t){typeof t=="function"?t=d2(t):t=w_(t);for(var e=this._groups,n=e.length,i=[],r=[],o=0;o<n;++o)for(var s=e[o],a=s.length,l,u=0;u<a;++u)(l=s[u])&&(i.push(t.call(l,l.__data__,u,s)),r.push(l));return new Dn(i,r)}function E_(t){return function(){return this.matches(t)}}function T_(t){return function(e){return e.matches(t)}}var h2=Array.prototype.find;function p2(t){return function(){return h2.call(this.children,t)}}function m2(){return this.firstElementChild}function g2(t){return this.select(t==null?m2:p2(typeof t=="function"?t:T_(t)))}var v2=Array.prototype.filter;function _2(){return Array.from(this.children)}function y2(t){return function(){return v2.call(this.children,t)}}function x2(t){return this.selectAll(t==null?_2:y2(typeof t=="function"?t:T_(t)))}function b2(t){typeof t!="function"&&(t=E_(t));for(var e=this._groups,n=e.length,i=new Array(n),r=0;r<n;++r)for(var o=e[r],s=o.length,a=i[r]=[],l,u=0;u<s;++u)(l=o[u])&&t.call(l,l.__data__,u,o)&&a.push(l);return new Dn(i,this._parents)}function A_(t){return new Array(t.length)}function S2(){return new Dn(this._enter||this._groups.map(A_),this._parents)}function hu(t,e){this.ownerDocument=t.ownerDocument,this.namespaceURI=t.namespaceURI,this._next=null,this._parent=t,this.__data__=e}hu.prototype={constructor:hu,appendChild:function(t){return this._parent.insertBefore(t,this._next)},insertBefore:function(t,e){return this._parent.insertBefore(t,e)},querySelector:function(t){return this._parent.querySelector(t)},querySelectorAll:function(t){return this._parent.querySelectorAll(t)}};function M2(t){return function(){return t}}function w2(t,e,n,i,r,o){for(var s=0,a,l=e.length,u=o.length;s<u;++s)(a=e[s])?(a.__data__=o[s],i[s]=a):n[s]=new hu(t,o[s]);for(;s<l;++s)(a=e[s])&&(r[s]=a)}function E2(t,e,n,i,r,o,s){var a,l,u=new Map,c=e.length,d=o.length,f=new Array(c),h;for(a=0;a<c;++a)(l=e[a])&&(f[a]=h=s.call(l,l.__data__,a,e)+"",u.has(h)?r[a]=l:u.set(h,l));for(a=0;a<d;++a)h=s.call(t,o[a],a,o)+"",(l=u.get(h))?(i[a]=l,l.__data__=o[a],u.delete(h)):n[a]=new hu(t,o[a]);for(a=0;a<c;++a)(l=e[a])&&u.get(f[a])===l&&(r[a]=l)}function T2(t){return t.__data__}function A2(t,e){if(!arguments.length)return Array.from(this,T2);var n=e?E2:w2,i=this._parents,r=this._groups;typeof t!="function"&&(t=M2(t));for(var o=r.length,s=new Array(o),a=new Array(o),l=new Array(o),u=0;u<o;++u){var c=i[u],d=r[u],f=d.length,h=C2(t.call(c,c&&c.__data__,u,i)),m=h.length,v=a[u]=new Array(m),g=s[u]=new Array(m),p=l[u]=new Array(f);n(c,d,v,g,p,h,e);for(var b=0,M=0,_,P;b<m;++b)if(_=v[b]){for(b>=M&&(M=b+1);!(P=g[M])&&++M<m;);_._next=P||null}}return s=new Dn(s,i),s._enter=a,s._exit=l,s}function C2(t){return typeof t=="object"&&"length"in t?t:Array.from(t)}function R2(){return new Dn(this._exit||this._groups.map(A_),this._parents)}function I2(t,e,n){var i=this.enter(),r=this,o=this.exit();return typeof t=="function"?(i=t(i),i&&(i=i.selection())):i=i.append(t+""),e!=null&&(r=e(r),r&&(r=r.selection())),n==null?o.remove():n(o),i&&r?i.merge(r).order():r}function P2(t){for(var e=t.selection?t.selection():t,n=this._groups,i=e._groups,r=n.length,o=i.length,s=Math.min(r,o),a=new Array(r),l=0;l<s;++l)for(var u=n[l],c=i[l],d=u.length,f=a[l]=new Array(d),h,m=0;m<d;++m)(h=u[m]||c[m])&&(f[m]=h);for(;l<r;++l)a[l]=n[l];return new Dn(a,this._parents)}function N2(){for(var t=this._groups,e=-1,n=t.length;++e<n;)for(var i=t[e],r=i.length-1,o=i[r],s;--r>=0;)(s=i[r])&&(o&&s.compareDocumentPosition(o)^4&&o.parentNode.insertBefore(s,o),o=s);return this}function D2(t){t||(t=L2);function e(d,f){return d&&f?t(d.__data__,f.__data__):!d-!f}for(var n=this._groups,i=n.length,r=new Array(i),o=0;o<i;++o){for(var s=n[o],a=s.length,l=r[o]=new Array(a),u,c=0;c<a;++c)(u=s[c])&&(l[c]=u);l.sort(e)}return new Dn(r,this._parents).order()}function L2(t,e){return t<e?-1:t>e?1:t>=e?0:NaN}function F2(){var t=arguments[0];return arguments[0]=this,t.apply(null,arguments),this}function U2(){return Array.from(this)}function O2(){for(var t=this._groups,e=0,n=t.length;e<n;++e)for(var i=t[e],r=0,o=i.length;r<o;++r){var s=i[r];if(s)return s}return null}function B2(){let t=0;for(const e of this)++t;return t}function k2(){return!this.node()}function z2(t){for(var e=this._groups,n=0,i=e.length;n<i;++n)for(var r=e[n],o=0,s=r.length,a;o<s;++o)(a=r[o])&&t.call(a,a.__data__,o,r);return this}function V2(t){return function(){this.removeAttribute(t)}}function $2(t){return function(){this.removeAttributeNS(t.space,t.local)}}function H2(t,e){return function(){this.setAttribute(t,e)}}function G2(t,e){return function(){this.setAttributeNS(t.space,t.local,e)}}function W2(t,e){return function(){var n=e.apply(this,arguments);n==null?this.removeAttribute(t):this.setAttribute(t,n)}}function X2(t,e){return function(){var n=e.apply(this,arguments);n==null?this.removeAttributeNS(t.space,t.local):this.setAttributeNS(t.space,t.local,n)}}function Y2(t,e){var n=Qu(t);if(arguments.length<2){var i=this.node();return n.local?i.getAttributeNS(n.space,n.local):i.getAttribute(n)}return this.each((e==null?n.local?$2:V2:typeof e=="function"?n.local?X2:W2:n.local?G2:H2)(n,e))}function C_(t){return t.ownerDocument&&t.ownerDocument.defaultView||t.document&&t||t.defaultView}function q2(t){return function(){this.style.removeProperty(t)}}function K2(t,e,n){return function(){this.style.setProperty(t,e,n)}}function Z2(t,e,n){return function(){var i=e.apply(this,arguments);i==null?this.style.removeProperty(t):this.style.setProperty(t,i,n)}}function j2(t,e,n){return arguments.length>1?this.each((e==null?q2:typeof e=="function"?Z2:K2)(t,e,n??"")):fs(this.node(),t)}function fs(t,e){return t.style.getPropertyValue(e)||C_(t).getComputedStyle(t,null).getPropertyValue(e)}function J2(t){return function(){delete this[t]}}function Q2(t,e){return function(){this[t]=e}}function eR(t,e){return function(){var n=e.apply(this,arguments);n==null?delete this[t]:this[t]=n}}function tR(t,e){return arguments.length>1?this.each((e==null?J2:typeof e=="function"?eR:Q2)(t,e)):this.node()[t]}function R_(t){return t.trim().split(/^|\s+/)}function Bh(t){return t.classList||new I_(t)}function I_(t){this._node=t,this._names=R_(t.getAttribute("class")||"")}I_.prototype={add:function(t){var e=this._names.indexOf(t);e<0&&(this._names.push(t),this._node.setAttribute("class",this._names.join(" ")))},remove:function(t){var e=this._names.indexOf(t);e>=0&&(this._names.splice(e,1),this._node.setAttribute("class",this._names.join(" ")))},contains:function(t){return this._names.indexOf(t)>=0}};function P_(t,e){for(var n=Bh(t),i=-1,r=e.length;++i<r;)n.add(e[i])}function N_(t,e){for(var n=Bh(t),i=-1,r=e.length;++i<r;)n.remove(e[i])}function nR(t){return function(){P_(this,t)}}function iR(t){return function(){N_(this,t)}}function rR(t,e){return function(){(e.apply(this,arguments)?P_:N_)(this,t)}}function oR(t,e){var n=R_(t+"");if(arguments.length<2){for(var i=Bh(this.node()),r=-1,o=n.length;++r<o;)if(!i.contains(n[r]))return!1;return!0}return this.each((typeof e=="function"?rR:e?nR:iR)(n,e))}function sR(){this.textContent=""}function aR(t){return function(){this.textContent=t}}function lR(t){return function(){var e=t.apply(this,arguments);this.textContent=e??""}}function uR(t){return arguments.length?this.each(t==null?sR:(typeof t=="function"?lR:aR)(t)):this.node().textContent}function cR(){this.innerHTML=""}function dR(t){return function(){this.innerHTML=t}}function fR(t){return function(){var e=t.apply(this,arguments);this.innerHTML=e??""}}function hR(t){return arguments.length?this.each(t==null?cR:(typeof t=="function"?fR:dR)(t)):this.node().innerHTML}function pR(){this.nextSibling&&this.parentNode.appendChild(this)}function mR(){return this.each(pR)}function gR(){this.previousSibling&&this.parentNode.insertBefore(this,this.parentNode.firstChild)}function vR(){return this.each(gR)}function _R(t){var e=typeof t=="function"?t:M_(t);return this.select(function(){return this.appendChild(e.apply(this,arguments))})}function yR(){return null}function xR(t,e){var n=typeof t=="function"?t:M_(t),i=e==null?yR:typeof e=="function"?e:Oh(e);return this.select(function(){return this.insertBefore(n.apply(this,arguments),i.apply(this,arguments)||null)})}function bR(){var t=this.parentNode;t&&t.removeChild(this)}function SR(){return this.each(bR)}function MR(){var t=this.cloneNode(!1),e=this.parentNode;return e?e.insertBefore(t,this.nextSibling):t}function wR(){var t=this.cloneNode(!0),e=this.parentNode;return e?e.insertBefore(t,this.nextSibling):t}function ER(t){return this.select(t?wR:MR)}function TR(t){return arguments.length?this.property("__data__",t):this.node().__data__}function AR(t){return function(e){t.call(this,e,this.__data__)}}function CR(t){return t.trim().split(/^|\s+/).map(function(e){var n="",i=e.indexOf(".");return i>=0&&(n=e.slice(i+1),e=e.slice(0,i)),{type:e,name:n}})}function RR(t){return function(){var e=this.__on;if(e){for(var n=0,i=-1,r=e.length,o;n<r;++n)o=e[n],(!t.type||o.type===t.type)&&o.name===t.name?this.removeEventListener(o.type,o.listener,o.options):e[++i]=o;++i?e.length=i:delete this.__on}}}function IR(t,e,n){return function(){var i=this.__on,r,o=AR(e);if(i){for(var s=0,a=i.length;s<a;++s)if((r=i[s]).type===t.type&&r.name===t.name){this.removeEventListener(r.type,r.listener,r.options),this.addEventListener(r.type,r.listener=o,r.options=n),r.value=e;return}}this.addEventListener(t.type,o,n),r={type:t.type,name:t.name,value:e,listener:o,options:n},i?i.push(r):this.__on=[r]}}function PR(t,e,n){var i=CR(t+""),r,o=i.length,s;if(arguments.length<2){var a=this.node().__on;if(a){for(var l=0,u=a.length,c;l<u;++l)for(r=0,c=a[l];r<o;++r)if((s=i[r]).type===c.type&&s.name===c.name)return c.value}return}for(a=e?IR:RR,r=0;r<o;++r)this.each(a(i[r],e,n));return this}function D_(t,e,n){var i=C_(t),r=i.CustomEvent;typeof r=="function"?r=new r(e,n):(r=i.document.createEvent("Event"),n?(r.initEvent(e,n.bubbles,n.cancelable),r.detail=n.detail):r.initEvent(e,!1,!1)),t.dispatchEvent(r)}function NR(t,e){return function(){return D_(this,t,e)}}function DR(t,e){return function(){return D_(this,t,e.apply(this,arguments))}}function LR(t,e){return this.each((typeof e=="function"?DR:NR)(t,e))}function*FR(){for(var t=this._groups,e=0,n=t.length;e<n;++e)for(var i=t[e],r=0,o=i.length,s;r<o;++r)(s=i[r])&&(yield s)}var L_=[null];function Dn(t,e){this._groups=t,this._parents=e}function Fa(){return new Dn([[document.documentElement]],L_)}function UR(){return this}Dn.prototype=Fa.prototype={constructor:Dn,select:l2,selectAll:f2,selectChild:g2,selectChildren:x2,filter:b2,data:A2,enter:S2,exit:R2,join:I2,merge:P2,selection:UR,order:N2,sort:D2,call:F2,nodes:U2,node:O2,size:B2,empty:k2,each:z2,attr:Y2,style:j2,property:tR,classed:oR,text:uR,html:hR,raise:mR,lower:vR,append:_R,insert:xR,remove:SR,clone:ER,datum:TR,on:PR,dispatch:LR,[Symbol.iterator]:FR};function Xn(t){return typeof t=="string"?new Dn([[document.querySelector(t)]],[document.documentElement]):new Dn([[t]],L_)}function OR(t){let e;for(;e=t.sourceEvent;)t=e;return t}function li(t,e){if(t=OR(t),e===void 0&&(e=t.currentTarget),e){var n=e.ownerSVGElement||e;if(n.createSVGPoint){var i=n.createSVGPoint();return i.x=t.clientX,i.y=t.clientY,i=i.matrixTransform(e.getScreenCTM().inverse()),[i.x,i.y]}if(e.getBoundingClientRect){var r=e.getBoundingClientRect();return[t.clientX-r.left-e.clientLeft,t.clientY-r.top-e.clientTop]}}return[t.pageX,t.pageY]}const BR={passive:!1},pa={capture:!0,passive:!1};function ud(t){t.stopImmediatePropagation()}function ts(t){t.preventDefault(),t.stopImmediatePropagation()}function F_(t){var e=t.document.documentElement,n=Xn(t).on("dragstart.drag",ts,pa);"onselectstart"in e?n.on("selectstart.drag",ts,pa):(e.__noselect=e.style.MozUserSelect,e.style.MozUserSelect="none")}function U_(t,e){var n=t.document.documentElement,i=Xn(t).on("dragstart.drag",null);e&&(i.on("click.drag",ts,pa),setTimeout(function(){i.on("click.drag",null)},0)),"onselectstart"in n?i.on("selectstart.drag",null):(n.style.MozUserSelect=n.__noselect,delete n.__noselect)}const ml=t=>()=>t;function Ff(t,{sourceEvent:e,subject:n,target:i,identifier:r,active:o,x:s,y:a,dx:l,dy:u,dispatch:c}){Object.defineProperties(this,{type:{value:t,enumerable:!0,configurable:!0},sourceEvent:{value:e,enumerable:!0,configurable:!0},subject:{value:n,enumerable:!0,configurable:!0},target:{value:i,enumerable:!0,configurable:!0},identifier:{value:r,enumerable:!0,configurable:!0},active:{value:o,enumerable:!0,configurable:!0},x:{value:s,enumerable:!0,configurable:!0},y:{value:a,enumerable:!0,configurable:!0},dx:{value:l,enumerable:!0,configurable:!0},dy:{value:u,enumerable:!0,configurable:!0},_:{value:c}})}Ff.prototype.on=function(){var t=this._.on.apply(this._,arguments);return t===this._?this:t};function kR(t){return!t.ctrlKey&&!t.button}function zR(){return this.parentNode}function VR(t,e){return e??{x:t.x,y:t.y}}function $R(){return navigator.maxTouchPoints||"ontouchstart"in this}function HR(){var t=kR,e=zR,n=VR,i=$R,r={},o=Ju("start","drag","end"),s=0,a,l,u,c,d=0;function f(_){_.on("mousedown.drag",h).filter(i).on("touchstart.drag",g).on("touchmove.drag",p,BR).on("touchend.drag touchcancel.drag",b).style("touch-action","none").style("-webkit-tap-highlight-color","rgba(0,0,0,0)")}function h(_,P){if(!(c||!t.call(this,_,P))){var D=M(this,e.call(this,_,P),_,P,"mouse");D&&(Xn(_.view).on("mousemove.drag",m,pa).on("mouseup.drag",v,pa),F_(_.view),ud(_),u=!1,a=_.clientX,l=_.clientY,D("start",_))}}function m(_){if(ts(_),!u){var P=_.clientX-a,D=_.clientY-l;u=P*P+D*D>d}r.mouse("drag",_)}function v(_){Xn(_.view).on("mousemove.drag mouseup.drag",null),U_(_.view,u),ts(_),r.mouse("end",_)}function g(_,P){if(t.call(this,_,P)){var D=_.changedTouches,B=e.call(this,_,P),y=D.length,x,T;for(x=0;x<y;++x)(T=M(this,B,_,P,D[x].identifier,D[x]))&&(ud(_),T("start",_,D[x]))}}function p(_){var P=_.changedTouches,D=P.length,B,y;for(B=0;B<D;++B)(y=r[P[B].identifier])&&(ts(_),y("drag",_,P[B]))}function b(_){var P=_.changedTouches,D=P.length,B,y;for(c&&clearTimeout(c),c=setTimeout(function(){c=null},500),B=0;B<D;++B)(y=r[P[B].identifier])&&(ud(_),y("end",_,P[B]))}function M(_,P,D,B,y,x){var T=o.copy(),E=li(x||D,P),I,q,w;if((w=n.call(_,new Ff("beforestart",{sourceEvent:D,target:f,identifier:y,active:s,x:E[0],y:E[1],dx:0,dy:0,dispatch:T}),B))!=null)return I=w.x-E[0]||0,q=w.y-E[1]||0,function k(A,N,O){var $=E,K;switch(A){case"start":r[y]=k,K=s++;break;case"end":delete r[y],--s;case"drag":E=li(O||N,P),K=s;break}T.call(A,_,new Ff(A,{sourceEvent:N,subject:w,target:f,identifier:y,active:K,x:E[0]+I,y:E[1]+q,dx:E[0]-$[0],dy:E[1]-$[1],dispatch:T}),B)}}return f.filter=function(_){return arguments.length?(t=typeof _=="function"?_:ml(!!_),f):t},f.container=function(_){return arguments.length?(e=typeof _=="function"?_:ml(_),f):e},f.subject=function(_){return arguments.length?(n=typeof _=="function"?_:ml(_),f):n},f.touchable=function(_){return arguments.length?(i=typeof _=="function"?_:ml(!!_),f):i},f.on=function(){var _=o.on.apply(o,arguments);return _===o?f:_},f.clickDistance=function(_){return arguments.length?(d=(_=+_)*_,f):Math.sqrt(d)},f}function kh(t,e,n){t.prototype=e.prototype=n,n.constructor=t}function O_(t,e){var n=Object.create(t.prototype);for(var i in e)n[i]=e[i];return n}function Ua(){}var ma=.7,pu=1/ma,ns="\\s*([+-]?\\d+)\\s*",ga="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",yi="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",GR=/^#([0-9a-f]{3,8})$/,WR=new RegExp(`^rgb\\(${ns},${ns},${ns}\\)$`),XR=new RegExp(`^rgb\\(${yi},${yi},${yi}\\)$`),YR=new RegExp(`^rgba\\(${ns},${ns},${ns},${ga}\\)$`),qR=new RegExp(`^rgba\\(${yi},${yi},${yi},${ga}\\)$`),KR=new RegExp(`^hsl\\(${ga},${yi},${yi}\\)$`),ZR=new RegExp(`^hsla\\(${ga},${yi},${yi},${ga}\\)$`),ng={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};kh(Ua,Mo,{copy(t){return Object.assign(new this.constructor,this,t)},displayable(){return this.rgb().displayable()},hex:ig,formatHex:ig,formatHex8:jR,formatHsl:JR,formatRgb:rg,toString:rg});function ig(){return this.rgb().formatHex()}function jR(){return this.rgb().formatHex8()}function JR(){return B_(this).formatHsl()}function rg(){return this.rgb().formatRgb()}function Mo(t){var e,n;return t=(t+"").trim().toLowerCase(),(e=GR.exec(t))?(n=e[1].length,e=parseInt(e[1],16),n===6?og(e):n===3?new wn(e>>8&15|e>>4&240,e>>4&15|e&240,(e&15)<<4|e&15,1):n===8?gl(e>>24&255,e>>16&255,e>>8&255,(e&255)/255):n===4?gl(e>>12&15|e>>8&240,e>>8&15|e>>4&240,e>>4&15|e&240,((e&15)<<4|e&15)/255):null):(e=WR.exec(t))?new wn(e[1],e[2],e[3],1):(e=XR.exec(t))?new wn(e[1]*255/100,e[2]*255/100,e[3]*255/100,1):(e=YR.exec(t))?gl(e[1],e[2],e[3],e[4]):(e=qR.exec(t))?gl(e[1]*255/100,e[2]*255/100,e[3]*255/100,e[4]):(e=KR.exec(t))?lg(e[1],e[2]/100,e[3]/100,1):(e=ZR.exec(t))?lg(e[1],e[2]/100,e[3]/100,e[4]):ng.hasOwnProperty(t)?og(ng[t]):t==="transparent"?new wn(NaN,NaN,NaN,0):null}function og(t){return new wn(t>>16&255,t>>8&255,t&255,1)}function gl(t,e,n,i){return i<=0&&(t=e=n=NaN),new wn(t,e,n,i)}function QR(t){return t instanceof Ua||(t=Mo(t)),t?(t=t.rgb(),new wn(t.r,t.g,t.b,t.opacity)):new wn}function Uf(t,e,n,i){return arguments.length===1?QR(t):new wn(t,e,n,i??1)}function wn(t,e,n,i){this.r=+t,this.g=+e,this.b=+n,this.opacity=+i}kh(wn,Uf,O_(Ua,{brighter(t){return t=t==null?pu:Math.pow(pu,t),new wn(this.r*t,this.g*t,this.b*t,this.opacity)},darker(t){return t=t==null?ma:Math.pow(ma,t),new wn(this.r*t,this.g*t,this.b*t,this.opacity)},rgb(){return this},clamp(){return new wn(_o(this.r),_o(this.g),_o(this.b),mu(this.opacity))},displayable(){return-.5<=this.r&&this.r<255.5&&-.5<=this.g&&this.g<255.5&&-.5<=this.b&&this.b<255.5&&0<=this.opacity&&this.opacity<=1},hex:sg,formatHex:sg,formatHex8:eI,formatRgb:ag,toString:ag}));function sg(){return`#${ho(this.r)}${ho(this.g)}${ho(this.b)}`}function eI(){return`#${ho(this.r)}${ho(this.g)}${ho(this.b)}${ho((isNaN(this.opacity)?1:this.opacity)*255)}`}function ag(){const t=mu(this.opacity);return`${t===1?"rgb(":"rgba("}${_o(this.r)}, ${_o(this.g)}, ${_o(this.b)}${t===1?")":`, ${t})`}`}function mu(t){return isNaN(t)?1:Math.max(0,Math.min(1,t))}function _o(t){return Math.max(0,Math.min(255,Math.round(t)||0))}function ho(t){return t=_o(t),(t<16?"0":"")+t.toString(16)}function lg(t,e,n,i){return i<=0?t=e=n=NaN:n<=0||n>=1?t=e=NaN:e<=0&&(t=NaN),new Yn(t,e,n,i)}function B_(t){if(t instanceof Yn)return new Yn(t.h,t.s,t.l,t.opacity);if(t instanceof Ua||(t=Mo(t)),!t)return new Yn;if(t instanceof Yn)return t;t=t.rgb();var e=t.r/255,n=t.g/255,i=t.b/255,r=Math.min(e,n,i),o=Math.max(e,n,i),s=NaN,a=o-r,l=(o+r)/2;return a?(e===o?s=(n-i)/a+(n<i)*6:n===o?s=(i-e)/a+2:s=(e-n)/a+4,a/=l<.5?o+r:2-o-r,s*=60):a=l>0&&l<1?0:s,new Yn(s,a,l,t.opacity)}function tI(t,e,n,i){return arguments.length===1?B_(t):new Yn(t,e,n,i??1)}function Yn(t,e,n,i){this.h=+t,this.s=+e,this.l=+n,this.opacity=+i}kh(Yn,tI,O_(Ua,{brighter(t){return t=t==null?pu:Math.pow(pu,t),new Yn(this.h,this.s,this.l*t,this.opacity)},darker(t){return t=t==null?ma:Math.pow(ma,t),new Yn(this.h,this.s,this.l*t,this.opacity)},rgb(){var t=this.h%360+(this.h<0)*360,e=isNaN(t)||isNaN(this.s)?0:this.s,n=this.l,i=n+(n<.5?n:1-n)*e,r=2*n-i;return new wn(cd(t>=240?t-240:t+120,r,i),cd(t,r,i),cd(t<120?t+240:t-120,r,i),this.opacity)},clamp(){return new Yn(ug(this.h),vl(this.s),vl(this.l),mu(this.opacity))},displayable(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1},formatHsl(){const t=mu(this.opacity);return`${t===1?"hsl(":"hsla("}${ug(this.h)}, ${vl(this.s)*100}%, ${vl(this.l)*100}%${t===1?")":`, ${t})`}`}}));function ug(t){return t=(t||0)%360,t<0?t+360:t}function vl(t){return Math.max(0,Math.min(1,t||0))}function cd(t,e,n){return(t<60?e+(n-e)*t/60:t<180?n:t<240?e+(n-e)*(240-t)/60:e)*255}const zh=t=>()=>t;function nI(t,e){return function(n){return t+n*e}}function iI(t,e,n){return t=Math.pow(t,n),e=Math.pow(e,n)-t,n=1/n,function(i){return Math.pow(t+i*e,n)}}function rI(t){return(t=+t)==1?k_:function(e,n){return n-e?iI(e,n,t):zh(isNaN(e)?n:e)}}function k_(t,e){var n=e-t;return n?nI(t,n):zh(isNaN(t)?e:t)}const gu=(function t(e){var n=rI(e);function i(r,o){var s=n((r=Uf(r)).r,(o=Uf(o)).r),a=n(r.g,o.g),l=n(r.b,o.b),u=k_(r.opacity,o.opacity);return function(c){return r.r=s(c),r.g=a(c),r.b=l(c),r.opacity=u(c),r+""}}return i.gamma=t,i})(1);function oI(t,e){e||(e=[]);var n=t?Math.min(e.length,t.length):0,i=e.slice(),r;return function(o){for(r=0;r<n;++r)i[r]=t[r]*(1-o)+e[r]*o;return i}}function sI(t){return ArrayBuffer.isView(t)&&!(t instanceof DataView)}function aI(t,e){var n=e?e.length:0,i=t?Math.min(n,t.length):0,r=new Array(i),o=new Array(n),s;for(s=0;s<i;++s)r[s]=Qs(t[s],e[s]);for(;s<n;++s)o[s]=e[s];return function(a){for(s=0;s<i;++s)o[s]=r[s](a);return o}}function lI(t,e){var n=new Date;return t=+t,e=+e,function(i){return n.setTime(t*(1-i)+e*i),n}}function di(t,e){return t=+t,e=+e,function(n){return t*(1-n)+e*n}}function uI(t,e){var n={},i={},r;(t===null||typeof t!="object")&&(t={}),(e===null||typeof e!="object")&&(e={});for(r in e)r in t?n[r]=Qs(t[r],e[r]):i[r]=e[r];return function(o){for(r in n)i[r]=n[r](o);return i}}var Of=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,dd=new RegExp(Of.source,"g");function cI(t){return function(){return t}}function dI(t){return function(e){return t(e)+""}}function z_(t,e){var n=Of.lastIndex=dd.lastIndex=0,i,r,o,s=-1,a=[],l=[];for(t=t+"",e=e+"";(i=Of.exec(t))&&(r=dd.exec(e));)(o=r.index)>n&&(o=e.slice(n,o),a[s]?a[s]+=o:a[++s]=o),(i=i[0])===(r=r[0])?a[s]?a[s]+=r:a[++s]=r:(a[++s]=null,l.push({i:s,x:di(i,r)})),n=dd.lastIndex;return n<e.length&&(o=e.slice(n),a[s]?a[s]+=o:a[++s]=o),a.length<2?l[0]?dI(l[0].x):cI(e):(e=l.length,function(u){for(var c=0,d;c<e;++c)a[(d=l[c]).i]=d.x(u);return a.join("")})}function Qs(t,e){var n=typeof e,i;return e==null||n==="boolean"?zh(e):(n==="number"?di:n==="string"?(i=Mo(e))?(e=i,gu):z_:e instanceof Mo?gu:e instanceof Date?lI:sI(e)?oI:Array.isArray(e)?aI:typeof e.valueOf!="function"&&typeof e.toString!="function"||isNaN(e)?uI:di)(t,e)}var cg=180/Math.PI,Bf={translateX:0,translateY:0,rotate:0,skewX:0,scaleX:1,scaleY:1};function V_(t,e,n,i,r,o){var s,a,l;return(s=Math.sqrt(t*t+e*e))&&(t/=s,e/=s),(l=t*n+e*i)&&(n-=t*l,i-=e*l),(a=Math.sqrt(n*n+i*i))&&(n/=a,i/=a,l/=a),t*i<e*n&&(t=-t,e=-e,l=-l,s=-s),{translateX:r,translateY:o,rotate:Math.atan2(e,t)*cg,skewX:Math.atan(l)*cg,scaleX:s,scaleY:a}}var _l;function fI(t){const e=new(typeof DOMMatrix=="function"?DOMMatrix:WebKitCSSMatrix)(t+"");return e.isIdentity?Bf:V_(e.a,e.b,e.c,e.d,e.e,e.f)}function hI(t){return t==null||(_l||(_l=document.createElementNS("http://www.w3.org/2000/svg","g")),_l.setAttribute("transform",t),!(t=_l.transform.baseVal.consolidate()))?Bf:(t=t.matrix,V_(t.a,t.b,t.c,t.d,t.e,t.f))}function $_(t,e,n,i){function r(u){return u.length?u.pop()+" ":""}function o(u,c,d,f,h,m){if(u!==d||c!==f){var v=h.push("translate(",null,e,null,n);m.push({i:v-4,x:di(u,d)},{i:v-2,x:di(c,f)})}else(d||f)&&h.push("translate("+d+e+f+n)}function s(u,c,d,f){u!==c?(u-c>180?c+=360:c-u>180&&(u+=360),f.push({i:d.push(r(d)+"rotate(",null,i)-2,x:di(u,c)})):c&&d.push(r(d)+"rotate("+c+i)}function a(u,c,d,f){u!==c?f.push({i:d.push(r(d)+"skewX(",null,i)-2,x:di(u,c)}):c&&d.push(r(d)+"skewX("+c+i)}function l(u,c,d,f,h,m){if(u!==d||c!==f){var v=h.push(r(h)+"scale(",null,",",null,")");m.push({i:v-4,x:di(u,d)},{i:v-2,x:di(c,f)})}else(d!==1||f!==1)&&h.push(r(h)+"scale("+d+","+f+")")}return function(u,c){var d=[],f=[];return u=t(u),c=t(c),o(u.translateX,u.translateY,c.translateX,c.translateY,d,f),s(u.rotate,c.rotate,d,f),a(u.skewX,c.skewX,d,f),l(u.scaleX,u.scaleY,c.scaleX,c.scaleY,d,f),u=c=null,function(h){for(var m=-1,v=f.length,g;++m<v;)d[(g=f[m]).i]=g.x(h);return d.join("")}}}var pI=$_(fI,"px, ","px)","deg)"),mI=$_(hI,", ",")",")"),gI=1e-12;function dg(t){return((t=Math.exp(t))+1/t)/2}function vI(t){return((t=Math.exp(t))-1/t)/2}function _I(t){return((t=Math.exp(2*t))-1)/(t+1)}const $l=(function t(e,n,i){function r(o,s){var a=o[0],l=o[1],u=o[2],c=s[0],d=s[1],f=s[2],h=c-a,m=d-l,v=h*h+m*m,g,p;if(v<gI)p=Math.log(f/u)/e,g=function(B){return[a+B*h,l+B*m,u*Math.exp(e*B*p)]};else{var b=Math.sqrt(v),M=(f*f-u*u+i*v)/(2*u*n*b),_=(f*f-u*u-i*v)/(2*f*n*b),P=Math.log(Math.sqrt(M*M+1)-M),D=Math.log(Math.sqrt(_*_+1)-_);p=(D-P)/e,g=function(B){var y=B*p,x=dg(P),T=u/(n*b)*(x*_I(e*y+P)-vI(P));return[a+T*h,l+T*m,u*x/dg(e*y+P)]}}return g.duration=p*1e3*e/Math.SQRT2,g}return r.rho=function(o){var s=Math.max(.001,+o),a=s*s,l=a*a;return t(s,a,l)},r})(Math.SQRT2,2,4);var hs=0,ks=0,Ns=0,H_=1e3,vu,zs,_u=0,wo=0,ec=0,va=typeof performance=="object"&&performance.now?performance:Date,G_=typeof window=="object"&&window.requestAnimationFrame?window.requestAnimationFrame.bind(window):function(t){setTimeout(t,17)};function Vh(){return wo||(G_(yI),wo=va.now()+ec)}function yI(){wo=0}function yu(){this._call=this._time=this._next=null}yu.prototype=W_.prototype={constructor:yu,restart:function(t,e,n){if(typeof t!="function")throw new TypeError("callback is not a function");n=(n==null?Vh():+n)+(e==null?0:+e),!this._next&&zs!==this&&(zs?zs._next=this:vu=this,zs=this),this._call=t,this._time=n,kf()},stop:function(){this._call&&(this._call=null,this._time=1/0,kf())}};function W_(t,e,n){var i=new yu;return i.restart(t,e,n),i}function xI(){Vh(),++hs;for(var t=vu,e;t;)(e=wo-t._time)>=0&&t._call.call(void 0,e),t=t._next;--hs}function fg(){wo=(_u=va.now())+ec,hs=ks=0;try{xI()}finally{hs=0,SI(),wo=0}}function bI(){var t=va.now(),e=t-_u;e>H_&&(ec-=e,_u=t)}function SI(){for(var t,e=vu,n,i=1/0;e;)e._call?(i>e._time&&(i=e._time),t=e,e=e._next):(n=e._next,e._next=null,e=t?t._next=n:vu=n);zs=t,kf(i)}function kf(t){if(!hs){ks&&(ks=clearTimeout(ks));var e=t-wo;e>24?(t<1/0&&(ks=setTimeout(fg,t-va.now()-ec)),Ns&&(Ns=clearInterval(Ns))):(Ns||(_u=va.now(),Ns=setInterval(bI,H_)),hs=1,G_(fg))}}function hg(t,e,n){var i=new yu;return e=e==null?0:+e,i.restart(r=>{i.stop(),t(r+e)},e,n),i}var MI=Ju("start","end","cancel","interrupt"),wI=[],X_=0,pg=1,zf=2,Hl=3,mg=4,Vf=5,Gl=6;function tc(t,e,n,i,r,o){var s=t.__transition;if(!s)t.__transition={};else if(n in s)return;EI(t,n,{name:e,index:i,group:r,on:MI,tween:wI,time:o.time,delay:o.delay,duration:o.duration,ease:o.ease,timer:null,state:X_})}function $h(t,e){var n=ei(t,e);if(n.state>X_)throw new Error("too late; already scheduled");return n}function wi(t,e){var n=ei(t,e);if(n.state>Hl)throw new Error("too late; already running");return n}function ei(t,e){var n=t.__transition;if(!n||!(n=n[e]))throw new Error("transition not found");return n}function EI(t,e,n){var i=t.__transition,r;i[e]=n,n.timer=W_(o,0,n.time);function o(u){n.state=pg,n.timer.restart(s,n.delay,n.time),n.delay<=u&&s(u-n.delay)}function s(u){var c,d,f,h;if(n.state!==pg)return l();for(c in i)if(h=i[c],h.name===n.name){if(h.state===Hl)return hg(s);h.state===mg?(h.state=Gl,h.timer.stop(),h.on.call("interrupt",t,t.__data__,h.index,h.group),delete i[c]):+c<e&&(h.state=Gl,h.timer.stop(),h.on.call("cancel",t,t.__data__,h.index,h.group),delete i[c])}if(hg(function(){n.state===Hl&&(n.state=mg,n.timer.restart(a,n.delay,n.time),a(u))}),n.state=zf,n.on.call("start",t,t.__data__,n.index,n.group),n.state===zf){for(n.state=Hl,r=new Array(f=n.tween.length),c=0,d=-1;c<f;++c)(h=n.tween[c].value.call(t,t.__data__,n.index,n.group))&&(r[++d]=h);r.length=d+1}}function a(u){for(var c=u<n.duration?n.ease.call(null,u/n.duration):(n.timer.restart(l),n.state=Vf,1),d=-1,f=r.length;++d<f;)r[d].call(t,c);n.state===Vf&&(n.on.call("end",t,t.__data__,n.index,n.group),l())}function l(){n.state=Gl,n.timer.stop(),delete i[e];for(var u in i)return;delete t.__transition}}function Wl(t,e){var n=t.__transition,i,r,o=!0,s;if(n){e=e==null?null:e+"";for(s in n){if((i=n[s]).name!==e){o=!1;continue}r=i.state>zf&&i.state<Vf,i.state=Gl,i.timer.stop(),i.on.call(r?"interrupt":"cancel",t,t.__data__,i.index,i.group),delete n[s]}o&&delete t.__transition}}function TI(t){return this.each(function(){Wl(this,t)})}function AI(t,e){var n,i;return function(){var r=wi(this,t),o=r.tween;if(o!==n){i=n=o;for(var s=0,a=i.length;s<a;++s)if(i[s].name===e){i=i.slice(),i.splice(s,1);break}}r.tween=i}}function CI(t,e,n){var i,r;if(typeof n!="function")throw new Error;return function(){var o=wi(this,t),s=o.tween;if(s!==i){r=(i=s).slice();for(var a={name:e,value:n},l=0,u=r.length;l<u;++l)if(r[l].name===e){r[l]=a;break}l===u&&r.push(a)}o.tween=r}}function RI(t,e){var n=this._id;if(t+="",arguments.length<2){for(var i=ei(this.node(),n).tween,r=0,o=i.length,s;r<o;++r)if((s=i[r]).name===t)return s.value;return null}return this.each((e==null?AI:CI)(n,t,e))}function Hh(t,e,n){var i=t._id;return t.each(function(){var r=wi(this,i);(r.value||(r.value={}))[e]=n.apply(this,arguments)}),function(r){return ei(r,i).value[e]}}function Y_(t,e){var n;return(typeof e=="number"?di:e instanceof Mo?gu:(n=Mo(e))?(e=n,gu):z_)(t,e)}function II(t){return function(){this.removeAttribute(t)}}function PI(t){return function(){this.removeAttributeNS(t.space,t.local)}}function NI(t,e,n){var i,r=n+"",o;return function(){var s=this.getAttribute(t);return s===r?null:s===i?o:o=e(i=s,n)}}function DI(t,e,n){var i,r=n+"",o;return function(){var s=this.getAttributeNS(t.space,t.local);return s===r?null:s===i?o:o=e(i=s,n)}}function LI(t,e,n){var i,r,o;return function(){var s,a=n(this),l;return a==null?void this.removeAttribute(t):(s=this.getAttribute(t),l=a+"",s===l?null:s===i&&l===r?o:(r=l,o=e(i=s,a)))}}function FI(t,e,n){var i,r,o;return function(){var s,a=n(this),l;return a==null?void this.removeAttributeNS(t.space,t.local):(s=this.getAttributeNS(t.space,t.local),l=a+"",s===l?null:s===i&&l===r?o:(r=l,o=e(i=s,a)))}}function UI(t,e){var n=Qu(t),i=n==="transform"?mI:Y_;return this.attrTween(t,typeof e=="function"?(n.local?FI:LI)(n,i,Hh(this,"attr."+t,e)):e==null?(n.local?PI:II)(n):(n.local?DI:NI)(n,i,e))}function OI(t,e){return function(n){this.setAttribute(t,e.call(this,n))}}function BI(t,e){return function(n){this.setAttributeNS(t.space,t.local,e.call(this,n))}}function kI(t,e){var n,i;function r(){var o=e.apply(this,arguments);return o!==i&&(n=(i=o)&&BI(t,o)),n}return r._value=e,r}function zI(t,e){var n,i;function r(){var o=e.apply(this,arguments);return o!==i&&(n=(i=o)&&OI(t,o)),n}return r._value=e,r}function VI(t,e){var n="attr."+t;if(arguments.length<2)return(n=this.tween(n))&&n._value;if(e==null)return this.tween(n,null);if(typeof e!="function")throw new Error;var i=Qu(t);return this.tween(n,(i.local?kI:zI)(i,e))}function $I(t,e){return function(){$h(this,t).delay=+e.apply(this,arguments)}}function HI(t,e){return e=+e,function(){$h(this,t).delay=e}}function GI(t){var e=this._id;return arguments.length?this.each((typeof t=="function"?$I:HI)(e,t)):ei(this.node(),e).delay}function WI(t,e){return function(){wi(this,t).duration=+e.apply(this,arguments)}}function XI(t,e){return e=+e,function(){wi(this,t).duration=e}}function YI(t){var e=this._id;return arguments.length?this.each((typeof t=="function"?WI:XI)(e,t)):ei(this.node(),e).duration}function qI(t,e){if(typeof e!="function")throw new Error;return function(){wi(this,t).ease=e}}function KI(t){var e=this._id;return arguments.length?this.each(qI(e,t)):ei(this.node(),e).ease}function ZI(t,e){return function(){var n=e.apply(this,arguments);if(typeof n!="function")throw new Error;wi(this,t).ease=n}}function jI(t){if(typeof t!="function")throw new Error;return this.each(ZI(this._id,t))}function JI(t){typeof t!="function"&&(t=E_(t));for(var e=this._groups,n=e.length,i=new Array(n),r=0;r<n;++r)for(var o=e[r],s=o.length,a=i[r]=[],l,u=0;u<s;++u)(l=o[u])&&t.call(l,l.__data__,u,o)&&a.push(l);return new rr(i,this._parents,this._name,this._id)}function QI(t){if(t._id!==this._id)throw new Error;for(var e=this._groups,n=t._groups,i=e.length,r=n.length,o=Math.min(i,r),s=new Array(i),a=0;a<o;++a)for(var l=e[a],u=n[a],c=l.length,d=s[a]=new Array(c),f,h=0;h<c;++h)(f=l[h]||u[h])&&(d[h]=f);for(;a<i;++a)s[a]=e[a];return new rr(s,this._parents,this._name,this._id)}function eP(t){return(t+"").trim().split(/^|\s+/).every(function(e){var n=e.indexOf(".");return n>=0&&(e=e.slice(0,n)),!e||e==="start"})}function tP(t,e,n){var i,r,o=eP(e)?$h:wi;return function(){var s=o(this,t),a=s.on;a!==i&&(r=(i=a).copy()).on(e,n),s.on=r}}function nP(t,e){var n=this._id;return arguments.length<2?ei(this.node(),n).on.on(t):this.each(tP(n,t,e))}function iP(t){return function(){var e=this.parentNode;for(var n in this.__transition)if(+n!==t)return;e&&e.removeChild(this)}}function rP(){return this.on("end.remove",iP(this._id))}function oP(t){var e=this._name,n=this._id;typeof t!="function"&&(t=Oh(t));for(var i=this._groups,r=i.length,o=new Array(r),s=0;s<r;++s)for(var a=i[s],l=a.length,u=o[s]=new Array(l),c,d,f=0;f<l;++f)(c=a[f])&&(d=t.call(c,c.__data__,f,a))&&("__data__"in c&&(d.__data__=c.__data__),u[f]=d,tc(u[f],e,n,f,u,ei(c,n)));return new rr(o,this._parents,e,n)}function sP(t){var e=this._name,n=this._id;typeof t!="function"&&(t=w_(t));for(var i=this._groups,r=i.length,o=[],s=[],a=0;a<r;++a)for(var l=i[a],u=l.length,c,d=0;d<u;++d)if(c=l[d]){for(var f=t.call(c,c.__data__,d,l),h,m=ei(c,n),v=0,g=f.length;v<g;++v)(h=f[v])&&tc(h,e,n,v,f,m);o.push(f),s.push(c)}return new rr(o,s,e,n)}var aP=Fa.prototype.constructor;function lP(){return new aP(this._groups,this._parents)}function uP(t,e){var n,i,r;return function(){var o=fs(this,t),s=(this.style.removeProperty(t),fs(this,t));return o===s?null:o===n&&s===i?r:r=e(n=o,i=s)}}function q_(t){return function(){this.style.removeProperty(t)}}function cP(t,e,n){var i,r=n+"",o;return function(){var s=fs(this,t);return s===r?null:s===i?o:o=e(i=s,n)}}function dP(t,e,n){var i,r,o;return function(){var s=fs(this,t),a=n(this),l=a+"";return a==null&&(l=a=(this.style.removeProperty(t),fs(this,t))),s===l?null:s===i&&l===r?o:(r=l,o=e(i=s,a))}}function fP(t,e){var n,i,r,o="style."+e,s="end."+o,a;return function(){var l=wi(this,t),u=l.on,c=l.value[o]==null?a||(a=q_(e)):void 0;(u!==n||r!==c)&&(i=(n=u).copy()).on(s,r=c),l.on=i}}function hP(t,e,n){var i=(t+="")=="transform"?pI:Y_;return e==null?this.styleTween(t,uP(t,i)).on("end.style."+t,q_(t)):typeof e=="function"?this.styleTween(t,dP(t,i,Hh(this,"style."+t,e))).each(fP(this._id,t)):this.styleTween(t,cP(t,i,e),n).on("end.style."+t,null)}function pP(t,e,n){return function(i){this.style.setProperty(t,e.call(this,i),n)}}function mP(t,e,n){var i,r;function o(){var s=e.apply(this,arguments);return s!==r&&(i=(r=s)&&pP(t,s,n)),i}return o._value=e,o}function gP(t,e,n){var i="style."+(t+="");if(arguments.length<2)return(i=this.tween(i))&&i._value;if(e==null)return this.tween(i,null);if(typeof e!="function")throw new Error;return this.tween(i,mP(t,e,n??""))}function vP(t){return function(){this.textContent=t}}function _P(t){return function(){var e=t(this);this.textContent=e??""}}function yP(t){return this.tween("text",typeof t=="function"?_P(Hh(this,"text",t)):vP(t==null?"":t+""))}function xP(t){return function(e){this.textContent=t.call(this,e)}}function bP(t){var e,n;function i(){var r=t.apply(this,arguments);return r!==n&&(e=(n=r)&&xP(r)),e}return i._value=t,i}function SP(t){var e="text";if(arguments.length<1)return(e=this.tween(e))&&e._value;if(t==null)return this.tween(e,null);if(typeof t!="function")throw new Error;return this.tween(e,bP(t))}function MP(){for(var t=this._name,e=this._id,n=K_(),i=this._groups,r=i.length,o=0;o<r;++o)for(var s=i[o],a=s.length,l,u=0;u<a;++u)if(l=s[u]){var c=ei(l,e);tc(l,t,n,u,s,{time:c.time+c.delay+c.duration,delay:0,duration:c.duration,ease:c.ease})}return new rr(i,this._parents,t,n)}function wP(){var t,e,n=this,i=n._id,r=n.size();return new Promise(function(o,s){var a={value:s},l={value:function(){--r===0&&o()}};n.each(function(){var u=wi(this,i),c=u.on;c!==t&&(e=(t=c).copy(),e._.cancel.push(a),e._.interrupt.push(a),e._.end.push(l)),u.on=e}),r===0&&o()})}var EP=0;function rr(t,e,n,i){this._groups=t,this._parents=e,this._name=n,this._id=i}function K_(){return++EP}var Fi=Fa.prototype;rr.prototype={constructor:rr,select:oP,selectAll:sP,selectChild:Fi.selectChild,selectChildren:Fi.selectChildren,filter:JI,merge:QI,selection:lP,transition:MP,call:Fi.call,nodes:Fi.nodes,node:Fi.node,size:Fi.size,empty:Fi.empty,each:Fi.each,on:nP,attr:UI,attrTween:VI,style:hP,styleTween:gP,text:yP,textTween:SP,remove:rP,tween:RI,delay:GI,duration:YI,ease:KI,easeVarying:jI,end:wP,[Symbol.iterator]:Fi[Symbol.iterator]};function TP(t){return((t*=2)<=1?t*t*t:(t-=2)*t*t+2)/2}var AP={time:null,delay:0,duration:250,ease:TP};function CP(t,e){for(var n;!(n=t.__transition)||!(n=n[e]);)if(!(t=t.parentNode))throw new Error(`transition ${e} not found`);return n}function RP(t){var e,n;t instanceof rr?(e=t._id,t=t._name):(e=K_(),(n=AP).time=Vh(),t=t==null?null:t+"");for(var i=this._groups,r=i.length,o=0;o<r;++o)for(var s=i[o],a=s.length,l,u=0;u<a;++u)(l=s[u])&&tc(l,t,e,u,s,n||CP(l,e));return new rr(i,this._parents,t,e)}Fa.prototype.interrupt=TI;Fa.prototype.transition=RP;const yl=t=>()=>t;function IP(t,{sourceEvent:e,target:n,transform:i,dispatch:r}){Object.defineProperties(this,{type:{value:t,enumerable:!0,configurable:!0},sourceEvent:{value:e,enumerable:!0,configurable:!0},target:{value:n,enumerable:!0,configurable:!0},transform:{value:i,enumerable:!0,configurable:!0},_:{value:r}})}function Gi(t,e,n){this.k=t,this.x=e,this.y=n}Gi.prototype={constructor:Gi,scale:function(t){return t===1?this:new Gi(this.k*t,this.x,this.y)},translate:function(t,e){return t===0&e===0?this:new Gi(this.k,this.x+this.k*t,this.y+this.k*e)},apply:function(t){return[t[0]*this.k+this.x,t[1]*this.k+this.y]},applyX:function(t){return t*this.k+this.x},applyY:function(t){return t*this.k+this.y},invert:function(t){return[(t[0]-this.x)/this.k,(t[1]-this.y)/this.k]},invertX:function(t){return(t-this.x)/this.k},invertY:function(t){return(t-this.y)/this.k},rescaleX:function(t){return t.copy().domain(t.range().map(this.invertX,this).map(t.invert,t))},rescaleY:function(t){return t.copy().domain(t.range().map(this.invertY,this).map(t.invert,t))},toString:function(){return"translate("+this.x+","+this.y+") scale("+this.k+")"}};var ps=new Gi(1,0,0);Gi.prototype;function fd(t){t.stopImmediatePropagation()}function Ds(t){t.preventDefault(),t.stopImmediatePropagation()}function PP(t){return(!t.ctrlKey||t.type==="wheel")&&!t.button}function NP(){var t=this;return t instanceof SVGElement?(t=t.ownerSVGElement||t,t.hasAttribute("viewBox")?(t=t.viewBox.baseVal,[[t.x,t.y],[t.x+t.width,t.y+t.height]]):[[0,0],[t.width.baseVal.value,t.height.baseVal.value]]):[[0,0],[t.clientWidth,t.clientHeight]]}function gg(){return this.__zoom||ps}function DP(t){return-t.deltaY*(t.deltaMode===1?.05:t.deltaMode?1:.002)*(t.ctrlKey?10:1)}function LP(){return navigator.maxTouchPoints||"ontouchstart"in this}function FP(t,e,n){var i=t.invertX(e[0][0])-n[0][0],r=t.invertX(e[1][0])-n[1][0],o=t.invertY(e[0][1])-n[0][1],s=t.invertY(e[1][1])-n[1][1];return t.translate(r>i?(i+r)/2:Math.min(0,i)||Math.max(0,r),s>o?(o+s)/2:Math.min(0,o)||Math.max(0,s))}function UP(){var t=PP,e=NP,n=FP,i=DP,r=LP,o=[0,1/0],s=[[-1/0,-1/0],[1/0,1/0]],a=250,l=$l,u=Ju("start","zoom","end"),c,d,f,h=500,m=150,v=0,g=10;function p(w){w.property("__zoom",gg).on("wheel.zoom",y,{passive:!1}).on("mousedown.zoom",x).on("dblclick.zoom",T).filter(r).on("touchstart.zoom",E).on("touchmove.zoom",I).on("touchend.zoom touchcancel.zoom",q).style("-webkit-tap-highlight-color","rgba(0,0,0,0)")}p.transform=function(w,k,A,N){var O=w.selection?w.selection():w;O.property("__zoom",gg),w!==O?P(w,k,A,N):O.interrupt().each(function(){D(this,arguments).event(N).start().zoom(null,typeof k=="function"?k.apply(this,arguments):k).end()})},p.scaleBy=function(w,k,A,N){p.scaleTo(w,function(){var O=this.__zoom.k,$=typeof k=="function"?k.apply(this,arguments):k;return O*$},A,N)},p.scaleTo=function(w,k,A,N){p.transform(w,function(){var O=e.apply(this,arguments),$=this.__zoom,K=A==null?_(O):typeof A=="function"?A.apply(this,arguments):A,te=$.invert(K),ne=typeof k=="function"?k.apply(this,arguments):k;return n(M(b($,ne),K,te),O,s)},A,N)},p.translateBy=function(w,k,A,N){p.transform(w,function(){return n(this.__zoom.translate(typeof k=="function"?k.apply(this,arguments):k,typeof A=="function"?A.apply(this,arguments):A),e.apply(this,arguments),s)},null,N)},p.translateTo=function(w,k,A,N,O){p.transform(w,function(){var $=e.apply(this,arguments),K=this.__zoom,te=N==null?_($):typeof N=="function"?N.apply(this,arguments):N;return n(ps.translate(te[0],te[1]).scale(K.k).translate(typeof k=="function"?-k.apply(this,arguments):-k,typeof A=="function"?-A.apply(this,arguments):-A),$,s)},N,O)};function b(w,k){return k=Math.max(o[0],Math.min(o[1],k)),k===w.k?w:new Gi(k,w.x,w.y)}function M(w,k,A){var N=k[0]-A[0]*w.k,O=k[1]-A[1]*w.k;return N===w.x&&O===w.y?w:new Gi(w.k,N,O)}function _(w){return[(+w[0][0]+ +w[1][0])/2,(+w[0][1]+ +w[1][1])/2]}function P(w,k,A,N){w.on("start.zoom",function(){D(this,arguments).event(N).start()}).on("interrupt.zoom end.zoom",function(){D(this,arguments).event(N).end()}).tween("zoom",function(){var O=this,$=arguments,K=D(O,$).event(N),te=e.apply(O,$),ne=A==null?_(te):typeof A=="function"?A.apply(O,$):A,ge=Math.max(te[1][0]-te[0][0],te[1][1]-te[0][1]),Ee=O.__zoom,Se=typeof k=="function"?k.apply(O,$):k,G=l(Ee.invert(ne).concat(ge/Ee.k),Se.invert(ne).concat(ge/Se.k));return function(U){if(U===1)U=Se;else{var Y=G(U),he=ge/Y[2];U=new Gi(he,ne[0]-Y[0]*he,ne[1]-Y[1]*he)}K.zoom(null,U)}})}function D(w,k,A){return!A&&w.__zooming||new B(w,k)}function B(w,k){this.that=w,this.args=k,this.active=0,this.sourceEvent=null,this.extent=e.apply(w,k),this.taps=0}B.prototype={event:function(w){return w&&(this.sourceEvent=w),this},start:function(){return++this.active===1&&(this.that.__zooming=this,this.emit("start")),this},zoom:function(w,k){return this.mouse&&w!=="mouse"&&(this.mouse[1]=k.invert(this.mouse[0])),this.touch0&&w!=="touch"&&(this.touch0[1]=k.invert(this.touch0[0])),this.touch1&&w!=="touch"&&(this.touch1[1]=k.invert(this.touch1[0])),this.that.__zoom=k,this.emit("zoom"),this},end:function(){return--this.active===0&&(delete this.that.__zooming,this.emit("end")),this},emit:function(w){var k=Xn(this.that).datum();u.call(w,this.that,new IP(w,{sourceEvent:this.sourceEvent,target:p,transform:this.that.__zoom,dispatch:u}),k)}};function y(w,...k){if(!t.apply(this,arguments))return;var A=D(this,k).event(w),N=this.__zoom,O=Math.max(o[0],Math.min(o[1],N.k*Math.pow(2,i.apply(this,arguments)))),$=li(w);if(A.wheel)(A.mouse[0][0]!==$[0]||A.mouse[0][1]!==$[1])&&(A.mouse[1]=N.invert(A.mouse[0]=$)),clearTimeout(A.wheel);else{if(N.k===O)return;A.mouse=[$,N.invert($)],Wl(this),A.start()}Ds(w),A.wheel=setTimeout(K,m),A.zoom("mouse",n(M(b(N,O),A.mouse[0],A.mouse[1]),A.extent,s));function K(){A.wheel=null,A.end()}}function x(w,...k){if(f||!t.apply(this,arguments))return;var A=w.currentTarget,N=D(this,k,!0).event(w),O=Xn(w.view).on("mousemove.zoom",ne,!0).on("mouseup.zoom",ge,!0),$=li(w,A),K=w.clientX,te=w.clientY;F_(w.view),fd(w),N.mouse=[$,this.__zoom.invert($)],Wl(this),N.start();function ne(Ee){if(Ds(Ee),!N.moved){var Se=Ee.clientX-K,G=Ee.clientY-te;N.moved=Se*Se+G*G>v}N.event(Ee).zoom("mouse",n(M(N.that.__zoom,N.mouse[0]=li(Ee,A),N.mouse[1]),N.extent,s))}function ge(Ee){O.on("mousemove.zoom mouseup.zoom",null),U_(Ee.view,N.moved),Ds(Ee),N.event(Ee).end()}}function T(w,...k){if(t.apply(this,arguments)){var A=this.__zoom,N=li(w.changedTouches?w.changedTouches[0]:w,this),O=A.invert(N),$=A.k*(w.shiftKey?.5:2),K=n(M(b(A,$),N,O),e.apply(this,k),s);Ds(w),a>0?Xn(this).transition().duration(a).call(P,K,N,w):Xn(this).call(p.transform,K,N,w)}}function E(w,...k){if(t.apply(this,arguments)){var A=w.touches,N=A.length,O=D(this,k,w.changedTouches.length===N).event(w),$,K,te,ne;for(fd(w),K=0;K<N;++K)te=A[K],ne=li(te,this),ne=[ne,this.__zoom.invert(ne),te.identifier],O.touch0?!O.touch1&&O.touch0[2]!==ne[2]&&(O.touch1=ne,O.taps=0):(O.touch0=ne,$=!0,O.taps=1+!!c);c&&(c=clearTimeout(c)),$&&(O.taps<2&&(d=ne[0],c=setTimeout(function(){c=null},h)),Wl(this),O.start())}}function I(w,...k){if(this.__zooming){var A=D(this,k).event(w),N=w.changedTouches,O=N.length,$,K,te,ne;for(Ds(w),$=0;$<O;++$)K=N[$],te=li(K,this),A.touch0&&A.touch0[2]===K.identifier?A.touch0[0]=te:A.touch1&&A.touch1[2]===K.identifier&&(A.touch1[0]=te);if(K=A.that.__zoom,A.touch1){var ge=A.touch0[0],Ee=A.touch0[1],Se=A.touch1[0],G=A.touch1[1],U=(U=Se[0]-ge[0])*U+(U=Se[1]-ge[1])*U,Y=(Y=G[0]-Ee[0])*Y+(Y=G[1]-Ee[1])*Y;K=b(K,Math.sqrt(U/Y)),te=[(ge[0]+Se[0])/2,(ge[1]+Se[1])/2],ne=[(Ee[0]+G[0])/2,(Ee[1]+G[1])/2]}else if(A.touch0)te=A.touch0[0],ne=A.touch0[1];else return;A.zoom("touch",n(M(K,te,ne),A.extent,s))}}function q(w,...k){if(this.__zooming){var A=D(this,k).event(w),N=w.changedTouches,O=N.length,$,K;for(fd(w),f&&clearTimeout(f),f=setTimeout(function(){f=null},h),$=0;$<O;++$)K=N[$],A.touch0&&A.touch0[2]===K.identifier?delete A.touch0:A.touch1&&A.touch1[2]===K.identifier&&delete A.touch1;if(A.touch1&&!A.touch0&&(A.touch0=A.touch1,delete A.touch1),A.touch0)A.touch0[1]=this.__zoom.invert(A.touch0[0]);else if(A.end(),A.taps===2&&(K=li(K,this),Math.hypot(d[0]-K[0],d[1]-K[1])<g)){var te=Xn(this).on("dblclick.zoom");te&&te.apply(this,arguments)}}}return p.wheelDelta=function(w){return arguments.length?(i=typeof w=="function"?w:yl(+w),p):i},p.filter=function(w){return arguments.length?(t=typeof w=="function"?w:yl(!!w),p):t},p.touchable=function(w){return arguments.length?(r=typeof w=="function"?w:yl(!!w),p):r},p.extent=function(w){return arguments.length?(e=typeof w=="function"?w:yl([[+w[0][0],+w[0][1]],[+w[1][0],+w[1][1]]]),p):e},p.scaleExtent=function(w){return arguments.length?(o[0]=+w[0],o[1]=+w[1],p):[o[0],o[1]]},p.translateExtent=function(w){return arguments.length?(s[0][0]=+w[0][0],s[1][0]=+w[1][0],s[0][1]=+w[0][1],s[1][1]=+w[1][1],p):[[s[0][0],s[0][1]],[s[1][0],s[1][1]]]},p.constrain=function(w){return arguments.length?(n=w,p):n},p.duration=function(w){return arguments.length?(a=+w,p):a},p.interpolate=function(w){return arguments.length?(l=w,p):l},p.on=function(){var w=u.on.apply(u,arguments);return w===u?p:w},p.clickDistance=function(w){return arguments.length?(v=(w=+w)*w,p):Math.sqrt(v)},p.tapDistance=function(w){return arguments.length?(g=+w,p):g},p}var Ye=(t=>(t.Left="left",t.Top="top",t.Right="right",t.Bottom="bottom",t))(Ye||{}),Gh=(t=>(t.Partial="partial",t.Full="full",t))(Gh||{}),ao=(t=>(t.Bezier="default",t.SimpleBezier="simple-bezier",t.Straight="straight",t.Step="step",t.SmoothStep="smoothstep",t))(ao||{}),Vr=(t=>(t.Strict="strict",t.Loose="loose",t))(Vr||{}),$f=(t=>(t.Arrow="arrow",t.ArrowClosed="arrowclosed",t))($f||{}),ea=(t=>(t.Free="free",t.Vertical="vertical",t.Horizontal="horizontal",t))(ea||{});const OP=["INPUT","SELECT","TEXTAREA"],BP=typeof document<"u"?document:null;function Hf(t){var e,n;const i=((n=(e=t.composedPath)==null?void 0:e.call(t))==null?void 0:n[0])||t.target,r=typeof i?.hasAttribute=="function"?i.hasAttribute("contenteditable"):!1,o=typeof i?.closest=="function"?i.closest(".nokey"):null;return OP.includes(i?.nodeName)||r||!!o}function kP(t){return t.ctrlKey||t.metaKey||t.shiftKey||t.altKey}function vg(t,e,n,i){const r=e.replace("+",`
`).replace(`

`,`
+`).split(`
`).map(s=>s.trim().toLowerCase());if(r.length===1)return t.toLowerCase()===e.toLowerCase();i||n.add(t.toLowerCase());const o=r.every((s,a)=>n.has(s)&&Array.from(n.values())[a]===r[a]);return i&&n.delete(t.toLowerCase()),o}function zP(t,e){return n=>{if(!n.code&&!n.key)return!1;const i=VP(n.code,t);return Array.isArray(t)?t.some(r=>vg(n[i],r,e,n.type==="keyup")):vg(n[i],t,e,n.type==="keyup")}}function VP(t,e){return e.includes(t)?"code":"key"}function ta(t,e){const n=Re(()=>ht(e?.target)??BP),i=Nr(ht(t)===!0);let r=!1;const o=new Set;let s=l(ht(t));lt(()=>ht(t),(u,c)=>{typeof c=="boolean"&&typeof u!="boolean"&&a(),s=l(u)},{immediate:!0}),S_(["blur","contextmenu"],a),Qm((...u)=>s(...u),u=>{var c,d;const f=ht(e?.actInsideInputWithModifier)??!0,h=ht(e?.preventDefault)??!1;if(r=kP(u),(!r||r&&!f)&&Hf(u))return;const v=((d=(c=u.composedPath)==null?void 0:c.call(u))==null?void 0:d[0])||u.target,g=v?.nodeName==="BUTTON"||v?.nodeName==="A";!h&&(r||!g)&&u.preventDefault(),i.value=!0},{eventName:"keydown",target:n}),Qm((...u)=>s(...u),u=>{const c=ht(e?.actInsideInputWithModifier)??!0;if(i.value){if((!r||r&&!c)&&Hf(u))return;r=!1,i.value=!1}},{eventName:"keyup",target:n});function a(){r=!1,o.clear(),i.value=ht(t)===!0}function l(u){return u===null?(a(),()=>!1):typeof u=="boolean"?(a(),i.value=u,()=>!1):Array.isArray(u)||typeof u=="string"?zP(u,o):u}return i}const Z_="vue-flow__node-desc",j_="vue-flow__edge-desc",$P="vue-flow__aria-live",J_=["Enter"," ","Escape"],is={ArrowUp:{x:0,y:-1},ArrowDown:{x:0,y:1},ArrowLeft:{x:-1,y:0},ArrowRight:{x:1,y:0}};function xu(t){return{...t.computedPosition||{x:0,y:0},width:t.dimensions.width||0,height:t.dimensions.height||0}}function bu(t,e){const n=Math.max(0,Math.min(t.x+t.width,e.x+e.width)-Math.max(t.x,e.x)),i=Math.max(0,Math.min(t.y+t.height,e.y+e.height)-Math.max(t.y,e.y));return Math.ceil(n*i)}function nc(t){return{width:t.offsetWidth,height:t.offsetHeight}}function or(t,e=0,n=1){return Math.min(Math.max(t,e),n)}function Q_(t,e){return{x:or(t.x,e[0][0],e[1][0]),y:or(t.y,e[0][1],e[1][1])}}function _g(t){const e=t.getRootNode();return"elementFromPoint"in e?e:window.document}function $r(t){return t&&typeof t=="object"&&"id"in t&&"source"in t&&"target"in t}function yo(t){return t&&typeof t=="object"&&"id"in t&&"position"in t&&!$r(t)}function Vs(t){return yo(t)&&"computedPosition"in t}function xl(t){return!Number.isNaN(t)&&Number.isFinite(t)}function HP(t){return xl(t.width)&&xl(t.height)&&xl(t.x)&&xl(t.y)}function GP(t,e,n){const i={id:t.id.toString(),type:t.type??"default",dimensions:go({width:0,height:0}),computedPosition:go({z:0,...t.position}),handleBounds:{source:[],target:[]},draggable:void 0,selectable:void 0,connectable:void 0,focusable:void 0,selected:!1,dragging:!1,resizing:!1,initialized:!1,isParent:!1,position:{x:0,y:0},data:$t(t.data)?t.data:{},events:go($t(t.events)?t.events:{})};return Object.assign(e??i,t,{id:t.id.toString(),parentNode:n})}function ey(t,e,n){var i,r;const o={id:t.id.toString(),type:t.type??e?.type??"default",source:t.source.toString(),target:t.target.toString(),sourceHandle:(i=t.sourceHandle)==null?void 0:i.toString(),targetHandle:(r=t.targetHandle)==null?void 0:r.toString(),updatable:t.updatable??n?.updatable,selectable:t.selectable??n?.selectable,focusable:t.focusable??n?.focusable,data:$t(t.data)?t.data:{},events:go($t(t.events)?t.events:{}),label:t.label??"",interactionWidth:t.interactionWidth??n?.interactionWidth,...n??{}};return Object.assign(e??o,t,{id:t.id.toString()})}function ty(t,e,n,i){const r=typeof t=="string"?t:t.id,o=new Set,s=i==="source"?"target":"source";for(const a of n)a[s]===r&&o.add(a[i]);return e.filter(a=>o.has(a.id))}function WP(...t){if(t.length===3){const[o,s,a]=t;return ty(o,s,a,"target")}const[e,n]=t,i=typeof e=="string"?e:e.id;return n.filter(o=>$r(o)&&o.source===i).map(o=>n.find(s=>yo(s)&&s.id===o.target))}function XP(...t){if(t.length===3){const[o,s,a]=t;return ty(o,s,a,"source")}const[e,n]=t,i=typeof e=="string"?e:e.id;return n.filter(o=>$r(o)&&o.target===i).map(o=>n.find(s=>yo(s)&&s.id===o.source))}function ny({source:t,sourceHandle:e,target:n,targetHandle:i}){return`vueflow__edge-${t}${e??""}-${n}${i??""}`}function YP(t,e){return e.some(n=>$r(n)&&n.source===t.source&&n.target===t.target&&(n.sourceHandle===t.sourceHandle||!n.sourceHandle&&!t.sourceHandle)&&(n.targetHandle===t.targetHandle||!n.targetHandle&&!t.targetHandle))}function _a({x:t,y:e},{x:n,y:i,zoom:r}){return{x:t*r+n,y:e*r+i}}function ya({x:t,y:e},{x:n,y:i,zoom:r},o=!1,s=[1,1]){const a={x:(t-n)/r,y:(e-i)/r};return o?ic(a,s):a}function iy(t,e){return{x:Math.min(t.x,e.x),y:Math.min(t.y,e.y),x2:Math.max(t.x2,e.x2),y2:Math.max(t.y2,e.y2)}}function Su({x:t,y:e,width:n,height:i}){return{x:t,y:e,x2:t+n,y2:e+i}}function ry({x:t,y:e,x2:n,y2:i}){return{x:t,y:e,width:n-t,height:i-e}}function qP(t,e){return ry(iy(Su(t),Su(e)))}function Wh(t){let e={x:Number.POSITIVE_INFINITY,y:Number.POSITIVE_INFINITY,x2:Number.NEGATIVE_INFINITY,y2:Number.NEGATIVE_INFINITY};for(let n=0;n<t.length;n++){const i=t[n];e=iy(e,Su({...i.computedPosition,...i.dimensions}))}return ry(e)}function oy(t,e,n={x:0,y:0,zoom:1},i=!1,r=!1){const o={...ya(e,n),width:e.width/n.zoom,height:e.height/n.zoom},s=[];for(const a of t){const{dimensions:l,selectable:u=!0,hidden:c=!1}=a,d=l.width??a.width??null,f=l.height??a.height??null;if(r&&!u||c)continue;const h=bu(o,xu(a)),m=d===null||f===null,v=i&&h>0,g=(d??0)*(f??0);(m||v||h>=g||a.dragging)&&s.push(a)}return s}function lo(t,e){const n=new Set;if(typeof t=="string")n.add(t);else if(t.length>=1)for(const i of t)n.add(i.id);return e.filter(i=>n.has(i.source)||n.has(i.target))}function Yo(t,e){if(typeof t=="number")return Math.floor((e-e/(1+t))*.5);if(typeof t=="string"&&t.endsWith("px")){const n=Number.parseFloat(t);if(!Number.isNaN(n))return Math.floor(n)}if(typeof t=="string"&&t.endsWith("%")){const n=Number.parseFloat(t);if(!Number.isNaN(n))return Math.floor(e*n*.01)}return Oa(`The padding value "${t}" is invalid. Please provide a number or a string with a valid unit (px or %).`),0}function KP(t,e,n){if(typeof t=="string"||typeof t=="number"){const i=Yo(t,n),r=Yo(t,e);return{top:i,right:r,bottom:i,left:r,x:r*2,y:i*2}}if(typeof t=="object"){const i=Yo(t.top??t.y??0,n),r=Yo(t.bottom??t.y??0,n),o=Yo(t.left??t.x??0,e),s=Yo(t.right??t.x??0,e);return{top:i,right:s,bottom:r,left:o,x:o+s,y:i+r}}return{top:0,right:0,bottom:0,left:0,x:0,y:0}}function ZP(t,e,n,i,r,o){const{x:s,y:a}=_a(t,{x:e,y:n,zoom:i}),{x:l,y:u}=_a({x:t.x+t.width,y:t.y+t.height},{x:e,y:n,zoom:i}),c=r-l,d=o-u;return{left:Math.floor(s),top:Math.floor(a),right:Math.floor(c),bottom:Math.floor(d)}}function yg(t,e,n,i,r,o=.1){const s=KP(o,e,n),a=(e-s.x)/t.width,l=(n-s.y)/t.height,u=Math.min(a,l),c=or(u,i,r),d=t.x+t.width/2,f=t.y+t.height/2,h=e/2-d*c,m=n/2-f*c,v=ZP(t,h,m,c,e,n),g={left:Math.min(v.left-s.left,0),top:Math.min(v.top-s.top,0),right:Math.min(v.right-s.right,0),bottom:Math.min(v.bottom-s.bottom,0)};return{x:h-g.left+g.right,y:m-g.top+g.bottom,zoom:c}}function jP(t,e){return{x:e.x+t.x,y:e.y+t.y,z:(t.z>e.z?t.z:e.z)+1}}function sy(t,e){if(!t.parentNode)return!1;const n=e.get(t.parentNode);return n?n.selected?!0:sy(n,e):!1}function xa(t,e){return typeof t>"u"?"":typeof t=="string"?t:`${e?`${e}__`:""}${Object.keys(t).sort().map(i=>`${i}=${t[i]}`).join("&")}`}function Gf(t){const e=t.ctrlKey&&ba()?10:1;return-t.deltaY*(t.deltaMode===1?.05:t.deltaMode?1:.002)*e}function xg(t,e,n){return t<e?or(Math.abs(t-e),1,e)/e:t>n?-or(Math.abs(t-n),1,e)/e:0}function ay(t,e,n=15,i=40){const r=xg(t.x,i,e.width-i)*n,o=xg(t.y,i,e.height-i)*n;return[r,o]}function hd(t,e){if(e){const n=t.position.x+t.dimensions.width-e.dimensions.width,i=t.position.y+t.dimensions.height-e.dimensions.height;if(n>0||i>0||t.position.x<0||t.position.y<0){let r={};if(typeof e.style=="function"?r={...e.style(e)}:e.style&&(r={...e.style}),r.width=r.width??`${e.dimensions.width}px`,r.height=r.height??`${e.dimensions.height}px`,n>0)if(typeof r.width=="string"){const o=Number(r.width.replace("px",""));r.width=`${o+n}px`}else r.width+=n;if(i>0)if(typeof r.height=="string"){const o=Number(r.height.replace("px",""));r.height=`${o+i}px`}else r.height+=i;if(t.position.x<0){const o=Math.abs(t.position.x);if(e.position.x=e.position.x-o,typeof r.width=="string"){const s=Number(r.width.replace("px",""));r.width=`${s+o}px`}else r.width+=o;t.position.x=0}if(t.position.y<0){const o=Math.abs(t.position.y);if(e.position.y=e.position.y-o,typeof r.height=="string"){const s=Number(r.height.replace("px",""));r.height=`${s+o}px`}else r.height+=o;t.position.y=0}e.dimensions.width=Number(r.width.toString().replace("px","")),e.dimensions.height=Number(r.height.toString().replace("px","")),typeof e.style=="function"?e.style=o=>{const s=e.style;return{...s(o),...r}}:e.style={...e.style,...r}}}}function bg(t,e){var n,i;const r=t.filter(s=>s.type==="add"||s.type==="remove");for(const s of r)if(s.type==="add")e.findIndex(l=>l.id===s.item.id)===-1&&e.push(s.item);else if(s.type==="remove"){const a=e.findIndex(l=>l.id===s.id);a!==-1&&e.splice(a,1)}const o=e.map(s=>s.id);for(const s of e)for(const a of t)if(a.id===s.id)switch(a.type){case"select":s.selected=a.selected;break;case"position":if(Vs(s)&&(typeof a.position<"u"&&(s.position=a.position),typeof a.dragging<"u"&&(s.dragging=a.dragging),s.expandParent&&s.parentNode)){const l=e[o.indexOf(s.parentNode)];l&&Vs(l)&&hd(s,l)}break;case"dimensions":if(Vs(s)&&(typeof a.dimensions<"u"&&(s.dimensions=a.dimensions),typeof a.updateStyle<"u"&&a.updateStyle&&(s.style={...s.style||{},width:`${(n=a.dimensions)==null?void 0:n.width}px`,height:`${(i=a.dimensions)==null?void 0:i.height}px`}),typeof a.resizing<"u"&&(s.resizing=a.resizing),s.expandParent&&s.parentNode)){const l=e[o.indexOf(s.parentNode)];l&&Vs(l)&&(!!l.dimensions.width&&!!l.dimensions.height?hd(s,l):rn(()=>{hd(s,l)}))}break}return e}function Mr(t,e){return{id:t,type:"select",selected:e}}function Sg(t){return{item:t,type:"add"}}function Mg(t){return{id:t,type:"remove"}}function wg(t,e,n,i,r){return{id:t,source:e,target:n,sourceHandle:i||null,targetHandle:r||null,type:"remove"}}function Ar(t,e=new Set,n=!1){const i=[];for(const[r,o]of t){const s=e.has(r);!(o.selected===void 0&&!s)&&o.selected!==s&&(n&&(o.selected=s),i.push(Mr(o.id,s)))}return i}const Eg=()=>{};function He(t){const e=new Set;let n=Eg,i=()=>!1;const r=()=>e.size>0||i(),o=f=>{n=f},s=()=>{n=Eg},a=f=>{i=f},l=()=>{i=()=>!1},u=f=>{e.delete(f)};return{on:f=>{e.add(f);const h=()=>u(f);return ha(h),{off:h}},off:u,trigger:f=>{const h=[n];return r()?h.push(...e):t&&h.push(t),Promise.allSettled(h.map(m=>m(f)))},hasListeners:r,listeners:e,setEmitter:o,removeEmitter:s,setHasEmitListeners:a,removeHasEmitListeners:l}}function Tg(t,e,n){let i=t;do{if(i&&i.matches(e))return!0;if(i===n)return!1;i=i.parentElement}while(i);return!1}function JP(t,e,n,i){var r,o;const s=new Map;for(const[a,l]of t)(l.selected||l.id===i)&&(!l.parentNode||!sy(l,t))&&(l.draggable||e&&typeof l.draggable>"u")&&t.get(a)&&s.set(a,{id:l.id,position:l.position||{x:0,y:0},distance:{x:n.x-((r=l.computedPosition)==null?void 0:r.x)||0,y:n.y-((o=l.computedPosition)==null?void 0:o.y)||0},from:{x:l.computedPosition.x,y:l.computedPosition.y},extent:l.extent,parentNode:l.parentNode,dimensions:{...l.dimensions},expandParent:l.expandParent});return Array.from(s.values())}function pd({id:t,dragItems:e,findNode:n}){const i=[];for(const r of e){const o=n(r.id);o&&i.push(o)}return[t?i.find(r=>r.id===t):i[0],i]}function ly(t){if(Array.isArray(t))switch(t.length){case 1:return[t[0],t[0],t[0],t[0]];case 2:return[t[0],t[1],t[0],t[1]];case 3:return[t[0],t[1],t[2],t[1]];case 4:return t;default:return[0,0,0,0]}return[t,t,t,t]}function QP(t,e,n){const[i,r,o,s]=typeof t!="string"?ly(t.padding):[0,0,0,0];return n&&typeof n.computedPosition.x<"u"&&typeof n.computedPosition.y<"u"&&typeof n.dimensions.width<"u"&&typeof n.dimensions.height<"u"?[[n.computedPosition.x+s,n.computedPosition.y+i],[n.computedPosition.x+n.dimensions.width-r,n.computedPosition.y+n.dimensions.height-o]]:!1}function e3(t,e,n,i){let r=t.extent||n;if((r==="parent"||!Array.isArray(r)&&r?.range==="parent")&&!t.expandParent)if(t.parentNode&&i&&t.dimensions.width&&t.dimensions.height){const o=QP(r,t,i);o&&(r=o)}else e(new Yt(Gt.NODE_EXTENT_INVALID,t.id)),r=n;else if(Array.isArray(r)){const o=i?.computedPosition.x||0,s=i?.computedPosition.y||0;r=[[r[0][0]+o,r[0][1]+s],[r[1][0]+o,r[1][1]+s]]}else if(r!=="parent"&&r?.range&&Array.isArray(r.range)){const[o,s,a,l]=ly(r.padding),u=i?.computedPosition.x||0,c=i?.computedPosition.y||0;r=[[r.range[0][0]+u+l,r.range[0][1]+c+o],[r.range[1][0]+u-s,r.range[1][1]+c-a]]}return r==="parent"?[[Number.NEGATIVE_INFINITY,Number.NEGATIVE_INFINITY],[Number.POSITIVE_INFINITY,Number.POSITIVE_INFINITY]]:r}function t3({width:t,height:e},n){return[n[0],[n[1][0]-(t||0),n[1][1]-(e||0)]]}function Xh(t,e,n,i,r){const o=t3(t.dimensions,e3(t,n,i,r)),s=Q_(e,o);return{position:{x:s.x-(r?.computedPosition.x||0),y:s.y-(r?.computedPosition.y||0)},computedPosition:s}}function ms(t,e,n=Ye.Left,i=!1){const r=(e?.x??0)+t.computedPosition.x,o=(e?.y??0)+t.computedPosition.y,{width:s,height:a}=e??o3(t);if(i)return{x:r+s/2,y:o+a/2};switch(e?.position??n){case Ye.Top:return{x:r+s/2,y:o};case Ye.Right:return{x:r+s,y:o+a/2};case Ye.Bottom:return{x:r+s/2,y:o+a};case Ye.Left:return{x:r,y:o+a/2}}}function Ag(t,e){return t&&(e?t.find(n=>n.id===e):t[0])||null}function n3({sourcePos:t,targetPos:e,sourceWidth:n,sourceHeight:i,targetWidth:r,targetHeight:o,width:s,height:a,viewport:l}){const u={x:Math.min(t.x,e.x),y:Math.min(t.y,e.y),x2:Math.max(t.x+n,e.x+r),y2:Math.max(t.y+i,e.y+o)};u.x===u.x2&&(u.x2+=1),u.y===u.y2&&(u.y2+=1);const c=Su({x:(0-l.x)/l.zoom,y:(0-l.y)/l.zoom,width:s/l.zoom,height:a/l.zoom}),d=Math.max(0,Math.min(c.x2,u.x2)-Math.max(c.x,u.x)),f=Math.max(0,Math.min(c.y2,u.y2)-Math.max(c.y,u.y));return Math.ceil(d*f)>0}function i3(t,e,n=!1){const i=typeof t.zIndex=="number";let r=i?t.zIndex:0;const o=e(t.source),s=e(t.target);return!o||!s?0:(n&&(r=i?t.zIndex:Math.max(o.computedPosition.z||0,s.computedPosition.z||0)),r)}var Gt=(t=>(t.MISSING_STYLES="MISSING_STYLES",t.MISSING_VIEWPORT_DIMENSIONS="MISSING_VIEWPORT_DIMENSIONS",t.NODE_INVALID="NODE_INVALID",t.NODE_NOT_FOUND="NODE_NOT_FOUND",t.NODE_MISSING_PARENT="NODE_MISSING_PARENT",t.NODE_TYPE_MISSING="NODE_TYPE_MISSING",t.NODE_EXTENT_INVALID="NODE_EXTENT_INVALID",t.EDGE_INVALID="EDGE_INVALID",t.EDGE_NOT_FOUND="EDGE_NOT_FOUND",t.EDGE_SOURCE_MISSING="EDGE_SOURCE_MISSING",t.EDGE_TARGET_MISSING="EDGE_TARGET_MISSING",t.EDGE_TYPE_MISSING="EDGE_TYPE_MISSING",t.EDGE_SOURCE_TARGET_SAME="EDGE_SOURCE_TARGET_SAME",t.EDGE_SOURCE_TARGET_MISSING="EDGE_SOURCE_TARGET_MISSING",t.EDGE_ORPHANED="EDGE_ORPHANED",t.USEVUEFLOW_OPTIONS="USEVUEFLOW_OPTIONS",t))(Gt||{});const Cg={MISSING_STYLES:()=>"It seems that you haven't loaded the necessary styles. Please import '@vue-flow/core/dist/style.css' to ensure that the graph is rendered correctly",MISSING_VIEWPORT_DIMENSIONS:()=>"The Vue Flow parent container needs a width and a height to render the graph",NODE_INVALID:t=>`Node is invalid
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
Edge: ${t}`,USEVUEFLOW_OPTIONS:()=>"The options parameter is deprecated and will be removed in the next major version. Please use the id parameter instead"};class Yt extends Error{constructor(e,...n){var i;super((i=Cg[e])==null?void 0:i.call(Cg,...n)),this.name="VueFlowError",this.code=e,this.args=n}}function Yh(t){return"clientX"in t}function r3(t){return"sourceEvent"in t}function fi(t,e){const n=Yh(t);let i,r;return n?(i=t.clientX,r=t.clientY):"touches"in t&&t.touches.length>0?(i=t.touches[0].clientX,r=t.touches[0].clientY):"changedTouches"in t&&t.changedTouches.length>0?(i=t.changedTouches[0].clientX,r=t.changedTouches[0].clientY):(i=0,r=0),{x:i-(e?.left??0),y:r-(e?.top??0)}}const ba=()=>{var t;return typeof navigator<"u"&&((t=navigator?.userAgent)==null?void 0:t.indexOf("Mac"))>=0};function o3(t){var e,n;return{width:((e=t.dimensions)==null?void 0:e.width)??t.width??0,height:((n=t.dimensions)==null?void 0:n.height)??t.height??0}}function ic(t,e=[1,1]){return{x:e[0]*Math.round(t.x/e[0]),y:e[1]*Math.round(t.y/e[1])}}const s3=()=>!0;function md(t){t?.classList.remove("valid","connecting","vue-flow__handle-valid","vue-flow__handle-connecting")}function a3(t,e,n){const i=[],r={x:t.x-n,y:t.y-n,width:n*2,height:n*2};for(const o of e.values())bu(r,xu(o))>0&&i.push(o);return i}const l3=250;function u3(t,e,n,i){var r,o;let s=[],a=Number.POSITIVE_INFINITY;const l=a3(t,n,e+l3);for(const u of l){const c=[...((r=u.handleBounds)==null?void 0:r.source)??[],...((o=u.handleBounds)==null?void 0:o.target)??[]];for(const d of c){if(i.nodeId===d.nodeId&&i.type===d.type&&i.id===d.id)continue;const{x:f,y:h}=ms(u,d,d.position,!0),m=Math.sqrt((f-t.x)**2+(h-t.y)**2);m>e||(m<a?(s=[{...d,x:f,y:h}],a=m):m===a&&s.push({...d,x:f,y:h}))}}if(!s.length)return null;if(s.length>1){const u=i.type==="source"?"target":"source";return s.find(c=>c.type===u)??s[0]}return s[0]}function Rg(t,{handle:e,connectionMode:n,fromNodeId:i,fromHandleId:r,fromType:o,doc:s,lib:a,flowId:l,isValidConnection:u=s3},c,d,f,h){const m=o==="target",v=e?s.querySelector(`.${a}-flow__handle[data-id="${l}-${e?.nodeId}-${e?.id}-${e?.type}"]`):null,{x:g,y:p}=fi(t),b=s.elementFromPoint(g,p),M=b?.classList.contains(`${a}-flow__handle`)?b:v,_={handleDomNode:M,isValid:!1,connection:null,toHandle:null};if(M){const P=uy(void 0,M),D=M.getAttribute("data-nodeid"),B=M.getAttribute("data-handleid"),y=M.classList.contains("connectable"),x=M.classList.contains("connectableend");if(!D||!P)return _;const T={source:m?D:i,sourceHandle:m?B:r,target:m?i:D,targetHandle:m?r:B};_.connection=T;const I=y&&x&&(n===Vr.Strict?m&&P==="source"||!m&&P==="target":D!==i||B!==r);_.isValid=I&&u(T,{nodes:d,edges:c,sourceNode:f(T.source),targetNode:f(T.target)}),_.toHandle=cy(D,P,B,h,n,!0)}return _}function uy(t,e){return t||(e?.classList.contains("target")?"target":e?.classList.contains("source")?"source":null)}function c3(t,e){let n=null;return e?n="valid":t&&!e&&(n="invalid"),n}function d3(t,e){let n=null;return e?n=!0:t&&!e&&(n=!1),n}function cy(t,e,n,i,r,o=!1){var s,a,l;const u=i.get(t);if(!u)return null;const c=r===Vr.Strict?(s=u.handleBounds)==null?void 0:s[e]:[...((a=u.handleBounds)==null?void 0:a.source)??[],...((l=u.handleBounds)==null?void 0:l.target)??[]],d=(n?c?.find(f=>f.id===n):c?.[0])??null;return d&&o?{...d,...ms(u,d,d.position,!0)}:d}const Wf={[Ye.Left]:Ye.Right,[Ye.Right]:Ye.Left,[Ye.Top]:Ye.Bottom,[Ye.Bottom]:Ye.Top},f3=["production","prod"];function Oa(t,...e){dy()&&console.warn(`[Vue Flow]: ${t}`,...e)}function dy(){return!f3.includes("production")}function Ig(t,e,n,i,r){const o=e.querySelectorAll(`.vue-flow__handle.${t}`);return o?.length?Array.from(o).map(s=>{const a=s.getBoundingClientRect();return{id:s.getAttribute("data-handleid"),type:t,nodeId:r,position:s.getAttribute("data-handlepos"),x:(a.left-n.left)/i,y:(a.top-n.top)/i,...nc(s)}}):null}function Xf(t,e,n,i,r,o=!1,s){r.value=!1,t.selected?(o||t.selected&&e)&&(i([t]),rn(()=>{s.blur()})):n([t])}function $t(t){return typeof fe(t)<"u"}function h3(t,e,n,i){if(!t||!t.source||!t.target)return n(new Yt(Gt.EDGE_INVALID,t?.id??"[ID UNKNOWN]")),!1;let r;return $r(t)?r=t:r={...t,id:ny(t)},r=ey(r,void 0,i),YP(r,e)?!1:r}function p3(t,e,n,i,r){if(!e.source||!e.target)return r(new Yt(Gt.EDGE_INVALID,t.id)),!1;if(!n)return r(new Yt(Gt.EDGE_NOT_FOUND,t.id)),!1;const{id:o,...s}=t;return{...s,id:i?ny(e):o,source:e.source,target:e.target,sourceHandle:e.sourceHandle,targetHandle:e.targetHandle}}function Pg(t,e,n){const i={},r=[];for(let o=0;o<t.length;++o){const s=t[o];if(!yo(s)){n(new Yt(Gt.NODE_INVALID,s?.id)||`[ID UNKNOWN|INDEX ${o}]`);continue}const a=GP(s,e(s.id),s.parentNode);s.parentNode&&(i[s.parentNode]=!0),r[o]=a}for(const o of r){const s=e(o.parentNode)||r.find(a=>a.id===o.parentNode);o.parentNode&&!s&&n(new Yt(Gt.NODE_MISSING_PARENT,o.id,o.parentNode)),(o.parentNode||i[o.id])&&(i[o.id]&&(o.isParent=!0),s&&(s.isParent=!0))}return r}function Ng(t,e,n,i,r,o){let s=r;const a=i.get(s)||new Map;i.set(s,a.set(n,e)),s=`${r}-${t}`;const l=i.get(s)||new Map;if(i.set(s,l.set(n,e)),o){s=`${r}-${t}-${o}`;const u=i.get(s)||new Map;i.set(s,u.set(n,e))}}function gd(t,e,n){t.clear();for(const i of n){const{source:r,target:o,sourceHandle:s=null,targetHandle:a=null}=i,l={edgeId:i.id,source:r,target:o,sourceHandle:s,targetHandle:a},u=`${r}-${s}--${o}-${a}`,c=`${o}-${a}--${r}-${s}`;Ng("source",l,c,t,r,s),Ng("target",l,u,t,o,a)}}function Dg(t,e){if(t.size!==e.size)return!1;for(const n of t)if(!e.has(n))return!1;return!0}function vd(t,e,n,i,r,o,s,a){const l=[];for(const u of t){const c=$r(u)?u:h3(u,a,r,o);if(!c)continue;const d=n(c.source),f=n(c.target);if(!d||!f){r(new Yt(Gt.EDGE_SOURCE_TARGET_MISSING,c.id,c.source,c.target));continue}if(!d){r(new Yt(Gt.EDGE_SOURCE_MISSING,c.id,c.source));continue}if(!f){r(new Yt(Gt.EDGE_TARGET_MISSING,c.id,c.target));continue}if(e&&!e(c,{edges:a,nodes:s,sourceNode:d,targetNode:f})){r(new Yt(Gt.EDGE_INVALID,c.id));continue}const h=i(c.id);l.push({...ey(c,h,o),sourceNode:d,targetNode:f})}return l}const Lg=Symbol("vueFlow"),qh=Symbol("nodeId"),fy=Symbol("nodeRef"),m3=Symbol("edgeId"),g3=Symbol("edgeRef"),rc=Symbol("slots");function hy(t){const{vueFlowRef:e,snapToGrid:n,snapGrid:i,noDragClassName:r,nodeLookup:o,nodeExtent:s,nodeDragThreshold:a,viewport:l,autoPanOnNodeDrag:u,autoPanSpeed:c,nodesDraggable:d,panBy:f,findNode:h,multiSelectionActive:m,nodesSelectionActive:v,selectNodesOnDrag:g,removeSelectedElements:p,addSelectedNodes:b,updateNodePositions:M,emits:_}=Dt(),{onStart:P,onDrag:D,onStop:B,onClick:y,el:x,disabled:T,id:E,selectable:I,dragHandle:q}=t,w=Nr(!1);let k=[],A,N=null,O={x:void 0,y:void 0},$={x:0,y:0},K=null,te=!1,ne=!1,ge=0,Ee=!1;const Se=py(),G=({x:H,y:X})=>{O={x:H,y:X};let L=!1;if(k=k.map(F=>{const z={x:H-F.distance.x,y:X-F.distance.y},{computedPosition:J}=Xh(F,n.value?ic(z,i.value):z,_.error,s.value,F.parentNode?h(F.parentNode):void 0);return L=L||F.position.x!==J.x||F.position.y!==J.y,F.position=J,F}),ne=ne||L,!!L&&(M(k,!0,!0),w.value=!0,K)){const[F,z]=pd({id:E,dragItems:k,findNode:h});D({event:K,node:F,nodes:z})}},U=()=>{if(!N)return;const[H,X]=ay($,N,c.value);if(H!==0||X!==0){const L={x:(O.x??0)-H/l.value.zoom,y:(O.y??0)-X/l.value.zoom};f({x:H,y:X})&&G(L)}ge=requestAnimationFrame(U)},Y=(H,X)=>{te=!0;const L=h(E);!g.value&&!m.value&&L&&(L.selected||p()),L&&ht(I)&&g.value&&Xf(L,m.value,b,p,v,!1,X);const F=Se(H.sourceEvent);if(O=F,k=JP(o.value,d.value,F,E),k.length){const[z,J]=pd({id:E,dragItems:k,findNode:h});P({event:H.sourceEvent,node:z,nodes:J})}},he=(H,X)=>{var L;H.sourceEvent.type==="touchmove"&&H.sourceEvent.touches.length>1||(ne=!1,a.value===0&&Y(H,X),O=Se(H.sourceEvent),N=((L=e.value)==null?void 0:L.getBoundingClientRect())||null,$=fi(H.sourceEvent,N))},xe=(H,X)=>{const L=Se(H.sourceEvent);if(!Ee&&te&&u.value&&(Ee=!0,U()),!te){const F=L.xSnapped-(O.x??0),z=L.ySnapped-(O.y??0);Math.sqrt(F*F+z*z)>a.value&&Y(H,X)}(O.x!==L.xSnapped||O.y!==L.ySnapped)&&k.length&&te&&(K=H.sourceEvent,$=fi(H.sourceEvent,N),G(L))},we=H=>{let X=!1;if(!te&&!w.value&&!m.value){const L=H.sourceEvent,F=Se(L),z=F.xSnapped-(O.x??0),J=F.ySnapped-(O.y??0),C=Math.sqrt(z*z+J*J);C!==0&&C<=a.value&&(y?.(L),X=!0)}if(k.length&&!X){ne&&(M(k,!1,!1),ne=!1);const[L,F]=pd({id:E,dragItems:k,findNode:h});B({event:H.sourceEvent,node:L,nodes:F})}k=[],w.value=!1,Ee=!1,te=!1,O={x:void 0,y:void 0},cancelAnimationFrame(ge)};return lt([()=>ht(T),x],([H,X],L,F)=>{if(X){const z=Xn(X);H||(A=HR().on("start",J=>he(J,X)).on("drag",J=>xe(J,X)).on("end",J=>we(J)).filter(J=>{const C=J.target,ae=ht(q);return!J.button&&(!r.value||!Tg(C,`.${r.value}`,X)&&(!ae||Tg(C,ae,X)))}),z.call(A)),F(()=>{z.on(".drag",null),A&&(A.on("start",null),A.on("drag",null),A.on("end",null))})}}),w}function v3(){return{doubleClick:He(),click:He(),mouseEnter:He(),mouseMove:He(),mouseLeave:He(),contextMenu:He(),updateStart:He(),update:He(),updateEnd:He()}}function _3(t,e){const n=v3();return n.doubleClick.on(i=>{var r,o;e.edgeDoubleClick(i),(o=(r=t.events)==null?void 0:r.doubleClick)==null||o.call(r,i)}),n.click.on(i=>{var r,o;e.edgeClick(i),(o=(r=t.events)==null?void 0:r.click)==null||o.call(r,i)}),n.mouseEnter.on(i=>{var r,o;e.edgeMouseEnter(i),(o=(r=t.events)==null?void 0:r.mouseEnter)==null||o.call(r,i)}),n.mouseMove.on(i=>{var r,o;e.edgeMouseMove(i),(o=(r=t.events)==null?void 0:r.mouseMove)==null||o.call(r,i)}),n.mouseLeave.on(i=>{var r,o;e.edgeMouseLeave(i),(o=(r=t.events)==null?void 0:r.mouseLeave)==null||o.call(r,i)}),n.contextMenu.on(i=>{var r,o;e.edgeContextMenu(i),(o=(r=t.events)==null?void 0:r.contextMenu)==null||o.call(r,i)}),n.updateStart.on(i=>{var r,o;e.edgeUpdateStart(i),(o=(r=t.events)==null?void 0:r.updateStart)==null||o.call(r,i)}),n.update.on(i=>{var r,o;e.edgeUpdate(i),(o=(r=t.events)==null?void 0:r.update)==null||o.call(r,i)}),n.updateEnd.on(i=>{var r,o;e.edgeUpdateEnd(i),(o=(r=t.events)==null?void 0:r.updateEnd)==null||o.call(r,i)}),Object.entries(n).reduce((i,[r,o])=>(i.emit[r]=o.trigger,i.on[r]=o.on,i),{emit:{},on:{}})}function py(){const{viewport:t,snapGrid:e,snapToGrid:n,vueFlowRef:i}=Dt();return r=>{var o;const s=((o=i.value)==null?void 0:o.getBoundingClientRect())??{left:0,top:0},a=r3(r)?r.sourceEvent:r,{x:l,y:u}=fi(a,s),c=ya({x:l,y:u},t.value),{x:d,y:f}=n.value?ic(c,e.value):c;return{xSnapped:d,ySnapped:f,...c}}}function bl(){return!0}function my({handleId:t,nodeId:e,type:n,isValidConnection:i,edgeUpdaterType:r,onEdgeUpdate:o,onEdgeUpdateEnd:s}){const{id:a,vueFlowRef:l,connectionMode:u,connectionRadius:c,connectOnClick:d,connectionClickStartHandle:f,nodesConnectable:h,autoPanOnConnect:m,autoPanSpeed:v,findNode:g,panBy:p,startConnection:b,updateConnection:M,endConnection:_,emits:P,viewport:D,edges:B,nodes:y,isValidConnection:x,nodeLookup:T}=Dt();let E=null,I=!1,q=null;function w(A){var N;const O=ht(n)==="target",$=Yh(A),K=_g(A.target),te=A.currentTarget;if(te&&($&&A.button===0||!$)){let ne=function(ee){L=fi(ee,we),G=u3(ya(L,D.value,!1,[1,1]),c.value,T.value,J),F||(z(),F=!0);const R=Rg(ee,{handle:G,connectionMode:u.value,fromNodeId:ht(e),fromHandleId:ht(t),fromType:O?"target":"source",isValidConnection:Se,doc:K,lib:"vue",flowId:a,nodeLookup:T.value},B.value,y.value,g,T.value);q=R.handleDomNode,E=R.connection,I=d3(!!G,R.isValid);const S={...j,isValid:I,to:R.toHandle&&I?_a({x:R.toHandle.x,y:R.toHandle.y},D.value):L,toHandle:R.toHandle,toPosition:I&&R.toHandle?R.toHandle.position:Wf[J.position],toNode:R.toHandle?T.value.get(R.toHandle.nodeId):null};if(I&&G&&j?.toHandle&&S.toHandle&&j.toHandle.type===S.toHandle.type&&j.toHandle.nodeId===S.toHandle.nodeId&&j.toHandle.id===S.toHandle.id&&j.to.x===S.to.x&&j.to.y===S.to.y)return;const Z=G??R.toHandle;if(M(Z&&I?_a({x:Z.x,y:Z.y},D.value):L,Z,c3(!!Z,I)),j=S,!G&&!I&&!q)return md(X);E&&E.source!==E.target&&q&&(md(X),X=q,q.classList.add("connecting","vue-flow__handle-connecting"),q.classList.toggle("valid",!!I),q.classList.toggle("vue-flow__handle-valid",!!I))},ge=function(ee){"touches"in ee&&ee.touches.length>0||((G||q)&&E&&I&&(o?o(ee,E):P.connect(E)),P.connectEnd(ee),r&&s?.(ee),md(X),cancelAnimationFrame(U),_(ee),F=!1,I=!1,E=null,q=null,K.removeEventListener("mousemove",ne),K.removeEventListener("mouseup",ge),K.removeEventListener("touchmove",ne),K.removeEventListener("touchend",ge))};const Ee=g(ht(e));let Se=ht(i)||x.value||bl;!Se&&Ee&&(Se=(O?Ee.isValidSourcePos:Ee.isValidTargetPos)||bl);let G,U=0;const{x:Y,y:he}=fi(A),xe=uy(ht(r),te),we=(N=l.value)==null?void 0:N.getBoundingClientRect();if(!we||!xe)return;const H=cy(ht(e),xe,ht(t),T.value,u.value);if(!H)return;let X,L=fi(A,we),F=!1;const z=()=>{if(!m.value)return;const[ee,R]=ay(L,we,v.value);p({x:ee,y:R}),U=requestAnimationFrame(z)},J={...H,nodeId:ht(e),type:xe,position:H.position},C=T.value.get(ht(e)),W={inProgress:!0,isValid:null,from:ms(C,J,Ye.Left,!0),fromHandle:J,fromPosition:J.position,fromNode:C,to:L,toHandle:null,toPosition:Wf[J.position],toNode:null};b({nodeId:ht(e),id:ht(t),type:xe,position:te?.getAttribute("data-handlepos")||Ye.Top,...L},{x:Y-we.left,y:he-we.top}),P.connectStart({event:A,nodeId:ht(e),handleId:ht(t),handleType:xe});let j=W;K.addEventListener("mousemove",ne),K.addEventListener("mouseup",ge),K.addEventListener("touchmove",ne),K.addEventListener("touchend",ge)}}function k(A){var N,O;if(!d.value)return;const $=ht(n)==="target";if(!f.value){P.clickConnectStart({event:A,nodeId:ht(e),handleId:ht(t)}),b({nodeId:ht(e),type:ht(n),id:ht(t),position:Ye.Top,...fi(A)},void 0,!0);return}let K=ht(i)||x.value||bl;const te=g(ht(e));if(!K&&te&&(K=($?te.isValidSourcePos:te.isValidTargetPos)||bl),te&&(typeof te.connectable>"u"?h.value:te.connectable)===!1)return;const ne=_g(A.target),ge=Rg(A,{handle:{nodeId:ht(e),id:ht(t),type:ht(n),position:Ye.Top,...fi(A)},connectionMode:u.value,fromNodeId:f.value.nodeId,fromHandleId:f.value.id??null,fromType:f.value.type,isValidConnection:K,doc:ne,lib:"vue",flowId:a,nodeLookup:T.value},B.value,y.value,g,T.value),Ee=((N=ge.connection)==null?void 0:N.source)===((O=ge.connection)==null?void 0:O.target);ge.isValid&&ge.connection&&!Ee&&P.connect(ge.connection),P.clickConnectEnd(A),_(A,!0)}return{handlePointerDown:w,handleClick:k}}function y3(){return Pn(qh,"")}function gy(t){const e=t??y3()??"",n=Pn(fy,Ie(null)),{findNode:i,edges:r,emits:o}=Dt(),s=i(e);return s||o.error(new Yt(Gt.NODE_NOT_FOUND,e)),{id:e,nodeEl:n,node:s,parentNode:Re(()=>i(s.parentNode)),connectedEdges:Re(()=>lo([s],r.value))}}function x3(){return{doubleClick:He(),click:He(),mouseEnter:He(),mouseMove:He(),mouseLeave:He(),contextMenu:He(),dragStart:He(),drag:He(),dragStop:He()}}function b3(t,e){const n=x3();return n.doubleClick.on(i=>{var r,o;e.nodeDoubleClick(i),(o=(r=t.events)==null?void 0:r.doubleClick)==null||o.call(r,i)}),n.click.on(i=>{var r,o;e.nodeClick(i),(o=(r=t.events)==null?void 0:r.click)==null||o.call(r,i)}),n.mouseEnter.on(i=>{var r,o;e.nodeMouseEnter(i),(o=(r=t.events)==null?void 0:r.mouseEnter)==null||o.call(r,i)}),n.mouseMove.on(i=>{var r,o;e.nodeMouseMove(i),(o=(r=t.events)==null?void 0:r.mouseMove)==null||o.call(r,i)}),n.mouseLeave.on(i=>{var r,o;e.nodeMouseLeave(i),(o=(r=t.events)==null?void 0:r.mouseLeave)==null||o.call(r,i)}),n.contextMenu.on(i=>{var r,o;e.nodeContextMenu(i),(o=(r=t.events)==null?void 0:r.contextMenu)==null||o.call(r,i)}),n.dragStart.on(i=>{var r,o;e.nodeDragStart(i),(o=(r=t.events)==null?void 0:r.dragStart)==null||o.call(r,i)}),n.drag.on(i=>{var r,o;e.nodeDrag(i),(o=(r=t.events)==null?void 0:r.drag)==null||o.call(r,i)}),n.dragStop.on(i=>{var r,o;e.nodeDragStop(i),(o=(r=t.events)==null?void 0:r.dragStop)==null||o.call(r,i)}),Object.entries(n).reduce((i,[r,o])=>(i.emit[r]=o.trigger,i.on[r]=o.on,i),{emit:{},on:{}})}function vy(){const{getSelectedNodes:t,nodeExtent:e,updateNodePositions:n,findNode:i,snapGrid:r,snapToGrid:o,nodesDraggable:s,emits:a}=Dt();return(l,u=!1)=>{const c=o.value?r.value[0]:5,d=o.value?r.value[1]:5,f=u?4:1,h=l.x*c*f,m=l.y*d*f,v=[];for(const g of t.value)if(g.draggable||s&&typeof g.draggable>"u"){const p={x:g.computedPosition.x+h,y:g.computedPosition.y+m},{position:b}=Xh(g,p,a.error,e.value,g.parentNode?i(g.parentNode):void 0);v.push({id:g.id,position:b,from:g.position,distance:{x:l.x,y:l.y},dimensions:g.dimensions})}n(v,!0,!1)}}const Sl=.1,S3=t=>((t*=2)<=1?t*t*t:(t-=2)*t*t+2)/2;function xr(){return Oa("Viewport not initialized yet."),Promise.resolve(!1)}const M3={zoomIn:xr,zoomOut:xr,zoomTo:xr,fitView:xr,setCenter:xr,fitBounds:xr,project:t=>t,screenToFlowCoordinate:t=>t,flowToScreenCoordinate:t=>t,setViewport:xr,setTransform:xr,getViewport:()=>({x:0,y:0,zoom:1}),getTransform:()=>({x:0,y:0,zoom:1}),viewportInitialized:!1};function w3(t){function e(i,r){return new Promise(o=>{t.d3Selection&&t.d3Zoom?t.d3Zoom.interpolate(r?.interpolate==="linear"?Qs:$l).scaleBy(_d(t.d3Selection,r?.duration,r?.ease,()=>{o(!0)}),i):o(!1)})}function n(i,r,o,s){return new Promise(a=>{var l;const{x:u,y:c}=Q_({x:-i,y:-r},t.translateExtent),d=ps.translate(-u,-c).scale(o);t.d3Selection&&t.d3Zoom?(l=t.d3Zoom)==null||l.interpolate(s?.interpolate==="linear"?Qs:$l).transform(_d(t.d3Selection,s?.duration,s?.ease,()=>{a(!0)}),d):a(!1)})}return Re(()=>t.d3Zoom&&t.d3Selection&&t.dimensions.width&&t.dimensions.height?{viewportInitialized:!0,zoomIn:r=>e(1.2,r),zoomOut:r=>e(1/1.2,r),zoomTo:(r,o)=>new Promise(s=>{t.d3Selection&&t.d3Zoom?t.d3Zoom.interpolate(o?.interpolate==="linear"?Qs:$l).scaleTo(_d(t.d3Selection,o?.duration,o?.ease,()=>{s(!0)}),r):s(!1)}),setViewport:(r,o)=>n(r.x,r.y,r.zoom,o),setTransform:(r,o)=>n(r.x,r.y,r.zoom,o),getViewport:()=>({x:t.viewport.x,y:t.viewport.y,zoom:t.viewport.zoom}),getTransform:()=>({x:t.viewport.x,y:t.viewport.y,zoom:t.viewport.zoom}),fitView:(r={padding:Sl,includeHiddenNodes:!1,duration:0})=>{var o,s;const a=[];for(const f of t.nodes)f.dimensions.width&&f.dimensions.height&&(r?.includeHiddenNodes||!f.hidden)&&(!((o=r.nodes)!=null&&o.length)||(s=r.nodes)!=null&&s.length&&r.nodes.includes(f.id))&&a.push(f);if(!a.length)return Promise.resolve(!1);const l=Wh(a),{x:u,y:c,zoom:d}=yg(l,t.dimensions.width,t.dimensions.height,r.minZoom??t.minZoom,r.maxZoom??t.maxZoom,r.padding??Sl);return n(u,c,d,r)},setCenter:(r,o,s)=>{const a=typeof s?.zoom<"u"?s.zoom:t.maxZoom,l=t.dimensions.width/2-r*a,u=t.dimensions.height/2-o*a;return n(l,u,a,s)},fitBounds:(r,o={padding:Sl})=>{const{x:s,y:a,zoom:l}=yg(r,t.dimensions.width,t.dimensions.height,t.minZoom,t.maxZoom,o.padding??Sl);return n(s,a,l,o)},project:r=>ya(r,t.viewport,t.snapToGrid,t.snapGrid),screenToFlowCoordinate:r=>{if(t.vueFlowRef){const{x:o,y:s}=t.vueFlowRef.getBoundingClientRect(),a={x:r.x-o,y:r.y-s};return ya(a,t.viewport,t.snapToGrid,t.snapGrid)}return{x:0,y:0}},flowToScreenCoordinate:r=>{if(t.vueFlowRef){const{x:o,y:s}=t.vueFlowRef.getBoundingClientRect(),a={x:r.x+o,y:r.y+s};return _a(a,t.viewport)}return{x:0,y:0}}}:M3)}function _d(t,e=0,n=S3,i=()=>{}){const r=typeof e=="number"&&e>0;return r||i(),r?t.transition().duration(e).ease(n).on("end",i):t}function E3(t,e,n){const i=Fu(!0);return i.run(()=>{const r=()=>{i.run(()=>{let v,g,p=!!(n.nodes.value.length||n.edges.value.length);v=Xo([t.modelValue,()=>{var b,M;return(M=(b=t.modelValue)==null?void 0:b.value)==null?void 0:M.length}],([b])=>{b&&Array.isArray(b)&&(g?.pause(),n.setElements(b),!g&&!p&&b.length?p=!0:g?.resume())}),g=Xo([n.nodes,n.edges,()=>n.edges.value.length,()=>n.nodes.value.length],([b,M])=>{var _;(_=t.modelValue)!=null&&_.value&&Array.isArray(t.modelValue.value)&&(v?.pause(),t.modelValue.value=[...b,...M],rn(()=>{v?.resume()}))},{immediate:p}),Ws(()=>{v?.stop(),g?.stop()})})},o=()=>{i.run(()=>{let v,g,p=!!n.nodes.value.length;v=Xo([t.nodes,()=>{var b,M;return(M=(b=t.nodes)==null?void 0:b.value)==null?void 0:M.length}],([b])=>{b&&Array.isArray(b)&&(g?.pause(),n.setNodes(b),!g&&!p&&b.length?p=!0:g?.resume())}),g=Xo([n.nodes,()=>n.nodes.value.length],([b])=>{var M;(M=t.nodes)!=null&&M.value&&Array.isArray(t.nodes.value)&&(v?.pause(),t.nodes.value=[...b],rn(()=>{v?.resume()}))},{immediate:p}),Ws(()=>{v?.stop(),g?.stop()})})},s=()=>{i.run(()=>{let v,g,p=!!n.edges.value.length;v=Xo([t.edges,()=>{var b,M;return(M=(b=t.edges)==null?void 0:b.value)==null?void 0:M.length}],([b])=>{b&&Array.isArray(b)&&(g?.pause(),n.setEdges(b),!g&&!p&&b.length?p=!0:g?.resume())}),g=Xo([n.edges,()=>n.edges.value.length],([b])=>{var M;(M=t.edges)!=null&&M.value&&Array.isArray(t.edges.value)&&(v?.pause(),t.edges.value=[...b],rn(()=>{v?.resume()}))},{immediate:p}),Ws(()=>{v?.stop(),g?.stop()})})},a=()=>{i.run(()=>{lt(()=>e.maxZoom,()=>{e.maxZoom&&$t(e.maxZoom)&&n.setMaxZoom(e.maxZoom)},{immediate:!0})})},l=()=>{i.run(()=>{lt(()=>e.minZoom,()=>{e.minZoom&&$t(e.minZoom)&&n.setMinZoom(e.minZoom)},{immediate:!0})})},u=()=>{i.run(()=>{lt(()=>e.translateExtent,()=>{e.translateExtent&&$t(e.translateExtent)&&n.setTranslateExtent(e.translateExtent)},{immediate:!0})})},c=()=>{i.run(()=>{lt(()=>e.nodeExtent,()=>{e.nodeExtent&&$t(e.nodeExtent)&&n.setNodeExtent(e.nodeExtent)},{immediate:!0})})},d=()=>{i.run(()=>{lt(()=>e.applyDefault,()=>{$t(e.applyDefault)&&(n.applyDefault.value=e.applyDefault)},{immediate:!0})})},f=()=>{i.run(()=>{const v=async g=>{let p=g;typeof e.autoConnect=="function"&&(p=await e.autoConnect(g)),p!==!1&&n.addEdges([p])};lt(()=>e.autoConnect,()=>{$t(e.autoConnect)&&(n.autoConnect.value=e.autoConnect)},{immediate:!0}),lt(n.autoConnect,(g,p,b)=>{g?n.onConnect(v):n.hooks.value.connect.off(v),b(()=>{n.hooks.value.connect.off(v)})},{immediate:!0})})},h=()=>{const v=["id","modelValue","translateExtent","nodeExtent","edges","nodes","maxZoom","minZoom","applyDefault","autoConnect"];for(const g of Object.keys(e)){const p=g;if(!v.includes(p)){const b=bt(()=>e[p]),M=n[p];Ut(M)&&i.run(()=>{lt(b,_=>{$t(_)&&(M.value=_)},{immediate:!0})})}}};r(),o(),s(),l(),a(),u(),c(),d(),f(),h()}),()=>i.stop()}function T3(){return{edgesChange:He(),nodesChange:He(),nodeDoubleClick:He(),nodeClick:He(),nodeMouseEnter:He(),nodeMouseMove:He(),nodeMouseLeave:He(),nodeContextMenu:He(),nodeDragStart:He(),nodeDrag:He(),nodeDragStop:He(),nodesInitialized:He(),miniMapNodeClick:He(),miniMapNodeDoubleClick:He(),miniMapNodeMouseEnter:He(),miniMapNodeMouseMove:He(),miniMapNodeMouseLeave:He(),connect:He(),connectStart:He(),connectEnd:He(),clickConnectStart:He(),clickConnectEnd:He(),paneReady:He(),init:He(),move:He(),moveStart:He(),moveEnd:He(),selectionDragStart:He(),selectionDrag:He(),selectionDragStop:He(),selectionContextMenu:He(),selectionStart:He(),selectionEnd:He(),viewportChangeStart:He(),viewportChange:He(),viewportChangeEnd:He(),paneScroll:He(),paneClick:He(),paneContextMenu:He(),paneMouseEnter:He(),paneMouseMove:He(),paneMouseLeave:He(),edgeContextMenu:He(),edgeMouseEnter:He(),edgeMouseMove:He(),edgeMouseLeave:He(),edgeDoubleClick:He(),edgeClick:He(),edgeUpdateStart:He(),edgeUpdate:He(),edgeUpdateEnd:He(),updateNodeInternals:He(),error:He(t=>Oa(t.message))}}function A3(t,e){const n=Mi();n0(()=>{for(const[r,o]of Object.entries(e.value)){const s=a=>{t(r,a)};o.setEmitter(s),ha(o.removeEmitter),o.setHasEmitListeners(()=>i(r)),ha(o.removeHasEmitListeners)}});function i(r){var o;const s=C3(r);return!!((o=n?.vnode.props)==null?void 0:o[s])}}function C3(t){const[e,...n]=t.split(":");return`on${e.replace(/(?:^|-)(\w)/g,(r,o)=>o.toUpperCase())}${n.length?`:${n.join(":")}`:""}`}function _y(){return{vueFlowRef:null,viewportRef:null,nodes:[],edges:[],connectionLookup:new Map,nodeTypes:{},edgeTypes:{},initialized:!1,dimensions:{width:0,height:0},viewport:{x:0,y:0,zoom:1},d3Zoom:null,d3Selection:null,d3ZoomHandler:null,minZoom:.5,maxZoom:2,translateExtent:[[Number.NEGATIVE_INFINITY,Number.NEGATIVE_INFINITY],[Number.POSITIVE_INFINITY,Number.POSITIVE_INFINITY]],nodeExtent:[[Number.NEGATIVE_INFINITY,Number.NEGATIVE_INFINITY],[Number.POSITIVE_INFINITY,Number.POSITIVE_INFINITY]],selectionMode:Gh.Full,paneDragging:!1,preventScrolling:!0,zoomOnScroll:!0,zoomOnPinch:!0,zoomOnDoubleClick:!0,panOnScroll:!1,panOnScrollSpeed:.5,panOnScrollMode:ea.Free,paneClickDistance:0,panOnDrag:!0,edgeUpdaterRadius:10,onlyRenderVisibleElements:!1,defaultViewport:{x:0,y:0,zoom:1},nodesSelectionActive:!1,userSelectionActive:!1,userSelectionRect:null,defaultMarkerColor:"#b1b1b7",connectionLineStyle:{},connectionLineType:null,connectionLineOptions:{type:ao.Bezier,style:{}},connectionMode:Vr.Loose,connectionStartHandle:null,connectionEndHandle:null,connectionClickStartHandle:null,connectionPosition:{x:Number.NaN,y:Number.NaN},connectionRadius:20,connectOnClick:!0,connectionStatus:null,isValidConnection:null,snapGrid:[15,15],snapToGrid:!1,edgesUpdatable:!1,edgesFocusable:!0,nodesFocusable:!0,nodesConnectable:!0,nodesDraggable:!0,nodeDragThreshold:1,elementsSelectable:!0,selectNodesOnDrag:!0,multiSelectionActive:!1,selectionKeyCode:"Shift",multiSelectionKeyCode:ba()?"Meta":"Control",zoomActivationKeyCode:ba()?"Meta":"Control",deleteKeyCode:"Backspace",panActivationKeyCode:"Space",hooks:T3(),applyDefault:!0,autoConnect:!1,fitViewOnInit:!1,fitViewOnInitDone:!1,noDragClassName:"nodrag",noWheelClassName:"nowheel",noPanClassName:"nopan",defaultEdgeOptions:void 0,elevateEdgesOnSelect:!1,elevateNodesOnSelect:!0,autoPanOnNodeDrag:!0,autoPanOnConnect:!0,autoPanSpeed:15,disableKeyboardA11y:!1,ariaLiveMessage:""}}const R3=["id","vueFlowRef","viewportRef","initialized","modelValue","nodes","edges","maxZoom","minZoom","translateExtent","hooks","defaultEdgeOptions"];function I3(t,e,n){const i=w3(t),r=L=>{const F=L??[];t.hooks.updateNodeInternals.trigger(F)},o=L=>XP(L,t.nodes,t.edges),s=L=>WP(L,t.nodes,t.edges),a=L=>lo(L,t.edges),l=({id:L,type:F,nodeId:z})=>{var J;const C=L?`-${F}-${L}`:`-${F}`;return Array.from(((J=t.connectionLookup.get(`${z}${C}`))==null?void 0:J.values())??[])},u=L=>{if(L)return e.value.get(L)},c=L=>{if(L)return n.value.get(L)},d=(L,F,z)=>{var J,C;const ae=[];for(const W of L){const j={id:W.id,type:"position",dragging:z,from:W.from};if(F&&(j.position=W.position,W.parentNode)){const ee=u(W.parentNode);j.position={x:j.position.x-(((J=ee?.computedPosition)==null?void 0:J.x)??0),y:j.position.y-(((C=ee?.computedPosition)==null?void 0:C.y)??0)}}ae.push(j)}ae?.length&&t.hooks.nodesChange.trigger(ae)},f=L=>{if(!t.vueFlowRef)return;const F=t.vueFlowRef.querySelector(".vue-flow__transformationpane");if(!F)return;const z=window.getComputedStyle(F),{m22:J}=new window.DOMMatrixReadOnly(z.transform),C=[];for(const ae of L){const W=ae,j=u(W.id);if(j){const ee=nc(W.nodeElement);if(!!(ee.width&&ee.height&&(j.dimensions.width!==ee.width||j.dimensions.height!==ee.height||W.forceUpdate))){const S=W.nodeElement.getBoundingClientRect();j.dimensions=ee,j.handleBounds.source=Ig("source",W.nodeElement,S,J,j.id),j.handleBounds.target=Ig("target",W.nodeElement,S,J,j.id),C.push({id:j.id,type:"dimensions",dimensions:ee})}}}!t.fitViewOnInitDone&&t.fitViewOnInit&&i.value.fitView().then(()=>{t.fitViewOnInitDone=!0}),C.length&&t.hooks.nodesChange.trigger(C)},h=(L,F)=>{const z=new Set,J=new Set;for(const W of L)yo(W)?z.add(W.id):$r(W)&&J.add(W.id);const C=Ar(e.value,z,!0),ae=Ar(n.value,J);if(t.multiSelectionActive){for(const W of z)C.push(Mr(W,F));for(const W of J)ae.push(Mr(W,F))}C.length&&t.hooks.nodesChange.trigger(C),ae.length&&t.hooks.edgesChange.trigger(ae)},m=L=>{if(t.multiSelectionActive){const F=L.map(z=>Mr(z.id,!0));t.hooks.nodesChange.trigger(F);return}t.hooks.nodesChange.trigger(Ar(e.value,new Set(L.map(F=>F.id)),!0)),t.hooks.edgesChange.trigger(Ar(n.value))},v=L=>{if(t.multiSelectionActive){const F=L.map(z=>Mr(z.id,!0));t.hooks.edgesChange.trigger(F);return}t.hooks.edgesChange.trigger(Ar(n.value,new Set(L.map(F=>F.id)))),t.hooks.nodesChange.trigger(Ar(e.value,new Set,!0))},g=L=>{h(L,!0)},p=L=>{const z=(L||t.nodes).map(J=>(J.selected=!1,Mr(J.id,!1)));t.hooks.nodesChange.trigger(z)},b=L=>{const z=(L||t.edges).map(J=>(J.selected=!1,Mr(J.id,!1)));t.hooks.edgesChange.trigger(z)},M=L=>{if(!L||!L.length)return h([],!1);const F=L.reduce((z,J)=>{const C=Mr(J.id,!1);return yo(J)?z.nodes.push(C):z.edges.push(C),z},{nodes:[],edges:[]});F.nodes.length&&t.hooks.nodesChange.trigger(F.nodes),F.edges.length&&t.hooks.edgesChange.trigger(F.edges)},_=L=>{var F;(F=t.d3Zoom)==null||F.scaleExtent([L,t.maxZoom]),t.minZoom=L},P=L=>{var F;(F=t.d3Zoom)==null||F.scaleExtent([t.minZoom,L]),t.maxZoom=L},D=L=>{var F;(F=t.d3Zoom)==null||F.translateExtent(L),t.translateExtent=L},B=L=>{t.nodeExtent=L,r()},y=L=>{var F;(F=t.d3Zoom)==null||F.clickDistance(L)},x=L=>{t.nodesDraggable=L,t.nodesConnectable=L,t.elementsSelectable=L},T=L=>{const F=L instanceof Function?L(t.nodes):L;!t.initialized&&!F.length||(t.nodes=Pg(F,u,t.hooks.error.trigger))},E=L=>{const F=L instanceof Function?L(t.edges):L;if(!t.initialized&&!F.length)return;const z=vd(F,t.isValidConnection,u,c,t.hooks.error.trigger,t.defaultEdgeOptions,t.nodes,t.edges);gd(t.connectionLookup,n.value,z),t.edges=z},I=L=>{const F=L instanceof Function?L([...t.nodes,...t.edges]):L;!t.initialized&&!F.length||(T(F.filter(yo)),E(F.filter($r)))},q=L=>{let F=L instanceof Function?L(t.nodes):L;F=Array.isArray(F)?F:[F];const z=Pg(F,u,t.hooks.error.trigger),J=[];for(const C of z)J.push(Sg(C));J.length&&t.hooks.nodesChange.trigger(J)},w=L=>{let F=L instanceof Function?L(t.edges):L;F=Array.isArray(F)?F:[F];const z=vd(F,t.isValidConnection,u,c,t.hooks.error.trigger,t.defaultEdgeOptions,t.nodes,t.edges),J=[];for(const C of z)J.push(Sg(C));J.length&&t.hooks.edgesChange.trigger(J)},k=(L,F=!0,z=!1)=>{const J=L instanceof Function?L(t.nodes):L,C=Array.isArray(J)?J:[J],ae=[],W=[];function j(R){const S=a(R);for(const Z of S)(!$t(Z.deletable)||Z.deletable)&&W.push(wg(Z.id,Z.source,Z.target,Z.sourceHandle,Z.targetHandle))}function ee(R){const S=[];for(const Z of t.nodes)Z.parentNode===R&&S.push(Z);if(S.length){for(const Z of S)ae.push(Mg(Z.id));F&&j(S);for(const Z of S)ee(Z.id)}}for(const R of C){const S=typeof R=="string"?u(R):R;S&&($t(S.deletable)&&!S.deletable||(ae.push(Mg(S.id)),F&&j([S]),z&&ee(S.id)))}W.length&&t.hooks.edgesChange.trigger(W),ae.length&&t.hooks.nodesChange.trigger(ae)},A=L=>{const F=L instanceof Function?L(t.edges):L,z=Array.isArray(F)?F:[F],J=[];for(const C of z){const ae=typeof C=="string"?c(C):C;ae&&($t(ae.deletable)&&!ae.deletable||J.push(wg(typeof C=="string"?C:C.id,ae.source,ae.target,ae.sourceHandle,ae.targetHandle)))}t.hooks.edgesChange.trigger(J)},N=(L,F,z=!0)=>{const J=c(L.id);if(!J)return!1;const C=t.edges.indexOf(J),ae=p3(L,F,J,z,t.hooks.error.trigger);if(ae){const[W]=vd([ae],t.isValidConnection,u,c,t.hooks.error.trigger,t.defaultEdgeOptions,t.nodes,t.edges);return t.edges=t.edges.map((j,ee)=>ee===C?W:j),gd(t.connectionLookup,n.value,[W]),W}return!1},O=(L,F,z={replace:!1})=>{const J=c(L);if(!J)return;const C=typeof F=="function"?F(J):F;J.data=z.replace?C:{...J.data,...C}},$=L=>bg(L,t.nodes),K=L=>{const F=bg(L,t.edges);return gd(t.connectionLookup,n.value,F),F},te=(L,F,z={replace:!1})=>{const J=u(L);if(!J)return;const C=typeof F=="function"?F(J):F;z.replace?t.nodes.splice(t.nodes.indexOf(J),1,C):Object.assign(J,C)},ne=(L,F,z={replace:!1})=>{const J=u(L);if(!J)return;const C=typeof F=="function"?F(J):F;J.data=z.replace?C:{...J.data,...C}},ge=(L,F,z=!1)=>{z?t.connectionClickStartHandle=L:t.connectionStartHandle=L,t.connectionEndHandle=null,t.connectionStatus=null,F&&(t.connectionPosition=F)},Ee=(L,F=null,z=null)=>{t.connectionStartHandle&&(t.connectionPosition=L,t.connectionEndHandle=F,t.connectionStatus=z)},Se=(L,F)=>{t.connectionPosition={x:Number.NaN,y:Number.NaN},t.connectionEndHandle=null,t.connectionStatus=null,F?t.connectionClickStartHandle=null:t.connectionStartHandle=null},G=L=>{const F=HP(L),z=F?null:Vs(L)?L:u(L.id);return!F&&!z?[null,null,F]:[F?L:xu(z),z,F]},U=(L,F=!0,z=t.nodes)=>{const[J,C,ae]=G(L);if(!J)return[];const W=[];for(const j of z||t.nodes){if(!ae&&(j.id===C.id||!j.computedPosition))continue;const ee=xu(j),R=bu(ee,J);(F&&R>0||R>=ee.width*ee.height||R>=Number(J.width)*Number(J.height))&&W.push(j)}return W},Y=(L,F,z=!0)=>{const[J]=G(L);if(!J)return!1;const C=bu(J,F);return z&&C>0||C>=Number(J.width)*Number(J.height)},he=L=>{const{viewport:F,dimensions:z,d3Zoom:J,d3Selection:C,translateExtent:ae}=t;if(!J||!C||!L.x&&!L.y)return!1;const W=ps.translate(F.x+L.x,F.y+L.y).scale(F.zoom),j=[[0,0],[z.width,z.height]],ee=J.constrain()(W,j,ae),R=t.viewport.x!==ee.x||t.viewport.y!==ee.y||t.viewport.zoom!==ee.k;return J.transform(C,ee),R},xe=L=>{const F=L instanceof Function?L(t):L,z=["d3Zoom","d3Selection","d3ZoomHandler","viewportRef","vueFlowRef","dimensions","hooks"];$t(F.defaultEdgeOptions)&&(t.defaultEdgeOptions=F.defaultEdgeOptions);const J=F.modelValue||F.nodes||F.edges?[]:void 0;J&&(F.modelValue&&J.push(...F.modelValue),F.nodes&&J.push(...F.nodes),F.edges&&J.push(...F.edges),I(J));const C=()=>{$t(F.maxZoom)&&P(F.maxZoom),$t(F.minZoom)&&_(F.minZoom),$t(F.translateExtent)&&D(F.translateExtent)};for(const ae of Object.keys(F)){const W=ae,j=F[W];![...R3,...z].includes(W)&&$t(j)&&(t[W]=j)}Df(()=>t.d3Zoom).not.toBeNull().then(C),t.initialized||(t.initialized=!0)};return{updateNodePositions:d,updateNodeDimensions:f,setElements:I,setNodes:T,setEdges:E,addNodes:q,addEdges:w,removeNodes:k,removeEdges:A,findNode:u,findEdge:c,updateEdge:N,updateEdgeData:O,updateNode:te,updateNodeData:ne,applyEdgeChanges:K,applyNodeChanges:$,addSelectedElements:g,addSelectedNodes:m,addSelectedEdges:v,setMinZoom:_,setMaxZoom:P,setTranslateExtent:D,setNodeExtent:B,setPaneClickDistance:y,removeSelectedElements:M,removeSelectedNodes:p,removeSelectedEdges:b,startConnection:ge,updateConnection:Ee,endConnection:Se,setInteractive:x,setState:xe,getIntersectingNodes:U,getIncomers:o,getOutgoers:s,getConnectedEdges:a,getHandleConnections:l,isNodeIntersecting:Y,panBy:he,fitView:L=>i.value.fitView(L),zoomIn:L=>i.value.zoomIn(L),zoomOut:L=>i.value.zoomOut(L),zoomTo:(L,F)=>i.value.zoomTo(L,F),setViewport:(L,F)=>i.value.setViewport(L,F),setTransform:(L,F)=>i.value.setTransform(L,F),getViewport:()=>i.value.getViewport(),getTransform:()=>i.value.getTransform(),setCenter:(L,F,z)=>i.value.setCenter(L,F,z),fitBounds:(L,F)=>i.value.fitBounds(L,F),project:L=>i.value.project(L),screenToFlowCoordinate:L=>i.value.screenToFlowCoordinate(L),flowToScreenCoordinate:L=>i.value.flowToScreenCoordinate(L),toObject:()=>{const L=[],F=[];for(const z of t.nodes){const{computedPosition:J,handleBounds:C,selected:ae,dimensions:W,isParent:j,resizing:ee,dragging:R,events:S,...Z}=z;L.push(Z)}for(const z of t.edges){const{selected:J,sourceNode:C,targetNode:ae,events:W,...j}=z;F.push(j)}return JSON.parse(JSON.stringify({nodes:L,edges:F,position:[t.viewport.x,t.viewport.y],zoom:t.viewport.zoom,viewport:t.viewport}))},fromObject:L=>new Promise(F=>{const{nodes:z,edges:J,position:C,zoom:ae,viewport:W}=L;z&&T(z),J&&E(J);const[j,ee]=W?.x&&W?.y?[W.x,W.y]:C??[null,null];if(j&&ee){const R=W?.zoom||ae||t.viewport.zoom;return Df(()=>i.value.viewportInitialized).toBe(!0).then(()=>{i.value.setViewport({x:j,y:ee,zoom:R}).then(()=>{F(!0)})})}else F(!0)}),updateNodeInternals:r,viewportHelper:i,$reset:()=>{const L=_y();if(t.edges=[],t.nodes=[],t.d3Zoom&&t.d3Selection){const F=ps.translate(L.defaultViewport.x??0,L.defaultViewport.y??0).scale(or(L.defaultViewport.zoom??1,L.minZoom,L.maxZoom)),z=t.viewportRef.getBoundingClientRect(),J=[[0,0],[z.width,z.height]],C=t.d3Zoom.constrain()(F,J,L.translateExtent);t.d3Zoom.transform(t.d3Selection,C)}xe(L)},$destroy:()=>{}}}const P3=["data-id","data-handleid","data-nodeid","data-handlepos"],N3={name:"Handle",compatConfig:{MODE:3}},xo=Nt({...N3,props:{id:{default:null},type:{},position:{default:()=>Ye.Top},isValidConnection:{type:Function},connectable:{type:[Boolean,Number,String,Function],default:void 0},connectableStart:{type:Boolean,default:!0},connectableEnd:{type:Boolean,default:!0}},setup(t,{expose:e}){const n=Ib(t,["position","connectable","connectableStart","connectableEnd","id"]),i=bt(()=>n.type??"source"),r=bt(()=>n.isValidConnection??null),{id:o,connectionStartHandle:s,connectionClickStartHandle:a,connectionEndHandle:l,vueFlowRef:u,nodesConnectable:c,noDragClassName:d,noPanClassName:f}=Dt(),{id:h,node:m,nodeEl:v,connectedEdges:g}=gy(),p=Ie(),b=bt(()=>typeof t.connectableStart<"u"?t.connectableStart:!0),M=bt(()=>typeof t.connectableEnd<"u"?t.connectableEnd:!0),_=bt(()=>{var E,I,q,w,k,A;return((E=s.value)==null?void 0:E.nodeId)===h&&((I=s.value)==null?void 0:I.id)===t.id&&((q=s.value)==null?void 0:q.type)===i.value||((w=l.value)==null?void 0:w.nodeId)===h&&((k=l.value)==null?void 0:k.id)===t.id&&((A=l.value)==null?void 0:A.type)===i.value}),P=bt(()=>{var E,I,q;return((E=a.value)==null?void 0:E.nodeId)===h&&((I=a.value)==null?void 0:I.id)===t.id&&((q=a.value)==null?void 0:q.type)===i.value}),{handlePointerDown:D,handleClick:B}=my({nodeId:h,handleId:t.id,isValidConnection:r,type:i}),y=Re(()=>typeof t.connectable=="string"&&t.connectable==="single"?!g.value.some(E=>{const I=E[`${i.value}Handle`];return E[i.value]!==h?!1:I?I===t.id:!0}):typeof t.connectable=="number"?g.value.filter(E=>{const I=E[`${i.value}Handle`];return E[i.value]!==h?!1:I?I===t.id:!0}).length<t.connectable:typeof t.connectable=="function"?t.connectable(m,g.value):$t(t.connectable)?t.connectable:c.value);mn(()=>{var E;if(!m.dimensions.width||!m.dimensions.height)return;const I=(E=m.handleBounds[i.value])==null?void 0:E.find($=>$.id===t.id);if(!u.value||I)return;const q=u.value.querySelector(".vue-flow__transformationpane");if(!v.value||!p.value||!q||!t.id)return;const w=v.value.getBoundingClientRect(),k=p.value.getBoundingClientRect(),A=window.getComputedStyle(q),{m22:N}=new window.DOMMatrixReadOnly(A.transform),O={id:t.id,position:t.position,x:(k.left-w.left)/N,y:(k.top-w.top)/N,type:i.value,nodeId:h,...nc(p.value)};m.handleBounds[i.value]=[...m.handleBounds[i.value]??[],O]});function x(E){const I=Yh(E);y.value&&b.value&&(I&&E.button===0||!I)&&D(E)}function T(E){!h||!a.value&&!b.value||y.value&&B(E)}return e({handleClick:B,handlePointerDown:D,onClick:T,onPointerDown:x}),(E,I)=>(ce(),me("div",{ref_key:"handle",ref:p,"data-id":`${fe(o)}-${fe(h)}-${t.id}-${i.value}`,"data-handleid":t.id,"data-nodeid":fe(h),"data-handlepos":E.position,class:ut(["vue-flow__handle",[`vue-flow__handle-${E.position}`,`vue-flow__handle-${t.id}`,fe(d),fe(f),i.value,{connectable:y.value,connecting:P.value,connectablestart:b.value,connectableend:M.value,connectionindicator:y.value&&(b.value&&!_.value||M.value&&_.value)}]]),onMousedown:x,onTouchstartPassive:x,onClick:T},[er(E.$slots,"default",{id:E.id})],42,P3))}}),oc=function({sourcePosition:t=Ye.Bottom,targetPosition:e=Ye.Top,label:n,connectable:i=!0,isValidTargetPos:r,isValidSourcePos:o,data:s}){const a=s.label??n;return[wt(xo,{type:"target",position:e,connectable:i,isValidConnection:r}),typeof a!="string"&&a?wt(a):wt(it,[a]),wt(xo,{type:"source",position:t,connectable:i,isValidConnection:o})]};oc.props=["sourcePosition","targetPosition","label","isValidTargetPos","isValidSourcePos","connectable","data"];oc.inheritAttrs=!1;oc.compatConfig={MODE:3};const D3=oc,sc=function({targetPosition:t=Ye.Top,label:e,connectable:n=!0,isValidTargetPos:i,data:r}){const o=r.label??e;return[wt(xo,{type:"target",position:t,connectable:n,isValidConnection:i}),typeof o!="string"&&o?wt(o):wt(it,[o])]};sc.props=["targetPosition","label","isValidTargetPos","connectable","data"];sc.inheritAttrs=!1;sc.compatConfig={MODE:3};const L3=sc,ac=function({sourcePosition:t=Ye.Bottom,label:e,connectable:n=!0,isValidSourcePos:i,data:r}){const o=r.label??e;return[typeof o!="string"&&o?wt(o):wt(it,[o]),wt(xo,{type:"source",position:t,connectable:n,isValidConnection:i})]};ac.props=["sourcePosition","label","isValidSourcePos","connectable","data"];ac.inheritAttrs=!1;ac.compatConfig={MODE:3};const F3=ac,U3=["transform"],O3=["width","height","x","y","rx","ry"],B3=["y"],k3={name:"EdgeText",compatConfig:{MODE:3}},z3=Nt({...k3,props:{x:{},y:{},label:{},labelStyle:{default:()=>({})},labelShowBg:{type:Boolean,default:!0},labelBgStyle:{default:()=>({})},labelBgPadding:{default:()=>[2,4]},labelBgBorderRadius:{default:2}},setup(t){const e=Ie({x:0,y:0,width:0,height:0}),n=Ie(null),i=Re(()=>`translate(${t.x-e.value.width/2} ${t.y-e.value.height/2})`);mn(r),lt([()=>t.x,()=>t.y,n,()=>t.label],r);function r(){if(!n.value)return;const o=n.value.getBBox();(o.width!==e.value.width||o.height!==e.value.height)&&(e.value=o)}return(o,s)=>(ce(),me("g",{transform:i.value,class:"vue-flow__edge-textwrapper"},[o.labelShowBg?(ce(),me("rect",{key:0,class:"vue-flow__edge-textbg",width:`${e.value.width+2*o.labelBgPadding[0]}px`,height:`${e.value.height+2*o.labelBgPadding[1]}px`,x:-o.labelBgPadding[0],y:-o.labelBgPadding[1],style:rt(o.labelBgStyle),rx:o.labelBgBorderRadius,ry:o.labelBgBorderRadius},null,12,O3)):Ge("",!0),Q("text",aa(o.$attrs,{ref_key:"el",ref:n,class:"vue-flow__edge-text",y:e.value.height/2,dy:"0.3em",style:o.labelStyle}),[er(o.$slots,"default",{},()=>[typeof o.label!="string"?(ce(),Qt(s0(o.label),{key:0})):(ce(),me(it,{key:1},[hi(Te(o.label),1)],64))])],16,B3)],8,U3))}}),V3=["id","d","marker-end","marker-start"],$3=["d","stroke-width"],H3={name:"BaseEdge",inheritAttrs:!1,compatConfig:{MODE:3}},lc=Nt({...H3,props:{id:{},labelX:{},labelY:{},path:{},label:{},markerStart:{},markerEnd:{},interactionWidth:{default:20},labelStyle:{},labelShowBg:{type:Boolean},labelBgStyle:{},labelBgPadding:{},labelBgBorderRadius:{}},setup(t,{expose:e}){const n=Ie(null),i=Ie(null),r=Ie(null),o=yh();return e({pathEl:n,interactionEl:i,labelEl:r}),(s,a)=>(ce(),me(it,null,[Q("path",aa(fe(o),{id:s.id,ref_key:"pathEl",ref:n,d:s.path,class:"vue-flow__edge-path","marker-end":s.markerEnd,"marker-start":s.markerStart}),null,16,V3),s.interactionWidth?(ce(),me("path",{key:0,ref_key:"interactionEl",ref:i,fill:"none",d:s.path,"stroke-width":s.interactionWidth,"stroke-opacity":0,class:"vue-flow__edge-interaction"},null,8,$3)):Ge("",!0),s.label&&s.labelX&&s.labelY?(ce(),Qt(z3,{key:1,ref_key:"labelEl",ref:r,x:s.labelX,y:s.labelY,label:s.label,"label-show-bg":s.labelShowBg,"label-bg-style":s.labelBgStyle,"label-bg-padding":s.labelBgPadding,"label-bg-border-radius":s.labelBgBorderRadius,"label-style":s.labelStyle},null,8,["x","y","label","label-show-bg","label-bg-style","label-bg-padding","label-bg-border-radius","label-style"])):Ge("",!0)],64))}});function yy({sourceX:t,sourceY:e,targetX:n,targetY:i}){const r=Math.abs(n-t)/2,o=n<t?n+r:n-r,s=Math.abs(i-e)/2,a=i<e?i+s:i-s;return[o,a,r,s]}function xy({sourceX:t,sourceY:e,targetX:n,targetY:i,sourceControlX:r,sourceControlY:o,targetControlX:s,targetControlY:a}){const l=t*.125+r*.375+s*.375+n*.125,u=e*.125+o*.375+a*.375+i*.125,c=Math.abs(l-t),d=Math.abs(u-e);return[l,u,c,d]}function Ml(t,e){return t>=0?.5*t:e*25*Math.sqrt(-t)}function Fg({pos:t,x1:e,y1:n,x2:i,y2:r,c:o}){let s,a;switch(t){case Ye.Left:s=e-Ml(e-i,o),a=n;break;case Ye.Right:s=e+Ml(i-e,o),a=n;break;case Ye.Top:s=e,a=n-Ml(n-r,o);break;case Ye.Bottom:s=e,a=n+Ml(r-n,o);break}return[s,a]}function by(t){const{sourceX:e,sourceY:n,sourcePosition:i=Ye.Bottom,targetX:r,targetY:o,targetPosition:s=Ye.Top,curvature:a=.25}=t,[l,u]=Fg({pos:i,x1:e,y1:n,x2:r,y2:o,c:a}),[c,d]=Fg({pos:s,x1:r,y1:o,x2:e,y2:n,c:a}),[f,h,m,v]=xy({sourceX:e,sourceY:n,targetX:r,targetY:o,sourceControlX:l,sourceControlY:u,targetControlX:c,targetControlY:d});return[`M${e},${n} C${l},${u} ${c},${d} ${r},${o}`,f,h,m,v]}function Ug({pos:t,x1:e,y1:n,x2:i,y2:r}){let o,s;switch(t){case Ye.Left:case Ye.Right:o=.5*(e+i),s=n;break;case Ye.Top:case Ye.Bottom:o=e,s=.5*(n+r);break}return[o,s]}function Sy(t){const{sourceX:e,sourceY:n,sourcePosition:i=Ye.Bottom,targetX:r,targetY:o,targetPosition:s=Ye.Top}=t,[a,l]=Ug({pos:i,x1:e,y1:n,x2:r,y2:o}),[u,c]=Ug({pos:s,x1:r,y1:o,x2:e,y2:n}),[d,f,h,m]=xy({sourceX:e,sourceY:n,targetX:r,targetY:o,sourceControlX:a,sourceControlY:l,targetControlX:u,targetControlY:c});return[`M${e},${n} C${a},${l} ${u},${c} ${r},${o}`,d,f,h,m]}const Og={[Ye.Left]:{x:-1,y:0},[Ye.Right]:{x:1,y:0},[Ye.Top]:{x:0,y:-1},[Ye.Bottom]:{x:0,y:1}};function G3({source:t,sourcePosition:e=Ye.Bottom,target:n}){return e===Ye.Left||e===Ye.Right?t.x<n.x?{x:1,y:0}:{x:-1,y:0}:t.y<n.y?{x:0,y:1}:{x:0,y:-1}}function Bg(t,e){return Math.sqrt((e.x-t.x)**2+(e.y-t.y)**2)}function W3({source:t,sourcePosition:e=Ye.Bottom,target:n,targetPosition:i=Ye.Top,center:r,offset:o}){const s=Og[e],a=Og[i],l={x:t.x+s.x*o,y:t.y+s.y*o},u={x:n.x+a.x*o,y:n.y+a.y*o},c=G3({source:l,sourcePosition:e,target:u}),d=c.x!==0?"x":"y",f=c[d];let h,m,v;const g={x:0,y:0},p={x:0,y:0},[b,M,_,P]=yy({sourceX:t.x,sourceY:t.y,targetX:n.x,targetY:n.y});if(s[d]*a[d]===-1){m=r.x??b,v=r.y??M;const B=[{x:m,y:l.y},{x:m,y:u.y}],y=[{x:l.x,y:v},{x:u.x,y:v}];s[d]===f?h=d==="x"?B:y:h=d==="x"?y:B}else{const B=[{x:l.x,y:u.y}],y=[{x:u.x,y:l.y}];if(d==="x"?h=s.x===f?y:B:h=s.y===f?B:y,e===i){const q=Math.abs(t[d]-n[d]);if(q<=o){const w=Math.min(o-1,o-q);s[d]===f?g[d]=(l[d]>t[d]?-1:1)*w:p[d]=(u[d]>n[d]?-1:1)*w}}if(e!==i){const q=d==="x"?"y":"x",w=s[d]===a[q],k=l[q]>u[q],A=l[q]<u[q];(s[d]===1&&(!w&&k||w&&A)||s[d]!==1&&(!w&&A||w&&k))&&(h=d==="x"?B:y)}const x={x:l.x+g.x,y:l.y+g.y},T={x:u.x+p.x,y:u.y+p.y},E=Math.max(Math.abs(x.x-h[0].x),Math.abs(T.x-h[0].x)),I=Math.max(Math.abs(x.y-h[0].y),Math.abs(T.y-h[0].y));E>=I?(m=(x.x+T.x)/2,v=h[0].y):(m=h[0].x,v=(x.y+T.y)/2)}return[[t,{x:l.x+g.x,y:l.y+g.y},...h,{x:u.x+p.x,y:u.y+p.y},n],m,v,_,P]}function X3(t,e,n,i){const r=Math.min(Bg(t,e)/2,Bg(e,n)/2,i),{x:o,y:s}=e;if(t.x===o&&o===n.x||t.y===s&&s===n.y)return`L${o} ${s}`;if(t.y===s){const u=t.x<n.x?-1:1,c=t.y<n.y?1:-1;return`L ${o+r*u},${s}Q ${o},${s} ${o},${s+r*c}`}const a=t.x<n.x?1:-1,l=t.y<n.y?-1:1;return`L ${o},${s+r*l}Q ${o},${s} ${o+r*a},${s}`}function Yf(t){const{sourceX:e,sourceY:n,sourcePosition:i=Ye.Bottom,targetX:r,targetY:o,targetPosition:s=Ye.Top,borderRadius:a=5,centerX:l,centerY:u,offset:c=20}=t,[d,f,h,m,v]=W3({source:{x:e,y:n},sourcePosition:i,target:{x:r,y:o},targetPosition:s,center:{x:l,y:u},offset:c});return[d.reduce((p,b,M)=>{let _;return M>0&&M<d.length-1?_=X3(d[M-1],b,d[M+1],a):_=`${M===0?"M":"L"}${b.x} ${b.y}`,p+=_,p},""),f,h,m,v]}function Y3(t){const{sourceX:e,sourceY:n,targetX:i,targetY:r}=t,[o,s,a,l]=yy({sourceX:e,sourceY:n,targetX:i,targetY:r});return[`M ${e},${n}L ${i},${r}`,o,s,a,l]}const q3=Nt({name:"StraightEdge",props:["label","labelStyle","labelShowBg","labelBgStyle","labelBgPadding","labelBgBorderRadius","sourceY","sourceX","targetX","targetY","markerEnd","markerStart","interactionWidth"],compatConfig:{MODE:3},setup(t,{attrs:e}){return()=>{const[n,i,r]=Y3(t);return wt(lc,{path:n,labelX:i,labelY:r,...e,...t})}}}),K3=q3,Z3=Nt({name:"SmoothStepEdge",props:["sourcePosition","targetPosition","label","labelStyle","labelShowBg","labelBgStyle","labelBgPadding","labelBgBorderRadius","sourceY","sourceX","targetX","targetY","borderRadius","markerEnd","markerStart","interactionWidth","offset"],compatConfig:{MODE:3},setup(t,{attrs:e}){return()=>{const[n,i,r]=Yf({...t,sourcePosition:t.sourcePosition??Ye.Bottom,targetPosition:t.targetPosition??Ye.Top});return wt(lc,{path:n,labelX:i,labelY:r,...e,...t})}}}),My=Z3,j3=Nt({name:"StepEdge",props:["sourcePosition","targetPosition","label","labelStyle","labelShowBg","labelBgStyle","labelBgPadding","labelBgBorderRadius","sourceY","sourceX","targetX","targetY","markerEnd","markerStart","interactionWidth"],setup(t,{attrs:e}){return()=>wt(My,{...t,...e,borderRadius:0})}}),J3=j3,Q3=Nt({name:"BezierEdge",props:["sourcePosition","targetPosition","label","labelStyle","labelShowBg","labelBgStyle","labelBgPadding","labelBgBorderRadius","sourceY","sourceX","targetX","targetY","curvature","markerEnd","markerStart","interactionWidth"],compatConfig:{MODE:3},setup(t,{attrs:e}){return()=>{const[n,i,r]=by({...t,sourcePosition:t.sourcePosition??Ye.Bottom,targetPosition:t.targetPosition??Ye.Top});return wt(lc,{path:n,labelX:i,labelY:r,...e,...t})}}}),eN=Q3,tN=Nt({name:"SimpleBezierEdge",props:["sourcePosition","targetPosition","label","labelStyle","labelShowBg","labelBgStyle","labelBgPadding","labelBgBorderRadius","sourceY","sourceX","targetX","targetY","markerEnd","markerStart","interactionWidth"],compatConfig:{MODE:3},setup(t,{attrs:e}){return()=>{const[n,i,r]=Sy({...t,sourcePosition:t.sourcePosition??Ye.Bottom,targetPosition:t.targetPosition??Ye.Top});return wt(lc,{path:n,labelX:i,labelY:r,...e,...t})}}}),nN=tN,iN={input:F3,default:D3,output:L3},rN={default:eN,straight:K3,step:J3,smoothstep:My,simplebezier:nN};function oN(t,e,n){const i=Re(()=>v=>e.value.get(v)),r=Re(()=>v=>n.value.get(v)),o=Re(()=>{const v={...rN,...t.edgeTypes},g=Object.keys(v);for(const p of t.edges)p.type&&!g.includes(p.type)&&(v[p.type]=p.type);return v}),s=Re(()=>{const v={...iN,...t.nodeTypes},g=Object.keys(v);for(const p of t.nodes)p.type&&!g.includes(p.type)&&(v[p.type]=p.type);return v}),a=Re(()=>t.onlyRenderVisibleElements?oy(t.nodes,{x:0,y:0,width:t.dimensions.width,height:t.dimensions.height},t.viewport,!0):t.nodes),l=Re(()=>{if(t.onlyRenderVisibleElements){const v=[];for(const g of t.edges){const p=e.value.get(g.source),b=e.value.get(g.target);n3({sourcePos:p.computedPosition||{x:0,y:0},targetPos:b.computedPosition||{x:0,y:0},sourceWidth:p.dimensions.width,sourceHeight:p.dimensions.height,targetWidth:b.dimensions.width,targetHeight:b.dimensions.height,width:t.dimensions.width,height:t.dimensions.height,viewport:t.viewport})&&v.push(g)}return v}return t.edges}),u=Re(()=>[...a.value,...l.value]),c=Re(()=>{const v=[];for(const g of t.nodes)g.selected&&v.push(g);return v}),d=Re(()=>{const v=[];for(const g of t.edges)g.selected&&v.push(g);return v}),f=Re(()=>[...c.value,...d.value]),h=Re(()=>{const v=[];for(const g of t.nodes)g.dimensions.width&&g.dimensions.height&&g.handleBounds!==void 0&&v.push(g);return v}),m=Re(()=>a.value.length>0&&h.value.length===a.value.length);return{getNode:i,getEdge:r,getElements:u,getEdgeTypes:o,getNodeTypes:s,getEdges:l,getNodes:a,getSelectedElements:f,getSelectedNodes:c,getSelectedEdges:d,getNodesInitialized:h,areNodesInitialized:m}}class uo{constructor(){this.currentId=0,this.flows=new Map}static getInstance(){var e;const n=(e=Mi())==null?void 0:e.appContext.app,i=n?.config.globalProperties.$vueFlowStorage??uo.instance;return uo.instance=i??new uo,n&&(n.config.globalProperties.$vueFlowStorage=uo.instance),uo.instance}set(e,n){return this.flows.set(e,n)}get(e){return this.flows.get(e)}remove(e){return this.flows.delete(e)}create(e,n){const i=_y(),r=Ur(i),o={};for(const[f,h]of Object.entries(r.hooks)){const m=`on${f.charAt(0).toUpperCase()+f.slice(1)}`;o[m]=h.on}const s={};for(const[f,h]of Object.entries(r.hooks))s[f]=h.trigger;const a=Re(()=>{const f=new Map;for(const h of r.nodes)f.set(h.id,h);return f}),l=Re(()=>{const f=new Map;for(const h of r.edges)f.set(h.id,h);return f}),u=oN(r,a,l),c=I3(r,a,l);c.setState({...r,...n});const d={...o,...u,...c,...JC(r),nodeLookup:a,edgeLookup:l,emits:s,id:e,vueFlowVersion:"1.48.2",$destroy:()=>{this.remove(e)}};return this.set(e,d),d}getId(){return`vue-flow-${this.currentId++}`}}function Dt(t){const e=uo.getInstance(),n=Uu(),i=typeof t=="object",r=i?t:{id:t},o=r.id,s=o??n?.vueFlowId;let a;if(n){const l=Pn(Lg,null);typeof l<"u"&&l!==null&&(!s||l.id===s)&&(a=l)}if(a||s&&(a=e.get(s)),!a||s&&a.id!==s){const l=o??e.getId(),u=e.create(l,r);a=u,(n??Fu(!0)).run(()=>{lt(u.applyDefault,(d,f,h)=>{const m=g=>{u.applyNodeChanges(g)},v=g=>{u.applyEdgeChanges(g)};d?(u.onNodesChange(m),u.onEdgesChange(v)):(u.hooks.value.nodesChange.off(m),u.hooks.value.edgesChange.off(v)),h(()=>{u.hooks.value.nodesChange.off(m),u.hooks.value.edgesChange.off(v)})},{immediate:!0}),ha(()=>{if(a){const d=e.get(a.id);d?d.$destroy():Oa(`No store instance found for id ${a.id} in storage.`)}})})}else i&&a.setState(r);if(n&&(Or(Lg,a),n.vueFlowId=a.id),i){const l=Mi();l?.type.name!=="VueFlow"&&a.emits.error(new Yt(Gt.USEVUEFLOW_OPTIONS))}return a}function sN(t){const{emits:e,dimensions:n}=Dt();let i;mn(()=>{const r=()=>{var o,s;if(!t.value||!(((s=(o=t.value).checkVisibility)==null?void 0:s.call(o))??!0))return;const a=nc(t.value);(a.width===0||a.height===0)&&e.error(new Yt(Gt.MISSING_VIEWPORT_DIMENSIONS)),n.value={width:a.width||500,height:a.height||500}};r(),window.addEventListener("resize",r),t.value&&(i=new ResizeObserver(()=>r()),i.observe(t.value)),lr(()=>{window.removeEventListener("resize",r),i&&t.value&&i.unobserve(t.value)})})}const aN={name:"UserSelection",compatConfig:{MODE:3}},lN=Nt({...aN,props:{userSelectionRect:{}},setup(t){return(e,n)=>(ce(),me("div",{class:"vue-flow__selection vue-flow__container",style:rt({width:`${e.userSelectionRect.width}px`,height:`${e.userSelectionRect.height}px`,transform:`translate(${e.userSelectionRect.x}px, ${e.userSelectionRect.y}px)`})},null,4))}}),uN=["tabIndex"],cN={name:"NodesSelection",compatConfig:{MODE:3}},dN=Nt({...cN,setup(t){const{emits:e,viewport:n,getSelectedNodes:i,noPanClassName:r,disableKeyboardA11y:o,userSelectionActive:s}=Dt(),a=vy(),l=Ie(null),u=hy({el:l,onStart(m){e.selectionDragStart(m),e.nodeDragStart(m)},onDrag(m){e.selectionDrag(m),e.nodeDrag(m)},onStop(m){e.selectionDragStop(m),e.nodeDragStop(m)}});mn(()=>{var m;o.value||(m=l.value)==null||m.focus({preventScroll:!0})});const c=Re(()=>Wh(i.value)),d=Re(()=>({width:`${c.value.width}px`,height:`${c.value.height}px`,top:`${c.value.y}px`,left:`${c.value.x}px`}));function f(m){e.selectionContextMenu({event:m,nodes:i.value})}function h(m){o.value||is[m.key]&&(m.preventDefault(),a({x:is[m.key].x,y:is[m.key].y},m.shiftKey))}return(m,v)=>!fe(s)&&c.value.width&&c.value.height?(ce(),me("div",{key:0,class:ut(["vue-flow__nodesselection vue-flow__container",fe(r)]),style:rt({transform:`translate(${fe(n).x}px,${fe(n).y}px) scale(${fe(n).zoom})`})},[Q("div",{ref_key:"el",ref:l,class:ut([{dragging:fe(u)},"vue-flow__nodesselection-rect"]),style:rt(d.value),tabIndex:fe(o)?void 0:-1,onContextmenu:f,onKeydown:h},null,46,uN)],6)):Ge("",!0)}});function fN(t,e){return{x:t.clientX-e.left,y:t.clientY-e.top}}const hN={name:"Pane",compatConfig:{MODE:3}},pN=Nt({...hN,props:{isSelecting:{type:Boolean},selectionKeyPressed:{type:Boolean}},setup(t){const{vueFlowRef:e,nodes:n,viewport:i,emits:r,userSelectionActive:o,removeSelectedElements:s,userSelectionRect:a,elementsSelectable:l,nodesSelectionActive:u,getSelectedEdges:c,getSelectedNodes:d,removeNodes:f,removeEdges:h,selectionMode:m,deleteKeyCode:v,multiSelectionKeyCode:g,multiSelectionActive:p,edgeLookup:b,nodeLookup:M,connectionLookup:_,defaultEdgeOptions:P,connectionStartHandle:D,panOnDrag:B}=Dt(),y=Nr(null),x=Nr(new Set),T=Nr(new Set),E=Nr(null),I=bt(()=>l.value&&(t.isSelecting||o.value)),q=bt(()=>D.value!==null);let w=!1,k=!1;const A=ta(v,{actInsideInputWithModifier:!1}),N=ta(g);lt(A,Se=>{Se&&(f(d.value),h(c.value),u.value=!1)}),lt(N,Se=>{p.value=Se});function O(Se,G){return U=>{U.target===G&&Se?.(U)}}function $(Se){if(w||q.value){w=!1;return}r.paneClick(Se),s(),u.value=!1}function K(Se){var G;if(Array.isArray(B.value)&&((G=B.value)!=null&&G.includes(2))){Se.preventDefault();return}r.paneContextMenu(Se)}function te(Se){r.paneScroll(Se)}function ne(Se){var G,U,Y;if(E.value=((G=e.value)==null?void 0:G.getBoundingClientRect())??null,!l.value||!t.isSelecting||Se.button!==0||Se.target!==y.value||!E.value)return;(Y=(U=Se.target)==null?void 0:U.setPointerCapture)==null||Y.call(U,Se.pointerId);const{x:he,y:xe}=fN(Se,E.value);k=!0,w=!1,s(),a.value={width:0,height:0,startX:he,startY:xe,x:he,y:xe},r.selectionStart(Se)}function ge(Se){var G;if(!E.value||!a.value)return;w=!0;const{x:U,y:Y}=fi(Se,E.value),{startX:he=0,startY:xe=0}=a.value,we={startX:he,startY:xe,x:U<he?U:he,y:Y<xe?Y:xe,width:Math.abs(U-he),height:Math.abs(Y-xe)},H=x.value,X=T.value;x.value=new Set(oy(n.value,we,i.value,m.value===Gh.Partial,!0).map(F=>F.id)),T.value=new Set;const L=((G=P.value)==null?void 0:G.selectable)??!0;for(const F of x.value){const z=_.value.get(F);if(z)for(const{edgeId:J}of z.values()){const C=b.value.get(J);C&&(C.selectable??L)&&T.value.add(J)}}if(!Dg(H,x.value)){const F=Ar(M.value,x.value,!0);r.nodesChange(F)}if(!Dg(X,T.value)){const F=Ar(b.value,T.value);r.edgesChange(F)}a.value=we,o.value=!0,u.value=!1}function Ee(Se){var G;Se.button!==0||!k||((G=Se.target)==null||G.releasePointerCapture(Se.pointerId),!o.value&&a.value&&Se.target===y.value&&$(Se),o.value=!1,a.value=null,u.value=x.value.size>0,r.selectionEnd(Se),t.selectionKeyPressed&&(w=!1),k=!1)}return(Se,G)=>(ce(),me("div",{ref_key:"container",ref:y,class:ut(["vue-flow__pane vue-flow__container",{selection:Se.isSelecting}]),onClick:G[0]||(G[0]=U=>I.value?void 0:O($,y.value)(U)),onContextmenu:G[1]||(G[1]=U=>O(K,y.value)(U)),onWheelPassive:G[2]||(G[2]=U=>O(te,y.value)(U)),onPointerenter:G[3]||(G[3]=U=>I.value?void 0:fe(r).paneMouseEnter(U)),onPointerdown:G[4]||(G[4]=U=>I.value?ne(U):fe(r).paneMouseMove(U)),onPointermove:G[5]||(G[5]=U=>I.value?ge(U):fe(r).paneMouseMove(U)),onPointerup:G[6]||(G[6]=U=>I.value?Ee(U):void 0),onPointerleave:G[7]||(G[7]=U=>fe(r).paneMouseLeave(U))},[er(Se.$slots,"default"),fe(o)&&fe(a)?(ce(),Qt(lN,{key:0,"user-selection-rect":fe(a)},null,8,["user-selection-rect"])):Ge("",!0),fe(u)&&fe(d).length?(ce(),Qt(dN,{key:1})):Ge("",!0)],34))}}),mN={name:"Transform",compatConfig:{MODE:3}},gN=Nt({...mN,setup(t){const{viewport:e,fitViewOnInit:n,fitViewOnInitDone:i}=Dt(),r=Re(()=>n.value?!i.value:!1),o=Re(()=>`translate(${e.value.x}px,${e.value.y}px) scale(${e.value.zoom})`);return(s,a)=>(ce(),me("div",{class:"vue-flow__transformationpane vue-flow__container",style:rt({transform:o.value,opacity:r.value?0:void 0})},[er(s.$slots,"default")],4))}}),vN={name:"Viewport",compatConfig:{MODE:3}},_N=Nt({...vN,setup(t){const{minZoom:e,maxZoom:n,defaultViewport:i,translateExtent:r,zoomActivationKeyCode:o,selectionKeyCode:s,panActivationKeyCode:a,panOnScroll:l,panOnScrollMode:u,panOnScrollSpeed:c,panOnDrag:d,zoomOnDoubleClick:f,zoomOnPinch:h,zoomOnScroll:m,preventScrolling:v,noWheelClassName:g,noPanClassName:p,emits:b,connectionStartHandle:M,userSelectionActive:_,paneDragging:P,d3Zoom:D,d3Selection:B,d3ZoomHandler:y,viewport:x,viewportRef:T,paneClickDistance:E}=Dt();sN(T);const I=Nr(!1),q=Nr(!1);let w=null,k=!1,A=0,N={x:0,y:0,zoom:0};const O=ta(a),$=ta(s),K=ta(o),te=bt(()=>(!$.value||$.value&&s.value===!0)&&(O.value||d.value)),ne=bt(()=>O.value||l.value),ge=bt(()=>s.value===!0&&te.value!==!0),Ee=bt(()=>$.value&&s.value!==!0||_.value||ge.value),Se=bt(()=>M.value!==null);mn(()=>{if(!T.value){Oa("Viewport element is missing");return}const xe=T.value,we=xe.getBoundingClientRect(),H=UP().clickDistance(E.value).scaleExtent([e.value,n.value]).translateExtent(r.value),X=Xn(xe).call(H),L=X.on("wheel.zoom"),F=ps.translate(i.value.x??0,i.value.y??0).scale(or(i.value.zoom??1,e.value,n.value)),z=[[0,0],[we.width,we.height]],J=H.constrain()(F,z,r.value);H.transform(X,J),H.wheelDelta(Gf),D.value=H,B.value=X,y.value=L,x.value={x:J.x,y:J.y,zoom:J.k},H.on("start",C=>{var ae;if(!C.sourceEvent)return null;A=C.sourceEvent.button,I.value=!0;const W=Y(C.transform);((ae=C.sourceEvent)==null?void 0:ae.type)==="mousedown"&&(P.value=!0),N=W,b.viewportChangeStart(W),b.moveStart({event:C,flowTransform:W})}),H.on("end",C=>{if(!C.sourceEvent)return null;if(I.value=!1,P.value=!1,G(te.value,A??0)&&!k&&b.paneContextMenu(C.sourceEvent),k=!1,U(N,C.transform)){const ae=Y(C.transform);N=ae,b.viewportChangeEnd(ae),b.moveEnd({event:C,flowTransform:ae})}}),H.filter(C=>{var ae;const W=K.value||m.value,j=h.value&&C.ctrlKey,ee=C.button,R=C.type==="wheel";if(ee===1&&C.type==="mousedown"&&(he(C,"vue-flow__node")||he(C,"vue-flow__edge")))return!0;if(!te.value&&!W&&!ne.value&&!f.value&&!h.value||_.value||Se.value&&!R||!f.value&&C.type==="dblclick"||he(C,g.value)&&R||he(C,p.value)&&(!R||ne.value&&R&&!K.value)||!h.value&&C.ctrlKey&&R||!W&&!ne.value&&!j&&R)return!1;if(!h&&C.type==="touchstart"&&((ae=C.touches)==null?void 0:ae.length)>1)return C.preventDefault(),!1;if(!te.value&&(C.type==="mousedown"||C.type==="touchstart")||ge.value&&Array.isArray(d.value)&&d.value.includes(0)&&ee===0||Array.isArray(d.value)&&!d.value.includes(ee)&&(C.type==="mousedown"||C.type==="touchstart"))return!1;const S=Array.isArray(d.value)&&d.value.includes(ee)||s.value===!0&&Array.isArray(d.value)&&!d.value.includes(0)||!ee||ee<=1;return(!C.ctrlKey||O.value||R)&&S}),lt([_,te],()=>{_.value&&!I.value?H.on("zoom",null):_.value||H.on("zoom",C=>{x.value={x:C.transform.x,y:C.transform.y,zoom:C.transform.k};const ae=Y(C.transform);k=G(te.value,A??0),b.viewportChange(ae),b.move({event:C,flowTransform:ae})})},{immediate:!0}),lt([_,ne,u,K,h,v,g],()=>{ne.value&&!K.value&&!_.value?X.on("wheel.zoom",C=>{if(he(C,g.value))return!1;const ae=K.value||m.value,W=h.value&&C.ctrlKey;if(!(!v.value||ne.value||ae||W))return!1;C.preventDefault(),C.stopImmediatePropagation();const ee=X.property("__zoom").k||1,R=ba();if(!O.value&&C.ctrlKey&&h.value&&R){const se=li(C),Ne=Gf(C),Ce=ee*2**Ne;H.scaleTo(X,Ce,se,C);return}const S=C.deltaMode===1?20:1;let Z=u.value===ea.Vertical?0:C.deltaX*S,oe=u.value===ea.Horizontal?0:C.deltaY*S;!R&&C.shiftKey&&u.value!==ea.Vertical&&!Z&&oe&&(Z=oe,oe=0),H.translateBy(X,-(Z/ee)*c.value,-(oe/ee)*c.value);const de=Y(X.property("__zoom"));w&&clearTimeout(w),q.value?(b.move({event:C,flowTransform:de}),b.viewportChange(de),w=setTimeout(()=>{b.moveEnd({event:C,flowTransform:de}),b.viewportChangeEnd(de),q.value=!1},150)):(q.value=!0,b.moveStart({event:C,flowTransform:de}),b.viewportChangeStart(de))},{passive:!1}):typeof L<"u"&&X.on("wheel.zoom",function(C,ae){const W=!v.value&&C.type==="wheel"&&!C.ctrlKey,j=K.value||m.value,ee=h.value&&C.ctrlKey;if(!j&&!l.value&&!ee&&C.type==="wheel"||W||he(C,g.value))return null;C.preventDefault(),L.call(this,C,ae)},{passive:!1})},{immediate:!0})});function G(xe,we){return we===2&&Array.isArray(xe)&&xe.includes(2)}function U(xe,we){return xe.x!==we.x&&!Number.isNaN(we.x)||xe.y!==we.y&&!Number.isNaN(we.y)||xe.zoom!==we.k&&!Number.isNaN(we.k)}function Y(xe){return{x:xe.x,y:xe.y,zoom:xe.k}}function he(xe,we){return xe.target.closest(`.${we}`)}return(xe,we)=>(ce(),me("div",{ref_key:"viewportRef",ref:T,class:"vue-flow__viewport vue-flow__container"},[tt(pN,{"is-selecting":Ee.value,"selection-key-pressed":fe($),class:ut({connecting:Se.value,dragging:fe(P),draggable:fe(d)===!0||Array.isArray(fe(d))&&fe(d).includes(0)})},{default:dn(()=>[tt(gN,null,{default:dn(()=>[er(xe.$slots,"default")]),_:3})]),_:3},8,["is-selecting","selection-key-pressed","class"])],512))}}),yN=["id"],xN=["id"],bN=["id"],SN={name:"A11yDescriptions",compatConfig:{MODE:3}},MN=Nt({...SN,setup(t){const{id:e,disableKeyboardA11y:n,ariaLiveMessage:i}=Dt();return(r,o)=>(ce(),me(it,null,[Q("div",{id:`${fe(Z_)}-${fe(e)}`,style:{display:"none"}}," Press enter or space to select a node. "+Te(fe(n)?"":"You can then use the arrow keys to move the node around.")+" You can then use the arrow keys to move the node around, press delete to remove it and press escape to cancel. ",9,yN),Q("div",{id:`${fe(j_)}-${fe(e)}`,style:{display:"none"}}," Press enter or space to select an edge. You can then press delete to remove it or press escape to cancel. ",8,xN),fe(n)?Ge("",!0):(ce(),me("div",{key:0,id:`${fe($P)}-${fe(e)}`,"aria-live":"assertive","aria-atomic":"true",style:{position:"absolute",width:"1px",height:"1px",margin:"-1px",border:"0",padding:"0",overflow:"hidden",clip:"rect(0px, 0px, 0px, 0px)","clip-path":"inset(100%)"}},Te(fe(i)),9,bN))],64))}});function wN(){const t=Dt();lt(()=>t.viewportHelper.value.viewportInitialized,e=>{e&&setTimeout(()=>{t.emits.init(t),t.emits.paneReady(t)},1)})}function EN(t,e,n){return n===Ye.Left?t-e:n===Ye.Right?t+e:t}function TN(t,e,n){return n===Ye.Top?t-e:n===Ye.Bottom?t+e:t}const Kh=function({radius:t=10,centerX:e=0,centerY:n=0,position:i=Ye.Top,type:r}){return wt("circle",{class:`vue-flow__edgeupdater vue-flow__edgeupdater-${r}`,cx:EN(e,t,i),cy:TN(n,t,i),r:t,stroke:"transparent",fill:"transparent"})};Kh.props=["radius","centerX","centerY","position","type"];Kh.compatConfig={MODE:3};const kg=Kh,AN=Nt({name:"Edge",compatConfig:{MODE:3},props:["id"],setup(t){const{id:e,addSelectedEdges:n,connectionMode:i,edgeUpdaterRadius:r,emits:o,nodesSelectionActive:s,noPanClassName:a,getEdgeTypes:l,removeSelectedEdges:u,findEdge:c,findNode:d,isValidConnection:f,multiSelectionActive:h,disableKeyboardA11y:m,elementsSelectable:v,edgesUpdatable:g,edgesFocusable:p,hooks:b}=Dt(),M=Re(()=>c(t.id)),{emit:_,on:P}=_3(M.value,o),D=Pn(rc),B=Mi(),y=Ie(!1),x=Ie(!1),T=Ie(""),E=Ie(null),I=Ie("source"),q=Ie(null),w=bt(()=>typeof M.value.selectable>"u"?v.value:M.value.selectable),k=bt(()=>typeof M.value.updatable>"u"?g.value:M.value.updatable),A=bt(()=>typeof M.value.focusable>"u"?p.value:M.value.focusable);Or(m3,t.id),Or(g3,q);const N=Re(()=>M.value.class instanceof Function?M.value.class(M.value):M.value.class),O=Re(()=>M.value.style instanceof Function?M.value.style(M.value):M.value.style),$=Re(()=>{const F=M.value.type||"default",z=D?.[`edge-${F}`];if(z)return z;let J=M.value.template??l.value[F];if(typeof J=="string"&&B){const C=Object.keys(B.appContext.components);C&&C.includes(F)&&(J=r0(F,!1))}return J&&typeof J!="string"?J:(o.error(new Yt(Gt.EDGE_TYPE_MISSING,J)),!1)}),{handlePointerDown:K}=my({nodeId:T,handleId:E,type:I,isValidConnection:f,edgeUpdaterType:I,onEdgeUpdate:ge,onEdgeUpdateEnd:Ee});return()=>{const F=d(M.value.source),z=d(M.value.target),J="pathOptions"in M.value?M.value.pathOptions:{};if(!F&&!z)return o.error(new Yt(Gt.EDGE_SOURCE_TARGET_MISSING,M.value.id,M.value.source,M.value.target)),null;if(!F)return o.error(new Yt(Gt.EDGE_SOURCE_MISSING,M.value.id,M.value.source)),null;if(!z)return o.error(new Yt(Gt.EDGE_TARGET_MISSING,M.value.id,M.value.target)),null;if(!M.value||M.value.hidden||F.hidden||z.hidden)return null;let C;i.value===Vr.Strict?C=F.handleBounds.source:C=[...F.handleBounds.source||[],...F.handleBounds.target||[]];const ae=Ag(C,M.value.sourceHandle);let W;i.value===Vr.Strict?W=z.handleBounds.target:W=[...z.handleBounds.target||[],...z.handleBounds.source||[]];const j=Ag(W,M.value.targetHandle),ee=ae?.position||Ye.Bottom,R=j?.position||Ye.Top,{x:S,y:Z}=ms(F,ae,ee),{x:oe,y:de}=ms(z,j,R);return M.value.sourceX=S,M.value.sourceY=Z,M.value.targetX=oe,M.value.targetY=de,wt("g",{ref:q,key:t.id,"data-id":t.id,class:["vue-flow__edge",`vue-flow__edge-${$.value===!1?"default":M.value.type||"default"}`,a.value,N.value,{updating:y.value,selected:M.value.selected,animated:M.value.animated,inactive:!w.value&&!b.value.edgeClick.hasListeners()}],tabIndex:A.value?0:void 0,"aria-label":M.value.ariaLabel===null?void 0:M.value.ariaLabel??`Edge from ${M.value.source} to ${M.value.target}`,"aria-describedby":A.value?`${j_}-${e}`:void 0,"aria-roledescription":"edge",role:A.value?"group":"img",...M.value.domAttributes,onClick:G,onContextmenu:U,onDblclick:Y,onMouseenter:he,onMousemove:xe,onMouseleave:we,onKeyDown:A.value?L:void 0},[x.value?null:wt($.value===!1?l.value.default:$.value,{id:t.id,sourceNode:F,targetNode:z,source:M.value.source,target:M.value.target,type:M.value.type,updatable:k.value,selected:M.value.selected,animated:M.value.animated,label:M.value.label,labelStyle:M.value.labelStyle,labelShowBg:M.value.labelShowBg,labelBgStyle:M.value.labelBgStyle,labelBgPadding:M.value.labelBgPadding,labelBgBorderRadius:M.value.labelBgBorderRadius,data:M.value.data,events:{...M.value.events,...P},style:O.value,markerStart:`url('#${xa(M.value.markerStart,e)}')`,markerEnd:`url('#${xa(M.value.markerEnd,e)}')`,sourcePosition:ee,targetPosition:R,sourceX:S,sourceY:Z,targetX:oe,targetY:de,sourceHandleId:M.value.sourceHandle,targetHandleId:M.value.targetHandle,interactionWidth:M.value.interactionWidth,...J}),[k.value==="source"||k.value===!0?[wt("g",{onMousedown:H,onMouseenter:te,onMouseout:ne},wt(kg,{position:ee,centerX:S,centerY:Z,radius:r.value,type:"source","data-type":"source"}))]:null,k.value==="target"||k.value===!0?[wt("g",{onMousedown:X,onMouseenter:te,onMouseout:ne},wt(kg,{position:R,centerX:oe,centerY:de,radius:r.value,type:"target","data-type":"target"}))]:null]])};function te(){y.value=!0}function ne(){y.value=!1}function ge(F,z){_.update({event:F,edge:M.value,connection:z})}function Ee(F){_.updateEnd({event:F,edge:M.value}),x.value=!1}function Se(F,z){F.button===0&&(x.value=!0,T.value=z?M.value.target:M.value.source,E.value=(z?M.value.targetHandle:M.value.sourceHandle)??null,I.value=z?"target":"source",_.updateStart({event:F,edge:M.value}),K(F))}function G(F){var z;const J={event:F,edge:M.value};w.value&&(s.value=!1,M.value.selected&&h.value?(u([M.value]),(z=q.value)==null||z.blur()):n([M.value])),_.click(J)}function U(F){_.contextMenu({event:F,edge:M.value})}function Y(F){_.doubleClick({event:F,edge:M.value})}function he(F){_.mouseEnter({event:F,edge:M.value})}function xe(F){_.mouseMove({event:F,edge:M.value})}function we(F){_.mouseLeave({event:F,edge:M.value})}function H(F){Se(F,!0)}function X(F){Se(F,!1)}function L(F){var z;!m.value&&J_.includes(F.key)&&w.value&&(F.key==="Escape"?((z=q.value)==null||z.blur(),u([c(t.id)])):n([c(t.id)]))}}}),CN=AN,RN=Nt({name:"ConnectionLine",compatConfig:{MODE:3},setup(){var t;const{id:e,connectionMode:n,connectionStartHandle:i,connectionEndHandle:r,connectionPosition:o,connectionLineType:s,connectionLineStyle:a,connectionLineOptions:l,connectionStatus:u,viewport:c,findNode:d}=Dt(),f=(t=Pn(rc))==null?void 0:t["connection-line"],h=Re(()=>{var b;return d((b=i.value)==null?void 0:b.nodeId)}),m=Re(()=>{var b;return d((b=r.value)==null?void 0:b.nodeId)??null}),v=Re(()=>({x:(o.value.x-c.value.x)/c.value.zoom,y:(o.value.y-c.value.y)/c.value.zoom})),g=Re(()=>l.value.markerStart?`url(#${xa(l.value.markerStart,e)})`:""),p=Re(()=>l.value.markerEnd?`url(#${xa(l.value.markerEnd,e)})`:"");return()=>{var b,M,_;if(!h.value||!i.value)return null;const P=i.value.id,D=i.value.type,B=h.value.handleBounds;let y=B?.[D]??[];if(n.value===Vr.Loose){const O=B?.[D==="source"?"target":"source"]??[];y=[...y,...O]}if(!y)return null;const x=(P?y.find(O=>O.id===P):y[0])??null,T=x?.position??Ye.Top,{x:E,y:I}=ms(h.value,x,T);let q=null;m.value&&(n.value===Vr.Strict?q=((b=m.value.handleBounds[D==="source"?"target":"source"])==null?void 0:b.find(O=>{var $;return O.id===(($=r.value)==null?void 0:$.id)}))||null:q=((M=[...m.value.handleBounds.source??[],...m.value.handleBounds.target??[]])==null?void 0:M.find(O=>{var $;return O.id===(($=r.value)==null?void 0:$.id)}))||null);const w=((_=r.value)==null?void 0:_.position)??(T?Wf[T]:null);if(!T||!w)return null;const k=s.value??l.value.type??ao.Bezier;let A="";const N={sourceX:E,sourceY:I,sourcePosition:T,targetX:v.value.x,targetY:v.value.y,targetPosition:w};return k===ao.Bezier?[A]=by(N):k===ao.Step?[A]=Yf({...N,borderRadius:0}):k===ao.SmoothStep?[A]=Yf(N):k===ao.SimpleBezier?[A]=Sy(N):A=`M${E},${I} ${v.value.x},${v.value.y}`,wt("svg",{class:"vue-flow__edges vue-flow__connectionline vue-flow__container"},wt("g",{class:"vue-flow__connection"},f?wt(f,{sourceX:E,sourceY:I,sourcePosition:T,targetX:v.value.x,targetY:v.value.y,targetPosition:w,sourceNode:h.value,sourceHandle:x,targetNode:m.value,targetHandle:q,markerEnd:p.value,markerStart:g.value,connectionStatus:u.value}):wt("path",{d:A,class:[l.value.class,u.value,"vue-flow__connection-path"],style:{...a.value,...l.value.style},"marker-end":p.value,"marker-start":g.value})))}}}),IN=RN,PN=["id","markerWidth","markerHeight","markerUnits","orient"],NN={name:"MarkerType",compatConfig:{MODE:3}},DN=Nt({...NN,props:{id:{},type:{},color:{default:"none"},width:{default:12.5},height:{default:12.5},markerUnits:{default:"strokeWidth"},orient:{default:"auto-start-reverse"},strokeWidth:{default:1}},setup(t){return(e,n)=>(ce(),me("marker",{id:e.id,class:"vue-flow__arrowhead",viewBox:"-10 -10 20 20",refX:"0",refY:"0",markerWidth:`${e.width}`,markerHeight:`${e.height}`,markerUnits:e.markerUnits,orient:e.orient},[e.type===fe($f).ArrowClosed?(ce(),me("polyline",{key:0,style:rt({stroke:e.color,fill:e.color,strokeWidth:e.strokeWidth}),"stroke-linecap":"round","stroke-linejoin":"round",points:"-5,-4 0,0 -5,4 -5,-4"},null,4)):Ge("",!0),e.type===fe($f).Arrow?(ce(),me("polyline",{key:1,style:rt({stroke:e.color,strokeWidth:e.strokeWidth}),"stroke-linecap":"round","stroke-linejoin":"round",fill:"none",points:"-5,-4 0,0 -5,4"},null,4)):Ge("",!0)],8,PN))}}),LN={class:"vue-flow__marker vue-flow__container","aria-hidden":"true"},FN={name:"MarkerDefinitions",compatConfig:{MODE:3}},UN=Nt({...FN,setup(t){const{id:e,edges:n,connectionLineOptions:i,defaultMarkerColor:r}=Dt(),o=Re(()=>{const s=new Set,a=[],l=u=>{if(u){const c=xa(u,e);s.has(c)||(typeof u=="object"?a.push({...u,id:c,color:u.color||r.value}):a.push({id:c,color:r.value,type:u}),s.add(c))}};for(const u of[i.value.markerEnd,i.value.markerStart])l(u);for(const u of n.value)for(const c of[u.markerStart,u.markerEnd])l(c);return a.sort((u,c)=>u.id.localeCompare(c.id))});return(s,a)=>(ce(),me("svg",LN,[Q("defs",null,[(ce(!0),me(it,null,Ht(o.value,l=>(ce(),Qt(DN,{id:l.id,key:l.id,type:l.type,color:l.color,width:l.width,height:l.height,markerUnits:l.markerUnits,"stroke-width":l.strokeWidth,orient:l.orient},null,8,["id","type","color","width","height","markerUnits","stroke-width","orient"]))),128))])]))}}),ON={name:"Edges",compatConfig:{MODE:3}},BN=Nt({...ON,setup(t){const{findNode:e,getEdges:n,elevateEdgesOnSelect:i}=Dt();return(r,o)=>(ce(),me(it,null,[tt(UN),(ce(!0),me(it,null,Ht(fe(n),s=>(ce(),me("svg",{key:s.id,class:"vue-flow__edges vue-flow__container",style:rt({zIndex:fe(i3)(s,fe(e),fe(i))})},[tt(fe(CN),{id:s.id},null,8,["id"])],4))),128)),tt(fe(IN))],64))}}),kN=Nt({name:"Node",compatConfig:{MODE:3},props:["id","resizeObserver"],setup(t){const{id:e,noPanClassName:n,selectNodesOnDrag:i,nodesSelectionActive:r,multiSelectionActive:o,emits:s,removeSelectedNodes:a,addSelectedNodes:l,updateNodeDimensions:u,onUpdateNodeInternals:c,getNodeTypes:d,nodeExtent:f,elevateNodesOnSelect:h,disableKeyboardA11y:m,ariaLiveMessage:v,snapToGrid:g,snapGrid:p,nodeDragThreshold:b,nodesDraggable:M,elementsSelectable:_,nodesConnectable:P,nodesFocusable:D,hooks:B}=Dt(),y=Ie(null);Or(fy,y),Or(qh,t.id);const x=Pn(rc),T=Mi(),E=vy(),{node:I,parentNode:q}=gy(t.id),{emit:w,on:k}=b3(I,s),A=bt(()=>typeof I.draggable>"u"?M.value:I.draggable),N=bt(()=>typeof I.selectable>"u"?_.value:I.selectable),O=bt(()=>typeof I.connectable>"u"?P.value:I.connectable),$=bt(()=>typeof I.focusable>"u"?D.value:I.focusable),K=Re(()=>N.value||A.value||B.value.nodeClick.hasListeners()||B.value.nodeDoubleClick.hasListeners()||B.value.nodeMouseEnter.hasListeners()||B.value.nodeMouseMove.hasListeners()||B.value.nodeMouseLeave.hasListeners()),te=bt(()=>!!I.dimensions.width&&!!I.dimensions.height),ne=Re(()=>{const z=I.type||"default",J=x?.[`node-${z}`];if(J)return J;let C=I.template||d.value[z];if(typeof C=="string"&&T){const ae=Object.keys(T.appContext.components);ae&&ae.includes(z)&&(C=r0(z,!1))}return C&&typeof C!="string"?C:(s.error(new Yt(Gt.NODE_TYPE_MISSING,C)),!1)}),ge=hy({id:t.id,el:y,disabled:()=>!A.value,selectable:N,dragHandle:()=>I.dragHandle,onStart(z){w.dragStart(z)},onDrag(z){w.drag(z)},onStop(z){w.dragStop(z)},onClick(z){L(z)}}),Ee=Re(()=>I.class instanceof Function?I.class(I):I.class),Se=Re(()=>{const z=(I.style instanceof Function?I.style(I):I.style)||{},J=I.width instanceof Function?I.width(I):I.width,C=I.height instanceof Function?I.height(I):I.height;return!z.width&&J&&(z.width=typeof J=="string"?J:`${J}px`),!z.height&&C&&(z.height=typeof C=="string"?C:`${C}px`),z}),G=bt(()=>Number(I.zIndex??Se.value.zIndex??0));return c(z=>{(z.includes(t.id)||!z.length)&&Y()}),mn(()=>{lt(()=>I.hidden,(z=!1,J,C)=>{!z&&y.value&&(t.resizeObserver.observe(y.value),C(()=>{y.value&&t.resizeObserver.unobserve(y.value)}))},{immediate:!0,flush:"post"})}),lt([()=>I.type,()=>I.sourcePosition,()=>I.targetPosition],()=>{rn(()=>{u([{id:t.id,nodeElement:y.value,forceUpdate:!0}])})}),lt([()=>I.position.x,()=>I.position.y,()=>{var z;return(z=q.value)==null?void 0:z.computedPosition.x},()=>{var z;return(z=q.value)==null?void 0:z.computedPosition.y},()=>{var z;return(z=q.value)==null?void 0:z.computedPosition.z},G,()=>I.selected,()=>I.dimensions.height,()=>I.dimensions.width,()=>{var z;return(z=q.value)==null?void 0:z.dimensions.height},()=>{var z;return(z=q.value)==null?void 0:z.dimensions.width}],([z,J,C,ae,W,j])=>{const ee={x:z,y:J,z:j+(h.value&&I.selected?1e3:0)};typeof C<"u"&&typeof ae<"u"?I.computedPosition=jP({x:C,y:ae,z:W},ee):I.computedPosition=ee},{flush:"post",immediate:!0}),lt([()=>I.extent,f],([z,J],[C,ae])=>{(z!==C||J!==ae)&&U()}),I.extent==="parent"||typeof I.extent=="object"&&"range"in I.extent&&I.extent.range==="parent"?Df(()=>te).toBe(!0).then(U):U(),()=>I.hidden?null:wt("div",{ref:y,"data-id":I.id,class:["vue-flow__node",`vue-flow__node-${ne.value===!1?"default":I.type||"default"}`,{[n.value]:A.value,dragging:ge?.value,draggable:A.value,selected:I.selected,selectable:N.value,parent:I.isParent},Ee.value],style:{visibility:te.value?"visible":"hidden",zIndex:I.computedPosition.z??G.value,transform:`translate(${I.computedPosition.x}px,${I.computedPosition.y}px)`,pointerEvents:K.value?"all":"none",...Se.value},tabIndex:$.value?0:void 0,role:$.value?"group":void 0,"aria-describedby":m.value?void 0:`${Z_}-${e}`,"aria-label":I.ariaLabel,"aria-roledescription":"node",...I.domAttributes,onMouseenter:he,onMousemove:xe,onMouseleave:we,onContextmenu:H,onClick:L,onDblclick:X,onKeydown:F},[wt(ne.value===!1?d.value.default:ne.value,{id:I.id,type:I.type,data:I.data,events:{...I.events,...k},selected:I.selected,resizing:I.resizing,dragging:ge.value,connectable:O.value,position:I.computedPosition,dimensions:I.dimensions,isValidTargetPos:I.isValidTargetPos,isValidSourcePos:I.isValidSourcePos,parent:I.parentNode,parentNodeId:I.parentNode,zIndex:I.computedPosition.z??G.value,targetPosition:I.targetPosition,sourcePosition:I.sourcePosition,label:I.label,dragHandle:I.dragHandle,onUpdateNodeInternals:Y})]);function U(){const z=I.computedPosition,{computedPosition:J,position:C}=Xh(I,g.value?ic(z,p.value):z,s.error,f.value,q.value);(I.computedPosition.x!==J.x||I.computedPosition.y!==J.y)&&(I.computedPosition={...I.computedPosition,...J}),(I.position.x!==C.x||I.position.y!==C.y)&&(I.position=C)}function Y(){y.value&&u([{id:t.id,nodeElement:y.value,forceUpdate:!0}])}function he(z){ge?.value||w.mouseEnter({event:z,node:I})}function xe(z){ge?.value||w.mouseMove({event:z,node:I})}function we(z){ge?.value||w.mouseLeave({event:z,node:I})}function H(z){return w.contextMenu({event:z,node:I})}function X(z){return w.doubleClick({event:z,node:I})}function L(z){N.value&&(!i.value||!A.value||b.value>0)&&Xf(I,o.value,l,a,r,!1,y.value),w.click({event:z,node:I})}function F(z){if(!(Hf(z)||m.value))if(J_.includes(z.key)&&N.value){const J=z.key==="Escape";Xf(I,o.value,l,a,r,J,y.value)}else A.value&&I.selected&&is[z.key]&&(z.preventDefault(),v.value=`Moved selected node ${z.key.replace("Arrow","").toLowerCase()}. New position, x: ${~~I.position.x}, y: ${~~I.position.y}`,E({x:is[z.key].x,y:is[z.key].y},z.shiftKey))}}}),zN=kN;function VN(t={includeHiddenNodes:!1}){const{nodes:e}=Dt();return Re(()=>{if(e.value.length===0)return!1;for(const n of e.value)if((t.includeHiddenNodes||!n.hidden)&&(n?.handleBounds===void 0||n.dimensions.width===0||n.dimensions.height===0))return!1;return!0})}const $N={class:"vue-flow__nodes vue-flow__container"},HN={name:"Nodes",compatConfig:{MODE:3}},GN=Nt({...HN,setup(t){const{getNodes:e,updateNodeDimensions:n,emits:i}=Dt(),r=VN(),o=Ie();return lt(r,s=>{s&&rn(()=>{i.nodesInitialized(e.value)})},{immediate:!0}),mn(()=>{o.value=new ResizeObserver(s=>{const a=s.map(l=>({id:l.target.getAttribute("data-id"),nodeElement:l.target,forceUpdate:!0}));rn(()=>n(a))})}),lr(()=>{var s;return(s=o.value)==null?void 0:s.disconnect()}),(s,a)=>(ce(),me("div",$N,[o.value?(ce(!0),me(it,{key:0},Ht(fe(e),(l,u,c,d)=>{const f=[l.id];if(d&&d.key===l.id&&h1(d,f))return d;const h=(ce(),Qt(fe(zN),{id:l.id,key:l.id,"resize-observer":o.value},null,8,["id","resize-observer"]));return h.memo=f,h},a,0),128)):Ge("",!0)]))}});function WN(){const{emits:t}=Dt();mn(()=>{if(dy()){const e=document.querySelector(".vue-flow__pane");e&&window.getComputedStyle(e).zIndex!=="1"&&t.error(new Yt(Gt.MISSING_STYLES))}})}const XN=Q("div",{class:"vue-flow__edge-labels"},null,-1),YN={name:"VueFlow",compatConfig:{MODE:3}},qN=Nt({...YN,props:{id:{},modelValue:{},nodes:{},edges:{},edgeTypes:{},nodeTypes:{},connectionMode:{},connectionLineType:{},connectionLineStyle:{default:void 0},connectionLineOptions:{default:void 0},connectionRadius:{},isValidConnection:{type:[Function,null],default:void 0},deleteKeyCode:{default:void 0},selectionKeyCode:{type:[Boolean,null],default:void 0},multiSelectionKeyCode:{default:void 0},zoomActivationKeyCode:{default:void 0},panActivationKeyCode:{default:void 0},snapToGrid:{type:Boolean,default:void 0},snapGrid:{},onlyRenderVisibleElements:{type:Boolean,default:void 0},edgesUpdatable:{type:[Boolean,String],default:void 0},nodesDraggable:{type:Boolean,default:void 0},nodesConnectable:{type:Boolean,default:void 0},nodeDragThreshold:{},elementsSelectable:{type:Boolean,default:void 0},selectNodesOnDrag:{type:Boolean,default:void 0},panOnDrag:{type:[Boolean,Array],default:void 0},minZoom:{},maxZoom:{},defaultViewport:{},translateExtent:{},nodeExtent:{},defaultMarkerColor:{},zoomOnScroll:{type:Boolean,default:void 0},zoomOnPinch:{type:Boolean,default:void 0},panOnScroll:{type:Boolean,default:void 0},panOnScrollSpeed:{},panOnScrollMode:{},paneClickDistance:{},zoomOnDoubleClick:{type:Boolean,default:void 0},preventScrolling:{type:Boolean,default:void 0},selectionMode:{},edgeUpdaterRadius:{},fitViewOnInit:{type:Boolean,default:void 0},connectOnClick:{type:Boolean,default:void 0},applyDefault:{type:Boolean,default:void 0},autoConnect:{type:[Boolean,Function],default:void 0},noDragClassName:{},noWheelClassName:{},noPanClassName:{},defaultEdgeOptions:{},elevateEdgesOnSelect:{type:Boolean,default:void 0},elevateNodesOnSelect:{type:Boolean,default:void 0},disableKeyboardA11y:{type:Boolean,default:void 0},edgesFocusable:{type:Boolean,default:void 0},nodesFocusable:{type:Boolean,default:void 0},autoPanOnConnect:{type:Boolean,default:void 0},autoPanOnNodeDrag:{type:Boolean,default:void 0},autoPanSpeed:{}},emits:["nodesChange","edgesChange","nodesInitialized","paneReady","init","updateNodeInternals","error","connect","connectStart","connectEnd","clickConnectStart","clickConnectEnd","moveStart","move","moveEnd","selectionDragStart","selectionDrag","selectionDragStop","selectionContextMenu","selectionStart","selectionEnd","viewportChangeStart","viewportChange","viewportChangeEnd","paneScroll","paneClick","paneContextMenu","paneMouseEnter","paneMouseMove","paneMouseLeave","edgeUpdate","edgeContextMenu","edgeMouseEnter","edgeMouseMove","edgeMouseLeave","edgeDoubleClick","edgeClick","edgeUpdateStart","edgeUpdateEnd","nodeContextMenu","nodeMouseEnter","nodeMouseMove","nodeMouseLeave","nodeDoubleClick","nodeClick","nodeDragStart","nodeDrag","nodeDragStop","miniMapNodeClick","miniMapNodeDoubleClick","miniMapNodeMouseEnter","miniMapNodeMouseMove","miniMapNodeMouseLeave","update:modelValue","update:nodes","update:edges"],setup(t,{expose:e,emit:n}){const i=t,r=u0(),o=ld(i,"modelValue",n),s=ld(i,"nodes",n),a=ld(i,"edges",n),l=Dt(i),u=E3({modelValue:o,nodes:s,edges:a},i,l);return A3(n,l.hooks),wN(),WN(),Or(rc,r),Hu(u),e(l),(c,d)=>(ce(),me("div",{ref:fe(l).vueFlowRef,class:"vue-flow"},[tt(_N,null,{default:dn(()=>[tt(BN),XN,tt(GN),er(c.$slots,"zoom-pane")]),_:3}),er(c.$slots,"default"),tt(MN)],512))}}),KN={name:"Panel",compatConfig:{MODE:3}},ZN=Nt({...KN,props:{position:{}},setup(t){const e=t,{userSelectionActive:n}=Dt(),i=Re(()=>`${e.position}`.split("-"));return(r,o)=>(ce(),me("div",{class:ut(["vue-flow__panel",i.value]),style:rt({pointerEvents:fe(n)?"none":"all"})},[er(r.$slots,"default")],6))}});var jN={value:()=>{}};function Zh(){for(var t=0,e=arguments.length,n={},i;t<e;++t){if(!(i=arguments[t]+"")||i in n||/[\s.]/.test(i))throw new Error("illegal type: "+i);n[i]=[]}return new Xl(n)}function Xl(t){this._=t}function JN(t,e){return t.trim().split(/^|\s+/).map(function(n){var i="",r=n.indexOf(".");if(r>=0&&(i=n.slice(r+1),n=n.slice(0,r)),n&&!e.hasOwnProperty(n))throw new Error("unknown type: "+n);return{type:n,name:i}})}Xl.prototype=Zh.prototype={constructor:Xl,on:function(t,e){var n=this._,i=JN(t+"",n),r,o=-1,s=i.length;if(arguments.length<2){for(;++o<s;)if((r=(t=i[o]).type)&&(r=QN(n[r],t.name)))return r;return}if(e!=null&&typeof e!="function")throw new Error("invalid callback: "+e);for(;++o<s;)if(r=(t=i[o]).type)n[r]=zg(n[r],t.name,e);else if(e==null)for(r in n)n[r]=zg(n[r],t.name,null);return this},copy:function(){var t={},e=this._;for(var n in e)t[n]=e[n].slice();return new Xl(t)},call:function(t,e){if((r=arguments.length-2)>0)for(var n=new Array(r),i=0,r,o;i<r;++i)n[i]=arguments[i+2];if(!this._.hasOwnProperty(t))throw new Error("unknown type: "+t);for(o=this._[t],i=0,r=o.length;i<r;++i)o[i].value.apply(e,n)},apply:function(t,e,n){if(!this._.hasOwnProperty(t))throw new Error("unknown type: "+t);for(var i=this._[t],r=0,o=i.length;r<o;++r)i[r].value.apply(e,n)}};function QN(t,e){for(var n=0,i=t.length,r;n<i;++n)if((r=t[n]).name===e)return r.value}function zg(t,e,n){for(var i=0,r=t.length;i<r;++i)if(t[i].name===e){t[i]=jN,t=t.slice(0,i).concat(t.slice(i+1));break}return n!=null&&t.push({name:e,value:n}),t}var qf="http://www.w3.org/1999/xhtml";const Vg={svg:"http://www.w3.org/2000/svg",xhtml:qf,xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"};function uc(t){var e=t+="",n=e.indexOf(":");return n>=0&&(e=t.slice(0,n))!=="xmlns"&&(t=t.slice(n+1)),Vg.hasOwnProperty(e)?{space:Vg[e],local:t}:t}function eD(t){return function(){var e=this.ownerDocument,n=this.namespaceURI;return n===qf&&e.documentElement.namespaceURI===qf?e.createElement(t):e.createElementNS(n,t)}}function tD(t){return function(){return this.ownerDocument.createElementNS(t.space,t.local)}}function wy(t){var e=uc(t);return(e.local?tD:eD)(e)}function nD(){}function jh(t){return t==null?nD:function(){return this.querySelector(t)}}function iD(t){typeof t!="function"&&(t=jh(t));for(var e=this._groups,n=e.length,i=new Array(n),r=0;r<n;++r)for(var o=e[r],s=o.length,a=i[r]=new Array(s),l,u,c=0;c<s;++c)(l=o[c])&&(u=t.call(l,l.__data__,c,o))&&("__data__"in l&&(u.__data__=l.__data__),a[c]=u);return new Ln(i,this._parents)}function rD(t){return t==null?[]:Array.isArray(t)?t:Array.from(t)}function oD(){return[]}function Ey(t){return t==null?oD:function(){return this.querySelectorAll(t)}}function sD(t){return function(){return rD(t.apply(this,arguments))}}function aD(t){typeof t=="function"?t=sD(t):t=Ey(t);for(var e=this._groups,n=e.length,i=[],r=[],o=0;o<n;++o)for(var s=e[o],a=s.length,l,u=0;u<a;++u)(l=s[u])&&(i.push(t.call(l,l.__data__,u,s)),r.push(l));return new Ln(i,r)}function Ty(t){return function(){return this.matches(t)}}function Ay(t){return function(e){return e.matches(t)}}var lD=Array.prototype.find;function uD(t){return function(){return lD.call(this.children,t)}}function cD(){return this.firstElementChild}function dD(t){return this.select(t==null?cD:uD(typeof t=="function"?t:Ay(t)))}var fD=Array.prototype.filter;function hD(){return Array.from(this.children)}function pD(t){return function(){return fD.call(this.children,t)}}function mD(t){return this.selectAll(t==null?hD:pD(typeof t=="function"?t:Ay(t)))}function gD(t){typeof t!="function"&&(t=Ty(t));for(var e=this._groups,n=e.length,i=new Array(n),r=0;r<n;++r)for(var o=e[r],s=o.length,a=i[r]=[],l,u=0;u<s;++u)(l=o[u])&&t.call(l,l.__data__,u,o)&&a.push(l);return new Ln(i,this._parents)}function Cy(t){return new Array(t.length)}function vD(){return new Ln(this._enter||this._groups.map(Cy),this._parents)}function Mu(t,e){this.ownerDocument=t.ownerDocument,this.namespaceURI=t.namespaceURI,this._next=null,this._parent=t,this.__data__=e}Mu.prototype={constructor:Mu,appendChild:function(t){return this._parent.insertBefore(t,this._next)},insertBefore:function(t,e){return this._parent.insertBefore(t,e)},querySelector:function(t){return this._parent.querySelector(t)},querySelectorAll:function(t){return this._parent.querySelectorAll(t)}};function _D(t){return function(){return t}}function yD(t,e,n,i,r,o){for(var s=0,a,l=e.length,u=o.length;s<u;++s)(a=e[s])?(a.__data__=o[s],i[s]=a):n[s]=new Mu(t,o[s]);for(;s<l;++s)(a=e[s])&&(r[s]=a)}function xD(t,e,n,i,r,o,s){var a,l,u=new Map,c=e.length,d=o.length,f=new Array(c),h;for(a=0;a<c;++a)(l=e[a])&&(f[a]=h=s.call(l,l.__data__,a,e)+"",u.has(h)?r[a]=l:u.set(h,l));for(a=0;a<d;++a)h=s.call(t,o[a],a,o)+"",(l=u.get(h))?(i[a]=l,l.__data__=o[a],u.delete(h)):n[a]=new Mu(t,o[a]);for(a=0;a<c;++a)(l=e[a])&&u.get(f[a])===l&&(r[a]=l)}function bD(t){return t.__data__}function SD(t,e){if(!arguments.length)return Array.from(this,bD);var n=e?xD:yD,i=this._parents,r=this._groups;typeof t!="function"&&(t=_D(t));for(var o=r.length,s=new Array(o),a=new Array(o),l=new Array(o),u=0;u<o;++u){var c=i[u],d=r[u],f=d.length,h=MD(t.call(c,c&&c.__data__,u,i)),m=h.length,v=a[u]=new Array(m),g=s[u]=new Array(m),p=l[u]=new Array(f);n(c,d,v,g,p,h,e);for(var b=0,M=0,_,P;b<m;++b)if(_=v[b]){for(b>=M&&(M=b+1);!(P=g[M])&&++M<m;);_._next=P||null}}return s=new Ln(s,i),s._enter=a,s._exit=l,s}function MD(t){return typeof t=="object"&&"length"in t?t:Array.from(t)}function wD(){return new Ln(this._exit||this._groups.map(Cy),this._parents)}function ED(t,e,n){var i=this.enter(),r=this,o=this.exit();return typeof t=="function"?(i=t(i),i&&(i=i.selection())):i=i.append(t+""),e!=null&&(r=e(r),r&&(r=r.selection())),n==null?o.remove():n(o),i&&r?i.merge(r).order():r}function TD(t){for(var e=t.selection?t.selection():t,n=this._groups,i=e._groups,r=n.length,o=i.length,s=Math.min(r,o),a=new Array(r),l=0;l<s;++l)for(var u=n[l],c=i[l],d=u.length,f=a[l]=new Array(d),h,m=0;m<d;++m)(h=u[m]||c[m])&&(f[m]=h);for(;l<r;++l)a[l]=n[l];return new Ln(a,this._parents)}function AD(){for(var t=this._groups,e=-1,n=t.length;++e<n;)for(var i=t[e],r=i.length-1,o=i[r],s;--r>=0;)(s=i[r])&&(o&&s.compareDocumentPosition(o)^4&&o.parentNode.insertBefore(s,o),o=s);return this}function CD(t){t||(t=RD);function e(d,f){return d&&f?t(d.__data__,f.__data__):!d-!f}for(var n=this._groups,i=n.length,r=new Array(i),o=0;o<i;++o){for(var s=n[o],a=s.length,l=r[o]=new Array(a),u,c=0;c<a;++c)(u=s[c])&&(l[c]=u);l.sort(e)}return new Ln(r,this._parents).order()}function RD(t,e){return t<e?-1:t>e?1:t>=e?0:NaN}function ID(){var t=arguments[0];return arguments[0]=this,t.apply(null,arguments),this}function PD(){return Array.from(this)}function ND(){for(var t=this._groups,e=0,n=t.length;e<n;++e)for(var i=t[e],r=0,o=i.length;r<o;++r){var s=i[r];if(s)return s}return null}function DD(){let t=0;for(const e of this)++t;return t}function LD(){return!this.node()}function FD(t){for(var e=this._groups,n=0,i=e.length;n<i;++n)for(var r=e[n],o=0,s=r.length,a;o<s;++o)(a=r[o])&&t.call(a,a.__data__,o,r);return this}function UD(t){return function(){this.removeAttribute(t)}}function OD(t){return function(){this.removeAttributeNS(t.space,t.local)}}function BD(t,e){return function(){this.setAttribute(t,e)}}function kD(t,e){return function(){this.setAttributeNS(t.space,t.local,e)}}function zD(t,e){return function(){var n=e.apply(this,arguments);n==null?this.removeAttribute(t):this.setAttribute(t,n)}}function VD(t,e){return function(){var n=e.apply(this,arguments);n==null?this.removeAttributeNS(t.space,t.local):this.setAttributeNS(t.space,t.local,n)}}function $D(t,e){var n=uc(t);if(arguments.length<2){var i=this.node();return n.local?i.getAttributeNS(n.space,n.local):i.getAttribute(n)}return this.each((e==null?n.local?OD:UD:typeof e=="function"?n.local?VD:zD:n.local?kD:BD)(n,e))}function Ry(t){return t.ownerDocument&&t.ownerDocument.defaultView||t.document&&t||t.defaultView}function HD(t){return function(){this.style.removeProperty(t)}}function GD(t,e,n){return function(){this.style.setProperty(t,e,n)}}function WD(t,e,n){return function(){var i=e.apply(this,arguments);i==null?this.style.removeProperty(t):this.style.setProperty(t,i,n)}}function XD(t,e,n){return arguments.length>1?this.each((e==null?HD:typeof e=="function"?WD:GD)(t,e,n??"")):gs(this.node(),t)}function gs(t,e){return t.style.getPropertyValue(e)||Ry(t).getComputedStyle(t,null).getPropertyValue(e)}function YD(t){return function(){delete this[t]}}function qD(t,e){return function(){this[t]=e}}function KD(t,e){return function(){var n=e.apply(this,arguments);n==null?delete this[t]:this[t]=n}}function ZD(t,e){return arguments.length>1?this.each((e==null?YD:typeof e=="function"?KD:qD)(t,e)):this.node()[t]}function Iy(t){return t.trim().split(/^|\s+/)}function Jh(t){return t.classList||new Py(t)}function Py(t){this._node=t,this._names=Iy(t.getAttribute("class")||"")}Py.prototype={add:function(t){var e=this._names.indexOf(t);e<0&&(this._names.push(t),this._node.setAttribute("class",this._names.join(" ")))},remove:function(t){var e=this._names.indexOf(t);e>=0&&(this._names.splice(e,1),this._node.setAttribute("class",this._names.join(" ")))},contains:function(t){return this._names.indexOf(t)>=0}};function Ny(t,e){for(var n=Jh(t),i=-1,r=e.length;++i<r;)n.add(e[i])}function Dy(t,e){for(var n=Jh(t),i=-1,r=e.length;++i<r;)n.remove(e[i])}function jD(t){return function(){Ny(this,t)}}function JD(t){return function(){Dy(this,t)}}function QD(t,e){return function(){(e.apply(this,arguments)?Ny:Dy)(this,t)}}function eL(t,e){var n=Iy(t+"");if(arguments.length<2){for(var i=Jh(this.node()),r=-1,o=n.length;++r<o;)if(!i.contains(n[r]))return!1;return!0}return this.each((typeof e=="function"?QD:e?jD:JD)(n,e))}function tL(){this.textContent=""}function nL(t){return function(){this.textContent=t}}function iL(t){return function(){var e=t.apply(this,arguments);this.textContent=e??""}}function rL(t){return arguments.length?this.each(t==null?tL:(typeof t=="function"?iL:nL)(t)):this.node().textContent}function oL(){this.innerHTML=""}function sL(t){return function(){this.innerHTML=t}}function aL(t){return function(){var e=t.apply(this,arguments);this.innerHTML=e??""}}function lL(t){return arguments.length?this.each(t==null?oL:(typeof t=="function"?aL:sL)(t)):this.node().innerHTML}function uL(){this.nextSibling&&this.parentNode.appendChild(this)}function cL(){return this.each(uL)}function dL(){this.previousSibling&&this.parentNode.insertBefore(this,this.parentNode.firstChild)}function fL(){return this.each(dL)}function hL(t){var e=typeof t=="function"?t:wy(t);return this.select(function(){return this.appendChild(e.apply(this,arguments))})}function pL(){return null}function mL(t,e){var n=typeof t=="function"?t:wy(t),i=e==null?pL:typeof e=="function"?e:jh(e);return this.select(function(){return this.insertBefore(n.apply(this,arguments),i.apply(this,arguments)||null)})}function gL(){var t=this.parentNode;t&&t.removeChild(this)}function vL(){return this.each(gL)}function _L(){var t=this.cloneNode(!1),e=this.parentNode;return e?e.insertBefore(t,this.nextSibling):t}function yL(){var t=this.cloneNode(!0),e=this.parentNode;return e?e.insertBefore(t,this.nextSibling):t}function xL(t){return this.select(t?yL:_L)}function bL(t){return arguments.length?this.property("__data__",t):this.node().__data__}function SL(t){return function(e){t.call(this,e,this.__data__)}}function ML(t){return t.trim().split(/^|\s+/).map(function(e){var n="",i=e.indexOf(".");return i>=0&&(n=e.slice(i+1),e=e.slice(0,i)),{type:e,name:n}})}function wL(t){return function(){var e=this.__on;if(e){for(var n=0,i=-1,r=e.length,o;n<r;++n)o=e[n],(!t.type||o.type===t.type)&&o.name===t.name?this.removeEventListener(o.type,o.listener,o.options):e[++i]=o;++i?e.length=i:delete this.__on}}}function EL(t,e,n){return function(){var i=this.__on,r,o=SL(e);if(i){for(var s=0,a=i.length;s<a;++s)if((r=i[s]).type===t.type&&r.name===t.name){this.removeEventListener(r.type,r.listener,r.options),this.addEventListener(r.type,r.listener=o,r.options=n),r.value=e;return}}this.addEventListener(t.type,o,n),r={type:t.type,name:t.name,value:e,listener:o,options:n},i?i.push(r):this.__on=[r]}}function TL(t,e,n){var i=ML(t+""),r,o=i.length,s;if(arguments.length<2){var a=this.node().__on;if(a){for(var l=0,u=a.length,c;l<u;++l)for(r=0,c=a[l];r<o;++r)if((s=i[r]).type===c.type&&s.name===c.name)return c.value}return}for(a=e?EL:wL,r=0;r<o;++r)this.each(a(i[r],e,n));return this}function Ly(t,e,n){var i=Ry(t),r=i.CustomEvent;typeof r=="function"?r=new r(e,n):(r=i.document.createEvent("Event"),n?(r.initEvent(e,n.bubbles,n.cancelable),r.detail=n.detail):r.initEvent(e,!1,!1)),t.dispatchEvent(r)}function AL(t,e){return function(){return Ly(this,t,e)}}function CL(t,e){return function(){return Ly(this,t,e.apply(this,arguments))}}function RL(t,e){return this.each((typeof e=="function"?CL:AL)(t,e))}function*IL(){for(var t=this._groups,e=0,n=t.length;e<n;++e)for(var i=t[e],r=0,o=i.length,s;r<o;++r)(s=i[r])&&(yield s)}var Fy=[null];function Ln(t,e){this._groups=t,this._parents=e}function Ba(){return new Ln([[document.documentElement]],Fy)}function PL(){return this}Ln.prototype=Ba.prototype={constructor:Ln,select:iD,selectAll:aD,selectChild:dD,selectChildren:mD,filter:gD,data:SD,enter:vD,exit:wD,join:ED,merge:TD,selection:PL,order:AD,sort:CD,call:ID,nodes:PD,node:ND,size:DD,empty:LD,each:FD,attr:$D,style:XD,property:ZD,classed:eL,text:rL,html:lL,raise:cL,lower:fL,append:hL,insert:mL,remove:vL,clone:xL,datum:bL,on:TL,dispatch:RL,[Symbol.iterator]:IL};function Ir(t){return typeof t=="string"?new Ln([[document.querySelector(t)]],[document.documentElement]):new Ln([[t]],Fy)}function NL(t){let e;for(;e=t.sourceEvent;)t=e;return t}function wr(t,e){if(t=NL(t),e===void 0&&(e=t.currentTarget),e){var n=e.ownerSVGElement||e;if(n.createSVGPoint){var i=n.createSVGPoint();return i.x=t.clientX,i.y=t.clientY,i=i.matrixTransform(e.getScreenCTM().inverse()),[i.x,i.y]}if(e.getBoundingClientRect){var r=e.getBoundingClientRect();return[t.clientX-r.left-e.clientLeft,t.clientY-r.top-e.clientTop]}}return[t.pageX,t.pageY]}const Kf={capture:!0,passive:!1};function Zf(t){t.preventDefault(),t.stopImmediatePropagation()}function DL(t){var e=t.document.documentElement,n=Ir(t).on("dragstart.drag",Zf,Kf);"onselectstart"in e?n.on("selectstart.drag",Zf,Kf):(e.__noselect=e.style.MozUserSelect,e.style.MozUserSelect="none")}function LL(t,e){var n=t.document.documentElement,i=Ir(t).on("dragstart.drag",null);e&&(i.on("click.drag",Zf,Kf),setTimeout(function(){i.on("click.drag",null)},0)),"onselectstart"in n?i.on("selectstart.drag",null):(n.style.MozUserSelect=n.__noselect,delete n.__noselect)}function Qh(t,e,n){t.prototype=e.prototype=n,n.constructor=t}function Uy(t,e){var n=Object.create(t.prototype);for(var i in e)n[i]=e[i];return n}function ka(){}var Sa=.7,wu=1/Sa,rs="\\s*([+-]?\\d+)\\s*",Ma="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",xi="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",FL=/^#([0-9a-f]{3,8})$/,UL=new RegExp(`^rgb\\(${rs},${rs},${rs}\\)$`),OL=new RegExp(`^rgb\\(${xi},${xi},${xi}\\)$`),BL=new RegExp(`^rgba\\(${rs},${rs},${rs},${Ma}\\)$`),kL=new RegExp(`^rgba\\(${xi},${xi},${xi},${Ma}\\)$`),zL=new RegExp(`^hsl\\(${Ma},${xi},${xi}\\)$`),VL=new RegExp(`^hsla\\(${Ma},${xi},${xi},${Ma}\\)$`),$g={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};Qh(ka,wa,{copy(t){return Object.assign(new this.constructor,this,t)},displayable(){return this.rgb().displayable()},hex:Hg,formatHex:Hg,formatHex8:$L,formatHsl:HL,formatRgb:Gg,toString:Gg});function Hg(){return this.rgb().formatHex()}function $L(){return this.rgb().formatHex8()}function HL(){return Oy(this).formatHsl()}function Gg(){return this.rgb().formatRgb()}function wa(t){var e,n;return t=(t+"").trim().toLowerCase(),(e=FL.exec(t))?(n=e[1].length,e=parseInt(e[1],16),n===6?Wg(e):n===3?new En(e>>8&15|e>>4&240,e>>4&15|e&240,(e&15)<<4|e&15,1):n===8?wl(e>>24&255,e>>16&255,e>>8&255,(e&255)/255):n===4?wl(e>>12&15|e>>8&240,e>>8&15|e>>4&240,e>>4&15|e&240,((e&15)<<4|e&15)/255):null):(e=UL.exec(t))?new En(e[1],e[2],e[3],1):(e=OL.exec(t))?new En(e[1]*255/100,e[2]*255/100,e[3]*255/100,1):(e=BL.exec(t))?wl(e[1],e[2],e[3],e[4]):(e=kL.exec(t))?wl(e[1]*255/100,e[2]*255/100,e[3]*255/100,e[4]):(e=zL.exec(t))?qg(e[1],e[2]/100,e[3]/100,1):(e=VL.exec(t))?qg(e[1],e[2]/100,e[3]/100,e[4]):$g.hasOwnProperty(t)?Wg($g[t]):t==="transparent"?new En(NaN,NaN,NaN,0):null}function Wg(t){return new En(t>>16&255,t>>8&255,t&255,1)}function wl(t,e,n,i){return i<=0&&(t=e=n=NaN),new En(t,e,n,i)}function GL(t){return t instanceof ka||(t=wa(t)),t?(t=t.rgb(),new En(t.r,t.g,t.b,t.opacity)):new En}function jf(t,e,n,i){return arguments.length===1?GL(t):new En(t,e,n,i??1)}function En(t,e,n,i){this.r=+t,this.g=+e,this.b=+n,this.opacity=+i}Qh(En,jf,Uy(ka,{brighter(t){return t=t==null?wu:Math.pow(wu,t),new En(this.r*t,this.g*t,this.b*t,this.opacity)},darker(t){return t=t==null?Sa:Math.pow(Sa,t),new En(this.r*t,this.g*t,this.b*t,this.opacity)},rgb(){return this},clamp(){return new En(bo(this.r),bo(this.g),bo(this.b),Eu(this.opacity))},displayable(){return-.5<=this.r&&this.r<255.5&&-.5<=this.g&&this.g<255.5&&-.5<=this.b&&this.b<255.5&&0<=this.opacity&&this.opacity<=1},hex:Xg,formatHex:Xg,formatHex8:WL,formatRgb:Yg,toString:Yg}));function Xg(){return`#${po(this.r)}${po(this.g)}${po(this.b)}`}function WL(){return`#${po(this.r)}${po(this.g)}${po(this.b)}${po((isNaN(this.opacity)?1:this.opacity)*255)}`}function Yg(){const t=Eu(this.opacity);return`${t===1?"rgb(":"rgba("}${bo(this.r)}, ${bo(this.g)}, ${bo(this.b)}${t===1?")":`, ${t})`}`}function Eu(t){return isNaN(t)?1:Math.max(0,Math.min(1,t))}function bo(t){return Math.max(0,Math.min(255,Math.round(t)||0))}function po(t){return t=bo(t),(t<16?"0":"")+t.toString(16)}function qg(t,e,n,i){return i<=0?t=e=n=NaN:n<=0||n>=1?t=e=NaN:e<=0&&(t=NaN),new qn(t,e,n,i)}function Oy(t){if(t instanceof qn)return new qn(t.h,t.s,t.l,t.opacity);if(t instanceof ka||(t=wa(t)),!t)return new qn;if(t instanceof qn)return t;t=t.rgb();var e=t.r/255,n=t.g/255,i=t.b/255,r=Math.min(e,n,i),o=Math.max(e,n,i),s=NaN,a=o-r,l=(o+r)/2;return a?(e===o?s=(n-i)/a+(n<i)*6:n===o?s=(i-e)/a+2:s=(e-n)/a+4,a/=l<.5?o+r:2-o-r,s*=60):a=l>0&&l<1?0:s,new qn(s,a,l,t.opacity)}function XL(t,e,n,i){return arguments.length===1?Oy(t):new qn(t,e,n,i??1)}function qn(t,e,n,i){this.h=+t,this.s=+e,this.l=+n,this.opacity=+i}Qh(qn,XL,Uy(ka,{brighter(t){return t=t==null?wu:Math.pow(wu,t),new qn(this.h,this.s,this.l*t,this.opacity)},darker(t){return t=t==null?Sa:Math.pow(Sa,t),new qn(this.h,this.s,this.l*t,this.opacity)},rgb(){var t=this.h%360+(this.h<0)*360,e=isNaN(t)||isNaN(this.s)?0:this.s,n=this.l,i=n+(n<.5?n:1-n)*e,r=2*n-i;return new En(yd(t>=240?t-240:t+120,r,i),yd(t,r,i),yd(t<120?t+240:t-120,r,i),this.opacity)},clamp(){return new qn(Kg(this.h),El(this.s),El(this.l),Eu(this.opacity))},displayable(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1},formatHsl(){const t=Eu(this.opacity);return`${t===1?"hsl(":"hsla("}${Kg(this.h)}, ${El(this.s)*100}%, ${El(this.l)*100}%${t===1?")":`, ${t})`}`}}));function Kg(t){return t=(t||0)%360,t<0?t+360:t}function El(t){return Math.max(0,Math.min(1,t||0))}function yd(t,e,n){return(t<60?e+(n-e)*t/60:t<180?n:t<240?e+(n-e)*(240-t)/60:e)*255}const By=t=>()=>t;function YL(t,e){return function(n){return t+n*e}}function qL(t,e,n){return t=Math.pow(t,n),e=Math.pow(e,n)-t,n=1/n,function(i){return Math.pow(t+i*e,n)}}function KL(t){return(t=+t)==1?ky:function(e,n){return n-e?qL(e,n,t):By(isNaN(e)?n:e)}}function ky(t,e){var n=e-t;return n?YL(t,n):By(isNaN(t)?e:t)}const Zg=(function t(e){var n=KL(e);function i(r,o){var s=n((r=jf(r)).r,(o=jf(o)).r),a=n(r.g,o.g),l=n(r.b,o.b),u=ky(r.opacity,o.opacity);return function(c){return r.r=s(c),r.g=a(c),r.b=l(c),r.opacity=u(c),r+""}}return i.gamma=t,i})(1);function Cr(t,e){return t=+t,e=+e,function(n){return t*(1-n)+e*n}}var Jf=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,xd=new RegExp(Jf.source,"g");function ZL(t){return function(){return t}}function jL(t){return function(e){return t(e)+""}}function JL(t,e){var n=Jf.lastIndex=xd.lastIndex=0,i,r,o,s=-1,a=[],l=[];for(t=t+"",e=e+"";(i=Jf.exec(t))&&(r=xd.exec(e));)(o=r.index)>n&&(o=e.slice(n,o),a[s]?a[s]+=o:a[++s]=o),(i=i[0])===(r=r[0])?a[s]?a[s]+=r:a[++s]=r:(a[++s]=null,l.push({i:s,x:Cr(i,r)})),n=xd.lastIndex;return n<e.length&&(o=e.slice(n),a[s]?a[s]+=o:a[++s]=o),a.length<2?l[0]?jL(l[0].x):ZL(e):(e=l.length,function(u){for(var c=0,d;c<e;++c)a[(d=l[c]).i]=d.x(u);return a.join("")})}var jg=180/Math.PI,Qf={translateX:0,translateY:0,rotate:0,skewX:0,scaleX:1,scaleY:1};function zy(t,e,n,i,r,o){var s,a,l;return(s=Math.sqrt(t*t+e*e))&&(t/=s,e/=s),(l=t*n+e*i)&&(n-=t*l,i-=e*l),(a=Math.sqrt(n*n+i*i))&&(n/=a,i/=a,l/=a),t*i<e*n&&(t=-t,e=-e,l=-l,s=-s),{translateX:r,translateY:o,rotate:Math.atan2(e,t)*jg,skewX:Math.atan(l)*jg,scaleX:s,scaleY:a}}var Tl;function QL(t){const e=new(typeof DOMMatrix=="function"?DOMMatrix:WebKitCSSMatrix)(t+"");return e.isIdentity?Qf:zy(e.a,e.b,e.c,e.d,e.e,e.f)}function eF(t){return t==null||(Tl||(Tl=document.createElementNS("http://www.w3.org/2000/svg","g")),Tl.setAttribute("transform",t),!(t=Tl.transform.baseVal.consolidate()))?Qf:(t=t.matrix,zy(t.a,t.b,t.c,t.d,t.e,t.f))}function Vy(t,e,n,i){function r(u){return u.length?u.pop()+" ":""}function o(u,c,d,f,h,m){if(u!==d||c!==f){var v=h.push("translate(",null,e,null,n);m.push({i:v-4,x:Cr(u,d)},{i:v-2,x:Cr(c,f)})}else(d||f)&&h.push("translate("+d+e+f+n)}function s(u,c,d,f){u!==c?(u-c>180?c+=360:c-u>180&&(u+=360),f.push({i:d.push(r(d)+"rotate(",null,i)-2,x:Cr(u,c)})):c&&d.push(r(d)+"rotate("+c+i)}function a(u,c,d,f){u!==c?f.push({i:d.push(r(d)+"skewX(",null,i)-2,x:Cr(u,c)}):c&&d.push(r(d)+"skewX("+c+i)}function l(u,c,d,f,h,m){if(u!==d||c!==f){var v=h.push(r(h)+"scale(",null,",",null,")");m.push({i:v-4,x:Cr(u,d)},{i:v-2,x:Cr(c,f)})}else(d!==1||f!==1)&&h.push(r(h)+"scale("+d+","+f+")")}return function(u,c){var d=[],f=[];return u=t(u),c=t(c),o(u.translateX,u.translateY,c.translateX,c.translateY,d,f),s(u.rotate,c.rotate,d,f),a(u.skewX,c.skewX,d,f),l(u.scaleX,u.scaleY,c.scaleX,c.scaleY,d,f),u=c=null,function(h){for(var m=-1,v=f.length,g;++m<v;)d[(g=f[m]).i]=g.x(h);return d.join("")}}}var tF=Vy(QL,"px, ","px)","deg)"),nF=Vy(eF,", ",")",")"),iF=1e-12;function Jg(t){return((t=Math.exp(t))+1/t)/2}function rF(t){return((t=Math.exp(t))-1/t)/2}function oF(t){return((t=Math.exp(2*t))-1)/(t+1)}const sF=(function t(e,n,i){function r(o,s){var a=o[0],l=o[1],u=o[2],c=s[0],d=s[1],f=s[2],h=c-a,m=d-l,v=h*h+m*m,g,p;if(v<iF)p=Math.log(f/u)/e,g=function(B){return[a+B*h,l+B*m,u*Math.exp(e*B*p)]};else{var b=Math.sqrt(v),M=(f*f-u*u+i*v)/(2*u*n*b),_=(f*f-u*u-i*v)/(2*f*n*b),P=Math.log(Math.sqrt(M*M+1)-M),D=Math.log(Math.sqrt(_*_+1)-_);p=(D-P)/e,g=function(B){var y=B*p,x=Jg(P),T=u/(n*b)*(x*oF(e*y+P)-rF(P));return[a+T*h,l+T*m,u*x/Jg(e*y+P)]}}return g.duration=p*1e3*e/Math.SQRT2,g}return r.rho=function(o){var s=Math.max(.001,+o),a=s*s,l=a*a;return t(s,a,l)},r})(Math.SQRT2,2,4);var vs=0,$s=0,Ls=0,$y=1e3,Tu,Hs,Au=0,Eo=0,cc=0,Ea=typeof performance=="object"&&performance.now?performance:Date,Hy=typeof window=="object"&&window.requestAnimationFrame?window.requestAnimationFrame.bind(window):function(t){setTimeout(t,17)};function ep(){return Eo||(Hy(aF),Eo=Ea.now()+cc)}function aF(){Eo=0}function Cu(){this._call=this._time=this._next=null}Cu.prototype=Gy.prototype={constructor:Cu,restart:function(t,e,n){if(typeof t!="function")throw new TypeError("callback is not a function");n=(n==null?ep():+n)+(e==null?0:+e),!this._next&&Hs!==this&&(Hs?Hs._next=this:Tu=this,Hs=this),this._call=t,this._time=n,eh()},stop:function(){this._call&&(this._call=null,this._time=1/0,eh())}};function Gy(t,e,n){var i=new Cu;return i.restart(t,e,n),i}function lF(){ep(),++vs;for(var t=Tu,e;t;)(e=Eo-t._time)>=0&&t._call.call(void 0,e),t=t._next;--vs}function Qg(){Eo=(Au=Ea.now())+cc,vs=$s=0;try{lF()}finally{vs=0,cF(),Eo=0}}function uF(){var t=Ea.now(),e=t-Au;e>$y&&(cc-=e,Au=t)}function cF(){for(var t,e=Tu,n,i=1/0;e;)e._call?(i>e._time&&(i=e._time),t=e,e=e._next):(n=e._next,e._next=null,e=t?t._next=n:Tu=n);Hs=t,eh(i)}function eh(t){if(!vs){$s&&($s=clearTimeout($s));var e=t-Eo;e>24?(t<1/0&&($s=setTimeout(Qg,t-Ea.now()-cc)),Ls&&(Ls=clearInterval(Ls))):(Ls||(Au=Ea.now(),Ls=setInterval(uF,$y)),vs=1,Hy(Qg))}}function ev(t,e,n){var i=new Cu;return e=e==null?0:+e,i.restart(r=>{i.stop(),t(r+e)},e,n),i}var dF=Zh("start","end","cancel","interrupt"),fF=[],Wy=0,tv=1,th=2,Yl=3,nv=4,nh=5,ql=6;function dc(t,e,n,i,r,o){var s=t.__transition;if(!s)t.__transition={};else if(n in s)return;hF(t,n,{name:e,index:i,group:r,on:dF,tween:fF,time:o.time,delay:o.delay,duration:o.duration,ease:o.ease,timer:null,state:Wy})}function tp(t,e){var n=ti(t,e);if(n.state>Wy)throw new Error("too late; already scheduled");return n}function Ei(t,e){var n=ti(t,e);if(n.state>Yl)throw new Error("too late; already running");return n}function ti(t,e){var n=t.__transition;if(!n||!(n=n[e]))throw new Error("transition not found");return n}function hF(t,e,n){var i=t.__transition,r;i[e]=n,n.timer=Gy(o,0,n.time);function o(u){n.state=tv,n.timer.restart(s,n.delay,n.time),n.delay<=u&&s(u-n.delay)}function s(u){var c,d,f,h;if(n.state!==tv)return l();for(c in i)if(h=i[c],h.name===n.name){if(h.state===Yl)return ev(s);h.state===nv?(h.state=ql,h.timer.stop(),h.on.call("interrupt",t,t.__data__,h.index,h.group),delete i[c]):+c<e&&(h.state=ql,h.timer.stop(),h.on.call("cancel",t,t.__data__,h.index,h.group),delete i[c])}if(ev(function(){n.state===Yl&&(n.state=nv,n.timer.restart(a,n.delay,n.time),a(u))}),n.state=th,n.on.call("start",t,t.__data__,n.index,n.group),n.state===th){for(n.state=Yl,r=new Array(f=n.tween.length),c=0,d=-1;c<f;++c)(h=n.tween[c].value.call(t,t.__data__,n.index,n.group))&&(r[++d]=h);r.length=d+1}}function a(u){for(var c=u<n.duration?n.ease.call(null,u/n.duration):(n.timer.restart(l),n.state=nh,1),d=-1,f=r.length;++d<f;)r[d].call(t,c);n.state===nh&&(n.on.call("end",t,t.__data__,n.index,n.group),l())}function l(){n.state=ql,n.timer.stop(),delete i[e];for(var u in i)return;delete t.__transition}}function Kl(t,e){var n=t.__transition,i,r,o=!0,s;if(n){e=e==null?null:e+"";for(s in n){if((i=n[s]).name!==e){o=!1;continue}r=i.state>th&&i.state<nh,i.state=ql,i.timer.stop(),i.on.call(r?"interrupt":"cancel",t,t.__data__,i.index,i.group),delete n[s]}o&&delete t.__transition}}function pF(t){return this.each(function(){Kl(this,t)})}function mF(t,e){var n,i;return function(){var r=Ei(this,t),o=r.tween;if(o!==n){i=n=o;for(var s=0,a=i.length;s<a;++s)if(i[s].name===e){i=i.slice(),i.splice(s,1);break}}r.tween=i}}function gF(t,e,n){var i,r;if(typeof n!="function")throw new Error;return function(){var o=Ei(this,t),s=o.tween;if(s!==i){r=(i=s).slice();for(var a={name:e,value:n},l=0,u=r.length;l<u;++l)if(r[l].name===e){r[l]=a;break}l===u&&r.push(a)}o.tween=r}}function vF(t,e){var n=this._id;if(t+="",arguments.length<2){for(var i=ti(this.node(),n).tween,r=0,o=i.length,s;r<o;++r)if((s=i[r]).name===t)return s.value;return null}return this.each((e==null?mF:gF)(n,t,e))}function np(t,e,n){var i=t._id;return t.each(function(){var r=Ei(this,i);(r.value||(r.value={}))[e]=n.apply(this,arguments)}),function(r){return ti(r,i).value[e]}}function Xy(t,e){var n;return(typeof e=="number"?Cr:e instanceof wa?Zg:(n=wa(e))?(e=n,Zg):JL)(t,e)}function _F(t){return function(){this.removeAttribute(t)}}function yF(t){return function(){this.removeAttributeNS(t.space,t.local)}}function xF(t,e,n){var i,r=n+"",o;return function(){var s=this.getAttribute(t);return s===r?null:s===i?o:o=e(i=s,n)}}function bF(t,e,n){var i,r=n+"",o;return function(){var s=this.getAttributeNS(t.space,t.local);return s===r?null:s===i?o:o=e(i=s,n)}}function SF(t,e,n){var i,r,o;return function(){var s,a=n(this),l;return a==null?void this.removeAttribute(t):(s=this.getAttribute(t),l=a+"",s===l?null:s===i&&l===r?o:(r=l,o=e(i=s,a)))}}function MF(t,e,n){var i,r,o;return function(){var s,a=n(this),l;return a==null?void this.removeAttributeNS(t.space,t.local):(s=this.getAttributeNS(t.space,t.local),l=a+"",s===l?null:s===i&&l===r?o:(r=l,o=e(i=s,a)))}}function wF(t,e){var n=uc(t),i=n==="transform"?nF:Xy;return this.attrTween(t,typeof e=="function"?(n.local?MF:SF)(n,i,np(this,"attr."+t,e)):e==null?(n.local?yF:_F)(n):(n.local?bF:xF)(n,i,e))}function EF(t,e){return function(n){this.setAttribute(t,e.call(this,n))}}function TF(t,e){return function(n){this.setAttributeNS(t.space,t.local,e.call(this,n))}}function AF(t,e){var n,i;function r(){var o=e.apply(this,arguments);return o!==i&&(n=(i=o)&&TF(t,o)),n}return r._value=e,r}function CF(t,e){var n,i;function r(){var o=e.apply(this,arguments);return o!==i&&(n=(i=o)&&EF(t,o)),n}return r._value=e,r}function RF(t,e){var n="attr."+t;if(arguments.length<2)return(n=this.tween(n))&&n._value;if(e==null)return this.tween(n,null);if(typeof e!="function")throw new Error;var i=uc(t);return this.tween(n,(i.local?AF:CF)(i,e))}function IF(t,e){return function(){tp(this,t).delay=+e.apply(this,arguments)}}function PF(t,e){return e=+e,function(){tp(this,t).delay=e}}function NF(t){var e=this._id;return arguments.length?this.each((typeof t=="function"?IF:PF)(e,t)):ti(this.node(),e).delay}function DF(t,e){return function(){Ei(this,t).duration=+e.apply(this,arguments)}}function LF(t,e){return e=+e,function(){Ei(this,t).duration=e}}function FF(t){var e=this._id;return arguments.length?this.each((typeof t=="function"?DF:LF)(e,t)):ti(this.node(),e).duration}function UF(t,e){if(typeof e!="function")throw new Error;return function(){Ei(this,t).ease=e}}function OF(t){var e=this._id;return arguments.length?this.each(UF(e,t)):ti(this.node(),e).ease}function BF(t,e){return function(){var n=e.apply(this,arguments);if(typeof n!="function")throw new Error;Ei(this,t).ease=n}}function kF(t){if(typeof t!="function")throw new Error;return this.each(BF(this._id,t))}function zF(t){typeof t!="function"&&(t=Ty(t));for(var e=this._groups,n=e.length,i=new Array(n),r=0;r<n;++r)for(var o=e[r],s=o.length,a=i[r]=[],l,u=0;u<s;++u)(l=o[u])&&t.call(l,l.__data__,u,o)&&a.push(l);return new sr(i,this._parents,this._name,this._id)}function VF(t){if(t._id!==this._id)throw new Error;for(var e=this._groups,n=t._groups,i=e.length,r=n.length,o=Math.min(i,r),s=new Array(i),a=0;a<o;++a)for(var l=e[a],u=n[a],c=l.length,d=s[a]=new Array(c),f,h=0;h<c;++h)(f=l[h]||u[h])&&(d[h]=f);for(;a<i;++a)s[a]=e[a];return new sr(s,this._parents,this._name,this._id)}function $F(t){return(t+"").trim().split(/^|\s+/).every(function(e){var n=e.indexOf(".");return n>=0&&(e=e.slice(0,n)),!e||e==="start"})}function HF(t,e,n){var i,r,o=$F(e)?tp:Ei;return function(){var s=o(this,t),a=s.on;a!==i&&(r=(i=a).copy()).on(e,n),s.on=r}}function GF(t,e){var n=this._id;return arguments.length<2?ti(this.node(),n).on.on(t):this.each(HF(n,t,e))}function WF(t){return function(){var e=this.parentNode;for(var n in this.__transition)if(+n!==t)return;e&&e.removeChild(this)}}function XF(){return this.on("end.remove",WF(this._id))}function YF(t){var e=this._name,n=this._id;typeof t!="function"&&(t=jh(t));for(var i=this._groups,r=i.length,o=new Array(r),s=0;s<r;++s)for(var a=i[s],l=a.length,u=o[s]=new Array(l),c,d,f=0;f<l;++f)(c=a[f])&&(d=t.call(c,c.__data__,f,a))&&("__data__"in c&&(d.__data__=c.__data__),u[f]=d,dc(u[f],e,n,f,u,ti(c,n)));return new sr(o,this._parents,e,n)}function qF(t){var e=this._name,n=this._id;typeof t!="function"&&(t=Ey(t));for(var i=this._groups,r=i.length,o=[],s=[],a=0;a<r;++a)for(var l=i[a],u=l.length,c,d=0;d<u;++d)if(c=l[d]){for(var f=t.call(c,c.__data__,d,l),h,m=ti(c,n),v=0,g=f.length;v<g;++v)(h=f[v])&&dc(h,e,n,v,f,m);o.push(f),s.push(c)}return new sr(o,s,e,n)}var KF=Ba.prototype.constructor;function ZF(){return new KF(this._groups,this._parents)}function jF(t,e){var n,i,r;return function(){var o=gs(this,t),s=(this.style.removeProperty(t),gs(this,t));return o===s?null:o===n&&s===i?r:r=e(n=o,i=s)}}function Yy(t){return function(){this.style.removeProperty(t)}}function JF(t,e,n){var i,r=n+"",o;return function(){var s=gs(this,t);return s===r?null:s===i?o:o=e(i=s,n)}}function QF(t,e,n){var i,r,o;return function(){var s=gs(this,t),a=n(this),l=a+"";return a==null&&(l=a=(this.style.removeProperty(t),gs(this,t))),s===l?null:s===i&&l===r?o:(r=l,o=e(i=s,a))}}function eU(t,e){var n,i,r,o="style."+e,s="end."+o,a;return function(){var l=Ei(this,t),u=l.on,c=l.value[o]==null?a||(a=Yy(e)):void 0;(u!==n||r!==c)&&(i=(n=u).copy()).on(s,r=c),l.on=i}}function tU(t,e,n){var i=(t+="")=="transform"?tF:Xy;return e==null?this.styleTween(t,jF(t,i)).on("end.style."+t,Yy(t)):typeof e=="function"?this.styleTween(t,QF(t,i,np(this,"style."+t,e))).each(eU(this._id,t)):this.styleTween(t,JF(t,i,e),n).on("end.style."+t,null)}function nU(t,e,n){return function(i){this.style.setProperty(t,e.call(this,i),n)}}function iU(t,e,n){var i,r;function o(){var s=e.apply(this,arguments);return s!==r&&(i=(r=s)&&nU(t,s,n)),i}return o._value=e,o}function rU(t,e,n){var i="style."+(t+="");if(arguments.length<2)return(i=this.tween(i))&&i._value;if(e==null)return this.tween(i,null);if(typeof e!="function")throw new Error;return this.tween(i,iU(t,e,n??""))}function oU(t){return function(){this.textContent=t}}function sU(t){return function(){var e=t(this);this.textContent=e??""}}function aU(t){return this.tween("text",typeof t=="function"?sU(np(this,"text",t)):oU(t==null?"":t+""))}function lU(t){return function(e){this.textContent=t.call(this,e)}}function uU(t){var e,n;function i(){var r=t.apply(this,arguments);return r!==n&&(e=(n=r)&&lU(r)),e}return i._value=t,i}function cU(t){var e="text";if(arguments.length<1)return(e=this.tween(e))&&e._value;if(t==null)return this.tween(e,null);if(typeof t!="function")throw new Error;return this.tween(e,uU(t))}function dU(){for(var t=this._name,e=this._id,n=qy(),i=this._groups,r=i.length,o=0;o<r;++o)for(var s=i[o],a=s.length,l,u=0;u<a;++u)if(l=s[u]){var c=ti(l,e);dc(l,t,n,u,s,{time:c.time+c.delay+c.duration,delay:0,duration:c.duration,ease:c.ease})}return new sr(i,this._parents,t,n)}function fU(){var t,e,n=this,i=n._id,r=n.size();return new Promise(function(o,s){var a={value:s},l={value:function(){--r===0&&o()}};n.each(function(){var u=Ei(this,i),c=u.on;c!==t&&(e=(t=c).copy(),e._.cancel.push(a),e._.interrupt.push(a),e._.end.push(l)),u.on=e}),r===0&&o()})}var hU=0;function sr(t,e,n,i){this._groups=t,this._parents=e,this._name=n,this._id=i}function qy(){return++hU}var Ui=Ba.prototype;sr.prototype={constructor:sr,select:YF,selectAll:qF,selectChild:Ui.selectChild,selectChildren:Ui.selectChildren,filter:zF,merge:VF,selection:ZF,transition:dU,call:Ui.call,nodes:Ui.nodes,node:Ui.node,size:Ui.size,empty:Ui.empty,each:Ui.each,on:GF,attr:wF,attrTween:RF,style:tU,styleTween:rU,text:aU,textTween:cU,remove:XF,tween:vF,delay:NF,duration:FF,ease:OF,easeVarying:kF,end:fU,[Symbol.iterator]:Ui[Symbol.iterator]};function pU(t){return((t*=2)<=1?t*t*t:(t-=2)*t*t+2)/2}var mU={time:null,delay:0,duration:250,ease:pU};function gU(t,e){for(var n;!(n=t.__transition)||!(n=n[e]);)if(!(t=t.parentNode))throw new Error(`transition ${e} not found`);return n}function vU(t){var e,n;t instanceof sr?(e=t._id,t=t._name):(e=qy(),(n=mU).time=ep(),t=t==null?null:t+"");for(var i=this._groups,r=i.length,o=0;o<r;++o)for(var s=i[o],a=s.length,l,u=0;u<a;++u)(l=s[u])&&dc(l,t,e,u,s,n||gU(l,e));return new sr(i,this._parents,t,e)}Ba.prototype.interrupt=pF;Ba.prototype.transition=vU;const Al=t=>()=>t;function _U(t,{sourceEvent:e,target:n,transform:i,dispatch:r}){Object.defineProperties(this,{type:{value:t,enumerable:!0,configurable:!0},sourceEvent:{value:e,enumerable:!0,configurable:!0},target:{value:n,enumerable:!0,configurable:!0},transform:{value:i,enumerable:!0,configurable:!0},_:{value:r}})}function Wi(t,e,n){this.k=t,this.x=e,this.y=n}Wi.prototype={constructor:Wi,scale:function(t){return t===1?this:new Wi(this.k*t,this.x,this.y)},translate:function(t,e){return t===0&e===0?this:new Wi(this.k,this.x+this.k*t,this.y+this.k*e)},apply:function(t){return[t[0]*this.k+this.x,t[1]*this.k+this.y]},applyX:function(t){return t*this.k+this.x},applyY:function(t){return t*this.k+this.y},invert:function(t){return[(t[0]-this.x)/this.k,(t[1]-this.y)/this.k]},invertX:function(t){return(t-this.x)/this.k},invertY:function(t){return(t-this.y)/this.k},rescaleX:function(t){return t.copy().domain(t.range().map(this.invertX,this).map(t.invert,t))},rescaleY:function(t){return t.copy().domain(t.range().map(this.invertY,this).map(t.invert,t))},toString:function(){return"translate("+this.x+","+this.y+") scale("+this.k+")"}};var ip=new Wi(1,0,0);Wi.prototype;function bd(t){t.stopImmediatePropagation()}function Fs(t){t.preventDefault(),t.stopImmediatePropagation()}function yU(t){return(!t.ctrlKey||t.type==="wheel")&&!t.button}function xU(){var t=this;return t instanceof SVGElement?(t=t.ownerSVGElement||t,t.hasAttribute("viewBox")?(t=t.viewBox.baseVal,[[t.x,t.y],[t.x+t.width,t.y+t.height]]):[[0,0],[t.width.baseVal.value,t.height.baseVal.value]]):[[0,0],[t.clientWidth,t.clientHeight]]}function iv(){return this.__zoom||ip}function bU(t){return-t.deltaY*(t.deltaMode===1?.05:t.deltaMode?1:.002)*(t.ctrlKey?10:1)}function SU(){return navigator.maxTouchPoints||"ontouchstart"in this}function MU(t,e,n){var i=t.invertX(e[0][0])-n[0][0],r=t.invertX(e[1][0])-n[1][0],o=t.invertY(e[0][1])-n[0][1],s=t.invertY(e[1][1])-n[1][1];return t.translate(r>i?(i+r)/2:Math.min(0,i)||Math.max(0,r),s>o?(o+s)/2:Math.min(0,o)||Math.max(0,s))}function wU(){var t=yU,e=xU,n=MU,i=bU,r=SU,o=[0,1/0],s=[[-1/0,-1/0],[1/0,1/0]],a=250,l=sF,u=Zh("start","zoom","end"),c,d,f,h=500,m=150,v=0,g=10;function p(w){w.property("__zoom",iv).on("wheel.zoom",y,{passive:!1}).on("mousedown.zoom",x).on("dblclick.zoom",T).filter(r).on("touchstart.zoom",E).on("touchmove.zoom",I).on("touchend.zoom touchcancel.zoom",q).style("-webkit-tap-highlight-color","rgba(0,0,0,0)")}p.transform=function(w,k,A,N){var O=w.selection?w.selection():w;O.property("__zoom",iv),w!==O?P(w,k,A,N):O.interrupt().each(function(){D(this,arguments).event(N).start().zoom(null,typeof k=="function"?k.apply(this,arguments):k).end()})},p.scaleBy=function(w,k,A,N){p.scaleTo(w,function(){var O=this.__zoom.k,$=typeof k=="function"?k.apply(this,arguments):k;return O*$},A,N)},p.scaleTo=function(w,k,A,N){p.transform(w,function(){var O=e.apply(this,arguments),$=this.__zoom,K=A==null?_(O):typeof A=="function"?A.apply(this,arguments):A,te=$.invert(K),ne=typeof k=="function"?k.apply(this,arguments):k;return n(M(b($,ne),K,te),O,s)},A,N)},p.translateBy=function(w,k,A,N){p.transform(w,function(){return n(this.__zoom.translate(typeof k=="function"?k.apply(this,arguments):k,typeof A=="function"?A.apply(this,arguments):A),e.apply(this,arguments),s)},null,N)},p.translateTo=function(w,k,A,N,O){p.transform(w,function(){var $=e.apply(this,arguments),K=this.__zoom,te=N==null?_($):typeof N=="function"?N.apply(this,arguments):N;return n(ip.translate(te[0],te[1]).scale(K.k).translate(typeof k=="function"?-k.apply(this,arguments):-k,typeof A=="function"?-A.apply(this,arguments):-A),$,s)},N,O)};function b(w,k){return k=Math.max(o[0],Math.min(o[1],k)),k===w.k?w:new Wi(k,w.x,w.y)}function M(w,k,A){var N=k[0]-A[0]*w.k,O=k[1]-A[1]*w.k;return N===w.x&&O===w.y?w:new Wi(w.k,N,O)}function _(w){return[(+w[0][0]+ +w[1][0])/2,(+w[0][1]+ +w[1][1])/2]}function P(w,k,A,N){w.on("start.zoom",function(){D(this,arguments).event(N).start()}).on("interrupt.zoom end.zoom",function(){D(this,arguments).event(N).end()}).tween("zoom",function(){var O=this,$=arguments,K=D(O,$).event(N),te=e.apply(O,$),ne=A==null?_(te):typeof A=="function"?A.apply(O,$):A,ge=Math.max(te[1][0]-te[0][0],te[1][1]-te[0][1]),Ee=O.__zoom,Se=typeof k=="function"?k.apply(O,$):k,G=l(Ee.invert(ne).concat(ge/Ee.k),Se.invert(ne).concat(ge/Se.k));return function(U){if(U===1)U=Se;else{var Y=G(U),he=ge/Y[2];U=new Wi(he,ne[0]-Y[0]*he,ne[1]-Y[1]*he)}K.zoom(null,U)}})}function D(w,k,A){return!A&&w.__zooming||new B(w,k)}function B(w,k){this.that=w,this.args=k,this.active=0,this.sourceEvent=null,this.extent=e.apply(w,k),this.taps=0}B.prototype={event:function(w){return w&&(this.sourceEvent=w),this},start:function(){return++this.active===1&&(this.that.__zooming=this,this.emit("start")),this},zoom:function(w,k){return this.mouse&&w!=="mouse"&&(this.mouse[1]=k.invert(this.mouse[0])),this.touch0&&w!=="touch"&&(this.touch0[1]=k.invert(this.touch0[0])),this.touch1&&w!=="touch"&&(this.touch1[1]=k.invert(this.touch1[0])),this.that.__zoom=k,this.emit("zoom"),this},end:function(){return--this.active===0&&(delete this.that.__zooming,this.emit("end")),this},emit:function(w){var k=Ir(this.that).datum();u.call(w,this.that,new _U(w,{sourceEvent:this.sourceEvent,target:p,transform:this.that.__zoom,dispatch:u}),k)}};function y(w,...k){if(!t.apply(this,arguments))return;var A=D(this,k).event(w),N=this.__zoom,O=Math.max(o[0],Math.min(o[1],N.k*Math.pow(2,i.apply(this,arguments)))),$=wr(w);if(A.wheel)(A.mouse[0][0]!==$[0]||A.mouse[0][1]!==$[1])&&(A.mouse[1]=N.invert(A.mouse[0]=$)),clearTimeout(A.wheel);else{if(N.k===O)return;A.mouse=[$,N.invert($)],Kl(this),A.start()}Fs(w),A.wheel=setTimeout(K,m),A.zoom("mouse",n(M(b(N,O),A.mouse[0],A.mouse[1]),A.extent,s));function K(){A.wheel=null,A.end()}}function x(w,...k){if(f||!t.apply(this,arguments))return;var A=w.currentTarget,N=D(this,k,!0).event(w),O=Ir(w.view).on("mousemove.zoom",ne,!0).on("mouseup.zoom",ge,!0),$=wr(w,A),K=w.clientX,te=w.clientY;DL(w.view),bd(w),N.mouse=[$,this.__zoom.invert($)],Kl(this),N.start();function ne(Ee){if(Fs(Ee),!N.moved){var Se=Ee.clientX-K,G=Ee.clientY-te;N.moved=Se*Se+G*G>v}N.event(Ee).zoom("mouse",n(M(N.that.__zoom,N.mouse[0]=wr(Ee,A),N.mouse[1]),N.extent,s))}function ge(Ee){O.on("mousemove.zoom mouseup.zoom",null),LL(Ee.view,N.moved),Fs(Ee),N.event(Ee).end()}}function T(w,...k){if(t.apply(this,arguments)){var A=this.__zoom,N=wr(w.changedTouches?w.changedTouches[0]:w,this),O=A.invert(N),$=A.k*(w.shiftKey?.5:2),K=n(M(b(A,$),N,O),e.apply(this,k),s);Fs(w),a>0?Ir(this).transition().duration(a).call(P,K,N,w):Ir(this).call(p.transform,K,N,w)}}function E(w,...k){if(t.apply(this,arguments)){var A=w.touches,N=A.length,O=D(this,k,w.changedTouches.length===N).event(w),$,K,te,ne;for(bd(w),K=0;K<N;++K)te=A[K],ne=wr(te,this),ne=[ne,this.__zoom.invert(ne),te.identifier],O.touch0?!O.touch1&&O.touch0[2]!==ne[2]&&(O.touch1=ne,O.taps=0):(O.touch0=ne,$=!0,O.taps=1+!!c);c&&(c=clearTimeout(c)),$&&(O.taps<2&&(d=ne[0],c=setTimeout(function(){c=null},h)),Kl(this),O.start())}}function I(w,...k){if(this.__zooming){var A=D(this,k).event(w),N=w.changedTouches,O=N.length,$,K,te,ne;for(Fs(w),$=0;$<O;++$)K=N[$],te=wr(K,this),A.touch0&&A.touch0[2]===K.identifier?A.touch0[0]=te:A.touch1&&A.touch1[2]===K.identifier&&(A.touch1[0]=te);if(K=A.that.__zoom,A.touch1){var ge=A.touch0[0],Ee=A.touch0[1],Se=A.touch1[0],G=A.touch1[1],U=(U=Se[0]-ge[0])*U+(U=Se[1]-ge[1])*U,Y=(Y=G[0]-Ee[0])*Y+(Y=G[1]-Ee[1])*Y;K=b(K,Math.sqrt(U/Y)),te=[(ge[0]+Se[0])/2,(ge[1]+Se[1])/2],ne=[(Ee[0]+G[0])/2,(Ee[1]+G[1])/2]}else if(A.touch0)te=A.touch0[0],ne=A.touch0[1];else return;A.zoom("touch",n(M(K,te,ne),A.extent,s))}}function q(w,...k){if(this.__zooming){var A=D(this,k).event(w),N=w.changedTouches,O=N.length,$,K;for(bd(w),f&&clearTimeout(f),f=setTimeout(function(){f=null},h),$=0;$<O;++$)K=N[$],A.touch0&&A.touch0[2]===K.identifier?delete A.touch0:A.touch1&&A.touch1[2]===K.identifier&&delete A.touch1;if(A.touch1&&!A.touch0&&(A.touch0=A.touch1,delete A.touch1),A.touch0)A.touch0[1]=this.__zoom.invert(A.touch0[0]);else if(A.end(),A.taps===2&&(K=wr(K,this),Math.hypot(d[0]-K[0],d[1]-K[1])<g)){var te=Ir(this).on("dblclick.zoom");te&&te.apply(this,arguments)}}}return p.wheelDelta=function(w){return arguments.length?(i=typeof w=="function"?w:Al(+w),p):i},p.filter=function(w){return arguments.length?(t=typeof w=="function"?w:Al(!!w),p):t},p.touchable=function(w){return arguments.length?(r=typeof w=="function"?w:Al(!!w),p):r},p.extent=function(w){return arguments.length?(e=typeof w=="function"?w:Al([[+w[0][0],+w[0][1]],[+w[1][0],+w[1][1]]]),p):e},p.scaleExtent=function(w){return arguments.length?(o[0]=+w[0],o[1]=+w[1],p):[o[0],o[1]]},p.translateExtent=function(w){return arguments.length?(s[0][0]=+w[0][0],s[1][0]=+w[1][0],s[0][1]=+w[0][1],s[1][1]=+w[1][1],p):[[s[0][0],s[0][1]],[s[1][0],s[1][1]]]},p.constrain=function(w){return arguments.length?(n=w,p):n},p.duration=function(w){return arguments.length?(a=+w,p):a},p.interpolate=function(w){return arguments.length?(l=w,p):l},p.on=function(){var w=u.on.apply(u,arguments);return w===u?p:w},p.clickDistance=function(w){return arguments.length?(v=(w=+w)*w,p):Math.sqrt(v)},p.tapDistance=function(w){return arguments.length?(g=+w,p):g},p}const Ky=Symbol("MiniMapSlots"),EU=["id","x","y","rx","ry","width","height","fill","stroke","stroke-width","shape-rendering"],TU={name:"MiniMapNode",compatConfig:{MODE:3},inheritAttrs:!1},AU=Nt({...TU,props:{id:{},type:{},selected:{type:Boolean},dragging:{type:Boolean},position:{},dimensions:{},borderRadius:{},color:{},shapeRendering:{},strokeColor:{},strokeWidth:{},hidden:{type:Boolean}},emits:["click","dblclick","mouseenter","mousemove","mouseleave"],setup(t,{emit:e}){const n=t,i=Pn(Ky),r=yh(),o=bt(()=>r.style??{});function s(d){e("click",d)}function a(d){e("dblclick",d)}function l(d){e("mouseenter",d)}function u(d){e("mousemove",d)}function c(d){e("mouseleave",d)}return(d,f)=>!d.hidden&&d.dimensions.width!==0&&d.dimensions.height!==0?(ce(),me(it,{key:0},[fe(i)[`node-${n.type}`]?(ce(),Qt(s0(fe(i)[`node-${n.type}`]),Cx(aa({key:0},{...n,...d.$attrs})),null,16)):(ce(),me("rect",aa({key:1,id:d.id},d.$attrs,{class:["vue-flow__minimap-node",{selected:d.selected,dragging:d.dragging}],x:d.position.x,y:d.position.y,rx:d.borderRadius,ry:d.borderRadius,width:d.dimensions.width,height:d.dimensions.height,fill:d.color||o.value.background||o.value.backgroundColor,stroke:d.strokeColor,"stroke-width":d.strokeWidth,"shape-rendering":d.shapeRendering,onClick:s,onDblclick:a,onMouseenter:l,onMousemove:u,onMouseleave:c}),null,16,EU))],64)):Ge("",!0)}}),CU=["width","height","viewBox","aria-labelledby"],RU=["id"],IU=["d","fill","stroke","stroke-width"],PU={name:"MiniMap",compatConfig:{MODE:3}},NU=Nt({...PU,props:{nodeColor:{type:[String,Function],default:"#e2e2e2"},nodeStrokeColor:{type:[String,Function],default:"transparent"},nodeClassName:{type:[String,Function]},nodeBorderRadius:{default:5},nodeStrokeWidth:{default:2},maskColor:{default:"rgb(240, 240, 240, 0.6)"},maskStrokeColor:{default:"none"},maskStrokeWidth:{default:1},position:{default:"bottom-right"},pannable:{type:Boolean,default:!1},zoomable:{type:Boolean,default:!1},width:{},height:{},ariaLabel:{default:"Vue Flow mini map"},inversePan:{type:Boolean,default:!1},zoomStep:{default:1},offsetScale:{default:5},maskBorderRadius:{default:0}},emits:["click","nodeClick","nodeDblclick","nodeMouseenter","nodeMousemove","nodeMouseleave"],setup(t,{emit:e}){const n=u0(),i=yh(),r=200,o=150,{id:s,edges:a,viewport:l,translateExtent:u,dimensions:c,emits:d,d3Selection:f,d3Zoom:h,getNodesInitialized:m}=Dt(),v=Ie();Or(Ky,n);const g=bt(()=>{var O;return t.width??((O=i.style)==null?void 0:O.width)??r}),p=bt(()=>{var O;return t.height??((O=i.style)==null?void 0:O.height)??o}),b=typeof window>"u"||window.chrome?"crispEdges":"geometricPrecision",M=Re(()=>typeof t.nodeColor=="string"?()=>t.nodeColor:t.nodeColor),_=Re(()=>typeof t.nodeStrokeColor=="string"?()=>t.nodeStrokeColor:t.nodeStrokeColor),P=Re(()=>typeof t.nodeClassName=="string"?()=>t.nodeClassName:typeof t.nodeClassName=="function"?t.nodeClassName:()=>""),D=Re(()=>Wh(m.value.filter(O=>!O.hidden))),B=Re(()=>({x:-l.value.x/l.value.zoom,y:-l.value.y/l.value.zoom,width:c.value.width/l.value.zoom,height:c.value.height/l.value.zoom})),y=Re(()=>m.value&&m.value.length?qP(D.value,B.value):B.value),x=Re(()=>{const O=y.value.width/g.value,$=y.value.height/p.value;return Math.max(O,$)}),T=Re(()=>{const O=x.value*g.value,$=x.value*p.value,K=t.offsetScale*x.value;return{offset:K,x:y.value.x-(O-y.value.width)/2-K,y:y.value.y-($-y.value.height)/2-K,width:O+K*2,height:$+K*2}}),E=Re(()=>!T.value.x||!T.value.y?"":`
    M${T.value.x-T.value.offset},${T.value.y-T.value.offset}
    h${T.value.width+T.value.offset*2}
    v${T.value.height+T.value.offset*2}
    h${-T.value.width-T.value.offset*2}z
    M${B.value.x+t.maskBorderRadius},${B.value.y}
    h${B.value.width-2*t.maskBorderRadius}
    a${t.maskBorderRadius},${t.maskBorderRadius} 0 0 1 ${t.maskBorderRadius},${t.maskBorderRadius}
    v${B.value.height-2*t.maskBorderRadius}
    a${t.maskBorderRadius},${t.maskBorderRadius} 0 0 1 -${t.maskBorderRadius},${t.maskBorderRadius}
    h${-(B.value.width-2*t.maskBorderRadius)}
    a${t.maskBorderRadius},${t.maskBorderRadius} 0 0 1 -${t.maskBorderRadius},-${t.maskBorderRadius}
    v${-(B.value.height-2*t.maskBorderRadius)}
    a${t.maskBorderRadius},${t.maskBorderRadius} 0 0 1 ${t.maskBorderRadius},-${t.maskBorderRadius}z`);Gv(O=>{if(v.value){const $=Ir(v.value),K=ge=>{if(ge.sourceEvent.type!=="wheel"||!f.value||!h.value)return;const Ee=ge.sourceEvent.ctrlKey&&ba()?10:1,Se=-ge.sourceEvent.deltaY*(ge.sourceEvent.deltaMode===1?.05:ge.sourceEvent.deltaMode?1:.002)*t.zoomStep,G=l.value.zoom*2**(Se*Ee);h.value.scaleTo(f.value,G)},te=ge=>{if(ge.sourceEvent.type!=="mousemove"||!f.value||!h.value)return;const Ee=x.value*Math.max(1,l.value.zoom)*(t.inversePan?-1:1),Se={x:l.value.x-ge.sourceEvent.movementX*Ee,y:l.value.y-ge.sourceEvent.movementY*Ee},G=[[0,0],[c.value.width,c.value.height]],U=ip.translate(Se.x,Se.y).scale(l.value.zoom),Y=h.value.constrain()(U,G,u.value);h.value.transform(f.value,Y)},ne=wU().wheelDelta(ge=>Gf(ge)*(t.zoomStep/10)).on("zoom",t.pannable?te:()=>{}).on("zoom.wheel",t.zoomable?K:()=>{});$.call(ne),O(()=>{$.on("zoom",null)})}},{flush:"post"});function I(O){const[$,K]=wr(O);e("click",{event:O,position:{x:$,y:K}})}function q(O,$){const K={event:O,node:$,connectedEdges:lo([$],a.value)};d.miniMapNodeClick(K),e("nodeClick",K)}function w(O,$){const K={event:O,node:$,connectedEdges:lo([$],a.value)};d.miniMapNodeDoubleClick(K),e("nodeDblclick",K)}function k(O,$){const K={event:O,node:$,connectedEdges:lo([$],a.value)};d.miniMapNodeMouseEnter(K),e("nodeMouseenter",K)}function A(O,$){const K={event:O,node:$,connectedEdges:lo([$],a.value)};d.miniMapNodeMouseMove(K),e("nodeMousemove",K)}function N(O,$){const K={event:O,node:$,connectedEdges:lo([$],a.value)};d.miniMapNodeMouseLeave(K),e("nodeMouseleave",K)}return(O,$)=>(ce(),Qt(fe(ZN),{position:O.position,class:ut(["vue-flow__minimap",{pannable:O.pannable,zoomable:O.zoomable}])},{default:dn(()=>[(ce(),me("svg",{ref_key:"el",ref:v,width:g.value,height:p.value,viewBox:[T.value.x,T.value.y,T.value.width,T.value.height].join(" "),role:"img","aria-labelledby":`vue-flow__minimap-${fe(s)}`,onClick:I},[O.ariaLabel?(ce(),me("title",{key:0,id:`vue-flow__minimap-${fe(s)}`},Te(O.ariaLabel),9,RU)):Ge("",!0),(ce(!0),me(it,null,Ht(fe(m),K=>(ce(),Qt(AU,{id:K.id,key:K.id,f:"",position:K.computedPosition,dimensions:K.dimensions,selected:K.selected,dragging:K.dragging,style:rt(K.style),class:ut(P.value(K)),color:M.value(K),"border-radius":O.nodeBorderRadius,"stroke-color":_.value(K),"stroke-width":O.nodeStrokeWidth,"shape-rendering":fe(b),type:K.type,hidden:K.hidden,onClick:te=>q(te,K),onDblclick:te=>w(te,K),onMouseenter:te=>k(te,K),onMousemove:te=>A(te,K),onMouseleave:te=>N(te,K)},null,8,["id","position","dimensions","selected","dragging","style","class","color","border-radius","stroke-color","stroke-width","shape-rendering","type","hidden","onClick","onDblclick","onMouseenter","onMousemove","onMouseleave"]))),128)),Q("path",{class:"vue-flow__minimap-mask",d:E.value,fill:O.maskColor,stroke:O.maskStrokeColor,"stroke-width":O.maskStrokeWidth,"fill-rule":"evenodd"},null,8,IU)],8,CU))]),_:1},8,["position","class"]))}});var ih="http://www.w3.org/1999/xhtml";const rv={svg:"http://www.w3.org/2000/svg",xhtml:ih,xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"};function Zy(t){var e=t+="",n=e.indexOf(":");return n>=0&&(e=t.slice(0,n))!=="xmlns"&&(t=t.slice(n+1)),rv.hasOwnProperty(e)?{space:rv[e],local:t}:t}function DU(t){return function(){var e=this.ownerDocument,n=this.namespaceURI;return n===ih&&e.documentElement.namespaceURI===ih?e.createElement(t):e.createElementNS(n,t)}}function LU(t){return function(){return this.ownerDocument.createElementNS(t.space,t.local)}}function jy(t){var e=Zy(t);return(e.local?LU:DU)(e)}function FU(){}function Jy(t){return t==null?FU:function(){return this.querySelector(t)}}function UU(t){typeof t!="function"&&(t=Jy(t));for(var e=this._groups,n=e.length,i=new Array(n),r=0;r<n;++r)for(var o=e[r],s=o.length,a=i[r]=new Array(s),l,u,c=0;c<s;++c)(l=o[c])&&(u=t.call(l,l.__data__,c,o))&&("__data__"in l&&(u.__data__=l.__data__),a[c]=u);return new kn(i,this._parents)}function OU(t){return t==null?[]:Array.isArray(t)?t:Array.from(t)}function BU(){return[]}function kU(t){return t==null?BU:function(){return this.querySelectorAll(t)}}function zU(t){return function(){return OU(t.apply(this,arguments))}}function VU(t){typeof t=="function"?t=zU(t):t=kU(t);for(var e=this._groups,n=e.length,i=[],r=[],o=0;o<n;++o)for(var s=e[o],a=s.length,l,u=0;u<a;++u)(l=s[u])&&(i.push(t.call(l,l.__data__,u,s)),r.push(l));return new kn(i,r)}function $U(t){return function(){return this.matches(t)}}function Qy(t){return function(e){return e.matches(t)}}var HU=Array.prototype.find;function GU(t){return function(){return HU.call(this.children,t)}}function WU(){return this.firstElementChild}function XU(t){return this.select(t==null?WU:GU(typeof t=="function"?t:Qy(t)))}var YU=Array.prototype.filter;function qU(){return Array.from(this.children)}function KU(t){return function(){return YU.call(this.children,t)}}function ZU(t){return this.selectAll(t==null?qU:KU(typeof t=="function"?t:Qy(t)))}function jU(t){typeof t!="function"&&(t=$U(t));for(var e=this._groups,n=e.length,i=new Array(n),r=0;r<n;++r)for(var o=e[r],s=o.length,a=i[r]=[],l,u=0;u<s;++u)(l=o[u])&&t.call(l,l.__data__,u,o)&&a.push(l);return new kn(i,this._parents)}function ex(t){return new Array(t.length)}function JU(){return new kn(this._enter||this._groups.map(ex),this._parents)}function Ru(t,e){this.ownerDocument=t.ownerDocument,this.namespaceURI=t.namespaceURI,this._next=null,this._parent=t,this.__data__=e}Ru.prototype={constructor:Ru,appendChild:function(t){return this._parent.insertBefore(t,this._next)},insertBefore:function(t,e){return this._parent.insertBefore(t,e)},querySelector:function(t){return this._parent.querySelector(t)},querySelectorAll:function(t){return this._parent.querySelectorAll(t)}};function QU(t){return function(){return t}}function eO(t,e,n,i,r,o){for(var s=0,a,l=e.length,u=o.length;s<u;++s)(a=e[s])?(a.__data__=o[s],i[s]=a):n[s]=new Ru(t,o[s]);for(;s<l;++s)(a=e[s])&&(r[s]=a)}function tO(t,e,n,i,r,o,s){var a,l,u=new Map,c=e.length,d=o.length,f=new Array(c),h;for(a=0;a<c;++a)(l=e[a])&&(f[a]=h=s.call(l,l.__data__,a,e)+"",u.has(h)?r[a]=l:u.set(h,l));for(a=0;a<d;++a)h=s.call(t,o[a],a,o)+"",(l=u.get(h))?(i[a]=l,l.__data__=o[a],u.delete(h)):n[a]=new Ru(t,o[a]);for(a=0;a<c;++a)(l=e[a])&&u.get(f[a])===l&&(r[a]=l)}function nO(t){return t.__data__}function iO(t,e){if(!arguments.length)return Array.from(this,nO);var n=e?tO:eO,i=this._parents,r=this._groups;typeof t!="function"&&(t=QU(t));for(var o=r.length,s=new Array(o),a=new Array(o),l=new Array(o),u=0;u<o;++u){var c=i[u],d=r[u],f=d.length,h=rO(t.call(c,c&&c.__data__,u,i)),m=h.length,v=a[u]=new Array(m),g=s[u]=new Array(m),p=l[u]=new Array(f);n(c,d,v,g,p,h,e);for(var b=0,M=0,_,P;b<m;++b)if(_=v[b]){for(b>=M&&(M=b+1);!(P=g[M])&&++M<m;);_._next=P||null}}return s=new kn(s,i),s._enter=a,s._exit=l,s}function rO(t){return typeof t=="object"&&"length"in t?t:Array.from(t)}function oO(){return new kn(this._exit||this._groups.map(ex),this._parents)}function sO(t,e,n){var i=this.enter(),r=this,o=this.exit();return typeof t=="function"?(i=t(i),i&&(i=i.selection())):i=i.append(t+""),e!=null&&(r=e(r),r&&(r=r.selection())),n==null?o.remove():n(o),i&&r?i.merge(r).order():r}function aO(t){for(var e=t.selection?t.selection():t,n=this._groups,i=e._groups,r=n.length,o=i.length,s=Math.min(r,o),a=new Array(r),l=0;l<s;++l)for(var u=n[l],c=i[l],d=u.length,f=a[l]=new Array(d),h,m=0;m<d;++m)(h=u[m]||c[m])&&(f[m]=h);for(;l<r;++l)a[l]=n[l];return new kn(a,this._parents)}function lO(){for(var t=this._groups,e=-1,n=t.length;++e<n;)for(var i=t[e],r=i.length-1,o=i[r],s;--r>=0;)(s=i[r])&&(o&&s.compareDocumentPosition(o)^4&&o.parentNode.insertBefore(s,o),o=s);return this}function uO(t){t||(t=cO);function e(d,f){return d&&f?t(d.__data__,f.__data__):!d-!f}for(var n=this._groups,i=n.length,r=new Array(i),o=0;o<i;++o){for(var s=n[o],a=s.length,l=r[o]=new Array(a),u,c=0;c<a;++c)(u=s[c])&&(l[c]=u);l.sort(e)}return new kn(r,this._parents).order()}function cO(t,e){return t<e?-1:t>e?1:t>=e?0:NaN}function dO(){var t=arguments[0];return arguments[0]=this,t.apply(null,arguments),this}function fO(){return Array.from(this)}function hO(){for(var t=this._groups,e=0,n=t.length;e<n;++e)for(var i=t[e],r=0,o=i.length;r<o;++r){var s=i[r];if(s)return s}return null}function pO(){let t=0;for(const e of this)++t;return t}function mO(){return!this.node()}function gO(t){for(var e=this._groups,n=0,i=e.length;n<i;++n)for(var r=e[n],o=0,s=r.length,a;o<s;++o)(a=r[o])&&t.call(a,a.__data__,o,r);return this}function vO(t){return function(){this.removeAttribute(t)}}function _O(t){return function(){this.removeAttributeNS(t.space,t.local)}}function yO(t,e){return function(){this.setAttribute(t,e)}}function xO(t,e){return function(){this.setAttributeNS(t.space,t.local,e)}}function bO(t,e){return function(){var n=e.apply(this,arguments);n==null?this.removeAttribute(t):this.setAttribute(t,n)}}function SO(t,e){return function(){var n=e.apply(this,arguments);n==null?this.removeAttributeNS(t.space,t.local):this.setAttributeNS(t.space,t.local,n)}}function MO(t,e){var n=Zy(t);if(arguments.length<2){var i=this.node();return n.local?i.getAttributeNS(n.space,n.local):i.getAttribute(n)}return this.each((e==null?n.local?_O:vO:typeof e=="function"?n.local?SO:bO:n.local?xO:yO)(n,e))}function tx(t){return t.ownerDocument&&t.ownerDocument.defaultView||t.document&&t||t.defaultView}function wO(t){return function(){this.style.removeProperty(t)}}function EO(t,e,n){return function(){this.style.setProperty(t,e,n)}}function TO(t,e,n){return function(){var i=e.apply(this,arguments);i==null?this.style.removeProperty(t):this.style.setProperty(t,i,n)}}function AO(t,e,n){return arguments.length>1?this.each((e==null?wO:typeof e=="function"?TO:EO)(t,e,n??"")):CO(this.node(),t)}function CO(t,e){return t.style.getPropertyValue(e)||tx(t).getComputedStyle(t,null).getPropertyValue(e)}function RO(t){return function(){delete this[t]}}function IO(t,e){return function(){this[t]=e}}function PO(t,e){return function(){var n=e.apply(this,arguments);n==null?delete this[t]:this[t]=n}}function NO(t,e){return arguments.length>1?this.each((e==null?RO:typeof e=="function"?PO:IO)(t,e)):this.node()[t]}function nx(t){return t.trim().split(/^|\s+/)}function rp(t){return t.classList||new ix(t)}function ix(t){this._node=t,this._names=nx(t.getAttribute("class")||"")}ix.prototype={add:function(t){var e=this._names.indexOf(t);e<0&&(this._names.push(t),this._node.setAttribute("class",this._names.join(" ")))},remove:function(t){var e=this._names.indexOf(t);e>=0&&(this._names.splice(e,1),this._node.setAttribute("class",this._names.join(" ")))},contains:function(t){return this._names.indexOf(t)>=0}};function rx(t,e){for(var n=rp(t),i=-1,r=e.length;++i<r;)n.add(e[i])}function ox(t,e){for(var n=rp(t),i=-1,r=e.length;++i<r;)n.remove(e[i])}function DO(t){return function(){rx(this,t)}}function LO(t){return function(){ox(this,t)}}function FO(t,e){return function(){(e.apply(this,arguments)?rx:ox)(this,t)}}function UO(t,e){var n=nx(t+"");if(arguments.length<2){for(var i=rp(this.node()),r=-1,o=n.length;++r<o;)if(!i.contains(n[r]))return!1;return!0}return this.each((typeof e=="function"?FO:e?DO:LO)(n,e))}function OO(){this.textContent=""}function BO(t){return function(){this.textContent=t}}function kO(t){return function(){var e=t.apply(this,arguments);this.textContent=e??""}}function zO(t){return arguments.length?this.each(t==null?OO:(typeof t=="function"?kO:BO)(t)):this.node().textContent}function VO(){this.innerHTML=""}function $O(t){return function(){this.innerHTML=t}}function HO(t){return function(){var e=t.apply(this,arguments);this.innerHTML=e??""}}function GO(t){return arguments.length?this.each(t==null?VO:(typeof t=="function"?HO:$O)(t)):this.node().innerHTML}function WO(){this.nextSibling&&this.parentNode.appendChild(this)}function XO(){return this.each(WO)}function YO(){this.previousSibling&&this.parentNode.insertBefore(this,this.parentNode.firstChild)}function qO(){return this.each(YO)}function KO(t){var e=typeof t=="function"?t:jy(t);return this.select(function(){return this.appendChild(e.apply(this,arguments))})}function ZO(){return null}function jO(t,e){var n=typeof t=="function"?t:jy(t),i=e==null?ZO:typeof e=="function"?e:Jy(e);return this.select(function(){return this.insertBefore(n.apply(this,arguments),i.apply(this,arguments)||null)})}function JO(){var t=this.parentNode;t&&t.removeChild(this)}function QO(){return this.each(JO)}function eB(){var t=this.cloneNode(!1),e=this.parentNode;return e?e.insertBefore(t,this.nextSibling):t}function tB(){var t=this.cloneNode(!0),e=this.parentNode;return e?e.insertBefore(t,this.nextSibling):t}function nB(t){return this.select(t?tB:eB)}function iB(t){return arguments.length?this.property("__data__",t):this.node().__data__}function rB(t){return function(e){t.call(this,e,this.__data__)}}function oB(t){return t.trim().split(/^|\s+/).map(function(e){var n="",i=e.indexOf(".");return i>=0&&(n=e.slice(i+1),e=e.slice(0,i)),{type:e,name:n}})}function sB(t){return function(){var e=this.__on;if(e){for(var n=0,i=-1,r=e.length,o;n<r;++n)o=e[n],(!t.type||o.type===t.type)&&o.name===t.name?this.removeEventListener(o.type,o.listener,o.options):e[++i]=o;++i?e.length=i:delete this.__on}}}function aB(t,e,n){return function(){var i=this.__on,r,o=rB(e);if(i){for(var s=0,a=i.length;s<a;++s)if((r=i[s]).type===t.type&&r.name===t.name){this.removeEventListener(r.type,r.listener,r.options),this.addEventListener(r.type,r.listener=o,r.options=n),r.value=e;return}}this.addEventListener(t.type,o,n),r={type:t.type,name:t.name,value:e,listener:o,options:n},i?i.push(r):this.__on=[r]}}function lB(t,e,n){var i=oB(t+""),r,o=i.length,s;if(arguments.length<2){var a=this.node().__on;if(a){for(var l=0,u=a.length,c;l<u;++l)for(r=0,c=a[l];r<o;++r)if((s=i[r]).type===c.type&&s.name===c.name)return c.value}return}for(a=e?aB:sB,r=0;r<o;++r)this.each(a(i[r],e,n));return this}function sx(t,e,n){var i=tx(t),r=i.CustomEvent;typeof r=="function"?r=new r(e,n):(r=i.document.createEvent("Event"),n?(r.initEvent(e,n.bubbles,n.cancelable),r.detail=n.detail):r.initEvent(e,!1,!1)),t.dispatchEvent(r)}function uB(t,e){return function(){return sx(this,t,e)}}function cB(t,e){return function(){return sx(this,t,e.apply(this,arguments))}}function dB(t,e){return this.each((typeof e=="function"?cB:uB)(t,e))}function*fB(){for(var t=this._groups,e=0,n=t.length;e<n;++e)for(var i=t[e],r=0,o=i.length,s;r<o;++r)(s=i[r])&&(yield s)}var hB=[null];function kn(t,e){this._groups=t,this._parents=e}function pB(){return this}kn.prototype={constructor:kn,select:UU,selectAll:VU,selectChild:XU,selectChildren:ZU,filter:jU,data:iO,enter:JU,exit:oO,join:sO,merge:aO,selection:pB,order:lO,sort:uO,call:dO,nodes:fO,node:hO,size:pO,empty:mO,each:gO,attr:MO,style:AO,property:NO,classed:UO,text:zO,html:GO,raise:XO,lower:qO,append:KO,insert:jO,remove:QO,clone:nB,datum:iB,on:lB,dispatch:dB,[Symbol.iterator]:fB};function Ta(t){return typeof t=="string"?new kn([[document.querySelector(t)]],[document.documentElement]):new kn([[t]],hB)}function mB(t){let e;for(;e=t.sourceEvent;)t=e;return t}function ov(t,e){if(t=mB(t),e===void 0&&(e=t.currentTarget),e){var n=e.ownerSVGElement||e;if(n.createSVGPoint){var i=n.createSVGPoint();return i.x=t.clientX,i.y=t.clientY,i=i.matrixTransform(e.getScreenCTM().inverse()),[i.x,i.y]}if(e.getBoundingClientRect){var r=e.getBoundingClientRect();return[t.clientX-r.left-e.clientLeft,t.clientY-r.top-e.clientTop]}}return[t.pageX,t.pageY]}var gB={value:()=>{}};function ax(){for(var t=0,e=arguments.length,n={},i;t<e;++t){if(!(i=arguments[t]+"")||i in n||/[\s.]/.test(i))throw new Error("illegal type: "+i);n[i]=[]}return new Zl(n)}function Zl(t){this._=t}function vB(t,e){return t.trim().split(/^|\s+/).map(function(n){var i="",r=n.indexOf(".");if(r>=0&&(i=n.slice(r+1),n=n.slice(0,r)),n&&!e.hasOwnProperty(n))throw new Error("unknown type: "+n);return{type:n,name:i}})}Zl.prototype=ax.prototype={constructor:Zl,on:function(t,e){var n=this._,i=vB(t+"",n),r,o=-1,s=i.length;if(arguments.length<2){for(;++o<s;)if((r=(t=i[o]).type)&&(r=_B(n[r],t.name)))return r;return}if(e!=null&&typeof e!="function")throw new Error("invalid callback: "+e);for(;++o<s;)if(r=(t=i[o]).type)n[r]=sv(n[r],t.name,e);else if(e==null)for(r in n)n[r]=sv(n[r],t.name,null);return this},copy:function(){var t={},e=this._;for(var n in e)t[n]=e[n].slice();return new Zl(t)},call:function(t,e){if((r=arguments.length-2)>0)for(var n=new Array(r),i=0,r,o;i<r;++i)n[i]=arguments[i+2];if(!this._.hasOwnProperty(t))throw new Error("unknown type: "+t);for(o=this._[t],i=0,r=o.length;i<r;++i)o[i].value.apply(e,n)},apply:function(t,e,n){if(!this._.hasOwnProperty(t))throw new Error("unknown type: "+t);for(var i=this._[t],r=0,o=i.length;r<o;++r)i[r].value.apply(e,n)}};function _B(t,e){for(var n=0,i=t.length,r;n<i;++n)if((r=t[n]).name===e)return r.value}function sv(t,e,n){for(var i=0,r=t.length;i<r;++i)if(t[i].name===e){t[i]=gB,t=t.slice(0,i).concat(t.slice(i+1));break}return n!=null&&t.push({name:e,value:n}),t}const yB={passive:!1},Aa={capture:!0,passive:!1};function Sd(t){t.stopImmediatePropagation()}function os(t){t.preventDefault(),t.stopImmediatePropagation()}function xB(t){var e=t.document.documentElement,n=Ta(t).on("dragstart.drag",os,Aa);"onselectstart"in e?n.on("selectstart.drag",os,Aa):(e.__noselect=e.style.MozUserSelect,e.style.MozUserSelect="none")}function bB(t,e){var n=t.document.documentElement,i=Ta(t).on("dragstart.drag",null);e&&(i.on("click.drag",os,Aa),setTimeout(function(){i.on("click.drag",null)},0)),"onselectstart"in n?i.on("selectstart.drag",null):(n.style.MozUserSelect=n.__noselect,delete n.__noselect)}const Cl=t=>()=>t;function rh(t,{sourceEvent:e,subject:n,target:i,identifier:r,active:o,x:s,y:a,dx:l,dy:u,dispatch:c}){Object.defineProperties(this,{type:{value:t,enumerable:!0,configurable:!0},sourceEvent:{value:e,enumerable:!0,configurable:!0},subject:{value:n,enumerable:!0,configurable:!0},target:{value:i,enumerable:!0,configurable:!0},identifier:{value:r,enumerable:!0,configurable:!0},active:{value:o,enumerable:!0,configurable:!0},x:{value:s,enumerable:!0,configurable:!0},y:{value:a,enumerable:!0,configurable:!0},dx:{value:l,enumerable:!0,configurable:!0},dy:{value:u,enumerable:!0,configurable:!0},_:{value:c}})}rh.prototype.on=function(){var t=this._.on.apply(this._,arguments);return t===this._?this:t};function SB(t){return!t.ctrlKey&&!t.button}function MB(){return this.parentNode}function wB(t,e){return e??{x:t.x,y:t.y}}function EB(){return navigator.maxTouchPoints||"ontouchstart"in this}function TB(){var t=SB,e=MB,n=wB,i=EB,r={},o=ax("start","drag","end"),s=0,a,l,u,c,d=0;function f(_){_.on("mousedown.drag",h).filter(i).on("touchstart.drag",g).on("touchmove.drag",p,yB).on("touchend.drag touchcancel.drag",b).style("touch-action","none").style("-webkit-tap-highlight-color","rgba(0,0,0,0)")}function h(_,P){if(!(c||!t.call(this,_,P))){var D=M(this,e.call(this,_,P),_,P,"mouse");D&&(Ta(_.view).on("mousemove.drag",m,Aa).on("mouseup.drag",v,Aa),xB(_.view),Sd(_),u=!1,a=_.clientX,l=_.clientY,D("start",_))}}function m(_){if(os(_),!u){var P=_.clientX-a,D=_.clientY-l;u=P*P+D*D>d}r.mouse("drag",_)}function v(_){Ta(_.view).on("mousemove.drag mouseup.drag",null),bB(_.view,u),os(_),r.mouse("end",_)}function g(_,P){if(t.call(this,_,P)){var D=_.changedTouches,B=e.call(this,_,P),y=D.length,x,T;for(x=0;x<y;++x)(T=M(this,B,_,P,D[x].identifier,D[x]))&&(Sd(_),T("start",_,D[x]))}}function p(_){var P=_.changedTouches,D=P.length,B,y;for(B=0;B<D;++B)(y=r[P[B].identifier])&&(os(_),y("drag",_,P[B]))}function b(_){var P=_.changedTouches,D=P.length,B,y;for(c&&clearTimeout(c),c=setTimeout(function(){c=null},500),B=0;B<D;++B)(y=r[P[B].identifier])&&(Sd(_),y("end",_,P[B]))}function M(_,P,D,B,y,x){var T=o.copy(),E=ov(x||D,P),I,q,w;if((w=n.call(_,new rh("beforestart",{sourceEvent:D,target:f,identifier:y,active:s,x:E[0],y:E[1],dx:0,dy:0,dispatch:T}),B))!=null)return I=w.x-E[0]||0,q=w.y-E[1]||0,function k(A,N,O){var $=E,K;switch(A){case"start":r[y]=k,K=s++;break;case"end":delete r[y],--s;case"drag":E=ov(O||N,P),K=s;break}T.call(A,_,new rh(A,{sourceEvent:N,subject:w,target:f,identifier:y,active:K,x:E[0]+I,y:E[1]+q,dx:E[0]-$[0],dy:E[1]-$[1],dispatch:T}),B)}}return f.filter=function(_){return arguments.length?(t=typeof _=="function"?_:Cl(!!_),f):t},f.container=function(_){return arguments.length?(e=typeof _=="function"?_:Cl(_),f):e},f.subject=function(_){return arguments.length?(n=typeof _=="function"?_:Cl(_),f):n},f.touchable=function(_){return arguments.length?(i=typeof _=="function"?_:Cl(!!_),f):i},f.on=function(){var _=o.on.apply(o,arguments);return _===o?f:_},f.clickDistance=function(_){return arguments.length?(d=(_=+_)*_,f):Math.sqrt(d)},f}var To=(t=>(t.Line="line",t.Handle="handle",t))(To||{});function AB({width:t,prevWidth:e,height:n,prevHeight:i,invertX:r,invertY:o}){const s=t-e,a=n-i,l=[s>0?1:s<0?-1:0,a>0?1:a<0?-1:0];return s&&r&&(l[0]=l[0]*-1),a&&o&&(l[1]=l[1]*-1),l}const CB={[To.Line]:"right",[To.Handle]:"bottom-right"},RB={[To.Line]:"borderColor",[To.Handle]:"backgroundColor"},IB={name:"ResizeControl",compatConfig:{MODE:3}},av=Nt({...IB,props:{nodeId:{},color:{},minWidth:{default:10},minHeight:{default:10},maxWidth:{default:Number.MAX_VALUE},maxHeight:{default:Number.MAX_VALUE},position:{},variant:{default:"handle"},shouldResize:{},keepAspectRatio:{type:[Boolean,Number],default:!1},autoScale:{type:Boolean,default:!0},handleClassName:{},handleStyle:{},lineClassName:{},lineStyle:{},isVisible:{type:Boolean}},emits:["resizeStart","resize","resizeEnd"],setup(t,{emit:e}){const n=t,i={width:0,height:0,x:0,y:0},r={...i,pointerX:0,pointerY:0,aspectRatio:1},{findNode:o,emits:s,viewport:a,noDragClassName:l}=Dt(),u=py(),c=Ie();let d=r,f=i;const h=bt(()=>n.position??CB[n.variant]),m=Re(()=>h.value.split("-")),v=bt(()=>n.color?{[RB[n.variant]]:n.color}:{}),g=bt(()=>n.variant===To.Handle),p=Re(()=>g.value&&n.autoScale?`${Math.max(1/a.value.zoom,1)}`:void 0);return Gv(b=>{if(!c.value||!n.nodeId)return;const M=Ta(c.value),_=h.value.includes("right")||h.value.includes("left"),P=h.value.includes("bottom")||h.value.includes("top"),D=h.value.includes("left"),B=h.value.includes("top"),y=TB().on("start",x=>{const T=o(n.nodeId),{xSnapped:E,ySnapped:I}=u(x);f={width:T?.dimensions.width??0,height:T?.dimensions.height??0,x:T?.position.x??0,y:T?.position.y??0},d={...f,pointerX:E,pointerY:I,aspectRatio:f.width/f.height},e("resizeStart",{event:x,params:f})}).on("drag",x=>{var T;const{xSnapped:E,ySnapped:I}=u(x),q=o(n.nodeId);if(q){const w=[],{pointerX:k,pointerY:A,width:N,height:O,x:$,y:K,aspectRatio:te}=d,{x:ne,y:ge,width:Ee,height:Se}=f,G=Math.floor(_?E-k:0),U=Math.floor(P?I-A:0);let Y=or(N+(D?-G:G),n.minWidth,n.maxWidth),he=or(O+(B?-U:U),n.minHeight,n.maxHeight);if(n.keepAspectRatio){const F=Y/he;let z=te;typeof n.keepAspectRatio=="number"&&F!==n.keepAspectRatio&&(z=n.keepAspectRatio);const J=_&&P,C=_&&!P,ae=P&&!_;Y=F<=z&&J||ae?he*z:Y,he=F>z&&J||C?Y/z:he,Y>=n.maxWidth?(Y=n.maxWidth,he=n.maxWidth/z):Y<=n.minWidth&&(Y=n.minWidth,he=n.minWidth/z),he>=n.maxHeight?(he=n.maxHeight,Y=n.maxHeight*z):he<=n.minHeight&&(he=n.minHeight,Y=n.minHeight*z)}const xe=Y!==Ee,we=he!==Se;if(D||B){const F=D?$-(Y-N):$,z=B?K-(he-O):K,J=F!==ne&&xe,C=z!==ge&&we;if(J||C){const ae={id:q.id,type:"position",from:q.position,position:{x:J?F:ne,y:C?z:ge}};w.push(ae),f.x=ae.position.x,f.y=ae.position.y}}if(n.nodeId&&(xe||we)){const F={id:n.nodeId,type:"dimensions",updateStyle:!0,resizing:!0,dimensions:{width:Y,height:he}};w.push(F),f.width=Y,f.height=he}if(w.length===0)return;const H=AB({width:f.width,prevWidth:Ee,height:f.height,prevHeight:Se,invertX:D,invertY:B}),X={...f,direction:H};if(((T=n.shouldResize)==null?void 0:T.call(n,x,X))===!1)return;e("resize",{event:x,params:X}),s.nodesChange(w)}}).on("end",x=>{if(n.nodeId){const T={id:n.nodeId,type:"dimensions",resizing:!1};e("resizeEnd",{event:x,params:f}),s.nodesChange([T])}});M.call(y),b(()=>{M.on(".drag",null)})}),(b,M)=>(ce(),me("div",{ref_key:"resizeControlRef",ref:c,class:ut(["vue-flow__resize-control",[...m.value,b.variant,fe(l)]]),style:rt({...v.value,scale:p.value})},[er(b.$slots,"default")],6))}}),PB={name:"NodeResizer",compatConfig:{MODE:3},inheritAttrs:!1},NB=Nt({...PB,props:{nodeId:{},color:{},handleClassName:{},handleStyle:{},lineClassName:{},lineStyle:{},isVisible:{type:Boolean,default:!0},minWidth:{},minHeight:{},maxWidth:{},maxHeight:{},shouldResize:{},keepAspectRatio:{type:[Boolean,Number]},autoScale:{type:Boolean,default:!0}},emits:["resizeStart","resize","resizeEnd"],setup(t,{emit:e}){const n=t,{findNode:i,emits:r}=Dt(),o=["top-left","top-right","bottom-left","bottom-right"],s=["top","right","bottom","left"],a=Pn(qh,null),l=bt(()=>typeof n.nodeId=="string"?n.nodeId:a),u=Re(()=>i(l.value));return lt([()=>n.minWidth,()=>n.minHeight,()=>n.maxWidth,()=>n.maxHeight,()=>{var c;return!!((c=u.value)!=null&&c.dimensions.width)&&!!u.value.dimensions.height}],([c,d,f,h,m])=>{const v=u.value;if(v&&m){const g={id:v.id,type:"dimensions",updateStyle:!0,dimensions:{width:v.dimensions.width,height:v.dimensions.height}};c&&v.dimensions.width<c&&(g.dimensions.width=c),d&&v.dimensions.height<d&&(g.dimensions.height=d),f&&v.dimensions.width>f&&(g.dimensions.width=f),h&&v.dimensions.height>h&&(g.dimensions.height=h),(g.dimensions.width!==v.dimensions.width||g.dimensions.height!==v.dimensions.height)&&r.nodesChange([g])}},{flush:"post",immediate:!0}),(c,d)=>c.isVisible?(ce(),me(it,{key:0},[(ce(),me(it,null,Ht(s,f=>tt(av,{key:f,class:ut(c.lineClassName),style:rt(c.lineStyle),"node-id":l.value,position:f,variant:fe(To).Line,color:c.color,"min-width":c.minWidth,"min-height":c.minHeight,"max-width":c.maxWidth,"max-height":c.maxHeight,"should-resize":c.shouldResize,"keep-aspect-ratio":c.keepAspectRatio,"auto-scale":c.autoScale,onResizeStart:d[0]||(d[0]=h=>e("resizeStart",h)),onResize:d[1]||(d[1]=h=>e("resize",h)),onResizeEnd:d[2]||(d[2]=h=>e("resizeEnd",h))},null,8,["class","style","node-id","position","variant","color","min-width","min-height","max-width","max-height","should-resize","keep-aspect-ratio","auto-scale"])),64)),(ce(),me(it,null,Ht(o,f=>tt(av,{key:f,class:ut(c.handleClassName),style:rt(c.handleStyle),"node-id":l.value,position:f,color:c.color,"min-width":c.minWidth,"min-height":c.minHeight,"max-width":c.maxWidth,"max-height":c.maxHeight,"should-resize":c.shouldResize,"keep-aspect-ratio":c.keepAspectRatio,"auto-scale":c.autoScale,onResizeStart:d[3]||(d[3]=h=>e("resizeStart",h)),onResize:d[4]||(d[4]=h=>e("resize",h)),onResizeEnd:d[5]||(d[5]=h=>e("resizeEnd",h))},null,8,["class","style","node-id","position","color","min-width","min-height","max-width","max-height","should-resize","keep-aspect-ratio","auto-scale"])),64))],64)):Ge("",!0)}});let oh=0;function DB(){return`node_${++oh}_${Date.now().toString(36)}`}const Ao=eS("graph",()=>{const t=Ie([]),e=Ie([]),n=Ur({}),i=Ie(null),r=Ie(!0),o=Ie("anchored"),s=Ie(null),a=Ie("Untitled Project"),l=Ie(0),u=Ie(!0),c=Ie(!1),d=Ie(!1),f=Ie([]);let h=0;const m=Ie({}),v=Ie({}),g=Ie({});let p=null;const b=Ur({}),M=Re(()=>i.value&&t.value.find(W=>W.id===i.value)||null),_=Re(()=>M.value?Xt(M.value.type):null),P=Re(()=>i.value?n[i.value]||{}:{});function D(W){p=W}function B(W,j={x:200,y:200}){const ee=Xt(W);if(!ee)return console.warn(`Unknown node type: ${W}`),null;const R=DB(),S={};for(const[oe,de]of Object.entries(ee.params))S[oe]=de.default;n[R]=S;const Z={id:R,type:W,position:j,data:{label:ee.label,category:ee.category,def:ee}};return t.value=[...t.value,Z],R}function y(W){p&&p(W),t.value=t.value.filter(j=>j.id!==W),e.value=e.value.filter(j=>j.source!==W&&j.target!==W),delete n[W],delete b[W],i.value===W&&(i.value=null),s.value===W&&(s.value=null)}function x(W){const j=t.value.find(se=>se.id===W.source),ee=t.value.find(se=>se.id===W.target);if(!j||!ee)return!1;const R=Xt(j.type),S=Xt(ee.type);if(!R||!S)return!1;const Z=R.outputs.find(se=>se.id===W.sourceHandle);let oe=S.inputs.find(se=>se.id===W.targetHandle);if(!oe){const se=b[ee.id];if(se&&se[W.targetHandle]){const Ne=S.params[W.targetHandle];if(Ne){const Ce=Ne.type==="int"?_e.INT:(Ne.type==="float",_e.FLOAT);oe={id:W.targetHandle,type:Ce}}}}if(R&&Z){const Ne=k(W.source).find(Ce=>Ce.id===W.sourceHandle);Ne&&(Z=Ne)}if(!Z||!oe)return!1;if(!jm(Z.type,oe.type))return console.warn(`Type mismatch: ${Z.type} → ${oe.type}`),!1;e.value=e.value.filter(se=>!(se.target===W.target&&se.targetHandle===W.targetHandle));const de={id:`e_${W.source}_${W.sourceHandle}-${W.target}_${W.targetHandle}`,source:W.source,sourceHandle:W.sourceHandle,target:W.target,targetHandle:W.targetHandle};return e.value=[...e.value,de],!0}function T(W){e.value=e.value.filter(j=>j.id!==W)}function E(W,j,ee){n[W]||(n[W]={});const R=n[W][j];if(n[W][j]=ee,j==="outputType"){const S=t.value.find(Z=>Z.id===W);if(S&&S.type==="slider"&&R!==ee){const oe=k(W).find(se=>se.id==="out")?.type;let de=!1;e.value=e.value.filter(se=>{if(se.source!==W)return!0;const Ne=t.value.find(We=>We.id===se.target),Ce=Ne?Xt(Ne.type):null;let $e=Ce?.inputs?.find(We=>We.id===se.targetHandle)?.type;return!$e&&b[se.target]?.[se.targetHandle]&&($e=Ce?.params?.[se.targetHandle]?.type==="int"?_e.INT:_e.FLOAT),$e&&!jm(oe,$e)?(console.warn(`Disconnecting edge from ${W} to ${se.target} due to type mismatch.`),de=!0,!1):!0}),de&&window.alert("One or more cables were disconnected because the data type changed and they are no longer compatible.")}}}function I(W,j){b[W]||(b[W]={}),b[W][j]=!b[W][j],b[W][j]||(e.value=e.value.filter(ee=>!(ee.target===W&&ee.targetHandle===j)))}function q(W,j){return!!b[W]?.[j]}function w(W){const j=t.value.find(S=>S.id===W);if(!j)return[];const ee=Xt(j.type);if(!ee)return[];const R=b[W]||{};return Object.entries(R).filter(([S,Z])=>Z).map(([S])=>{const Z=ee.params[S];if(!Z)return null;const oe=Z.type==="int"?_e.INT:(Z.type==="float",_e.FLOAT);return{id:S,label:Z.label,type:oe}}).filter(Boolean)}function k(W){const j=t.value.find(S=>S.id===W);if(!j)return[];const ee=Xt(j.type);if(!ee||!ee.outputs)return[];const R=ee.outputs.map(S=>({...S}));if(j.type==="slider"){const S=n[W]?.outputType||"float",Z=R.find(oe=>oe.id==="out");Z&&(Z.type=S==="int"?_e.INT:_e.FLOAT)}return R}function A(W){i.value=W}function N(){r.value=!r.value}function O(){r.value=!1}function $(){r.value=!0}function K(){o.value==="anchored"?o.value="floating":o.value==="floating"?o.value="background":o.value="anchored"}function te(){for(const W of t.value)p&&p(W.id);t.value=[],e.value=[],Object.keys(n).forEach(W=>delete n[W]),Object.keys(b).forEach(W=>delete b[W]),i.value=null,s.value=null,oh=0}function ne(){const W={version:1,title:a.value,timestamp:Date.now(),nodes:t.value.map(j=>({id:j.id,type:j.type,position:j.position})),edges:e.value.map(j=>({id:j.id,source:j.source,sourceHandle:j.sourceHandle,target:j.target,targetHandle:j.targetHandle})),params:{...n},exposedParams:{...b},perfGridCells:f.value.map(j=>({...j})),settings:{previewMode:o.value}};return JSON.stringify(W,null,2)}function ge(W){try{const j=JSON.parse(W);j.version!==1&&console.warn("Unknown graph version:",j.version),te(),a.value=j.title||"Untitled Project";for(const R of j.nodes){const S=Xt(R.type);if(!S){console.warn(`Skipping unknown node type: ${R.type}`);continue}const Z={id:R.id,type:R.type,position:R.position,data:{label:S.label,category:S.category,def:S}};t.value.push(Z);const oe={};for(const[de,se]of Object.entries(S.params))oe[de]=j.params?.[R.id]?.[de]??se.default;n[R.id]=oe}if(j.exposedParams)for(const[R,S]of Object.entries(j.exposedParams))b[R]={...S};for(const R of j.edges)e.value.push(R);return j.perfGridCells?(f.value=j.perfGridCells.map(S=>({...S})),h=j.perfGridCells.reduce((S,Z)=>{const oe=Z.id.match(/perf_(\d+)_/);return oe?Math.max(S,parseInt(oe[1])):S},0)):(f.value=[],h=0),j.settings&&(o.value="anchored"),oh=j.nodes.reduce((R,S)=>{const Z=S.id.match(/node_(\d+)_/);return Z?Math.max(R,parseInt(Z[1])):R},0),!0}catch(j){return console.error("Failed to load graph:",j),!1}}function Ee(){const W=ne(),j=`mangleditor-graph-${a.value||"default"}`;return localStorage.setItem(j,W),!0}async function Se(W=null){try{const j=W?`mangleditor-graph-${W}`:`mangleditor-graph-${a.value||"default"}`,ee=localStorage.getItem(j);if(ee)return ge(ee);if(!W){console.log("No local save found. Loading StarterTemplate by default...");try{const R=await fetch("./StarterTemplate.json");if(R.ok){const S=await R.text();return ge(S)}}catch(R){console.error("Failed to auto-load StarterTemplate:",R)}}return!1}catch(j){return console.error("Failed to load from localStorage:",j),!1}}function G(){const W=ne(),j=new Blob([W],{type:"application/json"}),ee=URL.createObjectURL(j),R=document.createElement("a");R.href=ee;const S=(a.value||"mangleditor").replace(/[^a-zA-Z0-9_-]/g,"_");R.download=`${S}.json`,R.click(),URL.revokeObjectURL(ee)}function U(W){const j=t.value.find(ee=>ee.id===W);j&&(j.type==="button"||j.type==="bang")&&(j._triggered=!0)}function Y(){c.value=!c.value,c.value||(d.value=!1)}function he(){d.value=!d.value}function xe(W){const j=`perf_${++h}_${Date.now().toString(36)}`;return f.value=[...f.value,{id:j,controlType:W,boundNodeId:null,boundParamKey:null,boundTargetNodeId:null,boundParamKeyY:null,boundTargetNodeIdY:null,nickname:"",gridOrder:f.value.length}],j}function we(W){const j=f.value.find(ee=>ee.id===W);j&&["lfo","timer","damper","fft","accelerometer","xypad"].includes(j.controlType)&&j.boundNodeId&&y(j.boundNodeId),f.value=f.value.filter(ee=>ee.id!==W)}function H(W,j){return e.value.some(ee=>ee.target===W&&ee.targetHandle===j)}function X(W,j,ee){if(H(j,ee)){console.warn(`Cannot bind perf cell to ${j}.${ee} because it is already modulated by a node connection.`);return}const R=f.value.find(S=>S.id===W);R&&(R.boundNodeId=j,R.boundParamKey=ee)}function L(W,j,ee){const R=f.value.find(S=>S.id===W);R&&(R.boundTargetNodeId=j,R.boundParamKey=ee)}function F(W,j,ee){const R=f.value.find(S=>S.id===W);R&&(R.boundTargetNodeIdY=j,R.boundParamKeyY=ee)}function z(W,j){const ee=f.value.find(R=>R.id===W);ee&&(ee.nickname=j)}function J(W,j){const ee=[...f.value],[R]=ee.splice(W,1);ee.splice(j,0,R),f.value=ee}function C(){const W=new Set;for(const ee of f.value)ee.boundNodeId&&ee.boundParamKey&&!ee.boundTargetNodeId&&W.add(`${ee.boundNodeId}::${ee.boundParamKey}`),ee.boundTargetNodeId&&ee.boundParamKey&&W.add(`${ee.boundTargetNodeId}::${ee.boundParamKey}`),ee.boundTargetNodeIdY&&ee.boundParamKeyY&&W.add(`${ee.boundTargetNodeIdY}::${ee.boundParamKeyY}`);const j=[];for(const[ee,R]of Object.entries(b))for(const[S,Z]of Object.entries(R))if(Z&&!W.has(`${ee}::${S}`)&&!H(ee,S)){const oe=t.value.find(Ne=>Ne.id===ee),de=oe?Xt(oe.type):null;if(de?.isPassthrough)continue;const se=de?.params?.[S];j.push({nodeId:ee,paramKey:S,nodeLabel:de?.label||oe?.type||ee,paramLabel:se?.label||S})}return j}function ae(){const W=["knob","slider","bang","button","toggle"];return t.value.filter(j=>W.includes(j.type))}return{nodes:t,edges:e,nodeParams:n,selectedNodeId:i,isRendering:r,previewMode:o,previewNodeId:s,projectTitle:a,exposedParams:b,selectedNode:M,selectedNodeDef:_,selectedNodeParams:P,dataOutputs:m,perfTimings:v,previewImages:g,getDataOutput(W,j){return m.value[W]?.[j]},addNode:B,removeNode:y,addEdge:x,removeEdge:T,setParam:E,selectNode:A,toggleRendering:N,stopRendering:O,startRendering:$,togglePreviewMode:K,resetGraph:te,saveGraph:ne,saveToLocalStorage:Ee,loadGraph:ge,loadFromLocalStorage:Se,downloadGraph:G,triggerButton:U,onNodeRemoved:D,toggleExposeParam:I,isParamExposed:q,getExposedHandles:w,getNodeOutputs:k,isPerformanceMode:c,isPerfEditMode:d,perfGridCells:f,togglePerformanceMode:Y,togglePerfEditMode:he,addPerfCell:xe,removePerfCell:we,bindPerfCell:X,bindPerfCellTarget:L,bindPerfCellTargetY:F,setPerfCellNickname:z,reorderPerfCells:J,getUnboundExposedParams:C,getControlNodes:ae,bgOpacity:l,showShadows:u}}),LB={width:"100%",height:"100%",viewBox:"0 0 100 100"},FB=["d"],UB=["x2","y2"],OB={key:0,class:"knob-value"},BB=270,Rl=-135,kB={__name:"KnobControl",props:{modelValue:{type:Number,default:0},min:{type:Number,default:0},max:{type:Number,default:1},step:{type:Number,default:.01},size:{type:Number,default:60},showValue:{type:Boolean,default:!0}},emits:["update:modelValue"],setup(t,{emit:e}){const n=t,i=e,r=Re(()=>{const P=n.min!==void 0?n.min:0,D=n.max!==void 0?n.max:1;return P===D?0:Math.max(0,Math.min(1,(n.modelValue-P)/(D-P)))}),o=Re(()=>Rl+r.value*BB);function s(P,D,B,y){const x=(y-90)*Math.PI/180;return{x:P+B*Math.cos(x),y:D+B*Math.sin(x)}}const a=Re(()=>{const P=s(50,50,40,Rl),D=s(50,50,40,o.value),B=o.value-Rl<=180?"0":"1";return["M",P.x,P.y,"A",40,40,0,B,1,D.x,D.y].join(" ")}),l=Re(()=>s(50,50,24,o.value).x),u=Re(()=>s(50,50,24,o.value).y);let c=0,d=0;function f(P,D){const B=c-P,y=n.min!==void 0?n.min:0,x=n.max!==void 0?n.max:1;let E=(x-y||1)/150;D&&(E*=.1);let I=d+B*E;I=Math.max(y,Math.min(x,I)),n.step&&(I=Math.round(I/n.step)*n.step);const q=n.step.toString().split(".")[1]?.length||0;I=Number(I.toFixed(q)),i("update:modelValue",I)}function h(P){c=P.clientY,d=n.modelValue,document.addEventListener("mousemove",m),document.addEventListener("mouseup",v)}function m(P){f(P.clientY,P.shiftKey)}function v(){document.removeEventListener("mousemove",m),document.removeEventListener("mouseup",v)}function g(P){c=P.touches[0].clientY,d=n.modelValue,document.addEventListener("touchmove",p,{passive:!1}),document.addEventListener("touchend",b),document.addEventListener("touchcancel",b)}function p(P){P.preventDefault();const D=P.touches[0];f(D.clientY,!1)}function b(){document.removeEventListener("touchmove",p),document.removeEventListener("touchend",b),document.removeEventListener("touchcancel",b)}function M(){const P=n.min!==void 0?n.min:0,B=((n.max!==void 0?n.max:1)+P)/2;i("update:modelValue",B)}const _=Re(()=>Number(n.modelValue).toFixed(Math.min(3,n.step.toString().split(".")[1]?.length||3)));return(P,D)=>(ce(),me("div",{class:"knob-control",onMousedown:Oe(h,["stop","prevent"]),onTouchstart:Oe(g,["stop","prevent"]),onDblclick:Oe(M,["stop"]),style:rt({width:t.size?t.size+"px":"100%",height:t.size?t.size+"px":"100%"})},[(ce(),me("svg",LB,[D[0]||(D[0]=Q("path",{class:"knob-track",d:"M 21.716 78.284 A 40 40 0 1 1 78.284 78.284",fill:"none",stroke:"rgba(255, 255, 255, 0.1)","stroke-width":"12","stroke-linecap":"round"},null,-1)),o.value>Rl?(ce(),me("path",{key:0,class:"knob-arc",d:a.value,fill:"none",stroke:"var(--accent-primary, #00d4ff)","stroke-width":"12","stroke-linecap":"round"},null,8,FB)):Ge("",!0),D[1]||(D[1]=Q("circle",{cx:"50",cy:"50",r:"26",fill:"var(--bg-light, #333)",stroke:"var(--border-color, #444)","stroke-width":"2"},null,-1)),Q("line",{x1:50,y1:50,x2:l.value,y2:u.value,stroke:"var(--text-color, #fff)","stroke-width":"4","stroke-linecap":"round"},null,8,UB)])),t.showValue?(ce(),me("div",OB,Te(_.value),1)):Ge("",!0)],36))}},lx=cr(kB,[["__scopeId","data-v-06e9e2ee"]]),zB=["title"],VB={key:0,class:"flow-node__collapsed-badge flow-node__collapsed-badge--in"},$B={class:"flow-node__title"},HB={key:1,class:"flow-node__collapsed-badge flow-node__collapsed-badge--out"},GB=["title"],WB=["title"],XB=["title"],YB=["title"],qB={class:"flow-node__body"},KB={class:"flow-node__handles"},ZB={class:"flow-node__handle-label"},jB={class:"flow-node__handle-type"},JB=["title"],QB={class:"flow-node__handle-label flow-node__handle-label--exposed"},ek={class:"flow-node__handle-type"},tk={key:1,class:"flow-node__image-preview-container"},nk=["src"],ik={key:1,class:"flow-node__slot-label",style:{"text-align":"center",color:"var(--accent-success)",padding:"8px 0","font-size":"11px"}},rk={key:1,class:"flow-node__image-preview-container"},ok=["min","max","step","value"],sk={class:"flow-node__slider-value"},ak={class:"flow-node__inline-param-row"},lk=["value"],uk=["value"],ck={class:"flow-node__inline-param-row"},dk=["value"],fk={class:"flow-node__inline-param-val"},hk={class:"flow-node__inline-param-row"},pk=["value"],mk={class:"flow-node__inline-param-val"},gk={class:"flow-node__xypad-readout"},vk={class:"flow-node__inline-param-val"},_k={class:"flow-node__inline-param-val"},yk={key:9,class:"flow-node__monitor"},xk=["title"],bk={key:10,class:"flow-node__preview-inline"},Sk={class:"flow-node__handles"},Mk={class:"flow-node__handle-type"},wk={class:"flow-node__handle-label"},Ek=["title"],lv=100,Md=60,Tk={__name:"FlowNode",props:{nodeId:{type:String,required:!0},nodeType:{type:String,required:!0},def:{type:Object,required:!0},params:{type:Object,default:()=>({})},selected:{type:Boolean,default:!1},inputValues:{type:Object,default:()=>({})},outputValues:{type:Object,default:()=>({})},monitorValue:{type:Number,default:null},exposedHandles:{type:Array,default:()=>[]},perfMs:{type:Number,default:null}},emits:["select","imageLoaded","export","trigger","paramChange"],setup(t,{emit:e}){const n=t,i=e,r=Ao(),o=Re(()=>{const G=r.edges.filter(U=>U.target===n.nodeId);return[...new Set(G.map(U=>U.targetHandle))]}),s=Re(()=>{const G=r.edges.filter(U=>U.source===n.nodeId);return[...new Set(G.map(U=>U.sourceHandle))]}),a=Re(()=>r.getNodeOutputs(n.nodeId)),l=Re(()=>{if(!n.params._collapsed)return"";let G=`INPUTS
`;if(o.value.length===0)G+=`  (none)
`;else for(const U of o.value){const Y=n.def.inputs.find(we=>we.id===U),he=Y?Y.label:U,xe=n.inputValues[U];G+=`• ${he}: ${xe!==void 0?ge(xe):"—"}
`}if(G+=`
OUTPUTS
`,s.value.length===0)G+=`  (none)
`;else for(const U of s.value){const Y=n.def.outputs.find(we=>we.id===U),he=Y?Y.label:U,xe=n.outputValues[U];G+=`• ${he}: ${xe!==void 0?ge(xe):"—"}
`}return G}),u=Re(()=>fu[n.def.category]?.color||"#888"),c=Re(()=>n.def.params?Object.values(n.def.params).some(G=>G.type==="float"||G.type==="int"):!1);function d(){if(n.def.params){for(const[G,U]of Object.entries(n.def.params))if(U.type==="float"||U.type==="int"){const Y=G==="value"&&n.params.min!==void 0?n.params.min:U.min!==void 0?U.min:0,he=G==="value"&&n.params.max!==void 0?n.params.max:U.max!==void 0?U.max:1,xe=n.params[`_randMin_${G}`]??Y,we=n.params[`_randMax_${G}`]??he;let H=xe+Math.random()*(we-xe);U.type==="int"?H=Math.floor(H):U.step&&(H=Math.round(H/U.step)*U.step),i("paramChange",G,H)}}}const f=Ie(null),h=Ie(!1),m=Ie(null),v=Re(()=>!!m.value);mn(()=>{if((n.nodeType==="imageInput"||n.nodeType==="uiImageSlot")&&!m.value){const G="/default_img.jpg";m.value=G;const U=new Image;U.crossOrigin="anonymous",U.src=G,U.onload=()=>{i("imageLoaded",{url:G,width:U.naturalWidth,height:U.naturalHeight,img:U})}}});const g=Ie(null),p=Ie([]),b=Ie(null);lt(()=>r.previewImages[n.nodeId],G=>{if(n.nodeType!=="preview"||!G||!b.value)return;const U=b.value,Y=U.getContext("2d");(U.width!==G.width||U.height!==G.height)&&(U.width=G.width,U.height=G.height);const he=document.createElement("canvas");he.width=G.width,he.height=G.height;const xe=he.getContext("2d"),we=new ImageData(new Uint8ClampedArray(G.pixels.buffer),G.width,G.height);xe.putImageData(we,0,0),Y.save(),Y.scale(1,-1),Y.drawImage(he,0,-G.height),Y.restore()});const M=Ie(!1),_=Ie(null);let P=null;async function D(){try{P=await navigator.mediaDevices.getUserMedia({video:{width:1280,height:720},audio:!1}),M.value=!0,setTimeout(()=>{_.value&&(_.value.srcObject=P,_.value.onloadedmetadata=()=>{_.value.play(),i("imageLoaded",{url:"webcam",width:_.value.videoWidth,height:_.value.videoHeight,img:_.value,isVideo:!0})})},50)}catch(G){console.error("Failed to access webcam:",G),alert("Could not access webcam. Please check permissions.")}}function B(){P&&(P.getTracks().forEach(G=>G.stop()),P=null),M.value=!1,i("imageLoaded",{url:"webcam",width:1,height:1,img:null,isVideo:!1})}const y=Ie(null),x=Re(()=>({left:(n.params.x??.5)*100+"%",top:(1-(n.params.y??.5))*100+"%"}));let T=!1;function E(G){T=!0,w(G),window.addEventListener("pointermove",I),window.addEventListener("pointerup",q)}function I(G){T&&w(G)}function q(){T=!1,window.removeEventListener("pointermove",I),window.removeEventListener("pointerup",q)}function w(G){const U=y.value;if(!U)return;const Y=U.getBoundingClientRect(),he=Math.max(0,Math.min(1,(G.clientX-Y.left)/Y.width)),xe=Math.max(0,Math.min(1,1-(G.clientY-Y.top)/Y.height));i("paramChange","x",he),i("paramChange","y",xe)}const k=Ie(null),A=[];let N=null;n.nodeType==="lfo"&&mn(()=>{N=setInterval(()=>{const G=n.outputValues?.out??0;A.push(G),A.length>Md&&A.shift(),O()},50)});function O(){const G=k.value;if(!G||A.length<2)return;const U=G.getContext("2d"),Y=G.width,he=G.height;U.clearRect(0,0,Y,he);let xe=1/0,we=-1/0;for(const X of A)X<xe&&(xe=X),X>we&&(we=X);we===xe&&(xe-=.5,we+=.5);const H=we-xe;U.strokeStyle="#00d4ff",U.lineWidth=1.5,U.lineJoin="round",U.beginPath();for(let X=0;X<A.length;X++){const L=X/(Md-1)*Y,F=he-(A[X]-xe)/H*he;X===0?U.moveTo(L,F):U.lineTo(L,F)}U.stroke(),U.lineTo((A.length-1)/(Md-1)*Y,he),U.lineTo(0,he),U.closePath(),U.fillStyle="rgba(0, 212, 255, 0.08)",U.fill()}lr(()=>{B(),clearInterval(N)});function $(){f.value?.click()}function K(G){const U=G.target.files?.[0];U&&ne(U)}function te(G){h.value=!1;const U=G.dataTransfer.files?.[0];U&&U.type.startsWith("image/")&&ne(U)}function ne(G){const U=URL.createObjectURL(G);m.value=U;const Y=new Image;Y.onload=()=>{i("imageLoaded",{url:U,width:Y.naturalWidth,height:Y.naturalHeight,img:Y})},Y.src=U}function ge(G){return G==null?"":typeof G=="number"?G.toFixed(2):String(G)}lt(()=>n.monitorValue,G=>{G!=null&&(p.value.push(G),p.value.length>lv&&p.value.shift(),Ee())});function Ee(){const G=g.value;if(!G)return;const U=G.getContext("2d"),Y=G.width,he=G.height,xe=p.value;if(U.clearRect(0,0,Y,he),xe.length<2)return;const we=Math.min(...xe),H=Math.max(...xe),X=H-we||1;U.strokeStyle="#00d4ff",U.lineWidth=1.5,U.beginPath();for(let L=0;L<xe.length;L++){const F=L/(lv-1)*Y,z=he-(xe[L]-we)/X*(he-4)-2;L===0?U.moveTo(F,z):U.lineTo(F,z)}if(U.stroke(),we<=0&&H>=0){const L=he-(0-we)/X*(he-4)-2;U.strokeStyle="#ffffff30",U.lineWidth=.5,U.beginPath(),U.moveTo(0,L),U.lineTo(Y,L),U.stroke()}}const Se=Re(()=>{if(n.nodeType!=="webcamInput")return!1;const G=n.params?.enable===!0,U=r.dataOutputs[n.nodeId]?.trigger??0;return G||U>.5});return lt(Se,G=>{G&&!M.value?D():!G&&M.value&&B()},{immediate:!0}),(G,U)=>(ce(),me("div",{class:ut(["flow-node",{"flow-node--selected":t.selected},{"flow-node--compact":t.def.compact},{"flow-node--bypassed":t.params._bypass},{"flow-node--collapsed":t.params._collapsed},{"flow-node--resizable":!t.params._collapsed&&["preview","knob","imageInput","webcamInput"].includes(t.nodeType)&&t.params._resizable}]),onClick:U[40]||(U[40]=Y=>G.$emit("select")),onDblclick:U[41]||(U[41]=Oe(Y=>G.$emit("paramChange","_collapsed",!t.params._collapsed),["stop"]))},[["preview","knob","imageInput","webcamInput"].includes(t.nodeType)&&t.params._resizable?(ce(),Qt(fe(NB),{key:0,"min-width":60,"min-height":60,"max-width":540,"max-height":540,"keep-aspect-ratio":!0,"is-visible":t.selected,class:"nodrag"},null,8,["is-visible"])):Ge("",!0),Q("div",{class:"flow-node__header",title:l.value},[t.params._collapsed&&o.value.length>0?(ce(),me("span",VB," ["+Te(o.value.length)+"] ",1)):Ge("",!0),Q("div",{class:"flow-node__category-dot",style:rt({background:u.value})},null,4),Q("div",$B,Te(t.def.label),1),t.params._collapsed&&s.value.length>0?(ce(),me("span",HB," ["+Te(s.value.length)+"] ",1)):Ge("",!0),c.value?(ce(),me("button",{key:2,class:"flow-node__bypass-btn",style:{"margin-right":"4px"},onClick:Oe(d,["stop"]),title:"Randomize Parameters"}," 🎲 ")):Ge("",!0),Q("button",{class:ut(["flow-node__bypass-btn",{"flow-node__bypass-btn--active":t.params._collapsed}]),style:{"margin-right":"4px"},onClick:U[0]||(U[0]=Oe(Y=>G.$emit("paramChange","_collapsed",!t.params._collapsed),["stop"])),title:t.params._collapsed?"Expand Node":"Collapse Node"},Te(t.params._collapsed?"▼":"▬"),11,GB),!t.params._collapsed&&["preview","knob","imageInput","webcamInput"].includes(t.nodeType)?(ce(),me("button",{key:3,class:ut(["flow-node__bypass-btn",{"flow-node__bypass-btn--active":t.params._resizable}]),style:{"margin-right":"4px"},onClick:U[1]||(U[1]=Oe(Y=>G.$emit("paramChange","_resizable",!t.params._resizable),["stop"])),title:t.params._resizable?"Disable Resizing":"Enable Resizing"}," ⤢ ",10,WB)):Ge("",!0),t.def.shaderKey||t.def.category==="image"||t.def.category==="uv"?(ce(),me("button",{key:4,class:ut(["flow-node__bypass-btn",{"flow-node__bypass-btn--active":t.params._bypass}]),onClick:U[2]||(U[2]=Oe(Y=>G.$emit("paramChange","_bypass",!t.params._bypass),["stop"])),title:t.params._bypass?"Enable (bypassed)":"Bypass"},Te(t.params._bypass?"⊘":"⏵"),11,XB)):Ge("",!0),t.perfMs!==null?(ce(),me("span",{key:5,class:"flow-node__perf-badge",title:t.perfMs+"ms"},Te(t.perfMs<1?"<1":t.perfMs.toFixed(1))+"ms ",9,YB)):Ge("",!0)],8,zB),Q("div",qB,[Q("div",KB,[(ce(!0),me(it,null,Ht(t.def.inputs,Y=>(ce(),me("div",{key:"in-"+Y.id,class:"flow-node__handle-row flow-node__handle-row--input"},[tt(fe(xo),{type:"target",id:Y.id,position:fe(Ye).Left,style:rt({background:fe(ad)(Y.type)})},null,8,["id","position","style"]),Q("span",ZB,Te(Y.label),1),Q("span",jB,Te(Y.type),1),t.inputValues[Y.id]!==void 0?(ce(),me("span",{key:0,class:"flow-node__handle-value",title:"Value: "+t.inputValues[Y.id]},Te(ge(t.inputValues[Y.id])),9,JB)):Ge("",!0)]))),128)),(ce(!0),me(it,null,Ht(t.exposedHandles,Y=>(ce(),me("div",{key:"exp-"+Y.id,class:"flow-node__handle-row flow-node__handle-row--input flow-node__handle-row--exposed"},[tt(fe(xo),{type:"target",id:Y.id,position:fe(Ye).Left,style:rt({background:fe(ad)(Y.type)})},null,8,["id","position","style"]),Q("span",QB,"⊕ "+Te(Y.label),1),Q("span",ek,Te(Y.type),1)]))),128))]),t.params._collapsed?Ge("",!0):(ce(),me(it,{key:0},[t.nodeType==="imageInput"||t.nodeType==="uiImageSlot"?(ce(),me("div",{key:0,class:"flow-node__controls",onPointerdown:U[5]||(U[5]=Oe(()=>{},["stop"])),onMousedown:U[6]||(U[6]=Oe(()=>{},["stop"]))},[Q("input",{ref_key:"fileInput",ref:f,type:"file",accept:"image/*",class:"file-input-hidden",onChange:K},null,544),v.value?(ce(),me("div",tk,[Q("button",{class:"flow-node__inline-btn flow-node__inline-btn--sm",onClick:Oe($,["stop"]),style:{"margin-bottom":"4px",width:"100%"}}," 📷 Replace Image "),t.nodeType==="imageInput"?(ce(),me("img",{key:0,src:m.value,class:"flow-node__image-preview"},null,8,nk)):(ce(),me("div",ik," Image Loaded ✓ "))])):(ce(),me("div",{key:0,class:ut(["flow-node__drop-zone",{"flow-node__drop-zone--active":h.value}]),onClick:Oe($,["stop"]),onDragover:U[3]||(U[3]=Oe(Y=>h.value=!0,["prevent"])),onDragleave:U[4]||(U[4]=Y=>h.value=!1),onDrop:Oe(te,["prevent"])}," 📷 Drop image or click to browse ",34))],32)):Ge("",!0),t.nodeType==="webcamInput"?(ce(),me("div",{key:1,class:"flow-node__controls",onPointerdown:U[9]||(U[9]=Oe(()=>{},["stop"])),onMousedown:U[10]||(U[10]=Oe(()=>{},["stop"]))},[M.value?(ce(),me("div",rk,[Q("button",{class:"flow-node__inline-btn flow-node__inline-btn--sm",onClick:U[8]||(U[8]=Oe(Y=>G.$emit("paramChange","enable",!1),["stop"])),style:{"margin-bottom":"4px",width:"100%",background:"var(--bg-red-dim)","border-color":"var(--accent-danger)"}}," Stop Webcam "),Q("video",{ref_key:"webcamVideo",ref:_,class:"flow-node__image-preview",autoplay:"",playsinline:"",muted:""},null,512)])):(ce(),me("button",{key:0,class:"flow-node__inline-btn flow-node__inline-btn--sm",onClick:U[7]||(U[7]=Oe(Y=>G.$emit("paramChange","enable",!0),["stop"])),style:{width:"100%"}}," 🎥 Start Webcam "))],32)):Ge("",!0),t.nodeType==="imageOutput"?(ce(),me("div",{key:2,class:"flow-node__controls",onPointerdown:U[12]||(U[12]=Oe(()=>{},["stop"])),onMousedown:U[13]||(U[13]=Oe(()=>{},["stop"]))},[Q("button",{class:"flow-node__inline-btn",onClick:U[11]||(U[11]=Oe(Y=>G.$emit("export"),["stop"]))}," ⬇ Export "+Te(t.params.format||"PNG"),1)],32)):Ge("",!0),t.nodeType==="button"||t.nodeType==="bang"?(ce(),me("div",{key:3,class:"flow-node__controls",onPointerdown:U[15]||(U[15]=Oe(()=>{},["stop"])),onMousedown:U[16]||(U[16]=Oe(()=>{},["stop"]))},[Q("button",{class:"flow-node__inline-btn",onClick:U[14]||(U[14]=Oe(Y=>G.$emit("trigger"),["stop"]))},Te(t.params.label||"Bang!"),1)],32)):Ge("",!0),t.nodeType==="slider"?(ce(),me("div",{key:4,class:"flow-node__slider-container",onPointerdown:U[20]||(U[20]=Oe(()=>{},["stop"])),onMousedown:U[21]||(U[21]=Oe(()=>{},["stop"]))},[Q("input",{type:"range",class:"flow-node__inline-slider",min:t.params.min??0,max:t.params.max??1,step:t.params.step??.01,value:t.params.value??.5,onInput:U[17]||(U[17]=Oe(Y=>G.$emit("paramChange","value",Number(Y.target.value)),["stop"])),onPointerdown:U[18]||(U[18]=Oe(()=>{},["stop"])),onMousedown:U[19]||(U[19]=Oe(()=>{},["stop"]))},null,40,ok),Q("div",sk,Te((t.params.value??.5).toFixed(3)),1)],32)):Ge("",!0),t.nodeType==="knob"?(ce(),me("div",{key:5,class:"flow-node__knob-container",onPointerdown:U[23]||(U[23]=Oe(()=>{},["stop"])),onMousedown:U[24]||(U[24]=Oe(()=>{},["stop"]))},[tt(lx,{modelValue:t.params.value??(t.def.params.value?t.def.params.value.default:.5),min:t.params.min??(t.def.params.min?t.def.params.min.default:0),max:t.params.max??(t.def.params.max?t.def.params.max.default:1),step:t.params.step??(t.def.params.step?t.def.params.step.default:.01),size:null,"onUpdate:modelValue":U[22]||(U[22]=Y=>G.$emit("paramChange","value",Y))},null,8,["modelValue","min","max","step"])],32)):Ge("",!0),t.nodeType==="lfo"?(ce(),me("div",{key:6,class:"flow-node__inline-params",onPointerdown:U[34]||(U[34]=Oe(()=>{},["stop"])),onMousedown:U[35]||(U[35]=Oe(()=>{},["stop"]))},[Q("canvas",{ref_key:"lfoCanvasRef",ref:k,class:"flow-node__lfo-graph",width:"176",height:"40"},null,512),Q("div",ak,[U[42]||(U[42]=Q("span",{class:"flow-node__inline-param-label"},"wave",-1)),Q("select",{class:"flow-node__inline-select",value:t.params.waveform??"sine",onChange:U[25]||(U[25]=Oe(Y=>G.$emit("paramChange","waveform",Y.target.value),["stop"])),onPointerdown:U[26]||(U[26]=Oe(()=>{},["stop"])),onMousedown:U[27]||(U[27]=Oe(()=>{},["stop"]))},[(ce(),me(it,null,Ht(["sine","saw","square","triangle"],Y=>Q("option",{key:Y,value:Y},Te(Y),9,uk)),64))],40,lk)]),Q("div",ck,[U[43]||(U[43]=Q("span",{class:"flow-node__inline-param-label"},"freq",-1)),Q("input",{type:"range",class:"flow-node__inline-slider-sm",min:"0.01",max:"20",step:"0.01",value:t.params.frequency??1,onInput:U[28]||(U[28]=Oe(Y=>G.$emit("paramChange","frequency",Number(Y.target.value)),["stop"])),onPointerdown:U[29]||(U[29]=Oe(()=>{},["stop"])),onMousedown:U[30]||(U[30]=Oe(()=>{},["stop"]))},null,40,dk),Q("span",fk,Te((t.params.frequency??1).toFixed(2)),1)]),Q("div",hk,[U[44]||(U[44]=Q("span",{class:"flow-node__inline-param-label"},"amp",-1)),Q("input",{type:"range",class:"flow-node__inline-slider-sm",min:"0",max:"10",step:"0.01",value:t.params.amplitude??1,onInput:U[31]||(U[31]=Oe(Y=>G.$emit("paramChange","amplitude",Number(Y.target.value)),["stop"])),onPointerdown:U[32]||(U[32]=Oe(()=>{},["stop"])),onMousedown:U[33]||(U[33]=Oe(()=>{},["stop"]))},null,40,pk),Q("span",mk,Te((t.params.amplitude??1).toFixed(2)),1)])],32)):Ge("",!0),t.nodeType==="xyPad"?(ce(),me("div",{key:7,class:"flow-node__xypad-wrapper",onPointerdown:U[36]||(U[36]=Oe(()=>{},["stop"])),onMousedown:U[37]||(U[37]=Oe(()=>{},["stop"]))},[Q("div",{class:"flow-node__xypad",ref_key:"xyPadNodeRef",ref:y,onPointerdown:E},[Q("div",{class:"flow-node__xypad-crosshair",style:rt(x.value)},null,4)],544),Q("div",gk,[Q("span",vk,"X: "+Te((t.params.x??.5).toFixed(2)),1),Q("span",_k,"Y: "+Te((t.params.y??.5).toFixed(2)),1)])],32)):Ge("",!0),t.nodeType==="fft"?(ce(),me("div",{key:8,class:"flow-node__fft-container",onPointerdown:U[38]||(U[38]=Oe(()=>{},["stop"])),onMousedown:U[39]||(U[39]=Oe(()=>{},["stop"]))},[Q("div",{class:"flow-node__fft-bar flow-node__fft-bar--bass",style:rt({height:Math.max(2,(t.outputValues.bass||0)*40)+"px"})},null,4),Q("div",{class:"flow-node__fft-bar flow-node__fft-bar--low-mid",style:rt({height:Math.max(2,(t.outputValues.lowMid||0)*40)+"px"})},null,4),Q("div",{class:"flow-node__fft-bar flow-node__fft-bar--mid",style:rt({height:Math.max(2,(t.outputValues.mid||0)*40)+"px"})},null,4),Q("div",{class:"flow-node__fft-bar flow-node__fft-bar--high",style:rt({height:Math.max(2,(t.outputValues.high||0)*40)+"px"})},null,4)],32)):Ge("",!0),t.nodeType==="numberMonitor"?(ce(),me("div",yk,[Q("div",{class:"flow-node__monitor-value",title:"Value: "+(t.monitorValue??0)},Te(t.monitorValue!==null&&t.monitorValue!==void 0?t.monitorValue.toFixed(t.params.decimals??3):"—"),9,xk),t.params.showGraph!==!1?(ce(),me("canvas",{key:0,ref_key:"monitorCanvas",ref:g,class:"flow-node__monitor-graph",width:"176",height:"40"},null,512)):Ge("",!0)])):Ge("",!0),t.nodeType==="preview"?(ce(),me("div",bk,[Q("canvas",{ref_key:"previewCanvas",ref:b,class:"flow-node__preview-canvas",width:"176",height:"100"},null,512),U[45]||(U[45]=Q("div",{class:"flow-node__preview-label"},"Preview Node",-1))])):Ge("",!0)],64)),Q("div",Sk,[(ce(!0),me(it,null,Ht(a.value,Y=>(ce(),me("div",{key:"out-"+Y.id,class:"flow-node__handle-row flow-node__handle-row--output"},[Q("span",Mk,Te(Y.type),1),Q("span",wk,Te(Y.label),1),t.outputValues[Y.id]!==void 0?(ce(),me("span",{key:0,class:"flow-node__handle-value",title:"Value: "+t.outputValues[Y.id]},Te(ge(t.outputValues[Y.id])),9,Ek)):Ge("",!0),tt(fe(xo),{type:"source",id:Y.id,position:fe(Ye).Right,style:rt({background:fe(ad)(Y.type)})},null,8,["id","position","style"])]))),128))])])],34))}},br=cr(Tk,[["__scopeId","data-v-98de6690"]]),Ak={class:"editor-controls"},Ck={__name:"EditorCanvas",emits:["imageLoaded","exportImage"],setup(t,{expose:e,emit:n}){const i=Ao(),{viewport:r,dimensions:o,project:s,zoomIn:a,zoomOut:l,setViewport:u,fitView:c}=Dt();function d(){const{x:y,y:x}=r.value;u({x:y,y:x,zoom:1},{duration:600})}function f(){c({padding:.1,duration:600})}function h(y){["INPUT","TEXTAREA"].includes(y.target.tagName)||(y.key==="f"||y.key==="F")&&(i.selectedNodeId?c({nodes:[i.selectedNodeId],padding:.2,duration:600}):c({padding:.1,duration:600}))}mn(()=>{window.addEventListener("keydown",h)}),Hu(()=>{window.removeEventListener("keydown",h)});function m(y){const{x,y:T,zoom:E}=r.value,{width:I,height:q}=o.value,w=I||800,k=q||600,A=(w/2-x)/E,N=(k/2-T)/E;i.addNode(y,{x:A+(Math.random()-.5)*60,y:N+(Math.random()-.5)*60})}e({addNodeAtCenter:m});const v=["imageInput","uiImageSlot","webcamInput","imageOutput","button","slider"],g=Re(()=>Object.keys(FC()).filter(y=>!v.includes(y)));function p(y){for(const x of y)if(x.type==="position"&&x.position){const T=i.nodes.find(E=>E.id===x.id);T&&(T.position=x.position)}else x.type==="remove"&&i.removeNode(x.id)}function b(y){for(const x of y)x.type==="remove"&&i.removeEdge(x.id)}function M(y){i.addEdge(y)}function _({node:y}){i.selectNode(y.id)}function P(){i.selectNode(null)}function D({edge:y}){}function B(y){const x=y.dataTransfer.getData("application/node-type");if(!x)return;const T=y.currentTarget.getBoundingClientRect(),{x:E,y:I,zoom:q}=r.value,w=(y.clientX-T.left-E)/q,k=(y.clientY-T.top-I)/q;i.addNode(x,{x:w,y:k})}return(y,x)=>(ce(),me("div",{class:"editor-canvas",onDrop:Oe(B,["prevent"]),onDragover:x[2]||(x[2]=Oe(()=>{},["prevent"]))},[tt(fe(qN),{nodes:fe(i).nodes,edges:fe(i).edges,"default-viewport":{zoom:1,x:0,y:0},"min-zoom":.2,"max-zoom":3,"fit-view-on-init":"",onNodesChange:p,onEdgesChange:b,onConnect:M,onNodeClick:_,onPaneClick:P,onEdgeClick:D},Cb({"node-imageInput":dn(T=>[tt(br,{"node-id":T.id,"node-type":T.type,def:T.data.def,params:fe(i).nodeParams[T.id]||{},selected:fe(i).selectedNodeId===T.id,onSelect:E=>fe(i).selectNode(T.id),onImageLoaded:E=>y.$emit("imageLoaded",T.id,E)},null,8,["node-id","node-type","def","params","selected","onSelect","onImageLoaded"])]),"node-uiImageSlot":dn(T=>[tt(br,{"node-id":T.id,"node-type":T.type,def:T.data.def,params:fe(i).nodeParams[T.id]||{},selected:fe(i).selectedNodeId===T.id,onSelect:E=>fe(i).selectNode(T.id),onImageLoaded:E=>y.$emit("imageLoaded",T.id,E)},null,8,["node-id","node-type","def","params","selected","onSelect","onImageLoaded"])]),"node-webcamInput":dn(T=>[tt(br,{"node-id":T.id,"node-type":T.type,def:T.data.def,params:fe(i).nodeParams[T.id]||{},selected:fe(i).selectedNodeId===T.id,onSelect:E=>fe(i).selectNode(T.id),onImageLoaded:E=>y.$emit("imageLoaded",T.id,E),onParamChange:(E,I)=>fe(i).setParam(T.id,E,I)},null,8,["node-id","node-type","def","params","selected","onSelect","onImageLoaded","onParamChange"])]),"node-imageOutput":dn(T=>[tt(br,{"node-type":T.type,def:T.data.def,params:fe(i).nodeParams[T.id]||{},selected:fe(i).selectedNodeId===T.id,onSelect:E=>fe(i).selectNode(T.id),onExport:E=>y.$emit("exportImage",T.id)},null,8,["node-type","def","params","selected","onSelect","onExport"])]),"node-button":dn(T=>[tt(br,{"node-type":T.type,def:T.data.def,params:fe(i).nodeParams[T.id]||{},selected:fe(i).selectedNodeId===T.id,onSelect:E=>fe(i).selectNode(T.id),onTrigger:E=>fe(i).triggerButton(T.id)},null,8,["node-type","def","params","selected","onSelect","onTrigger"])]),"node-bang":dn(T=>[tt(br,{"node-id":T.id,"node-type":T.type,def:T.data.def,params:fe(i).nodeParams[T.id]||{},selected:fe(i).selectedNodeId===T.id,onSelect:E=>fe(i).selectNode(T.id),onTrigger:E=>fe(i).triggerButton(T.id),onParamChange:(E,I)=>fe(i).setParam(T.id,E,I)},null,8,["node-id","node-type","def","params","selected","onSelect","onTrigger","onParamChange"])]),"node-slider":dn(T=>[tt(br,{"node-type":T.type,def:T.data.def,params:fe(i).nodeParams[T.id]||{},selected:fe(i).selectedNodeId===T.id,onSelect:E=>fe(i).selectNode(T.id),onParamChange:(E,I)=>fe(i).setParam(T.id,E,I)},null,8,["node-type","def","params","selected","onSelect","onParamChange"])]),default:dn(()=>[Q("div",Ak,[Q("button",{onClick:x[0]||(x[0]=T=>fe(a)({duration:300})),title:"Zoom In (+)"},"+"),Q("button",{onClick:x[1]||(x[1]=T=>fe(l)({duration:300})),title:"Zoom Out (-)"},"−"),Q("button",{onClick:d,title:"Zoom to 100% (1:1)"},"1:1"),Q("button",{onClick:f,title:"Fit View to All"},"[ ]")]),tt(fe(NU),{pannable:"",zoomable:"",position:"bottom-right"})]),_:2},[Ht(g.value,T=>({name:`node-${T}`,fn:dn(E=>[tt(br,{"node-id":E.id,"node-type":E.type,def:E.data.def,params:fe(i).nodeParams[E.id]||{},selected:fe(i).selectedNodeId===E.id,"exposed-handles":fe(i).getExposedHandles(E.id),"monitor-value":E.type==="numberMonitor"?fe(i).getDataOutput(E.id,"out"):null,"perf-ms":fe(i).perfTimings[E.id]??null,onSelect:I=>fe(i).selectNode(E.id),onParamChange:(I,q)=>fe(i).setParam(E.id,I,q)},null,8,["node-id","node-type","def","params","selected","exposed-handles","monitor-value","perf-ms","onSelect","onParamChange"])])}))]),1032,["nodes","edges"])],32))}},Rk=cr(Ck,[["__scopeId","data-v-84e59669"]]),Ik={class:"preview-panel__toolbar"},Pk={class:"preview-panel__badge"},Nk={key:0,class:"preview-panel__badge",style:{color:"var(--accent-primary)"}},Dk={key:1,class:"preview-panel__badge",style:{color:"var(--accent-danger)"}},Lk={class:"preview-panel__zoom-level"},Fk={key:2,class:"preview-panel__histogram"},Uk={class:"preview-panel__info-row"},Ok={key:0},Bk={__name:"PreviewPanel",props:{hidden:{type:Boolean,default:!1},isRendering:{type:Boolean,default:!0},pipeline:{type:Object,default:null},fps:{type:Number,default:0},previewMode:{type:String,default:"anchored"}},setup(t,{expose:e}){const n=Ie(400),i=Ie(40),r=Ie(!1),o=Ie({x:0,y:0});function s(N){N.button===0&&(r.value=!0,o.value={x:N.clientX-n.value,y:N.clientY-i.value},window.addEventListener("pointermove",a),window.addEventListener("pointerup",l))}function a(N){r.value&&(n.value=N.clientX-o.value.x,i.value=N.clientY-o.value.y)}function l(){r.value=!1,window.removeEventListener("pointermove",a),window.removeEventListener("pointerup",l)}const u=Ie(300),c=Ie(!1);function d(N){if(N.button!==0)return;c.value=!0;const O=N.clientY,$=u.value;function K(ne){if(!c.value)return;const ge=O-ne.clientY;u.value=Math.max(100,Math.min(window.innerHeight*.8,$+ge))}function te(){c.value=!1,window.removeEventListener("pointermove",K),window.removeEventListener("pointerup",te)}window.addEventListener("pointermove",K),window.addEventListener("pointerup",te)}const f=Ie(null),h=Ie(null),m=Ie(null),v=Ie(512),g=Ie(512),p=Ie(1),b=Ie(0),M=Ie(0),_=Ie(!1),P=Ie({x:0,y:0}),D=Ie(!1);let B=null;function y(){return f.value}e({canvasRef:f,width:v,height:g,getCanvas:y}),lt(D,N=>{N?(k(),B=setInterval(k,500)):(B&&clearInterval(B),B=null)}),lr(()=>{B&&clearInterval(B)});function x(){p.value=1,b.value=0,M.value=0}function T(){if(!m.value)return;const N=m.value.clientWidth,O=m.value.clientHeight,$=N/v.value,K=O/g.value;p.value=Math.min($,K,1)*.95,b.value=(N-v.value*p.value)/2,M.value=(O-g.value*p.value)/2}function E(N){const O=N.deltaY>0?.9:1.1,$=Math.max(.1,Math.min(10,p.value*O)),K=m.value.getBoundingClientRect(),te=N.clientX-K.left,ne=N.clientY-K.top;b.value=te-(te-b.value)*($/p.value),M.value=ne-(ne-M.value)*($/p.value),p.value=$}function I(N){(N.button===0||N.button===1)&&(_.value=!0,P.value={x:N.clientX,y:N.clientY},m.value?.setPointerCapture(N.pointerId))}function q(N){if(!_.value)return;const O=N.clientX-P.value.x,$=N.clientY-P.value.y;b.value+=O,M.value+=$,P.value={x:N.clientX,y:N.clientY}}function w(N){_.value=!1,m.value?.releasePointerCapture(N.pointerId)}function k(){if(!D.value||!h.value)return;const N=f.value;if(!N)return;const O=N.getContext("webgl2",{preserveDrawingBuffer:!0})||N.getContext("webgl",{preserveDrawingBuffer:!0});if(!O)return;const $=N.width,K=N.height;if($===0||K===0)return;const te=new Uint8Array($*K*4);O.readPixels(0,0,$,K,O.RGBA,O.UNSIGNED_BYTE,te);const ne=new Uint32Array(256),ge=new Uint32Array(256),Ee=new Uint32Array(256);for(let he=0;he<te.length;he+=4)ne[te[he]]++,ge[te[he+1]]++,Ee[te[he+2]]++;const Se=h.value.getContext("2d"),G=256,U=80;Se.clearRect(0,0,G,U);const Y=Math.max(...ne.slice(1,255),...ge.slice(1,255),...Ee.slice(1,255),1);A(Se,ne,Y,G,U,"rgba(255,80,80,0.5)"),A(Se,ge,Y,G,U,"rgba(80,255,80,0.5)"),A(Se,Ee,Y,G,U,"rgba(80,80,255,0.5)")}function A(N,O,$,K,te,ne){N.fillStyle=ne,N.beginPath(),N.moveTo(0,te);for(let ge=0;ge<256;ge++){const Ee=O[ge]/$*(te-2);N.lineTo(ge,te-Ee)}N.lineTo(255,te),N.closePath(),N.fill()}return(N,O)=>(ce(),me("div",{class:ut(["preview-panel",`preview-panel--${t.previewMode}`,{hidden:t.hidden}]),style:rt(t.previewMode==="floating"?{top:`${i.value}px`,left:`${n.value}px`}:t.previewMode==="anchored"?{height:`${u.value}px`}:{})},[t.previewMode==="anchored"?(ce(),me("div",{key:0,class:"preview-panel__resize-handle",onPointerdown:d},null,32)):Ge("",!0),t.previewMode==="floating"?(ce(),me("div",{key:1,class:"preview-panel__header",onPointerdown:s},[...O[1]||(O[1]=[Q("span",{class:"preview-panel__header-title"},"Live Preview",-1)])],32)):Ge("",!0),Q("div",Ik,[Q("span",Pk,Te(v.value)+"×"+Te(g.value),1),t.fps&&t.isRendering?(ce(),me("span",Nk,Te(t.fps)+" FPS",1)):Ge("",!0),t.isRendering?Ge("",!0):(ce(),me("span",Dk,"STOPPED")),O[2]||(O[2]=Q("div",{style:{flex:"1"}},null,-1)),Q("span",Lk,Te(Math.round(p.value*100))+"%",1),Q("button",{class:"preview-panel__tool-btn",onClick:T,title:"Fit"},"⊡"),Q("button",{class:"preview-panel__tool-btn",onClick:x,title:"Reset Zoom"},"1:1"),Q("button",{class:ut(["preview-panel__tool-btn",{active:D.value}]),onClick:O[0]||(O[0]=$=>D.value=!D.value),title:"Toggle Histogram"},"📊",2)]),Q("div",{class:"preview-panel__viewport",ref_key:"viewportRef",ref:m,onWheel:Oe(E,["prevent"]),onPointerdown:I,onPointermove:q,onPointerup:w},[Q("div",{class:"preview-panel__canvas-wrap",style:rt({transform:`translate(${b.value}px, ${M.value}px) scale(${p.value})`,transformOrigin:"0 0"})},[Q("canvas",{ref_key:"canvasRef",ref:f,class:"preview-panel__canvas"},null,512)],4)],544),D.value?(ce(),me("div",Fk,[Q("canvas",{ref_key:"histCanvas",ref:h,class:"preview-panel__hist-canvas",width:"256",height:"80"},null,512),Q("div",Uk,[Q("span",null,"Resolution: "+Te(v.value)+"×"+Te(g.value),1),t.fps?(ce(),me("span",Ok,Te(t.fps)+" FPS",1)):Ge("",!0)])])):Ge("",!0)],6))}},kk=["title"],zk={class:"param-panel__collapse-label"},Vk={class:"param-panel__collapse-btn"},$k={class:"param-panel__header"},Hk={class:"param-panel__title"},Gk={class:"param-panel__type"},Wk={key:0,class:"param-panel__nickname-row"},Xk=["value"],Yk={key:1,class:"param-panel__section"},qk={class:"param-field__header"},Kk={class:"param-field__label"},Zk={style:{display:"flex",gap:"4px"}},jk=["onClick"],Jk=["onClick","title"],Qk=["min","max","step","value","onInput"],e4={class:"param-field__range-info"},t4=["step","value","onChange"],n4={class:"param-field__random-bounds-card"},i4={class:"param-field__random-bounds-inputs"},r4={style:{display:"flex","flex-direction":"column",gap:"2px"}},o4=["step","value","onChange"],s4={style:{display:"flex","flex-direction":"column",gap:"2px"}},a4=["step","value","onChange"],l4=["value","onChange"],u4=["value"],c4=["onClick"],d4={key:1,class:"param-field__checkbox"},f4=["checked","onChange"],h4=["value","onInput"],p4={class:"param-panel__section"},m4={class:"param-field"},g4={class:"mono",style:{"font-size":"10px",color:"var(--text-muted)"}},v4={class:"param-field"},_4={style:{"font-size":"11px"}},y4={class:"param-field"},x4={style:{"font-size":"11px"}},b4={class:"param-field"},S4={style:{"font-size":"11px"}},M4={key:1,class:"param-panel__empty"},w4={__name:"ParameterPanel",setup(t){const e=Ao(),n=Ie({}),i=Ie(window.innerWidth<768),r=Re(()=>e.selectedNodeDef||{label:"",type:"",params:{},inputs:[],outputs:[],category:""}),o=Re(()=>e.selectedNodeParams),s=Re(()=>fu[r.value.category]?.color||"#888"),a=Re(()=>e.selectedNodeId&&e.perfGridCells.find(c=>c.boundNodeId===e.selectedNodeId||c.boundTargetNodeId===e.selectedNodeId)||null);function l(c,d){e.selectedNodeId&&e.setParam(e.selectedNodeId,c,d)}function u(c,d){return d==="int"?Math.round(c).toString():typeof c=="number"?c.toFixed(3):String(c)}return(c,d)=>(ce(),me("div",{class:ut(["param-panel",{"param-panel--collapsed":i.value}])},[Q("div",{class:"param-panel__collapse-bar",onClick:d[0]||(d[0]=f=>i.value=!i.value),title:i.value?"Expand inspector":"Collapse inspector"},[Dr(Q("span",zk,"Inspector",512),[[Lr,!i.value]]),Q("span",Vk,Te(i.value?"‹":"›"),1)],8,kk),i.value?Ge("",!0):(ce(),me(it,{key:0},[fe(e).selectedNode?(ce(),me(it,{key:0},[Q("div",$k,[Q("div",{class:"flow-node__category-dot",style:rt({background:s.value})},null,4),Q("span",Hk,Te(r.value.label),1),Q("span",Gk,Te(r.value.type),1)]),a.value?(ce(),me("div",Wk,[d[2]||(d[2]=Q("label",{class:"param-panel__nickname-label"},"Nickname",-1)),Q("input",{class:"param-panel__nickname-input",type:"text",value:a.value.nickname||"",placeholder:"Display name in Performance Mode",onInput:d[1]||(d[1]=f=>fe(e).setPerfCellNickname(a.value.id,f.target.value))},null,40,Xk)])):Ge("",!0),Object.keys(r.value.params).length>0?(ce(),me("div",Yk,[d[7]||(d[7]=Q("div",{class:"param-panel__section-title"},"Parameters",-1)),(ce(!0),me(it,null,Ht(r.value.params,(f,h)=>(ce(),me("div",{key:h,class:"param-field"},[Q("div",qk,[Q("label",Kk,Te(f.label),1),Q("div",Zk,[f.type==="float"||f.type==="int"?(ce(),me("button",{key:0,class:ut(["param-field__expose-btn",{"param-field__expose-btn--active":n.value[h]}]),onClick:m=>n.value[h]=!n.value[h],title:"Toggle Randomizer Bounds"}," 🎲 ",10,jk)):Ge("",!0),f.type==="float"||f.type==="int"?(ce(),me("button",{key:1,class:ut(["param-field__expose-btn",{"param-field__expose-btn--active":fe(e).isParamExposed(fe(e).selectedNodeId,h)}]),onClick:m=>fe(e).toggleExposeParam(fe(e).selectedNodeId,h),title:fe(e).isParamExposed(fe(e).selectedNodeId,h)?"Unexpose input":"Expose as input handle"},Te(fe(e).isParamExposed(fe(e).selectedNodeId,h)?"🔗":"⊕"),11,Jk)):Ge("",!0)])]),f.type==="float"||f.type==="int"?(ce(),me(it,{key:0},[Q("input",{type:"range",class:"param-field__input",min:h==="value"&&o.value.min!==void 0?o.value.min:f.min,max:h==="value"&&o.value.max!==void 0?o.value.max:f.max,step:h==="value"&&o.value.step!==void 0?o.value.step:f.step,value:o.value[h]??f.default,onInput:m=>l(h,f.type==="int"?parseInt(m.target.value):parseFloat(m.target.value))},null,40,Qk),Q("div",e4,[Q("span",null,Te(h==="value"&&o.value.min!==void 0?o.value.min:f.min),1),Q("input",{type:"number",class:"param-field__number-input mono",step:h==="value"&&o.value.step!==void 0?o.value.step:f.step,value:u(o.value[h]??f.default,f.type),onChange:m=>l(h,f.type==="int"?parseInt(m.target.value):parseFloat(m.target.value))},null,40,t4),Q("span",null,Te(h==="value"&&o.value.max!==void 0?o.value.max:f.max),1)]),Dr(Q("div",n4,[d[6]||(d[6]=Q("div",{class:"param-field__random-bounds-header"},"🎲 Randomizer Range",-1)),Q("div",i4,[Q("div",r4,[d[3]||(d[3]=Q("span",{style:{"font-size":"9px",opacity:"0.7"}},"Min",-1)),Q("input",{type:"number",class:"param-field__number-input mono",step:f.step,value:o.value[`_randMin_${h}`]??(h==="value"&&o.value.min!==void 0?o.value.min:f.min)??0,onChange:m=>l(`_randMin_${h}`,f.type==="int"?parseInt(m.target.value):parseFloat(m.target.value)),title:"Min random value"},null,40,o4)]),d[5]||(d[5]=Q("span",{style:{opacity:"0.5","font-size":"10px","margin-top":"10px"}},"to",-1)),Q("div",s4,[d[4]||(d[4]=Q("span",{style:{"font-size":"9px",opacity:"0.7"}},"Max",-1)),Q("input",{type:"number",class:"param-field__number-input mono",step:f.step,value:o.value[`_randMax_${h}`]??(h==="value"&&o.value.max!==void 0?o.value.max:f.max)??1,onChange:m=>l(`_randMax_${h}`,f.type==="int"?parseInt(m.target.value):parseFloat(m.target.value)),title:"Max random value"},null,40,a4)])])],512),[[Lr,n.value[h]]])],64)):f.type==="select"?(ce(),me("select",{key:1,class:"param-field__input",value:o.value[h]??f.default,onChange:m=>l(h,m.target.value)},[(ce(!0),me(it,null,Ht(f.options,m=>(ce(),me("option",{key:m,value:m},Te(m),9,u4))),128))],40,l4)):f.type==="bool"?(ce(),me(it,{key:2},[f.ui==="button"?(ce(),me("button",{key:0,class:"flow-node__inline-btn",style:rt([{width:"100%","margin-top":"4px",padding:"6px"},{background:o.value[h]??f.default?"var(--bg-red-dim)":"var(--bg-tertiary)",borderColor:o.value[h]??f.default?"var(--accent-danger)":"var(--border-color)"}]),onClick:m=>l(h,!(o.value[h]??f.default))},Te(o.value[h]??f.default?"Stop":"Start")+" "+Te(f.label.replace("Enable","")),13,c4)):(ce(),me("label",d4,[Q("input",{type:"checkbox",checked:o.value[h]??f.default,onChange:m=>l(h,m.target.checked)},null,40,f4),Q("span",null,Te(f.label),1)]))],64)):f.type==="string"?(ce(),me("input",{key:3,type:"text",class:"param-field__input",value:o.value[h]??f.default,onInput:m=>l(h,m.target.value)},null,40,h4)):Ge("",!0)]))),128))])):Ge("",!0),Q("div",p4,[d[12]||(d[12]=Q("div",{class:"param-panel__section-title"},"Info",-1)),Q("div",m4,[d[8]||(d[8]=Q("span",{class:"param-field__label"},"ID",-1)),Q("span",g4,Te(fe(e).selectedNodeId),1)]),Q("div",v4,[d[9]||(d[9]=Q("span",{class:"param-field__label"},"Category",-1)),Q("span",_4,Te(r.value.category),1)]),Q("div",y4,[d[10]||(d[10]=Q("span",{class:"param-field__label"},"Inputs",-1)),Q("span",x4,Te(r.value.inputs.length),1)]),Q("div",b4,[d[11]||(d[11]=Q("span",{class:"param-field__label"},"Outputs",-1)),Q("span",S4,Te(r.value.outputs.length),1)])])],64)):(ce(),me("div",M4," Select a node to edit its parameters "))],64))],2))}},E4=cr(w4,[["__scopeId","data-v-ff86a86b"]]),T4=["draggable"],A4={class:"control-cell__unbound-icon"},C4={key:2,class:"control-cell__widget control-cell__anim-widget"},R4={class:"control-cell__lfo-readout"},I4={class:"control-cell__lfo-waveforms"},P4=["onClick"],N4={class:"control-cell__label"},D4={key:0,class:"control-cell__target-label"},L4={key:1,class:"control-cell__node-label"},F4={key:3,class:"control-cell__widget control-cell__anim-widget"},U4={class:"control-cell__value mono"},O4={class:"control-cell__label"},B4={key:0,class:"control-cell__target-label"},k4={key:1,class:"control-cell__node-label"},z4={key:4,class:"control-cell__widget control-cell__anim-widget"},V4={class:"control-cell__value mono"},$4={class:"control-cell__label"},H4={key:0,class:"control-cell__target-label"},G4={key:1,class:"control-cell__node-label"},W4={class:"control-cell__value mono"},X4={class:"control-cell__label"},Y4={key:0,class:"control-cell__target-label"},q4={key:1,class:"control-cell__node-label"},K4={key:2,class:"control-cell__pulse-ring"},Z4={key:6,class:"control-cell__widget control-cell__anim-widget"},j4={class:"control-cell__fft-bars"},J4={class:"control-cell__node-label"},Q4={class:"control-cell__label"},e5={class:"control-cell__node-label"},t5=["min","max","step","value"],n5={class:"control-cell__value mono"},i5={class:"control-cell__label"},r5={class:"control-cell__node-label"},o5={class:"control-cell__node-label"},s5={class:"control-cell__label"},a5={class:"control-cell__node-label"},l5={class:"control-cell__lfo-readout"},u5={key:0,class:"control-cell__xy-assignments"},c5={key:0,class:"control-cell__target-label"},d5={key:1,class:"control-cell__target-label"},f5={class:"control-cell__label"},h5={key:1,class:"control-cell__node-label"},p5={key:12,class:"control-cell__widget"},m5={class:"control-cell__accel-readout"},g5={class:"control-cell__accel-axis"},v5={class:"control-cell__accel-bar-track"},_5={class:"control-cell__accel-axis"},y5={class:"control-cell__accel-bar-track"},x5={class:"control-cell__node-label"},b5={class:"value-edit-popup"},S5={class:"value-edit-popup__title"},M5=["value","step"],w5={class:"value-edit-popup__actions"},wd=60,E5={__name:"ControlCell",props:{cell:{type:Object,required:!0},editMode:{type:Boolean,default:!1},index:{type:Number,default:0}},emits:["delete","assign","reorder"],setup(t,{emit:e}){const n=t,i=e,r=Ao(),o=Ie(!1),s=Ie(null),a=Ie(null),l=["lfo","timer","damper","fft","random"],u=Re(()=>l.includes(n.cell.controlType)),c=Re(()=>({knob:"🎛️",slider:"═══",bang:"💥",toggle:"⏻",lfo:"〰️",timer:"⏱️",damper:"🫧",fft:"🎵",random:"🎲",xypad:"✛",accelerometer:"📱"})[n.cell.controlType]||"?"),d=Re(()=>{if(!n.cell.boundNodeId)return"";const ue=r.nodes.find(Ae=>Ae.id===n.cell.boundNodeId);return ue?Xt(ue.type)?.label||ue.type:""}),f=Re(()=>n.cell.nickname?n.cell.nickname:n.cell.boundParamKey&&!n.cell.boundTargetNodeId?n.cell.boundParamKey.toUpperCase():n.cell.controlType.toUpperCase()),h=Re(()=>{if(!n.cell.boundTargetNodeId||!n.cell.boundParamKey)return"";const ue=r.nodes.find(ie=>ie.id===n.cell.boundTargetNodeId);if(!ue)return"";const re=Xt(ue.type),Le=re?.params?.[n.cell.boundParamKey]?.label||n.cell.boundParamKey;return`→ ${re?.label||ue.type}.${Le}`}),m=Re(()=>{if(!n.cell.boundTargetNodeId||!n.cell.boundParamKey)return"";const ue=r.nodes.find(Le=>Le.id===n.cell.boundTargetNodeId);return ue?`X → ${Xt(ue.type)?.params?.[n.cell.boundParamKey]?.label||n.cell.boundParamKey}`:""}),v=Re(()=>{if(!n.cell.boundTargetNodeIdY||!n.cell.boundParamKeyY)return"";const ue=r.nodes.find(Le=>Le.id===n.cell.boundTargetNodeIdY);return ue?`Y → ${Xt(ue.type)?.params?.[n.cell.boundParamKeyY]?.label||n.cell.boundParamKeyY}`:""}),g=Re(()=>{if(!n.cell.boundNodeId||!n.cell.boundParamKey)return null;const ue=r.nodes.find(Ae=>Ae.id===n.cell.boundNodeId);return ue&&Xt(ue.type)?.params?.[n.cell.boundParamKey]||null}),p=Re(()=>!n.cell.boundNodeId||!n.cell.boundParamKey?0:r.nodeParams[n.cell.boundNodeId]?.[n.cell.boundParamKey]??g.value?.default??0),b=Re(()=>g.value?.min??0),M=Re(()=>g.value?.max??1),_=Re(()=>g.value?.step??.01),P=Re(()=>n.cell.boundNodeId?r.dataOutputs[n.cell.boundNodeId]?.out??0:0),D=Re(()=>{if(!n.cell.boundNodeId)return{bass:0,lowMid:0,mid:0,high:0};const ue=r.dataOutputs[n.cell.boundNodeId];return{bass:ue?.bass??0,lowMid:ue?.lowMid??0,mid:ue?.mid??0,high:ue?.high??0}}),B=Ie([]);let y=null;mn(()=>{u.value&&n.cell.controlType!=="fft"&&(y=setInterval(x,50))}),lr(()=>{clearInterval(y)});function x(){if(!n.cell.boundNodeId)return;const ue=P.value,re=B.value;re.push(ue),re.length>wd&&re.shift(),B.value=re,T()}function T(){const ue=s.value;if(!ue)return;const re=ue.getContext("2d"),Ae=ue.width,Le=ue.height,Qe=B.value;if(re.clearRect(0,0,Ae,Le),Qe.length<2)return;let ie=1/0,Fe=-1/0;for(const Be of Qe)Be<ie&&(ie=Be),Be>Fe&&(Fe=Be);Fe===ie&&(ie-=.5,Fe+=.5);const Ue=Fe-ie;re.strokeStyle="#00d4ff",re.lineWidth=1.5,re.lineJoin="round",re.beginPath();for(let Be=0;Be<Qe.length;Be++){const De=Be/(wd-1)*Ae,Me=Le-(Qe[Be]-ie)/Ue*Le;Be===0?re.moveTo(De,Me):re.lineTo(De,Me)}re.stroke(),re.lineTo((Qe.length-1)/(wd-1)*Ae,Le),re.lineTo(0,Le),re.closePath(),re.fillStyle="rgba(0, 212, 255, 0.1)",re.fill()}const E=Re(()=>n.cell.boundNodeId?r.nodeParams[n.cell.boundNodeId]?.frequency??1:1),I=Re(()=>n.cell.boundNodeId?r.nodeParams[n.cell.boundNodeId]?.amplitude??1:1),q=Re(()=>n.cell.boundNodeId?r.nodeParams[n.cell.boundNodeId]?.waveform??"sine":"sine");function w(ue){return{sine:"∿",saw:"⩘",square:"⊓",triangle:"△"}[ue]||ue}function k(ue){n.cell.boundNodeId&&r.setParam(n.cell.boundNodeId,"waveform",ue)}let A=0,N=0,O=0,$=0,K=!1;function te(ue){if(n.editMode)return;K=!0;const re=ue.touches?ue.touches[0]:ue;A=re.clientX,N=re.clientY,O=E.value,$=I.value,window.addEventListener("pointermove",ne),window.addEventListener("pointerup",Ee),window.addEventListener("touchmove",ge,{passive:!1}),window.addEventListener("touchend",Ee)}function ne(ue){if(!K||!n.cell.boundNodeId)return;const re=ue.clientX-A,Ae=-(ue.clientY-N),Le=Math.max(.01,Math.min(5,O+re*.05)),Qe=Math.max(0,Math.min(5,$+Ae*.02));r.setParam(n.cell.boundNodeId,"frequency",Le),r.setParam(n.cell.boundNodeId,"amplitude",Qe)}function ge(ue){ue.preventDefault();const re=ue.touches[0];ne({clientX:re.clientX,clientY:re.clientY})}function Ee(){K=!1,window.removeEventListener("pointermove",ne),window.removeEventListener("pointerup",Ee),window.removeEventListener("touchmove",ge),window.removeEventListener("touchend",Ee)}const Se=Re(()=>n.cell.boundNodeId?r.nodeParams[n.cell.boundNodeId]?.triggerInterval??.5:.5),G=Re(()=>n.cell.boundNodeId?r.nodeParams[n.cell.boundNodeId]?.damping??0:0),U=Ie(!1);let Y=null;function he(ue){n.cell.boundNodeId&&(U.value=!1,we.value=ue,H.value=ue==="triggerInterval"?"Self-Trigger Interval (s)":"Damping",X.value=r.nodeParams[n.cell.boundNodeId]?.[ue]??(ue==="triggerInterval"?.5:0),L.value=ue==="triggerInterval"?.01:.001,xe.value=!0,rn(()=>F.value?.focus?.()))}const xe=Ie(!1),we=Ie(""),H=Ie(""),X=Ie(0),L=Ie(.01),F=Ie(null);n.cell.controlType==="random"&&lt(P,ue=>{!xe.value&&Y!==null&&Math.abs(ue-Y)>.005&&(U.value=!0,setTimeout(()=>{U.value=!1},300)),Y=ue});function z(ue){n.cell.boundNodeId&&(we.value=ue,H.value=ue==="frequency"?"Frequency (Hz)":"Amplitude",X.value=r.nodeParams[n.cell.boundNodeId]?.[ue]??1,L.value=.01,xe.value=!0,rn(()=>F.value?.focus?.()))}function J(ue){n.cell.boundNodeId&&we.value&&!isNaN(ue)&&r.setParam(n.cell.boundNodeId,we.value,ue),xe.value=!1}function C(ue){n.cell.boundNodeId&&(we.value=ue,H.value=ue==="x"?"X Value":"Y Value",X.value=r.nodeParams[n.cell.boundNodeId]?.[ue]??.5,L.value=.001,xe.value=!0,rn(()=>F.value?.focus?.()))}const ae=Re(()=>n.cell.boundNodeId?r.nodeParams[n.cell.boundNodeId]?.x??.5:.5),W=Re(()=>n.cell.boundNodeId?r.nodeParams[n.cell.boundNodeId]?.y??.5:.5),j=Re(()=>({left:ae.value*100+"%",top:(1-W.value)*100+"%"})),ee=Re(()=>({left:ae.value*100+"%",top:(1-W.value)*100+"%"}));let R=!1;function S(ue){R=!0,de(ue),window.addEventListener("pointermove",Z),window.addEventListener("pointerup",oe)}function Z(ue){R&&de(ue)}function oe(){R=!1,window.removeEventListener("pointermove",Z),window.removeEventListener("pointerup",oe)}function de(ue){const re=a.value;if(!re||!n.cell.boundNodeId)return;const Ae=re.getBoundingClientRect(),Le=Math.max(0,Math.min(1,(ue.clientX-Ae.left)/Ae.width)),Qe=Math.max(0,Math.min(1,1-(ue.clientY-Ae.top)/Ae.height));r.setParam(n.cell.boundNodeId,"x",Le),r.setParam(n.cell.boundNodeId,"y",Qe)}function se(ue){if(!n.cell.boundNodeId)return 50;const Ae=r.dataOutputs[n.cell.boundNodeId]?.[ue]??0;return Math.max(0,Math.min(100,(Ae+1)*50))}function Ne(ue){n.cell.boundNodeId&&n.cell.boundParamKey&&r.setParam(n.cell.boundNodeId,n.cell.boundParamKey,ue)}function Ce(){n.cell.boundNodeId&&r.triggerButton(n.cell.boundNodeId)}function $e(ue){o.value=!0,ue.dataTransfer.setData("text/plain",String(n.index)),ue.dataTransfer.effectAllowed="move"}function We(){o.value=!1}function Pe(ue){const re=parseInt(ue.dataTransfer.getData("text/plain"),10);!isNaN(re)&&re!==n.index&&i("reorder",re,n.index)}return(ue,re)=>(ce(),me("div",{class:ut(["control-cell",{"control-cell--edit":t.editMode,"control-cell--unbound":!t.cell.boundNodeId&&!u.value,"control-cell--dragging":o.value}]),draggable:t.editMode,onDragstart:$e,onDragend:We,onDragover:re[26]||(re[26]=Oe(()=>{},["prevent"])),onDrop:Pe},[t.editMode?(ce(),me("button",{key:0,class:"control-cell__delete",onClick:re[0]||(re[0]=Oe(Ae=>ue.$emit("delete"),["stop"]))},"✕")):Ge("",!0),!t.cell.boundNodeId&&!u.value?(ce(),me("div",{key:1,class:"control-cell__unbound",onClick:re[1]||(re[1]=Oe(Ae=>ue.$emit("assign"),["stop"]))},[Q("span",A4,Te(c.value),1),re[27]||(re[27]=Q("span",{class:"control-cell__unbound-label"},"Tap to assign",-1))])):t.cell.controlType==="lfo"?(ce(),me("div",C4,[Q("canvas",{ref_key:"graphCanvas",ref:s,class:"control-cell__mini-graph control-cell__mini-graph--interactive",width:"120",height:"50",onPointerdown:te,onTouchstart:Oe(te,["prevent"])},null,544),Q("div",R4,[Q("span",{class:"control-cell__value mono",onClick:re[2]||(re[2]=Oe(Ae=>z("frequency"),["stop"])),title:"Tap to edit"},Te(E.value.toFixed(2))+" Hz",1),Q("span",{class:"control-cell__value mono",onClick:re[3]||(re[3]=Oe(Ae=>z("amplitude"),["stop"])),title:"Tap to edit"},"amp "+Te(I.value.toFixed(2)),1)]),Q("div",I4,[(ce(),me(it,null,Ht(["sine","saw","square","triangle"],Ae=>Q("button",{key:Ae,class:ut(["control-cell__wf-btn",{"control-cell__wf-btn--active":q.value===Ae}]),onClick:Oe(Le=>k(Ae),["stop"])},Te(w(Ae)),11,P4)),64))]),Q("div",N4,Te(f.value),1),h.value?(ce(),me("div",D4,Te(h.value),1)):(ce(),me("div",L4,Te(d.value||"LFO"),1))])):t.cell.controlType==="timer"?(ce(),me("div",F4,[Q("canvas",{ref_key:"graphCanvas",ref:s,class:"control-cell__mini-graph",width:"120",height:"50"},null,512),Q("div",U4,Te(P.value?.toFixed(2)??"0.00")+" s",1),Q("div",O4,Te(f.value),1),h.value?(ce(),me("div",B4,Te(h.value),1)):(ce(),me("div",k4,Te(d.value||"Timer"),1))])):t.cell.controlType==="damper"?(ce(),me("div",z4,[Q("canvas",{ref_key:"graphCanvas",ref:s,class:"control-cell__mini-graph",width:"120",height:"50"},null,512),Q("div",V4,Te(P.value?.toFixed(3)??"0.000"),1),Q("div",$4,Te(f.value),1),h.value?(ce(),me("div",H4,Te(h.value),1)):(ce(),me("div",G4,Te(d.value||"Damper"),1))])):t.cell.controlType==="random"?(ce(),me("div",{key:5,class:ut(["control-cell__widget control-cell__anim-widget control-cell__random-widget",{"control-cell__random-widget--pulsing":U.value}])},[Q("canvas",{ref_key:"graphCanvas",ref:s,class:"control-cell__mini-graph",width:"120",height:"50"},null,512),Q("div",W4,Te(P.value?.toFixed(3)??"0.000"),1),Q("div",{class:"control-cell__lfo-readout",onPointerdown:re[6]||(re[6]=Oe(()=>{},["stop"])),onMousedown:re[7]||(re[7]=Oe(()=>{},["stop"]))},[Q("span",{class:"control-cell__value mono control-cell__value--tappable",onClick:re[4]||(re[4]=Oe(Ae=>he("triggerInterval"),["stop"])),title:"Tap to edit"},"⏱ "+Te(Se.value.toFixed(2))+"s",1),Q("span",{class:"control-cell__value mono control-cell__value--tappable",onClick:re[5]||(re[5]=Oe(Ae=>he("damping"),["stop"])),title:"Tap to edit"},"◈ "+Te(G.value.toFixed(3)),1)],32),Q("div",X4,Te(f.value),1),h.value?(ce(),me("div",Y4,Te(h.value),1)):(ce(),me("div",q4,Te(d.value||"Random"),1)),U.value?(ce(),me("div",K4)):Ge("",!0)],2)):t.cell.controlType==="fft"?(ce(),me("div",Z4,[Q("div",j4,[Q("div",{class:"control-cell__fft-bar",style:rt({height:D.value.bass*100+"%"})},[...re[28]||(re[28]=[Q("span",null,"B",-1)])],4),Q("div",{class:"control-cell__fft-bar",style:rt({height:D.value.lowMid*100+"%"})},[...re[29]||(re[29]=[Q("span",null,"LM",-1)])],4),Q("div",{class:"control-cell__fft-bar",style:rt({height:D.value.mid*100+"%"})},[...re[30]||(re[30]=[Q("span",null,"M",-1)])],4),Q("div",{class:"control-cell__fft-bar",style:rt({height:D.value.high*100+"%"})},[...re[31]||(re[31]=[Q("span",null,"H",-1)])],4)]),re[32]||(re[32]=Q("div",{class:"control-cell__label"},"FFT",-1)),Q("div",J4,Te(d.value||"Audio FFT"),1)])):t.cell.controlType==="knob"?(ce(),me("div",{key:7,class:"control-cell__widget",onPointerdown:re[8]||(re[8]=Oe(()=>{},["stop"])),onMousedown:re[9]||(re[9]=Oe(()=>{},["stop"]))},[tt(lx,{modelValue:p.value,min:b.value,max:M.value,step:_.value,size:null,"onUpdate:modelValue":Ne},null,8,["modelValue","min","max","step"]),Q("div",Q4,Te(f.value),1),Q("div",e5,Te(d.value),1)],32)):t.cell.controlType==="slider"?(ce(),me("div",{key:8,class:"control-cell__widget",onPointerdown:re[11]||(re[11]=Oe(()=>{},["stop"])),onMousedown:re[12]||(re[12]=Oe(()=>{},["stop"]))},[Q("input",{type:"range",class:"control-cell__slider",min:b.value,max:M.value,step:_.value,value:p.value,onInput:re[10]||(re[10]=Ae=>Ne(Number(Ae.target.value)))},null,40,t5),Q("div",n5,Te(p.value?.toFixed(2)),1),Q("div",i5,Te(f.value),1),Q("div",r5,Te(d.value),1)],32)):t.cell.controlType==="bang"?(ce(),me("div",{key:9,class:"control-cell__widget",onPointerdown:re[13]||(re[13]=Oe(()=>{},["stop"])),onMousedown:re[14]||(re[14]=Oe(()=>{},["stop"]))},[Q("button",{class:"control-cell__bang-btn",onClick:Oe(Ce,["stop"])},Te(f.value||"Bang!"),1),Q("div",o5,Te(d.value),1)],32)):t.cell.controlType==="toggle"?(ce(),me("div",{key:10,class:"control-cell__widget",onPointerdown:re[16]||(re[16]=Oe(()=>{},["stop"])),onMousedown:re[17]||(re[17]=Oe(()=>{},["stop"]))},[Q("button",{class:ut(["control-cell__toggle-btn",{"control-cell__toggle-btn--active":!!p.value}]),onClick:re[15]||(re[15]=Oe(Ae=>Ne(!p.value),["stop"]))},Te(p.value?"ON":"OFF"),3),Q("div",s5,Te(f.value),1),Q("div",a5,Te(d.value),1)],32)):t.cell.controlType==="xypad"?(ce(),me("div",{key:11,class:"control-cell__widget",onPointerdown:re[20]||(re[20]=Oe(()=>{},["stop"])),onMousedown:re[21]||(re[21]=Oe(()=>{},["stop"]))},[Q("div",{class:"control-cell__xypad",ref_key:"xyPadRef",ref:a,onPointerdown:S},[Q("div",{class:"control-cell__xypad-crosshair",style:rt(j.value)},null,4),Q("div",{class:"control-cell__xypad-glow",style:rt(ee.value)},null,4)],544),Q("div",l5,[Q("span",{class:"control-cell__value mono",onClick:re[18]||(re[18]=Oe(Ae=>C("x"),["stop"])),title:"Tap to edit"},"X: "+Te(ae.value.toFixed(2)),1),Q("span",{class:"control-cell__value mono",onClick:re[19]||(re[19]=Oe(Ae=>C("y"),["stop"])),title:"Tap to edit"},"Y: "+Te(W.value.toFixed(2)),1)]),m.value||v.value?(ce(),me("div",u5,[m.value?(ce(),me("div",c5,Te(m.value),1)):Ge("",!0),v.value?(ce(),me("div",d5,Te(v.value),1)):Ge("",!0)])):Ge("",!0),Q("div",f5,Te(f.value),1),!m.value&&!v.value?(ce(),me("div",h5,Te(d.value),1)):Ge("",!0)],32)):t.cell.controlType==="accelerometer"?(ce(),me("div",p5,[Q("div",m5,[Q("div",g5,[re[33]||(re[33]=Q("span",{class:"control-cell__accel-label"},"X",-1)),Q("div",v5,[Q("div",{class:"control-cell__accel-bar",style:rt({width:se("x")+"%",background:"#ff4757"})},null,4)])]),Q("div",_5,[re[34]||(re[34]=Q("span",{class:"control-cell__accel-label"},"Y",-1)),Q("div",y5,[Q("div",{class:"control-cell__accel-bar",style:rt({width:se("y")+"%",background:"#2ed573"})},null,4)])])]),re[35]||(re[35]=Q("div",{class:"control-cell__label"},"Accelerometer",-1)),Q("div",x5,Te(d.value),1)])):Ge("",!0),(ce(),Qt(_h,{to:"body"},[xe.value?(ce(),me("div",{key:0,class:"value-edit-overlay",onClick:re[25]||(re[25]=Oe(Ae=>xe.value=!1,["self"]))},[Q("div",b5,[Q("div",S5,Te(H.value),1),Q("input",{ref_key:"valueEditInput",ref:F,type:"number",class:"value-edit-popup__input",value:X.value,step:L.value,onKeydown:re[22]||(re[22]=$1(Ae=>J(Number(Ae.target.value)),["enter"]))},null,40,M5),Q("div",w5,[Q("button",{class:"value-edit-popup__btn",onClick:re[23]||(re[23]=Ae=>xe.value=!1)},"Cancel"),Q("button",{class:"value-edit-popup__btn value-edit-popup__btn--ok",onClick:re[24]||(re[24]=Ae=>J(Number(ue.$refs.valueEditInput?.value)))},"OK")])])])):Ge("",!0)]))],42,T4))}},T5=cr(E5,[["__scopeId","data-v-d1dd8399"]]),A5={class:"radial-menu__center"},C5={class:"radial-menu__segment-icon"},R5={class:"radial-menu__segment-label"},I5={class:"radial-menu__segment-icon"},P5={class:"radial-menu__segment-label"},uv=100,Il=64,N5={__name:"RadialMenu",props:{categories:{type:Array,default:()=>[]}},emits:["select","cancel"],setup(t,{expose:e,emit:n}){const i=t,r=n,o=Ie(!1),s=Ie(0),a=Ie(0),l=Ie(null),u=Ie(null),c=Re(()=>u.value?i.categories.find(p=>p.id===u.value)?.items||[]:[]);function d(g,p){s.value=g,a.value=p,l.value=null,u.value=null,o.value=!0}function f(){o.value=!1,l.value=null,u.value=null}function h(g,p){const b=g/p*2*Math.PI-Math.PI/2,M=Math.cos(b)*uv,_=Math.sin(b)*uv;return{transform:`translate(${M-Il/2}px, ${_-Il/2}px)`,width:Il+"px",height:Il+"px"}}function m(g){const p=g.clientX-s.value,b=g.clientY-a.value;if(Math.sqrt(p*p+b*b)<30){l.value=null;return}const _=Math.atan2(b,p),P=u.value?c.value:i.categories,D=P.length;if(D===0)return;const B=(_+Math.PI/2+2*Math.PI)%(2*Math.PI),y=Math.floor(B/(2*Math.PI/D))%D;l.value=P[y]?.id||null}function v(){if(!l.value){if(u.value){u.value=null,l.value=null;return}r("cancel"),f();return}if(!u.value){u.value=l.value,l.value=null;return}r("select",l.value),f()}return e({show:d,hide:f,visible:o}),(g,p)=>(ce(),Qt(_h,{to:"body"},[o.value?(ce(),me("div",{key:0,class:"radial-overlay",onPointerup:v,onPointermove:m,onTouchmove:p[0]||(p[0]=Oe(()=>{},["prevent"]))},[Q("div",{class:"radial-menu",style:rt({left:s.value+"px",top:a.value+"px"})},[Q("div",A5,Te(u.value?u.value:l.value||"⊕"),1),u.value?(ce(!0),me(it,{key:1},Ht(c.value,(b,M)=>(ce(),me("div",{key:b.id,class:ut(["radial-menu__segment",{"radial-menu__segment--active":l.value===b.id}]),style:rt(h(M,c.value.length))},[Q("span",I5,Te(b.icon),1),Q("span",P5,Te(b.label),1)],6))),128)):(ce(!0),me(it,{key:0},Ht(t.categories,(b,M)=>(ce(),me("div",{key:b.id,class:ut(["radial-menu__segment",{"radial-menu__segment--active":l.value===b.id}]),style:rt(h(M,t.categories.length))},[Q("span",C5,Te(b.icon),1),Q("span",R5,Te(b.label),1)],6))),128))],4)],32)):Ge("",!0)]))}},D5=cr(N5,[["__scopeId","data-v-ffb4e9d0"]]),L5={class:"control-drawer__handle-arrow"},F5={class:"control-drawer__handle-actions"},U5=["title"],O5={class:"control-drawer__grid"},B5={class:"assign-popup"},k5={class:"assign-popup__header"},z5={key:0,class:"assign-popup__empty"},V5=["onClick"],$5={class:"assign-popup__item-node"},H5={class:"assign-popup__item-param"},G5={key:1,class:"assign-popup__skip-row"},W5={__name:"ControlDrawer",setup(t){const e=Ao(),n=Ie(!1),i=Ie(null),r=Ie(!1),o=Ie(null),s=Ie(!1),a=Ie(null),l=Ie(null);let u=null,c=!1;const d=[{id:"controls",label:"Controls",icon:"🎛️",items:[{id:"knob",label:"Knob",icon:"🎛️"},{id:"slider",label:"Slider",icon:"═══"},{id:"bang",label:"Bang",icon:"💥"},{id:"toggle",label:"Toggle",icon:"⏻"},{id:"xypad",label:"XY Pad",icon:"✛"}]},{id:"animation",label:"Animation",icon:"🌊",items:[{id:"lfo",label:"LFO",icon:"〜️"},{id:"timer",label:"Timer",icon:"⏱️"},{id:"damper",label:"Damper",icon:"🫧"},{id:"fft",label:"FFT",icon:"🎵"}]}],f=Re(()=>e.getUnboundExposedParams()),h=Re(()=>l.value||(s.value?"Route Output To…":"Assign Parameter"));lt(()=>e.isPerformanceMode,x=>{x&&m()},{immediate:!0});function m(){const x=e.getControlNodes(),T=new Set(e.perfGridCells.map(E=>E.boundNodeId).filter(Boolean));for(const E of x){if(T.has(E.id))continue;const q={knob:"knob",slider:"slider",bang:"bang",button:"toggle",toggle:"toggle"}[E.type];if(!q)continue;const w=e.addPerfCell(q),k=E.data?.def;if(k?.params){const A=Object.keys(k.params)[0];A&&e.bindPerfCell(w,E.id,A)}}}function v(x){c=!1;const T=x.touches?x.touches[0]:x,E=T.clientX,I=T.clientY;u=setTimeout(()=>{c=!0,i.value?.show(E,I)},400)}function g(){clearTimeout(u)}function p(){if(c)return;const x=e.addPerfCell("knob");o.value=x,r.value=!0}function b(x){const T={lfo:"lfo",timer:"timer",damper:"damper",fft:"fft",random:"random",accelerometer:"accelerometer",xypad:"xyPad"};if(T[x]){const I=T[x],q=e.addNode(I,{x:100+Math.random()*200,y:100+Math.random()*200});if(q){const w=e.addPerfCell(x);e.bindPerfCell(w,q,null),x==="accelerometer"&&B(q),o.value=w,s.value=!0,r.value=!0}return}const E=e.addPerfCell(x);o.value=E,s.value=!1,r.value=!0}function M(x){o.value=x,r.value=!0}function _(x,T,E,I){const q=e.nodes.find(O=>O.id===T);if(!q)return;const k=Xt(q.type)?.params?.[E];if(!k)return;const A=k.min??0,N=k.max??1;I==="X"?(e.setParam(x,"minX",A),e.setParam(x,"maxX",N)):(e.setParam(x,"minY",A),e.setParam(x,"maxY",N))}function P(x){if(!o.value)return;const T=e.perfGridCells.find(E=>E.id===o.value);if(!T){r.value=!1;return}if(s.value)if(T.controlType==="xypad"&&!a.value){e.bindPerfCellTarget(T.id,x.nodeId,x.paramKey),_(T.boundNodeId,x.nodeId,x.paramKey,"X"),e.addEdge({source:T.boundNodeId,sourceHandle:"x",target:x.nodeId,targetHandle:x.paramKey}),a.value="y",l.value="Assign Y Axis To…";return}else if(T.controlType==="xypad"&&a.value==="y")e.bindPerfCellTargetY(T.id,x.nodeId,x.paramKey),_(T.boundNodeId,x.nodeId,x.paramKey,"Y"),e.addEdge({source:T.boundNodeId,sourceHandle:"y",target:x.nodeId,targetHandle:x.paramKey}),a.value=null,l.value=null;else{e.bindPerfCellTarget(T.id,x.nodeId,x.paramKey);const E=T.controlType==="fft"?"bass":T.controlType==="accelerometer"?"x":"out";e.addEdge({source:T.boundNodeId,sourceHandle:E,target:x.nodeId,targetHandle:x.paramKey})}else e.bindPerfCell(T.id,x.nodeId,x.paramKey);r.value=!1,o.value=null,a.value=null,l.value=null}function D(x,T){e.reorderPerfCells(x,T)}function B(x){typeof DeviceMotionEvent<"u"&&(typeof DeviceMotionEvent.requestPermission=="function"?DeviceMotionEvent.requestPermission().then(T=>{T==="granted"&&y(x)}).catch(console.warn):y(x))}function y(x){window.addEventListener("devicemotion",T=>{const E=e.nodes.find(q=>q.id===x);if(!E)return;const I=T.accelerationIncludingGravity;I&&(E._accelX=(I.x??0)/9.81,E._accelY=(I.y??0)/9.81,E._accelZ=(I.z??0)/9.81)})}return(x,T)=>(ce(),me("div",{class:ut(["control-drawer",{"control-drawer--collapsed":n.value}])},[Q("div",{class:"control-drawer__handle",onClick:T[1]||(T[1]=E=>n.value=!n.value)},[Q("span",L5,Te(n.value?"▲":"▼"),1),T[5]||(T[5]=Q("span",{class:"control-drawer__handle-title"},"Controls",-1)),Q("div",F5,[Q("button",{class:ut(["control-drawer__lock-btn",{"control-drawer__lock-btn--unlocked":fe(e).isPerfEditMode}]),onClick:T[0]||(T[0]=Oe(E=>fe(e).togglePerfEditMode(),["stop"])),title:fe(e).isPerfEditMode?"Lock Controls":"Unlock to Edit"},Te(fe(e).isPerfEditMode?"🔓":"🔒"),11,U5)])]),Dr(Q("div",O5,[(ce(!0),me(it,null,Ht(fe(e).perfGridCells,(E,I)=>(ce(),Qt(T5,{key:E.id,cell:E,"edit-mode":fe(e).isPerfEditMode,index:I,onDelete:q=>fe(e).removePerfCell(E.id),onAssign:q=>M(E.id),onReorder:D},null,8,["cell","edit-mode","index","onDelete","onAssign"]))),128)),fe(e).isPerfEditMode?(ce(),me("div",{key:0,class:"control-drawer__add-cell",onPointerdown:v,onPointerup:g,onPointerleave:g,onTouchstart:Oe(v,["prevent"]),onClick:p},[...T[6]||(T[6]=[Q("span",{class:"control-drawer__add-icon"},"➕",-1),Q("span",{class:"control-drawer__add-label"},[hi("Hold for menu"),Q("br"),hi("Tap to quick-add")],-1)])],32)):Ge("",!0)],512),[[Lr,!n.value]]),tt(D5,{ref_key:"radialMenuRef",ref:i,categories:d,onSelect:b,onCancel:()=>{}},null,512),(ce(),Qt(_h,{to:"body"},[r.value?(ce(),me("div",{key:0,class:"assign-overlay",onClick:T[4]||(T[4]=Oe(E=>r.value=!1,["self"]))},[Q("div",B5,[Q("div",k5,Te(h.value),1),f.value.length===0?(ce(),me("div",z5,[T[7]||(T[7]=hi(" No unbound exposed parameters available. ",-1)),T[8]||(T[8]=Q("br",null,null,-1)),T[9]||(T[9]=Q("br",null,null,-1)),T[10]||(T[10]=Q("span",{style:{"font-size":"11px",opacity:"0.7"}}," Expose parameters in Editor Mode first (🔗 icon in the inspector). ",-1)),T[11]||(T[11]=Q("br",null,null,-1)),T[12]||(T[12]=Q("br",null,null,-1)),s.value?(ce(),me("button",{key:0,class:"assign-popup__skip-btn",onClick:T[2]||(T[2]=E=>r.value=!1)},"Skip — use standalone")):Ge("",!0)])):Ge("",!0),(ce(!0),me(it,null,Ht(f.value,E=>(ce(),me("div",{key:`${E.nodeId}::${E.paramKey}`,class:"assign-popup__item",onClick:I=>P(E)},[Q("span",$5,Te(E.nodeLabel),1),T[13]||(T[13]=Q("span",{class:"assign-popup__item-sep"},"→",-1)),Q("span",H5,Te(E.paramLabel),1)],8,V5))),128)),s.value&&f.value.length>0?(ce(),me("div",G5,[Q("button",{class:"assign-popup__skip-btn",onClick:T[3]||(T[3]=E=>r.value=!1)},"Skip — use standalone")])):Ge("",!0)])])):Ge("",!0)]))],2))}},X5=cr(W5,[["__scopeId","data-v-6a70db30"]]),Y5={class:"perf-view"},q5={class:"perf-view__toolbar"},K5={class:"perf-view__badge mono"},Z5={class:"perf-view__badge mono"},j5={class:"perf-view__zoom-level mono"},J5={key:0,class:"perf-view__histogram"},Q5={__name:"PerformanceView",props:{fps:{type:Number,default:0}},setup(t,{expose:e}){const n=Ao(),i=Ie(null),r=Ie(null),o=Ie(null),s=Ie(!1),a=Ie(1),l=Ie(0),u=Ie(0);let c=!1,d=0,f=0,h=0,m=0;const v=Re(()=>{const x=i.value;return x?`${x.width}×${x.height}`:"—"});function g(x){const T=x.deltaY>0?.9:1.1,E=Math.max(.1,Math.min(10,a.value*T)),I=r.value?.getBoundingClientRect();if(I){const q=x.clientX-I.left,w=x.clientY-I.top;l.value=q-(q-l.value)*(E/a.value),u.value=w-(w-u.value)*(E/a.value)}a.value=E}function p(x){(x.button===1||x.button===0)&&(c=!0,d=x.clientX,f=x.clientY,h=l.value,m=u.value,x.currentTarget?.setPointerCapture?.(x.pointerId))}function b(x){c&&(l.value=h+(x.clientX-d),u.value=m+(x.clientY-f))}function M(){c=!1}function _(){const x=r.value,T=i.value;if(!x||!T||!T.width||!T.height)return;const E=x.clientWidth,I=x.clientHeight,q=Math.min(E/T.width,I/T.height);a.value=q,l.value=(E-T.width*q)/2,u.value=(I-T.height*q)/2}function P(){a.value=1;const x=r.value,T=i.value;x&&T&&(l.value=(x.clientWidth-T.width)/2,u.value=(x.clientHeight-T.height)/2)}lt(s,async x=>{x&&(await rn(),D())});function D(){const x=i.value,T=o.value;if(!x||!T||!x.width)return;const E=document.createElement("canvas");E.width=x.width,E.height=x.height;const I=E.getContext("2d");I.drawImage(x,0,0);const w=I.getImageData(0,0,E.width,E.height).data,k=new Array(256).fill(0),A=new Array(256).fill(0),N=new Array(256).fill(0);for(let ge=0;ge<w.length;ge+=4)k[w[ge]]++,A[w[ge+1]]++,N[w[ge+2]]++;const O=Math.max(...k,...A,...N,1),$=T.getContext("2d"),K=T.width,te=T.height;$.clearRect(0,0,K,te);function ne(ge,Ee){$.strokeStyle=Ee,$.lineWidth=1,$.globalAlpha=.6,$.beginPath();for(let Se=0;Se<256;Se++){const G=Se/255*K,U=te-ge[Se]/O*te;Se===0?$.moveTo(G,U):$.lineTo(G,U)}$.stroke()}ne(k,"#ff4757"),ne(A,"#2ed573"),ne(N,"#1e90ff"),$.globalAlpha=1}let B=null;lt(s,x=>{x?B=setInterval(D,500):clearInterval(B)},{immediate:!0});function y(){setTimeout(()=>_(),100)}return mn(async()=>{await rn(),_(),window.addEventListener("resize",y),window.addEventListener("orientationchange",y)}),lr(()=>{window.removeEventListener("resize",y),window.removeEventListener("orientationchange",y),clearInterval(B)}),e({perfCanvasRef:i}),(x,T)=>(ce(),me("div",Y5,[Q("div",{class:"perf-view__renderer",ref_key:"viewportRef",ref:r,onWheel:Oe(g,["prevent"]),onPointerdown:p,onPointermove:b,onPointerup:M},[Q("div",{class:"perf-view__canvas-wrap",style:rt({transform:`translate(${l.value}px, ${u.value}px) scale(${a.value})`,transformOrigin:"0 0"})},[Q("canvas",{ref_key:"perfCanvasRef",ref:i,class:"perf-view__canvas"},null,512)],4)],544),Q("div",q5,[Q("span",K5,"v"+Te(fe(y_).version),1),Q("span",Z5,Te(v.value),1),Q("span",{class:ut(["perf-view__badge perf-view__fps mono",{"perf-view__fps--ok":t.fps>=50}])},Te(t.fps)+" FPS",3),T[2]||(T[2]=Q("div",{style:{flex:"1"}},null,-1)),Q("span",j5,Te(Math.round(a.value*100))+"%",1),Q("button",{class:"perf-view__tool-btn",onClick:_,title:"Fit to viewport"},"⊡"),Q("button",{class:"perf-view__tool-btn",onClick:P,title:"1:1 pixel zoom"},"1:1"),Q("button",{class:ut(["perf-view__tool-btn",{active:s.value}]),onClick:T[0]||(T[0]=E=>s.value=!s.value),title:"Toggle Histogram"},"📊",2),T[3]||(T[3]=Q("div",{class:"perf-view__divider"},null,-1)),Q("button",{class:"perf-view__exit-btn",onClick:T[1]||(T[1]=E=>fe(n).togglePerformanceMode()),title:"Exit Performance Mode"}," ✕ Editor ")]),s.value?(ce(),me("div",J5,[Q("canvas",{ref_key:"histCanvas",ref:o,class:"perf-view__hist-canvas",width:"256",height:"60"},null,512)])):Ge("",!0),tt(X5)]))}},ez=cr(Q5,[["__scopeId","data-v-a3c6dc9c"]]),tz=`// Passthrough — renders texture as-is\r
precision highp float;\r
varying vec2 vUv;\r
uniform sampler2D uTexture;\r
\r
void main() {\r
  gl_FragColor = texture2D(uTexture, vUv);\r
}\r
`,nz=`// Reeded Glass — ribbed/fluted glass refraction\r
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
`,iz=`// Chromatic Aberration — RGB channel offset\r
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
`,rz=`// Heightmap Displacement — displace pixels using a heightmap image\r
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
`,oz=`// Levels — shadows/midtones/highlights per-channel adjustment\r
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
`,sz=`// Surface Blur — edge-preserving bilateral filter approximation\r
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
`,az=`// Blend — combine two images with blend modes\r
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
`,lz=`// Feedback Loop — blend current frame with previous frame\r
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
`,uz=`// UV Generator — outputs UV coordinates as color (R=U, G=V)\r
precision highp float;\r
varying vec2 vUv;\r
\r
void main() {\r
  gl_FragColor = vec4(vUv.x, vUv.y, 0.0, 1.0);\r
}\r
`,cz=`// UV Transform — scale, rotate, translate UVs\r
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
`,dz=`// UV Repeat — tile image with mirror/offset options\r
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
`,fz=`// UV Glitch — random block displacement of UV coordinates\r
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
`,hz=`// UV Polar — cartesian to polar and polar to cartesian conversion\r
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
`,pz=`varying vec2 vUv;\r
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
`,mz=`varying vec2 vUv;\r
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
`,gz=`varying vec2 vUv;\r
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
`,vz=`varying vec2 vUv;\r
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
`,_z=`varying vec2 vUv;\r
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
`,yz=`// Liquid Deform — swirling polar texture deformation\r
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
`,xz=`// ASCII Art — bitmap glyph post-processing effect\r
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
`,bz=`// ASCII Art v2 — bitmap glyphs with palette color matching\r
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
`,Sz=`// Fisheye / Antifisheye — barrel and pincushion lens distortion\r
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
`,Mz=`// Smooth Noise Contours — antialiased simplex noise contour lines\r
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
`,wz=`
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position, 1.0);
}
`,Ez={passthrough:tz,reededGlass:nz,chromaticAberration:iz,displacement:rz,levels:oz,surfaceBlur:sz,blend:az,feedback:lz,uvGenerator:uz,uvTransform:cz,uvRepeat:dz,uvGlitch:fz,uvPolar:hz,diffusion:pz,xerox:mz,crt:gz,motionBlur:vz,dithering:_z,liquidDeform:yz,ascii:xz,asciiV2:bz,fisheye:Sz,noiseContours:Mz},cv=20;class Tz{constructor(){this.renderer=null,this.scene=null,this.camera=null,this.quad=null,this.fbos={},this.materials={},this.textures={},this.feedbackFBOs={},this.width=512,this.height=512,this.isInitialized=!1}init(e,n,i){this.width=n||512,this.height=i||512,this.renderer=new hC({canvas:e,alpha:!0,preserveDrawingBuffer:!0,antialias:!1}),this.renderer.setSize(this.width,this.height),this.renderer.autoClear=!1,this.camera=new Fh(-1,1,1,-1,0,1);const r=new La(2,2);this.scene=new JS,this.quad=new Si(r,null),this.scene.add(this.quad),this.isInitialized=!0}resize(e,n){this.width=e,this.height=n,this.renderer&&this.renderer.setSize(e,n);for(const[i,r]of Object.entries(this.fbos))r.setSize(e,n);for(const[i,r]of Object.entries(this.feedbackFBOs))r.current.setSize(e,n),r.previous.setSize(e,n)}setInputTexture(e,n){n.colorSpace=zr,n.minFilter=Rt,n.magFilter=Rt,this.textures[e]=n}getOrCreateFBO(e){if(this.fbos[e])return this.fbos[e];if(Object.keys(this.fbos).length>=cv)return console.warn(`Max FBO count (${cv}) reached. Cannot create FBO for node ${e}`),null;const n=new Mn(this.width,this.height,{minFilter:Rt,magFilter:Rt,format:bn,type:yn,colorSpace:zr});return this.fbos[e]=n,n}getOrCreateFeedbackFBOs(e){if(this.feedbackFBOs[e])return this.feedbackFBOs[e];const n={minFilter:Rt,magFilter:Rt,format:bn,type:yn};return this.feedbackFBOs[e]={current:new Mn(this.width,this.height,n),previous:new Mn(this.width,this.height,n)},this.feedbackFBOs[e]}getOrCreateMaterial(e,n,i){let r=Ez[n];if(!r)return this.getOrCreateMaterial(e,"passthrough",i);if(n!=="passthrough"&&n!=="feedback"){const a=r.includes("uniform sampler2D uIn;"),l=r.includes("uniform sampler2D uTexture;");if(a||l){const u=a?"uIn":"uTexture";r=r.replace("void main()",`uniform float uBlendAmount;
void main()`),r=r.replace(/gl_FragColor\s*=\s*([^;]+);([^;]*)$/,`vec4 effectColor = $1;
  vec4 originalColor = texture2D(${u}, vUv);
  gl_FragColor = mix(originalColor, effectColor, uBlendAmount);$2`)}}if(this.materials[e]&&this.materials[e]._shaderKey===n){const a=this.materials[e];let l=!1;for(const[u,c]of Object.entries(i))a.uniforms[u]?a.uniforms[u].value=c:(a.uniforms[u]={value:c},l=!0);return l&&(a.needsUpdate=!0),a}this.materials[e]&&this.materials[e].dispose();const o={};for(const[a,l]of Object.entries(i))o[a]={value:l};const s=new Qn({vertexShader:wz,fragmentShader:r,uniforms:o,depthTest:!1,depthWrite:!1});return s._shaderKey=n,this.materials[e]=s,s}renderNode(e,n,i){this.quad.material=n,i?this.renderer.setRenderTarget(i):this.renderer.setRenderTarget(null),this.renderer.clear(),this.renderer.render(this.scene,this.camera)}removeNodeResources(e){this.fbos[e]&&(this.fbos[e].dispose(),delete this.fbos[e]),this.materials[e]&&(this.materials[e].dispose(),delete this.materials[e]),this.textures[e]&&(this.textures[e].dispose(),delete this.textures[e]),this.feedbackFBOs[e]&&(this.feedbackFBOs[e].current.dispose(),this.feedbackFBOs[e].previous.dispose(),delete this.feedbackFBOs[e])}execute(e,n,i,r,o,s,a){if(!this.isInitialized||!this.renderer)return;const l={};for(const h of n)l[h.id]=h;const u={};for(const h of i)u[h.target]||(u[h.target]=[]),u[h.target].push({sourceNodeId:h.source,sourceHandle:h.sourceHandle,targetHandle:h.targetHandle});let c=null;const d={};for(const h of e){const m=l[h];if(!m)continue;const v=Xt(m.type);if(!v)continue;const g=r[h]||{};if(m.type==="imageInput"||m.type==="imageOutput"||m.type==="pixelSort")continue;if(g._bypass){const y=u[h]||[];for(const x of y){const T=l[x.sourceNodeId];if(!T)continue;let E=null;if(T.type==="imageInput"?E=this.textures[x.sourceNodeId]||null:this.fbos[x.sourceNodeId]&&(E=this.fbos[x.sourceNodeId].texture),E){const I=this.getOrCreateFBO(h);if(I){const q=this.getOrCreateMaterial(h,"passthrough",{uTexture:E});this.renderNode(h,q,I),c=I}break}}d[h]=0;continue}const p=u[h]||[],b={uTime:a,uResolution:new Tt(this.width,this.height)};for(const y of v.inputs)if(y.type==="image"){const x="u"+y.id.charAt(0).toUpperCase()+y.id.slice(1);b[x+"Connected"]=!1,b[x]=null}let M=!1;for(const y of p){const x=l[y.sourceNodeId];if(!x||!Xt(x.type))continue;let E=null;if(x.type==="imageInput"||x.type==="uiImageSlot"||x.type==="webcamInput"?E=this.textures[y.sourceNodeId]||null:this.fbos[y.sourceNodeId]&&(E=this.fbos[y.sourceNodeId].texture),E&&(M=!0,v.inputs.find(q=>q.id===y.targetHandle))){const q="u"+y.targetHandle.charAt(0).toUpperCase()+y.targetHandle.slice(1);b[q]=E,b[q+"Connected"]=!0}if(o[y.sourceNodeId]){const I=o[y.sourceNodeId][y.sourceHandle];if(I!==void 0){const q=v.inputs.find(k=>k.id===y.targetHandle),w=!q&&v.params[y.targetHandle];(q||w)&&(g[y.targetHandle]=I)}}}if(!M&&v.inputs.some(y=>y.type==="image"))continue;for(const[y,x]of Object.entries(g)){const T=v.params[y];if(!T)continue;const E="u"+y.charAt(0).toUpperCase()+y.slice(1);if(T.type==="float"||T.type==="int")b[E]=Number(x);else if(T.type==="bool")b[E]=x?1:0;else if(T.type==="select"){const I=T.options||[];b[E]=I.indexOf(x)}else T.type==="color"&&(b[E]=new Et(x))}if(m.type==="feedbackLoop"){const y=this.getOrCreateFeedbackFBOs(h);b.uPreviousFrame=y.previous.texture,b.uDecay=g.decay??.9,b.uBlendMode=["normal","add","multiply"].indexOf(g.blendMode??"normal");const x=this.getOrCreateMaterial(h,"feedback",b),T=Math.min(g.iterations??1,100);for(let E=0;E<T;E++){this.renderNode(h,x,y.current);const I=y.previous;y.previous=y.current,y.current=I,x.uniforms.uPreviousFrame.value=y.previous.texture}this.fbos[h]=y.previous,c=y.previous;continue}const _=v.shaderKey;if(!_)continue;const P=this.getOrCreateFBO(h);if(!P)continue;const D=performance.now(),B=this.getOrCreateMaterial(h,_,b);this.renderNode(h,B,P),d[h]=performance.now()-D,c=P}const f=s&&this.fbos[s]?this.fbos[s]:c;if(f){this.materials.__preview__&&(this.materials.__preview__.uniforms.uTexture.value=f.texture);const h=this.getOrCreateMaterial("__preview__","passthrough",{uTexture:f.texture});this.renderNode("__preview__",h,null)}return this.perfTimings=d,d}readPixels(e){const n=this.fbos[e];if(!n||!this.renderer)return null;const i=new Uint8Array(this.width*this.height*4);return this.renderer.readRenderTargetPixels(n,0,0,this.width,this.height,i),{pixels:i,width:this.width,height:this.height}}getScaledPixels(e,n,i){const r=this.getNodeTexture(e);if(!r||!this.renderer)return null;(!this._previewFBO||this._previewFBO.width!==n||this._previewFBO.height!==i)&&(this._previewFBO&&this._previewFBO.dispose(),this._previewFBO=new Mn(n,i,{minFilter:Rt,magFilter:Rt,format:bn,type:yn}));const o=this.getOrCreateMaterial("__preview_scale__","passthrough",{uTexture:r});this.renderNode("__preview_scale__",o,this._previewFBO);const s=new Uint8Array(n*i*4);return this.renderer.readRenderTargetPixels(this._previewFBO,0,0,n,i,s),{pixels:s,width:n,height:i}}getNodeTexture(e){return this.textures[e]?this.textures[e]:this.fbos[e]?this.fbos[e].texture:null}removeNode(e){this.fbos[e]&&(this.fbos[e].dispose(),delete this.fbos[e]),this.materials[e]&&(this.materials[e].dispose(),delete this.materials[e]),this.textures[e]&&(this.textures[e].dispose(),delete this.textures[e]),this.feedbackFBOs[e]&&(this.feedbackFBOs[e].current.dispose(),this.feedbackFBOs[e].previous.dispose(),delete this.feedbackFBOs[e])}dispose(){for(const e of Object.values(this.fbos))e.dispose();for(const e of Object.values(this.materials))e.dispose();for(const e of Object.values(this.textures))e.dispose();for(const e of Object.values(this.feedbackFBOs))e.current.dispose(),e.previous.dispose();this.fbos={},this.materials={},this.textures={},this.feedbackFBOs={},this.renderer&&this.renderer.dispose()}}class Az{constructor(){this.isRunning=!1,this.startTime=0,this.lastTime=0,this.time=0,this.deltaTime=0,this.frameId=null,this.customWindow=null,this.callbacks=[]}onFrame(e){return this.callbacks.push(e),()=>{this.callbacks=this.callbacks.filter(n=>n!==e)}}start(){this.isRunning||(this.isRunning=!0,this.startTime=performance.now()/1e3,this.lastTime=this.startTime,this._tick())}stop(){this.isRunning=!1,this.frameId!==null&&(cancelAnimationFrame(this.frameId),this.frameId=null)}reset(){this.startTime=performance.now()/1e3,this.time=0,this.deltaTime=0}_tick(){if(!this.isRunning)return;const e=performance.now()/1e3;this.deltaTime=e-this.lastTime,this.time=e-this.startTime,this.lastTime=e;for(const i of this.callbacks)i(this.time,this.deltaTime);const n=this.customWindow||window;this.frameId=n.requestAnimationFrame(()=>this._tick())}}let Pl=null,Pr=null,jl=null,sh=!1;function ux(){if(!Pl)try{const t=window.AudioContext||window.webkitAudioContext;Pl=new t,Pr=Pl.createAnalyser(),Pr.fftSize=512,Pr.smoothingTimeConstant=.8,jl=new Uint8Array(Pr.frequencyBinCount),navigator.mediaDevices.getUserMedia({audio:!0,video:!1}).then(e=>{Pl.createMediaStreamSource(e).connect(Pr),sh=!0}).catch(e=>console.warn("Audio FFT access denied or error:",e))}catch(t){console.warn("Audio context not supported",t)}}function Cz(t,e){const n={},i={};for(const s of t)n[s.id]=0,i[s.id]=[];for(const s of e)i[s.source]&&(i[s.source].push(s.target),n[s.target]=(n[s.target]||0)+1);const r=[];for(const s of t)n[s.id]===0&&r.push(s.id);const o=[];for(;r.length>0;){const s=r.shift();o.push(s);for(const a of i[s]||[])n[a]--,n[a]===0&&r.push(a)}return o.length!==t.length&&console.warn("Cycle detected in graph — some nodes skipped"),o}function Rz(t,e,n){const i={};for(const r of e)if(r.target===t){const o=n[r.source];o&&(i[r.targetHandle]={sourceNodeId:r.source,sourceHandleId:r.sourceHandle,value:o[r.sourceHandle]})}return i}function Iz(t,e,n,i,r,o){const s={};for(const l of e)s[l.id]=l;const a={};for(const l of t){const u=s[l];if(!u)continue;const c=Xt(u.type);if(!c||(c.category==="image"||c.category==="uv")&&u.type!=="preview"&&u.type!=="webcamInput")continue;const d=i[l]||{},f=Rz(l,n,a),h={};switch(u.type){case"lfo":{const m=d.frequency??1,v=d.amplitude??1,g=d.offset??0,p=(d.phase??0)*Math.PI/180,b=r*m*Math.PI*2+p,M=d.waveform??"sine";let _=0;M==="sine"?_=Math.sin(b):M==="saw"?_=2*(b/(Math.PI*2)%1)-1:M==="square"?_=Math.sin(b)>=0?1:-1:M==="triangle"&&(_=2*Math.abs(2*(b/(Math.PI*2)%1)-1)-1),h.out=_*v+g;break}case"timer":{const m=d.speed??1,v=d.loop??!1,g=d.loopDuration??5;let p=r*m;v&&g>0&&(p=p%g),h.out=p;break}case"random":{const m=d.min??0,v=d.max??1,g=d.seed??42,p=d.triggerInterval??.5,b=Math.max(0,Math.min(.999,d.damping??0)),M=f.trigger?.value??0,_=n.some(y=>y.target===l&&y.targetHandle==="trigger"),P=u._prevRandTrigger??0;let D=!1;if(_)M>0&&P<=0&&(D=!0),u._prevRandTrigger=M;else{const y=u._lastFireTime??-p;r-y>=p&&(D=!0)}if(D||u._randTarget===void 0){u._randSeedCounter=(u._randSeedCounter??0)+1;const y=Math.sin(g+u._randSeedCounter*12.9898)*43758.5453,x=y-Math.floor(y);u._randTarget=m+x*(v-m),u._lastFireTime=r}const B=u._randCurrentValue??u._randTarget;b>0?u._randCurrentValue=B+(u._randTarget-B)*(1-b):u._randCurrentValue=u._randTarget,h.out=u._randCurrentValue;break}case"damper":{const m=f.target?.value??0,v=Math.max(0,Math.min(.999,d.smoothing??.9)),g=u._damperValue??m,p=g+(m-g)*(1-v);u._damperValue=p,h.out=p;break}case"fft":{sh||ux();const m=d.smoothing??.8,v=d.gain??1;if(sh&&Pr&&jl){Pr.smoothingTimeConstant=m,Pr.getByteFrequencyData(jl);let g=0,p=0,b=0,M=0;for(let _=0;_<256;_++){const P=jl[_]/255;_<=10?g+=P:_<=50?p+=P:_<=120?b+=P:M+=P}h.bass=Math.min(g/11*v,1),h.lowMid=Math.min(p/40*v,1),h.mid=Math.min(b/70*v,1),h.high=Math.min(M/135*v,1)}else h.bass=0,h.lowMid=0,h.mid=0,h.high=0;break}case"button":case"bang":{h.out=u._triggered?1:0,u._triggered=!1;break}case"onStart":{u._hasTriggered?h.out=0:(u._hasTriggered=!0,h.out=1);break}case"toggle":{const m=f.trigger?.value??0,v=u._prevTriggerVal??0;m>=.5&&v<.5&&(d.state=!d.state),u._prevTriggerVal=m,h.out=d.state?1:0;break}case"edgeTrigger":{const m=f.in?.value??!1,v=u._prevEdgeVal??!1,g=d.mode??"rising";let p=!1;g==="rising"&&!v&&m&&(p=!0),g==="falling"&&v&&!m&&(p=!0),g==="both"&&v!==m&&(p=!0),h.out=p?1:0,u._prevEdgeVal=m;break}case"webcamInput":{h.trigger=f.trigger?.value??0;break}case"accelerometer":{const m=d.sensitivity??1,v=d.smoothing??.5,g=u._accelX??0,p=u._accelY??0,b=u._accelZ??0,M=u._smoothX??0,_=u._smoothY??0,P=u._smoothZ??0;u._smoothX=M+(g*m-M)*(1-v),u._smoothY=_+(p*m-_)*(1-v),u._smoothZ=P+(b*m-P)*(1-v),h.x=u._smoothX,h.y=u._smoothY,h.z=u._smoothZ;break}case"xyPad":{const m=d.x??.5,v=d.y??.5,g=d.minX??0,p=d.maxX??1,b=d.minY??0,M=d.maxY??1;h.x=g+m*(p-g),h.y=b+v*(M-b);break}case"changeTrigger":{const m=f.in?.value??0,v=d.threshold??.1;u._lastTriggerVal===void 0&&(u._lastTriggerVal=m);const g=u._lastTriggerVal;let p=!1;Math.abs(m-g)>=v&&(p=!0,u._lastTriggerVal=m),h.out=p?1:0;break}case"slider":case"knob":{const m=d.value??.5,v=d.outputType??"float";h.out=v==="int"?Math.round(m):m;break}case"compare":{const m=f.a?.value??0,v=f.b?.value??0,g=d.op??">";let p=!1;switch(g){case">":p=m>v;break;case"<":p=m<v;break;case">=":p=m>=v;break;case"<=":p=m<=v;break;case"==":p=m===v;break;case"!=":p=m!==v;break}h.out=p;break}case"valueCondition":{const m=f.cond?.value??!1,v=f.trueVal?.value??d.defaultTrue??1,g=f.falseVal?.value??d.defaultFalse??0;h.out=m?v:g;break}case"mathAdd":{const m=f.a?.value??0,v=f.b?.value??0;h.out=m+v;break}case"mathMultiply":{const m=f.a?.value??0,v=f.b?.value??1;h.out=m*v;break}case"mathDivide":{const m=f.a?.value??0,v=f.b?.value??1;h.out=v!==0?m/v:0;break}case"mathSqrt":{const m=f.a?.value??0;h.out=Math.sqrt(Math.abs(m));break}case"mathMap":{const m=f.value?.value??0,v=d.inMin??0,g=d.inMax??1,p=d.outMin??0,b=d.outMax??1,M=g!==v?(m-v)/(g-v):0;h.out=p+M*(b-p);break}case"mathClamp":{const m=f.value?.value??0,v=d.min??0,g=d.max??1;h.out=Math.min(Math.max(m,v),g);break}case"mathWrap":{const m=f.value?.value??0,v=d.min??0,p=(d.max??1)-v;if(p<=0){h.out=v;break}h.out=v+((m-v)%p+p)%p;break}case"floatToInt":{const m=f.in?.value??0,v=d.mode??"round";let g;v==="floor"?g=Math.floor(m):v==="ceil"?g=Math.ceil(m):v==="truncate"?g=Math.trunc(m):g=Math.round(m);const p=d.clampMin??-2147483648,b=d.clampMax??2147483647;h.out=Math.min(Math.max(g,p),b);break}case"intToFloat":{h.out=Number(f.in?.value??0);break}case"numberMonitor":{h.out=f.in?.value??0;break}}a[l]=h}return a}function Pz(t,e){const n={};for(const i of e)n[i.id]=i;return t.filter(i=>{const r=n[i];if(!r)return!1;const o=Xt(r.type);return o?o.category==="image"||o.category==="uv":!1})}const Nz={id:"app"},Dz={class:"main-layout"},Lz={class:"preview-background"},Fz={key:0,class:"rotate-hint-overlay"},Uz={key:0,class:"rotate-hint-overlay"},Oz={__name:"App",setup(t){const e=Ao(),n=Ie(null),i=Ie(null),r=Ie(null),o=Ie(null),s=Ie(!1),a=Ie(!1);let l=null,u=null;const c=/Mobi|Android/i.test(navigator.userAgent)||window.innerWidth<768;function d(O,$,K=2500){O.value=!0,clearTimeout($.value),$.value=setTimeout(()=>{O.value=!1},K)}lt(()=>e.isPerformanceMode,(O,$)=>{c&&($&&!O?(d(s,{value:l}),l=setTimeout(()=>{s.value=!1},2500),s.value=!0,e.previewMode!=="background"&&(e.previewMode="background")):!$&&O&&(a.value=!0,clearTimeout(u),u=setTimeout(()=>{a.value=!1},2500)))});function f(){ux(),window.removeEventListener("click",f),window.removeEventListener("keydown",f)}let h=null,m=null,v=null;const g=Ie(0);let p=0,b=0;const M={};let _=null,P=null,D=null;function B(){if(P&&!P.closed){P.focus();return}if(P=window.open("","ImageManglerPopup","width=800,height=600,menubar=no,toolbar=no,location=no,status=no"),!P){alert("Popup blocked! Please allow popups to open the external renderer.");return}P.document.write(`
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
  `),P.document.close(),setTimeout(()=>{const O=P.document.getElementById("out");O&&(D=O.getContext("2d"))},50),m&&(m.customWindow=P),P.addEventListener("beforeunload",()=>{m&&(m.customWindow=null),P=null,D=null})}mn(async()=>{await rn(),window.addEventListener("click",f),window.addEventListener("keydown",f),window.addEventListener("keydown",y),c&&(e.isPerformanceMode=!0);const O=i.value?.getCanvas?.();O&&(h=new Tz,h.init(O,512,512)),r.value&&(_=r.value.getContext("2d")),e.onNodeRemoved($=>{h&&h.removeNodeResources($),delete M[$]}),b=performance.now(),m=new Az,v=m.onFrame(($,K)=>{if(!e.isRendering)return;p++;const te=performance.now();te-b>=500&&(g.value=Math.round(p/(te-b)*1e3),p=0,b=te),x($)}),m.start(),await e.loadFromLocalStorage()}),lr(()=>{v&&v(),m&&m.stop(),h&&h.dispose(),window.removeEventListener("keydown",y),window.removeEventListener("orientationchange",checkPortrait),window.removeEventListener("resize",checkPortrait),clearTimeout(rotateHintTimer)});function y(O){O.target.tagName==="INPUT"||O.target.tagName==="TEXTAREA"||O.target.tagName==="SELECT"||(O.key==="p"||O.key==="P")&&(O.preventDefault(),e.togglePerformanceMode())}function x(O,$){if(!h?.isInitialized)return;const K=e.nodes,te=e.edges,ne=e.nodeParams;if(K.length===0){_&&r.value&&_.clearRect(0,0,r.value.width,r.value.height);return}const ge=Cz(K,te),Ee=Iz(ge,K,te,ne,O);e.dataOutputs=Ee;const Se=["lfo","timer","damper","fft","xypad","accelerometer"];for(const Y of e.perfGridCells){if(!Y.boundNodeId||!Se.includes(Y.controlType))continue;const he=Ee[Y.boundNodeId];he&&(Y.controlType==="xypad"?(Y.boundParamKey&&Y.boundTargetNodeId&&e.setParam(Y.boundTargetNodeId,Y.boundParamKey,he.x??.5),Y.boundParamKeyY&&Y.boundTargetNodeIdY&&e.setParam(Y.boundTargetNodeIdY,Y.boundParamKeyY,he.y??.5)):Y.controlType==="fft"?Y.boundParamKey&&Y.boundTargetNodeId&&e.setParam(Y.boundTargetNodeId,Y.boundParamKey,he.bass??0):Y.controlType==="accelerometer"?Y.boundParamKey&&Y.boundTargetNodeId&&e.setParam(Y.boundTargetNodeId,Y.boundParamKey,he.x??0):Y.boundParamKey&&Y.boundTargetNodeId&&e.setParam(Y.boundTargetNodeId,Y.boundParamKey,he.out??0))}const G=Pz(ge,K),U=h.execute(G,K,te,ne,Ee,e.previewNodeId,O);if(e.perfTimings=U||{},e.previewMode==="background"&&_&&r.value){const Y=i.value?.getCanvas?.();Y&&Y.width>0&&Y.height>0&&((r.value.width!==Y.width||r.value.height!==Y.height)&&(r.value.width=Y.width,r.value.height=Y.height),_.clearRect(0,0,r.value.width,r.value.height),_.drawImage(Y,0,0))}if(P&&!P.closed&&D){const Y=i.value?.getCanvas?.();if(Y&&Y.width>0&&Y.height>0){const he=D.canvas;(he.width!==Y.width||he.height!==Y.height)&&(he.width=Y.width,he.height=Y.height),D.clearRect(0,0,he.width,he.height),D.drawImage(Y,0,0)}}if(e.isPerformanceMode&&o.value?.perfCanvasRef){const Y=i.value?.getCanvas?.(),he=o.value.perfCanvasRef;if(Y&&Y.width>0&&Y.height>0){(he.width!==Y.width||he.height!==Y.height)&&(he.width=Y.width,he.height=Y.height);const xe=he.getContext("2d");xe.clearRect(0,0,he.width,he.height),xe.drawImage(Y,0,0)}}}function T(O){if(n.value&&n.value.addNodeAtCenter)n.value.addNodeAtCenter(O);else{const $=300+Math.random()*200,K=200+Math.random()*200;e.addNode(O,{x:$,y:K})}}function E(O,$){if(!h)return;M[O]=$;let K;$.isVideo?(K=new uM($.img),K.minFilter=Rt,K.magFilter=Rt,K.format=bn):(K=new on($.img),K.needsUpdate=!0),h.setInputTexture(O,K),I(O),h.resize($.width,$.height),i.value&&(i.value.width=$.width,i.value.height=$.height)}function I(O){if(!h)return;const $=new Set,K=[O];for(;K.length;){const te=K.shift();if(!$.has(te)){$.add(te);for(const ne of e.edges)ne.source===te&&!$.has(ne.target)&&(h.fbos[ne.target]&&(h.fbos[ne.target].dispose(),delete h.fbos[ne.target]),h.materials[ne.target]&&(h.materials[ne.target].dispose(),delete h.materials[ne.target]),K.push(ne.target))}}}function q(O){if(!h)return;const $=e.edges.filter(we=>we.target===O);let K=null;for(const we of $)if(we.targetHandle==="in"){K=we.source;break}if(!K){alert("No image connected to output node");return}const te=h.readPixels(K);if(!te){alert("Could not read pixels — make sure an image is connected and the pipeline has run");return}const{pixels:ne,width:ge,height:Ee}=te,G=(e.nodeParams[O]||{}).filename||e.projectTitle||"output",U=document.createElement("canvas");U.width=ge,U.height=Ee;const Y=U.getContext("2d"),he=Y.createImageData(ge,Ee);for(let we=0;we<Ee;we++)for(let H=0;H<ge;H++){const X=((Ee-1-we)*ge+H)*4,L=(we*ge+H)*4;he.data[L]=ne[X],he.data[L+1]=ne[X+1],he.data[L+2]=ne[X+2],he.data[L+3]=ne[X+3]}Y.putImageData(he,0,0);const xe=G.replace(/[^a-zA-Z0-9_-]/g,"_");U.toBlob(we=>{if(!we)return;const H=URL.createObjectURL(we),X=document.createElement("a");X.href=H,X.download=`${xe}.png`,X.click(),URL.revokeObjectURL(H)},"image/png")}function w(){e.saveToLocalStorage()}async function k(){await e.loadFromLocalStorage()||alert("No saved graph found")}function A(O){e.loadGraph(O)||alert("Failed to import graph — invalid JSON")}function N(){confirm("Clear entire graph? This cannot be undone.")&&(e.resetGraph(),Object.keys(M).forEach(O=>delete M[O]))}return(O,$)=>(ce(),me("div",Nz,[Dr(tt(NC,{"is-rendering":fe(e).isRendering,"preview-mode":fe(e).previewMode,"project-title":fe(e).projectTitle,"show-shadows":fe(e).showShadows,"is-performance-mode":fe(e).isPerformanceMode,onSave:w,onLoad:k,onDownload:$[0]||($[0]=K=>fe(e).downloadGraph()),onImport:A,onReset:N,onToggleRender:$[1]||($[1]=K=>fe(e).toggleRendering()),onTogglePreview:$[2]||($[2]=K=>fe(e).togglePreviewMode()),onToggleShadows:$[3]||($[3]=K=>fe(e).showShadows=!fe(e).showShadows),onOpenPopup:B,onUpdateTitle:$[4]||($[4]=K=>fe(e).projectTitle=K),onUpdateBgOpacity:$[5]||($[5]=K=>fe(e).bgOpacity=K),onTogglePerformance:$[6]||($[6]=K=>fe(e).togglePerformanceMode())},null,8,["is-rendering","preview-mode","project-title","show-shadows","is-performance-mode"]),[[Lr,!fe(e).isPerformanceMode]]),fe(e).isPerformanceMode?(ce(),Qt(ez,{key:0,ref_key:"perfViewRef",ref:o,fps:g.value},null,8,["fps"])):Ge("",!0),Dr(Q("div",Dz,[tt(HC,{onAddNode:T}),Q("div",{class:ut(["editor-area",{"editor-area--bg-mode":fe(e).previewMode==="background"}])},[Dr(Q("div",Lz,[Q("canvas",{ref_key:"bgCanvasRef",ref:r},null,512),Q("div",{class:"preview-background__overlay",style:rt({opacity:fe(e).bgOpacity})},null,4)],512),[[Lr,fe(e).previewMode==="background"]]),tt(Rk,{ref_key:"editorRef",ref:n,class:ut({"editor-canvas--no-shadows":!fe(e).showShadows}),onImageLoaded:E,onExportImage:q},null,8,["class"]),Dr(tt(Bk,{ref_key:"previewRef",ref:i,"is-rendering":fe(e).isRendering,fps:g.value,"preview-mode":fe(e).previewMode},null,8,["is-rendering","fps","preview-mode"]),[[Lr,fe(e).previewMode==="anchored"||fe(e).previewMode==="floating"]])],2),tt(E4)],512),[[Lr,!fe(e).isPerformanceMode]]),tt(Bp,{name:"rotate-hint"},{default:dn(()=>[s.value?(ce(),me("div",Fz,[...$[7]||($[7]=[Q("div",{class:"rotate-hint__icon",style:{"animation-name":"hint-rotate-landscape"}},"📱",-1),Q("div",{class:"rotate-hint__text"},"Rotate to landscape for Editor mode",-1)])])):Ge("",!0)]),_:1}),tt(Bp,{name:"rotate-hint"},{default:dn(()=>[a.value?(ce(),me("div",Uz,[...$[8]||($[8]=[Q("div",{class:"rotate-hint__icon"},"📱",-1),Q("div",{class:"rotate-hint__text"},"Rotate to portrait for Performance mode",-1)])])):Ge("",!0)]),_:1})]))}},cx=W1(Oz);cx.use(q1());cx.mount("#app");
