(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function n(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(r){if(r.ep)return;r.ep=!0;const o=n(r);fetch(r.href,o)}})();function ah(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const Pt={},Ko=[],mi=()=>{},cv=()=>!1,Iu=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),lh=t=>t.startsWith("onUpdate:"),Yt=Object.assign,uh=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},gx=Object.prototype.hasOwnProperty,xt=(t,e)=>gx.call(t,e),et=Array.isArray,Zo=t=>Ca(t)==="[object Map]",dv=t=>Ca(t)==="[object Set]",pp=t=>Ca(t)==="[object Date]",nt=t=>typeof t=="function",Ot=t=>typeof t=="string",Zn=t=>typeof t=="symbol",yt=t=>t!==null&&typeof t=="object",fv=t=>(yt(t)||nt(t))&&nt(t.then)&&nt(t.catch),hv=Object.prototype.toString,Ca=t=>hv.call(t),vx=t=>Ca(t).slice(8,-1),pv=t=>Ca(t)==="[object Object]",Pu=t=>Ot(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Gs=ah(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Nu=t=>{const e=Object.create(null);return(n=>e[n]||(e[n]=t(n)))},_x=/-\w/g,Bn=Nu(t=>t.replace(_x,e=>e.slice(1).toUpperCase())),yx=/\B([A-Z])/g,$r=Nu(t=>t.replace(yx,"-$1").toLowerCase()),Du=Nu(t=>t.charAt(0).toUpperCase()+t.slice(1)),pc=Nu(t=>t?`on${Du(t)}`:""),Wi=(t,e)=>!Object.is(t,e),mc=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},mv=(t,e,n,i=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:i,value:n})},xx=t=>{const e=parseFloat(t);return isNaN(e)?t:e},bx=t=>{const e=Ot(t)?Number(t):NaN;return isNaN(e)?t:e};let mp;const Lu=()=>mp||(mp=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function rt(t){if(et(t)){const e={};for(let n=0;n<t.length;n++){const i=t[n],r=Ot(i)?Ex(i):rt(i);if(r)for(const o in r)e[o]=r[o]}return e}else if(Ot(t)||yt(t))return t}const Sx=/;(?![^(]*\))/g,Mx=/:([^]+)/,wx=/\/\*[^]*?\*\//g;function Ex(t){const e={};return t.replace(wx,"").split(Sx).forEach(n=>{if(n){const i=n.split(Mx);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function ut(t){let e="";if(Ot(t))e=t;else if(et(t))for(let n=0;n<t.length;n++){const i=ut(t[n]);i&&(e+=i+" ")}else if(yt(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}function Tx(t){if(!t)return null;let{class:e,style:n}=t;return e&&!Ot(e)&&(t.class=ut(e)),n&&(t.style=rt(n)),t}const Ax="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Cx=ah(Ax);function gv(t){return!!t||t===""}function Rx(t,e){if(t.length!==e.length)return!1;let n=!0;for(let i=0;n&&i<t.length;i++)n=ch(t[i],e[i]);return n}function ch(t,e){if(t===e)return!0;let n=pp(t),i=pp(e);if(n||i)return n&&i?t.getTime()===e.getTime():!1;if(n=Zn(t),i=Zn(e),n||i)return t===e;if(n=et(t),i=et(e),n||i)return n&&i?Rx(t,e):!1;if(n=yt(t),i=yt(e),n||i){if(!n||!i)return!1;const r=Object.keys(t).length,o=Object.keys(e).length;if(r!==o)return!1;for(const s in t){const a=t.hasOwnProperty(s),l=e.hasOwnProperty(s);if(a&&!l||!a&&l||!ch(t[s],e[s]))return!1}}return String(t)===String(e)}const vv=t=>!!(t&&t.__v_isRef===!0),Te=t=>Ot(t)?t:t==null?"":et(t)||yt(t)&&(t.toString===hv||!nt(t.toString))?vv(t)?Te(t.value):JSON.stringify(t,_v,2):String(t),_v=(t,e)=>vv(e)?_v(t,e.value):Zo(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[i,r],o)=>(n[gc(i,o)+" =>"]=r,n),{})}:dv(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>gc(n))}:Zn(e)?gc(e):yt(e)&&!et(e)&&!pv(e)?String(e):e,gc=(t,e="")=>{var n;return Zn(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};let un;class yv{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.__v_skip=!0,this.parent=un,!e&&un&&(this.index=(un.scopes||(un.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=un;try{return un=this,e()}finally{un=n}}}on(){++this._on===1&&(this.prevScope=un,un=this)}off(){this._on>0&&--this._on===0&&(un=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let n,i;for(n=0,i=this.effects.length;n<i;n++)this.effects[n].stop();for(this.effects.length=0,n=0,i=this.cleanups.length;n<i;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,i=this.scopes.length;n<i;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function Fu(t){return new yv(t)}function Uu(){return un}function Ws(t,e=!1){un&&un.cleanups.push(t)}let Ft;const vc=new WeakSet;class xv{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,un&&un.active&&un.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,vc.has(this)&&(vc.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Sv(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,gp(this),Mv(this);const e=Ft,n=Kn;Ft=this,Kn=!0;try{return this.fn()}finally{wv(this),Ft=e,Kn=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)hh(e);this.deps=this.depsTail=void 0,gp(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?vc.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Ed(this)&&this.run()}get dirty(){return Ed(this)}}let bv=0,Xs,Ys;function Sv(t,e=!1){if(t.flags|=8,e){t.next=Ys,Ys=t;return}t.next=Xs,Xs=t}function dh(){bv++}function fh(){if(--bv>0)return;if(Ys){let e=Ys;for(Ys=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;Xs;){let e=Xs;for(Xs=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){t||(t=i)}e=n}}if(t)throw t}function Mv(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function wv(t){let e,n=t.depsTail,i=n;for(;i;){const r=i.prevDep;i.version===-1?(i===n&&(n=r),hh(i),Ix(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=r}t.deps=e,t.depsTail=n}function Ed(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Ev(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function Ev(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===na)||(t.globalVersion=na,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!Ed(t))))return;t.flags|=2;const e=t.dep,n=Ft,i=Kn;Ft=t,Kn=!0;try{Mv(t);const r=t.fn(t._value);(e.version===0||Wi(r,t._value))&&(t.flags|=128,t._value=r,e.version++)}catch(r){throw e.version++,r}finally{Ft=n,Kn=i,wv(t),t.flags&=-3}}function hh(t,e=!1){const{dep:n,prevSub:i,nextSub:r}=t;if(i&&(i.nextSub=r,t.prevSub=void 0),r&&(r.prevSub=i,t.nextSub=void 0),n.subs===t&&(n.subs=i,!i&&n.computed)){n.computed.flags&=-5;for(let o=n.computed.deps;o;o=o.nextDep)hh(o,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function Ix(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let Kn=!0;const Tv=[];function ji(){Tv.push(Kn),Kn=!1}function Ji(){const t=Tv.pop();Kn=t===void 0?!0:t}function gp(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=Ft;Ft=void 0;try{e()}finally{Ft=n}}}let na=0;class Px{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Ou{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!Ft||!Kn||Ft===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==Ft)n=this.activeLink=new Px(Ft,this),Ft.deps?(n.prevDep=Ft.depsTail,Ft.depsTail.nextDep=n,Ft.depsTail=n):Ft.deps=Ft.depsTail=n,Av(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const i=n.nextDep;i.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=i),n.prevDep=Ft.depsTail,n.nextDep=void 0,Ft.depsTail.nextDep=n,Ft.depsTail=n,Ft.deps===n&&(Ft.deps=i)}return n}trigger(e){this.version++,na++,this.notify(e)}notify(e){dh();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{fh()}}}function Av(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)Av(i)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const Jl=new WeakMap,mo=Symbol(""),Td=Symbol(""),ia=Symbol("");function dn(t,e,n){if(Kn&&Ft){let i=Jl.get(t);i||Jl.set(t,i=new Map);let r=i.get(n);r||(i.set(n,r=new Ou),r.map=i,r.key=n),r.track()}}function Bi(t,e,n,i,r,o){const s=Jl.get(t);if(!s){na++;return}const a=l=>{l&&l.trigger()};if(dh(),e==="clear")s.forEach(a);else{const l=et(t),u=l&&Pu(n);if(l&&n==="length"){const c=Number(i);s.forEach((d,f)=>{(f==="length"||f===ia||!Zn(f)&&f>=c)&&a(d)})}else switch((n!==void 0||s.has(void 0))&&a(s.get(n)),u&&a(s.get(ia)),e){case"add":l?u&&a(s.get("length")):(a(s.get(mo)),Zo(t)&&a(s.get(Td)));break;case"delete":l||(a(s.get(mo)),Zo(t)&&a(s.get(Td)));break;case"set":Zo(t)&&a(s.get(mo));break}}fh()}function Nx(t,e){const n=Jl.get(t);return n&&n.get(e)}function Io(t){const e=mt(t);return e===t?e:(dn(e,"iterate",ia),In(t)?e:e.map(jn))}function Bu(t){return dn(t=mt(t),"iterate",ia),t}function wr(t,e){return Qi(t)?ss(Xi(t)?jn(e):e):jn(e)}const Dx={__proto__:null,[Symbol.iterator](){return _c(this,Symbol.iterator,t=>wr(this,t))},concat(...t){return Io(this).concat(...t.map(e=>et(e)?Io(e):e))},entries(){return _c(this,"entries",t=>(t[1]=wr(this,t[1]),t))},every(t,e){return Ai(this,"every",t,e,void 0,arguments)},filter(t,e){return Ai(this,"filter",t,e,n=>n.map(i=>wr(this,i)),arguments)},find(t,e){return Ai(this,"find",t,e,n=>wr(this,n),arguments)},findIndex(t,e){return Ai(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return Ai(this,"findLast",t,e,n=>wr(this,n),arguments)},findLastIndex(t,e){return Ai(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return Ai(this,"forEach",t,e,void 0,arguments)},includes(...t){return yc(this,"includes",t)},indexOf(...t){return yc(this,"indexOf",t)},join(t){return Io(this).join(t)},lastIndexOf(...t){return yc(this,"lastIndexOf",t)},map(t,e){return Ai(this,"map",t,e,void 0,arguments)},pop(){return bs(this,"pop")},push(...t){return bs(this,"push",t)},reduce(t,...e){return vp(this,"reduce",t,e)},reduceRight(t,...e){return vp(this,"reduceRight",t,e)},shift(){return bs(this,"shift")},some(t,e){return Ai(this,"some",t,e,void 0,arguments)},splice(...t){return bs(this,"splice",t)},toReversed(){return Io(this).toReversed()},toSorted(t){return Io(this).toSorted(t)},toSpliced(...t){return Io(this).toSpliced(...t)},unshift(...t){return bs(this,"unshift",t)},values(){return _c(this,"values",t=>wr(this,t))}};function _c(t,e,n){const i=Bu(t),r=i[e]();return i!==t&&!In(t)&&(r._next=r.next,r.next=()=>{const o=r._next();return o.done||(o.value=n(o.value)),o}),r}const Lx=Array.prototype;function Ai(t,e,n,i,r,o){const s=Bu(t),a=s!==t&&!In(t),l=s[e];if(l!==Lx[e]){const d=l.apply(t,o);return a?jn(d):d}let u=n;s!==t&&(a?u=function(d,f){return n.call(this,wr(t,d),f,t)}:n.length>2&&(u=function(d,f){return n.call(this,d,f,t)}));const c=l.call(s,u,i);return a&&r?r(c):c}function vp(t,e,n,i){const r=Bu(t);let o=n;return r!==t&&(In(t)?n.length>3&&(o=function(s,a,l){return n.call(this,s,a,l,t)}):o=function(s,a,l){return n.call(this,s,wr(t,a),l,t)}),r[e](o,...i)}function yc(t,e,n){const i=mt(t);dn(i,"iterate",ia);const r=i[e](...n);return(r===-1||r===!1)&&ku(n[0])?(n[0]=mt(n[0]),i[e](...n)):r}function bs(t,e,n=[]){ji(),dh();const i=mt(t)[e].apply(t,n);return fh(),Ji(),i}const Fx=ah("__proto__,__v_isRef,__isVue"),Cv=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Zn));function Ux(t){Zn(t)||(t=String(t));const e=mt(this);return dn(e,"has",t),e.hasOwnProperty(t)}class Rv{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,i){if(n==="__v_skip")return e.__v_skip;const r=this._isReadonly,o=this._isShallow;if(n==="__v_isReactive")return!r;if(n==="__v_isReadonly")return r;if(n==="__v_isShallow")return o;if(n==="__v_raw")return i===(r?o?Xx:Dv:o?Nv:Pv).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const s=et(e);if(!r){let l;if(s&&(l=Dx[n]))return l;if(n==="hasOwnProperty")return Ux}const a=Reflect.get(e,n,Ut(e)?e:i);if((Zn(n)?Cv.has(n):Fx(n))||(r||dn(e,"get",n),o))return a;if(Ut(a)){const l=s&&Pu(n)?a:a.value;return r&&yt(l)?Ql(l):l}return yt(a)?r?Ql(a):Fr(a):a}}class Iv extends Rv{constructor(e=!1){super(!1,e)}set(e,n,i,r){let o=e[n];const s=et(e)&&Pu(n);if(!this._isShallow){const u=Qi(o);if(!In(i)&&!Qi(i)&&(o=mt(o),i=mt(i)),!s&&Ut(o)&&!Ut(i))return u||(o.value=i),!0}const a=s?Number(n)<e.length:xt(e,n),l=Reflect.set(e,n,i,Ut(e)?e:r);return e===mt(r)&&(a?Wi(i,o)&&Bi(e,"set",n,i):Bi(e,"add",n,i)),l}deleteProperty(e,n){const i=xt(e,n);e[n];const r=Reflect.deleteProperty(e,n);return r&&i&&Bi(e,"delete",n,void 0),r}has(e,n){const i=Reflect.has(e,n);return(!Zn(n)||!Cv.has(n))&&dn(e,"has",n),i}ownKeys(e){return dn(e,"iterate",et(e)?"length":mo),Reflect.ownKeys(e)}}class Ox extends Rv{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const Bx=new Iv,kx=new Ox,zx=new Iv(!0);const Ad=t=>t,$a=t=>Reflect.getPrototypeOf(t);function Vx(t,e,n){return function(...i){const r=this.__v_raw,o=mt(r),s=Zo(o),a=t==="entries"||t===Symbol.iterator&&s,l=t==="keys"&&s,u=r[t](...i),c=n?Ad:e?ss:jn;return!e&&dn(o,"iterate",l?Td:mo),Yt(Object.create(u),{next(){const{value:d,done:f}=u.next();return f?{value:d,done:f}:{value:a?[c(d[0]),c(d[1])]:c(d),done:f}}})}}function Ha(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function $x(t,e){const n={get(r){const o=this.__v_raw,s=mt(o),a=mt(r);t||(Wi(r,a)&&dn(s,"get",r),dn(s,"get",a));const{has:l}=$a(s),u=e?Ad:t?ss:jn;if(l.call(s,r))return u(o.get(r));if(l.call(s,a))return u(o.get(a));o!==s&&o.get(r)},get size(){const r=this.__v_raw;return!t&&dn(mt(r),"iterate",mo),r.size},has(r){const o=this.__v_raw,s=mt(o),a=mt(r);return t||(Wi(r,a)&&dn(s,"has",r),dn(s,"has",a)),r===a?o.has(r):o.has(r)||o.has(a)},forEach(r,o){const s=this,a=s.__v_raw,l=mt(a),u=e?Ad:t?ss:jn;return!t&&dn(l,"iterate",mo),a.forEach((c,d)=>r.call(o,u(c),u(d),s))}};return Yt(n,t?{add:Ha("add"),set:Ha("set"),delete:Ha("delete"),clear:Ha("clear")}:{add(r){!e&&!In(r)&&!Qi(r)&&(r=mt(r));const o=mt(this);return $a(o).has.call(o,r)||(o.add(r),Bi(o,"add",r,r)),this},set(r,o){!e&&!In(o)&&!Qi(o)&&(o=mt(o));const s=mt(this),{has:a,get:l}=$a(s);let u=a.call(s,r);u||(r=mt(r),u=a.call(s,r));const c=l.call(s,r);return s.set(r,o),u?Wi(o,c)&&Bi(s,"set",r,o):Bi(s,"add",r,o),this},delete(r){const o=mt(this),{has:s,get:a}=$a(o);let l=s.call(o,r);l||(r=mt(r),l=s.call(o,r)),a&&a.call(o,r);const u=o.delete(r);return l&&Bi(o,"delete",r,void 0),u},clear(){const r=mt(this),o=r.size!==0,s=r.clear();return o&&Bi(r,"clear",void 0,void 0),s}}),["keys","values","entries",Symbol.iterator].forEach(r=>{n[r]=Vx(r,t,e)}),n}function ph(t,e){const n=$x(t,e);return(i,r,o)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?i:Reflect.get(xt(n,r)&&r in i?n:i,r,o)}const Hx={get:ph(!1,!1)},Gx={get:ph(!1,!0)},Wx={get:ph(!0,!1)};const Pv=new WeakMap,Nv=new WeakMap,Dv=new WeakMap,Xx=new WeakMap;function Yx(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function qx(t){return t.__v_skip||!Object.isExtensible(t)?0:Yx(vx(t))}function Fr(t){return Qi(t)?t:mh(t,!1,Bx,Hx,Pv)}function Kx(t){return mh(t,!1,zx,Gx,Nv)}function Ql(t){return mh(t,!0,kx,Wx,Dv)}function mh(t,e,n,i,r){if(!yt(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const o=qx(t);if(o===0)return t;const s=r.get(t);if(s)return s;const a=new Proxy(t,o===2?i:n);return r.set(t,a),a}function Xi(t){return Qi(t)?Xi(t.__v_raw):!!(t&&t.__v_isReactive)}function Qi(t){return!!(t&&t.__v_isReadonly)}function In(t){return!!(t&&t.__v_isShallow)}function ku(t){return t?!!t.__v_raw:!1}function mt(t){const e=t&&t.__v_raw;return e?mt(e):t}function go(t){return!xt(t,"__v_skip")&&Object.isExtensible(t)&&mv(t,"__v_skip",!0),t}const jn=t=>yt(t)?Fr(t):t,ss=t=>yt(t)?Ql(t):t;function Ut(t){return t?t.__v_isRef===!0:!1}function Ce(t){return Lv(t,!1)}function Pr(t){return Lv(t,!0)}function Lv(t,e){return Ut(t)?t:new Zx(t,e)}class Zx{constructor(e,n){this.dep=new Ou,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:mt(e),this._value=n?e:jn(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,i=this.__v_isShallow||In(e)||Qi(e);e=i?e:mt(e),Wi(e,n)&&(this._rawValue=e,this._value=i?e:jn(e),this.dep.trigger())}}function he(t){return Ut(t)?t.value:t}function ht(t){return nt(t)?t():he(t)}const jx={get:(t,e,n)=>e==="__v_raw"?t:he(Reflect.get(t,e,n)),set:(t,e,n,i)=>{const r=t[e];return Ut(r)&&!Ut(n)?(r.value=n,!0):Reflect.set(t,e,n,i)}};function Fv(t){return Xi(t)?t:new Proxy(t,jx)}class Jx{constructor(e){this.__v_isRef=!0,this._value=void 0;const n=this.dep=new Ou,{get:i,set:r}=e(n.track.bind(n),n.trigger.bind(n));this._get=i,this._set=r}get value(){return this._value=this._get()}set value(e){this._set(e)}}function Qx(t){return new Jx(t)}function Uv(t){const e=et(t)?new Array(t.length):{};for(const n in t)e[n]=Ov(t,n);return e}class eb{constructor(e,n,i){this._object=e,this._key=n,this._defaultValue=i,this.__v_isRef=!0,this._value=void 0,this._raw=mt(e);let r=!0,o=e;if(!et(e)||!Pu(String(n)))do r=!ku(o)||In(o);while(r&&(o=o.__v_raw));this._shallow=r}get value(){let e=this._object[this._key];return this._shallow&&(e=he(e)),this._value=e===void 0?this._defaultValue:e}set value(e){if(this._shallow&&Ut(this._raw[this._key])){const n=this._object[this._key];if(Ut(n)){n.value=e;return}}this._object[this._key]=e}get dep(){return Nx(this._raw,this._key)}}class tb{constructor(e){this._getter=e,this.__v_isRef=!0,this.__v_isReadonly=!0,this._value=void 0}get value(){return this._value=this._getter()}}function bt(t,e,n){return Ut(t)?t:nt(t)?new tb(t):yt(t)&&arguments.length>1?Ov(t,e,n):Ce(t)}function Ov(t,e,n){return new eb(t,e,n)}class nb{constructor(e,n,i){this.fn=e,this.setter=n,this._value=void 0,this.dep=new Ou(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=na-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&Ft!==this)return Sv(this,!0),!0}get value(){const e=this.dep.track();return Ev(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function ib(t,e,n=!1){let i,r;return nt(t)?i=t:(i=t.get,r=t.set),new nb(i,r,n)}const Ga={},eu=new WeakMap;let no;function rb(t,e=!1,n=no){if(n){let i=eu.get(n);i||eu.set(n,i=[]),i.push(t)}}function ob(t,e,n=Pt){const{immediate:i,deep:r,once:o,scheduler:s,augmentJob:a,call:l}=n,u=y=>r?y:In(y)||r===!1||r===0?ki(y,1):ki(y);let c,d,f,h,m=!1,v=!1;if(Ut(t)?(d=()=>t.value,m=In(t)):Xi(t)?(d=()=>u(t),m=!0):et(t)?(v=!0,m=t.some(y=>Xi(y)||In(y)),d=()=>t.map(y=>{if(Ut(y))return y.value;if(Xi(y))return u(y);if(nt(y))return l?l(y,2):y()})):nt(t)?e?d=l?()=>l(t,2):t:d=()=>{if(f){ji();try{f()}finally{Ji()}}const y=no;no=c;try{return l?l(t,3,[h]):t(h)}finally{no=y}}:d=mi,e&&r){const y=d,I=r===!0?1/0:r;d=()=>ki(y(),I)}const g=Uu(),p=()=>{c.stop(),g&&g.active&&uh(g.effects,c)};if(o&&e){const y=e;e=(...I)=>{y(...I),p()}}let b=v?new Array(t.length).fill(Ga):Ga;const M=y=>{if(!(!(c.flags&1)||!c.dirty&&!y))if(e){const I=c.run();if(r||m||(v?I.some((D,B)=>Wi(D,b[B])):Wi(I,b))){f&&f();const D=no;no=c;try{const B=[I,b===Ga?void 0:v&&b[0]===Ga?[]:b,h];b=I,l?l(e,3,B):e(...B)}finally{no=D}}}else c.run()};return a&&a(M),c=new xv(d),c.scheduler=s?()=>s(M,!1):M,h=y=>rb(y,!1,c),f=c.onStop=()=>{const y=eu.get(c);if(y){if(l)l(y,4);else for(const I of y)I();eu.delete(c)}},e?i?M(!0):b=c.run():s?s(M.bind(null,!0),!0):c.run(),p.pause=c.pause.bind(c),p.resume=c.resume.bind(c),p.stop=p,p}function ki(t,e=1/0,n){if(e<=0||!yt(t)||t.__v_skip||(n=n||new Map,(n.get(t)||0)>=e))return t;if(n.set(t,e),e--,Ut(t))ki(t.value,e,n);else if(et(t))for(let i=0;i<t.length;i++)ki(t[i],e,n);else if(dv(t)||Zo(t))t.forEach(i=>{ki(i,e,n)});else if(pv(t)){for(const i in t)ki(t[i],e,n);for(const i of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,i)&&ki(t[i],e,n)}return t}function Ra(t,e,n,i){try{return i?t(...i):t()}catch(r){zu(r,e,n)}}function Jn(t,e,n,i){if(nt(t)){const r=Ra(t,e,n,i);return r&&fv(r)&&r.catch(o=>{zu(o,e,n)}),r}if(et(t)){const r=[];for(let o=0;o<t.length;o++)r.push(Jn(t[o],e,n,i));return r}}function zu(t,e,n,i=!0){const r=e?e.vnode:null,{errorHandler:o,throwUnhandledErrorInProduction:s}=e&&e.appContext.config||Pt;if(e){let a=e.parent;const l=e.proxy,u=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const c=a.ec;if(c){for(let d=0;d<c.length;d++)if(c[d](t,l,u)===!1)return}a=a.parent}if(o){ji(),Ra(o,null,10,[t,l,u]),Ji();return}}sb(t,n,r,i,s)}function sb(t,e,n,i=!0,r=!1){if(r)throw t;console.error(t)}const vn=[];let si=-1;const jo=[];let Er=null,qo=0;const Bv=Promise.resolve();let tu=null;function pn(t){const e=tu||Bv;return t?e.then(this?t.bind(this):t):e}function ab(t){let e=si+1,n=vn.length;for(;e<n;){const i=e+n>>>1,r=vn[i],o=ra(r);o<t||o===t&&r.flags&2?e=i+1:n=i}return e}function gh(t){if(!(t.flags&1)){const e=ra(t),n=vn[vn.length-1];!n||!(t.flags&2)&&e>=ra(n)?vn.push(t):vn.splice(ab(e),0,t),t.flags|=1,kv()}}function kv(){tu||(tu=Bv.then(Vv))}function lb(t){et(t)?jo.push(...t):Er&&t.id===-1?Er.splice(qo+1,0,t):t.flags&1||(jo.push(t),t.flags|=1),kv()}function _p(t,e,n=si+1){for(;n<vn.length;n++){const i=vn[n];if(i&&i.flags&2){if(t&&i.id!==t.uid)continue;vn.splice(n,1),n--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function zv(t){if(jo.length){const e=[...new Set(jo)].sort((n,i)=>ra(n)-ra(i));if(jo.length=0,Er){Er.push(...e);return}for(Er=e,qo=0;qo<Er.length;qo++){const n=Er[qo];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Er=null,qo=0}}const ra=t=>t.id==null?t.flags&2?-1:1/0:t.id;function Vv(t){try{for(si=0;si<vn.length;si++){const e=vn[si];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Ra(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;si<vn.length;si++){const e=vn[si];e&&(e.flags&=-2)}si=-1,vn.length=0,zv(),tu=null,(vn.length||jo.length)&&Vv()}}let tn=null,$v=null;function nu(t){const e=tn;return tn=t,$v=t&&t.type.__scopeId||null,e}function cn(t,e=tn,n){if(!e||t._n)return t;const i=(...r)=>{i._d&&ou(-1);const o=nu(e);let s;try{s=t(...r)}finally{nu(o),i._d&&ou(1)}return s};return i._n=!0,i._c=!0,i._d=!0,i}function Nr(t,e){if(tn===null)return t;const n=Xu(tn),i=t.dirs||(t.dirs=[]);for(let r=0;r<e.length;r++){let[o,s,a,l=Pt]=e[r];o&&(nt(o)&&(o={mounted:o,updated:o}),o.deep&&ki(s),i.push({dir:o,instance:n,value:s,oldValue:void 0,arg:a,modifiers:l}))}return t}function Xr(t,e,n,i){const r=t.dirs,o=e&&e.dirs;for(let s=0;s<r.length;s++){const a=r[s];o&&(a.oldValue=o[s].value);let l=a.dir[i];l&&(ji(),Jn(l,n,8,[t.el,a,t,e]),Ji())}}function Ur(t,e){if(hn){let n=hn.provides;const i=hn.parent&&hn.parent.provides;i===n&&(n=hn.provides=Object.create(i)),n[t]=e}}function Pn(t,e,n=!1){const i=Si();if(i||vo){let r=vo?vo._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(r&&t in r)return r[t];if(arguments.length>1)return n&&nt(e)?e.call(i&&i.proxy):e}}function ub(){return!!(Si()||vo)}const cb=Symbol.for("v-scx"),db=()=>Pn(cb);function Hv(t,e){return vh(t,null,e)}function lt(t,e,n){return vh(t,e,n)}function vh(t,e,n=Pt){const{immediate:i,deep:r,flush:o,once:s}=n,a=Yt({},n),l=e&&i||!e&&o!=="post";let u;if(la){if(o==="sync"){const h=db();u=h.__watcherHandles||(h.__watcherHandles=[])}else if(!l){const h=()=>{};return h.stop=mi,h.resume=mi,h.pause=mi,h}}const c=hn;a.call=(h,m,v)=>Jn(h,c,m,v);let d=!1;o==="post"?a.scheduler=h=>{ln(h,c&&c.suspense)}:o!=="sync"&&(d=!0,a.scheduler=(h,m)=>{m?h():gh(h)}),a.augmentJob=h=>{e&&(h.flags|=4),d&&(h.flags|=2,c&&(h.id=c.uid,h.i=c))};const f=ob(t,e,a);return la&&(u?u.push(f):l&&f()),f}function fb(t,e,n){const i=this.proxy,r=Ot(t)?t.includes(".")?Gv(i,t):()=>i[t]:t.bind(i,i);let o;nt(e)?o=e:(o=e.handler,n=e);const s=Ia(this),a=vh(r,o.bind(i),n);return s(),a}function Gv(t,e){const n=e.split(".");return()=>{let i=t;for(let r=0;r<n.length&&i;r++)i=i[n[r]];return i}}const Wv=Symbol("_vte"),Xv=t=>t.__isTeleport,qs=t=>t&&(t.disabled||t.disabled===""),yp=t=>t&&(t.defer||t.defer===""),xp=t=>typeof SVGElement<"u"&&t instanceof SVGElement,bp=t=>typeof MathMLElement=="function"&&t instanceof MathMLElement,Cd=(t,e)=>{const n=t&&t.to;return Ot(n)?e?e(n):null:n},Yv={name:"Teleport",__isTeleport:!0,process(t,e,n,i,r,o,s,a,l,u){const{mc:c,pc:d,pbc:f,o:{insert:h,querySelector:m,createText:v,createComment:g}}=u,p=qs(e.props);let{shapeFlag:b,children:M,dynamicChildren:y}=e;if(t==null){const I=e.el=v(""),D=e.anchor=v("");h(I,n,i),h(D,n,i);const B=(x,R)=>{b&16&&c(M,x,R,r,o,s,a,l)},_=()=>{const x=e.target=Cd(e.props,m),R=Rd(x,e,v,h);x&&(s!=="svg"&&xp(x)?s="svg":s!=="mathml"&&bp(x)&&(s="mathml"),r&&r.isCE&&(r.ce._teleportTargets||(r.ce._teleportTargets=new Set)).add(x),p||(B(x,R),Nl(e,!1)))};p&&(B(n,D),Nl(e,!0)),yp(e.props)?(e.el.__isMounted=!1,ln(()=>{_(),delete e.el.__isMounted},o)):_()}else{if(yp(e.props)&&t.el.__isMounted===!1){ln(()=>{Yv.process(t,e,n,i,r,o,s,a,l,u)},o);return}e.el=t.el,e.targetStart=t.targetStart;const I=e.anchor=t.anchor,D=e.target=t.target,B=e.targetAnchor=t.targetAnchor,_=qs(t.props),x=_?n:D,R=_?I:B;if(s==="svg"||xp(D)?s="svg":(s==="mathml"||bp(D))&&(s="mathml"),y?(f(t.dynamicChildren,y,x,r,o,s,a),Sh(t,e,!0)):l||d(t,e,x,R,r,o,s,a,!1),p)_?e.props&&t.props&&e.props.to!==t.props.to&&(e.props.to=t.props.to):Wa(e,n,I,u,1);else if((e.props&&e.props.to)!==(t.props&&t.props.to)){const T=e.target=Cd(e.props,m);T&&Wa(e,T,null,u,0)}else _&&Wa(e,D,B,u,1);Nl(e,p)}},remove(t,e,n,{um:i,o:{remove:r}},o){const{shapeFlag:s,children:a,anchor:l,targetStart:u,targetAnchor:c,target:d,props:f}=t;if(d&&(r(u),r(c)),o&&r(l),s&16){const h=o||!qs(f);for(let m=0;m<a.length;m++){const v=a[m];i(v,e,n,h,!!v.dynamicChildren)}}},move:Wa,hydrate:hb};function Wa(t,e,n,{o:{insert:i},m:r},o=2){o===0&&i(t.targetAnchor,e,n);const{el:s,anchor:a,shapeFlag:l,children:u,props:c}=t,d=o===2;if(d&&i(s,e,n),(!d||qs(c))&&l&16)for(let f=0;f<u.length;f++)r(u[f],e,n,2);d&&i(a,e,n)}function hb(t,e,n,i,r,o,{o:{nextSibling:s,parentNode:a,querySelector:l,insert:u,createText:c}},d){function f(g,p){let b=p;for(;b;){if(b&&b.nodeType===8){if(b.data==="teleport start anchor")e.targetStart=b;else if(b.data==="teleport anchor"){e.targetAnchor=b,g._lpa=e.targetAnchor&&s(e.targetAnchor);break}}b=s(b)}}function h(g,p){p.anchor=d(s(g),p,a(g),n,i,r,o)}const m=e.target=Cd(e.props,l),v=qs(e.props);if(m){const g=m._lpa||m.firstChild;e.shapeFlag&16&&(v?(h(t,e),f(m,g),e.targetAnchor||Rd(m,e,c,u,a(t)===m?t:null)):(e.anchor=s(t),f(m,g),e.targetAnchor||Rd(m,e,c,u),d(g&&s(g),e,m,n,i,r,o))),Nl(e,v)}else v&&e.shapeFlag&16&&(h(t,e),e.targetStart=t,e.targetAnchor=s(t));return e.anchor&&s(e.anchor)}const _h=Yv;function Nl(t,e){const n=t.ctx;if(n&&n.ut){let i,r;for(e?(i=t.el,r=t.anchor):(i=t.targetStart,r=t.targetAnchor);i&&i!==r;)i.nodeType===1&&i.setAttribute("data-v-owner",n.uid),i=i.nextSibling;n.ut()}}function Rd(t,e,n,i,r=null){const o=e.targetStart=n(""),s=e.targetAnchor=n("");return o[Wv]=s,t&&(i(o,t,r),i(s,t,r)),s}const ai=Symbol("_leaveCb"),Ss=Symbol("_enterCb");function pb(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return bn(()=>{t.isMounted=!0}),Hr(()=>{t.isUnmounting=!0}),t}const Fn=[Function,Array],qv={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Fn,onEnter:Fn,onAfterEnter:Fn,onEnterCancelled:Fn,onBeforeLeave:Fn,onLeave:Fn,onAfterLeave:Fn,onLeaveCancelled:Fn,onBeforeAppear:Fn,onAppear:Fn,onAfterAppear:Fn,onAppearCancelled:Fn},Kv=t=>{const e=t.subTree;return e.component?Kv(e.component):e},mb={name:"BaseTransition",props:qv,setup(t,{slots:e}){const n=Si(),i=pb();return()=>{const r=e.default&&Jv(e.default(),!0);if(!r||!r.length)return;const o=Zv(r),s=mt(t),{mode:a}=s;if(i.isLeaving)return xc(o);const l=Sp(o);if(!l)return xc(o);let u=Id(l,s,i,n,d=>u=d);l.type!==fn&&oa(l,u);let c=n.subTree&&Sp(n.subTree);if(c&&c.type!==fn&&!ro(c,l)&&Kv(n).type!==fn){let d=Id(c,s,i,n);if(oa(c,d),a==="out-in"&&l.type!==fn)return i.isLeaving=!0,d.afterLeave=()=>{i.isLeaving=!1,n.job.flags&8||n.update(),delete d.afterLeave,c=void 0},xc(o);a==="in-out"&&l.type!==fn?d.delayLeave=(f,h,m)=>{const v=jv(i,c);v[String(c.key)]=c,f[ai]=()=>{h(),f[ai]=void 0,delete u.delayedLeave,c=void 0},u.delayedLeave=()=>{m(),delete u.delayedLeave,c=void 0}}:c=void 0}else c&&(c=void 0);return o}}};function Zv(t){let e=t[0];if(t.length>1){for(const n of t)if(n.type!==fn){e=n;break}}return e}const gb=mb;function jv(t,e){const{leavingVNodes:n}=t;let i=n.get(e.type);return i||(i=Object.create(null),n.set(e.type,i)),i}function Id(t,e,n,i,r){const{appear:o,mode:s,persisted:a=!1,onBeforeEnter:l,onEnter:u,onAfterEnter:c,onEnterCancelled:d,onBeforeLeave:f,onLeave:h,onAfterLeave:m,onLeaveCancelled:v,onBeforeAppear:g,onAppear:p,onAfterAppear:b,onAppearCancelled:M}=e,y=String(t.key),I=jv(n,t),D=(x,R)=>{x&&Jn(x,i,9,R)},B=(x,R)=>{const T=R[1];D(x,R),et(x)?x.every(A=>A.length<=1)&&T():x.length<=1&&T()},_={mode:s,persisted:a,beforeEnter(x){let R=l;if(!n.isMounted)if(o)R=g||l;else return;x[ai]&&x[ai](!0);const T=I[y];T&&ro(t,T)&&T.el[ai]&&T.el[ai](),D(R,[x])},enter(x){if(I[y]===t)return;let R=u,T=c,A=d;if(!n.isMounted)if(o)R=p||u,T=b||c,A=M||d;else return;let X=!1;x[Ss]=k=>{X||(X=!0,k?D(A,[x]):D(T,[x]),_.delayedLeave&&_.delayedLeave(),x[Ss]=void 0)};const E=x[Ss].bind(null,!1);R?B(R,[x,E]):E()},leave(x,R){const T=String(t.key);if(x[Ss]&&x[Ss](!0),n.isUnmounting)return R();D(f,[x]);let A=!1;x[ai]=E=>{A||(A=!0,R(),E?D(v,[x]):D(m,[x]),x[ai]=void 0,I[T]===t&&delete I[T])};const X=x[ai].bind(null,!1);I[T]=t,h?B(h,[x,X]):X()},clone(x){const R=Id(x,e,n,i,r);return r&&r(R),R}};return _}function xc(t){if(Vu(t))return t=Or(t),t.children=null,t}function Sp(t){if(!Vu(t))return Xv(t.type)&&t.children?Zv(t.children):t;if(t.component)return t.component.subTree;const{shapeFlag:e,children:n}=t;if(n){if(e&16)return n[0];if(e&32&&nt(n.default))return n.default()}}function oa(t,e){t.shapeFlag&6&&t.component?(t.transition=e,oa(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Jv(t,e=!1,n){let i=[],r=0;for(let o=0;o<t.length;o++){let s=t[o];const a=n==null?s.key:String(n)+String(s.key!=null?s.key:o);s.type===it?(s.patchFlag&128&&r++,i=i.concat(Jv(s.children,e,a))):(e||s.type!==fn)&&i.push(a!=null?Or(s,{key:a}):s)}if(r>1)for(let o=0;o<i.length;o++)i[o].patchFlag=-2;return i}function Nt(t,e){return nt(t)?Yt({name:t.name},e,{setup:t}):t}function Qv(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function Mp(t,e){let n;return!!((n=Object.getOwnPropertyDescriptor(t,e))&&!n.configurable)}const iu=new WeakMap;function Ks(t,e,n,i,r=!1){if(et(t)){t.forEach((v,g)=>Ks(v,e&&(et(e)?e[g]:e),n,i,r));return}if(Jo(i)&&!r){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&Ks(t,e,n,i.component.subTree);return}const o=i.shapeFlag&4?Xu(i.component):i.el,s=r?null:o,{i:a,r:l}=t,u=e&&e.r,c=a.refs===Pt?a.refs={}:a.refs,d=a.setupState,f=mt(d),h=d===Pt?cv:v=>Mp(c,v)?!1:xt(f,v),m=(v,g)=>!(g&&Mp(c,g));if(u!=null&&u!==l){if(wp(e),Ot(u))c[u]=null,h(u)&&(d[u]=null);else if(Ut(u)){const v=e;m(u,v.k)&&(u.value=null),v.k&&(c[v.k]=null)}}if(nt(l))Ra(l,a,12,[s,c]);else{const v=Ot(l),g=Ut(l);if(v||g){const p=()=>{if(t.f){const b=v?h(l)?d[l]:c[l]:m()||!t.k?l.value:c[t.k];if(r)et(b)&&uh(b,o);else if(et(b))b.includes(o)||b.push(o);else if(v)c[l]=[o],h(l)&&(d[l]=c[l]);else{const M=[o];m(l,t.k)&&(l.value=M),t.k&&(c[t.k]=M)}}else v?(c[l]=s,h(l)&&(d[l]=s)):g&&(m(l,t.k)&&(l.value=s),t.k&&(c[t.k]=s))};if(s){const b=()=>{p(),iu.delete(t)};b.id=-1,iu.set(t,b),ln(b,n)}else wp(t),p()}}}function wp(t){const e=iu.get(t);e&&(e.flags|=8,iu.delete(t))}Lu().requestIdleCallback;Lu().cancelIdleCallback;const Jo=t=>!!t.type.__asyncLoader,Vu=t=>t.type.__isKeepAlive;function vb(t,e){e0(t,"a",e)}function _b(t,e){e0(t,"da",e)}function e0(t,e,n=hn){const i=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if($u(e,i,n),n){let r=n.parent;for(;r&&r.parent;)Vu(r.parent.vnode)&&yb(i,e,n,r),r=r.parent}}function yb(t,e,n,i){const r=$u(e,t,i,!0);Hu(()=>{uh(i[e],r)},n)}function $u(t,e,n=hn,i=!1){if(n){const r=n[t]||(n[t]=[]),o=e.__weh||(e.__weh=(...s)=>{ji();const a=Ia(n),l=Jn(e,n,t,s);return a(),Ji(),l});return i?r.unshift(o):r.push(o),o}}const ar=t=>(e,n=hn)=>{(!la||t==="sp")&&$u(t,(...i)=>e(...i),n)},t0=ar("bm"),bn=ar("m"),xb=ar("bu"),bb=ar("u"),Hr=ar("bum"),Hu=ar("um"),Sb=ar("sp"),Mb=ar("rtg"),wb=ar("rtc");function Eb(t,e=hn){$u("ec",t,e)}const n0="components";function i0(t,e){return s0(n0,t,!0,e)||t}const r0=Symbol.for("v-ndc");function o0(t){return Ot(t)?s0(n0,t,!1)||t:t||r0}function s0(t,e,n=!0,i=!1){const r=tn||hn;if(r){const o=r.type;{const a=u1(o,!1);if(a&&(a===e||a===Bn(e)||a===Du(Bn(e))))return o}const s=Ep(r[t]||o[t],e)||Ep(r.appContext[t],e);return!s&&i?o:s}}function Ep(t,e){return t&&(t[e]||t[Bn(e)]||t[Du(Bn(e))])}function Ht(t,e,n,i){let r;const o=n&&n[i],s=et(t);if(s||Ot(t)){const a=s&&Xi(t);let l=!1,u=!1;a&&(l=!In(t),u=Qi(t),t=Bu(t)),r=new Array(t.length);for(let c=0,d=t.length;c<d;c++)r[c]=e(l?u?ss(jn(t[c])):jn(t[c]):t[c],c,void 0,o&&o[c])}else if(typeof t=="number"){r=new Array(t);for(let a=0;a<t;a++)r[a]=e(a+1,a,void 0,o&&o[a])}else if(yt(t))if(t[Symbol.iterator])r=Array.from(t,(a,l)=>e(a,l,void 0,o&&o[l]));else{const a=Object.keys(t);r=new Array(a.length);for(let l=0,u=a.length;l<u;l++){const c=a[l];r[l]=e(t[c],c,l,o&&o[l])}}else r=[];return n&&(n[i]=r),r}function Tb(t,e){for(let n=0;n<e.length;n++){const i=e[n];if(et(i))for(let r=0;r<i.length;r++)t[i[r].name]=i[r].fn;else i&&(t[i.name]=i.key?(...r)=>{const o=i.fn(...r);return o&&(o.key=i.key),o}:i.fn)}return t}function er(t,e,n={},i,r){if(tn.ce||tn.parent&&Jo(tn.parent)&&tn.parent.ce){const u=Object.keys(n).length>0;return e!=="default"&&(n.name=e),ce(),Jt(it,null,[tt("slot",n,i&&i())],u?-2:64)}let o=t[e];o&&o._c&&(o._d=!1),ce();const s=o&&a0(o(n)),a=n.key||s&&s.key,l=Jt(it,{key:(a&&!Zn(a)?a:`_${e}`)+(!s&&i?"_fb":"")},s||(i?i():[]),s&&t._===1?64:-2);return l.scopeId&&(l.slotScopeIds=[l.scopeId+"-s"]),o&&o._c&&(o._d=!0),l}function a0(t){return t.some(e=>sa(e)?!(e.type===fn||e.type===it&&!a0(e.children)):!0)?t:null}const Pd=t=>t?C0(t)?Xu(t):Pd(t.parent):null,Zs=Yt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Pd(t.parent),$root:t=>Pd(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>d0(t),$forceUpdate:t=>t.f||(t.f=()=>{gh(t.update)}),$nextTick:t=>t.n||(t.n=pn.bind(t.proxy)),$watch:t=>fb.bind(t)}),bc=(t,e)=>t!==Pt&&!t.__isScriptSetup&&xt(t,e),Ab={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:i,data:r,props:o,accessCache:s,type:a,appContext:l}=t;if(e[0]!=="$"){const f=s[e];if(f!==void 0)switch(f){case 1:return i[e];case 2:return r[e];case 4:return n[e];case 3:return o[e]}else{if(bc(i,e))return s[e]=1,i[e];if(r!==Pt&&xt(r,e))return s[e]=2,r[e];if(xt(o,e))return s[e]=3,o[e];if(n!==Pt&&xt(n,e))return s[e]=4,n[e];Nd&&(s[e]=0)}}const u=Zs[e];let c,d;if(u)return e==="$attrs"&&dn(t.attrs,"get",""),u(t);if((c=a.__cssModules)&&(c=c[e]))return c;if(n!==Pt&&xt(n,e))return s[e]=4,n[e];if(d=l.config.globalProperties,xt(d,e))return d[e]},set({_:t},e,n){const{data:i,setupState:r,ctx:o}=t;return bc(r,e)?(r[e]=n,!0):i!==Pt&&xt(i,e)?(i[e]=n,!0):xt(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(o[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:i,appContext:r,props:o,type:s}},a){let l;return!!(n[a]||t!==Pt&&a[0]!=="$"&&xt(t,a)||bc(e,a)||xt(o,a)||xt(i,a)||xt(Zs,a)||xt(r.config.globalProperties,a)||(l=s.__cssModules)&&l[a])},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:xt(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function l0(){return u0().slots}function yh(){return u0().attrs}function u0(t){const e=Si();return e.setupContext||(e.setupContext=I0(e))}function Tp(t){return et(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}function Cb(t,e){const n={};for(const i in t)e.includes(i)||Object.defineProperty(n,i,{enumerable:!0,get:()=>t[i]});return n}let Nd=!0;function Rb(t){const e=d0(t),n=t.proxy,i=t.ctx;Nd=!1,e.beforeCreate&&Ap(e.beforeCreate,t,"bc");const{data:r,computed:o,methods:s,watch:a,provide:l,inject:u,created:c,beforeMount:d,mounted:f,beforeUpdate:h,updated:m,activated:v,deactivated:g,beforeDestroy:p,beforeUnmount:b,destroyed:M,unmounted:y,render:I,renderTracked:D,renderTriggered:B,errorCaptured:_,serverPrefetch:x,expose:R,inheritAttrs:T,components:A,directives:X,filters:E}=e;if(u&&Ib(u,i,null),s)for(const N in s){const U=s[N];nt(U)&&(i[N]=U.bind(n))}if(r){const N=r.call(n,n);yt(N)&&(t.data=Fr(N))}if(Nd=!0,o)for(const N in o){const U=o[N],H=nt(U)?U.bind(n,n):nt(U.get)?U.get.bind(n,n):mi,G=!nt(U)&&nt(U.set)?U.set.bind(n):mi,ne=Re({get:H,set:G});Object.defineProperty(i,N,{enumerable:!0,configurable:!0,get:()=>ne.value,set:re=>ne.value=re})}if(a)for(const N in a)c0(a[N],i,n,N);if(l){const N=nt(l)?l.call(n):l;Reflect.ownKeys(N).forEach(U=>{Ur(U,N[U])})}c&&Ap(c,t,"c");function C(N,U){et(U)?U.forEach(H=>N(H.bind(n))):U&&N(U.bind(n))}if(C(t0,d),C(bn,f),C(xb,h),C(bb,m),C(vb,v),C(_b,g),C(Eb,_),C(wb,D),C(Mb,B),C(Hr,b),C(Hu,y),C(Sb,x),et(R))if(R.length){const N=t.exposed||(t.exposed={});R.forEach(U=>{Object.defineProperty(N,U,{get:()=>n[U],set:H=>n[U]=H,enumerable:!0})})}else t.exposed||(t.exposed={});I&&t.render===mi&&(t.render=I),T!=null&&(t.inheritAttrs=T),A&&(t.components=A),X&&(t.directives=X),x&&Qv(t)}function Ib(t,e,n=mi){et(t)&&(t=Dd(t));for(const i in t){const r=t[i];let o;yt(r)?"default"in r?o=Pn(r.from||i,r.default,!0):o=Pn(r.from||i):o=Pn(r),Ut(o)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>o.value,set:s=>o.value=s}):e[i]=o}}function Ap(t,e,n){Jn(et(t)?t.map(i=>i.bind(e.proxy)):t.bind(e.proxy),e,n)}function c0(t,e,n,i){let r=i.includes(".")?Gv(n,i):()=>n[i];if(Ot(t)){const o=e[t];nt(o)&&lt(r,o)}else if(nt(t))lt(r,t.bind(n));else if(yt(t))if(et(t))t.forEach(o=>c0(o,e,n,i));else{const o=nt(t.handler)?t.handler.bind(n):e[t.handler];nt(o)&&lt(r,o,t)}}function d0(t){const e=t.type,{mixins:n,extends:i}=e,{mixins:r,optionsCache:o,config:{optionMergeStrategies:s}}=t.appContext,a=o.get(e);let l;return a?l=a:!r.length&&!n&&!i?l=e:(l={},r.length&&r.forEach(u=>ru(l,u,s,!0)),ru(l,e,s)),yt(e)&&o.set(e,l),l}function ru(t,e,n,i=!1){const{mixins:r,extends:o}=e;o&&ru(t,o,n,!0),r&&r.forEach(s=>ru(t,s,n,!0));for(const s in e)if(!(i&&s==="expose")){const a=Pb[s]||n&&n[s];t[s]=a?a(t[s],e[s]):e[s]}return t}const Pb={data:Cp,props:Rp,emits:Rp,methods:Us,computed:Us,beforeCreate:mn,created:mn,beforeMount:mn,mounted:mn,beforeUpdate:mn,updated:mn,beforeDestroy:mn,beforeUnmount:mn,destroyed:mn,unmounted:mn,activated:mn,deactivated:mn,errorCaptured:mn,serverPrefetch:mn,components:Us,directives:Us,watch:Db,provide:Cp,inject:Nb};function Cp(t,e){return e?t?function(){return Yt(nt(t)?t.call(this,this):t,nt(e)?e.call(this,this):e)}:e:t}function Nb(t,e){return Us(Dd(t),Dd(e))}function Dd(t){if(et(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function mn(t,e){return t?[...new Set([].concat(t,e))]:e}function Us(t,e){return t?Yt(Object.create(null),t,e):e}function Rp(t,e){return t?et(t)&&et(e)?[...new Set([...t,...e])]:Yt(Object.create(null),Tp(t),Tp(e??{})):e}function Db(t,e){if(!t)return e;if(!e)return t;const n=Yt(Object.create(null),t);for(const i in e)n[i]=mn(t[i],e[i]);return n}function f0(){return{app:null,config:{isNativeTag:cv,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Lb=0;function Fb(t,e){return function(i,r=null){nt(i)||(i=Yt({},i)),r!=null&&!yt(r)&&(r=null);const o=f0(),s=new WeakSet,a=[];let l=!1;const u=o.app={_uid:Lb++,_component:i,_props:r,_container:null,_context:o,_instance:null,version:f1,get config(){return o.config},set config(c){},use(c,...d){return s.has(c)||(c&&nt(c.install)?(s.add(c),c.install(u,...d)):nt(c)&&(s.add(c),c(u,...d))),u},mixin(c){return o.mixins.includes(c)||o.mixins.push(c),u},component(c,d){return d?(o.components[c]=d,u):o.components[c]},directive(c,d){return d?(o.directives[c]=d,u):o.directives[c]},mount(c,d,f){if(!l){const h=u._ceVNode||tt(i,r);return h.appContext=o,f===!0?f="svg":f===!1&&(f=void 0),t(h,c,f),l=!0,u._container=c,c.__vue_app__=u,Xu(h.component)}},onUnmount(c){a.push(c)},unmount(){l&&(Jn(a,u._instance,16),t(null,u._container),delete u._container.__vue_app__)},provide(c,d){return o.provides[c]=d,u},runWithContext(c){const d=vo;vo=u;try{return c()}finally{vo=d}}};return u}}let vo=null;const Ub=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${Bn(e)}Modifiers`]||t[`${$r(e)}Modifiers`];function Ob(t,e,...n){if(t.isUnmounted)return;const i=t.vnode.props||Pt;let r=n;const o=e.startsWith("update:"),s=o&&Ub(i,e.slice(7));s&&(s.trim&&(r=n.map(c=>Ot(c)?c.trim():c)),s.number&&(r=n.map(xx)));let a,l=i[a=pc(e)]||i[a=pc(Bn(e))];!l&&o&&(l=i[a=pc($r(e))]),l&&Jn(l,t,6,r);const u=i[a+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Jn(u,t,6,r)}}const Bb=new WeakMap;function h0(t,e,n=!1){const i=n?Bb:e.emitsCache,r=i.get(t);if(r!==void 0)return r;const o=t.emits;let s={},a=!1;if(!nt(t)){const l=u=>{const c=h0(u,e,!0);c&&(a=!0,Yt(s,c))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!o&&!a?(yt(t)&&i.set(t,null),null):(et(o)?o.forEach(l=>s[l]=null):Yt(s,o),yt(t)&&i.set(t,s),s)}function Gu(t,e){return!t||!Iu(e)?!1:(e=e.slice(2).replace(/Once$/,""),xt(t,e[0].toLowerCase()+e.slice(1))||xt(t,$r(e))||xt(t,e))}function Ip(t){const{type:e,vnode:n,proxy:i,withProxy:r,propsOptions:[o],slots:s,attrs:a,emit:l,render:u,renderCache:c,props:d,data:f,setupState:h,ctx:m,inheritAttrs:v}=t,g=nu(t);let p,b;try{if(n.shapeFlag&4){const y=r||i,I=y;p=ui(u.call(I,y,c,d,h,f,m)),b=a}else{const y=e;p=ui(y.length>1?y(d,{attrs:a,slots:s,emit:l}):y(d,null)),b=e.props?a:kb(a)}}catch(y){js.length=0,zu(y,t,1),p=tt(fn)}let M=p;if(b&&v!==!1){const y=Object.keys(b),{shapeFlag:I}=M;y.length&&I&7&&(o&&y.some(lh)&&(b=zb(b,o)),M=Or(M,b,!1,!0))}return n.dirs&&(M=Or(M,null,!1,!0),M.dirs=M.dirs?M.dirs.concat(n.dirs):n.dirs),n.transition&&oa(M,n.transition),p=M,nu(g),p}const kb=t=>{let e;for(const n in t)(n==="class"||n==="style"||Iu(n))&&((e||(e={}))[n]=t[n]);return e},zb=(t,e)=>{const n={};for(const i in t)(!lh(i)||!(i.slice(9)in e))&&(n[i]=t[i]);return n};function Vb(t,e,n){const{props:i,children:r,component:o}=t,{props:s,children:a,patchFlag:l}=e,u=o.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return i?Pp(i,s,u):!!s;if(l&8){const c=e.dynamicProps;for(let d=0;d<c.length;d++){const f=c[d];if(p0(s,i,f)&&!Gu(u,f))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:i===s?!1:i?s?Pp(i,s,u):!0:!!s;return!1}function Pp(t,e,n){const i=Object.keys(e);if(i.length!==Object.keys(t).length)return!0;for(let r=0;r<i.length;r++){const o=i[r];if(p0(e,t,o)&&!Gu(n,o))return!0}return!1}function p0(t,e,n){const i=t[n],r=e[n];return n==="style"&&yt(i)&&yt(r)?!ch(i,r):i!==r}function $b({vnode:t,parent:e},n){for(;e;){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===t&&(i.el=t.el),i===t)(t=e.vnode).el=n,e=e.parent;else break}}const m0={},g0=()=>Object.create(m0),v0=t=>Object.getPrototypeOf(t)===m0;function Hb(t,e,n,i=!1){const r={},o=g0();t.propsDefaults=Object.create(null),_0(t,e,r,o);for(const s in t.propsOptions[0])s in r||(r[s]=void 0);n?t.props=i?r:Kx(r):t.type.props?t.props=r:t.props=o,t.attrs=o}function Gb(t,e,n,i){const{props:r,attrs:o,vnode:{patchFlag:s}}=t,a=mt(r),[l]=t.propsOptions;let u=!1;if((i||s>0)&&!(s&16)){if(s&8){const c=t.vnode.dynamicProps;for(let d=0;d<c.length;d++){let f=c[d];if(Gu(t.emitsOptions,f))continue;const h=e[f];if(l)if(xt(o,f))h!==o[f]&&(o[f]=h,u=!0);else{const m=Bn(f);r[m]=Ld(l,a,m,h,t,!1)}else h!==o[f]&&(o[f]=h,u=!0)}}}else{_0(t,e,r,o)&&(u=!0);let c;for(const d in a)(!e||!xt(e,d)&&((c=$r(d))===d||!xt(e,c)))&&(l?n&&(n[d]!==void 0||n[c]!==void 0)&&(r[d]=Ld(l,a,d,void 0,t,!0)):delete r[d]);if(o!==a)for(const d in o)(!e||!xt(e,d))&&(delete o[d],u=!0)}u&&Bi(t.attrs,"set","")}function _0(t,e,n,i){const[r,o]=t.propsOptions;let s=!1,a;if(e)for(let l in e){if(Gs(l))continue;const u=e[l];let c;r&&xt(r,c=Bn(l))?!o||!o.includes(c)?n[c]=u:(a||(a={}))[c]=u:Gu(t.emitsOptions,l)||(!(l in i)||u!==i[l])&&(i[l]=u,s=!0)}if(o){const l=mt(n),u=a||Pt;for(let c=0;c<o.length;c++){const d=o[c];n[d]=Ld(r,l,d,u[d],t,!xt(u,d))}}return s}function Ld(t,e,n,i,r,o){const s=t[n];if(s!=null){const a=xt(s,"default");if(a&&i===void 0){const l=s.default;if(s.type!==Function&&!s.skipFactory&&nt(l)){const{propsDefaults:u}=r;if(n in u)i=u[n];else{const c=Ia(r);i=u[n]=l.call(null,e),c()}}else i=l;r.ce&&r.ce._setProp(n,i)}s[0]&&(o&&!a?i=!1:s[1]&&(i===""||i===$r(n))&&(i=!0))}return i}const Wb=new WeakMap;function y0(t,e,n=!1){const i=n?Wb:e.propsCache,r=i.get(t);if(r)return r;const o=t.props,s={},a=[];let l=!1;if(!nt(t)){const c=d=>{l=!0;const[f,h]=y0(d,e,!0);Yt(s,f),h&&a.push(...h)};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}if(!o&&!l)return yt(t)&&i.set(t,Ko),Ko;if(et(o))for(let c=0;c<o.length;c++){const d=Bn(o[c]);Np(d)&&(s[d]=Pt)}else if(o)for(const c in o){const d=Bn(c);if(Np(d)){const f=o[c],h=s[d]=et(f)||nt(f)?{type:f}:Yt({},f),m=h.type;let v=!1,g=!0;if(et(m))for(let p=0;p<m.length;++p){const b=m[p],M=nt(b)&&b.name;if(M==="Boolean"){v=!0;break}else M==="String"&&(g=!1)}else v=nt(m)&&m.name==="Boolean";h[0]=v,h[1]=g,(v||xt(h,"default"))&&a.push(d)}}const u=[s,a];return yt(t)&&i.set(t,u),u}function Np(t){return t[0]!=="$"&&!Gs(t)}const xh=t=>t==="_"||t==="_ctx"||t==="$stable",bh=t=>et(t)?t.map(ui):[ui(t)],Xb=(t,e,n)=>{if(e._n)return e;const i=cn((...r)=>bh(e(...r)),n);return i._c=!1,i},x0=(t,e,n)=>{const i=t._ctx;for(const r in t){if(xh(r))continue;const o=t[r];if(nt(o))e[r]=Xb(r,o,i);else if(o!=null){const s=bh(o);e[r]=()=>s}}},b0=(t,e)=>{const n=bh(e);t.slots.default=()=>n},S0=(t,e,n)=>{for(const i in e)(n||!xh(i))&&(t[i]=e[i])},Yb=(t,e,n)=>{const i=t.slots=g0();if(t.vnode.shapeFlag&32){const r=e._;r?(S0(i,e,n),n&&mv(i,"_",r,!0)):x0(e,i)}else e&&b0(t,e)},qb=(t,e,n)=>{const{vnode:i,slots:r}=t;let o=!0,s=Pt;if(i.shapeFlag&32){const a=e._;a?n&&a===1?o=!1:S0(r,e,n):(o=!e.$stable,x0(e,r)),s=e}else e&&(b0(t,e),s={default:1});if(o)for(const a in r)!xh(a)&&s[a]==null&&delete r[a]},ln=Qb;function Kb(t){return Zb(t)}function Zb(t,e){const n=Lu();n.__VUE__=!0;const{insert:i,remove:r,patchProp:o,createElement:s,createText:a,createComment:l,setText:u,setElementText:c,parentNode:d,nextSibling:f,setScopeId:h=mi,insertStaticContent:m}=t,v=($,W,F,O=null,z=null,Y=null,S=void 0,Z=null,J=!!W.dynamicChildren)=>{if($===W)return;$&&!ro($,W)&&(O=j($),re($,z,Y,!0),$=null),W.patchFlag===-2&&(J=!1,W.dynamicChildren=null);const{type:ee,ref:ie,shapeFlag:P}=W;switch(ee){case Wu:g($,W,F,O);break;case fn:p($,W,F,O);break;case Mc:$==null&&b(W,F,O,S);break;case it:A($,W,F,O,z,Y,S,Z,J);break;default:P&1?I($,W,F,O,z,Y,S,Z,J):P&6?X($,W,F,O,z,Y,S,Z,J):(P&64||P&128)&&ee.process($,W,F,O,z,Y,S,Z,J,Se)}ie!=null&&z?Ks(ie,$&&$.ref,Y,W||$,!W):ie==null&&$&&$.ref!=null&&Ks($.ref,null,Y,$,!0)},g=($,W,F,O)=>{if($==null)i(W.el=a(W.children),F,O);else{const z=W.el=$.el;W.children!==$.children&&u(z,W.children)}},p=($,W,F,O)=>{$==null?i(W.el=l(W.children||""),F,O):W.el=$.el},b=($,W,F,O)=>{[$.el,$.anchor]=m($.children,W,F,O,$.el,$.anchor)},M=({el:$,anchor:W},F,O)=>{let z;for(;$&&$!==W;)z=f($),i($,F,O),$=z;i(W,F,O)},y=({el:$,anchor:W})=>{let F;for(;$&&$!==W;)F=f($),r($),$=F;r(W)},I=($,W,F,O,z,Y,S,Z,J)=>{if(W.type==="svg"?S="svg":W.type==="math"&&(S="mathml"),$==null)D(W,F,O,z,Y,S,Z,J);else{const ee=$.el&&$.el._isVueCE?$.el:null;try{ee&&ee._beginPatch(),x($,W,z,Y,S,Z,J)}finally{ee&&ee._endPatch()}}},D=($,W,F,O,z,Y,S,Z)=>{let J,ee;const{props:ie,shapeFlag:P,transition:w,dirs:K}=$;if(J=$.el=s($.type,Y,ie&&ie.is,ie),P&8?c(J,$.children):P&16&&_($.children,J,null,O,z,Sc($,Y),S,Z),K&&Xr($,null,O,"created"),B(J,$,$.scopeId,S,O),ie){for(const ge in ie)ge!=="value"&&!Gs(ge)&&o(J,ge,null,ie[ge],Y,O);"value"in ie&&o(J,"value",null,ie.value,Y),(ee=ie.onVnodeBeforeMount)&&ii(ee,O,$)}K&&Xr($,null,O,"beforeMount");const ae=jb(z,w);ae&&w.beforeEnter(J),i(J,W,F),((ee=ie&&ie.onVnodeMounted)||ae||K)&&ln(()=>{ee&&ii(ee,O,$),ae&&w.enter(J),K&&Xr($,null,O,"mounted")},z)},B=($,W,F,O,z)=>{if(F&&h($,F),O)for(let Y=0;Y<O.length;Y++)h($,O[Y]);if(z){let Y=z.subTree;if(W===Y||E0(Y.type)&&(Y.ssContent===W||Y.ssFallback===W)){const S=z.vnode;B($,S,S.scopeId,S.slotScopeIds,z.parent)}}},_=($,W,F,O,z,Y,S,Z,J=0)=>{for(let ee=J;ee<$.length;ee++){const ie=$[ee]=Z?Oi($[ee]):ui($[ee]);v(null,ie,W,F,O,z,Y,S,Z)}},x=($,W,F,O,z,Y,S)=>{const Z=W.el=$.el;let{patchFlag:J,dynamicChildren:ee,dirs:ie}=W;J|=$.patchFlag&16;const P=$.props||Pt,w=W.props||Pt;let K;if(F&&Yr(F,!1),(K=w.onVnodeBeforeUpdate)&&ii(K,F,W,$),ie&&Xr(W,$,F,"beforeUpdate"),F&&Yr(F,!0),(P.innerHTML&&w.innerHTML==null||P.textContent&&w.textContent==null)&&c(Z,""),ee?R($.dynamicChildren,ee,Z,F,O,Sc(W,z),Y):S||U($,W,Z,null,F,O,Sc(W,z),Y,!1),J>0){if(J&16)T(Z,P,w,F,z);else if(J&2&&P.class!==w.class&&o(Z,"class",null,w.class,z),J&4&&o(Z,"style",P.style,w.style,z),J&8){const ae=W.dynamicProps;for(let ge=0;ge<ae.length;ge++){const de=ae[ge],Ue=P[de],Ie=w[de];(Ie!==Ue||de==="value")&&o(Z,de,Ue,Ie,z,F)}}J&1&&$.children!==W.children&&c(Z,W.children)}else!S&&ee==null&&T(Z,P,w,F,z);((K=w.onVnodeUpdated)||ie)&&ln(()=>{K&&ii(K,F,W,$),ie&&Xr(W,$,F,"updated")},O)},R=($,W,F,O,z,Y,S)=>{for(let Z=0;Z<W.length;Z++){const J=$[Z],ee=W[Z],ie=J.el&&(J.type===it||!ro(J,ee)||J.shapeFlag&198)?d(J.el):F;v(J,ee,ie,null,O,z,Y,S,!0)}},T=($,W,F,O,z)=>{if(W!==F){if(W!==Pt)for(const Y in W)!Gs(Y)&&!(Y in F)&&o($,Y,W[Y],null,z,O);for(const Y in F){if(Gs(Y))continue;const S=F[Y],Z=W[Y];S!==Z&&Y!=="value"&&o($,Y,Z,S,z,O)}"value"in F&&o($,"value",W.value,F.value,z)}},A=($,W,F,O,z,Y,S,Z,J)=>{const ee=W.el=$?$.el:a(""),ie=W.anchor=$?$.anchor:a("");let{patchFlag:P,dynamicChildren:w,slotScopeIds:K}=W;K&&(Z=Z?Z.concat(K):K),$==null?(i(ee,F,O),i(ie,F,O),_(W.children||[],F,ie,z,Y,S,Z,J)):P>0&&P&64&&w&&$.dynamicChildren&&$.dynamicChildren.length===w.length?(R($.dynamicChildren,w,F,z,Y,S,Z),(W.key!=null||z&&W===z.subTree)&&Sh($,W,!0)):U($,W,F,ie,z,Y,S,Z,J)},X=($,W,F,O,z,Y,S,Z,J)=>{W.slotScopeIds=Z,$==null?W.shapeFlag&512?z.ctx.activate(W,F,O,S,J):E(W,F,O,z,Y,S,J):k($,W,J)},E=($,W,F,O,z,Y,S)=>{const Z=$.component=o1($,O,z);if(Vu($)&&(Z.ctx.renderer=Se),s1(Z,!1,S),Z.asyncDep){if(z&&z.registerDep(Z,C,S),!$.el){const J=Z.subTree=tt(fn);p(null,J,W,F),$.placeholder=J.el}}else C(Z,$,W,F,z,Y,S)},k=($,W,F)=>{const O=W.component=$.component;if(Vb($,W,F))if(O.asyncDep&&!O.asyncResolved){N(O,W,F);return}else O.next=W,O.update();else W.el=$.el,O.vnode=W},C=($,W,F,O,z,Y,S)=>{const Z=()=>{if($.isMounted){let{next:P,bu:w,u:K,parent:ae,vnode:ge}=$;{const Ye=M0($);if(Ye){P&&(P.el=ge.el,N($,P,S)),Ye.asyncDep.then(()=>{ln(()=>{$.isUnmounted||ee()},z)});return}}let de=P,Ue;Yr($,!1),P?(P.el=ge.el,N($,P,S)):P=ge,w&&mc(w),(Ue=P.props&&P.props.onVnodeBeforeUpdate)&&ii(Ue,ae,P,ge),Yr($,!0);const Ie=Ip($),Ge=$.subTree;$.subTree=Ie,v(Ge,Ie,d(Ge.el),j(Ge),$,z,Y),P.el=Ie.el,de===null&&$b($,Ie.el),K&&ln(K,z),(Ue=P.props&&P.props.onVnodeUpdated)&&ln(()=>ii(Ue,ae,P,ge),z)}else{let P;const{el:w,props:K}=W,{bm:ae,m:ge,parent:de,root:Ue,type:Ie}=$,Ge=Jo(W);Yr($,!1),ae&&mc(ae),!Ge&&(P=K&&K.onVnodeBeforeMount)&&ii(P,de,W),Yr($,!0);{Ue.ce&&Ue.ce._hasShadowRoot()&&Ue.ce._injectChildStyle(Ie);const Ye=$.subTree=Ip($);v(null,Ye,F,O,$,z,Y),W.el=Ye.el}if(ge&&ln(ge,z),!Ge&&(P=K&&K.onVnodeMounted)){const Ye=W;ln(()=>ii(P,de,Ye),z)}(W.shapeFlag&256||de&&Jo(de.vnode)&&de.vnode.shapeFlag&256)&&$.a&&ln($.a,z),$.isMounted=!0,W=F=O=null}};$.scope.on();const J=$.effect=new xv(Z);$.scope.off();const ee=$.update=J.run.bind(J),ie=$.job=J.runIfDirty.bind(J);ie.i=$,ie.id=$.uid,J.scheduler=()=>gh(ie),Yr($,!0),ee()},N=($,W,F)=>{W.component=$;const O=$.vnode.props;$.vnode=W,$.next=null,Gb($,W.props,O,F),qb($,W.children,F),ji(),_p($),Ji()},U=($,W,F,O,z,Y,S,Z,J=!1)=>{const ee=$&&$.children,ie=$?$.shapeFlag:0,P=W.children,{patchFlag:w,shapeFlag:K}=W;if(w>0){if(w&128){G(ee,P,F,O,z,Y,S,Z,J);return}else if(w&256){H(ee,P,F,O,z,Y,S,Z,J);return}}K&8?(ie&16&&L(ee,z,Y),P!==ee&&c(F,P)):ie&16?K&16?G(ee,P,F,O,z,Y,S,Z,J):L(ee,z,Y,!0):(ie&8&&c(F,""),K&16&&_(P,F,O,z,Y,S,Z,J))},H=($,W,F,O,z,Y,S,Z,J)=>{$=$||Ko,W=W||Ko;const ee=$.length,ie=W.length,P=Math.min(ee,ie);let w;for(w=0;w<P;w++){const K=W[w]=J?Oi(W[w]):ui(W[w]);v($[w],K,F,null,z,Y,S,Z,J)}ee>ie?L($,z,Y,!0,!1,P):_(W,F,O,z,Y,S,Z,J,P)},G=($,W,F,O,z,Y,S,Z,J)=>{let ee=0;const ie=W.length;let P=$.length-1,w=ie-1;for(;ee<=P&&ee<=w;){const K=$[ee],ae=W[ee]=J?Oi(W[ee]):ui(W[ee]);if(ro(K,ae))v(K,ae,F,null,z,Y,S,Z,J);else break;ee++}for(;ee<=P&&ee<=w;){const K=$[P],ae=W[w]=J?Oi(W[w]):ui(W[w]);if(ro(K,ae))v(K,ae,F,null,z,Y,S,Z,J);else break;P--,w--}if(ee>P){if(ee<=w){const K=w+1,ae=K<ie?W[K].el:O;for(;ee<=w;)v(null,W[ee]=J?Oi(W[ee]):ui(W[ee]),F,ae,z,Y,S,Z,J),ee++}}else if(ee>w)for(;ee<=P;)re($[ee],z,Y,!0),ee++;else{const K=ee,ae=ee,ge=new Map;for(ee=ae;ee<=w;ee++){const se=W[ee]=J?Oi(W[ee]):ui(W[ee]);se.key!=null&&ge.set(se.key,ee)}let de,Ue=0;const Ie=w-ae+1;let Ge=!1,Ye=0;const Pe=new Array(Ie);for(ee=0;ee<Ie;ee++)Pe[ee]=0;for(ee=K;ee<=P;ee++){const se=$[ee];if(Ue>=Ie){re(se,z,Y,!0);continue}let Ae;if(se.key!=null)Ae=ge.get(se.key);else for(de=ae;de<=w;de++)if(Pe[de-ae]===0&&ro(se,W[de])){Ae=de;break}Ae===void 0?re(se,z,Y,!0):(Pe[Ae-ae]=ee+1,Ae>=Ye?Ye=Ae:Ge=!0,v(se,W[Ae],F,null,z,Y,S,Z,J),Ue++)}const ue=Ge?Jb(Pe):Ko;for(de=ue.length-1,ee=Ie-1;ee>=0;ee--){const se=ae+ee,Ae=W[se],De=W[se+1],Qe=se+1<ie?De.el||w0(De):O;Pe[ee]===0?v(null,Ae,F,Qe,z,Y,S,Z,J):Ge&&(de<0||ee!==ue[de]?ne(Ae,F,Qe,2):de--)}}},ne=($,W,F,O,z=null)=>{const{el:Y,type:S,transition:Z,children:J,shapeFlag:ee}=$;if(ee&6){ne($.component.subTree,W,F,O);return}if(ee&128){$.suspense.move(W,F,O);return}if(ee&64){S.move($,W,F,Se);return}if(S===it){i(Y,W,F);for(let P=0;P<J.length;P++)ne(J[P],W,F,O);i($.anchor,W,F);return}if(S===Mc){M($,W,F);return}if(O!==2&&ee&1&&Z)if(O===0)Z.beforeEnter(Y),i(Y,W,F),ln(()=>Z.enter(Y),z);else{const{leave:P,delayLeave:w,afterLeave:K}=Z,ae=()=>{$.ctx.isUnmounted?r(Y):i(Y,W,F)},ge=()=>{Y._isLeaving&&Y[ai](!0),P(Y,()=>{ae(),K&&K()})};w?w(Y,ae,ge):ge()}else i(Y,W,F)},re=($,W,F,O=!1,z=!1)=>{const{type:Y,props:S,ref:Z,children:J,dynamicChildren:ee,shapeFlag:ie,patchFlag:P,dirs:w,cacheIndex:K}=$;if(P===-2&&(z=!1),Z!=null&&(ji(),Ks(Z,null,F,$,!0),Ji()),K!=null&&(W.renderCache[K]=void 0),ie&256){W.ctx.deactivate($);return}const ae=ie&1&&w,ge=!Jo($);let de;if(ge&&(de=S&&S.onVnodeBeforeUnmount)&&ii(de,W,$),ie&6)te($.component,F,O);else{if(ie&128){$.suspense.unmount(F,O);return}ae&&Xr($,null,W,"beforeUnmount"),ie&64?$.type.remove($,W,F,Se,O):ee&&!ee.hasOnce&&(Y!==it||P>0&&P&64)?L(ee,W,F,!1,!0):(Y===it&&P&384||!z&&ie&16)&&L(J,W,F),O&&ye($)}(ge&&(de=S&&S.onVnodeUnmounted)||ae)&&ln(()=>{de&&ii(de,W,$),ae&&Xr($,null,W,"unmounted")},F)},ye=$=>{const{type:W,el:F,anchor:O,transition:z}=$;if(W===it){we(F,O);return}if(W===Mc){y($);return}const Y=()=>{r(F),z&&!z.persisted&&z.afterLeave&&z.afterLeave()};if($.shapeFlag&1&&z&&!z.persisted){const{leave:S,delayLeave:Z}=z,J=()=>S(F,Y);Z?Z($.el,Y,J):J()}else Y()},we=($,W)=>{let F;for(;$!==W;)F=f($),r($),$=F;r(W)},te=($,W,F)=>{const{bum:O,scope:z,job:Y,subTree:S,um:Z,m:J,a:ee}=$;Dp(J),Dp(ee),O&&mc(O),z.stop(),Y&&(Y.flags|=8,re(S,$,W,F)),Z&&ln(Z,W),ln(()=>{$.isUnmounted=!0},W)},L=($,W,F,O=!1,z=!1,Y=0)=>{for(let S=Y;S<$.length;S++)re($[S],W,F,O,z)},j=$=>{if($.shapeFlag&6)return j($.component.subTree);if($.shapeFlag&128)return $.suspense.next();const W=f($.anchor||$.el),F=W&&W[Wv];return F?f(F):W};let Q=!1;const fe=($,W,F)=>{let O;$==null?W._vnode&&(re(W._vnode,null,null,!0),O=W._vnode.component):v(W._vnode||null,$,W,null,null,null,F),W._vnode=$,Q||(Q=!0,_p(O),zv(),Q=!1)},Se={p:v,um:re,m:ne,r:ye,mt:E,mc:_,pc:U,pbc:R,n:j,o:t};return{render:fe,hydrate:void 0,createApp:Fb(fe)}}function Sc({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Yr({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function jb(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Sh(t,e,n=!1){const i=t.children,r=e.children;if(et(i)&&et(r))for(let o=0;o<i.length;o++){const s=i[o];let a=r[o];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[o]=Oi(r[o]),a.el=s.el),!n&&a.patchFlag!==-2&&Sh(s,a)),a.type===Wu&&(a.patchFlag===-1&&(a=r[o]=Oi(a)),a.el=s.el),a.type===fn&&!a.el&&(a.el=s.el)}}function Jb(t){const e=t.slice(),n=[0];let i,r,o,s,a;const l=t.length;for(i=0;i<l;i++){const u=t[i];if(u!==0){if(r=n[n.length-1],t[r]<u){e[i]=r,n.push(i);continue}for(o=0,s=n.length-1;o<s;)a=o+s>>1,t[n[a]]<u?o=a+1:s=a;u<t[n[o]]&&(o>0&&(e[i]=n[o-1]),n[o]=i)}}for(o=n.length,s=n[o-1];o-- >0;)n[o]=s,s=e[s];return n}function M0(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:M0(e)}function Dp(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}function w0(t){if(t.placeholder)return t.placeholder;const e=t.component;return e?w0(e.subTree):null}const E0=t=>t.__isSuspense;function Qb(t,e){e&&e.pendingBranch?et(t)?e.effects.push(...t):e.effects.push(t):lb(t)}const it=Symbol.for("v-fgt"),Wu=Symbol.for("v-txt"),fn=Symbol.for("v-cmt"),Mc=Symbol.for("v-stc"),js=[];let yn=null;function ce(t=!1){js.push(yn=t?null:[])}function e1(){js.pop(),yn=js[js.length-1]||null}let as=1;function ou(t,e=!1){as+=t,t<0&&yn&&e&&(yn.hasOnce=!0)}function T0(t){return t.dynamicChildren=as>0?yn||Ko:null,e1(),as>0&&yn&&yn.push(t),t}function me(t,e,n,i,r,o){return T0(q(t,e,n,i,r,o,!0))}function Jt(t,e,n,i,r){return T0(tt(t,e,n,i,r,!0))}function sa(t){return t?t.__v_isVNode===!0:!1}function ro(t,e){return t.type===e.type&&t.key===e.key}const A0=({key:t})=>t??null,Dl=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Ot(t)||Ut(t)||nt(t)?{i:tn,r:t,k:e,f:!!n}:t:null);function q(t,e=null,n=null,i=0,r=null,o=t===it?0:1,s=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&A0(e),ref:e&&Dl(e),scopeId:$v,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:o,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:tn};return a?(Mh(l,n),o&128&&t.normalize(l)):n&&(l.shapeFlag|=Ot(n)?8:16),as>0&&!s&&yn&&(l.patchFlag>0||o&6)&&l.patchFlag!==32&&yn.push(l),l}const tt=t1;function t1(t,e=null,n=null,i=0,r=null,o=!1){if((!t||t===r0)&&(t=fn),sa(t)){const a=Or(t,e,!0);return n&&Mh(a,n),as>0&&!o&&yn&&(a.shapeFlag&6?yn[yn.indexOf(t)]=a:yn.push(a)),a.patchFlag=-2,a}if(c1(t)&&(t=t.__vccOpts),e){e=n1(e);let{class:a,style:l}=e;a&&!Ot(a)&&(e.class=ut(a)),yt(l)&&(ku(l)&&!et(l)&&(l=Yt({},l)),e.style=rt(l))}const s=Ot(t)?1:E0(t)?128:Xv(t)?64:yt(t)?4:nt(t)?2:0;return q(t,e,n,i,r,s,o,!0)}function n1(t){return t?ku(t)||v0(t)?Yt({},t):t:null}function Or(t,e,n=!1,i=!1){const{props:r,ref:o,patchFlag:s,children:a,transition:l}=t,u=e?aa(r||{},e):r,c={__v_isVNode:!0,__v_skip:!0,type:t.type,props:u,key:u&&A0(u),ref:e&&e.ref?n&&o?et(o)?o.concat(Dl(e)):[o,Dl(e)]:Dl(e):o,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==it?s===-1?16:s|16:s,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Or(t.ssContent),ssFallback:t.ssFallback&&Or(t.ssFallback),placeholder:t.placeholder,el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&i&&oa(c,l.clone(c)),c}function Yi(t=" ",e=0){return tt(Wu,null,t,e)}function He(t="",e=!1){return e?(ce(),Jt(fn,null,t)):tt(fn,null,t)}function ui(t){return t==null||typeof t=="boolean"?tt(fn):et(t)?tt(it,null,t.slice()):sa(t)?Oi(t):tt(Wu,null,String(t))}function Oi(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Or(t)}function Mh(t,e){let n=0;const{shapeFlag:i}=t;if(e==null)e=null;else if(et(e))n=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),Mh(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!v0(e)?e._ctx=tn:r===3&&tn&&(tn.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else nt(e)?(e={default:e,_ctx:tn},n=32):(e=String(e),i&64?(n=16,e=[Yi(e)]):n=8);t.children=e,t.shapeFlag|=n}function aa(...t){const e={};for(let n=0;n<t.length;n++){const i=t[n];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=ut([e.class,i.class]));else if(r==="style")e.style=rt([e.style,i.style]);else if(Iu(r)){const o=e[r],s=i[r];s&&o!==s&&!(et(o)&&o.includes(s))&&(e[r]=o?[].concat(o,s):s)}else r!==""&&(e[r]=i[r])}return e}function ii(t,e,n,i=null){Jn(t,e,7,[n,i])}const i1=f0();let r1=0;function o1(t,e,n){const i=t.type,r=(e?e.appContext:t.appContext)||i1,o={uid:r1++,vnode:t,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new yv(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:y0(i,r),emitsOptions:h0(i,r),emit:null,emitted:null,propsDefaults:Pt,inheritAttrs:i.inheritAttrs,ctx:Pt,data:Pt,props:Pt,attrs:Pt,slots:Pt,refs:Pt,setupState:Pt,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return o.ctx={_:o},o.root=e?e.root:o,o.emit=Ob.bind(null,o),t.ce&&t.ce(o),o}let hn=null;const Si=()=>hn||tn;let su,Fd;{const t=Lu(),e=(n,i)=>{let r;return(r=t[n])||(r=t[n]=[]),r.push(i),o=>{r.length>1?r.forEach(s=>s(o)):r[0](o)}};su=e("__VUE_INSTANCE_SETTERS__",n=>hn=n),Fd=e("__VUE_SSR_SETTERS__",n=>la=n)}const Ia=t=>{const e=hn;return su(t),t.scope.on(),()=>{t.scope.off(),su(e)}},Lp=()=>{hn&&hn.scope.off(),su(null)};function C0(t){return t.vnode.shapeFlag&4}let la=!1;function s1(t,e=!1,n=!1){e&&Fd(e);const{props:i,children:r}=t.vnode,o=C0(t);Hb(t,i,o,e),Yb(t,r,n||e);const s=o?a1(t,e):void 0;return e&&Fd(!1),s}function a1(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,Ab);const{setup:i}=n;if(i){ji();const r=t.setupContext=i.length>1?I0(t):null,o=Ia(t),s=Ra(i,t,0,[t.props,r]),a=fv(s);if(Ji(),o(),(a||t.sp)&&!Jo(t)&&Qv(t),a){if(s.then(Lp,Lp),e)return s.then(l=>{Fp(t,l)}).catch(l=>{zu(l,t,0)});t.asyncDep=s}else Fp(t,s)}else R0(t)}function Fp(t,e,n){nt(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:yt(e)&&(t.setupState=Fv(e)),R0(t)}function R0(t,e,n){const i=t.type;t.render||(t.render=i.render||mi);{const r=Ia(t);ji();try{Rb(t)}finally{Ji(),r()}}}const l1={get(t,e){return dn(t,"get",""),t[e]}};function I0(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,l1),slots:t.slots,emit:t.emit,expose:e}}function Xu(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(Fv(go(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Zs)return Zs[n](t)},has(e,n){return n in e||n in Zs}})):t.proxy}function u1(t,e=!0){return nt(t)?t.displayName||t.name:t.name||e&&t.__name}function c1(t){return nt(t)&&"__vccOpts"in t}const Re=(t,e)=>ib(t,e,la);function wt(t,e,n){try{ou(-1);const i=arguments.length;return i===2?yt(e)&&!et(e)?sa(e)?tt(t,null,[e]):tt(t,e):tt(t,null,e):(i>3?n=Array.prototype.slice.call(arguments,2):i===3&&sa(n)&&(n=[n]),tt(t,e,n))}finally{ou(1)}}function d1(t,e){const n=t.memo;if(n.length!=e.length)return!1;for(let i=0;i<n.length;i++)if(Wi(n[i],e[i]))return!1;return as>0&&yn&&yn.push(t),!0}const f1="3.5.29";let Ud;const Up=typeof window<"u"&&window.trustedTypes;if(Up)try{Ud=Up.createPolicy("vue",{createHTML:t=>t})}catch{}const P0=Ud?t=>Ud.createHTML(t):t=>t,h1="http://www.w3.org/2000/svg",p1="http://www.w3.org/1998/Math/MathML",Ui=typeof document<"u"?document:null,Op=Ui&&Ui.createElement("template"),m1={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,i)=>{const r=e==="svg"?Ui.createElementNS(h1,t):e==="mathml"?Ui.createElementNS(p1,t):n?Ui.createElement(t,{is:n}):Ui.createElement(t);return t==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:t=>Ui.createTextNode(t),createComment:t=>Ui.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Ui.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,i,r,o){const s=n?n.previousSibling:e.lastChild;if(r&&(r===o||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===o||!(r=r.nextSibling)););else{Op.innerHTML=P0(i==="svg"?`<svg>${t}</svg>`:i==="mathml"?`<math>${t}</math>`:t);const a=Op.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[s?s.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},fr="transition",Ms="animation",ua=Symbol("_vtc"),N0={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},g1=Yt({},qv,N0),v1=t=>(t.displayName="Transition",t.props=g1,t),Bp=v1((t,{slots:e})=>wt(gb,_1(t),e)),qr=(t,e=[])=>{et(t)?t.forEach(n=>n(...e)):t&&t(...e)},kp=t=>t?et(t)?t.some(e=>e.length>1):t.length>1:!1;function _1(t){const e={};for(const A in t)A in N0||(e[A]=t[A]);if(t.css===!1)return e;const{name:n="v",type:i,duration:r,enterFromClass:o=`${n}-enter-from`,enterActiveClass:s=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:l=o,appearActiveClass:u=s,appearToClass:c=a,leaveFromClass:d=`${n}-leave-from`,leaveActiveClass:f=`${n}-leave-active`,leaveToClass:h=`${n}-leave-to`}=t,m=y1(r),v=m&&m[0],g=m&&m[1],{onBeforeEnter:p,onEnter:b,onEnterCancelled:M,onLeave:y,onLeaveCancelled:I,onBeforeAppear:D=p,onAppear:B=b,onAppearCancelled:_=M}=e,x=(A,X,E,k)=>{A._enterCancelled=k,Kr(A,X?c:a),Kr(A,X?u:s),E&&E()},R=(A,X)=>{A._isLeaving=!1,Kr(A,d),Kr(A,h),Kr(A,f),X&&X()},T=A=>(X,E)=>{const k=A?B:b,C=()=>x(X,A,E);qr(k,[X,C]),zp(()=>{Kr(X,A?l:o),Ci(X,A?c:a),kp(k)||Vp(X,i,v,C)})};return Yt(e,{onBeforeEnter(A){qr(p,[A]),Ci(A,o),Ci(A,s)},onBeforeAppear(A){qr(D,[A]),Ci(A,l),Ci(A,u)},onEnter:T(!1),onAppear:T(!0),onLeave(A,X){A._isLeaving=!0;const E=()=>R(A,X);Ci(A,d),A._enterCancelled?(Ci(A,f),Gp(A)):(Gp(A),Ci(A,f)),zp(()=>{A._isLeaving&&(Kr(A,d),Ci(A,h),kp(y)||Vp(A,i,g,E))}),qr(y,[A,E])},onEnterCancelled(A){x(A,!1,void 0,!0),qr(M,[A])},onAppearCancelled(A){x(A,!0,void 0,!0),qr(_,[A])},onLeaveCancelled(A){R(A),qr(I,[A])}})}function y1(t){if(t==null)return null;if(yt(t))return[wc(t.enter),wc(t.leave)];{const e=wc(t);return[e,e]}}function wc(t){return bx(t)}function Ci(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[ua]||(t[ua]=new Set)).add(e)}function Kr(t,e){e.split(/\s+/).forEach(i=>i&&t.classList.remove(i));const n=t[ua];n&&(n.delete(e),n.size||(t[ua]=void 0))}function zp(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let x1=0;function Vp(t,e,n,i){const r=t._endId=++x1,o=()=>{r===t._endId&&i()};if(n!=null)return setTimeout(o,n);const{type:s,timeout:a,propCount:l}=b1(t,e);if(!s)return i();const u=s+"end";let c=0;const d=()=>{t.removeEventListener(u,f),o()},f=h=>{h.target===t&&++c>=l&&d()};setTimeout(()=>{c<l&&d()},a+1),t.addEventListener(u,f)}function b1(t,e){const n=window.getComputedStyle(t),i=m=>(n[m]||"").split(", "),r=i(`${fr}Delay`),o=i(`${fr}Duration`),s=$p(r,o),a=i(`${Ms}Delay`),l=i(`${Ms}Duration`),u=$p(a,l);let c=null,d=0,f=0;e===fr?s>0&&(c=fr,d=s,f=o.length):e===Ms?u>0&&(c=Ms,d=u,f=l.length):(d=Math.max(s,u),c=d>0?s>u?fr:Ms:null,f=c?c===fr?o.length:l.length:0);const h=c===fr&&/\b(?:transform|all)(?:,|$)/.test(i(`${fr}Property`).toString());return{type:c,timeout:d,propCount:f,hasTransform:h}}function $p(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,i)=>Hp(n)+Hp(t[i])))}function Hp(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function Gp(t){return(t?t.ownerDocument:document).body.offsetHeight}function S1(t,e,n){const i=t[ua];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const au=Symbol("_vod"),D0=Symbol("_vsh"),Dr={name:"show",beforeMount(t,{value:e},{transition:n}){t[au]=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):ws(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:i}){!e!=!n&&(i?e?(i.beforeEnter(t),ws(t,!0),i.enter(t)):i.leave(t,()=>{ws(t,!1)}):ws(t,e))},beforeUnmount(t,{value:e}){ws(t,e)}};function ws(t,e){t.style.display=e?t[au]:"none",t[D0]=!e}const M1=Symbol(""),w1=/(?:^|;)\s*display\s*:/;function E1(t,e,n){const i=t.style,r=Ot(n);let o=!1;if(n&&!r){if(e)if(Ot(e))for(const s of e.split(";")){const a=s.slice(0,s.indexOf(":")).trim();n[a]==null&&Ll(i,a,"")}else for(const s in e)n[s]==null&&Ll(i,s,"");for(const s in n)s==="display"&&(o=!0),Ll(i,s,n[s])}else if(r){if(e!==n){const s=i[M1];s&&(n+=";"+s),i.cssText=n,o=w1.test(n)}}else e&&t.removeAttribute("style");au in t&&(t[au]=o?i.display:"",t[D0]&&(i.display="none"))}const Wp=/\s*!important$/;function Ll(t,e,n){if(et(n))n.forEach(i=>Ll(t,e,i));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const i=T1(t,e);Wp.test(n)?t.setProperty($r(i),n.replace(Wp,""),"important"):t[i]=n}}const Xp=["Webkit","Moz","ms"],Ec={};function T1(t,e){const n=Ec[e];if(n)return n;let i=Bn(e);if(i!=="filter"&&i in t)return Ec[e]=i;i=Du(i);for(let r=0;r<Xp.length;r++){const o=Xp[r]+i;if(o in t)return Ec[e]=o}return e}const Yp="http://www.w3.org/1999/xlink";function qp(t,e,n,i,r,o=Cx(e)){i&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(Yp,e.slice(6,e.length)):t.setAttributeNS(Yp,e,n):n==null||o&&!gv(n)?t.removeAttribute(e):t.setAttribute(e,o?"":Zn(n)?String(n):n)}function Kp(t,e,n,i,r){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?P0(n):n);return}const o=t.tagName;if(e==="value"&&o!=="PROGRESS"&&!o.includes("-")){const a=o==="OPTION"?t.getAttribute("value")||"":t.value,l=n==null?t.type==="checkbox"?"on":"":String(n);(a!==l||!("_value"in t))&&(t.value=l),n==null&&t.removeAttribute(e),t._value=n;return}let s=!1;if(n===""||n==null){const a=typeof t[e];a==="boolean"?n=gv(n):n==null&&a==="string"?(n="",s=!0):a==="number"&&(n=0,s=!0)}try{t[e]=n}catch{}s&&t.removeAttribute(r||e)}function A1(t,e,n,i){t.addEventListener(e,n,i)}function C1(t,e,n,i){t.removeEventListener(e,n,i)}const Zp=Symbol("_vei");function R1(t,e,n,i,r=null){const o=t[Zp]||(t[Zp]={}),s=o[e];if(i&&s)s.value=i;else{const[a,l]=I1(e);if(i){const u=o[e]=D1(i,r);A1(t,a,u,l)}else s&&(C1(t,a,s,l),o[e]=void 0)}}const jp=/(?:Once|Passive|Capture)$/;function I1(t){let e;if(jp.test(t)){e={};let i;for(;i=t.match(jp);)t=t.slice(0,t.length-i[0].length),e[i[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):$r(t.slice(2)),e]}let Tc=0;const P1=Promise.resolve(),N1=()=>Tc||(P1.then(()=>Tc=0),Tc=Date.now());function D1(t,e){const n=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=n.attached)return;Jn(L1(i,n.value),e,5,[i])};return n.value=t,n.attached=N1(),n}function L1(t,e){if(et(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(i=>r=>!r._stopped&&i&&i(r))}else return e}const Jp=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,F1=(t,e,n,i,r,o)=>{const s=r==="svg";e==="class"?S1(t,i,s):e==="style"?E1(t,n,i):Iu(e)?lh(e)||R1(t,e,n,i,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):U1(t,e,i,s))?(Kp(t,e,i),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&qp(t,e,i,s,o,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!Ot(i))?Kp(t,Bn(e),i,o,e):(e==="true-value"?t._trueValue=i:e==="false-value"&&(t._falseValue=i),qp(t,e,i,s))};function U1(t,e,n,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in t&&Jp(e)&&nt(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&t.tagName==="IFRAME"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=t.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return Jp(e)&&Ot(n)?!1:e in t}const O1=["ctrl","shift","alt","meta"],B1={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>O1.some(n=>t[`${n}Key`]&&!e.includes(n))},Oe=(t,e)=>{if(!t)return t;const n=t._withMods||(t._withMods={}),i=e.join(".");return n[i]||(n[i]=((r,...o)=>{for(let s=0;s<e.length;s++){const a=B1[e[s]];if(a&&a(r,e))return}return t(r,...o)}))},k1={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},z1=(t,e)=>{const n=t._withKeys||(t._withKeys={}),i=e.join(".");return n[i]||(n[i]=(r=>{if(!("key"in r))return;const o=$r(r.key);if(e.some(s=>s===o||k1[s]===o))return t(r)}))},V1=Yt({patchProp:F1},m1);let Qp;function $1(){return Qp||(Qp=Kb(V1))}const H1=((...t)=>{const e=$1().createApp(...t),{mount:n}=e;return e.mount=i=>{const r=W1(i);if(!r)return;const o=e._component;!nt(o)&&!o.render&&!o.template&&(o.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const s=n(r,!1,G1(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),s},e});function G1(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function W1(t){return Ot(t)?document.querySelector(t):t}let L0;const Yu=t=>L0=t,F0=Symbol();function Od(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var Js;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(Js||(Js={}));function X1(){const t=Fu(!0),e=t.run(()=>Ce({}));let n=[],i=[];const r=go({install(o){Yu(r),r._a=o,o.provide(F0,r),o.config.globalProperties.$pinia=r,i.forEach(s=>n.push(s)),i=[]},use(o){return this._a?n.push(o):i.push(o),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return r}const U0=()=>{};function em(t,e,n,i=U0){t.add(e);const r=()=>{t.delete(e)&&i()};return!n&&Uu()&&Ws(r),r}function Po(t,...e){t.forEach(n=>{n(...e)})}const Y1=t=>t(),tm=Symbol(),Ac=Symbol();function Bd(t,e){t instanceof Map&&e instanceof Map?e.forEach((n,i)=>t.set(i,n)):t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const i=e[n],r=t[n];Od(r)&&Od(i)&&t.hasOwnProperty(n)&&!Ut(i)&&!Xi(i)?t[n]=Bd(r,i):t[n]=i}return t}const q1=Symbol();function K1(t){return!Od(t)||!Object.prototype.hasOwnProperty.call(t,q1)}const{assign:br}=Object;function Z1(t){return!!(Ut(t)&&t.effect)}function j1(t,e,n,i){const{state:r,actions:o,getters:s}=e,a=n.state.value[t];let l;function u(){a||(n.state.value[t]=r?r():{});const c=Uv(n.state.value[t]);return br(c,o,Object.keys(s||{}).reduce((d,f)=>(d[f]=go(Re(()=>{Yu(n);const h=n._s.get(t);return s[f].call(h,h)})),d),{}))}return l=O0(t,u,e,n,i,!0),l}function O0(t,e,n={},i,r,o){let s;const a=br({actions:{}},n),l={deep:!0};let u,c,d=new Set,f=new Set,h;const m=i.state.value[t];!o&&!m&&(i.state.value[t]={});let v;function g(_){let x;u=c=!1,typeof _=="function"?(_(i.state.value[t]),x={type:Js.patchFunction,storeId:t,events:h}):(Bd(i.state.value[t],_),x={type:Js.patchObject,payload:_,storeId:t,events:h});const R=v=Symbol();pn().then(()=>{v===R&&(u=!0)}),c=!0,Po(d,x,i.state.value[t])}const p=o?function(){const{state:x}=n,R=x?x():{};this.$patch(T=>{br(T,R)})}:U0;function b(){s.stop(),d.clear(),f.clear(),i._s.delete(t)}const M=(_,x="")=>{if(tm in _)return _[Ac]=x,_;const R=function(){Yu(i);const T=Array.from(arguments),A=new Set,X=new Set;function E(N){A.add(N)}function k(N){X.add(N)}Po(f,{args:T,name:R[Ac],store:I,after:E,onError:k});let C;try{C=_.apply(this&&this.$id===t?this:I,T)}catch(N){throw Po(X,N),N}return C instanceof Promise?C.then(N=>(Po(A,N),N)).catch(N=>(Po(X,N),Promise.reject(N))):(Po(A,C),C)};return R[tm]=!0,R[Ac]=x,R},y={_p:i,$id:t,$onAction:em.bind(null,f),$patch:g,$reset:p,$subscribe(_,x={}){const R=em(d,_,x.detached,()=>T()),T=s.run(()=>lt(()=>i.state.value[t],A=>{(x.flush==="sync"?c:u)&&_({storeId:t,type:Js.direct,events:h},A)},br({},l,x)));return R},$dispose:b},I=Fr(y);i._s.set(t,I);const B=(i._a&&i._a.runWithContext||Y1)(()=>i._e.run(()=>(s=Fu()).run(()=>e({action:M}))));for(const _ in B){const x=B[_];if(Ut(x)&&!Z1(x)||Xi(x))o||(m&&K1(x)&&(Ut(x)?x.value=m[_]:Bd(x,m[_])),i.state.value[t][_]=x);else if(typeof x=="function"){const R=M(x,_);B[_]=R,a.actions[_]=x}}return br(I,B),br(mt(I),B),Object.defineProperty(I,"$state",{get:()=>i.state.value[t],set:_=>{g(x=>{br(x,_)})}}),i._p.forEach(_=>{br(I,s.run(()=>_({store:I,app:i._a,pinia:i,options:a})))}),m&&o&&n.hydrate&&n.hydrate(I.$state,m),u=!0,c=!0,I}function J1(t,e,n){let i;const r=typeof e=="function";i=r?n:e;function o(s,a){const l=ub();return s=s||(l?Pn(F0,null):null),s&&Yu(s),s=L0,s._s.has(t)||(r?O0(t,e,i,s):j1(t,i,s)),s._s.get(t)}return o.$id=t,o}const wh="183",Q1=0,nm=1,eS=2,Fl=1,tS=2,Os=3,Br=0,Tn=1,zi=2,qi=0,Qo=1,im=2,rm=3,om=4,nS=5,oo=100,iS=101,rS=102,oS=103,sS=104,aS=200,lS=201,uS=202,cS=203,kd=204,zd=205,dS=206,fS=207,hS=208,pS=209,mS=210,gS=211,vS=212,_S=213,yS=214,Vd=0,$d=1,Hd=2,ls=3,Gd=4,Wd=5,Xd=6,Yd=7,B0=0,xS=1,bS=2,gi=0,k0=1,z0=2,V0=3,$0=4,H0=5,G0=6,W0=7,X0=300,So=301,us=302,Cc=303,Rc=304,qu=306,qd=1e3,$i=1001,Kd=1002,nn=1003,SS=1004,Xa=1005,Rt=1006,Ic=1007,co=1008,_n=1009,Y0=1010,q0=1011,ca=1012,Eh=1013,xi=1014,hi=1015,tr=1016,Th=1017,Ah=1018,da=1020,K0=35902,Z0=35899,j0=1021,J0=1022,xn=1023,nr=1026,fo=1027,Q0=1028,Ch=1029,cs=1030,Rh=1031,Ih=1033,Ul=33776,Ol=33777,Bl=33778,kl=33779,Zd=35840,jd=35841,Jd=35842,Qd=35843,ef=36196,tf=37492,nf=37496,rf=37488,of=37489,sf=37490,af=37491,lf=37808,uf=37809,cf=37810,df=37811,ff=37812,hf=37813,pf=37814,mf=37815,gf=37816,vf=37817,_f=37818,yf=37819,xf=37820,bf=37821,Sf=36492,Mf=36494,wf=36495,Ef=36283,Tf=36284,Af=36285,Cf=36286,MS=3200,wS=0,ES=1,Cr="",On="srgb",kr="srgb-linear",lu="linear",Mt="srgb",No=7680,sm=519,TS=512,AS=513,CS=514,Ph=515,RS=516,IS=517,Nh=518,PS=519,am=35044,lm="300 es",pi=2e3,uu=2001;function NS(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function cu(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function DS(){const t=cu("canvas");return t.style.display="block",t}const um={};function cm(...t){const e="THREE."+t.shift();console.log(e,...t)}function e_(t){const e=t[0];if(typeof e=="string"&&e.startsWith("TSL:")){const n=t[1];n&&n.isStackTrace?t[0]+=" "+n.getLocation():t[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return t}function st(...t){t=e_(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.warn(n.getError(e)):console.warn(e,...t)}}function _t(...t){t=e_(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.error(n.getError(e)):console.error(e,...t)}}function du(...t){const e=t.join(" ");e in um||(um[e]=!0,st(...t))}function LS(t,e,n){return new Promise(function(i,r){function o(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(o,n);break;default:i()}}setTimeout(o,n)})}const FS={[Vd]:$d,[Hd]:Xd,[Gd]:Yd,[ls]:Wd,[$d]:Vd,[Xd]:Hd,[Yd]:Gd,[Wd]:ls};class _s{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const o=r.indexOf(n);o!==-1&&r.splice(o,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let o=0,s=r.length;o<s;o++)r[o].call(this,e);e.target=null}}}const sn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Pc=Math.PI/180,Rf=180/Math.PI;function Pa(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(sn[t&255]+sn[t>>8&255]+sn[t>>16&255]+sn[t>>24&255]+"-"+sn[e&255]+sn[e>>8&255]+"-"+sn[e>>16&15|64]+sn[e>>24&255]+"-"+sn[n&63|128]+sn[n>>8&255]+"-"+sn[n>>16&255]+sn[n>>24&255]+sn[i&255]+sn[i>>8&255]+sn[i>>16&255]+sn[i>>24&255]).toLowerCase()}function pt(t,e,n){return Math.max(e,Math.min(n,t))}function US(t,e){return(t%e+e)%e}function Nc(t,e,n){return(1-n)*t+n*e}function Es(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function Sn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class Tt{constructor(e=0,n=0){Tt.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=pt(this.x,e.x,n.x),this.y=pt(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=pt(this.x,e,n),this.y=pt(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(pt(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(pt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),o=this.x-e.x,s=this.y-e.y;return this.x=o*i-s*r+e.x,this.y=o*r+s*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ys{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,o,s,a){let l=i[r+0],u=i[r+1],c=i[r+2],d=i[r+3],f=o[s+0],h=o[s+1],m=o[s+2],v=o[s+3];if(d!==v||l!==f||u!==h||c!==m){let g=l*f+u*h+c*m+d*v;g<0&&(f=-f,h=-h,m=-m,v=-v,g=-g);let p=1-a;if(g<.9995){const b=Math.acos(g),M=Math.sin(b);p=Math.sin(p*b)/M,a=Math.sin(a*b)/M,l=l*p+f*a,u=u*p+h*a,c=c*p+m*a,d=d*p+v*a}else{l=l*p+f*a,u=u*p+h*a,c=c*p+m*a,d=d*p+v*a;const b=1/Math.sqrt(l*l+u*u+c*c+d*d);l*=b,u*=b,c*=b,d*=b}}e[n]=l,e[n+1]=u,e[n+2]=c,e[n+3]=d}static multiplyQuaternionsFlat(e,n,i,r,o,s){const a=i[r],l=i[r+1],u=i[r+2],c=i[r+3],d=o[s],f=o[s+1],h=o[s+2],m=o[s+3];return e[n]=a*m+c*d+l*h-u*f,e[n+1]=l*m+c*f+u*d-a*h,e[n+2]=u*m+c*h+a*f-l*d,e[n+3]=c*m-a*d-l*f-u*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,o=e._z,s=e._order,a=Math.cos,l=Math.sin,u=a(i/2),c=a(r/2),d=a(o/2),f=l(i/2),h=l(r/2),m=l(o/2);switch(s){case"XYZ":this._x=f*c*d+u*h*m,this._y=u*h*d-f*c*m,this._z=u*c*m+f*h*d,this._w=u*c*d-f*h*m;break;case"YXZ":this._x=f*c*d+u*h*m,this._y=u*h*d-f*c*m,this._z=u*c*m-f*h*d,this._w=u*c*d+f*h*m;break;case"ZXY":this._x=f*c*d-u*h*m,this._y=u*h*d+f*c*m,this._z=u*c*m+f*h*d,this._w=u*c*d-f*h*m;break;case"ZYX":this._x=f*c*d-u*h*m,this._y=u*h*d+f*c*m,this._z=u*c*m-f*h*d,this._w=u*c*d+f*h*m;break;case"YZX":this._x=f*c*d+u*h*m,this._y=u*h*d+f*c*m,this._z=u*c*m-f*h*d,this._w=u*c*d-f*h*m;break;case"XZY":this._x=f*c*d-u*h*m,this._y=u*h*d-f*c*m,this._z=u*c*m+f*h*d,this._w=u*c*d+f*h*m;break;default:st("Quaternion: .setFromEuler() encountered an unknown order: "+s)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],o=n[8],s=n[1],a=n[5],l=n[9],u=n[2],c=n[6],d=n[10],f=i+a+d;if(f>0){const h=.5/Math.sqrt(f+1);this._w=.25/h,this._x=(c-l)*h,this._y=(o-u)*h,this._z=(s-r)*h}else if(i>a&&i>d){const h=2*Math.sqrt(1+i-a-d);this._w=(c-l)/h,this._x=.25*h,this._y=(r+s)/h,this._z=(o+u)/h}else if(a>d){const h=2*Math.sqrt(1+a-i-d);this._w=(o-u)/h,this._x=(r+s)/h,this._y=.25*h,this._z=(l+c)/h}else{const h=2*Math.sqrt(1+d-i-a);this._w=(s-r)/h,this._x=(o+u)/h,this._y=(l+c)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(pt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,o=e._z,s=e._w,a=n._x,l=n._y,u=n._z,c=n._w;return this._x=i*c+s*a+r*u-o*l,this._y=r*c+s*l+o*a-i*u,this._z=o*c+s*u+i*l-r*a,this._w=s*c-i*a-r*l-o*u,this._onChangeCallback(),this}slerp(e,n){let i=e._x,r=e._y,o=e._z,s=e._w,a=this.dot(e);a<0&&(i=-i,r=-r,o=-o,s=-s,a=-a);let l=1-n;if(a<.9995){const u=Math.acos(a),c=Math.sin(u);l=Math.sin(l*u)/c,n=Math.sin(n*u)/c,this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+o*n,this._w=this._w*l+s*n,this._onChangeCallback()}else this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+o*n,this._w=this._w*l+s*n,this.normalize();return this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),o=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),o*Math.sin(n),o*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class _e{constructor(e=0,n=0,i=0){_e.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(dm.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(dm.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,o=e.elements;return this.x=o[0]*n+o[3]*i+o[6]*r,this.y=o[1]*n+o[4]*i+o[7]*r,this.z=o[2]*n+o[5]*i+o[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,o=e.elements,s=1/(o[3]*n+o[7]*i+o[11]*r+o[15]);return this.x=(o[0]*n+o[4]*i+o[8]*r+o[12])*s,this.y=(o[1]*n+o[5]*i+o[9]*r+o[13])*s,this.z=(o[2]*n+o[6]*i+o[10]*r+o[14])*s,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,o=e.x,s=e.y,a=e.z,l=e.w,u=2*(s*r-a*i),c=2*(a*n-o*r),d=2*(o*i-s*n);return this.x=n+l*u+s*d-a*c,this.y=i+l*c+a*u-o*d,this.z=r+l*d+o*c-s*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r,this.y=o[1]*n+o[5]*i+o[9]*r,this.z=o[2]*n+o[6]*i+o[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=pt(this.x,e.x,n.x),this.y=pt(this.y,e.y,n.y),this.z=pt(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=pt(this.x,e,n),this.y=pt(this.y,e,n),this.z=pt(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(pt(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,o=e.z,s=n.x,a=n.y,l=n.z;return this.x=r*l-o*a,this.y=o*s-i*l,this.z=i*a-r*s,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Dc.copy(this).projectOnVector(e),this.sub(Dc)}reflect(e){return this.sub(Dc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(pt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Dc=new _e,dm=new ys;class ct{constructor(e,n,i,r,o,s,a,l,u){ct.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,o,s,a,l,u)}set(e,n,i,r,o,s,a,l,u){const c=this.elements;return c[0]=e,c[1]=r,c[2]=a,c[3]=n,c[4]=o,c[5]=l,c[6]=i,c[7]=s,c[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,o=this.elements,s=i[0],a=i[3],l=i[6],u=i[1],c=i[4],d=i[7],f=i[2],h=i[5],m=i[8],v=r[0],g=r[3],p=r[6],b=r[1],M=r[4],y=r[7],I=r[2],D=r[5],B=r[8];return o[0]=s*v+a*b+l*I,o[3]=s*g+a*M+l*D,o[6]=s*p+a*y+l*B,o[1]=u*v+c*b+d*I,o[4]=u*g+c*M+d*D,o[7]=u*p+c*y+d*B,o[2]=f*v+h*b+m*I,o[5]=f*g+h*M+m*D,o[8]=f*p+h*y+m*B,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],o=e[3],s=e[4],a=e[5],l=e[6],u=e[7],c=e[8];return n*s*c-n*a*u-i*o*c+i*a*l+r*o*u-r*s*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],o=e[3],s=e[4],a=e[5],l=e[6],u=e[7],c=e[8],d=c*s-a*u,f=a*l-c*o,h=u*o-s*l,m=n*d+i*f+r*h;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/m;return e[0]=d*v,e[1]=(r*u-c*i)*v,e[2]=(a*i-r*s)*v,e[3]=f*v,e[4]=(c*n-r*l)*v,e[5]=(r*o-a*n)*v,e[6]=h*v,e[7]=(i*l-u*n)*v,e[8]=(s*n-i*o)*v,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,o,s,a){const l=Math.cos(o),u=Math.sin(o);return this.set(i*l,i*u,-i*(l*s+u*a)+s+e,-r*u,r*l,-r*(-u*s+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(Lc.makeScale(e,n)),this}rotate(e){return this.premultiply(Lc.makeRotation(-e)),this}translate(e,n){return this.premultiply(Lc.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Lc=new ct,fm=new ct().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),hm=new ct().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function OS(){const t={enabled:!0,workingColorSpace:kr,spaces:{},convert:function(r,o,s){return this.enabled===!1||o===s||!o||!s||(this.spaces[o].transfer===Mt&&(r.r=Ki(r.r),r.g=Ki(r.g),r.b=Ki(r.b)),this.spaces[o].primaries!==this.spaces[s].primaries&&(r.applyMatrix3(this.spaces[o].toXYZ),r.applyMatrix3(this.spaces[s].fromXYZ)),this.spaces[s].transfer===Mt&&(r.r=es(r.r),r.g=es(r.g),r.b=es(r.b))),r},workingToColorSpace:function(r,o){return this.convert(r,this.workingColorSpace,o)},colorSpaceToWorking:function(r,o){return this.convert(r,o,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Cr?lu:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,o=this.workingColorSpace){return r.fromArray(this.spaces[o].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,o,s){return r.copy(this.spaces[o].toXYZ).multiply(this.spaces[s].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,o){return du("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(r,o)},toWorkingColorSpace:function(r,o){return du("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(r,o)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[kr]:{primaries:e,whitePoint:i,transfer:lu,toXYZ:fm,fromXYZ:hm,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:On},outputColorSpaceConfig:{drawingBufferColorSpace:On}},[On]:{primaries:e,whitePoint:i,transfer:Mt,toXYZ:fm,fromXYZ:hm,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:On}}}),t}const gt=OS();function Ki(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function es(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Do;class BS{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Do===void 0&&(Do=cu("canvas")),Do.width=e.width,Do.height=e.height;const r=Do.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=Do}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=cu("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),o=r.data;for(let s=0;s<o.length;s++)o[s]=Ki(o[s]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Ki(n[i]/255)*255):n[i]=Ki(n[i]);return{data:n,width:e.width,height:e.height}}else return st("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let kS=0;class Dh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:kS++}),this.uuid=Pa(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayHeight,n.displayWidth,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let o;if(Array.isArray(r)){o=[];for(let s=0,a=r.length;s<a;s++)r[s].isDataTexture?o.push(Fc(r[s].image)):o.push(Fc(r[s]))}else o=Fc(r);i.url=o}return n||(e.images[this.uuid]=i),i}}function Fc(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?BS.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(st("Texture: Unable to serialize Texture."),{})}let zS=0;const Uc=new _e;class rn extends _s{constructor(e=rn.DEFAULT_IMAGE,n=rn.DEFAULT_MAPPING,i=$i,r=$i,o=Rt,s=co,a=xn,l=_n,u=rn.DEFAULT_ANISOTROPY,c=Cr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:zS++}),this.uuid=Pa(),this.name="",this.source=new Dh(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=o,this.minFilter=s,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Tt(0,0),this.repeat=new Tt(1,1),this.center=new Tt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ct,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Uc).x}get height(){return this.source.getSize(Uc).y}get depth(){return this.source.getSize(Uc).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){st(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){st(`Texture.setValues(): property '${n}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==X0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case qd:e.x=e.x-Math.floor(e.x);break;case $i:e.x=e.x<0?0:1;break;case Kd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case qd:e.y=e.y-Math.floor(e.y);break;case $i:e.y=e.y<0?0:1;break;case Kd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}rn.DEFAULT_IMAGE=null;rn.DEFAULT_MAPPING=X0;rn.DEFAULT_ANISOTROPY=1;class zt{constructor(e=0,n=0,i=0,r=1){zt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,o=this.w,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r+s[12]*o,this.y=s[1]*n+s[5]*i+s[9]*r+s[13]*o,this.z=s[2]*n+s[6]*i+s[10]*r+s[14]*o,this.w=s[3]*n+s[7]*i+s[11]*r+s[15]*o,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,o;const l=e.elements,u=l[0],c=l[4],d=l[8],f=l[1],h=l[5],m=l[9],v=l[2],g=l[6],p=l[10];if(Math.abs(c-f)<.01&&Math.abs(d-v)<.01&&Math.abs(m-g)<.01){if(Math.abs(c+f)<.1&&Math.abs(d+v)<.1&&Math.abs(m+g)<.1&&Math.abs(u+h+p-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const M=(u+1)/2,y=(h+1)/2,I=(p+1)/2,D=(c+f)/4,B=(d+v)/4,_=(m+g)/4;return M>y&&M>I?M<.01?(i=0,r=.707106781,o=.707106781):(i=Math.sqrt(M),r=D/i,o=B/i):y>I?y<.01?(i=.707106781,r=0,o=.707106781):(r=Math.sqrt(y),i=D/r,o=_/r):I<.01?(i=.707106781,r=.707106781,o=0):(o=Math.sqrt(I),i=B/o,r=_/o),this.set(i,r,o,n),this}let b=Math.sqrt((g-m)*(g-m)+(d-v)*(d-v)+(f-c)*(f-c));return Math.abs(b)<.001&&(b=1),this.x=(g-m)/b,this.y=(d-v)/b,this.z=(f-c)/b,this.w=Math.acos((u+h+p-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=pt(this.x,e.x,n.x),this.y=pt(this.y,e.y,n.y),this.z=pt(this.z,e.z,n.z),this.w=pt(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=pt(this.x,e,n),this.y=pt(this.y,e,n),this.z=pt(this.z,e,n),this.w=pt(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(pt(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class VS extends _s{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Rt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new zt(0,0,e,n),this.scissorTest=!1,this.viewport=new zt(0,0,e,n),this.textures=[];const r={width:e,height:n,depth:i.depth},o=new rn(r),s=i.count;for(let a=0;a<s;a++)this.textures[a]=o.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const n={minFilter:Rt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,o=this.textures.length;r<o;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const r=Object.assign({},e.textures[n].image);this.textures[n].source=new Dh(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Mn extends VS{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class t_ extends rn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=nn,this.minFilter=nn,this.wrapR=$i,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class $S extends rn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=nn,this.minFilter=nn,this.wrapR=$i,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Wt{constructor(e,n,i,r,o,s,a,l,u,c,d,f,h,m,v,g){Wt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,o,s,a,l,u,c,d,f,h,m,v,g)}set(e,n,i,r,o,s,a,l,u,c,d,f,h,m,v,g){const p=this.elements;return p[0]=e,p[4]=n,p[8]=i,p[12]=r,p[1]=o,p[5]=s,p[9]=a,p[13]=l,p[2]=u,p[6]=c,p[10]=d,p[14]=f,p[3]=h,p[7]=m,p[11]=v,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Wt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return this.determinant()===0?(e.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const n=this.elements,i=e.elements,r=1/Lo.setFromMatrixColumn(e,0).length(),o=1/Lo.setFromMatrixColumn(e,1).length(),s=1/Lo.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*o,n[5]=i[5]*o,n[6]=i[6]*o,n[7]=0,n[8]=i[8]*s,n[9]=i[9]*s,n[10]=i[10]*s,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,o=e.z,s=Math.cos(i),a=Math.sin(i),l=Math.cos(r),u=Math.sin(r),c=Math.cos(o),d=Math.sin(o);if(e.order==="XYZ"){const f=s*c,h=s*d,m=a*c,v=a*d;n[0]=l*c,n[4]=-l*d,n[8]=u,n[1]=h+m*u,n[5]=f-v*u,n[9]=-a*l,n[2]=v-f*u,n[6]=m+h*u,n[10]=s*l}else if(e.order==="YXZ"){const f=l*c,h=l*d,m=u*c,v=u*d;n[0]=f+v*a,n[4]=m*a-h,n[8]=s*u,n[1]=s*d,n[5]=s*c,n[9]=-a,n[2]=h*a-m,n[6]=v+f*a,n[10]=s*l}else if(e.order==="ZXY"){const f=l*c,h=l*d,m=u*c,v=u*d;n[0]=f-v*a,n[4]=-s*d,n[8]=m+h*a,n[1]=h+m*a,n[5]=s*c,n[9]=v-f*a,n[2]=-s*u,n[6]=a,n[10]=s*l}else if(e.order==="ZYX"){const f=s*c,h=s*d,m=a*c,v=a*d;n[0]=l*c,n[4]=m*u-h,n[8]=f*u+v,n[1]=l*d,n[5]=v*u+f,n[9]=h*u-m,n[2]=-u,n[6]=a*l,n[10]=s*l}else if(e.order==="YZX"){const f=s*l,h=s*u,m=a*l,v=a*u;n[0]=l*c,n[4]=v-f*d,n[8]=m*d+h,n[1]=d,n[5]=s*c,n[9]=-a*c,n[2]=-u*c,n[6]=h*d+m,n[10]=f-v*d}else if(e.order==="XZY"){const f=s*l,h=s*u,m=a*l,v=a*u;n[0]=l*c,n[4]=-d,n[8]=u*c,n[1]=f*d+v,n[5]=s*c,n[9]=h*d-m,n[2]=m*d-h,n[6]=a*c,n[10]=v*d+f}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(HS,e,GS)}lookAt(e,n,i){const r=this.elements;return Cn.subVectors(e,n),Cn.lengthSq()===0&&(Cn.z=1),Cn.normalize(),hr.crossVectors(i,Cn),hr.lengthSq()===0&&(Math.abs(i.z)===1?Cn.x+=1e-4:Cn.z+=1e-4,Cn.normalize(),hr.crossVectors(i,Cn)),hr.normalize(),Ya.crossVectors(Cn,hr),r[0]=hr.x,r[4]=Ya.x,r[8]=Cn.x,r[1]=hr.y,r[5]=Ya.y,r[9]=Cn.y,r[2]=hr.z,r[6]=Ya.z,r[10]=Cn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,o=this.elements,s=i[0],a=i[4],l=i[8],u=i[12],c=i[1],d=i[5],f=i[9],h=i[13],m=i[2],v=i[6],g=i[10],p=i[14],b=i[3],M=i[7],y=i[11],I=i[15],D=r[0],B=r[4],_=r[8],x=r[12],R=r[1],T=r[5],A=r[9],X=r[13],E=r[2],k=r[6],C=r[10],N=r[14],U=r[3],H=r[7],G=r[11],ne=r[15];return o[0]=s*D+a*R+l*E+u*U,o[4]=s*B+a*T+l*k+u*H,o[8]=s*_+a*A+l*C+u*G,o[12]=s*x+a*X+l*N+u*ne,o[1]=c*D+d*R+f*E+h*U,o[5]=c*B+d*T+f*k+h*H,o[9]=c*_+d*A+f*C+h*G,o[13]=c*x+d*X+f*N+h*ne,o[2]=m*D+v*R+g*E+p*U,o[6]=m*B+v*T+g*k+p*H,o[10]=m*_+v*A+g*C+p*G,o[14]=m*x+v*X+g*N+p*ne,o[3]=b*D+M*R+y*E+I*U,o[7]=b*B+M*T+y*k+I*H,o[11]=b*_+M*A+y*C+I*G,o[15]=b*x+M*X+y*N+I*ne,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],o=e[12],s=e[1],a=e[5],l=e[9],u=e[13],c=e[2],d=e[6],f=e[10],h=e[14],m=e[3],v=e[7],g=e[11],p=e[15],b=l*h-u*f,M=a*h-u*d,y=a*f-l*d,I=s*h-u*c,D=s*f-l*c,B=s*d-a*c;return n*(v*b-g*M+p*y)-i*(m*b-g*I+p*D)+r*(m*M-v*I+p*B)-o*(m*y-v*D+g*B)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],o=e[3],s=e[4],a=e[5],l=e[6],u=e[7],c=e[8],d=e[9],f=e[10],h=e[11],m=e[12],v=e[13],g=e[14],p=e[15],b=n*a-i*s,M=n*l-r*s,y=n*u-o*s,I=i*l-r*a,D=i*u-o*a,B=r*u-o*l,_=c*v-d*m,x=c*g-f*m,R=c*p-h*m,T=d*g-f*v,A=d*p-h*v,X=f*p-h*g,E=b*X-M*A+y*T+I*R-D*x+B*_;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const k=1/E;return e[0]=(a*X-l*A+u*T)*k,e[1]=(r*A-i*X-o*T)*k,e[2]=(v*B-g*D+p*I)*k,e[3]=(f*D-d*B-h*I)*k,e[4]=(l*R-s*X-u*x)*k,e[5]=(n*X-r*R+o*x)*k,e[6]=(g*y-m*B-p*M)*k,e[7]=(c*B-f*y+h*M)*k,e[8]=(s*A-a*R+u*_)*k,e[9]=(i*R-n*A-o*_)*k,e[10]=(m*D-v*y+p*b)*k,e[11]=(d*y-c*D-h*b)*k,e[12]=(a*x-s*T-l*_)*k,e[13]=(n*T-i*x+r*_)*k,e[14]=(v*M-m*I-g*b)*k,e[15]=(c*I-d*M+f*b)*k,this}scale(e){const n=this.elements,i=e.x,r=e.y,o=e.z;return n[0]*=i,n[4]*=r,n[8]*=o,n[1]*=i,n[5]*=r,n[9]*=o,n[2]*=i,n[6]*=r,n[10]*=o,n[3]*=i,n[7]*=r,n[11]*=o,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),o=1-i,s=e.x,a=e.y,l=e.z,u=o*s,c=o*a;return this.set(u*s+i,u*a-r*l,u*l+r*a,0,u*a+r*l,c*a+i,c*l-r*s,0,u*l-r*a,c*l+r*s,o*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,o,s){return this.set(1,i,o,0,e,1,s,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,o=n._x,s=n._y,a=n._z,l=n._w,u=o+o,c=s+s,d=a+a,f=o*u,h=o*c,m=o*d,v=s*c,g=s*d,p=a*d,b=l*u,M=l*c,y=l*d,I=i.x,D=i.y,B=i.z;return r[0]=(1-(v+p))*I,r[1]=(h+y)*I,r[2]=(m-M)*I,r[3]=0,r[4]=(h-y)*D,r[5]=(1-(f+p))*D,r[6]=(g+b)*D,r[7]=0,r[8]=(m+M)*B,r[9]=(g-b)*B,r[10]=(1-(f+v))*B,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const o=this.determinant();if(o===0)return i.set(1,1,1),n.identity(),this;let s=Lo.set(r[0],r[1],r[2]).length();const a=Lo.set(r[4],r[5],r[6]).length(),l=Lo.set(r[8],r[9],r[10]).length();o<0&&(s=-s),Vn.copy(this);const u=1/s,c=1/a,d=1/l;return Vn.elements[0]*=u,Vn.elements[1]*=u,Vn.elements[2]*=u,Vn.elements[4]*=c,Vn.elements[5]*=c,Vn.elements[6]*=c,Vn.elements[8]*=d,Vn.elements[9]*=d,Vn.elements[10]*=d,n.setFromRotationMatrix(Vn),i.x=s,i.y=a,i.z=l,this}makePerspective(e,n,i,r,o,s,a=pi,l=!1){const u=this.elements,c=2*o/(n-e),d=2*o/(i-r),f=(n+e)/(n-e),h=(i+r)/(i-r);let m,v;if(l)m=o/(s-o),v=s*o/(s-o);else if(a===pi)m=-(s+o)/(s-o),v=-2*s*o/(s-o);else if(a===uu)m=-s/(s-o),v=-s*o/(s-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return u[0]=c,u[4]=0,u[8]=f,u[12]=0,u[1]=0,u[5]=d,u[9]=h,u[13]=0,u[2]=0,u[6]=0,u[10]=m,u[14]=v,u[3]=0,u[7]=0,u[11]=-1,u[15]=0,this}makeOrthographic(e,n,i,r,o,s,a=pi,l=!1){const u=this.elements,c=2/(n-e),d=2/(i-r),f=-(n+e)/(n-e),h=-(i+r)/(i-r);let m,v;if(l)m=1/(s-o),v=s/(s-o);else if(a===pi)m=-2/(s-o),v=-(s+o)/(s-o);else if(a===uu)m=-1/(s-o),v=-o/(s-o);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return u[0]=c,u[4]=0,u[8]=0,u[12]=f,u[1]=0,u[5]=d,u[9]=0,u[13]=h,u[2]=0,u[6]=0,u[10]=m,u[14]=v,u[3]=0,u[7]=0,u[11]=0,u[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Lo=new _e,Vn=new Wt,HS=new _e(0,0,0),GS=new _e(1,1,1),hr=new _e,Ya=new _e,Cn=new _e,pm=new Wt,mm=new ys;class ir{constructor(e=0,n=0,i=0,r=ir.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,o=r[0],s=r[4],a=r[8],l=r[1],u=r[5],c=r[9],d=r[2],f=r[6],h=r[10];switch(n){case"XYZ":this._y=Math.asin(pt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-c,h),this._z=Math.atan2(-s,o)):(this._x=Math.atan2(f,u),this._z=0);break;case"YXZ":this._x=Math.asin(-pt(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(a,h),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-d,o),this._z=0);break;case"ZXY":this._x=Math.asin(pt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,h),this._z=Math.atan2(-s,u)):(this._y=0,this._z=Math.atan2(l,o));break;case"ZYX":this._y=Math.asin(-pt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,h),this._z=Math.atan2(l,o)):(this._x=0,this._z=Math.atan2(-s,u));break;case"YZX":this._z=Math.asin(pt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,u),this._y=Math.atan2(-d,o)):(this._x=0,this._y=Math.atan2(a,h));break;case"XZY":this._z=Math.asin(-pt(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(f,u),this._y=Math.atan2(a,o)):(this._x=Math.atan2(-c,h),this._y=0);break;default:st("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return pm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(pm,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return mm.setFromEuler(this),this.setFromQuaternion(mm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ir.DEFAULT_ORDER="XYZ";class n_{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let WS=0;const gm=new _e,Fo=new ys,Ri=new Wt,qa=new _e,Ts=new _e,XS=new _e,YS=new ys,vm=new _e(1,0,0),_m=new _e(0,1,0),ym=new _e(0,0,1),xm={type:"added"},qS={type:"removed"},Uo={type:"childadded",child:null},Oc={type:"childremoved",child:null};class Nn extends _s{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:WS++}),this.uuid=Pa(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Nn.DEFAULT_UP.clone();const e=new _e,n=new ir,i=new ys,r=new _e(1,1,1);function o(){i.setFromEuler(n,!1)}function s(){n.setFromQuaternion(i,void 0,!1)}n._onChange(o),i._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Wt},normalMatrix:{value:new ct}}),this.matrix=new Wt,this.matrixWorld=new Wt,this.matrixAutoUpdate=Nn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Nn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new n_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Fo.setFromAxisAngle(e,n),this.quaternion.multiply(Fo),this}rotateOnWorldAxis(e,n){return Fo.setFromAxisAngle(e,n),this.quaternion.premultiply(Fo),this}rotateX(e){return this.rotateOnAxis(vm,e)}rotateY(e){return this.rotateOnAxis(_m,e)}rotateZ(e){return this.rotateOnAxis(ym,e)}translateOnAxis(e,n){return gm.copy(e).applyQuaternion(this.quaternion),this.position.add(gm.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(vm,e)}translateY(e){return this.translateOnAxis(_m,e)}translateZ(e){return this.translateOnAxis(ym,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ri.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?qa.copy(e):qa.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Ts.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ri.lookAt(Ts,qa,this.up):Ri.lookAt(qa,Ts,this.up),this.quaternion.setFromRotationMatrix(Ri),r&&(Ri.extractRotation(r.matrixWorld),Fo.setFromRotationMatrix(Ri),this.quaternion.premultiply(Fo.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(_t("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(xm),Uo.child=e,this.dispatchEvent(Uo),Uo.child=null):_t("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(qS),Oc.child=e,this.dispatchEvent(Oc),Oc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ri.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ri.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ri),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(xm),Uo.child=e,this.dispatchEvent(Uo),Uo.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const s=this.children[i].getObjectByProperty(e,n);if(s!==void 0)return s}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let o=0,s=r.length;o<s;o++)r[o].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ts,e,XS),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ts,YS,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const n=e.x,i=e.y,r=e.z,o=this.matrix.elements;o[12]+=n-o[0]*n-o[4]*i-o[8]*r,o[13]+=i-o[1]*n-o[5]*i-o[9]*r,o[14]+=r-o[2]*n-o[6]*i-o[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let o=0,s=r.length;o<s;o++)r[o].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function o(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=o(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,c=l.length;u<c;u++){const d=l[u];o(e.shapes,d)}else o(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(o(e.materials,this.material[l]));r.material=a}else r.material=o(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(o(e.animations,l))}}if(n){const a=s(e.geometries),l=s(e.materials),u=s(e.textures),c=s(e.images),d=s(e.shapes),f=s(e.skeletons),h=s(e.animations),m=s(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),c.length>0&&(i.images=c),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),h.length>0&&(i.animations=h),m.length>0&&(i.nodes=m)}return i.object=r,i;function s(a){const l=[];for(const u in a){const c=a[u];delete c.metadata,l.push(c)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),e.pivot!==null&&(this.pivot=e.pivot.clone()),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Nn.DEFAULT_UP=new _e(0,1,0);Nn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Nn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Ka extends Nn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const KS={type:"move"};class Bc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ka,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ka,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new _e,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new _e),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ka,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new _e,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new _e),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,o=null,s=null;const a=this._targetRay,l=this._grip,u=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(u&&e.hand){s=!0;for(const v of e.hand.values()){const g=n.getJointPose(v,i),p=this._getHandJoint(u,v);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}const c=u.joints["index-finger-tip"],d=u.joints["thumb-tip"],f=c.position.distanceTo(d.position),h=.02,m=.005;u.inputState.pinching&&f>h+m?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&f<=h-m&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(o=n.getPose(e.gripSpace,i),o!==null&&(l.matrix.fromArray(o.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,o.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(o.linearVelocity)):l.hasLinearVelocity=!1,o.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(o.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&o!==null&&(r=o),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(KS)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=o!==null),u!==null&&(u.visible=s!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Ka;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const i_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},pr={h:0,s:0,l:0},Za={h:0,s:0,l:0};function kc(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}let Et=class{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=On){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,gt.colorSpaceToWorking(this,n),this}setRGB(e,n,i,r=gt.workingColorSpace){return this.r=e,this.g=n,this.b=i,gt.colorSpaceToWorking(this,r),this}setHSL(e,n,i,r=gt.workingColorSpace){if(e=US(e,1),n=pt(n,0,1),i=pt(i,0,1),n===0)this.r=this.g=this.b=i;else{const o=i<=.5?i*(1+n):i+n-i*n,s=2*i-o;this.r=kc(s,o,e+1/3),this.g=kc(s,o,e),this.b=kc(s,o,e-1/3)}return gt.colorSpaceToWorking(this,r),this}setStyle(e,n=On){function i(o){o!==void 0&&parseFloat(o)<1&&st("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let o;const s=r[1],a=r[2];switch(s){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,n);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,n);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,n);break;default:st("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const o=r[1],s=o.length;if(s===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,n);if(s===6)return this.setHex(parseInt(o,16),n);st("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=On){const i=i_[e.toLowerCase()];return i!==void 0?this.setHex(i,n):st("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ki(e.r),this.g=Ki(e.g),this.b=Ki(e.b),this}copyLinearToSRGB(e){return this.r=es(e.r),this.g=es(e.g),this.b=es(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=On){return gt.workingToColorSpace(an.copy(this),e),Math.round(pt(an.r*255,0,255))*65536+Math.round(pt(an.g*255,0,255))*256+Math.round(pt(an.b*255,0,255))}getHexString(e=On){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=gt.workingColorSpace){gt.workingToColorSpace(an.copy(this),n);const i=an.r,r=an.g,o=an.b,s=Math.max(i,r,o),a=Math.min(i,r,o);let l,u;const c=(a+s)/2;if(a===s)l=0,u=0;else{const d=s-a;switch(u=c<=.5?d/(s+a):d/(2-s-a),s){case i:l=(r-o)/d+(r<o?6:0);break;case r:l=(o-i)/d+2;break;case o:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=u,e.l=c,e}getRGB(e,n=gt.workingColorSpace){return gt.workingToColorSpace(an.copy(this),n),e.r=an.r,e.g=an.g,e.b=an.b,e}getStyle(e=On){gt.workingToColorSpace(an.copy(this),e);const n=an.r,i=an.g,r=an.b;return e!==On?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(pr),this.setHSL(pr.h+e,pr.s+n,pr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(pr),e.getHSL(Za);const i=Nc(pr.h,Za.h,n),r=Nc(pr.s,Za.s,n),o=Nc(pr.l,Za.l,n);return this.setHSL(i,r,o),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,o=e.elements;return this.r=o[0]*n+o[3]*i+o[6]*r,this.g=o[1]*n+o[4]*i+o[7]*r,this.b=o[2]*n+o[5]*i+o[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}};const an=new Et;Et.NAMES=i_;class ZS extends Nn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ir,this.environmentIntensity=1,this.environmentRotation=new ir,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const $n=new _e,Ii=new _e,zc=new _e,Pi=new _e,Oo=new _e,Bo=new _e,bm=new _e,Vc=new _e,$c=new _e,Hc=new _e,Gc=new zt,Wc=new zt,Xc=new zt;class Wn{constructor(e=new _e,n=new _e,i=new _e){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),$n.subVectors(e,n),r.cross($n);const o=r.lengthSq();return o>0?r.multiplyScalar(1/Math.sqrt(o)):r.set(0,0,0)}static getBarycoord(e,n,i,r,o){$n.subVectors(r,n),Ii.subVectors(i,n),zc.subVectors(e,n);const s=$n.dot($n),a=$n.dot(Ii),l=$n.dot(zc),u=Ii.dot(Ii),c=Ii.dot(zc),d=s*u-a*a;if(d===0)return o.set(0,0,0),null;const f=1/d,h=(u*l-a*c)*f,m=(s*c-a*l)*f;return o.set(1-h-m,m,h)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,Pi)===null?!1:Pi.x>=0&&Pi.y>=0&&Pi.x+Pi.y<=1}static getInterpolation(e,n,i,r,o,s,a,l){return this.getBarycoord(e,n,i,r,Pi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(o,Pi.x),l.addScaledVector(s,Pi.y),l.addScaledVector(a,Pi.z),l)}static getInterpolatedAttribute(e,n,i,r,o,s){return Gc.setScalar(0),Wc.setScalar(0),Xc.setScalar(0),Gc.fromBufferAttribute(e,n),Wc.fromBufferAttribute(e,i),Xc.fromBufferAttribute(e,r),s.setScalar(0),s.addScaledVector(Gc,o.x),s.addScaledVector(Wc,o.y),s.addScaledVector(Xc,o.z),s}static isFrontFacing(e,n,i,r){return $n.subVectors(i,n),Ii.subVectors(e,n),$n.cross(Ii).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return $n.subVectors(this.c,this.b),Ii.subVectors(this.a,this.b),$n.cross(Ii).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Wn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Wn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,o){return Wn.getInterpolation(e,this.a,this.b,this.c,n,i,r,o)}containsPoint(e){return Wn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Wn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,o=this.c;let s,a;Oo.subVectors(r,i),Bo.subVectors(o,i),Vc.subVectors(e,i);const l=Oo.dot(Vc),u=Bo.dot(Vc);if(l<=0&&u<=0)return n.copy(i);$c.subVectors(e,r);const c=Oo.dot($c),d=Bo.dot($c);if(c>=0&&d<=c)return n.copy(r);const f=l*d-c*u;if(f<=0&&l>=0&&c<=0)return s=l/(l-c),n.copy(i).addScaledVector(Oo,s);Hc.subVectors(e,o);const h=Oo.dot(Hc),m=Bo.dot(Hc);if(m>=0&&h<=m)return n.copy(o);const v=h*u-l*m;if(v<=0&&u>=0&&m<=0)return a=u/(u-m),n.copy(i).addScaledVector(Bo,a);const g=c*m-h*d;if(g<=0&&d-c>=0&&h-m>=0)return bm.subVectors(o,r),a=(d-c)/(d-c+(h-m)),n.copy(r).addScaledVector(bm,a);const p=1/(g+v+f);return s=v*p,a=f*p,n.copy(i).addScaledVector(Oo,s).addScaledVector(Bo,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Na{constructor(e=new _e(1/0,1/0,1/0),n=new _e(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Hn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Hn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Hn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const o=i.getAttribute("position");if(n===!0&&o!==void 0&&e.isInstancedMesh!==!0)for(let s=0,a=o.count;s<a;s++)e.isMesh===!0?e.getVertexPosition(s,Hn):Hn.fromBufferAttribute(o,s),Hn.applyMatrix4(e.matrixWorld),this.expandByPoint(Hn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ja.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ja.copy(i.boundingBox)),ja.applyMatrix4(e.matrixWorld),this.union(ja)}const r=e.children;for(let o=0,s=r.length;o<s;o++)this.expandByObject(r[o],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Hn),Hn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(As),Ja.subVectors(this.max,As),ko.subVectors(e.a,As),zo.subVectors(e.b,As),Vo.subVectors(e.c,As),mr.subVectors(zo,ko),gr.subVectors(Vo,zo),Zr.subVectors(ko,Vo);let n=[0,-mr.z,mr.y,0,-gr.z,gr.y,0,-Zr.z,Zr.y,mr.z,0,-mr.x,gr.z,0,-gr.x,Zr.z,0,-Zr.x,-mr.y,mr.x,0,-gr.y,gr.x,0,-Zr.y,Zr.x,0];return!Yc(n,ko,zo,Vo,Ja)||(n=[1,0,0,0,1,0,0,0,1],!Yc(n,ko,zo,Vo,Ja))?!1:(Qa.crossVectors(mr,gr),n=[Qa.x,Qa.y,Qa.z],Yc(n,ko,zo,Vo,Ja))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Hn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Hn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ni[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ni[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ni[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ni[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ni[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ni[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ni[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ni[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ni),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Ni=[new _e,new _e,new _e,new _e,new _e,new _e,new _e,new _e],Hn=new _e,ja=new Na,ko=new _e,zo=new _e,Vo=new _e,mr=new _e,gr=new _e,Zr=new _e,As=new _e,Ja=new _e,Qa=new _e,jr=new _e;function Yc(t,e,n,i,r){for(let o=0,s=t.length-3;o<=s;o+=3){jr.fromArray(t,o);const a=r.x*Math.abs(jr.x)+r.y*Math.abs(jr.y)+r.z*Math.abs(jr.z),l=e.dot(jr),u=n.dot(jr),c=i.dot(jr);if(Math.max(-Math.max(l,u,c),Math.min(l,u,c))>a)return!1}return!0}const Vt=new _e,el=new Tt;let jS=0;class vi{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:jS++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=am,this.updateRanges=[],this.gpuType=hi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,o=this.itemSize;r<o;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)el.fromBufferAttribute(this,n),el.applyMatrix3(e),this.setXY(n,el.x,el.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Vt.fromBufferAttribute(this,n),Vt.applyMatrix3(e),this.setXYZ(n,Vt.x,Vt.y,Vt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Vt.fromBufferAttribute(this,n),Vt.applyMatrix4(e),this.setXYZ(n,Vt.x,Vt.y,Vt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Vt.fromBufferAttribute(this,n),Vt.applyNormalMatrix(e),this.setXYZ(n,Vt.x,Vt.y,Vt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Vt.fromBufferAttribute(this,n),Vt.transformDirection(e),this.setXYZ(n,Vt.x,Vt.y,Vt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Es(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=Sn(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Es(n,this.array)),n}setX(e,n){return this.normalized&&(n=Sn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Es(n,this.array)),n}setY(e,n){return this.normalized&&(n=Sn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Es(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Sn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Es(n,this.array)),n}setW(e,n){return this.normalized&&(n=Sn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=Sn(n,this.array),i=Sn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=Sn(n,this.array),i=Sn(i,this.array),r=Sn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,o){return e*=this.itemSize,this.normalized&&(n=Sn(n,this.array),i=Sn(i,this.array),r=Sn(r,this.array),o=Sn(o,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=o,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==am&&(e.usage=this.usage),e}}class r_ extends vi{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class o_ extends vi{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Zi extends vi{constructor(e,n,i){super(new Float32Array(e),n,i)}}const JS=new Na,Cs=new _e,qc=new _e;class Lh{constructor(e=new _e,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):JS.setFromPoints(e).getCenter(i);let r=0;for(let o=0,s=e.length;o<s;o++)r=Math.max(r,i.distanceToSquared(e[o]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Cs.subVectors(e,this.center);const n=Cs.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Cs,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(qc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Cs.copy(e.center).add(qc)),this.expandByPoint(Cs.copy(e.center).sub(qc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let QS=0;const Un=new Wt,Kc=new Nn,$o=new _e,Rn=new Na,Rs=new Na,jt=new _e;class lr extends _s{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:QS++}),this.uuid=Pa(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(NS(e)?o_:r_)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const o=new ct().getNormalMatrix(e);i.applyNormalMatrix(o),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Un.makeRotationFromQuaternion(e),this.applyMatrix4(Un),this}rotateX(e){return Un.makeRotationX(e),this.applyMatrix4(Un),this}rotateY(e){return Un.makeRotationY(e),this.applyMatrix4(Un),this}rotateZ(e){return Un.makeRotationZ(e),this.applyMatrix4(Un),this}translate(e,n,i){return Un.makeTranslation(e,n,i),this.applyMatrix4(Un),this}scale(e,n,i){return Un.makeScale(e,n,i),this.applyMatrix4(Un),this}lookAt(e){return Kc.lookAt(e),Kc.updateMatrix(),this.applyMatrix4(Kc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter($o).negate(),this.translate($o.x,$o.y,$o.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,o=e.length;r<o;r++){const s=e[r];i.push(s.x,s.y,s.z||0)}this.setAttribute("position",new Zi(i,3))}else{const i=Math.min(e.length,n.count);for(let r=0;r<i;r++){const o=e[r];n.setXYZ(r,o.x,o.y,o.z||0)}e.length>n.count&&st("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Na);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){_t("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new _e(-1/0,-1/0,-1/0),new _e(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const o=n[i];Rn.setFromBufferAttribute(o),this.morphTargetsRelative?(jt.addVectors(this.boundingBox.min,Rn.min),this.boundingBox.expandByPoint(jt),jt.addVectors(this.boundingBox.max,Rn.max),this.boundingBox.expandByPoint(jt)):(this.boundingBox.expandByPoint(Rn.min),this.boundingBox.expandByPoint(Rn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&_t('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Lh);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){_t("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new _e,1/0);return}if(e){const i=this.boundingSphere.center;if(Rn.setFromBufferAttribute(e),n)for(let o=0,s=n.length;o<s;o++){const a=n[o];Rs.setFromBufferAttribute(a),this.morphTargetsRelative?(jt.addVectors(Rn.min,Rs.min),Rn.expandByPoint(jt),jt.addVectors(Rn.max,Rs.max),Rn.expandByPoint(jt)):(Rn.expandByPoint(Rs.min),Rn.expandByPoint(Rs.max))}Rn.getCenter(i);let r=0;for(let o=0,s=e.count;o<s;o++)jt.fromBufferAttribute(e,o),r=Math.max(r,i.distanceToSquared(jt));if(n)for(let o=0,s=n.length;o<s;o++){const a=n[o],l=this.morphTargetsRelative;for(let u=0,c=a.count;u<c;u++)jt.fromBufferAttribute(a,u),l&&($o.fromBufferAttribute(e,u),jt.add($o)),r=Math.max(r,i.distanceToSquared(jt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&_t('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){_t("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,o=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new vi(new Float32Array(4*i.count),4));const s=this.getAttribute("tangent"),a=[],l=[];for(let _=0;_<i.count;_++)a[_]=new _e,l[_]=new _e;const u=new _e,c=new _e,d=new _e,f=new Tt,h=new Tt,m=new Tt,v=new _e,g=new _e;function p(_,x,R){u.fromBufferAttribute(i,_),c.fromBufferAttribute(i,x),d.fromBufferAttribute(i,R),f.fromBufferAttribute(o,_),h.fromBufferAttribute(o,x),m.fromBufferAttribute(o,R),c.sub(u),d.sub(u),h.sub(f),m.sub(f);const T=1/(h.x*m.y-m.x*h.y);isFinite(T)&&(v.copy(c).multiplyScalar(m.y).addScaledVector(d,-h.y).multiplyScalar(T),g.copy(d).multiplyScalar(h.x).addScaledVector(c,-m.x).multiplyScalar(T),a[_].add(v),a[x].add(v),a[R].add(v),l[_].add(g),l[x].add(g),l[R].add(g))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let _=0,x=b.length;_<x;++_){const R=b[_],T=R.start,A=R.count;for(let X=T,E=T+A;X<E;X+=3)p(e.getX(X+0),e.getX(X+1),e.getX(X+2))}const M=new _e,y=new _e,I=new _e,D=new _e;function B(_){I.fromBufferAttribute(r,_),D.copy(I);const x=a[_];M.copy(x),M.sub(I.multiplyScalar(I.dot(x))).normalize(),y.crossVectors(D,x);const T=y.dot(l[_])<0?-1:1;s.setXYZW(_,M.x,M.y,M.z,T)}for(let _=0,x=b.length;_<x;++_){const R=b[_],T=R.start,A=R.count;for(let X=T,E=T+A;X<E;X+=3)B(e.getX(X+0)),B(e.getX(X+1)),B(e.getX(X+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new vi(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let f=0,h=i.count;f<h;f++)i.setXYZ(f,0,0,0);const r=new _e,o=new _e,s=new _e,a=new _e,l=new _e,u=new _e,c=new _e,d=new _e;if(e)for(let f=0,h=e.count;f<h;f+=3){const m=e.getX(f+0),v=e.getX(f+1),g=e.getX(f+2);r.fromBufferAttribute(n,m),o.fromBufferAttribute(n,v),s.fromBufferAttribute(n,g),c.subVectors(s,o),d.subVectors(r,o),c.cross(d),a.fromBufferAttribute(i,m),l.fromBufferAttribute(i,v),u.fromBufferAttribute(i,g),a.add(c),l.add(c),u.add(c),i.setXYZ(m,a.x,a.y,a.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(g,u.x,u.y,u.z)}else for(let f=0,h=n.count;f<h;f+=3)r.fromBufferAttribute(n,f+0),o.fromBufferAttribute(n,f+1),s.fromBufferAttribute(n,f+2),c.subVectors(s,o),d.subVectors(r,o),c.cross(d),i.setXYZ(f+0,c.x,c.y,c.z),i.setXYZ(f+1,c.x,c.y,c.z),i.setXYZ(f+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)jt.fromBufferAttribute(e,n),jt.normalize(),e.setXYZ(n,jt.x,jt.y,jt.z)}toNonIndexed(){function e(a,l){const u=a.array,c=a.itemSize,d=a.normalized,f=new u.constructor(l.length*c);let h=0,m=0;for(let v=0,g=l.length;v<g;v++){a.isInterleavedBufferAttribute?h=l[v]*a.data.stride+a.offset:h=l[v]*c;for(let p=0;p<c;p++)f[m++]=u[h++]}return new vi(f,c,d)}if(this.index===null)return st("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new lr,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],u=e(l,i);n.setAttribute(a,u)}const o=this.morphAttributes;for(const a in o){const l=[],u=o[a];for(let c=0,d=u.length;c<d;c++){const f=u[c],h=e(f,i);l.push(h)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let a=0,l=s.length;a<l;a++){const u=s[a];n.addGroup(u.start,u.count,u.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let o=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],c=[];for(let d=0,f=u.length;d<f;d++){const h=u[d];c.push(h.toJSON(e.data))}c.length>0&&(r[l]=c,o=!0)}o&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const u in r){const c=r[u];this.setAttribute(u,c.clone(n))}const o=e.morphAttributes;for(const u in o){const c=[],d=o[u];for(let f=0,h=d.length;f<h;f++)c.push(d[f].clone(n));this.morphAttributes[u]=c}this.morphTargetsRelative=e.morphTargetsRelative;const s=e.groups;for(let u=0,c=s.length;u<c;u++){const d=s[u];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let eM=0;class Ku extends _s{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:eM++}),this.uuid=Pa(),this.name="",this.type="Material",this.blending=Qo,this.side=Br,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=kd,this.blendDst=zd,this.blendEquation=oo,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Et(0,0,0),this.blendAlpha=0,this.depthFunc=ls,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=sm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=No,this.stencilZFail=No,this.stencilZPass=No,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){st(`Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){st(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Qo&&(i.blending=this.blending),this.side!==Br&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==kd&&(i.blendSrc=this.blendSrc),this.blendDst!==zd&&(i.blendDst=this.blendDst),this.blendEquation!==oo&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==ls&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==sm&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==No&&(i.stencilFail=this.stencilFail),this.stencilZFail!==No&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==No&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(o){const s=[];for(const a in o){const l=o[a];delete l.metadata,s.push(l)}return s}if(n){const o=r(e.textures),s=r(e.images);o.length>0&&(i.textures=o),s.length>0&&(i.images=s)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let o=0;o!==r;++o)i[o]=n[o].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Di=new _e,Zc=new _e,tl=new _e,vr=new _e,jc=new _e,nl=new _e,Jc=new _e;class tM{constructor(e=new _e,n=new _e(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Di)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Di.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Di.copy(this.origin).addScaledVector(this.direction,n),Di.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Zc.copy(e).add(n).multiplyScalar(.5),tl.copy(n).sub(e).normalize(),vr.copy(this.origin).sub(Zc);const o=e.distanceTo(n)*.5,s=-this.direction.dot(tl),a=vr.dot(this.direction),l=-vr.dot(tl),u=vr.lengthSq(),c=Math.abs(1-s*s);let d,f,h,m;if(c>0)if(d=s*l-a,f=s*a-l,m=o*c,d>=0)if(f>=-m)if(f<=m){const v=1/c;d*=v,f*=v,h=d*(d+s*f+2*a)+f*(s*d+f+2*l)+u}else f=o,d=Math.max(0,-(s*f+a)),h=-d*d+f*(f+2*l)+u;else f=-o,d=Math.max(0,-(s*f+a)),h=-d*d+f*(f+2*l)+u;else f<=-m?(d=Math.max(0,-(-s*o+a)),f=d>0?-o:Math.min(Math.max(-o,-l),o),h=-d*d+f*(f+2*l)+u):f<=m?(d=0,f=Math.min(Math.max(-o,-l),o),h=f*(f+2*l)+u):(d=Math.max(0,-(s*o+a)),f=d>0?o:Math.min(Math.max(-o,-l),o),h=-d*d+f*(f+2*l)+u);else f=s>0?-o:o,d=Math.max(0,-(s*f+a)),h=-d*d+f*(f+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(Zc).addScaledVector(tl,f),h}intersectSphere(e,n){Di.subVectors(e.center,this.origin);const i=Di.dot(this.direction),r=Di.dot(Di)-i*i,o=e.radius*e.radius;if(r>o)return null;const s=Math.sqrt(o-r),a=i-s,l=i+s;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,o,s,a,l;const u=1/this.direction.x,c=1/this.direction.y,d=1/this.direction.z,f=this.origin;return u>=0?(i=(e.min.x-f.x)*u,r=(e.max.x-f.x)*u):(i=(e.max.x-f.x)*u,r=(e.min.x-f.x)*u),c>=0?(o=(e.min.y-f.y)*c,s=(e.max.y-f.y)*c):(o=(e.max.y-f.y)*c,s=(e.min.y-f.y)*c),i>s||o>r||((o>i||isNaN(i))&&(i=o),(s<r||isNaN(r))&&(r=s),d>=0?(a=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(a=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,Di)!==null}intersectTriangle(e,n,i,r,o){jc.subVectors(n,e),nl.subVectors(i,e),Jc.crossVectors(jc,nl);let s=this.direction.dot(Jc),a;if(s>0){if(r)return null;a=1}else if(s<0)a=-1,s=-s;else return null;vr.subVectors(this.origin,e);const l=a*this.direction.dot(nl.crossVectors(vr,nl));if(l<0)return null;const u=a*this.direction.dot(jc.cross(vr));if(u<0||l+u>s)return null;const c=-a*vr.dot(Jc);return c<0?null:this.at(c/s,o)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class s_ extends Ku{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Et(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ir,this.combine=B0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Sm=new Wt,Jr=new tM,il=new Lh,Mm=new _e,rl=new _e,ol=new _e,sl=new _e,Qc=new _e,al=new _e,wm=new _e,ll=new _e;class bi extends Nn{constructor(e=new lr,n=new s_){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,s=r.length;o<s;o++){const a=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,o=i.morphAttributes.position,s=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(o&&a){al.set(0,0,0);for(let l=0,u=o.length;l<u;l++){const c=a[l],d=o[l];c!==0&&(Qc.fromBufferAttribute(d,e),s?al.addScaledVector(Qc,c):al.addScaledVector(Qc.sub(n),c))}n.add(al)}return n}raycast(e,n){const i=this.geometry,r=this.material,o=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),il.copy(i.boundingSphere),il.applyMatrix4(o),Jr.copy(e.ray).recast(e.near),!(il.containsPoint(Jr.origin)===!1&&(Jr.intersectSphere(il,Mm)===null||Jr.origin.distanceToSquared(Mm)>(e.far-e.near)**2))&&(Sm.copy(o).invert(),Jr.copy(e.ray).applyMatrix4(Sm),!(i.boundingBox!==null&&Jr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Jr)))}_computeIntersections(e,n,i){let r;const o=this.geometry,s=this.material,a=o.index,l=o.attributes.position,u=o.attributes.uv,c=o.attributes.uv1,d=o.attributes.normal,f=o.groups,h=o.drawRange;if(a!==null)if(Array.isArray(s))for(let m=0,v=f.length;m<v;m++){const g=f[m],p=s[g.materialIndex],b=Math.max(g.start,h.start),M=Math.min(a.count,Math.min(g.start+g.count,h.start+h.count));for(let y=b,I=M;y<I;y+=3){const D=a.getX(y),B=a.getX(y+1),_=a.getX(y+2);r=ul(this,p,e,i,u,c,d,D,B,_),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{const m=Math.max(0,h.start),v=Math.min(a.count,h.start+h.count);for(let g=m,p=v;g<p;g+=3){const b=a.getX(g),M=a.getX(g+1),y=a.getX(g+2);r=ul(this,s,e,i,u,c,d,b,M,y),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(s))for(let m=0,v=f.length;m<v;m++){const g=f[m],p=s[g.materialIndex],b=Math.max(g.start,h.start),M=Math.min(l.count,Math.min(g.start+g.count,h.start+h.count));for(let y=b,I=M;y<I;y+=3){const D=y,B=y+1,_=y+2;r=ul(this,p,e,i,u,c,d,D,B,_),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{const m=Math.max(0,h.start),v=Math.min(l.count,h.start+h.count);for(let g=m,p=v;g<p;g+=3){const b=g,M=g+1,y=g+2;r=ul(this,s,e,i,u,c,d,b,M,y),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}}}function nM(t,e,n,i,r,o,s,a){let l;if(e.side===Tn?l=i.intersectTriangle(s,o,r,!0,a):l=i.intersectTriangle(r,o,s,e.side===Br,a),l===null)return null;ll.copy(a),ll.applyMatrix4(t.matrixWorld);const u=n.ray.origin.distanceTo(ll);return u<n.near||u>n.far?null:{distance:u,point:ll.clone(),object:t}}function ul(t,e,n,i,r,o,s,a,l,u){t.getVertexPosition(a,rl),t.getVertexPosition(l,ol),t.getVertexPosition(u,sl);const c=nM(t,e,n,i,rl,ol,sl,wm);if(c){const d=new _e;Wn.getBarycoord(wm,rl,ol,sl,d),r&&(c.uv=Wn.getInterpolatedAttribute(r,a,l,u,d,new Tt)),o&&(c.uv1=Wn.getInterpolatedAttribute(o,a,l,u,d,new Tt)),s&&(c.normal=Wn.getInterpolatedAttribute(s,a,l,u,d,new _e),c.normal.dot(i.direction)>0&&c.normal.multiplyScalar(-1));const f={a,b:l,c:u,normal:new _e,materialIndex:0};Wn.getNormal(rl,ol,sl,f.normal),c.face=f,c.barycoord=d}return c}class iM extends rn{constructor(e=null,n=1,i=1,r,o,s,a,l,u=nn,c=nn,d,f){super(null,s,a,l,u,c,r,o,d,f),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const ed=new _e,rM=new _e,oM=new ct;class io{constructor(e=new _e(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=ed.subVectors(i,n).cross(rM.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(ed),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/r;return o<0||o>1?null:n.copy(e.start).addScaledVector(i,o)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||oM.getNormalMatrix(e),r=this.coplanarPoint(ed).applyMatrix4(e),o=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(o),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Qr=new Lh,sM=new Tt(.5,.5),cl=new _e;class a_{constructor(e=new io,n=new io,i=new io,r=new io,o=new io,s=new io){this.planes=[e,n,i,r,o,s]}set(e,n,i,r,o,s){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(o),a[5].copy(s),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=pi,i=!1){const r=this.planes,o=e.elements,s=o[0],a=o[1],l=o[2],u=o[3],c=o[4],d=o[5],f=o[6],h=o[7],m=o[8],v=o[9],g=o[10],p=o[11],b=o[12],M=o[13],y=o[14],I=o[15];if(r[0].setComponents(u-s,h-c,p-m,I-b).normalize(),r[1].setComponents(u+s,h+c,p+m,I+b).normalize(),r[2].setComponents(u+a,h+d,p+v,I+M).normalize(),r[3].setComponents(u-a,h-d,p-v,I-M).normalize(),i)r[4].setComponents(l,f,g,y).normalize(),r[5].setComponents(u-l,h-f,p-g,I-y).normalize();else if(r[4].setComponents(u-l,h-f,p-g,I-y).normalize(),n===pi)r[5].setComponents(u+l,h+f,p+g,I+y).normalize();else if(n===uu)r[5].setComponents(l,f,g,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Qr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Qr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Qr)}intersectsSprite(e){Qr.center.set(0,0,0);const n=sM.distanceTo(e.center);return Qr.radius=.7071067811865476+n,Qr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Qr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let o=0;o<6;o++)if(n[o].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(cl.x=r.normal.x>0?e.max.x:e.min.x,cl.y=r.normal.y>0?e.max.y:e.min.y,cl.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(cl)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class aM extends rn{constructor(e,n,i,r,o=Rt,s=Rt,a,l,u){super(e,n,i,r,o,s,a,l,u),this.isVideoTexture=!0,this.generateMipmaps=!1,this._requestVideoFrameCallbackId=0;const c=this;function d(){c.needsUpdate=!0,c._requestVideoFrameCallbackId=e.requestVideoFrameCallback(d)}"requestVideoFrameCallback"in e&&(this._requestVideoFrameCallbackId=e.requestVideoFrameCallback(d))}clone(){return new this.constructor(this.image).copy(this)}update(){const e=this.image;"requestVideoFrameCallback"in e===!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}dispose(){this._requestVideoFrameCallbackId!==0&&(this.source.data.cancelVideoFrameCallback(this._requestVideoFrameCallbackId),this._requestVideoFrameCallbackId=0),super.dispose()}}class l_ extends rn{constructor(e=[],n=So,i,r,o,s,a,l,u,c){super(e,n,i,r,o,s,a,l,u,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class fa extends rn{constructor(e,n,i=xi,r,o,s,a=nn,l=nn,u,c=nr,d=1){if(c!==nr&&c!==fo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:n,depth:d};super(f,r,o,s,a,l,c,i,u),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Dh(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class lM extends fa{constructor(e,n=xi,i=So,r,o,s=nn,a=nn,l,u=nr){const c={width:e,height:e,depth:1},d=[c,c,c,c,c,c];super(e,e,n,i,r,o,s,a,l,u),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class u_ extends rn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Da extends lr{constructor(e=1,n=1,i=1,r=1,o=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:o,depthSegments:s};const a=this;r=Math.floor(r),o=Math.floor(o),s=Math.floor(s);const l=[],u=[],c=[],d=[];let f=0,h=0;m("z","y","x",-1,-1,i,n,e,s,o,0),m("z","y","x",1,-1,i,n,-e,s,o,1),m("x","z","y",1,1,e,i,n,r,s,2),m("x","z","y",1,-1,e,i,-n,r,s,3),m("x","y","z",1,-1,e,n,i,r,o,4),m("x","y","z",-1,-1,e,n,-i,r,o,5),this.setIndex(l),this.setAttribute("position",new Zi(u,3)),this.setAttribute("normal",new Zi(c,3)),this.setAttribute("uv",new Zi(d,2));function m(v,g,p,b,M,y,I,D,B,_,x){const R=y/B,T=I/_,A=y/2,X=I/2,E=D/2,k=B+1,C=_+1;let N=0,U=0;const H=new _e;for(let G=0;G<C;G++){const ne=G*T-X;for(let re=0;re<k;re++){const ye=re*R-A;H[v]=ye*b,H[g]=ne*M,H[p]=E,u.push(H.x,H.y,H.z),H[v]=0,H[g]=0,H[p]=D>0?1:-1,c.push(H.x,H.y,H.z),d.push(re/B),d.push(1-G/_),N+=1}}for(let G=0;G<_;G++)for(let ne=0;ne<B;ne++){const re=f+ne+k*G,ye=f+ne+k*(G+1),we=f+(ne+1)+k*(G+1),te=f+(ne+1)+k*G;l.push(re,ye,te),l.push(ye,we,te),U+=6}a.addGroup(h,U,x),h+=U,f+=N}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Da(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class La extends lr{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const o=e/2,s=n/2,a=Math.floor(i),l=Math.floor(r),u=a+1,c=l+1,d=e/a,f=n/l,h=[],m=[],v=[],g=[];for(let p=0;p<c;p++){const b=p*f-s;for(let M=0;M<u;M++){const y=M*d-o;m.push(y,-b,0),v.push(0,0,1),g.push(M/a),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let b=0;b<a;b++){const M=b+u*p,y=b+u*(p+1),I=b+1+u*(p+1),D=b+1+u*p;h.push(M,y,D),h.push(y,I,D)}this.setIndex(h),this.setAttribute("position",new Zi(m,3)),this.setAttribute("normal",new Zi(v,3)),this.setAttribute("uv",new Zi(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new La(e.width,e.height,e.widthSegments,e.heightSegments)}}function ds(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(st("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function gn(t){const e={};for(let n=0;n<t.length;n++){const i=ds(t[n]);for(const r in i)e[r]=i[r]}return e}function uM(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function c_(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:gt.workingColorSpace}const cM={clone:ds,merge:gn};var dM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,fM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Qn extends Ku{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=dM,this.fragmentShader=fM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ds(e.uniforms),this.uniformsGroups=uM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const s=this.uniforms[r].value;s&&s.isTexture?n.uniforms[r]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?n.uniforms[r]={type:"c",value:s.getHex()}:s&&s.isVector2?n.uniforms[r]={type:"v2",value:s.toArray()}:s&&s.isVector3?n.uniforms[r]={type:"v3",value:s.toArray()}:s&&s.isVector4?n.uniforms[r]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?n.uniforms[r]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?n.uniforms[r]={type:"m4",value:s.toArray()}:n.uniforms[r]={value:s}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class hM extends Qn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class pM extends Ku{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=MS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class mM extends Ku{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const dl=new _e,fl=new ys,ri=new _e;class d_ extends Nn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Wt,this.projectionMatrix=new Wt,this.projectionMatrixInverse=new Wt,this.coordinateSystem=pi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(dl,fl,ri),ri.x===1&&ri.y===1&&ri.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(dl,fl,ri.set(1,1,1)).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorld.decompose(dl,fl,ri),ri.x===1&&ri.y===1&&ri.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(dl,fl,ri.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const _r=new _e,Em=new Tt,Tm=new Tt;class Gn extends d_{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Rf*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Pc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Rf*2*Math.atan(Math.tan(Pc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){_r.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(_r.x,_r.y).multiplyScalar(-e/_r.z),_r.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(_r.x,_r.y).multiplyScalar(-e/_r.z)}getViewSize(e,n){return this.getViewBounds(e,Em,Tm),n.subVectors(Tm,Em)}setViewOffset(e,n,i,r,o,s){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=o,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Pc*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,o=-.5*r;const s=this.view;if(this.view!==null&&this.view.enabled){const l=s.fullWidth,u=s.fullHeight;o+=s.offsetX*r/l,n-=s.offsetY*i/u,r*=s.width/l,i*=s.height/u}const a=this.filmOffset;a!==0&&(o+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+r,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class Fh extends d_{constructor(e=-1,n=1,i=1,r=-1,o=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=o,this.far=s,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,o,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=o,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let o=i-e,s=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=u*this.view.offsetX,s=o+u*this.view.width,a-=c*this.view.offsetY,l=a-c*this.view.height}this.projectionMatrix.makeOrthographic(o,s,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Ho=-90,Go=1;class gM extends Nn{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Gn(Ho,Go,e,n);r.layers=this.layers,this.add(r);const o=new Gn(Ho,Go,e,n);o.layers=this.layers,this.add(o);const s=new Gn(Ho,Go,e,n);s.layers=this.layers,this.add(s);const a=new Gn(Ho,Go,e,n);a.layers=this.layers,this.add(a);const l=new Gn(Ho,Go,e,n);l.layers=this.layers,this.add(l);const u=new Gn(Ho,Go,e,n);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,o,s,a,l]=n;for(const u of n)this.remove(u);if(e===pi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===uu)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of n)this.add(u),u.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[o,s,a,l,u,c]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,o),e.setRenderTarget(i,1,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,s),e.setRenderTarget(i,2,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,a),e.setRenderTarget(i,3,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,l),e.setRenderTarget(i,4,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,u),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,c),e.setRenderTarget(d,f,h),e.xr.enabled=m,i.texture.needsPMREMUpdate=!0}}class vM extends Gn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function Am(t,e,n,i){const r=_M(i);switch(n){case j0:return t*e;case Q0:return t*e/r.components*r.byteLength;case Ch:return t*e/r.components*r.byteLength;case cs:return t*e*2/r.components*r.byteLength;case Rh:return t*e*2/r.components*r.byteLength;case J0:return t*e*3/r.components*r.byteLength;case xn:return t*e*4/r.components*r.byteLength;case Ih:return t*e*4/r.components*r.byteLength;case Ul:case Ol:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Bl:case kl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case jd:case Qd:return Math.max(t,16)*Math.max(e,8)/4;case Zd:case Jd:return Math.max(t,8)*Math.max(e,8)/2;case ef:case tf:case rf:case of:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case nf:case sf:case af:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case lf:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case uf:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case cf:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case df:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case ff:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case hf:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case pf:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case mf:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case gf:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case vf:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case _f:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case yf:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case xf:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case bf:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case Sf:case Mf:case wf:return Math.ceil(t/4)*Math.ceil(e/4)*16;case Ef:case Tf:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Af:case Cf:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function _M(t){switch(t){case _n:case Y0:return{byteLength:1,components:1};case ca:case q0:case tr:return{byteLength:2,components:1};case Th:case Ah:return{byteLength:2,components:4};case xi:case Eh:case hi:return{byteLength:4,components:1};case K0:case Z0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:wh}}));typeof window<"u"&&(window.__THREE__?st("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=wh);function f_(){let t=null,e=!1,n=null,i=null;function r(o,s){n(o,s),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(o){n=o},setContext:function(o){t=o}}}function yM(t){const e=new WeakMap;function n(a,l){const u=a.array,c=a.usage,d=u.byteLength,f=t.createBuffer();t.bindBuffer(l,f),t.bufferData(l,u,c),a.onUploadCallback();let h;if(u instanceof Float32Array)h=t.FLOAT;else if(typeof Float16Array<"u"&&u instanceof Float16Array)h=t.HALF_FLOAT;else if(u instanceof Uint16Array)a.isFloat16BufferAttribute?h=t.HALF_FLOAT:h=t.UNSIGNED_SHORT;else if(u instanceof Int16Array)h=t.SHORT;else if(u instanceof Uint32Array)h=t.UNSIGNED_INT;else if(u instanceof Int32Array)h=t.INT;else if(u instanceof Int8Array)h=t.BYTE;else if(u instanceof Uint8Array)h=t.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)h=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:f,type:h,bytesPerElement:u.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,l,u){const c=l.array,d=l.updateRanges;if(t.bindBuffer(u,a),d.length===0)t.bufferSubData(u,0,c);else{d.sort((h,m)=>h.start-m.start);let f=0;for(let h=1;h<d.length;h++){const m=d[f],v=d[h];v.start<=m.start+m.count+1?m.count=Math.max(m.count,v.start+v.count-m.start):(++f,d[f]=v)}d.length=f+1;for(let h=0,m=d.length;h<m;h++){const v=d[h];t.bufferSubData(u,v.start*c.BYTES_PER_ELEMENT,c,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function o(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function s(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const c=e.get(a);(!c||c.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const u=e.get(a);if(u===void 0)e.set(a,n(a,l));else if(u.version<a.version){if(u.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(u.buffer,a,l),u.version=a.version}}return{get:r,remove:o,update:s}}var xM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,bM=`#ifdef USE_ALPHAHASH
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
#endif`,SM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,MM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,wM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,EM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,TM=`#ifdef USE_AOMAP
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
#endif`,AM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,CM=`#ifdef USE_BATCHING
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
#endif`,RM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,IM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,PM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,NM=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,DM=`#ifdef USE_IRIDESCENCE
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
#endif`,LM=`#ifdef USE_BUMPMAP
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
#endif`,FM=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,UM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,OM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,BM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,kM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,zM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,VM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,$M=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,HM=`#define PI 3.141592653589793
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
} // validated`,GM=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,WM=`vec3 transformedNormal = objectNormal;
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
#endif`,XM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,YM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,qM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,KM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ZM="gl_FragColor = linearToOutputTexel( gl_FragColor );",jM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,JM=`#ifdef USE_ENVMAP
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
#endif`,QM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,ew=`#ifdef USE_ENVMAP
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
#endif`,tw=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,nw=`#ifdef USE_ENVMAP
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
#endif`,iw=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,rw=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ow=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,sw=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,aw=`#ifdef USE_GRADIENTMAP
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
}`,lw=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,uw=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,cw=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,dw=`uniform bool receiveShadow;
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
#endif`,fw=`#ifdef USE_ENVMAP
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
#endif`,hw=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,pw=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,mw=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,gw=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,vw=`PhysicalMaterial material;
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
#endif`,_w=`uniform sampler2D dfgLUT;
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
}`,yw=`
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
#endif`,xw=`#if defined( RE_IndirectDiffuse )
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
#endif`,bw=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Sw=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Mw=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ww=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ew=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Tw=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Aw=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Cw=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Rw=`#if defined( USE_POINTS_UV )
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
#endif`,Iw=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Pw=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Nw=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Dw=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Lw=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Fw=`#ifdef USE_MORPHTARGETS
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
#endif`,Uw=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ow=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Bw=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,kw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,zw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Vw=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,$w=`#ifdef USE_NORMALMAP
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
#endif`,Hw=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Gw=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ww=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Xw=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Yw=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,qw=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Kw=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Zw=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,jw=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Jw=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Qw=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,eE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,tE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,nE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,iE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,rE=`float getShadowMask() {
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
}`,oE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,sE=`#ifdef USE_SKINNING
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
#endif`,aE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,lE=`#ifdef USE_SKINNING
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
#endif`,uE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,cE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,dE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,fE=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,hE=`#ifdef USE_TRANSMISSION
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
#endif`,pE=`#ifdef USE_TRANSMISSION
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
#endif`,mE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,gE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,vE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,_E=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const yE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,xE=`uniform sampler2D t2D;
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
}`,bE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,SE=`#ifdef ENVMAP_TYPE_CUBE
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
}`,ME=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,wE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,EE=`#include <common>
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
}`,TE=`#if DEPTH_PACKING == 3200
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
}`,AE=`#define DISTANCE
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
}`,CE=`#define DISTANCE
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
}`,RE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,IE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,PE=`uniform float scale;
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
}`,NE=`uniform vec3 diffuse;
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
}`,DE=`#include <common>
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
}`,LE=`uniform vec3 diffuse;
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
}`,FE=`#define LAMBERT
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
}`,UE=`#define LAMBERT
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
}`,OE=`#define MATCAP
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
}`,BE=`#define MATCAP
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
}`,kE=`#define NORMAL
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
}`,zE=`#define NORMAL
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
}`,VE=`#define PHONG
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
}`,$E=`#define PHONG
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
}`,HE=`#define STANDARD
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
}`,GE=`#define STANDARD
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
}`,WE=`#define TOON
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
}`,XE=`#define TOON
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
}`,YE=`uniform float size;
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
}`,qE=`uniform vec3 diffuse;
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
}`,KE=`#include <common>
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
}`,ZE=`uniform vec3 color;
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
}`,jE=`uniform float rotation;
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
}`,JE=`uniform vec3 diffuse;
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
}`,dt={alphahash_fragment:xM,alphahash_pars_fragment:bM,alphamap_fragment:SM,alphamap_pars_fragment:MM,alphatest_fragment:wM,alphatest_pars_fragment:EM,aomap_fragment:TM,aomap_pars_fragment:AM,batching_pars_vertex:CM,batching_vertex:RM,begin_vertex:IM,beginnormal_vertex:PM,bsdfs:NM,iridescence_fragment:DM,bumpmap_pars_fragment:LM,clipping_planes_fragment:FM,clipping_planes_pars_fragment:UM,clipping_planes_pars_vertex:OM,clipping_planes_vertex:BM,color_fragment:kM,color_pars_fragment:zM,color_pars_vertex:VM,color_vertex:$M,common:HM,cube_uv_reflection_fragment:GM,defaultnormal_vertex:WM,displacementmap_pars_vertex:XM,displacementmap_vertex:YM,emissivemap_fragment:qM,emissivemap_pars_fragment:KM,colorspace_fragment:ZM,colorspace_pars_fragment:jM,envmap_fragment:JM,envmap_common_pars_fragment:QM,envmap_pars_fragment:ew,envmap_pars_vertex:tw,envmap_physical_pars_fragment:fw,envmap_vertex:nw,fog_vertex:iw,fog_pars_vertex:rw,fog_fragment:ow,fog_pars_fragment:sw,gradientmap_pars_fragment:aw,lightmap_pars_fragment:lw,lights_lambert_fragment:uw,lights_lambert_pars_fragment:cw,lights_pars_begin:dw,lights_toon_fragment:hw,lights_toon_pars_fragment:pw,lights_phong_fragment:mw,lights_phong_pars_fragment:gw,lights_physical_fragment:vw,lights_physical_pars_fragment:_w,lights_fragment_begin:yw,lights_fragment_maps:xw,lights_fragment_end:bw,logdepthbuf_fragment:Sw,logdepthbuf_pars_fragment:Mw,logdepthbuf_pars_vertex:ww,logdepthbuf_vertex:Ew,map_fragment:Tw,map_pars_fragment:Aw,map_particle_fragment:Cw,map_particle_pars_fragment:Rw,metalnessmap_fragment:Iw,metalnessmap_pars_fragment:Pw,morphinstance_vertex:Nw,morphcolor_vertex:Dw,morphnormal_vertex:Lw,morphtarget_pars_vertex:Fw,morphtarget_vertex:Uw,normal_fragment_begin:Ow,normal_fragment_maps:Bw,normal_pars_fragment:kw,normal_pars_vertex:zw,normal_vertex:Vw,normalmap_pars_fragment:$w,clearcoat_normal_fragment_begin:Hw,clearcoat_normal_fragment_maps:Gw,clearcoat_pars_fragment:Ww,iridescence_pars_fragment:Xw,opaque_fragment:Yw,packing:qw,premultiplied_alpha_fragment:Kw,project_vertex:Zw,dithering_fragment:jw,dithering_pars_fragment:Jw,roughnessmap_fragment:Qw,roughnessmap_pars_fragment:eE,shadowmap_pars_fragment:tE,shadowmap_pars_vertex:nE,shadowmap_vertex:iE,shadowmask_pars_fragment:rE,skinbase_vertex:oE,skinning_pars_vertex:sE,skinning_vertex:aE,skinnormal_vertex:lE,specularmap_fragment:uE,specularmap_pars_fragment:cE,tonemapping_fragment:dE,tonemapping_pars_fragment:fE,transmission_fragment:hE,transmission_pars_fragment:pE,uv_pars_fragment:mE,uv_pars_vertex:gE,uv_vertex:vE,worldpos_vertex:_E,background_vert:yE,background_frag:xE,backgroundCube_vert:bE,backgroundCube_frag:SE,cube_vert:ME,cube_frag:wE,depth_vert:EE,depth_frag:TE,distance_vert:AE,distance_frag:CE,equirect_vert:RE,equirect_frag:IE,linedashed_vert:PE,linedashed_frag:NE,meshbasic_vert:DE,meshbasic_frag:LE,meshlambert_vert:FE,meshlambert_frag:UE,meshmatcap_vert:OE,meshmatcap_frag:BE,meshnormal_vert:kE,meshnormal_frag:zE,meshphong_vert:VE,meshphong_frag:$E,meshphysical_vert:HE,meshphysical_frag:GE,meshtoon_vert:WE,meshtoon_frag:XE,points_vert:YE,points_frag:qE,shadow_vert:KE,shadow_frag:ZE,sprite_vert:jE,sprite_frag:JE},ke={common:{diffuse:{value:new Et(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ct},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ct}},envmap:{envMap:{value:null},envMapRotation:{value:new ct},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ct}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ct}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ct},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ct},normalScale:{value:new Tt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ct},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ct}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ct}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ct}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Et(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Et(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0},uvTransform:{value:new ct}},sprite:{diffuse:{value:new Et(16777215)},opacity:{value:1},center:{value:new Tt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ct},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0}}},ci={basic:{uniforms:gn([ke.common,ke.specularmap,ke.envmap,ke.aomap,ke.lightmap,ke.fog]),vertexShader:dt.meshbasic_vert,fragmentShader:dt.meshbasic_frag},lambert:{uniforms:gn([ke.common,ke.specularmap,ke.envmap,ke.aomap,ke.lightmap,ke.emissivemap,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.fog,ke.lights,{emissive:{value:new Et(0)},envMapIntensity:{value:1}}]),vertexShader:dt.meshlambert_vert,fragmentShader:dt.meshlambert_frag},phong:{uniforms:gn([ke.common,ke.specularmap,ke.envmap,ke.aomap,ke.lightmap,ke.emissivemap,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.fog,ke.lights,{emissive:{value:new Et(0)},specular:{value:new Et(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:dt.meshphong_vert,fragmentShader:dt.meshphong_frag},standard:{uniforms:gn([ke.common,ke.envmap,ke.aomap,ke.lightmap,ke.emissivemap,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.roughnessmap,ke.metalnessmap,ke.fog,ke.lights,{emissive:{value:new Et(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:dt.meshphysical_vert,fragmentShader:dt.meshphysical_frag},toon:{uniforms:gn([ke.common,ke.aomap,ke.lightmap,ke.emissivemap,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.gradientmap,ke.fog,ke.lights,{emissive:{value:new Et(0)}}]),vertexShader:dt.meshtoon_vert,fragmentShader:dt.meshtoon_frag},matcap:{uniforms:gn([ke.common,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.fog,{matcap:{value:null}}]),vertexShader:dt.meshmatcap_vert,fragmentShader:dt.meshmatcap_frag},points:{uniforms:gn([ke.points,ke.fog]),vertexShader:dt.points_vert,fragmentShader:dt.points_frag},dashed:{uniforms:gn([ke.common,ke.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:dt.linedashed_vert,fragmentShader:dt.linedashed_frag},depth:{uniforms:gn([ke.common,ke.displacementmap]),vertexShader:dt.depth_vert,fragmentShader:dt.depth_frag},normal:{uniforms:gn([ke.common,ke.bumpmap,ke.normalmap,ke.displacementmap,{opacity:{value:1}}]),vertexShader:dt.meshnormal_vert,fragmentShader:dt.meshnormal_frag},sprite:{uniforms:gn([ke.sprite,ke.fog]),vertexShader:dt.sprite_vert,fragmentShader:dt.sprite_frag},background:{uniforms:{uvTransform:{value:new ct},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:dt.background_vert,fragmentShader:dt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ct}},vertexShader:dt.backgroundCube_vert,fragmentShader:dt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:dt.cube_vert,fragmentShader:dt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:dt.equirect_vert,fragmentShader:dt.equirect_frag},distance:{uniforms:gn([ke.common,ke.displacementmap,{referencePosition:{value:new _e},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:dt.distance_vert,fragmentShader:dt.distance_frag},shadow:{uniforms:gn([ke.lights,ke.fog,{color:{value:new Et(0)},opacity:{value:1}}]),vertexShader:dt.shadow_vert,fragmentShader:dt.shadow_frag}};ci.physical={uniforms:gn([ci.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ct},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ct},clearcoatNormalScale:{value:new Tt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ct},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ct},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ct},sheen:{value:0},sheenColor:{value:new Et(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ct},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ct},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ct},transmissionSamplerSize:{value:new Tt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ct},attenuationDistance:{value:0},attenuationColor:{value:new Et(0)},specularColor:{value:new Et(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ct},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ct},anisotropyVector:{value:new Tt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ct}}]),vertexShader:dt.meshphysical_vert,fragmentShader:dt.meshphysical_frag};const hl={r:0,b:0,g:0},eo=new ir,QE=new Wt;function eT(t,e,n,i,r,o){const s=new Et(0);let a=r===!0?0:1,l,u,c=null,d=0,f=null;function h(b){let M=b.isScene===!0?b.background:null;if(M&&M.isTexture){const y=b.backgroundBlurriness>0;M=e.get(M,y)}return M}function m(b){let M=!1;const y=h(b);y===null?g(s,a):y&&y.isColor&&(g(y,1),M=!0);const I=t.xr.getEnvironmentBlendMode();I==="additive"?n.buffers.color.setClear(0,0,0,1,o):I==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(t.autoClear||M)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function v(b,M){const y=h(M);y&&(y.isCubeTexture||y.mapping===qu)?(u===void 0&&(u=new bi(new Da(1,1,1),new Qn({name:"BackgroundCubeMaterial",uniforms:ds(ci.backgroundCube.uniforms),vertexShader:ci.backgroundCube.vertexShader,fragmentShader:ci.backgroundCube.fragmentShader,side:Tn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(I,D,B){this.matrixWorld.copyPosition(B.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),eo.copy(M.backgroundRotation),eo.x*=-1,eo.y*=-1,eo.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(eo.y*=-1,eo.z*=-1),u.material.uniforms.envMap.value=y,u.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(QE.makeRotationFromEuler(eo)),u.material.toneMapped=gt.getTransfer(y.colorSpace)!==Mt,(c!==y||d!==y.version||f!==t.toneMapping)&&(u.material.needsUpdate=!0,c=y,d=y.version,f=t.toneMapping),u.layers.enableAll(),b.unshift(u,u.geometry,u.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new bi(new La(2,2),new Qn({name:"BackgroundMaterial",uniforms:ds(ci.background.uniforms),vertexShader:ci.background.vertexShader,fragmentShader:ci.background.fragmentShader,side:Br,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=gt.getTransfer(y.colorSpace)!==Mt,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(c!==y||d!==y.version||f!==t.toneMapping)&&(l.material.needsUpdate=!0,c=y,d=y.version,f=t.toneMapping),l.layers.enableAll(),b.unshift(l,l.geometry,l.material,0,0,null))}function g(b,M){b.getRGB(hl,c_(t)),n.buffers.color.setClear(hl.r,hl.g,hl.b,M,o)}function p(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return s},setClearColor:function(b,M=1){s.set(b),a=M,g(s,a)},getClearAlpha:function(){return a},setClearAlpha:function(b){a=b,g(s,a)},render:m,addToRenderList:v,dispose:p}}function tT(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=f(null);let o=r,s=!1;function a(T,A,X,E,k){let C=!1;const N=d(T,E,X,A);o!==N&&(o=N,u(o.object)),C=h(T,E,X,k),C&&m(T,E,X,k),k!==null&&e.update(k,t.ELEMENT_ARRAY_BUFFER),(C||s)&&(s=!1,y(T,A,X,E),k!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(k).buffer))}function l(){return t.createVertexArray()}function u(T){return t.bindVertexArray(T)}function c(T){return t.deleteVertexArray(T)}function d(T,A,X,E){const k=E.wireframe===!0;let C=i[A.id];C===void 0&&(C={},i[A.id]=C);const N=T.isInstancedMesh===!0?T.id:0;let U=C[N];U===void 0&&(U={},C[N]=U);let H=U[X.id];H===void 0&&(H={},U[X.id]=H);let G=H[k];return G===void 0&&(G=f(l()),H[k]=G),G}function f(T){const A=[],X=[],E=[];for(let k=0;k<n;k++)A[k]=0,X[k]=0,E[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:A,enabledAttributes:X,attributeDivisors:E,object:T,attributes:{},index:null}}function h(T,A,X,E){const k=o.attributes,C=A.attributes;let N=0;const U=X.getAttributes();for(const H in U)if(U[H].location>=0){const ne=k[H];let re=C[H];if(re===void 0&&(H==="instanceMatrix"&&T.instanceMatrix&&(re=T.instanceMatrix),H==="instanceColor"&&T.instanceColor&&(re=T.instanceColor)),ne===void 0||ne.attribute!==re||re&&ne.data!==re.data)return!0;N++}return o.attributesNum!==N||o.index!==E}function m(T,A,X,E){const k={},C=A.attributes;let N=0;const U=X.getAttributes();for(const H in U)if(U[H].location>=0){let ne=C[H];ne===void 0&&(H==="instanceMatrix"&&T.instanceMatrix&&(ne=T.instanceMatrix),H==="instanceColor"&&T.instanceColor&&(ne=T.instanceColor));const re={};re.attribute=ne,ne&&ne.data&&(re.data=ne.data),k[H]=re,N++}o.attributes=k,o.attributesNum=N,o.index=E}function v(){const T=o.newAttributes;for(let A=0,X=T.length;A<X;A++)T[A]=0}function g(T){p(T,0)}function p(T,A){const X=o.newAttributes,E=o.enabledAttributes,k=o.attributeDivisors;X[T]=1,E[T]===0&&(t.enableVertexAttribArray(T),E[T]=1),k[T]!==A&&(t.vertexAttribDivisor(T,A),k[T]=A)}function b(){const T=o.newAttributes,A=o.enabledAttributes;for(let X=0,E=A.length;X<E;X++)A[X]!==T[X]&&(t.disableVertexAttribArray(X),A[X]=0)}function M(T,A,X,E,k,C,N){N===!0?t.vertexAttribIPointer(T,A,X,k,C):t.vertexAttribPointer(T,A,X,E,k,C)}function y(T,A,X,E){v();const k=E.attributes,C=X.getAttributes(),N=A.defaultAttributeValues;for(const U in C){const H=C[U];if(H.location>=0){let G=k[U];if(G===void 0&&(U==="instanceMatrix"&&T.instanceMatrix&&(G=T.instanceMatrix),U==="instanceColor"&&T.instanceColor&&(G=T.instanceColor)),G!==void 0){const ne=G.normalized,re=G.itemSize,ye=e.get(G);if(ye===void 0)continue;const we=ye.buffer,te=ye.type,L=ye.bytesPerElement,j=te===t.INT||te===t.UNSIGNED_INT||G.gpuType===Eh;if(G.isInterleavedBufferAttribute){const Q=G.data,fe=Q.stride,Se=G.offset;if(Q.isInstancedInterleavedBuffer){for(let Ee=0;Ee<H.locationSize;Ee++)p(H.location+Ee,Q.meshPerAttribute);T.isInstancedMesh!==!0&&E._maxInstanceCount===void 0&&(E._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let Ee=0;Ee<H.locationSize;Ee++)g(H.location+Ee);t.bindBuffer(t.ARRAY_BUFFER,we);for(let Ee=0;Ee<H.locationSize;Ee++)M(H.location+Ee,re/H.locationSize,te,ne,fe*L,(Se+re/H.locationSize*Ee)*L,j)}else{if(G.isInstancedBufferAttribute){for(let Q=0;Q<H.locationSize;Q++)p(H.location+Q,G.meshPerAttribute);T.isInstancedMesh!==!0&&E._maxInstanceCount===void 0&&(E._maxInstanceCount=G.meshPerAttribute*G.count)}else for(let Q=0;Q<H.locationSize;Q++)g(H.location+Q);t.bindBuffer(t.ARRAY_BUFFER,we);for(let Q=0;Q<H.locationSize;Q++)M(H.location+Q,re/H.locationSize,te,ne,re*L,re/H.locationSize*Q*L,j)}}else if(N!==void 0){const ne=N[U];if(ne!==void 0)switch(ne.length){case 2:t.vertexAttrib2fv(H.location,ne);break;case 3:t.vertexAttrib3fv(H.location,ne);break;case 4:t.vertexAttrib4fv(H.location,ne);break;default:t.vertexAttrib1fv(H.location,ne)}}}}b()}function I(){x();for(const T in i){const A=i[T];for(const X in A){const E=A[X];for(const k in E){const C=E[k];for(const N in C)c(C[N].object),delete C[N];delete E[k]}}delete i[T]}}function D(T){if(i[T.id]===void 0)return;const A=i[T.id];for(const X in A){const E=A[X];for(const k in E){const C=E[k];for(const N in C)c(C[N].object),delete C[N];delete E[k]}}delete i[T.id]}function B(T){for(const A in i){const X=i[A];for(const E in X){const k=X[E];if(k[T.id]===void 0)continue;const C=k[T.id];for(const N in C)c(C[N].object),delete C[N];delete k[T.id]}}}function _(T){for(const A in i){const X=i[A],E=T.isInstancedMesh===!0?T.id:0,k=X[E];if(k!==void 0){for(const C in k){const N=k[C];for(const U in N)c(N[U].object),delete N[U];delete k[C]}delete X[E],Object.keys(X).length===0&&delete i[A]}}}function x(){R(),s=!0,o!==r&&(o=r,u(o.object))}function R(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:x,resetDefaultState:R,dispose:I,releaseStatesOfGeometry:D,releaseStatesOfObject:_,releaseStatesOfProgram:B,initAttributes:v,enableAttribute:g,disableUnusedAttributes:b}}function nT(t,e,n){let i;function r(u){i=u}function o(u,c){t.drawArrays(i,u,c),n.update(c,i,1)}function s(u,c,d){d!==0&&(t.drawArraysInstanced(i,u,c,d),n.update(c,i,d))}function a(u,c,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,u,0,c,0,d);let h=0;for(let m=0;m<d;m++)h+=c[m];n.update(h,i,1)}function l(u,c,d,f){if(d===0)return;const h=e.get("WEBGL_multi_draw");if(h===null)for(let m=0;m<u.length;m++)s(u[m],c[m],f[m]);else{h.multiDrawArraysInstancedWEBGL(i,u,0,c,0,f,0,d);let m=0;for(let v=0;v<d;v++)m+=c[v]*f[v];n.update(m,i,1)}}this.setMode=r,this.render=o,this.renderInstances=s,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function iT(t,e,n,i){let r;function o(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const B=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(B.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function s(B){return!(B!==xn&&i.convert(B)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(B){const _=B===tr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(B!==_n&&i.convert(B)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&B!==hi&&!_)}function l(B){if(B==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";B="mediump"}return B==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=n.precision!==void 0?n.precision:"highp";const c=l(u);c!==u&&(st("WebGLRenderer:",u,"not supported, using",c,"instead."),u=c);const d=n.logarithmicDepthBuffer===!0,f=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),h=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),m=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=t.getParameter(t.MAX_TEXTURE_SIZE),g=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),p=t.getParameter(t.MAX_VERTEX_ATTRIBS),b=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),M=t.getParameter(t.MAX_VARYING_VECTORS),y=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),I=t.getParameter(t.MAX_SAMPLES),D=t.getParameter(t.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:l,textureFormatReadable:s,textureTypeReadable:a,precision:u,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:h,maxVertexTextures:m,maxTextureSize:v,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:b,maxVaryings:M,maxFragmentUniforms:y,maxSamples:I,samples:D}}function rT(t){const e=this;let n=null,i=0,r=!1,o=!1;const s=new io,a=new ct,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const h=d.length!==0||f||i!==0||r;return r=f,i=d.length,h},this.beginShadows=function(){o=!0,c(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(d,f){n=c(d,f,0)},this.setState=function(d,f,h){const m=d.clippingPlanes,v=d.clipIntersection,g=d.clipShadows,p=t.get(d);if(!r||m===null||m.length===0||o&&!g)o?c(null):u();else{const b=o?0:i,M=b*4;let y=p.clippingState||null;l.value=y,y=c(m,f,M,h);for(let I=0;I!==M;++I)y[I]=n[I];p.clippingState=y,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=b}};function u(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function c(d,f,h,m){const v=d!==null?d.length:0;let g=null;if(v!==0){if(g=l.value,m!==!0||g===null){const p=h+v*4,b=f.matrixWorldInverse;a.getNormalMatrix(b),(g===null||g.length<p)&&(g=new Float32Array(p));for(let M=0,y=h;M!==v;++M,y+=4)s.copy(d[M]).applyMatrix4(b,a),s.normal.toArray(g,y),g[y+3]=s.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,g}}const Lr=4,Cm=[.125,.215,.35,.446,.526,.582],so=20,oT=256,Is=new Fh,Rm=new Et;let td=null,nd=0,id=0,rd=!1;const sT=new _e;class Im{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,i=.1,r=100,o={}){const{size:s=256,position:a=sT}=o;td=this._renderer.getRenderTarget(),nd=this._renderer.getActiveCubeFace(),id=this._renderer.getActiveMipmapLevel(),rd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(s);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,a),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Dm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Nm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(td,nd,id),this._renderer.xr.enabled=rd,e.scissorTest=!1,Wo(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===So||e.mapping===us?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),td=this._renderer.getRenderTarget(),nd=this._renderer.getActiveCubeFace(),id=this._renderer.getActiveMipmapLevel(),rd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Rt,minFilter:Rt,generateMipmaps:!1,type:tr,format:xn,colorSpace:kr,depthBuffer:!1},r=Pm(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Pm(e,n,i);const{_lodMax:o}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=aT(o)),this._blurMaterial=uT(o,e,n),this._ggxMaterial=lT(o,e,n)}return r}_compileMaterial(e){const n=new bi(new lr,e);this._renderer.compile(n,Is)}_sceneToCubeUV(e,n,i,r,o){const l=new Gn(90,1,n,i),u=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,h=d.toneMapping;d.getClearColor(Rm),d.toneMapping=gi,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(r),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new bi(new Da,new s_({name:"PMREM.Background",side:Tn,depthWrite:!1,depthTest:!1})));const v=this._backgroundBox,g=v.material;let p=!1;const b=e.background;b?b.isColor&&(g.color.copy(b),e.background=null,p=!0):(g.color.copy(Rm),p=!0);for(let M=0;M<6;M++){const y=M%3;y===0?(l.up.set(0,u[M],0),l.position.set(o.x,o.y,o.z),l.lookAt(o.x+c[M],o.y,o.z)):y===1?(l.up.set(0,0,u[M]),l.position.set(o.x,o.y,o.z),l.lookAt(o.x,o.y+c[M],o.z)):(l.up.set(0,u[M],0),l.position.set(o.x,o.y,o.z),l.lookAt(o.x,o.y,o.z+c[M]));const I=this._cubeSize;Wo(r,y*I,M>2?I:0,I,I),d.setRenderTarget(r),p&&d.render(v,l),d.render(e,l)}d.toneMapping=h,d.autoClear=f,e.background=b}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===So||e.mapping===us;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Dm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Nm());const o=r?this._cubemapMaterial:this._equirectMaterial,s=this._lodMeshes[0];s.material=o;const a=o.uniforms;a.envMap.value=e;const l=this._cubeSize;Wo(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(s,Is)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodMeshes.length;for(let o=1;o<r;o++)this._applyGGXFilter(e,o-1,o);n.autoClear=i}_applyGGXFilter(e,n,i){const r=this._renderer,o=this._pingPongRenderTarget,s=this._ggxMaterial,a=this._lodMeshes[i];a.material=s;const l=s.uniforms,u=i/(this._lodMeshes.length-1),c=n/(this._lodMeshes.length-1),d=Math.sqrt(u*u-c*c),f=0+u*1.25,h=d*f,{_lodMax:m}=this,v=this._sizeLods[i],g=3*v*(i>m-Lr?i-m+Lr:0),p=4*(this._cubeSize-v);l.envMap.value=e.texture,l.roughness.value=h,l.mipInt.value=m-n,Wo(o,g,p,3*v,2*v),r.setRenderTarget(o),r.render(a,Is),l.envMap.value=o.texture,l.roughness.value=0,l.mipInt.value=m-i,Wo(e,g,p,3*v,2*v),r.setRenderTarget(e),r.render(a,Is)}_blur(e,n,i,r,o){const s=this._pingPongRenderTarget;this._halfBlur(e,s,n,i,r,"latitudinal",o),this._halfBlur(s,e,i,i,r,"longitudinal",o)}_halfBlur(e,n,i,r,o,s,a){const l=this._renderer,u=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&_t("blur direction must be either latitudinal or longitudinal!");const c=3,d=this._lodMeshes[r];d.material=u;const f=u.uniforms,h=this._sizeLods[i]-1,m=isFinite(o)?Math.PI/(2*h):2*Math.PI/(2*so-1),v=o/m,g=isFinite(o)?1+Math.floor(c*v):so;g>so&&st(`sigmaRadians, ${o}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${so}`);const p=[];let b=0;for(let B=0;B<so;++B){const _=B/v,x=Math.exp(-_*_/2);p.push(x),B===0?b+=x:B<g&&(b+=2*x)}for(let B=0;B<p.length;B++)p[B]=p[B]/b;f.envMap.value=e.texture,f.samples.value=g,f.weights.value=p,f.latitudinal.value=s==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:M}=this;f.dTheta.value=m,f.mipInt.value=M-i;const y=this._sizeLods[r],I=3*y*(r>M-Lr?r-M+Lr:0),D=4*(this._cubeSize-y);Wo(n,I,D,3*y,2*y),l.setRenderTarget(n),l.render(d,Is)}}function aT(t){const e=[],n=[],i=[];let r=t;const o=t-Lr+1+Cm.length;for(let s=0;s<o;s++){const a=Math.pow(2,r);e.push(a);let l=1/a;s>t-Lr?l=Cm[s-t+Lr-1]:s===0&&(l=0),n.push(l);const u=1/(a-2),c=-u,d=1+u,f=[c,c,d,c,d,d,c,c,d,d,c,d],h=6,m=6,v=3,g=2,p=1,b=new Float32Array(v*m*h),M=new Float32Array(g*m*h),y=new Float32Array(p*m*h);for(let D=0;D<h;D++){const B=D%3*2/3-1,_=D>2?0:-1,x=[B,_,0,B+2/3,_,0,B+2/3,_+1,0,B,_,0,B+2/3,_+1,0,B,_+1,0];b.set(x,v*m*D),M.set(f,g*m*D);const R=[D,D,D,D,D,D];y.set(R,p*m*D)}const I=new lr;I.setAttribute("position",new vi(b,v)),I.setAttribute("uv",new vi(M,g)),I.setAttribute("faceIndex",new vi(y,p)),i.push(new bi(I,null)),r>Lr&&r--}return{lodMeshes:i,sizeLods:e,sigmas:n}}function Pm(t,e,n){const i=new Mn(t,e,n);return i.texture.mapping=qu,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Wo(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function lT(t,e,n){return new Qn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:oT,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Zu(),fragmentShader:`

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
		`,blending:qi,depthTest:!1,depthWrite:!1})}function uT(t,e,n){const i=new Float32Array(so),r=new _e(0,1,0);return new Qn({name:"SphericalGaussianBlur",defines:{n:so,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Zu(),fragmentShader:`

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
	`}class h_ extends Mn{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new l_(r),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Da(5,5,5),o=new Qn({name:"CubemapFromEquirect",uniforms:ds(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Tn,blending:qi});o.uniforms.tEquirect.value=n;const s=new bi(r,o),a=n.minFilter;return n.minFilter===co&&(n.minFilter=Rt),new gM(1,10,this).update(e,s),n.minFilter=a,s.geometry.dispose(),s.material.dispose(),this}clear(e,n=!0,i=!0,r=!0){const o=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(n,i,r);e.setRenderTarget(o)}}function cT(t){let e=new WeakMap,n=new WeakMap,i=null;function r(f,h=!1){return f==null?null:h?s(f):o(f)}function o(f){if(f&&f.isTexture){const h=f.mapping;if(h===Cc||h===Rc)if(e.has(f)){const m=e.get(f).texture;return a(m,f.mapping)}else{const m=f.image;if(m&&m.height>0){const v=new h_(m.height);return v.fromEquirectangularTexture(t,f),e.set(f,v),f.addEventListener("dispose",u),a(v.texture,f.mapping)}else return null}}return f}function s(f){if(f&&f.isTexture){const h=f.mapping,m=h===Cc||h===Rc,v=h===So||h===us;if(m||v){let g=n.get(f);const p=g!==void 0?g.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==p)return i===null&&(i=new Im(t)),g=m?i.fromEquirectangular(f,g):i.fromCubemap(f,g),g.texture.pmremVersion=f.pmremVersion,n.set(f,g),g.texture;if(g!==void 0)return g.texture;{const b=f.image;return m&&b&&b.height>0||v&&b&&l(b)?(i===null&&(i=new Im(t)),g=m?i.fromEquirectangular(f):i.fromCubemap(f),g.texture.pmremVersion=f.pmremVersion,n.set(f,g),f.addEventListener("dispose",c),g.texture):null}}}return f}function a(f,h){return h===Cc?f.mapping=So:h===Rc&&(f.mapping=us),f}function l(f){let h=0;const m=6;for(let v=0;v<m;v++)f[v]!==void 0&&h++;return h===m}function u(f){const h=f.target;h.removeEventListener("dispose",u);const m=e.get(h);m!==void 0&&(e.delete(h),m.dispose())}function c(f){const h=f.target;h.removeEventListener("dispose",c);const m=n.get(h);m!==void 0&&(n.delete(h),m.dispose())}function d(){e=new WeakMap,n=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:d}}function dT(t){const e={};function n(i){if(e[i]!==void 0)return e[i];const r=t.getExtension(i);return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&du("WebGLRenderer: "+i+" extension not supported."),r}}}function fT(t,e,n,i){const r={},o=new WeakMap;function s(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const m in f.attributes)e.remove(f.attributes[m]);f.removeEventListener("dispose",s),delete r[f.id];const h=o.get(f);h&&(e.remove(h),o.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,n.memory.geometries--}function a(d,f){return r[f.id]===!0||(f.addEventListener("dispose",s),r[f.id]=!0,n.memory.geometries++),f}function l(d){const f=d.attributes;for(const h in f)e.update(f[h],t.ARRAY_BUFFER)}function u(d){const f=[],h=d.index,m=d.attributes.position;let v=0;if(m===void 0)return;if(h!==null){const b=h.array;v=h.version;for(let M=0,y=b.length;M<y;M+=3){const I=b[M+0],D=b[M+1],B=b[M+2];f.push(I,D,D,B,B,I)}}else{const b=m.array;v=m.version;for(let M=0,y=b.length/3-1;M<y;M+=3){const I=M+0,D=M+1,B=M+2;f.push(I,D,D,B,B,I)}}const g=new(m.count>=65535?o_:r_)(f,1);g.version=v;const p=o.get(d);p&&e.remove(p),o.set(d,g)}function c(d){const f=o.get(d);if(f){const h=d.index;h!==null&&f.version<h.version&&u(d)}else u(d);return o.get(d)}return{get:a,update:l,getWireframeAttribute:c}}function hT(t,e,n){let i;function r(f){i=f}let o,s;function a(f){o=f.type,s=f.bytesPerElement}function l(f,h){t.drawElements(i,h,o,f*s),n.update(h,i,1)}function u(f,h,m){m!==0&&(t.drawElementsInstanced(i,h,o,f*s,m),n.update(h,i,m))}function c(f,h,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,h,0,o,f,0,m);let g=0;for(let p=0;p<m;p++)g+=h[p];n.update(g,i,1)}function d(f,h,m,v){if(m===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<f.length;p++)u(f[p]/s,h[p],v[p]);else{g.multiDrawElementsInstancedWEBGL(i,h,0,o,f,0,v,0,m);let p=0;for(let b=0;b<m;b++)p+=h[b]*v[b];n.update(p,i,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=u,this.renderMultiDraw=c,this.renderMultiDrawInstances=d}function pT(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(o,s,a){switch(n.calls++,s){case t.TRIANGLES:n.triangles+=a*(o/3);break;case t.LINES:n.lines+=a*(o/2);break;case t.LINE_STRIP:n.lines+=a*(o-1);break;case t.LINE_LOOP:n.lines+=a*o;break;case t.POINTS:n.points+=a*o;break;default:_t("WebGLInfo: Unknown draw mode:",s);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function mT(t,e,n){const i=new WeakMap,r=new zt;function o(s,a,l){const u=s.morphTargetInfluences,c=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=c!==void 0?c.length:0;let f=i.get(a);if(f===void 0||f.count!==d){let x=function(){B.dispose(),i.delete(a),a.removeEventListener("dispose",x)};f!==void 0&&f.texture.dispose();const h=a.morphAttributes.position!==void 0,m=a.morphAttributes.normal!==void 0,v=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],b=a.morphAttributes.color||[];let M=0;h===!0&&(M=1),m===!0&&(M=2),v===!0&&(M=3);let y=a.attributes.position.count*M,I=1;y>e.maxTextureSize&&(I=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);const D=new Float32Array(y*I*4*d),B=new t_(D,y,I,d);B.type=hi,B.needsUpdate=!0;const _=M*4;for(let R=0;R<d;R++){const T=g[R],A=p[R],X=b[R],E=y*I*4*R;for(let k=0;k<T.count;k++){const C=k*_;h===!0&&(r.fromBufferAttribute(T,k),D[E+C+0]=r.x,D[E+C+1]=r.y,D[E+C+2]=r.z,D[E+C+3]=0),m===!0&&(r.fromBufferAttribute(A,k),D[E+C+4]=r.x,D[E+C+5]=r.y,D[E+C+6]=r.z,D[E+C+7]=0),v===!0&&(r.fromBufferAttribute(X,k),D[E+C+8]=r.x,D[E+C+9]=r.y,D[E+C+10]=r.z,D[E+C+11]=X.itemSize===4?r.w:1)}}f={count:d,texture:B,size:new Tt(y,I)},i.set(a,f),a.addEventListener("dispose",x)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",s.morphTexture,n);else{let h=0;for(let v=0;v<u.length;v++)h+=u[v];const m=a.morphTargetsRelative?1:1-h;l.getUniforms().setValue(t,"morphTargetBaseInfluence",m),l.getUniforms().setValue(t,"morphTargetInfluences",u)}l.getUniforms().setValue(t,"morphTargetsTexture",f.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",f.size)}return{update:o}}function gT(t,e,n,i,r){let o=new WeakMap;function s(u){const c=r.render.frame,d=u.geometry,f=e.get(u,d);if(o.get(f)!==c&&(e.update(f),o.set(f,c)),u.isInstancedMesh&&(u.hasEventListener("dispose",l)===!1&&u.addEventListener("dispose",l),o.get(u)!==c&&(n.update(u.instanceMatrix,t.ARRAY_BUFFER),u.instanceColor!==null&&n.update(u.instanceColor,t.ARRAY_BUFFER),o.set(u,c))),u.isSkinnedMesh){const h=u.skeleton;o.get(h)!==c&&(h.update(),o.set(h,c))}return f}function a(){o=new WeakMap}function l(u){const c=u.target;c.removeEventListener("dispose",l),i.releaseStatesOfObject(c),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:a}}const vT={[k0]:"LINEAR_TONE_MAPPING",[z0]:"REINHARD_TONE_MAPPING",[V0]:"CINEON_TONE_MAPPING",[$0]:"ACES_FILMIC_TONE_MAPPING",[G0]:"AGX_TONE_MAPPING",[W0]:"NEUTRAL_TONE_MAPPING",[H0]:"CUSTOM_TONE_MAPPING"};function _T(t,e,n,i,r){const o=new Mn(e,n,{type:t,depthBuffer:i,stencilBuffer:r}),s=new Mn(e,n,{type:tr,depthBuffer:!1,stencilBuffer:!1}),a=new lr;a.setAttribute("position",new Zi([-1,3,0,-1,-1,0,3,-1,0],3)),a.setAttribute("uv",new Zi([0,2,0,0,2,0],2));const l=new hM({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),u=new bi(a,l),c=new Fh(-1,1,1,-1,0,1);let d=null,f=null,h=!1,m,v=null,g=[],p=!1;this.setSize=function(b,M){o.setSize(b,M),s.setSize(b,M);for(let y=0;y<g.length;y++){const I=g[y];I.setSize&&I.setSize(b,M)}},this.setEffects=function(b){g=b,p=g.length>0&&g[0].isRenderPass===!0;const M=o.width,y=o.height;for(let I=0;I<g.length;I++){const D=g[I];D.setSize&&D.setSize(M,y)}},this.begin=function(b,M){if(h||b.toneMapping===gi&&g.length===0)return!1;if(v=M,M!==null){const y=M.width,I=M.height;(o.width!==y||o.height!==I)&&this.setSize(y,I)}return p===!1&&b.setRenderTarget(o),m=b.toneMapping,b.toneMapping=gi,!0},this.hasRenderPass=function(){return p},this.end=function(b,M){b.toneMapping=m,h=!0;let y=o,I=s;for(let D=0;D<g.length;D++){const B=g[D];if(B.enabled!==!1&&(B.render(b,I,y,M),B.needsSwap!==!1)){const _=y;y=I,I=_}}if(d!==b.outputColorSpace||f!==b.toneMapping){d=b.outputColorSpace,f=b.toneMapping,l.defines={},gt.getTransfer(d)===Mt&&(l.defines.SRGB_TRANSFER="");const D=vT[f];D&&(l.defines[D]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=y.texture,b.setRenderTarget(v),b.render(u,c),v=null,h=!1},this.isCompositing=function(){return h},this.dispose=function(){o.dispose(),s.dispose(),a.dispose(),l.dispose()}}const p_=new rn,If=new fa(1,1),m_=new t_,g_=new $S,v_=new l_,Lm=[],Fm=[],Um=new Float32Array(16),Om=new Float32Array(9),Bm=new Float32Array(4);function xs(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let o=Lm[r];if(o===void 0&&(o=new Float32Array(r),Lm[r]=o),e!==0){i.toArray(o,0);for(let s=1,a=0;s!==e;++s)a+=n,t[s].toArray(o,a)}return o}function qt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Kt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function ju(t,e){let n=Fm[e];n===void 0&&(n=new Int32Array(e),Fm[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function yT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function xT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(qt(n,e))return;t.uniform2fv(this.addr,e),Kt(n,e)}}function bT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(qt(n,e))return;t.uniform3fv(this.addr,e),Kt(n,e)}}function ST(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(qt(n,e))return;t.uniform4fv(this.addr,e),Kt(n,e)}}function MT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(qt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Kt(n,e)}else{if(qt(n,i))return;Bm.set(i),t.uniformMatrix2fv(this.addr,!1,Bm),Kt(n,i)}}function wT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(qt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Kt(n,e)}else{if(qt(n,i))return;Om.set(i),t.uniformMatrix3fv(this.addr,!1,Om),Kt(n,i)}}function ET(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(qt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Kt(n,e)}else{if(qt(n,i))return;Um.set(i),t.uniformMatrix4fv(this.addr,!1,Um),Kt(n,i)}}function TT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function AT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(qt(n,e))return;t.uniform2iv(this.addr,e),Kt(n,e)}}function CT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(qt(n,e))return;t.uniform3iv(this.addr,e),Kt(n,e)}}function RT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(qt(n,e))return;t.uniform4iv(this.addr,e),Kt(n,e)}}function IT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function PT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(qt(n,e))return;t.uniform2uiv(this.addr,e),Kt(n,e)}}function NT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(qt(n,e))return;t.uniform3uiv(this.addr,e),Kt(n,e)}}function DT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(qt(n,e))return;t.uniform4uiv(this.addr,e),Kt(n,e)}}function LT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let o;this.type===t.SAMPLER_2D_SHADOW?(If.compareFunction=n.isReversedDepthBuffer()?Nh:Ph,o=If):o=p_,n.setTexture2D(e||o,r)}function FT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||g_,r)}function UT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||v_,r)}function OT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||m_,r)}function BT(t){switch(t){case 5126:return yT;case 35664:return xT;case 35665:return bT;case 35666:return ST;case 35674:return MT;case 35675:return wT;case 35676:return ET;case 5124:case 35670:return TT;case 35667:case 35671:return AT;case 35668:case 35672:return CT;case 35669:case 35673:return RT;case 5125:return IT;case 36294:return PT;case 36295:return NT;case 36296:return DT;case 35678:case 36198:case 36298:case 36306:case 35682:return LT;case 35679:case 36299:case 36307:return FT;case 35680:case 36300:case 36308:case 36293:return UT;case 36289:case 36303:case 36311:case 36292:return OT}}function kT(t,e){t.uniform1fv(this.addr,e)}function zT(t,e){const n=xs(e,this.size,2);t.uniform2fv(this.addr,n)}function VT(t,e){const n=xs(e,this.size,3);t.uniform3fv(this.addr,n)}function $T(t,e){const n=xs(e,this.size,4);t.uniform4fv(this.addr,n)}function HT(t,e){const n=xs(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function GT(t,e){const n=xs(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function WT(t,e){const n=xs(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function XT(t,e){t.uniform1iv(this.addr,e)}function YT(t,e){t.uniform2iv(this.addr,e)}function qT(t,e){t.uniform3iv(this.addr,e)}function KT(t,e){t.uniform4iv(this.addr,e)}function ZT(t,e){t.uniform1uiv(this.addr,e)}function jT(t,e){t.uniform2uiv(this.addr,e)}function JT(t,e){t.uniform3uiv(this.addr,e)}function QT(t,e){t.uniform4uiv(this.addr,e)}function eA(t,e,n){const i=this.cache,r=e.length,o=ju(n,r);qt(i,o)||(t.uniform1iv(this.addr,o),Kt(i,o));let s;this.type===t.SAMPLER_2D_SHADOW?s=If:s=p_;for(let a=0;a!==r;++a)n.setTexture2D(e[a]||s,o[a])}function tA(t,e,n){const i=this.cache,r=e.length,o=ju(n,r);qt(i,o)||(t.uniform1iv(this.addr,o),Kt(i,o));for(let s=0;s!==r;++s)n.setTexture3D(e[s]||g_,o[s])}function nA(t,e,n){const i=this.cache,r=e.length,o=ju(n,r);qt(i,o)||(t.uniform1iv(this.addr,o),Kt(i,o));for(let s=0;s!==r;++s)n.setTextureCube(e[s]||v_,o[s])}function iA(t,e,n){const i=this.cache,r=e.length,o=ju(n,r);qt(i,o)||(t.uniform1iv(this.addr,o),Kt(i,o));for(let s=0;s!==r;++s)n.setTexture2DArray(e[s]||m_,o[s])}function rA(t){switch(t){case 5126:return kT;case 35664:return zT;case 35665:return VT;case 35666:return $T;case 35674:return HT;case 35675:return GT;case 35676:return WT;case 5124:case 35670:return XT;case 35667:case 35671:return YT;case 35668:case 35672:return qT;case 35669:case 35673:return KT;case 5125:return ZT;case 36294:return jT;case 36295:return JT;case 36296:return QT;case 35678:case 36198:case 36298:case 36306:case 35682:return eA;case 35679:case 36299:case 36307:return tA;case 35680:case 36300:case 36308:case 36293:return nA;case 36289:case 36303:case 36311:case 36292:return iA}}class oA{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=BT(n.type)}}class sA{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=rA(n.type)}}class aA{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let o=0,s=r.length;o!==s;++o){const a=r[o];a.setValue(e,n[a.id],i)}}}const od=/(\w+)(\])?(\[|\.)?/g;function km(t,e){t.seq.push(e),t.map[e.id]=e}function lA(t,e,n){const i=t.name,r=i.length;for(od.lastIndex=0;;){const o=od.exec(i),s=od.lastIndex;let a=o[1];const l=o[2]==="]",u=o[3];if(l&&(a=a|0),u===void 0||u==="["&&s+2===r){km(n,u===void 0?new oA(a,t,e):new sA(a,t,e));break}else{let d=n.map[a];d===void 0&&(d=new aA(a),km(n,d)),n=d}}}class zl{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const a=e.getActiveUniform(n,s),l=e.getUniformLocation(n,a.name);lA(a,l,this)}const r=[],o=[];for(const s of this.seq)s.type===e.SAMPLER_2D_SHADOW||s.type===e.SAMPLER_CUBE_SHADOW||s.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(s):o.push(s);r.length>0&&(this.seq=r.concat(o))}setValue(e,n,i,r){const o=this.map[n];o!==void 0&&o.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let o=0,s=n.length;o!==s;++o){const a=n[o],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,o=e.length;r!==o;++r){const s=e[r];s.id in n&&i.push(s)}return i}}function zm(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const uA=37297;let cA=0;function dA(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),o=Math.min(e+6,n.length);for(let s=r;s<o;s++){const a=s+1;i.push(`${a===e?">":" "} ${a}: ${n[s]}`)}return i.join(`
`)}const Vm=new ct;function fA(t){gt._getMatrix(Vm,gt.workingColorSpace,t);const e=`mat3( ${Vm.elements.map(n=>n.toFixed(4))} )`;switch(gt.getTransfer(t)){case lu:return[e,"LinearTransferOETF"];case Mt:return[e,"sRGBTransferOETF"];default:return st("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function $m(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),o=(t.getShaderInfoLog(e)||"").trim();if(i&&o==="")return"";const s=/ERROR: 0:(\d+)/.exec(o);if(s){const a=parseInt(s[1]);return n.toUpperCase()+`

`+o+`

`+dA(t.getShaderSource(e),a)}else return o}function hA(t,e){const n=fA(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const pA={[k0]:"Linear",[z0]:"Reinhard",[V0]:"Cineon",[$0]:"ACESFilmic",[G0]:"AgX",[W0]:"Neutral",[H0]:"Custom"};function mA(t,e){const n=pA[e];return n===void 0?(st("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+t+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const pl=new _e;function gA(){gt.getLuminanceCoefficients(pl);const t=pl.x.toFixed(4),e=pl.y.toFixed(4),n=pl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function vA(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Bs).join(`
`)}function _A(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function yA(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const o=t.getActiveAttrib(e,r),s=o.name;let a=1;o.type===t.FLOAT_MAT2&&(a=2),o.type===t.FLOAT_MAT3&&(a=3),o.type===t.FLOAT_MAT4&&(a=4),n[s]={type:o.type,location:t.getAttribLocation(e,s),locationSize:a}}return n}function Bs(t){return t!==""}function Hm(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Gm(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const xA=/^[ \t]*#include +<([\w\d./]+)>/gm;function Pf(t){return t.replace(xA,SA)}const bA=new Map;function SA(t,e){let n=dt[e];if(n===void 0){const i=bA.get(e);if(i!==void 0)n=dt[i],st('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Pf(n)}const MA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Wm(t){return t.replace(MA,wA)}function wA(t,e,n,i){let r="";for(let o=parseInt(e);o<parseInt(n);o++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return r}function Xm(t){let e=`precision ${t.precision} float;
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
#define LOW_PRECISION`),e}const EA={[Fl]:"SHADOWMAP_TYPE_PCF",[Os]:"SHADOWMAP_TYPE_VSM"};function TA(t){return EA[t.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const AA={[So]:"ENVMAP_TYPE_CUBE",[us]:"ENVMAP_TYPE_CUBE",[qu]:"ENVMAP_TYPE_CUBE_UV"};function CA(t){return t.envMap===!1?"ENVMAP_TYPE_CUBE":AA[t.envMapMode]||"ENVMAP_TYPE_CUBE"}const RA={[us]:"ENVMAP_MODE_REFRACTION"};function IA(t){return t.envMap===!1?"ENVMAP_MODE_REFLECTION":RA[t.envMapMode]||"ENVMAP_MODE_REFLECTION"}const PA={[B0]:"ENVMAP_BLENDING_MULTIPLY",[xS]:"ENVMAP_BLENDING_MIX",[bS]:"ENVMAP_BLENDING_ADD"};function NA(t){return t.envMap===!1?"ENVMAP_BLENDING_NONE":PA[t.combine]||"ENVMAP_BLENDING_NONE"}function DA(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:i,maxMip:n}}function LA(t,e,n,i){const r=t.getContext(),o=n.defines;let s=n.vertexShader,a=n.fragmentShader;const l=TA(n),u=CA(n),c=IA(n),d=NA(n),f=DA(n),h=vA(n),m=_A(o),v=r.createProgram();let g,p,b=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(g=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,m].filter(Bs).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,m].filter(Bs).join(`
`),p.length>0&&(p+=`
`)):(g=[Xm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,m,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Bs).join(`
`),p=[Xm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,m,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.envMap?"#define "+c:"",n.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==gi?"#define TONE_MAPPING":"",n.toneMapping!==gi?dt.tonemapping_pars_fragment:"",n.toneMapping!==gi?mA("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",dt.colorspace_pars_fragment,hA("linearToOutputTexel",n.outputColorSpace),gA(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Bs).join(`
`)),s=Pf(s),s=Hm(s,n),s=Gm(s,n),a=Pf(a),a=Hm(a,n),a=Gm(a,n),s=Wm(s),a=Wm(a),n.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,g=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",n.glslVersion===lm?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===lm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const M=b+g+s,y=b+p+a,I=zm(r,r.VERTEX_SHADER,M),D=zm(r,r.FRAGMENT_SHADER,y);r.attachShader(v,I),r.attachShader(v,D),n.index0AttributeName!==void 0?r.bindAttribLocation(v,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v);function B(T){if(t.debug.checkShaderErrors){const A=r.getProgramInfoLog(v)||"",X=r.getShaderInfoLog(I)||"",E=r.getShaderInfoLog(D)||"",k=A.trim(),C=X.trim(),N=E.trim();let U=!0,H=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(U=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,v,I,D);else{const G=$m(r,I,"vertex"),ne=$m(r,D,"fragment");_t("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Material Name: `+T.name+`
Material Type: `+T.type+`

Program Info Log: `+k+`
`+G+`
`+ne)}else k!==""?st("WebGLProgram: Program Info Log:",k):(C===""||N==="")&&(H=!1);H&&(T.diagnostics={runnable:U,programLog:k,vertexShader:{log:C,prefix:g},fragmentShader:{log:N,prefix:p}})}r.deleteShader(I),r.deleteShader(D),_=new zl(r,v),x=yA(r,v)}let _;this.getUniforms=function(){return _===void 0&&B(this),_};let x;this.getAttributes=function(){return x===void 0&&B(this),x};let R=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=r.getProgramParameter(v,uA)),R},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=cA++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=I,this.fragmentShader=D,this}let FA=0;class UA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),o=this._getShaderStage(i),s=this._getShaderCacheForMaterial(e);return s.has(r)===!1&&(s.add(r),r.usedTimes++),s.has(o)===!1&&(s.add(o),o.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new OA(e),n.set(e,i)),i}}class OA{constructor(e){this.id=FA++,this.code=e,this.usedTimes=0}}function BA(t,e,n,i,r,o){const s=new n_,a=new UA,l=new Set,u=[],c=new Map,d=i.logarithmicDepthBuffer;let f=i.precision;const h={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(_){return l.add(_),_===0?"uv":`uv${_}`}function v(_,x,R,T,A){const X=T.fog,E=A.geometry,k=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?T.environment:null,C=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,N=e.get(_.envMap||k,C),U=N&&N.mapping===qu?N.image.height:null,H=h[_.type];_.precision!==null&&(f=i.getMaxPrecision(_.precision),f!==_.precision&&st("WebGLProgram.getParameters:",_.precision,"not supported, using",f,"instead."));const G=E.morphAttributes.position||E.morphAttributes.normal||E.morphAttributes.color,ne=G!==void 0?G.length:0;let re=0;E.morphAttributes.position!==void 0&&(re=1),E.morphAttributes.normal!==void 0&&(re=2),E.morphAttributes.color!==void 0&&(re=3);let ye,we,te,L;if(H){const St=ci[H];ye=St.vertexShader,we=St.fragmentShader}else ye=_.vertexShader,we=_.fragmentShader,a.update(_),te=a.getVertexShaderID(_),L=a.getFragmentShaderID(_);const j=t.getRenderTarget(),Q=t.state.buffers.depth.getReversed(),fe=A.isInstancedMesh===!0,Se=A.isBatchedMesh===!0,Ee=!!_.map,$=!!_.matcap,W=!!N,F=!!_.aoMap,O=!!_.lightMap,z=!!_.bumpMap,Y=!!_.normalMap,S=!!_.displacementMap,Z=!!_.emissiveMap,J=!!_.metalnessMap,ee=!!_.roughnessMap,ie=_.anisotropy>0,P=_.clearcoat>0,w=_.dispersion>0,K=_.iridescence>0,ae=_.sheen>0,ge=_.transmission>0,de=ie&&!!_.anisotropyMap,Ue=P&&!!_.clearcoatMap,Ie=P&&!!_.clearcoatNormalMap,Ge=P&&!!_.clearcoatRoughnessMap,Ye=K&&!!_.iridescenceMap,Pe=K&&!!_.iridescenceThicknessMap,ue=ae&&!!_.sheenColorMap,se=ae&&!!_.sheenRoughnessMap,Ae=!!_.specularMap,De=!!_.specularColorMap,Qe=!!_.specularIntensityMap,oe=ge&&!!_.transmissionMap,Le=ge&&!!_.thicknessMap,Fe=!!_.gradientMap,Be=!!_.alphaMap,Ne=_.alphaTest>0,Me=!!_.alphaHash,qe=!!_.extensions;let ot=gi;_.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(ot=t.toneMapping);const Lt={shaderID:H,shaderType:_.type,shaderName:_.name,vertexShader:ye,fragmentShader:we,defines:_.defines,customVertexShaderID:te,customFragmentShaderID:L,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:f,batching:Se,batchingColor:Se&&A._colorsTexture!==null,instancing:fe,instancingColor:fe&&A.instanceColor!==null,instancingMorph:fe&&A.morphTexture!==null,outputColorSpace:j===null?t.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:kr,alphaToCoverage:!!_.alphaToCoverage,map:Ee,matcap:$,envMap:W,envMapMode:W&&N.mapping,envMapCubeUVHeight:U,aoMap:F,lightMap:O,bumpMap:z,normalMap:Y,displacementMap:S,emissiveMap:Z,normalMapObjectSpace:Y&&_.normalMapType===ES,normalMapTangentSpace:Y&&_.normalMapType===wS,metalnessMap:J,roughnessMap:ee,anisotropy:ie,anisotropyMap:de,clearcoat:P,clearcoatMap:Ue,clearcoatNormalMap:Ie,clearcoatRoughnessMap:Ge,dispersion:w,iridescence:K,iridescenceMap:Ye,iridescenceThicknessMap:Pe,sheen:ae,sheenColorMap:ue,sheenRoughnessMap:se,specularMap:Ae,specularColorMap:De,specularIntensityMap:Qe,transmission:ge,transmissionMap:oe,thicknessMap:Le,gradientMap:Fe,opaque:_.transparent===!1&&_.blending===Qo&&_.alphaToCoverage===!1,alphaMap:Be,alphaTest:Ne,alphaHash:Me,combine:_.combine,mapUv:Ee&&m(_.map.channel),aoMapUv:F&&m(_.aoMap.channel),lightMapUv:O&&m(_.lightMap.channel),bumpMapUv:z&&m(_.bumpMap.channel),normalMapUv:Y&&m(_.normalMap.channel),displacementMapUv:S&&m(_.displacementMap.channel),emissiveMapUv:Z&&m(_.emissiveMap.channel),metalnessMapUv:J&&m(_.metalnessMap.channel),roughnessMapUv:ee&&m(_.roughnessMap.channel),anisotropyMapUv:de&&m(_.anisotropyMap.channel),clearcoatMapUv:Ue&&m(_.clearcoatMap.channel),clearcoatNormalMapUv:Ie&&m(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ge&&m(_.clearcoatRoughnessMap.channel),iridescenceMapUv:Ye&&m(_.iridescenceMap.channel),iridescenceThicknessMapUv:Pe&&m(_.iridescenceThicknessMap.channel),sheenColorMapUv:ue&&m(_.sheenColorMap.channel),sheenRoughnessMapUv:se&&m(_.sheenRoughnessMap.channel),specularMapUv:Ae&&m(_.specularMap.channel),specularColorMapUv:De&&m(_.specularColorMap.channel),specularIntensityMapUv:Qe&&m(_.specularIntensityMap.channel),transmissionMapUv:oe&&m(_.transmissionMap.channel),thicknessMapUv:Le&&m(_.thicknessMap.channel),alphaMapUv:Be&&m(_.alphaMap.channel),vertexTangents:!!E.attributes.tangent&&(Y||ie),vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!E.attributes.color&&E.attributes.color.itemSize===4,pointsUvs:A.isPoints===!0&&!!E.attributes.uv&&(Ee||Be),fog:!!X,useFog:_.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||E.attributes.normal===void 0&&Y===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:Q,skinning:A.isSkinnedMesh===!0,morphTargets:E.morphAttributes.position!==void 0,morphNormals:E.morphAttributes.normal!==void 0,morphColors:E.morphAttributes.color!==void 0,morphTargetsCount:ne,morphTextureStride:re,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:_.dithering,shadowMapEnabled:t.shadowMap.enabled&&R.length>0,shadowMapType:t.shadowMap.type,toneMapping:ot,decodeVideoTexture:Ee&&_.map.isVideoTexture===!0&&gt.getTransfer(_.map.colorSpace)===Mt,decodeVideoTextureEmissive:Z&&_.emissiveMap.isVideoTexture===!0&&gt.getTransfer(_.emissiveMap.colorSpace)===Mt,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===zi,flipSided:_.side===Tn,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:qe&&_.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(qe&&_.extensions.multiDraw===!0||Se)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Lt.vertexUv1s=l.has(1),Lt.vertexUv2s=l.has(2),Lt.vertexUv3s=l.has(3),l.clear(),Lt}function g(_){const x=[];if(_.shaderID?x.push(_.shaderID):(x.push(_.customVertexShaderID),x.push(_.customFragmentShaderID)),_.defines!==void 0)for(const R in _.defines)x.push(R),x.push(_.defines[R]);return _.isRawShaderMaterial===!1&&(p(x,_),b(x,_),x.push(t.outputColorSpace)),x.push(_.customProgramCacheKey),x.join()}function p(_,x){_.push(x.precision),_.push(x.outputColorSpace),_.push(x.envMapMode),_.push(x.envMapCubeUVHeight),_.push(x.mapUv),_.push(x.alphaMapUv),_.push(x.lightMapUv),_.push(x.aoMapUv),_.push(x.bumpMapUv),_.push(x.normalMapUv),_.push(x.displacementMapUv),_.push(x.emissiveMapUv),_.push(x.metalnessMapUv),_.push(x.roughnessMapUv),_.push(x.anisotropyMapUv),_.push(x.clearcoatMapUv),_.push(x.clearcoatNormalMapUv),_.push(x.clearcoatRoughnessMapUv),_.push(x.iridescenceMapUv),_.push(x.iridescenceThicknessMapUv),_.push(x.sheenColorMapUv),_.push(x.sheenRoughnessMapUv),_.push(x.specularMapUv),_.push(x.specularColorMapUv),_.push(x.specularIntensityMapUv),_.push(x.transmissionMapUv),_.push(x.thicknessMapUv),_.push(x.combine),_.push(x.fogExp2),_.push(x.sizeAttenuation),_.push(x.morphTargetsCount),_.push(x.morphAttributeCount),_.push(x.numDirLights),_.push(x.numPointLights),_.push(x.numSpotLights),_.push(x.numSpotLightMaps),_.push(x.numHemiLights),_.push(x.numRectAreaLights),_.push(x.numDirLightShadows),_.push(x.numPointLightShadows),_.push(x.numSpotLightShadows),_.push(x.numSpotLightShadowsWithMaps),_.push(x.numLightProbes),_.push(x.shadowMapType),_.push(x.toneMapping),_.push(x.numClippingPlanes),_.push(x.numClipIntersection),_.push(x.depthPacking)}function b(_,x){s.disableAll(),x.instancing&&s.enable(0),x.instancingColor&&s.enable(1),x.instancingMorph&&s.enable(2),x.matcap&&s.enable(3),x.envMap&&s.enable(4),x.normalMapObjectSpace&&s.enable(5),x.normalMapTangentSpace&&s.enable(6),x.clearcoat&&s.enable(7),x.iridescence&&s.enable(8),x.alphaTest&&s.enable(9),x.vertexColors&&s.enable(10),x.vertexAlphas&&s.enable(11),x.vertexUv1s&&s.enable(12),x.vertexUv2s&&s.enable(13),x.vertexUv3s&&s.enable(14),x.vertexTangents&&s.enable(15),x.anisotropy&&s.enable(16),x.alphaHash&&s.enable(17),x.batching&&s.enable(18),x.dispersion&&s.enable(19),x.batchingColor&&s.enable(20),x.gradientMap&&s.enable(21),_.push(s.mask),s.disableAll(),x.fog&&s.enable(0),x.useFog&&s.enable(1),x.flatShading&&s.enable(2),x.logarithmicDepthBuffer&&s.enable(3),x.reversedDepthBuffer&&s.enable(4),x.skinning&&s.enable(5),x.morphTargets&&s.enable(6),x.morphNormals&&s.enable(7),x.morphColors&&s.enable(8),x.premultipliedAlpha&&s.enable(9),x.shadowMapEnabled&&s.enable(10),x.doubleSided&&s.enable(11),x.flipSided&&s.enable(12),x.useDepthPacking&&s.enable(13),x.dithering&&s.enable(14),x.transmission&&s.enable(15),x.sheen&&s.enable(16),x.opaque&&s.enable(17),x.pointsUvs&&s.enable(18),x.decodeVideoTexture&&s.enable(19),x.decodeVideoTextureEmissive&&s.enable(20),x.alphaToCoverage&&s.enable(21),_.push(s.mask)}function M(_){const x=h[_.type];let R;if(x){const T=ci[x];R=cM.clone(T.uniforms)}else R=_.uniforms;return R}function y(_,x){let R=c.get(x);return R!==void 0?++R.usedTimes:(R=new LA(t,x,_,r),u.push(R),c.set(x,R)),R}function I(_){if(--_.usedTimes===0){const x=u.indexOf(_);u[x]=u[u.length-1],u.pop(),c.delete(_.cacheKey),_.destroy()}}function D(_){a.remove(_)}function B(){a.dispose()}return{getParameters:v,getProgramCacheKey:g,getUniforms:M,acquireProgram:y,releaseProgram:I,releaseShaderCache:D,programs:u,dispose:B}}function kA(){let t=new WeakMap;function e(s){return t.has(s)}function n(s){let a=t.get(s);return a===void 0&&(a={},t.set(s,a)),a}function i(s){t.delete(s)}function r(s,a,l){t.get(s)[a]=l}function o(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:o}}function zA(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.materialVariant!==e.materialVariant?t.materialVariant-e.materialVariant:t.z!==e.z?t.z-e.z:t.id-e.id}function Ym(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function qm(){const t=[];let e=0;const n=[],i=[],r=[];function o(){e=0,n.length=0,i.length=0,r.length=0}function s(f){let h=0;return f.isInstancedMesh&&(h+=2),f.isSkinnedMesh&&(h+=1),h}function a(f,h,m,v,g,p){let b=t[e];return b===void 0?(b={id:f.id,object:f,geometry:h,material:m,materialVariant:s(f),groupOrder:v,renderOrder:f.renderOrder,z:g,group:p},t[e]=b):(b.id=f.id,b.object=f,b.geometry=h,b.material=m,b.materialVariant=s(f),b.groupOrder=v,b.renderOrder=f.renderOrder,b.z=g,b.group=p),e++,b}function l(f,h,m,v,g,p){const b=a(f,h,m,v,g,p);m.transmission>0?i.push(b):m.transparent===!0?r.push(b):n.push(b)}function u(f,h,m,v,g,p){const b=a(f,h,m,v,g,p);m.transmission>0?i.unshift(b):m.transparent===!0?r.unshift(b):n.unshift(b)}function c(f,h){n.length>1&&n.sort(f||zA),i.length>1&&i.sort(h||Ym),r.length>1&&r.sort(h||Ym)}function d(){for(let f=e,h=t.length;f<h;f++){const m=t[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:n,transmissive:i,transparent:r,init:o,push:l,unshift:u,finish:d,sort:c}}function VA(){let t=new WeakMap;function e(i,r){const o=t.get(i);let s;return o===void 0?(s=new qm,t.set(i,[s])):r>=o.length?(s=new qm,o.push(s)):s=o[r],s}function n(){t=new WeakMap}return{get:e,dispose:n}}function $A(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new _e,color:new Et};break;case"SpotLight":n={position:new _e,direction:new _e,color:new Et,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new _e,color:new Et,distance:0,decay:0};break;case"HemisphereLight":n={direction:new _e,skyColor:new Et,groundColor:new Et};break;case"RectAreaLight":n={color:new Et,position:new _e,halfWidth:new _e,halfHeight:new _e};break}return t[e.id]=n,n}}}function HA(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Tt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Tt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Tt,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let GA=0;function WA(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function XA(t){const e=new $A,n=HA(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new _e);const r=new _e,o=new Wt,s=new Wt;function a(u){let c=0,d=0,f=0;for(let x=0;x<9;x++)i.probe[x].set(0,0,0);let h=0,m=0,v=0,g=0,p=0,b=0,M=0,y=0,I=0,D=0,B=0;u.sort(WA);for(let x=0,R=u.length;x<R;x++){const T=u[x],A=T.color,X=T.intensity,E=T.distance;let k=null;if(T.shadow&&T.shadow.map&&(T.shadow.map.texture.format===cs?k=T.shadow.map.texture:k=T.shadow.map.depthTexture||T.shadow.map.texture),T.isAmbientLight)c+=A.r*X,d+=A.g*X,f+=A.b*X;else if(T.isLightProbe){for(let C=0;C<9;C++)i.probe[C].addScaledVector(T.sh.coefficients[C],X);B++}else if(T.isDirectionalLight){const C=e.get(T);if(C.color.copy(T.color).multiplyScalar(T.intensity),T.castShadow){const N=T.shadow,U=n.get(T);U.shadowIntensity=N.intensity,U.shadowBias=N.bias,U.shadowNormalBias=N.normalBias,U.shadowRadius=N.radius,U.shadowMapSize=N.mapSize,i.directionalShadow[h]=U,i.directionalShadowMap[h]=k,i.directionalShadowMatrix[h]=T.shadow.matrix,b++}i.directional[h]=C,h++}else if(T.isSpotLight){const C=e.get(T);C.position.setFromMatrixPosition(T.matrixWorld),C.color.copy(A).multiplyScalar(X),C.distance=E,C.coneCos=Math.cos(T.angle),C.penumbraCos=Math.cos(T.angle*(1-T.penumbra)),C.decay=T.decay,i.spot[v]=C;const N=T.shadow;if(T.map&&(i.spotLightMap[I]=T.map,I++,N.updateMatrices(T),T.castShadow&&D++),i.spotLightMatrix[v]=N.matrix,T.castShadow){const U=n.get(T);U.shadowIntensity=N.intensity,U.shadowBias=N.bias,U.shadowNormalBias=N.normalBias,U.shadowRadius=N.radius,U.shadowMapSize=N.mapSize,i.spotShadow[v]=U,i.spotShadowMap[v]=k,y++}v++}else if(T.isRectAreaLight){const C=e.get(T);C.color.copy(A).multiplyScalar(X),C.halfWidth.set(T.width*.5,0,0),C.halfHeight.set(0,T.height*.5,0),i.rectArea[g]=C,g++}else if(T.isPointLight){const C=e.get(T);if(C.color.copy(T.color).multiplyScalar(T.intensity),C.distance=T.distance,C.decay=T.decay,T.castShadow){const N=T.shadow,U=n.get(T);U.shadowIntensity=N.intensity,U.shadowBias=N.bias,U.shadowNormalBias=N.normalBias,U.shadowRadius=N.radius,U.shadowMapSize=N.mapSize,U.shadowCameraNear=N.camera.near,U.shadowCameraFar=N.camera.far,i.pointShadow[m]=U,i.pointShadowMap[m]=k,i.pointShadowMatrix[m]=T.shadow.matrix,M++}i.point[m]=C,m++}else if(T.isHemisphereLight){const C=e.get(T);C.skyColor.copy(T.color).multiplyScalar(X),C.groundColor.copy(T.groundColor).multiplyScalar(X),i.hemi[p]=C,p++}}g>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ke.LTC_FLOAT_1,i.rectAreaLTC2=ke.LTC_FLOAT_2):(i.rectAreaLTC1=ke.LTC_HALF_1,i.rectAreaLTC2=ke.LTC_HALF_2)),i.ambient[0]=c,i.ambient[1]=d,i.ambient[2]=f;const _=i.hash;(_.directionalLength!==h||_.pointLength!==m||_.spotLength!==v||_.rectAreaLength!==g||_.hemiLength!==p||_.numDirectionalShadows!==b||_.numPointShadows!==M||_.numSpotShadows!==y||_.numSpotMaps!==I||_.numLightProbes!==B)&&(i.directional.length=h,i.spot.length=v,i.rectArea.length=g,i.point.length=m,i.hemi.length=p,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.pointShadow.length=M,i.pointShadowMap.length=M,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=b,i.pointShadowMatrix.length=M,i.spotLightMatrix.length=y+I-D,i.spotLightMap.length=I,i.numSpotLightShadowsWithMaps=D,i.numLightProbes=B,_.directionalLength=h,_.pointLength=m,_.spotLength=v,_.rectAreaLength=g,_.hemiLength=p,_.numDirectionalShadows=b,_.numPointShadows=M,_.numSpotShadows=y,_.numSpotMaps=I,_.numLightProbes=B,i.version=GA++)}function l(u,c){let d=0,f=0,h=0,m=0,v=0;const g=c.matrixWorldInverse;for(let p=0,b=u.length;p<b;p++){const M=u[p];if(M.isDirectionalLight){const y=i.directional[d];y.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(g),d++}else if(M.isSpotLight){const y=i.spot[h];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(g),y.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(g),h++}else if(M.isRectAreaLight){const y=i.rectArea[m];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(g),s.identity(),o.copy(M.matrixWorld),o.premultiply(g),s.extractRotation(o),y.halfWidth.set(M.width*.5,0,0),y.halfHeight.set(0,M.height*.5,0),y.halfWidth.applyMatrix4(s),y.halfHeight.applyMatrix4(s),m++}else if(M.isPointLight){const y=i.point[f];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(g),f++}else if(M.isHemisphereLight){const y=i.hemi[v];y.direction.setFromMatrixPosition(M.matrixWorld),y.direction.transformDirection(g),v++}}}return{setup:a,setupView:l,state:i}}function Km(t){const e=new XA(t),n=[],i=[];function r(c){u.camera=c,n.length=0,i.length=0}function o(c){n.push(c)}function s(c){i.push(c)}function a(){e.setup(n)}function l(c){e.setupView(n,c)}const u={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:u,setupLights:a,setupLightsView:l,pushLight:o,pushShadow:s}}function YA(t){let e=new WeakMap;function n(r,o=0){const s=e.get(r);let a;return s===void 0?(a=new Km(t),e.set(r,[a])):o>=s.length?(a=new Km(t),s.push(a)):a=s[o],a}function i(){e=new WeakMap}return{get:n,dispose:i}}const qA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,KA=`uniform sampler2D shadow_pass;
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
}`,ZA=[new _e(1,0,0),new _e(-1,0,0),new _e(0,1,0),new _e(0,-1,0),new _e(0,0,1),new _e(0,0,-1)],jA=[new _e(0,-1,0),new _e(0,-1,0),new _e(0,0,1),new _e(0,0,-1),new _e(0,-1,0),new _e(0,-1,0)],Zm=new Wt,Ps=new _e,sd=new _e;function JA(t,e,n){let i=new a_;const r=new Tt,o=new Tt,s=new zt,a=new pM,l=new mM,u={},c=n.maxTextureSize,d={[Br]:Tn,[Tn]:Br,[zi]:zi},f=new Qn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Tt},radius:{value:4}},vertexShader:qA,fragmentShader:KA}),h=f.clone();h.defines.HORIZONTAL_PASS=1;const m=new lr;m.setAttribute("position",new vi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new bi(m,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Fl;let p=this.type;this.render=function(D,B,_){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||D.length===0)return;this.type===tS&&(st("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Fl);const x=t.getRenderTarget(),R=t.getActiveCubeFace(),T=t.getActiveMipmapLevel(),A=t.state;A.setBlending(qi),A.buffers.depth.getReversed()===!0?A.buffers.color.setClear(0,0,0,0):A.buffers.color.setClear(1,1,1,1),A.buffers.depth.setTest(!0),A.setScissorTest(!1);const X=p!==this.type;X&&B.traverse(function(E){E.material&&(Array.isArray(E.material)?E.material.forEach(k=>k.needsUpdate=!0):E.material.needsUpdate=!0)});for(let E=0,k=D.length;E<k;E++){const C=D[E],N=C.shadow;if(N===void 0){st("WebGLShadowMap:",C,"has no shadow.");continue}if(N.autoUpdate===!1&&N.needsUpdate===!1)continue;r.copy(N.mapSize);const U=N.getFrameExtents();r.multiply(U),o.copy(N.mapSize),(r.x>c||r.y>c)&&(r.x>c&&(o.x=Math.floor(c/U.x),r.x=o.x*U.x,N.mapSize.x=o.x),r.y>c&&(o.y=Math.floor(c/U.y),r.y=o.y*U.y,N.mapSize.y=o.y));const H=t.state.buffers.depth.getReversed();if(N.camera._reversedDepth=H,N.map===null||X===!0){if(N.map!==null&&(N.map.depthTexture!==null&&(N.map.depthTexture.dispose(),N.map.depthTexture=null),N.map.dispose()),this.type===Os){if(C.isPointLight){st("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}N.map=new Mn(r.x,r.y,{format:cs,type:tr,minFilter:Rt,magFilter:Rt,generateMipmaps:!1}),N.map.texture.name=C.name+".shadowMap",N.map.depthTexture=new fa(r.x,r.y,hi),N.map.depthTexture.name=C.name+".shadowMapDepth",N.map.depthTexture.format=nr,N.map.depthTexture.compareFunction=null,N.map.depthTexture.minFilter=nn,N.map.depthTexture.magFilter=nn}else C.isPointLight?(N.map=new h_(r.x),N.map.depthTexture=new lM(r.x,xi)):(N.map=new Mn(r.x,r.y),N.map.depthTexture=new fa(r.x,r.y,xi)),N.map.depthTexture.name=C.name+".shadowMap",N.map.depthTexture.format=nr,this.type===Fl?(N.map.depthTexture.compareFunction=H?Nh:Ph,N.map.depthTexture.minFilter=Rt,N.map.depthTexture.magFilter=Rt):(N.map.depthTexture.compareFunction=null,N.map.depthTexture.minFilter=nn,N.map.depthTexture.magFilter=nn);N.camera.updateProjectionMatrix()}const G=N.map.isWebGLCubeRenderTarget?6:1;for(let ne=0;ne<G;ne++){if(N.map.isWebGLCubeRenderTarget)t.setRenderTarget(N.map,ne),t.clear();else{ne===0&&(t.setRenderTarget(N.map),t.clear());const re=N.getViewport(ne);s.set(o.x*re.x,o.y*re.y,o.x*re.z,o.y*re.w),A.viewport(s)}if(C.isPointLight){const re=N.camera,ye=N.matrix,we=C.distance||re.far;we!==re.far&&(re.far=we,re.updateProjectionMatrix()),Ps.setFromMatrixPosition(C.matrixWorld),re.position.copy(Ps),sd.copy(re.position),sd.add(ZA[ne]),re.up.copy(jA[ne]),re.lookAt(sd),re.updateMatrixWorld(),ye.makeTranslation(-Ps.x,-Ps.y,-Ps.z),Zm.multiplyMatrices(re.projectionMatrix,re.matrixWorldInverse),N._frustum.setFromProjectionMatrix(Zm,re.coordinateSystem,re.reversedDepth)}else N.updateMatrices(C);i=N.getFrustum(),y(B,_,N.camera,C,this.type)}N.isPointLightShadow!==!0&&this.type===Os&&b(N,_),N.needsUpdate=!1}p=this.type,g.needsUpdate=!1,t.setRenderTarget(x,R,T)};function b(D,B){const _=e.update(v);f.defines.VSM_SAMPLES!==D.blurSamples&&(f.defines.VSM_SAMPLES=D.blurSamples,h.defines.VSM_SAMPLES=D.blurSamples,f.needsUpdate=!0,h.needsUpdate=!0),D.mapPass===null&&(D.mapPass=new Mn(r.x,r.y,{format:cs,type:tr})),f.uniforms.shadow_pass.value=D.map.depthTexture,f.uniforms.resolution.value=D.mapSize,f.uniforms.radius.value=D.radius,t.setRenderTarget(D.mapPass),t.clear(),t.renderBufferDirect(B,null,_,f,v,null),h.uniforms.shadow_pass.value=D.mapPass.texture,h.uniforms.resolution.value=D.mapSize,h.uniforms.radius.value=D.radius,t.setRenderTarget(D.map),t.clear(),t.renderBufferDirect(B,null,_,h,v,null)}function M(D,B,_,x){let R=null;const T=_.isPointLight===!0?D.customDistanceMaterial:D.customDepthMaterial;if(T!==void 0)R=T;else if(R=_.isPointLight===!0?l:a,t.localClippingEnabled&&B.clipShadows===!0&&Array.isArray(B.clippingPlanes)&&B.clippingPlanes.length!==0||B.displacementMap&&B.displacementScale!==0||B.alphaMap&&B.alphaTest>0||B.map&&B.alphaTest>0||B.alphaToCoverage===!0){const A=R.uuid,X=B.uuid;let E=u[A];E===void 0&&(E={},u[A]=E);let k=E[X];k===void 0&&(k=R.clone(),E[X]=k,B.addEventListener("dispose",I)),R=k}if(R.visible=B.visible,R.wireframe=B.wireframe,x===Os?R.side=B.shadowSide!==null?B.shadowSide:B.side:R.side=B.shadowSide!==null?B.shadowSide:d[B.side],R.alphaMap=B.alphaMap,R.alphaTest=B.alphaToCoverage===!0?.5:B.alphaTest,R.map=B.map,R.clipShadows=B.clipShadows,R.clippingPlanes=B.clippingPlanes,R.clipIntersection=B.clipIntersection,R.displacementMap=B.displacementMap,R.displacementScale=B.displacementScale,R.displacementBias=B.displacementBias,R.wireframeLinewidth=B.wireframeLinewidth,R.linewidth=B.linewidth,_.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const A=t.properties.get(R);A.light=_}return R}function y(D,B,_,x,R){if(D.visible===!1)return;if(D.layers.test(B.layers)&&(D.isMesh||D.isLine||D.isPoints)&&(D.castShadow||D.receiveShadow&&R===Os)&&(!D.frustumCulled||i.intersectsObject(D))){D.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,D.matrixWorld);const X=e.update(D),E=D.material;if(Array.isArray(E)){const k=X.groups;for(let C=0,N=k.length;C<N;C++){const U=k[C],H=E[U.materialIndex];if(H&&H.visible){const G=M(D,H,x,R);D.onBeforeShadow(t,D,B,_,X,G,U),t.renderBufferDirect(_,null,X,G,D,U),D.onAfterShadow(t,D,B,_,X,G,U)}}}else if(E.visible){const k=M(D,E,x,R);D.onBeforeShadow(t,D,B,_,X,k,null),t.renderBufferDirect(_,null,X,k,D,null),D.onAfterShadow(t,D,B,_,X,k,null)}}const A=D.children;for(let X=0,E=A.length;X<E;X++)y(A[X],B,_,x,R)}function I(D){D.target.removeEventListener("dispose",I);for(const _ in u){const x=u[_],R=D.target.uuid;R in x&&(x[R].dispose(),delete x[R])}}}function QA(t,e){function n(){let oe=!1;const Le=new zt;let Fe=null;const Be=new zt(0,0,0,0);return{setMask:function(Ne){Fe!==Ne&&!oe&&(t.colorMask(Ne,Ne,Ne,Ne),Fe=Ne)},setLocked:function(Ne){oe=Ne},setClear:function(Ne,Me,qe,ot,Lt){Lt===!0&&(Ne*=ot,Me*=ot,qe*=ot),Le.set(Ne,Me,qe,ot),Be.equals(Le)===!1&&(t.clearColor(Ne,Me,qe,ot),Be.copy(Le))},reset:function(){oe=!1,Fe=null,Be.set(-1,0,0,0)}}}function i(){let oe=!1,Le=!1,Fe=null,Be=null,Ne=null;return{setReversed:function(Me){if(Le!==Me){const qe=e.get("EXT_clip_control");Me?qe.clipControlEXT(qe.LOWER_LEFT_EXT,qe.ZERO_TO_ONE_EXT):qe.clipControlEXT(qe.LOWER_LEFT_EXT,qe.NEGATIVE_ONE_TO_ONE_EXT),Le=Me;const ot=Ne;Ne=null,this.setClear(ot)}},getReversed:function(){return Le},setTest:function(Me){Me?j(t.DEPTH_TEST):Q(t.DEPTH_TEST)},setMask:function(Me){Fe!==Me&&!oe&&(t.depthMask(Me),Fe=Me)},setFunc:function(Me){if(Le&&(Me=FS[Me]),Be!==Me){switch(Me){case Vd:t.depthFunc(t.NEVER);break;case $d:t.depthFunc(t.ALWAYS);break;case Hd:t.depthFunc(t.LESS);break;case ls:t.depthFunc(t.LEQUAL);break;case Gd:t.depthFunc(t.EQUAL);break;case Wd:t.depthFunc(t.GEQUAL);break;case Xd:t.depthFunc(t.GREATER);break;case Yd:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}Be=Me}},setLocked:function(Me){oe=Me},setClear:function(Me){Ne!==Me&&(Ne=Me,Le&&(Me=1-Me),t.clearDepth(Me))},reset:function(){oe=!1,Fe=null,Be=null,Ne=null,Le=!1}}}function r(){let oe=!1,Le=null,Fe=null,Be=null,Ne=null,Me=null,qe=null,ot=null,Lt=null;return{setTest:function(St){oe||(St?j(t.STENCIL_TEST):Q(t.STENCIL_TEST))},setMask:function(St){Le!==St&&!oe&&(t.stencilMask(St),Le=St)},setFunc:function(St,Ei,Ti){(Fe!==St||Be!==Ei||Ne!==Ti)&&(t.stencilFunc(St,Ei,Ti),Fe=St,Be=Ei,Ne=Ti)},setOp:function(St,Ei,Ti){(Me!==St||qe!==Ei||ot!==Ti)&&(t.stencilOp(St,Ei,Ti),Me=St,qe=Ei,ot=Ti)},setLocked:function(St){oe=St},setClear:function(St){Lt!==St&&(t.clearStencil(St),Lt=St)},reset:function(){oe=!1,Le=null,Fe=null,Be=null,Ne=null,Me=null,qe=null,ot=null,Lt=null}}}const o=new n,s=new i,a=new r,l=new WeakMap,u=new WeakMap;let c={},d={},f=new WeakMap,h=[],m=null,v=!1,g=null,p=null,b=null,M=null,y=null,I=null,D=null,B=new Et(0,0,0),_=0,x=!1,R=null,T=null,A=null,X=null,E=null;const k=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let C=!1,N=0;const U=t.getParameter(t.VERSION);U.indexOf("WebGL")!==-1?(N=parseFloat(/^WebGL (\d)/.exec(U)[1]),C=N>=1):U.indexOf("OpenGL ES")!==-1&&(N=parseFloat(/^OpenGL ES (\d)/.exec(U)[1]),C=N>=2);let H=null,G={};const ne=t.getParameter(t.SCISSOR_BOX),re=t.getParameter(t.VIEWPORT),ye=new zt().fromArray(ne),we=new zt().fromArray(re);function te(oe,Le,Fe,Be){const Ne=new Uint8Array(4),Me=t.createTexture();t.bindTexture(oe,Me),t.texParameteri(oe,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(oe,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let qe=0;qe<Fe;qe++)oe===t.TEXTURE_3D||oe===t.TEXTURE_2D_ARRAY?t.texImage3D(Le,0,t.RGBA,1,1,Be,0,t.RGBA,t.UNSIGNED_BYTE,Ne):t.texImage2D(Le+qe,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,Ne);return Me}const L={};L[t.TEXTURE_2D]=te(t.TEXTURE_2D,t.TEXTURE_2D,1),L[t.TEXTURE_CUBE_MAP]=te(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),L[t.TEXTURE_2D_ARRAY]=te(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),L[t.TEXTURE_3D]=te(t.TEXTURE_3D,t.TEXTURE_3D,1,1),o.setClear(0,0,0,1),s.setClear(1),a.setClear(0),j(t.DEPTH_TEST),s.setFunc(ls),z(!1),Y(nm),j(t.CULL_FACE),F(qi);function j(oe){c[oe]!==!0&&(t.enable(oe),c[oe]=!0)}function Q(oe){c[oe]!==!1&&(t.disable(oe),c[oe]=!1)}function fe(oe,Le){return d[oe]!==Le?(t.bindFramebuffer(oe,Le),d[oe]=Le,oe===t.DRAW_FRAMEBUFFER&&(d[t.FRAMEBUFFER]=Le),oe===t.FRAMEBUFFER&&(d[t.DRAW_FRAMEBUFFER]=Le),!0):!1}function Se(oe,Le){let Fe=h,Be=!1;if(oe){Fe=f.get(Le),Fe===void 0&&(Fe=[],f.set(Le,Fe));const Ne=oe.textures;if(Fe.length!==Ne.length||Fe[0]!==t.COLOR_ATTACHMENT0){for(let Me=0,qe=Ne.length;Me<qe;Me++)Fe[Me]=t.COLOR_ATTACHMENT0+Me;Fe.length=Ne.length,Be=!0}}else Fe[0]!==t.BACK&&(Fe[0]=t.BACK,Be=!0);Be&&t.drawBuffers(Fe)}function Ee(oe){return m!==oe?(t.useProgram(oe),m=oe,!0):!1}const $={[oo]:t.FUNC_ADD,[iS]:t.FUNC_SUBTRACT,[rS]:t.FUNC_REVERSE_SUBTRACT};$[oS]=t.MIN,$[sS]=t.MAX;const W={[aS]:t.ZERO,[lS]:t.ONE,[uS]:t.SRC_COLOR,[kd]:t.SRC_ALPHA,[mS]:t.SRC_ALPHA_SATURATE,[hS]:t.DST_COLOR,[dS]:t.DST_ALPHA,[cS]:t.ONE_MINUS_SRC_COLOR,[zd]:t.ONE_MINUS_SRC_ALPHA,[pS]:t.ONE_MINUS_DST_COLOR,[fS]:t.ONE_MINUS_DST_ALPHA,[gS]:t.CONSTANT_COLOR,[vS]:t.ONE_MINUS_CONSTANT_COLOR,[_S]:t.CONSTANT_ALPHA,[yS]:t.ONE_MINUS_CONSTANT_ALPHA};function F(oe,Le,Fe,Be,Ne,Me,qe,ot,Lt,St){if(oe===qi){v===!0&&(Q(t.BLEND),v=!1);return}if(v===!1&&(j(t.BLEND),v=!0),oe!==nS){if(oe!==g||St!==x){if((p!==oo||y!==oo)&&(t.blendEquation(t.FUNC_ADD),p=oo,y=oo),St)switch(oe){case Qo:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case im:t.blendFunc(t.ONE,t.ONE);break;case rm:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case om:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:_t("WebGLState: Invalid blending: ",oe);break}else switch(oe){case Qo:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case im:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case rm:_t("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case om:_t("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:_t("WebGLState: Invalid blending: ",oe);break}b=null,M=null,I=null,D=null,B.set(0,0,0),_=0,g=oe,x=St}return}Ne=Ne||Le,Me=Me||Fe,qe=qe||Be,(Le!==p||Ne!==y)&&(t.blendEquationSeparate($[Le],$[Ne]),p=Le,y=Ne),(Fe!==b||Be!==M||Me!==I||qe!==D)&&(t.blendFuncSeparate(W[Fe],W[Be],W[Me],W[qe]),b=Fe,M=Be,I=Me,D=qe),(ot.equals(B)===!1||Lt!==_)&&(t.blendColor(ot.r,ot.g,ot.b,Lt),B.copy(ot),_=Lt),g=oe,x=!1}function O(oe,Le){oe.side===zi?Q(t.CULL_FACE):j(t.CULL_FACE);let Fe=oe.side===Tn;Le&&(Fe=!Fe),z(Fe),oe.blending===Qo&&oe.transparent===!1?F(qi):F(oe.blending,oe.blendEquation,oe.blendSrc,oe.blendDst,oe.blendEquationAlpha,oe.blendSrcAlpha,oe.blendDstAlpha,oe.blendColor,oe.blendAlpha,oe.premultipliedAlpha),s.setFunc(oe.depthFunc),s.setTest(oe.depthTest),s.setMask(oe.depthWrite),o.setMask(oe.colorWrite);const Be=oe.stencilWrite;a.setTest(Be),Be&&(a.setMask(oe.stencilWriteMask),a.setFunc(oe.stencilFunc,oe.stencilRef,oe.stencilFuncMask),a.setOp(oe.stencilFail,oe.stencilZFail,oe.stencilZPass)),Z(oe.polygonOffset,oe.polygonOffsetFactor,oe.polygonOffsetUnits),oe.alphaToCoverage===!0?j(t.SAMPLE_ALPHA_TO_COVERAGE):Q(t.SAMPLE_ALPHA_TO_COVERAGE)}function z(oe){R!==oe&&(oe?t.frontFace(t.CW):t.frontFace(t.CCW),R=oe)}function Y(oe){oe!==Q1?(j(t.CULL_FACE),oe!==T&&(oe===nm?t.cullFace(t.BACK):oe===eS?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Q(t.CULL_FACE),T=oe}function S(oe){oe!==A&&(C&&t.lineWidth(oe),A=oe)}function Z(oe,Le,Fe){oe?(j(t.POLYGON_OFFSET_FILL),(X!==Le||E!==Fe)&&(X=Le,E=Fe,s.getReversed()&&(Le=-Le),t.polygonOffset(Le,Fe))):Q(t.POLYGON_OFFSET_FILL)}function J(oe){oe?j(t.SCISSOR_TEST):Q(t.SCISSOR_TEST)}function ee(oe){oe===void 0&&(oe=t.TEXTURE0+k-1),H!==oe&&(t.activeTexture(oe),H=oe)}function ie(oe,Le,Fe){Fe===void 0&&(H===null?Fe=t.TEXTURE0+k-1:Fe=H);let Be=G[Fe];Be===void 0&&(Be={type:void 0,texture:void 0},G[Fe]=Be),(Be.type!==oe||Be.texture!==Le)&&(H!==Fe&&(t.activeTexture(Fe),H=Fe),t.bindTexture(oe,Le||L[oe]),Be.type=oe,Be.texture=Le)}function P(){const oe=G[H];oe!==void 0&&oe.type!==void 0&&(t.bindTexture(oe.type,null),oe.type=void 0,oe.texture=void 0)}function w(){try{t.compressedTexImage2D(...arguments)}catch(oe){_t("WebGLState:",oe)}}function K(){try{t.compressedTexImage3D(...arguments)}catch(oe){_t("WebGLState:",oe)}}function ae(){try{t.texSubImage2D(...arguments)}catch(oe){_t("WebGLState:",oe)}}function ge(){try{t.texSubImage3D(...arguments)}catch(oe){_t("WebGLState:",oe)}}function de(){try{t.compressedTexSubImage2D(...arguments)}catch(oe){_t("WebGLState:",oe)}}function Ue(){try{t.compressedTexSubImage3D(...arguments)}catch(oe){_t("WebGLState:",oe)}}function Ie(){try{t.texStorage2D(...arguments)}catch(oe){_t("WebGLState:",oe)}}function Ge(){try{t.texStorage3D(...arguments)}catch(oe){_t("WebGLState:",oe)}}function Ye(){try{t.texImage2D(...arguments)}catch(oe){_t("WebGLState:",oe)}}function Pe(){try{t.texImage3D(...arguments)}catch(oe){_t("WebGLState:",oe)}}function ue(oe){ye.equals(oe)===!1&&(t.scissor(oe.x,oe.y,oe.z,oe.w),ye.copy(oe))}function se(oe){we.equals(oe)===!1&&(t.viewport(oe.x,oe.y,oe.z,oe.w),we.copy(oe))}function Ae(oe,Le){let Fe=u.get(Le);Fe===void 0&&(Fe=new WeakMap,u.set(Le,Fe));let Be=Fe.get(oe);Be===void 0&&(Be=t.getUniformBlockIndex(Le,oe.name),Fe.set(oe,Be))}function De(oe,Le){const Be=u.get(Le).get(oe);l.get(Le)!==Be&&(t.uniformBlockBinding(Le,Be,oe.__bindingPointIndex),l.set(Le,Be))}function Qe(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),s.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),c={},H=null,G={},d={},f=new WeakMap,h=[],m=null,v=!1,g=null,p=null,b=null,M=null,y=null,I=null,D=null,B=new Et(0,0,0),_=0,x=!1,R=null,T=null,A=null,X=null,E=null,ye.set(0,0,t.canvas.width,t.canvas.height),we.set(0,0,t.canvas.width,t.canvas.height),o.reset(),s.reset(),a.reset()}return{buffers:{color:o,depth:s,stencil:a},enable:j,disable:Q,bindFramebuffer:fe,drawBuffers:Se,useProgram:Ee,setBlending:F,setMaterial:O,setFlipSided:z,setCullFace:Y,setLineWidth:S,setPolygonOffset:Z,setScissorTest:J,activeTexture:ee,bindTexture:ie,unbindTexture:P,compressedTexImage2D:w,compressedTexImage3D:K,texImage2D:Ye,texImage3D:Pe,updateUBOMapping:Ae,uniformBlockBinding:De,texStorage2D:Ie,texStorage3D:Ge,texSubImage2D:ae,texSubImage3D:ge,compressedTexSubImage2D:de,compressedTexSubImage3D:Ue,scissor:ue,viewport:se,reset:Qe}}function eC(t,e,n,i,r,o,s){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new Tt,c=new WeakMap;let d;const f=new WeakMap;let h=!1;try{h=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(P,w){return h?new OffscreenCanvas(P,w):cu("canvas")}function v(P,w,K){let ae=1;const ge=ie(P);if((ge.width>K||ge.height>K)&&(ae=K/Math.max(ge.width,ge.height)),ae<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const de=Math.floor(ae*ge.width),Ue=Math.floor(ae*ge.height);d===void 0&&(d=m(de,Ue));const Ie=w?m(de,Ue):d;return Ie.width=de,Ie.height=Ue,Ie.getContext("2d").drawImage(P,0,0,de,Ue),st("WebGLRenderer: Texture has been resized from ("+ge.width+"x"+ge.height+") to ("+de+"x"+Ue+")."),Ie}else return"data"in P&&st("WebGLRenderer: Image in DataTexture is too big ("+ge.width+"x"+ge.height+")."),P;return P}function g(P){return P.generateMipmaps}function p(P){t.generateMipmap(P)}function b(P){return P.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?t.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function M(P,w,K,ae,ge=!1){if(P!==null){if(t[P]!==void 0)return t[P];st("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let de=w;if(w===t.RED&&(K===t.FLOAT&&(de=t.R32F),K===t.HALF_FLOAT&&(de=t.R16F),K===t.UNSIGNED_BYTE&&(de=t.R8)),w===t.RED_INTEGER&&(K===t.UNSIGNED_BYTE&&(de=t.R8UI),K===t.UNSIGNED_SHORT&&(de=t.R16UI),K===t.UNSIGNED_INT&&(de=t.R32UI),K===t.BYTE&&(de=t.R8I),K===t.SHORT&&(de=t.R16I),K===t.INT&&(de=t.R32I)),w===t.RG&&(K===t.FLOAT&&(de=t.RG32F),K===t.HALF_FLOAT&&(de=t.RG16F),K===t.UNSIGNED_BYTE&&(de=t.RG8)),w===t.RG_INTEGER&&(K===t.UNSIGNED_BYTE&&(de=t.RG8UI),K===t.UNSIGNED_SHORT&&(de=t.RG16UI),K===t.UNSIGNED_INT&&(de=t.RG32UI),K===t.BYTE&&(de=t.RG8I),K===t.SHORT&&(de=t.RG16I),K===t.INT&&(de=t.RG32I)),w===t.RGB_INTEGER&&(K===t.UNSIGNED_BYTE&&(de=t.RGB8UI),K===t.UNSIGNED_SHORT&&(de=t.RGB16UI),K===t.UNSIGNED_INT&&(de=t.RGB32UI),K===t.BYTE&&(de=t.RGB8I),K===t.SHORT&&(de=t.RGB16I),K===t.INT&&(de=t.RGB32I)),w===t.RGBA_INTEGER&&(K===t.UNSIGNED_BYTE&&(de=t.RGBA8UI),K===t.UNSIGNED_SHORT&&(de=t.RGBA16UI),K===t.UNSIGNED_INT&&(de=t.RGBA32UI),K===t.BYTE&&(de=t.RGBA8I),K===t.SHORT&&(de=t.RGBA16I),K===t.INT&&(de=t.RGBA32I)),w===t.RGB&&(K===t.UNSIGNED_INT_5_9_9_9_REV&&(de=t.RGB9_E5),K===t.UNSIGNED_INT_10F_11F_11F_REV&&(de=t.R11F_G11F_B10F)),w===t.RGBA){const Ue=ge?lu:gt.getTransfer(ae);K===t.FLOAT&&(de=t.RGBA32F),K===t.HALF_FLOAT&&(de=t.RGBA16F),K===t.UNSIGNED_BYTE&&(de=Ue===Mt?t.SRGB8_ALPHA8:t.RGBA8),K===t.UNSIGNED_SHORT_4_4_4_4&&(de=t.RGBA4),K===t.UNSIGNED_SHORT_5_5_5_1&&(de=t.RGB5_A1)}return(de===t.R16F||de===t.R32F||de===t.RG16F||de===t.RG32F||de===t.RGBA16F||de===t.RGBA32F)&&e.get("EXT_color_buffer_float"),de}function y(P,w){let K;return P?w===null||w===xi||w===da?K=t.DEPTH24_STENCIL8:w===hi?K=t.DEPTH32F_STENCIL8:w===ca&&(K=t.DEPTH24_STENCIL8,st("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===xi||w===da?K=t.DEPTH_COMPONENT24:w===hi?K=t.DEPTH_COMPONENT32F:w===ca&&(K=t.DEPTH_COMPONENT16),K}function I(P,w){return g(P)===!0||P.isFramebufferTexture&&P.minFilter!==nn&&P.minFilter!==Rt?Math.log2(Math.max(w.width,w.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?w.mipmaps.length:1}function D(P){const w=P.target;w.removeEventListener("dispose",D),_(w),w.isVideoTexture&&c.delete(w)}function B(P){const w=P.target;w.removeEventListener("dispose",B),R(w)}function _(P){const w=i.get(P);if(w.__webglInit===void 0)return;const K=P.source,ae=f.get(K);if(ae){const ge=ae[w.__cacheKey];ge.usedTimes--,ge.usedTimes===0&&x(P),Object.keys(ae).length===0&&f.delete(K)}i.remove(P)}function x(P){const w=i.get(P);t.deleteTexture(w.__webglTexture);const K=P.source,ae=f.get(K);delete ae[w.__cacheKey],s.memory.textures--}function R(P){const w=i.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),i.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let ae=0;ae<6;ae++){if(Array.isArray(w.__webglFramebuffer[ae]))for(let ge=0;ge<w.__webglFramebuffer[ae].length;ge++)t.deleteFramebuffer(w.__webglFramebuffer[ae][ge]);else t.deleteFramebuffer(w.__webglFramebuffer[ae]);w.__webglDepthbuffer&&t.deleteRenderbuffer(w.__webglDepthbuffer[ae])}else{if(Array.isArray(w.__webglFramebuffer))for(let ae=0;ae<w.__webglFramebuffer.length;ae++)t.deleteFramebuffer(w.__webglFramebuffer[ae]);else t.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&t.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&t.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let ae=0;ae<w.__webglColorRenderbuffer.length;ae++)w.__webglColorRenderbuffer[ae]&&t.deleteRenderbuffer(w.__webglColorRenderbuffer[ae]);w.__webglDepthRenderbuffer&&t.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const K=P.textures;for(let ae=0,ge=K.length;ae<ge;ae++){const de=i.get(K[ae]);de.__webglTexture&&(t.deleteTexture(de.__webglTexture),s.memory.textures--),i.remove(K[ae])}i.remove(P)}let T=0;function A(){T=0}function X(){const P=T;return P>=r.maxTextures&&st("WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+r.maxTextures),T+=1,P}function E(P){const w=[];return w.push(P.wrapS),w.push(P.wrapT),w.push(P.wrapR||0),w.push(P.magFilter),w.push(P.minFilter),w.push(P.anisotropy),w.push(P.internalFormat),w.push(P.format),w.push(P.type),w.push(P.generateMipmaps),w.push(P.premultiplyAlpha),w.push(P.flipY),w.push(P.unpackAlignment),w.push(P.colorSpace),w.join()}function k(P,w){const K=i.get(P);if(P.isVideoTexture&&J(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&K.__version!==P.version){const ae=P.image;if(ae===null)st("WebGLRenderer: Texture marked for update but no image data found.");else if(ae.complete===!1)st("WebGLRenderer: Texture marked for update but image is incomplete");else{L(K,P,w);return}}else P.isExternalTexture&&(K.__webglTexture=P.sourceTexture?P.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,K.__webglTexture,t.TEXTURE0+w)}function C(P,w){const K=i.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&K.__version!==P.version){L(K,P,w);return}else P.isExternalTexture&&(K.__webglTexture=P.sourceTexture?P.sourceTexture:null);n.bindTexture(t.TEXTURE_2D_ARRAY,K.__webglTexture,t.TEXTURE0+w)}function N(P,w){const K=i.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&K.__version!==P.version){L(K,P,w);return}n.bindTexture(t.TEXTURE_3D,K.__webglTexture,t.TEXTURE0+w)}function U(P,w){const K=i.get(P);if(P.isCubeDepthTexture!==!0&&P.version>0&&K.__version!==P.version){j(K,P,w);return}n.bindTexture(t.TEXTURE_CUBE_MAP,K.__webglTexture,t.TEXTURE0+w)}const H={[qd]:t.REPEAT,[$i]:t.CLAMP_TO_EDGE,[Kd]:t.MIRRORED_REPEAT},G={[nn]:t.NEAREST,[SS]:t.NEAREST_MIPMAP_NEAREST,[Xa]:t.NEAREST_MIPMAP_LINEAR,[Rt]:t.LINEAR,[Ic]:t.LINEAR_MIPMAP_NEAREST,[co]:t.LINEAR_MIPMAP_LINEAR},ne={[TS]:t.NEVER,[PS]:t.ALWAYS,[AS]:t.LESS,[Ph]:t.LEQUAL,[CS]:t.EQUAL,[Nh]:t.GEQUAL,[RS]:t.GREATER,[IS]:t.NOTEQUAL};function re(P,w){if(w.type===hi&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===Rt||w.magFilter===Ic||w.magFilter===Xa||w.magFilter===co||w.minFilter===Rt||w.minFilter===Ic||w.minFilter===Xa||w.minFilter===co)&&st("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(P,t.TEXTURE_WRAP_S,H[w.wrapS]),t.texParameteri(P,t.TEXTURE_WRAP_T,H[w.wrapT]),(P===t.TEXTURE_3D||P===t.TEXTURE_2D_ARRAY)&&t.texParameteri(P,t.TEXTURE_WRAP_R,H[w.wrapR]),t.texParameteri(P,t.TEXTURE_MAG_FILTER,G[w.magFilter]),t.texParameteri(P,t.TEXTURE_MIN_FILTER,G[w.minFilter]),w.compareFunction&&(t.texParameteri(P,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(P,t.TEXTURE_COMPARE_FUNC,ne[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===nn||w.minFilter!==Xa&&w.minFilter!==co||w.type===hi&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||i.get(w).__currentAnisotropy){const K=e.get("EXT_texture_filter_anisotropic");t.texParameterf(P,K.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,r.getMaxAnisotropy())),i.get(w).__currentAnisotropy=w.anisotropy}}}function ye(P,w){let K=!1;P.__webglInit===void 0&&(P.__webglInit=!0,w.addEventListener("dispose",D));const ae=w.source;let ge=f.get(ae);ge===void 0&&(ge={},f.set(ae,ge));const de=E(w);if(de!==P.__cacheKey){ge[de]===void 0&&(ge[de]={texture:t.createTexture(),usedTimes:0},s.memory.textures++,K=!0),ge[de].usedTimes++;const Ue=ge[P.__cacheKey];Ue!==void 0&&(ge[P.__cacheKey].usedTimes--,Ue.usedTimes===0&&x(w)),P.__cacheKey=de,P.__webglTexture=ge[de].texture}return K}function we(P,w,K){return Math.floor(Math.floor(P/K)/w)}function te(P,w,K,ae){const de=P.updateRanges;if(de.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,w.width,w.height,K,ae,w.data);else{de.sort((Pe,ue)=>Pe.start-ue.start);let Ue=0;for(let Pe=1;Pe<de.length;Pe++){const ue=de[Ue],se=de[Pe],Ae=ue.start+ue.count,De=we(se.start,w.width,4),Qe=we(ue.start,w.width,4);se.start<=Ae+1&&De===Qe&&we(se.start+se.count-1,w.width,4)===De?ue.count=Math.max(ue.count,se.start+se.count-ue.start):(++Ue,de[Ue]=se)}de.length=Ue+1;const Ie=t.getParameter(t.UNPACK_ROW_LENGTH),Ge=t.getParameter(t.UNPACK_SKIP_PIXELS),Ye=t.getParameter(t.UNPACK_SKIP_ROWS);t.pixelStorei(t.UNPACK_ROW_LENGTH,w.width);for(let Pe=0,ue=de.length;Pe<ue;Pe++){const se=de[Pe],Ae=Math.floor(se.start/4),De=Math.ceil(se.count/4),Qe=Ae%w.width,oe=Math.floor(Ae/w.width),Le=De,Fe=1;t.pixelStorei(t.UNPACK_SKIP_PIXELS,Qe),t.pixelStorei(t.UNPACK_SKIP_ROWS,oe),n.texSubImage2D(t.TEXTURE_2D,0,Qe,oe,Le,Fe,K,ae,w.data)}P.clearUpdateRanges(),t.pixelStorei(t.UNPACK_ROW_LENGTH,Ie),t.pixelStorei(t.UNPACK_SKIP_PIXELS,Ge),t.pixelStorei(t.UNPACK_SKIP_ROWS,Ye)}}function L(P,w,K){let ae=t.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(ae=t.TEXTURE_2D_ARRAY),w.isData3DTexture&&(ae=t.TEXTURE_3D);const ge=ye(P,w),de=w.source;n.bindTexture(ae,P.__webglTexture,t.TEXTURE0+K);const Ue=i.get(de);if(de.version!==Ue.__version||ge===!0){n.activeTexture(t.TEXTURE0+K);const Ie=gt.getPrimaries(gt.workingColorSpace),Ge=w.colorSpace===Cr?null:gt.getPrimaries(w.colorSpace),Ye=w.colorSpace===Cr||Ie===Ge?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,w.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,w.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ye);let Pe=v(w.image,!1,r.maxTextureSize);Pe=ee(w,Pe);const ue=o.convert(w.format,w.colorSpace),se=o.convert(w.type);let Ae=M(w.internalFormat,ue,se,w.colorSpace,w.isVideoTexture);re(ae,w);let De;const Qe=w.mipmaps,oe=w.isVideoTexture!==!0,Le=Ue.__version===void 0||ge===!0,Fe=de.dataReady,Be=I(w,Pe);if(w.isDepthTexture)Ae=y(w.format===fo,w.type),Le&&(oe?n.texStorage2D(t.TEXTURE_2D,1,Ae,Pe.width,Pe.height):n.texImage2D(t.TEXTURE_2D,0,Ae,Pe.width,Pe.height,0,ue,se,null));else if(w.isDataTexture)if(Qe.length>0){oe&&Le&&n.texStorage2D(t.TEXTURE_2D,Be,Ae,Qe[0].width,Qe[0].height);for(let Ne=0,Me=Qe.length;Ne<Me;Ne++)De=Qe[Ne],oe?Fe&&n.texSubImage2D(t.TEXTURE_2D,Ne,0,0,De.width,De.height,ue,se,De.data):n.texImage2D(t.TEXTURE_2D,Ne,Ae,De.width,De.height,0,ue,se,De.data);w.generateMipmaps=!1}else oe?(Le&&n.texStorage2D(t.TEXTURE_2D,Be,Ae,Pe.width,Pe.height),Fe&&te(w,Pe,ue,se)):n.texImage2D(t.TEXTURE_2D,0,Ae,Pe.width,Pe.height,0,ue,se,Pe.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){oe&&Le&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Be,Ae,Qe[0].width,Qe[0].height,Pe.depth);for(let Ne=0,Me=Qe.length;Ne<Me;Ne++)if(De=Qe[Ne],w.format!==xn)if(ue!==null)if(oe){if(Fe)if(w.layerUpdates.size>0){const qe=Am(De.width,De.height,w.format,w.type);for(const ot of w.layerUpdates){const Lt=De.data.subarray(ot*qe/De.data.BYTES_PER_ELEMENT,(ot+1)*qe/De.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,Ne,0,0,ot,De.width,De.height,1,ue,Lt)}w.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,Ne,0,0,0,De.width,De.height,Pe.depth,ue,De.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,Ne,Ae,De.width,De.height,Pe.depth,0,De.data,0,0);else st("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else oe?Fe&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,Ne,0,0,0,De.width,De.height,Pe.depth,ue,se,De.data):n.texImage3D(t.TEXTURE_2D_ARRAY,Ne,Ae,De.width,De.height,Pe.depth,0,ue,se,De.data)}else{oe&&Le&&n.texStorage2D(t.TEXTURE_2D,Be,Ae,Qe[0].width,Qe[0].height);for(let Ne=0,Me=Qe.length;Ne<Me;Ne++)De=Qe[Ne],w.format!==xn?ue!==null?oe?Fe&&n.compressedTexSubImage2D(t.TEXTURE_2D,Ne,0,0,De.width,De.height,ue,De.data):n.compressedTexImage2D(t.TEXTURE_2D,Ne,Ae,De.width,De.height,0,De.data):st("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):oe?Fe&&n.texSubImage2D(t.TEXTURE_2D,Ne,0,0,De.width,De.height,ue,se,De.data):n.texImage2D(t.TEXTURE_2D,Ne,Ae,De.width,De.height,0,ue,se,De.data)}else if(w.isDataArrayTexture)if(oe){if(Le&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Be,Ae,Pe.width,Pe.height,Pe.depth),Fe)if(w.layerUpdates.size>0){const Ne=Am(Pe.width,Pe.height,w.format,w.type);for(const Me of w.layerUpdates){const qe=Pe.data.subarray(Me*Ne/Pe.data.BYTES_PER_ELEMENT,(Me+1)*Ne/Pe.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,Me,Pe.width,Pe.height,1,ue,se,qe)}w.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,Pe.width,Pe.height,Pe.depth,ue,se,Pe.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Ae,Pe.width,Pe.height,Pe.depth,0,ue,se,Pe.data);else if(w.isData3DTexture)oe?(Le&&n.texStorage3D(t.TEXTURE_3D,Be,Ae,Pe.width,Pe.height,Pe.depth),Fe&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,Pe.width,Pe.height,Pe.depth,ue,se,Pe.data)):n.texImage3D(t.TEXTURE_3D,0,Ae,Pe.width,Pe.height,Pe.depth,0,ue,se,Pe.data);else if(w.isFramebufferTexture){if(Le)if(oe)n.texStorage2D(t.TEXTURE_2D,Be,Ae,Pe.width,Pe.height);else{let Ne=Pe.width,Me=Pe.height;for(let qe=0;qe<Be;qe++)n.texImage2D(t.TEXTURE_2D,qe,Ae,Ne,Me,0,ue,se,null),Ne>>=1,Me>>=1}}else if(Qe.length>0){if(oe&&Le){const Ne=ie(Qe[0]);n.texStorage2D(t.TEXTURE_2D,Be,Ae,Ne.width,Ne.height)}for(let Ne=0,Me=Qe.length;Ne<Me;Ne++)De=Qe[Ne],oe?Fe&&n.texSubImage2D(t.TEXTURE_2D,Ne,0,0,ue,se,De):n.texImage2D(t.TEXTURE_2D,Ne,Ae,ue,se,De);w.generateMipmaps=!1}else if(oe){if(Le){const Ne=ie(Pe);n.texStorage2D(t.TEXTURE_2D,Be,Ae,Ne.width,Ne.height)}Fe&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ue,se,Pe)}else n.texImage2D(t.TEXTURE_2D,0,Ae,ue,se,Pe);g(w)&&p(ae),Ue.__version=de.version,w.onUpdate&&w.onUpdate(w)}P.__version=w.version}function j(P,w,K){if(w.image.length!==6)return;const ae=ye(P,w),ge=w.source;n.bindTexture(t.TEXTURE_CUBE_MAP,P.__webglTexture,t.TEXTURE0+K);const de=i.get(ge);if(ge.version!==de.__version||ae===!0){n.activeTexture(t.TEXTURE0+K);const Ue=gt.getPrimaries(gt.workingColorSpace),Ie=w.colorSpace===Cr?null:gt.getPrimaries(w.colorSpace),Ge=w.colorSpace===Cr||Ue===Ie?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,w.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,w.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ge);const Ye=w.isCompressedTexture||w.image[0].isCompressedTexture,Pe=w.image[0]&&w.image[0].isDataTexture,ue=[];for(let Me=0;Me<6;Me++)!Ye&&!Pe?ue[Me]=v(w.image[Me],!0,r.maxCubemapSize):ue[Me]=Pe?w.image[Me].image:w.image[Me],ue[Me]=ee(w,ue[Me]);const se=ue[0],Ae=o.convert(w.format,w.colorSpace),De=o.convert(w.type),Qe=M(w.internalFormat,Ae,De,w.colorSpace),oe=w.isVideoTexture!==!0,Le=de.__version===void 0||ae===!0,Fe=ge.dataReady;let Be=I(w,se);re(t.TEXTURE_CUBE_MAP,w);let Ne;if(Ye){oe&&Le&&n.texStorage2D(t.TEXTURE_CUBE_MAP,Be,Qe,se.width,se.height);for(let Me=0;Me<6;Me++){Ne=ue[Me].mipmaps;for(let qe=0;qe<Ne.length;qe++){const ot=Ne[qe];w.format!==xn?Ae!==null?oe?Fe&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Me,qe,0,0,ot.width,ot.height,Ae,ot.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Me,qe,Qe,ot.width,ot.height,0,ot.data):st("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):oe?Fe&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Me,qe,0,0,ot.width,ot.height,Ae,De,ot.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Me,qe,Qe,ot.width,ot.height,0,Ae,De,ot.data)}}}else{if(Ne=w.mipmaps,oe&&Le){Ne.length>0&&Be++;const Me=ie(ue[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,Be,Qe,Me.width,Me.height)}for(let Me=0;Me<6;Me++)if(Pe){oe?Fe&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,0,0,ue[Me].width,ue[Me].height,Ae,De,ue[Me].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,Qe,ue[Me].width,ue[Me].height,0,Ae,De,ue[Me].data);for(let qe=0;qe<Ne.length;qe++){const Lt=Ne[qe].image[Me].image;oe?Fe&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Me,qe+1,0,0,Lt.width,Lt.height,Ae,De,Lt.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Me,qe+1,Qe,Lt.width,Lt.height,0,Ae,De,Lt.data)}}else{oe?Fe&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,0,0,Ae,De,ue[Me]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,Qe,Ae,De,ue[Me]);for(let qe=0;qe<Ne.length;qe++){const ot=Ne[qe];oe?Fe&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Me,qe+1,0,0,Ae,De,ot.image[Me]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Me,qe+1,Qe,Ae,De,ot.image[Me])}}}g(w)&&p(t.TEXTURE_CUBE_MAP),de.__version=ge.version,w.onUpdate&&w.onUpdate(w)}P.__version=w.version}function Q(P,w,K,ae,ge,de){const Ue=o.convert(K.format,K.colorSpace),Ie=o.convert(K.type),Ge=M(K.internalFormat,Ue,Ie,K.colorSpace),Ye=i.get(w),Pe=i.get(K);if(Pe.__renderTarget=w,!Ye.__hasExternalTextures){const ue=Math.max(1,w.width>>de),se=Math.max(1,w.height>>de);ge===t.TEXTURE_3D||ge===t.TEXTURE_2D_ARRAY?n.texImage3D(ge,de,Ge,ue,se,w.depth,0,Ue,Ie,null):n.texImage2D(ge,de,Ge,ue,se,0,Ue,Ie,null)}n.bindFramebuffer(t.FRAMEBUFFER,P),Z(w)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ae,ge,Pe.__webglTexture,0,S(w)):(ge===t.TEXTURE_2D||ge>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&ge<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,ae,ge,Pe.__webglTexture,de),n.bindFramebuffer(t.FRAMEBUFFER,null)}function fe(P,w,K){if(t.bindRenderbuffer(t.RENDERBUFFER,P),w.depthBuffer){const ae=w.depthTexture,ge=ae&&ae.isDepthTexture?ae.type:null,de=y(w.stencilBuffer,ge),Ue=w.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;Z(w)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,S(w),de,w.width,w.height):K?t.renderbufferStorageMultisample(t.RENDERBUFFER,S(w),de,w.width,w.height):t.renderbufferStorage(t.RENDERBUFFER,de,w.width,w.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,Ue,t.RENDERBUFFER,P)}else{const ae=w.textures;for(let ge=0;ge<ae.length;ge++){const de=ae[ge],Ue=o.convert(de.format,de.colorSpace),Ie=o.convert(de.type),Ge=M(de.internalFormat,Ue,Ie,de.colorSpace);Z(w)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,S(w),Ge,w.width,w.height):K?t.renderbufferStorageMultisample(t.RENDERBUFFER,S(w),Ge,w.width,w.height):t.renderbufferStorage(t.RENDERBUFFER,Ge,w.width,w.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Se(P,w,K){const ae=w.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(t.FRAMEBUFFER,P),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ge=i.get(w.depthTexture);if(ge.__renderTarget=w,(!ge.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),ae){if(ge.__webglInit===void 0&&(ge.__webglInit=!0,w.depthTexture.addEventListener("dispose",D)),ge.__webglTexture===void 0){ge.__webglTexture=t.createTexture(),n.bindTexture(t.TEXTURE_CUBE_MAP,ge.__webglTexture),re(t.TEXTURE_CUBE_MAP,w.depthTexture);const Ye=o.convert(w.depthTexture.format),Pe=o.convert(w.depthTexture.type);let ue;w.depthTexture.format===nr?ue=t.DEPTH_COMPONENT24:w.depthTexture.format===fo&&(ue=t.DEPTH24_STENCIL8);for(let se=0;se<6;se++)t.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,ue,w.width,w.height,0,Ye,Pe,null)}}else k(w.depthTexture,0);const de=ge.__webglTexture,Ue=S(w),Ie=ae?t.TEXTURE_CUBE_MAP_POSITIVE_X+K:t.TEXTURE_2D,Ge=w.depthTexture.format===fo?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(w.depthTexture.format===nr)Z(w)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Ge,Ie,de,0,Ue):t.framebufferTexture2D(t.FRAMEBUFFER,Ge,Ie,de,0);else if(w.depthTexture.format===fo)Z(w)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Ge,Ie,de,0,Ue):t.framebufferTexture2D(t.FRAMEBUFFER,Ge,Ie,de,0);else throw new Error("Unknown depthTexture format")}function Ee(P){const w=i.get(P),K=P.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==P.depthTexture){const ae=P.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),ae){const ge=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,ae.removeEventListener("dispose",ge)};ae.addEventListener("dispose",ge),w.__depthDisposeCallback=ge}w.__boundDepthTexture=ae}if(P.depthTexture&&!w.__autoAllocateDepthBuffer)if(K)for(let ae=0;ae<6;ae++)Se(w.__webglFramebuffer[ae],P,ae);else{const ae=P.texture.mipmaps;ae&&ae.length>0?Se(w.__webglFramebuffer[0],P,0):Se(w.__webglFramebuffer,P,0)}else if(K){w.__webglDepthbuffer=[];for(let ae=0;ae<6;ae++)if(n.bindFramebuffer(t.FRAMEBUFFER,w.__webglFramebuffer[ae]),w.__webglDepthbuffer[ae]===void 0)w.__webglDepthbuffer[ae]=t.createRenderbuffer(),fe(w.__webglDepthbuffer[ae],P,!1);else{const ge=P.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,de=w.__webglDepthbuffer[ae];t.bindRenderbuffer(t.RENDERBUFFER,de),t.framebufferRenderbuffer(t.FRAMEBUFFER,ge,t.RENDERBUFFER,de)}}else{const ae=P.texture.mipmaps;if(ae&&ae.length>0?n.bindFramebuffer(t.FRAMEBUFFER,w.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=t.createRenderbuffer(),fe(w.__webglDepthbuffer,P,!1);else{const ge=P.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,de=w.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,de),t.framebufferRenderbuffer(t.FRAMEBUFFER,ge,t.RENDERBUFFER,de)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function $(P,w,K){const ae=i.get(P);w!==void 0&&Q(ae.__webglFramebuffer,P,P.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),K!==void 0&&Ee(P)}function W(P){const w=P.texture,K=i.get(P),ae=i.get(w);P.addEventListener("dispose",B);const ge=P.textures,de=P.isWebGLCubeRenderTarget===!0,Ue=ge.length>1;if(Ue||(ae.__webglTexture===void 0&&(ae.__webglTexture=t.createTexture()),ae.__version=w.version,s.memory.textures++),de){K.__webglFramebuffer=[];for(let Ie=0;Ie<6;Ie++)if(w.mipmaps&&w.mipmaps.length>0){K.__webglFramebuffer[Ie]=[];for(let Ge=0;Ge<w.mipmaps.length;Ge++)K.__webglFramebuffer[Ie][Ge]=t.createFramebuffer()}else K.__webglFramebuffer[Ie]=t.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){K.__webglFramebuffer=[];for(let Ie=0;Ie<w.mipmaps.length;Ie++)K.__webglFramebuffer[Ie]=t.createFramebuffer()}else K.__webglFramebuffer=t.createFramebuffer();if(Ue)for(let Ie=0,Ge=ge.length;Ie<Ge;Ie++){const Ye=i.get(ge[Ie]);Ye.__webglTexture===void 0&&(Ye.__webglTexture=t.createTexture(),s.memory.textures++)}if(P.samples>0&&Z(P)===!1){K.__webglMultisampledFramebuffer=t.createFramebuffer(),K.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,K.__webglMultisampledFramebuffer);for(let Ie=0;Ie<ge.length;Ie++){const Ge=ge[Ie];K.__webglColorRenderbuffer[Ie]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,K.__webglColorRenderbuffer[Ie]);const Ye=o.convert(Ge.format,Ge.colorSpace),Pe=o.convert(Ge.type),ue=M(Ge.internalFormat,Ye,Pe,Ge.colorSpace,P.isXRRenderTarget===!0),se=S(P);t.renderbufferStorageMultisample(t.RENDERBUFFER,se,ue,P.width,P.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ie,t.RENDERBUFFER,K.__webglColorRenderbuffer[Ie])}t.bindRenderbuffer(t.RENDERBUFFER,null),P.depthBuffer&&(K.__webglDepthRenderbuffer=t.createRenderbuffer(),fe(K.__webglDepthRenderbuffer,P,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(de){n.bindTexture(t.TEXTURE_CUBE_MAP,ae.__webglTexture),re(t.TEXTURE_CUBE_MAP,w);for(let Ie=0;Ie<6;Ie++)if(w.mipmaps&&w.mipmaps.length>0)for(let Ge=0;Ge<w.mipmaps.length;Ge++)Q(K.__webglFramebuffer[Ie][Ge],P,w,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+Ie,Ge);else Q(K.__webglFramebuffer[Ie],P,w,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+Ie,0);g(w)&&p(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Ue){for(let Ie=0,Ge=ge.length;Ie<Ge;Ie++){const Ye=ge[Ie],Pe=i.get(Ye);let ue=t.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(ue=P.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(ue,Pe.__webglTexture),re(ue,Ye),Q(K.__webglFramebuffer,P,Ye,t.COLOR_ATTACHMENT0+Ie,ue,0),g(Ye)&&p(ue)}n.unbindTexture()}else{let Ie=t.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(Ie=P.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(Ie,ae.__webglTexture),re(Ie,w),w.mipmaps&&w.mipmaps.length>0)for(let Ge=0;Ge<w.mipmaps.length;Ge++)Q(K.__webglFramebuffer[Ge],P,w,t.COLOR_ATTACHMENT0,Ie,Ge);else Q(K.__webglFramebuffer,P,w,t.COLOR_ATTACHMENT0,Ie,0);g(w)&&p(Ie),n.unbindTexture()}P.depthBuffer&&Ee(P)}function F(P){const w=P.textures;for(let K=0,ae=w.length;K<ae;K++){const ge=w[K];if(g(ge)){const de=b(P),Ue=i.get(ge).__webglTexture;n.bindTexture(de,Ue),p(de),n.unbindTexture()}}}const O=[],z=[];function Y(P){if(P.samples>0){if(Z(P)===!1){const w=P.textures,K=P.width,ae=P.height;let ge=t.COLOR_BUFFER_BIT;const de=P.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Ue=i.get(P),Ie=w.length>1;if(Ie)for(let Ye=0;Ye<w.length;Ye++)n.bindFramebuffer(t.FRAMEBUFFER,Ue.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ye,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Ue.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ye,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Ue.__webglMultisampledFramebuffer);const Ge=P.texture.mipmaps;Ge&&Ge.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Ue.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Ue.__webglFramebuffer);for(let Ye=0;Ye<w.length;Ye++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(ge|=t.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(ge|=t.STENCIL_BUFFER_BIT)),Ie){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Ue.__webglColorRenderbuffer[Ye]);const Pe=i.get(w[Ye]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Pe,0)}t.blitFramebuffer(0,0,K,ae,0,0,K,ae,ge,t.NEAREST),l===!0&&(O.length=0,z.length=0,O.push(t.COLOR_ATTACHMENT0+Ye),P.depthBuffer&&P.resolveDepthBuffer===!1&&(O.push(de),z.push(de),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,z)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,O))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),Ie)for(let Ye=0;Ye<w.length;Ye++){n.bindFramebuffer(t.FRAMEBUFFER,Ue.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ye,t.RENDERBUFFER,Ue.__webglColorRenderbuffer[Ye]);const Pe=i.get(w[Ye]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Ue.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ye,t.TEXTURE_2D,Pe,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Ue.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&l){const w=P.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[w])}}}function S(P){return Math.min(r.maxSamples,P.samples)}function Z(P){const w=i.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function J(P){const w=s.render.frame;c.get(P)!==w&&(c.set(P,w),P.update())}function ee(P,w){const K=P.colorSpace,ae=P.format,ge=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||K!==kr&&K!==Cr&&(gt.getTransfer(K)===Mt?(ae!==xn||ge!==_n)&&st("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):_t("WebGLTextures: Unsupported texture color space:",K)),w}function ie(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(u.width=P.naturalWidth||P.width,u.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(u.width=P.displayWidth,u.height=P.displayHeight):(u.width=P.width,u.height=P.height),u}this.allocateTextureUnit=X,this.resetTextureUnits=A,this.setTexture2D=k,this.setTexture2DArray=C,this.setTexture3D=N,this.setTextureCube=U,this.rebindTextures=$,this.setupRenderTarget=W,this.updateRenderTargetMipmap=F,this.updateMultisampleRenderTarget=Y,this.setupDepthRenderbuffer=Ee,this.setupFrameBufferTexture=Q,this.useMultisampledRTT=Z,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function tC(t,e){function n(i,r=Cr){let o;const s=gt.getTransfer(r);if(i===_n)return t.UNSIGNED_BYTE;if(i===Th)return t.UNSIGNED_SHORT_4_4_4_4;if(i===Ah)return t.UNSIGNED_SHORT_5_5_5_1;if(i===K0)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===Z0)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===Y0)return t.BYTE;if(i===q0)return t.SHORT;if(i===ca)return t.UNSIGNED_SHORT;if(i===Eh)return t.INT;if(i===xi)return t.UNSIGNED_INT;if(i===hi)return t.FLOAT;if(i===tr)return t.HALF_FLOAT;if(i===j0)return t.ALPHA;if(i===J0)return t.RGB;if(i===xn)return t.RGBA;if(i===nr)return t.DEPTH_COMPONENT;if(i===fo)return t.DEPTH_STENCIL;if(i===Q0)return t.RED;if(i===Ch)return t.RED_INTEGER;if(i===cs)return t.RG;if(i===Rh)return t.RG_INTEGER;if(i===Ih)return t.RGBA_INTEGER;if(i===Ul||i===Ol||i===Bl||i===kl)if(s===Mt)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(i===Ul)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ol)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Bl)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===kl)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(i===Ul)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ol)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Bl)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===kl)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Zd||i===jd||i===Jd||i===Qd)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(i===Zd)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===jd)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Jd)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Qd)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===ef||i===tf||i===nf||i===rf||i===of||i===sf||i===af)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(i===ef||i===tf)return s===Mt?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(i===nf)return s===Mt?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC;if(i===rf)return o.COMPRESSED_R11_EAC;if(i===of)return o.COMPRESSED_SIGNED_R11_EAC;if(i===sf)return o.COMPRESSED_RG11_EAC;if(i===af)return o.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===lf||i===uf||i===cf||i===df||i===ff||i===hf||i===pf||i===mf||i===gf||i===vf||i===_f||i===yf||i===xf||i===bf)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(i===lf)return s===Mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===uf)return s===Mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===cf)return s===Mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===df)return s===Mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===ff)return s===Mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===hf)return s===Mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===pf)return s===Mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===mf)return s===Mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===gf)return s===Mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===vf)return s===Mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===_f)return s===Mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===yf)return s===Mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===xf)return s===Mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===bf)return s===Mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Sf||i===Mf||i===wf)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(i===Sf)return s===Mt?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Mf)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===wf)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Ef||i===Tf||i===Af||i===Cf)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(i===Ef)return o.COMPRESSED_RED_RGTC1_EXT;if(i===Tf)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Af)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Cf)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===da?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const nC=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,iC=`
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

}`;class rC{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const i=new u_(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new Qn({vertexShader:nC,fragmentShader:iC,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new bi(new La(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class oC extends _s{constructor(e,n){super();const i=this;let r=null,o=1,s=null,a="local-floor",l=1,u=null,c=null,d=null,f=null,h=null,m=null;const v=typeof XRWebGLBinding<"u",g=new rC,p={},b=n.getContextAttributes();let M=null,y=null;const I=[],D=[],B=new Tt;let _=null;const x=new Gn;x.viewport=new zt;const R=new Gn;R.viewport=new zt;const T=[x,R],A=new vM;let X=null,E=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(L){let j=I[L];return j===void 0&&(j=new Bc,I[L]=j),j.getTargetRaySpace()},this.getControllerGrip=function(L){let j=I[L];return j===void 0&&(j=new Bc,I[L]=j),j.getGripSpace()},this.getHand=function(L){let j=I[L];return j===void 0&&(j=new Bc,I[L]=j),j.getHandSpace()};function k(L){const j=D.indexOf(L.inputSource);if(j===-1)return;const Q=I[j];Q!==void 0&&(Q.update(L.inputSource,L.frame,u||s),Q.dispatchEvent({type:L.type,data:L.inputSource}))}function C(){r.removeEventListener("select",k),r.removeEventListener("selectstart",k),r.removeEventListener("selectend",k),r.removeEventListener("squeeze",k),r.removeEventListener("squeezestart",k),r.removeEventListener("squeezeend",k),r.removeEventListener("end",C),r.removeEventListener("inputsourceschange",N);for(let L=0;L<I.length;L++){const j=D[L];j!==null&&(D[L]=null,I[L].disconnect(j))}X=null,E=null,g.reset();for(const L in p)delete p[L];e.setRenderTarget(M),h=null,f=null,d=null,r=null,y=null,te.stop(),i.isPresenting=!1,e.setPixelRatio(_),e.setSize(B.width,B.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(L){o=L,i.isPresenting===!0&&st("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(L){a=L,i.isPresenting===!0&&st("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||s},this.setReferenceSpace=function(L){u=L},this.getBaseLayer=function(){return f!==null?f:h},this.getBinding=function(){return d===null&&v&&(d=new XRWebGLBinding(r,n)),d},this.getFrame=function(){return m},this.getSession=function(){return r},this.setSession=async function(L){if(r=L,r!==null){if(M=e.getRenderTarget(),r.addEventListener("select",k),r.addEventListener("selectstart",k),r.addEventListener("selectend",k),r.addEventListener("squeeze",k),r.addEventListener("squeezestart",k),r.addEventListener("squeezeend",k),r.addEventListener("end",C),r.addEventListener("inputsourceschange",N),b.xrCompatible!==!0&&await n.makeXRCompatible(),_=e.getPixelRatio(),e.getSize(B),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let Q=null,fe=null,Se=null;b.depth&&(Se=b.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,Q=b.stencil?fo:nr,fe=b.stencil?da:xi);const Ee={colorFormat:n.RGBA8,depthFormat:Se,scaleFactor:o};d=this.getBinding(),f=d.createProjectionLayer(Ee),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),y=new Mn(f.textureWidth,f.textureHeight,{format:xn,type:_n,depthTexture:new fa(f.textureWidth,f.textureHeight,fe,void 0,void 0,void 0,void 0,void 0,void 0,Q),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const Q={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:o};h=new XRWebGLLayer(r,n,Q),r.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),y=new Mn(h.framebufferWidth,h.framebufferHeight,{format:xn,type:_n,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),u=null,s=await r.requestReferenceSpace(a),te.setContext(r),te.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function N(L){for(let j=0;j<L.removed.length;j++){const Q=L.removed[j],fe=D.indexOf(Q);fe>=0&&(D[fe]=null,I[fe].disconnect(Q))}for(let j=0;j<L.added.length;j++){const Q=L.added[j];let fe=D.indexOf(Q);if(fe===-1){for(let Ee=0;Ee<I.length;Ee++)if(Ee>=D.length){D.push(Q),fe=Ee;break}else if(D[Ee]===null){D[Ee]=Q,fe=Ee;break}if(fe===-1)break}const Se=I[fe];Se&&Se.connect(Q)}}const U=new _e,H=new _e;function G(L,j,Q){U.setFromMatrixPosition(j.matrixWorld),H.setFromMatrixPosition(Q.matrixWorld);const fe=U.distanceTo(H),Se=j.projectionMatrix.elements,Ee=Q.projectionMatrix.elements,$=Se[14]/(Se[10]-1),W=Se[14]/(Se[10]+1),F=(Se[9]+1)/Se[5],O=(Se[9]-1)/Se[5],z=(Se[8]-1)/Se[0],Y=(Ee[8]+1)/Ee[0],S=$*z,Z=$*Y,J=fe/(-z+Y),ee=J*-z;if(j.matrixWorld.decompose(L.position,L.quaternion,L.scale),L.translateX(ee),L.translateZ(J),L.matrixWorld.compose(L.position,L.quaternion,L.scale),L.matrixWorldInverse.copy(L.matrixWorld).invert(),Se[10]===-1)L.projectionMatrix.copy(j.projectionMatrix),L.projectionMatrixInverse.copy(j.projectionMatrixInverse);else{const ie=$+J,P=W+J,w=S-ee,K=Z+(fe-ee),ae=F*W/P*ie,ge=O*W/P*ie;L.projectionMatrix.makePerspective(w,K,ae,ge,ie,P),L.projectionMatrixInverse.copy(L.projectionMatrix).invert()}}function ne(L,j){j===null?L.matrixWorld.copy(L.matrix):L.matrixWorld.multiplyMatrices(j.matrixWorld,L.matrix),L.matrixWorldInverse.copy(L.matrixWorld).invert()}this.updateCamera=function(L){if(r===null)return;let j=L.near,Q=L.far;g.texture!==null&&(g.depthNear>0&&(j=g.depthNear),g.depthFar>0&&(Q=g.depthFar)),A.near=R.near=x.near=j,A.far=R.far=x.far=Q,(X!==A.near||E!==A.far)&&(r.updateRenderState({depthNear:A.near,depthFar:A.far}),X=A.near,E=A.far),A.layers.mask=L.layers.mask|6,x.layers.mask=A.layers.mask&-5,R.layers.mask=A.layers.mask&-3;const fe=L.parent,Se=A.cameras;ne(A,fe);for(let Ee=0;Ee<Se.length;Ee++)ne(Se[Ee],fe);Se.length===2?G(A,x,R):A.projectionMatrix.copy(x.projectionMatrix),re(L,A,fe)};function re(L,j,Q){Q===null?L.matrix.copy(j.matrixWorld):(L.matrix.copy(Q.matrixWorld),L.matrix.invert(),L.matrix.multiply(j.matrixWorld)),L.matrix.decompose(L.position,L.quaternion,L.scale),L.updateMatrixWorld(!0),L.projectionMatrix.copy(j.projectionMatrix),L.projectionMatrixInverse.copy(j.projectionMatrixInverse),L.isPerspectiveCamera&&(L.fov=Rf*2*Math.atan(1/L.projectionMatrix.elements[5]),L.zoom=1)}this.getCamera=function(){return A},this.getFoveation=function(){if(!(f===null&&h===null))return l},this.setFoveation=function(L){l=L,f!==null&&(f.fixedFoveation=L),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=L)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(A)},this.getCameraTexture=function(L){return p[L]};let ye=null;function we(L,j){if(c=j.getViewerPose(u||s),m=j,c!==null){const Q=c.views;h!==null&&(e.setRenderTargetFramebuffer(y,h.framebuffer),e.setRenderTarget(y));let fe=!1;Q.length!==A.cameras.length&&(A.cameras.length=0,fe=!0);for(let W=0;W<Q.length;W++){const F=Q[W];let O=null;if(h!==null)O=h.getViewport(F);else{const Y=d.getViewSubImage(f,F);O=Y.viewport,W===0&&(e.setRenderTargetTextures(y,Y.colorTexture,Y.depthStencilTexture),e.setRenderTarget(y))}let z=T[W];z===void 0&&(z=new Gn,z.layers.enable(W),z.viewport=new zt,T[W]=z),z.matrix.fromArray(F.transform.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale),z.projectionMatrix.fromArray(F.projectionMatrix),z.projectionMatrixInverse.copy(z.projectionMatrix).invert(),z.viewport.set(O.x,O.y,O.width,O.height),W===0&&(A.matrix.copy(z.matrix),A.matrix.decompose(A.position,A.quaternion,A.scale)),fe===!0&&A.cameras.push(z)}const Se=r.enabledFeatures;if(Se&&Se.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&v){d=i.getBinding();const W=d.getDepthInformation(Q[0]);W&&W.isValid&&W.texture&&g.init(W,r.renderState)}if(Se&&Se.includes("camera-access")&&v){e.state.unbindTexture(),d=i.getBinding();for(let W=0;W<Q.length;W++){const F=Q[W].camera;if(F){let O=p[F];O||(O=new u_,p[F]=O);const z=d.getCameraImage(F);O.sourceTexture=z}}}}for(let Q=0;Q<I.length;Q++){const fe=D[Q],Se=I[Q];fe!==null&&Se!==void 0&&Se.update(fe,j,u||s)}ye&&ye(L,j),j.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:j}),m=null}const te=new f_;te.setAnimationLoop(we),this.setAnimationLoop=function(L){ye=L},this.dispose=function(){}}}const to=new ir,sC=new Wt;function aC(t,e){function n(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function i(g,p){p.color.getRGB(g.fogColor.value,c_(t)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function r(g,p,b,M,y){p.isMeshBasicMaterial?o(g,p):p.isMeshLambertMaterial?(o(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(o(g,p),d(g,p)):p.isMeshPhongMaterial?(o(g,p),c(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(o(g,p),f(g,p),p.isMeshPhysicalMaterial&&h(g,p,y)):p.isMeshMatcapMaterial?(o(g,p),m(g,p)):p.isMeshDepthMaterial?o(g,p):p.isMeshDistanceMaterial?(o(g,p),v(g,p)):p.isMeshNormalMaterial?o(g,p):p.isLineBasicMaterial?(s(g,p),p.isLineDashedMaterial&&a(g,p)):p.isPointsMaterial?l(g,p,b,M):p.isSpriteMaterial?u(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function o(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,n(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,n(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,n(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===Tn&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,n(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===Tn&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,n(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,n(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,n(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);const b=e.get(p),M=b.envMap,y=b.envMapRotation;M&&(g.envMap.value=M,to.copy(y),to.x*=-1,to.y*=-1,to.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(to.y*=-1,to.z*=-1),g.envMapRotation.value.setFromMatrix4(sC.makeRotationFromEuler(to)),g.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,n(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,n(p.aoMap,g.aoMapTransform))}function s(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,n(p.map,g.mapTransform))}function a(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,b,M){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*b,g.scale.value=M*.5,p.map&&(g.map.value=p.map,n(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,n(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function u(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,n(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,n(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function d(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function f(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,n(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,n(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function h(g,p,b){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,n(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,n(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,n(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,n(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,n(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Tn&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,n(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,n(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=b.texture,g.transmissionSamplerSize.value.set(b.width,b.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,n(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,n(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,n(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,n(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,n(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function v(g,p){const b=e.get(p).light;g.referencePosition.value.setFromMatrixPosition(b.matrixWorld),g.nearDistance.value=b.shadow.camera.near,g.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function lC(t,e,n,i){let r={},o={},s=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,M){const y=M.program;i.uniformBlockBinding(b,y)}function u(b,M){let y=r[b.id];y===void 0&&(m(b),y=c(b),r[b.id]=y,b.addEventListener("dispose",g));const I=M.program;i.updateUBOMapping(b,I);const D=e.render.frame;o[b.id]!==D&&(f(b),o[b.id]=D)}function c(b){const M=d();b.__bindingPointIndex=M;const y=t.createBuffer(),I=b.__size,D=b.usage;return t.bindBuffer(t.UNIFORM_BUFFER,y),t.bufferData(t.UNIFORM_BUFFER,I,D),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,M,y),y}function d(){for(let b=0;b<a;b++)if(s.indexOf(b)===-1)return s.push(b),b;return _t("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(b){const M=r[b.id],y=b.uniforms,I=b.__cache;t.bindBuffer(t.UNIFORM_BUFFER,M);for(let D=0,B=y.length;D<B;D++){const _=Array.isArray(y[D])?y[D]:[y[D]];for(let x=0,R=_.length;x<R;x++){const T=_[x];if(h(T,D,x,I)===!0){const A=T.__offset,X=Array.isArray(T.value)?T.value:[T.value];let E=0;for(let k=0;k<X.length;k++){const C=X[k],N=v(C);typeof C=="number"||typeof C=="boolean"?(T.__data[0]=C,t.bufferSubData(t.UNIFORM_BUFFER,A+E,T.__data)):C.isMatrix3?(T.__data[0]=C.elements[0],T.__data[1]=C.elements[1],T.__data[2]=C.elements[2],T.__data[3]=0,T.__data[4]=C.elements[3],T.__data[5]=C.elements[4],T.__data[6]=C.elements[5],T.__data[7]=0,T.__data[8]=C.elements[6],T.__data[9]=C.elements[7],T.__data[10]=C.elements[8],T.__data[11]=0):(C.toArray(T.__data,E),E+=N.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,A,T.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function h(b,M,y,I){const D=b.value,B=M+"_"+y;if(I[B]===void 0)return typeof D=="number"||typeof D=="boolean"?I[B]=D:I[B]=D.clone(),!0;{const _=I[B];if(typeof D=="number"||typeof D=="boolean"){if(_!==D)return I[B]=D,!0}else if(_.equals(D)===!1)return _.copy(D),!0}return!1}function m(b){const M=b.uniforms;let y=0;const I=16;for(let B=0,_=M.length;B<_;B++){const x=Array.isArray(M[B])?M[B]:[M[B]];for(let R=0,T=x.length;R<T;R++){const A=x[R],X=Array.isArray(A.value)?A.value:[A.value];for(let E=0,k=X.length;E<k;E++){const C=X[E],N=v(C),U=y%I,H=U%N.boundary,G=U+H;y+=H,G!==0&&I-G<N.storage&&(y+=I-G),A.__data=new Float32Array(N.storage/Float32Array.BYTES_PER_ELEMENT),A.__offset=y,y+=N.storage}}}const D=y%I;return D>0&&(y+=I-D),b.__size=y,b.__cache={},this}function v(b){const M={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(M.boundary=4,M.storage=4):b.isVector2?(M.boundary=8,M.storage=8):b.isVector3||b.isColor?(M.boundary=16,M.storage=12):b.isVector4?(M.boundary=16,M.storage=16):b.isMatrix3?(M.boundary=48,M.storage=48):b.isMatrix4?(M.boundary=64,M.storage=64):b.isTexture?st("WebGLRenderer: Texture samplers can not be part of an uniforms group."):st("WebGLRenderer: Unsupported uniform value type.",b),M}function g(b){const M=b.target;M.removeEventListener("dispose",g);const y=s.indexOf(M.__bindingPointIndex);s.splice(y,1),t.deleteBuffer(r[M.id]),delete r[M.id],delete o[M.id]}function p(){for(const b in r)t.deleteBuffer(r[b]);s=[],r={},o={}}return{bind:l,update:u,dispose:p}}const uC=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let oi=null;function cC(){return oi===null&&(oi=new iM(uC,16,16,cs,tr),oi.name="DFG_LUT",oi.minFilter=Rt,oi.magFilter=Rt,oi.wrapS=$i,oi.wrapT=$i,oi.generateMipmaps=!1,oi.needsUpdate=!0),oi}class dC{constructor(e={}){const{canvas:n=DS(),context:i=null,depth:r=!0,stencil:o=!1,alpha:s=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:f=!1,outputBufferType:h=_n}=e;this.isWebGLRenderer=!0;let m;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=i.getContextAttributes().alpha}else m=s;const v=h,g=new Set([Ih,Rh,Ch]),p=new Set([_n,xi,ca,da,Th,Ah]),b=new Uint32Array(4),M=new Int32Array(4);let y=null,I=null;const D=[],B=[];let _=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=gi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const x=this;let R=!1;this._outputColorSpace=On;let T=0,A=0,X=null,E=-1,k=null;const C=new zt,N=new zt;let U=null;const H=new Et(0);let G=0,ne=n.width,re=n.height,ye=1,we=null,te=null;const L=new zt(0,0,ne,re),j=new zt(0,0,ne,re);let Q=!1;const fe=new a_;let Se=!1,Ee=!1;const $=new Wt,W=new _e,F=new zt,O={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let z=!1;function Y(){return X===null?ye:1}let S=i;function Z(V,le){return n.getContext(V,le)}try{const V={alpha:!0,depth:r,stencil:o,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:c,failIfMajorPerformanceCaveat:d};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${wh}`),n.addEventListener("webglcontextlost",qe,!1),n.addEventListener("webglcontextrestored",ot,!1),n.addEventListener("webglcontextcreationerror",Lt,!1),S===null){const le="webgl2";if(S=Z(le,V),S===null)throw Z(le)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(V){throw _t("WebGLRenderer: "+V.message),V}let J,ee,ie,P,w,K,ae,ge,de,Ue,Ie,Ge,Ye,Pe,ue,se,Ae,De,Qe,oe,Le,Fe,Be;function Ne(){J=new dT(S),J.init(),Le=new tC(S,J),ee=new iT(S,J,e,Le),ie=new QA(S,J),ee.reversedDepthBuffer&&f&&ie.buffers.depth.setReversed(!0),P=new pT(S),w=new kA,K=new eC(S,J,ie,w,ee,Le,P),ae=new cT(x),ge=new yM(S),Fe=new tT(S,ge),de=new fT(S,ge,P,Fe),Ue=new gT(S,de,ge,Fe,P),De=new mT(S,ee,K),ue=new rT(w),Ie=new BA(x,ae,J,ee,Fe,ue),Ge=new aC(x,w),Ye=new VA,Pe=new YA(J),Ae=new eT(x,ae,ie,Ue,m,l),se=new JA(x,Ue,ee),Be=new lC(S,P,ee,ie),Qe=new nT(S,J,P),oe=new hT(S,J,P),P.programs=Ie.programs,x.capabilities=ee,x.extensions=J,x.properties=w,x.renderLists=Ye,x.shadowMap=se,x.state=ie,x.info=P}Ne(),v!==_n&&(_=new _T(v,n.width,n.height,r,o));const Me=new oC(x,S);this.xr=Me,this.getContext=function(){return S},this.getContextAttributes=function(){return S.getContextAttributes()},this.forceContextLoss=function(){const V=J.get("WEBGL_lose_context");V&&V.loseContext()},this.forceContextRestore=function(){const V=J.get("WEBGL_lose_context");V&&V.restoreContext()},this.getPixelRatio=function(){return ye},this.setPixelRatio=function(V){V!==void 0&&(ye=V,this.setSize(ne,re,!1))},this.getSize=function(V){return V.set(ne,re)},this.setSize=function(V,le,be=!0){if(Me.isPresenting){st("WebGLRenderer: Can't change size while VR device is presenting.");return}ne=V,re=le,n.width=Math.floor(V*ye),n.height=Math.floor(le*ye),be===!0&&(n.style.width=V+"px",n.style.height=le+"px"),_!==null&&_.setSize(n.width,n.height),this.setViewport(0,0,V,le)},this.getDrawingBufferSize=function(V){return V.set(ne*ye,re*ye).floor()},this.setDrawingBufferSize=function(V,le,be){ne=V,re=le,ye=be,n.width=Math.floor(V*be),n.height=Math.floor(le*be),this.setViewport(0,0,V,le)},this.setEffects=function(V){if(v===_n){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(V){for(let le=0;le<V.length;le++)if(V[le].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}_.setEffects(V||[])},this.getCurrentViewport=function(V){return V.copy(C)},this.getViewport=function(V){return V.copy(L)},this.setViewport=function(V,le,be,ve){V.isVector4?L.set(V.x,V.y,V.z,V.w):L.set(V,le,be,ve),ie.viewport(C.copy(L).multiplyScalar(ye).round())},this.getScissor=function(V){return V.copy(j)},this.setScissor=function(V,le,be,ve){V.isVector4?j.set(V.x,V.y,V.z,V.w):j.set(V,le,be,ve),ie.scissor(N.copy(j).multiplyScalar(ye).round())},this.getScissorTest=function(){return Q},this.setScissorTest=function(V){ie.setScissorTest(Q=V)},this.setOpaqueSort=function(V){we=V},this.setTransparentSort=function(V){te=V},this.getClearColor=function(V){return V.copy(Ae.getClearColor())},this.setClearColor=function(){Ae.setClearColor(...arguments)},this.getClearAlpha=function(){return Ae.getClearAlpha()},this.setClearAlpha=function(){Ae.setClearAlpha(...arguments)},this.clear=function(V=!0,le=!0,be=!0){let ve=0;if(V){let pe=!1;if(X!==null){const ze=X.texture.format;pe=g.has(ze)}if(pe){const ze=X.texture.type,We=p.has(ze),Ve=Ae.getClearColor(),Ke=Ae.getClearAlpha(),je=Ve.r,at=Ve.g,ft=Ve.b;We?(b[0]=je,b[1]=at,b[2]=ft,b[3]=Ke,S.clearBufferuiv(S.COLOR,0,b)):(M[0]=je,M[1]=at,M[2]=ft,M[3]=Ke,S.clearBufferiv(S.COLOR,0,M))}else ve|=S.COLOR_BUFFER_BIT}le&&(ve|=S.DEPTH_BUFFER_BIT),be&&(ve|=S.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ve!==0&&S.clear(ve)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",qe,!1),n.removeEventListener("webglcontextrestored",ot,!1),n.removeEventListener("webglcontextcreationerror",Lt,!1),Ae.dispose(),Ye.dispose(),Pe.dispose(),w.dispose(),ae.dispose(),Ue.dispose(),Fe.dispose(),Be.dispose(),Ie.dispose(),Me.dispose(),Me.removeEventListener("sessionstart",sp),Me.removeEventListener("sessionend",ap),Gr.stop()};function qe(V){V.preventDefault(),cm("WebGLRenderer: Context Lost."),R=!0}function ot(){cm("WebGLRenderer: Context Restored."),R=!1;const V=P.autoReset,le=se.enabled,be=se.autoUpdate,ve=se.needsUpdate,pe=se.type;Ne(),P.autoReset=V,se.enabled=le,se.autoUpdate=be,se.needsUpdate=ve,se.type=pe}function Lt(V){_t("WebGLRenderer: A WebGL context could not be created. Reason: ",V.statusMessage)}function St(V){const le=V.target;le.removeEventListener("dispose",St),Ei(le)}function Ei(V){Ti(V),w.remove(V)}function Ti(V){const le=w.get(V).programs;le!==void 0&&(le.forEach(function(be){Ie.releaseProgram(be)}),V.isShaderMaterial&&Ie.releaseShaderCache(V))}this.renderBufferDirect=function(V,le,be,ve,pe,ze){le===null&&(le=O);const We=pe.isMesh&&pe.matrixWorld.determinant()<0,Ve=cx(V,le,be,ve,pe);ie.setMaterial(ve,We);let Ke=be.index,je=1;if(ve.wireframe===!0){if(Ke=de.getWireframeAttribute(be),Ke===void 0)return;je=2}const at=be.drawRange,ft=be.attributes.position;let Je=at.start*je,At=(at.start+at.count)*je;ze!==null&&(Je=Math.max(Je,ze.start*je),At=Math.min(At,(ze.start+ze.count)*je)),Ke!==null?(Je=Math.max(Je,0),At=Math.min(At,Ke.count)):ft!=null&&(Je=Math.max(Je,0),At=Math.min(At,ft.count));const kt=At-Je;if(kt<0||kt===1/0)return;Fe.setup(pe,ve,Ve,be,Ke);let Bt,Ct=Qe;if(Ke!==null&&(Bt=ge.get(Ke),Ct=oe,Ct.setIndex(Bt)),pe.isMesh)ve.wireframe===!0?(ie.setLineWidth(ve.wireframeLinewidth*Y()),Ct.setMode(S.LINES)):Ct.setMode(S.TRIANGLES);else if(pe.isLine){let on=ve.linewidth;on===void 0&&(on=1),ie.setLineWidth(on*Y()),pe.isLineSegments?Ct.setMode(S.LINES):pe.isLineLoop?Ct.setMode(S.LINE_LOOP):Ct.setMode(S.LINE_STRIP)}else pe.isPoints?Ct.setMode(S.POINTS):pe.isSprite&&Ct.setMode(S.TRIANGLES);if(pe.isBatchedMesh)if(pe._multiDrawInstances!==null)du("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Ct.renderMultiDrawInstances(pe._multiDrawStarts,pe._multiDrawCounts,pe._multiDrawCount,pe._multiDrawInstances);else if(J.get("WEBGL_multi_draw"))Ct.renderMultiDraw(pe._multiDrawStarts,pe._multiDrawCounts,pe._multiDrawCount);else{const on=pe._multiDrawStarts,Ze=pe._multiDrawCounts,An=pe._multiDrawCount,vt=Ke?ge.get(Ke).bytesPerElement:1,zn=w.get(ve).currentProgram.getUniforms();for(let ni=0;ni<An;ni++)zn.setValue(S,"_gl_DrawID",ni),Ct.render(on[ni]/vt,Ze[ni])}else if(pe.isInstancedMesh)Ct.renderInstances(Je,kt,pe.count);else if(be.isInstancedBufferGeometry){const on=be._maxInstanceCount!==void 0?be._maxInstanceCount:1/0,Ze=Math.min(be.instanceCount,on);Ct.renderInstances(Je,kt,Ze)}else Ct.render(Je,kt)};function op(V,le,be){V.transparent===!0&&V.side===zi&&V.forceSinglePass===!1?(V.side=Tn,V.needsUpdate=!0,Va(V,le,be),V.side=Br,V.needsUpdate=!0,Va(V,le,be),V.side=zi):Va(V,le,be)}this.compile=function(V,le,be=null){be===null&&(be=V),I=Pe.get(be),I.init(le),B.push(I),be.traverseVisible(function(pe){pe.isLight&&pe.layers.test(le.layers)&&(I.pushLight(pe),pe.castShadow&&I.pushShadow(pe))}),V!==be&&V.traverseVisible(function(pe){pe.isLight&&pe.layers.test(le.layers)&&(I.pushLight(pe),pe.castShadow&&I.pushShadow(pe))}),I.setupLights();const ve=new Set;return V.traverse(function(pe){if(!(pe.isMesh||pe.isPoints||pe.isLine||pe.isSprite))return;const ze=pe.material;if(ze)if(Array.isArray(ze))for(let We=0;We<ze.length;We++){const Ve=ze[We];op(Ve,be,pe),ve.add(Ve)}else op(ze,be,pe),ve.add(ze)}),I=B.pop(),ve},this.compileAsync=function(V,le,be=null){const ve=this.compile(V,le,be);return new Promise(pe=>{function ze(){if(ve.forEach(function(We){w.get(We).currentProgram.isReady()&&ve.delete(We)}),ve.size===0){pe(V);return}setTimeout(ze,10)}J.get("KHR_parallel_shader_compile")!==null?ze():setTimeout(ze,10)})};let fc=null;function ux(V){fc&&fc(V)}function sp(){Gr.stop()}function ap(){Gr.start()}const Gr=new f_;Gr.setAnimationLoop(ux),typeof self<"u"&&Gr.setContext(self),this.setAnimationLoop=function(V){fc=V,Me.setAnimationLoop(V),V===null?Gr.stop():Gr.start()},Me.addEventListener("sessionstart",sp),Me.addEventListener("sessionend",ap),this.render=function(V,le){if(le!==void 0&&le.isCamera!==!0){_t("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;const be=Me.enabled===!0&&Me.isPresenting===!0,ve=_!==null&&(X===null||be)&&_.begin(x,X);if(V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),le.parent===null&&le.matrixWorldAutoUpdate===!0&&le.updateMatrixWorld(),Me.enabled===!0&&Me.isPresenting===!0&&(_===null||_.isCompositing()===!1)&&(Me.cameraAutoUpdate===!0&&Me.updateCamera(le),le=Me.getCamera()),V.isScene===!0&&V.onBeforeRender(x,V,le,X),I=Pe.get(V,B.length),I.init(le),B.push(I),$.multiplyMatrices(le.projectionMatrix,le.matrixWorldInverse),fe.setFromProjectionMatrix($,pi,le.reversedDepth),Ee=this.localClippingEnabled,Se=ue.init(this.clippingPlanes,Ee),y=Ye.get(V,D.length),y.init(),D.push(y),Me.enabled===!0&&Me.isPresenting===!0){const We=x.xr.getDepthSensingMesh();We!==null&&hc(We,le,-1/0,x.sortObjects)}hc(V,le,0,x.sortObjects),y.finish(),x.sortObjects===!0&&y.sort(we,te),z=Me.enabled===!1||Me.isPresenting===!1||Me.hasDepthSensing()===!1,z&&Ae.addToRenderList(y,V),this.info.render.frame++,Se===!0&&ue.beginShadows();const pe=I.state.shadowsArray;if(se.render(pe,V,le),Se===!0&&ue.endShadows(),this.info.autoReset===!0&&this.info.reset(),(ve&&_.hasRenderPass())===!1){const We=y.opaque,Ve=y.transmissive;if(I.setupLights(),le.isArrayCamera){const Ke=le.cameras;if(Ve.length>0)for(let je=0,at=Ke.length;je<at;je++){const ft=Ke[je];up(We,Ve,V,ft)}z&&Ae.render(V);for(let je=0,at=Ke.length;je<at;je++){const ft=Ke[je];lp(y,V,ft,ft.viewport)}}else Ve.length>0&&up(We,Ve,V,le),z&&Ae.render(V),lp(y,V,le)}X!==null&&A===0&&(K.updateMultisampleRenderTarget(X),K.updateRenderTargetMipmap(X)),ve&&_.end(x),V.isScene===!0&&V.onAfterRender(x,V,le),Fe.resetDefaultState(),E=-1,k=null,B.pop(),B.length>0?(I=B[B.length-1],Se===!0&&ue.setGlobalState(x.clippingPlanes,I.state.camera)):I=null,D.pop(),D.length>0?y=D[D.length-1]:y=null};function hc(V,le,be,ve){if(V.visible===!1)return;if(V.layers.test(le.layers)){if(V.isGroup)be=V.renderOrder;else if(V.isLOD)V.autoUpdate===!0&&V.update(le);else if(V.isLight)I.pushLight(V),V.castShadow&&I.pushShadow(V);else if(V.isSprite){if(!V.frustumCulled||fe.intersectsSprite(V)){ve&&F.setFromMatrixPosition(V.matrixWorld).applyMatrix4($);const We=Ue.update(V),Ve=V.material;Ve.visible&&y.push(V,We,Ve,be,F.z,null)}}else if((V.isMesh||V.isLine||V.isPoints)&&(!V.frustumCulled||fe.intersectsObject(V))){const We=Ue.update(V),Ve=V.material;if(ve&&(V.boundingSphere!==void 0?(V.boundingSphere===null&&V.computeBoundingSphere(),F.copy(V.boundingSphere.center)):(We.boundingSphere===null&&We.computeBoundingSphere(),F.copy(We.boundingSphere.center)),F.applyMatrix4(V.matrixWorld).applyMatrix4($)),Array.isArray(Ve)){const Ke=We.groups;for(let je=0,at=Ke.length;je<at;je++){const ft=Ke[je],Je=Ve[ft.materialIndex];Je&&Je.visible&&y.push(V,We,Je,be,F.z,ft)}}else Ve.visible&&y.push(V,We,Ve,be,F.z,null)}}const ze=V.children;for(let We=0,Ve=ze.length;We<Ve;We++)hc(ze[We],le,be,ve)}function lp(V,le,be,ve){const{opaque:pe,transmissive:ze,transparent:We}=V;I.setupLightsView(be),Se===!0&&ue.setGlobalState(x.clippingPlanes,be),ve&&ie.viewport(C.copy(ve)),pe.length>0&&za(pe,le,be),ze.length>0&&za(ze,le,be),We.length>0&&za(We,le,be),ie.buffers.depth.setTest(!0),ie.buffers.depth.setMask(!0),ie.buffers.color.setMask(!0),ie.setPolygonOffset(!1)}function up(V,le,be,ve){if((be.isScene===!0?be.overrideMaterial:null)!==null)return;if(I.state.transmissionRenderTarget[ve.id]===void 0){const Je=J.has("EXT_color_buffer_half_float")||J.has("EXT_color_buffer_float");I.state.transmissionRenderTarget[ve.id]=new Mn(1,1,{generateMipmaps:!0,type:Je?tr:_n,minFilter:co,samples:Math.max(4,ee.samples),stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:gt.workingColorSpace})}const ze=I.state.transmissionRenderTarget[ve.id],We=ve.viewport||C;ze.setSize(We.z*x.transmissionResolutionScale,We.w*x.transmissionResolutionScale);const Ve=x.getRenderTarget(),Ke=x.getActiveCubeFace(),je=x.getActiveMipmapLevel();x.setRenderTarget(ze),x.getClearColor(H),G=x.getClearAlpha(),G<1&&x.setClearColor(16777215,.5),x.clear(),z&&Ae.render(be);const at=x.toneMapping;x.toneMapping=gi;const ft=ve.viewport;if(ve.viewport!==void 0&&(ve.viewport=void 0),I.setupLightsView(ve),Se===!0&&ue.setGlobalState(x.clippingPlanes,ve),za(V,be,ve),K.updateMultisampleRenderTarget(ze),K.updateRenderTargetMipmap(ze),J.has("WEBGL_multisampled_render_to_texture")===!1){let Je=!1;for(let At=0,kt=le.length;At<kt;At++){const Bt=le[At],{object:Ct,geometry:on,material:Ze,group:An}=Bt;if(Ze.side===zi&&Ct.layers.test(ve.layers)){const vt=Ze.side;Ze.side=Tn,Ze.needsUpdate=!0,cp(Ct,be,ve,on,Ze,An),Ze.side=vt,Ze.needsUpdate=!0,Je=!0}}Je===!0&&(K.updateMultisampleRenderTarget(ze),K.updateRenderTargetMipmap(ze))}x.setRenderTarget(Ve,Ke,je),x.setClearColor(H,G),ft!==void 0&&(ve.viewport=ft),x.toneMapping=at}function za(V,le,be){const ve=le.isScene===!0?le.overrideMaterial:null;for(let pe=0,ze=V.length;pe<ze;pe++){const We=V[pe],{object:Ve,geometry:Ke,group:je}=We;let at=We.material;at.allowOverride===!0&&ve!==null&&(at=ve),Ve.layers.test(be.layers)&&cp(Ve,le,be,Ke,at,je)}}function cp(V,le,be,ve,pe,ze){V.onBeforeRender(x,le,be,ve,pe,ze),V.modelViewMatrix.multiplyMatrices(be.matrixWorldInverse,V.matrixWorld),V.normalMatrix.getNormalMatrix(V.modelViewMatrix),pe.onBeforeRender(x,le,be,ve,V,ze),pe.transparent===!0&&pe.side===zi&&pe.forceSinglePass===!1?(pe.side=Tn,pe.needsUpdate=!0,x.renderBufferDirect(be,le,ve,pe,V,ze),pe.side=Br,pe.needsUpdate=!0,x.renderBufferDirect(be,le,ve,pe,V,ze),pe.side=zi):x.renderBufferDirect(be,le,ve,pe,V,ze),V.onAfterRender(x,le,be,ve,pe,ze)}function Va(V,le,be){le.isScene!==!0&&(le=O);const ve=w.get(V),pe=I.state.lights,ze=I.state.shadowsArray,We=pe.state.version,Ve=Ie.getParameters(V,pe.state,ze,le,be),Ke=Ie.getProgramCacheKey(Ve);let je=ve.programs;ve.environment=V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial?le.environment:null,ve.fog=le.fog;const at=V.isMeshStandardMaterial||V.isMeshLambertMaterial&&!V.envMap||V.isMeshPhongMaterial&&!V.envMap;ve.envMap=ae.get(V.envMap||ve.environment,at),ve.envMapRotation=ve.environment!==null&&V.envMap===null?le.environmentRotation:V.envMapRotation,je===void 0&&(V.addEventListener("dispose",St),je=new Map,ve.programs=je);let ft=je.get(Ke);if(ft!==void 0){if(ve.currentProgram===ft&&ve.lightsStateVersion===We)return fp(V,Ve),ft}else Ve.uniforms=Ie.getUniforms(V),V.onBeforeCompile(Ve,x),ft=Ie.acquireProgram(Ve,Ke),je.set(Ke,ft),ve.uniforms=Ve.uniforms;const Je=ve.uniforms;return(!V.isShaderMaterial&&!V.isRawShaderMaterial||V.clipping===!0)&&(Je.clippingPlanes=ue.uniform),fp(V,Ve),ve.needsLights=fx(V),ve.lightsStateVersion=We,ve.needsLights&&(Je.ambientLightColor.value=pe.state.ambient,Je.lightProbe.value=pe.state.probe,Je.directionalLights.value=pe.state.directional,Je.directionalLightShadows.value=pe.state.directionalShadow,Je.spotLights.value=pe.state.spot,Je.spotLightShadows.value=pe.state.spotShadow,Je.rectAreaLights.value=pe.state.rectArea,Je.ltc_1.value=pe.state.rectAreaLTC1,Je.ltc_2.value=pe.state.rectAreaLTC2,Je.pointLights.value=pe.state.point,Je.pointLightShadows.value=pe.state.pointShadow,Je.hemisphereLights.value=pe.state.hemi,Je.directionalShadowMatrix.value=pe.state.directionalShadowMatrix,Je.spotLightMatrix.value=pe.state.spotLightMatrix,Je.spotLightMap.value=pe.state.spotLightMap,Je.pointShadowMatrix.value=pe.state.pointShadowMatrix),ve.currentProgram=ft,ve.uniformsList=null,ft}function dp(V){if(V.uniformsList===null){const le=V.currentProgram.getUniforms();V.uniformsList=zl.seqWithValue(le.seq,V.uniforms)}return V.uniformsList}function fp(V,le){const be=w.get(V);be.outputColorSpace=le.outputColorSpace,be.batching=le.batching,be.batchingColor=le.batchingColor,be.instancing=le.instancing,be.instancingColor=le.instancingColor,be.instancingMorph=le.instancingMorph,be.skinning=le.skinning,be.morphTargets=le.morphTargets,be.morphNormals=le.morphNormals,be.morphColors=le.morphColors,be.morphTargetsCount=le.morphTargetsCount,be.numClippingPlanes=le.numClippingPlanes,be.numIntersection=le.numClipIntersection,be.vertexAlphas=le.vertexAlphas,be.vertexTangents=le.vertexTangents,be.toneMapping=le.toneMapping}function cx(V,le,be,ve,pe){le.isScene!==!0&&(le=O),K.resetTextureUnits();const ze=le.fog,We=ve.isMeshStandardMaterial||ve.isMeshLambertMaterial||ve.isMeshPhongMaterial?le.environment:null,Ve=X===null?x.outputColorSpace:X.isXRRenderTarget===!0?X.texture.colorSpace:kr,Ke=ve.isMeshStandardMaterial||ve.isMeshLambertMaterial&&!ve.envMap||ve.isMeshPhongMaterial&&!ve.envMap,je=ae.get(ve.envMap||We,Ke),at=ve.vertexColors===!0&&!!be.attributes.color&&be.attributes.color.itemSize===4,ft=!!be.attributes.tangent&&(!!ve.normalMap||ve.anisotropy>0),Je=!!be.morphAttributes.position,At=!!be.morphAttributes.normal,kt=!!be.morphAttributes.color;let Bt=gi;ve.toneMapped&&(X===null||X.isXRRenderTarget===!0)&&(Bt=x.toneMapping);const Ct=be.morphAttributes.position||be.morphAttributes.normal||be.morphAttributes.color,on=Ct!==void 0?Ct.length:0,Ze=w.get(ve),An=I.state.lights;if(Se===!0&&(Ee===!0||V!==k)){const Zt=V===k&&ve.id===E;ue.setState(ve,V,Zt)}let vt=!1;ve.version===Ze.__version?(Ze.needsLights&&Ze.lightsStateVersion!==An.state.version||Ze.outputColorSpace!==Ve||pe.isBatchedMesh&&Ze.batching===!1||!pe.isBatchedMesh&&Ze.batching===!0||pe.isBatchedMesh&&Ze.batchingColor===!0&&pe.colorTexture===null||pe.isBatchedMesh&&Ze.batchingColor===!1&&pe.colorTexture!==null||pe.isInstancedMesh&&Ze.instancing===!1||!pe.isInstancedMesh&&Ze.instancing===!0||pe.isSkinnedMesh&&Ze.skinning===!1||!pe.isSkinnedMesh&&Ze.skinning===!0||pe.isInstancedMesh&&Ze.instancingColor===!0&&pe.instanceColor===null||pe.isInstancedMesh&&Ze.instancingColor===!1&&pe.instanceColor!==null||pe.isInstancedMesh&&Ze.instancingMorph===!0&&pe.morphTexture===null||pe.isInstancedMesh&&Ze.instancingMorph===!1&&pe.morphTexture!==null||Ze.envMap!==je||ve.fog===!0&&Ze.fog!==ze||Ze.numClippingPlanes!==void 0&&(Ze.numClippingPlanes!==ue.numPlanes||Ze.numIntersection!==ue.numIntersection)||Ze.vertexAlphas!==at||Ze.vertexTangents!==ft||Ze.morphTargets!==Je||Ze.morphNormals!==At||Ze.morphColors!==kt||Ze.toneMapping!==Bt||Ze.morphTargetsCount!==on)&&(vt=!0):(vt=!0,Ze.__version=ve.version);let zn=Ze.currentProgram;vt===!0&&(zn=Va(ve,le,pe));let ni=!1,Wr=!1,Co=!1;const It=zn.getUniforms(),Qt=Ze.uniforms;if(ie.useProgram(zn.program)&&(ni=!0,Wr=!0,Co=!0),ve.id!==E&&(E=ve.id,Wr=!0),ni||k!==V){ie.buffers.depth.getReversed()&&V.reversedDepth!==!0&&(V._reversedDepth=!0,V.updateProjectionMatrix()),It.setValue(S,"projectionMatrix",V.projectionMatrix),It.setValue(S,"viewMatrix",V.matrixWorldInverse);const dr=It.map.cameraPosition;dr!==void 0&&dr.setValue(S,W.setFromMatrixPosition(V.matrixWorld)),ee.logarithmicDepthBuffer&&It.setValue(S,"logDepthBufFC",2/(Math.log(V.far+1)/Math.LN2)),(ve.isMeshPhongMaterial||ve.isMeshToonMaterial||ve.isMeshLambertMaterial||ve.isMeshBasicMaterial||ve.isMeshStandardMaterial||ve.isShaderMaterial)&&It.setValue(S,"isOrthographic",V.isOrthographicCamera===!0),k!==V&&(k=V,Wr=!0,Co=!0)}if(Ze.needsLights&&(An.state.directionalShadowMap.length>0&&It.setValue(S,"directionalShadowMap",An.state.directionalShadowMap,K),An.state.spotShadowMap.length>0&&It.setValue(S,"spotShadowMap",An.state.spotShadowMap,K),An.state.pointShadowMap.length>0&&It.setValue(S,"pointShadowMap",An.state.pointShadowMap,K)),pe.isSkinnedMesh){It.setOptional(S,pe,"bindMatrix"),It.setOptional(S,pe,"bindMatrixInverse");const Zt=pe.skeleton;Zt&&(Zt.boneTexture===null&&Zt.computeBoneTexture(),It.setValue(S,"boneTexture",Zt.boneTexture,K))}pe.isBatchedMesh&&(It.setOptional(S,pe,"batchingTexture"),It.setValue(S,"batchingTexture",pe._matricesTexture,K),It.setOptional(S,pe,"batchingIdTexture"),It.setValue(S,"batchingIdTexture",pe._indirectTexture,K),It.setOptional(S,pe,"batchingColorTexture"),pe._colorsTexture!==null&&It.setValue(S,"batchingColorTexture",pe._colorsTexture,K));const cr=be.morphAttributes;if((cr.position!==void 0||cr.normal!==void 0||cr.color!==void 0)&&De.update(pe,be,zn),(Wr||Ze.receiveShadow!==pe.receiveShadow)&&(Ze.receiveShadow=pe.receiveShadow,It.setValue(S,"receiveShadow",pe.receiveShadow)),(ve.isMeshStandardMaterial||ve.isMeshLambertMaterial||ve.isMeshPhongMaterial)&&ve.envMap===null&&le.environment!==null&&(Qt.envMapIntensity.value=le.environmentIntensity),Qt.dfgLUT!==void 0&&(Qt.dfgLUT.value=cC()),Wr&&(It.setValue(S,"toneMappingExposure",x.toneMappingExposure),Ze.needsLights&&dx(Qt,Co),ze&&ve.fog===!0&&Ge.refreshFogUniforms(Qt,ze),Ge.refreshMaterialUniforms(Qt,ve,ye,re,I.state.transmissionRenderTarget[V.id]),zl.upload(S,dp(Ze),Qt,K)),ve.isShaderMaterial&&ve.uniformsNeedUpdate===!0&&(zl.upload(S,dp(Ze),Qt,K),ve.uniformsNeedUpdate=!1),ve.isSpriteMaterial&&It.setValue(S,"center",pe.center),It.setValue(S,"modelViewMatrix",pe.modelViewMatrix),It.setValue(S,"normalMatrix",pe.normalMatrix),It.setValue(S,"modelMatrix",pe.matrixWorld),ve.isShaderMaterial||ve.isRawShaderMaterial){const Zt=ve.uniformsGroups;for(let dr=0,Ro=Zt.length;dr<Ro;dr++){const hp=Zt[dr];Be.update(hp,zn),Be.bind(hp,zn)}}return zn}function dx(V,le){V.ambientLightColor.needsUpdate=le,V.lightProbe.needsUpdate=le,V.directionalLights.needsUpdate=le,V.directionalLightShadows.needsUpdate=le,V.pointLights.needsUpdate=le,V.pointLightShadows.needsUpdate=le,V.spotLights.needsUpdate=le,V.spotLightShadows.needsUpdate=le,V.rectAreaLights.needsUpdate=le,V.hemisphereLights.needsUpdate=le}function fx(V){return V.isMeshLambertMaterial||V.isMeshToonMaterial||V.isMeshPhongMaterial||V.isMeshStandardMaterial||V.isShadowMaterial||V.isShaderMaterial&&V.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return X},this.setRenderTargetTextures=function(V,le,be){const ve=w.get(V);ve.__autoAllocateDepthBuffer=V.resolveDepthBuffer===!1,ve.__autoAllocateDepthBuffer===!1&&(ve.__useRenderToTexture=!1),w.get(V.texture).__webglTexture=le,w.get(V.depthTexture).__webglTexture=ve.__autoAllocateDepthBuffer?void 0:be,ve.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(V,le){const be=w.get(V);be.__webglFramebuffer=le,be.__useDefaultFramebuffer=le===void 0};const hx=S.createFramebuffer();this.setRenderTarget=function(V,le=0,be=0){X=V,T=le,A=be;let ve=null,pe=!1,ze=!1;if(V){const Ve=w.get(V);if(Ve.__useDefaultFramebuffer!==void 0){ie.bindFramebuffer(S.FRAMEBUFFER,Ve.__webglFramebuffer),C.copy(V.viewport),N.copy(V.scissor),U=V.scissorTest,ie.viewport(C),ie.scissor(N),ie.setScissorTest(U),E=-1;return}else if(Ve.__webglFramebuffer===void 0)K.setupRenderTarget(V);else if(Ve.__hasExternalTextures)K.rebindTextures(V,w.get(V.texture).__webglTexture,w.get(V.depthTexture).__webglTexture);else if(V.depthBuffer){const at=V.depthTexture;if(Ve.__boundDepthTexture!==at){if(at!==null&&w.has(at)&&(V.width!==at.image.width||V.height!==at.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");K.setupDepthRenderbuffer(V)}}const Ke=V.texture;(Ke.isData3DTexture||Ke.isDataArrayTexture||Ke.isCompressedArrayTexture)&&(ze=!0);const je=w.get(V).__webglFramebuffer;V.isWebGLCubeRenderTarget?(Array.isArray(je[le])?ve=je[le][be]:ve=je[le],pe=!0):V.samples>0&&K.useMultisampledRTT(V)===!1?ve=w.get(V).__webglMultisampledFramebuffer:Array.isArray(je)?ve=je[be]:ve=je,C.copy(V.viewport),N.copy(V.scissor),U=V.scissorTest}else C.copy(L).multiplyScalar(ye).floor(),N.copy(j).multiplyScalar(ye).floor(),U=Q;if(be!==0&&(ve=hx),ie.bindFramebuffer(S.FRAMEBUFFER,ve)&&ie.drawBuffers(V,ve),ie.viewport(C),ie.scissor(N),ie.setScissorTest(U),pe){const Ve=w.get(V.texture);S.framebufferTexture2D(S.FRAMEBUFFER,S.COLOR_ATTACHMENT0,S.TEXTURE_CUBE_MAP_POSITIVE_X+le,Ve.__webglTexture,be)}else if(ze){const Ve=le;for(let Ke=0;Ke<V.textures.length;Ke++){const je=w.get(V.textures[Ke]);S.framebufferTextureLayer(S.FRAMEBUFFER,S.COLOR_ATTACHMENT0+Ke,je.__webglTexture,be,Ve)}}else if(V!==null&&be!==0){const Ve=w.get(V.texture);S.framebufferTexture2D(S.FRAMEBUFFER,S.COLOR_ATTACHMENT0,S.TEXTURE_2D,Ve.__webglTexture,be)}E=-1},this.readRenderTargetPixels=function(V,le,be,ve,pe,ze,We,Ve=0){if(!(V&&V.isWebGLRenderTarget)){_t("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ke=w.get(V).__webglFramebuffer;if(V.isWebGLCubeRenderTarget&&We!==void 0&&(Ke=Ke[We]),Ke){ie.bindFramebuffer(S.FRAMEBUFFER,Ke);try{const je=V.textures[Ve],at=je.format,ft=je.type;if(V.textures.length>1&&S.readBuffer(S.COLOR_ATTACHMENT0+Ve),!ee.textureFormatReadable(at)){_t("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ee.textureTypeReadable(ft)){_t("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}le>=0&&le<=V.width-ve&&be>=0&&be<=V.height-pe&&S.readPixels(le,be,ve,pe,Le.convert(at),Le.convert(ft),ze)}finally{const je=X!==null?w.get(X).__webglFramebuffer:null;ie.bindFramebuffer(S.FRAMEBUFFER,je)}}},this.readRenderTargetPixelsAsync=async function(V,le,be,ve,pe,ze,We,Ve=0){if(!(V&&V.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ke=w.get(V).__webglFramebuffer;if(V.isWebGLCubeRenderTarget&&We!==void 0&&(Ke=Ke[We]),Ke)if(le>=0&&le<=V.width-ve&&be>=0&&be<=V.height-pe){ie.bindFramebuffer(S.FRAMEBUFFER,Ke);const je=V.textures[Ve],at=je.format,ft=je.type;if(V.textures.length>1&&S.readBuffer(S.COLOR_ATTACHMENT0+Ve),!ee.textureFormatReadable(at))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ee.textureTypeReadable(ft))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Je=S.createBuffer();S.bindBuffer(S.PIXEL_PACK_BUFFER,Je),S.bufferData(S.PIXEL_PACK_BUFFER,ze.byteLength,S.STREAM_READ),S.readPixels(le,be,ve,pe,Le.convert(at),Le.convert(ft),0);const At=X!==null?w.get(X).__webglFramebuffer:null;ie.bindFramebuffer(S.FRAMEBUFFER,At);const kt=S.fenceSync(S.SYNC_GPU_COMMANDS_COMPLETE,0);return S.flush(),await LS(S,kt,4),S.bindBuffer(S.PIXEL_PACK_BUFFER,Je),S.getBufferSubData(S.PIXEL_PACK_BUFFER,0,ze),S.deleteBuffer(Je),S.deleteSync(kt),ze}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(V,le=null,be=0){const ve=Math.pow(2,-be),pe=Math.floor(V.image.width*ve),ze=Math.floor(V.image.height*ve),We=le!==null?le.x:0,Ve=le!==null?le.y:0;K.setTexture2D(V,0),S.copyTexSubImage2D(S.TEXTURE_2D,be,0,0,We,Ve,pe,ze),ie.unbindTexture()};const px=S.createFramebuffer(),mx=S.createFramebuffer();this.copyTextureToTexture=function(V,le,be=null,ve=null,pe=0,ze=0){let We,Ve,Ke,je,at,ft,Je,At,kt;const Bt=V.isCompressedTexture?V.mipmaps[ze]:V.image;if(be!==null)We=be.max.x-be.min.x,Ve=be.max.y-be.min.y,Ke=be.isBox3?be.max.z-be.min.z:1,je=be.min.x,at=be.min.y,ft=be.isBox3?be.min.z:0;else{const Qt=Math.pow(2,-pe);We=Math.floor(Bt.width*Qt),Ve=Math.floor(Bt.height*Qt),V.isDataArrayTexture?Ke=Bt.depth:V.isData3DTexture?Ke=Math.floor(Bt.depth*Qt):Ke=1,je=0,at=0,ft=0}ve!==null?(Je=ve.x,At=ve.y,kt=ve.z):(Je=0,At=0,kt=0);const Ct=Le.convert(le.format),on=Le.convert(le.type);let Ze;le.isData3DTexture?(K.setTexture3D(le,0),Ze=S.TEXTURE_3D):le.isDataArrayTexture||le.isCompressedArrayTexture?(K.setTexture2DArray(le,0),Ze=S.TEXTURE_2D_ARRAY):(K.setTexture2D(le,0),Ze=S.TEXTURE_2D),S.pixelStorei(S.UNPACK_FLIP_Y_WEBGL,le.flipY),S.pixelStorei(S.UNPACK_PREMULTIPLY_ALPHA_WEBGL,le.premultiplyAlpha),S.pixelStorei(S.UNPACK_ALIGNMENT,le.unpackAlignment);const An=S.getParameter(S.UNPACK_ROW_LENGTH),vt=S.getParameter(S.UNPACK_IMAGE_HEIGHT),zn=S.getParameter(S.UNPACK_SKIP_PIXELS),ni=S.getParameter(S.UNPACK_SKIP_ROWS),Wr=S.getParameter(S.UNPACK_SKIP_IMAGES);S.pixelStorei(S.UNPACK_ROW_LENGTH,Bt.width),S.pixelStorei(S.UNPACK_IMAGE_HEIGHT,Bt.height),S.pixelStorei(S.UNPACK_SKIP_PIXELS,je),S.pixelStorei(S.UNPACK_SKIP_ROWS,at),S.pixelStorei(S.UNPACK_SKIP_IMAGES,ft);const Co=V.isDataArrayTexture||V.isData3DTexture,It=le.isDataArrayTexture||le.isData3DTexture;if(V.isDepthTexture){const Qt=w.get(V),cr=w.get(le),Zt=w.get(Qt.__renderTarget),dr=w.get(cr.__renderTarget);ie.bindFramebuffer(S.READ_FRAMEBUFFER,Zt.__webglFramebuffer),ie.bindFramebuffer(S.DRAW_FRAMEBUFFER,dr.__webglFramebuffer);for(let Ro=0;Ro<Ke;Ro++)Co&&(S.framebufferTextureLayer(S.READ_FRAMEBUFFER,S.COLOR_ATTACHMENT0,w.get(V).__webglTexture,pe,ft+Ro),S.framebufferTextureLayer(S.DRAW_FRAMEBUFFER,S.COLOR_ATTACHMENT0,w.get(le).__webglTexture,ze,kt+Ro)),S.blitFramebuffer(je,at,We,Ve,Je,At,We,Ve,S.DEPTH_BUFFER_BIT,S.NEAREST);ie.bindFramebuffer(S.READ_FRAMEBUFFER,null),ie.bindFramebuffer(S.DRAW_FRAMEBUFFER,null)}else if(pe!==0||V.isRenderTargetTexture||w.has(V)){const Qt=w.get(V),cr=w.get(le);ie.bindFramebuffer(S.READ_FRAMEBUFFER,px),ie.bindFramebuffer(S.DRAW_FRAMEBUFFER,mx);for(let Zt=0;Zt<Ke;Zt++)Co?S.framebufferTextureLayer(S.READ_FRAMEBUFFER,S.COLOR_ATTACHMENT0,Qt.__webglTexture,pe,ft+Zt):S.framebufferTexture2D(S.READ_FRAMEBUFFER,S.COLOR_ATTACHMENT0,S.TEXTURE_2D,Qt.__webglTexture,pe),It?S.framebufferTextureLayer(S.DRAW_FRAMEBUFFER,S.COLOR_ATTACHMENT0,cr.__webglTexture,ze,kt+Zt):S.framebufferTexture2D(S.DRAW_FRAMEBUFFER,S.COLOR_ATTACHMENT0,S.TEXTURE_2D,cr.__webglTexture,ze),pe!==0?S.blitFramebuffer(je,at,We,Ve,Je,At,We,Ve,S.COLOR_BUFFER_BIT,S.NEAREST):It?S.copyTexSubImage3D(Ze,ze,Je,At,kt+Zt,je,at,We,Ve):S.copyTexSubImage2D(Ze,ze,Je,At,je,at,We,Ve);ie.bindFramebuffer(S.READ_FRAMEBUFFER,null),ie.bindFramebuffer(S.DRAW_FRAMEBUFFER,null)}else It?V.isDataTexture||V.isData3DTexture?S.texSubImage3D(Ze,ze,Je,At,kt,We,Ve,Ke,Ct,on,Bt.data):le.isCompressedArrayTexture?S.compressedTexSubImage3D(Ze,ze,Je,At,kt,We,Ve,Ke,Ct,Bt.data):S.texSubImage3D(Ze,ze,Je,At,kt,We,Ve,Ke,Ct,on,Bt):V.isDataTexture?S.texSubImage2D(S.TEXTURE_2D,ze,Je,At,We,Ve,Ct,on,Bt.data):V.isCompressedTexture?S.compressedTexSubImage2D(S.TEXTURE_2D,ze,Je,At,Bt.width,Bt.height,Ct,Bt.data):S.texSubImage2D(S.TEXTURE_2D,ze,Je,At,We,Ve,Ct,on,Bt);S.pixelStorei(S.UNPACK_ROW_LENGTH,An),S.pixelStorei(S.UNPACK_IMAGE_HEIGHT,vt),S.pixelStorei(S.UNPACK_SKIP_PIXELS,zn),S.pixelStorei(S.UNPACK_SKIP_ROWS,ni),S.pixelStorei(S.UNPACK_SKIP_IMAGES,Wr),ze===0&&le.generateMipmaps&&S.generateMipmap(Ze),ie.unbindTexture()},this.initRenderTarget=function(V){w.get(V).__webglFramebuffer===void 0&&K.setupRenderTarget(V)},this.initTexture=function(V){V.isCubeTexture?K.setTextureCube(V,0):V.isData3DTexture?K.setTexture3D(V,0):V.isDataArrayTexture||V.isCompressedArrayTexture?K.setTexture2DArray(V,0):K.setTexture2D(V,0),ie.unbindTexture()},this.resetState=function(){T=0,A=0,X=null,ie.reset(),Fe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return pi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=gt._getDrawingBufferColorSpace(e),n.unpackColorSpace=gt._getUnpackColorSpace()}}const fC=""+new URL("../mangleditor-icon.png",import.meta.url).href,ur=(t,e)=>{const n=t.__vccOpts||t;for(const[i,r]of e)n[i]=r;return n},hC={class:"top-bar"},pC=["value"],mC=["title"],gC={class:"top-bar__btn-label"},vC={key:0,class:"top-bar__slider-group top-bar__mobile-hide",title:"Workspace Darkness"},_C=["value"],yC={class:"top-bar__status"},xC={__name:"TopBar",props:{isRendering:{type:Boolean,default:!0},previewMode:{type:String,default:"panel"},projectTitle:{type:String,default:"Untitled Project"},bgOpacity:{type:Number,default:.4},showShadows:{type:Boolean,default:!0},isPerformanceMode:{type:Boolean,default:!1}},emits:["save","load","download","import","reset","toggleRender","togglePreview","updateTitle","updateBgOpacity","toggleShadows","openPopup","togglePerformance"],setup(t,{emit:e}){const n=e,i=Ce(null);function r(){i.value?.click()}function o(s){const a=s.target.files?.[0];if(!a)return;const l=new FileReader;l.onload=()=>{n("import",l.result)},l.readAsText(a),s.target.value=""}return(s,a)=>(ce(),me("div",hC,[a[15]||(a[15]=q("div",{class:"top-bar__logo-container"},[q("img",{src:fC,class:"top-bar__logo-icon",alt:"mangleditor"}),q("span",{class:"top-bar__logo-text"},"mangleditor"),q("span",{class:"top-bar__coded-by"},"coded with love and haste")],-1)),q("input",{class:"top-bar__title-input",type:"text",value:t.projectTitle,onInput:a[0]||(a[0]=l=>s.$emit("updateTitle",l.target.value)),onBlur:a[1]||(a[1]=l=>s.$emit("updateTitle",l.target.value)),placeholder:"Untitled Project",title:"Project title — used for save/export filenames"},null,40,pC),a[16]||(a[16]=q("div",{class:"top-bar__divider"},null,-1)),q("button",{class:"top-bar__btn top-bar__mobile-hide",onClick:a[2]||(a[2]=l=>s.$emit("save")),title:"Save to browser"}," 💾 Save "),q("button",{class:"top-bar__btn top-bar__mobile-hide",onClick:a[3]||(a[3]=l=>s.$emit("load")),title:"Load from browser storage"}," 📂 Load "),q("button",{class:"top-bar__btn top-bar__mobile-hide",onClick:a[4]||(a[4]=l=>s.$emit("download")),title:"Download graph as JSON"}," ⬇ Download "),q("button",{class:"top-bar__btn top-bar__mobile-hide",onClick:r,title:"Import graph JSON"}," ⬆ Import "),q("input",{ref_key:"importInput",ref:i,type:"file",accept:".json",class:"file-input-hidden",onChange:o},null,544),a[17]||(a[17]=q("div",{class:"top-bar__divider"},null,-1)),q("button",{class:"top-bar__btn top-bar__btn--danger",onClick:a[5]||(a[5]=l=>s.$emit("reset")),title:"Clear all nodes"},[...a[12]||(a[12]=[Yi(" 🗑 ",-1),q("span",{class:"top-bar__btn-label"},"Reset",-1)])]),a[18]||(a[18]=q("div",{class:"top-bar__divider"},null,-1)),q("button",{class:ut(["top-bar__btn",t.isRendering?"top-bar__btn--running":"top-bar__btn--stop"]),onClick:a[6]||(a[6]=l=>s.$emit("toggleRender")),title:t.isRendering?"Stop rendering":"Resume rendering"},[Yi(Te(t.isRendering?"⏸":"▶")+" ",1),q("span",gC,Te(t.isRendering?"Stop":"Resume"),1)],10,mC),q("button",{class:"top-bar__btn top-bar__mobile-hide",onClick:a[7]||(a[7]=l=>s.$emit("togglePreview")),title:"Toggle preview mode"},Te(t.previewMode==="anchored"?"🖥 Anchored":t.previewMode==="floating"?"🪟 Floating":"🌌 Background"),1),q("button",{class:"top-bar__btn top-bar__mobile-hide",onClick:a[8]||(a[8]=l=>s.$emit("openPopup")),title:"Open renderer in a separate pop-up window"}," ↗ Popout "),q("button",{class:ut(["top-bar__btn",{"top-bar__btn--active":t.isPerformanceMode}]),onClick:a[9]||(a[9]=l=>s.$emit("togglePerformance")),title:"Toggle Performance Mode (P)"},[...a[13]||(a[13]=[Yi(" ⚡ ",-1),q("span",{class:"top-bar__btn-label"},"Perf",-1)])],2),a[19]||(a[19]=q("div",{class:"top-bar__divider top-bar__mobile-hide"},null,-1)),q("button",{class:ut(["top-bar__btn top-bar__mobile-hide",{"top-bar__btn--active":t.showShadows}]),onClick:a[10]||(a[10]=l=>s.$emit("toggleShadows")),title:"Toggle CSS drop shadows on nodes and cables"}," ☁ Shadows ",2),t.previewMode==="background"?(ce(),me("div",vC,[a[14]||(a[14]=q("span",{class:"top-bar__slider-label"},"Dim",-1)),q("input",{type:"range",min:"0",max:"1",step:"0.05",class:"top-bar__range",value:t.bgOpacity,onInput:a[11]||(a[11]=l=>s.$emit("updateBgOpacity",parseFloat(l.target.value)))},null,40,_C)])):He("",!0),q("div",yC,[q("div",{class:ut(["top-bar__status-dot",{"top-bar__status-dot--stopped":!t.isRendering}])},null,2),q("span",null,Te(t.isRendering?"RENDERING":"STOPPED"),1)])]))}},bC=ur(xC,[["__scopeId","data-v-129d70e7"]]),xe={IMAGE:"image",FLOAT:"float",INT:"int",VEC2:"vec2",BOOL:"bool",TRIGGER:"trigger"},SC={[xe.IMAGE]:"#00d4ff",[xe.FLOAT]:"#ff9a2e",[xe.INT]:"#ffe14d",[xe.VEC2]:"#ff6eb4",[xe.BOOL]:"#ff4444",[xe.TRIGGER]:"#ffffff"},MC={[xe.IMAGE]:[xe.IMAGE],[xe.FLOAT]:[xe.FLOAT],[xe.INT]:[xe.INT,xe.FLOAT],[xe.VEC2]:[xe.VEC2],[xe.BOOL]:[xe.BOOL],[xe.TRIGGER]:[xe.TRIGGER]};function wC(t,e){const n=MC[t];return n?n.includes(e):!1}function ad(t){return SC[t]||"#888888"}const Uh={imageInput:{type:"imageInput",label:"Image Input",category:"image",inputs:[],outputs:[{id:"out",label:"Image",type:xe.IMAGE}],params:{},shaderKey:null},uiImageSlot:{type:"uiImageSlot",label:"UI Image Slot",category:"image",inputs:[],outputs:[{id:"out",label:"Image",type:xe.IMAGE}],params:{},shaderKey:null},webcamInput:{type:"webcamInput",label:"Webcam",category:"image",inputs:[{id:"trigger",label:"Enable/Trigger",type:xe.FLOAT,optional:!0}],outputs:[{id:"out",label:"Image",type:xe.IMAGE}],params:{enable:{type:"bool",ui:"button",default:!1,label:"Enable Webcam"}},shaderKey:null},imageOutput:{type:"imageOutput",label:"Image Output",category:"image",inputs:[{id:"in",label:"Image",type:xe.IMAGE}],outputs:[],params:{format:{type:"select",default:"png",options:["png","tiff","bmp"],label:"Format"},filename:{type:"string",default:"output",label:"Filename"}},shaderKey:null},pixelSort:{type:"pixelSort",label:"Pixel Sort",category:"image",inputs:[{id:"in",label:"Image",type:xe.IMAGE}],outputs:[{id:"out",label:"Image",type:xe.IMAGE}],params:{direction:{type:"select",default:"horizontal",options:["horizontal","vertical"],label:"Direction"},sortBy:{type:"select",default:"brightness",options:["brightness","hue","saturation"],label:"Sort By"},threshold:{type:"float",default:.5,min:0,max:1,step:.01,label:"Threshold"},upperThreshold:{type:"float",default:.8,min:0,max:1,step:.01,label:"Upper Threshold"},reverse:{type:"bool",default:!1,label:"Reverse"},blendAmount:{type:"float",default:1,min:0,max:1,step:.01,label:"Mix / Blend"}},shaderKey:"pixelSort"},reededGlass:{type:"reededGlass",label:"Reeded Glass",category:"image",inputs:[{id:"in",label:"Image",type:xe.IMAGE},{id:"texture",label:"Texture",type:xe.IMAGE,optional:!0}],outputs:[{id:"out",label:"Image",type:xe.IMAGE}],params:{scale:{type:"float",default:20,min:1,max:200,step:.5,label:"Scale"},intensity:{type:"float",default:.05,min:0,max:.5,step:.001,label:"Intensity"},angle:{type:"float",default:0,min:0,max:360,step:1,label:"Angle"},blur:{type:"float",default:.5,min:0,max:5,step:.1,label:"Blur"},blendAmount:{type:"float",default:1,min:0,max:1,step:.01,label:"Mix / Blend"}},shaderKey:"reededGlass"},chromaticAberration:{type:"chromaticAberration",label:"Chromatic Aberration",category:"image",inputs:[{id:"in",label:"Image",type:xe.IMAGE}],outputs:[{id:"out",label:"Image",type:xe.IMAGE}],params:{intensity:{type:"float",default:5,min:0,max:50,step:.5,label:"Intensity"},direction:{type:"select",default:"radial",options:["radial","horizontal","vertical"],label:"Direction"},centerX:{type:"float",default:.5,min:0,max:1,step:.01,label:"Center X"},centerY:{type:"float",default:.5,min:0,max:1,step:.01,label:"Center Y"},blendAmount:{type:"float",default:1,min:0,max:1,step:.01,label:"Mix / Blend"}},shaderKey:"chromaticAberration"},displacement:{type:"displacement",label:"Heightmap Displacement",category:"image",inputs:[{id:"in",label:"Image",type:xe.IMAGE},{id:"heightmap",label:"Heightmap",type:xe.IMAGE}],outputs:[{id:"out",label:"Image",type:xe.IMAGE}],params:{strength:{type:"float",default:.05,min:0,max:.5,step:.001,label:"Strength"},channel:{type:"select",default:"luminance",options:["luminance","r","g","b"],label:"Channel"},blendAmount:{type:"float",default:1,min:0,max:1,step:.01,label:"Mix / Blend"}},shaderKey:"displacement"},levels:{type:"levels",label:"Levels",category:"image",inputs:[{id:"in",label:"Image",type:xe.IMAGE},{id:"inputBlack",label:"In Black",type:xe.INT,optional:!0},{id:"inputWhite",label:"In White",type:xe.INT,optional:!0},{id:"gamma",label:"Gamma",type:xe.FLOAT,optional:!0}],outputs:[{id:"out",label:"Image",type:xe.IMAGE}],params:{inputBlack:{type:"int",default:0,min:0,max:255,step:1,label:"Input Black"},inputWhite:{type:"int",default:255,min:0,max:255,step:1,label:"Input White"},gamma:{type:"float",default:1,min:.1,max:10,step:.01,label:"Gamma"},outputBlack:{type:"int",default:0,min:0,max:255,step:1,label:"Output Black"},outputWhite:{type:"int",default:255,min:0,max:255,step:1,label:"Output White"},channel:{type:"select",default:"master",options:["master","r","g","b"],label:"Channel"},blendAmount:{type:"float",default:1,min:0,max:1,step:.01,label:"Mix / Blend"}},shaderKey:"levels"},surfaceBlur:{type:"surfaceBlur",label:"Surface Blur",category:"image",inputs:[{id:"in",label:"Image",type:xe.IMAGE}],outputs:[{id:"out",label:"Image",type:xe.IMAGE}],params:{radius:{type:"int",default:5,min:1,max:20,step:1,label:"Radius"},threshold:{type:"float",default:.1,min:0,max:1,step:.01,label:"Threshold"},blendAmount:{type:"float",default:1,min:0,max:1,step:.01,label:"Mix / Blend"}},shaderKey:"surfaceBlur"},feedbackLoop:{type:"feedbackLoop",label:"Feedback Loop",category:"image",inputs:[{id:"in",label:"Image",type:xe.IMAGE}],outputs:[{id:"out",label:"Image",type:xe.IMAGE}],params:{decay:{type:"float",default:.9,min:0,max:1,step:.01,label:"Decay"},iterations:{type:"int",default:1,min:1,max:100,step:1,label:"Iterations"},blendMode:{type:"select",default:"normal",options:["normal","add","multiply"],label:"Blend Mode"}},shaderKey:"feedback"},blend:{type:"blend",label:"Blend",category:"image",inputs:[{id:"base",label:"Base",type:xe.IMAGE},{id:"overlay",label:"Overlay",type:xe.IMAGE}],outputs:[{id:"out",label:"Image",type:xe.IMAGE}],params:{mode:{type:"select",default:"normal",options:["normal","multiply","screen","overlay","softLight","hardLight","difference","exclusion","add","subtract"],label:"Mode"},opacity:{type:"float",default:1,min:0,max:1,step:.01,label:"Opacity"}},shaderKey:"blend"},diffusion:{type:"diffusion",label:"Diffusion Reaction",category:"image",inputs:[{id:"in",label:"Init State",type:xe.IMAGE}],outputs:[{id:"out",label:"Image",type:xe.IMAGE}],params:{dA:{type:"float",default:1,min:0,max:2,step:.01,label:"Diff A"},dB:{type:"float",default:.5,min:0,max:2,step:.01,label:"Diff B"},feed:{type:"float",default:.055,min:0,max:.1,step:.001,label:"Feed Rate"},kill:{type:"float",default:.062,min:0,max:.1,step:.001,label:"Kill Rate"},dt:{type:"float",default:1,min:0,max:2,step:.01,label:"Delta Time"}},shaderKey:"diffusion"},xerox:{type:"xerox",label:"Xerox Photocopy",category:"image",inputs:[{id:"in",label:"Image",type:xe.IMAGE}],outputs:[{id:"out",label:"Image",type:xe.IMAGE}],params:{threshold:{type:"float",default:.5,min:0,max:1,step:.01,label:"Threshold"},noiseAmount:{type:"float",default:.1,min:0,max:1,step:.01,label:"Noise"},contrast:{type:"float",default:2,min:0,max:5,step:.1,label:"Contrast"},blendAmount:{type:"float",default:1,min:0,max:1,step:.01,label:"Mix / Blend"}},shaderKey:"xerox"},liquidDeform:{type:"liquidDeform",label:"Liquid Deform",category:"uv",inputs:[{id:"in",label:"Image",type:xe.IMAGE}],outputs:[{id:"out",label:"Image",type:xe.IMAGE}],params:{scale:{type:"float",default:1,min:.1,max:10,step:.01,label:"Zoom/Scale"},intensity:{type:"float",default:1,min:0,max:5,step:.01,label:"Swirl Int."},speed:{type:"float",default:1,min:0,max:5,step:.01,label:"Swirl Spd"},samples:{type:"float",default:20,min:1,max:20,step:1,label:"Samples"},gammaLift:{type:"float",default:1,min:.1,max:5,step:.01,label:"GammaLift"},blendAmount:{type:"float",default:1,min:0,max:1,step:.01,label:"Mix/Blend"}},shaderKey:"liquidDeform"},noiseContours:{type:"noiseContours",label:"Noise Contours",category:"image",inputs:[{id:"in",label:"Image",type:xe.IMAGE},{id:"texture",label:"Overlay Tex",type:xe.IMAGE,optional:!0}],outputs:[{id:"out",label:"Image",type:xe.IMAGE}],params:{speed:{type:"float",default:1,min:0,max:5,step:.01,label:"Speed"},scale:{type:"float",default:1,min:.1,max:4,step:.01,label:"Scale"},palNum:{type:"float",default:9,min:2,max:20,step:1,label:"Contour Bands"},edgeStrength:{type:"float",default:5,min:0,max:20,step:.1,label:"Edge Strength"},highlight:{type:"float",default:10,min:0,max:30,step:.1,label:"Highlight"},hueShift:{type:"float",default:-.25,min:-3.14,max:3.14,step:.01,label:"Hue Shift"},hueRadius:{type:"float",default:.4,min:0,max:2,step:.01,label:"Hue Radius"},imageBlend:{type:"float",default:0,min:0,max:1,step:.01,label:"Image Color"},taper:{type:"float",default:1,min:0,max:3,step:.01,label:"Taper"},blendAmount:{type:"float",default:1,min:0,max:1,step:.01,label:"Blend"}},shaderKey:"noiseContours"},fisheye:{type:"fisheye",label:"Fisheye",category:"image",inputs:[{id:"in",label:"Image",type:xe.IMAGE}],outputs:[{id:"out",label:"Image",type:xe.IMAGE}],params:{power:{type:"float",default:1,min:-3,max:3,step:.01,label:"Power"},centerX:{type:"float",default:.5,min:.1,max:.9,step:.01,label:"Center X"},centerY:{type:"float",default:.5,min:.1,max:.9,step:.01,label:"Center Y"},zoom:{type:"float",default:1,min:.1,max:4,step:.01,label:"Zoom"},blendAmount:{type:"float",default:1,min:0,max:1,step:.01,label:"Blend"}},shaderKey:"fisheye"},crt:{type:"crt",label:"CRT Display",category:"image",inputs:[{id:"in",label:"Image",type:xe.IMAGE}],outputs:[{id:"out",label:"Image",type:xe.IMAGE}],params:{curvature:{type:"float",default:.5,min:0,max:1,step:.01,label:"Curvature"},scanLines:{type:"float",default:.5,min:0,max:1,step:.01,label:"Scanlines"},rgbShift:{type:"float",default:.2,min:0,max:1,step:.01,label:"RGB Shift"},brightness:{type:"float",default:1.2,min:0,max:3,step:.1,label:"Brightness"},blendAmount:{type:"float",default:1,min:0,max:1,step:.01,label:"Mix / Blend"}},shaderKey:"crt"},ascii:{type:"ascii",label:"ASCII Art",category:"image",inputs:[{id:"in",label:"Image",type:xe.IMAGE},{id:"texture",label:"Overlay Tex",type:xe.IMAGE,optional:!0}],outputs:[{id:"out",label:"Image",type:xe.IMAGE}],params:{cellSize:{type:"float",default:12,min:4,max:48,step:1,label:"Cell Size"},brightness:{type:"float",default:0,min:-1,max:1,step:.01,label:"Threshold Shift"},colorMode:{type:"float",default:0,min:0,max:1,step:1,label:"Color Mode (Orig/Flat)"},fgColor:{type:"color",default:"#00ff66",label:"FG Color"},bgColor:{type:"color",default:"#000000",label:"BG Color"},intensity:{type:"float",default:1,min:0,max:1,step:.01,label:"Effect Mix"},blendAmount:{type:"float",default:1,min:0,max:1,step:.01,label:"Mix / Blend"}},shaderKey:"ascii"},asciiV2:{type:"asciiV2",label:"ASCII v2",category:"image",inputs:[{id:"in",label:"Image",type:xe.IMAGE},{id:"texture",label:"Overlay Tex",type:xe.IMAGE,optional:!0}],outputs:[{id:"out",label:"Image",type:xe.IMAGE}],params:{cellSize:{type:"float",default:12,min:4,max:64,step:1,label:"Cell Size"},brightness:{type:"float",default:0,min:-.5,max:.5,step:.01,label:"Brightness"},colorMode:{type:"select",default:"Palette",options:["Palette","Original","Flat"],label:"Color Mode"},fgColor:{type:"color",default:"#00ff66",label:"FG Color"},bgColor:{type:"color",default:"#000000",label:"BG Color"},extendedPalette:{type:"bool",default:!1,label:"Extended Chars"},intensity:{type:"float",default:1,min:0,max:1,step:.01,label:"Intensity"},blendAmount:{type:"float",default:1,min:0,max:1,step:.01,label:"Blend"}},shaderKey:"asciiV2"},motionBlur:{type:"motionBlur",label:"Motion Blur",category:"image",inputs:[{id:"in",label:"Image",type:xe.IMAGE}],outputs:[{id:"out",label:"Image",type:xe.IMAGE}],params:{angle:{type:"float",default:0,min:0,max:3.1415,step:.01,label:"Angle (rad)"},strength:{type:"float",default:5,min:0,max:50,step:.1,label:"Strength"},samples:{type:"int",default:15,min:1,max:50,step:1,label:"Samples"},blendAmount:{type:"float",default:1,min:0,max:1,step:.01,label:"Mix / Blend"}},shaderKey:"motionBlur"},dithering:{type:"dithering",label:"Dithering (4x4)",category:"image",inputs:[{id:"in",label:"Image",type:xe.IMAGE}],outputs:[{id:"out",label:"Image",type:xe.IMAGE}],params:{colors:{type:"float",default:2,min:1,max:32,step:1,label:"Colors"},spread:{type:"float",default:.5,min:0,max:2,step:.01,label:"Spread"},blendAmount:{type:"float",default:1,min:0,max:1,step:.01,label:"Mix / Blend"}},shaderKey:"dithering"},lfo:{type:"lfo",label:"LFO",category:"animation",compact:!0,inlineParams:["waveform","frequency","amplitude"],inputs:[],outputs:[{id:"out",label:"Value",type:xe.FLOAT}],params:{waveform:{type:"select",default:"sine",options:["sine","saw","square","triangle"],label:"Waveform"},frequency:{type:"float",default:1,min:.01,max:60,step:.01,label:"Frequency (Hz)"},amplitude:{type:"float",default:1,min:0,max:100,step:.01,label:"Amplitude"},offset:{type:"float",default:0,min:-100,max:100,step:.01,label:"Offset"},phase:{type:"float",default:0,min:0,max:360,step:1,label:"Phase (°)"}},shaderKey:null,isAnimated:!0},timer:{type:"timer",label:"Timer",category:"animation",inputs:[{id:"reset",label:"Reset",type:xe.TRIGGER,optional:!0}],outputs:[{id:"out",label:"Time",type:xe.FLOAT}],params:{speed:{type:"float",default:1,min:.01,max:10,step:.01,label:"Speed"},loop:{type:"bool",default:!1,label:"Loop"},loopDuration:{type:"float",default:5,min:.1,max:300,step:.1,label:"Loop Duration (s)"}},shaderKey:null,isAnimated:!0},random:{type:"random",label:"Random",category:"animation",inputs:[{id:"trigger",label:"Trigger",type:xe.TRIGGER,optional:!0}],outputs:[{id:"out",label:"Value",type:xe.FLOAT}],params:{min:{type:"float",default:0,min:-1e3,max:1e3,step:.01,label:"Min"},max:{type:"float",default:1,min:-1e3,max:1e3,step:.01,label:"Max"},triggerInterval:{type:"float",default:.5,min:.01,max:30,step:.01,label:"Self-Trigger (s)"},damping:{type:"float",default:0,min:0,max:.999,step:.001,label:"Damping"},seed:{type:"int",default:42,min:0,max:99999,step:1,label:"Seed"}},shaderKey:null,isAnimated:!0},damper:{type:"damper",label:"Damper",category:"animation",inputs:[{id:"target",label:"Target",type:xe.FLOAT}],outputs:[{id:"out",label:"Value",type:xe.FLOAT}],params:{smoothing:{type:"float",default:.9,min:0,max:.999,step:.001,label:"Smoothing"}},shaderKey:null,isAnimated:!0},fft:{type:"fft",label:"Audio FFT",category:"animation",compact:!0,inputs:[],outputs:[{id:"bass",label:"Bass",type:xe.FLOAT},{id:"lowMid",label:"Low Mid",type:xe.FLOAT},{id:"mid",label:"Mid",type:xe.FLOAT},{id:"high",label:"High",type:xe.FLOAT}],params:{smoothing:{type:"float",default:.8,min:0,max:.99,step:.01,label:"Smoothing"},gain:{type:"float",default:1,min:0,max:10,step:.1,label:"Gain"}},shaderKey:null,isAnimated:!0},button:{type:"button",label:"Button",category:"trigger",inputs:[],outputs:[{id:"out",label:"Trigger",type:xe.TRIGGER}],params:{label:{type:"string",default:"Press",label:"Label"}},shaderKey:null},slider:{type:"slider",label:"Slider",category:"trigger",inputs:[],outputs:[{id:"out",label:"Value",type:xe.FLOAT}],params:{value:{type:"float",default:.5,min:0,max:1,step:.01,label:"Value"},min:{type:"float",default:0,min:-1e4,max:1e4,step:.01,label:"Min"},max:{type:"float",default:1,min:-1e4,max:1e4,step:.01,label:"Max"},step:{type:"float",default:.01,min:.001,max:100,step:.001,label:"Step"},outputType:{type:"select",default:"float",options:["float","int"],label:"Output Type"}},shaderKey:null},knob:{type:"knob",label:"Knob",category:"trigger",compact:!0,inputs:[],outputs:[{id:"out",label:"Value",type:xe.FLOAT}],params:{value:{type:"float",default:.5,min:0,max:1,step:.01,label:"Value"},min:{type:"float",default:0,min:-1e4,max:1e4,step:.01,label:"Min"},max:{type:"float",default:1,min:-1e4,max:1e4,step:.01,label:"Max"},step:{type:"float",default:.01,min:.001,max:100,step:.001,label:"Step"}},shaderKey:null},onStart:{type:"onStart",label:"On Start (Init)",category:"logic",inputs:[],outputs:[{id:"out",label:"Trigger",type:xe.FLOAT}],params:{}},bang:{type:"bang",label:"Bang",category:"trigger",compact:!0,inputs:[],outputs:[{id:"out",label:"Trigger",type:xe.FLOAT}],params:{label:{type:"string",default:"Bang!",label:"Label"}},shaderKey:null},toggle:{type:"toggle",label:"Toggle (Bool)",category:"trigger",compact:!0,inputs:[],outputs:[{id:"out",label:"State",type:xe.BOOL}],params:{state:{type:"bool",default:!1,label:"State"}},shaderKey:null},edgeTrigger:{type:"edgeTrigger",label:"Edge -> Bang",category:"trigger",compact:!0,inputs:[{id:"in",label:"Bool",type:xe.BOOL}],outputs:[{id:"out",label:"Trigger",type:xe.TRIGGER}],params:{mode:{type:"select",default:"rising",options:["rising","falling","both"],label:"Edge"}},shaderKey:null},changeTrigger:{type:"changeTrigger",label:"Change -> Bang",category:"trigger",compact:!0,inputs:[{id:"in",label:"Value",type:xe.FLOAT}],outputs:[{id:"out",label:"Trigger",type:xe.TRIGGER}],params:{threshold:{type:"float",default:.1,min:.001,max:100,step:.001,label:"Threshold"}},shaderKey:null},compare:{type:"compare",label:"Compare",category:"math",inputs:[{id:"a",label:"A",type:xe.FLOAT},{id:"b",label:"B",type:xe.FLOAT}],outputs:[{id:"out",label:"Bool",type:xe.BOOL}],params:{op:{type:"select",default:">",options:[">","<",">=","<=","==","!="],label:"Operator"}},shaderKey:null},valueCondition:{type:"valueCondition",label:"If / Else",category:"math",inputs:[{id:"cond",label:"Condition",type:xe.BOOL},{id:"trueVal",label:"True",type:xe.FLOAT,optional:!0},{id:"falseVal",label:"False",type:xe.FLOAT,optional:!0}],outputs:[{id:"out",label:"Result",type:xe.FLOAT}],params:{defaultTrue:{type:"float",default:1,min:-1e3,max:1e3,step:.01,label:"Def True"},defaultFalse:{type:"float",default:0,min:-1e3,max:1e3,step:.01,label:"Def False"}},shaderKey:null},mathAdd:{type:"mathAdd",label:"Add",category:"math",inputs:[{id:"a",label:"A",type:xe.FLOAT},{id:"b",label:"B",type:xe.FLOAT}],outputs:[{id:"out",label:"Result",type:xe.FLOAT}],params:{},shaderKey:null},mathMultiply:{type:"mathMultiply",label:"Multiply",category:"math",inputs:[{id:"a",label:"A",type:xe.FLOAT},{id:"b",label:"B",type:xe.FLOAT}],outputs:[{id:"out",label:"Result",type:xe.FLOAT}],params:{},shaderKey:null},mathDivide:{type:"mathDivide",label:"Divide",category:"math",inputs:[{id:"a",label:"A",type:xe.FLOAT},{id:"b",label:"B",type:xe.FLOAT}],outputs:[{id:"out",label:"Result",type:xe.FLOAT}],params:{},shaderKey:null},mathSqrt:{type:"mathSqrt",label:"Sqrt",category:"math",inputs:[{id:"a",label:"Value",type:xe.FLOAT}],outputs:[{id:"out",label:"Result",type:xe.FLOAT}],params:{},shaderKey:null},mathMap:{type:"mathMap",label:"Map",category:"math",inputs:[{id:"value",label:"Value",type:xe.FLOAT}],outputs:[{id:"out",label:"Result",type:xe.FLOAT}],params:{inMin:{type:"float",default:0,min:-1e4,max:1e4,step:.01,label:"In Min"},inMax:{type:"float",default:1,min:-1e4,max:1e4,step:.01,label:"In Max"},outMin:{type:"float",default:0,min:-1e4,max:1e4,step:.01,label:"Out Min"},outMax:{type:"float",default:1,min:-1e4,max:1e4,step:.01,label:"Out Max"}},shaderKey:null},mathClamp:{type:"mathClamp",label:"Clamp",category:"math",inputs:[{id:"value",label:"Value",type:xe.FLOAT}],outputs:[{id:"out",label:"Result",type:xe.FLOAT}],params:{min:{type:"float",default:0,min:-1e4,max:1e4,step:.01,label:"Min"},max:{type:"float",default:1,min:-1e4,max:1e4,step:.01,label:"Max"}},shaderKey:null},mathWrap:{type:"mathWrap",label:"Wrap",category:"math",inputs:[{id:"value",label:"Value",type:xe.FLOAT}],outputs:[{id:"out",label:"Result",type:xe.FLOAT}],params:{min:{type:"float",default:0,min:-1e4,max:1e4,step:.01,label:"Min"},max:{type:"float",default:1,min:-1e4,max:1e4,step:.01,label:"Max"}},shaderKey:null},floatToInt:{type:"floatToInt",label:"Float → Int",category:"math",compact:!0,inputs:[{id:"in",label:"Float",type:xe.FLOAT}],outputs:[{id:"out",label:"Int",type:xe.INT}],params:{mode:{type:"select",default:"round",options:["round","floor","ceil","truncate"],label:"Mode"},clampMin:{type:"int",default:-2147483648,min:-2147483648,max:2147483647,step:1,label:"Clamp Min"},clampMax:{type:"int",default:2147483647,min:-2147483648,max:2147483647,step:1,label:"Clamp Max"}},shaderKey:null},intToFloat:{type:"intToFloat",label:"Int → Float",category:"math",inputs:[{id:"in",label:"Int",type:xe.INT}],outputs:[{id:"out",label:"Float",type:xe.FLOAT}],params:{},shaderKey:null},uvGenerator:{type:"uvGenerator",label:"UV Generator",category:"uv",inputs:[],outputs:[{id:"out",label:"UV",type:xe.IMAGE}],params:{},shaderKey:"uvGenerator"},uvTransform:{type:"uvTransform",label:"UV Transform",category:"uv",inputs:[{id:"in",label:"Image",type:xe.IMAGE}],outputs:[{id:"out",label:"Image",type:xe.IMAGE}],params:{scaleX:{type:"float",default:1,min:.01,max:10,step:.01,label:"Scale X"},scaleY:{type:"float",default:1,min:.01,max:10,step:.01,label:"Scale Y"},rotation:{type:"float",default:0,min:0,max:360,step:1,label:"Rotation (°)"},translateX:{type:"float",default:0,min:-2,max:2,step:.01,label:"Translate X"},translateY:{type:"float",default:0,min:-2,max:2,step:.01,label:"Translate Y"}},shaderKey:"uvTransform"},uvRepeat:{type:"uvRepeat",label:"UV Repeat",category:"uv",inputs:[{id:"in",label:"Image",type:xe.IMAGE}],outputs:[{id:"out",label:"Image",type:xe.IMAGE}],params:{repeatX:{type:"float",default:2,min:.1,max:50,step:.1,label:"Repeat X"},repeatY:{type:"float",default:2,min:.1,max:50,step:.1,label:"Repeat Y"},mirror:{type:"bool",default:!1,label:"Mirror"},offsetX:{type:"float",default:0,min:0,max:1,step:.01,label:"Offset X"},offsetY:{type:"float",default:0,min:0,max:1,step:.01,label:"Offset Y"}},shaderKey:"uvRepeat"},uvGlitch:{type:"uvGlitch",label:"UV Glitch",category:"uv",inputs:[{id:"in",label:"Image",type:xe.IMAGE}],outputs:[{id:"out",label:"Image",type:xe.IMAGE}],params:{blockSize:{type:"int",default:8,min:1,max:128,step:1,label:"Block Size"},intensity:{type:"float",default:.1,min:0,max:1,step:.01,label:"Intensity"},seed:{type:"float",default:0,min:0,max:1e3,step:.1,label:"Seed"},direction:{type:"select",default:"horizontal",options:["horizontal","vertical","both"],label:"Direction"}},shaderKey:"uvGlitch"},uvPolar:{type:"uvPolar",label:"UV Polar",category:"uv",inputs:[{id:"in",label:"Image",type:xe.IMAGE}],outputs:[{id:"out",label:"Image",type:xe.IMAGE}],params:{mode:{type:"select",default:"toPolar",options:["toPolar","fromPolar"],label:"Mode"},centerX:{type:"float",default:.5,min:0,max:1,step:.01,label:"Center X"},centerY:{type:"float",default:.5,min:0,max:1,step:.01,label:"Center Y"}},shaderKey:"uvPolar"},numberMonitor:{type:"numberMonitor",label:"Number Monitor",category:"utility",inputs:[{id:"in",label:"Value",type:xe.FLOAT}],outputs:[{id:"out",label:"Value",type:xe.FLOAT}],params:{decimals:{type:"int",default:3,min:0,max:10,step:1,label:"Decimals"},showGraph:{type:"bool",default:!0,label:"Show Graph"}},shaderKey:null,isPassthrough:!0},preview:{type:"preview",label:"Preview",category:"utility",inputs:[{id:"in",label:"Image",type:xe.IMAGE}],outputs:[{id:"out",label:"Image",type:xe.IMAGE}],params:{},shaderKey:"passthrough",isPassthrough:!0},accelerometer:{type:"accelerometer",label:"Accelerometer",category:"trigger",compact:!0,inputs:[],outputs:[{id:"x",label:"X",type:xe.FLOAT},{id:"y",label:"Y",type:xe.FLOAT},{id:"z",label:"Z",type:xe.FLOAT}],params:{sensitivity:{type:"float",default:1,min:.01,max:10,step:.01,label:"Sensitivity"},smoothing:{type:"float",default:.5,min:0,max:.99,step:.01,label:"Smoothing"}},shaderKey:null,isAnimated:!0},xyPad:{type:"xyPad",label:"XY Pad",category:"trigger",inputs:[],outputs:[{id:"x",label:"X",type:xe.FLOAT},{id:"y",label:"Y",type:xe.FLOAT}],params:{x:{type:"float",default:.5,min:0,max:1,step:.001,label:"X"},y:{type:"float",default:.5,min:0,max:1,step:.001,label:"Y"},minX:{type:"float",default:0,min:-1e3,max:1e3,step:.01,label:"Min X"},maxX:{type:"float",default:1,min:-1e3,max:1e3,step:.01,label:"Max X"},minY:{type:"float",default:0,min:-1e3,max:1e3,step:.01,label:"Min Y"},maxY:{type:"float",default:1,min:-1e3,max:1e3,step:.01,label:"Max Y"}},shaderKey:null}},fu={image:{label:"Image",icon:"🖼️",color:"#00d4ff"},animation:{label:"Animation",icon:"⏱️",color:"#9b59b6"},trigger:{label:"Controls",icon:"🎛️",color:"#2ecc71"},logic:{label:"Logic",icon:"🧠",color:"#f39c12"},math:{label:"Math",icon:"🔢",color:"#ff9a2e"},uv:{label:"UV / Texture",icon:"🌀",color:"#ff6eb4"},utility:{label:"Utility",icon:"🔍",color:"#a0a0b0"}};function en(t){return Uh[t]||null}function EC(){return{...Uh}}function TC(t){return Object.values(Uh).filter(e=>e.category===t)}const AC={class:"node-palette__collapse-btn"},CC=["onClick"],RC={class:"node-palette__category-icon"},IC={class:"node-palette__category-label"},PC={style:{"font-size":"10px",color:"var(--text-muted)"}},NC=["onDragstart","onClick"],DC={__name:"NodePalette",emits:["addNode"],setup(t,{emit:e}){const n=fu,i=Ce(!1),r=Fr(Object.fromEntries(Object.keys(fu).map(l=>[l,!0])));function o(l){r[l]=!r[l]}function s(l){return TC(l)}function a(l,u){l.dataTransfer.setData("application/node-type",u),l.dataTransfer.effectAllowed="move"}return(l,u)=>(ce(),me("div",{class:ut(["node-palette",{"node-palette--collapsed":i.value}])},[q("div",{class:"node-palette__header",onClick:u[0]||(u[0]=c=>i.value=!i.value),title:"Toggle node library"},[Nr(q("span",null,"Node Library",512),[[Dr,!i.value]]),q("span",AC,Te(i.value?"›":"‹"),1)]),i.value?He("",!0):(ce(!0),me(it,{key:0},Ht(he(n),(c,d)=>(ce(),me("div",{key:d,class:"node-palette__category"},[q("div",{class:"node-palette__category-header",onClick:f=>o(d)},[q("span",RC,Te(c.icon),1),q("span",IC,Te(c.label),1),q("span",PC,Te(r[d]?"▾":"▸"),1)],8,CC),r[d]?(ce(!0),me(it,{key:0},Ht(s(d),f=>(ce(),me("div",{key:f.type,class:"node-palette__item",draggable:"true",onDragstart:h=>a(h,f.type),onClick:h=>l.$emit("addNode",f.type)},[q("div",{class:"node-palette__item-dot",style:rt({background:c.color})},null,4),Yi(" "+Te(f.label),1)],40,NC))),128)):He("",!0)]))),128))],2))}};function ha(t){return Uu()?(Ws(t),!0):!1}function Vi(t){return typeof t=="function"?t():he(t)}const LC=typeof window<"u"&&typeof document<"u",FC=t=>typeof t<"u",UC=Object.prototype.toString,OC=t=>UC.call(t)==="[object Object]",BC=()=>{};function kC(t,e){function n(...i){return new Promise((r,o)=>{Promise.resolve(t(()=>e.apply(this,i),{fn:e,thisArg:this,args:i})).then(r).catch(o)})}return n}const __=t=>t();function zC(t=__){const e=Ce(!0);function n(){e.value=!1}function i(){e.value=!0}return{isActive:Ql(e),pause:n,resume:i,eventFilter:(...o)=>{e.value&&t(...o)}}}function jm(t,e=!1,n="Timeout"){return new Promise((i,r)=>{setTimeout(e?()=>r(n):i,t)})}function VC(t,e,n={}){const{eventFilter:i=__,...r}=n;return lt(t,kC(i,e),r)}function Xo(t,e,n={}){const{eventFilter:i,...r}=n,{eventFilter:o,pause:s,resume:a,isActive:l}=zC(i);return{stop:VC(t,e,{...r,eventFilter:o}),pause:s,resume:a,isActive:l}}function $C(t,e={}){if(!Ut(t))return Uv(t);const n=Array.isArray(t.value)?Array.from({length:t.value.length}):{};for(const i in t.value)n[i]=Qx(()=>({get(){return t.value[i]},set(r){var o;if((o=Vi(e.replaceRef))!=null?o:!0)if(Array.isArray(t.value)){const a=[...t.value];a[i]=r,t.value=a}else{const a={...t.value,[i]:r};Object.setPrototypeOf(a,Object.getPrototypeOf(t.value)),t.value=a}else t.value[i]=r}}));return n}function Nf(t,e=!1){function n(d,{flush:f="sync",deep:h=!1,timeout:m,throwOnTimeout:v}={}){let g=null;const b=[new Promise(M=>{g=lt(t,y=>{d(y)!==e&&(g?.(),M(y))},{flush:f,deep:h,immediate:!0})})];return m!=null&&b.push(jm(m,v).then(()=>Vi(t)).finally(()=>g?.())),Promise.race(b)}function i(d,f){if(!Ut(d))return n(y=>y===d,f);const{flush:h="sync",deep:m=!1,timeout:v,throwOnTimeout:g}=f??{};let p=null;const M=[new Promise(y=>{p=lt([t,d],([I,D])=>{e!==(I===D)&&(p?.(),y(I))},{flush:h,deep:m,immediate:!0})})];return v!=null&&M.push(jm(v,g).then(()=>Vi(t)).finally(()=>(p?.(),Vi(t)))),Promise.race(M)}function r(d){return n(f=>!!f,d)}function o(d){return i(null,d)}function s(d){return i(void 0,d)}function a(d){return n(Number.isNaN,d)}function l(d,f){return n(h=>{const m=Array.from(h);return m.includes(d)||m.includes(Vi(d))},f)}function u(d){return c(1,d)}function c(d=1,f){let h=-1;return n(()=>(h+=1,h>=d),f)}return Array.isArray(Vi(t))?{toMatch:n,toContains:l,changed:u,changedTimes:c,get not(){return Nf(t,!e)}}:{toMatch:n,toBe:i,toBeTruthy:r,toBeNull:o,toBeNaN:a,toBeUndefined:s,changed:u,changedTimes:c,get not(){return Nf(t,!e)}}}function Df(t){return Nf(t)}function HC(t){var e;const n=Vi(t);return(e=n?.$el)!=null?e:n}const y_=LC?window:void 0;function x_(...t){let e,n,i,r;if(typeof t[0]=="string"||Array.isArray(t[0])?([n,i,r]=t,e=y_):[e,n,i,r]=t,!e)return BC;Array.isArray(n)||(n=[n]),Array.isArray(i)||(i=[i]);const o=[],s=()=>{o.forEach(c=>c()),o.length=0},a=(c,d,f,h)=>(c.addEventListener(d,f,h),()=>c.removeEventListener(d,f,h)),l=lt(()=>[HC(e),Vi(r)],([c,d])=>{if(s(),!c)return;const f=OC(d)?{...d}:d;o.push(...n.flatMap(h=>i.map(m=>a(c,h,m,f))))},{immediate:!0,flush:"post"}),u=()=>{l(),s()};return ha(u),u}function GC(t){return typeof t=="function"?t:typeof t=="string"?e=>e.key===t:Array.isArray(t)?e=>t.includes(e.key):()=>!0}function Jm(...t){let e,n,i={};t.length===3?(e=t[0],n=t[1],i=t[2]):t.length===2?typeof t[1]=="object"?(e=!0,n=t[0],i=t[1]):(e=t[0],n=t[1]):(e=!0,n=t[0]);const{target:r=y_,eventName:o="keydown",passive:s=!1,dedupe:a=!1}=i,l=GC(e);return x_(r,o,c=>{c.repeat&&Vi(a)||l(c)&&n(c)},s)}function WC(t){return JSON.parse(JSON.stringify(t))}function ld(t,e,n,i={}){var r,o,s;const{clone:a=!1,passive:l=!1,eventName:u,deep:c=!1,defaultValue:d,shouldEmit:f}=i,h=Si(),m=n||h?.emit||((r=h?.$emit)==null?void 0:r.bind(h))||((s=(o=h?.proxy)==null?void 0:o.$emit)==null?void 0:s.bind(h?.proxy));let v=u;e||(e="modelValue"),v=v||`update:${e.toString()}`;const g=M=>a?typeof a=="function"?a(M):WC(M):M,p=()=>FC(t[e])?g(t[e]):d,b=M=>{f?f(M)&&m(v,M):m(v,M)};if(l){const M=p(),y=Ce(M);let I=!1;return lt(()=>t[e],D=>{I||(I=!0,y.value=g(D),pn(()=>I=!1))}),lt(y,D=>{!I&&(D!==t[e]||c)&&b(D)},{deep:c}),y}else return Re({get(){return p()},set(M){b(M)}})}var XC={value:()=>{}};function Ju(){for(var t=0,e=arguments.length,n={},i;t<e;++t){if(!(i=arguments[t]+"")||i in n||/[\s.]/.test(i))throw new Error("illegal type: "+i);n[i]=[]}return new Vl(n)}function Vl(t){this._=t}function YC(t,e){return t.trim().split(/^|\s+/).map(function(n){var i="",r=n.indexOf(".");if(r>=0&&(i=n.slice(r+1),n=n.slice(0,r)),n&&!e.hasOwnProperty(n))throw new Error("unknown type: "+n);return{type:n,name:i}})}Vl.prototype=Ju.prototype={constructor:Vl,on:function(t,e){var n=this._,i=YC(t+"",n),r,o=-1,s=i.length;if(arguments.length<2){for(;++o<s;)if((r=(t=i[o]).type)&&(r=qC(n[r],t.name)))return r;return}if(e!=null&&typeof e!="function")throw new Error("invalid callback: "+e);for(;++o<s;)if(r=(t=i[o]).type)n[r]=Qm(n[r],t.name,e);else if(e==null)for(r in n)n[r]=Qm(n[r],t.name,null);return this},copy:function(){var t={},e=this._;for(var n in e)t[n]=e[n].slice();return new Vl(t)},call:function(t,e){if((r=arguments.length-2)>0)for(var n=new Array(r),i=0,r,o;i<r;++i)n[i]=arguments[i+2];if(!this._.hasOwnProperty(t))throw new Error("unknown type: "+t);for(o=this._[t],i=0,r=o.length;i<r;++i)o[i].value.apply(e,n)},apply:function(t,e,n){if(!this._.hasOwnProperty(t))throw new Error("unknown type: "+t);for(var i=this._[t],r=0,o=i.length;r<o;++r)i[r].value.apply(e,n)}};function qC(t,e){for(var n=0,i=t.length,r;n<i;++n)if((r=t[n]).name===e)return r.value}function Qm(t,e,n){for(var i=0,r=t.length;i<r;++i)if(t[i].name===e){t[i]=XC,t=t.slice(0,i).concat(t.slice(i+1));break}return n!=null&&t.push({name:e,value:n}),t}var Lf="http://www.w3.org/1999/xhtml";const eg={svg:"http://www.w3.org/2000/svg",xhtml:Lf,xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"};function Qu(t){var e=t+="",n=e.indexOf(":");return n>=0&&(e=t.slice(0,n))!=="xmlns"&&(t=t.slice(n+1)),eg.hasOwnProperty(e)?{space:eg[e],local:t}:t}function KC(t){return function(){var e=this.ownerDocument,n=this.namespaceURI;return n===Lf&&e.documentElement.namespaceURI===Lf?e.createElement(t):e.createElementNS(n,t)}}function ZC(t){return function(){return this.ownerDocument.createElementNS(t.space,t.local)}}function b_(t){var e=Qu(t);return(e.local?ZC:KC)(e)}function jC(){}function Oh(t){return t==null?jC:function(){return this.querySelector(t)}}function JC(t){typeof t!="function"&&(t=Oh(t));for(var e=this._groups,n=e.length,i=new Array(n),r=0;r<n;++r)for(var o=e[r],s=o.length,a=i[r]=new Array(s),l,u,c=0;c<s;++c)(l=o[c])&&(u=t.call(l,l.__data__,c,o))&&("__data__"in l&&(u.__data__=l.__data__),a[c]=u);return new Dn(i,this._parents)}function QC(t){return t==null?[]:Array.isArray(t)?t:Array.from(t)}function e2(){return[]}function S_(t){return t==null?e2:function(){return this.querySelectorAll(t)}}function t2(t){return function(){return QC(t.apply(this,arguments))}}function n2(t){typeof t=="function"?t=t2(t):t=S_(t);for(var e=this._groups,n=e.length,i=[],r=[],o=0;o<n;++o)for(var s=e[o],a=s.length,l,u=0;u<a;++u)(l=s[u])&&(i.push(t.call(l,l.__data__,u,s)),r.push(l));return new Dn(i,r)}function M_(t){return function(){return this.matches(t)}}function w_(t){return function(e){return e.matches(t)}}var i2=Array.prototype.find;function r2(t){return function(){return i2.call(this.children,t)}}function o2(){return this.firstElementChild}function s2(t){return this.select(t==null?o2:r2(typeof t=="function"?t:w_(t)))}var a2=Array.prototype.filter;function l2(){return Array.from(this.children)}function u2(t){return function(){return a2.call(this.children,t)}}function c2(t){return this.selectAll(t==null?l2:u2(typeof t=="function"?t:w_(t)))}function d2(t){typeof t!="function"&&(t=M_(t));for(var e=this._groups,n=e.length,i=new Array(n),r=0;r<n;++r)for(var o=e[r],s=o.length,a=i[r]=[],l,u=0;u<s;++u)(l=o[u])&&t.call(l,l.__data__,u,o)&&a.push(l);return new Dn(i,this._parents)}function E_(t){return new Array(t.length)}function f2(){return new Dn(this._enter||this._groups.map(E_),this._parents)}function hu(t,e){this.ownerDocument=t.ownerDocument,this.namespaceURI=t.namespaceURI,this._next=null,this._parent=t,this.__data__=e}hu.prototype={constructor:hu,appendChild:function(t){return this._parent.insertBefore(t,this._next)},insertBefore:function(t,e){return this._parent.insertBefore(t,e)},querySelector:function(t){return this._parent.querySelector(t)},querySelectorAll:function(t){return this._parent.querySelectorAll(t)}};function h2(t){return function(){return t}}function p2(t,e,n,i,r,o){for(var s=0,a,l=e.length,u=o.length;s<u;++s)(a=e[s])?(a.__data__=o[s],i[s]=a):n[s]=new hu(t,o[s]);for(;s<l;++s)(a=e[s])&&(r[s]=a)}function m2(t,e,n,i,r,o,s){var a,l,u=new Map,c=e.length,d=o.length,f=new Array(c),h;for(a=0;a<c;++a)(l=e[a])&&(f[a]=h=s.call(l,l.__data__,a,e)+"",u.has(h)?r[a]=l:u.set(h,l));for(a=0;a<d;++a)h=s.call(t,o[a],a,o)+"",(l=u.get(h))?(i[a]=l,l.__data__=o[a],u.delete(h)):n[a]=new hu(t,o[a]);for(a=0;a<c;++a)(l=e[a])&&u.get(f[a])===l&&(r[a]=l)}function g2(t){return t.__data__}function v2(t,e){if(!arguments.length)return Array.from(this,g2);var n=e?m2:p2,i=this._parents,r=this._groups;typeof t!="function"&&(t=h2(t));for(var o=r.length,s=new Array(o),a=new Array(o),l=new Array(o),u=0;u<o;++u){var c=i[u],d=r[u],f=d.length,h=_2(t.call(c,c&&c.__data__,u,i)),m=h.length,v=a[u]=new Array(m),g=s[u]=new Array(m),p=l[u]=new Array(f);n(c,d,v,g,p,h,e);for(var b=0,M=0,y,I;b<m;++b)if(y=v[b]){for(b>=M&&(M=b+1);!(I=g[M])&&++M<m;);y._next=I||null}}return s=new Dn(s,i),s._enter=a,s._exit=l,s}function _2(t){return typeof t=="object"&&"length"in t?t:Array.from(t)}function y2(){return new Dn(this._exit||this._groups.map(E_),this._parents)}function x2(t,e,n){var i=this.enter(),r=this,o=this.exit();return typeof t=="function"?(i=t(i),i&&(i=i.selection())):i=i.append(t+""),e!=null&&(r=e(r),r&&(r=r.selection())),n==null?o.remove():n(o),i&&r?i.merge(r).order():r}function b2(t){for(var e=t.selection?t.selection():t,n=this._groups,i=e._groups,r=n.length,o=i.length,s=Math.min(r,o),a=new Array(r),l=0;l<s;++l)for(var u=n[l],c=i[l],d=u.length,f=a[l]=new Array(d),h,m=0;m<d;++m)(h=u[m]||c[m])&&(f[m]=h);for(;l<r;++l)a[l]=n[l];return new Dn(a,this._parents)}function S2(){for(var t=this._groups,e=-1,n=t.length;++e<n;)for(var i=t[e],r=i.length-1,o=i[r],s;--r>=0;)(s=i[r])&&(o&&s.compareDocumentPosition(o)^4&&o.parentNode.insertBefore(s,o),o=s);return this}function M2(t){t||(t=w2);function e(d,f){return d&&f?t(d.__data__,f.__data__):!d-!f}for(var n=this._groups,i=n.length,r=new Array(i),o=0;o<i;++o){for(var s=n[o],a=s.length,l=r[o]=new Array(a),u,c=0;c<a;++c)(u=s[c])&&(l[c]=u);l.sort(e)}return new Dn(r,this._parents).order()}function w2(t,e){return t<e?-1:t>e?1:t>=e?0:NaN}function E2(){var t=arguments[0];return arguments[0]=this,t.apply(null,arguments),this}function T2(){return Array.from(this)}function A2(){for(var t=this._groups,e=0,n=t.length;e<n;++e)for(var i=t[e],r=0,o=i.length;r<o;++r){var s=i[r];if(s)return s}return null}function C2(){let t=0;for(const e of this)++t;return t}function R2(){return!this.node()}function I2(t){for(var e=this._groups,n=0,i=e.length;n<i;++n)for(var r=e[n],o=0,s=r.length,a;o<s;++o)(a=r[o])&&t.call(a,a.__data__,o,r);return this}function P2(t){return function(){this.removeAttribute(t)}}function N2(t){return function(){this.removeAttributeNS(t.space,t.local)}}function D2(t,e){return function(){this.setAttribute(t,e)}}function L2(t,e){return function(){this.setAttributeNS(t.space,t.local,e)}}function F2(t,e){return function(){var n=e.apply(this,arguments);n==null?this.removeAttribute(t):this.setAttribute(t,n)}}function U2(t,e){return function(){var n=e.apply(this,arguments);n==null?this.removeAttributeNS(t.space,t.local):this.setAttributeNS(t.space,t.local,n)}}function O2(t,e){var n=Qu(t);if(arguments.length<2){var i=this.node();return n.local?i.getAttributeNS(n.space,n.local):i.getAttribute(n)}return this.each((e==null?n.local?N2:P2:typeof e=="function"?n.local?U2:F2:n.local?L2:D2)(n,e))}function T_(t){return t.ownerDocument&&t.ownerDocument.defaultView||t.document&&t||t.defaultView}function B2(t){return function(){this.style.removeProperty(t)}}function k2(t,e,n){return function(){this.style.setProperty(t,e,n)}}function z2(t,e,n){return function(){var i=e.apply(this,arguments);i==null?this.style.removeProperty(t):this.style.setProperty(t,i,n)}}function V2(t,e,n){return arguments.length>1?this.each((e==null?B2:typeof e=="function"?z2:k2)(t,e,n??"")):fs(this.node(),t)}function fs(t,e){return t.style.getPropertyValue(e)||T_(t).getComputedStyle(t,null).getPropertyValue(e)}function $2(t){return function(){delete this[t]}}function H2(t,e){return function(){this[t]=e}}function G2(t,e){return function(){var n=e.apply(this,arguments);n==null?delete this[t]:this[t]=n}}function W2(t,e){return arguments.length>1?this.each((e==null?$2:typeof e=="function"?G2:H2)(t,e)):this.node()[t]}function A_(t){return t.trim().split(/^|\s+/)}function Bh(t){return t.classList||new C_(t)}function C_(t){this._node=t,this._names=A_(t.getAttribute("class")||"")}C_.prototype={add:function(t){var e=this._names.indexOf(t);e<0&&(this._names.push(t),this._node.setAttribute("class",this._names.join(" ")))},remove:function(t){var e=this._names.indexOf(t);e>=0&&(this._names.splice(e,1),this._node.setAttribute("class",this._names.join(" ")))},contains:function(t){return this._names.indexOf(t)>=0}};function R_(t,e){for(var n=Bh(t),i=-1,r=e.length;++i<r;)n.add(e[i])}function I_(t,e){for(var n=Bh(t),i=-1,r=e.length;++i<r;)n.remove(e[i])}function X2(t){return function(){R_(this,t)}}function Y2(t){return function(){I_(this,t)}}function q2(t,e){return function(){(e.apply(this,arguments)?R_:I_)(this,t)}}function K2(t,e){var n=A_(t+"");if(arguments.length<2){for(var i=Bh(this.node()),r=-1,o=n.length;++r<o;)if(!i.contains(n[r]))return!1;return!0}return this.each((typeof e=="function"?q2:e?X2:Y2)(n,e))}function Z2(){this.textContent=""}function j2(t){return function(){this.textContent=t}}function J2(t){return function(){var e=t.apply(this,arguments);this.textContent=e??""}}function Q2(t){return arguments.length?this.each(t==null?Z2:(typeof t=="function"?J2:j2)(t)):this.node().textContent}function eR(){this.innerHTML=""}function tR(t){return function(){this.innerHTML=t}}function nR(t){return function(){var e=t.apply(this,arguments);this.innerHTML=e??""}}function iR(t){return arguments.length?this.each(t==null?eR:(typeof t=="function"?nR:tR)(t)):this.node().innerHTML}function rR(){this.nextSibling&&this.parentNode.appendChild(this)}function oR(){return this.each(rR)}function sR(){this.previousSibling&&this.parentNode.insertBefore(this,this.parentNode.firstChild)}function aR(){return this.each(sR)}function lR(t){var e=typeof t=="function"?t:b_(t);return this.select(function(){return this.appendChild(e.apply(this,arguments))})}function uR(){return null}function cR(t,e){var n=typeof t=="function"?t:b_(t),i=e==null?uR:typeof e=="function"?e:Oh(e);return this.select(function(){return this.insertBefore(n.apply(this,arguments),i.apply(this,arguments)||null)})}function dR(){var t=this.parentNode;t&&t.removeChild(this)}function fR(){return this.each(dR)}function hR(){var t=this.cloneNode(!1),e=this.parentNode;return e?e.insertBefore(t,this.nextSibling):t}function pR(){var t=this.cloneNode(!0),e=this.parentNode;return e?e.insertBefore(t,this.nextSibling):t}function mR(t){return this.select(t?pR:hR)}function gR(t){return arguments.length?this.property("__data__",t):this.node().__data__}function vR(t){return function(e){t.call(this,e,this.__data__)}}function _R(t){return t.trim().split(/^|\s+/).map(function(e){var n="",i=e.indexOf(".");return i>=0&&(n=e.slice(i+1),e=e.slice(0,i)),{type:e,name:n}})}function yR(t){return function(){var e=this.__on;if(e){for(var n=0,i=-1,r=e.length,o;n<r;++n)o=e[n],(!t.type||o.type===t.type)&&o.name===t.name?this.removeEventListener(o.type,o.listener,o.options):e[++i]=o;++i?e.length=i:delete this.__on}}}function xR(t,e,n){return function(){var i=this.__on,r,o=vR(e);if(i){for(var s=0,a=i.length;s<a;++s)if((r=i[s]).type===t.type&&r.name===t.name){this.removeEventListener(r.type,r.listener,r.options),this.addEventListener(r.type,r.listener=o,r.options=n),r.value=e;return}}this.addEventListener(t.type,o,n),r={type:t.type,name:t.name,value:e,listener:o,options:n},i?i.push(r):this.__on=[r]}}function bR(t,e,n){var i=_R(t+""),r,o=i.length,s;if(arguments.length<2){var a=this.node().__on;if(a){for(var l=0,u=a.length,c;l<u;++l)for(r=0,c=a[l];r<o;++r)if((s=i[r]).type===c.type&&s.name===c.name)return c.value}return}for(a=e?xR:yR,r=0;r<o;++r)this.each(a(i[r],e,n));return this}function P_(t,e,n){var i=T_(t),r=i.CustomEvent;typeof r=="function"?r=new r(e,n):(r=i.document.createEvent("Event"),n?(r.initEvent(e,n.bubbles,n.cancelable),r.detail=n.detail):r.initEvent(e,!1,!1)),t.dispatchEvent(r)}function SR(t,e){return function(){return P_(this,t,e)}}function MR(t,e){return function(){return P_(this,t,e.apply(this,arguments))}}function wR(t,e){return this.each((typeof e=="function"?MR:SR)(t,e))}function*ER(){for(var t=this._groups,e=0,n=t.length;e<n;++e)for(var i=t[e],r=0,o=i.length,s;r<o;++r)(s=i[r])&&(yield s)}var N_=[null];function Dn(t,e){this._groups=t,this._parents=e}function Fa(){return new Dn([[document.documentElement]],N_)}function TR(){return this}Dn.prototype=Fa.prototype={constructor:Dn,select:JC,selectAll:n2,selectChild:s2,selectChildren:c2,filter:d2,data:v2,enter:f2,exit:y2,join:x2,merge:b2,selection:TR,order:S2,sort:M2,call:E2,nodes:T2,node:A2,size:C2,empty:R2,each:I2,attr:O2,style:V2,property:W2,classed:K2,text:Q2,html:iR,raise:oR,lower:aR,append:lR,insert:cR,remove:fR,clone:mR,datum:gR,on:bR,dispatch:wR,[Symbol.iterator]:ER};function Xn(t){return typeof t=="string"?new Dn([[document.querySelector(t)]],[document.documentElement]):new Dn([[t]],N_)}function AR(t){let e;for(;e=t.sourceEvent;)t=e;return t}function li(t,e){if(t=AR(t),e===void 0&&(e=t.currentTarget),e){var n=e.ownerSVGElement||e;if(n.createSVGPoint){var i=n.createSVGPoint();return i.x=t.clientX,i.y=t.clientY,i=i.matrixTransform(e.getScreenCTM().inverse()),[i.x,i.y]}if(e.getBoundingClientRect){var r=e.getBoundingClientRect();return[t.clientX-r.left-e.clientLeft,t.clientY-r.top-e.clientTop]}}return[t.pageX,t.pageY]}const CR={passive:!1},pa={capture:!0,passive:!1};function ud(t){t.stopImmediatePropagation()}function ts(t){t.preventDefault(),t.stopImmediatePropagation()}function D_(t){var e=t.document.documentElement,n=Xn(t).on("dragstart.drag",ts,pa);"onselectstart"in e?n.on("selectstart.drag",ts,pa):(e.__noselect=e.style.MozUserSelect,e.style.MozUserSelect="none")}function L_(t,e){var n=t.document.documentElement,i=Xn(t).on("dragstart.drag",null);e&&(i.on("click.drag",ts,pa),setTimeout(function(){i.on("click.drag",null)},0)),"onselectstart"in n?i.on("selectstart.drag",null):(n.style.MozUserSelect=n.__noselect,delete n.__noselect)}const ml=t=>()=>t;function Ff(t,{sourceEvent:e,subject:n,target:i,identifier:r,active:o,x:s,y:a,dx:l,dy:u,dispatch:c}){Object.defineProperties(this,{type:{value:t,enumerable:!0,configurable:!0},sourceEvent:{value:e,enumerable:!0,configurable:!0},subject:{value:n,enumerable:!0,configurable:!0},target:{value:i,enumerable:!0,configurable:!0},identifier:{value:r,enumerable:!0,configurable:!0},active:{value:o,enumerable:!0,configurable:!0},x:{value:s,enumerable:!0,configurable:!0},y:{value:a,enumerable:!0,configurable:!0},dx:{value:l,enumerable:!0,configurable:!0},dy:{value:u,enumerable:!0,configurable:!0},_:{value:c}})}Ff.prototype.on=function(){var t=this._.on.apply(this._,arguments);return t===this._?this:t};function RR(t){return!t.ctrlKey&&!t.button}function IR(){return this.parentNode}function PR(t,e){return e??{x:t.x,y:t.y}}function NR(){return navigator.maxTouchPoints||"ontouchstart"in this}function DR(){var t=RR,e=IR,n=PR,i=NR,r={},o=Ju("start","drag","end"),s=0,a,l,u,c,d=0;function f(y){y.on("mousedown.drag",h).filter(i).on("touchstart.drag",g).on("touchmove.drag",p,CR).on("touchend.drag touchcancel.drag",b).style("touch-action","none").style("-webkit-tap-highlight-color","rgba(0,0,0,0)")}function h(y,I){if(!(c||!t.call(this,y,I))){var D=M(this,e.call(this,y,I),y,I,"mouse");D&&(Xn(y.view).on("mousemove.drag",m,pa).on("mouseup.drag",v,pa),D_(y.view),ud(y),u=!1,a=y.clientX,l=y.clientY,D("start",y))}}function m(y){if(ts(y),!u){var I=y.clientX-a,D=y.clientY-l;u=I*I+D*D>d}r.mouse("drag",y)}function v(y){Xn(y.view).on("mousemove.drag mouseup.drag",null),L_(y.view,u),ts(y),r.mouse("end",y)}function g(y,I){if(t.call(this,y,I)){var D=y.changedTouches,B=e.call(this,y,I),_=D.length,x,R;for(x=0;x<_;++x)(R=M(this,B,y,I,D[x].identifier,D[x]))&&(ud(y),R("start",y,D[x]))}}function p(y){var I=y.changedTouches,D=I.length,B,_;for(B=0;B<D;++B)(_=r[I[B].identifier])&&(ts(y),_("drag",y,I[B]))}function b(y){var I=y.changedTouches,D=I.length,B,_;for(c&&clearTimeout(c),c=setTimeout(function(){c=null},500),B=0;B<D;++B)(_=r[I[B].identifier])&&(ud(y),_("end",y,I[B]))}function M(y,I,D,B,_,x){var R=o.copy(),T=li(x||D,I),A,X,E;if((E=n.call(y,new Ff("beforestart",{sourceEvent:D,target:f,identifier:_,active:s,x:T[0],y:T[1],dx:0,dy:0,dispatch:R}),B))!=null)return A=E.x-T[0]||0,X=E.y-T[1]||0,function k(C,N,U){var H=T,G;switch(C){case"start":r[_]=k,G=s++;break;case"end":delete r[_],--s;case"drag":T=li(U||N,I),G=s;break}R.call(C,y,new Ff(C,{sourceEvent:N,subject:E,target:f,identifier:_,active:G,x:T[0]+A,y:T[1]+X,dx:T[0]-H[0],dy:T[1]-H[1],dispatch:R}),B)}}return f.filter=function(y){return arguments.length?(t=typeof y=="function"?y:ml(!!y),f):t},f.container=function(y){return arguments.length?(e=typeof y=="function"?y:ml(y),f):e},f.subject=function(y){return arguments.length?(n=typeof y=="function"?y:ml(y),f):n},f.touchable=function(y){return arguments.length?(i=typeof y=="function"?y:ml(!!y),f):i},f.on=function(){var y=o.on.apply(o,arguments);return y===o?f:y},f.clickDistance=function(y){return arguments.length?(d=(y=+y)*y,f):Math.sqrt(d)},f}function kh(t,e,n){t.prototype=e.prototype=n,n.constructor=t}function F_(t,e){var n=Object.create(t.prototype);for(var i in e)n[i]=e[i];return n}function Ua(){}var ma=.7,pu=1/ma,ns="\\s*([+-]?\\d+)\\s*",ga="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",_i="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",LR=/^#([0-9a-f]{3,8})$/,FR=new RegExp(`^rgb\\(${ns},${ns},${ns}\\)$`),UR=new RegExp(`^rgb\\(${_i},${_i},${_i}\\)$`),OR=new RegExp(`^rgba\\(${ns},${ns},${ns},${ga}\\)$`),BR=new RegExp(`^rgba\\(${_i},${_i},${_i},${ga}\\)$`),kR=new RegExp(`^hsl\\(${ga},${_i},${_i}\\)$`),zR=new RegExp(`^hsla\\(${ga},${_i},${_i},${ga}\\)$`),tg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};kh(Ua,Mo,{copy(t){return Object.assign(new this.constructor,this,t)},displayable(){return this.rgb().displayable()},hex:ng,formatHex:ng,formatHex8:VR,formatHsl:$R,formatRgb:ig,toString:ig});function ng(){return this.rgb().formatHex()}function VR(){return this.rgb().formatHex8()}function $R(){return U_(this).formatHsl()}function ig(){return this.rgb().formatRgb()}function Mo(t){var e,n;return t=(t+"").trim().toLowerCase(),(e=LR.exec(t))?(n=e[1].length,e=parseInt(e[1],16),n===6?rg(e):n===3?new wn(e>>8&15|e>>4&240,e>>4&15|e&240,(e&15)<<4|e&15,1):n===8?gl(e>>24&255,e>>16&255,e>>8&255,(e&255)/255):n===4?gl(e>>12&15|e>>8&240,e>>8&15|e>>4&240,e>>4&15|e&240,((e&15)<<4|e&15)/255):null):(e=FR.exec(t))?new wn(e[1],e[2],e[3],1):(e=UR.exec(t))?new wn(e[1]*255/100,e[2]*255/100,e[3]*255/100,1):(e=OR.exec(t))?gl(e[1],e[2],e[3],e[4]):(e=BR.exec(t))?gl(e[1]*255/100,e[2]*255/100,e[3]*255/100,e[4]):(e=kR.exec(t))?ag(e[1],e[2]/100,e[3]/100,1):(e=zR.exec(t))?ag(e[1],e[2]/100,e[3]/100,e[4]):tg.hasOwnProperty(t)?rg(tg[t]):t==="transparent"?new wn(NaN,NaN,NaN,0):null}function rg(t){return new wn(t>>16&255,t>>8&255,t&255,1)}function gl(t,e,n,i){return i<=0&&(t=e=n=NaN),new wn(t,e,n,i)}function HR(t){return t instanceof Ua||(t=Mo(t)),t?(t=t.rgb(),new wn(t.r,t.g,t.b,t.opacity)):new wn}function Uf(t,e,n,i){return arguments.length===1?HR(t):new wn(t,e,n,i??1)}function wn(t,e,n,i){this.r=+t,this.g=+e,this.b=+n,this.opacity=+i}kh(wn,Uf,F_(Ua,{brighter(t){return t=t==null?pu:Math.pow(pu,t),new wn(this.r*t,this.g*t,this.b*t,this.opacity)},darker(t){return t=t==null?ma:Math.pow(ma,t),new wn(this.r*t,this.g*t,this.b*t,this.opacity)},rgb(){return this},clamp(){return new wn(_o(this.r),_o(this.g),_o(this.b),mu(this.opacity))},displayable(){return-.5<=this.r&&this.r<255.5&&-.5<=this.g&&this.g<255.5&&-.5<=this.b&&this.b<255.5&&0<=this.opacity&&this.opacity<=1},hex:og,formatHex:og,formatHex8:GR,formatRgb:sg,toString:sg}));function og(){return`#${ho(this.r)}${ho(this.g)}${ho(this.b)}`}function GR(){return`#${ho(this.r)}${ho(this.g)}${ho(this.b)}${ho((isNaN(this.opacity)?1:this.opacity)*255)}`}function sg(){const t=mu(this.opacity);return`${t===1?"rgb(":"rgba("}${_o(this.r)}, ${_o(this.g)}, ${_o(this.b)}${t===1?")":`, ${t})`}`}function mu(t){return isNaN(t)?1:Math.max(0,Math.min(1,t))}function _o(t){return Math.max(0,Math.min(255,Math.round(t)||0))}function ho(t){return t=_o(t),(t<16?"0":"")+t.toString(16)}function ag(t,e,n,i){return i<=0?t=e=n=NaN:n<=0||n>=1?t=e=NaN:e<=0&&(t=NaN),new Yn(t,e,n,i)}function U_(t){if(t instanceof Yn)return new Yn(t.h,t.s,t.l,t.opacity);if(t instanceof Ua||(t=Mo(t)),!t)return new Yn;if(t instanceof Yn)return t;t=t.rgb();var e=t.r/255,n=t.g/255,i=t.b/255,r=Math.min(e,n,i),o=Math.max(e,n,i),s=NaN,a=o-r,l=(o+r)/2;return a?(e===o?s=(n-i)/a+(n<i)*6:n===o?s=(i-e)/a+2:s=(e-n)/a+4,a/=l<.5?o+r:2-o-r,s*=60):a=l>0&&l<1?0:s,new Yn(s,a,l,t.opacity)}function WR(t,e,n,i){return arguments.length===1?U_(t):new Yn(t,e,n,i??1)}function Yn(t,e,n,i){this.h=+t,this.s=+e,this.l=+n,this.opacity=+i}kh(Yn,WR,F_(Ua,{brighter(t){return t=t==null?pu:Math.pow(pu,t),new Yn(this.h,this.s,this.l*t,this.opacity)},darker(t){return t=t==null?ma:Math.pow(ma,t),new Yn(this.h,this.s,this.l*t,this.opacity)},rgb(){var t=this.h%360+(this.h<0)*360,e=isNaN(t)||isNaN(this.s)?0:this.s,n=this.l,i=n+(n<.5?n:1-n)*e,r=2*n-i;return new wn(cd(t>=240?t-240:t+120,r,i),cd(t,r,i),cd(t<120?t+240:t-120,r,i),this.opacity)},clamp(){return new Yn(lg(this.h),vl(this.s),vl(this.l),mu(this.opacity))},displayable(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1},formatHsl(){const t=mu(this.opacity);return`${t===1?"hsl(":"hsla("}${lg(this.h)}, ${vl(this.s)*100}%, ${vl(this.l)*100}%${t===1?")":`, ${t})`}`}}));function lg(t){return t=(t||0)%360,t<0?t+360:t}function vl(t){return Math.max(0,Math.min(1,t||0))}function cd(t,e,n){return(t<60?e+(n-e)*t/60:t<180?n:t<240?e+(n-e)*(240-t)/60:e)*255}const zh=t=>()=>t;function XR(t,e){return function(n){return t+n*e}}function YR(t,e,n){return t=Math.pow(t,n),e=Math.pow(e,n)-t,n=1/n,function(i){return Math.pow(t+i*e,n)}}function qR(t){return(t=+t)==1?O_:function(e,n){return n-e?YR(e,n,t):zh(isNaN(e)?n:e)}}function O_(t,e){var n=e-t;return n?XR(t,n):zh(isNaN(t)?e:t)}const gu=(function t(e){var n=qR(e);function i(r,o){var s=n((r=Uf(r)).r,(o=Uf(o)).r),a=n(r.g,o.g),l=n(r.b,o.b),u=O_(r.opacity,o.opacity);return function(c){return r.r=s(c),r.g=a(c),r.b=l(c),r.opacity=u(c),r+""}}return i.gamma=t,i})(1);function KR(t,e){e||(e=[]);var n=t?Math.min(e.length,t.length):0,i=e.slice(),r;return function(o){for(r=0;r<n;++r)i[r]=t[r]*(1-o)+e[r]*o;return i}}function ZR(t){return ArrayBuffer.isView(t)&&!(t instanceof DataView)}function jR(t,e){var n=e?e.length:0,i=t?Math.min(n,t.length):0,r=new Array(i),o=new Array(n),s;for(s=0;s<i;++s)r[s]=Qs(t[s],e[s]);for(;s<n;++s)o[s]=e[s];return function(a){for(s=0;s<i;++s)o[s]=r[s](a);return o}}function JR(t,e){var n=new Date;return t=+t,e=+e,function(i){return n.setTime(t*(1-i)+e*i),n}}function di(t,e){return t=+t,e=+e,function(n){return t*(1-n)+e*n}}function QR(t,e){var n={},i={},r;(t===null||typeof t!="object")&&(t={}),(e===null||typeof e!="object")&&(e={});for(r in e)r in t?n[r]=Qs(t[r],e[r]):i[r]=e[r];return function(o){for(r in n)i[r]=n[r](o);return i}}var Of=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,dd=new RegExp(Of.source,"g");function eI(t){return function(){return t}}function tI(t){return function(e){return t(e)+""}}function B_(t,e){var n=Of.lastIndex=dd.lastIndex=0,i,r,o,s=-1,a=[],l=[];for(t=t+"",e=e+"";(i=Of.exec(t))&&(r=dd.exec(e));)(o=r.index)>n&&(o=e.slice(n,o),a[s]?a[s]+=o:a[++s]=o),(i=i[0])===(r=r[0])?a[s]?a[s]+=r:a[++s]=r:(a[++s]=null,l.push({i:s,x:di(i,r)})),n=dd.lastIndex;return n<e.length&&(o=e.slice(n),a[s]?a[s]+=o:a[++s]=o),a.length<2?l[0]?tI(l[0].x):eI(e):(e=l.length,function(u){for(var c=0,d;c<e;++c)a[(d=l[c]).i]=d.x(u);return a.join("")})}function Qs(t,e){var n=typeof e,i;return e==null||n==="boolean"?zh(e):(n==="number"?di:n==="string"?(i=Mo(e))?(e=i,gu):B_:e instanceof Mo?gu:e instanceof Date?JR:ZR(e)?KR:Array.isArray(e)?jR:typeof e.valueOf!="function"&&typeof e.toString!="function"||isNaN(e)?QR:di)(t,e)}var ug=180/Math.PI,Bf={translateX:0,translateY:0,rotate:0,skewX:0,scaleX:1,scaleY:1};function k_(t,e,n,i,r,o){var s,a,l;return(s=Math.sqrt(t*t+e*e))&&(t/=s,e/=s),(l=t*n+e*i)&&(n-=t*l,i-=e*l),(a=Math.sqrt(n*n+i*i))&&(n/=a,i/=a,l/=a),t*i<e*n&&(t=-t,e=-e,l=-l,s=-s),{translateX:r,translateY:o,rotate:Math.atan2(e,t)*ug,skewX:Math.atan(l)*ug,scaleX:s,scaleY:a}}var _l;function nI(t){const e=new(typeof DOMMatrix=="function"?DOMMatrix:WebKitCSSMatrix)(t+"");return e.isIdentity?Bf:k_(e.a,e.b,e.c,e.d,e.e,e.f)}function iI(t){return t==null||(_l||(_l=document.createElementNS("http://www.w3.org/2000/svg","g")),_l.setAttribute("transform",t),!(t=_l.transform.baseVal.consolidate()))?Bf:(t=t.matrix,k_(t.a,t.b,t.c,t.d,t.e,t.f))}function z_(t,e,n,i){function r(u){return u.length?u.pop()+" ":""}function o(u,c,d,f,h,m){if(u!==d||c!==f){var v=h.push("translate(",null,e,null,n);m.push({i:v-4,x:di(u,d)},{i:v-2,x:di(c,f)})}else(d||f)&&h.push("translate("+d+e+f+n)}function s(u,c,d,f){u!==c?(u-c>180?c+=360:c-u>180&&(u+=360),f.push({i:d.push(r(d)+"rotate(",null,i)-2,x:di(u,c)})):c&&d.push(r(d)+"rotate("+c+i)}function a(u,c,d,f){u!==c?f.push({i:d.push(r(d)+"skewX(",null,i)-2,x:di(u,c)}):c&&d.push(r(d)+"skewX("+c+i)}function l(u,c,d,f,h,m){if(u!==d||c!==f){var v=h.push(r(h)+"scale(",null,",",null,")");m.push({i:v-4,x:di(u,d)},{i:v-2,x:di(c,f)})}else(d!==1||f!==1)&&h.push(r(h)+"scale("+d+","+f+")")}return function(u,c){var d=[],f=[];return u=t(u),c=t(c),o(u.translateX,u.translateY,c.translateX,c.translateY,d,f),s(u.rotate,c.rotate,d,f),a(u.skewX,c.skewX,d,f),l(u.scaleX,u.scaleY,c.scaleX,c.scaleY,d,f),u=c=null,function(h){for(var m=-1,v=f.length,g;++m<v;)d[(g=f[m]).i]=g.x(h);return d.join("")}}}var rI=z_(nI,"px, ","px)","deg)"),oI=z_(iI,", ",")",")"),sI=1e-12;function cg(t){return((t=Math.exp(t))+1/t)/2}function aI(t){return((t=Math.exp(t))-1/t)/2}function lI(t){return((t=Math.exp(2*t))-1)/(t+1)}const $l=(function t(e,n,i){function r(o,s){var a=o[0],l=o[1],u=o[2],c=s[0],d=s[1],f=s[2],h=c-a,m=d-l,v=h*h+m*m,g,p;if(v<sI)p=Math.log(f/u)/e,g=function(B){return[a+B*h,l+B*m,u*Math.exp(e*B*p)]};else{var b=Math.sqrt(v),M=(f*f-u*u+i*v)/(2*u*n*b),y=(f*f-u*u-i*v)/(2*f*n*b),I=Math.log(Math.sqrt(M*M+1)-M),D=Math.log(Math.sqrt(y*y+1)-y);p=(D-I)/e,g=function(B){var _=B*p,x=cg(I),R=u/(n*b)*(x*lI(e*_+I)-aI(I));return[a+R*h,l+R*m,u*x/cg(e*_+I)]}}return g.duration=p*1e3*e/Math.SQRT2,g}return r.rho=function(o){var s=Math.max(.001,+o),a=s*s,l=a*a;return t(s,a,l)},r})(Math.SQRT2,2,4);var hs=0,ks=0,Ns=0,V_=1e3,vu,zs,_u=0,wo=0,ec=0,va=typeof performance=="object"&&performance.now?performance:Date,$_=typeof window=="object"&&window.requestAnimationFrame?window.requestAnimationFrame.bind(window):function(t){setTimeout(t,17)};function Vh(){return wo||($_(uI),wo=va.now()+ec)}function uI(){wo=0}function yu(){this._call=this._time=this._next=null}yu.prototype=H_.prototype={constructor:yu,restart:function(t,e,n){if(typeof t!="function")throw new TypeError("callback is not a function");n=(n==null?Vh():+n)+(e==null?0:+e),!this._next&&zs!==this&&(zs?zs._next=this:vu=this,zs=this),this._call=t,this._time=n,kf()},stop:function(){this._call&&(this._call=null,this._time=1/0,kf())}};function H_(t,e,n){var i=new yu;return i.restart(t,e,n),i}function cI(){Vh(),++hs;for(var t=vu,e;t;)(e=wo-t._time)>=0&&t._call.call(void 0,e),t=t._next;--hs}function dg(){wo=(_u=va.now())+ec,hs=ks=0;try{cI()}finally{hs=0,fI(),wo=0}}function dI(){var t=va.now(),e=t-_u;e>V_&&(ec-=e,_u=t)}function fI(){for(var t,e=vu,n,i=1/0;e;)e._call?(i>e._time&&(i=e._time),t=e,e=e._next):(n=e._next,e._next=null,e=t?t._next=n:vu=n);zs=t,kf(i)}function kf(t){if(!hs){ks&&(ks=clearTimeout(ks));var e=t-wo;e>24?(t<1/0&&(ks=setTimeout(dg,t-va.now()-ec)),Ns&&(Ns=clearInterval(Ns))):(Ns||(_u=va.now(),Ns=setInterval(dI,V_)),hs=1,$_(dg))}}function fg(t,e,n){var i=new yu;return e=e==null?0:+e,i.restart(r=>{i.stop(),t(r+e)},e,n),i}var hI=Ju("start","end","cancel","interrupt"),pI=[],G_=0,hg=1,zf=2,Hl=3,pg=4,Vf=5,Gl=6;function tc(t,e,n,i,r,o){var s=t.__transition;if(!s)t.__transition={};else if(n in s)return;mI(t,n,{name:e,index:i,group:r,on:hI,tween:pI,time:o.time,delay:o.delay,duration:o.duration,ease:o.ease,timer:null,state:G_})}function $h(t,e){var n=ei(t,e);if(n.state>G_)throw new Error("too late; already scheduled");return n}function Mi(t,e){var n=ei(t,e);if(n.state>Hl)throw new Error("too late; already running");return n}function ei(t,e){var n=t.__transition;if(!n||!(n=n[e]))throw new Error("transition not found");return n}function mI(t,e,n){var i=t.__transition,r;i[e]=n,n.timer=H_(o,0,n.time);function o(u){n.state=hg,n.timer.restart(s,n.delay,n.time),n.delay<=u&&s(u-n.delay)}function s(u){var c,d,f,h;if(n.state!==hg)return l();for(c in i)if(h=i[c],h.name===n.name){if(h.state===Hl)return fg(s);h.state===pg?(h.state=Gl,h.timer.stop(),h.on.call("interrupt",t,t.__data__,h.index,h.group),delete i[c]):+c<e&&(h.state=Gl,h.timer.stop(),h.on.call("cancel",t,t.__data__,h.index,h.group),delete i[c])}if(fg(function(){n.state===Hl&&(n.state=pg,n.timer.restart(a,n.delay,n.time),a(u))}),n.state=zf,n.on.call("start",t,t.__data__,n.index,n.group),n.state===zf){for(n.state=Hl,r=new Array(f=n.tween.length),c=0,d=-1;c<f;++c)(h=n.tween[c].value.call(t,t.__data__,n.index,n.group))&&(r[++d]=h);r.length=d+1}}function a(u){for(var c=u<n.duration?n.ease.call(null,u/n.duration):(n.timer.restart(l),n.state=Vf,1),d=-1,f=r.length;++d<f;)r[d].call(t,c);n.state===Vf&&(n.on.call("end",t,t.__data__,n.index,n.group),l())}function l(){n.state=Gl,n.timer.stop(),delete i[e];for(var u in i)return;delete t.__transition}}function Wl(t,e){var n=t.__transition,i,r,o=!0,s;if(n){e=e==null?null:e+"";for(s in n){if((i=n[s]).name!==e){o=!1;continue}r=i.state>zf&&i.state<Vf,i.state=Gl,i.timer.stop(),i.on.call(r?"interrupt":"cancel",t,t.__data__,i.index,i.group),delete n[s]}o&&delete t.__transition}}function gI(t){return this.each(function(){Wl(this,t)})}function vI(t,e){var n,i;return function(){var r=Mi(this,t),o=r.tween;if(o!==n){i=n=o;for(var s=0,a=i.length;s<a;++s)if(i[s].name===e){i=i.slice(),i.splice(s,1);break}}r.tween=i}}function _I(t,e,n){var i,r;if(typeof n!="function")throw new Error;return function(){var o=Mi(this,t),s=o.tween;if(s!==i){r=(i=s).slice();for(var a={name:e,value:n},l=0,u=r.length;l<u;++l)if(r[l].name===e){r[l]=a;break}l===u&&r.push(a)}o.tween=r}}function yI(t,e){var n=this._id;if(t+="",arguments.length<2){for(var i=ei(this.node(),n).tween,r=0,o=i.length,s;r<o;++r)if((s=i[r]).name===t)return s.value;return null}return this.each((e==null?vI:_I)(n,t,e))}function Hh(t,e,n){var i=t._id;return t.each(function(){var r=Mi(this,i);(r.value||(r.value={}))[e]=n.apply(this,arguments)}),function(r){return ei(r,i).value[e]}}function W_(t,e){var n;return(typeof e=="number"?di:e instanceof Mo?gu:(n=Mo(e))?(e=n,gu):B_)(t,e)}function xI(t){return function(){this.removeAttribute(t)}}function bI(t){return function(){this.removeAttributeNS(t.space,t.local)}}function SI(t,e,n){var i,r=n+"",o;return function(){var s=this.getAttribute(t);return s===r?null:s===i?o:o=e(i=s,n)}}function MI(t,e,n){var i,r=n+"",o;return function(){var s=this.getAttributeNS(t.space,t.local);return s===r?null:s===i?o:o=e(i=s,n)}}function wI(t,e,n){var i,r,o;return function(){var s,a=n(this),l;return a==null?void this.removeAttribute(t):(s=this.getAttribute(t),l=a+"",s===l?null:s===i&&l===r?o:(r=l,o=e(i=s,a)))}}function EI(t,e,n){var i,r,o;return function(){var s,a=n(this),l;return a==null?void this.removeAttributeNS(t.space,t.local):(s=this.getAttributeNS(t.space,t.local),l=a+"",s===l?null:s===i&&l===r?o:(r=l,o=e(i=s,a)))}}function TI(t,e){var n=Qu(t),i=n==="transform"?oI:W_;return this.attrTween(t,typeof e=="function"?(n.local?EI:wI)(n,i,Hh(this,"attr."+t,e)):e==null?(n.local?bI:xI)(n):(n.local?MI:SI)(n,i,e))}function AI(t,e){return function(n){this.setAttribute(t,e.call(this,n))}}function CI(t,e){return function(n){this.setAttributeNS(t.space,t.local,e.call(this,n))}}function RI(t,e){var n,i;function r(){var o=e.apply(this,arguments);return o!==i&&(n=(i=o)&&CI(t,o)),n}return r._value=e,r}function II(t,e){var n,i;function r(){var o=e.apply(this,arguments);return o!==i&&(n=(i=o)&&AI(t,o)),n}return r._value=e,r}function PI(t,e){var n="attr."+t;if(arguments.length<2)return(n=this.tween(n))&&n._value;if(e==null)return this.tween(n,null);if(typeof e!="function")throw new Error;var i=Qu(t);return this.tween(n,(i.local?RI:II)(i,e))}function NI(t,e){return function(){$h(this,t).delay=+e.apply(this,arguments)}}function DI(t,e){return e=+e,function(){$h(this,t).delay=e}}function LI(t){var e=this._id;return arguments.length?this.each((typeof t=="function"?NI:DI)(e,t)):ei(this.node(),e).delay}function FI(t,e){return function(){Mi(this,t).duration=+e.apply(this,arguments)}}function UI(t,e){return e=+e,function(){Mi(this,t).duration=e}}function OI(t){var e=this._id;return arguments.length?this.each((typeof t=="function"?FI:UI)(e,t)):ei(this.node(),e).duration}function BI(t,e){if(typeof e!="function")throw new Error;return function(){Mi(this,t).ease=e}}function kI(t){var e=this._id;return arguments.length?this.each(BI(e,t)):ei(this.node(),e).ease}function zI(t,e){return function(){var n=e.apply(this,arguments);if(typeof n!="function")throw new Error;Mi(this,t).ease=n}}function VI(t){if(typeof t!="function")throw new Error;return this.each(zI(this._id,t))}function $I(t){typeof t!="function"&&(t=M_(t));for(var e=this._groups,n=e.length,i=new Array(n),r=0;r<n;++r)for(var o=e[r],s=o.length,a=i[r]=[],l,u=0;u<s;++u)(l=o[u])&&t.call(l,l.__data__,u,o)&&a.push(l);return new rr(i,this._parents,this._name,this._id)}function HI(t){if(t._id!==this._id)throw new Error;for(var e=this._groups,n=t._groups,i=e.length,r=n.length,o=Math.min(i,r),s=new Array(i),a=0;a<o;++a)for(var l=e[a],u=n[a],c=l.length,d=s[a]=new Array(c),f,h=0;h<c;++h)(f=l[h]||u[h])&&(d[h]=f);for(;a<i;++a)s[a]=e[a];return new rr(s,this._parents,this._name,this._id)}function GI(t){return(t+"").trim().split(/^|\s+/).every(function(e){var n=e.indexOf(".");return n>=0&&(e=e.slice(0,n)),!e||e==="start"})}function WI(t,e,n){var i,r,o=GI(e)?$h:Mi;return function(){var s=o(this,t),a=s.on;a!==i&&(r=(i=a).copy()).on(e,n),s.on=r}}function XI(t,e){var n=this._id;return arguments.length<2?ei(this.node(),n).on.on(t):this.each(WI(n,t,e))}function YI(t){return function(){var e=this.parentNode;for(var n in this.__transition)if(+n!==t)return;e&&e.removeChild(this)}}function qI(){return this.on("end.remove",YI(this._id))}function KI(t){var e=this._name,n=this._id;typeof t!="function"&&(t=Oh(t));for(var i=this._groups,r=i.length,o=new Array(r),s=0;s<r;++s)for(var a=i[s],l=a.length,u=o[s]=new Array(l),c,d,f=0;f<l;++f)(c=a[f])&&(d=t.call(c,c.__data__,f,a))&&("__data__"in c&&(d.__data__=c.__data__),u[f]=d,tc(u[f],e,n,f,u,ei(c,n)));return new rr(o,this._parents,e,n)}function ZI(t){var e=this._name,n=this._id;typeof t!="function"&&(t=S_(t));for(var i=this._groups,r=i.length,o=[],s=[],a=0;a<r;++a)for(var l=i[a],u=l.length,c,d=0;d<u;++d)if(c=l[d]){for(var f=t.call(c,c.__data__,d,l),h,m=ei(c,n),v=0,g=f.length;v<g;++v)(h=f[v])&&tc(h,e,n,v,f,m);o.push(f),s.push(c)}return new rr(o,s,e,n)}var jI=Fa.prototype.constructor;function JI(){return new jI(this._groups,this._parents)}function QI(t,e){var n,i,r;return function(){var o=fs(this,t),s=(this.style.removeProperty(t),fs(this,t));return o===s?null:o===n&&s===i?r:r=e(n=o,i=s)}}function X_(t){return function(){this.style.removeProperty(t)}}function eP(t,e,n){var i,r=n+"",o;return function(){var s=fs(this,t);return s===r?null:s===i?o:o=e(i=s,n)}}function tP(t,e,n){var i,r,o;return function(){var s=fs(this,t),a=n(this),l=a+"";return a==null&&(l=a=(this.style.removeProperty(t),fs(this,t))),s===l?null:s===i&&l===r?o:(r=l,o=e(i=s,a))}}function nP(t,e){var n,i,r,o="style."+e,s="end."+o,a;return function(){var l=Mi(this,t),u=l.on,c=l.value[o]==null?a||(a=X_(e)):void 0;(u!==n||r!==c)&&(i=(n=u).copy()).on(s,r=c),l.on=i}}function iP(t,e,n){var i=(t+="")=="transform"?rI:W_;return e==null?this.styleTween(t,QI(t,i)).on("end.style."+t,X_(t)):typeof e=="function"?this.styleTween(t,tP(t,i,Hh(this,"style."+t,e))).each(nP(this._id,t)):this.styleTween(t,eP(t,i,e),n).on("end.style."+t,null)}function rP(t,e,n){return function(i){this.style.setProperty(t,e.call(this,i),n)}}function oP(t,e,n){var i,r;function o(){var s=e.apply(this,arguments);return s!==r&&(i=(r=s)&&rP(t,s,n)),i}return o._value=e,o}function sP(t,e,n){var i="style."+(t+="");if(arguments.length<2)return(i=this.tween(i))&&i._value;if(e==null)return this.tween(i,null);if(typeof e!="function")throw new Error;return this.tween(i,oP(t,e,n??""))}function aP(t){return function(){this.textContent=t}}function lP(t){return function(){var e=t(this);this.textContent=e??""}}function uP(t){return this.tween("text",typeof t=="function"?lP(Hh(this,"text",t)):aP(t==null?"":t+""))}function cP(t){return function(e){this.textContent=t.call(this,e)}}function dP(t){var e,n;function i(){var r=t.apply(this,arguments);return r!==n&&(e=(n=r)&&cP(r)),e}return i._value=t,i}function fP(t){var e="text";if(arguments.length<1)return(e=this.tween(e))&&e._value;if(t==null)return this.tween(e,null);if(typeof t!="function")throw new Error;return this.tween(e,dP(t))}function hP(){for(var t=this._name,e=this._id,n=Y_(),i=this._groups,r=i.length,o=0;o<r;++o)for(var s=i[o],a=s.length,l,u=0;u<a;++u)if(l=s[u]){var c=ei(l,e);tc(l,t,n,u,s,{time:c.time+c.delay+c.duration,delay:0,duration:c.duration,ease:c.ease})}return new rr(i,this._parents,t,n)}function pP(){var t,e,n=this,i=n._id,r=n.size();return new Promise(function(o,s){var a={value:s},l={value:function(){--r===0&&o()}};n.each(function(){var u=Mi(this,i),c=u.on;c!==t&&(e=(t=c).copy(),e._.cancel.push(a),e._.interrupt.push(a),e._.end.push(l)),u.on=e}),r===0&&o()})}var mP=0;function rr(t,e,n,i){this._groups=t,this._parents=e,this._name=n,this._id=i}function Y_(){return++mP}var Li=Fa.prototype;rr.prototype={constructor:rr,select:KI,selectAll:ZI,selectChild:Li.selectChild,selectChildren:Li.selectChildren,filter:$I,merge:HI,selection:JI,transition:hP,call:Li.call,nodes:Li.nodes,node:Li.node,size:Li.size,empty:Li.empty,each:Li.each,on:XI,attr:TI,attrTween:PI,style:iP,styleTween:sP,text:uP,textTween:fP,remove:qI,tween:yI,delay:LI,duration:OI,ease:kI,easeVarying:VI,end:pP,[Symbol.iterator]:Li[Symbol.iterator]};function gP(t){return((t*=2)<=1?t*t*t:(t-=2)*t*t+2)/2}var vP={time:null,delay:0,duration:250,ease:gP};function _P(t,e){for(var n;!(n=t.__transition)||!(n=n[e]);)if(!(t=t.parentNode))throw new Error(`transition ${e} not found`);return n}function yP(t){var e,n;t instanceof rr?(e=t._id,t=t._name):(e=Y_(),(n=vP).time=Vh(),t=t==null?null:t+"");for(var i=this._groups,r=i.length,o=0;o<r;++o)for(var s=i[o],a=s.length,l,u=0;u<a;++u)(l=s[u])&&tc(l,t,e,u,s,n||_P(l,e));return new rr(i,this._parents,t,e)}Fa.prototype.interrupt=gI;Fa.prototype.transition=yP;const yl=t=>()=>t;function xP(t,{sourceEvent:e,target:n,transform:i,dispatch:r}){Object.defineProperties(this,{type:{value:t,enumerable:!0,configurable:!0},sourceEvent:{value:e,enumerable:!0,configurable:!0},target:{value:n,enumerable:!0,configurable:!0},transform:{value:i,enumerable:!0,configurable:!0},_:{value:r}})}function Hi(t,e,n){this.k=t,this.x=e,this.y=n}Hi.prototype={constructor:Hi,scale:function(t){return t===1?this:new Hi(this.k*t,this.x,this.y)},translate:function(t,e){return t===0&e===0?this:new Hi(this.k,this.x+this.k*t,this.y+this.k*e)},apply:function(t){return[t[0]*this.k+this.x,t[1]*this.k+this.y]},applyX:function(t){return t*this.k+this.x},applyY:function(t){return t*this.k+this.y},invert:function(t){return[(t[0]-this.x)/this.k,(t[1]-this.y)/this.k]},invertX:function(t){return(t-this.x)/this.k},invertY:function(t){return(t-this.y)/this.k},rescaleX:function(t){return t.copy().domain(t.range().map(this.invertX,this).map(t.invert,t))},rescaleY:function(t){return t.copy().domain(t.range().map(this.invertY,this).map(t.invert,t))},toString:function(){return"translate("+this.x+","+this.y+") scale("+this.k+")"}};var ps=new Hi(1,0,0);Hi.prototype;function fd(t){t.stopImmediatePropagation()}function Ds(t){t.preventDefault(),t.stopImmediatePropagation()}function bP(t){return(!t.ctrlKey||t.type==="wheel")&&!t.button}function SP(){var t=this;return t instanceof SVGElement?(t=t.ownerSVGElement||t,t.hasAttribute("viewBox")?(t=t.viewBox.baseVal,[[t.x,t.y],[t.x+t.width,t.y+t.height]]):[[0,0],[t.width.baseVal.value,t.height.baseVal.value]]):[[0,0],[t.clientWidth,t.clientHeight]]}function mg(){return this.__zoom||ps}function MP(t){return-t.deltaY*(t.deltaMode===1?.05:t.deltaMode?1:.002)*(t.ctrlKey?10:1)}function wP(){return navigator.maxTouchPoints||"ontouchstart"in this}function EP(t,e,n){var i=t.invertX(e[0][0])-n[0][0],r=t.invertX(e[1][0])-n[1][0],o=t.invertY(e[0][1])-n[0][1],s=t.invertY(e[1][1])-n[1][1];return t.translate(r>i?(i+r)/2:Math.min(0,i)||Math.max(0,r),s>o?(o+s)/2:Math.min(0,o)||Math.max(0,s))}function TP(){var t=bP,e=SP,n=EP,i=MP,r=wP,o=[0,1/0],s=[[-1/0,-1/0],[1/0,1/0]],a=250,l=$l,u=Ju("start","zoom","end"),c,d,f,h=500,m=150,v=0,g=10;function p(E){E.property("__zoom",mg).on("wheel.zoom",_,{passive:!1}).on("mousedown.zoom",x).on("dblclick.zoom",R).filter(r).on("touchstart.zoom",T).on("touchmove.zoom",A).on("touchend.zoom touchcancel.zoom",X).style("-webkit-tap-highlight-color","rgba(0,0,0,0)")}p.transform=function(E,k,C,N){var U=E.selection?E.selection():E;U.property("__zoom",mg),E!==U?I(E,k,C,N):U.interrupt().each(function(){D(this,arguments).event(N).start().zoom(null,typeof k=="function"?k.apply(this,arguments):k).end()})},p.scaleBy=function(E,k,C,N){p.scaleTo(E,function(){var U=this.__zoom.k,H=typeof k=="function"?k.apply(this,arguments):k;return U*H},C,N)},p.scaleTo=function(E,k,C,N){p.transform(E,function(){var U=e.apply(this,arguments),H=this.__zoom,G=C==null?y(U):typeof C=="function"?C.apply(this,arguments):C,ne=H.invert(G),re=typeof k=="function"?k.apply(this,arguments):k;return n(M(b(H,re),G,ne),U,s)},C,N)},p.translateBy=function(E,k,C,N){p.transform(E,function(){return n(this.__zoom.translate(typeof k=="function"?k.apply(this,arguments):k,typeof C=="function"?C.apply(this,arguments):C),e.apply(this,arguments),s)},null,N)},p.translateTo=function(E,k,C,N,U){p.transform(E,function(){var H=e.apply(this,arguments),G=this.__zoom,ne=N==null?y(H):typeof N=="function"?N.apply(this,arguments):N;return n(ps.translate(ne[0],ne[1]).scale(G.k).translate(typeof k=="function"?-k.apply(this,arguments):-k,typeof C=="function"?-C.apply(this,arguments):-C),H,s)},N,U)};function b(E,k){return k=Math.max(o[0],Math.min(o[1],k)),k===E.k?E:new Hi(k,E.x,E.y)}function M(E,k,C){var N=k[0]-C[0]*E.k,U=k[1]-C[1]*E.k;return N===E.x&&U===E.y?E:new Hi(E.k,N,U)}function y(E){return[(+E[0][0]+ +E[1][0])/2,(+E[0][1]+ +E[1][1])/2]}function I(E,k,C,N){E.on("start.zoom",function(){D(this,arguments).event(N).start()}).on("interrupt.zoom end.zoom",function(){D(this,arguments).event(N).end()}).tween("zoom",function(){var U=this,H=arguments,G=D(U,H).event(N),ne=e.apply(U,H),re=C==null?y(ne):typeof C=="function"?C.apply(U,H):C,ye=Math.max(ne[1][0]-ne[0][0],ne[1][1]-ne[0][1]),we=U.__zoom,te=typeof k=="function"?k.apply(U,H):k,L=l(we.invert(re).concat(ye/we.k),te.invert(re).concat(ye/te.k));return function(j){if(j===1)j=te;else{var Q=L(j),fe=ye/Q[2];j=new Hi(fe,re[0]-Q[0]*fe,re[1]-Q[1]*fe)}G.zoom(null,j)}})}function D(E,k,C){return!C&&E.__zooming||new B(E,k)}function B(E,k){this.that=E,this.args=k,this.active=0,this.sourceEvent=null,this.extent=e.apply(E,k),this.taps=0}B.prototype={event:function(E){return E&&(this.sourceEvent=E),this},start:function(){return++this.active===1&&(this.that.__zooming=this,this.emit("start")),this},zoom:function(E,k){return this.mouse&&E!=="mouse"&&(this.mouse[1]=k.invert(this.mouse[0])),this.touch0&&E!=="touch"&&(this.touch0[1]=k.invert(this.touch0[0])),this.touch1&&E!=="touch"&&(this.touch1[1]=k.invert(this.touch1[0])),this.that.__zoom=k,this.emit("zoom"),this},end:function(){return--this.active===0&&(delete this.that.__zooming,this.emit("end")),this},emit:function(E){var k=Xn(this.that).datum();u.call(E,this.that,new xP(E,{sourceEvent:this.sourceEvent,target:p,transform:this.that.__zoom,dispatch:u}),k)}};function _(E,...k){if(!t.apply(this,arguments))return;var C=D(this,k).event(E),N=this.__zoom,U=Math.max(o[0],Math.min(o[1],N.k*Math.pow(2,i.apply(this,arguments)))),H=li(E);if(C.wheel)(C.mouse[0][0]!==H[0]||C.mouse[0][1]!==H[1])&&(C.mouse[1]=N.invert(C.mouse[0]=H)),clearTimeout(C.wheel);else{if(N.k===U)return;C.mouse=[H,N.invert(H)],Wl(this),C.start()}Ds(E),C.wheel=setTimeout(G,m),C.zoom("mouse",n(M(b(N,U),C.mouse[0],C.mouse[1]),C.extent,s));function G(){C.wheel=null,C.end()}}function x(E,...k){if(f||!t.apply(this,arguments))return;var C=E.currentTarget,N=D(this,k,!0).event(E),U=Xn(E.view).on("mousemove.zoom",re,!0).on("mouseup.zoom",ye,!0),H=li(E,C),G=E.clientX,ne=E.clientY;D_(E.view),fd(E),N.mouse=[H,this.__zoom.invert(H)],Wl(this),N.start();function re(we){if(Ds(we),!N.moved){var te=we.clientX-G,L=we.clientY-ne;N.moved=te*te+L*L>v}N.event(we).zoom("mouse",n(M(N.that.__zoom,N.mouse[0]=li(we,C),N.mouse[1]),N.extent,s))}function ye(we){U.on("mousemove.zoom mouseup.zoom",null),L_(we.view,N.moved),Ds(we),N.event(we).end()}}function R(E,...k){if(t.apply(this,arguments)){var C=this.__zoom,N=li(E.changedTouches?E.changedTouches[0]:E,this),U=C.invert(N),H=C.k*(E.shiftKey?.5:2),G=n(M(b(C,H),N,U),e.apply(this,k),s);Ds(E),a>0?Xn(this).transition().duration(a).call(I,G,N,E):Xn(this).call(p.transform,G,N,E)}}function T(E,...k){if(t.apply(this,arguments)){var C=E.touches,N=C.length,U=D(this,k,E.changedTouches.length===N).event(E),H,G,ne,re;for(fd(E),G=0;G<N;++G)ne=C[G],re=li(ne,this),re=[re,this.__zoom.invert(re),ne.identifier],U.touch0?!U.touch1&&U.touch0[2]!==re[2]&&(U.touch1=re,U.taps=0):(U.touch0=re,H=!0,U.taps=1+!!c);c&&(c=clearTimeout(c)),H&&(U.taps<2&&(d=re[0],c=setTimeout(function(){c=null},h)),Wl(this),U.start())}}function A(E,...k){if(this.__zooming){var C=D(this,k).event(E),N=E.changedTouches,U=N.length,H,G,ne,re;for(Ds(E),H=0;H<U;++H)G=N[H],ne=li(G,this),C.touch0&&C.touch0[2]===G.identifier?C.touch0[0]=ne:C.touch1&&C.touch1[2]===G.identifier&&(C.touch1[0]=ne);if(G=C.that.__zoom,C.touch1){var ye=C.touch0[0],we=C.touch0[1],te=C.touch1[0],L=C.touch1[1],j=(j=te[0]-ye[0])*j+(j=te[1]-ye[1])*j,Q=(Q=L[0]-we[0])*Q+(Q=L[1]-we[1])*Q;G=b(G,Math.sqrt(j/Q)),ne=[(ye[0]+te[0])/2,(ye[1]+te[1])/2],re=[(we[0]+L[0])/2,(we[1]+L[1])/2]}else if(C.touch0)ne=C.touch0[0],re=C.touch0[1];else return;C.zoom("touch",n(M(G,ne,re),C.extent,s))}}function X(E,...k){if(this.__zooming){var C=D(this,k).event(E),N=E.changedTouches,U=N.length,H,G;for(fd(E),f&&clearTimeout(f),f=setTimeout(function(){f=null},h),H=0;H<U;++H)G=N[H],C.touch0&&C.touch0[2]===G.identifier?delete C.touch0:C.touch1&&C.touch1[2]===G.identifier&&delete C.touch1;if(C.touch1&&!C.touch0&&(C.touch0=C.touch1,delete C.touch1),C.touch0)C.touch0[1]=this.__zoom.invert(C.touch0[0]);else if(C.end(),C.taps===2&&(G=li(G,this),Math.hypot(d[0]-G[0],d[1]-G[1])<g)){var ne=Xn(this).on("dblclick.zoom");ne&&ne.apply(this,arguments)}}}return p.wheelDelta=function(E){return arguments.length?(i=typeof E=="function"?E:yl(+E),p):i},p.filter=function(E){return arguments.length?(t=typeof E=="function"?E:yl(!!E),p):t},p.touchable=function(E){return arguments.length?(r=typeof E=="function"?E:yl(!!E),p):r},p.extent=function(E){return arguments.length?(e=typeof E=="function"?E:yl([[+E[0][0],+E[0][1]],[+E[1][0],+E[1][1]]]),p):e},p.scaleExtent=function(E){return arguments.length?(o[0]=+E[0],o[1]=+E[1],p):[o[0],o[1]]},p.translateExtent=function(E){return arguments.length?(s[0][0]=+E[0][0],s[1][0]=+E[1][0],s[0][1]=+E[0][1],s[1][1]=+E[1][1],p):[[s[0][0],s[0][1]],[s[1][0],s[1][1]]]},p.constrain=function(E){return arguments.length?(n=E,p):n},p.duration=function(E){return arguments.length?(a=+E,p):a},p.interpolate=function(E){return arguments.length?(l=E,p):l},p.on=function(){var E=u.on.apply(u,arguments);return E===u?p:E},p.clickDistance=function(E){return arguments.length?(v=(E=+E)*E,p):Math.sqrt(v)},p.tapDistance=function(E){return arguments.length?(g=+E,p):g},p}var Xe=(t=>(t.Left="left",t.Top="top",t.Right="right",t.Bottom="bottom",t))(Xe||{}),Gh=(t=>(t.Partial="partial",t.Full="full",t))(Gh||{}),ao=(t=>(t.Bezier="default",t.SimpleBezier="simple-bezier",t.Straight="straight",t.Step="step",t.SmoothStep="smoothstep",t))(ao||{}),zr=(t=>(t.Strict="strict",t.Loose="loose",t))(zr||{}),$f=(t=>(t.Arrow="arrow",t.ArrowClosed="arrowclosed",t))($f||{}),ea=(t=>(t.Free="free",t.Vertical="vertical",t.Horizontal="horizontal",t))(ea||{});const AP=["INPUT","SELECT","TEXTAREA"],CP=typeof document<"u"?document:null;function Hf(t){var e,n;const i=((n=(e=t.composedPath)==null?void 0:e.call(t))==null?void 0:n[0])||t.target,r=typeof i?.hasAttribute=="function"?i.hasAttribute("contenteditable"):!1,o=typeof i?.closest=="function"?i.closest(".nokey"):null;return AP.includes(i?.nodeName)||r||!!o}function RP(t){return t.ctrlKey||t.metaKey||t.shiftKey||t.altKey}function gg(t,e,n,i){const r=e.replace("+",`
`).replace(`

`,`
+`).split(`
`).map(s=>s.trim().toLowerCase());if(r.length===1)return t.toLowerCase()===e.toLowerCase();i||n.add(t.toLowerCase());const o=r.every((s,a)=>n.has(s)&&Array.from(n.values())[a]===r[a]);return i&&n.delete(t.toLowerCase()),o}function IP(t,e){return n=>{if(!n.code&&!n.key)return!1;const i=PP(n.code,t);return Array.isArray(t)?t.some(r=>gg(n[i],r,e,n.type==="keyup")):gg(n[i],t,e,n.type==="keyup")}}function PP(t,e){return e.includes(t)?"code":"key"}function ta(t,e){const n=Re(()=>ht(e?.target)??CP),i=Pr(ht(t)===!0);let r=!1;const o=new Set;let s=l(ht(t));lt(()=>ht(t),(u,c)=>{typeof c=="boolean"&&typeof u!="boolean"&&a(),s=l(u)},{immediate:!0}),x_(["blur","contextmenu"],a),Jm((...u)=>s(...u),u=>{var c,d;const f=ht(e?.actInsideInputWithModifier)??!0,h=ht(e?.preventDefault)??!1;if(r=RP(u),(!r||r&&!f)&&Hf(u))return;const v=((d=(c=u.composedPath)==null?void 0:c.call(u))==null?void 0:d[0])||u.target,g=v?.nodeName==="BUTTON"||v?.nodeName==="A";!h&&(r||!g)&&u.preventDefault(),i.value=!0},{eventName:"keydown",target:n}),Jm((...u)=>s(...u),u=>{const c=ht(e?.actInsideInputWithModifier)??!0;if(i.value){if((!r||r&&!c)&&Hf(u))return;r=!1,i.value=!1}},{eventName:"keyup",target:n});function a(){r=!1,o.clear(),i.value=ht(t)===!0}function l(u){return u===null?(a(),()=>!1):typeof u=="boolean"?(a(),i.value=u,()=>!1):Array.isArray(u)||typeof u=="string"?IP(u,o):u}return i}const q_="vue-flow__node-desc",K_="vue-flow__edge-desc",NP="vue-flow__aria-live",Z_=["Enter"," ","Escape"],is={ArrowUp:{x:0,y:-1},ArrowDown:{x:0,y:1},ArrowLeft:{x:-1,y:0},ArrowRight:{x:1,y:0}};function xu(t){return{...t.computedPosition||{x:0,y:0},width:t.dimensions.width||0,height:t.dimensions.height||0}}function bu(t,e){const n=Math.max(0,Math.min(t.x+t.width,e.x+e.width)-Math.max(t.x,e.x)),i=Math.max(0,Math.min(t.y+t.height,e.y+e.height)-Math.max(t.y,e.y));return Math.ceil(n*i)}function nc(t){return{width:t.offsetWidth,height:t.offsetHeight}}function or(t,e=0,n=1){return Math.min(Math.max(t,e),n)}function j_(t,e){return{x:or(t.x,e[0][0],e[1][0]),y:or(t.y,e[0][1],e[1][1])}}function vg(t){const e=t.getRootNode();return"elementFromPoint"in e?e:window.document}function Vr(t){return t&&typeof t=="object"&&"id"in t&&"source"in t&&"target"in t}function yo(t){return t&&typeof t=="object"&&"id"in t&&"position"in t&&!Vr(t)}function Vs(t){return yo(t)&&"computedPosition"in t}function xl(t){return!Number.isNaN(t)&&Number.isFinite(t)}function DP(t){return xl(t.width)&&xl(t.height)&&xl(t.x)&&xl(t.y)}function LP(t,e,n){const i={id:t.id.toString(),type:t.type??"default",dimensions:go({width:0,height:0}),computedPosition:go({z:0,...t.position}),handleBounds:{source:[],target:[]},draggable:void 0,selectable:void 0,connectable:void 0,focusable:void 0,selected:!1,dragging:!1,resizing:!1,initialized:!1,isParent:!1,position:{x:0,y:0},data:$t(t.data)?t.data:{},events:go($t(t.events)?t.events:{})};return Object.assign(e??i,t,{id:t.id.toString(),parentNode:n})}function J_(t,e,n){var i,r;const o={id:t.id.toString(),type:t.type??e?.type??"default",source:t.source.toString(),target:t.target.toString(),sourceHandle:(i=t.sourceHandle)==null?void 0:i.toString(),targetHandle:(r=t.targetHandle)==null?void 0:r.toString(),updatable:t.updatable??n?.updatable,selectable:t.selectable??n?.selectable,focusable:t.focusable??n?.focusable,data:$t(t.data)?t.data:{},events:go($t(t.events)?t.events:{}),label:t.label??"",interactionWidth:t.interactionWidth??n?.interactionWidth,...n??{}};return Object.assign(e??o,t,{id:t.id.toString()})}function Q_(t,e,n,i){const r=typeof t=="string"?t:t.id,o=new Set,s=i==="source"?"target":"source";for(const a of n)a[s]===r&&o.add(a[i]);return e.filter(a=>o.has(a.id))}function FP(...t){if(t.length===3){const[o,s,a]=t;return Q_(o,s,a,"target")}const[e,n]=t,i=typeof e=="string"?e:e.id;return n.filter(o=>Vr(o)&&o.source===i).map(o=>n.find(s=>yo(s)&&s.id===o.target))}function UP(...t){if(t.length===3){const[o,s,a]=t;return Q_(o,s,a,"source")}const[e,n]=t,i=typeof e=="string"?e:e.id;return n.filter(o=>Vr(o)&&o.target===i).map(o=>n.find(s=>yo(s)&&s.id===o.source))}function ey({source:t,sourceHandle:e,target:n,targetHandle:i}){return`vueflow__edge-${t}${e??""}-${n}${i??""}`}function OP(t,e){return e.some(n=>Vr(n)&&n.source===t.source&&n.target===t.target&&(n.sourceHandle===t.sourceHandle||!n.sourceHandle&&!t.sourceHandle)&&(n.targetHandle===t.targetHandle||!n.targetHandle&&!t.targetHandle))}function _a({x:t,y:e},{x:n,y:i,zoom:r}){return{x:t*r+n,y:e*r+i}}function ya({x:t,y:e},{x:n,y:i,zoom:r},o=!1,s=[1,1]){const a={x:(t-n)/r,y:(e-i)/r};return o?ic(a,s):a}function ty(t,e){return{x:Math.min(t.x,e.x),y:Math.min(t.y,e.y),x2:Math.max(t.x2,e.x2),y2:Math.max(t.y2,e.y2)}}function Su({x:t,y:e,width:n,height:i}){return{x:t,y:e,x2:t+n,y2:e+i}}function ny({x:t,y:e,x2:n,y2:i}){return{x:t,y:e,width:n-t,height:i-e}}function BP(t,e){return ny(ty(Su(t),Su(e)))}function Wh(t){let e={x:Number.POSITIVE_INFINITY,y:Number.POSITIVE_INFINITY,x2:Number.NEGATIVE_INFINITY,y2:Number.NEGATIVE_INFINITY};for(let n=0;n<t.length;n++){const i=t[n];e=ty(e,Su({...i.computedPosition,...i.dimensions}))}return ny(e)}function iy(t,e,n={x:0,y:0,zoom:1},i=!1,r=!1){const o={...ya(e,n),width:e.width/n.zoom,height:e.height/n.zoom},s=[];for(const a of t){const{dimensions:l,selectable:u=!0,hidden:c=!1}=a,d=l.width??a.width??null,f=l.height??a.height??null;if(r&&!u||c)continue;const h=bu(o,xu(a)),m=d===null||f===null,v=i&&h>0,g=(d??0)*(f??0);(m||v||h>=g||a.dragging)&&s.push(a)}return s}function lo(t,e){const n=new Set;if(typeof t=="string")n.add(t);else if(t.length>=1)for(const i of t)n.add(i.id);return e.filter(i=>n.has(i.source)||n.has(i.target))}function Yo(t,e){if(typeof t=="number")return Math.floor((e-e/(1+t))*.5);if(typeof t=="string"&&t.endsWith("px")){const n=Number.parseFloat(t);if(!Number.isNaN(n))return Math.floor(n)}if(typeof t=="string"&&t.endsWith("%")){const n=Number.parseFloat(t);if(!Number.isNaN(n))return Math.floor(e*n*.01)}return Oa(`The padding value "${t}" is invalid. Please provide a number or a string with a valid unit (px or %).`),0}function kP(t,e,n){if(typeof t=="string"||typeof t=="number"){const i=Yo(t,n),r=Yo(t,e);return{top:i,right:r,bottom:i,left:r,x:r*2,y:i*2}}if(typeof t=="object"){const i=Yo(t.top??t.y??0,n),r=Yo(t.bottom??t.y??0,n),o=Yo(t.left??t.x??0,e),s=Yo(t.right??t.x??0,e);return{top:i,right:s,bottom:r,left:o,x:o+s,y:i+r}}return{top:0,right:0,bottom:0,left:0,x:0,y:0}}function zP(t,e,n,i,r,o){const{x:s,y:a}=_a(t,{x:e,y:n,zoom:i}),{x:l,y:u}=_a({x:t.x+t.width,y:t.y+t.height},{x:e,y:n,zoom:i}),c=r-l,d=o-u;return{left:Math.floor(s),top:Math.floor(a),right:Math.floor(c),bottom:Math.floor(d)}}function _g(t,e,n,i,r,o=.1){const s=kP(o,e,n),a=(e-s.x)/t.width,l=(n-s.y)/t.height,u=Math.min(a,l),c=or(u,i,r),d=t.x+t.width/2,f=t.y+t.height/2,h=e/2-d*c,m=n/2-f*c,v=zP(t,h,m,c,e,n),g={left:Math.min(v.left-s.left,0),top:Math.min(v.top-s.top,0),right:Math.min(v.right-s.right,0),bottom:Math.min(v.bottom-s.bottom,0)};return{x:h-g.left+g.right,y:m-g.top+g.bottom,zoom:c}}function VP(t,e){return{x:e.x+t.x,y:e.y+t.y,z:(t.z>e.z?t.z:e.z)+1}}function ry(t,e){if(!t.parentNode)return!1;const n=e.get(t.parentNode);return n?n.selected?!0:ry(n,e):!1}function xa(t,e){return typeof t>"u"?"":typeof t=="string"?t:`${e?`${e}__`:""}${Object.keys(t).sort().map(i=>`${i}=${t[i]}`).join("&")}`}function Gf(t){const e=t.ctrlKey&&ba()?10:1;return-t.deltaY*(t.deltaMode===1?.05:t.deltaMode?1:.002)*e}function yg(t,e,n){return t<e?or(Math.abs(t-e),1,e)/e:t>n?-or(Math.abs(t-n),1,e)/e:0}function oy(t,e,n=15,i=40){const r=yg(t.x,i,e.width-i)*n,o=yg(t.y,i,e.height-i)*n;return[r,o]}function hd(t,e){if(e){const n=t.position.x+t.dimensions.width-e.dimensions.width,i=t.position.y+t.dimensions.height-e.dimensions.height;if(n>0||i>0||t.position.x<0||t.position.y<0){let r={};if(typeof e.style=="function"?r={...e.style(e)}:e.style&&(r={...e.style}),r.width=r.width??`${e.dimensions.width}px`,r.height=r.height??`${e.dimensions.height}px`,n>0)if(typeof r.width=="string"){const o=Number(r.width.replace("px",""));r.width=`${o+n}px`}else r.width+=n;if(i>0)if(typeof r.height=="string"){const o=Number(r.height.replace("px",""));r.height=`${o+i}px`}else r.height+=i;if(t.position.x<0){const o=Math.abs(t.position.x);if(e.position.x=e.position.x-o,typeof r.width=="string"){const s=Number(r.width.replace("px",""));r.width=`${s+o}px`}else r.width+=o;t.position.x=0}if(t.position.y<0){const o=Math.abs(t.position.y);if(e.position.y=e.position.y-o,typeof r.height=="string"){const s=Number(r.height.replace("px",""));r.height=`${s+o}px`}else r.height+=o;t.position.y=0}e.dimensions.width=Number(r.width.toString().replace("px","")),e.dimensions.height=Number(r.height.toString().replace("px","")),typeof e.style=="function"?e.style=o=>{const s=e.style;return{...s(o),...r}}:e.style={...e.style,...r}}}}function xg(t,e){var n,i;const r=t.filter(s=>s.type==="add"||s.type==="remove");for(const s of r)if(s.type==="add")e.findIndex(l=>l.id===s.item.id)===-1&&e.push(s.item);else if(s.type==="remove"){const a=e.findIndex(l=>l.id===s.id);a!==-1&&e.splice(a,1)}const o=e.map(s=>s.id);for(const s of e)for(const a of t)if(a.id===s.id)switch(a.type){case"select":s.selected=a.selected;break;case"position":if(Vs(s)&&(typeof a.position<"u"&&(s.position=a.position),typeof a.dragging<"u"&&(s.dragging=a.dragging),s.expandParent&&s.parentNode)){const l=e[o.indexOf(s.parentNode)];l&&Vs(l)&&hd(s,l)}break;case"dimensions":if(Vs(s)&&(typeof a.dimensions<"u"&&(s.dimensions=a.dimensions),typeof a.updateStyle<"u"&&a.updateStyle&&(s.style={...s.style||{},width:`${(n=a.dimensions)==null?void 0:n.width}px`,height:`${(i=a.dimensions)==null?void 0:i.height}px`}),typeof a.resizing<"u"&&(s.resizing=a.resizing),s.expandParent&&s.parentNode)){const l=e[o.indexOf(s.parentNode)];l&&Vs(l)&&(!!l.dimensions.width&&!!l.dimensions.height?hd(s,l):pn(()=>{hd(s,l)}))}break}return e}function Sr(t,e){return{id:t,type:"select",selected:e}}function bg(t){return{item:t,type:"add"}}function Sg(t){return{id:t,type:"remove"}}function Mg(t,e,n,i,r){return{id:t,source:e,target:n,sourceHandle:i||null,targetHandle:r||null,type:"remove"}}function Tr(t,e=new Set,n=!1){const i=[];for(const[r,o]of t){const s=e.has(r);!(o.selected===void 0&&!s)&&o.selected!==s&&(n&&(o.selected=s),i.push(Sr(o.id,s)))}return i}const wg=()=>{};function $e(t){const e=new Set;let n=wg,i=()=>!1;const r=()=>e.size>0||i(),o=f=>{n=f},s=()=>{n=wg},a=f=>{i=f},l=()=>{i=()=>!1},u=f=>{e.delete(f)};return{on:f=>{e.add(f);const h=()=>u(f);return ha(h),{off:h}},off:u,trigger:f=>{const h=[n];return r()?h.push(...e):t&&h.push(t),Promise.allSettled(h.map(m=>m(f)))},hasListeners:r,listeners:e,setEmitter:o,removeEmitter:s,setHasEmitListeners:a,removeHasEmitListeners:l}}function Eg(t,e,n){let i=t;do{if(i&&i.matches(e))return!0;if(i===n)return!1;i=i.parentElement}while(i);return!1}function $P(t,e,n,i){var r,o;const s=new Map;for(const[a,l]of t)(l.selected||l.id===i)&&(!l.parentNode||!ry(l,t))&&(l.draggable||e&&typeof l.draggable>"u")&&t.get(a)&&s.set(a,{id:l.id,position:l.position||{x:0,y:0},distance:{x:n.x-((r=l.computedPosition)==null?void 0:r.x)||0,y:n.y-((o=l.computedPosition)==null?void 0:o.y)||0},from:{x:l.computedPosition.x,y:l.computedPosition.y},extent:l.extent,parentNode:l.parentNode,dimensions:{...l.dimensions},expandParent:l.expandParent});return Array.from(s.values())}function pd({id:t,dragItems:e,findNode:n}){const i=[];for(const r of e){const o=n(r.id);o&&i.push(o)}return[t?i.find(r=>r.id===t):i[0],i]}function sy(t){if(Array.isArray(t))switch(t.length){case 1:return[t[0],t[0],t[0],t[0]];case 2:return[t[0],t[1],t[0],t[1]];case 3:return[t[0],t[1],t[2],t[1]];case 4:return t;default:return[0,0,0,0]}return[t,t,t,t]}function HP(t,e,n){const[i,r,o,s]=typeof t!="string"?sy(t.padding):[0,0,0,0];return n&&typeof n.computedPosition.x<"u"&&typeof n.computedPosition.y<"u"&&typeof n.dimensions.width<"u"&&typeof n.dimensions.height<"u"?[[n.computedPosition.x+s,n.computedPosition.y+i],[n.computedPosition.x+n.dimensions.width-r,n.computedPosition.y+n.dimensions.height-o]]:!1}function GP(t,e,n,i){let r=t.extent||n;if((r==="parent"||!Array.isArray(r)&&r?.range==="parent")&&!t.expandParent)if(t.parentNode&&i&&t.dimensions.width&&t.dimensions.height){const o=HP(r,t,i);o&&(r=o)}else e(new Xt(Gt.NODE_EXTENT_INVALID,t.id)),r=n;else if(Array.isArray(r)){const o=i?.computedPosition.x||0,s=i?.computedPosition.y||0;r=[[r[0][0]+o,r[0][1]+s],[r[1][0]+o,r[1][1]+s]]}else if(r!=="parent"&&r?.range&&Array.isArray(r.range)){const[o,s,a,l]=sy(r.padding),u=i?.computedPosition.x||0,c=i?.computedPosition.y||0;r=[[r.range[0][0]+u+l,r.range[0][1]+c+o],[r.range[1][0]+u-s,r.range[1][1]+c-a]]}return r==="parent"?[[Number.NEGATIVE_INFINITY,Number.NEGATIVE_INFINITY],[Number.POSITIVE_INFINITY,Number.POSITIVE_INFINITY]]:r}function WP({width:t,height:e},n){return[n[0],[n[1][0]-(t||0),n[1][1]-(e||0)]]}function Xh(t,e,n,i,r){const o=WP(t.dimensions,GP(t,n,i,r)),s=j_(e,o);return{position:{x:s.x-(r?.computedPosition.x||0),y:s.y-(r?.computedPosition.y||0)},computedPosition:s}}function ms(t,e,n=Xe.Left,i=!1){const r=(e?.x??0)+t.computedPosition.x,o=(e?.y??0)+t.computedPosition.y,{width:s,height:a}=e??KP(t);if(i)return{x:r+s/2,y:o+a/2};switch(e?.position??n){case Xe.Top:return{x:r+s/2,y:o};case Xe.Right:return{x:r+s,y:o+a/2};case Xe.Bottom:return{x:r+s/2,y:o+a};case Xe.Left:return{x:r,y:o+a/2}}}function Tg(t,e){return t&&(e?t.find(n=>n.id===e):t[0])||null}function XP({sourcePos:t,targetPos:e,sourceWidth:n,sourceHeight:i,targetWidth:r,targetHeight:o,width:s,height:a,viewport:l}){const u={x:Math.min(t.x,e.x),y:Math.min(t.y,e.y),x2:Math.max(t.x+n,e.x+r),y2:Math.max(t.y+i,e.y+o)};u.x===u.x2&&(u.x2+=1),u.y===u.y2&&(u.y2+=1);const c=Su({x:(0-l.x)/l.zoom,y:(0-l.y)/l.zoom,width:s/l.zoom,height:a/l.zoom}),d=Math.max(0,Math.min(c.x2,u.x2)-Math.max(c.x,u.x)),f=Math.max(0,Math.min(c.y2,u.y2)-Math.max(c.y,u.y));return Math.ceil(d*f)>0}function YP(t,e,n=!1){const i=typeof t.zIndex=="number";let r=i?t.zIndex:0;const o=e(t.source),s=e(t.target);return!o||!s?0:(n&&(r=i?t.zIndex:Math.max(o.computedPosition.z||0,s.computedPosition.z||0)),r)}var Gt=(t=>(t.MISSING_STYLES="MISSING_STYLES",t.MISSING_VIEWPORT_DIMENSIONS="MISSING_VIEWPORT_DIMENSIONS",t.NODE_INVALID="NODE_INVALID",t.NODE_NOT_FOUND="NODE_NOT_FOUND",t.NODE_MISSING_PARENT="NODE_MISSING_PARENT",t.NODE_TYPE_MISSING="NODE_TYPE_MISSING",t.NODE_EXTENT_INVALID="NODE_EXTENT_INVALID",t.EDGE_INVALID="EDGE_INVALID",t.EDGE_NOT_FOUND="EDGE_NOT_FOUND",t.EDGE_SOURCE_MISSING="EDGE_SOURCE_MISSING",t.EDGE_TARGET_MISSING="EDGE_TARGET_MISSING",t.EDGE_TYPE_MISSING="EDGE_TYPE_MISSING",t.EDGE_SOURCE_TARGET_SAME="EDGE_SOURCE_TARGET_SAME",t.EDGE_SOURCE_TARGET_MISSING="EDGE_SOURCE_TARGET_MISSING",t.EDGE_ORPHANED="EDGE_ORPHANED",t.USEVUEFLOW_OPTIONS="USEVUEFLOW_OPTIONS",t))(Gt||{});const Ag={MISSING_STYLES:()=>"It seems that you haven't loaded the necessary styles. Please import '@vue-flow/core/dist/style.css' to ensure that the graph is rendered correctly",MISSING_VIEWPORT_DIMENSIONS:()=>"The Vue Flow parent container needs a width and a height to render the graph",NODE_INVALID:t=>`Node is invalid
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
Edge: ${t}`,USEVUEFLOW_OPTIONS:()=>"The options parameter is deprecated and will be removed in the next major version. Please use the id parameter instead"};class Xt extends Error{constructor(e,...n){var i;super((i=Ag[e])==null?void 0:i.call(Ag,...n)),this.name="VueFlowError",this.code=e,this.args=n}}function Yh(t){return"clientX"in t}function qP(t){return"sourceEvent"in t}function fi(t,e){const n=Yh(t);let i,r;return n?(i=t.clientX,r=t.clientY):"touches"in t&&t.touches.length>0?(i=t.touches[0].clientX,r=t.touches[0].clientY):"changedTouches"in t&&t.changedTouches.length>0?(i=t.changedTouches[0].clientX,r=t.changedTouches[0].clientY):(i=0,r=0),{x:i-(e?.left??0),y:r-(e?.top??0)}}const ba=()=>{var t;return typeof navigator<"u"&&((t=navigator?.userAgent)==null?void 0:t.indexOf("Mac"))>=0};function KP(t){var e,n;return{width:((e=t.dimensions)==null?void 0:e.width)??t.width??0,height:((n=t.dimensions)==null?void 0:n.height)??t.height??0}}function ic(t,e=[1,1]){return{x:e[0]*Math.round(t.x/e[0]),y:e[1]*Math.round(t.y/e[1])}}const ZP=()=>!0;function md(t){t?.classList.remove("valid","connecting","vue-flow__handle-valid","vue-flow__handle-connecting")}function jP(t,e,n){const i=[],r={x:t.x-n,y:t.y-n,width:n*2,height:n*2};for(const o of e.values())bu(r,xu(o))>0&&i.push(o);return i}const JP=250;function QP(t,e,n,i){var r,o;let s=[],a=Number.POSITIVE_INFINITY;const l=jP(t,n,e+JP);for(const u of l){const c=[...((r=u.handleBounds)==null?void 0:r.source)??[],...((o=u.handleBounds)==null?void 0:o.target)??[]];for(const d of c){if(i.nodeId===d.nodeId&&i.type===d.type&&i.id===d.id)continue;const{x:f,y:h}=ms(u,d,d.position,!0),m=Math.sqrt((f-t.x)**2+(h-t.y)**2);m>e||(m<a?(s=[{...d,x:f,y:h}],a=m):m===a&&s.push({...d,x:f,y:h}))}}if(!s.length)return null;if(s.length>1){const u=i.type==="source"?"target":"source";return s.find(c=>c.type===u)??s[0]}return s[0]}function Cg(t,{handle:e,connectionMode:n,fromNodeId:i,fromHandleId:r,fromType:o,doc:s,lib:a,flowId:l,isValidConnection:u=ZP},c,d,f,h){const m=o==="target",v=e?s.querySelector(`.${a}-flow__handle[data-id="${l}-${e?.nodeId}-${e?.id}-${e?.type}"]`):null,{x:g,y:p}=fi(t),b=s.elementFromPoint(g,p),M=b?.classList.contains(`${a}-flow__handle`)?b:v,y={handleDomNode:M,isValid:!1,connection:null,toHandle:null};if(M){const I=ay(void 0,M),D=M.getAttribute("data-nodeid"),B=M.getAttribute("data-handleid"),_=M.classList.contains("connectable"),x=M.classList.contains("connectableend");if(!D||!I)return y;const R={source:m?D:i,sourceHandle:m?B:r,target:m?i:D,targetHandle:m?r:B};y.connection=R;const A=_&&x&&(n===zr.Strict?m&&I==="source"||!m&&I==="target":D!==i||B!==r);y.isValid=A&&u(R,{nodes:d,edges:c,sourceNode:f(R.source),targetNode:f(R.target)}),y.toHandle=ly(D,I,B,h,n,!0)}return y}function ay(t,e){return t||(e?.classList.contains("target")?"target":e?.classList.contains("source")?"source":null)}function e3(t,e){let n=null;return e?n="valid":t&&!e&&(n="invalid"),n}function t3(t,e){let n=null;return e?n=!0:t&&!e&&(n=!1),n}function ly(t,e,n,i,r,o=!1){var s,a,l;const u=i.get(t);if(!u)return null;const c=r===zr.Strict?(s=u.handleBounds)==null?void 0:s[e]:[...((a=u.handleBounds)==null?void 0:a.source)??[],...((l=u.handleBounds)==null?void 0:l.target)??[]],d=(n?c?.find(f=>f.id===n):c?.[0])??null;return d&&o?{...d,...ms(u,d,d.position,!0)}:d}const Wf={[Xe.Left]:Xe.Right,[Xe.Right]:Xe.Left,[Xe.Top]:Xe.Bottom,[Xe.Bottom]:Xe.Top},n3=["production","prod"];function Oa(t,...e){uy()&&console.warn(`[Vue Flow]: ${t}`,...e)}function uy(){return!n3.includes("production")}function Rg(t,e,n,i,r){const o=e.querySelectorAll(`.vue-flow__handle.${t}`);return o?.length?Array.from(o).map(s=>{const a=s.getBoundingClientRect();return{id:s.getAttribute("data-handleid"),type:t,nodeId:r,position:s.getAttribute("data-handlepos"),x:(a.left-n.left)/i,y:(a.top-n.top)/i,...nc(s)}}):null}function Xf(t,e,n,i,r,o=!1,s){r.value=!1,t.selected?(o||t.selected&&e)&&(i([t]),pn(()=>{s.blur()})):n([t])}function $t(t){return typeof he(t)<"u"}function i3(t,e,n,i){if(!t||!t.source||!t.target)return n(new Xt(Gt.EDGE_INVALID,t?.id??"[ID UNKNOWN]")),!1;let r;return Vr(t)?r=t:r={...t,id:ey(t)},r=J_(r,void 0,i),OP(r,e)?!1:r}function r3(t,e,n,i,r){if(!e.source||!e.target)return r(new Xt(Gt.EDGE_INVALID,t.id)),!1;if(!n)return r(new Xt(Gt.EDGE_NOT_FOUND,t.id)),!1;const{id:o,...s}=t;return{...s,id:i?ey(e):o,source:e.source,target:e.target,sourceHandle:e.sourceHandle,targetHandle:e.targetHandle}}function Ig(t,e,n){const i={},r=[];for(let o=0;o<t.length;++o){const s=t[o];if(!yo(s)){n(new Xt(Gt.NODE_INVALID,s?.id)||`[ID UNKNOWN|INDEX ${o}]`);continue}const a=LP(s,e(s.id),s.parentNode);s.parentNode&&(i[s.parentNode]=!0),r[o]=a}for(const o of r){const s=e(o.parentNode)||r.find(a=>a.id===o.parentNode);o.parentNode&&!s&&n(new Xt(Gt.NODE_MISSING_PARENT,o.id,o.parentNode)),(o.parentNode||i[o.id])&&(i[o.id]&&(o.isParent=!0),s&&(s.isParent=!0))}return r}function Pg(t,e,n,i,r,o){let s=r;const a=i.get(s)||new Map;i.set(s,a.set(n,e)),s=`${r}-${t}`;const l=i.get(s)||new Map;if(i.set(s,l.set(n,e)),o){s=`${r}-${t}-${o}`;const u=i.get(s)||new Map;i.set(s,u.set(n,e))}}function gd(t,e,n){t.clear();for(const i of n){const{source:r,target:o,sourceHandle:s=null,targetHandle:a=null}=i,l={edgeId:i.id,source:r,target:o,sourceHandle:s,targetHandle:a},u=`${r}-${s}--${o}-${a}`,c=`${o}-${a}--${r}-${s}`;Pg("source",l,c,t,r,s),Pg("target",l,u,t,o,a)}}function Ng(t,e){if(t.size!==e.size)return!1;for(const n of t)if(!e.has(n))return!1;return!0}function vd(t,e,n,i,r,o,s,a){const l=[];for(const u of t){const c=Vr(u)?u:i3(u,a,r,o);if(!c)continue;const d=n(c.source),f=n(c.target);if(!d||!f){r(new Xt(Gt.EDGE_SOURCE_TARGET_MISSING,c.id,c.source,c.target));continue}if(!d){r(new Xt(Gt.EDGE_SOURCE_MISSING,c.id,c.source));continue}if(!f){r(new Xt(Gt.EDGE_TARGET_MISSING,c.id,c.target));continue}if(e&&!e(c,{edges:a,nodes:s,sourceNode:d,targetNode:f})){r(new Xt(Gt.EDGE_INVALID,c.id));continue}const h=i(c.id);l.push({...J_(c,h,o),sourceNode:d,targetNode:f})}return l}const Dg=Symbol("vueFlow"),qh=Symbol("nodeId"),cy=Symbol("nodeRef"),o3=Symbol("edgeId"),s3=Symbol("edgeRef"),rc=Symbol("slots");function dy(t){const{vueFlowRef:e,snapToGrid:n,snapGrid:i,noDragClassName:r,nodeLookup:o,nodeExtent:s,nodeDragThreshold:a,viewport:l,autoPanOnNodeDrag:u,autoPanSpeed:c,nodesDraggable:d,panBy:f,findNode:h,multiSelectionActive:m,nodesSelectionActive:v,selectNodesOnDrag:g,removeSelectedElements:p,addSelectedNodes:b,updateNodePositions:M,emits:y}=Dt(),{onStart:I,onDrag:D,onStop:B,onClick:_,el:x,disabled:R,id:T,selectable:A,dragHandle:X}=t,E=Pr(!1);let k=[],C,N=null,U={x:void 0,y:void 0},H={x:0,y:0},G=null,ne=!1,re=!1,ye=0,we=!1;const te=fy(),L=({x:$,y:W})=>{U={x:$,y:W};let F=!1;if(k=k.map(O=>{const z={x:$-O.distance.x,y:W-O.distance.y},{computedPosition:Y}=Xh(O,n.value?ic(z,i.value):z,y.error,s.value,O.parentNode?h(O.parentNode):void 0);return F=F||O.position.x!==Y.x||O.position.y!==Y.y,O.position=Y,O}),re=re||F,!!F&&(M(k,!0,!0),E.value=!0,G)){const[O,z]=pd({id:T,dragItems:k,findNode:h});D({event:G,node:O,nodes:z})}},j=()=>{if(!N)return;const[$,W]=oy(H,N,c.value);if($!==0||W!==0){const F={x:(U.x??0)-$/l.value.zoom,y:(U.y??0)-W/l.value.zoom};f({x:$,y:W})&&L(F)}ye=requestAnimationFrame(j)},Q=($,W)=>{ne=!0;const F=h(T);!g.value&&!m.value&&F&&(F.selected||p()),F&&ht(A)&&g.value&&Xf(F,m.value,b,p,v,!1,W);const O=te($.sourceEvent);if(U=O,k=$P(o.value,d.value,O,T),k.length){const[z,Y]=pd({id:T,dragItems:k,findNode:h});I({event:$.sourceEvent,node:z,nodes:Y})}},fe=($,W)=>{var F;$.sourceEvent.type==="touchmove"&&$.sourceEvent.touches.length>1||(re=!1,a.value===0&&Q($,W),U=te($.sourceEvent),N=((F=e.value)==null?void 0:F.getBoundingClientRect())||null,H=fi($.sourceEvent,N))},Se=($,W)=>{const F=te($.sourceEvent);if(!we&&ne&&u.value&&(we=!0,j()),!ne){const O=F.xSnapped-(U.x??0),z=F.ySnapped-(U.y??0);Math.sqrt(O*O+z*z)>a.value&&Q($,W)}(U.x!==F.xSnapped||U.y!==F.ySnapped)&&k.length&&ne&&(G=$.sourceEvent,H=fi($.sourceEvent,N),L(F))},Ee=$=>{let W=!1;if(!ne&&!E.value&&!m.value){const F=$.sourceEvent,O=te(F),z=O.xSnapped-(U.x??0),Y=O.ySnapped-(U.y??0),S=Math.sqrt(z*z+Y*Y);S!==0&&S<=a.value&&(_?.(F),W=!0)}if(k.length&&!W){re&&(M(k,!1,!1),re=!1);const[F,O]=pd({id:T,dragItems:k,findNode:h});B({event:$.sourceEvent,node:F,nodes:O})}k=[],E.value=!1,we=!1,ne=!1,U={x:void 0,y:void 0},cancelAnimationFrame(ye)};return lt([()=>ht(R),x],([$,W],F,O)=>{if(W){const z=Xn(W);$||(C=DR().on("start",Y=>fe(Y,W)).on("drag",Y=>Se(Y,W)).on("end",Y=>Ee(Y)).filter(Y=>{const S=Y.target,Z=ht(X);return!Y.button&&(!r.value||!Eg(S,`.${r.value}`,W)&&(!Z||Eg(S,Z,W)))}),z.call(C)),O(()=>{z.on(".drag",null),C&&(C.on("start",null),C.on("drag",null),C.on("end",null))})}}),E}function a3(){return{doubleClick:$e(),click:$e(),mouseEnter:$e(),mouseMove:$e(),mouseLeave:$e(),contextMenu:$e(),updateStart:$e(),update:$e(),updateEnd:$e()}}function l3(t,e){const n=a3();return n.doubleClick.on(i=>{var r,o;e.edgeDoubleClick(i),(o=(r=t.events)==null?void 0:r.doubleClick)==null||o.call(r,i)}),n.click.on(i=>{var r,o;e.edgeClick(i),(o=(r=t.events)==null?void 0:r.click)==null||o.call(r,i)}),n.mouseEnter.on(i=>{var r,o;e.edgeMouseEnter(i),(o=(r=t.events)==null?void 0:r.mouseEnter)==null||o.call(r,i)}),n.mouseMove.on(i=>{var r,o;e.edgeMouseMove(i),(o=(r=t.events)==null?void 0:r.mouseMove)==null||o.call(r,i)}),n.mouseLeave.on(i=>{var r,o;e.edgeMouseLeave(i),(o=(r=t.events)==null?void 0:r.mouseLeave)==null||o.call(r,i)}),n.contextMenu.on(i=>{var r,o;e.edgeContextMenu(i),(o=(r=t.events)==null?void 0:r.contextMenu)==null||o.call(r,i)}),n.updateStart.on(i=>{var r,o;e.edgeUpdateStart(i),(o=(r=t.events)==null?void 0:r.updateStart)==null||o.call(r,i)}),n.update.on(i=>{var r,o;e.edgeUpdate(i),(o=(r=t.events)==null?void 0:r.update)==null||o.call(r,i)}),n.updateEnd.on(i=>{var r,o;e.edgeUpdateEnd(i),(o=(r=t.events)==null?void 0:r.updateEnd)==null||o.call(r,i)}),Object.entries(n).reduce((i,[r,o])=>(i.emit[r]=o.trigger,i.on[r]=o.on,i),{emit:{},on:{}})}function fy(){const{viewport:t,snapGrid:e,snapToGrid:n,vueFlowRef:i}=Dt();return r=>{var o;const s=((o=i.value)==null?void 0:o.getBoundingClientRect())??{left:0,top:0},a=qP(r)?r.sourceEvent:r,{x:l,y:u}=fi(a,s),c=ya({x:l,y:u},t.value),{x:d,y:f}=n.value?ic(c,e.value):c;return{xSnapped:d,ySnapped:f,...c}}}function bl(){return!0}function hy({handleId:t,nodeId:e,type:n,isValidConnection:i,edgeUpdaterType:r,onEdgeUpdate:o,onEdgeUpdateEnd:s}){const{id:a,vueFlowRef:l,connectionMode:u,connectionRadius:c,connectOnClick:d,connectionClickStartHandle:f,nodesConnectable:h,autoPanOnConnect:m,autoPanSpeed:v,findNode:g,panBy:p,startConnection:b,updateConnection:M,endConnection:y,emits:I,viewport:D,edges:B,nodes:_,isValidConnection:x,nodeLookup:R}=Dt();let T=null,A=!1,X=null;function E(C){var N;const U=ht(n)==="target",H=Yh(C),G=vg(C.target),ne=C.currentTarget;if(ne&&(H&&C.button===0||!H)){let re=function(ie){F=fi(ie,Ee),L=QP(ya(F,D.value,!1,[1,1]),c.value,R.value,Y),O||(z(),O=!0);const P=Cg(ie,{handle:L,connectionMode:u.value,fromNodeId:ht(e),fromHandleId:ht(t),fromType:U?"target":"source",isValidConnection:te,doc:G,lib:"vue",flowId:a,nodeLookup:R.value},B.value,_.value,g,R.value);X=P.handleDomNode,T=P.connection,A=t3(!!L,P.isValid);const w={...ee,isValid:A,to:P.toHandle&&A?_a({x:P.toHandle.x,y:P.toHandle.y},D.value):F,toHandle:P.toHandle,toPosition:A&&P.toHandle?P.toHandle.position:Wf[Y.position],toNode:P.toHandle?R.value.get(P.toHandle.nodeId):null};if(A&&L&&ee?.toHandle&&w.toHandle&&ee.toHandle.type===w.toHandle.type&&ee.toHandle.nodeId===w.toHandle.nodeId&&ee.toHandle.id===w.toHandle.id&&ee.to.x===w.to.x&&ee.to.y===w.to.y)return;const K=L??P.toHandle;if(M(K&&A?_a({x:K.x,y:K.y},D.value):F,K,e3(!!K,A)),ee=w,!L&&!A&&!X)return md(W);T&&T.source!==T.target&&X&&(md(W),W=X,X.classList.add("connecting","vue-flow__handle-connecting"),X.classList.toggle("valid",!!A),X.classList.toggle("vue-flow__handle-valid",!!A))},ye=function(ie){"touches"in ie&&ie.touches.length>0||((L||X)&&T&&A&&(o?o(ie,T):I.connect(T)),I.connectEnd(ie),r&&s?.(ie),md(W),cancelAnimationFrame(j),y(ie),O=!1,A=!1,T=null,X=null,G.removeEventListener("mousemove",re),G.removeEventListener("mouseup",ye),G.removeEventListener("touchmove",re),G.removeEventListener("touchend",ye))};const we=g(ht(e));let te=ht(i)||x.value||bl;!te&&we&&(te=(U?we.isValidSourcePos:we.isValidTargetPos)||bl);let L,j=0;const{x:Q,y:fe}=fi(C),Se=ay(ht(r),ne),Ee=(N=l.value)==null?void 0:N.getBoundingClientRect();if(!Ee||!Se)return;const $=ly(ht(e),Se,ht(t),R.value,u.value);if(!$)return;let W,F=fi(C,Ee),O=!1;const z=()=>{if(!m.value)return;const[ie,P]=oy(F,Ee,v.value);p({x:ie,y:P}),j=requestAnimationFrame(z)},Y={...$,nodeId:ht(e),type:Se,position:$.position},S=R.value.get(ht(e)),J={inProgress:!0,isValid:null,from:ms(S,Y,Xe.Left,!0),fromHandle:Y,fromPosition:Y.position,fromNode:S,to:F,toHandle:null,toPosition:Wf[Y.position],toNode:null};b({nodeId:ht(e),id:ht(t),type:Se,position:ne?.getAttribute("data-handlepos")||Xe.Top,...F},{x:Q-Ee.left,y:fe-Ee.top}),I.connectStart({event:C,nodeId:ht(e),handleId:ht(t),handleType:Se});let ee=J;G.addEventListener("mousemove",re),G.addEventListener("mouseup",ye),G.addEventListener("touchmove",re),G.addEventListener("touchend",ye)}}function k(C){var N,U;if(!d.value)return;const H=ht(n)==="target";if(!f.value){I.clickConnectStart({event:C,nodeId:ht(e),handleId:ht(t)}),b({nodeId:ht(e),type:ht(n),id:ht(t),position:Xe.Top,...fi(C)},void 0,!0);return}let G=ht(i)||x.value||bl;const ne=g(ht(e));if(!G&&ne&&(G=(H?ne.isValidSourcePos:ne.isValidTargetPos)||bl),ne&&(typeof ne.connectable>"u"?h.value:ne.connectable)===!1)return;const re=vg(C.target),ye=Cg(C,{handle:{nodeId:ht(e),id:ht(t),type:ht(n),position:Xe.Top,...fi(C)},connectionMode:u.value,fromNodeId:f.value.nodeId,fromHandleId:f.value.id??null,fromType:f.value.type,isValidConnection:G,doc:re,lib:"vue",flowId:a,nodeLookup:R.value},B.value,_.value,g,R.value),we=((N=ye.connection)==null?void 0:N.source)===((U=ye.connection)==null?void 0:U.target);ye.isValid&&ye.connection&&!we&&I.connect(ye.connection),I.clickConnectEnd(C),y(C,!0)}return{handlePointerDown:E,handleClick:k}}function u3(){return Pn(qh,"")}function py(t){const e=t??u3()??"",n=Pn(cy,Ce(null)),{findNode:i,edges:r,emits:o}=Dt(),s=i(e);return s||o.error(new Xt(Gt.NODE_NOT_FOUND,e)),{id:e,nodeEl:n,node:s,parentNode:Re(()=>i(s.parentNode)),connectedEdges:Re(()=>lo([s],r.value))}}function c3(){return{doubleClick:$e(),click:$e(),mouseEnter:$e(),mouseMove:$e(),mouseLeave:$e(),contextMenu:$e(),dragStart:$e(),drag:$e(),dragStop:$e()}}function d3(t,e){const n=c3();return n.doubleClick.on(i=>{var r,o;e.nodeDoubleClick(i),(o=(r=t.events)==null?void 0:r.doubleClick)==null||o.call(r,i)}),n.click.on(i=>{var r,o;e.nodeClick(i),(o=(r=t.events)==null?void 0:r.click)==null||o.call(r,i)}),n.mouseEnter.on(i=>{var r,o;e.nodeMouseEnter(i),(o=(r=t.events)==null?void 0:r.mouseEnter)==null||o.call(r,i)}),n.mouseMove.on(i=>{var r,o;e.nodeMouseMove(i),(o=(r=t.events)==null?void 0:r.mouseMove)==null||o.call(r,i)}),n.mouseLeave.on(i=>{var r,o;e.nodeMouseLeave(i),(o=(r=t.events)==null?void 0:r.mouseLeave)==null||o.call(r,i)}),n.contextMenu.on(i=>{var r,o;e.nodeContextMenu(i),(o=(r=t.events)==null?void 0:r.contextMenu)==null||o.call(r,i)}),n.dragStart.on(i=>{var r,o;e.nodeDragStart(i),(o=(r=t.events)==null?void 0:r.dragStart)==null||o.call(r,i)}),n.drag.on(i=>{var r,o;e.nodeDrag(i),(o=(r=t.events)==null?void 0:r.drag)==null||o.call(r,i)}),n.dragStop.on(i=>{var r,o;e.nodeDragStop(i),(o=(r=t.events)==null?void 0:r.dragStop)==null||o.call(r,i)}),Object.entries(n).reduce((i,[r,o])=>(i.emit[r]=o.trigger,i.on[r]=o.on,i),{emit:{},on:{}})}function my(){const{getSelectedNodes:t,nodeExtent:e,updateNodePositions:n,findNode:i,snapGrid:r,snapToGrid:o,nodesDraggable:s,emits:a}=Dt();return(l,u=!1)=>{const c=o.value?r.value[0]:5,d=o.value?r.value[1]:5,f=u?4:1,h=l.x*c*f,m=l.y*d*f,v=[];for(const g of t.value)if(g.draggable||s&&typeof g.draggable>"u"){const p={x:g.computedPosition.x+h,y:g.computedPosition.y+m},{position:b}=Xh(g,p,a.error,e.value,g.parentNode?i(g.parentNode):void 0);v.push({id:g.id,position:b,from:g.position,distance:{x:l.x,y:l.y},dimensions:g.dimensions})}n(v,!0,!1)}}const Sl=.1,f3=t=>((t*=2)<=1?t*t*t:(t-=2)*t*t+2)/2;function yr(){return Oa("Viewport not initialized yet."),Promise.resolve(!1)}const h3={zoomIn:yr,zoomOut:yr,zoomTo:yr,fitView:yr,setCenter:yr,fitBounds:yr,project:t=>t,screenToFlowCoordinate:t=>t,flowToScreenCoordinate:t=>t,setViewport:yr,setTransform:yr,getViewport:()=>({x:0,y:0,zoom:1}),getTransform:()=>({x:0,y:0,zoom:1}),viewportInitialized:!1};function p3(t){function e(i,r){return new Promise(o=>{t.d3Selection&&t.d3Zoom?t.d3Zoom.interpolate(r?.interpolate==="linear"?Qs:$l).scaleBy(_d(t.d3Selection,r?.duration,r?.ease,()=>{o(!0)}),i):o(!1)})}function n(i,r,o,s){return new Promise(a=>{var l;const{x:u,y:c}=j_({x:-i,y:-r},t.translateExtent),d=ps.translate(-u,-c).scale(o);t.d3Selection&&t.d3Zoom?(l=t.d3Zoom)==null||l.interpolate(s?.interpolate==="linear"?Qs:$l).transform(_d(t.d3Selection,s?.duration,s?.ease,()=>{a(!0)}),d):a(!1)})}return Re(()=>t.d3Zoom&&t.d3Selection&&t.dimensions.width&&t.dimensions.height?{viewportInitialized:!0,zoomIn:r=>e(1.2,r),zoomOut:r=>e(1/1.2,r),zoomTo:(r,o)=>new Promise(s=>{t.d3Selection&&t.d3Zoom?t.d3Zoom.interpolate(o?.interpolate==="linear"?Qs:$l).scaleTo(_d(t.d3Selection,o?.duration,o?.ease,()=>{s(!0)}),r):s(!1)}),setViewport:(r,o)=>n(r.x,r.y,r.zoom,o),setTransform:(r,o)=>n(r.x,r.y,r.zoom,o),getViewport:()=>({x:t.viewport.x,y:t.viewport.y,zoom:t.viewport.zoom}),getTransform:()=>({x:t.viewport.x,y:t.viewport.y,zoom:t.viewport.zoom}),fitView:(r={padding:Sl,includeHiddenNodes:!1,duration:0})=>{var o,s;const a=[];for(const f of t.nodes)f.dimensions.width&&f.dimensions.height&&(r?.includeHiddenNodes||!f.hidden)&&(!((o=r.nodes)!=null&&o.length)||(s=r.nodes)!=null&&s.length&&r.nodes.includes(f.id))&&a.push(f);if(!a.length)return Promise.resolve(!1);const l=Wh(a),{x:u,y:c,zoom:d}=_g(l,t.dimensions.width,t.dimensions.height,r.minZoom??t.minZoom,r.maxZoom??t.maxZoom,r.padding??Sl);return n(u,c,d,r)},setCenter:(r,o,s)=>{const a=typeof s?.zoom<"u"?s.zoom:t.maxZoom,l=t.dimensions.width/2-r*a,u=t.dimensions.height/2-o*a;return n(l,u,a,s)},fitBounds:(r,o={padding:Sl})=>{const{x:s,y:a,zoom:l}=_g(r,t.dimensions.width,t.dimensions.height,t.minZoom,t.maxZoom,o.padding??Sl);return n(s,a,l,o)},project:r=>ya(r,t.viewport,t.snapToGrid,t.snapGrid),screenToFlowCoordinate:r=>{if(t.vueFlowRef){const{x:o,y:s}=t.vueFlowRef.getBoundingClientRect(),a={x:r.x-o,y:r.y-s};return ya(a,t.viewport,t.snapToGrid,t.snapGrid)}return{x:0,y:0}},flowToScreenCoordinate:r=>{if(t.vueFlowRef){const{x:o,y:s}=t.vueFlowRef.getBoundingClientRect(),a={x:r.x+o,y:r.y+s};return _a(a,t.viewport)}return{x:0,y:0}}}:h3)}function _d(t,e=0,n=f3,i=()=>{}){const r=typeof e=="number"&&e>0;return r||i(),r?t.transition().duration(e).ease(n).on("end",i):t}function m3(t,e,n){const i=Fu(!0);return i.run(()=>{const r=()=>{i.run(()=>{let v,g,p=!!(n.nodes.value.length||n.edges.value.length);v=Xo([t.modelValue,()=>{var b,M;return(M=(b=t.modelValue)==null?void 0:b.value)==null?void 0:M.length}],([b])=>{b&&Array.isArray(b)&&(g?.pause(),n.setElements(b),!g&&!p&&b.length?p=!0:g?.resume())}),g=Xo([n.nodes,n.edges,()=>n.edges.value.length,()=>n.nodes.value.length],([b,M])=>{var y;(y=t.modelValue)!=null&&y.value&&Array.isArray(t.modelValue.value)&&(v?.pause(),t.modelValue.value=[...b,...M],pn(()=>{v?.resume()}))},{immediate:p}),Ws(()=>{v?.stop(),g?.stop()})})},o=()=>{i.run(()=>{let v,g,p=!!n.nodes.value.length;v=Xo([t.nodes,()=>{var b,M;return(M=(b=t.nodes)==null?void 0:b.value)==null?void 0:M.length}],([b])=>{b&&Array.isArray(b)&&(g?.pause(),n.setNodes(b),!g&&!p&&b.length?p=!0:g?.resume())}),g=Xo([n.nodes,()=>n.nodes.value.length],([b])=>{var M;(M=t.nodes)!=null&&M.value&&Array.isArray(t.nodes.value)&&(v?.pause(),t.nodes.value=[...b],pn(()=>{v?.resume()}))},{immediate:p}),Ws(()=>{v?.stop(),g?.stop()})})},s=()=>{i.run(()=>{let v,g,p=!!n.edges.value.length;v=Xo([t.edges,()=>{var b,M;return(M=(b=t.edges)==null?void 0:b.value)==null?void 0:M.length}],([b])=>{b&&Array.isArray(b)&&(g?.pause(),n.setEdges(b),!g&&!p&&b.length?p=!0:g?.resume())}),g=Xo([n.edges,()=>n.edges.value.length],([b])=>{var M;(M=t.edges)!=null&&M.value&&Array.isArray(t.edges.value)&&(v?.pause(),t.edges.value=[...b],pn(()=>{v?.resume()}))},{immediate:p}),Ws(()=>{v?.stop(),g?.stop()})})},a=()=>{i.run(()=>{lt(()=>e.maxZoom,()=>{e.maxZoom&&$t(e.maxZoom)&&n.setMaxZoom(e.maxZoom)},{immediate:!0})})},l=()=>{i.run(()=>{lt(()=>e.minZoom,()=>{e.minZoom&&$t(e.minZoom)&&n.setMinZoom(e.minZoom)},{immediate:!0})})},u=()=>{i.run(()=>{lt(()=>e.translateExtent,()=>{e.translateExtent&&$t(e.translateExtent)&&n.setTranslateExtent(e.translateExtent)},{immediate:!0})})},c=()=>{i.run(()=>{lt(()=>e.nodeExtent,()=>{e.nodeExtent&&$t(e.nodeExtent)&&n.setNodeExtent(e.nodeExtent)},{immediate:!0})})},d=()=>{i.run(()=>{lt(()=>e.applyDefault,()=>{$t(e.applyDefault)&&(n.applyDefault.value=e.applyDefault)},{immediate:!0})})},f=()=>{i.run(()=>{const v=async g=>{let p=g;typeof e.autoConnect=="function"&&(p=await e.autoConnect(g)),p!==!1&&n.addEdges([p])};lt(()=>e.autoConnect,()=>{$t(e.autoConnect)&&(n.autoConnect.value=e.autoConnect)},{immediate:!0}),lt(n.autoConnect,(g,p,b)=>{g?n.onConnect(v):n.hooks.value.connect.off(v),b(()=>{n.hooks.value.connect.off(v)})},{immediate:!0})})},h=()=>{const v=["id","modelValue","translateExtent","nodeExtent","edges","nodes","maxZoom","minZoom","applyDefault","autoConnect"];for(const g of Object.keys(e)){const p=g;if(!v.includes(p)){const b=bt(()=>e[p]),M=n[p];Ut(M)&&i.run(()=>{lt(b,y=>{$t(y)&&(M.value=y)},{immediate:!0})})}}};r(),o(),s(),l(),a(),u(),c(),d(),f(),h()}),()=>i.stop()}function g3(){return{edgesChange:$e(),nodesChange:$e(),nodeDoubleClick:$e(),nodeClick:$e(),nodeMouseEnter:$e(),nodeMouseMove:$e(),nodeMouseLeave:$e(),nodeContextMenu:$e(),nodeDragStart:$e(),nodeDrag:$e(),nodeDragStop:$e(),nodesInitialized:$e(),miniMapNodeClick:$e(),miniMapNodeDoubleClick:$e(),miniMapNodeMouseEnter:$e(),miniMapNodeMouseMove:$e(),miniMapNodeMouseLeave:$e(),connect:$e(),connectStart:$e(),connectEnd:$e(),clickConnectStart:$e(),clickConnectEnd:$e(),paneReady:$e(),init:$e(),move:$e(),moveStart:$e(),moveEnd:$e(),selectionDragStart:$e(),selectionDrag:$e(),selectionDragStop:$e(),selectionContextMenu:$e(),selectionStart:$e(),selectionEnd:$e(),viewportChangeStart:$e(),viewportChange:$e(),viewportChangeEnd:$e(),paneScroll:$e(),paneClick:$e(),paneContextMenu:$e(),paneMouseEnter:$e(),paneMouseMove:$e(),paneMouseLeave:$e(),edgeContextMenu:$e(),edgeMouseEnter:$e(),edgeMouseMove:$e(),edgeMouseLeave:$e(),edgeDoubleClick:$e(),edgeClick:$e(),edgeUpdateStart:$e(),edgeUpdate:$e(),edgeUpdateEnd:$e(),updateNodeInternals:$e(),error:$e(t=>Oa(t.message))}}function v3(t,e){const n=Si();t0(()=>{for(const[r,o]of Object.entries(e.value)){const s=a=>{t(r,a)};o.setEmitter(s),ha(o.removeEmitter),o.setHasEmitListeners(()=>i(r)),ha(o.removeHasEmitListeners)}});function i(r){var o;const s=_3(r);return!!((o=n?.vnode.props)==null?void 0:o[s])}}function _3(t){const[e,...n]=t.split(":");return`on${e.replace(/(?:^|-)(\w)/g,(r,o)=>o.toUpperCase())}${n.length?`:${n.join(":")}`:""}`}function gy(){return{vueFlowRef:null,viewportRef:null,nodes:[],edges:[],connectionLookup:new Map,nodeTypes:{},edgeTypes:{},initialized:!1,dimensions:{width:0,height:0},viewport:{x:0,y:0,zoom:1},d3Zoom:null,d3Selection:null,d3ZoomHandler:null,minZoom:.5,maxZoom:2,translateExtent:[[Number.NEGATIVE_INFINITY,Number.NEGATIVE_INFINITY],[Number.POSITIVE_INFINITY,Number.POSITIVE_INFINITY]],nodeExtent:[[Number.NEGATIVE_INFINITY,Number.NEGATIVE_INFINITY],[Number.POSITIVE_INFINITY,Number.POSITIVE_INFINITY]],selectionMode:Gh.Full,paneDragging:!1,preventScrolling:!0,zoomOnScroll:!0,zoomOnPinch:!0,zoomOnDoubleClick:!0,panOnScroll:!1,panOnScrollSpeed:.5,panOnScrollMode:ea.Free,paneClickDistance:0,panOnDrag:!0,edgeUpdaterRadius:10,onlyRenderVisibleElements:!1,defaultViewport:{x:0,y:0,zoom:1},nodesSelectionActive:!1,userSelectionActive:!1,userSelectionRect:null,defaultMarkerColor:"#b1b1b7",connectionLineStyle:{},connectionLineType:null,connectionLineOptions:{type:ao.Bezier,style:{}},connectionMode:zr.Loose,connectionStartHandle:null,connectionEndHandle:null,connectionClickStartHandle:null,connectionPosition:{x:Number.NaN,y:Number.NaN},connectionRadius:20,connectOnClick:!0,connectionStatus:null,isValidConnection:null,snapGrid:[15,15],snapToGrid:!1,edgesUpdatable:!1,edgesFocusable:!0,nodesFocusable:!0,nodesConnectable:!0,nodesDraggable:!0,nodeDragThreshold:1,elementsSelectable:!0,selectNodesOnDrag:!0,multiSelectionActive:!1,selectionKeyCode:"Shift",multiSelectionKeyCode:ba()?"Meta":"Control",zoomActivationKeyCode:ba()?"Meta":"Control",deleteKeyCode:"Backspace",panActivationKeyCode:"Space",hooks:g3(),applyDefault:!0,autoConnect:!1,fitViewOnInit:!1,fitViewOnInitDone:!1,noDragClassName:"nodrag",noWheelClassName:"nowheel",noPanClassName:"nopan",defaultEdgeOptions:void 0,elevateEdgesOnSelect:!1,elevateNodesOnSelect:!0,autoPanOnNodeDrag:!0,autoPanOnConnect:!0,autoPanSpeed:15,disableKeyboardA11y:!1,ariaLiveMessage:""}}const y3=["id","vueFlowRef","viewportRef","initialized","modelValue","nodes","edges","maxZoom","minZoom","translateExtent","hooks","defaultEdgeOptions"];function x3(t,e,n){const i=p3(t),r=F=>{const O=F??[];t.hooks.updateNodeInternals.trigger(O)},o=F=>UP(F,t.nodes,t.edges),s=F=>FP(F,t.nodes,t.edges),a=F=>lo(F,t.edges),l=({id:F,type:O,nodeId:z})=>{var Y;const S=F?`-${O}-${F}`:`-${O}`;return Array.from(((Y=t.connectionLookup.get(`${z}${S}`))==null?void 0:Y.values())??[])},u=F=>{if(F)return e.value.get(F)},c=F=>{if(F)return n.value.get(F)},d=(F,O,z)=>{var Y,S;const Z=[];for(const J of F){const ee={id:J.id,type:"position",dragging:z,from:J.from};if(O&&(ee.position=J.position,J.parentNode)){const ie=u(J.parentNode);ee.position={x:ee.position.x-(((Y=ie?.computedPosition)==null?void 0:Y.x)??0),y:ee.position.y-(((S=ie?.computedPosition)==null?void 0:S.y)??0)}}Z.push(ee)}Z?.length&&t.hooks.nodesChange.trigger(Z)},f=F=>{if(!t.vueFlowRef)return;const O=t.vueFlowRef.querySelector(".vue-flow__transformationpane");if(!O)return;const z=window.getComputedStyle(O),{m22:Y}=new window.DOMMatrixReadOnly(z.transform),S=[];for(const Z of F){const J=Z,ee=u(J.id);if(ee){const ie=nc(J.nodeElement);if(!!(ie.width&&ie.height&&(ee.dimensions.width!==ie.width||ee.dimensions.height!==ie.height||J.forceUpdate))){const w=J.nodeElement.getBoundingClientRect();ee.dimensions=ie,ee.handleBounds.source=Rg("source",J.nodeElement,w,Y,ee.id),ee.handleBounds.target=Rg("target",J.nodeElement,w,Y,ee.id),S.push({id:ee.id,type:"dimensions",dimensions:ie})}}}!t.fitViewOnInitDone&&t.fitViewOnInit&&i.value.fitView().then(()=>{t.fitViewOnInitDone=!0}),S.length&&t.hooks.nodesChange.trigger(S)},h=(F,O)=>{const z=new Set,Y=new Set;for(const J of F)yo(J)?z.add(J.id):Vr(J)&&Y.add(J.id);const S=Tr(e.value,z,!0),Z=Tr(n.value,Y);if(t.multiSelectionActive){for(const J of z)S.push(Sr(J,O));for(const J of Y)Z.push(Sr(J,O))}S.length&&t.hooks.nodesChange.trigger(S),Z.length&&t.hooks.edgesChange.trigger(Z)},m=F=>{if(t.multiSelectionActive){const O=F.map(z=>Sr(z.id,!0));t.hooks.nodesChange.trigger(O);return}t.hooks.nodesChange.trigger(Tr(e.value,new Set(F.map(O=>O.id)),!0)),t.hooks.edgesChange.trigger(Tr(n.value))},v=F=>{if(t.multiSelectionActive){const O=F.map(z=>Sr(z.id,!0));t.hooks.edgesChange.trigger(O);return}t.hooks.edgesChange.trigger(Tr(n.value,new Set(F.map(O=>O.id)))),t.hooks.nodesChange.trigger(Tr(e.value,new Set,!0))},g=F=>{h(F,!0)},p=F=>{const z=(F||t.nodes).map(Y=>(Y.selected=!1,Sr(Y.id,!1)));t.hooks.nodesChange.trigger(z)},b=F=>{const z=(F||t.edges).map(Y=>(Y.selected=!1,Sr(Y.id,!1)));t.hooks.edgesChange.trigger(z)},M=F=>{if(!F||!F.length)return h([],!1);const O=F.reduce((z,Y)=>{const S=Sr(Y.id,!1);return yo(Y)?z.nodes.push(S):z.edges.push(S),z},{nodes:[],edges:[]});O.nodes.length&&t.hooks.nodesChange.trigger(O.nodes),O.edges.length&&t.hooks.edgesChange.trigger(O.edges)},y=F=>{var O;(O=t.d3Zoom)==null||O.scaleExtent([F,t.maxZoom]),t.minZoom=F},I=F=>{var O;(O=t.d3Zoom)==null||O.scaleExtent([t.minZoom,F]),t.maxZoom=F},D=F=>{var O;(O=t.d3Zoom)==null||O.translateExtent(F),t.translateExtent=F},B=F=>{t.nodeExtent=F,r()},_=F=>{var O;(O=t.d3Zoom)==null||O.clickDistance(F)},x=F=>{t.nodesDraggable=F,t.nodesConnectable=F,t.elementsSelectable=F},R=F=>{const O=F instanceof Function?F(t.nodes):F;!t.initialized&&!O.length||(t.nodes=Ig(O,u,t.hooks.error.trigger))},T=F=>{const O=F instanceof Function?F(t.edges):F;if(!t.initialized&&!O.length)return;const z=vd(O,t.isValidConnection,u,c,t.hooks.error.trigger,t.defaultEdgeOptions,t.nodes,t.edges);gd(t.connectionLookup,n.value,z),t.edges=z},A=F=>{const O=F instanceof Function?F([...t.nodes,...t.edges]):F;!t.initialized&&!O.length||(R(O.filter(yo)),T(O.filter(Vr)))},X=F=>{let O=F instanceof Function?F(t.nodes):F;O=Array.isArray(O)?O:[O];const z=Ig(O,u,t.hooks.error.trigger),Y=[];for(const S of z)Y.push(bg(S));Y.length&&t.hooks.nodesChange.trigger(Y)},E=F=>{let O=F instanceof Function?F(t.edges):F;O=Array.isArray(O)?O:[O];const z=vd(O,t.isValidConnection,u,c,t.hooks.error.trigger,t.defaultEdgeOptions,t.nodes,t.edges),Y=[];for(const S of z)Y.push(bg(S));Y.length&&t.hooks.edgesChange.trigger(Y)},k=(F,O=!0,z=!1)=>{const Y=F instanceof Function?F(t.nodes):F,S=Array.isArray(Y)?Y:[Y],Z=[],J=[];function ee(P){const w=a(P);for(const K of w)(!$t(K.deletable)||K.deletable)&&J.push(Mg(K.id,K.source,K.target,K.sourceHandle,K.targetHandle))}function ie(P){const w=[];for(const K of t.nodes)K.parentNode===P&&w.push(K);if(w.length){for(const K of w)Z.push(Sg(K.id));O&&ee(w);for(const K of w)ie(K.id)}}for(const P of S){const w=typeof P=="string"?u(P):P;w&&($t(w.deletable)&&!w.deletable||(Z.push(Sg(w.id)),O&&ee([w]),z&&ie(w.id)))}J.length&&t.hooks.edgesChange.trigger(J),Z.length&&t.hooks.nodesChange.trigger(Z)},C=F=>{const O=F instanceof Function?F(t.edges):F,z=Array.isArray(O)?O:[O],Y=[];for(const S of z){const Z=typeof S=="string"?c(S):S;Z&&($t(Z.deletable)&&!Z.deletable||Y.push(Mg(typeof S=="string"?S:S.id,Z.source,Z.target,Z.sourceHandle,Z.targetHandle)))}t.hooks.edgesChange.trigger(Y)},N=(F,O,z=!0)=>{const Y=c(F.id);if(!Y)return!1;const S=t.edges.indexOf(Y),Z=r3(F,O,Y,z,t.hooks.error.trigger);if(Z){const[J]=vd([Z],t.isValidConnection,u,c,t.hooks.error.trigger,t.defaultEdgeOptions,t.nodes,t.edges);return t.edges=t.edges.map((ee,ie)=>ie===S?J:ee),gd(t.connectionLookup,n.value,[J]),J}return!1},U=(F,O,z={replace:!1})=>{const Y=c(F);if(!Y)return;const S=typeof O=="function"?O(Y):O;Y.data=z.replace?S:{...Y.data,...S}},H=F=>xg(F,t.nodes),G=F=>{const O=xg(F,t.edges);return gd(t.connectionLookup,n.value,O),O},ne=(F,O,z={replace:!1})=>{const Y=u(F);if(!Y)return;const S=typeof O=="function"?O(Y):O;z.replace?t.nodes.splice(t.nodes.indexOf(Y),1,S):Object.assign(Y,S)},re=(F,O,z={replace:!1})=>{const Y=u(F);if(!Y)return;const S=typeof O=="function"?O(Y):O;Y.data=z.replace?S:{...Y.data,...S}},ye=(F,O,z=!1)=>{z?t.connectionClickStartHandle=F:t.connectionStartHandle=F,t.connectionEndHandle=null,t.connectionStatus=null,O&&(t.connectionPosition=O)},we=(F,O=null,z=null)=>{t.connectionStartHandle&&(t.connectionPosition=F,t.connectionEndHandle=O,t.connectionStatus=z)},te=(F,O)=>{t.connectionPosition={x:Number.NaN,y:Number.NaN},t.connectionEndHandle=null,t.connectionStatus=null,O?t.connectionClickStartHandle=null:t.connectionStartHandle=null},L=F=>{const O=DP(F),z=O?null:Vs(F)?F:u(F.id);return!O&&!z?[null,null,O]:[O?F:xu(z),z,O]},j=(F,O=!0,z=t.nodes)=>{const[Y,S,Z]=L(F);if(!Y)return[];const J=[];for(const ee of z||t.nodes){if(!Z&&(ee.id===S.id||!ee.computedPosition))continue;const ie=xu(ee),P=bu(ie,Y);(O&&P>0||P>=ie.width*ie.height||P>=Number(Y.width)*Number(Y.height))&&J.push(ee)}return J},Q=(F,O,z=!0)=>{const[Y]=L(F);if(!Y)return!1;const S=bu(Y,O);return z&&S>0||S>=Number(Y.width)*Number(Y.height)},fe=F=>{const{viewport:O,dimensions:z,d3Zoom:Y,d3Selection:S,translateExtent:Z}=t;if(!Y||!S||!F.x&&!F.y)return!1;const J=ps.translate(O.x+F.x,O.y+F.y).scale(O.zoom),ee=[[0,0],[z.width,z.height]],ie=Y.constrain()(J,ee,Z),P=t.viewport.x!==ie.x||t.viewport.y!==ie.y||t.viewport.zoom!==ie.k;return Y.transform(S,ie),P},Se=F=>{const O=F instanceof Function?F(t):F,z=["d3Zoom","d3Selection","d3ZoomHandler","viewportRef","vueFlowRef","dimensions","hooks"];$t(O.defaultEdgeOptions)&&(t.defaultEdgeOptions=O.defaultEdgeOptions);const Y=O.modelValue||O.nodes||O.edges?[]:void 0;Y&&(O.modelValue&&Y.push(...O.modelValue),O.nodes&&Y.push(...O.nodes),O.edges&&Y.push(...O.edges),A(Y));const S=()=>{$t(O.maxZoom)&&I(O.maxZoom),$t(O.minZoom)&&y(O.minZoom),$t(O.translateExtent)&&D(O.translateExtent)};for(const Z of Object.keys(O)){const J=Z,ee=O[J];![...y3,...z].includes(J)&&$t(ee)&&(t[J]=ee)}Df(()=>t.d3Zoom).not.toBeNull().then(S),t.initialized||(t.initialized=!0)};return{updateNodePositions:d,updateNodeDimensions:f,setElements:A,setNodes:R,setEdges:T,addNodes:X,addEdges:E,removeNodes:k,removeEdges:C,findNode:u,findEdge:c,updateEdge:N,updateEdgeData:U,updateNode:ne,updateNodeData:re,applyEdgeChanges:G,applyNodeChanges:H,addSelectedElements:g,addSelectedNodes:m,addSelectedEdges:v,setMinZoom:y,setMaxZoom:I,setTranslateExtent:D,setNodeExtent:B,setPaneClickDistance:_,removeSelectedElements:M,removeSelectedNodes:p,removeSelectedEdges:b,startConnection:ye,updateConnection:we,endConnection:te,setInteractive:x,setState:Se,getIntersectingNodes:j,getIncomers:o,getOutgoers:s,getConnectedEdges:a,getHandleConnections:l,isNodeIntersecting:Q,panBy:fe,fitView:F=>i.value.fitView(F),zoomIn:F=>i.value.zoomIn(F),zoomOut:F=>i.value.zoomOut(F),zoomTo:(F,O)=>i.value.zoomTo(F,O),setViewport:(F,O)=>i.value.setViewport(F,O),setTransform:(F,O)=>i.value.setTransform(F,O),getViewport:()=>i.value.getViewport(),getTransform:()=>i.value.getTransform(),setCenter:(F,O,z)=>i.value.setCenter(F,O,z),fitBounds:(F,O)=>i.value.fitBounds(F,O),project:F=>i.value.project(F),screenToFlowCoordinate:F=>i.value.screenToFlowCoordinate(F),flowToScreenCoordinate:F=>i.value.flowToScreenCoordinate(F),toObject:()=>{const F=[],O=[];for(const z of t.nodes){const{computedPosition:Y,handleBounds:S,selected:Z,dimensions:J,isParent:ee,resizing:ie,dragging:P,events:w,...K}=z;F.push(K)}for(const z of t.edges){const{selected:Y,sourceNode:S,targetNode:Z,events:J,...ee}=z;O.push(ee)}return JSON.parse(JSON.stringify({nodes:F,edges:O,position:[t.viewport.x,t.viewport.y],zoom:t.viewport.zoom,viewport:t.viewport}))},fromObject:F=>new Promise(O=>{const{nodes:z,edges:Y,position:S,zoom:Z,viewport:J}=F;z&&R(z),Y&&T(Y);const[ee,ie]=J?.x&&J?.y?[J.x,J.y]:S??[null,null];if(ee&&ie){const P=J?.zoom||Z||t.viewport.zoom;return Df(()=>i.value.viewportInitialized).toBe(!0).then(()=>{i.value.setViewport({x:ee,y:ie,zoom:P}).then(()=>{O(!0)})})}else O(!0)}),updateNodeInternals:r,viewportHelper:i,$reset:()=>{const F=gy();if(t.edges=[],t.nodes=[],t.d3Zoom&&t.d3Selection){const O=ps.translate(F.defaultViewport.x??0,F.defaultViewport.y??0).scale(or(F.defaultViewport.zoom??1,F.minZoom,F.maxZoom)),z=t.viewportRef.getBoundingClientRect(),Y=[[0,0],[z.width,z.height]],S=t.d3Zoom.constrain()(O,Y,F.translateExtent);t.d3Zoom.transform(t.d3Selection,S)}Se(F)},$destroy:()=>{}}}const b3=["data-id","data-handleid","data-nodeid","data-handlepos"],S3={name:"Handle",compatConfig:{MODE:3}},xo=Nt({...S3,props:{id:{default:null},type:{},position:{default:()=>Xe.Top},isValidConnection:{type:Function},connectable:{type:[Boolean,Number,String,Function],default:void 0},connectableStart:{type:Boolean,default:!0},connectableEnd:{type:Boolean,default:!0}},setup(t,{expose:e}){const n=Cb(t,["position","connectable","connectableStart","connectableEnd","id"]),i=bt(()=>n.type??"source"),r=bt(()=>n.isValidConnection??null),{id:o,connectionStartHandle:s,connectionClickStartHandle:a,connectionEndHandle:l,vueFlowRef:u,nodesConnectable:c,noDragClassName:d,noPanClassName:f}=Dt(),{id:h,node:m,nodeEl:v,connectedEdges:g}=py(),p=Ce(),b=bt(()=>typeof t.connectableStart<"u"?t.connectableStart:!0),M=bt(()=>typeof t.connectableEnd<"u"?t.connectableEnd:!0),y=bt(()=>{var T,A,X,E,k,C;return((T=s.value)==null?void 0:T.nodeId)===h&&((A=s.value)==null?void 0:A.id)===t.id&&((X=s.value)==null?void 0:X.type)===i.value||((E=l.value)==null?void 0:E.nodeId)===h&&((k=l.value)==null?void 0:k.id)===t.id&&((C=l.value)==null?void 0:C.type)===i.value}),I=bt(()=>{var T,A,X;return((T=a.value)==null?void 0:T.nodeId)===h&&((A=a.value)==null?void 0:A.id)===t.id&&((X=a.value)==null?void 0:X.type)===i.value}),{handlePointerDown:D,handleClick:B}=hy({nodeId:h,handleId:t.id,isValidConnection:r,type:i}),_=Re(()=>typeof t.connectable=="string"&&t.connectable==="single"?!g.value.some(T=>{const A=T[`${i.value}Handle`];return T[i.value]!==h?!1:A?A===t.id:!0}):typeof t.connectable=="number"?g.value.filter(T=>{const A=T[`${i.value}Handle`];return T[i.value]!==h?!1:A?A===t.id:!0}).length<t.connectable:typeof t.connectable=="function"?t.connectable(m,g.value):$t(t.connectable)?t.connectable:c.value);bn(()=>{var T;if(!m.dimensions.width||!m.dimensions.height)return;const A=(T=m.handleBounds[i.value])==null?void 0:T.find(H=>H.id===t.id);if(!u.value||A)return;const X=u.value.querySelector(".vue-flow__transformationpane");if(!v.value||!p.value||!X||!t.id)return;const E=v.value.getBoundingClientRect(),k=p.value.getBoundingClientRect(),C=window.getComputedStyle(X),{m22:N}=new window.DOMMatrixReadOnly(C.transform),U={id:t.id,position:t.position,x:(k.left-E.left)/N,y:(k.top-E.top)/N,type:i.value,nodeId:h,...nc(p.value)};m.handleBounds[i.value]=[...m.handleBounds[i.value]??[],U]});function x(T){const A=Yh(T);_.value&&b.value&&(A&&T.button===0||!A)&&D(T)}function R(T){!h||!a.value&&!b.value||_.value&&B(T)}return e({handleClick:B,handlePointerDown:D,onClick:R,onPointerDown:x}),(T,A)=>(ce(),me("div",{ref_key:"handle",ref:p,"data-id":`${he(o)}-${he(h)}-${t.id}-${i.value}`,"data-handleid":t.id,"data-nodeid":he(h),"data-handlepos":T.position,class:ut(["vue-flow__handle",[`vue-flow__handle-${T.position}`,`vue-flow__handle-${t.id}`,he(d),he(f),i.value,{connectable:_.value,connecting:I.value,connectablestart:b.value,connectableend:M.value,connectionindicator:_.value&&(b.value&&!y.value||M.value&&y.value)}]]),onMousedown:x,onTouchstartPassive:x,onClick:R},[er(T.$slots,"default",{id:T.id})],42,b3))}}),oc=function({sourcePosition:t=Xe.Bottom,targetPosition:e=Xe.Top,label:n,connectable:i=!0,isValidTargetPos:r,isValidSourcePos:o,data:s}){const a=s.label??n;return[wt(xo,{type:"target",position:e,connectable:i,isValidConnection:r}),typeof a!="string"&&a?wt(a):wt(it,[a]),wt(xo,{type:"source",position:t,connectable:i,isValidConnection:o})]};oc.props=["sourcePosition","targetPosition","label","isValidTargetPos","isValidSourcePos","connectable","data"];oc.inheritAttrs=!1;oc.compatConfig={MODE:3};const M3=oc,sc=function({targetPosition:t=Xe.Top,label:e,connectable:n=!0,isValidTargetPos:i,data:r}){const o=r.label??e;return[wt(xo,{type:"target",position:t,connectable:n,isValidConnection:i}),typeof o!="string"&&o?wt(o):wt(it,[o])]};sc.props=["targetPosition","label","isValidTargetPos","connectable","data"];sc.inheritAttrs=!1;sc.compatConfig={MODE:3};const w3=sc,ac=function({sourcePosition:t=Xe.Bottom,label:e,connectable:n=!0,isValidSourcePos:i,data:r}){const o=r.label??e;return[typeof o!="string"&&o?wt(o):wt(it,[o]),wt(xo,{type:"source",position:t,connectable:n,isValidConnection:i})]};ac.props=["sourcePosition","label","isValidSourcePos","connectable","data"];ac.inheritAttrs=!1;ac.compatConfig={MODE:3};const E3=ac,T3=["transform"],A3=["width","height","x","y","rx","ry"],C3=["y"],R3={name:"EdgeText",compatConfig:{MODE:3}},I3=Nt({...R3,props:{x:{},y:{},label:{},labelStyle:{default:()=>({})},labelShowBg:{type:Boolean,default:!0},labelBgStyle:{default:()=>({})},labelBgPadding:{default:()=>[2,4]},labelBgBorderRadius:{default:2}},setup(t){const e=Ce({x:0,y:0,width:0,height:0}),n=Ce(null),i=Re(()=>`translate(${t.x-e.value.width/2} ${t.y-e.value.height/2})`);bn(r),lt([()=>t.x,()=>t.y,n,()=>t.label],r);function r(){if(!n.value)return;const o=n.value.getBBox();(o.width!==e.value.width||o.height!==e.value.height)&&(e.value=o)}return(o,s)=>(ce(),me("g",{transform:i.value,class:"vue-flow__edge-textwrapper"},[o.labelShowBg?(ce(),me("rect",{key:0,class:"vue-flow__edge-textbg",width:`${e.value.width+2*o.labelBgPadding[0]}px`,height:`${e.value.height+2*o.labelBgPadding[1]}px`,x:-o.labelBgPadding[0],y:-o.labelBgPadding[1],style:rt(o.labelBgStyle),rx:o.labelBgBorderRadius,ry:o.labelBgBorderRadius},null,12,A3)):He("",!0),q("text",aa(o.$attrs,{ref_key:"el",ref:n,class:"vue-flow__edge-text",y:e.value.height/2,dy:"0.3em",style:o.labelStyle}),[er(o.$slots,"default",{},()=>[typeof o.label!="string"?(ce(),Jt(o0(o.label),{key:0})):(ce(),me(it,{key:1},[Yi(Te(o.label),1)],64))])],16,C3)],8,T3))}}),P3=["id","d","marker-end","marker-start"],N3=["d","stroke-width"],D3={name:"BaseEdge",inheritAttrs:!1,compatConfig:{MODE:3}},lc=Nt({...D3,props:{id:{},labelX:{},labelY:{},path:{},label:{},markerStart:{},markerEnd:{},interactionWidth:{default:20},labelStyle:{},labelShowBg:{type:Boolean},labelBgStyle:{},labelBgPadding:{},labelBgBorderRadius:{}},setup(t,{expose:e}){const n=Ce(null),i=Ce(null),r=Ce(null),o=yh();return e({pathEl:n,interactionEl:i,labelEl:r}),(s,a)=>(ce(),me(it,null,[q("path",aa(he(o),{id:s.id,ref_key:"pathEl",ref:n,d:s.path,class:"vue-flow__edge-path","marker-end":s.markerEnd,"marker-start":s.markerStart}),null,16,P3),s.interactionWidth?(ce(),me("path",{key:0,ref_key:"interactionEl",ref:i,fill:"none",d:s.path,"stroke-width":s.interactionWidth,"stroke-opacity":0,class:"vue-flow__edge-interaction"},null,8,N3)):He("",!0),s.label&&s.labelX&&s.labelY?(ce(),Jt(I3,{key:1,ref_key:"labelEl",ref:r,x:s.labelX,y:s.labelY,label:s.label,"label-show-bg":s.labelShowBg,"label-bg-style":s.labelBgStyle,"label-bg-padding":s.labelBgPadding,"label-bg-border-radius":s.labelBgBorderRadius,"label-style":s.labelStyle},null,8,["x","y","label","label-show-bg","label-bg-style","label-bg-padding","label-bg-border-radius","label-style"])):He("",!0)],64))}});function vy({sourceX:t,sourceY:e,targetX:n,targetY:i}){const r=Math.abs(n-t)/2,o=n<t?n+r:n-r,s=Math.abs(i-e)/2,a=i<e?i+s:i-s;return[o,a,r,s]}function _y({sourceX:t,sourceY:e,targetX:n,targetY:i,sourceControlX:r,sourceControlY:o,targetControlX:s,targetControlY:a}){const l=t*.125+r*.375+s*.375+n*.125,u=e*.125+o*.375+a*.375+i*.125,c=Math.abs(l-t),d=Math.abs(u-e);return[l,u,c,d]}function Ml(t,e){return t>=0?.5*t:e*25*Math.sqrt(-t)}function Lg({pos:t,x1:e,y1:n,x2:i,y2:r,c:o}){let s,a;switch(t){case Xe.Left:s=e-Ml(e-i,o),a=n;break;case Xe.Right:s=e+Ml(i-e,o),a=n;break;case Xe.Top:s=e,a=n-Ml(n-r,o);break;case Xe.Bottom:s=e,a=n+Ml(r-n,o);break}return[s,a]}function yy(t){const{sourceX:e,sourceY:n,sourcePosition:i=Xe.Bottom,targetX:r,targetY:o,targetPosition:s=Xe.Top,curvature:a=.25}=t,[l,u]=Lg({pos:i,x1:e,y1:n,x2:r,y2:o,c:a}),[c,d]=Lg({pos:s,x1:r,y1:o,x2:e,y2:n,c:a}),[f,h,m,v]=_y({sourceX:e,sourceY:n,targetX:r,targetY:o,sourceControlX:l,sourceControlY:u,targetControlX:c,targetControlY:d});return[`M${e},${n} C${l},${u} ${c},${d} ${r},${o}`,f,h,m,v]}function Fg({pos:t,x1:e,y1:n,x2:i,y2:r}){let o,s;switch(t){case Xe.Left:case Xe.Right:o=.5*(e+i),s=n;break;case Xe.Top:case Xe.Bottom:o=e,s=.5*(n+r);break}return[o,s]}function xy(t){const{sourceX:e,sourceY:n,sourcePosition:i=Xe.Bottom,targetX:r,targetY:o,targetPosition:s=Xe.Top}=t,[a,l]=Fg({pos:i,x1:e,y1:n,x2:r,y2:o}),[u,c]=Fg({pos:s,x1:r,y1:o,x2:e,y2:n}),[d,f,h,m]=_y({sourceX:e,sourceY:n,targetX:r,targetY:o,sourceControlX:a,sourceControlY:l,targetControlX:u,targetControlY:c});return[`M${e},${n} C${a},${l} ${u},${c} ${r},${o}`,d,f,h,m]}const Ug={[Xe.Left]:{x:-1,y:0},[Xe.Right]:{x:1,y:0},[Xe.Top]:{x:0,y:-1},[Xe.Bottom]:{x:0,y:1}};function L3({source:t,sourcePosition:e=Xe.Bottom,target:n}){return e===Xe.Left||e===Xe.Right?t.x<n.x?{x:1,y:0}:{x:-1,y:0}:t.y<n.y?{x:0,y:1}:{x:0,y:-1}}function Og(t,e){return Math.sqrt((e.x-t.x)**2+(e.y-t.y)**2)}function F3({source:t,sourcePosition:e=Xe.Bottom,target:n,targetPosition:i=Xe.Top,center:r,offset:o}){const s=Ug[e],a=Ug[i],l={x:t.x+s.x*o,y:t.y+s.y*o},u={x:n.x+a.x*o,y:n.y+a.y*o},c=L3({source:l,sourcePosition:e,target:u}),d=c.x!==0?"x":"y",f=c[d];let h,m,v;const g={x:0,y:0},p={x:0,y:0},[b,M,y,I]=vy({sourceX:t.x,sourceY:t.y,targetX:n.x,targetY:n.y});if(s[d]*a[d]===-1){m=r.x??b,v=r.y??M;const B=[{x:m,y:l.y},{x:m,y:u.y}],_=[{x:l.x,y:v},{x:u.x,y:v}];s[d]===f?h=d==="x"?B:_:h=d==="x"?_:B}else{const B=[{x:l.x,y:u.y}],_=[{x:u.x,y:l.y}];if(d==="x"?h=s.x===f?_:B:h=s.y===f?B:_,e===i){const X=Math.abs(t[d]-n[d]);if(X<=o){const E=Math.min(o-1,o-X);s[d]===f?g[d]=(l[d]>t[d]?-1:1)*E:p[d]=(u[d]>n[d]?-1:1)*E}}if(e!==i){const X=d==="x"?"y":"x",E=s[d]===a[X],k=l[X]>u[X],C=l[X]<u[X];(s[d]===1&&(!E&&k||E&&C)||s[d]!==1&&(!E&&C||E&&k))&&(h=d==="x"?B:_)}const x={x:l.x+g.x,y:l.y+g.y},R={x:u.x+p.x,y:u.y+p.y},T=Math.max(Math.abs(x.x-h[0].x),Math.abs(R.x-h[0].x)),A=Math.max(Math.abs(x.y-h[0].y),Math.abs(R.y-h[0].y));T>=A?(m=(x.x+R.x)/2,v=h[0].y):(m=h[0].x,v=(x.y+R.y)/2)}return[[t,{x:l.x+g.x,y:l.y+g.y},...h,{x:u.x+p.x,y:u.y+p.y},n],m,v,y,I]}function U3(t,e,n,i){const r=Math.min(Og(t,e)/2,Og(e,n)/2,i),{x:o,y:s}=e;if(t.x===o&&o===n.x||t.y===s&&s===n.y)return`L${o} ${s}`;if(t.y===s){const u=t.x<n.x?-1:1,c=t.y<n.y?1:-1;return`L ${o+r*u},${s}Q ${o},${s} ${o},${s+r*c}`}const a=t.x<n.x?1:-1,l=t.y<n.y?-1:1;return`L ${o},${s+r*l}Q ${o},${s} ${o+r*a},${s}`}function Yf(t){const{sourceX:e,sourceY:n,sourcePosition:i=Xe.Bottom,targetX:r,targetY:o,targetPosition:s=Xe.Top,borderRadius:a=5,centerX:l,centerY:u,offset:c=20}=t,[d,f,h,m,v]=F3({source:{x:e,y:n},sourcePosition:i,target:{x:r,y:o},targetPosition:s,center:{x:l,y:u},offset:c});return[d.reduce((p,b,M)=>{let y;return M>0&&M<d.length-1?y=U3(d[M-1],b,d[M+1],a):y=`${M===0?"M":"L"}${b.x} ${b.y}`,p+=y,p},""),f,h,m,v]}function O3(t){const{sourceX:e,sourceY:n,targetX:i,targetY:r}=t,[o,s,a,l]=vy({sourceX:e,sourceY:n,targetX:i,targetY:r});return[`M ${e},${n}L ${i},${r}`,o,s,a,l]}const B3=Nt({name:"StraightEdge",props:["label","labelStyle","labelShowBg","labelBgStyle","labelBgPadding","labelBgBorderRadius","sourceY","sourceX","targetX","targetY","markerEnd","markerStart","interactionWidth"],compatConfig:{MODE:3},setup(t,{attrs:e}){return()=>{const[n,i,r]=O3(t);return wt(lc,{path:n,labelX:i,labelY:r,...e,...t})}}}),k3=B3,z3=Nt({name:"SmoothStepEdge",props:["sourcePosition","targetPosition","label","labelStyle","labelShowBg","labelBgStyle","labelBgPadding","labelBgBorderRadius","sourceY","sourceX","targetX","targetY","borderRadius","markerEnd","markerStart","interactionWidth","offset"],compatConfig:{MODE:3},setup(t,{attrs:e}){return()=>{const[n,i,r]=Yf({...t,sourcePosition:t.sourcePosition??Xe.Bottom,targetPosition:t.targetPosition??Xe.Top});return wt(lc,{path:n,labelX:i,labelY:r,...e,...t})}}}),by=z3,V3=Nt({name:"StepEdge",props:["sourcePosition","targetPosition","label","labelStyle","labelShowBg","labelBgStyle","labelBgPadding","labelBgBorderRadius","sourceY","sourceX","targetX","targetY","markerEnd","markerStart","interactionWidth"],setup(t,{attrs:e}){return()=>wt(by,{...t,...e,borderRadius:0})}}),$3=V3,H3=Nt({name:"BezierEdge",props:["sourcePosition","targetPosition","label","labelStyle","labelShowBg","labelBgStyle","labelBgPadding","labelBgBorderRadius","sourceY","sourceX","targetX","targetY","curvature","markerEnd","markerStart","interactionWidth"],compatConfig:{MODE:3},setup(t,{attrs:e}){return()=>{const[n,i,r]=yy({...t,sourcePosition:t.sourcePosition??Xe.Bottom,targetPosition:t.targetPosition??Xe.Top});return wt(lc,{path:n,labelX:i,labelY:r,...e,...t})}}}),G3=H3,W3=Nt({name:"SimpleBezierEdge",props:["sourcePosition","targetPosition","label","labelStyle","labelShowBg","labelBgStyle","labelBgPadding","labelBgBorderRadius","sourceY","sourceX","targetX","targetY","markerEnd","markerStart","interactionWidth"],compatConfig:{MODE:3},setup(t,{attrs:e}){return()=>{const[n,i,r]=xy({...t,sourcePosition:t.sourcePosition??Xe.Bottom,targetPosition:t.targetPosition??Xe.Top});return wt(lc,{path:n,labelX:i,labelY:r,...e,...t})}}}),X3=W3,Y3={input:E3,default:M3,output:w3},q3={default:G3,straight:k3,step:$3,smoothstep:by,simplebezier:X3};function K3(t,e,n){const i=Re(()=>v=>e.value.get(v)),r=Re(()=>v=>n.value.get(v)),o=Re(()=>{const v={...q3,...t.edgeTypes},g=Object.keys(v);for(const p of t.edges)p.type&&!g.includes(p.type)&&(v[p.type]=p.type);return v}),s=Re(()=>{const v={...Y3,...t.nodeTypes},g=Object.keys(v);for(const p of t.nodes)p.type&&!g.includes(p.type)&&(v[p.type]=p.type);return v}),a=Re(()=>t.onlyRenderVisibleElements?iy(t.nodes,{x:0,y:0,width:t.dimensions.width,height:t.dimensions.height},t.viewport,!0):t.nodes),l=Re(()=>{if(t.onlyRenderVisibleElements){const v=[];for(const g of t.edges){const p=e.value.get(g.source),b=e.value.get(g.target);XP({sourcePos:p.computedPosition||{x:0,y:0},targetPos:b.computedPosition||{x:0,y:0},sourceWidth:p.dimensions.width,sourceHeight:p.dimensions.height,targetWidth:b.dimensions.width,targetHeight:b.dimensions.height,width:t.dimensions.width,height:t.dimensions.height,viewport:t.viewport})&&v.push(g)}return v}return t.edges}),u=Re(()=>[...a.value,...l.value]),c=Re(()=>{const v=[];for(const g of t.nodes)g.selected&&v.push(g);return v}),d=Re(()=>{const v=[];for(const g of t.edges)g.selected&&v.push(g);return v}),f=Re(()=>[...c.value,...d.value]),h=Re(()=>{const v=[];for(const g of t.nodes)g.dimensions.width&&g.dimensions.height&&g.handleBounds!==void 0&&v.push(g);return v}),m=Re(()=>a.value.length>0&&h.value.length===a.value.length);return{getNode:i,getEdge:r,getElements:u,getEdgeTypes:o,getNodeTypes:s,getEdges:l,getNodes:a,getSelectedElements:f,getSelectedNodes:c,getSelectedEdges:d,getNodesInitialized:h,areNodesInitialized:m}}class uo{constructor(){this.currentId=0,this.flows=new Map}static getInstance(){var e;const n=(e=Si())==null?void 0:e.appContext.app,i=n?.config.globalProperties.$vueFlowStorage??uo.instance;return uo.instance=i??new uo,n&&(n.config.globalProperties.$vueFlowStorage=uo.instance),uo.instance}set(e,n){return this.flows.set(e,n)}get(e){return this.flows.get(e)}remove(e){return this.flows.delete(e)}create(e,n){const i=gy(),r=Fr(i),o={};for(const[f,h]of Object.entries(r.hooks)){const m=`on${f.charAt(0).toUpperCase()+f.slice(1)}`;o[m]=h.on}const s={};for(const[f,h]of Object.entries(r.hooks))s[f]=h.trigger;const a=Re(()=>{const f=new Map;for(const h of r.nodes)f.set(h.id,h);return f}),l=Re(()=>{const f=new Map;for(const h of r.edges)f.set(h.id,h);return f}),u=K3(r,a,l),c=x3(r,a,l);c.setState({...r,...n});const d={...o,...u,...c,...$C(r),nodeLookup:a,edgeLookup:l,emits:s,id:e,vueFlowVersion:"1.48.2",$destroy:()=>{this.remove(e)}};return this.set(e,d),d}getId(){return`vue-flow-${this.currentId++}`}}function Dt(t){const e=uo.getInstance(),n=Uu(),i=typeof t=="object",r=i?t:{id:t},o=r.id,s=o??n?.vueFlowId;let a;if(n){const l=Pn(Dg,null);typeof l<"u"&&l!==null&&(!s||l.id===s)&&(a=l)}if(a||s&&(a=e.get(s)),!a||s&&a.id!==s){const l=o??e.getId(),u=e.create(l,r);a=u,(n??Fu(!0)).run(()=>{lt(u.applyDefault,(d,f,h)=>{const m=g=>{u.applyNodeChanges(g)},v=g=>{u.applyEdgeChanges(g)};d?(u.onNodesChange(m),u.onEdgesChange(v)):(u.hooks.value.nodesChange.off(m),u.hooks.value.edgesChange.off(v)),h(()=>{u.hooks.value.nodesChange.off(m),u.hooks.value.edgesChange.off(v)})},{immediate:!0}),ha(()=>{if(a){const d=e.get(a.id);d?d.$destroy():Oa(`No store instance found for id ${a.id} in storage.`)}})})}else i&&a.setState(r);if(n&&(Ur(Dg,a),n.vueFlowId=a.id),i){const l=Si();l?.type.name!=="VueFlow"&&a.emits.error(new Xt(Gt.USEVUEFLOW_OPTIONS))}return a}function Z3(t){const{emits:e,dimensions:n}=Dt();let i;bn(()=>{const r=()=>{var o,s;if(!t.value||!(((s=(o=t.value).checkVisibility)==null?void 0:s.call(o))??!0))return;const a=nc(t.value);(a.width===0||a.height===0)&&e.error(new Xt(Gt.MISSING_VIEWPORT_DIMENSIONS)),n.value={width:a.width||500,height:a.height||500}};r(),window.addEventListener("resize",r),t.value&&(i=new ResizeObserver(()=>r()),i.observe(t.value)),Hr(()=>{window.removeEventListener("resize",r),i&&t.value&&i.unobserve(t.value)})})}const j3={name:"UserSelection",compatConfig:{MODE:3}},J3=Nt({...j3,props:{userSelectionRect:{}},setup(t){return(e,n)=>(ce(),me("div",{class:"vue-flow__selection vue-flow__container",style:rt({width:`${e.userSelectionRect.width}px`,height:`${e.userSelectionRect.height}px`,transform:`translate(${e.userSelectionRect.x}px, ${e.userSelectionRect.y}px)`})},null,4))}}),Q3=["tabIndex"],eN={name:"NodesSelection",compatConfig:{MODE:3}},tN=Nt({...eN,setup(t){const{emits:e,viewport:n,getSelectedNodes:i,noPanClassName:r,disableKeyboardA11y:o,userSelectionActive:s}=Dt(),a=my(),l=Ce(null),u=dy({el:l,onStart(m){e.selectionDragStart(m),e.nodeDragStart(m)},onDrag(m){e.selectionDrag(m),e.nodeDrag(m)},onStop(m){e.selectionDragStop(m),e.nodeDragStop(m)}});bn(()=>{var m;o.value||(m=l.value)==null||m.focus({preventScroll:!0})});const c=Re(()=>Wh(i.value)),d=Re(()=>({width:`${c.value.width}px`,height:`${c.value.height}px`,top:`${c.value.y}px`,left:`${c.value.x}px`}));function f(m){e.selectionContextMenu({event:m,nodes:i.value})}function h(m){o.value||is[m.key]&&(m.preventDefault(),a({x:is[m.key].x,y:is[m.key].y},m.shiftKey))}return(m,v)=>!he(s)&&c.value.width&&c.value.height?(ce(),me("div",{key:0,class:ut(["vue-flow__nodesselection vue-flow__container",he(r)]),style:rt({transform:`translate(${he(n).x}px,${he(n).y}px) scale(${he(n).zoom})`})},[q("div",{ref_key:"el",ref:l,class:ut([{dragging:he(u)},"vue-flow__nodesselection-rect"]),style:rt(d.value),tabIndex:he(o)?void 0:-1,onContextmenu:f,onKeydown:h},null,46,Q3)],6)):He("",!0)}});function nN(t,e){return{x:t.clientX-e.left,y:t.clientY-e.top}}const iN={name:"Pane",compatConfig:{MODE:3}},rN=Nt({...iN,props:{isSelecting:{type:Boolean},selectionKeyPressed:{type:Boolean}},setup(t){const{vueFlowRef:e,nodes:n,viewport:i,emits:r,userSelectionActive:o,removeSelectedElements:s,userSelectionRect:a,elementsSelectable:l,nodesSelectionActive:u,getSelectedEdges:c,getSelectedNodes:d,removeNodes:f,removeEdges:h,selectionMode:m,deleteKeyCode:v,multiSelectionKeyCode:g,multiSelectionActive:p,edgeLookup:b,nodeLookup:M,connectionLookup:y,defaultEdgeOptions:I,connectionStartHandle:D,panOnDrag:B}=Dt(),_=Pr(null),x=Pr(new Set),R=Pr(new Set),T=Pr(null),A=bt(()=>l.value&&(t.isSelecting||o.value)),X=bt(()=>D.value!==null);let E=!1,k=!1;const C=ta(v,{actInsideInputWithModifier:!1}),N=ta(g);lt(C,te=>{te&&(f(d.value),h(c.value),u.value=!1)}),lt(N,te=>{p.value=te});function U(te,L){return j=>{j.target===L&&te?.(j)}}function H(te){if(E||X.value){E=!1;return}r.paneClick(te),s(),u.value=!1}function G(te){var L;if(Array.isArray(B.value)&&((L=B.value)!=null&&L.includes(2))){te.preventDefault();return}r.paneContextMenu(te)}function ne(te){r.paneScroll(te)}function re(te){var L,j,Q;if(T.value=((L=e.value)==null?void 0:L.getBoundingClientRect())??null,!l.value||!t.isSelecting||te.button!==0||te.target!==_.value||!T.value)return;(Q=(j=te.target)==null?void 0:j.setPointerCapture)==null||Q.call(j,te.pointerId);const{x:fe,y:Se}=nN(te,T.value);k=!0,E=!1,s(),a.value={width:0,height:0,startX:fe,startY:Se,x:fe,y:Se},r.selectionStart(te)}function ye(te){var L;if(!T.value||!a.value)return;E=!0;const{x:j,y:Q}=fi(te,T.value),{startX:fe=0,startY:Se=0}=a.value,Ee={startX:fe,startY:Se,x:j<fe?j:fe,y:Q<Se?Q:Se,width:Math.abs(j-fe),height:Math.abs(Q-Se)},$=x.value,W=R.value;x.value=new Set(iy(n.value,Ee,i.value,m.value===Gh.Partial,!0).map(O=>O.id)),R.value=new Set;const F=((L=I.value)==null?void 0:L.selectable)??!0;for(const O of x.value){const z=y.value.get(O);if(z)for(const{edgeId:Y}of z.values()){const S=b.value.get(Y);S&&(S.selectable??F)&&R.value.add(Y)}}if(!Ng($,x.value)){const O=Tr(M.value,x.value,!0);r.nodesChange(O)}if(!Ng(W,R.value)){const O=Tr(b.value,R.value);r.edgesChange(O)}a.value=Ee,o.value=!0,u.value=!1}function we(te){var L;te.button!==0||!k||((L=te.target)==null||L.releasePointerCapture(te.pointerId),!o.value&&a.value&&te.target===_.value&&H(te),o.value=!1,a.value=null,u.value=x.value.size>0,r.selectionEnd(te),t.selectionKeyPressed&&(E=!1),k=!1)}return(te,L)=>(ce(),me("div",{ref_key:"container",ref:_,class:ut(["vue-flow__pane vue-flow__container",{selection:te.isSelecting}]),onClick:L[0]||(L[0]=j=>A.value?void 0:U(H,_.value)(j)),onContextmenu:L[1]||(L[1]=j=>U(G,_.value)(j)),onWheelPassive:L[2]||(L[2]=j=>U(ne,_.value)(j)),onPointerenter:L[3]||(L[3]=j=>A.value?void 0:he(r).paneMouseEnter(j)),onPointerdown:L[4]||(L[4]=j=>A.value?re(j):he(r).paneMouseMove(j)),onPointermove:L[5]||(L[5]=j=>A.value?ye(j):he(r).paneMouseMove(j)),onPointerup:L[6]||(L[6]=j=>A.value?we(j):void 0),onPointerleave:L[7]||(L[7]=j=>he(r).paneMouseLeave(j))},[er(te.$slots,"default"),he(o)&&he(a)?(ce(),Jt(J3,{key:0,"user-selection-rect":he(a)},null,8,["user-selection-rect"])):He("",!0),he(u)&&he(d).length?(ce(),Jt(tN,{key:1})):He("",!0)],34))}}),oN={name:"Transform",compatConfig:{MODE:3}},sN=Nt({...oN,setup(t){const{viewport:e,fitViewOnInit:n,fitViewOnInitDone:i}=Dt(),r=Re(()=>n.value?!i.value:!1),o=Re(()=>`translate(${e.value.x}px,${e.value.y}px) scale(${e.value.zoom})`);return(s,a)=>(ce(),me("div",{class:"vue-flow__transformationpane vue-flow__container",style:rt({transform:o.value,opacity:r.value?0:void 0})},[er(s.$slots,"default")],4))}}),aN={name:"Viewport",compatConfig:{MODE:3}},lN=Nt({...aN,setup(t){const{minZoom:e,maxZoom:n,defaultViewport:i,translateExtent:r,zoomActivationKeyCode:o,selectionKeyCode:s,panActivationKeyCode:a,panOnScroll:l,panOnScrollMode:u,panOnScrollSpeed:c,panOnDrag:d,zoomOnDoubleClick:f,zoomOnPinch:h,zoomOnScroll:m,preventScrolling:v,noWheelClassName:g,noPanClassName:p,emits:b,connectionStartHandle:M,userSelectionActive:y,paneDragging:I,d3Zoom:D,d3Selection:B,d3ZoomHandler:_,viewport:x,viewportRef:R,paneClickDistance:T}=Dt();Z3(R);const A=Pr(!1),X=Pr(!1);let E=null,k=!1,C=0,N={x:0,y:0,zoom:0};const U=ta(a),H=ta(s),G=ta(o),ne=bt(()=>(!H.value||H.value&&s.value===!0)&&(U.value||d.value)),re=bt(()=>U.value||l.value),ye=bt(()=>s.value===!0&&ne.value!==!0),we=bt(()=>H.value&&s.value!==!0||y.value||ye.value),te=bt(()=>M.value!==null);bn(()=>{if(!R.value){Oa("Viewport element is missing");return}const Se=R.value,Ee=Se.getBoundingClientRect(),$=TP().clickDistance(T.value).scaleExtent([e.value,n.value]).translateExtent(r.value),W=Xn(Se).call($),F=W.on("wheel.zoom"),O=ps.translate(i.value.x??0,i.value.y??0).scale(or(i.value.zoom??1,e.value,n.value)),z=[[0,0],[Ee.width,Ee.height]],Y=$.constrain()(O,z,r.value);$.transform(W,Y),$.wheelDelta(Gf),D.value=$,B.value=W,_.value=F,x.value={x:Y.x,y:Y.y,zoom:Y.k},$.on("start",S=>{var Z;if(!S.sourceEvent)return null;C=S.sourceEvent.button,A.value=!0;const J=Q(S.transform);((Z=S.sourceEvent)==null?void 0:Z.type)==="mousedown"&&(I.value=!0),N=J,b.viewportChangeStart(J),b.moveStart({event:S,flowTransform:J})}),$.on("end",S=>{if(!S.sourceEvent)return null;if(A.value=!1,I.value=!1,L(ne.value,C??0)&&!k&&b.paneContextMenu(S.sourceEvent),k=!1,j(N,S.transform)){const Z=Q(S.transform);N=Z,b.viewportChangeEnd(Z),b.moveEnd({event:S,flowTransform:Z})}}),$.filter(S=>{var Z;const J=G.value||m.value,ee=h.value&&S.ctrlKey,ie=S.button,P=S.type==="wheel";if(ie===1&&S.type==="mousedown"&&(fe(S,"vue-flow__node")||fe(S,"vue-flow__edge")))return!0;if(!ne.value&&!J&&!re.value&&!f.value&&!h.value||y.value||te.value&&!P||!f.value&&S.type==="dblclick"||fe(S,g.value)&&P||fe(S,p.value)&&(!P||re.value&&P&&!G.value)||!h.value&&S.ctrlKey&&P||!J&&!re.value&&!ee&&P)return!1;if(!h&&S.type==="touchstart"&&((Z=S.touches)==null?void 0:Z.length)>1)return S.preventDefault(),!1;if(!ne.value&&(S.type==="mousedown"||S.type==="touchstart")||ye.value&&Array.isArray(d.value)&&d.value.includes(0)&&ie===0||Array.isArray(d.value)&&!d.value.includes(ie)&&(S.type==="mousedown"||S.type==="touchstart"))return!1;const w=Array.isArray(d.value)&&d.value.includes(ie)||s.value===!0&&Array.isArray(d.value)&&!d.value.includes(0)||!ie||ie<=1;return(!S.ctrlKey||U.value||P)&&w}),lt([y,ne],()=>{y.value&&!A.value?$.on("zoom",null):y.value||$.on("zoom",S=>{x.value={x:S.transform.x,y:S.transform.y,zoom:S.transform.k};const Z=Q(S.transform);k=L(ne.value,C??0),b.viewportChange(Z),b.move({event:S,flowTransform:Z})})},{immediate:!0}),lt([y,re,u,G,h,v,g],()=>{re.value&&!G.value&&!y.value?W.on("wheel.zoom",S=>{if(fe(S,g.value))return!1;const Z=G.value||m.value,J=h.value&&S.ctrlKey;if(!(!v.value||re.value||Z||J))return!1;S.preventDefault(),S.stopImmediatePropagation();const ie=W.property("__zoom").k||1,P=ba();if(!U.value&&S.ctrlKey&&h.value&&P){const de=li(S),Ue=Gf(S),Ie=ie*2**Ue;$.scaleTo(W,Ie,de,S);return}const w=S.deltaMode===1?20:1;let K=u.value===ea.Vertical?0:S.deltaX*w,ae=u.value===ea.Horizontal?0:S.deltaY*w;!P&&S.shiftKey&&u.value!==ea.Vertical&&!K&&ae&&(K=ae,ae=0),$.translateBy(W,-(K/ie)*c.value,-(ae/ie)*c.value);const ge=Q(W.property("__zoom"));E&&clearTimeout(E),X.value?(b.move({event:S,flowTransform:ge}),b.viewportChange(ge),E=setTimeout(()=>{b.moveEnd({event:S,flowTransform:ge}),b.viewportChangeEnd(ge),X.value=!1},150)):(X.value=!0,b.moveStart({event:S,flowTransform:ge}),b.viewportChangeStart(ge))},{passive:!1}):typeof F<"u"&&W.on("wheel.zoom",function(S,Z){const J=!v.value&&S.type==="wheel"&&!S.ctrlKey,ee=G.value||m.value,ie=h.value&&S.ctrlKey;if(!ee&&!l.value&&!ie&&S.type==="wheel"||J||fe(S,g.value))return null;S.preventDefault(),F.call(this,S,Z)},{passive:!1})},{immediate:!0})});function L(Se,Ee){return Ee===2&&Array.isArray(Se)&&Se.includes(2)}function j(Se,Ee){return Se.x!==Ee.x&&!Number.isNaN(Ee.x)||Se.y!==Ee.y&&!Number.isNaN(Ee.y)||Se.zoom!==Ee.k&&!Number.isNaN(Ee.k)}function Q(Se){return{x:Se.x,y:Se.y,zoom:Se.k}}function fe(Se,Ee){return Se.target.closest(`.${Ee}`)}return(Se,Ee)=>(ce(),me("div",{ref_key:"viewportRef",ref:R,class:"vue-flow__viewport vue-flow__container"},[tt(rN,{"is-selecting":we.value,"selection-key-pressed":he(H),class:ut({connecting:te.value,dragging:he(I),draggable:he(d)===!0||Array.isArray(he(d))&&he(d).includes(0)})},{default:cn(()=>[tt(sN,null,{default:cn(()=>[er(Se.$slots,"default")]),_:3})]),_:3},8,["is-selecting","selection-key-pressed","class"])],512))}}),uN=["id"],cN=["id"],dN=["id"],fN={name:"A11yDescriptions",compatConfig:{MODE:3}},hN=Nt({...fN,setup(t){const{id:e,disableKeyboardA11y:n,ariaLiveMessage:i}=Dt();return(r,o)=>(ce(),me(it,null,[q("div",{id:`${he(q_)}-${he(e)}`,style:{display:"none"}}," Press enter or space to select a node. "+Te(he(n)?"":"You can then use the arrow keys to move the node around.")+" You can then use the arrow keys to move the node around, press delete to remove it and press escape to cancel. ",9,uN),q("div",{id:`${he(K_)}-${he(e)}`,style:{display:"none"}}," Press enter or space to select an edge. You can then press delete to remove it or press escape to cancel. ",8,cN),he(n)?He("",!0):(ce(),me("div",{key:0,id:`${he(NP)}-${he(e)}`,"aria-live":"assertive","aria-atomic":"true",style:{position:"absolute",width:"1px",height:"1px",margin:"-1px",border:"0",padding:"0",overflow:"hidden",clip:"rect(0px, 0px, 0px, 0px)","clip-path":"inset(100%)"}},Te(he(i)),9,dN))],64))}});function pN(){const t=Dt();lt(()=>t.viewportHelper.value.viewportInitialized,e=>{e&&setTimeout(()=>{t.emits.init(t),t.emits.paneReady(t)},1)})}function mN(t,e,n){return n===Xe.Left?t-e:n===Xe.Right?t+e:t}function gN(t,e,n){return n===Xe.Top?t-e:n===Xe.Bottom?t+e:t}const Kh=function({radius:t=10,centerX:e=0,centerY:n=0,position:i=Xe.Top,type:r}){return wt("circle",{class:`vue-flow__edgeupdater vue-flow__edgeupdater-${r}`,cx:mN(e,t,i),cy:gN(n,t,i),r:t,stroke:"transparent",fill:"transparent"})};Kh.props=["radius","centerX","centerY","position","type"];Kh.compatConfig={MODE:3};const Bg=Kh,vN=Nt({name:"Edge",compatConfig:{MODE:3},props:["id"],setup(t){const{id:e,addSelectedEdges:n,connectionMode:i,edgeUpdaterRadius:r,emits:o,nodesSelectionActive:s,noPanClassName:a,getEdgeTypes:l,removeSelectedEdges:u,findEdge:c,findNode:d,isValidConnection:f,multiSelectionActive:h,disableKeyboardA11y:m,elementsSelectable:v,edgesUpdatable:g,edgesFocusable:p,hooks:b}=Dt(),M=Re(()=>c(t.id)),{emit:y,on:I}=l3(M.value,o),D=Pn(rc),B=Si(),_=Ce(!1),x=Ce(!1),R=Ce(""),T=Ce(null),A=Ce("source"),X=Ce(null),E=bt(()=>typeof M.value.selectable>"u"?v.value:M.value.selectable),k=bt(()=>typeof M.value.updatable>"u"?g.value:M.value.updatable),C=bt(()=>typeof M.value.focusable>"u"?p.value:M.value.focusable);Ur(o3,t.id),Ur(s3,X);const N=Re(()=>M.value.class instanceof Function?M.value.class(M.value):M.value.class),U=Re(()=>M.value.style instanceof Function?M.value.style(M.value):M.value.style),H=Re(()=>{const O=M.value.type||"default",z=D?.[`edge-${O}`];if(z)return z;let Y=M.value.template??l.value[O];if(typeof Y=="string"&&B){const S=Object.keys(B.appContext.components);S&&S.includes(O)&&(Y=i0(O,!1))}return Y&&typeof Y!="string"?Y:(o.error(new Xt(Gt.EDGE_TYPE_MISSING,Y)),!1)}),{handlePointerDown:G}=hy({nodeId:R,handleId:T,type:A,isValidConnection:f,edgeUpdaterType:A,onEdgeUpdate:ye,onEdgeUpdateEnd:we});return()=>{const O=d(M.value.source),z=d(M.value.target),Y="pathOptions"in M.value?M.value.pathOptions:{};if(!O&&!z)return o.error(new Xt(Gt.EDGE_SOURCE_TARGET_MISSING,M.value.id,M.value.source,M.value.target)),null;if(!O)return o.error(new Xt(Gt.EDGE_SOURCE_MISSING,M.value.id,M.value.source)),null;if(!z)return o.error(new Xt(Gt.EDGE_TARGET_MISSING,M.value.id,M.value.target)),null;if(!M.value||M.value.hidden||O.hidden||z.hidden)return null;let S;i.value===zr.Strict?S=O.handleBounds.source:S=[...O.handleBounds.source||[],...O.handleBounds.target||[]];const Z=Tg(S,M.value.sourceHandle);let J;i.value===zr.Strict?J=z.handleBounds.target:J=[...z.handleBounds.target||[],...z.handleBounds.source||[]];const ee=Tg(J,M.value.targetHandle),ie=Z?.position||Xe.Bottom,P=ee?.position||Xe.Top,{x:w,y:K}=ms(O,Z,ie),{x:ae,y:ge}=ms(z,ee,P);return M.value.sourceX=w,M.value.sourceY=K,M.value.targetX=ae,M.value.targetY=ge,wt("g",{ref:X,key:t.id,"data-id":t.id,class:["vue-flow__edge",`vue-flow__edge-${H.value===!1?"default":M.value.type||"default"}`,a.value,N.value,{updating:_.value,selected:M.value.selected,animated:M.value.animated,inactive:!E.value&&!b.value.edgeClick.hasListeners()}],tabIndex:C.value?0:void 0,"aria-label":M.value.ariaLabel===null?void 0:M.value.ariaLabel??`Edge from ${M.value.source} to ${M.value.target}`,"aria-describedby":C.value?`${K_}-${e}`:void 0,"aria-roledescription":"edge",role:C.value?"group":"img",...M.value.domAttributes,onClick:L,onContextmenu:j,onDblclick:Q,onMouseenter:fe,onMousemove:Se,onMouseleave:Ee,onKeyDown:C.value?F:void 0},[x.value?null:wt(H.value===!1?l.value.default:H.value,{id:t.id,sourceNode:O,targetNode:z,source:M.value.source,target:M.value.target,type:M.value.type,updatable:k.value,selected:M.value.selected,animated:M.value.animated,label:M.value.label,labelStyle:M.value.labelStyle,labelShowBg:M.value.labelShowBg,labelBgStyle:M.value.labelBgStyle,labelBgPadding:M.value.labelBgPadding,labelBgBorderRadius:M.value.labelBgBorderRadius,data:M.value.data,events:{...M.value.events,...I},style:U.value,markerStart:`url('#${xa(M.value.markerStart,e)}')`,markerEnd:`url('#${xa(M.value.markerEnd,e)}')`,sourcePosition:ie,targetPosition:P,sourceX:w,sourceY:K,targetX:ae,targetY:ge,sourceHandleId:M.value.sourceHandle,targetHandleId:M.value.targetHandle,interactionWidth:M.value.interactionWidth,...Y}),[k.value==="source"||k.value===!0?[wt("g",{onMousedown:$,onMouseenter:ne,onMouseout:re},wt(Bg,{position:ie,centerX:w,centerY:K,radius:r.value,type:"source","data-type":"source"}))]:null,k.value==="target"||k.value===!0?[wt("g",{onMousedown:W,onMouseenter:ne,onMouseout:re},wt(Bg,{position:P,centerX:ae,centerY:ge,radius:r.value,type:"target","data-type":"target"}))]:null]])};function ne(){_.value=!0}function re(){_.value=!1}function ye(O,z){y.update({event:O,edge:M.value,connection:z})}function we(O){y.updateEnd({event:O,edge:M.value}),x.value=!1}function te(O,z){O.button===0&&(x.value=!0,R.value=z?M.value.target:M.value.source,T.value=(z?M.value.targetHandle:M.value.sourceHandle)??null,A.value=z?"target":"source",y.updateStart({event:O,edge:M.value}),G(O))}function L(O){var z;const Y={event:O,edge:M.value};E.value&&(s.value=!1,M.value.selected&&h.value?(u([M.value]),(z=X.value)==null||z.blur()):n([M.value])),y.click(Y)}function j(O){y.contextMenu({event:O,edge:M.value})}function Q(O){y.doubleClick({event:O,edge:M.value})}function fe(O){y.mouseEnter({event:O,edge:M.value})}function Se(O){y.mouseMove({event:O,edge:M.value})}function Ee(O){y.mouseLeave({event:O,edge:M.value})}function $(O){te(O,!0)}function W(O){te(O,!1)}function F(O){var z;!m.value&&Z_.includes(O.key)&&E.value&&(O.key==="Escape"?((z=X.value)==null||z.blur(),u([c(t.id)])):n([c(t.id)]))}}}),_N=vN,yN=Nt({name:"ConnectionLine",compatConfig:{MODE:3},setup(){var t;const{id:e,connectionMode:n,connectionStartHandle:i,connectionEndHandle:r,connectionPosition:o,connectionLineType:s,connectionLineStyle:a,connectionLineOptions:l,connectionStatus:u,viewport:c,findNode:d}=Dt(),f=(t=Pn(rc))==null?void 0:t["connection-line"],h=Re(()=>{var b;return d((b=i.value)==null?void 0:b.nodeId)}),m=Re(()=>{var b;return d((b=r.value)==null?void 0:b.nodeId)??null}),v=Re(()=>({x:(o.value.x-c.value.x)/c.value.zoom,y:(o.value.y-c.value.y)/c.value.zoom})),g=Re(()=>l.value.markerStart?`url(#${xa(l.value.markerStart,e)})`:""),p=Re(()=>l.value.markerEnd?`url(#${xa(l.value.markerEnd,e)})`:"");return()=>{var b,M,y;if(!h.value||!i.value)return null;const I=i.value.id,D=i.value.type,B=h.value.handleBounds;let _=B?.[D]??[];if(n.value===zr.Loose){const U=B?.[D==="source"?"target":"source"]??[];_=[..._,...U]}if(!_)return null;const x=(I?_.find(U=>U.id===I):_[0])??null,R=x?.position??Xe.Top,{x:T,y:A}=ms(h.value,x,R);let X=null;m.value&&(n.value===zr.Strict?X=((b=m.value.handleBounds[D==="source"?"target":"source"])==null?void 0:b.find(U=>{var H;return U.id===((H=r.value)==null?void 0:H.id)}))||null:X=((M=[...m.value.handleBounds.source??[],...m.value.handleBounds.target??[]])==null?void 0:M.find(U=>{var H;return U.id===((H=r.value)==null?void 0:H.id)}))||null);const E=((y=r.value)==null?void 0:y.position)??(R?Wf[R]:null);if(!R||!E)return null;const k=s.value??l.value.type??ao.Bezier;let C="";const N={sourceX:T,sourceY:A,sourcePosition:R,targetX:v.value.x,targetY:v.value.y,targetPosition:E};return k===ao.Bezier?[C]=yy(N):k===ao.Step?[C]=Yf({...N,borderRadius:0}):k===ao.SmoothStep?[C]=Yf(N):k===ao.SimpleBezier?[C]=xy(N):C=`M${T},${A} ${v.value.x},${v.value.y}`,wt("svg",{class:"vue-flow__edges vue-flow__connectionline vue-flow__container"},wt("g",{class:"vue-flow__connection"},f?wt(f,{sourceX:T,sourceY:A,sourcePosition:R,targetX:v.value.x,targetY:v.value.y,targetPosition:E,sourceNode:h.value,sourceHandle:x,targetNode:m.value,targetHandle:X,markerEnd:p.value,markerStart:g.value,connectionStatus:u.value}):wt("path",{d:C,class:[l.value.class,u.value,"vue-flow__connection-path"],style:{...a.value,...l.value.style},"marker-end":p.value,"marker-start":g.value})))}}}),xN=yN,bN=["id","markerWidth","markerHeight","markerUnits","orient"],SN={name:"MarkerType",compatConfig:{MODE:3}},MN=Nt({...SN,props:{id:{},type:{},color:{default:"none"},width:{default:12.5},height:{default:12.5},markerUnits:{default:"strokeWidth"},orient:{default:"auto-start-reverse"},strokeWidth:{default:1}},setup(t){return(e,n)=>(ce(),me("marker",{id:e.id,class:"vue-flow__arrowhead",viewBox:"-10 -10 20 20",refX:"0",refY:"0",markerWidth:`${e.width}`,markerHeight:`${e.height}`,markerUnits:e.markerUnits,orient:e.orient},[e.type===he($f).ArrowClosed?(ce(),me("polyline",{key:0,style:rt({stroke:e.color,fill:e.color,strokeWidth:e.strokeWidth}),"stroke-linecap":"round","stroke-linejoin":"round",points:"-5,-4 0,0 -5,4 -5,-4"},null,4)):He("",!0),e.type===he($f).Arrow?(ce(),me("polyline",{key:1,style:rt({stroke:e.color,strokeWidth:e.strokeWidth}),"stroke-linecap":"round","stroke-linejoin":"round",fill:"none",points:"-5,-4 0,0 -5,4"},null,4)):He("",!0)],8,bN))}}),wN={class:"vue-flow__marker vue-flow__container","aria-hidden":"true"},EN={name:"MarkerDefinitions",compatConfig:{MODE:3}},TN=Nt({...EN,setup(t){const{id:e,edges:n,connectionLineOptions:i,defaultMarkerColor:r}=Dt(),o=Re(()=>{const s=new Set,a=[],l=u=>{if(u){const c=xa(u,e);s.has(c)||(typeof u=="object"?a.push({...u,id:c,color:u.color||r.value}):a.push({id:c,color:r.value,type:u}),s.add(c))}};for(const u of[i.value.markerEnd,i.value.markerStart])l(u);for(const u of n.value)for(const c of[u.markerStart,u.markerEnd])l(c);return a.sort((u,c)=>u.id.localeCompare(c.id))});return(s,a)=>(ce(),me("svg",wN,[q("defs",null,[(ce(!0),me(it,null,Ht(o.value,l=>(ce(),Jt(MN,{id:l.id,key:l.id,type:l.type,color:l.color,width:l.width,height:l.height,markerUnits:l.markerUnits,"stroke-width":l.strokeWidth,orient:l.orient},null,8,["id","type","color","width","height","markerUnits","stroke-width","orient"]))),128))])]))}}),AN={name:"Edges",compatConfig:{MODE:3}},CN=Nt({...AN,setup(t){const{findNode:e,getEdges:n,elevateEdgesOnSelect:i}=Dt();return(r,o)=>(ce(),me(it,null,[tt(TN),(ce(!0),me(it,null,Ht(he(n),s=>(ce(),me("svg",{key:s.id,class:"vue-flow__edges vue-flow__container",style:rt({zIndex:he(YP)(s,he(e),he(i))})},[tt(he(_N),{id:s.id},null,8,["id"])],4))),128)),tt(he(xN))],64))}}),RN=Nt({name:"Node",compatConfig:{MODE:3},props:["id","resizeObserver"],setup(t){const{id:e,noPanClassName:n,selectNodesOnDrag:i,nodesSelectionActive:r,multiSelectionActive:o,emits:s,removeSelectedNodes:a,addSelectedNodes:l,updateNodeDimensions:u,onUpdateNodeInternals:c,getNodeTypes:d,nodeExtent:f,elevateNodesOnSelect:h,disableKeyboardA11y:m,ariaLiveMessage:v,snapToGrid:g,snapGrid:p,nodeDragThreshold:b,nodesDraggable:M,elementsSelectable:y,nodesConnectable:I,nodesFocusable:D,hooks:B}=Dt(),_=Ce(null);Ur(cy,_),Ur(qh,t.id);const x=Pn(rc),R=Si(),T=my(),{node:A,parentNode:X}=py(t.id),{emit:E,on:k}=d3(A,s),C=bt(()=>typeof A.draggable>"u"?M.value:A.draggable),N=bt(()=>typeof A.selectable>"u"?y.value:A.selectable),U=bt(()=>typeof A.connectable>"u"?I.value:A.connectable),H=bt(()=>typeof A.focusable>"u"?D.value:A.focusable),G=Re(()=>N.value||C.value||B.value.nodeClick.hasListeners()||B.value.nodeDoubleClick.hasListeners()||B.value.nodeMouseEnter.hasListeners()||B.value.nodeMouseMove.hasListeners()||B.value.nodeMouseLeave.hasListeners()),ne=bt(()=>!!A.dimensions.width&&!!A.dimensions.height),re=Re(()=>{const z=A.type||"default",Y=x?.[`node-${z}`];if(Y)return Y;let S=A.template||d.value[z];if(typeof S=="string"&&R){const Z=Object.keys(R.appContext.components);Z&&Z.includes(z)&&(S=i0(z,!1))}return S&&typeof S!="string"?S:(s.error(new Xt(Gt.NODE_TYPE_MISSING,S)),!1)}),ye=dy({id:t.id,el:_,disabled:()=>!C.value,selectable:N,dragHandle:()=>A.dragHandle,onStart(z){E.dragStart(z)},onDrag(z){E.drag(z)},onStop(z){E.dragStop(z)},onClick(z){F(z)}}),we=Re(()=>A.class instanceof Function?A.class(A):A.class),te=Re(()=>{const z=(A.style instanceof Function?A.style(A):A.style)||{},Y=A.width instanceof Function?A.width(A):A.width,S=A.height instanceof Function?A.height(A):A.height;return!z.width&&Y&&(z.width=typeof Y=="string"?Y:`${Y}px`),!z.height&&S&&(z.height=typeof S=="string"?S:`${S}px`),z}),L=bt(()=>Number(A.zIndex??te.value.zIndex??0));return c(z=>{(z.includes(t.id)||!z.length)&&Q()}),bn(()=>{lt(()=>A.hidden,(z=!1,Y,S)=>{!z&&_.value&&(t.resizeObserver.observe(_.value),S(()=>{_.value&&t.resizeObserver.unobserve(_.value)}))},{immediate:!0,flush:"post"})}),lt([()=>A.type,()=>A.sourcePosition,()=>A.targetPosition],()=>{pn(()=>{u([{id:t.id,nodeElement:_.value,forceUpdate:!0}])})}),lt([()=>A.position.x,()=>A.position.y,()=>{var z;return(z=X.value)==null?void 0:z.computedPosition.x},()=>{var z;return(z=X.value)==null?void 0:z.computedPosition.y},()=>{var z;return(z=X.value)==null?void 0:z.computedPosition.z},L,()=>A.selected,()=>A.dimensions.height,()=>A.dimensions.width,()=>{var z;return(z=X.value)==null?void 0:z.dimensions.height},()=>{var z;return(z=X.value)==null?void 0:z.dimensions.width}],([z,Y,S,Z,J,ee])=>{const ie={x:z,y:Y,z:ee+(h.value&&A.selected?1e3:0)};typeof S<"u"&&typeof Z<"u"?A.computedPosition=VP({x:S,y:Z,z:J},ie):A.computedPosition=ie},{flush:"post",immediate:!0}),lt([()=>A.extent,f],([z,Y],[S,Z])=>{(z!==S||Y!==Z)&&j()}),A.extent==="parent"||typeof A.extent=="object"&&"range"in A.extent&&A.extent.range==="parent"?Df(()=>ne).toBe(!0).then(j):j(),()=>A.hidden?null:wt("div",{ref:_,"data-id":A.id,class:["vue-flow__node",`vue-flow__node-${re.value===!1?"default":A.type||"default"}`,{[n.value]:C.value,dragging:ye?.value,draggable:C.value,selected:A.selected,selectable:N.value,parent:A.isParent},we.value],style:{visibility:ne.value?"visible":"hidden",zIndex:A.computedPosition.z??L.value,transform:`translate(${A.computedPosition.x}px,${A.computedPosition.y}px)`,pointerEvents:G.value?"all":"none",...te.value},tabIndex:H.value?0:void 0,role:H.value?"group":void 0,"aria-describedby":m.value?void 0:`${q_}-${e}`,"aria-label":A.ariaLabel,"aria-roledescription":"node",...A.domAttributes,onMouseenter:fe,onMousemove:Se,onMouseleave:Ee,onContextmenu:$,onClick:F,onDblclick:W,onKeydown:O},[wt(re.value===!1?d.value.default:re.value,{id:A.id,type:A.type,data:A.data,events:{...A.events,...k},selected:A.selected,resizing:A.resizing,dragging:ye.value,connectable:U.value,position:A.computedPosition,dimensions:A.dimensions,isValidTargetPos:A.isValidTargetPos,isValidSourcePos:A.isValidSourcePos,parent:A.parentNode,parentNodeId:A.parentNode,zIndex:A.computedPosition.z??L.value,targetPosition:A.targetPosition,sourcePosition:A.sourcePosition,label:A.label,dragHandle:A.dragHandle,onUpdateNodeInternals:Q})]);function j(){const z=A.computedPosition,{computedPosition:Y,position:S}=Xh(A,g.value?ic(z,p.value):z,s.error,f.value,X.value);(A.computedPosition.x!==Y.x||A.computedPosition.y!==Y.y)&&(A.computedPosition={...A.computedPosition,...Y}),(A.position.x!==S.x||A.position.y!==S.y)&&(A.position=S)}function Q(){_.value&&u([{id:t.id,nodeElement:_.value,forceUpdate:!0}])}function fe(z){ye?.value||E.mouseEnter({event:z,node:A})}function Se(z){ye?.value||E.mouseMove({event:z,node:A})}function Ee(z){ye?.value||E.mouseLeave({event:z,node:A})}function $(z){return E.contextMenu({event:z,node:A})}function W(z){return E.doubleClick({event:z,node:A})}function F(z){N.value&&(!i.value||!C.value||b.value>0)&&Xf(A,o.value,l,a,r,!1,_.value),E.click({event:z,node:A})}function O(z){if(!(Hf(z)||m.value))if(Z_.includes(z.key)&&N.value){const Y=z.key==="Escape";Xf(A,o.value,l,a,r,Y,_.value)}else C.value&&A.selected&&is[z.key]&&(z.preventDefault(),v.value=`Moved selected node ${z.key.replace("Arrow","").toLowerCase()}. New position, x: ${~~A.position.x}, y: ${~~A.position.y}`,T({x:is[z.key].x,y:is[z.key].y},z.shiftKey))}}}),IN=RN;function PN(t={includeHiddenNodes:!1}){const{nodes:e}=Dt();return Re(()=>{if(e.value.length===0)return!1;for(const n of e.value)if((t.includeHiddenNodes||!n.hidden)&&(n?.handleBounds===void 0||n.dimensions.width===0||n.dimensions.height===0))return!1;return!0})}const NN={class:"vue-flow__nodes vue-flow__container"},DN={name:"Nodes",compatConfig:{MODE:3}},LN=Nt({...DN,setup(t){const{getNodes:e,updateNodeDimensions:n,emits:i}=Dt(),r=PN(),o=Ce();return lt(r,s=>{s&&pn(()=>{i.nodesInitialized(e.value)})},{immediate:!0}),bn(()=>{o.value=new ResizeObserver(s=>{const a=s.map(l=>({id:l.target.getAttribute("data-id"),nodeElement:l.target,forceUpdate:!0}));pn(()=>n(a))})}),Hr(()=>{var s;return(s=o.value)==null?void 0:s.disconnect()}),(s,a)=>(ce(),me("div",NN,[o.value?(ce(!0),me(it,{key:0},Ht(he(e),(l,u,c,d)=>{const f=[l.id];if(d&&d.key===l.id&&d1(d,f))return d;const h=(ce(),Jt(he(IN),{id:l.id,key:l.id,"resize-observer":o.value},null,8,["id","resize-observer"]));return h.memo=f,h},a,0),128)):He("",!0)]))}});function FN(){const{emits:t}=Dt();bn(()=>{if(uy()){const e=document.querySelector(".vue-flow__pane");e&&window.getComputedStyle(e).zIndex!=="1"&&t.error(new Xt(Gt.MISSING_STYLES))}})}const UN=q("div",{class:"vue-flow__edge-labels"},null,-1),ON={name:"VueFlow",compatConfig:{MODE:3}},BN=Nt({...ON,props:{id:{},modelValue:{},nodes:{},edges:{},edgeTypes:{},nodeTypes:{},connectionMode:{},connectionLineType:{},connectionLineStyle:{default:void 0},connectionLineOptions:{default:void 0},connectionRadius:{},isValidConnection:{type:[Function,null],default:void 0},deleteKeyCode:{default:void 0},selectionKeyCode:{type:[Boolean,null],default:void 0},multiSelectionKeyCode:{default:void 0},zoomActivationKeyCode:{default:void 0},panActivationKeyCode:{default:void 0},snapToGrid:{type:Boolean,default:void 0},snapGrid:{},onlyRenderVisibleElements:{type:Boolean,default:void 0},edgesUpdatable:{type:[Boolean,String],default:void 0},nodesDraggable:{type:Boolean,default:void 0},nodesConnectable:{type:Boolean,default:void 0},nodeDragThreshold:{},elementsSelectable:{type:Boolean,default:void 0},selectNodesOnDrag:{type:Boolean,default:void 0},panOnDrag:{type:[Boolean,Array],default:void 0},minZoom:{},maxZoom:{},defaultViewport:{},translateExtent:{},nodeExtent:{},defaultMarkerColor:{},zoomOnScroll:{type:Boolean,default:void 0},zoomOnPinch:{type:Boolean,default:void 0},panOnScroll:{type:Boolean,default:void 0},panOnScrollSpeed:{},panOnScrollMode:{},paneClickDistance:{},zoomOnDoubleClick:{type:Boolean,default:void 0},preventScrolling:{type:Boolean,default:void 0},selectionMode:{},edgeUpdaterRadius:{},fitViewOnInit:{type:Boolean,default:void 0},connectOnClick:{type:Boolean,default:void 0},applyDefault:{type:Boolean,default:void 0},autoConnect:{type:[Boolean,Function],default:void 0},noDragClassName:{},noWheelClassName:{},noPanClassName:{},defaultEdgeOptions:{},elevateEdgesOnSelect:{type:Boolean,default:void 0},elevateNodesOnSelect:{type:Boolean,default:void 0},disableKeyboardA11y:{type:Boolean,default:void 0},edgesFocusable:{type:Boolean,default:void 0},nodesFocusable:{type:Boolean,default:void 0},autoPanOnConnect:{type:Boolean,default:void 0},autoPanOnNodeDrag:{type:Boolean,default:void 0},autoPanSpeed:{}},emits:["nodesChange","edgesChange","nodesInitialized","paneReady","init","updateNodeInternals","error","connect","connectStart","connectEnd","clickConnectStart","clickConnectEnd","moveStart","move","moveEnd","selectionDragStart","selectionDrag","selectionDragStop","selectionContextMenu","selectionStart","selectionEnd","viewportChangeStart","viewportChange","viewportChangeEnd","paneScroll","paneClick","paneContextMenu","paneMouseEnter","paneMouseMove","paneMouseLeave","edgeUpdate","edgeContextMenu","edgeMouseEnter","edgeMouseMove","edgeMouseLeave","edgeDoubleClick","edgeClick","edgeUpdateStart","edgeUpdateEnd","nodeContextMenu","nodeMouseEnter","nodeMouseMove","nodeMouseLeave","nodeDoubleClick","nodeClick","nodeDragStart","nodeDrag","nodeDragStop","miniMapNodeClick","miniMapNodeDoubleClick","miniMapNodeMouseEnter","miniMapNodeMouseMove","miniMapNodeMouseLeave","update:modelValue","update:nodes","update:edges"],setup(t,{expose:e,emit:n}){const i=t,r=l0(),o=ld(i,"modelValue",n),s=ld(i,"nodes",n),a=ld(i,"edges",n),l=Dt(i),u=m3({modelValue:o,nodes:s,edges:a},i,l);return v3(n,l.hooks),pN(),FN(),Ur(rc,r),Hu(u),e(l),(c,d)=>(ce(),me("div",{ref:he(l).vueFlowRef,class:"vue-flow"},[tt(lN,null,{default:cn(()=>[tt(CN),UN,tt(LN),er(c.$slots,"zoom-pane")]),_:3}),er(c.$slots,"default"),tt(hN)],512))}}),kN={name:"Panel",compatConfig:{MODE:3}},zN=Nt({...kN,props:{position:{}},setup(t){const e=t,{userSelectionActive:n}=Dt(),i=Re(()=>`${e.position}`.split("-"));return(r,o)=>(ce(),me("div",{class:ut(["vue-flow__panel",i.value]),style:rt({pointerEvents:he(n)?"none":"all"})},[er(r.$slots,"default")],6))}});var VN={value:()=>{}};function Zh(){for(var t=0,e=arguments.length,n={},i;t<e;++t){if(!(i=arguments[t]+"")||i in n||/[\s.]/.test(i))throw new Error("illegal type: "+i);n[i]=[]}return new Xl(n)}function Xl(t){this._=t}function $N(t,e){return t.trim().split(/^|\s+/).map(function(n){var i="",r=n.indexOf(".");if(r>=0&&(i=n.slice(r+1),n=n.slice(0,r)),n&&!e.hasOwnProperty(n))throw new Error("unknown type: "+n);return{type:n,name:i}})}Xl.prototype=Zh.prototype={constructor:Xl,on:function(t,e){var n=this._,i=$N(t+"",n),r,o=-1,s=i.length;if(arguments.length<2){for(;++o<s;)if((r=(t=i[o]).type)&&(r=HN(n[r],t.name)))return r;return}if(e!=null&&typeof e!="function")throw new Error("invalid callback: "+e);for(;++o<s;)if(r=(t=i[o]).type)n[r]=kg(n[r],t.name,e);else if(e==null)for(r in n)n[r]=kg(n[r],t.name,null);return this},copy:function(){var t={},e=this._;for(var n in e)t[n]=e[n].slice();return new Xl(t)},call:function(t,e){if((r=arguments.length-2)>0)for(var n=new Array(r),i=0,r,o;i<r;++i)n[i]=arguments[i+2];if(!this._.hasOwnProperty(t))throw new Error("unknown type: "+t);for(o=this._[t],i=0,r=o.length;i<r;++i)o[i].value.apply(e,n)},apply:function(t,e,n){if(!this._.hasOwnProperty(t))throw new Error("unknown type: "+t);for(var i=this._[t],r=0,o=i.length;r<o;++r)i[r].value.apply(e,n)}};function HN(t,e){for(var n=0,i=t.length,r;n<i;++n)if((r=t[n]).name===e)return r.value}function kg(t,e,n){for(var i=0,r=t.length;i<r;++i)if(t[i].name===e){t[i]=VN,t=t.slice(0,i).concat(t.slice(i+1));break}return n!=null&&t.push({name:e,value:n}),t}var qf="http://www.w3.org/1999/xhtml";const zg={svg:"http://www.w3.org/2000/svg",xhtml:qf,xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"};function uc(t){var e=t+="",n=e.indexOf(":");return n>=0&&(e=t.slice(0,n))!=="xmlns"&&(t=t.slice(n+1)),zg.hasOwnProperty(e)?{space:zg[e],local:t}:t}function GN(t){return function(){var e=this.ownerDocument,n=this.namespaceURI;return n===qf&&e.documentElement.namespaceURI===qf?e.createElement(t):e.createElementNS(n,t)}}function WN(t){return function(){return this.ownerDocument.createElementNS(t.space,t.local)}}function Sy(t){var e=uc(t);return(e.local?WN:GN)(e)}function XN(){}function jh(t){return t==null?XN:function(){return this.querySelector(t)}}function YN(t){typeof t!="function"&&(t=jh(t));for(var e=this._groups,n=e.length,i=new Array(n),r=0;r<n;++r)for(var o=e[r],s=o.length,a=i[r]=new Array(s),l,u,c=0;c<s;++c)(l=o[c])&&(u=t.call(l,l.__data__,c,o))&&("__data__"in l&&(u.__data__=l.__data__),a[c]=u);return new Ln(i,this._parents)}function qN(t){return t==null?[]:Array.isArray(t)?t:Array.from(t)}function KN(){return[]}function My(t){return t==null?KN:function(){return this.querySelectorAll(t)}}function ZN(t){return function(){return qN(t.apply(this,arguments))}}function jN(t){typeof t=="function"?t=ZN(t):t=My(t);for(var e=this._groups,n=e.length,i=[],r=[],o=0;o<n;++o)for(var s=e[o],a=s.length,l,u=0;u<a;++u)(l=s[u])&&(i.push(t.call(l,l.__data__,u,s)),r.push(l));return new Ln(i,r)}function wy(t){return function(){return this.matches(t)}}function Ey(t){return function(e){return e.matches(t)}}var JN=Array.prototype.find;function QN(t){return function(){return JN.call(this.children,t)}}function eD(){return this.firstElementChild}function tD(t){return this.select(t==null?eD:QN(typeof t=="function"?t:Ey(t)))}var nD=Array.prototype.filter;function iD(){return Array.from(this.children)}function rD(t){return function(){return nD.call(this.children,t)}}function oD(t){return this.selectAll(t==null?iD:rD(typeof t=="function"?t:Ey(t)))}function sD(t){typeof t!="function"&&(t=wy(t));for(var e=this._groups,n=e.length,i=new Array(n),r=0;r<n;++r)for(var o=e[r],s=o.length,a=i[r]=[],l,u=0;u<s;++u)(l=o[u])&&t.call(l,l.__data__,u,o)&&a.push(l);return new Ln(i,this._parents)}function Ty(t){return new Array(t.length)}function aD(){return new Ln(this._enter||this._groups.map(Ty),this._parents)}function Mu(t,e){this.ownerDocument=t.ownerDocument,this.namespaceURI=t.namespaceURI,this._next=null,this._parent=t,this.__data__=e}Mu.prototype={constructor:Mu,appendChild:function(t){return this._parent.insertBefore(t,this._next)},insertBefore:function(t,e){return this._parent.insertBefore(t,e)},querySelector:function(t){return this._parent.querySelector(t)},querySelectorAll:function(t){return this._parent.querySelectorAll(t)}};function lD(t){return function(){return t}}function uD(t,e,n,i,r,o){for(var s=0,a,l=e.length,u=o.length;s<u;++s)(a=e[s])?(a.__data__=o[s],i[s]=a):n[s]=new Mu(t,o[s]);for(;s<l;++s)(a=e[s])&&(r[s]=a)}function cD(t,e,n,i,r,o,s){var a,l,u=new Map,c=e.length,d=o.length,f=new Array(c),h;for(a=0;a<c;++a)(l=e[a])&&(f[a]=h=s.call(l,l.__data__,a,e)+"",u.has(h)?r[a]=l:u.set(h,l));for(a=0;a<d;++a)h=s.call(t,o[a],a,o)+"",(l=u.get(h))?(i[a]=l,l.__data__=o[a],u.delete(h)):n[a]=new Mu(t,o[a]);for(a=0;a<c;++a)(l=e[a])&&u.get(f[a])===l&&(r[a]=l)}function dD(t){return t.__data__}function fD(t,e){if(!arguments.length)return Array.from(this,dD);var n=e?cD:uD,i=this._parents,r=this._groups;typeof t!="function"&&(t=lD(t));for(var o=r.length,s=new Array(o),a=new Array(o),l=new Array(o),u=0;u<o;++u){var c=i[u],d=r[u],f=d.length,h=hD(t.call(c,c&&c.__data__,u,i)),m=h.length,v=a[u]=new Array(m),g=s[u]=new Array(m),p=l[u]=new Array(f);n(c,d,v,g,p,h,e);for(var b=0,M=0,y,I;b<m;++b)if(y=v[b]){for(b>=M&&(M=b+1);!(I=g[M])&&++M<m;);y._next=I||null}}return s=new Ln(s,i),s._enter=a,s._exit=l,s}function hD(t){return typeof t=="object"&&"length"in t?t:Array.from(t)}function pD(){return new Ln(this._exit||this._groups.map(Ty),this._parents)}function mD(t,e,n){var i=this.enter(),r=this,o=this.exit();return typeof t=="function"?(i=t(i),i&&(i=i.selection())):i=i.append(t+""),e!=null&&(r=e(r),r&&(r=r.selection())),n==null?o.remove():n(o),i&&r?i.merge(r).order():r}function gD(t){for(var e=t.selection?t.selection():t,n=this._groups,i=e._groups,r=n.length,o=i.length,s=Math.min(r,o),a=new Array(r),l=0;l<s;++l)for(var u=n[l],c=i[l],d=u.length,f=a[l]=new Array(d),h,m=0;m<d;++m)(h=u[m]||c[m])&&(f[m]=h);for(;l<r;++l)a[l]=n[l];return new Ln(a,this._parents)}function vD(){for(var t=this._groups,e=-1,n=t.length;++e<n;)for(var i=t[e],r=i.length-1,o=i[r],s;--r>=0;)(s=i[r])&&(o&&s.compareDocumentPosition(o)^4&&o.parentNode.insertBefore(s,o),o=s);return this}function _D(t){t||(t=yD);function e(d,f){return d&&f?t(d.__data__,f.__data__):!d-!f}for(var n=this._groups,i=n.length,r=new Array(i),o=0;o<i;++o){for(var s=n[o],a=s.length,l=r[o]=new Array(a),u,c=0;c<a;++c)(u=s[c])&&(l[c]=u);l.sort(e)}return new Ln(r,this._parents).order()}function yD(t,e){return t<e?-1:t>e?1:t>=e?0:NaN}function xD(){var t=arguments[0];return arguments[0]=this,t.apply(null,arguments),this}function bD(){return Array.from(this)}function SD(){for(var t=this._groups,e=0,n=t.length;e<n;++e)for(var i=t[e],r=0,o=i.length;r<o;++r){var s=i[r];if(s)return s}return null}function MD(){let t=0;for(const e of this)++t;return t}function wD(){return!this.node()}function ED(t){for(var e=this._groups,n=0,i=e.length;n<i;++n)for(var r=e[n],o=0,s=r.length,a;o<s;++o)(a=r[o])&&t.call(a,a.__data__,o,r);return this}function TD(t){return function(){this.removeAttribute(t)}}function AD(t){return function(){this.removeAttributeNS(t.space,t.local)}}function CD(t,e){return function(){this.setAttribute(t,e)}}function RD(t,e){return function(){this.setAttributeNS(t.space,t.local,e)}}function ID(t,e){return function(){var n=e.apply(this,arguments);n==null?this.removeAttribute(t):this.setAttribute(t,n)}}function PD(t,e){return function(){var n=e.apply(this,arguments);n==null?this.removeAttributeNS(t.space,t.local):this.setAttributeNS(t.space,t.local,n)}}function ND(t,e){var n=uc(t);if(arguments.length<2){var i=this.node();return n.local?i.getAttributeNS(n.space,n.local):i.getAttribute(n)}return this.each((e==null?n.local?AD:TD:typeof e=="function"?n.local?PD:ID:n.local?RD:CD)(n,e))}function Ay(t){return t.ownerDocument&&t.ownerDocument.defaultView||t.document&&t||t.defaultView}function DD(t){return function(){this.style.removeProperty(t)}}function LD(t,e,n){return function(){this.style.setProperty(t,e,n)}}function FD(t,e,n){return function(){var i=e.apply(this,arguments);i==null?this.style.removeProperty(t):this.style.setProperty(t,i,n)}}function UD(t,e,n){return arguments.length>1?this.each((e==null?DD:typeof e=="function"?FD:LD)(t,e,n??"")):gs(this.node(),t)}function gs(t,e){return t.style.getPropertyValue(e)||Ay(t).getComputedStyle(t,null).getPropertyValue(e)}function OD(t){return function(){delete this[t]}}function BD(t,e){return function(){this[t]=e}}function kD(t,e){return function(){var n=e.apply(this,arguments);n==null?delete this[t]:this[t]=n}}function zD(t,e){return arguments.length>1?this.each((e==null?OD:typeof e=="function"?kD:BD)(t,e)):this.node()[t]}function Cy(t){return t.trim().split(/^|\s+/)}function Jh(t){return t.classList||new Ry(t)}function Ry(t){this._node=t,this._names=Cy(t.getAttribute("class")||"")}Ry.prototype={add:function(t){var e=this._names.indexOf(t);e<0&&(this._names.push(t),this._node.setAttribute("class",this._names.join(" ")))},remove:function(t){var e=this._names.indexOf(t);e>=0&&(this._names.splice(e,1),this._node.setAttribute("class",this._names.join(" ")))},contains:function(t){return this._names.indexOf(t)>=0}};function Iy(t,e){for(var n=Jh(t),i=-1,r=e.length;++i<r;)n.add(e[i])}function Py(t,e){for(var n=Jh(t),i=-1,r=e.length;++i<r;)n.remove(e[i])}function VD(t){return function(){Iy(this,t)}}function $D(t){return function(){Py(this,t)}}function HD(t,e){return function(){(e.apply(this,arguments)?Iy:Py)(this,t)}}function GD(t,e){var n=Cy(t+"");if(arguments.length<2){for(var i=Jh(this.node()),r=-1,o=n.length;++r<o;)if(!i.contains(n[r]))return!1;return!0}return this.each((typeof e=="function"?HD:e?VD:$D)(n,e))}function WD(){this.textContent=""}function XD(t){return function(){this.textContent=t}}function YD(t){return function(){var e=t.apply(this,arguments);this.textContent=e??""}}function qD(t){return arguments.length?this.each(t==null?WD:(typeof t=="function"?YD:XD)(t)):this.node().textContent}function KD(){this.innerHTML=""}function ZD(t){return function(){this.innerHTML=t}}function jD(t){return function(){var e=t.apply(this,arguments);this.innerHTML=e??""}}function JD(t){return arguments.length?this.each(t==null?KD:(typeof t=="function"?jD:ZD)(t)):this.node().innerHTML}function QD(){this.nextSibling&&this.parentNode.appendChild(this)}function eL(){return this.each(QD)}function tL(){this.previousSibling&&this.parentNode.insertBefore(this,this.parentNode.firstChild)}function nL(){return this.each(tL)}function iL(t){var e=typeof t=="function"?t:Sy(t);return this.select(function(){return this.appendChild(e.apply(this,arguments))})}function rL(){return null}function oL(t,e){var n=typeof t=="function"?t:Sy(t),i=e==null?rL:typeof e=="function"?e:jh(e);return this.select(function(){return this.insertBefore(n.apply(this,arguments),i.apply(this,arguments)||null)})}function sL(){var t=this.parentNode;t&&t.removeChild(this)}function aL(){return this.each(sL)}function lL(){var t=this.cloneNode(!1),e=this.parentNode;return e?e.insertBefore(t,this.nextSibling):t}function uL(){var t=this.cloneNode(!0),e=this.parentNode;return e?e.insertBefore(t,this.nextSibling):t}function cL(t){return this.select(t?uL:lL)}function dL(t){return arguments.length?this.property("__data__",t):this.node().__data__}function fL(t){return function(e){t.call(this,e,this.__data__)}}function hL(t){return t.trim().split(/^|\s+/).map(function(e){var n="",i=e.indexOf(".");return i>=0&&(n=e.slice(i+1),e=e.slice(0,i)),{type:e,name:n}})}function pL(t){return function(){var e=this.__on;if(e){for(var n=0,i=-1,r=e.length,o;n<r;++n)o=e[n],(!t.type||o.type===t.type)&&o.name===t.name?this.removeEventListener(o.type,o.listener,o.options):e[++i]=o;++i?e.length=i:delete this.__on}}}function mL(t,e,n){return function(){var i=this.__on,r,o=fL(e);if(i){for(var s=0,a=i.length;s<a;++s)if((r=i[s]).type===t.type&&r.name===t.name){this.removeEventListener(r.type,r.listener,r.options),this.addEventListener(r.type,r.listener=o,r.options=n),r.value=e;return}}this.addEventListener(t.type,o,n),r={type:t.type,name:t.name,value:e,listener:o,options:n},i?i.push(r):this.__on=[r]}}function gL(t,e,n){var i=hL(t+""),r,o=i.length,s;if(arguments.length<2){var a=this.node().__on;if(a){for(var l=0,u=a.length,c;l<u;++l)for(r=0,c=a[l];r<o;++r)if((s=i[r]).type===c.type&&s.name===c.name)return c.value}return}for(a=e?mL:pL,r=0;r<o;++r)this.each(a(i[r],e,n));return this}function Ny(t,e,n){var i=Ay(t),r=i.CustomEvent;typeof r=="function"?r=new r(e,n):(r=i.document.createEvent("Event"),n?(r.initEvent(e,n.bubbles,n.cancelable),r.detail=n.detail):r.initEvent(e,!1,!1)),t.dispatchEvent(r)}function vL(t,e){return function(){return Ny(this,t,e)}}function _L(t,e){return function(){return Ny(this,t,e.apply(this,arguments))}}function yL(t,e){return this.each((typeof e=="function"?_L:vL)(t,e))}function*xL(){for(var t=this._groups,e=0,n=t.length;e<n;++e)for(var i=t[e],r=0,o=i.length,s;r<o;++r)(s=i[r])&&(yield s)}var Dy=[null];function Ln(t,e){this._groups=t,this._parents=e}function Ba(){return new Ln([[document.documentElement]],Dy)}function bL(){return this}Ln.prototype=Ba.prototype={constructor:Ln,select:YN,selectAll:jN,selectChild:tD,selectChildren:oD,filter:sD,data:fD,enter:aD,exit:pD,join:mD,merge:gD,selection:bL,order:vD,sort:_D,call:xD,nodes:bD,node:SD,size:MD,empty:wD,each:ED,attr:ND,style:UD,property:zD,classed:GD,text:qD,html:JD,raise:eL,lower:nL,append:iL,insert:oL,remove:aL,clone:cL,datum:dL,on:gL,dispatch:yL,[Symbol.iterator]:xL};function Rr(t){return typeof t=="string"?new Ln([[document.querySelector(t)]],[document.documentElement]):new Ln([[t]],Dy)}function SL(t){let e;for(;e=t.sourceEvent;)t=e;return t}function Mr(t,e){if(t=SL(t),e===void 0&&(e=t.currentTarget),e){var n=e.ownerSVGElement||e;if(n.createSVGPoint){var i=n.createSVGPoint();return i.x=t.clientX,i.y=t.clientY,i=i.matrixTransform(e.getScreenCTM().inverse()),[i.x,i.y]}if(e.getBoundingClientRect){var r=e.getBoundingClientRect();return[t.clientX-r.left-e.clientLeft,t.clientY-r.top-e.clientTop]}}return[t.pageX,t.pageY]}const Kf={capture:!0,passive:!1};function Zf(t){t.preventDefault(),t.stopImmediatePropagation()}function ML(t){var e=t.document.documentElement,n=Rr(t).on("dragstart.drag",Zf,Kf);"onselectstart"in e?n.on("selectstart.drag",Zf,Kf):(e.__noselect=e.style.MozUserSelect,e.style.MozUserSelect="none")}function wL(t,e){var n=t.document.documentElement,i=Rr(t).on("dragstart.drag",null);e&&(i.on("click.drag",Zf,Kf),setTimeout(function(){i.on("click.drag",null)},0)),"onselectstart"in n?i.on("selectstart.drag",null):(n.style.MozUserSelect=n.__noselect,delete n.__noselect)}function Qh(t,e,n){t.prototype=e.prototype=n,n.constructor=t}function Ly(t,e){var n=Object.create(t.prototype);for(var i in e)n[i]=e[i];return n}function ka(){}var Sa=.7,wu=1/Sa,rs="\\s*([+-]?\\d+)\\s*",Ma="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",yi="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",EL=/^#([0-9a-f]{3,8})$/,TL=new RegExp(`^rgb\\(${rs},${rs},${rs}\\)$`),AL=new RegExp(`^rgb\\(${yi},${yi},${yi}\\)$`),CL=new RegExp(`^rgba\\(${rs},${rs},${rs},${Ma}\\)$`),RL=new RegExp(`^rgba\\(${yi},${yi},${yi},${Ma}\\)$`),IL=new RegExp(`^hsl\\(${Ma},${yi},${yi}\\)$`),PL=new RegExp(`^hsla\\(${Ma},${yi},${yi},${Ma}\\)$`),Vg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};Qh(ka,wa,{copy(t){return Object.assign(new this.constructor,this,t)},displayable(){return this.rgb().displayable()},hex:$g,formatHex:$g,formatHex8:NL,formatHsl:DL,formatRgb:Hg,toString:Hg});function $g(){return this.rgb().formatHex()}function NL(){return this.rgb().formatHex8()}function DL(){return Fy(this).formatHsl()}function Hg(){return this.rgb().formatRgb()}function wa(t){var e,n;return t=(t+"").trim().toLowerCase(),(e=EL.exec(t))?(n=e[1].length,e=parseInt(e[1],16),n===6?Gg(e):n===3?new En(e>>8&15|e>>4&240,e>>4&15|e&240,(e&15)<<4|e&15,1):n===8?wl(e>>24&255,e>>16&255,e>>8&255,(e&255)/255):n===4?wl(e>>12&15|e>>8&240,e>>8&15|e>>4&240,e>>4&15|e&240,((e&15)<<4|e&15)/255):null):(e=TL.exec(t))?new En(e[1],e[2],e[3],1):(e=AL.exec(t))?new En(e[1]*255/100,e[2]*255/100,e[3]*255/100,1):(e=CL.exec(t))?wl(e[1],e[2],e[3],e[4]):(e=RL.exec(t))?wl(e[1]*255/100,e[2]*255/100,e[3]*255/100,e[4]):(e=IL.exec(t))?Yg(e[1],e[2]/100,e[3]/100,1):(e=PL.exec(t))?Yg(e[1],e[2]/100,e[3]/100,e[4]):Vg.hasOwnProperty(t)?Gg(Vg[t]):t==="transparent"?new En(NaN,NaN,NaN,0):null}function Gg(t){return new En(t>>16&255,t>>8&255,t&255,1)}function wl(t,e,n,i){return i<=0&&(t=e=n=NaN),new En(t,e,n,i)}function LL(t){return t instanceof ka||(t=wa(t)),t?(t=t.rgb(),new En(t.r,t.g,t.b,t.opacity)):new En}function jf(t,e,n,i){return arguments.length===1?LL(t):new En(t,e,n,i??1)}function En(t,e,n,i){this.r=+t,this.g=+e,this.b=+n,this.opacity=+i}Qh(En,jf,Ly(ka,{brighter(t){return t=t==null?wu:Math.pow(wu,t),new En(this.r*t,this.g*t,this.b*t,this.opacity)},darker(t){return t=t==null?Sa:Math.pow(Sa,t),new En(this.r*t,this.g*t,this.b*t,this.opacity)},rgb(){return this},clamp(){return new En(bo(this.r),bo(this.g),bo(this.b),Eu(this.opacity))},displayable(){return-.5<=this.r&&this.r<255.5&&-.5<=this.g&&this.g<255.5&&-.5<=this.b&&this.b<255.5&&0<=this.opacity&&this.opacity<=1},hex:Wg,formatHex:Wg,formatHex8:FL,formatRgb:Xg,toString:Xg}));function Wg(){return`#${po(this.r)}${po(this.g)}${po(this.b)}`}function FL(){return`#${po(this.r)}${po(this.g)}${po(this.b)}${po((isNaN(this.opacity)?1:this.opacity)*255)}`}function Xg(){const t=Eu(this.opacity);return`${t===1?"rgb(":"rgba("}${bo(this.r)}, ${bo(this.g)}, ${bo(this.b)}${t===1?")":`, ${t})`}`}function Eu(t){return isNaN(t)?1:Math.max(0,Math.min(1,t))}function bo(t){return Math.max(0,Math.min(255,Math.round(t)||0))}function po(t){return t=bo(t),(t<16?"0":"")+t.toString(16)}function Yg(t,e,n,i){return i<=0?t=e=n=NaN:n<=0||n>=1?t=e=NaN:e<=0&&(t=NaN),new qn(t,e,n,i)}function Fy(t){if(t instanceof qn)return new qn(t.h,t.s,t.l,t.opacity);if(t instanceof ka||(t=wa(t)),!t)return new qn;if(t instanceof qn)return t;t=t.rgb();var e=t.r/255,n=t.g/255,i=t.b/255,r=Math.min(e,n,i),o=Math.max(e,n,i),s=NaN,a=o-r,l=(o+r)/2;return a?(e===o?s=(n-i)/a+(n<i)*6:n===o?s=(i-e)/a+2:s=(e-n)/a+4,a/=l<.5?o+r:2-o-r,s*=60):a=l>0&&l<1?0:s,new qn(s,a,l,t.opacity)}function UL(t,e,n,i){return arguments.length===1?Fy(t):new qn(t,e,n,i??1)}function qn(t,e,n,i){this.h=+t,this.s=+e,this.l=+n,this.opacity=+i}Qh(qn,UL,Ly(ka,{brighter(t){return t=t==null?wu:Math.pow(wu,t),new qn(this.h,this.s,this.l*t,this.opacity)},darker(t){return t=t==null?Sa:Math.pow(Sa,t),new qn(this.h,this.s,this.l*t,this.opacity)},rgb(){var t=this.h%360+(this.h<0)*360,e=isNaN(t)||isNaN(this.s)?0:this.s,n=this.l,i=n+(n<.5?n:1-n)*e,r=2*n-i;return new En(yd(t>=240?t-240:t+120,r,i),yd(t,r,i),yd(t<120?t+240:t-120,r,i),this.opacity)},clamp(){return new qn(qg(this.h),El(this.s),El(this.l),Eu(this.opacity))},displayable(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1},formatHsl(){const t=Eu(this.opacity);return`${t===1?"hsl(":"hsla("}${qg(this.h)}, ${El(this.s)*100}%, ${El(this.l)*100}%${t===1?")":`, ${t})`}`}}));function qg(t){return t=(t||0)%360,t<0?t+360:t}function El(t){return Math.max(0,Math.min(1,t||0))}function yd(t,e,n){return(t<60?e+(n-e)*t/60:t<180?n:t<240?e+(n-e)*(240-t)/60:e)*255}const Uy=t=>()=>t;function OL(t,e){return function(n){return t+n*e}}function BL(t,e,n){return t=Math.pow(t,n),e=Math.pow(e,n)-t,n=1/n,function(i){return Math.pow(t+i*e,n)}}function kL(t){return(t=+t)==1?Oy:function(e,n){return n-e?BL(e,n,t):Uy(isNaN(e)?n:e)}}function Oy(t,e){var n=e-t;return n?OL(t,n):Uy(isNaN(t)?e:t)}const Kg=(function t(e){var n=kL(e);function i(r,o){var s=n((r=jf(r)).r,(o=jf(o)).r),a=n(r.g,o.g),l=n(r.b,o.b),u=Oy(r.opacity,o.opacity);return function(c){return r.r=s(c),r.g=a(c),r.b=l(c),r.opacity=u(c),r+""}}return i.gamma=t,i})(1);function Ar(t,e){return t=+t,e=+e,function(n){return t*(1-n)+e*n}}var Jf=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,xd=new RegExp(Jf.source,"g");function zL(t){return function(){return t}}function VL(t){return function(e){return t(e)+""}}function $L(t,e){var n=Jf.lastIndex=xd.lastIndex=0,i,r,o,s=-1,a=[],l=[];for(t=t+"",e=e+"";(i=Jf.exec(t))&&(r=xd.exec(e));)(o=r.index)>n&&(o=e.slice(n,o),a[s]?a[s]+=o:a[++s]=o),(i=i[0])===(r=r[0])?a[s]?a[s]+=r:a[++s]=r:(a[++s]=null,l.push({i:s,x:Ar(i,r)})),n=xd.lastIndex;return n<e.length&&(o=e.slice(n),a[s]?a[s]+=o:a[++s]=o),a.length<2?l[0]?VL(l[0].x):zL(e):(e=l.length,function(u){for(var c=0,d;c<e;++c)a[(d=l[c]).i]=d.x(u);return a.join("")})}var Zg=180/Math.PI,Qf={translateX:0,translateY:0,rotate:0,skewX:0,scaleX:1,scaleY:1};function By(t,e,n,i,r,o){var s,a,l;return(s=Math.sqrt(t*t+e*e))&&(t/=s,e/=s),(l=t*n+e*i)&&(n-=t*l,i-=e*l),(a=Math.sqrt(n*n+i*i))&&(n/=a,i/=a,l/=a),t*i<e*n&&(t=-t,e=-e,l=-l,s=-s),{translateX:r,translateY:o,rotate:Math.atan2(e,t)*Zg,skewX:Math.atan(l)*Zg,scaleX:s,scaleY:a}}var Tl;function HL(t){const e=new(typeof DOMMatrix=="function"?DOMMatrix:WebKitCSSMatrix)(t+"");return e.isIdentity?Qf:By(e.a,e.b,e.c,e.d,e.e,e.f)}function GL(t){return t==null||(Tl||(Tl=document.createElementNS("http://www.w3.org/2000/svg","g")),Tl.setAttribute("transform",t),!(t=Tl.transform.baseVal.consolidate()))?Qf:(t=t.matrix,By(t.a,t.b,t.c,t.d,t.e,t.f))}function ky(t,e,n,i){function r(u){return u.length?u.pop()+" ":""}function o(u,c,d,f,h,m){if(u!==d||c!==f){var v=h.push("translate(",null,e,null,n);m.push({i:v-4,x:Ar(u,d)},{i:v-2,x:Ar(c,f)})}else(d||f)&&h.push("translate("+d+e+f+n)}function s(u,c,d,f){u!==c?(u-c>180?c+=360:c-u>180&&(u+=360),f.push({i:d.push(r(d)+"rotate(",null,i)-2,x:Ar(u,c)})):c&&d.push(r(d)+"rotate("+c+i)}function a(u,c,d,f){u!==c?f.push({i:d.push(r(d)+"skewX(",null,i)-2,x:Ar(u,c)}):c&&d.push(r(d)+"skewX("+c+i)}function l(u,c,d,f,h,m){if(u!==d||c!==f){var v=h.push(r(h)+"scale(",null,",",null,")");m.push({i:v-4,x:Ar(u,d)},{i:v-2,x:Ar(c,f)})}else(d!==1||f!==1)&&h.push(r(h)+"scale("+d+","+f+")")}return function(u,c){var d=[],f=[];return u=t(u),c=t(c),o(u.translateX,u.translateY,c.translateX,c.translateY,d,f),s(u.rotate,c.rotate,d,f),a(u.skewX,c.skewX,d,f),l(u.scaleX,u.scaleY,c.scaleX,c.scaleY,d,f),u=c=null,function(h){for(var m=-1,v=f.length,g;++m<v;)d[(g=f[m]).i]=g.x(h);return d.join("")}}}var WL=ky(HL,"px, ","px)","deg)"),XL=ky(GL,", ",")",")"),YL=1e-12;function jg(t){return((t=Math.exp(t))+1/t)/2}function qL(t){return((t=Math.exp(t))-1/t)/2}function KL(t){return((t=Math.exp(2*t))-1)/(t+1)}const ZL=(function t(e,n,i){function r(o,s){var a=o[0],l=o[1],u=o[2],c=s[0],d=s[1],f=s[2],h=c-a,m=d-l,v=h*h+m*m,g,p;if(v<YL)p=Math.log(f/u)/e,g=function(B){return[a+B*h,l+B*m,u*Math.exp(e*B*p)]};else{var b=Math.sqrt(v),M=(f*f-u*u+i*v)/(2*u*n*b),y=(f*f-u*u-i*v)/(2*f*n*b),I=Math.log(Math.sqrt(M*M+1)-M),D=Math.log(Math.sqrt(y*y+1)-y);p=(D-I)/e,g=function(B){var _=B*p,x=jg(I),R=u/(n*b)*(x*KL(e*_+I)-qL(I));return[a+R*h,l+R*m,u*x/jg(e*_+I)]}}return g.duration=p*1e3*e/Math.SQRT2,g}return r.rho=function(o){var s=Math.max(.001,+o),a=s*s,l=a*a;return t(s,a,l)},r})(Math.SQRT2,2,4);var vs=0,$s=0,Ls=0,zy=1e3,Tu,Hs,Au=0,Eo=0,cc=0,Ea=typeof performance=="object"&&performance.now?performance:Date,Vy=typeof window=="object"&&window.requestAnimationFrame?window.requestAnimationFrame.bind(window):function(t){setTimeout(t,17)};function ep(){return Eo||(Vy(jL),Eo=Ea.now()+cc)}function jL(){Eo=0}function Cu(){this._call=this._time=this._next=null}Cu.prototype=$y.prototype={constructor:Cu,restart:function(t,e,n){if(typeof t!="function")throw new TypeError("callback is not a function");n=(n==null?ep():+n)+(e==null?0:+e),!this._next&&Hs!==this&&(Hs?Hs._next=this:Tu=this,Hs=this),this._call=t,this._time=n,eh()},stop:function(){this._call&&(this._call=null,this._time=1/0,eh())}};function $y(t,e,n){var i=new Cu;return i.restart(t,e,n),i}function JL(){ep(),++vs;for(var t=Tu,e;t;)(e=Eo-t._time)>=0&&t._call.call(void 0,e),t=t._next;--vs}function Jg(){Eo=(Au=Ea.now())+cc,vs=$s=0;try{JL()}finally{vs=0,eF(),Eo=0}}function QL(){var t=Ea.now(),e=t-Au;e>zy&&(cc-=e,Au=t)}function eF(){for(var t,e=Tu,n,i=1/0;e;)e._call?(i>e._time&&(i=e._time),t=e,e=e._next):(n=e._next,e._next=null,e=t?t._next=n:Tu=n);Hs=t,eh(i)}function eh(t){if(!vs){$s&&($s=clearTimeout($s));var e=t-Eo;e>24?(t<1/0&&($s=setTimeout(Jg,t-Ea.now()-cc)),Ls&&(Ls=clearInterval(Ls))):(Ls||(Au=Ea.now(),Ls=setInterval(QL,zy)),vs=1,Vy(Jg))}}function Qg(t,e,n){var i=new Cu;return e=e==null?0:+e,i.restart(r=>{i.stop(),t(r+e)},e,n),i}var tF=Zh("start","end","cancel","interrupt"),nF=[],Hy=0,ev=1,th=2,Yl=3,tv=4,nh=5,ql=6;function dc(t,e,n,i,r,o){var s=t.__transition;if(!s)t.__transition={};else if(n in s)return;iF(t,n,{name:e,index:i,group:r,on:tF,tween:nF,time:o.time,delay:o.delay,duration:o.duration,ease:o.ease,timer:null,state:Hy})}function tp(t,e){var n=ti(t,e);if(n.state>Hy)throw new Error("too late; already scheduled");return n}function wi(t,e){var n=ti(t,e);if(n.state>Yl)throw new Error("too late; already running");return n}function ti(t,e){var n=t.__transition;if(!n||!(n=n[e]))throw new Error("transition not found");return n}function iF(t,e,n){var i=t.__transition,r;i[e]=n,n.timer=$y(o,0,n.time);function o(u){n.state=ev,n.timer.restart(s,n.delay,n.time),n.delay<=u&&s(u-n.delay)}function s(u){var c,d,f,h;if(n.state!==ev)return l();for(c in i)if(h=i[c],h.name===n.name){if(h.state===Yl)return Qg(s);h.state===tv?(h.state=ql,h.timer.stop(),h.on.call("interrupt",t,t.__data__,h.index,h.group),delete i[c]):+c<e&&(h.state=ql,h.timer.stop(),h.on.call("cancel",t,t.__data__,h.index,h.group),delete i[c])}if(Qg(function(){n.state===Yl&&(n.state=tv,n.timer.restart(a,n.delay,n.time),a(u))}),n.state=th,n.on.call("start",t,t.__data__,n.index,n.group),n.state===th){for(n.state=Yl,r=new Array(f=n.tween.length),c=0,d=-1;c<f;++c)(h=n.tween[c].value.call(t,t.__data__,n.index,n.group))&&(r[++d]=h);r.length=d+1}}function a(u){for(var c=u<n.duration?n.ease.call(null,u/n.duration):(n.timer.restart(l),n.state=nh,1),d=-1,f=r.length;++d<f;)r[d].call(t,c);n.state===nh&&(n.on.call("end",t,t.__data__,n.index,n.group),l())}function l(){n.state=ql,n.timer.stop(),delete i[e];for(var u in i)return;delete t.__transition}}function Kl(t,e){var n=t.__transition,i,r,o=!0,s;if(n){e=e==null?null:e+"";for(s in n){if((i=n[s]).name!==e){o=!1;continue}r=i.state>th&&i.state<nh,i.state=ql,i.timer.stop(),i.on.call(r?"interrupt":"cancel",t,t.__data__,i.index,i.group),delete n[s]}o&&delete t.__transition}}function rF(t){return this.each(function(){Kl(this,t)})}function oF(t,e){var n,i;return function(){var r=wi(this,t),o=r.tween;if(o!==n){i=n=o;for(var s=0,a=i.length;s<a;++s)if(i[s].name===e){i=i.slice(),i.splice(s,1);break}}r.tween=i}}function sF(t,e,n){var i,r;if(typeof n!="function")throw new Error;return function(){var o=wi(this,t),s=o.tween;if(s!==i){r=(i=s).slice();for(var a={name:e,value:n},l=0,u=r.length;l<u;++l)if(r[l].name===e){r[l]=a;break}l===u&&r.push(a)}o.tween=r}}function aF(t,e){var n=this._id;if(t+="",arguments.length<2){for(var i=ti(this.node(),n).tween,r=0,o=i.length,s;r<o;++r)if((s=i[r]).name===t)return s.value;return null}return this.each((e==null?oF:sF)(n,t,e))}function np(t,e,n){var i=t._id;return t.each(function(){var r=wi(this,i);(r.value||(r.value={}))[e]=n.apply(this,arguments)}),function(r){return ti(r,i).value[e]}}function Gy(t,e){var n;return(typeof e=="number"?Ar:e instanceof wa?Kg:(n=wa(e))?(e=n,Kg):$L)(t,e)}function lF(t){return function(){this.removeAttribute(t)}}function uF(t){return function(){this.removeAttributeNS(t.space,t.local)}}function cF(t,e,n){var i,r=n+"",o;return function(){var s=this.getAttribute(t);return s===r?null:s===i?o:o=e(i=s,n)}}function dF(t,e,n){var i,r=n+"",o;return function(){var s=this.getAttributeNS(t.space,t.local);return s===r?null:s===i?o:o=e(i=s,n)}}function fF(t,e,n){var i,r,o;return function(){var s,a=n(this),l;return a==null?void this.removeAttribute(t):(s=this.getAttribute(t),l=a+"",s===l?null:s===i&&l===r?o:(r=l,o=e(i=s,a)))}}function hF(t,e,n){var i,r,o;return function(){var s,a=n(this),l;return a==null?void this.removeAttributeNS(t.space,t.local):(s=this.getAttributeNS(t.space,t.local),l=a+"",s===l?null:s===i&&l===r?o:(r=l,o=e(i=s,a)))}}function pF(t,e){var n=uc(t),i=n==="transform"?XL:Gy;return this.attrTween(t,typeof e=="function"?(n.local?hF:fF)(n,i,np(this,"attr."+t,e)):e==null?(n.local?uF:lF)(n):(n.local?dF:cF)(n,i,e))}function mF(t,e){return function(n){this.setAttribute(t,e.call(this,n))}}function gF(t,e){return function(n){this.setAttributeNS(t.space,t.local,e.call(this,n))}}function vF(t,e){var n,i;function r(){var o=e.apply(this,arguments);return o!==i&&(n=(i=o)&&gF(t,o)),n}return r._value=e,r}function _F(t,e){var n,i;function r(){var o=e.apply(this,arguments);return o!==i&&(n=(i=o)&&mF(t,o)),n}return r._value=e,r}function yF(t,e){var n="attr."+t;if(arguments.length<2)return(n=this.tween(n))&&n._value;if(e==null)return this.tween(n,null);if(typeof e!="function")throw new Error;var i=uc(t);return this.tween(n,(i.local?vF:_F)(i,e))}function xF(t,e){return function(){tp(this,t).delay=+e.apply(this,arguments)}}function bF(t,e){return e=+e,function(){tp(this,t).delay=e}}function SF(t){var e=this._id;return arguments.length?this.each((typeof t=="function"?xF:bF)(e,t)):ti(this.node(),e).delay}function MF(t,e){return function(){wi(this,t).duration=+e.apply(this,arguments)}}function wF(t,e){return e=+e,function(){wi(this,t).duration=e}}function EF(t){var e=this._id;return arguments.length?this.each((typeof t=="function"?MF:wF)(e,t)):ti(this.node(),e).duration}function TF(t,e){if(typeof e!="function")throw new Error;return function(){wi(this,t).ease=e}}function AF(t){var e=this._id;return arguments.length?this.each(TF(e,t)):ti(this.node(),e).ease}function CF(t,e){return function(){var n=e.apply(this,arguments);if(typeof n!="function")throw new Error;wi(this,t).ease=n}}function RF(t){if(typeof t!="function")throw new Error;return this.each(CF(this._id,t))}function IF(t){typeof t!="function"&&(t=wy(t));for(var e=this._groups,n=e.length,i=new Array(n),r=0;r<n;++r)for(var o=e[r],s=o.length,a=i[r]=[],l,u=0;u<s;++u)(l=o[u])&&t.call(l,l.__data__,u,o)&&a.push(l);return new sr(i,this._parents,this._name,this._id)}function PF(t){if(t._id!==this._id)throw new Error;for(var e=this._groups,n=t._groups,i=e.length,r=n.length,o=Math.min(i,r),s=new Array(i),a=0;a<o;++a)for(var l=e[a],u=n[a],c=l.length,d=s[a]=new Array(c),f,h=0;h<c;++h)(f=l[h]||u[h])&&(d[h]=f);for(;a<i;++a)s[a]=e[a];return new sr(s,this._parents,this._name,this._id)}function NF(t){return(t+"").trim().split(/^|\s+/).every(function(e){var n=e.indexOf(".");return n>=0&&(e=e.slice(0,n)),!e||e==="start"})}function DF(t,e,n){var i,r,o=NF(e)?tp:wi;return function(){var s=o(this,t),a=s.on;a!==i&&(r=(i=a).copy()).on(e,n),s.on=r}}function LF(t,e){var n=this._id;return arguments.length<2?ti(this.node(),n).on.on(t):this.each(DF(n,t,e))}function FF(t){return function(){var e=this.parentNode;for(var n in this.__transition)if(+n!==t)return;e&&e.removeChild(this)}}function UF(){return this.on("end.remove",FF(this._id))}function OF(t){var e=this._name,n=this._id;typeof t!="function"&&(t=jh(t));for(var i=this._groups,r=i.length,o=new Array(r),s=0;s<r;++s)for(var a=i[s],l=a.length,u=o[s]=new Array(l),c,d,f=0;f<l;++f)(c=a[f])&&(d=t.call(c,c.__data__,f,a))&&("__data__"in c&&(d.__data__=c.__data__),u[f]=d,dc(u[f],e,n,f,u,ti(c,n)));return new sr(o,this._parents,e,n)}function BF(t){var e=this._name,n=this._id;typeof t!="function"&&(t=My(t));for(var i=this._groups,r=i.length,o=[],s=[],a=0;a<r;++a)for(var l=i[a],u=l.length,c,d=0;d<u;++d)if(c=l[d]){for(var f=t.call(c,c.__data__,d,l),h,m=ti(c,n),v=0,g=f.length;v<g;++v)(h=f[v])&&dc(h,e,n,v,f,m);o.push(f),s.push(c)}return new sr(o,s,e,n)}var kF=Ba.prototype.constructor;function zF(){return new kF(this._groups,this._parents)}function VF(t,e){var n,i,r;return function(){var o=gs(this,t),s=(this.style.removeProperty(t),gs(this,t));return o===s?null:o===n&&s===i?r:r=e(n=o,i=s)}}function Wy(t){return function(){this.style.removeProperty(t)}}function $F(t,e,n){var i,r=n+"",o;return function(){var s=gs(this,t);return s===r?null:s===i?o:o=e(i=s,n)}}function HF(t,e,n){var i,r,o;return function(){var s=gs(this,t),a=n(this),l=a+"";return a==null&&(l=a=(this.style.removeProperty(t),gs(this,t))),s===l?null:s===i&&l===r?o:(r=l,o=e(i=s,a))}}function GF(t,e){var n,i,r,o="style."+e,s="end."+o,a;return function(){var l=wi(this,t),u=l.on,c=l.value[o]==null?a||(a=Wy(e)):void 0;(u!==n||r!==c)&&(i=(n=u).copy()).on(s,r=c),l.on=i}}function WF(t,e,n){var i=(t+="")=="transform"?WL:Gy;return e==null?this.styleTween(t,VF(t,i)).on("end.style."+t,Wy(t)):typeof e=="function"?this.styleTween(t,HF(t,i,np(this,"style."+t,e))).each(GF(this._id,t)):this.styleTween(t,$F(t,i,e),n).on("end.style."+t,null)}function XF(t,e,n){return function(i){this.style.setProperty(t,e.call(this,i),n)}}function YF(t,e,n){var i,r;function o(){var s=e.apply(this,arguments);return s!==r&&(i=(r=s)&&XF(t,s,n)),i}return o._value=e,o}function qF(t,e,n){var i="style."+(t+="");if(arguments.length<2)return(i=this.tween(i))&&i._value;if(e==null)return this.tween(i,null);if(typeof e!="function")throw new Error;return this.tween(i,YF(t,e,n??""))}function KF(t){return function(){this.textContent=t}}function ZF(t){return function(){var e=t(this);this.textContent=e??""}}function jF(t){return this.tween("text",typeof t=="function"?ZF(np(this,"text",t)):KF(t==null?"":t+""))}function JF(t){return function(e){this.textContent=t.call(this,e)}}function QF(t){var e,n;function i(){var r=t.apply(this,arguments);return r!==n&&(e=(n=r)&&JF(r)),e}return i._value=t,i}function eU(t){var e="text";if(arguments.length<1)return(e=this.tween(e))&&e._value;if(t==null)return this.tween(e,null);if(typeof t!="function")throw new Error;return this.tween(e,QF(t))}function tU(){for(var t=this._name,e=this._id,n=Xy(),i=this._groups,r=i.length,o=0;o<r;++o)for(var s=i[o],a=s.length,l,u=0;u<a;++u)if(l=s[u]){var c=ti(l,e);dc(l,t,n,u,s,{time:c.time+c.delay+c.duration,delay:0,duration:c.duration,ease:c.ease})}return new sr(i,this._parents,t,n)}function nU(){var t,e,n=this,i=n._id,r=n.size();return new Promise(function(o,s){var a={value:s},l={value:function(){--r===0&&o()}};n.each(function(){var u=wi(this,i),c=u.on;c!==t&&(e=(t=c).copy(),e._.cancel.push(a),e._.interrupt.push(a),e._.end.push(l)),u.on=e}),r===0&&o()})}var iU=0;function sr(t,e,n,i){this._groups=t,this._parents=e,this._name=n,this._id=i}function Xy(){return++iU}var Fi=Ba.prototype;sr.prototype={constructor:sr,select:OF,selectAll:BF,selectChild:Fi.selectChild,selectChildren:Fi.selectChildren,filter:IF,merge:PF,selection:zF,transition:tU,call:Fi.call,nodes:Fi.nodes,node:Fi.node,size:Fi.size,empty:Fi.empty,each:Fi.each,on:LF,attr:pF,attrTween:yF,style:WF,styleTween:qF,text:jF,textTween:eU,remove:UF,tween:aF,delay:SF,duration:EF,ease:AF,easeVarying:RF,end:nU,[Symbol.iterator]:Fi[Symbol.iterator]};function rU(t){return((t*=2)<=1?t*t*t:(t-=2)*t*t+2)/2}var oU={time:null,delay:0,duration:250,ease:rU};function sU(t,e){for(var n;!(n=t.__transition)||!(n=n[e]);)if(!(t=t.parentNode))throw new Error(`transition ${e} not found`);return n}function aU(t){var e,n;t instanceof sr?(e=t._id,t=t._name):(e=Xy(),(n=oU).time=ep(),t=t==null?null:t+"");for(var i=this._groups,r=i.length,o=0;o<r;++o)for(var s=i[o],a=s.length,l,u=0;u<a;++u)(l=s[u])&&dc(l,t,e,u,s,n||sU(l,e));return new sr(i,this._parents,t,e)}Ba.prototype.interrupt=rF;Ba.prototype.transition=aU;const Al=t=>()=>t;function lU(t,{sourceEvent:e,target:n,transform:i,dispatch:r}){Object.defineProperties(this,{type:{value:t,enumerable:!0,configurable:!0},sourceEvent:{value:e,enumerable:!0,configurable:!0},target:{value:n,enumerable:!0,configurable:!0},transform:{value:i,enumerable:!0,configurable:!0},_:{value:r}})}function Gi(t,e,n){this.k=t,this.x=e,this.y=n}Gi.prototype={constructor:Gi,scale:function(t){return t===1?this:new Gi(this.k*t,this.x,this.y)},translate:function(t,e){return t===0&e===0?this:new Gi(this.k,this.x+this.k*t,this.y+this.k*e)},apply:function(t){return[t[0]*this.k+this.x,t[1]*this.k+this.y]},applyX:function(t){return t*this.k+this.x},applyY:function(t){return t*this.k+this.y},invert:function(t){return[(t[0]-this.x)/this.k,(t[1]-this.y)/this.k]},invertX:function(t){return(t-this.x)/this.k},invertY:function(t){return(t-this.y)/this.k},rescaleX:function(t){return t.copy().domain(t.range().map(this.invertX,this).map(t.invert,t))},rescaleY:function(t){return t.copy().domain(t.range().map(this.invertY,this).map(t.invert,t))},toString:function(){return"translate("+this.x+","+this.y+") scale("+this.k+")"}};var ip=new Gi(1,0,0);Gi.prototype;function bd(t){t.stopImmediatePropagation()}function Fs(t){t.preventDefault(),t.stopImmediatePropagation()}function uU(t){return(!t.ctrlKey||t.type==="wheel")&&!t.button}function cU(){var t=this;return t instanceof SVGElement?(t=t.ownerSVGElement||t,t.hasAttribute("viewBox")?(t=t.viewBox.baseVal,[[t.x,t.y],[t.x+t.width,t.y+t.height]]):[[0,0],[t.width.baseVal.value,t.height.baseVal.value]]):[[0,0],[t.clientWidth,t.clientHeight]]}function nv(){return this.__zoom||ip}function dU(t){return-t.deltaY*(t.deltaMode===1?.05:t.deltaMode?1:.002)*(t.ctrlKey?10:1)}function fU(){return navigator.maxTouchPoints||"ontouchstart"in this}function hU(t,e,n){var i=t.invertX(e[0][0])-n[0][0],r=t.invertX(e[1][0])-n[1][0],o=t.invertY(e[0][1])-n[0][1],s=t.invertY(e[1][1])-n[1][1];return t.translate(r>i?(i+r)/2:Math.min(0,i)||Math.max(0,r),s>o?(o+s)/2:Math.min(0,o)||Math.max(0,s))}function pU(){var t=uU,e=cU,n=hU,i=dU,r=fU,o=[0,1/0],s=[[-1/0,-1/0],[1/0,1/0]],a=250,l=ZL,u=Zh("start","zoom","end"),c,d,f,h=500,m=150,v=0,g=10;function p(E){E.property("__zoom",nv).on("wheel.zoom",_,{passive:!1}).on("mousedown.zoom",x).on("dblclick.zoom",R).filter(r).on("touchstart.zoom",T).on("touchmove.zoom",A).on("touchend.zoom touchcancel.zoom",X).style("-webkit-tap-highlight-color","rgba(0,0,0,0)")}p.transform=function(E,k,C,N){var U=E.selection?E.selection():E;U.property("__zoom",nv),E!==U?I(E,k,C,N):U.interrupt().each(function(){D(this,arguments).event(N).start().zoom(null,typeof k=="function"?k.apply(this,arguments):k).end()})},p.scaleBy=function(E,k,C,N){p.scaleTo(E,function(){var U=this.__zoom.k,H=typeof k=="function"?k.apply(this,arguments):k;return U*H},C,N)},p.scaleTo=function(E,k,C,N){p.transform(E,function(){var U=e.apply(this,arguments),H=this.__zoom,G=C==null?y(U):typeof C=="function"?C.apply(this,arguments):C,ne=H.invert(G),re=typeof k=="function"?k.apply(this,arguments):k;return n(M(b(H,re),G,ne),U,s)},C,N)},p.translateBy=function(E,k,C,N){p.transform(E,function(){return n(this.__zoom.translate(typeof k=="function"?k.apply(this,arguments):k,typeof C=="function"?C.apply(this,arguments):C),e.apply(this,arguments),s)},null,N)},p.translateTo=function(E,k,C,N,U){p.transform(E,function(){var H=e.apply(this,arguments),G=this.__zoom,ne=N==null?y(H):typeof N=="function"?N.apply(this,arguments):N;return n(ip.translate(ne[0],ne[1]).scale(G.k).translate(typeof k=="function"?-k.apply(this,arguments):-k,typeof C=="function"?-C.apply(this,arguments):-C),H,s)},N,U)};function b(E,k){return k=Math.max(o[0],Math.min(o[1],k)),k===E.k?E:new Gi(k,E.x,E.y)}function M(E,k,C){var N=k[0]-C[0]*E.k,U=k[1]-C[1]*E.k;return N===E.x&&U===E.y?E:new Gi(E.k,N,U)}function y(E){return[(+E[0][0]+ +E[1][0])/2,(+E[0][1]+ +E[1][1])/2]}function I(E,k,C,N){E.on("start.zoom",function(){D(this,arguments).event(N).start()}).on("interrupt.zoom end.zoom",function(){D(this,arguments).event(N).end()}).tween("zoom",function(){var U=this,H=arguments,G=D(U,H).event(N),ne=e.apply(U,H),re=C==null?y(ne):typeof C=="function"?C.apply(U,H):C,ye=Math.max(ne[1][0]-ne[0][0],ne[1][1]-ne[0][1]),we=U.__zoom,te=typeof k=="function"?k.apply(U,H):k,L=l(we.invert(re).concat(ye/we.k),te.invert(re).concat(ye/te.k));return function(j){if(j===1)j=te;else{var Q=L(j),fe=ye/Q[2];j=new Gi(fe,re[0]-Q[0]*fe,re[1]-Q[1]*fe)}G.zoom(null,j)}})}function D(E,k,C){return!C&&E.__zooming||new B(E,k)}function B(E,k){this.that=E,this.args=k,this.active=0,this.sourceEvent=null,this.extent=e.apply(E,k),this.taps=0}B.prototype={event:function(E){return E&&(this.sourceEvent=E),this},start:function(){return++this.active===1&&(this.that.__zooming=this,this.emit("start")),this},zoom:function(E,k){return this.mouse&&E!=="mouse"&&(this.mouse[1]=k.invert(this.mouse[0])),this.touch0&&E!=="touch"&&(this.touch0[1]=k.invert(this.touch0[0])),this.touch1&&E!=="touch"&&(this.touch1[1]=k.invert(this.touch1[0])),this.that.__zoom=k,this.emit("zoom"),this},end:function(){return--this.active===0&&(delete this.that.__zooming,this.emit("end")),this},emit:function(E){var k=Rr(this.that).datum();u.call(E,this.that,new lU(E,{sourceEvent:this.sourceEvent,target:p,transform:this.that.__zoom,dispatch:u}),k)}};function _(E,...k){if(!t.apply(this,arguments))return;var C=D(this,k).event(E),N=this.__zoom,U=Math.max(o[0],Math.min(o[1],N.k*Math.pow(2,i.apply(this,arguments)))),H=Mr(E);if(C.wheel)(C.mouse[0][0]!==H[0]||C.mouse[0][1]!==H[1])&&(C.mouse[1]=N.invert(C.mouse[0]=H)),clearTimeout(C.wheel);else{if(N.k===U)return;C.mouse=[H,N.invert(H)],Kl(this),C.start()}Fs(E),C.wheel=setTimeout(G,m),C.zoom("mouse",n(M(b(N,U),C.mouse[0],C.mouse[1]),C.extent,s));function G(){C.wheel=null,C.end()}}function x(E,...k){if(f||!t.apply(this,arguments))return;var C=E.currentTarget,N=D(this,k,!0).event(E),U=Rr(E.view).on("mousemove.zoom",re,!0).on("mouseup.zoom",ye,!0),H=Mr(E,C),G=E.clientX,ne=E.clientY;ML(E.view),bd(E),N.mouse=[H,this.__zoom.invert(H)],Kl(this),N.start();function re(we){if(Fs(we),!N.moved){var te=we.clientX-G,L=we.clientY-ne;N.moved=te*te+L*L>v}N.event(we).zoom("mouse",n(M(N.that.__zoom,N.mouse[0]=Mr(we,C),N.mouse[1]),N.extent,s))}function ye(we){U.on("mousemove.zoom mouseup.zoom",null),wL(we.view,N.moved),Fs(we),N.event(we).end()}}function R(E,...k){if(t.apply(this,arguments)){var C=this.__zoom,N=Mr(E.changedTouches?E.changedTouches[0]:E,this),U=C.invert(N),H=C.k*(E.shiftKey?.5:2),G=n(M(b(C,H),N,U),e.apply(this,k),s);Fs(E),a>0?Rr(this).transition().duration(a).call(I,G,N,E):Rr(this).call(p.transform,G,N,E)}}function T(E,...k){if(t.apply(this,arguments)){var C=E.touches,N=C.length,U=D(this,k,E.changedTouches.length===N).event(E),H,G,ne,re;for(bd(E),G=0;G<N;++G)ne=C[G],re=Mr(ne,this),re=[re,this.__zoom.invert(re),ne.identifier],U.touch0?!U.touch1&&U.touch0[2]!==re[2]&&(U.touch1=re,U.taps=0):(U.touch0=re,H=!0,U.taps=1+!!c);c&&(c=clearTimeout(c)),H&&(U.taps<2&&(d=re[0],c=setTimeout(function(){c=null},h)),Kl(this),U.start())}}function A(E,...k){if(this.__zooming){var C=D(this,k).event(E),N=E.changedTouches,U=N.length,H,G,ne,re;for(Fs(E),H=0;H<U;++H)G=N[H],ne=Mr(G,this),C.touch0&&C.touch0[2]===G.identifier?C.touch0[0]=ne:C.touch1&&C.touch1[2]===G.identifier&&(C.touch1[0]=ne);if(G=C.that.__zoom,C.touch1){var ye=C.touch0[0],we=C.touch0[1],te=C.touch1[0],L=C.touch1[1],j=(j=te[0]-ye[0])*j+(j=te[1]-ye[1])*j,Q=(Q=L[0]-we[0])*Q+(Q=L[1]-we[1])*Q;G=b(G,Math.sqrt(j/Q)),ne=[(ye[0]+te[0])/2,(ye[1]+te[1])/2],re=[(we[0]+L[0])/2,(we[1]+L[1])/2]}else if(C.touch0)ne=C.touch0[0],re=C.touch0[1];else return;C.zoom("touch",n(M(G,ne,re),C.extent,s))}}function X(E,...k){if(this.__zooming){var C=D(this,k).event(E),N=E.changedTouches,U=N.length,H,G;for(bd(E),f&&clearTimeout(f),f=setTimeout(function(){f=null},h),H=0;H<U;++H)G=N[H],C.touch0&&C.touch0[2]===G.identifier?delete C.touch0:C.touch1&&C.touch1[2]===G.identifier&&delete C.touch1;if(C.touch1&&!C.touch0&&(C.touch0=C.touch1,delete C.touch1),C.touch0)C.touch0[1]=this.__zoom.invert(C.touch0[0]);else if(C.end(),C.taps===2&&(G=Mr(G,this),Math.hypot(d[0]-G[0],d[1]-G[1])<g)){var ne=Rr(this).on("dblclick.zoom");ne&&ne.apply(this,arguments)}}}return p.wheelDelta=function(E){return arguments.length?(i=typeof E=="function"?E:Al(+E),p):i},p.filter=function(E){return arguments.length?(t=typeof E=="function"?E:Al(!!E),p):t},p.touchable=function(E){return arguments.length?(r=typeof E=="function"?E:Al(!!E),p):r},p.extent=function(E){return arguments.length?(e=typeof E=="function"?E:Al([[+E[0][0],+E[0][1]],[+E[1][0],+E[1][1]]]),p):e},p.scaleExtent=function(E){return arguments.length?(o[0]=+E[0],o[1]=+E[1],p):[o[0],o[1]]},p.translateExtent=function(E){return arguments.length?(s[0][0]=+E[0][0],s[1][0]=+E[1][0],s[0][1]=+E[0][1],s[1][1]=+E[1][1],p):[[s[0][0],s[0][1]],[s[1][0],s[1][1]]]},p.constrain=function(E){return arguments.length?(n=E,p):n},p.duration=function(E){return arguments.length?(a=+E,p):a},p.interpolate=function(E){return arguments.length?(l=E,p):l},p.on=function(){var E=u.on.apply(u,arguments);return E===u?p:E},p.clickDistance=function(E){return arguments.length?(v=(E=+E)*E,p):Math.sqrt(v)},p.tapDistance=function(E){return arguments.length?(g=+E,p):g},p}const Yy=Symbol("MiniMapSlots"),mU=["id","x","y","rx","ry","width","height","fill","stroke","stroke-width","shape-rendering"],gU={name:"MiniMapNode",compatConfig:{MODE:3},inheritAttrs:!1},vU=Nt({...gU,props:{id:{},type:{},selected:{type:Boolean},dragging:{type:Boolean},position:{},dimensions:{},borderRadius:{},color:{},shapeRendering:{},strokeColor:{},strokeWidth:{},hidden:{type:Boolean}},emits:["click","dblclick","mouseenter","mousemove","mouseleave"],setup(t,{emit:e}){const n=t,i=Pn(Yy),r=yh(),o=bt(()=>r.style??{});function s(d){e("click",d)}function a(d){e("dblclick",d)}function l(d){e("mouseenter",d)}function u(d){e("mousemove",d)}function c(d){e("mouseleave",d)}return(d,f)=>!d.hidden&&d.dimensions.width!==0&&d.dimensions.height!==0?(ce(),me(it,{key:0},[he(i)[`node-${n.type}`]?(ce(),Jt(o0(he(i)[`node-${n.type}`]),Tx(aa({key:0},{...n,...d.$attrs})),null,16)):(ce(),me("rect",aa({key:1,id:d.id},d.$attrs,{class:["vue-flow__minimap-node",{selected:d.selected,dragging:d.dragging}],x:d.position.x,y:d.position.y,rx:d.borderRadius,ry:d.borderRadius,width:d.dimensions.width,height:d.dimensions.height,fill:d.color||o.value.background||o.value.backgroundColor,stroke:d.strokeColor,"stroke-width":d.strokeWidth,"shape-rendering":d.shapeRendering,onClick:s,onDblclick:a,onMouseenter:l,onMousemove:u,onMouseleave:c}),null,16,mU))],64)):He("",!0)}}),_U=["width","height","viewBox","aria-labelledby"],yU=["id"],xU=["d","fill","stroke","stroke-width"],bU={name:"MiniMap",compatConfig:{MODE:3}},SU=Nt({...bU,props:{nodeColor:{type:[String,Function],default:"#e2e2e2"},nodeStrokeColor:{type:[String,Function],default:"transparent"},nodeClassName:{type:[String,Function]},nodeBorderRadius:{default:5},nodeStrokeWidth:{default:2},maskColor:{default:"rgb(240, 240, 240, 0.6)"},maskStrokeColor:{default:"none"},maskStrokeWidth:{default:1},position:{default:"bottom-right"},pannable:{type:Boolean,default:!1},zoomable:{type:Boolean,default:!1},width:{},height:{},ariaLabel:{default:"Vue Flow mini map"},inversePan:{type:Boolean,default:!1},zoomStep:{default:1},offsetScale:{default:5},maskBorderRadius:{default:0}},emits:["click","nodeClick","nodeDblclick","nodeMouseenter","nodeMousemove","nodeMouseleave"],setup(t,{emit:e}){const n=l0(),i=yh(),r=200,o=150,{id:s,edges:a,viewport:l,translateExtent:u,dimensions:c,emits:d,d3Selection:f,d3Zoom:h,getNodesInitialized:m}=Dt(),v=Ce();Ur(Yy,n);const g=bt(()=>{var U;return t.width??((U=i.style)==null?void 0:U.width)??r}),p=bt(()=>{var U;return t.height??((U=i.style)==null?void 0:U.height)??o}),b=typeof window>"u"||window.chrome?"crispEdges":"geometricPrecision",M=Re(()=>typeof t.nodeColor=="string"?()=>t.nodeColor:t.nodeColor),y=Re(()=>typeof t.nodeStrokeColor=="string"?()=>t.nodeStrokeColor:t.nodeStrokeColor),I=Re(()=>typeof t.nodeClassName=="string"?()=>t.nodeClassName:typeof t.nodeClassName=="function"?t.nodeClassName:()=>""),D=Re(()=>Wh(m.value.filter(U=>!U.hidden))),B=Re(()=>({x:-l.value.x/l.value.zoom,y:-l.value.y/l.value.zoom,width:c.value.width/l.value.zoom,height:c.value.height/l.value.zoom})),_=Re(()=>m.value&&m.value.length?BP(D.value,B.value):B.value),x=Re(()=>{const U=_.value.width/g.value,H=_.value.height/p.value;return Math.max(U,H)}),R=Re(()=>{const U=x.value*g.value,H=x.value*p.value,G=t.offsetScale*x.value;return{offset:G,x:_.value.x-(U-_.value.width)/2-G,y:_.value.y-(H-_.value.height)/2-G,width:U+G*2,height:H+G*2}}),T=Re(()=>!R.value.x||!R.value.y?"":`
    M${R.value.x-R.value.offset},${R.value.y-R.value.offset}
    h${R.value.width+R.value.offset*2}
    v${R.value.height+R.value.offset*2}
    h${-R.value.width-R.value.offset*2}z
    M${B.value.x+t.maskBorderRadius},${B.value.y}
    h${B.value.width-2*t.maskBorderRadius}
    a${t.maskBorderRadius},${t.maskBorderRadius} 0 0 1 ${t.maskBorderRadius},${t.maskBorderRadius}
    v${B.value.height-2*t.maskBorderRadius}
    a${t.maskBorderRadius},${t.maskBorderRadius} 0 0 1 -${t.maskBorderRadius},${t.maskBorderRadius}
    h${-(B.value.width-2*t.maskBorderRadius)}
    a${t.maskBorderRadius},${t.maskBorderRadius} 0 0 1 -${t.maskBorderRadius},-${t.maskBorderRadius}
    v${-(B.value.height-2*t.maskBorderRadius)}
    a${t.maskBorderRadius},${t.maskBorderRadius} 0 0 1 ${t.maskBorderRadius},-${t.maskBorderRadius}z`);Hv(U=>{if(v.value){const H=Rr(v.value),G=ye=>{if(ye.sourceEvent.type!=="wheel"||!f.value||!h.value)return;const we=ye.sourceEvent.ctrlKey&&ba()?10:1,te=-ye.sourceEvent.deltaY*(ye.sourceEvent.deltaMode===1?.05:ye.sourceEvent.deltaMode?1:.002)*t.zoomStep,L=l.value.zoom*2**(te*we);h.value.scaleTo(f.value,L)},ne=ye=>{if(ye.sourceEvent.type!=="mousemove"||!f.value||!h.value)return;const we=x.value*Math.max(1,l.value.zoom)*(t.inversePan?-1:1),te={x:l.value.x-ye.sourceEvent.movementX*we,y:l.value.y-ye.sourceEvent.movementY*we},L=[[0,0],[c.value.width,c.value.height]],j=ip.translate(te.x,te.y).scale(l.value.zoom),Q=h.value.constrain()(j,L,u.value);h.value.transform(f.value,Q)},re=pU().wheelDelta(ye=>Gf(ye)*(t.zoomStep/10)).on("zoom",t.pannable?ne:()=>{}).on("zoom.wheel",t.zoomable?G:()=>{});H.call(re),U(()=>{H.on("zoom",null)})}},{flush:"post"});function A(U){const[H,G]=Mr(U);e("click",{event:U,position:{x:H,y:G}})}function X(U,H){const G={event:U,node:H,connectedEdges:lo([H],a.value)};d.miniMapNodeClick(G),e("nodeClick",G)}function E(U,H){const G={event:U,node:H,connectedEdges:lo([H],a.value)};d.miniMapNodeDoubleClick(G),e("nodeDblclick",G)}function k(U,H){const G={event:U,node:H,connectedEdges:lo([H],a.value)};d.miniMapNodeMouseEnter(G),e("nodeMouseenter",G)}function C(U,H){const G={event:U,node:H,connectedEdges:lo([H],a.value)};d.miniMapNodeMouseMove(G),e("nodeMousemove",G)}function N(U,H){const G={event:U,node:H,connectedEdges:lo([H],a.value)};d.miniMapNodeMouseLeave(G),e("nodeMouseleave",G)}return(U,H)=>(ce(),Jt(he(zN),{position:U.position,class:ut(["vue-flow__minimap",{pannable:U.pannable,zoomable:U.zoomable}])},{default:cn(()=>[(ce(),me("svg",{ref_key:"el",ref:v,width:g.value,height:p.value,viewBox:[R.value.x,R.value.y,R.value.width,R.value.height].join(" "),role:"img","aria-labelledby":`vue-flow__minimap-${he(s)}`,onClick:A},[U.ariaLabel?(ce(),me("title",{key:0,id:`vue-flow__minimap-${he(s)}`},Te(U.ariaLabel),9,yU)):He("",!0),(ce(!0),me(it,null,Ht(he(m),G=>(ce(),Jt(vU,{id:G.id,key:G.id,f:"",position:G.computedPosition,dimensions:G.dimensions,selected:G.selected,dragging:G.dragging,style:rt(G.style),class:ut(I.value(G)),color:M.value(G),"border-radius":U.nodeBorderRadius,"stroke-color":y.value(G),"stroke-width":U.nodeStrokeWidth,"shape-rendering":he(b),type:G.type,hidden:G.hidden,onClick:ne=>X(ne,G),onDblclick:ne=>E(ne,G),onMouseenter:ne=>k(ne,G),onMousemove:ne=>C(ne,G),onMouseleave:ne=>N(ne,G)},null,8,["id","position","dimensions","selected","dragging","style","class","color","border-radius","stroke-color","stroke-width","shape-rendering","type","hidden","onClick","onDblclick","onMouseenter","onMousemove","onMouseleave"]))),128)),q("path",{class:"vue-flow__minimap-mask",d:T.value,fill:U.maskColor,stroke:U.maskStrokeColor,"stroke-width":U.maskStrokeWidth,"fill-rule":"evenodd"},null,8,xU)],8,_U))]),_:1},8,["position","class"]))}});var ih="http://www.w3.org/1999/xhtml";const iv={svg:"http://www.w3.org/2000/svg",xhtml:ih,xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"};function qy(t){var e=t+="",n=e.indexOf(":");return n>=0&&(e=t.slice(0,n))!=="xmlns"&&(t=t.slice(n+1)),iv.hasOwnProperty(e)?{space:iv[e],local:t}:t}function MU(t){return function(){var e=this.ownerDocument,n=this.namespaceURI;return n===ih&&e.documentElement.namespaceURI===ih?e.createElement(t):e.createElementNS(n,t)}}function wU(t){return function(){return this.ownerDocument.createElementNS(t.space,t.local)}}function Ky(t){var e=qy(t);return(e.local?wU:MU)(e)}function EU(){}function Zy(t){return t==null?EU:function(){return this.querySelector(t)}}function TU(t){typeof t!="function"&&(t=Zy(t));for(var e=this._groups,n=e.length,i=new Array(n),r=0;r<n;++r)for(var o=e[r],s=o.length,a=i[r]=new Array(s),l,u,c=0;c<s;++c)(l=o[c])&&(u=t.call(l,l.__data__,c,o))&&("__data__"in l&&(u.__data__=l.__data__),a[c]=u);return new kn(i,this._parents)}function AU(t){return t==null?[]:Array.isArray(t)?t:Array.from(t)}function CU(){return[]}function RU(t){return t==null?CU:function(){return this.querySelectorAll(t)}}function IU(t){return function(){return AU(t.apply(this,arguments))}}function PU(t){typeof t=="function"?t=IU(t):t=RU(t);for(var e=this._groups,n=e.length,i=[],r=[],o=0;o<n;++o)for(var s=e[o],a=s.length,l,u=0;u<a;++u)(l=s[u])&&(i.push(t.call(l,l.__data__,u,s)),r.push(l));return new kn(i,r)}function NU(t){return function(){return this.matches(t)}}function jy(t){return function(e){return e.matches(t)}}var DU=Array.prototype.find;function LU(t){return function(){return DU.call(this.children,t)}}function FU(){return this.firstElementChild}function UU(t){return this.select(t==null?FU:LU(typeof t=="function"?t:jy(t)))}var OU=Array.prototype.filter;function BU(){return Array.from(this.children)}function kU(t){return function(){return OU.call(this.children,t)}}function zU(t){return this.selectAll(t==null?BU:kU(typeof t=="function"?t:jy(t)))}function VU(t){typeof t!="function"&&(t=NU(t));for(var e=this._groups,n=e.length,i=new Array(n),r=0;r<n;++r)for(var o=e[r],s=o.length,a=i[r]=[],l,u=0;u<s;++u)(l=o[u])&&t.call(l,l.__data__,u,o)&&a.push(l);return new kn(i,this._parents)}function Jy(t){return new Array(t.length)}function $U(){return new kn(this._enter||this._groups.map(Jy),this._parents)}function Ru(t,e){this.ownerDocument=t.ownerDocument,this.namespaceURI=t.namespaceURI,this._next=null,this._parent=t,this.__data__=e}Ru.prototype={constructor:Ru,appendChild:function(t){return this._parent.insertBefore(t,this._next)},insertBefore:function(t,e){return this._parent.insertBefore(t,e)},querySelector:function(t){return this._parent.querySelector(t)},querySelectorAll:function(t){return this._parent.querySelectorAll(t)}};function HU(t){return function(){return t}}function GU(t,e,n,i,r,o){for(var s=0,a,l=e.length,u=o.length;s<u;++s)(a=e[s])?(a.__data__=o[s],i[s]=a):n[s]=new Ru(t,o[s]);for(;s<l;++s)(a=e[s])&&(r[s]=a)}function WU(t,e,n,i,r,o,s){var a,l,u=new Map,c=e.length,d=o.length,f=new Array(c),h;for(a=0;a<c;++a)(l=e[a])&&(f[a]=h=s.call(l,l.__data__,a,e)+"",u.has(h)?r[a]=l:u.set(h,l));for(a=0;a<d;++a)h=s.call(t,o[a],a,o)+"",(l=u.get(h))?(i[a]=l,l.__data__=o[a],u.delete(h)):n[a]=new Ru(t,o[a]);for(a=0;a<c;++a)(l=e[a])&&u.get(f[a])===l&&(r[a]=l)}function XU(t){return t.__data__}function YU(t,e){if(!arguments.length)return Array.from(this,XU);var n=e?WU:GU,i=this._parents,r=this._groups;typeof t!="function"&&(t=HU(t));for(var o=r.length,s=new Array(o),a=new Array(o),l=new Array(o),u=0;u<o;++u){var c=i[u],d=r[u],f=d.length,h=qU(t.call(c,c&&c.__data__,u,i)),m=h.length,v=a[u]=new Array(m),g=s[u]=new Array(m),p=l[u]=new Array(f);n(c,d,v,g,p,h,e);for(var b=0,M=0,y,I;b<m;++b)if(y=v[b]){for(b>=M&&(M=b+1);!(I=g[M])&&++M<m;);y._next=I||null}}return s=new kn(s,i),s._enter=a,s._exit=l,s}function qU(t){return typeof t=="object"&&"length"in t?t:Array.from(t)}function KU(){return new kn(this._exit||this._groups.map(Jy),this._parents)}function ZU(t,e,n){var i=this.enter(),r=this,o=this.exit();return typeof t=="function"?(i=t(i),i&&(i=i.selection())):i=i.append(t+""),e!=null&&(r=e(r),r&&(r=r.selection())),n==null?o.remove():n(o),i&&r?i.merge(r).order():r}function jU(t){for(var e=t.selection?t.selection():t,n=this._groups,i=e._groups,r=n.length,o=i.length,s=Math.min(r,o),a=new Array(r),l=0;l<s;++l)for(var u=n[l],c=i[l],d=u.length,f=a[l]=new Array(d),h,m=0;m<d;++m)(h=u[m]||c[m])&&(f[m]=h);for(;l<r;++l)a[l]=n[l];return new kn(a,this._parents)}function JU(){for(var t=this._groups,e=-1,n=t.length;++e<n;)for(var i=t[e],r=i.length-1,o=i[r],s;--r>=0;)(s=i[r])&&(o&&s.compareDocumentPosition(o)^4&&o.parentNode.insertBefore(s,o),o=s);return this}function QU(t){t||(t=eO);function e(d,f){return d&&f?t(d.__data__,f.__data__):!d-!f}for(var n=this._groups,i=n.length,r=new Array(i),o=0;o<i;++o){for(var s=n[o],a=s.length,l=r[o]=new Array(a),u,c=0;c<a;++c)(u=s[c])&&(l[c]=u);l.sort(e)}return new kn(r,this._parents).order()}function eO(t,e){return t<e?-1:t>e?1:t>=e?0:NaN}function tO(){var t=arguments[0];return arguments[0]=this,t.apply(null,arguments),this}function nO(){return Array.from(this)}function iO(){for(var t=this._groups,e=0,n=t.length;e<n;++e)for(var i=t[e],r=0,o=i.length;r<o;++r){var s=i[r];if(s)return s}return null}function rO(){let t=0;for(const e of this)++t;return t}function oO(){return!this.node()}function sO(t){for(var e=this._groups,n=0,i=e.length;n<i;++n)for(var r=e[n],o=0,s=r.length,a;o<s;++o)(a=r[o])&&t.call(a,a.__data__,o,r);return this}function aO(t){return function(){this.removeAttribute(t)}}function lO(t){return function(){this.removeAttributeNS(t.space,t.local)}}function uO(t,e){return function(){this.setAttribute(t,e)}}function cO(t,e){return function(){this.setAttributeNS(t.space,t.local,e)}}function dO(t,e){return function(){var n=e.apply(this,arguments);n==null?this.removeAttribute(t):this.setAttribute(t,n)}}function fO(t,e){return function(){var n=e.apply(this,arguments);n==null?this.removeAttributeNS(t.space,t.local):this.setAttributeNS(t.space,t.local,n)}}function hO(t,e){var n=qy(t);if(arguments.length<2){var i=this.node();return n.local?i.getAttributeNS(n.space,n.local):i.getAttribute(n)}return this.each((e==null?n.local?lO:aO:typeof e=="function"?n.local?fO:dO:n.local?cO:uO)(n,e))}function Qy(t){return t.ownerDocument&&t.ownerDocument.defaultView||t.document&&t||t.defaultView}function pO(t){return function(){this.style.removeProperty(t)}}function mO(t,e,n){return function(){this.style.setProperty(t,e,n)}}function gO(t,e,n){return function(){var i=e.apply(this,arguments);i==null?this.style.removeProperty(t):this.style.setProperty(t,i,n)}}function vO(t,e,n){return arguments.length>1?this.each((e==null?pO:typeof e=="function"?gO:mO)(t,e,n??"")):_O(this.node(),t)}function _O(t,e){return t.style.getPropertyValue(e)||Qy(t).getComputedStyle(t,null).getPropertyValue(e)}function yO(t){return function(){delete this[t]}}function xO(t,e){return function(){this[t]=e}}function bO(t,e){return function(){var n=e.apply(this,arguments);n==null?delete this[t]:this[t]=n}}function SO(t,e){return arguments.length>1?this.each((e==null?yO:typeof e=="function"?bO:xO)(t,e)):this.node()[t]}function ex(t){return t.trim().split(/^|\s+/)}function rp(t){return t.classList||new tx(t)}function tx(t){this._node=t,this._names=ex(t.getAttribute("class")||"")}tx.prototype={add:function(t){var e=this._names.indexOf(t);e<0&&(this._names.push(t),this._node.setAttribute("class",this._names.join(" ")))},remove:function(t){var e=this._names.indexOf(t);e>=0&&(this._names.splice(e,1),this._node.setAttribute("class",this._names.join(" ")))},contains:function(t){return this._names.indexOf(t)>=0}};function nx(t,e){for(var n=rp(t),i=-1,r=e.length;++i<r;)n.add(e[i])}function ix(t,e){for(var n=rp(t),i=-1,r=e.length;++i<r;)n.remove(e[i])}function MO(t){return function(){nx(this,t)}}function wO(t){return function(){ix(this,t)}}function EO(t,e){return function(){(e.apply(this,arguments)?nx:ix)(this,t)}}function TO(t,e){var n=ex(t+"");if(arguments.length<2){for(var i=rp(this.node()),r=-1,o=n.length;++r<o;)if(!i.contains(n[r]))return!1;return!0}return this.each((typeof e=="function"?EO:e?MO:wO)(n,e))}function AO(){this.textContent=""}function CO(t){return function(){this.textContent=t}}function RO(t){return function(){var e=t.apply(this,arguments);this.textContent=e??""}}function IO(t){return arguments.length?this.each(t==null?AO:(typeof t=="function"?RO:CO)(t)):this.node().textContent}function PO(){this.innerHTML=""}function NO(t){return function(){this.innerHTML=t}}function DO(t){return function(){var e=t.apply(this,arguments);this.innerHTML=e??""}}function LO(t){return arguments.length?this.each(t==null?PO:(typeof t=="function"?DO:NO)(t)):this.node().innerHTML}function FO(){this.nextSibling&&this.parentNode.appendChild(this)}function UO(){return this.each(FO)}function OO(){this.previousSibling&&this.parentNode.insertBefore(this,this.parentNode.firstChild)}function BO(){return this.each(OO)}function kO(t){var e=typeof t=="function"?t:Ky(t);return this.select(function(){return this.appendChild(e.apply(this,arguments))})}function zO(){return null}function VO(t,e){var n=typeof t=="function"?t:Ky(t),i=e==null?zO:typeof e=="function"?e:Zy(e);return this.select(function(){return this.insertBefore(n.apply(this,arguments),i.apply(this,arguments)||null)})}function $O(){var t=this.parentNode;t&&t.removeChild(this)}function HO(){return this.each($O)}function GO(){var t=this.cloneNode(!1),e=this.parentNode;return e?e.insertBefore(t,this.nextSibling):t}function WO(){var t=this.cloneNode(!0),e=this.parentNode;return e?e.insertBefore(t,this.nextSibling):t}function XO(t){return this.select(t?WO:GO)}function YO(t){return arguments.length?this.property("__data__",t):this.node().__data__}function qO(t){return function(e){t.call(this,e,this.__data__)}}function KO(t){return t.trim().split(/^|\s+/).map(function(e){var n="",i=e.indexOf(".");return i>=0&&(n=e.slice(i+1),e=e.slice(0,i)),{type:e,name:n}})}function ZO(t){return function(){var e=this.__on;if(e){for(var n=0,i=-1,r=e.length,o;n<r;++n)o=e[n],(!t.type||o.type===t.type)&&o.name===t.name?this.removeEventListener(o.type,o.listener,o.options):e[++i]=o;++i?e.length=i:delete this.__on}}}function jO(t,e,n){return function(){var i=this.__on,r,o=qO(e);if(i){for(var s=0,a=i.length;s<a;++s)if((r=i[s]).type===t.type&&r.name===t.name){this.removeEventListener(r.type,r.listener,r.options),this.addEventListener(r.type,r.listener=o,r.options=n),r.value=e;return}}this.addEventListener(t.type,o,n),r={type:t.type,name:t.name,value:e,listener:o,options:n},i?i.push(r):this.__on=[r]}}function JO(t,e,n){var i=KO(t+""),r,o=i.length,s;if(arguments.length<2){var a=this.node().__on;if(a){for(var l=0,u=a.length,c;l<u;++l)for(r=0,c=a[l];r<o;++r)if((s=i[r]).type===c.type&&s.name===c.name)return c.value}return}for(a=e?jO:ZO,r=0;r<o;++r)this.each(a(i[r],e,n));return this}function rx(t,e,n){var i=Qy(t),r=i.CustomEvent;typeof r=="function"?r=new r(e,n):(r=i.document.createEvent("Event"),n?(r.initEvent(e,n.bubbles,n.cancelable),r.detail=n.detail):r.initEvent(e,!1,!1)),t.dispatchEvent(r)}function QO(t,e){return function(){return rx(this,t,e)}}function eB(t,e){return function(){return rx(this,t,e.apply(this,arguments))}}function tB(t,e){return this.each((typeof e=="function"?eB:QO)(t,e))}function*nB(){for(var t=this._groups,e=0,n=t.length;e<n;++e)for(var i=t[e],r=0,o=i.length,s;r<o;++r)(s=i[r])&&(yield s)}var iB=[null];function kn(t,e){this._groups=t,this._parents=e}function rB(){return this}kn.prototype={constructor:kn,select:TU,selectAll:PU,selectChild:UU,selectChildren:zU,filter:VU,data:YU,enter:$U,exit:KU,join:ZU,merge:jU,selection:rB,order:JU,sort:QU,call:tO,nodes:nO,node:iO,size:rO,empty:oO,each:sO,attr:hO,style:vO,property:SO,classed:TO,text:IO,html:LO,raise:UO,lower:BO,append:kO,insert:VO,remove:HO,clone:XO,datum:YO,on:JO,dispatch:tB,[Symbol.iterator]:nB};function Ta(t){return typeof t=="string"?new kn([[document.querySelector(t)]],[document.documentElement]):new kn([[t]],iB)}function oB(t){let e;for(;e=t.sourceEvent;)t=e;return t}function rv(t,e){if(t=oB(t),e===void 0&&(e=t.currentTarget),e){var n=e.ownerSVGElement||e;if(n.createSVGPoint){var i=n.createSVGPoint();return i.x=t.clientX,i.y=t.clientY,i=i.matrixTransform(e.getScreenCTM().inverse()),[i.x,i.y]}if(e.getBoundingClientRect){var r=e.getBoundingClientRect();return[t.clientX-r.left-e.clientLeft,t.clientY-r.top-e.clientTop]}}return[t.pageX,t.pageY]}var sB={value:()=>{}};function ox(){for(var t=0,e=arguments.length,n={},i;t<e;++t){if(!(i=arguments[t]+"")||i in n||/[\s.]/.test(i))throw new Error("illegal type: "+i);n[i]=[]}return new Zl(n)}function Zl(t){this._=t}function aB(t,e){return t.trim().split(/^|\s+/).map(function(n){var i="",r=n.indexOf(".");if(r>=0&&(i=n.slice(r+1),n=n.slice(0,r)),n&&!e.hasOwnProperty(n))throw new Error("unknown type: "+n);return{type:n,name:i}})}Zl.prototype=ox.prototype={constructor:Zl,on:function(t,e){var n=this._,i=aB(t+"",n),r,o=-1,s=i.length;if(arguments.length<2){for(;++o<s;)if((r=(t=i[o]).type)&&(r=lB(n[r],t.name)))return r;return}if(e!=null&&typeof e!="function")throw new Error("invalid callback: "+e);for(;++o<s;)if(r=(t=i[o]).type)n[r]=ov(n[r],t.name,e);else if(e==null)for(r in n)n[r]=ov(n[r],t.name,null);return this},copy:function(){var t={},e=this._;for(var n in e)t[n]=e[n].slice();return new Zl(t)},call:function(t,e){if((r=arguments.length-2)>0)for(var n=new Array(r),i=0,r,o;i<r;++i)n[i]=arguments[i+2];if(!this._.hasOwnProperty(t))throw new Error("unknown type: "+t);for(o=this._[t],i=0,r=o.length;i<r;++i)o[i].value.apply(e,n)},apply:function(t,e,n){if(!this._.hasOwnProperty(t))throw new Error("unknown type: "+t);for(var i=this._[t],r=0,o=i.length;r<o;++r)i[r].value.apply(e,n)}};function lB(t,e){for(var n=0,i=t.length,r;n<i;++n)if((r=t[n]).name===e)return r.value}function ov(t,e,n){for(var i=0,r=t.length;i<r;++i)if(t[i].name===e){t[i]=sB,t=t.slice(0,i).concat(t.slice(i+1));break}return n!=null&&t.push({name:e,value:n}),t}const uB={passive:!1},Aa={capture:!0,passive:!1};function Sd(t){t.stopImmediatePropagation()}function os(t){t.preventDefault(),t.stopImmediatePropagation()}function cB(t){var e=t.document.documentElement,n=Ta(t).on("dragstart.drag",os,Aa);"onselectstart"in e?n.on("selectstart.drag",os,Aa):(e.__noselect=e.style.MozUserSelect,e.style.MozUserSelect="none")}function dB(t,e){var n=t.document.documentElement,i=Ta(t).on("dragstart.drag",null);e&&(i.on("click.drag",os,Aa),setTimeout(function(){i.on("click.drag",null)},0)),"onselectstart"in n?i.on("selectstart.drag",null):(n.style.MozUserSelect=n.__noselect,delete n.__noselect)}const Cl=t=>()=>t;function rh(t,{sourceEvent:e,subject:n,target:i,identifier:r,active:o,x:s,y:a,dx:l,dy:u,dispatch:c}){Object.defineProperties(this,{type:{value:t,enumerable:!0,configurable:!0},sourceEvent:{value:e,enumerable:!0,configurable:!0},subject:{value:n,enumerable:!0,configurable:!0},target:{value:i,enumerable:!0,configurable:!0},identifier:{value:r,enumerable:!0,configurable:!0},active:{value:o,enumerable:!0,configurable:!0},x:{value:s,enumerable:!0,configurable:!0},y:{value:a,enumerable:!0,configurable:!0},dx:{value:l,enumerable:!0,configurable:!0},dy:{value:u,enumerable:!0,configurable:!0},_:{value:c}})}rh.prototype.on=function(){var t=this._.on.apply(this._,arguments);return t===this._?this:t};function fB(t){return!t.ctrlKey&&!t.button}function hB(){return this.parentNode}function pB(t,e){return e??{x:t.x,y:t.y}}function mB(){return navigator.maxTouchPoints||"ontouchstart"in this}function gB(){var t=fB,e=hB,n=pB,i=mB,r={},o=ox("start","drag","end"),s=0,a,l,u,c,d=0;function f(y){y.on("mousedown.drag",h).filter(i).on("touchstart.drag",g).on("touchmove.drag",p,uB).on("touchend.drag touchcancel.drag",b).style("touch-action","none").style("-webkit-tap-highlight-color","rgba(0,0,0,0)")}function h(y,I){if(!(c||!t.call(this,y,I))){var D=M(this,e.call(this,y,I),y,I,"mouse");D&&(Ta(y.view).on("mousemove.drag",m,Aa).on("mouseup.drag",v,Aa),cB(y.view),Sd(y),u=!1,a=y.clientX,l=y.clientY,D("start",y))}}function m(y){if(os(y),!u){var I=y.clientX-a,D=y.clientY-l;u=I*I+D*D>d}r.mouse("drag",y)}function v(y){Ta(y.view).on("mousemove.drag mouseup.drag",null),dB(y.view,u),os(y),r.mouse("end",y)}function g(y,I){if(t.call(this,y,I)){var D=y.changedTouches,B=e.call(this,y,I),_=D.length,x,R;for(x=0;x<_;++x)(R=M(this,B,y,I,D[x].identifier,D[x]))&&(Sd(y),R("start",y,D[x]))}}function p(y){var I=y.changedTouches,D=I.length,B,_;for(B=0;B<D;++B)(_=r[I[B].identifier])&&(os(y),_("drag",y,I[B]))}function b(y){var I=y.changedTouches,D=I.length,B,_;for(c&&clearTimeout(c),c=setTimeout(function(){c=null},500),B=0;B<D;++B)(_=r[I[B].identifier])&&(Sd(y),_("end",y,I[B]))}function M(y,I,D,B,_,x){var R=o.copy(),T=rv(x||D,I),A,X,E;if((E=n.call(y,new rh("beforestart",{sourceEvent:D,target:f,identifier:_,active:s,x:T[0],y:T[1],dx:0,dy:0,dispatch:R}),B))!=null)return A=E.x-T[0]||0,X=E.y-T[1]||0,function k(C,N,U){var H=T,G;switch(C){case"start":r[_]=k,G=s++;break;case"end":delete r[_],--s;case"drag":T=rv(U||N,I),G=s;break}R.call(C,y,new rh(C,{sourceEvent:N,subject:E,target:f,identifier:_,active:G,x:T[0]+A,y:T[1]+X,dx:T[0]-H[0],dy:T[1]-H[1],dispatch:R}),B)}}return f.filter=function(y){return arguments.length?(t=typeof y=="function"?y:Cl(!!y),f):t},f.container=function(y){return arguments.length?(e=typeof y=="function"?y:Cl(y),f):e},f.subject=function(y){return arguments.length?(n=typeof y=="function"?y:Cl(y),f):n},f.touchable=function(y){return arguments.length?(i=typeof y=="function"?y:Cl(!!y),f):i},f.on=function(){var y=o.on.apply(o,arguments);return y===o?f:y},f.clickDistance=function(y){return arguments.length?(d=(y=+y)*y,f):Math.sqrt(d)},f}var To=(t=>(t.Line="line",t.Handle="handle",t))(To||{});function vB({width:t,prevWidth:e,height:n,prevHeight:i,invertX:r,invertY:o}){const s=t-e,a=n-i,l=[s>0?1:s<0?-1:0,a>0?1:a<0?-1:0];return s&&r&&(l[0]=l[0]*-1),a&&o&&(l[1]=l[1]*-1),l}const _B={[To.Line]:"right",[To.Handle]:"bottom-right"},yB={[To.Line]:"borderColor",[To.Handle]:"backgroundColor"},xB={name:"ResizeControl",compatConfig:{MODE:3}},sv=Nt({...xB,props:{nodeId:{},color:{},minWidth:{default:10},minHeight:{default:10},maxWidth:{default:Number.MAX_VALUE},maxHeight:{default:Number.MAX_VALUE},position:{},variant:{default:"handle"},shouldResize:{},keepAspectRatio:{type:[Boolean,Number],default:!1},autoScale:{type:Boolean,default:!0},handleClassName:{},handleStyle:{},lineClassName:{},lineStyle:{},isVisible:{type:Boolean}},emits:["resizeStart","resize","resizeEnd"],setup(t,{emit:e}){const n=t,i={width:0,height:0,x:0,y:0},r={...i,pointerX:0,pointerY:0,aspectRatio:1},{findNode:o,emits:s,viewport:a,noDragClassName:l}=Dt(),u=fy(),c=Ce();let d=r,f=i;const h=bt(()=>n.position??_B[n.variant]),m=Re(()=>h.value.split("-")),v=bt(()=>n.color?{[yB[n.variant]]:n.color}:{}),g=bt(()=>n.variant===To.Handle),p=Re(()=>g.value&&n.autoScale?`${Math.max(1/a.value.zoom,1)}`:void 0);return Hv(b=>{if(!c.value||!n.nodeId)return;const M=Ta(c.value),y=h.value.includes("right")||h.value.includes("left"),I=h.value.includes("bottom")||h.value.includes("top"),D=h.value.includes("left"),B=h.value.includes("top"),_=gB().on("start",x=>{const R=o(n.nodeId),{xSnapped:T,ySnapped:A}=u(x);f={width:R?.dimensions.width??0,height:R?.dimensions.height??0,x:R?.position.x??0,y:R?.position.y??0},d={...f,pointerX:T,pointerY:A,aspectRatio:f.width/f.height},e("resizeStart",{event:x,params:f})}).on("drag",x=>{var R;const{xSnapped:T,ySnapped:A}=u(x),X=o(n.nodeId);if(X){const E=[],{pointerX:k,pointerY:C,width:N,height:U,x:H,y:G,aspectRatio:ne}=d,{x:re,y:ye,width:we,height:te}=f,L=Math.floor(y?T-k:0),j=Math.floor(I?A-C:0);let Q=or(N+(D?-L:L),n.minWidth,n.maxWidth),fe=or(U+(B?-j:j),n.minHeight,n.maxHeight);if(n.keepAspectRatio){const O=Q/fe;let z=ne;typeof n.keepAspectRatio=="number"&&O!==n.keepAspectRatio&&(z=n.keepAspectRatio);const Y=y&&I,S=y&&!I,Z=I&&!y;Q=O<=z&&Y||Z?fe*z:Q,fe=O>z&&Y||S?Q/z:fe,Q>=n.maxWidth?(Q=n.maxWidth,fe=n.maxWidth/z):Q<=n.minWidth&&(Q=n.minWidth,fe=n.minWidth/z),fe>=n.maxHeight?(fe=n.maxHeight,Q=n.maxHeight*z):fe<=n.minHeight&&(fe=n.minHeight,Q=n.minHeight*z)}const Se=Q!==we,Ee=fe!==te;if(D||B){const O=D?H-(Q-N):H,z=B?G-(fe-U):G,Y=O!==re&&Se,S=z!==ye&&Ee;if(Y||S){const Z={id:X.id,type:"position",from:X.position,position:{x:Y?O:re,y:S?z:ye}};E.push(Z),f.x=Z.position.x,f.y=Z.position.y}}if(n.nodeId&&(Se||Ee)){const O={id:n.nodeId,type:"dimensions",updateStyle:!0,resizing:!0,dimensions:{width:Q,height:fe}};E.push(O),f.width=Q,f.height=fe}if(E.length===0)return;const $=vB({width:f.width,prevWidth:we,height:f.height,prevHeight:te,invertX:D,invertY:B}),W={...f,direction:$};if(((R=n.shouldResize)==null?void 0:R.call(n,x,W))===!1)return;e("resize",{event:x,params:W}),s.nodesChange(E)}}).on("end",x=>{if(n.nodeId){const R={id:n.nodeId,type:"dimensions",resizing:!1};e("resizeEnd",{event:x,params:f}),s.nodesChange([R])}});M.call(_),b(()=>{M.on(".drag",null)})}),(b,M)=>(ce(),me("div",{ref_key:"resizeControlRef",ref:c,class:ut(["vue-flow__resize-control",[...m.value,b.variant,he(l)]]),style:rt({...v.value,scale:p.value})},[er(b.$slots,"default")],6))}}),bB={name:"NodeResizer",compatConfig:{MODE:3},inheritAttrs:!1},SB=Nt({...bB,props:{nodeId:{},color:{},handleClassName:{},handleStyle:{},lineClassName:{},lineStyle:{},isVisible:{type:Boolean,default:!0},minWidth:{},minHeight:{},maxWidth:{},maxHeight:{},shouldResize:{},keepAspectRatio:{type:[Boolean,Number]},autoScale:{type:Boolean,default:!0}},emits:["resizeStart","resize","resizeEnd"],setup(t,{emit:e}){const n=t,{findNode:i,emits:r}=Dt(),o=["top-left","top-right","bottom-left","bottom-right"],s=["top","right","bottom","left"],a=Pn(qh,null),l=bt(()=>typeof n.nodeId=="string"?n.nodeId:a),u=Re(()=>i(l.value));return lt([()=>n.minWidth,()=>n.minHeight,()=>n.maxWidth,()=>n.maxHeight,()=>{var c;return!!((c=u.value)!=null&&c.dimensions.width)&&!!u.value.dimensions.height}],([c,d,f,h,m])=>{const v=u.value;if(v&&m){const g={id:v.id,type:"dimensions",updateStyle:!0,dimensions:{width:v.dimensions.width,height:v.dimensions.height}};c&&v.dimensions.width<c&&(g.dimensions.width=c),d&&v.dimensions.height<d&&(g.dimensions.height=d),f&&v.dimensions.width>f&&(g.dimensions.width=f),h&&v.dimensions.height>h&&(g.dimensions.height=h),(g.dimensions.width!==v.dimensions.width||g.dimensions.height!==v.dimensions.height)&&r.nodesChange([g])}},{flush:"post",immediate:!0}),(c,d)=>c.isVisible?(ce(),me(it,{key:0},[(ce(),me(it,null,Ht(s,f=>tt(sv,{key:f,class:ut(c.lineClassName),style:rt(c.lineStyle),"node-id":l.value,position:f,variant:he(To).Line,color:c.color,"min-width":c.minWidth,"min-height":c.minHeight,"max-width":c.maxWidth,"max-height":c.maxHeight,"should-resize":c.shouldResize,"keep-aspect-ratio":c.keepAspectRatio,"auto-scale":c.autoScale,onResizeStart:d[0]||(d[0]=h=>e("resizeStart",h)),onResize:d[1]||(d[1]=h=>e("resize",h)),onResizeEnd:d[2]||(d[2]=h=>e("resizeEnd",h))},null,8,["class","style","node-id","position","variant","color","min-width","min-height","max-width","max-height","should-resize","keep-aspect-ratio","auto-scale"])),64)),(ce(),me(it,null,Ht(o,f=>tt(sv,{key:f,class:ut(c.handleClassName),style:rt(c.handleStyle),"node-id":l.value,position:f,color:c.color,"min-width":c.minWidth,"min-height":c.minHeight,"max-width":c.maxWidth,"max-height":c.maxHeight,"should-resize":c.shouldResize,"keep-aspect-ratio":c.keepAspectRatio,"auto-scale":c.autoScale,onResizeStart:d[3]||(d[3]=h=>e("resizeStart",h)),onResize:d[4]||(d[4]=h=>e("resize",h)),onResizeEnd:d[5]||(d[5]=h=>e("resizeEnd",h))},null,8,["class","style","node-id","position","color","min-width","min-height","max-width","max-height","should-resize","keep-aspect-ratio","auto-scale"])),64))],64)):He("",!0)}});let oh=0;function MB(){return`node_${++oh}_${Date.now().toString(36)}`}const Ao=J1("graph",()=>{const t=Ce([]),e=Ce([]),n=Fr({}),i=Ce(null),r=Ce(!0),o=Ce("anchored"),s=Ce(null),a=Ce("Untitled Project"),l=Ce(0),u=Ce(!0),c=Ce(!1),d=Ce(!1),f=Ce([]);let h=0;const m=Ce({}),v=Ce({}),g=Ce({});let p=null;const b=Fr({}),M=Re(()=>i.value&&t.value.find(S=>S.id===i.value)||null),y=Re(()=>M.value?en(M.value.type):null),I=Re(()=>i.value?n[i.value]||{}:{});function D(S){p=S}function B(S,Z={x:200,y:200}){const J=en(S);if(!J)return console.warn(`Unknown node type: ${S}`),null;const ee=MB(),ie={};for(const[w,K]of Object.entries(J.params))ie[w]=K.default;n[ee]=ie;const P={id:ee,type:S,position:Z,data:{label:J.label,category:J.category,def:J}};return t.value=[...t.value,P],ee}function _(S){p&&p(S),t.value=t.value.filter(Z=>Z.id!==S),e.value=e.value.filter(Z=>Z.source!==S&&Z.target!==S),delete n[S],delete b[S],i.value===S&&(i.value=null),s.value===S&&(s.value=null)}function x(S){const Z=t.value.find(ae=>ae.id===S.source),J=t.value.find(ae=>ae.id===S.target);if(!Z||!J)return!1;const ee=en(Z.type),ie=en(J.type);if(!ee||!ie)return!1;const P=ee.outputs.find(ae=>ae.id===S.sourceHandle);let w=ie.inputs.find(ae=>ae.id===S.targetHandle);if(!w){const ae=b[J.id];if(ae&&ae[S.targetHandle]){const ge=ie.params[S.targetHandle];if(ge){const de=ge.type==="int"?xe.INT:(ge.type==="float",xe.FLOAT);w={id:S.targetHandle,type:de}}}}if(!P||!w)return!1;if(!wC(P.type,w.type))return console.warn(`Type mismatch: ${P.type} → ${w.type}`),!1;e.value=e.value.filter(ae=>!(ae.target===S.target&&ae.targetHandle===S.targetHandle));const K={id:`e_${S.source}_${S.sourceHandle}-${S.target}_${S.targetHandle}`,source:S.source,sourceHandle:S.sourceHandle,target:S.target,targetHandle:S.targetHandle};return e.value=[...e.value,K],!0}function R(S){e.value=e.value.filter(Z=>Z.id!==S)}function T(S,Z,J){n[S]||(n[S]={}),n[S][Z]=J}function A(S,Z){b[S]||(b[S]={}),b[S][Z]=!b[S][Z],b[S][Z]||(e.value=e.value.filter(J=>!(J.target===S&&J.targetHandle===Z)))}function X(S,Z){return!!b[S]?.[Z]}function E(S){const Z=t.value.find(ie=>ie.id===S);if(!Z)return[];const J=en(Z.type);if(!J)return[];const ee=b[S]||{};return Object.entries(ee).filter(([ie,P])=>P).map(([ie])=>{const P=J.params[ie];if(!P)return null;const w=P.type==="int"?xe.INT:(P.type==="float",xe.FLOAT);return{id:ie,label:P.label,type:w}}).filter(Boolean)}function k(S){i.value=S}function C(){r.value=!r.value}function N(){r.value=!1}function U(){r.value=!0}function H(){o.value==="anchored"?o.value="floating":o.value==="floating"?o.value="background":o.value="anchored"}function G(){for(const S of t.value)p&&p(S.id);t.value=[],e.value=[],Object.keys(n).forEach(S=>delete n[S]),Object.keys(b).forEach(S=>delete b[S]),i.value=null,s.value=null,oh=0}function ne(){const S={version:1,title:a.value,timestamp:Date.now(),nodes:t.value.map(Z=>({id:Z.id,type:Z.type,position:Z.position})),edges:e.value.map(Z=>({id:Z.id,source:Z.source,sourceHandle:Z.sourceHandle,target:Z.target,targetHandle:Z.targetHandle})),params:{...n},exposedParams:{...b},settings:{previewMode:o.value}};return JSON.stringify(S,null,2)}function re(S){try{const Z=JSON.parse(S);Z.version!==1&&console.warn("Unknown graph version:",Z.version),G(),a.value=Z.title||"Untitled Project";for(const ee of Z.nodes){const ie=en(ee.type);if(!ie){console.warn(`Skipping unknown node type: ${ee.type}`);continue}const P={id:ee.id,type:ee.type,position:ee.position,data:{label:ie.label,category:ie.category,def:ie}};t.value.push(P);const w={};for(const[K,ae]of Object.entries(ie.params))w[K]=Z.params?.[ee.id]?.[K]??ae.default;n[ee.id]=w}if(Z.exposedParams)for(const[ee,ie]of Object.entries(Z.exposedParams))b[ee]={...ie};for(const ee of Z.edges)e.value.push(ee);return Z.settings&&(o.value="anchored"),oh=Z.nodes.reduce((ee,ie)=>{const P=ie.id.match(/node_(\d+)_/);return P?Math.max(ee,parseInt(P[1])):ee},0),!0}catch(Z){return console.error("Failed to load graph:",Z),!1}}function ye(){const S=ne(),Z=`mangleditor-graph-${a.value||"default"}`;return localStorage.setItem(Z,S),!0}async function we(S=null){try{const Z=S?`mangleditor-graph-${S}`:`mangleditor-graph-${a.value||"default"}`,J=localStorage.getItem(Z);if(J)return re(J);if(!S){console.log("No local save found. Loading StarterTemplate by default...");try{const ee=await fetch("./StarterTemplate.json");if(ee.ok){const ie=await ee.text();return re(ie)}}catch(ee){console.error("Failed to auto-load StarterTemplate:",ee)}}return!1}catch(Z){return console.error("Failed to load from localStorage:",Z),!1}}function te(){const S=ne(),Z=new Blob([S],{type:"application/json"}),J=URL.createObjectURL(Z),ee=document.createElement("a");ee.href=J;const ie=(a.value||"mangleditor").replace(/[^a-zA-Z0-9_-]/g,"_");ee.download=`${ie}.json`,ee.click(),URL.revokeObjectURL(J)}function L(S){const Z=t.value.find(J=>J.id===S);Z&&(Z.type==="button"||Z.type==="bang")&&(Z._triggered=!0)}function j(){c.value=!c.value,c.value||(d.value=!1)}function Q(){d.value=!d.value}function fe(S){const Z=`perf_${++h}_${Date.now().toString(36)}`;return f.value=[...f.value,{id:Z,controlType:S,boundNodeId:null,boundParamKey:null,boundTargetNodeId:null,boundParamKeyY:null,boundTargetNodeIdY:null,nickname:"",gridOrder:f.value.length}],Z}function Se(S){const Z=f.value.find(J=>J.id===S);Z&&["lfo","timer","damper","fft","accelerometer","xypad"].includes(Z.controlType)&&Z.boundNodeId&&_(Z.boundNodeId),f.value=f.value.filter(J=>J.id!==S)}function Ee(S,Z,J){const ee=f.value.find(ie=>ie.id===S);ee&&(ee.boundNodeId=Z,ee.boundParamKey=J)}function $(S,Z,J){const ee=f.value.find(ie=>ie.id===S);ee&&(ee.boundTargetNodeId=Z,ee.boundParamKey=J)}function W(S,Z,J){const ee=f.value.find(ie=>ie.id===S);ee&&(ee.boundTargetNodeIdY=Z,ee.boundParamKeyY=J)}function F(S,Z){const J=f.value.find(ee=>ee.id===S);J&&(J.nickname=Z)}function O(S,Z){const J=[...f.value],[ee]=J.splice(S,1);J.splice(Z,0,ee),f.value=J}function z(){const S=new Set;for(const J of f.value)J.boundNodeId&&J.boundParamKey&&!J.boundTargetNodeId&&S.add(`${J.boundNodeId}::${J.boundParamKey}`),J.boundTargetNodeId&&J.boundParamKey&&S.add(`${J.boundTargetNodeId}::${J.boundParamKey}`),J.boundTargetNodeIdY&&J.boundParamKeyY&&S.add(`${J.boundTargetNodeIdY}::${J.boundParamKeyY}`);const Z=[];for(const[J,ee]of Object.entries(b))for(const[ie,P]of Object.entries(ee))if(P&&!S.has(`${J}::${ie}`)){const w=t.value.find(ge=>ge.id===J),K=w?en(w.type):null,ae=K?.params?.[ie];Z.push({nodeId:J,paramKey:ie,nodeLabel:K?.label||w?.type||J,paramLabel:ae?.label||ie})}return Z}function Y(){const S=["knob","slider","bang","button","toggle"];return t.value.filter(Z=>S.includes(Z.type))}return{nodes:t,edges:e,nodeParams:n,selectedNodeId:i,isRendering:r,previewMode:o,previewNodeId:s,projectTitle:a,exposedParams:b,selectedNode:M,selectedNodeDef:y,selectedNodeParams:I,dataOutputs:m,perfTimings:v,previewImages:g,getDataOutput(S,Z){return m.value[S]?.[Z]},addNode:B,removeNode:_,addEdge:x,removeEdge:R,setParam:T,selectNode:k,toggleRendering:C,stopRendering:N,startRendering:U,togglePreviewMode:H,resetGraph:G,saveGraph:ne,saveToLocalStorage:ye,loadGraph:re,loadFromLocalStorage:we,downloadGraph:te,triggerButton:L,onNodeRemoved:D,toggleExposeParam:A,isParamExposed:X,getExposedHandles:E,isPerformanceMode:c,isPerfEditMode:d,perfGridCells:f,togglePerformanceMode:j,togglePerfEditMode:Q,addPerfCell:fe,removePerfCell:Se,bindPerfCell:Ee,bindPerfCellTarget:$,bindPerfCellTargetY:W,setPerfCellNickname:F,reorderPerfCells:O,getUnboundExposedParams:z,getControlNodes:Y,bgOpacity:l,showShadows:u}}),wB={width:"100%",height:"100%",viewBox:"0 0 100 100"},EB=["d"],TB=["x2","y2"],AB={key:0,class:"knob-value"},CB=270,Rl=-135,RB={__name:"KnobControl",props:{modelValue:{type:Number,default:0},min:{type:Number,default:0},max:{type:Number,default:1},step:{type:Number,default:.01},size:{type:Number,default:60},showValue:{type:Boolean,default:!0}},emits:["update:modelValue"],setup(t,{emit:e}){const n=t,i=e,r=Re(()=>{const I=n.min!==void 0?n.min:0,D=n.max!==void 0?n.max:1;return I===D?0:Math.max(0,Math.min(1,(n.modelValue-I)/(D-I)))}),o=Re(()=>Rl+r.value*CB);function s(I,D,B,_){const x=(_-90)*Math.PI/180;return{x:I+B*Math.cos(x),y:D+B*Math.sin(x)}}const a=Re(()=>{const I=s(50,50,40,Rl),D=s(50,50,40,o.value),B=o.value-Rl<=180?"0":"1";return["M",I.x,I.y,"A",40,40,0,B,1,D.x,D.y].join(" ")}),l=Re(()=>s(50,50,24,o.value).x),u=Re(()=>s(50,50,24,o.value).y);let c=0,d=0;function f(I,D){const B=c-I,_=n.min!==void 0?n.min:0,x=n.max!==void 0?n.max:1;let T=(x-_||1)/150;D&&(T*=.1);let A=d+B*T;A=Math.max(_,Math.min(x,A)),n.step&&(A=Math.round(A/n.step)*n.step);const X=n.step.toString().split(".")[1]?.length||0;A=Number(A.toFixed(X)),i("update:modelValue",A)}function h(I){c=I.clientY,d=n.modelValue,document.addEventListener("mousemove",m),document.addEventListener("mouseup",v)}function m(I){f(I.clientY,I.shiftKey)}function v(){document.removeEventListener("mousemove",m),document.removeEventListener("mouseup",v)}function g(I){c=I.touches[0].clientY,d=n.modelValue,document.addEventListener("touchmove",p,{passive:!1}),document.addEventListener("touchend",b),document.addEventListener("touchcancel",b)}function p(I){I.preventDefault();const D=I.touches[0];f(D.clientY,!1)}function b(){document.removeEventListener("touchmove",p),document.removeEventListener("touchend",b),document.removeEventListener("touchcancel",b)}function M(){const I=n.min!==void 0?n.min:0,B=((n.max!==void 0?n.max:1)+I)/2;i("update:modelValue",B)}const y=Re(()=>Number(n.modelValue).toFixed(Math.min(3,n.step.toString().split(".")[1]?.length||3)));return(I,D)=>(ce(),me("div",{class:"knob-control",onMousedown:Oe(h,["stop","prevent"]),onTouchstart:Oe(g,["stop","prevent"]),onDblclick:Oe(M,["stop"]),style:rt({width:t.size?t.size+"px":"100%",height:t.size?t.size+"px":"100%"})},[(ce(),me("svg",wB,[D[0]||(D[0]=q("path",{class:"knob-track",d:"M 21.716 78.284 A 40 40 0 1 1 78.284 78.284",fill:"none",stroke:"rgba(255, 255, 255, 0.1)","stroke-width":"12","stroke-linecap":"round"},null,-1)),o.value>Rl?(ce(),me("path",{key:0,class:"knob-arc",d:a.value,fill:"none",stroke:"var(--accent-primary, #00d4ff)","stroke-width":"12","stroke-linecap":"round"},null,8,EB)):He("",!0),D[1]||(D[1]=q("circle",{cx:"50",cy:"50",r:"26",fill:"var(--bg-light, #333)",stroke:"var(--border-color, #444)","stroke-width":"2"},null,-1)),q("line",{x1:50,y1:50,x2:l.value,y2:u.value,stroke:"var(--text-color, #fff)","stroke-width":"4","stroke-linecap":"round"},null,8,TB)])),t.showValue?(ce(),me("div",AB,Te(y.value),1)):He("",!0)],36))}},sx=ur(RB,[["__scopeId","data-v-06e9e2ee"]]),IB=["title"],PB={key:0,class:"flow-node__collapsed-badge flow-node__collapsed-badge--in"},NB={class:"flow-node__title"},DB={key:1,class:"flow-node__collapsed-badge flow-node__collapsed-badge--out"},LB=["title"],FB=["title"],UB=["title"],OB=["title"],BB={class:"flow-node__body"},kB={class:"flow-node__handles"},zB={class:"flow-node__handle-label"},VB={class:"flow-node__handle-type"},$B=["title"],HB={class:"flow-node__handle-label flow-node__handle-label--exposed"},GB={class:"flow-node__handle-type"},WB={key:1,class:"flow-node__image-preview-container"},XB=["src"],YB={key:1,class:"flow-node__slot-label",style:{"text-align":"center",color:"var(--accent-success)",padding:"8px 0","font-size":"11px"}},qB={key:1,class:"flow-node__image-preview-container"},KB=["min","max","step","value"],ZB={class:"flow-node__slider-value"},jB={class:"flow-node__inline-param-row"},JB=["value"],QB=["value"],ek={class:"flow-node__inline-param-row"},tk=["value"],nk={class:"flow-node__inline-param-val"},ik={class:"flow-node__inline-param-row"},rk=["value"],ok={class:"flow-node__inline-param-val"},sk={class:"flow-node__xypad-readout"},ak={class:"flow-node__inline-param-val"},lk={class:"flow-node__inline-param-val"},uk={key:9,class:"flow-node__monitor"},ck=["title"],dk={key:10,class:"flow-node__preview-inline"},fk={class:"flow-node__handles"},hk={class:"flow-node__handle-type"},pk={class:"flow-node__handle-label"},mk=["title"],av=100,Md=60,gk={__name:"FlowNode",props:{nodeId:{type:String,required:!0},nodeType:{type:String,required:!0},def:{type:Object,required:!0},params:{type:Object,default:()=>({})},selected:{type:Boolean,default:!1},inputValues:{type:Object,default:()=>({})},outputValues:{type:Object,default:()=>({})},monitorValue:{type:Number,default:null},exposedHandles:{type:Array,default:()=>[]},perfMs:{type:Number,default:null}},emits:["select","imageLoaded","export","trigger","paramChange"],setup(t,{emit:e}){const n=t,i=e,r=Ao(),o=Re(()=>{const te=r.edges.filter(L=>L.target===n.nodeId);return[...new Set(te.map(L=>L.targetHandle))]}),s=Re(()=>{const te=r.edges.filter(L=>L.source===n.nodeId);return[...new Set(te.map(L=>L.sourceHandle))]}),a=Re(()=>{if(!n.params._collapsed)return"";let te=`INPUTS
`;if(o.value.length===0)te+=`  (none)
`;else for(const L of o.value){const j=n.def.inputs.find(Se=>Se.id===L),Q=j?j.label:L,fe=n.inputValues[L];te+=`• ${Q}: ${fe!==void 0?re(fe):"—"}
`}if(te+=`
OUTPUTS
`,s.value.length===0)te+=`  (none)
`;else for(const L of s.value){const j=n.def.outputs.find(Se=>Se.id===L),Q=j?j.label:L,fe=n.outputValues[L];te+=`• ${Q}: ${fe!==void 0?re(fe):"—"}
`}return te}),l=Re(()=>fu[n.def.category]?.color||"#888"),u=Re(()=>n.def.params?Object.values(n.def.params).some(te=>te.type==="float"||te.type==="int"):!1);function c(){if(n.def.params){for(const[te,L]of Object.entries(n.def.params))if(L.type==="float"||L.type==="int"){const j=te==="value"&&n.params.min!==void 0?n.params.min:L.min!==void 0?L.min:0,Q=te==="value"&&n.params.max!==void 0?n.params.max:L.max!==void 0?L.max:1,fe=n.params[`_randMin_${te}`]??j,Se=n.params[`_randMax_${te}`]??Q;let Ee=fe+Math.random()*(Se-fe);L.type==="int"?Ee=Math.floor(Ee):L.step&&(Ee=Math.round(Ee/L.step)*L.step),i("paramChange",te,Ee)}}}const d=Ce(null),f=Ce(!1),h=Ce(null),m=Re(()=>!!h.value);bn(()=>{if((n.nodeType==="imageInput"||n.nodeType==="uiImageSlot")&&!h.value){const te="/default_img.jpg";h.value=te;const L=new Image;L.crossOrigin="anonymous",L.src=te,L.onload=()=>{i("imageLoaded",{url:te,width:L.naturalWidth,height:L.naturalHeight,img:L})}}});const v=Ce(null),g=Ce([]),p=Ce(null);lt(()=>r.previewImages[n.nodeId],te=>{if(n.nodeType!=="preview"||!te||!p.value)return;const L=p.value,j=L.getContext("2d");(L.width!==te.width||L.height!==te.height)&&(L.width=te.width,L.height=te.height);const Q=document.createElement("canvas");Q.width=te.width,Q.height=te.height;const fe=Q.getContext("2d"),Se=new ImageData(new Uint8ClampedArray(te.pixels.buffer),te.width,te.height);fe.putImageData(Se,0,0),j.save(),j.scale(1,-1),j.drawImage(Q,0,-te.height),j.restore()});const b=Ce(!1),M=Ce(null);let y=null;async function I(){try{y=await navigator.mediaDevices.getUserMedia({video:{width:1280,height:720},audio:!1}),b.value=!0,setTimeout(()=>{M.value&&(M.value.srcObject=y,M.value.onloadedmetadata=()=>{M.value.play(),i("imageLoaded",{url:"webcam",width:M.value.videoWidth,height:M.value.videoHeight,img:M.value,isVideo:!0})})},50)}catch(te){console.error("Failed to access webcam:",te),alert("Could not access webcam. Please check permissions.")}}function D(){y&&(y.getTracks().forEach(te=>te.stop()),y=null),b.value=!1,i("imageLoaded",{url:"webcam",width:1,height:1,img:null,isVideo:!1})}const B=Ce(null),_=Re(()=>({left:(n.params.x??.5)*100+"%",top:(1-(n.params.y??.5))*100+"%"}));let x=!1;function R(te){x=!0,X(te),window.addEventListener("pointermove",T),window.addEventListener("pointerup",A)}function T(te){x&&X(te)}function A(){x=!1,window.removeEventListener("pointermove",T),window.removeEventListener("pointerup",A)}function X(te){const L=B.value;if(!L)return;const j=L.getBoundingClientRect(),Q=Math.max(0,Math.min(1,(te.clientX-j.left)/j.width)),fe=Math.max(0,Math.min(1,1-(te.clientY-j.top)/j.height));i("paramChange","x",Q),i("paramChange","y",fe)}const E=Ce(null),k=[];let C=null;n.nodeType==="lfo"&&bn(()=>{C=setInterval(()=>{const te=n.outputValues?.out??0;k.push(te),k.length>Md&&k.shift(),N()},50)});function N(){const te=E.value;if(!te||k.length<2)return;const L=te.getContext("2d"),j=te.width,Q=te.height;L.clearRect(0,0,j,Q);let fe=1/0,Se=-1/0;for(const $ of k)$<fe&&(fe=$),$>Se&&(Se=$);Se===fe&&(fe-=.5,Se+=.5);const Ee=Se-fe;L.strokeStyle="#00d4ff",L.lineWidth=1.5,L.lineJoin="round",L.beginPath();for(let $=0;$<k.length;$++){const W=$/(Md-1)*j,F=Q-(k[$]-fe)/Ee*Q;$===0?L.moveTo(W,F):L.lineTo(W,F)}L.stroke(),L.lineTo((k.length-1)/(Md-1)*j,Q),L.lineTo(0,Q),L.closePath(),L.fillStyle="rgba(0, 212, 255, 0.08)",L.fill()}Hr(()=>{D(),clearInterval(C)});function U(){d.value?.click()}function H(te){const L=te.target.files?.[0];L&&ne(L)}function G(te){f.value=!1;const L=te.dataTransfer.files?.[0];L&&L.type.startsWith("image/")&&ne(L)}function ne(te){const L=URL.createObjectURL(te);h.value=L;const j=new Image;j.onload=()=>{i("imageLoaded",{url:L,width:j.naturalWidth,height:j.naturalHeight,img:j})},j.src=L}function re(te){return te==null?"":typeof te=="number"?te.toFixed(2):String(te)}lt(()=>n.monitorValue,te=>{te!=null&&(g.value.push(te),g.value.length>av&&g.value.shift(),ye())});function ye(){const te=v.value;if(!te)return;const L=te.getContext("2d"),j=te.width,Q=te.height,fe=g.value;if(L.clearRect(0,0,j,Q),fe.length<2)return;const Se=Math.min(...fe),Ee=Math.max(...fe),$=Ee-Se||1;L.strokeStyle="#00d4ff",L.lineWidth=1.5,L.beginPath();for(let W=0;W<fe.length;W++){const F=W/(av-1)*j,O=Q-(fe[W]-Se)/$*(Q-4)-2;W===0?L.moveTo(F,O):L.lineTo(F,O)}if(L.stroke(),Se<=0&&Ee>=0){const W=Q-(0-Se)/$*(Q-4)-2;L.strokeStyle="#ffffff30",L.lineWidth=.5,L.beginPath(),L.moveTo(0,W),L.lineTo(j,W),L.stroke()}}const we=Re(()=>{if(n.nodeType!=="webcamInput")return!1;const te=n.params?.enable===!0,L=r.dataOutputs[n.nodeId]?.trigger??0;return te||L>.5});return lt(we,te=>{te&&!b.value?I():!te&&b.value&&D()},{immediate:!0}),(te,L)=>(ce(),me("div",{class:ut(["flow-node",{"flow-node--selected":t.selected},{"flow-node--compact":t.def.compact},{"flow-node--bypassed":t.params._bypass},{"flow-node--collapsed":t.params._collapsed},{"flow-node--resizable":!t.params._collapsed&&["preview","knob","imageInput","webcamInput"].includes(t.nodeType)&&t.params._resizable}]),onClick:L[40]||(L[40]=j=>te.$emit("select")),onDblclick:L[41]||(L[41]=Oe(j=>te.$emit("paramChange","_collapsed",!t.params._collapsed),["stop"]))},[["preview","knob","imageInput","webcamInput"].includes(t.nodeType)&&t.params._resizable?(ce(),Jt(he(SB),{key:0,"min-width":60,"min-height":60,"max-width":540,"max-height":540,"keep-aspect-ratio":!0,"is-visible":t.selected,class:"nodrag"},null,8,["is-visible"])):He("",!0),q("div",{class:"flow-node__header",title:a.value},[t.params._collapsed&&o.value.length>0?(ce(),me("span",PB," ["+Te(o.value.length)+"] ",1)):He("",!0),q("div",{class:"flow-node__category-dot",style:rt({background:l.value})},null,4),q("div",NB,Te(t.def.label),1),t.params._collapsed&&s.value.length>0?(ce(),me("span",DB," ["+Te(s.value.length)+"] ",1)):He("",!0),u.value?(ce(),me("button",{key:2,class:"flow-node__bypass-btn",style:{"margin-right":"4px"},onClick:Oe(c,["stop"]),title:"Randomize Parameters"}," 🎲 ")):He("",!0),q("button",{class:ut(["flow-node__bypass-btn",{"flow-node__bypass-btn--active":t.params._collapsed}]),style:{"margin-right":"4px"},onClick:L[0]||(L[0]=Oe(j=>te.$emit("paramChange","_collapsed",!t.params._collapsed),["stop"])),title:t.params._collapsed?"Expand Node":"Collapse Node"},Te(t.params._collapsed?"▼":"▬"),11,LB),!t.params._collapsed&&["preview","knob","imageInput","webcamInput"].includes(t.nodeType)?(ce(),me("button",{key:3,class:ut(["flow-node__bypass-btn",{"flow-node__bypass-btn--active":t.params._resizable}]),style:{"margin-right":"4px"},onClick:L[1]||(L[1]=Oe(j=>te.$emit("paramChange","_resizable",!t.params._resizable),["stop"])),title:t.params._resizable?"Disable Resizing":"Enable Resizing"}," ⤢ ",10,FB)):He("",!0),t.def.shaderKey||t.def.category==="image"||t.def.category==="uv"?(ce(),me("button",{key:4,class:ut(["flow-node__bypass-btn",{"flow-node__bypass-btn--active":t.params._bypass}]),onClick:L[2]||(L[2]=Oe(j=>te.$emit("paramChange","_bypass",!t.params._bypass),["stop"])),title:t.params._bypass?"Enable (bypassed)":"Bypass"},Te(t.params._bypass?"⊘":"⏵"),11,UB)):He("",!0),t.perfMs!==null?(ce(),me("span",{key:5,class:"flow-node__perf-badge",title:t.perfMs+"ms"},Te(t.perfMs<1?"<1":t.perfMs.toFixed(1))+"ms ",9,OB)):He("",!0)],8,IB),q("div",BB,[q("div",kB,[(ce(!0),me(it,null,Ht(t.def.inputs,j=>(ce(),me("div",{key:"in-"+j.id,class:"flow-node__handle-row flow-node__handle-row--input"},[tt(he(xo),{type:"target",id:j.id,position:he(Xe).Left,style:rt({background:he(ad)(j.type)})},null,8,["id","position","style"]),q("span",zB,Te(j.label),1),q("span",VB,Te(j.type),1),t.inputValues[j.id]!==void 0?(ce(),me("span",{key:0,class:"flow-node__handle-value",title:"Value: "+t.inputValues[j.id]},Te(re(t.inputValues[j.id])),9,$B)):He("",!0)]))),128)),(ce(!0),me(it,null,Ht(t.exposedHandles,j=>(ce(),me("div",{key:"exp-"+j.id,class:"flow-node__handle-row flow-node__handle-row--input flow-node__handle-row--exposed"},[tt(he(xo),{type:"target",id:j.id,position:he(Xe).Left,style:rt({background:he(ad)(j.type)})},null,8,["id","position","style"]),q("span",HB,"⊕ "+Te(j.label),1),q("span",GB,Te(j.type),1)]))),128))]),t.params._collapsed?He("",!0):(ce(),me(it,{key:0},[t.nodeType==="imageInput"||t.nodeType==="uiImageSlot"?(ce(),me("div",{key:0,class:"flow-node__controls",onPointerdown:L[5]||(L[5]=Oe(()=>{},["stop"])),onMousedown:L[6]||(L[6]=Oe(()=>{},["stop"]))},[q("input",{ref_key:"fileInput",ref:d,type:"file",accept:"image/*",class:"file-input-hidden",onChange:H},null,544),m.value?(ce(),me("div",WB,[q("button",{class:"flow-node__inline-btn flow-node__inline-btn--sm",onClick:Oe(U,["stop"]),style:{"margin-bottom":"4px",width:"100%"}}," 📷 Replace Image "),t.nodeType==="imageInput"?(ce(),me("img",{key:0,src:h.value,class:"flow-node__image-preview"},null,8,XB)):(ce(),me("div",YB," Image Loaded ✓ "))])):(ce(),me("div",{key:0,class:ut(["flow-node__drop-zone",{"flow-node__drop-zone--active":f.value}]),onClick:Oe(U,["stop"]),onDragover:L[3]||(L[3]=Oe(j=>f.value=!0,["prevent"])),onDragleave:L[4]||(L[4]=j=>f.value=!1),onDrop:Oe(G,["prevent"])}," 📷 Drop image or click to browse ",34))],32)):He("",!0),t.nodeType==="webcamInput"?(ce(),me("div",{key:1,class:"flow-node__controls",onPointerdown:L[9]||(L[9]=Oe(()=>{},["stop"])),onMousedown:L[10]||(L[10]=Oe(()=>{},["stop"]))},[b.value?(ce(),me("div",qB,[q("button",{class:"flow-node__inline-btn flow-node__inline-btn--sm",onClick:L[8]||(L[8]=Oe(j=>te.$emit("paramChange","enable",!1),["stop"])),style:{"margin-bottom":"4px",width:"100%",background:"var(--bg-red-dim)","border-color":"var(--accent-danger)"}}," Stop Webcam "),q("video",{ref_key:"webcamVideo",ref:M,class:"flow-node__image-preview",autoplay:"",playsinline:"",muted:""},null,512)])):(ce(),me("button",{key:0,class:"flow-node__inline-btn flow-node__inline-btn--sm",onClick:L[7]||(L[7]=Oe(j=>te.$emit("paramChange","enable",!0),["stop"])),style:{width:"100%"}}," 🎥 Start Webcam "))],32)):He("",!0),t.nodeType==="imageOutput"?(ce(),me("div",{key:2,class:"flow-node__controls",onPointerdown:L[12]||(L[12]=Oe(()=>{},["stop"])),onMousedown:L[13]||(L[13]=Oe(()=>{},["stop"]))},[q("button",{class:"flow-node__inline-btn",onClick:L[11]||(L[11]=Oe(j=>te.$emit("export"),["stop"]))}," ⬇ Export "+Te(t.params.format||"PNG"),1)],32)):He("",!0),t.nodeType==="button"||t.nodeType==="bang"?(ce(),me("div",{key:3,class:"flow-node__controls",onPointerdown:L[15]||(L[15]=Oe(()=>{},["stop"])),onMousedown:L[16]||(L[16]=Oe(()=>{},["stop"]))},[q("button",{class:"flow-node__inline-btn",onClick:L[14]||(L[14]=Oe(j=>te.$emit("trigger"),["stop"]))},Te(t.params.label||"Bang!"),1)],32)):He("",!0),t.nodeType==="slider"?(ce(),me("div",{key:4,class:"flow-node__slider-container",onPointerdown:L[20]||(L[20]=Oe(()=>{},["stop"])),onMousedown:L[21]||(L[21]=Oe(()=>{},["stop"]))},[q("input",{type:"range",class:"flow-node__inline-slider",min:t.params.min??0,max:t.params.max??1,step:t.params.step??.01,value:t.params.value??.5,onInput:L[17]||(L[17]=Oe(j=>te.$emit("paramChange","value",Number(j.target.value)),["stop"])),onPointerdown:L[18]||(L[18]=Oe(()=>{},["stop"])),onMousedown:L[19]||(L[19]=Oe(()=>{},["stop"]))},null,40,KB),q("div",ZB,Te((t.params.value??.5).toFixed(3)),1)],32)):He("",!0),t.nodeType==="knob"?(ce(),me("div",{key:5,class:"flow-node__knob-container",onPointerdown:L[23]||(L[23]=Oe(()=>{},["stop"])),onMousedown:L[24]||(L[24]=Oe(()=>{},["stop"]))},[tt(sx,{modelValue:t.params.value??(t.def.params.value?t.def.params.value.default:.5),min:t.params.min??(t.def.params.min?t.def.params.min.default:0),max:t.params.max??(t.def.params.max?t.def.params.max.default:1),step:t.params.step??(t.def.params.step?t.def.params.step.default:.01),size:null,"onUpdate:modelValue":L[22]||(L[22]=j=>te.$emit("paramChange","value",j))},null,8,["modelValue","min","max","step"])],32)):He("",!0),t.nodeType==="lfo"?(ce(),me("div",{key:6,class:"flow-node__inline-params",onPointerdown:L[34]||(L[34]=Oe(()=>{},["stop"])),onMousedown:L[35]||(L[35]=Oe(()=>{},["stop"]))},[q("canvas",{ref_key:"lfoCanvasRef",ref:E,class:"flow-node__lfo-graph",width:"176",height:"40"},null,512),q("div",jB,[L[42]||(L[42]=q("span",{class:"flow-node__inline-param-label"},"wave",-1)),q("select",{class:"flow-node__inline-select",value:t.params.waveform??"sine",onChange:L[25]||(L[25]=Oe(j=>te.$emit("paramChange","waveform",j.target.value),["stop"])),onPointerdown:L[26]||(L[26]=Oe(()=>{},["stop"])),onMousedown:L[27]||(L[27]=Oe(()=>{},["stop"]))},[(ce(),me(it,null,Ht(["sine","saw","square","triangle"],j=>q("option",{key:j,value:j},Te(j),9,QB)),64))],40,JB)]),q("div",ek,[L[43]||(L[43]=q("span",{class:"flow-node__inline-param-label"},"freq",-1)),q("input",{type:"range",class:"flow-node__inline-slider-sm",min:"0.01",max:"20",step:"0.01",value:t.params.frequency??1,onInput:L[28]||(L[28]=Oe(j=>te.$emit("paramChange","frequency",Number(j.target.value)),["stop"])),onPointerdown:L[29]||(L[29]=Oe(()=>{},["stop"])),onMousedown:L[30]||(L[30]=Oe(()=>{},["stop"]))},null,40,tk),q("span",nk,Te((t.params.frequency??1).toFixed(2)),1)]),q("div",ik,[L[44]||(L[44]=q("span",{class:"flow-node__inline-param-label"},"amp",-1)),q("input",{type:"range",class:"flow-node__inline-slider-sm",min:"0",max:"10",step:"0.01",value:t.params.amplitude??1,onInput:L[31]||(L[31]=Oe(j=>te.$emit("paramChange","amplitude",Number(j.target.value)),["stop"])),onPointerdown:L[32]||(L[32]=Oe(()=>{},["stop"])),onMousedown:L[33]||(L[33]=Oe(()=>{},["stop"]))},null,40,rk),q("span",ok,Te((t.params.amplitude??1).toFixed(2)),1)])],32)):He("",!0),t.nodeType==="xyPad"?(ce(),me("div",{key:7,class:"flow-node__xypad-wrapper",onPointerdown:L[36]||(L[36]=Oe(()=>{},["stop"])),onMousedown:L[37]||(L[37]=Oe(()=>{},["stop"]))},[q("div",{class:"flow-node__xypad",ref_key:"xyPadNodeRef",ref:B,onPointerdown:R},[q("div",{class:"flow-node__xypad-crosshair",style:rt(_.value)},null,4)],544),q("div",sk,[q("span",ak,"X: "+Te((t.params.x??.5).toFixed(2)),1),q("span",lk,"Y: "+Te((t.params.y??.5).toFixed(2)),1)])],32)):He("",!0),t.nodeType==="fft"?(ce(),me("div",{key:8,class:"flow-node__fft-container",onPointerdown:L[38]||(L[38]=Oe(()=>{},["stop"])),onMousedown:L[39]||(L[39]=Oe(()=>{},["stop"]))},[q("div",{class:"flow-node__fft-bar flow-node__fft-bar--bass",style:rt({height:Math.max(2,(t.outputValues.bass||0)*40)+"px"})},null,4),q("div",{class:"flow-node__fft-bar flow-node__fft-bar--low-mid",style:rt({height:Math.max(2,(t.outputValues.lowMid||0)*40)+"px"})},null,4),q("div",{class:"flow-node__fft-bar flow-node__fft-bar--mid",style:rt({height:Math.max(2,(t.outputValues.mid||0)*40)+"px"})},null,4),q("div",{class:"flow-node__fft-bar flow-node__fft-bar--high",style:rt({height:Math.max(2,(t.outputValues.high||0)*40)+"px"})},null,4)],32)):He("",!0),t.nodeType==="numberMonitor"?(ce(),me("div",uk,[q("div",{class:"flow-node__monitor-value",title:"Value: "+(t.monitorValue??0)},Te(t.monitorValue!==null&&t.monitorValue!==void 0?t.monitorValue.toFixed(t.params.decimals??3):"—"),9,ck),t.params.showGraph!==!1?(ce(),me("canvas",{key:0,ref_key:"monitorCanvas",ref:v,class:"flow-node__monitor-graph",width:"176",height:"40"},null,512)):He("",!0)])):He("",!0),t.nodeType==="preview"?(ce(),me("div",dk,[q("canvas",{ref_key:"previewCanvas",ref:p,class:"flow-node__preview-canvas",width:"176",height:"100"},null,512),L[45]||(L[45]=q("div",{class:"flow-node__preview-label"},"Preview Node",-1))])):He("",!0)],64)),q("div",fk,[(ce(!0),me(it,null,Ht(t.def.outputs,j=>(ce(),me("div",{key:"out-"+j.id,class:"flow-node__handle-row flow-node__handle-row--output"},[q("span",hk,Te(j.type),1),q("span",pk,Te(j.label),1),t.outputValues[j.id]!==void 0?(ce(),me("span",{key:0,class:"flow-node__handle-value",title:"Value: "+t.outputValues[j.id]},Te(re(t.outputValues[j.id])),9,mk)):He("",!0),tt(he(xo),{type:"source",id:j.id,position:he(Xe).Right,style:rt({background:he(ad)(j.type)})},null,8,["id","position","style"])]))),128))])])],34))}},xr=ur(gk,[["__scopeId","data-v-3ed60a2c"]]),vk={class:"editor-controls"},_k={__name:"EditorCanvas",emits:["imageLoaded","exportImage"],setup(t,{expose:e,emit:n}){const i=Ao(),{viewport:r,dimensions:o,project:s,zoomIn:a,zoomOut:l,setViewport:u,fitView:c}=Dt();function d(){const{x:_,y:x}=r.value;u({x:_,y:x,zoom:1},{duration:600})}function f(){c({padding:.1,duration:600})}function h(_){["INPUT","TEXTAREA"].includes(_.target.tagName)||(_.key==="f"||_.key==="F")&&(i.selectedNodeId?c({nodes:[i.selectedNodeId],padding:.2,duration:600}):c({padding:.1,duration:600}))}bn(()=>{window.addEventListener("keydown",h)}),Hu(()=>{window.removeEventListener("keydown",h)});function m(_){const{x,y:R,zoom:T}=r.value,{width:A,height:X}=o.value,E=A||800,k=X||600,C=(E/2-x)/T,N=(k/2-R)/T;i.addNode(_,{x:C+(Math.random()-.5)*60,y:N+(Math.random()-.5)*60})}e({addNodeAtCenter:m});const v=["imageInput","uiImageSlot","webcamInput","imageOutput","button","slider"],g=Re(()=>Object.keys(EC()).filter(_=>!v.includes(_)));function p(_){for(const x of _)if(x.type==="position"&&x.position){const R=i.nodes.find(T=>T.id===x.id);R&&(R.position=x.position)}else x.type==="remove"&&i.removeNode(x.id)}function b(_){for(const x of _)x.type==="remove"&&i.removeEdge(x.id)}function M(_){i.addEdge(_)}function y({node:_}){i.selectNode(_.id)}function I(){i.selectNode(null)}function D({edge:_}){}function B(_){const x=_.dataTransfer.getData("application/node-type");if(!x)return;const R=_.currentTarget.getBoundingClientRect(),{x:T,y:A,zoom:X}=r.value,E=(_.clientX-R.left-T)/X,k=(_.clientY-R.top-A)/X;i.addNode(x,{x:E,y:k})}return(_,x)=>(ce(),me("div",{class:"editor-canvas",onDrop:Oe(B,["prevent"]),onDragover:x[2]||(x[2]=Oe(()=>{},["prevent"]))},[tt(he(BN),{nodes:he(i).nodes,edges:he(i).edges,"default-viewport":{zoom:1,x:0,y:0},"min-zoom":.2,"max-zoom":3,"fit-view-on-init":"",onNodesChange:p,onEdgesChange:b,onConnect:M,onNodeClick:y,onPaneClick:I,onEdgeClick:D},Tb({"node-imageInput":cn(R=>[tt(xr,{"node-id":R.id,"node-type":R.type,def:R.data.def,params:he(i).nodeParams[R.id]||{},selected:he(i).selectedNodeId===R.id,onSelect:T=>he(i).selectNode(R.id),onImageLoaded:T=>_.$emit("imageLoaded",R.id,T)},null,8,["node-id","node-type","def","params","selected","onSelect","onImageLoaded"])]),"node-uiImageSlot":cn(R=>[tt(xr,{"node-id":R.id,"node-type":R.type,def:R.data.def,params:he(i).nodeParams[R.id]||{},selected:he(i).selectedNodeId===R.id,onSelect:T=>he(i).selectNode(R.id),onImageLoaded:T=>_.$emit("imageLoaded",R.id,T)},null,8,["node-id","node-type","def","params","selected","onSelect","onImageLoaded"])]),"node-webcamInput":cn(R=>[tt(xr,{"node-id":R.id,"node-type":R.type,def:R.data.def,params:he(i).nodeParams[R.id]||{},selected:he(i).selectedNodeId===R.id,onSelect:T=>he(i).selectNode(R.id),onImageLoaded:T=>_.$emit("imageLoaded",R.id,T),onParamChange:(T,A)=>he(i).setParam(R.id,T,A)},null,8,["node-id","node-type","def","params","selected","onSelect","onImageLoaded","onParamChange"])]),"node-imageOutput":cn(R=>[tt(xr,{"node-type":R.type,def:R.data.def,params:he(i).nodeParams[R.id]||{},selected:he(i).selectedNodeId===R.id,onSelect:T=>he(i).selectNode(R.id),onExport:T=>_.$emit("exportImage",R.id)},null,8,["node-type","def","params","selected","onSelect","onExport"])]),"node-button":cn(R=>[tt(xr,{"node-type":R.type,def:R.data.def,params:he(i).nodeParams[R.id]||{},selected:he(i).selectedNodeId===R.id,onSelect:T=>he(i).selectNode(R.id),onTrigger:T=>he(i).triggerButton(R.id)},null,8,["node-type","def","params","selected","onSelect","onTrigger"])]),"node-bang":cn(R=>[tt(xr,{"node-id":R.id,"node-type":R.type,def:R.data.def,params:he(i).nodeParams[R.id]||{},selected:he(i).selectedNodeId===R.id,onSelect:T=>he(i).selectNode(R.id),onTrigger:T=>he(i).triggerButton(R.id),onParamChange:(T,A)=>he(i).setParam(R.id,T,A)},null,8,["node-id","node-type","def","params","selected","onSelect","onTrigger","onParamChange"])]),"node-slider":cn(R=>[tt(xr,{"node-type":R.type,def:R.data.def,params:he(i).nodeParams[R.id]||{},selected:he(i).selectedNodeId===R.id,onSelect:T=>he(i).selectNode(R.id),onParamChange:(T,A)=>he(i).setParam(R.id,T,A)},null,8,["node-type","def","params","selected","onSelect","onParamChange"])]),default:cn(()=>[q("div",vk,[q("button",{onClick:x[0]||(x[0]=R=>he(a)({duration:300})),title:"Zoom In (+)"},"+"),q("button",{onClick:x[1]||(x[1]=R=>he(l)({duration:300})),title:"Zoom Out (-)"},"−"),q("button",{onClick:d,title:"Zoom to 100% (1:1)"},"1:1"),q("button",{onClick:f,title:"Fit View to All"},"[ ]")]),tt(he(SU),{pannable:"",zoomable:"",position:"bottom-right"})]),_:2},[Ht(g.value,R=>({name:`node-${R}`,fn:cn(T=>[tt(xr,{"node-id":T.id,"node-type":T.type,def:T.data.def,params:he(i).nodeParams[T.id]||{},selected:he(i).selectedNodeId===T.id,"exposed-handles":he(i).getExposedHandles(T.id),"monitor-value":T.type==="numberMonitor"?he(i).getDataOutput(T.id,"out"):null,"perf-ms":he(i).perfTimings[T.id]??null,onSelect:A=>he(i).selectNode(T.id),onParamChange:(A,X)=>he(i).setParam(T.id,A,X)},null,8,["node-id","node-type","def","params","selected","exposed-handles","monitor-value","perf-ms","onSelect","onParamChange"])])}))]),1032,["nodes","edges"])],32))}},yk=ur(_k,[["__scopeId","data-v-84e59669"]]),xk={class:"preview-panel__toolbar"},bk={class:"preview-panel__badge"},Sk={key:0,class:"preview-panel__badge",style:{color:"var(--accent-primary)"}},Mk={key:1,class:"preview-panel__badge",style:{color:"var(--accent-danger)"}},wk={class:"preview-panel__zoom-level"},Ek={key:2,class:"preview-panel__histogram"},Tk={class:"preview-panel__info-row"},Ak={key:0},Ck={__name:"PreviewPanel",props:{hidden:{type:Boolean,default:!1},isRendering:{type:Boolean,default:!0},pipeline:{type:Object,default:null},fps:{type:Number,default:0},previewMode:{type:String,default:"anchored"}},setup(t,{expose:e}){const n=Ce(400),i=Ce(40),r=Ce(!1),o=Ce({x:0,y:0});function s(N){N.button===0&&(r.value=!0,o.value={x:N.clientX-n.value,y:N.clientY-i.value},window.addEventListener("pointermove",a),window.addEventListener("pointerup",l))}function a(N){r.value&&(n.value=N.clientX-o.value.x,i.value=N.clientY-o.value.y)}function l(){r.value=!1,window.removeEventListener("pointermove",a),window.removeEventListener("pointerup",l)}const u=Ce(300),c=Ce(!1);function d(N){if(N.button!==0)return;c.value=!0;const U=N.clientY,H=u.value;function G(re){if(!c.value)return;const ye=U-re.clientY;u.value=Math.max(100,Math.min(window.innerHeight*.8,H+ye))}function ne(){c.value=!1,window.removeEventListener("pointermove",G),window.removeEventListener("pointerup",ne)}window.addEventListener("pointermove",G),window.addEventListener("pointerup",ne)}const f=Ce(null),h=Ce(null),m=Ce(null),v=Ce(512),g=Ce(512),p=Ce(1),b=Ce(0),M=Ce(0),y=Ce(!1),I=Ce({x:0,y:0}),D=Ce(!1);let B=null;function _(){return f.value}e({canvasRef:f,width:v,height:g,getCanvas:_}),lt(D,N=>{N?(k(),B=setInterval(k,500)):(B&&clearInterval(B),B=null)}),Hr(()=>{B&&clearInterval(B)});function x(){p.value=1,b.value=0,M.value=0}function R(){if(!m.value)return;const N=m.value.clientWidth,U=m.value.clientHeight,H=N/v.value,G=U/g.value;p.value=Math.min(H,G,1)*.95,b.value=(N-v.value*p.value)/2,M.value=(U-g.value*p.value)/2}function T(N){const U=N.deltaY>0?.9:1.1,H=Math.max(.1,Math.min(10,p.value*U)),G=m.value.getBoundingClientRect(),ne=N.clientX-G.left,re=N.clientY-G.top;b.value=ne-(ne-b.value)*(H/p.value),M.value=re-(re-M.value)*(H/p.value),p.value=H}function A(N){(N.button===0||N.button===1)&&(y.value=!0,I.value={x:N.clientX,y:N.clientY},m.value?.setPointerCapture(N.pointerId))}function X(N){if(!y.value)return;const U=N.clientX-I.value.x,H=N.clientY-I.value.y;b.value+=U,M.value+=H,I.value={x:N.clientX,y:N.clientY}}function E(N){y.value=!1,m.value?.releasePointerCapture(N.pointerId)}function k(){if(!D.value||!h.value)return;const N=f.value;if(!N)return;const U=N.getContext("webgl2",{preserveDrawingBuffer:!0})||N.getContext("webgl",{preserveDrawingBuffer:!0});if(!U)return;const H=N.width,G=N.height;if(H===0||G===0)return;const ne=new Uint8Array(H*G*4);U.readPixels(0,0,H,G,U.RGBA,U.UNSIGNED_BYTE,ne);const re=new Uint32Array(256),ye=new Uint32Array(256),we=new Uint32Array(256);for(let fe=0;fe<ne.length;fe+=4)re[ne[fe]]++,ye[ne[fe+1]]++,we[ne[fe+2]]++;const te=h.value.getContext("2d"),L=256,j=80;te.clearRect(0,0,L,j);const Q=Math.max(...re.slice(1,255),...ye.slice(1,255),...we.slice(1,255),1);C(te,re,Q,L,j,"rgba(255,80,80,0.5)"),C(te,ye,Q,L,j,"rgba(80,255,80,0.5)"),C(te,we,Q,L,j,"rgba(80,80,255,0.5)")}function C(N,U,H,G,ne,re){N.fillStyle=re,N.beginPath(),N.moveTo(0,ne);for(let ye=0;ye<256;ye++){const we=U[ye]/H*(ne-2);N.lineTo(ye,ne-we)}N.lineTo(255,ne),N.closePath(),N.fill()}return(N,U)=>(ce(),me("div",{class:ut(["preview-panel",`preview-panel--${t.previewMode}`,{hidden:t.hidden}]),style:rt(t.previewMode==="floating"?{top:`${i.value}px`,left:`${n.value}px`}:t.previewMode==="anchored"?{height:`${u.value}px`}:{})},[t.previewMode==="anchored"?(ce(),me("div",{key:0,class:"preview-panel__resize-handle",onPointerdown:d},null,32)):He("",!0),t.previewMode==="floating"?(ce(),me("div",{key:1,class:"preview-panel__header",onPointerdown:s},[...U[1]||(U[1]=[q("span",{class:"preview-panel__header-title"},"Live Preview",-1)])],32)):He("",!0),q("div",xk,[q("span",bk,Te(v.value)+"×"+Te(g.value),1),t.fps&&t.isRendering?(ce(),me("span",Sk,Te(t.fps)+" FPS",1)):He("",!0),t.isRendering?He("",!0):(ce(),me("span",Mk,"STOPPED")),U[2]||(U[2]=q("div",{style:{flex:"1"}},null,-1)),q("span",wk,Te(Math.round(p.value*100))+"%",1),q("button",{class:"preview-panel__tool-btn",onClick:R,title:"Fit"},"⊡"),q("button",{class:"preview-panel__tool-btn",onClick:x,title:"Reset Zoom"},"1:1"),q("button",{class:ut(["preview-panel__tool-btn",{active:D.value}]),onClick:U[0]||(U[0]=H=>D.value=!D.value),title:"Toggle Histogram"},"📊",2)]),q("div",{class:"preview-panel__viewport",ref_key:"viewportRef",ref:m,onWheel:Oe(T,["prevent"]),onPointerdown:A,onPointermove:X,onPointerup:E},[q("div",{class:"preview-panel__canvas-wrap",style:rt({transform:`translate(${b.value}px, ${M.value}px) scale(${p.value})`,transformOrigin:"0 0"})},[q("canvas",{ref_key:"canvasRef",ref:f,class:"preview-panel__canvas"},null,512)],4)],544),D.value?(ce(),me("div",Ek,[q("canvas",{ref_key:"histCanvas",ref:h,class:"preview-panel__hist-canvas",width:"256",height:"80"},null,512),q("div",Tk,[q("span",null,"Resolution: "+Te(v.value)+"×"+Te(g.value),1),t.fps?(ce(),me("span",Ak,Te(t.fps)+" FPS",1)):He("",!0)])])):He("",!0)],6))}},Rk=["title"],Ik={class:"param-panel__collapse-label"},Pk={class:"param-panel__collapse-btn"},Nk={class:"param-panel__header"},Dk={class:"param-panel__title"},Lk={class:"param-panel__type"},Fk={key:0,class:"param-panel__nickname-row"},Uk=["value"],Ok={key:1,class:"param-panel__section"},Bk={class:"param-field__header"},kk={class:"param-field__label"},zk={style:{display:"flex",gap:"4px"}},Vk=["onClick"],$k=["onClick","title"],Hk=["min","max","step","value","onInput"],Gk={class:"param-field__range-info"},Wk=["step","value","onChange"],Xk={class:"param-field__random-bounds-card"},Yk={class:"param-field__random-bounds-inputs"},qk={style:{display:"flex","flex-direction":"column",gap:"2px"}},Kk=["step","value","onChange"],Zk={style:{display:"flex","flex-direction":"column",gap:"2px"}},jk=["step","value","onChange"],Jk=["value","onChange"],Qk=["value"],e4=["onClick"],t4={key:1,class:"param-field__checkbox"},n4=["checked","onChange"],i4=["value","onInput"],r4={class:"param-panel__section"},o4={class:"param-field"},s4={class:"mono",style:{"font-size":"10px",color:"var(--text-muted)"}},a4={class:"param-field"},l4={style:{"font-size":"11px"}},u4={class:"param-field"},c4={style:{"font-size":"11px"}},d4={class:"param-field"},f4={style:{"font-size":"11px"}},h4={key:1,class:"param-panel__empty"},p4={__name:"ParameterPanel",setup(t){const e=Ao(),n=Ce({}),i=Ce(window.innerWidth<768),r=Re(()=>e.selectedNodeDef||{label:"",type:"",params:{},inputs:[],outputs:[],category:""}),o=Re(()=>e.selectedNodeParams),s=Re(()=>fu[r.value.category]?.color||"#888"),a=Re(()=>e.selectedNodeId&&e.perfGridCells.find(c=>c.boundNodeId===e.selectedNodeId||c.boundTargetNodeId===e.selectedNodeId)||null);function l(c,d){e.selectedNodeId&&e.setParam(e.selectedNodeId,c,d)}function u(c,d){return d==="int"?Math.round(c).toString():typeof c=="number"?c.toFixed(3):String(c)}return(c,d)=>(ce(),me("div",{class:ut(["param-panel",{"param-panel--collapsed":i.value}])},[q("div",{class:"param-panel__collapse-bar",onClick:d[0]||(d[0]=f=>i.value=!i.value),title:i.value?"Expand inspector":"Collapse inspector"},[Nr(q("span",Ik,"Inspector",512),[[Dr,!i.value]]),q("span",Pk,Te(i.value?"‹":"›"),1)],8,Rk),i.value?He("",!0):(ce(),me(it,{key:0},[he(e).selectedNode?(ce(),me(it,{key:0},[q("div",Nk,[q("div",{class:"flow-node__category-dot",style:rt({background:s.value})},null,4),q("span",Dk,Te(r.value.label),1),q("span",Lk,Te(r.value.type),1)]),a.value?(ce(),me("div",Fk,[d[2]||(d[2]=q("label",{class:"param-panel__nickname-label"},"Nickname",-1)),q("input",{class:"param-panel__nickname-input",type:"text",value:a.value.nickname||"",placeholder:"Display name in Performance Mode",onInput:d[1]||(d[1]=f=>he(e).setPerfCellNickname(a.value.id,f.target.value))},null,40,Uk)])):He("",!0),Object.keys(r.value.params).length>0?(ce(),me("div",Ok,[d[7]||(d[7]=q("div",{class:"param-panel__section-title"},"Parameters",-1)),(ce(!0),me(it,null,Ht(r.value.params,(f,h)=>(ce(),me("div",{key:h,class:"param-field"},[q("div",Bk,[q("label",kk,Te(f.label),1),q("div",zk,[f.type==="float"||f.type==="int"?(ce(),me("button",{key:0,class:ut(["param-field__expose-btn",{"param-field__expose-btn--active":n.value[h]}]),onClick:m=>n.value[h]=!n.value[h],title:"Toggle Randomizer Bounds"}," 🎲 ",10,Vk)):He("",!0),f.type==="float"||f.type==="int"?(ce(),me("button",{key:1,class:ut(["param-field__expose-btn",{"param-field__expose-btn--active":he(e).isParamExposed(he(e).selectedNodeId,h)}]),onClick:m=>he(e).toggleExposeParam(he(e).selectedNodeId,h),title:he(e).isParamExposed(he(e).selectedNodeId,h)?"Unexpose input":"Expose as input handle"},Te(he(e).isParamExposed(he(e).selectedNodeId,h)?"🔗":"⊕"),11,$k)):He("",!0)])]),f.type==="float"||f.type==="int"?(ce(),me(it,{key:0},[q("input",{type:"range",class:"param-field__input",min:h==="value"&&o.value.min!==void 0?o.value.min:f.min,max:h==="value"&&o.value.max!==void 0?o.value.max:f.max,step:h==="value"&&o.value.step!==void 0?o.value.step:f.step,value:o.value[h]??f.default,onInput:m=>l(h,f.type==="int"?parseInt(m.target.value):parseFloat(m.target.value))},null,40,Hk),q("div",Gk,[q("span",null,Te(h==="value"&&o.value.min!==void 0?o.value.min:f.min),1),q("input",{type:"number",class:"param-field__number-input mono",step:h==="value"&&o.value.step!==void 0?o.value.step:f.step,value:u(o.value[h]??f.default,f.type),onChange:m=>l(h,f.type==="int"?parseInt(m.target.value):parseFloat(m.target.value))},null,40,Wk),q("span",null,Te(h==="value"&&o.value.max!==void 0?o.value.max:f.max),1)]),Nr(q("div",Xk,[d[6]||(d[6]=q("div",{class:"param-field__random-bounds-header"},"🎲 Randomizer Range",-1)),q("div",Yk,[q("div",qk,[d[3]||(d[3]=q("span",{style:{"font-size":"9px",opacity:"0.7"}},"Min",-1)),q("input",{type:"number",class:"param-field__number-input mono",step:f.step,value:o.value[`_randMin_${h}`]??(h==="value"&&o.value.min!==void 0?o.value.min:f.min)??0,onChange:m=>l(`_randMin_${h}`,f.type==="int"?parseInt(m.target.value):parseFloat(m.target.value)),title:"Min random value"},null,40,Kk)]),d[5]||(d[5]=q("span",{style:{opacity:"0.5","font-size":"10px","margin-top":"10px"}},"to",-1)),q("div",Zk,[d[4]||(d[4]=q("span",{style:{"font-size":"9px",opacity:"0.7"}},"Max",-1)),q("input",{type:"number",class:"param-field__number-input mono",step:f.step,value:o.value[`_randMax_${h}`]??(h==="value"&&o.value.max!==void 0?o.value.max:f.max)??1,onChange:m=>l(`_randMax_${h}`,f.type==="int"?parseInt(m.target.value):parseFloat(m.target.value)),title:"Max random value"},null,40,jk)])])],512),[[Dr,n.value[h]]])],64)):f.type==="select"?(ce(),me("select",{key:1,class:"param-field__input",value:o.value[h]??f.default,onChange:m=>l(h,m.target.value)},[(ce(!0),me(it,null,Ht(f.options,m=>(ce(),me("option",{key:m,value:m},Te(m),9,Qk))),128))],40,Jk)):f.type==="bool"?(ce(),me(it,{key:2},[f.ui==="button"?(ce(),me("button",{key:0,class:"flow-node__inline-btn",style:rt([{width:"100%","margin-top":"4px",padding:"6px"},{background:o.value[h]??f.default?"var(--bg-red-dim)":"var(--bg-tertiary)",borderColor:o.value[h]??f.default?"var(--accent-danger)":"var(--border-color)"}]),onClick:m=>l(h,!(o.value[h]??f.default))},Te(o.value[h]??f.default?"Stop":"Start")+" "+Te(f.label.replace("Enable","")),13,e4)):(ce(),me("label",t4,[q("input",{type:"checkbox",checked:o.value[h]??f.default,onChange:m=>l(h,m.target.checked)},null,40,n4),q("span",null,Te(f.label),1)]))],64)):f.type==="string"?(ce(),me("input",{key:3,type:"text",class:"param-field__input",value:o.value[h]??f.default,onInput:m=>l(h,m.target.value)},null,40,i4)):He("",!0)]))),128))])):He("",!0),q("div",r4,[d[12]||(d[12]=q("div",{class:"param-panel__section-title"},"Info",-1)),q("div",o4,[d[8]||(d[8]=q("span",{class:"param-field__label"},"ID",-1)),q("span",s4,Te(he(e).selectedNodeId),1)]),q("div",a4,[d[9]||(d[9]=q("span",{class:"param-field__label"},"Category",-1)),q("span",l4,Te(r.value.category),1)]),q("div",u4,[d[10]||(d[10]=q("span",{class:"param-field__label"},"Inputs",-1)),q("span",c4,Te(r.value.inputs.length),1)]),q("div",d4,[d[11]||(d[11]=q("span",{class:"param-field__label"},"Outputs",-1)),q("span",f4,Te(r.value.outputs.length),1)])])],64)):(ce(),me("div",h4," Select a node to edit its parameters "))],64))],2))}},m4=ur(p4,[["__scopeId","data-v-ff86a86b"]]),g4=["draggable"],v4={class:"control-cell__unbound-icon"},_4={key:2,class:"control-cell__widget control-cell__anim-widget"},y4={class:"control-cell__lfo-readout"},x4={class:"control-cell__lfo-waveforms"},b4=["onClick"],S4={class:"control-cell__label"},M4={key:0,class:"control-cell__target-label"},w4={key:1,class:"control-cell__node-label"},E4={key:3,class:"control-cell__widget control-cell__anim-widget"},T4={class:"control-cell__value mono"},A4={class:"control-cell__label"},C4={key:0,class:"control-cell__target-label"},R4={key:1,class:"control-cell__node-label"},I4={key:4,class:"control-cell__widget control-cell__anim-widget"},P4={class:"control-cell__value mono"},N4={class:"control-cell__label"},D4={key:0,class:"control-cell__target-label"},L4={key:1,class:"control-cell__node-label"},F4={class:"control-cell__value mono"},U4={class:"control-cell__label"},O4={key:0,class:"control-cell__target-label"},B4={key:1,class:"control-cell__node-label"},k4={key:2,class:"control-cell__pulse-ring"},z4={key:6,class:"control-cell__widget control-cell__anim-widget"},V4={class:"control-cell__fft-bars"},$4={class:"control-cell__node-label"},H4={class:"control-cell__label"},G4={class:"control-cell__node-label"},W4=["min","max","step","value"],X4={class:"control-cell__value mono"},Y4={class:"control-cell__label"},q4={class:"control-cell__node-label"},K4={class:"control-cell__node-label"},Z4={class:"control-cell__label"},j4={class:"control-cell__node-label"},J4={class:"control-cell__lfo-readout"},Q4={key:0,class:"control-cell__xy-assignments"},e5={key:0,class:"control-cell__target-label"},t5={key:1,class:"control-cell__target-label"},n5={class:"control-cell__label"},i5={key:1,class:"control-cell__node-label"},r5={key:12,class:"control-cell__widget"},o5={class:"control-cell__accel-readout"},s5={class:"control-cell__accel-axis"},a5={class:"control-cell__accel-bar-track"},l5={class:"control-cell__accel-axis"},u5={class:"control-cell__accel-bar-track"},c5={class:"control-cell__node-label"},d5={class:"value-edit-popup"},f5={class:"value-edit-popup__title"},h5=["value","step"],p5={class:"value-edit-popup__actions"},wd=60,m5={__name:"ControlCell",props:{cell:{type:Object,required:!0},editMode:{type:Boolean,default:!1},index:{type:Number,default:0}},emits:["delete","assign","reorder"],setup(t,{emit:e}){const n=t,i=e,r=Ao(),o=Ce(!1),s=Ce(null),a=Ce(null),l=["lfo","timer","damper","fft","random"],u=Re(()=>l.includes(n.cell.controlType)),c=Re(()=>({knob:"🎛️",slider:"═══",bang:"💥",toggle:"⏻",lfo:"〰️",timer:"⏱️",damper:"🫧",fft:"🎵",random:"🎲",xypad:"✛",accelerometer:"📱"})[n.cell.controlType]||"?"),d=Re(()=>{if(!n.cell.boundNodeId)return"";const ue=r.nodes.find(Ae=>Ae.id===n.cell.boundNodeId);return ue?en(ue.type)?.label||ue.type:""}),f=Re(()=>n.cell.nickname?n.cell.nickname:n.cell.boundParamKey&&!n.cell.boundTargetNodeId?n.cell.boundParamKey.toUpperCase():n.cell.controlType.toUpperCase()),h=Re(()=>{if(!n.cell.boundTargetNodeId||!n.cell.boundParamKey)return"";const ue=r.nodes.find(oe=>oe.id===n.cell.boundTargetNodeId);if(!ue)return"";const se=en(ue.type),De=se?.params?.[n.cell.boundParamKey]?.label||n.cell.boundParamKey;return`→ ${se?.label||ue.type}.${De}`}),m=Re(()=>{if(!n.cell.boundTargetNodeId||!n.cell.boundParamKey)return"";const ue=r.nodes.find(De=>De.id===n.cell.boundTargetNodeId);return ue?`X → ${en(ue.type)?.params?.[n.cell.boundParamKey]?.label||n.cell.boundParamKey}`:""}),v=Re(()=>{if(!n.cell.boundTargetNodeIdY||!n.cell.boundParamKeyY)return"";const ue=r.nodes.find(De=>De.id===n.cell.boundTargetNodeIdY);return ue?`Y → ${en(ue.type)?.params?.[n.cell.boundParamKeyY]?.label||n.cell.boundParamKeyY}`:""}),g=Re(()=>{if(!n.cell.boundNodeId||!n.cell.boundParamKey)return null;const ue=r.nodes.find(Ae=>Ae.id===n.cell.boundNodeId);return ue&&en(ue.type)?.params?.[n.cell.boundParamKey]||null}),p=Re(()=>!n.cell.boundNodeId||!n.cell.boundParamKey?0:r.nodeParams[n.cell.boundNodeId]?.[n.cell.boundParamKey]??g.value?.default??0),b=Re(()=>g.value?.min??0),M=Re(()=>g.value?.max??1),y=Re(()=>g.value?.step??.01),I=Re(()=>n.cell.boundNodeId?r.dataOutputs[n.cell.boundNodeId]?.out??0:0),D=Re(()=>{if(!n.cell.boundNodeId)return{bass:0,lowMid:0,mid:0,high:0};const ue=r.dataOutputs[n.cell.boundNodeId];return{bass:ue?.bass??0,lowMid:ue?.lowMid??0,mid:ue?.mid??0,high:ue?.high??0}}),B=Ce([]);let _=null;bn(()=>{u.value&&n.cell.controlType!=="fft"&&(_=setInterval(x,50))}),Hr(()=>{clearInterval(_)});function x(){if(!n.cell.boundNodeId)return;const ue=I.value,se=B.value;se.push(ue),se.length>wd&&se.shift(),B.value=se,R()}function R(){const ue=s.value;if(!ue)return;const se=ue.getContext("2d"),Ae=ue.width,De=ue.height,Qe=B.value;if(se.clearRect(0,0,Ae,De),Qe.length<2)return;let oe=1/0,Le=-1/0;for(const Be of Qe)Be<oe&&(oe=Be),Be>Le&&(Le=Be);Le===oe&&(oe-=.5,Le+=.5);const Fe=Le-oe;se.strokeStyle="#00d4ff",se.lineWidth=1.5,se.lineJoin="round",se.beginPath();for(let Be=0;Be<Qe.length;Be++){const Ne=Be/(wd-1)*Ae,Me=De-(Qe[Be]-oe)/Fe*De;Be===0?se.moveTo(Ne,Me):se.lineTo(Ne,Me)}se.stroke(),se.lineTo((Qe.length-1)/(wd-1)*Ae,De),se.lineTo(0,De),se.closePath(),se.fillStyle="rgba(0, 212, 255, 0.1)",se.fill()}const T=Re(()=>n.cell.boundNodeId?r.nodeParams[n.cell.boundNodeId]?.frequency??1:1),A=Re(()=>n.cell.boundNodeId?r.nodeParams[n.cell.boundNodeId]?.amplitude??1:1),X=Re(()=>n.cell.boundNodeId?r.nodeParams[n.cell.boundNodeId]?.waveform??"sine":"sine");function E(ue){return{sine:"∿",saw:"⩘",square:"⊓",triangle:"△"}[ue]||ue}function k(ue){n.cell.boundNodeId&&r.setParam(n.cell.boundNodeId,"waveform",ue)}let C=0,N=0,U=0,H=0,G=!1;function ne(ue){if(n.editMode)return;G=!0;const se=ue.touches?ue.touches[0]:ue;C=se.clientX,N=se.clientY,U=T.value,H=A.value,window.addEventListener("pointermove",re),window.addEventListener("pointerup",we),window.addEventListener("touchmove",ye,{passive:!1}),window.addEventListener("touchend",we)}function re(ue){if(!G||!n.cell.boundNodeId)return;const se=ue.clientX-C,Ae=-(ue.clientY-N),De=Math.max(.01,Math.min(5,U+se*.05)),Qe=Math.max(0,Math.min(5,H+Ae*.02));r.setParam(n.cell.boundNodeId,"frequency",De),r.setParam(n.cell.boundNodeId,"amplitude",Qe)}function ye(ue){ue.preventDefault();const se=ue.touches[0];re({clientX:se.clientX,clientY:se.clientY})}function we(){G=!1,window.removeEventListener("pointermove",re),window.removeEventListener("pointerup",we),window.removeEventListener("touchmove",ye),window.removeEventListener("touchend",we)}const te=Re(()=>n.cell.boundNodeId?r.nodeParams[n.cell.boundNodeId]?.triggerInterval??.5:.5),L=Re(()=>n.cell.boundNodeId?r.nodeParams[n.cell.boundNodeId]?.damping??0:0),j=Ce(!1);let Q=null;function fe(ue){n.cell.boundNodeId&&(j.value=!1,Ee.value=ue,$.value=ue==="triggerInterval"?"Self-Trigger Interval (s)":"Damping",W.value=r.nodeParams[n.cell.boundNodeId]?.[ue]??(ue==="triggerInterval"?.5:0),F.value=ue==="triggerInterval"?.01:.001,Se.value=!0,pn(()=>O.value?.focus?.()))}const Se=Ce(!1),Ee=Ce(""),$=Ce(""),W=Ce(0),F=Ce(.01),O=Ce(null);n.cell.controlType==="random"&&lt(I,ue=>{!Se.value&&Q!==null&&Math.abs(ue-Q)>.005&&(j.value=!0,setTimeout(()=>{j.value=!1},300)),Q=ue});function z(ue){n.cell.boundNodeId&&(Ee.value=ue,$.value=ue==="frequency"?"Frequency (Hz)":"Amplitude",W.value=r.nodeParams[n.cell.boundNodeId]?.[ue]??1,F.value=.01,Se.value=!0,pn(()=>O.value?.focus?.()))}function Y(ue){n.cell.boundNodeId&&Ee.value&&!isNaN(ue)&&r.setParam(n.cell.boundNodeId,Ee.value,ue),Se.value=!1}function S(ue){n.cell.boundNodeId&&(Ee.value=ue,$.value=ue==="x"?"X Value":"Y Value",W.value=r.nodeParams[n.cell.boundNodeId]?.[ue]??.5,F.value=.001,Se.value=!0,pn(()=>O.value?.focus?.()))}const Z=Re(()=>n.cell.boundNodeId?r.nodeParams[n.cell.boundNodeId]?.x??.5:.5),J=Re(()=>n.cell.boundNodeId?r.nodeParams[n.cell.boundNodeId]?.y??.5:.5),ee=Re(()=>({left:Z.value*100+"%",top:(1-J.value)*100+"%"})),ie=Re(()=>({left:Z.value*100+"%",top:(1-J.value)*100+"%"}));let P=!1;function w(ue){P=!0,ge(ue),window.addEventListener("pointermove",K),window.addEventListener("pointerup",ae)}function K(ue){P&&ge(ue)}function ae(){P=!1,window.removeEventListener("pointermove",K),window.removeEventListener("pointerup",ae)}function ge(ue){const se=a.value;if(!se||!n.cell.boundNodeId)return;const Ae=se.getBoundingClientRect(),De=Math.max(0,Math.min(1,(ue.clientX-Ae.left)/Ae.width)),Qe=Math.max(0,Math.min(1,1-(ue.clientY-Ae.top)/Ae.height));r.setParam(n.cell.boundNodeId,"x",De),r.setParam(n.cell.boundNodeId,"y",Qe)}function de(ue){if(!n.cell.boundNodeId)return 50;const Ae=r.dataOutputs[n.cell.boundNodeId]?.[ue]??0;return Math.max(0,Math.min(100,(Ae+1)*50))}function Ue(ue){n.cell.boundNodeId&&n.cell.boundParamKey&&r.setParam(n.cell.boundNodeId,n.cell.boundParamKey,ue)}function Ie(){n.cell.boundNodeId&&r.triggerButton(n.cell.boundNodeId)}function Ge(ue){o.value=!0,ue.dataTransfer.setData("text/plain",String(n.index)),ue.dataTransfer.effectAllowed="move"}function Ye(){o.value=!1}function Pe(ue){const se=parseInt(ue.dataTransfer.getData("text/plain"),10);!isNaN(se)&&se!==n.index&&i("reorder",se,n.index)}return(ue,se)=>(ce(),me("div",{class:ut(["control-cell",{"control-cell--edit":t.editMode,"control-cell--unbound":!t.cell.boundNodeId&&!u.value,"control-cell--dragging":o.value}]),draggable:t.editMode,onDragstart:Ge,onDragend:Ye,onDragover:se[26]||(se[26]=Oe(()=>{},["prevent"])),onDrop:Pe},[t.editMode?(ce(),me("button",{key:0,class:"control-cell__delete",onClick:se[0]||(se[0]=Oe(Ae=>ue.$emit("delete"),["stop"]))},"✕")):He("",!0),!t.cell.boundNodeId&&!u.value?(ce(),me("div",{key:1,class:"control-cell__unbound",onClick:se[1]||(se[1]=Oe(Ae=>ue.$emit("assign"),["stop"]))},[q("span",v4,Te(c.value),1),se[27]||(se[27]=q("span",{class:"control-cell__unbound-label"},"Tap to assign",-1))])):t.cell.controlType==="lfo"?(ce(),me("div",_4,[q("canvas",{ref_key:"graphCanvas",ref:s,class:"control-cell__mini-graph control-cell__mini-graph--interactive",width:"120",height:"50",onPointerdown:ne,onTouchstart:Oe(ne,["prevent"])},null,544),q("div",y4,[q("span",{class:"control-cell__value mono",onClick:se[2]||(se[2]=Oe(Ae=>z("frequency"),["stop"])),title:"Tap to edit"},Te(T.value.toFixed(2))+" Hz",1),q("span",{class:"control-cell__value mono",onClick:se[3]||(se[3]=Oe(Ae=>z("amplitude"),["stop"])),title:"Tap to edit"},"amp "+Te(A.value.toFixed(2)),1)]),q("div",x4,[(ce(),me(it,null,Ht(["sine","saw","square","triangle"],Ae=>q("button",{key:Ae,class:ut(["control-cell__wf-btn",{"control-cell__wf-btn--active":X.value===Ae}]),onClick:Oe(De=>k(Ae),["stop"])},Te(E(Ae)),11,b4)),64))]),q("div",S4,Te(f.value),1),h.value?(ce(),me("div",M4,Te(h.value),1)):(ce(),me("div",w4,Te(d.value||"LFO"),1))])):t.cell.controlType==="timer"?(ce(),me("div",E4,[q("canvas",{ref_key:"graphCanvas",ref:s,class:"control-cell__mini-graph",width:"120",height:"50"},null,512),q("div",T4,Te(I.value?.toFixed(2)??"0.00")+" s",1),q("div",A4,Te(f.value),1),h.value?(ce(),me("div",C4,Te(h.value),1)):(ce(),me("div",R4,Te(d.value||"Timer"),1))])):t.cell.controlType==="damper"?(ce(),me("div",I4,[q("canvas",{ref_key:"graphCanvas",ref:s,class:"control-cell__mini-graph",width:"120",height:"50"},null,512),q("div",P4,Te(I.value?.toFixed(3)??"0.000"),1),q("div",N4,Te(f.value),1),h.value?(ce(),me("div",D4,Te(h.value),1)):(ce(),me("div",L4,Te(d.value||"Damper"),1))])):t.cell.controlType==="random"?(ce(),me("div",{key:5,class:ut(["control-cell__widget control-cell__anim-widget control-cell__random-widget",{"control-cell__random-widget--pulsing":j.value}])},[q("canvas",{ref_key:"graphCanvas",ref:s,class:"control-cell__mini-graph",width:"120",height:"50"},null,512),q("div",F4,Te(I.value?.toFixed(3)??"0.000"),1),q("div",{class:"control-cell__lfo-readout",onPointerdown:se[6]||(se[6]=Oe(()=>{},["stop"])),onMousedown:se[7]||(se[7]=Oe(()=>{},["stop"]))},[q("span",{class:"control-cell__value mono control-cell__value--tappable",onClick:se[4]||(se[4]=Oe(Ae=>fe("triggerInterval"),["stop"])),title:"Tap to edit"},"⏱ "+Te(te.value.toFixed(2))+"s",1),q("span",{class:"control-cell__value mono control-cell__value--tappable",onClick:se[5]||(se[5]=Oe(Ae=>fe("damping"),["stop"])),title:"Tap to edit"},"◈ "+Te(L.value.toFixed(3)),1)],32),q("div",U4,Te(f.value),1),h.value?(ce(),me("div",O4,Te(h.value),1)):(ce(),me("div",B4,Te(d.value||"Random"),1)),j.value?(ce(),me("div",k4)):He("",!0)],2)):t.cell.controlType==="fft"?(ce(),me("div",z4,[q("div",V4,[q("div",{class:"control-cell__fft-bar",style:rt({height:D.value.bass*100+"%"})},[...se[28]||(se[28]=[q("span",null,"B",-1)])],4),q("div",{class:"control-cell__fft-bar",style:rt({height:D.value.lowMid*100+"%"})},[...se[29]||(se[29]=[q("span",null,"LM",-1)])],4),q("div",{class:"control-cell__fft-bar",style:rt({height:D.value.mid*100+"%"})},[...se[30]||(se[30]=[q("span",null,"M",-1)])],4),q("div",{class:"control-cell__fft-bar",style:rt({height:D.value.high*100+"%"})},[...se[31]||(se[31]=[q("span",null,"H",-1)])],4)]),se[32]||(se[32]=q("div",{class:"control-cell__label"},"FFT",-1)),q("div",$4,Te(d.value||"Audio FFT"),1)])):t.cell.controlType==="knob"?(ce(),me("div",{key:7,class:"control-cell__widget",onPointerdown:se[8]||(se[8]=Oe(()=>{},["stop"])),onMousedown:se[9]||(se[9]=Oe(()=>{},["stop"]))},[tt(sx,{modelValue:p.value,min:b.value,max:M.value,step:y.value,size:null,"onUpdate:modelValue":Ue},null,8,["modelValue","min","max","step"]),q("div",H4,Te(f.value),1),q("div",G4,Te(d.value),1)],32)):t.cell.controlType==="slider"?(ce(),me("div",{key:8,class:"control-cell__widget",onPointerdown:se[11]||(se[11]=Oe(()=>{},["stop"])),onMousedown:se[12]||(se[12]=Oe(()=>{},["stop"]))},[q("input",{type:"range",class:"control-cell__slider",min:b.value,max:M.value,step:y.value,value:p.value,onInput:se[10]||(se[10]=Ae=>Ue(Number(Ae.target.value)))},null,40,W4),q("div",X4,Te(p.value?.toFixed(2)),1),q("div",Y4,Te(f.value),1),q("div",q4,Te(d.value),1)],32)):t.cell.controlType==="bang"?(ce(),me("div",{key:9,class:"control-cell__widget",onPointerdown:se[13]||(se[13]=Oe(()=>{},["stop"])),onMousedown:se[14]||(se[14]=Oe(()=>{},["stop"]))},[q("button",{class:"control-cell__bang-btn",onClick:Oe(Ie,["stop"])},Te(f.value||"Bang!"),1),q("div",K4,Te(d.value),1)],32)):t.cell.controlType==="toggle"?(ce(),me("div",{key:10,class:"control-cell__widget",onPointerdown:se[16]||(se[16]=Oe(()=>{},["stop"])),onMousedown:se[17]||(se[17]=Oe(()=>{},["stop"]))},[q("button",{class:ut(["control-cell__toggle-btn",{"control-cell__toggle-btn--active":!!p.value}]),onClick:se[15]||(se[15]=Oe(Ae=>Ue(!p.value),["stop"]))},Te(p.value?"ON":"OFF"),3),q("div",Z4,Te(f.value),1),q("div",j4,Te(d.value),1)],32)):t.cell.controlType==="xypad"?(ce(),me("div",{key:11,class:"control-cell__widget",onPointerdown:se[20]||(se[20]=Oe(()=>{},["stop"])),onMousedown:se[21]||(se[21]=Oe(()=>{},["stop"]))},[q("div",{class:"control-cell__xypad",ref_key:"xyPadRef",ref:a,onPointerdown:w},[q("div",{class:"control-cell__xypad-crosshair",style:rt(ee.value)},null,4),q("div",{class:"control-cell__xypad-glow",style:rt(ie.value)},null,4)],544),q("div",J4,[q("span",{class:"control-cell__value mono",onClick:se[18]||(se[18]=Oe(Ae=>S("x"),["stop"])),title:"Tap to edit"},"X: "+Te(Z.value.toFixed(2)),1),q("span",{class:"control-cell__value mono",onClick:se[19]||(se[19]=Oe(Ae=>S("y"),["stop"])),title:"Tap to edit"},"Y: "+Te(J.value.toFixed(2)),1)]),m.value||v.value?(ce(),me("div",Q4,[m.value?(ce(),me("div",e5,Te(m.value),1)):He("",!0),v.value?(ce(),me("div",t5,Te(v.value),1)):He("",!0)])):He("",!0),q("div",n5,Te(f.value),1),!m.value&&!v.value?(ce(),me("div",i5,Te(d.value),1)):He("",!0)],32)):t.cell.controlType==="accelerometer"?(ce(),me("div",r5,[q("div",o5,[q("div",s5,[se[33]||(se[33]=q("span",{class:"control-cell__accel-label"},"X",-1)),q("div",a5,[q("div",{class:"control-cell__accel-bar",style:rt({width:de("x")+"%",background:"#ff4757"})},null,4)])]),q("div",l5,[se[34]||(se[34]=q("span",{class:"control-cell__accel-label"},"Y",-1)),q("div",u5,[q("div",{class:"control-cell__accel-bar",style:rt({width:de("y")+"%",background:"#2ed573"})},null,4)])])]),se[35]||(se[35]=q("div",{class:"control-cell__label"},"Accelerometer",-1)),q("div",c5,Te(d.value),1)])):He("",!0),(ce(),Jt(_h,{to:"body"},[Se.value?(ce(),me("div",{key:0,class:"value-edit-overlay",onClick:se[25]||(se[25]=Oe(Ae=>Se.value=!1,["self"]))},[q("div",d5,[q("div",f5,Te($.value),1),q("input",{ref_key:"valueEditInput",ref:O,type:"number",class:"value-edit-popup__input",value:W.value,step:F.value,onKeydown:se[22]||(se[22]=z1(Ae=>Y(Number(Ae.target.value)),["enter"]))},null,40,h5),q("div",p5,[q("button",{class:"value-edit-popup__btn",onClick:se[23]||(se[23]=Ae=>Se.value=!1)},"Cancel"),q("button",{class:"value-edit-popup__btn value-edit-popup__btn--ok",onClick:se[24]||(se[24]=Ae=>Y(Number(ue.$refs.valueEditInput?.value)))},"OK")])])])):He("",!0)]))],42,g4))}},g5=ur(m5,[["__scopeId","data-v-d1dd8399"]]),v5={class:"radial-menu__center"},_5={class:"radial-menu__segment-icon"},y5={class:"radial-menu__segment-label"},x5={class:"radial-menu__segment-icon"},b5={class:"radial-menu__segment-label"},lv=100,Il=64,S5={__name:"RadialMenu",props:{categories:{type:Array,default:()=>[]}},emits:["select","cancel"],setup(t,{expose:e,emit:n}){const i=t,r=n,o=Ce(!1),s=Ce(0),a=Ce(0),l=Ce(null),u=Ce(null),c=Re(()=>u.value?i.categories.find(p=>p.id===u.value)?.items||[]:[]);function d(g,p){s.value=g,a.value=p,l.value=null,u.value=null,o.value=!0}function f(){o.value=!1,l.value=null,u.value=null}function h(g,p){const b=g/p*2*Math.PI-Math.PI/2,M=Math.cos(b)*lv,y=Math.sin(b)*lv;return{transform:`translate(${M-Il/2}px, ${y-Il/2}px)`,width:Il+"px",height:Il+"px"}}function m(g){const p=g.clientX-s.value,b=g.clientY-a.value;if(Math.sqrt(p*p+b*b)<30){l.value=null;return}const y=Math.atan2(b,p),I=u.value?c.value:i.categories,D=I.length;if(D===0)return;const B=(y+Math.PI/2+2*Math.PI)%(2*Math.PI),_=Math.floor(B/(2*Math.PI/D))%D;l.value=I[_]?.id||null}function v(){if(!l.value){if(u.value){u.value=null,l.value=null;return}r("cancel"),f();return}if(!u.value){u.value=l.value,l.value=null;return}r("select",l.value),f()}return e({show:d,hide:f,visible:o}),(g,p)=>(ce(),Jt(_h,{to:"body"},[o.value?(ce(),me("div",{key:0,class:"radial-overlay",onPointerup:v,onPointermove:m,onTouchmove:p[0]||(p[0]=Oe(()=>{},["prevent"]))},[q("div",{class:"radial-menu",style:rt({left:s.value+"px",top:a.value+"px"})},[q("div",v5,Te(u.value?u.value:l.value||"⊕"),1),u.value?(ce(!0),me(it,{key:1},Ht(c.value,(b,M)=>(ce(),me("div",{key:b.id,class:ut(["radial-menu__segment",{"radial-menu__segment--active":l.value===b.id}]),style:rt(h(M,c.value.length))},[q("span",x5,Te(b.icon),1),q("span",b5,Te(b.label),1)],6))),128)):(ce(!0),me(it,{key:0},Ht(t.categories,(b,M)=>(ce(),me("div",{key:b.id,class:ut(["radial-menu__segment",{"radial-menu__segment--active":l.value===b.id}]),style:rt(h(M,t.categories.length))},[q("span",_5,Te(b.icon),1),q("span",y5,Te(b.label),1)],6))),128))],4)],32)):He("",!0)]))}},M5=ur(S5,[["__scopeId","data-v-ffb4e9d0"]]),w5={class:"control-drawer__handle-arrow"},E5={class:"control-drawer__handle-actions"},T5=["title"],A5={class:"control-drawer__grid"},C5={class:"assign-popup"},R5={class:"assign-popup__header"},I5={key:0,class:"assign-popup__empty"},P5=["onClick"],N5={class:"assign-popup__item-node"},D5={class:"assign-popup__item-param"},L5={key:1,class:"assign-popup__skip-row"},F5={__name:"ControlDrawer",setup(t){const e=Ao(),n=Ce(!1),i=Ce(null),r=Ce(!1),o=Ce(null),s=Ce(!1),a=Ce(null),l=Ce(null);let u=null,c=!1;const d=[{id:"controls",label:"Controls",icon:"🎛️",items:[{id:"knob",label:"Knob",icon:"🎛️"},{id:"slider",label:"Slider",icon:"═══"},{id:"bang",label:"Bang",icon:"💥"},{id:"toggle",label:"Toggle",icon:"⏻"},{id:"xypad",label:"XY Pad",icon:"✛"}]},{id:"animation",label:"Animation",icon:"🌊",items:[{id:"lfo",label:"LFO",icon:"〜️"},{id:"timer",label:"Timer",icon:"⏱️"},{id:"damper",label:"Damper",icon:"🫧"},{id:"fft",label:"FFT",icon:"🎵"}]}],f=Re(()=>e.getUnboundExposedParams()),h=Re(()=>l.value||(s.value?"Route Output To…":"Assign Parameter"));lt(()=>e.isPerformanceMode,x=>{x&&m()},{immediate:!0});function m(){const x=e.getControlNodes(),R=new Set(e.perfGridCells.map(T=>T.boundNodeId).filter(Boolean));for(const T of x){if(R.has(T.id))continue;const X={knob:"knob",slider:"slider",bang:"bang",button:"toggle",toggle:"toggle"}[T.type];if(!X)continue;const E=e.addPerfCell(X),k=T.data?.def;if(k?.params){const C=Object.keys(k.params)[0];C&&e.bindPerfCell(E,T.id,C)}}}function v(x){c=!1;const R=x.touches?x.touches[0]:x,T=R.clientX,A=R.clientY;u=setTimeout(()=>{c=!0,i.value?.show(T,A)},400)}function g(){clearTimeout(u)}function p(){if(c)return;const x=e.addPerfCell("knob");o.value=x,r.value=!0}function b(x){const R={lfo:"lfo",timer:"timer",damper:"damper",fft:"fft",random:"random",accelerometer:"accelerometer",xypad:"xyPad"};if(R[x]){const A=R[x],X=e.addNode(A,{x:100+Math.random()*200,y:100+Math.random()*200});if(X){const E=e.addPerfCell(x);e.bindPerfCell(E,X,null),x==="accelerometer"&&B(X),o.value=E,s.value=!0,r.value=!0}return}const T=e.addPerfCell(x);o.value=T,s.value=!1,r.value=!0}function M(x){o.value=x,r.value=!0}function y(x,R,T,A){const X=e.nodes.find(U=>U.id===R);if(!X)return;const k=en(X.type)?.params?.[T];if(!k)return;const C=k.min??0,N=k.max??1;A==="X"?(e.setParam(x,"minX",C),e.setParam(x,"maxX",N)):(e.setParam(x,"minY",C),e.setParam(x,"maxY",N))}function I(x){if(!o.value)return;const R=e.perfGridCells.find(T=>T.id===o.value);if(!R){r.value=!1;return}if(s.value)if(R.controlType==="xypad"&&!a.value){e.bindPerfCellTarget(R.id,x.nodeId,x.paramKey),y(R.boundNodeId,x.nodeId,x.paramKey,"X"),e.addEdge({source:R.boundNodeId,sourceHandle:"x",target:x.nodeId,targetHandle:x.paramKey}),a.value="y",l.value="Assign Y Axis To…";return}else if(R.controlType==="xypad"&&a.value==="y")e.bindPerfCellTargetY(R.id,x.nodeId,x.paramKey),y(R.boundNodeId,x.nodeId,x.paramKey,"Y"),e.addEdge({source:R.boundNodeId,sourceHandle:"y",target:x.nodeId,targetHandle:x.paramKey}),a.value=null,l.value=null;else{e.bindPerfCellTarget(R.id,x.nodeId,x.paramKey);const T=R.controlType==="fft"?"bass":R.controlType==="accelerometer"?"x":"out";e.addEdge({source:R.boundNodeId,sourceHandle:T,target:x.nodeId,targetHandle:x.paramKey})}else e.bindPerfCell(R.id,x.nodeId,x.paramKey);r.value=!1,o.value=null,a.value=null,l.value=null}function D(x,R){e.reorderPerfCells(x,R)}function B(x){typeof DeviceMotionEvent<"u"&&(typeof DeviceMotionEvent.requestPermission=="function"?DeviceMotionEvent.requestPermission().then(R=>{R==="granted"&&_(x)}).catch(console.warn):_(x))}function _(x){window.addEventListener("devicemotion",R=>{const T=e.nodes.find(X=>X.id===x);if(!T)return;const A=R.accelerationIncludingGravity;A&&(T._accelX=(A.x??0)/9.81,T._accelY=(A.y??0)/9.81,T._accelZ=(A.z??0)/9.81)})}return(x,R)=>(ce(),me("div",{class:ut(["control-drawer",{"control-drawer--collapsed":n.value}])},[q("div",{class:"control-drawer__handle",onClick:R[1]||(R[1]=T=>n.value=!n.value)},[q("span",w5,Te(n.value?"▲":"▼"),1),R[5]||(R[5]=q("span",{class:"control-drawer__handle-title"},"Controls",-1)),q("div",E5,[q("button",{class:ut(["control-drawer__lock-btn",{"control-drawer__lock-btn--unlocked":he(e).isPerfEditMode}]),onClick:R[0]||(R[0]=Oe(T=>he(e).togglePerfEditMode(),["stop"])),title:he(e).isPerfEditMode?"Lock Controls":"Unlock to Edit"},Te(he(e).isPerfEditMode?"🔓":"🔒"),11,T5)])]),Nr(q("div",A5,[(ce(!0),me(it,null,Ht(he(e).perfGridCells,(T,A)=>(ce(),Jt(g5,{key:T.id,cell:T,"edit-mode":he(e).isPerfEditMode,index:A,onDelete:X=>he(e).removePerfCell(T.id),onAssign:X=>M(T.id),onReorder:D},null,8,["cell","edit-mode","index","onDelete","onAssign"]))),128)),he(e).isPerfEditMode?(ce(),me("div",{key:0,class:"control-drawer__add-cell",onPointerdown:v,onPointerup:g,onPointerleave:g,onTouchstart:Oe(v,["prevent"]),onClick:p},[...R[6]||(R[6]=[q("span",{class:"control-drawer__add-icon"},"➕",-1),q("span",{class:"control-drawer__add-label"},[Yi("Hold for menu"),q("br"),Yi("Tap to quick-add")],-1)])],32)):He("",!0)],512),[[Dr,!n.value]]),tt(M5,{ref_key:"radialMenuRef",ref:i,categories:d,onSelect:b,onCancel:()=>{}},null,512),(ce(),Jt(_h,{to:"body"},[r.value?(ce(),me("div",{key:0,class:"assign-overlay",onClick:R[4]||(R[4]=Oe(T=>r.value=!1,["self"]))},[q("div",C5,[q("div",R5,Te(h.value),1),f.value.length===0?(ce(),me("div",I5,[R[7]||(R[7]=Yi(" No unbound exposed parameters available. ",-1)),R[8]||(R[8]=q("br",null,null,-1)),R[9]||(R[9]=q("br",null,null,-1)),R[10]||(R[10]=q("span",{style:{"font-size":"11px",opacity:"0.7"}}," Expose parameters in Editor Mode first (🔗 icon in the inspector). ",-1)),R[11]||(R[11]=q("br",null,null,-1)),R[12]||(R[12]=q("br",null,null,-1)),s.value?(ce(),me("button",{key:0,class:"assign-popup__skip-btn",onClick:R[2]||(R[2]=T=>r.value=!1)},"Skip — use standalone")):He("",!0)])):He("",!0),(ce(!0),me(it,null,Ht(f.value,T=>(ce(),me("div",{key:`${T.nodeId}::${T.paramKey}`,class:"assign-popup__item",onClick:A=>I(T)},[q("span",N5,Te(T.nodeLabel),1),R[13]||(R[13]=q("span",{class:"assign-popup__item-sep"},"→",-1)),q("span",D5,Te(T.paramLabel),1)],8,P5))),128)),s.value&&f.value.length>0?(ce(),me("div",L5,[q("button",{class:"assign-popup__skip-btn",onClick:R[3]||(R[3]=T=>r.value=!1)},"Skip — use standalone")])):He("",!0)])])):He("",!0)]))],2))}},U5=ur(F5,[["__scopeId","data-v-6a70db30"]]),O5={class:"perf-view"},B5={class:"perf-view__toolbar"},k5={class:"perf-view__badge mono"},z5={class:"perf-view__zoom-level mono"},V5={key:0,class:"perf-view__histogram"},$5={__name:"PerformanceView",props:{fps:{type:Number,default:0}},setup(t,{expose:e}){const n=Ao(),i=Ce(null),r=Ce(null),o=Ce(null),s=Ce(!1),a=Ce(1),l=Ce(0),u=Ce(0);let c=!1,d=0,f=0,h=0,m=0;const v=Re(()=>{const _=i.value;return _?`${_.width}×${_.height}`:"—"});function g(_){const x=_.deltaY>0?.9:1.1,R=Math.max(.1,Math.min(10,a.value*x)),T=r.value?.getBoundingClientRect();if(T){const A=_.clientX-T.left,X=_.clientY-T.top;l.value=A-(A-l.value)*(R/a.value),u.value=X-(X-u.value)*(R/a.value)}a.value=R}function p(_){(_.button===1||_.button===0)&&(c=!0,d=_.clientX,f=_.clientY,h=l.value,m=u.value,_.currentTarget?.setPointerCapture?.(_.pointerId))}function b(_){c&&(l.value=h+(_.clientX-d),u.value=m+(_.clientY-f))}function M(){c=!1}function y(){const _=r.value,x=i.value;if(!_||!x||!x.width||!x.height)return;const R=_.clientWidth,T=_.clientHeight,A=Math.min(R/x.width,T/x.height);a.value=A,l.value=(R-x.width*A)/2,u.value=(T-x.height*A)/2}function I(){a.value=1;const _=r.value,x=i.value;_&&x&&(l.value=(_.clientWidth-x.width)/2,u.value=(_.clientHeight-x.height)/2)}lt(s,async _=>{_&&(await pn(),D())});function D(){const _=i.value,x=o.value;if(!_||!x||!_.width)return;const R=document.createElement("canvas");R.width=_.width,R.height=_.height;const T=R.getContext("2d");T.drawImage(_,0,0);const X=T.getImageData(0,0,R.width,R.height).data,E=new Array(256).fill(0),k=new Array(256).fill(0),C=new Array(256).fill(0);for(let re=0;re<X.length;re+=4)E[X[re]]++,k[X[re+1]]++,C[X[re+2]]++;const N=Math.max(...E,...k,...C,1),U=x.getContext("2d"),H=x.width,G=x.height;U.clearRect(0,0,H,G);function ne(re,ye){U.strokeStyle=ye,U.lineWidth=1,U.globalAlpha=.6,U.beginPath();for(let we=0;we<256;we++){const te=we/255*H,L=G-re[we]/N*G;we===0?U.moveTo(te,L):U.lineTo(te,L)}U.stroke()}ne(E,"#ff4757"),ne(k,"#2ed573"),ne(C,"#1e90ff"),U.globalAlpha=1}let B=null;return lt(s,_=>{_?B=setInterval(D,500):clearInterval(B)},{immediate:!0}),e({perfCanvasRef:i}),(_,x)=>(ce(),me("div",O5,[q("div",{class:"perf-view__renderer",ref_key:"viewportRef",ref:r,onWheel:Oe(g,["prevent"]),onPointerdown:p,onPointermove:b,onPointerup:M},[q("div",{class:"perf-view__canvas-wrap",style:rt({transform:`translate(${l.value}px, ${u.value}px) scale(${a.value})`,transformOrigin:"0 0"})},[q("canvas",{ref_key:"perfCanvasRef",ref:i,class:"perf-view__canvas"},null,512)],4)],544),q("div",B5,[q("span",k5,Te(v.value),1),q("span",{class:ut(["perf-view__badge perf-view__fps mono",{"perf-view__fps--ok":t.fps>=50}])},Te(t.fps)+" FPS",3),x[2]||(x[2]=q("div",{style:{flex:"1"}},null,-1)),q("span",z5,Te(Math.round(a.value*100))+"%",1),q("button",{class:"perf-view__tool-btn",onClick:y,title:"Fit to viewport"},"⊡"),q("button",{class:"perf-view__tool-btn",onClick:I,title:"1:1 pixel zoom"},"1:1"),q("button",{class:ut(["perf-view__tool-btn",{active:s.value}]),onClick:x[0]||(x[0]=R=>s.value=!s.value),title:"Toggle Histogram"},"📊",2),x[3]||(x[3]=q("div",{class:"perf-view__divider"},null,-1)),q("button",{class:"perf-view__exit-btn",onClick:x[1]||(x[1]=R=>he(n).togglePerformanceMode()),title:"Exit Performance Mode"}," ✕ Editor ")]),s.value?(ce(),me("div",V5,[q("canvas",{ref_key:"histCanvas",ref:o,class:"perf-view__hist-canvas",width:"256",height:"60"},null,512)])):He("",!0),tt(U5)]))}},H5=ur($5,[["__scopeId","data-v-d2bb927e"]]),G5=`// Passthrough — renders texture as-is\r
precision highp float;\r
varying vec2 vUv;\r
uniform sampler2D uTexture;\r
\r
void main() {\r
  gl_FragColor = texture2D(uTexture, vUv);\r
}\r
`,W5=`// Reeded Glass — ribbed/fluted glass refraction\r
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
`,X5=`// Chromatic Aberration — RGB channel offset\r
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
`,Y5=`// Heightmap Displacement — displace pixels using a heightmap image\r
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
`,q5=`// Levels — shadows/midtones/highlights per-channel adjustment\r
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
`,K5=`// Surface Blur — edge-preserving bilateral filter approximation\r
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
`,Z5=`// Blend — combine two images with blend modes\r
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
`,j5=`// Feedback Loop — blend current frame with previous frame\r
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
`,J5=`// UV Generator — outputs UV coordinates as color (R=U, G=V)\r
precision highp float;\r
varying vec2 vUv;\r
\r
void main() {\r
  gl_FragColor = vec4(vUv.x, vUv.y, 0.0, 1.0);\r
}\r
`,Q5=`// UV Transform — scale, rotate, translate UVs\r
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
`,ez=`// UV Repeat — tile image with mirror/offset options\r
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
`,tz=`// UV Glitch — random block displacement of UV coordinates\r
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
`,nz=`// UV Polar — cartesian to polar and polar to cartesian conversion\r
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
`,iz=`varying vec2 vUv;\r
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
`,rz=`varying vec2 vUv;\r
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
`,oz=`varying vec2 vUv;\r
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
`,sz=`varying vec2 vUv;\r
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
`,az=`varying vec2 vUv;\r
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
`,lz=`// Liquid Deform — swirling polar texture deformation\r
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
`,uz=`// ASCII Art — bitmap glyph post-processing effect\r
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
`,cz=`// ASCII Art v2 — bitmap glyphs with palette color matching\r
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
`,dz=`// Fisheye / Antifisheye — barrel and pincushion lens distortion\r
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
`,fz=`// Smooth Noise Contours — antialiased simplex noise contour lines\r
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
`,hz=`
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position, 1.0);
}
`,pz={passthrough:G5,reededGlass:W5,chromaticAberration:X5,displacement:Y5,levels:q5,surfaceBlur:K5,blend:Z5,feedback:j5,uvGenerator:J5,uvTransform:Q5,uvRepeat:ez,uvGlitch:tz,uvPolar:nz,diffusion:iz,xerox:rz,crt:oz,motionBlur:sz,dithering:az,liquidDeform:lz,ascii:uz,asciiV2:cz,fisheye:dz,noiseContours:fz},uv=20;class mz{constructor(){this.renderer=null,this.scene=null,this.camera=null,this.quad=null,this.fbos={},this.materials={},this.textures={},this.feedbackFBOs={},this.width=512,this.height=512,this.isInitialized=!1}init(e,n,i){this.width=n||512,this.height=i||512,this.renderer=new dC({canvas:e,alpha:!0,preserveDrawingBuffer:!0,antialias:!1}),this.renderer.setSize(this.width,this.height),this.renderer.autoClear=!1,this.camera=new Fh(-1,1,1,-1,0,1);const r=new La(2,2);this.scene=new ZS,this.quad=new bi(r,null),this.scene.add(this.quad),this.isInitialized=!0}resize(e,n){this.width=e,this.height=n,this.renderer&&this.renderer.setSize(e,n);for(const[i,r]of Object.entries(this.fbos))r.setSize(e,n);for(const[i,r]of Object.entries(this.feedbackFBOs))r.current.setSize(e,n),r.previous.setSize(e,n)}setInputTexture(e,n){n.colorSpace=kr,n.minFilter=Rt,n.magFilter=Rt,this.textures[e]=n}getOrCreateFBO(e){if(this.fbos[e])return this.fbos[e];if(Object.keys(this.fbos).length>=uv)return console.warn(`Max FBO count (${uv}) reached. Cannot create FBO for node ${e}`),null;const n=new Mn(this.width,this.height,{minFilter:Rt,magFilter:Rt,format:xn,type:_n,colorSpace:kr});return this.fbos[e]=n,n}getOrCreateFeedbackFBOs(e){if(this.feedbackFBOs[e])return this.feedbackFBOs[e];const n={minFilter:Rt,magFilter:Rt,format:xn,type:_n};return this.feedbackFBOs[e]={current:new Mn(this.width,this.height,n),previous:new Mn(this.width,this.height,n)},this.feedbackFBOs[e]}getOrCreateMaterial(e,n,i){let r=pz[n];if(!r)return this.getOrCreateMaterial(e,"passthrough",i);if(n!=="passthrough"&&n!=="feedback"){const a=r.includes("uniform sampler2D uIn;"),l=r.includes("uniform sampler2D uTexture;");if(a||l){const u=a?"uIn":"uTexture";r=r.replace("void main()",`uniform float uBlendAmount;
void main()`),r=r.replace(/gl_FragColor\s*=\s*([^;]+);([^;]*)$/,`vec4 effectColor = $1;
  vec4 originalColor = texture2D(${u}, vUv);
  gl_FragColor = mix(originalColor, effectColor, uBlendAmount);$2`)}}if(this.materials[e]&&this.materials[e]._shaderKey===n){const a=this.materials[e];let l=!1;for(const[u,c]of Object.entries(i))a.uniforms[u]?a.uniforms[u].value=c:(a.uniforms[u]={value:c},l=!0);return l&&(a.needsUpdate=!0),a}this.materials[e]&&this.materials[e].dispose();const o={};for(const[a,l]of Object.entries(i))o[a]={value:l};const s=new Qn({vertexShader:hz,fragmentShader:r,uniforms:o,depthTest:!1,depthWrite:!1});return s._shaderKey=n,this.materials[e]=s,s}renderNode(e,n,i){this.quad.material=n,i?this.renderer.setRenderTarget(i):this.renderer.setRenderTarget(null),this.renderer.clear(),this.renderer.render(this.scene,this.camera)}removeNodeResources(e){this.fbos[e]&&(this.fbos[e].dispose(),delete this.fbos[e]),this.materials[e]&&(this.materials[e].dispose(),delete this.materials[e]),this.textures[e]&&(this.textures[e].dispose(),delete this.textures[e]),this.feedbackFBOs[e]&&(this.feedbackFBOs[e].current.dispose(),this.feedbackFBOs[e].previous.dispose(),delete this.feedbackFBOs[e])}execute(e,n,i,r,o,s,a){if(!this.isInitialized||!this.renderer)return;const l={};for(const h of n)l[h.id]=h;const u={};for(const h of i)u[h.target]||(u[h.target]=[]),u[h.target].push({sourceNodeId:h.source,sourceHandle:h.sourceHandle,targetHandle:h.targetHandle});let c=null;const d={};for(const h of e){const m=l[h];if(!m)continue;const v=en(m.type);if(!v)continue;const g=r[h]||{};if(m.type==="imageInput"||m.type==="imageOutput"||m.type==="pixelSort")continue;if(g._bypass){const _=u[h]||[];for(const x of _){const R=l[x.sourceNodeId];if(!R)continue;let T=null;if(R.type==="imageInput"?T=this.textures[x.sourceNodeId]||null:this.fbos[x.sourceNodeId]&&(T=this.fbos[x.sourceNodeId].texture),T){const A=this.getOrCreateFBO(h);if(A){const X=this.getOrCreateMaterial(h,"passthrough",{uTexture:T});this.renderNode(h,X,A),c=A}break}}d[h]=0;continue}const p=u[h]||[],b={uTime:a,uResolution:new Tt(this.width,this.height)};for(const _ of v.inputs)if(_.type==="image"){const x="u"+_.id.charAt(0).toUpperCase()+_.id.slice(1);b[x+"Connected"]=!1,b[x]=null}let M=!1;for(const _ of p){const x=l[_.sourceNodeId];if(!x||!en(x.type))continue;let T=null;if(x.type==="imageInput"||x.type==="uiImageSlot"||x.type==="webcamInput"?T=this.textures[_.sourceNodeId]||null:this.fbos[_.sourceNodeId]&&(T=this.fbos[_.sourceNodeId].texture),T&&(M=!0,v.inputs.find(X=>X.id===_.targetHandle))){const X="u"+_.targetHandle.charAt(0).toUpperCase()+_.targetHandle.slice(1);b[X]=T,b[X+"Connected"]=!0}if(o[_.sourceNodeId]){const A=o[_.sourceNodeId][_.sourceHandle];if(A!==void 0){const X=v.inputs.find(k=>k.id===_.targetHandle),E=!X&&v.params[_.targetHandle];(X||E)&&(g[_.targetHandle]=A)}}}if(!M&&v.inputs.some(_=>_.type==="image"))continue;for(const[_,x]of Object.entries(g)){const R=v.params[_];if(!R)continue;const T="u"+_.charAt(0).toUpperCase()+_.slice(1);if(R.type==="float"||R.type==="int")b[T]=Number(x);else if(R.type==="bool")b[T]=x?1:0;else if(R.type==="select"){const A=R.options||[];b[T]=A.indexOf(x)}else R.type==="color"&&(b[T]=new Et(x))}if(m.type==="feedbackLoop"){const _=this.getOrCreateFeedbackFBOs(h);b.uPreviousFrame=_.previous.texture,b.uDecay=g.decay??.9,b.uBlendMode=["normal","add","multiply"].indexOf(g.blendMode??"normal");const x=this.getOrCreateMaterial(h,"feedback",b),R=Math.min(g.iterations??1,100);for(let T=0;T<R;T++){this.renderNode(h,x,_.current);const A=_.previous;_.previous=_.current,_.current=A,x.uniforms.uPreviousFrame.value=_.previous.texture}this.fbos[h]=_.previous,c=_.previous;continue}const y=v.shaderKey;if(!y)continue;const I=this.getOrCreateFBO(h);if(!I)continue;const D=performance.now(),B=this.getOrCreateMaterial(h,y,b);this.renderNode(h,B,I),d[h]=performance.now()-D,c=I}const f=s&&this.fbos[s]?this.fbos[s]:c;if(f){this.materials.__preview__&&(this.materials.__preview__.uniforms.uTexture.value=f.texture);const h=this.getOrCreateMaterial("__preview__","passthrough",{uTexture:f.texture});this.renderNode("__preview__",h,null)}return this.perfTimings=d,d}readPixels(e){const n=this.fbos[e];if(!n||!this.renderer)return null;const i=new Uint8Array(this.width*this.height*4);return this.renderer.readRenderTargetPixels(n,0,0,this.width,this.height,i),{pixels:i,width:this.width,height:this.height}}getScaledPixels(e,n,i){const r=this.getNodeTexture(e);if(!r||!this.renderer)return null;(!this._previewFBO||this._previewFBO.width!==n||this._previewFBO.height!==i)&&(this._previewFBO&&this._previewFBO.dispose(),this._previewFBO=new Mn(n,i,{minFilter:Rt,magFilter:Rt,format:xn,type:_n}));const o=this.getOrCreateMaterial("__preview_scale__","passthrough",{uTexture:r});this.renderNode("__preview_scale__",o,this._previewFBO);const s=new Uint8Array(n*i*4);return this.renderer.readRenderTargetPixels(this._previewFBO,0,0,n,i,s),{pixels:s,width:n,height:i}}getNodeTexture(e){return this.textures[e]?this.textures[e]:this.fbos[e]?this.fbos[e].texture:null}removeNode(e){this.fbos[e]&&(this.fbos[e].dispose(),delete this.fbos[e]),this.materials[e]&&(this.materials[e].dispose(),delete this.materials[e]),this.textures[e]&&(this.textures[e].dispose(),delete this.textures[e]),this.feedbackFBOs[e]&&(this.feedbackFBOs[e].current.dispose(),this.feedbackFBOs[e].previous.dispose(),delete this.feedbackFBOs[e])}dispose(){for(const e of Object.values(this.fbos))e.dispose();for(const e of Object.values(this.materials))e.dispose();for(const e of Object.values(this.textures))e.dispose();for(const e of Object.values(this.feedbackFBOs))e.current.dispose(),e.previous.dispose();this.fbos={},this.materials={},this.textures={},this.feedbackFBOs={},this.renderer&&this.renderer.dispose()}}class gz{constructor(){this.isRunning=!1,this.startTime=0,this.lastTime=0,this.time=0,this.deltaTime=0,this.frameId=null,this.customWindow=null,this.callbacks=[]}onFrame(e){return this.callbacks.push(e),()=>{this.callbacks=this.callbacks.filter(n=>n!==e)}}start(){this.isRunning||(this.isRunning=!0,this.startTime=performance.now()/1e3,this.lastTime=this.startTime,this._tick())}stop(){this.isRunning=!1,this.frameId!==null&&(cancelAnimationFrame(this.frameId),this.frameId=null)}reset(){this.startTime=performance.now()/1e3,this.time=0,this.deltaTime=0}_tick(){if(!this.isRunning)return;const e=performance.now()/1e3;this.deltaTime=e-this.lastTime,this.time=e-this.startTime,this.lastTime=e;for(const i of this.callbacks)i(this.time,this.deltaTime);const n=this.customWindow||window;this.frameId=n.requestAnimationFrame(()=>this._tick())}}let Pl=null,Ir=null,jl=null,sh=!1;function ax(){if(!Pl)try{const t=window.AudioContext||window.webkitAudioContext;Pl=new t,Ir=Pl.createAnalyser(),Ir.fftSize=512,Ir.smoothingTimeConstant=.8,jl=new Uint8Array(Ir.frequencyBinCount),navigator.mediaDevices.getUserMedia({audio:!0,video:!1}).then(e=>{Pl.createMediaStreamSource(e).connect(Ir),sh=!0}).catch(e=>console.warn("Audio FFT access denied or error:",e))}catch(t){console.warn("Audio context not supported",t)}}function vz(t,e){const n={},i={};for(const s of t)n[s.id]=0,i[s.id]=[];for(const s of e)i[s.source]&&(i[s.source].push(s.target),n[s.target]=(n[s.target]||0)+1);const r=[];for(const s of t)n[s.id]===0&&r.push(s.id);const o=[];for(;r.length>0;){const s=r.shift();o.push(s);for(const a of i[s]||[])n[a]--,n[a]===0&&r.push(a)}return o.length!==t.length&&console.warn("Cycle detected in graph — some nodes skipped"),o}function _z(t,e,n){const i={};for(const r of e)if(r.target===t){const o=n[r.source];o&&(i[r.targetHandle]={sourceNodeId:r.source,sourceHandleId:r.sourceHandle,value:o[r.sourceHandle]})}return i}function yz(t,e,n,i,r,o){const s={};for(const l of e)s[l.id]=l;const a={};for(const l of t){const u=s[l];if(!u)continue;const c=en(u.type);if(!c||(c.category==="image"||c.category==="uv")&&u.type!=="preview"&&u.type!=="webcamInput")continue;const d=i[l]||{},f=_z(l,n,a),h={};switch(u.type){case"lfo":{const m=d.frequency??1,v=d.amplitude??1,g=d.offset??0,p=(d.phase??0)*Math.PI/180,b=r*m*Math.PI*2+p,M=d.waveform??"sine";let y=0;M==="sine"?y=Math.sin(b):M==="saw"?y=2*(b/(Math.PI*2)%1)-1:M==="square"?y=Math.sin(b)>=0?1:-1:M==="triangle"&&(y=2*Math.abs(2*(b/(Math.PI*2)%1)-1)-1),h.out=y*v+g;break}case"timer":{const m=d.speed??1,v=d.loop??!1,g=d.loopDuration??5;let p=r*m;v&&g>0&&(p=p%g),h.out=p;break}case"random":{const m=d.min??0,v=d.max??1,g=d.seed??42,p=d.triggerInterval??.5,b=Math.max(0,Math.min(.999,d.damping??0)),M=f.trigger?.value??0,y=n.some(_=>_.target===l&&_.targetHandle==="trigger"),I=u._prevRandTrigger??0;let D=!1;if(y)M>0&&I<=0&&(D=!0),u._prevRandTrigger=M;else{const _=u._lastFireTime??-p;r-_>=p&&(D=!0)}if(D||u._randTarget===void 0){u._randSeedCounter=(u._randSeedCounter??0)+1;const _=Math.sin(g+u._randSeedCounter*12.9898)*43758.5453,x=_-Math.floor(_);u._randTarget=m+x*(v-m),u._lastFireTime=r}const B=u._randCurrentValue??u._randTarget;b>0?u._randCurrentValue=B+(u._randTarget-B)*(1-b):u._randCurrentValue=u._randTarget,h.out=u._randCurrentValue;break}case"damper":{const m=f.target?.value??0,v=Math.max(0,Math.min(.999,d.smoothing??.9)),g=u._damperValue??m,p=g+(m-g)*(1-v);u._damperValue=p,h.out=p;break}case"fft":{sh||ax();const m=d.smoothing??.8,v=d.gain??1;if(sh&&Ir&&jl){Ir.smoothingTimeConstant=m,Ir.getByteFrequencyData(jl);let g=0,p=0,b=0,M=0;for(let y=0;y<256;y++){const I=jl[y]/255;y<=10?g+=I:y<=50?p+=I:y<=120?b+=I:M+=I}h.bass=Math.min(g/11*v,1),h.lowMid=Math.min(p/40*v,1),h.mid=Math.min(b/70*v,1),h.high=Math.min(M/135*v,1)}else h.bass=0,h.lowMid=0,h.mid=0,h.high=0;break}case"button":case"bang":{h.out=u._triggered?1:0,u._triggered=!1;break}case"onStart":{u._hasTriggered?h.out=0:(u._hasTriggered=!0,h.out=1);break}case"toggle":{const m=f.trigger?.value??0,v=u._prevTriggerVal??0;m>=.5&&v<.5&&(d.state=!d.state),u._prevTriggerVal=m,h.out=d.state?1:0;break}case"edgeTrigger":{const m=f.in?.value??!1,v=u._prevEdgeVal??!1,g=d.mode??"rising";let p=!1;g==="rising"&&!v&&m&&(p=!0),g==="falling"&&v&&!m&&(p=!0),g==="both"&&v!==m&&(p=!0),h.out=p?1:0,u._prevEdgeVal=m;break}case"webcamInput":{h.trigger=f.trigger?.value??0;break}case"accelerometer":{const m=d.sensitivity??1,v=d.smoothing??.5,g=u._accelX??0,p=u._accelY??0,b=u._accelZ??0,M=u._smoothX??0,y=u._smoothY??0,I=u._smoothZ??0;u._smoothX=M+(g*m-M)*(1-v),u._smoothY=y+(p*m-y)*(1-v),u._smoothZ=I+(b*m-I)*(1-v),h.x=u._smoothX,h.y=u._smoothY,h.z=u._smoothZ;break}case"xyPad":{const m=d.x??.5,v=d.y??.5,g=d.minX??0,p=d.maxX??1,b=d.minY??0,M=d.maxY??1;h.x=g+m*(p-g),h.y=b+v*(M-b);break}case"changeTrigger":{const m=f.in?.value??0,v=d.threshold??.1;u._lastTriggerVal===void 0&&(u._lastTriggerVal=m);const g=u._lastTriggerVal;let p=!1;Math.abs(m-g)>=v&&(p=!0,u._lastTriggerVal=m),h.out=p?1:0;break}case"slider":case"knob":{const m=d.value??.5,v=d.outputType??"float";h.out=v==="int"?Math.round(m):m;break}case"compare":{const m=f.a?.value??0,v=f.b?.value??0,g=d.op??">";let p=!1;switch(g){case">":p=m>v;break;case"<":p=m<v;break;case">=":p=m>=v;break;case"<=":p=m<=v;break;case"==":p=m===v;break;case"!=":p=m!==v;break}h.out=p;break}case"valueCondition":{const m=f.cond?.value??!1,v=f.trueVal?.value??d.defaultTrue??1,g=f.falseVal?.value??d.defaultFalse??0;h.out=m?v:g;break}case"mathAdd":{const m=f.a?.value??0,v=f.b?.value??0;h.out=m+v;break}case"mathMultiply":{const m=f.a?.value??0,v=f.b?.value??1;h.out=m*v;break}case"mathDivide":{const m=f.a?.value??0,v=f.b?.value??1;h.out=v!==0?m/v:0;break}case"mathSqrt":{const m=f.a?.value??0;h.out=Math.sqrt(Math.abs(m));break}case"mathMap":{const m=f.value?.value??0,v=d.inMin??0,g=d.inMax??1,p=d.outMin??0,b=d.outMax??1,M=g!==v?(m-v)/(g-v):0;h.out=p+M*(b-p);break}case"mathClamp":{const m=f.value?.value??0,v=d.min??0,g=d.max??1;h.out=Math.min(Math.max(m,v),g);break}case"mathWrap":{const m=f.value?.value??0,v=d.min??0,p=(d.max??1)-v;if(p<=0){h.out=v;break}h.out=v+((m-v)%p+p)%p;break}case"floatToInt":{const m=f.in?.value??0,v=d.mode??"round";let g;v==="floor"?g=Math.floor(m):v==="ceil"?g=Math.ceil(m):v==="truncate"?g=Math.trunc(m):g=Math.round(m);const p=d.clampMin??-2147483648,b=d.clampMax??2147483647;h.out=Math.min(Math.max(g,p),b);break}case"intToFloat":{h.out=Number(f.in?.value??0);break}case"numberMonitor":{h.out=f.in?.value??0;break}}a[l]=h}return a}function xz(t,e){const n={};for(const i of e)n[i.id]=i;return t.filter(i=>{const r=n[i];if(!r)return!1;const o=en(r.type);return o?o.category==="image"||o.category==="uv":!1})}const bz={id:"app"},Sz={class:"main-layout"},Mz={class:"preview-background"},wz={key:0,class:"rotate-hint-overlay"},Ez={key:0,class:"rotate-hint-overlay"},Tz={__name:"App",setup(t){const e=Ao(),n=Ce(null),i=Ce(null),r=Ce(null),o=Ce(null),s=Ce(!1),a=Ce(!1);let l=null,u=null;const c=/Mobi|Android/i.test(navigator.userAgent)||window.innerWidth<768;function d(U,H,G=2500){U.value=!0,clearTimeout(H.value),H.value=setTimeout(()=>{U.value=!1},G)}lt(()=>e.isPerformanceMode,(U,H)=>{c&&(H&&!U?(d(s,{value:l}),l=setTimeout(()=>{s.value=!1},2500),s.value=!0,e.previewMode!=="background"&&(e.previewMode="background")):!H&&U&&(a.value=!0,clearTimeout(u),u=setTimeout(()=>{a.value=!1},2500)))});function f(){ax(),window.removeEventListener("click",f),window.removeEventListener("keydown",f)}let h=null,m=null,v=null;const g=Ce(0);let p=0,b=0;const M={};let y=null,I=null,D=null;function B(){if(I&&!I.closed){I.focus();return}if(I=window.open("","ImageManglerPopup","width=800,height=600,menubar=no,toolbar=no,location=no,status=no"),!I){alert("Popup blocked! Please allow popups to open the external renderer.");return}I.document.write(`
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
  `),I.document.close(),setTimeout(()=>{const U=I.document.getElementById("out");U&&(D=U.getContext("2d"))},50),m&&(m.customWindow=I),I.addEventListener("beforeunload",()=>{m&&(m.customWindow=null),I=null,D=null})}bn(async()=>{await pn(),window.addEventListener("click",f),window.addEventListener("keydown",f),window.addEventListener("keydown",_),c&&(e.isPerformanceMode=!0);const U=i.value?.getCanvas?.();U&&(h=new mz,h.init(U,512,512)),r.value&&(y=r.value.getContext("2d")),e.onNodeRemoved(H=>{h&&h.removeNodeResources(H),delete M[H]}),b=performance.now(),m=new gz,v=m.onFrame((H,G)=>{if(!e.isRendering)return;p++;const ne=performance.now();ne-b>=500&&(g.value=Math.round(p/(ne-b)*1e3),p=0,b=ne),x(H)}),m.start(),await e.loadFromLocalStorage()}),Hr(()=>{v&&v(),m&&m.stop(),h&&h.dispose(),window.removeEventListener("keydown",_),window.removeEventListener("orientationchange",checkPortrait),window.removeEventListener("resize",checkPortrait),clearTimeout(rotateHintTimer)});function _(U){U.target.tagName==="INPUT"||U.target.tagName==="TEXTAREA"||U.target.tagName==="SELECT"||(U.key==="p"||U.key==="P")&&(U.preventDefault(),e.togglePerformanceMode())}function x(U,H){if(!h?.isInitialized)return;const G=e.nodes,ne=e.edges,re=e.nodeParams;if(G.length===0){y&&r.value&&y.clearRect(0,0,r.value.width,r.value.height);return}const ye=vz(G,ne),we=yz(ye,G,ne,re,U);e.dataOutputs=we;const te=["lfo","timer","damper","fft","xypad","accelerometer"];for(const Q of e.perfGridCells){if(!Q.boundNodeId||!te.includes(Q.controlType))continue;const fe=we[Q.boundNodeId];fe&&(Q.controlType==="xypad"?(Q.boundParamKey&&Q.boundTargetNodeId&&e.setParam(Q.boundTargetNodeId,Q.boundParamKey,fe.x??.5),Q.boundParamKeyY&&Q.boundTargetNodeIdY&&e.setParam(Q.boundTargetNodeIdY,Q.boundParamKeyY,fe.y??.5)):Q.controlType==="fft"?Q.boundParamKey&&Q.boundTargetNodeId&&e.setParam(Q.boundTargetNodeId,Q.boundParamKey,fe.bass??0):Q.controlType==="accelerometer"?Q.boundParamKey&&Q.boundTargetNodeId&&e.setParam(Q.boundTargetNodeId,Q.boundParamKey,fe.x??0):Q.boundParamKey&&Q.boundTargetNodeId&&e.setParam(Q.boundTargetNodeId,Q.boundParamKey,fe.out??0))}const L=xz(ye,G),j=h.execute(L,G,ne,re,we,e.previewNodeId,U);if(e.perfTimings=j||{},e.previewMode==="background"&&y&&r.value){const Q=i.value?.getCanvas?.();Q&&Q.width>0&&Q.height>0&&((r.value.width!==Q.width||r.value.height!==Q.height)&&(r.value.width=Q.width,r.value.height=Q.height),y.clearRect(0,0,r.value.width,r.value.height),y.drawImage(Q,0,0))}if(I&&!I.closed&&D){const Q=i.value?.getCanvas?.();if(Q&&Q.width>0&&Q.height>0){const fe=D.canvas;(fe.width!==Q.width||fe.height!==Q.height)&&(fe.width=Q.width,fe.height=Q.height),D.clearRect(0,0,fe.width,fe.height),D.drawImage(Q,0,0)}}if(e.isPerformanceMode&&o.value?.perfCanvasRef){const Q=i.value?.getCanvas?.(),fe=o.value.perfCanvasRef;if(Q&&Q.width>0&&Q.height>0){(fe.width!==Q.width||fe.height!==Q.height)&&(fe.width=Q.width,fe.height=Q.height);const Se=fe.getContext("2d");Se.clearRect(0,0,fe.width,fe.height),Se.drawImage(Q,0,0)}}}function R(U){if(n.value&&n.value.addNodeAtCenter)n.value.addNodeAtCenter(U);else{const H=300+Math.random()*200,G=200+Math.random()*200;e.addNode(U,{x:H,y:G})}}function T(U,H){if(!h)return;M[U]=H;let G;H.isVideo?(G=new aM(H.img),G.minFilter=Rt,G.magFilter=Rt,G.format=xn):(G=new rn(H.img),G.needsUpdate=!0),h.setInputTexture(U,G),A(U),h.resize(H.width,H.height),i.value&&(i.value.width=H.width,i.value.height=H.height)}function A(U){if(!h)return;const H=new Set,G=[U];for(;G.length;){const ne=G.shift();if(!H.has(ne)){H.add(ne);for(const re of e.edges)re.source===ne&&!H.has(re.target)&&(h.fbos[re.target]&&(h.fbos[re.target].dispose(),delete h.fbos[re.target]),h.materials[re.target]&&(h.materials[re.target].dispose(),delete h.materials[re.target]),G.push(re.target))}}}function X(U){if(!h)return;const H=e.edges.filter(Ee=>Ee.target===U);let G=null;for(const Ee of H)if(Ee.targetHandle==="in"){G=Ee.source;break}if(!G){alert("No image connected to output node");return}const ne=h.readPixels(G);if(!ne){alert("Could not read pixels — make sure an image is connected and the pipeline has run");return}const{pixels:re,width:ye,height:we}=ne,L=(e.nodeParams[U]||{}).filename||e.projectTitle||"output",j=document.createElement("canvas");j.width=ye,j.height=we;const Q=j.getContext("2d"),fe=Q.createImageData(ye,we);for(let Ee=0;Ee<we;Ee++)for(let $=0;$<ye;$++){const W=((we-1-Ee)*ye+$)*4,F=(Ee*ye+$)*4;fe.data[F]=re[W],fe.data[F+1]=re[W+1],fe.data[F+2]=re[W+2],fe.data[F+3]=re[W+3]}Q.putImageData(fe,0,0);const Se=L.replace(/[^a-zA-Z0-9_-]/g,"_");j.toBlob(Ee=>{if(!Ee)return;const $=URL.createObjectURL(Ee),W=document.createElement("a");W.href=$,W.download=`${Se}.png`,W.click(),URL.revokeObjectURL($)},"image/png")}function E(){e.saveToLocalStorage()}async function k(){await e.loadFromLocalStorage()||alert("No saved graph found")}function C(U){e.loadGraph(U)||alert("Failed to import graph — invalid JSON")}function N(){confirm("Clear entire graph? This cannot be undone.")&&(e.resetGraph(),Object.keys(M).forEach(U=>delete M[U]))}return(U,H)=>(ce(),me("div",bz,[Nr(tt(bC,{"is-rendering":he(e).isRendering,"preview-mode":he(e).previewMode,"project-title":he(e).projectTitle,"show-shadows":he(e).showShadows,"is-performance-mode":he(e).isPerformanceMode,onSave:E,onLoad:k,onDownload:H[0]||(H[0]=G=>he(e).downloadGraph()),onImport:C,onReset:N,onToggleRender:H[1]||(H[1]=G=>he(e).toggleRendering()),onTogglePreview:H[2]||(H[2]=G=>he(e).togglePreviewMode()),onToggleShadows:H[3]||(H[3]=G=>he(e).showShadows=!he(e).showShadows),onOpenPopup:B,onUpdateTitle:H[4]||(H[4]=G=>he(e).projectTitle=G),onUpdateBgOpacity:H[5]||(H[5]=G=>he(e).bgOpacity=G),onTogglePerformance:H[6]||(H[6]=G=>he(e).togglePerformanceMode())},null,8,["is-rendering","preview-mode","project-title","show-shadows","is-performance-mode"]),[[Dr,!he(e).isPerformanceMode]]),he(e).isPerformanceMode?(ce(),Jt(H5,{key:0,ref_key:"perfViewRef",ref:o,fps:g.value},null,8,["fps"])):He("",!0),Nr(q("div",Sz,[tt(DC,{onAddNode:R}),q("div",{class:ut(["editor-area",{"editor-area--bg-mode":he(e).previewMode==="background"}])},[Nr(q("div",Mz,[q("canvas",{ref_key:"bgCanvasRef",ref:r},null,512),q("div",{class:"preview-background__overlay",style:rt({opacity:he(e).bgOpacity})},null,4)],512),[[Dr,he(e).previewMode==="background"]]),tt(yk,{ref_key:"editorRef",ref:n,class:ut({"editor-canvas--no-shadows":!he(e).showShadows}),onImageLoaded:T,onExportImage:X},null,8,["class"]),Nr(tt(Ck,{ref_key:"previewRef",ref:i,"is-rendering":he(e).isRendering,fps:g.value,"preview-mode":he(e).previewMode},null,8,["is-rendering","fps","preview-mode"]),[[Dr,he(e).previewMode==="anchored"||he(e).previewMode==="floating"]])],2),tt(m4)],512),[[Dr,!he(e).isPerformanceMode]]),tt(Bp,{name:"rotate-hint"},{default:cn(()=>[s.value?(ce(),me("div",wz,[...H[7]||(H[7]=[q("div",{class:"rotate-hint__icon",style:{"animation-name":"hint-rotate-landscape"}},"📱",-1),q("div",{class:"rotate-hint__text"},"Rotate to landscape for Editor mode",-1)])])):He("",!0)]),_:1}),tt(Bp,{name:"rotate-hint"},{default:cn(()=>[a.value?(ce(),me("div",Ez,[...H[8]||(H[8]=[q("div",{class:"rotate-hint__icon"},"📱",-1),q("div",{class:"rotate-hint__text"},"Rotate to portrait for Performance mode",-1)])])):He("",!0)]),_:1})]))}},lx=H1(Tz);lx.use(X1());lx.mount("#app");
